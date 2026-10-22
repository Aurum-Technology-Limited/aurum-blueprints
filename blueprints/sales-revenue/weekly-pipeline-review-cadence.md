---
id: sales-revenue.weekly-pipeline-review-cadence
name: Weekly Pipeline Review Cadence
description: "A weekly pipeline meeting that inspects what changed, slipped and stalled, built on a data cut-off, rep pre-work, firm next-step rules and an action log the team actually closes."
category: business
version: 1.0.0
tags: [sales-revenue, weekly-pipeline-review-cadence, manager, team, pipeline-review, deal-inspection, sales-meetings, close-dates]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - meeting-notes
    - metrics-log
    - one-on-one
  pillars:
    - name: Sales & Revenue
      emoji: "💼"
      description: "Turning interest into revenue: prospecting and pipeline, discovery and demos, proposals and negotiation, forecasting, key accounts, sales process, enablement and compensation."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Weekly Pipeline Review Cadence
          description: "Running a disciplined weekly meeting that inspects stage changes, slipped close dates and next steps rather than reading the CRM aloud."
          projects:
            - name: Audit of the pipeline meeting you run today
              description: |-
                ## Purpose
                Before changing anything, it pays to know what the current meeting actually does with its hour. Sitting through two reviews with a stopwatch and a tally sheet shows how much time goes on reading the CRM aloud, how many deals get discussed, and whether anything decided last week was ever checked again.

                ## Milestones
                1. Two consecutive reviews timed by segment: reading data, discussing deals, agreeing actions, off topic.
                2. The number of deals discussed and the share of open pipeline value they represent recorded.
                3. Actions agreed in the first meeting checked for follow-up in the second.
                4. Three sellers asked privately what the meeting is for and whether it helps them.

                ## Notes
                Do this quietly. Announcing an audit changes behaviour for two weeks and hides the real pattern.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page audit of two reviews showing time by segment, deals covered, actions carried over and three seller views."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Print a tally sheet with four columns for how meeting time is spent"
                - "Time each segment of the next two pipeline reviews"
                - "Count the deals discussed and their share of open pipeline value"
                - "Ask three sellers in private what the meeting does for them"
            - name: One-paragraph purpose for the pipeline review
              description: |-
                ## Purpose
                Most pipeline meetings drift because they try to be a forecast call, a coaching session and a status update at once. A written purpose that says the meeting exists to inspect change, catch risk early and agree next actions gives everyone a test for what belongs in the hour and what goes elsewhere.

                ## Milestones
                1. A purpose paragraph of no more than five sentences agreed with your own manager.
                2. A short list of what the meeting is not for, with where each of those topics goes instead.
                3. The purpose read out at the next review and pinned at the top of the agenda.
                4. Sellers given a week to challenge the wording, with any changes made.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written purpose and a not-for list sit at the top of the agenda, agreed with your manager and shared with the team."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write three sentences on what the pipeline review must achieve each week"
                - "List the topics that belong in forecasting calls or one-to-ones instead"
                - "Agree the wording with your own manager"
                - "Read the purpose aloud at the start of the next review"
            - name: Fixed slot, length and attendee list
              description: |-
                ## Purpose
                A review that moves around the calendar or swells to fifteen people stops being a working meeting. Choosing one weekly slot, a hard length of 45 to 60 minutes and a named list of who attends and who reads the summary instead makes the meeting dependable and keeps the room small enough to talk honestly.

                ## Milestones
                1. One weekly slot chosen that avoids month-end close and existing forecast calls.
                2. A hard finish time set and printed on the invite.
                3. Attendees named, with optional guests such as presales or marketing listed separately.
                4. A recurring invite sent for the next twelve weeks with the agenda attached.

                ## Notes
                Early in the week works best: Monday is often lost to holidays and catch-up, while Thursday leaves too little week to act on what was agreed.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A recurring invite with a fixed weekly slot, a stated finish time and a named attendee list runs for twelve consecutive weeks."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Compare three candidate slots against the team's existing calendar"
                - "Decide the meeting length and write the finish time on the invite"
                - "List required attendees and the people who only get the summary"
                - "Send a twelve-week recurring invite with the agenda attached"
            - name: Five-segment pipeline review agenda
              description: |-
                ## Purpose
                Without a fixed running order, the loudest deal takes half the hour and nobody looks at the deals quietly going stale. An agenda of five timed segments, from last week's actions through changes, slips and stalled deals to new pipeline, gives every week the same shape and makes gaps obvious.

                ## Milestones
                1. Five segments named with minutes allocated to each, adding up to the meeting length.
                2. Each segment tied to a report or list that will be on screen.
                3. A parking lot rule written for topics that need more than three minutes.
                4. The agenda used unchanged for four weeks before any edits.

                ## Notes
                A common split for a 50 minute review: actions 5, what changed 15, slipped dates 10, stalled deals 10, new pipeline 5, wrap 5.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written five-segment agenda with times and linked reports is used for four consecutive reviews."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Draft the five segments and their minutes on one page"
                - "Link each segment to the CRM report it will use"
                - "Write the parking lot rule for long discussions"
                - "Share the agenda with the team two days before the next review"
            - name: What-changed report for the week
              description: |-
                ## Purpose
                Listing every open deal tells you nothing about the last seven days; listing what moved tells you almost everything. A report showing deals that changed stage, amount or close date, plus new and closed deals since the last snapshot, turns the review from reading the pipeline into inspecting movement.

                ## Milestones
                1. A saved CRM report or export listing stage changes, amount changes and close date changes since last week.
                2. New deals created and deals closed won or lost in the same window shown separately.
                3. Each row showing old value, new value and the seller who made the change.
                4. The report checked against a manual count once to confirm it catches every change.

                ## Notes
                If your CRM cannot report field history, keep last week's export and compare the two files. Ugly but reliable.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A saved report shows every stage, amount and close date change since the previous snapshot, verified once against a manual count."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Check whether the CRM tracks history on stage, amount and close date"
                - "Build a report filtered to changes since the last snapshot date"
                - "Add columns for old value, new value and the seller"
                - "Compare the report with a manual count for one week"
            - name: Data cut-off time and weekly snapshot
              description: |-
                ## Purpose
                When sellers update deals during the meeting, nobody can tell what was true before the conversation started. A cut-off time, such as Monday at noon, and a saved snapshot taken right after it, fixes the numbers the review discusses and makes week-on-week comparison possible.

                ## Milestones
                1. A cut-off day and time agreed and written on the agenda.
                2. A method chosen for saving the snapshot: a CRM snapshot feature, a scheduled export or a copied report.
                3. Snapshots stored in one folder named by date.
                4. Four consecutive weekly snapshots taken on time.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A cut-off time is published and four consecutive weekly snapshots are saved by date in one folder."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Pick the cut-off day and time and announce it to the team"
                - "Choose how the snapshot will be saved and create the dated folder"
                - "Save the pipeline snapshot straight after the cut-off @recurring(weekly:mon)"
            - name: Rep pre-work checklist before every review
              description: |-
                ## Purpose
                Sellers who arrive unprepared spend the meeting updating the CRM while everyone watches. A short checklist they complete before the cut-off, covering close dates, stages, amounts and next steps on every open deal, moves that admin out of the room so the hour can go on judgement.

                ## Milestones
                1. A checklist of no more than six items agreed with the team.
                2. Each item written as something a manager can verify in the CRM.
                3. The checklist completed by every seller before the cut-off for four weeks running.
                4. Gaps found at the cut-off raised privately with the seller, not in the meeting.

                ## Notes
                Start from the **Operational checklist** template. Keep it short: a ten-item list gets ticked without being done.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every seller completes the pre-work checklist before the cut-off for four consecutive weeks, checked in the CRM."
                cadence: rolling
              tasks:
                - "Draft six pre-work items from the operational checklist template"
                - "Agree the checklist with the team at the next review"
                - "Update every open deal against the pre-work checklist before the cut-off @recurring(weekly:mon)"
                - "Message any seller privately whose deals miss the checklist"
            - name: Standard for a real next step
              description: |-
                ## Purpose
                "Follow up next week" is the most common next step in any CRM and the least useful. A written standard saying a next step must be dated, owned, involve the buyer and move the deal forward gives the review a quick test for every deal and exposes the ones with nothing actually planned.

                ## Milestones
                1. A one-line definition of a real next step agreed with the team.
                2. Five examples and five non-examples written from the team's own deals.
                3. A CRM view showing open deals with no next step or a past-dated one.
                4. The share of deals meeting the standard recorded for four weeks.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written next-step standard with examples is in use, and the share of open deals meeting it is recorded for four weeks."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the four tests a next step must pass"
                - "Pull five good and five weak next steps from current deals"
                - "Build a view of deals with a missing or past-dated next step"
                - "Record the share of deals meeting the standard each week for a month"
            - name: Rules for slipped close dates
              description: |-
                ## Purpose
                A close date pushed once is normal; a date pushed every month for a quarter is a deal that is not real. Writing down what counts as a slip, how many pushes trigger a closer look, and what evidence a seller needs to move a date, makes the slipped-dates segment fair and consistent.

                ## Milestones
                1. A definition of a slip agreed, such as any move of the close date into a later month.
                2. A threshold set for repeat slips, such as a third push, that sends the deal to a requalification conversation.
                3. A rule for what a seller must say when moving a date: what changed on the buyer side.
                4. The rules shared and applied for one full month.

                ## Notes
                Ask for the buyer event that moved the date, not the seller's opinion. Budget frozen, signatory on leave and legal queue are reasons; feels slower is not.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written slip rules with a repeat-slip threshold are shared and applied to every date change for one month."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pull last quarter's deals and count how often close dates moved"
                - "Set the slip definition and the repeat-slip threshold"
                - "Write the one-sentence reason a seller must give for each move"
                - "Present the rules at the next review and apply them from that week"
            - name: Deal selection rules for the review list
              description: |-
                ## Purpose
                No team can discuss forty deals in an hour, so something decides which twelve get airtime. Explicit selection rules, such as everything closing this month, anything above a value threshold, anything that slipped and anything stalled for fourteen days, replace the habit of discussing whatever the seller mentions first.

                ## Milestones
                1. Four or five selection rules written in priority order.
                2. A CRM view or filter that produces the review list automatically.
                3. The list size checked against meeting length, aiming for ten to fifteen deals.
                4. Deals outside the rules handled in one-to-ones or the written summary.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written selection rules produce a review list of ten to fifteen deals from a saved view for four consecutive weeks."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the deal types that must be seen every week"
                - "Set the value threshold that earns a deal automatic discussion"
                - "Build a saved view combining the rules"
                - "Check the list length against the minutes available"
            - name: Weekly pipeline review run-sheet
              description: |-
                ## Purpose
                Running the same meeting well every week is a habit, and habits need a script. A run-sheet with the order, the reports, the timings and the closing summary keeps the review on time even when the manager is tired, travelling or covered by someone else.

                ## Milestones
                1. A one-page run-sheet with segment order, timings, reports and opening and closing lines.
                2. Notes for each review kept in one running document, newest first.
                3. The review started and finished on time for six weeks out of eight.
                4. A deputy able to run the meeting from the run-sheet alone.

                ## Notes
                Start from the **Meeting notes** template for the running record, with one dated entry per review.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The review runs from a written run-sheet, starts and ends on time in six of eight weeks, and has a running notes record."
                cadence: rolling
              tasks:
                - "Turn the agenda into a run-sheet with opening and closing lines"
                - "Create the running notes document from the meeting notes template"
                - "Run the pipeline review from the run-sheet and note decisions @recurring(weekly:tue)"
                - "Walk a deputy through the run-sheet so they can cover"
            - name: Action log closed review to review
              description: |-
                ## Purpose
                Actions agreed in a pipeline review are usually forgotten by Thursday unless someone reads them back. A log with the deal, the action, the owner and a due-by-next-review date, opened at the start of every meeting, makes commitments stick and shows which sellers follow through.

                ## Milestones
                1. An action log with columns for deal, action, owner, date agreed and status.
                2. Every action from the review entered before the end of the day.
                3. Last week's actions reviewed in the first five minutes of each meeting.
                4. At least 80 percent of actions closed by the next review for a month.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The action log shows at least 80 percent of review actions closed by the following review for four consecutive weeks."
                cadence: rolling
              tasks:
                - "Set up the action log with deal, action, owner, date and status columns"
                - "Enter every action agreed before the end of review day"
                - "Read back and close last week's actions at the start of the review @recurring(weekly:tue)"
            - name: Stalled deal list from activity dates
              description: |-
                ## Purpose
                Deals rarely die loudly; they go quiet, and the CRM keeps them at full value. A weekly list of open deals with no logged buyer activity in fourteen days, pulled before the meeting, gives the stalled segment its material and catches risk while there is still time to act.

                ## Milestones
                1. A stall threshold set, such as fourteen days without buyer contact, possibly longer for enterprise deals.
                2. A saved view listing stalled deals with last activity date and value.
                3. The list pulled every week before the cut-off.
                4. Each stalled deal given a revive, requalify or close-lost decision within two reviews.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly stalled list is pulled for eight weeks, and every listed deal has a revive, requalify or close-lost decision within two reviews."
                cadence: rolling
              tasks:
                - "Choose the number of quiet days that marks a deal as stalled"
                - "Build a view of open deals with no buyer activity past the threshold"
                - "Pull the stalled deal list for the review @recurring(weekly:mon)"
                - "Record a revive, requalify or close-lost decision for each stalled deal"
            - name: Repeat slipper tracker
              description: |-
                ## Purpose
                Individual slips get discussed and forgiven each week, so nobody sees that the same six deals have moved three times. A simple tally of pushes per deal, refreshed monthly, shows the deals the pipeline keeps carrying on hope and the sellers whose dates are least reliable.

                ## Milestones
                1. A tracker listing each open deal with its count of close date pushes this quarter.
                2. Deals at or above the repeat-slip threshold flagged for the next review.
                3. Slip counts by seller summarised once a month for one-to-one conversations.
                4. The number of repeat slippers trending down over a quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly tracker of close date pushes per deal is kept for a quarter, with every repeat slipper discussed at a review."
                cadence: rolling
              tasks:
                - "Build the tracker from the weekly snapshots in the dated folder"
                - "Count close date pushes per deal and flag repeat slippers @recurring(monthly:3)"
                - "Add flagged deals to the next review's slipped segment"
                - "Share each seller's slip count privately in their one-to-one"
            - name: Monthly stale deal clear-out
              description: |-
                ## Purpose
                Pipelines swell with deals older than twice the normal sales cycle that nobody wants to close as lost. A monthly clear-out, with an agreed age limit and a short note on each closed deal, keeps the review looking at live opportunities and the coverage numbers honest.

                ## Milestones
                1. An age limit agreed, such as twice the median cycle length for the segment.
                2. A view of open deals past the age limit.
                3. Each aged deal closed lost, moved to a nurture list or given a dated reason to stay open.
                4. Twelve consecutive monthly clear-outs completed.

                ## Notes
                Close lost with an honest reason rather than deleting. The loss reasons feed later analysis.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every month for a year, all deals past the agreed age limit are closed lost, moved to nurture or given a dated reason to stay open."
                cadence: rolling
              tasks:
                - "Work out the median cycle length for each segment from closed deals"
                - "Set the age limit and build the aged deal view"
                - "Clear out deals past the age limit with each seller @recurring(monthly:20)"
            - name: Health score for the review itself
              description: |-
                ## Purpose
                Meetings get inspected less than the deals they discuss. Tracking four numbers each month, such as start and finish on time, share of actions closed, share of pipeline value discussed and seller rating of usefulness, tells you whether the review is earning its hour.

                ## Milestones
                1. Four health measures chosen with a simple way to record each.
                2. A one-question seller rating collected after the last review of each month.
                3. Monthly results logged for six months.
                4. One change made each time a measure drops two months running.

                ## Notes
                Start from the **Metrics log** template, one row per month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six months of review health measures are logged, with a recorded change after any two-month decline."
                cadence: rolling
              tasks:
                - "Pick four measures of meeting health and set up the metrics log"
                - "Write the one-question usefulness rating for sellers"
                - "Log the month's review health measures @recurring(monthly:28)"
            - name: Written summary sent after every review
              description: |-
                ## Purpose
                Leaders, presales and absent sellers all want to know what the review found, and without a summary they ask individually or guess. A short written note sent within two hours, covering material changes, risks, decisions and actions, spreads the outcome and saves several follow-up conversations.

                ## Milestones
                1. A summary format of no more than ten lines agreed with your own manager.
                2. The distribution list set, separate from the attendee list.
                3. A summary sent within two hours of each review for eight weeks.
                4. Readers asked once whether the summary answers their questions.

                ## Notes
                Lead with the two or three things that changed the picture this week, not a recap of every deal.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A summary of ten lines or fewer is sent within two hours of each review for eight consecutive weeks."
                cadence: rolling
              tasks:
                - "Agree the summary format and distribution list with your manager"
                - "Ask the agent to draft the summary from the review notes and action log"
                - "Send the review summary within two hours of the meeting @recurring(weekly:tue)"
            - name: Quarterly refresh of review rules and thresholds
              description: |-
                ## Purpose
                Thresholds set in January, such as the stall days, value cut-off or age limit, can be wrong by July as deal sizes and cycle lengths shift. A short quarterly check of each rule against the last quarter's data keeps the review strict where it should be and stops it flagging noise.

                ## Milestones
                1. Every review rule and threshold listed on one page with its current value.
                2. Each threshold compared with last quarter's actual cycle length, deal size and slip rate.
                3. Changes agreed and announced before the first review of the new quarter.
                4. Four quarterly refreshes completed in a year.
              priority: low
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Four quarterly refreshes in a year, each comparing every threshold with the previous quarter's data and recording any change."
                cadence: cyclic
              tasks:
                - "List every rule and threshold the review uses on one page"
                - "Compare review thresholds with last quarter's cycle and slip data @recurring(quarterly)"
                - "Announce any threshold changes before the new quarter's first review"
            - name: New pipeline added segment
              description: |-
                ## Purpose
                Inspecting only existing deals can make the review feel healthy while next quarter quietly empties. Five minutes each week on deals created since the last snapshot, with a monthly look at the four-week trend by seller, keeps creation visible without turning the meeting into an activity report.

                ## Milestones
                1. A weekly creation target agreed with your manager, in value or deal count.
                2. New deals since the snapshot shown in their own segment with source and seller.
                3. A four-week trend by seller reviewed once a month.
                4. Any seller below half the target for a month raised in their one-to-one.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "New pipeline is reviewed weekly against a written target, with a monthly four-week trend by seller kept for a quarter."
                cadence: rolling
              tasks:
                - "Agree the weekly new pipeline target with your manager"
                - "Add a new deals view filtered to the snapshot window"
                - "Review the four-week trend of new pipeline by seller @recurring(monthly:9)"
            - name: Monthly look at early-stage deals
              description: |-
                ## Purpose
                Weekly reviews naturally favour deals closing soon, so early-stage opportunities are left alone until they are suddenly late-stage and unqualified. One review a month that gives fifteen minutes to deals in the first two stages catches weak qualification and missing buyers while they are still cheap to fix.

                ## Milestones
                1. One review each month designated for the early-stage segment.
                2. A view of deals in the first two stages, sorted by age.
                3. Each early-stage deal checked for a named buyer, a stated problem and a dated next meeting.
                4. Deals without all three moved back, requalified or closed.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly early-stage segments are held, each recording which deals passed the three checks and which were moved."
                cadence: rolling
              tasks:
                - "Pick which review each month will include the early-stage segment"
                - "Build a view of first and second stage deals sorted by age"
                - "Check every early-stage deal for buyer, problem and next meeting @recurring(monthly:15)"
            - name: Inspection questions that work in a group
              description: |-
                ## Purpose
                Questions that suit a private deal coaching session can feel like an interrogation in front of the whole team, and sellers respond by saying less. A short bank of questions designed for the group setting, focused on evidence and change rather than blame, keeps the room honest and the sellers talking.

                ## Milestones
                1. Fifteen questions written, grouped under change, evidence, risk and next step.
                2. Each question checked for whether it could be answered with a fact rather than a feeling.
                3. Three questions practised in each of four reviews.
                4. Two sellers asked which questions felt useful and which felt hostile.

                ## Notes
                What changed since last week, what did the buyer say in their own words, and what would make this slip are three that rarely fail.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written bank of fifteen group-safe inspection questions has been used across four reviews, with seller feedback recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write fifteen questions under change, evidence, risk and next step"
                - "Strike out any question that could be answered with a feeling"
                - "Pick three questions to use in the next review"
                - "Ask two sellers which questions helped and which did not"
            - name: Reading a pipeline waterfall chart
              description: |-
                ## Purpose
                Pipeline waterfalls, running from last week's total through added, won, lost, pushed out and pulled in to this week's total, explain movement in one picture. Learning to read and build one lets the manager open the review with the real story of the week instead of a single total that hides churn.

                ## Milestones
                1. The six waterfall categories understood and defined for your CRM fields.
                2. One waterfall built by hand from two weekly snapshots.
                3. The chart explained to the team in under three minutes.
                4. A recurring version built from the snapshot folder or the CRM.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A pipeline waterfall built from two snapshots has been presented at a review and a repeatable version exists."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Define added, won, lost, pushed out and pulled in for your CRM"
                - "Build one waterfall by hand from two consecutive snapshots"
                - "Present the waterfall at the next review in under three minutes"
                - "Save the steps so the chart can be rebuilt each week"
            - name: Spotting optimism and sandbagging in deal updates
              description: |-
                ## Purpose
                Some sellers hear yes in every call while others keep deals low to look good at quarter end, and both distort the review. Learning the signals of each, such as next steps with no buyer involved or late-stage deals held back at early stages, lets the manager correct the picture without accusing anyone.

                ## Milestones
                1. A list of five signals of over-optimism and five of under-calling, drawn from your own past deals.
                2. Each seller's last two quarters compared: stage at week eight versus outcome.
                3. One private conversation per seller using their own pattern as evidence.
                4. The patterns rechecked a quarter later.

                ## Notes
                Bring data, not labels. Your deals at stage four closed at half the team rate lands better than calling someone optimistic.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every seller's stage-versus-outcome pattern for two quarters is written down and discussed once, then rechecked a quarter later."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List five signs of over-optimism and five of under-calling from past deals"
                - "Compare each seller's mid-quarter stages with final outcomes"
                - "Hold one private conversation per seller using their pattern"
                - "Recheck each seller's pattern at the end of next quarter"
            - name: Facilitating a pipeline review in 45 minutes
              description: |-
                ## Purpose
                Most overrunning reviews are a facilitation problem, not a data problem: one deal debated for twenty minutes, side conversations, a seller presenting every email. Practising a few techniques, such as visible timeboxes, the parking lot and the one-question rule per deal, brings the meeting back inside its slot.

                ## Milestones
                1. A visible timer used for every segment for four weeks.
                2. Parking lot items captured and handled after the meeting, not during.
                3. A one-question rule per deal tried for two reviews.
                4. The review finishing within 45 minutes in three of four weeks.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Using timeboxes and a parking lot, the review finishes within 45 minutes in three of four consecutive weeks."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Put a visible timer on screen for each agenda segment"
                - "Name a parking lot keeper at the start of the review"
                - "Try the one-question rule per deal for two weeks"
                - "Note the finish time of each review for a month"
            - name: Presenting a deal in ninety seconds
              description: |-
                ## Purpose
                For sellers, the review goes well when they can say in ninety seconds what changed, what the buyer committed to and what could go wrong. Practising a fixed structure for that update makes the seller look in command of the deal and frees the remaining time for the question that matters.

                ## Milestones
                1. A four-part update structure learnt: what changed, buyer commitment, risk, next step.
                2. Three of your own deals written up in that structure.
                3. Each update rehearsed aloud and timed under ninety seconds.
                4. The structure used in two consecutive reviews.

                ## Notes
                Lead with the change. The manager has already seen the stage and amount on screen.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A seller presents every deal in two consecutive reviews using the four-part structure, each update under ninety seconds."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write the four parts of the update on a card"
                - "Draft updates for your three biggest deals in that structure"
                - "Time yourself saying each update aloud"
                - "Use the structure for every deal in the next two reviews"
            - name: Asking for the evidence behind a stage
              description: |-
                ## Purpose
                Every stage in the CRM is a seller's claim, and the review is where claims get tested. Learning to ask for the specific buyer evidence that the stage's exit criteria require, such as a confirmed budget holder or a scheduled technical review, turns stage discussion from debate into a quick check.

                ## Milestones
                1. The exit criteria for each stage written on one card for the meeting.
                2. One evidence question per stage drafted from those criteria.
                3. Evidence questions used on every late-stage deal for a month.
                4. Deals without evidence moved back a stage with the seller's agreement.

                ## Notes
                If your stages have no written exit criteria, raise it with whoever owns the sales process. Do not invent them inside the review.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "For a month, every late-stage deal discussed is checked against its stage exit criteria, and unsupported stages are corrected."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Copy each stage's exit criteria onto one reference card"
                - "Write one evidence question for each stage"
                - "Ask the evidence question on every late-stage deal for four reviews"
                - "Move back any deal whose stage the evidence does not support"
            - name: One meeting or two for pipeline and forecast
              description: |-
                ## Purpose
                Pipeline inspection asks what is true about each deal; forecasting asks what number to commit. Running both in one meeting saves an hour but tends to turn deal discussion into negotiation over the call. Deciding deliberately, with your manager, whether to combine or split them settles a tension that otherwise resurfaces every week.

                ## Milestones
                1. The current split of time between inspection and forecast talk measured over two reviews.
                2. The options written out: combined, split by day, or split by segment of the same meeting.
                3. A decision agreed with your manager and the forecasting owner.
                4. The chosen format run for six weeks before reconsidering.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision to combine or split pipeline and forecast meetings is agreed with your manager and run for six weeks."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Time how long the last two reviews spent on the forecast number"
                - "Write the three format options with one advantage and one cost each"
                - "Agree the format with your manager and the forecasting owner"
                - "Run the chosen format for six weeks and note what changed"
            - name: Replacing the CRM screen-share with a pre-read
              description: |-
                ## Purpose
                Scrolling the CRM live is the main reason reviews feel like reading aloud. Sending a one-page pre-read of the week's changes, slips and stalled deals the evening before lets everyone arrive informed, and the meeting can start with questions instead of a tour.

                ## Milestones
                1. A one-page pre-read layout drafted from the what-changed report and stalled list.
                2. The pre-read sent the evening before for four weeks.
                3. The live screen-share limited to deals raised in questions.
                4. Meeting length and seller rating compared before and after.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page pre-read is sent the evening before four consecutive reviews, with meeting length compared before and after."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Sketch a one-page pre-read with changes, slips and stalled deals"
                - "Ask the agent to assemble the first pre-read from the weekly reports"
                - "Send the pre-read the evening before the next review"
                - "Compare meeting length for four weeks before and after"
            - name: Choosing the review view by seller, stage or month
              description: |-
                ## Purpose
                Walking through the pipeline seller by seller is the default, but it hides patterns across the team such as a stage where every deal stalls. Trying the same review grouped by stage and by close month, and choosing deliberately, often shows a better lens for the questions your team needs answering.

                ## Milestones
                1. The same week's pipeline reviewed three ways: by seller, by stage and by close month.
                2. Notes on what each view revealed that the others did not.
                3. A default view chosen, with one alternate used monthly.
                4. The choice recorded in the run-sheet.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three review views have been trialled on real data and the chosen default and monthly alternate are written into the run-sheet."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Build saved views grouped by seller, by stage and by close month"
                - "Use a different view in each of three consecutive reviews"
                - "Write one line on what each view showed"
                - "Record the chosen default view in the run-sheet"
            - name: Thirty percent shorter review pilot
              description: |-
                ## Purpose
                If the review has crept to ninety minutes, sellers lose a morning of selling time each week across the whole team. A six-week pilot cutting the slot by about a third, with the agenda adjusted and results measured, tests whether the meeting can do the same job in less time.

                ## Milestones
                1. Current average length and total team hours spent recorded.
                2. A shorter agenda drafted with each segment cut proportionally or dropped.
                3. The shorter format run for six weeks.
                4. Actions closed and slips caught compared with the six weeks before.
              priority: low
              deadlineOffsetDays: 75
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A six-week shorter review pilot is completed and compared with the previous six weeks on actions closed and slips caught."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Calculate the team hours the review currently uses each week"
                - "Draft the shortened agenda with new segment timings"
                - "Run the shorter format for six weeks"
                - "Compare actions closed and slips caught before and after"
            - name: Moving deal coaching out to one-to-ones
              description: |-
                ## Purpose
                When the manager starts coaching one seller on one deal, the other eight people wait. Agreeing that the review spots the issue and the one-to-one works on it keeps the group meeting short and gives coaching the private time it needs.

                ## Milestones
                1. A rule agreed: issues needing more than three minutes go to the seller's next one-to-one.
                2. A column in the action log marking items moved to one-to-ones.
                3. Every moved item discussed at the next one-to-one for a month.
                4. Fewer than two coaching detours per review for four weeks.

                ## Notes
                Start from the **1:1** template and add a standing line for deals carried over from the pipeline review.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "For four weeks, coaching issues are moved to one-to-ones and discussed there, with fewer than two coaching detours per review."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Announce the three-minute rule for coaching topics at the next review"
                - "Add a moved-to-one-to-one column in the action log"
                - "Add a pipeline carry-over line to each seller's one-to-one notes"
                - "Count coaching detours in each review for a month"
            - name: Red, amber, green deal health flag
              description: |-
                ## Purpose
                Stage and probability say where a deal sits, not whether it is in trouble. A simple health flag set by the seller each week, with written meanings for red, amber and green, gives the review a quick way to sort attention and shows where the seller and the evidence disagree.

                ## Milestones
                1. Written definitions for red, amber and green tied to buyer evidence.
                2. A health field added to the CRM or the review list.
                3. Every deal on the review list flagged before the cut-off for four weeks.
                4. Flags compared with outcomes at quarter end to test the definitions.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A defined health flag is set on every review-list deal for four weeks and checked against quarter-end outcomes."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write one-sentence definitions for red, amber and green"
                - "Ask your CRM administrator to add a health field or add it to the list"
                - "Ask sellers to set the flag before each cut-off"
                - "Compare flags with outcomes at the end of the quarter"
            - name: Seller-led review rotation trial
              description: |-
                ## Purpose
                If the manager always runs the meeting, sellers wait to be asked. Rotating a seller into the facilitator role each week, using the same run-sheet, builds ownership of the pipeline and gives future team leads practice at running an inspection meeting.

                ## Milestones
                1. A rotation order agreed for eight weeks.
                2. Each facilitator briefed on the run-sheet two days before their week.
                3. The manager speaking only in the last ten minutes of each seller-led review.
                4. The team's view of the trial collected at the end.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Eight seller-led reviews are completed from the run-sheet and the team's verdict on keeping the rotation is recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Draw up an eight-week facilitator rotation"
                - "Brief the first facilitator on the run-sheet"
                - "Hold back your own comments until the final ten minutes"
                - "Ask the team at week eight whether to keep the rotation"
            - name: Twice-weekly reviews in the last three weeks of quarter
              description: |-
                ## Purpose
                In the final three weeks of a quarter, a week between reviews is long enough for a deal to slip out unnoticed. Switching to two short reviews a week, focused only on deals closing this quarter and their paperwork steps, keeps every signature path visible until the books close.

                ## Milestones
                1. A shortened agenda covering only this quarter's closing deals and their remaining steps.
                2. Two review slots a week booked for the last three weeks.
                3. Each deal listed with the next paperwork step and its owner on both sides.
                4. A short note at quarter end on which deals slipped and why.

                ## Notes
                Keep these to 30 minutes. Long meetings in the last fortnight take sellers away from buyers.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Six short reviews run in the last three weeks of the quarter, followed by a written note on which deals slipped and why."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Book two 30 minute review slots a week for the final three weeks"
                - "Write the shortened agenda for quarter-end reviews"
                - "List each closing deal with its next paperwork step and owners"
                - "Write the post-quarter note on slips and their causes"
            - name: Start-of-quarter pipeline scrub
              description: |-
                ## Purpose
                The first week of a quarter is when stale close dates from last quarter pile up and the new number looks better covered than it is. A dedicated scrub review in week one, re-dating or closing every deal that carried over, gives the quarter an honest starting line.

                ## Milestones
                1. A list of every deal whose close date fell in the previous quarter.
                2. Each carried deal re-dated with a buyer reason or closed.
                3. Opening pipeline for the quarter recorded after the scrub.
                4. The scrub completed by the end of the first week.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every carried-over deal is re-dated with a reason or closed in week one, and the post-scrub opening pipeline is recorded."
                cadence: cyclic
              tasks:
                - "Pull all open deals with close dates in the quarter just ended"
                - "Hold the start-of-quarter scrub review in week one @recurring(quarterly)"
                - "Record the opening pipeline figure after the scrub"
            - name: Relaunching a review that has lapsed
              description: |-
                ## Purpose
                Reviews that got cancelled for a few busy weeks rarely restart on their own, and when they do, nobody remembers the rules. A deliberate relaunch, with a reset session, the purpose restated and the first four weeks protected, brings the habit back without pretending nothing happened.

                ## Milestones
                1. The reasons for the lapse written down honestly, such as clashes or low value.
                2. A relaunch session held with purpose, agenda and rules restated.
                3. One change made in response to the lapse reasons.
                4. Four consecutive reviews held after the relaunch.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A relaunch session is held and followed by four consecutive weekly reviews with one documented change."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down why the review stopped happening"
                - "Book the relaunch session and send the restated purpose"
                - "Make one change that answers the main lapse reason"
                - "Protect the next four review slots in your own calendar"
            - name: Review before a seasonal slowdown
              description: |-
                ## Purpose
                Before a long holiday period or a regional shutdown, buyers disappear and deals drift while sellers are away. A dedicated review two weeks ahead, checking which deals need a decision before the break and which buyers will be out, avoids a January full of surprises.

                ## Milestones
                1. The slowdown dates for your main markets noted, such as year-end or summer shutdowns.
                2. Each open deal tagged as must-decide-before-break or after-break.
                3. Buyer and seller absences listed against the deals they affect.
                4. Deals restarted with a dated meeting in the first week back.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A pre-slowdown review tags every open deal and records absences, and each deal has a dated meeting in the first week back."
                cadence: cyclic
              tasks:
                - "Note the main slowdown periods for the markets you sell into"
                - "Hold the pre-slowdown review two weeks before the break @recurring(yearly)"
                - "List buyer and seller absences against the affected deals"
                - "Book restart meetings for the first week back"
            - name: Preparing for a senior leader in the review
              description: |-
                ## Purpose
                Having a sales director or chief executive in the room makes sellers either freeze or perform, and the meeting stops being an inspection. Briefing the leader beforehand on the format and their role, and the team on what to expect, keeps the review honest while letting the visitor see how it really works.

                ## Milestones
                1. The leader briefed on the agenda and asked to save questions for the end.
                2. The team told a week ahead who is attending and why.
                3. The review run in its normal format without extra slides.
                4. The leader's feedback captured and any requests logged as actions.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A review with a senior leader attending runs in its normal format, with the leader's feedback written into the action log."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Send the visiting leader the agenda and purpose a week ahead"
                - "Tell the team who is attending and that the format stays the same"
                - "Ask the leader to hold questions until the final ten minutes"
                - "Log the leader's requests as actions with owners"
            - name: First review after a territory or team change
              description: |-
                ## Purpose
                When accounts move between sellers or a new team merges in, deals change hands mid-flight and the history in the CRM often does not travel. A first review focused only on reassigned deals, with the old and new owner both present, catches lost next steps before buyers notice.

                ## Milestones
                1. A list of every open deal that changed owner.
                2. Old and new owners paired for each reassigned deal.
                3. Each handed-over deal confirmed with a dated next step under the new owner.
                4. Any deal without a clear buyer contact flagged for the new owner's first call.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every reassigned open deal is reviewed with both owners present and leaves the review with a dated next step."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Export every open deal whose owner changed in the move"
                - "Pair old and new owners and invite both to the review"
                - "Confirm a dated next step for each handed-over deal"
                - "Flag deals missing a buyer contact for the new owner"
            - name: Inheriting someone else's pipeline review
              description: |-
                ## Purpose
                A new manager walks into a meeting with habits, rules and history they did not set. Running the first month as an observer and a listener, then changing one thing at a time, earns the team's trust and avoids throwing out the parts that were working.

                ## Milestones
                1. The previous manager's agenda, rules and recent notes read.
                2. The first four reviews run largely unchanged while taking notes.
                3. Each seller asked in a one-to-one what to keep and what to drop.
                4. A short list of changes shared with the team, introduced one per fortnight.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "After four observed reviews and one conversation with each seller, a prioritised change list is shared with the team."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the previous manager for the agenda, rules and last month's notes"
                - "Run the next four reviews in the existing format and take notes"
                - "Ask each seller what to keep and what to drop"
                - "Share a short change list and introduce one item per fortnight"
            - name: Player-coach review for a team of three
              description: |-
                ## Purpose
                Team leads who also carry a quota cannot spend an hour a week reviewing three sellers' pipelines, their own included. A 25 minute format with a shared view, one rule that the lead's own deals are reviewed by someone else, and a written summary keeps inspection real without stealing selling time.

                ## Milestones
                1. A 25 minute agenda adapted from the full review.
                2. A peer or manager agreed to inspect the lead's own deals.
                3. The format run for six consecutive weeks.
                4. A one-line summary sent to the lead's manager each week.

                ## Notes
                Your own deals are where blind spots hide. Having someone else question them is the point, not a formality.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A 25 minute review runs for six weeks, with the lead's own deals inspected by someone outside the team."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Cut the full agenda down to a 25 minute version"
                - "Ask your manager or a peer to inspect your own deals"
                - "Run the short review for six consecutive weeks"
                - "Send a one-line summary to your manager after each review"
            - name: Pipeline review across time zones
              description: |-
                ## Purpose
                Spread across eight or more hours of time zones, a team will always find one fixed live slot landing at dawn or dinner for someone. A hybrid format, with a written update from each seller before the cut-off and a shorter live call for the overlap hours, keeps everyone inspected without wearing out the far-flung sellers.

                ## Milestones
                1. Every seller's working hours mapped to find the real overlap window.
                2. A written update format agreed for sellers who cannot attend live.
                3. The live call kept to the overlap window and recorded for the rest.
                4. The live slot rotated monthly if no fair overlap exists.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "For eight weeks, every seller is inspected either live within the overlap window or through a written update before the cut-off."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Map each seller's working hours on one timeline"
                - "Agree a written update format for sellers outside the overlap"
                - "Move the live call into the overlap window"
                - "Share the call recording and summary with those not present"
            - name: A seller's first pipeline review
              description: |-
                ## Purpose
                New sellers often dread the review because they do not know what will be asked or how harsh it will be. Sitting in for two weeks before presenting, and rehearsing the first update with the manager, turns the meeting from an exam into a place to get help on early deals.

                ## Milestones
                1. The review purpose, agenda and rules read before the first meeting.
                2. Two reviews observed without presenting.
                3. The first deal update rehearsed with the manager or a peer.
                4. Feedback on the first live update received and noted.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A new seller observes two reviews, rehearses once, and presents their deals in the third review with feedback noted."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read the review purpose, agenda and pre-work checklist"
                - "Sit in on two reviews and note the questions asked"
                - "Rehearse your first deal update with your manager or a peer"
                - "Write down the feedback from your first live update"
            - name: Second-line roll-up of team pipeline reviews
              description: |-
                ## Purpose
                Managers of managers cannot attend every team review, but they need to know what each one found by midweek. A short roll-up, collecting each front-line summary into one page of material changes and top risks, lets the second-line leader inspect the inspectors and spot teams whose reviews have gone soft.

                ## Milestones
                1. A common summary format agreed across front-line managers.
                2. A roll-up page combining all teams produced each week.
                3. One team review attended in person each month on rotation.
                4. Teams whose summaries show no slips or stalls for a month queried.

                ## Notes
                A team that never reports a slip is usually not looking, not unusually lucky.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly roll-up of all team reviews is produced for a quarter, with one team review attended in person each month."
                cadence: rolling
              tasks:
                - "Agree one summary format with every front-line manager"
                - "Combine the team summaries into a one-page roll-up @recurring(weekly:wed)"
                - "Attend one team's review in person each month on rotation"
            - name: Including renewals and expansion in the review
              description: |-
                ## Purpose
                Teams that mix new business sellers with account managers often review only new deals, leaving renewals to surprise everyone at quarter end. Adding a renewal segment that looks 90 days ahead, with its own risk questions about usage and sponsor changes, keeps existing revenue inspected with the same discipline.

                ## Milestones
                1. A list of renewals due in the next 90 days with value and owner.
                2. Three renewal risk questions agreed with customer success.
                3. A monthly renewal segment added to the review.
                4. Every at-risk renewal given an owner and a dated recovery step.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly renewal segment reviews every renewal due within 90 days, and each at-risk one has a dated recovery step."
                cadence: rolling
              tasks:
                - "Pull every renewal due in the next 90 days"
                - "Agree three renewal risk questions with customer success"
                - "Review renewals due within 90 days in the review @recurring(monthly:24)"
            - name: Stage ageing thresholds by segment
              description: |-
                ## Purpose
                One stall rule for everything treats a small business deal and a twelve-month enterprise deal the same, so the review either nags about healthy deals or misses stuck ones. Setting typical days-in-stage for each segment from closed-won history, and flagging deals beyond them, puts attention where time is genuinely being lost.

                ## Milestones
                1. Median days in each stage calculated per segment from last year's won deals.
                2. An ageing threshold set at a chosen multiple of the median, such as 1.5 times.
                3. A view flagging open deals beyond their segment's threshold.
                4. Thresholds recalibrated each quarter.

                ## Notes
                Use won deals only for the baseline. Lost deals stretch the medians and make every stall look normal.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Days-in-stage thresholds for each segment are calculated from won deals, flag open deals in a saved view, and are recalibrated quarterly."
                cadence: cyclic
                effort_hours_estimate: "8"
              tasks:
                - "Export last year's won deals with stage entry dates"
                - "Calculate median days in each stage for each segment"
                - "Build a view flagging deals past their segment's threshold"
                - "Recalibrate stage ageing thresholds from the latest won deals @recurring(quarterly)"
            - name: Snapshot history and trend analysis
              description: |-
                ## Purpose
                Twelve months of weekly snapshots make a record most teams never use. Combining them into one table lets an experienced manager answer questions the CRM cannot, such as how pipeline in week four of a quarter predicts the outcome, or which stage loses the most value to slips.

                ## Milestones
                1. All weekly snapshots combined into one table with a snapshot date column.
                2. Week-of-quarter pipeline compared with final results for the last four quarters.
                3. The stage where most slipped value sits identified.
                4. One finding presented to the team and one review rule changed because of it.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A combined snapshot table covering at least two quarters produces one presented finding and one resulting rule change."
                cadence: rolling
              tasks:
                - "Combine every saved snapshot into one table with a date column"
                - "Compare week-four pipeline with final results for past quarters"
                - "Analyse the snapshot history for one new pattern @recurring(monthly:12)"
                - "Present one finding and propose the rule change it suggests"
            - name: Single-threaded deal check in the review
              description: |-
                ## Purpose
                Deals with one buyer contact die when that person changes job, goes on leave or loses the argument internally. A standing question in the review about how many people on the buyer side are engaged, with a flag on late-stage deals relying on one person, catches this risk weeks before it shows up as a slip.

                ## Milestones
                1. A rule set, such as late-stage deals need at least two engaged buyer contacts.
                2. A count of engaged contacts shown for each deal on the review list.
                3. Single-threaded late-stage deals given an action to reach a second contact.
                4. The share of single-threaded late-stage deals tracked for a quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For a quarter, every single-threaded late-stage deal leaves the review with a dated action to engage a second buyer contact."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Set the minimum number of engaged buyer contacts for late-stage deals"
                - "Add an engaged contacts count to the review list"
                - "Give each single-threaded deal an action to reach a second contact"
                - "Track the single-threaded share at each month end for a quarter"
            - name: Large deal lane with its own review rhythm
              description: |-
                ## Purpose
                One deal worth a quarter of the team's number deserves more scrutiny than a ten-minute slot shared with twelve others. A separate fortnightly lane for deals above a size threshold, with the seller, presales and the manager, gives big deals the depth they need and keeps the main review moving.

                ## Milestones
                1. A size threshold agreed for the large deal lane.
                2. A fortnightly 30 minute slot booked for qualifying deals.
                3. A one-page brief per large deal updated before each session.
                4. Large deals covered only briefly in the main weekly review.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every deal above the agreed threshold is reviewed fortnightly from a one-page brief for a full quarter."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Set the deal size that qualifies for the large deal lane"
                - "Book a fortnightly 30 minute slot with seller and presales"
                - "Write a one-page brief for each qualifying deal"
                - "Limit large deals to a one-line update in the main review"
            - name: Yearly test of what the review changed
              description: |-
                ## Purpose
                After a year of weekly reviews, someone will ask whether the hour was worth it. Comparing slip rate, forecast surprises, stale deal share and action follow-through against the year before gives a factual answer and shows which parts of the cadence to keep, change or drop.

                ## Milestones
                1. Four measures compared year on year: slip rate, stale share, end-of-quarter surprises and actions closed.
                2. Sellers surveyed on which parts of the review help them sell.
                3. A one-page verdict written with keep, change and drop lists.
                4. Next year's agenda and rules updated from the verdict.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-page yearly verdict compares four measures with the prior year and lists what the review keeps, changes and drops."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Gather slip rate, stale share and actions closed for both years"
                - "Run the yearly evaluation of the pipeline review cadence @recurring(yearly)"
                - "Survey sellers on which parts of the review help them sell"
                - "Update next year's agenda and rules from the verdict"
---

# Weekly Pipeline Review Cadence

This area is for the sales manager who runs the weekly pipeline meeting and for the sellers who sit in it. It starts with the foundations (an honest audit of the current meeting, a written purpose, a fixed slot, an agenda, a data cut-off, rep pre-work and clear rules for next steps and slipped dates), then the weekly machinery of the run-sheet, the action log, the stalled list and the written summary, the skills of asking good questions and presenting a deal briefly, the decisions about format and focus, the dated moments such as quarter end and a relaunch, the situations that change the meeting, and finally the work of someone who has run it for years.

What repeats is a Monday snapshot, stalled list and rep update, the Tuesday review with its action check and written summary, a Wednesday roll-up for second-line managers, monthly checks on slips, stale deals, new pipeline, early-stage deals and the meeting's own health, a quarterly rules refresh and start-of-quarter scrub, and a yearly look at whether the review changed anything. The Operational checklist, Meeting notes, Metrics log and 1:1 templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
