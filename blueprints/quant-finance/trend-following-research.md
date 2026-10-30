---
id: quant-finance.trend-following-research
name: Trend-Following Research
description: "Trend-following research done properly: a clean futures universe, honest continuous series and rolls, volatility-scaled sizing, risk limits fixed in advance, and the patience to study long drawdowns before judging a signal."
category: business
version: 1.0.0
tags: [quant-finance, trend-following-research, researcher, managed-futures, time-series-momentum, futures-roll, volatility-targeting, drawdowns]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - metrics-log
    - reading-queue
    - onboarding-30-60-90
  pillars:
    - name: Quantitative Finance & Trading
      emoji: "🧮"
      description: "Systematic research and trading run like engineering: alpha research and honest backtests, factor and risk models, execution and microstructure, statistics and machine learning, quant development and market data, prop-firm evaluations and personal algorithmic trading under strict risk rules, and quant careers. Organisation and method only, never trading advice."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Trend-Following Research
          description: "Researching trend-following and managed futures style strategies: signal construction, futures roll handling, sizing by volatility and long drawdown periods."
          projects:
            - name: Trend research charter and written stop rule
              description: |-
                ## Purpose
                Trend-following research can absorb years, because every flat period invites one more lookback or one more filter. A one-page charter states the question, the markets, the evaluation period, the bar a variant must clear and the point at which you stop and write up, so later decisions are checked against something written before the results arrived.

                ## Milestones
                1. A one-page charter naming the research question, universe and evaluation period.
                2. A numeric bar a new variant must clear on held-back data before it is adopted.
                3. A written stop rule saying when a line of research is closed, with a date.
                4. The charter signed off by a colleague or reviewer and stored with the research code.

                ## Notes
                Say plainly in the charter that most trend variants that look better in-sample do not hold up out of sample. Writing it down makes the stop rule easier to honour.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed one-page charter with question, universe, adoption bar and a dated stop rule, stored in the research repository."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft the one-sentence research question for your trend work"
                - "Write the numeric bar a variant must clear on held-back data"
                - "Set a stop date and the condition that closes the research line"
                - "Ask a colleague to read and sign off the charter"
            - name: Futures universe and contract specification sheet
              description: |-
                ## Purpose
                Diversification in a trend portfolio is limited by the markets in it, and each future carries its own multiplier, tick size, currency, trading hours and expiry cycle. Building one specification sheet for every candidate contract stops sizing errors caused by a wrong point value and shows early which sectors are thin.

                ## Milestones
                1. A sheet listing every candidate contract with exchange, multiplier, tick size and currency.
                2. Expiry cycle, first notice and last trade rules recorded for each contract.
                3. Each contract tagged by sector: equity indices, rates, currencies, energy, metals, agriculture.
                4. Sectors with fewer than three liquid contracts flagged for later attention.

                ## Notes
                Check specifications against the exchange's own published contract pages, not a data vendor's summary. Multipliers change after contract redesigns.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A contract sheet covering every candidate market with multiplier, tick, currency, expiry rules and sector, checked against exchange sources."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the futures contracts you could plausibly trade or study"
                - "Record multiplier, tick size and currency from each exchange page"
                - "Add expiry cycle, first notice and last trade rules to each row"
                - "Tag every contract by sector and count contracts per sector"
            - name: Continuous futures series with a documented roll
              description: |-
                ## Purpose
                Trend signals need long price histories, but futures expire, so every backtest rests on a stitched series whose roll method changes the result. Building back-adjusted series with the roll date and adjustment for every join recorded makes the signal input reproducible and lets you trace any strange jump to a specific roll.

                ## Milestones
                1. One roll rule chosen and written down for each contract, such as a fixed number of days before expiry.
                2. Back-adjusted continuous series built for every contract in the universe.
                3. A roll log recording each join date, the two contracts and the adjustment applied.
                4. A check that no continuous series shows a jump larger than its typical daily move at a roll date.

                ## Notes
                Back-adjusted prices can go negative and are wrong for percentage returns far back in history. Keep the unadjusted contract prices too and compute returns from them.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Continuous series for every contract, rebuilt from raw contracts by one script, with a roll log listing every join and adjustment."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Write the roll rule for each contract in the specification sheet"
                - "Build back-adjusted series from the raw contract prices"
                - "Save a roll log with join dates, contracts and adjustments"
                - "Plot each series around its roll dates and check for jumps"
            - name: Separating carry from price trend in futures returns
              description: |-
                ## Purpose
                Each futures return is the spot move plus the roll yield, and in markets with steep curves the carry can be the larger part. Splitting the two shows whether a trend signal is really following price or simply sitting long contango-free markets, which matters when you explain results to a reviewer.

                ## Milestones
                1. Roll yield estimated for each contract from the near and next contract prices.
                2. Total, spot and carry return series stored side by side.
                3. The baseline trend strategy's return split into price and carry parts.
                4. A short note on which sectors are carry-dominated.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A table splitting the baseline trend strategy's return into price and carry parts by sector, with a written explanation."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Compute annualised roll yield from adjacent contract prices"
                - "Store total, spot and carry returns for every contract"
                - "Split the baseline strategy's return into price and carry"
                - "Write which sectors are mostly carry and why it matters"
            - name: Data checks for settlement prices and limit days
              description: |-
                ## Purpose
                Futures data has traps that equity researchers rarely meet: settlement prices that differ from the last trade, limit-up and limit-down days where nothing traded, exchange holidays and contracts that moved venue. A set of automated checks on the raw contract prices catches these before a trend signal reacts to a price nobody could have traded.

                ## Milestones
                1. The price field used for signals chosen and documented, settlement or close.
                2. Automated checks for stale prices, zero volume and limit-move days.
                3. Holiday calendars per exchange applied so missing days are expected, not filled.
                4. A list of known bad prints with the fix applied to each.

                ## Notes
                Never forward-fill a limit day as if it traded at that price for sizing purposes. Mark it and test how the backtest changes when entry is delayed a day.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A check script that runs on every data refresh and flags stale prices, limit days and holidays, with a log of fixes made."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Decide whether signals use settlement or close and write it down"
                - "Write a check for repeated prices and zero volume days"
                - "Load exchange holiday calendars and apply them to every contract"
                - "Record each bad print you find and how you fixed it"
            - name: Baseline moving average crossover replication
              description: |-
                ## Purpose
                Every later idea needs a plain reference to beat, and a simple crossover on the whole universe with equal risk per market is the standard one. Rebuilding it yourself, and comparing it with a published trend index over the same years, checks your data, rolls and sizing before anything clever is added.

                ## Milestones
                1. One crossover rule with fixed lookbacks chosen before looking at results.
                2. The baseline run on every market with equal volatility-scaled risk.
                3. Correlation of baseline monthly returns with a published trend index recorded.
                4. Any large gap from the index explained or listed as an open question.

                ## Notes
                Pick the lookbacks from the literature, not from a grid search. The baseline is a measuring stick, so it should be dull.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A baseline backtest with fixed lookbacks, its monthly correlation with a published trend index recorded and any gaps explained."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Choose two lookbacks from published trend research"
                - "Run the crossover on the full universe at equal risk"
                - "Download a published trend index and align monthly returns"
                - "Write down the correlation and every gap you cannot explain"
            - name: Volatility-scaled position sizing rule
              description: |-
                ## Purpose
                Without scaling, a trend book is dominated by whichever markets happen to be most volatile, so natural gas swamps bonds. A written sizing rule that targets the same risk per market, with the volatility estimator, lookback and caps stated, makes positions comparable across sectors and the backtest reproducible.

                ## Milestones
                1. The volatility estimator and its lookback written down, for example an exponentially weighted measure.
                2. A target risk per market expressed as annualised volatility of the position.
                3. Caps on any single position as a share of portfolio risk.
                4. A worked sizing example for three markets checked by hand.

                ## Notes
                Volatility scaling uses past volatility, so it reacts late to a shock. Note the delay and how the caps protect you during it.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written sizing rule with estimator, lookback, risk target and caps, plus three hand-checked worked examples."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose the volatility estimator and lookback for sizing"
                - "Set the target risk per market and the single-position cap"
                - "Work out positions for three markets by hand"
                - "Compare your hand figures with the code's output"
            - name: Cost and roll slippage assumptions for the backtest
              description: |-
                ## Purpose
                Compared with most quant strategies, trend systems trade rarely, but they roll every contract several times a year and often trade in crowded windows. Fixing per-market cost assumptions for both signal trades and rolls, before testing variants, stops faster signals from looking better simply because costs were set too low.

                ## Milestones
                1. A per-market cost in ticks for signal trades, with its source.
                2. A separate per-market cost for each roll trade.
                3. Backtests reported both before and after costs.
                4. A sensitivity run with costs doubled, kept with the results.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A per-market cost table for trades and rolls used by every backtest, with a doubled-cost sensitivity reported alongside."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Estimate a typical spread in ticks for each contract"
                - "Set a roll cost per contract from the same source"
                - "Add both costs to the backtest and report net results"
                - "Rerun the baseline with every cost doubled"
            - name: Portfolio risk limits and loss rule set in advance
              description: |-
                ## Purpose
                Trend books can lose for two or three years, and the temptation in a drawdown is to change the system rather than the risk. Writing a portfolio volatility target, gross exposure and margin caps, sector limits and a loss level that triggers a formal review, before any money or reputation is at stake, keeps those calls separate from the research.

                ## Milestones
                1. A portfolio volatility target and a maximum gross notional written down.
                2. Sector and single-market risk limits recorded.
                3. A drawdown level that triggers a formal review, and a deeper one that halts trading.
                4. Each limit entered in a risk register with an owner and a check frequency.

                ## Notes
                Start from the **Risk register** template. Limits for live trading should be agreed with whoever carries the risk; this project records them, it does not set them for anyone else.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A risk register listing volatility target, gross and margin caps, sector limits and two drawdown triggers, each with an owner."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the portfolio volatility target and gross exposure cap"
                - "Set risk limits per sector and per market"
                - "Choose the review and halt drawdown levels"
                - "Enter every limit in the risk register with an owner"
            - name: Weekly signal and position sanity check
              description: |-
                ## Purpose
                Most trend system errors show up first as a position that makes no sense: a long in a market that has fallen for months, a size ten times its neighbours, a contract that should have rolled. Ten minutes each week comparing signals, positions and prices catches these before they compound.

                ## Milestones
                1. A one-screen view of each market's signal, position and recent price path.
                2. A short checklist of what to look for each week.
                3. Every anomaly logged with its cause and fix.
                4. Four consecutive weekly checks completed without skipping.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly check log with an entry every week for a quarter, each anomaly showing its cause and fix."
                cadence: rolling
              tasks:
                - "Build a single view of signal, position and price per market"
                - "Write a five-line checklist for the weekly look"
                - "Run the signal and position sanity check @recurring(weekly:mon)"
                - "Log each anomaly with cause and fix the same day"
            - name: Monthly trend research review against the charter
              description: |-
                ## Purpose
                Without a fixed review, trend research drifts into tuning the lookback that would have done best last year. A monthly session that reads the research log against the charter, counts variants tried and decides what continues keeps the work cumulative and the trial count honest.

                ## Milestones
                1. A standing monthly review slot with a short agenda.
                2. The number of variants tried that month recorded in the research log.
                3. Each open line marked continue, park or close against the charter.
                4. The charter itself reread every quarter and changes dated.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly review notes for six consecutive months, each with a variant count and a decision for every open research line."
                cadence: rolling
              tasks:
                - "Draft a five-item agenda for the monthly review"
                - "Hold the trend research review and record decisions @recurring(monthly:12)"
                - "Reread the charter and date any change to it @recurring(quarterly)"
                - "Add the month's variant count to the research log"
            - name: Roll calendar maintenance
              description: |-
                ## Purpose
                Rolls are where trend systems quietly break: an exchange moves a first notice date, a contract's liquid month shifts, or a holiday lands on a roll day. Keeping a forward roll calendar, checked monthly against exchange notices, means the continuous series and any live positions roll on the day the rule says.

                ## Milestones
                1. A forward calendar of every roll for the next three months.
                2. First notice and last trade dates checked against exchange sources.
                3. Changes to liquid months or roll timing recorded in the roll log.
                4. No roll missed or made late over two quarters.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A forward roll calendar updated every month for two quarters with no missed or late rolls recorded."
                cadence: rolling
              tasks:
                - "Generate the next three months of roll dates from the roll rules"
                - "Update the roll calendar from exchange notices @recurring(monthly:3)"
                - "Check first notice dates for the coming quarter @recurring(quarterly)"
                - "Record any change in liquid month in the roll log"
            - name: Drawdown diary for long flat periods
              description: |-
                ## Purpose
                Multi-year stretches of losses run through the history of trend following, and researchers judge systems differently at the bottom of a drawdown than at the top. A monthly diary entry recording the drawdown depth, its length against the backtest's history and any urge to change the system gives you a record to read before acting on that urge.

                ## Milestones
                1. Current drawdown depth and length recorded each month.
                2. Each figure placed against the distribution of past drawdowns from the backtest.
                3. Any proposed change written down with the date and reason, not acted on that month.
                4. Proposed changes reviewed at the next monthly research review.

                ## Notes
                Start from the **Metrics log** template. A rule that changes made in a drawdown wait a month is cheap and saves many bad decisions.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly drawdown log with depth, length, its percentile against backtest drawdowns and any proposed change held for review."
                cadence: rolling
              tasks:
                - "Compute the backtest's drawdown depth and length distribution"
                - "Write the drawdown diary entry for the month @recurring(monthly:20)"
                - "Note any change you want to make without making it"
                - "Carry proposed changes to the next research review"
            - name: Quarterly universe and liquidity review
              description: |-
                ## Purpose
                Markets come and go: volumes fall, contracts are delisted, new micro contracts appear and margin rises. A quarterly look at volume, open interest and margin for every contract decides additions and removals on written criteria rather than on which markets trended last quarter.

                ## Milestones
                1. Written criteria for adding or removing a contract, based on volume and open interest.
                2. Volume, open interest and margin refreshed for every contract each quarter.
                3. Each change to the universe dated, with the criterion that triggered it.
                4. The backtest rerun on the updated universe and the difference noted.

                ## Notes
                Judge removals by liquidity, never by recent performance. Dropping a market because it lost money is selection on the outcome.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly reviews on file, each with refreshed liquidity data and dated universe changes tied to written criteria."
                cadence: cyclic
              tasks:
                - "Write add and remove criteria using volume and open interest"
                - "Refresh liquidity and margin data for every contract @recurring(quarterly)"
                - "Record each universe change with its triggering criterion"
                - "Rerun the backtest on the new universe and note the effect"
            - name: Tracking against published trend benchmarks
              description: |-
                ## Purpose
                Sudden divergence from the published trend indices means your system has either found something or broken something, and it is usually the second. Comparing your monthly returns with a public managed futures benchmark shows how much of the result is the common trend factor and flags divergences early.

                ## Milestones
                1. One or two public trend or managed futures benchmarks chosen.
                2. A rolling twelve-month correlation and beta to the benchmark computed.
                3. Months with large divergence listed with an explanation.
                4. A record of the benchmark comparison kept for a full year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve months of benchmark comparisons with rolling correlation, beta and a written explanation for each large divergence."
                cadence: rolling
              tasks:
                - "Choose a public trend benchmark with monthly history"
                - "Compute rolling correlation and beta to the benchmark"
                - "Update the benchmark comparison and note divergences @recurring(monthly:8)"
            - name: Trend signal idea backlog
              description: |-
                ## Purpose
                Ideas for trend research arrive faster than time to test them, from papers, conferences and colleagues. A backlog where each idea gets a one-line hypothesis, an expected effect and a cost to test lets you choose the next experiment deliberately instead of chasing the most recent one.

                ## Milestones
                1. A backlog with hypothesis, source, expected effect and test cost for each idea.
                2. Ideas ranked by expected value per hour of testing.
                3. The top three ideas linked to the next monthly review.
                4. Closed ideas kept with their outcome so they are not retested by accident.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A ranked backlog of trend ideas, each with a hypothesis and test cost, groomed monthly with closed ideas kept and labelled."
                cadence: rolling
              tasks:
                - "Move every trend idea from notes into one backlog"
                - "Add a hypothesis and test cost to each idea"
                - "Rank and prune the trend idea backlog @recurring(monthly:26)"
            - name: Yearly assumption review of the trend system
              description: |-
                ## Purpose
                Assumptions set in the first year, about costs, margins, roll timing and volatility lookbacks, slowly go stale. A yearly review lists every assumption, checks each against a year of fresh evidence and records what changed, which also gives a validator or allocator a clear history of the system.

                ## Milestones
                1. A list of every assumption in the trend system with its source and date.
                2. Each assumption checked against the last year's data.
                3. Changes approved and dated, with the backtest rerun once on the new set.
                4. A one-page summary of the year's changes stored with the system documentation.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A dated yearly review listing every assumption, the evidence checked and each approved change, with one rerun backtest."
                cadence: cyclic
              tasks:
                - "List every assumption in the trend system with its source"
                - "Run the yearly assumption review @recurring(yearly)"
                - "Rerun the backtest once on the approved assumption set"
                - "Write the one-page summary of changes"
            - name: Margin and cash usage monitor
              description: |-
                ## Purpose
                Futures need little cash to hold large notional positions, so margin is where a trend book meets reality. Watching initial margin as a share of capital each week, and reconciling the model's estimate with the broker or clearer monthly, shows when exchange margin increases are squeezing room for new positions.

                ## Milestones
                1. Margin per contract stored and refreshed from the exchange or broker.
                2. Total margin as a share of capital computed weekly.
                3. A cap on margin to capital written in the risk register.
                4. Model margin reconciled with the statement each month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly margin-to-capital figure for a quarter, below the written cap, with monthly reconciliations to the broker statement."
                cadence: rolling
              tasks:
                - "Load current margin per contract into the specification sheet"
                - "Check margin as a share of capital @recurring(weekly:fri)"
                - "Reconcile model margin with the broker statement @recurring(monthly:15)"
                - "Write the margin-to-capital cap into the risk register"
            - name: Time-series momentum literature reading list
              description: |-
                ## Purpose
                There is a long practitioner and academic record on time-series momentum and managed futures, covering century-long backtests, crisis behaviour and fee drag. Reading the core papers in order, with notes on data, method and what held up, saves months of rediscovering known results and gives you the vocabulary reviewers expect.

                ## Milestones
                1. A list of ten to fifteen core trend-following papers and books in reading order.
                2. Notes on each covering data, period, signal, sizing and main finding.
                3. A summary of where papers disagree and why.
                4. Two or three results chosen for your own replication.

                ## Notes
                Start from the **Reading queue** template. Note the cost and fee assumptions in every paper; they explain much of the gap between published and live results.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Structured notes on at least ten trend-following papers, a summary of disagreements and two results chosen to replicate."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Build a reading queue of core time-series momentum papers"
                - "Read the first paper and fill in the notes template"
                - "Write a page on where the papers disagree"
                - "Pick two results to replicate on your own data"
            - name: Breakout and channel signal study
              description: |-
                ## Purpose
                Breakout rules, which buy a new high over some window, were the original trend systems and still sit inside many programmes. Studying how they differ from moving average signals in timing, turnover and correlation tells you whether they add anything to a portfolio or repeat what you already hold.

                ## Milestones
                1. Breakout signals coded for three window lengths chosen in advance.
                2. Turnover and average holding period compared with the baseline crossover.
                3. Correlation between breakout and crossover returns measured by sector.
                4. A written view on whether breakouts add diversification.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A short note comparing breakout and crossover signals on turnover, holding period and correlation, with a recommendation."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Code channel breakout signals for three preset windows"
                - "Compare turnover and holding periods with the baseline"
                - "Measure return correlation with the crossover by sector"
                - "Write whether breakouts add anything new"
            - name: Signal speed and lookback ensemble study
              description: |-
                ## Purpose
                Fast trend signals catch reversals sooner and cost more; slow ones ride long moves and give back more at the turn. Mapping performance, turnover and crisis behaviour across a range of speeds, and understanding why an equal blend often beats any single choice, prevents picking the lookback that happened to win.

                ## Milestones
                1. A fixed grid of lookbacks spanning weeks to a year, set before testing.
                2. Sharpe ratio, turnover and crisis returns for each speed recorded.
                3. The equal-weight blend compared with every single speed.
                4. A note on how sensitive results are to small lookback changes.

                ## Notes
                Count every speed tested as a trial. A smooth curve across speeds is more reassuring than one sharp peak.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A table of results across a preset lookback grid, the blend compared with each speed and the trial count recorded."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Set the lookback grid and log it before running anything"
                - "Run each speed and record Sharpe, turnover and crisis returns"
                - "Compare an equal blend of speeds with each single speed"
                - "Record the trial count in the research log"
            - name: Volatility estimators for trend sizing
              description: |-
                ## Purpose
                Sizing quality depends on how well the volatility estimate tracks the next few weeks, and choices between simple windows, exponential weights and range-based estimators change position sizes noticeably. Comparing them on forecast error and on the resulting strategy risk tells you which estimator to trust and how fast it should react.

                ## Milestones
                1. Three or four estimators coded with fixed parameters.
                2. Each estimator's forecast error against realised volatility measured.
                3. Realised strategy volatility compared with its target under each estimator.
                4. One estimator chosen and the reason written into the sizing rule.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: decision
                success_criteria: "A comparison of at least three estimators on forecast error and achieved risk, with the chosen one recorded in the sizing rule."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Code simple, exponential and range-based volatility estimators"
                - "Measure each one's forecast error over the next month"
                - "Compare realised portfolio risk with target for each"
                - "Update the sizing rule with the chosen estimator"
            - name: Crisis performance and convexity of trend returns
              description: |-
                ## Purpose
                The main argument made for trend following is its behaviour in long equity sell-offs, and it is also the argument most often overstated. Studying returns across past crises, and the convex shape of trend returns against equity moves, shows when the effect held, when it did not and what it depended on.

                ## Milestones
                1. A list of crisis periods defined before looking at results.
                2. Baseline trend returns in each crisis set beside equity index returns.
                3. A scatter of quarterly trend returns against equity returns with its curvature noted.
                4. Crises where trend did not help listed with a likely reason.

                ## Notes
                Fast crashes that reverse within days often hurt trend systems. Separate slow bear markets from sudden shocks when you summarise.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A crisis table and convexity chart for the baseline strategy, including the crises where trend did not help and why."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Define the crisis periods and write them down first"
                - "Tabulate trend and equity returns for each crisis"
                - "Plot quarterly trend against equity returns"
                - "List the crises where trend failed and the likely cause"
            - name: Turnover and holding period arithmetic
              description: |-
                ## Purpose
                How often a trend system trades follows from its signal speed, its sizing updates and its rolls, and small sizing changes can double turnover with no change in view. Working through the arithmetic connecting lookback, rebalancing threshold and roll frequency to trades per year lets you predict costs before running a backtest.

                ## Milestones
                1. Expected turnover written as a function of lookback and rebalance threshold.
                2. Predicted turnover compared with backtest turnover for three speeds.
                3. Roll turnover separated from signal turnover.
                4. A buffer rule tested that skips trades below a minimum size change.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note predicting turnover from signal speed and buffer, checked against backtests within a stated tolerance."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Derive expected turnover for a simple crossover signal"
                - "Compare predicted and backtest turnover at three speeds"
                - "Split turnover into signal trades and rolls"
                - "Test a trade buffer and record turnover saved"
            - name: Diversification across sectors and markets
              description: |-
                ## Purpose
                Trend portfolios earn much of their result from holding many weakly related markets, yet correlations rise in stress and some sectors behave as a single bet. Measuring correlations between market returns and between trend signals, by sector and over time, shows how many independent bets the book really holds.

                ## Milestones
                1. A correlation matrix of market returns and of per-market strategy returns.
                2. An effective number of independent bets estimated for the portfolio.
                3. Correlation in stress periods compared with calm periods.
                4. Sectors that behave as one bet identified for the sizing decisions.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A report with return and strategy correlation matrices, an effective bet count and a stress versus calm comparison."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Compute correlation matrices of market and strategy returns"
                - "Estimate the effective number of independent bets"
                - "Compare correlations in stress periods with calm ones"
                - "Recompute the sector correlation matrix @recurring(quarterly)"
            - name: Choosing between binary and continuous trend signals
              description: |-
                ## Purpose
                A binary signal is fully long or fully short; a continuous one scales position with trend strength. The choice changes turnover, behaviour near reversals and how the book looks to a reviewer, so it deserves a recorded decision based on tests chosen in advance rather than a default carried over from a paper.

                ## Milestones
                1. Both signal forms coded on the same lookbacks and sizing.
                2. Net results, turnover and drawdowns compared on the same period.
                3. Behaviour around three major reversals examined.
                4. A decision recorded with the evidence and the trial count.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on signal form with net results, turnover, drawdowns and reversal behaviour for both versions."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Code binary and scaled versions of the same signal"
                - "Compare net returns, turnover and drawdowns"
                - "Examine both around three large reversals"
                - "Record the decision and the evidence in the research log"
            - name: Risk allocation across sectors
              description: |-
                ## Purpose
                Equal risk per market quietly gives most of the book to whichever sector has the most contracts, often rates or equity indices. Deciding how risk is split across sectors, then across markets within each, makes the portfolio's exposures intentional and easier to explain.

                ## Milestones
                1. Current risk share by sector measured under equal market weights.
                2. Two or three allocation schemes defined, such as equal sector risk.
                3. Each scheme compared on net results and drawdowns.
                4. One scheme chosen and recorded in the sizing rule.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded sector risk allocation scheme, chosen from at least two alternatives compared on the same test period."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Measure risk share by sector in the current book"
                - "Define two alternative sector allocation schemes"
                - "Compare the schemes on net results and drawdowns"
                - "Write the chosen scheme into the sizing rule"
            - name: Adding carry as a second signal
              description: |-
                ## Purpose
                Carry, the return earned from the shape of the futures curve, is the most common companion to trend in managed futures portfolios and often behaves differently in sideways markets. Testing whether a carry signal adds to the trend book, rather than replacing it, is a clear decision with a known literature behind it.

                ## Milestones
                1. A carry signal defined from the curve data built earlier.
                2. Correlation between carry and trend returns measured by sector.
                3. A blend of trend and carry compared with trend alone.
                4. A go or no-go decision recorded against the charter's bar.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A go or no-go decision on adding carry, with correlation, blend results and the charter bar compared in writing."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Define a carry signal from adjacent contract prices"
                - "Measure carry and trend correlation by sector"
                - "Backtest a trend and carry blend"
                - "Record the decision against the charter bar"
            - name: Roll timing rule decision
              description: |-
                ## Purpose
                Rolling on a fixed day before expiry is simple but can mean trading in the same window as every index fund and CTA. Comparing fixed-day, volume-switch and open-interest-switch rules on cost estimates and on how often each rolls into an illiquid month gives a defensible rule per contract.

                ## Milestones
                1. Three roll rules defined and applied to the same contracts.
                2. Roll dates from each rule compared with when volume actually moved.
                3. Estimated roll costs compared across rules.
                4. A rule chosen per sector and written into the specification sheet.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A roll rule recorded for every sector, chosen from three alternatives compared on timing and estimated cost."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Define fixed-day, volume and open interest roll rules"
                - "Compare each rule's roll dates with the volume shift"
                - "Estimate roll costs under each rule"
                - "Record the chosen rule per sector in the specification sheet"
            - name: Stop-loss exits versus signal-driven exits
              description: |-
                ## Purpose
                Many discretionary trend traders use fixed stops, while most systematic programmes exit only when the signal turns. Testing whether adding a stop changes anything after costs, and how it interacts with volatility sizing, settles a question that otherwise returns in every drawdown.

                ## Milestones
                1. One or two stop rules defined before testing, such as a multiple of volatility.
                2. Each combined with the baseline signal and backtested net of costs.
                3. Changes in drawdown, turnover and return recorded.
                4. A decision recorded, including the trial count.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on stops, comparing net returns, drawdowns and turnover with and without them on the same period."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Define at most two stop rules in volatility units"
                - "Backtest the baseline with each stop net of costs"
                - "Compare drawdowns, turnover and returns"
                - "Record the decision and the trials used"
            - name: Fast and slow speed allocation decision
              description: |-
                ## Purpose
                After the speed study you still have to decide how much risk goes to fast, medium and slow signals, and whether that split varies by sector. Recording the allocation with its evidence keeps it from being changed every time one speed has a bad year.

                ## Milestones
                1. Two or three candidate speed allocations defined.
                2. Each compared on net results, crisis returns and turnover.
                3. Any sector-specific speed choices justified by cost or liquidity.
                4. The chosen allocation recorded with a date for its next review.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded speed allocation, compared against at least two alternatives, with any sector exceptions justified and a review date."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Define candidate splits between fast, medium and slow signals"
                - "Compare candidates on net results and crisis returns"
                - "Justify any sector-specific speed with cost data"
                - "Record the allocation with its review date"
            - name: Correlation-adjusted portfolio scaling
              description: |-
                ## Purpose
                When many markets trend together, as in a broad risk-off move, the book's risk can be far above target even though each position is sized correctly. Scaling the whole portfolio by an estimate of its total risk, using the correlation work, keeps realised risk near target, at the cost of more estimation error.

                ## Milestones
                1. Portfolio-level risk estimated from positions and a covariance estimate.
                2. A scaling rule defined with a cap on how far it can raise positions.
                3. Realised risk against target compared with and without the rule.
                4. A decision recorded on whether to use portfolio scaling.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A comparison of realised against target risk with and without portfolio scaling, and a recorded decision."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Estimate portfolio risk from positions and covariance"
                - "Write a scaling rule with an upper cap"
                - "Compare realised risk with target with and without scaling"
                - "Record whether portfolio scaling is adopted"
            - name: Minimum position size and rounding in small accounts
              description: |-
                ## Purpose
                Futures trade in whole contracts, so a small account cannot hold the fractional positions a backtest assumes, and rounding can leave half the universe at zero. Measuring how results change once positions are rounded to real contracts shows which markets and capital levels the strategy can actually be run at.

                ## Milestones
                1. Backtest positions rounded to whole contracts at three capital levels.
                2. Tracking error between rounded and unrounded versions recorded.
                3. Markets that are always zero at each capital level listed.
                4. A minimum capital figure for the chosen universe written down, or a smaller universe chosen.

                ## Notes
                Micro and mini contracts change the answer for many markets. Include them in the specification sheet before running this.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Rounded backtests at three capital levels with tracking error, zero-position markets and a stated minimum capital figure."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Add micro and mini contracts to the specification sheet"
                - "Round backtest positions at three capital levels"
                - "Measure tracking error against the unrounded version"
                - "Write the minimum workable capital for the universe"
            - name: Post-event review after a sharp trend reversal
              description: |-
                ## Purpose
                Sharp reversals, such as a central bank surprise or a short squeeze, can wipe out months of trend gains in days and are when systems are most likely to be changed in a panic. A structured review within two weeks of the event records what happened market by market and whether the system behaved as designed.

                ## Milestones
                1. The event window and affected markets defined.
                2. Losses attributed to signal, sizing, rolls and costs.
                3. Behaviour compared with what the backtest predicts in similar reversals.
                4. Any proposed change sent to the monthly review, not applied immediately.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A written review within two weeks of the reversal, with losses attributed by source and any change routed to the monthly review."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Define the event window and list affected markets"
                - "Attribute losses to signal, sizing, rolls and costs"
                - "Compare the loss with similar reversals in the backtest"
                - "Send proposed changes to the next monthly review"
            - name: Annual trend research presentation
              description: |-
                ## Purpose
                A yearly presentation to the research committee, a manager or a peer group forces the year's work into one argument: what was tested, what was adopted, what failed and what comes next. Preparing it from the research log rather than memory exposes gaps while there is still time to fill them.

                ## Milestones
                1. A list of every variant tested in the year, drawn from the research log.
                2. Slides covering adopted changes, rejected ideas and live or paper results.
                3. A rehearsal with one colleague and their questions answered.
                4. Committee feedback and decisions recorded after the presentation.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The presentation delivered with a full list of variants tested, and the committee's decisions written up within a week."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Export the year's variants from the research log"
                - "Draft slides on adopted, rejected and next ideas"
                - "Rehearse with a colleague and note their questions"
                - "Write up the committee's decisions within a week"
            - name: Contract redesign or delisting migration
              description: |-
                ## Purpose
                Exchanges redesign, relist or retire contracts, and benchmark changes such as rate reference reforms have forced whole markets onto new futures. Planning the switch for a specific contract, from splicing history to moving any live positions, prevents a silent break in the continuous series.

                ## Milestones
                1. The affected contract, change date and replacement contract recorded.
                2. A splice method for history across the change decided and documented.
                3. The specification sheet, roll rules and data checks updated.
                4. The continuous series rebuilt and checked across the change date.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The replacement contract live in the specification sheet, with a documented splice and a continuous series checked across the change."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Record the change date and replacement contract"
                - "Decide how history will be spliced across the change"
                - "Update specification, roll rules and checks"
                - "Rebuild the series and inspect it around the change"
            - name: One-year out-of-sample checkpoint
              description: |-
                ## Purpose
                Once a trend system is frozen, the only honest evidence is what happens next, and a year is short for a strategy whose good spells are rare. A dated checkpoint compares the year with the backtest's distribution of one-year outcomes, so the conclusion is about probability rather than whether the year felt good.

                ## Milestones
                1. The frozen system version and start date recorded at the beginning of the year.
                2. The distribution of one-year returns from the backtest computed in advance.
                3. The live or paper year placed within that distribution.
                4. A decision to continue, extend the trial or stop, recorded against the charter.

                ## Notes
                A poor single year is common for trend following and is weak evidence either way. Decide in advance what result would make you stop.
              priority: high
              deadlineOffsetDays: 365
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A checkpoint report placing the frozen system's year within its backtest distribution, with a recorded continue, extend or stop decision."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Tag the frozen system version and record the start date"
                - "Compute the backtest's distribution of one-year returns"
                - "Write the result that would make you stop, before the year ends"
                - "Hold the checkpoint and record the decision"
            - name: Trend research working paper
              description: |-
                ## Purpose
                Writing up one finding as a short working paper or internal memo, with data, method, all trials counted and limitations, turns months of notebooks into something others can check. It is also the strongest evidence of method for a future employer or allocator.

                ## Milestones
                1. One finding chosen and its claim written in a sentence.
                2. Data, method and trial count described so another researcher could rerun it.
                3. Sensitivity checks and limitations stated, including costs and out-of-sample results.
                4. A reviewer's comments received and addressed.

                ## Notes
                Check your employment contract and any confidentiality terms before sharing anything outside your firm.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A finished working paper with method, trial count and limitations, reviewed by at least one other researcher."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Write the paper's main claim in one sentence"
                - "Draft the data and method section from the research log"
                - "Ask the agent to draft a limitations section from your notes"
                - "Send the draft to a reviewer and address their comments"
            - name: First 90 days on a CTA research team
              description: |-
                ## Purpose
                Joining a managed futures team means learning a codebase, a roll and data pipeline and a set of firm conventions before you can change anything. A 30, 60 and 90 day plan focused on reproducing the house system's numbers first earns the trust needed to propose changes later.

                ## Milestones
                1. The house backtest reproduced from source and matching official figures within 30 days.
                2. Data, roll and sizing conventions written up in your own notes by day 60.
                3. One small, well-tested research proposal presented by day 90.
                4. Regular one-to-ones held with your manager and notes kept.

                ## Notes
                Start from the **Onboarding 30/60/90** template.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: deliverable
                success_criteria: "The house backtest reproduced, conventions documented and one research proposal presented within 90 days of joining."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Ask your manager which backtest figures you should reproduce first"
                - "Rerun the house backtest from source and compare figures"
                - "Write notes on the team's roll, data and sizing conventions"
                - "Prepare questions for the weekly manager catch-up @recurring(weekly:thu)"
            - name: Solo researcher with a small futures account
              description: |-
                ## Purpose
                An individual researching trend following with their own money faces whole-contract rounding, retail broker margins, limited data budgets and no one to stop a bad decision. A plan sized to that life, with capital you can afford to lose, a strict loss limit and paper trading first, keeps the research a study rather than a gamble.

                ## Milestones
                1. Risk capital set at an amount you can afford to lose entirely, written down.
                2. A universe chosen that works at that capital after rounding.
                3. At least three months of paper trading completed against the backtest.
                4. A loss level written in advance at which you stop and review.
                5. A monthly self-review held and recorded.

                ## Notes
                Most personal trend systems underperform their backtests. Treat the first year as tuition and talk to a qualified adviser before committing savings.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written capital limit, a stop-loss level, three months of paper results and monthly self-reviews on file."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Write the amount you can afford to lose and nothing more"
                - "Choose a small universe that survives contract rounding"
                - "Paper trade for three months before committing money"
                - "Hold your monthly self-review and record it @recurring(monthly:17)"
            - name: Equity quant moving into futures trend research
              description: |-
                ## Purpose
                Researchers from cross-sectional equity work bring strong statistics but often miss futures specifics: rolls, margin, contract multipliers, time-series rather than ranked signals, and far fewer independent assets. A short conversion plan targets those gaps so equity habits do not create quiet errors.

                ## Milestones
                1. A list of equity assumptions that do not hold for futures, written up.
                2. One continuous series built and one roll traced by hand.
                3. A time-series signal coded and compared with a cross-sectional version.
                4. A colleague with futures experience reviewing your first backtest.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written list of equity assumptions that break in futures, plus a reviewed first futures backtest."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List the equity research habits you rely on most"
                - "Trace one futures roll by hand from raw contracts"
                - "Code a time-series signal and a cross-sectional variant"
                - "Ask a futures researcher to review your first backtest"
            - name: Trend-following chapter for a PhD thesis
              description: |-
                ## Purpose
                Doctoral chapters on trend following need a clear contribution against a well-worked literature, reproducible data and a defence of every choice. Planning the chapter from research question to examiner-ready draft keeps it from turning into another long backtest with no new claim.

                ## Milestones
                1. A contribution statement agreed with your supervisor.
                2. A literature map showing where the chapter adds something.
                3. Data and code archived so an examiner could rerun the results.
                4. A full chapter draft returned with supervisor comments addressed.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A full chapter draft with an agreed contribution, archived data and code, and supervisor comments addressed."
                cadence: phased
                effort_hours_estimate: "120"
              tasks:
                - "Draft a three-sentence contribution statement for your supervisor"
                - "Map the literature the chapter builds on and departs from"
                - "Archive data and code with a run script"
                - "Send the full draft to your supervisor"
            - name: Evaluating a trend manager as an allocator analyst
              description: |-
                ## Purpose
                Analysts on allocator or research teams are asked whether a managed futures programme is distinct or simply the common trend factor with fees. A structured evaluation using public benchmarks, return-based analysis and a question list makes the review comparable across managers, without recommending any.

                ## Milestones
                1. A standard question list covering universe, speed, sizing, rolls and risk limits.
                2. The programme's returns regressed on public trend factors.
                3. Drawdowns and recovery times compared with the benchmark.
                4. A written summary for your committee, separating facts from the manager's claims.

                ## Notes
                This is analysis for an internal review, not investment advice. Rely on audited figures where available and note anything that is unverified.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A written manager review with factor regression, drawdown comparison and answered question list, ready for committee."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Write a standard due diligence question list for trend managers"
                - "Regress the programme's returns on public trend factors"
                - "Compare drawdowns and recovery times with the benchmark"
                - "Read new manager letters and update the file @recurring(monthly:10)"
            - name: Trend research with ETFs when futures are unavailable
              description: |-
                ## Purpose
                Some researchers cannot trade futures, because of account type, jurisdiction or employer rules, and study trend following through exchange traded funds instead. That brings its own issues: fewer markets, tracking error, roll costs hidden inside commodity funds, and long-only constraints in some accounts.

                ## Milestones
                1. A list of funds mapping to each sector, with expense ratios and tracking notes.
                2. Commodity funds checked for how they roll and what it costs.
                3. The trend system rerun on fund prices and compared with the futures version.
                4. Long-only and no-shorting constraints tested if they apply to you.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A fund universe with costs and roll notes, and a backtest compared with the futures version, including any long-only constraint."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List funds that map to each futures sector"
                - "Read how each commodity fund rolls its futures"
                - "Rerun the trend system on fund prices"
                - "Test the long-only version if shorting is not allowed"
            - name: Trend signals in less liquid and alternative markets
              description: |-
                ## Purpose
                Some practitioners argue that trends persist longer in markets fewer funds trade, such as smaller commodities, emerging market currencies or exotic rates. Testing that claim honestly means accounting for wider spreads, data gaps, capacity and the fact that the evidence comes from fewer, noisier series.

                ## Milestones
                1. A candidate list of less liquid markets with data history and spread estimates.
                2. Data quality checks applied and failures recorded.
                3. Results compared with the core universe using realistic costs.
                4. A capacity estimate per market and a decision on inclusion.

                ## Notes
                Higher backtest returns in thin markets often vanish once realistic costs and position limits are applied.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision on each candidate market, backed by cost-adjusted results, data quality notes and a capacity estimate."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "List candidate less liquid markets with available history"
                - "Run the futures data checks on each new series"
                - "Backtest with spreads set from real quotes"
                - "Estimate capacity per market and record inclusion decisions"
            - name: Testing regime and trend strength filters
              description: |-
                ## Purpose
                Filters that switch trend signals off in choppy markets are the most popular improvement idea and among the most overfitted. Testing a small number of predefined filters, counting every one, and checking them on held-back years shows whether any really reduce whipsaw losses or merely fit the past.

                ## Milestones
                1. At most three filters defined in writing before testing.
                2. Each filter tested in-sample with the trial count logged.
                3. The best filter checked once on held-back years.
                4. A decision recorded, with the deflated result if multiple filters were tried.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded filter decision based on a single held-back test, with every filter tried counted in the research log."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Write down at most three filters before running any test"
                - "Test each filter in-sample and log the trials"
                - "Run the chosen filter once on held-back years"
                - "Record the decision with the deflated result"
            - name: Capacity and market impact for a growing trend book
              description: |-
                ## Purpose
                Because trend books trade in the same direction as one another and roll in similar windows, capacity is reached sooner than average daily volume suggests. Estimating capacity per market from volume, open interest and an impact model shows the asset level at which the book has to shift towards slower signals or drop markets.

                ## Milestones
                1. Position sizes at several book sizes compared with volume and open interest.
                2. An impact estimate applied to trades and rolls at each size.
                3. Net results plotted against book size.
                4. A capacity figure and the binding markets written down.

                ## Notes
                Exchange position limits apply to some contracts and can bind before impact does. Check them for each market.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A capacity estimate for the book with net results by size and the binding markets and limits listed."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Compute positions at five book sizes against open interest"
                - "Apply an impact estimate to trades and rolls at each size"
                - "Plot net results against book size"
                - "Recheck capacity against current open interest @recurring(yearly)"
            - name: Intraday trend signals and overnight gaps
              description: |-
                ## Purpose
                Most trend research uses daily settlements, yet futures trade nearly around the clock and some trends start in overnight sessions. Studying intraday signals and gap behaviour tells you whether faster data adds anything after higher costs, or simply adds noise and a heavier data pipeline.

                ## Milestones
                1. Intraday bar data sourced for a small set of liquid contracts.
                2. Session boundaries and gap handling defined.
                3. An intraday signal compared with its daily counterpart net of costs.
                4. A decision recorded on whether intraday data is worth the extra infrastructure.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A net-of-cost comparison of intraday and daily signals on liquid contracts, with a recorded infrastructure decision."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Source hourly bars for five liquid contracts"
                - "Define sessions and how overnight gaps are treated"
                - "Compare intraday and daily signals after costs"
                - "Record whether intraday data justifies the effort"
            - name: Return-based replication of a trend index
              description: |-
                ## Purpose
                Replication studies try to explain a managed futures index with a small set of trend portfolios, and a close fit says the index is mostly common factor exposure. Building a replication yourself sharpens your understanding of what drives sector returns and gives a benchmark for evaluating any trend programme.

                ## Milestones
                1. A target trend index and a candidate set of sector trend portfolios chosen.
                2. Replication weights estimated on a rolling window, without look-ahead.
                3. Out-of-sample tracking error and correlation reported.
                4. A note on which months the replication fails and why.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A rolling replication of a published trend index with out-of-sample tracking error, correlation and failure months explained."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Choose the target index and candidate sector portfolios"
                - "Estimate weights on a rolling window with no look-ahead"
                - "Report out-of-sample tracking error and correlation"
                - "List the months the replication misses and explain them"
            - name: Simulating drawdown length and depth
              description: |-
                ## Purpose
                A Sharpe ratio near the long-run figures for trend following implies drawdowns lasting years, and a single historical path hides how wide that range is. Simulating many paths from the strategy's return properties gives a distribution of drawdown depth and length you can put in the charter and use to judge a live slump calmly.

                ## Milestones
                1. A simulation method chosen, such as a block bootstrap of monthly returns.
                2. Distributions of maximum drawdown depth and length over five and ten years.
                3. The live or historical drawdown placed within those distributions.
                4. The review and halt levels in the risk register checked against the results.

                ## Notes
                Simulated paths inherit the backtest's optimism. Treat the distribution as a lower bound on how bad it can get.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Simulated distributions of drawdown depth and length over five and ten years, compared with the risk register's triggers."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Choose a block bootstrap length for monthly returns"
                - "Simulate drawdown depth and length over five and ten years"
                - "Place the current drawdown within the simulated range"
                - "Check the risk register triggers against the results"
---

# Trend-Following Research

This area is for researchers who study trend-following and managed futures style strategies, whether inside a CTA, on a multi-strategy team or alone with a small futures account. It starts with foundations (a written charter and stop rule, the futures universe, continuous series and rolls, carry separated from price, data checks, a baseline crossover, volatility-scaled sizing and risk limits), moves to the weekly, monthly and quarterly machinery that keeps the research honest, then the signal, sizing and diversification knowledge worth learning properly, the design decisions every trend system has to make, dated checkpoints and reviews, variants for a new hire, a solo researcher, an equity quant, a PhD student, an allocator and an ETF-only researcher, and finally specialist work on capacity, alternative markets, regime filters, intraday signals, replication and drawdown statistics.

What repeats is a weekly signal and position check, a weekly margin look, monthly research reviews, roll calendar upkeep, benchmark tracking and a drawdown diary, quarterly universe and correlation reviews and a yearly assumption review. The Risk register, Metrics log, Reading queue and Onboarding 30/60/90 templates pair with the projects that name them. Trend following is known for years of flat or losing returns between good spells, and most variants that look strong in a backtest fail out of sample: nothing here is trading or investment advice. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
