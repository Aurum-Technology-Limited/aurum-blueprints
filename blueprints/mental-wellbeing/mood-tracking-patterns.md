---
id: mental-wellbeing.mood-tracking-patterns
name: Mood Tracking & Patterns
description: "A daily mood and energy log you will actually keep, reviews that turn entries into patterns, your personal early warning signs, and small experiments that show what lifts or drains you."
category: personal
version: 1.0.0
tags: [mental-wellbeing, mood-tracking-patterns, everyone, mood-log, energy, early-warning-signs, self-experiments, patterns]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - metrics-log
    - habit-tracker
  pillars:
    - name: Mental & Emotional Wellbeing
      emoji: "🧘"
      description: "The inner weather: managing stress and anxiety, recovering from burnout, therapy and support, rest and attention, mood and emotional skills, and the routines that keep a mind steady when life is not."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Mood Tracking & Patterns
          description: "Recording daily mood, energy and events to spot patterns, early warning signs and the activities that lift or drain you."
          projects:
            - name: Three questions your mood log should answer
              description: |-
                ## Purpose
                People who start tracking without a question usually stop within a month, because the entries pile up with nothing to look for. Writing down the two or three things you want the log to tell you, such as why some weeks feel flat or what tends to come before a bad patch, decides which fields you need and makes every review worth doing.

                ## Milestones
                1. Up to three questions written in plain words at the front of the log.
                2. Each question linked to the one or two fields that could answer it.
                3. A date set for when you expect enough entries to try answering them.
                4. Fields that answer none of the questions left out.

                ## Notes
                Good questions are about patterns over weeks, not single days. Asking why one Tuesday was bad is rarely answerable; asking what your worst weeks have in common usually is.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written list of no more than three questions sits at the front of the log, each matched to the fields that will answer it."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write down what made you want to start tracking mood now"
                - "Turn that reason into no more than three questions"
                - "Note which fields each question needs, such as energy or hours slept"
                - "Pin the questions to the first page of the log"
            - name: Choosing a mood tracking tool
              description: |-
                ## Purpose
                Paper notebooks, spreadsheets and dedicated apps each suit different people, and the best tool is the one you will open every evening for a year. Comparing three options on speed of entry, export, privacy and cost before you commit saves you losing months of history to an app you abandon.

                ## Milestones
                1. Three options shortlisted, including at least one paper or spreadsheet option.
                2. Each option scored on entry time, export format, data storage and price.
                3. One tool chosen and tried for five days.
                4. The choice and the reason for it written in the log.

                ## Notes
                Start from the **Purchase decision** template. Check that an app can export your full history as a file before entering a single day; some only export summaries.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One tool chosen after scoring three options on the same four criteria, with a test export confirmed to open."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List three tracking tools you would realistically use, including one on paper"
                - "Time how long a full entry takes in each option"
                - "Run a test export from each app and open the file"
                - "Record the tool you chose and why"
            - name: Personal mood scale with written anchors
              description: |-
                ## Purpose
                A 7 on a mood scale means nothing unless you know what your 7 looks like, and without anchors the same day can be scored a 5 or a 7 depending on how the evening went. Writing one sentence for each point on the scale keeps scores comparable across months and makes charts meaningful.

                ## Milestones
                1. A scale chosen, such as 1 to 10 or minus 5 to plus 5.
                2. A one-sentence description written for the bottom, middle and top, and ideally every point.
                3. The anchors kept beside the entry screen or on the first page of the notebook.
                4. Two weeks of scores given against the anchors without changing them.

                ## Notes
                Keep the scale once chosen. Switching from a 10-point to a 5-point scale halfway through makes older data hard to compare.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every point on your chosen mood scale has a written one-sentence description, used unchanged for at least two weeks."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Choose the range of your mood scale and commit to it"
                - "Write what a typical day at the bottom, middle and top feels like"
                - "Fill in a sentence for each remaining point"
                - "Keep the anchors where you will see them while scoring"
            - name: Five-field daily check-in design
              description: |-
                ## Purpose
                Most mood logs fail by asking too much, and a check-in longer than a minute rarely survives a busy week. Settling on about five fields, typically mood, energy, anxiety or tension, hours slept and one line on what happened, captures enough to find patterns while staying quick enough to do on a bad day.

                ## Milestones
                1. Five or fewer fields chosen, each tied to one of your three questions.
                2. Each field given a fixed scale or format.
                3. A test entry completed in under sixty seconds.
                4. The template set up in your chosen tool.

                ## Notes
                Start from the **Metrics log** template. A field you would only fill in on good days is worse than no field, because the gaps bias the picture.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A check-in template with no more than five fields exists in your tool, and a full entry takes under a minute."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Draft the fields you want and cut the list to five"
                - "Give each field its scale or format"
                - "Time a full test entry and trim until it takes under a minute"
                - "Set the template up in your tracking tool"
            - name: Event and activity tag list
              description: |-
                ## Purpose
                Patterns only appear when the same thing is recorded the same way each time: a log that says gym, workout and exercise on three different days hides the link between movement and mood. A short fixed list of tags for the things that tend to matter to you, such as exercise, alcohol, conflict, time outdoors, social contact and work stress, makes later counting possible.

                ## Milestones
                1. Ten to fifteen tags chosen, each with a one-line definition.
                2. Tags split into likely lifts and likely drains, as a starting guess.
                3. The list set up as quick picks in your tool or printed inside the notebook.
                4. A rule written for when a new tag may be added.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A list of ten to fifteen defined tags is set up in your tracking tool and used in every entry for a month."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write down ten things you suspect affect your mood"
                - "Give each one a short tag and a one-line definition"
                - "Mark each tag as a likely lift or a likely drain"
                - "Add the tags as quick picks in your tracking tool"
            - name: Privacy and storage plan for mood records
              description: |-
                ## Purpose
                Mood logs can hold some of the most personal information you own, and many wellbeing apps share usage data with third parties or keep it on servers you know nothing about. Deciding where the data lives, who can see it and how it is protected, before it builds up, avoids an awkward clean-up later.

                ## Milestones
                1. The privacy policy of your chosen tool read for data sharing, storage location and deletion.
                2. A passcode, lock or encryption set on the device or file.
                3. A decision recorded on who, if anyone, may see the log.
                4. A plan written for deleting or keeping the data if you stop tracking.

                ## Notes
                If you share a device or cloud account with family, check whether the log syncs somewhere they can open.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written note records where the mood data is stored, how it is locked, who may see it and what happens to it if you stop."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read the data sharing section of your tool's privacy policy"
                - "Turn on a passcode or file lock for the log"
                - "Check whether the log syncs to any shared account"
                - "Write down who may see the log and in what circumstances"
            - name: Rules for missed days and back-filling
              description: |-
                ## Purpose
                Gaps are normal, and the risk is not a missed day but the guilt that turns one missed day into a missed month. Deciding in advance how far back you may fill in, and how to mark days you cannot remember, keeps the record honest and makes restarting easy.

                ## Milestones
                1. A back-fill limit set, for example up to 24 hours.
                2. A marker chosen for days left blank on purpose.
                3. A restart rule written: after a gap, start again today with no catching up.
                4. The rules noted on the first page of the log.

                ## Notes
                Memory of mood is unreliable after a day or two and drifts toward how you feel now, so late entries can show patterns that were never there.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Written rules for back-filling and blank days sit on the first page of the log and have been applied to at least one gap."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Decide how many hours late an entry may still be made"
                - "Choose a marker for days you leave blank"
                - "Write a one-line restart rule for after a gap"
                - "Copy the rules onto the first page of the log"
            - name: Low-score rule written into the log
              description: |-
                ## Purpose
                A mood log will sometimes show a run of very low days before you have consciously noticed it, and that is the moment it should prompt action rather than just another entry. Writing a simple rule, agreed if possible with your doctor or therapist, for what a run of low scores means and who you contact turns the log into a safety net.

                ## Milestones
                1. A threshold written, such as three days in a row at or below a set score.
                2. The person or service to contact when the threshold is met named.
                3. Your local crisis line or emergency number written beside the rule.
                4. The rule shown to a clinician or a trusted person.

                ## Notes
                If you ever have thoughts of harming yourself, contact emergency services or a crisis line straight away; do not wait for a pattern to appear in the log. A full crisis safety plan is separate work worth doing alongside this.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written low-score rule naming a threshold, a contact and an emergency number sits on the first page of the log."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Choose the score and number of days in a row that would worry you"
                - "Name who you will contact when that happens"
                - "Write your local crisis line number beside the rule"
                - "Show the rule to your doctor, therapist or a trusted person"
            - name: Two-week mood baseline
              description: |-
                ## Purpose
                Before you change anything, it helps to know what ordinary looks like: your usual score, your usual range and how much a weekend differs from a weekday. Fourteen days of plain recording, with no experiments and no judgement, gives the baseline every later comparison depends on.

                ## Milestones
                1. Fourteen consecutive daily entries, or at least twelve of fourteen.
                2. Average mood and energy worked out.
                3. Highest and lowest days noted with their tags.
                4. A one-paragraph description of your normal range written.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Fourteen days of entries summarised as an average, a range and a short written description of your normal."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Mark the start date of the baseline fortnight in the log"
                - "Record every day for fourteen days without starting any changes"
                - "Work out the average and range for mood and energy"
                - "Write a short paragraph describing your normal range"
            - name: Daily mood and energy check-in
              description: |-
                ## Purpose
                Once the format is set, the value comes from repetition: a year of daily entries shows seasons, cycles and triggers that no single week can. Tying the check-in to something you already do every evening, such as brushing your teeth or plugging in your phone, makes it automatic.

                ## Milestones
                1. A fixed time and an existing habit chosen as the trigger.
                2. A reminder set on your phone or a notebook kept by the bed.
                3. Thirty entries completed in the first five weeks.
                4. The check-in still running at three months.

                ## Notes
                Start from the **Habit tracker** template. Evening entries capture the whole day; if evenings are chaotic, a fixed lunchtime entry about the previous day also works, as long as you keep to one.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least 25 check-ins recorded in each of three consecutive months."
                cadence: rolling
              tasks:
                - "Pick the existing evening habit your check-in will follow"
                - "Set a daily reminder at that time"
                - "Complete your mood and energy check-in @recurring(daily)"
                - "Count the month's entries and note what got in the way on missed days"
            - name: Weekly pattern review
              description: |-
                ## Purpose
                Entries left unread are just a diary. Ten minutes each weekend looking at the week's scores beside its tags shows which days dipped, what surrounded them and whether anything is shifting, while the details are still fresh.

                ## Milestones
                1. A fixed weekend slot for the review.
                2. Each review naming the best and worst day and what was tagged on each.
                3. One line written on anything that looks like a pattern.
                4. Eight consecutive weekly reviews completed.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weekly reviews, each naming the best and worst day and one possible pattern."
                cadence: rolling
              tasks:
                - "Block ten minutes on Sunday for the review"
                - "Compare the week's best and worst days and their tags @recurring(weekly:sun)"
                - "Write one line on anything that has shown up two weeks running"
            - name: Monthly mood summary and chart
              description: |-
                ## Purpose
                Weekly views show swings; monthly views show direction. A short summary early each month, with the average, the range, the number of low days and a simple line chart, lets you see whether things are improving, holding or slipping.

                ## Milestones
                1. A summary layout with average, range, low-day count and chart.
                2. The first monthly summary completed.
                3. Each month compared against the one before.
                4. Six monthly summaries in a row.

                ## Notes
                A 7-day rolling average line is easier to read than daily dots, which jump around.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly summaries, each with average, range, count of low days and a chart."
                cadence: rolling
              tasks:
                - "Set up a summary page with average, range and low-day count"
                - "Produce last month's summary and chart @recurring(monthly:3)"
                - "Write one sentence comparing this month with last"
            - name: Quarterly pattern report
              description: |-
                ## Purpose
                Three months is long enough for slower patterns to show: a dip every few weeks, a drift after a change at work, the effect of shorter days. A one-page quarterly report pulls the monthly summaries together and is the version worth showing a clinician or keeping for next year.

                ## Milestones
                1. Three monthly summaries laid side by side.
                2. The two or three clearest patterns written as plain statements.
                3. One question carried forward to the next quarter.
                4. The report filed where you can find it next year.

                ## Notes
                Ask the agent to draft a first version from your monthly summaries, then check every claim against the entries yourself.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A one-page report for each quarter naming at least two patterns and one open question."
                cadence: cyclic
              tasks:
                - "Gather the last three monthly summaries in one place"
                - "Write the quarter's one-page pattern report @recurring(quarterly)"
                - "Choose one question to watch next quarter"
            - name: Before and after ratings for planned activities
              description: |-
                ## Purpose
                Memory is a poor judge of what helps: a walk you nearly skipped can lift your mood more than the film you were looking forward to. Rating mood just before and an hour after one planned activity each week builds hard evidence about what actually lifts or drains you.

                ## Milestones
                1. A simple before and after rating format added to the log.
                2. One activity a week rated on both sides.
                3. Twelve rated activities collected.
                4. The activities ranked by average change in mood.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve activities rated before and after, ranked by average change in mood."
                cadence: rolling
              tasks:
                - "Add before and after columns to the log"
                - "Choose this week's activity to rate before and an hour after @recurring(weekly:wed)"
                - "Rank the rated activities by average change after twelve weeks"
            - name: Sleep hours beside mood
              description: |-
                ## Purpose
                Short or broken nights are among the commonest reasons for a low day, and the effect sometimes shows the day after next rather than the next morning. Recording hours slept and a one-word quality note alongside each entry lets you see how much your mood actually depends on sleep.

                ## Milestones
                1. Hours slept and a quality word added to each entry.
                2. One month of paired sleep and mood data.
                3. Mood on days after short nights compared with the rest.
                4. The finding written in one sentence.

                ## Notes
                This project records sleep to explain mood. Changing your evening routine belongs with your sleep work.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A month of entries with hours slept, and a written comparison of mood after short and normal nights."
                cadence: rolling
              tasks:
                - "Add hours slept and a one-word quality field to the check-in"
                - "Decide what counts as a short night for you"
                - "Compare mood after short nights with the rest of the month @recurring(monthly:11)"
            - name: Monthly backup of the mood log
              description: |-
                ## Purpose
                Phones get lost, apps close down and subscriptions lapse, and years of entries can vanish with them. Exporting the full log once a month to a file you control, stored somewhere private, protects the history that makes the patterns visible.

                ## Milestones
                1. An export format chosen that opens without the app, such as CSV.
                2. A private storage location agreed, matching your privacy plan.
                3. Monthly exports saved for six months.
                4. One old export reopened outside the app to prove it works.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly exports saved to a private location, with one opened successfully outside the app."
                cadence: rolling
              tasks:
                - "Find the export option in your tracking tool"
                - "Create a private folder for exports"
                - "Export the full log and save it with the date in the file name @recurring(monthly:19)"
                - "Open an old export to check it is still readable"
            - name: Mood year in review
              description: |-
                ## Purpose
                Twelve months of entries hold patterns nobody spots week to week: the month that is always hard, the summer lift, the stretch after a holiday that never quite recovered. A yearly review on a fixed date, comparing this year with the last, turns the log into self-knowledge you can plan around.

                ## Milestones
                1. Twelve monthly averages charted on one page.
                2. The best and hardest months named, with what surrounded them.
                3. Year-on-year differences noted once two years of data exist.
                4. Two plans for next year written from what the year showed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A yearly review with twelve monthly averages, named best and hardest months and two plans for the year ahead."
                cadence: cyclic
              tasks:
                - "Choose a fixed date each year for the review"
                - "Chart the twelve monthly averages on one page @recurring(yearly)"
                - "Compare this year with last year where the data exists"
                - "Write two plans for the coming year from what you found"
            - name: Reading your mood chart beyond the average
              description: |-
                ## Purpose
                Two months with the same average can feel completely different if one was steady and the other swung from 2 to 9. Learning to read average, range, variability and streaks of low days gives you a vocabulary for what the chart is showing and what to tell a clinician.

                ## Milestones
                1. Average, range, variability and streak length each explained in your own words.
                2. All four worked out for your last month.
                3. One month found where the average hid something important.
                4. A note on which measure you will watch most closely.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Average, range, variability and longest low streak calculated for one month and explained in a written note."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read a short guide to averages, ranges and standard deviation"
                - "Calculate all four measures for last month"
                - "Find the longest run of low days and note what surrounded it"
                - "Write which measure tells you most about your mood"
            - name: Mood, energy and anxiety as separate measures
              description: |-
                ## Purpose
                Low mood, low energy and high anxiety often travel together but not always, and folding them into one score hides useful detail: a tired but content week needs something different from a wired and miserable one. Understanding how the measures differ, and scoring them separately, makes patterns sharper.

                ## Milestones
                1. Each measure defined in a sentence of your own.
                2. A month of entries with all three scored separately.
                3. Days where they moved in different directions highlighted.
                4. A note on what those split days had in common.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A month of separate mood, energy and anxiety scores, with the days they diverged listed and explained."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write your own one-sentence definition of mood, energy and anxiety"
                - "Check that your check-in scores all three separately"
                - "Highlight days where the three moved in different directions"
                - "Note what the split days had in common"
            - name: Correlation, coincidence and cause in personal data
              description: |-
                ## Purpose
                It is easy to see a pattern in thirty days of data that is really chance, or to blame the coffee when the real cause was the short night that led to the coffee. Learning the basics of correlation, confounding and sample size stops you rebuilding your life around a coincidence.

                ## Milestones
                1. Correlation, confounding and chance explained in your own words.
                2. One apparent pattern in your log checked for a hidden third factor.
                3. A rule of thumb written for how many instances you need before believing a pattern.
                4. One past conclusion revisited and confirmed or dropped.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written rule of thumb for trusting a pattern, applied to at least one conclusion drawn from your own log."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read an introductory explanation of correlation and confounding"
                - "Pick one pattern you believe and list what else changed on those days"
                - "Write your rule for how many instances make a pattern believable"
                - "Revisit one earlier conclusion against the rule"
            - name: Spotting delayed effects in your mood data
              description: |-
                ## Purpose
                Some influences hit the same day, while others land a day or two later: a late night, a heavy drinking session or a hard conversation may show up as a flat Thursday rather than a bad Tuesday. Learning to compare tags with scores one and two days later reveals links that same-day reviews miss.

                ## Milestones
                1. Three tags chosen to test for delayed effects.
                2. Average mood on the same day, one day after and two days after each tag compared.
                3. Any delay that shows up written down.
                4. The weekly review updated to look back two days.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three tags compared at same-day, next-day and two-day delays, with the results written down."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Pick three tags you suspect have a delayed effect"
                - "List mood scores for the day after and two days after each tag"
                - "Compare those scores with your usual average"
                - "Add a two-day look back to the weekly review"
            - name: Writing context notes that help later
              description: |-
                ## Purpose
                Notes like rubbish day are useless in three months; notes like slept five hours, argued about money, skipped lunch explain the score. Practising short, factual notes about what happened rather than how bad it felt makes reviews faster and patterns easier to spot.

                ## Milestones
                1. Three examples each of useful and useless notes written for reference.
                2. A note limit chosen, such as one line or fifteen words.
                3. Two weeks of notes written to the new standard.
                4. One older month reread to see which notes still made sense.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two weeks of context notes meeting your written standard, checked by rereading an older month."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write three examples each of useful and useless notes"
                - "Set a word limit for daily notes"
                - "Reread one week of notes from a month ago and mark the unclear ones @recurring(monthly:22)"
                - "Rewrite your note examples after the first month"
            - name: Personal early warning signs list
              description: |-
                ## Purpose
                Most people have a recognisable signature before a hard patch: sleep shifts, cancelled plans, more snacking, energy falling a week before mood does. Going back through your log and memory to name your own four to six signs gives you, and the people close to you, something concrete to watch for.

                ## Milestones
                1. Two or three past hard patches identified in the log or from memory.
                2. The fortnight before each one examined for changes.
                3. Four to six warning signs written as observable behaviours.
                4. The list shared with a clinician or trusted person, if you choose.

                ## Notes
                Write signs as things you could see or count, such as cancelling two plans in a week, rather than as feelings.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written list of four to six observable warning signs, each traced back to at least one past hard patch."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Mark two or three past hard patches in the log or on a timeline"
                - "List what changed in the fortnight before each one"
                - "Turn the repeated changes into four to six observable signs"
                - "Decide whether to share the list and with whom"
            - name: Monthly early warning sign check
              description: |-
                ## Purpose
                Early warning signs only help if someone looks for them. A monthly read of your warning list against the last four weeks of entries catches a slow slide, such as shorter sleep, fewer social tags and lower energy, before it becomes a hard month.

                ## Milestones
                1. Your warning sign list placed at the top of the monthly review.
                2. Each sign marked present or absent for the month.
                3. An agreed action for when two or more signs are present.
                4. Six monthly checks completed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly checks, each marking every warning sign present or absent, with action taken whenever two or more appeared."
                cadence: rolling
              tasks:
                - "Put your warning sign list at the top of the monthly review page"
                - "Mark each warning sign present or absent for the past month @recurring(monthly:25)"
                - "Write the step you will take when two or more signs show"
            - name: One-week experience sampling study
              description: |-
                ## Purpose
                Scoring once each evening smooths over the day; researchers often prompt people several times a day at random to catch mood in the moment. Running your own week of random prompts shows how much your mood moves within a day and what you were doing at the highs and lows.

                ## Milestones
                1. Five random alarms a day set for seven days.
                2. A three-question prompt card ready: mood, activity, who you were with.
                3. At least 25 prompts answered across the week.
                4. The highest and lowest moments compared by activity and company.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "At least 25 in-the-moment entries over seven days, summarised by activity and company."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Set five random alarms a day for one week"
                - "Write a three-question prompt card"
                - "Answer each prompt within a few minutes of the alarm"
                - "Sort the entries by activity and company and compare scores"
            - name: Lift list built from your own data
              description: |-
                ## Purpose
                When mood drops, choosing something helpful is hardest exactly when it matters most. A list of the ten activities your own records show tend to raise your score, ordered from smallest effort to largest, means the next low day starts with a choice already made.

                ## Milestones
                1. Tags and rated activities ranked by average lift in mood.
                2. Ten activities listed, from two minutes to half a day.
                3. The list kept on your phone and inside the log.
                4. The list refreshed each quarter from new data.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A list of ten data-backed lifting activities, ordered by effort, refreshed at least once a quarter."
                cadence: cyclic
              tasks:
                - "Rank your tags by their average effect on mood"
                - "Pick ten lifting activities spread from tiny to large effort"
                - "Save the list somewhere on your phone you can reach in two taps"
                - "Refresh the lift list from the last quarter of data @recurring(quarterly)"
            - name: Drain audit with one change per drain
              description: |-
                ## Purpose
                Draining activities and situations often matter more than lifting ones because they are woven into the week: a commute, a weekly meeting, a tiring friendship. Naming the three biggest drains your log shows, and testing one small change for each, is often the fastest way to raise the monthly average.

                ## Milestones
                1. The three tags most linked to lower scores identified.
                2. One realistic change chosen for each, such as moving, shortening or buffering it.
                3. Each change tried for four weeks.
                4. Before and after averages compared and each change kept or dropped.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three drains named from the log, each with a four-week change tested and a keep or drop decision recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Find the three tags linked to your lowest average scores"
                - "Choose one small change for each drain"
                - "Run each change for four weeks"
                - "Compare averages before and after and record what you will keep"
            - name: Caffeine and alcohol next-day mood experiment
              description: |-
                ## Purpose
                Alcohol commonly lowers mood and raises anxiety the following day, and late caffeine can cost sleep that shows up as a flat afternoon, but the size of the effect varies from person to person. Logging drinks for a month and comparing next-day scores tells you what the effect is for you.

                ## Milestones
                1. Afternoon caffeine and alcohol units added as fields.
                2. A month of entries with both recorded.
                3. Next-day mood and anxiety compared for drink and no-drink days.
                4. A personal rule written from the results, if any is warranted.

                ## Notes
                If you are worried about how much you drink, speak to your doctor. This experiment is for noticing effects, not for managing dependence.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A month of caffeine and alcohol records, with next-day mood compared and any personal rule written down."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Add fields for afternoon caffeine and alcohol units"
                - "Record both every day for a month"
                - "Compare next-day mood and anxiety on drink and no-drink days"
                - "Write any personal rule the results support"
            - name: Movement and mood experiment
              description: |-
                ## Purpose
                Exercise is widely reported to help mood, but which kind, how much and at what time of day works for you is something only your own data can show. Logging minutes and type of movement for six weeks, then comparing same-day and next-day scores, turns a general claim into a personal finding.

                ## Milestones
                1. Movement minutes and type added to the check-in.
                2. Six weeks of records collected.
                3. Mood compared on active and inactive days, and by type of activity.
                4. One finding acted on, such as a walk on days that start with a low score.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Six weeks of movement and mood data compared, with one personal finding written down and acted on."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Add movement minutes and type to the check-in"
                - "Record movement daily for six weeks"
                - "Compare mood on active and inactive days"
                - "Choose one change to make based on the result"
            - name: Social contact and mood check
              description: |-
                ## Purpose
                Some people's mood tracks closely with time spent with others, while others need recovery time after social days. Tagging contact as in person, call or message for a month shows whether you need more company, less, or a different kind.

                ## Milestones
                1. Contact tags defined: in person, phone or video, messages only, none.
                2. A month of tagged entries.
                3. Same-day and next-day mood compared across contact types.
                4. One sentence written on the contact level that suits you.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A month of contact-tagged entries compared, with a written statement of the contact pattern that suits you."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Define four contact tags from in person to none"
                - "Tag every entry with the day's contact type for a month"
                - "Compare same-day and next-day mood across the types"
                - "Write a sentence on the contact level that suits you"
            - name: Workdays versus days off comparison
              description: |-
                ## Purpose
                If your mood is consistently lower on workdays, or oddly lower on days off, that tells you something useful about where your weeks are going wrong. Splitting a quarter of entries by day type gives a clear comparison you can act on or take to a conversation about workload.

                ## Milestones
                1. Each entry from the last three months marked as workday or day off.
                2. Average mood and energy calculated for each type.
                3. The day of the week with the lowest average found.
                4. One change considered for the hardest day.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Average mood and energy for workdays and days off over three months calculated, and the hardest weekday named."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Mark each of the last 90 entries as workday or day off"
                - "Calculate average mood and energy for each type"
                - "Find the weekday with the lowest average"
                - "Note one change you could try on that day"
            - name: Trimming a tracker that has become a chore
              description: |-
                ## Purpose
                Trackers grow: a field for water, one for screen time, a gratitude box, until the check-in takes five minutes and stops happening. A firm trim, keeping only fields that have answered a question or fed a review in the last three months, gets entries back to under a minute.

                ## Milestones
                1. Every field listed with the last time it informed a review.
                2. Fields unused for three months removed or archived.
                3. Entry time back under a minute.
                4. Entry rate compared for the month before and after.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The check-in cut to fields used in the last three months, with entry time under a minute and entry rate compared before and after."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every field and when it last fed a review"
                - "Remove or archive fields unused for three months"
                - "Time a full entry after the trim"
                - "Compare how many days were logged before and after"
            - name: Moving mood history to a new tool
              description: |-
                ## Purpose
                Switching apps is the most common way people lose years of mood data, because exports and imports rarely match. Mapping old fields to new ones, converting the scale if it differs and checking a sample of days afterwards keeps the history continuous.

                ## Milestones
                1. A full export taken from the old tool.
                2. Old fields and scales mapped to the new ones in a table.
                3. History imported or kept as a linked archive file.
                4. Ten random days checked in both places.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Full mood history available in or beside the new tool, with ten random days checked against the original."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Export the full history from the old tool"
                - "Write a table mapping old fields and scales to new ones"
                - "Import the history or save it as an archive next to the new log"
                - "Check ten random days in both places"
            - name: Adding wearable data to the mood log
              description: |-
                ## Purpose
                Watches and rings now record steps, sleep stages and heart rate variability, and it is tempting to pull all of it in. Deciding which one or two measures actually relate to your questions, and whether a device is worth buying for them, avoids drowning a simple log in numbers.

                ## Milestones
                1. Your three questions checked for any a wearable measure could help answer.
                2. One or two measures chosen, or a decision recorded not to add any.
                3. If buying, two devices compared on export options and cost.
                4. Any chosen measure placed alongside a month of entries.

                ## Notes
                Start from the **Purchase decision** template if a device is involved. Consumer wearables estimate sleep and stress; treat them as rough signals, not measurements.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on which wearable measures, if any, to add, with any device chosen on export options and cost."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check which of your questions a wearable measure could help answer"
                - "List the measures your device or a candidate device can export"
                - "Decide on one or two measures, or none"
                - "Place the chosen measure beside a month of entries"
            - name: Mood summary for a doctor or therapist appointment
              description: |-
                ## Purpose
                Appointments are short and memory under pressure is poor, so many people describe the last two days rather than the last two months. A one-page summary with the chart, the low-day count, your warning signs and two or three questions gives a clinician real information in two minutes.

                ## Milestones
                1. The chart and key numbers since the last appointment on one page.
                2. Notable events and any changes to routine listed.
                3. Two or three questions written at the bottom.
                4. The clinician's response and any agreed actions recorded afterwards.

                ## Notes
                Ask the practice in advance whether they prefer the summary printed, emailed or shown on screen.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A one-page mood summary taken to an appointment, with the clinician's response and agreed actions recorded afterwards."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Note the date of your next doctor or therapist appointment"
                - "Put the chart, averages and low-day count on one page"
                - "Add notable events and two or three questions"
                - "Record what the clinician said and any agreed actions"
            - name: Ninety-day keep, change or stop review
              description: |-
                ## Purpose
                After three months the novelty has gone and you have enough data to judge whether tracking is helping. Some people find it calming and clarifying, others find it feeds rumination, and a planned review lets you keep, change or stop on purpose rather than by drift.

                ## Milestones
                1. Entry rate, time spent and the usefulness of each review assessed.
                2. Any sense that tracking raises worry noted honestly.
                3. A decision recorded: keep, change format or stop.
                4. If stopping, the data archived or deleted according to your privacy plan.

                ## Notes
                Tracking that makes you scrutinise every dip can increase anxiety. Lighter options include a weekly score instead of a daily one, or tracking only during known hard seasons.
              priority: medium
              deadlineOffsetDays: 100
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written keep, change or stop decision made at around 90 days, with the reasons noted."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Count your entries and reviews from the first 90 days"
                - "Write which reviews told you something useful"
                - "Note honestly whether tracking has raised or eased worry"
                - "Record a keep, change or stop decision"
            - name: Holiday before-and-after mood check
              description: |-
                ## Purpose
                Holidays are expected to restore, but the effect often fades within a week or two of returning, and some trips leave people more tired than before. Comparing the fortnight before, the trip itself and the fortnight after shows how much a break actually does for you and how long it lasts.

                ## Milestones
                1. The holiday dates marked in the log.
                2. One-number check-ins kept during the trip.
                3. Averages compared for before, during and two weeks after.
                4. A note on what to change about the next break.
              priority: low
              frontmatter:
                mode: event
                output_kind: knowledge
                success_criteria: "Average mood compared for the fortnight before, the trip and the fortnight after, with one lesson recorded for next time."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Mark your next holiday dates in the log"
                - "Keep a one-number check-in each day while away"
                - "Compare the three periods two weeks after returning"
                - "Write one change for your next break"
            - name: Watch plan for a known hard date or season
              description: |-
                ## Purpose
                Many people's logs show the same dip each year: an anniversary, the end of the financial year, the run-up to family holidays. Marking those dates in advance, tracking a little more closely around them and arranging something supportive turns an ambush into a planned week.

                ## Milestones
                1. Hard dates or seasons identified from past entries or memory.
                2. Each one marked in the calendar with a reminder two weeks before.
                3. One supportive plan arranged for each, such as time off or company.
                4. Mood around each date compared with the previous year.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every known hard date has a calendar reminder two weeks ahead and a supportive plan, reviewed against last year's mood."
                cadence: cyclic
              tasks:
                - "List dates or seasons that have been hard before"
                - "Set a reminder two weeks before each one"
                - "Arrange one supportive plan for the next hard date"
                - "Mark next year's hard dates in the calendar @recurring(yearly)"
            - name: Light-touch tracking through a high-pressure fortnight
              description: |-
                ## Purpose
                Exams, house moves, product launches and family crises are exactly when tracking gets dropped and exactly when the data would be most useful. A stripped-back version, one score and one word a day, keeps the record running through a busy stretch and shows how quickly you recover afterwards.

                ## Milestones
                1. The busy period's dates marked.
                2. A one-score, one-word format agreed for those dates.
                3. At least ten of fourteen days recorded.
                4. Recovery time back to your normal range noted afterwards.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "At least ten days of minimal entries recorded during a busy fortnight, with recovery time to your normal range noted."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Mark the dates of your next high-pressure stretch"
                - "Switch to one score and one word for those dates"
                - "Restore the full check-in once the stretch ends"
                - "Note how many days it takes to return to your normal range"
            - name: Menstrual cycle and mood tracking
              description: |-
                ## Purpose
                For many people who menstruate, mood, energy and anxiety shift in a regular pattern across the cycle, and for some the premenstrual change is severe enough to need treatment. Tracking cycle day beside mood for at least three cycles, which clinicians usually ask for before diagnosing premenstrual conditions, shows whether the pattern is there and how strong it is.

                ## Milestones
                1. Period start dates and cycle day added to the log.
                2. Three full cycles of daily entries.
                3. Mood plotted by cycle day across the three cycles.
                4. Findings taken to a doctor if the premenstrual change is large.

                ## Notes
                Some cycle apps sell or share data. Check the privacy policy before choosing one, or keep cycle data in your existing mood log.
              priority: medium
              deadlineOffsetDays: 100
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Three cycles of daily mood entries plotted by cycle day, with any premenstrual pattern described and shared with a doctor if marked."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Add period start date and cycle day to the check-in"
                - "Track daily for three full cycles"
                - "Plot mood by cycle day across all three"
                - "Book a doctor's appointment if the premenstrual dip is marked"
            - name: Perimenopause mood and symptom log
              description: |-
                ## Purpose
                Mood changes, anxiety, poor sleep and brain fog in the years around menopause are common and often go unrecognised as hormonal. A log pairing mood with hot flushes, night waking and period changes gives a doctor a clear picture and helps you judge whether any treatment is working.

                ## Milestones
                1. Hot flushes, night waking and period changes added as fields.
                2. Three months of paired mood and symptom entries.
                3. A monthly total of symptom days and low-mood days.
                4. A summary taken to a doctor for discussion.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three months of paired mood and perimenopause symptom entries, summarised monthly and discussed with a doctor."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Add fields for hot flushes, night waking and period changes"
                - "Total the month's symptom days and low-mood days @recurring(monthly:28)"
                - "Prepare a three-month summary for your doctor"
                - "Record what the doctor suggests"
            - name: Mood tracking across rotating shifts
              description: |-
                ## Purpose
                Shift workers' mood often follows the rota more than the calendar week: the second night shift, the changeover day, the first day off spent asleep. Tagging every entry with shift type, and reviewing by rota cycle rather than by week, shows which part of the pattern hurts most.

                ## Milestones
                1. Shift tags defined: early, late, night, off, changeover.
                2. Every entry tagged with shift type.
                3. Average mood and energy by shift type after one full rota cycle.
                4. The hardest point in the rota named and one change tried.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Mood and energy averaged by shift type over at least one full rota cycle, with the hardest point named."
                cadence: rolling
              tasks:
                - "Define shift tags for every shift type you work"
                - "Tag each entry with that day's shift"
                - "Compare mood across shift types at the end of each rota cycle @recurring(monthly:14)"
                - "Try one change around the hardest point of the rota"
            - name: Term-time mood tracking for students
              description: |-
                ## Purpose
                Student mood often follows the academic calendar: fresh starts, mid-term slumps, deadline clusters and the odd flatness of holidays. Marking term weeks and deadlines in the log shows the shape of your term, so you can plan lighter weeks and ask for help or extensions before the predictable low point.

                ## Milestones
                1. Term dates, deadline weeks and exam weeks marked in the log.
                2. A full term of entries, at least four days a week.
                3. Average mood by week of term charted.
                4. The lowest week identified and next term's plan adjusted.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A full term of entries charted by week of term, with the lowest week named and a plan for next term written."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Mark this term's deadlines and exam weeks in the log"
                - "Log at least four days a week through the term"
                - "Chart average mood by week of term"
                - "Plan a lighter load around next term's predictable low week"
            - name: Ten-second mood tracking for parents of young children
              description: |-
                ## Purpose
                Parents of babies and toddlers rarely have a spare minute, and the things that drive their mood, broken nights, solo-care days, a child's illness, are missing from standard tracking apps. A ten-second version with one score, hours of broken sleep and a solo-care tag fits around nap times and still shows the pattern.

                ## Milestones
                1. A three-field entry set up: mood, broken sleep, solo-care day.
                2. A daily trigger chosen, such as the last feed or bath time.
                3. Four weeks of entries, with gaps allowed.
                4. One pattern shared with a partner or supporter to plan help.

                ## Notes
                If low mood lasts more than two weeks after a birth, mention it to your doctor or health visitor. Postnatal depression affects partners as well as birthing parents.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Four weeks of three-field entries completed around childcare, with one pattern shared with a partner or supporter."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Set up a three-field entry for mood, broken sleep and solo-care days"
                - "Attach the entry to a daily childcare routine such as bath time"
                - "Look at four weeks of entries with your partner or supporter"
                - "Agree one change in help based on what you see"
            - name: Supporting a family member's mood log with consent
              description: |-
                ## Purpose
                Carers, parents of teenagers and partners sometimes help someone else keep a mood log, often at a clinician's suggestion. Doing it well means the person owns the log, agrees what you see and gets support rather than surveillance, which is what makes the arrangement last.

                ## Milestones
                1. Clear consent from the person on what you may see and when.
                2. A simple format they chose, kept on their own device or notebook.
                3. A short weekly sit-down agreed, if they want one.
                4. An agreement on what you will both do if the log shows a run of low days.

                ## Notes
                Never read someone's log without their agreement. If you are worried about their immediate safety, contact emergency services or their crisis team.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A written agreement with the person covering access, a weekly check-in rhythm and what happens after a run of low days."
                cadence: rolling
              tasks:
                - "Ask the person what help with their log they would like, if any"
                - "Write down together what you may see and when"
                - "Sit down together for a short look at the week's entries @recurring(weekly:thu)"
                - "Agree what you will both do if the log shows several low days"
            - name: Mood tracking for retirees with unstructured days
              description: |-
                ## Purpose
                Retirement removes the structure that once shaped each day, and mood can drift with it in ways that are hard to notice. Tracking mood alongside a few daily anchors, such as getting outdoors, a planned activity and talking to someone, shows which parts of a free day keep you well.

                ## Milestones
                1. Three or four daily anchors chosen and added as tags.
                2. Two months of entries with anchors ticked.
                3. Mood compared on days with and without each anchor.
                4. A weekly rhythm planned around the anchors that help most.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Two months of entries with daily anchors ticked, and a weekly plan built around the anchors linked to better mood."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Choose three or four daily anchors to tag"
                - "Tick the anchors each day alongside your mood score"
                - "Plan the coming week's anchors @recurring(weekly:mon)"
                - "Compare mood on days with and without each anchor after two months"
            - name: Personal mood dashboard with rolling averages
              description: |-
                ## Purpose
                Once you have a year or more of data, a simple dashboard in a spreadsheet shows more than any app summary: 7-day and 28-day rolling averages, a calendar heatmap, tag frequencies and a year-on-year line. Building it once makes every later review a glance.

                ## Milestones
                1. Data exported into a spreadsheet with one row per day.
                2. 7-day and 28-day rolling averages charted.
                3. A calendar heatmap of mood by day.
                4. Tag frequency and average mood per tag in a table.

                ## Notes
                Ask the agent to write the spreadsheet formulas for the rolling averages and heatmap colouring, then test them on a month you know well.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dashboard with rolling averages, a calendar heatmap and per-tag averages, refreshed monthly for three months."
                cadence: rolling
              tasks:
                - "Export your full history into a spreadsheet with one row per day"
                - "Build 7-day and 28-day rolling average charts"
                - "Add a calendar heatmap and a per-tag average table"
                - "Refresh the dashboard with the latest export @recurring(monthly:7)"
            - name: Standard questionnaire check agreed with your clinician
              description: |-
                ## Purpose
                Clinicians often use short validated questionnaires for depression and anxiety, such as the PHQ-9 and GAD-7, to measure change over time. Completing the one your clinician recommends on a fixed day each month adds a comparable score to your own log, which is especially useful when judging whether treatment is working.

                ## Milestones
                1. The questionnaire and schedule agreed with your clinician.
                2. Scores recorded monthly beside your mood average.
                3. Six monthly scores collected.
                4. The trend discussed at a review appointment.

                ## Notes
                These questionnaires support a clinician's judgement; they do not diagnose. Any answer about self-harm should be raised with a professional straight away.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly scores on a clinician-agreed questionnaire recorded beside mood averages and discussed at a review."
                cadence: rolling
              tasks:
                - "Ask your clinician which questionnaire they would like you to use, if any"
                - "Complete the agreed questionnaire and log the score @recurring(monthly:15)"
                - "Bring the six-month trend to your next review"
            - name: On-off self-experiment with a proper design
              description: |-
                ## Purpose
                Simple before and after comparisons are easily fooled by a good month or a change of season. Alternating a change on and off in blocks, such as two weeks with a daily morning walk, two weeks without, then repeating, gives far stronger evidence from a single person's data.

                ## Milestones
                1. One change chosen and a measurable outcome named.
                2. Four alternating two-week blocks scheduled.
                3. All four blocks completed with entries on most days.
                4. Averages compared across on and off blocks and the result written up.

                ## Notes
                Choose a change whose effect wears off quickly. Anything with lasting effects, such as a new medicine, needs a clinician and a different design.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Four alternating two-week blocks completed, with on and off averages compared in a written result."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Choose one change and the score you expect it to move"
                - "Schedule four alternating two-week blocks in the calendar"
                - "Keep the check-in going through all eight weeks"
                - "Compare the on and off averages and write up the result"
            - name: Retrospective life chart of mood and events
              description: |-
                ## Purpose
                Psychiatrists sometimes use a life chart, a timeline of mood highs and lows across years set beside major events, to understand long-term patterns. Drawing your own from memory, old diaries and your log helps you see recurring triggers and gives a therapist or psychiatrist a fast overview.

                ## Milestones
                1. A timeline drawn covering at least the last ten years.
                2. Periods of notably low or high mood marked with approximate dates.
                3. Major events, moves, losses and changes placed alongside.
                4. Repeating links between events and mood shifts noted.

                ## Notes
                This can bring up painful memories. Go slowly, stop if it becomes distressing, and consider doing it with a therapist.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A life chart covering at least ten years, with mood periods and major events placed and any repeating links noted."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Draw a timeline with one row per year for the last ten years"
                - "Mark the periods you remember as notably low or high"
                - "Add major events, moves and losses alongside"
                - "Note any links between events and mood that repeat"
---

# Mood Tracking & Patterns

This area is for anyone who wants to understand their own ups and downs rather than guess at them, whether you are simply curious, recovering from a hard patch or have been asked by a clinician to keep a record. It starts with the foundations (the questions your log should answer, a tool, a scale with written anchors, a short daily check-in, privacy and a two-week baseline), then the daily, weekly, monthly and yearly reviews that turn entries into patterns, the skills of reading your own data honestly, the experiments that show what lifts or drains you, the appointments and dates worth preparing for, versions for students, shift workers, parents, carers, retirees and people tracking cycle or menopause changes, and finally the dashboards and structured experiments of an experienced tracker.

What repeats is a daily check-in, a Sunday look at the week, a monthly summary, export and early warning check, a quarterly pattern report and a yearly review on a fixed date. The Purchase decision, Metrics log and Habit tracker templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
