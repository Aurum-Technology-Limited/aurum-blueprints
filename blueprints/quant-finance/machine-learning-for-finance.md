---
id: quant-finance.machine-learning-for-finance
name: Machine Learning for Finance
description: "Targets and baselines fixed first, point-in-time features, purged cross-validation, honest labelling and feature importance, decay monitoring and the discipline to keep the simpler model when it wins."
category: business
version: 1.0.0
tags: [quant-finance, machine-learning-for-finance, researcher, engineer, purged-cross-validation, labelling, feature-importance, model-decay]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - reading-queue
    - risk-register
    - meeting-notes
    - portfolio-piece
  pillars:
    - name: Quantitative Finance & Trading
      emoji: "🧮"
      description: "Systematic research and trading run like engineering: alpha research and honest backtests, factor and risk models, execution and microstructure, statistics and machine learning, quant development and market data, prop-firm evaluations and personal algorithmic trading under strict risk rules, and quant careers. Organisation and method only, never trading advice."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Machine Learning for Finance
          description: "Applying machine learning to financial data: low signal to noise, labelling, purged cross-validation, feature importance, model decay and when simpler models win."
          projects:
            - name: Prediction target and horizon written down
              description: |-
                ## Purpose
                Most failed machine learning projects in finance never said precisely what they were predicting: next-day return, five-day sign, rank within the sector, or volatility-scaled excess return over a benchmark. Writing the target, the horizon, the universe and the moment each prediction is made, before any model is trained, stops the target drifting towards whatever the first model happens to fit.

                ## Milestones
                1. A one-page target definition naming the quantity, horizon, universe and prediction timestamp.
                2. The economic reason the target should be predictable written in two or three sentences.
                3. The decision the prediction feeds, such as ranking, sizing or a trade filter, stated.
                4. The definition committed to version control beside the research code.

                ## Notes
                If you cannot say which decision the prediction changes, you are not ready to train anything yet.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A dated, version-controlled target definition states quantity, horizon, universe, prediction timestamp and the decision it feeds."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the target quantity and horizon in one sentence"
                - "State the exact timestamp at which each prediction is made"
                - "Name the decision the prediction will change"
                - "Commit the target definition beside the research code"
            - name: Linear and naive baselines every model must beat
              description: |-
                ## Purpose
                A gradient boosted model that beats nothing is not evidence of anything. Building three baselines first (a constant or historical mean, a single well-known signal, and a regularised linear model on the same features) gives every later model a bar to clear, and very often the linear model turns out to be the one worth keeping.

                ## Milestones
                1. A naive baseline scored on the agreed validation scheme.
                2. A single-signal baseline, such as short-term reversal or momentum, scored on the same scheme.
                3. A ridge or lasso model on the full feature set scored with identical folds.
                4. A baseline table saved that every new model report must include.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three baselines are scored on the same folds and a baseline table exists that new model reports are required to show alongside their own results."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Score a naive mean or zero prediction on the validation folds"
                - "Score one well-known single signal on the same folds"
                - "Fit a ridge or lasso model on the full feature set"
                - "Save the baseline table where every model report can reference it"
            - name: Point-in-time feature table with as-of joins
              description: |-
                ## Purpose
                Features built from data that was revised, restated or published late are the commonest source of leakage in financial machine learning. A feature table keyed by entity and the time the information was actually available, built with as-of joins and explicit reporting lags, means a model can only learn from what a trader could have known.

                ## Milestones
                1. Every feature source listed with its publication lag and revision behaviour.
                2. A feature table keyed by entity and availability timestamp, not event date.
                3. As-of joins used everywhere a slower source meets a faster one.
                4. A test that fails if any feature timestamp is later than the prediction timestamp.

                ## Notes
                Fundamentals, analyst data and macro releases are the usual offenders. Use the first-release value unless you can prove the revision was known at the time.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A feature table keyed by availability time passes an automated check that no feature is stamped later than its prediction timestamp."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "List every feature source with its publication lag"
                - "Rebuild the feature table keyed by availability timestamp"
                - "Replace plain merges with as-of joins on slower sources"
                - "Add a test that fails on any future-stamped feature"
                - "Run the future-stamp test on the live feature table @recurring(weekly:mon)"
            - name: Purged and embargoed cross-validation setup
              description: |-
                ## Purpose
                Ordinary k-fold cross-validation leaks badly on financial data because labels overlap in time: a five-day return label in the training set shares days with a test label next to it. Purging training samples whose label windows overlap the test fold, and embargoing a gap after it, gives validation scores that are closer to what the model will do live.

                ## Milestones
                1. Label start and end times stored for every sample.
                2. A splitter that drops training samples whose label window overlaps any test sample.
                3. An embargo period after each test fold chosen and justified in writing.
                4. Plain k-fold and purged scores compared side by side on one model.

                ## Notes
                The gap between the two scores is a useful measure of how much leakage your old process had. Expect purged scores to be lower.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A purged and embargoed splitter is in the shared library, with a written comparison against plain k-fold on at least one model."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Store label start and end times for every training sample"
                - "Write a splitter that purges overlapping label windows"
                - "Choose an embargo length and note why"
                - "Compare plain k-fold and purged scores on one model"
            - name: Experiment tracking for every model run
              description: |-
                ## Purpose
                When a researcher says the model got better, the questions are always: than what, on which data, with how many tries. An experiment tracker that records code version, data snapshot, features, hyperparameters, seed and scores for each training run answers those questions automatically and makes the number of trials a fact instead of a guess.

                ## Milestones
                1. A tracking tool or a simple run table chosen and set up.
                2. Code commit, data snapshot ID, feature list, parameters, seed and scores logged per run.
                3. Logging wired into the training script so no run can skip it.
                4. A count of runs per research idea visible in one view.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every training run in the past two weeks appears in the tracker with commit, data snapshot, parameters, seed and validation scores."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick an experiment tracker or set up a run table"
                - "Log commit, data snapshot, parameters and seed in the training script"
                - "Add validation scores and run duration to each record"
                - "Build one view that counts runs per research idea"
            - name: Signal to noise estimate before model choice
              description: |-
                ## Purpose
                Daily equity returns typically carry an information coefficient in the low single digits of a percent, which is orders of magnitude weaker than the image or text problems most machine learning tools were tuned on. Estimating what a realistic best-case score looks like for your target, from published work and your own baselines, sets expectations and tells you how much model capacity the data can actually support.

                ## Milestones
                1. A short note of typical information coefficients or accuracies reported for similar targets.
                2. The baseline scores compared against that range.
                3. A rough count of effectively independent samples after allowing for overlap.
                4. A written view on how complex a model the sample size can justify.

                ## Notes
                A validation accuracy of 70 percent on daily direction is almost always a leak, not a discovery. Treat it as a bug report.
              priority: high
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page note records the realistic score range for the target, the effective sample size and the model complexity it supports."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Collect reported scores for similar targets from three papers"
                - "Place your baseline scores within that range"
                - "Estimate the effective number of independent samples"
                - "Write a paragraph on how much model capacity the data supports"
            - name: Evaluation metrics tied to trading outcomes
              description: |-
                ## Purpose
                Mean squared error and accuracy can improve while the strategy built on them gets worse, because they weight every sample equally and ignore costs. Choosing a small set of metrics that track what matters, such as rank information coefficient, hit rate weighted by size, and net returns of a simple portfolio after costs, keeps model selection pointed at the right thing.

                ## Milestones
                1. One primary model metric and one portfolio-level metric chosen and written down.
                2. A simple, fixed portfolio rule that turns predictions into positions for evaluation.
                3. Cost assumptions applied before any portfolio metric is reported.
                4. A standard evaluation report that every model run produces.

                ## Notes
                Start from the **Metrics log** template to keep the chosen measures and their values for each model in one place.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A standard evaluation report exists with a named primary metric, a fixed portfolio rule and net-of-cost results, and is produced by every run."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose one primary model metric and one portfolio metric"
                - "Fix a simple rule that turns predictions into positions"
                - "Apply default costs before any portfolio result is shown"
                - "Generate the standard report at the end of each run"
            - name: Compute and data budget for ML research
              description: |-
                ## Purpose
                Training sweeps on cloud GPUs and licensed data both cost real money, and unlimited compute mostly buys more overfitting. Setting a monthly budget for compute hours and data spend per idea makes trade-offs explicit and forces the question of whether another sweep is worth more than a better feature.

                ## Milestones
                1. Current monthly compute and data spend measured.
                2. A budget per research idea agreed in compute hours and money.
                3. Spend alerts or a simple monthly tally in place.
                4. A rule for what happens when an idea exhausts its budget.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A written compute and data budget per idea exists, with spend checked against it each month."
                cadence: rolling
              tasks:
                - "Total last month's compute and data spend"
                - "Set a compute hour and money budget per idea"
                - "Turn on spend alerts with your cloud provider"
                - "Check spend against the budget for each idea @recurring(monthly:3)"
            - name: Reproducible training pipeline with fixed seeds
              description: |-
                ## Purpose
                Tree ensembles and neural networks give different results on each run unless seeds, library versions and data order are pinned, and a score that moves by a full percentage point between identical runs cannot support a decision. Making training reproducible, and measuring the run-to-run spread, tells you which improvements are real.

                ## Milestones
                1. Random seeds set for every library that uses randomness.
                2. Library versions pinned in an environment file.
                3. One model trained five times with different seeds and the spread of scores recorded.
                4. A rule that improvements smaller than the seed spread are not reported as gains.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Retraining from the same commit and data reproduces scores exactly, and the seed-to-seed spread of the main model is recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Set seeds for every library that uses randomness"
                - "Pin library versions in an environment file"
                - "Train the main model five times with different seeds"
                - "Record the spread and add the reporting rule to the protocol"
            - name: Risk limits and stop rule for ML-driven signals
              description: |-
                ## Purpose
                A model that scores well in validation can still lose money live, and most strategies do fail out of sample. Writing the position limits, the sizing rule that caps how much any single prediction can move, the maximum drawdown before the signal is switched off and the review that must follow, all before the model trades, keeps one confident model from becoming a large loss.

                ## Milestones
                1. Maximum position per name and gross exposure for the signal written down.
                2. A sizing rule that caps the effect of extreme model outputs.
                3. A drawdown and decay threshold that switches the signal off, stated as numbers.
                4. A post-stop review step agreed before any restart.

                ## Notes
                Start from the **Risk register** template. This is a planning record, not advice on what limits to use; agree them with whoever owns risk.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A signed-off page lists position limits, a capped sizing rule and a numeric stop rule for the signal before it trades."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the maximum position per name and gross exposure"
                - "Define a sizing rule that clips extreme predictions"
                - "Set the drawdown and decay levels that switch the signal off"
                - "Agree the review required before any restart"
                - "Check live sizes against the limits and stop rule @recurring(monthly:5)"
            - name: Weekly review of model runs
              description: |-
                ## Purpose
                Training runs pile up fast, and without a weekly look the best-scoring run quietly becomes the truth while the forty that failed are forgotten. Thirty minutes each week reading the tracker, noting what was learned and closing dead ends keeps the research honest and the trial count visible.

                ## Milestones
                1. A standing thirty-minute weekly slot in the calendar.
                2. Each week's runs summarised in three lines: tried, learned, next.
                3. Dead ends marked closed in the tracker with a reason.
                4. The trial count per idea read out before any result is discussed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The tracker carries a weekly three-line summary for at least eight consecutive weeks, with closed ideas marked."
                cadence: rolling
              tasks:
                - "Book a recurring thirty-minute review slot"
                - "Summarise the week's runs as tried, learned and next @recurring(weekly:fri)"
                - "Close dead-end ideas in the tracker with a one-line reason"
                - "Note the trial count beside every result you discuss"
            - name: Monthly feature drift monitor
              description: |-
                ## Purpose
                Feature distributions shift when vendors change methods, when markets change regime, or when a pipeline breaks silently, and a model trained on last year's distribution then scores garbage with full confidence. A monthly comparison of each feature's live distribution against its training distribution catches these shifts before they show up in returns.

                ## Milestones
                1. Training-period summary statistics stored for every feature.
                2. A drift score, such as a population stability index, computed monthly for each feature.
                3. Thresholds set that flag a feature for investigation.
                4. Each flagged feature explained or fixed, with the cause noted.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly drift report covering every live feature exists for three consecutive months, with every flag explained."
                cadence: rolling
              tasks:
                - "Store training-period statistics for each feature"
                - "Run the feature drift report for every live model @recurring(monthly:9)"
                - "Investigate each feature above the drift threshold"
                - "Record the cause of each flag in the model's notes"
            - name: Prediction decay watch for deployed models
              description: |-
                ## Purpose
                Models in finance decay as others find the same patterns and as conditions move away from the training sample. Tracking the rolling information coefficient or hit rate of each deployed model against its validation range shows whether decay is gradual, sudden or not happening, which is the evidence a retraining or retirement decision needs.

                ## Milestones
                1. The validation-period range of the primary metric stored for each model.
                2. A rolling live metric computed on a fixed window.
                3. A chart of live against validation range kept per model.
                4. Thresholds for a retrain review and for switching off written down.

                ## Notes
                Keep this at the level of prediction quality. Profit and loss monitoring belongs with live strategy monitoring.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each deployed model has a monthly chart of rolling live metric against its validation range, with written retrain and stop thresholds."
                cadence: rolling
              tasks:
                - "Store the validation range of the primary metric per model"
                - "Compute the rolling live metric for each deployed model @recurring(monthly:16)"
                - "Flag any model below its retrain review threshold"
                - "Write up decay findings in the model's notes"
            - name: Quarterly retraining with champion and challenger
              description: |-
                ## Purpose
                Retraining on a fixed calendar without a test just replaces one model with another of unknown quality. A quarterly routine that retrains a challenger on fresh data, scores it against the current champion on the same recent out-of-sample period, and promotes it only if it clears a margin set in advance, keeps models current without churning them.

                ## Milestones
                1. A retraining script that produces a challenger from the latest data snapshot.
                2. A promotion margin written down before the first comparison.
                3. Champion and challenger scored on the same out-of-sample window.
                4. Each quarter's decision recorded with scores and reason.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter has a recorded champion against challenger comparison with scores and a promote or keep decision."
                cadence: cyclic
              tasks:
                - "Write the promotion margin into the model protocol"
                - "Retrain a challenger on the latest data snapshot @recurring(quarterly)"
                - "Score champion and challenger on the same recent window"
                - "Record the promote or keep decision and why"
            - name: Financial ML paper reading queue
              description: |-
                ## Purpose
                The financial machine learning literature mixes careful work with results that vanish under purged validation, and reading it without a system means either drowning or missing the papers that matter. A queue with a monthly slot, a one-paragraph note per paper and a column for whether the method was actually tried turns reading into usable method.

                ## Milestones
                1. A queue of ten papers chosen across labelling, validation, features and model decay.
                2. A monthly reading slot booked.
                3. A one-paragraph note per paper covering claim, data, validation method and doubts.
                4. At least two methods from the queue tested on your own data.

                ## Notes
                Start from the **Reading queue** template. Check how each paper validated its results before believing the headline number.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten papers have one-paragraph notes and at least two of their methods have been tested on your own data."
                cadence: rolling
              tasks:
                - "List ten papers across labelling, validation, features and decay"
                - "Read one paper and write a one-paragraph note @recurring(monthly:22)"
                - "Mark which paper methods are worth testing"
                - "Test one method from the queue on your own data"
            - name: Label and target refresh check
              description: |-
                ## Purpose
                Labels go stale in quieter ways than features: a corporate action rewrites a return, a universe change drops names, or the volatility used to scale a barrier was computed on the wrong window. A monthly check that recomputes a sample of labels from raw data and compares them with what the model trained on catches these errors before they compound.

                ## Milestones
                1. A script that recomputes a random sample of labels from raw prices.
                2. A tolerance set for acceptable differences.
                3. Mismatches traced to a cause and fixed at source.
                4. A monthly log of checks run and mismatches found.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly label recomputation check has run for three months, with every mismatch above tolerance traced and fixed."
                cadence: rolling
              tasks:
                - "Write a script that recomputes a sample of labels from raw data"
                - "Set a tolerance for label differences"
                - "Run the label recomputation check @recurring(monthly:12)"
                - "Trace each mismatch to its source and fix it there"
            - name: Hyperparameter search budget per idea
              description: |-
                ## Purpose
                Search tools make it trivial to try ten thousand configurations, and the best of ten thousand on noisy financial data is mostly luck. Fixing the search space and the number of trials before searching, and logging the full distribution of results rather than the winner, keeps tuning from turning into an overfitting machine.

                ## Milestones
                1. A search space and trial cap written down per idea before searching.
                2. Every trial's score stored, not only the best.
                3. The spread of scores across trials reported beside the best one.
                4. A monthly check that no idea has exceeded its cap.

                ## Notes
                Wide flat regions of good scores are more trustworthy than one sharp peak. Prefer parameters from the middle of a plateau.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each active idea has a written search space and trial cap, and its reports show the score distribution across all trials."
                cadence: rolling
              tasks:
                - "Write the search space and trial cap for the current idea"
                - "Store every trial score, not only the best"
                - "Plot the distribution of trial scores next to the winner"
                - "Check trial counts against caps for every idea @recurring(monthly:26)"
            - name: Shared feature library maintenance
              description: |-
                ## Purpose
                Features copied between notebooks drift apart, so two researchers using momentum may be using different definitions and nobody knows. A shared library with one definition per feature, a test for each and a quarterly tidy of unused or duplicated entries keeps results comparable across people and models.

                ## Milestones
                1. Features in active use moved into one shared module.
                2. Each feature documented with definition, lag and data source.
                3. A unit test per feature checking a known value.
                4. Unused and duplicate features removed each quarter.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A shared feature module with documentation and a test for each feature exists, and has been tidied in each of the last two quarters."
                cadence: cyclic
              tasks:
                - "Move the ten most used features into a shared module"
                - "Document definition, lag and source for each feature"
                - "Add a known-value test for each feature"
                - "Remove unused and duplicate features from the library @recurring(quarterly)"
            - name: Model inventory with owners and status
              description: |-
                ## Purpose
                Teams lose track of which models are live, which are in research and which were abandoned but still feed a report somewhere. A simple inventory listing every model with its owner, target, training data window, status and last review date answers the first question any reviewer or risk team asks.

                ## Milestones
                1. Every model in research, shadow or production listed.
                2. Owner, target, training window, status and last review date recorded for each.
                3. Models with no owner either adopted or switched off.
                4. The inventory reviewed and dated each quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A dated inventory lists every model with owner, target, training window, status and last review, refreshed each quarter."
                cadence: cyclic
              tasks:
                - "List every model in research, shadow or production"
                - "Record owner, target, training window and status for each"
                - "Resolve every model that has no owner"
                - "Review and date the model inventory @recurring(quarterly)"
            - name: Leakage incident log and post-mortems
              description: |-
                ## Purpose
                Every team that does financial machine learning finds a leak eventually: a feature stamped at the close but used at the open, a scaler fitted on the whole data set, a universe filter that knew the future. Logging each one with how it was found and how it was fixed builds a checklist that stops the same mistake twice.

                ## Milestones
                1. A leakage log with date, model, cause, how found and fix columns.
                2. Every known past leak written up.
                3. A short checklist distilled from the log and added to the model review.
                4. A monthly look at the log for new entries and patterns.

                ## Notes
                Fitting scalers, imputers or feature selection on the full sample before splitting is the leak people forget most often.
              priority: high
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A leakage log with every known incident exists and has produced a checklist that is part of every model review."
                cadence: rolling
              tasks:
                - "Create the leakage log with cause, detection and fix columns"
                - "Write up every leak you already know about"
                - "Turn the log into a short pre-review checklist"
                - "Read the log for new entries and repeated causes @recurring(monthly:28)"
            - name: Triple-barrier and fixed-horizon labelling practice
              description: |-
                ## Purpose
                Fixed-horizon labels ignore the path a price takes and use one threshold whatever the volatility, which is why many practitioners prefer barrier labels: profit take, stop loss and a time limit, scaled by recent volatility. Building both on the same data and comparing class balance, label overlap and model results teaches what each choice does.

                ## Milestones
                1. Fixed-horizon labels built for one universe and horizon.
                2. Triple-barrier labels built on the same data with volatility-scaled barriers.
                3. Class balance and average label length compared for both.
                4. The same model trained on each and the results written up.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A short write-up compares fixed-horizon and triple-barrier labels on the same data, covering balance, overlap and model scores."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Build fixed-horizon labels for one universe"
                - "Build triple-barrier labels with volatility-scaled barriers"
                - "Compare class balance and average label length"
                - "Train the same model on both and write up the difference"
            - name: Sample weights for overlapping labels
              description: |-
                ## Purpose
                When labels span several days, consecutive samples share most of their information, so a model sees the same event many times and grows overconfident. Learning to compute average uniqueness, weight samples by it and bootstrap sequentially gives each sample its fair share and makes ensembles less correlated.

                ## Milestones
                1. Concurrency of labels computed for each timestamp.
                2. Average uniqueness computed per sample and used as a weight.
                3. A bagged model trained with and without uniqueness weights.
                4. Validation results and tree correlation compared and noted.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A notebook computes uniqueness weights and compares a weighted and an unweighted bagged model on purged validation."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Count overlapping labels at each timestamp"
                - "Compute average uniqueness per sample"
                - "Train a bagged model with and without the weights"
                - "Note the effect on validation scores and tree correlation"
            - name: Fractional differencing for stationary features
              description: |-
                ## Purpose
                Taking returns makes a price series stationary but throws away its memory, while using raw prices keeps memory but breaks most models. Fractional differencing finds the smallest differencing order that passes a stationarity test, and trying it on a few series shows when that trade-off actually helps a model.

                ## Milestones
                1. Fractional differencing implemented with a fixed-width window.
                2. The minimum order passing a unit root test found for three series.
                3. Correlation of each transformed series with the original recorded.
                4. One model trained on returns and on the fractionally differenced feature, and compared.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Minimum stationary differencing orders are recorded for three series, with a model comparison against plain returns."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Implement fixed-window fractional differencing"
                - "Find the minimum order that passes a unit root test"
                - "Record correlation with the original series"
                - "Compare a model on returns against one on the new feature"
            - name: Feature importance with MDI, MDA and SHAP
              description: |-
                ## Purpose
                Impurity-based importance from tree models favours features with many split points, permutation importance can be fooled by correlated features, and SHAP values explain predictions rather than performance. Running all three on the same model, with purged folds, shows where they agree and teaches which question each one actually answers.

                ## Milestones
                1. Mean decrease impurity computed on a trained tree ensemble.
                2. Mean decrease accuracy computed out of fold on purged splits.
                3. SHAP summary values computed for the same model.
                4. A table comparing the three rankings with notes on disagreements.

                ## Notes
                Importance computed in-sample tells you what the model memorised. Use out-of-fold importance for decisions about features.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A comparison table of MDI, MDA and SHAP rankings for one model exists, with written notes on where and why they disagree."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Compute impurity importance on a trained tree ensemble"
                - "Compute permutation importance out of fold on purged splits"
                - "Compute SHAP summary values for the same model"
                - "Tabulate the three rankings and explain the disagreements"
            - name: Gradient boosted trees on cross-sectional returns
              description: |-
                ## Purpose
                Gradient boosted trees are the workhorse of tabular financial machine learning, and they are also the easiest way to overfit a noisy cross-section. Working through one well-specified model, with cross-sectional normalisation, shallow trees, strong regularisation, early stopping on a purged fold and comparison with the linear baseline, builds the instincts the defaults do not give you.

                ## Milestones
                1. Features ranked or normalised within each date.
                2. A boosted model trained with shallow trees and early stopping on a purged validation fold.
                3. Learning rate, depth and regularisation effects recorded.
                4. Results compared with the linear baseline on identical folds.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A boosted model on cross-sectionally normalised features is compared with the linear baseline on identical purged folds, with tuning effects written up."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Normalise or rank features within each date"
                - "Train a boosted model with shallow trees and early stopping"
                - "Record how depth, learning rate and regularisation change scores"
                - "Compare with the linear baseline on identical folds"
            - name: Regularised linear models and shrinkage
              description: |-
                ## Purpose
                Ridge, lasso and elastic net are the models most likely to survive contact with live financial data, and they are often dismissed too quickly. Learning how penalty strength trades bias for variance, how shrinkage behaves with correlated signals and how to choose the penalty on purged folds gives a strong default that complex models have to beat.

                ## Milestones
                1. Ridge, lasso and elastic net fitted on the same standardised features.
                2. Penalty strength chosen on purged validation folds.
                3. Coefficient paths plotted against penalty strength.
                4. Stability of selected features checked across folds.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three regularised linear models are fitted with penalties chosen on purged folds, and feature stability across folds is recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Standardise features using training-fold statistics only"
                - "Fit ridge, lasso and elastic net on the same features"
                - "Choose the penalty strength on purged folds"
                - "Plot coefficient paths and check feature stability"
            - name: Probability calibration and capped bet sizing
              description: |-
                ## Purpose
                Classifier outputs are rarely true probabilities, and sizing positions directly from uncalibrated scores puts the most money on the predictions the model is most wrong about. Calibrating outputs on held-out data, checking reliability plots and mapping probabilities to sizes through a capped function connects the model to the sizing rule safely.

                ## Milestones
                1. A reliability plot of raw model probabilities on held-out data.
                2. Calibration fitted on a separate fold using isotonic or sigmoid methods.
                3. A sizing function from calibrated probability to position with a hard cap.
                4. Size distribution checked against the written position limits.

                ## Notes
                Calibration needs its own data. Fitting it on the validation fold you used for model selection reintroduces optimism.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A calibrated model with a reliability plot and a capped sizing function exists, and every size it produces sits within the written limits."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Draw a reliability plot of raw probabilities"
                - "Fit calibration on a separate held-out fold"
                - "Write a capped function from probability to position size"
                - "Check sizes against the written position limits"
                - "Redraw the reliability plot on recent live predictions @recurring(quarterly)"
            - name: Sequence models for financial time series
              description: |-
                ## Purpose
                Recurrent networks and transformers promise to find structure in raw price sequences, but on daily data with a few thousand independent samples they mostly learn noise. Testing one carefully against the linear and boosted baselines, with the same purged folds and the same cost-aware evaluation, settles whether the extra machinery earns its keep on your problem.

                ## Milestones
                1. A small sequence model trained on the same target and folds as the baselines.
                2. Training curves inspected for memorisation.
                3. Results compared with baselines net of costs.
                4. A written decision on whether sequence models stay in the toolkit for this target.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of a sequence model against both baselines on identical folds ends with a recorded keep or drop decision."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Train a small sequence model on the agreed target and folds"
                - "Inspect training and validation curves for memorisation"
                - "Compare net-of-cost results with both baselines"
                - "Record the keep or drop decision with reasons"
            - name: Meta-labelling on top of a primary rule
              description: |-
                ## Purpose
                Asking a model to predict direction from scratch is hard; asking it whether to act on a signal a simple rule already gives, and how much, is often easier. Building a meta-labelling layer over an existing primary rule tests whether a model can raise precision by filtering bad trades, while keeping the economic logic in the rule.

                ## Milestones
                1. A primary rule chosen and its signals generated over history.
                2. Meta-labels built marking which primary signals would have hit their target.
                3. A secondary model trained to predict the meta-label on purged folds.
                4. Precision, recall and net results compared with the primary rule alone.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A meta-labelling model is compared with the primary rule alone on purged folds, with precision and net results recorded and a decision taken."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Choose a primary rule and generate its historical signals"
                - "Label which primary signals would have succeeded"
                - "Train a secondary model on the meta-labels with purged folds"
                - "Compare precision and net results with the rule alone"
            - name: Loss function choice for ranking or regression
              description: |-
                ## Purpose
                Squared error chases the largest returns, which are mostly noise and outliers, while the portfolio usually only cares about ordering within a date. Trying a regression loss, a classification loss and a ranking loss on the same target shows which one tracks your trading metric, and the answer is often not the default.

                ## Milestones
                1. The same model family trained with regression, classification and ranking objectives.
                2. Each scored on the primary model metric and the portfolio metric.
                3. Sensitivity to outlier returns checked for each loss.
                4. The chosen loss written into the model protocol with the reason.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three losses are compared on the same folds and metrics, and the chosen one is recorded in the protocol with its reason."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Train one model family with a regression objective"
                - "Train it again with classification and ranking objectives"
                - "Compare all three on model and portfolio metrics"
                - "Write the chosen loss and reason into the protocol"
            - name: Choosing an ML research stack
              description: |-
                ## Purpose
                Research stacks built from whatever each person happened to install make results hard to share and harder to reproduce. Choosing deliberately between data frame libraries, boosting libraries, deep learning frameworks, tracking tools and compute options, against criteria such as speed on your data size, reproducibility and how the engineers will deploy it, saves months of friction.

                ## Milestones
                1. Requirements written: data size, model families, deployment target, team skills.
                2. Two or three options per layer listed with their trade-offs.
                3. A small benchmark run on your own data for the contested choices.
                4. A decision recorded and an environment file published.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded stack decision with benchmarks on your own data and a published environment file that new work uses."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write the stack requirements in one page"
                - "List two or three options per layer with trade-offs"
                - "Benchmark the contested choices on your own data"
                - "Publish the decision and a shared environment file"
            - name: Turnover and cost aware model outputs
              description: |-
                ## Purpose
                Models retrained or rescored daily tend to produce jumpy predictions, and a signal that flips positions every day can lose its whole edge to trading costs. Adding smoothing, a turnover penalty or a no-trade band to the model output, and measuring net results at each setting, finds the point where cost savings outweigh lost signal.

                ## Milestones
                1. Daily turnover implied by raw predictions measured.
                2. Smoothing and no-trade band variants defined.
                3. Net-of-cost results compared across variants.
                4. The chosen setting recorded in the model protocol.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Net-of-cost results for raw and smoothed outputs are compared and the chosen smoothing or band is written into the protocol."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Measure turnover implied by raw predictions"
                - "Define smoothing and no-trade band variants"
                - "Compare net-of-cost results across variants"
                - "Record the chosen setting in the protocol"
            - name: Combinatorial purged cross-validation trial
              description: |-
                ## Purpose
                A single walk-forward path gives one estimate of performance, and one estimate on noisy data can be badly unlucky or lucky. Combinatorial purged cross-validation builds many backtest paths from the same data, giving a distribution of outcomes and a clearer view of how fragile a model is.

                ## Milestones
                1. Data split into groups with purging and embargo applied.
                2. All train and test combinations generated and the model fitted on each.
                3. Backtest paths reconstructed and a distribution of Sharpe or IC plotted.
                4. Results compared with the single walk-forward estimate.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A distribution of performance across combinatorial purged paths is plotted and compared with the single walk-forward estimate."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Split the data into groups with purging and embargo"
                - "Fit the model on every train and test combination"
                - "Rebuild backtest paths and plot the distribution"
                - "Compare the distribution with the walk-forward result"
            - name: Feature pruning by stability across folds
              description: |-
                ## Purpose
                Features that matter in one fold and vanish in the next are usually noise the model memorised. Pruning features whose importance or sign is unstable across purged folds and time periods, then retraining, often loses little validation score and gains a model that behaves more predictably live.

                ## Milestones
                1. Out-of-fold importance and coefficient sign recorded per feature and fold.
                2. A stability rule written, such as same sign in most folds.
                3. Unstable features removed and the model retrained.
                4. Scores before and after pruning compared.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A pruned feature set is defined by a written stability rule and its model is compared with the full model on the same folds."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Record importance and sign per feature for each fold"
                - "Write a stability rule before looking at the results"
                - "Retrain without the unstable features"
                - "Compare scores before and after pruning"
            - name: Simpler model retention test
              description: |-
                ## Purpose
                Complex models cost more to run, explain and monitor, and in finance they often win in validation by a margin smaller than the noise. A formal test that asks whether the complex model beats the simpler one by more than the seed spread, after costs and on recent data, protects the team from carrying complexity it has not earned.

                ## Milestones
                1. The simplest acceptable model and the current best model named.
                2. Both scored on the most recent out-of-sample period net of costs.
                3. The difference compared with the seed spread and fold variation.
                4. A written decision to keep the simple model unless the margin is clear.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison shows whether the complex model beats the simple one by more than seed and fold variation, with the kept model named."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Name the simplest acceptable model and the current best"
                - "Score both on the latest out-of-sample period after costs"
                - "Compare the gap with seed and fold variation"
                - "Record which model is kept and why"
            - name: Model go-live review with a written decision
              description: |-
                ## Purpose
                The step from validated model to capital is where shortcuts cost the most. A go-live review that walks through the target, leakage checklist, validation scheme, trial count, baselines, risk limits and stop rule, with a reviewer who did not build the model, ends with a recorded go, shadow or no-go decision.

                ## Milestones
                1. A review pack covering target, validation, trial count, baselines and risk limits.
                2. A reviewer independent of the build named and given the pack in advance.
                3. The leakage checklist walked through in the meeting.
                4. A go, shadow or no-go decision recorded with conditions.

                ## Notes
                Start from the **Meeting notes** template. Shadow mode, scoring live without trading, is a sensible default for a first model.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A go-live meeting with an independent reviewer has produced recorded go, shadow or no-go minutes with conditions attached."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Assemble the review pack from the protocol and tracker"
                - "Name an independent reviewer and send the pack ahead"
                - "Walk through the leakage checklist in the meeting"
                - "Record the decision and its conditions @priority(high)"
            - name: Research presentation of an ML signal
              description: |-
                ## Purpose
                Presenting a model to colleagues is where weak validation gets found, if the talk is built to invite it. A twenty-minute presentation that leads with the target and the validation scheme, shows baselines and trial counts before the headline score, and ends with known weaknesses earns better questions and more trust than a polished equity curve.

                ## Milestones
                1. A slide order agreed: target, data, validation, baselines, results, weaknesses.
                2. Trial count and seed spread shown before the headline result.
                3. A rehearsal with one colleague and their hardest question answered.
                4. Questions from the session logged with follow-up actions.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The presentation has been given, with baselines and trial counts shown, and every question logged with a follow-up action."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Draft the slide order with weaknesses as the final section"
                - "Add the trial count and seed spread before the results"
                - "Rehearse with one colleague and note their hardest question"
                - "Log questions from the session with follow-up actions"
            - name: Annual review of every model in use
              description: |-
                ## Purpose
                Once a year, every model still producing predictions should justify itself again from scratch: is the target still the right one, does it still beat the baselines, has decay been steady, and does anyone still use it. A yearly review with a keep, rebuild or switch-off outcome for each model keeps the inventory lean.

                ## Milestones
                1. Every model in the inventory scored against baselines on the past year.
                2. Decay charts and drift reports for the year gathered per model.
                3. Users of each model confirmed.
                4. A keep, rebuild or switch-off decision recorded for each model.
              priority: medium
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "Every model in the inventory has a dated keep, rebuild or switch-off decision from this year's review."
                cadence: cyclic
              tasks:
                - "Book the annual model review @recurring(yearly)"
                - "Score each model against baselines on the past year"
                - "Confirm who still uses each model"
                - "Record keep, rebuild or switch-off for every model"
            - name: Workshop or conference paper on an ML result
              description: |-
                ## Purpose
                Writing up a financial machine learning result for a workshop or conference forces the validation to stand up to strangers, and it builds a public record for a career. Choosing a venue, checking what your employer allows to be published, and writing the method section before the results section keeps the paper honest.

                ## Milestones
                1. A venue chosen and its deadline and format noted.
                2. Publication permission confirmed with your employer or supervisor.
                3. A draft with method, validation and trial counts complete.
                4. The paper submitted and reviewer comments logged.

                ## Notes
                Use public data only unless you have written permission. Proprietary features and results stay inside the firm.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A paper using permitted data is submitted to a named venue, with reviewer comments logged when they arrive."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Pick a venue and note its deadline and format"
                - "Confirm in writing what you may publish"
                - "Write the method and validation sections first"
                - "Submit the paper and log reviewer comments"
            - name: ML finance project write-up for a portfolio
              description: |-
                ## Purpose
                Hiring managers for quant machine learning roles look for evidence that you know where financial data breaks standard methods. A write-up of one public-data project that shows the target definition, purged validation, baselines, trial count and what did not work is stronger than a repository of impressive accuracy numbers.

                ## Milestones
                1. One project chosen that uses only public or freely licensed data.
                2. A write-up covering target, validation, baselines, trial count and failures.
                3. Code cleaned so the main result reproduces from one command.
                4. The write-up shared with one reviewer and revised.

                ## Notes
                Start from the **Portfolio piece** template. A clear account of a negative result reads well to experienced reviewers.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A public write-up and reproducible code for one ML finance project exist, reviewed by at least one other person."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Choose one project built only on public data"
                - "Ask the agent to draft an outline from your research notes"
                - "Make the main result reproduce from one command"
                - "Share the write-up with a reviewer and revise it"
            - name: Adapting from tech ML to financial data
              description: |-
                ## Purpose
                Engineers and data scientists arriving from recommendation, vision or advertising work bring strong tooling but habits that fail in finance: random train and test splits, trusting large validation gains, and assuming more data from the same period means more information. A short structured adjustment, built around rebuilding one familiar pipeline the financial way, shortens the painful first months.

                ## Milestones
                1. A list of habits from previous work that break on financial data.
                2. One familiar model rebuilt with point-in-time features and purged folds.
                3. The score drop from random to purged splits measured and understood.
                4. A one-page personal checklist for financial data problems.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One model has been rebuilt with point-in-time features and purged folds, and a personal checklist of finance-specific pitfalls is written."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List habits from previous ML work that may fail here"
                - "Rebuild one familiar model with purged folds"
                - "Measure the score drop from random to purged splits"
                - "Write a one-page checklist of finance-specific pitfalls"
            - name: Solo ML research on a laptop and free data
              description: |-
                ## Purpose
                Independent researchers and students rarely have tick data or a GPU cluster, and the temptation is to compensate with ever more complex models on daily bars. A setup built around a modest universe of liquid instruments, free or low-cost daily data with its gaps documented, light models and a strict trial budget produces work that is honest and shareable.

                ## Milestones
                1. A free or low-cost data source chosen with its known gaps and survivorship issues noted.
                2. A universe of liquid instruments fixed in advance.
                3. A pipeline that trains the baseline in minutes on a laptop.
                4. A monthly trial budget written and kept.

                ## Notes
                Free price data often drops delisted names. Say so plainly in any result you share, and treat it as research, not a trading plan.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A laptop pipeline trains the baseline on a fixed universe in minutes, with data gaps documented and a written monthly trial budget."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pick a data source and note its gaps and survivorship issues"
                - "Fix a universe of liquid instruments in writing"
                - "Build a pipeline that trains the baseline in minutes"
                - "Write a monthly trial budget and pin it to the project"
            - name: Handoff spec from research model to production
              description: |-
                ## Purpose
                Models fail in production most often at the seam between the researcher's notebook and the engineer's service: a feature computed slightly differently, a missing value filled another way, a timestamp in a different time zone. A handoff specification with exact feature definitions, input timing, expected output ranges and parity tests closes that seam for the engineer deploying the model.

                ## Milestones
                1. Every feature defined exactly, including missing value handling and time zone.
                2. Input availability times and the scoring schedule written down.
                3. Expected output ranges and a sample of research predictions supplied.
                4. A parity test showing production and research predictions match within tolerance.

                ## Notes
                Run research and production scoring side by side for a few weeks before switching. Parity failures almost always come from feature code, not the model.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A handoff spec exists and a parity test shows production predictions match research predictions within the agreed tolerance."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write exact definitions for every feature, including missing values"
                - "Document input availability times and the scoring schedule"
                - "Supply a sample of research predictions with expected ranges"
                - "Run a parity test between research and production scores"
            - name: Review standards for a small ML research team
              description: |-
                ## Purpose
                Leading two to six researchers means setting the bar for when a model result counts, otherwise each person invents their own. A short house standard covering target definition, purged validation, baselines, trial logging and the leakage checklist, with a review step before results are shared, makes the team's work comparable and defensible.

                ## Milestones
                1. A one-page house standard drafted with the team.
                2. A review step agreed before any result is shown outside the team.
                3. Two existing projects reviewed against the standard.
                4. The standard revised after those reviews and dated.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A dated house standard exists and at least two projects have been reviewed against it before results left the team."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Draft a one-page house standard with the team"
                - "Agree the review step before results leave the team"
                - "Review two current projects against the standard"
                - "Revise and date the standard after the reviews"
                - "Review one result against the house standard before it is shared @recurring(monthly:19)"
            - name: Explaining a model to a portfolio manager
              description: |-
                ## Purpose
                Portfolio managers and risk committees will not run a model they cannot reason about, and a SHAP plot alone rarely persuades them. A short explanation pack that links the main drivers to economic intuition, shows when the model is expected to struggle and states the stop rule gives a non-specialist what they need to say yes or no.

                ## Milestones
                1. The three to five main drivers described in plain language with economic reasoning.
                2. Periods where the model performed worst identified and explained.
                3. Risk limits and the stop rule stated on one page.
                4. Questions from the portfolio manager or committee answered in writing.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A one to three page explanation pack has been presented and every question raised has a written answer."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Describe the main drivers in plain language"
                - "Find and explain the model's worst periods"
                - "Put risk limits and the stop rule on one page"
                - "Answer each question raised in writing"
            - name: Mentoring a junior researcher on financial ML
              description: |-
                ## Purpose
                Junior researchers usually learn the hard rules of financial machine learning by making each mistake once in front of a portfolio manager. A twelve-week pairing with fortnightly sessions, one shared project and a review of their first validation scheme passes on the leakage checklist and the trial discipline before it costs anything.

                ## Milestones
                1. A twelve-week plan agreed with a short weekly check-in and a longer fortnightly session.
                2. One shared project with a written target and purged folds.
                3. The junior's first validation scheme reviewed line by line.
                4. A closing note on what to practise next.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Six fortnightly sessions have been held and the junior's first validation scheme has a written review."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Agree a twelve-week plan and book the first session"
                - "Hold a short weekly check-in on the shared project @recurring(weekly:wed)"
                - "Review the junior's validation scheme line by line"
                - "Write a closing note on what to practise next"
            - name: Text and news features with language models
              description: |-
                ## Purpose
                Filings, earnings call transcripts and news contain information prices absorb unevenly, and language models make turning text into features easy, which also makes leakage easy. Building text features with strict publication timestamps, a model whose training cut-off precedes the test period, and a comparison against simple word-count baselines shows whether the text adds anything.

                ## Milestones
                1. A text source chosen with exact publication timestamps verified.
                2. A language model chosen whose training data ends before the test period, or the risk noted.
                3. Embedding or sentiment features built and aligned point in time.
                4. Results compared with a simple dictionary-based baseline on purged folds.

                ## Notes
                A large model trained on text from after your test period may already know what happened. Treat that as look-ahead and say so in any write-up.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Point-in-time text features are compared with a dictionary baseline on purged folds, with the language model's training cut-off documented."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Verify publication timestamps for the chosen text source"
                - "Check the language model's training cut-off against the test period"
                - "Build embedding or sentiment features aligned point in time"
                - "Compare with a dictionary-based baseline on purged folds"
            - name: Regime detection with unsupervised methods
              description: |-
                ## Purpose
                Clustering and hidden Markov models are popular for labelling market regimes, but regimes fitted on the full history are labelled with hindsight and look far more useful than they are. Fitting regime models only on data available at each date, and testing whether the live regime label improves a downstream model, separates a useful conditioning variable from a pretty chart.

                ## Milestones
                1. A regime model fitted on an expanding window, never the full sample.
                2. Regime labels compared between full-sample and expanding-window fits.
                3. A downstream model trained with and without the regime feature.
                4. A written decision on whether the regime feature stays.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An expanding-window regime model is tested as a feature in a downstream model, and a keep or drop decision is recorded."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Fit the regime model on an expanding window"
                - "Compare its labels with a full-sample fit"
                - "Train a downstream model with and without the regime feature"
                - "Record whether the regime feature stays"
            - name: Reinforcement learning claims under scrutiny
              description: |-
                ## Purpose
                Reinforcement learning trading agents look impressive in papers and demos, yet many are trained and tested on the same simulated market with costs and market impact left out. Reproducing one published agent, then adding realistic costs, a held-out period and the baseline it should beat, is the fastest way to judge whether the approach deserves research time on your problem.

                ## Milestones
                1. One published agent chosen and its environment reproduced.
                2. Realistic costs and a held-out test period added.
                3. The agent compared with a simple rule and the linear baseline.
                4. A written verdict on whether to pursue reinforcement learning further.

                ## Notes
                Simulators without market impact reward agents that trade far too often. Check turnover before believing any result.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One published agent is re-tested with realistic costs and a held-out period against simple baselines, with a written verdict."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Pick one published agent and reproduce its environment"
                - "Add realistic costs and a held-out test period"
                - "Compare the agent with a simple rule and the linear baseline"
                - "Write a verdict on pursuing the approach further"
            - name: Online learning and concept drift handling
              description: |-
                ## Purpose
                Some targets change fast enough that quarterly retraining is too slow, and online or incrementally updated models adapt continuously, at the cost of chasing noise. Comparing a fixed model, a rolling-window refit and an online learner with a controlled update rate, on the same recent period, shows how much adaptivity your problem rewards.

                ## Milestones
                1. A fixed model, rolling refit and online learner defined on the same target.
                2. Update rates or window lengths chosen before testing.
                3. All three scored on the most recent out-of-sample period net of costs.
                4. A decision recorded on the update approach for this target.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Fixed, rolling and online variants are compared on the same recent period with costs, and the chosen update approach is recorded."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Define fixed, rolling and online variants of one model"
                - "Choose window lengths and update rates before testing"
                - "Score all three on the latest period after costs"
                - "Record the chosen update approach and why"
---

# Machine Learning for Finance

Machine learning for finance is the craft of fitting flexible models to data where the signal is faint, the samples overlap and the world changes under you, written for researchers who build the models and engineers who put them into production. It starts with foundations (a fixed target, simple baselines, point-in-time features, purged cross-validation, experiment tracking and written risk limits), then the routines that catch drift and decay, the skills behind labelling, sample weights and feature importance, the decisions about loss functions, meta-labelling and research stacks, the review moments before a model counts, setups for people arriving from tech, solo researchers and team leads, and a few specialist topics such as text features, regimes and reinforcement learning.

The rhythms are a weekly review of model runs, monthly checks on feature drift, prediction decay, labels and the reading queue, and quarterly retraining, inventory and feature library work, with a yearly look at every model still in use. Most strategies fail out of sample and machine learning makes that easier to hide, so the plan carries risk limits, a sizing rule and a written stop rule, and pairs with the Metrics log, Reading queue, Risk register, Meeting notes and Portfolio piece templates; none of it is trading or investment advice. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
