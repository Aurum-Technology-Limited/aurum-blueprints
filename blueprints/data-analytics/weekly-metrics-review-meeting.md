---
id: data-analytics.weekly-metrics-review-meeting
name: Weekly Metrics Review Meeting
description: "A weekly metrics review leaders actually use: a written purpose, a fixed deck and agenda, owner commentary before the meeting, an action log that closes, and formats for small businesses, frontline teams and growing companies."
category: business
version: 1.0.0
tags: [data-analytics, weekly-metrics-review-meeting, manager, team, small-business, weekly-business-review, meeting-cadence, action-log]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - meeting-notes
    - metrics-log
    - onboarding-plan
  pillars:
    - name: Data & Analytics
      emoji: "📊"
      description: "Turning data into decisions: metrics and dashboards, data pipelines and warehouses, experimentation, forecasting and modelling, machine learning, data quality and governance."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Weekly Metrics Review Meeting
          description: "Running a regular meeting where leaders review key metrics, explain movements and agree actions, with a consistent deck and owners."
          projects:
            - name: Written purpose for the weekly metrics review
              description: |-
                ## Purpose
                Most weekly metrics meetings drift into status updates because nobody ever wrote down what they are for. A three-sentence purpose that names the decisions the meeting exists to make, the people it serves and what it is not for gives the chair something to point at when the agenda starts to sprawl.

                ## Milestones
                1. A purpose of no more than three sentences naming the decisions the review exists to make.
                2. A short list of what the meeting is explicitly not for, such as project updates or hiring news.
                3. The purpose agreed by the most senior regular attendee.
                4. The purpose printed on the first page of every deck.

                ## Notes
                A useful test: if a ten-minute conversation would not change any action this week, it belongs somewhere else.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written purpose of three sentences or fewer, agreed by the senior attendee, appears on page one of the deck."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the last three decisions you wish a numbers meeting had made sooner"
                - "Draft a three-sentence purpose and a not-for list"
                - "Agree the purpose with the senior attendee in a 15-minute conversation"
                - "Add the purpose to the first page of the deck"
            - name: Audit of meetings that already discuss numbers
              description: |-
                ## Purpose
                Before adding a new meeting, it pays to find the four or five existing ones where the same numbers are already argued over: the sales stand-up, the finance call, the ops catch-up. Mapping them shows what the weekly review can replace, which saves attendees time and gives the new meeting a better chance of surviving its first quarter.

                ## Milestones
                1. A list of every recurring meeting where metrics are presented, with attendees and length.
                2. The metrics discussed in each meeting noted beside it.
                3. Overlaps marked where the same number appears in two or more meetings.
                4. A recommendation on which meetings to merge, shorten or keep.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written map of existing metrics meetings with a merge, shorten or keep recommendation for each."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Search your calendar for recurring meetings with numbers on the agenda"
                - "Ask two regular attendees which meetings repeat the same figures"
                - "Note the metrics discussed in each meeting beside its name"
                - "Write a merge, shorten or keep recommendation for each meeting"
            - name: Choosing the fifteen metrics that earn a slot
              description: |-
                ## Purpose
                A deck with forty charts gets skimmed, while one with ten to fifteen gets discussed. Picking the handful of metrics that reflect this year's priorities, each with an agreed definition already in place, keeps the meeting on the numbers that leaders can act on within a week.

                ## Milestones
                1. A long list of candidate metrics gathered from existing reports and attendees.
                2. Each candidate scored on whether a leader could act on its movement within a week.
                3. A final list of no more than fifteen metrics, each linked to its agreed definition.
                4. Metrics left out recorded with the forum where they will be reviewed instead.

                ## Notes
                If a metric has no agreed definition yet, settle that first rather than debating it every week in the meeting.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A list of fifteen or fewer weekly metrics, each linked to a definition, signed off by the chair."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Collect every metric currently shown in leadership reports into one list"
                - "Score each metric on whether its weekly movement leads to action"
                - "Cut the list to fifteen or fewer and link each to its definition"
                - "Recheck the metric list against this year's priorities @recurring(yearly)"
            - name: Roles for chair, presenters and note-taker
              description: |-
                ## Purpose
                Meetings without named roles end with the most senior person presenting every chart and nobody writing anything down. Naming a chair, one presenter per metric, a note-taker and a data contact means every number has someone who explains it and every action has someone who records it.

                ## Milestones
                1. A chair named, with the authority to cut discussion and park topics.
                2. One presenter assigned to each metric in the deck.
                3. A note-taker named, separate from the chair.
                4. A data contact named who can answer questions about where the numbers came from.
                5. The roles listed on the second page of the deck.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every metric in the deck has a named presenter, and the chair, note-taker and data contact are listed in the deck."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the four roles and what each one does in one line"
                - "Match each metric in the deck to the person closest to the work"
                - "Ask each presenter to confirm they will own their metric"
                - "Add the roles page to the deck"
            - name: Fixed weekday, time and length for the review
              description: |-
                ## Purpose
                Holding the review on Monday morning often means numbers that finished loading an hour ago and commentary nobody had time to write. Choosing a slot that sits after the data refresh and the commentary deadline, with a fixed length, gives presenters a predictable week and attendees a meeting they can protect in their calendars.

                ## Milestones
                1. The time the weekly data is complete and checked confirmed with the data contact.
                2. A day and time chosen that leaves at least half a working day for commentary.
                3. A fixed length agreed, usually 45 or 60 minutes.
                4. A recurring invite sent with the purpose and deck link in the description.

                ## Notes
                Tuesday mornings suit many teams: Monday is for loading and checking, and decisions still land early in the week.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A recurring invite exists for a slot that falls after the data refresh, with a fixed length and the deck link attached."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask the data contact when last week's numbers are complete and checked"
                - "Pick a slot that leaves half a day for commentary after that point"
                - "Send a recurring invite with the purpose and deck link in the description"
            - name: Data freeze time before each review
              description: |-
                ## Purpose
                Numbers that change between the deck being sent and the meeting starting lead to ten minutes of arguing about which version is right. A written freeze rule says when the week's figures are locked, what happens to late corrections and how a restated number is flagged, so the meeting discusses the business rather than the refresh.

                ## Milestones
                1. A freeze time written down, such as Monday at noon for the previous week.
                2. A rule for late corrections: noted on the slide, not silently changed.
                3. A standard marker for any number restated from a previous week.
                4. The rule shared with every presenter and the data contact.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written freeze rule with a time, a late correction rule and a restatement marker, shared with all presenters."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Agree the freeze time with the data contact"
                - "Write how late corrections will be shown on a slide"
                - "Choose a marker for numbers restated from an earlier week"
                - "Send the freeze rule to every presenter"
            - name: Standard page layout for the weekly deck
              description: |-
                ## Purpose
                When every presenter formats slides their own way, attendees spend the first minute of each page working out what they are looking at. One page layout per metric, with the same chart window, comparison lines and commentary box in the same places, lets people read fifteen pages in ten minutes and spot what moved.

                ## Milestones
                1. A single page layout: metric name, owner, chart, comparison table and commentary box.
                2. A standard chart window, such as the last 13 weeks with the same weeks last year.
                3. Target or plan shown as a line, not a separate table.
                4. Every metric in the deck moved onto the layout.
                5. The layout saved as a template file the deck builder copies each week.

                ## Notes
                Show the trend and the comparison on the same page. A single number with a coloured arrow invites a guess, not an explanation.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every metric page in the deck follows one layout with a 13-week chart, comparisons and a commentary box."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Sketch one metric page with chart, comparison table and commentary box"
                - "Agree the chart window and comparison lines with the chair"
                - "Rebuild three metric pages on the new layout and ask presenters for feedback"
                - "Move the remaining metrics onto the layout"
            - name: Standing agenda with timeboxes
              description: |-
                ## Purpose
                Without a fixed agenda, the first metric gets twenty minutes and the last five get none. A standing order with timeboxes, starting with open actions and ending with new actions read back, protects the metrics at the back of the deck and makes the meeting finish on time.

                ## Milestones
                1. An agenda of four to six blocks, each with a time allowance.
                2. Open actions placed first and new actions read back last.
                3. A parking slot for topics that need their own meeting.
                4. The agenda shown at the top of the deck every week.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A standing agenda with timeboxes is at the top of the deck and the meeting has ended on time for four weeks running."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the agenda blocks and give each a time allowance"
                - "Put open actions first and the read-back of new actions last"
                - "Add a parking slot for topics that need their own meeting"
                - "Ask the chair to keep a visible timer for the first four meetings"
            - name: Action log with owners and due dates
              description: |-
                ## Purpose
                Actions agreed in a meeting and recorded nowhere are forgotten by Thursday. A single action log, with one owner, a due date and a link to the metric each action is meant to move, turns the review from a discussion into a loop that people are held to.

                ## Milestones
                1. One shared action log with columns for action, owner, due date, metric and status.
                2. A rule that every action has a single named owner, not a team.
                3. Every action from the last meeting entered in the log.
                4. The log linked from the deck's first page.

                ## Notes
                Write actions as results: 'Refund rate cause identified for the north region', not 'Look at refunds'.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An action log exists where every action has one owner, a due date and a linked metric, and it is linked from the deck."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create a shared action log with action, owner, due, metric and status columns"
                - "Enter every action from the last meeting with a single owner"
                - "Rewrite vague actions as results someone could check"
                - "Link the action log from the first page of the deck"
            - name: Weekly deck build routine
              description: |-
                ## Purpose
                Building the deck by hand at the last minute is where wrong numbers and missing pages come from. A written checklist, run by one person at the same time each week, covering refresh, sense checks, page updates and the send, makes the deck reliable even when the usual builder is away.

                ## Milestones
                1. A checklist covering refresh, sense checks, page updates, commentary chase and send.
                2. A named builder and a named deputy.
                3. Three sense checks written down, such as totals that should match finance.
                4. The deck built from the checklist for eight weeks in a row.

                ## Notes
                Start from the **Operational checklist** template.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The deck has been built from the written checklist for eight consecutive weeks with no missing pages."
                cadence: rolling
              tasks:
                - "Write the deck build steps as a checklist from the operational checklist template"
                - "Add three sense checks that catch the commonest wrong numbers"
                - "Name a deputy builder and walk them through the checklist once"
                - "Build the deck from the checklist by Monday noon @recurring(weekly:mon)"
            - name: Owner commentary written before the meeting
              description: |-
                ## Purpose
                Owners who explain their metric live tend to discover the reason while talking. Asking each owner to write three lines before the deck goes out, covering what moved, why, and what happens next, moves the thinking out of the meeting and leaves the time for questions and decisions.

                ## Milestones
                1. A three-line commentary format: what moved, why, what next.
                2. A commentary deadline set a few hours before the pre-read goes out.
                3. Every metric page carrying owner commentary for four weeks running.
                4. Commentary that says 'not yet known' allowed, with a date for the answer.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every metric page has written owner commentary before the pre-read is sent, for eight consecutive weeks."
                cadence: rolling
              tasks:
                - "Write a one-paragraph guide to the what, why, next commentary format"
                - "Send the guide and two good examples to every presenter"
                - "Write the three-line commentary for each metric you own @recurring(weekly:mon)"
                - "Ask the chair to return commentary that only restates the chart"
            - name: Pre-read sent a day ahead with silent reading
              description: |-
                ## Purpose
                Reading slides aloud wastes the most expensive hour of the week. Sending the deck and commentary a day ahead, then opening with ten minutes of silent reading for anyone who has not read it, means discussion starts from a shared understanding rather than a recital.

                ## Milestones
                1. The deck sent to attendees at a fixed time the day before the meeting.
                2. The first ten minutes of the meeting set aside for silent reading.
                3. Presenters asked not to read their pages aloud.
                4. Questions collected in the margin or a comment thread during reading.

                ## Notes
                Silent reading feels odd for two weeks and then becomes the part people value most. Hold it for at least a month before judging.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The pre-read has gone out a day ahead and the meeting has opened with silent reading for six consecutive weeks."
                cadence: rolling
              tasks:
                - "Tell attendees the deck will arrive the day before and why"
                - "Send the deck and commentary to attendees @recurring(weekly:mon)"
                - "Open the meeting with ten minutes of silent reading"
                - "Ask readers to leave questions as comments on the page"
            - name: Open actions checked at the start of every meeting
              description: |-
                ## Purpose
                Starting with last week's actions tells everyone the log is real, and the owners prepare accordingly. A five-minute walk through open actions, each closed, re-dated with a reason or escalated, stops actions quietly rolling over for months.

                ## Milestones
                1. Open actions shown on the first content page of the deck.
                2. Each action marked done, re-dated with a reason, or escalated.
                3. No action re-dated more than twice without the chair deciding what happens.
                4. The action check kept to five minutes for six weeks.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For eight consecutive weeks, every open action has been closed, re-dated with a reason or escalated at the start of the meeting."
                cadence: rolling
              tasks:
                - "Move the open actions page to the front of the deck"
                - "Walk the open actions in the first five minutes @recurring(weekly:tue)"
                - "Record a reason against every re-dated action"
            - name: Meeting notes and decision record
              description: |-
                ## Purpose
                Decisions made in the room are remembered differently by each person a week later. Short notes, published the same day, listing decisions, new actions and parked topics, give absent attendees the outcome and give the chair a record to quote when a decision is reopened.

                ## Milestones
                1. A notes format with three sections: decisions, new actions, parked topics.
                2. Notes published within two hours of each meeting.
                3. Decisions searchable in one place going back at least a quarter.
                4. Absent attendees confirming the notes were enough to catch up.

                ## Notes
                Start from the **Meeting notes** template. Keep discussion summaries out; the notes are for outcomes.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Notes with decisions, new actions and parked topics have been published within two hours of the meeting for eight weeks running."
                cadence: rolling
              tasks:
                - "Set up the notes page from the meeting notes template"
                - "Agree with the note-taker the three sections the notes will cover"
                - "Publish the notes within two hours of the meeting @recurring(weekly:tue)"
            - name: Five-line summary for the wider team
              description: |-
                ## Purpose
                People whose work drives the numbers rarely hear what leaders concluded about them. A five-line note after each review, covering the headline, what went well, what worries leaders and what is being done, connects the meeting to the people doing the work and cuts down the rumours a bad week can start.

                ## Milestones
                1. A five-line summary format agreed with the chair.
                2. A distribution list or channel chosen for the summary.
                3. The summary sent the day after every review for six weeks.
                4. Feedback gathered from three recipients on whether it is useful.

                ## Notes
                Leave out anything confidential, such as named individuals' performance or unannounced plans.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A five-line summary has gone to the wider team the day after each review for six consecutive weeks."
                cadence: rolling
              tasks:
                - "Agree the five-line summary format with the chair"
                - "Choose the channel or list the summary goes to"
                - "Ask the agent to draft the summary from the meeting notes for your edit"
                - "Send the five-line summary to the wider team @recurring(weekly:wed)"
            - name: Monthly prune of pages nobody discusses
              description: |-
                ## Purpose
                Decks only ever grow: a page added for one issue stays for two years. A monthly look at which pages drew no questions or actions in the last four to eight weeks, and moving them to an appendix or a monthly forum, keeps the weekly deck short enough to read.

                ## Milestones
                1. A simple tally of which pages drew a question or action each week.
                2. Pages with no discussion in eight weeks moved to an appendix.
                3. Appendix pages unread for a further quarter removed.
                4. The deck kept at or under its agreed page count for three months.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The deck has stayed within its agreed page count for three consecutive months, with pruned pages recorded."
                cadence: rolling
              tasks:
                - "Add a tally column for questions and actions per page to the notes"
                - "Agree the maximum page count for the main deck"
                - "Move pages with no discussion in eight weeks to the appendix @recurring(monthly:12)"
            - name: Quarterly review of the review
              description: |-
                ## Purpose
                Every recurring meeting slowly drifts from its purpose, and attendees rarely say so unprompted. A short anonymous survey each quarter, plus a look at attendance, overruns and action completion, gives the chair evidence for what to change instead of guessing.

                ## Milestones
                1. A five-question survey on usefulness, length, deck quality and actions.
                2. Attendance, overrun minutes and action completion rate pulled for the quarter.
                3. Two or three changes agreed from the results.
                4. Results and changes shared with attendees.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A quarterly survey and meeting statistics have been reviewed for two consecutive quarters, each producing at least two recorded changes."
                cadence: cyclic
              tasks:
                - "Write five survey questions about usefulness, length, deck and actions"
                - "Pull attendance, overruns and action completion for the quarter"
                - "Run the survey and agree two or three changes @recurring(quarterly)"
                - "Share the results and changes with attendees"
            - name: Cover rota for chair and presenters
              description: |-
                ## Purpose
                Leave, sickness and travel mean the chair or a presenter is missing most weeks, and the usual result is a skipped page or a cancelled meeting. A rota naming a deputy for each role, with deputies who have presented at least once, keeps the review running through holiday months.

                ## Milestones
                1. A deputy named for the chair and for every metric presenter.
                2. Each deputy has presented their metric at least once with the owner present.
                3. A rule that absent presenters still submit written commentary or hand over to the deputy.
                4. No meeting cancelled for absence in a quarter.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every role has a named deputy who has presented once, and no review was cancelled for absence in the last quarter."
                cadence: rolling
              tasks:
                - "List each role and metric with a named deputy"
                - "Ask each deputy to present once with the owner in the room"
                - "Check known leave against the rota for the coming month @recurring(monthly:25)"
            - name: Data issue log for numbers questioned in the meeting
              description: |-
                ## Purpose
                Wrong figures surface in the review all the time, and without a record the same broken number is questioned three weeks running. Logging each suspect figure with what looked wrong, who will check it and when, and routing it to the data team's own process, keeps the meeting moving and the fix traceable.

                ## Milestones
                1. A data issue section in the notes with metric, symptom, checker and date.
                2. An agreed route for passing issues to the data team.
                3. Every questioned number logged rather than debated for more than two minutes.
                4. Open issues reviewed monthly until closed.

                ## Notes
                The meeting's job is to log and route the issue, not to fix the pipeline in the room.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every number questioned in the meeting for a quarter has a logged issue with a checker, and none has stayed open beyond its agreed date unexplained."
                cadence: rolling
              tasks:
                - "Add a data issue section to the notes page"
                - "Agree with the data team how issues from the review reach them"
                - "Ask the chair to log any number disputed for more than two minutes"
                - "Chase open data issues with their checkers @recurring(monthly:20)"
            - name: Target and plan lines refreshed each quarter
              description: |-
                ## Purpose
                Targets on the charts often stay at January's plan long after a reforecast has changed them, so metrics look red or green for the wrong reason. Refreshing plan and target lines each quarter from the latest agreed figures, and marking which version is shown, keeps judgements in the meeting fair.

                ## Milestones
                1. The source of every target and plan line written on its page.
                2. Lines updated within two weeks of any agreed reforecast.
                3. The plan version shown in the deck footer.
                4. A note kept of what changed in each refresh.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every target line in the deck shows its source and plan version, refreshed within two weeks of the last agreed reforecast."
                cadence: cyclic
              tasks:
                - "Note the source and version of every target line in the deck"
                - "Add the plan version to the deck footer"
                - "Refresh target and plan lines from the latest agreed figures @recurring(quarterly)"
            - name: Explaining a metric movement in three sentences
              description: |-
                ## Purpose
                Saying that a metric is 'down 4% on last week' tells nobody anything they could not read from the chart. Learning to explain a movement as size, cause and consequence, in three sentences, is the single skill that most improves a presenter's slot and the meeting as a whole.

                ## Milestones
                1. The size, cause and consequence structure written as a one-line rule.
                2. Ten past commentaries rewritten in the structure.
                3. Distinguishing a known cause from a hypothesis in every commentary.
                4. Commentary reviewed by the chair as clear for four consecutive weeks.

                ## Notes
                When the cause is not known, say so and give the date you will know. That is better than a confident guess.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten past commentaries rewritten in size, cause and consequence form, and four weeks of live commentary judged clear by the chair."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Collect ten commentaries from past decks"
                - "Rewrite each as size, cause and consequence in three sentences"
                - "Mark each cause as known or a hypothesis"
                - "Ask the chair to rate your next four commentaries for clarity"
            - name: Telling normal weekly noise from real change
              description: |-
                ## Purpose
                Weekly numbers wobble, and treating every wobble as news sends people chasing causes that do not exist. Learning how much a metric usually moves, using a simple range from its own history and rules such as several weeks above the average in a row, lets the meeting ignore noise and act early on genuine shifts.

                ## Milestones
                1. The typical week-to-week range calculated for each headline metric from a year of history.
                2. Two or three simple signal rules written down, such as a point outside the range or six weeks above average.
                3. The range shown as a shaded band on each chart.
                4. One past false alarm and one missed shift identified with the new rules.

                ## Notes
                Process behaviour charts, also called control charts, are the classic tool here and are simple enough for a spreadsheet.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each headline metric chart shows a normal range band, and the signal rules are written on the deck's guide page."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Pull a year of weekly history for three headline metrics"
                - "Read an introductory guide to process behaviour charts"
                - "Calculate the usual weekly range for each of the three metrics"
                - "Write two or three signal rules and test them on last year's data"
            - name: Comparing against last week, last year and the plan
              description: |-
                ## Purpose
                Comparing this week with last week, last year, the trailing four-week average and the plan each tells a different story, and picking the wrong one makes a good week look bad. Learning when each comparison is fair, and settling a default for each metric, stops the same debate recurring.

                ## Milestones
                1. The strengths and traps of each comparison written in a sentence each.
                2. A default comparison chosen for every metric, with the reason.
                3. Weeks distorted by holidays or calendar shifts flagged with a note.
                4. The defaults shown on the deck's guide page.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every metric in the deck has a recorded default comparison and reason, shown on the guide page."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write one sentence on the trap in each of the four comparisons"
                - "Choose a default comparison for each metric with a reason"
                - "Add the defaults to the guide page at the back of the deck"
            - name: Input metrics versus output metrics
              description: |-
                ## Purpose
                Output metrics such as revenue or churn are what leaders care about, but nobody can act on them directly this week. Learning to pair each output with two or three controllable inputs, such as qualified demos booked or orders shipped on time, gives the meeting something it can actually change by next Tuesday.

                ## Milestones
                1. Each metric in the deck labelled as input or output.
                2. At least two controllable inputs identified for each headline output.
                3. The input metrics added to the deck in place of lower-value pages.
                4. One action in the log aimed at an input rather than an output.

                ## Notes
                A good input is one a named team controls and that has moved the output in the past. Check that relationship before you rely on it.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every headline output in the deck is paired with at least two labelled input metrics that a named team controls."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Label each metric in the deck as input or output"
                - "List what a team could change this week to move each output"
                - "Check past data for whether each candidate input moved with its output"
                - "Add the strongest inputs to the deck"
            - name: Chairing a numbers meeting so it stays a review
              description: |-
                ## Purpose
                Chairs set the tone: one who lets presenters ramble, or who answers every question personally, turns the review into a status meeting. Practising a few specific moves, such as cutting to the decision, parking side topics and asking the quietest person a question, makes the hour sharper within a month.

                ## Milestones
                1. Five chairing moves written on a card: cut, park, ask, decide, read back.
                2. Each move used deliberately in at least two meetings.
                3. A trusted attendee asked for feedback after four meetings.
                4. Overruns reduced to zero for four weeks.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The chair has used five named moves across four meetings, received feedback from one attendee, and run four meetings without overrunning."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write five chairing moves and one phrase for each on a card"
                - "Pick two moves to practise in the next meeting"
                - "Ask a trusted attendee for feedback after four meetings"
                - "Track overrun minutes for the next four meetings"
            - name: Question bank for challenging a metric owner
              description: |-
                ## Purpose
                Good questions are what make the review more than a reading. A short bank of questions that test an explanation, such as 'is this volume or mix?', 'what else would we expect to see if that is true?' and 'what would change your mind?', helps leaders probe without sounding hostile and helps owners prepare.

                ## Milestones
                1. A bank of ten to fifteen questions grouped by purpose.
                2. The bank shared with attendees and presenters.
                3. Presenters using it to check their own commentary before sending.
                4. At least one decision in a quarter traced to a question from the bank.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A question bank of at least ten questions is shared with all attendees and cited in at least one recorded decision."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down the five best questions asked in recent meetings"
                - "Add questions that test volume, mix, timing and data quality"
                - "Group the questions by purpose and share them with attendees"
            - name: Splitting a change into volume, mix and rate
              description: |-
                ## Purpose
                Revenue down 3% could mean fewer customers, cheaper products or lower prices, and each needs a different action. Learning to break a change into volume, mix and rate effects, shown as a simple bridge chart, lets owners say which lever moved instead of guessing.

                ## Milestones
                1. The volume, mix and rate idea understood with one worked example.
                2. A bridge chart built for one headline metric from last month's data.
                3. The bridge added to that metric's page when it moves beyond its normal range.
                4. A second metric bridged by another presenter.

                ## Notes
                Ask finance how they split price and volume today, so the review and the management accounts tell the same story.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Bridge charts splitting volume, mix and rate exist for two headline metrics and appear on their pages when they move beyond normal range."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Work through one volume, mix and rate example in a spreadsheet"
                - "Ask finance how they currently split price and volume effects"
                - "Build a bridge chart for one headline metric from last month"
                - "Show another presenter how to build a bridge for their metric"
            - name: Calendar effects in weekly numbers
              description: |-
                ## Purpose
                Easter moving between March and April, a week 53 every five or six years, a bank holiday Monday or a month with five Fridays can each make a normal week look alarming. Learning which calendar effects hit your metrics, and noting them in advance, saves the meeting from explaining the calendar.

                ## Milestones
                1. The calendar effects that affect your metrics listed, with the weeks they hit.
                2. A rule for how week 53 and moving holidays are compared with last year.
                3. Next quarter's affected weeks flagged in the deck builder's checklist.
                4. One past misread week explained by a calendar effect.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written list of calendar effects with affected weeks and a comparison rule is part of the deck builder's checklist."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the public holidays and moving events that affect your metrics"
                - "Check how your reporting calendar handles week 53"
                - "Flag next quarter's affected weeks in the deck checklist"
                - "Write a comparison rule for holiday weeks against last year"
            - name: Slide deck or live dashboard walkthrough
              description: |-
                ## Purpose
                Slides allow commentary and a frozen record but take time to build; a live dashboard is always current but invites clicking around during the meeting. Comparing the two against your purpose, team size and build time, and choosing one, ends a debate that otherwise resurfaces every quarter.

                ## Milestones
                1. Three criteria agreed: build time, commentary space and frozen record.
                2. Both formats tried for two weeks each.
                3. Attendees' preferences gathered after each trial.
                4. A format chosen and recorded with the reasons.

                ## Notes
                Many teams settle on a hybrid: a dashboard for the numbers, a short written page for commentary and actions.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Both formats trialled for two weeks each and a written choice recorded with reasons and attendee feedback."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write the three criteria the format must meet"
                - "Run two weeks with slides and two weeks with a live dashboard"
                - "Ask attendees which format helped them decide faster"
                - "Record the chosen format and the reasons"
            - name: Cutting the review from ninety to forty-five minutes
              description: |-
                ## Purpose
                Ninety-minute reviews usually contain forty-five minutes of reading aloud and status updates. Halving the length, by moving reading to the pre-read, trimming the deck and capping each page's time, tends to raise attendance and focus rather than lose anything that mattered.

                ## Milestones
                1. The current meeting timed block by block for two weeks.
                2. Reading, status updates and side topics identified as removable time.
                3. A new 45-minute agenda trialled for four weeks.
                4. Attendees surveyed on whether anything important was lost.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The review runs to 45 minutes for four consecutive weeks and an attendee survey records whether anything important was lost."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Time each agenda block in the next two meetings"
                - "Mark the minutes spent reading aloud or on status updates"
                - "Draft a 45-minute agenda and trial it for four weeks"
                - "Survey attendees on what, if anything, was lost"
            - name: Exception-led agenda for metrics outside their range
              description: |-
                ## Purpose
                Green metrics rarely need discussion, yet many meetings give every page equal time. An agenda built from exceptions, where only metrics outside their target band or normal range are discussed and the rest are noted as read, gives the meeting's time to the pages that need it.

                ## Milestones
                1. A rule for what counts as an exception, using existing target bands or normal ranges.
                2. An exceptions page at the front of the deck listing only flagged metrics.
                3. Non-exception pages kept in the deck but taken as read.
                4. Four weeks run on the exception-led agenda.

                ## Notes
                Keep one rotating slot for a metric that is green but trending the wrong way, or slow problems will hide behind the rule.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The meeting has run for four weeks with an exceptions page that sets the agenda and a rotating slot for a trending metric."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the exception rule using existing target bands"
                - "Build an exceptions page listing only the flagged metrics"
                - "Add a rotating slot for a green metric trending the wrong way"
                - "Run four weeks on the new agenda and note what changed"
            - name: Automating the weekly deck refresh
              description: |-
                ## Purpose
                Copying numbers from four systems into slides every Monday takes hours and introduces typing errors. Connecting the deck's charts to saved reports or the BI tool, so the refresh is one action and only commentary is typed, frees the builder's morning and removes a whole class of wrong numbers.

                ## Milestones
                1. The current manual build timed and its copy-paste steps listed.
                2. Each chart linked to a saved report or BI query.
                3. The refresh run in one step and checked against the manual version for two weeks.
                4. Build time cut to under an hour.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The deck refresh runs in a single step, matches the manual figures for two weeks, and the build takes under an hour."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Time the next manual deck build and list every copy-paste step"
                - "Ask the data contact which charts can be fed from saved reports"
                - "Link each chart to its saved report or BI query"
                - "Run the automated and manual builds side by side for two weeks"
            - name: Escalation rule for actions that keep slipping
              description: |-
                ## Purpose
                An action re-dated three times is usually blocked by something the owner cannot fix alone. A clear escalation rule, such as a second slip going to the chair and a third to the senior attendee with a named blocker, turns slipping actions into decisions about resources or priorities.

                ## Milestones
                1. An escalation rule written with a trigger and a route.
                2. A blocker field added to the action log.
                3. Every action slipped twice reviewed by the chair.
                4. A quarter with no action re-dated more than three times.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written escalation rule is in use and no action has been re-dated more than three times in the last quarter."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Count how many open actions have been re-dated twice or more"
                - "Write the escalation trigger and route in two sentences"
                - "Add a blocker field to the action log"
                - "Send actions slipped twice to the chair with their blockers @recurring(monthly:5)"
            - name: Deciding which metrics belong weekly, monthly or quarterly
              description: |-
                ## Purpose
                Some metrics cannot move meaningfully in a week, such as customer lifetime value or annual retention, and reviewing them weekly only produces noise. Assigning each metric to the forum whose rhythm matches how fast it changes and how fast you can act keeps the weekly review on what is genuinely weekly.

                ## Milestones
                1. Each metric scored on how fast it moves and how fast the team can respond.
                2. Every metric assigned to the weekly, monthly or quarterly forum.
                3. Metrics moved out of the weekly deck and into their new forum's pack.
                4. The allocation reviewed once a year.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every metric reported to leadership is assigned to one forum with a recorded reason, and the weekly deck holds only weekly metrics."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every leadership metric with how fast it typically moves"
                - "Assign each metric to the weekly, monthly or quarterly forum"
                - "Move the reassigned metrics into their new forum's pack"
                - "Review which forum each metric belongs to @recurring(yearly)"
            - name: Hybrid and remote review set-up
              description: |-
                ## Purpose
                Hybrid meetings often split into a room that talks and a screen that listens. A set-up where everyone joins from their own device, the deck is one shared link, questions go into the chat or page comments and the chair calls on remote attendees first makes the review fair wherever people sit.

                ## Milestones
                1. Every attendee joining from their own device, including those in the room.
                2. One deck link used by all, with no screen-shared slides.
                3. A rule that the chair takes remote questions first.
                4. Time zones checked so the slot is within working hours for every regular attendee.

                ## Notes
                If attendees span more than about eight hours, consider written commentary threads during the day with a shorter live slot.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Four consecutive reviews held with every attendee on their own device, one shared deck link and remote questions taken first."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask in-room attendees to join from their own laptops"
                - "Replace screen-shared slides with one deck link in the invite"
                - "Check the slot against every regular attendee's working hours"
                - "Agree with the chair to take remote questions first"
            - name: Pilot review and four-week retrospective
              description: |-
                ## Purpose
                Running the new format for four weeks before calling it permanent lets the team fix the obvious problems while expectations are still flexible. A short retrospective at the end, with attendance, overruns and a quick survey, turns the pilot into a format people chose rather than one imposed on them.

                ## Milestones
                1. Four pilot meetings held on the new purpose, deck and agenda.
                2. Overruns, attendance and actions closed recorded for each pilot week.
                3. A 30-minute retrospective held with all regular attendees.
                4. Agreed changes made before the fifth meeting.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Four pilot meetings and a retrospective have been held, with agreed changes in place before the fifth meeting."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Announce a four-week pilot of the new format to attendees"
                - "Record overruns, attendance and actions closed after each pilot week"
                - "Hold a 30-minute retrospective after the fourth meeting"
                - "Make the agreed changes before the fifth meeting"
            - name: Opening the review to the wider leadership group
              description: |-
                ## Purpose
                Once the core group trusts the format, opening it to heads of team or a wider leadership group spreads the same view of the numbers further. Planning the expansion, with a short briefing, clear observer or presenter roles and a cap on numbers, avoids a meeting that doubles in size and halves in usefulness.

                ## Milestones
                1. A list of new attendees with each one's role: observer or presenter.
                2. A one-page briefing on the purpose, pre-read and conduct sent to newcomers.
                3. A cap on attendee numbers agreed.
                4. The first expanded meeting held and reviewed.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first expanded review is held with a briefing sent to all newcomers and attendance within the agreed cap."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List who would join and whether each would observe or present"
                - "Write a one-page briefing on how the review works"
                - "Agree a cap on attendee numbers with the chair"
                - "Hold the first expanded meeting and collect three reactions"
            - name: Quarter-end session against the plan
              description: |-
                ## Purpose
                At the end of each quarter the weekly lens is too narrow: thirteen weeks of movements need adding up against the plan. Replacing one weekly review per quarter with a longer session that compares the quarter to plan, reviews which actions worked and resets priorities for the next thirteen weeks keeps the weekly meeting anchored.

                ## Milestones
                1. A quarter-end session booked in place of the usual review.
                2. A quarter summary page per headline metric against plan.
                3. Actions from the quarter tagged as moved the metric, no effect or unclear.
                4. Priorities for the next quarter written into the deck's first page.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Two consecutive quarter-end sessions held, each producing a quarter summary against plan and written priorities for the next quarter."
                cadence: cyclic
              tasks:
                - "Book the quarter-end session in place of a weekly review @recurring(quarterly)"
                - "Build a quarter-versus-plan summary page for each headline metric"
                - "Tag the quarter's actions as moved the metric, no effect or unclear"
                - "Write next quarter's priorities on the deck's first page"
            - name: New year targets loaded into the deck
              description: |-
                ## Purpose
                New targets agreed in annual planning often reach the weekly deck in February, leaving the first weeks of the year judged against nothing. Planning the handover from the budget to the deck, with targets phased by week and checked by finance, means week one of the new year opens with the right lines.

                ## Milestones
                1. The date targets will be final confirmed with finance.
                2. Annual targets phased into weekly values, including seasonality.
                3. Phased targets checked by finance before loading.
                4. The first deck of the year shown with new target lines.

                ## Notes
                Agree with finance how annual targets are phased into weeks. A flat split makes seasonal weeks look wrong.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first weekly deck of the year shows new target lines, phased by week and checked by finance."
                cadence: cyclic
              tasks:
                - "Ask finance when next year's targets will be final"
                - "Phase annual targets into weekly values with seasonality"
                - "Load the phased targets into the deck before the first review @recurring(yearly)"
            - name: Extra session after a sharp drop in a headline metric
              description: |-
                ## Purpose
                A sudden fall, such as orders down by a third or a spike in failed payments, cannot wait for next week's slot or be squeezed into the usual hour. A pre-agreed trigger and format for an extra 30-minute session, with only the people who can act, gets a decision within a day instead of a week.

                ## Milestones
                1. A trigger agreed for calling an extra session, tied to the normal range.
                2. A short attendee list of people who can act.
                3. A one-page format: what happened, what we know, options, decision.
                4. Each extra session followed by a short note in the next weekly review.

                ## Notes
                Check the data first. A good share of sharp drops turn out to be a broken feed rather than a real change.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written trigger and one-page format exist, and any extra session held produced a recorded decision within one working day."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Agree the size of drop that triggers an extra session"
                - "Name the people who must attend an extra session"
                - "Write the one-page format for the extra session"
                - "Add a data check as the first step of the format"
            - name: Peak season and holiday review calendar
              description: |-
                ## Purpose
                Peak trading weeks need more attention, while holiday weeks often lose half the attendees. Deciding a year ahead which weeks are skipped, which are doubled up and which run a short format stops cancelled meetings in December and missed problems in peak season.

                ## Milestones
                1. Next year's holidays and peak weeks marked against the review slot.
                2. A decision for each: skip, shorten, move or add an extra check.
                3. Changed slots updated in the recurring invite.
                4. Attendees told about the calendar at the start of the year.
              priority: low
              frontmatter:
                mode: event
                output_kind: artifact
                success_criteria: "A review calendar for the year marks every holiday and peak week with a skip, shorten, move or extra decision, reflected in the invites."
                cadence: cyclic
              tasks:
                - "List next year's holidays and peak trading weeks"
                - "Decide skip, shorten, move or extra for each marked week"
                - "Mark next year's changed review weeks in the invite @recurring(yearly)"
            - name: Friday numbers review for a small business owner
              description: |-
                ## Purpose
                Small business owners often check the bank balance daily and everything else only when something goes wrong. Twenty minutes every Friday with five numbers, such as cash in the bank, sales, new enquiries, orders to fulfil and overdue invoices, written in one log, shows trends early enough to act on them.

                ## Milestones
                1. Five numbers chosen that reflect cash, sales and workload.
                2. A one-page log with a row per week and a notes column.
                3. Twenty minutes blocked every Friday afternoon.
                4. Twelve weeks of numbers logged, with one change made because of a trend.

                ## Notes
                Start from the **Metrics log** template. If you have a business partner or bookkeeper, do it together once a month.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive Fridays of five numbers logged, with at least one recorded change made because of a trend."
                cadence: rolling
              tasks:
                - "Choose five weekly numbers covering cash, sales and workload"
                - "Set up a weekly log from the metrics log template"
                - "Fill in the five numbers and one line of notes @recurring(weekly:fri)"
                - "Look back over the last twelve weeks and write down one trend"
            - name: Inheriting a weekly review as a new manager
              description: |-
                ## Purpose
                Taking over a meeting that someone else designed means inheriting their metrics, their habits and their unfinished actions. Spending the first month observing, asking attendees what they value, and changing one thing at a time keeps credibility while the review gradually becomes yours.

                ## Milestones
                1. Two meetings observed without changing anything.
                2. Short conversations held with at least four regular attendees.
                3. Open actions reviewed and each confirmed, reassigned or closed.
                4. One change made in month two, explained to attendees.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Four attendee conversations held, all inherited actions confirmed, reassigned or closed, and one explained change made."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read the last eight weeks of decks and notes"
                - "Ask four regular attendees what they would keep and change"
                - "Confirm, reassign or close every inherited open action"
                - "Make one change in month two and explain why"
            - name: Fifteen-minute metrics huddle for a frontline team
              description: |-
                ## Purpose
                Frontline teams, such as a warehouse shift, a support desk or a clinic front office, rarely see the numbers leaders discuss. A standing 15-minute huddle around a board with four or five team-level measures, last week's result and one improvement to try, links daily work to the figures in the leadership review.

                ## Milestones
                1. Four or five team-level measures chosen with the team.
                2. A board, physical or on screen, updated before each huddle.
                3. One improvement idea chosen and owned at each huddle.
                4. Eight huddles held, each within 15 minutes.

                ## Notes
                Pick measures the team can influence in a week, such as tickets resolved first time, not company revenue.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight weekly huddles held within 15 minutes, each with an updated board and one owned improvement idea."
                cadence: rolling
              tasks:
                - "Ask the team which four measures they can influence each week"
                - "Set up a board with last week's result for each measure"
                - "Update the huddle board before the next huddle @recurring(weekly:fri)"
                - "Agree one improvement idea and its owner at each huddle"
            - name: Running the review through a crisis or rapid growth
              description: |-
                ## Purpose
                In a crisis or a sudden growth spurt, weekly is too slow and the usual deck covers the wrong things. A temporary format, with a short daily check of three or four critical numbers and a clear end date, lets leaders respond fast without abandoning the weekly review for good.

                ## Milestones
                1. Three or four critical numbers chosen for the period.
                2. A short daily check with a fixed time and a ten-minute limit.
                3. An end date or exit condition agreed at the start.
                4. The normal weekly format restored and the period reviewed.

                ## Notes
                Write the exit condition down on day one. Temporary daily meetings have a habit of becoming permanent.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A temporary format with a written exit condition was used and the normal weekly review was restored on or before the agreed end."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Choose the three or four numbers that matter most this month"
                - "Set a ten-minute daily check at a fixed time"
                - "Write down the exit condition and end date"
                - "Restore the weekly format and hold a short review of the period"
            - name: Weekly review for a multi-site business
              description: |-
                ## Purpose
                With three shops, clinics or branches, the total can look fine while one site struggles. A site comparison page, with the same five measures for each location and the site managers presenting in rotation, makes differences visible and lets managers learn from each other.

                ## Milestones
                1. The same five measures defined for every site.
                2. A one-page site comparison with each site in its own row.
                3. Site managers presenting in rotation, two per week.
                4. One practice copied from the strongest site to another within a quarter.

                ## Notes
                Compare sites on rates as well as totals, so a large branch does not always look best.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A site comparison page is used for eight weeks with rotating site presenters and one recorded practice shared between sites."
                cadence: rolling
              tasks:
                - "Agree five measures every site can report the same way"
                - "Build a site comparison page with one row per site"
                - "Set up a rota with two site managers presenting each week"
                - "Record one practice copied from the strongest site each quarter"
            - name: Bringing a new metric presenter up to speed
              description: |-
                ## Purpose
                New presenters are often handed a metric on Friday and expected to explain it on Tuesday. A short onboarding, covering the definition, history, usual range, common causes of movement and a dry run with the previous owner, lets them present with confidence from their first week.

                ## Milestones
                1. A handover note covering definition, history, normal range and common causes.
                2. A 30-minute session with the previous owner or the data contact.
                3. A dry run of the first commentary reviewed by the chair.
                4. The new presenter's first three slots completed without a deferred question.

                ## Notes
                Start from the **Onboarding plan** template.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A new presenter has a handover note, a dry run reviewed by the chair, and three slots presented without deferring a question."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Set up the presenter's onboarding from the onboarding plan template"
                - "Ask the previous owner to write a one-page handover note"
                - "Book 30 minutes with the previous owner or data contact"
                - "Review the presenter's first commentary before it goes out"
            - name: Written narrative format for the weekly review
              description: |-
                ## Purpose
                Writing prose about the numbers forces clearer thinking than bullet points on a slide, and some leadership teams run their weekly review entirely from a written document. Trying a two-page narrative, written by the owners and read silently at the start, shows whether your group gets better decisions from writing than from charts.

                ## Milestones
                1. A two-page narrative structure: headline, what moved, why, what we are doing, asks.
                2. Charts kept to an appendix referenced from the text.
                3. Four weeks run on the narrative format.
                4. A decision recorded on whether to keep, adapt or drop it.

                ## Notes
                Ban vague words like 'significant' unless a number follows. That rule alone sharpens most narratives.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Four weekly reviews run from a written narrative, followed by a recorded keep, adapt or drop decision."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Draft the two-page narrative structure with five headings"
                - "Ask the agent to turn last week's commentary into a sample narrative for editing"
                - "Run four reviews from the narrative with charts in an appendix"
                - "Record whether to keep, adapt or drop the format"
            - name: Owner forecasts for next week's numbers
              description: |-
                ## Purpose
                Asking each owner to forecast next week's value of their metric turns the review from explaining the past into predicting the future, and shows quickly who understands their numbers. Tracking forecast against actual over a quarter reveals which metrics are predictable and which owners need support.

                ## Milestones
                1. A forecast column added to each metric page.
                2. Owners submitting a one-number forecast with the commentary.
                3. Forecast error tracked per metric for a quarter.
                4. The quarter's forecast accuracy reviewed without blame.

                ## Notes
                The point is calibration, not a target. Never tie forecast accuracy to performance reviews, or forecasts will be padded.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A full quarter of weekly owner forecasts recorded against actuals, with error per metric reviewed at quarter end."
                cadence: rolling
              tasks:
                - "Add a forecast and actual column to each metric page"
                - "Explain to owners that forecasts are for learning, not judging"
                - "Record next week's forecast for each metric you own @recurring(weekly:thu)"
                - "Review forecast error per metric at the end of the quarter"
            - name: Measuring whether the review changes decisions
              description: |-
                ## Purpose
                If nobody could name a decision the review made last quarter, it is costing an hour a week of everyone's time for little return. Tracking how many actions closed, how many moved the metric they targeted and how many decisions were recorded gives the chair an honest answer and the evidence to keep, change or stop the meeting.

                ## Milestones
                1. Three measures of the meeting itself: actions closed, actions that moved their metric, decisions recorded.
                2. A quarter of actions scored on outcome.
                3. The cost of the meeting in attendee hours worked out.
                4. A keep, change or stop recommendation presented to the senior attendee.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A quarterly scorecard of actions closed, actions that moved their metric and decisions recorded is presented with a keep, change or stop recommendation."
                cadence: cyclic
              tasks:
                - "Count the decisions recorded in last quarter's notes"
                - "Work out the meeting's cost in attendee hours per quarter"
                - "Score last quarter's closed actions on whether they moved their metric @recurring(quarterly)"
                - "Present a keep, change or stop recommendation to the senior attendee"
---

# Weekly Metrics Review Meeting

This area is for whoever runs, chairs or presents at the weekly numbers meeting: the manager who owns the agenda, the team members who each explain a metric, and the small business owner who reviews five numbers on a Friday afternoon. It starts with the foundations (a written purpose, the metrics that earn a slot, roles, a fixed time, a data freeze, a deck layout, an agenda and an action log), moves through the weekly routines and the skills of explaining movements and chairing well, then the decisions that shorten and sharpen the meeting, dated events such as the pilot and the quarter-end session, versions for different teams and businesses, and finally specialist formats like written narratives and owner forecasts.

What repeats is the weekly rhythm of deck build, owner commentary, pre-read, action check, notes and a short summary for the wider team, a monthly deck prune, data issue chase and escalation check, a quarterly review of the meeting itself, and a yearly refresh of targets and metric choices. The Operational checklist, Meeting notes, Metrics log and Onboarding plan templates pair with the deck build, the notes record, the small business review and bringing a new presenter up to speed. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
