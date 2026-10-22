---
id: mental-wellbeing.daily-stress-management
name: Daily Stress Management
description: "Your stress triggers mapped and early warning signs written down, with daily and weekly routines, boundaries and plans that keep everyday pressure from spilling into health, work and home."
category: personal
version: 1.0.0
tags: [mental-wellbeing, daily-stress-management, everyone, knowledge-worker, stress, triggers, work-life-balance]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - habit-tracker
    - operational-checklist
    - one-on-one
    - course
  pillars:
    - name: Mental & Emotional Wellbeing
      emoji: "🧘"
      description: "The inner weather: managing stress and anxiety, recovering from burnout, therapy and support, rest and attention, mood and emotional skills, and the routines that keep a mind steady when life is not."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Daily Stress Management
          description: "Spotting stress triggers and building daily practices that lower stress levels before they spill into health, work or home life."
          projects:
            - name: Personal stress warning signs list
              description: |-
                ## Purpose
                Most people notice stress only once it has turned into a snapped reply, a headache or a sleepless night. Writing down your own early signs across body, thoughts and behaviour, such as a clenched jaw, shorter emails or skipping lunch, gives you a chance to act a day or two earlier. The list becomes the reference every other project in this area checks against.

                ## Milestones
                1. Five or more physical signs of rising stress written down from your own experience.
                2. Typical thought and mood signs listed in your own words.
                3. Behaviour changes noted, such as snacking, snapping, scrolling or cancelling plans.
                4. One person close to you asked what they notice first, and their answer added.
                5. The list saved where you will see it during the weekly review.

                ## Notes
                Keep it personal and concrete. 'Tense shoulders by 3pm' is more useful than 'physical tension'.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A written list of at least ten personal stress warning signs across body, thoughts and behaviour, including one sign someone else has noticed."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write down what your body did the last time you felt badly stressed"
                - "List the thoughts and moods that tend to show up on stressful days"
                - "Note the habits that change when pressure builds, such as eating or scrolling"
                - "Ask a partner, friend or colleague what they notice first when you are stressed"
                - "Pin the finished list somewhere you will see it each week"
            - name: Two-week stress trigger diary
              description: |-
                ## Purpose
                Stress feels constant, but it usually spikes around a handful of predictable moments: a certain meeting, the school run, one particular inbox, a phone call with one relative. Logging each spike for two weeks, with time, place, people and a 1 to 10 rating, turns a general sense of pressure into a short list of triggers you can actually work on.

                ## Milestones
                1. Every noticeable stress spike logged for fourteen days with time, situation and a 1 to 10 rating.
                2. Entries grouped into themes such as work, home, money, travel and people.
                3. The five most frequent or most intense triggers ranked.
                4. One sentence written for each top trigger on what made it worse or better.

                ## Notes
                Log within an hour of the spike, while the detail is fresh. A notes app on the phone is enough; completeness matters more than neatness.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A fourteen-day trigger diary with at least twenty entries and a ranked list of the top five triggers."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Set up a diary note with columns for time, situation, people and rating"
                - "Log each stress spike within an hour for fourteen days"
                - "Group the entries into themes at the end of the second week"
                - "Rank the five triggers that came up most often or hit hardest"
            - name: Perceived stress baseline score
              description: |-
                ## Purpose
                Without a number, it is hard to tell whether three months of new habits made any difference. The Perceived Stress Scale is a free, widely used ten-question self-check that takes five minutes, and taking it now and every quarter gives you a simple before and after to set beside your diary.

                ## Milestones
                1. A published version of the ten-item Perceived Stress Scale found and completed.
                2. The score and date recorded in a metrics log.
                3. A note added on what the past month was like, so the number has context.
                4. Quarterly retakes scheduled for the year ahead.

                ## Notes
                Start from the **Metrics log** template. A questionnaire score is a self-check, not a diagnosis; take a high or rising score to your doctor rather than interpreting it alone.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A dated Perceived Stress Scale score recorded in a metrics log with a line of context, and quarterly retakes scheduled."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Find a published copy of the ten-item Perceived Stress Scale"
                - "Complete it honestly for the past month and work out the score"
                - "Record the score, date and a line of context in a metrics log"
                - "Retake the questionnaire and log the new score @recurring(quarterly)"
            - name: Control, influence and accept map of stressors
              description: |-
                ## Purpose
                Some stressors can be removed, some can only be nudged and some have to be lived with for now, and treating them all the same wastes energy. Sorting your trigger list into those three columns shows where action pays off and where the work is about how you respond rather than what you change.

                ## Milestones
                1. Every trigger from the diary placed in one column: control, influence or accept.
                2. One concrete action written next to each item in the control column.
                3. One person or conversation named for each item in the influence column.
                4. A coping response chosen for each item in the accept column.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A three-column stressor map with an action, a conversation or a coping response written against every item."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Copy your top triggers onto one page with three columns"
                - "Place each trigger under control, influence or accept"
                - "Write one next action against each item you control"
                - "Name who you would need to talk to for each item you can influence"
            - name: Commitments audit with a stress cost
              description: |-
                ## Purpose
                Overload rarely comes from one big thing; it builds from recurring commitments that each seemed small when you said yes, from the committee seat to the weekly favour. Listing every standing commitment with the hours it takes and a stress score shows the true load, and which items cost far more than they give back.

                ## Milestones
                1. Every recurring commitment at work, at home and in the community listed.
                2. Weekly hours estimated for each one.
                3. Each item scored 1 to 5 for stress and 1 to 5 for value.
                4. Items with high stress and low value flagged to drop, hand over or shrink.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A full commitments list with hours, stress and value scores, and at least three items flagged to drop, hand over or shrink."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Scroll back through four weeks of calendar to list every repeating commitment"
                - "Estimate the weekly hours each commitment really takes"
                - "Score each one for stress and for value"
                - "Flag the three items with the worst stress to value ratio"
            - name: Busy-day minimum plan
              description: |-
                ## Purpose
                On the worst days, the habits that protect you are the first to go: lunch at the desk or not at all, no daylight, bed at one in the morning. A short list of three to five non-negotiables, agreed in advance for high-pressure days, keeps a floor under you when there is no time to decide anything.

                ## Milestones
                1. Three to five minimums chosen, such as a proper lunch, ten minutes outside and a fixed lights-out time.
                2. Each minimum made small enough to keep on the worst day of the month.
                3. The list kept on your phone lock screen or on your desk.
                4. The plan tested through two genuinely busy days and adjusted.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A written list of three to five busy-day minimums, kept through at least two high-pressure days and adjusted afterwards."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Recall the last very busy day and note which basics slipped first"
                - "Choose three to five minimums small enough to keep on any day"
                - "Put the list on your lock screen or on a card on your desk"
                - "Review how the minimums held after the next two busy days"
            - name: Stress reset menu in three lengths
              description: |-
                ## Purpose
                When stress spikes, choosing what to do is itself a demand, so most people default to the fridge or the phone. A written menu of resets you know work for you, at two, ten and thirty minutes, means the choice is already made and fits whatever gap the day allows.

                ## Milestones
                1. At least three two-minute resets listed, such as stepping outside or cold water on the wrists.
                2. At least three ten-minute resets listed, such as a brisk walk round the block.
                3. At least two thirty-minute resets listed, such as a swim or cooking with music on.
                4. Each reset tried once and kept only if it lowered your stress rating.

                ## Notes
                Include options that work at a desk, at home with others around and while travelling, so the menu never runs out.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A reset menu with at least eight tested options across two-, ten- and thirty-minute lengths, kept where you can reach it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the things that have calmed you quickly in the past"
                - "Sort them into two-, ten- and thirty-minute resets"
                - "Try each new reset once and rate your stress before and after"
                - "Save the final menu as a phone note and a printed card"
            - name: Caffeine and alcohol as stress coping check
              description: |-
                ## Purpose
                Extra coffee to push through and a drink to come down afterwards is one of the most common stress loops, and both can raise next-day stress through poorer sleep and jitters. Two weeks of honest notes on when and why you reach for caffeine, alcohol or nicotine shows whether they have become a stress tool rather than a pleasure.

                ## Milestones
                1. Two weeks of caffeine, alcohol and nicotine use recorded with time and reason.
                2. Uses driven by stress, rather than taste or company, marked.
                3. The pattern compared with your stress diary and sleep.
                4. One small change chosen, such as a caffeine cut-off time, and tried for two weeks.

                ## Notes
                If cutting down brings withdrawal symptoms or proves hard, talk to your doctor or pharmacist before changing much at once.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A two-week use record with stress-driven uses marked and one specific change tried for a further two weeks."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Note each coffee, drink or cigarette with the time and the reason"
                - "Mark the ones you reached for because of stress"
                - "Compare the pattern with your trigger diary and your sleep"
                - "Pick one change, such as no caffeine after 2pm, and try it for two weeks"
            - name: Knowing when stress needs your doctor
              description: |-
                ## Purpose
                Daily stress management works for everyday pressure, but stress that comes with chest pain, weeks of broken sleep, panic, heavy drinking or thoughts of self-harm needs professional help, not a better routine. Writing down your own thresholds for booking an appointment, and how to get urgent help, means you will not talk yourself out of it when the time comes.

                ## Milestones
                1. Your health service's guidance on stress symptoms that need a doctor read.
                2. Personal thresholds written down, such as two weeks of poor sleep or stress stopping you working.
                3. Urgent help numbers for your country saved in your phone.
                4. A short symptom summary template ready to bring to an appointment.

                ## Notes
                If you ever think about harming yourself, contact emergency services or a crisis line now rather than waiting for an appointment.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Written personal thresholds for seeing a doctor, with urgent help numbers saved in your phone and a symptom summary template ready."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Read your health service's guidance on when stress needs a doctor"
                - "Write down three personal signs that mean you will book an appointment"
                - "Save your doctor's number and your local urgent help line in your phone"
                - "Draft a short symptom summary you could bring to an appointment"
            - name: Ten-minute morning day triage
              description: |-
                ## Purpose
                Starting the day by reacting to the inbox hands your stress level to whoever emailed overnight. Ten minutes before opening messages to pick the three things that matter today, spot the likely pressure point and decide what will be left undone sets the shape of the day on your terms.

                ## Milestones
                1. A fixed time and place for the triage chosen, before email or messages.
                2. A three-line format in use: top three tasks, likely pressure point, what can wait.
                3. The triage done on at least four working days a week for a month.
                4. A note at month end on whether afternoons feel less frantic.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The morning triage done before opening messages on at least sixteen working days in a month, with the three-line note kept."
                cadence: rolling
              tasks:
                - "Choose a time and place for the triage before you open any messages"
                - "Write a three-line template: top three, pressure point, can wait"
                - "Do the ten-minute triage before opening email @recurring(weekly:mon,tue,wed,thu,fri)"
                - "Count at month end how many working days the triage happened"
            - name: End-of-workday shutdown ritual
              description: |-
                ## Purpose
                Work stress follows people home when the day ends mid-thought, with open loops still running at dinner. A five-minute shutdown, capturing loose ends, glancing at tomorrow and closing the laptop with a set cue, gives your mind permission to stop rehearsing work all evening.

                ## Milestones
                1. A written shutdown checklist of no more than five steps.
                2. A closing cue chosen, such as shutting the laptop lid and saying 'done for today'.
                3. The ritual completed on most working days for four weeks, tracked in a habit tracker.
                4. Evening checks of work messages counted before and after the four weeks.

                ## Notes
                Start from the **Habit tracker** template. Remote workers tend to benefit most, since there is no commute to mark the end of the day.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A shutdown checklist of five steps or fewer completed on at least fifteen working days in four weeks, recorded in a habit tracker."
                cadence: rolling
              tasks:
                - "Write a shutdown checklist of no more than five steps"
                - "Pick a clear closing cue to mark the end of work"
                - "Run the shutdown checklist before you finish work @recurring(weekly:mon,tue,wed,thu,fri)"
                - "Count how often you checked work messages in the evening this week"
            - name: Friday afternoon stress review
              description: |-
                ## Purpose
                Fifteen minutes looking back each week catches patterns that a busy week hides: the same meeting spiking stress three weeks running, a reset that quietly stopped working. Doing it on Friday afternoon also closes the week, so the weekend starts lighter.

                ## Milestones
                1. A five-question review written: peak moment, main trigger, what helped, what slipped, one change.
                2. The review completed on most Fridays for two months.
                3. At least one change from a review carried into the following week each month.
                4. Triggers that recur across reviews added back to your stressor map.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least six weekly reviews completed in two months, each ending with one change for the following week."
                cadence: rolling
              tasks:
                - "Write the five review questions at the top of a running note"
                - "Answer the five questions for this week @recurring(weekly:fri)"
                - "Carry one change from the review into next week's plan"
                - "Add any trigger that appears three weeks running to your stressor map"
            - name: Sunday evening week preview
              description: |-
                ## Purpose
                Sunday dread is mostly uncertainty about the week ahead. Twenty minutes on Sunday evening to look at the calendar, spot the heavy days, move what can move and plan your busy-day minimums swaps a vague knot in the stomach for a week with a known shape.

                ## Milestones
                1. The coming week's calendar checked for its two heaviest days.
                2. At least one item moved, shortened or cancelled to ease those days.
                3. Busy-day minimums written into the heaviest days.
                4. The preview done on most Sundays for two months, with a note on how Monday felt.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The week preview done on at least six Sundays in two months, each marking the two heaviest days and making one adjustment."
                cadence: rolling
              tasks:
                - "Choose a regular twenty-minute slot on Sunday evening for the preview"
                - "Mark the two heaviest days of the coming week @recurring(weekly:sun)"
                - "Move, shorten or decline one item on those heavy days"
                - "Block your busy-day minimums into the heaviest days"
            - name: Calendar buffers between commitments
              description: |-
                ## Purpose
                Back-to-back meetings and appointments leave no time to finish one thing before the next starts, so stress compounds through the day. Building fifteen-minute buffers after long meetings and before travel, and protecting them with a weekly check, is one of the cheapest stress reductions a knowledge worker can make.

                ## Milestones
                1. Default meeting length changed to 25 or 50 minutes where your calendar tool allows.
                2. Buffers blocked after any meeting over an hour and before any travel.
                3. A weekly check in place that removes double-bookings and squeezed transitions.
                4. Days with no buffer at all reduced to one a week or fewer.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Default meeting lengths shortened and no more than one buffer-free day a week for a month, checked weekly."
                cadence: rolling
              tasks:
                - "Set the default meeting length to 25 or 50 minutes in your calendar"
                - "Block fifteen minutes after every meeting longer than an hour"
                - "Add travel time as a calendar block before every appointment"
                - "Check next week for back-to-back stretches and add buffers @recurring(weekly:thu)"
            - name: Batched email and message windows
              description: |-
                ## Purpose
                Checking messages every few minutes keeps you on low-level alert all day and makes every task take longer. Agreeing two or three fixed windows a day for email and chat, with alerts paused between them, ends the constant pinging most office workers live in without missing anything urgent.

                ## Milestones
                1. Two or three daily message windows chosen and written in your calendar.
                2. Email and chat alerts paused outside those windows.
                3. An urgent route agreed with your team, such as a phone call.
                4. A month of batching completed and the windows adjusted.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Messages checked in no more than three fixed daily windows for a month, with an urgent route agreed with your team."
                cadence: rolling
              tasks:
                - "Choose two or three message windows and block them in your calendar"
                - "Pause email and chat alerts outside those windows"
                - "Tell your team how to reach you for anything genuinely urgent"
                - "Review whether the batching windows still fit your work @recurring(monthly:9)"
            - name: Weekly life admin slot
              description: |-
                ## Purpose
                Unpaid bills, unanswered school forms and the boiler service nobody booked create stress out of proportion to their size, because they hover with no time attached. One fixed weekly slot for life admin, fed by a running list that everything goes on, stops these from leaking into every evening.

                ## Milestones
                1. One running list where every admin item goes, on paper or on your phone.
                2. A fixed weekly hour chosen and blocked.
                3. The slot kept on most weeks for two months.
                4. Nothing on the list older than three weeks.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly admin hour kept on at least six of eight weeks, with no item on the list older than three weeks."
                cadence: rolling
              tasks:
                - "Start one running list for every form, bill and booking that needs doing"
                - "Block a fixed weekly hour for life admin"
                - "Work through the admin list in the weekly slot @recurring(weekly:sat)"
                - "Clear or reschedule any item older than three weeks"
            - name: Movement breaks on the heaviest days
              description: |-
                ## Purpose
                Physical activity is one of the best-supported ways to burn off the stress response, and the days that most need it are the days it gets dropped. Scheduling a short brisk walk or other movement on your two most demanding weekdays, as a booked appointment, helps it survive the pressure.

                ## Milestones
                1. Your two most demanding weekdays identified from the diary or calendar.
                2. A twenty-minute movement slot booked on each of those days.
                3. The slot kept on at least three quarters of those days for six weeks.
                4. Your stress rating before and after noted for ten of the sessions.

                ## Notes
                If you have a heart condition or have been inactive for a long time, check with your doctor before starting anything strenuous.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twenty minutes of movement kept on at least nine of twelve heavy days over six weeks, with before and after ratings for ten."
                cadence: rolling
              tasks:
                - "Pick the two weekdays that are usually the most demanding"
                - "Book a twenty-minute walk or other movement on each of those days"
                - "Take the booked movement break @recurring(weekly:tue,thu)"
                - "Note your stress rating before and after the break"
            - name: Monthly stress load rebalance
              description: |-
                ## Purpose
                Load creeps back: a new project, a favour, a term of extra activities for the children. Revisiting the commitments list once a month, and making one trade every time something significant comes in, keeps the total from quietly growing back to where it started.

                ## Milestones
                1. The commitments list and stressor map reviewed each month.
                2. New commitments added since last month identified.
                3. One item dropped, shrunk or handed over for each significant new one.
                4. A one-line monthly note on whether load went up, down or stayed level.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The commitments list reviewed every month for three months, with each significant new commitment matched by one item dropped or reduced."
                cadence: rolling
              tasks:
                - "Compare this month's commitments against last month's list @recurring(monthly:14)"
                - "Mark anything new that was added without a trade"
                - "Drop, shrink or hand over one item for each new commitment"
                - "Write one line on whether total load went up, down or stayed level"
            - name: Weekly contact with a steadying person
              description: |-
                ## Purpose
                Time with someone who makes you laugh or listens well is a strong buffer against everyday stress, and it is often the first thing cut when life gets busy. Naming two or three steadying people and booking a short weekly contact, a call, a walk or a coffee, protects that buffer on purpose.

                ## Milestones
                1. Two or three people named who reliably leave you calmer.
                2. A weekly contact booked with one of them, rotating through the names.
                3. Contact kept on at least six of eight weeks.
                4. At least one of them told that these catch-ups help, so they know they matter.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A short call, walk or coffee with a steadying person on at least six of eight weeks."
                cadence: rolling
              tasks:
                - "Write down two or three people who leave you calmer after time together"
                - "Arrange a call, walk or coffee with one of them @recurring(weekly:wed)"
                - "Rotate through the names so nobody carries it all"
                - "Tell one of them that the catch-ups help you"
            - name: How the stress response works
              description: |-
                ## Purpose
                Knowing why your heart races before a difficult call, and why months of small pressures can leave you wired and exhausted at once, makes stress less alarming and the practices in this area easier to stick with. A few hours with a reputable book, course or health service guide on acute and chronic stress builds that understanding.

                ## Milestones
                1. One reputable book, course or health service guide on stress chosen.
                2. The difference between short-term and long-term stress explained in your own words.
                3. Three facts that changed how you see your own reactions written down.
                4. One practice in this area linked to the part of the stress response it works on.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of how acute and chronic stress work, written in your own words, with three personal takeaways."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Choose one reputable book, course or health service guide on stress"
                - "Read or watch it in three sessions over two weeks"
                - "Write a one-page summary in your own words"
                - "Ask the agent to quiz you on the summary to check it has stuck"
            - name: Saying no and renegotiating requests
              description: |-
                ## Purpose
                Many people take on extra work because they lack a quick, polite way to decline or bargain in the moment. Preparing a handful of scripts, such as 'I can do that if the report moves to next week', and practising them in low-stakes situations lets you protect your load without damaging relationships.

                ## Milestones
                1. Five scripts written for declining, delaying and trading requests.
                2. A habit of pausing before agreeing, such as 'let me check and come back to you'.
                3. Scripts used at least five times in low-stakes situations.
                4. One significant request declined or renegotiated, with the outcome noted.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Five written scripts, used at least five times, including one significant request declined or renegotiated with the outcome noted."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write five scripts for declining, delaying and trading requests"
                - "Practise saying the scripts aloud until they feel natural"
                - "Use a 'let me check and come back to you' pause on the next request"
                - "Note each time you used a script and what happened"
            - name: Stress as challenge reappraisal practice
              description: |-
                ## Purpose
                Research on stress mindset suggests that reading a racing heart before a presentation as your body getting ready to perform, rather than a sign of failure, can change how the stress plays out. Practising that reappraisal before several real pressure moments is a skill built over weeks, not a single insight.

                ## Milestones
                1. The idea of reappraising stress symptoms as preparation read about from a reputable source.
                2. A short reappraisal sentence written in your own words.
                3. The sentence used before at least five real pressure moments.
                4. A note after each one on how it went and how the stress felt.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "A personal reappraisal sentence used before at least five real pressure moments, with a short note on each."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read a reputable summary of research on stress mindset and reappraisal"
                - "Write one reappraisal sentence you believe, in your own words"
                - "Say the sentence to yourself before your next three pressure moments"
                - "Note how each moment went and how the stress felt"
            - name: Micro-breaks between demanding tasks
              description: |-
                ## Purpose
                Moving straight from one demanding task to the next stacks stress through the day. Short breaks of one to five minutes, such as standing, looking out of a window or refilling water, have good evidence for reducing fatigue during desk work, and taking them deliberately is a skill worth practising.

                ## Milestones
                1. Three micro-break actions chosen that take under five minutes.
                2. A cue chosen, such as finishing a task or a timer every ninety minutes.
                3. Micro-breaks taken at least three times a day for two weeks.
                4. Afternoon energy and stress compared with the fortnight before.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Three or more micro-breaks a day for two weeks, with afternoon stress ratings compared against the previous fortnight."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Choose three break actions that take under five minutes"
                - "Set a cue for breaks, such as after each finished task"
                - "Take at least three micro-breaks a day for two weeks"
                - "Compare afternoon stress ratings with the fortnight before"
            - name: Time estimation practice to end chronic rushing
              description: |-
                ## Purpose
                Chronic lateness and rushing often come from underestimating how long things take, not from having too much to do. Two weeks of writing an estimate before tasks and trips and noting the real time reveals your personal error rate, so you can plan with honest numbers and stop running for every train.

                ## Milestones
                1. Estimates and actual times recorded for at least thirty tasks or trips.
                2. Your average underestimate worked out as a percentage.
                3. A personal padding rule set, such as adding a third to every estimate.
                4. The padding rule applied to a week of planning, with rushed moments counted.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Thirty estimate versus actual entries, a calculated average error and a padding rule applied to one full week of planning."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write an estimate before each task or trip for two weeks"
                - "Record the actual time taken next to each estimate"
                - "Work out your average underestimate as a percentage"
                - "Apply a padding rule to next week's plans and count the rushes"
            - name: Asking for help and delegating
              description: |-
                ## Purpose
                People under stress often carry tasks that someone else could do, at work or at home, because asking feels harder than doing. Sorting what only you can do, what others could do after a short handover and what nobody needs to do at all turns delegating into a decision rather than a favour.

                ## Milestones
                1. A week of tasks sorted into only me, someone else with a handover, and nobody.
                2. Three tasks handed over, each with a clear description of done.
                3. At least one task stopped altogether.
                4. A note after four weeks on hours saved and anything that went wrong.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Three tasks handed over with a clear definition of done and one task stopped altogether, with hours saved noted after four weeks."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Sort a week's tasks into only me, someone else, and nobody"
                - "Pick three tasks to hand over and write what done looks like"
                - "Ask the people concerned and agree a handover date"
                - "Stop one task that nobody needs and see whether anyone notices"
            - name: Five-step fix for recurring daily hassles
              description: |-
                ## Purpose
                Small hassles that repeat every day, the lost keys, the jammed printer, the same missing ingredient, can add up to more stress than many big events. Running each one through a short routine of define, list options, pick one, try it and check gets rid of hassles for good rather than grumbling about them every week.

                ## Milestones
                1. Ten recurring hassles listed from the diary and from memory.
                2. Each hassle rewritten as a specific problem with a likely cause.
                3. A fix chosen and tried for the three most frequent ones.
                4. Each fix checked after two weeks and kept, adjusted or replaced.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Ten recurring hassles listed and three of them fixed, with each fix checked after two weeks."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List ten hassles that happen at least once a week"
                - "Rewrite the top three as specific problems with a likely cause"
                - "Choose and try one fix for each of the three"
                - "Check after two weeks whether each hassle has stopped"
            - name: Unrushed morning routine redesign
              description: |-
                ## Purpose
                Rushed mornings set a stressed tone that can last until lunch. Moving decisions and preparation to the night before, and pulling the alarm or departure time forward by fifteen minutes, gives the morning a margin that absorbs the inevitable lost shoe or missing permission slip.

                ## Milestones
                1. The current morning timed from alarm to leaving, with the stress points marked.
                2. Three tasks moved to the evening before, such as clothes, bags and lunches.
                3. A fifteen-minute margin built into the morning.
                4. Late departures counted over two weeks and compared with before.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A redesigned morning with three tasks moved to the evening and a fifteen-minute margin, with late departures counted over two weeks."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Time your current morning from alarm to leaving and mark the stress points"
                - "Move three morning tasks to the evening before"
                - "Set the alarm or departure fifteen minutes earlier"
                - "Count late departures over the next two weeks"
            - name: Commute decompression plan
              description: |-
                ## Purpose
                Your commute can be a daily stress spike or a useful buffer between work and home, depending on how it is used. Trying a different route, time or use of the travel time, such as walking the last stop, listening to music instead of answering emails or sitting in the car for two minutes before going in, can turn travel into recovery.

                ## Milestones
                1. The current commute rated for stress for a week, outbound and return.
                2. Two alternatives tried, such as a different time, route or activity.
                3. The trip home reserved for something unrelated to work.
                4. The best combination kept and rated again for a week.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Two commute alternatives tried and the chosen one rated lower for stress than the original over a full week."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Rate your commute stress out and back for one week"
                - "Try leaving fifteen minutes earlier or later for a week"
                - "Swap work email on the way home for music, audio or a walk"
                - "Keep the version with the lower stress ratings"
            - name: Meeting load cut by a fifth
              description: |-
                ## Purpose
                For many knowledge workers, meetings eat the hours needed for the actual work, which then spills into evenings. Reviewing every recurring meeting and declining, shortening or replacing a fifth of them with written updates frees real time, and nobody feels snubbed when it is done openly.

                ## Milestones
                1. Every recurring meeting listed with length, frequency and your role.
                2. Each meeting marked keep, shorten, attend less often or replace with an update.
                3. Changes agreed with organisers through a short, polite note.
                4. Total weekly meeting hours down by at least 20 percent.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Weekly hours in recurring meetings reduced by at least 20 percent, with each change agreed with the meeting organiser."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every recurring meeting with its length and your role"
                - "Mark each one keep, shorten, attend less or replace"
                - "Ask the agent to draft polite notes to organisers proposing the changes"
                - "Recheck your recurring meetings for new creep @recurring(quarterly)"
            - name: Interruption settings on phone and laptop
              description: |-
                ## Purpose
                Each ping pulls attention and adds a small jolt of alertness, and dozens a day keep stress simmering. An hour spent setting focus modes, muting busy group chats and switching off badges on non-essential apps removes interruptions you never actually chose.

                ## Milestones
                1. Notifications counted across one typical day.
                2. Notifications and badges switched off for non-essential apps.
                3. Focus or do-not-disturb schedules set for work blocks and evenings.
                4. Notifications counted again a week later, ideally halved.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Daily notifications counted before and after, with the count at least halved after one week of new settings."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Count the notifications you receive on one typical day"
                - "Switch off notifications and badges for every non-essential app"
                - "Mute busy group chats and set focus schedules for evenings"
                - "Count notifications again a week later"
            - name: Household flashpoint agreement
              description: |-
                ## Purpose
                Many stress spikes at home happen at the same flashpoints: getting out of the door, who cooks, screens at bedtime, the state of the kitchen. Picking one flashpoint and agreeing a clear plan with everyone involved, written down and revisited, removes an argument that otherwise repeats every day.

                ## Milestones
                1. The single most frequent household flashpoint chosen.
                2. Everyone involved asked what makes that moment hard for them.
                3. A written agreement covering who does what and when.
                4. The agreement reviewed after a month and adjusted.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written agreement for one household flashpoint, accepted by everyone involved and reviewed after one month."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Choose the household moment that causes the most arguments"
                - "Ask each person involved what makes it hard for them"
                - "Write a short agreement on who does what and when"
                - "Check with everyone how the agreement is working @recurring(monthly:3)"
            - name: Dropping one commitment this quarter
              description: |-
                ## Purpose
                Audits are only useful if something actually leaves the list. Choosing one commitment flagged as high stress and low value, planning a graceful exit with notice and a handover, and following through within the quarter gives back real hours every week.

                ## Milestones
                1. One commitment chosen from the flagged list.
                2. An exit plan written with a date, a handover and who needs telling.
                3. The people concerned told with reasonable notice.
                4. The commitment ended and the weekly hours freed noted.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "One high-stress, low-value commitment ended within ninety days, with the weekly hours freed recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pick one commitment from your flagged list to end"
                - "Write an exit date and what needs handing over"
                - "Tell the people concerned and offer a handover"
                - "Record the weekly hours freed once it has ended"
            - name: Choosing a regular stress outlet activity
              description: |-
                ## Purpose
                Having a standing activity that absorbs you completely, such as a choir, a climbing wall, an allotment, five-a-side or a pottery class, gives stress somewhere to go every week. Comparing two or three options on cost, timing and how you feel afterwards, then committing for a season, beats waiting for spare time to appear.

                ## Milestones
                1. Three possible activities shortlisted with cost, time and location.
                2. At least two tried as a taster session.
                3. One chosen and committed to for a term or season.
                4. Attendance counted at the end of the season and the choice reviewed.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One weekly activity chosen after at least two tasters and attended for a full term or season, with attendance counted."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List three activities that fully absorb you and fit your week"
                - "Book taster sessions for at least two of them"
                - "Sign up for a term or season of the one you enjoyed most"
                - "Count attendance at the end of the season and decide whether to continue"
            - name: Lower-stress workspace set-up
              description: |-
                ## Purpose
                Noise, glare, a cluttered desk and a chair that aches by mid-afternoon all add background strain to every working hour. A short audit of the place you work most, at home or in the office, followed by three inexpensive fixes, removes stressors you have stopped noticing.

                ## Milestones
                1. Workspace rated for noise, light, clutter, comfort and interruptions.
                2. Three fixes chosen, such as noise-cancelling headphones, a desk lamp or a clear-desk rule.
                3. Fixes in place within a month.
                4. Afternoon stress ratings compared before and after.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three workspace fixes in place within a month, with afternoon stress ratings compared before and after."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Rate your workspace for noise, light, clutter, comfort and interruptions"
                - "Choose three inexpensive fixes for the worst-rated items"
                - "Put the fixes in place this month"
                - "Compare afternoon stress ratings before and after the changes"
            - name: Deadline week stress plan
              description: |-
                ## Purpose
                Known crunches, such as a product launch, a year-end close or a bid deadline, do far less damage when the week is planned before it starts. Clearing non-essentials, arranging meals and childcare in advance and setting busy-day minimums for that week means the pressure lands on the work, not on everything else.

                ## Milestones
                1. The deadline date and the two weeks before it marked in the calendar.
                2. Non-essential meetings and commitments in that window cancelled or moved.
                3. Meals, lifts and home tasks arranged in advance.
                4. A short recovery block booked for the days after the deadline.

                ## Notes
                Start from the **Operational checklist** template, and reuse it for every crunch so each one is easier to plan than the last.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written crunch-week plan with non-essentials cleared, home logistics arranged and a recovery block booked after the deadline."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Mark your next big deadline and the two weeks before it"
                - "Cancel or move non-essential commitments in that window"
                - "Arrange meals, lifts and home tasks for the crunch week"
                - "Book a half day of recovery for the days after the deadline"
            - name: High-stakes presentation or interview day plan
              description: |-
                ## Purpose
                On the day of a big presentation, interview or difficult meeting, stress helps up to a point and then gets in the way. Planning the day itself, from the evening before and what you eat to arrival time, a reset beforehand and a reward afterwards, keeps the stress working for you.

                ## Milestones
                1. The event in the calendar with travel time and a buffer added.
                2. The evening before planned, with preparation finished early.
                3. A pre-event routine chosen from your reset menu.
                4. A debrief written after the event noting what helped.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written plan for one high-stakes day covering the evening before and a pre-event routine, with a debrief completed afterwards."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Add the event with travel time and a buffer to your calendar"
                - "Finish preparation by early evening the day before"
                - "Pick one reset from your menu to use just before the event"
                - "Write a short debrief within a day of the event"
            - name: Festive season stress plan
              description: |-
                ## Purpose
                Major festivals and year-end holidays pile travel, hosting, spending, family tension and work deadlines into a few weeks. Planning in good time, who hosts, what the budget is, which invitations to accept and where rest fits, turns the season from something to survive into something you can enjoy.

                ## Milestones
                1. Key dates and gatherings for the season listed well ahead.
                2. Hosting, travel and gift plans agreed with your household.
                3. A spending limit for the season set.
                4. At least two unscheduled days protected for rest.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A festive season plan with key dates, hosting and travel agreed, a spending limit and two protected rest days, made two months ahead."
                cadence: cyclic
              tasks:
                - "List the dates and gatherings of the coming festive season"
                - "Agree hosting and travel plans with your household"
                - "Set a spending limit for gifts and gatherings"
                - "Protect two unscheduled rest days in the busiest stretch"
                - "Start planning the festive season two months ahead @recurring(yearly)"
            - name: First day back after leave re-entry plan
              description: |-
                ## Purpose
                Returning from holiday to hundreds of emails and a full calendar can wipe out the benefit of the break by Tuesday lunchtime. Planning the return before you leave, with an out-of-office that sets expectations, a light first day and a catch-up order, protects the rest you have just had.

                ## Milestones
                1. A first day back with no meetings blocked before leaving.
                2. An out-of-office message stating the return date and who covers.
                3. A catch-up order for messages decided, such as by sender or newest first.
                4. The first week's commitments checked and trimmed before leaving.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A meeting-free first day back, an out-of-office naming cover and a written catch-up order, all set before the leave starts."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Block your first day back as meeting-free before you leave"
                - "Write an out-of-office naming your cover and return date"
                - "Decide the order you will work through messages on return"
                - "Trim the first week back to essentials before you go"
            - name: Annual map of predictable stress peaks
              description: |-
                ## Purpose
                Plenty of stress peaks recur on a calendar: year-end at work, the tax return, the school year starting, a month crowded with birthdays, the anniversary of a loss. Mapping them once means each one can be prepared for weeks in advance instead of arriving as a surprise every year.

                ## Milestones
                1. Last year's calendar and diary reviewed for heavy months.
                2. Every predictable peak placed on a twelve-month map.
                3. A preparation reminder set four weeks before each peak.
                4. The map reviewed and updated at the start of each year.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A twelve-month map of predictable stress peaks with a preparation reminder set four weeks before each one."
                cadence: cyclic
              tasks:
                - "Scroll back through last year's calendar for heavy months"
                - "Place every predictable peak on a twelve-month map"
                - "Set a reminder four weeks before each peak"
                - "Update the stress peaks map for the year ahead @recurring(yearly)"
            - name: Ninety-day stress progress review
              description: |-
                ## Purpose
                After three months of new routines it is easy to lose track of what changed and what quietly lapsed. Retaking the stress questionnaire, rereading the first trigger diary and comparing commitments with the start gives a clear verdict on which practices to keep and which to drop.

                ## Milestones
                1. Stress score retaken and compared with the baseline.
                2. Top triggers compared with the original diary.
                3. Each practice started marked keep, adjust or drop.
                4. A one-page summary of what worked written for the next quarter.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-page ninety-day review comparing stress scores and triggers with the baseline, with every practice marked keep, adjust or drop."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Compare your latest stress score with the baseline"
                - "Reread your original trigger diary alongside recent weekly reviews"
                - "Mark each practice you started keep, adjust or drop"
                - "Ask the agent to summarise the review into one page for next quarter"
            - name: Teatime crunch plan for parents of young children
              description: |-
                ## Purpose
                For parents of young children, the stretch from pickup to bedtime is often the most stressful part of the day: tired children, dinner, homework and bath, with everyone's patience running out together. Planning that window, with dinners prepared ahead, a fixed order of events and a short reset for you before pickup, lowers the temperature for the whole household.

                ## Milestones
                1. The pickup to bedtime window timed and its flashpoints noted.
                2. A simple fixed sequence for the evening agreed and shown to the children.
                3. Dinners for busy weeknights planned or cooked ahead.
                4. A five-minute reset for yourself built in before pickup.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A written pickup to bedtime sequence in use for two weeks, with weeknight dinners planned and a pre-pickup reset kept."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Time the window from pickup to bedtime and note when tempers flare"
                - "Agree a simple order for the evening and draw it for the children"
                - "Plan or batch-cook three weeknight dinners in advance"
                - "Take a five-minute reset in the car or on the walk before pickup"
            - name: Stress plan for working carers
              description: |-
                ## Purpose
                Combining a job with caring for a parent, partner or disabled child brings constant interruptions, hospital calls in work hours and very little time that is your own. A carer-specific plan covering backup cover, work flexibility and regular respite makes the load sustainable rather than heroic.

                ## Milestones
                1. A list of who can step in when you cannot, with phone numbers.
                2. Your employer's carer leave and flexible working options checked.
                3. Local carer support or respite services identified and contacted.
                4. A regular block of respite time booked and protected.

                ## Notes
                Many countries offer a carer's assessment or carer support line through local services; ask your doctor's practice or local authority what exists near you.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A backup cover list, your employer's carer options checked and a regular respite block booked and kept for two months."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write a list of people who could step in at short notice"
                - "Check your employer's policies on carer leave and flexible working"
                - "Find local carer support or respite services and contact one"
                - "Book a block of respite time for yourself @recurring(monthly:19)"
            - name: Shift work stress routine
              description: |-
                ## Purpose
                Rotating shifts, nights and on-call work make the usual advice about evening routines and weekends useless. A stress plan built around your actual rota, with anchors that stay fixed whatever the shift, protected recovery after nights and a reliable way to see family, fits the life you have.

                ## Milestones
                1. The rota for the next month mapped with the hardest transitions marked.
                2. Two or three anchors chosen that stay fixed on any shift.
                3. A recovery routine written for the day after night shifts.
                4. One regular time with family or friends set that the rota allows.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A rota-based stress plan with fixed anchors, a post-night recovery routine and one regular social time, used through one full rota cycle."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Map next month's rota and mark the hardest shift changes"
                - "Choose two or three anchors that stay the same on every shift"
                - "Write a recovery routine for the day after a run of nights"
                - "Agree one regular social time with family that your rota allows"
            - name: Home and work boundaries for remote workers
              description: |-
                ## Purpose
                Working from home removes the commute but also the walls between work and everything else, so the laptop stays open on the kitchen table until ten at night. Clear physical, time and digital boundaries let home feel like home again.

                ## Milestones
                1. A defined workspace, even a corner, that is packed away or covered after work.
                2. Fixed start and finish times shared with your team.
                3. Work apps removed from or silenced on your personal phone after hours.
                4. A replacement for the commute, such as a short walk, at both ends of the day.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Fixed hours shared with your team, a workspace closed after work and a start and end-of-day walk kept for four weeks."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Choose a defined workspace and a way to close it after work"
                - "Share your start and finish times with your team"
                - "Silence work apps on your personal phone outside working hours"
                - "Take a short walk to start and end each working day"
            - name: Freelance and self-employed stress routine
              description: |-
                ## Purpose
                Freelancers and the self-employed carry stress that employees are spared: uneven income, chasing invoices, no colleague to share a bad day with and nobody to say stop. A routine that sets working hours, a regular client and income check and contact with peers gives some of the structure an employer would.

                ## Milestones
                1. Working hours and a weekly day off written down and shared with clients.
                2. A monthly check of client load and upcoming income in place.
                3. A trusted peer or group to talk to about work found.
                4. A written rule for when to turn work down.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Working hours shared with clients, a monthly client load check kept for three months and a written rule for turning work down."
                cadence: rolling
              tasks:
                - "Add your working hours and weekly day off to your email signature"
                - "Review client load and expected income for the next two months @recurring(monthly:28)"
                - "Find a peer group or fellow freelancer to talk shop with"
                - "Write a rule for when you will turn new work down"
            - name: When your partner is stressed too
              description: |-
                ## Purpose
                When both partners are under pressure at once, each tends to need support just when the other has none to give, and small irritations become arguments. A short regular conversation about load, a shared signal for being at the limit and an agreement to trade rest time helps both of you get through it.

                ## Milestones
                1. A twenty-minute weekly check-in on the week ahead agreed with your partner.
                2. A shared signal for being at your limit agreed.
                3. Rest time traded so each of you gets at least one protected block a week.
                4. One recurring friction point resolved through the check-in.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Six weekly couple check-ins held, a limit signal agreed and one protected rest block each per week."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Suggest a twenty-minute weekly check-in to your partner"
                - "Agree a word or signal that means 'I am at my limit'"
                - "Plan one protected rest block each for the coming week"
                - "Pick one friction point to resolve at the next check-in"
            - name: Heart rate variability as a stress trend signal
              description: |-
                ## Purpose
                Smartwatches and rings now often report heart rate variability and a stress or recovery score, which can show trends but are easy to over-read. Using one consistent measurement at the same time each morning, and comparing monthly trends with your diary, turns the data into a modest extra signal rather than another source of worry.

                ## Milestones
                1. One device and one measurement time chosen and kept consistent.
                2. Thirty days of morning readings collected before drawing conclusions.
                3. Monthly trends compared with your trigger diary and weekly reviews.
                4. A rule written for ignoring single-day dips.

                ## Notes
                Consumer wearables are not medical devices. Bring any worrying readings to your doctor rather than changing anything based on them alone.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Thirty days of consistent morning readings collected, then a monthly trend comparison with your stress diary recorded for three months."
                cadence: rolling
              tasks:
                - "Choose one device and a fixed morning time for readings"
                - "Collect thirty days of readings before reading anything into them"
                - "Compare the monthly trend with your diary and reviews @recurring(monthly:6)"
                - "Write a rule for ignoring single-day dips"
            - name: Team stress and workload visibility for managers
              description: |-
                ## Purpose
                Managers set much of the daily stress their team lives with, through deadlines, meeting habits and response-time expectations. Making workload visible, asking about pressure in one-to-ones and fixing team-wide causes, such as late-evening messages, lowers stress for everyone, the manager included.

                ## Milestones
                1. A simple team workload view in place, such as a shared board or a monthly pulse check.
                2. A standing question about pressure added to every one-to-one.
                3. Team norms written for response times and out-of-hours messages.
                4. One team-wide stress cause removed and the change reported back to the team.

                ## Notes
                Start from the **1:1** template and add the pressure question to it. Keep any workload check anonymous so people answer honestly.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Written team norms for response times, a pressure question in every one-to-one and one team-wide stress cause removed within three months."
                cadence: rolling
              tasks:
                - "Add a question about workload pressure to your one-to-one notes"
                - "Run a short anonymous workload check with the team @recurring(monthly:16)"
                - "Draft team norms for response times and out-of-hours messages"
                - "Pick one team-wide stress cause and remove it"
            - name: Personal stress operating manual
              description: |-
                ## Purpose
                After months of diaries, reviews and experiments, you know more about your own stress than any general guide does. Condensing it into a one or two page manual of triggers, early signs, what works, what does not and what to ask of others makes it quick to act on and easy to share with a partner or manager.

                ## Milestones
                1. Notes from the diary, reviews and experiments gathered in one place.
                2. A manual of one to two pages covering triggers, signs, resets and requests.
                3. The manual shared with at least one person who would use it.
                4. The manual reviewed and updated each year.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one to two page personal stress manual, shared with at least one person and reviewed once a year."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Gather your diary, weekly reviews and experiment notes in one place"
                - "Ask the agent to draft a two-page manual from those notes"
                - "Edit the draft until every line sounds like you"
                - "Share the manual with your partner, a friend or your manager"
                - "Reread and update the manual @recurring(yearly)"
            - name: Structured stress management course
              description: |-
                ## Purpose
                Some people get more from a structured programme with a group and a facilitator than from working alone. Many health services, employers and community organisations run multi-week stress management courses, often based on CBT, and completing one gives you a framework plus practice alongside others.

                ## Milestones
                1. Two or three courses found through your health service, employer or a reputable provider.
                2. One chosen on format, timing and cost.
                3. Every session attended or caught up on.
                4. The three most useful techniques written up and added to your reset menu.

                ## Notes
                Start from the **Course** template. Check whether your employer's assistance programme or your health service offers one free.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A multi-week stress management course completed, with the three most useful techniques written up afterwards."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Search your health service and employer benefits for stress management courses"
                - "Compare two or three options on format, timing and cost"
                - "Enrol in the course that fits your schedule"
                - "Write up the three most useful techniques after the final session"
---

# Daily Stress Management

Daily stress management is about noticing pressure early and having routines that release it before it spills into sleep, health, work or home. It starts with foundations that map your warning signs, triggers and commitments, moves through weekly operating rhythms and practical skills such as saying no and estimating time honestly, then covers improvements to mornings, meetings and the home, the dated crunch points of a year, plans for parents, carers, shift workers, remote workers and freelancers, and a few specialist projects for managers and the data-minded.

The rhythm is a short morning triage and end-of-day shutdown on working days, a Friday review and a Sunday preview each week, a monthly load rebalance, a quarterly stress score and yearly prompts for the festive season and your map of stress peaks. The Metrics log, Habit tracker, Operational checklist, 1:1 and Course templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
