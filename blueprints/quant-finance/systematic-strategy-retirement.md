---
id: quant-finance.systematic-strategy-retirement
name: Systematic Strategy Retirement
description: "Retirement criteria written before launch, monthly decay reviews, a probation watch list, staged wind-downs, honest post-mortems and a register of retired strategies, so research time moves to better ideas."
category: business
version: 1.0.0
tags: [quant-finance, systematic-strategy-retirement, researcher, alpha-decay, strategy-lifecycle, post-mortem, decommissioning, research-allocation]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - meeting-notes
    - operational-checklist
    - reading-queue
    - risk-register
  pillars:
    - name: Quantitative Finance & Trading
      emoji: "🧮"
      description: "Systematic research and trading run like engineering: alpha research and honest backtests, factor and risk models, execution and microstructure, statistics and machine learning, quant development and market data, prop-firm evaluations and personal algorithmic trading under strict risk rules, and quant careers. Organisation and method only, never trading advice."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Systematic Strategy Retirement
          description: "Deciding when to retire a strategy: decay monitoring, criteria agreed in advance, post-mortems and moving research time to better ideas."
          projects:
            - name: Inventory of live strategies and their original thesis
              description: |-
                ## Purpose
                Retirement arguments go in circles when nobody can say what a strategy was supposed to capture in the first place. Listing every live and paper strategy with its one-paragraph economic thesis, launch date, capital, owner and the research document behind it gives each later decay review something fixed to test against.

                ## Milestones
                1. Every live and paper strategy listed with launch date, capital, instruments and owner.
                2. A one-paragraph thesis written for each, stating the behaviour or premium it was built to capture.
                3. The original research note or backtest report linked for each strategy, or marked as missing.
                4. Strategies with no recoverable thesis flagged for early review.

                ## Notes
                Write the thesis as it was believed at launch, not as you would describe it today. Rewriting history to fit recent results is the first step towards keeping a dead strategy alive.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A single inventory covers every live and paper strategy, each with a launch thesis, a linked research record and a named owner."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every live and paper strategy in one table with owner and capital"
                - "Write the launch thesis for each strategy in one paragraph"
                - "Link the original research note or backtest report to each row"
                - "Flag strategies whose thesis cannot be recovered from the record"
            - name: Written retirement criteria agreed before launch
              description: |-
                ## Purpose
                Criteria chosen after a drawdown always end up loose enough to keep going. Writing, for each strategy, the specific conditions that trigger reduction, probation and retirement, and getting the risk owner to agree them while results are still neutral, turns a painful judgement into a check against a document.

                ## Milestones
                1. A reduction trigger, a probation trigger and a retirement trigger written for every live strategy.
                2. Each trigger stated as a measurable condition with a window, such as a drawdown depth or a rolling performance threshold over a set number of months.
                3. A written stop rule saying exactly what happens on each trigger: cut size, freeze or wind down.
                4. The criteria signed off by whoever carries the risk and saved with the strategy file.
                5. A rule that new strategies cannot launch without criteria in place.

                ## Notes
                Keep criteria mechanical. A trigger that needs a meeting before anyone acts will be argued over while the losses grow.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every live strategy has signed reduction, probation and retirement triggers with a mechanical stop rule, dated before the next decay review."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Draft reduction, probation and retirement triggers for your largest strategy"
                - "Write the action each trigger sets off in one sentence"
                - "Send the criteria to the risk owner for written sign-off"
                - "Reread every strategy's criteria against its current capital @recurring(quarterly)"
            - name: Expected performance envelope from the research record
              description: |-
                ## Purpose
                Live returns can only be called disappointing against a range you expected in advance, and a single backtest Sharpe ratio is not a range. Building, for each strategy, the distribution of returns, drawdowns and hit rates implied by the research, haircut for the number of variants tried, gives a band that live results can fall inside or outside.

                ## Milestones
                1. For each strategy, expected annual return, volatility, worst drawdown and hit rate taken from the research record.
                2. A haircut applied to backtest figures, with the reason and the size recorded.
                3. A simulated band of plausible 12-month and 24-month live outcomes produced from the haircut figures.
                4. The envelope saved beside the retirement criteria so both are read together.

                ## Notes
                If the research record cannot say how many variants were tested, assume many and haircut harder. Backtested figures are an upper bound on what live trading delivers, not a forecast.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Each live strategy has a saved expected envelope with haircut figures and a simulated 12-month and 24-month outcome band."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pull backtest return, volatility and drawdown figures for each strategy"
                - "Record how many variants were tried before each strategy was chosen"
                - "Apply and justify a haircut to each strategy's backtest figures"
                - "Simulate a band of plausible 12-month live outcomes from the haircut figures"
            - name: Decay metrics defined for each strategy
              description: |-
                ## Purpose
                Return alone is a slow, noisy measure of whether an edge is fading. Choosing a small set of earlier signals per strategy, such as rolling information coefficient, hit rate, average profit per trade after costs, holding-period return profile and turnover, means decay shows up months before the drawdown makes it obvious.

                ## Milestones
                1. Three to five decay metrics chosen per strategy, each with a precise formula and data source.
                2. A research-period baseline value recorded for every metric.
                3. A rolling window length chosen for each metric and justified in a sentence.
                4. All metrics computed for the last 12 months of live trading as a first reading.

                ## Notes
                Start from the **Metrics log** template. Pick metrics tied to the thesis: a carry strategy should be watched on carry captured, not just on profit and loss.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every live strategy has three to five documented decay metrics with baselines and a first 12-month live reading recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose three decay metrics tied to the thesis of your main strategy"
                - "Write the exact formula and data source for each metric"
                - "Record the research-period baseline value of every metric"
                - "Compute the first 12-month live reading for each metric"
            - name: Retirement decision rights and sign-off chain
              description: |-
                ## Purpose
                Strategies survive past their usefulness when the researcher who built them is also the only person allowed to stop them. Writing who can put a strategy on probation, who can cut its size, who signs a retirement and who must be told turns an awkward conversation into a known procedure.

                ## Milestones
                1. The person who can trigger probation, reduction and retirement named for each strategy.
                2. A second signer named for retirement, independent of the strategy's builder where possible.
                3. The list of people who must be told on retirement, such as risk, operations and any allocator.
                4. The chain written on one page and agreed by everyone on it.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page sign-off chain names who can trigger probation, reduction and retirement for each strategy, with every named person's agreement recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Name who can place each strategy on probation"
                - "Name an independent second signer for any retirement"
                - "List everyone who must be told when a strategy retires"
                - "Circulate the one-page chain and record each person's agreement"
            - name: Strategy lifecycle stages from probation to retired
              description: |-
                ## Purpose
                Without named stages, a strategy is either fully live or switched off, and the jump between them feels too large to make. Defining stages such as full size, reduced, probation, wind-down, retired and archived, each with entry conditions and what changes operationally, gives a gradual path and makes every status visible at a glance.

                ## Milestones
                1. Five or six lifecycle stages defined with plain entry and exit conditions.
                2. The operational change at each stage written down: capital, monitoring frequency, who is told.
                3. Every current strategy assigned to a stage.
                4. The stage shown in the strategy inventory and updated whenever it changes.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written lifecycle with entry and exit conditions for each stage, and every current strategy assigned a stage in the inventory."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write entry and exit conditions for each lifecycle stage"
                - "Note the capital and monitoring change attached to each stage"
                - "Assign every current strategy to its stage"
                - "Confirm every strategy's lifecycle stage is current @recurring(monthly:12)"
            - name: Minimum live record before judging decay
              description: |-
                ## Purpose
                A strategy with a modest expected Sharpe ratio can need years of live data before underperformance is statistically distinguishable from noise. Working out, for each strategy, how many months or trades you need before a decay verdict means anything stops both premature kills and endless excuses.

                ## Milestones
                1. For each strategy, the number of months or trades needed to detect a halving of its expected edge at a stated confidence.
                2. The calculation method and assumptions written down so others can check it.
                3. Strategies where the required record is longer than you are willing to wait marked for criteria that rely on early metrics rather than returns.
                4. The minimum record added to each strategy's retirement criteria.

                ## Notes
                This calculation usually shocks people. If the answer is six years, that is a reason to lean on the decay metrics and the thesis check, not a reason to ignore the arithmetic.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each live strategy has a documented minimum live record needed to detect decay, added to its retirement criteria."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Calculate the months of data needed to detect a halved edge for one strategy"
                - "Write the assumptions behind the calculation in plain terms"
                - "Repeat the calculation for every live strategy"
                - "Add each minimum record to the matching retirement criteria"
            - name: Retirement file format and archive location
              description: |-
                ## Purpose
                With no record, a retired strategy is one someone will rebuild in three years and lose money on again. Settling now what a retirement file contains, from the thesis and live record to the reason for retirement and where the code is frozen, means every retirement leaves the same reviewable trail.

                ## Milestones
                1. A standard retirement file outline with sections for thesis, live record, decay evidence, decision, wind-down and lessons.
                2. A single archive location chosen with access rights set.
                3. A rule for freezing the code at a tagged version alongside the file.
                4. The outline tested by filling it in for one strategy retired in the past.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A retirement file outline and archive location are in place, tested on one past retirement with code frozen at a tagged version."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft the section list for a standard retirement file"
                - "Choose the archive location and set who can read and edit it"
                - "Agree how code is tagged and frozen at retirement"
                - "Fill in the outline for one strategy retired in the past"
            - name: Full running cost of each live strategy
              description: |-
                ## Purpose
                Breaking even is rarely free for a strategy, since it still uses data licences, compute, broker minimums, monitoring attention and a slice of the risk budget. Adding up the real annual cost of keeping each strategy alive shows which ones would be worth retiring even if their returns were only flat.

                ## Milestones
                1. Data, compute, connectivity and software costs allocated to each strategy for the last year.
                2. Hours of monitoring and maintenance per month estimated per strategy.
                3. Risk budget and capital each strategy occupies recorded.
                4. A cost per strategy set against its live net return in one table.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A table shows each live strategy's annual running cost, monthly maintenance hours and capital used beside its live net return."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List data and software subscriptions used by each strategy"
                - "Estimate monthly maintenance hours for each strategy"
                - "Record the capital and risk budget each strategy occupies"
                - "Set each strategy's annual cost beside its live net return"
            - name: Monthly decay review for every live strategy
              description: |-
                ## Purpose
                Decay is gradual, so it is missed by anyone who looks only when a drawdown forces them to. A fixed monthly session that reads each strategy's decay metrics, live returns against its expected envelope and its distance from every retirement trigger catches the slide while there is still time for an orderly response.

                ## Milestones
                1. A one-page monthly review sheet with decay metrics, envelope position and trigger distances for each strategy.
                2. Every live strategy reviewed in the same session each month.
                3. Any strategy breaching a trigger moved to its next lifecycle stage within the week.
                4. Review notes saved with the date so trends can be read later.

                ## Notes
                Start from the **Metrics log** template. Keep the session short and the sheet identical each month; a review that changes shape every time cannot show a trend.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated monthly decay review exists for every month, covering every live strategy against its metrics, envelope and triggers."
                cadence: rolling
              tasks:
                - "Build the one-page monthly review sheet"
                - "Run the monthly decay review for every live strategy @recurring(monthly:9)"
                - "Move any strategy that breached a trigger to its next stage"
                - "Log the month's decay metric readings before the review @recurring(monthly:5)"
            - name: Weekly signal health check against research values
              description: |-
                ## Purpose
                Signal quality can fade while profit and loss still looks acceptable, because a favourable market is carrying the book. A short weekly look at each signal's rolling predictive power, breadth and turnover compared with its research values shows whether the edge itself is thinning, separate from whatever the market did that week.

                ## Milestones
                1. A weekly report showing rolling information coefficient, breadth and turnover per signal against research values.
                2. A simple flag for any signal more than a set distance below its research value for three weeks running.
                3. Flags carried into the monthly decay review rather than acted on in isolation.

                ## Notes
                This check is about the signal's predictive power, not system health or fills. Leave alerts on outages and position errors to your live monitoring.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly signal health report is saved every week and every three-week flag appears in the following monthly decay review."
                cadence: rolling
              tasks:
                - "Set up the weekly report of rolling predictive power per signal"
                - "Define the distance below research value that raises a flag"
                - "Check signal health against research values @recurring(weekly:tue)"
                - "Carry open flags into the next monthly decay review"
            - name: Quarterly keep, reduce or retire meeting
              description: |-
                ## Purpose
                Monthly reviews spot problems, but decisions about the whole book need a slower, more deliberate setting with the people who sign. A quarterly meeting that takes each strategy in turn and records keep, reduce, probation or retire, with the evidence and the dissent, makes the shape of the book a choice rather than an accident.

                ## Milestones
                1. A fixed agenda covering every strategy with its decay summary and running cost.
                2. A recorded decision for each strategy: keep, reduce, probation or retire.
                3. Any dissent recorded by name with the reason given.
                4. Actions from the meeting assigned with owners and checked at the next one.

                ## Notes
                Start from the **Meeting notes** template. Ask the strategy's builder to speak last, so the evidence is heard before the attachment.
              priority: high
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Each quarter produces dated minutes with a recorded keep, reduce, probation or retire decision for every live strategy."
                cadence: cyclic
              tasks:
                - "Draft the fixed quarterly agenda with one slot per strategy"
                - "Hold the keep, reduce or retire meeting @recurring(quarterly)"
                - "Record each strategy's decision and any dissent in the minutes"
                - "Assign owners to every action from the meeting"
                - "Send each owner their decay summary before the meeting @recurring(quarterly)"
            - name: Probation watch list with exit dates
              description: |-
                ## Purpose
                Probation without an end date becomes a permanent holding pen for strategies nobody wants to retire. Keeping a short watch list where each entry has the trigger that put it there, reduced capital, the evidence that would clear it and a fixed date for a final decision forces probation to end one way or the other.

                ## Milestones
                1. A watch list with entry date, trigger, reduced capital and clearing condition for each strategy on probation.
                2. A final decision date on every entry, no more than two quarters out.
                3. Every entry that passes its date without clearing moved to wind-down.
                4. A count of how many probation strategies cleared versus retired, kept over time.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every strategy on probation has a written clearing condition and decision date, and none stays past its date without a recorded decision."
                cadence: rolling
              tasks:
                - "Create the watch list with clearing condition and decision date columns"
                - "Check every probation entry against its clearing condition @recurring(monthly:16)"
                - "Move any entry past its decision date to wind-down or clear it in writing"
                - "Keep a running count of cleared versus retired probation cases"
                - "Send the probation list to the risk owner @recurring(monthly:2)"
            - name: Crowding and competition drift tracker
              description: |-
                ## Purpose
                Many edges decay because other people find them, and the signs often appear before returns fall: rising correlation with published factors or peer returns, faster signal half-life and thinner profit per trade. Tracking these crowding signs monthly gives a reason for decay you can test, rather than a vague sense that the market has changed.

                ## Milestones
                1. Rolling correlation of each strategy with relevant public factor returns charted.
                2. Signal half-life measured each month against its research value.
                3. Profit per trade after costs tracked over a rolling window.
                4. A short monthly note stating whether crowding signs are rising, flat or falling for each strategy.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly crowding note exists for each live strategy, with factor correlation, half-life and profit per trade charted over time."
                cadence: rolling
              tasks:
                - "Choose the public factor returns each strategy should be compared with"
                - "Measure signal half-life against its research value"
                - "Update crowding charts and write the monthly note @recurring(monthly:23)"
                - "Forward rising crowding signs to the monthly decay review"
            - name: Annual retirement criteria refresh
              description: |-
                ## Purpose
                Criteria written for a strategy at one capital level and one market structure can quietly stop fitting as both change. Once a year, rechecking every trigger against current capital, cost, market structure and the record of what the criteria actually caught keeps the rules honest without changing them in the heat of a drawdown.

                ## Milestones
                1. Every strategy's triggers rechecked against current capital and costs.
                2. A list of past triggers that fired and whether the outcome justified them.
                3. Changes proposed only for reasons other than recent performance, each with a written justification.
                4. Revised criteria signed off and dated.

                ## Notes
                Never loosen a trigger for a strategy currently near it. Changes take effect for strategies outside probation only.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A dated annual refresh records every trigger checked, the reason for any change and the risk owner's sign-off."
                cadence: cyclic
              tasks:
                - "Run the annual retirement criteria refresh @recurring(yearly)"
                - "List every trigger that fired in the year and its outcome"
                - "Write a justification for each proposed criteria change"
                - "Get revised criteria signed and dated by the risk owner"
            - name: Retired strategy register upkeep
              description: |-
                ## Purpose
                A register of every retired strategy, its dates, its reason for retirement and the location of its file is what stops a new hire from proposing last year's failure as a fresh idea. Keeping it current each quarter, and searchable by market, signal family and reason, turns past retirements into a research asset.

                ## Milestones
                1. A register with name, signal family, markets, live dates, peak capital and reason for retirement for every retired strategy.
                2. A link from each row to its retirement file and frozen code.
                3. Tags for the reason for retirement, such as crowding, cost, regime, capacity or broken thesis.
                4. The register shown to every new researcher in their first month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "The register lists every retired strategy with dates, reason tags and a working link to its retirement file, checked quarterly."
                cadence: rolling
              tasks:
                - "Create the register with reason-for-retirement tags"
                - "Add every strategy retired in the last three years"
                - "Check every register link and add new retirements @recurring(quarterly)"
                - "Add the register to the reading list for new researchers"
            - name: Monthly review of where research hours go
              description: |-
                ## Purpose
                Retirement only pays off if the time freed actually moves to better ideas instead of drifting back into maintaining the old ones. Logging research hours by strategy and by new idea each month shows whether you are still nursing decaying strategies and makes reallocation a measurable habit.

                ## Milestones
                1. A simple log of research hours split into maintenance, live strategy fixes and new research.
                2. A target share of hours for new research agreed with your manager or set for yourself.
                3. Each month's actual split compared with the target.
                4. Hours spent on strategies in probation or wind-down called out separately.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve months of logged research hours show the split between maintenance and new research against an agreed target."
                cadence: rolling
              tasks:
                - "Set up an hours log with maintenance, fixes and new research categories"
                - "Agree a target share of hours for new research"
                - "Compare the month's hours split with the target @recurring(monthly:27)"
                - "Note hours spent on probation and wind-down strategies separately"
                - "Walk through the hours split with your manager @recurring(quarterly)"
            - name: Revival rules for retired strategies
              description: |-
                ## Purpose
                Some retired strategies deserve a second look when a market structure change reverses, and many are revived simply because someone misses them. Writing the conditions under which a retired strategy may be re-researched, and requiring a fresh out-of-sample test rather than a restart, keeps revivals rare and evidence-led.

                ## Milestones
                1. Written conditions that justify re-researching a retired strategy, such as a documented structural change.
                2. A rule that any revival goes through the full research process with new out-of-sample data.
                3. A periodic check of the register against the revival conditions.
                4. Every revival request recorded with its outcome.

                ## Notes
                A revival that skips research is a new strategy with an old backtest and no honest test. Treat it that way.
              priority: low
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Revival conditions are written and every revival request in the register shows whether it met them and what the fresh test found."
                cadence: rolling
              tasks:
                - "Write the conditions that allow a retired strategy to be re-researched"
                - "Require a fresh out-of-sample test for any revival"
                - "Check the retired register against revival conditions @recurring(quarterly)"
                - "Record every revival request and its outcome"
            - name: Telling decay from bad luck statistically
              description: |-
                ## Purpose
                Every live strategy has losing stretches that look like decay, and the drawdowns a strategy with a true Sharpe ratio of one can produce over a few years surprise most people. Working through how to compare a live record with its expected distribution, including drawdown probabilities and confidence bands, is the core skill behind every retirement call.

                ## Milestones
                1. Simulated drawdown distributions produced for a strategy at three different true Sharpe ratios.
                2. A live record placed on those distributions with its percentile noted.
                3. A short written explanation of why a single bad year rarely proves decay.
                4. A worked example added to the monthly review sheet.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A worked example places one live strategy's record on simulated distributions, with its percentile and a written interpretation saved."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Simulate drawdown distributions for a strategy at three true Sharpe ratios"
                - "Place one live record on the simulated distributions"
                - "Write half a page on why one bad year rarely proves decay"
                - "Add the worked example to the monthly review sheet"
            - name: Change point detection on strategy returns
              description: |-
                ## Purpose
                Decay often arrives as a break rather than a slow fade, for example after a rule change at an exchange or a large competitor's arrival. Learning change point methods on your own return and signal series lets you date a break, test whether it is real and link it to a candidate cause.

                ## Milestones
                1. Two change point methods applied to a synthetic series with a known break.
                2. The same methods run on one live strategy's returns and signal series.
                3. Any detected break dated and compared with a list of market events.
                4. A note on false alarm rates for the chosen method and window.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two change point methods are tested on synthetic and live series, with detected breaks dated and false alarm rates noted."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Generate a synthetic return series with a known break"
                - "Apply two change point methods to the synthetic series"
                - "Run the better method on one live strategy's signal series"
                - "Compare any detected break dates with a list of market events"
            - name: Sequential monitoring with CUSUM-style tests
              description: |-
                ## Purpose
                Checking a strategy against a threshold every month inflates false alarms, because each look is another chance to cross it by luck. Sequential tests such as CUSUM are designed for repeated looks and can be set to a chosen false alarm rate, which makes them a natural engine for written retirement triggers.

                ## Milestones
                1. The idea of repeated looks and inflated false alarms written up in your own words.
                2. A CUSUM-style monitor implemented on one strategy's live returns.
                3. The monitor's false alarm rate and detection delay measured on simulated data.
                4. A proposal for whether to use the monitor as a retirement trigger.

                ## Notes
                Calibrate the monitor on simulated data with a known edge before trusting it on live data.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A CUSUM-style monitor runs on one live strategy, with false alarm rate and detection delay measured and a written proposal for its use."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write a page on why repeated looks inflate false alarms"
                - "Implement a CUSUM-style monitor on one strategy's returns"
                - "Measure false alarm rate and detection delay on simulated data"
                - "Propose whether the monitor should become a retirement trigger"
            - name: Bayesian updating of a strategy's expected edge
              description: |-
                ## Purpose
                Belief in a strategy should move with every month of live data, but in practice it stays where the backtest put it. Setting a prior on the expected edge from the haircut research figures and updating it monthly with live results gives a single, explainable number for how much belief remains.

                ## Milestones
                1. A prior on expected edge chosen for one strategy, with its width justified.
                2. A monthly update rule written and checked on past live data.
                3. A chart of the posterior expected edge over the strategy's live life.
                4. A threshold on the posterior proposed as a supporting retirement trigger.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One strategy has a chart of its posterior expected edge over its live life, with the prior and update rule documented."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Choose and justify a prior on expected edge for one strategy"
                - "Write the monthly update rule and test it on past live data"
                - "Chart the posterior expected edge across the live period"
                - "Propose a posterior threshold as a supporting trigger"
            - name: Reading on post-publication alpha decay
              description: |-
                ## Purpose
                Academic work studies how anomaly returns shrink after publication and how arbitrage capital erodes known signals, and it sets sober expectations for any live strategy. Reading a short list of these papers gives you numbers and mechanisms to quote when arguing that decay is normal rather than a personal failure.

                ## Milestones
                1. A reading list of five to eight papers on post-publication decay and arbitrage capital.
                2. A one-paragraph summary of each paper's data, method and main finding.
                3. A note on which mechanisms apply to each of your live strategies.
                4. The reading list shared with anyone who reviews your strategies.

                ## Notes
                Start from the **Reading queue** template. Studies of published anomalies, such as McLean and Pontiff's work on returns after publication, are a good first entry.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five or more papers on alpha decay are read and summarised, with a note linking their mechanisms to your live strategies."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Build a reading list of five papers on post-publication decay"
                - "Summarise each paper's data, method and finding in a paragraph"
                - "Note which decay mechanisms apply to each live strategy"
                - "Share the list with your strategy reviewers"
            - name: Separating factor drift from alpha decay
              description: |-
                ## Purpose
                Sometimes a strategy looks like it is dying when it has simply drifted into a factor exposure that had a bad year, and sometimes one looks healthy while its alpha has gone and a factor tailwind carries it. Attributing live returns to known factors and a residual shows which story is true before anyone votes on retirement.

                ## Milestones
                1. Live returns regressed on a relevant set of factor returns over rolling windows.
                2. The residual return and its trend charted beside the raw return.
                3. Changes in factor exposure since launch listed with likely causes.
                4. A one-paragraph verdict on whether the decline is factor drift, residual decay or both.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One live strategy has a rolling factor attribution with its residual return charted and a written verdict on factor drift versus decay."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Choose the factor returns relevant to one live strategy"
                - "Run rolling regressions of live returns on those factors"
                - "Chart residual return beside raw return"
                - "Write a verdict on factor drift versus residual decay"
            - name: Biases that keep dead strategies running
              description: |-
                ## Purpose
                Sunk cost, the disposition effect, ownership of an idea and the hope that the next quarter will be different all push researchers to keep losing strategies alive. Naming these biases, finding where they showed up in your own past decisions and writing counter-rules into the process makes them easier to spot in the moment.

                ## Milestones
                1. A short list of the biases most relevant to retirement, each defined in a sentence.
                2. Two past decisions of your own reviewed for signs of each bias.
                3. One counter-rule written for each bias, such as an independent second signer.
                4. The counter-rules added to the quarterly meeting agenda.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written list of retirement biases with two past decisions reviewed and a counter-rule for each added to the quarterly agenda."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a one-sentence definition of each bias that affects retirement"
                - "Review two of your past keep or retire decisions for each bias"
                - "Write one counter-rule per bias"
                - "Add the counter-rules to the quarterly meeting agenda"
            - name: Regime dependence check before calling decay
              description: |-
                ## Purpose
                Many strategies earn their returns in certain regimes, such as high volatility or strong trends, and look dead for long stretches between them. Splitting the research and live records by regime shows whether a poor patch is the expected quiet period of a regime-dependent strategy or a real loss of edge across all regimes.

                ## Milestones
                1. Two or three regime definitions chosen using data available at the time, not hindsight.
                2. Research and live returns split by regime.
                3. Live performance in each regime compared with research performance in the same regime.
                4. A written conclusion on whether underperformance is regime-specific or broad.

                ## Notes
                Fix regime definitions before looking at the split. Choosing regimes after seeing results will always find one where the strategy still works.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "One strategy's research and live returns are split by regimes defined in advance, with a written conclusion on regime-specific versus broad decay."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Define two or three regimes using data available at the time"
                - "Split research and live returns by regime"
                - "Compare live and research performance within each regime"
                - "Write the conclusion on regime-specific versus broad decay"
            - name: Retire, resize or rework decision memo
              description: |-
                ## Purpose
                Once a strategy breaches a trigger, the real choice is usually between retiring it, running it smaller where costs are lower, or reworking the signal, and each option is easy to argue for. A short decision memo that sets the three options against the same evidence, costs and research time forces the trade-off into the open and leaves a record.

                ## Milestones
                1. The evidence summarised: triggers hit, decay metrics, attribution and regime checks.
                2. Each option costed in capital, running cost and research hours.
                3. The risks of each option listed, including the risk that a rework is just overfitting to recent data.
                4. A recommendation made and the final decision recorded with the signers' names.

                ## Notes
                A rework counts as a new strategy: it needs its own research record, out-of-sample test and retirement criteria.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A signed decision memo sets retire, resize and rework against the same evidence and records the chosen option with its signers."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Summarise the triggers, decay metrics and attribution in one page"
                - "Cost each option in capital, running cost and research hours"
                - "List the risks of each option including overfitting a rework"
                - "Record the decision with the names of both signers"
            - name: Staged capital wind-down plan
              description: |-
                ## Purpose
                Switching a strategy off in one day can be costly in a thin market and throws away the last information it offers. A staged plan that cuts capital in set steps over set dates, with a condition that pauses or speeds the glide, makes the exit orderly and keeps the last months of data clean for the post-mortem.

                ## Milestones
                1. A wind-down schedule with capital steps and dates.
                2. Conditions written for speeding up the exit, such as a further loss trigger.
                3. Operations and risk told of each step in advance.
                4. Each step confirmed as done in the strategy file.

                ## Notes
                Agree the schedule with the risk owner. Keep the stop rule in force throughout: a strategy in wind-down can still breach its loss limit.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated wind-down schedule with capital steps and speed-up conditions is agreed, and every step is confirmed in the strategy file."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Draft capital steps and dates for the wind-down"
                - "Write the conditions that speed up the exit"
                - "Tell operations and risk about each step in advance"
                - "Confirm each completed step in the strategy file"
            - name: Position unwind schedule for a retired strategy
              description: |-
                ## Purpose
                The final positions of a retired strategy can be the most expensive trades it ever makes, especially in smaller names or contracts near expiry. Planning the unwind against average daily volume, roll dates and known events, and recording the actual cost, means the last chapter of the strategy does not undo much of its earlier profit.

                ## Milestones
                1. Every open position listed with size as a share of average daily volume.
                2. An unwind order and timetable set, avoiding known events and roll dates.
                3. Expected unwind cost estimated before trading starts.
                4. Actual unwind cost recorded against the estimate in the retirement file.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All positions of the retired strategy are closed on a written schedule, with expected and actual unwind cost recorded side by side."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List open positions with size as a share of daily volume"
                - "Set an unwind order that avoids roll dates and known events"
                - "Estimate total unwind cost before the first trade"
                - "Record actual unwind cost against the estimate"
            - name: Decommissioning code, jobs and data feeds
              description: |-
                ## Purpose
                Retired strategies leave behind scheduled jobs, signal files, order routes and data feeds that keep running, cost money and occasionally send orders nobody expected. A decommissioning checklist that freezes the code, switches off every job and route and confirms nothing still references the strategy closes those doors for good.

                ## Milestones
                1. The code tagged and frozen at its final live version.
                2. Every scheduled job, signal file and order route for the strategy listed and switched off.
                3. Downstream systems checked for any remaining reference to the strategy.
                4. A final confirmation that no orders can be generated, signed by a second person.

                ## Notes
                Start from the **Operational checklist** template. Disable before you delete: keep code and data archived so the post-mortem can rerun anything it needs.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A completed decommissioning checklist confirms frozen code, every job and route disabled, and a second person's sign-off that no orders can be generated."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Tag and freeze the strategy's final live code version"
                - "List every scheduled job, file and route the strategy uses"
                - "Disable each job and order route and record the time"
                - "Ask a second person to confirm no orders can be generated"
            - name: Data licence and subscription cancellations
              description: |-
                ## Purpose
                Data and software contracts often renew automatically and carry notice periods, so a strategy retired in March can still be billed until the following year. Mapping every licence the retired strategy used, checking whether any other strategy needs it and sending notices on time recovers real money.

                ## Milestones
                1. Every data, software and connectivity contract used by the strategy listed with renewal and notice dates.
                2. Each contract checked for use by other strategies or research.
                3. Notices sent for contracts no longer needed, before their notice deadlines.
                4. Annual savings recorded in the retirement file.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every contract used only by the retired strategy has a cancellation notice sent before its deadline, with the annual saving recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List each contract the strategy used with its notice date"
                - "Check whether any other strategy or project still needs each contract"
                - "Send cancellation notices before each notice deadline"
                - "Record the annual saving in the retirement file"
            - name: Reallocating freed capital and risk budget
              description: |-
                ## Purpose
                Capital released by a retirement tends to flow to whichever strategy had the best recent quarter, which is often the next one to disappoint. Writing how freed capital and risk budget are reallocated, using expected rather than recent performance and checking concentration, keeps one retirement from quietly creating the next problem.

                ## Milestones
                1. The amount of capital and risk budget released recorded.
                2. Candidate recipients listed with their expected envelopes, not just recent returns.
                3. The effect of each option on concentration and correlation across the book checked.
                4. The reallocation agreed with the risk owner and recorded.

                ## Notes
                Holding freed capital back until the next quarterly meeting is a perfectly good choice and is often the safest one.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded reallocation decision shows released capital, candidate recipients judged on expected envelopes and the concentration check."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Record the capital and risk budget released by the retirement"
                - "List candidate recipients with their expected envelopes"
                - "Check how each option changes concentration across the book"
                - "Agree and record the reallocation with the risk owner"
            - name: Choosing the research that fills the gap
              description: |-
                ## Purpose
                Research time freed by a retirement, without a deliberate choice, fills with small fixes to the remaining strategies. Scoring a short list of candidate ideas on expected value, difference from what has just failed, data readiness and time to a first honest test makes the reallocation of effort a decision instead of a drift.

                ## Milestones
                1. A shortlist of three to five candidate research ideas.
                2. Each idea scored on the same criteria, including how different it is from the retired strategy.
                3. One idea chosen with a time box and a first milestone.
                4. The choice recorded in the research hours log.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A scored shortlist of candidate ideas exists and one is chosen with a time box and first milestone recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List three to five candidate research ideas"
                - "Score each idea on value, difference, data readiness and time to test"
                - "Choose one idea and set a time box and first milestone"
                - "Record the choice in the research hours log"
            - name: Salvaging reusable parts of a retired strategy
              description: |-
                ## Purpose
                Dead strategies can still hold valuable parts, such as a data pipeline, cleaning rules, a cost model or a sub-signal. Going through the retired code and research deliberately, and moving the reusable parts into shared libraries with tests, recovers some of the work without carrying the dead strategy along with it.

                ## Milestones
                1. Components of the retired strategy listed and each marked reuse, archive or discard.
                2. Reusable components moved into a shared library with tests.
                3. Any sub-signal that still tests well entered as a new research idea, not a live change.
                4. The salvage list saved in the retirement file.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every component of the retired strategy is marked reuse, archive or discard, with reused parts tested in a shared library."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List each component of the retired strategy"
                - "Mark each component reuse, archive or discard"
                - "Move reusable components into a shared library with tests"
                - "Enter any still-promising sub-signal as a new research idea"
            - name: Strategy retirement post-mortem
              description: |-
                ## Purpose
                Without a post-mortem the lessons of a retirement live only in the builder's memory, and they fade or get rewritten. A structured session within a month of retirement that compares the launch thesis, the expected envelope and the live record, and asks what you would do differently at research, launch and monitoring, produces lessons others can use.

                ## Milestones
                1. The launch thesis, expected envelope and live record set side by side.
                2. The most likely cause of decay agreed, with supporting and contrary evidence.
                3. Lessons written for research, launch criteria and monitoring separately.
                4. At least one process change proposed and assigned an owner.

                ## Notes
                Start from the **Meeting notes** template. Keep it blameless: the aim is a better process, not a verdict on the researcher.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A post-mortem is held within 30 days of retirement and its written lessons include at least one assigned process change."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Book the post-mortem within a month of the retirement"
                - "Set thesis, expected envelope and live record side by side"
                - "Write lessons for research, launch and monitoring separately"
                - "Assign an owner to each proposed process change"
            - name: Retirement note to stakeholders and allocators
              description: |-
                ## Purpose
                People who relied on a strategy, from the portfolio manager to an external allocator, deserve a clear account of why it stopped and what happens next, and a vague message damages trust more than the retirement itself. A short, factual note agreed with compliance or legal where needed gives everyone the same story.

                ## Milestones
                1. The audience listed with what each needs to know.
                2. A factual note drafted covering reason, timing, wind-down and effect on the wider book.
                3. The note checked by compliance or legal where external parties receive it.
                4. The note sent and a copy kept in the retirement file.

                ## Notes
                State facts and process, not forecasts. Avoid any claim about future performance of the remaining strategies.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A factual retirement note, checked by compliance where needed, is sent to every listed stakeholder and filed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List who needs to hear about the retirement and what each needs"
                - "Ask the agent to draft a factual note from the decision memo"
                - "Have compliance or legal check any note going to external parties"
                - "Send the note and file a copy with the strategy record"
            - name: Final performance report at retirement
              description: |-
                ## Purpose
                Measured the same way as its research, a retired strategy's full live record is the most honest evidence your process has. Producing a final report with net returns, drawdowns, costs, decay metrics and comparison with the expected envelope closes the file properly and feeds the later study of decay across the book.

                ## Milestones
                1. Full live net returns, drawdowns and costs computed from first trade to last.
                2. Decay metrics charted over the strategy's whole live life.
                3. Live record compared with the expected envelope and the original backtest.
                4. The report saved in the retirement file and linked from the register.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A final report covering the whole live life, compared with the expected envelope and backtest, is saved and linked from the register."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Compute live net returns and drawdowns from first to last trade"
                - "Chart each decay metric across the live life"
                - "Compare the live record with the envelope and backtest"
                - "Save the report and link it from the retired register"
            - name: Emergency retirement runbook after a stop rule breach
              description: |-
                ## Purpose
                When a strategy hits its hard stop, the worst time to work out who does what is during the loss. A runbook that says who is called, how trading is halted, how positions are handled and when the full review happens lets the stop rule be applied in minutes, exactly as written.

                ## Milestones
                1. A step-by-step runbook from breach detection to trading halted.
                2. Contacts and backups listed for every step.
                3. Position handling after the halt written down, including who decides the unwind pace.
                4. The runbook rehearsed once on paper with everyone named in it.

                ## Notes
                Start from the **Operational checklist** template. The runbook applies the stop rule; it never reopens the question of whether the rule was right. That debate belongs in the post-mortem.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: artifact
                success_criteria: "A written emergency runbook names contacts for every step and has been rehearsed once on paper with everyone in it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write each step from breach detection to trading halted"
                - "Name a contact and a backup for every step"
                - "Write how positions are handled after the halt"
                - "Rehearse the runbook on paper with everyone named in it"
            - name: Annual lessons review across retired strategies
              description: |-
                ## Purpose
                One retirement teaches a little; ten read together show what your research process keeps getting wrong. A yearly review of every post-mortem and final report, looking for repeated causes such as underestimated costs, crowding or thesis drift, turns scattered lessons into changes to how new strategies are researched and launched.

                ## Milestones
                1. Every post-mortem and final report from the year collected.
                2. Causes of retirement counted by type.
                3. Two or three repeated weaknesses in research or launch named.
                4. Concrete changes to the research or launch process agreed and dated.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A yearly review counts causes across all retirements and records at least two dated changes to the research or launch process."
                cadence: cyclic
              tasks:
                - "Collect the year's post-mortems and final reports"
                - "Hold the annual lessons review across retirements @recurring(yearly)"
                - "Count retirement causes by type"
                - "Agree and date changes to the research or launch process"
            - name: Retiring your first strategy as a junior researcher
              description: |-
                ## Purpose
                The first retirement of a strategy you built can feel like a public failure, and junior researchers often delay raising decay until a senior colleague spots it. Raising it early, with evidence in the agreed format and a proposal for what you will work on next, usually earns more credibility than the original launch did.

                ## Milestones
                1. The decay evidence assembled in the same format as the monthly review.
                2. A short note raising the concern sent to your manager before the next quarterly meeting.
                3. A proposal for your next research idea ready to discuss alongside it.
                4. Personal lessons from the retirement written for your own development record.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Decay evidence and a next-idea proposal are sent to your manager before the quarterly meeting, with personal lessons recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Assemble the decay evidence in the monthly review format"
                - "Send your manager a short note raising the concern"
                - "Prepare a proposal for your next research idea"
                - "Write your personal lessons from the retirement"
            - name: Inheriting a decaying strategy from a departed colleague
              description: |-
                ## Purpose
                Strategies whose builder has left are often the hardest to judge, because the thesis, the tweaks and the reasons behind them left too. Rebuilding the record quickly and putting the strategy on a time-boxed review protects you from owning a slow decline you did not cause and cannot explain.

                ## Milestones
                1. The strategy's thesis, criteria and change history reconstructed from code, notes and colleagues.
                2. Missing retirement criteria or an envelope written and signed.
                3. A time-boxed review period agreed with your manager, with a decision date.
                4. A keep, rework or retire recommendation made by that date.

                ## Notes
                Respect any confidentiality or handover limits on contacting the departed colleague, and go through your manager if in doubt.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An inherited strategy has a reconstructed thesis, signed criteria and a recommendation recorded by the agreed decision date."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Reconstruct the thesis and change history from code and notes"
                - "Write and sign any missing retirement criteria"
                - "Agree a review period and decision date with your manager"
                - "Make a keep, rework or retire recommendation by that date"
            - name: Retiring a personal systematic strategy as a solo researcher
              description: |-
                ## Purpose
                Running your own systematic strategy means you are builder, risk owner and sole judge, which makes it easy to keep going on hope. A solo version of the process, with criteria written in advance, a pre-committed check date and one trusted person who reads your decision, puts some distance between you and the strategy.

                ## Milestones
                1. Retirement criteria and a stop rule written for the personal strategy.
                2. A trusted person agreed as reader of your keep or retire decisions.
                3. A quarterly check date set in your calendar.
                4. Any retirement recorded with a short post-mortem, even if only a page.

                ## Notes
                Use only capital you can afford to lose. This is about organising your own decisions, not advice on whether to trade.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A personal strategy has written criteria, a named reader and quarterly checks recorded, with a page of post-mortem for any retirement."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write retirement criteria and a stop rule for your own strategy"
                - "Ask a trusted person to read your keep or retire decisions"
                - "Run your keep or retire check against the written criteria @recurring(quarterly)"
                - "Write a one-page post-mortem for any retirement"
            - name: Making the case for retirement against the owner
              description: |-
                ## Purpose
                Reviewers and peers sometimes see decay before a strategy's owner will accept it, and raising it badly creates a fight rather than a decision. Preparing the case on the agreed criteria, with the attribution and regime checks done and a respectful route through the sign-off chain, keeps the discussion on evidence.

                ## Milestones
                1. The case framed entirely against the strategy's written criteria and envelope.
                2. Attribution and regime checks completed to answer the obvious objections.
                3. The owner given the evidence privately before any wider meeting.
                4. The outcome recorded through the normal sign-off chain.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A written case tied to the strategy's criteria is shared privately with the owner first and its outcome recorded through the sign-off chain."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Frame the case against the strategy's written criteria"
                - "Complete attribution and regime checks for likely objections"
                - "Share the evidence privately with the owner first"
                - "Record the outcome through the sign-off chain"
            - name: Retirement process for a small multi-strategy team
              description: |-
                ## Purpose
                Team leads with five or six researchers need retirement to work the same way for everyone, or decisions start to track seniority and personality. Setting one shared process, one review rhythm and one register for the team, and checking that each researcher's strategies are judged identically, keeps decisions fair and defensible.

                ## Milestones
                1. One retirement process document adopted by the whole team.
                2. Every researcher's strategies on the same review sheet and register.
                3. A check that criteria strictness is comparable across researchers.
                4. Retirement outcomes discussed in each researcher's development conversations, not used as a scorecard.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The whole team uses one retirement process, review sheet and register, with a documented check that criteria are comparable across researchers."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write one retirement process document for the team"
                - "Move every researcher's strategies onto the shared review sheet"
                - "Compare criteria strictness across researchers"
                - "Add retirement lessons to each researcher's development conversations"
            - name: Recording retired work for your performance review
              description: |-
                ## Purpose
                Researchers whose strategies retired often under-report that work, though a well-run retirement saves money and frees capacity. Writing a short record of each retirement you led, including the decision quality, costs saved and research time moved, within your employer's confidentiality rules, shows judgement as well as invention.

                ## Milestones
                1. A list of retirements you led or contributed to in the review period.
                2. For each, a short note on the decision, the timing and what it saved.
                3. The research that the freed time went into named.
                4. The record checked against confidentiality rules before it leaves your team.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A short record of each retirement you led, with savings and research moved, is ready for your performance review and within confidentiality rules."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the retirements you led in the review period"
                - "Write a short note on each decision and what it saved"
                - "Name the research the freed time went into"
                - "Check the record against confidentiality rules"
            - name: Decay half-life study across the book
              description: |-
                ## Purpose
                Once a team has a register of retired strategies with full live records, it can estimate how long edges of different types typically last. Measuring decay half-lives by signal family, holding period and market sets realistic expected lifetimes for new strategies and sharper retirement criteria for live ones.

                ## Milestones
                1. Live records of all retired and current strategies gathered on a common basis.
                2. A decay half-life estimated for each strategy with its method stated.
                3. Half-lives compared by signal family, holding period and market.
                4. Expected lifetimes added to the launch template for new strategies.

                ## Notes
                The sample is small and survivor-biased by your own launch process. Treat the results as rough priors, not laws.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A study estimates decay half-lives across the book by signal family and holding period, and expected lifetimes are added to the launch template."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Gather live records of retired and current strategies on one basis"
                - "Estimate a decay half-life for each strategy"
                - "Compare half-lives by signal family, holding period and market"
                - "Add expected lifetimes to the launch template"
            - name: Retiring a model from the model risk inventory
              description: |-
                ## Purpose
                Where strategies sit inside a formal model risk framework, retirement is not finished until the model inventory, validation status and any dependent models are updated. Following the decommissioning steps the model risk team expects avoids an audit finding for a model still listed as live, or a dependent model left using its outputs.

                ## Milestones
                1. The model's entry in the inventory located with its validation status.
                2. Every model or report that consumes its outputs identified.
                3. Retirement notification and evidence sent to the model risk team.
                4. The inventory entry marked retired with a date and reference to the retirement file.

                ## Notes
                Start from the **Risk register** template to track dependent models until each has been checked.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The model inventory shows the strategy's model as retired with a date, and every dependent model is recorded as checked."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the model's inventory entry and validation status"
                - "Identify every model or report that uses its outputs"
                - "Send the retirement notification and evidence to model risk"
                - "Confirm the inventory entry shows retired with a date"
            - name: Partial retirement of one market or sleeve
              description: |-
                ## Purpose
                A strategy trading many markets often decays unevenly: one region, asset class or contract stops working while the rest hold up. Testing each sleeve against its own criteria and retiring sleeves individually keeps the working parts, but it carries a real risk of cherry-picking survivors, so the rule must be set before the results are read.

                ## Milestones
                1. A rule for judging sleeves written before any sleeve-level results are viewed.
                2. Each sleeve's live record compared with its own expected envelope.
                3. Sleeves failing the rule retired through the normal sign-off chain.
                4. The remaining strategy's expected envelope recalculated without the retired sleeves.

                ## Notes
                Dropping the worst sleeves will always flatter the past. Judge the change on the rule you wrote first, and expect the trimmed strategy to underperform its revised backtest.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Sleeves are judged against a rule written before viewing results, with each retired sleeve signed off and the envelope recalculated."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write the sleeve judging rule before viewing sleeve results"
                - "Compare each sleeve's live record with its own envelope"
                - "Retire failing sleeves through the sign-off chain"
                - "Recalculate the remaining strategy's expected envelope"
            - name: Pruning decayed signals inside a combined model
              description: |-
                ## Purpose
                In a strategy built from many blended signals, individual signals can decay for years while the combination hides them. Measuring each signal's live marginal contribution, with costs, and retiring signals that add nothing makes the model simpler, cheaper and less exposed to whatever killed the weak signal.

                ## Milestones
                1. Each signal's live marginal contribution to the combined model measured after costs.
                2. Signals ranked by contribution and stability over time.
                3. A pruning rule written before any signal is removed.
                4. Removed signals recorded in the retired register with their evidence.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each signal's live marginal contribution is measured, a pruning rule is written first, and every removed signal is recorded in the register."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Measure each signal's live marginal contribution after costs"
                - "Rank signals by contribution and stability"
                - "Write the pruning rule before removing any signal"
                - "Record removed signals in the retired register"
            - name: Testing the retirement rules on past strategies
              description: |-
                ## Purpose
                Retirement criteria are themselves a model, with false kills of good strategies on one side and slow exits from dead ones on the other. Replaying your current rules over the full history of retired and surviving strategies shows how often they would have cut a strategy that later recovered and how much loss they would have saved.

                ## Milestones
                1. Current retirement rules applied month by month to every past and present strategy's live record.
                2. False kills counted: strategies the rules would have retired that later met their envelope.
                3. Losses that the rules would have avoided estimated.
                4. A written recommendation on tightening or loosening the rules, held until the annual refresh.

                ## Notes
                The sample is small, so treat the result as a sense check rather than an optimisation. Tuning rules to fit past strategies is the same overfitting the rules exist to guard against.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A replay of current rules across all strategies reports false kills and avoided losses, with a recommendation filed for the annual refresh."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Apply current rules month by month to every strategy's live record"
                - "Count false kills of strategies that later recovered"
                - "Estimate the losses the rules would have avoided"
                - "File a recommendation for the next annual criteria refresh"
---

# Systematic Strategy Retirement

This area is for researchers who run systematic strategies and want the decision to stop one to be made by rules agreed in advance, not by fatigue or a bad month. It starts with foundations (an inventory of what is live and why, written retirement criteria, an expected performance envelope, decay metrics and decision rights), moves through the monthly and quarterly machinery of decay reviews, probation and a retired register, the statistics and attribution worth learning before calling a strategy dead, the decisions and mechanics of winding one down, dated events such as the post-mortem and the final report, situations for a junior researcher, an inherited strategy, a solo account and a team lead, and finally specialist work on decay half-lives, signal pruning and testing the retirement rules themselves.

What repeats is a monthly decay review, a weekly signal health check, a monthly probation and crowding watch, a monthly look at where research hours go, a quarterly keep, reduce or retire meeting and a yearly refresh of criteria and lessons. The Metrics log, Meeting notes, Operational checklist, Reading queue and Risk register templates pair with the projects that name them. Most strategies fail out of sample and every live strategy eventually decays, so treat retirement as a normal stage of the work; nothing here is trading or investment advice, and capital, limit and wind-down decisions belong with whoever carries the risk. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
