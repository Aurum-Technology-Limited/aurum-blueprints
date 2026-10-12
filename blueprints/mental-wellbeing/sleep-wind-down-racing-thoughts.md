---
id: mental-wellbeing.sleep-wind-down-racing-thoughts
name: Sleep Wind-Down & Racing Thoughts
description: "Evening wind-down routines, a bedside notebook, an out-of-bed plan and tested techniques that quieten a racing mind, so sleep comes more easily on stressful nights."
category: personal
version: 1.0.0
tags: [mental-wellbeing, sleep-wind-down-racing-thoughts, everyone, wind-down-routine, racing-thoughts, bedtime, sleep-hygiene]
author: Aurum Technology
starter_structure:
  templates:
    - sleep-review
    - habit-tracker
    - reading-queue
    - purchase-decision
    - trip
    - metrics-log
  pillars:
    - name: Mental & Emotional Wellbeing
      emoji: "🧘"
      description: "The inner weather: managing stress and anxiety, recovering from burnout, therapy and support, rest and attention, mood and emotional skills, and the routines that keep a mind steady when life is not."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Sleep Wind-Down & Racing Thoughts
          description: "Creating evening wind-down routines that quieten a busy or anxious mind so sleep comes more easily on stressful nights."
          projects:
            - name: Two-week evening and sleep diary baseline
              description: |-
                ## Purpose
                Memory exaggerates bad nights, and it is hard to change an evening you have never actually written down. Fourteen days of a simple diary, covering what you did in the last two hours before bed, roughly when you fell asleep, any wakings and how busy your mind felt, gives you a baseline to judge every later change against.

                ## Milestones
                1. A diary format with bedtime, rough time to fall asleep, wakings, wake time and a 0 to 10 busy-mind score.
                2. Fourteen consecutive mornings filled in, using estimates rather than clock-watching.
                3. The last two hours of each evening noted in a line: screens, work, food, drink, conversations.
                4. Averages for time to fall asleep and busy-mind score worked out at the end of the fortnight.

                ## Notes
                Start from the **Sleep review** template. Fill it in on waking, from memory; checking the clock through the night to make the diary accurate tends to make the night worse.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Fourteen consecutive diary entries completed, with average time to fall asleep and average busy-mind score written at the top."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Set up a diary page from the sleep review template"
                - "Add a 0 to 10 busy-mind score and a line for the last two evening hours"
                - "Fill in the diary within half an hour of getting up for fourteen days"
                - "Work out the two-week averages and write them at the top"
            - name: Map of what keeps your mind busy at night
              description: |-
                ## Purpose
                Racing thoughts are rarely random: for most people they cluster into a few themes, such as tomorrow's to-do list, replaying a conversation, money, a relative's health or a vague sense of dread. Naming your own top themes, and when they tend to show up, tells you which wind-down tools to reach for, because a to-do loop and a replayed argument need different handling.

                ## Milestones
                1. Every racing thought you can remember from the baseline fortnight written down, one per line.
                2. Thoughts grouped into three to six themes with a one-word label each.
                3. Each theme marked as planning, replaying, worrying or other.
                4. The two most frequent themes circled as the first targets.

                ## Notes
                Keep this list private and practical. If one theme is a real problem that needs action, such as an unpaid bill or an unresolved conflict, the fix belongs in the daytime, not the bedroom.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written list of three to six labelled night-thought themes, with the two most frequent marked as first targets."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every racing thought you remember from the last two weeks"
                - "Group the thoughts into three to six themes and label each one"
                - "Mark each theme as planning, replaying, worrying or other"
                - "Circle the two themes that came up most often"
            - name: Fixed wake time and a bedtime window
              description: |-
                ## Purpose
                Going to bed early after a bad night feels sensible but usually means more time lying awake with a busy mind. Anchoring the morning, with the same wake time seven days a week to within about an hour, and treating bedtime as a window you enter only when sleepy, gives the body clock something steady to work with.

                ## Milestones
                1. A wake time chosen that works on both workdays and days off.
                2. A bedtime window about thirty minutes wide set from the diary's real sleep times.
                3. The wake time kept within an hour on at least twelve of fourteen days.
                4. A rule written for what to do after a bad night instead of a lie-in.

                ## Notes
                If you work shifts or have a health condition that affects sleep, agree the timing with your clinician first.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written wake time and bedtime window, with the wake time kept within an hour on at least twelve of fourteen days."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Choose a wake time you can keep on workdays and days off"
                - "Set a bedtime window from the sleep times in your diary"
                - "Set one alarm for the wake time and leave it on at weekends"
                - "Write your rule for the morning after a bad night"
            - name: Bedroom light, noise and temperature check
              description: |-
                ## Purpose
                Small things that barely register in the day, such as a standby light, a street lamp through thin curtains, a ticking radiator or a room too warm for the duvet, give an alert mind something to latch onto. One evening spent lying in the room with the lights off, noting every disturbance, produces a fix list that usually costs very little.

                ## Milestones
                1. Every light source, sound and draught noted from the bed in the dark.
                2. Room temperature measured at bedtime on three nights.
                3. A fix list written, cheapest first.
                4. The three easiest fixes done.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written bedroom fix list with at least three items completed and bedtime temperature recorded on three nights."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Lie in the dark bedroom for ten minutes and list every light and sound"
                - "Measure the bedroom temperature at bedtime on three nights"
                - "Write a fix list ordered by cost"
                - "Cover or unplug every standby light in the room"
            - name: Screen and work cut-off time
              description: |-
                ## Purpose
                Work email, group chats and news feeds late in the evening hand the mind fresh material to chew on just when it should be emptying. Picking a cut-off time about an hour before your bedtime window, and making it easy to keep with phone settings, protects the slot the wind-down routine needs.

                ## Milestones
                1. A cut-off time chosen and written down.
                2. Do not disturb or a focus mode scheduled to start at the cut-off.
                3. Work email and chat apps moved off the evening home screen or signed out.
                4. The cut-off kept on at least five nights a week for two weeks.

                ## Notes
                Exceptions will happen. A cut-off kept five nights out of seven still changes most of your evenings.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A scheduled do not disturb mode starting at your written cut-off time, kept on at least ten of fourteen nights."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Choose a cut-off time about an hour before your bedtime window"
                - "Schedule do not disturb to start at the cut-off every night"
                - "Move work email and chat apps off the phone's home screen"
                - "Tell your manager or team when you stop answering in the evening"
            - name: Bedside notebook for night-time thoughts
              description: |-
                ## Purpose
                Lying awake trying to hold on to an idea or a task keeps the mind on guard. A paper notebook and a pen with a soft light within reach, used without picking up a phone, lets you park a thought in ten seconds and tells the brain it no longer needs to carry it.

                ## Milestones
                1. A notebook, pen and dim light placed within reach of the bed.
                2. A rule agreed with yourself: write a few words, no full plans, light off again.
                3. Notes from the night read and sorted each morning.
                4. Two weeks of use with the phone staying out of reach.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A bedside notebook in use for two weeks, with every night note sorted into the day's list or crossed out each morning."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Put a notebook and pen within reach of your pillow"
                - "Find a dim light you can switch on without sitting up"
                - "Write your few-words-only rule on the notebook's first page"
                - "Read last night's notes each morning and move real tasks into your list"
            - name: Caffeine, alcohol and late meal timing audit
              description: |-
                ## Purpose
                Caffeine can still be active many hours after the last cup, and alcohol often helps people drop off but then breaks up the second half of the night, which is when early waking and small-hours worry tend to start. A week of noting the times of your last caffeine, last drink and last meal shows whether evening timing is feeding the restless nights.

                ## Milestones
                1. Every caffeinated drink, alcoholic drink and evening meal timed for seven days.
                2. Hidden caffeine sources checked: tea, cola, energy drinks, chocolate and some pain relievers.
                3. The times set beside the diary's busy-mind scores and wakings.
                4. A personal latest time for caffeine chosen.

                ## Notes
                If you take medicines, ask your pharmacist whether any of them affect sleep or interact with alcohol.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Seven days of caffeine, alcohol and meal times recorded beside the sleep diary, with a written latest time for caffeine."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Note the time of every caffeinated drink for seven days"
                - "Check the labels of your regular drinks and tablets for caffeine"
                - "Note the time of your last alcoholic drink and last meal each night"
                - "Choose a latest time for caffeine and write it on the fridge"
            - name: First thirty-minute wind-down routine on paper
              description: |-
                ## Purpose
                Knowing you should relax is not a routine. Writing out three to five specific steps for the last thirty minutes before bed, in order, with the lights, the room and the activity named, means a tired brain follows a script rather than drifting back to the phone or the laptop.

                ## Milestones
                1. Three to five steps written in order with a rough time for each.
                2. Steps chosen to be dull, warm and dim rather than ambitious.
                3. Everything the routine needs gathered in one place.
                4. The routine run as written on seven nights.

                ## Notes
                Common building blocks: lights down, a warm shower, a brain dump, one short calming technique, a few pages of an undemanding book. Keep it short enough to survive a late night.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written wind-down routine of three to five steps, run as written on seven nights within two weeks."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write three to five wind-down steps for the last thirty minutes before bed"
                - "Gather what each step needs in one basket or drawer"
                - "Set a phone reminder for the start of the routine"
                - "Run the routine for seven nights and cross out any step you skipped every time"
            - name: When sleepless nights need a doctor
              description: |-
                ## Purpose
                Bad nights during a stressful patch are common and usually settle, but some patterns deserve a professional look: trouble sleeping on most nights for three months, loud snoring or gasping, legs that will not keep still, very low mood or thoughts of self-harm. Writing down these signs now, and what you would do about them, stops you waiting years with a problem that has effective treatment.

                ## Milestones
                1. Your health service's guidance on when to seek help for poor sleep found and noted.
                2. A short list of personal warning signs written.
                3. Diary averages and main night themes summarised on one page for a possible appointment.
                4. A decision recorded: book an appointment now, or recheck in a month.

                ## Notes
                Do not start or stop sleeping tablets, antihistamines or supplements for sleep without speaking to a pharmacist or doctor. If you have thoughts of harming yourself, contact emergency services or a crisis line straight away.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-page sleep summary and a written decision on seeing a doctor, with a recheck date if no appointment is booked."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Look up your health service's advice on when poor sleep needs a doctor"
                - "Write your personal list of warning signs"
                - "Summarise your diary averages and night themes on one page"
                - "Decide whether to book an appointment and note the date you will recheck"
            - name: Nightly wind-down habit
              description: |-
                ## Purpose
                Routines work by repetition: after a few weeks the first step alone starts to signal that the day is over. Ticking off the wind-down each night, and noticing which nights it slips, turns a written plan into something the body expects.

                ## Milestones
                1. The wind-down routine added to a habit tracker.
                2. The routine started within fifteen minutes of its reminder on most nights.
                3. Missed nights given a one-word reason.
                4. Thirty nights tracked, with the routine done on at least twenty-two.

                ## Notes
                Start from the **Habit tracker** template. Late nights out are not failures; on those nights do only the first and last step.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Thirty consecutive nights tracked, with the wind-down routine completed on at least twenty-two of them."
                cadence: rolling
              tasks:
                - "Add the wind-down routine to a habit tracker"
                - "Start the wind-down when the reminder goes and tick it off @recurring(daily)"
                - "Write a one-word reason on any night it was skipped"
            - name: Ten-minute brain dump before bed
              description: |-
                ## Purpose
                Writing down tomorrow's tasks before bed has been linked in sleep studies to falling asleep a little faster, probably because the list does the remembering. A short, scrappy dump of everything still open, followed by closing the notebook, gives planning loops somewhere to go other than the pillow.

                ## Milestones
                1. A notebook kept for the brain dump, separate from the bedside notebook.
                2. Ten minutes of writing done before the wind-down starts, not in bed.
                3. Each item ending with a next step or a not-tonight mark.
                4. Three weeks of brain dumps completed.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twenty-one brain dumps completed in three weeks, each written before the wind-down begins."
                cadence: rolling
              tasks:
                - "Choose a notebook just for the evening brain dump"
                - "Write every open task and worry for ten minutes before winding down @recurring(daily)"
                - "Mark each item with a next step or not tonight"
                - "Close the notebook and leave it outside the bedroom"
            - name: Workday shutdown with a tomorrow list
              description: |-
                ## Purpose
                People who stop work mid-task carry the unfinished thread home and into bed. A five-minute shutdown at the end of each working day, listing where everything stands and the first job for tomorrow, closes the work loop hours before you reach the bedroom.

                ## Milestones
                1. A shutdown checklist of four or five steps written.
                2. A tomorrow list written before leaving work or closing the laptop.
                3. A short phrase said or written to mark the end of work.
                4. Twenty workdays closed with the shutdown.

                ## Notes
                If you work from home, end the shutdown by physically closing the laptop and leaving the room for a few minutes.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twenty workdays ending with a written tomorrow list and the shutdown checklist completed."
                cadence: rolling
              tasks:
                - "Write a four-step end-of-day shutdown checklist"
                - "Write tomorrow's first task before closing the laptop @recurring(weekly:mon,tue,wed,thu,fri)"
                - "Check the calendar for the next morning's commitments"
                - "Close every work tab and app before leaving the desk"
            - name: Phone parked outside the bedroom
              description: |-
                ## Purpose
                A phone by the pillow is a door back into email, news and messages at the exact moment a busy mind looks for distraction. Charging it in another room, with a cheap alarm clock taking over its one useful bedroom job, removes the temptation instead of relying on willpower at midnight.

                ## Milestones
                1. A charging spot chosen outside the bedroom.
                2. A separate alarm clock in place.
                3. The phone charged outside the bedroom on at least six nights a week for a month.
                4. Any real need for the phone at night, such as a caring role, handled with a specific workaround.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A month in which the phone was charged outside the bedroom on at least twenty-four nights, recorded in the tracker or diary."
                cadence: rolling
              tasks:
                - "Choose a charging spot outside the bedroom"
                - "Buy or dig out a basic alarm clock"
                - "Set an emergency bypass for the few contacts who must reach you at night"
                - "Check the phone's screen time report for use after the cut-off @recurring(monthly:20)"
            - name: Sunday evening reset for the week ahead
              description: |-
                ## Purpose
                Sunday night is one of the worst for racing thoughts because the whole week arrives at once. A thirty-minute reset in the late afternoon, looking at the week's calendar, choosing the three things that matter and noting what you are dreading, moves that thinking out of bed and into daylight.

                ## Milestones
                1. A fixed Sunday slot, finished at least three hours before bed.
                2. The week's calendar checked and three priorities written.
                3. Anything you are dreading written down with one next step.
                4. Eight Sundays completed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive Sunday resets completed, each with three written priorities and a next step for anything dreaded."
                cadence: rolling
              tasks:
                - "Choose a Sunday afternoon slot for the weekly reset"
                - "Review the week's calendar and write three priorities @recurring(weekly:sun)"
                - "Write one next step for anything you are dreading this week"
                - "Lay out what Monday morning needs before dinner"
            - name: Weekly look-back at the sleep diary
              description: |-
                ## Purpose
                Changes to an evening take a week or two to show up in sleep, and a single bad night says very little. Ten minutes each week comparing this week's diary with the baseline keeps decisions about what to keep and what to drop grounded in your own numbers.

                ## Milestones
                1. The diary kept going after the baseline fortnight, in a lighter form if you prefer.
                2. Weekly averages for time to fall asleep and busy-mind score written down.
                3. One observation and one thing to try next written each week.
                4. Eight weekly look-backs completed.

                ## Notes
                Start from the **Sleep review** template. Once nights are steady, drop to one diary week a month.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight weekly look-backs, each with averages compared to the baseline and one thing to try next written down."
                cadence: rolling
              tasks:
                - "Keep a lighter sleep diary after the baseline fortnight"
                - "Compare the week's averages with your baseline and write one observation @recurring(weekly:mon)"
                - "Write one change to try in the coming week"
            - name: Out-of-bed plan for wide-awake nights
              description: |-
                ## Purpose
                Fighting thoughts in bed for an hour teaches the brain that bed is a place for fighting thoughts. Getting up after what feels like twenty minutes awake, going somewhere dim and doing something dull until sleepy, then going back, is one of the most consistent parts of behavioural sleep advice.

                ## Milestones
                1. A spot outside the bedroom ready, with a dim lamp, a blanket and something dull to read or do.
                2. A rough rule written: if awake and frustrated for about twenty minutes, get up, without checking the clock.
                3. The plan used on every wide-awake night for four weeks.
                4. Each use, and how long it took to feel sleepy, recorded in the diary.

                ## Notes
                Keep the lights low and screens off while you are up. On cold nights, have the blanket ready before bed so getting up does not feel like a punishment.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four weeks in which the out-of-bed plan was used on every wide-awake night, with each use recorded in the sleep diary."
                cadence: rolling
              tasks:
                - "Set up a dim lamp, a blanket and a dull book in another room"
                - "Write the get-up rule on a card by the bed"
                - "Record in the diary each night you used the plan"
                - "Review after four weeks whether you fall asleep faster on return"
            - name: Early-morning waking plan
              description: |-
                ## Purpose
                Waking at four with tomorrow's problems already running feels different from struggling to drop off, and it deserves its own plan. Knowing that brief wakings happen to everyone several times a night, having a short script for the first minute awake and refusing to start problem-solving in the dark all make it more likely you drift back.

                ## Milestones
                1. A three-step script written for the first minute after waking.
                2. The bedside notebook used to park any thought in a few words.
                3. A decision rule for when to get up rather than lie there.
                4. Two weeks of early wakings recorded with whether you got back to sleep.

                ## Notes
                Persistent early waking with low mood, or early waking that has gone on for months, belongs on the list to discuss with your doctor.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written three-step early-waking script used for two weeks, with each early waking and its outcome noted in the diary."
                cadence: rolling
              tasks:
                - "Write a three-step script for the first minute after an early waking"
                - "Turn the clock so you cannot see the time from the pillow"
                - "Note each early waking and whether you fell back asleep"
                - "Compare early wakings with the evening's alcohol and late meals"
            - name: Monthly wind-down tune-up
              description: |-
                ## Purpose
                Habits that worked in spring often stop fitting when seasons, jobs or households change, and people tend to abandon them rather than adjust. A fifteen-minute monthly check, reading the habit tracker beside the diary, keeps the routine short, current and actually used.

                ## Milestones
                1. The month's habit tracker and diary read together.
                2. One step that is rarely done removed or replaced.
                3. One step that clearly helps protected or moved earlier.
                4. Six monthly tune-ups completed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly tune-ups recorded, each naming one step changed and one step kept."
                cadence: rolling
              tasks:
                - "Read the month's habit tracker beside the sleep diary @recurring(monthly:12)"
                - "Drop or replace the step you skipped most often"
                - "Write the updated routine on the card by the bed"
            - name: Quarterly bedroom and sleep kit refresh
              description: |-
                ## Purpose
                Earplugs get lost, eye masks stretch, the bedside bulb dies, and summer heat or winter draughts change what the room needs. A quick seasonal check every three months keeps the room working for you without waiting for a run of bad nights to prompt it.

                ## Milestones
                1. Bedding weight matched to the season.
                2. Earplugs, eye mask and bedside notebook replaced as needed.
                3. Light and noise leaks rechecked from the bed.
                4. Four quarterly refreshes completed in a year.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly bedroom checks completed in twelve months, with replacements and fixes listed each time."
                cadence: cyclic
              tasks:
                - "Swap the duvet or blanket for the coming season @recurring(quarterly)"
                - "Replace worn earplugs, the eye mask and the notebook if it is full"
                - "Lie in the dark again and check for new light or noise leaks"
            - name: How the body clock and sleep pressure work
              description: |-
                ## Purpose
                Two systems decide when you feel sleepy: a pressure that builds the longer you are awake, and a body clock set mostly by light and regular timing. Understanding them explains why lie-ins, long naps and bright late screens make the next night harder, and why a fixed wake time does so much of the work.

                ## Milestones
                1. Both systems explained in your own words in a short note.
                2. Two reputable sources read, such as a national health service page or a university sleep centre.
                3. Three of your own habits linked to one of the two systems.
                4. One change chosen from the note and added to the routine.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note explaining sleep pressure and the body clock, with three personal habits linked to them and one resulting change."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read a health service or university sleep centre page on the body clock"
                - "Write a short note explaining sleep pressure and the body clock"
                - "Link three of your own habits to one of the two systems"
                - "Choose one change from the note to add to your routine"
            - name: Why trying harder to sleep backfires
              description: |-
                ## Purpose
                Sleep is one of the few things that gets less likely the harder you try, because effort raises alertness. Learning about sleep effort, and practising the opposite stance of resting with eyes closed and letting sleep arrive when it does, often loosens the grip of anxious nights.

                ## Milestones
                1. The idea of sleep effort read about from a reputable source.
                2. Your own sleep efforts listed, such as clock checking, forcing relaxation or counting the hours left.
                3. A replacement phrase written for each one.
                4. Two weeks of notes on the nights you caught yourself trying.

                ## Notes
                A related technique, often called paradoxical intention, means gently aiming to stay awake with eyes closed. Read about it and try it only if it appeals.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written list of your sleep efforts, each with a replacement phrase, and two weeks of notes on when you caught yourself trying."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read about sleep effort on a reputable sleep or psychology site"
                - "List the things you do in bed to try to force sleep"
                - "Write a replacement phrase for each sleep effort"
                - "Note each night this fortnight when you caught yourself trying"
            - name: Cognitive shuffle for a looping mind
              description: |-
                ## Purpose
                Racing thoughts usually follow a story line, and stories keep the brain alert. The cognitive shuffle, picturing a series of random, unconnected objects, for example taking a word and imagining things that begin with each of its letters, gives the mind something to do that has no plot and resembles the jumbled imagery of drifting off.

                ## Milestones
                1. The technique read about and tried twice in the daytime.
                2. A few starter words chosen in advance so there is nothing to decide in bed.
                3. The shuffle used on ten nights when thoughts were looping.
                4. A note on whether it helped and on which kind of night.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Ten nights of using the cognitive shuffle recorded, with a written verdict on when it helps."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read a short explanation of the cognitive shuffle"
                - "Try the shuffle twice during the day to learn it"
                - "Write five starter words on the bedside card"
                - "Use the shuffle on looping nights and note the result in the diary"
            - name: One in-bed calming technique, learned to autopilot
              description: |-
                ## Purpose
                Calming techniques fail at 1 a.m. when you have to remember how they go. Choosing a single method, such as slow breathing with a longer out-breath or a quick tense-and-release of the shoulders and hands, and practising it in the day until it runs without thinking, makes it available exactly when it is needed.

                ## Milestones
                1. One technique chosen from a reputable source.
                2. The technique practised daily in daylight for two weeks.
                3. A one-line cue for it written on the bedside card.
                4. The technique used in bed on at least ten nights.

                ## Notes
                Pick one and keep it. Fuller breathing and relaxation programmes are worth exploring in their own right; here the goal is a single tool you can use half asleep.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "One calming technique practised in daylight for two weeks and then used in bed on at least ten nights, recorded in the diary."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Choose one calming technique you can do lying still"
                - "Practise it for five minutes each afternoon for two weeks"
                - "Write a one-line cue for it on the bedside card"
                - "Use it in bed on looping nights and note it in the diary"
            - name: Talking back to 'I'll be wrecked tomorrow' thoughts
              description: |-
                ## Purpose
                Some of the busiest thoughts at night are about sleep itself: counting the hours left, predicting a disastrous day, fearing a run of bad nights. Writing those predictions down and checking them against what happened the next day usually shows that tired days are uncomfortable but manageable, which takes some of the panic out of lying awake.

                ## Milestones
                1. Your most common sleep-related predictions written down.
                2. Next-day outcomes recorded after five poor nights.
                3. Each prediction compared with what actually happened.
                4. A short, believable answer written for each prediction.

                ## Notes
                If these thoughts are part of wider anxiety, the same method is used in CBT thought records, and a therapist can help you apply it.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five poor nights recorded with predictions and next-day outcomes, and a written answer for each common prediction."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write the three sleep predictions that go through your head most"
                - "After a poor night, note what you predicted and how the day went"
                - "Compare predictions with outcomes after five poor nights"
                - "Write a short, believable answer to each prediction on the bedside card"
            - name: Reading your own wired-but-tired signals
              description: |-
                ## Purpose
                Tired and wired at the same time is the classic state before a racing-thought night: heavy eyes, a quick heartbeat, a clenched jaw and a mind skipping between topics. Learning to spot your own early signals at around eight o'clock, rather than at midnight, gives you time to start the wind-down earlier or add an extra step.

                ## Milestones
                1. Five personal wired-but-tired signals listed from recent evenings.
                2. A simple 1 to 5 evening arousal score defined.
                3. The score noted at the same time each evening for two weeks.
                4. An extra step agreed for evenings that score 4 or 5.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two weeks of evening arousal scores recorded, with a written extra wind-down step for high-scoring evenings."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "List five signs that you are tired but wired"
                - "Define what 1 and 5 look like on an evening arousal score"
                - "Score yourself at the same time each evening for two weeks"
                - "Choose one extra wind-down step for evenings scoring 4 or 5"
            - name: Bedtime reading that does not hook you
              description: |-
                ## Purpose
                Reading is one of the most dependable wind-down activities, but a gripping thriller or a work book can keep the mind running past midnight. Keeping a short queue of pleasant, low-stakes books, such as rereads, gentle essays or familiar genres, means the reading step relaxes the brain rather than restarting it.

                ## Milestones
                1. A queue of five books suitable for bedtime.
                2. Gripping, upsetting or work-related books moved to daytime reading.
                3. Paper books, or an e-reader on a warm, dim setting, used in bed.
                4. The queue topped up whenever it falls below three.

                ## Notes
                Start from the **Reading queue** template.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A bedtime reading queue of at least five low-stakes books, with work and thriller reading kept out of the bedroom for a month."
                cadence: rolling
              tasks:
                - "Start a bedtime reading queue from the template"
                - "Add five gentle or familiar books to it"
                - "Move work books and thrillers to a daytime shelf"
                - "Set the e-reader to its warmest, dimmest night setting"
            - name: Moving stimulating activities earlier in the evening
              description: |-
                ## Purpose
                Hard exercise, heated family discussions, budgeting, holiday planning and video games all raise alertness, and many people stack them into the last hour before bed because that is when the house is quiet. Listing them and finding an earlier slot, at least ninety minutes before bed, clears the run-up to sleep.

                ## Milestones
                1. Activities in the last two evening hours listed from the diary.
                2. Each one marked calming, neutral or stimulating.
                3. An earlier slot found for each stimulating activity.
                4. Two weeks lived with the new order and the diary compared.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every stimulating activity in the last two evening hours moved earlier, with two weeks of diary scores compared before and after."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List everything you did in the last two hours before bed this week"
                - "Mark each activity calming, neutral or stimulating"
                - "Find an earlier slot for each stimulating activity"
                - "Compare two weeks of diary scores before and after the change"
            - name: Bedroom kept for sleep
              description: |-
                ## Purpose
                A desk, a television or a laundry pile in the bedroom keeps reminding a busy mind of work, plots and chores. Moving what you can out, or screening off what you cannot, helps the room cue sleep rather than tasks, which matters more when your thoughts already race.

                ## Milestones
                1. Every non-sleep item in the bedroom listed.
                2. Items that can live elsewhere moved.
                3. A screen, curtain or cover in place for anything that has to stay, such as a desk in a studio flat.
                4. A rule written for what happens in bed: sleep, intimacy and calm reading.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written list of non-sleep items, each one moved out or covered, and a bed-use rule written down."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every item in the bedroom that is not about sleep or rest"
                - "Move the items that can live elsewhere"
                - "Cover or screen the desk or television if it has to stay"
                - "Stop taking the laptop into bed from tonight"
            - name: Keep, adjust or stop the sleep tracker
              description: |-
                ## Purpose
                Wearables and apps can show useful trends, but for anxious sleepers a poor morning score can set off a day of worry and a night of trying harder. Comparing two weeks with the tracker scores and two weeks without, using the paper diary for both, shows which way it pushes you.

                ## Milestones
                1. Two weeks of diary entries with the tracker and its scores visible.
                2. Two weeks with the tracker off or its scores hidden.
                3. Busy-mind scores and morning mood compared between the fortnights.
                4. A decision recorded: keep, hide scores, or stop.

                ## Notes
                Consumer trackers estimate sleep stages and can be wrong. Never use one to diagnose yourself; if a tracker flags breathing pauses, take that to a doctor.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two fortnights compared with and without tracker scores, and a keep, hide or stop decision written down."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Keep the diary for two weeks with tracker scores visible"
                - "Hide the scores or take off the tracker for the next two weeks"
                - "Compare busy-mind scores and morning mood across the two fortnights"
                - "Write down whether you will keep, hide or stop the tracker"
            - name: Sleep sounds and stories trial
              description: |-
                ## Purpose
                Steady background sound masks traffic and gives a busy mind something low-stakes to follow, but some people find stories too interesting or podcasts too wordy. Trying three options for five nights each, such as brown noise, a sleep story and a dull audiobook, with a timer and the screen off, gives a fair comparison.

                ## Milestones
                1. Three audio options chosen, each with a sleep timer.
                2. Each tried for five nights with the phone face down or on a speaker.
                3. Busy-mind score and time to fall asleep noted for each.
                4. A winner chosen, or audio dropped altogether.

                ## Notes
                Keep the volume low. If you use earphones, choose soft ones made for sleep and keep the phone out of reach.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three audio options tried for five nights each, with diary scores compared and a written choice."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pick three audio options to test, such as noise, a story and an audiobook"
                - "Set each one on a sleep timer of thirty minutes or less"
                - "Use each option for five nights and note the diary scores"
                - "Choose a winner or decide to sleep without audio"
            - name: Blackout and bedside lighting upgrade
              description: |-
                ## Purpose
                Morning light through thin curtains can wake an anxious sleeper early, and a harsh overhead light at bedtime undoes the wind-down. Choosing blackout curtains, blinds or a mask, plus a warm dim bedside lamp, from the bedroom check results and a set budget is a one-off spend that helps every night.

                ## Milestones
                1. Needs listed from the bedroom check: early light, street light, bedtime brightness.
                2. Two or three options compared for price, fit and fitting effort.
                3. The chosen blackout and lamp bought and fitted.
                4. The room checked again at dawn and at bedtime.

                ## Notes
                Start from the **Purchase decision** template. A good eye mask is the cheapest test before spending on curtains.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Blackout and lamp purchases chosen against written needs and a budget, fitted, and the room rechecked at dawn."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the light problems found in your bedroom check"
                - "Try an eye mask for a week before buying anything bigger"
                - "Compare two or three curtain, blind or lamp options"
                - "Fit what you chose and check the room again at dawn"
            - name: Household quiet hour agreement
              description: |-
                ## Purpose
                A wind-down is hard to keep if the television is loud next door, a partner wants to talk about money at eleven, or a housemate runs the washing machine at midnight. Agreeing a quiet hour, and which topics wait until morning, with the people you live with turns your routine into a shared arrangement instead of a private fight.

                ## Milestones
                1. The times and noises that affect your wind-down listed.
                2. A quiet hour proposed with a start time and what it covers.
                3. Heavy topics such as money, plans and conflicts agreed to wait for daytime.
                4. The agreement checked after a month and adjusted.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A quiet hour and a no-heavy-topics rule agreed with your household, reviewed once after the first month."
                cadence: rolling
              tasks:
                - "List the evening noises and conversations that disrupt your wind-down"
                - "Propose a quiet hour start time to the people you live with"
                - "Agree which topics wait until the morning"
                - "Check in with the household on how the quiet hour is going @recurring(monthly:25)"
            - name: Two-week no-nightcap experiment
              description: |-
                ## Purpose
                Many people use a glass of wine to switch off, and it can make falling asleep easier while making the second half of the night lighter and more broken. Two alcohol-free weeks with the diary running tell you what alcohol is doing to your own nights rather than anyone else's.

                ## Milestones
                1. A two-week window chosen without big celebrations in it.
                2. A replacement evening drink and ritual chosen.
                3. Fourteen alcohol-free evenings logged in the diary.
                4. Wakings and morning mood compared with the baseline.

                ## Notes
                If you drink heavily or every day, stopping suddenly can be unsafe. Speak to a doctor before cutting down.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Fourteen alcohol-free evenings logged, with wakings and morning mood compared to the baseline in writing."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Choose a fortnight with no big celebrations in it"
                - "Pick an alcohol-free evening drink to replace the nightcap"
                - "Log each alcohol-free evening in the sleep diary"
                - "Compare wakings and morning mood with your baseline"
            - name: Separate sleeping arrangements with a partner
              description: |-
                ## Purpose
                Snoring, different bedtimes, a restless sleeper or a partner on night shifts can turn the bed into the place your mind races about the other person. Talking honestly about trying separate beds or rooms on some nights, framed as being about sleep rather than the relationship, gives both of you a fair test.

                ## Milestones
                1. The sleep problems each of you has written down without blame.
                2. Options listed: earplugs, separate duvets, separate beds, separate rooms some nights.
                3. A two-week trial agreed, with time set aside for closeness.
                4. A decision made together after the trial.

                ## Notes
                Loud snoring with pauses in breathing should be checked by a doctor, whatever you decide about rooms.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A two-week trial of an agreed sleeping arrangement completed, with a joint decision recorded afterwards."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down how each of you sleeps now, without blame"
                - "List the options from separate duvets to separate rooms"
                - "Agree a two-week trial and when you will spend time together"
                - "Decide together after the trial and note what you chose"
            - name: Afternoon nap test
              description: |-
                ## Purpose
                Napping late or long eats into the sleep pressure you need at bedtime, but a short early nap can help someone who slept badly get through the day without a mood crash. Testing a time-limited nap rule for two weeks shows whether naps help or hurt your nights.

                ## Milestones
                1. Current naps recorded with start time and length.
                2. A rule tested: no naps, or one short nap before mid-afternoon.
                3. Two weeks of diary data under the rule.
                4. A personal nap rule written down.

                ## Notes
                If you nod off without meaning to, especially while driving, speak to a doctor.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two weeks of diary data under a tested nap rule, with a personal nap rule written down."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Note every nap this week with its start time and length"
                - "Choose a nap rule to test for two weeks"
                - "Set a twenty-minute alarm for any nap you do take"
                - "Write your personal nap rule after comparing the diary"
            - name: The night before a big day
              description: |-
                ## Purpose
                Interviews, exams, surgery, a first day at work or a difficult meeting reliably bring racing thoughts the night before, and the worry about not sleeping adds its own layer. Finishing the preparation by early evening, so everything is packed and decided, and planning a slightly longer wind-down makes the night easier and the morning calmer.

                ## Milestones
                1. Everything for the day packed, printed and laid out by early evening.
                2. Travel and timings checked with a buffer.
                3. Any rehearsal finished before dinner, not in bed.
                4. An extended wind-down planned, with a reminder that one short night rarely spoils performance.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A night-before checklist used for the next big day, with everything packed by early evening and the wind-down done."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a reusable night-before checklist for big days"
                - "Pack and lay out everything by early evening the day before"
                - "Finish any rehearsal before dinner"
                - "Add ten minutes to the wind-down on the night itself"
            - name: Clock change weekends
              description: |-
                ## Purpose
                Daylight saving changes shift the body clock by an hour overnight and leave some people with a week of poor sleep and small-hours thinking. Moving bedtime and wake time by fifteen to twenty minutes a day for a few days beforehand, and getting morning light afterwards, softens the jump. Where clocks do not change, use the same approach before long-haul trips.

                ## Milestones
                1. Both clock change dates for the year in the calendar.
                2. A three or four day shift plan written for each.
                3. Morning daylight planned for the days after.
                4. The diary checked for a week after each change.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Both clock changes in a year handled with a written shift plan and a week of diary entries afterwards."
                cadence: cyclic
              tasks:
                - "Add this year's clock change dates to the calendar @recurring(yearly)"
                - "Write a plan shifting bedtime and wake time in small steps over four days"
                - "Plan time outdoors in the morning for the days after the change"
            - name: Wind-down kit for travel and hotel nights
              description: |-
                ## Purpose
                Strange rooms, hotel corridors and time zones bring out racing thoughts in people who sleep fine at home. A small travel kit with earplugs, an eye mask, a familiar book, the brain dump notebook and a plug-in night light keeps the routine portable.

                ## Milestones
                1. A packing list for the kit written.
                2. The kit packed in one pouch that lives in the suitcase.
                3. A shortened travel version of the routine written.
                4. The kit used on the next trip and the list adjusted.

                ## Notes
                Start from the **Trip** template and add the kit to its packing list.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A packed travel wind-down kit and a shortened routine, used on one trip with the packing list updated afterwards."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a packing list for a travel wind-down kit"
                - "Pack the kit in one pouch and leave it in the suitcase"
                - "Write a ten-minute travel version of your routine"
                - "Ask for a quiet room away from lifts when booking"
            - name: Thirty-night wind-down review
              description: |-
                ## Purpose
                Thirty nights is long enough for a routine to show what it can do and short enough to stay motivated. Treating night thirty as a fixed review date, with the diary averages compared to the baseline, turns a vague sense of 'a bit better' into a decision about what stays.

                ## Milestones
                1. The review date set thirty nights after the routine started.
                2. Averages for time to fall asleep, wakings and busy-mind score compared to the baseline.
                3. Routine steps ranked by how much they seemed to help.
                4. A second version of the routine written.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A thirty-night review completed by its date, comparing averages to the baseline and producing a written second version of the routine."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Put the thirty-night review date in the calendar"
                - "Work out the thirty-night averages and set them beside the baseline"
                - "Ask the agent to summarise the month's diary notes into three patterns"
                - "Rank each routine step by how much it seemed to help"
                - "Write version two of the routine and replace the bedside card"
            - name: Nights after bad news or a hard day
              description: |-
                ## Purpose
                An argument, a frightening test result, a work crisis or a distressing news event can throw the most practised routine out of the window. Having a short emergency wind-down already written, with permission to have a bad night, a person to message before the cut-off and a few things that comfort you, stops one hard evening becoming a week of them.

                ## Milestones
                1. A five-line emergency wind-down written for hard days.
                2. One person agreed as someone you can message before the cut-off.
                3. Comfort items listed: a familiar film, a bath, an old audiobook, a warm drink.
                4. The plan used after a hard day and adjusted.

                ## Notes
                If distress is severe or you feel unsafe, contact a crisis line or emergency services. A wind-down plan is not a substitute for help.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written emergency wind-down plan with a named contact, used once after a hard day and adjusted afterwards."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write a five-line wind-down for evenings after a hard day"
                - "Ask one person if you can message them before your cut-off on bad days"
                - "List four things that comfort you in the evening"
                - "Write the plan on the back of the bedside card"
            - name: Wind-down around rotating and night shifts
              description: |-
                ## Purpose
                Shift workers often come home wired, into daylight, with the household waking up around them, and the usual evening routine does not fit. A routine built around the end of each shift type, with light blocking on the way home and a fixed sleep anchor where possible, gives the mind the same cues whatever the clock says.

                ## Milestones
                1. Each shift type in the rota listed with its end time.
                2. A wind-down version written for each shift type.
                3. Light blocking for the trip home and for the bedroom in place.
                4. Household quiet times agreed for day sleep.

                ## Notes
                Ask your occupational health service or doctor about sleep on your particular rota, especially if you drive home after nights.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A written wind-down version for each shift type in your rota, with household quiet times agreed for day sleep."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List every shift type in your rota with its finish time"
                - "Write a wind-down version for each shift type"
                - "Keep sunglasses in your bag for the trip home after night shifts"
                - "Plan next week's sleep and wind-down times around the rota @recurring(weekly:thu)"
            - name: Parents whose evenings never end
              description: |-
                ## Purpose
                After the children's bedtime, lunches, laundry, emails and school admin can fill the evening until midnight, leaving no wind-down at all. Drawing a line, a time after which chores stop, and splitting the evening jobs fairly with a co-parent, gives a parent a protected half hour before bed.

                ## Milestones
                1. Every evening job after the children's bedtime listed with its usual time.
                2. Jobs moved earlier, shared, simplified or dropped.
                3. A chores-stop time agreed with any co-parent.
                4. A protected half hour kept on at least five nights a week.

                ## Notes
                Weeks of night feeds or a poorly child change everything. On those weeks keep only the shortest version of the routine and the fixed wake time if you can.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A chores-stop time agreed with any co-parent and a protected half hour kept on at least five nights a week for a month."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List every job you do after the children go to bed"
                - "Mark each job move earlier, share, simplify or drop"
                - "Agree a chores-stop time with your co-parent"
                - "Prepare tomorrow's bags and lunches straight after the children's bedtime"
            - name: Wind-down for overnight carers
              description: |-
                ## Purpose
                Carers who may be called in the night often sleep with one ear open, and the worry about being needed keeps the mind racing even on quiet nights. A routine that accepts interruptions, a fast settle-back plan after each call and regular respite nights make the load easier to carry.

                ## Milestones
                1. A shortened routine that still works if you are interrupted.
                2. A settle-back plan for after a night call.
                3. A monitor, alarm or sensor set up so you can stop listening out.
                4. Respite night options listed and one booked or asked for.

                ## Notes
                Ask your local carers' organisation or the person's care team about overnight respite and equipment. Your sleep matters to the person you care for too.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A settle-back plan for night calls written and at least one respite night arranged or formally requested."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write a shortened wind-down that survives an interruption"
                - "Write a three-step settle-back plan for after a night call"
                - "Ask about monitors or sensors that let you stop listening out"
                - "Ask the care team or carers' service about respite night cover @recurring(monthly:3)"
            - name: Night sweats and a busy mind in perimenopause
              description: |-
                ## Purpose
                Perimenopause often brings night sweats, early waking and a mind that starts racing the moment it wakes, and many people do not link the three. Recording night symptoms alongside the sleep diary, adjusting the bedroom for heat and taking the record to a doctor gives a clearer picture and access to the treatment options that exist.

                ## Milestones
                1. Night sweats, wakings and racing thoughts recorded for four weeks.
                2. The bedroom set up for heat: layers, a fan, breathable bedding.
                3. The four-week record taken to a doctor or menopause clinic.
                4. Agreed changes written down and followed up.

                ## Notes
                Treatment decisions are for you and your clinician. This project prepares the evidence and the questions.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Four weeks of night symptom records brought to a doctor, with agreed next steps written down."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Add night sweats and wakings columns to your sleep diary"
                - "Set up layered bedding and a bedside fan"
                - "Book a doctor's appointment once four weeks are recorded"
                - "Write down the options and next steps you agreed"
            - name: Longer evenings in retirement
              description: |-
                ## Purpose
                Without a work start time, bedtimes and wake times drift, evenings stretch out and the mind can turn to health, money or family worries in the quiet. Giving retirement evenings some shape, with an activity, a regular wake time and a wind-down that starts at a set hour, keeps nights steadier as other routines loosen.

                ## Milestones
                1. A regular wake time kept despite having no work start.
                2. One or two evenings a week with something planned outside the house or with others.
                3. A wind-down start time written down.
                4. Evening dozing in the chair reduced and noted in the diary.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A month with a regular wake time, a planned evening activity each week and evening dozing recorded in the diary."
                cadence: rolling
              tasks:
                - "Set a wake time and keep it seven days a week"
                - "Plan one evening activity outside the house or with others @recurring(weekly:wed)"
                - "Write down the time your wind-down starts"
                - "Note any dozing in the chair in the sleep diary"
            - name: Personal stressful-night playbook
              description: |-
                ## Purpose
                Experienced sleepers do not have one routine; they have a few, matched to the kind of night ahead. Combining everything that works for you into a one-page playbook, with a standard night, a heavy-thoughts night, a wide-awake night and an early-waking plan, means the right response is decided in daylight.

                ## Milestones
                1. Four night types defined with a recognisable signal for each.
                2. The response to each written in three to five lines.
                3. The playbook on one page, kept by the bed and in your notes.
                4. The playbook used for a month and corrected.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page playbook covering four night types, used for a month and revised once."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Define four types of night you get and the signal for each"
                - "Write a three to five line response for each night type"
                - "Ask the agent to tidy the four responses onto one page"
                - "Reread and update the playbook @recurring(quarterly)"
            - name: Single-change sleep experiments
              description: |-
                ## Purpose
                Changing five things at once tells you that something helped but not what. Running one-change experiments of two weeks each, such as an earlier cut-off, a warm shower or a different audio option, with the diary as the measure, builds a personal evidence base you can trust.

                ## Milestones
                1. A list of candidate changes ranked by effort.
                2. A metrics log set up for the diary scores of each experiment.
                3. Three experiments run for two weeks each, one change at a time.
                4. A result written for each: keep, drop or unclear.

                ## Notes
                Start from the **Metrics log** template.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Three two-week single-change experiments recorded in a metrics log, each with a keep, drop or unclear result."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List candidate changes ranked by effort"
                - "Set up a metrics log for experiment scores"
                - "Run the first two-week experiment with only one change"
                - "Write a keep, drop or unclear verdict for each experiment"
            - name: Teaching your wind-down to someone you live with
              description: |-
                ## Purpose
                Once a routine works, a partner, teenager or flatmate with their own racing thoughts often asks how you did it. Walking them through the parts that might suit them, without prescribing, helps them and makes the household evening quieter for everyone.

                ## Milestones
                1. The parts of your routine that do not depend on you written as a short guide.
                2. A conversation offered rather than imposed.
                3. Their own first version of a routine written by them.
                4. A check-in held after two weeks.

                ## Notes
                For a teenager, keep it light and practical. Persistent sleep problems or low mood in a young person are worth raising with their doctor.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A short wind-down guide shared with one household member, who has written their own first routine and had a two-week check-in."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a one-page guide to the parts of your routine that transfer"
                - "Offer to talk it through with the person who asked"
                - "Help them write their own three-step routine"
                - "Check in after two weeks on what they kept"
            - name: Relapse plan for when bad nights return
              description: |-
                ## Purpose
                Bad nights tend to come back in stressful patches even after months of good sleep, and the instinct is to go to bed earlier, lie in and try harder, which rebuilds the old pattern. A short written plan for the first week of a relapse, going back to the basics that worked, stops a few bad nights becoming a few bad months.

                ## Milestones
                1. Your early warning signs of a relapse listed.
                2. The three basics that helped most written as the first-week plan.
                3. A rule for when a relapse means contacting a doctor.
                4. The plan reread each quarter.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written relapse plan with warning signs, three first-week basics and a rule for contacting a doctor."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List the signs that bad nights are returning"
                - "Write the three basics you will go back to in the first week"
                - "Write down when a relapse means calling your doctor"
                - "Reread the relapse plan and check the warning signs @recurring(quarterly)"
            - name: Annual sleep and wind-down review
              description: |-
                ## Purpose
                Once a year, with twelve months of diaries, tune-ups and experiments behind you, it is worth asking bigger questions: is the wake time still right, is the bedroom still working, has a new job or a new baby changed the picture. An annual review keeps the area current instead of running on habits that no longer fit.

                ## Milestones
                1. The year's diary trends summarised on a page.
                2. Routine, bedroom and timing each judged keep, change or drop.
                3. One bigger change chosen for the year ahead.
                4. The next review date set.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "An annual review written each year, with keep, change or drop recorded for routine, bedroom and timing."
                cadence: cyclic
              tasks:
                - "Gather the year's diary summaries and monthly tune-ups @recurring(yearly)"
                - "Ask the agent to compare this year's diary averages with last year's"
                - "Judge routine, bedroom and timing as keep, change or drop"
                - "Choose one bigger change for the year ahead"
---

# Sleep Wind-Down & Racing Thoughts

This area is for anyone whose mind speeds up the moment the light goes off, whether it is replaying the day, rehearsing tomorrow or spinning worries about sleep itself. It starts with the foundations (a two-week diary, a map of your night-time themes, a fixed wake time, a screen cut-off and a first written routine), then the nightly and weekly machinery that keeps evenings calm, the skills that take the effort out of falling asleep, the decisions about the bedroom, alcohol, trackers and partners, the big nights worth preparing for, the situations such as shifts, parenting and caring that change the plan, and finally the playbook of an experienced sleeper.

What repeats is a nightly wind-down and brain dump, a weekday shutdown, a Sunday evening reset, a Monday look at the sleep diary, a monthly routine tune-up, a quarterly bedroom refresh and a yearly review. The Sleep review, Habit tracker, Reading queue, Purchase decision, Trip and Metrics log templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
