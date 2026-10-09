---
id: fitness-sport.obstacle-course-racing
name: Obstacle Course Racing
description: "Obstacle races finished on your own terms: the right first event, grip and pulling strength, off-road running, wall, rope and rig technique, burpee and carry capacity, and race weeks that run to plan."
category: personal
version: 1.0.0
tags: [fitness-sport, obstacle-course-racing, athlete, spartan, tough-mudder, grip-strength, trail-running, obstacles]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - training-program
    - metrics-log
    - operational-checklist
    - trip
  pillars:
    - name: Fitness & Sport
      emoji: "🏋️"
      description: "Training, play and competition: building strength, endurance and skill in a sport or a gym, structuring blocks of work around events, recovering properly, and keeping the sessions honest with a log rather than a feeling."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Obstacle Course Racing
          description: "Preparing for Spartan, Tough Mudder and similar obstacle races with grip strength, running fitness and obstacle technique."
          projects:
            - name: Choosing your first obstacle race and distance
              description: |-
                ## Purpose
                Obstacle events range from a 5 km untimed team mud run to a 21 km timed race with 30 obstacles and burpee penalties, and signing up for the wrong one is the commonest way a first race goes badly. Picking the format, distance and wave that match your current running and pulling ability gives training a clear target and a date to build towards.

                ## Milestones
                1. Three candidate races listed with distance, obstacle count, terrain and whether they are timed.
                2. The difference between untimed team events, open waves and competitive waves understood for each.
                3. One race chosen with a start date at least ten weeks away.
                4. An entry booked in a wave that matches your goal, with the confirmation saved.

                ## Notes
                For a first race, a course of 5 to 10 km with an open wave is the usual sensible default. Elevation matters as much as distance: a hilly 8 km can take longer than a flat 13 km.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One obstacle race is entered in a named wave, at least ten weeks after the entry date, with its confirmation saved."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List three obstacle races within travelling distance in the next six months"
                - "Compare distance, obstacle count and elevation for each race"
                - "Decide between an untimed, open or competitive wave"
                - "Book the entry and save the confirmation email in this project"
            - name: Penalty rules and obstacle standards read-through
              description: |-
                ## Purpose
                Every race series has its own rules: some give 30 burpees for a failed obstacle, some make competitive racers hand back a wristband, and some let you skip freely. Reading your series' rulebook before training starts tells you whether burpee fitness or obstacle completion matters more, and stops a disqualification on race day for a rule you never knew existed.

                ## Milestones
                1. The current rulebook for your series and wave downloaded.
                2. The penalty for a failed obstacle written in one sentence.
                3. Rules on assistance, lane choice, retries and kit listed.
                4. Any obstacle-specific standards, such as which bell to ring, noted for training.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page summary of your series' penalty, assistance and retry rules for your wave is saved before training begins."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Download the current rulebook for your race series and wave"
                - "Write the failed obstacle penalty in one sentence"
                - "List the rules on help from others, retries and lane changes"
                - "Note any finish standards such as bells, buttons or marked zones"
            - name: Health questions and waiver before obstacle racing
              description: |-
                ## Purpose
                Waivers for obstacle races routinely mention ice water immersion, live electric wires, heights and crawling through muddy water, and some events advise people with heart conditions, pacemakers, epilepsy or pregnancy not to attempt certain obstacles. Reading the waiver early and taking any questions to your clinician means you start training knowing which obstacles you will walk past.

                ## Milestones
                1. The event waiver and medical guidance read in full.
                2. Any obstacle the guidance warns against for your health situation listed.
                3. A clinician appointment held if anything in the waiver applies to you.
                4. A written list of obstacles you will bypass, agreed in advance.

                ## Notes
                This project organises questions; it does not decide what is safe for you. If the waiver flags a condition you have, your clinician has the final word.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The waiver has been read, any flagged condition has been discussed with a clinician, and a bypass list is written down."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read the event waiver and medical guidance from start to finish"
                - "List any obstacles the guidance warns against for conditions you have"
                - "Book a clinician appointment if the waiver mentions anything that applies"
                - "Re-read the waiver and update your bypass list before each new season @recurring(yearly)"
            - name: Baseline test of running, grip and pulling
              description: |-
                ## Purpose
                Most obstacle racers fail on one of three things: running engine, grip endurance or upper body pulling, and guessing which one is yours wastes a training block. Testing all three in one week gives numbers to train against and shows where the first twelve weeks should go.

                ## Milestones
                1. A 5 km off-road time trial recorded with total elevation.
                2. A maximum dead hang time on a bar recorded.
                3. Maximum strict pull-ups or a flexed arm hang time recorded.
                4. A 100 metre heavy carry time recorded with the weight used.
                5. The weakest of the three areas named in one sentence.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Four baseline numbers (off-road 5 km, dead hang, pull-ups and carry) are logged with dates and the weakest area named."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Run a 5 km off-road time trial and note the elevation"
                - "Test your longest dead hang on a pull-up bar"
                - "Record strict pull-ups, or a flexed arm hang if you cannot do one"
                - "Time a 100 metre carry with two heavy dumbbells or a sandbag"
            - name: Places near home to practise obstacles
              description: |-
                ## Purpose
                Monkey bars, rope climbs and walls are skills, and they only improve on real equipment. A list of the ninja gyms, obstacle training parks, climbing walls with rope climbs, outdoor gyms and playground rigs within reach turns obstacle practice from a once-a-year race surprise into a weekly session.

                ## Milestones
                1. Every ninja gym, obstacle park and outdoor rig within 30 minutes listed.
                2. Opening hours, prices and drop-in rules noted for each.
                3. At least one venue visited and its equipment checked against your race obstacles.
                4. One regular practice venue chosen for weekly sessions.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A list of local obstacle practice venues exists and one has been chosen and visited for weekly sessions."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Search for ninja gyms and obstacle training parks within 30 minutes"
                - "Add outdoor gyms and playgrounds with adult-height monkey bars"
                - "Visit the most promising venue and note which obstacles it has"
                - "Choose the venue for your weekly obstacle session"
            - name: Weekly obstacle race training week template
              description: |-
                ## Purpose
                Running, grip, pulling, carries and skill all need a place in the same week, and without a fixed template the sessions you enjoy crowd out the ones you need. A standard week of four or five sessions, with the hard days separated, makes every week repeatable and easy to adjust when life gets busy.

                ## Milestones
                1. Training days available each week written down honestly.
                2. A template week with run, grip and pull, obstacle and carry sessions placed.
                3. Hard running and hard grip sessions kept at least a day apart.
                4. Four consecutive weeks planned from the template on a Sunday.

                ## Notes
                Start from the **Training program** template. Two runs, two strength and grip sessions and one obstacle session is a common starting week for a 5 to 10 km race.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written training week template is in use and four consecutive weeks have been planned from it."
                cadence: rolling
              tasks:
                - "Write down which days and times you can genuinely train"
                - "Place two runs, two strength and grip sessions and one obstacle session"
                - "Move sessions so hard runs and hard grip days do not fall back to back"
                - "Plan next week's sessions into the calendar from the template @recurring(weekly:sun)"
            - name: Obstacle training log
              description: |-
                ## Purpose
                Feeling stronger on the rig is not the same as completing it, and race results only tell you which obstacles you failed once a season. A log that records runs, hang times, pull-ups, carry weights and every obstacle attempt with a pass or fail shows the trend weeks before a race does.

                ## Milestones
                1. A log with sections for runs, grip, pulling, carries and obstacle attempts.
                2. Baseline numbers entered as the first rows.
                3. Every obstacle attempt recorded as pass or fail with a short note.
                4. Eight weeks of entries completed without gaps.

                ## Notes
                Start from the **Metrics log** template. Recording failures honestly is the point; a log of only good days is useless for planning.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A training log holds at least eight weeks of runs, grip numbers and obstacle pass or fail entries."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create a log from the metrics log template"
                - "Add columns for obstacle name, attempt, pass or fail and notes"
                - "Enter your baseline numbers as the first rows"
                - "Record each obstacle attempt at the end of every rig session"
            - name: Trail shoes with lugs that drain mud and water
              description: |-
                ## Purpose
                Road shoes turn into slick, heavy sponges in deep mud, and a shoe that slips on wet wall boards or holds a litre of water costs time and ankles. Choosing a trail shoe with deep lugs, a drainage upper and a secure lace, then testing it in mud before race day, avoids discovering the problem halfway up a muddy bank.

                ## Milestones
                1. Lug depth, drainage and fit priorities written down for your race terrain.
                2. Two or three shoes shortlisted and tried on with the socks you will race in.
                3. One pair bought and worn on at least three muddy runs.
                4. A lace method that stays tied when wet chosen and tested.

                ## Notes
                Start from the **Purchase decision** template. Shoes marketed for obstacle racing usually have lugs of around 6 mm or more and thin uppers that drain fast.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A pair of deep-lug draining trail shoes has been bought and tested on three muddy runs before race day."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down the terrain and weather expected at your race"
                - "Shortlist three trail shoes with deep lugs and draining uppers"
                - "Try the shortlist on wearing your race socks"
                - "Test the chosen pair on three muddy runs and adjust the lacing"
            - name: Race clothing that drains and does not chafe
              description: |-
                ## Purpose
                Cotton holds water and mud, loose shorts snag on barbed wire, and the wrong socks give blisters by the third kilometre once they are soaked. Testing a full race outfit through a wet, muddy training run settles what you will wear, so race morning involves no new kit.

                ## Milestones
                1. A race outfit chosen from synthetic, close-fitting pieces with no cotton.
                2. Socks chosen for wet conditions and tested for blisters.
                3. The full outfit worn on a wet, muddy run of race length.
                4. Anti-chafe needs noted and the solution packed in the race bag.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "One complete race outfit has been worn on a wet run of race length and passed without blisters or chafing."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Lay out a race outfit of close-fitting synthetic pieces"
                - "Swap any cotton items for quick-drying alternatives"
                - "Wear the full outfit on a wet run of race length"
                - "Note where it rubbed and pack the fix in your race bag"
            - name: Twice-weekly grip endurance sessions
              description: |-
                ## Purpose
                Forearms usually give out before the back or arms do, which is why so many racers fall off the second half of a rig they could start. Two short grip sessions a week of dead hangs, towel hangs, plate pinches and farmer's holds build the endurance that keeps you on bars and ropes late in a race.

                ## Milestones
                1. A 20 to 30 minute grip routine written with hangs, towel hangs and pinch work.
                2. Two grip sessions completed every week for eight weeks.
                3. Dead hang time improved by at least 30 seconds over the baseline.
                4. A one-arm or towel hang added once the two-arm hang passes 90 seconds.

                ## Notes
                Build volume slowly: finger and elbow tendons adapt more slowly than muscle. Sharp pain on the inside or outside of the elbow is a reason to back off and get it checked.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Sixteen grip sessions completed in eight weeks, with dead hang time at least 30 seconds above the baseline."
                cadence: rolling
              tasks:
                - "Write a 25 minute grip routine of hangs, towel hangs and plate pinches"
                - "Complete a grip endurance session @recurring(weekly:tue,fri)"
                - "Retest your dead hang after eight weeks and log the time"
            - name: Weekly hilly trail run with obstacle stops
              description: |-
                ## Purpose
                Race courses are usually on ski slopes, farmland or forest, with steep climbs and descents that road runners rarely train for. One weekly off-road run over hills, with short stops to do burpees, hangs or carries, builds the engine and the habit of running on with tired arms.

                ## Milestones
                1. A hilly off-road loop of 6 to 10 km chosen near home.
                2. One trail run completed every week for ten weeks.
                3. Three or four strength stops added to each run, such as burpees or bar hangs.
                4. The loop time improved against the first run of the block.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Ten weekly hilly trail runs completed, each with strength stops, and the loop time improved on the first run."
                cadence: rolling
              tasks:
                - "Map a hilly off-road loop of 6 to 10 km near home"
                - "Choose three stops on the loop for burpees, hangs or carries"
                - "Run the hilly loop with obstacle stops @recurring(weekly:sat)"
                - "Compare this month's loop time with the first run of the block"
            - name: Weekly rig and obstacle skill session
              description: |-
                ## Purpose
                Skills on the rig fade fast and are hard to rebuild in the last month before a race. A weekly hour at your chosen venue, rotating through monkey bars, rings, ropes and walls, keeps every obstacle familiar and turns your log of failures into a list of fixes.

                ## Milestones
                1. A rotation of obstacles written so each one gets practised at least monthly.
                2. One obstacle session completed every week for ten weeks.
                3. Each session ending with one attempt at a full rig while fatigued.
                4. Pass rate on your target obstacles rising across the ten weeks.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Ten weekly obstacle sessions logged, with every target obstacle practised at least twice and pass rates improving."
                cadence: rolling
              tasks:
                - "Write a four-week rotation of the obstacles at your venue"
                - "Practise the week's obstacles at your venue for one hour @recurring(weekly:wed)"
                - "Finish each session with one full rig attempt after a hard minute of burpees"
            - name: Burpee capacity for penalty loops
              description: |-
                ## Purpose
                In races that charge 30 burpees per failed obstacle, two or three fails can add 10 minutes and empty your legs for the next climb. Building to 30 steady burpees without stopping, then to repeated sets between runs, makes a penalty an inconvenience rather than the end of your race.

                ## Milestones
                1. Unbroken burpees to the race standard tested and logged.
                2. Burpee sets completed twice a week for eight weeks.
                3. Thirty unbroken burpees reached at a pace you can sustain.
                4. Three sets of 30 completed with 400 metre runs in between.

                ## Notes
                Learn the exact burpee standard your series uses, usually chest to ground and a jump with hands overhead, and practise only that version.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three sets of 30 race-standard burpees completed with 400 metre runs in between, logged within eight weeks."
                cadence: rolling
              tasks:
                - "Check the burpee standard in your series rulebook"
                - "Test how many race-standard burpees you can do without stopping"
                - "Complete burpee sets of 30 at a steady pace @recurring(weekly:mon,thu)"
                - "Try three sets of 30 between 400 metre runs at the end of week eight"
            - name: Heavy carries for buckets, sandbags and logs
              description: |-
                ## Purpose
                Carry obstacles such as the gravel bucket, sandbag carry and log carry often come uphill and last several minutes, and they are where back and grip fatigue add up. A weekly carry session with awkward loads on a slope makes these obstacles steady walks instead of stop-start struggles.

                ## Milestones
                1. Race carry weights for your wave and gender category looked up.
                2. A sandbag or bucket filled to race weight or a little lighter.
                3. One carry session completed every week for eight weeks.
                4. A 200 metre uphill carry at race weight completed without putting it down.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight weekly carry sessions logged and one unbroken 200 metre uphill carry at race weight completed."
                cadence: rolling
              tasks:
                - "Look up the carry weights for your wave and category"
                - "Fill a bucket or sandbag to race weight for training"
                - "Carry the bucket or sandbag on a hill for set distances @recurring(weekly:tue)"
                - "Attempt a 200 metre uphill carry at race weight without a rest"
            - name: Pulling strength for walls and rope climbs
              description: |-
                ## Purpose
                Getting over a 2.4 metre wall or up a 5 metre rope depends on how well you can pull your own body weight, and many runners cannot yet manage a single strict pull-up. Twice-weekly pulling work, from negatives and band-assisted reps to weighted pull-ups, gives you the strength that technique then makes efficient.

                ## Milestones
                1. Starting point recorded: strict pull-ups, or flexed arm hang time.
                2. A progression chosen, such as negatives, banded reps or weighted reps.
                3. Two pulling sessions completed every week for ten weeks.
                4. Strict pull-ups increased by at least three, or a first strict rep achieved.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twenty pulling sessions logged in ten weeks, with three more strict pull-ups than baseline or a first strict rep."
                cadence: rolling
              tasks:
                - "Choose your pull-up progression from negatives, bands or added weight"
                - "Do your pulling session of pull-ups, rows and hangs @recurring(weekly:mon,thu)"
                - "Retest strict pull-ups at the end of week ten"
            - name: Monthly mini race simulation
              description: |-
                ## Purpose
                Doing obstacles fresh in the gym hides what happens when you arrive at them breathing hard with wet hands. A monthly session of 1 km runs between five or six obstacle stations, with penalties for fails, shows how your pacing, grip and recovery hold up together.

                ## Milestones
                1. A simulation course of five or six stations with runs between them designed.
                2. Your series' penalty rule applied to every failed station.
                3. One simulation completed each month for three months.
                4. Total time and number of fails compared across the three simulations.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three monthly simulations completed and logged, with total time and fails compared across them."
                cadence: rolling
              tasks:
                - "Design a course of 1 km runs between five or six obstacle stations"
                - "Wet your hands before grip stations to mimic race conditions"
                - "Run the mini race simulation with penalties for fails @recurring(monthly:12)"
                - "Compare total time and fails with last month's simulation"
            - name: Monthly obstacle race block review
              description: |-
                ## Purpose
                A month of training produces enough numbers to see whether grip, pulling and running are moving, but only if someone looks at them. A short monthly review of the log decides what stays, what changes and which obstacle gets extra attention next month.

                ## Milestones
                1. A monthly review slot in the calendar.
                2. Run times, hang times, pull-ups and obstacle pass rates compared with last month.
                3. One change to next month's training written down.
                4. Six monthly reviews completed in a row.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly reviews recorded, each with comparisons to the previous month and one written change."
                cadence: rolling
              tasks:
                - "Compare this month's numbers with last month and write one change @recurring(monthly:28)"
                - "Ask the agent to summarise the month's log into wins, fails and trends"
                - "Move next month's extra session to your weakest obstacle"
            - name: Quarterly retest of running, grip and pulling
              description: |-
                ## Purpose
                Monthly reviews show trends, but a proper retest under the same conditions as the baseline is what proves a block worked. Repeating the four baseline tests every quarter shows whether your weakest area has improved enough to move training attention elsewhere.

                ## Milestones
                1. The four baseline tests repeated on the same loop and equipment.
                2. Results logged next to every previous test.
                3. The weakest area re-ranked after each retest.
                4. Four quarterly retests completed in a year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly retests of the baseline tests logged in a year, each followed by a re-ranked weakest area."
                cadence: cyclic
              tasks:
                - "Repeat the off-road 5 km, dead hang, pull-up and carry tests @recurring(quarterly)"
                - "Log each result next to your previous tests"
                - "Name the weakest area again and adjust next quarter's focus"
            - name: Kit inspection after muddy races and sessions
              description: |-
                ## Purpose
                Grit wears through shoe uppers, mud rots stitching and gloves left wet grow mould, so obstacle kit fails far faster than road kit. A routine for washing and drying everything after muddy days, and a quarterly inspection, catches worn lugs and split seams before a race does.

                ## Milestones
                1. A wash and dry routine for shoes, gloves and clothing written down.
                2. Shoes rinsed, stuffed with paper and air dried after every muddy outing.
                3. A quarterly check of lugs, uppers, laces and glove palms completed.
                4. Worn items replaced at least four weeks before the next race.

                ## Notes
                Avoid tumble dryers and radiators for shoes: direct heat warps soles and weakens glue.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly kit inspections completed in a year, with any worn item replaced at least four weeks before a race."
                cadence: rolling
              tasks:
                - "Write a three-step wash and dry routine for muddy kit"
                - "Keep a bucket and old newspaper by the door for muddy shoes"
                - "Inspect shoe lugs, uppers, laces and glove palms for wear @recurring(quarterly)"
            - name: Monkey bars and swinging grip technique
              description: |-
                ## Purpose
                Most people fall off monkey bars because they reach statically with bent arms and burn out their grip. Learning to swing from the hips, keep arms long and skip rungs when spacing allows can halve the grip time an obstacle costs.

                ## Milestones
                1. A full set of monkey bars crossed with straight arms and a hip swing.
                2. Rung skipping practised on bars with regular spacing.
                3. A set of bars of different heights crossed without stopping.
                4. A full crossing completed after a minute of hard effort.

                ## Notes
                Film yourself from the side. Bent elbows and a still body are the two habits to fix first.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A full set of monkey bars crossed with a swinging technique, unbroken, immediately after a minute of burpees."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Film one monkey bar crossing from the side"
                - "Practise hip swings on a single bar with straight arms"
                - "Cross the bars skipping every other rung where spacing allows"
                - "Attempt a full crossing straight after a minute of burpees"
            - name: Rope climb with a foot lock
              description: |-
                ## Purpose
                Climbing a race rope on arms alone fails for most people once the rope is wet and muddy. A J-hook or S-wrap foot lock lets the legs do most of the work, so the climb costs a fraction of the grip and the descent stays controlled.

                ## Milestones
                1. One foot lock chosen and practised on a low rope until the rope holds your weight.
                2. Three climbs to the top completed with controlled descents.
                3. A climb completed with wet or muddy hands.
                4. A climb completed after a hard run, as it would be in a race.

                ## Notes
                Practise the descent as carefully as the climb. Sliding down fast causes rope burns, and dropping from height injures ankles.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three rope climbs to the top with a foot lock and controlled descent, including one with wet hands after a hard run."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Watch a coaching video on the J-hook and S-wrap foot locks"
                - "Practise locking the rope with your feet while standing on the floor"
                - "Climb to the top three times with controlled descents"
                - "Film one rope climb and compare it with last month's @recurring(monthly:20)"
            - name: Getting over 6, 7 and 8 foot walls
              description: |-
                ## Purpose
                Tall walls stop more first-time racers than any other obstacle, and many give up by trying to pull straight up with their arms. Learning to run in, plant a foot high on the wall, catch the top with both hands and swing a heel over turns walls into a technique problem rather than a strength test.

                ## Milestones
                1. The run-in, foot plant and catch practised on a lower wall.
                2. A 6 foot wall cleared unassisted three times in a row.
                3. A 7 foot wall cleared unassisted.
                4. An 8 foot wall cleared using a kick plate or the technique your series allows.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Six, seven and eight foot walls each cleared unassisted at least once, with the six foot wall cleared three times in a row."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find a venue with walls of different heights"
                - "Practise the run-in and foot plant on the lowest wall"
                - "Clear a 6 foot wall three times in a row"
                - "Attempt the 7 and 8 foot walls and note what stopped you"
            - name: Spear throw technique and practice
              description: |-
                ## Purpose
                The spear throw is a common failed obstacle in Spartan races and costs 30 burpees, yet it is pure technique that most racers never practise. Learning a consistent grip, stance and release, and throwing regularly at a hay bale target, turns it into one of the most reliable obstacles on course.

                ## Milestones
                1. A practice spear and safe target set up, or a venue with a spear throw found.
                2. A grip point, stance and release written down after testing.
                3. Fifty practice throws logged with hit rate.
                4. A hit rate of seven in ten reached at race distance.

                ## Notes
                Throw only where nobody can walk into the line of fire, and check the rope or tether every time.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A logged hit rate of at least seven in ten throws at race distance over a session of twenty throws."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find a venue with a spear throw or build a safe practice target"
                - "Test where to hold the spear by marking its balance point"
                - "Throw twenty spears and record your hit rate @recurring(monthly:16)"
                - "Write down the stance and release that gave the best hits"
            - name: Rings, ropes and multi-rig transitions
              description: |-
                ## Purpose
                Multi-rigs mix rings, short ropes, balls and bars, and the hard part is the moment of letting go of one grip to catch the next. Practising each hold type and the transitions between them, with swinging rather than reaching, gets you through rigs that change from race to race.

                ## Milestones
                1. Hangs of 30 seconds achieved on rings, ropes and a ball grip.
                2. Transitions between each pair of grip types practised.
                3. A rig of at least six mixed holds crossed unbroken.
                4. A bell or finish zone reached on a rig after a hard effort.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A mixed rig of six or more holds crossed unbroken to the finish zone after a hard effort."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Hang for 30 seconds on each grip type your venue offers"
                - "Practise the swing and release between rings and ropes"
                - "Cross a rig of six mixed holds and log where you dropped"
                - "Attempt the full rig after a hard minute on the rower"
            - name: Atlas carry and hoist technique
              description: |-
                ## Purpose
                Stone carries and rope hoists look like strength tests but are mostly about body position: a poor lift on a stone can tweak your back, and hoisting with the arms alone burns out grip. Learning to lift a stone from a squat to the chest and to hoist with your hips and body weight saves energy and protects your back.

                ## Milestones
                1. A stone or heavy ball lift practised from the floor to the chest with a flat back.
                2. A hoist technique of leaning back and walking the rope hand over hand practised.
                3. The stone carried the race distance and set down under control.
                4. A hoist completed at race weight without letting the rope slip.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A race-weight stone carry and a race-weight hoist each completed with controlled technique and logged."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Practise lifting a heavy ball from a squat to your chest"
                - "Carry the ball the race distance and set it down under control"
                - "Rig a rope over a beam and practise hoisting with your body weight"
                - "Log carry and hoist weights at the end of each practice"
            - name: Crawling under wire and through mud
              description: |-
                ## Purpose
                Barbed wire crawls can run for 50 metres or more on rocky or muddy ground, and the wrong method shreds elbows and knees or burns the legs before the next climb. Practising rolling, bear crawling and low commando crawls lets you choose the right one for the slope and surface on the day.

                ## Milestones
                1. Rolling, bear crawling and commando crawling each practised for 20 metres.
                2. The fastest method on flat grass and on a slope timed.
                3. A 50 metre crawl completed with elbow and knee protection worked out.
                4. A crawl followed straight away by a run without losing pace.

                ## Notes
                Rolling is often fastest on even ground but leaves some people dizzy. Test it before the race, not during.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A 50 metre crawl completed with your chosen method, timed and followed by a 400 metre run."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Try rolling, bear crawling and commando crawling for 20 metres each"
                - "Time each method on flat grass and on a slope"
                - "Complete a 50 metre crawl and then run 400 metres straight away"
            - name: Cold water and mud immersion readiness
              description: |-
                ## Purpose
                Ice baths, chest-deep muddy pits and dunk walls are standard on some courses, and cold water shock makes people gasp, panic or freeze for the first minute. Knowing how cold shock works, rehearsing calm breathing and checking any health questions with your clinician means you go in with a plan rather than a surprise.

                ## Milestones
                1. The water obstacles on your course listed from the event information.
                2. Cold shock and its first minute understood from a reliable source.
                3. A slow breathing routine rehearsed for entering cold water.
                4. Any heart or breathing questions about cold immersion taken to your clinician.

                ## Notes
                Cold shock is a serious risk for people with heart conditions. If you have any doubt, ask your clinician and skip the obstacle.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A written plan for each water obstacle on your course, including breathing routine and any clinician advice."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the water and ice obstacles on your race course"
                - "Read a water safety organisation's guidance on cold water shock"
                - "Rehearse a slow breathing routine during cold showers"
                - "Ask your clinician about cold immersion if you have a heart or lung condition"
            - name: Balance beams and the Tyrolean traverse
              description: |-
                ## Purpose
                Balance obstacles look easy and end in burpees surprisingly often, because racers arrive with heavy legs and rush. Practising narrow beams and a rope traverse, where you hang under or lie on a rope and pull yourself along, makes both calm and repeatable.

                ## Milestones
                1. A narrow beam walked unbroken at walking pace and at speed.
                2. The beam walked straight after a hard effort.
                3. A rope traverse method chosen and practised over 10 metres.
                4. Both obstacles passed in a mini race simulation.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A narrow beam walked unbroken after hard effort and a 10 metre rope traverse completed, both in one session."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Walk a narrow beam or kerb at walking pace with eyes forward"
                - "Walk the beam again straight after a minute of burpees"
                - "Practise hanging and lying traverse methods on a 10 metre rope"
            - name: Hand care for calluses and skin tears
              description: |-
                ## Purpose
                Rough bars, wet ropes and rigs tear thick calluses open, and a torn palm can stop grip training for a week or more. A simple routine of filing calluses down, moisturising and covering cuts keeps your hands training through a build and lowers the infection risk from muddy water.

                ## Milestones
                1. A pumice or callus file and hand balm kept in the training bag.
                2. Calluses filed flat once a week.
                3. A small first aid kit for tears packed: tape, dressings and antiseptic.
                4. No training days lost to torn hands across a twelve-week block.

                ## Notes
                Cover open cuts before muddy races and wash hands and wounds afterwards. See a clinician if a wound becomes red, hot or swollen.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve weeks of grip training completed with weekly callus care and no sessions lost to torn hands."
                cadence: rolling
              tasks:
                - "Buy a callus file and hand balm for your training bag"
                - "Pack tape, dressings and antiseptic for torn palms"
                - "File calluses flat and moisturise your hands @recurring(weekly:sun)"
            - name: Obstacle failure audit after each race
              description: |-
                ## Purpose
                A race shows exactly which obstacles fail under real fatigue, but the memory fades within days. Writing down every obstacle you failed, why, and what it cost in time or burpees, then turning each into a specific fix, gives the next block a precise target list.

                ## Milestones
                1. Every failed or slow obstacle listed within 48 hours of the race.
                2. A cause given for each: grip, strength, technique or fatigue.
                3. Time or penalties lost estimated per obstacle.
                4. A fix for each failure added to next block's training template.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written audit of every failed obstacle from the last race, each with a cause and a training fix in the next block."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every failed or slow obstacle within two days of the race"
                - "Mark each one as grip, strength, technique or fatigue"
                - "Ask the agent to turn the audit into three training fixes for the next block"
                - "Add each fix to the training week template"
            - name: Gloves or bare hands on the rig
              description: |-
                ## Purpose
                Some racers swear by thin grip gloves for cold, muddy rigs while others find gloves slide on wet bars and add weight once soaked. Testing the same rig with and without gloves, wet and dry, settles the question with your own pass rates instead of forum opinions.

                ## Milestones
                1. One or two pairs of thin grip gloves borrowed or bought.
                2. The same rig attempted gloved and bare, with dry and wet hands.
                3. Pass rates and hang times compared in the log.
                4. A decision recorded, including whether to carry gloves on cold race days.

                ## Notes
                Start from the **Purchase decision** template if you end up buying.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded glove decision based on logged pass rates on the same rig, gloved and bare, wet and dry."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Borrow or buy one pair of thin grip gloves"
                - "Attempt the same rig gloved and bare with dry hands"
                - "Repeat both attempts with soaked hands"
                - "Record your glove decision for warm and cold race days"
            - name: Coach, online plan or ninja gym classes
              description: |-
                ## Purpose
                Paid help for obstacle racing usually comes as a specialist coach, an off-the-shelf online plan or group classes at an obstacle gym, and each suits a different budget and weakness. Comparing them against your baseline results means paying for help where you actually need it.

                ## Milestones
                1. One option of each type found with its price and what it includes.
                2. Each option scored against your weakest area from the baseline.
                3. A trial or sample session taken where available.
                4. One option chosen, or a decision to self-coach recorded with reasons.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded choice of coach, plan, classes or self-coaching, scored against your weakest baseline area."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find one specialist coach, one online plan and one obstacle gym class"
                - "Note the monthly price and what each includes"
                - "Book a trial session where one is offered"
                - "Write down your choice and why it fits your weakest area"
            - name: Ranking engine, grip and technique as weak links
              description: |-
                ## Purpose
                With four or five sessions a week, adding work in one place means taking it from another. Ranking running engine, grip endurance and obstacle technique from the baseline and last race tells you where the next twelve weeks of extra sessions go.

                ## Milestones
                1. Baseline results and the latest race audit put side by side.
                2. Engine, grip and technique ranked from weakest to strongest.
                3. One weekly session moved towards the weakest area.
                4. The ranking re-checked at the next quarterly retest.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written ranking of engine, grip and technique with one weekly session reassigned to the weakest area."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Put your baseline numbers beside your last race audit"
                - "Rank engine, grip and technique from weakest to strongest"
                - "Swap one weekly session towards the weakest area"
            - name: Hydration pack or aid stations only
              description: |-
                ## Purpose
                Short obstacle races have aid stations every few kilometres, but longer ones can take three to six hours on hilly ground with gaps between them. Deciding before the race whether to carry a hydration pack, and testing it through crawls and over walls, avoids being either dehydrated or snagged on barbed wire.

                ## Milestones
                1. Aid station positions and the expected race duration found.
                2. Whether the event requires or bans carried water confirmed.
                3. A pack tested over walls, crawls and a rope if you plan to carry one.
                4. A decision recorded with what you will carry and where you will refill.

                ## Notes
                Fuelling detail for long races belongs with a specialist plan; this decision is about what you physically carry on an obstacle course.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded carry decision for your race, with any pack tested over walls and crawls in training."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the aid station positions on your race map"
                - "Estimate your race duration from the distance and elevation"
                - "Test a hydration pack over walls and under a crawl net"
                - "Write down what you will carry and where you will refill"
            - name: Twelve-week build to your first obstacle race
              description: |-
                ## Purpose
                Twelve weeks is enough for most reasonably fit people to go from a baseline test to a confident first 5 to 10 km obstacle race. A plan of three four-week blocks, building run volume, grip and obstacle skill with an easier week before race week, means arriving prepared rather than hoping.

                ## Milestones
                1. Twelve weeks counted back from race day with block dates set.
                2. Each four-week block given a focus: base, obstacle skill, then race specific.
                3. Every planned session completed or consciously moved.
                4. A full mini simulation completed three weeks before the race.
                5. An easier final week planned with two short sessions.

                ## Notes
                Start from the **Training program** template.
              priority: high
              deadlineOffsetDays: 84
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Twelve weeks of planned sessions logged with at least 85 percent completed, ending in a finished race."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Count back twelve weeks from race day and mark the block dates"
                - "Give each four-week block its focus and key sessions"
                - "Schedule a full mini simulation three weeks before race day"
                - "Plan an easier race week with two short sessions"
            - name: Race week kit and logistics checklist
              description: |-
                ## Purpose
                Obstacle races need more than a running race: a signed waiver, photo ID, a change of clothes, bin bags for muddy kit, a towel and often a bag drop fee. A checklist packed two days before stops the classic race morning scramble for a missing waiver in a car park.

                ## Milestones
                1. The event's race week email read for start times, parking and bag drop.
                2. Waiver signed and entry confirmation and ID packed.
                3. A race bag packed with race kit, dry clothes, towel and bin bags.
                4. Travel time, parking and wave start time written on one page.

                ## Notes
                Start from the **Operational checklist** template. Pack a large bin bag to stand on while changing and a second one for wet kit.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: artifact
                success_criteria: "A completed race week checklist, with the bag packed two days before the race and the waiver signed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read the race week email and note start time, parking and bag drop"
                - "Sign the waiver and print or save the entry confirmation"
                - "Pack the race bag with kit, dry clothes, towel and bin bags"
                - "Write travel time, parking and wave time on one page"
            - name: Race morning warm-up and wave start plan
              description: |-
                ## Purpose
                Waves start every 15 minutes, festival areas are busy and the first obstacle often comes within a few hundred metres. A written plan for arrival time, bag drop, a 15 minute warm-up and where to stand in the start pen avoids a cold, rushed start or a queue at the first wall.

                ## Milestones
                1. Arrival time worked back from wave start, with time for parking and bag drop.
                2. A 15 minute warm-up of easy running, hangs and dynamic drills written.
                3. A start pen position chosen to match your target pace.
                4. The plan rehearsed before a training simulation.
              priority: medium
              frontmatter:
                mode: event
                output_kind: artifact
                success_criteria: "A written race morning plan with arrival time, warm-up and start position, rehearsed once in training."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Work back from your wave time to an arrival time"
                - "Write a 15 minute warm-up of easy running, hangs and drills"
                - "Decide where to stand in the start pen for your target pace"
                - "Rehearse the warm-up before your next mini simulation"
            - name: Travelling to an away obstacle race weekend
              description: |-
                ## Purpose
                Many obstacle races are held at rural estates or ski resorts far from home, with early waves and few places to shower afterwards. Planning travel, a night nearby and the drive home in wet, muddy conditions avoids an exhausting day that starts at 4 a.m.

                ## Milestones
                1. Accommodation booked within an hour of the venue.
                2. Travel there and back planned around wave time and parking rules.
                3. A post-race change and wash plan made, including spare water if there are no showers.
                4. A car protection plan for muddy kit and seats packed.

                ## Notes
                Start from the **Trip** template.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Accommodation, travel and a post-race wash plan are booked and written down at least two weeks before the race."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Book accommodation within an hour of the race venue"
                - "Plan the drive or train around your wave time and parking rules"
                - "Pack a five-litre water container to rinse off if showers are limited"
                - "Pack seat covers or bin bags to protect the car"
            - name: Recovery week and debrief after a race
              description: |-
                ## Purpose
                Obstacle races leave cuts, bruises, sore forearms and sometimes stomach bugs from muddy water, and jumping straight back into hard training invites injury. A planned easy week, a check of cuts and how you feel, and a written debrief while it is fresh set up the next block properly.

                ## Milestones
                1. Cuts and grazes cleaned and checked over the first three days.
                2. An easy week of walking, light runs and mobility completed.
                3. A debrief written covering time, fails, pacing and kit.
                4. Next race or block chosen and noted.

                ## Notes
                Fever, a stomach illness or flu-like symptoms in the weeks after a muddy race are worth mentioning to a clinician, along with the fact you swam in muddy water.
              priority: medium
              frontmatter:
                mode: event
                output_kind: artifact
                success_criteria: "An easy recovery week completed and a written race debrief saved within seven days of the race."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Clean and check every cut and graze the evening after the race"
                - "Plan an easy week of walks, short runs and mobility"
                - "Write a debrief on time, fails, pacing and kit"
                - "Pick the next race or training block and note it here"
            - name: Team obstacle race with friends or colleagues
              description: |-
                ## Purpose
                Untimed team events built around helping each other over walls and up ramps are often how people first try obstacle racing, and they work best when one person organises. Agreeing the event, wave, fundraising and a couple of group training sessions means the whole team finishes together.

                ## Milestones
                1. A team of four or more signed up to the same wave.
                2. Two group sessions held to practise boosting each other over walls.
                3. Kit, travel and meeting point shared with everyone.
                4. Any charity fundraising target set and page shared, if the team is raising money.
              priority: low
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "A team of at least four finishes the same wave together after two group practice sessions."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Message possible teammates with the event, date and wave options"
                - "Book two group sessions to practise team wall boosts"
                - "Share one page with kit, travel and meeting point"
                - "Set up a fundraising page if the team is raising money for charity"
            - name: Road runner adding grip and obstacles
              description: |-
                ## Purpose
                Strong road runners often reach the rig with plenty of engine and nothing left in their forearms. Swapping one run a week for grip and pulling work, and spending eight weeks learning walls and bars, closes the gap without losing much running fitness.

                ## Milestones
                1. One weekly run replaced with a grip and pulling session.
                2. A first strict pull-up or a 60 second dead hang reached.
                3. Walls and monkey bars passed in a mini simulation.
                4. Running time on the trail loop held within 5 percent of baseline.
              priority: medium
              deadlineOffsetDays: 56
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "After eight weeks, a 60 second dead hang or a strict pull-up achieved with trail loop time within 5 percent of baseline."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Choose which weekly run to swap for grip and pulling"
                - "Book your first session at an obstacle venue"
                - "Test your dead hang and pull-ups at the start and end of eight weeks"
            - name: Gym lifter learning to run off-road
              description: |-
                ## Purpose
                Lifters and CrossFitters tend to fly over walls and carries and then fade on the climbs between them. Building easy off-road running from three to five hours a week over eight weeks, while keeping heavy lifting to two sessions, gives the engine the race actually demands.

                ## Milestones
                1. Current weekly running time recorded honestly.
                2. Off-road running built by no more than about 10 percent a week.
                3. Heavy lifting held at two sessions a week during the build.
                4. A continuous hilly 10 km run completed at easy effort.

                ## Notes
                Most of the extra running should be at an easy, conversational pace. Heavy legs from squats make hard runs feel worse than they are.
              priority: medium
              deadlineOffsetDays: 56
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A continuous hilly 10 km off-road run completed at easy effort after eight weeks of logged progression."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Record how much running you do in a typical week now"
                - "Plan eight weeks of off-road running rising by about 10 percent a week"
                - "Cut heavy lifting to two sessions during the running build"
                - "Run a hilly 10 km at easy effort in week eight"
            - name: Obstacle training with only a bar and a park
              description: |-
                ## Purpose
                Not everyone lives near a ninja gym, and many racers train with nothing more than a doorframe bar and a local park. A plan built around towel hangs, a tree branch or playground bars, homemade sandbags and hill sprints covers most obstacles without a membership.

                ## Milestones
                1. A doorframe or wall-mounted pull-up bar fitted securely.
                2. A sandbag or bucket built from cheap materials.
                3. A park route found with hills, bars or a sturdy branch.
                4. Four weeks of home and park sessions logged.

                ## Notes
                Check that any branch or playground bar takes your weight before hanging, and respect any rules on adult use of play equipment.
              priority: low
              deadlineOffsetDays: 42
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A home bar, a homemade carry load and a park route are in use, with four weeks of sessions logged."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Fit a pull-up bar securely in a doorframe or on a wall"
                - "Make a sandbag from contractor bags and a holdall"
                - "Find a park route with hills and a bar or sturdy branch"
                - "Log four weeks of home and park sessions"
            - name: Obstacle racing in an older age group
              description: |-
                ## Purpose
                Age group waves for racers over 40, 50 and beyond are some of the most competitive in the sport, but tendons, recovery and grip change with age. Adjusting the week for more recovery between grip sessions, steady strength work and a longer build lets older racers keep improving instead of picking up elbow and shoulder niggles.

                ## Milestones
                1. Your series' age group categories and wave times checked.
                2. Grip and pulling sessions spaced with at least two days between them.
                3. Two full-body strength sessions a week kept through the build.
                4. A twelve-week block completed without missing a week to a niggle.

                ## Notes
                Elbow and shoulder tendon niggles are common in older racers. Get persistent pain checked rather than training through it.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A twelve-week block completed with grip sessions spaced two days apart and no week lost to injury."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Check the age group categories and wave times for your series"
                - "Space your grip and pulling sessions at least two days apart"
                - "Keep two full-body strength sessions in every week of the block"
            - name: Coming back after a failed or missed race
              description: |-
                ## Purpose
                A DNF, a missed race through illness or a season off often leaves people unsure where to restart. A short return plan that retests the basics, rebuilds grip slowly and picks a realistic next race gets you back into a rhythm without trying to make up lost time in one month.

                ## Milestones
                1. What went wrong written down honestly, without blame.
                2. The four baseline tests repeated to find the new starting point.
                3. Four weeks of reduced training completed before full sessions resume.
                4. A next race chosen at least twelve weeks away.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written return plan with new baseline numbers, four reduced weeks completed and a next race entered twelve weeks out."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write down what happened in a few honest lines"
                - "Repeat the baseline tests to set a new starting point"
                - "Plan four weeks at about two thirds of your old training"
                - "Choose a next race at least twelve weeks away"
            - name: Moving up to competitive or age group waves
              description: |-
                ## Purpose
                Competitive waves usually require every obstacle to be completed without help or retries, often enforced by removing a wristband, and they bring prize money, rankings or qualification. Moving up once you can pass every obstacle reliably makes the step a test of racing rather than a lesson in losing your band.

                ## Milestones
                1. The competitive wave rules for your series read and summarised.
                2. Every standard obstacle passed in training at least three times in a row.
                3. A full race completed in the open wave without a failed obstacle.
                4. A competitive or age group wave entered.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An open wave race completed without a failed obstacle, followed by an entry into a competitive or age group wave."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Summarise the competitive wave rules for your series"
                - "Mark any obstacle you cannot yet pass three times in a row"
                - "Race the open wave aiming for zero failed obstacles"
                - "Enter a competitive or age group wave once you have done so"
            - name: Sprint, Super and Beast distances in one season
              description: |-
                ## Purpose
                Completing three distances in a calendar year, typically around 5 km, 10 km and 21 km, is a popular goal that forces a racer to build both speed and endurance. Ordering the races sensibly, with the longest one last or with enough recovery around it, makes the season a progression rather than a scramble.

                ## Milestones
                1. Three races of different distances chosen in one calendar year.
                2. At least six weeks between the second race and the longest one.
                3. Training blocks planned to peak for the longest race.
                4. All three races finished and logged.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Three races of three different distances completed within one calendar year, each logged with time and fails."
                cadence: cyclic
              tasks:
                - "Pick three races of different distances in the same calendar year"
                - "Check there are six weeks or more before the longest race"
                - "Plan next year's three-distance season after the last race @recurring(yearly)"
            - name: Ultra-distance and 24-hour obstacle races
              description: |-
                ## Purpose
                Ultra obstacle races run to 50 km with 60 or more obstacles, and 24-hour events loop a course through the night in cold water and mud. They need longer runs, night obstacle practice, a pit area plan and serious cold management, so most racers spend a full year building towards one.

                ## Milestones
                1. One ultra or 24-hour event chosen with its rules, cut-offs and kit list read.
                2. Back-to-back long training days completed with obstacles in them.
                3. A night session completed with a headtorch on a rig.
                4. A pit or drop bag plan written with changes of clothes and cold kit.

                ## Notes
                Hypothermia is the main risk at 24-hour events with water obstacles. Read the event's mandatory kit list and cold weather guidance carefully.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An ultra-distance or 24-hour obstacle race started with a written pit plan and mandatory kit checked, and the finish or distance logged."
                cadence: phased
                effort_hours_estimate: "150"
              tasks:
                - "Read the rules, cut-offs and mandatory kit list for the event"
                - "Plan two back-to-back long days with obstacles each month"
                - "Do a night rig session with a headtorch"
                - "Write a pit plan with dry clothes, cold kit and food"
            - name: Obstacle racing championship qualification
              description: |-
                ## Purpose
                National and world obstacle racing championships qualify racers through series results, age group placings or qualifying events, and the rules change each season. Knowing exactly what earns a place, and planning which races to enter, turns a vague hope into a targeted season.

                ## Milestones
                1. The current qualification rules for your target championship read.
                2. Qualifying races and the placings needed listed.
                3. Your recent results compared with last season's qualifying times or places.
                4. A qualification attempt race entered.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Qualification rules summarised, results compared with last season's cut-offs and one qualifying race entered."
                cadence: cyclic
              tasks:
                - "Read this season's qualification rules for your target championship"
                - "List the qualifying races and the placings they require"
                - "Compare your results with last season's qualifying positions"
                - "Check for changes to qualification rules each season @recurring(yearly)"
            - name: Short-course and stadium obstacle racing
              description: |-
                ## Purpose
                Short-course formats pack 20 or more obstacles into 3 to 5 km, sometimes in stadiums with stairs and seat rows, and reward obstacle speed over endurance. Training for them shifts work towards fast transitions, flawless technique and repeated short efforts.

                ## Milestones
                1. A short-course or stadium race chosen and its obstacle list studied.
                2. Obstacle transitions timed and practised at race pace.
                3. Repeated stair or hill efforts added for six weeks.
                4. The race completed and obstacle times compared with your long-course races.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A short-course or stadium race completed after six weeks of transition and stair training, with obstacle times logged."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Find a short-course or stadium race and study its obstacle list"
                - "Time your transitions between obstacles at race pace"
                - "Add a weekly stair or hill repeats session for six weeks"
                - "Compare your obstacle times with your last long-course race"
---

# Obstacle Course Racing

This area is for runners, lifters and gym regulars getting ready for Spartan, Tough Mudder and similar obstacle races, from a first 5 km mud run to age group and ultra-distance events. It starts with the foundations (choosing the race, learning the penalty rules, health questions, a baseline and the right shoes), moves through the weekly machinery of grip, pulling, off-road running, burpees and carries, then the obstacle skills one by one, the decisions that sharpen training, race weeks and team events, versions for different starting points, and finally competitive and long-format racing.

What repeats is the weekly rhythm of grip and pulling sessions, a hilly trail run, rig practice, burpee and carry work and a Sunday plan for the week, plus a monthly mini race simulation and block review, quarterly retests and kit inspections, and yearly checks on waivers and qualification rules. The Purchase decision, Training program, Metrics log, Operational checklist and Trip templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
