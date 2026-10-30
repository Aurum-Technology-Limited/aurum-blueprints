---
id: data-analytics.time-series-forecasting
name: Time Series Forecasting
description: "Benchmarks, backtests and honest error tracking first, then a monthly forecasting rhythm, core models, ranges, reconciliation and specialist methods for demand, revenue and traffic forecasts."
category: business
version: 1.0.0
tags: [data-analytics, time-series-forecasting, knowledge-worker, researcher, team, demand-forecasting, forecast-accuracy, seasonality]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - risk-register
    - reading-queue
    - purchase-decision
    - meeting-notes
  pillars:
    - name: Data & Analytics
      emoji: "📊"
      description: "Turning data into decisions: metrics and dashboards, data pipelines and warehouses, experimentation, forecasting and modelling, machine learning, data quality and governance."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Time Series Forecasting
          description: "Forecasting values like demand, revenue or traffic over time using seasonal and statistical models, and tracking forecast error honestly."
          projects:
            - name: Forecast purpose and decision brief
              description: |-
                ## Purpose
                Before any model is fitted, someone has to say which decision the forecast feeds: a stock order placed eight weeks ahead, a hiring plan, a quarterly revenue guide. That decision fixes the horizon, the time bucket, the lead time and the cost of being wrong in each direction, and most forecasting disputes trace back to these never being written down. A one-page brief settles them before effort goes into methods.

                ## Milestones
                1. The decision the forecast supports named, with who makes it and when.
                2. Horizon, time bucket (day, week or month) and forecast level written down.
                3. The lead time between issuing the forecast and making the decision recorded.
                4. The relative cost of over-forecasting and under-forecasting described in a sentence each.
                5. The brief agreed by the person who will use the numbers.

                ## Notes
                If two teams want different horizons or levels from one forecast, write two briefs. A forecast tuned for an annual budget is rarely the right one for weekly replenishment.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A signed-off one-page brief states the decision, horizon, time bucket, forecast level, lead time and the cost of error in each direction."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down the decision the forecast will feed and who makes it"
                - "Ask the decision owner how far ahead and at what level they need numbers"
                - "Estimate what an over-forecast and an under-forecast each cost"
                - "Circulate the one-page brief and record the user's sign-off"
            - name: Clean history of the target series
              description: |-
                ## Purpose
                Models learn whatever the history says, including the month the definition of revenue changed and the week the warehouse system double-counted orders. Pulling at least two full seasonal cycles from one source, under a single consistent definition, is the groundwork every later project depends on.

                ## Milestones
                1. The series defined in one sentence, with its source table or report named.
                2. At least two years of history extracted at the agreed time bucket, or as much as exists.
                3. Gaps, duplicates and definition changes listed with dates.
                4. A cleaned series saved with a note of every adjustment made.
                5. The cleaned totals reconciled to an independent report within an agreed tolerance.

                ## Notes
                Keep the raw extract untouched beside the cleaned version. You will want to revisit adjustments when a forecast misses.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A cleaned history covering at least two seasonal cycles is saved beside the raw extract, with an adjustment log and a reconciliation to an independent report."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write a one-sentence definition of the series and its source"
                - "Extract the full available history at the agreed time bucket"
                - "List gaps, duplicates and definition changes with their dates"
                - "Reconcile the cleaned yearly totals to a finance or system report"
            - name: Decomposing the series into trend and seasonality
              description: |-
                ## Purpose
                Looking hard at the data before modelling saves weeks. A time plot, a seasonal plot and an STL decomposition show whether the trend is steady or bending, whether the seasonal swing grows with the level, and how noisy the remainder is, which together point to the families of model worth trying.

                ## Milestones
                1. A time plot of the full history with major events annotated.
                2. A seasonal plot or subseries plot showing each season's typical shape.
                3. An STL or classical decomposition saved with trend, seasonal and remainder panels.
                4. A short written reading: additive or multiplicative seasonality, trend shape, and how much of the variation is noise.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A decomposition chart pack and a half-page written reading of trend, seasonality and noise are saved with the cleaned history."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Plot the full history and mark known events on it"
                - "Draw a seasonal plot comparing each year on the same axis"
                - "Run an STL decomposition and save the three panels"
                - "Write a half-page note on what the decomposition shows"
            - name: Naive and seasonal naive benchmark forecasts
              description: |-
                ## Purpose
                Plenty of sophisticated forecasts lose to 'same as last week' or 'same as this month last year', and nobody notices because no benchmark was ever run. Producing the naive, seasonal naive and simple mean forecasts first gives every later model a bar to clear and an honest answer to whether the modelling effort pays.

                ## Milestones
                1. Naive, seasonal naive and mean forecasts produced for the agreed horizon.
                2. Each benchmark's error calculated on the same holdout period.
                3. The best benchmark named as the bar any new model must beat.
                4. The benchmark results stored where the next model comparison can reuse them.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three benchmark forecasts are scored on one holdout, and the best is recorded as the minimum standard for any proposed model."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Produce a naive forecast that repeats the last observed value"
                - "Produce a seasonal naive forecast from the same period last cycle"
                - "Score each benchmark on the holdout with the agreed error measure"
                - "Record the winning benchmark as the bar for future models"
            - name: Forecast error metric selection
              description: |-
                ## Purpose
                MAPE is the default in many reports and misbehaves badly: it explodes near zero, it is asymmetric in a way that favours forecasts running low, and it cannot be averaged across series of different scale without care. Choosing two or three measures on purpose, usually a scaled error such as MASE, a volume-weighted one such as WAPE, and a bias measure, stops accuracy conversations going round in circles.

                ## Milestones
                1. The strengths and failure cases of MAE, RMSE, MAPE, WAPE and MASE written in a one-page comparison.
                2. A primary accuracy measure and a bias measure chosen and justified.
                3. The exact formulas, including how zeros and aggregation are handled, documented.
                4. The chosen measures agreed with the forecast's main users.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A documented choice of one primary accuracy measure and one bias measure, with formulas and zero handling, is agreed with the forecast's users."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the error measures currently quoted in reports about this forecast"
                - "Test MAPE on a low-volume series to see how zeros distort it"
                - "Write formulas for the chosen accuracy and bias measures"
                - "Agree the measures with the main users and record the decision"
            - name: Rolling-origin backtest harness
              description: |-
                ## Purpose
                Scoring a model on one holdout year is a single draw of luck. A rolling-origin backtest refits the model at many forecast origins and scores each horizon separately, which shows how error grows with lead time and whether a model's win was consistent or a fluke.

                ## Milestones
                1. Forecast origins, horizon and refit frequency chosen to match how the forecast is really issued.
                2. A harness that refits each candidate at every origin and stores forecasts by origin and horizon.
                3. Error tables broken down by horizon for each candidate model.
                4. The benchmark forecasts run through the same harness for comparison.

                ## Notes
                Never let information from after the origin leak into a backtest. Refit any scaling, outlier cleaning or feature engineering inside each fold, and use the driver values that were known at the time.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A reusable backtest produces error by horizon for each candidate model across at least six forecast origins, with no future information used."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Choose forecast origins that mirror the real issuing schedule"
                - "Write the loop that refits and forecasts at each origin"
                - "Store every forecast with its origin date and horizon"
                - "Run the benchmarks through the harness and tabulate error by horizon"
            - name: Calendar and events table for forecasting
              description: |-
                ## Purpose
                Easter moves, Ramadan shifts by about eleven days a year, and a promotion in week 12 last year makes this year's week 12 look like a collapse. A single dated table of holidays, promotions, price changes and closures lets models and people explain the history and plan for known future events.

                ## Milestones
                1. Public holidays for every market in scope listed for the history and the forecast horizon.
                2. Past promotions, price changes, launches and closures added with dates.
                3. Each event tagged with a type the models can use as a regressor or flag.
                4. An owner named for adding new events before they happen.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated events table covers the full history and horizon, with typed events and a named owner who adds the next year's events annually."
                cadence: rolling
              tasks:
                - "Download public holiday dates for each market in scope"
                - "Ask marketing for the dates of past promotions and price changes"
                - "Tag each event with a type usable as a model flag"
                - "Add next year's holidays and planned promotions @recurring(yearly)"
            - name: Outliers and structural breaks log
              description: |-
                ## Purpose
                Stockouts, system migrations, a lockdown and a one-off bulk order all leave marks a model will happily learn as pattern. Logging each anomaly with a decision (keep, adjust or flag as a regressor) makes the cleaning repeatable and defensible when someone asks why the history was changed.

                ## Milestones
                1. Every known anomaly in the history listed with dates and cause.
                2. A treatment decision recorded for each: keep, adjust, remove or model with a flag.
                3. Structural breaks identified where the series level or pattern changed for good.
                4. The log reviewed whenever a new anomaly appears in the actuals.

                ## Notes
                Removing an outlier that will recur, such as an annual clearance sale, makes the forecast worse. Model it as an event instead.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A log lists every anomaly in the history with its cause and treatment, and new anomalies are added within a month of appearing."
                cadence: rolling
              tasks:
                - "Scan the decomposition remainder for spikes and level shifts"
                - "Ask the operations team about the causes of the five biggest spikes"
                - "Record a treatment decision for each anomaly"
                - "Add any new anomalies from the latest actuals to the log @recurring(monthly:20)"
            - name: Forecast level and hierarchy decision
              description: |-
                ## Purpose
                Forecasting every product in every store each day is noisy and slow; forecasting only the company total hides what operations actually need. Deciding the level at which models are built, and how numbers move up and down the product, location and time hierarchy, prevents three teams building three incompatible forecasts.

                ## Milestones
                1. The product, location and time hierarchy drawn as a simple tree.
                2. The level each consumer of the forecast needs marked on the tree.
                3. A modelling level chosen with a reason, plus how other levels will be derived.
                4. The decision shared with every team that consumes the forecast.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision states the modelling level and how other hierarchy levels are derived, and is shared with every consuming team."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Sketch the product, location and time hierarchy"
                - "Mark the level each forecast consumer works at"
                - "Compare forecast noise at two candidate levels using the history"
                - "Write up the chosen level and how other levels are derived"
            - name: Monthly forecast refresh cycle
              description: |-
                ## Purpose
                A forecast that is refreshed whenever someone remembers is soon trusted by nobody. A fixed monthly cycle, with a data cut-off date, a model run, a review and a publication day, gives users a predictable rhythm and gives the forecaster a clear record of what changed and why.

                ## Milestones
                1. Cut-off, run, review and publish days fixed in the calendar.
                2. A checklist covering data load, model run, sanity checks and sign-off.
                3. Each published forecast accompanied by a short note of what moved and why.
                4. Three consecutive cycles published on schedule.

                ## Notes
                Keep the change note to five lines: the headline number, its move since last month, and the two or three drivers behind the move.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Forecasts have been published on the fixed monthly day for three consecutive cycles, each with a change note."
                cadence: rolling
              tasks:
                - "Fix the cut-off, run, review and publish days with the forecast users"
                - "Write the refresh checklist from data load to sign-off"
                - "Load the closed month's actuals and rerun the forecast @recurring(monthly:3)"
                - "Publish the forecast with a five-line change note @recurring(monthly:6)"
            - name: Forecast accuracy tracking log
              description: |-
                ## Purpose
                Without a running record of forecast against actual, accuracy is argued from memory and the most recent miss. Logging each period's error at the horizons that matter, beside the benchmark, shows whether the forecast is improving and where it fails.

                ## Milestones
                1. A log with one row per period, forecast level and horizon, holding forecast, actual and error.
                2. The benchmark forecast's error logged alongside for comparison.
                3. A rolling twelve-period accuracy figure calculated for each horizon.
                4. A quarterly accuracy summary shared with the forecast's users.

                ## Notes
                Start from the **Metrics log** template. Log the forecast as issued, never a version recalculated later with hindsight.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The log holds forecast, actual and benchmark error for every period since setup, and a quarterly summary has been shared at least once."
                cadence: rolling
              tasks:
                - "Set up the log with columns for forecast, actual, horizon and benchmark"
                - "Enter last month's actuals and errors against each issued forecast @recurring(monthly:9)"
                - "Send a quarterly accuracy summary to the forecast's users @recurring(quarterly)"
                - "Flag any horizon where the model has lost to the benchmark twice running"
            - name: Forecast snapshot archive
              description: |-
                ## Purpose
                Once a forecast is overwritten, nobody can prove what was predicted at the time, and accuracy can only be measured against hindsight. Archiving every issued forecast, with the data cut-off, model version and any overrides, is what makes honest error tracking and later post-mortems possible.

                ## Milestones
                1. A storage location and naming convention for forecast snapshots agreed.
                2. Each snapshot stored with issue date, data cut-off, model version and overrides.
                3. Snapshots made read-only once issued.
                4. At least six months of snapshots retrievable on request.
              priority: high
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every forecast issued in the last six months can be retrieved exactly as issued, with its cut-off date and model version."
                cadence: rolling
              tasks:
                - "Choose a storage folder or table and a naming convention for snapshots"
                - "Add issue date, cut-off and model version fields to each snapshot"
                - "Lock this month's issued forecast as a read-only snapshot @recurring(monthly:7)"
                - "Test retrieving a forecast exactly as it was issued three months ago"
            - name: Forecast bias and tracking signal review
              description: |-
                ## Purpose
                Accuracy can look acceptable while the forecast runs consistently high, quietly inflating stock or budgets month after month. Reviewing cumulative error and a tracking signal each month catches persistent bias early, before it becomes a write-off or a missed target.

                ## Milestones
                1. Mean error and cumulative error calculated for each key series.
                2. A tracking signal threshold agreed that triggers an investigation.
                3. Each breach investigated with a recorded cause and fix.
                4. The bias trend shown in the monthly forecast note.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly bias review runs for every key series, and each tracking signal breach has a recorded cause and fix."
                cadence: rolling
              tasks:
                - "Calculate mean and cumulative error for each key series"
                - "Agree a tracking signal threshold that triggers an investigation"
                - "Review this month's bias figures and threshold breaches @recurring(monthly:12)"
                - "Record the cause and fix for each breach"
            - name: Weekly demand forecast run for operations
              description: |-
                ## Purpose
                Replenishment, rotas and dispatch work in weeks, not months, and a monthly forecast split evenly across four weeks ignores paydays, holidays and the shape of the month. A weekly run at the item or site level, published before the ordering cut-off, puts the forecast where operational decisions are actually made.

                ## Milestones
                1. The weekly ordering or planning cut-off confirmed with operations.
                2. A weekly forecast at the agreed item or site level produced automatically.
                3. An exception check that flags series with unusual forecasts before release.
                4. Four weekly runs in a row delivered before the cut-off.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive weekly forecasts were released before the operations cut-off, each with an exception check completed."
                cadence: rolling
              tasks:
                - "Confirm the weekly ordering cut-off time with operations"
                - "Run the weekly forecast and its exception check @recurring(weekly:mon)"
                - "Compare last week's actuals with forecast for the top twenty items @recurring(weekly:thu)"
                - "Send flagged exceptions to the planner with a one-line reason each"
            - name: Forecast assumptions register
              description: |-
                ## Purpose
                Every forecast carries assumptions: a price rise in March, a new site opening in June, a competitor exit, growth in a market that has never been measured. Writing them in one register with an owner and a check date means misses can be traced to a wrong assumption rather than blamed on the model.

                ## Milestones
                1. Each assumption written with its effect on the forecast and its source.
                2. An owner and a check date recorded for every assumption.
                3. Assumptions that proved wrong marked, with the size of their effect on error.
                4. The register reviewed with owners each quarter.

                ## Notes
                Start from the **Risk register** template, renaming the risk columns to assumption, effect and status.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A register lists every forecast assumption with an owner and check date, and has been reviewed with owners at least once a quarter."
                cadence: rolling
              tasks:
                - "List the assumptions behind the current forecast with their sources"
                - "Assign an owner and a check date to each assumption"
                - "Review open assumptions with their owners @recurring(quarterly)"
                - "Mark assumptions that proved wrong and estimate their effect"
            - name: Judgemental override log
              description: |-
                ## Purpose
                Planners and sales leads adjust statistical forecasts all the time, often for good reasons and sometimes from optimism. Logging each override with its reason and size, then scoring it once the actuals arrive, shows which kinds of adjustment add accuracy and which only add bias.

                ## Milestones
                1. An override form capturing who, what, how much and why.
                2. Every override in the period recorded before the forecast is published.
                3. Each override scored against the unadjusted forecast once actuals land.
                4. Override types that consistently hurt accuracy shared with the people making them.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every override for at least three months is logged with a reason and scored against the unadjusted forecast."
                cadence: rolling
              tasks:
                - "Create an override form with fields for size, reason and author"
                - "Ask planners to log overrides before each publication"
                - "Score last month's overrides against the unadjusted forecast @recurring(monthly:15)"
                - "Share which override reasons helped accuracy and which hurt it"
            - name: Quarterly forecasting model review
              description: |-
                ## Purpose
                Models that were the best choice a year ago drift out of fit as the business changes: new channels, new seasonal shapes, a step change in volume. A quarterly review of backtest results, residual diagnostics and open issues decides whether to keep, retune or replace each model, rather than waiting for a public miss.

                ## Milestones
                1. Backtest error for the current model and two challengers updated.
                2. Residuals checked for leftover autocorrelation and seasonality.
                3. A keep, retune or replace decision recorded for each model.
                4. Agreed changes scheduled into the next refresh cycle.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Each quarter has a recorded keep, retune or replace decision for every production forecast model, backed by updated backtest results."
                cadence: cyclic
              tasks:
                - "Rerun the backtest for the current model and two challengers @recurring(quarterly)"
                - "Check residuals for remaining autocorrelation with a Ljung-Box test"
                - "Record a keep, retune or replace decision for each model"
                - "Schedule agreed model changes into the next refresh"
            - name: Annual forecasting calendar and reforecast points
              description: |-
                ## Purpose
                Budgets, mid-year reforecasts and quarterly outlooks all draw on the same forecast, yet each often arrives as a surprise request with a week's notice. Mapping the year's forecasting moments in advance, with the horizon and audience for each, lets the data and models be ready before the request lands.

                ## Milestones
                1. Every recurring forecast deliverable for the year listed with date, audience and horizon.
                2. Preparation start dates set four to six weeks before each deliverable.
                3. The calendar agreed with finance and planning leads.
                4. The calendar rolled forward at the end of each year.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A forecasting calendar for the year lists each deliverable with date, audience and horizon, and is agreed with finance and planning."
                cadence: cyclic
              tasks:
                - "Ask finance for the dates of budget, reforecast and outlook rounds"
                - "List each forecasting deliverable with its audience and horizon"
                - "Put preparation start dates in the team calendar"
                - "Roll the forecasting calendar forward to the next year @recurring(yearly)"
            - name: Exponential smoothing models in practice
              description: |-
                ## Purpose
                Exponential smoothing, from simple smoothing through Holt-Winters to the full ETS family, still performs strongly on monthly business data and is fast enough to run on thousands of series. Learning what each component (error, trend, seasonality, damping) does, and fitting them to your own history, gives you a dependable workhorse.

                ## Milestones
                1. Simple, Holt and Holt-Winters models fitted to your own series.
                2. The difference between additive and multiplicative seasonality shown on a real example.
                3. A damped trend compared with an undamped one over a long horizon.
                4. An automatically selected ETS model scored in the backtest against the benchmarks.

                ## Notes
                Damped trends are a sensible default for horizons beyond a year; undamped trends extrapolate growth forever.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An ETS model has been fitted to your own series and scored in the backtest against the naive benchmarks, with results written up."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Read an introductory chapter on exponential smoothing"
                - "Fit simple, Holt and Holt-Winters models to your cleaned series"
                - "Compare damped and undamped trend forecasts two years out"
                - "Score the automatically selected ETS model in the backtest"
            - name: ARIMA and seasonal ARIMA fundamentals
              description: |-
                ## Purpose
                ARIMA models describe a series through its own past values and past errors, and they do well where autocorrelation is strong and seasonality is stable. Understanding differencing, stationarity tests and ACF and PACF plots lets you read automated model selection output instead of trusting it blindly.

                ## Milestones
                1. Stationarity checked with a unit root test and differencing applied where needed.
                2. ACF and PACF plots read to propose candidate orders.
                3. Automatic order selection compared with your own proposed model.
                4. A seasonal ARIMA scored in the backtest beside ETS and the benchmarks.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A seasonal ARIMA fitted to your series has been scored in the backtest beside ETS and the benchmarks, with residual checks recorded."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Run a KPSS or ADF test on the series and its first difference"
                - "Plot ACF and PACF and propose two candidate model orders"
                - "Compare your candidates with the automatically selected order"
                - "Add the best seasonal ARIMA to the backtest comparison"
            - name: Prediction intervals and probabilistic forecasts
              description: |-
                ## Purpose
                A single number hides the thing planners most need: how wrong it could plausibly be. Learning how prediction intervals and quantile forecasts are produced, and why most model intervals come out too narrow, lets you give users a range they can set safety stock or contingency against.

                ## Milestones
                1. Model-based and bootstrapped prediction intervals produced for the same series.
                2. The 80 and 95 percent intervals checked against how often actuals fell inside them in the backtest.
                3. Quantile forecasts produced and scored with pinball loss.
                4. A one-page explanation of the intervals written for non-specialist users.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Prediction intervals for your series have their backtest coverage measured at 80 and 95 percent, and a one-page user explanation exists."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Produce model-based 80 and 95 percent intervals for the series"
                - "Generate bootstrapped intervals from backtest residuals"
                - "Count how often actuals fell inside each interval in the backtest"
                - "Write a one-page note explaining the intervals to users"
            - name: Forecasting with external drivers
              description: |-
                ## Purpose
                Price, promotions, weather and marketing spend often explain movements a pure time series model cannot. Adding drivers through dynamic regression helps only if the drivers themselves are known or can be forecast at the horizon, a trap that catches many analysts the first time.

                ## Milestones
                1. Candidate drivers listed with whether each is known in advance, forecastable or unknown.
                2. A regression with ARIMA errors fitted using the known-in-advance drivers.
                3. The backtest run with driver values as they were known at each origin, not actuals.
                4. The gain over the univariate model measured and recorded.

                ## Notes
                Using actual weather or actual spend in a backtest flatters the model. Use the weather forecast or the plan that existed at the time.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A driver-based model has been backtested using only driver values known at each origin, and its gain over the univariate model is recorded."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List candidate drivers and classify each as known, forecastable or unknown"
                - "Fit a regression with ARIMA errors using the known drivers"
                - "Backtest with driver values as they stood at each forecast origin"
                - "Record the accuracy gain over the univariate model"
            - name: Prophet and decomposable models, tested honestly
              description: |-
                ## Purpose
                Additive decomposable models such as Prophet are easy to start and handle holidays and multiple seasonalities neatly, which is why they appear in so many tutorials. Published comparisons often find them beaten by simple benchmarks on business series, so the point here is to learn the tool and then test it against your own baseline before adopting it.

                ## Milestones
                1. A decomposable model fitted with your events table supplied as holidays.
                2. Changepoint and seasonality settings varied and their effect plotted.
                3. The model scored in the same backtest as ETS, ARIMA and the benchmarks.
                4. A written verdict on whether it earns a place in production.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A decomposable model using your events table has been scored in the shared backtest, and a written adopt or reject verdict exists."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Fit a decomposable model using your events table as holidays"
                - "Vary changepoint flexibility and plot the resulting trends"
                - "Run the model through the shared backtest"
                - "Write an adopt or reject verdict with the evidence"
            - name: Gradient boosting with lag features
              description: |-
                ## Purpose
                Tree-based models trained across many series at once, using lags, rolling means and calendar features, have won recent retail forecasting competitions. They need careful feature construction to avoid leakage and a plan for multi-step horizons, so they are worth learning only once the statistical baselines are in place.

                ## Milestones
                1. A feature table of lags, rolling statistics and calendar flags built without future leakage.
                2. A global model trained across all series in scope.
                3. A multi-step strategy chosen: recursive, direct, or a mix of the two.
                4. The model scored in the backtest against the best statistical model.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A global gradient boosting model has been scored in the shared backtest against the best statistical model, with its multi-step strategy documented."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Build lag, rolling mean and calendar features for every series"
                - "Check that no feature uses values after the forecast origin"
                - "Train one global model across all series in scope"
                - "Score the model against the best statistical model in the backtest"
            - name: Forecasting textbook study plan
              description: |-
                ## Purpose
                Free, well-regarded textbooks such as Forecasting: Principles and Practice cover most of what a working forecaster needs, with code and exercises, yet many people only ever read the chapter that matches today's problem. Working through one text over twelve weeks, with exercises on your own data, fills the gaps that cause quiet mistakes.

                ## Milestones
                1. One textbook chosen and its chapters scheduled across twelve weeks.
                2. Exercises for each chapter completed using your own series where possible.
                3. A notes page with one practical takeaway per chapter.
                4. Two changes to your forecasting practice made because of the reading.

                ## Notes
                Start from the **Reading queue** template.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "All scheduled chapters of one forecasting textbook are read with exercises done, and two resulting practice changes are recorded."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Choose one forecasting textbook and list its chapters"
                - "Schedule two chapters every fortnight for twelve weeks"
                - "Write one practical takeaway per chapter on the notes page"
                - "Record two changes you will make to your forecasting practice"
            - name: Intermittent demand forecasting methods
              description: |-
                ## Purpose
                Spare parts, slow-moving lines and niche products sell in long runs of zeros punctuated by occasional orders, and standard models forecast a smooth trickle that is never right. Croston's method and its variants (SBA, TSB) forecast demand size and interval separately, and the error measures must change too, since MAPE is undefined when actuals are zero.

                ## Milestones
                1. Series classified as smooth, intermittent, erratic or lumpy using demand interval and variability.
                2. Croston, SBA and TSB forecasts produced for the intermittent group.
                3. The methods scored with a scale-free measure that handles zeros.
                4. A method chosen for each demand class and recorded.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every series is classified by demand pattern, and a forecasting method for intermittent series has been chosen from a scored comparison."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Classify each series by average demand interval and size variability"
                - "Produce Croston, SBA and TSB forecasts for the intermittent group"
                - "Score the methods with a measure that handles zero actuals"
                - "Record the method chosen for each demand class"
            - name: Forecasting tool and library selection
              description: |-
                ## Purpose
                Spreadsheet functions, open-source libraries in R or Python, and commercial planning platforms differ hugely in cost, transparency and how many series they handle. Choosing on a scored list of real requirements (series count, refresh time, interval support, audit trail, team skills) avoids buying a platform the team cannot operate or outgrowing a spreadsheet in six months.

                ## Milestones
                1. Requirements written and weighted: series count, refresh time, intervals, hierarchy support, audit trail, skills and cost.
                2. Three options shortlisted across spreadsheet, open-source and commercial categories.
                3. Each option trialled on the same sample of your series.
                4. A choice recorded with its scores and the main trade-off accepted.

                ## Notes
                Start from the **Purchase decision** template. Trial on your own messiest series, not the vendor's demo data.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A forecasting tool is chosen from three options trialled on the same sample of your series, with weighted scores recorded."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Write and weight the requirements for a forecasting tool"
                - "Shortlist one spreadsheet, one open-source and one commercial option"
                - "Trial each option on the same twenty sample series"
                - "Record the choice, the scores and the main trade-off accepted"
            - name: Forecast value added study
              description: |-
                ## Purpose
                Forecasts often pass through several hands: a statistical run, an analyst's adjustment, a sales review, a management sign-off. A forecast value added study compares the error at each step with the naive benchmark and with the step before, showing which steps improve accuracy and which add only bias and delay.

                ## Milestones
                1. Each step in the forecasting process mapped, with the version it produces.
                2. Six months of forecasts captured at each step.
                3. Error at each step compared with the naive benchmark and the previous step.
                4. A recommendation made to keep, change or remove each step.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A study covering at least six months shows the accuracy change at each process step, with a keep, change or remove recommendation for each."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Map each step the forecast passes through and who owns it"
                - "Collect six months of forecast versions from every step"
                - "Calculate error at each step against naive and the step before"
                - "Present keep, change or remove recommendations to the process owners"
            - name: Hierarchical forecast reconciliation
              description: |-
                ## Purpose
                Forecasts built separately for products, regions and the company total almost never add up, and users lose faith when the totals disagree. Reconciliation methods such as bottom-up, top-down and optimal combination (MinT) make every level coherent, and the optimal approach often improves accuracy at several levels at once.

                ## Milestones
                1. Base forecasts produced at every level of the agreed hierarchy.
                2. Bottom-up, top-down and optimal reconciliation applied to the same base forecasts.
                3. Each method scored by level in the backtest.
                4. One reconciliation method adopted and the published forecasts shown to add up at every level.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Published forecasts add up across every hierarchy level, using a reconciliation method chosen from a backtest comparison by level."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Produce base forecasts at each level of the hierarchy"
                - "Apply bottom-up, top-down and MinT reconciliation"
                - "Score each reconciliation method by hierarchy level"
                - "Adopt the chosen method in the production forecast"
            - name: Forecast combination trial
              description: |-
                ## Purpose
                Averaging the forecasts of two or three reasonable models is one of the most reliable ways to cut error, a finding repeated across decades of forecasting competitions. Trialling a simple equal-weight combination against each model alone is cheap and often beats spending weeks picking a single winner.

                ## Milestones
                1. Three diverse candidate models chosen, for example ETS, ARIMA and a driver model.
                2. An equal-weight mean and a median combination produced in the backtest.
                3. Combination accuracy compared with each individual model by horizon.
                4. A decision recorded on whether to publish the combination.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An equal-weight combination of three models is scored against each individual model in the backtest, and the publish decision is recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose three models built on different principles"
                - "Produce equal-weight mean and median combinations in the backtest"
                - "Compare combination error with each model by horizon"
                - "Record whether the combination becomes the published forecast"
            - name: Ranges instead of single numbers in forecast reports
              description: |-
                ## Purpose
                Leaders read a single forecast number as a promise, and every miss erodes trust. Redesigning the forecast report to show a central estimate with a range, plus a plain sentence on what the range means, moves the conversation from blame to planning for the high and low cases.

                ## Milestones
                1. The current report's readers and the decisions they make listed.
                2. A redesigned report showing central estimate, 80 percent range and last period's actual.
                3. A one-sentence plain explanation of the range added to the report.
                4. Feedback from three users collected and the design adjusted.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The published forecast report shows a central estimate with an 80 percent range and a plain explanation, revised after feedback from three users."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List who reads the forecast report and what they decide with it"
                - "Mock up a fan chart or range table for the headline series"
                - "Write one plain sentence explaining what the range means"
                - "Collect feedback from three users and revise the layout"
            - name: Automating the forecast run end to end
              description: |-
                ## Purpose
                Monthly forecasts rebuilt by hand in a chain of spreadsheets break when the person who built them is on leave. Scripting the run from data extract to published output, with logs and a failure alert, cuts refresh time from days to hours and makes the process repeatable by anyone on the team.

                ## Milestones
                1. Every manual step in the current run listed with its time cost.
                2. A script or scheduled job that runs extract, model, reconcile and publish in order.
                3. Run logs kept and an alert sent when any step fails.
                4. One full refresh run by someone other than the original author.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A scheduled job produces the full forecast from extract to publication, with failure alerts, and has been run successfully by a second team member."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "List each manual step in the current forecast run and its time"
                - "Script the steps in order from data extract to published output"
                - "Add run logs and an alert when any step fails"
                - "Have a second team member run a full refresh from the instructions"
            - name: New product forecasting by analogy
              description: |-
                ## Purpose
                A new product, store or market has no history, so every time series model is useless on day one. Forecasting by analogy, using the launch curves of similar past items scaled by a few known attributes, gives a defensible starting point that hands over to a statistical model once eight to twelve periods of actuals exist.

                ## Milestones
                1. A library of past launch curves built, aligned on launch date.
                2. Analogues for the new item chosen on stated attributes such as price band, category and channel.
                3. A launch forecast with a range produced from the analogues.
                4. A switch-over rule set for moving to the statistical model.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A launch forecast with a range is produced from documented analogues, with a written rule for when the statistical model takes over."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Collect sales of past launches and align them on launch week"
                - "Choose three to five analogues for the new item and state why"
                - "Build the launch forecast and range from the analogue curves"
                - "Write the rule for switching to the statistical model"
            - name: Budget season revenue forecast delivery
              description: |-
                ## Purpose
                The annual budget is the one forecast most people in the organisation will see, and it is usually prepared under time pressure with targets already in the air. Separating the statistical baseline from the stretch target, and delivering both on time with assumptions attached, protects the forecast's credibility through the year.

                ## Milestones
                1. The budget timetable, format and horizon confirmed with finance.
                2. A baseline forecast with a range produced from the production model.
                3. Every assumption above the baseline listed with its size and owner.
                4. Baseline, assumptions and the agreed budget figure delivered as separate, labelled numbers.

                ## Notes
                Keep the baseline unchanged once targets are set. If the budget differs from it, the gap is a plan to close, not a forecast error.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The baseline forecast, the list of assumptions above it and the agreed budget figure were delivered to finance as separate labelled numbers by the budget deadline."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Confirm the budget timetable, template and horizon with finance"
                - "Produce the baseline forecast with an 80 percent range"
                - "List each assumption that lifts the budget above baseline with its owner"
                - "Deliver baseline, assumptions and budget figure as separate numbers"
            - name: Peak season forecast preparation
              description: |-
                ## Purpose
                Black Friday, the festive season, the summer travel rush or a tax filing deadline compress a large share of the year's volume into a few weeks, and errors then cost the most. Preparing a peak forecast six to eight weeks ahead, with its daily shape, last year's errors reviewed and a mid-peak reforecast planned, gives operations time to staff and stock.

                ## Milestones
                1. Last year's peak forecast and actuals reviewed, with the main misses explained.
                2. A daily peak forecast with a range delivered six weeks ahead.
                3. A mid-peak reforecast point agreed with operations.
                4. The peak forecast and its range handed to staffing and stock planners.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A daily peak forecast with a range reached staffing and stock planners at least six weeks before peak, with a mid-peak reforecast date agreed."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Pull last year's peak forecast snapshot and the matching actuals"
                - "Explain the three biggest misses from last year's peak"
                - "Build the daily peak forecast with a range"
                - "Agree a mid-peak reforecast date with operations"
            - name: Post-season forecast retrospective
              description: |-
                ## Purpose
                After a peak, a launch or a budget year, memories of what went wrong fade within weeks. A short retrospective built on the archived snapshots rather than recollection turns each miss into a specific change to data, model or process for next time.

                ## Milestones
                1. Snapshots and actuals for the period compared at the decision horizons.
                2. Each major miss traced to data, model, assumption or process.
                3. Three or fewer concrete changes agreed with owners.
                4. The retrospective notes filed with the snapshots for next year.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A retrospective document traces each major miss to a cause and lists no more than three changes with owners, filed with the snapshots."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Compare the archived snapshots with actuals at the decision horizons"
                - "Trace each major miss to data, model, assumption or process"
                - "Agree up to three changes with named owners"
                - "File the retrospective notes alongside the snapshots"
            - name: First consensus forecast meeting
              description: |-
                ## Purpose
                Sales, finance, operations and the forecasting team each hold a different number, and without a meeting that reconciles them the loudest one wins. Running the first consensus meeting well, with the statistical forecast as the starting point and every change logged with a reason, sets the pattern for the monthly planning cycle.

                ## Milestones
                1. Attendees, decision rights and the agenda agreed before the meeting.
                2. The statistical forecast, recent accuracy and open assumptions circulated two days ahead.
                3. Every change made in the meeting logged with reason and owner.
                4. One agreed forecast number per product family published after the meeting.

                ## Notes
                Start from the **Meeting notes** template. Changes without a stated reason go in as overrides and are scored later like any other.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first consensus meeting produced one agreed forecast per product family, with every change logged with a reason and owner."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Agree attendees and who has the final say on each number"
                - "Circulate the statistical forecast and accuracy two days before"
                - "Log every change made in the meeting with reason and owner"
                - "Publish the agreed forecast within a day of the meeting"
            - name: Leadership forecast briefing with scenarios
              description: |-
                ## Purpose
                Leaders preparing for a board meeting, a funding conversation or a capacity investment want to know how the forecast behaves if growth stalls or a big customer leaves. Preparing a briefing with a base case and two clearly defined scenarios, each tied to named assumptions, answers the question before it is asked.

                ## Milestones
                1. The briefing's date, audience and decision confirmed.
                2. Base, upside and downside scenarios defined by changes to named assumptions.
                3. Each scenario's forecast and range produced on the same chart.
                4. The briefing delivered with a one-page appendix of assumptions.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A leadership briefing showing base, upside and downside forecasts tied to named assumptions was delivered on the agreed date."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Confirm the briefing date, audience and the decision it supports"
                - "Define upside and downside by changing two or three named assumptions"
                - "Plot the three scenario forecasts on one chart with ranges"
                - "Write a one-page appendix listing every scenario assumption"
            - name: Inheriting someone else's forecast
              description: |-
                ## Purpose
                Analysts often take over a forecast when a colleague leaves, finding a workbook of hard-coded adjustments and no notes. Auditing it before changing anything, by rebuilding last month's number, listing every manual tweak and comparing it with a naive benchmark, tells you what you are now responsible for and where the risks sit.

                ## Milestones
                1. Last month's published forecast reproduced from the inherited files.
                2. Every hard-coded number, manual adjustment and external link listed.
                3. The inherited forecast's past accuracy compared with a seasonal naive benchmark.
                4. A short note of known risks shared with your manager.

                ## Notes
                Ask the previous owner for an hour before they leave, even if the files look self-explanatory.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Last month's inherited forecast has been reproduced, its manual adjustments listed and its accuracy compared with a naive benchmark in a risk note."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the previous owner for an hour to walk through the forecast"
                - "Rebuild last month's published number from the inherited files"
                - "List every hard-coded value and manual adjustment you find"
                - "Write a short risk note for your manager on what you inherited"
            - name: Shared forecasting process for a small team
              description: |-
                ## Purpose
                When three or four people touch the same forecast, gaps appear: two people adjust the same series, or nobody checks the data load. Agreeing who owns data, models, review and publication, with a short weekly handoff check, lets a small team share the work without stepping on each other.

                ## Milestones
                1. Roles for data, modelling, review and publication assigned by name.
                2. A shared folder or repository holding one current version of the forecast.
                3. A short weekly handoff check covering open issues and changes.
                4. Cover arranged for each role during holidays.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every forecasting role has a named owner and a cover, and a weekly handoff check has run for at least a month."
                cadence: rolling
              tasks:
                - "Assign owners for data, models, review and publication by name"
                - "Move the forecast into one shared folder or repository"
                - "Run a fifteen-minute handoff check on open forecast issues @recurring(weekly:wed)"
                - "Name a cover for each role during holidays"
            - name: Forecasting study with a pre-registered evaluation
              description: |-
                ## Purpose
                Researchers comparing forecasting methods fall easily into tuning on the test set or reporting only the horizons where the new method wins. Writing the evaluation protocol in advance (datasets, horizons, error measures, benchmarks and a locked test period) makes the result credible to reviewers and to yourself.

                ## Milestones
                1. A protocol naming datasets, horizons, measures, benchmarks and the locked test period.
                2. The protocol timestamped before any model sees the test data.
                3. All methods tuned on validation data only.
                4. Results reported for every pre-registered horizon and measure, including losses.

                ## Notes
                Include established benchmarks such as seasonal naive and ETS. A new method that only beats other complex methods has not shown much.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A study report presents results for every pre-registered horizon and measure against standard benchmarks, with the protocol timestamped before testing."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Draft the evaluation protocol with datasets, horizons and measures"
                - "Timestamp the protocol in a repository before touching test data"
                - "Tune every method on the validation period only"
                - "Report all pre-registered results, including where the new method lost"
            - name: Spreadsheet forecast for a solo analyst
              description: |-
                ## Purpose
                Plenty of knowledge workers forecast in a spreadsheet with no data team behind them, and that is fine if the sheet is honest. A built-in exponential smoothing function, a holdout tab and a monthly actuals update give a credible forecast without new software, provided you know where a spreadsheet stops being enough.

                ## Milestones
                1. Inputs, model and outputs on separate, labelled tabs.
                2. A seasonal smoothing forecast produced with the spreadsheet's built-in function, with its confidence band.
                3. A holdout tab comparing the forecast with a seasonal naive benchmark.
                4. Actuals added each month and the error recorded.

                ## Notes
                Once you are forecasting more than about fifty series, or refreshing weekly, a scripted approach usually saves more time than it costs.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A spreadsheet forecast with separated tabs, a built-in smoothing model and a holdout comparison against seasonal naive is updated with actuals each month."
                cadence: rolling
              tasks:
                - "Split the workbook into input, model and output tabs"
                - "Build a forecast with the built-in exponential smoothing function"
                - "Add a holdout tab scoring the forecast against seasonal naive"
                - "Paste in the month's actuals and record the error @recurring(monthly:25)"
            - name: Website traffic forecast for a content team
              description: |-
                ## Purpose
                Content and marketing teams are asked to commit to traffic targets, then find that search algorithm updates, campaign bursts and weekly cycles make raw trend lines useless. Forecasting sessions at weekly level with campaign and holiday flags, and a range rather than a single target, gives the team a defensible baseline for planning.

                ## Milestones
                1. Two years of weekly sessions exported with tracking changes noted.
                2. Campaign bursts and known algorithm update dates flagged.
                3. A weekly baseline forecast with a range for the next two quarters.
                4. Targets set as uplift above the baseline rather than as raw totals.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A weekly traffic baseline forecast with a range for two quarters exists, and the team's targets are written as uplift above it."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Export two years of weekly sessions from the analytics tool"
                - "Mark tracking changes, campaign bursts and algorithm updates"
                - "Forecast the weekly baseline with a range for two quarters"
                - "Restate the team's traffic target as uplift above baseline"
            - name: Contact centre volume forecast by interval
              description: |-
                ## Purpose
                Contact centres need volume by half hour, not by month, because staffing is planned in intervals and short gaps cause long queues. Forecasting daily volume first, then splitting it with day-of-week and intraday profiles, gives workforce planners the input their staffing models expect.

                ## Milestones
                1. Daily contact volume history cleaned of outages and channel changes.
                2. A daily forecast for the next eight weeks produced and backtested.
                3. Intraday profiles by day of week built from recent weeks.
                4. An interval forecast delivered to workforce planners in their required format.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "An interval-level volume forecast for the next eight weeks is delivered to workforce planners every week in their required format."
                cadence: rolling
              tasks:
                - "Ask workforce planners for the interval length and file format they need"
                - "Clean daily volume history of outages and channel changes"
                - "Build intraday profiles by day of week from the last eight weeks"
                - "Send the updated interval forecast to workforce planners @recurring(weekly:fri)"
            - name: Prediction interval calibration audit
              description: |-
                ## Purpose
                Intervals labelled 80 percent that contain the actual only 60 percent of the time give planners false comfort, and the shortfall usually grows with horizon. Auditing coverage and sharpness each quarter, with an interval score or CRPS for probabilistic forecasts, keeps the published ranges honest.

                ## Milestones
                1. Coverage of the 80 and 95 percent intervals measured by horizon from the snapshot archive.
                2. Interval score or CRPS calculated for each production model.
                3. Any horizon with coverage well below nominal flagged with a proposed fix.
                4. Calibration results added to the quarterly model review.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each quarter, interval coverage by horizon and an interval score are recorded for every production model, with fixes proposed for under-covered horizons."
                cadence: cyclic
              tasks:
                - "Measure 80 and 95 percent interval coverage by horizon from snapshots"
                - "Calculate an interval score or CRPS for each production model"
                - "Audit coverage and propose fixes for under-covered horizons @recurring(quarterly)"
                - "Add calibration results to the quarterly model review pack"
            - name: Benchmarking deep learning and foundation models
              description: |-
                ## Purpose
                Neural forecasters such as N-BEATS and temporal fusion transformers, and pretrained time series foundation models, promise accuracy without per-series tuning. Results vary sharply by dataset, so a controlled benchmark against your best statistical model and combination, including run cost, is the only way to know whether they help your series.

                ## Milestones
                1. Two or three neural or pretrained models chosen and run on your series.
                2. All models scored in the shared backtest at the same horizons.
                3. Compute time and cost per refresh recorded beside accuracy.
                4. An adoption decision recorded with the accuracy and cost evidence.

                ## Notes
                Check that a pretrained model was not trained on public datasets you are also using to evaluate it, or the comparison is contaminated.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Neural and pretrained models have been scored in the shared backtest with run cost recorded, and an adopt or reject decision is documented."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Choose two or three neural or pretrained forecasting models to test"
                - "Run each through the shared backtest at the standard horizons"
                - "Record compute time and cost per refresh for each model"
                - "Write the adoption decision with accuracy and cost side by side"
            - name: Multiple seasonality in high-frequency data
              description: |-
                ## Purpose
                Hourly energy load, website requests and transport counts carry daily, weekly and yearly cycles at once, which standard seasonal models cannot hold. Methods such as MSTL decomposition, TBATS and Fourier terms in a regression handle these layers, but need careful choice of which cycles to include.

                ## Milestones
                1. Each seasonal period present in the data identified with a periodogram or seasonal plots.
                2. An MSTL decomposition separating the daily, weekly and annual cycles.
                3. Fourier-term regression and TBATS models scored in the backtest.
                4. The chosen model documented with the seasonal periods it uses.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A model handling every identified seasonal period has been chosen from a backtest comparison, with its seasonal periods documented."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Identify seasonal periods with a periodogram and seasonal plots"
                - "Run an MSTL decomposition on the high-frequency series"
                - "Fit a Fourier-term regression and a TBATS model"
                - "Score both in the backtest and document the choice"
            - name: Forecasting through regime change
              description: |-
                ## Purpose
                Pandemics, a major price change, a new competitor or a switch to subscriptions can make years of history misleading overnight. Detecting the break, shortening the training window, nowcasting from faster indicators and relying on scenarios keeps forecasts useful while the new pattern settles.

                ## Milestones
                1. The break date estimated with a changepoint test and business context.
                2. Models refitted on post-break data or with a level shift term, and compared.
                3. Faster indicators such as web visits or the order pipeline tested as nowcasting inputs.
                4. Scenario ranges published until twelve post-break periods of history exist.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A documented break date, a refitted model compared with the old one, and scenario ranges are in place until twelve post-break periods exist."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Estimate the break date with a changepoint test and team input"
                - "Refit models on post-break data and compare with the old fit"
                - "Test one faster indicator as a nowcasting input"
                - "Publish scenario ranges until enough post-break history exists"
            - name: Unconstrained demand from censored sales
              description: |-
                ## Purpose
                Recorded sales show what was sold, not what customers wanted: when shelves were empty or bookings full, true demand was higher. Estimating unconstrained demand for stockout and capacity-limited periods stops the forecast from learning its own past shortages and repeating them.

                ## Milestones
                1. Stockout or capacity-limited periods identified from inventory or capacity records.
                2. A method chosen to estimate lost demand, such as rate-based imputation or a censored model.
                3. The forecast refitted on unconstrained history and compared with the original.
                4. The estimation rules written down for the monthly refresh.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Stockout periods are identified and imputed with a documented method, and the forecast refitted on unconstrained history has been compared with the original."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Flag stockout and full-capacity periods from inventory or booking records"
                - "Estimate lost demand for flagged periods with a chosen method"
                - "Refit the forecast on the unconstrained history and compare"
                - "Document the imputation rules for the monthly refresh"
            - name: Forecasting thousands of series at scale
              description: |-
                ## Purpose
                Once a forecast covers thousands of items or locations, nobody can look at every series, and failures hide in the long tail. Automated model selection per group, health checks for flat or exploding forecasts, and a weekly exception queue sized for one person keep a large system trustworthy.

                ## Milestones
                1. Series grouped by volume and pattern, with a default method for each group.
                2. Automated checks for flat, negative, exploding or missing forecasts after each run.
                3. An exception queue limited to the series with the largest business impact.
                4. Run time, failure rate and accuracy by group tracked over time.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "After every run, automated checks flag failed or implausible forecasts into a ranked queue, and run time, failure rate and accuracy by group are tracked."
                cadence: rolling
              tasks:
                - "Group series by volume and demand pattern"
                - "Write checks for flat, negative, exploding or missing forecasts"
                - "Rank flagged series by revenue at stake for the exception queue"
                - "Work through the top of the exception queue @recurring(weekly:tue)"
---

# Time Series Forecasting

Time series forecasting is about predicting demand, revenue, traffic and volumes over time, for the analyst who owns the number, the researcher comparing methods and the team that plans from it. The projects start with foundations (the decision a forecast serves, a clean history, naive benchmarks, error measures and a backtest), move through the operating rhythm and the core methods, then improvements such as reconciliation and combination, dated deliveries like the budget and peak season, situations from inheriting a forecast to a contact centre, and specialist work on calibration, regime change and forecasting at scale.

What repeats is a monthly refresh with actuals logged, snapshots archived and bias, overrides and outliers reviewed, a weekly operational run and exception queue, and a quarterly model and interval review. The Metrics log, Risk register, Reading queue, Purchase decision and Meeting notes templates pair with the projects that point to them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
