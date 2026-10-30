---
id: product-management.product-led-retention
name: Product-Led Retention
description: "A written retention definition, honest cohort curves, the behaviours that predict who stays, review rhythms for churn and dormancy, and fixes for the moments users quietly leave."
category: business
version: 1.0.0
tags: [product-management, product-led-retention, team, founder, retention, churn, cohort-analysis, habit-loops]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - meeting-notes
    - feedback-themes
    - product-spec
    - remediation-plan
    - risk-register
  pillars:
    - name: Product Management
      emoji: "🧩"
      description: "Deciding what to build and why: discovery and research, roadmaps and prioritisation, specs and launches, pricing and packaging, product analytics, and the feedback loops that keep a product honest."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Product-Led Retention
          description: "Finding the product behaviours that keep users coming back, building habit-forming loops and fixing the moments where users quietly leave."
          projects:
            - name: Written definition of a retained user
              description: |-
                ## Purpose
                Teams argue about whether retention is improving because each person means something different by an active user: logged in, opened the app, or did the thing the product exists for. Writing one definition built on a core value action, rather than a login, makes every later chart and decision comparable. It takes an afternoon and saves months of crossed wires.

                ## Milestones
                1. Three candidate definitions written, each naming the action that counts as real use.
                2. The chosen definition tied to a core value action, not a session or login event.
                3. The definition checked against the event data so it can actually be queried.
                4. The definition published where the whole team and any investors will see it.

                ## Notes
                A login-based definition flatters almost every product. If users can log in and get nothing, the definition is measuring hope, not value.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "One written definition of a retained user, based on a named core value action, is published and used by every retention chart."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the three actions a user takes when they are getting real value"
                - "Write a one-sentence retained user definition for each candidate"
                - "Check with engineering that the chosen action is tracked reliably"
                - "Publish the definition on the team's metrics page"
                - "Revisit the definition after a year of product changes @recurring(yearly)"
            - name: Natural usage interval for your product
              description: |-
                ## Purpose
                Payroll tools used twice a month will look like a disaster on a daily active user chart, and a messaging app will look healthy on a monthly one. Working out how often a satisfied user genuinely needs the product sets the window every retention measure should use: daily, weekly, monthly or per cycle. Get this wrong and the team will chase the wrong problem.

                ## Milestones
                1. The gap between consecutive core actions measured for users who have stayed six months or more.
                2. The interval within which most of those users return identified.
                3. A daily, weekly, monthly or cycle-based retention window chosen and written down.
                4. Existing dashboards switched to the chosen window.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written retention window, backed by the measured return interval of long-term users, is applied to every retention dashboard."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pull a list of users who have been active for at least six months"
                - "Chart the days between their consecutive core actions"
                - "Pick the window that covers most of their return gaps"
                - "Update the retention dashboards to use that window"
            - name: First cohort retention table
              description: |-
                ## Purpose
                An overall active user count can grow for years while every new cohort leaks faster than the last, because fresh sign-ups hide the loss. A cohort table, one row per sign-up month and one column per period since, shows whether newer users stay better or worse than older ones. It is the single chart most retention decisions start from.

                ## Milestones
                1. Users grouped into monthly sign-up cohorts using the written retained user definition.
                2. A table showing the share of each cohort still retained at periods 1, 2, 3, 6 and 12.
                3. The table read row by row and column by column, with two observations written beneath it.
                4. The table saved somewhere it can be refreshed without rebuilding the query.

                ## Notes
                Start from the **Metrics log** template to keep the cohort numbers alongside the date each refresh was taken.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A refreshable cohort table covering at least six sign-up months exists, with two written observations from the team."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Create a cohort log from the metrics log template"
                - "Write the query that groups users by sign-up month"
                - "Fill the table for periods 1, 2, 3, 6 and 12 where data exists"
                - "Write two observations about how newer cohorts compare with older ones"
            - name: Retention curve shape diagnosis
              description: |-
                ## Purpose
                The shape of the curve matters more than any single number on it. A curve that flattens means a core group finds lasting value; one that keeps sliding towards zero means nobody does yet, and a curve that rises again later suggests users coming back. Naming your curve's shape tells the team whether to work on reach, on the core experience or on bringing people back.

                ## Milestones
                1. Retention curves plotted for the three most recent complete cohorts.
                2. Each curve labelled as decaying to zero, flattening or rising again, with the period where it changes.
                3. The level at which the curve flattens, if it does, written down as the current retention floor.
                4. A one-paragraph diagnosis shared with the team, naming what the shape implies for priorities.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written diagnosis names the curve shape for three recent cohorts and the current retention floor, shared with the team."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Plot the retention curves for the last three complete cohorts"
                - "Mark the period where each curve stops falling steeply"
                - "Write down the retention floor if the curves flatten"
                - "Share a one-paragraph diagnosis at the next team meeting"
            - name: Churn, dormancy and involuntary loss definitions
              description: |-
                ## Purpose
                A cancelled subscription, an account that stopped using the product but still pays, and a card that failed are three different problems with three different fixes, yet many teams count them as one churn number. Defining each separately, along with logo churn and seat churn for team accounts, stops a payment problem being treated as a product problem. It also makes the cost of silent dormancy visible before renewal day.

                ## Milestones
                1. Written definitions for voluntary churn, involuntary churn, dormancy, logo churn and seat churn.
                2. The dormancy threshold set in days, based on the natural usage interval.
                3. Each definition mapped to the data source that can count it.
                4. A first monthly count for each type, with the share of total loss each one represents.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Five loss types are defined in writing, each with a data source, and one month of counts shows the share of loss from each."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write one-line definitions for voluntary churn, involuntary churn and dormancy"
                - "Add logo churn and seat churn definitions if you sell to teams"
                - "Set the number of inactive days that makes an account dormant"
                - "Count last month's losses under each definition"
            - name: Retention baseline by plan, segment and channel
              description: |-
                ## Purpose
                One headline retention figure hides the fact that users from one acquisition channel or one plan may stay twice as long as another. Splitting the baseline by the segments the team already uses, plan and acquisition channel shows where retention is genuinely weak and where it is being dragged down by users who were never a good fit. That changes whether the fix belongs in the product or in who you attract.

                ## Milestones
                1. Period 3 retention calculated separately for each plan, existing segment and top acquisition channel.
                2. Any group with fewer than a hundred users flagged as too small to read.
                3. The best and worst retaining groups named, with the gap between them.
                4. A note on which gaps look like product problems and which look like fit problems.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A baseline table of period 3 retention by plan, segment and channel exists, with the largest gap named and classified as product or fit."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Choose the period you will compare, such as month three"
                - "Split retention by plan, existing segment and acquisition channel"
                - "Flag any group too small to draw conclusions from"
                - "Write which gaps look like fit problems rather than product problems"
                - "Refresh the baseline split with the latest cohorts @recurring(quarterly)"
            - name: Behaviours that separate kept users from lost ones
              description: |-
                ## Purpose
                Retained users nearly always did something early that lost users did not: imported their data, invited a colleague, set up a second project, came back on day two. Finding the two or three early behaviours most associated with staying gives the team a target it can design for, the way some products learned a number of connections or files in the first week mattered. Treat what you find as a hypothesis to test, not a proven cause.

                ## Milestones
                1. Twenty candidate early behaviours listed from the event data and from interviews.
                2. Retention compared for users who did and did not do each behaviour in their first two weeks.
                3. Two or three behaviours shortlisted, each with a threshold such as a count within a number of days.
                4. Each shortlisted behaviour written as a testable hypothesis with a proposed experiment.

                ## Notes
                Users who were already motivated do more of everything. A behaviour that correlates with retention may simply mark keen users, which is why the experiment step matters.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Two or three early behaviours with thresholds are documented with their retention lift and a planned experiment for each."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List twenty early actions a new user can take in the first two weeks"
                - "Compare month-three retention for users who did and did not do each one"
                - "Shortlist the behaviours with the largest gap and a sensible threshold"
                - "Write each as a hypothesis with an experiment that could disprove it"
            - name: Retention target with guardrail metrics
              description: |-
                ## Purpose
                Without an agreed target, retention work competes badly with features that have launch dates. A target for a named period, set from the current baseline and the curve shape, plus guardrails such as support contacts and complaint rate, gives the team something to aim at without encouraging tricks that keep people in against their will. Founders also need it for board and investor conversations.

                ## Milestones
                1. The current baseline for the chosen retention period recorded.
                2. A target for the next two quarters set, with the reasoning written in two sentences.
                3. Two or three guardrail metrics chosen that must not worsen while chasing the target.
                4. Target and guardrails agreed by the product lead and the founder or head of product.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written retention target with a period, a date and at least two guardrail metrics is agreed by product leadership."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Record the current baseline for the retention period you track"
                - "Draft a two-quarter target and two sentences of reasoning"
                - "Pick guardrail metrics such as support contacts and refund requests"
                - "Get the target and guardrails agreed by product leadership"
                - "Reset the target from the latest baseline each year @recurring(yearly)"
            - name: Map of moments where users quietly leave
              description: |-
                ## Purpose
                Most users do not cancel in anger; they hit a failed import, an empty screen, a permissions error or a confusing bill and simply stop coming back. Mapping these moments from session data, support tickets and the last actions of lapsed users gives a ranked list of exit points the team can fix. Few teams have this list, and it is usually where the quickest gains are.

                ## Milestones
                1. The last five actions of a hundred lapsed users reviewed.
                2. Support tickets from users who later lapsed tagged by the moment they describe.
                3. A list of exit moments, each with an estimate of how many users hit it each month.
                4. The top five exit moments ranked by users affected and ease of fixing.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A ranked list of at least five exit moments, each with a monthly user estimate, is shared with the product team."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Export the last five actions of a hundred users who lapsed last quarter"
                - "Pull support tickets from users who stopped using the product soon after"
                - "Group the findings into named exit moments"
                - "Rank the top five by users affected and effort to fix"
            - name: Weekly retention signal check
              description: |-
                ## Purpose
                Monthly cohort tables are too slow to catch a release that broke something on Tuesday. A fifteen-minute weekly look at a handful of leading signals, such as week-one return rate for new users, core action volume and cancellation clicks, gives an early warning while the cause is still fresh. The point is noticing, not analysing; anything odd goes to the monthly review.

                ## Milestones
                1. Four to six leading signals chosen and placed on one view.
                2. A normal range written beside each signal.
                3. The check held weekly for eight weeks, with a one-line note each time.
                4. At least one anomaly traced to a cause and recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weekly checks are logged with a one-line note each, and any out-of-range signal has a recorded follow-up."
                cadence: rolling
              tasks:
                - "Choose four to six leading retention signals and put them on one view"
                - "Write the normal range next to each signal"
                - "Check the signals and write a one-line note @recurring(weekly:tue)"
                - "Send anything out of range to the monthly cohort review"
            - name: Monthly cohort review meeting
              description: |-
                ## Purpose
                Retention moves slowly, so it needs a fixed monthly slot where product, design, engineering and support look at the newest cohort row together. Forty-five minutes on what changed, which cohort is the outlier and what the team will try next turns the cohort table from a report into a source of work. Without the meeting, the table goes stale within a quarter.

                ## Milestones
                1. A standing monthly meeting booked with product, design, engineering and support.
                2. A fixed agenda: newest cohort, outliers, exit interview themes, actions.
                3. Each meeting ending with one to three owned actions.
                4. Six consecutive meetings held with notes kept.

                ## Notes
                Start from the **Meeting notes** template. Keep last month's actions at the top so the meeting opens with what happened to them.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly cohort reviews held, each with notes and one to three owned actions carried into the next meeting."
                cadence: rolling
              tasks:
                - "Book a standing monthly cohort review with the core team"
                - "Write the four-part agenda into a meeting notes page"
                - "Refresh the cohort table and run the review @recurring(monthly:5)"
                - "Record one to three owned actions at the end of each meeting"
            - name: Churned user exit interviews
              description: |-
                ## Purpose
                Cancellation surveys tell you the reason people pick from a list; a twenty-minute conversation tells you what actually happened in the weeks before. Speaking to two people who left every month, and writing up each call the same way, builds a picture of churn that no dashboard can give. Users who left are often surprisingly willing to talk if you ask soon and promise not to sell.

                ## Milestones
                1. An invitation message written that promises no sales pitch.
                2. A short interview guide focused on the weeks before leaving.
                3. Two interviews held each month for three months.
                4. Each interview written up in the same format and shared with the team.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six exit interviews completed over three months, each written up in a shared format and discussed at a cohort review."
                cadence: rolling
              tasks:
                - "Write a short invitation to recently cancelled users promising no sales pitch"
                - "Draft a ten-question guide about the weeks before they left"
                - "Invite recent leavers and hold two exit interviews @recurring(monthly:12)"
                - "Write each call up in the same one-page format"
            - name: Cancellation reason survey and tagging
              description: |-
                ## Purpose
                One question at the point of cancelling, with a short list of reasons and a free text box, gives a steady stream of churn evidence at almost no cost. The value only appears when the answers are tagged consistently each month, because a reason list drifts and free text piles up unread. Tagged reasons show whether price, missing features, a competitor or a change in the customer's own situation is driving loss.

                ## Milestones
                1. A single cancellation question with six to eight reasons and a free text option live in the product.
                2. A tag list agreed for coding free text answers.
                3. Each month's answers tagged and counted.
                4. A rolling three-month view of the top five reasons shared with the team.

                ## Notes
                Start from the **Feedback themes** template. Keep the survey optional and after the cancel button is pressed, never as a gate before it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three months of cancellation answers are tagged with a consistent list, and the top five reasons are shared monthly."
                cadence: rolling
              tasks:
                - "Write a single optional cancellation question with six to eight reasons"
                - "Agree a tag list for coding the free text answers"
                - "Tag the month's cancellation answers and update the top five reasons @recurring(monthly:19)"
                - "Retire any reason nobody has picked for three months"
            - name: At-risk account watchlist from usage decline
              description: |-
                ## Purpose
                Paying accounts rarely cancel without warning: usage falls, the champion stops logging in, seats go idle. A weekly watchlist of accounts whose core activity dropped sharply against their own recent average lets the team reach out, or fix a blocker, weeks before the cancellation. For founders running customer success themselves, it is the most useful twenty minutes of the week.

                ## Milestones
                1. A decline rule written, such as core actions down by half against the previous four weeks.
                2. A weekly list of accounts meeting the rule, with owner and contract value.
                3. A named owner for each account on the list, with the action taken recorded.
                4. A quarterly check of how many listed accounts later churned, to tune the rule.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly watchlist runs for twelve weeks, every listed account has a recorded action, and the rule's hit rate has been checked once."
                cadence: rolling
              tasks:
                - "Write a usage decline rule based on each account's own recent average"
                - "Build a query that lists accounts meeting the rule with their value"
                - "Review the watchlist and assign an owner to each new account @recurring(weekly:mon)"
                - "Check how many listed accounts went on to cancel @recurring(quarterly)"
            - name: Failed payment recovery and card update prompts
              description: |-
                ## Purpose
                Expired and declined cards can account for a large share of subscription churn, and none of those users chose to leave. Smart retries from the billing provider, in-product banners asking for a new card, and a short grace period before access is cut recover many of these accounts. Product teams often leave this to finance, which is why it stays unfixed.

                ## Milestones
                1. The share of monthly churn caused by failed payments measured.
                2. Billing provider retry settings reviewed and set deliberately.
                3. An in-product banner and an email asking for updated card details live.
                4. A grace period agreed with finance before access is reduced.
                5. The monthly recovery rate tracked for three months.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Failed payment churn is measured, retries and in-product prompts are live, and the recovery rate has been tracked for three months."
                cadence: rolling
              tasks:
                - "Measure last month's churn caused by failed or expired cards"
                - "Review the billing provider's retry settings with finance"
                - "Ship an in-product banner asking users to update a failing card"
                - "Check the failed payment recovery rate and note any change @recurring(monthly:9)"
            - name: Win-back programme for lapsed users
              description: |-
                ## Purpose
                Some users who drift away would come back if they knew what had changed or were reminded of the problem the product solves for them. A small monthly win-back effort, aimed at users dormant for one to three intervals and tied to a genuine product improvement, brings a share of them back at far lower cost than a new sign-up. Messages with nothing new to say do more harm than good.

                ## Milestones
                1. A lapsed group defined by days since their last core action.
                2. Three win-back messages written, each tied to a real product change.
                3. A monthly send to the lapsed group, with a holdout kept for comparison.
                4. Return rate against the holdout reported after three months.

                ## Notes
                Respect unsubscribe choices and local marketing consent rules. A win-back message counts as marketing in most places.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three months of win-back sends with a holdout, and a written return rate comparison against the holdout."
                cadence: rolling
              tasks:
                - "Define the lapsed group by days since the last core action"
                - "Write three win-back messages, each naming one real improvement"
                - "Send the month's win-back message with a ten percent holdout @recurring(monthly:22)"
                - "Compare return rates with the holdout after three months"
            - name: Release retention guardrail check
              description: |-
                ## Purpose
                Redesigns, new defaults and performance regressions can quietly lower retention for weeks before anyone links the two. Comparing early return rates for users exposed to each significant release against those who were not, or against the previous cohort, catches harmful changes while a rollback is still cheap. The check takes thirty minutes a month once the comparison is set up.

                ## Milestones
                1. A list of the month's significant releases kept by the product team.
                2. A comparison of week-one return rates before and after each significant release.
                3. A threshold agreed for when a drop triggers investigation.
                4. Any release that crossed the threshold investigated with the finding recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every significant release in a quarter has a recorded before and after return rate comparison, with any threshold breach investigated."
                cadence: rolling
              tasks:
                - "Start a running list of significant releases with their ship dates"
                - "Agree the drop in week-one return rate that triggers investigation"
                - "Compare return rates around each of the month's releases @recurring(monthly:26)"
                - "Record what was found for any release that crossed the threshold"
            - name: Retention bets backlog
              description: |-
                ## Purpose
                Ideas for improving retention arrive from interviews, cohort reviews and support, then vanish into the general backlog where they lose to new features. A separate, ranked list of retention bets, each with the exit moment or behaviour it targets and the expected effect, keeps them visible and lets the team choose deliberately each month. It also shows leadership what retention work is waiting.

                ## Milestones
                1. A retention bets list with a column for the targeted exit moment or behaviour.
                2. Each bet scored on users affected, expected effect and effort.
                3. The list re-ranked each month after the cohort review.
                4. At least two bets shipped or tested in a quarter, with outcomes recorded against them.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A ranked retention bets list is re-ranked monthly, and at least two bets per quarter have recorded outcomes."
                cadence: rolling
              tasks:
                - "Create a retention bets list with target, effect and effort columns"
                - "Move retention ideas from the main backlog into the list"
                - "Re-rank the retention bets after the cohort review @recurring(monthly:15)"
                - "Record the outcome next to each bet that ships"
            - name: Quarterly retention review with leadership
              description: |-
                ## Purpose
                Retention is set by decisions far outside the product team: who sales targets, what marketing promises, how support is staffed. A quarterly review with leadership, covering the cohort trend, the target, the top churn reasons and the bets shipped, puts those decisions on the table. It is also where the case for more retention investment is won or lost.

                ## Milestones
                1. A standard four-slide pack: cohort trend, target progress, top churn reasons, bets and results.
                2. The review held each quarter with leadership.
                3. Decisions and requests from leadership recorded.
                4. Each decision followed up before the next review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "Four quarterly retention reviews held in a year, each with a standard pack and recorded decisions that were followed up."
                cadence: cyclic
              tasks:
                - "Draft the four-slide retention review pack outline"
                - "Prepare and hold the quarterly retention review with leadership @recurring(quarterly)"
                - "Record each decision and its owner after the review"
                - "Open the next review with progress on the last review's decisions"
            - name: Reading cohort tables and retention curves
              description: |-
                ## Purpose
                Cohort tables reward careful reading: a diagonal pattern points to a dated event, a single bad row points to one cohort's source, and a whole column drop may just be an incomplete period. Learning to read rows, columns and diagonals, and to spot partial periods and small cohorts, stops the team drawing confident conclusions from noise. It is the core literacy of retention work.

                ## Milestones
                1. The difference between row, column and diagonal patterns explained in your own words.
                2. Partial periods and cohorts under a sensible minimum size greyed out on your own table.
                3. Unbounded and bounded retention calculated for the same cohort and the difference understood.
                4. Three real patterns in your own table explained to a colleague.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three patterns in the team's own cohort table are explained in writing, with partial periods and small cohorts marked."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read a practical guide to reading cohort tables and retention curves"
                - "Grey out partial periods and small cohorts in your own table"
                - "Calculate bounded and unbounded retention for one cohort"
                - "Explain three patterns in your table to a colleague"
            - name: Habit formation models and their ethical limits
              description: |-
                ## Purpose
                Models of habit formation describe a cue, an action, a reward and some stored investment that brings people back, and they explain why some products become part of a routine. They are also behind the worst manipulative design. Learning the models alongside a clear test for when a habit serves the user, and when it only serves the metrics, lets the team design for return visits without building something users resent.

                ## Milestones
                1. Two established habit formation models read and summarised in a paragraph each.
                2. Your product's current cue, action, reward and investment mapped honestly.
                3. A written test for whether a habit loop serves the user, agreed by the team.
                4. One weak link in the loop identified as a candidate retention bet.

                ## Notes
                A useful test: would the user, on reflection, be glad they came back? If the honest answer is no, the loop is extracting attention rather than delivering value.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The product's habit loop is mapped, a written user benefit test is agreed by the team, and one weak link is in the retention bets list."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read two well-known books or essays on habit-forming product design"
                - "Map your product's cue, action, reward and investment on one page"
                - "Agree a written test for when a habit loop serves the user"
                - "Add the weakest link in the loop to the retention bets list"
            - name: Measuring retention effects with long holdouts
              description: |-
                ## Purpose
                Changes aimed at retention often look good in week one because of novelty and then fade, or look flat early and pay off months later. Learning how long-running holdout groups, enough sample size for a retention outcome and a pre-agreed reading date work prevents the team from declaring wins that disappear. It is a different discipline from testing a button colour.

                ## Milestones
                1. How novelty effects distort early retention results understood, with one example from your product or a published case.
                2. The sample size needed to detect a realistic retention change estimated for your user volume.
                3. A long holdout design written for one current retention bet, with its reading date.
                4. A rule agreed for when a retention test can be called early, if ever.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written holdout design with sample size and reading date exists for one retention bet, and an early stopping rule is agreed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Read about novelty effects and long-term holdout groups in product tests"
                - "Estimate the sample needed to detect a two-point retention change"
                - "Write a holdout design with a fixed reading date for one bet"
                - "Agree when, if ever, a retention test may be called early"
            - name: Churn, lifetime value and payback maths
              description: |-
                ## Purpose
                Even a small change in monthly churn has an outsized effect on how long customers stay and what each one is worth, and founders are asked about this in every funding conversation. Working through the arithmetic once with your own numbers, including why simple lifetime formulas overstate value when churn falls over time, makes it easier to argue for retention work in money terms.

                ## Milestones
                1. Average customer lifetime calculated from your monthly churn rate.
                2. A simple lifetime value worked out using average revenue and gross margin.
                3. The effect of a one-point churn reduction on lifetime value shown in a table.
                4. The limits of the simple formula written down in two sentences.

                ## Notes
                This is for internal reasoning, not financial reporting. Agree any figure shared with investors with whoever owns finance.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A worked table shows lifetime and lifetime value at current churn and at one point lower, with the formula's limits noted."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pull monthly churn, average revenue per account and gross margin"
                - "Calculate average lifetime and a simple lifetime value"
                - "Build a table showing the effect of one point less churn"
                - "Write two sentences on where the simple formula misleads"
            - name: Net revenue retention and expansion maths
              description: |-
                ## Purpose
                For products sold to teams, the money kept from a cohort can exceed what it started at, because expansion from added seats and upgrades outweighs cancellations and downgrades. Learning how net and gross revenue retention are calculated, and what each hides, shows whether growth is coming from customers getting more value or from a few large accounts masking widespread loss.

                ## Milestones
                1. Gross and net revenue retention calculated for one annual cohort.
                2. Expansion, contraction and churn shown as separate amounts.
                3. The share of expansion from the largest ten accounts worked out.
                4. A short note on what the two figures say about product value.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Gross and net revenue retention are calculated for one cohort, with expansion, contraction and churn shown separately."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read how gross and net revenue retention are calculated"
                - "Calculate both for the cohort that started twelve months ago"
                - "Split the movement into expansion, contraction and churn"
                - "Check how much expansion came from the ten largest accounts"
            - name: Interviewing people who left
              description: |-
                ## Purpose
                Exit interviews go wrong when the interviewer defends the product, explains a feature the user missed or tries to save the account. Practising neutral, timeline-based questioning, such as when they first thought about leaving and what they did instead, gets the real story. A few rehearsals with a colleague playing a churned user make a noticeable difference to what you hear.

                ## Milestones
                1. A timeline-based question set written: first doubt, last good week, the switch, what replaced you.
                2. Two practice interviews with a colleague playing a churned user, with feedback.
                3. A list of your own habits that steer answers, such as explaining features.
                4. One real exit interview recorded, with permission, and reviewed against the list.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two practice interviews and one reviewed real interview are complete, with a written list of steering habits to avoid."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a timeline question set from first doubt to the switch"
                - "Run two practice interviews with a colleague playing a leaver"
                - "List the habits that steered answers in the practice runs"
                - "Review one real recorded interview against that list"
            - name: Correlation traps in retention analysis
              description: |-
                ## Purpose
                Retention data is full of traps: power users use every feature so every feature looks retentive, survivors skew any analysis of long-term users, and reverse causation hides in plain sight. Learning to spot survivorship bias, selection effects and confounding by engagement stops the team building expensive features on a misleading chart. The skill pays off every time someone says users who do X retain better.

                ## Milestones
                1. Survivorship bias, selection effects and confounding explained with a retention example for each.
                2. One past retention claim in your team re-examined for these traps.
                3. A short checklist written for reviewing any new retention correlation.
                4. The checklist used on the next retention analysis presented to the team.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written checklist for retention correlations exists and has been applied to at least one past and one new analysis."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a retention example of survivorship bias, selection and confounding"
                - "Re-examine one past claim that users who do X retain better"
                - "Draft a five-question checklist for any new retention correlation"
                - "Apply the checklist to the next retention analysis presented"
            - name: Cancellation flow that respects the user
              description: |-
                ## Purpose
                Cancellation flows tend to be either a bare button with no learning or a maze of guilt screens that breeds complaints and, in a growing number of places, regulatory trouble. A redesigned flow that is easy to complete, asks one reason question, and offers a genuine pause or downgrade where it fits the reason, keeps some users and lets the rest leave on good terms. Users who leave cleanly are far more likely to come back.

                ## Milestones
                1. The current flow recorded screen by screen, with the number of steps to cancel counted.
                2. Local rules on easy online cancellation checked with whoever handles legal matters.
                3. A spec for a flow of no more than three steps, with one reason question and a reason-matched alternative.
                4. The new flow live, with cancellation completion time and save rate measured for a month.

                ## Notes
                Start from the **Product spec** template. Cancelling should never be harder than signing up was.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A cancellation flow of three steps or fewer is live, legal review is recorded, and one month of save rate and completion data is reported."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Screenshot every step of the current cancellation flow"
                - "Ask whoever handles legal matters which cancellation rules apply to you"
                - "Write a product spec for a three-step flow with reason-matched options"
                - "Measure save rate and time to cancel for the first month after launch"
            - name: Pause and downgrade options decision
              description: |-
                ## Purpose
                Many cancellations come from a temporary situation: a seasonal business, a project ending, a tight month. Offering a pause or a cheaper lighter plan to those users can keep the relationship alive, but it can also cannibalise revenue from people who would have stayed anyway. Deciding deliberately, using cancellation reasons and a test, avoids both outcomes.

                ## Milestones
                1. The share of cancellation reasons that describe a temporary situation measured.
                2. Pause and downgrade options compared on revenue kept, return rate and complexity.
                3. A test design for the chosen option with a control group.
                4. A recorded decision to offer, adjust or drop the option after the test.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision to offer, adjust or drop a pause or downgrade option is recorded, based on a controlled test and cancellation reason data."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Count how many cancellation reasons describe a temporary situation"
                - "Compare a pause option and a downgrade option on revenue and effort"
                - "Design a test of the stronger option with a control group"
                - "Record the decision to offer, adjust or drop it"
            - name: Welcome-back experience after an absence
              description: |-
                ## Purpose
                Someone returning after six weeks often lands on a screen that assumes they remember everything, finds things moved, and leaves again within a minute. A welcome-back experience that shows where they left off, what has changed since and one useful next step turns a fragile return visit into a resumed habit. It is one of the cheapest retention features to build.

                ## Milestones
                1. The return rate of users coming back after more than two usage intervals measured, with how long they stay.
                2. The current returning-user screen reviewed with three lapsed users.
                3. A design showing where they left off, what changed and one next step.
                4. The experience live, with second-visit rate for returners compared before and after.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A welcome-back experience is live and the share of returning users who come back a second time is compared before and after launch."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Measure how many returning users leave again within one session"
                - "Watch three lapsed users open the product after a long gap"
                - "Design a screen showing where they left off and what changed"
                - "Compare second-visit rates for returners before and after launch"
            - name: Value recap showing what users achieved
              description: |-
                ## Purpose
                Users forget how much a product has done for them, especially when it works quietly in the background. A periodic recap inside the product, showing hours saved, invoices sent, workouts logged or problems avoided, reminds them of the value at exactly the moments they might reconsider, such as before a renewal. The numbers must be real and specific to the user.

                ## Milestones
                1. Two or three value measures chosen that users would recognise as their own wins.
                2. The data for each confirmed as accurate per user.
                3. A recap design shown at a natural moment, such as month end or before renewal.
                4. The recap live, with retention of viewers compared against a holdout.

                ## Notes
                Avoid vanity figures such as total clicks. If the recap would not make a user nod, it is the wrong measure.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A value recap with at least two user-specific measures is live, with retention of viewers compared against a holdout."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "List the outcomes users mention when they praise the product"
                - "Choose two measures that can be counted accurately per user"
                - "Ask the agent to draft three versions of the recap wording"
                - "Launch the recap with a holdout and compare retention after two months"
            - name: Fixing the biggest exit point
              description: |-
                ## Purpose
                Once the exit moments are mapped, the top one usually affects far more users than any new feature would reach. Treating it as a focused fix, with a root cause, a change, a measure and a date, rather than a ticket that drifts, is how retention actually moves. One exit point fixed properly is worth more than five patched half-way.

                ## Milestones
                1. The top exit moment's root cause written up from data and three user sessions.
                2. A fix designed and sized by the team, with the expected effect estimated.
                3. The fix shipped behind a flag or to a test group.
                4. The share of users hitting the exit moment and leaving afterwards compared before and after.

                ## Notes
                Start from the **Remediation plan** template to keep cause, fix, owner and measure together.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A fix for the top exit moment has shipped and the before and after rate of users leaving at that point is recorded."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Open a remediation plan for the top exit moment"
                - "Watch three session recordings of users hitting that moment"
                - "Agree the fix and its expected effect with design and engineering"
                - "Compare the exit rate at that moment before and after the fix"
            - name: Stored value audit of what users would lose
              description: |-
                ## Purpose
                Users stay longer when the product holds something they have built up: history, settings, templates, connections, a reputation. Auditing what a user accumulates, and how visible it is to them, shows which kinds of stored value to grow and which could feel like being trapped. The aim is a product that is valuable to keep, not hard to leave.

                ## Milestones
                1. A list of everything a typical user accumulates after three months.
                2. Each item rated for how much the user would miss it and how visible it is to them.
                3. Any item that only makes leaving harder, without adding value, flagged for review.
                4. One way to make valued stored items more visible added to the retention bets list.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A rated list of accumulated user value exists, with lock-in-only items flagged and one visibility bet added to the backlog."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List what a three-month user has built up inside the product"
                - "Rate each item for how much a user would miss it"
                - "Flag anything that only makes leaving harder"
                - "Add one bet to make valued items more visible"
            - name: Multi-user accounts as a retention lever
              description: |-
                ## Purpose
                In many products sold to teams, accounts with several active collaborators retain far better than solo accounts, because the product becomes how the group works. Checking whether that holds for your product, and how many active collaborators mark the turning point, tells you whether to invest in sharing, roles and shared spaces. If the effect is weak, that investment belongs elsewhere.

                ## Milestones
                1. Account retention compared for one, two to three and four or more active users.
                2. The collaborator count where retention improves most identified, if any.
                3. Current barriers to adding a second active user listed from data and interviews.
                4. A decision recorded on whether collaboration features are a retention priority.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Account retention by active collaborator count is analysed and a recorded decision states whether collaboration is a retention priority."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Compare account retention by number of active users"
                - "Find the collaborator count where retention improves most"
                - "List what stops a solo user bringing in a second person"
                - "Record whether collaboration features are a retention priority"
            - name: Retention share of the roadmap
              description: |-
                ## Purpose
                Roadmaps drift towards new features that attract sign-ups, while the work that keeps existing users gets the leftovers. Agreeing an explicit share of product capacity for retention, based on how much growth is being lost to churn, makes the trade-off visible and stops retention work being cut every time a launch slips. Founders often find churn is costing more growth than acquisition is adding.

                ## Milestones
                1. Users or revenue lost to churn last quarter compared with what was added.
                2. Current capacity spent on retention estimated from the last two quarters of work.
                3. A target share of capacity proposed with reasoning.
                4. The share agreed with leadership and visible on the roadmap.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An agreed percentage of product capacity for retention is recorded and visible on the roadmap for the next quarter."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Compare last quarter's churned users or revenue with what was added"
                - "Estimate how much of the last two quarters went on retention work"
                - "Propose a capacity share for retention with two lines of reasoning"
                - "Get the share agreed and marked on the roadmap"
            - name: Dark pattern audit of retention tactics
              description: |-
                ## Purpose
                Hidden cancel buttons, confirm-shaming, pre-ticked renewals and endless save offers keep numbers up briefly while eroding trust and attracting regulators and app store reviewers. Auditing every retention tactic against a published list of deceptive patterns, and against the consumer rules where you sell, finds the risks before a customer, journalist or authority does. It also gives the team a clear line for future ideas.

                ## Milestones
                1. Every retention tactic in the product and its emails listed.
                2. Each tactic checked against a published catalogue of deceptive design patterns.
                3. Questions about local consumer and auto-renewal rules raised with whoever handles legal matters.
                4. Each risky tactic logged with an owner and a fix or removal date.

                ## Notes
                Start from the **Risk register** template. This is an organisational check, not a legal opinion; final calls belong with a qualified adviser.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "Every retention tactic is listed and checked, legal questions are raised, and each risky tactic has an owner and a fix date in a register."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every retention tactic in the product, emails and billing"
                - "Check each one against a published catalogue of deceptive patterns"
                - "Send the open questions to whoever handles legal matters"
                - "Log each risky tactic in a risk register with an owner and date"
                - "Repeat the audit for any tactic added during the year @recurring(yearly)"
            - name: Data export and clean offboarding
              description: |-
                ## Purpose
                Users who can take their data with them in a usable format trust the product more while they stay and are more likely to return later. A clean export, a clear account closure path and a short note on how to come back turn a lost customer into a possible future one. In many places, data portability and deletion rights also make this an obligation rather than a courtesy.

                ## Milestones
                1. What data users can currently export, and in what format, documented.
                2. Gaps against what users ask for in support tickets listed.
                3. An export that covers the user's core data in a common format shipped.
                4. A closure confirmation that explains how to return and what is kept for how long.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Users can export their core data in a common format and receive a closure confirmation explaining retention of data and how to return."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Document what users can export today and in which formats"
                - "Search support tickets for export and account closure requests"
                - "Spec an export covering the user's core data"
                - "Write the closure confirmation explaining data kept and how to return"
            - name: Retention sprint week
              description: |-
                ## Purpose
                A focused week where the whole product team works only on retention bets builds shared understanding faster than months of side-of-desk effort. Choosing three to five bets in advance, with data and designs ready, means the week ships changes rather than holding workshops. The demo at the end often changes how the wider company talks about churn.

                ## Milestones
                1. A sprint week date agreed with engineering and leadership.
                2. Three to five retention bets chosen and prepared with data and outline designs.
                3. The week run with daily check-ins and a demo on the final day.
                4. Each shipped change given a measure and a reading date.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A retention sprint week is held, at least three changes ship, and each has a measure and a reading date recorded."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Propose a retention sprint week date to engineering and leadership"
                - "Choose three to five bets from the retention bets list"
                - "Prepare data and outline designs for each bet before the week"
                - "Run the final-day demo and set a reading date for each change"
            - name: Post-mortem on a lost key account
              description: |-
                ## Purpose
                When a large or strategic customer leaves, the reasons are usually spread across product, onboarding, support and the relationship, and each team privately blames another. A blameless post-mortem within two weeks, built from usage data, tickets and a conversation with the customer if they agree, turns one painful loss into changes that protect the other accounts like it.

                ## Milestones
                1. A usage timeline for the account's final six months assembled.
                2. Support history and account notes reviewed for warning signs.
                3. A conversation held with the former customer, if they agree.
                4. A blameless write-up with three to five actions, each with an owner.

                ## Notes
                Start from the **Meeting notes** template for the post-mortem session. Agree in advance that the write-up names causes, not culprits.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A blameless post-mortem for the lost account is written within three weeks, with three to five owned actions."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Build a usage timeline of the account's last six months"
                - "Review its support tickets and account notes for warning signs"
                - "Ask the former customer for a short conversation"
                - "Run the post-mortem session and record owned actions"
            - name: Annual renewal season readiness
              description: |-
                ## Purpose
                Products sold on annual contracts often see a large share of renewals land in a few months, and an account that went quiet in month four is hard to win back in month twelve. Preparing each year, three months ahead, with a list of renewing accounts, their usage health and a product gap list, gives the team time to fix blockers before the renewal conversation.

                ## Milestones
                1. Every account renewing in the next quarter listed with value and usage health.
                2. Accounts with falling usage reviewed with whoever owns the relationship.
                3. Product blockers raised by renewing accounts collected and prioritised.
                4. Renewal outcomes recorded against the health rating to improve next year's list.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A renewal list with usage health is prepared three months ahead, blockers are prioritised, and outcomes are compared against health ratings."
                cadence: cyclic
              tasks:
                - "List accounts renewing next quarter with value and usage health"
                - "Start the renewal readiness review three months before peak season @recurring(yearly)"
                - "Review falling-usage accounts with whoever owns each relationship"
                - "Record each renewal outcome against its health rating"
            - name: Retention data pack for investors
              description: |-
                ## Purpose
                Investors judge early products heavily on cohort retention, and founders who assemble the evidence the week before a meeting tend to show the wrong cut or a flattering one that falls apart in diligence. A prepared pack with the cohort table, curve shape, revenue retention and honest commentary on weak cohorts answers the questions before they are asked.

                ## Milestones
                1. Cohort table and curves using the written retained user definition.
                2. Gross and net revenue retention for sales-led or team plans, where relevant.
                3. A short note explaining any weak cohort and what was learned.
                4. The pack reviewed by an adviser or investor-friendly peer for gaps.

                ## Notes
                Show the same definitions you use internally. Changing definitions for the pack is the quickest way to lose an investor's trust.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A retention pack with cohort table, curves, revenue retention and commentary is complete and reviewed by one external adviser."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Export the cohort table and curves using your standard definition"
                - "Add gross and net revenue retention if you sell to teams"
                - "Ask the agent to draft commentary on the weakest cohort for you to edit"
                - "Have an adviser read the pack and list the questions it raises"
            - name: Churn watch around a price change
              description: |-
                ## Purpose
                Changing prices can move retention for months, through cancellations at the next bill, downgrades and slower expansion. Setting up a watch before the change, with the cohorts to compare, the reasons to tag and a threshold for escalation, means the team sees the real effect quickly and can respond with facts rather than anecdotes from the loudest customers.

                ## Milestones
                1. Baseline churn and downgrade rates recorded for the affected plans before the change.
                2. A cancellation reason tag added for price change.
                3. Weekly churn and downgrade figures tracked for twelve weeks after the change.
                4. A summary at twelve weeks comparing affected and unaffected plans.

                ## Notes
                The pricing decision itself sits elsewhere; this project only measures what it does to retention.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Twelve weeks of churn and downgrade data for affected and unaffected plans are summarised in a written comparison."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Record baseline churn and downgrades for the plans changing price"
                - "Add a price change tag to the cancellation reason list"
                - "Agree the churn rise that would trigger an escalation"
                - "Write the twelve-week comparison of affected and unaffected plans"
            - name: Retention evidence before product-market fit
              description: |-
                ## Purpose
                Before product-market fit, a founder has a few hundred users, noisy data and every reason to see what they hope to see. Watching whether any cohort's curve flattens, which users make up the flat part and what they have in common is one of the clearest early signs of fit, and it tells you which users to build for. Small numbers call for reading users individually as well as in charts.

                ## Milestones
                1. Weekly cohorts tracked for at least eight weeks each.
                2. The users who are still active after eight weeks listed by name or account.
                3. Ten of those users interviewed about what they use the product for.
                4. A written profile of the retained users and a decision on whether to narrow the target customer.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A profile of users still active after eight weeks, built from cohort data and ten interviews, supports a recorded targeting decision."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Set up weekly sign-up cohorts with an eight-week view"
                - "List every user still active after eight weeks"
                - "Interview ten of them about what they use the product for"
                - "Write a retained user profile and decide whether to narrow your target"
            - name: Spreadsheet retention for a team without an analyst
              description: |-
                ## Purpose
                Small teams and early founders rarely have a data warehouse or an analyst, but a billing export and a basic event export are enough for useful retention numbers. A simple spreadsheet updated monthly, with sign-up month, last active month and plan, gives a cohort table and churn rate in an hour. It is better than waiting for tooling that may be a year away.

                ## Milestones
                1. A monthly export from the billing system and the product's user list available.
                2. A spreadsheet with one row per account and columns for sign-up, last active and plan.
                3. A cohort table and monthly churn rate calculated with formulas.
                4. The sheet updated for three consecutive months.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A spreadsheet cohort table and churn rate are updated from exports for three consecutive months."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Export accounts with sign-up date and plan from the billing system"
                - "Add each account's last active month from the product's user list"
                - "Build the cohort table and churn rate with spreadsheet formulas"
                - "Update the sheet from fresh exports @recurring(monthly:2)"
            - name: First 60 days on a product with a leaking cohort
              description: |-
                ## Purpose
                Inheriting a product with falling retention brings pressure to ship something fast, often before knowing why users leave. A sixty-day plan that spends the first month on definitions, data and exit conversations, and the second on one well-chosen fix, earns credibility and avoids a confident change in the wrong place.

                ## Milestones
                1. Existing retention definitions, dashboards and past analyses gathered and reviewed in week one.
                2. Ten conversations held with churned users, support staff and sales.
                3. A one-page diagnosis of where and why the cohort leaks shared by day thirty.
                4. One fix chosen, scoped and under way by day sixty.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page retention diagnosis is shared by day thirty and one scoped fix is in progress by day sixty."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Gather every existing retention dashboard and past analysis"
                - "Book ten conversations with leavers, support staff and sales"
                - "Write and share a one-page diagnosis by day thirty"
                - "Choose and scope one fix for the second month"
            - name: Retention for low-frequency and seasonal products
              description: |-
                ## Purpose
                Tax tools, event platforms and booking products may be used once a year or in a short season, so weekly retention charts mislead and churn is invisible until the next season. Measuring return by cycle, keeping users warm between seasons with genuine value, and preparing for the season start are the main levers. The stakes are high because a missed season costs a whole year.

                ## Milestones
                1. Retention measured as the share of users returning in the next cycle.
                2. The weeks before the season when users decide to return or switch identified.
                3. One genuinely useful touch between seasons designed, such as a reminder of saved data.
                4. A pre-season checklist covering reminders, account access and data carried over.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Cycle-to-cycle retention is measured and a pre-season checklist is in use for the next season."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Measure the share of last cycle's users who returned this cycle"
                - "Find when returning users first came back before the season"
                - "Design one useful off-season touch tied to saved data"
                - "Run the pre-season return checklist six weeks before the season @recurring(yearly)"
            - name: B2B retention when the buyer is not the user
              description: |-
                ## Purpose
                In business products the person who signs the renewal is often not the person using the product daily, and an account can look healthy on paper while the people doing the work quietly route around it. Tracking end-user activity and champion changes separately from admin activity, and giving buyers evidence of team use, closes that gap. The biggest single risk is often a champion who changes job.

                ## Milestones
                1. Buyer, admin and end-user roles identified for each paying account.
                2. End-user activity tracked separately from admin and buyer activity.
                3. A champion change alert set up for when the main user leaves or goes inactive.
                4. A usage summary designed for buyers ahead of renewal.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "End-user activity is reported separately from admin activity and a champion change alert is live for paying accounts."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Tag buyer, admin and end-user roles on paying accounts"
                - "Split account activity reports by role"
                - "Set an alert for when an account's main user goes inactive"
                - "Review champion change alerts and contact affected accounts @recurring(monthly:28)"
            - name: Usage depth histogram and power user curve
              description: |-
                ## Purpose
                Averages flatten the difference between a product used one day a month by most users and one used twenty days a month by a loyal core. A histogram of how many days in the last twenty-eight each user did the core action shows the shape of engagement, and whether a power user group is forming or shrinking. Experienced retention leads use it to see changes that cohort tables take months to show.

                ## Milestones
                1. A histogram of active days in the last twenty-eight days for all retained users.
                2. The share of users in the high-frequency group recorded as a baseline.
                3. The histogram compared across plans or segments.
                4. A quarterly refresh showing whether the curve is shifting right or left.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A twenty-eight-day usage depth histogram has a recorded baseline and has been refreshed at least twice, quarterly."
                cadence: rolling
              tasks:
                - "Count each retained user's active days in the last twenty-eight"
                - "Plot the histogram and record the high-frequency share"
                - "Compare the histogram across plans or segments"
                - "Refresh the histogram and note which way it has shifted @recurring(quarterly)"
            - name: Predictive churn score, tested honestly
              description: |-
                ## Purpose
                A churn score built from usage, support and billing signals can rank accounts by risk better than a simple decline rule, but only if it is tested on data it has not seen and compared with that simpler rule. Many scores look impressive in training and add little in practice. Building one carefully, and dropping it if it does not beat the baseline, is the mark of mature retention work.

                ## Milestones
                1. Candidate signals chosen from usage, support contacts, billing and account changes.
                2. A model trained on one period and tested on a later, held-out period.
                3. Its ranking quality compared against the existing usage decline rule.
                4. A recorded decision to adopt, improve or drop the score, with its review schedule.

                ## Notes
                Accounts the team contacts because of the score will churn less, which makes later evaluation harder. Keep a small untouched group if you can.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A churn score is tested on a held-out later period against the simple decline rule, and an adopt, improve or drop decision is recorded."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "List candidate churn signals from usage, support and billing data"
                - "Train a model on one period and test it on a later one"
                - "Compare its ranking with the existing usage decline rule"
                - "Back-test the adopted score against recent cancellations @recurring(quarterly)"
            - name: Survival analysis of time to churn
              description: |-
                ## Purpose
                Simple churn rates treat a customer who left in month two and one who left in month twenty the same way, and they handle still-active customers badly. Survival analysis estimates how long customers stay and how that differs by plan, segment or early behaviour, while properly accounting for customers who have not churned yet. It gives sharper answers to questions about when the risk peaks.

                ## Milestones
                1. A dataset with each account's start date, end date or still-active flag.
                2. Survival curves estimated for the whole base and for two or three groups.
                3. The months where the risk of leaving peaks identified for each group.
                4. Findings written up with one recommendation for when to intervene.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Survival curves for at least three groups are estimated and a written note names the peak risk months and one intervention timing."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Build a dataset of account start, end and still-active status"
                - "Estimate survival curves for the whole customer base"
                - "Compare curves for two or three plans or segments"
                - "Write up the peak risk months and when to intervene"
            - name: Cohort-based lifetime value model
              description: |-
                ## Purpose
                Lifetime value from a single churn rate assumes every cohort behaves the same forever, which is rarely true once retention improves or the customer mix changes. A model built from actual cohort revenue curves, projected forward with stated assumptions, gives a more honest number for setting acquisition budgets and judging whether retention work is paying off. It should always show a range, not one figure.

                ## Milestones
                1. Revenue per starting account tracked by month for each cohort.
                2. Cohort curves projected forward with written assumptions on decay.
                3. A lifetime value range shown for low, central and high assumptions.
                4. The model reviewed with whoever owns finance before it is used for budgets.

                ## Notes
                Agree with finance which revenue and margin figures to use. A model that disagrees with the finance team's numbers will not be trusted.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A cohort-based lifetime value model with low, central and high cases is reviewed with finance and stored with its assumptions."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Build monthly revenue per starting account for each cohort"
                - "Write the decay assumptions used to project each curve"
                - "Show lifetime value under low, central and high assumptions"
                - "Review the model and its inputs with whoever owns finance"
---

# Product-Led Retention

Product-led retention is the work of finding out why some users keep coming back and others drift away, then changing the product so more of them stay. It is written for product teams and for founders who own retention themselves, and it runs from foundations (a written definition of a retained user, the product's natural usage interval, a first cohort table and the behaviours that predict staying) through the weekly and monthly machinery for churn, dormancy and failed payments, the analysis and interviewing skills, decisions about cancellation, pausing and returning users, dated events such as renewal season and a retention sprint, situations from pre-product-market fit to low-frequency products, and the specialist modelling an experienced retention lead does.

What repeats is a weekly signal check and at-risk watchlist, a monthly cohort review with exit interviews and tagged cancellation reasons, payment recovery and win-back reviews, a quarterly leadership review and the yearly renewal season. The Metrics log, Meeting notes, Feedback themes, Product spec, Remediation plan and Risk register templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
