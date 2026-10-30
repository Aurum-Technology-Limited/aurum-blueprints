---
id: quant-finance.options-strategy-research
name: Options Strategy Research
description: "Options strategies studied like a researcher: payoffs and Greeks you can explain, clean historical chains, backtests with honest fills and assignment, written risk limits and a go or no-go gate before any money is involved."
category: business
version: 1.0.0
tags: [quant-finance, options-strategy-research, researcher, everyone, options, greeks, implied-volatility, assignment-risk]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - metrics-log
    - reading-queue
    - risk-register
    - development-plan
  pillars:
    - name: Quantitative Finance & Trading
      emoji: "🧮"
      description: "Systematic research and trading run like engineering: alpha research and honest backtests, factor and risk models, execution and microstructure, statistics and machine learning, quant development and market data, prop-firm evaluations and personal algorithmic trading under strict risk rules, and quant careers. Organisation and method only, never trading advice."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Options Strategy Research
          description: "Researching options strategies as a study, not a tip sheet: payoff and Greeks analysis, historical implied volatility data, backtests with realistic costs and assignment risk."
          projects:
            - name: Options research charter with written limits
              description: |-
                ## Purpose
                Options are where enthusiasm most quickly turns into real losses, because a strategy that wins nine months out of ten can give it all back in a week. A one-page charter that says what you are studying, which underlyings and structures are in scope, and the hard limits that apply if anything ever moves from paper to real money sets the rules while you are calm, not after a good month.

                ## Milestones
                1. A one-page charter naming the questions, underlyings and strategy families in scope.
                2. Structures you will not study or trade, such as naked short calls, listed by name.
                3. Written limits for any future live use: maximum loss per position, per month and in total, plus a stop rule.
                4. A statement that the charter is reviewed yearly and only changed after a written reason.

                ## Notes
                Write the stop rule as a number and an action, for example a monthly loss figure after which all positions are closed and research pauses for a set period. A limit with no action attached is a wish.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed and dated one-page charter listing scope, excluded structures, numeric loss limits and a stop rule with its action."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write three questions you want options research to answer"
                - "List the underlyings and strategy families you will study"
                - "Name the structures you exclude and write why for each"
                - "Set numeric loss limits and a stop rule with the action it triggers"
                - "Reread the charter and record any change with its reason @recurring(yearly)"
            - name: Contract specification sheet for each studied underlying
              description: |-
                ## Purpose
                Two options on similar indices can differ in multiplier, exercise style, settlement method and last trading time, and a backtest that ignores those details books profits that never existed. A specification sheet per underlying, taken from the exchange's own documents, is the reference every later study checks against.

                ## Milestones
                1. A sheet per underlying with multiplier, exercise style, settlement type and tick size.
                2. Expiry cycles listed, including weekly, monthly, quarterly and end-of-month series where they exist.
                3. Last trading time and settlement price method recorded, such as a closing price or an opening auction.
                4. The source document and date noted on each sheet so it can be rechecked.

                ## Notes
                Cash-settled European index options and physically settled American single-stock options behave very differently around expiry. Keep them on separate sheets.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A specification sheet exists for every underlying in the charter, each with its source document and the date it was checked."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Download the exchange contract specification for your first underlying"
                - "Record multiplier, exercise style, settlement and tick size"
                - "List every expiry cycle the exchange lists for the contract"
                - "Note how the final settlement price is determined"
            - name: Payoff and profit-and-loss diagram toolkit
              description: |-
                ## Purpose
                Most mistakes with multi-leg positions come from never having drawn the payoff, so a short leg hidden inside a spread surprises you at expiry. A small, tested tool that plots expiry payoff and today's profit and loss for any combination of legs lets you see the shape of a position before studying its history.

                ## Milestones
                1. A function that takes a list of legs and plots payoff at expiry.
                2. A second curve showing profit and loss today at a chosen implied volatility and days to expiry.
                3. Breakevens, maximum gain and maximum loss printed beside each chart.
                4. Results for a covered call, a vertical spread and an iron condor checked against hand calculations.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A payoff tool that reproduces hand-calculated breakevens and maximum loss for three standard structures."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Sketch a long call and a short put payoff by hand on paper"
                - "Write a leg structure with strike, type, side, quantity and premium"
                - "Plot expiry payoff and today's curve for a vertical spread"
                - "Check breakevens for three structures against your hand workings"
            - name: Greeks calculator reconciled with broker figures
              description: |-
                ## Purpose
                Delta, gamma, vega and theta are only useful if yours match what the market and your broker show, within known differences in model and inputs. Reconciling your calculator against a broker's or data vendor's Greeks for a handful of real contracts exposes unit mistakes, such as theta per year instead of per day, before they distort every study.

                ## Milestones
                1. A calculator producing delta, gamma, vega, theta and rho for single options and whole positions.
                2. Units fixed and documented: vega per volatility point, theta per calendar day.
                3. Twenty contracts compared with broker or vendor Greeks, differences tabulated.
                4. Every difference above a stated tolerance explained by model, dividend or rate inputs.

                ## Notes
                For American options a Black-Scholes calculator will disagree with a broker's tree model near ex-dividend dates. Record that as a known difference rather than forcing a match.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A table of twenty contracts showing your Greeks beside broker figures, with every gap above tolerance explained in writing."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write down the units you will quote each Greek in"
                - "Pick twenty contracts across strikes and expiries for one underlying"
                - "Record broker or vendor Greeks for them at one timestamp"
                - "Tabulate your figures beside theirs and explain each large gap"
            - name: Historical option chain data source decision
              description: |-
                ## Purpose
                Research of this kind lives or dies on the history you can buy or download, and end-of-day chains, intraday quotes and computed implied volatility files differ hugely in price, coverage and honesty about how quotes were sampled. Choosing a source against written criteria, after a trial, avoids paying for years of data that turns out to be last trades rather than quotes.

                ## Milestones
                1. Criteria written: underlyings, years of history, quote timestamp, bid and ask fields, delisted series and cost.
                2. Three sources shortlisted, from free broker exports to paid vendors.
                3. A trial file from at least two sources checked against the same trading day.
                4. A decision recorded with the licence terms that limit how the data may be used.

                ## Notes
                Start from the **Purchase decision** template. Ask every vendor at what time of day their end-of-day snapshot is taken: a closing print and a quote fifteen minutes before close give different implied volatilities.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written source decision comparing three options on the same criteria, with trial results and licence limits recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the six criteria your option chain data must meet"
                - "Request trial files for one underlying from two sources"
                - "Compare one trading day across both trial files strike by strike"
                - "Recheck licence terms and renewal cost before the anniversary @recurring(yearly)"
            - name: Option chain cleaning rules for stale and crossed quotes
              description: |-
                ## Purpose
                Raw chains are full of zero bids, crossed or locked markets, quotes that have not moved for hours and deep strikes with no real interest, and a backtest that trades at those prices invents profits. Written cleaning rules, applied the same way to every study, make results comparable and stop a single bad print from deciding a conclusion.

                ## Milestones
                1. Rules for dropping zero-bid, crossed, locked and stale quotes written with thresholds.
                2. A minimum open interest or volume filter set for strikes eligible to trade in a study.
                3. Each rule implemented as a function with a count of rows it removes.
                4. A cleaning report produced for one year of data showing what was removed and why.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A cleaning module with written thresholds and a one-year report counting rows removed by each rule."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Count zero-bid and crossed quotes in one month of chain data"
                - "Write a threshold for stale quotes and justify it in a sentence"
                - "Set a minimum open interest for strikes a study may trade"
                - "Run the rules on one year and save the removal report"
            - name: Strategy catalogue grouped by Greek exposure
              description: |-
                ## Purpose
                Strategy names such as iron condor or jade lizard hide what really drives the result: whether you are long or short volatility, long or short gamma, and how much direction you carry. Grouping every strategy you might study by its main exposures shows which ones are really the same bet and keeps the research list short.

                ## Milestones
                1. Every candidate strategy listed with its legs and typical strikes.
                2. Each tagged with the sign of delta, gamma, vega and theta at entry.
                3. Strategies with the same exposure profile grouped, with one chosen to study per group.
                4. The worst-case scenario for each group written in one sentence.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A catalogue in which every strategy carries Greek signs at entry, a group, and a one-sentence worst case."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every options strategy you have read about or been pitched"
                - "Use the payoff tool to tag each with Greek signs at entry"
                - "Group strategies that share the same exposure profile"
                - "Write the worst-case market move for each group"
            - name: Options cost model with realistic fill assumptions
              description: |-
                ## Purpose
                Bid and ask spreads on options are wide relative to the premium, so a study that fills every leg at the mid price can turn a losing strategy into a winner. A cost model that charges a share of the spread per leg, plus commissions, exchange and regulatory fees per contract, gives each backtest a cost line you can defend.

                ## Milestones
                1. Per-contract commissions and fees for your broker or a representative one recorded.
                2. A fill rule set, such as mid plus a fraction of the half spread, with the fraction stated.
                3. Higher costs applied to multi-leg entries, exits near expiry and illiquid strikes.
                4. Every backtest reporting results at mid, at your rule and at the far touch side by side.

                ## Notes
                If a strategy only works at mid, record it as not working. Real fills on multi-leg orders in thin strikes rarely land there.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A documented cost model applied to every backtest, which reports results at mid, at the house rule and at the touch."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Collect per-contract commission and fee figures from a broker schedule"
                - "Measure the typical spread as a share of premium for your strikes"
                - "Write the fill rule and the fraction of spread it charges"
                - "Recheck broker fee schedules and update the model @recurring(quarterly)"
            - name: Assignment, exercise and pin risk rulebook
              description: |-
                ## Purpose
                Short American options can be assigned early, most often on calls the day before an ex-dividend date and on deep puts, and a position near the strike at expiry can leave you with unexpected shares over a weekend. A rulebook that says how your studies model assignment, and what you would do in each case, turns a hidden risk into a line in the backtest.

                ## Milestones
                1. Conditions that make early assignment likely written down, with the dividend check spelled out.
                2. A rule for modelling assignment in backtests, including the stock position and its cost.
                3. Pin risk handling defined for positions within a set distance of the strike at expiry.
                4. Physically and cash-settled contracts treated separately in the rulebook.

                ## Notes
                Your broker's exercise cut-off and automatic exercise threshold matter as much as the exchange rules. Record both.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written rulebook covering early assignment, pin risk and settlement type, used by every backtest that holds short options."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read your broker's exercise and assignment policy and note cut-off times"
                - "Write the dividend condition that makes early call assignment likely"
                - "Define how a backtest books stock received on assignment"
                - "Check ex-dividend dates against any open short calls in the paper book @recurring(weekly:mon)"
            - name: Margin requirement study for each strategy structure
              description: |-
                ## Purpose
                Return on capital for an options strategy depends on how much margin it ties up, and margin can jump just as markets fall. Recording the requirement for each structure under your broker's method, and how it changed in past sell-offs where data exists, stops a study from quoting returns on capital it could not have kept.

                ## Milestones
                1. The margin method your broker uses identified and summarised in plain words.
                2. Initial and maintenance requirement computed for each catalogued structure at entry.
                3. Requirement recomputed after a large adverse move for the same structures.
                4. Backtest returns quoted on margin used, with the stressed figure shown alongside.

                ## Notes
                This is organisation, not a recommendation to use margin. Defined-risk structures make the worst case easier to state; write it next to every result.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A table of initial, maintenance and stressed margin per structure, referenced by every backtest return figure."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Find your broker's margin documentation for options positions"
                - "Compute margin for each catalogued structure at a sample entry"
                - "Recompute it after a large adverse move in the underlying"
                - "Note any announced change to margin rules from your broker @recurring(yearly)"
            - name: Weekly options research block
              description: |-
                ## Purpose
                Studies stall when they only happen when the market is exciting. A fixed weekly block with a short agenda, one open question and a written outcome keeps research moving through quiet weeks, which are when the careful work gets done.

                ## Milestones
                1. A recurring block of at least two hours reserved in the calendar.
                2. A standing agenda: data check, one study step, one note written.
                3. Each block ending with the next question written at the top of the ledger.
                4. Eight consecutive blocks completed and reviewed for what moved forward.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weekly blocks held, each with a ledger note and a next question recorded."
                cadence: rolling
              tasks:
                - "Reserve a two-hour block in the calendar for options research"
                - "Write the standing three-item agenda on the first page of your notes"
                - "Hold the research block and end it with the next question @recurring(weekly:tue)"
                - "Review the last eight blocks and list what actually moved"
            - name: Monthly implied volatility snapshot of the study universe
              description: |-
                ## Purpose
                Whether a premium-selling or premium-buying study makes sense depends on where implied volatility sits against its own history. A monthly snapshot of at-the-money implied volatility, its one-year rank and the gap to recent realised volatility for each underlying builds the context every strategy study needs.

                ## Milestones
                1. A table of 30-day at-the-money implied volatility for each underlying in scope.
                2. Rank and percentile against the past year calculated with the method stated.
                3. Twenty-day realised volatility shown beside each implied figure.
                4. Twelve monthly snapshots stored so changes can be compared.

                ## Notes
                Start from the **Metrics log** template. Implied volatility rank and percentile are defined differently by different platforms; write which one you use.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive monthly snapshots logged with implied level, rank, percentile and realised volatility for every underlying."
                cadence: rolling
              tasks:
                - "Choose the rank and percentile definition and write it down"
                - "Build the snapshot table for this month's underlyings"
                - "Record the monthly implied volatility snapshot @recurring(monthly:9)"
                - "Compare this month with three months ago in two sentences"
            - name: Post-expiry review of paper positions
              description: |-
                ## Purpose
                Expiry is when assumptions about assignment, pin risk and settlement prices meet reality, even on paper. Reviewing each paper position after the monthly expiry, against the rulebook and the backtest's expectation, catches modelling gaps while they are still cheap.

                ## Milestones
                1. Each expired or closed paper position listed with entry, exit and outcome.
                2. Outcomes compared with what the backtest model would have booked.
                3. Any assignment, pin or settlement surprise written up with its cause.
                4. Rulebook or cost model updated when a surprise repeats.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A review note exists for each monthly expiry, comparing paper outcomes with the model and listing any rule changes made."
                cadence: rolling
              tasks:
                - "Export the paper positions that expired or closed this cycle"
                - "Write the post-expiry review against the backtest model @recurring(monthly:22)"
                - "Record any assignment or settlement surprise with its cause"
                - "Change the rulebook only when the same surprise appears twice"
            - name: Options strategy variant ledger
              description: |-
                ## Purpose
                Variants multiply quickly in options work: every strategy has strikes, deltas, days to expiry, profit targets and stops, and testing many combinations then reporting the best is the fastest way to fool yourself. A ledger with one line per variant tried, including the failures, keeps the count honest and makes the final result believable.

                ## Milestones
                1. A ledger with columns for strategy, parameters, data window, cost rule and result.
                2. Every variant run recorded the day it is run, not just the promising ones.
                3. A running count of variants per strategy shown at the top.
                4. Final results quoted with the number of variants tried beside them.

                ## Notes
                If you tried forty combinations of delta and days to expiry, the best one is expected to look good by chance. Say so in the write-up.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every backtest variant appears in the ledger, and each reported result states the variant count for its strategy."
                cadence: rolling
              tasks:
                - "Create the ledger with the five standard columns"
                - "Back-fill the variants you can remember from earlier tests"
                - "Bring the variant ledger up to date for the week @recurring(weekly:fri)"
                - "Add the variant count to the header of every study note"
            - name: Monthly option data refresh and quality report
              description: |-
                ## Purpose
                Chain data goes wrong quietly: a vendor changes a field, an underlying splits, a series goes missing for a week. A monthly refresh that runs the cleaning rules and produces a short quality report means problems are found by you, not by an implausible backtest.

                ## Milestones
                1. New month of chains loaded and the cleaning rules run.
                2. A report counting rows, removed quotes and missing days per underlying.
                3. Splits, symbol changes and special dividends for the month checked against the data.
                4. Any anomaly logged with the fix applied or the reason it was left.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly quality report exists for each month of data loaded, with anomalies and fixes logged."
                cadence: rolling
              tasks:
                - "Write the five numbers the quality report must show"
                - "Load the month's chains and run the cleaning rules @recurring(monthly:3)"
                - "Check the month's splits and symbol changes against the data"
                - "Log each anomaly with the fix or the reason it was left"
            - name: Corporate action and dividend calendar for option studies
              description: |-
                ## Purpose
                Dividends, splits, mergers and special distributions change option contracts and early assignment risk, and adjusted contracts can carry odd deliverables that break a backtest. A calendar of upcoming events for every single-stock underlying, refreshed each quarter, keeps studies and paper positions clear of surprises.

                ## Milestones
                1. Ex-dividend dates and amounts listed for each single-stock underlying for the coming quarter.
                2. Announced splits, mergers and special dividends noted with any contract adjustment memo.
                3. Adjusted option series in the historical data flagged for exclusion or special handling.
                4. The calendar linked from the assignment rulebook.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A quarterly calendar of dividends and corporate actions is kept for every single-stock underlying, with adjusted series flagged in the data."
                cadence: rolling
              tasks:
                - "List the single-stock underlyings that need a dividend calendar"
                - "Refresh the dividend and corporate action calendar @recurring(quarterly)"
                - "Search the clearing house notices for contract adjustment memos"
                - "Flag adjusted series in the historical chain data"
            - name: Daily Greeks snapshot of the paper book
              description: |-
                ## Purpose
                Even a paper book of several multi-leg positions can drift into a large net delta or a dangerous short gamma position without any single trade looking risky. A two-minute daily snapshot of net delta, gamma, vega and theta against written limits trains the habit that matters most if any of this ever becomes real money.

                ## Milestones
                1. Net Greeks for the paper book calculated from the reconciled calculator.
                2. Limits for net delta, short gamma and vega written beside the snapshot.
                3. Each breach of a paper limit logged with the adjustment made.
                4. Twenty trading days of snapshots completed without a gap.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twenty consecutive trading days of net Greeks snapshots recorded against written limits, with each breach logged."
                cadence: rolling
              tasks:
                - "Write paper limits for net delta, short gamma and vega"
                - "Set up a one-page snapshot that sums Greeks across positions"
                - "Record net Greeks for the paper book after the close @recurring(daily)"
                - "Log every limit breach with the adjustment you made"
            - name: Quarterly rerun of core strategy backtests
              description: |-
                ## Purpose
                Each strategy study is a snapshot, and three more months of data, a fee change or a cleaning fix can change its conclusion. Rerunning the core backtests each quarter with the same code and comparing results with the last run shows whether the evidence is holding up or quietly eroding.

                ## Milestones
                1. A list of the core studies that are rerun each quarter.
                2. Each rerun using the tagged code version and recorded data version.
                3. Differences from the previous run explained as new data, cost change or a fix.
                4. Studies whose conclusion changed marked for a full review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A quarterly rerun note exists for each core study, with every change in result attributed to a stated cause."
                cadence: rolling
              tasks:
                - "Tag the code version used by each core study"
                - "Rerun the core backtests and save results beside the last run @recurring(quarterly)"
                - "Explain each difference from the previous run in one line"
                - "Mark any study whose conclusion flipped for full review"
            - name: Annual options research programme review
              description: |-
                ## Purpose
                Once a year, step back and ask which studies produced real understanding, which strategies were dropped and why, and whether the charter's limits still fit your life and capital. The review turns a year of scattered notes into a short record and a plan for the next twelve months.

                ## Milestones
                1. A summary of every study finished, abandoned or still open this year.
                2. Strategies dropped listed with the evidence that ended them.
                3. Charter limits and scope reviewed and any changes justified in writing.
                4. Three priorities for the coming year written down.
              priority: low
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A written annual review with study outcomes, dropped strategies, charter decisions and three priorities for the next year."
                cadence: cyclic
              tasks:
                - "Gather the year's study notes, ledger and expiry reviews"
                - "Hold the annual programme review and write the summary @recurring(yearly)"
                - "List each dropped strategy with the evidence that ended it"
                - "Write three research priorities for the next year"
            - name: Implied versus realised gap tracker for premium studies
              description: |-
                ## Purpose
                Strategies that sell options are a bet that implied volatility exceeds what is later realised, and that gap is famously unstable, vanishing or turning sharply negative in sell-offs. Tracking the gap monthly for each underlying, with its worst months marked, keeps premium-selling studies tied to the risk they are really taking.

                ## Milestones
                1. Monthly gap between 30-day implied volatility at entry and realised volatility over the following 30 days.
                2. Worst five months for each underlying highlighted with the market event beside them.
                3. The distribution of the gap shown, not only its average.
                4. Premium-selling studies citing the tracker in their risk section.

                ## Notes
                A positive average gap says nothing about whether you can survive the months when it goes deeply negative. Size every study to the worst month, not the mean.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly gap series for each underlying with its distribution and worst five months, referenced by every premium-selling study."
                cadence: rolling
              tasks:
                - "Compute the historical implied versus realised gap for one underlying"
                - "Mark the five worst months and the events behind them"
                - "Add the month's implied versus realised gap to the tracker @recurring(monthly:16)"
                - "Link the tracker from each premium-selling study note"
            - name: Greeks behaviour drills across time and price
              description: |-
                ## Purpose
                Reading that gamma rises near expiry is different from seeing an at-the-money option's delta swing from 0.3 to 0.7 in a single day. Short drills that move price, time and volatility one at a time on your payoff tool build the intuition that lets you spot a risky position before computing anything.

                ## Milestones
                1. Delta and gamma plotted against price at 60, 20 and 3 days to expiry.
                2. Theta and vega compared for at-the-money and out-of-the-money strikes over time.
                3. The theta and gamma trade-off for a short straddle written up in a paragraph.
                4. Ten prediction questions answered before running the tool, with the score recorded.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten written Greek predictions scored against the tool, with at least eight correct after the drills."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Plot delta against price at three different days to expiry"
                - "Compare theta and vega for two strikes as expiry approaches"
                - "Write ten predictions about Greek changes before checking them"
                - "Score your predictions and redo the ones you got wrong"
            - name: Put-call parity and synthetic position exercises
              description: |-
                ## Purpose
                Put-call parity is the reason a covered call and a short put carry nearly the same risk, and why many strategies that sound different are the same position wearing different clothes. Working through parity with real quotes, including dividends and borrowing costs, sharpens both pricing checks and the strategy catalogue.

                ## Milestones
                1. Parity checked on ten real call and put pairs with dividends and rates included.
                2. Deviations from parity explained by spread, dividend uncertainty or early exercise.
                3. Synthetic long stock, covered call and protective put equivalents written out leg by leg.
                4. The strategy catalogue updated where two entries turn out to be synthetic equivalents.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten parity checks on real quotes with deviations explained, and catalogue entries merged where they are synthetic equivalents."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write the parity relationship including dividends and the rate"
                - "Check parity on ten call and put pairs from one chain"
                - "Explain each deviation larger than the bid and ask spread"
                - "Merge catalogue entries that are synthetic equivalents"
            - name: Reading skew for vertical spread pricing
              description: |-
                ## Purpose
                Out-of-the-money puts usually trade at higher implied volatility than calls, and that skew decides whether a put spread or a call spread is cheap or dear for the same view. Learning to read skew from the chain, without fitting a full surface, explains why vertical spreads in different directions carry such different risk and reward.

                ## Milestones
                1. Implied volatility plotted by delta for one expiry on three dates.
                2. The price of a 25-delta put spread and call spread compared with and without skew.
                3. A note explaining how skew changed in a past sell-off for one underlying.
                4. Vertical spread studies stating the skew level at entry.

                ## Notes
                Surface fitting and smile models belong to volatility modelling. Here the question is only what skew does to the price and risk of a spread you might study.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note comparing put and call spread prices with and without skew, and skew at entry recorded in every vertical spread study."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Plot implied volatility by delta for one expiry"
                - "Price a put spread and call spread using flat and actual volatility"
                - "Write a paragraph on how skew moved in one past sell-off"
                - "Add a skew-at-entry field to the vertical spread study template"
            - name: Expected move from straddle prices
              description: |-
                ## Purpose
                The price of an at-the-money straddle is the market's rough estimate of how far the underlying might move by expiry, and comparing it with what actually happened is one of the clearest options studies a beginner can run. A year of expected moves against realised moves shows how often the market overprices and how badly it underprices on the bad days.

                ## Milestones
                1. The straddle-based expected move rule written down with its approximation stated.
                2. Expected and realised moves recorded for each monthly expiry over at least two years.
                3. The share of expiries where the realised move exceeded the expected move counted.
                4. The largest misses listed with their size as a multiple of the expected move.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two years of monthly expected against realised moves tabulated, with the exceedance rate and largest misses reported."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the expected move approximation and its limits"
                - "Pull at-the-money straddle prices at each monthly expiry start"
                - "Record the realised move to each expiry beside the expected move"
                - "Count exceedances and list the five largest misses"
            - name: Early exercise and dividends in American options
              description: |-
                ## Purpose
                Understanding when it is rational to exercise an American option early is what makes assignment risk predictable rather than random. Working through the dividend condition for calls and the interest condition for deep puts, with real examples, turns the rulebook from memorised lines into reasoning you can apply to a new contract.

                ## Milestones
                1. The early exercise condition for calls before a dividend derived and written in plain words.
                2. The condition for deep in-the-money puts written with the role of interest rates.
                3. Five historical cases checked where early assignment would have been expected.
                4. The assignment rulebook updated with the reasoning behind each rule.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written early exercise conditions for calls and puts, tested on five historical cases and reflected in the rulebook."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Compare a call's time value with the next dividend for one stock"
                - "Write the early exercise condition for calls in two sentences"
                - "Find five past cases where early assignment was likely"
                - "Add the reasoning to each line of the assignment rulebook"
            - name: Options strategy reading list
              description: |-
                ## Purpose
                Options writing ranges from careful academic work on option returns and the volatility risk premium to marketing dressed as education. A reading list chosen deliberately, with one standard textbook, a practitioner volatility book and a handful of papers on option strategy returns, gives your studies a base that sales pitches cannot shake.

                ## Milestones
                1. A list of eight to twelve sources split into textbooks, practitioner books and papers.
                2. Each source tagged with the project in this area it supports.
                3. Notes of one page or less written for each finished source.
                4. Sources found unreliable removed with a line on why.

                ## Notes
                Start from the **Reading queue** template. Prefer papers that report results after costs and across several decades, including crisis periods.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A reading queue of at least eight sources, each tagged to a project, with one-page notes for every finished item."
                cadence: rolling
              tasks:
                - "Choose one textbook and one practitioner book on options"
                - "Find three papers on historical returns of option strategies"
                - "Read and write one page of notes on the current source @recurring(monthly:12)"
                - "Remove any source that reports results without costs"
            - name: Delta-hedged option profit and loss decomposition
              description: |-
                ## Purpose
                Hedging an option daily isolates a simple fact: a delta-hedged option's profit comes from the difference between implied volatility paid and volatility realised, scaled by gamma along the path, and seeing this in your own simulation makes every short or long volatility study easier to interpret. Decomposing simulated profit into gamma, theta and vega pieces is the bridge from payoff charts to real volatility research.

                ## Milestones
                1. A simulation of a daily delta-hedged option on historical prices.
                2. Daily profit split into gamma, theta, vega and residual terms.
                3. The relation between realised minus implied variance and total profit shown on a chart.
                4. The effect of hedging frequency and hedging costs measured on the same path.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A simulation that decomposes delta-hedged profit into Greek terms, with hedging frequency and cost effects measured."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Simulate one option hedged daily over a past 30-day window"
                - "Split daily profit into gamma, theta and vega terms"
                - "Plot total profit against realised minus implied variance"
                - "Rerun with weekly hedging and with hedging costs included"
            - name: Covered call backtest with realistic costs
              description: |-
                ## Purpose
                Covered calls are often sold as income, but they give away the upside in strong rallies while keeping nearly all the downside. A backtest against simply holding the underlying, with your cost model, assignment rules and dividends, shows what the strategy really changed about returns and drawdowns over full cycles.

                ## Milestones
                1. Rules fixed in advance: strike selection, days to expiry, roll and assignment handling.
                2. Backtest run over at least ten years including two major sell-offs.
                3. Results compared with buy and hold on return, volatility, worst drawdown and upside capture.
                4. Results reported at mid, house fill rule and touch, with the variant count.

                ## Notes
                Report how the strategy did in the best rally months as well as the worst months. Missing rallies is the cost people forget.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A written covered call study over ten or more years against buy and hold, reporting drawdown, upside capture and results at three fill assumptions."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Write the strike, expiry and roll rules before running anything"
                - "Run the backtest with the cost model and assignment rules"
                - "Compare it with buy and hold on four measures"
                - "Ask the agent to draft the write-up from your results table"
            - name: Cash-secured put backtest with assignment handling
              description: |-
                ## Purpose
                Selling puts with cash set aside to buy the shares looks gentle in calm years and turns into owning a falling stock in bad ones. Testing the strategy, including what happens after assignment, against holding the underlying shows whether it adds anything beyond a different route into the same market risk.

                ## Milestones
                1. Entry, strike, expiry and post-assignment rules written before testing.
                2. Assignment modelled with the shares held and the next step defined.
                3. Results over at least ten years compared with holding the underlying.
                4. Tail months listed with losses expressed in cash and as a share of capital.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A cash-secured put study with assignment handling, over ten or more years, comparing return, drawdown and tail months with buy and hold."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Write what the strategy does after assignment"
                - "Run the backtest with assignment and dividends modelled"
                - "Compare results with holding the underlying over the same window"
                - "List the ten worst months with cash losses and causes"
            - name: Vertical spread width and delta choice study
              description: |-
                ## Purpose
                For a bull put or bear call spread, the short strike's delta and the distance to the long strike decide the win rate, the size of the average loss and the cost drag. Mapping those choices across a grid, with the variant count recorded, shows how sensitive results are rather than picking one lucky cell.

                ## Milestones
                1. A grid of short-strike deltas and widths defined and logged in the ledger.
                2. Win rate, average win, average loss and worst loss reported for each cell.
                3. Results shown as a heat map with neighbouring cells compared.
                4. A conclusion that rests on a region of the grid, not a single cell.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A grid study of vertical spread delta and width with the variant count stated and a conclusion drawn from a stable region."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Define the delta and width grid and log it as one study"
                - "Run every cell with the house fill rule"
                - "Plot the heat map of results with worst loss beside it"
                - "Write whether neighbouring cells tell the same story"
            - name: Iron condor management rules tested
              description: |-
                ## Purpose
                Iron condors are often traded with management rules such as taking profit at half the credit, closing at a multiple of credit as a stop, or exiting at a fixed number of days before expiry, and few people test them. Comparing these rules on the same entries shows which ones reduce the tail and which only change how a loss looks.

                ## Milestones
                1. A fixed entry rule shared by every management variant.
                2. Profit-take, stop and time-exit rules tested alone and in combination.
                3. Each variant reported on return, worst loss, and time capital was at risk.
                4. A preferred rule set chosen and justified with the variant count.

                ## Notes
                Stops on short options often fire at the worst price of the day because spreads widen exactly when the stop triggers. Test stops with touch fills, not mid.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded comparison of management rules on identical entries, with a chosen rule set and the variant count stated."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Fix the iron condor entry rule before testing exits"
                - "List profit-take, stop and time-exit variants in the ledger"
                - "Run each variant with touch fills on stop exits"
                - "Record the chosen rule set and the evidence for it"
            - name: Calendar spread study across expiry pairs
              description: |-
                ## Purpose
                Calendar spreads are a bet on the term structure of implied volatility and on the underlying staying near the strike, and they can lose on both counts at once. Studying them across expiry pairs, with events between the two expiries flagged, shows what the structure is exposed to and when it tends to fail.

                ## Milestones
                1. Expiry pairs chosen, such as front and second month, with strikes at the money.
                2. Entries flagged where an earnings date or scheduled event sits between expiries.
                3. Profit decomposed into price move, front decay and change in term structure.
                4. Worst outcomes listed with the term structure change that caused them.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A calendar spread study across at least two expiry pairs, with event entries flagged and losses attributed to price or term structure."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Choose two expiry pairs and the strike selection rule"
                - "Flag every entry with an event between the two expiries"
                - "Run the study and split profit into its three sources"
                - "Write up the five worst outcomes and their causes"
            - name: Protective put and collar hedging cost study
              description: |-
                ## Purpose
                Buying puts to protect a holding feels prudent, but a rolling put programme can cost several percent a year, and collars pay for protection by giving up gains. Measuring the long-run cost and the protection actually delivered in past sell-offs lets you judge hedging as an insurance purchase with a known premium.

                ## Milestones
                1. Put and collar rules defined by strike distance, expiry and roll timing.
                2. Annual hedging cost measured over at least ten years.
                3. Protection delivered in each major sell-off compared with the cumulative cost.
                4. A summary table of cost per unit of drawdown reduced for each variant.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A ten-year study reporting annual hedging cost and drawdown reduction for put and collar variants."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Define three put and collar variants by strike and expiry"
                - "Measure annual cost of each variant over the full window"
                - "Compare protection in each major sell-off with total cost paid"
                - "Build the cost per unit of drawdown reduced table"
            - name: Index versus single-stock options comparison
              description: |-
                ## Purpose
                The same strategy behaves differently on a broad index and on a single stock: single names have earnings gaps, early assignment and wider spreads, while index options are often European and cash-settled. Running one strategy on both, with the differences listed, shows which underlying a study's conclusion really applies to.

                ## Milestones
                1. One strategy and rule set chosen to run unchanged on both underlyings.
                2. Contract differences listed from the specification sheets.
                3. Results compared on return, worst loss, cost drag and assignment events.
                4. A statement of where the conclusion transfers and where it does not.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A side-by-side study of one strategy on an index and a single stock, with a written statement of where the conclusion transfers."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pick one strategy and one index and one stock underlying"
                - "List contract differences from the two specification sheets"
                - "Run the unchanged rules on both underlyings"
                - "Write where the conclusion holds and where it breaks"
            - name: Days to expiry choice for short premium entries
              description: |-
                ## Purpose
                Short weekly options decay fastest but carry the most gamma, while longer-dated entries decay slowly with less day-to-day swing, and the choice changes both the return path and the tail. Testing the same structure at several entry horizons, after costs, shows which trade-off the evidence actually supports for your underlyings.

                ## Milestones
                1. Entry horizons chosen, for example 7, 21, 45 and 60 days to expiry.
                2. The same structure and management rule applied at each horizon.
                3. Return, worst week, worst month and cost drag reported per horizon.
                4. A horizon chosen for further study with its weakness stated.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A comparison of four entry horizons on one structure after costs, with the chosen horizon and its main weakness recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Choose four entry horizons and log them as one study"
                - "Run the same structure and exits at each horizon"
                - "Report worst week and worst month beside average return"
                - "Record the chosen horizon and the weakness that comes with it"
            - name: Hold to expiry or close early decision
              description: |-
                ## Purpose
                Holding short options to expiry collects the last of the premium but carries the highest gamma and pin risk, while closing early pays the spread again. Comparing the two on the same entries, with real exit costs, gives a default exit rule backed by evidence instead of habit.

                ## Milestones
                1. Exit variants defined: hold to expiry, close at a fixed days-to-expiry, close at a profit level.
                2. Exit costs modelled with wider spreads in the final days.
                3. Assignment and pin events counted for the hold-to-expiry variant.
                4. A default exit rule recorded with the evidence.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded default exit rule chosen from at least three variants tested on identical entries with expiry-week costs."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Define three exit variants on the same entries"
                - "Model wider spreads for exits in the final days"
                - "Count assignment and pin events for the hold variant"
                - "Write the default exit rule and its evidence"
            - name: Short premium tail loss replay through past sell-offs
              description: |-
                ## Purpose
                Short option strategies can show smooth equity curves for years and then lose many months of gains in days, as happened to several well-known volatility selling products. Replaying every short premium study through the worst historical sell-offs in your data, with margin changes and wider spreads, shows the loss you would have had to survive.

                ## Milestones
                1. A list of sell-off windows in the data with dates and the size of the move.
                2. Each short premium study replayed through every window with touch fills.
                3. Peak loss reported in cash, as a share of capital and against the charter limits.
                4. Studies whose tail loss breaks the charter marked as rejected.

                ## Notes
                Start from the **Risk register** template. Most strategies fail out of sample, and short premium ones fail in a particular way: rarely, suddenly and large.
              priority: high
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every short premium study has a replay through each listed sell-off, and any study breaking the charter loss limits is marked rejected."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List the sell-off windows covered by your data"
                - "Replay one short premium study through each window"
                - "Compare each peak loss with the charter limits"
                - "Mark studies that break the limits as rejected in the ledger"
            - name: Earnings straddle and strangle outcome study
              description: |-
                ## Purpose
                Options on single stocks price a jump around earnings, and buying or selling that jump is one of the most discussed and least understood trades. Studying one full earnings season, comparing the implied move with the actual move and the result of long and short straddles after costs, shows who usually wins and how big the exceptions are.

                ## Milestones
                1. A list of companies reporting in the season with expected dates confirmed.
                2. Implied move recorded before each report from the nearest expiry straddle.
                3. Actual move and the result of long and short straddles after costs recorded.
                4. A summary of win rate, average result and the five largest outcomes either way.

                ## Notes
                Report dates move. Confirm each one close to the event and drop any entry where the date was wrong.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "One earnings season of implied against actual moves with long and short straddle results after costs, summarised with the largest outcomes."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Choose 30 companies reporting in the coming season"
                - "Record each implied move the day before the report"
                - "Record the actual move and both straddle results after costs"
                - "Summarise win rate and the five largest outcomes each way"
            - name: Written options strategy study for peer review
              description: |-
                ## Purpose
                Until someone else has read it, a study has not really been tested. Writing one strategy study up properly, with rules, data, costs, variant count, tail replay and limitations, and asking someone competent to pick holes in it, is the standard any later decision should meet.

                ## Milestones
                1. A study document with hypothesis, rules, data, cost model, results and limitations sections.
                2. Variant count, tail replay and fill sensitivity included.
                3. The document sent to at least one reviewer with specific questions.
                4. Review comments answered in writing and the conclusion revised where needed.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A complete study document reviewed by at least one other person, with every comment answered in writing."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Pick the study most likely to change a decision"
                - "Draft the six sections with tables from the ledger"
                - "Send it to one reviewer with three specific questions"
                - "Answer every review comment in a reply section"
            - name: Go or no-go review before paper trading an options strategy
              description: |-
                ## Purpose
                Moving a strategy from backtest to paper trading should be a decision made against criteria written in advance, not a reaction to a good-looking chart. A formal review that checks the study against the charter, cost sensitivity, tail replay and variant count produces a clear go or no-go and hands the paper trading phase a written plan.

                ## Milestones
                1. Criteria written before the review: minimum evidence, maximum tail loss and cost sensitivity.
                2. The study scored against each criterion with evidence linked.
                3. A go or no-go decision recorded with its reasons.
                4. For a go, a paper trading plan with a fixed trial length and the limits that apply.

                ## Notes
                A no-go is a good outcome. It is the review doing its job, and the study stays in the ledger as evidence.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A dated go or no-go record scored against criteria written beforehand, with a paper trading plan attached if the answer is go."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the go or no-go criteria before opening the study"
                - "Score the study against each criterion with links to evidence"
                - "Record the decision and its reasons with the date"
                - "Attach a fixed-length paper plan with limits if the answer is go"
            - name: Ex-dividend early assignment case study
              description: |-
                ## Purpose
                Few things surprise a new options trader like waking up short shares after a covered call or spread was assigned before a dividend. Following one dividend season for your single-stock underlyings, predicting which short calls would be assigned and checking afterwards, makes the rule concrete.

                ## Milestones
                1. A list of ex-dividend dates for the season and the paper or hypothetical short calls exposed.
                2. A prediction recorded for each call before the ex-dividend date.
                3. Actual assignment outcomes, or open interest changes as a proxy, recorded after.
                4. Prediction accuracy noted and the rulebook adjusted if needed.
              priority: low
              frontmatter:
                mode: event
                output_kind: knowledge
                success_criteria: "Predictions and outcomes recorded for every exposed short call in one dividend season, with the accuracy noted."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List this season's ex-dividend dates for your underlyings"
                - "Predict which short calls would face early assignment"
                - "Record the outcome or open interest change after each date"
                - "Update the rulebook if predictions missed more than once"
            - name: Options learning plan for a small-account beginner
              description: |-
                ## Purpose
                If you have a small account and have been shown options as a way to grow it quickly, the most valuable thing you can do is learn slowly and on paper first. A plan built around payoffs, Greeks, assignment and a few honest backtests, with no real money until a written review, protects the savings you cannot afford to lose.

                ## Milestones
                1. A written promise that no real money is used before the go or no-go review.
                2. Payoff diagrams drawn for five basic structures by hand and with a tool.
                3. One simple study, such as expected move against realised move, completed.
                4. Questions for a licensed adviser or the broker's education team written down.

                ## Notes
                Only money you can afford to lose entirely belongs anywhere near options. Many brokers require an options approval level; read what it allows before applying.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five structures drawn, one study completed and a written no-real-money rule in place before any account is approved for options."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write and sign a no-real-money rule until the review"
                - "Draw payoffs for five basic structures by hand"
                - "Complete the expected move study on one index"
                - "Review progress against the plan for the month @recurring(monthly:27)"
            - name: Options research on two evenings a week
              description: |-
                ## Purpose
                With a full-time job and a household, options research has to fit into a few evenings and must survive weeks when nothing happens. Splitting each study into ninety-minute pieces and keeping the paper book small enough to check in minutes means progress continues without the market taking over your evenings.

                ## Milestones
                1. Two fixed evenings agreed with the people you live with.
                2. The current study broken into steps of ninety minutes or less.
                3. A paper book capped at a size you can review in ten minutes.
                4. A month of evenings completed with each step logged.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A month of twice-weekly evening sessions held, each finishing one logged step of the current study."
                cadence: rolling
              tasks:
                - "Agree two evenings a week with your household"
                - "Split the current study into ninety-minute steps"
                - "Cap the paper book at a size you can review in ten minutes"
                - "Work one ninety-minute study step @recurring(weekly:wed,sun)"
            - name: Options research ramp for an equity quant
              description: |-
                ## Purpose
                Researchers who know equity signals well often carry habits into options that break there: daily close prices, ignoring spreads, treating positions as linear. A six-week ramp focused on contract mechanics, Greeks, chain data and cost realities gets an equity quant producing options studies that a senior options researcher would accept.

                ## Milestones
                1. A gap list comparing equity research habits with what options require.
                2. Contract sheets, cleaning rules and cost model learned or rebuilt.
                3. One existing equity signal tested as an options overlay with full costs.
                4. A review conversation with an experienced options researcher recorded.

                ## Notes
                Start from the **Development plan** template. The usual first mistake is backtesting on last trade prices rather than quotes.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A six-week development plan completed with one options overlay study reviewed by an experienced options researcher."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Write the gap list between equity and options research habits"
                - "Rebuild the cost model for your chosen underlyings"
                - "Test one existing equity signal as an options overlay"
                - "Book a review with an experienced options researcher"
            - name: Options questions to bring to a licensed adviser
              description: |-
                ## Purpose
                A study can tell you how a strategy behaved, but not whether it suits your finances, tax position or retirement accounts, which is a question for a licensed professional. Preparing written questions, with your study summaries attached, makes an advice meeting specific and stops you from treating backtest results as personal advice.

                ## Milestones
                1. A list of questions on suitability, account types and tax treatment of options.
                2. One-page summaries of relevant studies attached, with their limitations.
                3. A meeting held with a licensed adviser or tax professional.
                4. Answers recorded and any constraint added to the charter.
              priority: low
              frontmatter:
                mode: service
                output_kind: knowledge
                success_criteria: "A written question list taken to a licensed adviser, with the answers recorded and any new constraint added to the charter."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write five questions on suitability, accounts and tax"
                - "Ask the agent to condense two studies into one-page summaries"
                - "Book a meeting with a licensed adviser or tax professional"
                - "Record the answers and update the charter"
            - name: Options strategy dissertation plan
              description: |-
                ## Purpose
                Students choosing an options topic for a dissertation often pick a strategy backtest and discover too late that the data costs money or the result is already well known. A plan that fixes the question, confirms data access through the university, and checks existing literature first gives the project a real contribution and a realistic timetable.

                ## Milestones
                1. A research question narrowed to one strategy family and one testable claim.
                2. Data access confirmed through the library or a supervisor's licence.
                3. Five closest existing papers summarised with how your work differs.
                4. A timetable agreed with the supervisor with chapter deadlines.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A dissertation plan with a testable question, confirmed data access, a five-paper literature summary and a supervisor-approved timetable."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Ask the library which option data sets students can access"
                - "Narrow the question to one strategy family and one claim"
                - "Summarise the five closest existing papers"
                - "Agree chapter deadlines with your supervisor"
            - name: Delta-hedged short volatility research with written risk limits
              description: |-
                ## Purpose
                Selling options and hedging the delta isolates the gap between implied and realised volatility, which is how professional volatility desks think about premium. Researching it properly needs hedge costs, gamma losses in fast markets and written risk limits from the start, because the strategy's worst days are far worse than its typical ones.

                ## Milestones
                1. Hedging rule, frequency and cost assumptions written before testing.
                2. Risk limits set: maximum short vega, maximum short gamma and a loss stop for the strategy.
                3. Results over full history with tail replay and fill sensitivity.
                4. A clear statement of capacity and the conditions under which the study would be stopped.

                ## Notes
                This is research, not a recommendation. Most short volatility strategies that look attractive in research fail out of sample or in one bad month.
              priority: high
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A delta-hedged short volatility study with written vega, gamma and loss limits, tail replay and a stop condition, reviewed in the go or no-go process."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Write the hedging rule and its cost assumptions"
                - "Set the vega, gamma and loss limits before any test"
                - "Check the strategy's paper limits and stop condition @recurring(weekly:thu)"
                - "Replay the study through every listed sell-off window"
            - name: Skew and risk reversal behaviour study
              description: |-
                ## Purpose
                A risk reversal, long one wing and short the other, is the cleanest way to study how the market prices downside against upside. Measuring how risk reversal prices moved before, during and after past sell-offs shows whether skew has any predictable behaviour or only describes fear after the fact.

                ## Milestones
                1. A daily 25-delta risk reversal series built for each underlying.
                2. Changes measured around past sell-offs and calm periods.
                3. A test of whether skew level predicted later returns or volatility, with the trial count stated.
                4. A written conclusion including the likely reason any effect would not survive costs.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A risk reversal series with event analysis and a predictive test reported with its trial count and cost discussion."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Build a daily 25-delta risk reversal series for one underlying"
                - "Mark past sell-offs and calm periods on the series"
                - "Test skew level against later returns and log each trial"
                - "Write why any effect may not survive costs"
            - name: Greek profit and loss attribution for multi-leg backtests
              description: |-
                ## Purpose
                When a multi-leg backtest makes or loses money, knowing whether it came from delta, gamma, vega, theta or the residual tells you whether the strategy did what you designed it to do. Adding daily attribution to every backtest catches strategies that are secretly directional bets dressed up as volatility trades.

                ## Milestones
                1. Daily attribution of profit into delta, gamma, vega, theta and residual for each position.
                2. Attribution aggregated by strategy and by month.
                3. Residuals above a stated share of total profit investigated.
                4. Strategies whose profit came mainly from an unintended exposure flagged.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every multi-leg backtest reports daily Greek attribution, with large residuals investigated and unintended exposures flagged."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Add daily Greek attribution to one existing backtest"
                - "Aggregate attribution by month and by strategy"
                - "Investigate any month where the residual is large"
                - "Flag strategies driven mainly by an exposure they were not designed for"
            - name: Capacity limits from open interest and quoted size
              description: |-
                ## Purpose
                A strategy that works with one contract may not work with fifty, because quoted size at the touch is small and open interest in useful strikes is limited. Estimating capacity from historical quoted size and open interest gives every study an honest ceiling, and shows where the result is only true for a hobbyist's position size.

                ## Milestones
                1. Typical quoted size and open interest recorded for the strikes each study trades.
                2. A maximum position size rule set as a share of open interest and quoted size.
                3. Costs rerun at several position sizes with impact assumptions stated.
                4. A capacity figure reported in every study's summary.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each study reports a capacity figure derived from open interest and quoted size, with costs shown at several position sizes."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Record quoted size and open interest for strikes in one study"
                - "Write a position size rule as a share of open interest"
                - "Rerun costs at three position sizes"
                - "Add a capacity line to each study summary"
---

# Options Strategy Research

This area is for anyone who wants to understand options strategies properly before trusting one, from a curious beginner with a small account to a researcher adding options to an equity toolkit. It starts with foundations (a research charter with written limits, contract specifications, payoff and Greeks tools, a historical chain source, cleaning rules, a cost model, assignment and margin rules), then the weekly and monthly machinery of running the studies, the concepts worth drilling, strategy backtests and decisions, dated studies such as an earnings season or a go or no-go review, variants for beginners, part-timers, equity quants and students, and finally specialist work on delta-hedged volatility, skew, attribution and capacity.

What repeats is a daily Greeks snapshot of the paper book, a weekly research block and ledger entry, monthly implied volatility snapshots, data checks and post-expiry reviews, quarterly fee and assumption reviews and a yearly programme review. The Purchase decision, Metrics log, Reading queue, Risk register and Development plan templates pair with the projects that name them. Everything here is study and organisation, not trading advice: most options strategies that look good in a backtest fail out of sample, and short premium strategies in particular can hide large tail losses for years. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
