---
id: quant-finance.portfolio-risk-models
name: Portfolio Risk Models
description: "A portfolio risk model you can defend: clean inputs, a covariance estimator chosen on evidence, factor and specific risk split, stress scenarios, and a standing check of predicted against realised risk."
category: business
version: 1.0.0
tags: [quant-finance, portfolio-risk-models, researcher, knowledge-worker, risk-models, covariance-estimation, stress-scenarios, tracking-error]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - metrics-log
    - reading-queue
    - meeting-notes
    - onboarding-30-60-90
    - portfolio-piece
  pillars:
    - name: Quantitative Finance & Trading
      emoji: "🧮"
      description: "Systematic research and trading run like engineering: alpha research and honest backtests, factor and risk models, execution and microstructure, statistics and machine learning, quant development and market data, prop-firm evaluations and personal algorithmic trading under strict risk rules, and quant careers. Organisation and method only, never trading advice."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Portfolio Risk Models
          description: "Building or using risk models: covariance estimation, factor and specific risk, stress scenarios and comparing predicted with realised risk."
          projects:
            - name: Inventory of risk numbers and the decisions they drive
              description: |-
                ## Purpose
                Risk models get built for one purpose and quietly reused for five others, so a covariance tuned for daily limit checks ends up sizing a three-month strategic allocation. Listing every risk number your team produces, who reads it and what decision it feeds shows where one model is being stretched past what it was designed for.

                ## Milestones
                1. Every risk figure in current reports listed with its owner and its reader.
                2. Each figure tagged with the decision it feeds, such as limits, sizing, allocation or client reporting.
                3. The horizon and confidence level each decision really needs written beside it.
                4. Mismatches between the model's design and its uses flagged for later projects.

                ## Notes
                Include numbers people pull from vendor screens by hand. Those are often the ones nobody has checked.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A table of every risk figure in use, with its reader, decision, horizon and a flag where the model is used outside its design."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Collect the last month of risk reports and screenshots in one folder"
                - "List each risk figure with the person who reads it"
                - "Ask three readers what decision each figure changes for them"
                - "Flag every figure used at a horizon the model was not built for"
            - name: Holdings, prices and returns feed for the risk run
              description: |-
                ## Purpose
                Most bad risk numbers trace back to inputs: a stale price, a position booked twice, a security mapped to the wrong identifier. A single, versioned feed of positions, prices and returns with documented sources is the ground every later risk project stands on.

                ## Milestones
                1. One position file per day with security identifiers, quantities and market values.
                2. Prices and total returns sourced from a named vendor or internal store, with the source recorded per field.
                3. Identifier mapping checked so every holding resolves to exactly one return series.
                4. A short data dictionary saved next to the feed.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A daily holdings and returns file exists with every position mapped to one return series and a data dictionary saved alongside it."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Export today's positions and note where each field comes from"
                - "Match every position to one identifier and one return series"
                - "Write a data dictionary covering each column in the feed"
                - "Store the feed with a date stamp so any past run can be rebuilt"
            - name: Build, buy or blend decision for the risk model
              description: |-
                ## Purpose
                Commercial factor risk models give coverage, history and an audit trail on day one, while an internal model fits your universe and horizon and costs research time to keep alive. Writing down the trade-offs before a renewal or a hire forces the choice onto cost, coverage and fit instead of habit.

                ## Milestones
                1. Requirements written: universe, horizons, asset classes, update frequency and reporting needs.
                2. At least two vendor models and an internal option scored against the same requirements.
                3. Total yearly cost estimated for each option, including people time and data licences.
                4. A recorded decision with the reasons and the conditions that would reopen it.

                ## Notes
                Start from the **Risk register** template to list what could go wrong with each option. A blend, a vendor model plus an internal overlay for your own universe, is common and worth scoring as its own option.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision between vendor, internal and blended risk models, scored on the same requirements and costed per year."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write the five requirements the risk model must meet"
                - "Request methodology documents from two risk model vendors"
                - "Estimate yearly people time for running an internal model"
                - "Record the decision and what would make you revisit it"
            - name: Risk measures glossary and house conventions
              description: |-
                ## Purpose
                Two people quoting volatility for the same portfolio can be a factor of two apart if one annualises daily figures and the other uses monthly returns, or if one reports ex ante and the other ex post. A short glossary of house conventions ends arguments that are really about definitions.

                ## Milestones
                1. Definitions written for volatility, tracking error, beta, value at risk and expected shortfall.
                2. Annualisation, horizon and confidence conventions fixed and stated once.
                3. Ex ante and ex post figures clearly labelled in every report template.
                4. The glossary shared with everyone who reads a risk report.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one or two page glossary fixing definitions and conventions for every risk measure the team reports, linked from each report."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every risk measure that appears in your current reports"
                - "Write one definition per measure with its formula in words"
                - "Fix the annualisation and confidence conventions in a single paragraph"
                - "Add an ex ante or ex post label to each report heading"
            - name: Sample covariance baseline and its failure points
              description: |-
                ## Purpose
                The plain sample covariance matrix is where everyone starts and where most problems first show up: with more assets than sensible observations it becomes singular, its smallest eigenvalues are pure noise and anything that inverts it will chase that noise. Computing it on your own universe and looking at what breaks gives every later estimator something to beat.

                ## Milestones
                1. A sample covariance matrix computed on your universe over a stated window.
                2. Its eigenvalue spectrum and condition number recorded.
                3. The ratio of assets to observations noted, with a sentence on what it implies.
                4. A minimum variance portfolio built from it and its realised volatility measured out of sample.

                ## Notes
                Keep this baseline frozen. Every estimator you try later should be compared with it on the same dates.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A saved notebook shows the sample covariance, its eigenvalues, condition number and the out-of-sample volatility of its minimum variance portfolio."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose the universe and estimation window for the baseline"
                - "Compute the sample covariance and save its eigenvalues"
                - "Record the condition number and assets to observations ratio"
                - "Measure the out-of-sample volatility of the minimum variance portfolio"
            - name: Estimation window and half-life choice
              description: |-
                ## Purpose
                Long equal-weighted windows are stable but slow to notice a new regime, while a short exponential half-life reacts quickly and drags noise into every number. Testing a handful of half-lives for volatility and for correlations separately, and choosing on forecast accuracy rather than taste, settles a parameter that silently drives every report.

                ## Milestones
                1. Four to six candidate half-lives chosen for volatilities and for correlations.
                2. Each candidate scored on out-of-sample forecast accuracy over the same test period.
                3. Separate half-lives chosen for volatility and correlation if the evidence supports it.
                4. The chosen values and the test that picked them written into the model documentation.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Half-lives for volatility and correlation are chosen from a documented out-of-sample comparison of at least four candidates."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pick four to six half-lives to test for volatilities"
                - "Pick a separate set of half-lives to test for correlations"
                - "Score each candidate on the same out-of-sample period"
                - "Write the chosen values and the evidence into the model notes"
            - name: Benchmark and active risk definitions
              description: |-
                ## Purpose
                Tracking error means nothing until everyone agrees which benchmark, in which currency, with which treatment of cash and dividends. Fixing the benchmark definition and computing active weights from it once, carefully, stops a long-only mandate's risk being reported in absolute terms one week and active terms the next.

                ## Milestones
                1. The benchmark index, currency, return type and rebalancing source written down.
                2. Benchmark constituents and weights loaded into the same feed as the holdings.
                3. Active weights computed and checked to sum to zero after cash.
                4. Absolute and active risk shown side by side in a test report.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A documented benchmark definition and active weight calculation produce tracking error that matches a hand check within a stated tolerance."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write the benchmark name, currency and return type in one place"
                - "Load benchmark weights for the same date as your holdings"
                - "Check that active weights net to zero after cash"
                - "Compare model tracking error with a hand calculation on one date"
            - name: First one-page portfolio risk report
              description: |-
                ## Purpose
                A portfolio manager will read one page and ignore twelve. Agreeing a single page with total and active risk, the largest contributors, factor against specific split and one stress figure gives the model a voice in decisions from the first week.

                ## Milestones
                1. A draft page with total risk, active risk and the ten largest risk contributors.
                2. Factor and specific risk shown as shares of the total.
                3. One stress scenario loss shown with its assumptions in a footnote.
                4. The page reviewed with its main reader and changed once in response.

                ## Notes
                Show contributions to risk, not just weights. The largest position is often not the largest risk.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A one-page risk report has been reviewed by its main reader, revised once and produced for a live portfolio."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Sketch the one-page layout with the main reader in fifteen minutes"
                - "Produce a first version from yesterday's risk run"
                - "Walk the reader through it and note what they skipped"
                - "Revise the page and save it as the report template"
            - name: Risk model documentation file
              description: |-
                ## Purpose
                Any model nobody can explain after its author leaves is a liability. A living document covering inputs, estimator, parameters, known limits and change history lets a reviewer, an auditor or your future self understand any number the model produced.

                ## Milestones
                1. Sections written for purpose, inputs, method, parameters and known limitations.
                2. Every parameter value linked to the test or decision that set it.
                3. A change history table started with dates and reasons.
                4. The document stored beside the model code under version control.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A version-controlled model document covers purpose, inputs, method, parameters, limitations and a dated change history."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Create the document with the five standard section headings"
                - "Write the known limitations section before anything else"
                - "Link each parameter to the evidence that chose it"
                - "Ask the agent to summarise the method section into a half-page overview"
            - name: Predicted versus realised risk baseline
              description: |-
                ## Purpose
                A risk model is a forecast, and forecasts can be scored. Comparing each period's predicted volatility with what happened, through a bias statistic on standardised returns, tells you whether the model is consistently too timid, too alarmed or about right before anyone relies on it for limits.

                ## Milestones
                1. Standardised returns computed as realised return divided by predicted volatility for past portfolios.
                2. A rolling bias statistic computed with its expected confidence band.
                3. Periods where the statistic left the band listed with what was happening in markets.
                4. A sentence agreed on whether the model under or over predicts and by roughly how much.

                ## Notes
                Start from the **Metrics log** template to record the bias statistic each month from here on.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A bias statistic series for at least two years of history is saved with its confidence band and a written verdict on forecast accuracy."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Gather predicted volatilities and realised returns for past portfolios"
                - "Compute standardised returns and a rolling bias statistic"
                - "Mark every period where the statistic left its band"
                - "Write a one-paragraph verdict on how the model has performed"
            - name: Daily risk run sanity checks
              description: |-
                ## Purpose
                Overnight risk runs fail quietly: a missing price becomes a zero return, a corporate action doubles a position, and the report still prints. A five-minute check of a few numbers that should barely move catches most of these before anyone acts on them.

                ## Milestones
                1. A list of five checks such as total risk change, position count, missing prices and largest contributor change.
                2. Thresholds set for each check, beyond which the run is held for review.
                3. A short log of every held run and its cause.
                4. Checks automated where possible so only exceptions need a human.

                ## Notes
                Start from the **Risk register** template to keep a running list of the failure modes the checks are designed to catch.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every business day's risk run passes five documented checks or is held, with each held run logged with its cause."
                cadence: rolling
              tasks:
                - "Write the five daily checks and their thresholds"
                - "Review the risk run exceptions before the morning meeting @recurring(daily)"
                - "Log every held run with its cause and fix"
                - "Automate the two checks that take longest by hand"
                - "Review the held-run log for repeat causes @recurring(monthly:9)"
            - name: Weekly risk note to the portfolio manager
              description: |-
                ## Purpose
                Daily numbers are noise to a busy portfolio manager, but a weekly note on what changed and why gets read. Naming the two or three movements that matter, such as a jump in specific risk from one name or a factor exposure drifting past its usual range, keeps the risk conversation regular and short.

                ## Milestones
                1. A fixed weekly slot agreed with the portfolio manager.
                2. A note format of three sections: what moved, why, and anything that needs a decision.
                3. Four consecutive weekly notes sent on time.
                4. Feedback from the reader used to cut one section that nobody reads.

                ## Notes
                Start from the **Meeting notes** template if the note is delivered in a short call rather than by message.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Weekly risk notes in a fixed three-part format have been delivered on time for four consecutive weeks."
                cadence: rolling
              tasks:
                - "Agree the weekly slot and format with the portfolio manager"
                - "Write and send the weekly risk note @recurring(weekly:fri)"
                - "Ask the reader which section they skip most often"
                - "Archive each note with the risk run date it used"
            - name: Monthly bias test and forecast accuracy log
              description: |-
                ## Purpose
                Forecast accuracy drifts as markets change regime, and a model that was well calibrated last year can be twenty percent too low now. Repeating the bias test every month on live portfolios, and logging the result in one place, turns calibration from an annual surprise into a trend you can watch.

                ## Milestones
                1. Bias statistic computed monthly for each live portfolio and a set of test portfolios.
                2. Results logged in one table with the confidence band.
                3. A rule written for what happens when the statistic leaves its band two months running.
                4. Twelve months of history in the log.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The bias statistic for every live portfolio is logged each month, and any two-month band breach has a recorded response."
                cadence: rolling
              tasks:
                - "Choose five test portfolios to score alongside the live ones"
                - "Run the bias test and update the accuracy log @recurring(monthly:4)"
                - "Write the rule for two consecutive months outside the band"
                - "Review the twelve-month accuracy trend @recurring(quarterly)"
            - name: Monthly covariance change log
              description: |-
                ## Purpose
                When a portfolio's predicted risk jumps, the first question is whether the portfolio changed or the model did. A monthly log that splits the change in risk into position changes and model changes answers that question in seconds.

                ## Milestones
                1. A method to attribute risk changes to positions, factor covariance and specific risk.
                2. A monthly entry with the three components for each main portfolio.
                3. Large model-driven changes annotated with the market events behind them.
                4. The log referenced in at least one portfolio review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each month's change in predicted risk for the main portfolios is split into position and model components and logged with a comment."
                cadence: rolling
              tasks:
                - "Write the attribution method for a change in predicted risk"
                - "Record the monthly split of risk changes @recurring(monthly:12)"
                - "Annotate any model-driven change larger than your threshold"
                - "Share the latest log entry at the next portfolio review"
            - name: Quarterly stress scenario library refresh
              description: |-
                ## Purpose
                Stress scenarios age fast: a library built around one crisis says little about the next one, and new holdings may not map to any shocked factor at all. Reviewing the library each quarter keeps historical replays, hypothetical shocks and their mapping to current holdings in step with the book.

                ## Milestones
                1. A library of historical and hypothetical scenarios, each with its shocks and source.
                2. Every current holding confirmed as mapped to at least one shocked factor or proxy.
                3. One scenario added or retired each quarter with a reason.
                4. Scenario losses for the main portfolios recorded after each refresh.

                ## Notes
                Portfolio stress numbers belong here. Stress testing a single strategy before launch sits in its own area.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The scenario library is reviewed every quarter, every holding maps to a shocked factor, and scenario losses are recorded after each review."
                cadence: cyclic
              tasks:
                - "List current scenarios with their shocks and sources"
                - "Refresh the scenario library and rerun the losses @recurring(quarterly)"
                - "Find holdings with no mapping to any shocked factor"
                - "Retire one scenario that no longer reflects the book"
            - name: Risk limit monitoring and breach log
              description: |-
                ## Purpose
                Limits on tracking error, concentration or stress loss are only as useful as the response when one is breached. A breach log with the limit, the size of the breach, who was told and what was done shows whether limits shape behaviour or just decorate a report.

                ## Milestones
                1. Every risk limit listed with its owner, threshold and measurement source.
                2. A breach log with date, size, notification and resolution for each event.
                3. Soft warning levels set below the hard limits.
                4. A quarterly summary of breaches shared with the limit owners.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every limit has an owner and threshold, and every breach in the period is logged with notification and resolution."
                cadence: rolling
              tasks:
                - "List each risk limit with its owner and threshold"
                - "Set a warning level at a fixed share of each hard limit"
                - "Check exposures against the warning levels @recurring(weekly:wed)"
                - "Log each breach the day it happens with who was told"
                - "Send the breach summary to limit owners @recurring(quarterly)"
            - name: Risk input exceptions queue
              description: |-
                ## Purpose
                Stale prices, missing returns and securities with too little history land in the risk run every week, and each one gets patched differently unless there is a queue. Keeping one list of exceptions, each with a standard fix and an owner, stops quiet proxies from becoming permanent.

                ## Milestones
                1. One queue for input exceptions with type, security, date and fix applied.
                2. Standard fixes written for the five most common exception types.
                3. Every proxy or filled value given an expiry date for review.
                4. The queue cleared to zero overdue items once a month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All risk input exceptions sit in one queue with a fix and owner, and no proxy is older than its review date at month end."
                cadence: rolling
              tasks:
                - "Set up the exceptions queue with five standard columns"
                - "Write the standard fix for each common exception type"
                - "Clear overdue proxies and filled values @recurring(monthly:20)"
                - "Count which vendor or source causes the most exceptions"
            - name: Quarterly recalibration review
              description: |-
                ## Purpose
                Parameters chosen two years ago, half-lives, shrinkage targets, the factor set, deserve a scheduled look rather than a crisis-driven one. A quarterly review checks the accuracy log, the exceptions queue and any user complaints, and decides deliberately whether anything changes.

                ## Milestones
                1. A review pack combining the accuracy log, breach log and exceptions summary.
                2. A recorded decision each quarter, including a decision to change nothing.
                3. Any change scheduled with a parallel run before it goes live.
                4. Four quarterly decisions on file.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A recalibration decision, with the evidence pack behind it, is recorded every quarter for a full year."
                cadence: cyclic
              tasks:
                - "Assemble the accuracy, breach and exceptions summaries in one pack"
                - "Hold the recalibration review and record the decision @recurring(quarterly)"
                - "Schedule a parallel run for any change that was agreed"
                - "Note the parameters reviewed and those left untouched"
            - name: Annual risk model review and sign-off
              description: |-
                ## Purpose
                Once a year the whole model should face the questions nobody asks during the busy months: is it still the right model for the book, are its documented limits still true, and would an independent reviewer accept it. A dated annual review with a named approver keeps the model owned rather than inherited.

                ## Milestones
                1. The model document updated with the year's changes and limitations.
                2. Twelve months of accuracy, breach and exception evidence summarised.
                3. Open issues listed with owners and target dates.
                4. A named approver's sign-off recorded with the date.

                ## Notes
                This is the owner's review. Formal independent validation, where your firm requires it, sits with the model validation team.
              priority: high
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A signed annual review of the risk model with updated documentation, a year of evidence and an open issues list is on file."
                cadence: cyclic
              tasks:
                - "Book the annual review date with the approver"
                - "Update the model document with the year's changes"
                - "Summarise the year of accuracy and breach evidence"
                - "Run the annual risk model review and record sign-off @recurring(yearly)"
            - name: Shrinkage estimators for covariance
              description: |-
                ## Purpose
                Shrinking the sample covariance toward a structured target, such as constant correlation or a single-factor matrix, trades a little bias for a large cut in estimation noise. Working through the main shrinkage estimators on your own data shows how much they help and which target suits your universe.

                ## Milestones
                1. The idea behind linear shrinkage written in your own words with one worked example.
                2. Two or three shrinkage targets implemented on your universe.
                3. Each estimator compared with the sample baseline on out-of-sample minimum variance volatility.
                4. A note on which target you would use and why.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two or more shrinkage estimators are implemented and compared with the sample covariance baseline on the same out-of-sample test."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Read the original linear shrinkage paper and summarise it in a page"
                - "Implement shrinkage toward a constant correlation target"
                - "Implement shrinkage toward a single-factor target"
                - "Compare both with the sample baseline on the frozen test dates"
            - name: Factor and specific risk decomposition
              description: |-
                ## Purpose
                Knowing that a portfolio has eight percent tracking error is less useful than knowing that six of it comes from one style exposure and the rest from three names. Learning how a factor risk model splits variance into factor covariance and specific variance makes every risk report easier to explain.

                ## Milestones
                1. The variance decomposition written out from exposures, factor covariance and specific variance.
                2. Factor and specific shares computed for a live or sample portfolio.
                3. The same split computed by hand for a two-asset example to check the code.
                4. A short explainer written for non-quant readers.

                ## Notes
                Defining and testing the factors themselves belongs to factor model research. This project uses the factors as given.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Factor and specific risk shares for a real portfolio match a hand-checked example, with a plain-language explainer saved."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write the variance decomposition formula in words and symbols"
                - "Work a two-asset example by hand"
                - "Compute factor and specific shares for one portfolio"
                - "Draft a half-page explainer for portfolio managers"
            - name: Marginal and component contributions to risk
              description: |-
                ## Purpose
                Contributions to risk tell a portfolio manager which positions to trim if risk must come down, and they rarely match position size. Learning marginal, component and percentage contributions, and checking they add up to total risk, gives the risk report its most useful column.

                ## Milestones
                1. Marginal contribution derived from the portfolio volatility formula.
                2. Component contributions computed and confirmed to sum to total risk.
                3. Contributions shown at position, sector and factor level.
                4. One case found where a small position is a large risk contributor, and explained.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Component contributions for a portfolio sum to its total risk and are reported at position, sector and factor level."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Derive marginal contribution from the volatility formula"
                - "Check component contributions sum to total risk in code"
                - "Aggregate contributions by sector and by factor"
                - "Find and explain one small position with a large contribution"
            - name: Value at risk and expected shortfall methods compared
              description: |-
                ## Purpose
                Parametric, historical and Monte Carlo methods can give very different tail numbers for the same book, and expected shortfall behaves differently from value at risk when tails are heavy. Running all three on one portfolio shows where they agree, where they part ways and which one your decisions should rely on.

                ## Milestones
                1. Parametric, historical simulation and Monte Carlo value at risk computed for one portfolio.
                2. Expected shortfall computed alongside each at the same confidence level.
                3. A backtest of exceedances for each method over at least two years.
                4. A recommendation on which method suits which use, recorded.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three value at risk methods and their expected shortfall figures are compared on one portfolio with an exceedance backtest for each."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Compute parametric value at risk from the model covariance"
                - "Compute historical simulation value at risk on the same portfolio"
                - "Add expected shortfall at the same confidence level for each"
                - "Count exceedances for each method over two years"
            - name: Random matrix theory and eigenvalue cleaning
              description: |-
                ## Purpose
                Most eigenvalues of a large sample correlation matrix sit inside the range pure noise would produce, which means much of the apparent structure is not there. Studying the noise band and clipping or shrinking those eigenvalues is a practical way to clean a correlation matrix without imposing a factor structure.

                ## Milestones
                1. The theoretical noise band computed for your matrix dimensions.
                2. Eigenvalues above and inside the band counted and plotted.
                3. Eigenvalue clipping implemented and tested out of sample.
                4. Results compared with the shrinkage estimators on the same dates.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A cleaned correlation matrix from eigenvalue clipping is compared out of sample with the sample and shrinkage estimators on the frozen test dates."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Compute the noise band for your number of assets and observations"
                - "Plot the eigenvalue spectrum against the band"
                - "Implement eigenvalue clipping and rebuild the correlation matrix"
                - "Score the cleaned matrix on the frozen out-of-sample test"
            - name: Correlations in sell-offs study
              description: |-
                ## Purpose
                Correlations measured in calm markets tend to rise when markets fall, which is exactly when diversification is needed. Measuring how your universe's correlations behaved in past sell-offs shows how far an average covariance understates risk in the periods that matter most.

                ## Milestones
                1. Calm and stressed periods defined with a rule written in advance.
                2. Average pairwise correlations measured in each regime.
                3. Portfolio volatility recomputed with stressed correlations.
                4. The gap between calm and stressed risk added to the model's documented limits.

                ## Notes
                Be careful with conditioning on large moves: correlations measured only on big-move days rise mechanically even if the underlying relationship has not changed.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Calm and stressed correlations for your universe are measured with a predefined regime rule and the resulting risk gap is documented."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write the rule that separates calm and stressed periods"
                - "Measure average pairwise correlation in each regime"
                - "Recompute portfolio volatility with stressed correlations"
                - "Add the calm to stressed gap to the model limitations section"
            - name: Reading list for risk model practice
              description: |-
                ## Purpose
                Risk modelling has a short shelf of texts that practitioners keep returning to: vendor methodology handbooks, the shrinkage and random matrix papers, and textbook chapters on factor risk and value at risk. A planned reading list with a page of notes per item builds knowledge you can cite in a review.

                ## Milestones
                1. Eight to twelve items listed, mixing handbooks, papers and textbook chapters.
                2. Items ordered from foundational to specialist.
                3. A one-page note written for each item read.
                4. Two ideas from the reading tested on your own model.

                ## Notes
                Start from the **Reading queue** template. Vendor methodology documents are often the clearest practical explanations available.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "At least eight risk model readings have a one-page note each, and two ideas from them have been tested on your model."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "List eight to twelve risk model readings in order"
                - "Read one item and write its one-page note @recurring(monthly:17)"
                - "Pick two ideas from the notes to test on your model"
                - "Record what happened when you tested each idea"
            - name: Fat tails and the normality assumption
              description: |-
                ## Purpose
                Many risk figures quietly assume returns are roughly normal, which understates how often large losses happen. Measuring kurtosis and tail frequencies on your own portfolios, and comparing them with what a normal model implies, tells you how much to discount a parametric tail number.

                ## Milestones
                1. Excess kurtosis and skew measured for main portfolios at daily and monthly horizons.
                2. Observed frequency of large moves compared with normal model predictions.
                3. A scaling or heavier-tailed adjustment tested for parametric tail figures.
                4. A caveat on tail figures added to the risk report.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Observed and normal-implied frequencies of large moves are compared for each main portfolio and a tail caveat appears on the report."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Measure skew and excess kurtosis at two horizons"
                - "Count moves beyond three standard deviations against the normal prediction"
                - "Test a heavier-tailed adjustment on parametric tail figures"
                - "Add a one-line tail caveat to the risk report"
            - name: Liquidity-adjusted risk study
              description: |-
                ## Purpose
                Two portfolios with the same volatility are not equally risky if one would take three weeks to exit. Learning how to scale risk by time to liquidate, or add an exit cost to stress losses, closes a gap that volatility alone cannot see.

                ## Milestones
                1. Days to liquidate estimated for each position from average daily volume and a participation cap.
                2. Positions bucketed by liquidity and their risk share shown.
                3. A liquidity-adjusted stress loss computed for one scenario.
                4. The assumptions behind the participation cap written down.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each position has a days-to-liquidate estimate and one stress scenario reports a liquidity-adjusted loss with stated assumptions."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Choose a participation cap and write why you chose it"
                - "Estimate days to liquidate for every position"
                - "Show risk share by liquidity bucket"
                - "Add an exit cost to one stress scenario loss"
            - name: Specific risk for assets with short histories
              description: |-
                ## Purpose
                New listings, recent spin-offs and thinly traded names have too little history for a sensible specific variance, and a naive estimate can be wildly low. A documented rule for these assets, such as a peer-based prior blended with observed data as history grows, keeps them from looking safer than they are.

                ## Milestones
                1. A minimum history threshold set for using observed specific variance alone.
                2. A prior defined from comparable assets by size, sector and region.
                3. A blending rule that moves from prior to observed as history accumulates.
                4. Every asset currently on the rule listed in the exceptions queue.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A documented rule sets specific risk for short-history assets from a peer prior, and every affected asset is listed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Set the minimum history threshold for observed specific variance"
                - "Define the peer groups used for the prior"
                - "Write and code the blending rule"
                - "List every holding currently using the prior"
            - name: Missing data and new assets in the covariance
              description: |-
                ## Purpose
                Assets with different start dates, holidays in different markets and suspended trading leave holes that a covariance routine either drops or fills badly. Choosing a method, such as pairwise estimation with a fix for the result not being positive definite, or a factor-based fill, makes the matrix usable and the choice visible.

                ## Milestones
                1. The share of missing observations measured across the universe.
                2. Two treatments compared, such as pairwise estimation and factor-based filling.
                3. A check that the final matrix is positive semi-definite added to the run.
                4. The chosen treatment recorded in the model document.

                ## Notes
                Asynchronous closing times across regions bias daily correlations downward. Weekly returns or a lead-lag adjustment are common responses.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A missing data treatment is chosen from a comparison of two methods, and every covariance run checks positive semi-definiteness."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Measure the share of missing returns by asset and date"
                - "Compare pairwise estimation with a factor-based fill"
                - "Add a positive semi-definite check to the covariance run"
                - "Record the chosen treatment and its known weaknesses"
            - name: Currency risk treatment decision
              description: |-
                ## Purpose
                Multi-currency portfolios change their risk with the reporting currency and with whether currency exposure is hedged, and many models leave this choice implicit. Deciding how currency is modelled, as separate factors, embedded in local returns or hedged out, keeps foreign holdings' risk honest.

                ## Milestones
                1. The base currency and hedging policy of each portfolio recorded.
                2. Currency exposure split from local asset exposure in the model.
                3. Risk computed with currency included and excluded to show its share.
                4. The treatment written into the model document.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each portfolio's currency treatment is documented and its risk report shows the share of risk from currency."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Record the base currency and hedge policy of each portfolio"
                - "Separate currency exposure from local asset exposure"
                - "Compute risk with and without the currency component"
                - "Write the currency treatment into the model notes"
            - name: Choosing risk horizons for each decision
              description: |-
                ## Purpose
                Scaling daily volatility by the square root of time assumes returns are independent, which fails for trending or mean-reverting assets and for illiquid holdings. Matching each decision in the inventory to an explicit horizon, and checking whether the scaling holds, avoids quoting monthly risk that is really daily risk stretched.

                ## Milestones
                1. Each decision from the inventory matched to a horizon.
                2. Square root of time scaling tested against directly measured longer-horizon volatility.
                3. Autocorrelation adjustments applied where the scaling fails.
                4. Report headings updated to show the horizon of every figure.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every reported risk figure states its horizon, and scaling from daily data is validated against direct measurement for each horizon used."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Match each decision in the inventory to a horizon"
                - "Compare scaled daily volatility with measured monthly volatility"
                - "Apply an autocorrelation adjustment where the two disagree"
                - "Add a horizon label to every figure in the report"
            - name: Head-to-head test of two covariance estimators
              description: |-
                ## Purpose
                Changing estimators on the strength of a paper or a vendor pitch is how models get worse. A fair head-to-head on the same dates, scored on bias statistics, minimum variance volatility and turnover of the resulting risk numbers, gives a decision you can defend at review.

                ## Milestones
                1. Scoring metrics and the test period fixed before any results are seen.
                2. Both estimators run on identical inputs and dates.
                3. A scorecard with bias statistic, minimum variance volatility and stability of risk figures.
                4. A decision recorded, including the option to keep the current estimator.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two covariance estimators are scored on predefined metrics over the same test period and a decision is recorded."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Write the scoring metrics and test period before running anything"
                - "Run both estimators on the same inputs and dates"
                - "Fill in the scorecard for each metric"
                - "Record the decision and the margin that drove it"
            - name: Risk report redesign from reader feedback
              description: |-
                ## Purpose
                Six months after launch, a risk report has usually grown pages nobody reads and lost the one chart people used to ask for. Interviewing its readers and cutting or adding with evidence keeps the report a tool rather than a ritual.

                ## Milestones
                1. Three to five readers interviewed on what they use and what they skip.
                2. Every section scored as used, occasionally used or unused.
                3. A redesigned version with at least one section removed.
                4. The redesign agreed with the main reader before it replaces the old one.

                ## Notes
                Start from the **Meeting notes** template to keep each reader interview in the same format.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A redesigned risk report, informed by at least three reader interviews and with one section removed, has replaced the old version."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Book twenty minutes with three report readers"
                - "Score each section by how often readers use it"
                - "Draft the redesign with the unused section removed"
                - "Agree the new version with the main reader"
            - name: Look-through concentration review
              description: |-
                ## Purpose
                Funds, ETFs, index futures and structured notes can hide the same issuer, sector or country several times over, so a portfolio that looks diversified by line item is concentrated underneath. Looking through to underlying exposures and summing them shows concentration that line-level risk misses.

                ## Milestones
                1. Every pooled or derivative holding listed with its underlying exposures.
                2. Exposures summed by issuer, sector and country across direct and indirect holdings.
                3. The five largest look-through concentrations shown on the risk report.
                4. A refresh frequency set for the look-through data.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Look-through exposures by issuer, sector and country are computed for all pooled holdings and the top five appear on the report."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every pooled vehicle and derivative in the portfolio"
                - "Source the latest underlying holdings for each one"
                - "Sum exposures by issuer, sector and country"
                - "Add the five largest concentrations to the report"
                - "Refresh the look-through holdings data @recurring(monthly:15)"
            - name: First stress results at the investment committee
              description: |-
                ## Purpose
                Presenting stress losses to a committee for the first time sets how seriously the numbers are taken for years. A prepared session with a few well-chosen scenarios, clear assumptions and a stated limit on what the numbers mean earns trust better than a wall of figures.

                ## Milestones
                1. Three to five scenarios chosen, mixing historical replays and hypothetical shocks.
                2. Each scenario's assumptions written in one line under its loss figure.
                3. Questions the committee is likely to ask answered in a backup page.
                4. The committee's feedback and any requested scenarios recorded after the meeting.

                ## Notes
                Lead with the scenario that best matches what the committee already worries about. It earns attention for the rest.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Stress results with stated assumptions have been presented to the committee and their requests recorded within a week."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Choose three to five scenarios for the first committee session"
                - "Write one line of assumptions under each loss figure"
                - "Prepare a backup page of likely committee questions"
                - "Record the committee's requests within a week of the meeting"
            - name: Risk model change go-live with a parallel run
              description: |-
                ## Purpose
                Switching estimators or vendors overnight changes every risk figure at once and leaves readers unable to tell real changes from model changes. Running old and new side by side for a fixed period, explaining the differences and switching on a dated plan makes the change boring, which is the goal.

                ## Milestones
                1. A parallel run period and switch date agreed with report readers.
                2. Daily differences between old and new figures logged for each portfolio.
                3. Every difference above a threshold explained in writing.
                4. The switch made on the planned date and the old model archived.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The new risk model went live on its planned date after a parallel run with every material difference explained."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Agree the parallel run length and switch date with readers"
                - "Log daily differences between old and new figures"
                - "Explain every difference above the agreed threshold"
                - "Archive the old model with its final run date"
            - name: Post-mortem of a realised risk surprise
              description: |-
                ## Purpose
                When a portfolio loses several times its predicted daily risk, the useful question is not whether markets were unusual but which part of the model missed it. A blameless post-mortem that separates bad luck, stale parameters, missing factors and data errors turns one bad day into a list of fixes.

                ## Milestones
                1. The loss expressed in units of predicted volatility.
                2. The loss attributed to factor, specific and unexplained components.
                3. A finding recorded for each cause considered: chance, parameters, missing factor, data.
                4. Fixes logged with owners and dates.

                ## Notes
                Start from the **Risk register** template to carry the fixes forward. A three-sigma day should happen occasionally even in a perfect model, so state how rare the loss was before looking for blame.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A written post-mortem attributes the surprise loss to model components, records a finding per cause and logs dated fixes."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Express the loss as a multiple of predicted volatility"
                - "Attribute the loss to factor, specific and unexplained parts"
                - "Write a finding for each possible cause"
                - "Log each fix with an owner and target date"
            - name: Vendor risk model renewal review
              description: |-
                ## Purpose
                Vendor model renewals arrive with a price rise and a short notice period, and teams renew by default because nobody prepared. Starting the review a few months ahead, with usage figures and accuracy evidence, gives you a real choice and a stronger negotiating position.

                ## Milestones
                1. Contract end date and notice period confirmed.
                2. Usage of the model by team and report counted.
                3. The model's accuracy log summarised for the contract period.
                4. A renew, renegotiate or replace recommendation sent before the notice deadline.

                ## Notes
                Ask procurement or legal to read the licence terms on data redistribution before you change how risk figures are shared.
              priority: medium
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A renewal recommendation backed by usage and accuracy evidence is delivered before the vendor contract's notice deadline."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Find the contract end date and notice period"
                - "Count which teams and reports use the vendor model"
                - "Summarise the model's accuracy over the contract period"
                - "Send the renewal recommendation before the notice deadline"
            - name: Risk answers for an allocator due diligence questionnaire
              description: |-
                ## Purpose
                Institutional allocators ask how risk is measured, which model is used, how limits are set and what happened at the last breach, and vague answers cost mandates. Preparing a consistent, evidence-backed set of risk answers once means each new questionnaire takes hours, not weeks.

                ## Milestones
                1. Standard questions on risk methodology, limits and governance collected from past questionnaires.
                2. A draft answer for each, linked to the model document or a log.
                3. Answers checked by compliance for accuracy and consistency with marketing materials.
                4. A reusable answer bank saved with a review date.

                ## Notes
                Answers describe process. Avoid any statement that reads as a performance or loss guarantee.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A compliance-checked bank of risk methodology answers, each linked to supporting evidence, is saved with a review date."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Collect risk questions from the last three questionnaires"
                - "Ask the agent to draft answers from the model document for review"
                - "Link each answer to a log or document as evidence"
                - "Send the answer bank to compliance for a check"
            - name: Risk model for a personal multi-asset portfolio
              description: |-
                ## Purpose
                Knowledge workers with a pension, an investment account and some company shares rarely know how concentrated their combined holdings are. A simple covariance-based view of your own combined portfolio, built from fund factsheets and price history, shows where the risk sits without needing a professional system.

                ## Milestones
                1. All accounts listed with holdings and current values in one sheet.
                2. Monthly return histories gathered for each holding or a close proxy.
                3. Portfolio volatility and the largest risk contributors computed.
                4. Employer share and home-country concentration noted, with questions for a licensed adviser.

                ## Notes
                This is a measuring exercise, not a recommendation. Take any change in allocation to a licensed financial adviser.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A sheet shows combined holdings across all accounts, portfolio volatility and the top risk contributors, with adviser questions listed."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every account and its holdings in one sheet"
                - "Download monthly price history for each holding or proxy"
                - "Compute portfolio volatility and risk contributions"
                - "Write three questions to take to a licensed adviser"
            - name: First 90 days as a new risk analyst
              description: |-
                ## Purpose
                New risk analysts inherit a model, a set of reports and a list of unspoken assumptions all at once. A deliberate first ninety days, learning the run, rebuilding one report by hand and meeting each reader, produces someone who can answer questions about the numbers rather than just forward them.

                ## Milestones
                1. The daily risk run shadowed and then run solo with a checklist.
                2. One report figure rebuilt by hand from raw inputs.
                3. Every main report reader met and their questions noted.
                4. A list of three improvements proposed to your manager by day ninety.

                ## Notes
                Start from the **Onboarding 30/60/90** template.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "By day ninety the analyst has run the risk process solo, rebuilt one figure by hand, met every reader and proposed three improvements."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Book a shadowing session for the next daily risk run"
                - "Rebuild one tracking error figure by hand from raw inputs"
                - "Meet each main report reader for twenty minutes"
                - "Write three improvement proposals for your manager"
            - name: Handing a strategy's risk profile to the risk team
              description: |-
                ## Purpose
                Researchers promoting a strategy often send a backtest and little else, and the risk team then spends weeks reconstructing exposures. A standard risk profile, covering factor exposures, expected volatility, tail behaviour, liquidity and capacity, makes the handover a review instead of an investigation.

                ## Milestones
                1. A risk profile template agreed with the risk team.
                2. Expected volatility and factor exposures computed with the team's own model.
                3. Liquidity, concentration and stress losses added to the profile.
                4. The profile reviewed and its questions answered in writing.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A strategy risk profile in the agreed template has been reviewed by the risk team with every question answered in writing."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the risk team which fields they need in a strategy profile"
                - "Run the strategy's positions through the house risk model"
                - "Add liquidity, concentration and stress losses to the profile"
                - "Answer the risk team's questions in writing"
            - name: Lightweight risk process for a solo researcher
              description: |-
                ## Purpose
                Independent researchers and small teams have no risk department, so nobody asks the awkward questions unless the researcher does. A deliberately small process, one covariance estimate, one weekly check and a written loss limit, gives most of the protection at a fraction of the effort.

                ## Milestones
                1. One estimator chosen and documented in a page.
                2. A weekly check of predicted risk against a written limit.
                3. A written rule for what happens when the limit is breached.
                4. A monthly comparison of predicted and realised volatility.

                ## Notes
                Most strategies that look fine in research fail out of sample. The point of a written limit is that it was decided before the losses, not during them.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A one-page risk process with a weekly limit check and a monthly forecast comparison has run for at least three months."
                cadence: rolling
              tasks:
                - "Write a one-page risk process with one estimator and one limit"
                - "Check predicted risk against the written limit @recurring(weekly:mon)"
                - "Compare predicted and realised volatility @recurring(monthly:27)"
                - "Write the action taken whenever the limit is breached"
            - name: Covariance estimator showcase for a career changer
              description: |-
                ## Purpose
                Students and career changers applying for risk or quant roles need evidence they can do the work, not only a certificate. A small public project comparing covariance estimators on free data, with clean code and an honest write-up of what failed, gives interviewers something concrete to discuss.

                ## Milestones
                1. A free, licence-compatible data set chosen and documented.
                2. Sample, shrinkage and factor-based estimators compared out of sample.
                3. Code tested, commented and published in a public repository.
                4. A two-page write-up covering method, results and limitations.

                ## Notes
                Start from the **Portfolio piece** template. Check the data licence before publishing anything derived from it.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A public repository with tested code comparing three covariance estimators and a two-page write-up is linked from your CV."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Choose a free data set and check its licence terms"
                - "Implement three estimators on the same test dates"
                - "Write a two-page summary including what did not work"
                - "Link the repository from your CV and profile"
            - name: Consistent risk across multiple horizons
              description: |-
                ## Purpose
                Teams often run a fast daily model for limits and a slow monthly model for allocation, and the two can disagree badly about the same portfolio. Reconciling them, with a documented reason for every gap, prevents a trader and an allocator acting on contradictory risk numbers.

                ## Milestones
                1. Daily and monthly model figures compared for every main portfolio.
                2. Differences attributed to half-life, factor set, horizon scaling and data frequency.
                3. A tolerance agreed for acceptable disagreement.
                4. A standing note explaining the expected gap for report readers.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The gap between daily and monthly model risk for each main portfolio is explained by component and sits within an agreed tolerance."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Put daily and monthly model figures side by side for each portfolio"
                - "Attribute the gaps to half-life, factors, scaling and data"
                - "Agree a tolerance for acceptable disagreement"
                - "Write a note for readers explaining the expected gap"
            - name: Tail dependence and copula scenarios
              description: |-
                ## Purpose
                Linear correlation captures how assets move together on average but says little about whether they crash together. Studying tail dependence and simulating joint scenarios from a copula fitted to your data gives tail loss estimates that a covariance matrix alone cannot.

                ## Milestones
                1. Empirical tail dependence measured for the main asset pairs or factor pairs.
                2. A copula family chosen with a written reason and fitted to the data.
                3. Joint scenarios simulated and portfolio tail losses estimated.
                4. Results compared with covariance-based expected shortfall.

                ## Notes
                Copula fits on short histories are fragile. Report a range across plausible families rather than one number.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Copula-based tail losses for a main portfolio are compared with covariance-based expected shortfall across at least two copula families."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Measure empirical lower tail dependence for the main pairs"
                - "Fit two copula families and record the fit diagnostics"
                - "Simulate joint scenarios and estimate tail losses"
                - "Compare the results with covariance-based expected shortfall"
            - name: Risk for options and other nonlinear positions
              description: |-
                ## Purpose
                Delta-based risk treats an option book as if it were linear, which misses the losses that come from gamma and volatility moves in a sharp market. Comparing delta, delta-gamma and full revaluation approaches on your own positions shows how much a linear model understates risk in the scenarios that matter.

                ## Milestones
                1. Option and other nonlinear positions identified with their Greeks.
                2. Risk computed by delta, delta-gamma and full revaluation methods.
                3. Implied volatility shocks included in at least one scenario.
                4. The gap between methods recorded and the method for reporting chosen.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Risk for nonlinear positions is computed by three methods, including implied volatility shocks, and a reporting method is chosen."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "List nonlinear positions with their delta, gamma and vega"
                - "Compute risk by delta and by delta-gamma approximation"
                - "Run full revaluation under price and volatility shocks"
                - "Choose the reporting method and record the gap"
            - name: Reverse stress test of the portfolio
              description: |-
                ## Purpose
                Ordinary stress tests ask what a chosen scenario would cost; a reverse stress test asks what would have to happen to cause a loss you cannot survive. Finding the most plausible combination of factor moves that breaches a fixed loss threshold exposes weaknesses that a library of familiar scenarios never touches.

                ## Milestones
                1. A loss threshold that would force a major decision agreed with the portfolio owner.
                2. The most plausible factor shock that reaches the threshold found under the model covariance.
                3. The resulting scenario described in plain market terms.
                4. One mitigating action or monitoring trigger agreed in response.

                ## Notes
                Start from the **Risk register** template to record the scenario and the agreed response.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A reverse stress scenario reaching an agreed loss threshold is described in market terms and a response is recorded."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Agree the unacceptable loss threshold with the portfolio owner"
                - "Solve for the most plausible factor shock reaching that loss"
                - "Describe the scenario in plain market terms"
                - "Agree one monitoring trigger or mitigating action"
            - name: Regime-conditional covariance research
              description: |-
                ## Purpose
                One covariance matrix averages calm and turbulent markets into a figure that fits neither. Researching regime-conditional estimates, where a predefined indicator switches or blends between covariance matrices, tests whether risk forecasts improve enough to justify the extra complexity.

                ## Milestones
                1. A regime indicator defined in advance from observable data only.
                2. Separate covariance matrices estimated for each regime.
                3. Blended forecasts scored against the current model on the bias test.
                4. A written verdict on whether the improvement justifies the added complexity.

                ## Notes
                Regime models are easy to overfit. Fix the indicator before looking at the forecast results and count every variant you try.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A regime-conditional covariance model is scored against the current model on the bias test with a recorded go or no-go verdict."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Define the regime indicator before looking at any results"
                - "Estimate a covariance matrix for each regime"
                - "Score blended forecasts on the same bias test as the current model"
                - "Record the verdict and every variant tried"
---

# Portfolio Risk Models

This area is for researchers who build risk models and for the analysts and portfolio managers who live with their numbers every day. It starts with foundations (an inventory of what the risk numbers are used for, clean holdings data, the build or buy decision, a first covariance estimate and a first look at predicted against realised risk), then the daily, weekly and monthly machinery of running a model, the estimation skills worth learning properly, improvements to specific risk, currency and horizon choices, dated events such as a model change going live, variants for a new risk analyst, a solo researcher and a career changer, and finally specialist work on tails, nonlinear positions and multiple horizons.

What repeats is a daily sanity check of the risk run, a weekly risk note, a monthly bias test and covariance change log, quarterly stress library and recalibration reviews, and a yearly model review. The Risk register, Metrics log, Reading queue, Meeting notes, Onboarding 30/60/90 and Portfolio piece templates pair with the projects that name them. A risk model describes uncertainty, it does not remove it: nothing here is investment advice, and the numbers are only as good as the inputs and the assumptions written beside them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
