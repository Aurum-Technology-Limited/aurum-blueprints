---
id: data-analytics.statistical-analysis-methods
name: Statistical Analysis Methods
description: "Plans written before the data, sound methods from intervals and regression to multilevel and survival models, peer review, honest reporting standards and the habits that stop business findings being overclaimed."
category: business
version: 1.0.0
tags: [data-analytics, statistical-analysis-methods, researcher, knowledge-worker, regression, hypothesis-testing, confidence-intervals, statistics]
author: Aurum Technology
starter_structure:
  templates:
    - skills-matrix
    - reading-queue
    - meeting-notes
    - course
    - vendor
  pillars:
    - name: Data & Analytics
      emoji: "📊"
      description: "Turning data into decisions: metrics and dashboards, data pipelines and warehouses, experimentation, forecasting and modelling, machine learning, data quality and governance."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Statistical Analysis Methods
          description: "Applying sound statistics such as regression, hypothesis testing and confidence intervals to business questions without overclaiming results."
          projects:
            - name: Statistics toolkit and software set-up
              description: |-
                ## Purpose
                Analysts who run tests in a spreadsheet one week and a notebook the next get answers that cannot be compared or rechecked. Settling on one statistical environment, such as R, Python with its statistics libraries or a package your organisation already licenses, and installing the core libraries for regression, tests and plotting, means every later project starts from the same tools. An afternoon now saves a week of reconciling results later.

                ## Milestones
                1. One primary statistical environment chosen and the reason written in a sentence.
                2. Core libraries for descriptive statistics, regression, hypothesis tests and charts installed and loading without errors.
                3. A test script that fits a simple regression on a sample dataset runs end to end.
                4. The environment's version and library list saved in a note next to your analyses.

                ## Notes
                Pick what your colleagues can open and review. A powerful tool nobody else can run makes peer review impossible.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A chosen statistical environment runs a sample regression script end to end, with its version and library list recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the statistics tools already licensed or used by colleagues"
                - "Install the core libraries for regression, tests and plotting"
                - "Run a simple regression on a built-in sample dataset to prove the set-up works"
                - "Save the software version and library list in a note beside your analyses"
            - name: Backlog of questions that need a statistical answer
              description: |-
                ## Purpose
                Requests such as 'did the new onboarding call help', 'are northern stores really slower' or 'is this survey difference real' arrive in chats and meetings and get answered by eye. Collecting them in one backlog, each with the decision it feeds and the data that might answer it, shows which questions deserve a proper analysis and which only need a descriptive table.

                ## Milestones
                1. A single backlog holding at least ten open questions, each phrased so it has a yes, no or how-much answer.
                2. Each question tagged with the decision it informs and the person who makes it.
                3. The likely data source and rough sample size noted for each question.
                4. The top three ranked by the value of the decision and how feasible an answer is.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A backlog of at least ten business questions exists, each with its decision, owner and data source, and the top three are ranked."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down five questions colleagues asked you this month that hinged on a number"
                - "Add the decision and the decision owner beside each question"
                - "Note the data source and rough row count that could answer each one"
                - "Re-rank the backlog and pick the next question to analyse @recurring(monthly:3)"
            - name: Self-assessment against core statistical methods
              description: |-
                ## Purpose
                Few people know which methods they can actually apply unaided and which they only recognise from a course years ago. Rating yourself honestly against a list of fifteen core methods, from confidence intervals to logistic regression, turns a vague sense of being 'not a statistician' into a short, ordered study list.

                ## Milestones
                1. A list of about fifteen core methods relevant to your work, each with a one-line description.
                2. Each method rated as can explain, can apply with notes, recognise only, or unknown.
                3. The three gaps that block current work marked as priorities.
                4. Ratings repeated a year later to show movement.

                ## Notes
                Start from the **Skills matrix** template. Rate from evidence: a method counts as 'can apply' only if you have used it on real data in the last two years.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Fifteen core methods are rated with evidence and three priority gaps are named and linked to study projects."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Draft a list of fifteen methods your role is likely to need"
                - "Rate each method using the four-level scale"
                - "Mark the three gaps that block work already on the backlog"
                - "Re-rate every method and compare the scores with last year @recurring(yearly)"
            - name: One-page statistical analysis plan
              description: |-
                ## Purpose
                Most overclaimed results come from choosing the test, the subgroups and the outcome after looking at the data. A one-page plan written before analysis, stating the question, the estimate wanted, the population, the outcome measure, the method and what result would change the decision, keeps the analysis honest and makes it much faster to review.

                ## Milestones
                1. A plan template with sections for question, estimand, population, outcome, method, assumptions and decision rule.
                2. The template completed for the first backlog question before any data was opened.
                3. Changes made after seeing the data recorded in a dated deviations section.
                4. A colleague able to read the plan and say what result would change the decision.

                ## Notes
                Keep it to one page. A half page written before the data is worth more than five pages written after it.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page analysis plan template exists and has been completed before data access for at least one real question."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the plan headings: question, estimand, population, outcome, method, decision rule"
                - "Fill in the plan for the top backlog question before opening the data"
                - "Ask a colleague to read the plan and state what result would change the decision"
                - "Add a dated deviations section for changes made after seeing the data"
            - name: Descriptive profile before any test
              description: |-
                ## Purpose
                Tests and models assume things about the data that a ten-minute look would disprove: heavy skew, a spike of zeros, impossible values, a missing month. Profiling every variable in the analysis with counts, missingness, ranges, quantiles and a few plots before testing anything catches the problems that otherwise surface in front of an audience.

                ## Milestones
                1. A reusable profiling script or checklist covering counts, missing values, ranges, quantiles and histograms.
                2. The profile run on the dataset for your first backlog question.
                3. Every surprising value explained, corrected at source or excluded with a written reason.
                4. The profile saved alongside the analysis so a reviewer can see what the data looked like.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A saved descriptive profile, with every anomaly explained or excluded in writing, accompanies the first backlog analysis."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a profiling checklist of counts, missing values, ranges, quantiles and histograms"
                - "Run the profile on the dataset for your top backlog question"
                - "Explain, correct or exclude each surprising value and note which you did"
                - "Save the profile output in the same folder as the analysis"
            - name: Method choice decision guide
              description: |-
                ## Purpose
                Choosing a test from memory leads to the same two or three methods being used for everything, including paired data treated as independent and counts treated as continuous. A one-page guide that routes from outcome type, number of groups, pairing and sample size to a sensible default method gives you and your colleagues a defensible starting point every time.

                ## Milestones
                1. A guide covering continuous, binary, count and time-to-event outcomes.
                2. Branches for independent versus paired or repeated measures, and for two versus several groups.
                3. Each endpoint naming a default method and one alternative for when assumptions fail.
                4. The guide tested on three past analyses and corrected where it disagreed with an expert's choice.

                ## Notes
                The guide gives a default, not a verdict. Write 'check with a statistician' at the branches for clustered, very small or heavily censored data.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page method decision guide covers four outcome types and has been checked against three past analyses."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Sketch the decision branches: outcome type, groups, pairing, sample size"
                - "Name a default method and one fallback at every endpoint"
                - "Run three past analyses through the guide and note any disagreements"
                - "Review the guide against methods the team adopted this year @recurring(yearly)"
            - name: Unit of analysis and independence check
              description: |-
                ## Purpose
                Treating 40,000 transactions from 300 customers as 40,000 independent observations makes almost any difference look significant. Deciding before each analysis what one row represents, which unit the decision is about and whether observations cluster by customer, store or week prevents the commonest source of false certainty in business statistics.

                ## Milestones
                1. The unit of analysis written in one sentence for the current question.
                2. Every clustering structure listed, such as repeat customers, stores within regions and weeks within a year.
                3. The effective sample size estimated, not just the row count.
                4. A note in the analysis plan saying how the method handles the clustering.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "The current analysis plan states its unit of analysis, the clustering present and how the chosen method accounts for it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write one sentence saying what a single row in the dataset represents"
                - "List every way rows are grouped, such as by customer, store or week"
                - "Count the distinct units at each level to estimate the effective sample size"
                - "Add the clustering decision to the analysis plan"
            - name: Team standard for reporting estimates and uncertainty
              description: |-
                ## Purpose
                When one report says 'up 4 percent, significant', another quotes a p-value alone and a third gives a range, readers cannot compare results or tell which are solid. A short reporting standard covering the estimate, its interval, the sample size, the method and plain words for what it does and does not show makes every finding readable in the same way.

                ## Milestones
                1. A one-page standard covering estimate, interval, sample size, method and limitations.
                2. Example sentences for a clear effect, an inconclusive result and a clear absence of a meaningful effect.
                3. Words to avoid listed, such as 'proves', 'drives' and 'significant' without an effect size.
                4. The standard adopted by at least two other people who publish analyses.

                ## Notes
                Report the interval first and the p-value second, if at all. 'Between 1 and 7 percent higher' carries more information than 'p equals 0.02'.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written reporting standard with example sentences is in use by at least three people who publish analyses."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Collect five recent findings and note how each one reported uncertainty"
                - "Draft the standard with example sentences for clear, inconclusive and null results"
                - "List the words to avoid and a plainer alternative for each"
                - "Walk two colleagues who publish analyses through the standard"
            - name: Plain-language glossary of statistical terms
              description: |-
                ## Purpose
                Colleagues nod at 'confidence interval', 'statistically significant' and 'regression' while picturing something quite different, and the gap shows up later as bad decisions. A glossary of twenty terms, each with a one-sentence definition, a business example and the common misreading, gives knowledge workers something to check before they repeat a finding.

                ## Milestones
                1. Twenty terms defined in one sentence each, without formulas.
                2. A worked business example beside every term.
                3. The common misreading of each term written next to its correct meaning.
                4. The glossary linked from every report that follows the reporting standard.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A glossary of twenty statistical terms with examples and common misreadings is published and linked from team reports."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pick the twenty statistical terms that appear most in your organisation's reports"
                - "Write each definition in one sentence with a business example"
                - "Add the most common misreading beside each term"
                - "Add any new term colleagues asked about this quarter @recurring(quarterly)"
            - name: Analysis log with method and decision record
              description: |-
                ## Purpose
                Six months after an analysis, nobody remembers which test was used, which rows were dropped or what was decided. A running log with one line per analysis, giving the question, data extract date, method, headline estimate with interval, decision taken and file location, turns past work into evidence and answers the inevitable 'how did we get that number'.

                ## Milestones
                1. A log with columns for question, data extract date, method, estimate, interval, decision and file location.
                2. Every analysis from the last quarter entered retrospectively.
                3. New analyses logged within a week of being shared.
                4. A monthly pass that fills gaps and links decisions once they are made.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every analysis shared in the last six months has a log entry with method, interval and decision filled in."
                cadence: rolling
              tasks:
                - "Create the analysis log with question, method, estimate, interval, decision and location columns"
                - "Back-fill entries for analyses shared in the last three months"
                - "Fill missing decisions and file links in the analysis log @recurring(monthly:9)"
            - name: Second-analyst review before results are shared
              description: |-
                ## Purpose
                Coding slips, a filter left on, a test that assumed independence: most statistical errors are caught by a second person in twenty minutes and missed by the author in a day. A standing weekly slot where a colleague checks any analysis about to reach decision makers, against a short checklist, is the cheapest quality control this area has.

                ## Milestones
                1. A ten-item review checklist: question, data, unit of analysis, method, assumptions, code, numbers in text, interval, wording, limitations.
                2. A weekly slot agreed with at least one reviewing colleague.
                3. No analysis feeding a decision shared without a named reviewer.
                4. Issues found in review tallied so recurring mistakes become training topics.

                ## Notes
                Reviewers check reasoning, not style. If the reviewer cannot rerun the main number from the files provided, that is the first finding.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For three months, every analysis sent to decision makers carries a named reviewer and a completed checklist."
                cadence: rolling
              tasks:
                - "Draft the ten-item review checklist"
                - "Agree a weekly review slot with a colleague who can read your code"
                - "Swap pending analyses with your reviewer and work through the checklist @recurring(weekly:wed)"
                - "Tally the issues found each month to spot repeated mistakes"
            - name: Quarterly look-back on past statistical conclusions
              description: |-
                ## Purpose
                An estimate that a change lifted conversion by 6 percent is a prediction about the future, and few teams ever check whether it came true. Each quarter, picking three past conclusions from the log and comparing them with what has happened since shows how well calibrated your analyses are and where effects shrink once the spotlight moves.

                ## Milestones
                1. Three logged conclusions from six to twelve months ago reviewed each quarter.
                2. Each compared with later data and graded held, shrank, reversed or untestable.
                3. Reasons for misses noted: selection, regression to the mean, a changed context or an error.
                4. A yearly summary of the hit rate shared with the people who rely on the analyses.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "Four quarterly look-backs are completed in a year, each grading three past conclusions, with a summary of the hit rate shared."
                cadence: cyclic
              tasks:
                - "Choose three conclusions from the analysis log that are six to twelve months old"
                - "Compare each conclusion with the data that has arrived since and grade it @recurring(quarterly)"
                - "Note the likely reason for every conclusion that shrank or reversed"
                - "Share a short hit-rate summary at the end of the year"
            - name: Weekly statistics office hours for colleagues
              description: |-
                ## Purpose
                Knowledge workers often run a quick test in a spreadsheet, get a p-value and send it on, because asking felt like too much bother. An hour a week when anyone can bring a number, a chart or a draft claim for a sanity check catches overclaiming before it spreads, and it builds a queue of real questions to teach from.

                ## Milestones
                1. A recurring one-hour slot announced to the teams that publish numbers.
                2. A short intake note covering the question, the data and the claim they want to make.
                3. Each session's questions and the advice given recorded.
                4. Common questions turned into glossary entries or casebook examples.

                ## Notes
                Start from the **Meeting notes** template for the session record. Advise on method and wording; the decision stays with the person who owns it.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Office hours run for twelve consecutive weeks, with each session's questions and advice recorded."
                cadence: rolling
              tasks:
                - "Choose an hour and announce the office hours to teams that publish numbers"
                - "Write a three-line intake note people fill in before they come"
                - "Hold statistics office hours and record each question and answer @recurring(weekly:thu)"
                - "Turn the most repeated question into a glossary or casebook entry"
            - name: Weekly methods reading habit
              description: |-
                ## Purpose
                Statistical practice moves on: guidance on p-values, intervals and reporting has shifted in the last decade, and many business analysts learned from older material. Thirty minutes a week with a chapter, a methods paper or a well-regarded practitioner article, plus one written takeaway, keeps your judgement current without needing a course.

                ## Milestones
                1. A reading queue of at least ten items mixing textbook chapters, papers and practitioner articles.
                2. A fixed thirty-minute slot each week.
                3. One written takeaway per item, linked to where it changes your practice.
                4. Twelve items read and summarised in a quarter.

                ## Notes
                Start from the **Reading queue** template. Mix one classic text with newer guidance on reporting and uncertainty.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve methods items are read in a quarter, each with a one-paragraph takeaway in the reading queue."
                cadence: rolling
              tasks:
                - "Build a reading queue of ten statistics chapters, papers and articles"
                - "Read one item from the queue and write a one-paragraph takeaway @recurring(weekly:mon)"
                - "Mark any takeaway that should change the reporting standard"
            - name: Monthly overclaiming audit of recurring reports
              description: |-
                ## Purpose
                Monthly packs and dashboards are full of 'driven by', 'caused' and 'significant growth' attached to numbers that moved within their normal range. Reading the month's recurring reports for causal or certainty language the data cannot support, and suggesting plainer wording to the authors, cuts misinformation where most people actually see numbers.

                ## Milestones
                1. A list of the five to eight recurring reports with the widest readership.
                2. A short list of red-flag phrases with a plainer alternative for each.
                3. Each month's reports read and flagged sentences sent to their authors.
                4. A fall in flagged phrases visible after three months.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive monthly audits are completed, with flagged sentences sent to authors and the count of flags falling."
                cadence: rolling
              tasks:
                - "List the recurring reports with the widest readership"
                - "Write the red-flag phrases with a plainer alternative for each"
                - "Read the month's reports and send flagged sentences to their authors @recurring(monthly:14)"
                - "Count flagged phrases each month to see whether wording improves"
            - name: Casebook of worked statistical analyses
              description: |-
                ## Purpose
                Abstract rules about tests are forgotten; a worked example from your own business is not. Adding one anonymised case a month, with the question, the data, the method, what nearly went wrong and the final wording, builds a casebook that trains new colleagues faster than any textbook.

                ## Milestones
                1. A casebook format: question, data, method, pitfall, result and wording used.
                2. Three cases written up from past work.
                3. One new case added each month.
                4. The casebook used in the onboarding of at least one new analyst.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A casebook holding at least eight worked cases from real analyses has been used in at least one onboarding."
                cadence: rolling
              tasks:
                - "Set out the casebook headings: question, data, method, pitfall, result, wording"
                - "Write up three past analyses as the first cases"
                - "Add one anonymised case from this month's work to the casebook @recurring(monthly:23)"
                - "Ask the agent to draft a case from an analysis log entry, then edit it for accuracy"
            - name: Annual refresh of the statistical reporting standard
              description: |-
                ## Purpose
                A reporting standard written once slowly drifts out of date as tools, audiences and the team's methods change. A yearly review using the audit counts, the review tally and the look-back hit rate shows which rules are working, which are ignored and what new guidance to add.

                ## Milestones
                1. Last year's audit counts, review issues and look-back grades gathered in one place.
                2. Rules nobody follows either justified again or dropped.
                3. New examples added for methods adopted during the year.
                4. The revised standard dated, circulated and the old version archived.
              priority: low
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A dated revision of the reporting standard, informed by a year of audit and review evidence, is circulated to all report authors."
                cadence: cyclic
              tasks:
                - "Gather the year's audit counts, review tallies and look-back grades"
                - "Review the reporting standard rule by rule against that evidence @recurring(yearly)"
                - "Add worked examples for any method the team adopted this year"
                - "Circulate the dated revision and archive the old version"
            - name: Confidence intervals colleagues can read
              description: |-
                ## Purpose
                An interval says how far the true value could plausibly sit from the estimate, yet it is routinely misread as the range where 95 percent of the data falls. Learning to compute intervals for a mean, a proportion and a difference, and to explain them in a sentence a manager understands, is the single most useful habit for reporting without overclaiming.

                ## Milestones
                1. Intervals computed by hand once, then in software, for a mean, a proportion and a difference in proportions.
                2. The correct interpretation written in one plain sentence beside the common misreadings.
                3. A worked example showing how the interval narrows as the sample grows.
                4. Three past findings rewritten to lead with the interval.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Intervals for a mean, a proportion and a difference are computed and three past findings are rewritten to report them."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Compute a 95 percent interval for a proportion by hand and check it in software"
                - "Write one plain sentence that explains what the interval means"
                - "Plot how the interval width changes for samples of 50, 500 and 5,000"
                - "Rewrite three past findings so the interval comes first"
            - name: Hypothesis tests and p-values without the myths
              description: |-
                ## Purpose
                A p-value is not the probability that a result is due to chance, and 0.049 is not meaningfully different from 0.051, yet both beliefs drive real decisions. Working through what a test actually assumes and computes, using simulated data where you know the truth, removes the most common misreadings and makes you better at saying when a test is the wrong tool.

                ## Milestones
                1. The null hypothesis, test statistic and p-value for a two-group comparison explained in your own words.
                2. A simulation run with no true difference, showing how often p falls below 0.05.
                3. The five commonest p-value myths written down with a correction for each.
                4. One recent business claim re-examined in light of what its p-value does and does not show.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A simulation of tests under no true effect has been run and a written list of five p-value myths with corrections exists."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Simulate 1,000 two-group comparisons with no true difference and count p-values below 0.05"
                - "Write the five commonest p-value myths and correct each in a sentence"
                - "Pick a recent claim that rested on a p-value and rewrite what it supports"
                - "Explain the difference between statistical and practical significance to a colleague"
            - name: Linear regression for business questions
              description: |-
                ## Purpose
                Regression is the workhorse for questions like how much order value rises with tenure once region is accounted for, but coefficients are easily misread as causal effects or compared across differently scaled variables. Fitting and interpreting a few regressions on your own data, with an interval for every coefficient, gives you a method that answers most 'how much' questions honestly.

                ## Milestones
                1. A regression fitted on real data with every coefficient interpreted in plain words.
                2. Categorical predictors coded and the reference level stated.
                3. An interaction term fitted and explained with a chart.
                4. A written note on why the coefficients describe association, not effect, unless the design supports more.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two regressions on company data are fitted and written up, with each coefficient interpreted and its interval reported."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Choose a 'how much' question from the backlog that suits a regression"
                - "Fit the model and write a sentence interpreting each coefficient with its interval"
                - "Add one interaction term and chart how the slope differs between groups"
                - "Write a short note on what the design does and does not allow you to conclude"
            - name: Regression diagnostics and assumption checks
              description: |-
                ## Purpose
                A regression with curved residuals, a handful of influential points or variance that grows with the fitted value can report a confident coefficient that is mostly an artefact. Learning to read residual plots, influence measures such as Cook's distance and variance inflation factors, and knowing what to do when a check fails, is what separates a fitted model from a trustworthy one.

                ## Milestones
                1. Residual versus fitted, quantile and scale-location plots produced and read for a real model.
                2. Influential observations identified and the model refitted without them for comparison.
                3. Variance inflation factors checked and overlapping predictors handled.
                4. A diagnostics section added to the second-analyst review checklist.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A diagnostics write-up for one real regression, including influence and collinearity checks, is filed and the checklist is updated."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Produce the standard residual plots for your most recent regression"
                - "Identify the five most influential points and refit without them"
                - "Check variance inflation factors and note any predictors that overlap"
                - "Add a diagnostics section to the second-analyst review checklist"
            - name: Logistic regression for yes-or-no outcomes
              description: |-
                ## Purpose
                Renewed or not, defaulted or not, clicked or not: many business outcomes are binary, and running ordinary regression on them gives probabilities above 100 percent. Learning logistic regression for inference, including how to turn odds ratios into the percentage-point differences decision makers can use, covers a large share of real questions.

                ## Milestones
                1. A logistic regression fitted to a binary outcome from your own data.
                2. Odds ratios reported with intervals and converted into predicted probabilities for typical cases.
                3. Fit checked with a calibration plot by decile.
                4. A one-paragraph write-up that never describes odds ratios as risk ratios.

                ## Notes
                This project is about understanding associations. Building a model to score individual customers belongs with predictive modelling.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One logistic regression is written up with odds ratios, predicted probabilities for typical cases and a calibration check."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Pick a binary outcome on the backlog, such as renewed or not renewed"
                - "Fit the logistic regression and report odds ratios with intervals"
                - "Convert the results into predicted probabilities for three typical cases"
                - "Draw a calibration plot comparing predicted and observed rates by decile"
            - name: Comparing groups with t-tests, ANOVA and rank tests
              description: |-
                ## Purpose
                Comparing average handling time across three teams, or basket size between two regions, is the most common statistical request, and the right method depends on pairing, the number of groups and how skewed the data is. Practising the main options side by side on one dataset shows when they agree, when they diverge and which one to report.

                ## Milestones
                1. A two-group comparison run with Welch's t-test and a rank-based alternative, and the results compared.
                2. A paired comparison run correctly on before-and-after data from the same units.
                3. A comparison of three or more groups run with ANOVA and a post-hoc method chosen in advance.
                4. A short note recording which method suits which data shape.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Welch, rank-based, paired and ANOVA comparisons are run on real data and a written note on when to use each is filed."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Run Welch's t-test and a Mann-Whitney test on the same two-group comparison"
                - "Analyse a before-and-after dataset as paired and compare it with the unpaired result"
                - "Choose a post-hoc method before running a three-group ANOVA"
                - "Write a note on which comparison suits which data shape"
            - name: Contingency tables and chi-square tests
              description: |-
                ## Purpose
                Questions such as whether complaint type differs by channel, or whether plan choice differs by region, live in tables of counts. Learning chi-square and exact tests, the standardised residuals that show which cells drive a difference, and an effect size such as Cramér's V, stops people declaring a relationship from a large table where one cell carries everything.

                ## Milestones
                1. A two-way table from real data tested with chi-square, with expected counts checked.
                2. Fisher's exact test used where expected counts are small.
                3. Standardised residuals reported to show which cells differ most.
                4. An effect size reported alongside the test result.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A real two-way table is analysed with the appropriate test, residuals and an effect size, and written up in plain words."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Build a two-way table of counts for a question such as complaint type by channel"
                - "Check expected cell counts and switch to an exact test if they are small"
                - "Report standardised residuals to show which cells drive the difference"
                - "Add Cramér's V or another effect size to the write-up"
            - name: Bootstrap intervals for awkward statistics
              description: |-
                ## Purpose
                Medians, ratios of means and the gap between two percentiles are quantities business people care about that have no simple textbook interval. Resampling the data thousands of times gives an honest interval for almost any statistic, and learning when the bootstrap struggles, with tiny samples or heavy tails, keeps it from becoming a magic wand.

                ## Milestones
                1. A percentile bootstrap interval computed for a median from real data.
                2. A bootstrap for a ratio metric that resamples at the right unit, such as customers rather than orders.
                3. Results compared with a formula-based interval where one exists.
                4. The method's limits written down: small samples, extreme values and dependent data.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Bootstrap intervals for a median and a ratio metric are computed at the correct resampling unit and compared with a formula interval."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Bootstrap a 95 percent interval for the median of a skewed measure such as order value"
                - "Resample customers rather than orders for a revenue-per-customer interval"
                - "Compare the bootstrap interval with a formula-based interval for the same mean"
                - "List the situations where you would not trust a simple bootstrap"
            - name: Bayesian estimation basics for business decisions
              description: |-
                ## Purpose
                Decision makers usually want to know how likely it is that the new process is better, and by how much, which is a Bayesian question a p-value does not answer. Learning to fit a simple Bayesian model with a stated prior, read a posterior distribution and check how much the prior matters gives you a second way to report uncertainty that often lands better with managers.

                ## Milestones
                1. A Bayesian estimate of a proportion or mean fitted with a stated, justified prior.
                2. The posterior probability that a difference exceeds the smallest effect that matters reported.
                3. Results compared under a sceptical prior and a vague one.
                4. A paragraph explaining the result to a non-specialist without jargon.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A Bayesian analysis of one backlog question reports a posterior probability with a prior sensitivity check and a plain-language summary."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Fit a beta-binomial model to a conversion-style proportion from your data"
                - "Write down the prior you chose and why"
                - "Refit with a sceptical prior and compare the two posteriors"
                - "Report the probability that the difference exceeds the smallest effect that matters"
            - name: Sample size and precision planning for a study
              description: |-
                ## Purpose
                Studies of a pilot programme, a sample audit of invoices or a staff survey are often sized by convenience, then reported as 'no significant difference' when they could never have detected one. Working out in advance how many units are needed to estimate the effect to a useful precision decides whether the study is worth running at all.

                ## Milestones
                1. The target precision or smallest effect of interest agreed with the decision owner.
                2. The sample size calculated for that precision, with assumptions about variability written down.
                3. The calculation repeated under a pessimistic variability assumption.
                4. A go, resize or drop decision recorded before data collection begins.

                ## Notes
                Live product experiments have their own sizing conventions. This project is for studies, audits, pilots and samples run outside an experimentation platform.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written sample size calculation, with assumptions and a pessimistic case, and a recorded go or drop decision exist before data collection."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Agree the precision or smallest effect of interest with the person who will decide"
                - "Find a past estimate of the outcome's variability"
                - "Calculate the sample size and repeat it with a pessimistic variance"
                - "Record whether the study goes ahead, is resized or is dropped"
            - name: Multiple comparisons policy
              description: |-
                ## Purpose
                Testing twenty segments and reporting the one that moved is the quickest way to find something that is not there; with twenty independent tests at the 5 percent level, at least one false alarm is more likely than not. A short policy on when to adjust, which method to use and how to label exploratory findings protects the team from its own enthusiasm.

                ## Milestones
                1. A rule separating confirmatory comparisons named in the plan from exploratory ones.
                2. A default adjustment method chosen for families of tests, such as Holm or false discovery rate control.
                3. A required label for exploratory findings in every report.
                4. The policy applied to one past analysis that tested many segments, with the result recorded.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written multiple comparisons policy is adopted and has been applied retrospectively to one many-segment analysis."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find a past analysis that tested many segments or metrics"
                - "Choose a default adjustment method and write down when it applies"
                - "Draft the label required on exploratory findings"
                - "Reapply the policy to the past analysis and note which findings survive"
            - name: Missing data handling decision
              description: |-
                ## Purpose
                Dropping every row with a blank is the default in most tools, and it quietly biases results when the blanks are not random, such as income missing mostly for new customers. Deciding per analysis whether missingness is ignorable, and when to use complete cases, indicator approaches or multiple imputation, stops a silent default from shaping the answer.

                ## Milestones
                1. The share of missing values reported for every variable in the model.
                2. Likely reasons for missingness written down and checked against other variables.
                3. A method chosen with its assumption stated in the plan.
                4. Results compared between complete cases and the chosen method, and the difference reported.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The current analysis states its missing data method and assumption, and reports the estimate under complete cases and the chosen method."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Tabulate missing values for every variable in your current analysis"
                - "Compare rows with and without missing values on the variables you do have"
                - "Choose a handling method and write its assumption into the analysis plan"
                - "Report how much the main estimate changes between methods"
            - name: Outlier rules agreed before analysis
              description: |-
                ## Purpose
                Removing the three largest orders because they 'look odd' after seeing that they spoil the result is one of the easiest ways to manufacture a finding. Agreeing in advance what counts as an error, what counts as a genuine extreme and how each is handled, then reporting results with and without the extremes, keeps the call honest.

                ## Milestones
                1. A written distinction between data errors, which are corrected or removed, and genuine extremes, which are kept.
                2. A default approach for genuine extremes, such as winsorising at a stated percentile or a median-based method.
                3. The rule written into the analysis plan template.
                4. Every analysis reporting its main estimate with and without extremes.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An outlier rule separating errors from genuine extremes is in the plan template and the latest analysis reports both versions."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the extreme values in your latest dataset and classify each as error or genuine"
                - "Choose a default treatment for genuine extremes and write it down"
                - "Add the outlier rule to the analysis plan template"
                - "Report the main estimate with and without extremes in the next write-up"
            - name: Smallest effect that matters for each decision
              description: |-
                ## Purpose
                Statistically detectable lifts of 0.3 percent may be worthless, while an inconclusive 8 percent saving may be worth acting on. Agreeing with each decision owner the smallest effect that would change their choice turns analysis from 'is it significant' into 'is it big enough', and it is the input that sample size, equivalence testing and Bayesian reporting all need.

                ## Milestones
                1. The smallest effect of interest agreed for each of the top five backlog questions.
                2. The reasoning written in money, time or customer terms, not just percentages.
                3. Each value recorded in the analysis plan before data is opened.
                4. Values revisited when costs or priorities change.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The top five backlog questions each have a smallest effect of interest agreed with the decision owner and recorded in the plan."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask each decision owner what size of change would alter their choice"
                - "Translate each answer into money, time or customer terms"
                - "Write the agreed value into the analysis plan for each question"
                - "Recheck the agreed values with decision owners @recurring(quarterly)"
            - name: Rebuilding a key driver analysis with regression
              description: |-
                ## Purpose
                Driver charts that rank factors by their simple correlation with satisfaction or revenue double count overlapping factors and reward whatever is easiest to measure. Rebuilding one existing driver analysis as a multiple regression, with standardised coefficients, intervals and a relative importance method, gives a ranking that holds up to questions.

                ## Milestones
                1. One existing correlation-based driver chart identified and its method documented.
                2. A multiple regression fitted on the same data with diagnostics checked.
                3. Relative importance computed with a method suited to correlated predictors, such as dominance analysis.
                4. The old and new rankings compared and the difference explained to the report's owner.

                ## Notes
                A driver ranking describes association in this data. It does not say which lever to pull unless the design supports a causal reading.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A rebuilt driver analysis using regression and relative importance is delivered to the report owner with a comparison to the old ranking."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Find a driver chart in a current report that ranks factors by correlation"
                - "Refit the same factors as a multiple regression and check the diagnostics"
                - "Compute relative importance with a method suited to correlated predictors"
                - "Show the report owner the old and new rankings side by side"
            - name: Sandwich and clustered standard errors as the default
              description: |-
                ## Purpose
                Ordinary standard errors assume constant variance and independent rows, two assumptions business data rarely meets. Adopting heteroskedasticity-consistent standard errors by default, and clustered ones whenever rows repeat within customers, stores or weeks, is a small change in code that stops intervals from being far too narrow.

                ## Milestones
                1. Ordinary and sandwich standard errors compared on one existing regression.
                2. A clustered version computed for data with repeated units, and the change in interval width recorded.
                3. The default written into the reporting standard, with the minimum number of clusters noted.
                4. Code snippets saved so colleagues can apply it in one line.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The reporting standard names sandwich or clustered errors as the default, backed by a comparison on one real regression."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Refit an existing regression with heteroskedasticity-consistent standard errors"
                - "Compute clustered errors by customer or store and compare interval widths"
                - "Note the minimum number of clusters below which you would seek advice"
                - "Save a one-line code snippet for colleagues and add the default to the standard"
            - name: Rates, ratios and Simpson's paradox checks
              description: |-
                ## Purpose
                Conversion rates, defect rates and average order values are ratios, and comparing them across groups with different mixes can reverse the story, with every region improving while the total falls. Checking each rate comparison for a changing denominator mix, and analysing ratios at the right unit, prevents some of the most embarrassing headline errors.

                ## Milestones
                1. Every rate in the current report listed with its numerator, denominator and unit.
                2. One headline comparison broken down by its main subgroups to test for mix effects.
                3. Ratio metrics analysed at the level where units are independent, such as customers rather than sessions.
                4. A stratified or mix-adjusted comparison reported wherever the mix shifted.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The current report's headline rate comparison is checked by subgroup, with a stratified version reported wherever the mix shifted."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List each rate in the report with its numerator, denominator and unit"
                - "Break the main headline rate into its largest subgroups"
                - "Check whether subgroup trends run opposite to the total"
                - "Report a stratified comparison wherever the subgroup mix has shifted"
            - name: Regression to the mean check on worst-performer programmes
              description: |-
                ## Purpose
                Pick the ten worst stores, send in a support team, and next quarter most of them improve whether or not the support worked, because extreme results tend to drift back. Checking any programme that selects on extreme scores against a comparison group selected the same way stops credit going to the wrong cause.

                ## Milestones
                1. Programmes that pick units because of extreme past results identified.
                2. For one programme, a comparison group of similarly extreme units that received nothing found in past data.
                3. Improvement in both groups compared and the difference reported.
                4. A note added to future programme designs to hold back a comparison group.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "One worst-performer programme is compared against an untreated extreme group and the share of improvement due to drift is reported."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List programmes that target units chosen for extreme past results"
                - "Find past units that were just as extreme but received no intervention"
                - "Compare next-period change in both groups for one programme"
                - "Review new programme selections for the same trap @recurring(yearly)"
            - name: Presenting a statistical finding to leadership
              description: |-
                ## Purpose
                Leadership meetings give a finding five minutes and one chart, and the nuance in the appendix is lost. Preparing a single result for that slot, with the estimate and range in one sentence, the decision it supports, the main limitation and the question you expect, makes it far more likely the finding is used as intended rather than simplified into a claim it cannot carry.

                ## Milestones
                1. A headline sentence with the estimate, the range and the decision it bears on.
                2. One chart showing the estimate and its uncertainty.
                3. The main limitation and the likely challenge written down with a prepared answer.
                4. The meeting held and the decision taken recorded in the analysis log.

                ## Notes
                Rehearse the headline aloud to someone outside the data team. If they repeat it back as a certainty, rewrite it.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The finding is presented in the leadership meeting and the resulting decision is recorded in the analysis log."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the finding as one sentence with the estimate, range and decision"
                - "Draw a single chart showing the estimate with its interval"
                - "Prepare answers to the two hardest questions the room is likely to ask"
                - "Record the decision taken in the analysis log after the meeting"
            - name: External statistician review of a high-stakes analysis
              description: |-
                ## Purpose
                When an analysis will set a price, close a site or appear in a public report, an independent statistician's review is cheap insurance. Packaging the plan, data extract, code and draft wording so a reviewer can work in a few hours, and logging how each comment was resolved, turns the review into a record anyone can audit later.

                ## Milestones
                1. The analysis chosen for review and a reviewer outside the team agreed.
                2. A review pack containing the plan, data dictionary, code, outputs and draft wording.
                3. Every reviewer comment answered as accepted, rejected with a reason or deferred.
                4. The final wording updated and the review record filed with the analysis.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "An external review record, with every comment resolved, is filed beside one high-stakes analysis."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pick the upcoming analysis with the highest stakes for external review"
                - "Assemble the plan, data dictionary, code, outputs and draft wording"
                - "Log each reviewer comment as accepted, rejected or deferred"
                - "File the review record next to the final analysis"
            - name: Submitting a paper or talk built on business data
              description: |-
                ## Purpose
                Researchers working inside companies often have findings worth sharing at a conference or in a journal, but publication needs approval, anonymised data and methods that survive peer review. Treating one submission as a dated project, with approvals sought first and the analysis plan written up as the methods section, is the realistic route from internal analysis to a public record.

                ## Milestones
                1. A target venue and its submission deadline chosen.
                2. Written approval obtained from the data owner and any legal or communications reviewer.
                3. Data and figures checked for anything that could identify customers, staff or confidential figures.
                4. Methods and limitations written to the venue's reporting guidelines and the submission sent.

                ## Notes
                Seek approval before writing, not after. Some organisations need weeks to clear external publication.
              priority: low
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A submission based on approved, anonymised business data is sent to a named venue before its deadline."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Choose a venue and note its submission deadline and reporting guidelines"
                - "Ask the data owner what approvals external publication needs"
                - "Check every figure and table for identifying or confidential detail"
                - "Write the methods and limitations section from your analysis plan"
            - name: Responding to a challenge to a published claim
              description: |-
                ## Purpose
                Sooner or later an auditor, a board member, a journalist or a competitor asks how a published number was worked out. Handling the response as a project, with the original plan, extract, code and wording retrieved, a re-run confirming the figure and a plain reply, turns a stressful request into a demonstration of good practice.

                ## Milestones
                1. The claim, its source analysis and the person asking identified.
                2. The original data extract, code and outputs retrieved via the analysis log.
                3. The figure re-run and any discrepancy explained.
                4. A written response approved by the claim's owner and sent.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A written response, backed by a re-run of the original analysis, is approved by the claim's owner and sent."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Find the analysis log entry and files behind the challenged claim"
                - "Re-run the analysis from the saved extract and compare the figure"
                - "Write a plain reply covering method, data and limitations"
                - "Ask the owner of the claim to approve the reply before it goes out"
            - name: Completing a formal statistics course
              description: |-
                ## Purpose
                Self-study fills gaps, but a structured course with graded exercises forces the topics people skip, such as likelihood, model assumptions and study design. Choosing one course that matches the gaps from your self-assessment, and booking weekly study time around work, gives a finishing line rather than a vague intention.

                ## Milestones
                1. A course chosen that covers at least two of your three priority gaps.
                2. A weekly study block protected in the calendar.
                3. Every graded exercise submitted on time.
                4. One technique from the course applied to a real backlog question.

                ## Notes
                Start from the **Course** template. University extension, professional body and reputable online courses all work; pick one with assessed exercises.
              priority: low
              deadlineOffsetDays: 180
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A statistics course with graded exercises is completed and one technique from it is applied to a real question."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Shortlist three courses that cover your priority gaps"
                - "Enrol and copy the module dates into your calendar"
                - "Work through the week's module and its exercises @recurring(weekly:sun)"
                - "Apply one course technique to a question on the backlog"
            - name: From academic research to business statistics
              description: |-
                ## Purpose
                Researchers arriving from academia bring strong methods and expectations that do not transfer: deadlines in days, decisions that cannot wait for significance, data nobody designed and audiences with little patience for caveats. A deliberate first three months, learning how decisions get made and adapting your reporting, avoids being seen as either slow or careless.

                ## Milestones
                1. The main decision cycles and their owners mapped in the first month.
                2. Three past analyses read to learn the house style and evidence bar.
                3. One quick, decision-ready analysis delivered within a week of the request.
                4. A short note on which academic habits to keep, adapt or drop.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Within ninety days, a decision-ready analysis has been delivered within a week of its request and a written note on adapted practices exists."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask your manager which decisions next quarter will need your analysis"
                - "Read three past analyses to learn the evidence bar people expect"
                - "Deliver one decision-ready answer within a week of a request"
                - "Write down which academic habits you will keep, adapt or drop"
            - name: Friday-deadline significance question triage
              description: |-
                ## Purpose
                Knowledge workers are regularly asked 'is this difference significant' with a day to answer and no statistician to hand. A five-question triage, covering the decision, the number of units, whether the comparison was planned, the size of the difference in money and what else changed, produces a careful answer in an hour and flags when to push back on the deadline.

                ## Milestones
                1. A one-page triage sheet with five questions and an answer template.
                2. The sheet used on a real request and the answer sent with an honest range.
                3. A rule for when to say the data cannot answer the question in time.
                4. The sheet shared with two colleagues who field similar requests.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A triage sheet has been used on one real urgent request and shared with two colleagues."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the five triage questions on one page"
                - "Draft an answer template that leads with a range, not a yes or no"
                - "Use the sheet on the next urgent significance request"
                - "Write the rule for when to say the data cannot answer in time"
            - name: Inheriting a predecessor's statistical analysis
              description: |-
                ## Purpose
                Taking over a recurring analysis, such as a quarterly price sensitivity estimate or a staff survey model, usually means code with no notes and numbers people already rely on. Rerunning it, documenting what it does, checking its assumptions and deciding what to keep before your name goes on it protects both you and the people using the results.

                ## Milestones
                1. The analysis rerun from source and the last published figures reproduced, or the gap explained.
                2. A plain description of the data, method and assumptions written.
                3. Weaknesses listed with a fix, keep or retire decision for each.
                4. The first release under your name accompanied by a note on any change in method.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "The inherited analysis is reproduced, documented and released with a note on any change in method."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Rerun the inherited analysis and compare with the last published figures"
                - "Ask the agent to outline the inherited code step by step, then check it line by line"
                - "Write a plain description of its data, method and assumptions"
                - "Mark each weakness as fix, keep or retire"
            - name: Small samples in a niche or B2B setting
              description: |-
                ## Purpose
                Forty enterprise clients or a pilot across twelve sites cannot lean on large-sample shortcuts, and the usual tests can be badly off. Learning which methods behave with small numbers, such as exact tests, permutation tests and intervals that do not assume normality, and showing individual data points rather than only averages, gives answers that respect how little the data can say.

                ## Milestones
                1. The sample sizes behind your current analyses listed.
                2. Exact or permutation tests used where groups have fewer than about thirty units.
                3. Results shown with every data point plotted alongside the summary.
                4. Wording that states plainly how wide the uncertainty is.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "One small-sample comparison is reanalysed with a permutation or exact test and reported with all data points shown."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the sample size behind each analysis you publish"
                - "Rerun one small-sample comparison as a permutation test"
                - "Plot every data point alongside the summary for that comparison"
                - "Rewrite the conclusion to state how wide the uncertainty is"
            - name: Lone analyst arranging a second pair of eyes
              description: |-
                ## Purpose
                The only analyst in a charity, a small firm or a research unit has nobody to catch their mistakes and no one to ask. Setting up a monthly swap with a peer elsewhere, under simple confidentiality ground rules and with anonymised extracts, gives you the review that larger teams take for granted.

                ## Milestones
                1. A peer found in another organisation or a professional community.
                2. Ground rules agreed: anonymised data only, confidentiality and scope.
                3. A monthly review swap held for three months.
                4. Changes made after peer comments recorded in the analysis log.

                ## Notes
                Check with your manager what can be shared outside the organisation before the first swap. Aggregated or synthetic data is often enough for a methods review.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Three monthly review swaps with an external peer are completed under written ground rules."
                cadence: rolling
              tasks:
                - "Ask in a professional statistics community for an analyst open to a review swap"
                - "Agree ground rules on anonymised data, confidentiality and scope"
                - "Swap one analysis with your external peer reviewer @recurring(monthly:18)"
                - "Record any change made after peer comments in the analysis log"
            - name: Briefing a statistical consultant
              description: |-
                ## Purpose
                Bringing in a consultant for a survival model or a multilevel analysis can be money well spent or a costly report nobody can maintain. A clear brief with the question, the decision, data access, deliverables including code, and a handover session makes the work reusable after the contract ends.

                ## Milestones
                1. A written brief covering question, decision, data, timescale and deliverables.
                2. Two or three consultants compared on relevant experience and price.
                3. Code, documentation and a handover session written into the agreement.
                4. The delivered work rerun in-house before final sign-off.

                ## Notes
                Start from the **Vendor** template. Ask for references from clients who had to rerun the work later.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A consultant engagement is completed with code and documentation that has been rerun in-house."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write a one-page brief with question, decision, data and deliverables"
                - "Compare two or three consultants on similar past work and price"
                - "Write code, documentation and a handover session into the agreement"
                - "Rerun the delivered analysis in-house before signing it off"
            - name: Multilevel models for nested business data
              description: |-
                ## Purpose
                Staff within branches, pupils within schools, customers within account managers: nested data breaks ordinary regression, which either ignores the grouping or drowns it in dummy variables. Mixed effects models estimate group-level variation and borrow strength across small groups, so a branch with eight customers is not ranked first or last on luck.

                ## Milestones
                1. A nested dataset identified and its levels described.
                2. A random intercept model fitted and the share of variance at each level reported.
                3. Group estimates compared with raw group averages to show shrinkage.
                4. A random slope tried and kept only if it is supported and interpretable.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A multilevel model on nested company data is written up with variance shares and a shrinkage comparison."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Pick a nested question such as customers within branches"
                - "Fit a random intercept model and report the variance at each level"
                - "Chart shrunken branch estimates against raw branch averages"
                - "Test whether a random slope adds anything worth explaining"
            - name: Generalised linear models for counts and skewed costs
              description: |-
                ## Purpose
                Complaints per week, items per order and claim costs are counts or skewed positive values, and squeezing them into ordinary regression gives negative predictions and misleading intervals. Fitting Poisson, negative binomial and gamma models, with exposure handled as an offset and overdispersion checked, gives estimates that respect how the data was generated.

                ## Milestones
                1. A count outcome modelled with Poisson and negative binomial regression, and overdispersion assessed.
                2. Exposure, such as customers served or days open, entered as an offset.
                3. A skewed cost outcome modelled with a gamma log-link model.
                4. Coefficients reported as rate ratios or percentage changes with intervals.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Count and skewed cost outcomes are modelled with suitable generalised linear models and reported as rate ratios with intervals."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Fit Poisson and negative binomial models to a weekly count outcome"
                - "Add exposure such as days open as an offset"
                - "Model a skewed cost outcome with a gamma log-link model"
                - "Report the coefficients as rate ratios with intervals"
            - name: Survival analysis for time-to-event questions
              description: |-
                ## Purpose
                Time until a ticket is resolved, a machine fails or a contract is signed includes cases still open when the data was pulled, and averaging only the finished ones understates the wait. Kaplan-Meier curves and Cox models handle those censored cases properly and answer questions about how long things take and what is associated with taking longer.

                ## Milestones
                1. Start, event and censoring defined in writing for one time-to-event question.
                2. Kaplan-Meier curves drawn by a key group, with medians and intervals.
                3. A Cox model fitted with the proportional hazards assumption checked.
                4. Results written up in time terms a manager can use, such as the share resolved within ten days.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "One time-to-event question is analysed with Kaplan-Meier curves and a checked Cox model, and reported in plain time terms."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Define the start, the event and the censoring rule for one time-to-event question"
                - "Draw Kaplan-Meier curves by a key group with median times"
                - "Fit a Cox model and check the proportional hazards assumption"
                - "Report the share of cases reaching the event by a set time"
            - name: Equivalence and non-inferiority testing
              description: |-
                ## Purpose
                Finding no significant difference is not evidence that a cheaper supplier, a shorter process or a new tool performs as well as the old one. Equivalence and non-inferiority tests ask the right question, whether any difference sits inside a margin agreed in advance, and they are the honest way to support a switch on cost grounds.

                ## Milestones
                1. A margin agreed in writing with the decision owner before analysis.
                2. Two one-sided tests, or an interval compared against the margin, run on real data.
                3. The result reported as equivalent, not equivalent or inconclusive.
                4. A template sentence for equivalence findings added to the reporting standard.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One equivalence or non-inferiority analysis, with a margin agreed in advance, is completed and its wording added to the standard."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Find a decision where the question is whether a cheaper option is as good"
                - "Agree the equivalence margin with the decision owner in writing"
                - "Run two one-sided tests and compare the interval with the margin"
                - "Add an equivalence wording example to the reporting standard"
---

# Statistical Analysis Methods

This area is for researchers and knowledge workers who are asked what the numbers really show and want to answer without overclaiming. It starts with the foundations (a toolkit, a backlog of questions, an analysis plan, a descriptive profile, a method guide and a reporting standard), then the routines that keep work checked, the core methods from confidence intervals to logistic regression, decisions on missing data, outliers, multiple comparisons and the smallest effect that matters, dated events such as a leadership presentation or an external review, situations from leaving academia to working alone, and finally specialist models for nested, count, time-to-event and equivalence questions.

What repeats is a weekly review swap, weekly office hours and reading, a monthly analysis log pass, overclaiming audit and casebook entry, a quarterly look-back on past conclusions, and a yearly refresh of the reporting standard. The Skills matrix, Reading queue, Meeting notes, Course and Vendor templates pair with the self-assessment, the reading habit, office hours, a formal course and briefing a consultant. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
