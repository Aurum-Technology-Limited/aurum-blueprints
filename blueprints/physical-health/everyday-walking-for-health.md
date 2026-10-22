---
id: physical-health.everyday-walking-for-health
name: Everyday Walking for Health
description: "Daily steps and short walks built into ordinary life: a baseline and realistic target, routes from your door, routines that survive bad weather, and goals to walk towards."
category: personal
version: 1.0.0
tags: [physical-health, everyday-walking-for-health, everyone, retiree, walking, step-count, daily-activity]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - metrics-log
    - habit-tracker
    - reading-queue
    - trip
  pillars:
    - name: Physical Health
      emoji: "🩺"
      description: "The body you live in, looked after on purpose: screenings and check-ups kept on schedule, long-term conditions managed rather than endured, medicines and results kept in order, and the small daily habits that decide how the next thirty years feel."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Everyday Walking for Health
          description: "Building daily step counts and short walks into ordinary life for heart, weight and mood benefits, for people who do not think of themselves as exercisers."
          projects:
            - name: Safety check before walking more
              description: |-
                ## Purpose
                If you have a heart or lung condition, diabetes, joint problems or high blood pressure, a short conversation with your clinician before stepping up your walking settles any limits that apply to you. Most people need no check at all, but knowing which symptoms mean stop is worth ten minutes for everyone.

                ## Milestones
                1. Any conditions, medicines and symptoms that affect activity written on one page.
                2. Your clinician or practice nurse asked whether any limits apply to walking more.
                3. Any advice on pace, distance or warning symptoms written on the same page.
                4. The page kept at the front of your walking log.

                ## Notes
                Chest pain, unusual breathlessness, dizziness or calf pain that comes on with walking are reasons to stop and get checked, not to push through.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page note of conditions, any clinician advice and stop-and-seek-help symptoms sits at the front of the walking log."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down any conditions and medicines that might affect activity"
                - "Ask your practice whether you need a check before walking more"
                - "Note any limits or warning symptoms your clinician mentions"
                - "List the symptoms that mean stop walking and seek help"
            - name: One-week step count baseline
              description: |-
                ## Purpose
                Before setting any target, you need to know where you start, and most people guess wrong in both directions. Seven ordinary days of counted steps, with no effort to change anything, gives an honest average to build from.

                ## Milestones
                1. A step counter or phone recording every day for seven ordinary days.
                2. Daily totals written down without trying to change anything.
                3. The weekly average worked out, with the lowest and highest day noted.
                4. A note of what the busiest and quietest days had in common.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Seven consecutive daily step totals and their average are written in the walking log."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Check that your phone's step counter is switched on and counting"
                - "Carry the phone or counter from getting up to going to bed for seven days"
                - "Write each day's total down before bed"
                - "Work out the seven-day average and note your quietest day"
            - name: Simple step counter that suits you
              description: |-
                ## Purpose
                Most smartphones already count steps, so for many people the right counter costs nothing. A phone left on the kitchen table misses the steps though, and a clip-on pedometer or basic wristband suits people who do not carry their phone around the house.

                ## Milestones
                1. Your phone's step count checked against 500 steps counted out loud.
                2. A choice recorded between phone, clip-on pedometer and basic wristband.
                3. The chosen counter set up and carried or worn for a full day.

                ## Notes
                Pick the simplest option you will actually carry. Heart rate and sleep features are not needed to walk more.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One step counter is chosen, checked against a counted 500 steps and named in the walking log."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Count 500 steps out loud and compare with your phone's reading"
                - "Decide whether the phone travels with you enough to be your counter"
                - "Set up the chosen counter and wear it for one full day"
                - "Write the counter you chose in your walking log"
            - name: Comfortable everyday walking shoes
              description: |-
                ## Purpose
                Blisters and sore heels end more walking plans than lack of willpower. A cushioned, well-fitting pair you are happy to wear to the shops as well as on a towpath removes the excuse and makes longer walks comfortable.

                ## Milestones
                1. Your current shoes checked for worn heels, thin soles and rubbing points.
                2. Two or three pairs tried on in the afternoon with your walking socks.
                3. One pair bought that is comfortable from the first wear.
                4. A 20-minute first outing done before any longer walk.

                ## Notes
                Start from the **Purchase decision** template. Feet swell through the day, so try shoes on in the afternoon. If you have diabetes or a foot condition, ask about footwear at your next foot check.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A pair of walking shoes chosen against a written comparison is worn on a 20-minute walk without rubbing."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check your current shoes for worn heels and thin soles"
                - "Try on two or three pairs in the afternoon with your walking socks"
                - "Buy the pair that feels comfortable without breaking in"
                - "Wear the new pair on a 20-minute walk before going further"
                - "Check walking shoe soles and replace them once flattened @recurring(quarterly)"
            - name: Realistic daily step target
              description: |-
                ## Purpose
                Ten thousand steps began as a marketing number, and research links health benefits to totals well below it, with most of the gain coming as people move up from a low starting point. A first target of your baseline plus 1,000 to 2,000 steps is one you can hit this month and raise later.

                ## Milestones
                1. Your baseline average from the first week written down.
                2. A first daily target set at baseline plus 1,000 to 2,000 steps.
                3. A rule written for when the target will be raised.
                4. The target shared with one person who will ask about it.

                ## Notes
                If your clinician or a rehab team has given you an activity target, use theirs instead.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A daily step target, set from the baseline average with a written rule for raising it, is at the top of the walking log."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Take your seven-day average from the baseline week"
                - "Set a first daily target 1,000 to 2,000 steps above it"
                - "Write down when you will raise it, such as after two steady weeks"
                - "Tell one person your target and ask them to check in"
            - name: Three walking loops from your front door
              description: |-
                ## Purpose
                Deciding where to walk every time is a small barrier that adds up over weeks. Three mapped loops of about 10, 20 and 30 minutes from home, each with a known distance and a safe surface, mean the only decision left is which one fits today.

                ## Milestones
                1. A 10-minute, a 20-minute and a 30-minute loop walked from your door.
                2. Each loop timed and its distance noted.
                3. Any unsafe crossing, unlit stretch or steep section noted and avoided.
                4. The three loops saved in a map app or written on a card by the door.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three loops of roughly 10, 20 and 30 minutes are saved with their times and distances, each walked at least once."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Sketch three possible loops on a map app from your front door"
                - "Walk and time the shortest loop this week"
                - "Walk the 20 and 30 minute loops and note any problem spots"
                - "Save the three loops with their times and distances"
            - name: Weatherproof walking kit by the door
              description: |-
                ## Purpose
                Rain, wind and early darkness are the commonest reasons a walking routine stops in autumn. A waterproof, a hat, gloves and something reflective, kept together by the front door, make a grey evening a matter of two minutes' preparation rather than a reason to stay in.

                ## Milestones
                1. A waterproof layer, hat and gloves you are happy to wear locally.
                2. A reflective band or clip-on light for walking after dark.
                3. Everything kept together on a hook or in a basket by the door.
                4. One wet-weather walk completed in the kit to check it works.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A complete wet and dark weather kit is stored by the front door and has been tested on one rainy walk."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Gather the waterproof, hat and gloves you already own"
                - "Buy or find one reflective item or clip-on light"
                - "Set up a hook or basket by the door for the walking kit"
                - "Do one short walk in the rain to test the kit"
            - name: Your reasons for walking, on one page
              description: |-
                ## Purpose
                People who walk for a reason they care about, such as keeping up with grandchildren, sleeping better or a calmer head after work, keep going longer than those walking because they feel they should. Writing the reasons down gives you something to reread on the days the routine wobbles.

                ## Milestones
                1. Three personal reasons for walking more written in your own words.
                2. One thing you want to manage on foot in six months, such as walking to town and back.
                3. The page kept where you will see it, such as inside the walking log.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A page holding three personal reasons and one six-month walking goal is kept in the walking log."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write three reasons you want to walk more, in your own words"
                - "Name one thing you want to manage on foot in six months"
                - "Put the page at the front of your walking log"
                - "Reread the page the next time a week of walks slips"
            - name: Walking log
              description: |-
                ## Purpose
                A log of daily steps and brisk minutes shows progress that is invisible day to day, especially in the weeks when nothing seems to change. Four columns, filled in under a minute each evening, are enough to see trends and to show your clinician if asked.

                ## Milestones
                1. A log with columns for date, steps, brisk minutes and a short note.
                2. The baseline week and your target written at the top.
                3. Two weeks of entries filled in without gaps.

                ## Notes
                Start from the **Metrics log** template. If your counter keeps history, a weekly copy into the log is enough.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A walking log exists with the baseline and target at the top and at least fourteen consecutive days filled in."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Create a walking log from the metrics log template"
                - "Add columns for date, steps, brisk minutes and a note"
                - "Copy in your baseline week and your target"
                - "Fill in the day's steps and brisk minutes @recurring(daily)"
            - name: Ten-minute walk after a main meal
              description: |-
                ## Purpose
                Attaching a walk to something you already do every day is the most reliable way to make it stick. A ten-minute walk after your main meal has a fixed time, a short length and a likely bonus, since gentle walking after eating can help the body handle the rise in blood sugar that follows.

                ## Milestones
                1. One daily meal chosen as the anchor for the walk.
                2. Shoes and coat kept where you will see them after that meal.
                3. The walk done on at least five days a week for four weeks.
                4. An indoor back-up chosen for days you cannot go out.

                ## Notes
                Start from the **Habit tracker** template.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The habit tracker shows an after-meal walk on at least five days a week for four consecutive weeks."
                cadence: rolling
              tasks:
                - "Choose which daily meal your walk will follow"
                - "Set up a habit tracker for the after-meal walk"
                - "Walk for ten minutes after the chosen meal @recurring(daily)"
                - "Pick an indoor back-up, such as laps of the house or garden"
            - name: Sunday walking plan for the week
              description: |-
                ## Purpose
                Walks that are planned happen far more often than walks squeezed in when there is time, because there rarely is. Ten minutes on a Sunday matching the week's diary to your loops gives every day a walk that fits, including the busy ones.

                ## Milestones
                1. A regular ten-minute planning slot chosen.
                2. Each week's walks written into the diary like appointments.
                3. Busy days given a shorter walk rather than none.
                4. Eight weeks of plans made in a row.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weeks each have walks entered in the diary in advance, with planned and completed walks compared."
                cadence: rolling
              tasks:
                - "Choose a regular time for planning the week's walks"
                - "Block the coming week's walks in your diary @recurring(weekly:sun)"
                - "Give each busy day a 10-minute walk instead of nothing"
                - "Compare last week's planned walks with the ones you took"
            - name: Monthly step average review
              description: |-
                ## Purpose
                Daily totals swing with weather, work and mood, so judging progress day by day is discouraging. A monthly look at the average against your target shows the real direction and is the right moment to hold, raise or ease the target.

                ## Milestones
                1. The month's average daily steps worked out from the log.
                2. The average compared with your target and with last month.
                3. A decision recorded: hold, raise or ease the target.
                4. Six monthly reviews completed in a row.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly reviews each record the average, the comparison with target and the decision taken."
                cadence: rolling
              tasks:
                - "Work out the month's average steps and compare with your target @recurring(monthly:4)"
                - "Decide whether to hold, raise or ease the target"
                - "Ask the agent to chart the monthly averages from your walking log"
                - "Write one line on what helped or got in the way"
            - name: Walking part of the commute
              description: |-
                ## Purpose
                Getting off the bus a stop early, parking at the far end of the car park or walking to the further station adds 1,500 to 3,000 steps a day without finding any extra time. Once it becomes the default route, it happens without a decision.

                ## Milestones
                1. Two or three commute changes tried, such as an earlier stop or further parking.
                2. The extra minutes and steps measured for each.
                3. One change kept as the default on working days.
                4. A wet-weather version agreed so the habit survives winter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "One walking change to the commute is the default on working days, with its extra steps recorded over a month."
                cadence: rolling
              tasks:
                - "List three ways to walk part of your commute"
                - "Try each option for two days and note the extra steps"
                - "Make the best option your default on working days"
                - "Decide what you will do on very wet mornings"
            - name: Short car trips swapped for walking
              description: |-
                ## Purpose
                Many car trips are under a mile and a half, a 15 to 25 minute walk for most people. Swapping just the regular ones, such as the corner shop, the post office or the school gate, adds walking to errands you have to do anyway.

                ## Milestones
                1. A list of regular trips under about 2 km from home.
                2. Two of those trips switched to walking each week.
                3. A backpack or shopping bag kept ready for walked errands.
                4. A month in which the switched trips were walked at least three times in four.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two named short trips are walked in at least three of every four weeks for a month, tallied in the log."
                cadence: rolling
              tasks:
                - "List regular car trips under about 2 km from home"
                - "Pick two of them to walk every week from now on"
                - "Keep a backpack or shopping bag by the door for walked errands"
                - "Count the week's walked errands in your log @recurring(weekly:fri)"
            - name: Standing weekly walk with a friend
              description: |-
                ## Purpose
                Arranging to meet someone turns a walk from a good intention into a commitment, and conversation makes 45 minutes pass quickly. A fixed day, time and meeting point means nobody has to organise it each week.

                ## Milestones
                1. One friend, neighbour or relative asked to walk with you weekly.
                2. A fixed day, time and meeting point agreed.
                3. A rule agreed for what happens when one of you cannot make it.
                4. Ten weekly walks completed together.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Ten weekly walks with the same partner are recorded in the log within three months."
                cadence: rolling
              tasks:
                - "Ask one person to join you for a weekly walk"
                - "Agree a fixed day, time and meeting point"
                - "Agree that whoever is free still walks if the other cancels"
                - "Message your walking partner to confirm this week's walk @recurring(weekly:wed)"
            - name: Phone calls taken on foot
              description: |-
                ## Purpose
                Long calls with family and work calls that do not need a screen are free walking time. Taking them outside, or pacing the hallway when you cannot, can add 20 to 40 minutes a week without anything else changing.

                ## Milestones
                1. Regular calls that do not need a screen or notes identified.
                2. Headphones that stay in while walking charged and ready.
                3. A quiet route or indoor lap chosen for calls.
                4. At least two calls a week taken while walking.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least two calls a week are taken while walking for four consecutive weeks."
                cadence: rolling
              tasks:
                - "List the regular calls that do not need a screen or notes"
                - "Charge and test headphones that stay in while walking"
                - "Choose a quiet route for calls where traffic noise is low"
                - "Take the next long family call on a walk"
            - name: Seasonal walking reset
              description: |-
                ## Purpose
                Each season changes when it is light, how slippery the paths are and which routes are pleasant. A short reset four times a year, moving walks into daylight and swapping loops that turn muddy or dark, stops the routine collapsing every October and drifting every heatwave.

                ## Milestones
                1. Daylight hours for the coming season checked.
                2. Regular walk times moved to fit the light or the heat.
                3. Any loop that turns dark, muddy or icy swapped for an alternative.
                4. The seasonal kit checked and ready by the door.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four seasonal resets in a year, each recording new walk times and any swapped loops."
                cadence: cyclic
              tasks:
                - "Check sunrise and sunset times for the coming season @recurring(quarterly)"
                - "Move your regular walk times to fit the daylight or the heat"
                - "Swap any loop that gets muddy, dark or icy"
                - "Check the seasonal kit by the door"
            - name: Lunchtime walk on working days
              description: |-
                ## Purpose
                Office and home workers often reach mid-afternoon having walked fewer than 2,000 steps. A 15-minute walk in the lunch break adds around 1,500 steps, breaks up a long sitting day and gives the afternoon a clearer start.

                ## Milestones
                1. A 15-minute route from your workplace or home office found.
                2. The walk blocked in your work calendar so meetings do not take it.
                3. The walk taken on at least two working days a week.
                4. A colleague or neighbour invited to join on some days.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A lunchtime walk is taken on at least two working days a week for six consecutive weeks."
                cadence: rolling
              tasks:
                - "Find a 15-minute loop from your workplace or home desk"
                - "Block a repeating lunchtime walk in your work calendar"
                - "Take a 15-minute lunchtime walk @recurring(weekly:tue,thu)"
                - "Invite one colleague to join one of the walks"
            - name: Five-minute minimum on bad days
              description: |-
                ## Purpose
                Routines usually break not on the hard day but on the day after, when one missed walk becomes a missed week. A written minimum, five minutes out of the door whatever happens, keeps the chain going and often turns into a longer walk once you are outside.

                ## Milestones
                1. A minimum walk defined that you could manage even when tired, busy or low.
                2. The rule written at the front of the walking log.
                3. A month in which no more than two days in a row had no walk at all.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written minimum walk rule exists and a full month passes with no run of three days without a walk."
                cadence: rolling
              tasks:
                - "Write your minimum walk rule, such as five minutes out and back"
                - "Keep a five-minute route ready that starts at your door"
                - "Mark minimum-walk days in the log so they still count"
                - "Check the month for any run of three days without a walk @recurring(monthly:20)"
            - name: Learning what a brisk pace feels like
              description: |-
                ## Purpose
                Most health guidance counts moderate activity, which for walking means brisk enough that you can talk but not sing. Learning to recognise that pace, with the talk test and a count of steps per minute, turns ordinary walks into ones that count towards the weekly guidance.

                ## Milestones
                1. The talk test tried on a familiar loop: able to talk, not able to sing.
                2. Your brisk pace measured as steps per minute.
                3. Ten minutes held at brisk pace without stopping.
                4. Brisk minutes recorded separately from total steps in the log.

                ## Notes
                Around 100 steps a minute is often quoted as a rough marker of moderate pace for adults. Your own talk test matters more than the number.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your brisk pace in steps per minute is written in the log, and ten unbroken brisk minutes have been walked."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Try the talk test on your shortest loop"
                - "Count your steps for one minute at a brisk pace"
                - "Hold that pace for ten minutes on your next walk"
                - "Add a brisk minutes column to your walking log"
            - name: Walking posture and stride
              description: |-
                ## Purpose
                Walking feels automatic, but a few cues make it easier and more comfortable over longer distances: looking ahead rather than at your feet, letting the arms swing, and taking quicker steps rather than longer ones. Practising one cue at a time for a week makes it stick.

                ## Milestones
                1. Three posture cues chosen and written on a card.
                2. Each cue practised for a week on your usual loop.
                3. A friend asked to film 30 seconds of your walking.
                4. Any ache that appears with longer walks noted and raised with a physiotherapist if it persists.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three posture cues have each been practised for a week and compared against a short video of your walking."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write three posture cues on a card to carry"
                - "Practise one cue per walk for the next week"
                - "Ask someone to film 30 seconds of you walking"
                - "Compare the video with your cues and pick one to work on"
            - name: What walking does for heart, sugar and mood
              description: |-
                ## Purpose
                Knowing why a walk helps makes it easier to keep going when the scales or the step count stall. A short list of reliable sources on walking and blood pressure, blood sugar, joints and mood gives you the evidence in plain language, and the questions to take to your own clinician.

                ## Milestones
                1. Four or five reliable sources gathered in a reading queue.
                2. One page of notes on the benefits most relevant to you.
                3. Any questions about your own conditions taken to your clinician.

                ## Notes
                Start from the **Reading queue** template. Use public health services and medical charities rather than product sites.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary drawn from at least four reliable sources is saved, with any personal questions listed for the clinician."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Start a reading queue for walking and health sources"
                - "Add four articles from public health services or medical charities"
                - "Write one page of notes on the benefits that matter to you"
                - "Take any questions about your own health to your next appointment"
            - name: Interval walking with fast and easy minutes
              description: |-
                ## Purpose
                Alternating three minutes of fast walking with three minutes of easy walking, a method studied in older adults in Japan, built more fitness than steady walking for the same time. Once your brisk pace is familiar, five rounds a few times a week add challenge without ever having to run.

                ## Milestones
                1. A fast pace you can hold for three minutes identified.
                2. A timer set up for three-minute switches.
                3. Three rounds completed comfortably.
                4. Five rounds done on three days a week for four weeks.

                ## Notes
                If you have a heart condition or high blood pressure, check with your clinician before adding fast intervals.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Five rounds of fast and easy intervals are logged on three days a week for four consecutive weeks."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Set a phone timer to alternate every three minutes"
                - "Walk three rounds of fast and easy on your 20-minute loop"
                - "Build up to five rounds over four weeks"
                - "Log each interval session with how hard it felt from 1 to 10"
            - name: Hills and stairs with confidence
              description: |-
                ## Purpose
                Hills and stairs are where walking fitness shows first, and where many people quietly start avoiding routes. Practising a short slope or a flight of stairs on purpose, with shorter steps and steady breathing, builds leg strength and makes everyday climbs less daunting.

                ## Milestones
                1. One short hill or stair flight near home chosen for practice.
                2. A comfortable way up found: shorter steps, steady breathing, the handrail where there is one.
                3. The climb repeated three times in one session.
                4. One hilly route added to your regular loops.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Three repeats of a local hill or stair flight are completed in one session and a hilly loop is added to the saved routes."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Find one short hill or flight of stairs near home"
                - "Walk it once using short steps and steady breathing"
                - "Repeat the climb three times in one session"
                - "Add a hilly route to your set of loops"
            - name: Planning new routes with a map app
              description: |-
                ## Purpose
                Walking the same loop for months gets dull, and boredom ends routines as reliably as rain. Learning to plan a route on a map app, check its distance and surface, and find paths away from roads opens up parks, towpaths and footpaths you may have driven past for years.

                ## Milestones
                1. A map app that shows footpaths and measures distance installed.
                2. A new route of 3 to 5 km planned on the app.
                3. The route walked with the app as a guide.
                4. Two more new routes added to your saved list.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three new routes of 3 to 5 km, planned on a map app and walked once each, are saved with distance and surface."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Install a map app that shows footpaths and measures distance"
                - "Plan a new 3 to 5 km route from home or a short drive away"
                - "Walk the route with the app as your guide"
                - "Save it to your list of loops with its distance and surface"
            - name: Walking safely after dark and on ice
              description: |-
                ## Purpose
                Winter walking means darker pavements, wet leaves and ice, and a fall is the main risk for older walkers. A few habits, such as lit routes, reflective kit, shoes with grip and slip-on ice grips, keep walking going safely through the darker months.

                ## Milestones
                1. A lit winter version of each of your three loops identified.
                2. Shoes with good grip or slip-on ice grips ready for frosty days.
                3. Someone told your route and expected return on dark evenings.
                4. A rule written for when it is too icy to go out and the indoor option takes over.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Lit winter versions of all three loops are saved and ice grips or high-grip shoes are kept with the walking kit."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Walk your loops after dark once to find unlit stretches"
                - "Choose lit alternatives for any dark sections"
                - "Get slip-on ice grips or shoes with deep tread"
                - "Agree to text someone your route on dark evenings"
            - name: Eight-week gradual step increase
              description: |-
                ## Purpose
                Jumping from 3,000 to 10,000 steps overnight usually ends in sore shins and a quiet return to the sofa. Adding about 1,000 steps a day every two weeks takes most people from their baseline to a solid new level in eight weeks, with time for feet and legs to adjust.

                ## Milestones
                1. Four two-week stages written down, each 1,000 steps above the last.
                2. Stage one held on most days for two weeks.
                3. Each step up taken only after the previous stage felt easy.
                4. The final stage reached and held for two weeks.
              priority: high
              deadlineOffsetDays: 70
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "The daily step average is at least 4,000 above the baseline for two consecutive weeks, shown in the log."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write four fortnightly stages starting from your current target"
                - "Mark the start date of each stage in your diary"
                - "Check whether you hit the stage target on most days @recurring(weekly:mon)"
                - "Hold a stage for an extra fortnight if legs or feet are sore"
            - name: Building to 150 brisk minutes a week
              description: |-
                ## Purpose
                Many health services recommend at least 150 minutes of moderate activity a week, and brisk walking counts. Building from a few brisk minutes to 30 minutes on five days, over about twelve weeks, gets you there without strain.

                ## Milestones
                1. Your current weekly brisk minutes measured from the log.
                2. A weekly plan that adds about 10 to 15 brisk minutes each week.
                3. 75 brisk minutes reached in a single week.
                4. 150 brisk minutes reached and repeated for three weeks running.

                ## Notes
                If you have a long-term condition, agree the build-up with your clinician. Brisk minutes can come in pieces of ten minutes or more.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "The log shows at least 150 brisk walking minutes in each of three consecutive weeks."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Add up last week's brisk minutes from your log"
                - "Plan this week to add 10 to 15 brisk minutes"
                - "Total the week's brisk minutes and set next week's goal @recurring(weekly:sat)"
                - "Mark the first week you reach 150 minutes with a small reward"
            - name: Indoor walking for bad weather days
              description: |-
                ## Purpose
                Heavy rain, heatwaves, ice and poor air quality days can take out a week or two of walks each season unless an indoor option is ready. Comparing a home walking video, a covered shopping centre and a walking pad means bad weather changes the venue, not whether you walk.

                ## Milestones
                1. Three indoor options listed with cost and travel time.
                2. A free option, such as a 15-minute home walking video, tried once.
                3. A decision recorded on whether a walking pad or treadmill is worth buying.
                4. The indoor back-up written into your weekly walking plan.

                ## Notes
                Start from the **Purchase decision** template. Before buying a walking pad, measure the space and think about noise for neighbours below.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One indoor walking option is chosen and tried, with the decision on buying equipment written down."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List three indoor walking options near you or at home"
                - "Try a 15-minute indoor walking video at home"
                - "Check opening hours of a covered centre or indoor track"
                - "Decide whether a walking pad is worth the space and cost"
            - name: Neighbourhood walking audit
              description: |-
                ## Purpose
                Missing dropped kerbs, broken pavements, no benches and nowhere to find a toilet stop many people, especially older walkers, from going further. Mapping these on your routes, and reporting the fixable ones, makes your area easier to walk for you and for everyone else.

                ## Milestones
                1. Benches, public toilets and rest points noted on your main routes.
                2. Hazards such as broken paving or blind crossings recorded with photos.
                3. At least two problems reported to the local authority.
                4. Your routes adjusted to use the rest points you found.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Rest points are marked on your saved routes and at least two hazards have been reported with photos."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Walk your longest loop noting benches, toilets and rest points"
                - "Photograph broken paving or unsafe crossings"
                - "Report two problems through your local authority's online form"
                - "Mark rest points on your saved routes"
            - name: Dog walking without owning a dog
              description: |-
                ## Purpose
                Dog owners walk considerably more than people without dogs, but a dog is a commitment of ten to fifteen years. Borrowing a neighbour's dog, volunteering at a rescue shelter or joining a dog-sharing scheme gives you a walking companion who never cancels, without the full cost.

                ## Milestones
                1. Two options found, such as a neighbour, a shelter or a sharing scheme.
                2. Any vetting, training or insurance requirement understood.
                3. A trial walk done with a borrowed dog.
                4. A decision recorded on a regular arrangement.

                ## Notes
                Check the owner's or scheme's insurance and the dog's lead manners before walking it alone near roads.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A trial walk with a borrowed dog is completed and a decision on a weekly arrangement is recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask neighbours or friends whether their dog needs extra walks"
                - "Look up local shelters that take volunteer dog walkers"
                - "Do one trial walk with a dog"
                - "Agree a weekly time if the trial went well"
            - name: Choosing a walking group
              description: |-
                ## Purpose
                Group walks add company, a fixed time and a leader who knows the way. Health walk schemes for beginners, rambling clubs for longer country walks and informal neighbourhood groups suit very different paces, so trying two before committing finds the right fit.

                ## Milestones
                1. Three local groups found with their distance, pace and meeting times.
                2. Two groups tried with one walk each.
                3. Pace, distance and atmosphere compared after each trial.
                4. One group chosen and its next walks in your diary.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two groups have been tried and one chosen, with its next four walks entered in the diary."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Search for health walks and walking clubs within 10 km"
                - "Note each group's usual distance, pace and meeting time"
                - "Join one walk with each of two groups"
                - "Go on the chosen group's walk @recurring(weekly:thu)"
            - name: Podcast and audiobook walking queue
              description: |-
                ## Purpose
                Saving a favourite podcast or audiobook for walks only gives you a reason to get out of the door, a trick sometimes called temptation bundling. A queue of listening you look forward to, with a safety rule near traffic, keeps longer walks enjoyable.

                ## Milestones
                1. A queue of at least five episodes or one audiobook kept for walks only.
                2. A rule that the queue is only played while walking.
                3. A traffic safety rule for listening near roads.

                ## Notes
                Start from the **Reading queue** template. Near roads, use one earbud or open-ear headphones so you can hear traffic and cyclists.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A walking-only listening queue holds at least five items and has been topped up for three months running."
                cadence: rolling
              tasks:
                - "Pick one podcast or audiobook you will only play while walking"
                - "Add five episodes to a walking-only reading queue"
                - "Set up open-ear headphones or use one earbud near roads"
                - "Top up the walking queue with new listening @recurring(monthly:15)"
            - name: First organised 5 km walk
              description: |-
                ## Purpose
                Entering a charity or community 5 km walk eight to ten weeks away gives your walking a date and a finish line. Building your longest weekly walk towards it turns a vague aim into a plan, and walking with a crowd on the day is a good reward.

                ## Milestones
                1. A 5 km event chosen eight to ten weeks away and entered.
                2. Longest weekly walk increased towards 5 km in steps of about 1 km.
                3. A full 5 km practice walk completed two weeks before the day.
                4. The event walked and your time recorded.
              priority: medium
              deadlineOffsetDays: 70
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The 5 km event is completed and the finishing time written in the walking log."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Find a 5 km walk eight to ten weeks from now and enter"
                - "Plan a longest weekly walk that grows by about 1 km"
                - "Walk the full 5 km on a practice route two weeks before"
                - "Pack water, layers and comfortable socks the night before"
            - name: Half-day countryside walk of 10 km
              description: |-
                ## Purpose
                Once 5 km feels easy, a 10 km walk on a waymarked trail is a different kind of day out, with more planning, a packed lunch and the satisfaction of a real distance. Preparing the route, transport and kit beforehand stops a good day turning into a long trudge back.

                ## Milestones
                1. A waymarked route of about 10 km chosen, with its map and terrain checked.
                2. Transport to the start and back from the finish arranged.
                3. A day pack with water, food, layers and a charged phone ready.
                4. The walk completed and a note made of what to change next time.

                ## Notes
                Start from the **Trip** template.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A 10 km waymarked walk is completed, with the route, time taken and lessons noted."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Choose a waymarked 10 km route within an hour of home"
                - "Plan transport to the start and back from the finish"
                - "Pack water, lunch, layers and a charged phone"
                - "Tell someone your route and expected finish time"
            - name: Local walking festival weekend
              description: |-
                ## Purpose
                Towns and national parks often host walking festivals with guided walks of every length, from a 3 km history stroll to a full day on the hills. Booking two walks at your current distance gives you new routes, local knowledge and people to walk with, without any navigation to worry about.

                ## Milestones
                1. A walking festival within reach found and its programme read.
                2. Two guided walks booked at your current distance.
                3. Travel and any overnight stay arranged.
                4. Both walks completed, with one new route idea brought home.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Two guided festival walks are completed and one new idea or route is added to your list."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Search for walking festivals within two hours of home"
                - "Book two guided walks that match your current distance"
                - "Arrange travel and any overnight stay"
                - "Note one route or idea to try back home"
            - name: Personal best step week
              description: |-
                ## Purpose
                A one-off challenge week, aiming to beat your highest weekly step total, shows how much walking ordinary life can hold when you plan for it. The real prize is finding which of the extra walks are easy enough to keep afterwards.

                ## Milestones
                1. Your best week so far found in the log.
                2. A challenge target set 10 to 15 percent above it.
                3. Extra walks planned into each day of the challenge week.
                4. The week completed and the extra walks worth keeping written down.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A challenge week is completed with its total recorded and at least one extra walk kept in the weekly plan."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Find your highest weekly step total in the log"
                - "Set a challenge target 10 to 15 percent above it"
                - "Plan an extra walk into each day of the challenge week"
                - "Write down which extra walks you could keep afterwards"
            - name: Twelve-month walking review
              description: |-
                ## Purpose
                After a year, the log holds enough to see what really worked: which walks lasted, which seasons dipped and how far your average has moved from the baseline week. An hour's review sets next year's target and lets you drop what never fitted.

                ## Milestones
                1. The year's monthly averages set beside the baseline.
                2. The three habits that lasted and the two that did not named.
                3. A target and one focus for the next twelve months written.
                4. Any change in health measures you track noted for your next check-up.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written review compares twelve monthly averages with the baseline and sets next year's target and focus."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Gather the twelve monthly averages from your log"
                - "Ask the agent to summarise trends and seasonal dips from the year's log"
                - "Name the habits that lasted and the ones that did not"
                - "Set next year's target and one new focus @recurring(yearly)"
            - name: Daily walk structure in retirement
              description: |-
                ## Purpose
                Retirement removes the commute and the walk from the car park, and step counts often drop sharply in the first year without anyone noticing. Giving the day a fixed morning walk with a purpose, such as the paper, the shops or coffee with a friend, replaces the structure that work used to provide.

                ## Milestones
                1. Step counts before and after retiring compared, if you have them.
                2. A daily morning walk tied to a purpose, such as collecting the paper.
                3. One longer weekly walk with a group or partner.
                4. Three months in which the morning walk happened on most days.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The log shows a purposeful morning walk on at least five days a week for three consecutive months."
                cadence: rolling
              tasks:
                - "Choose a daily errand or meeting to walk to each morning"
                - "Set the morning walk as a fixed time in your diary"
                - "Find one longer weekly walk to join with others"
                - "Count the mornings you walked this month @recurring(monthly:28)"
            - name: Walking poles or a stick in later life
              description: |-
                ## Purpose
                Fear of falling quietly shrinks many older people's walks to the end of the road. A stick or a pair of poles, set to the right height after advice from a physiotherapist or your clinician, can add steadiness and confidence on uneven ground and longer routes.

                ## Milestones
                1. Your clinician or a physiotherapist asked whether a stick or poles would help.
                2. The aid set to the correct height and its rubber tips checked.
                3. Correct use practised on flat ground before uneven paths.
                4. Your usual loops walked with the aid for two weeks.

                ## Notes
                Sticks and poles are used differently. Ask to be shown rather than guessing.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A professional view on a walking aid is recorded and, if advised, the aid is set to height and used on all three loops."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your clinician or a physiotherapist about a walking aid"
                - "Have the stick or poles set to the right height"
                - "Practise using the aid on a flat path"
                - "Check the rubber tips for wear @recurring(quarterly)"
            - name: Walks with grandchildren
              description: |-
                ## Purpose
                Grandchildren make willing walking partners when there is something at the end: ducks, a playground, a bug hunt. A few short, child-paced routes with a goal turn childcare days into walking days for both generations.

                ## Milestones
                1. Three short routes with a destination children enjoy.
                2. A small kit of snacks, water and a spare layer ready.
                3. A walking game, such as a scavenger list, ready for each route.
                4. A walk taken on most days you look after the grandchildren.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three child-friendly routes are listed and a walk is logged on most childcare days for two months."
                cadence: rolling
              tasks:
                - "List three short routes ending somewhere children enjoy"
                - "Make a simple scavenger list for each route"
                - "Pack a small walking kit with snacks and a spare layer"
                - "Let the children choose the route on the next visit"
            - name: Restarting after a break
              description: |-
                ## Purpose
                Holidays, colds, a busy month or a minor illness can stop walking for weeks, and restarting at the old level often brings aches that put people off again. A two-week restart, beginning at about half your previous daily target, gets you back to where you were without a setback.

                ## Milestones
                1. Your last steady daily average found in the log.
                2. A restart target set at about half of it.
                3. The target raised every few days over two weeks.
                4. Your previous average reached again.

                ## Notes
                After a serious illness, an operation or a heart event, follow the plan your care team gives you instead.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "The daily average returns to its pre-break level within three weeks of restarting, shown in the log."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Look up your last steady average before the break"
                - "Set a restart target at about half that number"
                - "Raise the target every three or four days"
                - "Note which part of the routine to restart first next time"
            - name: Pushchair walks with a baby
              description: |-
                ## Purpose
                New parents often find a walk is the one thing that settles both the baby and their own head. Flat, pushchair-friendly routes with step-free crossings and a café stop build walking into early parenthood, once your midwife or doctor is happy for you to increase activity.

                ## Milestones
                1. Two pushchair-friendly routes with step-free crossings and a stop.
                2. A rain cover, sunshade and change bag ready by the door.
                3. A daily walk, of any length, on most days.
                4. A local buggy walking group or another parent to walk with.

                ## Notes
                Check with your midwife, health visitor or doctor when it is right to build up activity after the birth.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two step-free routes are saved and a pushchair walk is logged on at least five days a week for a month."
                cadence: rolling
              tasks:
                - "Find two flat routes with step-free crossings near home"
                - "Keep the pushchair kit packed by the door"
                - "Look for a local buggy walking group or a parent to walk with"
                - "Walk at the baby's usual unsettled time on most days"
            - name: Walking in ten-minute pieces for carers
              description: |-
                ## Purpose
                Carers and people on long shifts rarely get a free half hour, but three ten-minute walks add up to the same brisk time. Finding slots that fit around care routines, medicine times or shifts keeps walking possible when your time belongs to someone else.

                ## Milestones
                1. Three possible ten-minute slots in a typical day found.
                2. Walks planned with the person you care for, where they are able.
                3. Two or three short walks done on most days.
                4. One longer walk a week, with a relative or sitter covering.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least two ten-minute walks a day are logged on most days for four weeks, plus one longer weekly walk."
                cadence: rolling
              tasks:
                - "Mark three ten-minute gaps in a typical day"
                - "Ask a relative or sitter to cover one longer walk a week"
                - "Walk with the person you care for where they are able"
                - "Count short walks in your log so they still add up"
            - name: Walks for a low mood day
              description: |-
                ## Purpose
                Walking outdoors, especially near trees or water, is one of the things people most often say helps on a flat or anxious day. Choosing a gentle, green route in advance, with a rule to walk it before deciding how the day will go, makes it usable when motivation is lowest.

                ## Milestones
                1. One green or waterside route within ten minutes of home chosen.
                2. A rule written: walk it before deciding the day is a write-off.
                3. Mood noted before and after on five occasions.
                4. Someone you trust told this is part of your plan.

                ## Notes
                Walking supports mental health but does not replace treatment. If low mood lasts more than two weeks, speak to your doctor.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Five low mood day walks are logged with a before and after mood score."
                cadence: rolling
              tasks:
                - "Choose a green or waterside route close to home"
                - "Write your low mood day walking rule on your phone"
                - "Rate your mood from 1 to 10 before and after the walk"
                - "Tell someone you trust about the plan"
            - name: Nordic walking technique
              description: |-
                ## Purpose
                Nordic walking uses purpose-made poles to bring in the arms and upper body, raising the effort of a walk without extra impact on the knees. A short course with a qualified instructor matters, because poles used badly add very little.

                ## Milestones
                1. A qualified instructor or taster session found nearby.
                2. Poles borrowed or bought at the length the instructor recommends.
                3. A beginner course of three or four sessions completed.
                4. Nordic walking used on one regular walk a week.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A beginner Nordic walking course is completed and poles are used on one regular walk a week for a month."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Search for a Nordic walking taster session nearby"
                - "Book a beginner course of three or four sessions"
                - "Borrow poles before buying your own"
                - "Use the poles on one regular walk @recurring(weekly:tue)"
            - name: Quarterly timed one-mile walk test
              description: |-
                ## Purpose
                Steps measure how much you walk; a timed mile on the same flat route shows how fit you are becoming. Repeating it every three months gives a simple fitness trend that often keeps improving after step counts level off.

                ## Milestones
                1. A flat, measured 1.6 km route with no road crossings chosen.
                2. A first timed walk at your fastest comfortable pace recorded.
                3. The test repeated each quarter in similar conditions.
                4. Four results in the log showing your trend.

                ## Notes
                Walk fast but not to exhaustion. Stop and seek medical advice if you get chest pain, dizziness or unusual breathlessness.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly timed walks over the same 1.6 km route are recorded in the log."
                cadence: cyclic
              tasks:
                - "Measure a flat 1.6 km route with no road crossings"
                - "Walk it at your fastest comfortable pace and record the time"
                - "Repeat the timed walk in similar conditions @recurring(quarterly)"
                - "Plot the results next to your monthly step averages"
            - name: Training as a volunteer walk leader
              description: |-
                ## Purpose
                Experienced walkers often find the next step is helping others start. Many health walk schemes train volunteers in a day to lead short, friendly walks for beginners, and leading a weekly walk fixes your own routine while helping people who would not walk alone.

                ## Milestones
                1. A local health walk scheme or club that trains leaders contacted.
                2. The leader training and any first aid requirement completed.
                3. Three walks shadowed with an experienced leader.
                4. A regular walk led for at least two months.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Walk leader training is completed and a regular group walk has been led for eight weeks."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Contact a local health walk scheme about leader training"
                - "Book the walk leader training day"
                - "Shadow three walks with an experienced leader"
                - "Confirm your first walk to lead with the scheme coordinator"
            - name: Multi-day long-distance walk
              description: |-
                ## Purpose
                A long-distance path walked over several days, or 100 km in a week, is a big goal for an experienced walker. It needs months of building weekly distance, back-to-back long days in training, and planning for blisters, luggage, accommodation and rest days.

                ## Milestones
                1. A route chosen with daily distances you can realistically manage.
                2. Accommodation and luggage transfer or camping arranged.
                3. Two back-to-back long walking days completed in training.
                4. Blister and foot care kit tested on long practice walks.
                5. The walk completed, with a note on what you would change.

                ## Notes
                Start from the **Trip** template.
              priority: medium
              deadlineOffsetDays: 240
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every planned day of the multi-day walk is completed and a short debrief is written."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Choose a multi-day route and list its daily distances"
                - "Plan a training block that builds weekly distance"
                - "Book accommodation or luggage transfer for each night"
                - "Walk two long days back to back as a final test"
            - name: Rucksack walking with added weight
              description: |-
                ## Purpose
                Carrying a loaded rucksack on familiar walks raises the effort and builds strength in the legs and back without adding speed or distance. Starting light and adding weight slowly keeps it a walking upgrade rather than a source of new aches.

                ## Milestones
                1. A well-fitting rucksack with a hip belt chosen.
                2. A light starting load packed, such as water bottles you can pour out.
                3. The load carried on your 20-minute loop without back or shoulder pain.
                4. Load increased gradually over six weeks, never adding weight and distance in the same week.

                ## Notes
                If you have back problems, osteoporosis or a heart condition, ask your clinician first.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Six weeks of loaded walks are logged with weight and distance, with no week raising both."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Fit a rucksack with a hip belt and chest strap"
                - "Pack a light starting load of water bottles"
                - "Walk your 20-minute loop with the load"
                - "Add a little weight only after two comfortable weeks"
---

# Everyday Walking for Health

This area is for people who would not call themselves exercisers but want the heart, weight and mood benefits of walking more, including retirees whose days have suddenly lost their shape. It starts with the foundations (a safety check, a baseline week, decent shoes, a realistic target and three loops from your door), then the routines that keep walking going, the skills of pace, hills and route planning, the decisions about indoor options, groups and dogs, events worth aiming for, situations such as retirement, grandchildren, caring and a new baby, and finally the work of an experienced walker.

What repeats is a daily after-meal walk and a line in the log, a Sunday plan for the week, a weekly walk with a friend or group, a monthly look at your step average, a seasonal reset and a quarterly timed walk. The Purchase decision, Metrics log, Habit tracker, Reading queue and Trip templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
