---
id: fitness-sport.pool-swimming-technique
name: Pool Swimming Technique
description: "A pool and timetable that suit you, a timed and filmed baseline, weekly drill, endurance and threshold sets, every stroke and turn learned in order, and a route from adult beginner to masters galas."
category: personal
version: 1.0.0
tags: [fitness-sport, pool-swimming-technique, everyone, athlete, front-crawl, adult-learn-to-swim, masters-swimming, stroke-drills]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - course
    - metrics-log
    - habit-tracker
    - trip
    - training-program
  pillars:
    - name: Fitness & Sport
      emoji: "🏋️"
      description: "Training, play and competition: building strength, endurance and skill in a sport or a gym, structuring blocks of work around events, recovering properly, and keeping the sessions honest with a log rather than a feeling."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Pool Swimming Technique
          description: "Improving stroke technique, breathing and endurance in the pool, from learning to swim as an adult to masters swim squads."
          projects:
            - name: Choosing a pool and its lane swim timetable
              description: |-
                ## Purpose
                The pool you can reach in fifteen minutes at a time you are actually free will do more for your swimming than the best pool across town. Comparing two or three nearby pools on length, lane swim hours, lane speeds and price settles where you train before habits form around the wrong one.

                ## Milestones
                1. Two or three pools within easy reach listed with pool length, water temperature and price.
                2. Each pool's lane swim timetable checked against your working week.
                3. One pool chosen, with the two or three sessions a week you can realistically attend written down.
                4. Membership, swim card or pay-as-you-go option decided and paid for.

                ## Notes
                Public sessions are often split into slow, medium and fast lanes, while some hours go to clubs and lessons. Check how the timetable changes in school holidays before buying a monthly pass.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One pool chosen from a shortlist of at least two, with at least two weekly lane swim slots written into your calendar."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the pools within fifteen minutes of home or work with their pool lengths"
                - "Download or photograph each pool's current lane swim timetable"
                - "Mark the lane swim sessions that fit around work and family"
                - "Buy the membership or swim card that suits your number of visits"
                - "Check the pool's timetable for holiday closures and gala days @recurring(monthly:25)"
            - name: Health questions before regular swimming
              description: |-
                ## Purpose
                Swimming is gentle on joints, but a few things are worth raising before you start going three times a week: recurring ear infections, asthma that reacts to chlorine, a heart condition, epilepsy, or a skin condition that pool water inflames. A short conversation with your doctor or nurse gets any limits written down and avoids guessing at the poolside.

                ## Milestones
                1. A list of your conditions and medicines that could matter in the water.
                2. Questions about ears, breathing, skin or seizures put to your clinician.
                3. Any advice written down, such as earplugs, an inhaler kept at the poolside or swimming only in lifeguarded sessions.
                4. The lifeguard or coach told about anything they need to know.

                ## Notes
                This organises your questions for a clinician; it is not a medical clearance. If you have epilepsy or a heart condition, ask specifically about swimming without a companion.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Your clinician's answers to your swimming questions are written down, with any agreed limits noted at the front of your swim log."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write down any conditions or medicines that could matter in a pool"
                - "Book a short appointment or phone call with your doctor or nurse"
                - "Ask about ears, breathing, skin and swimming unaccompanied"
                - "Note the advice at the front of your swim log"
                - "Mention your swimming at each annual health check @recurring(yearly)"
            - name: Goggles, cap and costume that stay put
              description: |-
                ## Purpose
                Leaking goggles and a costume that drags or rides up will end a session faster than tiredness. Goggles that seal on your face shape, a cap that keeps hair out of your eyes and a chlorine-resistant costume cost less than a month of pool entry and remove most of the reasons for cutting swims short.

                ## Milestones
                1. Two or three pairs of goggles tried for suction without the strap before buying.
                2. One chlorine-resistant training costume and one silicone cap bought.
                3. A spare pair of goggles and a mesh bag packed for the pool.
                4. Prescription or tinted lenses chosen if you need them for sight or glare.

                ## Notes
                Start from the **Purchase decision** template. A pair that stays on when pressed to your face without the strap will usually seal in the water; tightening the strap harder rarely fixes a poor fit.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Goggles that pass the no-strap suction test, a training costume, a cap and a spare pair of goggles are packed in your swim bag."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Press each pair of goggles to your face without the strap to test the seal"
                - "Choose a chlorine-resistant training costume rather than a fashion one"
                - "Buy a silicone cap and a spare pair of goggles"
                - "Pack a mesh bag with towel, shampoo and a water bottle"
            - name: Water confidence for adults nervous of deep water
              description: |-
                ## Purpose
                Many adults who never learned, or had a frightening moment as a child, can stand in the shallow end but freeze when their face goes under or their feet leave the floor. Working through small steps in water where you can stand, with a teacher or trusted friend beside you, builds the calm that every stroke later depends on.

                ## Milestones
                1. Face in the water, blowing bubbles for five seconds, without panic.
                2. A front float and a back float held for ten seconds with a noodle, then without.
                3. Standing up from a float on your own in chest-deep water.
                4. Moving from the shallow end into water just out of your depth, beside the wall, with a teacher present.

                ## Notes
                Go at a pace that feels manageable and stay in lifeguarded sessions. Many pools run adult-only beginner sessions where nobody is watching from the side.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You can float on your front and back for ten seconds and stand up unaided, recorded with the date in your swim log."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Find an adult-only beginner or quiet session at your chosen pool"
                - "Practise blowing bubbles with your face in for five seconds"
                - "Hold a front float with a noodle, then stand up on your own"
                - "Ask the teacher or lifeguard to stay near as you try water out of your depth"
            - name: Adult swimming lessons to a first unaided 25 m
              description: |-
                ## Purpose
                Teaching yourself from videos tends to produce a head-up stroke that tires you within ten metres. A block of adult lessons, usually eight to ten weeks, gives you a teacher who spots the one thing holding you back and a fixed weekly slot that makes practice happen.

                ## Milestones
                1. An adult beginner or improver course chosen and booked.
                2. One extra practice swim a week fitted in between lessons.
                3. A width, then a length with a float, then a length without a float swum.
                4. A first unaided 25 m swum and timed, with the date written down.

                ## Notes
                Start from the **Course** template. Ask whether the course groups adults by ability; a mixed group can leave beginners waiting at the wall.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: event-completion
                success_criteria: "A full 25 m length swum without a float or stopping, dated in your swim log, after a booked block of adult lessons."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Search for adult beginner lessons at your pool and two nearby"
                - "Book the next block of lessons and put every date in your calendar"
                - "Add one practice swim a week in a quiet lane swim session"
                - "Ask the teacher to name one thing to change at the end of each lesson"
            - name: Lane etiquette and picking the right speed lane
              description: |-
                ## Purpose
                Crowded lane swims run on unwritten rules: swim in a circle, keep to one side, tap a foot to pass, rest at the end without blocking the wall. Knowing them, and picking a lane you can hold your own in, turns a stressful session into a calm one and stops other swimmers resenting you.

                ## Milestones
                1. Circle swimming, overtaking and resting rules read from your pool's signs or website.
                2. Your pace over 50 m timed so you can match slow, medium or fast lanes.
                3. A full session swum in the matching lane without being lapped repeatedly or holding others up.
                4. A habit of resting in the corner of the lane, not the middle of the wall.

                ## Notes
                If you are lapped every 100 m or stuck behind someone slower, move lanes. That is what they are for.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Your 50 m pace recorded and matched to a lane speed, with one full session swum in that lane following its direction rules."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Read your pool's lane rules and which side to swim on"
                - "Time a relaxed 50 m to see which lane speed you match"
                - "Swim a whole session in that lane keeping to the circle"
                - "Practise passing with a light foot tap and resting in the corner"
            - name: Baseline swim test with timed 100 m and 400 m
              description: |-
                ## Purpose
                Without numbers it is hard to tell whether three months of swimming has made you faster or just more at home in the pool. One baseline session, with a timed 100 m, a timed 400 m and a count of strokes per length, gives the figures every later test and goal is measured against.

                ## Milestones
                1. A 100 m front crawl swum and timed after a proper warm-up.
                2. A 400 m swum at an even, sustainable pace and timed.
                3. Strokes per 25 m counted on a relaxed length.
                4. All three numbers recorded with the date, pool length and how you felt.

                ## Notes
                If 400 m is not yet possible without stopping, time 200 m, or swim 400 m with short rests and record them. Test in the same pool at the same time of day next time.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated baseline with your 100 m time, 400 m time and strokes per length is recorded in your swim log."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Warm up with 200 to 300 m of easy swimming before testing"
                - "Swim a timed 100 m front crawl at a strong effort"
                - "Rest, then swim a timed 400 m at an even pace"
                - "Count your strokes on one relaxed length"
                - "Record all three numbers with the date and pool length"
            - name: First filmed stroke audit
              description: |-
                ## Purpose
                Most swimmers are surprised by what they see on film: a head lifting to breathe, legs sinking, a hand crossing the middle line. Ten seconds of footage from the side and the end of the lane shows the two or three faults worth fixing first, which saves months of drilling the wrong thing.

                ## Milestones
                1. Permission to film checked with the pool, since many ban cameras outside agreed sessions.
                2. Side-on and head-on footage of two lengths of front crawl captured.
                3. The footage compared against a reference video of good technique.
                4. The top three faults written down in order of priority.

                ## Notes
                Pools restrict filming to protect other users, especially children. Ask staff first, film only yourself, or book a coached video analysis session instead.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Side-on and head-on footage of your front crawl has been reviewed and your top three faults are listed in priority order."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask pool staff whether and when filming is allowed"
                - "Get a friend to film two lengths from the side and from the end"
                - "Ask the agent to turn your notes on the footage into a ranked fault list"
                - "Write the top three faults at the front of your swim log"
            - name: Swim session log with lengths, times and stroke counts
              description: |-
                ## Purpose
                A swimmer who records distance, the main set, times and strokes per length can see within a month whether a drill is working. Setting up the log now, before the training rhythm starts, means nothing has to be pieced together from memory later.

                ## Milestones
                1. A log with columns for date, pool, total distance, main set, times, stroke count and notes.
                2. Your baseline test and pool length entered at the top.
                3. Every session for the first month recorded within a day.
                4. Monthly totals of distance and sessions calculated.

                ## Notes
                Start from the **Metrics log** template. Record the pool length with every entry, since 25 m and 50 m pool times are not directly comparable.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A swim log holding at least four weeks of sessions, each with distance, main set and at least one time or stroke count."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Create a swim log from the metrics log template"
                - "Add columns for distance, main set, times, stroke count and notes"
                - "Enter each session within a day of swimming"
                - "Fill in any missing sessions from your watch or notes @recurring(monthly:3)"
            - name: Six-month swimming goal you can measure
              description: |-
                ## Purpose
                A vague aim to get better at swimming produces aimless lengths. One measurable target for the next six months, such as 1500 m non-stop, 100 m under two minutes or a first tumble turn, tells you what each session is for and when the block has worked.

                ## Milestones
                1. One main goal chosen, with a number and a date.
                2. Two supporting goals, one for technique and one for consistency, written beneath it.
                3. The goal checked against your baseline so it is a stretch but reachable.
                4. The goal written at the front of your swim log and shared with a coach or friend.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A six-month goal with a number and a date, plus one technique and one consistency goal, is written at the front of your swim log."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Compare three possible goals against your baseline numbers"
                - "Pick one main goal with a measurable target and a date"
                - "Add one technique goal and one sessions-per-week goal"
                - "Tell a coach, friend or squad mate what the goal is"
            - name: Reading swim sets, send-offs and the pace clock
              description: |-
                ## Purpose
                Session plans written as 8 x 50 on 1:15, or 4 x 100 descend 1 to 4, look like code until someone explains them. Learning the notation and how to use the big pace clock on the wall means you can follow a squad board, a coach's plan or a written session without stopping to ask.

                ## Milestones
                1. Common terms understood: send-off, rest interval, descend, negative split, build, drill, kick and pull.
                2. The pace clock used to leave on the top or the bottom of the minute.
                3. One written session of at least 1500 m followed from start to finish on your own.
                4. Send-offs adjusted so the main set is hard but finishable.

                ## Notes
                A send-off includes the swim and the rest: 50 on 1:15 means that if the swim takes 60 seconds, you rest for 15.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You have swum a full written session of at least 1500 m using the pace clock for every send-off, recorded in your log."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down what send-off, descend, build and negative split mean"
                - "Practise leaving on the top of the pace clock for 4 x 50"
                - "Copy a written session of about 1500 m into your log"
                - "Swim that session using the clock for every interval"
            - name: Three-swim week built around the pool timetable
              description: |-
                ## Purpose
                Two swims a week hold your fitness; three is where technique and endurance start to move. Fixing three slots, with a drill day, an endurance day and a faster day, gives each swim a job and means a missed one is noticed rather than quietly forgotten.

                ## Milestones
                1. Three regular lane swim slots chosen, with backups for weeks that change.
                2. Each slot given a focus: technique, endurance or speed.
                3. Three swims completed in at least three weeks out of four for two months.
                4. The plan adjusted whenever the pool timetable changes.

                ## Notes
                Start from the **Habit tracker** template. If three is not realistic yet, two well-used swims beat three planned and skipped.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three swims a week logged in at least six of the last eight weeks, each tagged technique, endurance or speed."
                cadence: rolling
              tasks:
                - "Pick three lane swim slots and one backup from the timetable"
                - "Label each slot technique, endurance or speed"
                - "Set up a habit tracker for swims completed each week"
                - "Plan next week's three swims against the timetable @recurring(weekly:sun)"
            - name: Weekly drill session with one technique focus
              description: |-
                ## Purpose
                Drills only work when one fault gets several weeks of attention, not when ten different drills are sampled once each. A weekly session built around a single focus from your stroke audit, with each drill length followed straight away by full stroke, carries the change into how you actually swim.

                ## Milestones
                1. One technique focus chosen from your fault list for a four-week block.
                2. Two or three drills picked that isolate that fault.
                3. Each drill length followed by a full-stroke length on the same point.
                4. The focus checked on film or by a coach before moving to the next.

                ## Notes
                Keep drill sets short and fresh, around 400 to 600 m in total. Tired drills become bad habits.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive weeks of drill sessions logged on one technique focus, with a before and after note or clip."
                cadence: rolling
              tasks:
                - "Choose this month's single technique focus from your fault list"
                - "Pick two or three drills that isolate it"
                - "Write a 500 m drill set alternating drill and full stroke"
                - "Swim the drill session on this month's technique focus @recurring(weekly:tue)"
            - name: Weekly endurance set on a send-off
              description: |-
                ## Purpose
                Swimming forty lengths without stopping builds endurance slowly; a set of repeats on a fixed send-off, such as 10 x 100 with 15 seconds' rest, builds it faster and teaches pace. One endurance set a week, lengthened every few weeks, is how most adult swimmers reach 1500 m and beyond.

                ## Milestones
                1. A starting set chosen that you can finish holding the same pace, such as 6 x 100.
                2. The set repeated weekly with every repeat time recorded.
                3. Total set distance raised by about a tenth every two to three weeks.
                4. Pace held within a few seconds from the first repeat to the last.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight weekly endurance sets logged with repeat times, and the main set at least 30 percent longer than the first one."
                cadence: rolling
              tasks:
                - "Choose a starting set you can finish at an even pace"
                - "Note each repeat's time on a waterproof card or watch"
                - "Add one repeat to the set every two or three weeks"
                - "Swim the weekly endurance set on its send-off @recurring(weekly:thu)"
            - name: Weekly threshold set at critical swim speed
              description: |-
                ## Purpose
                Once you can swim continuously, getting faster needs some time at a hard but steady pace. Critical swim speed, worked out from a 400 m and a 200 m time, gives a pace per 100 m for sets like 8 x 100 on short rests, which raises the speed you can hold without falling apart.

                ## Milestones
                1. Your critical swim speed per 100 m worked out from a recent test.
                2. A weekly threshold set built at that pace with 10 to 20 seconds' rest.
                3. Repeat times logged and compared against the target pace.
                4. Target pace updated after each new test.

                ## Notes
                Keep this to one session a week. Most of your swimming should stay easy or technical.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six weekly threshold sets logged, with at least 80 percent of repeats within two seconds of your target pace per 100 m."
                cadence: rolling
              tasks:
                - "Work out your pace per 100 m from your latest 400 m and 200 m times"
                - "Write a threshold set of 6 to 10 x 100 at that pace"
                - "Log each repeat against the target pace"
                - "Swim the threshold set at your target pace @recurring(weekly:sat)"
            - name: Monthly critical swim speed test
              description: |-
                ## Purpose
                Testing once a month shows whether the weekly sets are working and keeps your threshold pace honest. A 400 m and a 200 m, both swum hard with a full rest between, take twenty minutes and give the number that sets your training paces for the next four weeks.

                ## Milestones
                1. A fixed test protocol written down: warm-up, 400 m, full rest, 200 m.
                2. Each test swum in the same pool at a similar time of day.
                3. Critical swim speed calculated from the two times.
                4. A trend of monthly results kept in your log.

                ## Notes
                The calculation: subtract the 200 m time from the 400 m time and divide by two. The result is your pace per 100 m.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "Three or more monthly tests logged, each with 400 m time, 200 m time and calculated pace per 100 m."
                cadence: rolling
              tasks:
                - "Write the test protocol on a card you take to the pool"
                - "Swim the 400 m and 200 m test after a full warm-up @recurring(monthly:14)"
                - "Calculate your pace per 100 m and update your training paces"
                - "Add the result to the trend chart in your log"
            - name: Dryland shoulder and band routine for swimmers
              description: |-
                ## Purpose
                Swimmers repeat the same shoulder movement thousands of times a week, and a stiff upper back or a weak rotator cuff is where many niggles begin. A ten-minute band routine before swims and twice a week at home keeps the shoulder blades working and the chest open.

                ## Milestones
                1. A routine of five or six exercises chosen with a coach or physiotherapist.
                2. A light resistance band kept in your swim bag.
                3. The routine done before every swim for a month.
                4. Any pain lasting over two weeks reported to a physiotherapist.

                ## Notes
                This is preparation, not treatment. Pain at night, or pain that worsens week on week, needs a professional opinion.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written five-exercise band routine done at least twice a week for six weeks, logged alongside your swims."
                cadence: rolling
              tasks:
                - "Choose five band exercises for shoulder blades and rotator cuff with a professional"
                - "Put a light resistance band in your swim bag"
                - "Do the ten-minute routine on the poolside before each session"
                - "Do the band routine at home @recurring(weekly:mon,fri)"
            - name: Monthly stroke film check
              description: |-
                ## Purpose
                Faults creep back as you tire or swim faster, and feel is unreliable in water. A short clip each month, filmed where the pool allows, shows whether this month's drill focus has stuck and what to work on next.

                ## Milestones
                1. A fixed filming spot and angle agreed so clips compare like for like.
                2. One clip at easy pace and one at faster pace each month.
                3. Each clip compared with the previous month's.
                4. The next month's drill focus chosen from what the clip shows.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "Four monthly clips saved, each with a one-line note on what changed and the next drill focus."
                cadence: rolling
              tasks:
                - "Agree a filming slot and spot with pool staff"
                - "Film one easy and one fast length @recurring(monthly:20)"
                - "Compare the clip side by side with last month's"
                - "Write next month's single drill focus in your log"
            - name: Monthly swim block review
              description: |-
                ## Purpose
                Distance, sessions and test results only help if somebody reads them. Fifteen minutes at the end of each month to go through the log, compare it with the six-month goal and choose one change keeps the plan responsive instead of repeated on autopilot.

                ## Milestones
                1. Monthly distance, sessions and test results summarised.
                2. Progress compared against the six-month goal.
                3. One thing to keep, one to change and one to drop written down.
                4. The goal itself rewritten when reached or clearly out of reach.

                ## Notes
                If your log lives in scattered notes, ask the agent to gather the month's sessions into one summary before you review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A review note for each month with totals, goal progress and one change, kept for at least three consecutive months."
                cadence: rolling
              tasks:
                - "Read the month's log and add up distance, sessions and test times"
                - "Compare the totals with your six-month goal"
                - "Write one thing to keep, one to change and one to drop"
                - "Hold the monthly swim block review @recurring(monthly:28)"
            - name: Swim kit care and replacement rhythm
              description: |-
                ## Purpose
                Chlorine eats costumes, perishes goggle seals and fogs lenses, and the failure always comes mid-session. Rinsing kit after every swim and checking it each quarter means a strap does not snap on the morning of a test set.

                ## Milestones
                1. A post-swim habit of rinsing costume, cap and goggles in cold fresh water.
                2. Goggles stored in a hard case, not loose in the bag.
                3. A quarterly check of straps, seals, costume elastic and training aids.
                4. Worn items replaced before they fail, with spares kept.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Kit checked every quarter for a year, with purchase and replacement dates for goggles and costumes noted in your log."
                cadence: rolling
              tasks:
                - "Rinse costume, cap and goggles in cold water after each swim"
                - "Buy a hard goggle case and keep it in the swim bag"
                - "Note the date each costume and pair of goggles was bought"
                - "Check straps, seals and costume elastic for wear @recurring(quarterly)"
            - name: Quarterly coached technique check
              description: |-
                ## Purpose
                Even careful self-review misses things a trained eye sees at once. A coached session or one-to-one every three months, booked ahead, gives an outside view of your stroke and a fresh priority list for the next block.

                ## Milestones
                1. A coach or club offering one-to-one or small group technique sessions found.
                2. The first session booked, with your latest clip and goal sent ahead.
                3. The coach's top two corrections written in your log.
                4. The next check booked before leaving the pool.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "At least two coached technique sessions within six months, each producing two written corrections that became drill focuses."
                cadence: cyclic
              tasks:
                - "Find coaches offering one-to-one or small group stroke sessions"
                - "Send your latest clip and goal before the first session"
                - "Write the coach's top two corrections in your log"
                - "Book the next coached technique check @recurring(quarterly)"
            - name: Exhaling underwater and bilateral breathing
              description: |-
                ## Purpose
                Breathlessness in front crawl is usually not fitness but holding your breath underwater, then trying to breathe out and in during the half second your mouth is clear. Learning to exhale steadily through nose and mouth, then to breathe every three strokes, makes long swims calmer and evens out the stroke.

                ## Milestones
                1. Steady bubbles out through nose and mouth while face down for a full stroke cycle.
                2. A full length swum breathing every two strokes to your weaker side.
                3. 50 m swum breathing every three strokes without gasping.
                4. A 200 m swum with bilateral breathing at an easy pace.

                ## Notes
                If every third stroke feels desperate, try a pattern of three, two, three, two while you build up. Comfortable beats strict.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "A 200 m continuous swim with breathing every three strokes, logged with the date."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Practise bobbing at the wall, humming bubbles out underwater"
                - "Swim lengths breathing only to your weaker side"
                - "Build up to breathing every three strokes for 50 m"
                - "Swim 200 m easy with bilateral breathing and log it"
            - name: Front crawl body position and head line
              description: |-
                ## Purpose
                Sinking hips and legs act like a brake, and the usual cause is a head lifted to look forward. Learning to look at the pool floor, press the chest slightly and hold a long line lets the legs ride near the surface and makes every other change easier.

                ## Milestones
                1. A streamline push-and-glide held for five metres with legs near the surface.
                2. Kick on the side drill swum with the head still and in line.
                3. Front crawl swum looking down, with the waterline at the top of the head.
                4. A side-on clip showing hips near the surface.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A side-on clip shows your hips at or near the surface during easy front crawl, saved and noted in your log."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Practise push-and-glide in streamline from the wall"
                - "Swim kick on the side with the head in line and eyes down"
                - "Swim easy front crawl looking at the pool floor"
                - "Film one length side-on to check hip height"
            - name: Flutter kick from the hips with loose ankles
              description: |-
                ## Purpose
                Many adults kick from the knee with stiff ankles, which burns energy and can even move them backwards. A compact kick from the hips with relaxed, pointed feet mainly keeps the legs up, and for an adult distance swimmer that is the job it needs to do.

                ## Milestones
                1. Kick with a board, or arms in front, driven from the hips with nearly straight legs.
                2. Vertical kicking in deep water for 20 seconds with arms crossed.
                3. Kick on the back with knees staying under the surface.
                4. A kick that stays inside the body's shadow in a side-on clip.

                ## Notes
                Short fins help stiff ankles feel the right movement. Use them for part of each kick set, not all of it.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A 200 m kick set completed with knees under the surface and the kick inside the body line on film."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Swim 4 x 25 kick on your back with knees under the surface"
                - "Try 20 seconds of vertical kick in deep water by the wall"
                - "Wear short fins for half of each kick set"
                - "Film a kick length side-on to check knee bend"
            - name: Front crawl catch and pull with a high elbow
              description: |-
                ## Purpose
                The catch, the moment the hand and forearm start pressing water backwards, is where speed comes from, and a dropped elbow lets that water slip past. Learning to tip the fingers down and keep the elbow above the hand gives more push per stroke without swimming any harder.

                ## Milestones
                1. Front sculling swum for 4 x 25 with a pull buoy.
                2. Single-arm drill swum with the elbow staying above the hand at the catch.
                3. Strokes per length down by at least two at the same easy effort.
                4. An underwater clip showing the forearm vertical early in the pull.

                ## Notes
                Do not force the shoulder into a high elbow position it will not reach. A modest early bend is enough for most adult swimmers.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Strokes per 25 m down by at least two from baseline at the same easy pace, confirmed by an underwater clip."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Swim 4 x 25 front scull with a pull buoy"
                - "Practise single-arm front crawl with the other arm resting in front"
                - "Count strokes per length at easy effort before and after the block"
                - "Get an underwater clip of the catch where the pool allows filming"
            - name: Rotation and front-quadrant timing
              description: |-
                ## Purpose
                Swimming flat makes breathing harder and loads the shoulders, while rotating from the hips brings the bigger muscles in and means the head turns less to breathe. Pairing rotation with front-quadrant timing, where one hand waits ahead until the other nearly arrives, lengthens the stroke and settles the rhythm.

                ## Milestones
                1. Six-kick switch drill swum for 4 x 25 with clean rotation to each side.
                2. Catch-up drill swum with one hand always in front.
                3. Full stroke swum with hips and shoulders rotating together.
                4. Stroke count steady across a 200 m at easy pace.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A 200 m at easy pace swum with stroke count varying by no more than one per length, logged with the drills used."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Swim 4 x 25 six-kick switch drill with fins"
                - "Swim 4 x 25 catch-up drill"
                - "Swim 200 m full stroke rotating from the hips"
                - "Log strokes per length for each 25 of the 200"
            - name: Breaststroke timing with pull, breathe, kick, glide
              description: |-
                ## Purpose
                Breaststroke is the stroke most adults already swim, usually with the head held up and arms and legs working at the same moment so they cancel each other out. Learning the sequence of pull and breathe, then kick, then glide turns it from a tiring paddle into a relaxed stroke you can keep up for a kilometre.

                ## Milestones
                1. Breaststroke kick on the back with heels drawn up and feet turned out.
                2. A short pull and breath, with the head returning down between strokes.
                3. Two-kicks-one-pull drill swum to feel the glide.
                4. A 100 m swum with a clear glide in every stroke and the face going in the water.

                ## Notes
                If breaststroke kick hurts your knees, ease off and mention it to a coach; a dolphin or flutter kick with breaststroke arms is a common stopgap.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A 100 m breaststroke swum with the face in the water and a glide each stroke, with stroke count per length recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Swim 4 x 25 breaststroke kick on your back to check the feet"
                - "Practise pull and breathe with the face going back down"
                - "Swim two kicks for every pull for 4 x 25"
                - "Swim 100 m with a one-second glide and count the strokes"
            - name: Backstroke with a flat line and steady rotation
              description: |-
                ## Purpose
                Backstroke gives the shoulders a break from front crawl and is often the easiest stroke for nervous breathers, since the face stays clear. Getting the head still, the hips up and the arms entering little finger first makes it smooth enough to use in every cool-down.

                ## Milestones
                1. Back kick for 25 m with a still head and hips at the surface.
                2. Arms entering above the shoulder, little finger first, without crossing the middle.
                3. Your stroke count from the backstroke flags to the wall known and used.
                4. A 100 m backstroke swum in a straight line.

                ## Notes
                Learn your stroke count from the flags to the wall early. It prevents head bumps and makes backstroke turns possible later.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A 100 m backstroke swum straight, with your flags-to-wall stroke count recorded and used on every length."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Swim 4 x 25 back kick with arms by your sides"
                - "Practise one-arm backstroke checking where the hand enters"
                - "Count strokes from the flags to the wall three times"
                - "Swim 100 m backstroke as part of your cool-down"
            - name: Streamline push-offs and open turns
              description: |-
                ## Purpose
                In a 25 m pool a fifth of every length is spent at the wall and on the push-off, so a sloppy turn throws away speed you trained hard for. A tight streamline and a quick open turn, touching and turning on your side, are worth learning before tumble turns and save seconds in every set.

                ## Milestones
                1. A streamline push-off with arms locked over the head travelling five metres or more.
                2. An open turn with a quick touch, tuck and push-off on the side.
                3. Three or four kicks in streamline before the first stroke.
                4. Push-off distance checked against the lane rope markers.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Streamline glides of at least five metres from every wall during a 400 m swim, with the distance checked against the lane markers."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Practise streamline push-offs with hands stacked and arms by your ears"
                - "Measure your glide distance against the rope markers"
                - "Drill open turns on 8 x 25 with a quick touch and tuck"
                - "Add three streamline kicks before the first stroke off each wall"
            - name: Tumble turns without running out of breath
              description: |-
                ## Purpose
                Tumble turns keep the rhythm going and are expected in most masters squads, but many adults give up on them after swallowing water a few times. A step-by-step approach, from somersaults in the middle of the lane to approaching the wall at speed, takes most people a few weeks of short practice.

                ## Milestones
                1. Forward somersaults in the middle of the lane while humming out through the nose.
                2. A somersault after a few strokes, away from the wall.
                3. A tumble turn at the wall, pushing off on the back and rotating to the front.
                4. Tumble turns on every wall through a 200 m swim.

                ## Notes
                Hum or blow out through the nose while upside down; it stops water rushing up it. Practise only in lanes deep enough under your pool's rules.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "A 200 m swum with a tumble turn at every wall without stopping, recorded in your log."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Practise forward somersaults mid-lane while humming through the nose"
                - "Swim 4 x 25 with a somersault halfway down the length"
                - "Try a tumble turn at the wall, pushing off on your back"
                - "Swim 200 m with a tumble turn on every wall"
            - name: Butterfly body dolphin and two-kick timing
              description: |-
                ## Purpose
                Butterfly looks like brute strength, but it is mostly rhythm from the chest and hips. Learning body dolphin first, then single-arm fly, then the two-kick timing means you can swim 25 m of butterfly without exhaustion and use it in drill sets and the medley.

                ## Milestones
                1. Body dolphin on the front and side for 4 x 15 m, moving from the chest rather than the knees.
                2. Single-arm butterfly with a breath to the side swum for 4 x 25.
                3. Two kicks per stroke, one as the hands enter and one as they finish.
                4. A full 25 m of butterfly swum with a low forward breath.

                ## Notes
                Short fins make the rhythm far easier to find. Stop at the first sign of shoulder pain.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A full 25 m of butterfly swum with two kicks per arm stroke, filmed or watched by a coach."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Swim body dolphin with fins for 4 x 15 m"
                - "Swim 4 x 25 single-arm butterfly breathing to the side"
                - "Practise two kicks per stroke with fins on"
                - "Swim 25 m of full butterfly and ask someone to watch"
            - name: Fins, pull buoy, paddles and snorkel choices
              description: |-
                ## Purpose
                Training aids are cheap and easy to overuse: paddles too big for your shoulders, fins on every length, a pull buoy hiding a sinking kick. Choosing a small set and deciding which sets each one belongs in gets the benefit without leaning on them.

                ## Milestones
                1. The job of each aid written down: fins for kick and drills, pull buoy for the upper body, paddles for catch feel, snorkel for head position.
                2. Short training fins and a pull buoy bought first.
                3. Paddles chosen no larger than your hand, or left until your catch is sound.
                4. A rule written in your log for how much of each week uses each aid.

                ## Notes
                Start from the **Purchase decision** template. Large paddles load the shoulders heavily; build up slowly or skip them for now.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A chosen set of training aids is in your swim bag, with a written weekly limit for how much distance uses each one."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down what each training aid would do for your swimming"
                - "Buy short fins and a pull buoy first"
                - "Decide whether paddles suit your shoulders yet"
                - "Note a weekly limit for each aid in your log"
            - name: Choosing lessons, an improver class or a masters squad
              description: |-
                ## Purpose
                The right coaching depends on where you are: one-to-one lessons fix specific faults fast, an improver class gives structure at a gentle pace, and a masters squad gives written sets, lane mates and a coach on the deck. Comparing what is on offer against your goal and timetable avoids paying for a squad you cannot keep up with or lessons you have outgrown.

                ## Milestones
                1. Local options listed with times, cost and the level each expects.
                2. Taster or trial sessions tried where offered.
                3. One option chosen and booked for at least a term.
                4. Entry standards for the step after that noted, such as 400 m continuous for a squad.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One coaching option chosen from at least two compared, booked for a term, with entry standards for the following step written down."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List lessons, improver classes and masters squads within reach"
                - "Ask each what swimmers need to manage before joining"
                - "Book a taster or trial session with your top two"
                - "Book a full term with the option that fits your goal"
            - name: Fixing a crossover and scissor kick
              description: |-
                ## Purpose
                A hand crossing the centre line on entry pushes the hips sideways and triggers a scissor kick to rebalance, and together they are among the commonest faults on film. Fixing the entry first, wide and in line with the shoulder, usually calms the kick without separate work.

                ## Milestones
                1. The crossover and scissor kick both confirmed on a head-on clip.
                2. Hand entry practised in line with the shoulder using a wide-entry drill.
                3. Breathing checked as a cause, since lifting the head often sets off the scissor.
                4. A follow-up clip showing hands entering wide and the kick staying narrow.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A head-on clip taken after four weeks of drill work shows hands entering in line with the shoulders and no scissor kick on breathing strokes."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Film a head-on length to confirm where your hands enter"
                - "Swim 4 x 25 with hands entering at eleven and one o'clock"
                - "Swim with a centre-mount snorkel to separate breathing from the kick"
                - "Film again after four weeks and compare the two clips"
            - name: Stroke rate and distance per stroke experiment
              description: |-
                ## Purpose
                Faster swimming comes from more distance per stroke, a quicker stroke rate, or both, and most adults only ever try pulling harder. A small tempo beeper, or a watch that counts strokes, lets you test different rates over the same distance and find the combination that is quickest for the least effort.

                ## Milestones
                1. Strokes per length and time recorded at three different tempo settings.
                2. A swim golf score worked out for each, adding strokes and seconds for 50 m.
                3. The tempo that gives your best score identified.
                4. That tempo used in the next four weeks of endurance sets.

                ## Notes
                Change the tempo in small steps, a few hundredths of a second per stroke at a time.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Results at three tempos recorded with stroke counts and times, and a preferred tempo chosen and used for four weeks."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Borrow or buy a small tempo beeper that clips under your cap"
                - "Swim 3 x 50 at three different tempo settings"
                - "Add strokes plus seconds for each to get a swim golf score"
                - "Use the best tempo for a month of endurance sets"
            - name: Training in a 50 m pool after a 25 m pool
              description: |-
                ## Purpose
                Moving to a long-course pool halves the walls, so times are slower and the second half of every length is new territory. Planning a few weeks of adjustment, with longer rests and fresh benchmarks, avoids the gloom of comparing 50 m pool times with old 25 m ones.

                ## Milestones
                1. A 50 m pool and its long-course lane sessions found.
                2. New baseline times set for 100 m and 400 m in the long pool.
                3. Send-offs adjusted for fewer walls.
                4. Times kept in a separate column so short and long course are never mixed.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Separate long-course baselines for 100 m and 400 m recorded, with training send-offs adjusted for the 50 m pool."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find which nearby pools open a 50 m lane swim and when"
                - "Swim a relaxed session to get used to the length"
                - "Set new 100 m and 400 m times in the long pool"
                - "Add a separate long-course column to your log"
            - name: First non-stop 400 m of front crawl
              description: |-
                ## Purpose
                Four hundred metres, sixteen lengths of a 25 m pool, is where front crawl stops being a struggle from wall to wall and becomes something you can keep going. Building towards it with repeats on shrinking rests gives adult improvers a clear early milestone.

                ## Milestones
                1. 8 x 50 front crawl swum with 30 seconds' rest.
                2. 4 x 100 swum with 20 seconds' rest.
                3. 2 x 200 swum with 15 seconds' rest.
                4. 400 m swum without stopping, timed and logged.

                ## Notes
                Swim it at a pace you could hold for twice the distance. Starting too fast is the usual reason people stop at 250 m.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: event-completion
                success_criteria: "A continuous 400 m front crawl swim recorded with the date and time in your swim log."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Swim 8 x 50 with 30 seconds' rest to see where you start"
                - "Cut the rest by five seconds each week"
                - "Move to 4 x 100, then 2 x 200, as the rests shrink"
                - "Swim the full 400 m non-stop and log the time"
            - name: First continuous 1500 m swim
              description: |-
                ## Purpose
                Fifteen hundred metres is the classic distance pool event and the natural next target once 400 m feels comfortable. It takes most improvers three to six months of steady endurance sets, and it depends as much on rhythm and relaxed breathing as on fitness.

                ## Milestones
                1. 800 m swum continuously at an even pace.
                2. 1000 m swum in two halves with no more than 30 seconds' rest.
                3. A pace per 100 m chosen that you can hold for the full distance.
                4. 1500 m swum without stopping, timed with a split for each 500 m.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: event-completion
                success_criteria: "A continuous 1500 m swim logged with total time and 500 m splits within ten percent of each other."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Set your target pace from your latest 400 m time"
                - "Add 100 m to your longest continuous swim each week"
                - "Swim 1000 m in two halves with a short rest"
                - "Swim 1500 m non-stop and record each 500 m split"
            - name: Charity distance swim challenge
              description: |-
                ## Purpose
                Many pools and charities run sponsored challenges, such as 5 km over a month or a set distance in one session. Signing up gives a public reason to swim consistently, and spreading the distance across your weeks avoids a frantic last few days.

                ## Milestones
                1. A challenge chosen, with its distance, dates and rules noted.
                2. A fundraising page set up with a target.
                3. The distance split across your swims week by week.
                4. The challenge completed and logged, with supporters thanked.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The challenge distance completed within its dates, with every swim logged and the fundraising total recorded."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Choose a charity swim challenge and note its rules and dates"
                - "Set up a fundraising page with a target"
                - "Plan the distance across each week of the challenge"
                - "Post a thank-you with your final distance and total raised"
            - name: First masters gala
              description: |-
                ## Purpose
                Masters galas are friendly pool competitions with age groups, heats seeded on your entry time and races from 50 m upwards. Entering one gives a target race date, makes you learn starts and turns to the rules, and is far less intimidating than most adults expect.

                ## Milestones
                1. A masters or open gala found, usually through a club or your national swimming body's events list.
                2. Registration and any club membership required for entry sorted.
                3. One or two events entered with honest entry times.
                4. A race day plan written with warm-up times, heat sheet and when to report to the marshal.
                5. Your first official times recorded in your log.

                ## Notes
                Many galas require you to be a registered member of a swimming club. Check this well before the entry deadline.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "At least one event swum at a masters gala, with the official time recorded in your log."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Search for masters or open galas in the next six months"
                - "Check whether club registration is required to enter"
                - "Enter one or two events with your current best times"
                - "Write a race day plan with warm-up and marshalling times"
            - name: Swim technique camp or swimming holiday
              description: |-
                ## Purpose
                Several days of coached swimming, with video analysis and two sessions a day, can do what months of lane swims cannot. Whether it is a weekend clinic nearby or a week abroad, planning it into the year and arriving ready makes the most of the cost.

                ## Milestones
                1. Two or three camps or clinics compared on coaching ratio, video analysis, pool and price.
                2. One booked, with travel and time off arranged.
                3. Your current clips and goal sent to the coaches ahead.
                4. The corrections you were given written down and turned into four weeks of drill focuses back home.

                ## Notes
                Start from the **Trip** template. Raise your weekly distance beforehand so two sessions a day do not leave your shoulders wrecked by day three.
              priority: low
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A camp or clinic attended, with the coaches' corrections written down and turned into a four-week drill plan."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Compare three swim camps or clinics on coaching ratio and video"
                - "Book the one that fits your budget and leave"
                - "Raise your weekly distance in the six weeks before"
                - "Turn the coaches' corrections into four weeks of drill sessions"
            - name: Returning to swimming after years out of the pool
              description: |-
                ## Purpose
                People who swam as children or teenagers often come back expecting their old fitness and find that 200 m leaves them gasping. Starting with short sessions and generous rests, and rebuilding technique before distance, gets you back to regular swimming without the shoulder ache that ends many comebacks in week three.

                ## Milestones
                1. A first month of two or three short sessions of 800 to 1200 m with plenty of rest.
                2. Old technique habits checked on film against how strokes are coached today.
                3. A new baseline set rather than comparing with past times.
                4. Weekly distance built gradually, by about a tenth a week.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Four weeks of two or three swims a week logged, with a fresh baseline and weekly distance rising no more than 10 percent a week."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Plan a first week of two short sessions with rests between lengths"
                - "Film a length to see what has changed since you last swam"
                - "Set a new baseline instead of chasing old times"
                - "Raise weekly distance by no more than a tenth each week"
            - name: Parent swim sessions during children's lesson times
              description: |-
                ## Purpose
                Parents often sit in the viewing gallery for half an hour every week while their children have lessons, at a pool that may have a lane swim running at the same time. Swapping that time for your own swim, with a plan for who keeps an eye on the children, turns dead time into a regular session.

                ## Milestones
                1. Lane swim times checked against the children's lesson slots.
                2. Supervision arranged: a swap with another parent, a partner, or lessons where children can be left.
                3. A 30-minute session written for that slot.
                4. That slot swum for six weeks running.

                ## Notes
                Check the pool's rules on children left unattended in changing rooms and the gallery, which vary by age.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A swim logged during the children's lesson slot in at least five of six consecutive weeks."
                cadence: rolling
              tasks:
                - "Check whether a lane swim runs during your children's lessons"
                - "Agree a supervision swap with another parent"
                - "Write a 30-minute session you can swim in that slot"
                - "Swim your own session during the children's lesson @recurring(weekly:sat)"
            - name: Runner or cyclist adding pool swims
              description: |-
                ## Purpose
                Runners and cyclists often take up swimming for aerobic work without more impact, then flail because their fitness does not transfer to the water. Treating the first months as technique sessions, with drills and short repeats, gets far more from the pool than thrashing out lengths.

                ## Milestones
                1. Two swims a week fitted around running or riding without replacing key sessions.
                2. A drill-heavy first month focused on body position and breathing.
                3. An easy swim placed the day after your longest run or ride.
                4. A continuous 800 m swum comfortably.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Two swims a week logged for eight weeks alongside running or cycling, and a continuous 800 m swum comfortably."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Mark two swim slots that do not clash with key runs or rides"
                - "Make the first month's swims mainly drills and short repeats"
                - "Swim an easy recovery session after your longest run or ride @recurring(weekly:mon)"
                - "Note how your legs feel the day after each swim"
            - name: Swimming in later life with stiff shoulders or hips
              description: |-
                ## Purpose
                Water takes your weight, which is why swimming is so often recommended to older adults, but a stiff shoulder, neck or hip can make the classic strokes uncomfortable. Choosing strokes, kit and session shapes that suit your body keeps you swimming for decades instead of giving up after a sore month.

                ## Milestones
                1. Any joint limits discussed with your clinician or physiotherapist.
                2. Strokes adapted, for example backstroke or front crawl with a snorkel instead of head-up breaststroke.
                3. A warm water or quieter session found if cold or crowded pools put you off.
                4. A regular session of 20 to 40 minutes kept up for two months.

                ## Notes
                Head-up breaststroke strains the neck and lower back. Putting the face in, or using a front snorkel, usually helps.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A swim routine adapted to your joints, with any professional advice noted, kept up for at least two months."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Note which strokes or movements feel uncomfortable now"
                - "Ask your physiotherapist or doctor which strokes suit your joints"
                - "Try a front snorkel to swim face down without turning the neck"
                - "Find a warm water or quiet session at a nearby pool"
            - name: Joining a masters squad and keeping up in the lane
              description: |-
                ## Purpose
                Squad swimming gives you a coach on the deck and lane mates to chase, but the first weeks can be humbling: sets go by fast, the jargon is new and everyone seems to tumble turn. Preparing beforehand and choosing the right lane makes the first month about learning rather than surviving.

                ## Milestones
                1. The squad's entry standard met, often 400 m continuous front crawl and an understanding of send-offs.
                2. A trial session swum in the lane the coach suggests.
                3. Lane order learned: who leads, five-second gaps, letting faster swimmers past at the wall.
                4. Two squad sessions a week attended for a month.

                ## Notes
                Starting in a lane that is slightly too easy is better than being lapped in the wrong one. Coaches move people up quickly.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "At least eight squad sessions attended in the first month, swum in a lane where you made most send-offs."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Ask the squad coach what swimmers need to manage before joining"
                - "Swim a trial session in the lane the coach recommends"
                - "Learn your lane's order and the five-second gap rule"
                - "Ask the coach for one technique point after a squad session @recurring(monthly:9)"
            - name: 200 m individual medley and its transitions
              description: |-
                ## Purpose
                Individual medley swims butterfly, backstroke, breaststroke and front crawl in that order, and the transitions between them decide as much as the strokes do. Learning a legal turn for each change and pacing each 50 m turns four strokes into one race, and the training spreads the load across the shoulders.

                ## Milestones
                1. Each of the four strokes swum legally for 50 m.
                2. The three medley turns learned to the rules: fly to back, back to breast, breast to free.
                3. A 100 m individual medley swum without disqualifiable faults.
                4. A 200 m individual medley swum and timed with 50 m splits.

                ## Notes
                Touch and turn rules are set by your national swimming body and are strict about two-hand touches on butterfly and breaststroke. Read the current rules or ask a coach.
              priority: low
              frontmatter:
                mode: building
                output_kind: event-completion
                success_criteria: "A 200 m individual medley swum to the rules and timed, with 50 m splits recorded in your log."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Read the current turn and touch rules for each medley transition"
                - "Practise the backstroke to breaststroke turn on 8 x 25"
                - "Swim a 100 m medley and ask a coach to check the turns"
                - "Swim and time a 200 m medley with 50 m splits"
            - name: Racing starts from the blocks and backstroke starts
              description: |-
                ## Purpose
                Starts are worth a metre or more in every race and are the one skill lane swimmers rarely get to practise. Learning a track start from the blocks and a backstroke start from the wall, with a coach and in water deep enough under your pool's rules, is the last piece for anyone racing at galas.

                ## Milestones
                1. Pool rules on minimum depth for diving and racing starts checked.
                2. Sitting and kneeling dives learned from the side under a coach.
                3. A track start from the blocks with a tight streamline entry.
                4. A backstroke start with feet placed to the current rules.

                ## Notes
                Never dive where the water is shallow. Practise starts only in sessions where blocks are allowed and a coach or lifeguard has agreed to it.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A track start and a backstroke start practised under a coach in permitted water, with a time to 15 m recorded for each."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the pool or club where and when starts can be practised"
                - "Learn sitting and kneeling dives from the side with a coach"
                - "Practise track starts from the blocks with a streamline entry"
                - "Time each start to the 15 m mark"
            - name: Masters championship season plan
              description: |-
                ## Purpose
                Swimmers chasing age group rankings or a championship qualifying time need the season built backwards from that meet: a base phase, a speed phase and a taper. A written plan with the key galas, test points and taper dates keeps the year coherent rather than a run of unrelated blocks.

                ## Milestones
                1. The target championship and its qualifying times found for your age group.
                2. Base, build and taper phases laid out backwards from the meet date.
                3. Two or three warm-up galas placed in the season to test progress.
                4. A taper of around two weeks agreed with your coach.
                5. The season reviewed after the championship and next year's target set.

                ## Notes
                Start from the **Training program** template. Qualifying windows and age group bands are set by each championship, so check the current rules early.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written season plan with phases, warm-up galas and taper dates working back from a named championship, reviewed after the meet."
                cadence: cyclic
                effort_hours_estimate: "10"
              tasks:
                - "Find the target championship's date and age group qualifying times"
                - "Lay out base, build and taper phases backwards from the meet"
                - "Place two or three warm-up galas in the plan"
                - "Check the next season's masters calendar and qualifying times @recurring(yearly)"
            - name: Helping coach adult improvers at your club
              description: |-
                ## Purpose
                Experienced club swimmers are often asked to help on the poolside with adult improvers, and explaining a stroke to someone else sharpens your own. Taking an assistant role, and perhaps a recognised teaching qualification, gives back to the club and keeps you close to the sport when your own racing slows.

                ## Milestones
                1. Your club's background checks, safeguarding course and any first aid training completed.
                2. A regular assistant slot agreed with the lead coach.
                3. One recognised swimming teaching or coaching course researched or booked.
                4. A term of assisting completed, with feedback from the lead coach.

                ## Notes
                Requirements vary by country and club. Ask the club welfare officer which checks apply before you start.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A full term spent assisting the adult improvers group, with background checks done and the lead coach's feedback recorded."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Ask the lead coach whether the improvers group needs an assistant"
                - "Complete the club's background check and safeguarding course"
                - "Research a recognised swimming teaching qualification"
                - "Help on poolside at the improvers session @recurring(weekly:wed)"
---

# Pool Swimming Technique

This area is for anyone getting better in the pool, from adults who never learned to swim to masters squad swimmers chasing times. It starts with the foundations (a pool and its timetable, kit that stays put, water confidence and first lessons, lane etiquette, a timed baseline, a filmed stroke audit, a log and a six-month goal), then the weekly machinery of drill, endurance and threshold sets with monthly tests and film checks, the technique of breathing, body position, kick, catch, each of the four strokes and turns, decisions about training aids and coaching, milestone swims and galas, versions for returners, parents, runners and cyclists, older swimmers and new squad members, and finally the individual medley, racing starts, a championship season and helping coach others.

What repeats is a Sunday plan for a three-swim week, a Tuesday drill session, a Thursday endurance set and a Saturday threshold set, a twice-weekly shoulder band routine, a monthly speed test, film check and block review, and a quarterly coached technique check and kit inspection. The Purchase decision, Course, Metrics log, Habit tracker, Trip and Training program templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
