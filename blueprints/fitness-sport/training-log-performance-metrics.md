---
id: fitness-sport.training-log-performance-metrics
name: Training Log & Performance Metrics
description: "An honest training log with fixed fields and a two-minute entry habit, weekly and monthly summaries, effort and load numbers you understand, and block reviews that turn months of sessions into decisions."
category: personal
version: 1.0.0
tags: [fitness-sport, training-log-performance-metrics, athlete, everyone, training-diary, session-rpe, training-load, progress-tracking]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - habit-tracker
    - training-program
    - purchase-decision
  pillars:
    - name: Fitness & Sport
      emoji: "🏋️"
      description: "Training, play and competition: building strength, endurance and skill in a sport or a gym, structuring blocks of work around events, recovering properly, and keeping the sessions honest with a log rather than a feeling."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Training Log & Performance Metrics
          description: "Keeping an honest training log of sessions, weights, paces and how you felt, and turning it into trends that guide your next block."
          projects:
            - name: Choosing where your training log will live
              description: |-
                ## Purpose
                Whether a log survives depends mostly on where it lives and how fast it opens after a session. A paper notebook is quick in a basement gym with no signal, a spreadsheet gives you charts and full control, and a training app pulls watch data in automatically but can hold your history hostage. Deciding now, with your real training week in mind, saves a painful migration later.

                ## Milestones
                1. Your typical week written down: where you train, what you record now and which devices you wear.
                2. A notebook, a spreadsheet and two apps compared on speed of entry, export options and cost.
                3. One home for the log chosen, with the reason written in a sentence.
                4. This week's sessions entered in the chosen tool.

                ## Notes
                Whatever you choose, check before committing that it exports your full history to a CSV or similar file. A tool with no export is a tool you can never leave.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One tool chosen for the training log, with a confirmed full-history export option and this week's sessions already entered in it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down where you train and what you currently record after sessions"
                - "Check whether each candidate app exports your full history to CSV"
                - "Enter yesterday's session in two tools and time how long each takes"
                - "Record your choice and the reason at the top of the new log"
            - name: Minimum fields for every session entry
              description: |-
                ## Purpose
                Logs fail in two directions: so sparse that nothing can be learned from them, or so detailed that each entry takes ten minutes and logging stops after a fortnight. Settling on six to eight fixed fields, such as date, session type, main work, duration, effort, sleep and a one-line note, gives you data you can compare across months while keeping each entry under two minutes.

                ## Milestones
                1. A list of no more than eight fields that every entry carries.
                2. A main work format for each kind of training, such as sets by reps by load for lifting and distance with time for cardio.
                3. A blank entry template saved where you log.
                4. Five real sessions entered with the template and no field skipped.

                ## Notes
                Start from the **Metrics log** template. Add a field only when you can name the question it will answer.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A saved entry template of eight fields or fewer, used for five consecutive sessions with every field filled in."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Draft every field you might record for today's session"
                - "Cut the list to eight fields or fewer"
                - "Write the main work format for each kind of training you do"
                - "Save a blank entry template in your log"
                - "Fill in the template after each of your next five sessions"
            - name: Back-filling the last eight weeks of training
              description: |-
                ## Purpose
                Starting a log from today means waiting months before any trend appears. Most people already have eight weeks of data scattered across a watch, a gym app, messages to a training partner and their calendar, and pulling it together now gives you a first trend line within days.

                ## Milestones
                1. Every source holding recent training listed, from watch history to calendar entries.
                2. Eight weeks of sessions entered with date, type and duration at minimum.
                3. Gaps that cannot be recovered marked as unknown rather than guessed.
                4. A weekly totals line covering all eight weeks.

                ## Notes
                Do not invent loads or paces you cannot remember. A blank cell is honest data; a guessed one quietly corrupts every later average.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Eight weeks of past sessions entered with date, type and duration, unknown weeks marked, and weekly totals calculated."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every app, device and calendar holding training from the past eight weeks"
                - "Export or screenshot the watch history for that period"
                - "Enter each recovered session with date, type and duration"
                - "Mark any week you cannot reconstruct as unknown"
                - "Add up weekly totals for all eight weeks"
            - name: Current bests and starting numbers page
              description: |-
                ## Purpose
                Progress is measured against something, and most people carry their best numbers in their heads, slightly flattered by memory. Gathering recent bests from your records onto one page, with the date and conditions of each, gives every later comparison a fixed and honest reference point.

                ## Milestones
                1. Recent best lifts, paces or times collected from records, each with its date.
                2. Each number labelled as recorded, estimated or remembered.
                3. Resting pulse and body weight noted as context, if you track them.
                4. The page pinned at the front of the log.

                ## Notes
                Use bests from the last twelve months only. A best from five years ago belongs in a history section, not as today's reference.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A starting numbers page at the front of the log listing each recent best with its date, conditions and source label."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Search your watch and gym app history for your best recent efforts"
                - "Write each best with its date, conditions and source"
                - "Label each number as recorded, estimated or remembered"
                - "Pin the page at the front of your log"
            - name: Exercise names, units and abbreviations list
              description: |-
                ## Purpose
                Squat, back squat, BS and squats written in different weeks make a log impossible to filter or chart, and mixing kilograms with pounds or miles with kilometres produces nonsense averages. A short dictionary of exercise names, units and abbreviations, fixed now, keeps every future search and chart clean.

                ## Milestones
                1. One agreed name for every exercise and session type you do regularly.
                2. Units fixed for load, distance, pace and body weight.
                3. Abbreviations listed with their meaning.
                4. Existing entries renamed to match the list.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A naming and units list saved in the log, with every existing entry using only the agreed names and units."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every exercise and session type that appears in your log"
                - "Choose one name for each and note the variants it replaces"
                - "Decide on units for load, distance, pace and body weight"
                - "Rename old entries so they match the list"
            - name: Device and app data flow map
              description: |-
                ## Purpose
                Watches, chest straps, bike computers, gym apps and phone health apps often sync to each other, double counting some sessions and silently dropping others. Drawing one map of what records what, and where it flows, lets you name a single source of truth and switch off the duplicate connections.

                ## Milestones
                1. Every device and app that records training listed.
                2. Arrows drawn showing which syncs to which.
                3. One source of truth named for each type of data.
                4. Duplicate or broken syncs switched off, with a test session confirming the fix.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written map of devices and syncs with one source of truth per data type, and a test session appearing exactly once in the log."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every device and app that records any of your training"
                - "Check each app's connected services page and note the links"
                - "Choose one app as the master record for each data type"
                - "Switch off duplicate syncs and log a test session to confirm"
            - name: Three numbers that match your training goal
              description: |-
                ## Purpose
                Modern devices produce dozens of metrics, and watching all of them means acting on none. Choosing three numbers tied directly to your goal, for example weekly distance, long run pace and resting pulse for a half marathon, or estimated squat max, weekly hard sets and body weight for strength, focuses every review on what matters.

                ## Milestones
                1. Your main goal for the next six months written in one sentence.
                2. Three numbers chosen that would show progress toward it.
                3. The source and update rhythm of each number written beside it.
                4. The three numbers placed at the top of the log.

                ## Notes
                Pick at least one number that shows output, such as a pace or a load, and one that shows input, such as weekly volume. Output alone hides why things changed.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A six-month goal and three named numbers, each with its source and update rhythm, written at the top of the log."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write your main training goal for the next six months in one sentence"
                - "List every number you could track toward it"
                - "Pick the three that would change your training if they moved"
                - "Write the source and update rhythm beside each of the three"
            - name: Privacy settings on public training apps
              description: |-
                ## Purpose
                Public activity maps show where runs and rides start and finish, and those points are usually your front door, your workplace or a child's school. Ten minutes spent on privacy zones, follower approval and default visibility protects your address and routine without giving up the social side of the app.

                ## Milestones
                1. Default visibility for new activities set to followers or private.
                2. Privacy zones hiding start and finish points around home and work.
                3. Follower list reviewed and unknown accounts removed.
                4. Old public activities that reveal your address hidden or edited.

                ## Notes
                Group runs and rides can reveal your route through other people's uploads. Ask regular partners to use privacy zones too.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every app that shares activities has privacy zones around home and work and a non-public default, checked on a fresh upload."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Open the privacy settings in every app that shares your activities"
                - "Set privacy zones around your home and workplace"
                - "Change default visibility for new activities to followers only"
                - "Remove followers you do not know"
                - "Recheck privacy settings after app updates @recurring(quarterly)"
            - name: Logging within an hour of every session
              description: |-
                ## Purpose
                Details fade fast: by the next day you remember that the session felt hard but not which set it fell apart on. Making the entry part of the cool-down, before the shower or the drive home, is the single habit that decides whether the log stays honest.

                ## Milestones
                1. A fixed logging moment chosen, such as straight after the last set or in the car park.
                2. The log reachable within two taps from your phone home screen.
                3. Twenty consecutive sessions logged within an hour of finishing.
                4. A habit tracker showing the streak.

                ## Notes
                Start from the **Habit tracker** template. On days you train twice, log each session separately so effort and notes do not blur.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twenty consecutive sessions logged within an hour of finishing, shown as an unbroken streak in the habit tracker."
                cadence: rolling
              tasks:
                - "Put the training log on your phone home screen"
                - "Choose the exact moment after training when you will log"
                - "Log today's session, or mark a rest day, within an hour @recurring(daily)"
                - "Mark the logging streak in the habit tracker at the end of each week"
            - name: Sunday weekly training summary
              description: |-
                ## Purpose
                Individual sessions are noisy; the week is the unit that shows whether training is building or drifting. A ten-minute summary each Sunday, covering sessions done, total time or distance, average effort and one line on what stood out, becomes the raw material for every monthly and block review.

                ## Milestones
                1. A weekly summary format with five fixed lines.
                2. Four consecutive weekly summaries written.
                3. Weekly totals kept in one running table rather than scattered across notes.
                4. One action for the coming week written at the end of each summary.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive Sunday summaries written in the same five-line format, each ending with one action for the next week."
                cadence: rolling
              tasks:
                - "Write the five lines your weekly summary will always include"
                - "Add a running table of weekly totals to the log"
                - "Write the weekly summary and one action for next week @recurring(weekly:sun)"
                - "Ask the agent to compare this week's summary with the previous four"
            - name: Session RPE load and week-on-week change
              description: |-
                ## Purpose
                Multiplying a session's effort rating by its length in minutes gives one load number that works across running, lifting, classes and sport, so a hard 40 minute circuit and an easy 90 minute ride sit on the same chart. Tracking the weekly total and its change from the week before shows sudden jumps that a list of sessions hides.

                ## Milestones
                1. A load column calculating effort rating times minutes for every session.
                2. A weekly load total and its percentage change from the previous week.
                3. Eight weeks of load totals charted.
                4. Weeks with unusually large jumps marked for discussion with a coach or physiotherapist if you have one.

                ## Notes
                There is no universal safe weekly increase. Use the chart to notice jumps and talk them through, not as a rule that predicts injury.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly load chart covering at least eight weeks, updated every Monday, with large jumps marked."
                cadence: rolling
              tasks:
                - "Add a load column that multiplies effort rating by session minutes"
                - "Add a weekly load total and its change from the week before"
                - "Chart weekly load totals for the last eight weeks"
                - "Update the load chart and mark any large jump @recurring(weekly:mon)"
            - name: Morning line of resting pulse, sleep and soreness
              description: |-
                ## Purpose
                Thirty seconds each morning, recording resting pulse, hours slept and soreness on a 1 to 5 scale, shows patterns no session log can, such as pulse creeping up for three days before a cold. The value is in your own baseline, not in comparing with anyone else's numbers.

                ## Milestones
                1. A morning line format with three numbers and an optional word.
                2. Resting pulse measured the same way each time, ideally before getting up.
                3. Four weeks of entries giving a personal normal range.
                4. Days outside your normal range highlighted automatically or by hand.

                ## Notes
                Use these numbers to notice, not to diagnose. A resting pulse that stays well above your normal range, especially with other symptoms, is a reason to speak to your doctor.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four weeks of morning lines recorded and a personal normal range for resting pulse written in the log."
                cadence: rolling
              tasks:
                - "Decide how and when you will measure resting pulse each morning"
                - "Add a morning line with pulse, sleep hours and soreness"
                - "Record the morning line before getting up @recurring(daily)"
                - "Work out your normal pulse range after four weeks of entries"
            - name: Personal records register
              description: |-
                ## Purpose
                Records buried in session notes are easy to forget, and forgetting them makes progress feel smaller than it is. One register of personal bests for each lift, distance or benchmark, with the date, conditions and the session it came from, turns the log into proof of what training has built.

                ## Milestones
                1. A register with one row per lift, distance or benchmark you care about.
                2. Each record linked to the date and session that produced it.
                3. Rep and distance variants, such as best five-rep load, kept alongside single bests.
                4. Records older than two years moved to a lifetime section.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A records register with a dated, sourced entry for every tracked lift or distance, checked against the log each month."
                cadence: rolling
              tasks:
                - "List the lifts, distances and benchmarks that deserve a record row"
                - "Fill in your current best for each from the log"
                - "Add variants such as best five-rep load or best 10 km split"
                - "Scan the month's sessions for new records @recurring(monthly:20)"
            - name: Monthly trend check on your three numbers
              description: |-
                ## Purpose
                Weekly figures bounce, but a month of data shows direction. Charting your three goal numbers early each month and writing one sentence about each, up, flat or down and the likely reason, catches a stall at four weeks instead of at the end of a twelve-week block.

                ## Milestones
                1. A chart for each of your three numbers with at least three months of points.
                2. A monthly sentence for each number giving the likely reason for its movement.
                3. Any number flat for two months flagged for the next block review.
                4. Three monthly checks completed in a row.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive monthly checks recorded, each with an updated chart and one sentence per goal number."
                cadence: rolling
              tasks:
                - "Build one chart per goal number in your log"
                - "Mark the start of each training block on the charts"
                - "Chart the month and write one sentence per number @recurring(monthly:3)"
                - "Flag any number that has been flat for two months"
            - name: End-of-block review and next-block decisions
              description: |-
                ## Purpose
                Four to twelve week training blocks are the natural unit for changing a programme, and the log is what makes the change evidence based rather than restless. Reviewing what the three numbers did, what was completed and what hurt, then writing two or three specific changes, closes the loop between logging and training.

                ## Milestones
                1. Start and end values for each goal number in the block recorded.
                2. Completion rate, average effort and any injuries summarised.
                3. What worked and what did not written in three lines each.
                4. Two or three changes for the next block written before it begins.

                ## Notes
                Start from the **Training program** template when writing the next block. Change one or two variables at a time so the next review can tell which one mattered.
              priority: high
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A written review for each completed block, with start and end values for the goal numbers and two or three changes for the next block."
                cadence: cyclic
              tasks:
                - "Mark the start and end dates of the current block in the log"
                - "Pull start and end values for your three goal numbers"
                - "Write what worked, what did not and any injuries in the block"
                - "Write two or three changes for the next block before it starts"
                - "Compare this block's numbers with the previous block @recurring(quarterly)"
            - name: Monthly export and backup of training data
              description: |-
                ## Purpose
                Apps close, change their free tier or lose sync, and years of training history can vanish with them. Exporting everything to a file you own, once a month, takes five minutes and means no company decision can delete your record.

                ## Milestones
                1. The export option located in every app that holds your training.
                2. A backup folder in personal storage with a dated file for each month.
                3. One export opened in a spreadsheet to confirm it is readable.
                4. Three monthly backups in place.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A backup folder holding three consecutive dated monthly exports, at least one confirmed readable in a spreadsheet."
                cadence: rolling
              tasks:
                - "Find the full export option in each training app you use"
                - "Create a backup folder with a file per year and month"
                - "Open one export in a spreadsheet to check it is readable"
                - "Export all training data to the backup folder @recurring(monthly:12)"
            - name: Body weight weekly average and measurements
              description: |-
                ## Purpose
                Day-to-day body weight swings by a kilogram or more with fluid, food and salt, so single readings mislead weight class athletes and anyone tracking body composition. A weekly average from several mornings, with tape measurements once a month, shows the real trend without the daily noise.

                ## Milestones
                1. Weigh-ins taken under the same conditions, such as after waking and before eating.
                2. A weekly average used in reviews instead of single readings.
                3. Monthly tape measurements recorded at the same marked points.
                4. Twelve weeks of averages charted beside training load.

                ## Notes
                If weighing often makes you anxious or affects how you eat, weigh less often or drop the metric. For weight targets tied to health, agree them with your doctor or a dietitian.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve weeks of weekly average body weight charted beside training load, with monthly measurements at fixed points."
                cadence: rolling
              tasks:
                - "Write your fixed weighing conditions at the top of the log"
                - "Add a weekly average column beside the individual readings"
                - "Work out this week's average body weight @recurring(weekly:fri)"
                - "Take tape measurements at the same marked points @recurring(monthly:15)"
            - name: Planned versus completed sessions rate
              description: |-
                ## Purpose
                Following a programme 60 percent of the time means following a different programme, and judging it on its results is unfair to the plan and to you. Tracking the share of planned sessions done, modified or missed, each with a one-word reason, shows whether the plan or the week around it needs changing.

                ## Milestones
                1. Each planned session marked as done, modified or missed.
                2. A reason code for every miss, such as work, illness, family or motivation.
                3. A monthly completion percentage.
                4. The most common reason for misses identified after three months.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Three months of completion percentages recorded, with the most common reason for missed sessions named."
                cadence: rolling
              tasks:
                - "Add a done, modified or missed column to planned sessions"
                - "Agree four or five reason codes for missed sessions"
                - "Work out last month's completion percentage @recurring(monthly:8)"
                - "Name the most common reason for misses after three months"
            - name: Niggle and pain column with a weekly scan
              description: |-
                ## Purpose
                Small aches mentioned once and then forgotten are how many overuse problems begin: the same knee, the day after the same session, for six weeks. A column for location and a 0 to 10 pain score, scanned once a week, makes repeating patterns visible early and gives a physiotherapist real history instead of guesses.

                ## Milestones
                1. A pain column recording body location and a 0 to 10 score.
                2. Every niggle logged, even when it fades within the session.
                3. A weekly scan for any location that appears three times or more.
                4. A written threshold for when you will book a physiotherapist.

                ## Notes
                Sharp pain, swelling, numbness or pain that changes how you move needs assessment, not more data. Stop and get it checked.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A pain column in use for every session, a weekly scan recorded, and a written threshold for booking a physiotherapist."
                cadence: rolling
              tasks:
                - "Add a pain column with body location and a 0 to 10 score"
                - "Write the threshold at which you will book a physiotherapist"
                - "Scan the week's pain entries for repeating locations @recurring(weekly:wed)"
                - "Take the pain history to any physiotherapy appointment"
            - name: Rating effort with the 1 to 10 RPE scale
              description: |-
                ## Purpose
                Rating of perceived exertion is the cheapest metric in sport and one of the most useful, but only if a 7 means the same thing in March as in June. Learning the anchors of the scale, and for lifting its reps in reserve version, makes your effort column consistent enough to compare across months.

                ## Milestones
                1. The 1 to 10 scale written out with your own description for each anchor point.
                2. For lifting, the link to reps in reserve noted, such as 8 meaning two reps left.
                3. Two weeks of sessions rated about 30 minutes after finishing.
                4. A repeated familiar session showing your rating is consistent.

                ## Notes
                Rate the whole session, not the hardest moment. Rating straight after the last interval inflates the number.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A personal RPE scale written in the log and two weeks of sessions rated with it, including one repeated session rated within a point."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write your own description for ratings 1, 3, 5, 7, 9 and 10"
                - "Note how reps in reserve maps onto the scale for your lifts"
                - "Rate each session about 30 minutes after finishing for two weeks"
                - "Repeat a familiar session and check the rating matches last time"
            - name: Rolling averages and why one bad session means little
              description: |-
                ## Purpose
                One slow run or failed lift sends many people into a programme change, when sleep, heat or a busy day explain it entirely. Learning to read 7 day and 28 day rolling averages, and to expect a normal spread around them, keeps decisions tied to trends rather than to whatever happened yesterday.

                ## Milestones
                1. A 7 day and a 28 day rolling average added for one key metric.
                2. Your normal day to day spread for that metric worked out.
                3. Three remembered bad sessions checked against the rolling average.
                4. A personal rule written for how many weeks of change justify acting.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Rolling 7 and 28 day averages in use for one metric, with a written rule for how much sustained change justifies acting."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Add a 7 day and 28 day rolling average to one key metric"
                - "Work out the typical spread of that metric over two months"
                - "Compare three sessions you remember as bad with the trend"
                - "Write how many weeks of change you need before acting"
            - name: Estimated one-rep max from logged sets
              description: |-
                ## Purpose
                Most lifters rarely test a true single, yet every logged set of three to eight reps already holds an estimate of it. Learning how estimation formulas work and where they become unreliable, then charting the best estimate each week, gives a strength progress line without the fatigue of frequent max attempts.

                ## Milestones
                1. One estimation formula chosen and applied consistently.
                2. An estimated max column calculated for sets of ten reps or fewer.
                3. A weekly best estimate charted for each main lift.
                4. The limits of the estimate noted, including its weakness at high reps.

                ## Notes
                Estimates from sets above about ten reps are unreliable. Sets rated 8 or above give the cleanest trend.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An estimated max column in the log and a weekly best estimate charted for each main lift over at least six weeks."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Choose one estimation formula and note it at the top of the log"
                - "Add an estimated max column for sets of ten reps or fewer"
                - "Chart the weekly best estimate for each main lift"
                - "Compare the estimate with your last true single, if you have one"
            - name: Hard sets per muscle group versus tonnage
              description: |-
                ## Purpose
                Total tonnage, sets times reps times load, rewards heavy low-rep work and hides how much work each muscle actually received. Counting hard sets taken close to failure for each muscle group each week gives a clearer picture for anyone training for size or balanced strength.

                ## Milestones
                1. A definition of a hard set written down, such as within three reps of failure.
                2. Each exercise mapped to its main muscle groups.
                3. Weekly hard sets per muscle group counted for four weeks.
                4. Groups with far fewer or far more sets than the rest noted for the next block.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Four weeks of hard set counts per muscle group recorded beside weekly tonnage, with any imbalance noted for the next block."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write your definition of a hard set in the log"
                - "Map each exercise you do to its main muscle groups"
                - "Count weekly hard sets per muscle group for four weeks"
                - "Compare the counts with weekly tonnage for the same weeks"
            - name: Adjusting run pace for hills, heat and wind
              description: |-
                ## Purpose
                On a hot hilly route, a run at five and a half minutes per kilometre can be harder than five minutes on a cool flat one, so raw pace comparisons convince runners that fitness has dropped when it has not. Learning grade adjusted pace and recording temperature and route type lets you compare like with like across seasons.

                ## Milestones
                1. Grade adjusted pace located in your app or calculated another way.
                2. Temperature, wind and route type added as fields for runs.
                3. Two similar runs in different conditions compared on adjusted figures.
                4. One regular benchmark route chosen for fair comparisons.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Condition fields in use on every run entry and one benchmark route named, with two runs compared on adjusted pace."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Find where your app shows grade adjusted pace"
                - "Add temperature, wind and route type fields to run entries"
                - "Compare a hot hilly run and a cool flat one on adjusted pace"
                - "Pick one benchmark route for like-for-like comparisons"
            - name: How far to trust your watch's numbers
              description: |-
                ## Purpose
                Wrist heart rate can lock onto cadence during intervals, GPS cuts corners under trees, and calorie, VO2 max and readiness scores are model estimates with wide error. Knowing which numbers from your device are measured and which are guessed decides which ones deserve a place in your reviews.

                ## Milestones
                1. Each metric your device shows labelled as measured, derived or estimated.
                2. Wrist heart rate compared with a chest strap over at least two sessions.
                3. GPS distance checked on a measured track or known route.
                4. A short list of device numbers you will and will not use in reviews.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written list of device metrics marked measured, derived or estimated, with a heart rate and GPS check recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every metric your watch shows on a session summary"
                - "Label each one as measured, derived or estimated"
                - "Wear a chest strap alongside the watch for two sessions and compare"
                - "Run or walk a known distance and compare the GPS reading"
                - "Write which device numbers you will use in reviews"
            - name: Session notes that are useful three months later
              description: |-
                ## Purpose
                Notes like felt good or legs tired tell your future self almost nothing. Notes that record the cause, the cue that worked and the condition that mattered, such as poor sleep, new shoes or a bar path that improved with elbows tucked, become the explanation behind every number.

                ## Milestones
                1. A short list of note prompts kept beside the log.
                2. Notes written for every session for three weeks using the prompts.
                3. Old notes reread and the useful ones marked.
                4. The prompt list cut to the three questions that produced useful notes.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Three weeks of session notes written against prompts, and a final list of three note prompts saved in the log."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write three or four prompt questions for session notes"
                - "Answer at least one prompt in every session note for three weeks"
                - "Reread three weeks of notes and mark the useful ones"
                - "Cut the prompts to the three that produced useful notes"
            - name: Tags for sessions, kit and training blocks
              description: |-
                ## Purpose
                Questions like how many kilometres are on these shoes, how sessions went during the hot spell or which gym produced the best lifts can only be answered if sessions were tagged. A small fixed tag set for session type, kit, location and block makes the whole log searchable.

                ## Milestones
                1. A tag list covering session type, kit, location and block.
                2. Shoes, bikes or other wear items given their own tag with a start date.
                3. The last four weeks of sessions tagged.
                4. One real question answered by filtering on a tag.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A fixed tag list saved in the log, four weeks of sessions tagged, and one question answered by filtering."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a tag list for session type, kit, location and block"
                - "Give each pair of shoes or other wear item a tag and start date"
                - "Tag the last four weeks of sessions"
                - "Filter by one tag to answer a real question about your training"
            - name: A one-page training dashboard with four charts
              description: |-
                ## Purpose
                Data sitting in rows is rarely looked at, while a single page of charts gets read every week. Putting weekly load, your three goal numbers, completion rate and one wellbeing marker onto one spreadsheet page makes the monthly check a two-minute glance.

                ## Milestones
                1. A dashboard page linked to the main log data.
                2. Four charts showing weekly load, goal numbers, completion rate and one wellbeing marker.
                3. Charts updating automatically when new sessions are entered.
                4. A short note on how the dashboard is built, so it can be rebuilt if the file breaks.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dashboard page with four charts that update when a test session is added, plus a written note on how it is built."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Sketch the four charts you want on paper first"
                - "Create a dashboard page linked to your log data"
                - "Build the four charts and check they update with a test entry"
                - "Write a short note on how the dashboard is built"
            - name: Decision rules for stalls and warning signs
              description: |-
                ## Purpose
                In the moment, a stalled lift or a heavy-legged week invites either panic or denial. Writing simple if-then rules before they are needed, such as the same pace feeling a point harder for two weeks means an easier week, turns the log into a decision tool rather than a diary.

                ## Milestones
                1. Three to five if-then rules written for your goal numbers.
                2. Each rule naming the metric, the threshold and the action.
                3. Warning sign rules agreed with a coach or physiotherapist if you work with one.
                4. Every rule used or reviewed at least once during a block.

                ## Notes
                Keep rules about pain and illness conservative and written with a professional. Rules about progress can be your own.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Three to five written if-then rules, each naming a metric, threshold and action, saved at the top of the log."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the situations that usually make you change your training"
                - "Write an if-then rule for each, naming metric, threshold and action"
                - "Show the rules to your coach or physiotherapist if you have one"
                - "Note in the log each time a rule fires and what you did"
            - name: Pruning log fields you never use
              description: |-
                ## Purpose
                Logs grow fields over time, and each one adds seconds to every entry until logging feels like admin. Checking which fields actually informed a review in the last three months, and archiving the rest, keeps the log fast enough to survive busy seasons.

                ## Milestones
                1. Every current field listed with the last time it informed a decision.
                2. Fields unused for three months removed or archived.
                3. Entry time per session measured before and after.
                4. The trimmed field list written at the top of the log.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every field unused for three months archived and the trimmed field list recorded, with entry time measured before and after."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List every field in your log"
                - "Mark each field used in a review or decision in the last three months"
                - "Archive the unmarked fields"
                - "Time one entry before and one after pruning"
                - "Repeat the field audit once a year @recurring(yearly)"
            - name: Moving your training history to a new app
              description: |-
                ## Purpose
                Switching apps is common, and the usual result is a log that starts again from zero with years of history stranded. Planning the move, exporting in a standard format, testing an import and keeping the original files means the new tool starts with your full record.

                ## Milestones
                1. Full exports taken from the old app in a standard format such as CSV or activity files.
                2. A test import of one month checked for missing fields and wrong units.
                3. The full history imported and spot checked against the old app.
                4. Original export files stored in the backup folder.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Full history imported into the new app with ten sessions spot checked, and the original export files kept in the backup folder."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Request a full data export from the old app"
                - "Import one month into the new app as a test"
                - "Check the test month for missing fields and unit errors"
                - "Import the full history and spot check ten sessions"
                - "Store the original export files in your backup folder"
            - name: Paid analytics subscription, worth it or not
              description: |-
                ## Purpose
                Premium tiers promise load charts, readiness scores and coaching insights, often for the price of a gym month each quarter. Writing down the questions you actually need answered, and checking whether a free spreadsheet or your current app already answers them, stops you paying for dashboards nobody reads.

                ## Milestones
                1. The three questions you want the subscription to answer written down.
                2. The free tools you already have checked against those questions.
                3. Any free trial used with a cancellation reminder set before it ends.
                4. A keep or cancel decision recorded with the yearly cost.

                ## Notes
                Start from the **Purchase decision** template.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A keep or cancel decision on paid analytics recorded with the yearly cost and the questions it was meant to answer."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the three questions you want paid analytics to answer"
                - "Check whether your current app or spreadsheet already answers them"
                - "Set a reminder two days before any free trial ends"
                - "Record the keep or cancel decision with the yearly cost"
            - name: When the numbers start running the training
              description: |-
                ## Purpose
                Readiness scores, streaks and leaderboards can turn training into anxious checking: skipping an enjoyable session because a score is low, or forcing a hard one to protect a streak. Noticing this and deciding how often to look at data, and which scores to hide, keeps the log working for you rather than the other way round.

                ## Milestones
                1. Honest notes on which metrics change your mood or decisions most.
                2. Scores you will hide or ignore chosen, such as daily readiness or social rankings.
                3. A set schedule for looking at data, such as weekly and monthly reviews only.
                4. Four weeks trained on the new schedule with a note on how it felt.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written list of hidden scores and data-checking days, followed for four weeks with a short note on the effect."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Note each time this week a number changes your plan or your mood"
                - "Hide the scores you chose from your watch and app home screens"
                - "Set the days you will look at data and keep to them for four weeks"
                - "Write a short note on how training felt without daily checking"
            - name: Restarting a log that lapsed
              description: |-
                ## Purpose
                Most training logs die quietly after an injury, a holiday or a busy month, and restarting feels like admitting the gap. Treating the gap as data, marking it with one line on why and logging the very next session, gets the record going again without reconstructing every missing week.

                ## Milestones
                1. The gap marked in the log with dates and a one-line reason.
                2. The next session logged within a day of deciding to restart.
                3. Fields cut back to the minimum for the first four weeks.
                4. Two weeks of continuous entries in place.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "The gap recorded with dates and a reason, followed by at least two weeks of continuous entries."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Mark the gap in the log with its dates and a one-line reason"
                - "Cut your fields to the minimum set for the next four weeks"
                - "Log your next session on the same day you do it"
                - "Add back any dropped fields after two weeks of continuous entries"
            - name: First 100 logged sessions review
              description: |-
                ## Purpose
                Six months of regular training, roughly a hundred sessions, is the first point at which a log holds real patterns. Stopping to count what is there, totals, records, missed weeks and the most common notes, shows what the log has taught you and what it still cannot answer.

                ## Milestones
                1. Totals for sessions, hours and distance or tonnage across the first 100 sessions.
                2. Records set during the period listed.
                3. The three patterns most visible in the data written down.
                4. One change to the log itself decided for the next 100 sessions.
              priority: low
              frontmatter:
                mode: event
                output_kind: knowledge
                success_criteria: "A written review at the 100th session with totals, records, three patterns and one change to the log."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Count your logged sessions and estimate when you will pass 100"
                - "Total sessions, hours and distance or tonnage at the 100 mark"
                - "Ask the agent to summarise the most common themes in your session notes"
                - "Write one change to the log for the next 100 sessions"
            - name: Twelve-week data pack before a race or meet
              description: |-
                ## Purpose
                Race targets set from hope go wrong on the day, while targets set from twelve weeks of training rarely do. Pulling key sessions, recent bests, completion rate and the load trend onto one page two weeks before the event gives you, and any coach, a realistic target and a pacing or attempt plan.

                ## Milestones
                1. Twelve weeks of key sessions and recent bests on one page.
                2. Completion rate and load trend for the period summarised.
                3. A realistic target range written from the evidence.
                4. The page used as the basis for pacing or attempt selection on the day.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A one-page twelve-week summary with a target range, finished at least a week before the event."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Put the event date in the log and mark the twelve weeks before it"
                - "List the key sessions from those weeks with their results"
                - "Summarise completion rate and the weekly load trend"
                - "Write a target range based only on what the data shows"
            - name: Competition debrief within 48 hours
              description: |-
                ## Purpose
                The details that matter after a race, match or meet, such as when pace drifted, which attempt felt slow or what you ate beforehand, fade within two days. A structured debrief while it is fresh, with splits or results beside how it felt, makes each event the most valuable entry in the log.

                ## Milestones
                1. A debrief template with result, splits or attempts, conditions, fuelling and feelings.
                2. The debrief written within 48 hours of the event.
                3. Three things that went well and three to change listed.
                4. The debrief linked to the next block review.
              priority: medium
              frontmatter:
                mode: event
                output_kind: artifact
                success_criteria: "A debrief for the most recent event, written within 48 hours and linked to the next block review."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Create a debrief template in your log"
                - "Download splits, attempts or results from the event"
                - "Write the debrief within 48 hours of finishing"
                - "Link the debrief to your next block review"
            - name: Log summary for a new coach or physiotherapist
              description: |-
                ## Purpose
                First appointments with a coach or physiotherapist usually open with ten minutes of vague recall. A one-page summary of the last eight weeks, covering sessions per week, typical load, recent bests, pain notes and goals, means the time goes on decisions rather than history.

                ## Milestones
                1. A one-page summary of the last eight weeks of training.
                2. Pain history and any niggles listed with dates and scores.
                3. Your goal and three goal numbers stated at the top.
                4. The summary sent ahead of the appointment or printed for it.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A one-page eight-week summary with goals and pain history delivered to the coach or physiotherapist before the first session."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pull the last eight weeks of weekly totals from the log"
                - "List pain entries with their dates and scores"
                - "Write your goal and three goal numbers at the top"
                - "Send the summary before the appointment or print a copy"
            - name: Training year in review
              description: |-
                ## Purpose
                Once a year the log can answer questions no single block can: how many weeks were really consistent, which months produced progress and how many weeks injury or illness cost. A yearly review with totals, records, setbacks and the best and worst blocks gives next year's plan a factual starting point.

                ## Milestones
                1. Year totals for sessions, hours and distance or tonnage.
                2. Records set, and injuries or illnesses with their cost in missed weeks.
                3. Best and worst blocks named with the likely reasons.
                4. Three priorities for next year written from the evidence.
              priority: medium
              frontmatter:
                mode: event
                output_kind: knowledge
                success_criteria: "A written year review with totals, records, missed weeks and three priorities for the next year."
                cadence: cyclic
              tasks:
                - "Pick the date each year when you will hold the review"
                - "Total sessions, hours and distance or tonnage for the year"
                - "List records, injuries and missed weeks with their causes"
                - "Write three evidence-based priorities for next year @recurring(yearly)"
            - name: Ten-second log for parents and shift workers
              description: |-
                ## Purpose
                With small children, rotating shifts or caring duties, an eight-field log is the first thing to go. A minimum version of session type, minutes and one effort number, typed in ten seconds, keeps the trend line alive through the busiest seasons until there is room for detail again.

                ## Milestones
                1. A three-field minimum entry defined.
                2. A phone shortcut or widget set up for one-tap entry.
                3. Four weeks of minimum entries completed.
                4. A written trigger for when to return to the full log.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Four weeks of three-field entries with no unlogged sessions, and a written trigger for returning to the full log."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Define your three-field minimum entry"
                - "Set up a phone shortcut that opens a new entry in one tap"
                - "Log every session in the minimum format for four weeks"
                - "Write the trigger for returning to the full log"
            - name: One log for swim, bike, run and gym
              description: |-
                ## Purpose
                Multisport athletes often end up with swims in one app, rides in another and strength work in a notebook, so nobody sees the total load. A single log with a common unit, minutes times effort rating, plus each sport's own measures, shows the whole week and the balance between disciplines.

                ## Milestones
                1. All disciplines feeding one log, by sync or by hand.
                2. A common load unit applied to every discipline.
                3. Sport-specific fields kept, such as pace per 100 m for swims and distance for rides.
                4. A weekly chart showing load split by discipline.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every discipline recorded in one log with a common load unit, and a weekly load chart split by discipline."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List where each discipline's sessions are recorded now"
                - "Bring every discipline into one log by sync or by hand"
                - "Apply the same load unit to every session"
                - "Chart weekly load split by discipline"
            - name: Shared log with a remote coach
              description: |-
                ## Purpose
                Remote coaches see only what you log, so a thin entry gets generic advice back. Agreeing which fields the coach needs, how comments are exchanged and when they are read each week makes the log the main channel of coaching rather than an afterthought.

                ## Milestones
                1. Access given to the coach in the app or file you both use.
                2. The fields the coach needs confirmed in writing.
                3. A weekly rhythm for coach comments and your replies agreed.
                4. Comments answered within the agreed time for four weeks.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The coach has access, the needed fields are confirmed, and four weeks of coach comments have been answered on time."
                cadence: rolling
              tasks:
                - "Share the log with your coach with comment access"
                - "Ask your coach which fields matter most to them"
                - "Agree the day the coach reads and comments each week"
                - "Read and reply to the coach's comments @recurring(weekly:thu)"
            - name: Marking illness, travel and holidays in the log
              description: |-
                ## Purpose
                Blank weeks look like failure when they were really a chest infection or a family holiday, and they distort averages and completion rates. Codes for illness, travel, injury and planned rest, plus a rule for how those days count in averages, keep reviews fair and show how much life actually costs training.

                ## Milestones
                1. Codes defined for illness, injury, travel, planned rest and other.
                2. A rule written for including or excluding coded days in averages.
                3. The past six months coded where the reason is known.
                4. A running count of days lost to each cause.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Absence codes and an averaging rule written in the log, with the past six months coded and days lost counted by cause."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Define codes for illness, injury, travel, planned rest and other"
                - "Write how coded days count in averages and completion"
                - "Code the past six months where you remember the reason"
                - "Add a running count of days lost to each cause"
            - name: Team sport log of training, matches and minutes
              description: |-
                ## Purpose
                Players in football, rugby, hockey or netball often log gym work carefully and ignore the matches and team training that make up most of their load. Logging every team session and match with minutes played and an effort rating, beside personal work, shows the true week and explains the heavy Monday legs.

                ## Milestones
                1. Team training, matches and personal sessions logged in one place.
                2. Minutes played and effort rating recorded for every match.
                3. Weekly load including team commitments charted.
                4. Personal sessions moved where the chart shows clashing heavy days.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A full season month logged with every team session and match, minutes played and effort, inside one weekly load chart."
                cadence: rolling
              tasks:
                - "Add team training and match as session types in your log"
                - "Record minutes played and effort for this week's match @recurring(weekly:sat)"
                - "Chart weekly load including team sessions"
                - "Move one personal session that lands on a heavy team day"
            - name: Running a shared log for a training group
              description: |-
                ## Purpose
                Running clubs, lifting crews and small coaching groups often want everyone's sessions in one view, so the organiser can see who is building too fast or dropping off. A shared sheet with consistent fields and clear consent about what others can see makes the group's training visible without chasing messages.

                ## Milestones
                1. Each member's agreement on what is shared and who can see it.
                2. A shared sheet with the same fields for everyone.
                3. A weekly reminder going to the group.
                4. A monthly group summary sent without personal health details.

                ## Notes
                Keep pain notes, body weight and health information out of shared views unless each person chooses to share them.
              priority: low
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A shared group sheet in use by every consenting member, with a monthly summary sent that contains no personal health details."
                cadence: rolling
              tasks:
                - "Ask each member what they are happy to share and with whom"
                - "Set up a shared sheet with the same fields for everyone"
                - "Remind the group to update the shared sheet @recurring(weekly:tue)"
                - "Send a monthly group summary with no personal health details"
            - name: Returning after a long break with a fresh baseline
              description: |-
                ## Purpose
                After months away for a new baby, a demanding job or a house move, old bests sit in the log as a reproach and tempt people to chase them too soon. Starting a new baseline section, with old numbers kept for reference but out of the charts, lets progress show from where you actually are.

                ## Milestones
                1. A dated new baseline section created in the log.
                2. Old bests moved to a history section, out of the main charts.
                3. Two weeks of sessions logged as the new starting point.
                4. A first comparison made against the new baseline after six weeks.

                ## Notes
                If the break was caused by injury or illness, follow your clinician's return plan first and use the log to record it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated new baseline in the log, old bests moved to history, and a six-week comparison against the new baseline written."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Create a dated new baseline section in the log"
                - "Move old bests to a separate history section"
                - "Log two weeks of sessions as your new starting numbers"
                - "Compare against the new baseline after six weeks"
            - name: Typical error and smallest worthwhile change
              description: |-
                ## Purpose
                Every measure has noise: a 5 km time trial varies by several seconds on identical days and an estimated max by a few kilograms. Working out the typical variation of your own key numbers from repeated measures tells you the smallest change likely to be real, so you stop celebrating noise or despairing over it.

                ## Milestones
                1. At least five repeated measures of one key number in similar conditions gathered from the log.
                2. The typical variation calculated as a standard deviation.
                3. A smallest worthwhile change written beside each key number.
                4. Recent changes in the key numbers rechecked against that threshold.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A smallest worthwhile change written beside each goal number, calculated from at least five repeated measures."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Find five or more repeated measures of one key number in the log"
                - "Calculate their standard deviation in a spreadsheet"
                - "Write the smallest change you will treat as real"
                - "Recheck last month's changes against that threshold"
            - name: Fitness, fatigue and form chart from your load data
              description: |-
                ## Purpose
                Endurance coaches have long used a simple model that treats long-term load as fitness, short-term load as fatigue and the gap between them as form. Building it from your own session loads shows how fitness accumulates over a block and why a lighter final week lifts performance, as long as you remember it is a model, not a measurement.

                ## Milestones
                1. Daily load values available for at least three months.
                2. 42 day and 7 day exponentially weighted averages calculated.
                3. The difference between them charted as form.
                4. The chart compared with how you actually performed at two recent events.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A fitness, fatigue and form chart built from three months of your own load data and checked against two real events."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Export daily load values for the last three months"
                - "Calculate 42 day and 7 day weighted averages in a spreadsheet"
                - "Chart the difference between them as form"
                - "Compare the chart with two recent events and note where it misled"
            - name: Bar speed tracking for velocity-based lifting
              description: |-
                ## Purpose
                For lifters with a phone app or a linear sensor, bar speed on warm-up sets shows how the day is going and, over months, builds a load to velocity profile that estimates strength without a max attempt. Logging mean velocity by load turns a gadget into a long-term data series.

                ## Milestones
                1. A velocity device or app chosen and its placement fixed.
                2. Mean velocity logged for one main lift across a range of loads.
                3. A load to velocity profile drawn from at least four sessions.
                4. Daily warm-up speeds compared with the profile for four weeks.

                ## Notes
                Different devices give different readings. Keep to one device, or record which one was used, so the series stays comparable.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A load to velocity profile for one main lift drawn from at least four sessions, with four weeks of warm-up speeds compared against it."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Choose a velocity app or sensor and decide where it attaches"
                - "Log mean velocity for one lift at four or more loads"
                - "Draw a load to velocity profile from those sessions"
                - "Compare warm-up speeds with the profile for four weeks"
            - name: Personal training experiment run from the log
              description: |-
                ## Purpose
                Questions such as whether morning sessions go better than evening ones, or whether a longer warm-up changes your first working set, can be tested on yourself with the log. Running a simple experiment, with one change, a fixed comparison measure and enough sessions on each side, gives an answer for your body instead of a headline.

                ## Milestones
                1. One question written with a single variable to change.
                2. A comparison measure and the number of sessions per condition fixed in advance.
                3. Both conditions run and logged.
                4. The result written up with the size of the difference set against your typical error.

                ## Notes
                Do not experiment with supplements, medicines or restrictive diets without speaking to a qualified professional first.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written result for one self-experiment, with the measure and session count fixed in advance and the difference compared with typical error."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write one question with a single variable to change"
                - "Fix the comparison measure and sessions per condition before starting"
                - "Run and log both conditions"
                - "Ask the agent to compare the two conditions and draft the write-up"
---

# Training Log & Performance Metrics

This area is for anyone who trains regularly and wants the sessions to add up to something they can see, from a first notebook to a dashboard shared with a coach. It starts with the foundations (where the log lives, the fields every entry carries, back-filled history, starting numbers, privacy and the logging habit itself), then the weekly and monthly machinery of summaries, load, records, trends, backups and block reviews, the skills of rating effort and reading numbers honestly, the decisions about apps, fields and how often to look, the events worth a debrief, versions for busy parents, multisport athletes, team players, coached athletes and training groups, and finally the statistics and models a data-minded athlete works with.

What repeats is an entry after every session and a short morning line, a Sunday summary, a Monday load update, a midweek pain scan and a Friday weight average, monthly trend, records, completion and backup checks spread across different days, a quarterly block comparison and a yearly review. The Metrics log, Habit tracker, Training program and Purchase decision templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
