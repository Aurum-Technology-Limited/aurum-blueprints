---
id: quant-finance.live-strategy-monitoring
name: Live Strategy Monitoring
description: "An inventory of what is live, expected behaviour written down, live versus backtest tracking, tiered alerts, daily reports, reconciliations and written pause rules, for the engineers and researchers who watch strategies in production."
category: business
version: 1.0.0
tags: [quant-finance, live-strategy-monitoring, engineer, researcher, production-monitoring, alerting, live-vs-backtest, pause-rules]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - metrics-log
    - remediation-plan
    - purchase-decision
    - onboarding-30-60-90
    - compliance-control
  pillars:
    - name: Quantitative Finance & Trading
      emoji: "🧮"
      description: "Systematic research and trading run like engineering: alpha research and honest backtests, factor and risk models, execution and microstructure, statistics and machine learning, quant development and market data, prop-firm evaluations and personal algorithmic trading under strict risk rules, and quant careers. Organisation and method only, never trading advice."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Live Strategy Monitoring
          description: "Watching strategies in production: live versus backtest tracking, alerts, position and risk checks, daily reports and rules for pausing a strategy."
          projects:
            - name: Inventory of live strategies and their owners
              description: |-
                ## Purpose
                Monitoring starts with a list nobody argues about: every strategy trading real money, the account it trades in, the version of code running, and the person who owns it. Teams that skip this discover a forgotten strategy only when it does something odd at 3am. A one-page inventory also makes every later project in this area quicker, because each check can be written against a named entry.

                ## Milestones
                1. Every strategy trading real capital listed with account, venue, asset class and code version.
                2. A named owner and a named backup recorded for each entry.
                3. Strategies that are paused, paper trading or retired marked as such, not left ambiguous.
                4. The inventory stored where the whole team can read it, with a last-updated date.

                ## Notes
                Include anything that can send an order, even a small hedging script. The dangerous strategy is usually the one nobody thinks of as a strategy.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated inventory lists every live strategy with account, code version, owner and backup, and a second person has confirmed nothing is missing."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every process or script that can send an order to a broker or exchange"
                - "Match each one to an account, a venue and a deployed code version"
                - "Name an owner and a backup for every live strategy"
                - "Ask a colleague to check the list against the broker's account activity"
            - name: Expected behaviour sheet for each live strategy
              description: |-
                ## Purpose
                An alert can only fire on something unusual if someone has written down what usual looks like. For each live strategy, a one-page sheet of expected trades per day, typical holding period, gross and net exposure ranges, turnover and drawdown from the research turns vague unease into numbers you can test against. Writing it before problems appear stops the ranges being stretched to fit whatever happens.

                ## Milestones
                1. A sheet per strategy with expected trade count, holding period, exposure range and turnover.
                2. The research source for each number recorded, with the backtest run identifier.
                3. Ranges set wide enough to allow normal variation and narrow enough to catch a broken strategy.
                4. Each sheet signed off by the strategy owner and dated.

                ## Notes
                Use percentiles from the backtest, such as the 5th and 95th, rather than averages. An average tells you nothing about whether today is strange.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every strategy in the inventory has a signed, dated expected behaviour sheet with percentile ranges tied to a named backtest run."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick the six metrics that best describe how the first strategy normally behaves"
                - "Pull the 5th and 95th percentile of each metric from the backtest"
                - "Write the ranges on one page with the backtest run identifier"
                - "Ask the strategy owner to sign off the sheet before it drives any alert"
            - name: Frozen backtest reference run for live comparison
              description: |-
                ## Purpose
                Live results drift away from a backtest that keeps being rerun with new data, new costs or a tweaked parameter, until nobody knows which version the live strategy was approved on. Freezing one reference run per live version, with its data snapshot, cost model and parameters, gives the comparison a fixed point. When live and backtest disagree you then know the backtest did not move.

                ## Milestones
                1. One reference backtest per live strategy version, stored with code commit and data snapshot.
                2. The cost and fill assumptions used in that run written beside it.
                3. A daily simulated position series from the reference run, aligned to live trading days.
                4. A rule that the reference only changes when the live version changes, with the change logged.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each live strategy version has a frozen reference run with commit, data snapshot and cost assumptions, and its daily positions can be compared with live positions."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Find the exact backtest run each live strategy was approved on"
                - "Store its code commit, data snapshot and cost settings together"
                - "Generate daily simulated positions and returns over the live period"
                - "Write down who may change the reference and when"
            - name: Live versus backtest tracking dashboard
              description: |-
                ## Purpose
                Most of what goes wrong with a live strategy shows up first as a gap between what it did and what the reference backtest would have done on the same days. A dashboard that plots cumulative live and simulated returns, position differences and the running gap, per strategy, makes that gap visible every morning rather than at month end. Engineers build it once; researchers read it daily.

                ## Milestones
                1. Cumulative live and reference returns plotted on one chart per strategy.
                2. Daily position differences between live and reference shown by instrument.
                3. The tracking gap shown with a band drawn from the expected behaviour sheet.
                4. The dashboard refreshed automatically after each trading day's data lands.

                ## Notes
                Show gross and net returns separately. A gap that exists only after costs points at execution, while a gap before costs points at the signal or the data.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dashboard updates every trading day showing live versus reference returns, position differences and the tracking gap against its band for every live strategy."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Sketch the three charts each strategy page needs on paper"
                - "Join live fills and positions to the reference run by date and instrument"
                - "Draw the tracking gap with its expected band"
                - "Schedule the refresh after the end-of-day data load"
            - name: Alert severity levels and routing rules
              description: |-
                ## Purpose
                When every alert arrives in the same channel with the same urgency, the important one at 2pm looks exactly like the noisy one at 2.05pm. Three or four severity levels, each with a named responder, a channel and an expected response time, let people act on the few that matter and batch the rest. Agreeing them before alerts are wired up saves arguments during an incident.

                ## Milestones
                1. Severity levels defined, for example informational, review today, act now and stop trading.
                2. A channel, a responder and a response time written for each level.
                3. Every existing alert assigned to one level.
                4. An escalation path for when the first responder does not acknowledge in time.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written alert policy defines each severity level with channel, responder and response time, and every live alert is mapped to one level."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every alert currently configured and where it is sent"
                - "Draft four severity levels with response times"
                - "Assign each existing alert to a level and a channel"
                - "Agree the escalation path with everyone on the responder list"
            - name: Position reconciliation against the broker
              description: |-
                ## Purpose
                If a strategy believes it holds 500 shares when the broker shows 300, it will size every later order wrongly, and the error compounds quietly. Reconciling internal positions and cash against the broker or clearing statement, instrument by instrument, is the single check that catches missed fills, duplicate orders and corporate action surprises. Build it once, then let the end-of-day routine run it.

                ## Milestones
                1. Internal positions and broker positions pulled into one table by instrument and account.
                2. Tolerances agreed for quantity and cash differences.
                3. Corporate actions such as splits and symbol changes handled before comparison.
                4. Any break above tolerance raising an alert at the review-today level or higher.

                ## Notes
                Reconcile against the broker's record, not against your own order log. Both of your copies can share the same bug.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An automated reconciliation compares internal and broker positions and cash every trading day and alerts on any break above an agreed tolerance."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Download the broker's position and cash file for one account"
                - "Match it to internal positions by instrument identifier"
                - "Set quantity and cash tolerances and write them in the reconciliation script"
                - "Check the corporate actions calendar for open positions @recurring(monthly:15)"
            - name: Pre-open health checklist
              description: |-
                ## Purpose
                Many live failures are visible before the first order: a data feed that did not update overnight, a strategy that restarted with stale state, a limit file that did not load. A short checklist run before the open, the same way every day, catches these while there is still time to hold a strategy back. Ten minutes in the morning is cheaper than an hour of unwinding.

                ## Milestones
                1. A checklist of no more than twelve items covering data, state, limits, connectivity and calendar.
                2. Each item with a pass condition someone else could check.
                3. A record of each day's run kept, with any failure and what was done.
                4. Items that never fail and never matter removed after a quarter.

                ## Notes
                Start from the **Operational checklist** template.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The pre-open checklist is run and recorded on at least 95 percent of trading days in a quarter, with failures and actions logged."
                cadence: rolling
              tasks:
                - "Write the first ten pre-open checks with a pass condition for each"
                - "Run the pre-open checklist and record the result @recurring(daily)"
                - "Note which items failed this month and why"
                - "Prune checks that never fail and never matter"
            - name: Written pause and resume rules
              description: |-
                ## Purpose
                Deciding whether to stop a strategy in the middle of a bad afternoon is the worst time to decide it. Pause rules written in advance, with the triggers (a drawdown beyond the expected band, a reconciliation break, a data failure, a tracking gap), who may pause, how positions are handled and what evidence is needed to resume, turn a stressful judgement into a procedure. They are also the stop rule every live strategy needs before it trades.

                ## Milestones
                1. Pause triggers listed per strategy with numeric thresholds.
                2. Who may pause, and whether pausing flattens positions or only stops new orders, written for each.
                3. Resume conditions written, including who signs off and what must be checked first.
                4. The rules agreed by owners and the risk lead and stored beside the inventory.

                ## Notes
                Pausing should never need permission from the person whose strategy it is. Resuming should.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every live strategy has written pause triggers, a position handling rule and resume conditions, signed by its owner and the risk lead."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Draft pause triggers for one strategy using its expected behaviour sheet"
                - "Decide whether a pause flattens positions or only blocks new orders"
                - "Write the resume conditions and the sign-off needed"
                - "Walk the owner and risk lead through the rules and record their agreement"
            - name: Single source of truth for fills and positions
              description: |-
                ## Purpose
                Monitoring that reads fills from the strategy log, positions from a database and P&L from a spreadsheet will one day show three different answers to the same question. Choosing one store for fills, positions and marks, with timestamps in one time zone and one clock, means every check and report starts from the same facts. The researchers stop debugging the plumbing and start reading the results.

                ## Milestones
                1. One store chosen for fills, positions, prices used for marking and strategy state.
                2. All timestamps held in UTC with the source clock recorded.
                3. Every monitoring check and report reading from that store only.
                4. A short data dictionary describing each table and who writes to it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All monitoring checks and reports read fills, positions and marks from one documented store with UTC timestamps."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Map where each monitoring check currently reads its fills and positions"
                - "Choose the store that will hold the authoritative copy"
                - "Convert all timestamps to UTC and record each source clock"
                - "Write a one-page data dictionary for the store"
            - name: End-of-day strategy report
              description: |-
                ## Purpose
                Small problems get noticed before they become large ones through a short daily report per strategy, the same shape every day. Net P&L against the expected range, tracking gap, positions and exposure, limit use, reconciliation status and any alerts fired fit on a single screen. Read daily, it builds the sense of normal that makes an abnormal day obvious.

                ## Milestones
                1. A report template with the same sections for every strategy.
                2. The report generated automatically after the close and sent to owners.
                3. Any value outside its expected range highlighted rather than buried in a table.
                4. Owners adding a one-line comment on any highlighted value the next morning.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A daily report reaches every strategy owner after the close, and every highlighted value carries an owner comment within one trading day."
                cadence: rolling
              tasks:
                - "List the seven numbers each strategy's daily report must show"
                - "Read the end-of-day report and comment on anything highlighted @recurring(daily)"
                - "Highlight values outside the expected behaviour ranges automatically"
                - "Ask the agent to summarise a month of report comments into recurring themes"
            - name: Monitoring cover rota and handover notes
              description: |-
                ## Purpose
                Someone must be watching whenever a strategy can trade, including early opens, late closes and the overlap between time zones. A rota that names the person on cover for each session, with a short handover note at each change, means nobody assumes someone else saw the alert. For a team of two or three this is a calendar and a template, not a system.

                ## Milestones
                1. Every trading session in the week covered by a named person.
                2. A handover note format covering open issues, paused strategies and unusual positions.
                3. Handover notes kept in one shared place.
                4. Cover for holidays and sickness arranged before it is needed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every trading session for a quarter has a named person on cover and a written handover note at each change of cover."
                cadence: rolling
              tasks:
                - "Write out every session in the trading week with its local start and end time"
                - "Publish next week's cover rota with names against each session @recurring(weekly:fri)"
                - "Create a five-line handover note format"
                - "Agree holiday cover for the next three months"
            - name: End-of-day reconciliation and P&L sign-off
              description: |-
                ## Purpose
                The reconciliation built earlier only protects you if someone looks at its output and signs it off. A short end-of-day routine that confirms positions match the broker, P&L matches the broker's statement within tolerance and any breaks have an owner closes the books for the day. Unexplained breaks carried overnight are where real losses hide.

                ## Milestones
                1. A daily sign-off record with reconciliation status per account.
                2. Strategy P&L compared with the broker's daily statement within an agreed tolerance.
                3. Every break given an owner and a target time to resolve.
                4. No break left unexplained for more than two trading days.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each trading day has a recorded reconciliation sign-off, and no break stays unexplained for more than two trading days in a quarter."
                cadence: rolling
              tasks:
                - "Create a one-line daily sign-off record per account"
                - "Sign off positions and P&L against the broker statement @recurring(weekly:mon,tue,wed,thu,fri)"
                - "Give every break an owner and a target fix time"
                - "List breaks older than two days at the weekly review"
            - name: Weekly live versus backtest drift review
              description: |-
                ## Purpose
                Daily noise hides slow drift: a strategy that underperforms its reference by a small amount every day looks fine on any single day and wrong over a month. A weekly half hour per strategy, looking at the cumulative tracking gap, its causes and whether it is still inside the band, is where most real decay is first spotted. Write down what you saw so the next review can compare.

                ## Milestones
                1. A standing weekly review slot with the strategy owners.
                2. The cumulative gap per strategy recorded each week with a one-line explanation.
                3. Gaps attributed to costs, timing, data or signal where the evidence allows.
                4. Any strategy outside its band for two weeks running flagged under the pause rules.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly review log records the cumulative tracking gap and its explanation for every live strategy for at least twelve consecutive weeks."
                cadence: rolling
              tasks:
                - "Book a recurring weekly review slot with strategy owners"
                - "Record each strategy's cumulative tracking gap and its likely cause @recurring(weekly:mon)"
                - "Flag any strategy outside its band two weeks running"
                - "Keep last week's notes open when writing this week's"
            - name: Monthly monitoring scorecard per strategy
              description: |-
                ## Purpose
                Once a month, a scorecard puts a strategy's live Sharpe ratio, drawdown, turnover, hit rate and tracking gap beside the ranges from its expected behaviour sheet, in a format that never changes. Over a year it becomes the record that later decisions rest on, including whether a strategy should be scaled, fixed or handed to the retirement process. It also shows investors or a risk committee that monitoring is real.

                ## Milestones
                1. A fixed scorecard layout with the same metrics for every strategy.
                2. Each month's live metrics set beside the expected ranges.
                3. A short owner comment on anything outside range.
                4. Twelve months of scorecards kept together and comparable.

                ## Notes
                Start from the **Metrics log** template. Live Sharpe ratios over a few months have wide error bars, so read them as evidence, not verdicts.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A scorecard is produced for every live strategy each month, using the same metrics, with owner comments on every out-of-range value."
                cadence: rolling
              tasks:
                - "Choose the eight metrics every scorecard will show"
                - "Produce the monthly scorecards and send them to owners @recurring(monthly:3)"
                - "Mark each metric as inside or outside its expected range"
                - "File the scorecards in one folder by month"
            - name: Alert noise review
              description: |-
                ## Purpose
                An alert that fires every day and is always ignored teaches people to ignore alerts. Once a month, counting how often each alert fired, how often it led to an action and how long acknowledgement took shows which alerts earn their place. Tightening, merging or removing the noisy ones keeps the important ones visible.

                ## Milestones
                1. A monthly count of fires, actions taken and time to acknowledge for each alert.
                2. Alerts with no action in three months either retuned or removed.
                3. Missed incidents that no alert caught added as candidates for new alerts.
                4. Every change to an alert recorded with its reason.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly alert review records fire counts and actions for every alert, and alerts with no actions in three months have been retuned or removed."
                cadence: rolling
              tasks:
                - "Export last month's alert history from the alerting tool"
                - "Count fires, actions and acknowledgement times per alert @recurring(monthly:12)"
                - "Retune or remove one alert that produced no action"
                - "Log each alert change with its reason"
            - name: Risk limit utilisation tracking
              description: |-
                ## Purpose
                Limits that are never close to binding do little, and one that sits at 95 percent every day will be breached soon. Tracking how much of each limit (gross and net exposure, position size, sector or factor concentration, daily loss) each strategy uses, and how that changes week to week, shows pressure building before a breach. The limits themselves come from your risk rules; this project watches them.

                ## Milestones
                1. Daily utilisation of each risk limit recorded per strategy as a percentage.
                2. A weekly chart showing peak and average utilisation.
                3. Any limit above 80 percent on three days in a week raised with the owner.
                4. Breaches logged with cause and response.

                ## Notes
                Never raise a limit in the same week it was breached. Review the breach first, then decide in calm conditions.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly limit utilisation is recorded for every live strategy, and every week with a limit above 80 percent on three or more days has an owner note."
                cadence: rolling
              tasks:
                - "List every risk limit that applies to each live strategy"
                - "Calculate daily utilisation as a percentage of each limit"
                - "Review peak limit utilisation with owners @recurring(weekly:wed)"
                - "Record every breach with cause and response"
            - name: Signal and input data drift checks
              description: |-
                ## Purpose
                Even a strategy that trades perfectly can be wrong if the data feeding it has quietly changed: a vendor revises a field, a universe filter starts excluding names, a feature's distribution shifts. Comparing the live distribution of key inputs and signals with the research period, weekly, catches this before the P&L does. It is the monitoring equivalent of checking the ingredients, not just tasting the dish.

                ## Milestones
                1. The five to ten inputs and signals that matter most named for each strategy.
                2. A reference distribution for each from the research period stored.
                3. A weekly comparison using a simple measure such as a population stability index or quantile shift.
                4. Large shifts investigated and their cause recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly drift statistics are recorded for the key inputs and signals of every live strategy, and every shift above threshold has a recorded cause."
                cadence: rolling
              tasks:
                - "Name the inputs and signals each strategy depends on most"
                - "Store their reference distributions from the research period"
                - "Compare live input distributions with the reference @recurring(weekly:thu)"
                - "Write up the cause of any shift above threshold"
            - name: Market data feed health monitoring
              description: |-
                ## Purpose
                Stale prices, missing bars, crossed quotes and a feed that silently falls a few seconds behind can all make a strategy trade on a picture of the market that is no longer true. Checks on freshness, gaps, outliers and latency for every feed a live strategy reads, with alerts wired to the severity levels, catch the feed problem rather than the losses it causes later.

                ## Milestones
                1. Freshness, gap, outlier and latency checks running on every live feed.
                2. Thresholds set per feed and per session, including auctions and quiet periods.
                3. Feed alerts routed through the agreed severity levels.
                4. A monthly summary of feed incidents by vendor and type.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every feed read by a live strategy has freshness, gap and latency checks with alerts, and a monthly feed incident summary exists."
                cadence: rolling
              tasks:
                - "List every data feed each live strategy reads in real time"
                - "Add a freshness check that alerts when a feed stops updating"
                - "Set separate thresholds for auctions and quiet sessions"
                - "Summarise feed incidents by vendor and cause @recurring(monthly:8)"
            - name: Incident log and post-incident reviews
              description: |-
                ## Purpose
                Every pause, break, missed alert or surprising loss is information, but only if it is written down while memory is fresh. A simple incident log with what happened, when it was noticed, what was done and what will change, followed by a blameless review for the serious ones, turns each bad day into a fix. Reviewing the log monthly shows patterns no single incident reveals.

                ## Milestones
                1. An incident log with date, strategy, severity, detection time, impact and actions.
                2. A written review within five trading days for every act-now or stop-trading incident.
                3. Each review producing at least one owned follow-up action with a date.
                4. A monthly look across incidents for repeating causes.

                ## Notes
                Start from the **Remediation plan** template for the follow-up actions. Record when the problem started as well as when it was noticed; the gap between them is your monitoring's real performance.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every serious incident has a written review within five trading days and owned follow-ups, and the log is reviewed monthly for repeating causes."
                cadence: rolling
              tasks:
                - "Set up an incident log with the six fields every entry needs"
                - "Log the most recent live incident you can remember"
                - "Review the incident log for repeating causes @recurring(monthly:20)"
                - "Chase overdue follow-up actions from past reviews"
            - name: Quarterly review of monitoring rules and thresholds
              description: |-
                ## Purpose
                Thresholds set at launch go stale as strategies grow, markets change and new strategies arrive. A quarterly session that rereads the expected behaviour sheets, pause rules, alert thresholds and checklist against what actually happened keeps the monitoring matched to the strategies it watches. It also catches rules nobody remembers agreeing to.

                ## Milestones
                1. Each strategy's expected ranges compared with the last quarter's live values.
                2. Pause triggers and alert thresholds confirmed or changed, with reasons.
                3. Strategies added or removed since last quarter reflected in every rule set.
                4. A dated record of what changed and who agreed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated quarterly review record exists covering ranges, pause triggers and alert thresholds for every live strategy, with any changes and approvals noted."
                cadence: cyclic
              tasks:
                - "Hold the quarterly monitoring rules review with owners and risk @recurring(quarterly)"
                - "Compare last quarter's live values with each expected range"
                - "Record every threshold change with its reason"
                - "Update the inventory for strategies added or removed"
            - name: Attributing the gap between live and backtest returns
              description: |-
                ## Purpose
                Knowing that live returns trail the reference is half the answer; knowing why is what lets you fix it. Learning to split the gap into execution costs, timing differences between simulated and real fills, data differences and genuine signal decay, with the same method every time, turns a worrying number into an action. Researchers who can do this quickly earn trust from the people allocating capital.

                ## Milestones
                1. A written attribution method splitting the gap into cost, timing, data and residual.
                2. The method applied to one strategy over at least three months of live data.
                3. Results checked by rerunning the reference with live fills substituted.
                4. A one-page explanation of the method that a colleague can follow.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One live strategy's tracking gap over three months is attributed to cost, timing, data and residual using a written method a colleague has reproduced."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Pick one strategy with at least three months of live history"
                - "Rerun its reference with live fill prices substituted for simulated ones"
                - "Separate the gap into cost, timing, data and residual parts"
                - "Write the method on one page and ask a colleague to reproduce it"
            - name: Statistical tests for live versus expected performance
              description: |-
                ## Purpose
                Three bad months can be bad luck or a broken strategy, and eyeballing a chart will not tell you which. Learning a few tools for this question, such as confidence intervals on the live Sharpe ratio, a comparison of the live drawdown with the backtest's drawdown distribution, and sequential tests such as CUSUM that are built for watching data arrive, gives you a defensible answer. It also shows how long you must wait before the data can say anything at all.

                ## Milestones
                1. A worked example computing a confidence interval for a live Sharpe ratio over six months.
                2. The live drawdown placed within a bootstrapped distribution of backtest drawdowns.
                3. A CUSUM or similar sequential test run on daily live returns against expectation.
                4. A note on how many months of live data each test needs to separate a realistic decay from noise.

                ## Notes
                The usual surprise is how long it takes: for a strategy with a modest Sharpe ratio, a year of live data often cannot distinguish working from not working. Plan pause rules around that.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three tests are implemented and applied to one live strategy, with a written note on the minimum data each needs to detect a stated decay."
                cadence: phased
                effort_hours_estimate: "18"
              tasks:
                - "Compute a confidence interval for one strategy's live Sharpe ratio"
                - "Bootstrap the backtest drawdown distribution and place the live drawdown in it"
                - "Implement a CUSUM test on daily live returns against expected returns"
                - "Write down how many months each test needs to detect a halving of returns"
            - name: Reading order and fill logs under pressure
              description: |-
                ## Purpose
                When a strategy misbehaves, the answer is usually in the order and fill logs, and the person who can read them quickly ends the incident sooner. Practising on calm days, tracing one order from signal through submission, acknowledgement, partial fills and cancellation, and knowing which fields and message types matter, builds that speed. Engineers and researchers should both be able to do it.

                ## Milestones
                1. One complete order traced end to end through every log it touches.
                2. A cheat sheet of the log fields, order states and rejection codes that matter.
                3. Saved queries or scripts that pull one order's full history in under a minute.
                4. A practice session where a colleague answers three questions from the logs alone.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A cheat sheet and saved queries exist, and a colleague can pull one order's full history from the logs in under a minute using them."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick yesterday's largest order and trace it through every log"
                - "Write a cheat sheet of order states and rejection codes"
                - "Save a query that returns one order's full history"
                - "Quiz a colleague with three questions answered from the logs"
            - name: Control charts for strategy health metrics
              description: |-
                ## Purpose
                Statistical process control was built for exactly this problem: telling ordinary variation from a real change in a process you watch every day. Applying control charts to daily turnover, trade count, slippage and tracking gap gives simple, explainable rules for when to look harder, such as a point outside three standard deviations or seven days in a row on one side of the mean. They are easier to defend than a threshold someone picked by feel.

                ## Milestones
                1. Control limits computed for four daily strategy metrics from a stable period.
                2. Two or three run rules chosen and written down.
                3. Charts drawn for the last six months with rule violations marked.
                4. A decision on which charts feed alerts and which stay as review aids.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Control charts with written run rules exist for four metrics on one strategy, and a decision on which ones drive alerts is recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Choose four daily metrics and a stable reference period"
                - "Compute centre lines and control limits for each"
                - "Pick two run rules and mark violations on six months of data"
                - "Decide which charts should drive alerts"
            - name: Designing monitoring metrics that catch real failures
              description: |-
                ## Purpose
                Monitoring dashboards fill up with metrics that are easy to compute rather than ones that would have caught the last real failure. Working backwards from known failure modes (a stuck position, a stale signal, runaway order rates, a broken universe filter, silent cost increases) to the metric that would show each one first gives a short list worth watching. Fewer, better metrics also make the daily report readable.

                ## Milestones
                1. A list of at least ten realistic failure modes for your strategies.
                2. For each failure, the earliest metric that would reveal it.
                3. Gaps identified where no current metric would catch a listed failure.
                4. Metrics that map to no failure mode marked for removal.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A failure mode table maps at least ten failures to the metric that detects each, with gaps and redundant metrics identified."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write down ten ways a live strategy here could fail"
                - "Name the first metric that would show each failure"
                - "Mark failures no current metric would catch"
                - "List current metrics that map to no failure"
            - name: Observability basics for trading systems
              description: |-
                ## Purpose
                Metrics, structured logs and traces are the three views engineers use to see inside running software, and trading systems need all three: metrics for order rates and latency, logs for what each component decided, traces for one order's path through several services. A researcher who understands them asks better questions, and an engineer who applies them well makes every incident shorter.

                ## Milestones
                1. Each live component emitting a small set of named metrics, such as orders sent, rejects and loop latency.
                2. Logs written in a structured format with strategy, order and correlation identifiers.
                3. One order traceable across components by a shared identifier.
                4. A short guide for researchers on where to look for each kind of question.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Live components emit named metrics and structured logs with a shared order identifier, and a written guide shows researchers where to look."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List the five metrics every live component should emit"
                - "Add a correlation identifier that follows an order across services"
                - "Convert one component's logs to a structured format"
                - "Write a one-page guide for researchers on reading the metrics and logs"
            - name: Runbook for every act-now alert
              description: |-
                ## Purpose
                An alert at the act-now level should come with instructions, because the person on cover may not be the person who wrote the strategy. A short runbook per alert, saying what it means, what to check first, how to pause safely and who to call, lets anyone respond correctly at 6am. Writing them also exposes alerts nobody can explain.

                ## Milestones
                1. A runbook for every act-now and stop-trading alert.
                2. Each runbook covering meaning, first checks, safe actions and contacts.
                3. Every runbook linked directly from its alert message.
                4. Runbooks tested by someone other than the author.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every act-now and stop-trading alert links to a runbook that a person other than its author has tested."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List every alert at act-now level or above"
                - "Write the runbook for the alert most likely to fire first"
                - "Link each runbook from its alert message"
                - "Ask someone new to the strategy to follow one runbook and note confusions"
                - "Reread runbooks against recent incidents @recurring(quarterly)"
            - name: Choosing a monitoring and alerting stack
              description: |-
                ## Purpose
                Spreadsheets and email alerts work for one strategy and break at five. Comparing a few options (an open-source metrics and dashboard stack, a hosted observability service, or a trading platform's built-in risk screens) against the same criteria of cost, latency, alert routing, data retention and who will maintain it leads to a choice that will last. Decide on evidence from a short trial, not from a demo.

                ## Milestones
                1. Requirements written: metrics volume, alert routing, retention, access control and budget.
                2. Two or three options shortlisted and scored against the same criteria.
                3. A two-week trial of the leading option on one live strategy.
                4. A decision recorded with cost, owner and migration plan.

                ## Notes
                Start from the **Purchase decision** template. Count the maintenance hours, not just the licence fee; a free stack nobody looks after is not free.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on the monitoring stack, with scored options, trial results, yearly cost and a named owner."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Write the requirements the monitoring stack must meet"
                - "Shortlist three options and score them on the same criteria"
                - "Trial the leading option on one strategy for two weeks"
                - "Record the decision with cost, owner and migration plan"
            - name: Shadow run for a new strategy version
              description: |-
                ## Purpose
                Replacing a live strategy version is one of the riskiest moments in its life, because the new code has never met real data in real time. Running the new version in shadow, computing signals and intended orders without sending them, beside the live version for a fixed period shows exactly where they differ. Only differences you expected should remain when you switch.

                ## Milestones
                1. The new version running in shadow on live data without order access.
                2. Daily comparison of signals and intended orders between shadow and live.
                3. Every unexpected difference explained or fixed.
                4. A written switch decision with the period, the differences seen and sign-off.

                ## Notes
                Block order access in configuration and at the broker permission level, not only in code. Shadow runs that accidentally trade are a known failure.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A shadow run of a fixed length completes with every unexpected difference from live explained, and a signed switch decision is recorded."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Deploy the new version with order access blocked in configuration"
                - "Compare shadow and live signals and intended orders each day"
                - "Explain or fix every unexpected difference"
                - "Write and sign the switch decision"
            - name: Moving manual checks into automated monitoring code
              description: |-
                ## Purpose
                Checks that live in someone's morning routine stop happening when that person is ill or busy. Moving the manual checks that matter into code, with tests and alerts, frees people for judgement and makes coverage independent of who is on shift. Start with the check that has caught the most problems.

                ## Milestones
                1. Every manual check listed with how often it found a real problem.
                2. The three most valuable checks automated with tests.
                3. Automated checks running on a schedule and raising alerts through the agreed levels.
                4. The manual checklist shortened to what still needs a person.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The three highest-value manual checks run automatically with tests and alerts, and the manual checklist is updated to remove them."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "List every manual check and how often it caught something real"
                - "Automate the most valuable check with a test"
                - "Wire the automated check into the alert levels"
                - "Remove automated checks from the manual checklist"
            - name: Cutting alert fatigue by grouping and suppression
              description: |-
                ## Purpose
                One data outage can trigger forty alerts across every strategy that reads the feed, and the responder spends the incident clearing notifications. Grouping related alerts, suppressing downstream alerts when an upstream cause is known, and adding quiet windows for planned maintenance keep the signal readable when it matters most. The goal is one clear message per real problem.

                ## Milestones
                1. Alerts mapped to the upstream causes that commonly trigger them together.
                2. Grouping rules that send one message per root cause.
                3. Suppression windows for planned maintenance and known data delays.
                4. Alert volume per incident measured before and after.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Grouping and suppression rules are live, and the number of alert messages per incident has fallen by at least half against the previous quarter."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Find the last incident that produced a flood of alerts"
                - "Map which alerts share the same upstream cause"
                - "Add grouping rules for the three most common causes"
                - "Measure alert messages per incident for the next month"
            - name: Independent risk view outside the strategy process
              description: |-
                ## Purpose
                If the monitoring reads positions from the same process that computes them, a bug in that process blinds both. An independent view built from broker drop copies or clearing data, run as a separate process with its own code, gives a second opinion on positions and exposure that cannot share the strategy's mistakes. Many firms treat this as a basic control; small setups can do a lighter version.

                ## Milestones
                1. A separate process that builds positions from broker drop copies or clearing data.
                2. Its code and deployment kept apart from the strategy code.
                3. Independent and strategy positions compared intraday.
                4. Any disagreement raising an act-now alert.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A separately deployed process builds positions from broker data and alerts on any intraday disagreement with the strategy's own positions."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Ask the broker what drop copy or position feed is available"
                - "Build a minimal process that turns that feed into positions"
                - "Deploy it separately from the strategy code"
                - "Alert when independent and strategy positions disagree"
            - name: Heartbeats and silent failure alerts
              description: |-
                ## Purpose
                The most dangerous failure sends no alert at all: a strategy that hangs, a monitor that crashes, a report job that stops running. Heartbeats, where each component reports that it is alive on a schedule and silence triggers an alert from somewhere else, catch the failures that ordinary checks cannot. Test them deliberately, because an untested heartbeat is just another component that can fail quietly.

                ## Milestones
                1. Every strategy, monitor and report job sending a heartbeat on a fixed interval.
                2. Missing heartbeats detected by a system outside the one being watched.
                3. The alerting system's own health checked from outside it.
                4. Heartbeat alerts tested by stopping a component on purpose.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every live component sends a heartbeat watched by an external system, and a deliberate stop of each component has produced an alert within its interval."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every component whose silence would go unnoticed"
                - "Add a heartbeat to the strategy most likely to hang"
                - "Watch the alerting system itself from an outside check"
                - "Stop one component on purpose and confirm the heartbeat alert fires @recurring(monthly:25)"
            - name: Deciding between automatic and manual pauses
              description: |-
                ## Purpose
                Some pause triggers should act instantly without waiting for a person, such as a reconciliation break or runaway order rate, while others need judgement, such as a slow drawdown. Deciding trigger by trigger which pauses are automatic, which page a human and which only inform, and writing down why, avoids both a strategy that trades through an obvious fault and one that stops every time the market twitches.

                ## Milestones
                1. Every pause trigger classed as automatic, human decision or informational.
                2. The reasoning for each class written in a sentence.
                3. Automatic pauses tested to confirm they stop new orders as designed.
                4. The classes added to the written pause rules.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each pause trigger has a recorded class and reason, and every automatic pause has been tested to stop new orders."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every pause trigger in the written rules"
                - "Class each as automatic, human decision or informational"
                - "Test each automatic pause in a sandbox account"
                - "Update the pause rules with the classes and reasons"
            - name: Expected drawdown bands from the backtest
              description: |-
                ## Purpose
                Every strategy will have drawdowns, and the question during one is whether this drawdown is within what the research implied. Building bands from the backtest, such as the distribution of drawdown depth and length over windows matching the live period, gives the owner a picture to compare against. Widen them for the fact that live results are usually worse than backtests, rather than pretending otherwise.

                ## Milestones
                1. The distribution of drawdown depth and duration computed from the reference run.
                2. Bands at chosen percentiles drawn for windows matching the live history.
                3. An explicit haircut applied for expected out-of-sample decay.
                4. The bands shown on the tracking dashboard and referenced in the pause rules.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Drawdown depth and duration bands with a stated out-of-sample haircut appear on the dashboard for every live strategy."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Compute drawdown depth and duration from the reference run"
                - "Pick the percentiles that will form each band"
                - "Agree an out-of-sample haircut with the strategy owner"
                - "Add the bands to the tracking dashboard"
            - name: Go-live day monitoring plan for a new strategy
              description: |-
                ## Purpose
                The first day a strategy trades real money is when assumptions meet reality, so it deserves a plan rather than hope. Small initial size, named people watching, extra checks at the open and close, a lower pause threshold and a debrief after the session give the launch the best chance of catching problems at small cost. Most new strategies disappoint out of sample; the plan makes sure the first surprises are cheap.

                ## Milestones
                1. A launch date, initial size and widened monitoring set agreed in writing.
                2. Named watchers for the open, the middle of the day and the close.
                3. Tighter pause thresholds for the first two weeks.
                4. A debrief note after the first day and again after the first week.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A new strategy goes live with a written plan, named watchers and tighter thresholds, and debrief notes exist for day one and week one."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Agree the launch date and starting size with the risk lead"
                - "Name watchers for the open, midday and close"
                - "Set tighter pause thresholds for the first two weeks"
                - "Write the day one debrief before leaving"
            - name: Index rebalance and futures roll day watch
              description: |-
                ## Purpose
                Index rebalances, futures rolls and option expiries bring unusual volume, closing auction imbalances and price moves that can trigger alerts or expose a strategy's handling of the calendar. Knowing these dates in advance, adjusting thresholds and watching the close more closely on those days separates expected oddness from real faults. The calendar is public; using it is the work.

                ## Milestones
                1. A calendar of rebalance, roll and expiry dates relevant to live strategies for the next quarter.
                2. Threshold adjustments agreed for those days.
                3. Extra cover arranged for the close on each date.
                4. A note after each event on anything unexpected.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every rebalance, roll and expiry date in the quarter has adjusted thresholds, named cover for the close and a short post-event note."
                cadence: cyclic
              tasks:
                - "List rebalance, roll and expiry dates for the next quarter"
                - "Refresh next month's event dates and cover @recurring(monthly:27)"
                - "Agree threshold changes for those days"
                - "Write a note after each event on anything unexpected"
            - name: Data release and central bank day watch plan
              description: |-
                ## Purpose
                Scheduled releases such as employment figures, inflation prints and central bank decisions move prices in seconds and widen spreads, which can trip volatility alerts or reveal that a strategy trades into the news when it should not. A short weekly look at the coming calendar, with a note on which strategies are exposed and whether any should stand aside, prepares the monitoring rather than surprising it.

                ## Milestones
                1. The week's scheduled releases listed each weekend with times in UTC.
                2. Exposed strategies named against each release.
                3. Any planned stand-aside or threshold change written down in advance.
                4. Behaviour around each major release noted afterwards.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Each week has a list of scheduled releases with exposed strategies and planned actions, and post-release notes exist for major events."
                cadence: rolling
              tasks:
                - "Choose a reliable economic calendar source"
                - "List the coming week's releases with exposed strategies @recurring(weekly:sun)"
                - "Write any stand-aside decision before the release"
                - "Note how each strategy behaved around major releases"
            - name: Pause fire drill
              description: |-
                ## Purpose
                A pause procedure that has never been run is a guess. A planned drill, where a stop-trading alert is triggered on purpose in a sandbox or at minimal size, tests whether the alert reaches the right person, the runbook makes sense, the pause actually stops orders and the resume steps work. Each drill usually finds one thing to fix.

                ## Milestones
                1. A drill scenario written with the alert to trigger and the expected response.
                2. The drill run with the person on cover, timed from alert to confirmed pause.
                3. Every step that failed or confused someone recorded.
                4. Fixes from the drill owned and dated.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A pause drill has been run within the last quarter, with alert-to-pause time recorded and every problem found given an owner and date."
                cadence: cyclic
                effort_hours_estimate: "4"
              tasks:
                - "Write the first drill scenario and expected response"
                - "Run a pause fire drill with the person on cover @recurring(quarterly)"
                - "Time the drill from alert to confirmed pause"
                - "Assign an owner to every problem the drill found"
            - name: Platform migration cutover monitoring
              description: |-
                ## Purpose
                Moving a live strategy to a new broker, server, data vendor or codebase changes many things at once, and monitoring is what tells you which one broke. A cutover plan with a parallel period, extra reconciliation, a defined rollback point and heightened alerting for the first weeks turns a migration from a leap into a controlled step.

                ## Milestones
                1. A cutover plan naming the parallel period, rollback point and decision owner.
                2. Extra reconciliation between old and new systems during the parallel period.
                3. Heightened alert thresholds agreed for the first two weeks after cutover.
                4. A sign-off note closing the migration once results match.

                ## Notes
                Never migrate the platform and change the strategy logic at the same time. If results differ you will not know which change caused it.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A migration completes with a written cutover plan, a reconciled parallel period and a sign-off note confirming results match."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write the cutover plan with a rollback point"
                - "Run old and new systems in parallel and reconcile them daily"
                - "Raise alert sensitivity for the first two weeks after cutover"
                - "Write the sign-off note once results match"
            - name: Daylight saving and session time checks
              description: |-
                ## Purpose
                Clocks change on different dates in different countries, and a strategy scheduled in local time can trade an hour early, miss an auction or read the wrong bar for days without anyone noticing. A yearly check of every scheduled job, session boundary and data timestamp around each clock change is a small task that prevents an embarrassing class of incident.

                ## Milestones
                1. Every scheduled job and session boundary listed with its time zone.
                2. The clock change dates for each relevant market noted for the year.
                3. Schedules confirmed to run on UTC or to adjust correctly.
                4. A check on the first trading day after each change that orders fired at the right time.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "All scheduled jobs are documented with time zones, and a post-change check is recorded for each clock change in the year."
                cadence: cyclic
                effort_hours_estimate: "3"
              tasks:
                - "List every scheduled job and its time zone"
                - "Note this year's clock change dates for each market traded"
                - "Check order timing on the first day after each clock change @recurring(yearly)"
                - "Move any local-time schedules to UTC"
            - name: Monitoring a personal algo around a day job
              description: |-
                ## Purpose
                Someone running a small personal algorithm cannot watch a screen all day, so the monitoring has to work while they are in meetings. Phone alerts for only the few events that matter, broker-side stop and loss limits that act without them, a short evening review and a written rule for what happens when they cannot respond keep a side project from becoming a risk to savings. Only trade money you can afford to lose.

                ## Milestones
                1. No more than five phone alerts, each for an event that needs a response.
                2. Broker-side limits set so a missed alert cannot cause an unlimited loss.
                3. A fifteen-minute evening review routine written down.
                4. A rule for what the algo does when you are unreachable, such as flattening or stopping new orders.

                ## Notes
                Check which protective order types and account loss limits your broker supports; they keep working when your laptop does not.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Five or fewer phone alerts are configured, broker-side limits are set, and an evening review is logged on most trading days for a month."
                cadence: rolling
              tasks:
                - "Choose the five events that justify a phone alert"
                - "Set broker-side loss and position limits on the account"
                - "Write the rule for what happens when you cannot respond"
                - "Do a weekend review of the week's trades and alerts @recurring(weekly:sat)"
            - name: Monitoring cover while on leave or travelling
              description: |-
                ## Purpose
                Holidays, conferences and long flights are when a sole strategy owner is least able to respond and most likely to assume nothing will happen. Planning cover, whether that is a colleague with a briefing, reduced size, or a strategy paused for the period, and writing down what the cover may and may not do, means the time away is genuinely away.

                ## Milestones
                1. A decision for each strategy: covered, reduced or paused while away.
                2. A briefing note for the cover with contacts, runbooks and authority limits.
                3. A short handover call before leaving and a handback on return.
                4. Anything the cover did logged for review on return.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Before each absence, every strategy has a recorded cover decision and the cover has a written briefing with authority limits."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Decide for each strategy whether it is covered, reduced or paused"
                - "Write a briefing note with contacts, runbooks and limits for the cover"
                - "Hold a handover call before leaving"
                - "Read the cover's log on return"
            - name: Onboarding a new team member to monitoring duty
              description: |-
                ## Purpose
                A new engineer or researcher joining the cover rota needs to know the strategies, the dashboards, the alerts and the pause rules before they are alone on a shift. A structured onboarding with shadowed shifts, a runbook walk-through and a supervised drill gets them there safely and tests your documentation at the same time.

                ## Milestones
                1. A reading list covering the inventory, expected behaviour sheets and pause rules.
                2. At least three shadowed shifts with an experienced person.
                3. A supervised fire drill completed.
                4. Sign-off that the new person can cover alone.

                ## Notes
                Start from the **Onboarding 30/60/90** template. Ask the new person to list every confusing thing they meet; those are your documentation gaps.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A new team member completes three shadowed shifts and a supervised drill and is signed off to cover alone, with documentation gaps recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Put together the monitoring reading list"
                - "Schedule three shadowed shifts"
                - "Run a supervised fire drill with the new person"
                - "Collect the confusions they noted and fix the documentation"
            - name: Splitting monitoring roles in a small fund
              description: |-
                ## Purpose
                In a team of three to eight, monitoring often falls to whoever notices, which means researchers fight infrastructure fires and engineers judge strategy performance. Agreeing who owns what, for example engineers owning data, connectivity and system health, researchers owning strategy behaviour and the risk lead owning limits and pauses, makes responsibility clear without adding headcount.

                ## Milestones
                1. A responsibility table listing each monitoring duty and its owner.
                2. Overlaps and gaps in the table resolved in a team discussion.
                3. Alert routing updated to match the owners.
                4. The table reviewed after the first incident under the new split.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A responsibility table assigns every monitoring duty to one owner, alert routing matches it, and it has been reviewed after an incident."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every monitoring duty currently done by anyone"
                - "Assign each duty to one role"
                - "Update alert routing to match the new owners"
                - "Review the split after the next real incident"
            - name: First 60 days owning a live strategy's monitoring
              description: |-
                ## Purpose
                A researcher handed a live strategy for the first time inherits its monitoring along with its P&L, often with little documentation. Spending the first 60 days learning its expected behaviour, reading its history of incidents, checking that its alerts and pause rules still make sense and writing down what is missing sets them up to defend or challenge it with evidence.

                ## Milestones
                1. The strategy's expected behaviour sheet, reference run and pause rules read and understood.
                2. Its last six months of incidents and scorecards reviewed.
                3. A list of monitoring gaps written and shared with the previous owner.
                4. Updated documentation signed off at the end of the 60 days.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Within 60 days, the new owner has reviewed the strategy's history and documentation and a signed list of monitoring gaps and fixes exists."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Ask the previous owner for an hour to walk through the strategy"
                - "Read six months of scorecards and incident notes"
                - "Write the list of monitoring gaps you found"
                - "Get the updated documentation signed off"
            - name: Aggregate risk across several live strategies
              description: |-
                ## Purpose
                Strategies that each look fine can together hold the same crowded position, the same factor tilt or the same exposure to one event. Monitoring the combined book, netting positions, measuring correlation of live returns between strategies and tracking aggregate factor exposure, shows concentrations no single strategy report reveals. It becomes essential once three or more strategies share capital.

                ## Milestones
                1. Positions netted across strategies by instrument and issuer.
                2. Aggregate exposure to the main factors and sectors reported weekly.
                3. Rolling correlation of live strategy returns charted.
                4. Book-level limits agreed and monitored alongside strategy limits.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly book-level report shows netted positions, aggregate factor exposure and strategy return correlations against agreed book limits."
                cadence: rolling
              tasks:
                - "Net positions across all live strategies by instrument"
                - "Produce the weekly aggregate exposure report @recurring(weekly:tue)"
                - "Chart rolling correlations between live strategy returns"
                - "Agree book-level limits with the risk lead"
            - name: Real-time anomaly detection on fills and P&L
              description: |-
                ## Purpose
                Fixed thresholds miss problems that are unusual for this strategy at this time of day but within the global limits. Anomaly detection that learns each strategy's intraday pattern of fills, slippage and P&L and flags departures can catch subtle failures earlier, if it is kept simple enough to explain. Treat it as a supplement to hard limits, never a replacement.

                ## Milestones
                1. A baseline model of intraday fill rate, slippage and P&L per strategy.
                2. Anomaly scores computed in real time and logged.
                3. Three months of scores compared with known incidents to measure hits and false alarms.
                4. A decision on whether the scores feed alerts or only the dashboard.

                ## Notes
                Start with outlier-resistant statistics such as rolling medians and percentile bands before trying machine learning. Complex models that nobody can explain get switched off after the first false alarm.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An anomaly detector has been evaluated against three months of known incidents, with hit and false alarm rates recorded and a decision on its use."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Build intraday baselines for fill rate, slippage and P&L"
                - "Compute anomaly scores on historical live data"
                - "Compare scores with the incident log to count hits and false alarms"
                - "Decide whether the scores drive alerts"
            - name: Monitoring through market-wide stress and halts
              description: |-
                ## Purpose
                On days with circuit breakers, trading halts, limit-up or limit-down moves or a venue outage, normal thresholds fire everywhere and strategies meet conditions their backtests rarely saw. A written stress-day mode, saying which alerts to trust, which strategies to pause by default and how to handle orders resting on halted instruments, keeps the team acting on a plan rather than on adrenaline.

                ## Milestones
                1. The market-wide events that would trigger stress-day mode listed.
                2. Default actions for each strategy in stress-day mode written down.
                3. Handling for orders and positions in halted instruments documented.
                4. A replay of a past stress day through the monitoring to check alerts and actions.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A written stress-day mode covers triggers, default strategy actions and halted instruments, and has been tested by replaying a past stress day."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List the market-wide events that should switch on stress-day mode"
                - "Write default actions for each strategy"
                - "Document how orders on halted instruments are handled"
                - "Replay a past stress day through the monitoring"
            - name: Monitoring audit trail for investors and regulators
              description: |-
                ## Purpose
                Investors doing due diligence and regulators examining algorithmic trading increasingly ask to see evidence that live strategies are monitored, limits enforced and incidents handled. Keeping the inventory, rules, daily sign-offs, alert history and incident reviews retained and retrievable for the period your obligations require turns that request into an afternoon's work. Confirm the actual retention and reporting requirements with your compliance adviser.

                ## Milestones
                1. A list of monitoring records to retain and the retention period confirmed with compliance.
                2. Records stored in a place where they cannot be altered after the fact.
                3. A sample request answered from the archive in under a day.
                4. A yearly check that retention is working.

                ## Notes
                Start from the **Compliance control** template. Rules on algorithmic trading controls differ by jurisdiction; this project organises the evidence, it does not decide what the law requires.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Monitoring records are retained for a period confirmed by compliance, and a sample evidence request has been answered from the archive within one day."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the monitoring records an investor or regulator might ask for"
                - "Confirm retention periods with your compliance adviser"
                - "Move records into storage that prevents later edits"
                - "Answer a mock evidence request from the archive @recurring(yearly)"
---

# Live Strategy Monitoring

Live strategy monitoring is everything between a strategy going live and someone deciding it should stop: knowing what is running, what it should be doing, whether fills, positions and returns still look like the research, and who acts when they do not. This area is for the engineers who build and run the monitoring and the researchers who own the strategies, at a desk, a small fund or on a personal setup. It starts with foundations (an inventory, expected behaviour sheets, a frozen backtest reference, a tracking dashboard, alert levels, reconciliation and written pause rules), then the daily, weekly and monthly routines, the skills of reading live results statistically, decisions about tools and automation, dated events such as go-live days and fire drills, setups for different situations, and a few specialist problems.

The rhythms are a daily pre-open check and end-of-day report, weekly drift, limit and signal reviews, monthly scorecards and alert noise reviews, and quarterly reviews of the rules themselves and a fire drill. Every live strategy carries written risk limits, a position sizing rule and a stop rule agreed before launch, and because most strategies fail out of sample, the monitoring exists to notice that early and calmly rather than to defend the backtest. Nothing here is trading or investment advice. The Operational checklist, Metrics log, Remediation plan, Purchase decision, Onboarding 30/60/90 and Compliance control templates pair with several projects. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
