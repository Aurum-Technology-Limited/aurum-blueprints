---
id: fitness-sport.bouldering-indoor-climbing
name: Bouldering & Indoor Climbing
description: "From your first induction and pair of shoes to steady grade progress at the wall: footwork and movement skills, sensible finger training, skin and kit care, and sessions planned around the injuries climbers actually get."
category: personal
version: 1.0.0
tags: [fitness-sport, bouldering-indoor-climbing, athlete, everyone, bouldering, finger-strength, climbing-technique, grades]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - metrics-log
    - habit-tracker
    - training-program
    - trip
  pillars:
    - name: Fitness & Sport
      emoji: "🏋️"
      description: "Training, play and competition: building strength, endurance and skill in a sport or a gym, structuring blocks of work around events, recovering properly, and keeping the sessions honest with a log rather than a feeling."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Bouldering & Indoor Climbing
          description: "Progressing through bouldering and indoor climbing grades with technique, finger strength training and injury-aware sessions at the wall."
          projects:
            - name: Wall induction and auto-belay sign-off
              description: |-
                ## Purpose
                Every climbing wall asks new visitors to complete an induction before they can boulder or use the ropes unsupervised, and many people only half-listen to it. Doing it properly, with the wall's rules on mats, auto-belays and supervised children understood, means you can climb on your own from the next visit without staff stopping you mid-session.

                ## Milestones
                1. The wall's induction booked and completed, with your registration card or app account active.
                2. The wall's rules on bouldering mats, walking zones and children written down in a short note.
                3. The auto-belay clip-in and check routine demonstrated back to a member of staff.
                4. You are cleared to climb unsupervised and know which areas need a separate qualification.

                ## Notes
                Rules differ between walls, so repeat this at every new wall you visit. A top-rope belay test is usually a separate assessment.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: event-completion
                success_criteria: "You hold an induction sign-off at your local wall and have written down its rules on mats, auto-belays and supervised areas."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Book an induction slot at your nearest climbing wall"
                - "Ask staff which areas need a belay test on top of the induction"
                - "Practise the auto-belay clip-in and gate check with staff watching"
                - "Write the wall's mat and walking-zone rules in a short note"
            - name: Choosing your first climbing shoes
              description: |-
                ## Purpose
                Rental shoes are stretched, shared and usually a size too big, which makes every small foothold feel like guesswork. A first pair of flat, comfortable all-round shoes, fitted snug but not painful, is the single piece of kit that changes how the wall feels, and it does not need to be the aggressive downturned model the strong climbers wear.

                ## Milestones
                1. A shortlist of three flat or slightly cambered beginner shoes, with prices.
                2. At least two pairs tried on in person, late in the day, standing on a small edge.
                3. A pair bought that is snug with toes flat or slightly bent, and no sharp pain after ten minutes.
                4. The model and size recorded so a replacement or resole is easy later.

                ## Notes
                Start from the **Purchase decision** template. Sizes vary wildly between brands, so ignore your street shoe size and go by fit.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A pair of beginner climbing shoes bought after trying at least two models, with model and size written in your kit notes."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the wall staff which beginner shoes they see fit most people well"
                - "Shortlist three flat all-round models within your budget"
                - "Try two models on in a shop or at the wall's demo day"
                - "Record the model and size you bought in your kit notes"
            - name: Membership, passes and home wall decision
              description: |-
                ## Purpose
                Climbing walls price entry in several ways: day passes, ten-visit cards, off-peak memberships and full memberships with classes included. Working out how often you will really climb, and which wall suits your style and timetable, avoids paying full price for a membership you use twice a month or paying day rates three times a week.

                ## Milestones
                1. Every wall within a reasonable travel time listed with its bouldering, lead and training facilities.
                2. Your realistic weekly visits and usual times written down.
                3. The cost per visit worked out for each pricing option at your top two walls.
                4. A home wall and pass type chosen and paid for.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A home wall and pass type chosen, with a written cost per visit comparison for at least three pricing options."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every climbing wall within forty minutes of home or work"
                - "Note your likely visits per week and the times you can go"
                - "Work out the cost per visit for day passes, multi-visit cards and membership"
                - "Buy the pass or membership that comes out cheapest for your pattern"
            - name: Falling and landing practice on the mats
              description: |-
                ## Purpose
                Most bouldering injuries happen on the way down, not on the wall: ankles rolled on the gap between mats, wrists broken by a straight-arm landing, or a fall onto someone walking underneath. Practising controlled falls from low heights until landing on two feet and rolling back is automatic makes the top of a problem far less frightening.

                ## Milestones
                1. The safe landing position learned: feet together, knees soft, roll onto your back, arms tucked.
                2. Ten controlled falls practised from about knee height.
                3. Ten falls practised from half height on a vertical wall.
                4. Downclimbing or jumping from the top of a problem done without hesitation on easy grades.

                ## Notes
                Never put a hand out behind you to catch a fall. Check the landing zone is clear of people and bags before every attempt.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Twenty controlled practice falls completed from knee and half height, landing on both feet and rolling back each time."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Ask a staff member or coach to demonstrate a safe bouldering fall"
                - "Practise ten falls from knee height at the start of your next session"
                - "Practise ten falls from half height on a vertical problem"
                - "Climb to the top of three easy problems and downclimb or jump off cleanly"
            - name: Bouldering grade baseline across three sessions
              description: |-
                ## Purpose
                Wall grades shift from setter to setter and from one wall to the next, so a single good evening says little about your level. Recording your hardest flash, your hardest send and how many problems you completed in each grade over three sessions gives an honest starting point to measure every later change against.

                ## Milestones
                1. The grading system at your wall noted, colour circuits or Font and V grades, with a rough conversion.
                2. Three sessions logged with every problem tried, by grade, and whether it was flashed, sent or not finished.
                3. Your baseline written as hardest flash, hardest send and number of sends per grade.
                4. A date set to repeat the baseline in three months.

                ## Notes
                Start from the **Metrics log** template. Count only problems you climbed from start hold to top without stepping off.
              priority: high
              deadlineOffsetDays: 28
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A metrics log holding three logged sessions and a written baseline of hardest flash, hardest send and sends per grade."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down how your wall grades its problems and the rough Font and V conversion"
                - "Set up a baseline log from the metrics log template"
                - "Log every problem tried across your next three sessions"
                - "Summarise your hardest flash, hardest send and sends per grade"
            - name: Fifteen-minute climbing warm-up routine
              description: |-
                ## Purpose
                Cold fingers on small holds are where most pulley strains start, and the temptation to jump on a friend's project in the first five minutes is strong. A fixed fifteen-minute routine of general movement, shoulder activation and a ladder of easy to moderate problems makes warming up automatic rather than something negotiated each visit.

                ## Milestones
                1. A written routine: five minutes of general movement, five of shoulder and finger activation, five of easy climbing.
                2. A ladder of four problems chosen that climb from easy to two grades below your limit.
                3. The routine done before every session for four weeks.
                4. A note added for cold days or late sessions, when the warm-up runs longer.

                ## Notes
                Start from the **Habit tracker** template. Open-hand holds and jugs first, small crimps last.
              priority: high
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A written fifteen-minute warm-up completed before every session for four consecutive weeks, ticked in a habit tracker."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a three-part fifteen-minute warm-up on your phone"
                - "Pick four warm-up problems rising from easy to two grades below your limit"
                - "Set up a habit tracker for the warm-up"
                - "Tick the warm-up off after each session for four weeks"
            - name: Finger, elbow and shoulder readiness screen
              description: |-
                ## Purpose
                Fingers adapt to climbing far more slowly than muscles do, so new climbers often get strong enough to injure a pulley within their first year. Writing down past hand, elbow and shoulder problems, and getting a professional view on any current pain before training hard, tells you which loads to approach carefully.

                ## Milestones
                1. Past injuries to fingers, wrists, elbows and shoulders listed with dates and treatment.
                2. Any current pain or clicking described in a short note with when it happens.
                3. A physiotherapist, ideally one who sees climbers, consulted if anything on the list is current.
                4. Their advice on what to avoid or build slowly written into your training notes.

                ## Notes
                A pop in a finger followed by pain or swelling needs an assessment, not another attempt. This screen organises information for a professional; it is not a diagnosis.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated list of past and current hand, elbow and shoulder problems is filed, with professional advice recorded for anything current."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List past finger, wrist, elbow and shoulder injuries with rough dates"
                - "Describe any current pain, clicking or stiffness and when it shows up"
                - "Find a physiotherapist who regularly treats climbers"
                - "Write their advice into the front of your training notes"
            - name: First three-month climbing goal
              description: |-
                ## Purpose
                Without a target, sessions drift into repeating the same favourite problems and progress stalls without anyone noticing. Picking one measurable goal for the next twelve weeks, such as sending three problems at the next grade or climbing three times a week, gives every session a point and makes the quarterly review meaningful.

                ## Milestones
                1. Your baseline read and one goal chosen that is a grade or a habit, not a feeling.
                2. The goal written with a date twelve weeks out.
                3. Two supporting changes chosen, such as more slab or a technique class.
                4. The goal shared with one climbing partner who will ask about it.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "One written, measurable climbing goal dated twelve weeks ahead, with two supporting changes and one partner told."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Read your grade baseline and note the grade where sends drop off"
                - "Write one measurable goal with a date twelve weeks from today"
                - "Choose two changes to your sessions that support the goal"
                - "Tell a climbing partner the goal and the date"
            - name: Weekly climbing schedule with rest days
              description: |-
                ## Purpose
                Two or three sessions a week with at least one full day between them is where most recreational climbers make steady progress, while climbing four days running is where tendons complain. Fixing which evenings you climb, which are rest days and what happens when work or family moves things keeps the week sustainable.

                ## Milestones
                1. Two or three regular climbing slots fixed in your calendar.
                2. At least one rest day between hard sessions built into the plan.
                3. A rule written for missed sessions: move it or skip it, never double up.
                4. The schedule followed for six weeks with changes noted.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly schedule of two or three sessions with rest days between, kept for six weeks with any changes recorded."
                cadence: rolling
              tasks:
                - "Block two or three climbing evenings in your calendar for the next month"
                - "Mark the rest days between them"
                - "Write a one-line rule for what happens when a session is missed"
                - "Plan next week's sessions around work and family plans @recurring(weekly:sun)"
            - name: Climbing session logbook
              description: |-
                ## Purpose
                Memory flatters: the problem you nearly did feels sent, and the month of skipped sessions feels like one week. A short log after each session, with problems tried, attempts, sends and any finger niggles, shows which grades and styles are moving and which are not.

                ## Milestones
                1. A log set up with date, wall, problems by grade and style, attempts, result and notes.
                2. Every session logged within a day for one month.
                3. A weekly total of sessions, attempts and sends added.
                4. The first month read back with two patterns noted.

                ## Notes
                Keep it under three minutes per session or it will not last. A notes app works as well as a dedicated climbing app.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A logbook with every session from the last month recorded and weekly totals of sessions, attempts and sends."
                cadence: rolling
              tasks:
                - "Create a logbook with columns for grade, style, attempts and result"
                - "Log tonight's session or your most recent one from memory"
                - "Add up the week's sessions, attempts and sends @recurring(weekly:mon)"
                - "Read the month back and write down two patterns you see"
            - name: Session order of warm-up, limit, volume, cool-down
              description: |-
                ## Purpose
                Sessions that start on hard problems when you are cold and finish with ten tired attempts on the same move waste both fitness and skin. A simple order, warm-up, then limit attempts while fresh, then volume on easier problems, then a short cool-down, puts the hardest climbing where it does the most good.

                ## Milestones
                1. A session template written with times for each block.
                2. Limit attempts capped, for example at six tries per problem, with rests of three minutes or more.
                3. A volume block of easier problems added after limit work.
                4. Four weeks of sessions run in this order and noted in the log.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written session template used for four consecutive weeks, with each session's blocks noted in the logbook."
                cadence: rolling
              tasks:
                - "Write a session template with times for warm-up, limit, volume and cool-down"
                - "Set a cap on attempts per limit problem and a minimum rest between tries"
                - "Choose five volume problems two grades below your limit for the next session"
                - "Note in the log whether each session followed the template"
            - name: Weekly skin and fingertip care
              description: |-
                ## Purpose
                Skin is the limiting factor on many evenings: a split tip or a torn callus can end a session and a week. Filing calluses flat, keeping skin hydrated without softening it, and carrying tape and a small file in your bag keeps you climbing more of the sessions you planned.

                ## Milestones
                1. A skin kit assembled: nail file or sandpaper, nail clippers, climbing balm and finger tape.
                2. Calluses filed flat and nails trimmed once a week.
                3. A routine for flappers learned: trim loose skin, clean, tape, rest the finger.
                4. Six weeks of the weekly routine logged with fewer skin-ended sessions.

                ## Notes
                Very dry skin slips and very soft skin tears. Balm goes on after climbing, not before.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A skin kit in your climbing bag and a weekly filing and balm routine kept for six weeks, with skin-ended sessions noted."
                cadence: rolling
              tasks:
                - "Put a nail file, clippers, balm and tape into your climbing bag"
                - "File calluses flat, trim nails and apply balm @recurring(weekly:wed)"
                - "Look up how to trim and tape a flapper and save the steps"
                - "Note any session ended early by skin in your logbook"
            - name: Monthly grade pyramid review
              description: |-
                ## Purpose
                A grade pyramid shows how many problems you have sent at each grade, and a healthy one has a broad base under each new top grade. Building it from your log once a month reveals whether you are ready to push higher or need more volume below your limit first.

                ## Milestones
                1. The month's sends counted by grade from your logbook.
                2. A pyramid drawn with your top grade and the three grades below it.
                3. A rule of thumb applied, such as roughly two sends at each grade for every one at the grade above.
                4. One adjustment for next month written down.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A grade pyramid drawn each month from logged sends, with one written adjustment for the following month."
                cadence: rolling
              tasks:
                - "Count last month's sends by grade from your logbook"
                - "Draw your pyramid for your top grade and the three below it"
                - "Build and compare this month's pyramid with the previous one @recurring(monthly:9)"
                - "Write one change for next month based on where the pyramid is thin"
            - name: Rolling list of three limit projects
              description: |-
                ## Purpose
                Projects at the edge of your ability teach more than another flash, but only if you keep returning to them before the set comes down. Keeping a short list of three problems at or just above your top grade, each in a different style, gives structure to the limit block of every session.

                ## Milestones
                1. Three problems chosen at or above your hardest send, each a different style.
                2. Each project's crux noted with the move or position that stops you.
                3. Progress on each logged session by session.
                4. Any sent or stripped problem replaced within a week.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A list of three current limit projects in different styles, each with a noted crux and logged progress, kept current every month."
                cadence: rolling
              tasks:
                - "Pick three problems at or above your hardest send in three different styles"
                - "Write the crux move for each in a sentence"
                - "Photograph each project's start holds so you can find them again"
                - "Review the three projects and replace any you have sent or lost to a reset @recurring(monthly:16)"
            - name: Reset calendar for fresh problems
              description: |-
                ## Purpose
                Walls reset sections on a rotation, and climbers who know the schedule get to try new problems while they are fresh, before the holds are polished and the beta is shared. Tracking which sections reset when helps you plan sessions for onsight attempts and avoid losing a project the week before you send it.

                ## Milestones
                1. Your wall's reset rotation found on its website, app or noticeboard.
                2. A calendar note for each section's next reset date.
                3. One session a fortnight aimed at a freshly reset section for flash attempts.
                4. Projects due to be stripped prioritised in the sessions before their reset.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A calendar holding your wall's reset dates, with at least two flash sessions on newly set sections each month."
                cadence: rolling
              tasks:
                - "Find your wall's reset schedule on its website, app or noticeboard"
                - "Add each section's next reset date to your calendar"
                - "Plan a flash session on the newest section within a week of each reset"
                - "Check the coming month's reset dates and update your calendar @recurring(monthly:2)"
            - name: Weekly finger and elbow load check-in
              description: |-
                ## Purpose
                Pulley strains and elbow tendon pain rarely arrive without warning: stiffness the morning after, a twinge on crimps, an elbow that aches lifting a kettle. Scoring how fingers and elbows feel once a week, against how hard you climbed, catches the warning signs while a lighter week can still fix them.

                ## Milestones
                1. A simple 0 to 10 score for fingers, elbows and shoulders added to your log.
                2. A threshold agreed with yourself, such as any score of 3 or more for two weeks running triggers a lighter week.
                3. Eight weeks of scores recorded beside weekly session counts.
                4. Any persistent pain referred to a physiotherapist rather than climbed through.

                ## Notes
                Sudden sharp pain with a pop, swelling or bruising at the base of a finger needs prompt assessment.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weeks of finger, elbow and shoulder scores logged, with any score of 3 or more acted on within a week."
                cadence: rolling
              tasks:
                - "Add finger, elbow and shoulder score columns to your log"
                - "Write down the score that triggers a lighter week"
                - "Score fingers, elbows and shoulders after the week's last session @recurring(weekly:sat)"
                - "Book a physiotherapist if any score stays at 3 or more for two weeks"
            - name: Shoe resole and kit inspection cycle
              description: |-
                ## Purpose
                Climbing shoes wear through at the big toe first, and waiting until the rand is gone turns a cheap resole into a new pair. Checking shoes, chalk bag, brushes and tape every few months keeps kit working and spreads the cost of replacing it.

                ## Milestones
                1. A kit list with purchase dates for shoes, chalk bag, brushes and harness if you rope climb.
                2. Shoe toe rubber checked for thinning before it reaches the rand.
                3. A local or postal resoler found with price and turnaround.
                4. A spare pair, or a plan for climbing during a resole, decided.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated kit list exists and shoes are sent for resole before the rand wears through, with every inspection noted."
                cadence: cyclic
              tasks:
                - "List your climbing kit with purchase dates"
                - "Find a resoler and note their price and turnaround time"
                - "Inspect shoe toe rubber, rands and chalk bag for wear @recurring(quarterly)"
                - "Decide whether you need a second pair for resole weeks"
            - name: Quarterly climbing goal and progress review
              description: |-
                ## Purpose
                Three months is long enough to see whether a grade has moved and short enough to change course before a season is gone. Reading back the log, the grade pyramid and the finger scores every quarter, then setting the next goal, keeps the year from becoming twelve months of the same sessions.

                ## Milestones
                1. The quarter's goal marked as met, partly met or missed, with the reason.
                2. Grade pyramid, session count and finger scores compared with the previous quarter.
                3. One thing to keep, one to stop and one to start written down.
                4. The next quarter's goal dated and added to your notes.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A written quarterly review comparing grades, sessions and finger scores with the last quarter, ending in a dated new goal."
                cadence: cyclic
              tasks:
                - "Mark last quarter's goal as met, partly met or missed"
                - "Ask the agent to summarise the quarter's log into grades, sessions and finger scores"
                - "Write one thing to keep, stop and start"
                - "Hold the quarterly review and set the next goal @recurring(quarterly)"
            - name: Antagonist and shoulder strength for climbers
              description: |-
                ## Purpose
                Pulling all session with the shoulders rolled forward builds a posture and a muscle imbalance that physiotherapists see in climbers all the time. Two short sessions a week of pressing, rotator cuff and scapular work balance the pulling and keep shoulders healthy on steep terrain.

                ## Milestones
                1. A twenty-minute routine written: push-ups or dips, external rotations, scapular pull-ups and face pulls.
                2. Starting loads and reps recorded for each exercise.
                3. The routine done twice a week for eight weeks.
                4. Loads or reps progressed at least twice in the eight weeks.

                ## Notes
                Light bands are enough for rotator cuff work. If a movement hurts the shoulder, stop and ask a physiotherapist for an alternative.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A twenty-minute antagonist routine done twice a week for eight weeks, with loads or reps progressed at least twice."
                cadence: rolling
              tasks:
                - "Write a twenty-minute push and shoulder routine with four exercises"
                - "Buy or borrow a light resistance band for rotator cuff work"
                - "Record starting reps and loads for each exercise"
                - "Do the shoulder and push routine after climbing or at home @recurring(weekly:tue,fri)"
            - name: Precise footwork and silent feet drills
              description: |-
                ## Purpose
                Feet are where most beginners lose grades: sloppy placements, scraping toes and weight on the arms when it should be on the legs. Six weeks of deliberate drills, silent feet, look the foot onto the hold, and inside and outside edge use on easy terrain, moves the effort from forearms to legs.

                ## Milestones
                1. Three drills learned: silent feet, eyes on the foothold until placed, and precise toe placement on small edges.
                2. Ten minutes of drills done at the start of each session for six weeks.
                3. A video taken on the same easy problem at week one and week six.
                4. A noticeable drop in foot slips recorded in your log.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Six weeks of ten-minute footwork drills logged, with before and after videos of the same problem showing quieter, more accurate feet."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Film yourself on an easy problem to record your current footwork"
                - "Learn the silent feet and inside and outside edge drills"
                - "Do ten minutes of silent feet traverses at the start of each session @recurring(weekly:mon)"
                - "Film the same problem after six weeks and compare"
            - name: Hips to the wall with flags and drop knees
              description: |-
                ## Purpose
                Straight arms and hips close to the wall let you reach further for less effort, and the flag and drop knee are the two positions that make that possible on vertical and steep terrain. Learning when each one works, and practising both until they appear without thinking, is one of the clearest technique steps in early climbing.

                ## Milestones
                1. The back flag, inside flag and drop knee each learned on an easy problem.
                2. Five problems climbed using each technique deliberately.
                3. A partner or coach asked to point out moves where you squared up instead of turning.
                4. The techniques showing up unprompted on problems at your grade.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five problems climbed with each of back flag, inside flag and drop knee, confirmed by a partner or coach watching."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Watch a short technique video on flagging and drop knees"
                - "Climb an easy problem three times using a back flag on each move"
                - "Find five problems where a drop knee makes a move easier"
                - "Ask a partner to call out when you square up to the wall"
            - name: Heel hooks and toe hooks
              description: |-
                ## Purpose
                Hooking with heels and toes turns your legs into a third and fourth arm on overhangs and roofs, and modern setting relies on it heavily. Practising both on purpose, with the hamstrings and core engaged rather than just resting a foot, opens a whole class of problems that otherwise feel impossible.

                ## Milestones
                1. Heel hooks practised on large holds with the hamstring pulling, not just resting.
                2. Toe hooks practised to stop the body swinging when a hand comes off.
                3. Three problems sent that need a heel or toe hook at the crux.
                4. A note made of which shoes hook well and which slip.

                ## Notes
                Heel hooks put real load through the knee and hamstring. Build up gradually and stop if you feel a pull behind the knee.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three problems sent where a heel or toe hook is the crux move, logged with a note on the hook used."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Practise five heel hooks on jugs on a slightly overhanging wall"
                - "Practise holding a toe hook while taking one hand off"
                - "Find three problems with a hook at the crux and add them to your projects"
                - "Note in your kit list how well each pair of shoes hooks"
            - name: Reading a problem before you climb it
              description: |-
                ## Purpose
                Reading the sequence from the ground, hand by hand and foot by foot, is the habit that separates flashing a problem from falling off the third move. Practising it deliberately, by planning out loud and comparing the plan with what really happened, makes onsight attempts far more successful and wastes less skin.

                ## Milestones
                1. A routine for reading: start holds, crux, rests, top, then hands and feet in order.
                2. Ten problems read out loud or mimed before the first attempt.
                3. The accuracy of each plan noted after climbing.
                4. Your flash rate at one grade below your limit compared before and after.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten problems read and mimed before attempting, with plan accuracy noted and flash rates compared before and after."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write a five-step reading routine on a card for your bag"
                - "Mime the full sequence of one problem before trying it"
                - "Read ten problems before first attempts and note how close each plan was"
                - "Compare your flash rate a grade below your limit with last month"
            - name: Slab and balance climbing
              description: |-
                ## Purpose
                Slab is the style most indoor climbers avoid, which is why it so often caps their grade in competitions and on reset days. Trusting smears, keeping weight over the feet and moving slowly on low-angle walls is a learnable skill, and twelve weeks of regular practice usually turns it from dreaded to manageable.

                ## Milestones
                1. One slab problem included in every session for twelve weeks.
                2. Smearing practised on blank wall between holds with hands on big holds.
                3. Three slab problems sent at one grade below your overall limit.
                4. Slab added as its own line in your grade pyramid.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Twelve weeks of at least one slab problem per session, ending with three slab sends one grade below your overall limit."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Find the slab section at your wall and note its easiest three problems"
                - "Practise smearing on blank wall while holding large handholds"
                - "Add one slab problem to every session for twelve weeks"
                - "Log slab sends as a separate style in your grade pyramid"
            - name: Steep wall and overhang technique
              description: |-
                ## Purpose
                Steep walls punish bent arms and dangling feet within a few moves. Learning to keep tension through the core, keep toes on the wall, twist the hips into the wall and climb quickly between rests is what turns the overhang from a pump test into a technical style.

                ## Milestones
                1. Body tension drills practised: keeping feet on through hand moves on steep terrain.
                2. Twist-locks and hip turns used deliberately on five steep problems.
                3. A comparison of straight-arm versus bent-arm climbing filmed on one problem.
                4. Three steep problems sent at your current top grade.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three overhanging problems sent at your current top grade, with a filmed comparison of straight-arm and bent-arm technique."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Climb three easy steep problems keeping both feet on through every move"
                - "Film one steep problem climbed with straight arms and then with bent arms"
                - "Practise twisting your hip into the wall on five steep moves"
                - "Choose one steep project at your top grade"
            - name: Dynamic moves and competition-style coordination
              description: |-
                ## Purpose
                Modern setting is full of dynos, run-and-jumps and coordination moves that reward timing over strength. Learning to generate from the legs, commit to a jump and land safely on padded floors keeps these problems from being the ones you walk past.

                ## Milestones
                1. Deadpoints practised on easy terrain with a controlled catch.
                2. Two-handed dynos to a large hold practised from low starts.
                3. A run-and-jump or coordination start attempted with a spotter or coach present.
                4. Three dynamic or coordination problems sent and logged.

                ## Notes
                Check your landing and the people around you every time; dynamic falls travel sideways.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three dynamic or coordination problems sent and logged, with deadpoints and two-handed dynos practised first."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Practise ten deadpoints to good holds on a vertical wall"
                - "Try a two-handed dyno to a jug from a low start"
                - "Ask a coach or experienced friend to watch a coordination start"
                - "Log three dynamic problems you send"
            - name: Grip positions for crimps, slopers and pinches
              description: |-
                ## Purpose
                Crimps, slopers and pinches load the fingers and wrists differently, and most climbers default to one grip that puts the most strain on the pulleys. Learning open hand, half crimp and full crimp, and when each belongs, spreads the load and improves holds you used to slide off.

                ## Milestones
                1. Open hand, half crimp and full crimp positions learned and named.
                2. Slopers practised with low hips and straight arms.
                3. Pinches practised with the thumb engaged on the side of the hold.
                4. One problem per session chosen for the grip you trust least, for six weeks.

                ## Notes
                Full crimp loads the finger pulleys hardest. Use it sparingly, and only when warm.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Six weeks of sessions each including one problem in your weakest grip type, with grip sends logged by type."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Learn the open hand, half crimp and full crimp positions on a large edge"
                - "Find two sloper and two pinch problems at a moderate grade"
                - "Add one problem in your weakest grip type to each session for six weeks"
                - "Log sends by grip type alongside grade"
            - name: Indoor lead climbing course and lead falls
              description: |-
                ## Purpose
                Lead climbing on indoor walls adds clipping, rope management and real falls to the route, and walls require a lead test before you can do it unsupervised. A recognised course followed by deliberate fall practice with an experienced belayer gives you the safety habits and the confidence to try routes at your limit.

                ## Milestones
                1. A lead climbing course booked and completed at a wall or with a qualified instructor.
                2. The wall's lead test passed, for both climbing and belaying.
                3. Ten practice falls taken with a dynamic catch from an experienced belayer.
                4. A short safety checklist written: partner check, clipping position, back-clipping, z-clipping.

                ## Notes
                Always do a partner check before leaving the ground. Never practise falls with a belayer who has not passed a lead belay test.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: learning
                output_kind: event-completion
                success_criteria: "A wall lead test passed for climbing and belaying, followed by ten logged practice falls with a qualified belayer."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Check what courses and tests your wall requires before lead climbing"
                - "Book a lead climbing course with a qualified instructor"
                - "Pass the wall's lead climbing and lead belay test"
                - "Take ten supervised practice falls and log how each felt"
            - name: Hangboard readiness and first finger programme
              description: |-
                ## Purpose
                Hangboarding is the most efficient way to build finger strength and also the easiest way to hurt a pulley if started too soon or too hard. Checking you have climbed regularly for a year or more, then following a conservative programme with a set protocol and retests, builds strength with the risk kept down.

                ## Milestones
                1. Readiness checked: about a year of regular climbing, no current finger pain and a warm-up habit in place.
                2. A conservative programme chosen with fixed edge size, hang time and rest, for example low-intensity repeaters.
                3. A starting test recorded on a set edge and grip.
                4. Eight weeks completed with a retest and no finger score of 3 or more.

                ## Notes
                Start from the **Training program** template. If you are newer than about a year, put this off and climb more instead.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An eight-week hangboard programme completed with a start and end test on the same edge and no finger pain score above 2."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Check you meet the readiness criteria before starting"
                - "Choose a conservative hangboard protocol and write it into a training program"
                - "Record a starting test on a fixed edge and grip"
                - "Retest on the same edge and grip and log the result @recurring(monthly:23)"
            - name: Board climbing sessions on standardised walls
              description: |-
                ## Purpose
                Standardised boards such as the Moon, Kilter or Tension boards give the same problems on the same holds anywhere in the world, with a shared app and grades. Adding one board session a week builds strength and body tension on steep terrain and gives a progress measure that does not change with the wall's reset.

                ## Milestones
                1. The board at your wall identified with its angle and app.
                2. A set of ten benchmark problems chosen across three grades.
                3. One board session a week for eight weeks, under forty minutes each.
                4. Benchmark sends compared at week one and week eight.

                ## Notes
                Board problems are often graded harder than wall problems. Start two grades below your wall grade.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight weeks of weekly board sessions logged, with benchmark sends counted at the start and end."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Find out which board your wall has and install its app"
                - "Pick ten benchmark problems across three grades"
                - "Log board benchmark sends for the month @recurring(monthly:12)"
                - "Compare week one and week eight benchmark results"
            - name: Breaking a grade plateau
              description: |-
                ## Purpose
                Stalling at the same grade for three months or more is common, and the cause is rarely strength alone: often it is one avoided style, poor rest between attempts or simply too few problems at the grade below. Diagnosing the plateau from your log before changing anything stops you buying a hangboard to fix a footwork problem.

                ## Milestones
                1. Three months of sends broken down by style, grip and wall angle.
                2. The two weakest styles or angles named from the data.
                3. A friend or coach asked to watch two attempts and name the main technical gap.
                4. A six-week plan aimed only at those two weaknesses, then a retest.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written plateau diagnosis naming two weaknesses from logged data, followed by a six-week targeted plan and a retest result."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Sort three months of logged sends by style, grip and angle"
                - "Name the two styles or angles with the fewest sends"
                - "Ask a coach or stronger friend to watch two attempts and name your main gap"
                - "Write a six-week plan aimed at the two weakest areas"
            - name: Climbing coach or technique class decision
              description: |-
                ## Purpose
                One hour with a good climbing coach can spot the habit that years of self-teaching missed, but coaching varies in price and quality. Comparing private sessions, group technique courses and video feedback options, against what you want fixed, helps you spend the money where it changes most.

                ## Milestones
                1. The specific thing you want coached written in one sentence.
                2. Three options compared: private session, group course and remote video feedback.
                3. Each option's coach checked for relevant qualifications and climbing coaching experience.
                4. One option booked and the feedback written down afterwards.

                ## Notes
                Start from the **Purchase decision** template. Bring video of your climbing to the first session.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three coaching options compared on price and qualifications, one booked, and written feedback from the session kept."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the one technique problem you most want a coach to fix"
                - "Compare a private session, a group course and remote video feedback"
                - "Check each coach's qualifications and experience coaching boulderers"
                - "Book the chosen option and write up the feedback within a day"
            - name: Fear of falling and committing to the top
              description: |-
                ## Purpose
                Fear of the top-out or of falling from height is one of the most common reasons climbers stay below their physical grade. Graded exposure, starting with practice falls from progressively higher and moving to committing moves high on easy problems, shrinks the fear in small, manageable steps.

                ## Milestones
                1. A ladder written from least to most frightening situations, for example falling from half height to committing to a high slab move.
                2. Each rung practised until it feels routine before moving up.
                3. A short breathing and commitment routine used before high moves.
                4. Three problems topped that you previously backed off from.

                ## Notes
                Fear is useful information about real risk. Never push through on a poor landing or a crowded floor.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A written fear ladder worked through rung by rung, ending with three previously abandoned problems topped out."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List five climbing situations that frighten you, from mildest to worst"
                - "Practise three controlled falls at the start of a session @recurring(weekly:thu)"
                - "Write a two-breath commitment routine for high moves"
                - "Return to three problems you backed off and try to top them"
            - name: Mounting a hangboard at home safely
              description: |-
                ## Purpose
                A hangboard at home allows short finger sessions without a trip to the wall, but a board pulled off a wall or door frame mid-hang is a real injury risk. Choosing the right board and a secure mounting method, such as a timber backboard into studs or a freestanding frame, makes the setup safe before anyone hangs from it.

                ## Milestones
                1. A board chosen with edge sizes that suit your level.
                2. A mounting method chosen for your walls or a freestanding frame selected if fixing is not possible.
                3. The board fitted with fixings rated well above body weight, or by someone competent if you are unsure.
                4. A gradual load test done before the first full hang.

                ## Notes
                Start from the **Purchase decision** template. Plasterboard alone will not hold a hangboard; fix through to studs or masonry.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A hangboard securely fixed to studs, masonry or a freestanding frame, load-tested before use and checked every quarter."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Choose a hangboard with edge sizes suited to your level"
                - "Find a wall with studs or masonry, or price a freestanding frame"
                - "Fit the board on a timber backboard with suitable fixings"
                - "Check the hangboard fixings and backboard for movement @recurring(quarterly)"
            - name: Power endurance for long problems and circuits
              description: |-
                ## Purpose
                Pumping out three moves from the top of a long problem or circuit is a power endurance gap, not a strength gap. A six-week block of 4x4s and linked circuits, done once or twice a week after the limit block, trains the forearms to keep working when they are already tired.

                ## Milestones
                1. Four problems chosen two grades below your limit for a 4x4 set.
                2. A baseline 4x4 recorded: how many of the sixteen problems were completed.
                3. Six weeks of one or two power endurance sessions a week.
                4. A retest showing more problems completed or harder problems used.

                ## Notes
                Power endurance is tiring. Keep it after limit work, never before, and drop it in any week your finger score rises.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Six weeks of 4x4 sessions completed with a baseline and a retest showing more problems completed or harder problems used."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Choose four problems two grades below your limit for a 4x4"
                - "Record a baseline 4x4 score out of sixteen"
                - "Run one 4x4 or circuit session after the limit block @recurring(weekly:wed)"
                - "Retest the 4x4 after six weeks and compare"
            - name: Projecting a problem two grades above your flash
              description: |-
                ## Purpose
                Your flash grade measures what you can read and climb first time; your redpoint grade, what you can work out over several sessions, is usually two or more grades higher. Projecting one problem well above your flash teaches you to break a climb into sections, rehearse moves and link them, which is the skill that drives grade progress.

                ## Milestones
                1. One problem chosen two grades above your flash grade, in a section not due to reset for a month.
                2. Every move done individually, with beta written down.
                3. The problem linked in two halves.
                4. The problem sent, or a written note of the move that stopped you.
              priority: medium
              frontmatter:
                mode: building
                output_kind: event-completion
                success_criteria: "A problem two grades above your flash projected with written beta, ending in a send or a named sticking move before reset."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Choose a project two grades above your flash in a section not resetting soon"
                - "Work every move on its own and write the beta down"
                - "Link the first and second halves separately"
                - "Try the full problem fresh at the start of three sessions"
            - name: Entering a bouldering league or in-house competition
              description: |-
                ## Purpose
                In-house leagues and competitions run at most walls, with new problems, score cards and a friendly atmosphere that pushes most people to climb harder than in a normal session. Entering one gives a dated goal, a reason to flash more problems and a new group of climbers to session with.

                ## Milestones
                1. Your wall's competitions and leagues for the next three months found and one chosen.
                2. Entry paid and the format understood: number of problems, attempts counted, finals.
                3. Two sessions practising flash attempts on fresh problems before the event.
                4. The competition climbed and your score and lessons written down.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "One in-house competition or league round completed, with your score and three written lessons recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Check your wall's events listing for leagues and competitions"
                - "Enter one and note the scoring format"
                - "Practise flash attempts on newly set problems in two sessions"
                - "Write your score and three lessons after the event"
            - name: First day bouldering outdoors
              description: |-
                ## Purpose
                Outdoor rock feels very different from plastic: hidden footholds, sharp friction, no colour tape and real landings with crash pads and spotters. A first day planned with an experienced friend, a club meet or a guide, at a beginner-friendly area, turns indoor skills into outdoor climbing safely and with respect for access rules.

                ## Milestones
                1. A beginner-friendly bouldering area chosen with its access and conservation rules read.
                2. An experienced partner, club meet or qualified guide arranged.
                3. Crash pads borrowed or hired and spotting practised before the day.
                4. The day completed, with problems climbed and lessons logged.

                ## Notes
                Leave no trace, brush off tick marks and chalk, and respect any seasonal access restrictions for nesting birds.
              priority: low
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A first outdoor bouldering day completed with an experienced partner or guide, crash pads and spotting, and problems logged."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Ask your wall about local climbing clubs that run outdoor meets"
                - "Read the access and conservation notes for one beginner bouldering area"
                - "Learn to spot a falling climber with an experienced friend at the wall"
                - "Arrange crash pads, a partner and a date"
            - name: First send at the next grade band
              description: |-
                ## Purpose
                Your first problem at a new grade band, such as the first Font 6A (around V3) or 7A (around V6), is a real milestone and worth planning for rather than leaving to chance. Choosing the target grade, a likely problem and a few weeks of focused sessions makes the send something you prepared for rather than stumbled into.

                ## Milestones
                1. The target grade chosen as the next step above your hardest send.
                2. Three candidate problems at that grade identified, suited to your strengths.
                3. Four weeks of sessions with the limit block spent on those problems.
                4. The first send at the new grade logged with date and problem.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A logged first send at the grade above your previous best, with the date, problem and number of sessions it took."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write your next target grade above your hardest send"
                - "Pick three candidate problems at that grade that suit your strengths"
                - "Spend the limit block of the next eight sessions on those problems"
                - "Log the first send with the date and sessions it took"
            - name: Climbing trip to a destination wall
              description: |-
                ## Purpose
                Visiting a big or well-known wall in another city gives new setting styles, new grades to calibrate against and a weekend of climbing with friends. Planning the travel, the passes and the rest days around the climbing avoids the classic trip of three sessions in two days and wrecked skin by the second morning.

                ## Milestones
                1. A destination wall chosen with opening times and pass prices checked.
                2. Travel and stay booked with no more than two climbing sessions in any two days.
                3. Skin and finger kit packed and a rest morning planned.
                4. A trip log written with grades compared to your home wall.

                ## Notes
                Start from the **Trip** template.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A climbing trip completed with no more than two sessions in any two days, and a trip log comparing grades with your home wall."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Shortlist two destination walls and check their opening times and prices"
                - "Plan the trip using the trip template with rest time built in"
                - "Pack your skin kit, tape and a spare chalk bag"
                - "Write a trip log comparing their grades with your home wall"
            - name: Hosting a beginner climbing night for friends
              description: |-
                ## Purpose
                Bringing friends or colleagues to the wall is how most climbers found the sport, but a group of first-timers needs inductions, shoe hire and some easy problems ready. Organising a beginner night with the wall's group booking turns a vague plan into an evening where everyone climbs something.

                ## Milestones
                1. A date agreed and the wall's group booking or taster session arranged.
                2. Every guest's induction and waiver completed in advance.
                3. A list of easy problems and a short safety talk on falling prepared.
                4. The evening run and interested guests pointed to beginner courses.
              priority: low
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "A beginner climbing night held with every guest inducted in advance and at least one easy problem sent by each."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask your wall about group bookings and taster sessions"
                - "Send guests the wall's online induction and waiver before the night"
                - "Choose eight easy problems and plan a three-minute falling talk"
                - "Share details of beginner courses with anyone keen to come back"
            - name: Starting climbing after forty
              description: |-
                ## Purpose
                Starting climbing in your forties, fifties or later is common and rewarding, but tendons and joints adapt more slowly and recovery takes longer. A plan with more rest days, a longer warm-up, a slower climb through the grades and strength work for shoulders and hips lets you enjoy steady progress without the injuries that end many late starts.

                ## Milestones
                1. A check with your doctor or physiotherapist about any existing conditions before starting.
                2. A weekly plan of two climbing sessions with two rest days between hard efforts.
                3. A warm-up of at least twenty minutes and finger loading kept to big holds for the first three months.
                4. Six months of logged sessions with finger and shoulder scores.

                ## Notes
                Grades come slower but steadily. Comparing yourself with twenty-year-olds at the wall is the fastest route to an injury.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Six months of logged twice-weekly sessions with a twenty-minute warm-up and finger and shoulder scores recorded each week."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask your doctor or physiotherapist about any conditions that affect climbing"
                - "Plan two weekly sessions with at least two rest days between hard efforts"
                - "Extend your warm-up to twenty minutes and write it down"
                - "Keep to jugs and big edges for the first three months"
            - name: Taking your children climbing
              description: |-
                ## Purpose
                Children love climbing, and walls run kids' clubs, taster sessions and supervised family times, each with their own age rules and supervision requirements. Knowing what your wall allows, which adult has to be inducted and how to keep children off the mats under other climbers makes a family visit safe and fun.

                ## Milestones
                1. The wall's age rules, supervision ratios and family session times written down.
                2. The supervising adult inducted for children.
                3. Rules for the mats agreed with the children: no running, no sitting under climbers.
                4. A kids' club or term course chosen if they want more.

                ## Notes
                Most walls expect a supervising adult to watch children at all times and not climb themselves while doing so.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "The supervising adult inducted, the wall's children's rules written down and shared, and a regular family or club session in the diary."
                cadence: rolling
              tasks:
                - "Read your wall's rules for children and family session times"
                - "Book the supervising adult's induction for children"
                - "Explain the three mat rules to your children before the first visit"
                - "Book the next term of kids' club or family sessions @recurring(quarterly)"
            - name: Climbing alongside running or lifting
              description: |-
                ## Purpose
                Runners, lifters and team-sport athletes often take up climbing as a second sport and find their legs and lungs are fine but their fingers and forearms are not. Fitting climbing around another training plan, without stacking hard sessions on the same days, keeps both sports progressing.

                ## Milestones
                1. Your main sport's hard days and climbing sessions mapped on one weekly plan.
                2. No hard climbing within a day of heavy pulling or grip work in the gym.
                3. Climbing kept to technique and moderate volume during your main sport's peak weeks.
                4. Eight weeks of the combined plan logged with fatigue noted.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A combined weekly plan for climbing and your main sport kept for eight weeks, with no hard climbing next to heavy pulling days."
                cadence: rolling
              tasks:
                - "Map your main sport's hard days and climbing sessions on one weekly plan"
                - "Move any heavy pulling or grip work away from climbing days"
                - "Mark your main sport's peak weeks as climbing technique weeks"
                - "Check the week's combined load and adjust the climbing plan @recurring(weekly:sun)"
            - name: Returning to climbing after a long break
              description: |-
                ## Purpose
                After months away for work, a new baby or a move, strength comes back faster than finger tendons do, and the classic mistake is trying your old project in the first week. A four to six week return plan, starting two or three grades below your old level, rebuilds capacity without the setback that sends people off again.

                ## Milestones
                1. Your previous top grade and the length of the break written down.
                2. A first fortnight of easy volume three grades below your old level.
                3. Grades raised by one step every week or two only if finger scores stay low.
                4. Your old top grade reached again, or a new baseline accepted.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A six-week return plan completed from three grades below your old level, with weekly finger scores and a new baseline logged."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write your old top grade and how long you have been away"
                - "Plan two weeks of easy volume three grades below your old level"
                - "Raise the grade by one step only when finger scores stay low for a week"
                - "Log a new grade baseline at the end of week six"
            - name: Climbing regularly on a tight budget
              description: |-
                ## Purpose
                Day passes add up quickly, and students, part-time workers and anyone on a tight budget can find climbing three times a week out of reach. Off-peak memberships, student and concession rates, volunteering at the wall and second-hand shoes can halve the cost without halving the climbing.

                ## Milestones
                1. Current monthly climbing spend worked out from the last three months.
                2. Off-peak, student, concession and volunteering options at local walls listed.
                3. A cheaper arrangement chosen and the monthly saving written down.
                4. Kit costs planned: resoles and second-hand shoes instead of new pairs.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of discounted climbing options, with a cheaper arrangement chosen and the monthly saving recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Add up what you spent on climbing in the last three months"
                - "List off-peak, student and concession rates at your local walls"
                - "Ask your wall whether it offers climbing in exchange for volunteering"
                - "Recheck discounted rates and membership offers @recurring(yearly)"
            - name: Periodised bouldering training year
              description: |-
                ## Purpose
                Random sessions give random progress, while experienced boulderers plan their year in blocks: base volume, strength, power, then performance, with deloads in between. Mapping twelve months into four to six week phases around competitions, trips or outdoor seasons puts your best form where you want it.

                ## Milestones
                1. The year's key dates marked: competitions, trips, outdoor season.
                2. Phases of four to six weeks laid out with a focus for each.
                3. A lighter week planned at the end of each phase.
                4. Each phase's sessions written into a training program and reviewed at its end.

                ## Notes
                Start from the **Training program** template.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A twelve-month plan of named training phases with lighter weeks between, each phase reviewed in writing at its end."
                cadence: cyclic
                effort_hours_estimate: "8"
              tasks:
                - "Mark the year's competitions, trips and outdoor seasons in a calendar"
                - "Lay out four to six week phases with one focus each"
                - "Write the current phase into a training program"
                - "Review the finished phase and plan the next one @recurring(monthly:28)"
            - name: Preparing for a regional bouldering competition
              description: |-
                ## Purpose
                Regional and national bouldering competitions use isolation, timed rotations, observation periods and scoring by tops and zones, which reward a very different preparation from a normal session. Practising under those conditions, with timed attempts and unseen problems, makes the format familiar before the day.

                ## Milestones
                1. The competition chosen and its rules, categories and scoring read in full.
                2. Six sessions of timed rotations, such as four minutes on and four off, on unseen problems.
                3. A competition-day routine written: warm-up, observation, attempt plan, food and water.
                4. The competition climbed and results reviewed against the plan.
              priority: low
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A regional competition entered and climbed after six timed-rotation practice sessions, with a written review of results."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Find a regional competition and read its rules and scoring"
                - "Run a timed rotation session on problems you have not seen"
                - "Write a competition-day routine from warm-up to final attempt"
                - "Review your result against your plan within a week"
            - name: Learning to set boulder problems
              description: |-
                ## Purpose
                Setters see climbing from the other side: how holds, angles and foot placements create a move and a grade. Learning to set, by forerunning, helping at resets or attending a setting course, deepens your movement understanding and gives back to the wall that hosts you.

                ## Milestones
                1. The head setter at your wall asked about volunteering, forerunning or setting courses.
                2. Three resets helped with, from stripping and washing holds to forerunning.
                3. A first problem set under supervision and its grade agreed.
                4. Feedback from climbers on your problem collected and noted.

                ## Notes
                Setting involves ladders, drills and working at height. Follow the wall's safety rules and never set without permission.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Three resets assisted and one supervised boulder problem set, with climber feedback on it recorded."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Ask the head setter about volunteering at resets or forerunning"
                - "Help strip and wash holds at your next reset"
                - "Set one problem under supervision and agree its grade"
                - "Collect feedback from five climbers on the problem"
            - name: Indoor climbing instructor qualification
              description: |-
                ## Purpose
                Walls hire instructors to run taster sessions, kids' clubs and induction groups, and a recognised indoor climbing instructor award is the usual route. Checking the scheme in your country, logging the required climbing and supervision experience and booking the training and assessment turns experience into a role and a part-time income.

                ## Milestones
                1. The recognised indoor climbing or bouldering instructor scheme in your country identified with its prerequisites.
                2. A log of climbing and supervised instructing experience brought up to the required level.
                3. The training course completed.
                4. The assessment passed and a first session delivered at a wall.

                ## Notes
                Most schemes also require a current first aid certificate and a background check for working with children.
              priority: low
              frontmatter:
                mode: learning
                output_kind: deliverable
                success_criteria: "A recognised indoor climbing instructor award passed, with first aid current and one session delivered at a wall."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Find the recognised indoor instructor scheme in your country and its prerequisites"
                - "Start a log of your climbing and supervised instructing experience"
                - "Book a first aid course if yours has lapsed"
                - "Book the instructor training and assessment"
---

# Bouldering & Indoor Climbing

This area is for anyone who climbs indoors, from the person booking a first induction to the regular trying to break into the next grade band on the bouldering wall or the lead wall. It starts with the foundations (induction, shoes, falling, a grade baseline and a finger screen), moves through the weekly machinery of logging, skin care, fresh sets and finger check-ins, then the movement skills, the training and plateau decisions, dated events like leagues and first outdoor days, versions for older starters, parents, other athletes and returners, and ends with periodised seasons, competition preparation, route setting and instructing.

What repeats is a Sunday plan for the week, a weekly skin routine and finger check, a weekly shoulder session, a monthly grade pyramid on the 9th, a monthly project review and hangboard retest, quarterly kit inspections and a quarterly goal review. The Purchase decision, Metrics log, Habit tracker, Training program and Trip templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
