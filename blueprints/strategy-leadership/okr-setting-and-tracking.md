---
id: strategy-leadership.okr-setting-and-tracking
name: OKR Setting and Tracking
description: "Objectives and key results that trace back to strategy, a weekly and quarterly tracking rhythm teams actually keep, honest scoring, and the lessons that make each cycle better than the last."
category: business
version: 1.0.0
tags: [strategy-leadership, okr-setting-and-tracking, manager, team, enterprise, okrs, goal-setting, execution]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - metrics-log
    - one-on-one
    - feedback-themes
    - reading-queue
  pillars:
    - name: Strategy & Leadership
      emoji: "♟️"
      description: "Setting direction and leading people toward it: strategy and planning cycles, objectives and key results, the executive team, decision-making, culture, change programmes and the board."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: OKR Setting and Tracking
          description: "Writing objectives and key results that connect teams to strategy, checking progress regularly and learning from what was missed."
          projects:
            - name: OKR readiness check before the first cycle
              description: |-
                ## Purpose
                OKRs fail most often in organisations that have no written strategy, no reliable numbers or no leader willing to sponsor them for at least four quarters. An honest two-week check of those three conditions tells you whether to launch now, fix a gap first, or start smaller with one team.

                ## Milestones
                1. The current strategy or annual priorities located in writing, or their absence noted.
                2. A sponsor at the top of the organisation who has agreed in person to attend the quarterly reviews.
                3. A short list of the metrics that are measured reliably today and the ones that are not.
                4. A written go, delay or pilot-only decision with the reason in two sentences.

                ## Notes
                Lack of data is rarely a reason to wait; it is a reason to make some first-cycle key results about building the measurement.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded go, delay or pilot-only decision on OKRs, signed off by a named executive sponsor."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Find the most recent written strategy or annual priorities document"
                - "Ask the intended sponsor whether they will chair four quarterly reviews in a row"
                - "List the five numbers the business already measures every week without effort"
                - "Write the launch, delay or pilot decision and share it with the sponsor"
            - name: One-page OKR house rules
              description: |-
                ## Purpose
                Every organisation that runs OKRs ends up with its own dialect: how many objectives, what a 0.7 means, who can change a key result mid-quarter. Writing those conventions on one page before the first cycle stops each team inventing its own and saves hours of argument at scoring time.

                ## Milestones
                1. Definitions of objective, key result and initiative written in plain language with one example each.
                2. Limits agreed: objectives per team, key results per objective, and the cycle length.
                3. The grading scale and the rule for changing a key result mid-cycle stated in one line each.
                4. The page published where every team drafting OKRs will see it.

                ## Notes
                Keep it to a single page. A twenty-page OKR manual signals bureaucracy and nobody reads it.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page house rules document covering definitions, limits, grading and change rules is published to all teams."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft one-line definitions of objective, key result and initiative"
                - "Choose the limits on objectives per team and key results per objective"
                - "Write the rule for who may change a key result after the cycle starts"
                - "Publish the page in the shared drive and link it from the planning calendar"
            - name: Choosing the OKR cycle length
              description: |-
                ## Purpose
                Quarterly cycles suit fast-moving product teams, but a finance or infrastructure function may find twelve weeks too short to move anything meaningful. Deciding the rhythm deliberately, including whether to pair annual company objectives with quarterly team key results, avoids a cycle that is either frantic or forgotten.

                ## Milestones
                1. The planning, budget and board calendars laid side by side for the coming year.
                2. Quarterly, four-month and half-yearly options compared against how fast results really move.
                3. A decision on whether company objectives span the year while team key results run quarterly.
                4. Cycle start and end dates for the year written into the shared calendar.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A chosen cycle length with dated cycle boundaries for the year is recorded and visible in the company calendar."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Put the budget, board and planning dates for the year on one page"
                - "Ask three team leads how long their main results take to move"
                - "Decide between quarterly, four-month and half-year cycles"
                - "Add every cycle start, mid-point and end date to the shared calendar"
            - name: Tracing objectives to the strategy
              description: |-
                ## Purpose
                Objectives that cannot be traced to a strategic priority are usually a team's wish list in disguise. Mapping each draft company objective to a named priority in the strategy, and noting any priority with no objective at all, exposes both orphan goals and neglected strategy before the quarter begins.

                ## Milestones
                1. Each strategic priority listed with its owner.
                2. Every draft company objective placed under exactly one priority.
                3. Orphan objectives either linked, rewritten or dropped.
                4. Any priority with no objective flagged to the leadership team with a decision on whether that is deliberate.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page map shows every company objective under a strategic priority, with uncovered priorities explicitly accepted or addressed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Copy the strategic priorities into the left column of a simple table"
                - "Place each draft company objective against the priority it serves"
                - "Mark objectives that fit no priority and ask their owners why they exist"
                - "Bring uncovered priorities to the next leadership meeting for a decision"
            - name: Baselines for every candidate key result
              description: |-
                ## Purpose
                A key result that says increase activation to 40 percent means nothing if nobody knows today's figure is 38 or 12. Pulling the current value, its source and how often it updates for each candidate key result keeps targets grounded and shows which ones cannot be measured yet.

                ## Milestones
                1. A list of all candidate key results with a current value beside each.
                2. The system or report each number comes from recorded, with its update frequency.
                3. Key results with no baseline marked, and either a baseline-building key result or a replacement chosen.
                4. Targets reviewed against the baselines and adjusted where they were guesses.

                ## Notes
                Start from the **Metrics log** template. A first-cycle key result of establishing the baseline is legitimate; a target picked without one is not.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Every candidate key result has a recorded baseline value and data source, or is explicitly marked as a measurement-building key result."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every candidate key result from the draft OKRs in one sheet"
                - "Ask each data owner for the current value and where it comes from"
                - "Flag key results that have no reliable baseline"
                - "Revisit each target with its owner once the baseline is known"
            - name: OKR tool or spreadsheet selection
              description: |-
                ## Purpose
                Dedicated OKR software can make check-ins easy and roll-ups visible, but many organisations under a few hundred people do fine with a shared spreadsheet for the first year. Comparing a spreadsheet against two or three tools on cost, integrations and how much admin they create stops the tool from becoming the project.

                ## Milestones
                1. Requirements written: number of users, integrations with existing data, reporting needs and budget.
                2. A spreadsheet option and two or three software options scored against the same criteria.
                3. A trial with one team completed on the leading option.
                4. A decision recorded with the cost and the person who will administer it.

                ## Notes
                Start from the **Purchase decision** template. Watch for tools that push dozens of fields per key result; they slow every check-in.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A tool or spreadsheet is chosen after a one-team trial, with annual cost and a named administrator recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write five requirements the OKR tool must meet"
                - "Build a simple spreadsheet version as the baseline option"
                - "Shortlist two or three OKR software products for comparison"
                - "Run a two-week trial with one willing team"
                - "Record the decision, the yearly cost and the administrator"
            - name: Naming the OKR programme owner and coaches
              description: |-
                ## Purpose
                Without a named owner, OKR drafting deadlines slip, scoring gets skipped and the programme quietly dies in its third quarter. Appointing one programme owner plus a coach per department, with time actually freed for the role, gives teams someone to ask and gives the sponsor someone accountable.

                ## Milestones
                1. A programme owner named with a written description of the role and the hours it needs each quarter.
                2. One coach per department or major team identified and agreed with their manager.
                3. A short coach briefing held covering the house rules and common drafting mistakes.
                4. Coaches listed on the house rules page with how to reach them.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A programme owner and one coach per department are named in writing, with time allocation agreed by their managers."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a half-page description of the programme owner role"
                - "Ask each department head to nominate one OKR coach"
                - "Hold a forty-five minute briefing for the new coaches"
                - "Meet the coaches to swap drafting problems @recurring(monthly:22)"
            - name: Pilot OKR cycle with two teams
              description: |-
                ## Purpose
                Running one full cycle with two willing teams before a company-wide launch shows where the house rules are vague, where data is missing and how long check-ins really take. The lessons from twelve weeks of real use are worth more than any amount of planning, and the pilot teams become credible advocates.

                ## Milestones
                1. Two teams with different kinds of work chosen and their leads agreed.
                2. Pilot OKRs drafted, reviewed by a coach and published.
                3. Weekly check-ins held for the whole cycle with attendance recorded.
                4. A scoring session and retrospective completed with written lessons.
                5. House rules updated from the pilot before the wider launch.
              priority: high
              deadlineOffsetDays: 100
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Two teams complete a full OKR cycle including scoring, and at least three house-rule changes from their lessons are published."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask two team leads with different kinds of work to pilot OKRs"
                - "Run a drafting session with each pilot team and a coach"
                - "Hold the pilot retrospective in the week after the cycle ends"
                - "Rewrite the house rules using what the pilot teams learned"
            - name: Grading scale and confidence conventions
              description: |-
                ## Purpose
                Teams score the same result very differently if one thinks 0.7 is success and another thinks it is failure. Agreeing a single grading scale, a weekly confidence measure and the colour each maps to means a red key result in sales and one in engineering mean the same thing to the leadership team.

                ## Milestones
                1. A grading scale chosen, either 0 to 1.0 or percentage of target, with worked examples.
                2. A weekly confidence measure defined, such as a 1 to 10 score or on track, at risk and off track.
                3. The thresholds for each colour on dashboards written down.
                4. The conventions tested by scoring three past goals and comparing results across two people.

                ## Notes
                Grading tells you what happened at the end; confidence tells you what is likely to happen while there is still time to act. You need both.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written grading scale and confidence measure, with colour thresholds, is added to the house rules and tested on three past goals."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Choose between a 0 to 1.0 scale and percentage of target"
                - "Define the weekly confidence measure and what each level means"
                - "Ask two managers to score the same three past goals independently"
                - "Add the agreed scale and thresholds to the house rules page"
            - name: Weekly team OKR check-in
              description: |-
                ## Purpose
                Key results reviewed only at quarter end become a surprise, while a fifteen-minute weekly check-in catches a slipping number in week four instead of week twelve. The meeting covers confidence changes, blockers and the top priorities for the week, and nothing else.

                ## Milestones
                1. A fixed fifteen to twenty minute slot in every team member's calendar.
                2. A standing agenda: confidence per key result, what changed, blockers, priorities for the week.
                3. Confidence scores updated before the meeting rather than during it.
                4. A three-line written summary posted after each check-in for anyone who missed it.

                ## Notes
                If a check-in turns into a status round of everyone's tasks, cut it back to key results only. Long check-ins are the first to be cancelled.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The team holds a check-in in at least ten of twelve weeks each cycle, with a written summary posted for each one."
                cadence: rolling
              tasks:
                - "Book a recurring twenty-minute check-in slot for the whole team"
                - "Write the four-item standing agenda at the top of the check-in notes"
                - "Update the confidence score on each key result you own @recurring(weekly:mon)"
                - "Post a three-line summary of blockers and priorities after the check-in @recurring(weekly:mon)"
            - name: Key result data refresh routine
              description: |-
                ## Purpose
                Check-ins stall when half the numbers are three weeks old and someone spends the meeting looking them up. A named data owner for each key result, refreshing the figure on the same day each week, means confidence conversations start from current evidence.

                ## Milestones
                1. A data owner named for every key result.
                2. The refresh day and source report for each key result written beside it.
                3. Automated feeds set up for any number that already lives in a reporting system.
                4. Stale key results visibly marked when a refresh is missed.

                ## Notes
                Start from the **Metrics log** template for key results that cannot be pulled automatically.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least 90 percent of key results show a value refreshed within the last seven days at each weekly check-in."
                cadence: rolling
              tasks:
                - "Name a data owner beside each key result in the tracker"
                - "Connect any key result already in a reporting system to an automatic feed"
                - "Refresh the current value of every key result you own @recurring(weekly:thu)"
                - "Add a stale marker rule for values older than seven days"
            - name: Monthly leadership OKR review
              description: |-
                ## Purpose
                The leadership team needs a monthly look across every company and department key result to spot patterns no single team sees: three teams blocked on the same dependency, or a whole objective trending red. Keeping it to exceptions and decisions, rather than a tour of every slide, makes it worth the hour.

                ## Milestones
                1. A one-page monthly summary of company key results with confidence and trend.
                2. Only red and at-risk key results presented in detail, by their owners.
                3. Each review ends with decisions and named owners recorded.
                4. Decisions from the previous month checked at the start of the next review.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly OKR review is held in every month of the cycle, each with a recorded list of decisions and owners."
                cadence: rolling
              tasks:
                - "Agree with the sponsor a fixed hour for the monthly review"
                - "Design a one-page summary showing every company key result and its trend"
                - "Prepare the exceptions summary for the leadership OKR review @recurring(monthly:12)"
                - "Open each review by checking last month's decisions"
            - name: Quarter-end scoring and retrospective
              description: |-
                ## Purpose
                Scoring is where OKRs teach you something, yet it is the step most often skipped when the next quarter's drafting starts. A short scoring session per team, followed by a retrospective on why results landed where they did, turns a missed key result into a better plan instead of a quiet embarrassment.

                ## Milestones
                1. Every key result scored on the agreed scale by its owner within a week of quarter end.
                2. A team retrospective held covering what drove each score, not only the score.
                3. Lessons grouped into themes and the top three written down.
                4. Lessons carried explicitly into the next cycle's drafting session.

                ## Notes
                Start from the **Feedback themes** template to group lessons across teams. Ask what you would do differently, not who was at fault.
              priority: high
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "All key results are scored within seven days of quarter end and each team records at least three lessons that appear in the next cycle's drafts."
                cadence: cyclic
              tasks:
                - "Book a scoring session for the last week of the quarter"
                - "Score every key result and hold the team retrospective @recurring(quarterly)"
                - "Group the lessons into themes with the other team leads"
                - "Paste the top three lessons into the next quarter's drafting notes"
            - name: Quarterly OKR drafting window
              description: |-
                ## Purpose
                Drafting that starts in the last week of a quarter produces rushed OKRs approved halfway into the next one. A fixed three-week window, opening before the quarter ends, gives company objectives time to settle before teams draft theirs and leaves room for a review pass.

                ## Milestones
                1. Company objectives shared at least three weeks before the quarter starts.
                2. Team drafts submitted by a fixed date two weeks before the quarter starts.
                3. A review pass completed by coaches or peer teams with written comments.
                4. Final OKRs published by the first day of the quarter.
              priority: high
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Final OKRs for at least 90 percent of teams are published on or before the first day of each quarter."
                cadence: cyclic
              tasks:
                - "Put the drafting window dates for the next four quarters in the calendar"
                - "Open the drafting window and share the company objectives @recurring(quarterly)"
                - "Pair each team with a coach or peer team for draft review"
                - "Publish the final OKRs and announce where to find them"
            - name: Mid-quarter OKR health check
              description: |-
                ## Purpose
                Around week six there is still time to rescue a key result, re-scope one that was badly written, or redirect people from a lost cause. A deliberate mid-quarter pass across all OKRs, separate from weekly confidence updates, forces the hard conversations before they become quarter-end excuses.

                ## Milestones
                1. Every key result's confidence and trend reviewed at the midpoint.
                2. Key results below a set confidence threshold each given a recovery, re-scope or stop decision.
                3. Any re-scoped key result changed through the agreed change rule and logged.
                4. A short note sent to the sponsor summarising the midpoint picture.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "At each cycle midpoint every low-confidence key result has a recorded recover, re-scope or stop decision."
                cadence: cyclic
              tasks:
                - "Set the confidence threshold that triggers a midpoint decision"
                - "Run the mid-quarter health check across all team OKRs @recurring(quarterly)"
                - "Record a recover, re-scope or stop decision for each flagged key result"
                - "Send the sponsor a half-page midpoint summary"
            - name: Company OKR dashboard upkeep
              description: |-
                ## Purpose
                One dashboard showing every company objective and the team key results underneath is what lets a new hire, a board member or a sceptical manager see that OKRs are real. It only stays trusted if someone checks it monthly for broken links, stale numbers and OKRs belonging to teams that no longer exist.

                ## Milestones
                1. One dashboard showing company objectives, team key results, owners and confidence.
                2. Links to the dashboard placed in the intranet home page and the all-hands deck.
                3. A monthly hygiene check for stale values, missing owners and orphaned OKRs.
                4. Fixes made within a week of each hygiene check.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The company OKR dashboard has no key result without an owner and no value older than fourteen days after each monthly check."
                cadence: rolling
              tasks:
                - "List every field the company dashboard must show"
                - "Add the dashboard link to the intranet home page"
                - "Check the dashboard for stale values and missing owners @recurring(monthly:3)"
                - "Chase owners of any key result found stale or unowned"
            - name: OKR change log and re-scoping rules
              description: |-
                ## Purpose
                Some key results deserve to change mid-cycle because the world moved, and some are being quietly lowered to make the score look better. A visible change log, with a reason and an approver for every change, keeps legitimate flexibility while making silent target cuts impossible.

                ## Milestones
                1. A change log with fields for the old wording, new wording, reason, date and approver.
                2. The approval rule written: who can approve what kind of change.
                3. Every mid-cycle change in the current quarter entered in the log.
                4. Patterns in the log reviewed each month for teams that re-scope repeatedly.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every key result changed after the cycle starts appears in the change log with a reason and an approver."
                cadence: rolling
              tasks:
                - "Create the change log with old wording, new wording, reason and approver columns"
                - "Write the approval rule into the house rules"
                - "Review the change log for repeated re-scoping @recurring(monthly:20)"
                - "Talk privately with any team lead whose key results change every month"
            - name: Individual OKR updates in one-on-ones
              description: |-
                ## Purpose
                People who own a key result rarely raise the awkward truth that it is off track in a team meeting, but they will in a private conversation with their manager. Spending five minutes of each one-on-one on owned key results surfaces blockers early and keeps OKRs connected to daily work.

                ## Milestones
                1. Each owned key result listed in the standing notes for that person's one-on-one.
                2. A short OKR slot added to the one-on-one agenda.
                3. Blockers raised in one-on-ones tracked to a resolution.
                4. Each person able to say which key results their current work serves.

                ## Notes
                Start from the **1:1** template and add an OKR section to it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every direct report who owns a key result discusses it in at least two one-on-ones per month, with blockers recorded."
                cadence: rolling
              tasks:
                - "Add an owned key results section to each direct report's one-on-one notes"
                - "Ask each person which key result their biggest current task serves"
                - "Review blockers raised in one-on-ones against the OKR tracker @recurring(monthly:15)"
                - "Close the loop on each blocker at the next one-on-one"
            - name: Cross-team dependency register for key results
              description: |-
                ## Purpose
                Many key results depend on another team doing something they never put in their own OKRs, which is how a marketing goal dies waiting for an engineering change. A simple register of key result dependencies, agreed during drafting and reviewed monthly, makes those promises explicit and visible.

                ## Milestones
                1. Every key result that depends on another team listed with the specific thing needed and by when.
                2. Each dependency acknowledged by the providing team's lead during drafting.
                3. Dependencies at risk flagged in the monthly leadership review.
                4. Unacknowledged dependencies resolved or the dependent key result re-scoped.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every cross-team key result dependency is acknowledged by the providing team before the cycle starts and reviewed each month."
                cadence: rolling
              tasks:
                - "Add a depends on column to the OKR tracker"
                - "Ask each providing team lead to confirm the dependencies on them"
                - "Review the dependency register for slipping items @recurring(monthly:8)"
                - "Raise unresolved dependencies at the monthly leadership review"
            - name: Writing objectives people can remember
              description: |-
                ## Purpose
                Good objectives are short, qualitative and inspiring enough that the team can say it without looking it up; most first drafts are either vague slogans or disguised metrics. Practising on real drafts against a few clear tests builds the skill faster than reading about it.

                ## Milestones
                1. Five tests for an objective written down, such as fewer than twelve words and no numbers.
                2. Ten past or draft objectives rewritten against those tests.
                3. Before and after examples shared with peers for comment.
                4. Your next cycle's objectives each passing all five tests.

                ## Notes
                If an objective needs a number to make sense, it is probably a key result in the wrong place.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten objectives rewritten against five written tests, and every objective in your next cycle passes all five."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write five tests a good objective must pass"
                - "Collect ten objectives from past cycles or other teams"
                - "Rewrite each objective so it passes all five tests"
                - "Share three before and after pairs with a peer for comment"
            - name: Outcome key results instead of task lists
              description: |-
                ## Purpose
                Probably the commonest OKR mistake is a key result like launch the new pricing page, which is an activity that can be completed with no effect at all. Learning to ask what changes for a customer or the business if the activity works turns task lists into key results that measure value.

                ## Milestones
                1. Twenty draft key results sorted into outcomes and outputs.
                2. Each output rewritten as an outcome, with the original activity moved to an initiative.
                3. A rule of thumb written for spotting output key results quickly.
                4. Your team's next draft containing no more than one output-style key result per objective.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Twenty draft key results are classified and rewritten, and the team's next draft has at most one output key result per objective."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Gather twenty key results from your team's last two cycles"
                - "Mark each one as an outcome or an output"
                - "Rewrite every output as the result it was meant to produce"
                - "Write a one-line test for spotting output key results"
            - name: Leading and lagging key results practice
              description: |-
                ## Purpose
                Revenue and retention move slowly and arrive late, so a quarter built only on lagging measures gives the team nothing to steer by until it is too late. Pairing each lagging key result with a leading indicator the team can influence weekly, such as qualified demos booked, makes check-ins useful.

                ## Milestones
                1. Each current key result labelled leading or lagging.
                2. For each lagging key result, two or three candidate leading indicators listed.
                3. The evidence that each leading indicator really predicts the lagging one checked against past data.
                4. At least one validated leading indicator paired with every lagging key result in the next cycle.

                ## Notes
                Check the link with past data where you can. A leading indicator that does not predict the outcome just creates busy work.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every lagging key result in the next cycle is paired with a leading indicator whose link has been checked against past data."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Label each current key result as leading or lagging"
                - "Brainstorm leading indicators for each lagging key result with the team"
                - "Check past data for whether the leading indicator moved first"
                - "Pair a validated leading indicator with each lagging key result"
            - name: Committed versus aspirational OKRs
              description: |-
                ## Purpose
                Mixing must-deliver commitments with moonshots on the same scale creates confusion: leaders read 0.6 as failure on a committed OKR and as a decent result on an aspirational one. Understanding the difference, and labelling each OKR clearly, changes how teams plan capacity and how leaders read scores.

                ## Milestones
                1. The difference between committed and aspirational OKRs explained in your own words in one paragraph.
                2. The expected score for each type agreed with your manager.
                3. Every OKR in your team's current cycle labelled as one or the other.
                4. Capacity checked so committed OKRs can be met in full.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every team OKR carries a committed or aspirational label, with the expected score for each type written into the house rules."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a paragraph explaining committed and aspirational OKRs in plain words"
                - "Agree with your manager what score counts as success for each type"
                - "Label every OKR in the current cycle"
                - "Check that committed OKRs fit inside the team's real capacity"
            - name: Running an OKR drafting workshop
              description: |-
                ## Purpose
                Teams left alone with a blank template tend to produce a list of everything they were already doing. A facilitated two-hour workshop, starting from the company objectives and the lessons of last cycle, gets a team to a focused first draft in one sitting and teaches them how to do it themselves next time.

                ## Milestones
                1. A two-hour workshop agenda with timed sections for context, divergent ideas, choosing and wording.
                2. Pre-reading sent: company objectives, last cycle's scores and lessons, baselines.
                3. One workshop facilitated with a team, producing a draft of no more than three objectives.
                4. Agenda revised after feedback from participants.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A tested two-hour workshop agenda exists and has produced at least one team draft of three or fewer objectives."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Draft a timed two-hour agenda for an OKR drafting workshop"
                - "Assemble the pre-reading pack from company objectives and last cycle's lessons"
                - "Facilitate the workshop with one team"
                - "Ask participants what to change and revise the agenda"
            - name: Coaching managers on OKR conversations
              description: |-
                ## Purpose
                Managers often know the OKR theory but freeze when a report admits a key result is hopeless, or when a team pushes back on a company objective. Short monthly coaching clinics with real examples help managers hold these conversations without blame or false optimism.

                ## Milestones
                1. Three hard OKR conversations written up as practice scenarios.
                2. A first clinic run with at least five managers role-playing the scenarios.
                3. Monthly clinics scheduled for the rest of the year.
                4. Feedback collected on which scenarios managers meet most often.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Monthly OKR coaching clinics run for at least six months, each attended by at least five managers."
                cadence: rolling
              tasks:
                - "Write three realistic scenarios of difficult OKR conversations"
                - "Invite managers to the first forty-five minute clinic"
                - "Run the manager OKR coaching clinic with a fresh scenario @recurring(monthly:25)"
                - "Ask attendees which situations they want practised next"
            - name: Reading the OKR literature critically
              description: |-
                ## Purpose
                Most OKR books describe how a handful of technology companies used them, and much of that does not transfer to a hospital, a bank or a twenty-person agency. Reading a few core texts alongside critiques helps you keep what fits your organisation and discard what does not.

                ## Milestones
                1. A list of four to six books, articles or talks covering both advocates and critics.
                2. Notes on each, recording one idea to adopt and one to reject.
                3. A short summary of what applies to your organisation shared with the programme owner.
                4. One change to the house rules proposed from the reading.

                ## Notes
                Start from the **Reading queue** template.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Notes on at least four OKR sources, including one critique, and one resulting house-rule proposal are written up."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List four to six OKR sources, including at least one critique"
                - "Spend an hour on the OKR reading queue and note one idea @recurring(monthly:28)"
                - "Write a one-page summary of what fits your organisation"
                - "Propose one house-rule change based on the reading"
            - name: Pruning to three objectives per team
              description: |-
                ## Purpose
                Teams with six objectives and twenty key results are really telling you they could not choose. Cutting back to three objectives with three or four key results each forces the priority conversation that OKRs were meant to provoke, and makes the remaining ones visible enough to win.

                ## Milestones
                1. Each team's current OKR count recorded.
                2. Teams over the limit asked to rank their objectives.
                3. Dropped objectives either moved to business as usual or explicitly stopped.
                4. Every team at or under three objectives in the next cycle.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "No team has more than three objectives in the next cycle, and every dropped objective has a recorded stop or business-as-usual decision."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Count the objectives and key results each team currently has"
                - "Ask teams over the limit to rank their objectives one to six"
                - "Record a stop or business-as-usual decision for each dropped objective"
                - "Confirm every team's next draft has three objectives or fewer"
            - name: Keeping health metrics out of OKRs
              description: |-
                ## Purpose
                Uptime, payroll accuracy and customer service response times matter every quarter, but putting them in OKRs crowds out the few things that need to change. Moving steady-state measures to a separate health list, reviewed only when they slip, keeps OKRs about improvement rather than maintenance.

                ## Milestones
                1. Every current key result tagged as change or maintain.
                2. Maintain measures moved to a separate team health list with an acceptable range.
                3. A rule agreed that a health metric becomes a key result only when it falls out of range.
                4. The next cycle's OKRs containing change measures only.

                ## Notes
                This is a team-level split. The handful of indicators the executive team watches is a separate exercise.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Each team has a separate health metrics list with ranges, and its next OKRs contain no key result that only maintains a level."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Tag each current key result as change or maintain"
                - "Move maintain measures to a team health list with acceptable ranges"
                - "Write the rule for when a health metric becomes a key result"
                - "Check the next draft contains change measures only"
            - name: Balancing top-down and bottom-up OKRs
              description: |-
                ## Purpose
                Purely top-down OKRs feel like orders and rarely draw on what front-line teams know; purely bottom-up ones drift away from strategy. Deciding the mix, such as company objectives set by leaders and most team key results proposed by teams, gives people ownership without losing direction.

                ## Milestones
                1. Last cycle's OKRs analysed for how many were set by leaders and how many by teams.
                2. Team leads and staff asked how much say they felt they had.
                3. A target mix agreed by the leadership team and written into the house rules.
                4. The next drafting window run to that mix and the result counted.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A target mix of leader-set and team-proposed key results is written into the house rules and measured in the following cycle."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Count how many of last cycle's key results came from leaders and how many from teams"
                - "Ask five team members how much say they had in their OKRs"
                - "Propose a target mix to the leadership team"
                - "Count the mix again after the next drafting window"
            - name: Decoupling OKRs from performance ratings and pay
              description: |-
                ## Purpose
                Once bonuses depend on OKR scores, people stop setting ambitious key results and start negotiating easy ones. Separating OKR scores from individual ratings and pay, while still using OKR contributions as one input to performance conversations, protects ambition and honesty.

                ## Milestones
                1. Current links between OKR scores and ratings, bonuses or promotion criteria documented.
                2. A proposal written with the people team on how OKRs will and will not be used in performance reviews.
                3. The proposal agreed by the executive team and checked with the people team for any contractual issues.
                4. The policy communicated to managers with examples of acceptable use.

                ## Notes
                Any change to pay or bonus arrangements may have contractual or employment law implications. Agree it with your people team and take their advice before announcing.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written policy on how OKRs relate to performance reviews and pay is agreed by the executive team and briefed to every manager."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every place OKR scores currently feed ratings, bonuses or promotions"
                - "Draft a proposal with the people team on separating scores from pay"
                - "Take the proposal to the executive team for a decision"
                - "Brief all managers on the policy with three worked examples"
            - name: Fixing sandbagged and gamed key results
              description: |-
                ## Purpose
                Scoring 1.0 every quarter almost always means a team is setting targets it already knew it would hit, while other teams game metrics by hitting the number in ways that miss the point. A calibration review of targets before the cycle, plus paired counter-metrics, catches both.

                ## Milestones
                1. Three cycles of scores reviewed for teams that consistently score at or near full marks.
                2. Targets for those teams compared against baselines and historical trend.
                3. A counter-metric added to any key result that can be hit in a harmful way.
                4. A short calibration step added to the drafting window.

                ## Notes
                Pair speed with quality, volume with satisfaction. A support team measured only on tickets closed will close tickets, not solve problems.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A calibration step is part of the drafting window and every gameable key result in the next cycle has a named counter-metric."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pull three cycles of scores and highlight teams always near full marks"
                - "Compare those teams' targets with their baselines and trend"
                - "Add a counter-metric to each key result that could be gamed"
                - "Add a calibration review to the drafting window checklist"
            - name: Kill or keep decision for stalled key results
              description: |-
                ## Purpose
                Eight weeks at zero means a key result is consuming attention and morale without producing anything. Making an explicit decision to stop it, and recording what was learned, frees capacity for what can still be achieved and models the honesty OKRs depend on.

                ## Milestones
                1. Key results with no movement for six or more weeks identified.
                2. For each, the owner's view on why it stalled written down.
                3. A kill, keep or re-scope decision taken by the objective owner and recorded.
                4. Freed capacity redirected to a named key result.
              priority: low
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Every key result with no movement for six weeks has a recorded kill, keep or re-scope decision and a note on where freed capacity went."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Filter the tracker for key results unchanged for six weeks"
                - "Ask each owner to write two sentences on why it stalled"
                - "Record a kill, keep or re-scope decision with the objective owner"
                - "Name the key result that will receive the freed time"
            - name: Simplifying the OKR process after year one
              description: |-
                ## Purpose
                By the end of the first year most OKR programmes have accumulated extra fields, approval steps and reports that nobody asked for. A deliberate simplification pass, asking teams what they would remove, keeps the overhead in proportion to the value and stops people resenting the process.

                ## Milestones
                1. A short survey sent to team leads asking what to remove, keep and add.
                2. Every field, meeting and report in the OKR process listed with its owner and purpose.
                3. At least three steps removed or merged.
                4. The simplified process published with the time saved estimated.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least three OKR process steps, fields or reports are removed or merged and a simplified process is published."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Send team leads a three-question survey on the OKR process"
                - "List every field, meeting and report the process requires"
                - "Remove or merge at least three of them"
                - "Publish the simpler process and say what was dropped"
            - name: Cascade or alignment mapping for team OKRs
              description: |-
                ## Purpose
                Strict cascading, where each layer copies a key result from the layer above as its objective, is slow and kills initiative; no linkage at all leaves teams drifting. Choosing a method, such as teams linking their key results to company objectives without copying them, sets how the whole organisation drafts.

                ## Milestones
                1. Cascading, loose alignment and network models described with their trade-offs.
                2. One department's OKRs mapped both ways to see the difference.
                3. A method chosen and written into the house rules.
                4. Every team OKR in the next cycle linked to a company objective by the chosen method.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written alignment method is in the house rules and every team OKR in the next cycle shows its link to a company objective."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write a half page comparing cascading and loose alignment"
                - "Map one department's OKRs using both approaches"
                - "Choose the method with the leadership team"
                - "Add a link to company objective field to the OKR tracker"
            - name: Company OKR launch at the all-hands
              description: |-
                ## Purpose
                The first company-wide OKR presentation sets how people see the whole programme: as strategy made visible or as more admin. Explaining why OKRs are being introduced, showing the company objectives and pilot lessons, and answering the obvious question about pay, all in fifteen minutes, gives the launch a fair hearing.

                ## Milestones
                1. A fifteen-minute slot booked at a company all-hands.
                2. Slides covering why OKRs, the company objectives, what pilot teams learned and how scores relate to pay.
                3. Two pilot team members ready to describe their experience.
                4. Questions collected and answered in writing within a week.

                ## Notes
                Expect the question of whether this affects bonuses. Have the answer agreed with the people team before the meeting.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The OKR launch is presented at an all-hands and every question raised is answered in writing within seven days."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the meeting organiser for a fifteen-minute slot at the next all-hands"
                - "Build five slides: why, objectives, pilot lessons, pay, what happens next"
                - "Ask two pilot team members to speak for two minutes each"
                - "Publish written answers to every question raised"
            - name: Annual OKR programme review
              description: |-
                ## Purpose
                Once a year the programme itself deserves an OKR-style look: did it help the organisation focus and deliver, or did it turn into a reporting ritual? Gathering scores, survey results and leadership views, then deciding what to change for next year, keeps the programme earning its place.

                ## Milestones
                1. Four quarters of scores, completion rates and check-in attendance compiled.
                2. A short survey of managers and staff on usefulness and burden.
                3. A review session with the sponsor and programme owner.
                4. A list of changes for next year agreed and added to the house rules.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A yearly review report with four quarters of programme data and an agreed list of changes is shared with the leadership team."
                cadence: cyclic
              tasks:
                - "Compile completion rates, scores and check-in attendance for the year"
                - "Run the annual OKR programme review with the sponsor @recurring(yearly)"
                - "Send a five-question survey to managers and staff"
                - "Add the agreed changes to next year's house rules"
            - name: First quarter-end scoring session
              description: |-
                ## Purpose
                The first company-wide scoring session sets the tone for every one after it: if low scores are punished or glossed over, people will set safe targets forever. Preparing it carefully, with leaders scoring their own objectives first and honestly, shows that a 0.4 with a clear lesson is acceptable.

                ## Milestones
                1. A scoring session booked for the week after the first company-wide cycle ends.
                2. Leadership team scores for company objectives drafted with candid notes.
                3. A short guide sent to teams explaining how to score and what is expected.
                4. The session held and lessons published to the whole organisation.
              priority: medium
              deadlineOffsetDays: 95
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first company scoring session is held within ten days of quarter end, with leaders' own scores and lessons published."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Book the first company scoring session for the week after quarter end"
                - "Ask each executive to score their own objective with a candid note"
                - "Send teams a one-page scoring guide"
                - "Publish the lessons from the session to all staff"
            - name: OKR progress summary for the board pack
              description: |-
                ## Purpose
                Boards increasingly ask to see whether strategy is being delivered, and company OKRs give a compact answer if presented well. A one-page summary each quarter, showing company objectives, scores, trend and the two or three decisions management has taken as a result, gives directors evidence rather than anecdotes.

                ## Milestones
                1. A one-page format agreed with the chair or company secretary.
                2. The first summary included in a board pack.
                3. Board questions on OKRs recorded and answered.
                4. The format refined after two board meetings.
              priority: low
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A one-page OKR summary appears in every quarterly board pack, with board questions recorded and answered."
                cadence: cyclic
              tasks:
                - "Ask the chair what they want to see about strategic delivery"
                - "Draft a one-page OKR summary format"
                - "Prepare the OKR summary for the quarterly board pack @recurring(quarterly)"
                - "Record each board question and the answer given"
            - name: OKR kick-off for a new financial year
              description: |-
                ## Purpose
                Financial years usually open with a cycle that carries annual objectives as well as quarterly key results, and it often clashes with budget sign-off. A kick-off that aligns the annual objectives with the approved budget, and refreshes everyone on the house rules, starts the year with fewer contradictions.

                ## Milestones
                1. Annual company objectives agreed and checked against the approved budget.
                2. House rules refreshed with last year's programme review changes.
                3. A kick-off session or video for all managers.
                4. First-quarter OKRs published on time.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Annual objectives matched to the approved budget are published and first-quarter OKRs are live by the first day of the financial year."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Check each annual objective against the approved budget lines"
                - "Update the house rules with last year's review changes"
                - "Record a ten-minute kick-off briefing for all managers"
                - "Confirm every team's first-quarter OKRs are published on day one"
            - name: OKRs for a newly formed team
              description: |-
                ## Purpose
                A team formed in the last month has no baselines, no shared history and often unclear boundaries with neighbouring teams. Setting a first cycle with one objective about purpose and ways of working, and one about early delivery, gives the team something real to aim at without pretending to precision it lacks.

                ## Milestones
                1. The team's purpose and boundaries written in a paragraph and agreed with its sponsor.
                2. A first cycle with no more than two objectives drafted.
                3. At least one key result about establishing baselines or measures.
                4. A first check-in held in the team's second week.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A new team publishes a first-cycle OKR set of two objectives or fewer, including one baseline-building key result, within four weeks of forming."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write a paragraph on the new team's purpose and boundaries"
                - "Agree the paragraph with the team's sponsor"
                - "Draft no more than two objectives for the first cycle"
                - "Hold the first check-in in the team's second week"
            - name: OKRs for platform and shared-service teams
              description: |-
                ## Purpose
                Platform, IT, finance and HR teams often struggle with OKRs because their success shows up in other teams' results. Writing key results about the outcomes their internal customers experience, such as time to provision an environment or month-end close days, makes their contribution visible.

                ## Milestones
                1. The team's main internal customers listed with what they most need from it.
                2. Internal customer outcomes chosen as key results instead of activity counts.
                3. Two internal customers asked to confirm the key results matter to them.
                4. Requests from consuming teams reviewed against the OKRs each month.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The shared-service team's OKRs contain at least two key results measured from internal customers' experience, confirmed by those customers."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the team's five largest internal customers"
                - "Ask each what one improvement would help them most this quarter"
                - "Turn the top answers into internal customer outcome key results"
                - "Check new requests from other teams against the OKRs each month"
            - name: Inheriting OKRs mid-quarter as a new manager
              description: |-
                ## Purpose
                Taking over a team halfway through a cycle means owning key results you did not write, some of which may be unrealistic or already lost. Reviewing them in your first two weeks, being candid with your manager about what is achievable, and keeping the team's check-in rhythm going avoids a lost quarter.

                ## Milestones
                1. Each inherited key result reviewed with its owner and the previous manager if available.
                2. A realistic forecast for each key result shared with your manager.
                3. Any change made through the change log rather than quietly.
                4. Weekly check-ins continued without a gap.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Within fourteen days of starting, every inherited key result has a forecast agreed with your manager and any changes are logged."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read the team's current OKRs and the last three check-in summaries"
                - "Meet each key result owner for fifteen minutes"
                - "Share a realistic forecast for each key result with your manager"
                - "Log any changes through the change log"
            - name: OKRs through a reorganisation
              description: |-
                ## Purpose
                When teams merge, split or change reporting lines mid-cycle, OKRs can become orphaned overnight and nobody knows who owns what. A deliberate re-homing of every affected OKR within two weeks of the announcement keeps work visible during a period when people most need clarity.

                ## Milestones
                1. Every OKR owned by an affected team listed.
                2. Each one assigned to a new owning team, merged or explicitly paused.
                3. New owners confirmed in writing.
                4. The dashboard and dependency register updated to the new structure.

                ## Notes
                Designing the new structure belongs elsewhere; this project only makes sure goals survive it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Within two weeks of a reorganisation announcement, every affected OKR has a confirmed new owner or a recorded pause."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every OKR held by teams affected by the reorganisation"
                - "Propose a new owner, merge or pause for each one"
                - "Get written confirmation from each new owner"
                - "Update the dashboard and dependency register to the new structure"
            - name: Asynchronous OKR check-ins across time zones
              description: |-
                ## Purpose
                A team spread from Port of Spain to London to Singapore cannot share a weekly fifteen-minute meeting without someone joining at midnight. A written check-in thread, with a fixed posting day, a short format and a fortnightly live slot that rotates time zones, keeps everyone current without punishing anyone.

                ## Milestones
                1. A written check-in format of three lines per key result agreed.
                2. A fixed posting day and deadline that works across the team's time zones.
                3. A rotating live slot set up for discussion of red key results.
                4. Participation tracked for one cycle and the format adjusted.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least 85 percent of key result owners post a written check-in each week across one full cycle."
                cadence: rolling
              tasks:
                - "Draft a three-line written check-in format for each key result"
                - "Choose a posting deadline that suits every time zone on the team"
                - "Post your written OKR check-in in the team thread @recurring(weekly:tue)"
                - "Set up a rotating live slot for red key results"
            - name: Scaling OKRs from ten teams to a hundred
              description: |-
                ## Purpose
                Practices that worked with ten teams, like the programme owner reviewing every draft, collapse at a hundred. Scaling needs delegated review by department coaches, consistent tooling, and a deliberate choice about which levels set OKRs at all, since not every small team needs its own set.

                ## Milestones
                1. The levels that will set OKRs decided, such as company, department and team, with any exceptions.
                2. Draft review delegated to department coaches with a common checklist.
                3. Tooling and dashboards tested at the larger scale.
                4. One cycle run at scale with completion rate and drafting time measured.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One full cycle runs across all intended teams with delegated review and at least 90 percent of OKRs published on time."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Decide which organisational levels will set their own OKRs"
                - "Write a one-page review checklist for department coaches"
                - "Load-test the tracker or tool with the full set of teams"
                - "Measure the on-time publication rate after the first scaled cycle"
            - name: OKRs alongside a fixed annual plan and budget
              description: |-
                ## Purpose
                In public bodies, regulated firms and large enterprises, budgets and programme plans are fixed for the year and cannot flex every quarter. Positioning OKRs as the quarterly focus within the annual plan, rather than a rival to it, avoids two competing goal systems and the double reporting that follows.

                ## Milestones
                1. The annual plan's commitments and reporting requirements listed.
                2. A rule written for how OKRs relate to the annual plan, such as each objective advancing one plan commitment.
                3. Duplicate reporting between the two systems identified and removed.
                4. The relationship explained to managers in a short note.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written rule connects OKRs to annual plan commitments and at least one duplicate report between the two systems is removed."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the annual plan's commitments and the reports it requires"
                - "Write the rule linking each objective to a plan commitment"
                - "Find reports that duplicate OKR updates and propose merging them"
                - "Send managers a short note explaining how the two fit together"
            - name: OKR maturity assessment
              description: |-
                ## Purpose
                After two or three years, programmes vary widely by department: some teams write sharp outcome key results and score honestly, others copy last quarter's list. A maturity assessment against a simple scale, scored from evidence rather than opinion, shows where coaching effort will pay off most.

                ## Milestones
                1. A five-level maturity scale defined across drafting, tracking, scoring and learning.
                2. Each department scored from evidence such as drafts, check-in records and retrospectives.
                3. The two or three lowest areas chosen for targeted coaching.
                4. A reassessment date set for twelve months later.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Every department has an evidence-based maturity score across four dimensions, with coaching priorities agreed for the lowest three."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Define a five-level scale for drafting, tracking, scoring and learning"
                - "Gather each department's last two drafts and check-in records"
                - "Score each department from the evidence"
                - "Agree coaching priorities for the three lowest scores"
            - name: Analysing three years of OKR score data
              description: |-
                ## Purpose
                Several years of scores, confidence trails and change logs contain patterns no single retrospective reveals: which kinds of key result are reliably missed, which teams forecast well, and whether confidence in week four predicts the final score. Analysing them turns the programme's history into better targets and earlier warnings.

                ## Milestones
                1. All historical scores, confidence values and changes in one dataset.
                2. Score distributions compared by team, objective type and committed versus aspirational.
                3. The link between early confidence and final score measured.
                4. Three findings written up with a recommended change for each.

                ## Notes
                Ask the agent to summarise patterns in the exported data, then check any surprising finding against the raw records before sharing it.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written analysis of at least eight quarters of OKR data with three findings and a recommended change for each is shared with the programme owner."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Export all historical scores, confidence values and change log entries"
                - "Ask the agent to summarise score patterns by team and objective type"
                - "Measure how well week-four confidence predicted the final score"
                - "Refresh the score analysis with the latest year's data @recurring(yearly)"
            - name: Internal OKR coaching guild
              description: |-
                ## Purpose
                Once coaches exist in every department, they learn fastest from each other: one has solved the shared-service problem, another has a great retrospective format. A small guild that meets monthly, shares examples and maintains a library of good OKRs builds lasting capability without outside consultants.

                ## Milestones
                1. Guild members named, one from each department.
                2. A library of anonymised good and poor OKR examples started.
                3. Monthly guild sessions held with a rotating host.
                4. New coaches onboarded through the guild with a buddy.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "The guild meets at least ten times a year and its example library holds at least thirty annotated OKRs."
                cadence: rolling
              tasks:
                - "Invite one coach from each department to join the guild"
                - "Start a shared library of anonymised OKR examples with annotations"
                - "Host or attend the OKR coaching guild session @recurring(monthly:17)"
                - "Pair each new coach with an experienced buddy"
            - name: OKR design for a multi-business group
              description: |-
                ## Purpose
                Groups with several businesses, each with its own market and leadership, cannot run one cascade without forcing a retailer and a logistics arm into the same goals. Designing group objectives that set a few shared themes, while each business sets its own OKRs within them, keeps the centre informed without micromanaging.

                ## Milestones
                1. The group's shared themes limited to two or three, agreed by the group executive.
                2. Each business's OKRs drafted within those themes by its own leadership.
                3. A common scoring scale and reporting format agreed across all businesses.
                4. A group-level quarterly summary produced from the business OKRs.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every business in the group publishes OKRs under no more than three shared group themes, reported in a common quarterly format."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Ask the group executive to choose two or three shared themes"
                - "Brief each business leadership team on the themes and their freedom within them"
                - "Agree one scoring scale and reporting format across the group"
                - "Build the first group-level quarterly summary from business OKRs"
---

# OKR Setting and Tracking

This area is for managers, team leads and the people running OKRs across a larger organisation, whether you are starting your first cycle or repairing a programme that has turned into paperwork. It begins with the foundations (a readiness check, house rules, baselines, a pilot), then the tracking machinery, the writing and coaching skills, the decisions that keep OKRs honest, the dated moments in a cycle, the situations that bend the usual rules, and finally the work of someone who has run OKRs for years.

What repeats is a Monday confidence check-in, a Thursday data refresh, a monthly leadership review, the quarterly drafting window, mid-quarter health check and scoring retrospective, and a yearly look at the whole programme. The Purchase decision, Metrics log, 1:1, Feedback themes and Reading queue templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
