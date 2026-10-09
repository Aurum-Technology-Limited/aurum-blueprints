---
id: fitness-sport.rowing-indoor-erg
name: Rowing & Indoor Erg Training
description: "A club or erg start chosen well, the stroke and drag factor set up right, steady and interval weeks logged by split, and a route from a first 2,000 m test to regattas, head races, selection and coaching."
category: personal
version: 1.0.0
tags: [fitness-sport, rowing-indoor-erg, athlete, rowing, indoor-rowing, erg-testing, sculling, regatta]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - training-program
    - operational-checklist
    - purchase-decision
    - trip
  pillars:
    - name: Fitness & Sport
      emoji: "🏋️"
      description: "Training, play and competition: building strength, endurance and skill in a sport or a gym, structuring blocks of work around events, recovering properly, and keeping the sessions honest with a log rather than a feeling."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Rowing & Indoor Erg Training
          description: "Training on the water with a rowing club or on an indoor rowing machine, with technique work, split targets and erg test pieces."
          projects:
            - name: Club rowing, indoor erg or both
              description: |-
                ## Purpose
                Before spending money on a club membership or a machine, decide where your rowing will actually happen. A club gives you coaching, crews and racing on the water but ties you to outing times and daylight, while an erg at home or in the gym fits round anything but never teaches you to balance a boat. Most people who stay with the sport end up doing both, with the erg carrying the fitness and the club carrying the skill.

                ## Milestones
                1. The rowing clubs within reach listed with their learn to row dates, membership fees and outing times.
                2. Gyms near home or work with an air-resistance rowing machine identified.
                3. A choice made between club, erg or both, with the reasons written in a sentence.
                4. A start date set for the first club session or the first logged erg piece.

                ## Notes
                If you live near water, visit a club on a weekend morning before deciding. Watching a novice outing tells you more than the website does.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written choice between club rowing, indoor erg training or both, with the start date of the first session in your calendar."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the rowing clubs within 30 minutes of home and their open days"
                - "Check which nearby gyms have an air-resistance rowing machine"
                - "Watch a novice outing or a gym rowing class before deciding"
                - "Write your choice and a start date into your calendar"
            - name: Health questions before hard erg pieces
              description: |-
                ## Purpose
                Maximal erg pieces push heart rate to its ceiling and load the lower back in a flexed position for hundreds of strokes. If you have a heart condition, high blood pressure, a history of back or rib trouble, or have been inactive for years, a short conversation with your doctor before your first all-out test is sensible. It also leaves you with a written note of anything to watch for.

                ## Milestones
                1. Your relevant conditions, medicines and past back or rib injuries written in one note.
                2. Your doctor or physiotherapist asked whether flat-out erg testing suits you now.
                3. Any limits they suggest, such as a heart rate cap or no maximal tests yet, written at the top of your rowing log.
                4. A reminder set to ask again if your health changes.

                ## Notes
                Stop and get checked if you feel chest pain, unusual breathlessness or dizziness during a piece. Rib pain that worsens over weeks is worth reporting early, as rib stress injuries are a known rowing problem.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Any medical limits on hard erg training agreed with a clinician and written at the top of your rowing log, or a note that none apply."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List your heart, blood pressure, back and rib history in one note"
                - "Book a routine appointment if anything on the list is unresolved"
                - "Ask whether maximal 2,000 m testing is suitable for you now"
                - "Write any limits you are given at the top of your rowing log"
            - name: Erg damper, drag factor and monitor set-up
              description: |-
                ## Purpose
                The damper on an air-resistance rower is not a difficulty setting, and plenty of beginners crank it to 10 and then wonder why their back aches. Drag factor is the number that matters: it shifts with dust, temperature and the machine, and it is what lets you compare pieces between sessions and gyms. Setting it once, knowing how to read it and fixing the monitor display saves every later session from guesswork.

                ## Milestones
                1. The drag factor screen found on your monitor and today's reading recorded.
                2. A damper setting chosen that gives a drag factor in the range your coach or the manufacturer suggests, commonly somewhere between 110 and 140.
                3. The monitor display set to show split per 500 m, stroke rate and total metres.
                4. Foot stretcher height set so the strap crosses the widest part of your foot.

                ## Notes
                Damper numbers are not comparable between machines, but drag factor is. Write the drag factor beside every test piece in your log.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Your chosen drag factor and foot stretcher setting are written in your log and match the monitor reading at your next session."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Find the drag factor display in the monitor menu"
                - "Adjust the damper until the drag factor sits in your target range"
                - "Set the foot stretcher so the strap crosses the widest part of your foot"
                - "Write the drag factor and stretcher hole number in your log"
            - name: Legs, body, arms stroke sequence on the erg
              description: |-
                ## Purpose
                Nearly every erg fault, from a hunched back to a split that refuses to drop, traces back to doing the stroke in the wrong order. The drive is legs, then body, then arms, and the recovery is the reverse: arms, body, then legs. Learning it in parts before rowing it whole takes a few short sessions and protects your back for years of training.

                ## Milestones
                1. The catch, mid-drive and finish positions demonstrated without rowing.
                2. Arms only, arms and body, then half slide rowed in a pick drill without the order breaking.
                3. Twenty full strokes rowed at rate 20 with the handle travelling level.
                4. A side-on video showing the legs flat before the body swings back.

                ## Notes
                Watch the handle path. If it has to lift over the knees on the recovery, the legs came up before the hands were past them.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A side-on video of 20 full strokes at rate 20 showing legs, body, arms on the drive and arms, body, legs on the recovery."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Watch a stroke sequence video from a rowing federation or club coach"
                - "Row five minutes of the pick drill: arms only, arms and body, half slide"
                - "Row 20 strokes at rate 20 with a phone filming side-on"
                - "Compare your video with the reference and note one fault"
            - name: Learn to row course at a local club
              description: |-
                ## Purpose
                Getting on the water almost always starts with a club's learn to row course: typically six to eight sessions in stable boats, with a coach in a launch and an erg session or two. It teaches the boat handling, calls and safety rules no video can, and on completion most clubs move you straight into a novice or recreational squad.

                ## Milestones
                1. A course booked, with dates, kit list and swim test requirement known.
                2. Every session attended, or missed ones made up.
                3. Carrying, launching and boating done with the crew without help from the coach.
                4. A squad place offered, or a decision made to stay on the erg for now.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "All sessions of a learn to row course completed, with a novice squad place offered or a written decision to train on the erg instead."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Email two clubs asking for their next learn to row course dates"
                - "Book the course and note the kit list and swim requirement"
                - "Buy close-fitting kit that will not catch on the slide"
                - "Ask the coach at the last session which squad suits you"
            - name: Swim test and capsize drill before going afloat
              description: |-
                ## Purpose
                Clubs and national federations usually require a short swim test, and anyone sculling small boats should have done a capsize drill in a pool or calm water first. Doing both early takes the fear out of falling in, teaches you to stay with the boat, and is normally the condition for being allowed into singles and doubles.

                ## Milestones
                1. The club's swim test requirement found and a test date booked.
                2. Swim test passed and recorded with the club.
                3. A supervised capsize drill done in a pool or sheltered water, including getting back to the boat.
                4. The club's cold water and capsize procedures read and understood.

                ## Notes
                Cold water shock is the main risk in winter and spring rowing, even for strong swimmers. Follow your club's rules on lifejackets and water temperature limits.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: event-completion
                success_criteria: "Swim test passed and a supervised capsize drill completed, both recorded on your club membership record."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the club captain what swim test and capsize drill they require"
                - "Book a pool session for the swim test and capsize drill"
                - "Read the club's cold water and capsize procedures"
                - "Confirm the club has recorded both on your membership"
            - name: Baseline 5,000 m steady erg piece
              description: |-
                ## Purpose
                A steady 5,000 m at a pace you could hold while speaking in short sentences gives a safe first benchmark long before you try a flat-out 2,000 m. It shows your sustainable split, your natural stroke rate and how your technique holds after 20 minutes, which is what your first weeks of training should be built around.

                ## Milestones
                1. One 5,000 m piece rowed at a conversational effort, at your recorded drag factor.
                2. Average split, stroke rate, time and heart rate if worn, written in your log.
                3. The split at 1,000 m and at 4,000 m compared to see whether you faded.
                4. A steady state training split set from the result, a few seconds slower than this piece.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A logged 5,000 m baseline with time, average split, rate and drag factor, and a steady state training split derived from it."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Warm up for ten minutes at an easy split"
                - "Row 5,000 m at a pace you could talk through"
                - "Photograph the monitor memory screen before it resets"
                - "Set your steady state split from the result in your log"
            - name: Rowing log of splits, rates and drag factor
              description: |-
                ## Purpose
                Rowers who improve keep a log with more than the time: split, stroke rate, drag factor, heart rate and a line on how the boat or the erg felt. Split at a fixed rate is where progress shows first, months before a test result moves. Setting the columns once means each session takes thirty seconds to record.

                ## Milestones
                1. Log columns chosen: date, session, distance, time, split, rate, drag factor, heart rate, water or erg, notes.
                2. Your last two weeks of sessions entered from the monitor memory or an app.
                3. A weekly total of metres calculated.
                4. Test pieces marked so they can be filtered out on their own.

                ## Notes
                Start from the **Metrics log** template. If your monitor syncs to an app, export to the same log monthly rather than keeping two records.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A rowing log holding every session for the last four weeks, with split, rate and drag factor filled in for each."
                cadence: rolling
              tasks:
                - "Choose the columns for your rowing log"
                - "Enter the last two weeks from the monitor memory or app"
                - "Pair the monitor with a logbook app if it supports one"
                - "Add up the week's metres every Sunday evening @recurring(weekly:sun)"
            - name: Weekly erg and water training week
              description: |-
                ## Purpose
                Without a weekly shape, rowing training drifts into hard pieces every session, which feels productive and stalls within a month. A typical week for a club athlete holds two or three long steady sessions at low rate, one interval session, one or two strength sessions and the water outings, with most metres done easy. Writing the week down makes it obvious when the balance has gone.

                ## Milestones
                1. Your available days and times, including fixed club outings, written down.
                2. Each day given one session type: steady state, intervals, strength, water or rest.
                3. Roughly four fifths of weekly erg metres planned at easy steady state.
                4. The week reviewed after two weeks and adjusted to what you actually did.

                ## Notes
                Start from the **Training program** template. Count water outings in your weekly time but log their distance separately from erg metres.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written training week with each day's session type, followed for at least four consecutive weeks."
                cadence: rolling
              tasks:
                - "Write down the days and times you can train"
                - "Assign a session type to each day of the week"
                - "Check that most planned erg metres are easy steady state"
                - "Draft next week's sessions every Friday evening @recurring(weekly:fri)"
            - name: Long steady state at a capped stroke rate
              description: |-
                ## Purpose
                Long pieces of 45 to 90 minutes at rate 18 to 22 build the aerobic base that decides 2,000 m races, and they are where you rehearse a good stroke thousands of times. The rate cap stops easy work turning into a race. Most of your weekly metres should come from these sessions.

                ## Milestones
                1. A rate cap and target split agreed for steady sessions, taken from your baseline piece.
                2. One long session completed each week for six weeks.
                3. Split at the same rate and heart rate improving by a second or two over the block.
                4. A technique note recorded after each session.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive weeks each containing at least one steady piece of 45 minutes or more, rowed at or under the agreed rate cap."
                cadence: rolling
              tasks:
                - "Set your rate cap and steady split in the log"
                - "Prepare a playlist or podcast that lasts the whole piece"
                - "Row a 60 minute steady piece at the rate cap @recurring(weekly:sun)"
                - "Note one technique point you held through the piece"
            - name: Weekly intervals at 2,000 m race pace
              description: |-
                ## Purpose
                Once a base is in place, one interval session a week at or near target 2,000 m pace teaches your body and your head what that split feels like. Classic sets include 8 x 500 m with generous rest, 4 x 1,000 m and 3 x 2,000 m a little slower than race pace. Keeping it to one hard session a week is what lets the steady work do its job.

                ## Milestones
                1. A target 2,000 m split chosen from a recent test or estimate.
                2. A four-week rotation of interval sets written in the log.
                3. Every rep logged with split, rate and rest.
                4. Rep splits holding within two seconds of each other across a session.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive weeks each with one completed interval session, every rep logged, and the last session's reps within two seconds of each other."
                cadence: rolling
              tasks:
                - "Pick your target 2,000 m split"
                - "Write a four-week rotation of interval sets"
                - "Row the week's interval session after a full warm-up @recurring(weekly:wed)"
                - "Log every rep split and rate before leaving the machine"
            - name: Crew availability and weekly club outings
              description: |-
                ## Purpose
                Crew boats only go out when every seat is filled, so one missed availability sheet can cancel an outing for eight people. Marking availability early, arriving in time to boat and checking the outing board makes you the rower a coach can rely on, which is usually how seats in faster boats are earned.

                ## Milestones
                1. The club's outing sign-up system or group chat joined.
                2. Availability marked for every outing at least a week ahead.
                3. Arrival at least 15 minutes before boating time for a month.
                4. No outing cancelled because of your late withdrawal.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Availability for every outing marked at least seven days ahead for eight consecutive weeks, with no late withdrawals."
                cadence: rolling
              tasks:
                - "Join the club's outing sign-up system or group chat"
                - "Mark next week's outing availability every Monday @recurring(weekly:mon)"
                - "Save boating times as calendar events with a 15 minute buffer"
                - "Tell the coach about holidays as soon as they are booked"
            - name: Twice-weekly strength for the rowing drive
              description: |-
                ## Purpose
                Rowing power comes from the legs and hips, and the trunk has to hold firm while they push. Two short gym sessions a week built around a squat, a hinge, a pull and trunk work make the drive stronger and help protect the lower back and ribs in high-volume weeks. Keep the lifting modest in the days before a test or regatta.

                ## Milestones
                1. A 45 minute session written around a squat, a hinge, a pull and a trunk exercise.
                2. Starting loads recorded that leave two or three reps in reserve.
                3. Two sessions a week completed for eight weeks.
                4. Loads on the main lifts increased and logged.

                ## Notes
                If you are new to lifting, have the squat and hinge checked by a qualified coach before adding load.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Sixteen strength sessions completed over eight weeks, with loads on the squat, hinge and pull logged and increased."
                cadence: rolling
              tasks:
                - "Write a 45 minute session around squat, hinge, pull and trunk work"
                - "Record starting loads that leave two or three reps in reserve"
                - "Do the rowing strength session on Monday and Thursday @recurring(weekly:mon,thu)"
                - "Drop the second session in test or regatta weeks"
            - name: Monthly technique video on the erg
              description: |-
                ## Purpose
                What you feel on the erg and what you are actually doing often differ, especially when tired. A two-minute side-on video once a month, set beside last month's, shows whether faults like an early arm bend, a lunging catch or an over-long layback are fading or creeping back. Sharing it with a coach gets the most from it.

                ## Milestones
                1. A fixed phone position marked so videos are comparable month to month.
                2. A clip taken at rate 20 and at race rate each month.
                3. One fault named per video and one drill chosen to fix it.
                4. Six months of videos stored in one folder.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly side-on erg videos stored in one folder, each with one named fault and a matching drill noted."
                cadence: rolling
              tasks:
                - "Mark a phone position level with the seat, side-on"
                - "Film two minutes at rate 20 and one at race rate @recurring(monthly:12)"
                - "Name one fault and pick one drill for the coming month"
                - "Send the clip to your coach or an experienced club member"
            - name: Hands, blisters and seat sores routine
              description: |-
                ## Purpose
                Blisters, torn calluses and seat sores are among the commonest reasons new rowers miss sessions, and most are preventable. A small kit in your bag, a loose grip, filed calluses and a seat pad for long erg pieces keep you training through the high-volume weeks of a block.

                ## Milestones
                1. Tape, plasters, antiseptic wipes and a callus file packed in your training bag.
                2. Your grip checked by a coach: hooked fingers, relaxed thumbs, no squeezing.
                3. Thick calluses filed down before they tear.
                4. Any sore that looks infected shown to a pharmacist or doctor promptly.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A hand care kit kept in your training bag and no sessions missed to blisters or sores over two months."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Pack tape, plasters, antiseptic wipes and a callus file in your bag"
                - "Ask a coach to check how loosely you hold the handle"
                - "File down any thick calluses after a shower"
                - "Try a seat pad or padded shorts for pieces over 45 minutes"
            - name: Erg chain, seat rail and monitor maintenance
              description: |-
                ## Purpose
                An erg that clunks, sticks on the rail or loses its monitor mid-test is usually one cleaning job away from fine. Wiping the rail, cleaning and lightly oiling the chain, clearing dust from the flywheel housing and swapping monitor batteries takes ten minutes a month and keeps drag factor readings consistent.

                ## Milestones
                1. The manufacturer's maintenance guide for your model found and saved.
                2. A monthly checklist written: rail, chain, flywheel dust, seat rollers, foot straps, batteries.
                3. Spare monitor batteries and the recommended chain oil kept with the machine.
                4. Drag factor rechecked and logged after each clean.

                ## Notes
                Start from the **Operational checklist** template. Use only the chain oil the manufacturer recommends, as general sprays attract dust into the housing.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly maintenance checklist completed for six consecutive months, with drag factor rechecked and logged after each clean."
                cadence: rolling
              tasks:
                - "Download the maintenance guide for your erg model"
                - "Write the monthly checklist on the template"
                - "Clean the rail and chain, then recheck the drag factor @recurring(monthly:3)"
                - "Keep spare monitor batteries beside the machine"
            - name: Boat, blade and boathouse duties
              description: |-
                ## Purpose
                Volunteers keep a rowing club running: washing boats, checking riggers, fixing heel restraints and taking turns on the launch or the boathouse lock-up. Knowing how to check a boat before and after an outing makes you safer afloat, and taking a fair share of the rota is how clubs stay affordable for everyone.

                ## Milestones
                1. The pre-outing boat check learned: heel restraints, gate nuts, bow ball, hull damage.
                2. Boats washed and blades racked after every outing you row.
                3. One rota duty taken each month, such as launch driving, lock-up or helping at a regatta.
                4. Any damage you find logged in the club's damage book or system.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Six consecutive months with one club rota duty completed each month and every boat damage you find reported."
                cadence: rolling
              tasks:
                - "Ask a senior member to show you the pre-outing boat check"
                - "Sign up for one club rota duty for the coming month @recurring(monthly:20)"
                - "Wash the boat and rack the blades after each outing"
                - "Find out where the club's damage book or form is kept"
            - name: Monthly rowing block review
              description: |-
                ## Purpose
                Once a month, look at the log as a whole: total metres, how many sessions were easy, how the steady split at a fixed rate moved, and what got missed. Twenty minutes of honest review stops a block carrying on unchanged when it is not working, and tells you what to change for the next one.

                ## Milestones
                1. The month's metres, session count and missed sessions totalled.
                2. Steady split at your capped rate compared with last month.
                3. One thing to keep and one thing to change written down.
                4. Next month's training week adjusted.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve monthly reviews in the log, each with metres, the steady split trend and one change for the next month."
                cadence: rolling
              tasks:
                - "Total the month's metres and sessions @recurring(monthly:27)"
                - "Ask the agent to summarise the month's log and flag missed sessions"
                - "Write one thing to keep and one to change"
                - "Update next month's training week to match"
            - name: Quarterly 2,000 m or 6,000 m test schedule
              description: |-
                ## Purpose
                Testing too often wastes training weeks, and testing too rarely leaves you guessing. A test roughly every twelve weeks, alternating 2,000 m and 6,000 m, matches the rhythm of most club training blocks and gives clean data points for setting training splits. Fix the dates early and protect the days before them.

                ## Milestones
                1. Four test dates in the next year chosen, lined up with the club's own test weeks if it has them.
                2. Two easier days scheduled before each test.
                3. Each result logged with drag factor, split per 500 m and rate.
                4. Training splits updated from each new result.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four test results logged in a year at roughly twelve-week intervals, each followed by updated training splits."
                cadence: cyclic
              tasks:
                - "Ask the coach when the club runs its test weeks"
                - "Put four test dates for the year in your calendar"
                - "Book the next test piece and two easier days before it @recurring(quarterly)"
                - "Update training splits within a week of each test"
            - name: Catch timing and the recovery ratio
              description: |-
                ## Purpose
                Fast rowing comes from a quick, connected catch and a slow, controlled recovery, roughly twice as long as the drive at low rates. Many rowers rush up the slide, which kills boat run on the water and wastes energy on the erg. Practising the ratio deliberately at rates 18 to 24 changes how every later session feels.

                ## Milestones
                1. The drive to recovery ratio explained by a coach or reliable source.
                2. A ten minute piece rowed at rate 18 counting one on the drive and two on the recovery.
                3. Split held while the rate rises from 18 to 24 in steps without the recovery rushing.
                4. A coach or video confirming the catch is taken at full compression without a pause.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A 20 minute rate ladder from 18 to 24 completed with a steady ratio, confirmed by video or coach feedback."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Row ten minutes at rate 18 counting one on the drive, two on the recovery"
                - "Row a rate ladder of 18, 20, 22 and 24 in five minute steps"
                - "Film the catch side-on at rate 24"
                - "Ask a coach whether you pause or rush at the catch"
            - name: Pause, feet-out and pick drill set
              description: |-
                ## Purpose
                Drills isolate one part of the stroke so you can fix it without the rest falling apart. A short set of pause drills, feet-out rowing to keep the finish level, and the pick drill for sequencing covers most beginner and intermediate faults, on the erg or on the water.

                ## Milestones
                1. Each drill learned and its purpose written in a line.
                2. A ten minute drill set built into your warm-up.
                3. The fault each drill targets checked on video before and after four weeks.
                4. One drill swapped in or out each month based on your technique video.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A ten minute drill set written in your log and used to open one session a week for four weeks."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Learn the pauses at hands away and at half slide"
                - "Practise feet-out strokes until the finish stays level"
                - "Open one session a week with ten minutes of drills @recurring(weekly:tue)"
                - "Compare technique videos taken before and after four weeks"
            - name: Sculling a single without capsizing
              description: |-
                ## Purpose
                Single sculling is the hardest boat to balance and the most honest teacher, since every fault shows up as a lurch. Most clubs let novices into a single only after a capsize drill and time in stable boats. Learning to sit level, keep the hands together and stop the boat safely opens up solo outings whenever the water is free.

                ## Milestones
                1. Permission from the club to take out a single, with any conditions noted.
                2. Boating, sitting the boat with blades flat and pushing off done alone.
                3. Square blade rowing at low pressure for 500 m without catching a crab.
                4. An emergency stop and a turn in a tight space demonstrated.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Club sign-off to scull a single on your stretch of water, after demonstrating an emergency stop and a turn."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask the captain what you must show before sculling a single"
                - "Book a coached single outing on calm water"
                - "Practise sitting the boat with blades flat for five minutes"
                - "Show the coach an emergency stop and a turn"
            - name: Sweep rowing on stroke side and bow side
              description: |-
                ## Purpose
                In sweep boats each rower holds one oar, with the inside hand feathering and the outside hand doing most of the drawing. Many rowers learn one side and get stuck there, which limits the seats a coach can offer them. Being competent on both sides makes you far easier to select.

                ## Milestones
                1. Your current side and your weaker side identified with the coach.
                2. Inside hand feathering practised on the erg handle or in a rowing tank if your club has one.
                3. At least three outings rowed on your weaker side.
                4. A coach confirming you can be seated on either side.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three outings rowed on your weaker side and the coach agreeing you can be seated on either side."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the coach to put you on your weaker side for an outing"
                - "Practise inside hand feathering with one hand on the erg handle"
                - "Row three outings on the weaker side"
                - "Ask the coach whether you can now be seated on either side"
            - name: Reading the force curve on the monitor
              description: |-
                ## Purpose
                Most modern erg monitors can show a live force curve for each stroke. A smooth, rounded hump peaking early means legs and body are connected, while a double hump, a spike or a long flat tail point to specific faults. Learning to read it gives you a coach on the screen during solo sessions.

                ## Milestones
                1. The force curve display found on your monitor.
                2. Your typical curve shape at rate 20 and at race rate photographed.
                3. The shape matched to likely causes using a coach or reliable guide.
                4. A drill chosen for the main fault and the curve compared four weeks later.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Photos of your force curve at two rates taken four weeks apart, with the fault named and the change described."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Switch the monitor to the force curve display"
                - "Photograph the curve at rate 20 and at race rate"
                - "Match the shape to common faults using a coach's guide"
                - "Retake the photos four weeks later and compare them"
            - name: Breathing rhythm at high stroke rates
              description: |-
                ## Purpose
                At rates above 30, breathing out of rhythm with the stroke leaves you gasping by 1,000 m. Many rowers breathe out on the drive and in on the recovery, adding a second breath per stroke at high rates. Practising a pattern in training means it happens on its own in a test or race.

                ## Milestones
                1. One breath per stroke practised at rate 20.
                2. Two breaths per stroke practised at rate 28 and above.
                3. The chosen pattern held through a set of 500 m reps.
                4. Breathing noted in the log after interval sessions.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A full interval session at race rate completed with the chosen breathing pattern, noted in the log."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Row five minutes at rate 20 breathing once per stroke"
                - "Try two breaths per stroke in one minute bursts at rate 30"
                - "Hold the pattern through one full interval session"
                - "Note in the log whether the pattern held to the end"
            - name: Learning to cox and steer a crew
              description: |-
                ## Purpose
                Coxes steer, call the drills and run the crew's safety on the water, and clubs rarely have enough of them. Lighter athletes and injured rowers often cox for a season, and rowers who have coxed usually understand the boat far better. Learning the calls, the steering and the local rules makes you valuable to any squad.

                ## Milestones
                1. Standard calls learned, such as hands on, number off, easy all and hold water hard.
                2. Steering practised in a coxed four with a coach in the launch.
                3. The circulation pattern and hazards on your water walked or explained.
                4. A full outing coxed with the coach's sign-off.

                ## Notes
                Coxes usually wear a lifejacket at all times. Follow your club and federation rules on the type and fit.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One full outing coxed with a coach's sign-off, after learning the standard calls and the local circulation pattern."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the captain if you can sit in as a trainee cox"
                - "Learn the standard calls from the club handbook"
                - "Cox a coached outing with the coach in the launch"
                - "Ask for sign-off to cox without a coach on board"
            - name: Circulation pattern and hazards on your stretch of water
              description: |-
                ## Purpose
                Every river and lake used for rowing has a circulation pattern, local hazards such as bridges, weirs and moorings, and flag or river level rules for when outings stop. Collisions and capsizes usually come from not knowing these. Learning them before rowing without a coach is a basic safety step, and many clubs test it.

                ## Milestones
                1. The club's water safety map and circulation rules read.
                2. Bridges, weirs, moorings and turning points walked or pointed out by a coach.
                3. The flag or river level system and its limits understood.
                4. A sign-off from the club's safety adviser passed, if the club runs one.
              priority: high
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "The circulation pattern, hazards and cancellation rules of your water explained back to a coach or safety adviser and signed off."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the club's water safety map and circulation rules"
                - "Walk the bank of your stretch and note bridges, weirs and moorings"
                - "Bookmark the river level or flag status page on your phone"
                - "Ask the safety adviser to sign you off on the local rules"
            - name: Choosing a home rowing machine
              description: |-
                ## Purpose
                Home rowers range from the air-resistance machines that clubs and indoor races use, through magnetic and water-resistance designs, to cheap hydraulic models that do not row like a boat. If you want to compare scores with your club or an online ranking, the machine needs a monitor that measures the same way. Space, noise, storage and resale value matter more than extra features.

                ## Milestones
                1. Floor space measured, including room behind the machine and its height when stored upright.
                2. Air, magnetic and water machines compared for noise, feel, monitor and resale value.
                3. One or two machines tried in a gym or shop.
                4. A new machine bought, or a second-hand one checked and bought.

                ## Notes
                Start from the **Purchase decision** template. Second-hand air rowers hold their value well; check the chain, seat rollers and monitor before paying.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A rowing machine chosen from a comparison of at least three, bought or ordered, with its spot at home measured to fit."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Measure the floor space and ceiling height where the machine will go"
                - "Compare three machines for noise, monitor, feel and resale value"
                - "Try your top choice in a gym or shop"
                - "Check the chain, rollers and monitor before buying second-hand"
            - name: Logging pieces to an online erg ranking
              description: |-
                ## Purpose
                Online rankings let you compare a 2,000 m, 5,000 m or 30 minute score with rowers of your age, weight and sex worldwide, and many clubs run their own leaderboards. Seeing where you sit can sharpen motivation, though it also tempts people to test too often. Decide up front what you will post and how often.

                ## Milestones
                1. The ranking or logbook service your monitor supports set up.
                2. Which pieces you will post, and how often, decided in a sentence.
                3. Your test pieces from the last year uploaded.
                4. Your ranking checked after each quarterly test and not in between.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An online logbook set up with past tests uploaded and a written rule for which pieces you post and how often."
                cadence: rolling
              tasks:
                - "Create an account on the logbook service your monitor supports"
                - "Upload last year's test pieces"
                - "Write down which pieces you will post and how often"
                - "Sync the monitor and check the month's pieces uploaded @recurring(monthly:8)"
            - name: Lower back niggles after long erg pieces
              description: |-
                ## Purpose
                Lower back soreness is common in rowers and usually builds from volume, poor sequencing at the catch or a sudden jump in long pieces. Rather than pushing through or stopping altogether, check the last month's volume, film your technique and get a physiotherapist's assessment if it lasts more than a few days. The aim is a written plan agreed with them, not a guess.

                ## Milestones
                1. When the soreness started, and what changed in training before it, noted from your log.
                2. A side-on video checked for over-reaching at the catch or a slumped finish.
                3. A physiotherapist or doctor seen if pain persists, spreads or comes with numbness.
                4. A return plan agreed with them and written into your training week.

                ## Notes
                Get urgent medical help for back pain with numbness around the groin, leg weakness or bladder changes. Otherwise follow your physiotherapist on volume, not a plan from a forum.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written return plan agreed with a physiotherapist or doctor, with the volume changes entered in your training week."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Mark in your log when the soreness began and any volume jump before it"
                - "Film a side-on video at steady rate to check the catch and finish"
                - "Book a physiotherapist if the soreness lasts more than a few days"
                - "Do the exercises your physiotherapist gives you @recurring(daily)"
            - name: Novice, recreational or competitive squad
              description: |-
                ## Purpose
                After a learn to row course or a first season, most clubs offer squads with very different demands. A recreational squad might row twice a week, while a competitive squad expects six to ten sessions including early mornings and regular erg tests. Choosing honestly against your time and goals avoids both burning out and drifting away.

                ## Milestones
                1. Each squad's sessions per week, test expectations, racing calendar and costs listed.
                2. Your available hours per week counted honestly, including travel.
                3. A coach from each squad you are considering spoken to.
                4. A squad chosen and a review date set one term later.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A squad chosen after comparing at least two on hours, testing and racing, with a review date one term later."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List each squad's sessions, tests, races and costs"
                - "Count the hours you can give each week, including travel"
                - "Talk to a coach from each squad you are considering"
                - "Put a review date one term away in your calendar"
            - name: Winter training when the river floods
              description: |-
                ## Purpose
                Winter rivers flood, lakes freeze and daylight disappears, so outings get cancelled for weeks at a time. Planning an erg and land alternative for each regular outing slot keeps your fitness moving and your technique ticking over, instead of losing a whole block to the weather.

                ## Milestones
                1. The club's winter safety rules and cancellation thresholds read.
                2. A fallback erg session written for each regular outing slot.
                3. Lights, high-visibility kit and launch cover rules checked for dark outings.
                4. Missed water time and replacement sessions recorded in the log.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written fallback session for every regular outing slot, used through one winter with each replacement logged."
                cadence: cyclic
              tasks:
                - "Read the club's winter safety rules and flag limits"
                - "Write a fallback erg session for each regular outing slot"
                - "Check you have lights and high-visibility kit for dark outings"
                - "Reread the winter rules before the season starts @recurring(yearly)"
            - name: Rowing kit for training and racing
              description: |-
                ## Purpose
                Rowing needs close-fitting kit that will not snag on the slide or under the handle, warm layers for cold early outings, and for racing an all-in-one suit in club colours. Buying the right few items first saves money on clothing that turns out to be useless in a boat.

                ## Milestones
                1. The club's racing kit rules and colours checked.
                2. Close-fitting training layers chosen for warm and cold days.
                3. A splash top and a hat bought for winter outings.
                4. A racing suit ordered in time for the first event.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Training kit for warm and cold outings in your bag and a club racing suit ordered before your first race."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the club about racing kit colours and where to order"
                - "Check your training clothes for anything loose that snags the slide"
                - "Buy a splash top and a hat for cold outings"
                - "Order a racing suit at least six weeks before your first race"
            - name: First 2,000 m erg test with a pacing plan
              description: |-
                ## Purpose
                The 2,000 m test is rowing's standard measure, and nearly everyone goes off too fast the first time and hits a wall by 800 m. A plan with a target split, a controlled start, an even middle and a planned sprint turns the first test into a useful number rather than a bad memory. Do it after at least six weeks of steady training.

                ## Milestones
                1. A target split chosen from your 5,000 m baseline or a recent piece.
                2. A pacing plan written for each 500 m, including the first 20 strokes.
                3. The warm-up rehearsed in the week before.
                4. Test rowed, logged with drag factor and 500 m splits, and reviewed within two days.
              priority: high
              deadlineOffsetDays: 56
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A completed 2,000 m test with all four 500 m splits logged and reviewed against the pacing plan within two days."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Estimate a target split from your recent 5,000 m"
                - "Write the split for each 500 m on a card for the machine"
                - "Rehearse the full warm-up three days before"
                - "Row the test and review the splits against the plan"
            - name: Indoor rowing championship entry
              description: |-
                ## Purpose
                Indoor rowing championships run in many countries each winter, with races by age, weight and distance, and several accept virtual entries rowed on a home machine. Racing on an erg in front of a crowd, with a big screen showing every competitor, is a very different test from a solo piece. Pick one, enter it and build towards it.

                ## Milestones
                1. Two or three events listed with dates, distances, categories and entry deadlines.
                2. An event chosen and entry confirmed in the right age and weight category.
                3. Travel, warm-up machine access and start time confirmed.
                4. Race rowed and the result and splits logged.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An indoor rowing championship entered and raced, with the result and splits logged."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List indoor rowing championships in the next six months"
                - "Check the age and weight categories and any weigh-in rules"
                - "Enter the chosen event before the deadline"
                - "Plan travel to arrive an hour before your race start"
            - name: First regatta in a novice crew
              description: |-
                ## Purpose
                Regattas are side-by-side sprint races, often 500 m to 2,000 m, with novice events for crews who have never won. A first regatta means rigging a trailered boat, boating on time, marshalling and racing, sometimes several times in a day. Preparing the crew's race plan and the day's logistics makes it fun rather than chaotic.

                ## Milestones
                1. Event, date and crew agreed with the coach, and entry confirmed by the club.
                2. A race plan practised in training: start sequence, settle, push and finish.
                3. Kit, food and timetable for the day shared with the crew.
                4. Boat derigged, loaded and returned to the club after racing.

                ## Notes
                Read the regatta's safety instructions and racing rules before the day. Umpires can disqualify crews for kit or course faults.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A first regatta raced with your crew, with the race plan practised beforehand and the results logged."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Ask the coach which regatta suits your crew"
                - "Practise the start sequence and settle in two outings"
                - "Share the timetable, kit list and food plan with the crew"
                - "Help derig, load and return the boat after racing"
            - name: Head race over a long course
              description: |-
                ## Purpose
                Head races are timed processions over courses of around 4 to 7 km or longer, with crews started at intervals, and they fill the autumn and spring calendars. Long courses reward even pacing and good steering, and away heads add trailer loading, travel and very early boating times. Planning the logistics separately from the racing frees the crew to focus.

                ## Milestones
                1. Head race and crew agreed, entry made and start time confirmed.
                2. Race pace practised over at least 4 km in training.
                3. Travel, any accommodation and the trailer loading time agreed.
                4. Race rowed and the crew's time compared against the category.

                ## Notes
                Start from the **Trip** template for away heads. Study the course map and marshalling instructions before the day, as heads have strict rules on where crews wait.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A head race completed with the crew, travel planned on the template, and the result compared against the category winner."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pick a head race with the coach and confirm the entry"
                - "Row a 4 km piece at planned race pace in training"
                - "Fill in travel and trailer loading times on the trip template"
                - "Go through the course map and marshalling rules with the crew"
            - name: Winter distance challenge of 200,000 metres
              description: |-
                ## Purpose
                Many rowers set a December or new year distance challenge, such as 200,000 m over a few weeks, to keep moving through the holidays. Rowed at easy pace it builds aerobic base; rowed hard it brings sore backs and ribs. Set a target that fits your normal weekly volume plus a modest increase.

                ## Milestones
                1. A target and window chosen that is no more than about 30 percent above your usual weekly metres.
                2. Session targets written into the log.
                3. Every session logged with a running total.
                4. Challenge finished, or stopped early with a note on why.
              priority: low
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A distance challenge target set no higher than 130 percent of usual weekly metres, with every session logged and the total recorded."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Work out your average weekly metres over the last month"
                - "Set a challenge target and window that fits that volume"
                - "Write session targets into the log"
                - "Choose next winter's distance challenge @recurring(yearly)"
            - name: Team erg marathon relay for charity
              description: |-
                ## Purpose
                A club or gym team rowing a marathon of 42,195 m or a 100 km relay on one erg is a popular fundraiser and a good way to bring members together. It needs a rota, quick changeovers and a public page for donations. Planning it like an event keeps it safe and on time.

                ## Milestones
                1. Distance, date, venue and charity agreed with the club or gym.
                2. A rota of rowers, changeover rules and spare rowers written.
                3. A fundraising page set up and shared.
                4. Event completed, with total distance and money raised announced.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "A team erg relay completed over the agreed distance, with the amount raised published to members."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Agree a distance, date and charity with the club committee"
                - "Draw up a rota of rowers in ten minute stints with spares"
                - "Set up and share the fundraising page"
                - "Announce the total distance and amount raised afterwards"
            - name: Novice season as a university rower
              description: |-
                ## Purpose
                University clubs recruit large novice squads each autumn, and the first season is a fast mix of early mornings, erg tests, novice races and lectures. Planning sleep, food and study around the training timetable is what separates the novices who stay in the boat from those who quit by spring.

                ## Milestones
                1. The club's training timetable and novice race dates in your calendar beside lectures.
                2. Sleep and meals planned around early outings.
                3. Erg test dates known and steady sessions logged.
                4. An end-of-season decision made about senior squads.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "One full novice season completed with the training timetable, tests and races in your calendar alongside lectures."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Put the club timetable and lectures into one calendar"
                - "Plan a bedtime that fits the earliest outing day"
                - "Batch cook or plan meals for early training days"
                - "Talk to the senior coach about next season"
            - name: Masters rowing in a veteran crew
              description: |-
                ## Purpose
                Masters rowing starts at 27 in many federations, with age bands and handicaps that let crews of mixed ages race fairly. Veteran crews often combine returners and late starters, and recovery and injury risk need more attention than in junior squads. Joining a masters squad gives structure without the volume of a performance group.

                ## Milestones
                1. The masters age categories and handicap system in your federation understood.
                2. A masters squad or crew found and joined.
                3. A training week agreed that leaves room for recovery and work.
                4. A masters event entered in your age band.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A masters squad joined and one masters event entered in your correct age band."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Look up your federation's masters age categories"
                - "Ask the club whether it has a masters squad or crew"
                - "Agree a training week with the coach that includes recovery days"
                - "Enter one masters event in your age band"
            - name: Returning to the erg after years away
              description: |-
                ## Purpose
                Former rowers who come back after years away remember their old 2,000 m time and want it again within a month, which is how ribs and backs get hurt. A return built on six to eight weeks of steady work before any test, with technique checked afresh, gets you back faster in the end.

                ## Milestones
                1. Your old best scores recorded as a reference, not a target.
                2. Six weeks of steady sessions logged before any maximal test.
                3. Technique checked on video against current coaching guidance.
                4. A first returning test rowed and new targets set from it.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Six weeks of logged steady training before a first returning test, with new targets set from that test rather than old bests."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write your old bests in the log as reference only"
                - "Book a short technique session with a club coach"
                - "Row three steady sessions a week for six weeks"
                - "Set new targets from your first returning test"
            - name: Early outings around work and family
              description: |-
                ## Purpose
                Dawn and weekend outings collide with work, school runs and family plans. Rowers with jobs and children who keep going usually agree a fixed number of outings, protect them in the shared calendar and fill the gaps on a home or gym erg. Talking it through with the people you live with avoids resentment later.

                ## Milestones
                1. A realistic number of outings per week agreed with your household.
                2. Those outings entered in the shared family calendar.
                3. Short erg sessions planned for the days without outings.
                4. The arrangement reviewed after a month.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "An agreed number of weekly outings entered in the shared calendar, followed for a month and then reviewed with your household."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Agree a weekly number of outings with your household"
                - "Add those outings to the shared family calendar"
                - "Plan 30 minute erg sessions for the other days"
                - "Review the arrangement together after four weeks"
            - name: Coastal and sea rowing for river rowers
              description: |-
                ## Purpose
                Coastal rowing uses wider, heavier boats built for waves, with beach starts and courses round buoys, and it is growing in many countries. River rowers who try it have to learn surf launches, swell and tides, and safety rules that differ from flat water. A taster session with a coastal club shows whether it suits you.

                ## Milestones
                1. A coastal or sea rowing club found and a taster booked.
                2. The tide, wind and sea state limits that club uses understood.
                3. A beach launch and landing done under supervision.
                4. A decision recorded about coastal racing or recreational outings.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A coastal taster completed, the club's sea limits noted and a decision recorded about carrying on with coastal rowing."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Find a coastal rowing club or session within reach"
                - "Book a taster session"
                - "Ask the club what tide, wind and sea limits they use"
                - "Write down whether to carry on after the taster"
            - name: Erg base for runners and cyclists in the off season
              description: |-
                ## Purpose
                Runners and cyclists often add the erg in the off season or while injured, because it trains the heart and lungs with little impact and works the upper body too. The catch is technique: endurance athletes tend to pull with the arms and rush the slide. A few coached sessions first make the cross-training worth the time.

                ## Milestones
                1. The stroke sequence learned before any long pieces.
                2. Two erg sessions a week in place of easy runs or rides.
                3. Heart rate compared at a familiar effort across sports.
                4. Erg sessions reviewed at the end of the off season.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Two erg sessions a week replacing easy runs or rides for six weeks, after a technique check."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Book a technique session before your first long piece"
                - "Swap two easy runs or rides a week for erg sessions"
                - "Compare heart rate at the same effort on the erg and in your main sport"
                - "Decide at the end of the off season whether to keep the erg"
            - name: Breaking a 2,000 m time barrier
              description: |-
                ## Purpose
                Going under a round number, such as seven or eight minutes, takes a 12 to 16 week block of progressive intervals, steady volume and a planned test. The gap between your best and the barrier tells you how realistic it is: a second or two per 500 m in one season is already a lot for a trained rower.

                ## Milestones
                1. The gap between your best and the barrier expressed in seconds per 500 m.
                2. A 12 to 16 week block written with intervals progressing towards the target split.
                3. A check piece rowed at target split each month.
                4. The test rowed at the end of the block with splits logged.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A 12 to 16 week block completed and a 2,000 m test rowed at its end, with the result logged against the barrier."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Work out the gap to your barrier in seconds per 500 m"
                - "Write a 12 to 16 week block with progressing intervals"
                - "Row a 1,000 m check piece at target split @recurring(monthly:16)"
                - "Book the end-of-block test in your calendar"
            - name: Lightweight rowing decisions with a dietitian
              description: |-
                ## Purpose
                Lightweight categories have strict weigh-in limits, and making weight badly harms both health and performance. Before committing to lightweight racing, look at your natural weight across a training month and talk to a sports dietitian. If making the limit needs severe restriction, racing open weight is usually the better choice.

                ## Milestones
                1. Lightweight limits and weigh-in rules for your events written down.
                2. Your weight across a normal training month recorded.
                3. A sports dietitian or doctor consulted on whether the limit is realistic for you.
                4. A written decision on lightweight or open weight, with the advice noted.

                ## Notes
                Never use dehydration or crash dieting to make weight. If you notice disordered eating thoughts or missed periods, talk to a doctor.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on lightweight or open weight racing, made after a sports dietitian consultation and a month of weight records."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find the lightweight limits and weigh-in rules for your events"
                - "Record your weight once a week over a normal training month"
                - "Book an appointment with a sports dietitian"
                - "Write your decision and the dietitian's advice in your log"
            - name: Seat racing and crew selection trials
              description: |-
                ## Purpose
                Coaches select competitive crews from erg scores, seat races and how athletes move a boat. Seat racing swaps two rowers between crews over repeated pieces to compare them directly. Knowing how selection works, preparing for trial days and asking for feedback afterwards gives you the best chance of a seat.

                ## Milestones
                1. The squad's selection criteria asked for and written down.
                2. Erg scores and attendance gathered for the selection period.
                3. Rest and food planned for seat racing or trial days.
                4. Selection feedback requested and one improvement chosen.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Selection criteria written down before trials, and feedback received after selection with one improvement recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the coach how crews are selected this season"
                - "Collect your erg scores and attendance for the period"
                - "Plan rest and food for the trial days"
                - "Ask for selection feedback and note one improvement"
            - name: Rigging spread, span and oar length
              description: |-
                ## Purpose
                Rigging sets the gearing and geometry of a boat: spread or span, oar length, inboard, pitch and foot stretcher position. Small changes alter how heavy each stroke feels and suit different crews and conditions. Learning to measure and adjust rigging under a coach's eye makes you a more independent and useful rower.

                ## Milestones
                1. Rigging terms learned and the club's rigging tools located.
                2. Current settings of your usual boat measured and recorded.
                3. One adjustment made with a coach and its effect noted after an outing.
                4. A rigging card for the boat kept with the club's records.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A rigging card recording spread or span, oar length, inboard and pitch for your usual boat, with one coached adjustment tested."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask a coach to show you the club's rigging tools"
                - "Measure spread or span, inboard and pitch on your usual boat"
                - "Test one coached rigging change in an outing"
                - "Write the settings on a rigging card for the club"
            - name: Coaching novice rowers at your club
              description: |-
                ## Purpose
                Experienced rowers are often asked to help with learn to row courses or novice squads, and many federations offer a first-level coaching qualification. Coaching sharpens your own understanding of the stroke and keeps the club growing. Start by assisting a qualified coach and work towards your own certificate.

                ## Milestones
                1. Your federation's coaching courses and safeguarding requirements found.
                2. Several sessions assisted under a qualified coach.
                3. A first-level coaching qualification booked or completed.
                4. A novice session planned and delivered on your own.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A first-level rowing coaching qualification booked or completed, and one novice session planned and delivered on your own."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Look up your federation's first coaching course and safeguarding check"
                - "Offer to assist on the next learn to row course"
                - "Book the coaching course"
                - "Plan next week's novice session @recurring(weekly:thu)"
---

# Rowing & Indoor Erg Training

This area is for rowers on the water and on the indoor rowing machine, from a first learn to row course to trialling for a club's top crew. It opens with the foundations (club or erg, health questions, drag factor, the stroke sequence, water safety, a baseline piece, a log and a training week), then the weekly machinery of steady state, intervals, strength, outings and test weeks, the skills of catch timing, drills, sculling, sweep, coxing and reading the force curve, the decisions about machines, squads, kit and winter, the events from a first 2,000 m test to regattas and head races, versions for students, masters, returners, coastal rowers and runners, and finally barrier tests, lightweight decisions, selection, rigging and coaching.

What repeats is a Sunday long steady piece, a Wednesday interval session, strength on Monday and Thursday, Monday outing sign-ups, a Friday plan for next week, monthly technique videos, erg maintenance, rota duties and a block review, and a quarterly test. The Metrics log, Training program, Operational checklist, Purchase decision and Trip templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
