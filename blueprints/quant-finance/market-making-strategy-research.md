---
id: quant-finance.market-making-strategy-research
name: Market Making Strategy Research
description: "A scoped research plan, fee and obligation tables, a P&L decomposition, queue-aware simulation and honest tests of inventory, quoting and adverse selection models, all under written risk limits."
category: business
version: 1.0.0
tags: [quant-finance, market-making-strategy-research, researcher, inventory-risk, adverse-selection, quoting-models, order-book-simulation, exchange-fees]
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
        - name: Market Making Strategy Research
          description: "Studying market making as research: inventory risk, quoting models, adverse selection, simulation with order book data and exchange fee structures."
          projects:
            - name: Market making research plan and scope
              description: |-
                ## Purpose
                Market making research sprawls quickly: one week it is quoting models, the next it is latency, fees or a new venue. A one-page scope naming the instrument class, the question you are answering, the data you can afford and the bar a result must clear keeps six months of work pointed at something you can finish and defend.

                ## Milestones
                1. A one-page scope stating the research question, instrument class and time horizon of quotes.
                2. The data budget and compute you actually have written down, with what is out of reach.
                3. A pass bar for results agreed in advance, including the minimum simulated fill count and the cost assumptions.
                4. Three questions explicitly parked as out of scope for now.

                ## Notes
                Keep the scope on one page. If the question needs a co-located feed you cannot buy, change the question rather than hoping the cheap data is close enough.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated one-page scope with a research question, data budget, pass bar and three parked questions exists in the research folder."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the research question you want answered in one sentence"
                - "List the data and compute you can genuinely access this year"
                - "Set the pass bar a quoting result must clear before you believe it"
                - "Name three tempting questions you are parking for later"
            - name: Choosing an instrument and venue to quote in research
              description: |-
                ## Purpose
                Quoting economics differ wildly between a large-tick equity future, a small-tick stock and a crypto perpetual: queue length, fee structure and toxicity all change. Choosing one instrument and one venue on purpose, with its tick size, typical spread and fee model recorded, gives every later experiment a fixed ground to stand on.

                ## Milestones
                1. A shortlist of three candidate instruments with tick size, typical spread in ticks and daily volume noted.
                2. Each candidate scored for data availability, fee transparency and whether the tick is binding.
                3. One instrument and one primary venue chosen, with the reason written in two sentences.
                4. A note of the second venue you would add later, if any.

                ## Notes
                Large-tick instruments, where the spread is usually one tick, make queue position the whole game. Small-tick instruments make spread setting matter more. Know which you picked.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One instrument and venue chosen from a scored shortlist of three, with tick regime and fee model recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Shortlist three instruments you could realistically get data for"
                - "Record tick size, median spread in ticks and daily volume for each"
                - "Score each on data access, fee clarity and tick regime"
                - "Write down the chosen instrument and venue with your reason"
            - name: Core market making reading list
              description: |-
                ## Purpose
                Five or six papers and books define the field: Ho and Stoll on dealer inventory, Avellaneda and Stoikov on optimal quoting, Gueant and coauthors on inventory bounds, and the Cartea, Jaimungal and Penalva textbook on algorithmic trading. Reading them in a sensible order, with a short note on each, saves months of rediscovering their results in your own simulator.

                ## Milestones
                1. A reading list of twelve to fifteen items, grouped into inventory, adverse selection, optimal control and empirical work.
                2. The order of reading set, classic dealer models first.
                3. A half-page note written for each item read, stating the model's assumptions.
                4. Two items flagged as the ones to reimplement.

                ## Notes
                Start from the **Reading queue** template. Write down each paper's assumptions about fill intensity and price dynamics: that is where most simulations quietly disagree with reality.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A grouped list of at least twelve market making papers and books exists, with notes on assumptions for every item read."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Collect twelve to fifteen market making papers and books into one list"
                - "Group the list into inventory, adverse selection, control and empirics"
                - "Order the reading so dealer inventory models come first"
                - "Pick two papers you will reimplement in code"
            - name: Exchange fee schedule and rebate tier model
              description: |-
                ## Purpose
                For a passive quoter, fees are often larger than the edge: a maker rebate or taker fee of a fraction of a tick can turn a strategy positive or negative on its own. Turning the venue's published fee schedule into a small table your simulator reads, including volume tiers and market maker discounts, stops you from testing with a fee you will never actually pay.

                ## Milestones
                1. The venue's current published fee schedule saved with its effective date.
                2. Maker, taker and any auction fees expressed per share or contract and in ticks.
                3. Volume tiers and the realistic tier for your research size identified.
                4. A fee table in a file the simulator reads, with the source date in its header.

                ## Notes
                Test at the tier you would really reach, not the best tier on the schedule. Researchers routinely assume the top rebate and build strategies that only exist there.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated fee table with maker, taker and tier rates in ticks is read by the simulator, and the assumed tier is justified in writing."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Download the venue's current fee schedule and note its date"
                - "Convert maker and taker fees into fractions of a tick"
                - "Identify which volume tier your research size would really reach"
                - "Save the fee table as a file the simulator loads"
            - name: Market maker programme obligations and incentives
              description: |-
                ## Purpose
                Many venues run designated or registered market maker programmes that trade lower fees for obligations: a maximum quoted spread, a minimum size and a share of the session spent quoting. Writing those terms down shows what a real liquidity provider must do in the hours a free-choice quoter would simply step away.

                ## Milestones
                1. The venue's market maker programme terms located and saved.
                2. Obligations listed: maximum spread, minimum size, presence percentage and stressed market exemptions.
                3. Incentives listed: fee discounts, rebates or revenue share.
                4. A note on how the obligations would change the simulated strategy.

                ## Notes
                Programme terms change and differ by product. Treat this as research context, and check current terms with the venue before relying on them.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written summary of the venue's market maker obligations and incentives exists, with the effect on the simulated strategy noted."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the venue's market maker programme document"
                - "List each quoting obligation with its exact threshold"
                - "List the fee incentives that come with the obligations"
                - "Write how presence rules would constrain your quoting model"
            - name: Order book and trade data sample for quoting research
              description: |-
                ## Purpose
                Quoting research needs more than trades and top of book: you need depth, order events or at least frequent snapshots, and trade aggressor side. A clean sample of twenty trading days, covering quiet and volatile sessions, is enough to start calibrating fill and markout models before you pay for a long history.

                ## Milestones
                1. Twenty trading days of order book data with trades loaded, including at least three high volatility days.
                2. Depth levels, timestamp resolution and aggressor flag documented.
                3. Gaps, crossed books and out-of-order events counted per day.
                4. A frozen, versioned copy of the sample stored for all experiments.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A versioned twenty-day order book and trade sample with a data quality report is stored and referenced by every experiment."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Pick twenty days that include quiet and volatile sessions"
                - "Load the days and document depth, timestamps and aggressor flags"
                - "Count gaps, crossed books and out-of-order events per day"
                - "Check the feed archive for new gaps @recurring(monthly:9)"
            - name: Market making P&L decomposition framework
              description: |-
                ## Purpose
                A quoter's total P&L hides four different stories: spread captured at fill, inventory marked to market afterwards, fees and rebates, and losses to informed flow. Splitting every simulated run into those components is the single habit that tells you whether a result comes from skill, from rebates or from a lucky trend in inventory.

                ## Milestones
                1. Written definitions of spread capture, inventory P&L, fees and adverse selection, with the mid or microprice used for marking.
                2. A function that splits any simulated run into the four components.
                3. The decomposition run on a naive benchmark and checked to sum to total P&L.
                4. A standard chart of the components included in every experiment write-up.

                ## Notes
                If most of the profit is rebates, the strategy is a fee bet. If most is inventory P&L, it is a directional bet in disguise.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every simulated run reports P&L split into spread capture, inventory, fees and adverse selection that reconciles to the total."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write a one-line definition of each of the four P&L components"
                - "Choose the reference price used to mark inventory and fills"
                - "Code a function that splits a run into the four components"
                - "Check the components sum to total P&L on a test run"
            - name: Written risk limits and stop rule for quoting research
              description: |-
                ## Purpose
                Market making looks safe until inventory runs one way during a fast move, so limits belong in the research before any result looks good. Writing maximum inventory, maximum loss per session, quote pull conditions and a stop rule now means a simulation must respect them and any later pilot inherits them unchanged.

                ## Milestones
                1. A maximum inventory limit in units and in risk terms written down.
                2. A daily loss limit and a rule for pulling all quotes when it is hit.
                3. Conditions for pausing quoting: stale data, wide markets, halts or a news flag.
                4. A stop rule stating when the research line is abandoned, agreed before results arrive.

                ## Notes
                Start from the **Risk register** template. These are your own research limits, not advice; anything that trades real money needs limits agreed with whoever carries the risk and the relevant compliance function.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated document holds inventory, loss and pause limits plus a stop rule, and the simulator enforces each limit."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a maximum inventory limit in units and in risk terms"
                - "Set a session loss limit that pulls every quote when hit"
                - "List the market conditions that pause quoting"
                - "Reread the limits and stop rule against recent results @recurring(quarterly)"
            - name: Naive symmetric quoting benchmark
              description: |-
                ## Purpose
                Without a dumb baseline, every clever model looks good. A fixed symmetric quote one tick either side of the mid, with a hard inventory cap, run through the same simulator, costs a day to build and becomes the bar every model must beat after fees and adverse selection.

                ## Milestones
                1. A benchmark quoter with fixed width, fixed size and a hard inventory cap implemented.
                2. The benchmark run on the full data sample with the P&L decomposition.
                3. Benchmark results stored as the reference row in the experiment register.
                4. A rule that no model is reported without its margin over the benchmark.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A naive benchmark's decomposed results are stored as the reference row, and every later model is reported against it."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Code a fixed symmetric quoter with a hard inventory cap"
                - "Run it over the full sample with the P&L decomposition"
                - "Store its results as the first row of the experiment register"
                - "Rerun the benchmark on the newest data @recurring(quarterly)"
            - name: Weekly market making paper slot
              description: |-
                ## Purpose
                New work arrives steadily: new results on queue-reactive models, learned quoting policies and fee experiments appear every term. Two protected hours each week for one paper, with a short note filed, keeps the reading list alive without letting it take over the research days.

                ## Milestones
                1. A fixed two-hour weekly slot in the calendar.
                2. A note for each paper read: question, model, data and what you would test.
                3. Ten papers read and noted within the first quarter.
                4. Ideas from papers moved into the experiment register only when testable.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "At least ten market making papers are read and noted per quarter, each with a testable idea or a reason it is not testable."
                cadence: rolling
              tasks:
                - "Block a two-hour weekly slot for market making papers"
                - "Read one paper and file a note on its model and data @recurring(weekly)"
                - "Move any testable idea into the experiment register"
                - "Search new working papers on quoting and inventory each month"
            - name: Quarterly fee schedule and obligation terms refresh
              description: |-
                ## Purpose
                Venues change fee tiers, rebates and market maker terms several times a year, often with a short notice period. A quarterly check against the saved tables catches the change before a quarter of experiments has been run on a fee that no longer exists.

                ## Milestones
                1. The venue's fee notices page and market maker terms checked each quarter.
                2. Any change applied to the fee table with a new version and date.
                3. Recent experiments rerun when a change moves breakeven by more than a tenth of a tick.
                4. A short changelog of fee versions kept beside the table.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The fee table carries a quarterly check date, and every fee change is versioned with affected experiments rerun."
                cadence: cyclic
              tasks:
                - "Bookmark the venue's fee notices and market maker terms pages"
                - "Compare published fees with your saved table @recurring(quarterly)"
                - "Version the fee table and log any change"
                - "Rerun experiments whose breakeven moves materially"
            - name: Monthly fill model calibration review
              description: |-
                ## Purpose
                Simulated fills drive every quoting result, and a fill model calibrated once drifts as volatility, participants and queue lengths change. A monthly comparison of predicted fill rates by distance from the mid against what the data shows keeps the simulator honest about how often passive quotes really trade.

                ## Milestones
                1. Fill rate by quote distance and queue position measured from the latest month of data.
                2. Predicted and observed fill rates plotted together.
                3. The fill model recalibrated when the gap exceeds a threshold set in advance.
                4. Calibration parameters logged with dates.

                ## Notes
                Start from the **Metrics log** template. A fill model that ignores queue position will overstate fills at the touch on large-tick instruments.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly log shows predicted versus observed fill rates, with recalibrations dated whenever the agreed threshold is breached."
                cadence: rolling
              tasks:
                - "Set the gap between predicted and observed fills that triggers recalibration"
                - "Compare predicted and observed fill rates by distance @recurring(monthly:17)"
                - "Recalibrate the fill model when the gap is breached"
                - "Log the calibration parameters with the date"
            - name: Markout dashboard for adverse selection
              description: |-
                ## Purpose
                Markouts, the move in the reference price at fixed horizons after each simulated or observed fill, are the clearest measure of how toxic the flow you trade against is. A small dashboard of markouts at one, ten and sixty seconds, split by side and time of day, makes adverse selection visible every week rather than buried in total P&L.

                ## Milestones
                1. Markout horizons chosen and justified for the instrument.
                2. Markouts computed by side, quote distance and time of day.
                3. A weekly chart refreshed from the latest runs.
                4. Periods with sharply negative markouts tagged with what happened.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly markout chart at three horizons, split by side and time of day, is refreshed and dated for at least twelve weeks."
                cadence: rolling
              tasks:
                - "Choose three markout horizons that suit the instrument"
                - "Refresh markouts by side and time of day @recurring(weekly:tue)"
                - "Tag the worst markout periods with the market event behind them"
                - "Compare markouts across instruments or venues @recurring(monthly:14)"
            - name: Monthly P&L attribution review of simulated runs
              description: |-
                ## Purpose
                Looking at one month's simulated runs through the P&L decomposition shows drift that single experiments hide: rebates carrying more of the result, inventory P&L growing, or spread capture shrinking as volatility falls. A monthly hour reviewing the components keeps you from celebrating a strategy that has quietly become a fee or trend bet.

                ## Milestones
                1. A monthly summary of the four P&L components across all runs.
                2. Changes from the previous month explained in a sentence each.
                3. Any run where rebates exceed half of total P&L flagged.
                4. Findings written into the research log.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly attribution summary with explanations and flags is filed in the research log for at least six months running."
                cadence: rolling
              tasks:
                - "Summarise the four P&L components across the month's runs @recurring(monthly:23)"
                - "Explain each change from last month in one sentence"
                - "Flag runs where rebates make up most of the profit"
                - "File the summary in the research log"
            - name: Experiment register for quoting variants
              description: |-
                ## Purpose
                Every quoting model has many dials: width, skew, size, risk aversion, pull rules. Trying fifty settings and reporting the best is the fastest route to a result that fails live. A register recording every variant tried, its parameters and outcome, makes the true number of trials visible and lets you deflate the best result honestly.

                ## Milestones
                1. A register with one row per variant: parameters, data version, P&L components and markouts.
                2. Every run since the benchmark entered, including failures.
                3. A trial count reported beside any headline result.
                4. Weekly entries kept current for at least three months.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every quoting variant run is in the register, and any reported result states the number of variants tried to reach it."
                cadence: rolling
              tasks:
                - "Create the register with parameter, data version and outcome columns"
                - "Enter every variant run this week, failures included @recurring(weekly:fri)"
                - "Report the trial count beside any best result you share"
                - "Archive variants you will never revisit with a reason"
            - name: Quarterly simulator assumptions audit
              description: |-
                ## Purpose
                Every market making simulator embeds dozens of assumptions about latency, queue position, partial fills, cancellations and the reaction of other participants. Auditing the list each quarter, and testing the one that matters most, stops early shortcuts from hardening into beliefs that every result silently depends on.

                ## Milestones
                1. A written list of every simulator assumption with its source.
                2. Each assumption rated by how much results depend on it.
                3. The highest-impact assumption stress tested each quarter.
                4. The audit outcome and any changes recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A quarterly audit record lists simulator assumptions with impact ratings and documents a stress test of the top assumption."
                cadence: cyclic
              tasks:
                - "List every assumption your simulator makes about fills and latency"
                - "Rate each assumption by how much results depend on it"
                - "Stress test the highest-impact assumption @recurring(quarterly)"
                - "Record what changed after the audit"
            - name: Monthly market making research review with a peer
              description: |-
                ## Purpose
                Market making results are easy to fool yourself with, and a second researcher who knows the area will spot an optimistic fill model or a missing fee in minutes. A monthly hour presenting the latest experiment, its decomposition and its trial count, to a peer or small group, is cheap review that catches errors early.

                ## Milestones
                1. One or two peers agreed for a monthly review.
                2. A standard format: question, setup, decomposition, markouts, trial count.
                3. Notes and challenges recorded after each review.
                4. Every challenge either answered or added to the experiment register.

                ## Notes
                Start from the **Meeting notes** template. Share method and results, never an employer's confidential data or code.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly reviews are held with notes recorded, and every challenge raised is answered or logged within a month."
                cadence: rolling
              tasks:
                - "Ask one or two peers to join a monthly research review"
                - "Present the latest experiment in the standard format @recurring(monthly:6)"
                - "Record each challenge raised in the meeting notes"
                - "Answer or log every challenge before the next review"
            - name: Yearly review of the market making research programme
              description: |-
                ## Purpose
                Once a year the whole programme deserves a hard look: which questions were answered, which models beat the benchmark after honest trial counts, and which lines should stop. Writing the review against the original scope and stop rule makes the next year's plan a decision rather than momentum.

                ## Milestones
                1. The year's results summarised against the scope and pass bar.
                2. Each research line marked continue, change or stop under the stop rule.
                3. Data, compute and reading needs for next year listed.
                4. A revised one-page scope dated for the new year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A dated yearly review marks every research line continue, change or stop and produces a revised one-page scope."
                cadence: cyclic
              tasks:
                - "Summarise the year's results against the original pass bar @recurring(yearly)"
                - "Mark each research line continue, change or stop"
                - "List data and compute needs for the year ahead"
                - "Rewrite the one-page scope for the new year"
            - name: Avellaneda-Stoikov model worked through and coded
              description: |-
                ## Purpose
                Avellaneda and Stoikov gave quoting research its common language: a reservation price shifted by inventory and risk aversion, and an optimal spread driven by volatility and fill intensity. Deriving it by hand, coding it, and watching how quotes skew as inventory builds gives intuition every later model is measured against.

                ## Milestones
                1. The reservation price and optimal spread derived on paper with each assumption stated.
                2. The model coded and run on simulated Brownian prices with exponential fill intensity.
                3. Plots of quotes and inventory under three risk aversion settings.
                4. A note on which assumptions fail on your real instrument.

                ## Notes
                The finite horizon and constant volatility assumptions are the first to break on real data. Note how quotes behave near the horizon end.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written derivation, working code and plots under three risk aversion settings exist, with real-data limitations noted."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Derive the reservation price and optimal spread on paper"
                - "Code the model on simulated prices with exponential fill intensity"
                - "Plot quotes and inventory for three risk aversion values"
                - "Write which assumptions fail on your instrument"
            - name: Inventory-bounded quoting model of Gueant and coauthors
              description: |-
                ## Purpose
                Real quoters stop quoting one side at an inventory limit, and the Gueant, Lehalle and Fernandez-Tapia model builds that bound into the solution, giving closed-form approximations for long horizons. Working through it shows how hard limits change optimal skew and why the simple model overreacts near the bound.

                ## Milestones
                1. The bounded-inventory problem and its approximation written up in your own notation.
                2. The approximate quotes coded and compared with the unbounded model.
                3. Quote behaviour at and near the inventory limit plotted.
                4. A short note on parameter estimation from your data.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Coded bounded-inventory quotes are compared with the unbounded model in plots, with an estimation note for your data."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Write the bounded-inventory problem in your own notation"
                - "Code the long-horizon approximate quotes"
                - "Plot quotes as inventory approaches the bound"
                - "Compare bounded and unbounded quotes on the same price path"
            - name: Stochastic control for quoting problems
              description: |-
                ## Purpose
                Most optimal quoting results come from writing a Hamilton-Jacobi-Bellman equation and solving it, often numerically. Learning to set up the value function, the controls and the boundary conditions, then solve a small case on a grid, lets you read new papers critically and adapt models to your own fee and inventory constraints.

                ## Milestones
                1. The HJB equation for a basic quoting problem set up with state, controls and terminal condition.
                2. A finite difference or dynamic programming solution coded for a small grid.
                3. The numerical solution checked against a known closed form.
                4. One extension added, such as a per-fill fee or an inventory penalty.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A numerical HJB solver for a quoting problem matches a closed-form case and supports at least one extension."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Write the state, controls and terminal condition for a quoting problem"
                - "Code a grid solver for the value function"
                - "Check the solver against a closed-form result"
                - "Add a per-fill fee to the problem and compare quotes"
            - name: Adverse selection measurement from fills
              description: |-
                ## Purpose
                Quoters lose to traders who know something, and the loss shows up as fills followed by the price moving against you. Measuring adverse selection by trade size, time of day and order book state from historical data tells you which flow to quote wide against and where the spread genuinely pays.

                ## Milestones
                1. Adverse selection defined as a markout at a chosen horizon, net of the half spread.
                2. Adverse selection measured by trade size bucket, time of day and book imbalance.
                3. Conditions where markouts exceed the half spread identified.
                4. A short written finding with the sample and caveats.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written finding shows adverse selection by size, time and imbalance, identifying where markouts exceed the half spread."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Define adverse selection as a net markout at one horizon"
                - "Bucket historical fills by size, time of day and imbalance"
                - "Find buckets where markouts exceed the half spread"
                - "Write the finding with its sample and caveats"
            - name: Queue position value for passive quotes
              description: |-
                ## Purpose
                On large-tick instruments a quote at the front of the queue fills before informed flow sweeps the level, while one at the back fills mainly when the price is about to move through it. Estimating the value of queue position shows why joining late can lose money at the same price and when it pays to keep a resting order rather than requote.

                ## Milestones
                1. Queue position at fill estimated from order events or depth changes.
                2. Markouts compared for fills near the front and back of the queue.
                3. The value of a queue position expressed in ticks.
                4. A rule of thumb written for when a requote gives away too much queue.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Markouts by queue position are measured and the value of front-of-queue placement is expressed in ticks with a written rule."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Estimate queue position at fill from order events"
                - "Compare markouts for front and back of queue fills"
                - "Express the value of queue position in ticks"
                - "Write a rule for when requoting costs too much queue"
            - name: Fill intensity estimation by quote distance
              description: |-
                ## Purpose
                Most quoting models assume fill intensity decays exponentially with distance from the mid, and the two parameters of that curve drive the optimal spread. Estimating them from your data, by time of day and volatility regime, shows how far the textbook shape holds and feeds better numbers into every model.

                ## Milestones
                1. Fill rates measured at each distance from the mid over the sample.
                2. Exponential and one alternative curve fitted with confidence intervals.
                3. Parameters compared across time of day and volatility regimes.
                4. Chosen parameters stored with the data version used.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Fitted fill intensity curves with confidence intervals by regime are stored with their data version and used by the simulator."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Measure fill rates at each tick distance from the mid"
                - "Fit an exponential curve and one alternative shape"
                - "Compare fitted parameters across regimes and times of day"
                - "Store the chosen parameters with the data version"
            - name: Order flow toxicity measures and their limits
              description: |-
                ## Purpose
                Toxicity measures such as volume-synchronised probability of informed trading, order flow imbalance and trade clustering promise early warning of informed flow, and they have been heavily debated. Testing two of them on your sample, against later markouts, tells you whether any deserves a place in a quote widening rule.

                ## Milestones
                1. Two toxicity measures implemented with definitions written out.
                2. Each measure tested for its ability to predict later markouts.
                3. Results compared with a simple volatility baseline.
                4. A decision recorded on whether either measure enters the quoting model.

                ## Notes
                Several published toxicity measures lose most of their predictive power once you control for volatility and volume. Always include that baseline.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two toxicity measures are tested against markouts and a volatility baseline, with a recorded decision on use."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Implement two toxicity measures from their papers"
                - "Test each against later markouts on your sample"
                - "Compare both with a volatility baseline"
                - "Record whether either belongs in the quoting model"
            - name: Microprice and short-horizon fair value estimate
              description: |-
                ## Purpose
                Quoting around the plain mid ignores what the book is saying: a level with ten times the size on the bid usually means the next move is up. Building a microprice or imbalance-adjusted fair value, and testing it as the centre of quotes, is one of the cheapest improvements a quoting model can get.

                ## Milestones
                1. Mid, weighted mid and a microprice estimator implemented.
                2. Each tested for predicting the next mid change over short horizons.
                3. The best estimator used as the quote centre in a simulation run.
                4. Improvement over the plain mid measured in decomposed P&L.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A fair value estimator is shown to predict short-horizon mid changes better than the mid and its effect on P&L is measured."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Implement mid, weighted mid and microprice estimators"
                - "Test each for predicting the next mid change"
                - "Run the simulator centred on the best estimator"
                - "Measure the P&L gain against quoting around the mid"
            - name: Choosing replay or agent-based simulation
              description: |-
                ## Purpose
                Historical replay keeps real order flow but cannot show how others react to your quotes; agent-based simulation models reactions but rests on invented behaviour. Deciding which to build first, for your question and data, shapes months of engineering and what conclusions you are allowed to draw.

                ## Milestones
                1. The research question restated with what the simulator must answer.
                2. Replay, agent-based and hybrid options compared on realism, cost and validation.
                3. One approach chosen with its known blind spots written down.
                4. A validation plan agreed for the chosen approach.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision names the simulation approach, its blind spots and a validation plan, made against the research question."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Restate what the simulator must answer for your question"
                - "Compare replay, agent-based and hybrid approaches"
                - "Choose one and list the blind spots it leaves"
                - "Write the validation plan for the chosen approach"
            - name: Queue-aware order book replay simulator
              description: |-
                ## Purpose
                By far the most common error in market making research is assuming your quote fills whenever a trade prints at its price. A replay simulator that places your orders in the queue, advances them only as volume ahead trades or cancels, and applies latency, turns optimistic backtests into estimates you can begin to trust.

                ## Milestones
                1. Simulated orders placed at the back of the queue on submission.
                2. Queue advance modelled from trades and a stated cancellation assumption.
                3. Latency applied to submissions, cancels and market data.
                4. Results checked against the naive fill rule to show the size of the difference.
                5. Tests on hand-built order books passing.

                ## Notes
                Cancellations ahead of you are not observed in most data, so state your assumption, such as proportional cancellation, and test the alternatives.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A tested replay simulator with queue position and latency is in use, and its gap from naive fills is documented."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Write test cases on small hand-built order books"
                - "Implement queue placement and advance from trades"
                - "Add latency to submissions, cancels and data"
                - "Compare results against the naive fill rule"
            - name: Latency assumptions and their effect on quoting results
              description: |-
                ## Purpose
                Speed changes everything: a quoting strategy profitable at ten microseconds may be a loss at ten milliseconds because stale quotes get picked off when the price jumps. Running the same model across a range of latencies shows how much speed the result needs and whether the research is realistic for the setup you could ever have.

                ## Milestones
                1. A latency range chosen from realistic retail, cloud and co-located setups.
                2. The same model run at each latency level.
                3. P&L and picked-off fills plotted against latency.
                4. The latency at which the model stops beating the benchmark recorded.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A chart shows decomposed P&L and picked-off fills across at least four latency levels, with the breakeven latency stated."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pick four latency levels from realistic setups"
                - "Run the same quoting model at each level"
                - "Plot P&L and picked-off fills against latency"
                - "Record the latency at which the edge disappears"
            - name: Quote skewing versus hedging inventory
              description: |-
                ## Purpose
                Long inventory leaves a quoter two choices: it can skew quotes to attract sellers and wait, or cross the spread to hedge immediately at a cost. Comparing the two, and blends of them, on the same data shows the real cost of inventory and when patience is cheaper than paying the spread.

                ## Milestones
                1. Skew-only, hedge-at-threshold and blended inventory policies defined.
                2. Each policy run on the same data with identical limits.
                3. Inventory paths, P&L components and worst drawdowns compared.
                4. A preferred policy and the conditions where it changes written down.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three inventory policies are compared on identical data and limits, with a written preference and its conditions."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Define skew-only, hedge-at-threshold and blended policies"
                - "Run each policy on the same data and limits"
                - "Compare inventory paths, P&L components and drawdowns"
                - "Write which policy you prefer and when that changes"
            - name: Breakeven spread under each fee tier
              description: |-
                ## Purpose
                Fees set a floor under any quoting strategy: the spread captured must beat adverse selection plus fees at the tier you really reach. Working out breakeven at each tier, and how much volume it takes to move up, shows whether a strategy is viable or only works for firms already at the top of the schedule.

                ## Milestones
                1. Breakeven spread computed at each fee tier using measured adverse selection.
                2. The volume needed to reach each tier estimated.
                3. Strategies in the register marked by the lowest tier at which they break even.
                4. A plain statement of which tier your research assumes and why.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A table shows breakeven spread and required volume at each fee tier, and every registered strategy is tagged with its breakeven tier."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Compute breakeven spread at each fee tier"
                - "Estimate the monthly volume needed for each tier"
                - "Tag registered strategies with their breakeven tier"
                - "State the tier your research assumes in the scope"
            - name: Single venue versus multi-venue quoting study
              description: |-
                ## Purpose
                Where an instrument trades on several venues, quoting on all of them adds fills but also adds the risk of being filled everywhere at once when the price moves. Studying fill correlation across venues, and the effect of cross-venue inventory, shows whether multi-venue quoting adds edge or just risk.

                ## Milestones
                1. Data for the same instrument on two venues aligned on one clock.
                2. Fill correlation across venues measured during fast moves.
                3. Single and multi-venue simulated quoting compared under the same inventory limit.
                4. A written view on whether the extra venue is worth the complexity.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Single and multi-venue quoting are compared under one inventory limit, with cross-venue fill correlation measured and a written view."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Align two venues' data for the same instrument on one clock"
                - "Measure how often both venues fill in the same fast move"
                - "Simulate single and multi-venue quoting under one limit"
                - "Write whether the second venue is worth adding"
            - name: Hedging inventory with a correlated instrument
              description: |-
                ## Purpose
                Quoters in single stocks, options or small futures often hedge inventory in a more liquid related instrument: an index future, an ETF or the front-month contract. Measuring the hedge ratio, its stability and the residual risk shows whether hedging lets you quote tighter or only swaps one risk for another.

                ## Milestones
                1. A hedge instrument chosen and the hedge ratio estimated over rolling windows.
                2. Residual risk after hedging measured.
                3. Simulated quoting with and without the hedge compared.
                4. Hedge costs included in the P&L decomposition.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Quoting with and without a correlated hedge is compared with hedge costs included and rolling hedge ratio stability shown."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Pick a liquid instrument correlated with your quoted one"
                - "Estimate the hedge ratio over rolling windows"
                - "Measure residual risk after the hedge"
                - "Compare simulated quoting with and without hedging"
            - name: Requoting a model before a tick size change
              description: |-
                ## Purpose
                When a venue or regulator changes the tick size for an instrument, queue lengths, spreads and the value of queue position all shift overnight. Preparing simulations before the change, then comparing them with what happened afterwards, is a rare natural test of whether your model understands quoting economics.

                ## Milestones
                1. An announced or historical tick size change identified for your instrument class.
                2. Predictions written for spread, depth and fill rates after the change.
                3. The quoting model rerun with the new tick in simulation.
                4. Predictions compared with post-change data and the gaps explained.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Written predictions for a tick size change are compared with post-change data, with each gap explained in the research log."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Find an announced or historical tick size change to study"
                - "Write predictions for spread, depth and fills afterwards"
                - "Rerun the quoting model with the new tick size"
                - "Compare predictions with the post-change data"
            - name: Index rebalance day quoting study
              description: |-
                ## Purpose
                Rebalance days bring huge, predictable closing auction volume and unusual flow through the afternoon, which is exactly when quoting models built on normal days misbehave. Studying one rebalance in detail, in simulation, shows how inventory, markouts and auction imbalance interact on the busiest days of the year.

                ## Milestones
                1. A recent rebalance date chosen and data for the day and two normal days loaded.
                2. Simulated quoting run across all three days with the same settings.
                3. Inventory and markouts compared hour by hour.
                4. Changes to pull rules or limits for such days written down.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A rebalance day and two normal days are simulated with identical settings, and rule changes for such days are recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pick a recent index rebalance date and two normal days"
                - "Run the same quoting settings across all three days"
                - "Compare inventory and markouts hour by hour"
                - "Write any rule changes needed for rebalance days"
            - name: Expiry day quoting study for futures and options
              description: |-
                ## Purpose
                Expiry days concentrate rolling, pinning and settlement flow, and liquidity moves between contracts within hours. A simulated quoting run through a recent expiry, compared with a normal week, shows whether your inventory limits and quote pull rules survive the most crowded sessions.

                ## Milestones
                1. A recent expiry day and a normal comparison day selected.
                2. Volume migration between contracts measured through the day.
                3. Simulated quoting run on both days with the same limits.
                4. Expiry-specific rules recorded, such as when to stop quoting the expiring contract.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An expiry day and a normal day are simulated under the same limits, with expiry-specific quoting rules written down."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Choose a recent expiry day and a normal comparison day"
                - "Measure volume moving between contracts during expiry"
                - "Simulate quoting on both days with the same limits"
                - "Write when to stop quoting the expiring contract"
            - name: Halt, outage and fast market replay
              description: |-
                ## Purpose
                Days when data stops, the venue halts or the price gaps through every quote are the ones that end market makers. Replaying one such episode through your simulator, with your pause rules active, shows whether the risk limits actually fire and how much inventory you would hold when they do.

                ## Milestones
                1. One historical halt, outage or flash move identified with data available.
                2. The episode replayed with risk limits and pause rules switched on.
                3. Time to pull quotes, peak inventory and worst loss recorded.
                4. Any limit that failed to fire fixed and retested.

                ## Notes
                This is a replay of your own rules, not a full stress testing programme. Keep the wider crisis scenarios for a dedicated stress test.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A historical halt or fast market is replayed with limits on, and peak inventory, worst loss and time to pull quotes are recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Find one historical halt or flash move with usable data"
                - "Replay it with risk limits and pause rules enabled"
                - "Record peak inventory, worst loss and time to pull quotes"
                - "Fix and retest any limit that failed to fire"
            - name: Research findings presentation to a review panel
              description: |-
                ## Purpose
                A market making result has to survive questions about fills, fees, latency and trial counts before anyone should rely on it. Preparing a dated presentation to a review panel, whether colleagues, a supervisor or a reading group, forces the full write-up and the honest caveats into one place.

                ## Milestones
                1. A date fixed with at least three reviewers.
                2. A twenty-minute deck covering question, data, simulator, decomposition and trial count.
                3. A caveats slide listing the assumptions most likely to be wrong.
                4. Questions and actions recorded after the session.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A presentation is delivered to at least three reviewers on a fixed date, with questions and actions recorded afterwards."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Book a date with at least three reviewers"
                - "Ask the agent to draft a deck outline from your write-up"
                - "Write a caveats slide on the weakest assumptions"
                - "Record questions and actions after the session"
            - name: Go or no-go gate before any live quoting pilot
              description: |-
                ## Purpose
                Moving from simulation to real quotes is where research turns into risk, and most simulated quoting edges vanish against live queues and informed flow. A written gate, with criteria agreed before the decision, makes the call deliberate: limits in place, kill switch tested, sign-off from whoever carries the risk, or a clear no.

                ## Milestones
                1. Go criteria written: margin over benchmark after fees, trial-adjusted result, stable markouts.
                2. Risk limits, kill switch and pause rules shown working in a test environment.
                3. Sign-off obtained from the risk owner and compliance where applicable.
                4. A dated go or no-go decision recorded with reasons.

                ## Notes
                A no-go is a good outcome when the evidence is thin. Never trade real money on a quoting model without limits approved by whoever carries the loss.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A dated go or no-go decision exists, recorded against criteria written in advance, with limits tested and sign-off noted."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write the go criteria before reviewing the latest results"
                - "Test the kill switch and pause rules in a sandbox"
                - "Obtain sign-off from the risk owner and compliance"
                - "Record the go or no-go decision with reasons"
            - name: Market making thesis chapter for a PhD
              description: |-
                ## Purpose
                Doctoral students studying optimal quoting or liquidity provision need a chapter that is both novel and reproducible, usually with academic data and no exchange connection. Planning the chapter around one clear contribution, a public or licensed data set and a replication of a known model first keeps it defensible at the viva.

                ## Milestones
                1. One contribution stated in a sentence and agreed with the supervisor.
                2. A known model replicated on the chapter's data as a baseline.
                3. The new result produced with code and data versions frozen.
                4. A full draft submitted to the supervisor.
              priority: high
              deadlineOffsetDays: 365
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A full thesis chapter draft with a replicated baseline and a frozen code and data version is with the supervisor by the deadline."
                cadence: phased
                effort_hours_estimate: "300"
              tasks:
                - "Write the chapter's contribution in one sentence"
                - "Agree the contribution and data set with your supervisor"
                - "Replicate a known quoting model as the baseline"
                - "Send your supervisor a progress note on the chapter @recurring(weekly:mon)"
            - name: First 90 days as a researcher at a market maker
              description: |-
                ## Purpose
                Joining a market making firm as a researcher means learning its simulator, its risk language and its products before anyone expects new alpha. A 30, 60 and 90 day plan for learning the stack, shadowing traders and delivering one small validated improvement gets you trusted faster than a grand first project.

                ## Milestones
                1. By day 30, the internal simulator, data and risk limits understood and written up for yourself.
                2. By day 60, one trading desk shadowed and its main quoting dials explained back to the lead.
                3. By day 90, one small improvement validated and reviewed.
                4. A list of questions you could not answer, taken to your manager.

                ## Notes
                Start from the **Onboarding 30/60/90** template. Keep personal notes free of the firm's code, parameters and data so nothing confidential leaves with you.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A 30, 60 and 90 day plan is completed with one small reviewed improvement delivered by day 90."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Write your 30, 60 and 90 day goals with your manager"
                - "Learn the internal simulator and write a one-page summary"
                - "Hold a check-in with your mentor or lead @recurring(weekly:wed)"
                - "Pick one small improvement to validate by day 90"
            - name: Moving from low-frequency research into market making
              description: |-
                ## Purpose
                Researchers from factor or daily-horizon work bring good statistics but often miss what dominates market making: queue position, fees in fractions of a tick, latency and inventory over seconds. A focused six-week plan bridging that gap avoids importing daily-bar habits into a world where they quietly mislead.

                ## Milestones
                1. A list of habits from low-frequency research that do not transfer, such as close-to-close marking.
                2. Six weeks of reading and exercises on queues, fees, latency and inventory completed.
                3. One known market making result reproduced on tick data.
                4. A note on which of your existing skills transfer directly.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A six-week bridging plan is completed with one market making result reproduced on tick data and transfer notes written."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "List your low-frequency habits that may mislead at tick level"
                - "Plan six weeks of reading on queues, fees and latency"
                - "Reproduce one known market making result on tick data"
                - "Write which of your skills transfer directly"
            - name: Crypto market making research on a small budget
              description: |-
                ## Purpose
                Independent researchers often study market making on crypto venues because order book data is cheap or free and APIs are open. The same venues have unusual fee tiers, frequent outages and thin regulation, so a small-budget plan with free data, simulation only and explicit venue risk notes keeps the study useful and contained.

                ## Milestones
                1. A free or low-cost order book data source chosen and its gaps noted.
                2. Venue fee tiers, outage history and custody risks written down.
                3. One quoting model simulated on a month of data with the standard decomposition.
                4. A statement that the work stays in simulation unless the go or no-go gate is passed.

                ## Notes
                Venue and custody risk are real on crypto exchanges. This is research, not a recommendation to deposit funds anywhere.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A month of crypto order book data is simulated with the standard decomposition, and venue risks are documented in writing."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Choose a free or low-cost crypto order book data source"
                - "Write down the venue's fee tiers and outage history"
                - "Simulate one quoting model on a month of data"
                - "Check the venue's fee and API change notices @recurring(monthly:28)"
            - name: Dealer quoting research for request-for-quote markets
              description: |-
                ## Purpose
                Researchers on bank or dealer desks in bonds, rates or foreign exchange price requests for quote rather than resting orders, and win rates, client tiering and skew to inventory drive the economics. Studying RFQ pricing as its own problem, with simulated requests rather than client data, adapts market making models to how these markets really trade.

                ## Milestones
                1. The RFQ pricing problem written down: win probability, inventory, client toxicity.
                2. A win probability curve modelled against quoted distance from a reference price.
                3. A simulated RFQ stream used to test inventory-aware pricing.
                4. Differences from order book market making noted for the desk.

                ## Notes
                Use simulated or public data. Client flow and win records are confidential to the firm and stay inside its systems.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An inventory-aware RFQ pricing model is tested on a simulated request stream, with differences from order book quoting written up."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Write the RFQ pricing problem with its main variables"
                - "Model win probability against quoted distance"
                - "Build a simulated stream of requests to test pricing"
                - "Review simulated win rates and inventory paths @recurring(monthly:20)"
            - name: Market making research with top-of-book data only
              description: |-
                ## Purpose
                Full depth and order event data are expensive, and many researchers start with best bid, best offer and trades. Knowing which questions top of book can answer, such as spread dynamics and markouts, and which it cannot, such as queue position, keeps conclusions honest and tells you when depth data is worth buying.

                ## Milestones
                1. A list of questions answerable with top of book and those that need depth.
                2. Markouts and spread dynamics measured on top-of-book data.
                3. A conservative fill rule chosen that does not assume queue priority.
                4. A written case for or against buying depth data.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on buying depth data exists, backed by top-of-book results and a list of questions each data level can answer."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List questions top of book can and cannot answer"
                - "Measure markouts and spread dynamics on top-of-book data"
                - "Choose a conservative fill rule with no queue priority"
                - "Write the case for or against buying depth data"
            - name: Options market making and volatility surface quoting
              description: |-
                ## Purpose
                Options market makers quote hundreds of strikes off one volatility surface and manage risk in Greeks rather than units, hedging delta in the underlying and carrying vega and gamma. Studying how surface fitting, quote width per strike and Greek limits interact shows why options quoting is a different research problem from single-instrument market making.

                ## Milestones
                1. A volatility surface fitted to one expiry with a standard parameterisation.
                2. Quote widths per strike linked to vega and liquidity.
                3. Delta hedging and Greek limits simulated over a month of data.
                4. P&L split into spread, delta, vega and gamma components.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A simulated month of options quoting with Greek limits reports P&L split into spread, delta, vega and gamma components."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Fit a volatility surface to one expiry"
                - "Set quote widths per strike from vega and liquidity"
                - "Simulate delta hedging under Greek limits"
                - "Split P&L into spread and Greek components"
            - name: ETF liquidity provision and creation-redemption study
              description: |-
                ## Purpose
                ETF market makers quote against a fair value built from the underlying basket and can create or redeem units to clear inventory, which changes how much risk they carry. Studying the fair value build, the gap between quoted and basket prices and the cost of creation or redemption explains why ETF spreads behave as they do.

                ## Milestones
                1. A basket fair value built for one ETF from constituent prices.
                2. Quoted ETF prices compared with fair value through the day.
                3. Creation and redemption costs written down from published documents.
                4. Simulated quoting with an inventory release through creation or redemption.

                ## Notes
                Creation and redemption are available only to authorised participants; treat this as research into how the mechanism shapes quotes.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An ETF fair value model is compared with quoted prices, and simulated quoting includes inventory release via creation or redemption."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Build a basket fair value for one ETF"
                - "Compare quoted ETF prices with fair value intraday"
                - "Note creation and redemption costs from the prospectus"
                - "Simulate quoting with inventory released through creation"
            - name: Multi-asset inventory with factor hedges
              description: |-
                ## Purpose
                Desks quoting many related instruments carry a portfolio of inventory, and the risk that matters is the net factor exposure, not each position. Researching quoting across a basket with a shared risk model, where skew depends on portfolio risk rather than single inventory, is how experienced quoters scale without scaling risk.

                ## Milestones
                1. A small universe of related instruments and a simple factor risk model chosen.
                2. Quote skew driven by marginal portfolio risk implemented.
                3. Portfolio and single-instrument skew compared on the same data.
                4. Residual risk and hedge costs reported in the decomposition.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Portfolio-risk-driven skew is compared with single-instrument skew on the same data, with residual risk and hedge costs reported."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Choose five to ten related instruments to quote together"
                - "Build a simple factor risk model for the universe"
                - "Drive quote skew from marginal portfolio risk"
                - "Compare portfolio and single-instrument skew results"
            - name: Reinforcement learning quoting agent with honest evaluation
              description: |-
                ## Purpose
                Learned quoting policies are popular in recent papers, and almost all are trained and tested in simulators that cannot react to them. Training a small agent, then evaluating it against the analytical model and the benchmark on held-out days with queue-aware fills, shows whether learning adds anything beyond a well-tuned formula.

                ## Milestones
                1. State, actions, reward and inventory penalty defined in writing.
                2. An agent trained on a fixed training period only.
                3. Held-out evaluation against Avellaneda-Stoikov and the naive benchmark.
                4. Every training run counted in the experiment register.

                ## Notes
                Reward design dominates results. If the reward ignores inventory risk the agent will learn a directional bet.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A learned quoting policy is evaluated on held-out days against an analytical model and the benchmark, with all training runs registered."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Define state, actions, reward and inventory penalty"
                - "Train the agent on the training period only"
                - "Evaluate on held-out days against two baselines"
                - "Register every training run with its settings"
            - name: Self-exciting order flow in quoting simulation
              description: |-
                ## Purpose
                Order arrivals cluster: one aggressive trade raises the chance of another, and replay simulation cannot generate new paths with that property. Fitting a Hawkes process to order flow and using it to simulate thousands of synthetic days lets you test quoting rules on clustering and bursts your historical sample never showed.

                ## Milestones
                1. A Hawkes model fitted to buy and sell market order arrivals.
                2. Fitted clustering compared with the data on goodness-of-fit tests.
                3. Synthetic days generated and the quoting model run across them.
                4. Results on synthetic days compared with historical replay.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A fitted Hawkes order flow model generates synthetic days on which the quoting model is tested and compared with replay."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Fit a Hawkes model to buy and sell order arrivals"
                - "Check fitted clustering with goodness-of-fit tests"
                - "Generate synthetic days from the fitted model"
                - "Compare quoting results on synthetic and replayed days"
---

# Market Making Strategy Research

Market making strategy research is for researchers who want to study liquidity provision properly: how a quoter earns the spread, loses it to informed flow, carries inventory it did not choose and pays or collects exchange fees on every fill. The list starts with foundations (a scope, an instrument and venue, a reading list, fee and obligation tables, a data sample, a P&L decomposition, written risk limits and a naive benchmark), then the routines that keep the research honest, the core quoting and inventory models, the simulator and design decisions, dated events such as rebalances and expiries, setups for researchers in different situations, and specialist work on options, ETFs, multi-asset inventory and learned quoting policies at the end.

What repeats is a weekly paper slot, weekly markout and experiment register updates, monthly fill model calibration, P&L attribution and a reading group, quarterly fee, simulator and benchmark checks, and a yearly review of the whole programme. The Reading queue, Risk register, Metrics log, Meeting notes and Onboarding 30/60/90 templates pair with it. This is research method only, never trading advice: any quoting idea goes through written position limits, loss limits and a stop rule before it touches money, because most market making strategies that look profitable in simulation fail once real queues, latency and informed flow are against them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
