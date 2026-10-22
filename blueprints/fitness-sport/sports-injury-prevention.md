---
id: fitness-sport.sports-injury-prevention
name: Sports Injury Prevention
description: "Warm-ups that actually protect, a training load you measure and cap, strength work aimed at your sport's weak links, and written rules for acting on niggles before they turn into injuries."
category: personal
version: 1.0.0
tags: [fitness-sport, sports-injury-prevention, athlete, injury-prevention, load-management, warm-up, prehab, strength-training]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - habit-tracker
    - training-program
    - purchase-decision
    - operational-checklist
  pillars:
    - name: Fitness & Sport
      emoji: "🏋️"
      description: "Training, play and competition: building strength, endurance and skill in a sport or a gym, structuring blocks of work around events, recovering properly, and keeping the sessions honest with a log rather than a feeling."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Sports Injury Prevention
          description: "Reducing injury risk with warm-ups, load management, strength work for weak links and early warning signs, for anyone training regularly."
          projects:
            - name: Injury history and recurring trouble spots
              description: |-
                ## Purpose
                The best single predictor of the next injury is the last one, yet most athletes cannot say when their calf last went or how many weeks it cost. Writing down every injury and niggle from the past five years, with what changed in training in the weeks before each, shows the patterns your prevention work should target first.

                ## Milestones
                1. Every injury or niggle from the last five years listed with body part, side, date and weeks missed.
                2. The training change in the month before each one noted, such as new shoes, a volume jump or a first sprint session.
                3. Your two or three recurring trouble spots named and ranked.
                4. The list saved where you and any clinician you see can find it.

                ## Notes
                Include the niggles that never stopped you training. They are often the early version of the injury that later did.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written injury history covering at least five years, with your top three recurring trouble spots ranked."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every injury you can remember from the last five years in one sitting"
                - "Check old training logs or app history for the dates of each one"
                - "Note what changed in training in the month before each injury"
                - "Rank the body parts that keep coming back"
            - name: Common injuries in your sport, ranked
              description: |-
                ## Purpose
                Each sport has its own injury fingerprint: hamstring strains in football, Achilles and shin trouble in running, shoulders in swimming and throwing, fingers and elbows in climbing. Knowing the five injuries your sport produces most often tells you where twenty minutes of prevention a week buys the most protection.

                ## Milestones
                1. The five most common injuries in your sport listed from a governing body, sports medicine source or club physio.
                2. The usual mechanism of each one written in a sentence.
                3. Your own injury history compared against the five.
                4. Two or three target areas chosen for your prevention strength work.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page list of the five most common injuries in your sport, with mechanisms and the two or three targets you chose."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Look up injury surveillance figures for your sport from a governing body or sports medicine journal"
                - "Ask a club physio or coach which injuries they see most each season"
                - "Write the usual mechanism beside each injury"
                - "Choose the targets your strength sessions will cover"
            - name: Movement screen with a sports physio
              description: |-
                ## Purpose
                A sports physio can spot in forty minutes what years of training by feel have hidden: a knee that caves on a single-leg squat, a stiff big toe, a hip that barely rotates. Booking a screen while you are healthy gives you a baseline and a short list of fixes before anything breaks.

                ## Milestones
                1. A physio or sports therapist who screens healthy athletes booked.
                2. Your injury history and sport targets sent ahead of the appointment.
                3. A written summary of findings with three priorities for you.
                4. Exercises for those priorities demonstrated and filmed on your phone.

                ## Notes
                Ask for a screen, not treatment, when you book. Some clinics run a cheaper movement screen separate from injury appointments.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A physio screen completed with three written priorities and the exercises for each one recorded on video."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask two local clinics whether they screen athletes who are not injured"
                - "Book the screen for a day after an easy session"
                - "Send your injury history to the clinic before the appointment"
                - "Film each corrective exercise during the session"
            - name: Left and right strength asymmetry check
              description: |-
                ## Purpose
                Large differences between sides are common after an old injury and often go unnoticed until the weaker side fails under fatigue. A home check of single-leg calf raises, single-leg bridges, side plank holds and single-leg balance takes under an hour and gives you numbers to retest every quarter.

                ## Milestones
                1. Single-leg calf raises to fatigue counted on each side.
                2. Single-leg glute bridge reps and side plank holds recorded for both sides.
                3. Eyes-closed single-leg balance time recorded for both sides.
                4. Any test where one side trails by more than about 10 percent flagged for your strength sessions.

                ## Notes
                Start from the **Metrics log** template. Test both sides on the same day, fresh, in the same order every time.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Four single-leg tests recorded for both sides, with any gap over about 10 percent marked as a training priority."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Do single-leg calf raises to fatigue on each side and write down the counts"
                - "Time a side plank hold on each side"
                - "Count single-leg bridge reps on each side at the same tempo"
                - "Mark any test where one side trails by more than 10 percent"
            - name: Finding a sports physio before you need one
              description: |-
                ## Purpose
                Waiting until you are limping to search for a clinician costs days, and the first free appointment is rarely with someone who knows your sport. Choosing a physio now, and checking cost, insurance cover and how fast they see new problems, means the first move after a tweak is a phone call rather than a search.

                ## Milestones
                1. Two or three sports physios or therapists compared on experience with your sport, price and waiting times.
                2. Insurance or club cover for physiotherapy checked and the claim route written down.
                3. One clinician chosen, with their number and booking link saved in your phone.
                4. Your nearest urgent care or minor injuries service noted for problems a physio cannot handle.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One named sports physio chosen, with contact details, price and insurance claim route saved where you can find them."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask teammates or your club which physio they trust"
                - "Check whether your health insurance or club membership covers physiotherapy"
                - "Compare prices and waiting times for a new problem at two clinics"
                - "Save the chosen physio's number and booking page in your phone"
            - name: Pain monitoring rules written in advance
              description: |-
                ## Purpose
                Deciding mid-session whether a sore Achilles is fine to run on is how small problems become six-week layoffs. Writing simple rules now, a 0 to 10 pain scale, a limit for training through discomfort and a next-morning check, means the decision is made calmly before adrenaline gets a vote.

                ## Milestones
                1. A 0 to 10 pain scale defined in your own words with examples.
                2. A limit agreed with your physio for training through discomfort, with what to do when it is crossed.
                3. A next-morning rule written for when pain or stiffness is worse the day after.
                4. The rules saved on your phone and shared with a training partner or coach.

                ## Notes
                Pain rules are for familiar aches in tendons and muscles. Sharp pain, swelling, a joint giving way or pain at rest means stop and get it seen.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written set of pain rules, agreed with a physio or coach, saved on your phone and shared with one training partner."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write what a 2, a 5 and an 8 out of 10 feel like for you"
                - "Ask your physio what pain level they are happy for you to train through"
                - "Write the next-morning rule in one sentence"
                - "Share the rules with a training partner who will hold you to them"
            - name: Six-week training load baseline
              description: |-
                ## Purpose
                Most overuse injuries follow a jump in load, and you cannot spot a jump without knowing your normal. Totting up the last six weeks of minutes, distance or sets, plus how hard each session felt, gives you the weekly average that every future increase is measured against.

                ## Milestones
                1. Six weeks of sessions pulled from a watch, app or notebook into one table.
                2. Weekly totals worked out in one unit: minutes, distance, sets, or session effort multiplied by minutes.
                3. Your average week and your biggest week identified.
                4. A ceiling for next week's load written down from that average.

                ## Notes
                Start from the **Metrics log** template. Session effort out of 10 multiplied by minutes works for any sport and needs no gadgets.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A table of the last six weeks of training load with a weekly average and next week's ceiling written beneath it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Export or copy the last six weeks of sessions into one table"
                - "Choose one load unit you will keep using from now on"
                - "Work out your average and biggest week"
                - "Write next week's load ceiling under the table"
            - name: Concussion and red flag action card
              description: |-
                ## Purpose
                In the minute after a head knock or a collapse, nobody on the touchline remembers the guidance. A one-page card covering concussion signs, the rule that suspected concussion means no return that day, and the symptoms that need emergency help puts the right decision in your kit bag and on your phone.

                ## Milestones
                1. Current concussion guidance from your sport's governing body or a national sports medicine source read.
                2. A one-page card listing concussion signs and the red flags that need emergency care.
                3. The graduated return steps your sport requires written on the back.
                4. The card printed for your kit bag and saved on your phone with an emergency contact.

                ## Notes
                If in doubt, sit them out. Return to play after concussion follows your governing body's protocol and, where it says so, medical clearance.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A one-page concussion and red flag card in your kit bag and on your phone, based on your governing body's current guidance."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find your governing body's current concussion guidance"
                - "List the signs that mean someone stops playing immediately"
                - "List the symptoms that mean calling emergency services"
                - "Print the card and put it in your kit bag"
            - name: Footwear and protective kit audit
              description: |-
                ## Purpose
                Worn-out shoes, a cracked shin pad or a mouthguard from three seasons ago quietly remove protection you think you have. Checking every item against its age, distance and fit, and replacing what has expired, is one of the cheapest injury prevention jobs there is.

                ## Milestones
                1. Every pair of training and match shoes listed with approximate age and distance.
                2. Protective kit such as mouthguard, shin pads, helmet or wrist guards checked for fit and damage.
                3. Items past their useful life replaced or put on a replacement list with a date.
                4. Each shoe's start date written inside the tongue or in your training app.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every shoe and protective item checked, with worn items replaced or listed for replacement by a set date."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Lay out every pair of training shoes and note their age"
                - "Check each shoe for flattened midsoles and worn heels"
                - "Try on your mouthguard, pads or helmet and note anything loose or cracked"
                - "Order replacements for anything past its useful life"
            - name: Sport-specific warm-up routine
              description: |-
                ## Purpose
                Structured warm-ups such as football's FIFA 11+ have cut injuries substantially in trials, but only when done in full, most sessions, for months. Writing a 10 to 15 minute routine for your sport that raises temperature, wakes up the muscles you rely on and rehearses your movements at speed turns the warm-up from a jog and a few arm swings into real protection.

                ## Milestones
                1. A written 10 to 15 minute warm-up with raise, activate, mobilise and potentiate phases.
                2. The routine rehearsed until you can run through it without notes.
                3. A shorter version ready for cold mornings, tight schedules and match days.
                4. Four weeks in which the full warm-up was done before at least nine sessions in ten.

                ## Notes
                Start from the **Habit tracker** template. The last phase should look like your sport at speed: strides, cuts, throws or jumps.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Over four weeks, the written warm-up is done in full before at least nine out of ten sessions, recorded in a tracker."
                cadence: rolling
              tasks:
                - "Write a four-phase warm-up that ends with movements at full speed"
                - "Time the routine and trim it to 15 minutes or less"
                - "Write a five-minute version for days when time is short"
                - "Check that every session last week started with the full warm-up @recurring(weekly:mon)"
            - name: Twice-weekly prevention strength sessions
              description: |-
                ## Purpose
                Strength training has the strongest evidence of any prevention method for sports injuries, and beats stretching by a wide margin. Two short sessions a week aimed at the weak links from your screen and your sport's injury list, built up over months, make muscles and tendons ready for what training throws at them.

                ## Milestones
                1. A 30 to 40 minute session written with exercises for your top three targets.
                2. Starting weights, reps and progression rules recorded.
                3. Eight weeks completed at two sessions a week.
                4. Load or reps on every target exercise higher than at the start.

                ## Notes
                Start from the **Training program** template. Keep these sessions away from your hardest sport days, and keep them going in season at lower volume rather than dropping them.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two prevention strength sessions a week for eight weeks, with load or reps on every target exercise higher than at week one."
                cadence: rolling
              tasks:
                - "Pick one exercise for each of your top three injury targets"
                - "Record starting weights and reps for each exercise"
                - "Do the prevention strength session @recurring(weekly:tue,fri)"
                - "Raise the load or reps on any exercise that felt easy last month @recurring(monthly:5)"
            - name: Sunday load and niggle check-in
              description: |-
                ## Purpose
                Ten minutes at the end of each week, comparing what you did with what you planned and noting every ache, catches a rising load and a creeping niggle while there is still time to adjust. Done honestly, it is the habit that heads off most overuse injuries.

                ## Milestones
                1. A check-in page with weekly load, biggest session, sleep and every niggle scored 0 to 10.
                2. The check-in done every Sunday for eight weeks running.
                3. At least one week adjusted in advance because of something the check-in showed.
                4. Niggles that appear twice or more moved into your niggle log.

                ## Notes
                Record the niggles that seem too small to matter. They are the ones that grow.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive Sunday check-ins recorded, including weekly load and niggle scores, with at least one plan change made because of them."
                cadence: rolling
              tasks:
                - "Set up a one-page check-in with load, sleep and niggle scores"
                - "Do the weekly load and niggle check-in @recurring(weekly:sun)"
                - "Compare this week's load with your six-week average"
                - "Write one change to next week if any niggle scored 3 or more"
            - name: Weekly volume progression cap
              description: |-
                ## Purpose
                Overuse injuries cluster in the weeks after a sudden rise in volume or intensity, often when motivation is high or a race is close. A written cap on how much each week can rise above your recent average, with a lighter week every third or fourth, keeps the build slow enough for tendons and bones to keep pace with your lungs.

                ## Milestones
                1. A progression cap chosen with your coach or physio and written down.
                2. A lighter week placed every third or fourth week in the calendar.
                3. Next month's weekly totals planned within the cap.
                4. Three months completed without a week breaking the cap unplanned.

                ## Notes
                Common rules of thumb allow a rise of around 10 percent a week in a steady build. Treat them as ceilings, not targets, and be stricter after any break.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three months of weekly totals that stay inside your written cap, with every planned lighter week taken."
                cadence: rolling
              tasks:
                - "Agree a weekly progression cap with your coach or physio"
                - "Mark a lighter week every third or fourth week in your calendar"
                - "Plan next month's weekly totals inside the cap @recurring(monthly:3)"
                - "Flag any new session type that adds load your totals do not capture"
            - name: Hard and easy day pattern
              description: |-
                ## Purpose
                Back-to-back hard days, such as a sprint session the day after a match or heavy squats before a long run, stack fatigue on the same tissues and are a common setting for strains. Laying out the week so each hard day is followed by an easy or rest day gives muscles and tendons the 24 to 48 hours they need.

                ## Milestones
                1. Every regular session in your week labelled hard, moderate or easy.
                2. A weekly layout in which no two hard days fall back to back.
                3. Matches, club sessions and strength days fitted into that layout.
                4. A month reviewed with no unplanned back-to-back hard days.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written weekly layout with no back-to-back hard days, and one month reviewed in which the layout was kept."
                cadence: rolling
              tasks:
                - "Label each session in a typical week hard, moderate or easy"
                - "Move sessions until no two hard days sit together"
                - "Tell your club or training partners which days you keep easy"
                - "Check last month's sessions for back-to-back hard days @recurring(monthly:20)"
            - name: Morning readiness score
              description: |-
                ## Purpose
                A 30-second rating each morning of soreness, stiffness, sleep and mood picks up the slow slide that comes before many injuries, days before it shows in a session. Within a few weeks you know your normal range and which score means the planned hard session should become an easy one.

                ## Milestones
                1. Four questions chosen and scored 1 to 5 each morning.
                2. Three weeks of scores recorded to set your normal range.
                3. A rule written for what to do when the total drops below that range.
                4. At least one session changed in response to a low score.

                ## Notes
                Start from the **Habit tracker** template. Keep it short enough to finish before you get out of bed, or you will stop doing it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three weeks of morning readiness scores recorded, with a written rule for low-score days that has been used at least once."
                cadence: rolling
              tasks:
                - "Choose four questions such as soreness, stiffness, sleep and mood"
                - "Score your readiness before getting up @recurring(daily)"
                - "Work out your normal range after three weeks"
                - "Write what you will change on a low-score morning"
            - name: Niggle log and the 72-hour rule
              description: |-
                ## Purpose
                Most injuries announce themselves as a niggle first: a tight calf on the stairs, a sore shoulder on the second set. Logging each niggle the day it appears and following a simple rule, such as easing off for 72 hours and seeing your physio if it has not settled, turns early warnings into small adjustments instead of layoffs.

                ## Milestones
                1. A niggle log with body part, side, date, score and what made it worse.
                2. A written 72-hour rule saying what you reduce and when you book the physio.
                3. Every new niggle logged within a day for three months.
                4. At least one niggle settled with a short change rather than time off.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three months of niggles logged within a day of appearing, each with the 72-hour rule applied and its outcome recorded."
                cadence: rolling
              tasks:
                - "Set up the niggle log in your phone notes or training app"
                - "Write your 72-hour rule in two sentences"
                - "Log a new niggle on the day it appears and score it out of 10"
                - "Review the month's niggles and close the ones that have settled @recurring(monthly:28)"
            - name: Monthly shoe mileage and kit check
              description: |-
                ## Purpose
                Running shoes lose cushioning gradually, studs wear unevenly and grips crack, and the change is too slow to notice day to day. A five-minute monthly check of mileage and condition stops worn kit becoming the hidden cause of a sore shin or a rolled ankle.

                ## Milestones
                1. Distance or hours recorded for every pair of shoes in use.
                2. A retirement point chosen for each pair from the maker's guidance and how they feel.
                3. A replacement pair bought and broken in before the old pair is retired.
                4. Six monthly checks completed in a row.

                ## Notes
                Rotating two pairs of running shoes lets you introduce a new pair gradually instead of switching overnight.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly kit checks recorded, with every pair of shoes retired at or before its chosen point."
                cadence: rolling
              tasks:
                - "Write a retirement distance or age for each pair of shoes"
                - "Check shoe mileage, studs and protective kit condition @recurring(monthly:12)"
                - "Order the next pair when a shoe is within 100 km of retirement"
                - "Introduce new shoes over two weeks of shorter sessions"
            - name: Quarterly re-test of weak links
              description: |-
                ## Purpose
                Prevention strength work only earns its time if the weak links actually get stronger. Repeating the asymmetry checks every three months shows whether a lagging calf or hip is catching up, and tells you when a target can be dropped and another added.

                ## Milestones
                1. The original asymmetry tests repeated in the same order and conditions.
                2. Results set beside the baseline and the previous re-test.
                3. Targets now within about 10 percent side to side retired from the priority list.
                4. A new target added from your injury list or physio screen wherever one was retired.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Each quarterly re-test recorded beside the baseline, with the strength session's target list updated after every one."
                cadence: cyclic
                effort_hours_estimate: "4"
              tasks:
                - "Repeat the single-leg tests in the same order as your baseline @recurring(quarterly)"
                - "Put the new results beside the baseline in your log"
                - "Retire any target where the two sides now match"
                - "Add one new exercise to the strength session where a target was retired"
            - name: Season phase load plan
              description: |-
                ## Purpose
                Injury rates rise at predictable points in a season: the first weeks of pre-season, congested fixture periods and the return after a winter break. Planning each phase's volume, intensity and strength focus before the season starts puts the riskiest weeks on your calendar where you can see them coming.

                ## Milestones
                1. The season split into off-season, pre-season, in-season and transition phases with dates.
                2. A load target and strength focus written for each phase.
                3. The highest-risk weeks marked, such as the first fortnight of pre-season and fixture clusters.
                4. A plan for keeping two strength sessions a week through the in-season phase.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A season plan with dated phases, a load target for each and the highest-risk weeks marked, written before pre-season starts."
                cadence: cyclic
                effort_hours_estimate: "4"
              tasks:
                - "Write the dates of your season's phases on one page"
                - "Set a load target and strength focus for each phase"
                - "Mark the weeks with the highest injury risk"
                - "Rebuild the season plan before each new pre-season starts @recurring(yearly)"
            - name: Landing and cutting mechanics for knee protection
              description: |-
                ## Purpose
                Many non-contact knee injuries, including ACL tears, happen when landing or changing direction with the knee collapsing inwards and the trunk upright and stiff. Practising soft, balanced landings and controlled cuts under a coach's eye or on video retrains that pattern, and programmes that include it reduce knee injuries in field and court sports.

                ## Milestones
                1. Video of your landing and cutting taken from the front and side.
                2. Two or three faults identified, such as knees caving inwards or stiff landings.
                3. Six weeks of landing and cutting drills done twice a week within warm-ups.
                4. Repeat video showing improved alignment on the same drills.

                ## Notes
                This matters most in sports with jumping and sudden changes of direction: football, netball, basketball, handball, rugby and racket sports.
              priority: medium
              deadlineOffsetDays: 56
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Before and after video of landing and cutting drills, six weeks apart, showing the faults you identified reduced."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Film yourself doing drop landings and 45 degree cuts from front and side"
                - "Ask a coach or physio to name the two biggest faults"
                - "Add three landing and cutting drills to your warm-up"
                - "Film the same drills again after six weeks"
            - name: Running cadence and gait cues
              description: |-
                ## Purpose
                Runners with shin, knee or hip pain are often overstriding, landing well ahead of the hips with a long, slow step. Measuring your cadence and, with a physio or coach, trying a small increase is one of the simplest gait changes with evidence for reducing load at the knee and hip.

                ## Milestones
                1. Easy-pace cadence measured across several runs.
                2. A side-on gait video taken on a treadmill or a flat path.
                3. A small cadence target, often 5 to 10 percent higher, agreed with a coach or physio.
                4. The new cadence holding at easy pace without conscious effort after six weeks.

                ## Notes
                Change one thing at a time and build it in gradually. A gait change shifts load onto different tissues, which need time too.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A gait video and cadence baseline recorded, with an agreed new cadence held on easy runs after six weeks."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read your average cadence from your watch for three easy runs"
                - "Film a side-on clip of yourself running at easy pace"
                - "Agree a cadence target with your coach or physio"
                - "Run short sections with a metronome app set to the new cadence"
            - name: Lifting technique audit on video
              description: |-
                ## Purpose
                Back, shoulder and knee pain in the gym is more often a load and technique problem than bad luck. Filming your main lifts at working weight and having a qualified coach review them catches the faults that appear only when a set gets hard, like a rounding back on the last deadlift rep.

                ## Milestones
                1. Each main lift filmed from the side at working weight, including the final reps of a hard set.
                2. The footage reviewed by a qualified strength coach.
                3. One technique cue and one load or range change agreed for each lift.
                4. Repeat video after four weeks showing the cue in place.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each main lift filmed and reviewed by a qualified coach, with one cue per lift visible in footage four weeks later."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Film your main lifts from the side during a normal heavy session"
                - "Pick out the reps where your position changed under fatigue"
                - "Book a qualified strength coach to review the footage"
                - "Film the same lifts four weeks later using the new cues"
            - name: Nordic hamstring curl progression
              description: |-
                ## Purpose
                Hamstring strains are the most common injury in sprinting sports, and they come back often. Programmes built on the Nordic hamstring curl have roughly halved hamstring injuries in studies of footballers, but the soreness from starting too hard makes many people quit, so a gradual ten-week build is what makes the habit stick.

                ## Milestones
                1. A secure anchor for your heels found at home or in the gym.
                2. A ten-week progression starting at low volume written with your coach.
                3. Ten weeks completed with no more than two sessions missed.
                4. A small maintenance set kept in your weekly strength session afterwards.

                ## Notes
                Expect some soreness in the first two weeks. Start with fewer reps than you think you need.
              priority: medium
              deadlineOffsetDays: 84
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Ten weeks of Nordic curl sessions logged with no more than two missed, and a weekly maintenance set kept afterwards."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find a secure heel anchor such as a loaded bar, a partner or a strap"
                - "Write a ten-week Nordic curl progression with your coach"
                - "Do the first week at the lowest volume even if it feels easy"
                - "Log each Nordic session and any soreness the next day"
            - name: Copenhagen adductor programme for groin injury
              description: |-
                ## Purpose
                Groin pain can drag on for a whole season in football, hockey and other kicking and skating sports, and weak adductors are a common factor. The Copenhagen adduction exercise, progressed from a short lever to a long lever over several weeks, has trial evidence for reducing groin problems in footballers.

                ## Milestones
                1. Adductor strength checked on each side with a squeeze test or a side-lying hold.
                2. A short-lever starting level chosen and an eight-week progression written.
                3. Eight weeks completed within your prevention strength sessions.
                4. Hold time or reps improved on the re-test.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "An eight-week Copenhagen progression completed, with adductor hold time or reps improved on a re-test."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Time a side-lying adductor hold on each side"
                - "Learn the short-lever Copenhagen from a physio or a reliable video"
                - "Add two sets to each prevention strength session"
                - "Re-test adductor holds after eight weeks"
            - name: Shoulder care for overhead and throwing athletes
              description: |-
                ## Purpose
                Swimmers, tennis players, cricketers, volleyball players and climbers ask their shoulders to work overhead thousands of times a week, and pain usually follows a jump in volume combined with weak rotator cuff and shoulder blade muscles. A short routine of external rotation and scapular work, plus a count of throws or serves, protects the joint that is hardest to rest.

                ## Milestones
                1. Shoulder rotation range and strength compared between sides by a physio or a simple test.
                2. A ten-minute rotator cuff and shoulder blade routine written.
                3. The routine done before overhead sessions or in strength sessions for eight weeks.
                4. Weekly throw, serve or stroke volume tracked alongside it.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Eight weeks of the shoulder routine logged alongside weekly overhead volume, with a side-to-side comparison recorded at the start."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Compare shoulder rotation on both sides with your physio or a simple test"
                - "Write a ten-minute rotator cuff and shoulder blade routine"
                - "Count your weekly throws, serves or strokes for a month"
                - "Add the routine to the start of every overhead session"
            - name: Balance training to prevent ankle sprains
              description: |-
                ## Purpose
                Once you have sprained an ankle, the chance of doing it again is high, partly because the joint's sense of position is never retrained. Short daily balance work, progressing from standing on one leg to hops and landings on unstable ground, is one of the best-supported ways to prevent repeat sprains.

                ## Milestones
                1. Eyes-open and eyes-closed single-leg balance time recorded on each side.
                2. A daily two-minute balance habit attached to something you already do.
                3. Progression to hops, catches and unstable surfaces after four weeks.
                4. Eyes-closed balance time improved on the weaker side after three months.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Three months of daily balance work, with eyes-closed single-leg time on the weaker side measurably improved."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Time eyes-open and eyes-closed single-leg balance on each side"
                - "Stand on one leg while brushing your teeth @recurring(daily)"
                - "Add single-leg hops and ball catches after four weeks"
                - "Re-test balance times after three months"
            - name: Understanding tendon load and pain
              description: |-
                ## Purpose
                Achilles, patellar and elbow tendons adapt to load more slowly than muscle, and they tend to complain the morning after the session that overloaded them rather than during it. Learning how tendons respond, why complete rest rarely fixes them, and how to read next-day stiffness lets you adjust load early instead of guessing.

                ## Milestones
                1. Two reliable sources on tendon loading read, such as a sports physio's guide or a review written for athletes.
                2. Next-morning stiffness scored in your niggle log for any tendon that has given trouble.
                3. Training adjusted at least once because of next-day tendon response.
                4. Questions about your own tendons written down for your next physio visit.

                ## Notes
                Stretching before training does little for injury rates on its own. The same minutes spent on strength and a proper warm-up do more.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Next-morning tendon stiffness scored in your log for six weeks, with at least one training change made because of it."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read a sports physio's guide to how tendons respond to load"
                - "Add a next-morning tendon stiffness score to your niggle log"
                - "Note which sessions are followed by the stiffest mornings"
                - "Write three questions about your tendons for your next physio visit"
            - name: Choosing training shoes with a proper fitting
              description: |-
                ## Purpose
                No shoe type is proven to prevent injury for everyone, but comfort matters and a sudden change of shoe type is a known trigger. Getting fitted at a specialist shop, trying several pairs and choosing the most comfortable, then switching gradually, avoids the classic mistake of a dramatic change just before a big block.

                ## Milestones
                1. Your current shoe model, heel drop and cushioning written down as the baseline.
                2. Three or more pairs tried in a specialist shop, moving in each one.
                3. One pair chosen mainly on comfort, with any big change in drop or cushioning noted.
                4. The new pair introduced over two to three weeks of shorter sessions.

                ## Notes
                Start from the **Purchase decision** template. Be cautious about switching to minimal or very different shoes in the middle of a training block.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A new pair chosen after trying at least three in a fitting, and introduced gradually over at least two weeks."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down your current shoe model, drop and how far it has gone"
                - "Book a fitting at a specialist running or racket sports shop"
                - "Try at least three pairs and move properly in each one"
                - "Use the new pair only for short sessions for the first two weeks"
            - name: Training surface mix review
              description: |-
                ## Purpose
                Surfaces change load more than people expect: every run on pavements, every session on a hard indoor court or a sudden switch to an artificial pitch can each be a trigger. Reviewing where you train and mixing surfaces on purpose spreads the stress and makes a new surface less of a shock.

                ## Milestones
                1. A month of sessions listed by surface.
                2. Any recent surface change linked to past niggles noted.
                3. A target mix written, such as part of weekly running on trail or grass.
                4. Any move to a new surface built in gradually over several weeks.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A month of sessions sorted by surface, with a written target mix and a gradual plan for any new surface."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Tag last month's sessions by surface"
                - "Check your niggle log for links to surface changes"
                - "Find a softer surface within ten minutes of home"
                - "Plan a gradual switch for any new pitch, court or track"
            - name: Spreading a weekend-heavy training week
              description: |-
                ## Purpose
                Weekend athletes often pack most of their weekly load into Saturday and Sunday, with a long run, a match or a big ride stacked after five quiet days. Moving even part of that volume into one or two short weekday sessions lowers the peak on any single day, which is where many strains happen.

                ## Milestones
                1. Load per day worked out for a typical week, showing the share falling on the weekend.
                2. One or two short weekday sessions found that fit around work and family.
                3. Weekend load reduced by the amount moved to weekdays.
                4. Four weeks completed with the new spread.
              priority: medium
              deadlineOffsetDays: 42
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Four weeks completed with the weekend share of weekly load lower than in the baseline week you measured."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Work out what share of your weekly load falls on Saturday and Sunday"
                - "Find two 30-minute weekday slots you could protect"
                - "Move part of the weekend volume into those slots"
                - "Compare the weekend share after four weeks"
            - name: Low-impact cross-training swap
              description: |-
                ## Purpose
                Replacing one high-impact session a week with cycling, swimming, rowing or a cross-trainer keeps fitness building while giving bones and tendons a break from pounding. It suits runners in a heavy block and team players whose pitch sessions already carry plenty of impact.

                ## Milestones
                1. The session in your week carrying the most impact identified.
                2. A low-impact alternative of similar duration and effort chosen.
                3. The swap made every week for six weeks.
                4. An easy-pace fitness marker, such as heart rate at a set pace, checked to confirm it held.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "One weekly high-impact session swapped for low-impact work for six weeks, with an easy-pace fitness marker held or improved."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Identify the session in your week with the most impact"
                - "Choose a low-impact alternative you can do near home or work"
                - "Match its duration and effort to the session it replaces"
                - "Record easy-pace heart rate before and after the six weeks"
            - name: Taping and bracing decision with your physio
              description: |-
                ## Purpose
                An ankle brace or tape can lower the risk of a repeat sprain for people who have had one, but support worn out of habit can also hide a weakness that strength work should fix. Deciding with your physio whether you need it, for which sessions and for how long, avoids taping forever by default.

                ## Milestones
                1. The joint, its history and the sessions you would want support for written down.
                2. Tape, a brace and no support discussed with your physio.
                3. A decision recorded with when to use it and when to review it.
                4. If support is chosen, a brace fitted or the taping technique learnt.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision made with your physio on taping or bracing, listing which sessions it covers and a review date."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down which joint and which sessions you would want support for"
                - "Ask your physio whether tape, a brace or no support suits you"
                - "Learn the taping technique or get the brace fitted if one is chosen"
                - "Set a date to review whether you still need it"
            - name: Hot and cold weather training rules
              description: |-
                ## Purpose
                Heat raises the risk of heat illness and cramp, while cold muscles and frozen ground make strains and slips more likely. A short set of rules decided in advance, covering when to move a session, how much longer to warm up and when to cancel, removes the temptation to push through on the wrong day.

                ## Milestones
                1. Thresholds written for moving, shortening or cancelling sessions in heat, ice or wind.
                2. A longer cold-weather warm-up written.
                3. A hot-weather plan agreed for timing, shade and fluids.
                4. The rules shared with your training group or club.

                ## Notes
                Heat illness can become serious quickly. Learn the warning signs and stop at the first one.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Written hot and cold weather rules with thresholds and a cold-weather warm-up, shared with your training group."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the temperature at which you move a hard session indoors or earlier"
                - "Add five minutes to your warm-up for cold mornings"
                - "List the warning signs of heat illness and what to do about each"
                - "Share the rules with your training group"
            - name: Six-week pre-race injury check
              description: |-
                ## Purpose
                The final six weeks before a key race or match are where the temptation to cram in extra work is strongest and an injury costs the most. A planned check six weeks out, covering niggles, load trend, kit and a physio visit if needed, leaves time to fix problems before the taper.

                ## Milestones
                1. A date six weeks before the event marked for the check.
                2. Niggle log and load trend reviewed, with any rising niggle acted on.
                3. Race shoes and kit confirmed and broken in.
                4. A physio appointment booked for any niggle scoring 3 or more.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A pre-race check completed six weeks before your event, with any niggle scoring 3 or more seen by a physio."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Mark the date six weeks before your next key event"
                - "Review your niggle log and load trend on that date"
                - "Book a physio check for any niggle scoring 3 or more"
                - "Confirm race shoes and kit have been used in at least three sessions"
            - name: Multi-match tournament weekend plan
              description: |-
                ## Purpose
                Tournaments and festivals squeeze three or four matches into one or two days, often on unfamiliar pitches with little food or shelter between games. Planning re-warm-ups, snacks, dry kit and first aid in advance cuts the late-tournament strains that come from cold muscles and tired legs.

                ## Milestones
                1. The match schedule and the gaps between games written down.
                2. A short re-warm-up planned for each gap longer than 30 minutes.
                3. Food, fluids, warm layers and spare kit packed.
                4. First aid kit and ice packs checked and the venue's first aid point located.

                ## Notes
                Start from the **Operational checklist** template.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A tournament plan with re-warm-ups, food, kit and first aid prepared before the first match kicks off."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the match schedule and the gaps between games"
                - "Plan a five-minute re-warm-up for each long gap"
                - "Pack food, fluids, warm layers and spare socks"
                - "Check the first aid kit and find the venue first aid point"
            - name: Training camp load spike plan
              description: |-
                ## Purpose
                A training camp or sports holiday can double your normal weekly load in a few days, often in heat or at altitude, and injuries tend to arrive on day four or five. Building volume beforehand and planning easy days into the camp stops the trip ending with a sore Achilles.

                ## Milestones
                1. Expected camp volume compared with your normal week.
                2. Volume built over the four weeks before the camp to narrow the gap.
                3. An easy day or half day planned in the middle of the camp.
                4. A rule agreed for skipping sessions when a niggle appears.

                ## Notes
                Camps are where group pressure wins. Decide your skip rule before you get there, and tell your roommate.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Camp volume planned against your normal week, with a mid-camp easy day and a written skip rule in place before departure."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the organiser for the planned daily schedule"
                - "Compare the camp's volume with your normal week"
                - "Build your weekly volume over the four weeks before departure"
                - "Write your skip rule for niggles during the camp"
            - name: Sports first aid course
              description: |-
                ## Purpose
                Knowing what to do in the first ten minutes after an injury, from a suspected fracture to a head knock or a collapse, protects you, your teammates and anyone you train with. A one or two-day sports first aid course gives hands-on practice and a certificate many clubs now ask for.

                ## Milestones
                1. A recognised sports first aid course found within reach.
                2. The course booked and attended.
                3. The certificate saved with its expiry date.
                4. A small first aid kit packed for your training bag.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A recognised sports first aid course completed, with the certificate and its expiry date saved."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Search for a recognised sports first aid course near you"
                - "Ask your club whether it funds or runs courses"
                - "Book the course and block the days in your calendar"
                - "Pack a small first aid kit for your training bag"
            - name: Pre-season screening day for your team
              description: |-
                ## Purpose
                Captains and coaches who run a short screening day at the start of pre-season find out who is carrying an injury, who has done no training all summer and who needs a slower start. An hour of simple tests and a questionnaire shapes the first month for each player.

                ## Milestones
                1. A short health and training questionnaire sent to every player.
                2. Three or four simple tests chosen, such as single-leg balance, calf raises and a hop.
                3. The screening day run with results recorded for each player.
                4. Players with an injury history or poor scores given a slower first fortnight.
              priority: medium
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "A pre-season screening day run for the squad, with every player's results recorded and first-fortnight adjustments made."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the agent to draft a one-page injury and summer training questionnaire"
                - "Choose three or four tests that need no special kit"
                - "Book a pitch or hall for the screening hour"
                - "Agree a slower first fortnight for players who flag concerns"
            - name: Growth spurt care for teenage athletes
              description: |-
                ## Purpose
                During rapid growth, bones lengthen faster than muscles and tendons adapt, and young athletes develop painful heels, knees and backs, including conditions such as Sever's and Osgood-Schlatter. Tracking height every few months and easing jumping and sprinting volume during a spurt helps teenagers keep playing through it.

                ## Milestones
                1. Height measured and recorded every three months.
                2. Heel, knee or back pain agreed as something the young athlete reports straight away.
                3. Coaches told when a growth spurt is under way.
                4. Training across all their sports and teams added up for one typical week.

                ## Notes
                Teenagers often play for several teams and nobody adds up the total. That total is usually the problem.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Height recorded every three months for a year, with total weekly training across all teams added up and shared with coaches."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Measure and record height against the same wall"
                - "Add up last week's sessions across every team and club"
                - "Tell each coach when height has jumped since the last measure"
                - "Agree that heel or knee pain gets reported the same day"
            - name: Energy availability and bone health for female athletes
              description: |-
                ## Purpose
                Female athletes who eat too little for their training load can lose periods, lose bone density and pick up stress fractures, a pattern known as relative energy deficiency in sport. Tracking your cycle alongside training, and knowing which signs to raise with a sports doctor, catches it before a stress fracture does.

                ## Milestones
                1. Menstrual cycle tracked alongside training load for three months.
                2. Warning signs written down: missed or irregular periods, recurring bone pain, constant fatigue.
                3. Any warning sign raised with a doctor experienced in sports medicine.
                4. A referral to a sports dietitian discussed if under-fuelling is suspected.

                ## Notes
                Missed periods are not a normal side effect of hard training. Treat them as a reason to see a clinician.
              priority: high
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Three months of cycle and training notes recorded, with any warning sign raised with a clinician experienced in sports medicine."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Start logging your cycle in the same app or notebook as your training"
                - "Write down the warning signs to raise with a doctor"
                - "Review a month of cycle and training notes together @recurring(monthly:24)"
                - "Find a clinician or clinic with sports medicine experience"
            - name: Achilles and calf protection after forty
              description: |-
                ## Purpose
                Calf strains and Achilles problems become much more common after forty, especially in runners, racket players and five-a-side footballers who sprint only now and then. Two short sessions a week of slow, heavy calf raises, plus a longer build-up before anything explosive, is a routine many sports physios suggest.

                ## Milestones
                1. Past calf and Achilles trouble written down with dates.
                2. Straight-knee and bent-knee calf raises added to two sessions a week.
                3. Every sprint session or match preceded by a ten-minute build-up.
                4. Single-leg calf raise count improved on both sides after twelve weeks.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Twelve weeks of twice-weekly calf work logged, with single-leg calf raise counts improved on both sides."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Note any past calf or Achilles trouble and when it happened"
                - "Do slow straight and bent knee calf raises @recurring(weekly:mon,thu)"
                - "Add a ten-minute build-up before every sprint session or match"
                - "Re-count single-leg calf raises after twelve weeks"
            - name: Restarting after a long training break
              description: |-
                ## Purpose
                After three months off for a new job, a baby, illness or simply life, fitness memory tempts you to pick up where you left off, but tendons and bones have detrained faster than your lungs. Restarting at about half your old volume and building over six to eight weeks avoids the classic injury in week three.

                ## Milestones
                1. Your old weekly volume and the length of the break written down.
                2. A restart volume set at roughly half the old level, or lower after a very long break.
                3. A six to eight week build planned inside your progression cap.
                4. The first month completed without a week breaking the plan.

                ## Notes
                This is for breaks without injury. If the break was for an injury, the plan belongs with your physio's return protocol.
              priority: medium
              deadlineOffsetDays: 56
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written restart plan beginning at about half your old volume, with the first month completed as planned."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write your old weekly volume and how long you have been off"
                - "Set a first week at about half that volume"
                - "Plan six to eight weeks of build inside your cap"
                - "Book the first three sessions in your calendar"
            - name: Desk-bound athlete training after work
              description: |-
                ## Purpose
                Sitting for eight hours and then going straight into an evening sprint session or a five-a-side game is a common setting for hamstring and back strains. Breaking up the sitting and giving the evening warm-up a few extra minutes for stiff hips and a cold back fits the reality of an office day.

                ## Milestones
                1. A standing or walking break planned roughly every hour on training days.
                2. A three-minute desk routine for hips and upper back used in the afternoon.
                3. Five extra minutes added to the warm-up on work days.
                4. Four weeks of training days logged with the routine done.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Four weeks of training days logged with hourly breaks, the afternoon desk routine and a longer warm-up all done."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Set an hourly reminder to stand on training days"
                - "Write a three-minute desk routine for hips and upper back"
                - "Add five minutes to the warm-up after a full day at a desk"
                - "Leave for evening sessions ten minutes earlier so the warm-up is not cut"
            - name: Playing two sports in the same week
              description: |-
                ## Purpose
                Athletes who play football on Sunday, squash on Wednesday and run in between often have no single coach seeing the total, and each sport's load looks modest on its own. Adding everything into one weekly total and placing the hardest sessions apart turns two reasonable schedules into one safe one.

                ## Milestones
                1. Every sport, session and match in a typical week listed with duration and effort.
                2. One weekly load total across all sports calculated.
                3. The hardest sessions in each sport placed at least a day apart.
                4. Each coach or captain told about your other commitments.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "One weekly load total covering every sport, with the hardest sessions at least a day apart and each coach informed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every session and match across all your sports for one week"
                - "Add them into one weekly load total"
                - "Move sessions so the hardest in each sport sit a day apart"
                - "Tell each coach or captain what else you play"
            - name: Ten-minute prevention routine for busy weeks
              description: |-
                ## Purpose
                Parents of young children, carers and people in a heavy work season usually drop strength and warm-up work first while still squeezing in the sport itself. A ten-minute routine covering your top two targets, done three times a week at home, keeps the protection when full sessions are impossible.

                ## Milestones
                1. A ten-minute routine covering your top two injury targets that needs no equipment.
                2. Three fixed slots a week chosen, such as before the school run or at lunch.
                3. Six busy weeks completed with at least two routines a week.
                4. Full prevention sessions resumed when time allows.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six busy weeks logged with at least two ten-minute prevention routines done in each week."
                cadence: rolling
              tasks:
                - "Write a ten-minute routine for your top two targets with no equipment"
                - "Pick three slots in the week that already exist"
                - "Do the ten-minute prevention routine @recurring(weekly:mon,wed,fri)"
                - "Switch back to full sessions when the busy period ends"
            - name: Acute to chronic workload tracking
              description: |-
                ## Purpose
                Comparing this week's load with the average of the previous four, the acute to chronic workload ratio, is used by many professional teams to flag sudden spikes. It has known limits as a predictor, but for a self-coached athlete with good data it is a clearer warning light than gut feel.

                ## Milestones
                1. Four weeks of session load data in one spreadsheet.
                2. A rolling weekly ratio calculated automatically.
                3. A personal warning threshold set, with what you will change when it is crossed.
                4. Twelve weeks of ratios reviewed against your niggle log.

                ## Notes
                Use the ratio as a prompt to look closer, not as a verdict. A spike after a planned easy week means something different from one after a big block.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A spreadsheet producing a weekly acute to chronic ratio, with a written threshold and twelve weeks compared against your niggle log."
                cadence: rolling
              tasks:
                - "Set up a spreadsheet with session load by date"
                - "Add a formula dividing this week's load by the four-week average"
                - "Update the workload ratio with last week's sessions @recurring(weekly:mon)"
                - "Compare twelve weeks of ratios with your niggle log"
            - name: Hop test battery and limb symmetry index
              description: |-
                ## Purpose
                Single-leg hop tests are used in clinics to compare legs objectively, and a large gap between sides is a known risk factor in sports that involve landing. Running the standard battery with a physio, or carefully on your own, gives you a limb symmetry figure to track alongside your strength work.

                ## Milestones
                1. Single, triple, crossover and timed hop tests learnt from a physio or a published protocol.
                2. Each test done three times per leg with the best result recorded.
                3. A limb symmetry percentage calculated for each test.
                4. Any test under about 90 percent symmetry added to your prevention strength targets.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Four hop tests recorded for both legs, with limb symmetry calculated and any score under about 90 percent added to your targets."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Learn the standard hop tests from a physio or a published protocol"
                - "Measure out a flat, non-slip testing strip with tape"
                - "Do three attempts per leg for each test and record the best"
                - "Calculate the symmetry percentage for each test"
            - name: Clinic strength profile with dynamometry
              description: |-
                ## Purpose
                Handheld dynamometers and force plates, now common in sports physio clinics, measure hip, hamstring, quad and calf strength in newtons rather than by feel. A test once or twice a year shows exactly which muscles lag, and by how much, so your strength work can target them with numbers.

                ## Milestones
                1. A clinic offering dynamometry or force plate testing found.
                2. A baseline strength profile recorded for the muscles your sport relies on.
                3. The two largest weaknesses or asymmetries turned into strength session targets.
                4. A retest date set for six to twelve months later.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A clinic strength profile recorded, with two targets added to your strength sessions and a retest date booked."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find a clinic near you offering dynamometry or force plate tests"
                - "Ask what the test covers and what the report includes"
                - "Book the test for a fresh day after an easy session"
                - "Turn the two biggest gaps into strength session targets"
            - name: Club injury prevention programme rollout
              description: |-
                ## Purpose
                Prevention programmes cut injuries across whole squads, but most clubs that start one let it slip by mid-season. Leading a rollout, from choosing the programme and training the coaches to keeping it in every session and counting injuries, is the most useful thing an experienced athlete can do for teammates.

                ## Milestones
                1. A proven programme for your sport chosen, such as FIFA 11+ for football or its equivalent elsewhere.
                2. Coaches or captains trained to deliver it in under twenty minutes.
                3. Adherence tracked session by session for a full season.
                4. Injury counts compared with the previous season and reported to the club.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A season of club sessions with the prevention programme delivered and logged, and a short injury comparison report given to the committee."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask the agent to draft a one-page case for the club committee"
                - "Choose the programme with the head coach"
                - "Run a training session for coaches on delivering it"
                - "Record each session where the programme was done in full"
            - name: Season injury review and next year's plan
              description: |-
                ## Purpose
                At the end of each season or training year, a short review of every niggle, injury and missed session shows which prevention work paid off and which gaps stayed open. Writing the findings into next season's plan stops you relearning the same lesson every year.

                ## Milestones
                1. All injuries, niggles and missed sessions from the season listed.
                2. Each one linked to its likely cause in your load, kit or schedule.
                3. Prevention work that kept going compared with what was dropped.
                4. Three changes for next season written into the season phase plan.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-page season injury review with three changes written into next season's phase plan."
                cadence: cyclic
                effort_hours_estimate: "3"
              tasks:
                - "Pull every niggle and missed session from this season's logs"
                - "Mark the likely cause beside each one"
                - "Write three prevention changes for next season"
                - "Hold the season injury review after the last match or race @recurring(yearly)"
---

# Sports Injury Prevention

This area is for anyone training regularly who wants to keep turning up healthy, whether you run, lift, play a team sport or swing a racket. It opens with the foundations (your injury history, the injuries your sport produces, a physio screen, pain rules, a load baseline and a red flag card), then the weekly machinery of warm-ups, prevention strength, load caps and niggle checks, the skills of landing, gait, lifting technique and targeted work for hamstrings, groin, shoulders, ankles and tendons, decisions about shoes, surfaces and cross-training, event plans, versions for teenagers, female athletes, over-forties, desk workers and busy parents, and finally workload ratios, hop testing and club programmes.

What repeats is a Sunday load and niggle check-in, two prevention strength sessions on Tuesday and Friday, a Monday warm-up check, a short morning readiness score, monthly volume planning and kit checks, a quarterly re-test of your weak links and a yearly season review. The Metrics log, Habit tracker, Training program, Purchase decision and Operational checklist templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
