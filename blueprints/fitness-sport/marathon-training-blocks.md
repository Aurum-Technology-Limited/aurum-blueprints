---
id: fitness-sport.marathon-training-blocks
name: Marathon Training Blocks
description: "A full marathon build laid out week by week: race and goal choice, long runs and key sessions, pacing skills, taper, race week and recovery, for first-timers and time chasers."
category: personal
version: 1.0.0
tags: [fitness-sport, marathon-training-blocks, athlete, everyone, marathon, long-runs, taper, race-pace]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - training-program
    - metrics-log
    - trip
  pillars:
    - name: Fitness & Sport
      emoji: "🏋️"
      description: "Training, play and competition: building strength, endurance and skill in a sport or a gym, structuring blocks of work around events, recovering properly, and keeping the sessions honest with a log rather than a feeling."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Marathon Training Blocks
          description: "Structuring a full marathon build, from base mileage and long runs to tapering and race day, for first-timers and runners chasing a time."
          projects:
            - name: Choosing the target marathon and build start date
              description: |-
                ## Purpose
                Picking the race first sets everything else: the start date of a 16 to 20 week build, the season you train through and the course you prepare for. Choose a race that gives you at least four months, a course profile that suits your goal and an entry route you can actually get, whether ballot, charity place or open entry.

                ## Milestones
                1. Three candidate marathons compared on date, course profile, cut-off time, entry route and travel.
                2. One race entered, or the ballot result date in the calendar.
                3. The build start date counted back 16 to 20 weeks from race day.
                4. Known clashes in the build window, such as holidays or busy work weeks, listed.

                ## Notes
                If the race is a ballot entry, pick a backup marathon three to six weeks later so a rejection does not waste a season of base building.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One marathon entered or a ballot pending, with the build start date and a backup race written in your calendar."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List three marathons that fall four to eight months from now"
                - "Compare their course profiles, cut-off times and entry routes"
                - "Enter the chosen race or note the ballot result date"
                - "Count back 18 weeks from race day and mark the build start"
            - name: Honest goal time from a recent race result
              description: |-
                ## Purpose
                Goal times picked from a round number or a friend's result are the most common reason marathon builds go wrong, because every pace in the plan is set from them. Basing the goal on a half marathon or 10K raced in the last three months, then adjusting for your weekly mileage and experience, gives paces you can actually hold for 42.2 km.

                ## Milestones
                1. A recent race result, or a fresh time trial, chosen as the reference.
                2. An equivalent marathon time worked out with a race equivalence calculator.
                3. The prediction adjusted for low mileage or a first marathon.
                4. A goal range written down: an A goal, a B goal and a finish-happy C goal.

                ## Notes
                Equivalence calculators assume marathon-specific training. First-timers and runners under about 50 km a week usually finish slower than the prediction, so build in a margin.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written A, B and C goal time, each tied to a recent race result and a sentence explaining any adjustment."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find your best half marathon or 10K time from the last three months"
                - "Run a 5K or 10K time trial if you have no recent result"
                - "Write A, B and C marathon goals with a line of reasoning for each"
                - "Race a 10K or half marathon to refresh your goal evidence @recurring(quarterly)"
            - name: Eight-week running mileage baseline
              description: |-
                ## Purpose
                Before setting week one of a plan you need to know what your body is already used to: average weekly distance, longest run and how many days you run. Pulling the last eight weeks from your watch or app shows whether the plan's starting volume is a step you can absorb or a jump that invites trouble.

                ## Milestones
                1. Weekly distance for the last eight weeks listed.
                2. Average weekly distance, longest single run and runs per week worked out.
                3. The gap between your baseline and the plan's first week measured.
                4. A decision recorded on whether to add base-building weeks before the plan.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A one-page baseline with eight weeks of mileage, the weekly average and longest run, compared against week one of the plan."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Export or copy the last eight weeks of runs from your watch app"
                - "Work out your average weekly distance and longest run"
                - "Compare the baseline with week one of your chosen plan"
                - "Add base-building weeks before the plan if the jump is large"
            - name: Pre-build health check for a first marathon
              description: |-
                ## Purpose
                Most healthy adults can train for a marathon, but a build adds hours of sustained effort each week, and some conditions, medicines or family histories deserve a conversation first. Booking a check with your doctor before the long runs start, with your plan and questions in hand, means any limits are known before week one.

                ## Milestones
                1. A list of your conditions, medicines and any family history of heart problems written.
                2. An appointment booked, or a decision recorded that one is not needed after checking your health service's guidance.
                3. Your doctor's view on the training plan recorded.
                4. The symptoms that mean stop and get checked written in your training notes.

                ## Notes
                Chest pain, fainting or unusual breathlessness during a run are reasons to stop and seek medical advice, not to push on. Your doctor's guidance comes before any plan.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on medical clearance before week one, with any limits your doctor set written into the plan."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down your conditions, medicines and family heart history"
                - "Check your health service's advice on starting endurance exercise"
                - "Book an appointment if anything on the list applies"
                - "Record your doctor's advice in the front of your training notes"
                - "Book a check-up before each new marathon block if your doctor advised one @recurring(yearly)"
            - name: Training shoe rotation for marathon mileage
              description: |-
                ## Purpose
                Marathon builds put 600 to 1,000 km on shoes in four months, often more than one pair can take. Two or three pairs in rotation, a cushioned daily trainer plus a lighter pair for faster sessions, spreads the wear and lets you notice when one pair has gone flat before your legs do.

                ## Milestones
                1. Current shoes checked for distance run and visible wear.
                2. A shortlist of daily trainers tried on or run in at a running shop.
                3. A rotation of two or three pairs in place, each with a job.
                4. Each pair's start date and role recorded.

                ## Notes
                Start from the **Purchase decision** template. Buy for fit and comfort over reviews, and avoid switching to a new model in the final six weeks.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two or three pairs in rotation, each with a stated role and a recorded starting mileage."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check the distance and wear on the shoes you run in now"
                - "Try on daily trainers at a running shop that lets you run in them"
                - "Choose a second pair for faster sessions and long run variety"
                - "Record each pair's start date and role in your shoe log"
            - name: Weekly running schedule around work and family
              description: |-
                ## Purpose
                Most plans assume you can run five or six days with a long run on Sunday morning, which rarely matches a real week. Mapping fixed commitments first, then placing the long run, the key session and easy runs into the slots that are left, gives a schedule you can repeat for 18 weeks without daily negotiation.

                ## Milestones
                1. Fixed commitments for a normal week blocked out.
                2. The long run given a protected weekly slot.
                3. One key session and the easy runs placed, with an easy day before the long run.
                4. The schedule agreed with anyone it affects at home.
                5. A fallback slot named for the long run and the key session.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written weekly template showing every run slot, agreed with your household, with a fallback for the long run and the key session."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Block out work, school runs and fixed commitments for a normal week"
                - "Choose a protected slot for the long run"
                - "Place the key session and easy runs around it"
                - "Agree the schedule with your partner or household"
            - name: Training paces table for your goal
              description: |-
                ## Purpose
                Plans say easy, steady, marathon pace and threshold, and the gap between them is where most runners go wrong, usually by running easy days too fast. A single table of pace ranges, set from your goal and a recent race, makes every session's target clear before you leave the house.

                ## Milestones
                1. Pace ranges for easy, long run, marathon pace, threshold and interval sessions worked out.
                2. The table checked against your recent race result rather than your hopes.
                3. The ranges loaded into your watch or written on the plan.
                4. A date set to recalculate after the tune-up race.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A pace table with five named ranges, derived from a recent race result, saved where you see it before every run."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Put your recent race result into a training pace calculator"
                - "Write ranges for easy, long, marathon pace, threshold and intervals"
                - "Load the ranges into your watch workouts"
                - "Ask the agent to turn the table into a one-page card for the fridge"
            - name: Marathon block structure from base to taper
              description: |-
                ## Purpose
                Plans work because their weeks are arranged in phases: a base phase of easy volume, a build phase that adds threshold and marathon pace work, a peak with the longest runs, and a taper. Laying your 16 to 20 weeks out in those phases, with cutback weeks marked, shows the whole shape before you start and makes it easier to move things without breaking it.

                ## Milestones
                1. Every week from build start to race day listed with its phase.
                2. Peak weekly distance and the longest long run set.
                3. Cutback weeks marked every third or fourth week.
                4. Known clashes from your calendar moved into cutback weeks where possible.

                ## Notes
                Start from the **Training program** template. Many coaches cap a first marathon's longest run at around 32 km or three hours, whichever comes first; follow what your plan or coach advises.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A week-by-week block from build start to race day, with phases, peak week and cutback weeks marked."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every week from build start to race day"
                - "Mark the base, build, peak and taper phases"
                - "Set the peak week distance and longest long run"
                - "Place cutback weeks and move known clashes into them"
            - name: Choosing between a set plan and a running coach
              description: |-
                ## Purpose
                Free and paid plans cover most first marathons well, while a coach earns their fee when you are chasing a time, returning from a setback or need someone to adjust the plan week to week. Comparing options on cost, flexibility and feedback before the build starts avoids switching plans halfway through.

                ## Milestones
                1. Two published plans that match your running days and peak mileage shortlisted.
                2. One or two coaches or club coaching options priced.
                3. Each option scored on cost, flexibility and feedback.
                4. One choice made and the first four weeks loaded into your calendar.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One plan or coach chosen in writing, with the reason and the first four weeks scheduled."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Shortlist two plans matching your running days and peak distance"
                - "Ask a running club or coach for prices and how feedback works"
                - "Score each option on cost, flexibility and feedback"
                - "Load the first four weeks of the chosen option into your calendar"
            - name: Missed session and illness rules for the block
              description: |-
                ## Purpose
                Almost every marathon build loses a few days to a cold, a sick child or a work crisis, and the damage usually comes from cramming the missed distance back in. Writing simple rules in advance, such as skip rather than double up and return easier after illness, means a lost week stays a lost week, not a lost race.

                ## Milestones
                1. A rule for a single missed session.
                2. A rule for a missed week and for returning after illness.
                3. A rule for when a niggle means rest and when it means a doctor or physio.
                4. The rules written on the first page of the plan.

                ## Notes
                A common default is the neck check: symptoms only above the neck may allow an easy run, while fever, chest symptoms or body aches mean rest. Your doctor's advice comes first.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written set of rules for missed sessions, missed weeks, illness and niggles, kept at the front of the plan."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write a rule for what to do when you miss one session"
                - "Write a rule for a missed week and the return after illness"
                - "Decide which symptoms mean a doctor or physio rather than rest"
                - "Read the rules before rearranging any week of the plan"
            - name: Weekly long run routine
              description: |-
                ## Purpose
                The long run is the session that most decides how the last 10 km of a marathon feel, and it is also the one most often cut short by a late night or a vague route. Treating it as a fixed weekly appointment, with route, kit, fuel and timing decided the evening before, makes it happen at the right effort every week of the build.

                ## Milestones
                1. A fixed day and start time for the long run.
                2. A pre-run checklist covering route, kit, fuel, water and breakfast.
                3. Long runs run at the planned easy effort, not raced.
                4. Each long run's distance, time and how it felt logged within a day.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Long runs completed on the planned day in at least 14 of 16 build weeks, each logged with distance, time and effort."
                cadence: rolling
              tasks:
                - "Write a pre-long-run checklist for kit, fuel, water and route"
                - "Set out kit and fuel the evening before each long run"
                - "Run the planned long run at easy effort @recurring(weekly:sun)"
                - "Log the distance, time and how the last 5 km felt"
            - name: Easy run pace discipline
              description: |-
                ## Purpose
                Running easy days too fast is the most common marathon training error: it leaves you tired for the sessions that matter and adds little fitness. Setting a pace or effort cap for easy runs and checking it each week keeps roughly three quarters of your running genuinely easy.

                ## Milestones
                1. An easy pace cap written from your pace table.
                2. A talk test or effort cue chosen for hot or hilly days when pace misleads.
                3. Weekly checks showing most easy runs inside the cap.
                4. Any run that drifted fast noted with the reason.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least four out of five easy runs each week inside the cap, checked weekly for the length of the build."
                cadence: rolling
              tasks:
                - "Write your easy pace cap on the front of the plan"
                - "Set a slow pace alert on your watch for easy runs"
                - "Check last week's easy runs against the cap @recurring(weekly:mon)"
                - "Note the reason for any easy run that drifted fast"
            - name: Weekly marathon block review
              description: |-
                ## Purpose
                A plan written in week one cannot know about the cold you catch in week seven or the work trip in week eleven. Ten minutes each week comparing what you ran with what was planned, and confirming next week's sessions, is where small adjustments happen before they become missed weeks.

                ## Milestones
                1. A weekly review slot in the calendar.
                2. Planned and actual distance and key sessions compared each week.
                3. Next week's sessions confirmed or moved, with the reason.
                4. A running count of completed weeks against the block.

                ## Notes
                Start from the **Metrics log** template to keep planned and actual distance side by side.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A completed weekly review for every week of the build, with planned and actual distance and next week's sessions set."
                cadence: rolling
              tasks:
                - "Create a weekly log with planned and actual distance columns"
                - "Compare the week's runs with the plan @recurring(weekly:sun)"
                - "Confirm or move next week's key sessions"
                - "Ask the agent to summarise the last four weeks before each cutback week"
            - name: Strength sessions for marathon runners
              description: |-
                ## Purpose
                Two short strength sessions a week help you hold posture and stride when the legs tire in the final hour of a marathon. Squats, lunges, calf raises and hip work for 25 to 30 minutes, placed after easy runs rather than before long ones, fit the block without stealing from the running.

                ## Milestones
                1. A 25 to 30 minute routine of five or six exercises written.
                2. Two weekly slots placed away from the key session and the day before the long run.
                3. Loads or reps recorded so they progress through the base and build phases.
                4. Strength volume reduced in the final two weeks.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two strength sessions a week completed in at least 12 build weeks, with loads recorded and a reduction in the taper."
                cadence: rolling
              tasks:
                - "Write a five-exercise routine covering squat, lunge, calf and hip work"
                - "Do the strength routine after an easy run @recurring(weekly:tue,fri)"
                - "Record the load or reps for each exercise"
                - "Halve the strength work in the last two weeks before the race"
            - name: Shoe mileage log and replacement rule
              description: |-
                ## Purpose
                Shoes lose cushioning gradually, so the decline is easy to miss until calves or shins complain. Logging distance per pair and setting a replacement point, often somewhere between 500 and 800 km depending on the shoe and the runner, means a fresh pair is already run in when an old one is retired.

                ## Milestones
                1. Each pair's distance tracked in your watch app or a log.
                2. A replacement point set for each pair.
                3. A new pair bought and run in before the old one reaches its limit.
                4. Race shoes kept well below the distance you are comfortable racing in.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every pair in rotation has a current mileage and a replacement point, checked monthly through the build."
                cadence: rolling
              tasks:
                - "Add each pair of shoes to your watch app's gear tracker"
                - "Set a replacement distance for each pair"
                - "Check the distance on every pair @recurring(monthly:12)"
                - "Order the next pair when one is within 100 km of its limit"
            - name: Midweek medium-long run
              description: |-
                ## Purpose
                A second run of 14 to 20 km in the middle of the week is how many plans build endurance without making Sunday longer and longer. Keeping it steady and on the same morning or evening each week adds aerobic volume that shows up in the last third of the race.

                ## Milestones
                1. A fixed weekday slot for the medium-long run.
                2. The distance building from about 12 km towards the plan's peak.
                3. Runs kept at easy to steady effort.
                4. A shorter version agreed for weeks with work travel or poor sleep.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A medium-long run completed in at least three out of four weeks from the build phase onwards, logged with distance and effort."
                cadence: rolling
              tasks:
                - "Pick the weekday with the most reliable 90 minute slot"
                - "Plan a medium-long route from home or work"
                - "Run the medium-long run at steady effort @recurring(weekly:wed)"
                - "Cut it to 10 km in weeks with poor sleep or travel"
            - name: Weekly key workout at threshold or marathon pace
              description: |-
                ## Purpose
                One hard session a week, threshold intervals in the base phase and longer marathon pace work later, does most of the work of raising race pace. Scheduling it with an easy day either side and a clear target pace protects both the session and the long run that follows.

                ## Milestones
                1. A weekly slot for the key workout with easy days either side.
                2. Sessions written in advance with warm-up, reps, recoveries and cool-down.
                3. Paces hit within the target range, or the reason noted.
                4. The session type moving from threshold to marathon pace as the block progresses.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "One key workout completed in at least 12 of the build weeks, each logged with target and actual paces."
                cadence: rolling
              tasks:
                - "Write the next four key workouts with warm-up and cool-down"
                - "Load the key workout onto your watch the night before"
                - "Run the key workout at the planned paces @recurring(weekly:thu)"
                - "Note whether you hit the target pace and how the last rep felt"
            - name: Long run fuel and drink practice
              description: |-
                ## Purpose
                Stomach trouble and running out of energy after 30 km are often caused by race fuelling that was never practised. Using every long run over 90 minutes to rehearse the gels, drink and timing you intend to use on race day trains your gut and shows what you tolerate while there is still time to change.

                ## Milestones
                1. The gels and drink served on the race course identified.
                2. A fuelling plan with timings written for long runs over 90 minutes.
                3. At least six long runs completed using the race fuel.
                4. Anything that upset your stomach replaced and retested.

                ## Notes
                Agree carbohydrate amounts with a sports dietitian or your clinician if you have diabetes, a digestive condition or a history of disordered eating.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least six long runs completed with the planned race fuel and timing, with stomach tolerance noted after each."
                cadence: rolling
              tasks:
                - "Check which gels and drink the race serves on course"
                - "Write a fuelling plan with timings for runs over 90 minutes"
                - "Note how your stomach felt after each fuelled long run"
                - "Restock gels and drink mix before you run out @recurring(monthly:3)"
            - name: Measured long run route library
              description: |-
                ## Purpose
                Long runs go wrong when routes are improvised: too hilly, no water, a loop that comes up 3 km short. A small library of measured routes at 16, 20, 25, 30 and 32 km, each with toilets and water marked, takes the planning out of Saturday night.

                ## Milestones
                1. Five measured routes covering the long run distances in your plan.
                2. Water, toilet and bail-out points marked on each.
                3. At least one route with a profile similar to the race course.
                4. Routes saved to your phone or watch for navigation.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Five saved long run routes at the plan's key distances, each with water, toilet and bail-out points marked."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Map a 16 km loop from home with a route planning app"
                - "Add 20, 25, 30 and 32 km routes from the same start"
                - "Mark water, toilets and a bail-out point on each route"
                - "Try one new measured route and add it to the library @recurring(monthly:16)"
            - name: Strides after easy runs
              description: |-
                ## Purpose
                Strides, six to eight relaxed 20 second accelerations at the end of an easy run, keep leg speed and running form sharp in weeks dominated by slow miles. They take five minutes, cost almost no recovery and make marathon pace feel smoother.

                ## Milestones
                1. Two easy runs a week chosen to finish with strides.
                2. Strides run on a flat, safe stretch at a fast but relaxed effort.
                3. Full walking recovery taken between each.
                4. Strides kept through the taper as a sharpener.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Strides completed after two easy runs a week for at least ten weeks of the build."
                cadence: rolling
              tasks:
                - "Find a flat 100 metre stretch on your usual easy route"
                - "Run six strides at the end of an easy run @recurring(weekly:mon,sat)"
                - "Walk back fully between each stride"
                - "Keep four strides in each taper week"
            - name: Running marathon pace by feel
              description: |-
                ## Purpose
                Watches lag, GPS drifts between tall buildings, and in the first kilometres of a race any pace feels easy. Practising marathon pace until you can hold it within a few seconds per km without looking is the skill that stops a too-fast first half.

                ## Milestones
                1. Marathon pace run for 3 km with the watch screen hidden, then checked.
                2. Your guess within five seconds per km of target on three attempts.
                3. Breathing, cadence and effort cues for marathon pace written down.
                4. A 10 km marathon pace segment run mostly by feel.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three marathon pace segments run with the watch hidden, each averaging within five seconds per km of target."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Set the watch screen to show time only"
                - "Run 3 km at what feels like marathon pace, then check the split"
                - "Write the breathing and effort cues that match the pace"
                - "Repeat until three attempts land within five seconds per km"
            - name: Marathon pace segments inside long runs
              description: |-
                ## Purpose
                Easy long runs build endurance, but the race asks you to hold goal pace on tired legs. Placing blocks of marathon pace in the second half of selected long runs, starting with two 5 km segments and building towards 16 to 20 km, rehearses exactly that demand.

                ## Milestones
                1. Long runs that will include marathon pace chosen from the build phase.
                2. Segments progressing in length across at least four sessions.
                3. Paces and fuel logged for each segment.
                4. A final marathon pace long run completed three to four weeks before race day.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "At least four long runs with marathon pace segments completed, the longest covering 16 km or more at goal pace."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Choose four long runs in the build phase for marathon pace work"
                - "Start with two 5 km segments in the second half of the run"
                - "Lengthen the segments by 2 to 3 km each time"
                - "Log pace and fuel for each segment"
            - name: Marathon plan vocabulary and session types
              description: |-
                ## Purpose
                Fartlek, progression run, strides, cutback, MP, recovery jog: plan jargon puts newer runners off before they start, and misread sessions get run at the wrong effort. A one-page glossary of the session types in your plan, with what each is for, means you run every session as intended.

                ## Milestones
                1. Every session type in your plan listed.
                2. Each one defined in a sentence with its purpose and effort.
                3. Any still unclear checked with a club coach or experienced runner.
                4. The glossary kept with the plan.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A glossary covering every session type in your plan, each with a definition, purpose and effort level."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List every session name used in your training plan"
                - "Ask the agent to define each one in a sentence with its purpose"
                - "Check the unclear ones with a club coach or experienced runner"
                - "Keep the glossary at the back of your plan"
            - name: Hill preparation for a rolling marathon course
              description: |-
                ## Purpose
                A course with long drags or a late climb punishes runners who only trained on the flat, and long descents batter quads that were never conditioned for them. Studying the course profile and adding hill reps and hilly long runs that match it prepares you for both directions.

                ## Milestones
                1. Main climbs and descents on the course listed with their km markers.
                2. Hill reps added once a week in the base phase.
                3. At least three long runs on routes with similar total climbing.
                4. Relaxed downhill technique practised on controlled descents.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three long runs with total climbing similar to the course, plus hill reps in at least six base weeks."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Download the course elevation profile and note the main climbs"
                - "Find a hill of 200 to 400 metres for weekly reps"
                - "Plan three long runs with similar total climbing"
                - "Practise short, relaxed downhill strides on a gentle descent"
            - name: Pacing strategy for even or negative splits
              description: |-
                ## Purpose
                Most marathoners who miss their goal lose it in the first 10 km by banking time they later repay with interest. Choosing a pacing strategy in advance, usually even effort or a slightly faster second half, and turning it into split targets for every 5 km makes race day a plan rather than a reaction.

                ## Milestones
                1. Even and negative split approaches compared for your goal.
                2. Split targets written for every 5 km.
                3. Adjustments set for hills, wind and the crowded first kilometre.
                4. The opening splits tested in a marathon pace long run.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written split plan for every 5 km of the race, tested once in a training long run."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Work out the 5 km split for your goal time"
                - "Decide between even splits and a slightly faster second half"
                - "Adjust the splits for the course's main climbs"
                - "Test the opening splits in your next marathon pace long run"
            - name: GPS watch set-up for structured sessions
              description: |-
                ## Purpose
                Many runners own a watch that can guide every interval yet run sessions from memory and the lap button. Learning to build structured workouts, set pace alerts and read lap pace instead of average pace makes sessions accurate and race-day splits easier to follow.

                ## Milestones
                1. Data screens set for current lap pace, lap distance and total time.
                2. Two structured workouts built and synced to the watch.
                3. Pace alerts set for easy runs.
                4. Manual laps or auto-lap chosen for race day, knowing GPS distance drifts on long courses.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Structured workouts built and synced for one full week, with race-day data screens set and tested."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Set a data screen with lap pace, lap distance and total time"
                - "Build next week's key workout in the watch app and sync it"
                - "Test manual laps at each km marker on a measured route"
                - "Charge the watch and sync next week's sessions @recurring(weekly:sat)"
            - name: Holding form late in long runs
              description: |-
                ## Purpose
                In the final hour of a marathon, posture slumps, cadence drops and stride shortens, which costs time and loads tired muscles. Filming yourself fresh and tired, then practising a few form cues in the last 5 km of long runs, gives you something useful to think about when it gets hard.

                ## Milestones
                1. A short video of your running taken fresh and again near the end of a long run.
                2. Two or three form changes between the two noted.
                3. A one-word cue chosen for each change.
                4. The cues used in the last 5 km of at least four long runs.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two videos compared, three form cues written and used in the final 5 km of four long runs."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask someone to film you for 20 seconds early in a long run"
                - "Film again in the final 2 km of the same run"
                - "Write three short form cues from the differences you see"
                - "Repeat the cues in the last 5 km of your next four long runs"
            - name: Mid-block goal time review
              description: |-
                ## Purpose
                Around six to eight weeks before race day you have enough evidence to know whether the A goal is realistic: the tune-up race, marathon pace long runs and how you are recovering. Reviewing the goal then, rather than on the start line, lets you adjust the final paces while there is still time to train at them.

                ## Milestones
                1. Tune-up race result and key session paces gathered.
                2. The evidence compared with the A, B and C goals.
                3. The goal confirmed, raised or lowered, with the reason written.
                4. Pace table and race splits updated to match.
              priority: medium
              deadlineOffsetDays: 84
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded goal decision six to eight weeks before race day, with pace table and splits updated to match."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Gather your tune-up result and last three key session paces"
                - "Put the tune-up result into an equivalence calculator"
                - "Decide to confirm, raise or lower the goal"
                - "Update your pace table and race split plan"
            - name: Deciding whether to defer, drop down or run
              description: |-
                ## Purpose
                Injury, illness, bereavement or a lost month of training can make the original race a bad idea. Knowing your race's deferral, transfer and distance-switch rules, and setting in advance the point at which you would use them, turns a painful decision into a planned one.

                ## Milestones
                1. The race's deferral, transfer and refund policies noted with their deadlines.
                2. Any option to switch to a shorter distance found.
                3. A clear trigger for deferring written, such as missing three long runs in a row.
                4. The decision made by the deferral deadline if the trigger is met.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The race's deferral and transfer deadlines are in your calendar, with a written trigger for using them."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Read the race's deferral, transfer and refund policy"
                - "Put the deferral deadline in your calendar"
                - "Write the trigger that would make you defer"
                - "Check your training against the trigger a week before the deadline"
            - name: Race day shoe choice, plated or trainer
              description: |-
                ## Purpose
                Carbon-plated racing shoes make marathon pace feel easier for some runners, but they are expensive, less stable and need testing in training. Deciding by about eight weeks out, and running at least two long marathon pace sessions in the chosen pair, avoids a race-day experiment.

                ## Milestones
                1. Plated and non-plated options compared on fit, cost and stability.
                2. A pair chosen by eight weeks before race day.
                3. At least two long sessions at marathon pace run in the race shoes.
                4. Race shoes kept for key sessions so their mileage stays low.

                ## Notes
                Start from the **Purchase decision** template. Nothing new on race day applies to shoes most of all.
              priority: medium
              deadlineOffsetDays: 70
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Race shoes chosen eight weeks out and tested in at least two marathon pace sessions of 14 km or more."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Try on two plated racing shoes and one non-plated option"
                - "Choose the pair that felt stable at marathon pace"
                - "Run two long marathon pace sessions in them"
                - "Keep them for key sessions only until race day"
            - name: Raising peak mileage for a second marathon
              description: |-
                ## Purpose
                Runners who finish a first marathon and want a faster second one usually gain most from more volume, not harder sessions. Raising peak weekly distance gradually over the next block, by adding a run or lengthening easy runs rather than stretching the long run, builds the aerobic base a time goal needs.

                ## Milestones
                1. Last block's peak and average weekly distance recorded.
                2. A new peak target set about 10 to 20 percent higher.
                3. Extra distance added through easy runs or an extra day rather than the long run.
                4. The new peak reached without missing more than one week.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A peak week 10 to 20 percent above the previous block reached, with no more than one week missed."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Find last block's peak and average weekly distance"
                - "Set a new peak target 10 to 20 percent higher"
                - "Add the extra distance to easy runs or a new easy day"
                - "Check how your legs feel at each cutback week before going higher"
            - name: Running with a pace group or alone
              description: |-
                ## Purpose
                Official pacers take the thinking out of pacing, but they bunch tightly at water stations, may pace by gun time and may not match your plan for the course. Deciding in advance, and knowing where your group lines up and how its pacers work, avoids a hurried choice in the start pen.

                ## Milestones
                1. The race's pacer groups, their methods and start pens found.
                2. Pros and cons for your goal listed.
                3. A decision recorded on joining, following at a distance or running alone.
                4. A rule for what you do if the group runs faster than your splits.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on pacers for race day, with a rule for leaving the group if it runs ahead of your splits."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Look up the race's pacer groups and how they pace"
                - "Find which start pen your pacer lines up in"
                - "Decide whether to join, follow or run alone"
                - "Write the split at which you would let the group go"
            - name: Tune-up half marathon in the build
              description: |-
                ## Purpose
                Racing a half marathon five to eight weeks before the marathon is the most useful fitness check in the block and a full rehearsal of race morning. Entering one early and treating it as a key session, with easier days around it, gives you a goal check and calmer nerves.

                ## Milestones
                1. A half marathon five to eight weeks before race day entered.
                2. The plan adjusted with easier days before and after.
                3. Race morning routine, kit and fuel rehearsed.
                4. The result used to confirm or adjust the marathon goal.
              priority: medium
              deadlineOffsetDays: 77
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A half marathon raced five to eight weeks before the marathon, with the result recorded and used in the goal review."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Find half marathons five to eight weeks before your race"
                - "Enter the one that best fits your schedule"
                - "Ease the two days before and after it in your plan"
                - "Record your time, splits and how the last 5 km felt"
            - name: Course reconnaissance and water stations
              description: |-
                ## Purpose
                Knowing where the water stations, toilets, turns and crowd hot spots are lets you plan fuel around the course rather than guessing on the day. Studying the course map, watching footage and, where possible, running sections of the route turns an unknown city into a familiar one.

                ## Milestones
                1. Water, gel and toilet stations marked on the course map.
                2. Sharp turns, narrow sections and long exposed straights noted.
                3. Supporter viewing points chosen.
                4. Any local sections of the course run in training.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An annotated course map with water and fuel stations, tough sections and supporter points, shared with your supporters."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Download the official course map and race guide"
                - "Mark water, gel and toilet stations on the map"
                - "Watch a course video or footage from a previous year"
                - "Pick two viewing points for supporters"
            - name: Race-pace dress rehearsal long run
              description: |-
                ## Purpose
                Three to five weeks out, one long run should copy race day as closely as possible: same alarm time, breakfast, kit, shoes, fuel and a long section at goal pace. Anything that chafes, upsets your stomach or slips loose shows up here, while there is still time to fix it.

                ## Milestones
                1. Race-day breakfast, kit and shoes chosen for the rehearsal.
                2. A long run of 26 to 32 km with a long section at goal pace completed.
                3. Chafing, stomach and kit problems written down.
                4. Every problem fixed or swapped before race week.
              priority: medium
              deadlineOffsetDays: 105
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A full race-day rehearsal run completed three to five weeks out, with every problem found fixed before race week."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Set the alarm for race morning time and eat your race breakfast"
                - "Run the long run in full race kit and race shoes"
                - "Take the race fuel at your planned times"
                - "List every problem and fix it before race week"
            - name: Marathon taper over the final three weeks
              description: |-
                ## Purpose
                The taper is where fitness finally shows, and also where nerves tempt runners to squeeze in one more long run. Reducing volume step by step over three weeks while keeping some short marathon pace work and the usual routine lets the legs arrive fresh rather than flat.

                ## Milestones
                1. Distance for each of the final three weeks set from your plan.
                2. Short marathon pace sessions kept in each week to stay sharp.
                3. No new shoes, foods or sessions introduced.
                4. Race week reached with legs feeling fresh.

                ## Notes
                Feeling sluggish or noticing phantom aches in the taper is common. Stick to the plan unless something is clearly wrong, then check with a physio or doctor.
              priority: high
              deadlineOffsetDays: 126
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly distance in the final three weeks reduced as planned, with every taper session completed and no extra long runs."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write the distance for each of the final three weeks"
                - "Keep one short marathon pace session in each taper week"
                - "Plan quiet evenings and early nights for race week"
                - "Cross out any run that is not on the taper plan"
            - name: One-page race day plan
              description: |-
                ## Purpose
                On race morning, with nerves and crowds, you will not remember the details worked out over four months. One page covering wake-up time, breakfast, travel, warm-up, split targets, fuel timings and what to do if things go wrong keeps every decision already made.

                ## Milestones
                1. A timeline from alarm to start gun.
                2. Split targets for every 5 km and fuel timings written.
                3. A plan B for heat, wind or a bad patch.
                4. A meeting point and tracking details shared with supporters.
              priority: high
              deadlineOffsetDays: 128
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A one-page race plan with timeline, splits, fuel and a plan B, shared with supporters before race eve."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a timeline from alarm to start gun"
                - "Add 5 km splits and fuel timings"
                - "Write a plan B for heat, wind or a rough patch after 30 km"
                - "Send the plan and tracking details to your supporters"
            - name: Race week logistics checklist
              description: |-
                ## Purpose
                Bib collection deadlines, travel, hotel, bag drop rules and start pen times all land in the same week as the race, and a missed expo or late train can cost a start. A single checklist with times and bookings means race week is spent resting rather than chasing details.

                ## Milestones
                1. Travel and accommodation booked, with a night's buffer for distant races.
                2. Bib collection times and ID requirements confirmed.
                3. Bag drop, start pen and finish meeting point understood.
                4. A packed race kit bag ready two days before.

                ## Notes
                Start from the **Trip** template if you are travelling to the race.
              priority: high
              deadlineOffsetDays: 130
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Travel, bib collection, bag drop and start timings confirmed in one checklist, with the kit bag packed two days before the race."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Book travel and a bed near the start for race eve"
                - "Confirm bib collection times and what ID to bring"
                - "Read the race guide for bag drop and start pen rules"
                - "Pack the race kit bag two days before"
            - name: First fortnight after the marathon
              description: |-
                ## Purpose
                After 42.2 km, muscles, tendons and the immune system need time even when you feel fine by day three, and runners who jump straight into a new plan often pay for it. Planning two weeks of rest, walking and short easy runs, plus a written race review, closes the block properly.

                ## Milestones
                1. Several days with no running, only walking and gentle movement.
                2. Short easy runs reintroduced only once stairs feel normal.
                3. A written race review covering splits, fuel, what worked and what did not.
                4. A date set to decide on the next goal, no sooner than two weeks after.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Two weeks of planned recovery completed and a written race review finished before any new plan begins."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Block out the week after the race with no running"
                - "Plan a gentle walk or swim for the days after"
                - "Write a race review covering splits, fuel and pacing"
                - "Choose a date two weeks out to think about the next goal"
            - name: First marathon on a charity place
              description: |-
                ## Purpose
                Charity places come with a fundraising target as well as the training, often several hundred to a few thousand in local currency. Setting up the fundraising page early, planning updates around training milestones and knowing the charity's deadline keeps the money side from crowding out the miles.

                ## Milestones
                1. The charity's fundraising target, deadline and any minimum pledge confirmed in writing.
                2. A fundraising page live with your story and target.
                3. Updates planned around long run milestones.
                4. The target met, or a plan agreed with the charity, before their deadline.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The fundraising target met, or a written agreement reached with the charity, by their deadline."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Confirm the fundraising target and deadline with the charity"
                - "Set up your fundraising page with a photo and your reason"
                - "Post a training update to your fundraising page @recurring(monthly:9)"
                - "Thank each donor within a week of their gift"
            - name: Run-walk marathon plan for first-timers
              description: |-
                ## Purpose
                For new runners, heavier runners and anyone returning after a long break, a planned run-walk ratio used from the very first minute often gives a faster and more comfortable finish than running until forced to walk. Choosing the ratio early and training with it in every long run makes it a strategy, not a fallback.

                ## Milestones
                1. A run-walk ratio chosen and tested on three long runs.
                2. A timer or watch alert set for the intervals.
                3. The race's cut-off time checked against your expected finish.
                4. Every long run from week four onwards completed with the chosen ratio.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A run-walk ratio chosen, set on your watch and used in every long run from week four, with the race cut-off checked."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Check the race cut-off time against your expected finish"
                - "Try four minutes running to one walking on an easy run, then three to one"
                - "Set interval alerts on your watch for the chosen ratio"
                - "Use the ratio from the first minute of every long run"
            - name: Marathon build with young children at home
              description: |-
                ## Purpose
                Parents of babies and young children train around broken sleep, nursery pick-ups and a partner who also needs time off. Run commutes, buggy runs, early starts and a long run slot traded fairly with your partner make an 18-week build possible without resentment at home.

                ## Milestones
                1. Run slots agreed with your partner, with something given back for the long run.
                2. At least one run per week fitted into a commute, school run or buggy run.
                3. A rule for nights of broken sleep, such as swapping a key session for an easy one.
                4. The coming week's run slots agreed together each week.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A weekly running plan agreed with your partner each week, with at least 80 percent of planned runs completed."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask your partner which weekly slots would work for them"
                - "Agree what you give back for the long run morning"
                - "Turn one weekly run into a run commute or buggy run"
                - "Agree next week's run slots with your partner @recurring(weekly:fri)"
            - name: Marathon training around shift work
              description: |-
                ## Purpose
                Nurses, police officers, factory and hospitality workers rarely have the same free morning two weeks running, so plans with fixed days fall apart. Building each week from your rota, with the long run on a day off and easy runs on short-shift days, keeps the block intact.

                ## Milestones
                1. Next month's rota mapped against the plan.
                2. Long runs placed on days off, never straight after night shifts.
                3. Easy runs and strength fitted into short-shift days.
                4. A sleep and food routine for runs after night shifts noted.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Every month of the build mapped onto the rota in advance, with long runs on days off and none after a night shift."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Copy next month's shifts into your training calendar"
                - "Place each long run on a day off, not after a night shift"
                - "Fit easy runs and strength into short-shift days"
                - "Map the following month's rota onto the plan @recurring(monthly:24)"
            - name: Winter build for a spring marathon
              description: |-
                ## Purpose
                Spring marathons are trained for in the darkest, iciest months, when long runs meet frost, wind and short days. Sorting lights and visible kit, a treadmill or indoor fallback and grippy shoes before the bad weather arrives stops it from deleting weeks.

                ## Milestones
                1. Head torch, reflective layers and winter kit in place.
                2. A treadmill or indoor option arranged for ice days.
                3. Safe, lit routes chosen for dark weekday runs.
                4. A rule written for when weather moves the long run to another day.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Winter kit, lit routes and an indoor fallback in place before the darkest month of the build, with no long run lost entirely to weather."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Check your head torch and reflective layers still work"
                - "Find a gym or treadmill you can use on ice days"
                - "Map two lit routes for dark weekday runs"
                - "Check the forecast two days before each long run and move it if needed"
            - name: Summer build for an autumn marathon
              description: |-
                ## Purpose
                Training through summer means peak weeks in the heat, when paces slow and fluid losses build over a long run. Running early, adjusting pace for temperature and planning water on every long route keeps the block going without forcing goal paces on hot days.

                ## Milestones
                1. Long runs moved to early mornings on hot days.
                2. A pace adjustment rule for heat written into the plan.
                3. Water points planned or bottles stashed on every long route.
                4. The signs of heat illness noted, with a rule to stop and cool down.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Every long run on a hot day starts early with planned water stops, and paces follow a written heat rule."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write a rule for slowing your pace on hot days"
                - "Move long runs to before 8am on hot weekends"
                - "Plan water stops or stash bottles on each long route"
                - "Read your health service's guidance on the signs of heat illness"
            - name: Business travel during a marathon block
              description: |-
                ## Purpose
                Hotel rooms, conference dinners and early flights can wipe out a key week unless runs are planned before the trip. Checking hotel gyms and safe routes, packing kit first and moving the long run around flights keeps travel weeks productive.

                ## Milestones
                1. Travel weeks in the block identified.
                2. A hotel gym or safe local route found for each trip.
                3. Long runs moved before or after flights.
                4. Running kit packed before work clothes.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Every travel week in the block planned in advance, with at least the long run and one other run completed."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Mark every work trip that falls in the block"
                - "Check each hotel for a treadmill or a safe running route"
                - "Move the long run to the day before or after travel"
                - "Pack running kit before anything else"
            - name: Chasing a qualifying or good-for-age time
              description: |-
                ## Purpose
                Major marathons and championship races set qualifying or good-for-age standards by age group, often with real cut-offs tighter than the published time. Picking a qualifying window, a fast flat course and a goal with a margin below the standard focuses the whole block on one number.

                ## Milestones
                1. The standard for your age group, the qualifying window and recent actual cut-offs found.
                2. A target time with a margin below the standard set.
                3. A fast, flat qualifying race inside the window chosen.
                4. A qualifying result submitted before the deadline, or the next attempt planned.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A qualifying race chosen with a target below your age-group standard, and the result submitted or the next attempt dated."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Look up your age-group standard and the qualifying window"
                - "Check how far below the standard recent cut-offs fell"
                - "Choose a fast, flat race inside the window"
                - "Submit your result as soon as qualification opens"
            - name: Advanced long runs with fast finishes
              description: |-
                ## Purpose
                Experienced marathoners use harder long runs late in the block: progressions, fast finishes and alternating kilometres between marathon pace and steady. They are among the most race-specific sessions there are, but they need easy days around them and a solid base first.

                ## Milestones
                1. Three advanced long run formats chosen from a reputable coaching source.
                2. Each placed in the peak phase with easy days either side.
                3. Each completed with paces logged.
                4. Recovery over the following days noted to judge whether the dose was right.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three advanced long runs completed in the peak phase, each with target and actual paces logged."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Choose three advanced long run formats for the peak phase"
                - "Schedule each with easy days before and after"
                - "Log target and actual paces for each kilometre block"
                - "Note how your legs felt over the next two days"
            - name: Two marathon blocks in one year
              description: |-
                ## Purpose
                Running a spring and an autumn marathon is common, but squeezing two full builds into twelve months leaves little room for recovery or a base phase. Planning the year as two blocks with a proper recovery and rebuild between them makes the second race a step forward rather than a tired repeat.

                ## Milestones
                1. Both races chosen with at least 20 weeks between them.
                2. Two to three weeks of recovery after the first race scheduled.
                3. A short base phase planned before the second build.
                4. One race marked as the priority if they cannot both be goal races.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A twelve-month plan with two marathons, recovery and base phases marked, and one race named as the priority."
                cadence: cyclic
              tasks:
                - "Choose two marathons at least 20 weeks apart"
                - "Schedule three weeks of recovery after the first"
                - "Plan a four to six week base before the second build"
                - "Review the year's marathon plan after each race @recurring(yearly)"
            - name: Comparing past marathon blocks to design the next
              description: |-
                ## Purpose
                Runners with two or more marathons behind them learn more from comparing whole blocks than from any single race: peak mileage, number of 30 km runs, key sessions, missed weeks and result. Setting the blocks side by side shows which ingredients actually moved your time.

                ## Milestones
                1. Each past block summarised in the same format.
                2. Peak volume, long run count, missed weeks and result compared.
                3. Two or three ingredients most linked to your best race identified.
                4. The next block's design changed to include them.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A side-by-side comparison of at least two blocks, with three named changes carried into the next plan."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Summarise each past block's peak week, long runs and missed weeks"
                - "Ask the agent to compare the blocks and point out the differences"
                - "List the ingredients most linked to your best result"
                - "Write those changes into the next block plan"
---

# Marathon Training Blocks

This area is for anyone building towards 42.2 km, from a first-timer on a charity place to a club runner chasing a qualifying time. It starts with the foundations (choosing the race, an honest goal time, a mileage baseline and the shape of the block), then the weekly machinery of long runs, easy miles and key workouts, the skills of pacing and holding form, the decisions about goals and shoes, the race events from tune-up half to recovery fortnight, the situations that bend a plan, and finally the work of experienced marathoners.

What repeats is the Sunday long run and weekly review, a Wednesday medium-long run, a Thursday key workout, strength twice a week and a monthly check on shoes and fuel stocks. The Purchase decision, Training program, Metrics log and Trip templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
