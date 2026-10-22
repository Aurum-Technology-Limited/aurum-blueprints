---
id: fitness-sport.return-to-training-after-injury
name: Return to Training After Injury
description: "A route back from a sports injury: a diagnosis and written rehab plan, daily exercises and an honest log, graded return stages agreed with your physio, test days, clearance and a first competition back."
category: personal
version: 1.0.0
tags: [fitness-sport, return-to-training-after-injury, athlete, rehab, physiotherapy, graded-return, reinjury]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - habit-tracker
    - meeting-notes
    - training-program
    - purchase-decision
    - weekly-meal-plan
  pillars:
    - name: Fitness & Sport
      emoji: "🏋️"
      description: "Training, play and competition: building strength, endurance and skill in a sport or a gym, structuring blocks of work around events, recovering properly, and keeping the sessions honest with a log rather than a feeling."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Return to Training After Injury
          description: "Rebuilding safely after a sports injury, from graded return protocols and physio milestones to regaining full training load and confidence."
          projects:
            - name: Injury notes written while they are fresh
              description: |-
                ## Purpose
                Within a week of an injury most athletes can no longer say exactly how it happened, what they felt or how quickly it swelled, and those details are what a physio or doctor uses to narrow down the diagnosis. Writing one page now, before the first appointment, saves time in the clinic and gives you a reference point to measure every later week against.

                ## Milestones
                1. A one-page note describing the session, the movement and the moment of injury.
                2. Symptoms in the first 48 hours recorded: pain, swelling, bruising, any pop or giving way.
                3. What you could and could not do afterwards written down, such as walk, weight bear or grip.
                4. Photos of any swelling or bruising saved with dates in one folder.

                ## Notes
                Write facts, not a self-diagnosis. 'Felt a sharp pull at the back of the thigh at full sprint' is far more useful to a clinician than 'pulled hamstring'.
              priority: medium
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated one-page injury note covering mechanism, first symptoms and function, with photos, exists before the first clinical appointment."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write down the session, the movement and the exact moment it happened"
                - "List every symptom you noticed in the first two days"
                - "Photograph any swelling or bruising and date the photos"
                - "Note what you could not do afterwards, such as stairs or gripping"
            - name: Assessment by a sports physio or doctor
              description: |-
                ## Purpose
                Guessing at an injury from internet searches is how a minor strain becomes a twelve-week problem, and how a fracture gets walked on for a month. A proper assessment from a physiotherapist or sports medicine doctor gives you a working diagnosis, a severity grade where one applies and a first set of instructions, which is the starting line for everything else in this area.

                ## Milestones
                1. An appointment booked with a physiotherapist or sports doctor who sees athletes in your sport.
                2. A working diagnosis written down in the clinician's own words.
                3. The clinician's estimate of a return range recorded, with the conditions attached to it.
                4. First instructions noted: what to do, what to avoid and when to come back.

                ## Notes
                If you cannot bear weight, have a visibly deformed joint, numbness, or any head injury, go to urgent care first rather than waiting for a physio slot.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A working diagnosis and first instructions from a qualified clinician are written in your rehab log within two weeks of the injury."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your club or teammates which physios in the area treat your sport"
                - "Book the earliest assessment you can get"
                - "Bring your injury notes and the shoes or kit you were wearing"
                - "Write the diagnosis and instructions in your log the same day @priority(high)"
            - name: Question list for the first rehab appointment
              description: |-
                ## Purpose
                First appointments are short and most athletes walk out realising they never asked when they can run, lift or play again. Going in with eight or ten written questions, in priority order, means you leave knowing the plan for the next fortnight and the signs that should bring you back sooner.

                ## Milestones
                1. A written list of questions ordered by what matters most to your sport.
                2. The questions covering diagnosis, likely timeline, what training is allowed and what is not.
                3. Answers captured during or straight after the appointment.
                4. Any unanswered questions carried to the next visit.

                ## Notes
                Start from the **Meeting notes** template. Useful questions include: what can I keep doing, what would make you change the plan, and how will we know I am ready for the next stage.
              priority: medium
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A question list of at least eight items is taken to the first appointment and every answer, or the gap, is recorded."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask the agent to draft rehab questions for your injury and sport, then edit them"
                - "Order the questions so the three that matter most come first"
                - "Write the answers down before you leave the car park"
                - "Move any unanswered questions to the top of the next list"
            - name: Warning signs that mean stop and call
              description: |-
                ## Purpose
                Every rehab has a short list of symptoms that mean something has gone wrong, such as swelling that returns after a session, night pain, locking, or numbness, and athletes are famously good at ignoring them. Agreeing that list with your clinician and keeping it where you train turns a vague worry into a clear rule about when to stop and ring.

                ## Milestones
                1. A list of warning signs specific to your injury agreed with your clinician.
                2. The action for each sign written beside it: stop, rest and monitor, or call the clinic.
                3. The clinic's contact details and out-of-hours option on the same page.
                4. The list saved on your phone and printed in your kit bag.

                ## Notes
                Head injuries, chest pain, sudden calf swelling and fever after surgery are urgent whatever your rehab list says. Seek medical help first and update the plan later.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written warning-sign list with an action for each sign, agreed with your clinician, is saved on your phone and in your kit bag."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask your clinician which symptoms mean stop, and which mean call"
                - "Write each sign with its action on a single page"
                - "Add the clinic number and the out-of-hours option"
                - "Put a printed copy in your kit bag"
            - name: Written rehab plan with phase criteria
              description: |-
                ## Purpose
                Rehab that runs on dates alone tends to rush the athlete who heals slowly and hold back the one who is ready, while criteria such as full range, a strength ratio or a pain-free hop decide progress on what the body can actually do. Getting the phases and their exit criteria written down with your physio gives you a map you can follow between appointments.

                ## Milestones
                1. The rehab divided into named phases, typically protection, rebuilding, return to running or sport and full training.
                2. Exit criteria for each phase written in measurable terms your physio agrees with.
                3. The allowed and off-limits activities listed for the current phase.
                4. The plan saved where you log sessions and reviewed at each appointment.

                ## Notes
                If your physio works on time frames only, ask what they would want to see before moving you on. That answer is the criterion.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written rehab plan with at least three phases and measurable exit criteria for each, agreed with your physio, is saved in your log."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your physio to name the phases of your rehab"
                - "Write the exit test for each phase in measurable words"
                - "List what you may and may not do in the phase you are in now"
                - "Pin the plan to the front of your rehab log"
            - name: Injured versus uninjured side baseline
              description: |-
                ## Purpose
                Comparing the injured limb with the healthy one is the simplest way to see progress, because it controls for your age, size and sport. A baseline taken early, using measures your physio chooses such as range of motion, calf raises to fatigue or a single-leg balance time, turns later retests into a percentage you can track rather than a feeling.

                ## Milestones
                1. Three to five measures chosen with your physio that suit the injury and are safe to test now.
                2. Each measure taken on both sides with the method written down so it can be repeated.
                3. The injured side expressed as a percentage of the healthy side.
                4. The results entered as the first row of your rehab log.

                ## Notes
                Test the same way every time: same time of day, same shoes, same warm-up. A changed method makes the comparison worthless.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least three side-to-side measures with written test methods and percentage scores are recorded as the baseline in the rehab log."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Agree three to five side-to-side tests with your physio"
                - "Write down exactly how each test is done"
                - "Test both sides and work out the injured side as a percentage"
                - "Enter the scores as the first row of your log"
            - name: Pausing race entries, fixtures and memberships
              description: |-
                ## Purpose
                An injury rarely arrives at a convenient moment, and race entries, league registrations and gym memberships keep charging or expiring while you rehab. Contacting each organiser in the first fortnight often turns a lost fee into a deferral, a transfer or a freeze, and stops a captain picking you for a game you cannot play.

                ## Milestones
                1. Every upcoming race, fixture, class and membership listed with its date and cost.
                2. The deferral, transfer or freeze policy of each one checked.
                3. Requests sent, and the outcome of each one recorded.
                4. Your captain, coach or club told you are unavailable until further notice.

                ## Notes
                Many events allow deferral only up to a fixed date before the race and some ask for a medical note, so ask your clinician for one at the assessment if you might need it.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Every affected entry and membership has a recorded outcome of deferred, transferred, frozen, refunded or kept."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every race entry, fixture and membership due in the next six months"
                - "Check each organiser's deferral or freeze policy"
                - "Send deferral or freeze requests, attaching a medical note where needed"
                - "Tell your captain or coach you are out until the physio clears you"
            - name: Rehab and symptom log
              description: |-
                ## Purpose
                Memory is a poor judge of whether rehab is working: a bad day colours the whole week and a good one tempts you to skip ahead. A simple log of each session, the pain during and the next morning, and the swelling or stiffness, gives you and your physio a pattern to read instead of a mood.

                ## Milestones
                1. A log set up with columns for date, session, pain during, pain next morning, swelling and notes.
                2. A pain scale defined at the top so every entry uses the same numbers.
                3. Two weeks of entries completed without gaps.
                4. The log shared with your physio before an appointment.

                ## Notes
                Start from the **Metrics log** template. A phone note is fine if that is what you will actually fill in; the best log is the one that never has a gap.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A rehab log with a defined pain scale has at least fourteen consecutive days of entries and has been shared with your physio."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Set up a log with columns for session, pain, swelling and notes"
                - "Define your 0 to 10 pain scale at the top of the log"
                - "Fill in the log straight after each rehab session"
                - "Send two weeks of entries to your physio before the next visit"
            - name: Home rehab kit and corner
              description: |-
                ## Purpose
                Prescribed exercises get done when the bands, step and mat are already out, and skipped when finding them takes ten minutes. Gathering the few items your physio actually prescribes into one corner of the house removes the commonest excuse for missed sessions.

                ## Milestones
                1. A list of the equipment your current exercises need, checked with your physio.
                2. Missing items bought or borrowed, usually bands, a step, a mat and light weights.
                3. One corner or shelf set aside where the kit stays out.
                4. The exercise sheet stuck up or saved where you train.

                ## Notes
                Ask before buying anything expensive. Most early rehab needs very little, and a gym membership often covers the later phases.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every item needed for the current exercise sheet is in one set place at home, with the sheet visible beside it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the kit each prescribed exercise needs"
                - "Buy or borrow anything missing from the list"
                - "Clear one corner where the kit can stay out"
                - "Put the exercise sheet on the wall beside it"
            - name: Agreed pain rule for training sessions
              description: |-
                ## Purpose
                Many physios let athletes train with some discomfort as long as it stays under an agreed level and settles by the next morning, but the exact rule varies by injury and tissue. Getting your own rule in writing removes the daily argument with yourself about whether a twinge means stop.

                ## Milestones
                1. Your physio's pain rule written in their words, including the level allowed during exercise.
                2. What should happen by the next morning recorded as part of the rule.
                3. What to do when the rule is broken written down: repeat, step back a stage or call.
                4. The rule copied to the top of your rehab log.

                ## Notes
                A rule written for a tendon is often different from one written for a bone or a ligament. Do not borrow a teammate's rule.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written pain rule from your physio, covering during-session limits, next-morning response and the action when broken, sits at the top of your log."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask your physio what level of pain is acceptable during exercise"
                - "Ask what the next-morning response should be"
                - "Write down what to do when the rule is broken"
                - "Copy the rule to the top of your rehab log"
            - name: Daily prescribed exercise routine
              description: |-
                ## Purpose
                Rehab exercises work through repetition over weeks, and the athletes who recover on schedule are usually the ones who did them on the boring days too. Fixing a time, a place and a tick box for the daily routine makes it as automatic as brushing your teeth, and gives your physio an honest record of what was done.

                ## Milestones
                1. A fixed daily time and place for the routine chosen.
                2. The current exercise sheet with sets and reps from your physio in view.
                3. A tick recorded for each day the routine is completed.
                4. Four consecutive weeks with no more than three missed days.

                ## Notes
                Start from the **Habit tracker** template. If a full routine will not fit, ask your physio which two exercises matter most and do those on busy days.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The prescribed routine is ticked off on at least 25 of any 28 consecutive days, as shown in the habit tracker."
                cadence: rolling
              tasks:
                - "Choose a fixed daily time and place for your exercises"
                - "Ask your physio which two exercises to keep on busy days"
                - "Do the prescribed exercise routine and tick it off @recurring(daily)"
                - "Replace the exercise sheet whenever your physio updates it"
            - name: Next-morning symptom check
              description: |-
                ## Purpose
                How an injury feels the morning after a session is often a better guide than how it felt during it, because tissues respond overnight. A one-minute check before getting up, scoring pain, stiffness and swelling, tells you whether yesterday's load was right before you plan today.

                ## Milestones
                1. Three morning scores defined: pain, stiffness and swelling or tightness.
                2. Scores recorded in the log within minutes of waking.
                3. Any morning that breaks your pain rule flagged in the log.
                4. Two weeks of mornings reviewed against the sessions before them.

                ## Notes
                Use the first steps out of bed or the first few stairs as the test, the same way every day.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Morning scores for pain, stiffness and swelling are logged on at least 12 of every 14 days during active rehab."
                cadence: rolling
              tasks:
                - "Decide which first movement of the day you will use as the test"
                - "Score pain, stiffness and swelling before breakfast @recurring(daily)"
                - "Flag any morning that breaks your pain rule"
                - "Compare a fortnight of mornings with the sessions before them"
            - name: Weekly rehab review against the plan
              description: |-
                ## Purpose
                Without a weekly look back, rehab drifts: exercises stay the same for too long or jump ahead on a good week. Fifteen minutes each weekend comparing the log with the phase criteria shows whether you are on track, stalled or ready to ask your physio about the next stage.

                ## Milestones
                1. A weekly slot of fifteen minutes fixed in the diary.
                2. Each review noting sessions done, pain trend and any warning signs.
                3. A one-line verdict each week: on track, stalled or ready to ask about progressing.
                4. Stalls of two weeks or more raised with your physio.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written weekly verdict exists for every week of active rehab, and any two-week stall has been raised with the physio."
                cadence: rolling
              tasks:
                - "Fix a fifteen-minute weekend slot for the review"
                - "Review the week's log against your phase criteria @recurring(weekly:sun)"
                - "Write a one-line verdict at the bottom of the week"
                - "Message your physio if the verdict has said stalled twice in a row"
            - name: Physio appointment cycle
              description: |-
                ## Purpose
                Appointments are where the plan gets updated, and the value of each one depends on what you bring and what you take away. A simple cycle of preparing a summary, attending with questions, and writing up the changes the same day keeps you and your physio working from the same version of the plan.

                ## Milestones
                1. A short summary of the period since the last visit prepared before each appointment.
                2. Changes to exercises, loads and allowed activities written down after each visit.
                3. The next appointment booked before you leave the clinic.
                4. A running record of every appointment kept in one place.

                ## Notes
                Start from the **Meeting notes** template for the running record. If appointments become more than four weeks apart, ask for a phone or video check-in between them.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every physio appointment has a pre-visit summary and a same-day write-up of plan changes in one running record."
                cadence: rolling
              tasks:
                - "Create a running record for physio appointments"
                - "Send your physio a short log summary before the visit @recurring(monthly:8)"
                - "Write up any changes to the plan the same day"
                - "Book the next appointment before leaving the clinic"
            - name: Cross-training to hold fitness while injured
              description: |-
                ## Purpose
                Weeks off the main sport cost aerobic fitness and strength in the uninjured parts of the body, and losing them makes the return longer. Agreeing with your physio which alternatives are safe, such as pool running, a static bike, upper body work or the other leg, keeps you fit and in the habit of training without loading the injury.

                ## Milestones
                1. A list of cross-training options your physio has cleared for the current phase.
                2. Two or three fixed cross-training sessions a week in the diary.
                3. Each session logged with duration and how the injury responded.
                4. The list updated whenever you move to a new rehab phase.

                ## Notes
                Cross-training counts as load. If the injury flares after a bike or pool session, it goes in the log like any other session.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least two physio-cleared cross-training sessions are logged in most weeks of rehab, with the injury's response noted each time."
                cadence: rolling
              tasks:
                - "Ask your physio which cross-training options are safe right now"
                - "Do a cleared cross-training session and log it @recurring(weekly:tue,sat)"
                - "Note how the injury felt the morning after each session"
                - "Update the cleared list when you change rehab phase"
            - name: Weekly load tally during the return
              description: |-
                ## Purpose
                Reinjury most often follows a sudden spike, such as doubling running minutes in a week because the leg felt fine. Totalling each week's training in a simple unit, like minutes, distance or session count multiplied by effort, makes spikes visible before they happen and lets you build back in steps your physio has agreed.

                ## Milestones
                1. One load unit chosen that suits your sport and is easy to record.
                2. A weekly total calculated from the log every week of the return.
                3. The planned increase for each week agreed with your physio or coach.
                4. Any week that jumps beyond the agreed step flagged and corrected the next week.

                ## Notes
                Keep the unit simple enough to calculate in two minutes. A perfect model nobody updates is worse than session minutes times a 1 to 10 effort score.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly load total is recorded for every week of the return, with no week exceeding the step agreed with your physio or coach."
                cadence: rolling
              tasks:
                - "Choose the load unit you will total each week"
                - "Ask your physio or coach how much the weekly total may rise"
                - "Total last week's load and compare it with the plan @recurring(weekly:mon)"
                - "Trim the next week if the total jumped past the agreed step"
            - name: Monthly side-to-side retest
              description: |-
                ## Purpose
                Strength and range often lag behind how the injury feels, and athletes who return at 70 percent of the healthy side are more likely to get hurt again. Repeating the baseline tests each month shows the real gap closing, and gives your physio numbers to judge readiness on.

                ## Milestones
                1. The baseline tests repeated with the same method every month.
                2. Each result written as a percentage of the healthy side.
                3. A simple chart of the percentages over time.
                4. The latest results shared with your physio at the next appointment.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly side-to-side retests are logged as percentages with a chart showing the trend since baseline."
                cadence: rolling
              tasks:
                - "Reread the written method for each baseline test"
                - "Repeat the side-to-side tests and record percentages @recurring(monthly:15)"
                - "Add the new percentages to the trend chart"
                - "Ask your physio which percentage they want before the next phase"
            - name: Updates to your coach, captain or training partners
              description: |-
                ## Purpose
                Coaches and captains plan around who is available, and an injured athlete who goes quiet gets either written off or pushed back too early. A short regular update on your phase, what you can do and the next milestone keeps the people who pick teams and set sessions working from the facts.

                ## Milestones
                1. The people who need updates listed: coach, captain, club medic, training group.
                2. A three-line update format agreed: current phase, what you can do, next milestone.
                3. Updates sent on a fixed day through the return.
                4. Any change to the expected return date passed on within a day.

                ## Notes
                Share what you can and cannot do, not your medical details. You decide how much of the diagnosis to tell a team chat.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A short status update reaches your coach or captain every week of the return, and every change of expected return date is passed on within a day."
                cadence: rolling
              tasks:
                - "List everyone who plans sessions or teams around you"
                - "Write a three-line update template: phase, can do, next milestone"
                - "Send the status update to your coach or captain @recurring(weekly:fri)"
                - "Tell them the same day if the expected return date moves"
            - name: Eating and sleeping while training is reduced
              description: |-
                ## Purpose
                Training volume drops sharply after an injury, but healing tissue still needs enough energy and protein, and sleep is when much of the repair happens. Planning meals for the lower load and protecting sleep, with a dietitian's input if you have one, avoids both under-eating to stay light and drifting into habits that slow recovery.

                ## Milestones
                1. Your clinician or a sports dietitian asked whether your injury changes what you should eat.
                2. A weekly meal plan that matches the reduced training load in place.
                3. A regular bedtime and wake time set and kept on most nights.
                4. Any big change in body weight during rehab noted and discussed at an appointment.

                ## Notes
                Start from the **Weekly meal plan** template. Cutting food hard to avoid weight gain during rehab is a common mistake; ask a professional before restricting.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly meal plan matched to the reduced load is written each week of rehab and bedtime is kept within an hour on at least five nights a week."
                cadence: rolling
              tasks:
                - "Ask your clinician or a sports dietitian about eating during rehab"
                - "Plan next week's meals around the reduced training load @recurring(weekly:sat)"
                - "Set a fixed bedtime and wake time for the rehab period"
                - "Note your body weight in the log once a fortnight"
            - name: Understanding your diagnosis and healing timeline
              description: |-
                ## Purpose
                Athletes who understand what tissue is injured and how it heals make better decisions on the days when the plan feels slow. An evening with reliable sources and your physio's explanation, summarised in your own words, turns the diagnosis from a label into something you can reason about.

                ## Milestones
                1. The injured structure and the type of injury explained in a short paragraph in your own words.
                2. The usual healing stages for that tissue noted, from reliable sources or your physio.
                3. Your summary checked with your physio for anything you have misunderstood.
                4. The factors that commonly slow healing for this injury listed.

                ## Notes
                Use sources from professional bodies, hospitals or sports medicine organisations. Forum stories of six-week comebacks are not a timeline.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of your injury and its healing stages, checked by your physio, is saved with your rehab plan."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your physio to draw or explain the injured structure"
                - "Read two reliable sources on how this tissue heals"
                - "Write a one-page summary in your own words"
                - "Ask your physio to correct anything you have got wrong"
            - name: Rehab exercise technique signed off
              description: |-
                ## Purpose
                A rehab exercise done with the wrong position or tempo can load the wrong tissue entirely, which is why ten minutes of correction is worth weeks of repetitions. Filming yourself, comparing with your physio's demonstration and getting each exercise signed off means every home session counts.

                ## Milestones
                1. Each prescribed exercise demonstrated by your physio and its key cues written down.
                2. A short video of yourself doing each exercise at home.
                3. Corrections from your physio recorded next to each exercise.
                4. Every current exercise marked as signed off.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every exercise on the current sheet has written cues and a physio sign-off recorded after reviewing your video or watching you live."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write two key cues for each exercise during the appointment"
                - "Film each exercise from the side at home"
                - "Send or show the clips to your physio for a check @recurring(monthly:22)"
                - "Mark each exercise as signed off once corrected"
            - name: Pain science basics for returning athletes
              description: |-
                ## Purpose
                Pain during rehab does not always mean damage, and pain-free does not always mean healed, which confuses many athletes into either stopping at every twinge or pushing through warning signs. Learning the basics of how pain works, from good sources and your physio, makes the pain rule easier to follow and the setbacks less frightening.

                ## Milestones
                1. One reputable book chapter, course module or clinician talk on pain completed.
                2. The difference between hurt and harm explained in your own words.
                3. Your own pain patterns from the log reread with that understanding.
                4. Questions about your pain answered by your physio.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One reputable pain education source has been completed and a short written explanation of hurt versus harm has been reviewed with your physio."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your physio to recommend one source on pain for athletes"
                - "Work through the source and note three ideas that surprised you"
                - "Reread your log looking for patterns in your pain"
                - "Take your pain questions to the next appointment"
            - name: Your sport's graded return stages
              description: |-
                ## Purpose
                Most sports have an accepted sequence back, such as walk to jog to run to sprint, or individual drills to non-contact to full contact to match play, and knowing it lets you see where each session fits. Writing out the stages for your sport, adjusted by your physio, gives you a ladder with rungs you can check off.

                ## Milestones
                1. The usual return stages for your sport listed from a governing body, club medic or physio.
                2. Each stage described in terms of what a session at that stage contains.
                3. Your physio's adjustments for your injury added to the list.
                4. The ladder linked to the exit criteria in your rehab plan.

                ## Notes
                Running return programmes and contact sport return-to-play ladders differ a lot. Use the version for your sport and your injury, not a generic one.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written list of return stages for your sport, adjusted by your physio and linked to your phase criteria, is saved in the rehab plan."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find your sport's return-to-play stages from the club medic or governing body"
                - "Describe a typical session at each stage in a sentence"
                - "Ask your physio to adjust the stages for your injury"
                - "Link each stage to an exit criterion in your plan"
            - name: Taping and brace use taught by your physio
              description: |-
                ## Purpose
                Tape and braces can help some athletes feel secure during the return, but they are easy to apply badly or to lean on for months longer than needed. Learning the exact method from your physio, and agreeing when to use support and when to stop, keeps it a tool rather than a crutch.

                ## Milestones
                1. The taping or brace method demonstrated by your physio and photographed.
                2. Your own application checked by the physio at least once.
                3. The situations where support is used written down, for example training only, or matches only.
                4. A plan agreed for when to reduce or stop using support.

                ## Notes
                Skin irritation from tape is common. Ask about a skin barrier and test a small strip first.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You can apply your tape or brace in a way your physio has checked, and a written rule says when to use it and when to stop."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your physio to demonstrate the taping or brace fitting"
                - "Photograph each step of the method"
                - "Apply it yourself while the physio watches"
                - "Write down when to use support and when to start weaning off it"
            - name: Landing, cutting and impact progressions
              description: |-
                ## Purpose
                Returning to running, jumping or changing direction asks the injured area to absorb several times body weight, which no amount of slow strength work fully prepares it for. Working through the impact and change-of-direction progressions your physio sets, in order and with good mechanics, bridges the gap between the gym and the pitch or court.

                ## Milestones
                1. A sequence of impact progressions set by your physio, from low hops to sport-speed cutting.
                2. Each progression filmed and its landing quality checked.
                3. Each step completed within your pain rule before moving on.
                4. The final progression performed at the speed of your sport.

                ## Notes
                Quality before height or speed. A stiff, noisy or knee-collapsing landing is a reason to stay on that step, whatever the calendar says.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every impact and change-of-direction progression set by your physio has been completed within the pain rule, with the final step done at sport speed."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask your physio for the impact progression list in order"
                - "Film each new progression from the front and side"
                - "Move on only when the landing looks clean and the pain rule holds"
                - "Record the date each progression was passed"
            - name: Working through fear of reinjury
              description: |-
                ## Purpose
                Many athletes are physically ready long before they trust the injured part, and hesitation in a tackle, a landing or a sprint can itself raise the risk of another injury. Naming the specific situations that worry you and rehearsing them in graded steps, with a sport psychologist if it is affecting you badly, rebuilds confidence alongside strength.

                ## Milestones
                1. The specific movements or situations that worry you listed and rated by how anxious they make you.
                2. A graded set of exposures agreed with your physio or coach, from least to most worrying.
                3. Confidence ratings recorded after each exposure.
                4. A professional contacted if fear is stopping you training or affecting sleep.

                ## Notes
                Some clinics use a short questionnaire to measure fear of reinjury. Ask your physio whether they use one; it can show change that is hard to feel.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A rated list of feared situations exists and confidence scores are recorded after each graded exposure until the most feared one has been done."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the moves or moments you are worried about, and rate each one"
                - "Agree a graded order of exposures with your physio or coach"
                - "Rate your confidence after one exposure and note it in the log @recurring(weekly:wed)"
                - "Ask your doctor about a sport psychologist if fear is stopping training"
            - name: Root cause review of how the injury happened
              description: |-
                ## Purpose
                An injury is often the last link in a chain, such as a jump in mileage, new shoes, a missed warm-up, poor sleep or a technique fault, and coming back to the same chain invites the same injury. Reviewing the four to six weeks before the injury with your log and your physio finds the links you can change before full training resumes.

                ## Milestones
                1. The training, sleep, kit and life events of the six weeks before the injury reconstructed.
                2. Possible contributing factors listed and discussed with your physio or coach.
                3. Two or three factors chosen that you can actually change.
                4. Those changes written into the return plan.

                ## Notes
                This is about your injury, not general prevention. Keep it to what led up to this one and what will be different on the way back.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written review of the six weeks before the injury names at least two changeable factors, and each one appears as a change in the return plan."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pull up your training log and diary for the six weeks before the injury"
                - "List every change in load, kit, sleep or routine in that period"
                - "Discuss the list with your physio or coach"
                - "Write the two or three agreed changes into your return plan"
            - name: Modified training programme around the injury
              description: |-
                ## Purpose
                Being injured in one place rarely means you cannot train anywhere, and a written programme that works the rest of the body keeps strength, routine and morale up. Building it with your physio and coach so it respects the current phase means it can grow with the rehab instead of being torn up each month.

                ## Milestones
                1. A weekly programme written that trains everything your physio has cleared.
                2. Exercises that load the injury listed separately with your physio's limits.
                3. The programme reviewed and adjusted each time you change rehab phase.
                4. The programme handed over to your normal training at full clearance.

                ## Notes
                Start from the **Training program** template. Training the uninjured limb can help preserve some strength on the injured side, so ask your physio whether it suits your injury.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written weekly programme cleared by your physio is in use, with a dated revision for each rehab phase change."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List the movements your physio has cleared and the ones still off limits"
                - "Draft a weekly programme around the cleared movements"
                - "Ask your coach to check the programme fits your sport"
                - "Revise the programme against the current phase @recurring(monthly:28)"
            - name: Imaging and specialist referral questions
              description: |-
                ## Purpose
                Not every sports injury needs a scan, and a scan without a question can show findings that worry you without changing the plan. If recovery is slower than expected, or the injury might need surgery, knowing what to ask about imaging and referral helps you and your clinician decide together.

                ## Milestones
                1. Your clinician asked whether imaging would change the plan, and why or why not.
                2. If imaging is ordered, the question it should answer written down.
                3. The report and its meaning explained by a clinician, not only read online.
                4. Any referral to a specialist booked with your notes and log ready to send.

                ## Notes
                Many scans in active people show changes that are not causing symptoms. Let the clinician who knows your case interpret the report.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on whether imaging or a specialist referral is needed, with the reason, and any report explained by a clinician."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your clinician whether a scan would change the plan"
                - "Write down what question any scan is meant to answer"
                - "Book a follow-up to have the report explained"
                - "Send your injury notes and log ahead of any specialist appointment"
            - name: Surgery or rehab decision record
              description: |-
                ## Purpose
                Some injuries, such as certain ligament ruptures, dislocations or fractures, come with a real choice between surgery and a structured rehab route, and the right answer depends on your sport, level and goals. Recording the options, the evidence your surgeon and physio give, and your reasons makes a hard decision clearer and easier to live with.

                ## Milestones
                1. The options set out by your surgeon or sports doctor, including the expected timeline of each.
                2. Questions answered on your sport's demands, success rates and risks for someone like you.
                3. A second view from your physio on the rehab route.
                4. Your decision and its reasons written down and dated.

                ## Notes
                Ask what happens if you start with rehab and it does not work. For some injuries delayed surgery remains an option and for others it does not.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dated decision record lists the options, the answers from at least two clinicians and your reasons for choosing surgery or rehab."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the surgeon for the expected timeline of each option"
                - "Ask what level of sport each option usually returns people to"
                - "Get your physio's view on the rehab route"
                - "Write your decision and your reasons on one dated page"
            - name: Second opinion when progress stalls
              description: |-
                ## Purpose
                If several weeks pass with no change in pain or function despite doing the work, a fresh pair of eyes can spot a missed diagnosis or a plan that suits someone else's injury. Asking for a second opinion is a normal step, and going in with your log and baseline numbers makes it quick and useful.

                ## Milestones
                1. A stall defined in numbers, such as no change in retests over four weeks.
                2. Your current physio told you would like another view.
                3. A second clinician chosen who specialises in your injury or sport.
                4. The second opinion's findings compared with the current plan and a way forward agreed.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A second clinician has reviewed your case with your log and retest numbers, and an agreed next step is recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check your retest chart for four weeks without improvement"
                - "Tell your physio you would like a second view"
                - "Find a clinician who specialises in your injury or sport"
                - "Send them your notes, plan and retest numbers before the appointment"
            - name: Rehab costs, insurance and claims
              description: |-
                ## Purpose
                Physio sessions, scans, braces and gym access during a long rehab add up quickly, and club, governing body, travel or health insurance may cover some of it if you claim in time. Listing the costs and checking every policy early avoids paying out of pocket for things you were covered for.

                ## Milestones
                1. Every policy that might cover sports injury checked: health, club, governing body, event, work.
                2. Claim deadlines and required documents for each one noted.
                3. Receipts and clinical letters collected in one folder.
                4. Claims submitted and their outcomes recorded.

                ## Notes
                Some sports bodies include injury cover with membership but require notification within a short window. Check the time limit first.
              priority: low
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Every relevant policy has been checked and each eligible cost has a submitted claim with a recorded outcome."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List every insurance or membership that might cover the injury"
                - "Check each one's claim deadline and documents needed"
                - "File rehab receipts and letters in the claims folder @recurring(monthly:3)"
                - "Submit each claim and note the outcome"
            - name: Choosing a brace or support
              description: |-
                ## Purpose
                Braces range from simple sleeves to custom-fitted hinged supports costing hundreds, and the wrong one is uncomfortable, ineffective or not allowed in your sport. If your physio or surgeon recommends support for the return, choosing it against their specification and your sport's rules avoids an expensive drawer ornament.

                ## Milestones
                1. The type of support your clinician recommends written down, with the reason.
                2. Your sport's rules on braces in competition checked.
                3. Two or three options compared on fit, comfort, price and rules.
                4. A support bought and fitted, then checked by your clinician.

                ## Notes
                Start from the **Purchase decision** template. Fit matters more than brand; a support that slips is often worse than none.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A support that matches your clinician's specification and your sport's rules is bought and has been checked for fit by the clinician."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your clinician what kind of support they recommend and why"
                - "Check your sport's rules on braces in competition"
                - "Compare three options on fit, comfort, price and rules"
                - "Take the chosen support to your next appointment to check the fit"
            - name: Halfway review of the rehab
              description: |-
                ## Purpose
                Somewhere around the middle of a rehab, motivation dips and the plan written at the start may no longer fit how you are healing. A deliberate review at the halfway point, looking at retests, log trends and the expected return date with your physio, either confirms the route or resets it before months are lost.

                ## Milestones
                1. Retest results, log trends and missed sessions summarised on one page.
                2. The summary reviewed with your physio at a dedicated appointment.
                3. The expected return range confirmed or revised.
                4. Any changes to the plan and goals written down.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A one-page halfway summary has been reviewed with your physio and the return range confirmed or revised in writing."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Book an appointment labelled as the halfway review"
                - "Summarise retests, pain trend and missed sessions on one page"
                - "Ask your physio whether the return range still holds"
                - "Write the revised plan and goals into your log"
            - name: First session back in your own sport
              description: |-
                ## Purpose
                The first real session in your sport after weeks away is both a milestone and a risk, because adrenaline and teammates make it easy to do too much. Planning it with your physio, with a set content and a fixed stop point, turns it into a controlled test rather than a comeback.

                ## Milestones
                1. The physio's go-ahead for a first sport session recorded.
                2. The session's content, duration and stop point written down beforehand.
                3. Your coach or training partner told about the limits in advance.
                4. The session and the next-morning response logged.

                ## Notes
                Leave the session feeling you could have done more. That is the right amount.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A first sport session with pre-agreed content and a stop point has been completed and logged with the next-morning symptom score."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your physio what the first session may include"
                - "Write the content and the stop point down before you go"
                - "Tell your coach or partner about the limits in advance"
                - "Log the session and the next-morning response"
            - name: Return-to-sport test with your physio
              description: |-
                ## Purpose
                Being pain-free is not the same as being ready, and a structured test of strength, hopping, agility and sport-specific drills shows whether the injured side can cope with what the sport demands. Booking it as a dated event, with the criteria agreed in advance, gives you a clear pass or a clear list of what to work on.

                ## Milestones
                1. The test battery and pass criteria agreed with your physio in advance.
                2. A date booked with the right space and equipment.
                3. The test completed and every result recorded.
                4. A pass, or a written list of gaps with a retest date.

                ## Notes
                Ask whether the test will be done when you are fresh and when you are tired. Injuries often recur late in a match, and some physios test both.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A return-to-sport test with pre-agreed criteria has been completed, and the result is recorded as a pass or as a gap list with a retest date."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your physio which tests and pass marks they will use"
                - "Book the test date and confirm the space and equipment"
                - "Record every result on the day"
                - "Book a retest date for any test you did not pass"
            - name: Clearance for full training and contact
              description: |-
                ## Purpose
                Moving from modified sessions to full training, and in contact sports to full contact, is the step where most reinjuries happen if it comes too soon. Getting explicit clearance from your physio or club medic, in writing and with any conditions, protects you and gives your coach a clear signal to stop holding you back.

                ## Milestones
                1. The criteria for full training and, if relevant, full contact confirmed with your physio.
                2. Each criterion met and recorded in the log.
                3. Written clearance received, including any conditions or limits.
                4. Your coach or captain sent a copy of the clearance and its conditions.

                ## Notes
                Some clubs and sports bodies require a medical clearance form before an injured player is selected again. Check whether yours does.
              priority: high
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Written clearance for full training, and contact where relevant, is held and has been shared with your coach or captain."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Confirm the criteria for full training with your physio"
                - "Check whether your club needs a clearance form"
                - "Ask for the clearance and any conditions in writing"
                - "Send your coach the clearance and its conditions"
            - name: First competition back after injury
              description: |-
                ## Purpose
                Your first race, match or bout after injury carries more uncertainty than any other, and choosing a low-stakes event with a modest goal takes pressure off the injured area and the mind. Picking the right event and planning the day with your physio and coach makes the comeback a stepping stone rather than a test of nerve.

                ## Milestones
                1. A low-priority event chosen, a few weeks after full clearance.
                2. A modest goal set, such as finishing, playing a half or racing at an agreed effort.
                3. Warm-up, any taping and a plan for pulling out agreed in advance.
                4. The event completed and the following days' symptoms logged.

                ## Notes
                Decide before the start what would make you stop. It is much harder to decide in the middle of a race or match.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A first competition after clearance has been completed against a pre-set modest goal, with symptoms logged for the three days after."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Choose a low-stakes event a few weeks after full clearance"
                - "Agree a modest goal and a stop rule with your physio or coach"
                - "Plan the warm-up and any taping for the day"
                - "Log the result and symptoms for three days after"
            - name: One year on injury review
              description: |-
                ## Purpose
                A year after an injury is a natural point to ask whether you are back to your old level, whether the side-to-side gap has fully closed and whether the habits that got you back are still in place. A short review then often catches a fading maintenance routine before it becomes the start of the next injury.

                ## Milestones
                1. Current performance compared with your pre-injury level in a few key numbers.
                2. A final side-to-side retest completed.
                3. The maintenance exercises you still do listed against those your physio advised keeping.
                4. Any remaining gap or worry raised with your physio.
              priority: low
              deadlineOffsetDays: 365
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A written one-year review compares current and pre-injury performance, includes a final retest and records the maintenance routine going forward."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Compare three key numbers now with your pre-injury level"
                - "Do a final side-to-side retest"
                - "List the maintenance exercises you still do each week"
                - "Book a check with your physio if any gap remains"
            - name: Long rehab after surgery
              description: |-
                ## Purpose
                After an operation such as a ligament reconstruction, a cartilage repair or a fracture fixation, rehab can run from six months to over a year, and the long middle stretch is where athletes lose heart or get ahead of the graft. Breaking the months into the surgeon's and physio's milestones, with check-ins on a fixed day each month, keeps a long rehab moving.

                ## Milestones
                1. The surgeon's and physio's post-operative milestones written as a single timeline.
                2. Home set up before surgery for the first weeks, including crutches, transport and work cover.
                3. A monthly milestone check recorded against the timeline.
                4. Each milestone signed off by your physio before moving on.

                ## Notes
                Feeling ready early is common after reconstruction surgery. Healing tissue can lag behind how the joint feels, so follow the criteria and the surgeon's guidance on timing.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A single post-operative timeline exists and has a monthly check recorded against it until your physio signs off the final milestone."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask your surgeon for the post-operative milestones in writing"
                - "Arrange transport, crutches and work cover before the operation"
                - "Merge the surgeon's and physio's milestones into one timeline"
                - "Check progress against the timeline @recurring(monthly:12)"
            - name: Graded return after concussion
              description: |-
                ## Purpose
                Concussion is the one sports injury where pushing through symptoms is dangerous rather than merely unwise, and most sports bodies publish a graded return protocol with stages that cannot be skipped. Following your sport's protocol with medical oversight, and keeping a stage-by-stage record, protects your brain and satisfies the club rules on returning to play.

                ## Milestones
                1. A medical assessment completed after the head injury.
                2. Your sport's graded return protocol found and its stages listed.
                3. Each stage completed symptom-free for the required period and recorded.
                4. Medical clearance obtained before any contact training or match play.

                ## Notes
                Any worsening headache, repeated vomiting, confusion or drowsiness after a head injury needs urgent medical attention. Do not drive yourself.
              priority: high
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "Every stage of your sport's concussion protocol is recorded as completed symptom-free, and medical clearance is in writing before contact or match play."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Get a medical assessment after the head injury @priority(high)"
                - "Download your sport's graded return to play protocol"
                - "Record each stage and any symptoms as you complete it"
                - "Get written medical clearance before contact or match play"
            - name: Team player returning mid-season
              description: |-
                ## Purpose
                Coming back to a squad halfway through a season brings pressure to play before you are ready, a coach who needs bodies and a fixture list that will not wait. Agreeing a staged return with your physio and coach, such as training only, then bench minutes, then a full match, keeps your place in the team without risking the rest of the season.

                ## Milestones
                1. A staged plan agreed with physio and coach: training only, limited minutes, full match.
                2. The criteria for each stage shared with the coach.
                3. Minutes or involvement recorded for each match on the way back.
                4. A full match completed without a flare-up.

                ## Notes
                Agree the plan before you are fit, not on match day when the team is short. Coaches respect a plan they helped write.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "A staged return plan is agreed with physio and coach, and minutes are recorded match by match until a full match is played without a flare-up."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask your physio for the stages from training to a full match"
                - "Meet your coach to agree how many minutes you play at each stage"
                - "Record your minutes and symptoms after each match"
                - "Tell the coach early if a stage needs repeating"
            - name: Endurance athlete with a race already booked
              description: |-
                ## Purpose
                An injury eight or twelve weeks before a target race forces a hard choice between racing a reduced goal, switching distance or deferring. Working back from race day with your physio and coach, with an honest go or no-go date, stops you training through pain toward a start line you should not reach.

                ## Milestones
                1. Race date, deferral deadline and distance-change options written down.
                2. A realistic return timeline from your physio set beside the race date.
                3. A go or no-go date and the criteria for going agreed in advance.
                4. The decision made on that date and the entry adjusted to match.

                ## Notes
                Missing one race is a small cost compared with a season lost to a reinjury. Decide the criteria while you are calm, then trust them.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A go or no-go decision is made on a pre-agreed date against written criteria, and the race entry is kept, changed or deferred to match."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down the race date and the deferral deadline"
                - "Ask your physio for a realistic timeline back to that distance"
                - "Agree a go or no-go date and the criteria for going"
                - "Keep, change or defer the entry on the agreed date"
            - name: Rehab around a full-time job and family
              description: |-
                ## Purpose
                Physio plans are often written as if the athlete has an hour a day free, which is rarely true for someone with long working days and children to collect. Asking for a minimum effective routine and fixing it into slots that already exist, such as a lunch break or the time after the children's bedtime, keeps rehab going when life is full.

                ## Milestones
                1. Your physio asked for a short version of the routine for busy days.
                2. Two or three fixed slots in the week found that survive work and family demands.
                3. Appointments booked at times that do not clash with school runs or meetings.
                4. A month of the minimum routine kept, recorded in the log.

                ## Notes
                Ten focused minutes done every day often beats an hour done twice a week. Say so to your physio rather than quietly skipping sessions.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A short routine agreed with your physio is kept in fixed weekly slots for four consecutive weeks, as shown in the log."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask your physio for a ten-minute version of your routine"
                - "Find slots in your week that already survive work and family demands"
                - "Do a longer rehab block in one of those fixed slots @recurring(weekly:mon,thu)"
                - "Book appointments at times that avoid school runs and meetings"
            - name: Repeat injury at the same site
              description: |-
                ## Purpose
                A second or third injury in the same place is a sign that something in the previous return was incomplete, whether strength, load, technique or time. Treating it as its own case, comparing it with the last episode and asking for a longer or different plan, gives the best chance of breaking the cycle.

                ## Milestones
                1. The dates, causes and return times of each previous injury at this site listed.
                2. The difference between the last return plan and what was actually done written down.
                3. Your physio's view on what was missing recorded.
                4. A longer-term maintenance routine agreed and checked every quarter.

                ## Notes
                Bring the old log if you have one. Repeat injuries often follow a return where retests stopped once pain went away.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of previous episodes and your physio's diagnosis of what was missing lead to a maintenance routine reviewed every quarter."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List every previous injury at this site with dates and return times"
                - "Compare the last return plan with what you actually did"
                - "Ask your physio what they think was missing last time"
                - "Check the maintenance routine is still being done @recurring(quarterly)"
            - name: Bone stress injury return to running
              description: |-
                ## Purpose
                Bone stress injuries in runners and jumping athletes often come from a mismatch between load and recovery, sometimes linked to low energy availability, and they need a slower, more structured return than a muscle strain. Working with a sports doctor on the cause and a physio on a walk-run progression gives the bone time to adapt and lowers the chance of a repeat.

                ## Milestones
                1. The injury confirmed and graded by a sports doctor.
                2. Possible underlying causes checked, including energy intake, menstrual health where relevant and bone health.
                3. A walk-run progression agreed with your physio, with criteria to move up each step.
                4. Continuous running back to your pre-injury volume without bone pain.

                ## Notes
                Missed periods, repeated stress injuries or rapid weight loss alongside a bone stress injury are reasons to ask your doctor about energy availability and bone health, not just the leg.
              priority: high
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "The bone stress injury's possible causes have been reviewed with a sports doctor and continuous running is back to pre-injury volume without bone pain."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Ask your sports doctor to grade the injury and check for underlying causes"
                - "Agree a walk-run progression with criteria for each step"
                - "Press along the bone after runs and log any tenderness"
                - "Review bone health questions with your doctor @recurring(monthly:19)"
            - name: Long-standing tendon problem loading plan
              description: |-
                ## Purpose
                Tendon problems in the Achilles, knee, hip or elbow often behave differently from acute injuries, settling with rest and flaring again on return, and they tend to respond to progressive loading over months rather than weeks. Running a structured loading plan from your physio, with a weekly check of the tendon's response, gives a long-standing problem a real chance of resolving.

                ## Milestones
                1. A tendon loading programme written by your physio, with stages and progression criteria.
                2. A simple tendon response test agreed, such as single-leg hops or a squat on a decline.
                3. Weekly response scores recorded alongside training load.
                4. Full sport load reached with stable or improving tendon scores.

                ## Notes
                Tendons usually respond to load over 24 hours. Judge a session by the next day, not by how it feels during.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A physio-written tendon loading programme has weekly response scores recorded until full sport load is reached with stable or improving scores."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask your physio for a staged tendon loading programme"
                - "Agree one tendon response test you can do at home"
                - "Do the response test and log the score with the week's load @recurring(weekly:wed)"
                - "Ask your physio before moving up a stage"
            - name: Objective strength and hop testing at a clinic
              description: |-
                ## Purpose
                For serious knee, ankle and shoulder injuries, measured strength from a dynamometer or force plate and a timed hop battery give far more reliable readiness data than a physio's hand or your own feeling. Booking objective testing at a sports clinic or university lab before a return to full sport gives you hard numbers on any remaining deficit.

                ## Milestones
                1. A clinic or lab offering isokinetic, dynamometer or force plate testing found.
                2. The tests chosen with your physio to match your injury and sport.
                3. Results received with the injured side as a percentage of the healthy side.
                4. Your physio's interpretation and any changes to the plan recorded.

                ## Notes
                Ask whether the clinic tests jump height or landing forces as well as peak strength, since those can lag behind for months after a knee injury.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An objective strength or hop test report with side-to-side percentages is held, and your physio's interpretation is written into the plan."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Search for sports clinics or university labs offering strength testing"
                - "Agree with your physio which tests to book"
                - "Book the session and send the clinic your injury history"
                - "Go through the report with your physio and update the plan"
            - name: Helping a teammate or athlete you coach back
              description: |-
                ## Purpose
                Experienced athletes and coaches are often the person an injured teammate turns to, and the most useful help is practical: keeping them involved, respecting their physio's limits and not pressuring them to play. Setting out how you will support one returning athlete, and what you will not do, makes you an ally to the rehab rather than a risk to it.

                ## Milestones
                1. The athlete's current phase and limits understood from what they choose to share.
                2. A way to keep them involved agreed, such as helping at sessions or doing their rehab alongside the group.
                3. Training sessions adapted so they can join the parts they are cleared for.
                4. Selection or minutes decisions based on their clearance, not on team need.

                ## Notes
                Never pass on someone's medical details without their permission. Ask them what they are happy for the group to know.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A returning athlete you train with or coach has an agreed way to stay involved, and every selection decision about them follows their physio clearance."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask the injured athlete how they would like to stay involved"
                - "Ask what they are happy for the group to know"
                - "Adapt one session a week so they can join the cleared parts"
                - "Check their clearance in writing before giving them match minutes"
            - name: Personal return-to-training playbook
              description: |-
                ## Purpose
                Athletes who train for years will almost certainly get injured again, and the second time is far easier with a page that says what worked: which clinician to call, how you logged, what the warning signs were and which mistakes cost you weeks. Writing your own playbook while the lessons are fresh makes the next return faster and calmer.

                ## Milestones
                1. The contacts that helped listed: physio, doctor, clinic, insurer.
                2. The tools that worked written down: log format, tests, cross-training options.
                3. The mistakes that cost time and what you would do instead recorded.
                4. The playbook reviewed once a year and after any new injury.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one or two page return playbook with contacts, tools and lessons exists and carries a review date from the last twelve months."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the clinicians, clinics and insurers who helped"
                - "Write down the log, tests and cross-training that worked"
                - "Record the three mistakes that cost you the most time"
                - "Reread and update the playbook @recurring(yearly)"
---

# Return to Training After Injury

This area is for athletes coming back from a sports injury, whether that is a rolled ankle that ended a season or a reconstructed knee with nine months of rehab ahead. It starts with the foundations (notes on what happened, a proper assessment, a written plan with phase criteria, baseline measures and a log), then the weekly machinery of exercises, symptom checks, physio visits and load tallies, the knowledge that makes rehab make sense, the decisions about surgery, braces and second opinions, the dated milestones from first session back to first race, the situations that change the route, and finally the specialist work of bone stress, tendon problems, objective testing and a playbook for next time.

What repeats is a daily exercise routine and a next-morning symptom check, a weekly review against the plan, a weekly load tally and coach update once you are back, a monthly retest of the injured side and a monthly physio cycle, plus a yearly look at your return playbook. The Metrics log, Habit tracker, Meeting notes, Weekly meal plan, Training program and Purchase decision templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
