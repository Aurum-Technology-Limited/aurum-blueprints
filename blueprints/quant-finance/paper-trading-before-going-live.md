---
id: quant-finance.paper-trading-before-going-live
name: Paper Trading Before Going Live
description: "A frozen strategy version, go or no-go criteria written in advance, a fixed trial period, fill and signal checks against the backtest and a staged route to small live size."
category: business
version: 1.0.0
tags: [quant-finance, paper-trading-before-going-live, everyone, engineer, paper-trading, simulated-fills, go-no-go, forward-testing]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - metrics-log
    - operational-checklist
    - risk-register
    - meeting-notes
  pillars:
    - name: Quantitative Finance & Trading
      emoji: "🧮"
      description: "Systematic research and trading run like engineering: alpha research and honest backtests, factor and risk models, execution and microstructure, statistics and machine learning, quant development and market data, prop-firm evaluations and personal algorithmic trading under strict risk rules, and quant careers. Organisation and method only, never trading advice."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Paper Trading Before Going Live
          description: "Running a strategy on paper before risking money: matching live fills, comparing results with the backtest, a fixed trial period and go or no-go criteria."
          projects:
            - name: What the paper trial has to prove
              description: |-
                ## Purpose
                A paper trial without a stated question drifts into watching numbers and hoping. Writing down, in three or four lines, what the trial must show (signals match the backtest, fills are achievable, the code survives real sessions, you follow the rules) turns it into a test you can pass or fail rather than a waiting room before going live.

                ## Milestones
                1. A one-page trial brief naming the strategy, the market and the questions the trial must answer.
                2. Each question paired with the evidence that would answer it, such as a trade count or a reconciliation.
                3. The things the trial cannot prove, such as real market impact, written down as known gaps.
                4. The brief dated and saved beside the strategy code.

                ## Notes
                Keep the brief short enough to reread before every weekly review. If it runs past a page, the trial is trying to answer too much at once.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated one-page trial brief lists the questions the paper trial must answer, the evidence for each and the known gaps paper cannot close."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the strategy, market and timeframe at the top of a new trial brief"
                - "List the three or four questions the trial must answer"
                - "Pair each question with the evidence that would settle it"
                - "Note what paper trading cannot show, such as your own market impact"
            - name: Choosing a paper trading venue and simulator
              description: |-
                ## Purpose
                Broker paper accounts, exchange testnets and your own simulator fed by live quotes all fill orders differently, and some fill at prices you could never get. Picking the venue on purpose, against the order types and data your strategy actually needs, decides how believable every later result will be.

                ## Milestones
                1. Two or three candidate paper venues listed with their data source, delay and supported order types.
                2. Each candidate's fill rules read and summarised in two sentences.
                3. A choice made and the reasons recorded, including the main way it may flatter results.
                4. A paper account or simulator connected and able to place and cancel a test order.

                ## Notes
                Start from the **Purchase decision** template. Prefer the paper environment of the broker you would trade live with, so order handling and rejections look the same on both sides.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A paper venue is chosen against written criteria, its fill rules are summarised and a test order has been placed and cancelled through it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the order types and data frequency the strategy needs"
                - "Shortlist two or three paper venues that support them"
                - "Read each venue's documentation on how simulated orders are filled"
                - "Place and cancel a test order on the chosen venue"
            - name: Frozen strategy version for the trial
              description: |-
                ## Purpose
                Tweaking parameters during a paper trial quietly resets it, because the results no longer belong to the version you backtested. Tagging one exact version of code, parameters and configuration as the trial build, and changing it only through a logged restart, keeps the comparison with the backtest honest.

                ## Milestones
                1. The strategy code, parameters and config committed and tagged as the trial version.
                2. A hash or version number recorded in the trial brief.
                3. The running process able to print the version it is using on start-up.
                4. A rule written down that any change ends the current trial and starts a new one.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One tagged version of code and parameters is recorded in the trial brief, printed by the running strategy and protected by a written restart rule."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Commit the strategy code, parameters and config together"
                - "Tag the commit as the paper trial version"
                - "Make the strategy log its version number on every start"
                - "Write the restart-on-change rule into the trial brief"
            - name: Go or no-go criteria written before day one
              description: |-
                ## Purpose
                Deciding what counts as success after the trial ends is how a mediocre result gets talked into a launch. Setting numeric thresholds now, for tracking error against the backtest, fill shortfall, rule breaches and operational incidents, makes the final decision a reading of a table rather than a mood.

                ## Milestones
                1. Four to six go or no-go criteria written as numbers, each with the data that measures it.
                2. A clear rule for a mixed result, such as one failed criterion meaning extend, two meaning stop.
                3. Criteria that would stop the trial early, such as a loss beyond a set multiple of the backtest's worst month.
                4. The criteria signed and dated, with a note that they change only between trials.

                ## Notes
                Include at least one behavioural criterion, such as zero unlogged manual overrides. Many strategies fail because the person running them did not follow them.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Numeric go or no-go criteria, a rule for mixed results and early stop conditions are written and dated before the first paper order is placed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft four to six numeric criteria for a go decision"
                - "Add the early stop conditions that end the trial at once"
                - "Write the rule for what happens when only some criteria pass"
                - "Date the criteria and store them with the trial brief"
            - name: Fixed trial period and minimum trade count
              description: |-
                ## Purpose
                Two good weeks on paper say almost nothing about a strategy that trades twice a week. Fixing the trial length from the strategy's own trade frequency, with a minimum number of round trips before any verdict, stops you ending early on a lucky run or dragging on through a bad one.

                ## Milestones
                1. The backtest's average trades per week and per month taken from the research results.
                2. A minimum round-trip count chosen and turned into an expected number of weeks.
                3. A start date and a latest end date fixed, whichever comes first being the end.
                4. Both dates entered in your calendar with the final review booked.

                ## Notes
                For slow strategies the honest trial may be several months. If that is too long to wait, run a smaller live stage later rather than shortening the paper period.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A start date, end date and minimum round-trip count derived from the backtest's trade frequency are recorded in the trial brief and calendar."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pull the average trade frequency from the backtest report"
                - "Choose the minimum number of round trips before a verdict"
                - "Convert that count into a start and latest end date"
                - "Book the final trial review in your calendar"
            - name: Backtest reference figures for the trial window
              description: |-
                ## Purpose
                Comparing paper results with a whole-history backtest is unfair to both, because the trial covers a few weeks of one market regime. Rerunning the backtest over the exact trial dates once they pass, and keeping its expected trade count, hit rate and cost assumptions to hand, gives the paper numbers something like-for-like to be measured against.

                ## Milestones
                1. A list of reference figures to compare: trade count, average trade, hit rate, turnover and assumed costs.
                2. A script that reruns the frozen backtest over any date range on demand.
                3. The whole-history figures recorded as the long-run expectation.
                4. A table layout ready with backtest and paper columns side by side.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A script reruns the frozen backtest over any trial date range and fills a side-by-side table of trade count, hit rate, turnover and costs."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Choose the five reference figures the trial will be compared on"
                - "Write a script that runs the frozen backtest over given dates"
                - "Record the whole-history values of each figure"
                - "Set up a comparison table with backtest and paper columns"
            - name: Paper account sized like the real one
              description: |-
                ## Purpose
                Default paper balances are often many times your real capital, which hides the problems that matter: minimum lot sizes, rounding, margin and how one loss feels as a share of the account. Setting the paper balance, position limits and instruments to exactly what you would run live makes the trial a rehearsal rather than a fantasy.

                ## Milestones
                1. The live capital you intend to risk written down, chosen as money you can afford to lose.
                2. The paper balance reset to that amount, or results scaled to it in your records.
                3. Lot sizes, rounding and minimum order sizes checked against the planned positions.
                4. Margin or buying power on paper compared with what the live account would offer.

                ## Notes
                This is about matching, not choosing the amount. How much to put at risk is your decision, and a licensed adviser can help if you are unsure.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The paper account balance, lot sizes and margin match the intended live account, with any unavoidable difference written in the trial brief."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down the live capital you would actually commit"
                - "Reset the paper balance to that figure or note the scaling"
                - "Check minimum order and lot sizes against planned positions"
                - "Compare paper margin rules with the live account's rules"
            - name: Live risk limits mirrored on paper
              description: |-
                ## Purpose
                Running the paper trial without the limits you plan to trade under means testing a different strategy. Copying the position limit, daily loss limit, sizing rule and written stop rule into the paper set-up shows how often they bind and whether the strategy still works with them switched on.

                ## Milestones
                1. The live position limit, daily loss limit, sizing rule and stop rule listed in one place.
                2. Each limit enforced in the paper set-up, by code or by a written manual check.
                3. Every limit hit during the trial logged with time, reason and what happened next.
                4. A count of limit hits ready for the final review.

                ## Notes
                Designing the limits themselves belongs to your risk rules. Here the job is to make sure paper runs under the same ones.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every planned live risk limit and the written stop rule is enforced in the paper set-up, and each hit is logged with time and outcome."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Copy the live risk limits and stop rule into the trial brief"
                - "Switch on each limit in the paper configuration"
                - "Test one limit by forcing a breach in a dry run"
                - "Add a limit-hit section to the trial log"
            - name: Paper trial log and metrics sheet
              description: |-
                ## Purpose
                Results scattered across broker screens, terminal output and memory cannot be reconciled at the end. One sheet with a row per trading day and one with a row per order, set up before the first session, means every weekly comparison is a filter rather than an archaeology project.

                ## Milestones
                1. A daily sheet with date, signals, orders, fills, end-of-day position and paper profit and loss.
                2. An order sheet with intended price, simulated fill price, time and status.
                3. Columns for the backtest's equivalent figures beside the paper ones.
                4. A first day recorded end to end as a test.

                ## Notes
                Start from the **Metrics log** template. Export from the venue where you can rather than copying by hand, and keep the raw exports untouched in a separate folder.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A daily sheet and an order sheet with paper and backtest columns exist and hold one fully recorded test day."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Create a daily sheet with signals, orders, fills and positions"
                - "Create an order sheet with intended and simulated prices"
                - "Add backtest columns beside the paper figures"
                - "Record one test day end to end and fix any missing fields"
            - name: Separate paper and live environments
              description: |-
                ## Purpose
                The worst paper trading accident is a strategy that was meant to be on paper sending real orders. Keeping paper and live credentials, config files and process names fully separate, with the live path physically unable to start by default, removes that risk before it can happen.

                ## Milestones
                1. Paper and live credentials stored separately, with live keys absent from the paper machine or container.
                2. An environment flag that defaults to paper and must be changed deliberately for live.
                3. Logs and alerts that state paper or live in every line or message.
                4. A test showing the paper build refuses to start when pointed at live endpoints.

                ## Notes
                Never paste keys into notebooks or chat. Use the secret store your platform provides and rotate any key that has been exposed.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Paper and live credentials and configs are separated, the default is paper, and a test proves the paper build cannot connect to live endpoints."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every place credentials and endpoints are currently defined"
                - "Move live keys out of the paper environment entirely"
                - "Add an environment flag that defaults to paper"
                - "Write a test that fails if the paper build reaches a live endpoint"
            - name: Daily paper session checklist
              description: |-
                ## Purpose
                Most paper trial failures are boring: the process did not start, the data feed lagged, an order sat unfilled and nobody noticed. A two-minute check before the session and a five-minute one after it catches these on the day, while the cause is still easy to find.

                ## Milestones
                1. A pre-open list covering process running, version, data feed live and positions as expected.
                2. An end-of-day list covering fills recorded, positions matched and anomalies noted.
                3. Both lists completed on at least twenty sessions without a gap.
                4. Anything found by the checklist carried into the weekly reconciliation.

                ## Notes
                Start from the **Operational checklist** template. If you trade part-time, automate the pre-open check as a message to your phone and keep only the end-of-day step manual.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Pre-open and end-of-day checks are recorded for every session of the trial, with no more than two missed sessions noted."
                cadence: rolling
              tasks:
                - "Write a five-line pre-open check and a five-line end-of-day check"
                - "Run the pre-open check before the session starts @recurring(daily)"
                - "Match end-of-day positions to the paper account @recurring(daily)"
                - "Carry any checklist finding into the weekly review notes"
            - name: Weekly paper versus backtest reconciliation
              description: |-
                ## Purpose
                Divergence between paper and backtest grows quietly, one missed signal or worse fill at a time. Rerunning the frozen backtest over the past week and lining up its trades against the paper trades, every week, finds each difference while it is small and still explainable.

                ## Milestones
                1. The backtest rerun over the week and its trades matched one to one with paper trades.
                2. Every unmatched or mismatched trade given a reason: data, timing, fill, bug or unknown.
                3. A running tracking difference recorded week by week.
                4. Unknown differences carried forward until each has a cause.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each week of the trial has a reconciliation note matching paper and backtest trades, with every mismatch classified or carried forward as unknown."
                cadence: rolling
              tasks:
                - "Rerun the frozen backtest over the past week and reconcile trades @recurring(weekly:fri)"
                - "Classify each mismatch as data, timing, fill, bug or unknown"
                - "Update the running tracking difference in the metrics sheet"
                - "Open a note for any unknown difference older than two weeks"
            - name: Fill realism audit against recorded quotes
              description: |-
                ## Purpose
                Simulators often fill limit orders the moment price touches them and market orders at the last trade, which real queues and spreads rarely allow. Checking a sample of paper fills against the bid and ask recorded at that moment shows how much the venue is flattering you, before that gap reaches real money.

                ## Milestones
                1. Bid, ask and last trade captured for every paper order at the time it was sent.
                2. A weekly sample of fills compared with the price you could realistically have got.
                3. A running average of the gap in ticks or basis points per order type.
                4. Limit orders filled on a mere touch flagged and counted separately.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly fill audit records the average gap between paper fills and recorded quotes per order type, with touch fills counted separately."
                cadence: rolling
              tasks:
                - "Log bid, ask and last price alongside each paper order"
                - "Audit a sample of the week's fills against recorded quotes @recurring(weekly:wed)"
                - "Count limit fills that happened on a touch with no trade through"
                - "Update the average fill gap for each order type"
            - name: Monthly signal parity check
              description: |-
                ## Purpose
                Live data arrives late, gets revised and sometimes differs from the history the backtest used, so the same code can produce different signals. Recomputing a month of signals from the stored historical data and comparing them with what the live process actually generated shows whether the strategy you are paper trading is the one you researched.

                ## Milestones
                1. Live signals stored with timestamps and the inputs used to compute them.
                2. A month of signals recomputed from the historical dataset.
                3. A match rate recorded, with every differing signal traced to an input.
                4. Persistent sources of difference written down as known issues.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each month of the trial has a signal parity report with a match rate and a traced cause for every signal that differs."
                cadence: rolling
              tasks:
                - "Store each live signal with its inputs and timestamp"
                - "Recompute last month's signals from historical data @recurring(monthly:3)"
                - "Trace each differing signal to the input that changed"
                - "Record the match rate in the metrics sheet"
            - name: Rejected, missed and stale order log
              description: |-
                ## Purpose
                Orders that never reach the market are invisible in a profit and loss line, yet they are often the first sign of a sizing bug, a rate limit or a session-hours mistake. Logging every rejection, missed signal and order left hanging past its intended life, and reviewing them weekly, shows whether execution is reliable enough to trust with real money.

                ## Milestones
                1. Every rejected order captured with the venue's reason code.
                2. Signals that produced no order listed with the cause.
                3. Orders left working longer than intended flagged automatically.
                4. A weekly count of each type trending towards zero.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A log captures every rejected, missed and stale order with its cause, and the weekly counts are recorded through the trial."
                cadence: rolling
              tasks:
                - "Capture venue rejection codes in the order log"
                - "Flag orders still working past their intended life"
                - "Review rejected, missed and stale orders from the past week @recurring(weekly:mon)"
                - "Fix or record the cause of each repeated rejection"
            - name: Monthly paper trial review
              description: |-
                ## Purpose
                Weekly reconciliations explain individual trades; a monthly review asks whether the trial as a whole is heading for a go or a no-go. Scoring the month against the written criteria keeps the decision visible all along, so the final review holds no surprises.

                ## Milestones
                1. Each go or no-go criterion scored for the month as pass, at risk or fail.
                2. The month's paper results set beside the backtest over the same dates.
                3. Open issues from weekly notes listed with owners and dates.
                4. A one-paragraph summary added to the trial brief.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every month of the trial ends with each criterion scored, a paper versus backtest comparison and a dated summary paragraph."
                cadence: cyclic
              tasks:
                - "Score each go or no-go criterion for the month @recurring(monthly:28)"
                - "Compare the month's paper results with the backtest over the same dates"
                - "List open issues with a date for each"
                - "Ask the agent to draft the summary paragraph from the month's notes"
            - name: Data feed gap and outage register
              description: |-
                ## Purpose
                Running a paper trial on a feed that drops out for ten minutes twice a week is testing the feed as much as the strategy. Recording every gap, delay and bad print with its effect on signals tells you which differences to forgive and which data problems must be fixed before live trading.

                ## Milestones
                1. Gaps, delays and suspect prints detected automatically and written to a register.
                2. Each entry noting duration, instruments affected and any signal or order it changed.
                3. A monthly total of data downtime and affected trades.
                4. Recurring causes escalated to the data provider or fixed in your code.

                ## Notes
                Start from the **Risk register** template. A feed problem that changes a trade should count against the trial unless you can show it would not happen live.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A register lists every data gap or bad print in the trial with its duration and effect, and a monthly downtime total is recorded."
                cadence: rolling
              tasks:
                - "Add a check that flags gaps longer than the bar interval"
                - "Record each gap or bad print with instruments and duration"
                - "Total the month's data downtime and affected trades @recurring(monthly:9)"
                - "Raise any repeated gap with the data provider"
            - name: Manual intervention and override log
              description: |-
                ## Purpose
                Every time you cancel a paper order, skip a signal or restart the process mid-session, the trial measures your judgement instead of the strategy. Logging each intervention with its reason, and counting them, keeps the results honest and reveals whether you would actually let the strategy run.

                ## Milestones
                1. A log entry for every manual cancel, skip, restart or position change.
                2. Each entry tagged as operational fix, rule following or discretion.
                3. Discretionary overrides counted and their effect on paper results estimated.
                4. The total ready for the behavioural criterion in the final review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every manual intervention during the trial is logged and tagged, and the count of discretionary overrides is reported at each monthly review."
                cadence: rolling
              tasks:
                - "Add an intervention section to the daily log"
                - "Tag each intervention as fix, rule or discretion"
                - "Review the week's interventions and their effect on results @recurring(weekly:thu)"
                - "Estimate what results would have been without discretionary overrides"
            - name: Clock and timestamp sanity checks
              description: |-
                ## Purpose
                Clock drift of a few seconds, or a feed in one time zone and a scheduler in another, can shift signals onto the wrong bar without any error appearing. Checking clock sync and time zone handling each month is cheap insurance for engineers running a paper trial on their own hardware or cloud instance.

                ## Milestones
                1. Clock synchronisation enabled and its offset logged on the trading machine.
                2. Every timestamp in the logs stored in one stated time zone.
                3. Session open, close and daylight saving changes tested against the scheduler.
                4. A monthly offset reading recorded in the metrics sheet.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Clock offset readings and a time zone check are recorded monthly through the trial, with daylight saving dates tested in advance."
                cadence: rolling
              tasks:
                - "Confirm clock synchronisation is running on the trading machine"
                - "Convert all log timestamps to one stated time zone"
                - "Check the clock offset and session times against the exchange @recurring(monthly:15)"
                - "Test the scheduler against the next daylight saving change"
            - name: Change log and restart register
              description: |-
                ## Purpose
                Some changes during a trial are unavoidable, such as a bug fix or a broker API update, and each one splits the results into before and after. A register of every change, whether it restarted the trial and which version ran on which dates, lets the final review judge the right version on the right data.

                ## Milestones
                1. A register with date, change, reason, new version and restart decision for each entry.
                2. A rule applied for which changes force a restart and which are cosmetic.
                3. Results in the metrics sheet split by version.
                4. A monthly check that the register matches the version tags in the code.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every change made during the trial is in the register with its restart decision, and results are split by version in the metrics sheet."
                cadence: rolling
              tasks:
                - "Create the change register with date, reason and version columns"
                - "Decide which kinds of change force a trial restart"
                - "Check the register against version tags in the code @recurring(monthly:20)"
                - "Split the metrics sheet results by strategy version"
            - name: How simulated fill engines work
              description: |-
                ## Purpose
                Knowing exactly how your venue decides that a paper order filled, at what price and in what quantity, is the difference between trusting a result and being fooled by it. An evening reading the documentation and running a few controlled test orders turns the simulator from a black box into a known set of assumptions.

                ## Milestones
                1. The venue's rules for market, limit and stop fills written in plain sentences.
                2. Partial fills, queue position and spread handling described as the venue models them.
                3. Five controlled test orders placed to confirm each rule.
                4. A list of the ways the simulator is kinder than a real market.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written summary of the simulator's fill rules is confirmed by five test orders and ends with a list of ways it flatters results."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read the venue's documentation on simulated order handling"
                - "Write the fill rule for each order type in one sentence"
                - "Place five test orders designed to check those rules"
                - "List every way the simulator is kinder than live trading"
            - name: Order types in simulation versus live
              description: |-
                ## Purpose
                Stops that gap through their level, market-on-open orders, iceberg and post-only flags often behave differently on paper or are quietly converted to something simpler. Testing the exact order types the strategy uses, including what happens at the open and in fast markets, avoids discovering the difference on the first live gap.

                ## Milestones
                1. Every order type and flag the strategy uses listed.
                2. Each one tested on paper and its behaviour recorded, including at the open and close.
                3. Unsupported or simplified types identified and an alternative chosen.
                4. Notes on expected live behaviour written from the broker's live documentation.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every order type the strategy uses has a recorded paper test and a note on how live behaviour is expected to differ."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every order type and flag the strategy sends"
                - "Test each type on paper during a normal and a fast session"
                - "Record any type the simulator converts or does not support"
                - "Read the live documentation for how each type behaves at the open"
            - name: How many paper trades mean anything
              description: |-
                ## Purpose
                Even a long paper trial is a small sample, and small samples of noisy returns can look excellent or dreadful by chance alone. Learning to put a confidence interval on the trial's average trade, and to ask whether it is consistent with the backtest rather than equal to it, stops both false launches and false rejections.

                ## Milestones
                1. The standard error of the average trade worked out for the planned trade count.
                2. A bootstrap of backtest trades showing the range of results a trial that size could produce.
                3. The paper result located inside or outside that range.
                4. A short note on what sample size would be needed to tell a real edge from noise.

                ## Notes
                Expect the honest answer to be that a short trial cannot confirm an edge. Its job is to catch breakage and gross mismatch; the edge is judged over far longer periods.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A bootstrap range for a trial-sized sample of backtest trades is computed and the paper result is placed within or outside it."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Compute the standard error of the backtest's average trade"
                - "Bootstrap trial-sized samples from the backtest trade list"
                - "Plot where the paper average falls in that distribution"
                - "Write down the sample size needed to detect the expected edge"
            - name: Paper versus backtest distribution comparison
              description: |-
                ## Purpose
                Matching total profit can hide a broken strategy, because a few lucky trades can cover many bad ones. Comparing the shape of paper results with the backtest, trade length, win size, loss size and holding period, shows whether the strategy is behaving as designed or just landing near the right number.

                ## Milestones
                1. Histograms of trade return and holding period for paper and backtest side by side.
                2. A simple two-sample test run and its limits noted for small samples.
                3. Largest wins and losses on paper compared with the backtest's tails.
                4. A written verdict on whether behaviour matches design.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Side-by-side distributions of paper and backtest trades are produced with a written verdict on whether the strategy behaves as designed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Plot paper and backtest trade returns on the same axes"
                - "Compare holding periods and the size of the largest losses"
                - "Run a two-sample test and note its small-sample limits"
                - "Write a three-sentence verdict on behavioural match"
            - name: Reading paper account statements and margin
              description: |-
                ## Purpose
                Paper accounts still produce statements, margin figures and corporate action adjustments, and reading them is practice for the live account. Checking them each month against your own records catches dividends, splits, funding charges or rollovers that your strategy code ignored.

                ## Milestones
                1. The paper statement downloaded and its sections understood.
                2. Cash, positions and profit on the statement reconciled with your metrics sheet.
                3. Any financing, dividend or corporate action entries explained.
                4. Differences between statement and records explained or fixed.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each month's paper statement is reconciled with the metrics sheet, with every financing or corporate action entry explained."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Find where the venue publishes paper account statements"
                - "Download the paper statement and reconcile cash and positions @recurring(monthly:5)"
                - "Explain each financing, dividend or corporate action entry"
                - "Fix the strategy or records where the statement disagrees"
            - name: The gap between paper and real money
              description: |-
                ## Purpose
                People who follow every rule on paper often hesitate, skip trades or close winners early once real money is involved. Writing down now how you expect to react to a losing week, and agreeing in advance what you will do, prepares you for the part of going live that no simulator can test.

                ## Milestones
                1. The backtest's worst week and worst month expressed in the currency you will trade.
                2. A written note on how you expect to feel and act at those losses.
                3. Pre-agreed responses for a losing streak, a big winner and a missed trade.
                4. The note filed with the go or no-go criteria for rereading before going live.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note translating the backtest's worst week and month into currency, with pre-agreed responses, is filed with the go or no-go criteria."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Convert the backtest's worst week and month into currency amounts"
                - "Write how you expect to react to each of those losses"
                - "Agree your response to a losing streak and to a missed trade"
                - "File the note with the go or no-go criteria"
            - name: Slippage haircut on paper results
              description: |-
                ## Purpose
                Since most simulators fill more kindly than markets do, raw paper profit is an upper bound. Applying a haircut per trade, based on the fill audit and the spread at order time, gives a more sober number to compare with the backtest and to carry into the go or no-go decision.

                ## Milestones
                1. A per-trade slippage estimate chosen from the fill audit and recorded spreads.
                2. Paper results restated with the haircut in a separate column.
                3. The haircut compared with the cost assumption used in the backtest.
                4. The estimate refreshed monthly as the audit sample grows.

                ## Notes
                When in doubt, use the larger figure. A strategy that only works with an optimistic haircut does not work.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Paper results are restated with a documented per-trade slippage haircut, refreshed monthly and compared with the backtest's cost assumption."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Choose a per-trade haircut from the fill audit and spreads"
                - "Add a haircut-adjusted results column to the metrics sheet"
                - "Refresh the haircut from the latest fill audit @recurring(monthly:18)"
                - "Compare the haircut with the backtest's cost assumption"
            - name: Triage for paper versus backtest differences
              description: |-
                ## Purpose
                When paper and backtest disagree, the cause is usually one of four things: different data, different timing, a fill the simulator could or could not give, or a bug. A fixed triage order for investigating differences saves hours and stops a real bug being written off as market noise.

                ## Milestones
                1. A written triage order: data first, then timing, then fills, then code.
                2. A check or script for each step that can be run on a single trade.
                3. Every unknown difference from the reconciliation run through the triage.
                4. Bugs found turned into tests in the strategy code.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written triage procedure with a check per step exists and every unknown difference in the trial has been run through it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the four-step triage order on one page"
                - "Build a script that replays a single trade with logged inputs"
                - "Run each open unknown difference through the triage"
                - "Add a regression test for every bug the triage finds"
            - name: Fixing a flaw the paper trial exposed
              description: |-
                ## Purpose
                Sometimes the trial reveals that the backtest itself was wrong, a signal that used data not yet published or a fill assumption that cannot be met. The right response is to fix the research, rerun the backtest, and restart the trial on the new version, not to patch the live code and carry on.

                ## Milestones
                1. The flaw described in one paragraph with the trades it affected.
                2. The backtest corrected and rerun, with old and new results compared.
                3. A decision recorded on whether the corrected strategy still deserves a trial.
                4. A new trial version tagged and the old trial closed in the change register.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The flaw is documented, the backtest corrected and rerun, and a recorded decision either restarts the trial on a new tag or stops the strategy."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Describe the flaw and list the trades it affected"
                - "Correct the backtest and rerun it over the full history"
                - "Decide in writing whether the corrected version earns a new trial"
                - "Close the old trial in the change register"
            - name: Extend, stop or proceed at the trial end date
              description: |-
                ## Purpose
                Trials often end in a grey zone: not enough trades, one criterion missed, an unusual market month. Deciding in advance how to handle each grey case, with a maximum number of extensions, stops a trial being extended forever because nobody wants to say no.

                ## Milestones
                1. The grey cases listed: too few trades, one criterion failed, unusual regime.
                2. A response written for each, with the length of any extension.
                3. A cap on extensions, after which the default is no-go.
                4. The rules added to the go or no-go criteria document.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written rules cover each grey-zone outcome with an extension length and a cap after which the default answer is no-go."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the grey-zone outcomes the trial could end in"
                - "Write the response and extension length for each"
                - "Set the maximum number of extensions"
                - "Add these rules to the go or no-go criteria"
            - name: First live stage size and step-up plan
              description: |-
                ## Purpose
                Going from paper to full size in one step throws away the chance to measure real fills and your own behaviour cheaply. Writing a staged plan, a small first stage, the evidence needed to step up and the evidence that sends you back to paper, makes the move to live money gradual and reversible.

                ## Milestones
                1. A first live stage defined as a fraction of intended size, within money you can afford to lose.
                2. The minimum trades and weeks at each stage before a step up.
                3. Conditions that drop size back a stage or return to paper.
                4. The plan reviewed against the risk limits and stop rule.

                ## Notes
                The amounts are your decision. This project records the rule for moving between stages, not a view on how much to trade.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written staged plan defines the first live size, step-up evidence and fall-back conditions, and is checked against the risk limits."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Define the first live stage as a share of intended size"
                - "Set the trades and weeks required before each step up"
                - "Write the conditions that send you back a stage or to paper"
                - "Check the plan against your risk limits and stop rule"
            - name: Shadow running beside a live strategy
              description: |-
                ## Purpose
                Engineers replacing a live strategy with a new version can run the new one on paper in parallel, on the same data and at the same time, and compare decisions directly. Shadow running isolates the change from market noise, because any difference between the two outputs comes from the code alone.

                ## Milestones
                1. The new version running on paper alongside the live version from the same feed.
                2. Decisions from both written to a shared log keyed by time.
                3. A daily diff of signals and orders between the two versions.
                4. Every difference explained by an intended change or fixed.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A shadow version runs on paper beside live for the trial period, with a daily diff log and every unexplained difference resolved."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Deploy the new version on paper reading the live feed"
                - "Write both versions' decisions to one time-keyed log"
                - "Build a daily diff of signals and orders"
                - "Explain or fix each difference before replacing the live version"
            - name: Comparing two simulators on the same signals
              description: |-
                ## Purpose
                If you are unsure how much your venue flatters fills, running the same signals through a second simulator with harsher rules gives a range rather than a single hopeful number. The gap between the two is a direct measure of how sensitive the strategy is to execution assumptions.

                ## Milestones
                1. A second simulator or fill model chosen with deliberately conservative rules.
                2. The trial's signals replayed through it over the same dates.
                3. Results from both set side by side with the difference explained.
                4. A note on whether the strategy survives the harsher fills.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The same signals are run through two fill models over the trial dates and a note records whether the strategy survives the harsher one."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick a second fill model with conservative rules"
                - "Replay the trial's signals through it over the same dates"
                - "Put both sets of results in one table"
                - "Write whether the strategy survives the harsher fills"
            - name: Mid-trial checkpoint review
              description: |-
                ## Purpose
                Halfway through a trial is the last point where a structural problem can be fixed without wasting the whole period. A checkpoint that reviews the criteria, open issues and data quality catches a broken strategy early and confirms a healthy one is on track.

                ## Milestones
                1. Each go or no-go criterion scored at the halfway point.
                2. Open issues listed with a decision: fix now, accept or restart.
                3. The trade count compared with the minimum needed by the end date.
                4. A short checkpoint note added to the trial brief.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A dated checkpoint note scores every criterion at halfway and records a fix, accept or restart decision for each open issue."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Book the checkpoint for the trial's halfway date"
                - "Score each criterion with results so far"
                - "Decide fix, accept or restart for each open issue"
                - "Check the trade count against the minimum required"
            - name: Go or no-go decision meeting
              description: |-
                ## Purpose
                The end of the trial deserves a deliberate decision, even if you are the only person in the room. Setting the results against the criteria written on day one, out loud or on paper, and recording the verdict with its reasons, stops a long trial ending in a vague drift into live trading.

                ## Milestones
                1. The final results table filled for every criterion, using haircut-adjusted figures.
                2. Interventions, data gaps and changes summarised in one page.
                3. A verdict recorded as go, extend or no-go, with the reason for each criterion.
                4. Next steps written: first live stage, extension plan or post-mortem.

                ## Notes
                Start from the **Meeting notes** template. If you can, ask someone who did not build the strategy to read the evidence and challenge the verdict.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A recorded verdict of go, extend or no-go scores every pre-written criterion with haircut-adjusted figures and names the next step."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Fill the final results table for every criterion"
                - "Summarise interventions, data gaps and changes on one page"
                - "Hold the decision review and record the verdict with reasons"
                - "Write the next step for go, extend or no-go"
            - name: Full-day dress rehearsal of the production stack
              description: |-
                ## Purpose
                Plenty of paper trials run on a laptop with a notebook open, while live trading will run on a server with alerts and a scheduler. Running one complete session on the exact production set-up, pointed at the paper endpoint, finds the deployment problems before the first real order.

                ## Milestones
                1. The production machine, scheduler, alerts and logging configured as for live.
                2. One full session run unattended against the paper endpoint.
                3. Start-up, shutdown and a forced restart tested during the session.
                4. Every problem found listed and fixed before the go or no-go meeting.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "One unattended full session runs on the production set-up against paper, with start-up, shutdown and a forced restart tested and issues closed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Configure the production machine exactly as it would run live"
                - "Run one full session unattended against the paper endpoint"
                - "Force a restart mid-session and check the strategy recovers"
                - "Fix each issue found before the decision meeting"
            - name: Small first live stage after a go
              description: |-
                ## Purpose
                The first days with real money test what paper never could: actual fills, actual fees and your own nerve. Running the first live stage at the small size agreed in the step-up plan, with the paper version still running alongside, measures the live gap directly while the amount at risk stays small.

                ## Milestones
                1. The live stage started at the agreed size with all risk limits and the stop rule active.
                2. The paper version kept running in parallel for direct comparison.
                3. Live fills, fees and slippage compared weekly with paper and backtest.
                4. A step-up, hold or fall-back decision recorded at the end of the stage.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first live stage runs at the agreed size beside paper, with weekly three-way comparisons and a recorded step-up, hold or fall-back decision."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Confirm risk limits and the stop rule are active on the live account"
                - "Start the live stage at the size in the step-up plan"
                - "Compare live, paper and backtest fills at the end of each week"
                - "Record the step-up, hold or fall-back decision at stage end"
            - name: Written paper trial report
              description: |-
                ## Purpose
                Trials that end without a write-up are forgotten within months, along with what they taught about the simulator, the data and yourself. A short report of results, differences, causes and the verdict becomes the reference for the next strategy you test and for anyone reviewing why this one went live.

                ## Milestones
                1. A report of no more than four pages covering set-up, results, differences and verdict.
                2. The main sources of paper versus backtest difference ranked by size.
                3. Lessons for the next trial listed as changes to the default process.
                4. The report saved with the trial brief, criteria and data.
              priority: medium
              deadlineOffsetDays: 110
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A report of four pages or fewer records results, ranked difference sources, the verdict and process lessons, filed with the trial records."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the agent to draft a report outline from the trial notes"
                - "Rank the sources of paper versus backtest difference by size"
                - "List process changes for the next trial"
                - "File the report with the brief, criteria and raw exports"
            - name: Post-mortem after a no-go
              description: |-
                ## Purpose
                Reaching a no-go means the paper trial did its job, and it saved real money. Writing down why the strategy failed, whether in the research, the data, execution or behaviour, makes the failure useful and stops the same idea being retried in slightly different clothes.

                ## Milestones
                1. The failed criteria and their measured values recorded.
                2. A root cause assigned: research flaw, data, execution or behaviour.
                3. A decision on whether any part of the idea deserves new research.
                4. The strategy marked closed, with the post-mortem linked from its record.

                ## Notes
                Most strategies fail out of sample. A short, honest post-mortem is worth more than another round of parameter tweaks.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A post-mortem names the failed criteria, assigns a root cause and records whether any part of the idea returns to research."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List each failed criterion with its measured value"
                - "Assign the main root cause of the failure"
                - "Decide whether any part of the idea goes back to research"
                - "Mark the strategy closed and link the post-mortem"
            - name: Paper trading around a full-time job
              description: |-
                ## Purpose
                If you trade part-time, the trial must fit lunch breaks and evenings without becoming a second job or tempting you to check prices all day. Automating the session and keeping the human steps to a short evening check and a Sunday plan makes the trial sustainable for its whole length.

                ## Milestones
                1. The strategy running without you watching during working hours.
                2. Alerts limited to errors and limit hits, sent to one place.
                3. A fixed evening slot of fifteen minutes for the end-of-day check.
                4. A weekly planning slot that sets up the coming week.

                ## Notes
                If the strategy needs you during the working day, it is the wrong strategy for this stage of life, not a reason to check your phone in meetings.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The trial runs unattended in working hours with error-only alerts, and evening and weekly review slots are kept for at least eight weeks."
                cadence: rolling
              tasks:
                - "Set alerts to fire only on errors and limit hits"
                - "Block fifteen minutes each evening for the end-of-day check"
                - "Plan the coming week's checks and reviews @recurring(weekly:sun)"
                - "Turn off price notifications during working hours"
            - name: First-ever strategy on paper for beginners
              description: |-
                ## Purpose
                Someone testing their first systematic strategy faces new tools, new terms and the temptation to skip straight to real money after a good week. A simple, slower paper trial, one instrument, daily bars and a written rule sheet, teaches the mechanics with nothing at stake.

                ## Milestones
                1. One instrument and one timeframe chosen, with rules written on a single page.
                2. The paper account opened and a first order placed and closed by hand.
                3. Ten paper trades taken strictly by the written rules.
                4. A list of the questions those trades raised, taken to the full trial set-up.

                ## Notes
                Learning on paper first is cheap. Only ever move to real money you can afford to lose, and treat any course or signal seller promising returns with suspicion.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten paper trades are taken on one instrument by a one-page rule sheet, with a written list of questions they raised."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write the strategy's entry, exit and size rules on one page"
                - "Place and close one paper order by hand to learn the platform"
                - "Take ten paper trades strictly by the written rules"
                - "List the questions those ten trades raised"
            - name: Nightly replay tests for the paper build
              description: |-
                ## Purpose
                Engineers can treat the paper trial like a test suite: every night, replay the day's recorded data through the current build and check that it reproduces what the live paper process did. A failing replay means non-determinism or a hidden dependency, which is far cheaper to find now than in production.

                ## Milestones
                1. The day's market data and paper decisions recorded in a replayable format.
                2. A nightly job that replays the day through the tagged build.
                3. An automatic diff that fails on any differing signal or order.
                4. A weekly check of the replay results with failures investigated.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A nightly job replays each session through the tagged build and flags any differing decision, with failures reviewed every week."
                cadence: rolling
              tasks:
                - "Record the day's market data in a replayable format"
                - "Schedule a nightly replay through the tagged build"
                - "Fail the job on any differing signal or order"
                - "Review the past week's replay results @recurring(weekly:tue)"
            - name: Paper trial for a bought or copied strategy
              description: |-
                ## Purpose
                Strategies bought from a vendor, copied from a forum or followed from a signal service arrive with claims you cannot verify from the outside. Running them on paper under your own records, with the vendor's claimed figures written down first, is the only fair test of whether the claims survive contact with your data and fills.

                ## Milestones
                1. The vendor's claimed results, fees and rules written down before the trial.
                2. The rules reproduced in your own code or followed by hand with a log.
                3. Paper results compared with the claims over the same dates.
                4. A verdict on whether the claims held, with the cost of the service counted.

                ## Notes
                Treat any promise of guaranteed or unusually steady returns as a warning sign. If the vendor will not share the rules, you cannot test them, which is an answer in itself.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The vendor's claims are recorded first, the strategy is paper traded under your own records and a verdict compares results with the claims after fees."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write down the vendor's claimed results, fees and rules"
                - "Reproduce the rules in code or a hand-kept log"
                - "Compare paper results with the claims over the same dates"
                - "Record whether the claims held after the service's cost"
            - name: Accountability partner for the paper trial
              description: |-
                ## Purpose
                Trading alone makes it easy to move the goalposts, skip a review or explain away a bad week. A partner, a friend in a trading club or a colleague, who sees the criteria on day one and the results each month, makes it much harder to pretend a no-go is a go.

                ## Milestones
                1. A partner agreed who is willing to read a short monthly update.
                2. The go or no-go criteria shared with them before the trial starts.
                3. A monthly update sent with criteria scores and interventions.
                4. The partner's view recorded at the final decision.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A partner holds a copy of the criteria from day one and receives a monthly update, and their view is recorded at the final decision."
                cadence: rolling
              tasks:
                - "Ask one person to act as your trial accountability partner"
                - "Send them the go or no-go criteria before day one"
                - "Send the monthly criteria scores and intervention count @recurring(monthly:12)"
                - "Record their view at the go or no-go meeting"
            - name: Exchange testnet quirks for crypto strategies
              description: |-
                ## Purpose
                Crypto exchange testnets often have thin, artificial order books, different fee tiers and periodic resets that wipe balances and history. Knowing these quirks, and pairing the testnet with a simulator fed by the real exchange's quotes, keeps a crypto paper trial from measuring the testnet instead of the strategy.

                ## Milestones
                1. The testnet's order book depth compared with the real exchange for your instruments.
                2. Fee tiers, funding and reset schedule on the testnet documented.
                3. A quote-driven simulator running beside the testnet on real prices.
                4. Results from both compared and the more realistic one chosen for the verdict.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Testnet depth, fees and reset schedule are documented and a quote-driven simulator on real prices runs beside it for the whole trial."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Compare testnet order book depth with the real exchange"
                - "Document testnet fees, funding and reset schedule"
                - "Run a simulator on real exchange quotes beside the testnet"
                - "Choose which results the go or no-go decision will use"
            - name: Intraday paper trial with quote-level fills
              description: |-
                ## Purpose
                For intraday strategies, a few ticks per trade decide the result, and bar-level simulators cannot see them. Simulating fills from recorded quotes and trades, with queue position and latency assumptions written down, is the minimum for a paper result on a fast strategy to mean anything.

                ## Milestones
                1. Quote and trade data recorded at the resolution the strategy acts on.
                2. A fill simulator using queue position and a stated latency.
                3. Paper results compared under optimistic and pessimistic queue assumptions.
                4. The strategy's result per trade shown against its spread cost.

                ## Notes
                If the strategy only survives the optimistic queue assumption, it is not ready for live money.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Intraday paper fills are simulated from recorded quotes with stated queue and latency assumptions, and results are shown under both optimistic and pessimistic cases."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Record quotes and trades at the strategy's decision resolution"
                - "Build a fill model with queue position and fixed latency"
                - "Run the trial under optimistic and pessimistic queue cases"
                - "Compare the average trade result with the average spread paid"
            - name: Options strategy paper trial with assignment
              description: |-
                ## Purpose
                Paper trading options hides wide spreads, early assignment, expiry handling and margin changes that can dominate the real outcome. A trial that records quoted spreads, models assignment around dividends and expiry, and tracks margin through the life of each position shows whether the strategy works once those frictions are counted.

                ## Milestones
                1. Bid and ask recorded for every option order, with fills checked against the mid.
                2. Expiry and early assignment events handled and logged on paper.
                3. Margin requirement tracked daily for each open position.
                4. Results restated with realistic spreads and assignment outcomes.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An options paper trial records spreads, assignment and expiry events and daily margin, and results are restated with those frictions."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Record bid and ask for each option order at send time"
                - "Log every expiry and assignment event on paper"
                - "Track margin for each open position at the end of each day"
                - "Restate results with realistic spreads and assignments"
            - name: Futures paper trial across a contract roll
              description: |-
                ## Purpose
                Futures strategies spend most of their life in one contract and then must roll, and many paper venues handle expiry by closing the position or ignoring it. Planning the trial so it spans at least one roll, and checking the roll date, the spread paid and the continuous price series against the backtest, tests the part of the strategy most likely to differ.

                ## Milestones
                1. The trial dates chosen so they include at least one scheduled roll for each contract traded.
                2. The roll rule from the backtest written down: which day, which contract, which order type.
                3. The paper roll executed and its spread cost recorded beside the backtest assumption.
                4. Positions and profit after the roll reconciled with the continuous series the backtest used.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A paper trial spans at least one futures roll per contract, with the roll spread cost and post-roll positions reconciled against the backtest."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find the next roll date for each contract the strategy trades"
                - "Write the backtest roll rule in one sentence"
                - "Record the spread paid on the paper roll"
                - "Reconcile post-roll positions with the backtest series"
            - name: Multi-strategy paper portfolio trial
              description: |-
                ## Purpose
                Strategies that each pass on their own can clash when run together: offsetting orders, shared capital, combined drawdowns and netting rules. Paper trading them as one portfolio, with a shared risk budget, shows the combined behaviour before any of them goes live together.

                ## Milestones
                1. All candidate strategies running on one paper account with a shared capital pool.
                2. Combined exposure and drawdown tracked against a portfolio risk limit.
                3. Conflicting or netting orders between strategies logged.
                4. A monthly comparison of combined paper results with the combined backtest.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "All candidate strategies run together on one paper account under a portfolio limit, with conflicting orders logged and a monthly combined comparison."
                cadence: rolling
              tasks:
                - "Move all candidate strategies onto one paper account"
                - "Set a portfolio-level exposure and drawdown limit"
                - "Log every conflicting or netted order between strategies"
                - "Compare combined paper and backtest results @recurring(monthly:24)"
            - name: Tiny live orders to calibrate paper fills
              description: |-
                ## Purpose
                No simulator can tell you your real fill rate; a handful of the smallest possible live orders can. Sending a few minimum-size real orders alongside the paper trial, at a cost you have accepted as a learning fee, gives a direct sample of live slippage and fill probability to correct the paper numbers.

                ## Milestones
                1. A fixed budget for calibration orders, treated as a cost not an investment.
                2. Minimum-size live orders sent for a sample of paper signals.
                3. Live fill rate and slippage compared with the paper fills for the same signals.
                4. The slippage haircut updated from the live sample.

                ## Notes
                Keep this within your risk rules and money you can afford to lose. Check your broker's minimum order sizes and fees first, since fees can exceed the order's value.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A sample of minimum-size live orders within a fixed budget is compared with paper fills for the same signals and the haircut updated."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Set a fixed calibration budget within your risk rules"
                - "Check minimum order sizes and fees with the broker"
                - "Send minimum-size live orders for a sample of signals"
                - "Compare live and paper fills for the sample @recurring(monthly:6)"
---

# Paper Trading Before Going Live

Paper trading is the forward test between a backtest you like and money you could lose: the strategy runs on live data with simulated orders, and you find out whether its signals, fills and behaviour match what the research promised. This area is for anyone about to trade a systematic idea and for the engineers who build the plumbing, and it runs from foundations (what the trial must prove, the venue, a frozen version, written criteria, a fixed period, matching size and limits), through the daily and weekly routines, the skills that explain why paper flatters results, the decisions a trial forces, the checkpoint and go or no-go events, set-ups for part-time traders, beginners and engineers, and specialist trials for intraday, options and multi-strategy books.

The rhythms are a daily pre-open and end-of-day check, weekly reconciliation against the backtest, fill audits and order reviews, and monthly reviews of signals, data gaps, clocks and the slippage haircut. Most strategies fail out of sample and many fail on paper first, which is the cheapest place to learn it, so the plan carries position limits, a sizing rule and a written stop rule into the trial, and none of it is trading or investment advice. It pairs with the Purchase decision, Metrics log, Operational checklist, Risk register and Meeting notes templates. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
