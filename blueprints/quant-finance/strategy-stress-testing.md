---
id: quant-finance.strategy-stress-testing
name: Strategy Stress Testing
description: "Stress testing for each strategy you run: crisis replays, shocked correlations, liquidity and capacity limits, a launch gate, monthly reruns and a written stop rule tied to the results."
category: business
version: 1.0.0
tags: [quant-finance, strategy-stress-testing, researcher, stress-testing, crisis-scenarios, liquidity-risk, capacity, drawdown]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - metrics-log
    - reading-queue
    - meeting-notes
    - operational-checklist
    - onboarding-30-60-90
    - portfolio-piece
  pillars:
    - name: Quantitative Finance & Trading
      emoji: "🧮"
      description: "Systematic research and trading run like engineering: alpha research and honest backtests, factor and risk models, execution and microstructure, statistics and machine learning, quant development and market data, prop-firm evaluations and personal algorithmic trading under strict risk rules, and quant careers. Organisation and method only, never trading advice."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Strategy Stress Testing
          description: "Stress testing strategies before and after launch: historical crisis replays, shocked correlations, liquidity drying up and capacity limits."
          projects:
            - name: Stress testing scope for live and candidate strategies
              description: |-
                ## Purpose
                Stress work drifts when nobody has written down which strategies are covered, what counts as a severe loss and who reads the results. Listing every live and candidate strategy with its capital, instruments, holding period and owner gives the rest of this area a fixed target and shows which strategy has never been stressed at all.

                ## Milestones
                1. Every live, paper and candidate strategy listed with capital, instruments, typical holding period and owner.
                2. Each strategy marked as stressed, partly stressed or never stressed.
                3. The reader of stress results named for each strategy, such as yourself, a portfolio manager or a risk team.
                4. A first priority order for stress work agreed and saved.

                ## Notes
                Include strategies still in research. The cheapest time to find a fatal stress result is before any code reaches production.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A scope table covering every live and candidate strategy, each marked with its stress coverage, owner and the person who reads its results."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every live, paper and candidate strategy in one table"
                - "Record capital, instruments and holding period for each strategy"
                - "Mark which strategies have ever been stress tested"
                - "Rank the strategies by how much damage an untested failure could do"
            - name: Loss tolerance and written stop rule per strategy
              description: |-
                ## Purpose
                Stress results mean nothing without a line they are measured against. Writing down, before any test runs, the largest loss each strategy is allowed over a day, a month and peak to trough, and the rule that pauses or stops it, keeps later results from being explained away when they look bad.

                ## Milestones
                1. A maximum daily loss, monthly loss and peak to trough drawdown written for each strategy.
                2. A stop rule stating exactly what happens when each limit is hit: reduce, pause or retire.
                3. The person who carries the risk has agreed the limits in writing.
                4. Limits and stop rules saved where every stress report can quote them.

                ## Notes
                Write the stop rule as a mechanical instruction, not a judgement call. If it needs a meeting to decide, it will be decided too late.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Each strategy in scope has a written daily, monthly and drawdown loss limit and a mechanical stop rule, agreed with the risk owner."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft a daily, monthly and drawdown loss limit for your largest strategy"
                - "Write the stop rule as an exact action for each limit"
                - "Send the limits to the person who carries the risk for sign-off"
                - "Reread every stop rule and confirm it still matches the capital @recurring(quarterly)"
            - name: Exposure map of each strategy's hidden bets
              description: |-
                ## Purpose
                A market-neutral equity strategy can still be short volatility, long liquidity and heavily exposed to one crowded factor, and those hidden bets are exactly what a crisis finds. Mapping each strategy's exposures to market, sector, factor, rates, currency, volatility and liquidity shows which shocks matter before choosing any scenario.

                ## Milestones
                1. Average and peak exposures to market, sector, style factors, rates and currency recorded for each strategy.
                2. Implicit exposures to volatility and liquidity described in a sentence each.
                3. The three exposures most likely to hurt each strategy in a crisis named.
                4. The map saved beside the scope table and dated.

                ## Notes
                Regress strategy returns on a handful of factor returns as a quick first pass, then check the answer against the positions themselves.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A dated exposure map for every in-scope strategy naming its three most dangerous exposures, checked against actual positions."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Regress one strategy's daily returns on five common factor returns"
                - "Compare the regression exposures with the strategy's actual positions"
                - "Write one sentence on each strategy's volatility and liquidity exposure"
                - "Name the three exposures most likely to hurt each strategy"
            - name: Position and trade history for stress replays
              description: |-
                ## Purpose
                Replaying a crisis needs the positions the strategy would really have held, not today's book pushed through 2008 prices. Rebuilding a point-in-time history of positions, trades and signals, from the backtest for candidates and from records for live strategies, is the raw material every replay depends on.

                ## Milestones
                1. Daily positions by instrument stored for the full backtest or live period of each strategy.
                2. Trades and signals stored with timestamps so turnover in a stress window can be measured.
                3. Positions reconciled against broker or backtest records for at least one month.
                4. Storage format, location and version recorded in a short readme.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A versioned point-in-time position and trade history exists for each in-scope strategy, reconciled for at least one month and documented."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Export daily positions for one strategy from the backtest or broker"
                - "Store trades with timestamps next to the positions"
                - "Reconcile one month of positions against the source records"
                - "Write a readme naming the format, location and data version"
            - name: Crisis episode catalogue with dated windows
              description: |-
                ## Purpose
                Everyone says they tested against 2008, but few write down which dates, which markets and what data they used. A catalogue of ten to fifteen episodes, such as autumn 1998, the August 2007 quant unwind, autumn 2008, the May 2010 flash crash, the January 2015 Swiss franc move, February 2018, March 2020 and the 2022 rates shock, with exact start and end dates, makes every replay repeatable.

                ## Milestones
                1. Ten to fifteen episodes listed with exact start and end dates and a one-line description.
                2. Each episode tagged with the markets and exposures it hit hardest.
                3. Data availability checked for each episode and gaps noted.
                4. Episodes most relevant to each strategy marked from the exposure map.

                ## Notes
                Add at least one episode that hurt your style of strategy specifically, not only the famous market crashes. A momentum strategy, for example, should include a sharp reversal such as spring 2009.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A catalogue of at least ten dated crisis episodes, each with markets affected, data availability and the strategies it applies to."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write down ten crisis episodes with exact start and end dates"
                - "Tag each episode with the markets and exposures it hit hardest"
                - "Check whether your data covers each episode for every instrument"
                - "Mark which episodes apply to each strategy"
            - name: Stress tooling choice for a research setup
              description: |-
                ## Purpose
                Stress tests run in a spreadsheet one quarter and a notebook the next cannot be compared or rerun. Deciding where stress code lives, whether a shared library, a module beside the backtester or a vendor system, and how runs are stored, means monthly reruns take minutes rather than a day.

                ## Milestones
                1. Two or three tooling options compared on rerun time, auditability and cost.
                2. A choice recorded with the reasons in a short decision note.
                3. One existing stress test ported to the chosen tool and reproducing its old result.
                4. Run outputs stored with the code version and data version that produced them.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written tooling decision exists and one earlier stress test has been reproduced in the chosen tool with code and data versions stored."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List where your past stress tests currently live"
                - "Compare two tooling options on rerun time and auditability"
                - "Record the choice and reasons in a decision note"
                - "Port one old stress test and confirm it reproduces the same loss"
            - name: Standard stress report format and severity scale
              description: |-
                ## Purpose
                Readers ignore stress results when every report looks different and nobody can tell a mild loss from a fatal one. One page per strategy, with the same scenarios in the same order, losses shown against the written limits and a three-level severity colour, lets a reader see in a minute whether anything needs action.

                ## Milestones
                1. A one-page layout agreed: scenario, loss, loss as a share of limit, days to recover, severity.
                2. A three-level severity scale defined in terms of the written loss limits.
                3. A first report produced for one strategy in the new format.
                4. The reader of that report confirms they can act on it without asking questions.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page stress report format with a defined severity scale exists and a reader has acted on the first report without needing clarification."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Sketch the one-page layout with columns for loss and share of limit"
                - "Define the three severity levels in terms of the loss limits"
                - "Produce the first report for your largest strategy"
                - "Ask the reader what they would do after reading it"
            - name: Baseline drawdown and loss profile before stressing
              description: |-
                ## Purpose
                Without a baseline, a stressed loss of eight percent could be alarming or ordinary for the strategy. Recording the unstressed picture first, the backtest and live drawdown distribution, worst days, worst months and recovery times, gives every stress result a reference point and exposes strategies whose ordinary losses already sit close to the limits.

                ## Milestones
                1. Worst ten days, worst five months and maximum drawdown recorded for each strategy.
                2. Time to recover from the three largest drawdowns measured.
                3. Live drawdowns compared with backtest drawdowns where live history exists.
                4. Strategies whose ordinary losses already approach their limits flagged.

                ## Notes
                Backtest drawdowns are almost always too shallow. Treat them as a floor, not an estimate.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A baseline table of worst days, worst months, maximum drawdown and recovery time exists for each in-scope strategy, with near-limit strategies flagged."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pull the worst ten days and worst five months for one strategy"
                - "Measure recovery time for its three largest drawdowns"
                - "Set live drawdowns beside backtest drawdowns"
                - "Flag any strategy whose normal losses sit near its limits"
            - name: Pre-launch stress gate criteria
              description: |-
                ## Purpose
                Strategies tend to reach production because the backtest looks good and the researcher is tired of waiting, not because they survived a stress review. Writing the gate in advance, which scenarios must run, which losses are acceptable and who signs off, turns launch into a check against a standard rather than a negotiation.

                ## Milestones
                1. A required scenario list for any new strategy written and dated.
                2. Pass, conditional pass and fail thresholds set against the loss limits.
                3. A named sign-off owner for the gate.
                4. The gate applied retrospectively to one live strategy to test that it is workable.

                ## Notes
                Include a capacity check and a doubled-cost check in the gate. They catch more weak strategies than crisis replays do.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written launch gate with required scenarios, pass and fail thresholds and a named sign-off owner, tested on one existing strategy."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the scenarios every new strategy must run before launch"
                - "Set pass, conditional pass and fail thresholds against loss limits"
                - "Name the person who signs off the gate"
                - "Apply the gate to one live strategy and note what it would have caught"
            - name: Monthly stress run for live strategies
              description: |-
                ## Purpose
                Positions, exposures and market conditions change every month, so last quarter's stress result describes a strategy that no longer exists. A fixed monthly run of the full scenario set on current positions, followed by a short note, keeps the results current and makes a deteriorating trend visible early.

                ## Milestones
                1. The full scenario set runs on current positions on a fixed day each month.
                2. Results saved in the standard report format and the results log.
                3. A short note sent to the risk owner highlighting any change in severity.
                4. Three consecutive months completed without a missed run.

                ## Notes
                Run on a fixed day even when markets are quiet. Quiet months are when positions quietly grow into their limits.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The full scenario set has run on current positions every month for three consecutive months, each followed by a note to the risk owner."
                cadence: rolling
              tasks:
                - "Choose the fixed day each month for the stress run"
                - "Run the full scenario set on current positions @recurring(monthly:9)"
                - "Send the risk owner a note on any change in severity @recurring(monthly:10)"
                - "Save the code and data versions used for each run"
            - name: Weekly liquidity and crowding watch
              description: |-
                ## Purpose
                Liquidity rarely disappears without warning: average volumes thin, spreads widen and the same names appear in every crowding report first. A short weekly look at days to liquidate, spread levels and crowding indicators for each strategy's largest positions catches a deteriorating exit before it is needed.

                ## Milestones
                1. Days to liquidate the largest twenty positions calculated weekly at an assumed participation rate.
                2. Spreads for those positions compared with their own six-month average.
                3. Any public or vendor crowding indicator for the strategy's main exposures checked.
                4. Positions that cross a days to liquidate threshold logged for action.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly record of days to liquidate, spreads and crowding signals exists for each strategy's largest positions, with threshold breaches logged."
                cadence: rolling
              tasks:
                - "Set an assumed participation rate and a days to liquidate threshold"
                - "Calculate days to liquidate for the twenty largest positions @recurring(weekly:mon)"
                - "Check spreads and crowding signals for the main exposures @recurring(weekly:thu)"
                - "Log any position over the threshold with a proposed action"
            - name: Quarterly scenario set refresh
              description: |-
                ## Purpose
                Scenario sets frozen two years ago miss the shocks the market now worries about and keep testing ones the strategies no longer care about. Reviewing it each quarter against the exposure map and recent events, adding at most a few scenarios and retiring stale ones with a reason, keeps the set relevant without letting it bloat.

                ## Milestones
                1. The scenario set reviewed against the latest exposure map.
                2. New scenarios added with a written rationale and dated calibration.
                3. Retired scenarios kept in an archive with the reason for retirement.
                4. The updated set versioned so past results remain comparable.

                ## Notes
                Never retire a scenario because a strategy fails it. That is the scenario doing its job.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "The scenario set carries a quarterly version with additions and retirements each explained in writing."
                cadence: cyclic
              tasks:
                - "Compare the scenario set with the latest exposure map"
                - "Review the scenario set and record additions and retirements @recurring(quarterly)"
                - "Archive retired scenarios with the reason"
                - "Tag the new version of the set before the next monthly run"
            - name: Stress results log and trend over time
              description: |-
                ## Purpose
                One stress number is a snapshot; twelve months of them show whether a strategy is drifting toward its limits. Keeping every scenario loss for every strategy in one log, with the scenario version beside it, turns monthly runs into a trend you can chart and question.

                ## Milestones
                1. One log holding every monthly scenario loss per strategy with dates and versions.
                2. A chart of the worst scenario loss over time for each strategy.
                3. Any strategy whose worst stress loss has risen three months running highlighted.
                4. The log backed up and readable by someone else.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A log of monthly stress losses per strategy exists with a trend chart, and rising trends over three months are highlighted."
                cadence: rolling
              tasks:
                - "Set up the log with columns for date, strategy, scenario, version and loss"
                - "Load past stress results you can still find"
                - "Update the trend chart and flag rising losses @recurring(monthly:12)"
                - "Share read access with the risk owner"
            - name: Re-stress triggers after strategy changes
              description: |-
                ## Purpose
                Adding a signal, widening the universe or changing rebalance frequency can alter a strategy's stress profile more than any market move. Defining which changes require a fresh stress run before they go live, and checking the change log for them, stops small tweaks from quietly invalidating the last sign-off.

                ## Milestones
                1. A list of change types that trigger a fresh stress run, such as universe, signal, sizing or holding period changes.
                2. The trigger list added to the strategy change process.
                3. Every change in the last quarter checked against the list.
                4. Any change that went live without a re-stress run retrospectively.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written list of re-stress triggers is part of the change process and no triggered change in the last quarter remains unstressed."
                cadence: rolling
              tasks:
                - "Write the change types that require a fresh stress run"
                - "Add the trigger list to your change checklist"
                - "Check the change log for triggered changes without a stress run @recurring(monthly:20)"
                - "Rerun stresses for any change that slipped through"
            - name: Same-day stress check after a large market move
              description: |-
                ## Purpose
                When an index falls five percent or a currency gaps overnight, the monthly run is too slow and everyone wants to know the exposure now. A predefined fast check, the move size that triggers it, the three scenarios that run and who receives the result, means the answer arrives in an hour rather than after a scramble.

                ## Milestones
                1. Trigger thresholds defined for equity, rates, currency and volatility moves.
                2. A short fast-check script that runs the most relevant scenarios on live positions.
                3. Recipients and a two-line message format agreed.
                4. The fast check tested end to end on a past large move.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A fast-check procedure with defined triggers has been tested on a past market move and produced a result within one hour."
                cadence: rolling
              tasks:
                - "Define the move sizes that trigger a same-day stress check"
                - "Choose the three scenarios the fast check runs"
                - "Agree recipients and a two-line message format"
                - "Time a test run of the fast check on a past large move"
            - name: Capacity headroom monitor
              description: |-
                ## Purpose
                Size hurts quietly: a strategy that was fine at its launch size can become untradeable at three times the capital, and the cost shows up as slow decay rather than one bad day. Tracking traded size against market volume and estimated impact each month shows how much headroom remains before stressed liquidity makes exits ruinous.

                ## Milestones
                1. Current capital and estimated capacity recorded for each strategy.
                2. Average participation in daily volume measured per strategy each month.
                3. Estimated impact cost under normal and stressed volume compared with expected return.
                4. A headroom figure, capacity minus current capital, reported each month.

                ## Notes
                Estimate capacity under stressed volume, not average volume. Capacity is lowest exactly when you need to exit.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly headroom figure per strategy is recorded, based on participation and impact under both normal and stressed volume."
                cadence: rolling
              tasks:
                - "Record current capital and a first capacity estimate per strategy"
                - "Measure average participation in daily volume per strategy"
                - "Update headroom under normal and stressed volume @recurring(monthly:17)"
                - "Flag any strategy with less than a quarter of capacity left"
            - name: Annual stress methodology review
              description: |-
                ## Purpose
                Methods built up month by month accumulate shortcuts, stale calibrations and scenarios nobody remembers the reason for. Once a year, reviewing the whole approach, from data and scenario design to correlation shocks, liquidity assumptions and how results fed decisions, keeps the process honest and gives anyone reviewing it a single document.

                ## Milestones
                1. Every method in use described in one methodology document.
                2. Each assumption, such as participation rate or correlation shock size, checked against the past year's evidence.
                3. Cases where stress results changed a decision, and cases where they were ignored, listed.
                4. Three improvements chosen for the coming year.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "An updated methodology document exists with each assumption checked against the past year and three improvements chosen."
                cadence: cyclic
                effort_hours_estimate: "10"
              tasks:
                - "Collect last year's stress reports and decision notes"
                - "Check each key assumption against what markets actually did"
                - "List where stress results changed or failed to change a decision"
                - "Rewrite the methodology document and pick three improvements @recurring(yearly)"
            - name: Stress breach escalation and action log
              description: |-
                ## Purpose
                Red results that are noted and then forgotten are worse than no test, because they create a record that someone knew. Logging every breach of a stress threshold with the action taken, the owner and the date closed means each one is either fixed, accepted in writing or acted on through the stop rule.

                ## Milestones
                1. An escalation path written for each severity level.
                2. Every breach since the first monthly run entered with owner and action.
                3. Each breach closed as fixed, accepted in writing or escalated.
                4. No breach open for more than one month without a recorded reason.

                ## Notes
                Start from the **Risk register** template.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every stress breach is logged with an owner and outcome, and none has stayed open beyond a month without a written reason."
                cadence: rolling
              tasks:
                - "Write the escalation path for each severity level"
                - "Enter every past breach you can find with its outcome"
                - "Review open breaches and chase their owners @recurring(monthly:25)"
                - "Record a written acceptance for any breach left unchanged"
            - name: Historical replay methods compared
              description: |-
                ## Purpose
                There are several ways to replay a crisis: repricing today's positions with the episode's returns, replaying the strategy's own simulated trades through the period, or mapping the episode to factor moves. Each answers a different question, and learning when each one misleads stops a single method from giving false comfort.

                ## Milestones
                1. Position repricing, full strategy replay and factor mapping each run on one episode.
                2. The three answers compared and the gaps between them explained.
                3. A note on which method suits which question, such as current book risk or strategy design risk.
                4. The preferred method for each report recorded in the methodology document.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One crisis episode has been replayed three ways, the differences are explained in writing and the method choice for each report is recorded."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Reprice today's positions with one episode's daily returns"
                - "Replay the strategy's simulated trades through the same episode"
                - "Map the episode to factor moves and apply them to current exposures"
                - "Write a note explaining why the three losses differ"
            - name: Writing plausible hypothetical scenarios
              description: |-
                ## Purpose
                History offers a limited menu of crises, and the next one will not be a copy. Learning to write hypothetical scenarios with a narrative, a consistent set of market moves across assets and a stated probability judgement fills the gaps the catalogue leaves, such as a sharp move in a market that has been calm for years.

                ## Milestones
                1. Three hypothetical scenarios written, each with a one-paragraph narrative.
                2. Market moves for each scenario set consistently across equities, rates, currency, volatility and credit.
                3. Each scenario checked against history for whether the move sizes are plausible.
                4. The scenarios added to the scenario set with their reasoning.

                ## Notes
                Write the story first and derive the moves from it. Scenarios that start as a list of numbers are rarely internally consistent.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Three narrative-led hypothetical scenarios with consistent cross-asset moves and a plausibility check are in the scenario set."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write a one-paragraph story for a shock your strategies have never seen"
                - "Set equity, rates, currency, volatility and credit moves for the story"
                - "Compare each move size with the largest similar moves in history"
                - "Add the scenario to the set with its narrative"
            - name: Correlation shock methods that keep matrices valid
              description: |-
                ## Purpose
                Correlations rise toward one in a sell-off, and diversified strategies lose more than any calm-period estimate suggests. Learning to shock correlations properly, by blending toward a stressed matrix, using crisis-period estimates or repairing a hand-edited matrix to the nearest valid one, avoids the common mistake of a shocked matrix that is not positive semidefinite and gives nonsense.

                ## Milestones
                1. A crisis-period correlation matrix estimated and compared with the calm-period one.
                2. A blended matrix produced at several stress weights and its eigenvalues checked.
                3. A nearest valid correlation matrix routine applied to one hand-edited matrix.
                4. The strategy's stressed volatility under each method recorded.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Stressed strategy volatility has been computed under three correlation shock methods, each with a matrix verified as positive semidefinite."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Estimate correlations over one crisis window and one calm window"
                - "Blend the two matrices at three stress weights"
                - "Check every shocked matrix for negative eigenvalues"
                - "Repair one hand-edited matrix with a nearest correlation routine"
            - name: Liquidity drought modelling for exits
              description: |-
                ## Purpose
                In a crisis, volumes can halve while spreads double, and the loss on exit can exceed the price move itself. Learning to model an exit under stressed liquidity, with lower volume, wider spreads and a capped participation rate, shows how long a strategy really needs to get flat and what that costs.

                ## Milestones
                1. Spread and volume behaviour measured for the strategy's universe in two past crises.
                2. A stressed exit model built using reduced volume, wider spreads and a participation cap.
                3. Days to flat and exit cost estimated for current positions under the stressed model.
                4. The exit cost added as a line in the standard stress report.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Days to flat and exit cost under stressed liquidity are estimated for current positions and appear in the stress report."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Measure how spreads and volumes changed for your universe in two crises"
                - "Build an exit model with reduced volume and a participation cap"
                - "Estimate days to flat and exit cost for current positions"
                - "Add the exit cost line to the stress report"
            - name: Market impact under stress and capacity estimates
              description: |-
                ## Purpose
                Capacity estimates usually assume normal impact, yet impact per unit traded rises sharply when everyone is selling. Working through impact models, such as the widely used square root relationship between size and impact, and recalibrating them to crisis data turns a vague capacity number into a range with stated assumptions.

                ## Milestones
                1. One impact model implemented and calibrated to normal-period trading costs.
                2. The same model recalibrated with crisis-period volatility and volume.
                3. Capacity estimated under both calibrations for one strategy.
                4. The assumptions behind each capacity figure written beside it.

                ## Notes
                Your own fills are better calibration data than any published coefficient. Use published figures only until you have enough of your own.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A capacity range for one strategy exists under normal and crisis impact calibrations, with assumptions documented."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Implement one impact model on your own fill data"
                - "Recalibrate it with crisis-period volatility and volume"
                - "Estimate capacity for one strategy under both calibrations"
                - "Write the assumptions beside each capacity figure"
            - name: Breaking-point search for a single strategy
              description: |-
                ## Purpose
                Forward stress tests ask how much a scenario costs; a breaking-point search asks which combination of moves would hit the stop rule, and how far from today that combination sits. Searching for the smallest shock that breaches a strategy's drawdown limit often reveals a weakness no historical episode would have shown.

                ## Milestones
                1. The loss that triggers the strategy's stop rule taken as the target.
                2. The smallest combination of factor, correlation and liquidity shocks reaching that loss found.
                3. That combination compared with historical moves to judge how plausible it is.
                4. The finding and any mitigation written into the strategy's stress file.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The smallest shock combination that breaches one strategy's stop rule is identified, compared with history and recorded with a mitigation."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Take the stop-rule loss for one strategy as the target"
                - "Search over factor, correlation and liquidity shocks for the smallest breach"
                - "Compare the breaking shock with the largest historical moves"
                - "Write the finding and mitigation into the strategy's stress file"
            - name: Block bootstrap of crisis-period returns
              description: |-
                ## Purpose
                A handful of historical episodes is a small sample, and a strategy can pass all of them by luck of timing. Resampling blocks of crisis-period returns, keeping the clustering of bad days, produces a distribution of stressed drawdowns rather than a few point estimates, and shows how often the stop rule would be hit.

                ## Milestones
                1. Crisis-period returns pooled for the strategy's instruments.
                2. A block bootstrap generating several thousand stressed paths with a chosen block length.
                3. The distribution of maximum drawdown across paths summarised.
                4. The share of paths that breach the stop rule recorded.

                ## Notes
                Test two or three block lengths. Results that change sharply with block length are telling you the sample is too small.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A bootstrapped drawdown distribution exists for one strategy with the share of paths breaching its stop rule recorded for at least two block lengths."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Pool crisis-period daily returns for the strategy's instruments"
                - "Generate several thousand paths with a block bootstrap"
                - "Summarise maximum drawdown across the paths"
                - "Repeat with a second block length and compare"
            - name: Case studies of strategy blow-ups
              description: |-
                ## Purpose
                Most quant failures rhyme: crowded positions, gearing, funding withdrawn and liquidity assumed to be there. Reading well-documented cases, such as the 1998 convergence trade collapse, the August 2007 quant equity unwind and the 2018 short volatility losses, and writing what each would mean for your own strategies, builds intuition that no scenario file captures.

                ## Milestones
                1. Five documented blow-ups chosen, with at least two in your strategy style.
                2. Each case summarised in half a page: exposure, trigger, amplifier and outcome.
                3. For each case, the nearest equivalent risk in your strategies named.
                4. At least one new scenario or check added from the reading.

                ## Notes
                Start from the **Reading queue** template.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five blow-up case notes exist, each linked to a named risk in your strategies, and at least one new scenario has come from them."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Pick five documented strategy blow-ups to study"
                - "Summarise each case's exposure, trigger, amplifier and outcome"
                - "Name the nearest equivalent risk in your own strategies"
                - "Add one scenario or check suggested by the reading"
            - name: Stress-adjusted position sizing rule
              description: |-
                ## Purpose
                Sizing by recent volatility alone makes a strategy biggest just before volatility returns. Adding a stress constraint, so that no position or strategy can be large enough for its worst scenario loss to exceed a set share of the drawdown limit, links sizing directly to what the stress tests found.

                ## Milestones
                1. The current sizing rule written down exactly as it works.
                2. A stress cap defined: worst scenario loss must stay below a stated share of the drawdown limit.
                3. The effect of the cap on past positions and backtest returns measured.
                4. The new rule agreed with the risk owner and documented.

                ## Notes
                Expect the cap to cost some backtest return. That cost is the price of surviving the scenarios, so record it rather than tuning it away.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A sizing rule with a written stress cap is agreed with the risk owner, with its effect on historical positions measured."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write down the current sizing rule exactly as coded"
                - "Define the stress cap as a share of the drawdown limit"
                - "Measure the cap's effect on past positions and returns"
                - "Review whether the cap still binds where expected @recurring(quarterly)"
            - name: Gross and net limits set from stress losses
              description: |-
                ## Purpose
                Gross exposure and gearing limits are often inherited numbers that nobody can justify. Deriving them from the stress results, the gross and net exposure at which the worst plausible scenario would reach the drawdown limit, gives each limit a reason that can be checked and revised.

                ## Milestones
                1. Current gross, net and gearing limits listed with their origin.
                2. Stress loss per unit of gross and net exposure estimated for each strategy.
                3. Limits derived from the drawdown limit and the worst plausible scenario.
                4. Old and new limits compared and the change agreed in writing.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Gross, net and gearing limits for each strategy are derived from stress losses and agreed in writing with the risk owner."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List current gross, net and gearing limits and where they came from"
                - "Estimate stress loss per unit of gross and net exposure"
                - "Derive limits from the drawdown limit and worst scenario"
                - "Recheck the derived limits against the latest stress run @recurring(quarterly)"
            - name: Margin call and funding stress test
              description: |-
                ## Purpose
                Strategies that survive a price shock can still be forced out by margin: exchanges and brokers raise requirements in volatile markets, often at the worst moment. Testing what happens when initial margin doubles, haircuts widen and funding costs jump shows whether the strategy would be closed by its own cash position.

                ## Milestones
                1. Current margin and funding requirements recorded for each strategy.
                2. A scenario with doubled margin, wider haircuts and higher funding cost applied.
                3. The cash buffer needed to survive that scenario without forced selling calculated.
                4. The required buffer compared with what is actually held, with any gap escalated.

                ## Notes
                Margin rises and price shocks arrive together. Run them in the same scenario, not as separate tests.
              priority: high
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each geared strategy has a calculated cash buffer for a doubled-margin scenario, compared with actual cash and any gap escalated."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Record current margin and funding terms for each strategy"
                - "Apply a doubled-margin and wider-haircut scenario"
                - "Calculate the cash buffer needed to avoid forced selling"
                - "Check broker and exchange margin notices for changes @recurring(monthly:5)"
            - name: Broker or prime broker failure scenario
              description: |-
                ## Purpose
                Counterparty failure is rare but has happened to well-run funds, and the damage comes from frozen assets and lost hedges rather than price moves. Working through what happens if a broker or clearing firm fails, which positions are stuck, which hedges vanish and how long assets take to recover, shows whether one failure could stop every strategy at once.

                ## Milestones
                1. Assets and positions held at each broker and custodian mapped by strategy.
                2. A scenario written in which the largest counterparty cannot be accessed for several weeks.
                3. Unhedged exposure and trapped cash under that scenario estimated.
                4. Mitigations such as a second broker or tighter cash sweeps noted for the risk owner.

                ## Notes
                Check account protections and segregation terms with the broker and your adviser. They differ by country and account type.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written counterparty failure scenario exists with trapped assets and unhedged exposure estimated and mitigations proposed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Map positions and cash at each broker by strategy"
                - "Write a scenario where the largest broker is inaccessible for weeks"
                - "Estimate unhedged exposure and trapped cash"
                - "List mitigations for the risk owner to consider"
            - name: Exchange halt and data outage drill
              description: |-
                ## Purpose
                Some of the worst losses come from operations rather than markets: a stale data feed, a halted exchange, a kill switch that fails when pressed. Running a drill in a test environment, cutting the feed, halting a venue and pressing the kill switch, checks that the strategy stops safely and that you know what to do by hand.

                ## Milestones
                1. A drill plan covering stale data, a venue halt and a kill switch test.
                2. The drill run in a test or paper environment with timings recorded.
                3. Every step that failed or was slower than expected logged.
                4. Fixes made and the manual fallback steps written on one page.

                ## Notes
                Start from the **Operational checklist** template. Never run the drill against live orders.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "An outage drill has run in a test environment, failures are logged and fixed, and a one-page manual fallback exists."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Write a drill plan for stale data, a halt and the kill switch"
                - "Run the drill in a paper environment and time each step"
                - "Fix what failed and write the manual fallback on one page"
                - "Repeat the outage drill in the test environment @recurring(quarterly)"
            - name: Testing whether the hedge holds in a crisis
              description: |-
                ## Purpose
                Hedges are chosen in calm markets and judged in crises, when basis risk, correlation breaks and illiquid hedge instruments can leave a hedged strategy as exposed as an unhedged one. Replaying each hedge through the crisis catalogue shows whether it delivered when it was needed.

                ## Milestones
                1. Each hedge listed with the exposure it is meant to offset.
                2. Hedged and unhedged results compared in each relevant crisis episode.
                3. Hedge effectiveness in crises compared with its effectiveness in calm periods.
                4. Hedges that failed in crises flagged with an alternative to research.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Crisis-period hedge effectiveness is measured for each hedge and compared with calm-period effectiveness, with failures flagged."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List each hedge with the exposure it is meant to offset"
                - "Compare hedged and unhedged losses in each relevant episode"
                - "Set crisis effectiveness beside calm-period effectiveness"
                - "Flag hedges that failed and note one alternative for each"
            - name: Stress comparison between two candidate strategies
              description: |-
                ## Purpose
                Two strategies with similar backtest Sharpe ratios can have very different failure modes, and research time usually allows only one to go forward. Running both through the same scenarios, liquidity tests and capacity estimates, side by side, makes the choice on how they fail as well as how they perform.

                ## Milestones
                1. Both candidates run through the same scenario set and version.
                2. Worst scenario loss, stressed exit cost and capacity compared in one table.
                3. Correlation of each candidate's stress losses with existing live strategies checked.
                4. A choice recorded with the stress reasons stated.

                ## Notes
                Prefer the candidate whose worst losses do not coincide with your existing strategies' worst losses, even at a lower backtest return.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A side-by-side stress table for two candidates exists and the choice between them is recorded with stress-based reasons."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Run both candidates through the same scenario set version"
                - "Build a table of worst loss, exit cost and capacity"
                - "Check overlap of each candidate's stress losses with live strategies"
                - "Record the choice and its stress reasons"
            - name: Doubled cost and slippage stress
              description: |-
                ## Purpose
                Cost assumptions are the most optimistic number in most backtests, and in stressed markets they are wrong in the same direction for everyone. Rerunning each strategy with doubled and tripled costs and slippage shows which ones have a real margin of safety and which only work if trading stays cheap.

                ## Milestones
                1. Each strategy rerun with costs and slippage at two and three times the base assumption.
                2. Net return and drawdown recorded at each cost level.
                3. The cost multiple at which each strategy stops being worth running found.
                4. Strategies with less than a doubling of cost headroom flagged.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each strategy's break-even cost multiple is recorded and strategies with under twice the base cost headroom are flagged."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Rerun one strategy with costs at twice the base assumption"
                - "Repeat at three times and record return and drawdown"
                - "Find the cost multiple at which the strategy stops being worthwhile"
                - "Flag every strategy with under twice the base cost headroom"
            - name: Pre-launch stress review meeting
              description: |-
                ## Purpose
                A launch decision made in a hallway leaves no record of what was known and accepted. A short, dated review where the researcher presents the gate results, the worst scenarios and the stop rule, and the risk owner records a decision, gives the strategy a clean starting point and a reference when it later goes wrong.

                ## Milestones
                1. The gate pack prepared: scenario results, liquidity and capacity, cost stress and stop rule.
                2. A review held with the risk owner on a fixed date.
                3. The decision recorded as launch, launch smaller or do not launch, with conditions.
                4. Conditions entered as dated actions in the breach log.

                ## Notes
                Start from the **Meeting notes** template.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A dated launch review has taken place with written results, a recorded decision and any conditions logged as actions."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Book the review with the risk owner for a fixed date"
                - "Assemble the gate pack for the candidate strategy"
                - "Record the decision and any conditions in the meeting notes"
                - "Enter each condition as a dated action"
            - name: Stress test pack for an allocator due diligence
              description: |-
                ## Purpose
                Allocators and investors increasingly ask how a strategy behaves in specific crises and what the manager does when limits are hit. Preparing a clear pack of methodology, scenario results, liquidity terms and the stop rule ahead of the request shows the process exists, and saves a frantic week of reruns when the questionnaire arrives.

                ## Milestones
                1. A methodology summary of two pages written for an outside reader.
                2. Scenario results for the main crisis episodes presented consistently.
                3. Liquidity, capacity and stop-rule sections drafted.
                4. The pack reviewed by compliance or legal before anything is shared externally.

                ## Notes
                Show stress losses as losses. Results presented to look reassuring tend to prompt harder questions, and any external material should go through whoever approves your communications.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A reviewed stress pack with methodology, scenario results, liquidity and stop-rule sections is ready before any allocator request arrives."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Collect the last allocator questions about stress and liquidity"
                - "Write a two-page methodology summary for an outside reader"
                - "Present crisis scenario results in one consistent table"
                - "Send the draft pack for compliance or legal review"
            - name: Stress sign-off before raising strategy capital
              description: |-
                ## Purpose
                Adding capital to a strategy that has done well is the moment its stress profile matters most, because the size that worked may not exit at the new size. Rerunning liquidity, capacity and scenario tests at the proposed capital, and getting a written sign-off before the change, stops success from becoming the cause of the next large loss.

                ## Milestones
                1. The proposed new capital and sizing written down.
                2. Scenario losses, exit cost and days to flat recomputed at the new size.
                3. Capacity headroom at the new size confirmed or the increase reduced.
                4. Written sign-off from the risk owner before any capital is added.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "Stress, liquidity and capacity results at the proposed size are documented and signed off before the capital increase takes effect."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write down the proposed new capital and sizing"
                - "Recompute scenario losses and exit cost at the new size"
                - "Confirm capacity headroom or reduce the increase"
                - "Get written sign-off before capital is added"
            - name: Drawdown post-mortem against stress predictions
              description: |-
                ## Purpose
                Every real drawdown is a free test of the stress process: did a scenario predict something like it, and if not, why not? A structured post-mortem after any drawdown beyond a set size compares what happened with what the stress tests said, and feeds the gaps back into scenarios and methods.

                ## Milestones
                1. The drawdown's size, duration and drivers described from the positions.
                2. The nearest stress scenario and its predicted loss set beside the real loss.
                3. Each gap explained as a missing scenario, a wrong assumption or a model limit.
                4. At least one change to scenarios or methods made as a result.

                ## Notes
                Hold the post-mortem within two weeks of the drawdown, while positions and decisions are still remembered accurately.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A written post-mortem compares the real drawdown with stress predictions, explains each gap and leads to at least one recorded change."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Set the drawdown size that triggers a post-mortem"
                - "Describe the drawdown's drivers from the positions"
                - "Compare the real loss with the nearest scenario's predicted loss"
                - "Change one scenario or method based on the gap"
            - name: Stress briefing ahead of a known event risk
              description: |-
                ## Purpose
                Elections, central bank decisions, index rebalances and referendum votes arrive on known dates, and markets can gap on the result. A short briefing a week ahead, with the strategy's exposure to each plausible outcome and any planned reduction, means the decision on whether to carry the risk is made calmly rather than overnight.

                ## Milestones
                1. The event, its date and its plausible outcomes listed.
                2. A simple scenario for each outcome applied to current positions.
                3. A decision recorded to hold, reduce or hedge, with the reason.
                4. The actual outcome and loss compared with the briefing afterwards.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A briefing with outcome scenarios and a recorded hold, reduce or hedge decision exists before the event, with a comparison written afterwards."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the next scheduled event that could move your markets"
                - "Write a simple scenario for each plausible outcome"
                - "Record a hold, reduce or hedge decision with the reason"
                - "Compare the actual outcome with the briefing afterwards"
            - name: Lightweight stress routine for a solo researcher
              description: |-
                ## Purpose
                Working alone means no risk team, no second reader and limited hours, so a full institutional process will simply not happen. A cut-down routine, five scenarios, one liquidity check and the stop rule reread on a fixed day each month, keeps the essential discipline within an hour.

                ## Milestones
                1. Five scenarios chosen that cover the strategy's main exposures.
                2. One script that runs them and the liquidity check together.
                3. A monthly hour booked and kept for three months.
                4. A quarterly look back at whether the routine caught anything.

                ## Notes
                Ask a trusted peer to read your stress results once a quarter. A second reader catches the assumption you stopped seeing.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A five-scenario monthly routine has run on a fixed day for three months, with a quarterly review of what it caught."
                cadence: rolling
              tasks:
                - "Choose five scenarios that cover your strategy's main exposures"
                - "Combine the scenarios and liquidity check in one script"
                - "Run the routine and reread the stop rule @recurring(monthly:28)"
                - "Look back at what the routine caught this quarter @recurring(quarterly)"
            - name: Stress testing a personal trading account strategy
              description: |-
                ## Purpose
                Personal algorithmic strategies rarely have a risk owner, and the real constraint is the money you can afford to lose. Applying a short set of crisis replays, an overnight gap scenario and a broker margin change to the account, and comparing each loss with a written personal loss limit, decides whether the strategy is sized for your life rather than the backtest.

                ## Milestones
                1. A personal maximum loss written in money terms, using only capital you can afford to lose.
                2. Three crisis replays and an overnight gap scenario run on the account's positions.
                3. Each loss compared with the personal limit and sizing reduced if any exceeds it.
                4. A monthly rerun scheduled alongside the account review.

                ## Notes
                This is organisation, not advice. Check margin terms and product risks with your broker, and speak to a licensed adviser before trading with money you need.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A personal loss limit is written and every scenario loss on the account is at or below it, with a monthly rerun in place."
                cadence: rolling
              tasks:
                - "Write your personal maximum loss in money terms"
                - "Run three crisis replays and an overnight gap on your positions"
                - "Reduce sizing if any scenario loss exceeds the personal limit"
                - "Rerun the account scenarios with the monthly review @recurring(monthly:14)"
            - name: First month in a fund's stress process
              description: |-
                ## Purpose
                Joining a fund means inheriting a stress process built by others, with house scenarios, conventions and history that are rarely written down. Spending the first month learning it deliberately, rerunning one past report, asking why each scenario exists and noting gaps, makes you useful quickly and gives the team a fresh pair of eyes.

                ## Milestones
                1. The house methodology, scenario set and report format read.
                2. One past monthly report reproduced from scratch.
                3. The origin of each house scenario asked about and noted.
                4. A short list of questions and possible gaps shared with your manager.

                ## Notes
                Start from the **Onboarding 30/60/90** template if your firm does not give you one.
              priority: low
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One past stress report has been reproduced independently and a written list of questions and gaps has been shared with your manager."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Read the house stress methodology and scenario set"
                - "Reproduce one past monthly stress report from scratch"
                - "Ask who added each house scenario and why"
                - "Share a short list of questions and gaps with your manager"
            - name: Stress testing case study for a research portfolio
              description: |-
                ## Purpose
                Candidates moving from a PhD, a different field or a non-quant role struggle to show they think about risk, not just returns. A written case study, a public-data strategy stressed through crises, correlation shocks and a liquidity drought, with honest results and limits, is concrete evidence an interviewer can discuss.

                ## Milestones
                1. A simple strategy built on freely available data.
                2. The strategy run through at least four crisis replays, a correlation shock and a liquidity test.
                3. A write-up of four to six pages with results, assumptions and what failed.
                4. Code and write-up published or ready to share, with no employer data.

                ## Notes
                Start from the **Portfolio piece** template. Show the scenario where the strategy breaks; interviewers trust a candidate who reports failure.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A shareable stress testing case study with code, results and stated limits exists, built only on public data."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Pick a simple strategy you can build on public data"
                - "Run four crisis replays, a correlation shock and a liquidity test"
                - "Write up results, assumptions and failures in four to six pages"
                - "Check the code and write-up contain no employer data"
            - name: Stress file handover when a strategy changes owner
              description: |-
                ## Purpose
                Strategies change hands when researchers move teams or leave, and the reasons behind scenarios, limits and accepted breaches often leave with them. A handover file, stress history, open breaches, known weaknesses and the stop rule explained, lets the new owner carry the risk knowingly from day one.

                ## Milestones
                1. The strategy's stress history, scenario choices and limits gathered in one file.
                2. Open breaches and accepted risks listed with their reasons.
                3. Known weaknesses and untested scenarios written in plain language.
                4. A walkthrough held and the new owner confirms they can rerun everything.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A handover file covering stress history, open breaches and weaknesses exists and the new owner has rerun the monthly stress unaided."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Gather the strategy's stress history and limits in one file"
                - "List open breaches and accepted risks with reasons"
                - "Write the known weaknesses in plain language"
                - "Watch the new owner rerun the monthly stress unaided"
            - name: Crowded trade unwind scenario
              description: |-
                ## Purpose
                When many funds hold the same positions, one forced seller can push prices against all of them, as the August 2007 quant unwind showed. Building a scenario that estimates crowding in your positions and simulates a fire sale by other holders shows a loss that neither history nor ordinary factor shocks will reveal.

                ## Milestones
                1. A crowding measure chosen, such as short interest, holdings overlap or factor popularity.
                2. Crowding estimated for the strategy's largest positions and factor tilts.
                3. A fire-sale scenario built that moves crowded positions against you in proportion to crowding.
                4. The scenario added to the monthly set with its calibration recorded.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A crowding-based fire-sale scenario is calibrated, documented and included in the monthly stress run."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Choose a crowding measure you can source reliably"
                - "Estimate crowding for the largest positions and factor tilts"
                - "Build a fire-sale scenario scaled by crowding"
                - "Update crowding estimates before the stress run @recurring(monthly:22)"
            - name: Regime-based scenario generation
              description: |-
                ## Purpose
                Historical replays fix one path; a regime model can generate many plausible crisis paths with realistic persistence of high volatility and high correlation. Fitting a simple regime-switching model to market returns and simulating from its stressed regime produces scenarios that are new but statistically grounded.

                ## Milestones
                1. A two or three state regime model fitted to the strategy's main market drivers.
                2. The stressed regime's volatility, correlation and persistence checked against crisis history.
                3. A set of simulated stressed paths generated and applied to the strategy.
                4. Results compared with historical replays and differences explained.

                ## Notes
                Keep the model small. Regime models with many states fit the past beautifully and tell you little about the future.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Simulated stressed paths from a fitted regime model have been applied to one strategy and compared in writing with historical replays."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Fit a two-state regime model to the strategy's main drivers"
                - "Check the stressed regime against crisis-period statistics"
                - "Simulate stressed paths and apply them to the strategy"
                - "Compare results with historical replays and explain the gaps"
            - name: Extreme value tail estimates for strategy losses
              description: |-
                ## Purpose
                Crisis losses sit in the tail, where ordinary distribution fits are least reliable and the sample is smallest. Applying extreme value methods, such as fitting a generalised Pareto distribution to losses beyond a high threshold, gives tail estimates with confidence intervals and shows how uncertain the worst-case numbers really are.

                ## Milestones
                1. A loss threshold chosen with a mean excess plot or similar check.
                2. A tail distribution fitted to exceedances with parameter uncertainty reported.
                3. Tail loss estimates at several probabilities compared with scenario results.
                4. The estimates and their confidence intervals added to the strategy's stress file.

                ## Notes
                Report the confidence intervals, not just the point estimate. Wide intervals are the finding.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Tail loss estimates with confidence intervals for one strategy are recorded and compared with its scenario losses."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Choose a tail threshold using a mean excess plot"
                - "Fit a generalised Pareto distribution to the exceedances"
                - "Estimate tail losses with confidence intervals"
                - "Compare the tail estimates with the strategy's scenario losses"
            - name: Order book simulation of a liquidity drought
              description: |-
                ## Purpose
                For strategies that trade often or in size, a simple spread-and-volume haircut understates how quickly an order book thins when liquidity providers step back. Replaying historical order book data with depth removed, or simulating quotes withdrawing, shows how fills and impact behave when the book is a fraction of its normal depth.

                ## Milestones
                1. Order book data sourced for the strategy's main instruments in at least one stressed period.
                2. A replay or simulation that removes depth in stages and fills the strategy's orders against it.
                3. Fill rates, slippage and time to complete measured at each depth level.
                4. Findings turned into a stressed cost assumption for the monthly run.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Fill rate and slippage at reduced order book depth are measured for one strategy and feed a stressed cost assumption in the monthly run."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Source order book data for one instrument in a stressed period"
                - "Replay the strategy's orders against the book with depth removed"
                - "Measure fill rate, slippage and completion time at each depth"
                - "Turn the findings into a stressed cost assumption"
            - name: Joint stress across several strategies at once
              description: |-
                ## Purpose
                Diversification across strategies often vanishes in a crisis, as books that look uncorrelated in normal markets lose together, so stressing each one alone understates the combined damage. Running every strategy through the same scenarios at once, with shared liquidity and margin constraints, shows the true worst day for the whole book and whether one stop rule should trigger another.

                ## Milestones
                1. All live strategies run through the same scenario set on the same date.
                2. Combined loss compared with the sum of individual losses and with diversified estimates.
                3. Shared constraints, such as one margin account or overlapping positions, modelled together.
                4. A rule written for whether a breach in one strategy reduces the others.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A combined stress run of all live strategies with shared constraints is documented and a cross-strategy breach rule is written."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Run all live strategies through the same scenarios on one date"
                - "Compare combined losses with individual and diversified estimates"
                - "Model shared margin and overlapping positions together"
                - "Rerun the joint stress and review the cross-strategy rule @recurring(quarterly)"
            - name: Gap and jump risk for overnight positions
              description: |-
                ## Purpose
                Stop orders and daily loss limits assume prices move continuously, but earnings, central bank surprises and weekend news produce gaps that jump straight past them. Modelling overnight and weekend gaps from history, and testing what a stop rule actually delivers when the price opens beyond it, shows the loss the written limit cannot prevent.

                ## Milestones
                1. Historical overnight and weekend gaps measured for the strategy's instruments.
                2. The largest gaps applied to current overnight positions.
                3. Realised loss with stops compared with the loss the stop level implies.
                4. Overnight sizing or a gap allowance added to the limits where the difference is material.

                ## Notes
                Single stocks around earnings and thin currency pairs around policy announcements produce the largest gaps. Check them first.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Gap losses for current overnight positions are estimated from history and any material shortfall in the stop rule is reflected in sizing or limits."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Measure historical overnight and weekend gaps for your instruments"
                - "Apply the largest gaps to current overnight positions"
                - "Compare gap losses with the loss the stop level implies"
                - "Add a gap allowance to limits where the shortfall is material"
---

# Strategy Stress Testing

This area is for researchers who want to know how a strategy behaves when markets stop cooperating, before launch and every month after it. It starts with foundations (scope, a written stop rule, an exposure map, position history, a dated crisis catalogue, a report format and a launch gate), then the monthly, weekly and quarterly machinery of rerunning stresses on live strategies, the methods worth learning properly (replays, hypothetical scenarios, correlation shocks, liquidity and impact), decisions that turn stress results into sizing, limits and hedges, dated events such as a launch review or a capital increase, variants for a solo researcher, a personal trader, a new hire and a strategy changing owner, and finally specialist work on crowding, regimes, tails and order book simulation.

What repeats is a monthly stress run with a short note, a weekly liquidity and crowding watch, monthly capacity and margin checks, a quarterly scenario refresh and drill, and a yearly methodology review. The Risk register, Metrics log, Reading queue, Meeting notes, Operational checklist, Onboarding 30/60/90 and Portfolio piece templates pair with the projects that name them. A stress test shows how a strategy can fail, not how it will perform: most strategies disappoint out of sample, nothing here is trading or investment advice, and every limit and stop rule should be agreed with whoever carries the risk. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
