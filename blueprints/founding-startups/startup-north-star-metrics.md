---
id: founding-startups.startup-north-star-metrics
name: Startup North Star Metrics
description: "Pick the one number that shows your startup is working, the few inputs that move it, exact definitions behind each, and a weekly dashboard the whole team reads and acts on."
category: business
version: 1.0.0
tags: [founding-startups, startup-north-star-metrics, founder, north-star-metric, kpi-dashboard, input-metrics, product-analytics, cohort-retention]
author: Aurum Technology
starter_structure:
  templates:
    - product-spec
    - metrics-log
    - meeting-notes
    - purchase-decision
    - board-meeting
  pillars:
    - name: Founding & Startups
      emoji: "🚀"
      description: "Starting and steering a young company: validating the idea, incorporating, finding product-market fit, the founder's operating rhythm, co-founder relationships, runway and the hard calls of the early years."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Startup North Star Metrics
          description: "Choosing the few metrics that show whether an early startup is working and building a simple dashboard the team checks weekly."
          projects:
            - name: Defining the moment customers get value
              description: |-
                ## Purpose
                Every good north star counts how often customers reach the moment the product is actually useful to them: a report shared, a booking completed, a bug fixed with your tool. Writing that moment down in one plain sentence, with the user action that proves it happened, gives every later metric something real to point at instead of signups or page views.

                ## Milestones
                1. A one-sentence description of the value moment, written from the customer's side.
                2. The single in-product action that proves the moment happened named.
                3. Five recent customers checked against it, confirming the action matches what they say they value.
                4. The sentence agreed by every founder and pinned where the team will see it.

                ## Notes
                If you cannot name the action, you probably have more than one product or no product yet. Settle that before choosing any metric.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written value moment sentence and the in-product action that proves it, agreed by all founders and checked against five customers."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write one sentence describing when a customer first finds the product useful"
                - "Name the in-product action that proves that moment happened"
                - "Ask five recent customers what they would miss most if the product vanished"
                - "Agree the final wording with your co-founders and pin it in the team channel"
            - name: Choosing a single north star metric
              description: |-
                ## Purpose
                Your north star is the one number that rises when customers get more value and that predicts revenue a few months later. Scoring three or four candidates against the same tests stops the choice defaulting to whatever the analytics tool shows first, usually signups or total users.

                ## Milestones
                1. Three or four candidate metrics written down, each built on the value moment.
                2. Each candidate scored on whether it reflects value, leads revenue, moves weekly and can be influenced by the team.
                3. One metric chosen, with a sentence on why the runners-up lost.
                4. The chosen metric stated with its unit and time window, for example weekly active teams creating a report.

                ## Notes
                Avoid revenue as the north star at this stage. It lags too far behind the work and hides whether new customers are getting value.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One north star metric recorded with its unit, time window and a scored comparison against at least two rejected alternatives."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List three or four candidate north star metrics built on the value moment"
                - "Score each candidate on value, revenue lead, weekly movement and team influence"
                - "Pick the winner and write why each runner-up lost"
                - "State the metric with its exact unit and time window"
            - name: Three input metrics that drive the north star
              description: |-
                ## Purpose
                Nobody can work on a north star directly on a Tuesday afternoon, but they can work on the things that feed it: new accounts activated, existing accounts returning, depth of use per account. Splitting the north star into two to four inputs gives each part of the team a number they can move this week.

                ## Milestones
                1. A simple tree drawn with the north star at the top and two to four inputs beneath it.
                2. Each input checked so that, if it rose and nothing else changed, the north star would rise.
                3. No input overlapping another so heavily that the same work counts twice.
                4. The tree shared with the team in a single picture.

                ## Notes
                A common split is breadth, depth and frequency: how many accounts, how much each does, how often they come back.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A metric tree with the north star and two to four non-overlapping inputs, shared with the whole team."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Sketch the north star with the activities that feed it underneath"
                - "Reduce the list to two to four inputs a team member could move in a week"
                - "Test each input by asking whether it alone would lift the north star"
                - "Share the finished tree as one picture in the team channel"
            - name: Written definitions for every dashboard metric
              description: |-
                ## Purpose
                Two founders can both say active users and mean different things, and the argument only surfaces when a number disappoints an investor. A short definitions sheet that fixes the action counted, the time window, the time zone and what is excluded settles those arguments once.

                ## Milestones
                1. A definitions sheet with one row per metric on the dashboard.
                2. Each row giving the counted action, time window, time zone, inclusions and exclusions.
                3. A worked example for each metric showing how last week's figure was calculated.
                4. A change log column so any later edit to a definition is dated and explained.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A definitions sheet covering every dashboard metric, each with window, exclusions, a worked example and a change log."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Create a definitions sheet with one row per metric you report"
                - "Fill in the counted action, window, time zone and exclusions for each"
                - "Add a worked example using last week's real figures"
                - "Ask the agent to flag any definition that two people could read differently"
            - name: Event tracking plan for the core actions
              description: |-
                ## Purpose
                Metrics are only as good as the events that feed them, and most early products log either everything or nothing useful. A tracking plan names each event, the properties it carries and where in the code it fires, so the value moment and the inputs can be counted without guesswork.

                ## Milestones
                1. A list of the eight to fifteen events needed to compute the north star and its inputs.
                2. Each event named in one consistent style, with its required properties and the user or account identifier.
                3. Every event fired from the product and visible in the analytics tool.
                4. A test run in which a founder performs the value moment and sees the right events arrive.

                ## Notes
                Start from the **Product spec** template. Fire value events from the server where you can, since browser ad blockers silently drop client-side events.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A tracking plan of named events and properties, all firing in production and verified by a test run of the value moment."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List the events needed to compute the north star and each input"
                - "Choose one naming style, such as object then past-tense verb"
                - "Add account and user identifiers as required properties on every event"
                - "Run through the value moment yourself and confirm each event arrives"
            - name: Filtering out test, staff and bot accounts
              description: |-
                ## Purpose
                In a company with forty real customers, the founders' own test accounts and a handful of crawlers can be a quarter of the activity. A standing exclusion list, applied the same way in every query, keeps the numbers honest before anyone celebrates a jump that was really a demo day.

                ## Milestones
                1. A list of internal email domains, test account identifiers and known bot patterns.
                2. The exclusion applied in the analytics tool and in any spreadsheet that feeds the dashboard.
                3. Last month's north star recalculated with the filter, and the difference noted.
                4. A rule written for how new staff and test accounts get added to the list.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A documented exclusion list applied in every metric source, with last month's north star recalculated using it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List internal domains, staff accounts and test workspaces"
                - "Apply the exclusion as a saved filter in the analytics tool"
                - "Recalculate last month's north star with and without the filter"
                - "Write who adds new accounts to the list and when"
            - name: Twelve-week baseline for the north star and inputs
              description: |-
                ## Purpose
                On its own a number says little; the same number beside the last twelve weeks says whether things are improving. Rebuilding a weekly history from logs, billing and database records, even roughly, gives you a starting line and shows how much the figures swing in a normal week.

                ## Milestones
                1. Weekly values for the north star and each input for the past twelve weeks, or as many as exist.
                2. Weeks with known gaps or tracking breaks marked rather than silently filled.
                3. The typical week-to-week swing for each metric worked out.
                4. The baseline saved as the first rows of the dashboard history.

                ## Notes
                Start from the **Metrics log** template. A rough history from the database is far more useful than waiting twelve weeks for perfect event data.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A weekly table covering up to twelve past weeks for the north star and every input, with gaps marked and normal swing noted."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pull weekly counts for the north star from the database or logs"
                - "Add the same weekly history for each input metric"
                - "Mark weeks where tracking was broken or missing"
                - "Work out the usual weekly swing for each number"
            - name: One-page weekly startup dashboard
              description: |-
                ## Purpose
                The dashboard the team actually checks is the one that fits on a single screen and loads in seconds. Putting the north star, its inputs, two guardrails and revenue on one page, each with this week, last week and a twelve-week line, is enough for most companies under fifty people.

                ## Milestones
                1. A single page showing the north star, two to four inputs, guardrails and revenue.
                2. Each tile showing this week, last week, change and a twelve-week trend line.
                3. The page bookmarked by every team member and linked from the team channel.
                4. No more than eight numbers on the page.

                ## Notes
                A spreadsheet is a perfectly good first dashboard. Move to a tool only when updating it by hand takes more than thirty minutes a week.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page dashboard with no more than eight numbers, each with weekly change and a twelve-week trend, linked in the team channel."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Sketch the page layout with the north star at the top"
                - "Build each tile with this week, last week and a trend line"
                - "Link the dashboard from the team channel and pin it"
                - "Remove anything that pushes the page past eight numbers"
            - name: Guardrail metrics against gaming the north star
              description: |-
                ## Purpose
                Any single number can be pushed up in ways that hurt the business: notifications that drive sessions and also uninstalls, discounts that drive orders and also refunds. Pairing the north star with one or two guardrails, such as churn, refund rate or support tickets per account, makes the cost of a cheap win visible in the same meeting.

                ## Milestones
                1. The two most likely ways to inflate the north star without real value written down.
                2. One or two guardrail metrics chosen that would rise if that happened.
                3. A threshold set for each guardrail that triggers a conversation.
                4. Guardrails added to the dashboard next to the north star.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "One or two guardrail metrics with written thresholds sit beside the north star on the dashboard and are checked monthly."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the two easiest ways to inflate the north star without real value"
                - "Pick a guardrail that would expose each one"
                - "Set the threshold that triggers a team conversation"
                - "Check both guardrails against their thresholds @recurring(monthly:18)"
            - name: Matching metrics to the company's current stage
              description: |-
                ## Purpose
                The right numbers for a company with ten design partners are not the right numbers for one with two thousand paying accounts. Writing down which stage you are in, and which metrics matter at that stage, stops you copying a late-stage dashboard full of figures too small to read.

                ## Milestones
                1. The company's stage written in a sentence, such as pre-revenue, first paying customers or repeatable growth.
                2. The metrics that matter at this stage listed, and the ones that can wait.
                3. Any dashboard tile that belongs to a later stage removed or parked.
                4. A trigger written for when you will revisit the stage, such as one hundred paying accounts.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written stage statement with the metrics that matter now, the ones parked and the trigger for the next review."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the company's current stage in one sentence"
                - "List the metrics that matter now and the ones that can wait"
                - "Park any dashboard tile that belongs to a later stage"
                - "Set a customer or revenue trigger for revisiting the stage"
            - name: Monday dashboard refresh before the team meeting
              description: |-
                ## Purpose
                Stale dashboards teach the team to ignore them. Refreshing the numbers early every Monday, before anyone sees them in a meeting, and adding one line on what moved and why, keeps the page trusted and the discussion short.

                ## Milestones
                1. The dashboard refreshed by a fixed time every Monday.
                2. A one-line comment beside any metric that moved more than its normal swing.
                3. Broken or late data flagged on the page rather than left blank.
                4. Eight consecutive Mondays refreshed on time.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The dashboard is refreshed with comments by a fixed Monday time for eight consecutive weeks."
                cadence: rolling
              tasks:
                - "Choose the Monday time by which the dashboard must be current"
                - "Refresh the dashboard and comment on any unusual move @recurring(weekly:mon)"
                - "Add a visible flag for any metric whose data is late or broken"
                - "Count how many of the last eight Mondays were on time"
            - name: Weekly metrics review in the team meeting
              description: |-
                ## Purpose
                Metrics change behaviour only when someone talks about them with the people who can move them. A fifteen-minute slot at the start of the weekly team meeting, in the same order every week, turns the dashboard into decisions: what moved, why, and what each input owner will try next.

                ## Milestones
                1. A fixed fifteen-minute slot at the top of the weekly team meeting.
                2. The same running order each week: north star, inputs, guardrails, then actions.
                3. Each input owner giving a one-sentence update and one action for the coming week.
                4. Actions recorded and checked at the start of the following review.

                ## Notes
                Start from the **Meeting notes** template. Keep diagnosis short in the meeting; anything needing more than two minutes becomes a separate conversation.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A metrics review runs at the start of every weekly team meeting, with recorded actions checked the following week."
                cadence: rolling
              tasks:
                - "Book a fixed fifteen-minute metrics slot at the top of the team meeting"
                - "Write the running order and share it with the team"
                - "Run the review and record each owner's action @recurring(weekly:tue)"
                - "Open each review by checking last week's actions"
            - name: Monthly metrics write-up for the whole team
              description: |-
                ## Purpose
                Weekly numbers are noisy; a month shows the shape. A short written note at the start of each month, with the north star trend, what the team learned and the one input to focus on next, keeps everyone, including people who missed meetings, pointed the same way.

                ## Milestones
                1. A one-page monthly note with charts for the north star and each input.
                2. Three sentences on what was learned and one on what changes next month.
                3. The note shared by the fourth of each month.
                4. Past notes kept in one folder so the year reads as a story.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly metrics note is shared with the team by the fourth of each month for six months running."
                cadence: rolling
              tasks:
                - "Create a folder for monthly metrics notes"
                - "Ask the agent to draft the note from the month's dashboard history"
                - "Edit and share the monthly metrics note with the team @recurring(monthly:4)"
                - "End each note with the single input to focus on next month"
            - name: Monthly cohort retention table update
              description: |-
                ## Purpose
                Rising north stars can hide a leaky bucket if new signups mask old customers leaving. Updating a cohort table each month, showing what share of each signup month is still reaching the value moment, tells you whether the product is getting stickier for newer customers.

                ## Milestones
                1. A cohort table with signup months as rows and months since signup as columns.
                2. Each cell showing the share of that cohort still reaching the value moment.
                3. The table updated with the newest month on the sixth of each month.
                4. A note each month on whether newer cohorts retain better than older ones.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A cohort retention table based on the value moment is updated monthly, with a written comparison of new versus older cohorts."
                cadence: rolling
              tasks:
                - "Build the cohort table with signup month rows and month-since columns"
                - "Base each cell on accounts reaching the value moment, not logins"
                - "Add the newest month and compare recent cohorts @recurring(monthly:6)"
                - "Highlight any cohort that retains noticeably worse than the one before"
            - name: Data quality checks against source systems
              description: |-
                ## Purpose
                Tracking breaks quietly: a release renames an event, a webhook fails, a time zone shifts. Comparing a few dashboard figures each month against the source of truth, such as paying accounts in the billing system or signups in the database, catches a broken pipe before it misleads a board.

                ## Milestones
                1. Three to five figures chosen, each with a source system to check against.
                2. An acceptable gap set for each, for example within two percent.
                3. A monthly check recorded with the dashboard figure, source figure and gap.
                4. Any gap above tolerance traced to a cause and fixed or explained.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly log compares at least three dashboard figures with their source systems, with every out-of-tolerance gap explained."
                cadence: rolling
              tasks:
                - "Choose three to five dashboard figures and their source systems"
                - "Set the largest acceptable gap for each comparison"
                - "Compare dashboard figures against billing and the database @recurring(monthly:12)"
                - "Trace any gap over tolerance to a cause and note the fix"
            - name: Quarterly north star target setting
              description: |-
                ## Purpose
                Without a target, a rising line feels fine whether it is rising fast enough or not. Setting a quarterly target for the north star and each input, based on the baseline and on what the plan needs, gives the weekly review a clear question: on track or behind.

                ## Milestones
                1. A target for the north star for the quarter, with the reasoning written beside it.
                2. Targets for each input that, if hit, would deliver the north star target.
                3. A weekly pace line drawn on the dashboard so progress is visible.
                4. The previous quarter's targets scored as hit, missed or abandoned, with a sentence each.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Each quarter has written north star and input targets, a pace line on the dashboard and a scored review of last quarter's targets."
                cadence: cyclic
              tasks:
                - "Score last quarter's targets as hit, missed or abandoned"
                - "Set this quarter's north star and input targets with reasoning @recurring(quarterly)"
                - "Draw a weekly pace line for each target on the dashboard"
                - "Check that the input targets add up to the north star target"
            - name: Anomaly log for unexplained metric moves
              description: |-
                ## Purpose
                When a number jumps or drops sharply, the explanation is usually forgotten within a month, and the same scare repeats next year. A short log of every move beyond the normal swing, with its cause once found, builds a record of what really drives your numbers.

                ## Milestones
                1. A threshold set for what counts as an anomaly, based on each metric's normal swing.
                2. A log with date, metric, size of move, suspected cause and confirmed cause.
                3. Each anomaly given a confirmed cause or marked unexplained within two weeks.
                4. Recurring causes, such as holidays or a large customer, written as known patterns.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An anomaly log with thresholds per metric, every entry closed with a cause or marked unexplained within two weeks."
                cadence: rolling
              tasks:
                - "Set an anomaly threshold for each metric from its normal swing"
                - "Create a log with columns for metric, move, suspected and confirmed cause"
                - "Scan the dashboard for moves beyond threshold and log them @recurring(weekly:wed)"
                - "Write recurring causes as known patterns at the top of the log"
            - name: Investor update metrics section
              description: |-
                ## Purpose
                Investors read the numbers first and judge consistency over time. A fixed metrics block in every investor update, with the same metrics, the same definitions and an honest note when something fell, builds more trust than a cherry-picked highlight each month.

                ## Milestones
                1. A fixed list of five to seven metrics for every update.
                2. Each metric shown with this month, last month and the same month a year ago where it exists.
                3. A one-line explanation beside any metric that fell.
                4. The metrics block drafted from the dashboard by the third of each month.

                ## Notes
                Never change a definition silently between updates. If you change one, say so and restate the old months on the new basis.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every investor update carries the same five to seven metrics with month-on-month comparisons and explanations for any decline."
                cadence: rolling
              tasks:
                - "Choose the five to seven metrics every investor update will carry"
                - "Build a reusable table with this month, last month and a year ago"
                - "Draft the metrics block from the dashboard @recurring(monthly:3)"
                - "Add a one-line explanation beside any number that fell"
            - name: Quarterly check that the north star still fits
              description: |-
                ## Purpose
                Choices made at ten customers can stop fitting at five hundred, or after the product changes shape, and the north star is no exception. A short quarterly check against the original tests, asking whether it still reflects value and still leads revenue, keeps the team from chasing a number that no longer matters.

                ## Milestones
                1. The north star re-scored each quarter against the original selection tests.
                2. A check on whether north star growth over the last two quarters was followed by revenue growth.
                3. A decision recorded: keep, refine the definition or replace.
                4. Any change announced with the old and new figures shown side by side.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded keep, refine or replace decision on the north star each quarter, backed by a revenue comparison."
                cadence: cyclic
              tasks:
                - "Re-score the north star against the original tests @recurring(quarterly)"
                - "Compare north star growth with revenue growth one quarter later"
                - "Record a keep, refine or replace decision with reasons"
                - "Show old and new figures side by side if the metric changes"
            - name: Experiment log tied to input metrics
              description: |-
                ## Purpose
                Teams run plenty of experiments and rarely remember which one moved which number. A log in which every experiment names the input metric it targets, the expected change and the result makes it obvious which levers actually work and which ideas keep coming back without effect.

                ## Milestones
                1. A log with columns for experiment, target input, expected change, result and decision.
                2. Every experiment entered before it starts, not after.
                3. Results recorded within a week of each experiment ending.
                4. A quarterly count of experiments per input and how many moved it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every experiment is logged before launch with a target input and expected change, and results are recorded within a week."
                cadence: rolling
              tasks:
                - "Set up an experiment log with a target input column"
                - "Enter every running experiment with its expected change"
                - "Record results and decisions for finished experiments @recurring(weekly:thu)"
                - "Count experiments per input and how many actually moved it"
            - name: Leading and lagging metrics in practice
              description: |-
                ## Purpose
                Revenue and churn tell you what already happened; activation and weekly use tell you what is about to. Understanding the difference, with examples from your own product, lets a founder act on next quarter's revenue this week rather than explain it afterwards.

                ## Milestones
                1. Every dashboard metric labelled as leading or lagging.
                2. For each lagging metric, at least one leading metric identified that tends to move first.
                3. The typical delay between the two estimated from your own history.
                4. A short explanation written that a new hire could follow.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every dashboard metric is labelled leading or lagging, with each lagging metric paired to a leading one and an estimated delay."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Label each dashboard metric as leading or lagging"
                - "Pair every lagging metric with a leading one from your product"
                - "Estimate the delay between each pair from your own history"
                - "Write a half-page explainer for new hires"
            - name: Reading a cohort retention curve
              description: |-
                ## Purpose
                Retention curves are the most honest chart a young company has, and the most often misread. Learning to tell a curve that flattens from one that keeps falling, and to read a smile curve where old users return, tells you more about the product than any single active-user count.

                ## Milestones
                1. Three published example curves studied: one flattening, one falling to zero and one smiling.
                2. Your own latest cohort curve plotted on the same axes.
                3. A written read of your curve: where it flattens, if at all, and at what level.
                4. One question about retention taken to the next weekly review.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your own retention curve plotted and interpreted in writing, compared with flattening, falling and smiling examples."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Find three published retention curves showing different shapes"
                - "Plot your latest cohort curve on matching axes"
                - "Write where your curve flattens and at what level"
                - "Bring one retention question to the next metrics review"
            - name: Spotting vanity metrics on your own dashboard
              description: |-
                ## Purpose
                Total signups, cumulative users and page views only ever go up, which is exactly why they feel good and say so little. Auditing your own dashboard and pitch materials for numbers that cannot fall, or that no decision depends on, frees space for the figures that can tell you something is wrong.

                ## Milestones
                1. Every number on the dashboard and in the pitch deck listed.
                2. Each one tested: can it fall, and would a change in it alter a decision.
                3. Vanity metrics replaced with a rate, cohort or active version.
                4. A short rule written for adding any new metric in future.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every dashboard and deck number tested, with each cumulative or decision-free metric replaced by an active, rate or cohort version."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every number on the dashboard and in the pitch deck"
                - "Mark any number that can only go up or drives no decision"
                - "Replace each one with an active, rate or cohort version"
                - "Write a two-line test for adding new metrics"
            - name: Basic SQL for querying your own product data
              description: |-
                ## Purpose
                Founders who can write a simple query answer their own questions in ten minutes instead of waiting days for an engineer. Learning to select, filter, group and join on your own database, ideally on a read-only replica, covers most of what an early dashboard needs.

                ## Milestones
                1. Read-only access to a copy of the product database set up safely.
                2. A beginner course or tutorial completed covering select, where, group by and join.
                3. The north star for last week calculated with your own query.
                4. Five useful queries saved with plain-English descriptions.

                ## Notes
                Never practise on the live production database with write access. Ask an engineer for a read-only user or a replica.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Last week's north star reproduced with your own query on read-only data, and five described queries saved."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Ask an engineer for read-only access to a database replica"
                - "Work through a beginner SQL tutorial covering joins and grouping"
                - "Write a query that reproduces last week's north star"
                - "Save five useful queries with plain-English notes"
            - name: Simple statistics for small-number weeks
              description: |-
                ## Purpose
                With forty customers, two of them going on holiday can look like a ten percent drop. Learning a few simple tools, such as rolling four-week averages, ranges of normal variation and why small samples swing, stops the team overreacting to noise or celebrating luck.

                ## Milestones
                1. A four-week rolling average added beside each weekly metric.
                2. A normal range worked out for each metric from the baseline.
                3. Three past weeks re-examined to see whether the move was signal or noise.
                4. A team rule agreed on how big a move must be before anyone acts on it.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Rolling averages and normal ranges added for every dashboard metric, with a written team rule on when a move counts."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Add a four-week rolling average beside each weekly metric"
                - "Work out the normal range for each metric from the baseline"
                - "Re-examine three past scares to see if they were noise"
                - "Agree with the team how big a move must be to act on"
            - name: North star examples from comparable companies
              description: |-
                ## Purpose
                Studying what similar companies chose, such as nights booked for a lodging marketplace or messages sent for a chat tool, sharpens your own choice and shows how others handled edge cases. The aim is pattern-spotting, not copying, since their value moment is not yours.

                ## Milestones
                1. Eight to ten published north star examples collected from companies with a similar model.
                2. Each example noted with its value moment, unit and time window.
                3. Two or three patterns written down that apply to your business.
                4. Your own north star compared against them, with any refinement noted.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A table of at least eight comparable companies' north stars with value moment and window, and a written comparison with your own."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Collect eight to ten published north star examples from similar models"
                - "Note each one's value moment, unit and time window"
                - "Write the patterns that apply to your business"
                - "Compare your own north star and note any refinement"
            - name: Funnel from signup to the value moment
              description: |-
                ## Purpose
                Most early products lose the majority of new signups before they ever reach the value moment, and the biggest single drop is usually easy to find once the funnel is drawn. Mapping each step and its conversion shows which input metric deserves the next month of work.

                ## Milestones
                1. The steps from signup to the value moment listed, usually four to seven.
                2. Conversion between each step measured for the last four weeks of signups.
                3. The largest drop identified and five users who dropped there contacted or watched.
                4. One change chosen to address the largest drop and logged as an experiment.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A measured funnel from signup to value moment, with the biggest drop investigated and one experiment logged against it."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List each step between signup and the value moment"
                - "Measure conversion between steps for the last four weeks of signups"
                - "Watch session recordings or call five users who dropped at the worst step"
                - "Log one experiment aimed at the largest drop"
            - name: Writing a metric narrative, not just a number
              description: |-
                ## Purpose
                Charts without a sentence invite everyone to project their own story onto them. Practising a short written narrative for each metric, covering what happened, why we think so and what we will do, makes reviews faster and investor updates more credible.

                ## Milestones
                1. A three-part narrative format agreed: what happened, why we believe it, what we will do.
                2. Narratives written for the north star and each input for one week.
                3. Each narrative under fifty words and free of hedging filler.
                4. The format adopted in the weekly review and monthly note.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A three-part narrative of under fifty words exists for every dashboard metric and the format is used in weekly reviews."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Agree a three-part format for metric commentary"
                - "Write a narrative for the north star and each input this week"
                - "Cut each narrative to under fifty words"
                - "Use the format in the next weekly review and monthly note"
            - name: Choosing a product analytics tool
              description: |-
                ## Purpose
                Product analytics tools differ most in pricing by event volume, how well they handle account-level metrics for business products, and whether they can read your data warehouse. Comparing two or three on your actual tracking plan and expected volume avoids a painful migration in a year.

                ## Milestones
                1. Requirements written: event volume, account-level reporting, retention charts, warehouse access and budget.
                2. Two or three tools shortlisted and trialled with real events from the tracking plan.
                3. Each tool scored on the same requirements, including price at three times today's volume.
                4. One tool chosen, with the decision and its reasons recorded.

                ## Notes
                Start from the **Purchase decision** template. Check what happens to price when your free tier runs out, since event-based pricing can jump sharply.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded choice of analytics tool, scored against written requirements and priced at three times current event volume."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write requirements covering volume, account reporting and budget"
                - "Shortlist and trial two or three tools with real events"
                - "Price each tool at three times today's event volume"
                - "Record the chosen tool and the reasons"
            - name: Deciding when the dashboard leaves the spreadsheet
              description: |-
                ## Purpose
                Spreadsheets are fast to start and slow to keep, and the moment to move is usually later than engineers think and earlier than founders do. Setting a clear trigger, such as more than thirty minutes of manual updating a week or a second person needing to edit, makes the move a planned step rather than a frustrated weekend.

                ## Milestones
                1. The weekly time spent updating the dashboard by hand measured for four weeks.
                2. A trigger written for when to move to a business intelligence tool or the analytics tool's own dashboards.
                3. Two options compared on cost, setup time and who can edit.
                4. A decision recorded to move now or a date to recheck the trigger.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written trigger for leaving the spreadsheet, four weeks of measured update time and a recorded move or recheck decision."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Time how long the weekly dashboard update takes for four weeks"
                - "Write the trigger that would justify moving tools"
                - "Compare two dashboard options on cost and setup time"
                - "Record the decision or a date to check again"
            - name: Replacing a vanity north star with a value metric
              description: |-
                ## Purpose
                Plenty of startups start with registered users or downloads as their headline number and find, a year in, that it rose while the business stalled. Switching to a value-based metric is uncomfortable because the new number is smaller, but it is far easier at twenty people than at a hundred.

                ## Milestones
                1. The current headline metric tested against the value moment and found wanting, or confirmed.
                2. A replacement metric chosen and back-calculated for the past twelve weeks.
                3. The team, board and investors told about the change with both series shown.
                4. Old metric dropped from the dashboard after one overlap month.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The headline metric is replaced by a value-based one, back-calculated twelve weeks and announced with both series shown."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Test the current headline metric against the value moment"
                - "Back-calculate the replacement metric for twelve weeks"
                - "Explain the switch to the team with both lines on one chart"
                - "Remove the old metric after a month of overlap"
            - name: Daily, weekly or monthly as the activity window
              description: |-
                ## Purpose
                Payroll tools used monthly look dead on daily active users, and a dying messaging app can still look healthy on monthly active users. Choosing the activity window that matches how often a satisfied customer naturally needs the product makes the north star fair to the product.

                ## Milestones
                1. The natural use frequency of a happy customer estimated from interviews and usage data.
                2. The distribution of days between value moments plotted for active accounts.
                3. A window chosen, such as weekly, with the reason written down.
                4. The definitions sheet updated with the chosen window.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An activity window chosen from a plot of days between value moments, recorded in the definitions sheet with its reason."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask five happy customers how often they need the product"
                - "Plot the days between value moments for active accounts"
                - "Choose the daily, weekly or monthly window and write why"
                - "Update the definitions sheet with the window"
            - name: Cutting the dashboard back to eight numbers
              description: |-
                ## Purpose
                Dashboards grow a tile every time someone asks a question, and within six months nobody can find the north star. A pruning pass that removes anything nobody discussed in the last month, and moves curiosities to a separate page, keeps the main view readable.

                ## Milestones
                1. Every dashboard tile listed with the last date it was discussed or acted on.
                2. Tiles not used in a month moved to a secondary page or deleted.
                3. The main page back to eight numbers or fewer.
                4. A quarterly prune booked so the page stays lean.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The main dashboard page holds eight numbers or fewer after each quarterly prune, with unused tiles moved or deleted."
                cadence: cyclic
              tasks:
                - "List each tile with the last time it was discussed"
                - "Move unused tiles to a secondary page"
                - "Confirm the main page shows eight numbers or fewer"
                - "Prune the dashboard of unused tiles @recurring(quarterly)"
            - name: Single source of truth for revenue figures
              description: |-
                ## Purpose
                Revenue reported from the billing system, the accounting package and the analytics tool rarely match, because of refunds, currency, timing and annual plans. Deciding which system is the source for each revenue figure on the dashboard, and documenting why the others differ, ends the month-end argument.

                ## Milestones
                1. Revenue figures from billing, accounts and analytics for one month set side by side.
                2. Each difference explained: refunds, currency, timing, annual prepayments or tax.
                3. One source chosen for each revenue figure on the dashboard.
                4. The choice and the reconciliation written into the definitions sheet.

                ## Notes
                Recurring revenue, cash collected and recognised revenue are different numbers. Ask your accountant which one belongs in which report.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One named source system per revenue figure, with a written reconciliation of how the other systems differ for one month."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pull one month of revenue from billing, accounts and analytics"
                - "Explain each difference between the three figures"
                - "Choose the source for each revenue figure on the dashboard"
                - "Write the choice and reconciliation into the definitions sheet"
            - name: Splitting the north star by customer segment
              description: |-
                ## Purpose
                An overall north star that grows ten percent can be one segment growing forty percent while two others shrink. Breaking the number down by plan, company size, use case or acquisition channel shows where the product is genuinely working and which segment the team should lean towards.

                ## Milestones
                1. Three or four segment cuts chosen that the business could act on.
                2. The north star and each input shown by segment for the last twelve weeks.
                3. The fastest-growing and the shrinking segments named, with a sentence on why.
                4. One segment view added below the main dashboard page.

                ## Notes
                Keep segments to a handful. Slicing forty customers twenty ways produces stories, not evidence.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The north star and inputs broken down by three or four actionable segments over twelve weeks, with growing and shrinking segments named."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Choose three or four segment cuts the business could act on"
                - "Break the north star and inputs down by segment for twelve weeks"
                - "Name the fastest-growing and shrinking segments and why"
                - "Add a single segment view below the main dashboard"
            - name: Named owner for every input metric
              description: |-
                ## Purpose
                Metrics that everyone watches are metrics nobody moves. Giving each input a single named owner, who reports on it weekly and decides what to try next, turns the metric tree into an organisation chart for the work that matters.

                ## Milestones
                1. One owner named for each input metric, with no person owning more than two.
                2. Each owner's first two ideas for moving their input written down.
                3. Owners reporting on their input in the weekly review.
                4. Ownership revisited when the team or the tree changes.

                ## Notes
                In a two-founder company, owning two inputs each is normal. The point is that someone specific answers for each number.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every input metric has one named owner who reports on it in the weekly review, recorded beside the metric tree."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Name one owner beside each input on the metric tree"
                - "Ask each owner for their first two ideas to move it"
                - "Add owner updates to the weekly review running order"
                - "Revisit ownership whenever someone joins or leaves"
            - name: Board meeting metrics pack
              description: |-
                ## Purpose
                Board members want the same few numbers every quarter, presented the same way, with the bad news explained rather than buried. Building a standard metrics section for each board meeting, tied to the dashboard's definitions, saves days of preparation and keeps the conversation on decisions.

                ## Milestones
                1. A standard metrics section of three to five slides or pages agreed with the board chair or lead investor.
                2. North star, inputs, retention, revenue and burn shown with quarter-on-quarter trends.
                3. A short narrative on what worked, what did not and what the team will change.
                4. The pack sent to the board at least three days before the meeting.

                ## Notes
                Start from the **Board meeting** template. Use exactly the same definitions as the weekly dashboard so numbers never need reconciling in the room.
              priority: high
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A metrics pack using dashboard definitions, with trends and a narrative, is sent to the board three days before each meeting."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Agree the standard metrics section with the board chair or lead investor"
                - "Build slides for the north star, inputs, retention, revenue and burn"
                - "Refresh and send the board metrics pack three days ahead @recurring(quarterly)"
                - "Write the what worked and what changes narrative"
            - name: Fundraising data room metrics page
              description: |-
                ## Purpose
                Investors in diligence will rebuild your key numbers from raw data, and any gap between the pitch and the data room costs trust. Preparing a metrics page with definitions, monthly history and cohort tables before the raise starts means the numbers survive scrutiny.

                ## Milestones
                1. A metrics page with monthly history for the north star, inputs and revenue.
                2. Definitions attached for each metric, matching the pitch deck exactly.
                3. Cohort retention and any revenue retention tables included.
                4. An independent check by an advisor or accountant that the figures reconcile.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A data room metrics page with monthly history, definitions and cohort tables that match the pitch deck and have been checked by a third party."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Export monthly history for the north star, inputs and revenue"
                - "Attach definitions that match the pitch deck word for word"
                - "Add cohort retention tables to the page"
                - "Ask an advisor or accountant to reconcile the figures"
            - name: Traction slide for the pitch deck
              description: |-
                ## Purpose
                The traction slide is where most investors decide whether to keep listening, and a cumulative chart labelled users now reads as a warning sign. One honest chart of the north star by week or month, with a growth rate and a single annotation, does more than a collage of logos and big totals.

                ## Milestones
                1. One chart of the north star over time, not cumulative, with the axis clearly labelled.
                2. A growth rate stated, such as average weekly or monthly growth over the period.
                3. At most two annotations marking events that explain the shape.
                4. The slide tested on two founders or advisors who say back what it shows.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A single non-cumulative north star chart with a stated growth rate, tested on two people who correctly describe what it shows."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Plot the north star over time as a non-cumulative chart"
                - "Calculate and state the average growth rate for the period"
                - "Add no more than two annotations explaining the shape"
                - "Show the slide to two people and ask what it says"
            - name: First team walkthrough of the north star
              description: |-
                ## Purpose
                Announced in a chat message, a north star picked by founders changes little. A dedicated session where the whole team sees the value moment, the metric tree, the dashboard and their own place in it gives people a reason to care about a number they did not choose.

                ## Milestones
                1. A thirty to forty-five minute session scheduled with the whole team.
                2. The value moment, north star, inputs, owners and dashboard walked through in that order.
                3. Questions and objections captured, with any good ones changing the plan.
                4. Every team member able to say which input their work affects.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A whole-team walkthrough held, with questions recorded and every member able to name the input their work affects."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Schedule a forty-five minute walkthrough with the whole team"
                - "Prepare five slides covering the value moment through to the dashboard"
                - "Record every question and objection raised in the session"
                - "Ask each person afterwards which input their work affects"
            - name: Annual metrics retrospective
              description: |-
                ## Purpose
                Once a year, it is worth asking whether the numbers you tracked actually predicted what happened to the company. A retrospective that compares the year's north star, inputs and targets with revenue and retention outcomes shows which metrics earned their place and which were noise.

                ## Milestones
                1. The year's monthly north star, inputs, targets and revenue collected in one table.
                2. Each metric judged on whether it predicted the outcome it was meant to.
                3. Metrics to keep, change or drop for next year listed.
                4. A one-page retrospective shared with the team and board.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page annual retrospective judging each metric's predictive value, with keep, change or drop decisions, shared with team and board."
                cadence: cyclic
              tasks:
                - "Collect the year's monthly metrics and targets in one table"
                - "Judge whether each metric predicted the outcome it was meant to"
                - "Run the annual metrics retrospective and list changes @recurring(yearly)"
                - "Share the one-page retrospective with the team and board"
            - name: North star for a B2B SaaS startup
              description: |-
                ## Purpose
                In business software the buyer is a company, so a north star counted per user can rise while accounts quietly churn. Founders selling to teams usually do better counting accounts, such as weekly active teams completing the core workflow, with seat expansion as an input.

                ## Milestones
                1. The north star defined at account level, not user level.
                2. An activation rule set, such as three users completing the core workflow in the first fourteen days.
                3. Inputs covering new activated accounts, retained accounts and seats per account.
                4. Account-level metrics checked against renewals and expansions over the last two quarters.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An account-level north star with a written activation rule and inputs, checked against two quarters of renewals."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Redefine the north star to count accounts rather than users"
                - "Write the activation rule for a new account"
                - "Add seats per account as an input metric"
                - "Compare account activity against renewals for two quarters"
            - name: North star for a consumer app
              description: |-
                ## Purpose
                Consumer apps live and die on habit, so the shape of daily and weekly use matters more than downloads. Pairing a value-based north star with day-one, day-seven and day-thirty retention and a stickiness ratio, such as daily over monthly actives, shows whether people are forming a habit or just trying the app.

                ## Milestones
                1. A north star tied to the value moment rather than app opens.
                2. Day-one, day-seven and day-thirty retention calculated for recent install cohorts.
                3. A stickiness ratio added, such as daily active over monthly active users.
                4. Retention split by acquisition channel to see which sources bring habitual users.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A value-based north star with day-one, seven and thirty retention and a stickiness ratio, split by acquisition channel."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Tie the north star to the value moment instead of app opens"
                - "Calculate day-one, seven and thirty retention for recent cohorts"
                - "Add a daily over monthly active stickiness ratio"
                - "Split retention by acquisition channel"
            - name: North star for a two-sided marketplace
              description: |-
                ## Purpose
                Marketplaces have two sets of customers, and growth on one side means nothing if the other cannot meet it. Most marketplace north stars count completed transactions, with liquidity inputs such as the share of listings that sell or requests that get filled, measured market by market.

                ## Milestones
                1. The north star set as completed transactions or a close equivalent.
                2. A liquidity metric defined for each side, such as fill rate and time to first sale.
                3. Metrics split by local market or category, since averages hide dead markets.
                4. A monthly liquidity check showing which markets are healthy and which need seeding.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A transaction-based north star with liquidity metrics for both sides, reported per market and reviewed monthly."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Define the north star as completed transactions"
                - "Set a liquidity metric for buyers and one for sellers"
                - "Split every marketplace metric by market or category"
                - "Review liquidity by market and flag weak ones @recurring(monthly:15)"
            - name: Metrics before the first paying customer
              description: |-
                ## Purpose
                Before revenue, the honest numbers are smaller and closer to the customer: problem interviews held, prototype users returning, waitlist people who reply when asked to try something. Tracking a few of these weekly keeps a pre-revenue founder accountable without pretending to have a dashboard that does not exist yet.

                ## Milestones
                1. Three pre-revenue measures chosen, such as weekly returning prototype users and conversations held.
                2. A simple weekly tally kept in a sheet.
                3. A target set for when to switch to a full north star, such as ten paying customers.
                4. Six weeks of tallies reviewed for trend.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three pre-revenue measures tallied weekly for six weeks, with a written switch point to a full north star."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Choose three pre-revenue measures you can count each week"
                - "Set up a one-tab sheet to tally them"
                - "Write the switch point for moving to a full north star"
                - "Review six weeks of tallies for direction"
            - name: Solo founder's fifteen-minute metrics routine
              description: |-
                ## Purpose
                Running a company alone, there is no team meeting to force a weekly look at the numbers, and it is easy to skip until something breaks. A fixed fifteen-minute Friday routine with three numbers and one written sentence keeps a solo founder honest without building a dashboard for an audience of one.

                ## Milestones
                1. Three numbers chosen: the north star, one input and cash or revenue.
                2. A Friday slot of fifteen minutes blocked in the calendar.
                3. One written sentence each week on what moved and what to do next week.
                4. The routine kept for eight weeks in a row.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A solo founder logs three numbers and one sentence every Friday for eight consecutive weeks."
                cadence: rolling
              tasks:
                - "Pick the three numbers you will check each Friday"
                - "Block fifteen minutes on Friday afternoons"
                - "Log three numbers and one sentence on what to change @recurring(weekly:fri)"
                - "Share the eighth week's log with a peer or mentor"
            - name: Metrics for a hardware or long sales cycle startup
              description: |-
                ## Purpose
                When a sale takes nine months or a product ships twice a year, weekly product usage cannot be the only signal. Hardware and enterprise founders need leading metrics such as qualified pilots, pilot-to-order conversion, units in the field in active use and return rates, read monthly rather than weekly.

                ## Milestones
                1. A north star chosen that fits the cycle, such as units in active use or pilots converted.
                2. Leading inputs defined, such as qualified pilots started and pilot milestones reached.
                3. A monthly rather than weekly review rhythm agreed for slow-moving numbers.
                4. Field return or failure rate added as a guardrail.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A north star and leading inputs suited to a long cycle, reviewed monthly, with a field return or failure guardrail."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Choose a north star that fits a long sales or shipping cycle"
                - "Define leading inputs around pilots and their milestones"
                - "Review pilots, conversions and units in active use @recurring(monthly:9)"
                - "Add field return or failure rate as a guardrail"
            - name: Metric tree with modelled sensitivities
              description: |-
                ## Purpose
                Once the tree has a year of history, you can estimate how much each input actually moves the north star, rather than assuming they matter equally. A simple sensitivity model shows, for example, that a five point gain in activation is worth more than doubling new signups, which changes where the team spends a quarter.

                ## Milestones
                1. The metric tree written as a formula linking inputs to the north star.
                2. Twelve months of history used to check the formula reproduces past values.
                3. The effect of a ten percent change in each input on the north star calculated.
                4. Inputs ranked by impact per unit of effort and used in quarterly planning.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A metric tree formula that reproduces twelve months of north star history, with each input's sensitivity calculated and ranked."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write the metric tree as a formula from inputs to north star"
                - "Check the formula against twelve months of history"
                - "Ask the agent to calculate the north star effect of a ten percent change per input"
                - "Rank inputs by impact and bring the ranking to quarterly planning"
            - name: Versioned metrics layer for self-serve queries
              description: |-
                ## Purpose
                As the team grows past fifteen or twenty people, each analyst and founder starts writing their own version of active accounts. A metrics layer, where each definition lives once in code with version history and every dashboard reads from it, keeps numbers consistent as more people ask questions.

                ## Milestones
                1. Core metrics defined once in code in the warehouse or a metrics layer tool.
                2. Every dashboard reading from those definitions instead of its own queries.
                3. Definition changes going through review with a dated change note.
                4. Non-technical team members able to slice a metric by segment without writing a query.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All core metrics defined once in versioned code, with every dashboard reading from them and changes reviewed and logged."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Move the north star and input definitions into versioned code"
                - "Point every dashboard at the shared definitions"
                - "Set a review step for any change to a definition"
                - "Review pending metric definition change requests @recurring(monthly:25)"
            - name: Holdout tests that prove an input drives the north star
              description: |-
                ## Purpose
                Correlation between an input and the north star can be coincidence, or both can be driven by something else, like a sales push. Holding a small random group back from a change to an input, and comparing their north star contribution after several weeks, is the most direct way to show the lever is real.

                ## Milestones
                1. One input chosen whose link to the north star is assumed but unproven.
                2. A random holdout group, typically five to ten percent, kept out of a change that lifts that input.
                3. The test run long enough to capture several value cycles.
                4. The difference in north star contribution between groups recorded, with the conclusion.

                ## Notes
                Small companies often lack the volume for a clean result. Agree the minimum sample in advance and accept an inconclusive answer rather than stretching the data.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A completed holdout test on one input, with group sizes, duration and the measured north star difference written up."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Pick one input whose effect on the north star is unproven"
                - "Agree the minimum sample size and duration before starting"
                - "Hold a random group back from the change to that input"
                - "Write up the north star difference between the groups"
---

# Startup North Star Metrics

This area is for founders who want a small set of numbers that tell the truth about whether the company is working, rather than a wall of charts nobody trusts. It starts with the foundations (the value moment, one north star, the inputs that drive it, written definitions, a tracking plan, clean data, a twelve-week baseline and a one-page dashboard), then the weekly and monthly routines that keep it alive, the analytical skills behind it, the decisions about tools and definitions, the dated moments like board meetings and fundraising, versions for SaaS, consumer, marketplace, pre-revenue, solo and hardware companies, and finally specialist work on metric trees, a metrics layer and holdout tests.

What repeats is a Monday dashboard refresh and a weekly metrics review, a midweek anomaly scan and a Thursday experiment log, monthly retention, data checks, guardrails and the team write-up, and quarterly target setting, board packs and a fit check on the north star itself, with an annual retrospective. The **Product spec**, **Metrics log**, **Meeting notes**, **Purchase decision** and **Board meeting** templates pair with the tracking plan, the dashboard, the weekly review, the analytics tool choice and the board pack. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
