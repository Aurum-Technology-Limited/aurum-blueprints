---
id: quant-finance.financial-time-series-econometrics
name: Financial Time Series Econometrics
description: "Time series work you can defend: clean return conventions, stationarity and lag rules, ARMA, cointegration, VAR and GARCH skills, residual diagnostics, honest forecast comparisons and a record of every specification you trust."
category: business
version: 1.0.0
tags: [quant-finance, financial-time-series-econometrics, researcher, econometrics, stationarity, cointegration, garch, forecast-evaluation]
author: Aurum Technology
starter_structure:
  templates:
    - reading-queue
    - metrics-log
    - risk-register
    - meeting-notes
  pillars:
    - name: Quantitative Finance & Trading
      emoji: "🧮"
      description: "Systematic research and trading run like engineering: alpha research and honest backtests, factor and risk models, execution and microstructure, statistics and machine learning, quant development and market data, prop-firm evaluations and personal algorithmic trading under strict risk rules, and quant careers. Organisation and method only, never trading advice."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Financial Time Series Econometrics
          description: "Modelling financial time series: stationarity, autocorrelation, cointegration, GARCH-style volatility models and testing assumptions before trusting results."
          projects:
            - name: Pinned econometrics toolkit and environment
              description: |-
                ## Purpose
                Before any model is fitted, the software that fits it should be fixed, because GARCH and unit root routines differ in defaults between packages and even between versions of the same package. A pinned environment with the main time series libraries, a lock file and a short note of each library's default settings means a result from March can be reproduced in November.

                ## Milestones
                1. A project environment with the chosen time series, volatility and statistics libraries and a lock file committed.
                2. The default lag selection, trend terms and optimiser settings of each key routine written in a one-page note.
                3. A smoke test that fits one ARMA and one GARCH model on a stored series and checks the output against saved values.
                4. A rule for when and how library versions are upgraded.

                ## Notes
                Different packages report the GARCH constant and the log likelihood on different scales. Note which one you use before comparing with a paper.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A locked environment exists in version control with a passing smoke test that reproduces stored ARMA and GARCH estimates to four decimal places."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the time series and volatility libraries you actually use"
                - "Create a project environment and commit the lock file"
                - "Write down each key routine's default lags, trend terms and optimiser"
                - "Add a smoke test that refits a stored ARMA and GARCH model"
                - "Review library versions and rerun the smoke test after any upgrade @recurring(quarterly)"
            - name: Return series construction conventions
              description: |-
                ## Purpose
                Simple and log returns, total and price returns, and close to close versus open to close series all give different autocorrelations and volatilities, and mixing them across a project quietly breaks comparisons. A written convention for how every return series is built, adjusted and labelled removes a whole class of silent errors.

                ## Milestones
                1. A convention document stating when log returns and when simple returns are used, and why.
                2. Dividend, split and roll adjustments specified for each asset class in scope.
                3. A naming scheme that shows frequency, return type and adjustment in every series name.
                4. One existing series rebuilt under the convention and differences from the old version explained.

                ## Notes
                Log returns add across time and simple returns add across assets. Most confusion starts when a model needs one and the data has the other.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A return construction convention is published to the team and at least one live series has been rebuilt and labelled under it."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write one paragraph on when log and simple returns are used"
                - "Specify dividend, split and futures roll adjustments by asset class"
                - "Agree a series naming scheme that shows frequency and return type"
                - "Rebuild one current series under the convention and compare"
            - name: Sampling frequency and calendar alignment rules
              description: |-
                ## Purpose
                Daily closes in Tokyo, London and New York are hours apart, so a naive daily panel shows spurious lead and lag effects and understated correlations. Deciding the sampling frequency, the holiday treatment and how asynchronous closes are handled before modelling stops the calendar from inventing results.

                ## Milestones
                1. The default sampling frequency chosen for each research question, with a reason.
                2. A holiday and missing-day rule written: drop, carry forward or align to a common calendar.
                3. Asynchronous close handling decided, such as weekly sampling or synchronised snapshots.
                4. A check showing how much cross-market correlation changes between daily and weekly sampling.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written calendar and sampling rule exists, supported by a daily versus weekly correlation comparison for at least two markets."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the markets in scope and their closing times in one time zone"
                - "Decide how exchange holidays are treated in a multi-market panel"
                - "Compare daily and weekly correlations for two markets with different closes"
                - "Write the sampling and calendar rule into the project conventions"
            - name: First-look checklist for a new series
              description: |-
                ## Purpose
                Ten minutes of plots catches most problems a formal test would find later: level shifts, stale prices, volatility clustering, outliers and seasonality. A standard first-look checklist, run on every new series before modelling, means nobody fits a model to a series they have never actually looked at.

                ## Milestones
                1. A checklist of six standard plots: level, returns, squared returns, autocorrelation of returns, autocorrelation of squared returns and a rolling standard deviation.
                2. A script that produces all six plots for any series in one call.
                3. A short template for recording what the plots show before any test is run.
                4. The checklist applied to three series already in use, with findings noted.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A reusable first-look script and written checklist exist and have been applied to three live series with notes saved."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the six plots every new series must get"
                - "Script the plots so one call produces the full set"
                - "Draft a five-line template for recording what the plots show"
                - "Run the checklist on three series you already model"
            - name: Stationarity testing protocol
              description: |-
                ## Purpose
                Unit root tests have low power, disagree with each other and change their verdict with the choice of trend terms and lags, so a single test result is weak evidence. A written protocol that pairs a unit root test with a stationarity test, fixes the deterministic terms in advance and says what to do when they disagree turns a judgement call into a repeatable step.

                ## Milestones
                1. A protocol pairing an augmented Dickey-Fuller or Phillips-Perron test with a KPSS test.
                2. Rules for choosing constant, trend or neither based on the plot and economic reasoning.
                3. A decision table for the four outcomes, including both tests rejecting and neither rejecting.
                4. The protocol run on price, return and spread series with results recorded.

                ## Notes
                A short sample of a very persistent series will often fail to reject a unit root even when the series is stationary. Report the sample length beside every verdict.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written stationarity protocol with a four-outcome decision table has been applied to at least three series types and the verdicts logged."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Choose the unit root and stationarity tests the protocol will pair"
                - "Write the rule for including a constant or trend term"
                - "Draft the decision table for agreeing and conflicting test results"
                - "Run the protocol on a price, a return and a spread series"
            - name: Lag length and autocorrelation rules
              description: |-
                ## Purpose
                Picking lags by trying a few until the coefficients look good is one of the quietest forms of overfitting in time series work. Fixing in advance which information criterion selects lags, the maximum lag allowed and which portmanteau test confirms the residuals are clean keeps specifications comparable across projects.

                ## Milestones
                1. The default information criterion chosen, with a stated reason for BIC or AIC.
                2. A maximum lag rule tied to sample size and data frequency.
                3. The residual autocorrelation test and its lag count fixed for each frequency.
                4. A worked example showing the rule applied to one return series end to end.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A lag selection rule naming the criterion, maximum lag and residual test is documented and shown on a worked example."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Decide between BIC and AIC as the default and note why"
                - "Set a maximum lag rule for daily, weekly and monthly data"
                - "Fix the residual autocorrelation test and the lags it checks"
                - "Apply the rule to one series and save the worked example"
            - name: Econometric model card template
              description: |-
                ## Purpose
                Every fitted model carries assumptions about stationarity, error distribution, sample period and estimation method that are usually lost a month later. A one-page model card filled in for each specification records what was assumed, what was tested and what the model must not be used for.

                ## Milestones
                1. A model card template with sections for data, sample, specification, estimation, diagnostics and known limits.
                2. Fields for the stationarity verdict, lag choice and residual test results.
                3. A section listing uses the model is not fit for.
                4. Model cards completed for the two models currently relied on most.

                ## Notes
                Keep the card to one page. If the limits section is empty, the card is not finished.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A model card template is saved and filled in for the two most used models, each with a non-empty limits section."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft the model card sections on a single page"
                - "Add fields for stationarity, lag choice and residual tests"
                - "Fill in a card for the model you rely on most"
                - "Fill in a second card and ask a colleague to read both"
            - name: Reference datasets with known published results
              description: |-
                ## Purpose
                Software bugs and silent default changes are easiest to catch on data where the right answer is already known. Keeping a small library of textbook and published datasets with their reported estimates gives you a check you can run whenever code or libraries change.

                ## Milestones
                1. Four to six reference datasets stored with their source and the published estimates.
                2. A test for each that refits the model and compares with the published numbers.
                3. Tolerances agreed for each comparison and any known differences explained.
                4. The tests wired into the toolkit's smoke test run.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least four reference datasets reproduce their published ARMA, cointegration or GARCH estimates within stated tolerances in an automated test."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pick four textbook or paper datasets with reported estimates"
                - "Store each dataset with its citation and the published numbers"
                - "Write a test that refits each model and checks the tolerance"
                - "Add the reference tests to the smoke test run"
            - name: Core time series econometrics reading plan
              description: |-
                ## Purpose
                Textbooks on time series econometrics range from gentle introductions to graduate references, and reading the wrong one first wastes months. A sequenced plan of two or three core texts, chosen for your level and read with exercises, builds the base every later project here relies on.

                ## Milestones
                1. One introductory and one graduate-level text chosen, with chapters mapped to this area's projects.
                2. A weekly reading slot set and the first four chapters scheduled.
                3. End-of-chapter exercises attempted for each chapter, with solutions checked.
                4. A one-page summary written for each major topic: ARMA, unit roots, cointegration, VAR and GARCH.

                ## Notes
                Start from the **Reading queue** template. Coding each chapter's main example yourself is worth more than reading two extra chapters.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two core texts are chosen and five topic summaries with attempted exercises are saved in the reading queue."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Choose one introductory and one graduate time series text"
                - "Map each text's chapters to the projects in this area"
                - "Read one chapter and attempt its exercises @recurring(weekly:sat)"
                - "Write a one-page summary after finishing each major topic"
            - name: Monthly re-estimation and parameter stability log
              description: |-
                ## Purpose
                Parameters estimated once and left alone drift away from the data, and nobody notices until a forecast fails badly. Re-estimating each live specification monthly and logging the parameters, standard errors and log likelihood shows drift early and gives evidence for every later decision to keep or change a model.

                ## Milestones
                1. A list of live specifications to re-estimate each month.
                2. A log with one row per model per month: parameters, standard errors, sample end and log likelihood.
                3. A rule that flags a parameter moving more than a set number of standard errors.
                4. A chart of each key parameter's history reviewed each quarter.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every live specification has an unbroken monthly parameter log with flagged moves reviewed and annotated each quarter."
                cadence: rolling
              tasks:
                - "List every specification that needs monthly re-estimation"
                - "Set up the parameter log with one row per model per month"
                - "Re-estimate live models and append parameters to the log @recurring(monthly:4)"
                - "Chart parameter histories and annotate any flagged moves @recurring(quarterly)"
            - name: Residual diagnostics routine for fitted models
              description: |-
                ## Purpose
                Residuals show whether a model has captured the structure it claims to: leftover autocorrelation, remaining ARCH effects or heavy tails mean the standard errors and forecasts are not to be trusted. A fixed diagnostic routine run every month on every live model catches specification failure before it shows up in results.

                ## Milestones
                1. A standard diagnostic set: Ljung-Box on residuals and squared residuals, an ARCH test, a normality or tail check and a QQ plot.
                2. A script that runs the set for any fitted model and writes a one-page report.
                3. A threshold for each test that triggers a review of the model card.
                4. Three months of diagnostic reports saved for every live model.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly diagnostic reports exist for every live model for three consecutive months, and every threshold breach has a note on the model card."
                cadence: rolling
              tasks:
                - "Write the list of residual tests every model must pass"
                - "Script a one-page diagnostic report for any fitted model"
                - "Run diagnostics on all live models and file the reports @recurring(monthly:9)"
                - "Note every threshold breach on the relevant model card"
            - name: Weekly time series literature scan
              description: |-
                ## Purpose
                New methods for testing breaks, estimating volatility and evaluating forecasts appear in working papers years before they reach textbooks. A short weekly scan of working paper series and journal tables of contents, with a monthly pick of one paper to read properly, keeps your methods current without swallowing research time.

                ## Milestones
                1. A list of five to eight working paper series and journals to scan.
                2. A thirty-minute weekly slot with a running list of titles worth a look.
                3. One paper a month read in full with a short note on whether it changes your methods.
                4. Methods notes filed against the projects in this area they affect.

                ## Notes
                Start from the **Reading queue** template. Note the sample period of every paper: many time series findings come from one unusual decade.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A weekly scan log and at least three monthly paper notes exist, each linked to the method or project it affects."
                cadence: rolling
              tasks:
                - "List the working paper series and journals worth scanning"
                - "Scan new titles and add promising ones to the queue @recurring(weekly:fri)"
                - "Read one queued paper in full and write a methods note @recurring(monthly:28)"
                - "File each methods note against the project it affects"
            - name: Inventory of specifications in use
              description: |-
                ## Purpose
                Researchers accumulate fitted models in notebooks, scripts and colleagues' folders, and within a year nobody can say which specification feeds which report. A single inventory listing each model, its owner, its inputs, its consumers and its model card makes reviews, handovers and retirements possible.

                ## Milestones
                1. Every fitted model in active use listed with owner, data inputs and downstream users.
                2. Each entry linked to its model card and code location.
                3. Models with no named user marked for review or retirement.
                4. A quarterly review date set for the inventory.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "An inventory lists every live time series model with owner, inputs, users and a model card link, reviewed in the last quarter."
                cadence: rolling
              tasks:
                - "Search notebooks and scripts for every model still producing output"
                - "List each model with its owner, inputs and downstream users"
                - "Link every entry to its model card and code location"
                - "Review the inventory and mark unused models for retirement @recurring(quarterly)"
            - name: Quarterly assumption review for live models
              description: |-
                ## Purpose
                Assumptions that held when a model was built, such as constant parameters, conditional normality or a stable cointegrating vector, can quietly stop holding. A quarterly review that checks each model's key assumptions against recent data, and records failures in a risk register, keeps the list of known weaknesses current.

                ## Milestones
                1. The two or three load-bearing assumptions of each live model listed.
                2. A test or plot chosen to check each assumption on the latest data.
                3. Failures recorded in a risk register with impact and an owner.
                4. A decision for each failure: accept with a note, re-specify or retire.

                ## Notes
                Start from the **Risk register** template. An assumption failure is not automatically a reason to change the model; record the impact first.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each live model has its key assumptions checked every quarter, with failures logged in a risk register and a recorded decision for each."
                cadence: cyclic
              tasks:
                - "List the load-bearing assumptions of each live model"
                - "Choose one test or plot to check each assumption"
                - "Run the checks and log failures in the risk register @recurring(quarterly)"
                - "Record a decision against every failure in the register"
            - name: Data vintage tracking for revised macro series
              description: |-
                ## Purpose
                Macro series such as output, employment and inflation are revised, sometimes heavily, so a model estimated on today's revised history uses numbers nobody had at the time. Tracking data vintages and estimating on real-time data where it matters stops a forecasting result from depending on information that did not exist.

                ## Milestones
                1. Every revised series in your models identified, with its release and revision pattern.
                2. A vintage store keeping each release as published, not overwritten.
                3. One model re-estimated on real-time vintages and compared with the revised-data version.
                4. A monthly step that captures new releases before they are revised.

                ## Notes
                Several central banks and statistical agencies publish real-time vintage databases. Use them for history before building your own capture.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A vintage store holds each release of every revised series used, and at least one model has been compared on real-time versus revised data."
                cadence: rolling
              tasks:
                - "List every revised macro series used in your models"
                - "Find a published real-time vintage source for each series"
                - "Capture new releases into the vintage store @recurring(monthly:15)"
                - "Compare one model's estimates on real-time and revised data"
            - name: Out-of-sample forecast loss ledger
              description: |-
                ## Purpose
                In-sample fit says little about forecasting ability, and time series models are especially prone to fitting history well and forecasting poorly. A ledger that records each model's out-of-sample forecasts and losses against a simple benchmark every month gives an honest track record that no backtest can.

                ## Milestones
                1. A benchmark chosen for each forecast target, such as a random walk or historical mean.
                2. A ledger recording forecast date, horizon, forecast, outcome and loss for each model and benchmark.
                3. Loss functions fixed in advance and written on the model card.
                4. Twelve months of ledger entries summarised in a yearly forecast review.

                ## Notes
                Start from the **Metrics log** template. A model that cannot beat a random walk out of sample has not earned a place in production, however good its fit.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every live forecasting model has monthly ledger entries with losses against a named benchmark and a completed yearly review."
                cadence: rolling
              tasks:
                - "Choose a simple benchmark for each forecast target"
                - "Set up the ledger with date, horizon, forecast, outcome and loss"
                - "Record last month's forecasts and realised losses @recurring(monthly:6)"
                - "Summarise twelve months of losses against each benchmark @recurring(yearly)"
            - name: Quarterly reproducibility rerun
              description: |-
                ## Purpose
                Results that cannot be regenerated from stored code and data are opinions, not findings. Rerunning a sample of past results each quarter from a clean environment shows whether data changes, library updates or lost scripts have broken the link between code and conclusion.

                ## Milestones
                1. Two past results chosen at random each quarter for rerun.
                2. Each rerun done in a fresh environment from version-controlled code and stored data.
                3. Differences from the original numbers explained or traced to a cause.
                4. Fixes recorded so the same break cannot happen again.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two randomly chosen past results are rerun each quarter in a clean environment, with every difference explained in writing."
                cadence: cyclic
              tasks:
                - "Pick two past results at random from the research log"
                - "Rerun both in a fresh environment from stored code and data @recurring(quarterly)"
                - "Explain every difference from the original numbers"
                - "Write down the fix for each break you found"
            - name: Structural break watch for key relationships
              description: |-
                ## Purpose
                Relationships between rates and equities, or between a commodity and a currency, can change abruptly after a policy shift or a market crisis. A monthly check using recursive estimates and a break test on the few relationships your work depends on gives early warning that a model's world has changed.

                ## Milestones
                1. Three to five key relationships named, with the models that depend on them.
                2. Recursive or rolling coefficient plots set up for each.
                3. A formal break test, such as a CUSUM or sup-F test, run on each relationship.
                4. Each detected break dated and linked to a plausible event or flagged as unexplained.

                ## Notes
                Break tests are sensitive to trimming and to volatility changes. A detected break in the mean can be a variance shift in disguise.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each key relationship has a monthly recursive plot and break test result, with every detected break dated and annotated."
                cadence: rolling
              tasks:
                - "Name the relationships your models depend on most"
                - "Set up recursive coefficient plots for each relationship"
                - "Run break tests and update the recursive plots @recurring(monthly:20)"
                - "Date each detected break and note the likely event"
            - name: ARMA modelling from identification to forecast
              description: |-
                ## Purpose
                Autoregressive moving average models are the base vocabulary of the field, and most later models are extensions of them. Working through identification, estimation, diagnostics and forecasting on real return and spread series, by hand and in code, builds the intuition every other skill here needs.

                ## Milestones
                1. ACF and PACF patterns for AR, MA and mixed processes recognised on simulated data.
                2. Three ARMA models fitted to real series with lags chosen under your written rule.
                3. Forecasts and forecast intervals produced and compared with realised values.
                4. A note on why most daily return series show little usable ARMA structure.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three ARMA models on real series are fitted, diagnosed and forecast out of sample, with a written note on what structure was and was not found."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Simulate AR, MA and ARMA processes and plot their ACF and PACF"
                - "Fit ARMA models to a return, a spread and a rate series"
                - "Produce out-of-sample forecasts with intervals for each"
                - "Write a note on how much structure the real series showed"
            - name: Unit roots and spurious regression study
              description: |-
                ## Purpose
                Regressing one trending series on another produces impressive t-statistics and high R-squared values even when the series are unrelated. Reproducing the classic spurious regression result by simulation, and then seeing how differencing and cointegration tests handle it, is the single most protective lesson in time series work.

                ## Milestones
                1. A simulation of two independent random walks showing inflated t-statistics in a levels regression.
                2. The same simulation repeated in differences with the spurious effect gone.
                3. Unit root tests applied to price, yield and spread series with results compared to the protocol.
                4. A one-page explainer for colleagues on why levels regressions of prices mislead.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A spurious regression simulation and a one-page explainer exist, and unit root verdicts for three real series are recorded under the protocol."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Simulate two independent random walks and regress one on the other"
                - "Repeat the simulation a thousand times and plot the t-statistics"
                - "Rerun the exercise on differenced series and compare"
                - "Write a one-page explainer on spurious regression for colleagues"
            - name: Cointegration with Engle-Granger and Johansen
              description: |-
                ## Purpose
                Two prices can each wander without limit yet stay tied together, and cointegration is the formal way to test whether they are. Learning both the two-step Engle-Granger method and the Johansen system approach, including their critical values and normalisation choices, lets you judge a long-run relationship rather than eyeball a spread chart.

                ## Milestones
                1. The Engle-Granger two-step test run on a pair with the correct critical values, not standard Dickey-Fuller ones.
                2. A Johansen test run on a three-series system with trace and maximum eigenvalue results compared.
                3. An error correction model estimated and the speed of adjustment interpreted.
                4. A note on how the cointegrating vector changes across subsamples.

                ## Notes
                Cointegration found in one sample is often absent in the next. Treat the subsample check as part of the test, not an optional extra.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Engle-Granger and Johansen tests and an error correction model are run on real series, with subsample stability of the vector recorded."
                cadence: phased
                effort_hours_estimate: "18"
              tasks:
                - "Choose a pair and a three-series system with an economic link"
                - "Run the Engle-Granger test using residual-based critical values"
                - "Run the Johansen test and compare trace and eigenvalue results"
                - "Estimate an error correction model and interpret the adjustment speed"
                - "Re-estimate the cointegrating vector on two subsamples"
            - name: Vector autoregressions and impulse responses
              description: |-
                ## Purpose
                Vector autoregressions model several series together and show how a shock to one feeds through to the others, which is how much macro-finance research is done. Learning lag selection, stability checks, identification of shocks and the uncertainty bands around impulse responses lets you read and build this work critically.

                ## Milestones
                1. A VAR on three to five series estimated with lags chosen by your written rule.
                2. Stability confirmed by checking the companion matrix roots.
                3. Impulse responses produced under at least two orderings or identification schemes, with confidence bands.
                4. Forecast error variance decomposition computed and its sensitivity to ordering noted.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A stable VAR with impulse responses under two identification schemes and a variance decomposition is documented with its sensitivity to ordering."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Pick three to five series with a clear economic story"
                - "Estimate a VAR and check the stability of its roots"
                - "Produce impulse responses with bands under two orderings"
                - "Compute the variance decomposition and note how ordering changes it"
            - name: GARCH estimation by maximum likelihood from scratch
              description: |-
                ## Purpose
                Writing your own GARCH(1,1) likelihood and optimising it shows exactly where starting values, parameter constraints and the variance initialisation affect the answer, which no package output reveals. Comparing your estimates with a library on the same data turns GARCH from a black box into a model you can debug.

                ## Milestones
                1. A hand-written GARCH(1,1) log likelihood with stationarity constraints.
                2. Estimates on a daily return series matched to a standard library within a small tolerance.
                3. The effect of different variance initialisations and starting values recorded.
                4. Volatility persistence and half-life computed and interpreted.

                ## Notes
                Persistence close to one is common on daily data. It can mean genuine long memory or an unmodelled break in the level of volatility.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A hand-coded GARCH(1,1) matches a library's estimates on the same series, with initialisation sensitivity and half-life documented."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write the GARCH(1,1) log likelihood with its parameter constraints"
                - "Fit it to a daily return series with a general optimiser"
                - "Compare your estimates with a standard library on the same data"
                - "Test three variance initialisations and record the differences"
            - name: Asymmetric and fat-tailed GARCH variants
              description: |-
                ## Purpose
                Equity volatility tends to rise more after falls than after rises of the same size, and returns have heavier tails than a normal GARCH implies. Fitting EGARCH and GJR-style asymmetric models with Student t or skewed errors, and testing whether the extra parameters are needed, shows which features your data really has.

                ## Milestones
                1. Symmetric GARCH, GJR and EGARCH models fitted to the same series.
                2. Normal and Student t error distributions compared for each.
                3. Likelihood ratio or information criterion comparisons recorded in one table.
                4. News impact curves plotted to show the asymmetry each model implies.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Six GARCH variants are compared in one table on the same series, with news impact curves and a recorded preferred specification."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Fit symmetric, GJR and EGARCH models to one equity index series"
                - "Refit each with normal and Student t errors"
                - "Tabulate log likelihoods and information criteria side by side"
                - "Plot the news impact curve for each asymmetric model"
            - name: HAC standard errors and bandwidth choice
              description: |-
                ## Purpose
                Ordinary standard errors on time series regressions with autocorrelated or heteroskedastic errors are usually far too small, which makes weak predictors look significant. Learning Newey-West and related corrections, and how the bandwidth choice changes the answer, is essential before reading any return predictability result.

                ## Milestones
                1. One predictive regression estimated with ordinary, White and Newey-West standard errors.
                2. The Newey-West result shown across several bandwidths, including an automatic selection rule.
                3. A rule written for which correction and bandwidth your team uses by default.
                4. Three past results re-examined with the default correction.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A default HAC correction and bandwidth rule is written down and three past regression results have been re-checked under it."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Run one predictive regression with ordinary and White errors"
                - "Add Newey-West errors at four different bandwidths"
                - "Write the default correction and bandwidth rule for the team"
                - "Re-check three past regression results under the default rule"
            - name: State space models and the Kalman filter
              description: |-
                ## Purpose
                Hidden quantities such as a time-varying beta, a latent trend or an unobserved fair value can be estimated with state space models and the Kalman filter. Building a local level model and a time-varying regression yourself teaches the filter, the smoother and maximum likelihood for the noise variances.

                ## Milestones
                1. A local level model coded and fitted to a noisy series, with filtered and smoothed estimates plotted.
                2. A time-varying coefficient regression estimated and compared with a rolling regression.
                3. Noise variances estimated by maximum likelihood and their effect on smoothness explained.
                4. A note on initialisation and the diffuse prior problem.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A coded local level model and time-varying regression are compared with rolling estimates, with variance estimation and initialisation documented."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Code the Kalman filter for a local level model"
                - "Fit it to a noisy series and plot filtered and smoothed states"
                - "Estimate a time-varying beta and compare with a rolling regression"
                - "Write a short note on initialisation choices"
            - name: Markov regime-switching models
              description: |-
                ## Purpose
                Markets often seem to move between calm and stressed states with different means and volatilities, and regime-switching models make that idea testable. Estimating a two-state model, reading its smoothed probabilities and checking whether the regimes are stable out of sample shows when the idea helps and when it only describes the past.

                ## Milestones
                1. A two-state switching model in mean and variance estimated on a return series.
                2. Smoothed regime probabilities plotted against known market events.
                3. Expected regime durations computed from the transition matrix.
                4. Filtered probabilities in a held-out period compared with the in-sample smoothed ones.

                ## Notes
                Smoothed probabilities use future data and always look prescient. Judge the model on filtered probabilities only.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A two-state switching model is fitted with regime durations reported and filtered held-out probabilities compared with in-sample smoothed ones."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Fit a two-state switching model in mean and variance"
                - "Plot smoothed probabilities beside dated market events"
                - "Compute expected durations from the transition matrix"
                - "Compare held-out filtered probabilities with in-sample smoothed ones"
            - name: Choosing a volatility specification with formal tests
              description: |-
                ## Purpose
                GARCH(1,1) with normal errors is the default because it often works, but defaults should be tested rather than assumed. Comparing a short list of specifications by likelihood ratio tests, information criteria and out-of-sample variance forecast losses produces a specification choice you can defend in review.

                ## Milestones
                1. A shortlist of four specifications agreed before any fitting.
                2. In-sample comparisons by likelihood ratio and information criteria recorded.
                3. Out-of-sample variance forecasts compared with a loss function suited to noisy volatility proxies.
                4. A decision recorded on the model card with the evidence behind it.

                ## Notes
                Use a loss function such as QLIKE that stays consistent when the volatility proxy is noisy. Mean squared error on squared returns can rank models wrongly.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One volatility specification is chosen from a pre-agreed shortlist of four, with in-sample and out-of-sample evidence recorded on its model card."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write the shortlist of four specifications before fitting anything"
                - "Run likelihood ratio and information criterion comparisons"
                - "Compare out-of-sample variance forecasts with a QLIKE loss"
                - "Record the chosen specification and evidence on the model card"
            - name: Outlier and jump handling in estimation
              description: |-
                ## Purpose
                One extreme day can dominate a GARCH estimate or a cointegration test, and whether that day is an error, a genuine jump or the most informative observation in the sample changes the right treatment. A written policy for detecting, investigating and treating outliers, with results shown both ways, keeps estimates from resting on a single print.

                ## Milestones
                1. A detection rule for suspicious observations based on scaled returns or residuals.
                2. Each flagged observation checked against a second data source or news record.
                3. Treatment options defined: correct, dummy out, winsorise or keep.
                4. Key estimates reported with and without treatment so the effect is visible.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An outlier policy is written and one live model reports its estimates with and without treated observations side by side."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Set a rule for flagging suspicious returns or residuals"
                - "Check every flagged observation against a second source"
                - "Decide which treatment applies to errors and to genuine jumps"
                - "Report one model's estimates with and without the treatment"
            - name: Correcting for overlapping return observations
              description: |-
                ## Purpose
                Overlapping observations, such as monthly returns sampled daily or annual returns sampled monthly, create strong artificial autocorrelation and make predictive regressions look far more significant than they are. Deciding how to correct, whether by Hansen-Hodrick or Newey-West errors, non-overlapping subsamples or simulation, prevents one of the most common errors in predictability research.

                ## Milestones
                1. Every regression in current work that uses overlapping horizons identified.
                2. Corrected standard errors computed by at least two methods for each.
                3. A simulation showing the size distortion under the null for your sample length.
                4. A default correction method written into the team conventions.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "All overlapping-horizon regressions in current work carry corrected standard errors by two methods and a default method is documented."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Find every regression using overlapping return horizons"
                - "Compute corrected standard errors by two methods for each"
                - "Simulate the null distribution of the t-statistic at your sample length"
                - "Write the default correction into the team conventions"
            - name: Missing data and non-synchronous trading treatment
              description: |-
                ## Purpose
                Missing observations and stale prices from thinly traded assets bias autocorrelation upwards and correlations downwards, and the usual fix of dropping missing days can distort both further. Comparing a few treatments on your own data and choosing one deliberately is better than inheriting whatever the data loader does.

                ## Milestones
                1. The share of missing and stale observations measured for each series.
                2. Three treatments compared: listwise deletion, carry forward with a flag and a model-based fill.
                3. The effect on first-order autocorrelation and on correlations recorded for each treatment.
                4. A chosen treatment written into the model card for each affected series.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three missing-data treatments are compared on real series and the chosen treatment is recorded on each affected model card."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Measure the share of missing and stale prices in each series"
                - "Apply deletion, flagged carry forward and a model-based fill"
                - "Compare autocorrelation and correlation under each treatment"
                - "Record the chosen treatment on each affected model card"
            - name: Long memory and fractional integration tests
              description: |-
                ## Purpose
                Some series, such as absolute returns, volatility and certain rate spreads, are neither stationary in the usual short-memory sense nor unit root processes. Estimating the fractional differencing parameter and testing for long memory helps decide whether an ARFIMA or FIGARCH style model is warranted or whether a break in level explains the persistence instead.

                ## Milestones
                1. The fractional parameter estimated for three series by a semiparametric method, with bandwidth sensitivity shown.
                2. An ARFIMA model fitted where long memory looks present.
                3. A check of whether a level shift could produce the same apparent persistence.
                4. A recorded decision on whether long memory models are used in your work.

                ## Notes
                Level shifts and long memory are notoriously hard to tell apart. State which one you assume and why.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Fractional integration estimates for three series are recorded with bandwidth sensitivity and a written decision on using long memory models."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Estimate the fractional parameter for three persistent series"
                - "Show how the estimate changes across bandwidths"
                - "Fit an ARFIMA model where long memory appears present"
                - "Test whether a level shift explains the persistence equally well"
            - name: Rolling versus expanding estimation window decision
              description: |-
                ## Purpose
                Rolling windows adapt to change but throw away data and raise estimation noise, while expanding windows are stable but slow to notice a new regime. Testing both, plus a few window lengths, on out-of-sample forecast losses gives a window choice backed by evidence rather than habit.

                ## Milestones
                1. Expanding and three rolling window lengths defined before testing.
                2. Out-of-sample forecasts produced under each scheme for one live model.
                3. Losses compared and tested for significant differences.
                4. The chosen scheme and window recorded on the model card.

                ## Notes
                Choosing the window by looking at which performed best out of sample is itself a form of selection. Keep the candidate list short and fixed.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An estimation window scheme is chosen from a fixed list of four by out-of-sample loss comparison, and recorded on the model card."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Fix the expanding scheme and three rolling window lengths"
                - "Generate out-of-sample forecasts under each scheme"
                - "Compare the losses and test whether the differences are significant"
                - "Record the chosen window on the model card"
            - name: Forecast comparison with Diebold-Mariano tests
              description: |-
                ## Purpose
                Lower average loss in one sample is not proof that one model forecasts better, especially when losses are autocorrelated and the sample is short. Learning the Diebold-Mariano test, its small-sample corrections and the issues with nested models gives a fair verdict on forecast comparisons.

                ## Milestones
                1. Two competing forecasts compared with a Diebold-Mariano test using HAC variance.
                2. The small-sample correction applied and its effect noted.
                3. A nested model comparison run with a test designed for nested models.
                4. A short guide for colleagues on which test applies when.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A non-nested and a nested forecast comparison are run with appropriate tests, and a one-page guide to test choice is shared."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Take two competing forecasts from the forecast ledger"
                - "Run a Diebold-Mariano test with HAC variance and the small-sample fix"
                - "Run a nested comparison with a test built for nested models"
                - "Ask the agent to draft a one-page guide on choosing the test"
            - name: Multivariate volatility model choice
              description: |-
                ## Purpose
                Correlations between assets change over time and jump together in a crisis, so constant correlation estimates understate joint risk. Comparing constant conditional correlation, DCC and a restricted BEKK model on a small set of assets shows what each costs in parameters and what each gains in fit and forecast accuracy.

                ## Milestones
                1. A set of three to six assets chosen with a reason.
                2. CCC, DCC and a diagonal BEKK model estimated on the same data.
                3. Fitted correlation paths plotted against known stress periods.
                4. Covariance forecasts compared out of sample and a choice recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "CCC, DCC and diagonal BEKK models are compared on the same assets out of sample, with the chosen model and reasons recorded."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Choose three to six assets and note why"
                - "Estimate CCC, DCC and diagonal BEKK models on the same data"
                - "Plot fitted correlations through two stress periods"
                - "Compare out-of-sample covariance forecasts and record the choice"
            - name: Research seminar on a time series finding
              description: |-
                ## Purpose
                Presenting a time series result to sceptical colleagues is the fastest way to find the assumption you did not test. Preparing a seminar that shows the data, the stationarity and lag choices, the diagnostics and the out-of-sample evidence, and inviting the hardest questions, improves the work more than another week of analysis.

                ## Milestones
                1. A date booked and two colleagues asked to act as critical discussants.
                2. Slides covering data, specification choices, diagnostics and out-of-sample results.
                3. A slide listing the assumptions most likely to be wrong.
                4. Questions and follow-up actions recorded after the session.

                ## Notes
                Start from the **Meeting notes** template for the questions. Show the failed specifications too, not only the one that worked.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A seminar is delivered with two named discussants, and its questions and follow-up actions are recorded within two days."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Book a seminar slot and ask two colleagues to be discussants"
                - "Build slides covering data, choices, diagnostics and out-of-sample results"
                - "Add a slide on the assumptions most likely to be wrong"
                - "Record every question and follow-up action after the session"
            - name: Model validation review meeting
              description: |-
                ## Purpose
                Validation teams and independent reviewers will ask why a series was treated as stationary, why those lags and why that error distribution. Preparing the model card, diagnostics and forecast ledger in advance, and walking through them in a structured review, turns validation into a check rather than an interrogation.

                ## Milestones
                1. The model card, diagnostic reports and forecast ledger sent to reviewers a week ahead.
                2. Answers prepared for the likely questions on stationarity, lag choice and error distribution.
                3. Review findings recorded with owner and due date for each.
                4. Every finding closed or accepted with a written rationale.

                ## Notes
                Start from the **Meeting notes** template. Reviewers trust a list of known limits far more than a model with none.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A validation review is held with documents sent a week ahead and every finding closed or accepted in writing."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Agree the review date and the reviewers"
                - "Send the model card, diagnostics and forecast ledger a week ahead"
                - "Prepare answers on stationarity, lags and error distribution"
                - "Log every finding with an owner and close each one"
            - name: Conference or workshop paper submission
              description: |-
                ## Purpose
                Conference submissions force a level of rigour, clarity and literature positioning that internal notes rarely reach, and feedback from discussants is valuable even after a rejection. Choosing one financial econometrics conference or workshop and working back from its deadline turns a good internal result into a citable paper, where your employer's policy allows it.

                ## Milestones
                1. Employer approval for external publication confirmed in writing, if you are employed.
                2. A target conference chosen and its deadline and format requirements noted.
                3. A full draft with sensitivity checks reviewed by one colleague.
                4. The paper submitted and the discussant's comments logged after the event.

                ## Notes
                Check your contract and compliance rules before submitting anything built on proprietary data or methods.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A paper is submitted to a named financial econometrics conference with written employer approval and logged reviewer or discussant feedback."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Check your contract and get written approval to publish"
                - "Pick a conference and note its deadline and page limit"
                - "Finish a full draft and ask one colleague for a critical read"
                - "Submit the paper and log the feedback you receive"
            - name: Annual model refresh and re-specification
              description: |-
                ## Purpose
                Once a year every live specification deserves a fresh look rather than another re-estimation: new data, a year of forecast losses and any detected breaks may mean a different model now fits better. A planned yearly refresh, run against the same shortlist rules as the original choice, keeps models from being kept only because they are familiar.

                ## Milestones
                1. Each live model's year of diagnostics, breaks and forecast losses summarised.
                2. Alternatives re-tested under the original shortlist and selection rules.
                3. A keep, change or retire decision recorded for each model.
                4. Model cards and the inventory updated to reflect every decision.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Every live model has a recorded keep, change or retire decision from the yearly refresh, with updated model cards and inventory."
                cadence: cyclic
              tasks:
                - "Summarise each model's year of diagnostics and forecast losses"
                - "Re-test alternatives under the original selection rules"
                - "Record a keep, change or retire decision for every model @recurring(yearly)"
                - "Update the model cards and the inventory"
            - name: Re-estimation after a market shock
              description: |-
                ## Purpose
                After a crash, a policy surprise or a liquidity crisis, models estimated on calm data can be badly wrong, and simply adding the new data can distort parameters for years. A planned response, covering what to check, whether to add a dummy or a break and how to communicate changes, avoids panicked re-specification in the week it matters most.

                ## Milestones
                1. A written trigger for what counts as a shock worth this review.
                2. Diagnostics, break tests and parameter shifts checked for every affected model.
                3. A choice recorded for each model: absorb the data, model the break or pause use.
                4. Users of each affected model told what changed and why.

                ## Notes
                Write the trigger and the checklist now, while markets are calm, so the response is planned rather than improvised.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A shock response checklist exists, and after any triggering event every affected model has a recorded decision communicated to its users."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the trigger that defines a shock worth reviewing"
                - "Draft the checklist of diagnostics and break tests to run"
                - "List which models and users would be affected"
                - "Prepare a short template for telling users what changed"
            - name: Economist moving into financial time series
              description: |-
                ## Purpose
                Economists arriving from macro or applied micro work know regression well but meet daily data, fat tails, volatility clustering and non-synchronous markets for the first time. A focused conversion plan that maps what transfers and what does not gets you productive in a few months rather than a year.

                ## Milestones
                1. A list of the methods you already know and how they change on daily financial data.
                2. The first-look checklist and stationarity protocol applied to five market series.
                3. One familiar macro model rebuilt at a financial frequency with GARCH errors.
                4. A short note on the three biggest differences you found.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Five market series are profiled and one macro model is rebuilt at a financial frequency, with a written note on the main differences."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "List the econometric methods you already use and their assumptions"
                - "Run the first-look checklist on five daily market series"
                - "Rebuild one macro model at weekly frequency with GARCH errors"
                - "Write a note on the three biggest surprises"
            - name: PhD thesis chapter on financial time series
              description: |-
                ## Purpose
                PhD students working on financial econometrics need a chapter that is both methodologically careful and readable by a committee that includes non-specialists. Planning the chapter around one clear question, with simulations that show the method works and an empirical application with honest out-of-sample results, keeps it from sprawling.

                ## Milestones
                1. The research question and contribution agreed with your supervisor in one paragraph.
                2. A Monte Carlo study showing the method's size and power in realistic samples.
                3. An empirical application with diagnostics and out-of-sample evidence.
                4. A full chapter draft returned with supervisor comments.

                ## Notes
                Committees often ask why the simulation design matches real data. Calibrate it to estimates from your empirical series.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A complete thesis chapter with a Monte Carlo study and an empirical application has been reviewed by the supervisor."
                cadence: phased
                effort_hours_estimate: "300"
              tasks:
                - "Write the chapter's question and contribution in one paragraph"
                - "Design a Monte Carlo study calibrated to real data"
                - "Run the empirical application with full diagnostics"
                - "Send a complete draft to your supervisor"
            - name: Taking over another researcher's econometric models
              description: |-
                ## Purpose
                Inherited models arrive with undocumented choices about sample, lags, adjustments and error distributions, and the person who made them may have left. A structured handover that rebuilds, documents and tests each model before you rely on it prevents you from defending decisions you never made.

                ## Milestones
                1. Every inherited model listed with its code location and outputs.
                2. Each model rerun from scratch and its outputs matched to the last production values.
                3. A model card written for each, with unknown choices marked as unknown.
                4. A short list of models to keep, fix or retire agreed with your manager.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Every inherited model is rerun and matched to production, has a model card, and carries an agreed keep, fix or retire decision."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "List every inherited model with code location and outputs"
                - "Rerun each model and compare with the last production values"
                - "Write a model card for each, marking unknown choices clearly"
                - "Agree keep, fix or retire for each model with your manager"
            - name: Independent checks for a small research team
              description: |-
                ## Purpose
                Without a validation function, the person who built a model is often the only one who checks it, which is where blind spots survive. A light peer review swap with one colleague each month, using the model card and diagnostics as the checklist, gives some independence at almost no cost.

                ## Milestones
                1. A review partner agreed, inside the team or a trusted contact under appropriate confidentiality.
                2. A short review checklist based on the model card and residual diagnostics.
                3. One model reviewed each month with findings written down.
                4. Findings tracked to closure in the risk register.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "One model a month receives a written peer review against the checklist, with findings tracked to closure."
                cadence: rolling
              tasks:
                - "Agree a review partner and the confidentiality rules"
                - "Write a ten-point review checklist from the model card"
                - "Swap one model for peer review with your partner @recurring(monthly:24)"
                - "Track each review finding to closure in the risk register"
            - name: Mentoring a junior on time series basics
              description: |-
                ## Purpose
                Junior researchers often learn time series methods from code they copy, inheriting its mistakes along with its shortcuts. A short weekly mentoring session that works through stationarity, lags, residuals and spurious regression on real team data passes on the judgement that textbooks leave out.

                ## Milestones
                1. A six-week outline covering first looks, stationarity, ARMA, cointegration, GARCH and forecast evaluation.
                2. One exercise per week on a real series with a written answer.
                3. The junior presenting one finished analysis to the team.
                4. Feedback from the junior on what to change in the outline.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A six-week mentoring outline is delivered, with six completed exercises and one team presentation by the junior."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Draft a six-week outline of topics and exercises"
                - "Choose a real team series for each weekly exercise"
                - "Hold a weekly session and review the exercise answer @recurring(weekly:tue)"
                - "Ask for feedback on the outline after week six"
            - name: Mixed-frequency regressions with MIDAS
              description: |-
                ## Purpose
                Mixing monthly or quarterly targets with daily market data usually means averaging away the daily information. Mixed data sampling regressions let daily or weekly predictors enter a lower-frequency model with a small number of parameters, which is useful for nowcasting and for linking volatility to the macro cycle.

                ## Milestones
                1. One low-frequency target and one high-frequency predictor chosen with an economic reason.
                2. A MIDAS regression estimated with a parsimonious lag weighting scheme.
                3. Results compared with a simple averaged-predictor regression out of sample.
                4. The weighting function plotted and interpreted.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A MIDAS regression is estimated and compared with an averaged-predictor benchmark out of sample, with its weighting function documented."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Choose a quarterly target and a daily predictor"
                - "Estimate a MIDAS regression with a two-parameter weighting scheme"
                - "Compare out-of-sample errors with an averaged-predictor regression"
                - "Plot the estimated lag weights and note what they imply"
            - name: Threshold and nonlinear error correction
              description: |-
                ## Purpose
                Linear error correction assumes deviations from equilibrium are corrected at the same speed whatever their size, but transaction costs and limits to arbitrage suggest small gaps may persist while large ones close fast. Threshold cointegration models test this directly, though with nonstandard inference that needs care.

                ## Milestones
                1. A linear error correction model estimated as the baseline.
                2. A threshold model with a band of inaction estimated by grid search.
                3. Linearity tested with bootstrap critical values, not standard tables.
                4. Adjustment speeds inside and outside the band compared and interpreted.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A threshold error correction model is compared with a linear baseline using a bootstrap linearity test, with regime adjustment speeds recorded."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Estimate a linear error correction model as the baseline"
                - "Grid search a threshold band for the error correction term"
                - "Bootstrap the linearity test critical values"
                - "Compare adjustment speeds inside and outside the band"
            - name: Bayesian VAR and shrinkage for many series
              description: |-
                ## Purpose
                Unrestricted VARs with many series run out of degrees of freedom quickly and forecast poorly. Shrinkage priors such as the Minnesota prior, or penalised estimation, let a large VAR use many series while keeping forecasts stable, and comparing them honestly with a small VAR shows whether the extra series earn their place.

                ## Milestones
                1. A small unrestricted VAR set as the benchmark.
                2. A larger VAR estimated with a Minnesota-style prior and the tightness chosen by a stated rule.
                3. Out-of-sample forecasts compared for both models across several horizons.
                4. The sensitivity of results to prior tightness documented.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A shrinkage VAR and a small VAR benchmark are compared out of sample over several horizons, with prior sensitivity documented."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Estimate a three-series unrestricted VAR as the benchmark"
                - "Build a larger VAR with a Minnesota-style shrinkage prior"
                - "Compare forecasts across one, three and twelve step horizons"
                - "Record how results change with prior tightness"
            - name: Granger causality and cross-market lead-lag
              description: |-
                ## Purpose
                Lead-lag findings between markets are easy to produce and hard to trust: non-synchronous closes, stale prices and multiple testing all create apparent predictability. Running Granger tests with synchronised data, corrected errors and a count of every pair tested, and then checking the result in later data, separates real information flow from artefacts.

                ## Milestones
                1. Every market pair to be tested listed before any test is run.
                2. Data synchronised under your calendar rule and stale prices flagged.
                3. Granger tests run with HAC errors and a multiple testing correction across all pairs.
                4. Surviving relationships rechecked on later data each month.

                ## Notes
                Statistical lead-lag is not economic causality and rarely survives transaction costs. Treat it as a description, not a signal.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A pre-listed set of pairs is tested with synchronised data and a multiple testing correction, and survivors are rechecked monthly on new data."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "List every market pair you will test before running anything"
                - "Synchronise the data under your calendar rule"
                - "Run Granger tests with HAC errors and a multiple testing correction"
                - "Recheck surviving relationships on the newest data @recurring(monthly:12)"
            - name: Copula models for dependence in residuals
              description: |-
                ## Purpose
                Dependence between assets in the tails is often stronger than correlation suggests, and copulas fitted to standardised GARCH residuals separate the marginal behaviour of each series from their joint behaviour. Fitting and comparing a few copula families shows whether tail dependence matters for the series you model.

                ## Milestones
                1. GARCH models fitted to each series and standardised residuals checked.
                2. Gaussian, Student t and one asymmetric copula fitted to the residuals.
                3. Copulas compared by likelihood and by implied tail dependence.
                4. A time-varying copula tried if dependence appears to change through stress periods.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Three copula families are fitted to standardised GARCH residuals and compared by likelihood and tail dependence in a written note."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Fit GARCH models and save standardised residuals for each series"
                - "Transform residuals to uniforms using their fitted distributions"
                - "Fit Gaussian, Student t and one asymmetric copula"
                - "Compare likelihoods and implied tail dependence in a short note"
---

# Financial Time Series Econometrics

Financial time series econometrics is the part of quant research that asks whether a series behaves the way the model assumes: whether it is stationary, how much memory it has, whether two prices are tied together and how volatility clusters. This area starts with foundations (a pinned toolkit, return conventions, sampling and calendar rules, a stationarity protocol and a model card), adds the operating routines that keep fitted models honest, then works through ARMA, unit roots, cointegration, VAR, GARCH, HAC errors, state space and regime-switching skills, a set of specification decisions, review events, situations for economists, PhD students and small teams, and finally specialist work on mixed frequencies, nonlinear adjustment, shrinkage and dependence.

The rhythms are a monthly re-estimation and stability log, monthly residual diagnostics, a monthly forecast loss ledger, monthly data vintage and break checks, a weekly literature scan, quarterly assumption and reproducibility reviews and a yearly model refresh. Pair the forecast ledger with the **Metrics log** template, the reading list with **Reading queue**, assumption failures with **Risk register** and validation sessions with **Meeting notes**. None of this is trading advice: a well specified model can still forecast badly, and most relationships that look stable in sample weaken or vanish out of sample. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
