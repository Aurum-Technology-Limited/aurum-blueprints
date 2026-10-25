---
id: quant-finance.backtesting-discipline
name: Backtesting Discipline
description: "A written backtest protocol, point-in-time and survivorship checks, honest cost and fill assumptions, fixed test periods and a register of every variant, so a result means what it claims."
category: business
version: 1.0.0
tags: [quant-finance, backtesting-discipline, researcher, knowledge-worker, look-ahead-bias, survivorship-bias, transaction-costs, out-of-sample]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - purchase-decision
    - meeting-notes
    - portfolio-piece
    - onboarding-30-60-90
  pillars:
    - name: Quantitative Finance & Trading
      emoji: "🧮"
      description: "Systematic research and trading run like engineering: alpha research and honest backtests, factor and risk models, execution and microstructure, statistics and machine learning, quant development and market data, prop-firm evaluations and personal algorithmic trading under strict risk rules, and quant careers. Organisation and method only, never trading advice."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Backtesting Discipline
          description: "Keeping backtests honest: point-in-time data, survivorship and look-ahead checks, realistic costs, fixed test periods and a written record of every variant tried."
          projects:
            - name: Written backtest protocol before the first run
              description: |-
                ## Purpose
                Before any code runs, write down the hypothesis, the universe, the data source, the rebalance rule, the cost model, the test periods and the single measure that decides pass or fail. A protocol fixed in advance is the main defence against quietly redefining success after seeing the equity curve, which is how most attractive backtests are made.

                ## Milestones
                1. A one-page protocol stating hypothesis, universe, data, signal timing and cost assumptions.
                2. Pass and fail thresholds written as numbers before any result exists.
                3. The protocol dated and saved beside the research code in version control.
                4. A rule recorded for what happens, and what gets logged, if the protocol has to change mid-study.

                ## Notes
                Keep it short. Five clear lines that get checked every time beat a long document nobody rereads.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated protocol with hypothesis, data, timing, costs and numeric pass and fail thresholds is committed before the first backtest of the idea is run."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the hypothesis in one sentence with the economic reason behind it"
                - "List universe, data source, rebalance rule and cost model on one page"
                - "Set the pass and fail thresholds before running anything"
                - "Commit the dated protocol next to the research code"
            - name: Fixed development, validation and holdout dates
              description: |-
                ## Purpose
                Choosing the test window after seeing results is look-ahead by another name. Splitting the history now into a development period, a validation period and a final holdout, each with exact start and end dates, means every later result is judged against the same yardstick instead of whichever years flatter it.

                ## Milestones
                1. Three date ranges recorded: development, validation and holdout.
                2. A holdout long enough to contain at least one rising and one falling market.
                3. The dates held in a config file the backtest reads, not typed into notebooks.
                4. A written one-look rule for the holdout added to the protocol.

                ## Notes
                If the history is short, a shorter holdout you keep sealed is worth more than a long one you peek at.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Development, validation and holdout dates are fixed in a version-controlled config file and referenced in the protocol."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Decide the development, validation and holdout date ranges"
                - "Check the holdout covers at least one rising and one falling market"
                - "Put the dates in a config file the backtest reads"
                - "Write the one-look rule for the holdout into the protocol"
            - name: Variant register for every backtest run
              description: |-
                ## Purpose
                The number of variants tried is the figure most backtest reports leave out, and it is the one that tells you whether the best result is skill or luck. A register with one row per run, including the failures, the quick parameter nudges and the runs done late at night, makes that number exist.

                ## Milestones
                1. A register with run ID, date, idea, change made and headline result columns.
                2. Every run from the past month that can be reconstructed back-filled.
                3. A rule that no result is quoted anywhere without its register row.
                4. The register linked from the protocol of each idea.

                ## Notes
                A spreadsheet is enough. The register fails when logging takes more effort than running, so keep the columns few.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A variant register exists with every run from the past month and a written rule that unregistered results are never quoted."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Create a register with run ID, date, change made and headline result"
                - "Back-fill every run you can reconstruct from the past month"
                - "Add a rule that no result is quoted without its register row"
                - "Have the backtest write a register row automatically at the end of each run"
            - name: Point-in-time audit of the research data set
              description: |-
                ## Purpose
                Data that has been revised, restated or back-filled shows you a world nobody could see at the time. Checking which fields carry an as-of date and which were overwritten later tells you which signals can be trusted and which are quietly using information that arrived months after the trade.

                ## Milestones
                1. Every field the signals use listed with its source.
                2. Vendor documentation on revisions, restatements and back-fills read and noted.
                3. Each field marked as point-in-time, safely lagged or unsafe.
                4. The audit saved against the exact data version it covers.

                ## Notes
                Index membership, sector classifications and economic releases are revised more often than people expect, not only company accounts.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every field used by current signals is classified as point-in-time, lagged or unsafe in a dated audit tied to a data version."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every field your signals use and where it comes from"
                - "Find which fields the vendor revises after first release"
                - "Mark each field as point-in-time, lagged or unsafe"
                - "Record the audit against the data version it covers"
            - name: Survivorship bias check on the test universe
              description: |-
                ## Purpose
                Universes built from today's index members or today's listed stocks leave out every company that went bankrupt, was delisted or was taken over, and the backtest inherits a tailwind that never existed. Rebuilding the universe from historical membership and confirming the delisted names are in the data shows how much of the result was survivorship.

                ## Milestones
                1. A historical constituent list obtained for the universe and period tested.
                2. Delisted securities counted by year and compared with what you would expect.
                3. A written rule for the return applied on the day a security delists.
                4. The backtest rerun on the corrected universe and the change recorded.

                ## Notes
                Free price data is often survivorship-biased by default. If delisted names are missing, say so in every result you share.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The backtest has been rerun on a historical-membership universe with delistings included and the difference in results logged."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Check whether your universe uses current or historical membership"
                - "Count delisted securities in the data by year"
                - "Write the rule for the return on the day a stock delists"
                - "Rerun the backtest on the corrected universe and log the change"
            - name: Look-ahead review of signal timestamps
              description: |-
                ## Purpose
                Most look-ahead errors are timestamp mismatches: a signal built from today's close and traded at that same close, or earnings dated by the end of the fiscal quarter instead of the announcement weeks later. Tracing each input from the moment it became known to the moment the backtest trades on it catches most of these in one sitting.

                ## Milestones
                1. A timeline for one trade, from data release to signal to order to fill.
                2. Every input confirmed to use its release date, not its reference date.
                3. An automated test that fails if a signal reads data stamped after its trade time.
                4. Each fix logged in the variant register with its effect on results.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each signal input has a documented release time and an automated test guards against any input dated after the trade."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draw the timeline from data release to signal to fill for one trade"
                - "Confirm each input uses its release date, not its reference date"
                - "Add a test that fails if any signal reads data after its trade time"
                - "Log every fix and its effect in the variant register"
            - name: Default cost model for commissions, spreads and fees
              description: |-
                ## Purpose
                Zero-cost backtests describe a strategy nobody can trade. Setting conservative per-trade assumptions for commission, half the bid-ask spread, exchange fees and financing for each asset class, before results exist, stops costs from becoming a dial turned until the numbers look good.

                ## Milestones
                1. A cost table by asset class and liquidity bucket.
                2. Each figure sourced from a current fee schedule or a sample of quoted spreads.
                3. Costs switched on by default, with zero-cost runs allowed only as labelled diagnostics.
                4. Gross and net results reported side by side in the standard output.

                ## Notes
                Measuring real trading costs after the fact is a separate discipline. The aim here is honest default assumptions inside every test.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A sourced cost table is the default in the backtest config and every standard report shows gross and net figures."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Copy commission and exchange fees from your broker's current schedule"
                - "Sample quoted spreads for a few names in each liquidity bucket"
                - "Set the cost table as the default in the backtest config"
                - "Show gross and net results side by side in the standard report"
            - name: Benchmark and null portfolio beside every test
              description: |-
                ## Purpose
                Nine percent a year means nothing until you know what buy and hold, an equal-weight version of the same universe or a random portfolio earned over the same dates. Defining the comparison set once and running it automatically beside every backtest removes the temptation to pick the benchmark that flatters.

                ## Milestones
                1. A benchmark chosen that matches the strategy's universe and risk.
                2. An equal-weight portfolio of the same universe built as a second comparison.
                3. Both comparisons produced automatically in the standard report.
                4. Excess return over each recorded in the variant register.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every standard backtest report shows the strategy beside a matched benchmark and an equal-weight universe portfolio over identical dates."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Choose the benchmark that matches the strategy's universe and risk"
                - "Build an equal-weight portfolio of the same universe as a second comparison"
                - "Add both comparisons to the standard backtest report"
                - "Record the excess return over each in the variant register"
            - name: Reproducible run record for each backtest
              description: |-
                ## Purpose
                If last month's backtest cannot be rerun to the same number, a real improvement cannot be told apart from an accident. Stamping every run with its code commit, data snapshot, config file and random seed turns results into evidence that a reviewer, or you in six months, can check.

                ## Milestones
                1. Commit hash, data version, config and seed written into every output.
                2. One old backtest rerun from its record and matched to the original.
                3. Configs stored as files rather than edits inside a notebook.
                4. Whatever stopped an old run reproducing identified and fixed.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A backtest from at least a month ago reproduces exactly from its stored record of commit, data version, config and seed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write run ID, commit hash, data version and seed into every output file"
                - "Rerun one old backtest from its record and compare the result"
                - "Move parameters out of notebooks into stored config files"
                - "Fix whatever stopped the old run reproducing"
            - name: Red-flag checklist for backtest results
              description: |-
                ## Purpose
                Some numbers should make you suspicious rather than pleased: a Sharpe ratio above 3 on daily data, no losing year, turnover the cost model cannot bear, or most of the return arriving on a handful of days. Running a short checklist on every result before anyone else sees it catches the embarrassing errors privately.

                ## Milestones
                1. Ten warning signs written down with the threshold for each.
                2. The share of return from the best ten days added to the standard report.
                3. The checklist run on your three most recent backtests.
                4. The checklist pinned where results are reviewed.

                ## Notes
                Start from the **Operational checklist** template. A red flag is a reason to investigate, not proof of an error.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A ten-item red-flag checklist exists and has been applied to the three most recent backtests with findings noted."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write ten warning signs you will check on every result"
                - "Add the share of return from the best ten days to the report"
                - "Run the checklist on your three most recent backtests"
                - "Pin the checklist where you review results"
            - name: Weekly variant register review
              description: |-
                ## Purpose
                Ten minutes a week with the register shows how many variants an idea has really taken, which is the number needed when judging whether its best result is luck. It also catches runs that were never logged while memory is still fresh enough to reconstruct them.

                ## Milestones
                1. The weekly review held eight weeks running.
                2. A current variant count visible beside every open idea.
                3. Unlogged runs found and added each week.
                4. Ideas past the variant limit flagged for a stricter test.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The register has been reviewed every week for two months and each open idea shows an up-to-date variant count."
                cadence: rolling
              tasks:
                - "Review the week's register rows and add any missing runs @recurring(weekly:fri)"
                - "Update the variant count beside each open idea"
                - "Flag any idea past twenty variants for a stricter test"
                - "Archive ideas that have had no runs for a month"
            - name: Monthly review of backtest assumptions
              description: |-
                ## Purpose
                Fee schedules change, margin rates move with interest rates and borrow becomes scarce, while the config file stays frozen at whatever was true when it was written. A monthly read of every assumption keeps the simulation tied to the market you would actually trade in.

                ## Milestones
                1. Cost, fill, borrow and financing assumptions reread against current sources.
                2. Changed assumptions updated in the config with a dated note.
                3. The reference backtest rerun whenever an assumption changes.
                4. A log of assumption changes kept for the past twelve months.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Assumptions have been checked monthly for six months, with each change dated in the config history and its effect recorded."
                cadence: rolling
              tasks:
                - "Reread the cost, fill and borrow assumptions in the config @recurring(monthly:8)"
                - "Check broker fee schedules and margin rates for changes"
                - "Update any assumption that has moved and date the change"
                - "Rerun the reference backtest whenever an assumption changes"
            - name: Quarterly reference backtest re-run
              description: |-
                ## Purpose
                Library upgrades, data vendor corrections and refactors change backtest output silently. Rerunning a frozen reference strategy every quarter against a stored expected result shows whether the machinery itself has drifted before you trust any new number it produces.

                ## Milestones
                1. A simple reference strategy chosen and its expected output stored.
                2. The reference rerun each quarter and compared with the stored result.
                3. Any difference larger than rounding investigated before new work is trusted.
                4. Library and data versions recorded with each re-run.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The reference strategy has been rerun each quarter for a year and every difference from the stored result is explained in writing."
                cadence: cyclic
              tasks:
                - "Pick a simple reference strategy and store its result as the expected output"
                - "Rerun the reference strategy against the stored result @recurring(quarterly)"
                - "Investigate any difference larger than rounding before trusting new work"
                - "Record library and data versions used in each re-run"
            - name: Peer review gate before results are shared
              description: |-
                ## Purpose
                Results that circulate before anyone has read the code get anchored in people's minds even after they are found to be wrong. A gate where a colleague checks timing, universe, costs and the variant count before a number leaves your notebook is cheaper than retracting it later.

                ## Milestones
                1. Five questions a reviewer must answer before sign-off written down.
                2. A colleague or outside peer agreed as a regular review partner.
                3. Every shared result carrying a reviewer name and date.
                4. Issues found in review tracked against the run ID.

                ## Notes
                Working alone, a structured self-review the next morning, against the same five questions, is the fallback.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No result has been shared in three months without a recorded reviewer, date and list of issues found."
                cadence: rolling
              tasks:
                - "Write the five questions a reviewer must answer before sign-off"
                - "Agree a regular review partner, inside or outside your team"
                - "Clear the review queue before any result is sent on @recurring(weekly:wed)"
                - "Swap one review with a peer outside your usual group @recurring(monthly:17)"
            - name: Monthly data snapshot routine
              description: |-
                ## Purpose
                Backtests run against live, changing data cannot be reproduced next month. Freezing a dated, checksummed snapshot of the research data on a fixed day each month gives every run a version to point at and makes vendor corrections visible instead of silent.

                ## Milestones
                1. A storage location and naming rule for snapshots agreed.
                2. A dated snapshot with checksums taken each month.
                3. Superseded snapshots marked rather than removed.
                4. A restore of an old snapshot into a clean environment tested.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly snapshots exist with checksums, and one has been restored and used to reproduce a past run."
                cadence: rolling
              tasks:
                - "Choose where snapshots are stored and how they are named"
                - "Take a dated, checksummed snapshot of the research data @recurring(monthly:3)"
                - "Mark superseded snapshots instead of removing them"
                - "Restore an old snapshot into a clean environment and rerun a test @recurring(quarterly)"
            - name: Holdout access log and one-look rule
              description: |-
                ## Purpose
                Each peek at the holdout turns part of it into development data, and after enough peeks the final test proves nothing. Keeping the holdout where the default config cannot read it and logging every access, by date, idea and reason, keeps the count honest.

                ## Milestones
                1. Holdout data stored separately from the development data.
                2. An access log with date, idea, person and reason for each opening.
                3. The log checked monthly against actual file access.
                4. A written consequence for ideas that fail the holdout.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The holdout is stored separately and every access in the past six months appears in the log with a reason."
                cadence: rolling
              tasks:
                - "Move the holdout data where the default config cannot read it"
                - "Create a log with date, idea, person and reason for each access"
                - "Check the log against the actual access record @recurring(monthly:20)"
                - "Write down what happens to an idea that fails its holdout"
            - name: Fill assumption check against recent trades
              description: |-
                ## Purpose
                Anyone already trading, on paper or with money, has a free source of truth for the backtest's fill assumptions. Comparing average slippage on the month's trades with the figure the simulation uses shows whether the backtest is optimistic and by how much.

                ## Milestones
                1. Recent fills exported with order time, intended price and fill price.
                2. Average slippage by liquidity bucket computed for the month.
                3. The backtest assumption compared with what was seen.
                4. Any assumption found too low raised in the config.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For three months running, observed slippage has been compared with the backtest assumption and any shortfall corrected in the config."
                cadence: rolling
              tasks:
                - "Export the month's fills with order time, intended price and fill price"
                - "Compare average slippage with the backtest assumption @recurring(monthly:25)"
                - "Raise any assumption that proved too low"
                - "Note the gap between assumed and observed costs in the register"
            - name: Corporate actions spot check
              description: |-
                ## Purpose
                Splits, mergers, spin-offs and special dividends are where adjusted price series and position handling most often go wrong, and a single bad adjustment can create a phantom 50 percent return. Checking a handful of real events each month against an independent source keeps those errors out of results.

                ## Milestones
                1. Five securities with recent corporate actions checked each month.
                2. Adjusted prices compared with an independent source.
                3. One merger traced through the backtest to confirm position handling.
                4. Mismatches logged with the fix applied.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Five corporate actions a month have been checked for six months and every mismatch found has a logged fix."
                cadence: rolling
              tasks:
                - "Pick five securities with splits, mergers or special dividends this year"
                - "Check adjusted prices against an independent source @recurring(monthly:14)"
                - "Trace one merger through the backtest to confirm position handling"
                - "Log each mismatch with the fix applied"
            - name: Quarterly tidy of quoted backtest results
              description: |-
                ## Purpose
                Old backtest numbers live on in slides, emails and notes long after the code behind them has changed. Listing every result quoted in the quarter and checking each still has a reproducible record stops superseded figures being repeated as fact.

                ## Milestones
                1. Every result quoted in the quarter listed with where it appeared.
                2. Each one matched to a reproducible run record.
                3. Superseded results clearly marked.
                4. Dead ideas archived with a one-line reason.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter, every quoted backtest figure is matched to a run record or marked superseded, with dead ideas archived."
                cadence: cyclic
              tasks:
                - "List every backtest result quoted in the last quarter @recurring(quarterly)"
                - "Check each quoted result has a reproducible run record"
                - "Mark superseded results so nobody quotes them again"
                - "Archive dead ideas with a one-line reason they failed"
            - name: Backtest bias catalogue with worked examples
              description: |-
                ## Purpose
                Knowing survivorship, look-ahead, selection and data-snooping bias by name is not the same as spotting them in your own code. Building a catalogue where each bias has a definition, a toy example broken on purpose and the check that catches it gives you a reference that pays off every time a result looks too good.

                ## Milestones
                1. At least eight biases listed with a plain definition each.
                2. A toy backtest for each that commits the bias deliberately.
                3. The check that catches each bias written beside it.
                4. The catalogue shared with at least one colleague or study partner.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A catalogue covers at least eight biases, each with a deliberately broken toy example and a working check."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List the biases to cover, starting with survivorship and look-ahead"
                - "Build a toy backtest that deliberately commits each bias"
                - "Write the check that would have caught each one"
                - "Add one new bias example to the catalogue @recurring(monthly:11)"
            - name: Fill timing conventions and next-bar execution
              description: |-
                ## Purpose
                Whether a daily strategy trades at the close that generated the signal, the next open or the next close can move annual return by several percentage points. Running one strategy under each convention, and deciding which is achievable for your setup, settles a choice that is otherwise made by accident.

                ## Milestones
                1. One strategy run filling at the same close, next open and next close.
                2. The conventions you can actually achieve identified for your broker and hours.
                3. A default fill convention written into the protocol.
                4. The result differences explained in two sentences in the register.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A default fill convention is written into the protocol, backed by a comparison of three conventions on the same strategy."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Run one strategy filling at same close, next open and next close"
                - "Note which conventions you can really achieve with your broker and hours"
                - "Choose the default fill convention and add it to the protocol"
                - "Explain the result differences in two sentences in the register"
            - name: Reading a backtest tear sheet critically
              description: |-
                ## Purpose
                Tear sheets lead with the flattering numbers. Practising on published, vendor and your own tear sheets, asking each time about the number of trades, turnover, exposure, the worst month and why those dates were chosen, builds the habit of reading what is missing as carefully as what is shown.

                ## Milestones
                1. Five tear sheets collected from papers, vendors or your own work.
                2. Ten questions every tear sheet should answer written down.
                3. Each tear sheet scored against the questions.
                4. A note per tear sheet of what you would ask the author first.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five tear sheets have been scored against a written list of ten questions, with the open questions for each noted."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Collect five tear sheets from papers, vendors or your own work"
                - "Write the ten questions each tear sheet should answer"
                - "Score each tear sheet against the list"
                - "Read and score one outside tear sheet @recurring(monthly:22)"
            - name: Error bars on Sharpe ratio and drawdown
              description: |-
                ## Purpose
                Over five years of returns an annualised Sharpe ratio of 1 has a standard error of roughly 0.5, so variants scoring 0.8 and 1.2 may be indistinguishable. Reporting every headline number with a range, and bootstrapping drawdown, stops small differences between backtests driving big decisions.

                ## Milestones
                1. The standard error of the Sharpe ratio computed for your latest backtest.
                2. A bootstrapped range for maximum drawdown produced.
                3. Headline figures reported with ranges in the standard output.
                4. Two of your own variants compared to see if their difference is real.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The standard backtest report shows a standard error for the Sharpe ratio and a bootstrapped drawdown range on every run."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Compute the standard error of the Sharpe ratio for your latest backtest"
                - "Bootstrap the returns to get a range for maximum drawdown"
                - "Add both ranges to the standard backtest report"
                - "Compare two of your variants to see whether the gap is real"
            - name: Walk-forward testing practice
              description: |-
                ## Purpose
                Fitting once over the whole history picks parameters nobody could have known at the start. Walk-forward testing refits on a rolling window and trades only the period after it, which is closer to how a strategy would really have been run and usually less flattering.

                ## Milestones
                1. A training window and step length chosen for one strategy.
                2. A walk-forward run completed with refitting at each step.
                3. The stitched walk-forward result compared with the full-period fit.
                4. The stability of chosen parameters across steps recorded.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One strategy has a completed walk-forward test, compared in writing with its full-period fit and with parameter stability noted."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Choose the training window and step length for one strategy"
                - "Run the walk-forward test with refitting at each step"
                - "Compare the stitched result with the single full-period fit"
                - "Note how often the chosen parameters changed between steps"
            - name: Volume participation caps in simulated fills
              description: |-
                ## Purpose
                Buying 40 percent of a small company's daily volume at the closing price in a backtest describes a trade that could never have happened. Capping each simulated order at a fixed share of average daily volume, and carrying the rest over, shows how much of the return survives realistic trading.

                ## Milestones
                1. A participation cap chosen and written into the protocol.
                2. The fill model changed to cap orders and carry unfilled amounts forward.
                3. Results compared with and without the cap.
                4. The names most affected by the cap listed.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The fill model enforces a written participation cap and the effect on results is recorded beside the uncapped run."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Choose a cap as a share of average daily volume"
                - "Change the fill model to carry unfilled amounts to the next bar"
                - "Compare results with and without the cap"
                - "List the securities the cap affected most"
            - name: Dividend, split and total return adjustments
              description: |-
                ## Purpose
                Back-adjusted prices are right for computing returns and wrong for any rule that uses price levels, such as a minimum price filter or a breakout above an old high. Working through one stock by hand across a split and a dividend makes clear which series each part of the backtest should read.

                ## Milestones
                1. The adjustment state of your price data confirmed: raw, split-adjusted or total return.
                2. Returns for one stock rebuilt by hand across a split and a dividend.
                3. Price-level rules confirmed to use prices shown on the day.
                4. The adjustment convention written into the protocol.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The protocol states which price series feeds returns and which feeds price-level rules, checked by a hand calculation on one stock."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Check whether your prices are raw, split-adjusted or total return"
                - "Rebuild returns for one stock by hand across a split and a dividend"
                - "Confirm price-level rules use the prices shown on the day"
                - "Record the adjustment convention in the protocol"
            - name: Short-sale constraints and borrow costs
              description: |-
                ## Purpose
                Long-short backtests often assume any stock can be shorted at no cost and held for as long as the signal says. In practice hard-to-borrow names carry fees, some cannot be borrowed at all and loans can be recalled, so the short side of many paper results is the part that never existed.

                ## Milestones
                1. A borrow cost assumption added for the short side.
                2. Names likely to be hard to borrow flagged by size and liquidity.
                3. Results rerun excluding or charging those names.
                4. The share of return from the short side reported separately.

                ## Notes
                Borrow data is sparse for individuals. A conservative proxy, written down, beats assuming free borrow.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The backtest charges a written borrow assumption and reports long and short contributions separately."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find out what borrow information your broker or data source provides"
                - "Add a borrow cost assumption for the short side"
                - "Rerun results excluding names likely to be hard to borrow"
                - "Report long and short contributions separately"
            - name: Financing, margin and cash interest in backtest returns
              description: |-
                ## Purpose
                Returns on futures, margined or geared strategies depend on what idle cash earns and what borrowing costs. Treating cash as earning nothing, or borrowing as free, distorts results by the level of short-term interest rates, which have ranged from near zero to above 5 percent in recent years.

                ## Milestones
                1. A short-term rate series added to the backtest data.
                2. Interest credited on idle cash and charged on borrowing.
                3. Margin requirements applied so positions cannot exceed what the account allows.
                4. Results compared before and after financing is included.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The backtest credits and charges interest from a dated rate series and enforces margin, with the before and after comparison recorded."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Find a short-term interest rate series covering the test period"
                - "Credit interest on idle cash and charge it on borrowing"
                - "Apply margin requirements to cap the size of positions"
                - "Compare results before and after financing is included"
            - name: Parameter sensitivity sweep and plateau check
              description: |-
                ## Purpose
                A strategy whose result collapses when a lookback moves from 20 to 22 days has found noise. Sweeping each important parameter across a range chosen in advance, and looking for a broad plateau of acceptable results rather than a sharp peak, is one of the quickest ways to tell a real effect from a lucky setting.

                ## Milestones
                1. The two or three parameters that matter most identified.
                2. Sweep ranges written down before any sweep is run.
                3. A result surface plotted with the chosen setting marked.
                4. The final setting moved to the middle of a plateau where one exists.

                ## Notes
                Every point in the sweep is a variant. Log the sweep in the register as one entry with its count.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A sensitivity plot for the main parameters is saved and the chosen setting sits on a recorded plateau, or the idea is marked fragile."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick the two or three parameters that matter most"
                - "Write each sweep range down before running it"
                - "Plot the result surface and mark the chosen setting on it"
                - "Move to the middle of the plateau if the setting sits on a peak"
            - name: Cost doubling and break-even cost test
              description: |-
                ## Purpose
                The cost per trade at which net return falls to zero tells you how much room a strategy really has. If break-even sits only slightly above your assumption, a small error in the cost model wipes out the whole result, and that is worth knowing before anything else.

                ## Milestones
                1. The backtest rerun at double and triple the default costs.
                2. The break-even cost per trade found.
                3. Break-even compared with spreads actually quoted in the market.
                4. The safety margin recorded in the variant register.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each candidate strategy has a recorded break-even cost and the ratio of that cost to the default assumption."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Rerun the backtest at double and triple your cost assumptions"
                - "Find the per-trade cost at which net return reaches zero"
                - "Compare break-even cost with the spreads you actually see"
                - "Record the safety margin in the variant register"
            - name: Delay-by-one-bar timing test
              description: |-
                ## Purpose
                If a strategy's return halves when every trade is delayed by one bar, either the edge is extremely short-lived or the backtest is leaking information it should not have. Delaying signals by one, two and five bars and charting the decay is a cheap test with a very high hit rate for hidden look-ahead.

                ## Milestones
                1. Results produced with signals delayed by one, two and five bars.
                2. A decay chart saved with the strategy's record.
                3. Any sharp drop between zero and one bar investigated.
                4. The decay profile noted in the protocol for later comparison.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A decay chart across four delay settings is saved and any sharp drop at one bar has a written explanation."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Delay every signal by one bar and rerun the backtest"
                - "Repeat with two and five bar delays and chart the decay"
                - "Investigate any result that falls sharply at one bar"
                - "Write the decay profile into the strategy's record"
            - name: Rebalance frequency comparison with costs on
              description: |-
                ## Purpose
                Daily rebalancing often looks best before costs and worst after. Comparing daily, weekly and monthly versions of the same signal with the default cost model switched on, and checking turnover for each, settles the frequency on evidence rather than habit.

                ## Milestones
                1. Daily, weekly and monthly versions run with identical cost settings.
                2. Turnover and net return compared for each.
                3. A frequency chosen and the reason recorded.
                4. The comparison logged as three variants in the register.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A rebalance frequency is chosen from a net-of-cost comparison of at least three frequencies, with the reason written in the protocol."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Run daily, weekly and monthly versions with the same cost settings"
                - "Compare turnover and net return for each version"
                - "Choose the frequency and write the reason in the protocol"
                - "Log all three runs in the variant register"
            - name: Universe rules with point-in-time liquidity filters
              description: |-
                ## Purpose
                Tiny, illiquid stocks often drive paper returns that cannot be captured. Setting minimum price, traded value and listing age filters, applied on each rebalance date using only data known then, keeps the universe tradable without quietly using today's knowledge of which companies grew.

                ## Milestones
                1. Minimum price, average traded value and listing age set.
                2. Filters applied as of each rebalance date using past data only.
                3. Results compared with and without the smallest decile of names.
                4. The universe rule recorded in the protocol.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The universe is rebuilt at each rebalance from written filters that use only past data, with the small-cap effect on results recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Set minimum price, traded value and listing age for the universe"
                - "Apply the filters using only data known on each rebalance date"
                - "Compare results with and without the smallest decile of names"
                - "Record the final universe rule in the protocol"
            - name: Choosing backtesting software for personal research
              description: |-
                ## Purpose
                For an individual the choice is usually between an open-source Python library, a broker's or charting platform's built-in tester, and a hosted research platform. Comparing a short list against the checks that matter here (delisted data, point-in-time fields, cost and fill models, exportable trade lists) beats choosing on how quick the demo looked.

                ## Milestones
                1. Three candidates shortlisted across open-source, broker and hosted options.
                2. Each scored on delisted data, cost models, fill options and trade export.
                3. One simple strategy rebuilt in the top two and results compared.
                4. A choice recorded with the reasons.

                ## Notes
                Start from the **Purchase decision** template. Writing your own engine is a bigger project of its own.
              priority: low
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A backtesting tool is chosen from three scored candidates, with one strategy compared across the top two."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List three candidate tools across open-source, broker and hosted options"
                - "Check each for delisted data, cost models and exportable trade lists"
                - "Rebuild one simple strategy in your top two and compare results"
                - "Record the choice and the reasons against your criteria"
            - name: Written stop rule for abandoning a research idea
              description: |-
                ## Purpose
                Most strategy ideas fail out of sample, and the expensive ones are those kept alive by one more tweak. Writing down in advance how many variants, how many weeks and which failed tests end an idea makes stopping a rule rather than a mood, and frees time for the next hypothesis.

                ## Milestones
                1. A maximum variant count and time budget set for any one idea.
                2. The test failures that end an idea outright listed.
                3. The stop rule added to the protocol template.
                4. Every idea now in progress checked against the rule.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A stop rule with a variant limit, a time limit and named failing tests is in the protocol template and has been applied to current ideas."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Set the maximum variants and weeks you will spend on any one idea"
                - "List the test failures that end an idea outright"
                - "Add the stop rule to the protocol template"
                - "Apply the rule to every idea currently in progress"
            - name: Random entry and shuffled signal sanity test
              description: |-
                ## Purpose
                If randomly timed entries with the same exits, or the signal shuffled across dates, produce results close to the real strategy, the edge lives in the exits, the universe or the market's drift rather than the signal. Running a few hundred randomised versions gives a distribution in which to place the real result.

                ## Milestones
                1. Five hundred runs with the signal shuffled across dates.
                2. Random entries tested with the strategy's own exit and sizing rules.
                3. The real result's percentile in each distribution recorded.
                4. A short conclusion written on where the edge appears to come from.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The real result's percentile against both shuffled-signal and random-entry distributions is recorded in the strategy's file."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Generate 500 runs with the signal shuffled across dates"
                - "Run random entries with the strategy's own exit and sizing rules"
                - "Plot where the real result falls in each distribution"
                - "Record the percentiles and a one-paragraph conclusion"
            - name: Sub-period and regime breakdown of results
              description: |-
                ## Purpose
                A ten-year result can be one good year and nine flat ones. Splitting returns by calendar year, by rising and falling markets and by high and low volatility shows whether the edge is broad or rests on a single episode that may never repeat.

                ## Milestones
                1. Returns, drawdown and hit rate reported for each calendar year.
                2. Results split by rising and falling market periods.
                3. Results split by high and low volatility periods.
                4. The share of total return from the best single year noted.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The standard report includes year-by-year and regime breakdowns and the best year's share of total return."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Report return, drawdown and hit rate for each calendar year"
                - "Define rising and falling markets and split results by them"
                - "Split results into high and low volatility periods"
                - "Note what share of the total came from the best year"
            - name: Backtest review meeting before a capital decision
              description: |-
                ## Purpose
                Before any money, a firm's or your own, goes behind a strategy, present the backtest to someone with permission to say no: the protocol, the variant count, the holdout result, net costs and the red-flag checklist. Recording the decision with its conditions, such as a maximum position size and a loss limit, means the go-ahead cannot drift later.

                ## Milestones
                1. A one-page summary with variant count, holdout result and net costs prepared.
                2. A reviewer willing and able to say no invited.
                3. Every objection raised in the meeting written down.
                4. The decision recorded with its position size limit, loss limit and review date.

                ## Notes
                Start from the **Meeting notes** template. A decision to stop is a good outcome of this meeting, not a failure.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A review has been held and its written decision includes a position size limit, a loss limit and a date to revisit."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Prepare a one-page summary with variant count, holdout result and net costs"
                - "Invite a reviewer with the authority or willingness to say no"
                - "Hold the meeting and write down every objection"
                - "Record the decision with its size limit, loss limit and review date"
            - name: Holdout reveal for a finished strategy
              description: |-
                ## Purpose
                The holdout is opened once, after code, parameters and protocol are frozen. Treating that moment as an event, with the expected range written down beforehand and the pass or fail decided strictly against the protocol, gives the only result in the whole study that was never shaped by looking.

                ## Milestones
                1. Code and parameters frozen under a tagged commit.
                2. The expected range of holdout results written before the run.
                3. The holdout run once with the access logged.
                4. Pass or fail recorded against the protocol thresholds without adjustment.

                ## Notes
                If it fails, the idea goes back to development with a fresh holdout or is dropped. Rerunning on the same holdout after changes defeats the purpose.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The holdout has been run once on a tagged commit and the pass or fail is recorded against thresholds set before the run."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Freeze the code and parameters with a tagged commit"
                - "Write the expected range of holdout results before running"
                - "Run the holdout once and record the access"
                - "Record pass or fail against the protocol thresholds without adjustment"
            - name: Annual audit of every backtest still relied on
              description: |-
                ## Purpose
                Once a year, every backtest that still informs a decision deserves a fresh look: does it reproduce, and has the year since it was run looked anything like what it predicted? Strategies that fail this audit are the ones to re-test or set aside before they cost more.

                ## Milestones
                1. Every strategy with a backtest you still rely on listed.
                2. Each one rerun from its record on current data.
                3. The past year's live or paper results compared with the backtest's expected range.
                4. A keep, re-test or retire note recorded for each.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "An annual audit note lists every relied-on backtest with its reproduction result, its last-year comparison and a keep, re-test or retire call."
                cadence: cyclic
              tasks:
                - "List every strategy with a backtest you still rely on @recurring(yearly)"
                - "Rerun each from its record on current data"
                - "Compare the past year's results with the backtest's expected range"
                - "Write a keep, re-test or retire note for each"
            - name: Backtest write-up for an interview or portfolio
              description: |-
                ## Purpose
                Interviewers and reviewers have seen hundreds of beautiful equity curves. A write-up that shows the protocol, the biases checked, the variant count and an honestly reported holdout, even a failed one, demonstrates judgement that a glossy chart cannot.

                ## Milestones
                1. One study chosen and its protocol, register and holdout gathered.
                2. A four-page write-up drafted covering method, checks, results and limits.
                3. The variant count and costs stated plainly.
                4. The write-up reviewed by someone who knows the field.

                ## Notes
                Start from the **Portfolio piece** template. Never include an employer's code, data or results; use your own research only.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A write-up of one personal study, stating variant count, costs and holdout result, has been reviewed and is ready to share."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Choose one personal study with a full protocol and register"
                - "Ask the agent to draft an outline from the protocol and register"
                - "Write the method, checks, results and limits sections"
                - "Ask someone in the field to review it before sharing"
            - name: Backtest rules for a part-time personal trader
              description: |-
                ## Purpose
                Someone testing ideas in the evenings around a full-time job is most likely to skip steps and most exposed when a backtest flatters. Most strategies fail out of sample, so this setup builds the risk rules into the backtest itself: a maximum position size as a share of the account, daily and monthly loss limits, a capital amount you can afford to lose entirely and a written stop rule.

                ## Milestones
                1. A maximum position size and daily and monthly loss limits written down.
                2. The backtest changed so breaching a limit halts the simulation.
                3. The simulated account sized to money you could lose without harm.
                4. A stop rule written for pausing after any limit breach.

                ## Notes
                This is organisation, not trading advice. Check tax and regulatory questions with a qualified professional where you live.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The backtest enforces written position and loss limits, and a stop rule for pausing after a breach is saved with the protocol."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write the maximum position size and monthly loss limit the backtest must enforce"
                - "Make any limit breach halt the simulation"
                - "Size the simulated account to money you can afford to lose entirely"
                - "Check backtest limits still match the account you would trade @recurring(monthly:5)"
            - name: Questions for a backtest someone else ran
              description: |-
                ## Purpose
                Signal services, strategy courses and vendor pitches arrive with backtests that cannot be rerun. A standard set of questions about trade lists, design dates, variants and costs, asked before any money changes hands, separates the honest sellers from those who cannot answer.

                ## Milestones
                1. A list of eight questions for any outside backtest written down.
                2. The questions sent for the next backtest you are shown.
                3. Results after the design date checked for being reported separately.
                4. A rule recorded: no reliance on a backtest whose author will not answer.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written question list exists and has been used on at least one outside backtest, with the answers or refusals filed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write eight questions to ask about any outside backtest"
                - "Ask for the trade list, the test dates and the date the strategy was designed"
                - "Check whether results after the design date are shown separately"
                - "File the answers, or the refusal, before deciding anything"
            - name: Joining a team and learning its backtest standards
              description: |-
                ## Purpose
                New researchers on a desk inherit a framework, a data stack and unwritten rules about what counts as a valid test. Learning those rules in the first ninety days, and reproducing one existing result end to end, avoids presenting a first idea that breaks a convention everyone else assumed.

                ## Milestones
                1. The team's written backtest standards, or the nearest thing, read and summarised.
                2. One existing team backtest reproduced end to end.
                3. Questions about unwritten conventions answered by a senior colleague.
                4. A first idea tested to the house standard and reviewed.

                ## Notes
                Start from the **Onboarding 30/60/90** template.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Within ninety days one existing team backtest has been reproduced and a first idea has passed review under the house standard."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask for the team's written backtest standards and read them"
                - "Reproduce one existing team backtest end to end"
                - "List conventions you could not find written down and ask about each"
                - "Test a first idea to the house standard and request a review"
            - name: House backtest standard for a research team
              description: |-
                ## Purpose
                For a lead researcher, a written standard means every result reaching the investment committee was produced the same way: the same costs, fill conventions, data versions, test periods and variant reporting. It shortens reviews, makes juniors productive sooner and makes results from different people comparable.

                ## Milestones
                1. A draft standard covering data, timing, costs, test periods and variant reporting.
                2. The draft reviewed by every researcher who will follow it.
                3. Automated checks added for the rules that can be checked in code.
                4. A review date set to update the standard.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A team backtest standard is agreed in writing, has automated checks for at least three rules and has a scheduled review."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Collect the conventions researchers already use and where they differ"
                - "Draft the standard for data, timing, costs, test periods and variants"
                - "Add automated checks for the rules that can be enforced in code"
                - "Review the standard with the team @recurring(quarterly)"
            - name: Reviewing backtests as a manager or allocator
              description: |-
                ## Purpose
                Portfolio managers, risk officers and investors who do not write the code still sign off on what it says. A short review routine built on variant counts, holdout results, cost sensitivity and the year-by-year breakdown lets a non-coder ask the questions that expose weak research without reading a line of code.

                ## Milestones
                1. A one-page review sheet for incoming backtests.
                2. Variant count and holdout status required with every research update.
                3. Cost sensitivity and yearly breakdown requested as standard exhibits.
                4. Three past research proposals reviewed with the sheet.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A review sheet is in use and every research update received in the past quarter reported a variant count and holdout status."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Draft a one-page review sheet for incoming backtests"
                - "Tell researchers which exhibits every proposal must include"
                - "Ask for variant counts and holdout status with each update @recurring(monthly:12)"
                - "Review three past proposals with the sheet to test it"
            - name: Intraday bar construction and timestamp audit
              description: |-
                ## Purpose
                Bars labelled by their open time but built from trades up to their close, exchange timestamps mixed with vendor receipt times, and daylight saving shifts between venues all leak minutes of the future into intraday tests. An audit of how bars are built and stamped is essential before trusting any result on minute data.

                ## Milestones
                1. The bar labelling convention, open or close stamped, confirmed.
                2. Exchange, vendor and local timestamps identified and reconciled.
                3. Daylight saving transitions checked for every venue used.
                4. A test added that fails if any signal uses a bar not yet closed.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The bar labelling and time zone conventions are documented and an automated test rejects signals that use unfinished bars."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Check whether your bars are stamped at their open or their close"
                - "List which timestamps are exchange, vendor or local time"
                - "Check each venue's daylight saving changes in the data"
                - "Add a test that fails if a signal reads a bar before it closes"
            - name: Market impact assumptions for larger simulated books
              description: |-
                ## Purpose
                Above a few percent of daily volume the price moves against you as you trade, and a flat cost per trade badly understates it. Adding an impact term scaled by volatility and participation, often a square-root form, shows the book size at which a strategy's backtest stops working.

                ## Milestones
                1. An impact formula chosen with its parameters and their source noted.
                2. Impact applied in the backtest by order size and volatility.
                3. Results produced at several book sizes.
                4. The book size at which net return halves recorded.

                ## Notes
                Impact parameters are uncertain. Run a pessimistic setting beside the central one rather than trusting a single figure.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "The backtest includes a sourced impact model and a table of net results at four or more book sizes."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Choose an impact formula and note where its parameters come from"
                - "Apply impact in the backtest by order size and volatility"
                - "Run the strategy at four or more book sizes"
                - "Record the book size at which net return halves"
            - name: Planted signal test of the backtest pipeline
              description: |-
                ## Purpose
                Feeding the pipeline synthetic prices with a small, known edge planted in them, and a second set with no edge at all, checks that the machinery finds what is there and nothing that is not. A pipeline that reports a profit on pure noise has a leak somewhere, however careful the research above it.

                ## Milestones
                1. A synthetic price set with a known planted edge generated.
                2. A matched synthetic set with no edge generated.
                3. The pipeline recovering the planted edge within expected error.
                4. The no-edge set showing no profit beyond chance after costs.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The pipeline recovers a planted edge and shows no edge on pure noise, with both runs saved as regression tests."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Generate synthetic prices with a small known edge planted in them"
                - "Generate a matched set with no edge at all"
                - "Run both through the full pipeline and compare with expectations"
                - "Rerun the planted signal test after any engine change @recurring(quarterly)"
            - name: Point-in-time fundamentals with reporting lags
              description: |-
                ## Purpose
                Company accounts arrive weeks after the period ends, are sometimes restated, and many databases store only the latest version against the original period date. Rebuilding fundamental signals from first-reported figures with realistic filing lags is the specialist fix for one of the oldest and costliest backtest errors.

                ## Milestones
                1. Filing dates obtained for every fundamental field used.
                2. Signals rebuilt from first-reported rather than restated figures where data allows.
                3. A conservative lag applied where filing dates are missing.
                4. Results compared before and after the change and the gap recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Fundamental signals use filing dates or a written conservative lag, and the before and after difference is in the register."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Find the filing date field for each fundamental you use"
                - "Rebuild signals from first-reported figures where the data allows"
                - "Apply a written conservative lag where filing dates are missing"
                - "Compare results before and after and log the gap"
---

# Backtesting Discipline

Backtesting discipline is the set of habits that keep a simulated equity curve from lying to you, for researchers on a desk and for knowledgeable individuals testing ideas of their own. It starts with foundations (a written protocol, fixed test dates, a variant register, point-in-time, survivorship and look-ahead checks, default costs), then the routines that keep them honest, the skills behind realistic fills and adjustments, the tests that try to break a result, the review and holdout moments, setups for part-time traders, team leads and reviewers, and a few specialist checks for intraday and larger books.

The rhythms are a weekly look at the variant register and the review queue, monthly checks of assumptions, data snapshots, corporate actions and the holdout log, and quarterly and yearly re-runs of everything you still rely on. Most strategies fail out of sample, so the plan builds in risk limits, a position sizing rule and a written stop rule, and pairs with the Operational checklist, Purchase decision, Meeting notes, Portfolio piece and Onboarding 30/60/90 templates; none of it is trading or investment advice. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
