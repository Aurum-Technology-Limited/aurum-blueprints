---
id: quant-finance.statistical-arbitrage-research
name: Statistical Arbitrage Research
description: "A point-in-time universe, honest spread tests, half-life and hedge ratio studies, borrow, cost and capacity checks, crowding monitors and written stop rules for researching pairs, baskets and residual reversion."
category: business
version: 1.0.0
tags: [quant-finance, statistical-arbitrage-research, researcher, pairs-trading, mean-reversion, cointegration, crowding, capacity]
author: Aurum Technology
starter_structure:
  templates:
    - reading-queue
    - risk-register
    - metrics-log
    - meeting-notes
    - onboarding-30-60-90
  pillars:
    - name: Quantitative Finance & Trading
      emoji: "🧮"
      description: "Systematic research and trading run like engineering: alpha research and honest backtests, factor and risk models, execution and microstructure, statistics and machine learning, quant development and market data, prop-firm evaluations and personal algorithmic trading under strict risk rules, and quant careers. Organisation and method only, never trading advice."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Statistical Arbitrage Research
          description: "Researching statistical arbitrage: pairs and baskets, mean reversion tests, capacity, crowding, costs and why most spreads stop working."
          projects:
            - name: Stat arb research charter and scope
              description: |-
                ## Purpose
                Statistical arbitrage covers everything from two-stock pairs held for weeks to residual baskets turned over intraday, and research drifts when nobody has written down which corner you are in. A one-page charter fixes the asset class, universe, holding period, capital assumption and the question you are trying to answer, so every later test is judged against the same frame.

                ## Milestones
                1. A charter naming the asset class, the universe, the target holding period and the instrument set.
                2. A stated research question, for example whether sector-neutral pairs in large caps still revert after costs.
                3. Out-of-scope approaches listed, so trend and event strategies do not creep in.
                4. The charter dated and filed at the front of the research log.

                ## Notes
                Keep the capital assumption deliberately small at first. Capacity is studied later in this area, and a big assumed book hides the cost problem until too late.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated one-page charter states universe, holding period, instruments, research question and exclusions."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write one sentence describing the spreads you intend to study"
                - "Pick the universe, holding period and instruments and write them down"
                - "List the approaches that are out of scope for this research"
                - "File the dated charter at the front of the research log"
            - name: Written risk limits and stop rule for spreads
              description: |-
                ## Purpose
                Spreads that revert most of the time can diverge violently the rest, and the losses arrive in clusters when many funds hold the same trade. Writing gross and net exposure caps, per-spread loss limits, sizing rules and a strategy-level stop rule before any paper or live run means the decision to cut is made calmly, not in the middle of a drawdown.

                ## Milestones
                1. Per-spread and total gross exposure caps written as numbers.
                2. A per-spread loss limit and a time stop for positions that neither revert nor diverge.
                3. A strategy-level stop rule naming the drawdown or tracking gap that pauses all trading.
                4. The limits recorded in a risk register with the date and the reason for each figure.

                ## Notes
                Start from the **Risk register** template. Agree real limits with whoever owns the capital; these are research rules, not advice on what you should risk.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A risk register lists exposure caps, per-spread loss and time stops, sizing rule and a strategy stop rule, each with a stated reason."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the maximum gross exposure for one spread and for the whole book"
                - "Set a per-spread loss limit and a time stop in trading days"
                - "Write the drawdown that pauses the whole strategy"
                - "Review the limits before any new spread goes to paper trading @recurring(quarterly)"
            - name: Point-in-time universe for pairs and baskets
              description: |-
                ## Purpose
                Pairs drawn from today's index members quietly exclude every company that was delisted, merged or went bankrupt, and those are exactly the pairs that broke. A point-in-time universe with historical membership, delistings and liquidity at each date removes the largest single source of flattering stat arb backtests.

                ## Milestones
                1. Historical constituent lists or a point-in-time security master loaded for the full test period.
                2. Delisted securities included with their final returns, including delisting returns where available.
                3. A liquidity filter based on trailing traded value applied as of each formation date.
                4. A count of securities per date plotted, with any sudden jumps explained.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A universe table gives eligible securities per formation date, including later-delisted names, with a liquidity filter computed as of that date."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Check whether your data source carries historical index membership"
                - "Load delisted securities and their final returns for the test period"
                - "Compute a trailing traded value filter as of each formation date"
                - "Plot the eligible count per date and explain any jumps"
            - name: Price adjustments and borrow data for spread work
              description: |-
                ## Purpose
                Splits, dividends and special distributions must be handled the same way on both legs for a spread between two prices to mean anything, and the short leg costs money to borrow. Fixing total return series and attaching historical borrow fees or a conservative proxy stops phantom reversions from ex-dividend dates and hard-to-borrow names.

                ## Milestones
                1. Total return series built for every security in the universe, with the adjustment method written down.
                2. Ex-dividend and split dates checked on ten random pairs to confirm no artificial jumps remain.
                3. Historical borrow fees, or a tiered proxy by market capitalisation, attached to every short leg.
                4. Hard-to-borrow names flagged so they can be excluded or charged in tests.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every spread series uses documented total return prices and carries a borrow fee or proxy on its short leg, verified on ten sample pairs."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write down how your prices are adjusted for splits and dividends"
                - "Spot-check ten random pairs around ex-dividend dates for jumps"
                - "Attach a borrow fee or tiered proxy to every short leg"
                - "Flag hard-to-borrow names in the universe table"
            - name: Spread research log and idea register
              description: |-
                ## Purpose
                Stat arb research generates hundreds of formation windows, thresholds and universes, and a month later nobody remembers which combination produced the chart in the deck. A log with one entry per test, recording the data version, parameters and result, makes the search reviewable and keeps an honest count of variants tried.

                ## Milestones
                1. A log format with fields for hypothesis, universe, formation and trading windows, thresholds, costs and result.
                2. An idea register listing untested spread hypotheses with a one-line rationale each.
                3. Every test from the last month back-filled into the log as far as notebooks allow.
                4. A running count of variants tried per strategy family visible at the top of the log.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every spread test run in a month appears in the log with data version, parameters and result, and the variant count matches the notebooks."
                cadence: rolling
              tasks:
                - "Create the log with the fields for one spread test"
                - "Back-fill last month's tests from notebooks"
                - "Add three untested spread ideas to the idea register"
                - "Summarise the week's spread tests and variant count in the log @recurring(weekly:fri)"
            - name: Distance method pairs baseline replication
              description: |-
                ## Purpose
                Before trying anything clever, replicate the classic approach: match stocks by minimum squared distance between normalised prices over a formation year, then trade divergences in the following six months. A clean baseline on your own data shows what your pipeline produces with the simplest method, and published results tell you whether it is wired correctly.

                ## Milestones
                1. Normalised price series and the top twenty pairs by distance produced for each formation window.
                2. A trading rule opening at a two standard deviation divergence and closing on convergence, implemented with a one-day skip.
                3. Excess returns before and after costs reported by sub-period.
                4. A comparison with the decline in returns reported in the literature for recent decades.

                ## Notes
                Expect the after-cost result in recent years to be weak. That is the point of a baseline; a later method has to beat it, not a blank page.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A baseline report shows distance-method pairs returns before and after costs by sub-period, compared with published figures."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Normalise prices and rank pairs by squared distance in one formation year"
                - "Code the open and close rule with a one-day skip between signal and trade"
                - "Run every formation window and record returns before and after costs"
                - "Compare your sub-period results with published distance-method figures"
            - name: Synthetic mean-reverting spreads to test the pipeline
              description: |-
                ## Purpose
                Feeding the research code spreads with a known half-life, plus pairs of independent random walks, is the cheapest way to find bugs. If the pipeline finds reversion in pure noise, or misses it where it was planted, every real result is suspect, and the check takes an afternoon.

                ## Milestones
                1. Simulated Ornstein-Uhlenbeck spreads generated with half-lives of five, twenty and sixty days.
                2. Independent random walk pairs generated as a null set.
                3. The pipeline recovers the planted half-lives within a stated tolerance.
                4. Returns on the null set after costs are close to zero, or the cause of any profit is found and fixed.

                ## Notes
                Re-run this check whenever the backtester or data loader changes. A pipeline that makes money on random walks has a look-ahead bug.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The pipeline recovers planted half-lives within tolerance and shows no after-cost profit on independent random walk pairs."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Simulate spreads with half-lives of five, twenty and sixty days"
                - "Generate independent random walk pairs as a null set"
                - "Run both through the pipeline and compare estimated half-lives"
                - "Investigate any profit the pipeline finds on random walks"
            - name: Cost, slippage and borrow assumptions sheet
              description: |-
                ## Purpose
                Spread strategies trade four legs per round trip and often hold for days, so a few basis points of cost decide whether the edge survives. One sheet of spread, commission, impact and borrow assumptions, applied to every test, stops each experiment from quietly choosing kinder costs than the last.

                ## Milestones
                1. Half-spread, commission and impact assumptions written by liquidity bucket.
                2. Borrow fee assumptions written for general collateral and hard-to-borrow names.
                3. A rule for how costs scale with trade size relative to average daily volume.
                4. The sheet versioned and referenced by every backtest in the research log.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A versioned cost sheet covers spread, commission, impact and borrow by bucket, and every logged test cites its version."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Split the universe into three or four liquidity buckets"
                - "Write half-spread, commission and impact assumptions for each bucket"
                - "Add borrow fee assumptions for normal and hard-to-borrow shorts"
                - "Give the sheet a version number and cite it in the log"
            - name: Sealed holdout for spread research
              description: |-
                ## Purpose
                Pairs research reuses the same history again and again, so by the tenth threshold tweak the whole sample has been looked at. Setting aside the most recent period, or a slice of the universe, before any serious testing gives you one honest look at the end that no parameter has seen.

                ## Milestones
                1. A holdout period or universe slice chosen and written down with the date it was sealed.
                2. Research code configured so the holdout cannot be loaded without an explicit flag.
                3. A rule written for when the holdout may be opened and by whom.
                4. The seal checked and confirmed in the research log each quarter.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A holdout definition is dated in the log, the code refuses to load it by default, and an opening rule is written."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Choose the holdout years or universe slice and write them down"
                - "Add a guard so research code cannot read the holdout by default"
                - "Write the rule for when the holdout may be opened"
                - "Confirm in the log that the holdout has not been read @recurring(quarterly)"
            - name: Core reading on statistical arbitrage
              description: |-
                ## Purpose
                Reading a short list of the papers that shaped the field saves months of reinventing them: the distance method study, cointegration-based pairs, PCA residual reversion, the 2007 quant unwind and work on crowding and capacity. Working through them in order, with notes on method and decay, builds the vocabulary every later project here uses.

                ## Milestones
                1. A reading queue of eight to twelve papers and book chapters on pairs, residuals and crowding.
                2. A one-page note for each paper covering data, method, result and what has since decayed.
                3. Three open questions from the reading written into the idea register.
                4. The queue reviewed and pruned after the first six papers.

                ## Notes
                Start from the **Reading queue** template. Read the method sections twice and the results once; the method is what you will reuse.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "At least eight stat arb papers have a one-page note each, and three ideas from them are in the idea register."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Build a queue of eight to twelve stat arb papers"
                - "Write a one-page note on the first paper's data and method"
                - "Add open questions from the reading to the idea register"
                - "Read and note one paper from the queue @recurring(monthly:20)"
            - name: Cointegration tests on candidate pairs
              description: |-
                ## Purpose
                Correlated prices are not the same as a stationary spread, and pairs selected on correlation alone often drift apart for good. Applying Engle-Granger and Johansen tests correctly, with the right critical values and an eye on how many pairs you tested, separates spreads with evidence of a long-run relationship from coincidences in a large universe.

                ## Milestones
                1. Engle-Granger tests run on a candidate list with residual-based critical values, not ordinary unit root tables.
                2. Johansen tests run on the same list, with any disagreements between the two noted.
                3. The share of pairs passing compared with the share expected by chance given the number tested.
                4. Out-of-sample stability checked: how many passing pairs still pass in the next window.

                ## Notes
                With thousands of candidate pairs, a 5 percent test will pass hundreds by chance. Record the number tested beside every pass rate.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A report shows pass rates for both tests against the chance rate and the share of passing pairs that still pass one window later."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Run Engle-Granger tests on one sector's candidate pairs"
                - "Run Johansen tests on the same pairs and note disagreements"
                - "Compare the pass rate with the rate expected by chance"
                - "Re-test passing pairs in the following window and count survivors"
            - name: Half-life of mean reversion estimates
              description: |-
                ## Purpose
                A spread that reverts in three days and one that takes ninety are different strategies with different costs, capacity and risk. Fitting an Ornstein-Uhlenbeck or AR(1) model to each spread and reading off the half-life tells you whether its holding period fits your charter, and how far the estimate moves between windows.

                ## Milestones
                1. Half-lives estimated for every candidate spread in a formation window.
                2. The distribution of half-lives plotted and compared with the charter's holding period.
                3. Half-life stability measured across three consecutive windows.
                4. A rule written for excluding spreads whose half-life is too long or too unstable.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each candidate spread has half-life estimates for three windows, and a written exclusion rule cites a threshold."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Fit an AR(1) model to one spread and convert the coefficient to a half-life"
                - "Estimate half-lives for all candidates in one formation window"
                - "Repeat for two more windows and measure how much they move"
                - "Write the half-life exclusion rule into the charter"
            - name: Hedge ratio estimation methods compared
              description: |-
                ## Purpose
                The hedge ratio decides what the spread actually is, and ordinary least squares gives a different answer depending on which leg is the dependent variable. Comparing OLS both ways, total least squares and a rolling estimate on the same pairs shows how sensitive your results are to a choice most backtests never mention.

                ## Milestones
                1. Hedge ratios estimated four ways on twenty pairs: OLS each direction, total least squares and rolling OLS.
                2. Spread variance and half-life compared across the four methods.
                3. Strategy returns after costs compared, with the spread of outcomes reported.
                4. A default method chosen and written into the charter with the reason.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A comparison table shows spread variance, half-life and after-cost return for four hedge ratio methods, and a default is recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pick twenty pairs and estimate OLS hedge ratios in both directions"
                - "Add total least squares and a rolling OLS estimate"
                - "Compare spread variance, half-life and returns across methods"
                - "Record the default method and reason in the charter"
            - name: Kalman filter dynamic hedge ratios
              description: |-
                ## Purpose
                Relationships between two businesses drift as their mix, debt and index weight change, and a fixed hedge ratio slowly turns a hedged spread into a directional bet. A Kalman filter lets the ratio evolve, but its noise settings are free parameters that can overfit, so the study is as much about choosing them honestly as about the filter.

                ## Milestones
                1. A state-space model with a time-varying hedge ratio implemented and checked on simulated data with a known ratio.
                2. Noise parameters chosen on the formation period only, with the method written down.
                3. Spread behaviour and after-cost returns compared with the static and rolling methods.
                4. Sensitivity of results to the noise settings reported over a grid.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A Kalman hedge ratio model recovers a known ratio on simulated data, and its after-cost results are reported against static methods with a sensitivity grid."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Simulate a pair with a slowly changing known hedge ratio"
                - "Implement the filter and confirm it recovers the simulated ratio"
                - "Fit noise settings on the formation period only"
                - "Report results across a grid of noise settings"
            - name: Entry and exit thresholds on spread z-scores
              description: |-
                ## Purpose
                Two standard deviations in and zero out is a convention, not a finding, and thresholds are the parameter most often tuned until the backtest looks good. Studying how returns, trade count and cost drag change across a coarse grid of thresholds, and choosing on the formation data only, keeps this lever honest.

                ## Milestones
                1. A coarse grid of entry and exit thresholds defined in advance and logged as trials.
                2. Returns, trade counts, average holding time and cost share reported for each cell.
                3. The chosen thresholds selected on formation data and tested on later windows untouched.
                4. A plot showing whether performance is a smooth plateau or a single sharp peak.

                ## Notes
                A sharp peak in the threshold grid usually means noise. Prefer a choice in the middle of a broad plateau.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A threshold grid with every cell logged as a trial shows returns, trades and cost share, and the chosen cell is tested on later untouched windows."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Define a coarse grid of entry and exit z-scores before running anything"
                - "Log every cell of the grid as a trial in the research log"
                - "Report returns, trades and cost share for each cell"
                - "Test the chosen thresholds on the following windows"
            - name: PCA residual reversion study
              description: |-
                ## Purpose
                Instead of hand-picked pairs, many stat arb books trade each stock against its own factor-implied price, using principal components or sector ETFs to strip out common moves. Building residuals this way and testing whether they revert generalises pairs to the whole universe and is the bridge between a toy strategy and a desk-style book.

                ## Milestones
                1. Principal components estimated on rolling windows of returns with the number of factors chosen and justified.
                2. Residual returns and a cumulative residual for every stock computed point in time.
                3. A reversion signal on the residual tested with the cost sheet and holdout rules.
                4. Results compared with a version using sector ETFs as factors.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A report compares after-cost returns of PCA and sector ETF residual reversion signals on the same universe and period."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Estimate rolling principal components on daily returns"
                - "Compute residuals and a cumulative residual series for each stock"
                - "Test a residual reversion signal with the standard cost sheet"
                - "Repeat with sector ETFs as factors and compare"
            - name: Basket and ETF versus constituents spreads
              description: |-
                ## Purpose
                When an ETF or index drifts from the value of its holdings, or a group of similar stocks moves apart from its basket, there is a spread with a mechanical anchor. Studying these spreads teaches creation and redemption mechanics, basket construction and why the anchor sometimes fails when liquidity disappears.

                ## Milestones
                1. One ETF and its holdings reconstructed point in time with weights and cash.
                2. The premium or discount series computed and its half-life estimated.
                3. Costs of trading the full basket estimated against the size of typical gaps.
                4. Episodes where the gap widened sharply listed with what was happening in the market.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A study shows an ETF premium series, its half-life, the basket trading cost and a list of stress episodes."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Pick one liquid ETF and gather its historical holdings"
                - "Compute the premium or discount to the basket each day"
                - "Estimate the cost of trading the full basket"
                - "List the dates when the gap blew out and note the cause"
            - name: Short-term reversal in the cross section
              description: |-
                ## Purpose
                Daily and weekly reversal across a broad universe is the simplest stat arb signal and one of the most cost-sensitive. Measuring it gross and net, by liquidity bucket and through time, teaches how much of any reversion edge lives in names you cannot trade cheaply.

                ## Milestones
                1. A one-day and one-week reversal signal built on the point-in-time universe.
                2. Gross and after-cost returns reported by liquidity bucket.
                3. The trend in gross returns across decades plotted.
                4. A note on whether industry-adjusted reversal behaves differently from raw reversal.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A report shows gross and after-cost reversal returns by liquidity bucket and decade, with an industry-adjusted comparison."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Build one-day and one-week reversal signals"
                - "Split results by liquidity bucket, gross and after costs"
                - "Plot gross returns by decade"
                - "Repeat with returns adjusted for industry moves"
            - name: Copula and nonlinear dependence for pairs
              description: |-
                ## Purpose
                Linear spreads assume the two legs move together the same way in calm and stress, which is rarely true. Copula-based pair rules model the joint distribution directly; studying them shows when tail dependence changes the signal and when the extra complexity just adds parameters.

                ## Milestones
                1. Marginal distributions and two or three copula families fitted to one set of pairs.
                2. A conditional probability signal compared with the z-score signal on the same pairs.
                3. Parameter count and trial count recorded for the copula approach.
                4. A written verdict on whether the method earns its complexity.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A comparison of copula and z-score signals on the same pairs, with parameter counts and a written verdict."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Fit marginals and two copula families to one pair"
                - "Build a conditional probability entry rule"
                - "Compare it with the z-score rule on the same pairs"
                - "Write the verdict and parameter count in the log"
            - name: Weekly candidate spread review
              description: |-
                ## Purpose
                Candidate spreads accumulate faster than they get tested or killed. A fixed weekly slot to move each candidate forward one step, or drop it, keeps the pipeline short and forces a decision on spreads that have been almost ready for a month.

                ## Milestones
                1. A candidate list with stage, last test date and next action for every spread.
                2. A weekly review held for four consecutive weeks.
                3. Candidates that failed two reviews in a row retired with a one-line reason.
                4. The list kept to a size you can review in under an hour.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive weekly reviews are logged, and every candidate shows a stage and next action no older than a week."
                cadence: rolling
              tasks:
                - "Create the candidate list with stage and next action columns"
                - "Review every candidate and set its next step @recurring(weekly:mon)"
                - "Retire candidates that failed two reviews in a row"
                - "Cap the list at a number you can review in an hour"
            - name: Monthly spread decay check
              description: |-
                ## Purpose
                Mean reversion fades gradually: half-lives lengthen, hedge ratios wander and the share of spreads that converge falls. A monthly check of these three numbers on every live or paper candidate catches decay months before it shows in the profit and loss.

                ## Milestones
                1. A decay table with half-life, hedge ratio and convergence rate per spread by month.
                2. Thresholds written for when a change counts as decay.
                3. Three months of the table filled in.
                4. Any spread crossing a threshold flagged for the retirement discussion.

                ## Notes
                Start from the **Metrics log** template, one row per spread per month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three monthly rows per active spread are recorded, and every threshold breach has a flag and a note."
                cadence: rolling
              tasks:
                - "Set up the decay table with one row per spread per month"
                - "Write the thresholds that count as decay"
                - "Re-estimate half-life, hedge ratio and convergence rate for each spread @recurring(monthly:9)"
                - "Flag spreads that crossed a threshold for discussion"
            - name: Borrow availability and fee check
              description: |-
                ## Purpose
                Short legs become expensive or unavailable at exactly the moment a spread looks most attractive, often because others want the same short. Checking borrow fees and availability monthly on every candidate's short leg stops research from relying on shorts that would not be filled in practice.

                ## Milestones
                1. A source for borrow fees and availability chosen, or a documented proxy if none is available.
                2. Current fees recorded for every candidate short leg.
                3. Candidates whose short leg crosses a fee threshold flagged.
                4. Three months of fee history kept to compare with the backtest assumption.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Borrow fees for every candidate short leg are recorded monthly for three months and compared with the cost sheet."
                cadence: rolling
              tasks:
                - "Find where you can see borrow fees and availability"
                - "Record the current fee for every candidate short leg"
                - "Update borrow fees and flag any above the threshold @recurring(monthly:3)"
                - "Compare actual fees with the cost sheet assumption"
            - name: Corporate event watch on active pairs
              description: |-
                ## Purpose
                Mergers, spin-offs, index changes and earnings surprises break pairs overnight, and a spread that diverges on a takeover bid is not going to revert. A weekly look at upcoming events for every active pair lets you suspend a pair before the event rather than explain the loss after it.

                ## Milestones
                1. An event calendar covering earnings, index rebalances and announced corporate actions for every active pair.
                2. A written rule for suspending a pair around each event type.
                3. A weekly check held for four consecutive weeks.
                4. Past breaks in the backtest tagged with the event that caused them.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every active pair has its next known event listed, and a suspension rule is applied and logged for four weeks."
                cadence: rolling
              tasks:
                - "List the next earnings date and known corporate events for each active pair"
                - "Write the suspension rule for each event type"
                - "Check the coming week's events for every active pair @recurring(weekly:thu)"
                - "Tag past backtest breaks with their causing event"
            - name: Shadow portfolio of candidate spreads
              description: |-
                ## Purpose
                Backtests are stories about the past; a shadow portfolio records what the spread did after you wrote the rules down. Tracking candidates on paper with the exact rules and cost sheet, from a fixed start date, builds a short out-of-sample record that cannot be revised.

                ## Milestones
                1. A shadow book started with frozen rules and a written start date.
                2. Daily signals and hypothetical fills recorded without hindsight edits.
                3. A monthly comparison of shadow returns with the backtest's expected range.
                4. Six months of shadow history ready for the promotion review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six months of shadow signals and fills with frozen rules are recorded, and each month is compared with the backtest range."
                cadence: rolling
              tasks:
                - "Freeze the rules and write the shadow start date"
                - "Record hypothetical fills using the current cost sheet"
                - "Compare shadow returns with the backtest range @recurring(monthly:12)"
                - "Note any rule change as a new shadow book, not an edit"
            - name: Crowding monitor for spread strategies
              description: |-
                ## Purpose
                Stat arb profits shrink when many funds trade the same residuals, and crowded spreads unwind together, as August 2007 showed. A monthly crowding score built from short interest, factor overlap and how closely your spreads co-move with a generic reversal factor gives an early warning that a trade has become consensus.

                ## Milestones
                1. Two or three crowding measures chosen, such as days to cover, overlap with a reversal factor and pairwise spread correlation.
                2. A monthly crowding score computed for the candidate book.
                3. Historical crowding scores compared with subsequent spread returns.
                4. A written threshold at which new positions in a crowded spread are capped.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly crowding score exists for the candidate book, compared with later returns, and a cap rule is written."
                cadence: rolling
              tasks:
                - "Choose two or three crowding measures you can compute"
                - "Compute the crowding score for the current candidates @recurring(monthly:16)"
                - "Compare past crowding scores with later spread returns @recurring(quarterly)"
                - "Write the threshold that caps new crowded positions"
            - name: Quarterly capacity estimate refresh
              description: |-
                ## Purpose
                Capacity in stat arb is set by how much you can trade before your own impact eats the reversion, and it changes as volumes and spreads move. Re-estimating capacity every quarter keeps the assumed book size tied to current liquidity rather than the year the strategy was researched.

                ## Milestones
                1. Capacity estimated as the book size where after-cost returns fall to an agreed fraction of gross.
                2. Inputs, average daily volume and the impact model version, recorded.
                3. Change in capacity since last quarter explained.
                4. The assumed book size in the charter updated if needed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated quarterly capacity estimate with its inputs is recorded, and the charter's book size matches it."
                cadence: cyclic
              tasks:
                - "Write the after-cost fraction that defines capacity"
                - "Re-estimate capacity with current volumes and the impact model @recurring(quarterly)"
                - "Explain the change since last quarter in the log"
                - "Update the charter's assumed book size if capacity moved"
            - name: Quarterly regime review of mean reversion
              description: |-
                ## Purpose
                Reversion strength varies with volatility, dispersion and market-wide stress, and a strategy that worked through a calm year may be nothing more than that calm. A quarterly look at how your spreads performed by volatility and dispersion regime shows whether the edge is broad or lives in one state of the world.

                ## Milestones
                1. Regime definitions written in advance, for example tercile of index volatility and cross-sectional dispersion.
                2. Spread returns split by regime for the full backtest and the shadow period.
                3. Regimes where the strategy loses consistently named.
                4. A note on the current regime and what it implies for expectations.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter, a regime table shows spread returns by volatility and dispersion state and names the current regime."
                cadence: cyclic
              tasks:
                - "Write the regime definitions before splitting any results"
                - "Split backtest and shadow returns by regime @recurring(quarterly)"
                - "Name the regimes where the strategy consistently loses"
                - "Note the current regime in the research log"
            - name: Choosing a pairs selection method
              description: |-
                ## Purpose
                Distance, cointegration, correlation clustering and fundamental matching each produce different pairs with different failure modes. Comparing them on the same universe, costs and test windows, with the trials counted, turns a matter of taste into a recorded decision.

                ## Milestones
                1. Three or four selection methods implemented on the same universe and windows.
                2. Pair overlap between methods measured.
                3. After-cost results and stability compared in one table.
                4. A chosen method recorded with the reason and the runner-up.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A table compares three or more selection methods on identical data and costs, and a choice with reasons is recorded."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Pick three or four selection methods to compare"
                - "Run each on the same universe, windows and cost sheet"
                - "Measure how many pairs the methods share"
                - "Record the chosen method and the runner-up with reasons"
            - name: Sector-neutral versus market-neutral construction
              description: |-
                ## Purpose
                Restricting pairs to the same industry cuts the risk of hidden bets but shrinks the opportunity set; market-neutral books have more spreads and more exposure to sector rotations. Testing both with the same signals shows which exposures you are paid for and which you are carrying by accident.

                ## Milestones
                1. The same signal built under sector-neutral and market-neutral constraints.
                2. Net exposures to market, sectors and common style factors reported for each.
                3. After-cost returns and drawdowns compared.
                4. A construction choice written into the charter.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Both constructions are compared on exposures, returns and drawdowns, and the choice is written into the charter."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Build the signal under a sector-neutral constraint"
                - "Build the same signal market-neutral"
                - "Report net factor exposures and drawdowns for both"
                - "Write the construction choice into the charter"
            - name: Price stop versus time stop on diverging spreads
              description: |-
                ## Purpose
                Every pairs trader has held a diverging spread waiting for it to come back while it kept going. Testing price stops, time stops and both together on the same backtest shows the real cost of cutting early against the tail risk of never cutting, and gives the risk limits project an evidence base.

                ## Milestones
                1. Price stop, time stop and combined stop rules defined in advance.
                2. Each rule tested on the same signals with the full cost sheet.
                3. Worst-case spread losses and the distribution of holding times compared.
                4. The chosen stop rule entered in the risk register.

                ## Notes
                A stop that makes the backtest look worse can still be the right call; you are buying protection against the break you have not seen yet.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three stop rules are compared on worst losses and holding times, and the chosen rule is entered in the risk register."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Define the price, time and combined stop rules before testing"
                - "Run each stop rule on the same signals and costs"
                - "Compare worst spread losses and holding time distributions"
                - "Enter the chosen stop rule in the risk register"
            - name: Position sizing by spread volatility
              description: |-
                ## Purpose
                Equal notional per pair lets the noisiest spreads dominate risk. Sizing by each spread's estimated volatility, with a cap, spreads risk more evenly and makes the book's behaviour easier to predict, but the volatility estimate itself becomes a parameter to test honestly.

                ## Milestones
                1. Equal notional, inverse volatility and capped inverse volatility sizing implemented.
                2. Realised risk contribution per spread compared across the three.
                3. After-cost returns, turnover and drawdowns compared.
                4. The sizing rule and its cap recorded in the risk register.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three sizing rules are compared on risk contribution, turnover and drawdown, and the chosen rule with its cap is recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Implement equal notional and inverse volatility sizing"
                - "Add a cap on any single spread's size"
                - "Compare risk contribution and turnover across the rules"
                - "Record the sizing rule and cap in the risk register"
            - name: Pairs book or residual portfolio decision
              description: |-
                ## Purpose
                A pairs book is easy to explain and monitor; a residual portfolio across the whole universe is more diversified but harder to reason about. Setting the two side by side on capacity, cost, crowding and how well you can explain a bad month makes the choice deliberate.

                ## Milestones
                1. Best pairs and best residual versions compared on returns, turnover and capacity.
                2. Crowding scores compared between the two.
                3. A worst month for each explained in plain language.
                4. The decision recorded with what would make you revisit it.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision compares pairs and residual books on returns, turnover, capacity and crowding, with a revisit condition."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Put the best pairs and residual results in one table"
                - "Compare their crowding scores and capacity"
                - "Write a plain-language account of each one's worst month"
                - "Record the decision and the condition for revisiting it"
            - name: Turnover reduction in a reversion signal
              description: |-
                ## Purpose
                Reversion signals flip quickly, and much of their gross return goes to the trading desk. Smoothing the signal, adding a no-trade band or trading only on larger changes can cut costs sharply; testing these changes against the original shows what is left net.

                ## Milestones
                1. Current turnover and cost share measured as the baseline.
                2. Signal smoothing, a no-trade band and a minimum trade size each tested.
                3. Net returns and turnover compared with the baseline.
                4. The chosen change logged with the trial count it added.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Three turnover reductions are tested against a measured baseline, and the chosen change is logged with its trial count."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Measure baseline turnover and the share of gross lost to costs"
                - "Test signal smoothing over a few lengths"
                - "Test a no-trade band and a minimum trade size"
                - "Log the chosen change and the trials it added"
            - name: Liquidity filter tightening test
              description: |-
                ## Purpose
                Small, illiquid names often carry the best gross reversion and the worst real costs. Tightening the liquidity filter in steps and watching how gross and net returns change shows how much of the edge depends on stocks you could not trade at size.

                ## Milestones
                1. Four or five liquidity cut-offs defined by traded value.
                2. Gross and net returns reported at each cut-off.
                3. Capacity estimated at each cut-off.
                4. A filter level chosen and written into the charter.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A table shows gross return, net return and capacity at four or more liquidity cut-offs, and the chosen level is in the charter."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Define four or five traded value cut-offs"
                - "Report gross and net returns at each cut-off"
                - "Estimate capacity at each cut-off"
                - "Write the chosen filter into the charter"
            - name: Promotion review for a spread strategy
              description: |-
                ## Purpose
                Moving a spread strategy from research to paper or live trading is the moment errors become expensive. A formal review with a fixed pack, covering trial count, holdout result, costs, capacity, crowding and the stop rule, means the decision is made on evidence a second person has seen.

                ## Milestones
                1. A review pack with charter, trial count, holdout result, cost sheet version, capacity and crowding.
                2. At least one reviewer who did not build the strategy.
                3. Objections and answers recorded in meeting notes.
                4. A decision of promote, revise or reject recorded with conditions.

                ## Notes
                Start from the **Meeting notes** template. Write the bar for promotion before the meeting, not during it.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A promotion review is held with an independent reviewer, and a recorded decision lists the conditions attached."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write the evidence bar a spread strategy must meet"
                - "Assemble the review pack from the log and charter"
                - "Book a reviewer who did not build the strategy"
                - "Record the decision and its conditions in meeting notes"
            - name: Replaying the August 2007 quant unwind
              description: |-
                ## Purpose
                In August 2007 many equity market-neutral books lost heavily in a few days as crowded positions were sold at once, then partly recovered. Replaying your strategy through that week, and other deleveraging episodes, shows how a crowded unwind would hit you and whether your stop rule fires in time.

                ## Milestones
                1. The strategy's positions reconstructed for July and August 2007 using the point-in-time universe.
                2. Daily returns through the unwind compared with a generic reversal factor.
                3. The day the stop rule would have triggered identified.
                4. Two or three other deleveraging episodes replayed the same way.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A replay shows daily strategy returns through August 2007 and two other episodes, with the stop rule trigger date marked."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Read one account of the August 2007 quant unwind"
                - "Reconstruct your positions for that summer"
                - "Compare daily returns with a generic reversal factor"
                - "Mark the day your stop rule would have fired"
            - name: Opening the holdout for a final spread test
              description: |-
                ## Purpose
                The holdout is worth something only if it is opened once, for a strategy whose rules are frozen. Running the final test with a pre-written pass bar, and recording the result whatever it is, gives the only out-of-sample number in the research that no tuning has touched.

                ## Milestones
                1. Rules, parameters and cost sheet version frozen and recorded before opening.
                2. A pass bar written in advance, such as a minimum after-cost return and maximum drawdown.
                3. The holdout run once and the result recorded unedited.
                4. A decision made on the result, including rejecting the strategy if it fails.

                ## Notes
                If the strategy fails, do not tweak and re-run on the holdout. It is now in-sample; start a new holdout for the next attempt.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A holdout test is run once on frozen rules against a written pass bar, and the unedited result and decision are logged."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Freeze rules, parameters and the cost sheet version"
                - "Write the pass bar before opening the holdout"
                - "Run the holdout test once and log the result unedited"
                - "Record the decision, including rejection if it fails"
            - name: Stat arb research seminar presentation
              description: |-
                ## Purpose
                Presenting a spread strategy to peers, with the trial count, costs and failures shown, surfaces the questions you have stopped asking yourself. A short seminar also forces you to explain why the spread should revert at all, which is the question most strategies cannot answer.

                ## Milestones
                1. Slides covering the economic reason for reversion, method, trial count, costs and capacity.
                2. A slide on what did not work and why.
                3. The talk given to at least three researchers.
                4. Questions and follow-up tests written into the idea register.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A seminar is given to at least three peers, and every follow-up test raised is entered in the idea register."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write a one-line economic reason the spread should revert"
                - "Draft slides on method, trial count, costs and failures"
                - "Book a slot with at least three researchers"
                - "Add every follow-up question to the idea register"
            - name: Year-end stat arb research retrospective
              description: |-
                ## Purpose
                Once a year, look at the whole research effort: how many spreads were tested, how many promoted, how the promoted ones did against their backtests and where the time went. The retrospective sets next year's priorities on evidence and shows how fast your edges decay in practice.

                ## Milestones
                1. Counts of ideas tested, candidates shadowed and strategies promoted.
                2. Promoted strategies' live or shadow results compared with their backtests.
                3. Hours by project category estimated from the log.
                4. Three priorities and two things to stop doing written for next year.

                ## Notes
                Ask the agent to draft the summary tables from the research log, then check every number against the source.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A dated retrospective gives annual counts, backtest versus realised results for promoted strategies and next year's priorities."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Ask the agent to draft summary tables from the research log"
                - "Compare promoted strategies' results with their backtests"
                - "Write three priorities and two things to stop"
                - "Hold the stat arb research retrospective @recurring(yearly)"
            - name: Stat arb on a solo researcher's budget
              description: |-
                ## Purpose
                Independent researchers rarely have tick data, borrow feeds or a prime broker's cost estimates. Planning around free or low-cost daily data, conservative cost and borrow proxies and liquid large caps keeps the research honest within what you can actually afford to measure.

                ## Milestones
                1. A list of data you can afford, with its gaps such as survivorship or missing borrow history.
                2. Cost and borrow proxies set deliberately conservative to cover the gaps.
                3. The universe limited to names where daily data and proxies are credible.
                4. A note on which conclusions your data can and cannot support.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written plan lists affordable data with its gaps, conservative proxies and the conclusions the data cannot support."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the data sources you can afford and their known gaps"
                - "Set cost and borrow proxies on the conservative side"
                - "Restrict the universe to liquid names your data covers well"
                - "Write which conclusions your data cannot support"
            - name: Academic pairs papers versus desk standards
              description: |-
                ## Purpose
                For a researcher moving from a PhD or a finance department, published pairs results often ignore borrow, impact, delistings and the number of variants tried. Re-running one academic result under desk standards shows what changes and makes the difference concrete in interviews and first projects.

                ## Milestones
                1. One published pairs or reversal result replicated as closely as the data allows.
                2. The same strategy re-run with point-in-time universe, the cost sheet and borrow fees.
                3. The gap between the published and desk-standard results explained line by line.
                4. A short write-up suitable for discussing with a research lead.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A write-up shows one published result and its desk-standard re-run, with each source of difference quantified."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Choose one published pairs or reversal paper with clear methods"
                - "Replicate the headline result on your data"
                - "Re-run it with the point-in-time universe and full costs"
                - "Write up each source of difference in a page"
            - name: Crypto spread research and venue risk
              description: |-
                ## Purpose
                Crypto offers many apparent spreads, between venues, between spot and perpetual futures and between related tokens, but the risks differ from equities: venue failure, withdrawal limits, funding rates and fragmented data. Researching these spreads with venue risk counted as a cost keeps the numbers from looking far better than they are.

                ## Milestones
                1. Spread types in scope chosen, such as cross-venue, spot versus perpetual or related tokens.
                2. Fees, funding rates and withdrawal limits recorded per venue.
                3. A venue risk rule written, such as a maximum share of capital on any one venue.
                4. Backtests run with funding and transfer delays included.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A study covers chosen crypto spread types with fees, funding and transfer delays included, and a written venue exposure cap."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Pick which crypto spread types are in scope"
                - "Record fees, funding rates and withdrawal limits per venue"
                - "Write the maximum share of capital for any one venue"
                - "Check venue fees and funding rate changes @recurring(monthly:28)"
            - name: Futures calendar and inter-commodity spreads
              description: |-
                ## Purpose
                In futures, stat arb often means calendar spreads and related contracts such as crude against products or two grain markets. These spreads have physical anchors, roll mechanics and seasonal patterns that equities lack, so the research steps differ: continuous contract construction, delivery months and margin offsets.

                ## Milestones
                1. Contract-level data assembled with a documented roll rule.
                2. Two or three spreads built with their physical or economic link written down.
                3. Seasonality and half-life estimated for each spread.
                4. Exchange margin offsets and costs included in the test.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Two or more futures spreads are tested with a written roll rule, seasonality, half-life and margin offsets included."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Gather contract-level futures data and write the roll rule"
                - "Build two or three spreads and write each one's economic link"
                - "Estimate seasonality and half-life for each spread"
                - "Include exchange margin offsets and costs in the backtest"
            - name: First 90 days on a stat arb team
              description: |-
                ## Purpose
                Joining a stat arb pod means learning someone else's universe, cost model, risk system and conventions before contributing anything. A 30, 60 and 90-day plan with clear learning goals and a first small contribution gets you trusted with real research faster.

                ## Milestones
                1. The team's universe, cost model, risk limits and promotion process written up in your own words by day 30.
                2. One existing strategy's backtest reproduced from the team's code by day 60.
                3. A first small improvement or study proposed and reviewed by day 90.
                4. Feedback from your lead recorded at each checkpoint.

                ## Notes
                Start from the **Onboarding 30/60/90** template. Respect confidentiality: keep firm data and code inside firm systems, never in personal notes.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: deliverable
                success_criteria: "By day 90, one team strategy is reproduced, a first study is reviewed, and lead feedback is recorded at days 30, 60 and 90."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Write down what your lead expects by day 30, 60 and 90"
                - "Summarise the team's universe, costs and risk limits in your own words"
                - "Reproduce one existing strategy's backtest from team code"
                - "Propose one small study for review by day 90"
            - name: Inheriting another researcher's spread book
              description: |-
                ## Purpose
                When a colleague leaves, their spreads often keep running with little documentation and assumptions nobody has checked. A structured handover review, rebuilding each strategy's rationale, data, costs and stop rules, finds the problems before the book has a bad month under your name.

                ## Milestones
                1. Every inherited strategy listed with its code location, data sources and owner history.
                2. Each backtest reproduced, or the failure to reproduce documented.
                3. Missing stop rules, risk limits or cost assumptions identified and filled.
                4. A keep, fix or retire recommendation for each strategy.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Each inherited strategy has a reproduction result, filled gaps and a keep, fix or retire recommendation."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "List every inherited strategy with its code and data location"
                - "Reproduce each backtest or document why it fails"
                - "Fill missing stop rules, limits and cost assumptions"
                - "Write a keep, fix or retire recommendation for each"
            - name: Intraday stat arb with high-frequency data
              description: |-
                ## Purpose
                Intraday spreads revert in minutes, but bid-ask bounce, asynchronous trading and stale quotes create reversion that is not tradable. Researching at this horizon means using quote midpoints, aligning timestamps carefully and modelling fills against the book rather than at the last price.

                ## Milestones
                1. Quote and trade data aligned to a common clock with the method documented.
                2. Spreads built on midpoints with stale quote filters.
                3. Fill assumptions modelled on crossing the spread or queue position, not last trade.
                4. Results compared with and without the bounce corrections to show how much was artefact.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An intraday study shows spread returns with and without bounce corrections and with fills modelled against the quoted book."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Align quote and trade timestamps for one pair"
                - "Build the spread on midpoints with a stale quote filter"
                - "Model fills as crossing the spread"
                - "Compare returns with and without the bounce corrections"
            - name: Capacity and impact model for a spread book
              description: |-
                ## Purpose
                Simple capacity rules of thumb break once spreads trade correlated names at the same time. Building an impact model at the book level, accounting for aggregate trading in each name and for alpha decay while orders fill, gives a capacity curve rather than a single guess.

                ## Milestones
                1. An impact model with a square-root or similar form, parameters sourced and documented.
                2. Aggregate trades per name across spreads netted before impact is applied.
                3. Alpha decay during execution included in the simulation.
                4. A capacity curve of net return against book size produced.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A capacity curve shows net return against book size using a documented impact model with netting and alpha decay."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Choose an impact model form and document its parameters"
                - "Net trades per name across all spreads before applying impact"
                - "Add signal decay during the execution window"
                - "Plot net return against book size"
            - name: Measuring crowding with factor and holdings overlap
              description: |-
                ## Purpose
                Beyond a monthly score, a deeper study asks how much of your residual return is shared with known stat arb factors and with what public holdings filings suggest others own. Quantifying the overlap tells you whether your edge is distinct or a copy of the industry book.

                ## Milestones
                1. Strategy returns regressed on reversal, momentum and liquidity factors, with the unexplained share reported.
                2. Overlap with public holdings data estimated where available.
                3. The overlap tracked over several years.
                4. A note on how distinct the strategy is and what that implies for unwind risk.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A report gives the share of strategy returns explained by common factors and estimated holdings overlap over several years."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Regress strategy returns on reversal, momentum and liquidity factors"
                - "Estimate holdings overlap from public filings where possible"
                - "Track the overlap through several years"
                - "Write what the overlap means for unwind risk"
            - name: Post-mortem library of spreads that stopped working
              description: |-
                ## Purpose
                Most spreads stop working because of structural breaks, crowding, cost changes or because the original result was noise. A library of short post-mortems on every retired spread, classified by cause, turns failures into the evidence that shapes which ideas you test next.

                ## Milestones
                1. A post-mortem format with cause categories such as break, crowding, costs, decay or never real.
                2. A post-mortem written for every spread retired so far.
                3. Causes counted to show which failure is most common.
                4. The most common cause linked to a change in research process.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "Every retired spread has a classified post-mortem, and the most common cause is linked to a recorded process change."
                cadence: rolling
              tasks:
                - "Write the post-mortem format and cause categories"
                - "Write post-mortems for spreads already retired"
                - "Add a post-mortem for each spread retired this quarter @recurring(quarterly)"
                - "Link the most common cause to one process change"
            - name: Event-conditioned mean reversion filters
              description: |-
                ## Purpose
                Some divergences follow news that changes value, others follow liquidity-driven selling that reverses. Conditioning entry on whether a move came with earnings, announcements or unusual volume tests whether filtering out informed moves improves the signal or simply cuts trades.

                ## Milestones
                1. Event flags built point in time from earnings dates, announcements and volume spikes.
                2. Signal performance split by event and no-event divergences.
                3. A filtered strategy compared with the unfiltered one after costs.
                4. The filter accepted or rejected with its trial count logged.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A study shows reversion after event and non-event divergences, and a filter decision is logged with its trial count."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Build point-in-time event flags from earnings and volume spikes"
                - "Split divergences into event and non-event groups"
                - "Compare filtered and unfiltered strategies after costs"
                - "Log the filter decision and its trial count"
---

# Statistical Arbitrage Research

This area is for researchers studying statistical arbitrage: pairs, baskets, index and ETF spreads, and residual reversion against a factor model. It starts with foundations (a research charter, written risk limits, a point-in-time universe, cost and borrow assumptions, a sealed holdout and a naive pairs baseline), then the methods worth learning properly (cointegration tests, half-lives, hedge ratios, thresholds, PCA residuals), the standing machinery that watches candidates decay, the design decisions, review events, situations such as a solo budget or a new asset class, and finally the specialist work on capacity, crowding and why spreads stop working.

The rhythms are a weekly candidate review and corporate event watch, monthly decay, borrow, crowding and shadow portfolio checks, and quarterly capacity, regime and holdout audits. The Reading queue, Risk register, Metrics log, Meeting notes and Onboarding 30/60/90 templates pair with the study list, the risk limits, decay tracking, promotion reviews and joining a stat arb team. Nothing here is trading advice, and most spreads that look clean in a backtest fail out of sample, which is why every strategy in this area carries a stop rule before it carries capital. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
