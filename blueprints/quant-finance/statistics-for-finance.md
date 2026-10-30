---
id: quant-finance.statistics-for-finance
name: Statistics for Finance
description: "Return conventions, standard errors for every estimate, fat-tail fits, honest hypothesis tests, regression with the right errors and block bootstraps, built as habits a quant researcher or student keeps."
category: business
version: 1.0.0
tags: [quant-finance, statistics-for-finance, researcher, student, fat-tails, bootstrap, regression, hypothesis-testing]
author: Aurum Technology
starter_structure:
  templates:
    - skills-matrix
    - reading-queue
    - metrics-log
    - course
  pillars:
    - name: Quantitative Finance & Trading
      emoji: "🧮"
      description: "Systematic research and trading run like engineering: alpha research and honest backtests, factor and risk models, execution and microstructure, statistics and machine learning, quant development and market data, prop-firm evaluations and personal algorithmic trading under strict risk rules, and quant careers. Organisation and method only, never trading advice."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Statistics for Finance
          description: "The statistics quant work rests on: fat-tailed distributions, estimation error, hypothesis tests, regression pitfalls and bootstrap methods applied to returns."
          projects:
            - name: Statistics skills baseline for quant work
              description: |-
                ## Purpose
                Before choosing what to study, find out where you actually stand. Most people coming to quant finance are strong in some corners of statistics and quietly shaky in others, often standard errors, regression diagnostics or resampling. A scored baseline across about fifteen topics tells you which projects in this area to start with and which to archive.

                ## Milestones
                1. Fifteen core topics listed, from distributions and estimation through regression, resampling and tail methods.
                2. Each topic scored from one to four with a one-line piece of evidence, such as a problem solved or a result explained.
                3. The three weakest topics that matter most for your current work named as the first to fix.
                4. A date set to re-score the same list in twelve months.

                ## Notes
                Start from the **Skills matrix** template. Score on evidence, not confidence: if you cannot derive the standard error of a sample mean under autocorrelation from memory, that topic is not a four.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated skills matrix scores fifteen statistics topics with evidence and names the three to work on first."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List fifteen statistics topics your quant work depends on"
                - "Score each topic one to four with a line of evidence"
                - "Name the three weakest topics that matter for your current work"
                - "Archive projects in this area that cover topics you scored four"
            - name: Reproducible statistics notebook environment
              description: |-
                ## Purpose
                Statistical results that change when someone reruns them are not results. Pinning library versions, fixing random seeds and keeping data loading separate from analysis means a bootstrap interval you quote today can be regenerated exactly next year, by you or a reviewer.

                ## Milestones
                1. A project environment with pinned versions of the numerical, statistics and plotting libraries you use.
                2. A shared helper that sets and records the random seed for every simulation and resample.
                3. Data loading kept in one module, with the dataset version written into every output.
                4. A test notebook that reruns from scratch and produces byte-identical summary numbers.

                ## Notes
                Python with NumPy, SciPy, pandas and statsmodels, or R with its core packages, are both sensible defaults. Pick one for research and stay with it.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A clean rerun of the test notebook on a fresh machine reproduces the same summary statistics and bootstrap interval to the last digit."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Create a new environment file with pinned library versions"
                - "Write a helper that sets, logs and returns the random seed"
                - "Move data loading into one module that stamps the dataset version"
                - "Rerun the test notebook from scratch and compare the outputs"
            - name: Return conventions reference sheet
              description: |-
                ## Purpose
                Half the arguments about a strategy's numbers turn out to be arguments about conventions: simple or log returns, arithmetic or geometric means, square-root-of-time annualisation, excess over which rate. A one-page sheet that fixes your conventions, with the formula and a worked example for each, removes that whole class of error from your research.

                ## Milestones
                1. Simple and log return definitions written with when each aggregates correctly, across time or across assets.
                2. Annualisation rules for mean, volatility and Sharpe ratio stated, including the assumption behind square-root scaling.
                3. The gap between arithmetic and geometric mean shown on a real series, with the volatility drag approximation.
                4. Your default risk-free series and day-count convention for excess returns recorded.

                ## Notes
                Square-root-of-time scaling assumes returns are independent. If a series is autocorrelated, the annualised volatility it gives is wrong, and the sheet should say so.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page conventions sheet with formulas and a worked example for each is saved where every research notebook can link to it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the simple and log return formulas with an aggregation example"
                - "Compute arithmetic and geometric means on one real price series"
                - "State your annualisation rules and the independence assumption behind them"
                - "Record your default risk-free series and day-count convention"
            - name: Clean daily return dataset for practice
              description: |-
                ## Purpose
                Every skill in this area needs data you trust and can share. Building one small dataset from public sources, say a broad equity index, a government bond index, a currency pair and ten individual stocks with dividend and split adjustment, gives you a fixed playground for every method and makes your exercises comparable over time.

                ## Milestones
                1. Daily total return series for about fifteen instruments over at least fifteen years, from documented public sources.
                2. Splits and dividends handled, with a check against a known adjusted close on three dates.
                3. Missing days, zero returns and suspicious jumps above a set threshold flagged in a quality report.
                4. The dataset saved with a version number and a one-page readme listing sources and known gaps.

                ## Notes
                Keep it small. A practice dataset is for learning methods, not for strategy research, and licensing terms on free data often forbid redistribution, so check before sharing it.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A versioned dataset of at least fifteen daily total return series exists with a quality report and a readme naming every source."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Choose fifteen instruments across equities, bonds and currencies"
                - "Download adjusted daily prices and note each source and its terms"
                - "Check adjusted closes against three known dates per instrument"
                - "Flag gaps, zero returns and large jumps in a quality report"
                - "Save version one of the dataset with a readme"
            - name: Descriptive statistics report for one return series
              description: |-
                ## Purpose
                Looking hard at one series teaches more than skimming fifty. Mean, volatility, skewness, kurtosis, quantiles, the ten worst days and a plot of rolling volatility, all with standard errors where they exist, show you how far real returns sit from the textbook normal and how little the sample mean tells you.

                ## Milestones
                1. A table of mean, standard deviation, skewness, excess kurtosis and the 1, 5, 95 and 99 percent quantiles.
                2. Standard errors or bootstrap intervals beside the mean, volatility and skewness.
                3. The ten worst and ten best days listed with dates and a short note on what happened.
                4. A histogram with a fitted normal overlaid and a rolling one-year volatility chart.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A two-page report on one return series shows the moment table with uncertainty, the extreme days and both charts."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pick one equity index series from the practice dataset"
                - "Compute the moment and quantile table with standard errors"
                - "List the ten worst and best days with dates and events"
                - "Plot the histogram against a normal and the rolling volatility"
            - name: Statistics reading list for quant finance
              description: |-
                ## Purpose
                Short, ordered lists beat a shelf of unread books. Three to five sources covering probability and inference, regression and econometrics for finance, resampling and the statistics of returns, read in order with exercises, give a researcher or student a path through the material instead of a pile of tabs.

                ## Milestones
                1. Five sources chosen and ordered, each with the chapters that matter for quant work marked.
                2. A weekly reading slot fixed in your calendar.
                3. Notes for each finished chapter kept in one place, with at least two exercises worked.
                4. The list reviewed after three months and one source swapped if it is not earning its time.

                ## Notes
                Start from the **Reading queue** template. A standard mathematical statistics text, an empirical finance econometrics text and a book on the bootstrap cover most of what this area needs.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An ordered reading list of five sources exists, with chapter notes and worked exercises for at least the first source."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Choose five statistics sources and mark the relevant chapters"
                - "Put a weekly reading slot in your calendar"
                - "Work two exercises at the end of each chapter you finish"
                - "Read one marked chapter and write a half-page of notes @recurring(weekly:sun)"
            - name: Simulation check for every new formula
              description: |-
                ## Purpose
                The fastest way to catch a wrong standard error, a biased estimator or a misremembered test is to simulate data where you know the true answer. A small harness that generates returns from chosen distributions, runs your estimator many times and compares the spread with the formula turns every new method into something you have verified, not just copied.

                ## Milestones
                1. A simulation helper that draws normal, Student t and autocorrelated return series of any length.
                2. A routine that runs any estimator over a thousand draws and reports bias and actual standard deviation.
                3. The routine run on the sample mean, sample volatility and Sharpe ratio, with results compared to textbook formulas.
                4. A rule written in your research notes that no new estimator is used before it passes a simulation check.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A simulation harness exists and has confirmed or corrected the standard error formulas for the mean, volatility and Sharpe ratio."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write a function that simulates normal, t and AR(1) return series"
                - "Write a routine that repeats an estimator and reports bias and spread"
                - "Check the Sharpe ratio standard error formula against the simulation"
                - "Add the simulation rule to the top of your research notes"
            - name: Standard error sheet for common financial estimators
              description: |-
                ## Purpose
                A Sharpe ratio of 0.8 from five years of data could easily be zero, and a correlation of 0.3 from sixty months has a wide interval. Writing down the standard error, its assumptions and a worked number for the mean, volatility, Sharpe ratio, correlation, beta and information coefficient means you can sanity-check any claim in your head.

                ## Milestones
                1. Standard error formulas for six estimators written with the assumptions each relies on.
                2. Each formula applied to a realistic example, such as five years of monthly data.
                3. The adjustment for non-normal returns noted for the Sharpe ratio standard error.
                4. The sheet checked against the simulation harness for at least three of the six estimators.

                ## Notes
                Under independence, the standard error of an annualised Sharpe ratio is roughly one over the square root of the number of years. That one line explains why short track records prove little.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A sheet gives the standard error, assumptions and a worked example for six estimators, three of them confirmed by simulation."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write the standard error formulas for mean, volatility and Sharpe ratio"
                - "Add correlation, regression beta and information coefficient"
                - "Work each formula on five years of monthly data"
                - "Confirm three formulas with the simulation harness"
            - name: Sampling frequency choice for each research question
              description: |-
                ## Purpose
                Daily, weekly and monthly data answer different questions, and using overlapping long-horizon returns quietly inflates t-statistics. Deciding the frequency from the question, before looking at results, and writing down why, keeps you from picking whichever frequency happens to look significant.

                ## Milestones
                1. A short guide stating which frequency suits mean estimation, volatility estimation, correlation and beta.
                2. The effect of non-synchronous closing times across markets on daily correlations written up with one example.
                3. A rule for overlapping observations, and the correction you will use when you cannot avoid them.
                4. Your current research questions each tagged with a chosen frequency and a one-line reason.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each active research question has a recorded sampling frequency chosen before results were seen, with a written reason."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write which frequency suits means, volatilities, correlations and betas"
                - "Compare daily and weekly correlation for two markets with different closes"
                - "Write your rule for overlapping long-horizon observations"
                - "Tag each current research question with its frequency and reason"
            - name: Weekly statistics problem set
              description: |-
                ## Purpose
                Reading about the bootstrap is not the same as running one on a Saturday morning and getting it wrong. A fixed weekly hour of problems, drawn from your weakest baseline topics and checked against solutions or simulation, builds the fluency that interviews, supervisors and research reviews all test.

                ## Milestones
                1. A bank of at least thirty problems sorted by topic, drawn from textbooks and past coursework.
                2. A weekly hour protected for problems, with a log of which were solved and which were not.
                3. Problems you got wrong revisited a month later and solved cleanly.
                4. Your weakest baseline topic moved up at least one score after three months.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Twelve consecutive weekly problem sessions are logged, with every missed problem retried and solved within a month."
                cadence: rolling
              tasks:
                - "Collect thirty problems sorted by topic into one file"
                - "Work four problems from your weakest topic for an hour @recurring(weekly:sat)"
                - "Retry last month's missed problems without notes @recurring(monthly:3)"
                - "Mark each problem solved, partly solved or missed in the log"
            - name: Monthly distribution check on your research universe
              description: |-
                ## Purpose
                Return distributions are not fixed. Tails fatten in stress, skew flips and correlations jump, and a model calibrated in a calm year can be badly wrong in the next. A short monthly table of volatility, skewness, kurtosis and tail quantiles for the series you research shows when the data has moved away from what your methods assume.

                ## Milestones
                1. A script that produces the monthly distribution table for every series in your research universe.
                2. A log with one row per series per month, kept in one place.
                3. A threshold that flags any series whose kurtosis or tail quantile moves outside its usual range.
                4. Each flag followed by a one-line note on what changed and whether any analysis needs rerunning.

                ## Notes
                Start from the **Metrics log** template. A rolling window of one to three years is a reasonable default for the comparison range.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly distribution tables are logged, and every flagged series carries a written note."
                cadence: rolling
              tasks:
                - "Write the script that builds the distribution table for your universe"
                - "Run the distribution table and add it to the log @recurring(monthly:9)"
                - "Write a note for every series outside its usual range"
                - "Set the flag thresholds from the last three years of data"
            - name: Uncertainty beside every reported number
              description: |-
                ## Purpose
                Point estimates on their own invite people to treat it as fact. Making it a standing rule that every mean, Sharpe ratio, correlation or beta you report carries a standard error or interval, and checking your own recent output once a month, changes how you and your reviewers read every result.

                ## Milestones
                1. The rule written at the top of your research template: no estimate reported without its uncertainty.
                2. Plotting and table helpers updated so intervals appear by default.
                3. A monthly self-audit of the last five reports or notebooks shared, with any bare numbers fixed.
                4. Three months of audits with no bare headline numbers left in shared work.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly audits for three months in a row find no shared headline estimate without a standard error or interval."
                cadence: rolling
              tasks:
                - "Write the uncertainty rule into your research report template"
                - "Change table helpers so they print intervals by default"
                - "Audit your last five shared results for bare point estimates @recurring(monthly:14)"
                - "Fix every bare number the audit finds before the next review"
            - name: Assumptions checklist before any statistical test
              description: |-
                ## Purpose
                Most bad conclusions in return research come from tests whose assumptions were never checked: independence, constant variance, normal errors, no structural break. A one-page checklist run before each test, and a monthly look back at whether you actually ran it, turns good intentions into a habit a reviewer can see.

                ## Milestones
                1. A checklist covering independence, heteroskedasticity, normality, stationarity of the sample and outliers.
                2. For each item, the diagnostic you will run and what you will do if it fails.
                3. The checklist pasted into every new analysis notebook as its first section.
                4. A monthly review counting how many analyses had the checklist completed.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every analysis started in the last three months opens with a completed assumptions checklist, confirmed by the monthly count."
                cadence: rolling
              tasks:
                - "Draft the five-item assumptions checklist with a diagnostic for each"
                - "Write what you will do when each assumption fails"
                - "Add the checklist as the first section of your notebook template"
                - "Count analyses with a completed checklist this month @recurring(monthly:22)"
            - name: Quarterly refresh of the practice dataset
              description: |-
                ## Purpose
                Practice data that stops at an old date slowly loses its value, and silent changes in a free source can break every exercise built on it. Refreshing each quarter, rerunning the quality report and bumping the version number keeps the playground current and your old results reproducible from the archived version.

                ## Milestones
                1. The download and cleaning steps scripted so a refresh takes under an hour.
                2. Each refresh saved as a new version, with the previous one archived unchanged.
                3. The quality report rerun and compared with the last version, with differences in history explained.
                4. The readme updated with the new end date and any source changes.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly versions of the dataset exist, each with a quality report and an updated readme."
                cadence: cyclic
              tasks:
                - "Script the download and cleaning steps end to end"
                - "Refresh the dataset, save a new version and rerun the quality report @recurring(quarterly)"
                - "Explain any change to historical values between versions"
                - "Update the readme with the new end date"
            - name: Monthly statistics review swap with a peer
              description: |-
                ## Purpose
                Statistical mistakes are far easier to see in someone else's work. Swapping one analysis a month with a fellow researcher or classmate, each checking the other's assumptions, standard errors and conclusions, catches errors before a supervisor or portfolio manager does and teaches you what you habitually miss.

                ## Milestones
                1. A peer agreed with, plus a short list of what each review covers.
                2. One analysis exchanged each month with written comments returned within a week.
                3. Every comment answered with a fix or a reason for leaving it.
                4. A list of the error types you most often make, built from six months of comments.

                ## Notes
                Share only work you are allowed to share. For employer research, keep the swap inside the firm or use the practice dataset.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Six monthly review swaps are completed, with written comments exchanged and every comment answered."
                cadence: rolling
              tasks:
                - "Ask one peer to swap a monthly statistics review"
                - "Agree the five things each review checks"
                - "Send one analysis and review theirs @recurring(monthly:18)"
                - "Answer every comment with a fix or a reason"
            - name: Known-answer test case library
              description: |-
                ## Purpose
                Numerical code fails quietly: a wrong degrees-of-freedom term or a misaligned lag still prints a plausible number. A growing library of test cases with known answers, from simulated data or published worked examples, run whenever the code changes, catches those errors before they reach a result.

                ## Milestones
                1. Ten test cases written, each with input data, the expected output and its source.
                2. Cases cover moments, t-tests, regression standard errors, HAC errors and the bootstrap.
                3. The cases running automatically whenever the statistics helpers change.
                4. One new case added each month, aimed at the last bug you found.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least fifteen known-answer cases run automatically and all pass on the current version of your statistics helpers."
                cadence: rolling
              tasks:
                - "Write ten test cases with inputs, expected outputs and sources"
                - "Wire the cases to run whenever the helpers change"
                - "Add one known-answer case for the latest bug you found @recurring(monthly:27)"
                - "Check the full case library still passes after library upgrades @recurring(quarterly)"
            - name: Statistical error log and weekly review
              description: |-
                ## Purpose
                Each mistake you catch is a lesson you will forget unless it is written down. A plain log of statistical errors, from a forgotten annualisation to a regression run on overlapping data, reviewed for ten minutes every Friday, shows your recurring patterns and feeds the checklist and the test library.

                ## Milestones
                1. A log with date, what went wrong, how it was caught and the fix.
                2. Every error found by you, a peer or a reviewer entered within a day.
                3. A weekly ten-minute review that links each new error to a checklist item or test case.
                4. A quarterly summary of the three most common error types.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The error log has entries for every caught mistake over three months, and each one is linked to a checklist item or test case."
                cadence: rolling
              tasks:
                - "Create the error log with date, error, detection and fix fields"
                - "Review the week's errors and link each to a check @recurring(weekly:fri)"
                - "Write a quarterly summary of the three most common error types"
                - "Add a checklist item for any error type seen twice"
            - name: Daily ten-minute estimation drill
              description: |-
                ## Purpose
                Quick mental estimates are what let you challenge a number in a meeting: the t-statistic of a Sharpe ratio, the interval on a correlation, the probability of a five-sigma day under a t distribution. Ten minutes of flashcard-style drills each day builds that instinct far faster than an occasional long session.

                ## Milestones
                1. A deck of about fifty estimation prompts with worked answers.
                2. A daily ten-minute slot attached to an existing routine, such as the first coffee.
                3. Accuracy tracked weekly, with prompts you miss repeated more often.
                4. Twenty prompts answered within ten percent of the exact value without paper.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Thirty days of drills are logged and at least twenty prompts can be answered within ten percent of the exact value."
                cadence: rolling
              tasks:
                - "Write fifty estimation prompts with worked answers"
                - "Do ten minutes of estimation prompts with your first coffee @recurring(daily)"
                - "Record your weekly accuracy and move missed prompts to the front"
                - "Add five new prompts from this week's research"
            - name: Fat tails with Student t and QQ plots
              description: |-
                ## Purpose
                Daily equity returns routinely show moves that a normal distribution says should happen once in thousands of years. Fitting normal and Student t distributions by maximum likelihood, reading QQ plots and running normality tests on your own data shows exactly where the normal fails and how much the tail probability changes.

                ## Milestones
                1. Normal and Student t distributions fitted to three return series, with the fitted degrees of freedom recorded.
                2. QQ plots against both distributions saved and the tail departures described in writing.
                3. Jarque-Bera and one other normality test run, with what the results do and do not tell you noted.
                4. The probability of the worst observed day computed under both fits and compared with its actual frequency.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A short write-up shows normal and t fits, QQ plots and normality tests for three series, with worst-day probabilities compared."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Fit normal and Student t distributions to three return series"
                - "Draw QQ plots against both fits"
                - "Run normality tests and note what a rejection does and does not mean"
                - "Compare the probability of the worst day under each fit"
            - name: Testing whether a mean return differs from zero
              description: |-
                ## Purpose
                Means are the hardest thing to estimate in finance: with annual volatility of 15 percent, you need decades of data to tell a 5 percent mean from zero. Running one-sample and two-sample tests on real series, and working out the years of data needed for significance, makes the point stick far better than reading it.

                ## Milestones
                1. A one-sample t-test on the mean of three return series, with the interval reported.
                2. The number of years needed for a t-statistic of two calculated for several Sharpe ratios.
                3. A two-sample comparison of mean returns between two sub-periods, with the test's assumptions checked.
                4. A paragraph explaining why statistical and economic significance differ, using your own results.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A worked notebook shows mean tests on three series and a table of years needed for significance at several Sharpe ratios."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Run a one-sample t-test on three return series"
                - "Build a table of years needed for a t-statistic of two by Sharpe ratio"
                - "Test whether the mean differs between two sub-periods"
                - "Write a paragraph on statistical versus economic significance"
            - name: Regression with financial data and HAC errors
              description: |-
                ## Purpose
                Ordinary least squares standard errors assume independent, constant-variance errors, and financial residuals are rarely either. Rerunning a market beta regression with heteroskedasticity-consistent and Newey-West errors, and checking residuals for outliers and high-influence points, shows how often the default output overstates confidence.

                ## Milestones
                1. A market beta regression run on five stocks with OLS, White and Newey-West standard errors side by side.
                2. Residual plots and an autocorrelation check saved for each regression.
                3. High-influence observations found with Cook's distance and the regression rerun without them.
                4. A written rule for which standard errors you report by default and how you choose the lag length.

                ## Notes
                A beta that changes sign when two days are removed is a finding about the data, not a beta. Report the sensitivity.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five beta regressions are reported with three types of standard error, residual diagnostics and an influence check."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Regress five stocks on the market with plain OLS errors"
                - "Add White and Newey-West standard errors to each regression"
                - "Plot residuals and check them for autocorrelation"
                - "Find high-influence days with Cook's distance and rerun without them"
                - "Write your default standard error and lag length rule"
            - name: Block bootstrap for dependent returns
              description: |-
                ## Purpose
                The plain bootstrap assumes observations are independent, which destroys the volatility clustering in returns and gives intervals that are too narrow. Implementing the moving block and stationary bootstrap, choosing a block length and comparing intervals with the naive version teaches the resampling method quant research uses most.

                ## Milestones
                1. The iid bootstrap, moving block bootstrap and stationary bootstrap implemented and tested on simulated data.
                2. A block length chosen with a published selection method and the choice recorded.
                3. Bootstrap intervals for the Sharpe ratio of three series compared across the three methods.
                4. A note on when the bootstrap fails, such as for extreme quantiles and very short samples.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three bootstrap methods are implemented, pass known-answer tests and give compared Sharpe ratio intervals for three series."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Implement the iid bootstrap and test it on simulated normal data"
                - "Add moving block and stationary bootstrap versions"
                - "Choose a block length with a published selection method"
                - "Compare Sharpe ratio intervals across the three methods"
            - name: Correlation estimation and its instability
              description: |-
                ## Purpose
                Correlations drive diversification claims, yet a rolling sixty-day correlation can swing from 0.2 to 0.8 on noise alone. Comparing Pearson, Spearman and Kendall measures, putting intervals on them and looking at how correlation behaves in the worst market months shows which numbers deserve trust.

                ## Milestones
                1. Pearson, Spearman and Kendall correlations computed for five asset pairs with intervals.
                2. Rolling correlations plotted with the band expected from sampling noise alone.
                3. Correlation in the worst ten percent of months compared with the full sample.
                4. A short note on why conditioning on large moves biases correlation upward even with no real change.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A notebook reports three correlation measures with intervals for five pairs, plus rolling and stressed correlation comparisons."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Compute three correlation measures for five asset pairs"
                - "Add intervals using the Fisher transformation or a bootstrap"
                - "Plot rolling correlation against a pure-noise band"
                - "Compare correlation in the worst months with the full sample"
            - name: Outlier-resistant statistics for returns
              description: |-
                ## Purpose
                A single crash day can dominate a sample mean, a volatility or a regression slope. Learning the median, median absolute deviation, trimmed and winsorised means and Huber regression, and seeing how each reacts when you add one extreme day, tells you when a resistant method is protecting you and when it is hiding the very risk you care about.

                ## Milestones
                1. Mean, median, trimmed mean and winsorised mean compared on three series.
                2. Standard deviation and scaled median absolute deviation compared, with the ratio between them explained.
                3. A beta regression rerun with Huber regression and the slopes compared.
                4. A written view on when resistant estimates are right for risk and when they understate it.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A notebook compares classical and resistant estimates on three series, with a written rule on when each is appropriate."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Compare four location estimates on three return series"
                - "Compare standard deviation with scaled median absolute deviation"
                - "Rerun one beta regression with Huber regression"
                - "Write when resistant estimates hide risk you need to see"
            - name: Maximum likelihood fits and their standard errors
              description: |-
                ## Purpose
                Most distribution fitting in quant work is maximum likelihood, and the fitted numbers are only half the answer. Writing the log-likelihood for a Student t yourself, getting standard errors from the Hessian and checking them by bootstrap shows how uncertain a fitted tail parameter really is.

                ## Milestones
                1. The Student t log-likelihood coded by hand and maximised numerically.
                2. Parameter standard errors from the inverse Hessian reported.
                3. The same standard errors estimated by bootstrap and compared.
                4. A likelihood ratio test comparing the normal and t fits, with its result written up.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A hand-coded t fit reports parameters with Hessian and bootstrap standard errors and a likelihood ratio test against the normal."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Code the Student t log-likelihood and maximise it numerically"
                - "Compute standard errors from the inverse Hessian"
                - "Check those standard errors with a bootstrap"
                - "Run a likelihood ratio test of normal against t"
            - name: Outlier and winsorising policy for your research
              description: |-
                ## Purpose
                Whether you winsorise, trim, keep or investigate extreme observations can change a result more than the method itself, and deciding after seeing the answer is a form of data mining. A written policy, set once, applied everywhere and reported in every write-up, removes that choice from the moment of temptation.

                ## Milestones
                1. The options listed: keep, winsorise at a set percentile, trim, or investigate and correct data errors.
                2. Each option tested on one past analysis, with the effect on the headline number recorded.
                3. A default chosen, with the exceptions where it does not apply.
                4. The policy added to your research template and stated in every write-up.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written outlier policy with a default and named exceptions is in the research template and quoted in new write-ups."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the outlier options you could use"
                - "Rerun one past analysis under each option"
                - "Choose a default and write its exceptions"
                - "Add the policy to your research template"
            - name: Default standard errors for panel regressions
              description: |-
                ## Purpose
                Cross-sectional regressions of stock returns on characteristics have residuals correlated across firms on the same date and within a firm over time, and plain standard errors can overstate t-statistics badly. Comparing Fama-MacBeth, clustering by date, by firm and by both on one panel, then choosing a default, settles a question that otherwise gets reargued in every review.

                ## Milestones
                1. One panel regression run with OLS, Fama-MacBeth, date-clustered, firm-clustered and two-way clustered errors.
                2. The t-statistics from each method set side by side.
                3. A default method chosen for each kind of panel you use, with the reason.
                4. The default written into your research template.

                ## Notes
                Agree the default with your supervisor or research lead if you have one. Consistency across projects matters more than winning the argument once.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded default standard error method for panel regressions, backed by a five-way comparison on one panel."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Build one stock-characteristic panel from the practice data"
                - "Run the regression with five types of standard error"
                - "Set the five sets of t-statistics side by side"
                - "Write the default method and reason into your template"
            - name: Sample period choice and justification
              description: |-
                ## Purpose
                Starting a sample just after a crash or ending it just before one can turn a mediocre result into a striking one. Choosing the sample period from data availability and the question, writing it down before running the analysis and showing results across sub-periods makes your conclusions much harder to dismiss.

                ## Milestones
                1. A rule for choosing start and end dates from data availability, not from results.
                2. The sample period for each active project recorded before results are run.
                3. Results for one project reported for the full period and at least three sub-periods.
                4. A sentence in every write-up stating why the sample starts and ends where it does.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each active project has a sample period recorded in advance, and one shows results across three sub-periods."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write your rule for choosing sample start and end dates"
                - "Record the sample period for each active project"
                - "Rerun one analysis across three sub-periods"
                - "Add a sample period sentence to your write-up template"
            - name: Power calculation before testing a signal
              description: |-
                ## Purpose
                Running a test that could never have detected the effect you care about wastes the data and invites false comfort from a null result. Working out, before testing, how many observations you need to detect an information coefficient of 0.03 or a correlation of 0.1 at a given power tells you whether to test now, wait for data or change the design.

                ## Milestones
                1. A power function for a correlation or information coefficient test written and checked by simulation.
                2. A table of observations needed for several effect sizes at 80 percent power.
                3. One planned test checked against the table, with a decision to proceed, wait or redesign.
                4. The power calculation saved with the research plan for that test.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A planned signal test has a saved power calculation and a recorded decision to proceed, wait or redesign."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a power function for a correlation test"
                - "Check the power function with the simulation harness"
                - "Build a table of sample sizes for several effect sizes"
                - "Decide whether your next planned test has enough data"
            - name: Moving spreadsheet statistics into tested code
              description: |-
                ## Purpose
                Spreadsheet formulas for volatility, beta or a t-statistic are easy to break with one dragged cell and almost impossible to review. Moving the calculations you rely on into a small tested library, and checking the outputs match before retiring the spreadsheet, ends a quiet source of error.

                ## Milestones
                1. Every spreadsheet statistic you still rely on listed.
                2. Each one rewritten as a function with a known-answer test.
                3. Outputs from the spreadsheet and the code compared on the same data, with differences explained.
                4. The spreadsheets archived as read-only once the code matches.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All relied-on spreadsheet statistics are replaced by tested functions whose outputs match, and the spreadsheets are archived."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every spreadsheet statistic you still rely on"
                - "Rewrite each as a function with a known-answer test"
                - "Compare spreadsheet and code outputs on the same data"
                - "Archive the spreadsheets as read-only"
            - name: Comparing two Sharpe ratios properly
              description: |-
                ## Purpose
                Two strategies with Sharpe ratios of 0.9 and 0.7 on correlated returns may not differ at all. Learning the Jobson-Korkie test with the Memmel correction and a bootstrap test that handles fat tails, then applying both to a real pair, gives you a defensible answer when someone asks which is better.

                ## Milestones
                1. The Jobson-Korkie test with Memmel correction implemented and checked on simulated data.
                2. A studentised bootstrap test of the Sharpe ratio difference implemented.
                3. Both tests applied to one pair of series, with the correlation between them reported.
                4. A short note on what the result means and what it does not.

                ## Notes
                This is a statistical comparison, not a recommendation to allocate to either strategy.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Two Sharpe difference tests are implemented and give a reported p-value and interval for one real pair of series."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Implement the Jobson-Korkie test with the Memmel correction"
                - "Implement a bootstrap test for the Sharpe ratio difference"
                - "Apply both tests to one pair of correlated series"
                - "Write what the result does and does not show"
            - name: Policy for missing data and unequal histories
              description: |-
                ## Purpose
                Dropping every date where any series is missing throws away data; filling gaps forward invents it. Assets with different start dates make it worse. A written policy for gaps, stale prices and unequal histories, tested on one analysis, stops each project improvising its own answer.

                ## Milestones
                1. The options listed: complete cases, pairwise estimation, forward fill limits and methods for unequal histories.
                2. The effect of each option on one covariance or correlation estimate measured.
                3. A default chosen with a limit on how many days may be filled.
                4. The policy written into the data loading module, not left to each notebook.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A missing data policy is coded into the shared loading module and its effect on one estimate is documented."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the ways your data can be missing or stale"
                - "Measure how each handling option changes one correlation estimate"
                - "Choose a default and a maximum fill length"
                - "Code the policy into the shared data loading module"
            - name: Bootstrap intervals for drawdown statistics
              description: |-
                ## Purpose
                Maximum drawdown is quoted constantly and almost never with an interval, even though it depends heavily on the order of returns. Bootstrapping drawdown, time under water and recovery time for a series shows how wide the plausible range is and stops a single historical path being treated as the risk.

                ## Milestones
                1. A block bootstrap of one series generating a thousand alternative paths.
                2. The distribution of maximum drawdown, time under water and recovery time plotted.
                3. The historical drawdown placed within that distribution.
                4. Drawdown intervals added to your standard report template.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A report shows bootstrap intervals for maximum drawdown and time under water, with the historical value placed in the distribution."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Generate a thousand block-bootstrapped paths for one series"
                - "Compute maximum drawdown and time under water for each path"
                - "Place the historical drawdown in the bootstrap distribution"
                - "Add drawdown intervals to your report template"
            - name: Statistics module exam or course final
              description: |-
                ## Purpose
                For a student, a probability, econometrics or financial statistics exam is a dated test of everything in this area. Working back from the exam date with past papers, a topic list and timed practice turns revision into a plan rather than a last-week scramble.

                ## Milestones
                1. The exam date, format and permitted materials confirmed from the course page.
                2. A topic list matched to lecture notes with each topic rated by confidence.
                3. At least three past papers done under timed conditions and marked.
                4. A final-week plan focused on the two weakest topics.

                ## Notes
                Start from the **Course** template. Check the format with the course leader rather than relying on last year's paper.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Three timed past papers are completed and marked before the exam, and the exam is sat on its date."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Confirm the exam date, format and permitted materials"
                - "Rate every syllabus topic by confidence"
                - "Do one past paper under timed conditions and mark it @recurring(weekly:tue)"
                - "Plan the final week around your two weakest topics"
            - name: Presenting a statistical result at research review
              description: |-
                ## Purpose
                Passing your own checks is only the start: the result still has to survive a room of sceptical colleagues or a thesis committee. Preparing the evidence, the uncertainty and the answers to the five questions you know will come makes the presentation a test of the idea rather than of your slides.

                ## Milestones
                1. The result stated in one sentence with its estimate and interval.
                2. Assumption checks, sample period and outlier policy shown on one slide.
                3. Answers prepared for the five most likely challenges.
                4. Feedback from the review written up with agreed next steps.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The result is presented at a dated review and the feedback and next steps are written up within two days."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write the result in one sentence with its interval"
                - "Put the assumption checks and sample choices on one slide"
                - "Draft answers to the five hardest likely questions"
                - "Write up the feedback and next steps after the review"
            - name: Methods appendix for a paper or thesis chapter
              description: |-
                ## Purpose
                Reviewers and examiners judge empirical finance work largely on its methods section. A clear appendix stating data sources, return conventions, estimation methods, standard errors, resampling choices and every robustness check run is also the document that lets you reproduce your own work a year later.

                ## Milestones
                1. Data sources, sample period and cleaning steps described precisely.
                2. Estimators, standard error methods and bootstrap settings stated with references.
                3. Every sensitivity check listed with its result, including those that weakened the finding.
                4. The appendix read by one peer who could not find anything they would need to ask.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A methods appendix covering data, estimators, errors and all sensitivity checks is finished and passed a peer read."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Write the data, sample period and cleaning section"
                - "Describe each estimator, its standard errors and bootstrap settings"
                - "List every sensitivity check with its result"
                - "Ask one peer to read the appendix and list their questions"
            - name: Fat tails teaching session for a study group
              description: |-
                ## Purpose
                Explaining fat tails to others is the quickest test of whether you understand them. Running a one-hour session for classmates or junior colleagues, with your own QQ plots, t fits and the worst-day probabilities, both deepens your grasp and leaves the group with a shared vocabulary.

                ## Milestones
                1. A date, audience and one-hour slot agreed.
                2. A short deck using your own fitted examples and one live notebook.
                3. Three exercises for attendees with solutions.
                4. Questions you could not answer noted and followed up within a week.
              priority: low
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "A one-hour session is delivered on a set date with exercises, and every unanswered question gets a written follow-up."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Agree a date and audience for a one-hour session"
                - "Build a short deck from your own fat-tail examples"
                - "Write three exercises with solutions"
                - "Send follow-up answers to unanswered questions"
            - name: Annual statistics skills reassessment
              description: |-
                ## Purpose
                Twelve months of research and study changes where your gaps are, and new methods arrive in the papers you read. Re-scoring the same skills matrix each year, comparing it with last year and picking the next three topics keeps your development deliberate instead of drifting toward whatever the current project needs.

                ## Milestones
                1. The skills matrix re-scored with fresh evidence for each topic.
                2. Changes from last year noted, including topics that slipped.
                3. Three focus topics chosen for the coming year.
                4. Projects in this area re-activated or archived to match the new focus.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A re-scored skills matrix is saved beside last year's, with three focus topics for the new year recorded."
                cadence: cyclic
              tasks:
                - "Re-score the skills matrix with fresh evidence @recurring(yearly)"
                - "Compare this year's scores with last year's"
                - "Choose three focus topics for the coming year"
                - "Archive or re-activate projects to match the new focus"
            - name: Undergraduate path into financial statistics
              description: |-
                ## Purpose
                An undergraduate in maths, economics or engineering has a timetable, assessments and limited hours, so statistics for finance has to fit around coursework. A term-by-term plan that pairs each module with one small finance application, using the practice dataset, builds evidence for applications and internships without adding a second degree.

                ## Milestones
                1. Current and upcoming statistics or econometrics modules listed with their term dates.
                2. One finance application chosen for each module, such as testing mean returns after a hypothesis testing module.
                3. Each application written up as a two-page note with code.
                4. Three notes collected into a portfolio you can link from a CV.

                ## Notes
                Two hours a week through term is plenty. Coursework comes first, and a good module grade is itself evidence.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Three two-page finance application notes, each tied to a statistics module, are collected into a linkable portfolio."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "List your statistics and econometrics modules with term dates"
                - "Choose one finance application for each module"
                - "Spend two hours on this term's application @recurring(weekly:wed)"
                - "Collect finished notes into a portfolio page"
            - name: From PhD statistics to financial returns
              description: |-
                ## Purpose
                Researchers arriving from physics, biology or engineering often bring strong statistics trained on data with high signal and independent samples. Financial returns break those habits: signal to noise is tiny, samples overlap, regimes shift and the data was generated by people reacting to each other. Mapping what transfers and what does not saves months of confident mistakes.

                ## Milestones
                1. A two-column list of methods from your field that transfer directly and those that need care in finance.
                2. Three habits from your field identified that could mislead you on return data.
                3. One method from your PhD reapplied to the practice dataset with its finance pitfalls written up.
                4. A conversation held with an experienced quant about the list, and the list revised.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A revised list of transferable and risky methods exists, plus one reapplied method written up with its finance pitfalls."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List methods from your field in two columns, transfers and needs care"
                - "Name three habits that could mislead you on return data"
                - "Reapply one PhD method to the practice dataset"
                - "Discuss the list with an experienced quant @recurring(monthly:5)"
            - name: Statistics with only monthly data
              description: |-
                ## Purpose
                Many interesting series, such as fund returns, macro data or emerging market indices, exist only monthly and for twenty years or less, which leaves a few hundred observations at best. Learning what can and cannot be estimated with that much data, and which small-sample corrections matter, stops you over-reading short histories.

                ## Milestones
                1. The number of monthly observations available for each series you care about recorded.
                2. Standard errors for mean, volatility and correlation computed at those sample sizes.
                3. Small-sample corrections, such as t critical values and bias-corrected bootstrap intervals, applied and compared.
                4. A one-page guide stating which questions each series can and cannot answer.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page guide lists, for each monthly series, which estimates are precise enough to use and which are not."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Count monthly observations for each series you care about"
                - "Compute standard errors for mean, volatility and correlation at those sizes"
                - "Compare normal and small-sample intervals on one series"
                - "Write the guide to what each series can answer"
            - name: Statistics for thinly traded and emerging markets
              description: |-
                ## Purpose
                Returns from thinly traded stocks and smaller exchanges, including many in the Caribbean, Africa and frontier Asia, show stale prices, long runs of zero returns and autocorrelation that comes from trading gaps rather than predictability. These features bias betas, volatilities and correlations downward unless you correct for them.

                ## Milestones
                1. The share of zero-return days and first-order autocorrelation measured for a set of thinly traded series.
                2. Betas estimated with ordinary regression and with the Dimson lead-lag method, and compared.
                3. Volatility estimated from daily, weekly and monthly data to show the effect of stale prices.
                4. A note on which corrections you will apply by default for illiquid series.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A comparison of plain and Dimson betas and multi-frequency volatilities exists for at least five thinly traded series."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose five thinly traded series and measure their zero-return share"
                - "Estimate betas with plain and Dimson lead-lag regressions"
                - "Compare volatility estimated at three frequencies"
                - "Write your default corrections for illiquid series"
            - name: Statistics for a dissertation on asset returns
              description: |-
                ## Purpose
                A master's or undergraduate dissertation on asset returns is often a student's first original empirical work, and examiners look hardest at the statistics. Settling the question, data, tests and standard errors with your supervisor early, and building a chapter plan around them, keeps the project from collapsing in the final month.

                ## Milestones
                1. A one-paragraph research question agreed with your supervisor, with the hypothesis written as a testable statement.
                2. Data sources confirmed available through your institution, with the sample period fixed.
                3. The main tests, standard errors and sensitivity checks listed before any results are run.
                4. A chapter plan with dated drafts agreed with your supervisor.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A supervisor-agreed research question, data plan, test plan and dated chapter plan are saved together before analysis begins."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Write your research question as a testable hypothesis"
                - "Confirm which data your institution can give you access to"
                - "List the tests and standard errors before running anything"
                - "Agree dated chapter drafts with your supervisor"
            - name: Extreme value theory for tail estimation
              description: |-
                ## Purpose
                Estimating a 1 in 1,000 day loss from the body of a distribution means extrapolating from data that says little about the tail. Extreme value theory fits only the extremes: a Hill estimator of the tail index and a peaks-over-threshold model with a generalised Pareto fit, both with intervals, give tail quantiles whose uncertainty you can actually state.

                ## Milestones
                1. Hill estimates of the tail index plotted against the number of tail observations for three series.
                2. A threshold chosen for a peaks-over-threshold fit, with the mean excess plot that supports it.
                3. Generalised Pareto parameters and tail quantiles reported with intervals.
                4. EVT quantiles compared with empirical and Student t quantiles at the same probabilities.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Tail quantiles from a peaks-over-threshold fit are reported with intervals and compared with empirical and t quantiles for three series."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Plot Hill tail index estimates for three return series"
                - "Choose a threshold from a mean excess plot"
                - "Fit a generalised Pareto distribution to the exceedances"
                - "Compare EVT, empirical and t tail quantiles with intervals"
            - name: Copulas and tail dependence
              description: |-
                ## Purpose
                Two assets with a correlation of 0.4 can still crash together far more often than a normal model allows. Separating the margins from the dependence with a copula, then comparing Gaussian, Student t and Clayton fits, measures how much joint tail risk a single correlation number hides.

                ## Milestones
                1. Margins transformed to uniforms with empirical distribution functions for three asset pairs.
                2. Gaussian, Student t and Clayton copulas fitted, with their likelihoods compared.
                3. Lower tail dependence estimated empirically and from each fitted copula.
                4. A note on how much the choice of copula changes the joint crash probability.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Three copulas are fitted to three asset pairs, with likelihoods and tail dependence estimates compared in one table."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Transform three asset pairs to uniform margins"
                - "Fit Gaussian, Student t and Clayton copulas to each pair"
                - "Estimate lower tail dependence empirically and from each fit"
                - "Write how copula choice changes the joint crash probability"
            - name: Permutation tests for small-sample signals
              description: |-
                ## Purpose
                When you have few observations and fat tails, the null distribution behind a t-test may be far from the truth. Permutation and randomisation tests build the null from your own data by shuffling the link between signal and return, which needs fewer assumptions and is easy to explain to a sceptic.

                ## Milestones
                1. A permutation test for the correlation between a signal and next-period returns implemented.
                2. A version that shuffles in blocks to respect time dependence implemented.
                3. Both tests compared with a t-test on simulated data with known effects.
                4. One real signal tested with all three methods and the p-values reported side by side.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Plain and block permutation tests are implemented, checked by simulation and applied to one real signal with p-values compared."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Implement a permutation test for signal and return correlation"
                - "Add a block-shuffled version that keeps time dependence"
                - "Compare both with a t-test on simulated data"
                - "Test one real signal with all three and record the p-values"
            - name: Errors in variables and generated regressors
              description: |-
                ## Purpose
                Two-pass tests that first estimate betas and then regress returns on them use regressors measured with error, which biases the slope toward zero and makes the second-pass standard errors too small. Working through the Shanken correction and portfolio grouping on a small two-pass study shows how large the effect is.

                ## Milestones
                1. A two-pass regression run on the practice dataset with first-pass betas from rolling windows.
                2. The attenuation bias demonstrated by simulation with known true betas.
                3. Shanken-corrected standard errors computed and compared with uncorrected ones.
                4. The effect of grouping stocks into portfolios before the first pass measured.

                ## Notes
                This is the statistics of the method only. Factor definitions and pricing tests belong with factor model work.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A two-pass study reports corrected and uncorrected standard errors and a simulation showing the size of attenuation bias."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Run a two-pass regression with rolling first-pass betas"
                - "Simulate known betas to show attenuation bias"
                - "Compute Shanken-corrected standard errors"
                - "Repeat the first pass on portfolios and compare"
            - name: Predictive regression bias at long horizons
              description: |-
                ## Purpose
                Regressions of future returns on persistent predictors such as valuation ratios suffer from Stambaugh bias, and long-horizon versions with overlapping returns make t-statistics look far stronger than they are. Reproducing both effects by simulation and applying the standard corrections is the best defence against convincing but false predictability.

                ## Milestones
                1. Stambaugh bias shown by simulation with a persistent predictor and correlated innovations.
                2. A bias-corrected slope estimate computed for one real predictor.
                3. Long-horizon regressions run with naive, Newey-West and Hansen-Hodrick standard errors.
                4. A written summary of how much predictability survives the corrections.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A write-up shows simulated Stambaugh bias, a corrected slope for one predictor and three sets of long-horizon standard errors."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Simulate a persistent predictor and measure the slope bias"
                - "Apply a bias correction to one real predictor"
                - "Run long-horizon regressions with three standard error methods"
                - "Write how much predictability survives the corrections"
            - name: Shrinkage of signal and Sharpe estimates across many assets
              description: |-
                ## Purpose
                When you estimate the same statistic for hundreds of assets or signals, the most extreme estimates are mostly luck. James-Stein and empirical Bayes shrinkage pull each estimate toward the group average by an amount set by the noise, and comparing shrunk and raw estimates out of sample shows how much of the ranking was real.

                ## Milestones
                1. James-Stein shrinkage implemented for a cross-section of mean return or information coefficient estimates.
                2. An empirical Bayes version that estimates the prior spread from the data implemented.
                3. Raw and shrunk estimates compared on a later period by rank correlation and error.
                4. A note on when shrinkage helps and when it removes genuine differences.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Two shrinkage methods are applied to a cross-section of estimates and their out-of-sample error is compared with raw estimates."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Estimate one statistic for at least fifty assets or signals"
                - "Apply James-Stein shrinkage toward the group mean"
                - "Add an empirical Bayes version with an estimated prior spread"
                - "Compare raw and shrunk estimates on a later period"
            - name: Personal statistics standards document
              description: |-
                ## Purpose
                After working through this area you will have conventions, policies and defaults scattered across notes. Pulling them into one short standards document, covering conventions, standard errors, outliers, missing data, resampling and reporting, gives a new collaborator, supervisor or employer a clear picture of how you work and keeps you consistent.

                ## Milestones
                1. Every policy and default from this area gathered into one document of no more than four pages.
                2. Each standard linked to the analysis or test that justified it.
                3. The document reviewed by one experienced researcher and revised.
                4. A yearly review date set alongside the skills reassessment.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A reviewed standards document of four pages or fewer covers conventions, errors, outliers, missing data, resampling and reporting."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Gather every policy and default from your notes into one draft"
                - "Ask the agent to tighten the draft to four pages"
                - "Link each standard to the analysis that justified it"
                - "Send the document to one experienced researcher for review"
---

# Statistics for Finance

This area is for researchers and students who want the statistics under their quant work to hold up when someone asks how sure they are. It starts with foundations (a skills baseline, a reproducible set-up, return conventions, a clean practice dataset and a standard error sheet), moves through the standing habits that keep estimates honest, then the core skills: fat tails, tests on mean returns, regression with financial data, the bootstrap, correlation and outlier-resistant methods. After that come the decisions you make once and reuse, the dated events, situations for students, PhD movers and thin markets, and finally specialist methods such as extreme value theory, copulas and predictive regression bias.

The rhythms are a daily ten-minute estimation drill, a weekly problem set and error log review, monthly checks on distributions, reported uncertainty and assumptions, a monthly peer swap, quarterly dataset refreshes and a yearly skills reassessment. The Skills matrix, Reading queue, Metrics log and Course templates pair with the baseline, the study list, the distribution log and any formal module. Nothing here is trading advice, and most strategies that look significant in research fail out of sample, which is why the statistics deserve this much care. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
