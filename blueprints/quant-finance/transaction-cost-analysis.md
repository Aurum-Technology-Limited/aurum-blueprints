---
id: quant-finance.transaction-cost-analysis
name: Transaction Cost Analysis
description: "Trading costs measured instead of guessed: clean order and fill records, the right benchmark per order, shortfall decomposition, cost models for research, broker scorecards and post-trade reports people read."
category: business
version: 1.0.0
tags: [quant-finance, transaction-cost-analysis, researcher, knowledge-worker, tca, implementation-shortfall, market-impact, best-execution]
author: Aurum Technology
starter_structure:
  templates:
    - reading-queue
    - vendor
    - meeting-notes
    - onboarding-30-60-90
    - metrics-log
  pillars:
    - name: Quantitative Finance & Trading
      emoji: "🧮"
      description: "Systematic research and trading run like engineering: alpha research and honest backtests, factor and risk models, execution and microstructure, statistics and machine learning, quant development and market data, prop-firm evaluations and personal algorithmic trading under strict risk rules, and quant careers. Organisation and method only, never trading advice."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Transaction Cost Analysis
          description: "Measuring what trading really costs: spreads, market impact, slippage against benchmarks, cost models for research and post-trade reports."
          projects:
            - name: Trading cost taxonomy for your own book
              description: |-
                ## Purpose
                Most cost arguments go round in circles because one person means commission and another means market impact. Writing down every component you will measure, from explicit fees and taxes through half-spread, impact, delay and opportunity cost, gives every later report and model the same vocabulary and the same sign convention.

                ## Milestones
                1. A one-page list of cost components split into explicit and implicit, each with a one-line definition.
                2. A sign convention fixed so that a positive number always means the trade cost money, for buys and sells alike.
                3. The unit for each component agreed, usually basis points of traded value, with per-share or per-contract figures kept alongside.
                4. The taxonomy shared with the people who will read the reports and their objections noted.

                ## Notes
                Opportunity cost on unfilled orders is the component most often left out, and leaving it out flatters patient execution.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated taxonomy page lists every cost component with a definition, unit and sign convention, and has been read by its main audience."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every cost line on your last broker statement in a single table"
                - "Add the implicit costs: half-spread, impact, delay and opportunity cost"
                - "Write the sign convention so buys and sells report cost the same way"
                - "Send the page to the portfolio manager or trader and record their comments"
            - name: Order and fill record capture for TCA
              description: |-
                ## Purpose
                Cost analysis is only as good as the trail behind each trade: when the decision was made, when the order reached the desk, when it reached the market, and every child fill with price, size and venue. Defining that record once, and checking your systems actually keep it, turns TCA from a reconstruction exercise into a query.

                ## Milestones
                1. A field list covering decision time, order creation, release to market, child orders, fills, venue and cancellations.
                2. Each field traced to the system that produces it, with gaps marked.
                3. A sample month of orders pulled and checked for missing or duplicated fills.
                4. A fix agreed for each gap, with an owner and a date.

                ## Notes
                Decision time is the field most often missing, and without it you cannot measure delay cost at all.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written order and fill record specification exists, mapped to source systems, with every gap assigned an owner and fix date."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write the list of fields a cost analysis needs for one parent order"
                - "Find which system holds each field and mark the ones nobody records"
                - "Pull one month of orders and count fills that do not sum to the parent"
                - "Agree an owner and a date for each missing field"
            - name: Timestamp and clock audit for order records
              description: |-
                ## Purpose
                Benchmark prices are only meaningful if the times attached to them are right, and order management, execution and market data systems often run on different clocks and time zones. Auditing those clocks catches the case where arrival prices are taken seconds late, which on a fast-moving name can swamp the cost you are trying to measure.

                ## Milestones
                1. The clock source and time zone of each system in the order path written down.
                2. Timestamp precision noted for each system, from seconds to microseconds.
                3. A test order sequence traced end to end and the offsets between systems measured.
                4. A correction or tolerance rule written into the TCA method for any remaining offset.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every system in the order path has a documented clock source, precision and measured offset, with a written handling rule for each."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask each system owner which clock and time zone their timestamps use"
                - "Compare order release times with the first fill times on twenty orders"
                - "Note any system that rounds timestamps to the second or worse"
                - "Repeat the offset check on a sample of orders @recurring(quarterly)"
            - name: Benchmark choice for each strategy type
              description: |-
                ## Purpose
                Arrival price, interval VWAP, the close and the previous close each answer a different question, and judging a close-targeting index fund against arrival price produces nonsense. Choosing the benchmark that matches each strategy's intent, and writing down why, stops traders being judged on numbers that reward gaming the benchmark.

                ## Milestones
                1. Each strategy or order type listed with its trading intent in one sentence.
                2. A primary benchmark chosen for each, with arrival price as the default for alpha-driven orders.
                3. A secondary benchmark recorded where it helps diagnosis, such as interval VWAP.
                4. The known ways each benchmark can be gamed written beside it.

                ## Notes
                VWAP is easy to beat by trading large orders that move the VWAP themselves. Use it as a diagnostic, rarely as the headline.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A benchmark table names the primary and secondary benchmark for every strategy, with a written rationale and known weaknesses."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List each strategy with the reason its orders are sent"
                - "Pick a primary benchmark for each and write one line on why"
                - "Note how a trader could make each benchmark look better without saving money"
                - "Get the head trader or portfolio manager to sign off the table"
            - name: Implementation shortfall decomposition worksheet
              description: |-
                ## Purpose
                Implementation shortfall compares what you would have earned at the decision price with what you actually earned, and splitting it into delay, trading, opportunity and fixed costs shows where the money went. A worked worksheet that does the split for one order at a time is the reference every automated report should reconcile to.

                ## Milestones
                1. A worksheet that takes decision price, arrival price, fills, unfilled quantity and the end price.
                2. Shortfall split into delay cost, execution cost, opportunity cost and explicit fees.
                3. Five real orders run through by hand and the components checked to sum to the total.
                4. The worksheet stored as the reference used to test any automated report.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A shortfall worksheet decomposes five real orders into four components that sum exactly to the total shortfall."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Set up the input fields for decision price, arrival price and fills"
                - "Write the formula for each of the four shortfall components"
                - "Run five past orders through and check the parts sum to the whole"
                - "Save the worksheet with those five orders as a regression test"
            - name: Explicit fee schedule by broker and venue
              description: |-
                ## Purpose
                Commissions, exchange and clearing fees, maker-taker rebates, stamp or transaction taxes and regulatory levies are the easy part of cost, yet they are often taken from memory or an old rate card. A current schedule per broker, venue and market lets you price explicit costs to the basis point and spot billing errors.

                ## Milestones
                1. Current rate cards collected for every broker and clearing arrangement in use.
                2. Exchange fees and rebates listed for the main venues, by order type where they differ.
                3. Transaction taxes and levies noted by market, with the source and date checked.
                4. One month of broker invoices reconciled against the schedule.

                ## Notes
                Tax and levy rules change and differ by market. Confirm them with your broker or tax adviser rather than relying on this schedule alone.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A dated explicit cost schedule covers every broker, venue and market traded, and one month of invoices reconciles to it within a stated tolerance."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Request the current commission schedule from each broker"
                - "Download the published fee schedule for your three busiest venues"
                - "Record transaction taxes and levies for each market with a source link"
                - "Reconcile last month's invoices to the schedule and list differences"
            - name: Market data needed to benchmark fills
              description: |-
                ## Purpose
                Arrival price, spread at arrival, interval VWAP and participation rates all come from quotes, trades and volume curves at the right timestamps. Pinning down which data each metric needs, at what granularity, keeps the TCA from being built on end-of-day bars that cannot see the spread.

                ## Milestones
                1. Each TCA metric listed with the market data it requires.
                2. The granularity needed for each written down, such as top of book quotes for spread at arrival.
                3. Current data holdings checked against the list and gaps noted.
                4. A decision recorded on how to fill each gap or which metric to drop.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A table maps every TCA metric to its required data and granularity, with a recorded decision for each gap."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the metrics your first TCA report will show"
                - "Write the quote, trade or volume data each metric needs"
                - "Check what you already hold at that granularity"
                - "Decide how to fill each gap or which metric to postpone"
            - name: Baseline cost snapshot of last quarter's trades
              description: |-
                ## Purpose
                Before changing anything, find out what trading cost over the last three months using the taxonomy, records and benchmarks now in place. The baseline gives every later improvement a number to beat, and it usually surfaces the two or three order types that account for most of the cost.

                ## Milestones
                1. Every parent order from the quarter loaded with its fills and benchmark prices.
                2. Average and value-weighted cost in basis points reported by component.
                3. Costs broken down by strategy, broker and order size bucket.
                4. The three most expensive order groups named with their share of total cost.

                ## Notes
                Report value-weighted figures alongside simple averages. A few large orders usually dominate the bill.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A baseline report gives last quarter's cost by component, strategy, broker and size bucket, and names the three costliest order groups."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Export last quarter's parent orders and fills into one table"
                - "Attach the agreed benchmark price to every parent order"
                - "Compute cost by component, strategy, broker and size bucket"
                - "Write a one-page summary naming the three costliest order groups"
            - name: Weekly post-trade cost review
              description: |-
                ## Purpose
                Twenty minutes each week looking at the previous week's fills catches problems while the trader still remembers the order and the market. Covering the cost summary, the worst orders and anything unusual is enough to keep costs visible without turning the review into a second job.

                ## Milestones
                1. A standing weekly slot with a fixed one-page cost summary.
                2. The five most expensive orders of the week looked at with the trader.
                3. Any process or data issue logged with an owner.
                4. A running note of weekly cost so trends show up over months.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly cost summary is produced and reviewed for at least ten consecutive weeks, with issues logged and owned."
                cadence: rolling
              tasks:
                - "Set up the one-page weekly cost summary layout"
                - "Review last week's cost summary and the five worst orders @recurring(weekly:mon)"
                - "Log any data or process issue with an owner"
                - "Add the week's value-weighted cost to the running log"
            - name: Monthly TCA report for the portfolio manager
              description: |-
                ## Purpose
                Portfolio managers need cost in the same terms as their returns: basis points per strategy, against budget, with a short explanation of what moved. A monthly report that stays the same shape every month is read; one that changes its charts every time is not.

                ## Milestones
                1. A fixed report layout covering total cost, cost by component and cost against budget per strategy.
                2. A short commentary section limited to three points.
                3. Confidence intervals or order counts shown so small samples are not over-read.
                4. The report delivered by the same working day each month.

                ## Notes
                Start from the **Metrics log** template to keep the monthly figures in one running record.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly TCA report in a fixed layout is delivered by an agreed working day for six consecutive months."
                cadence: rolling
              tasks:
                - "Agree the report layout and delivery day with the portfolio manager"
                - "Produce and send the monthly TCA report @recurring(monthly:5)"
                - "Write no more than three commentary points on what moved"
                - "Show order counts beside every average so thin samples stand out"
            - name: Quarterly broker scorecard
              description: |-
                ## Purpose
                Brokers are easier to judge when every one is scored on the same orders, benchmarks and adjustments for difficulty. A quarterly scorecard combining cost, fill rates, reversion and service notes gives broker reviews something firmer than anecdote and lets you move flow on evidence.

                ## Milestones
                1. A scorecard layout with cost against benchmark, difficulty-adjusted cost, fill rate and markouts.
                2. Orders grouped by difficulty so brokers given harder flow are not penalised.
                3. Qualitative scores for coverage, communication and error handling added.
                4. Each quarter's scorecard filed and compared with the last.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A broker scorecard with difficulty-adjusted cost and qualitative scores is produced each quarter and compared with the previous one."
                cadence: cyclic
              tasks:
                - "Define the difficulty buckets by size, spread and volatility"
                - "Build the scorecard and fill it for every active broker @recurring(quarterly)"
                - "Collect a service score for each broker from the trading desk"
                - "Note any broker whose cost has worsened two quarters running"
            - name: Cost model recalibration cycle
              description: |-
                ## Purpose
                Spreads, volumes and volatility drift, so a cost model fitted two years ago will understate or overstate costs today. A scheduled refit with fixed steps, data windows and acceptance checks keeps the model current without anyone retuning it every time a month looks odd.

                ## Milestones
                1. A written recalibration procedure with the data window and parameters refitted.
                2. Acceptance checks that compare new and old predictions on the same orders.
                3. A rule for when a parameter change is large enough to need review before use.
                4. A changelog entry for every recalibration with the date and data version.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The cost model is refitted on a fixed schedule, each refit passes written acceptance checks and is recorded in a changelog."
                cadence: cyclic
                effort_hours_estimate: "12"
              tasks:
                - "Write the recalibration steps and the data window used"
                - "Refit the cost model and run the acceptance checks @recurring(quarterly)"
                - "Compare new and old predicted costs on last quarter's orders"
                - "Record the refit in the model changelog with the data version"
            - name: Outlier trade investigation queue
              description: |-
                ## Purpose
                Each month a handful of orders cost far more than the model expected, and each one is either a data error, a bad decision or a genuinely hard market. Running them through a short queue with fixed questions separates the three and stops one bad print distorting a whole month's numbers.

                ## Milestones
                1. A threshold that flags orders whose cost is far outside the predicted range.
                2. A checklist for each flagged order: data check, market conditions, trader notes.
                3. Every flagged order closed as data error, process issue or market event.
                4. A count of each outcome kept so recurring causes are visible.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every order beyond the outlier threshold is investigated and classified within a week, with outcome counts kept."
                cadence: rolling
              tasks:
                - "Set the outlier threshold in terms of predicted cost and its error"
                - "Work through the flagged orders in the queue @recurring(weekly:thu)"
                - "Check each flagged order for bad prints before anything else"
                - "Tally outcomes by cause at the end of each month"
            - name: Pre-trade cost estimate for large orders
              description: |-
                ## Purpose
                A large order is cheaper to manage when everyone knows its expected cost before it starts. Attaching a pre-trade estimate with a range to every order above a size threshold lets the portfolio manager weigh cost against urgency and gives post-trade review something to compare with.

                ## Milestones
                1. A size threshold, as a share of average daily volume, above which an estimate is required.
                2. An estimate format with expected cost, a range and the main drivers.
                3. Estimates stored with the order so they can be compared afterwards.
                4. A monthly check of how often realised cost fell inside the range.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every order above the agreed size threshold carries a stored pre-trade estimate with a range for at least three months."
                cadence: rolling
              tasks:
                - "Agree the order size threshold with the desk"
                - "Design a one-line estimate format with expected cost and range"
                - "Store each estimate in the order record before release"
                - "Count estimates that missed the range at week end @recurring(weekly:fri)"
            - name: Realised versus predicted cost tracking
              description: |-
                ## Purpose
                Left unchecked against real fills, a cost model slowly becomes fiction. Plotting realised against predicted cost each month, by size bucket and liquidity tier, shows whether the model is biased and where, and it is the evidence a researcher needs before trusting the model in a backtest.

                ## Milestones
                1. A monthly table of predicted and realised cost by size bucket and liquidity tier.
                2. Bias and spread of the prediction error reported with order counts.
                3. A tolerance band agreed, outside which the model is flagged for review.
                4. Twelve months of history kept to show whether bias is drifting.

                ## Notes
                Realised cost is noisy, so judge bias over hundreds of orders, not a dozen.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly realised versus predicted table exists for twelve months, with any bucket outside tolerance flagged and reviewed."
                cadence: rolling
              tasks:
                - "Choose the size and liquidity buckets for the comparison"
                - "Run the realised versus predicted comparison @recurring(monthly:12)"
                - "Flag any bucket whose bias sits outside the tolerance band"
                - "Send flagged buckets to the next recalibration"
            - name: Fill feed data quality checks
              description: |-
                ## Purpose
                Busted trades, late corrections, duplicated fills and wrong venue codes quietly corrupt cost numbers. A short set of automated checks on the fill feed, run every week, catches them before they reach a report that someone acts on.

                ## Milestones
                1. Checks written for duplicate fills, fills outside the day's range, missing venues and quantity mismatches.
                2. Each check producing a short exception list.
                3. An owner who clears exceptions and records the fix.
                4. A monthly count of exceptions by type to show whether data is improving.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Automated fill feed checks run weekly and every exception is cleared or explained before the monthly report is produced."
                cadence: rolling
              tasks:
                - "Write a check for fills priced outside the day's high and low"
                - "Add checks for duplicates, missing venues and quantity mismatches"
                - "Clear the fill feed exception list @recurring(weekly:wed)"
                - "Record each fix with its cause in the data issue log"
            - name: Annual best execution review file
              description: |-
                ## Purpose
                Firms that handle client orders are usually expected to show they monitor execution quality and review their arrangements regularly, and even a personal account benefits from the same yearly look. A single file each year with the policy, the evidence and the decisions made answers the questions a compliance team or auditor will ask.

                ## Milestones
                1. The current execution policy or personal trading rules filed.
                2. The year's broker scorecards, TCA reports and outlier logs gathered.
                3. Decisions made during the year about brokers, venues or methods recorded with reasons.
                4. The file reviewed by compliance or a second person and signed off.

                ## Notes
                What the rules require depends on your firm and jurisdiction. Agree the contents of the file with your compliance team.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A yearly best execution file with policy, evidence and decisions is assembled and signed off by compliance or a reviewer."
                cadence: cyclic
                effort_hours_estimate: "10"
              tasks:
                - "Ask compliance what the annual execution review must contain"
                - "Assemble the year's best execution review file @recurring(yearly)"
                - "Write a paragraph on each broker or venue change and why"
                - "Book a sign-off meeting with compliance or a reviewer"
            - name: Cost budget per strategy against expected alpha
              description: |-
                ## Purpose
                Every strategy has a cost level above which it stops making money, and it is far lower for fast signals than for slow ones. Setting a cost budget per strategy from its expected gross edge and turnover, then checking spend against it each month, ties trading cost directly to whether the strategy is worth running.

                ## Milestones
                1. Expected gross edge and turnover written down for each strategy.
                2. A cost budget in basis points per unit of turnover derived for each.
                3. Monthly realised cost compared with each budget.
                4. A rule agreed for what happens when a strategy runs over budget for two months.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each strategy has a written cost budget derived from expected edge and turnover, compared monthly with realised cost."
                cadence: rolling
              tasks:
                - "Write each strategy's expected gross edge and annual turnover"
                - "Derive a cost budget for each strategy from those two figures"
                - "Compare realised cost with each budget @recurring(monthly:18)"
                - "Agree the action for a strategy over budget two months running"
            - name: Square-root market impact law study
              description: |-
                ## Purpose
                Across many markets, the impact of a large order grows roughly with the square root of its size relative to daily volume, scaled by volatility. Working through the evidence and fitting the simple form to your own data gives you an intuition for how cost scales that no vendor number can replace.

                ## Milestones
                1. Two or three empirical papers on the square-root law read and summarised.
                2. The formula written out with each term explained in plain words.
                3. The simple form fitted to your own fills and the fitted coefficient recorded.
                4. A short note on where your data departs from the law, such as very small or very large orders.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note explains the square-root impact law, reports a coefficient fitted to your own fills and lists where it fits poorly."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Find two empirical papers on square-root market impact"
                - "Write the formula out and explain each term in a sentence"
                - "Fit the simple form to your fills grouped by size bucket"
                - "Note the size ranges where the fit is poor"
            - name: Temporary and permanent impact study
              description: |-
                ## Purpose
                Part of the price move caused by your trading fades once you stop, and part stays, and the split matters for both cost models and how fast you should trade. Studying the classic temporary and permanent impact framing and measuring the decay in your own fills makes later model choices informed rather than copied.

                ## Milestones
                1. The definitions of temporary and permanent impact written in your own words.
                2. Price paths after order completion averaged across your large orders.
                3. An estimate of how much impact remains after a fixed horizon.
                4. A note on what the split implies for your cost model.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note gives your own estimate of the permanent share of impact over a stated horizon, with the method and sample size."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Read a standard treatment of temporary and permanent impact"
                - "Collect post-completion price paths for your fifty largest orders"
                - "Average the paths and measure how much impact remains"
                - "Write what the result means for the cost model"
            - name: Quoted, effective and realised spread practice
              description: |-
                ## Purpose
                The quoted spread is what the screen shows, the effective spread is what you paid relative to the midpoint, and the realised spread shows what the liquidity provider kept after prices moved. Calculating all three on your own fills is the quickest way to understand why trading inside the spread is not always a saving.

                ## Milestones
                1. The three spread measures defined with formulas and a worked example.
                2. Each measure calculated for a sample of your fills.
                3. Results compared across venues or order types.
                4. A short explanation of any gap between effective and realised spread.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Quoted, effective and realised spreads are calculated on at least two hundred of your fills and compared by venue or order type."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the formula for each spread measure with a worked example"
                - "Pick two hundred fills with matching quote data"
                - "Calculate the three measures and tabulate them by venue"
                - "Explain the largest difference you find in a paragraph"
            - name: Markout and price reversion analysis
              description: |-
                ## Purpose
                Looking at the price a few seconds, minutes and hours after each fill shows whether you are being picked off or are providing liquidity at good moments. Markout curves by venue, broker and order type are one of the most informative post-trade views and are cheap to produce once fills and quotes line up.

                ## Milestones
                1. Markout horizons chosen to suit your holding period, from seconds to a day.
                2. Markout curves produced for all fills and split by venue and broker.
                3. Venues or order types with consistently adverse markouts identified.
                4. Findings shared with whoever controls routing.

                ## Notes
                Sign markouts so adverse moves are always positive cost, matching the taxonomy.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Markout curves at agreed horizons are produced by venue and broker, and adverse venues are named in a note to the routing owner."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Choose four markout horizons that suit your holding period"
                - "Compute markouts for each fill against the midpoint"
                - "Plot the curves by venue and by broker"
                - "Send the venues with adverse markouts to the routing owner"
            - name: Statistical noise in cost estimates
              description: |-
                ## Purpose
                Trading costs are small numbers measured against very noisy price moves, so a broker that looks five basis points better may be indistinguishable from the rest. Learning how to put confidence intervals on average cost, how many orders a comparison needs and how to handle extreme values stops reports from announcing differences that are not there.

                ## Milestones
                1. Standard errors computed for average cost by broker or strategy.
                2. A rough sample size worked out for detecting a two basis point difference.
                3. A winsorising or trimming rule chosen and written into the method.
                4. Existing reports updated to show intervals or order counts.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The TCA method states the sample size needed for a stated difference and every average in the reports carries an interval or order count."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Compute the standard error of average cost for each broker"
                - "Estimate the order count needed to detect a two basis point gap"
                - "Pick and document a rule for extreme values"
                - "Add intervals to the broker and strategy tables"
            - name: Reading broker-supplied TCA critically
              description: |-
                ## Purpose
                Brokers send their own cost reports, and they choose the benchmarks, the exclusions and the peer groups. Learning to question those choices, and to rebuild one headline number from your own data, tells you how much of the report to trust.

                ## Milestones
                1. One broker TCA report annotated for benchmark, exclusions and peer group method.
                2. A headline figure from that report rebuilt from your own fills.
                3. Any difference explained in a short note.
                4. A list of standard questions to send with every future broker report.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One broker TCA headline number is rebuilt from your own data, differences are explained, and a standing question list exists."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Mark up the benchmark and exclusions in one broker TCA report"
                - "Rebuild its headline cost figure from your own fills"
                - "Write down why your number differs, if it does"
                - "Draft five questions to send with every broker report"
            - name: Cost measurement for FX, futures and bonds
              description: |-
                ## Purpose
                Outside listed equities there is often no consolidated tape, trading may be by request for quote, and futures roll and FX fixing create their own cost questions. Learning the usual benchmarks and data sources for each asset class you trade keeps cost analysis from stopping at equities.

                ## Milestones
                1. The main execution style for each non-equity asset class you trade written down.
                2. A sensible benchmark identified for each, such as a composite mid for bonds traded by quote.
                3. The data available to compute that benchmark checked.
                4. One month of non-equity trades measured against it.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each non-equity asset class traded has a documented benchmark and data source, and one month of its trades has been measured."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List the non-equity asset classes in your book and how each is traded"
                - "Find the benchmark practitioners use for each"
                - "Check whether you hold the data that benchmark needs"
                - "Measure one month of those trades against the chosen benchmark"
            - name: Opportunity cost of unfilled orders
              description: |-
                ## Purpose
                Limit orders that never fill look free in a report that only measures fills, yet the trade you missed may have been the one that mattered. Measuring the price move on the unfilled part of each order, out to a fixed horizon, gives patient strategies an honest bill.

                ## Milestones
                1. A horizon chosen for valuing unfilled quantity, tied to the strategy's holding period.
                2. Opportunity cost computed for all partially filled and cancelled orders.
                3. Results compared with the execution cost those orders saved.
                4. Opportunity cost added as a standing line in the monthly report.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Opportunity cost on unfilled quantity is measured to a stated horizon and appears as its own line in the monthly report."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick the horizon for valuing unfilled quantity"
                - "Find every partially filled or cancelled order last quarter"
                - "Value the unfilled part at the horizon price"
                - "Add an opportunity cost line to the report layout"
            - name: Transaction cost reading list
              description: |-
                ## Purpose
                Only a small set of papers and books covers most of what practitioners rely on: implementation shortfall, optimal execution, empirical impact studies and the cost of trading factor strategies. Reading them in order, with a short note on each, builds a shared reference for the team and saves rediscovering known results.

                ## Milestones
                1. A list of eight to twelve core papers and books in reading order.
                2. A half-page note on each one read, with what applies to your book.
                3. Notes stored where colleagues can find them.
                4. Two ideas from the reading turned into tests on your own data.

                ## Notes
                Start from the **Reading queue** template. Good starting points include Perold on implementation shortfall and Almgren and Chriss on optimal execution.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "At least eight core readings are noted in a shared place and two ideas from them have been tested on your own data."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write the first eight titles of the reading list in order"
                - "Read one paper from the list and write its note @recurring(monthly:3)"
                - "Share the notes folder with colleagues"
                - "Pick two ideas from the notes to test on your fills"
            - name: Research cost model for backtests
              description: |-
                ## Purpose
                Researchers need a cost function that takes a trade size, a stock's liquidity and volatility and returns an expected cost, so backtests charge something close to reality. Building one from your own fills, with spread and impact terms, replaces the flat basis point charge that makes high-turnover ideas look far better than they are.

                ## Milestones
                1. A cost function with half-spread, impact and fee terms written down.
                2. Parameters fitted to your own fills or, failing that, to published estimates with a stated source.
                3. The function tested against realised costs on held-out orders.
                4. The function packaged so research code calls the same version every time.

                ## Notes
                If you have few fills, start from published estimates and flag the model as provisional. Most strategies fail out of sample, and under-charged costs are a common reason.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A versioned cost function fitted to fills or cited estimates is tested on held-out orders and used by all research backtests."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Write the cost function's inputs and terms on one page"
                - "Fit the parameters on two thirds of last year's fills"
                - "Test predictions on the remaining third and record the error"
                - "Publish the function as a versioned module for research code"
            - name: Cost curve against assets under management
              description: |-
                ## Purpose
                Impact grows as positions grow, so a strategy that is cheap to run at one size can be uneconomic at five times that. Running the cost model across a range of fund sizes shows where cost eats the expected edge and gives a written, defensible answer to how much capital the strategy can take.

                ## Milestones
                1. The strategy's turnover and position sizes scaled across a range of assets.
                2. Expected cost computed at each size with the research cost model.
                3. The size at which net expected return falls by half marked on the curve.
                4. The curve and its assumptions written up for the portfolio manager.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A cost curve across at least five fund sizes is produced, with the size at which net edge halves stated and assumptions listed."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Choose five fund sizes to test"
                - "Scale positions and turnover to each size"
                - "Run the cost model at each size and plot cost against gross edge"
                - "Write a one-page note with the curve and its assumptions"
            - name: TCA vendor or in-house build decision
              description: |-
                ## Purpose
                Independent TCA providers bring peer data and ready reports, while an in-house build gives control over benchmarks and method. Comparing two or three vendors with an internal option on the same criteria, cost and data handling avoids a multi-year contract chosen from a demo.

                ## Milestones
                1. Requirements written: asset classes, benchmarks, data delivery, peer comparison and budget.
                2. Two or three vendors and an in-house option scored against the same criteria.
                3. A trial run on one month of your own orders for the leading option.
                4. A decision recorded with cost, reasons and a review date.

                ## Notes
                Start from the **Vendor** template. Check what the vendor may do with your order data before sending any.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A scored comparison of at least two vendors and an in-house option, with a trial result, leads to a recorded decision."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Write the requirements list with a budget range"
                - "Ask two vendors for a demo and their data handling terms"
                - "Score each option, including an in-house build, on the same criteria"
                - "Record the decision with reasons and a review date"
            - name: Randomised broker comparison design
              description: |-
                ## Purpose
                Comparing brokers on whatever flow they happened to receive mixes their skill with the difficulty of the orders. Assigning comparable orders at random between two brokers for a fixed period, and deciding the measure and sample size beforehand, gives a comparison you can act on.

                ## Milestones
                1. The comparison question, measure and minimum sample written down before the test.
                2. A randomisation rule for assigning eligible orders between brokers.
                3. The test run for its fixed period without changing the rules midway.
                4. Results reported with intervals and a decision recorded.

                ## Notes
                Agree the design with the desk first. Traders overriding the assignment is the usual reason these tests fail.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A pre-registered randomised broker comparison runs for its full period and ends with a reported result and recorded decision."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write the question, measure and sample size before any orders move"
                - "Define which orders are eligible and how they are assigned"
                - "Agree with the desk that assignments will not be overridden"
                - "Report the result with intervals at the end of the period"
            - name: Rebalance frequency decision from cost and decay
              description: |-
                ## Purpose
                Trading more often captures a signal before it fades but pays more cost, and the right frequency sits where the two curves meet. Measuring how fast the signal decays and how cost scales with turnover lets you choose the rebalance interval on evidence rather than habit.

                ## Milestones
                1. Signal decay measured as expected return against days since the signal.
                2. Turnover and cost estimated for three or four candidate rebalance intervals.
                3. Net expected return compared across the intervals.
                4. A chosen interval recorded with the evidence and a date to revisit.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A rebalance interval is chosen from a comparison of net expected return across at least three intervals, with the evidence filed."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Measure the signal's expected return by days since it fired"
                - "Estimate turnover for weekly, fortnightly and monthly rebalancing"
                - "Compare net expected return across the intervals"
                - "Revisit the chosen interval against fresh decay data @recurring(yearly)"
            - name: Delay cost from decision to order release
              description: |-
                ## Purpose
                Time lost between a portfolio manager deciding and the order reaching the market is pure cost when the signal is moving in your favour. Measuring that delay and its price cost often finds basis points that no broker change could save, hiding in approvals, batching or manual handoffs.

                ## Milestones
                1. Decision and release timestamps available for a full month of orders.
                2. Average delay and delay cost reported by strategy and by time of day.
                3. The main causes of long delays identified with the desk.
                4. One change made to the handoff and its effect measured.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Delay cost is measured for a month of orders, its main causes named and one handoff change made and re-measured."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Pull decision and release times for one month of orders"
                - "Compute delay cost by strategy and by hour of the day"
                - "Walk through the five longest delays with the desk"
                - "Change one handoff step and re-measure the next month"
            - name: Commission and research payment review
              description: |-
                ## Purpose
                Where research and execution are paid for together, commission rates can hide research spend, and in markets where they must be separated the arrangements need checking. A review of what you pay, for what, and under which rules, shows whether execution commissions reflect execution alone.

                ## Milestones
                1. Commission rates split into execution and any research component, broker by broker.
                2. Research budgets and payment methods listed where they apply.
                3. The applicable rules confirmed with compliance for each jurisdiction you trade in.
                4. Any change to rates or arrangements decided and recorded.

                ## Notes
                Rules on paying for research differ by jurisdiction and change over time. Treat compliance's view as the deciding one.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each broker's commission is split into execution and research parts, rules are confirmed with compliance and a decision is recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List each broker's commission rate and what it pays for"
                - "Ask compliance which research payment rules apply to you"
                - "Separate execution-only rates from bundled ones"
                - "Record any change to rates or arrangements and its reason"
            - name: Borrow and financing costs in the cost picture
              description: |-
                ## Purpose
                For strategies that short or hold positions on margin, stock borrow fees, recalls and financing spreads can cost as much as execution, yet they rarely appear in a TCA report. Adding them as their own lines, measured per strategy and per name, shows the full cost of holding a position as well as entering it.

                ## Milestones
                1. Borrow fees, financing spreads and recall events collected from prime broker or broker statements.
                2. Holding cost per strategy expressed in basis points a year alongside execution cost.
                3. Hard-to-borrow names with the highest fees listed with their share of total holding cost.
                4. Borrow and financing lines added to the monthly report and the research cost model.

                ## Notes
                Borrow rates on hard-to-borrow names can change daily. Use the rates actually charged, not the rate at the time the position was opened.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Borrow and financing costs per strategy are measured in basis points a year and appear as separate lines in the monthly report."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Download last quarter's borrow and financing charges from your broker"
                - "Convert holding costs to basis points a year per strategy"
                - "List the ten names with the highest borrow fees"
                - "Add borrow and financing lines to the report and the cost model"
            - name: Cost attribution by order characteristics
              description: |-
                ## Purpose
                Cost depends heavily on size relative to volume, volatility, spread, time of day and urgency, so raw comparisons between traders or brokers mislead. A regression of cost on those characteristics shows which ones drive your bill and gives the difficulty adjustment the scorecard needs.

                ## Milestones
                1. Order characteristics computed for every parent order: size over volume, volatility, spread and timing.
                2. Cost regressed on those characteristics with standard errors.
                3. The two or three strongest drivers identified and explained.
                4. The fitted adjustment used to produce difficulty-adjusted cost.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A cost attribution regression on all parent orders names the main drivers and produces a difficulty adjustment used in reporting."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Compute size over average volume, volatility and spread for each order"
                - "Regress cost on the characteristics and record coefficients"
                - "Write a paragraph on the strongest two drivers"
                - "Feed the adjustment into the broker scorecard"
            - name: First quarterly TCA report delivered
              description: |-
                ## Purpose
                Once the records, benchmarks and monthly figures exist, the first full quarterly report is the moment cost analysis becomes part of how the book is run. Delivering it on a set date, with the baseline as comparison and a short list of decisions, makes the work visible and sets the format for every quarter after.

                ## Milestones
                1. A delivery date agreed with the portfolio manager and the desk.
                2. The report drafted with quarter-on-baseline comparison by strategy and broker.
                3. Three recommended actions written with expected savings.
                4. The report presented and agreed actions recorded with owners.
              priority: high
              deadlineOffsetDays: 100
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first quarterly TCA report is presented on its agreed date and its actions are recorded with owners."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Agree the delivery date and audience for the first quarterly report"
                - "Draft the report with the baseline as comparison"
                - "Write three recommended actions with estimated savings"
                - "Record agreed actions and owners after the presentation"
            - name: Broker review meeting preparation
              description: |-
                ## Purpose
                Broker reviews go better when you bring numbers they cannot dispute and specific orders to discuss. Preparing the scorecard, a handful of example orders and clear asks turns the meeting from a relationship catch-up into a conversation about cost.

                ## Milestones
                1. The broker's latest scorecard and trend against the previous quarter ready.
                2. Three to five example orders chosen, good and bad, with fills and benchmarks.
                3. Specific asks written, such as an explanation of reversion on one venue.
                4. Meeting outcomes and follow-ups recorded.

                ## Notes
                Start from the **Meeting notes** template to keep agendas and follow-ups in one place.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A broker review is held with a scorecard, example orders and written asks, and the follow-ups are recorded with dates."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Print the broker's scorecard and quarter-on-quarter trend"
                - "Choose three to five example orders to discuss"
                - "Write the specific asks you want answered"
                - "Record follow-ups with dates after the meeting"
            - name: Investment committee presentation on trading costs
              description: |-
                ## Purpose
                Investment committees and allocators increasingly ask what trading costs and how it is controlled. A short, honest presentation covering total cost, how it is measured, how it compares with the strategy's budget and what is being done about the worst areas builds more confidence than a single flattering number.

                ## Milestones
                1. A slot booked on the committee agenda.
                2. Five or six slides covering method, total cost, cost against budget and actions.
                3. A rehearsal with a colleague who asks hard questions.
                4. Committee questions and requests recorded after the meeting.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A trading cost presentation is given to the committee on its booked date and every question raised is recorded with a response owner."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the committee secretary for a slot on the agenda"
                - "Ask the agent to draft a six-slide outline from the last quarterly report"
                - "Rehearse with a colleague and note the hardest questions"
                - "Record committee questions and who will answer each"
            - name: Index rebalance day cost post-mortem
              description: |-
                ## Purpose
                Index rebalances and other heavy closing auctions concentrate volume and cost into minutes, and the results are easy to misjudge. A dated post-mortem after a major rebalance, comparing auction participation with continuous trading, shows whether your approach to those days actually saved money.

                ## Milestones
                1. The rebalance date and the orders affected listed in advance.
                2. Costs measured against the close and arrival benchmarks for those orders.
                3. Auction fills compared with continuous trading fills on the same names.
                4. Lessons written down for the next rebalance.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A post-mortem of one index rebalance day compares auction and continuous fills and lists lessons for the next rebalance."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Mark the next major index rebalance date and the orders it affects"
                - "Measure those orders against close and arrival benchmarks"
                - "Compare auction fills with continuous fills on the same names"
                - "Write three lessons for the next rebalance"
            - name: Cost model sign-off before a strategy goes live
              description: |-
                ## Purpose
                A new strategy should not go live on a backtest charged with a flat or borrowed cost assumption. A formal sign-off, where the researcher shows the cost model used, its fit on similar orders and the net result, gives the decision a written record and catches strategies that only work before costs.

                ## Milestones
                1. The cost model version used in the strategy's backtest identified.
                2. Model accuracy on orders similar to the strategy's trades shown.
                3. Gross and net results presented side by side with a cost stress at higher levels.
                4. Sign-off recorded, or the strategy sent back with reasons.

                ## Notes
                Include a run at one and a half and two times modelled cost. Strategies that only survive at modelled cost are fragile.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A new strategy's cost model, accuracy and gross versus net results under stressed costs are reviewed and a sign-off decision is recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Confirm the cost model version the backtest used"
                - "Show model error on orders like the strategy's trades"
                - "Rerun the backtest at one and a half and two times modelled cost"
                - "Record the sign-off decision and any conditions"
            - name: Slippage tracking for a solo trading account
              description: |-
                ## Purpose
                Researchers trading a personal account through a retail broker still pay spreads, impact and sometimes poor routing, but rarely see them reported. Logging the price you expected against the price you got on every trade, with a simple monthly summary, shows whether costs are eating a small strategy's edge.

                ## Milestones
                1. A simple log with intended price, fill price, size, time and order type for every trade.
                2. Slippage in basis points calculated for each trade.
                3. A monthly summary comparing slippage with the strategy's expected edge per trade.
                4. One change tried, such as limit orders or different trading times, and measured.

                ## Notes
                Trade only capital you can afford to lose, keep a written stop rule, and remember that most strategies fail out of sample.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every personal trade for three months has logged slippage, and monthly summaries compare it with expected edge per trade."
                cadence: rolling
              tasks:
                - "Set up a log with intended price, fill price, size and time"
                - "Export your broker fills and fill in the log"
                - "Summarise slippage against expected edge @recurring(monthly:27)"
                - "Try one order handling change and compare the next month"
            - name: First 90 days as a TCA analyst on a desk
              description: |-
                ## Purpose
                Joining a trading desk or execution team in a cost analysis role means learning the order flow, the systems and the politics of who gets judged on which number. A 30, 60 and 90 day plan focused on understanding the existing reports, meeting the traders and delivering one useful analysis earns credibility early.

                ## Milestones
                1. By day 30, the order path, systems and current reports mapped and every trader met.
                2. By day 60, one existing report rebuilt independently and differences explained.
                3. By day 90, one new analysis delivered that the desk has asked for.
                4. A short list of improvements agreed with your manager for the next quarter.

                ## Notes
                Start from the **Onboarding 30/60/90** template. Ask traders what they think the reports get wrong before proposing changes.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A 30, 60 and 90 day plan is completed with a rebuilt report, one new analysis delivered and next-quarter improvements agreed."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Book a short meeting with each trader in your first two weeks"
                - "Map the systems an order passes through from decision to fill"
                - "Rebuild one existing report from raw data"
                - "Agree one analysis the desk wants delivered by day 90"
            - name: Inheriting someone else's cost model
              description: |-
                ## Purpose
                When a colleague leaves, their cost model often stays in production with undocumented choices and nobody who understands it. Working through it methodically, documenting what it does, testing it against fresh fills and deciding whether to keep, fix or replace it, prevents silent errors from feeding every backtest.

                ## Milestones
                1. The model's code, inputs and parameters located and run end to end.
                2. A plain description of what the model assumes, written from the code.
                3. The model's predictions compared with realised cost on recent orders.
                4. A keep, fix or replace decision recorded with reasons.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An inherited cost model is documented, tested on recent fills and given a recorded keep, fix or replace decision."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Find the model's code and run it once end to end"
                - "Write down every assumption you can read from the code"
                - "Compare its predictions with last quarter's realised cost"
                - "Record a keep, fix or replace decision with reasons"
            - name: TCA reading guide for portfolio managers
              description: |-
                ## Purpose
                Portfolio managers without a quant background are often handed cost reports full of benchmarks and basis points with no guide to what matters. A two-page guide on how to read the monthly report, which numbers to question and when a difference is just noise helps them use cost analysis in decisions.

                ## Milestones
                1. A two-page guide explaining each section of the monthly report.
                2. Three questions a portfolio manager should ask each month written in plain language.
                3. A worked example showing a difference that looks large but is noise.
                4. The guide tested on one portfolio manager and revised from their feedback.
              priority: low
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A two-page TCA reading guide is tested with at least one portfolio manager and revised from their feedback."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the sections of the monthly report and explain each in a sentence"
                - "Write three plain-language questions to ask every month"
                - "Add a worked example of a noisy difference"
                - "Walk one portfolio manager through the guide and revise it"
            - name: Moving TCA from spreadsheets to a pipeline
              description: |-
                ## Purpose
                Cost analysis that starts in spreadsheets becomes hard to reproduce once orders number in the thousands and several people touch the file. Moving the steps into a scripted pipeline with version control and tests means every report can be rerun and checked, and the shortfall worksheet becomes its test case.

                ## Milestones
                1. Every manual step in the current spreadsheet process written down.
                2. Each step reproduced in code with the output matching the spreadsheet.
                3. The shortfall worksheet orders used as automated tests.
                4. One month's report produced from the pipeline alone.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A version-controlled TCA pipeline reproduces one month's spreadsheet report exactly and passes the shortfall worksheet tests."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Write down each manual step in the current spreadsheet process"
                - "Rebuild the steps in code under version control"
                - "Add the five worksheet orders as automated tests"
                - "Produce one month's report from the pipeline and compare outputs"
            - name: Impact estimation corrected for selection bias
              description: |-
                ## Purpose
                Impact fitted only on orders that were actually traded is biased, because traders slow down or stop when the market moves against them and push on when it moves their way. Estimating impact with methods that account for that conditioning, such as using completed parent orders or instruments for trading intent, gives a cost model closer to what a new strategy will face.

                ## Milestones
                1. The ways your order data is conditioned on trader decisions listed.
                2. A naive impact fit and a bias-aware fit produced on the same data.
                3. The difference between the two estimates quantified.
                4. The bias-aware estimate adopted or rejected with a written reason.

                ## Notes
                This is specialist work. Have the method reviewed by someone outside the team before it feeds research backtests.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Naive and bias-aware impact estimates are compared on the same orders and the adopted method is recorded with its reasoning."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "List how trader decisions shape which orders complete"
                - "Fit a naive impact model on completed fills"
                - "Fit a bias-aware model on the same orders"
                - "Re-estimate both models on the latest year of data @recurring(yearly)"
            - name: Cross-impact and crowded trade cost
              description: |-
                ## Purpose
                Trading many correlated names at once, or trading alongside others running similar signals, pushes prices further than single-name models predict. Measuring cost on days of heavy correlated trading and on names held by crowded strategies shows how much the single-name model understates.

                ## Milestones
                1. Days with heavy correlated trading identified from your order history.
                2. Cost on those days compared with model predictions.
                3. A crowding proxy chosen and cost compared across crowded and uncrowded names.
                4. A recommendation on whether the cost model needs a cross-impact term.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Model error on correlated trading days and crowded names is measured and a written recommendation on a cross-impact term is made."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Flag days when you traded many correlated names together"
                - "Compare realised and predicted cost on those days"
                - "Pick a crowding proxy and split names by it"
                - "Write a recommendation on adding a cross-impact term"
            - name: Information leakage checks on large orders
              description: |-
                ## Purpose
                If prices start moving against you as soon as a large order is shown to a broker or venue, information may be leaking. Comparing price moves before and during large orders across brokers and venues, against matched orders that were not shown, gives evidence to raise with a broker or change routing.

                ## Milestones
                1. Large orders identified with the time each broker or venue first saw them.
                2. Price moves after first exposure compared with a matched control group.
                3. Brokers or venues with consistently worse moves after exposure listed.
                4. Findings reviewed with the desk and any routing change recorded.

                ## Notes
                Leakage findings are sensitive. Share them through the desk head and compliance rather than directly with brokers until evidence is solid.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Post-exposure price moves on large orders are compared against a control group by broker and venue, with findings reviewed by the desk."
                cadence: rolling
              tasks:
                - "List large orders with the first time each broker saw them"
                - "Build a matched control set of orders not shown in advance"
                - "Compare post-exposure price moves by broker and venue @recurring(monthly:22)"
                - "Review any flagged broker with the desk head and compliance"
            - name: Stressed cost assumptions for volatile markets
              description: |-
                ## Purpose
                Spreads widen and depth vanishes in volatile markets, often exactly when a strategy needs to trade. Measuring how your costs scaled during past high-volatility periods and building a stressed version of the cost model gives risk and research a realistic number for the days that matter most.

                ## Milestones
                1. Past high-volatility periods in your order history identified.
                2. Cost in those periods compared with calm periods, by liquidity tier.
                3. A stressed cost multiplier or regime-dependent parameter set fitted.
                4. The stressed model handed to research and risk with documentation.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A stressed cost model fitted on high-volatility periods is documented and handed to research and risk."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Mark the high-volatility periods in your order history"
                - "Compare cost in those periods with calm periods by liquidity tier"
                - "Fit a stressed multiplier or regime parameter set"
                - "Document the stressed model and send it to research and risk"
---

# Transaction Cost Analysis

This area is for researchers who need honest cost numbers in their backtests and for the portfolio managers, traders and analysts who have to explain what trading actually cost the book. It starts with the foundations (a cost taxonomy, order and fill records with trustworthy timestamps, benchmarks chosen per strategy and a first baseline), then the weekly and monthly machinery of post-trade review, then the skills behind impact, spreads and markouts, the decisions about cost models, vendors and rebalance frequency, the dated reports and meetings, variants for solo traders, new joiners and inherited models, and finally the specialist work of bias-corrected impact estimation, cross-impact and leakage.

What repeats is a weekly cost review and outlier queue, a monthly report with realised against predicted cost and a cost budget per strategy, quarterly broker scorecards and model recalibration, and a yearly best execution file. The Reading queue, Vendor, Meeting notes, Onboarding 30/60/90 and Metrics log templates pair with the projects that name them. Nothing here is trading or regulatory advice, and a strategy that looks profitable before costs very often is not after them, which is the reason to measure carefully. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
