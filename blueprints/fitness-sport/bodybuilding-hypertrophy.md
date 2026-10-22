---
id: fitness-sport.bodybuilding-hypertrophy
name: Bodybuilding & Hypertrophy Training
description: "A split that fits your week, set counts and progression rules you can follow, honest photos and measurements, planned bulks and cuts, and for competitors a show prep, posing and peak week run with a coach."
category: personal
version: 1.0.0
tags: [fitness-sport, bodybuilding-hypertrophy, athlete, hypertrophy, progressive-overload, physique, contest-prep]
author: Aurum Technology
starter_structure:
  templates:
    - training-program
    - metrics-log
    - weekly-meal-plan
    - habit-tracker
    - reading-queue
    - purchase-decision
  pillars:
    - name: Fitness & Sport
      emoji: "🏋️"
      description: "Training, play and competition: building strength, endurance and skill in a sport or a gym, structuring blocks of work around events, recovering properly, and keeping the sessions honest with a log rather than a feeling."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Bodybuilding & Hypertrophy Training
          description: "Building muscle with structured hypertrophy splits, progressive overload, physique tracking and, for competitors, show preparation and peak week."
          projects:
            - name: Physique goal and starting point statement
              description: |-
                ## Purpose
                Most lifters train for years toward a vague idea of bigger, which makes it impossible to judge whether a programme or a bulk is working. Writing one page that says what you want to change, by roughly how much, over what period, and whether competing is on the table gives every later decision in this area something to be measured against.

                ## Milestones
                1. A one-page statement naming the two or three muscle groups or features you most want to change.
                2. A decision recorded on whether you are training for yourself, a photoshoot or a stage.
                3. Your current training age, bodyweight and weekly gym days written at the top.
                4. A review date set twelve months from today.

                ## Notes
                Be specific about the look, not the number on the scale. "Wider back and fuller shoulders" guides programming far better than "gain 6 kg".
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written physique goal names the priority muscle groups, the purpose (personal, shoot or stage) and a twelve-month review date."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write down the three things you would change about your physique first"
                - "Decide whether a stage or photoshoot is part of the next two years"
                - "Note your training age, bodyweight and realistic gym days per week"
                - "Reread and rewrite the physique goal at the start of each training year @recurring(yearly)"
            - name: Baseline physique photos under fixed lighting
              description: |-
                ## Purpose
                Mirror checks are unreliable because lighting, pump and mood change what you see every day. A set of front, side and back photos taken in the same spot, light, time of day and clothing becomes the reference every future check-in is compared against, and it is the evidence a coach will ask for first.

                ## Milestones
                1. One spot chosen with a plain background and overhead or window light that does not change.
                2. Camera height, distance and zoom marked so every set matches.
                3. Front relaxed, side, back relaxed and front double biceps photos taken fasted in the morning.
                4. The photos stored in one dated folder that only you control.

                ## Notes
                Use a timer and a phone stand rather than a mirror selfie. Keep the photos private; they are working records, not posts.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Four baseline poses photographed under recorded conditions and saved in a dated private folder."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Pick a photo spot with a plain wall and steady light"
                - "Mark the floor and phone stand positions with tape"
                - "Take the four baseline poses fasted on a training-free morning"
                - "Save the set in a private dated folder"
            - name: Baseline tape measurements and scale weight
              description: |-
                ## Purpose
                Photos show shape, but a tape tells you whether an arm grew a centimetre or a waist crept up during a bulk. Measuring the same seven sites the same way, with a three-day average bodyweight beside them, gives a numeric baseline that makes later gains and losses impossible to argue with.

                ## Milestones
                1. A list of sites with landmarks: relaxed upper arm, chest, waist at the navel, hips, thigh, calf and neck.
                2. Each site measured twice and the average recorded.
                3. A three-day average morning bodyweight written beside the measurements.
                4. The landmarks described in words so anyone could repeat them.

                ## Notes
                Measure the same side every time and keep the tape snug rather than tight. Waist is the single most useful number during both bulks and cuts.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Seven tape sites with written landmarks and a three-day average bodyweight are recorded on one dated sheet."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Buy or find a flexible tape measure with a locking end"
                - "Write a landmark description for each of the seven sites"
                - "Measure every site twice and record the averages"
                - "Weigh yourself on three mornings and note the average"
            - name: Choosing a hypertrophy split for your week
              description: |-
                ## Purpose
                Full body, upper and lower, push pull legs and body part splits can all build muscle; what matters is that each muscle gets hit about twice a week with enough sets and that the plan survives your real calendar. Choosing on those grounds, instead of copying a professional's six-day split, means you will still be running it in month four.

                ## Milestones
                1. The number of sessions you can honestly attend each week, and their length, written down.
                2. Three candidate splits compared on frequency per muscle and session length.
                3. One split chosen and laid out day by day in the calendar.
                4. A rule written for what to do when a session is missed.

                ## Notes
                Start from the **Training program** template. If you can only train three days, full body or a rotating upper and lower split usually beats a body part split.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One split is chosen against your weekly availability, written as a day-by-day plan with a missed-session rule."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the days and times you can train in a normal week"
                - "Compare three splits on how often each hits every muscle"
                - "Write the chosen split day by day in the training program template"
                - "Decide what happens to a missed session before it happens"
            - name: Exercise menu for every muscle group
              description: |-
                ## Purpose
                Any programme is only as good as the movements in it, and the best chest or back exercise is the one you can load steadily, feel in the target muscle and do without joint pain. Building a menu of two or three proven choices per muscle lets you write blocks, swap around crowded equipment and rotate later without guessing.

                ## Milestones
                1. Two to three exercises listed for chest, back, shoulders, biceps, triceps, quads, hamstrings, glutes and calves.
                2. Each exercise tagged as a compound, isolation, machine, cable or free weight option.
                3. A note against any movement that causes joint discomfort for you.
                4. One first-choice exercise per muscle marked for the current block.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written menu covers nine muscle groups with at least two tagged exercises each and a first choice marked."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the exercises you already do and the muscles they train"
                - "Fill gaps so each of nine muscle groups has two options"
                - "Mark any exercise that irritates a joint and replace it"
                - "Choose the first-choice exercise for each muscle this block"
            - name: Starting weekly set count per muscle
              description: |-
                ## Purpose
                Weekly hard sets per muscle are the most useful single dial in hypertrophy training, and most people either do far too few for back and legs or pile twenty sets onto chest. Counting what you currently do, then setting a starting number per muscle, often around ten hard sets for an intermediate, gives a baseline you can raise or cut with intent.

                ## Milestones
                1. Current weekly hard sets counted for each muscle from the last two weeks.
                2. A starting target per muscle written, higher for priority muscles from your goal.
                3. Sets distributed across at least two sessions per muscle.
                4. Total session length checked against the time you actually have.

                ## Notes
                Count only sets taken close to failure. Warm-up sets and easy back-off sets do not count toward the weekly number.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A table lists current and target weekly hard sets for every muscle group, spread across at least two sessions each."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Count last week's hard sets for each muscle from your log"
                - "Set a starting weekly target for each muscle"
                - "Spread each muscle's sets over two or more sessions"
                - "Time one full session to check it fits your window"
            - name: Set-level hypertrophy logbook
              description: |-
                ## Purpose
                Progress in hypertrophy hides in small numbers: one more rep at the same load, or the same reps with 2.5 kg more. A logbook that records every working set with load, reps and how many reps you had left makes those changes visible, and it is what every progression rule and weekly review in this area reads from.

                ## Milestones
                1. A log with columns for date, exercise, load, reps, reps in reserve and a short note.
                2. Your split and first-choice exercises entered as the template for each session.
                3. Two full weeks of sessions logged without gaps.
                4. A habit of checking last session's numbers before the first working set.

                ## Notes
                Start from the **Metrics log** template. Paper works as well as an app if you actually fill it in between sets.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Two consecutive weeks of every working set are logged with load, reps and reps in reserve."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create the logbook from the metrics log template"
                - "Add one page or tab per training day of your split"
                - "Log every working set for the next two weeks"
                - "Read the previous session's numbers before warming up"
            - name: Two-week maintenance calorie estimate
              description: |-
                ## Purpose
                Every bulk and cut is set relative to maintenance, and online calculators can be several hundred calories out for an individual. Logging what you actually eat for two weeks while your weight is steady, or adjusting for the trend, gives a personal maintenance figure that makes every later phase predictable.

                ## Milestones
                1. Fourteen days of food intake logged as accurately as you can.
                2. Daily morning weight recorded across the same fourteen days.
                3. The average intake and the weight trend compared.
                4. A personal maintenance estimate written in your log, with the date.

                ## Notes
                Do not try to diet during the two weeks; eat normally and record honestly. If you have a history of disordered eating, do this with a dietitian rather than alone.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A personal maintenance calorie figure is recorded, based on fourteen days of logged intake and morning weights."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose a food logging app or notebook and set it up tonight"
                - "Log everything eaten and weigh in each morning for fourteen days"
                - "Compare average intake with the fourteen-day weight trend"
                - "Write your maintenance estimate and the date in the log"
            - name: Gym audit for machines, cables and dumbbells
              description: |-
                ## Purpose
                Hypertrophy work leans on equipment that a basic gym may lack: a chest supported row, a hack squat or leg press, a seated leg curl, adjustable cables and dumbbells heavy enough for presses. Checking your gym against your exercise menu, at the hours you actually train, shows whether to adapt the programme or change gyms.

                ## Milestones
                1. Your exercise menu checked against the equipment the gym has.
                2. Busy-hour availability of the key stations noted on a visit at your usual time.
                3. Gaps listed with a substitute exercise for each.
                4. A decision recorded to stay, add a second gym or move.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An equipment checklist for your gym is completed at your usual training time, with a recorded stay or move decision."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Walk the gym floor at your usual hour with the exercise menu"
                - "Note which stations are missing or always taken"
                - "Write a substitute exercise for each gap"
                - "Record whether you will stay, add a gym or move"
            - name: Double progression rules for every exercise
              description: |-
                ## Purpose
                Without a rule, lifters either add weight too soon and lose reps, or repeat the same numbers for months. Double progression, working up to the top of a rep range on all sets before adding the smallest available load, gives each exercise a clear next target and stops sessions being run on mood.

                ## Milestones
                1. A rep range set for each exercise, such as 6 to 10 for compounds and 10 to 15 for isolation work.
                2. The load jump for each exercise written down, including micro plates where available.
                3. A rule for what to do when reps drop after a load increase.
                4. Every exercise in the current block showing its next target in the log.

                ## Notes
                Machines and cables often jump in large steps. Add a rep before adding a pin, or use a small add-on weight if the gym allows it.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every exercise in the current block has a written rep range, load jump and next target, applied for eight consecutive weeks."
                cadence: rolling
              tasks:
                - "Assign a rep range to each exercise in the current block"
                - "Write the smallest load jump available on each machine or bar"
                - "Write the next session's target beside every exercise in the log"
                - "Decide what to do when reps fall after a load increase"
            - name: Sunday volume and performance review
              description: |-
                ## Purpose
                Training data only teaches you something if someone looks at it. Fifteen minutes on Sunday checking sets done against sets planned, and whether each exercise moved forward, stalled or slipped, catches a stalling muscle or a creeping fatigue problem weeks before it costs you a block.

                ## Milestones
                1. A short review sheet with planned sets, done sets and a trend mark per exercise.
                2. Eight consecutive Sunday reviews completed.
                3. Any exercise stalled for three weeks flagged and a change chosen.
                4. Missed sessions counted and the reason noted.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weekly reviews record planned versus done sets and a progress mark for every exercise."
                cadence: rolling
              tasks:
                - "Create a one-page weekly review sheet"
                - "Compare sets done with sets planned and mark each exercise up, flat or down @recurring(weekly:sun)"
                - "Choose one change for any exercise flat for three weeks"
                - "Note any missed sessions and why"
            - name: Monthly physique check-in
              description: |-
                ## Purpose
                Muscle grows slowly enough that daily or weekly mirror checks mostly measure water and lighting. A monthly check-in that repeats the baseline photos and tape sites under the same conditions shows real change, and lining up three months side by side settles whether the current phase is working.

                ## Milestones
                1. A fixed date each month for photos and measurements.
                2. Each check-in taken fasted, in the baseline spot and clothing.
                3. A side-by-side comparison with the previous month and the baseline.
                4. Six monthly check-ins completed in a row.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly check-ins with matching photos and seven tape sites are stored beside the baseline."
                cadence: rolling
              tasks:
                - "Retake the four poses and seven tape sites under baseline conditions @recurring(monthly:3)"
                - "Put this month's photos beside last month's and the baseline"
                - "Write two lines on what changed and what did not"
            - name: Morning weigh-in and weekly average
              description: |-
                ## Purpose
                Daily bodyweight can swing a kilogram or more with salt, carbohydrate, sleep and toilet timing, which panics people into changing a diet that was working. Weighing each morning under the same conditions and acting only on the weekly average turns a noisy number into a reliable steering signal for bulks and cuts.

                ## Milestones
                1. A digital scale on a hard floor in a fixed spot.
                2. A morning routine: after the toilet, before food or drink, same clothing.
                3. Weekly averages calculated and logged for eight weeks.
                4. Decisions about calories made from averages only, never single days.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weekly bodyweight averages are logged, each built from at least five morning weigh-ins."
                cadence: rolling
              tasks:
                - "Put the scale on a hard floor where it will stay"
                - "Weigh in after waking and the toilet, before food or drink @recurring(daily)"
                - "Calculate last week's average bodyweight and log it @recurring(weekly:mon)"
                - "Write down the rule that only averages change the plan"
            - name: Saturday meal prep for training days
              description: |-
                ## Purpose
                Busy weekdays are when most missed protein and calorie targets happen, because there is nothing ready. Cooking the week's main proteins and carbohydrate sources on Saturday, portioned for training and rest days, makes hitting your numbers the default rather than an act of will.

                ## Milestones
                1. A weekly plan with training-day and rest-day meals written out.
                2. A shopping list built from the plan.
                3. Proteins and staples cooked and portioned for at least four weekdays.
                4. Eight weeks of prep kept with no more than one skipped weekend.

                ## Notes
                Start from the **Weekly meal plan** template. Cooked food generally keeps three to four days in the fridge, so freeze the later portions.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight weeks of Saturday meal prep completed, each covering at least four weekdays of main meals."
                cadence: rolling
              tasks:
                - "Create a weekly meal plan from the template with training and rest days"
                - "Shop, cook and portion the week's main meals @recurring(weekly:sat)"
                - "Label containers by day and freeze anything past day three"
                - "Rotate one new protein recipe in every fortnight"
            - name: Daily protein target habit
              description: |-
                ## Purpose
                Protein intake is the nutrition variable with the clearest link to muscle growth, and it is the one people most often fall short on outside a single big dinner. Setting a daily target from a recognised sports nutrition guideline or a dietitian, and spreading it across three to five meals, turns a good intention into a tick box.

                ## Milestones
                1. A daily protein target set from a sports nutrition guideline or with a dietitian.
                2. Three to five protein feeds placed around the training day.
                3. The target ticked off on at least six days a week for a month.
                4. A short list of quick protein options for days that go wrong.

                ## Notes
                Start from the **Habit tracker** template. If you have kidney disease or another condition affecting diet, agree the target with your doctor first.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The daily protein target is recorded as met on at least 24 days in a month, with the target's source written down."
                cadence: rolling
              tasks:
                - "Look up a sports nutrition guideline for protein and set your daily target"
                - "Plan where three to five protein feeds sit in your day"
                - "Tick off the daily protein target in the habit tracker @recurring(daily)"
                - "Write a list of five quick protein options for chaotic days"
            - name: Mesocycle with a volume ramp and planned deload
              description: |-
                ## Purpose
                Running the same sets and reps indefinitely leads to stale progress and accumulating fatigue. A mesocycle of four to six weeks that starts near your starting set counts, adds a set to priority muscles every week or so, then ends with a planned lighter week gives growth a push and recovery a place, and makes each block comparable with the last.

                ## Milestones
                1. A block length chosen and written into the calendar with the deload week marked.
                2. Week-by-week set counts per muscle set out from start to peak.
                3. Effort targets per week, starting further from failure and finishing closer.
                4. A short end-of-block note comparing start and finish performance.

                ## Notes
                Start from the **Training program** template. The deload is part of the plan, not a reward for feeling tired.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Two consecutive mesocycles are completed as written, each with a planned deload and an end-of-block note."
                cadence: cyclic
              tasks:
                - "Choose a block length and mark the deload week in the calendar"
                - "Write each week's set count per muscle from start to peak"
                - "Set the effort target for each week of the block"
                - "Write an end-of-block note comparing first and last week numbers"
            - name: Exercise rotation at each block end
              description: |-
                ## Purpose
                Some exercises keep progressing for a year, others stall or start to ache after six weeks. Deciding at each block end which movements stay, which rotate to an alternative from your menu and which get a new rep range keeps progress going without changing everything at once, which would make the log meaningless.

                ## Milestones
                1. Every exercise rated keep, rotate or change rep range at block end.
                2. No more than a third of exercises changed in one rotation.
                3. Replacements chosen from the exercise menu with new starting loads estimated.
                4. The reasons for each change written in the log.
              priority: low
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "At the end of each block, every exercise has a recorded keep, rotate or change decision with a reason, and at most a third change."
                cadence: cyclic
              tasks:
                - "Rate each exercise keep, rotate or change at the end of this block"
                - "Pick replacements from the exercise menu for rotated movements"
                - "Estimate starting loads for each new exercise"
                - "Record the reason for every change in the log"
            - name: Rest periods and session length discipline
              description: |-
                ## Purpose
                Rushing between sets of heavy compounds cuts the reps you get, which is the opposite of what hypertrophy work needs, while chatting for five minutes stretches a session past your window. Timing rests, usually longer for big compounds and shorter for isolation work, keeps quality high and sessions inside the hour you have.

                ## Milestones
                1. A rest target written for compound and isolation exercises.
                2. A timer used between every working set for two weeks.
                3. Session start and end times logged.
                4. Average session length within ten minutes of your planned window.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two weeks of sessions logged with timed rests and start and end times, averaging within ten minutes of plan."
                cadence: rolling
              tasks:
                - "Write rest targets for compound and isolation exercises"
                - "Set up a rest timer on your phone or watch"
                - "Log session start and finish times for two weeks"
                - "Trim or superset accessories if sessions run long"
            - name: Quarterly progress review against your physique goal
              description: |-
                ## Purpose
                Monthly check-ins show change; a quarterly review asks whether it is the change you wanted. Lining up three months of photos, waist and arm numbers, bodyweight trend and key lifts against your written goal tells you whether to continue the current phase, adjust the split or switch from building to cutting.

                ## Milestones
                1. Three months of photos, tape numbers and bodyweight averages in one place.
                2. Performance on five key exercises compared from start to end of the quarter.
                3. A verdict written for each priority muscle group: improving, flat or behind.
                4. One decision recorded for the next quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Four quarterly reviews in a year each record a verdict per priority muscle and one decision for the next quarter."
                cadence: cyclic
              tasks:
                - "Gather the quarter's photos, measurements, averages and key lifts @recurring(quarterly)"
                - "Ask the agent to summarise the quarter's numbers against your goal"
                - "Write a verdict for each priority muscle group"
                - "Record one decision for the next quarter"
            - name: Reps-in-reserve calibration
              description: |-
                ## Purpose
                Most lifters badly underestimate how many reps they have left, stopping three or four short of failure while believing they are close. Testing your guesses on safe exercises, by predicting reps in reserve then continuing to failure, teaches you what close really feels like, which matters because hypertrophy depends on sets taken near failure.

                ## Milestones
                1. Three safe exercises chosen for testing, such as machine presses, leg extensions and cable work.
                2. On each, a reps-in-reserve guess written before continuing to true failure.
                3. Guess versus actual recorded across at least six sets.
                4. Your typical error noted and used to adjust future effort ratings.

                ## Notes
                Never take free-weight squats, bench presses or deadlifts to failure without a spotter or safety arms. Machines and cables are the right place to learn this.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Six or more sets record a reps-in-reserve guess against actual reps to failure, with your average error written down."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Pick three machine or cable exercises for calibration sets"
                - "Write your reps-left guess before continuing each set to failure"
                - "Record guess and actual for at least six sets"
                - "Note your average error and adjust how you rate effort"
            - name: Controlled eccentrics and full range of motion
              description: |-
                ## Purpose
                Bouncing out of the bottom, cutting depth and dropping the weight on the way down let you lift more while giving the muscle less work. Practising a controlled lowering phase of two to three seconds and a consistent full range on every rep makes your logged numbers honest and moves tension onto the muscle you are trying to grow.

                ## Milestones
                1. A depth or range standard written for each first-choice exercise.
                2. Loads reduced where needed to hit the standard on every rep.
                3. A controlled lowering phase used on all working sets for four weeks.
                4. Load progression resumed from the honest new baseline.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Every first-choice exercise has a written range standard, kept on all working sets for four consecutive weeks."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write a range standard for each first-choice exercise"
                - "Drop the load on any exercise where you cannot meet the standard"
                - "Count a slow lowering phase on every rep for four weeks"
                - "Mark the new honest baseline in the log"
            - name: Lengthened-position training for each muscle
              description: |-
                ## Purpose
                Research increasingly suggests that training muscles hard at long lengths, such as deep stretches in a Romanian deadlift, an incline curl or an overhead triceps extension, may grow them more than shortened-range work. Learning which exercise loads each muscle in its stretched position, and placing one in each session, applies that idea without rebuilding your whole programme.

                ## Milestones
                1. One lengthened-position exercise identified for each muscle group.
                2. Each tried for two sessions and checked for joint comfort.
                3. At least one included per session in the next block.
                4. Your own response compared with the previous block at block end.

                ## Notes
                Treat this as an evolving area of research rather than a rule, and stretch under control, not with momentum.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A lengthened-position exercise is listed for every muscle group and at least one is used per session for a full block."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read one summary of research on training at long muscle lengths"
                - "List a lengthened-position option for each muscle group"
                - "Try each option for two sessions and note joint comfort"
                - "Add one per session to next block's plan"
            - name: Myo-reps, drop sets and rest-pause used sparingly
              description: |-
                ## Purpose
                Intensity techniques can add effective volume in less time, which helps when a session is short or a muscle lags, but used everywhere they pile on fatigue and make progress hard to read. Learning how myo-reps, drop sets and rest-pause work, and limiting them to the last set of one or two isolation exercises, gives you a tool without the chaos.

                ## Milestones
                1. The method for each technique written in a sentence or two.
                2. Each technique tried on an isolation exercise and logged clearly.
                3. A rule set for where they are allowed, such as last set of isolation work only.
                4. A comparison of session time and weekly progress with and without them.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three intensity techniques are written up, trialled on isolation work and governed by a written usage rule."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write how myo-reps, drop sets and rest-pause are performed"
                - "Try one technique on the last set of a cable or machine exercise"
                - "Log technique sets with a clear marker so they are not confused"
                - "Write the rule for where these techniques are allowed"
            - name: Macro tracking accuracy with a kitchen scale
              description: |-
                ## Purpose
                Eyeballed portions of oil, rice, nut butter and cereal are routinely out by a third, which can erase a planned surplus or deficit on its own. Weighing food for a few weeks, learning how to log raw versus cooked weights and building a set of saved meals makes your numbers accurate enough to trust, and teaches estimating for days without a scale.

                ## Milestones
                1. A digital kitchen scale in use for all home meals.
                2. Raw versus cooked logging understood and applied consistently.
                3. Ten regular meals saved in your tracking app with weighed portions.
                4. A spot check where you estimate a portion, then weigh it, within 15 percent.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten weighed meals are saved in your tracker and three estimate-then-weigh checks land within 15 percent."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Buy a digital kitchen scale that reads to the gram"
                - "Weigh and log every home meal for two weeks"
                - "Save your ten most eaten meals in the tracking app"
                - "Estimate three portions by eye, then weigh them to check"
            - name: Reading hypertrophy research without the hype
              description: |-
                ## Purpose
                Social feeds turn one small study into a new rule every week, and lifters bounce between programmes as a result. Learning to read a study's population, duration and measurement method, and favouring reviews and meta-analyses, lets you sort useful findings from noise and keep a programme long enough to work.

                ## Milestones
                1. A reading queue of five reviews or meta-analyses on volume, frequency, effort and range.
                2. A one-paragraph summary written for each, including who was studied.
                3. A checklist of four questions to ask of any new claim.
                4. One programme change made, or explicitly not made, from what you read.

                ## Notes
                Start from the **Reading queue** template. Trained lifters, untrained students and older adults often respond differently, so check who was studied first.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five research summaries and a four-question checklist are written, with one programme decision recorded from them."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Set up a reading queue from the template"
                - "Add five review papers on volume, frequency, effort and range"
                - "Write a one-paragraph summary after each paper"
                - "Draft four questions to ask of any new training claim"
            - name: Filming working sets for range and tempo
              description: |-
                ## Purpose
                What a set feels like and what it looks like are often different: depth shrinks, hips shoot up and the lowering phase speeds up as fatigue builds. Filming one working set of each main movement each month, from the side, gives an objective check on range and tempo and shows whether load gains were earned.

                ## Milestones
                1. A side-on camera position chosen for each main movement.
                2. One set of each main movement filmed and stored by date.
                3. Each clip checked against your written range standard.
                4. A fault found and a fix applied in the following sessions.

                ## Notes
                Check your gym's rules on filming and keep other members out of frame.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Three months of dated clips cover each main movement, with at least one fault identified and corrected."
                cadence: rolling
              tasks:
                - "Check your gym's filming rules and pick side-on angles"
                - "Film one working set of each main movement @recurring(monthly:18)"
                - "Compare each clip with your written range standard"
                - "Note one fault to fix in the next sessions"
            - name: Lean bulk with a monthly gain ceiling
              description: |-
                ## Purpose
                Dirty bulks add far more fat than muscle and leave a long, miserable cut to follow. A lean bulk sets a modest surplus above your measured maintenance and a ceiling on monthly weight gain, smaller the more experienced you are, so that waist growth stays slow while lifts and arm and thigh measurements climb.

                ## Milestones
                1. A start date, end date and starting surplus recorded.
                2. A monthly gain ceiling written, along with the waist increase that would trigger a review.
                3. Calories adjusted only from monthly averages against the ceiling.
                4. End-of-bulk photos, tape numbers and lifts compared with the start.

                ## Notes
                Newer lifters can usually gain faster than people several years in. If the waist grows much faster than arms and thighs, slow the gain down.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A bulk runs to its end date with monthly gain kept under the written ceiling and a start versus end comparison recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Set the bulk start date, end date and starting surplus"
                - "Write the monthly gain ceiling and the waist trigger"
                - "Compare the month's average gain with the ceiling and adjust calories @recurring(monthly:12)"
                - "Compare start and end photos, tape numbers and lifts"
            - name: Fat-loss phase that protects muscle
              description: |-
                ## Purpose
                Cutting too fast, or dropping training volume and protein when calories fall, is how lifters lose the muscle they spent a year building. A planned cut with a weekly loss rate, commonly around half to one percent of bodyweight, training kept heavy, protein held high and steps tracked, keeps strength and size while the fat comes off.

                ## Milestones
                1. A target loss rate, start date and review date agreed and written down.
                2. Training loads and most of your set volume kept, with only minor trims.
                3. Weekly average loss checked against the target and calories or steps adjusted.
                4. Strength on key lifts within a few percent of the starting numbers at the end.

                ## Notes
                Stop and seek help if dieting brings dizziness, a missed period, obsessive food thoughts or binge episodes. These are reasons to pause, not push.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A cut is completed at the planned weekly rate, with key lift strength held within five percent of the start."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Set the cut's target loss rate, start date and end date"
                - "Write which sets you will keep and which you may trim"
                - "Check the weekly average loss and adjust calories or steps @recurring(weekly:fri)"
                - "Record key lift numbers at the start, midpoint and end"
            - name: Maintenance phase after a diet
              description: |-
                ## Purpose
                The weeks after a cut are when most lean bodies are lost, because hunger is high and there is no plan beyond stopping. A deliberate maintenance phase that raises calories in steps to the new maintenance, holds weight within a small band for a couple of months and lets training performance recover makes the result stick.

                ## Milestones
                1. A stepwise calorie increase plan written for the first four weeks.
                2. A bodyweight band set around the end-of-cut average.
                3. Weight held inside the band for eight weeks.
                4. Training performance back to or above pre-cut levels.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Bodyweight stays within the written band for eight weeks after a cut while key lifts return to pre-cut levels."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write the weekly calorie steps for the first month after the cut"
                - "Set a bodyweight band around your end-of-cut average"
                - "Check weekly averages against the band"
                - "Compare key lifts with pre-cut numbers after eight weeks"
            - name: Specialisation block for a lagging muscle
              description: |-
                ## Purpose
                Almost everyone has one muscle that will not keep up, often calves, rear delts, upper chest or hamstrings. A six to eight week specialisation block that trains that muscle first in the session, adds sets and frequency, and trims volume elsewhere to pay for it gives the weak point the priority it has never had.

                ## Milestones
                1. One lagging muscle chosen from your photos and quarterly review.
                2. Its weekly sets raised and frequency increased to three sessions.
                3. Maintenance volume set for other muscles to keep fatigue in check.
                4. Its tape number and photos compared at the start and end of the block.

                ## Notes
                Specialise one muscle at a time. Two at once usually means neither gets enough.
              priority: medium
              deadlineOffsetDays: 56
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A specialisation block runs for at least six weeks with the lagging muscle's sets raised and its start and end measurements recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Pick the lagging muscle from your photos and review"
                - "Move it to first in the session three times a week"
                - "Cut other muscles to maintenance sets to make room"
                - "Measure and photograph it at the start and end of the block"
            - name: Cardio dose that fits a muscle-building phase
              description: |-
                ## Purpose
                Cardio supports heart health, appetite control and work capacity, but large amounts of hard running or cycling close to leg sessions can eat into recovery. Choosing a type, amount and timing that suits the phase, such as walking and easy cycling in a bulk and more steps in a cut, keeps the benefits without stealing from leg day.

                ## Milestones
                1. Current weekly cardio and daily steps recorded.
                2. A cardio plan written for the current phase with type, minutes and placement.
                3. Hard cardio kept away from the day before leg sessions.
                4. Leg performance checked after four weeks for any drop.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written cardio plan for the current phase states type, weekly minutes and placement, with a four-week leg performance check recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Record a week of cardio minutes and daily steps"
                - "Choose cardio type and weekly minutes for this phase"
                - "Place hard cardio away from the day before legs"
                - "Check leg session numbers after four weeks"
            - name: Supplement shortlist with third-party testing
              description: |-
                ## Purpose
                Supplement shelves are full of blends with little evidence and occasional contamination, which matters most to anyone entering drug-tested competition. Narrowing to the few with solid evidence for lifters, such as creatine monohydrate, protein powder and caffeine, and buying only batch-tested products saves money and protects your eligibility.

                ## Milestones
                1. Current supplements listed with cost per month.
                2. Each checked against an independent evidence summary.
                3. A shortlist chosen, with batch numbers checked on a third-party testing register.
                4. Anything without evidence or testing stopped.

                ## Notes
                Start from the **Purchase decision** template. Tell your doctor or pharmacist what you take, especially if you have a medical condition or take medicines.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written supplement shortlist names each product, its evidence source and its third-party test status, with the rest stopped."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every supplement you take and its monthly cost"
                - "Check each against an independent evidence summary"
                - "Look up the batch of each shortlisted product on a testing register"
                - "Recheck testing status and evidence for each product @recurring(yearly)"
            - name: Hiring an online physique coach
              description: |-
                ## Purpose
                A good coach adds accountability and an outside eye on photos; a poor one sells a template and a meal plan at a monthly fee. Interviewing two or three coaches with the same questions about check-ins, qualifications, how they adjust plans and how they handle a prep's health side lets you pay for judgement rather than marketing.

                ## Milestones
                1. What you want from a coach written down, with a monthly budget.
                2. Three coaches shortlisted from client results and referrals, not follower counts.
                3. Each asked the same six questions on a call.
                4. A coach hired, or a recorded decision to self-coach for now.

                ## Notes
                Be wary of anyone who promises a set amount of muscle, discourages medical checks or pushes products they sell.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three coaches are compared on the same six questions and a hire or self-coach decision is recorded with reasons."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write what you want from a coach and your monthly budget"
                - "Shortlist three coaches through referrals and client results"
                - "Ask each the same six questions on a short call"
                - "Record your choice and the reasons"
            - name: First physique photoshoot
              description: |-
                ## Purpose
                Booking a photoshoot gives you a lower-pressure goal than a stage, with a fixed date to diet toward and a record of your best condition. Choosing a photographer who shoots physiques, agreeing the style and lighting, and planning the final two weeks of food and training makes the day about the photos rather than last-minute panic.

                ## Milestones
                1. A physique photographer booked, with style, location and price agreed in writing.
                2. A conditioning plan in place that arrives at the date without crash dieting.
                3. Outfits, oil or tan and the poses list ready a week before.
                4. Final images received and stored with the shoot date.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The shoot happens on the booked date with agreed poses covered and final images received."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Shortlist two photographers whose portfolios include physique work"
                - "Book a date at least twelve weeks out and confirm the price in writing"
                - "Write the list of shots and poses you want"
                - "Pack outfits, tan and snacks the day before"
            - name: Choosing a federation and first show
              description: |-
                ## Purpose
                Federations differ in drug testing, division criteria, judging style, costs and how far you will travel. Comparing two or three on those points, watching their posted judging criteria for your division and picking a show at least sixteen weeks away sets the real deadline that a prep is planned backwards from.

                ## Milestones
                1. Two or three federations compared on testing, divisions, entry costs and locations.
                2. The judging criteria for your division read and summarised.
                3. A show at least sixteen weeks away chosen, with a backup date.
                4. Membership, athlete registration and any testing agreements completed.

                ## Notes
                Natural lifters should choose a federation with real testing and check its banned list before buying any supplement.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One federation and one show at least sixteen weeks away are chosen, with membership and registration completed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Compare two or three federations on testing, divisions and costs"
                - "Read the judging criteria for your division"
                - "Choose a show sixteen or more weeks out and a backup"
                - "Complete federation membership and registration"
            - name: Sixteen-week contest prep timeline
              description: |-
                ## Purpose
                First-time competitors usually start too late and diet too hard in the last month, arriving flat and exhausted. Planning sixteen to twenty weeks backward from show day, with a steady loss rate, scheduled check-ins, posing practice and buffer weeks, lets you arrive in condition with the final weeks for refinement rather than rescue.

                ## Milestones
                1. A week-by-week timeline counting back from show day, with two buffer weeks.
                2. A target loss rate agreed with your coach and checked every week.
                3. Weekly check-ins with photos, averages and notes sent on a fixed day.
                4. A go or delay decision taken six weeks out from the show.

                ## Notes
                If you are not in near-stage condition by six weeks out, choosing a later show is a sound decision, not a failure.
              priority: high
              deadlineOffsetDays: 140
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written sixteen-week timeline is followed with weekly check-ins sent and a recorded go or delay decision six weeks out."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Write the week-by-week prep timeline back from show day"
                - "Agree the weekly loss rate and check-in format with your coach"
                - "Send photos, weekly average and notes to your coach @recurring(weekly:wed)"
                - "Book a go or delay decision for six weeks out"
            - name: Mandatory poses and individual routine
              description: |-
                ## Purpose
                Judges compare you in a line-up of quarter turns or mandatory poses, and many well-conditioned first-timers lose places by shaking, forgetting to keep the legs tight or posing to the mirror instead of the panel. Learning your division's poses, rehearsing them often and building a short individual routine makes the stage feel familiar.

                ## Milestones
                1. Your division's mandatory poses or quarter turns listed from the federation's rules.
                2. Each pose filmed and checked from the front and side.
                3. A routine of the required length set to music, if your division has one.
                4. Poses held for a minute at a time in the final four weeks without shaking.

                ## Notes
                A posing coach for two or three sessions often gains more places than the last kilogram of fat loss.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "All required poses are filmed and approved by a coach, with any individual routine rehearsed in full at least ten times."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List your division's poses from the federation rules"
                - "Book two sessions with a posing coach"
                - "Practise poses and transitions for twenty minutes @recurring(weekly:tue,fri)"
                - "Film the full routine and compare it with the coach's notes"
            - name: Peak week plan agreed with your coach
              description: |-
                ## Purpose
                Peak week is where most damage is done by internet advice: severe water cuts, diuretics and wild carb loads leave competitors flat, cramping or unwell. Writing a conservative plan with your coach, rehearsing it on a mock peak a few weeks out and agreeing what is off limits keeps the final week boring, which is what you want.

                ## Milestones
                1. A day-by-day peak week plan written with your coach covering food, fluids, training and posing.
                2. A mock peak trialled a few weeks before the show, with photos taken.
                3. A written list of things you will not do, including diuretics or extreme water restriction.
                4. The final plan printed and shared with whoever is helping you that week.

                ## Notes
                Extreme water and electrolyte manipulation can cause serious harm. Talk to your doctor if you have any heart, kidney or blood pressure concerns before a prep.
              priority: medium
              frontmatter:
                mode: event
                output_kind: artifact
                success_criteria: "A written peak week plan exists, a mock peak has been trialled and photographed, and the off-limits list is shared with your helper."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask your coach for a draft day-by-day peak week plan"
                - "Schedule a mock peak three to four weeks before the show"
                - "Write the list of methods you will not use"
                - "Print the final plan and give a copy to your helper"
            - name: Show day kit, tan and food bag
              description: |-
                ## Purpose
                Show day is long, with early check-in, tanning, waiting and pre-judging that can run hours late. A tested kit list with suit, tan, glaze, robe, food and fluids planned by hour, and a helper who knows the schedule, means you walk on stage calm instead of hunting for a safety pin.

                ## Milestones
                1. Suit or trunks bought, fitted and checked against federation rules.
                2. Tan appointment booked and a tested skin patch done beforehand.
                3. A food and fluid timeline by hour for show day written with your coach.
                4. Bag packed and checked the night before against a written list.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "On show day every item on the written kit list is packed, check-in is made on time and the food timeline is followed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Order the suit or trunks and check them against federation rules"
                - "Book the tan appointment and do a patch test"
                - "Write the show day food and fluid timeline with your coach"
                - "Pack and tick off the show bag the night before"
            - name: Post-show recovery and reverse diet
              description: |-
                ## Purpose
                The weeks after a show bring rapid weight regain, intense hunger and often a low mood once the goal disappears, and many competitors rebound well past their starting point. Planning the return to maintenance before show day, with a calorie step plan, a regain band, a break from photos and someone to talk to, protects both your physique and your relationship with food.

                ## Milestones
                1. A post-show calorie plan written before peak week.
                2. A bodyweight band for the first eight weeks agreed with your coach.
                3. A short break from posing photos and mirror checks scheduled.
                4. A check-in on mood and eating with someone you trust at four and eight weeks.

                ## Notes
                If eating feels out of control or mood stays low after the show, talk to your doctor. Post-show struggles are common and treatable.
              priority: high
              deadlineOffsetDays: 56
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Bodyweight stays within the agreed band for eight weeks after the show, with mood check-ins held at four and eight weeks."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write the post-show calorie step plan before peak week"
                - "Agree an eight-week bodyweight band with your coach"
                - "Plan two restaurant meals for the week after the show"
                - "Book mood and eating check-ins at four and eight weeks"
            - name: Hypertrophy training around rotating shifts
              description: |-
                ## Purpose
                Nurses, factory workers and emergency staff on rotating shifts rarely get the same training time twice, and a fixed Monday chest day collapses by week two. Using a rotating split that runs in order rather than by weekday, with shorter sessions on night blocks and meals planned around the shift, keeps volume steady when the rota does not.

                ## Milestones
                1. Your rota pattern written out for the next month.
                2. A split that rotates in sequence rather than by day of the week.
                3. A shorter fallback session for night shifts or long days.
                4. Weekly sets per muscle within 80 percent of plan across a full rota cycle.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A full rota cycle is completed on a sequence-based split, with weekly sets per muscle at or above 80 percent of plan."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write out the next month of shifts"
                - "Convert your split into a sequence that ignores weekdays"
                - "Write a 40-minute fallback session for night shift weeks"
                - "Plan protein feeds around each shift type"
            - name: Travel weeks with hotel gym sessions
              description: |-
                ## Purpose
                Work trips and holidays often mean a hotel gym with light dumbbells, one cable stack or nothing at all. Planning a travel version of your split, built around higher reps, slower tempo and bands, keeps muscles stimulated for a week or two so that you return without losing ground or guilt.

                ## Milestones
                1. A travel session written for a dumbbell-only gym and one for bodyweight and bands.
                2. Resistance bands added to your travel bag.
                3. Two to four sessions completed on each trip.
                4. Normal loads resumed within a week of returning.

                ## Notes
                A week or two of reduced training will not cost you meaningful muscle; the aim is to keep the habit, not to set records.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Two travel sessions are written and at least two are completed on the next trip, with normal loads back within a week."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a dumbbell-only session and a bands-only session"
                - "Pack a set of resistance bands for the next trip"
                - "Check the hotel gym equipment list before you book"
                - "Log travel sessions in the usual logbook"
            - name: Plant-based protein planning for muscle gain
              description: |-
                ## Purpose
                Vegetarian and vegan lifters can build muscle well, but reaching a high protein target from plants takes more planning because portions are larger and some sources are less complete. Mapping your protein sources, combining legumes, soy, seitan and grains, and considering a plant protein powder makes the target reachable without five tins of beans a day.

                ## Milestones
                1. Current daily protein from plant sources measured over a week.
                2. A list of ten high-protein plant foods with protein per portion.
                3. A day of meals that reaches your target written out.
                4. Your diet reviewed with a dietitian for any nutrients worth monitoring, such as B12 or iron.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A written plant-based day of eating reaches your protein target, with any nutrients to monitor noted after a professional review."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Log a week of plant protein intake"
                - "List ten high-protein plant foods with protein per portion"
                - "Write a full day of meals that hits your target"
                - "Ask a dietitian or your doctor which nutrients to monitor"
            - name: Minimum effective training through a crunch season
              description: |-
                ## Purpose
                A new baby, a house move or a brutal quarter at work can cut training time in half for months. Instead of stopping, a minimum effective plan of two or three short sessions with fewer exercises, sets kept near failure and a looser diet target maintains most of your muscle until life settles.

                ## Milestones
                1. A realistic weekly time budget written for the next three months.
                2. A two or three session plan of about 45 minutes each that hits every muscle.
                3. Calories set at maintenance rather than a bulk or cut.
                4. Key lifts within ten percent of their starting numbers at the end.

                ## Notes
                Maintaining muscle takes much less volume than building it, often around a third of your usual sets taken hard.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A minimum plan runs for at least eight weeks with key lifts held within ten percent of their starting numbers."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write the weekly time you can really train for three months"
                - "Cut your split to two or three short full-body sessions"
                - "Book next week's three short sessions into the calendar @recurring(weekly:sun)"
                - "Set calories to maintenance for the period"
            - name: Rebuilding muscle after a long layoff
              description: |-
                ## Purpose
                Lifters returning after six months or more away regain size faster than they first built it, but jumping straight back to old loads and set counts brings brutal soreness and often a tweak. Starting at a fraction of old volume and load, then ramping over four to six weeks, lets that muscle memory work for you without wrecking the first fortnight.

                ## Milestones
                1. Old working loads and set counts recorded as a reference only.
                2. A first week at roughly half the old sets and loads well short of failure.
                3. A four to six week ramp plan written back to normal volume.
                4. New baseline photos and tape numbers taken in week one.

                ## Notes
                If the layoff followed an injury or illness, check with your doctor or physio before restarting heavy work.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written return ramp is completed over four to six weeks, with new baseline photos and measurements taken in week one."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write your old loads and set counts as a reference"
                - "Plan week one at about half the old volume"
                - "Write the weekly ramp back to normal sets"
                - "Retake baseline photos and measurements in week one"
            - name: Cycle-aware training log for female physique athletes
              description: |-
                ## Purpose
                Women training for bikini, wellness, figure or physique divisions often notice changes in strength, water retention, hunger and scale weight across the menstrual cycle that can derail a check-in. Logging cycle days beside training and weight for three cycles shows your own pattern, so that a premenstrual jump is read correctly instead of triggering a cut in calories.

                ## Milestones
                1. Cycle day added to your daily weight and training log.
                2. Three full cycles logged with weight, energy and key lifts.
                3. Your personal pattern summarised in a few lines.
                4. Your coach briefed so check-ins are read in context.

                ## Notes
                Missed periods during a diet are a medical signal, not a sign of good conditioning. Speak to your doctor if it happens.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Three cycles of weight, energy and key lift data are logged and a written personal pattern is shared with your coach."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Add a cycle day column to your weight and training log"
                - "Log weight, energy and key lifts through three full cycles"
                - "Ask the agent to summarise any pattern across the three cycles"
                - "Share the pattern summary with your coach"
            - name: Competitor health checks across a prep
              description: |-
                ## Purpose
                Long diets, very low body fat and, for some, substances they do not mention can affect blood pressure, blood counts, hormones, lipids and kidney function. Booking a check with your doctor before prep starts and again afterwards, honest about everything you take, gives you a baseline and an early warning rather than a surprise.

                ## Milestones
                1. A doctor's appointment booked before prep with your plans explained.
                2. Pre-prep blood tests and blood pressure recorded in your log.
                3. Home blood pressure and resting heart rate tracked through the prep.
                4. A post-show recheck completed and compared with the baseline.

                ## Notes
                Tell your doctor about every supplement and anything else you take, prescribed or not, so results are read correctly. A doctor's appointment is confidential.
              priority: high
              frontmatter:
                mode: service
                output_kind: knowledge
                success_criteria: "Pre-prep and post-show health checks are completed with results stored side by side and discussed with your doctor."
                cadence: cyclic
                effort_hours_estimate: "4"
              tasks:
                - "Book a doctor's appointment before prep begins"
                - "List everything you take to show the doctor honestly"
                - "Record home blood pressure and resting heart rate during prep @recurring(monthly:20)"
                - "Book the post-show recheck before show day"
            - name: Off-season plan from judges' feedback
              description: |-
                ## Purpose
                Judges and your placing tell you more about your physique than any mirror, but only if you ask and write it down. Collecting scoresheets and feedback after a show, comparing stage photos with the division's ideal and turning the gaps into a twelve-month off-season plan makes the next show a step up rather than a repeat.

                ## Milestones
                1. Feedback requested from the head judge or federation and recorded verbatim.
                2. Stage photos compared with top placings in your class.
                3. Three gaps ranked by how much they cost you on stage.
                4. An off-season plan with blocks, a bulk phase and a target show date.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Judges' feedback is recorded, three ranked gaps are written and a twelve-month off-season plan with a target show exists."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the federation or head judge for feedback after the show"
                - "Compare your stage photos with the top three in your class"
                - "Rank three physique gaps by stage impact"
                - "Ask the agent to draft an off-season block outline from the gaps"
            - name: Coaching a training partner through their first mesocycle
              description: |-
                ## Purpose
                Once your own system works, a friend or partner often asks for help, and teaching them is one of the best ways to sharpen what you know. Running them through one structured block with a split, set counts, a logbook and a weekly look at their numbers gives them a strong start and keeps you honest about the basics.

                ## Milestones
                1. Their goal, schedule and any injuries written down at the first meeting.
                2. A split, exercise list and starting set counts written for them.
                3. Their logbook reviewed with them each week of the block.
                4. A short end-of-block summary handed over with next steps.

                ## Notes
                Stay inside what you know. Refer pain, injuries and medical questions to a physio or doctor.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A training partner completes one full mesocycle on a plan you wrote, with weekly reviews held and an end-of-block summary delivered."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask your partner for their goal, schedule and injuries"
                - "Write their split, exercises and starting sets"
                - "Review their logbook with them each week @recurring(weekly:thu)"
                - "Hand over a summary and next steps at block end"
            - name: Three-year physique development plan
              description: |-
                ## Purpose
                Meaningful changes in a trained physique are measured in years, not blocks, and lifters who plan only the next twelve weeks drift between bulks, cuts and shows without direction. A three-year outline of building phases, cuts, possible shows and the two or three weak points to fix gives each year a job and makes patient decisions easier.

                ## Milestones
                1. A year-by-year outline naming the main phase and the priority muscle for each year.
                2. Possible shows or shoots placed on the timeline with gaps for proper off-seasons.
                3. Measurable markers set for each year, such as waist at a given bodyweight or arm size.
                4. A yearly review date in the calendar.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A three-year plan names each year's main phase, priority muscle and measurable markers, with a yearly review booked."
                cadence: cyclic
                effort_hours_estimate: "4"
              tasks:
                - "Sketch the main phase for each of the next three years"
                - "Place possible shows or shoots with full off-seasons between"
                - "Write one measurable marker for each year"
                - "Review the three-year plan against the year's results @recurring(yearly)"
---

# Bodybuilding & Hypertrophy Training

This area is for lifters who want more muscle and a physique they can measure, from someone a year into the gym to an amateur competitor booking a first show. It starts with the foundations (a written physique goal, baseline photos and measurements, a split, an exercise menu, starting set counts and a maintenance calorie estimate), then the routines that keep progression and bodyweight honest, the skills of effort, tempo and range, the decisions about bulking, cutting and bringing up weak points, the show season from federation choice to reverse diet, variants for shift workers, travellers, plant-based and returning lifters, and finally the multi-year work of an experienced physique athlete.

What repeats is a morning weigh-in with a Monday weekly average, a daily protein check, a Saturday meal prep, a Sunday volume and performance review, a physique check-in on the 3rd of each month, filmed sets on the 18th and a quarterly review against your goal, plus weekly coach check-ins and posing practice during a prep. The Training program, Metrics log, Weekly meal plan, Habit tracker, Reading queue and Purchase decision templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
