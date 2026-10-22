---
id: fitness-sport.olympic-weightlifting
name: Olympic Weightlifting
description: "A coached route from first snatch lessons to club competition: a club and shoes, mobility, technique progressions, a lifting log, training blocks, attempt plans and a peak."
category: personal
version: 1.0.0
tags: [fitness-sport, olympic-weightlifting, athlete, snatch, clean-and-jerk, technique, competition]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - metrics-log
    - habit-tracker
    - training-program
    - development-plan
  pillars:
    - name: Fitness & Sport
      emoji: "🏋️"
      description: "Training, play and competition: building strength, endurance and skill in a sport or a gym, structuring blocks of work around events, recovering properly, and keeping the sessions honest with a log rather than a feeling."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Olympic Weightlifting
          description: "Learning and progressing the snatch and clean and jerk with mobility, technique drills and coaching, from first lessons to club competition."
          projects:
            - name: Finding a weightlifting club and qualified coach
              description: |-
                ## Purpose
                Olympic lifts are learned far faster and more safely with a coach watching from the side than from videos alone, and most towns have fewer weightlifting clubs than gyms with a platform. Visiting two or three options before committing tells you who actually coaches the snatch and clean and jerk, what a session costs and whether the timetable fits your week.

                ## Milestones
                1. A list of clubs and gyms within reach that run coached weightlifting sessions, taken from your national federation's club finder or a local search.
                2. Two or three taster sessions attended, with notes on coaching attention, platforms and bars.
                3. Each coach's qualification level and federation affiliation confirmed.
                4. One club chosen and a first month of sessions booked.

                ## Notes
                A gym with bumper plates is not the same as a club with a coach. Ask how many lifters one coach watches at a time; more than eight on the platform usually means little feedback for a beginner.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One club or coach chosen after at least two taster sessions, with the coach's qualification confirmed and the first month of sessions booked."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Search your national weightlifting federation's club finder for clubs within reach"
                - "Book taster sessions at two or three clubs or gyms"
                - "Ask each coach about their qualification and how many lifters they watch at once"
                - "Compare cost, timetable and coaching attention in one short note"
                - "Book the first month of sessions at the club you chose"
            - name: Beginner weightlifting course with a coach
              description: |-
                ## Purpose
                Most clubs run a four to eight week introduction that teaches positions with a PVC pipe or a technique bar before any real weight goes on. Finishing it gives you a shared vocabulary with your coach, the confidence to lift on a busy platform and a clear sign-off on what you can train unsupervised.

                ## Milestones
                1. The full beginner course attended, with no more than one session missed.
                2. The snatch and the clean and jerk performed with an empty bar to your coach's satisfaction.
                3. A written list of the drills your coach wants you to keep doing.
                4. A clear answer from the coach on which lifts you may train without supervision.

                ## Notes
                Expect the bar to feel light for weeks. The course is about positions, not load, and lifters who skip ahead usually spend months unlearning a pull from the arms.
              priority: high
              deadlineOffsetDays: 56
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The club's beginner course is finished with both lifts signed off by the coach at empty-bar level and a written list of drills to continue."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Ask your chosen club when the next beginner course starts and book a place"
                - "Buy or borrow a PVC pipe for practising positions at home"
                - "Write down the cue the coach repeats most after each session"
                - "Ask the coach on the last session which lifts you may train alone"
            - name: Weightlifting shoes chosen and fitted
              description: |-
                ## Purpose
                Weightlifting shoes have a raised solid heel and a rigid sole that make a deep, upright receiving position easier and keep the foot stable under a heavy jerk. A good pair lasts years, so choosing heel height and fit against your ankle mobility and squat style matters more than the brand.

                ## Milestones
                1. Your coach's view on heel height for your build and ankle range recorded.
                2. Two or three pairs shortlisted with heel height, width and price.
                3. A pair tried on, ideally squatting in them, and bought.
                4. The shoes worn for two weeks of sessions with no heel lift or pinching.

                ## Notes
                Start from the **Purchase decision** template. Many lifters start with a mid heel of around 19 mm (0.75 inch); a lifter with tight ankles may get more from a higher heel, but agree it with your coach.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A pair of weightlifting shoes is bought after comparing heel height and fit, and has been worn for two weeks of sessions without problems."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your coach what heel height suits your ankles and squat"
                - "Shortlist three pairs with heel height, width and price"
                - "Try the shortlisted shoes in an overhead squat if the shop or club allows"
                - "Buy the pair that fits and note the model and size in your log"
            - name: Overhead squat and front rack mobility screen
              description: |-
                ## Purpose
                The snatch finishes in an overhead squat and the clean in a front squat with high elbows, and many adults cannot reach either cleanly on day one. A short screen of ankles, hips, thoracic spine, shoulders and wrists shows which joint limits you, so mobility work goes where it is needed instead of everywhere.

                ## Milestones
                1. An overhead squat with a pipe filmed from the front and the side.
                2. A front rack position with the bar filmed, showing elbow height and wrist angle.
                3. Ankle range measured with a knee-to-wall test on both sides.
                4. The one or two limiting joints agreed with your coach and written in your log.

                ## Notes
                Pain is a different question from stiffness. A joint that hurts in the receiving position belongs with a physiotherapist, not a stretching plan.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Filmed overhead squat and front rack positions plus knee-to-wall measurements are in your log, with the limiting joints named by your coach."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Film an overhead squat with a pipe from the front and the side"
                - "Film a front rack hold with an empty bar"
                - "Measure the knee-to-wall distance on both ankles"
                - "Show the clips to your coach and write down the limiting joints"
                - "Repeat the screen and compare it with the first clips @recurring(quarterly)"
            - name: Starting numbers and technique video baseline
              description: |-
                ## Purpose
                Programmes are written in percentages, so a coach needs honest starting numbers for the snatch, clean and jerk, front squat and back squat once your technique is safe enough to test. Pairing those numbers with side-on video of each lift gives you a before picture that makes the next six months of progress visible.

                ## Milestones
                1. Your coach agrees you are ready to work up to a technical best, not an all-out max.
                2. Best clean singles recorded for the snatch, clean and jerk, front squat and back squat.
                3. Side-on video of the best attempt of each lift saved in one folder.
                4. Training percentages for the first block worked out from these numbers.

                ## Notes
                A technical best is the heaviest lift that still looks like the lift. Grinding out an ugly single gives a number the programme will be wrong about.
              priority: high
              deadlineOffsetDays: 35
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Technical bests for four lifts and side-on video of each are saved together, and the first block's percentages are calculated from them."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your coach which session to use for working up to technical bests"
                - "Set your phone on a stand at hip height, side-on to the platform"
                - "Record the best clean single for each lift and file the videos together"
                - "Calculate the first block's working percentages from the new numbers"
            - name: Weightlifting training log with lift percentages
              description: |-
                ## Purpose
                Weightlifting sessions are full of complexes, percentages and singles, and a log that only records the top weight loses what matters: how many were made, which missed and how it felt. A log with columns for lift, percentage, sets, makes, misses and a video link turns a year of sessions into something you and your coach can read.

                ## Milestones
                1. A log with columns for date, lift, weight, percentage, sets, makes, misses, notes and video link.
                2. Current bests and training maxes written at the top.
                3. Every session for four weeks entered within a day.
                4. A monthly summary of best lifts and make rate added at the end of each month.

                ## Notes
                Start from the **Metrics log** template. Make rate on heavy days (lifts made divided by lifts attempted) is often a better progress signal than a new best.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A weightlifting log holds four weeks of complete sessions, including makes, misses and percentages, plus a first monthly summary."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create a log from the metrics log template with lift, percentage, makes and misses"
                - "Write your current bests and training maxes at the top"
                - "Enter today's session before you leave the gym"
                - "Summarise the month's best lifts and heavy-day make rate @recurring(monthly:4)"
            - name: Weekly session schedule agreed with your coach
              description: |-
                ## Purpose
                Beginners usually progress well on three sessions a week, while competitive lifters often train five or more, and the right number depends on recovery, work and the club timetable. Agreeing the days with your coach, and writing down what each session covers, stops the week drifting into whatever happens to fit.

                ## Milestones
                1. Your available training slots for a normal week listed.
                2. A number of sessions a week agreed with your coach.
                3. Fixed days and times chosen, with the focus of each session written next to it.
                4. The schedule added to your calendar as repeating events.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A weekly schedule with set days, times and a focus for each session is agreed with your coach and sits in your calendar."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List every slot in a normal week when you could train"
                - "Ask your coach how many sessions they recommend at your stage"
                - "Pick fixed days and write the focus of each session beside it"
                - "Add the sessions to your calendar as repeating events"
            - name: Session kit bag for the platform
              description: |-
                ## Purpose
                Turning up without tape or chalk is how thumbs get torn and wrists get sore. A packed bag with shoes, tape, chalk, wrist wraps, a notebook and a phone stand makes every session start on time and keeps borrowed kit out of the picture.

                ## Milestones
                1. A checklist of what goes in the bag written and kept inside it.
                2. Thumb tape, chalk and wrist wraps bought and packed.
                3. A small phone stand or clamp packed for filming lifts.
                4. The bag checked and restocked after every session for two weeks.

                ## Notes
                Leave a belt and knee sleeves off the list until your coach suggests them. Most beginners need neither in the first months.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A packed kit bag with a checklist inside holds shoes, tape, chalk, wrist wraps and a phone stand, and has been restocked after sessions for two weeks."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write a kit checklist and tape it inside the bag"
                - "Buy thumb tape, chalk and a pair of wrist wraps"
                - "Pack a phone stand or clamp for filming"
                - "Restock tape and chalk before either runs out"
            - name: Platform etiquette and club safety rules
              description: |-
                ## Purpose
                Weightlifting platforms are shared, plates get dropped and lifters bail in every direction, so every club has rules, written or not, about walking behind lifters, loading bars and clearing platforms. Learning them in the first weeks keeps you and others safe and earns goodwill from the regulars.

                ## Milestones
                1. The club's written rules or induction notes read.
                2. The rule about never walking close in front of or behind a lifter mid-lift understood and followed.
                3. Collars, plate loading and stripping the bar done the way the club expects.
                4. Bars, plates and blocks put back after every session.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "The club rules have been read and for four weeks every session ends with your bar, plates and blocks put back and the platform clear."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask the coach for the club rules or induction sheet"
                - "Watch where experienced lifters stand and walk during a session"
                - "Practise loading, collaring and stripping a bar the club's way"
                - "Put away bars, plates and blocks at the end of each session"
            - name: Weekly training attendance and session habit
              description: |-
                ## Purpose
                Repetition is what weightlifting rewards: the snatch only becomes automatic after thousands of reps spread across months of steady sessions. Counting the sessions completed each week, and why any were missed, shows whether the schedule is realistic or needs to change.

                ## Milestones
                1. Each planned session ticked off as done or missed.
                2. A one-word reason noted for every missed session.
                3. A weekly total compared with the agreed schedule.
                4. Three months of attendance reviewed with your coach.

                ## Notes
                Start from the **Habit tracker** template. Two missed sessions in a row for the same reason is a schedule problem, not a willpower one.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Attendance is recorded every week for three months with a reason for each miss, and has been reviewed once with your coach."
                cadence: rolling
              tasks:
                - "Set up a habit tracker with one row per planned session"
                - "Tick off each session and note a reason for any missed one"
                - "Total the week's sessions against the plan @recurring(weekly:sun)"
                - "Bring three months of attendance to your coach and discuss the pattern"
            - name: Daily ankle, hip and thoracic mobility routine
              description: |-
                ## Purpose
                Ten minutes a day on the joints your screen flagged does more for a deep receiving position than an hour once a week. A fixed routine of four or five drills, done at the same time each day, keeps the overhead squat and front rack improving between sessions.

                ## Milestones
                1. A routine of four or five drills chosen with your coach for your limiting joints.
                2. The routine written on one card with sets and hold times.
                3. The routine done on at least five days a week for six weeks.
                4. A new overhead squat clip compared with the screen clip.

                ## Notes
                Choose drills that target the joints from your screen. A generic stretching video spends most of its time on areas that are already fine.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written routine of four or five drills has been done on at least five days a week for six weeks, with a new overhead squat clip compared to the first."
                cadence: rolling
              tasks:
                - "Agree four or five mobility drills with your coach"
                - "Write the drills, sets and hold times on one card"
                - "Do the ten-minute mobility routine @recurring(daily)"
                - "Film an overhead squat after six weeks and compare it with the screen"
            - name: Weekly technique video review
              description: |-
                ## Purpose
                What a lift feels like and what it looks like are often different, especially in the second pull and the catch. Watching the week's heavier clips once at quarter speed, and noting one thing to keep and one thing to fix, gives each session a clear focus.

                ## Milestones
                1. Top sets filmed side-on in every heavy session.
                2. Clips trimmed and saved by date and lift.
                3. One keep and one fix written for each lift each week.
                4. The weekly notes shared with your coach before the next heavy day.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For eight weeks, each week's heavy clips have been reviewed with one keep and one fix noted per lift and shared with your coach."
                cadence: rolling
              tasks:
                - "Create one folder per month for lift videos"
                - "Film the top sets of each heavy session side-on"
                - "Watch the week's clips at quarter speed and note one keep and one fix @recurring(weekly:sat)"
                - "Send the notes to your coach before the next heavy session"
            - name: Monthly technique check-in with your coach
              description: |-
                ## Purpose
                In a busy club session a coach may see a handful of your lifts and call out one cue. A short sit-down each month, with clips and your miss log, lets you agree the technical priority for the next four weeks and the cue that goes with it.

                ## Milestones
                1. A 15-minute slot booked with your coach each month.
                2. Clips and the month's miss count brought to each check-in.
                3. One technical priority and one cue agreed and written in your log.
                4. The previous month's priority marked as fixed, improving or unchanged.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly check-ins happen for six months, each ending with one technical priority and cue written in your log."
                cadence: rolling
              tasks:
                - "Ask your coach for a short monthly slot outside the busy session"
                - "Hold the monthly technique check-in and bring your clips @recurring(monthly:12)"
                - "Write the agreed priority and cue at the top of next month's log"
                - "Mark last month's priority as fixed, improving or unchanged"
            - name: Training block planning each cycle
              description: |-
                ## Purpose
                Blocks of 8 to 12 weeks are the usual unit of a weightlifting programme, moving from higher volume and positional work towards heavier singles and a test or competition. Planning each block with your coach before it starts, with its goal, weekly structure and test week, makes the training add up to something.

                ## Milestones
                1. A goal for the block agreed, such as a target clean and jerk or a competition.
                2. The weekly structure and main lifts for each phase written down.
                3. A test week or competition date fixed at the end.
                4. A short review of the last block used to adjust the new one.

                ## Notes
                Start from the **Training program** template.
              priority: high
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Each block starts with a written plan holding a goal, phases and a test date, and ends with a one-page review that feeds the next."
                cadence: cyclic
              tasks:
                - "Set up the current block from the training program template"
                - "Agree the block's goal and test week with your coach"
                - "Write the weekly structure and main lifts for each phase"
                - "Review the finished block and plan the next one with your coach @recurring(quarterly)"
            - name: Miss and fault log
              description: |-
                ## Purpose
                Most lifters miss in a pattern: forward in the snatch, crashed under the clean, pressed out on the jerk. Recording every miss with its direction and likely cause turns frustrating sessions into evidence that shows your coach where the technique breaks down.

                ## Milestones
                1. A miss column added to the training log with lift, weight, percentage and direction.
                2. A likely cause noted for each miss, from a short list agreed with your coach.
                3. A monthly count of misses by lift and direction.
                4. The most common miss raised at the monthly check-in.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "Every miss for three months is logged with direction and cause, and a monthly count by type is brought to your coach."
                cadence: rolling
              tasks:
                - "Add miss direction and cause columns to your training log"
                - "Agree a short list of miss causes with your coach"
                - "Log every missed lift with its weight and direction during sessions"
                - "Count the month's misses by lift and direction @recurring(monthly:20)"
            - name: Hands, thumbs and grip care routine
              description: |-
                ## Purpose
                Hook grip and heavy pulls tear calluses and bruise thumbs, and a torn hand can cost a week of snatching. Filing calluses, taping thumbs the same way every time and moisturising between sessions keeps hands ready for heavy days.

                ## Milestones
                1. A thumb taping method learned and used every session.
                2. Calluses filed down weekly before they get thick enough to tear.
                3. A small hand care kit kept in the kit bag.
                4. No session lost to a torn hand over three months.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Over three months, hands are filed weekly and thumbs taped every session, with no training days lost to torn skin."
                cadence: rolling
              tasks:
                - "Learn one thumb taping method from your coach or a club lifter"
                - "Put a callus file and hand balm in your kit bag"
                - "File calluses and moisturise your hands @recurring(weekly:wed)"
                - "Note any tear in your log and what caused it"
            - name: Bodyweight trend for your weight class
              description: |-
                ## Purpose
                Competitive weightlifting is contested in bodyweight classes, and a lifter who drifts a kilo over before a meet faces a stressful weigh-in. A weekly weigh-in under the same conditions shows the trend well before competition, so any change can be planned slowly with your coach.

                ## Milestones
                1. A weekly weigh-in at the same time, on the same scale, in the same conditions.
                2. A four-week rolling average recorded in your log.
                3. Your current class and its limit recorded at the top of the log.
                4. Any planned change of class discussed with your coach well before a competition.

                ## Notes
                This is tracking, not dieting. If your weight needs to change, agree the approach with your coach and a dietitian or doctor.
              priority: low
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "Weekly bodyweight and a four-week average are logged for three months against your weight class limit."
                cadence: rolling
              tasks:
                - "Write your weight class and its limit at the top of your log"
                - "Weigh in at the same time each week and record it @recurring(weekly:fri)"
                - "Work out the four-week average at the end of each month"
                - "Raise any drift towards a class limit with your coach"
            - name: Club membership, federation licence and kit renewals
              description: |-
                ## Purpose
                Competition entry usually needs a current federation membership and sometimes an anti-doping education certificate, and both lapse quietly. One yearly check of club fees, licence, education modules and worn kit avoids discovering a gap the week of a meet.

                ## Milestones
                1. Renewal dates for club membership and federation licence written in one place.
                2. Any required anti-doping education module completed and its certificate saved.
                3. Shoes, wrist wraps and belt checked for wear.
                4. Renewals paid before the first competition of the season.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Club membership, federation licence and any required education certificate are current each year, with their dates recorded in one note."
                cadence: cyclic
              tasks:
                - "Find the renewal dates for club membership and federation licence"
                - "Check whether your federation requires an anti-doping education module"
                - "Inspect shoes, straps and wrist wraps for wear"
                - "Renew membership, licence and education before the season @recurring(yearly)"
            - name: Squats, pulls and presses alongside the lifts
              description: |-
                ## Purpose
                Front squat strength sets a ceiling on the clean, and back squats, pulls and overhead presses support every position the lifts demand. Running these accessories in the same blocks as the lifts, with numbers logged, shows whether strength or technique is holding you back.

                ## Milestones
                1. Accessory lifts for the block agreed with your coach.
                2. Front squat, back squat and pull numbers logged every session.
                3. A monthly best set recorded for each accessory.
                4. Strength numbers compared with the snatch and clean and jerk at the end of the block.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Squat, pull and press numbers are logged for a full block, with monthly best sets recorded and compared with the lifts."
                cadence: rolling
              tasks:
                - "Agree the accessory lifts for this block with your coach"
                - "Log every squat, pull and press set beside the lifts"
                - "Record the month's best squat and pull sets @recurring(monthly:8)"
                - "Compare accessory strength with the lifts at the end of the block"
            - name: Hook grip until it stops hurting
              description: |-
                ## Purpose
                Hook grip, with the thumb trapped under the first two fingers, is close to universal in the snatch and clean, and it hurts for the first few weeks. Using it on every pull from the first warm-up set, with tape and patience, gets you through that phase in about a month rather than avoiding it for a year.

                ## Milestones
                1. Hook grip used on every snatch and clean set, including warm-ups.
                2. Thumb tape used consistently to manage soreness.
                3. Hook grip held through a set of three without releasing.
                4. Releasing the hook in the turnover practised so the front rack is not blocked.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Hook grip is used on every pull for four weeks and held through sets of three without letting go."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask your coach to check your hook grip on an empty bar"
                - "Tape your thumbs before every session"
                - "Use hook grip on every warm-up set as well as working sets"
                - "Practise releasing the hook as the bar reaches the front rack"
            - name: Bailing safely from the snatch and jerk
              description: |-
                ## Purpose
                Every lifter misses, and the danger is not the miss but holding on to a bar going the wrong way. Practising how to push the bar forward and step back, or drop it behind and jump forward, with an empty bar and a coach watching, makes bailing a reflex before heavy weights ever need it.

                ## Milestones
                1. Forward and backward bails from the snatch practised with an empty bar.
                2. Stepping out from under a failed jerk practised with a light bar.
                3. A missed clean dumped forward without trying to rescue it on the chest.
                4. Your coach confirms you can bail both ways before you lift heavy.

                ## Notes
                Never try to rescue a snatch behind the head by bending the elbows: let it go and move away. Lift with bumper plates on a proper platform only.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your coach has watched you bail forward and backward from the snatch and out from a failed jerk, and confirmed it is safe to load the bar."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your coach to teach bailing in your next session"
                - "Practise backward and forward snatch bails with an empty bar"
                - "Practise stepping out from a failed jerk with a light bar"
                - "Get your coach's sign-off before adding weight"
            - name: Snatch learned from the top down
              description: |-
                ## Purpose
                Many coaches teach the snatch backwards: overhead squat, snatch balance, then from the hang and finally from the floor. Working through those stages, moving on only when each is consistent, builds a lift that stays together as the weight goes up.

                ## Milestones
                1. An overhead squat with a steady bar and full depth.
                2. A snatch balance with fast footwork and a stable catch.
                3. A hang snatch from above the knee with a full extension.
                4. A snatch from the floor made consistently at light weight.
                5. Each stage signed off by your coach before moving on.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each stage from overhead squat to snatch from the floor is signed off by your coach and filmed at light weight."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask your coach which snatch stage you are on today"
                - "Practise the current stage for five sets of three in each session"
                - "Film one set of the current stage each week"
                - "Move to the next stage only after your coach signs it off"
            - name: Clean learned from the top down
              description: |-
                ## Purpose
                The clean is usually taught from the catch backwards: a front squat with a relaxed front rack, then the hang clean, then the pull from the floor. Learning it in that order fixes the catch first, so the elbows come through fast and the bar lands on the shoulders rather than in the hands.

                ## Milestones
                1. A front squat to full depth with high elbows and a relaxed grip.
                2. Tall cleans that teach pulling yourself under the bar.
                3. A hang clean from above the knee caught in a full squat.
                4. A clean from the floor stood up consistently at light weight.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A clean from the floor is made consistently at light weight, with each stage filmed and approved by your coach."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Practise front rack holds with your fingertips under the bar"
                - "Drill tall cleans with an empty bar at the start of sessions"
                - "Film hang cleans weekly and check where the bar lands"
                - "Ask your coach to approve cleans from the floor before loading up"
            - name: Jerk dip, drive and split footwork
              description: |-
                ## Purpose
                Plenty of lifters clean more than they can jerk, and the gap usually lives in the dip and the feet rather than the shoulders. Drilling a straight vertical dip, an aggressive drive and a split that lands the same way every time closes that gap.

                ## Milestones
                1. A split position marked on the floor with front and back foot spacing.
                2. Footwork drills done without a bar until landing is consistent.
                3. A vertical dip and drive filmed side-on with no forward lean.
                4. Light jerks from the front rack landing in your marks consistently.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The split lands in the same marked position on 9 out of 10 light jerks, filmed side-on with a vertical dip."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Mark your split foot positions on the platform with chalk"
                - "Drill split footwork without a bar for five minutes each session"
                - "Film the dip and drive side-on and check for forward lean"
                - "Count how many of ten light jerks land in your marks"
            - name: Start position and first pull from the floor
              description: |-
                ## Purpose
                A bar that drifts forward off the floor is hard to rescue later in the lift. Setting the same start position every time, with shoulders over the bar and back tight, and pushing with the legs first, gives the second pull a fair chance.

                ## Milestones
                1. A start position agreed with your coach for snatch and clean grips.
                2. Halting pulls to the knee practised with a pause.
                3. Bar path from the floor checked on video for forward drift.
                4. A setup routine of the same steps used before every pull.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Video shows a consistent start position and no forward drift off the floor on light snatches and cleans for two weeks running."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Agree your start position for both grips with your coach"
                - "Practise paused pulls to the knee at light weight"
                - "Film the first pull side-on and check the bar path"
                - "Write a three-step setup routine and use it on every pull"
            - name: Pulling under the bar and receiving positions
              description: |-
                ## Purpose
                Beginners often finish the pull and then wait for the bar to fall, catching it high and soft. Drills such as tall snatches, muscle snatches and snatch pulls with a fast drop teach you to keep pressure on the bar and meet it in the bottom.

                ## Milestones
                1. Muscle snatches done with the bar staying close.
                2. Tall snatches and tall cleans landing in a full squat.
                3. Catch depth noted on video for each lift.
                4. Your coach agrees the turnover is fast enough to start heavier work.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Video shows snatches and cleans caught in a full squat at moderate weight, approved by your coach."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Add muscle snatches to the warm-up of snatch sessions"
                - "Practise tall snatches and tall cleans with an empty bar"
                - "Check catch depth on video once a week"
                - "Ask your coach whether the turnover is ready for heavier work"
            - name: Reading a weightlifting programme
              description: |-
                ## Purpose
                Programmes for the lifts are written in a shorthand of percentages, complexes such as snatch pull plus snatch, and rep schemes like 5x2 at 75%. Learning to read them means you can train from a written plan, ask better questions and spot when a day has been entered wrongly.

                ## Milestones
                1. Common terms such as hang, block, power, complex and percentage written in your own glossary.
                2. Last week's programme read and explained back to your coach without mistakes.
                3. Working weights for a full week calculated from your maxes.
                4. Any unclear notation asked about and added to the glossary.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page glossary exists and you can calculate a full week of working weights from the programme without help."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Start a glossary of programme terms in your log"
                - "Ask your coach to explain any notation you do not recognise"
                - "Calculate next week's working weights from your training maxes"
                - "Check your calculations against the coach's numbers"
            - name: Filming and analysing lifts with bar path tools
              description: |-
                ## Purpose
                A phone at hip height, side-on, shows most faults, and free or cheap bar path apps can trace the bar and show where it drifts. Setting up a consistent filming spot and learning the app takes an afternoon and makes the weekly video review far more useful.

                ## Milestones
                1. A filming spot on the platform chosen with the camera at hip height and side-on.
                2. A bar path app installed and tested on a few clips.
                3. A baseline snatch and clean bar path saved for comparison.
                4. Clips named consistently by date, lift and weight.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A fixed filming position is set up and baseline bar path traces for the snatch and clean are saved in your video folder."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pick a filming spot with the camera at hip height and side-on"
                - "Install a bar path tracking app and test it on three clips"
                - "Save baseline bar paths for the snatch and the clean"
                - "Agree a naming pattern for clips by date, lift and weight"
            - name: Split, power or squat jerk decision
              description: |-
                ## Purpose
                Most lifters use the split jerk, but some are faster and more stable in a power or squat jerk, depending on mobility, build and habit. Testing each style for a few weeks with your coach before you settle saves years of jerking in a style that does not suit you.

                ## Milestones
                1. Each style tried at light weight with your coach watching.
                2. Video of each style compared side-on.
                3. Make rate on moderate jerks noted for each style.
                4. A decision recorded with the reasons.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A jerk style is chosen after testing each at moderate weight, with make rates and the reasons recorded in your log."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your coach whether trying a power or squat jerk is worth it for you"
                - "Try each jerk style at light weight across two sessions"
                - "Record make rates for each style at moderate weight"
                - "Write down the chosen style and why"
            - name: Finding your limiter with lift-to-squat ratios
              description: |-
                ## Purpose
                Coaches often compare the clean and jerk with the front squat, and the snatch with the clean and jerk, to see whether strength or technique is limiting progress. Working out your ratios after a test week and comparing them with the reference ranges your coach uses tells you whether the next block needs more squatting or more technique work.

                ## Milestones
                1. Current bests for snatch, clean and jerk, front squat and back squat gathered.
                2. Snatch to clean and jerk and clean and jerk to front squat ratios calculated.
                3. Ratios compared with the reference ranges your coach uses.
                4. The conclusion, strength or technique, written into the next block plan.

                ## Notes
                Ratios are rough guides, not rules. Limb lengths and build shift them, so use them to start a conversation with your coach rather than to set targets.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Lift ratios are calculated from current bests and a strength or technique priority is written into the next block plan."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Collect your current bests for the four main lifts"
                - "Calculate the snatch to clean and jerk and clean and jerk to front squat ratios"
                - "Ask your coach which reference ranges they use"
                - "Write the agreed priority into the next block plan"
                - "Recalculate the ratios after each test week @recurring(quarterly)"
            - name: Fixing forward misses in the snatch
              description: |-
                ## Purpose
                Missing snatches in front is the most common snatch fault, often from the bar swinging away at the hip or the lifter jumping forward. Running a focused six-week fix, with your coach's diagnosis, specific drills and a make-rate target, turns a frustrating habit into a solved problem.

                ## Milestones
                1. The cause of forward misses agreed with your coach from video.
                2. Two or three corrective drills added to each snatch session.
                3. Foot landing checked on video to see whether you jump forward.
                4. Heavy-day snatch make rate improved against the starting figure.
              priority: medium
              deadlineOffsetDays: 42
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "After six weeks the heavy-day snatch make rate is higher than the starting figure and forward misses in the log have dropped."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Count your forward snatch misses from the last month's log"
                - "Ask your coach to diagnose the cause from your clips"
                - "Add the agreed corrective drills to every snatch session"
                - "Compare the heavy-day make rate after six weeks"
            - name: In-person or remote coaching decision
              description: |-
                ## Purpose
                Not everyone lives near a club, and some lifters outgrow the coaching available locally. Comparing in-person coaching with a remote coach who programmes and reviews video weekly, on cost, feedback speed and accountability, gives you a clear choice instead of drifting between both.

                ## Milestones
                1. Your needs written down: feedback frequency, budget and competition goals.
                2. One local and two remote options compared on the same criteria.
                3. A trial month with the preferred option completed.
                4. A decision recorded with a date to review it.

                ## Notes
                Start from the **Purchase decision** template. Remote coaching only works if you film every heavy session and send the clips on time.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A coaching option is chosen after a trial month, with the comparison and a review date recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write your coaching needs, budget and goals in a few lines"
                - "Compare one local and two remote coaches on the same criteria"
                - "Ask each remote coach how quickly they return video feedback"
                - "Run a trial month with your preferred option and record the decision"
            - name: Choosing a programme after the beginner phase
              description: |-
                ## Purpose
                Once steady weekly jumps stop, usually after six months to a year, a lifter needs a programme with waves, heavier singles and planned lighter weeks. Choosing between the club's group programme, an individual plan from your coach and a published template means weighing your goals, schedule and how much coaching you get.

                ## Milestones
                1. Signs that beginner progress has slowed recorded from your log.
                2. Three programme options listed with sessions per week and cost.
                3. Your coach's recommendation asked for and noted.
                4. One programme chosen and its first block scheduled.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A post-beginner programme is chosen after comparing three options with your coach, and its first block is in your calendar."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Look for stalled lifts in the last eight weeks of your log"
                - "List three programme options with sessions per week and cost"
                - "Ask your coach which option they would choose for you"
                - "Schedule the first block of the chosen programme"
            - name: Breaking a stalled clean and jerk
              description: |-
                ## Purpose
                When the clean and jerk has not moved in three months, the cause is usually one of three: the clean is fine but the jerk fails, the front squat is too weak, or you are spent by the time you stand up the clean. Testing each, then running a 12-week block aimed at the weak link, gives the total its best chance to move.

                ## Milestones
                1. Best clean only and best jerk from blocks compared to find the weak half.
                2. Front squat compared with the clean to check strength.
                3. A 12-week block built around the weak link with your coach.
                4. A new clean and jerk test completed at the end of the block.
              priority: medium
              deadlineOffsetDays: 84
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A 12-week block targeting the identified weak link is completed and finished with a clean and jerk test recorded in the log."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Test a best clean only and a best jerk from blocks"
                - "Compare your front squat with your best clean"
                - "Plan a 12-week block around the weak link with your coach"
                - "Retest the clean and jerk in the final week"
            - name: In-club mock competition
              description: |-
                ## Purpose
                A first competition feels very different from training: a clock, a weigh-in, three attempts and people watching. Many clubs run an internal mock meet, and lifting in one before a real entry lets you rehearse warm-ups and attempts with nothing at stake.

                ## Milestones
                1. A date for the club's next mock competition found, or one requested.
                2. A practice weigh-in done on the morning.
                3. Three attempts in each lift taken under competition rules.
                4. A short note on what felt different from training.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Six attempts are taken under competition rules at a club mock meet and a note on what to change is in your log."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask your coach when the next club mock competition is"
                - "Agree three attempts for each lift with your coach"
                - "Lift in the mock meet with your coach handling attempts"
                - "Write down what felt different from a training session"
            - name: Entering your first sanctioned competition
              description: |-
                ## Purpose
                Sanctioned competitions need federation membership, an entry total close to what you expect to lift, and an entry submitted weeks in advance. Choosing a beginner-friendly meet with your coach and handling the paperwork early leaves the final weeks for training.

                ## Milestones
                1. A suitable novice or open meet chosen with your coach.
                2. Federation membership confirmed as current.
                3. An entry submitted with weight class and entry total before the deadline.
                4. Travel, timings and the session schedule known a week before.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An entry for a sanctioned meet is submitted before the deadline with a weight class and entry total, and the session time is confirmed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your coach which upcoming meets suit a first competition"
                - "Check your federation membership is current"
                - "Submit the entry with weight class and entry total"
                - "Find your session start time and plan travel for the day"
            - name: Weigh-in and weight class plan for competition
              description: |-
                ## Purpose
                Weigh-ins usually happen two hours before lifting starts, and you lift in the class you weigh into. Deciding the class with your coach well in advance, and planning the morning's food, fluids and weigh-in kit, avoids last-minute panic or an unplanned cut.

                ## Milestones
                1. Competition class agreed with your coach at least eight weeks out.
                2. Bodyweight trend checked against the class limit every week.
                3. A plan for the weigh-in morning written: what to wear, eat and bring.
                4. Food and fluids for after the weigh-in packed.

                ## Notes
                Do not attempt a rapid weight cut on your own. Any plan to drop weight for a class should be agreed with your coach and a qualified dietitian or doctor.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A competition class is agreed eight weeks out and a written weigh-in morning plan is ready the week before the meet."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Agree your competition weight class with your coach"
                - "Check the weigh-in time and rules in the meet information"
                - "Write a weigh-in morning plan covering clothing, food and kit"
                - "Pack food and drink for after the weigh-in"
            - name: Attempt selection plan for competition day
              description: |-
                ## Purpose
                Openers that are too heavy are the most common reason novices bomb out, finishing a lift with no successful attempt. A written plan with a confident opener, a second and a third for each lift, plus the rules for changes, means the decisions on the day are already made.

                ## Milestones
                1. Openers set at a weight you have made comfortably in training.
                2. Second and third attempts planned for each lift with jump sizes.
                3. Rules for changing attempts and their timing understood.
                4. The plan shared with whoever handles your card on the day.

                ## Notes
                Many coaches set the opener at a weight made several times in recent training. Agree yours in advance rather than picking a number in the warm-up room.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written plan with three attempts per lift, agreed with your coach, is in your kit bag on competition day."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find your most reliable heavy singles from the last four weeks"
                - "Agree openers, seconds and thirds with your coach"
                - "Read the federation's rules on changing declared weights"
                - "Give the plan to your coach or handler before the session"
            - name: Warm-up room timing and attempt counting
              description: |-
                ## Purpose
                Warm-ups in competition are timed by attempts, not the clock: you count how many lifts are ahead of you and take warm-up sets so you are ready when your name is called. Rehearsing the count with your coach before the meet stops you arriving at the bar cold or rushed for your opener.

                ## Milestones
                1. Warm-up sets for each lift written with weights.
                2. The method of counting attempts out understood.
                3. A rehearsal of the count done in training or at a mock meet.
                4. A handler agreed for the day if your coach cannot attend.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Warm-up sets for both lifts are written and the attempt countdown has been rehearsed once before competition day."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write your warm-up sets for the snatch and the clean and jerk"
                - "Ask your coach how they count attempts out in the warm-up room"
                - "Rehearse the countdown in one training session"
                - "Arrange a handler if your coach cannot attend"
            - name: Post-competition review and next goals
              description: |-
                ## Purpose
                Right after a meet is when the lessons are clearest: which attempts felt good, where nerves showed and whether warm-ups were timed well. A written review within a week, with your coach, sets the goal for the next block and the next competition.

                ## Milestones
                1. Results and every attempt recorded in your log.
                2. Video of each attempt saved and watched.
                3. Three things that went well and three to change written down.
                4. A goal for the next block and a possible next meet agreed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Within a week of the meet, a written review with results, video and three changes is in your log, and the next goal is agreed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Record every attempt and result in your log on the day"
                - "Save and watch the video of each attempt"
                - "Ask the agent to turn your notes into three keeps and three changes"
                - "Agree the next goal and a possible meet with your coach"
            - name: Moving from CrossFit to a weightlifting focus
              description: |-
                ## Purpose
                CrossFit athletes often arrive with strength and fitness but carry habits from high-rep, fast-cycling barbell work, such as touch-and-go snatches and pressed-out catches. Spending a phase on slower single and double reps with a weightlifting coach rebuilds positions without losing the engine.

                ## Milestones
                1. Your current lifts filmed and reviewed by a weightlifting coach.
                2. Two or three habits from fast cycling identified to change.
                3. A phase of singles and doubles agreed in place of high-rep lifting.
                4. Conditioning kept to a level that does not compromise heavy days.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "After a 12-week phase of singles and doubles with a weightlifting coach, video shows the agreed habits corrected."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Film your current snatch and clean and jerk and send them to the coach"
                - "Ask the coach which cycling habits matter most to change"
                - "Swap high-rep barbell work for singles and doubles for 12 weeks"
                - "Schedule conditioning on days away from heavy lifting"
            - name: Masters weightlifting from age 35
              description: |-
                ## Purpose
                Masters weightlifting starts at 35 in many federations, with age groups every five years and age-adjusted scoring. Training for it usually means a longer warm-up, fewer heavy singles a week and recovery taken seriously, and it opens up competitions where you lift against people your own age.

                ## Milestones
                1. Masters age groups and age-adjusted scoring in your federation understood.
                2. A weekly plan with fewer maximal efforts agreed with your coach.
                3. A longer warm-up routine written and used.
                4. A masters competition chosen for the coming season.

                ## Notes
                If you have a heart condition, high blood pressure or another long-term health issue, check with your doctor before starting heavy training.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A masters training plan with a written warm-up routine is in use and a masters competition is chosen for the coming season."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Look up masters age groups and scoring in your federation"
                - "Agree a weekly plan with fewer heavy singles with your coach"
                - "Write a longer warm-up routine and use it each session"
                - "Check your age group and the masters calendar for the coming year @recurring(yearly)"
            - name: Training around exams as a student lifter
              description: |-
                ## Purpose
                Exam seasons cut sleep and time just when a junior or student lifter wants to keep progressing. Planning a lighter maintenance block across revision and exams, agreed with your coach in advance, keeps the technique sharp without competing with study for energy.

                ## Milestones
                1. Exam and revision dates added to your training calendar.
                2. A maintenance block of two or three shorter sessions a week agreed.
                3. Competition entries avoided in the busiest weeks.
                4. A return to full training planned for after the last exam.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A maintenance block is planned around exam dates with your coach and a return to full training is scheduled."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Add exam and revision dates to your training calendar"
                - "Agree a two or three session maintenance block with your coach"
                - "Check no competitions clash with the busiest exam weeks"
                - "Plan the first full training week after exams"
            - name: Three sessions a week in a demanding work season
              description: |-
                ## Purpose
                Long hours, travel or a busy season at work can make five sessions impossible for weeks at a time. A three-session plan that keeps the snatch, the clean and jerk and squats in every week holds most of your progress until normal life returns.

                ## Milestones
                1. The busy period and its likely length written down.
                2. A three-session template agreed with your coach.
                3. Sessions scheduled at the times the work calendar is least likely to take.
                4. A return to the full programme planned for the end of the period.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A three-session plan is followed through the busy period with at least 80 percent attendance and a planned return date."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write down when the busy period starts and roughly how long it lasts"
                - "Ask your coach for a three-session week covering both lifts and squats"
                - "Book the coming week's three sessions into your calendar @recurring(weekly:sun)"
                - "Plan the return to the full programme"
            - name: Returning to the platform after a long break
              description: |-
                ## Purpose
                After months away, through work, a move or a new baby, the lifts feel unfamiliar and old numbers are both tempting and risky. A planned return, starting with technique work and rebuilding percentages from new bests, gets you lifting well again without chasing old maxes.

                ## Milestones
                1. Old bests archived and not used for percentages.
                2. Two weeks of light technique work completed.
                3. New technical bests set with your coach.
                4. A first block planned from the new numbers.

                ## Notes
                If the break was because of an injury, follow your physiotherapist's return plan before this one.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "New technical bests are recorded after two weeks of technique work and the first block is planned from them."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Move old bests to an archive section of your log"
                - "Book two weeks of light technique sessions with your coach"
                - "Work up to new technical bests in each lift"
                - "Plan the first block from the new numbers"
            - name: Peaking block for a target competition
              description: |-
                ## Purpose
                Training changes in the last four to six weeks before an important meet: volume drops, intensity rises and heavy singles are timed so you arrive fresh. Planning that peak with your coach, including the final week's opener rehearsals, gives the best chance of a personal best on the platform.

                ## Milestones
                1. A peaking block written with weekly volume and intensity targets.
                2. Heavy singles and opener rehearsals scheduled.
                3. A final week planned with reduced volume.
                4. Sleep, food and travel planned for the last few days.
              priority: high
              deadlineOffsetDays: 70
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written peaking block with a reduced final week is completed and you arrive at the meet having rehearsed your openers."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Agree the peaking block's length and goal with your coach"
                - "Schedule heavy singles and opener rehearsals each week"
                - "Plan the reduced final week before the meet"
                - "Plan sleep, food and travel for the last three days"
            - name: Qualifying totals for national championships
              description: |-
                ## Purpose
                National and regional championships usually require a qualifying total in your weight class within a set window, and the numbers change from year to year. Knowing the target and how far you are from it lets you and your coach decide whether this season is a realistic attempt or a step towards the next.

                ## Milestones
                1. Current qualifying totals and the qualifying window for your class found.
                2. The gap between your best total and the target calculated.
                3. Qualifying competitions within the window listed.
                4. A decision made with your coach on whether to chase qualification this season.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The gap to your class's qualifying total is calculated and a decision on whether to chase it this season is recorded with your coach."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Find your federation's qualifying totals and window for your class"
                - "Calculate the gap between your best total and the target"
                - "List the qualifying competitions within the window"
                - "Check the qualifying totals when the federation publishes them @recurring(yearly)"
            - name: Moving weight class up or down
              description: |-
                ## Purpose
                Changing class can make sense when a lifter sits well under one limit or keeps struggling to make it, and it shifts both bodyweight and the totals needed to compete. Weighing that choice with your coach, and with a dietitian if weight needs to change, keeps it a planned decision rather than a pre-meet rush.

                ## Milestones
                1. Your bodyweight trend and position in your class reviewed.
                2. Totals in the current and alternative class compared using recent results lists.
                3. Professional input taken on any change in bodyweight.
                4. A decision recorded with a timeline.

                ## Notes
                Any change in bodyweight should be gradual and supervised. Agree the approach with a qualified dietitian or doctor.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision on weight class is recorded with your coach, with a timeline and professional input on any bodyweight change."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Review three months of bodyweight trend against your class limits"
                - "Compare winning totals in your current and alternative class"
                - "Book a consultation with a dietitian if your weight needs to change"
                - "Record the class decision and timeline in your log"
            - name: Weightlifting coaching award and assisting at your club
              description: |-
                ## Purpose
                Experienced lifters are often asked to help beginners, and a federation coaching award gives you the knowledge and insurance to do it properly. Assisting at beginner sessions while studying for the first level puts something back into the club that taught you.

                ## Milestones
                1. Your federation's first coaching award and its entry requirements found.
                2. The course booked and any required safeguarding training completed.
                3. Regular assisting at beginner sessions arranged with the head coach.
                4. The award completed and recorded in your development plan.

                ## Notes
                Start from the **Development plan** template.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A first-level coaching award is completed and you assist at a beginner session at least once a month."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Look up your federation's first coaching award and its requirements"
                - "Ask the head coach about assisting at beginner sessions"
                - "Book the course and any safeguarding training"
                - "Assist at one beginner session @recurring(monthly:15)"
            - name: Technical official and referee course
              description: |-
                ## Purpose
                Competitions cannot run without referees, technical controllers and marshals, and most federations train volunteers for free or a small fee. Qualifying as an official teaches the rules in detail, which sharpens your own lifting, and helps your club host meets.

                ## Milestones
                1. Your federation's entry-level technical official course found.
                2. The course completed and the assessment passed.
                3. A first competition officiated under supervision.
                4. Officiating commitments recorded each season.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The entry-level technical official course is passed and at least one competition has been officiated."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Find your federation's technical official course dates"
                - "Book the course and read the technical rules beforehand"
                - "Volunteer to officiate under supervision at a club competition"
                - "Officiate at least one competition each season @recurring(yearly)"
---

# Olympic Weightlifting

This area is for anyone learning the snatch and the clean and jerk, from a first lesson with a pipe to lifting on a competition platform. It starts with the foundations (a club and a qualified coach, shoes, a mobility screen, starting numbers and a proper log), then the weekly machinery of sessions, video review and training blocks, the technique progressions for each lift, the decisions about jerk style, coaching and programmes, the competition events from mock meet to attempt plan, the situations that change training, and finally the work of an experienced lifter: peaking, qualifying totals, weight class and giving back as a coach or official.

What repeats is a weekly session count, a short daily mobility routine, a weekly video review and hand care, a monthly technique check-in with your coach and a monthly miss count, a block plan each quarter, and yearly licence renewals. The Purchase decision, Metrics log, Habit tracker, Training program and Development plan templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
