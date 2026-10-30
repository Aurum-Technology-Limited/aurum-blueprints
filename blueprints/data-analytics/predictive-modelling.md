---
id: data-analytics.predictive-modelling
name: Predictive Modelling
description: "Framing the decision, leak-free training data, honest splits and baselines, calibrated and explained models, validation reports and sign-off, and the routines that keep predictions trustworthy once people rely on them."
category: business
version: 1.0.0
tags: [data-analytics, predictive-modelling, researcher, engineer, knowledge-worker, machine-learning, model-validation, classification]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - risk-register
    - reading-queue
    - purchase-decision
    - meeting-notes
    - remediation-plan
  pillars:
    - name: Data & Analytics
      emoji: "📊"
      description: "Turning data into decisions: metrics and dashboards, data pipelines and warehouses, experimentation, forecasting and modelling, machine learning, data quality and governance."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Predictive Modelling
          description: "Building models that predict outcomes such as conversion, risk or demand from historical data, and validating them before anyone relies on them."
          projects:
            - name: Prediction problem framing document
              description: |-
                ## Purpose
                Most failed models answer a question nobody needed answered at the moment it could be acted on. Before touching data, write down the decision the prediction will change, who will act on it, how many cases they can handle each week and how far ahead the prediction must arrive. A one-page framing agreed with the decision owner prevents months of accurate but useless work.

                ## Milestones
                1. A one-page document naming the decision, the person who acts on each prediction and the action they take.
                2. The prediction point stated: what is known at the moment of scoring and how far ahead the outcome lies.
                3. Capacity recorded, such as the number of cases the team can review each week.
                4. The current way the decision is made written down as the process the model must beat.
                5. The decision owner's sign-off recorded with the date.

                ## Notes
                If nobody can say what they would do differently with a perfect prediction, stop here. That is a finding, not a failure.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A signed one-page framing document names the decision, the actor, the prediction point, weekly capacity and the current process the model must beat."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Book a 45-minute conversation with the person whose decision the model will inform"
                - "Write the decision, the actor and the action on one page"
                - "Note how many predicted cases the team can act on each week"
                - "Get the decision owner to sign off the framing in writing"
                - "Revisit the framing document with the decision owner @recurring(yearly)"
            - name: Target variable and outcome window definition
              description: |-
                ## Purpose
                Converted, defaulted or late all sound obvious until you have to write the query. Deciding exactly what counts as a positive case, over which window after the prediction point, and how to treat cases still in progress, fixes the label every later number depends on. Changing it halfway through means starting again.

                ## Milestones
                1. A written target definition with the event, the source table and the exact rule for a positive case.
                2. An outcome window chosen, such as 90 days after the prediction point, with the reason recorded.
                3. A rule for cases whose window has not yet closed, usually excluding them from training.
                4. The base rate of the target calculated for each of the last eight quarters.
                5. The definition reviewed by someone who knows the operational process.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A target definition states the positive-case rule, outcome window, treatment of immature cases and quarterly base rates, reviewed by an operations expert."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the target as a rule someone else could turn into a query"
                - "Choose the outcome window and note why that length fits the decision"
                - "Calculate the base rate of the target for each recent quarter"
                - "Ask an operations colleague to find cases the rule gets wrong"
            - name: Point-in-time training dataset snapshot
              description: |-
                ## Purpose
                Training tables built from today's version of the data quietly include facts that were unknown at the prediction point: updated addresses, corrected statuses, balances after the event. Rebuilding each row as it looked on its scoring date is the single most effective protection against a model that shines in testing and fails in use.

                ## Milestones
                1. Every training row keyed by entity and an as-of date matching the prediction point.
                2. Each input sourced from history tables or snapshots valid on that as-of date.
                3. Fields that are overwritten in place identified and either reconstructed or dropped.
                4. The finished table saved with its query, row count and build date so it can be rebuilt.

                ## Notes
                Where history was never kept, start saving daily snapshots of the key tables now. The model you build next year will need them.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A training table exists in which every input is taken as of its row's prediction date, with overwritten fields documented and the build query saved."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List every input source and whether it keeps history or overwrites values"
                - "Rebuild each training row using values as of its prediction date"
                - "Drop or reconstruct fields that are overwritten in place"
                - "Save the build query, row count and build date beside the table"
            - name: Label leakage audit before the first model
              description: |-
                ## Purpose
                Leakage is when an input carries information about the outcome that would not exist at scoring time, such as a cancellation reason on a retention model or a collections flag on a default model. It produces suspiciously good accuracy that collapses in use. Auditing for it before the first serious model saves the embarrassment of retracting results later.

                ## Milestones
                1. Every candidate input reviewed for when it is created relative to the prediction point.
                2. Single-input models run for each candidate, with any that predict the target alone flagged.
                3. Flagged inputs either removed or confirmed safe by the system owner.
                4. A short leakage note kept with the training dataset listing what was removed and why.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A leakage note lists every input checked, each single-input score, and the inputs removed with the reason, before the first model is shared."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Note for each input when its value is created relative to the prediction point"
                - "Score each input alone against the target and flag any that look too good"
                - "Ask the system owner how each flagged field gets populated"
                - "Write the leakage note and store it with the training dataset"
            - name: Train, validation and test split plan
              description: |-
                ## Purpose
                A random split lets the model see the future and lets near-duplicate rows from the same customer appear on both sides. Deciding the split before modelling, usually an out-of-time test set locked away plus grouped splits by customer or account, keeps the final accuracy figure an honest estimate of how the model will do next quarter.

                ## Milestones
                1. A test period, typically the most recent months, set aside and not touched until the final evaluation.
                2. Grouping rules agreed so the same customer, household or account never sits in two splits.
                3. Validation folds defined for tuning, with the method written down.
                4. Row counts and base rates recorded for each split.

                ## Notes
                Write down the date you first looked at the test set. If you look twice and change the model, it has become a validation set.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written split plan with a locked out-of-time test set, grouping rules and fold definitions, with row counts and base rates per split."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Choose the months that will form the locked out-of-time test set"
                - "Decide which identifier must stay together within one split"
                - "Record row counts and base rates for train, validation and test"
                - "Store the test set where nobody tunes against it by accident"
            - name: Naive baselines the model has to beat
              description: |-
                ## Purpose
                Without baselines, a model with 0.78 AUC sounds impressive even when a single rule, such as flagging customers who missed last month's payment, reaches 0.75. Scoring two or three simple baselines on the same validation data shows how much the modelling effort actually adds and gives stakeholders a number they understand intuitively.

                ## Milestones
                1. A base-rate baseline that predicts the average for everyone.
                2. A one-rule or current-process baseline built from what the team does today.
                3. A simple linear or logistic model with a handful of obvious inputs.
                4. All baselines scored on the same validation folds with the chosen metric.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "At least three baselines are scored on the same validation folds and recorded in a table that every later model is compared against."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Score a base-rate prediction on the validation folds"
                - "Turn the team's current rule of thumb into a scored baseline"
                - "Fit a small logistic or linear model with five obvious inputs"
                - "Put all baseline scores in a table at the top of the experiment log"
            - name: Evaluation metric chosen for the decision
              description: |-
                ## Purpose
                Accuracy is misleading when only 3 percent of cases are positive, and AUC says nothing about whether the top 200 cases a team can review are the right ones. Picking the metric from the framing document, such as precision within capacity, expected cost or log loss, aligns model selection with what the business will actually feel.

                ## Milestones
                1. One primary metric chosen and linked to the decision and capacity in the framing document.
                2. Two or three secondary metrics named, including a calibration measure.
                3. The metric calculated for every baseline already built.
                4. A rule written for how large an improvement must be to count, given its uncertainty.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A metric decision record names the primary metric, secondary metrics including calibration, and the minimum meaningful improvement, agreed with the decision owner."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Reread the framing document and note the team's weekly capacity"
                - "Pick the primary metric that matches how predictions will be used"
                - "Add a calibration measure such as the Brier score as a secondary metric"
                - "Bootstrap the baseline metric to see how much it varies by chance"
            - name: Cost matrix for false positives and negatives
              description: |-
                ## Purpose
                Every wrong prediction costs something different: a missed fraudulent claim may cost thousands, a wrongly flagged good customer a phone call and some goodwill. Agreeing rough costs and benefits for each outcome with the business owner turns threshold choice from guesswork into arithmetic, even when the numbers are only estimates.

                ## Milestones
                1. The value of a true positive and the cost of a false positive and a false negative written in money or hours.
                2. The source or assumption behind each estimate noted.
                3. The matrix reviewed and accepted by the business owner.
                4. A low and high range recorded for the least certain number.
              priority: medium
              deadlineOffsetDays: 35
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A cost matrix with sourced estimates for each outcome and a sensitivity range is accepted in writing by the business owner."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the business owner what a missed case and a false alarm each cost"
                - "Write the four outcomes with a money or time estimate for each"
                - "Note a low and high value for the least certain estimate"
                - "Get the matrix accepted before any threshold is chosen"
            - name: Exploratory review of the training data
              description: |-
                ## Purpose
                Before fitting anything, look at what you actually have: missing values by period, inputs that changed meaning after a system migration, outliers, duplicate rows and how the target rate moves over time. A few hours of plots finds problems that would otherwise surface as baffling model behaviour weeks later.

                ## Milestones
                1. Missing value rates for every input, split by month.
                2. Inputs with sudden shifts in distribution identified and explained.
                3. Duplicate entities and impossible values counted and handled.
                4. A short summary of data issues shared with whoever owns the source systems.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written data review lists missingness by month, explained distribution shifts, duplicates and impossible values, and has been shared with source owners."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Plot missing value rates per input by month"
                - "Find inputs whose distribution jumps at a single date"
                - "Count duplicate entities and values outside possible ranges"
                - "Ask the agent to summarise the data issues into a note for source owners"
            - name: Interpretable regression benchmark model
              description: |-
                ## Purpose
                Logistic and linear regression, built carefully with handled missing values, capped outliers and a few splines or bins, is often within a few points of a complex model and far easier to explain, audit and maintain. Building one properly sets the bar a complex model must clear to justify its extra cost.

                ## Milestones
                1. A regression model with documented handling of missing values, outliers and nonlinear inputs.
                2. Coefficients checked for signs that match domain knowledge.
                3. Scores on the validation folds added to the baseline table.
                4. A one-paragraph plain-language description of what drives the predictions.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A documented regression benchmark is scored on the validation folds and listed in the baseline table, with a plain-language summary of its drivers."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Decide how each input's missing values and outliers will be handled"
                - "Fit the regression with splines or bins for clearly nonlinear inputs"
                - "Check each coefficient's sign with someone who knows the domain"
                - "Add the benchmark's validation scores to the baseline table"
            - name: Modelling experiment log
              description: |-
                ## Purpose
                Three weeks into tuning, nobody remembers which run used the new inputs or why the score dropped on Tuesday. A log with one row per run, holding the data version, inputs, parameters, validation score and a one-line conclusion, makes results reproducible and turns dead ends into knowledge instead of repeated work.

                ## Milestones
                1. A log with columns for date, data version, input set, parameters, metric and conclusion.
                2. Every run since the baselines recorded, including the failures.
                3. A weekly summary of what was learned written at the top.
                4. Any result shared with stakeholders traceable to a single log row.

                ## Notes
                Start from the **Metrics log** template. An experiment tracking tool can fill most columns automatically, but the conclusion column still needs a person.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every model run since the baselines appears in the log, and each result shared with stakeholders can be traced to one row."
                cadence: rolling
              tasks:
                - "Create the experiment log from the metrics log template"
                - "Record each run with its data version, inputs and validation score"
                - "Write a three-line summary of the week's runs and conclusions @recurring(weekly:fri)"
            - name: Model inventory with owners and status
              description: |-
                ## Purpose
                Organisations routinely discover models nobody remembers building, still scoring customers every night. An inventory listing every predictive model, its purpose, owner, data sources, last validation date and status, whether in development, live or retired, is the foundation for any review, audit or retirement decision.

                ## Milestones
                1. Every model in development or use listed with purpose, owner and status.
                2. Each live model's last validation date and next due date recorded.
                3. Models without an active owner flagged and escalated.
                4. The inventory reviewed monthly, with changes dated.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An inventory lists every predictive model with owner, status and validation dates, and no live model has lacked an owner for more than a month."
                cadence: rolling
              tasks:
                - "List every predictive model you know of, including spreadsheet ones"
                - "Add the owner, status and last validation date for each"
                - "Escalate any live model that has no active owner"
                - "Update statuses and validation due dates in the inventory @recurring(monthly:12)"
            - name: Monthly scored versus realised outcomes review
              description: |-
                ## Purpose
                Once outcomes mature, every prediction can be checked against what actually happened. A monthly table of predicted against actual rates by score band, shared with the decision owner, catches a model going stale long before an annual review and keeps the people using the scores honest about how far to trust them.

                ## Milestones
                1. A query that joins each month's scores to outcomes once the outcome window closes.
                2. Predicted and actual rates compared by score decile.
                3. A tolerance agreed, beyond which the gap triggers an investigation.
                4. Six consecutive monthly reviews completed and shared.

                ## Notes
                Automated drift alerts belong to production monitoring. This review is the human reading of matured results, and it works even for a model scored in a spreadsheet.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly reviews compare predicted and actual rates by decile against an agreed tolerance and are shared with the decision owner."
                cadence: rolling
              tasks:
                - "Write the query that joins scores to matured outcomes"
                - "Agree the tolerance for the gap between predicted and actual rates"
                - "Compare predicted and actual rates by decile for the latest mature month @recurring(monthly:18)"
                - "Send the decile table and a one-line verdict to the decision owner"
            - name: Quarterly model revalidation pack
              description: |-
                ## Purpose
                Relationships between inputs and outcomes shift with pricing changes, new channels and economic cycles. Rerunning the full validation pack each quarter on the newest out-of-time data, covering discrimination, calibration and stability by segment, gives a dated record of whether the model still deserves the trust it was given at launch.

                ## Milestones
                1. A scripted validation pack that reruns on new data with one command.
                2. Discrimination, calibration and segment results compared with launch values.
                3. Any metric outside its agreed tolerance logged with an action.
                4. Four quarterly packs filed in a year.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly revalidation packs are filed in twelve months, each comparing metrics with launch values and logging actions for any breach."
                cadence: cyclic
              tasks:
                - "Script the validation pack so it reruns on a new data window"
                - "Run the revalidation pack on the latest out-of-time quarter @recurring(quarterly)"
                - "Log any metric outside tolerance with an owner and an action"
            - name: Annual keep, rebuild or retire review
              description: |-
                ## Purpose
                Models accumulate, and each one adds scoring jobs, data dependencies and questions from auditors. A yearly review of every live model against its original framing, with a recorded decision to keep, rebuild or retire, stops the estate growing faster than the team that maintains it.

                ## Milestones
                1. Each live model's current value to its decision owner confirmed or questioned.
                2. Maintenance cost and known weaknesses listed for each.
                3. A keep, rebuild or retire decision recorded per model with a reason.
                4. Retired models switched off and their consumers told.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Every live model has a dated keep, rebuild or retire decision from the last twelve months, and retired models no longer score."
                cadence: cyclic
              tasks:
                - "Ask each decision owner whether the model still changes what they do"
                - "List maintenance costs and known weaknesses for each live model"
                - "Hold the keep, rebuild or retire review for every live model @recurring(yearly)"
                - "Tell consumers of retired models the date scoring stops"
            - name: Peer review of modelling work
              description: |-
                ## Purpose
                A second pair of eyes catches the split that leaked, the filter that dropped a whole region and the metric computed on training data. A standing monthly review slot, with a short checklist covering data, splits, leakage, metrics and conclusions, makes review normal rather than a sign of distrust.

                ## Milestones
                1. A one-page review checklist covering data, splits, leakage, metrics and claims.
                2. A monthly review slot booked with a colleague or partner team.
                3. Every model shared beyond the team reviewed against the checklist first.
                4. Review findings logged with how each was resolved.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every model shared outside the team in the last six months passed a checklist review, with findings and resolutions logged."
                cadence: rolling
              tasks:
                - "Draft a one-page review checklist for modelling work"
                - "Find a colleague willing to swap reviews each month"
                - "Review one piece of modelling work against the checklist @recurring(monthly:9)"
                - "Log each finding with how it was resolved"
            - name: Label quality spot checks
              description: |-
                ## Purpose
                Labels come from busy people and imperfect systems: claims marked fraudulent that were not, leads marked lost because nobody updated the CRM. Pulling a sample of labelled cases every quarter and checking them against source records shows how noisy the target is, which caps how good any model can honestly be.

                ## Milestones
                1. A random sample of 50 to 100 labelled cases checked against source records each quarter.
                2. The label error rate estimated with the main error types listed.
                3. Systematic errors reported to the process owner.
                4. The training label rule adjusted when an error pattern is confirmed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A quarterly label audit of at least 50 cases records the error rate and error types, with systematic errors reported to the process owner."
                cadence: rolling
              tasks:
                - "Check a random sample of 50 labelled cases against source records @recurring(quarterly)"
                - "Estimate the label error rate and list the error types"
                - "Report systematic labelling errors to the process owner"
            - name: Override and feedback log from score users
              description: |-
                ## Purpose
                The people acting on predictions know things the model does not, and their overrides are a stream of free evidence. Logging when someone ignores or reverses a score, with a reason, shows where the model is blind, whether users trust it and which new inputs might be worth adding.

                ## Milestones
                1. A simple way for users to record an override and its reason.
                2. Overrides counted each month by reason and score band.
                3. Patterns in overrides discussed with the users who made them.
                4. At least one model or process change made from override evidence.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Overrides are logged with reasons, summarised monthly by reason and score band, and at least one change has been made from that evidence."
                cadence: rolling
              tasks:
                - "Add an override reason field where users act on scores"
                - "Summarise the month's overrides by reason and score band @recurring(monthly:24)"
                - "Discuss the largest override pattern with the users behind it"
                - "Turn one confirmed blind spot into a candidate input or rule change"
            - name: Model risk register
              description: |-
                ## Purpose
                Each predictive model carries risks beyond accuracy: a data source that may disappear, a segment where errors cluster, a regulatory question, a single person who understands it. Keeping those risks in one register with likelihood, impact and mitigation means they get reviewed on a rhythm instead of discovered in an incident.

                ## Milestones
                1. A register with at least one entry per live model covering data, performance, people and compliance risks.
                2. Each risk scored for likelihood and impact with a named owner.
                3. Mitigations recorded and dated.
                4. The register reviewed every quarter.

                ## Notes
                Start from the **Risk register** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A risk register covers every live model with scored, owned risks and dated mitigations, reviewed in each of the last two quarters."
                cadence: rolling
              tasks:
                - "Create the register from the risk register template"
                - "Add data, performance, people and compliance risks for each live model"
                - "Assign an owner and mitigation to every high-scoring risk"
                - "Review scores and mitigations across the register @recurring(quarterly)"
            - name: Gradient boosted trees in practice
              description: |-
                ## Purpose
                Gradient boosting is the usual winner on tabular business data, and also easy to misuse: too many trees, unchecked learning rates, early stopping on the test set. Working through one real dataset with a boosting library, varying one setting at a time against your validation folds, builds intuition that documentation cannot.

                ## Milestones
                1. A boosted model trained on your own data with early stopping on validation folds.
                2. The effect of learning rate, tree depth and minimum leaf size each charted.
                3. The boosted model compared with the regression benchmark on the primary metric.
                4. A page of notes on settings that mattered and those that did not.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A boosted model is compared with the regression benchmark on the primary metric, with charts for three settings and a page of notes."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Install a gradient boosting library and fit default settings on your data"
                - "Vary learning rate, depth and leaf size one at a time and chart the results"
                - "Compare the best boosted model with the regression benchmark"
                - "Write a page on which settings changed results and which did not"
            - name: Probability calibration skills
              description: |-
                ## Purpose
                Ranking well is not the same as being right about probabilities: a model can sort cases perfectly and still say 40 percent when the true rate is 10. That wrecks any decision using the number itself, such as expected cost or capacity planning. Learning to read reliability curves and apply Platt or isotonic calibration on held-out data means your probabilities can be quoted, not just sorted.

                ## Milestones
                1. Reliability curves drawn for two of your models on validation data.
                2. Brier score and expected calibration error calculated before and after calibration.
                3. Platt and isotonic calibration compared on a held-out calibration set.
                4. A note on when recalibration alone fixes a stale model and when it does not.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Reliability curves and Brier scores before and after two calibration methods are recorded for one model, with a short note on when to use each."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Draw a reliability curve for your current best model"
                - "Set aside a calibration sample separate from the validation folds"
                - "Compare Platt and isotonic calibration on the Brier score"
                - "Write a note on when recalibration is enough"
            - name: Cross-validation designs for real data
              description: |-
                ## Purpose
                Plain k-fold assumes rows are independent, which is rarely true for customers with repeat orders, patients with several visits or data with a strong time trend. Practising grouped, stratified and rolling-origin designs on the same dataset shows how much each choice moves the estimate, and why the wrong one flatters the model.

                ## Milestones
                1. Plain, grouped and time-based cross-validation run on the same model and data.
                2. The spread of fold scores compared across the three designs.
                3. The design that matches how the model will be used chosen and justified.
                4. A worked example saved for colleagues.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three cross-validation designs are compared on one model, with the chosen design justified in a saved worked example."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Run plain k-fold cross-validation and note the mean and spread"
                - "Repeat with folds grouped by customer or account"
                - "Repeat with rolling time-based folds"
                - "Write up which design matches real use and why"
            - name: Hyperparameter tuning without fooling yourself
              description: |-
                ## Purpose
                Hundreds of tuning trials against one validation set will find settings that fit its noise, and the gain disappears on the test set. Learning nested cross-validation, sensible search spaces and when to stop, while tracking how many configurations were tried, keeps the reported improvement real.

                ## Milestones
                1. A bounded search space written down before tuning starts.
                2. Random or Bayesian search run with the number of trials recorded.
                3. Nested cross-validation used to estimate tuned performance on one model.
                4. The tuned gain compared with the gap between validation and test scores.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A tuning exercise records the search space, trial count and nested cross-validation estimate, with the validation to test gap reported."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write the search space and trial budget before running any tuning"
                - "Run random search and log every trial in the experiment log"
                - "Estimate tuned performance with nested cross-validation"
                - "Compare the tuned gain with the validation to test gap"
            - name: Model explanations with SHAP and partial dependence
              description: |-
                ## Purpose
                Stakeholders ask two questions of any model: what drives it overall, and why did it score this case so high. Learning global and local explanation tools, and their traps with correlated inputs, lets you answer both without implying that an input causes the outcome.

                ## Milestones
                1. Global importance and partial dependence plots produced for the top ten inputs.
                2. Local explanations generated for five high and five low scored cases.
                3. Explanations checked for distortion from strongly correlated inputs.
                4. A one-page explainer for non-technical users stating that drivers are associations, not causes.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A one-page explainer with global and local explanations for one model is shared with users and states that drivers are associations, not causes."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Produce global importance and partial dependence plots for the top inputs"
                - "Explain five high and five low scored cases individually"
                - "Check which top inputs are strongly correlated with each other"
                - "Ask the agent to draft a plain-language explainer from the plots"
            - name: Imbalanced outcome techniques
              description: |-
                ## Purpose
                Rare outcomes such as fraud, defaults or equipment failure tempt people to oversample until the classes balance, which distorts probabilities and rarely helps ranking. Testing class weights, resampling and simply better metrics side by side on your own data shows which, if any, earn their place.

                ## Milestones
                1. Class weighting, undersampling and oversampling each tested on the same folds.
                2. Results compared on precision-recall area and calibration, not accuracy.
                3. Probabilities corrected back to the true base rate where resampling was used.
                4. The chosen default approach recorded with its reason.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three imbalance approaches are compared on precision-recall area and calibration, with the chosen approach and probability correction recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Train a reference model with no imbalance handling"
                - "Try class weights, undersampling and oversampling on the same folds"
                - "Correct resampled probabilities back to the true base rate"
                - "Record which approach you will use by default"
            - name: Predictive modelling reading programme
              description: |-
                ## Purpose
                Much of what goes wrong in applied modelling was written up years ago: in textbooks on statistical learning, in papers on leakage and dataset shift, and in the reporting guidelines used by medical prediction research. Reading one substantial piece a month, and writing three lines on what you would change in your own work, compounds faster than chasing new libraries.

                ## Milestones
                1. A reading list of twelve items across textbooks, papers and practitioner write-ups.
                2. One item read each month with three lines of notes.
                3. At least two changes made to your own practice from the reading.
                4. The list refreshed after twelve months.

                ## Notes
                Start from the **Reading queue** template.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Twelve monthly reading notes exist, and at least two documented changes to your modelling practice came from them."
                cadence: rolling
              tasks:
                - "Build a twelve-item reading list from the reading queue template"
                - "Read one item and write three lines on what to change @recurring(monthly:3)"
                - "Note each practice change the reading led to"
            - name: Weekend practice on public prediction challenges
              description: |-
                ## Purpose
                Public competitions and benchmark datasets give fast, honest feedback on technique, because a hidden test set does not care how clever the approach felt. A fixed weekly practice slot on one challenge at a time, with a write-up of what moved the score, sharpens skills you can bring back to work data.

                ## Milestones
                1. One public prediction challenge chosen with a clear tabular dataset.
                2. A first honest submission built from a simple baseline.
                3. Weekly practice sessions held for two months.
                4. A write-up of the three techniques that improved the hidden test score most.

                ## Notes
                Competition tricks such as exploiting leaky identifiers win leaderboards and fail at work. Note them, then leave them there.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Eight weekly practice sessions on one public challenge are completed, ending in a write-up of the three techniques that helped most."
                cadence: rolling
              tasks:
                - "Pick one public tabular prediction challenge to work on"
                - "Submit a simple baseline before trying anything clever"
                - "Spend a practice session on the challenge and note what moved the score @recurring(weekly:sat)"
                - "Write up the three techniques that helped most"
            - name: Survival models for time-to-event outcomes
              description: |-
                ## Purpose
                Many business outcomes are really questions of when, not whether: time until a lead converts, a machine fails or a loan defaults. Survival models use cases still waiting for their outcome instead of discarding them, and learning Kaplan Meier curves, Cox models and survival forests opens a class of problems a classifier answers badly.

                ## Milestones
                1. Kaplan Meier curves drawn for one real outcome split by a key segment.
                2. A Cox model fitted with its proportional hazards assumption checked.
                3. A survival forest or boosted survival model compared using concordance.
                4. A note on which current classification problems would be better framed as time to event.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Kaplan Meier curves, a checked Cox model and one tree-based survival model are compared on one outcome, with candidate reframings listed."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Pick one outcome where many cases are still waiting for the event"
                - "Draw Kaplan Meier curves split by one meaningful segment"
                - "Fit a Cox model and check the proportional hazards assumption"
                - "Compare a survival forest with the Cox model on concordance"
            - name: Decision threshold set from the cost matrix
              description: |-
                ## Purpose
                Scores only become decisions at a threshold, and the default of 0.5 is almost never right. Using the cost matrix and the team's capacity to pick the cut-off, then showing the expected cost curve to the decision owner, makes the trade-off between missed cases and wasted effort explicit and easy to revisit.

                ## Milestones
                1. Expected cost calculated at each candidate threshold on validation data.
                2. The capacity limit overlaid so infeasible thresholds are ruled out.
                3. A threshold agreed with the decision owner, with expected volumes per week.
                4. A trigger written for when the threshold must be revisited.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A threshold is agreed with the decision owner from an expected cost curve, with weekly volumes and a revisit trigger recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Plot expected cost against threshold using the cost matrix"
                - "Mark thresholds that would exceed the team's weekly capacity"
                - "Agree the threshold and expected weekly volume with the decision owner"
                - "Revisit the threshold against current costs and capacity @recurring(quarterly)"
            - name: Input pruning for a leaner model
              description: |-
                ## Purpose
                Models built from 300 inputs carry 300 data dependencies, each a chance for a pipeline to break or a field to change meaning. Removing inputs in groups and measuring the loss on validation folds often shows that 20 inputs keep nearly all the performance, which makes the model cheaper to run, easier to explain and slower to decay.

                ## Milestones
                1. Inputs grouped by source system and ranked by contribution.
                2. Validation performance charted as each group is removed.
                3. A reduced input set chosen within an agreed loss tolerance.
                4. Dropped sources listed so their pipelines can be retired.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A reduced model uses a documented smaller input set within an agreed performance tolerance, and dropped data sources are listed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Group inputs by source system and rank each group's contribution"
                - "Remove groups one at a time and chart validation performance"
                - "Agree how much performance loss is acceptable for a simpler model"
                - "List data sources no longer needed by the reduced model"
            - name: Champion versus challenger offline comparison
              description: |-
                ## Purpose
                Replacing the live model is justified only when the new one is better on the same data, by more than chance, and not worse for any important segment. Scoring both on an identical out-of-time sample, with bootstrapped differences and a segment table, makes the swap a decision rather than an enthusiasm.

                ## Milestones
                1. Champion and challenger scored on the same out-of-time sample.
                2. The difference in the primary metric bootstrapped with an interval.
                3. Results compared across the five segments that matter most.
                4. A recorded decision to swap, wait or drop the challenger.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison shows the metric difference with a bootstrap interval and segment results, ending in a recorded swap, wait or drop decision."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Score champion and challenger on the same out-of-time sample"
                - "Bootstrap the difference in the primary metric"
                - "Compare both models across the most important segments"
                - "Record the swap, wait or drop decision with its reason"
            - name: Interpretable or complex model decision record
              description: |-
                ## Purpose
                When a complex model beats a transparent one by a small margin, the choice is about more than the metric: explanation duties, audit effort, user trust and maintenance all weigh in. Writing the comparison down, with the margin in business terms, lets the decision owner choose knowingly instead of defaulting to whichever model scored highest.

                ## Milestones
                1. The performance gap stated in business terms, such as extra cases caught per month.
                2. Explanation, audit and maintenance needs listed for each model.
                3. Any obligation to explain individual decisions confirmed with compliance or legal colleagues.
                4. The choice and its reasons recorded and signed by the decision owner.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision record states the performance gap in business terms, the explanation obligations checked with compliance, and the owner's signed choice."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Convert the metric gap into cases caught or cost saved per month"
                - "List the explanation and audit work each model would need"
                - "Ask compliance whether individual decisions must be explainable"
                - "Record the chosen model and get the decision owner's signature"
            - name: Evaluating a vendor's predictive score
              description: |-
                ## Purpose
                Vendors sell lead scores, risk scores and propensity scores with impressive headline accuracy measured on someone else's data. Testing a vendor score on your own historical cases, against your own baseline, with the same out-of-time method you would use internally, tells you whether to buy, build or keep doing what you do.

                ## Milestones
                1. The vendor's validation method, data period and population requested in writing.
                2. The vendor score run on a sample of your historical cases with known outcomes.
                3. Results compared with your internal baseline on the same sample and metric.
                4. A buy, build or decline decision recorded with the total cost.

                ## Notes
                Start from the **Purchase decision** template. Check what customer data the trial requires you to share and clear it with your privacy lead first.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A vendor score is tested on your own historical cases against an internal baseline, ending in a recorded buy, build or decline decision with costs."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the vendor for their validation method, data period and population"
                - "Clear the data sharing needed for the trial with your privacy lead"
                - "Score a historical sample with the vendor and compare with your baseline"
                - "Record the decision using the purchase decision template"
                - "Request the vendor's latest validation results @recurring(yearly)"
            - name: AutoML trial against the hand-built model
              description: |-
                ## Purpose
                Automated machine learning tools can search more model types in an afternoon than a person tries in a month, and they can also leak, overfit and hide their choices. Running one against your hand-built model on the locked split shows whether it adds accuracy, saves time or only adds an opaque dependency.

                ## Milestones
                1. An AutoML tool run on the same training data and folds as the hand-built model.
                2. The winning pipeline's preprocessing inspected for leakage and data handling.
                3. Both models scored once on the locked test set.
                4. A note on whether AutoML belongs in the team's workflow, and where.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An AutoML run and the hand-built model are compared on the locked test set, with the AutoML pipeline inspected and a usage decision recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Run an AutoML tool on the same training data and folds"
                - "Inspect the winning pipeline's preprocessing for leakage"
                - "Score both models once on the locked test set"
                - "Write where, if anywhere, AutoML fits the team's workflow"
            - name: Prediction intervals for regression outputs
              description: |-
                ## Purpose
                Point predictions of order value or claim size mean little without a range: 420 could mean 400 to 440 or 100 to 900. Adding quantile regression or a residual-based interval to a numeric model lets planners use the range, and checking interval coverage on test data shows whether the stated uncertainty is honest.

                ## Milestones
                1. Quantile models or residual-based intervals added to one numeric model.
                2. Interval coverage measured on the test set, such as how often 80 percent intervals contain the outcome.
                3. Coverage checked by segment for groups where uncertainty differs.
                4. Intervals shown to users alongside the point prediction.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One numeric model reports intervals whose measured test coverage is within five points of the stated level overall and for the main segments."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick one numeric prediction where users need to know the range"
                - "Fit quantile models for the lower and upper bounds"
                - "Measure how often test outcomes fall inside the intervals"
                - "Show the interval next to the point prediction in the output"
            - name: Model validation report and sign-off
              description: |-
                ## Purpose
                Before anyone relies on a model, someone other than its builder should be able to read what it predicts, how it was tested and where it is weak. A validation report covering data, method, out-of-time results, calibration, segment performance, limitations and intended use, signed by a reviewer and the decision owner, is the gate between a notebook and a decision.

                ## Milestones
                1. A report covering purpose, data, target, method, test results, calibration and segment performance.
                2. Known limitations and out-of-scope uses listed plainly.
                3. An independent reviewer's comments addressed in writing.
                4. Sign-off recorded from the reviewer and the decision owner.

                ## Notes
                Keep the report under ten pages with full figures in an appendix. A model card format works well for the summary page.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A validation report with test results, calibration, segment performance and limitations is signed by an independent reviewer and the decision owner."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Outline the validation report sections and agree them with the reviewer"
                - "Run the final evaluation on the locked test set once"
                - "Write the limitations and out-of-scope uses section"
                - "Address the reviewer's comments in writing and collect both sign-offs"
            - name: Model review board presentation
              description: |-
                ## Purpose
                In larger organisations a model review board or risk committee decides whether a model may be used, and its members read quickly and ask pointed questions. Preparing a twenty-minute presentation that leads with the decision, the evidence and the limitations, with answers ready for the five likely challenges, turns approval from a cliff edge into a conversation.

                ## Milestones
                1. A slide pack of no more than ten slides drawn from the validation report.
                2. Five likely challenges listed with prepared answers.
                3. A rehearsal held with a colleague acting as a sceptical board member.
                4. The board's decision and any conditions recorded in meeting notes.

                ## Notes
                Start from the **Meeting notes** template to capture conditions, owners and dates on the day.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The model is presented to the review board, and its decision and conditions are recorded with owners and dates."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Find out who sits on the board and what they asked last time"
                - "Build a ten-slide pack from the validation report"
                - "Rehearse with a colleague playing the sceptical member"
                - "Record the decision and conditions in meeting notes"
            - name: Shadow scoring pilot before go-live
              description: |-
                ## Purpose
                Scoring live cases for four to eight weeks without anyone acting on the scores reveals problems no backtest can: inputs missing at scoring time, score distributions that differ from development and slow joins. It also produces a clean comparison between the model and the current process on the same cases.

                ## Milestones
                1. The model scoring live cases daily, with results stored but not shown to users.
                2. Live score distributions compared weekly with the development sample.
                3. Missing or late inputs at scoring time counted and fixed.
                4. A pilot summary comparing model scores with the current process once outcomes are known.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A shadow pilot of at least four weeks is completed, with weekly distribution checks, input gaps fixed and a summary against the current process."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Agree the pilot length and which cases will be scored"
                - "Store live scores where users cannot see or act on them"
                - "Compare the week's shadow score distribution with development @recurring(weekly:mon)"
                - "Write the pilot summary once the first outcomes mature"
            - name: Go-live handover pack for engineering
              description: |-
                ## Purpose
                The moment a model leaves the modeller's hands, details get lost: exact input definitions, missing value rules, the expected score distribution, the threshold. A handover pack with a scoring specification, test cases with expected outputs and a named contact gives the engineers deploying it everything they need to reproduce the scores exactly.

                ## Milestones
                1. A scoring specification listing every input, its source, transformation and missing value rule.
                2. Fifty test cases with expected scores that the production version must reproduce.
                3. The expected score distribution and threshold documented.
                4. A go-live date agreed and a named modeller on call for the first month.

                ## Notes
                Serving infrastructure, versioning and rollback belong to the deployment team. This pack is what the modeller owes them.
              priority: high
              deadlineOffsetDays: 150
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Production scores match the handover pack's fifty test cases exactly, and the specification, distribution and threshold are documented."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write the scoring specification for every input and transformation"
                - "Export fifty test cases with their expected scores"
                - "Confirm the production version reproduces all fifty test cases"
                - "Agree the go-live date and who is on call for the first month"
            - name: Post-mortem of a model that underperformed
              description: |-
                ## Purpose
                Sooner or later a model disappoints: the promised gain never shows, a risk score misses a whole segment, a key input quietly changed. A blameless post-mortem that reconstructs the timeline, separates data, method and process causes and ends with a remediation plan turns the failure into one of the most useful documents the team owns.

                ## Milestones
                1. A timeline from model build to the point the problem was found.
                2. Causes separated into data, method, validation and process.
                3. A remediation plan with owners and dates for each cause.
                4. Lessons added to the peer review checklist.

                ## Notes
                Start from the **Remediation plan** template. Keep it blameless: the aim is to find the gap the process let through.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A post-mortem with a timeline, classified causes and an owned remediation plan is written, and the review checklist is updated from it."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Gather the dates, versions and results from build to failure"
                - "Hold a blameless review with the modeller, reviewer and decision owner"
                - "Write the remediation plan from the remediation plan template"
                - "Add the lessons to the peer review checklist"
            - name: First predictive model for a spreadsheet analyst
              description: |-
                ## Purpose
                Plenty of analysts are asked to predict conversion or late payment with nothing but a spreadsheet and some SQL. Starting with one small, well-defined question, a logistic regression in a free statistics tool or spreadsheet add-in, and a proper holdout of recent cases gets a first useful model in weeks rather than waiting for a data science team.

                ## Milestones
                1. One narrow question chosen, such as which quotes will convert within 30 days.
                2. A clean table of past cases with outcomes and a handful of inputs.
                3. A logistic regression fitted on older cases and tested on the most recent ones.
                4. Results shown to the manager as a ranked list with the hit rate in the top band.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A first model tested on the most recent cases is shown to the manager as a ranked list, with its hit rate in the top band stated."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Choose one narrow yes or no question your manager cares about"
                - "Build a table of past cases with outcomes and five inputs"
                - "Fit a logistic regression on older cases and test it on recent ones"
                - "Present the ranked list and the top band's hit rate"
            - name: Inheriting an undocumented model
              description: |-
                ## Purpose
                A colleague leaves and you inherit a model that scores thousands of cases a week, with a notebook, a scheduled job and no documentation. Reconstructing what it predicts, from which data, how well it performs today and who depends on it, before changing anything, protects you and everyone downstream.

                ## Milestones
                1. The model's target, inputs and scoring schedule reconstructed from code and logs.
                2. Every consumer of its scores identified and contacted.
                3. Current performance measured on recently matured outcomes.
                4. Retrospective documentation written and the model added to the inventory.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The inherited model has written documentation, a list of consumers, a current performance figure and an inventory entry before any change is made."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Find the code, scheduled job and output table for the model"
                - "Ask the agent to summarise the notebook into a draft model description"
                - "List every report, system or team that reads the scores"
                - "Measure current performance on recently matured outcomes"
            - name: Small-sample clinical or academic prediction model
              description: |-
                ## Purpose
                Researchers building a prediction model for a paper or a clinical setting often have a few hundred cases and dozens of candidate predictors, a recipe for overfitting. Planning the sample size, limiting candidate predictors, using bootstrap internal validation and reporting against a recognised guideline such as TRIPOD makes the model publishable and honest about its limits.

                ## Milestones
                1. A minimum sample size calculated for the planned number of predictors and the outcome rate.
                2. Candidate predictors fixed from literature and expert input before outcomes are examined.
                3. Internal validation by bootstrap, with optimism-corrected discrimination and calibration.
                4. The manuscript checked against the reporting guideline checklist.

                ## Notes
                A model intended to guide care needs ethics approval, external validation and clinical governance before any use. Agree these with your supervisor or clinical lead early.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A manuscript reports a sample size justification, prespecified predictors and optimism-corrected validation, with a completed reporting guideline checklist."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Calculate the minimum sample size for your outcome rate and predictors"
                - "Fix the candidate predictor list with your supervisor before modelling"
                - "Run bootstrap internal validation and report optimism-corrected results"
                - "Complete the reporting guideline checklist for the manuscript"
            - name: Software engineer moving into predictive modelling
              description: |-
                ## Purpose
                Engineers bring testing, version control and production instincts that many modellers lack, but often skip the statistical habits: honest splits, calibration, uncertainty in metrics. A twelve-week plan that implements classic models from scratch on small datasets, then applies them to one real work problem, builds the judgement that libraries hide.

                ## Milestones
                1. A twelve-week plan covering regression, trees, boosting, validation and calibration.
                2. Logistic regression and a decision tree implemented from scratch and checked against a library.
                3. One work problem modelled end to end with a locked out-of-time test.
                4. The work reviewed by an experienced modeller, with feedback recorded.

                ## Notes
                Resist starting with neural networks. On tabular business data they rarely beat boosting, and they teach the wrong lessons first.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two models are implemented from scratch and matched to a library, and one work problem is modelled with a locked test set and reviewed."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Write a twelve-week plan with one modelling topic per week"
                - "Implement logistic regression with gradient descent and check it against a library"
                - "Rebuild one more classic algorithm from scratch on a small dataset @recurring(monthly:15)"
                - "Ask an experienced modeller to review your first work model"
            - name: Client predictive model as a consultant
              description: |-
                ## Purpose
                Consultants and freelancers building models for clients face extra risks: data access that ends with the contract, a client team that must run the model after you leave, and expectations set in a sales call. Agreeing scope, success metric, data handling and handover up front, and reporting weekly, keeps the engagement defensible.

                ## Milestones
                1. A statement of work naming the decision, the primary metric, the baseline and what is out of scope.
                2. Data access, storage and deletion terms agreed in writing.
                3. Weekly status notes sent with results against the baseline.
                4. A handover session held, with the client team able to rerun the scoring.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The client team reruns the model unaided at handover, with the statement of work, data terms and weekly status notes all on file."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Write the scope, metric and baseline into the statement of work"
                - "Agree data access, storage and deletion terms with the client"
                - "Send the client a short status note against the baseline @recurring(weekly:thu)"
                - "Run a handover session where the client team rescores a sample"
            - name: Predicting with little history at a young company
              description: |-
                ## Purpose
                Start-ups and new products want predictions before they have enough outcomes to train on, sometimes only a few dozen conversions. A transparent points-based score built from expert judgement, logged alongside outcomes from day one, gives the team something useful now and becomes the training data for a real model later.

                ## Milestones
                1. A points-based score of five to eight factors agreed with the people closest to customers.
                2. Every scored case logged with its score and, later, its outcome.
                3. The score's hit rate checked once 100 outcomes exist.
                4. A simple statistical model fitted and compared with the points score once data allows.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A points-based score is logged against outcomes from day one and compared with a fitted model once at least 100 outcomes exist."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Agree five to eight scoring factors with the sales or operations lead"
                - "Log every case's score and its eventual outcome in one table"
                - "Add the month's matured outcomes and check the score's hit rate @recurring(monthly:6)"
                - "Compare a fitted model with the points score at 100 outcomes"
            - name: Uplift modelling for targeted interventions
              description: |-
                ## Purpose
                Targeting the customers most likely to buy wastes offers on people who would have bought anyway. Uplift models predict the change an intervention causes for each case, which needs randomised treatment and control data and a different evaluation, using Qini or uplift curves rather than accuracy.

                ## Milestones
                1. A randomised treatment and control dataset from a past campaign or experiment.
                2. Two uplift approaches built, such as a two-model and a transformed outcome method.
                3. Qini curves compared with targeting by plain propensity.
                4. A targeting rule recommended with its expected incremental gain.

                ## Notes
                Without randomised data an uplift model is guesswork. If none exists, the first step is a small randomised holdout on the next campaign.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two uplift models are compared with propensity targeting on Qini curves from randomised data, ending in a targeting rule with expected incremental gain."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Find a past campaign with a randomised control group"
                - "Build a two-model uplift approach as the first benchmark"
                - "Compare Qini curves against targeting by propensity score"
                - "Recommend a targeting rule with its expected incremental gain"
            - name: Credit-style scorecard with weight of evidence bins
              description: |-
                ## Purpose
                Lending, insurance and collections teams often need scorecards: points per binned input that a reviewer can read line by line and that auditors recognise. Building one with monotonic weight of evidence bins, information value screening and a points scaling convention is a distinct craft from general machine learning.

                ## Milestones
                1. Inputs binned with monotonic weight of evidence and information value recorded.
                2. A logistic model fitted on the binned inputs and scaled to points.
                3. Score bands documented with their observed bad rates on out-of-time data.
                4. Reason code logic reviewed with compliance colleagues.

                ## Notes
                Rules on fair lending, explanation and data use differ by country. Treat this project as preparing evidence for your compliance and model risk teams, not as a legal judgement.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A points scorecard with documented bins, out-of-time band bad rates and compliance-reviewed reason codes is filed with the validation report."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Bin each candidate input with monotonic weight of evidence"
                - "Screen inputs by information value and record the cut-off used"
                - "Fit the scorecard and scale it to points with a documented convention"
                - "Review reason code logic with compliance colleagues"
            - name: Selection bias and reject inference
              description: |-
                ## Purpose
                Training only on approved applicants, contacted leads or treated patients teaches a model about a population that past decisions already filtered. Measuring how different the scored population is from the training one, and testing reject inference or a random acceptance sample, shows how far the model can be trusted on cases it never saw.

                ## Milestones
                1. The gap between the training population and the full scored population measured.
                2. Reject inference methods tested and their effect on rankings compared.
                3. The case for a small random approval or contact sample written with its costs.
                4. The model's validity limits for unseen segments documented.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written analysis measures the population gap, compares reject inference methods and states the model's limits for segments it never saw."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Compare input distributions for approved and declined cases"
                - "Test two reject inference methods and compare the resulting rankings"
                - "Cost a small random approval or contact sample for future training"
                - "Document where the model should not be trusted"
            - name: Conformal prediction for guaranteed coverage
              description: |-
                ## Purpose
                Conformal methods wrap any model and produce prediction sets or intervals with a coverage guarantee that holds under mild assumptions, without trusting the model's own probabilities. Adding split conformal prediction to one live model gives users an uncertainty statement that can be checked, and shows clearly when cases are too ambiguous to automate.

                ## Milestones
                1. Split conformal intervals or sets added to one model using a calibration sample.
                2. Empirical coverage on test data checked against the target level.
                3. Coverage checked by segment, with any shortfall noted.
                4. A rule agreed for routing cases with wide intervals or large sets to human review.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "One model reports conformal intervals or sets whose test coverage is checked overall and by segment, with a routing rule for ambiguous cases."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Set aside a calibration sample the model never trained on"
                - "Add split conformal intervals or sets to one model"
                - "Check coverage on test data overall and by segment"
                - "Agree with the decision owner where ambiguous cases go"
---

# Predictive Modelling

This area is for anyone asked to predict an outcome from past data: the researcher building a model for a paper, the engineer moving into data science and the analyst told to score leads by Friday. It starts with foundations (framing the decision, defining the target, point-in-time training data, leakage checks, splits, baselines and metrics), then the routines that keep models honest, the core skills from boosting to calibration, decisions such as thresholds and challenger models, dated events from the validation report to the go-live handover, situations like inheriting a model or modelling for a client, and finally specialist work on uplift, scorecards, selection bias and conformal prediction.

What repeats is a weekly experiment log summary, monthly inventory updates, peer reviews, matured outcome checks and override summaries, quarterly revalidation, label audits, risk register and threshold reviews, and a yearly keep, rebuild or retire review. The Metrics log, Risk register, Reading queue, Purchase decision, Meeting notes and Remediation plan templates pair with the experiment log, model risks, the reading programme, vendor score evaluation, the review board and post-mortems. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
