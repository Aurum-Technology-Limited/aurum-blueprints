---
id: quant-finance.execution-algorithms
name: Execution Algorithms
description: "Written execution objectives and benchmarks, hard limits on every parent order, a replay simulator, staged rollouts and regular reviews of TWAP, VWAP, shortfall and routing logic, for the researchers and engineers who build them."
category: business
version: 1.0.0
tags: [quant-finance, execution-algorithms, researcher, engineer, twap-vwap, implementation-shortfall, smart-order-routing, order-scheduling]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - vendor
    - operational-checklist
    - compliance-control
    - onboarding-30-60-90
    - portfolio-piece
  pillars:
    - name: Quantitative Finance & Trading
      emoji: "🧮"
      description: "Systematic research and trading run like engineering: alpha research and honest backtests, factor and risk models, execution and microstructure, statistics and machine learning, quant development and market data, prop-firm evaluations and personal algorithmic trading under strict risk rules, and quant careers. Organisation and method only, never trading advice."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Execution Algorithms
          description: "Designing and evaluating execution: TWAP, VWAP and implementation shortfall approaches, order scheduling, venue choice and testing changes safely."
          projects:
            - name: Written execution objectives by order type
              description: |-
                ## Purpose
                An algo cannot be judged good or bad until someone has written down what each kind of order is trying to achieve: minimise cost against the decision price, match the day's average, finish before the close or stay invisible. Writing one objective per order type, with the trade-off it accepts, stops arguments after the fact about whether a slow fill was patience or failure.

                ## Milestones
                1. A list of the order types you actually send, such as rebalance, alpha entry, risk reduction and cash flow.
                2. One written objective for each, naming what it trades off against, such as cost against completion risk.
                3. The person who owns each objective named, usually the portfolio manager or researcher behind the flow.
                4. The objectives saved where the execution code and reviews can point to them.

                ## Notes
                If two order types share an objective and an algo, merge them. Fewer categories make every later review easier.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A dated document lists every order type sent, one execution objective and accepted trade-off for each, and a named owner."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the order types sent in the last three months from the order log"
                - "Write one objective and its accepted trade-off for each order type"
                - "Agree each objective with the person whose orders it covers"
                - "Save the objectives beside the execution code"
            - name: Choosing the benchmark each algo is judged on
              description: |-
                ## Purpose
                Arrival price, interval VWAP, the closing price and the previous close each reward different behaviour, and a VWAP algo judged against arrival will look broken on every trending day. Matching one primary benchmark to each objective, and writing why, makes performance numbers comparable across months and people.

                ## Milestones
                1. Each order type paired with one primary benchmark and, where useful, one secondary.
                2. The exact definition of each benchmark recorded, including start time, end time and which prints count.
                3. Known blind spots of each benchmark written in a sentence, such as VWAP rewarding trading with your own impact.
                4. The benchmark choices signed off by the objective owners.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every order type has a recorded primary benchmark with an exact definition and a one-line note on its blind spot."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pair each order type with arrival, interval VWAP or closing price"
                - "Write the exact start and end time rule for each benchmark"
                - "Note one blind spot for each benchmark chosen"
                - "Get sign-off from each objective owner"
            - name: Inventory of algos, versions and parameters in use
              description: |-
                ## Purpose
                Execution stacks accumulate variants: a broker's VWAP with three custom settings, an in-house TWAP from two years ago, a close algo someone tuned once. A single inventory of every algo, its version, its default parameters and who may change them is the base for every review, limit and release that follows.

                ## Milestones
                1. Every algo and broker strategy that sent an order in the last quarter listed.
                2. Version, default parameters and allowed overrides recorded for each.
                3. An owner and a change approver named for each entry.
                4. Unused or duplicate variants flagged for a later retirement decision.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "An inventory covers every algo used in the last quarter with version, defaults, owner and approver, and flags unused variants."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pull a list of distinct algo names and versions from last quarter's orders"
                - "Record default parameters and allowed overrides for each algo"
                - "Name an owner and a change approver for each entry"
                - "Flag variants with fewer than a handful of orders for review"
            - name: Historical intraday volume curve per instrument group
              description: |-
                ## Purpose
                VWAP and participation schedules are only as good as the volume profile they follow, and a single market-wide curve misses the heavier close in small caps or the lunch dip in some markets. Building curves by instrument group from enough history, with special days removed, gives every schedule a defensible shape to work from.

                ## Milestones
                1. Instrument groups defined, for example by market, liquidity bucket and sector.
                2. Bin-level volume curves built from at least several months of history per group.
                3. Auction volume, half days, expiries and index events separated or excluded.
                4. Forecast error of each curve measured on a later period and recorded.

                ## Notes
                Keep the opening and closing auctions as separate buckets. Mixing them into the continuous curve distorts the first and last bins.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Versioned volume curves exist for each instrument group, with special days excluded and out-of-sample forecast error recorded."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Define instrument groups by market and liquidity bucket"
                - "Build bin-level volume curves from the chosen history window"
                - "Exclude auctions, half days and index event days from the continuous curve"
                - "Measure each curve's forecast error on a later month"
            - name: Pre-trade estimate of duration and participation
              description: |-
                ## Purpose
                Before an order starts, the trader and the algo should agree on roughly how long it will take and what share of volume it implies. A simple pre-trade sheet that turns order size and expected volume into a duration, a participation rate and a rough cost range makes urgency choices explicit and catches orders that are too big for the day.

                ## Milestones
                1. A formula or small tool that turns order size and expected volume into duration and participation.
                2. A rough cost range shown alongside, taken from the cost model your research already uses.
                3. A threshold above which an order is flagged as too large for a single day.
                4. The estimate stored with each parent order so actuals can be compared later.

                ## Notes
                Keep the cost range coarse here. Detailed cost modelling belongs to transaction cost work; this sheet only needs to be good enough to choose a schedule.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every new parent order carries a stored pre-trade estimate of duration and participation, and oversized orders are flagged before they start."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write the formula linking size, expected volume, duration and participation"
                - "Add the cost range from your existing cost model"
                - "Set the participation threshold that flags an order as too large"
                - "Store the estimate on each parent order record"
            - name: Hard limits and kill switch for every parent order
              description: |-
                ## Purpose
                An execution algo with a bug can trade a day's volume in seconds, which is why hard limits sit outside the algo logic and cannot be overridden by it. Writing and enforcing maximum order size, maximum participation, price collars, message rate limits and a kill switch that cancels everything is the one foundation no change ever skips.

                ## Milestones
                1. Written limits for maximum notional, maximum share of volume, price collar from reference and message rate.
                2. Limits enforced in a layer the algo cannot bypass, and tested by trying to breach each one.
                3. A kill switch that cancels all open child orders, with who may press it and how.
                4. A stop rule written for halting an algo after any breach until a review signs it back on.

                ## Notes
                Ask your compliance or risk function which pre-trade controls your regulator requires. Market access rules in many jurisdictions set a floor, not a ceiling.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every limit and the kill switch has a passing breach test on record, and a written stop rule names who restarts a halted algo."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write maximum notional, participation, price collar and message rate limits"
                - "Check each limit sits in a layer the algo code cannot change"
                - "Run a breach test for every limit in the test environment"
                - "Test the kill switch and record how long cancellation takes"
                - "Write the stop rule for halting an algo after a breach"
            - name: Order book replay simulator for testing changes
              description: |-
                ## Purpose
                Changes to placement or scheduling logic cannot be judged on live orders alone, and a backtest on bars ignores queue position entirely. A replay simulator that feeds historical order book data to the algo, models queue position and fills conservatively, and reports against the same benchmarks as production is how changes get tested before any money is at risk.

                ## Milestones
                1. Historical order book data for a test set of instruments and days loaded into the simulator.
                2. A fill model with queue position and a stated assumption about your own market impact.
                3. Simulator results for the current algo reconciled against its real fills on the same days.
                4. A fixed test set of days, including quiet, busy and stressed sessions, versioned for repeat runs.

                ## Notes
                Most simulators flatter passive orders because they ignore that your order would have moved the queue. Calibrate against real fills before trusting any comparison.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The simulator reproduces the current algo's real slippage on a fixed test set within an agreed tolerance, and that tolerance is recorded."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Choose ten instruments and twenty days for the first test set"
                - "Load historical order book data for the test set"
                - "Write the fill model with queue position and an impact assumption"
                - "Compare simulated and real slippage for the current algo"
                - "Version the test set so every later run uses the same days"
            - name: Order state and child order audit trail
              description: |-
                ## Purpose
                When a fill looks wrong, the first question is what the algo knew and decided at that moment, and logs that only record fills cannot answer it. A structured record of every parent order state change, every child order with its reason code and every market snapshot used for a decision turns post-trade questions into queries.

                ## Milestones
                1. A schema for parent states, child orders, reason codes and decision-time market snapshots.
                2. Every child order tagged with the scheduler or placement rule that created it.
                3. Timestamps from a synchronised clock with stated precision.
                4. A sample investigation answered from the trail alone, without reading code.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A past fill question has been answered entirely from the audit trail, and every child order in a sample day carries a reason code."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Draft the schema for parent states, child orders and reason codes"
                - "Add a reason code to every child order the algo creates"
                - "Record the clock source and timestamp precision"
                - "Answer one real fill question using only the trail"
            - name: Execution change policy with staged rollout
              description: |-
                ## Purpose
                Any change to an algo touches every order it handles, so a small error is multiplied by the whole flow. A written policy that sorts changes by risk, requires simulator evidence, then routes a small share of flow before full release, and names who approves each step, makes changes routine instead of nerve-racking.

                ## Milestones
                1. Changes sorted into tiers, from parameter tweaks to new logic, with evidence needed for each.
                2. A staged rollout path, such as simulator, small share of flow, then full release.
                3. Rollback criteria written as numbers, such as slippage worse than control by a set amount over a set number of orders.
                4. Approvers named for each tier and the policy saved with the code.

                ## Notes
                Write the rollback rule before the rollout starts. Deciding afterwards invites waiting for one more day of data.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A signed-off change policy defines change tiers, a staged rollout path, numeric rollback criteria and an approver per tier."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Sort past algo changes into three risk tiers"
                - "Write the evidence each tier needs before release"
                - "Set numeric rollback criteria for staged rollouts"
                - "Name an approver for each tier and save the policy"
            - name: Daily exceptions check on yesterday's orders
              description: |-
                ## Purpose
                Most execution problems show up first as a handful of odd orders: one that ran far past its estimated duration, one that hit a price collar, one that finished with a large residual. Ten minutes each morning on an exceptions list catches bugs and bad parameters while they are still small.

                ## Milestones
                1. An exceptions report listing orders outside duration, slippage, residual and limit thresholds.
                2. A morning check that takes under fifteen minutes.
                3. Each exception given a cause or passed to the owner.
                4. Repeated causes collected for the weekly review.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every trading day's exceptions are reviewed by the next morning, with a cause or owner recorded for each one."
                cadence: rolling
              tasks:
                - "Set the thresholds that put an order on the exceptions list"
                - "Review yesterday's exceptions list and note a cause for each @recurring(daily)"
                - "Pass unexplained exceptions to the algo owner with the audit trail link"
                - "Tag repeated causes so the weekly review can count them"
            - name: Weekly algo performance review against benchmarks
              description: |-
                ## Purpose
                Single orders are noisy, so judging an algo means looking at many orders grouped by size, urgency and market conditions. A weekly review of slippage against each order type's chosen benchmark, with confidence intervals rather than averages alone, shows which algos are drifting before a quarter of bad results piles up.

                ## Milestones
                1. A standard weekly report by algo, order type and size bucket.
                2. Slippage shown with confidence intervals and order counts.
                3. Each week's notable moves explained or flagged for investigation.
                4. Decisions from the review written in a running log.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly report with slippage, intervals and order counts per algo exists for each of the last eight weeks, with decisions logged."
                cadence: rolling
              tasks:
                - "Build the weekly report grouped by algo, order type and size bucket"
                - "Review slippage against each order type's benchmark with intervals @recurring(weekly:fri)"
                - "Write any decision or investigation in the review log"
                - "Ask the agent to summarise the month's review notes into three themes"
            - name: Monthly volume curve refresh
              description: |-
                ## Purpose
                Volume profiles shift as closing auctions grow, as markets change hours and as new venues take share. Rebuilding the curves monthly and comparing forecast error with the old version keeps VWAP and participation schedules aimed at how the market trades now.

                ## Milestones
                1. Curves rebuilt each month on the latest history window.
                2. Forecast error compared between the new and old curves on the most recent weeks.
                3. The new version released only where it is better, with the version noted.
                4. Large shifts, such as a growing close, written up for the algo owners.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Volume curves carry a monthly version, and each release records forecast error against the version it replaced."
                cadence: rolling
              tasks:
                - "Rebuild the volume curves on the latest history window @recurring(monthly:4)"
                - "Compare forecast error of new and old curves on recent weeks"
                - "Release the better curve and note its version"
                - "Write up any large shift in the close or open share"
            - name: Monthly audit of limits and parameter overrides
              description: |-
                ## Purpose
                Limits drift: a collar widened for one volatile day stays wide for a year, and a trader's favourite override quietly becomes the default. A monthly audit comparing live limits and overrides with the written ones closes those gaps before an incident finds them.

                ## Milestones
                1. Live limits exported and compared with the written limits.
                2. Every override used in the month listed with who set it and why.
                3. Temporary changes past their end date reverted or re-approved.
                4. The audit result filed with any differences and their fixes.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each month has a filed audit showing live limits match written limits, with every override and temporary change accounted for."
                cadence: rolling
              tasks:
                - "Export live limits and compare them with the written limits @recurring(monthly:12)"
                - "List every parameter override used this month and who set it"
                - "Revert or re-approve temporary changes past their end date"
                - "File the audit with differences and fixes"
            - name: Quarterly venue and routing review
              description: |-
                ## Purpose
                Venues change fees, rebates, order types and fill quality, and a routing table set two years ago may be sending flow where it is most likely to be picked off. A quarterly look at fill rates, markouts after fills and fees by venue keeps routing choices based on evidence.

                ## Milestones
                1. Fill rate, short-term markout and net fee calculated by venue and order type.
                2. Venues with consistently poor markouts flagged.
                3. Fee schedule changes from the quarter checked against the routing table.
                4. Routing changes proposed through the change policy, with the reasons.

                ## Notes
                Markouts after passive fills are the clearest sign of adverse selection. Look at several horizons, not only one.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A quarterly venue report with fill rates, markouts and net fees exists, and any routing change it led to went through the change policy."
                cadence: cyclic
              tasks:
                - "Calculate fill rate, markout and net fee by venue @recurring(quarterly)"
                - "Flag venues with poor markouts across several horizons"
                - "Check this quarter's venue fee changes against the routing table"
                - "Propose routing changes through the change policy"
            - name: Release calendar and change freeze windows
              description: |-
                ## Purpose
                Releasing an algo change the day before an index rebalance or a quarterly expiry is how small bugs become large losses. A shared calendar of release slots and freeze windows around heavy days means changes land on ordinary days, with people around to watch them.

                ## Milestones
                1. Freeze windows defined around index rebalances, expiries, quarter ends and holidays.
                2. Regular release slots set on ordinary trading days.
                3. The calendar shared with researchers, engineers and traders.
                4. Any emergency release outside a slot recorded with its reason.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A shared release calendar lists freeze windows for the next quarter, and every release in the last quarter landed in a slot or has a recorded exception."
                cadence: rolling
              tasks:
                - "List the next quarter's rebalances, expiries and holidays as freeze windows"
                - "Set two regular release slots each month on ordinary days"
                - "Update the release calendar for the coming month @recurring(monthly:24)"
                - "Record the reason for any release made outside a slot"
            - name: Market calendar watch for auctions and half days
              description: |-
                ## Purpose
                Algos assume a normal session unless told otherwise, so a half day, a changed auction time or a market holiday in one country can leave orders unfinished or crowding into the wrong minutes. Checking the coming month's exchange notices and loading special sessions into the calendar prevents a class of failures that is entirely avoidable.

                ## Milestones
                1. Exchange notice sources listed for every market you trade.
                2. Half days, holidays and auction time changes for the coming month loaded into the session calendar.
                3. Algos confirmed to read the session calendar rather than fixed times.
                4. A test run on the next special session in the simulator.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The session calendar holds every special session for the coming month for every traded market, checked against exchange notices."
                cadence: rolling
              tasks:
                - "Check the notice page for every exchange you trade @recurring(weekly:mon)"
                - "Load the coming month's half days and auction changes @recurring(monthly:20)"
                - "Check each algo reads session times from the calendar"
                - "Run the next special session through the simulator"
            - name: Weekly child order fill quality sample
              description: |-
                ## Purpose
                Aggregate slippage can hide a placement rule that pays the spread too often or a passive order that sits while the price runs away. Pulling a small random sample of child orders each week and walking through them against the order book shows the behaviour behind the averages.

                ## Milestones
                1. A random sample of child orders drawn each week across algos.
                2. Each sampled order checked for price, timing and reason code against the book at the time.
                3. Odd behaviour logged with an example the owner can replay.
                4. Patterns across weeks fed into the change backlog.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twenty random child orders a week are reviewed against the book, with findings and examples logged for at least eight consecutive weeks."
                cadence: rolling
              tasks:
                - "Write the query that draws twenty random child orders"
                - "Walk the sampled child orders against the order book @recurring(weekly:wed)"
                - "Log odd behaviour with a replayable example"
                - "Add repeated patterns to the change backlog"
            - name: Quarterly review of broker algos and their settings
              description: |-
                ## Purpose
                Buy-side desks that route through broker algos still own the outcome, and broker strategies change versions and defaults with little notice. A quarterly review with each broker, using your own measured results and a list of questions about logic and venue use, keeps the relationship based on evidence rather than marketing.

                ## Milestones
                1. Your own results for each broker algo prepared before the meeting.
                2. Questions sent ahead on version changes, venue use, and how the algo handles your settings.
                3. Answers and agreed actions recorded for each broker.
                4. Flow allocation changes decided and written down.

                ## Notes
                Start from the **Vendor** template, one record per broker.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each active broker has a quarterly review record with your measured results, their answers and any allocation change decided."
                cadence: cyclic
              tasks:
                - "Prepare measured results for each broker algo you use"
                - "Send the review questions to each broker ahead of the meeting @recurring(quarterly)"
                - "Record answers and agreed actions in the broker's record"
                - "Write down any change to flow allocation"
            - name: Execution incident log and post-mortem routine
              description: |-
                ## Purpose
                Stuck orders, duplicate child orders, a collar that fired wrongly: each is either a lesson or a repeat waiting to happen. A blameless log with a short post-mortem for anything that cost money or tripped a limit turns incidents into fixes and gives reviewers a record they can trust.

                ## Milestones
                1. An incident log with impact, timeline, cause and fix fields.
                2. A post-mortem written within a week for every incident above a set impact.
                3. Each fix tracked to done or explicitly accepted as a risk.
                4. A monthly look at open fixes and repeat causes.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every incident above the threshold has a post-mortem within a week, and open fixes are reviewed monthly with owners."
                cadence: rolling
              tasks:
                - "Create the incident log with impact, timeline, cause and fix fields"
                - "Set the impact threshold that requires a post-mortem"
                - "Review open incident fixes and repeat causes @recurring(monthly:8)"
                - "Close or accept each fix with a named owner"
            - name: TWAP mechanics and randomised slicing
              description: |-
                ## Purpose
                TWAP is the simplest schedule and still the right one for some orders, but a naive version that sends equal clips on the minute is easy for others to spot. Building one from scratch, with randomised timing and size, catch-up rules and a limit price, teaches the scheduling questions every other algo also has to answer.

                ## Milestones
                1. A TWAP schedule written with slice count, clip size and end time as inputs.
                2. Randomisation added to slice timing and size within stated bounds.
                3. Catch-up and slow-down rules written for when fills fall behind or run ahead.
                4. The version run in the simulator and compared with a naive equal-clip schedule.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A randomised TWAP with catch-up rules has been run in the simulator beside a naive version, with differences in slippage and detectability noted."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write a basic TWAP with slice count and end time as inputs"
                - "Add bounded randomisation to slice timing and size"
                - "Write catch-up rules for fills falling behind schedule"
                - "Compare it with an equal-clip TWAP in the simulator"
            - name: VWAP tracking and its failure modes
              description: |-
                ## Purpose
                VWAP algos look easy until the volume forecast is wrong, the order is a large share of the day or the price trends hard. Working through how a VWAP algo follows its curve, where tracking error comes from and why a good VWAP result can still be a costly trade gives you the judgement to choose it well.

                ## Milestones
                1. A VWAP schedule built from your volume curves and run in the simulator.
                2. Tracking error split into curve forecast error and execution error.
                3. Three failure cases written up: large participation, trending day and volume shock.
                4. A short note on when VWAP is the wrong choice for an order.

                ## Notes
                A large order largely sets the VWAP it is measured against, so close tracking can hide high cost against arrival.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note splits VWAP tracking error into its sources and describes three failure cases with simulator examples."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Build a VWAP schedule from your volume curves"
                - "Split simulated tracking error into forecast and execution parts"
                - "Write up the trending day, volume shock and large order cases"
                - "Note in a paragraph when VWAP is the wrong choice"
            - name: Implementation shortfall and the impact versus risk trade-off
              description: |-
                ## Purpose
                Trading fast costs impact and trading slowly costs exposure to price moves, and implementation shortfall algos choose a point between the two. Working through the classic optimal execution framework, deriving the trajectory for a few risk aversion values and seeing how it front-loads trading, makes urgency a number you can reason about.

                ## Milestones
                1. The mean and variance of cost written down for a simple linear impact model.
                2. Optimal trajectories computed for at least three risk aversion settings.
                3. The trajectories run in the simulator on the same orders and compared.
                4. A short note on how impact model error changes the answer.

                ## Notes
                The framework is only as good as its impact model. Treat the trajectory shape as the lesson, not the exact numbers.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Trajectories for three risk aversion values are derived, simulated on the same orders and compared in a written note."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Read a standard paper or chapter on optimal execution"
                - "Derive the trajectory for a linear impact model by hand"
                - "Code trajectories for three risk aversion settings"
                - "Simulate them on the same orders and write up the differences"
            - name: Percentage of volume algos and participation limits
              description: |-
                ## Purpose
                Participation algos trade a fixed share of what the market trades, which keeps impact predictable but makes completion time unknown. Learning how they measure volume, which prints they count, how they avoid chasing their own fills and how minimum and maximum rates behave prepares you to set them for real orders.

                ## Milestones
                1. A participation algo written that tracks a target share of market volume.
                2. Rules decided for which prints count, including auctions and off-book trades.
                3. A guard that stops the algo counting its own fills as market volume.
                4. Minimum and maximum participation bands tested on volatile simulator days.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A participation algo with stated volume counting rules and a self-fill guard has been tested across quiet and volatile simulator days."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write a participation algo with a target share of volume"
                - "Decide which prints count toward market volume"
                - "Add a guard so the algo ignores its own fills"
                - "Test minimum and maximum bands on volatile days"
            - name: Limit order placement and price improvement tactics
              description: |-
                ## Purpose
                The scheduler decides how much to trade and when, but placement decides where each child order sits: join the bid, step inside the spread, cross, or wait. Studying fill probability by queue position and spread width, and testing a few placement rules, is where much of an algo's cost is won or lost.

                ## Milestones
                1. Fill probability estimated by queue position, spread width and time resting.
                2. Three placement rules written, from always passive to spread-aware crossing.
                3. Each rule run in the simulator with fill rate, slippage and markouts reported.
                4. A preferred rule chosen per liquidity bucket with reasons.

                ## Notes
                Higher passive fill rates are not good news by themselves. Check markouts to see whether the fills came from being picked off.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three placement rules are compared in the simulator on fill rate, slippage and markouts, and a preferred rule per liquidity bucket is recorded."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Estimate fill probability by queue position from historical book data"
                - "Write three placement rules from passive to spread-aware"
                - "Compare the rules on fill rate, slippage and markouts"
                - "Record the preferred rule for each liquidity bucket"
            - name: Smart order routing and venue types
              description: |-
                ## Purpose
                Lit exchanges, dark pools, periodic auctions, single-dealer platforms and request-for-quote systems each fill differently and leak information differently. Mapping the venues in your markets, their order types and fees, and writing how a router should split and sequence orders among them, gives routing decisions a structure instead of habit.

                ## Milestones
                1. A venue map for each market with type, order types, fees and minimum sizes.
                2. A written sequence for a simple router, such as dark first then lit, with conditions.
                3. Spray versus sequential routing compared on a simulated example.
                4. Open questions for brokers or venues listed.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A venue map for each market and a written routing sequence with conditions exist, with one simulated comparison of routing styles."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Map the venues in one market with type, order types and fees"
                - "Write a simple routing sequence with the conditions for each step"
                - "Compare spray and sequential routing on one simulated order"
                - "List open questions to put to brokers or venues"
            - name: Opening and closing auction participation
              description: |-
                ## Purpose
                In many equity markets a large share of daily volume now trades in the closing auction, and close benchmarks drive index and fund flows. Learning how auction imbalance messages work, when orders can be entered or cancelled and how much of an auction one order can take safely makes close and open algos far less of a guess.

                ## Milestones
                1. Auction rules for each traded market summarised: entry cut-offs, cancel rules and imbalance messages.
                2. Historical auction volumes and price moves studied for your instruments.
                3. A cap on share of auction volume written per liquidity bucket.
                4. A close algo's split between continuous trading and the auction tested in the simulator.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Auction rules for every traded market are summarised, and a written cap on auction participation per liquidity bucket is in use."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Summarise auction cut-off and cancel rules for each market from exchange rulebooks"
                - "Study auction volume share and price moves for your instruments"
                - "Write a cap on share of auction volume per liquidity bucket"
                - "Test the continuous and auction split in the simulator"
            - name: Information leakage and anti-gaming checks
              description: |-
                ## Purpose
                Predictable child orders tell other participants that a large parent is working, and prices move away before the order finishes. Studying how leakage shows up in markouts and price drift, and how gaming strategies probe dark pools, gives you tests that reveal whether your own algos are easy to read.

                ## Milestones
                1. Price drift during and after parent orders measured against a control group of similar times.
                2. Patterns in your own child orders checked, such as fixed sizes, round times or repeated venues.
                3. Dark pool fills checked for signs of probing, such as small fills followed by adverse moves.
                4. A list of changes to reduce detectability passed to the change backlog.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written analysis measures price drift during parent orders against a control group and lists at least three detectability fixes."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Measure price drift during parent orders against matched control periods"
                - "Check child orders for fixed sizes, round times and repeated venues"
                - "Look for small dark fills followed by adverse moves"
                - "Add detectability fixes to the change backlog"
            - name: Urgency setting rule for portfolio managers' orders
              description: |-
                ## Purpose
                Traders and portfolio managers often choose urgency by feel, so the same signal gets traded aggressively one day and patiently the next. A simple written rule linking urgency to the signal's expected decay, order size and volatility makes the choice consistent and lets you check later whether it was right.

                ## Milestones
                1. Expected alpha decay estimated for each main signal type with the researcher who owns it.
                2. A rule mapping decay, size and volatility to low, medium or high urgency.
                3. The rule applied as a default, with overrides recorded and a reason required.
                4. A review date set to compare outcomes by urgency setting.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written urgency rule is the default for new orders, overrides carry a recorded reason, and a review date is set."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Estimate alpha decay for each signal type with its owner"
                - "Write the rule mapping decay, size and volatility to urgency"
                - "Make the rule the default and require a reason for overrides"
                - "Compare outcomes by urgency setting @recurring(quarterly)"
            - name: Build versus buy decision for execution algos
              description: |-
                ## Purpose
                Writing your own algos gives control and costs engineering time, data, testing and permanent ownership; broker algos are quick to use but harder to inspect. Scoring the two routes against your flow, your team and your control needs, with real costs on both sides, turns a recurring debate into a decision with a review date.

                ## Milestones
                1. Requirements written: markets, order types, volumes, control and audit needs.
                2. Build costs estimated, including data, simulator, testing, support and on-call.
                3. Broker and vendor options scored on the same criteria.
                4. A decision recorded with the conditions that would reopen it.

                ## Notes
                Start from the **Purchase decision** template. A hybrid, in-house scheduling with broker routing, is often the honest middle answer.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded build, buy or hybrid decision scores both routes on the same written criteria and names the conditions that would reopen it."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write requirements for markets, order types and audit needs"
                - "Estimate the full cost of building and running your own algos"
                - "Score broker and vendor options on the same criteria"
                - "Record the decision and what would reopen it"
            - name: Dark pool and conditional order policy
              description: |-
                ## Purpose
                Dark venues can cut impact for large orders and can also leak information or fill against better-informed flow. A written policy on which dark venues and conditional order types you use, with minimum fill sizes and conditions for opting out, makes routing to the dark a reasoned choice per order type.

                ## Milestones
                1. Each dark venue and conditional order type you can reach listed with its rules.
                2. Minimum fill sizes set by liquidity bucket.
                3. Opt-out conditions written, such as markouts beyond a threshold over a quarter.
                4. The policy reflected in the router configuration and the venue review.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dark venue policy with minimum fill sizes and opt-out conditions is written and matches the router configuration."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List reachable dark venues and conditional order types with their rules"
                - "Set minimum fill sizes by liquidity bucket"
                - "Write the opt-out conditions based on markouts"
                - "Check the router configuration matches the policy"
            - name: Adaptive schedule that reacts to price and volume
              description: |-
                ## Purpose
                Static schedules ignore what happens during the order: volume arriving early, spreads widening, the price moving towards or away from you. Adding bounded adaptation, trading faster when liquidity is good and slowing when spreads blow out, can lower cost, and can also add new ways to fail, so it is built in stages with tests at each one.

                ## Milestones
                1. The signals the schedule may react to chosen and written, such as spread, volume pace and price move.
                2. Bounds set so adaptation can never break participation or price limits.
                3. The adaptive version compared with the static one on the fixed simulator set.
                4. A small-flow live trial run under the change policy, with results recorded.

                ## Notes
                Reacting to price can turn into momentum or contrarian trading by accident. Check that the adaptation has no hidden directional bet.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An adaptive schedule with written bounds beats or matches the static version in simulation and in a recorded small-flow live trial."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Choose and write the signals the schedule may react to"
                - "Set bounds that keep adaptation inside all hard limits"
                - "Compare adaptive and static schedules on the simulator set"
                - "Run a small-flow trial under the change policy"
            - name: Short-term signal inside the order scheduler
              description: |-
                ## Purpose
                Some desks feed a short-horizon price forecast into the scheduler so it buys more when the price is expected to rise. Done carefully it lowers cost; done carelessly it becomes an unreviewed trading strategy hiding inside execution. Researching it with the same out-of-sample discipline as any alpha, and with a cap on how far it can bend the schedule, keeps the two separate.

                ## Milestones
                1. The forecast and its horizon defined, with out-of-sample tests recorded in the research log.
                2. A cap on how far the forecast may move the schedule from its baseline.
                3. Simulator results with and without the forecast on held-out days.
                4. A written decision to adopt, shelve or retire the idea.

                ## Notes
                Most short-term forecasts fail out of sample. Keep the cap tight until live results agree with the research.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded adopt, shelve or retire decision rests on held-out simulator results and a written cap on schedule deviation."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Define the forecast and its horizon in the research log"
                - "Test the forecast on held-out days only"
                - "Set a cap on how far it may bend the schedule"
                - "Record the adopt, shelve or retire decision"
            - name: Randomised live test design for algo changes
              description: |-
                ## Purpose
                Live comparisons are the final test of any change, but slippage is so noisy that a test on a few dozen orders proves nothing. Designing the randomisation, the sample size needed to see a realistic effect and the stopping rule before starting stops a lucky week from shipping a bad change.

                ## Milestones
                1. Orders assigned to control and treatment by a random rule, not by trader choice.
                2. The sample size needed for the expected effect calculated from historical slippage variance.
                3. A stopping rule written, including an early stop for harm.
                4. The analysis plan saved before the test starts.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A pre-registered test plan states the randomisation, the sample size from historical variance, the stopping rule and the analysis method."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the random rule for assigning orders to control and treatment"
                - "Calculate the sample size from historical slippage variance"
                - "Write the stopping rule, including an early stop for harm"
                - "Save the analysis plan before the test starts"
            - name: Retiring an unused algo variant
              description: |-
                ## Purpose
                Every variant left in production needs testing on each release, limits, monitoring and someone who still understands it. Choosing one variant the inventory flagged as unused, checking nothing depends on it and removing it cleanly is a small change that lowers risk on every later release.

                ## Milestones
                1. A variant chosen from the inventory with little or no recent use.
                2. Users, configuration and downstream reports that reference it found.
                3. Users moved to a supported variant and told the date.
                4. The variant removed from code and configuration and the inventory updated.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "One flagged variant is removed from code and configuration, its users have moved, and the inventory shows it as retired."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pick one flagged variant from the inventory"
                - "Find every configuration and report that references it"
                - "Move its users to a supported variant with a notice date"
                - "Remove the variant and update the inventory"
            - name: Index rebalance day execution plan
              description: |-
                ## Purpose
                Index rebalance days bring huge closing auction volume, crowded trades and imbalances that can move prices sharply in the last minutes. Planning the day in advance, with expected flows, auction caps, limit checks and who watches what, turns the busiest close of the quarter into a rehearsed routine.

                ## Milestones
                1. The rebalance date, affected instruments and expected index flows gathered.
                2. Orders affected by the event identified with a planned split between continuous trading and the close.
                3. Auction participation caps and limits checked for the day.
                4. A run sheet naming who watches which orders and when decisions are made.

                ## Notes
                Start from the **Operational checklist** template and reuse it for each rebalance.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A run sheet for the next rebalance day exists with affected orders, planned splits, checked caps and named watchers, and a short debrief follows the day."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Note the next rebalance date and the affected instruments"
                - "Plan the continuous and auction split for affected orders"
                - "Check auction caps and limits for the day"
                - "Write a run sheet naming who watches what"
                - "Write a short debrief the day after"
            - name: Go-live of a new algo version
              description: |-
                ## Purpose
                Releasing a new version to full flow is the moment simulator work meets real money, and it deserves a dated plan. Setting the release slot, the evidence pack, the small-flow stage, the rollback criteria and the people watching on the day makes the launch predictable and the rollback decision quick if it is needed.

                ## Milestones
                1. An evidence pack with simulator results, test outcomes and approvals.
                2. A release slot outside any freeze window booked.
                3. The small-flow stage completed with results against the rollback criteria.
                4. Full release done, or rollback done and recorded, with a short write-up.

                ## Notes
                Start from the **Operational checklist** template for the release day itself.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The new version is fully released or rolled back on recorded criteria, with an evidence pack and a short write-up filed."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Assemble the evidence pack of simulator results and approvals"
                - "Book a release slot outside the freeze windows"
                - "Run the small-flow stage and check it against rollback criteria"
                - "Write up the release or rollback in a page"
            - name: Annual algo self-assessment against regulatory rules
              description: |-
                ## Purpose
                Many regulators expect firms that trade algorithmically to review their algos, controls and testing at least once a year, with the EU's rules on algorithmic trading one well-known example. Running your own yearly self-assessment, mapping each requirement to evidence you already hold, makes the formal sign-off a check rather than a scramble.

                ## Milestones
                1. The rules that apply to you confirmed with your compliance function.
                2. Each requirement mapped to evidence: tests, limits, kill switch drills and change records.
                3. Gaps listed with owners and dates.
                4. The assessment signed by the people your rules name.

                ## Notes
                Start from the **Compliance control** template. The rules themselves are a question for compliance and legal advisers, not for this project.
              priority: high
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A signed yearly self-assessment maps every applicable requirement to held evidence and lists gaps with owners and dates."
                cadence: cyclic
              tasks:
                - "Ask compliance which algorithmic trading rules apply to you"
                - "Map each requirement to evidence you already hold"
                - "List gaps with owners and dates"
                - "Start the yearly self-assessment and book the sign-off @recurring(yearly)"
            - name: Quarter-end and expiry day playbook
              description: |-
                ## Purpose
                Quarter ends, futures and options expiries and month-end fund flows each shift volume patterns and liquidity in ways the normal curves do not capture. A short playbook per type of day, with what changes and which settings to adjust, means nobody has to rediscover it every three months.

                ## Milestones
                1. The special day types in your markets listed with their dates for the coming year.
                2. For each type, the usual changes in volume, spreads and auction size written from history.
                3. Recommended setting changes per type, approved under the change policy.
                4. A debrief note added after each such day.
              priority: medium
              frontmatter:
                mode: event
                output_kind: artifact
                success_criteria: "A playbook covers every special day type for the coming year with expected changes, approved settings and a debrief after each one."
                cadence: cyclic
              tasks:
                - "List quarter ends, expiries and month ends for the coming year"
                - "Write expected volume and spread changes for each day type"
                - "Get setting changes approved under the change policy"
                - "Add a debrief note after each special day @recurring(quarterly)"
            - name: Kill switch and runaway order drill
              description: |-
                ## Purpose
                A kill switch nobody has pressed in a year may not work, and people under pressure forget steps. Running a drill in the test environment, with a simulated runaway algo, a timed cancellation and a check that every venue confirms, proves the control works and that the people on shift know how to use it.

                ## Milestones
                1. A drill scenario written: a runaway child order loop in the test environment.
                2. The drill run with the people who would respond in production.
                3. Cancellation time and venue confirmations recorded.
                4. Weak points fixed and the next drill date set.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A drill record shows the kill switch cancelled every test order with venue confirmations within the target time, and fixes for any weak point are assigned."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write a runaway order scenario for the test environment"
                - "Run the drill with the people who would respond"
                - "Record cancellation time and venue confirmations"
                - "Assign fixes and set the next drill date"
            - name: Pilot of a new broker algo on limited flow
              description: |-
                ## Purpose
                Brokers pitch new algos with impressive charts built on their own client flow. Running a time-boxed pilot on a defined slice of your orders, with your benchmarks, a comparison group and a decision date, tells you whether it helps your orders in particular.

                ## Milestones
                1. The pilot scope written: order types, size limits and share of flow.
                2. A comparison group defined and orders assigned randomly where possible.
                3. Results measured on your own benchmarks at the end date.
                4. A keep, extend or drop decision recorded and shared with the broker.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A pilot with a written scope and comparison group ends on its date with a recorded keep, extend or drop decision based on your benchmarks."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write the pilot scope, size limits and share of flow"
                - "Define the comparison group and assignment rule"
                - "Measure results on your own benchmarks at the end date"
                - "Record the decision and send it to the broker"
            - name: First 90 days as an execution quant
              description: |-
                ## Purpose
                Joining an execution team means learning a code base, a set of benchmarks, the desk's habits and which numbers people trust, all while orders keep flowing. A 30, 60 and 90 day plan with one shipped improvement by the end gives a new researcher or engineer early credibility without rushing a risky change.

                ## Milestones
                1. By day 30: the inventory, limits, benchmarks and change policy read and questions answered.
                2. By day 60: one analysis delivered from the review routines, such as a venue or placement study.
                3. By day 90: one small change shipped through the staged rollout path.
                4. A review with your manager on what to own next.

                ## Notes
                Start from the **Onboarding 30/60/90** template.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: deliverable
                success_criteria: "One analysis delivered by day 60 and one change shipped through the rollout path by day 90, with a recorded manager review."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Read the algo inventory, limits and change policy in week one"
                - "List the questions to ask each algo owner"
                - "Pick one analysis to deliver by day 60"
                - "Agree a small change to ship by day 90 with your manager"
            - name: Execution setup for a small fund without a desk
              description: |-
                ## Purpose
                A small fund often has a researcher placing orders through one or two brokers' algos, with no trader and no in-house tooling. Choosing default algos and settings per order type, setting limits with the brokers, and keeping a light monthly results check gives most of the benefit of an execution desk at a fraction of the effort.

                ## Milestones
                1. Default broker algo and settings chosen for each order type.
                2. Limits agreed with each broker and confirmed in writing.
                3. A monthly results check using broker fill data against your chosen benchmarks.
                4. A note of when it would be worth hiring a trader or building tools.

                ## Notes
                Ask brokers for fill-level data from the start. Summary reports alone make later checks impossible.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Default algos and settings per order type are written, broker limits are confirmed in writing and a monthly results check has run twice."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Choose a default broker algo and settings per order type"
                - "Agree and confirm limits in writing with each broker"
                - "Request fill-level data from each broker"
                - "Run the results check on broker fill data @recurring(monthly:16)"
            - name: Order handling rules for a personal algo account
              description: |-
                ## Purpose
                Someone running a small personal algorithmic setup rarely needs a VWAP engine, but still loses money to market orders at the open, wide spreads in thin names and orders left working overnight. A short set of written order handling rules covering order type, timing, price limits and maximum order size fixes most of that with almost no code.

                ## Milestones
                1. Rules written for order type, such as marketable limit orders with a price cap instead of plain market orders.
                2. Times of day to avoid written down, such as the first and last minutes, unless the strategy needs them.
                3. A maximum order size as a share of typical volume and a price collar set in the code.
                4. A check that unfilled orders are cancelled at the end of each session.

                ## Notes
                Use only capital you can afford to lose, and keep the limits in code, not in your head. These are order handling rules, not trading advice.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Written order handling rules for type, timing, size and collars are enforced in the code and an end-of-session cancel check is in place."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Replace any plain market orders with capped limit orders"
                - "Write the times of day the strategy avoids"
                - "Set a maximum order size and price collar in the code"
                - "Review last month's fills against their limit prices @recurring(monthly:28)"
            - name: Handover pack for an execution algo you built
              description: |-
                ## Purpose
                Engineers move on, and an algo whose design lives in one head becomes the riskiest thing in production. A handover pack with the design, the limits, the test set, known weaknesses and a walkthrough recording lets the next owner change it safely, and lets you leave cleanly.

                ## Milestones
                1. A design note covering scheduling, placement, routing and the reasons behind each choice.
                2. Known weaknesses and open issues listed honestly.
                3. The simulator test set and how to run it documented.
                4. A walkthrough session held with the new owner and recorded.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The new owner has run the simulator test set unaided and confirmed the design note and weakness list answer their questions."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask the agent to draft a design note outline from the code structure"
                - "List known weaknesses and open issues honestly"
                - "Document how to run the simulator test set"
                - "Hold and record a walkthrough with the new owner"
            - name: Execution algorithm write-up for a portfolio
              description: |-
                ## Purpose
                Execution roles are hard to show from a CV, because the work is mostly internal. Writing up a self-built project, such as a simulator study comparing TWAP, VWAP and a shortfall schedule on public data, gives interviewers something concrete without touching any employer's confidential flow.

                ## Milestones
                1. A project chosen that uses only public or purchased data you are allowed to share.
                2. The method, results and limits written in a short report.
                3. Code tidied with a readme and a reproducible run.
                4. The write-up reviewed by someone in the field before you use it.

                ## Notes
                Start from the **Portfolio piece** template. Never use an employer's order data, even anonymised.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A shareable report and reproducible code built on public data are published or ready to send, with one outside review done."
                cadence: one-shot
                effort_hours_estimate: "25"
              tasks:
                - "Choose a project that uses only data you may share"
                - "Write the method, results and limits in a short report"
                - "Add a readme and a reproducible run to the code"
                - "Ask someone in the field to review the write-up"
            - name: Explaining algo choices to portfolio managers
              description: |-
                ## Purpose
                Portfolio managers who do not understand the algos override them, or blame them for slippage that came from their own urgency choices. A short briefing on what each algo does, what its benchmark means and how urgency trades cost against risk builds trust and cuts unhelpful overrides.

                ## Milestones
                1. A two-page guide to the algos, benchmarks and urgency settings in plain language.
                2. A briefing held with the portfolio managers, with their questions recorded.
                3. Common questions added to the guide.
                4. Override counts compared before and after the briefing.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A plain-language guide exists, a briefing has been held, and override counts before and after are recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write a two-page guide to the algos and urgency settings"
                - "Hold a briefing with the portfolio managers"
                - "Add their questions and your answers to the guide"
                - "Compare override counts before and after"
            - name: Calibrating a market impact model for scheduling
              description: |-
                ## Purpose
                Every shortfall schedule depends on an impact model, and one fitted to someone else's data or to too few orders produces confident nonsense. Fitting temporary and permanent impact to your own fills, with uncertainty bands and checks by liquidity bucket, gives the scheduler parameters you can defend.

                ## Milestones
                1. A clean sample of parent orders with arrival prices, sizes, durations and market conditions.
                2. Temporary and permanent impact parameters fitted with confidence intervals.
                3. Fit checked by liquidity bucket and on a held-out period.
                4. Parameters handed to the scheduler with a refit schedule and known limits.

                ## Notes
                Your own orders are a biased sample, because urgency was chosen with information. Note this limit rather than pretending it away.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Impact parameters with confidence intervals are fitted on your own orders, checked on a held-out period, and in use with a refit schedule."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Assemble a clean sample of parent orders and conditions"
                - "Fit temporary and permanent impact with confidence intervals"
                - "Check the fit by liquidity bucket on a held-out period"
                - "Refit the impact parameters on the latest orders @recurring(quarterly)"
            - name: Basket and portfolio execution with risk constraints
              description: |-
                ## Purpose
                Trading a basket one name at a time ignores that the buys and sells hedge each other while they are working. Scheduling the basket as a whole, keeping net exposure and sector risk within bounds while each name trades at its own pace, can cut risk without trading faster, but it needs a risk model and careful limits.

                ## Milestones
                1. Net exposure and factor risk limits written for a basket in flight.
                2. A basket scheduler that balances each name's cost against the basket's residual risk.
                3. The basket approach compared with independent schedules in the simulator.
                4. A rule for what happens when one leg cannot trade, such as a halted name.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A basket scheduler keeps simulated in-flight exposure within written limits and is compared with independent schedules on cost and risk."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Write in-flight net exposure and factor risk limits"
                - "Build a basket scheduler using the existing risk model"
                - "Compare it with independent schedules in the simulator"
                - "Write the rule for a leg that cannot trade"
            - name: Futures roll and calendar spread execution
              description: |-
                ## Purpose
                Systematic futures books roll thousands of contracts in the same few days as everyone else, and trading each leg separately pays the spread twice and carries leg risk. Studying the roll window, exchange calendar spread order books and implied matching lets you plan rolls that cost less and attract less attention.

                ## Milestones
                1. Roll windows and volume migration between contracts measured for your markets.
                2. Calendar spread order books and implied matching rules summarised per exchange.
                3. Spread trading compared with separate legs on cost and leg risk.
                4. A roll schedule written that avoids the most crowded days where possible.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written roll schedule rests on measured volume migration and a cost comparison of spread versus separate leg execution."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Measure volume migration across the roll window for each market"
                - "Summarise calendar spread and implied matching rules per exchange"
                - "Compare spread trading with separate legs on cost and leg risk"
                - "Write a roll schedule that avoids the most crowded days"
            - name: FX and digital asset execution across fragmented venues
              description: |-
                ## Purpose
                FX and digital assets trade across many venues with no single consolidated tape, last look in parts of FX, and very different fee and settlement rules. Mapping liquidity, rejection rates and fees by venue, and adapting your scheduling and routing to a market without a central close, carries execution skills into these markets without assuming equity rules apply.

                ## Milestones
                1. Venues mapped with liquidity, fees, settlement and counterparty considerations.
                2. Reject and last look behaviour measured where it applies.
                3. A benchmark chosen for a market without an official close, such as a published fixing or arrival price.
                4. Scheduling and routing changes for these markets written and tested in simulation.

                ## Notes
                Venue and counterparty risk matter more here than in exchange-traded equities. Agree venue choices with your risk function.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A venue map with fees, reject behaviour and counterparty notes exists, with a chosen benchmark and simulated routing changes recorded."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Map venues with liquidity, fees and settlement terms"
                - "Measure reject rates and last look behaviour where it applies"
                - "Choose a benchmark for a market with no official close"
                - "Test adapted scheduling and routing in the simulator"
---

# Execution Algorithms

Execution algorithms are the machinery between a decision to trade and the fills that come back: how a parent order is scheduled, sliced, priced and routed, and how you know whether a change made it better. This area is for researchers who design and evaluate that logic and engineers who build and run it, at a desk, a small fund or on a personal setup. It starts with foundations (objectives, benchmarks, an inventory of what is running, volume curves, hard limits, a replay simulator and a change policy), then the routines that keep it honest, the mechanics of TWAP, VWAP, shortfall, participation, placement and routing, decisions and improvements, dated events such as releases and rebalance days, setups for different situations, and a few specialist problems across asset classes.

The rhythms are a daily exceptions check, weekly benchmark and fill reviews, monthly refreshes of volume curves, limits and calendars, and quarterly venue and broker reviews, with a yearly self-assessment against your regulator's algorithmic trading rules. Every algo carries written limits on price, size and participation, a kill switch and a stop rule for rolling a change back, and most changes that look better in simulation do not survive real order flow, just as most strategies fail out of sample, so every change is staged and measured. Nothing here is trading or investment advice. The Purchase decision, Vendor, Operational checklist, Compliance control, Onboarding 30/60/90 and Portfolio piece templates pair with several projects. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
