---
id: fitness-sport.5k-to-half-marathon-running
name: 5K to Half Marathon Running
description: "A safe start, shoes that fit, a walk-run route to your first 5K, then steady steps through 10K to a half marathon, with sensible weekly distance, honest pacing and race days that go to plan."
category: personal
version: 1.0.0
tags: [fitness-sport, 5k-to-half-marathon-running, everyone, athlete, couch-to-5k, 10k, half-marathon, pacing]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - metrics-log
    - training-program
    - habit-tracker
  pillars:
    - name: Fitness & Sport
      emoji: "🏋️"
      description: "Training, play and competition: building strength, endurance and skill in a sport or a gym, structuring blocks of work around events, recovering properly, and keeping the sessions honest with a log rather than a feeling."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: 5K to Half Marathon Running
          description: "Progressing from your first 5K through 10K races to a half marathon, with sensible mileage increases and pacing for newer runners."
          projects:
            - name: Pre-running health readiness check
              description: |-
                ## Purpose
                Before the first run, a short set of readiness questions catches the few people who should talk to a doctor first: anyone with a heart condition, chest pain on exertion, dizzy spells, or a joint problem that worsens with impact. For everyone else it records a clean starting point and removes the nagging worry that running might not be safe for you.

                ## Milestones
                1. A standard pre-exercise readiness questionnaire completed honestly.
                2. Any yes answer discussed with your doctor and their advice written down.
                3. Current medicines and conditions that affect exercise listed in the front of your running log.
                4. A clear go-ahead recorded, with any limits your doctor set.

                ## Notes
                This is a screening step, not a medical assessment. If you get chest pain, unusual breathlessness or feel faint on a run, stop and seek medical help rather than pushing on.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A completed readiness questionnaire is stored in your log, with a doctor's go-ahead recorded for any yes answer."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Answer a standard pre-exercise readiness questionnaire tonight"
                - "Book a doctor's appointment if any answer was yes"
                - "List conditions and medicines that affect exercise in the log"
                - "Repeat the readiness questions before each new training year @recurring(yearly)"
            - name: Running shoe fitting at a specialist shop
              description: |-
                ## Purpose
                Old gym trainers or fashion shoes are the commonest kit mistake new runners make, and they often show up as sore shins or blisters by week three. A fitting at a running shop, where you jog in several pairs and choose on comfort rather than looks or price tags, gets you a shoe that suits your foot and the surfaces you will run on.

                ## Milestones
                1. A budget set and the surfaces you will mostly run on noted: pavement, park or trail.
                2. At least three pairs tried with a short jog in each, wearing your running socks.
                3. One pair chosen on comfort, with a thumb's width of room at the toe.
                4. The model, size and purchase date recorded in your running log.

                ## Notes
                Start from the **Purchase decision** template. Comfort is the best guide most runners have; you do not need a gait analysis to choose well, and the most expensive shoe is rarely the right first one.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One pair of running shoes chosen after trying at least three, with model, size and date recorded in the log."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down a shoe budget and the surfaces you will run on"
                - "Find a running shop near you that lets you jog in the shoes"
                - "Try at least three pairs wearing your own running socks"
                - "Record the chosen model, size and date in the running log"
            - name: Basic running kit for every season
              description: |-
                ## Purpose
                Cotton T-shirts soak up sweat and chafe, and the wrong socks cause more blisters than the wrong shoes. A small set of technical kit, bought once and added to as the seasons change, means weather is never the reason a run gets skipped.

                ## Milestones
                1. Two pairs of running socks and two wicking tops in the drawer.
                2. Supportive underwear or a properly fitted sports bra sorted.
                3. A light waterproof or windproof layer and something reflective ready for dark evenings.
                4. A cold-weather set of hat, gloves and long tights added before winter.

                ## Notes
                Buy the basics first and add the rest when a real run shows you need it. Anti-chafe balm costs little and saves a lot of discomfort on longer runs.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A complete set of socks, wicking tops, support, a light shell and reflective kit is in one drawer, ready to grab."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Sort your drawer and set aside any cotton tops for other uses"
                - "Buy two pairs of proper running socks"
                - "Get a sports bra or supportive shorts fitted if needed"
                - "Add a reflective layer or clip-on light before the evenings darken"
            - name: Walk-run starting point test
              description: |-
                ## Purpose
                Most beginner programmes assume you are starting from zero, but some people can already jog for five minutes and others cannot manage one. A simple test walk-run on a flat route tells you which week of a programme to start in, so the first fortnight is neither crushing nor boring.

                ## Milestones
                1. A flat, safe route of about two kilometres chosen.
                2. A five-minute brisk walk warm-up followed by gentle jogging until you need to walk.
                3. The longest continuous jog timed and noted, with how breathless you felt.
                4. A starting week in your chosen programme picked from that result.

                ## Notes
                Run slowly enough to say short sentences. If you can only jog for 30 seconds, that is a perfectly normal starting point and week one is right for you.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Your longest continuous jog is recorded in minutes, and a starting week in your programme is written down beside it."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Pick a flat route of about two kilometres near home"
                - "Walk briskly for five minutes, then jog gently until you need to stop"
                - "Write down the longest jog in minutes and how it felt"
                - "Choose the programme week that matches your result"
            - name: Choosing a beginner 5K programme
              description: |-
                ## Purpose
                Free nine-week walk-run programmes have taken millions of people from the sofa to 5K, but they differ in pace of progression, whether they use audio coaching, and how they handle repeat weeks. Picking one on purpose, instead of downloading the first app you see, means the plan fits your week and you know what to do when a week goes badly.

                ## Milestones
                1. Two or three beginner programmes compared on weeks, sessions per week and session length.
                2. One programme chosen, with the reason written down.
                3. The app installed or the plan printed and stuck somewhere you will see it.
                4. A rule agreed with yourself: repeat a week rather than skip ahead when it feels too hard.

                ## Notes
                Three sessions a week with a rest day between each is the standard shape. Repeating a week is part of the plan, not a failure.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One beginner 5K programme chosen and installed or printed, with the repeat-a-week rule written in the log."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Compare two or three free walk-run 5K programmes side by side"
                - "Write down which programme you chose and why"
                - "Install the app or print the nine-week plan"
                - "Note your repeat-a-week rule on the first page of the log"
            - name: Three fixed run slots in the week
              description: |-
                ## Purpose
                New runners who say they will run when they have time usually find they never do. Choosing three slots, with a rest day between each, and putting them in the calendar like a meeting turns running from an intention into an appointment the household can plan around.

                ## Milestones
                1. Three non-consecutive slots chosen that work on a normal week, such as Tuesday, Thursday and Saturday.
                2. The slots added to your calendar as repeating events.
                3. Anyone you live with told which times are yours.
                4. A back-up slot named for weeks when one gets knocked out.

                ## Notes
                Start from the **Habit tracker** template if ticking off sessions keeps you going. Early mornings are the slot least likely to be stolen by the rest of the day.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Three repeating run slots and one back-up slot appear in your calendar, with no two runs on consecutive days."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Look at a typical week and pick three non-consecutive run times"
                - "Add the three slots to your calendar as repeating events"
                - "Tell the people you live with which times are your runs"
                - "Choose one back-up slot for weeks that go wrong"
            - name: Measured local routes of 2, 3 and 5 km
              description: |-
                ## Purpose
                Knowing exactly how far a loop is takes the guesswork out of every session and lets you run without staring at a watch. Three measured routes from your front door, mostly flat, lit and with a place to stop, cover everything from week one to your first 5K.

                ## Milestones
                1. Loops of roughly 2, 3 and 5 kilometres mapped with an online route planner or app.
                2. Each route checked in daylight for traffic, lighting and uneven ground.
                3. A toilet, water point or safe place to stop noted on each.
                4. The three routes saved and named in your phone or log.

                ## Notes
                Parks with a measured perimeter are ideal for beginners. Tell someone your usual routes if you run alone.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three saved routes of about 2, 3 and 5 km, each walked or run once and checked for safety."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Map a 2 km loop from your front door with a route planner"
                - "Add a 3 km and a 5 km loop that share the same start"
                - "Walk or jog each route once in daylight to check it"
                - "Try one new route or variation @recurring(monthly:14)"
            - name: Simple running log for distance, time and effort
              description: |-
                ## Purpose
                Memory flatters and forgets: three weeks in, nobody remembers whether Thursday's run felt easier than the one before. A plain log with date, distance, time, effort out of ten and a one-line note is what later shows you that you are improving, and what spots the pattern before a sore knee becomes a lay-off.

                ## Milestones
                1. A log set up in a notebook, spreadsheet or app with five columns: date, distance, time, effort and note.
                2. The first week of runs recorded within a day of each.
                3. A column added for which shoes you wore.
                4. One month of entries complete with no gaps.

                ## Notes
                Start from the **Metrics log** template. Effort out of ten matters more than pace for new runners, because pace changes with heat, hills and sleep.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A running log holds a full month of entries with date, distance, time, effort score, shoes and a note for each run."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Set up a log with date, distance, time, effort and note columns"
                - "Add a shoes column so mileage per pair adds up"
                - "Record each run within a day of doing it"
                - "Check after four weeks that no runs are missing"
            - name: Easy pace by the talk test
              description: |-
                ## Purpose
                Most new runners go too fast on every run, finish gasping, and decide running is not for them. Learning what genuinely easy feels like, slow enough to speak in full sentences, is the single skill that makes the first 5K achievable and the later half marathon possible, because the bulk of every plan is run at that effort.

                ## Milestones
                1. Three runs completed where you could say a full sentence without gasping.
                2. Your easy effort described in your own words in the log, such as breathing through the nose or chatting.
                3. The pace you run at that effort noted, with no attempt to make it faster.
                4. A habit of slowing down or walking when the talk test fails.

                ## Notes
                Easy pace for a beginner can be close to brisk walking speed. That is fine: the heart and lungs adapt to effort, not to the number on a watch.
              priority: high
              deadlineOffsetDays: 28
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three logged runs pass the talk test, and a written description of your easy effort sits at the top of the log."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Run your next session slowly enough to recite a sentence aloud"
                - "Describe how easy effort feels in one line in the log"
                - "Note the pace at that effort without trying to improve it"
                - "Walk for a minute whenever you cannot finish a sentence"
            - name: Nine-week walk-run to 5K programme
              description: |-
                ## Purpose
                Running for 30 minutes without stopping is the first real milestone, and a structured walk-run programme gets most people there in about nine weeks. Following it session by session, repeating weeks when needed, builds the tendons and bones as well as the lungs, which is why it works better than simply trying to run further each time.

                ## Milestones
                1. Weeks one to three complete, with every session logged.
                2. The first continuous 20-minute run done, around week five.
                3. Any repeated weeks noted with the reason.
                4. A continuous 30-minute run completed at easy effort.

                ## Notes
                Start from the **Training program** template. A missed week is not a disaster: repeat the last week you finished comfortably and carry on.
              priority: high
              deadlineOffsetDays: 70
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A continuous 30-minute run is recorded in the log, with all programme sessions before it logged."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Load week one of the programme on your phone or print it"
                - "Do this week's walk-run session at easy effort @recurring(weekly:tue,thu,sat)"
                - "Log each session with effort and any aches"
                - "Repeat a week whenever two of its sessions felt too hard"
            - name: Weekly distance check against the ten percent guide
              description: |-
                ## Purpose
                Adding too much distance too quickly is behind most of the overuse injuries that stop new runners between 5K and half marathon. A quick Monday look at last week's total, with next week capped at roughly ten percent more, keeps the build gradual enough for tendons and bones to keep up with your lungs.

                ## Milestones
                1. Last week's total distance worked out from the log.
                2. Next week's target set at no more than about ten percent above it.
                3. The long run kept to no more than about a third of the weekly total.
                4. Four weeks in a row planned this way.

                ## Notes
                The ten percent figure is a rough guide, not a law. At very low distances, adding a single kilometre is fine even if it is more than ten percent.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive weekly totals are logged, each within about ten percent of the week before or lower."
                cadence: rolling
              tasks:
                - "Add up last week's running distance from the log"
                - "Set next week's total and write the runs into the calendar @recurring(weekly:mon)"
                - "Check the long run is no more than a third of the week"
                - "Hold distance flat for a week if anything aches"
            - name: Cutback week every fourth week
              description: |-
                ## Purpose
                Fitness is built during recovery, and runners who add distance every single week tend to stall or break down around week eight. Dropping total distance by about a third every fourth week lets the body absorb the work, and the next week usually feels noticeably easier.

                ## Milestones
                1. Cutback weeks marked in the calendar for the next three months.
                2. Each cutback week run at about two thirds of the previous week's distance.
                3. The long run shortened in cutback weeks, not just the midweek runs.
                4. How the week after a cutback felt noted in the log.

                ## Notes
                Keep the number of runs the same in a cutback week; just make each one shorter. For a full recovery week after a race, see the post-race project.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three cutback weeks are completed at about two thirds of the prior week's distance, each logged with a note."
                cadence: rolling
              tasks:
                - "Mark every fourth week as a cutback week in the calendar"
                - "Plan the cutback week's runs at two thirds of normal distance"
                - "Mark the next cutback week and its target distance @recurring(monthly:24)"
                - "Note how the week after the cutback felt"
            - name: Sunday long run progression
              description: |-
                ## Purpose
                From 10K onwards the long run is the session that matters most, building the endurance that carries you through the final kilometres of a race. Growing it slowly, by about one kilometre every week or two at easy pace, takes most runners from 5 km to 18 km over four to five months.

                ## Milestones
                1. A long run day fixed, with enough time and no plans straight afterwards.
                2. The long run reaching 8 km at easy effort.
                3. The long run reaching 12 km, with water carried or a route past a tap.
                4. The long run reaching 16 to 18 km before half marathon race week.

                ## Notes
                Long runs should feel easy for the first two thirds. If you finish wrecked, the next one should be slower, not longer.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The log shows a long run every week, rising from 5 km to at least 16 km with no jump bigger than 2 km."
                cadence: rolling
              tasks:
                - "Choose the long run day and keep the hour after it free"
                - "Run the long run at conversational pace @recurring(weekly:sun)"
                - "Add one kilometre every week or two, never more than two"
                - "Plan a long route that passes a tap or shop for water"
            - name: Twice-weekly strength routine for runners
              description: |-
                ## Purpose
                Calves, hips and glutes take a pounding on every run, and runners who do two short strength sessions a week cope much better with rising distance. Twenty minutes of calf raises, split squats, glute bridges and single-leg balance, done at home with no equipment, is enough for most people going from 5K to half.

                ## Milestones
                1. A 20-minute routine of five exercises written down with sets and reps.
                2. Two sessions a week done for four weeks.
                3. Single-leg calf raises reaching three sets of 15 on each leg.
                4. Weight added, such as a backpack or dumbbells, once the bodyweight version is easy.

                ## Notes
                Start from the **Habit tracker** template. Strength work on the same day as an easy run, after it, keeps rest days truly restful.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight strength sessions are logged in four weeks, and three sets of 15 single-leg calf raises are done on each leg."
                cadence: rolling
              tasks:
                - "Write a five-exercise routine of calf raises, split squats, bridges, planks and balance"
                - "Do the 20-minute strength routine @recurring(weekly:mon,thu)"
                - "Count your single-leg calf raises each week in the log"
                - "Add load when three sets feel easy on both legs"
            - name: Warm-up drills and post-run cool-down routine
              description: |-
                ## Purpose
                Starting a run cold, straight out of the door at running pace, makes the first ten minutes miserable and raises the chance of a calf strain. A five-minute walk and a few drills before, and a slow walk and light stretch after, are the cheapest habit in running and make every session feel better.

                ## Milestones
                1. A five-minute warm-up written down: brisk walk, leg swings, high knees and heel flicks.
                2. The warm-up done before every run for two weeks.
                3. A five-minute walking cool-down added after every run.
                4. A longer warm-up with strides used before any race or hard session.

                ## Notes
                Long static stretches before running are not needed. Save them for after, if you enjoy them.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive logged runs each began with the five-minute warm-up and ended with a walking cool-down."
                cadence: rolling
              tasks:
                - "Write a five-minute warm-up of walking and four simple drills"
                - "Do the warm-up before your next run and note how it felt"
                - "Add a five-minute walk and light stretch after each run"
                - "Make a longer race warm-up with three or four strides"
            - name: Ache traffic-light rule for new runners
              description: |-
                ## Purpose
                Every new runner feels aches, and the hard part is telling normal soreness from the start of an injury. Agreeing a simple rule in advance, scoring pain from 0 to 10 and deciding what each colour means, stops you from either panicking at every twinge or running through something that needs a professional.

                ## Milestones
                1. A written rule: green for pain of 0 to 2 that eases as you warm up, amber for 3 to 4, red for 5 or more or any limp.
                2. Actions agreed for each colour: carry on, shorten and slow down, or stop and rest.
                3. A physiotherapist or sports clinic near you found in advance.
                4. Any red-light ache that lasts more than a few days taken to a professional.

                ## Notes
                This rule is a way to decide when to get help, not a diagnosis. Sharp pain, swelling, or pain at rest or at night always deserves a professional opinion.
              priority: high
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A written green, amber and red rule sits at the front of the log, with a named physiotherapist or clinic to call."
                cadence: rolling
              tasks:
                - "Write your green, amber and red ache rule in the log"
                - "Score any ache from 0 to 10 the morning after a run"
                - "Find a physiotherapist or sports clinic and save their number"
                - "Book an appointment if a red-light ache lasts more than three days"
            - name: Free weekly timed 5K habit
              description: |-
                ## Purpose
                Free, volunteer-run timed 5K events happen every weekend in parks across many countries, with parkrun the best-known example. Turning up regularly gives you a measured course, a time to track, people who are slower and faster than you, and a low-pressure taste of race conditions long before you pay for an entry.

                ## Milestones
                1. The nearest free weekly timed 5K found and its course checked.
                2. Registration done and your barcode or ID printed or saved.
                3. The first event completed at easy effort, walking where needed.
                4. Six events completed, with times logged to show the trend.

                ## Notes
                Many of these events welcome walkers and have a tail walker at the back, so you will not be last alone. Volunteering once in a while is part of the deal.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six free timed 5K finishes are recorded in the log with times, and you have volunteered at least once."
                cadence: rolling
              tasks:
                - "Find the nearest free weekly timed 5K and read the course notes"
                - "Register and save your barcode on your phone"
                - "Run or walk the Saturday timed 5K @recurring(weekly:sat)"
                - "Sign up to volunteer at one event in the next two months"
            - name: Shoe mileage log and replacement point
              description: |-
                ## Purpose
                Running shoes lose cushioning gradually, so they still look fine long after they stop protecting your legs. Logging distance per pair and replacing them somewhere around 500 to 800 km, depending on the shoe and your weight, means you buy new ones on a plan instead of after a sore week.

                ## Milestones
                1. Each pair's starting distance entered in the log or watch app.
                2. A replacement point between 500 and 800 km chosen for each pair.
                3. A second pair bought and rotated once the first reaches about half its life.
                4. Retired pairs moved to walking or gardening, not running.

                ## Notes
                Most watch and phone apps can track distance per shoe automatically if you tag each run. Buy the replacement before the old pair is fully worn so you can break it in.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every running shoe pair in use has a logged total distance and a written replacement point."
                cadence: rolling
              tasks:
                - "Enter each pair of shoes and its starting distance in the log"
                - "Write a replacement point for each pair between 500 and 800 km"
                - "Update the distance on each pair of shoes @recurring(monthly:19)"
                - "Order the next pair when the current one passes 400 km"
            - name: Monthly running review
              description: |-
                ## Purpose
                A month of runs tells you far more than any single session: whether you are running consistently, whether easy runs are getting easier, and whether an ache keeps returning. Ten minutes at the end of each month, looking at the log rather than at how you feel today, turns a pile of runs into a plan for the next four weeks.

                ## Milestones
                1. The month's total distance, number of runs and missed runs counted.
                2. Easy pace at the same effort compared with the month before.
                3. Any repeated ache or missed-session pattern written down.
                4. One focus chosen for the next month, such as consistency, the long run or strength.

                ## Notes
                Consistency beats any single great run. If you missed more than a quarter of planned runs, fix the schedule before adding distance.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three monthly reviews are written in the log, each with totals, a pattern noted and one focus for the next month."
                cadence: rolling
              tasks:
                - "Review the month's distance, runs and missed sessions @recurring(monthly:28)"
                - "Compare easy pace at the same effort with last month"
                - "Ask the agent to summarise patterns in the month's log notes"
                - "Write one focus for the coming month at the top of the log"
            - name: Relaxed running form and quicker cadence
              description: |-
                ## Purpose
                Overstriding, landing with the foot far in front of the body, is the most common form fault in new runners and puts extra load on knees and shins. Small changes, such as a slightly quicker step rate, upright posture and relaxed shoulders, are easier to learn than a whole new technique and make running feel lighter.

                ## Milestones
                1. A ten-second side-on video of your running filmed on a flat path.
                2. Your current steps per minute counted from the video or your watch.
                3. Easy runs practised with a step rate about five percent quicker.
                4. A second video filmed after six weeks and compared with the first.

                ## Notes
                There is no perfect cadence number for everyone. Small, gradual changes stick; forcing a big change usually just moves the strain somewhere else.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two side-on videos six weeks apart are saved, with step rate recorded for each and a five percent rise visible."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask someone to film ten seconds of you running side-on"
                - "Count your steps per minute from the video or watch"
                - "Run part of each easy run at a slightly quicker step rate"
                - "Film a fresh side-on clip to compare form @recurring(quarterly)"
            - name: Breathing rhythm and side stitch fixes
              description: |-
                ## Purpose
                Feeling out of breath and getting a stitch are the two complaints that make new runners stop, and both usually mean running too fast or eating too close to a run. Learning a relaxed breathing rhythm and two or three stitch fixes gives you a way through rather than a reason to walk home.

                ## Milestones
                1. Easy runs done breathing in a relaxed rhythm, such as three steps in and three out.
                2. Food timing tested, with no large meal in the two hours before a run.
                3. Two stitch fixes tried: slowing down with deep belly breaths, and pressing into the sore side.
                4. Which fix works for you written in the log.

                ## Notes
                Breathing through the mouth is normal when running. If breathlessness comes with wheezing or chest tightness, talk to your doctor.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The log records your breathing rhythm, your pre-run food gap and the stitch fix that works for you."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Count your breathing against your steps on the next easy run"
                - "Leave two hours between a main meal and your next run"
                - "Try belly breathing and slowing down the next time a stitch hits"
                - "Note in the log which stitch fix worked"
            - name: Even pacing across a 5K
              description: |-
                ## Purpose
                Almost every first race goes the same way: a fast first kilometre on adrenaline, then a painful struggle to the finish. Practising even splits, where each kilometre is within about ten seconds of the others, is how most runners take a minute or more off their 5K without getting any fitter.

                ## Milestones
                1. Your watch or app set to show each kilometre's split.
                2. A 5K run where the first kilometre was deliberately the slowest.
                3. Splits from three 5K runs compared, with the gap between fastest and slowest kilometre noted.
                4. A 5K completed with all splits within ten seconds of each other.

                ## Notes
                The first kilometre should feel almost too easy. If it feels right, it is probably too fast.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One logged 5K has all five kilometre splits within ten seconds of each other."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Turn on automatic one-kilometre splits on your watch or app"
                - "Run the first kilometre of your next 5K deliberately slow"
                - "Compare the splits from your last three 5K runs"
                - "Write a target split for each kilometre of your next 5K"
            - name: 5K time trial to set training paces
              description: |-
                ## Purpose
                Once you can run 5K, a recent all-out time is the most useful number you have, because it predicts sensible paces for easy runs, tempo runs, intervals and even a half marathon. Running a time trial on a flat measured course, then putting the result into a reputable pace calculator, replaces guessing with paces built for your current fitness.

                ## Milestones
                1. A flat, measured 5K course or free timed event chosen.
                2. A hard but evenly paced 5K completed after a proper warm-up.
                3. The time entered into a pace calculator and easy, tempo and interval paces written down.
                4. A predicted 10K and half marathon time noted as a guide, not a promise.

                ## Notes
                Predictions for longer races assume you have done the long runs. Treat them as a ceiling until your training catches up.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A 5K time trial result and the training paces calculated from it are written at the top of the log."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Choose a flat measured course or a free timed 5K for the trial"
                - "Warm up for ten minutes and run the 5K hard but evenly"
                - "Put the time into a pace calculator and record your paces"
                - "Repeat the time trial and update your paces @recurring(quarterly)"
            - name: Strides and first interval sessions
              description: |-
                ## Purpose
                Once you can run 30 minutes comfortably, a little faster running makes easy pace feel easier and races feel less of a shock. Starting with strides, short relaxed accelerations of 15 to 20 seconds, and moving on to gentle intervals such as six times two minutes, introduces speed without the soreness of jumping straight into hard track sessions.

                ## Milestones
                1. Four to six strides added after one easy run a week for four weeks.
                2. A first interval session of six times two minutes at 5K effort with walking recoveries.
                3. A second session of five times three minutes completed a few weeks later.
                4. How each session felt and your recovery the next day logged.

                ## Notes
                Keep speed work to one session a week until you are running 10K comfortably. Never do it on the day after your long run.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Four weeks of strides and two interval sessions are logged, with no ache above green the next morning."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Add six relaxed 20-second strides after an easy run @recurring(weekly:wed)"
                - "Plan a session of six times two minutes with walking recoveries"
                - "Log how each interval session felt and your recovery"
                - "Move to five times three minutes after four comfortable weeks"
            - name: Tempo runs at comfortably hard effort
              description: |-
                ## Purpose
                Tempo running, at an effort you could hold for about an hour, is the session that most improves 10K and half marathon times for newer runners. It teaches you what race effort feels like over 15 to 25 minutes, so on race day you can settle into it instead of guessing.

                ## Milestones
                1. Tempo effort described: you can speak in short phrases, not full sentences.
                2. A first tempo of two times eight minutes with a short jog between.
                3. A continuous 20-minute tempo run completed at an even effort.
                4. Tempo pace compared with the pace calculator from your time trial.

                ## Notes
                Tempo should feel controlled. If you are racing it, you are going too hard and will need more recovery than the session is worth.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A continuous 20-minute tempo run is logged at even effort, with its pace compared with your calculated tempo pace."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write a one-line description of tempo effort in the log"
                - "Run two times eight minutes at tempo effort with a jog between"
                - "Build to a continuous 20-minute tempo over four weeks"
                - "Compare your tempo pace with your calculated pace"
            - name: Hill technique and short hill repeats
              description: |-
                ## Purpose
                Most race courses have at least one hill, and new runners tend to attack the climb and then lose minutes recovering at the top. Learning to shorten your stride, keep effort steady uphill and use the descent, plus a few short hill repeat sessions, builds leg strength and makes hilly routes something to enjoy.

                ## Milestones
                1. A hill of 60 to 90 seconds' climbing found near home.
                2. Uphill technique practised: shorter steps, upright body, eyes ahead, effort not pace held steady.
                3. A session of six hill repeats with a jog-down recovery completed.
                4. A hilly route run without walking the climbs.

                ## Notes
                Run downhill with quick, light steps rather than braking hard. Downhill running is what makes the thighs sore the next day.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two hill repeat sessions are logged, and a hilly route is completed without walking any climb."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Find a hill near home that takes 60 to 90 seconds to climb"
                - "Practise short steps and steady effort on your next hilly run"
                - "Run six hill repeats with an easy jog back down"
                - "Run your hilliest route without walking the climbs"
            - name: Treadmill sessions that carry over outdoors
              description: |-
                ## Purpose
                Treadmills rescue a training week in ice, darkness or a hotel, but it feels different from the road and can be numbingly dull. Knowing a few tricks, such as a one percent incline and interval or hill sessions that pass the time, makes indoor runs count without spoiling your outdoor pacing.

                ## Milestones
                1. A gym or home treadmill you can use regularly identified.
                2. An easy run done at a one percent incline, with effort compared to outdoors.
                3. Two treadmill session plans written: one interval and one hill.
                4. A rule set for how many runs a week can be indoors before outdoor running suffers.

                ## Notes
                Treadmill pace and outdoor pace rarely match exactly. Judge treadmill runs by effort and keep at least one run a week outdoors.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two written treadmill session plans exist and one easy treadmill run is logged with a comparison to outdoor effort."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find a treadmill you can use on dark or icy days"
                - "Run an easy session at a one percent incline and note the effort"
                - "Write one interval and one hill session for the treadmill"
                - "Set a limit on indoor runs per week in the log"
            - name: GPS watch or phone app choice and setup
              description: |-
                ## Purpose
                Phone apps are enough for many beginners, but by 10K most runners want split times, distance on the wrist and a log that syncs itself. Deciding whether you need a GPS watch at all, and which features matter, saves you buying an expensive device whose numbers you then chase instead of running by feel.

                ## Milestones
                1. The features you would actually use listed: distance, splits, run-walk alerts, music or none.
                2. A phone app tried for a month before any purchase.
                3. Two or three watches compared on battery life, price and app, if a watch is wanted.
                4. The chosen device set to show time and distance only on easy runs.

                ## Notes
                Start from the **Purchase decision** template. Wrist heart rate readings can be unreliable on the first minutes of a run; effort and the talk test are still your best guide.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision on phone app or watch is recorded with the features that drove it, and the device is set up and syncing."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the three features you would actually use on a run"
                - "Use a free phone app for a month before buying anything"
                - "Compare up to three watches on battery, price and app"
                - "Set easy runs to show time and distance only"
            - name: Moving from 5K to running for an hour
              description: |-
                ## Purpose
                The gap between finishing a 5K and running a 10K is bigger than it looks, and many new runners stall on a loop of 30-minute runs. A bridging phase that adds a fourth short run and stretches one run per week from 30 to 60 minutes builds the base a 10K plan expects.

                ## Milestones
                1. A fourth easy run of 20 to 25 minutes added for three weeks.
                2. One weekly run extended by five minutes at a time.
                3. A continuous 45-minute run at easy effort completed.
                4. A continuous 60-minute run completed with no ache above green the next day.

                ## Notes
                Keep all bridging runs easy. Speed can wait until you have the base; the long run is doing the work here.
              priority: medium
              deadlineOffsetDays: 130
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A continuous 60-minute easy run is logged, with four runs a week sustained for at least three weeks."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Add a fourth 20-minute easy run on a free day this week"
                - "Extend one run each week by five minutes"
                - "Log the first 45-minute run and how the next day felt"
                - "Book a free morning for the first 60-minute run"
            - name: First 10K race and training plan choice
              description: |-
                ## Purpose
                Picking a 10K race eight to twelve weeks away gives your training a date, and picking the plan alongside it means the two actually fit. Flat courses, generous cut-off times and a field that includes plenty of beginners make a first 10K enjoyable instead of daunting.

                ## Milestones
                1. Two or three 10K races eight to twelve weeks away compared on course profile, cut-off time, cost and travel.
                2. One race entered, with the confirmation saved.
                3. An eight to ten week 10K plan chosen that matches your current weekly runs.
                4. The plan's key sessions written into the calendar back from race day.

                ## Notes
                Start from the **Training program** template. Check the cut-off time against your predicted 10K time with room to spare.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A 10K race is entered and a matching plan is in the calendar, counting back from race day."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Shortlist three 10K races eight to twelve weeks away"
                - "Check each course profile and cut-off time"
                - "Enter one race and save the confirmation email"
                - "Write the 10K plan's long runs into the calendar from race day back"
            - name: Cross-training on non-running days
              description: |-
                ## Purpose
                Some people want to train more than their legs can take in running, and others need a way to stay fit when an ache rules out a run. Low-impact cardio such as cycling, swimming or an elliptical trainer builds aerobic fitness without the pounding, as long as it does not quietly turn into another hard day.

                ## Milestones
                1. One low-impact option chosen that you can actually access.
                2. One 30 to 45 minute easy session done each week for four weeks.
                3. A rule written for using cross-training in place of a run when an ache is amber.
                4. How legs feel the following run noted after each session.

                ## Notes
                Keep cross-training easy. Its job is extra aerobic time and recovery, not another tough workout.
              priority: low
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Four weeks of one easy cross-training session per week are logged, with a written amber-ache swap rule."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Choose cycling, swimming or an elliptical trainer you can reach easily"
                - "Do one easy 30 to 45 minute cross-training session @recurring(weekly:fri)"
                - "Write a rule for swapping a run for cross-training on amber days"
                - "Note how your legs felt on the run after each session"
            - name: Half marathon readiness check and plan choice
              description: |-
                ## Purpose
                Starting a 12 to 16 week plan from too low a base is how many first attempts at the 21.1 km (13.1 mile) distance end in injury. Checking that you already run three or four times a week, around 20 to 25 km in total with a long run near 10 km, before choosing a plan makes the build realistic.

                ## Milestones
                1. Your last six weeks of distance and long runs checked against a typical half marathon starting base.
                2. Any gap closed with extra base weeks before the plan starts.
                3. A 12 to 16 week half marathon plan chosen that matches your days per week.
                4. The plan written into the calendar back from a target race date.

                ## Notes
                Start from the **Training program** template. A plan with three quality runs a week is plenty for a first half; more days does not mean better.
              priority: high
              deadlineOffsetDays: 150
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of your last six weeks with the plan's starting base, and a chosen 12 to 16 week plan in the calendar."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Total your weekly distance and long runs for the last six weeks"
                - "Compare them with the starting base two half marathon plans expect"
                - "Ask the agent to draft a calendar of the chosen plan from race day back"
                - "Add base-building weeks first if you are short of the starting point"
            - name: Choosing a half marathon race
              description: |-
                ## Purpose
                Popular half marathons sell out months ahead, and the right first one is not always the famous one. Comparing courses on elevation, cut-off time, start-time temperature, drinks stations and travel helps you pick a race that suits a first finish, not one that adds a hotel, a ferry and a hilly second half to an already big day.

                ## Milestones
                1. Three races 14 to 20 weeks away compared on course profile, cut-off, weather and travel.
                2. Drinks station spacing and the drink and gel brand on course noted for each.
                3. One race entered and the confirmation filed.
                4. Travel and, if needed, accommodation booked or a plan for the morning written.

                ## Notes
                A course close to home removes a whole layer of race-morning stress. Check the cut-off allows for walking breaks if you plan to use them.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One half marathon is entered after comparing three on five written criteria, with travel for the day sorted."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Shortlist three half marathons 14 to 20 weeks away"
                - "Compare course profile, cut-off, weather and travel for each"
                - "Note the drinks stations and on-course brand for the chosen race"
                - "Enter the race and file the confirmation with the log"
            - name: Run-walk strategy decision for the half
              description: |-
                ## Purpose
                Planned walk breaks, such as running four minutes and walking one, let many runners finish a half marathon faster and fresher than running until they have to stop. Deciding before training starts whether to use them, and practising the exact ratio on long runs, turns walking into a tactic rather than a defeat.

                ## Milestones
                1. Two long runs done with different run-walk ratios and finish times compared.
                2. A decision recorded: continuous running, or a set ratio such as 4 minutes running and 1 walking.
                3. Watch or app alerts set up for the chosen intervals.
                4. Three long runs completed using the chosen strategy.

                ## Notes
                Walk breaks work best from the start, not only once you are tired. Move to the side of the course before you walk.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written run-walk decision, backed by two compared long runs, and three long runs logged using it."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Run your next long run with a four-minute run, one-minute walk ratio"
                - "Run a similar long run continuously and compare times and fatigue"
                - "Record your run-walk decision in the log"
                - "Set interval alerts on your watch or app for the chosen ratio"
            - name: First 5K race day plan
              description: |-
                ## Purpose
                A first 5K race, even a small local one, comes with unfamiliar things: numbers, start pens, crowds and nerves that make you sprint the first kilometre. Planning the evening before, the morning and your pace on paper leaves only the running for the day itself.

                ## Milestones
                1. Kit, race number, pins and timing chip laid out the night before.
                2. Breakfast and travel timed so you arrive 45 minutes early.
                3. A start position chosen near the back of your expected pace group.
                4. A target first-kilometre split written down and stuck to.
                5. Your finish time and three lessons recorded in the log.

                ## Notes
                Nothing new on race day: no new shoes, breakfast or kit you have not tried on a run.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A first 5K race is finished, with the time and three lessons recorded in the log within two days."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Enter a local 5K about ten weeks from now"
                - "Write a race-morning timeline from breakfast to start"
                - "Lay out kit, number and pins the night before"
                - "Record your time and three lessons within two days"
            - name: First 10K race day plan
              description: |-
                ## Purpose
                Ten kilometres is long enough that pacing mistakes in the first two kilometres cost you dearly in the last three. A written plan for the morning, the warm-up, your split targets and a drink if it is hot means you finish strong rather than surviving the second half.

                ## Milestones
                1. Course map studied, with hills and the drinks station marked.
                2. Target splits written: first two kilometres slightly slower than goal pace.
                3. A short warm-up planned that fits around the start pen.
                4. The race finished and your splits compared with the plan.
                5. Notes on what to change for the next race added to the log.

                ## Notes
                Most 10K runners do not need gels; a normal breakfast two to three hours before is enough. Practise any drink on training runs first.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The 10K is finished and actual splits are logged next to the written target splits, with notes for next time."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Mark hills and the drinks station on the course map"
                - "Write target splits with the first two kilometres held back"
                - "Plan a ten-minute warm-up you can do near the start"
                - "Compare race splits with the plan in the log afterwards"
            - name: Long run dress rehearsal for the half
              description: |-
                ## Purpose
                Three or four weeks before the half marathon, one long run should be a rehearsal of race day: same start time, breakfast, shoes, kit, drinks and any gels. Problems such as chafing, a stomach that rejects a gel or shorts with no pocket are much better found at 16 km on a Sunday than at 16 km in the race.

                ## Milestones
                1. A 16 to 18 km long run started at race-day time after your planned breakfast.
                2. Race shoes, kit and anti-chafe used exactly as planned.
                3. Your drink and, if you use them, gel tried at the times you plan to take them in the race.
                4. A list of anything that rubbed, bounced or upset your stomach, with a fix for each.

                ## Notes
                If you plan to use the race's own drink or gel brand, buy some and try it now. For detailed carbohydrate planning, see the race-day fuelling area.
              priority: medium
              deadlineOffsetDays: 230
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A 16 km or longer rehearsal run is logged in full race kit, with a written fix for every problem found."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pick a long run three or four weeks before the half for the rehearsal"
                - "Buy a few of the on-course drinks or gels to test"
                - "Run 16 to 18 km in full race kit at race-day start time"
                - "Write down every rub, bounce or stomach problem and its fix"
            - name: Half marathon taper and race week
              description: |-
                ## Purpose
                Over the last ten to fourteen days before a half marathon, fitness is already banked and the job is to arrive rested. Cutting distance by about a third to a half while keeping a little pace, sleeping well and settling logistics early stops the classic mistakes of a panicky last long run or a sleepless night hunting for safety pins.

                ## Milestones
                1. Distance in the last two weeks reduced by about a third, then a half, with a few short faster efforts kept.
                2. Race number, start time, bag drop rules and travel confirmed by midweek.
                3. Kit and race-morning breakfast packed or ready two days before.
                4. Two nights of good sleep in the three nights before the race.

                ## Notes
                Feeling sluggish or twitchy in taper week is normal. Do not add a test run to reassure yourself.
              priority: medium
              deadlineOffsetDays: 245
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The final two weeks show distance cut by at least a third, and race logistics are confirmed in writing three days out."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write the last two weeks of runs at reduced distance"
                - "Read the race information pack and note bag drop and start times"
                - "Pack kit, number, pins and breakfast two days before the race"
                - "Plan early nights for the three nights before the race"
            - name: Half marathon race day plan
              description: |-
                ## Purpose
                Race day for a first half marathon has more moving parts than any training run: an early breakfast, travel, a toilet queue, a crowded start and two hours of decisions. A written plan for the morning, the pace for each third of the race and the drinks you will take turns months of training into a well-run day.

                ## Milestones
                1. A minute-by-minute race-morning timeline written, from alarm to start pen.
                2. Pace plan set: first 5 km a little slower than goal, steady through 16 km, then whatever is left.
                3. Drink and gel timings written on a small card or your arm.
                4. A meeting point and dry clothes arranged for after the finish.
                5. Finish time, splits and five lessons recorded within three days.

                ## Notes
                Run to the plan, not the crowd. Most first-time half marathoners who finish happiest ran the first 5 km slower than felt natural.
              priority: high
              deadlineOffsetDays: 250
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The half marathon is completed and the log holds the race-morning plan, actual splits and five written lessons."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write a race-morning timeline from alarm to start pen"
                - "Set target paces for the first 5 km, to 16 km and to the finish"
                - "Write drink and gel timings on a small card to carry"
                - "Arrange a meeting point and warm clothes for the finish"
            - name: Post-race recovery week and debrief
              description: |-
                ## Purpose
                After a 10K or half marathon most runners either stop completely for a month or jump straight back into hard training, and both cost fitness. A planned easy week, followed by an honest look at what went well and what did not, sets up the next goal while the race is fresh.

                ## Milestones
                1. Two or three days with no running or only walking after the race.
                2. A week of short easy runs with no speed work.
                3. A debrief written: pacing, fuelling, kit, training and what you would repeat.
                4. The next goal chosen, or a decision made to enjoy a few weeks of unstructured running.

                ## Notes
                Soreness that is worse after a few days, or affects one spot rather than whole muscles, needs a professional look.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A recovery week is logged with no hard sessions, and a written debrief with the next goal sits in the log."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Plan two rest or walking days straight after the race"
                - "Write a week of short easy runs with no speed work"
                - "Write a debrief on pacing, fuelling, kit and training"
                - "Choose the next goal or a few weeks of unplanned running"
            - name: Running around young children and work
              description: |-
                ## Purpose
                Parents of small children often have no free hour that is not already claimed, so running only happens if it is planned with a partner, childcare or the children themselves. Agreeing slots at home, using a proper running buggy where suitable, and turning some runs into a family outing keeps training alive through the busiest years.

                ## Milestones
                1. Run slots agreed with your partner or childcare each week, with a fair swap in return.
                2. A running buggy checked against the maker's age and terrain guidance, if you plan to run with one.
                3. One run a week made shorter and earlier to fit around nursery or school runs.
                4. A family-friendly 2 km event or junior timed run found for the children.

                ## Notes
                Most buggy makers say not to run with a baby until they have good head and neck control; follow the specific guidance for your buggy.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive weeks show at least three logged runs each, with slots agreed at home in advance."
                cadence: rolling
              tasks:
                - "Agree next week's run slots with your partner or childcare @recurring(weekly:sun)"
                - "Check your buggy's guidance on running and minimum age"
                - "Find a junior timed run or family fun run near you"
                - "Plan one early short run that ends before the school run"
            - name: Starting to run in a larger body
              description: |-
                ## Purpose
                Running in a larger body is entirely possible, and plenty of people finish half marathons this way, but the standard programmes can progress too fast for joints and confidence. Longer walk intervals, the right support and kit, and a focus on time on feet rather than pace make the start comfortable and far more likely to last.

                ## Milestones
                1. A doctor's go-ahead recorded if you have joint, heart or blood pressure concerns.
                2. Walk intervals lengthened and run intervals shortened compared with the standard programme.
                3. Supportive kit and anti-chafe sorted for thighs, underarms and chest.
                4. Twelve weeks of three sessions a week logged, measured by minutes on feet.

                ## Notes
                Ignore the pace of other people on apps and at events. Many free timed 5K events have walkers and a tail walker, so finishing last is never finishing alone.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve weeks of three sessions per week are logged by minutes on feet, using an adjusted walk-run ratio."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Rewrite week one with longer walks and 30-second runs"
                - "Buy anti-chafe balm and supportive kit before the first session"
                - "Record minutes on feet rather than pace in the log"
                - "Move up a stage only after three sessions feel comfortable"
            - name: Winter running in the dark and cold
              description: |-
                ## Purpose
                Short days, ice and rain are where most new running habits quietly stop in November. Planning lit routes, being seen by drivers, dressing in layers and having an indoor fallback keeps the runs going until spring, when the people who kept going are suddenly much fitter than those who stopped.

                ## Milestones
                1. Two lit routes chosen for dark evenings or early mornings.
                2. A headtorch or chest light, reflective layer and gloves ready.
                3. An icy-day plan written: a treadmill, a gritted route or a rest day.
                4. Twelve winter weeks with at least two runs each logged.

                ## Notes
                Dress as if it is about ten degrees warmer than it is; you will warm up within a few minutes. Tell someone your route when running alone in the dark.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two lit routes, working lights and an icy-day plan are in place, and twelve winter weeks show two or more runs each."
                cadence: cyclic
              tasks:
                - "Choose two lit routes you are happy to run in the dark"
                - "Check lights, reflective kit and gloves before the clocks change @recurring(yearly)"
                - "Write your icy-day fallback in the log"
                - "Share your usual dark-evening routes with someone at home"
            - name: Hot weather running adjustments
              description: |-
                ## Purpose
                Heat can slow even an easy run by a minute per kilometre and makes going at normal pace risky. Moving runs to early morning, slowing to effort, drinking sensibly and knowing the warning signs of heat illness keep summer training productive and safe.

                ## Milestones
                1. Summer run slots moved to early morning or late evening.
                2. Pace targets dropped on hot days in favour of the talk test.
                3. A water plan for runs over 45 minutes: a bottle, a tap route or a loop past home.
                4. The warning signs of heat illness written in the log, with a rule to stop if any appear.

                ## Notes
                Dizziness, confusion, stopping sweating or feeling cold and clammy in the heat are reasons to stop, cool down and seek help. Races are sometimes shortened or cancelled in extreme heat; follow the organiser's advice.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written hot-day plan covering timing, pace, water and heat illness warning signs is in the log before summer."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Move summer runs to before 9 in the morning where possible"
                - "Plan a water source on every run longer than 45 minutes"
                - "Write the warning signs of heat illness in the log"
                - "Run by effort, not pace, on any day above about 25 degrees"
            - name: Restarting after months away from running
              description: |-
                ## Purpose
                Work, a house move, illness or a busy season can stop running for three months or more, and coming back at your old distance is how many returners get hurt. Your lungs come back faster than your tendons, so a short structured restart, starting at about half your old weekly distance, gets you back safely in six to eight weeks.

                ## Milestones
                1. Your old weekly distance and your current fitness written side by side.
                2. A restart plan set at about half your old distance, all easy.
                3. Four weeks completed with no week rising by more than about ten percent.
                4. A free timed 5K or time trial run to reset training paces.

                ## Notes
                If the break was because of an injury, follow a graded return agreed with your physiotherapist instead; the return-to-training area covers that.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six weeks of restart running are logged from about half your old distance, ending with a 5K time to reset paces."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Write your old weekly distance next to what you can run now"
                - "Plan the first restart week at half your old distance"
                - "Hold every run at easy effort for the first four weeks"
                - "Run a 5K time trial in week six to reset your paces"
            - name: Keeping runs going on work trips and holidays
              description: |-
                ## Purpose
                One week away can undo a month of building if you treat it as a break by accident. Packing kit, finding a safe route or hotel treadmill in advance, and agreeing a reduced but realistic target for the trip keep the plan intact without spoiling the holiday or the work.

                ## Milestones
                1. Running kit on the packing list for every trip.
                2. A safe route or treadmill found before arrival, with local daylight hours checked.
                3. A trip target set, such as two short runs, rather than the full plan.
                4. Runs on the trip logged with any notes on heat, hills or jet lag.

                ## Notes
                Ask hotel reception for a popular running route; they often have a printed map. Jet lag makes easy pace feel harder for a day or two.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Running kit is on your standard packing list, and each trip in the next six months has a logged trip target and runs."
                cadence: rolling
              tasks:
                - "Add running shoes and kit to your standard packing list"
                - "Look up a safe route or hotel treadmill before your next trip"
                - "Set a realistic number of runs for the trip in the log"
                - "Log trip runs with notes on heat, hills or jet lag"
            - name: Sub-25-minute 5K block
              description: |-
                ## Purpose
                Breaking 25 minutes for 5K, an average of 5 minutes per kilometre, is a popular first time goal for runners who have been running consistently for a year. An eight-week block with one interval session, one tempo run, a long run and easy running, tested by a time trial at the end, is a realistic route for runners currently around 26 to 27 minutes.

                ## Milestones
                1. A recent 5K time logged and an eight-week block written around it.
                2. Weekly interval sessions such as five times 1 km at goal pace completed for six weeks.
                3. A 20-minute tempo run held at about 5:20 per kilometre.
                4. A goal 5K run at the end of the block with even splits.

                ## Notes
                If your current 5K is over 28 minutes, choose a closer target first. A goal a minute away is ambitious for eight weeks.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "An eight-week block is logged in full and a 5K is completed in under 25 minutes, or the new best time is recorded."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Log your current 5K time and write an eight-week block from it"
                - "Run the week's key interval session @recurring(weekly:tue)"
                - "Book a free timed 5K or race for the end of week eight"
                - "Write your goal splits of 5 minutes per kilometre for race day"
            - name: Sub-two-hour half marathon block
              description: |-
                ## Purpose
                Two hours is the best-known half marathon target, about 5:40 per kilometre, and it suits runners who have one half behind them and a 10K around 52 to 54 minutes. A 14 to 16 week block with a weekly tempo, longer long runs with some goal-pace kilometres, and a properly paced race is what usually closes the gap.

                ## Milestones
                1. A recent 10K or 5K time checked against a pace calculator's half marathon prediction.
                2. A 14 to 16 week block written with one tempo or goal-pace session and one long run each week.
                3. A long run of 18 km including 8 km at goal pace completed.
                4. A half marathon finished in under two hours, or the new best time logged with lessons.

                ## Notes
                Most runners who miss two hours do so by starting too fast. Plan to be a few seconds per kilometre behind schedule at 5 km.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "A 14 to 16 week block is logged and a half marathon finish time is recorded against the two-hour target."
                cadence: phased
                effort_hours_estimate: "70"
              tasks:
                - "Check your 10K time against a half marathon pace prediction"
                - "Write a 14 to 16 week block with weekly tempo and long runs"
                - "Add goal-pace kilometres to the second half of three long runs"
                - "Write race splits that start a few seconds slower than 5:40"
            - name: Pacing a friend through their first 5K
              description: |-
                ## Purpose
                Once you have run a few races, the most rewarding run can be at someone else's pace. Running alongside a friend or family member in their first 5K, keeping them steady and talking them through the hard kilometre, also sharpens your own sense of pace and effort.

                ## Milestones
                1. A friend's target time and comfortable pace agreed with them in advance.
                2. Two training runs done together at their pace.
                3. A pacing plan written for each kilometre, with walk breaks if they use them.
                4. Their race finished, with their time and what helped them recorded for them.

                ## Notes
                Their race, their pace: resist the urge to push. Carry their water and do the talking so they do not have to.
              priority: low
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "A friend finishes their first 5K with you pacing, against a kilometre plan you agreed together in advance."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask a friend if they would like company for their first 5K"
                - "Agree their target time and comfortable pace with them"
                - "Run two training sessions together at their pace"
                - "Write a kilometre-by-kilometre pacing plan for their race"
            - name: Qualifying as a run leader for beginner groups
              description: |-
                ## Purpose
                Experienced runners who have been through the 5K to half marathon progression are exactly the people beginner groups need. A short run leader course, offered by national athletics bodies in many countries, teaches safe group management, route planning and session leading, and lets you take others through the same route you followed.

                ## Milestones
                1. A recognised run leader course found through your national athletics body or a local club.
                2. The course completed and the certificate filed.
                3. Group safety basics in place: a register, emergency contacts and a first aid plan.
                4. A beginner group or walk-run session led for at least six weeks.

                ## Notes
                Most leader courses require you to be affiliated with a club or group for insurance. Check this before you book.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A run leader certificate is filed and six weeks of beginner group sessions are logged with registers kept."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Search your national athletics body for a run leader course"
                - "Ask a local club whether they need a beginner group leader"
                - "Set up a register with emergency contacts for the group"
                - "Lead the weekly beginner group run @recurring(weekly:wed)"
---

# 5K to Half Marathon Running

This area is for anyone who wants to go from not running, or barely running, to finishing a 5K, then a 10K, then a half marathon without getting hurt or giving up in week four. It starts with the foundations (a readiness check, shoes that fit, a starting test, a beginner programme and three fixed slots in the week), then the weekly routines that build distance safely, the skills of pacing, form, strides, tempo and hills, the decisions that move you from 5K to 10K to the half, the race days themselves, the situations that change the plan, such as small children, winter or a larger body, and finally time goals and leading other beginners.

What repeats is the walk-run sessions three times a week, a Sunday long run, a Monday look at weekly distance, two short strength sessions, a free Saturday timed 5K, a cutback week each month, a monthly review on the 28th and a time trial every quarter. The Purchase decision, Metrics log, Training program and Habit tracker templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
