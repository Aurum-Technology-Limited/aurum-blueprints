---
id: mental-wellbeing.doomscrolling-attention-rest
name: Doomscrolling & Attention Rest
description: "An honest screen time baseline, a phone set up to be less grabby, a calmer news diet, weekly offline time and the skills that let attention rest instead of being pulled at all day."
category: personal
version: 1.0.0
tags: [mental-wellbeing, doomscrolling-attention-rest, everyone, screen-time, news-overload, social-media, digital-detox, attention]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - purchase-decision
    - habit-tracker
    - reading-queue
    - trip
  pillars:
    - name: Mental & Emotional Wellbeing
      emoji: "🧘"
      description: "The inner weather: managing stress and anxiety, recovering from burnout, therapy and support, rest and attention, mood and emotional skills, and the routines that keep a mind steady when life is not."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Doomscrolling & Attention Rest
          description: "Reducing compulsive scrolling and news overload, and giving attention genuine rest through offline time and calmer media habits."
          projects:
            - name: Seven-day screen time baseline
              description: |-
                ## Purpose
                Most people guess their daily phone use at about half of what the built-in report shows, and you cannot cut what you have not measured. A full week of numbers, split by app, pick-ups and notifications, shows where the hours actually go before you change a single setting.

                ## Milestones
                1. Screen time or digital wellbeing reporting switched on for every phone and tablet you use.
                2. Seven days of daily totals, pick-ups and notification counts written down.
                3. The three apps with the most minutes and the three with the most pick-ups named.
                4. A weekly average recorded as the number every later change is measured against.

                ## Notes
                Start from the **Metrics log** template. Change nothing during the baseline week, or the number will flatter you.

                Before you start: this plan is general information to help you look after your own wellbeing. It is not medical or psychological advice and does not replace a doctor, therapist or counsellor. If you are in crisis, in danger or thinking about harming yourself, contact your local emergency number or a crisis line now.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A log holding seven consecutive days of screen time, pick-ups and notifications, with a weekly average and the top three apps named."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Switch on screen time reporting on your phone and any tablet"
                - "Create a baseline log with columns for total, pick-ups and notifications"
                - "Copy the previous day's figures into the log each morning for a week"
                - "Circle the three apps with the most minutes and the most pick-ups"
            - name: Mapping your scroll triggers
              description: |-
                ## Purpose
                Compulsive scrolling rarely starts with a decision; it starts with a cue, such as a queue, a hard email, the sofa after dinner or a buzz in your pocket. Noting what was happening just before each long session for a week turns a vague bad habit into a short list of moments you can plan around.

                ## Milestones
                1. At least fifteen long scrolling sessions noted with time, place, mood and what came just before.
                2. The cues grouped into places, times, feelings and alerts.
                3. Your top three triggers written in one line each.
                4. One planned alternative response written beside each top trigger.

                ## Notes
                Keep notes to a few words, on paper if you can. Opening a notes app on the phone is itself a cue for some people.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written list of your three most common scroll triggers, drawn from at least fifteen recorded sessions, each paired with an alternative response."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Put a small notebook where you usually sit with your phone"
                - "Note time, place, mood and the cue after any session over ten minutes"
                - "Group a week of notes into places, times, feelings and alerts"
                - "Write one alternative response beside each of your top three triggers"
            - name: One-page case for scrolling less
              description: |-
                ## Purpose
                Willpower fades within days when the only reason is a general sense that phones are bad. A short page in your own words, naming what scrolling has cost you lately and what you want the time and attention for instead, gives you something specific to reread when the urge wins an argument.

                ## Milestones
                1. Three recent costs of scrolling written down, each a real moment rather than a principle.
                2. Three things you want the reclaimed time and attention for.
                3. One sentence describing how an ordinary evening would look if this worked.
                4. The page kept somewhere you will see it, such as inside a bag or by the kettle.
              priority: medium
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page reasons sheet naming three costs and three wanted uses of the time, placed where you will see it daily."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write down three moments in the last month that scrolling spoiled"
                - "List three things you would rather give that time and attention to"
                - "Describe in one sentence what a good evening would look like"
                - "Put the page somewhere you see it every day"
            - name: Notification cull across every app
              description: |-
                ## Purpose
                Typical phones deliver well over a hundred alerts a day, and each one is an invitation to open an app and keep going. Turning off everything that is not from a person or genuinely time sensitive is the single change that most reliably cuts pick-ups, and it takes about an hour.

                ## Milestones
                1. Every app's notification setting reviewed, not just the noisy ones.
                2. Alerts left on only for direct messages from people, calendar and anything safety related.
                3. Badges and lock screen previews switched off for social and news apps.
                4. Daily notification count compared with the baseline week after seven days.

                ## Notes
                Keep calls and messages from family and anyone you care for loud. The aim is fewer prompts from apps, not being unreachable.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Daily notifications reduced by at least half against the baseline average, with only people, calendar and safety alerts left on."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Open notification settings and list every app allowed to alert you"
                - "Turn off alerts for every app that is not a person or time sensitive"
                - "Switch off badges and lock screen previews for social and news apps"
                - "Check notification permissions for any app installed this month @recurring(monthly:12)"
            - name: A home screen that does not invite scrolling
              description: |-
                ## Purpose
                The first screen you see is where reflex taps happen, often before you have decided to open anything. Moving feeds off it, leaving only tools such as maps, camera and calendar, adds a few seconds of friction that is often enough for the conscious part of you to catch up.

                ## Milestones
                1. Social, news and video apps moved off the first screen and out of the dock.
                2. The first screen holding only tools you open with a clear purpose.
                3. Feed apps opened by typing their name in search rather than a tap.
                4. Pick-ups that ended in a feed compared before and after for one week.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A first screen containing no social, news or video apps, kept that way for at least four weeks."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Screenshot your current home screen so you can compare later"
                - "Move every feed app into a folder on the last page"
                - "Fill the first screen with tools you open on purpose"
                - "Recheck the home screen for apps that crept back @recurring(monthly:3)"
            - name: Choosing an app limit or blocking tool
              description: |-
                ## Purpose
                Built-in limits are easy to wave past, while dedicated blockers range from gentle delays to locks you cannot override until a timer ends. Comparing the options against your own weak spots means you pick the lightest tool that will actually hold, rather than the strictest one you abandon in a week.

                ## Milestones
                1. Your weak spots written down: which apps, which times, how easily you override limits.
                2. Built-in limits plus two or three dedicated blocking apps compared on strictness, cost and privacy.
                3. One tool chosen and set up on every device where the problem apps live.
                4. A two-week trial completed with a note on how often you overrode it.

                ## Notes
                Start from the **Purchase decision** template. Read each blocker's privacy policy: some route your browsing through their own servers.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One blocking or limit tool chosen against written criteria and used for two weeks, with the number of overrides recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down which apps and times you most want to limit"
                - "Compare the built-in limits with two dedicated blocking apps"
                - "Check each tool's privacy policy and price"
                - "Set up the chosen tool on every device and note any overrides for two weeks"
            - name: A fixed parking spot for the phone at home
              description: |-
                ## Purpose
                Phones that live in your hand or pocket at home get picked up hundreds of times without a thought. Giving yours a single parking spot, in a hallway or kitchen with a charger, means checking it becomes a small trip rather than a reflex, and the rest of the house becomes somewhere attention can settle.

                ## Milestones
                1. A spot chosen outside the rooms where you relax, with a charger and space for the household's phones.
                2. The phone parked there from an agreed time each evening.
                3. Call and message volume set so you still hear anything urgent from the spot.
                4. Two weeks of evenings with the phone parked, and pick-ups compared with the baseline.
              priority: high
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "The phone is parked at the chosen spot from a set time on at least five evenings a week for a month."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Choose a parking spot away from the sofa and bedroom"
                - "Put a charger and a small tray at the spot"
                - "Agree the evening time the phone goes there"
                - "Set ringtones so urgent calls are audible from the parking spot"
            - name: A first hour of the day without feeds
              description: |-
                ## Purpose
                Reading the news and social feeds before you are out of bed hands the tone of your day to whatever went viral overnight. Keeping the first hour for waking up, eating and planning, with feeds only after a chosen point, is one of the most commonly reported changes among people who manage to scroll less.

                ## Milestones
                1. A clear rule written: no feeds or news until a named point, such as after breakfast or on the train.
                2. A non-phone alarm or a phone alarm that opens to a blank screen.
                3. A replacement first activity chosen, such as a drink by the window or ten pages of a book.
                4. Three weeks of mornings kept to the rule on most days.

                ## Notes
                If you need the phone early for work or caring, open only the one app you need, then put it down.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No feeds or news opened before the chosen point on at least five mornings a week for three consecutive weeks."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Decide the point in the morning when feeds are allowed"
                - "Set the alarm so dismissing it does not land on a feed"
                - "Choose a first activity that does not involve a screen"
                - "Note each morning for three weeks whether the rule held"
            - name: Setting your own daily screen time ceiling
              description: |-
                ## Purpose
                Reducing scrolling with no number in mind leaves you unable to tell a good week from a bad one. Choosing a realistic daily ceiling for leisure phone use, usually a third to a half below your baseline, gives every weekly review a clear yes or no.

                ## Milestones
                1. Work and essential use separated from leisure use in your baseline figures.
                2. A daily ceiling for leisure use chosen, between a third and a half below baseline.
                3. The ceiling written on your reasons page and set as a limit on your device.
                4. A date fixed, six weeks out, to judge whether the ceiling is right.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written daily leisure screen time ceiling, set on your device, with a review date six weeks after setting it."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Split baseline minutes into work, essential and leisure use"
                - "Pick a leisure ceiling a third to a half below the baseline"
                - "Set the ceiling as a device limit and write it on your reasons page"
                - "Put a ceiling review in the calendar six weeks from today"
            - name: Sunday screen time review
              description: |-
                ## Purpose
                Screen time creeps back quietly, usually through one new app or one stressful week. Five minutes on Sunday evening with the weekly report, compared with your ceiling, catches the creep while it is still one app and not a habit again.

                ## Milestones
                1. The weekly report read every Sunday, with the total compared against your ceiling.
                2. Any app that grew by more than half noted with a likely reason.
                3. One small adjustment chosen for the coming week when the ceiling was missed.
                4. Eight weeks of reviews logged in a row.

                ## Notes
                Start from the **Metrics log** template if you did not keep the baseline log. A missed week is information, not a failure.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly screen time compared with your ceiling and logged on at least eight consecutive Sundays."
                cadence: rolling
              tasks:
                - "Find where your phone shows the weekly screen time report"
                - "Check the weekly report and log the total each Sunday evening @recurring(weekly:sun)"
                - "Note any app whose minutes grew by more than half"
                - "Choose one adjustment for the week ahead when the ceiling was missed"
            - name: Two set news windows a day
              description: |-
                ## Purpose
                Checking the news every few minutes rarely makes you better informed; it mainly delivers the same story in twenty slightly more alarming versions. Two fixed windows, for example fifteen minutes at lunch and fifteen in the early evening, keep you informed while letting the rest of the day belong to you.

                ## Milestones
                1. Two daily news windows chosen and written down, each fifteen to twenty minutes.
                2. News apps and sites limited or blocked outside those windows.
                3. Breaking news alerts off except for one trusted emergency or local alert source.
                4. Three weeks with news opened only in the windows on most days.

                ## Notes
                Avoid a news window in the last hour before bed. Keep official emergency alerts for your area switched on.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "News is read only inside two set daily windows on at least five days a week for three consecutive weeks."
                cadence: rolling
              tasks:
                - "Choose two fifteen-minute news windows and write them down"
                - "Block news apps and sites outside those windows"
                - "Turn off breaking news alerts except official emergency alerts"
                - "Read the news only in the two set windows @recurring(daily)"
            - name: Saturday news digest instead of live feeds
              description: |-
                ## Purpose
                Weekly summaries, long reads and printed papers give events time to settle, so you meet the story after the confusion and corrections rather than during them. Replacing part of your daily news checking with one calm weekly read keeps you informed with a fraction of the alarm.

                ## Milestones
                1. One weekly digest chosen, such as a weekly paper, magazine or carefully edited newsletter.
                2. A regular time set aside to read it without the phone nearby.
                3. One daily news source dropped in exchange.
                4. Six weekends of digest reading completed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly news digest read on at least six of eight weekends, with one daily news source dropped in exchange."
                cadence: rolling
              tasks:
                - "Pick one weekly digest from a source you trust"
                - "Unfollow or delete one daily news source in exchange"
                - "Read the weekly digest with a coffee on Saturday morning @recurring(weekly:sat)"
            - name: Monthly feed and follow prune
              description: |-
                ## Purpose
                Feeds fill up with accounts you followed in a passing mood, and the algorithm then adds more like them. A monthly prune of anyone who reliably leaves you angry, anxious or comparing yourself unfavourably keeps what remains closer to what you would actually choose to read.

                ## Milestones
                1. Every account you follow on your most used platform scrolled through once.
                2. Accounts that leave you worse off muted or unfollowed.
                3. Suggested and recommended content turned off or reduced where the platform allows.
                4. Three months of prunes done, each taking under twenty minutes.

                ## Notes
                Muting is quieter than unfollowing when it is a friend or relative.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Follow lists on your main platforms pruned monthly for three months, with suggested content reduced where settings allow."
                cadence: rolling
              tasks:
                - "Scroll your following list and mute the five accounts you dread most"
                - "Turn off suggested posts and recommendations where the platform allows"
                - "Prune follows that leave you anxious, angry or comparing @recurring(monthly:9)"
            - name: Phone-free meals at home
              description: |-
                ## Purpose
                Meals are one of the few daily moments with built-in company and nothing to do but eat, and a phone on the table turns them into another screen session. Keeping phones off the table for the main meal of the day protects twenty to forty minutes of real attention for yourself and anyone you eat with.

                ## Milestones
                1. The meal or meals covered agreed with everyone in the household.
                2. A basket or shelf chosen for phones during the meal.
                3. Exceptions agreed in advance, such as being on call or waiting for news from family.
                4. Four weeks of main meals kept phone free on most days.

                ## Notes
                Eating alone counts too. A book, the radio or simply looking out of the window are all fine.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The main meal of the day is eaten without phones at the table on at least five days a week for four weeks."
                cadence: rolling
              tasks:
                - "Agree with the household which meals are phone free"
                - "Choose a basket or shelf away from the table for phones"
                - "Agree the exceptions in advance, such as being on call"
                - "Put phones in the basket before the evening meal @recurring(daily)"
            - name: One offline evening a week
              description: |-
                ## Purpose
                Short phone-free gaps are useful, but a whole evening without a screen is where attention properly unclenches and you remember what you used to do with evenings. A fixed night each week, with the phone parked and a plan for the time, makes offline normal rather than a special effort.

                ## Milestones
                1. A weekly night chosen and protected in the calendar.
                2. A short list of offline things to do on that night, such as cooking, a class, a board game or a long bath.
                3. Anyone who might need you told how to reach you by call only.
                4. Eight offline evenings completed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight weekly evenings spent with the phone parked and no screens, logged with what you did instead."
                cadence: rolling
              tasks:
                - "Pick a weekly evening and block it in your calendar"
                - "Write a list of ten offline things you enjoy"
                - "Tell close family that calls will still reach you that night"
                - "Park the phone at six and spend the evening offline @recurring(weekly:wed)"
            - name: Monthly analogue afternoon
              description: |-
                ## Purpose
                Spending a few hours out of reach of the phone, doing something with your hands or outdoors, shows how much of the restlessness is the device rather than you. Once a month is easy to fit in, and it builds the evidence that you can be offline for an afternoon without missing anything that mattered.

                ## Milestones
                1. A monthly afternoon chosen and kept clear of other plans.
                2. An analogue activity planned for each, such as a museum, a hike, a craft or a long lunch with a friend.
                3. The phone left at home or switched off in a bag for the whole afternoon.
                4. A line written after each one about what you noticed.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly afternoons of three or more hours spent with the phone off, each followed by a written note."
                cadence: rolling
              tasks:
                - "Choose an afternoon this month and put it in the calendar"
                - "Plan one analogue activity for the afternoon"
                - "Write one line afterwards about what you noticed"
                - "Spend a phone-off afternoon on an analogue activity @recurring(monthly:17)"
            - name: Newsletter and subscription inbox sweep
              description: |-
                ## Purpose
                Inboxes become a second feed when every shop, app and publication you ever touched sends a daily email with a headline designed to be opened. A monthly sweep of senders, unsubscribing from anything you have not opened in a month, turns email back into correspondence.

                ## Milestones
                1. Every marketing and newsletter sender in the last month listed.
                2. Senders not opened in the past month unsubscribed.
                3. Newsletters you value moved to a separate folder or read-later tool.
                4. Promotional email volume down by at least half after three sweeps.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Promotional and newsletter email reduced by half after three monthly sweeps, with kept newsletters filed away from the main inbox."
                cadence: rolling
              tasks:
                - "Search your inbox for unsubscribe to list newsletter senders"
                - "Unsubscribe from every sender you have not opened in a month"
                - "Send kept newsletters to their own folder with a filter"
                - "Unsubscribe from new senders that crept in this month @recurring(monthly:24)"
            - name: Quarterly app audit and uninstall
              description: |-
                ## Purpose
                Phones accumulate apps that were installed for one trip or one craze and then keep sending prompts for years. A quarterly pass through every installed app, deleting what you have not opened in three months and questioning anything that eats time, keeps the device lean.

                ## Milestones
                1. The full list of installed apps reviewed on every device.
                2. Apps not opened in three months deleted.
                3. The top five time users each given a keep, limit or delete decision.
                4. Four quarterly audits completed in a year.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly audits completed in a year, each ending with unused apps deleted and the top five time users decided on."
                cadence: cyclic
              tasks:
                - "Sort installed apps by last used and delete the unused ones"
                - "Give each of the top five time users a keep, limit or delete decision"
                - "Run the full app audit on every phone and tablet @recurring(quarterly)"
            - name: Scroll-free windows habit tracker
              description: |-
                ## Purpose
                Changes in phone habits are easy to overestimate in a good week and to give up on in a bad one. Ticking off the scroll-free windows you meant to keep, such as mornings, meals and the evening park, shows the real trend over a month and which window keeps slipping.

                ## Milestones
                1. The windows you are working on listed as rows in a tracker.
                2. A tick or cross recorded for each window each day.
                3. A weekly tally that names the window most often missed.
                4. One month of tracking completed and the weakest window given a new plan.

                ## Notes
                Start from the **Habit tracker** template. Track at most four windows at once.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A month of daily ticks across up to four scroll-free windows, with the most missed window identified and replanned."
                cadence: rolling
                effort_hours_estimate: "4"
              tasks:
                - "List up to four scroll-free windows as rows in a habit tracker"
                - "Tick or cross each window before you go to bed"
                - "Tally the week and circle the most missed window @recurring(weekly:fri)"
                - "Write a new plan for the weakest window after a month"
            - name: Weekly walk without headphones
              description: |-
                ## Purpose
                Many people now fill every gap with a podcast or playlist, which means attention never gets the unstructured time in which it recovers and ideas surface. A weekly walk of thirty minutes or more with no headphones and the phone away is one of the simplest forms of attention rest there is.

                ## Milestones
                1. A regular day and a route of thirty to sixty minutes chosen.
                2. Headphones left at home and the phone kept in a bag or zipped pocket.
                3. One observation or idea from each walk jotted down afterwards.
                4. Eight walks completed.

                ## Notes
                If walking alone feels unsafe, keep the phone on you and silent rather than leaving it behind.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight walks of at least thirty minutes taken without headphones or phone use, each followed by a one-line note."
                cadence: rolling
              tasks:
                - "Choose a thirty-minute walking route you like"
                - "Leave headphones at home and zip the phone away"
                - "Take a headphone-free walk on Thursday @recurring(weekly:thu)"
                - "Jot down one thing you noticed after each walk"
            - name: Attention reset after a relapse
              description: |-
                ## Purpose
                Almost everyone who cuts down slides back at some point, often after illness, a big news event or a stressful month, and the risk is deciding the whole effort failed. A short reset, going back to the baseline, the trigger map and the two or three changes that worked best, gets you back on track in a week instead of starting over.

                ## Milestones
                1. The slide noticed and named, with a likely cause written down.
                2. A three-day screen time check compared with your ceiling.
                3. The two or three changes that worked best reinstated.
                4. One new safeguard added for the cause of this slide.

                ## Notes
                A relapse often follows a hard stretch. If low mood or worry is behind the scrolling, the sibling areas on mood and anxiety may help more than another blocker.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "After a slide, screen time is back within the ceiling within fourteen days, with the cause named and one new safeguard added."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down when the slide started and what was going on"
                - "Check three days of screen time against your ceiling"
                - "Reinstate the two changes that worked best for you"
                - "Add one safeguard aimed at the cause of this slide"
            - name: How feeds are designed to hold attention
              description: |-
                ## Purpose
                Infinite scroll, autoplay, pull to refresh and unpredictable rewards were each designed to keep you on the page longer, and knowing the mechanics makes the pull feel less like a personal failing. An evening or two of reading on attention design gives you names for the hooks you meet every day.

                ## Milestones
                1. Two or three accessible sources on persuasive design and variable rewards read or watched.
                2. The main hooks in your most used app listed by name.
                3. Each hook matched to a setting or habit that weakens it.
                4. A one-paragraph summary written in your own words.

                ## Notes
                Look for sources by researchers and former designers rather than alarmist articles, which use the same hooks they criticise.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written list naming the attention hooks in your most used app, each paired with a setting or habit that weakens it."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Find two sources on persuasive design by researchers or former designers"
                - "List the hooks you can spot in your most used app"
                - "Match each hook to a setting or habit that weakens it"
                - "Write a paragraph summarising what you learnt"
            - name: Urge surfing for the reach to scroll
              description: |-
                ## Purpose
                The urge to pick up the phone peaks and fades within a minute or two if you neither act on it nor fight it. Practising urge surfing, noticing the pull, describing it and waiting it out, builds a skill that works in queues, at red lights and on the sofa.

                ## Milestones
                1. The urge surfing steps learnt from a reputable source and written on a card.
                2. Ten urges surfed deliberately, each noted with how long it lasted.
                3. The average length of an urge worked out from your notes.
                4. The skill used without the card in a real trigger moment.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten urges to scroll surfed and timed, with the average urge length recorded and the steps used from memory."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read a short guide to urge surfing and copy the steps onto a card"
                - "Time the next ten urges from noticing to fading"
                - "Work out how long your urges usually last"
                - "Use the steps from memory at your top trigger moment"
            - name: Three-question pause before picking up the phone
              description: |-
                ## Purpose
                A few seconds of reflection between reaching for the phone and opening it is often all it takes to turn a reflex into a choice. Asking why now, what for and for how long before each pick-up is a small, portable practice that people tend to keep once it becomes automatic.

                ## Milestones
                1. Three pause questions chosen and set as the lock screen wallpaper.
                2. The pause used on at least half of pick-ups for one week, tallied roughly.
                3. Pick-ups that ended in no app opened noted as wins.
                4. Pick-up count compared with the baseline after three weeks.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Daily pick-ups lower than the baseline average after three weeks of using the three-question pause."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write three pause questions and make them the lock screen wallpaper"
                - "Tally how often you paused before opening the phone for one week"
                - "Compare pick-ups with the baseline after three weeks"
            - name: Rebuilding the habit of long reading
              description: |-
                ## Purpose
                Years of skimming feeds leave many people finding that a book chapter feels like hard work, and they read less as a result. Building back up from fifteen-minute sessions with a book or long article you chose rebuilds sustained attention and gives scrolling time a satisfying replacement.

                ## Milestones
                1. A reading queue of five books or long reads you actually want to read.
                2. Fifteen-minute reading sessions with the phone in another room, three times a week.
                3. Sessions lengthened to thirty minutes without checking the phone.
                4. One book finished cover to cover.

                ## Notes
                Start from the **Reading queue** template. Paper or a dedicated e-reader without other apps works better than reading on the phone.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "One full book finished and reading sessions of thirty minutes held without phone checks on three days a week."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List five books or long reads you genuinely want to read"
                - "Read for fifteen minutes with the phone in another room"
                - "Read from the queue for thirty minutes on Tuesday evening @recurring(weekly:tue)"
                - "Note the date you finish the first book"
            - name: Sitting with boredom without a screen
              description: |-
                ## Purpose
                Phones have erased the small pockets of boredom in queues, waiting rooms and bus stops, and with them the idle mind time where people tend to process the day and have ideas. Deliberately spending a few of those minutes with nothing to look at rebuilds tolerance for an empty moment.

                ## Milestones
                1. Three daily waiting moments named where the phone currently comes out.
                2. Two weeks of keeping the phone away in at least one of those moments each day.
                3. A note made of what your mind did instead.
                4. Boredom rated as less uncomfortable than at the start, in your own words.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "The phone kept away during at least one daily waiting moment for fourteen days, with notes on what filled the time."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Name three waiting moments where your phone comes out"
                - "Keep the phone away in one of them today"
                - "Write down where your mind went instead"
                - "Compare how waiting feels after two weeks"
            - name: Reading headlines built to alarm
              description: |-
                ## Purpose
                Headlines and thumbnails are written to be clicked, and fear, outrage and urgency are the most reliable ways to do it. Learning to spot loaded framing, missing numbers and stories that are mainly reaction to other stories makes it easier to stop reading once you have the facts.

                ## Milestones
                1. The common alarm patterns listed: vague threats, missing base rates, outrage quotes and stories about reactions.
                2. Ten headlines from your feeds rewritten in neutral words.
                3. Two outlets identified that frame the same events more calmly.
                4. A personal rule written for when to stop reading a story.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten real headlines rewritten neutrally and a written stopping rule for news stories, with two calmer outlets named."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Collect ten headlines from your feeds that made you anxious"
                - "Rewrite each one in plain neutral words"
                - "Find two outlets that report the same stories more calmly"
                - "Write a rule for when you stop reading a story"
            - name: Ending the second screen while watching TV
              description: |-
                ## Purpose
                Scrolling through a phone while a film or series plays means neither gets your attention, and the evening ends feeling oddly unrested. Watching one thing at a time, with the phone parked, is a quick way to make leisure screen time feel like rest instead of a fog.

                ## Milestones
                1. How often you use a second screen during TV noted for one week.
                2. The phone parked out of reach when anything is put on to watch.
                3. Viewing chosen in advance rather than browsed while scrolling.
                4. Three weeks of single-screen viewing on most nights.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "On at least five evenings a week for three weeks, TV is watched with the phone parked out of reach."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Count how many evenings this week you scrolled during TV"
                - "Park the phone before pressing play"
                - "Choose what to watch before sitting down"
            - name: A pocket alternative to the scroll
              description: |-
                ## Purpose
                Removing scrolling from a moment without putting something in its place usually means the phone creeps back within a week. Carrying a small, satisfying alternative, such as a paperback, a puzzle book, a notebook or a sketch pad, gives the hand and eye somewhere else to go.

                ## Milestones
                1. Two or three portable alternatives tried for a few days each.
                2. One chosen alternative carried in your usual bag or coat.
                3. The alternative used in place of the phone in your top trigger moment.
                4. Two weeks in which the alternative came out more often than the feed in that moment.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A chosen pocket alternative used instead of the phone in your top trigger moment more often than not for two weeks."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pick three small analogue alternatives to try"
                - "Carry each one for three days and note which you reach for"
                - "Keep the winner in your everyday bag or coat"
            - name: Greyscale and friction settings experiment
              description: |-
                ## Purpose
                Colourful icons and instant loading make feeds effortless to fall into, and small frictions such as greyscale, signing out after each use or a wait screen can cut sessions noticeably for some people. Testing them one at a time for a week each tells you which ones work for you and which only annoy you.

                ## Milestones
                1. Three friction settings chosen to test, such as greyscale, signing out and an app delay.
                2. Each setting run alone for one week with screen time recorded.
                3. The results compared with your baseline.
                4. The settings worth keeping left on and the rest turned off.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three friction settings each tested for a week against the baseline, with a written decision on which to keep."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Find the greyscale shortcut in your phone's accessibility settings"
                - "Test greyscale alone for a week and record screen time"
                - "Test signing out of feed apps after each use for a week"
                - "Keep the settings that cut minutes and switch off the rest"
            - name: Moving social media off the phone
              description: |-
                ## Purpose
                Many people find they can keep social media for what it is good at, such as groups, events and messages, while losing most of the scrolling, simply by using it only on a laptop or in a browser. Removing the apps from the phone makes checking a deliberate act instead of a reflex.

                ## Milestones
                1. The social apps you want off the phone listed, with what you need each one for.
                2. Messaging and event needs covered by another route if possible.
                3. The apps deleted from the phone, with access kept on a laptop or browser.
                4. Four weeks completed and a decision recorded on whether to keep it that way.

                ## Notes
                Log out of the mobile browser too, or the habit simply moves there.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Chosen social apps deleted from the phone for four weeks, with a recorded decision on whether the change stays."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List each social app and the one thing you actually need it for"
                - "Set up another way to get messages or event updates you need"
                - "Delete the apps from the phone and log out of the mobile browser"
                - "Decide after four weeks whether to keep the apps off"
            - name: Leaving or pausing one platform
              description: |-
                ## Purpose
                Sometimes one platform does most of the damage, and limits and pruning are not enough. Deciding deliberately whether to deactivate, pause or leave it, with your photos, contacts and anything important downloaded first, is cleaner than drifting back to it each time you delete the app.

                ## Milestones
                1. The platform that costs you most chosen, with the evidence from your baseline and trigger notes.
                2. What you would lose written down, and alternatives arranged for anything essential.
                3. Your data downloaded and key contacts saved elsewhere.
                4. The account paused or deleted, and a date set to review the decision.

                ## Notes
                Most platforms offer a temporary deactivation. Use it first if you are unsure; deletion is usually permanent after a grace period.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision to pause, leave or keep one named platform, with data downloaded before any change and a review date set."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Name the platform that costs you most and note why"
                - "List what you would lose and how to replace anything essential"
                - "Request a download of your data from the platform"
                - "Pause or delete the account and set a date to review"
            - name: Taming autoplay and endless video
              description: |-
                ## Purpose
                Short video feeds and autoplaying episodes remove every natural stopping point, which is why an evening can disappear in what felt like ten minutes. Turning autoplay off everywhere and keeping a short watchlist means you choose each thing you watch and the end of it is a real decision.

                ## Milestones
                1. Autoplay turned off on every video and streaming service you use.
                2. Short video sections hidden or the apps limited where possible.
                3. A watchlist of things you actually want to see kept in one place.
                4. Evening video time compared with the baseline after three weeks.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Autoplay is off on every service you use and evening video minutes are lower than the baseline after three weeks."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Turn off autoplay in each streaming and video app's settings"
                - "Hide or limit short video feeds where the app allows"
                - "Start a watchlist of things you actually want to see"
                - "Compare evening video minutes with the baseline after three weeks"
            - name: Paid news versus free feeds decision
              description: |-
                ## Purpose
                Free news is paid for by your attention, so it tends to be built for clicks and frequency, while a paid subscription often comes with fewer alerts and a calmer edition format. Comparing two or three options against your budget and news windows lets you decide whether paying is worth it for you.

                ## Milestones
                1. What you want from news written down: depth, local coverage, speed or calm.
                2. Two or three paid and free options compared on format, alerts and cost.
                3. A trial of the favourite completed during your news windows.
                4. A decision recorded to subscribe, stay free or switch sources.

                ## Notes
                Start from the **Purchase decision** template. Look for edition-style apps that publish a fixed number of stories a day.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on paid or free news, made after comparing at least two options and trialling one for two weeks."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down what you want from your news"
                - "Compare two or three sources on format, alerts and cost"
                - "Trial the favourite for two weeks in your news windows"
                - "Record whether you will subscribe, stay free or switch"
            - name: Single-purpose tools that take jobs off the phone
              description: |-
                ## Purpose
                Every time the phone is the only way to check the time, take a photo, listen to music or find a recipe, it is also a way into a feed. Giving two or three of those jobs to simple single-purpose objects, such as a watch, a kitchen timer or a music player, removes dozens of daily pick-ups.

                ## Milestones
                1. A list of everyday jobs the phone does that lead you into feeds.
                2. Two or three jobs chosen to hand to single-purpose tools.
                3. Those tools bought, borrowed or found in a drawer.
                4. Pick-ups compared with the baseline after a month.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least two everyday phone jobs moved to single-purpose tools, with pick-ups compared against the baseline after a month."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the jobs your phone does that lead into a feed"
                - "Choose two jobs to hand to a single-purpose tool"
                - "Find or buy a watch, timer or player for those jobs"
                - "Compare pick-ups with the baseline after a month"
            - name: Minimal or basic phone decision
              description: |-
                ## Purpose
                For people who have tried limits and blockers and keep sliding back, a basic phone or a minimal setup on a second handset can be the change that finally holds. Weighing what you would lose, such as banking apps, maps, two-factor codes and group chats, before buying anything avoids an expensive gadget that ends up in a drawer.

                ## Milestones
                1. Every essential job your smartphone does listed, including banking, authentication and travel.
                2. Options compared: basic phone, minimal launcher, or smartphone kept at home.
                3. A trial of at least two weeks with the cheapest option, such as a minimal launcher.
                4. A decision recorded, with a plan for each essential job.

                ## Notes
                Start from the **Purchase decision** template. Check two-factor sign-in for your bank and work before switching phones.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on a minimal or basic phone, made after a two-week trial, with every essential smartphone job covered."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List every job your smartphone does that you could not lose"
                - "Compare a basic phone, a minimal launcher and a phone kept at home"
                - "Trial the cheapest option for two weeks"
                - "Write down the decision and how each essential job is covered"
            - name: Seventy-two hour digital detox weekend
              description: |-
                ## Purpose
                A long weekend almost entirely offline is the clearest way to feel what attention is like without constant input, and many people report the first day as restless and the third as calm. Planning it properly, with essentials arranged and people told, keeps it from being abandoned on the first evening.

                ## Milestones
                1. A long weekend chosen and cleared of work commitments.
                2. Essentials arranged: printed directions, tickets, a contact number for emergencies.
                3. Family, friends and work told you will be offline, with an emergency route.
                4. Seventy-two hours completed with a short written note on each day.

                ## Notes
                Keep a way for emergencies to reach you, such as a basic phone or a partner's number. Offline should not mean unreachable in a crisis.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Seventy-two consecutive hours without smartphone or computer use completed, with a note written for each of the three days."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick a long weekend and block it in your calendar"
                - "Print directions, tickets and any numbers you will need"
                - "Tell family and work how to reach you in an emergency"
                - "Plan a loose activity for each of the three days"
            - name: An offline holiday plan
              description: |-
                ## Purpose
                Holidays are when attention could rest most, yet many people spend them checking work email, posting photos and reading news from home. Agreeing before you go what the phone is for on this trip, with work handed over and photos saved for later, lets the break be a break.

                ## Milestones
                1. Phone rules for the trip agreed, such as maps, photos and family calls only.
                2. Work handed over with an out of office naming a colleague.
                3. Social and email apps signed out or removed for the trip.
                4. The holiday completed with work email unopened.

                ## Notes
                Start from the **Trip** template. Download offline maps before you leave so navigation does not drag you online.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A holiday completed with work email unopened and social apps signed out, following phone rules agreed before departure."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write three phone rules for your next trip"
                - "Arrange a work handover and set an out of office"
                - "Download offline maps and sign out of social and email apps"
                - "Share the phone rules with anyone travelling with you"
            - name: Thirty-day social media pause
              description: |-
                ## Purpose
                Thirty days is long enough to get past the first itchy week and see what your attention and mood are like without social feeds. Treating it as a dated experiment, with a baseline before and a reflection after, makes the outcome a choice about what to bring back rather than a relapse.

                ## Milestones
                1. Start and end dates set and the platforms included named.
                2. A short before note on mood, sleep and free time written.
                3. Thirty days completed with apps deleted and accounts left logged out.
                4. An after note written and a decision made about which platforms return and how.

                ## Notes
                Tell close friends you are pausing, so silence is not misread.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Thirty consecutive days without the named social platforms, with written before and after notes and a decision on what returns."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Pick a start date and the platforms included in the pause"
                - "Write a short note on your mood, sleep and free time now"
                - "Delete the apps and log out on every device"
                - "Write an after note and decide what comes back"
            - name: News plan for elections and major events
              description: |-
                ## Purpose
                Elections, disasters and big unfolding stories are when doomscrolling peaks, because there is always another update and the stakes feel personal. Deciding in advance how you will follow the event, through which source, at what times and when you will stop, keeps you informed without losing nights to live blogs.

                ## Milestones
                1. The coming event and its key dates noted.
                2. One trusted source chosen for updates, with live blogs and feeds ruled out.
                3. Check times and a stop time for each key day written down.
                4. The event followed to plan, with a short note afterwards on what helped.

                ## Notes
                For a disaster near you, follow official emergency channels for safety information and keep those alerts on.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written news plan for one major event, naming one source, set check times and a stop time, followed through the event."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Note the next major event you expect to follow closely"
                - "Choose one trusted source for updates"
                - "Write your check times and a stop time for each key day"
                - "Note afterwards what helped and what did not"
            - name: Yearly look back at screen time
              description: |-
                ## Purpose
                Monthly numbers wobble with holidays and stressful weeks, but a year shows whether your relationship with the phone has really changed. A yearly review of averages, the changes that stuck and the ones that faded sets the few priorities for the year ahead.

                ## Milestones
                1. Average daily screen time for the year compared with your original baseline.
                2. The changes that stuck and the ones that faded listed.
                3. Hours reclaimed estimated and what they went to described.
                4. Two priorities set for the coming year.

                ## Notes
                Ask the agent to turn your weekly log into a short yearly summary before you sit down to review it.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written yearly review comparing average screen time with the baseline and setting two priorities for the next year."
                cadence: cyclic
                effort_hours_estimate: "2"
              tasks:
                - "Ask the agent to summarise the year's weekly screen time log"
                - "List the changes that stuck and the ones that faded"
                - "Write two priorities for the coming year"
                - "Hold the yearly screen time look back @recurring(yearly)"
            - name: Household device agreement with children
              description: |-
                ## Purpose
                Children copy what adults do with phones far more than what adults say, and rules that apply only to them tend to cause arguments rather than change. A short written agreement covering screen-free times and places for everyone, parents included, makes the house calmer and the rules easier to keep.

                ## Milestones
                1. Current screen habits of every household member noted honestly, adults included.
                2. Screen-free times and places agreed together, such as meals, the car and bedrooms after a set hour.
                3. The agreement written in plain words and put where everyone can see it.
                4. A monthly check-in held at least three times, with changes made as children grow.

                ## Notes
                Ask children what they think adults do wrong with phones. Their answer is often the most useful part of the conversation.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written household device agreement covering adults and children, displayed at home and reviewed in three monthly check-ins."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Note your own screen habits before talking to the children"
                - "Agree screen-free times and places together at a family meal"
                - "Write the agreement up and put it on the fridge"
                - "Hold a family check-in on the device agreement @recurring(monthly:5)"
            - name: Scroll-free study blocks for students
              description: |-
                ## Purpose
                Even face down and silent, a phone on the desk pulls attention away from revision and reading, and a quick check between paragraphs often becomes half an hour. Building study blocks with the phone in another room and a short scheduled break for messages protects focus without cutting you off from friends.

                ## Milestones
                1. A weekly timetable of study blocks of forty-five to ninety minutes.
                2. The phone kept out of the study room during blocks, with a timer used instead.
                3. Short message breaks scheduled between blocks.
                4. Four weeks of study blocks kept, with a note on what was finished in them.

                ## Notes
                If group chats are where study information arrives, check them only in the scheduled breaks.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Four weeks of timetabled study blocks completed with the phone out of the room, and work finished in each block recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Mark this week's study blocks on your timetable"
                - "Get a cheap timer so the phone can stay in another room"
                - "Schedule ten-minute message breaks between blocks"
                - "Note what you finished at the end of each block"
            - name: Work chat boundaries for remote and hybrid workers
              description: |-
                ## Purpose
                When work happens through the same device as everything else, chat pings and social feeds blur together and the working day never quite ends. Separating work apps from personal ones, with set hours for chat notifications and a clear sign-off ritual, gives attention a real end to the day.

                ## Milestones
                1. Work chat and email removed from the personal phone, or put in a separate work profile.
                2. Notification hours for work apps set to your contracted hours.
                3. A sign-off ritual written, such as closing all work tabs and setting your status to away.
                4. Muted and joined channels reviewed monthly for three months.

                ## Notes
                Agree response times with your manager first, so going quiet in the evening is understood rather than questioned.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Work notifications limited to working hours and a sign-off ritual followed on four of five working days for a month."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Set up a work profile or remove work chat from your personal phone"
                - "Set notification hours for work apps to your working hours"
                - "Agree expected response times with your manager"
                - "Review which work channels you have muted and joined @recurring(monthly:28)"
            - name: Rolling news on in the background
              description: |-
                ## Purpose
                Many older adults and people at home during the day keep a twenty-four hour news channel or talk radio on for company, and it can quietly raise anxiety through the same few alarming stories on repeat. Swapping it for a fixed bulletin, music, audiobooks or a phone call with a friend keeps the company without the constant worry.

                ## Milestones
                1. The hours rolling news is on during a typical day noted for one week.
                2. One or two fixed bulletins chosen as the times to catch up.
                3. Alternatives for background company tried, such as music, audiobooks or a regular call.
                4. Rolling news hours halved for four weeks, with mood noted.

                ## Notes
                If the news is your main company, plan the replacement company first, then reduce the news.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Hours of background rolling news halved against a recorded week, kept for four weeks with a fixed bulletin used for catching up."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Note how many hours rolling news is on each day this week"
                - "Choose one or two fixed bulletins to catch up with"
                - "Try music, audiobooks or a phone call in place of rolling news"
                - "Note your mood each evening for the first two weeks"
            - name: Attention rest for carers in waiting rooms and long nights
              description: |-
                ## Purpose
                Carers spend hours in waiting rooms, beside hospital beds and on broken nights, and scrolling is the easiest way to fill them, yet it often leaves them more wired and worn. A small kit of gentler things to do, plus one or two calm apps chosen in advance, gives rest without needing to be unreachable.

                ## Milestones
                1. The settings where you most often scroll as a carer listed.
                2. A small waiting kit put together, such as a paperback, puzzle book, earplugs and a snack.
                3. One or two calm apps chosen for when the phone must stay out, such as audiobooks or a puzzle.
                4. Feeds avoided in at least half of waiting periods for a month.

                ## Notes
                Keep the ringer on for the person you care for and the care team. The aim is gentler use, not being out of reach.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A waiting kit assembled and calm alternatives used instead of feeds in at least half of caring waits for one month."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "List the caring situations where you scroll the most"
                - "Pack a small waiting kit into your usual bag"
                - "Choose one or two calm apps for when the phone must stay out"
                - "Tally waits spent without feeds for one month"
            - name: Boundaries for jobs that require following the news
              description: |-
                ## Purpose
                Journalists, communications staff, policy workers and researchers cannot simply stop reading the news, which makes off-duty scrolling feel like more of the same work. Drawing a firm line between monitoring at work, using work tools and hours, and personal reading gives attention somewhere to rest after the shift.

                ## Milestones
                1. Work monitoring moved to work devices, accounts or browser profiles.
                2. Personal accounts cleared of work-related follows and alerts.
                3. A rota or handover agreed with colleagues for out of hours monitoring.
                4. Four weeks of evenings with no work news on personal devices.

                ## Notes
                Ask the agent to draft a short note to colleagues proposing an out of hours monitoring rota.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Work news monitoring confined to work devices or profiles, with a monitoring rota agreed and four weeks of work-news-free evenings kept."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Set up a separate work browser profile or device for monitoring"
                - "Unfollow work-related accounts on your personal profiles"
                - "Ask the agent to draft a proposal for an out of hours monitoring rota"
                - "Agree the rota with your team"
            - name: Limiting exposure to graphic footage
              description: |-
                ## Purpose
                Repeated viewing of violent or distressing footage, from wars, disasters or crimes, is linked with higher distress even for people far from the events. Setting your devices to block autoplaying graphic content, and deciding in advance that you read about such events rather than watch them, protects your attention and your nights.

                ## Milestones
                1. Sensitive content filters switched on in every social and video app that offers them.
                2. Autoplay of video turned off in social feeds.
                3. A personal rule written: read reports rather than watch footage, unless there is a reason to watch.
                4. A plan noted for what to do after seeing something upsetting, such as stepping away and talking to someone.

                ## Notes
                If footage keeps replaying in your mind, disturbs sleep for more than a couple of weeks, or relates to something you lived through, talk to your doctor or a mental health professional.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Sensitive content filters and autoplay settings changed in every app that offers them, with a written personal rule about graphic footage."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Turn on sensitive content filters in each social and video app"
                - "Switch off video autoplay in social feeds"
                - "Write your rule for reading rather than watching distressing events"
                - "Note what you will do after seeing something upsetting"
            - name: Building your own information diet
              description: |-
                ## Purpose
                Algorithmic feeds decide what you see and how often, while a reader you set up yourself shows only sources you chose, in order, with an end. Moving your regular reading into an RSS reader and a read-later list is the specialist step that replaces browsing with a short, finite set of things you actually read.

                ## Milestones
                1. An RSS reader and a read-later tool chosen.
                2. Fifteen to thirty trusted sources added, covering news, interests and work.
                3. Feed sites replaced by the reader for daily reading for a month.
                4. The read-later list kept at ten items or fewer.

                ## Notes
                Fewer sources read properly beat many skimmed. If the reader starts to feel like a feed, cut sources until it does not.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An RSS reader holding fifteen to thirty chosen sources, used as the main daily reading tool for a month, with read-later kept to ten items."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Choose an RSS reader and a read-later tool"
                - "Add fifteen to thirty sources you trust"
                - "Use the reader instead of feed sites for a month"
                - "Clear the read-later list down to ten items @recurring(monthly:15)"
            - name: Running a phone-free challenge with friends
              description: |-
                ## Purpose
                Changing phone habits alone is hard when everyone around you is still messaging and posting, and a shared challenge turns it into something social. Organising a small group of friends, colleagues or neighbours through a four-week challenge, with a weekly check-in and a meet-up at the end, helps you and them at the same time.

                ## Milestones
                1. Four to ten people signed up, with one shared goal such as two offline evenings a week.
                2. A simple rule sheet and start date shared with the group.
                3. A weekly check-in held, in person or by a short message.
                4. An end-of-challenge meet-up held where people share what changed.
              priority: low
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "A four-week phone-free challenge completed by a group of at least four people, with weekly check-ins and a closing meet-up."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Invite four to ten friends to a four-week phone-free challenge"
                - "Write a one-page rule sheet with a shared goal"
                - "Check in with the group each Monday @recurring(weekly:mon)"
                - "Book a meet-up for the end of the challenge"
---

# Doomscrolling & Attention Rest

This area is for anyone who picks up the phone to check one thing and surfaces forty minutes later feeling worse, or who keeps rolling news open all day out of a vague sense of duty. It starts with the foundations (a screen time baseline, your scroll triggers, a notification cull, a quieter home screen and a parking spot for the phone), then the weekly and monthly routines that keep feeds and news in their place, the skills of sitting with an urge and reading long form again, the decisions about platforms, phones and paid news, the detox weekends and offline holidays worth planning, versions for parents, students, remote workers, older adults, carers and people whose jobs require the news, and finally the specialist work of building your own information diet.

What repeats is a Sunday look at the screen time report, two set news windows a day, a Saturday digest, a weekly offline evening and headphone-free walk, a monthly feed prune and inbox sweep, a quarterly app audit and a yearly look back at the whole year. The Metrics log, Purchase decision, Habit tracker, Reading queue and Trip templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
