---
id: data-analytics.model-drift-monitoring
name: Model Drift Monitoring
description: "A register of every live model, baselines and prediction logs, drift and performance checks that reach the right person, a response runbook and the evidence to retrain, recalibrate or retire a model on time."
category: business
version: 1.0.0
tags: [data-analytics, model-drift-monitoring, engineer, researcher, data-drift, concept-drift, model-monitoring, retraining]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - operational-checklist
    - metrics-log
    - meeting-notes
    - remediation-plan
    - compliance-control
  pillars:
    - name: Data & Analytics
      emoji: "📊"
      description: "Turning data into decisions: metrics and dashboards, data pipelines and warehouses, experimentation, forecasting and modelling, machine learning, data quality and governance."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Model Drift Monitoring
          description: "Watching production models for data drift, performance decay and bias, and retraining or retiring them when they stop working."
          projects:
            - name: Production model inventory and owner register
              description: |-
                ## Purpose
                Most teams cannot say, without asking around, how many models are scoring live data today, who owns each one and what decision it feeds. Drift monitoring starts with that list, because a model nobody knows is running is the one that will quietly decay for a year. Building the register first also shows which models matter enough to watch closely and which are candidates for switching off.

                ## Milestones
                1. Every model scoring production data listed with its name, version, serving location and the decision or process it feeds.
                2. A named technical owner and a named business owner recorded against each model.
                3. Training date, training data window and last retraining date filled in for each entry.
                4. Models with no owner or an unknown purpose flagged for a decision within 30 days.

                ## Notes
                Search scheduler jobs, serving endpoints and batch scripts as well as the model registry. Models scored inside spreadsheets and scores bought from vendors count too.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A register lists every production model with version, both owners, training window and the decision it feeds, and no entry is missing an owner."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the models you already know are scoring live data, with their owners"
                - "Search schedulers, serving endpoints and the registry for models missing from the list"
                - "Ask each business owner what decision the model's output changes"
                - "Flag ownerless models and agree who decides their future"
                - "Recheck the register against serving logs for new or retired models @recurring(quarterly)"
            - name: Model tiering by business impact
              description: |-
                ## Purpose
                Not every model deserves daily checks and a pager. A model setting credit limits or clinical priorities needs far closer watching than one ordering a newsletter. Tiering models by the cost of a wrong prediction, the volume of decisions and how quickly harm would show sets how deep monitoring goes for each and where the team's limited hours are spent.

                ## Milestones
                1. Tier criteria written: cost of error, decision volume, people affected and how reversible a wrong decision is.
                2. Every model in the register assigned a tier with the reason recorded.
                3. Monitoring depth per tier defined: which checks, how often, who is alerted and how often it is reviewed.
                4. Tiers agreed with business owners and stored in the register.

                ## Notes
                Three tiers are usually enough. If more than a third of models land in the top tier, the criteria are too loose.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every registered model carries an agreed tier with a reason, and each tier has a written monitoring depth covering checks, frequency and alerting."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft four tiering criteria with one example model for each tier"
                - "Assign a tier to every model in the register"
                - "Write the checks, frequency and alerting each tier gets"
                - "Confirm the tiers with each business owner"
            - name: Reference baseline from the training window
              description: |-
                ## Purpose
                Drift only means something relative to a reference, and the usual reference is the data the model was trained and validated on. Saving that snapshot now, per feature and for the score itself, along with the holdout performance figures, gives every later alert a fixed comparison point. Teams that skip this end up comparing this month with last month and miss slow drift that has been building since launch.

                ## Milestones
                1. Summary statistics and binned distributions stored for every input feature from the training data, including missing rates.
                2. The distribution of predicted scores or classes on the validation set saved alongside them.
                3. Holdout performance recorded with the metric, the operating threshold and the evaluation date.
                4. The baseline versioned and linked to the model version it describes.

                ## Notes
                Use the same bin edges for the baseline and every later window. Recomputing bins on new data hides the very shift you are looking for.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A versioned baseline holds feature distributions, missing rates, the score distribution and holdout metrics for each tier-one model."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Locate the exact training and validation extracts for the current model version"
                - "Compute binned distributions and missing rates for every input feature"
                - "Save the validation score distribution and holdout metrics beside them"
                - "Store the baseline with the model version tag in the registry or warehouse"
            - name: Prediction and input logging at the serving point
              description: |-
                ## Purpose
                You cannot measure drift on data you never kept. Logging each scored request with its inputs as the model saw them, the output, the model version, a timestamp and a join key turns monitoring from guesswork into a query. Capturing inputs after preprocessing, at the moment of scoring, also exposes the bugs where training and serving quietly compute a feature differently.

                ## Milestones
                1. Every prediction logged with request id, timestamp, model version, model inputs and output.
                2. Logs landing in a queryable table within a day of scoring.
                3. A join key present that will later match each prediction to its real outcome.
                4. Personal data in the log reviewed and minimised with the data protection owner.
                5. Logged prediction counts reconciled with serving request counts for one full week.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A prediction log table holds inputs, outputs, version and join key for at least 99 percent of served requests over a full week."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write down which fields the serving code can log without slowing responses"
                - "Add version, timestamp, request id and join key to every logged prediction"
                - "Review the logged fields with the data protection owner"
                - "Compare logged prediction counts with serving request counts @recurring(monthly:3)"
            - name: Label delay map for each production model
              description: |-
                ## Purpose
                Ground truth arrives on very different clocks: a click within seconds, a purchase within days, a loan default after a year or more. Mapping how long each model waits for its outcomes, and how those outcomes are joined back, decides whether performance can be measured directly or has to be estimated in the meantime. It also stops people declaring a model healthy on a window where most labels have not yet matured.

                ## Milestones
                1. For each model, the outcome definition, its source system and the typical delay from prediction to label recorded.
                2. A maturity rule written per model, such as 95 percent of labels known after 60 days.
                3. A tested query joining predictions to outcomes for one past month.
                4. Models whose labels never arrive, or arrive only for some cases, identified.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each tier-one model has a recorded label source, typical delay, maturity rule and a tested prediction to outcome join."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask each model owner what outcome counts as ground truth and where it lands"
                - "Plot the delay between prediction and outcome for one past month"
                - "Write a maturity rule per model from the delay curve"
                - "Note any model where only some cases ever get a label"
            - name: Drift metric choice per feature type
              description: |-
                ## Purpose
                Picking one statistic for everything produces nonsense: a Kolmogorov-Smirnov test handles a high-cardinality category badly, and the population stability index depends on binning. Matching metrics to feature types, such as PSI or Wasserstein distance for numeric features, chi-squared or Jensen-Shannon divergence for categories and simple rate checks for missing values, keeps alerts comparable and explainable.

                ## Milestones
                1. Each monitored feature classified as numeric, low-cardinality categorical, high-cardinality categorical, text or embedding.
                2. One primary drift metric chosen per type, with the reason recorded.
                3. Treatment fixed for missing values, unseen categories and values outside the training range.
                4. The choices written into a short monitoring standard the team follows for new models.

                ## Notes
                Unseen categories are often the earliest sign of an upstream change. Track their share separately rather than folding them into an other bucket.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written monitoring standard assigns a drift metric to each feature type and defines how missing, unseen and out-of-range values are handled."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Classify the features of one tier-one model by type and cardinality"
                - "Compute two candidate metrics per type on a known shifted month and compare"
                - "Decide how unseen categories and out-of-range values are counted"
                - "Write the chosen metrics into a one-page monitoring standard"
            - name: Drift alert thresholds and severity levels
              description: |-
                ## Purpose
                Thresholds copied from a blog post, such as PSI above 0.2, fire constantly on large tables and almost never on small ones. Setting thresholds from the model's own history, separating a warning that goes to a channel from a page that wakes someone, and tying severity to feature importance gives alerts people will act on rather than mute.

                ## Milestones
                1. Twelve months of past windows scored with the chosen metrics to show normal variation.
                2. Warning and critical thresholds set per tier, with the evidence attached.
                3. Severity raised for drift on the most important features and on the score itself.
                4. Each severity mapped to a channel, a responder and a response time.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written thresholds per model tier, derived from historical variation, map each severity level to a named channel, responder and response time."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Score past monthly windows against the baseline to see normal variation"
                - "Set warning and critical levels that past known incidents would have crossed"
                - "Agree which severity pages someone and which only posts to a channel"
                - "Record the thresholds and the evidence for them in the monitoring standard"
            - name: Monitoring platform decision, build or buy
              description: |-
                ## Purpose
                Teams with a handful of models can often run drift checks as scheduled SQL and a notebook, while teams with dozens of models, streaming inputs or unstructured data usually outgrow that. Comparing an in-house build on the warehouse with open-source libraries and commercial monitoring platforms, on cost, effort, data residency and what your models actually need, avoids a three-year contract chosen from a demo.

                ## Milestones
                1. Requirements written: number of models, data volumes, label delays, data types, alert routing and data residency.
                2. Three options compared, including a warehouse-native build and at least one open-source library.
                3. A two-week trial run on one real model for the leading option.
                4. A decision recorded with total cost over three years and an exit plan.

                ## Notes
                Start from the **Purchase decision** template. Check whether a platform needs raw inputs to leave your environment, and what that means for personal data.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision compares three monitoring options on cost, effort and residency, backed by a two-week trial on one real production model."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List the requirements your current and next-year models will place on monitoring"
                - "Shortlist a warehouse build, an open-source library and a commercial platform"
                - "Trial the leading option on one tier-one model for two weeks"
                - "Write up the decision with three-year cost and an exit plan"
            - name: One-page health view for each model
              description: |-
                ## Purpose
                Scattered drift numbers in logs, notebooks and alert channels never add up to a picture of whether a model is fine. One page per model showing volume, score distribution, top feature drift, latest matured performance and open incidents lets an owner answer that question in a minute and gives every review the same starting point.

                ## Milestones
                1. A page per tier-one model with prediction volume, score distribution and top drifting features over 90 days.
                2. Latest matured performance shown against the baseline and the agreed floor.
                3. Open drift incidents and the last retraining date visible on the same page.
                4. Each page linked from the model's register entry.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each tier-one model has one page showing volume, score drift, top feature drift, matured performance and open incidents, linked from the register."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Sketch the five numbers an owner needs to judge one model's health"
                - "Build the page for the most important model first"
                - "Add matured performance against the baseline and the floor"
                - "Link each page from the model register"
            - name: Drift response runbook
              description: |-
                ## Purpose
                At 2am an alert that says feature drift detected is useless without the next step. A runbook that walks the responder from alert to cause, checking pipelines and upstream releases first, then real-world change, and ends in a recorded decision to hold, recalibrate, retrain, fall back or roll back makes the response the same whoever is on call.

                ## Milestones
                1. A triage sequence written: confirm the data is real, check upstream changes, check volume, then judge impact.
                2. A table mapping common causes to actions, including the fallback rule for each tier-one model.
                3. A contact list for upstream data owners and the business owner of each tier-one model.
                4. The runbook tested on one past incident by someone who did not write it.

                ## Notes
                Start from the **Operational checklist** template. Most drift alerts turn out to be pipeline or tracking changes rather than the world changing, so check those first.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A tested runbook takes a responder from drift alert to a recorded hold, recalibrate, retrain, fallback or rollback decision."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the first three checks a responder should run on any drift alert"
                - "List the causes seen so far and the action each one needed"
                - "Add contacts for upstream data owners and business owners"
                - "Have a colleague walk a past incident through the runbook"
                - "Review the runbook against the year's drift incidents @recurring(yearly)"
            - name: Retraining and retirement criteria per model
              description: |-
                ## Purpose
                Retraining on a fixed schedule wastes compute when nothing has changed and arrives too late when something has. Writing down, per model, the performance floor, the drift level and the business events that trigger retraining, and the conditions under which the model is retired in favour of a simple rule, turns those calls from opinion into a checklist agreed in advance with the business owner.

                ## Milestones
                1. A performance floor agreed with the business owner for each tier-one model.
                2. Drift and event triggers for retraining written, such as a pricing change or a new market launch.
                3. Retirement conditions recorded, including what replaces the model.
                4. The criteria stored with the model's register entry and dated.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Each tier-one model has signed-off retraining triggers, a performance floor and retirement conditions with a named fallback."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the business owner what accuracy still makes the model worth using"
                - "List the business events that would make the training data unrepresentative"
                - "Write the retirement conditions and the fallback rule"
                - "Attach the signed-off criteria to the register entry"
            - name: Daily tier-one drift triage
              description: |-
                ## Purpose
                Overnight batch scores and daily drift reports only help if someone reads them before the scores are used. A short daily look at tier-one models, with a rota so it never depends on one person, catches broken inputs on the morning they appear rather than when a customer complains.

                ## Milestones
                1. A rota naming who reads the tier-one drift summary each working day.
                2. A ten-minute triage routine covering volume, missing rates, score distribution and critical alerts.
                3. Every critical finding logged with an owner the same day.
                4. A month of daily checks completed without gaps.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The tier-one drift summary is read every working day for a month, with each critical finding logged and owned the same day."
                cadence: rolling
              tasks:
                - "Agree the rota for the daily drift read with the team"
                - "Write the ten-minute triage routine at the top of the summary"
                - "Read the tier-one drift summary before the day's scores are used @recurring(daily)"
                - "Log any critical finding with an owner before midday"
            - name: Weekly feature drift review
              description: |-
                ## Purpose
                Some drift is too gradual to trip a daily threshold but obvious across weeks: a slowly ageing customer base, a marketing channel growing its share, a sensor wearing out. A weekly review of feature drift trends, top movers first, catches that creep and decides whether it matters before it reaches performance.

                ## Milestones
                1. A weekly view ranking features by drift, weighted by importance.
                2. Each top mover explained as a data issue, a real change or noise.
                3. Real changes passed to the model owner with a view on likely impact.
                4. Explanations kept so recurring patterns are recognised next time.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly review explains the top five drifting features per tier-one model and records a cause for each, every week for a quarter."
                cadence: rolling
              tasks:
                - "Build the importance-weighted list of drifting features for each model"
                - "Review the top five drifting features with the model owner @recurring(weekly:tue)"
                - "Record a cause for each mover: data issue, real change or noise"
                - "Pass real changes and their likely impact to the model owner"
            - name: Monthly matured performance review
              description: |-
                ## Purpose
                Feature drift is a warning; performance on real outcomes is the verdict. Once labels for a window have matured, scoring the model on them with the same metric and threshold as the baseline shows whether drift actually hurt, and builds the time series that every retraining decision rests on.

                ## Milestones
                1. Performance on each newly matured window computed with the baseline metric and threshold.
                2. Results logged in a running series against the baseline and the floor.
                3. Any drop beyond the agreed tolerance raised with the owner within a week.
                4. Business measures, such as approved volume or prevented losses, reported beside the model metric.

                ## Notes
                Start from the **Metrics log** template. Compare like with like: a window with only part of its labels matured will look better or worse than it really is.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Matured performance for each tier-one model is logged monthly against baseline and floor, with any breach raised within a week."
                cadence: rolling
              tasks:
                - "Set up the metrics log with the baseline and floor for each model"
                - "Score the latest fully matured window and add it to the log @recurring(monthly:9)"
                - "Raise any drop beyond tolerance with the model owner"
                - "Add the matching business measure beside each model metric"
            - name: Score distribution and calibration watch
              description: |-
                ## Purpose
                A model can keep its ranking ability while its probabilities drift away from reality, so a 0.3 that used to mean three in ten now means one in ten. Watching the predicted score distribution and comparing average prediction with observed rate by band catches the calibration drift that breaks thresholds, pricing and capacity plans even when AUC looks fine.

                ## Milestones
                1. The monthly score distribution compared with the baseline.
                2. Mean predicted rate and observed rate compared by score decile on matured data.
                3. The share of cases above the operating threshold tracked against what downstream teams can handle.
                4. Recalibration proposed whenever observed and predicted rates diverge beyond the agreed band.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly checks compare predicted and observed rates by decile for each tier-one classifier and flag any band outside tolerance for recalibration."
                cadence: rolling
              tasks:
                - "Plot the current score distribution over the baseline"
                - "Compare predicted and observed rates by decile on the matured window @recurring(monthly:16)"
                - "Track how many cases now sit above the operating threshold"
                - "Propose recalibration when any decile breaches the band"
            - name: Upstream change watch with data producers
              description: |-
                ## Purpose
                Many drift incidents begin with an ordinary release somewhere else: an app update renames an event, a form makes a field optional, a supplier adds a product category. Agreeing with the teams who produce model inputs that they flag such changes, and scanning their release notes weekly, turns surprise drift into planned work.

                ## Milestones
                1. Producers of every tier-one model input identified and contacted.
                2. An agreed channel for producers to flag schema, tracking or business rule changes.
                3. A weekly scan of release notes and change tickets for inputs that feed models.
                4. Upcoming changes logged with the models they touch and the action planned.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Producers of all tier-one model inputs use an agreed channel to flag changes, and each flagged change has a logged model impact and action."
                cadence: rolling
              tasks:
                - "Map each tier-one model input to the team that produces it"
                - "Agree with each producer how they will flag schema or tracking changes"
                - "Scan release notes and change tickets for model inputs @recurring(weekly:thu)"
                - "Log each upcoming change with the affected models and planned action"
            - name: Performance slices by business segment
              description: |-
                ## Purpose
                An overall accuracy that holds steady can hide a model failing badly for new customers, one region or the mobile channel, because a growing segment the model handles well masks one it handles badly. Tracking performance and drift across a small set of agreed slices shows where decay starts and who it hits first.

                ## Milestones
                1. Five to eight business slices agreed with the owner, such as region, channel, tenure and product line.
                2. Matured performance and drift reported per slice each month.
                3. Slices with too few cases for reliable metrics marked as such rather than reported.
                4. Any slice falling below the floor raised even when the overall metric is fine.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly slice reports cover at least five agreed segments, and any slice below the floor is raised regardless of the overall figure."
                cadence: rolling
              tasks:
                - "Agree five to eight slices with the business owner"
                - "Set a minimum case count below which a slice is not scored"
                - "Report matured performance and drift for each slice @recurring(monthly:23)"
                - "Raise slices below the floor with the owner"
            - name: Alert noise and threshold tuning
              description: |-
                ## Purpose
                Alerts that fire every week and lead to nothing train people to ignore the one that matters. Reviewing each alert from the last month, marking it as useful, noise or late, and adjusting thresholds and grouping accordingly, keeps the signal worth reading and shows whether monitoring is getting better or worse.

                ## Milestones
                1. Every alert from the month labelled useful, noise or late.
                2. The share of useful alerts tracked month on month.
                3. Thresholds or grouping changed for the noisiest rules, with each change recorded.
                4. Incidents found without an alert added as missed-detection cases.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least half of drift alerts are judged useful for three consecutive months, with every threshold change recorded."
                cadence: rolling
              tasks:
                - "Export last month's drift alerts with what happened after each"
                - "Label each alert as useful, noise or late @recurring(monthly:4)"
                - "Change the thresholds or grouping on the three noisiest rules"
                - "Record every threshold change and its reason in the monitoring standard"
            - name: Drift incident log and root-cause reviews
              description: |-
                ## Purpose
                Without records, every drift incident is treated as new and the same broken join or seasonal swing surprises the team twice a year. Logging each incident with detection time, cause, impact and fix, and reviewing the serious ones properly, builds the evidence that improves thresholds, runbooks and upstream agreements.

                ## Milestones
                1. An incident log with detection date, model, cause category, business impact, fix and time to resolve.
                2. A written review for each incident that changed decisions or cost money.
                3. Cause categories counted each month to show where incidents come from.
                4. Follow-up actions owned and tracked to completion.

                ## Notes
                Start from the **Remediation plan** template for the serious incidents. Keep reviews blameless; the aim is the fix, not the culprit.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every drift incident is logged with cause and impact, and each serious one has a written review with owned follow-up actions."
                cadence: rolling
              tasks:
                - "Create the incident log with cause categories agreed with the team"
                - "Backfill the incidents you remember from the last year"
                - "Count incidents by cause and chase stale follow-ups @recurring(monthly:28)"
                - "Write a review for each incident that changed decisions or cost money"
            - name: Champion and challenger comparison on fresh data
              description: |-
                ## Purpose
                Fresh training does not guarantee a better model; a challenger trained on a shifted month can be worse on the cases that matter most. Scoring the current model and a newly trained challenger on the same recent matured window, overall and by slice, gives an evidence-based promotion decision instead of shipping whatever the last run produced.

                ## Milestones
                1. A challenger trained on the most recent data window for each tier-one model.
                2. Champion and challenger scored on the same matured holdout, overall and by slice.
                3. A promotion rule written: how much better, on which metric, with no slice worse than the agreed margin.
                4. Every comparison and promotion decision recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Each promotion decision rests on a recorded champion versus challenger comparison on the same matured window, overall and by slice."
                cadence: cyclic
              tasks:
                - "Write the promotion rule with the model owner"
                - "Train a challenger on the latest data window"
                - "Compare challenger against champion on the latest matured window @recurring(monthly:12)"
                - "Record the comparison and the promotion decision"
            - name: Quarterly model health review
              description: |-
                ## Purpose
                Daily and monthly checks catch incidents, but they rarely ask whether a model should still exist. A quarterly review with each tier-one model's technical and business owners looks at the trend in performance, drift and incidents, the cost of running it and whether the decision it supports has changed, and ends with a recorded keep, retrain, rebuild or retire.

                ## Milestones
                1. A standard review pack per model: performance trend, drift trend, incidents, running cost and usage.
                2. The review held with both owners for every tier-one model.
                3. A keep, retrain, rebuild or retire decision recorded for each.
                4. Actions from the previous quarter closed or carried forward with a reason.

                ## Notes
                Start from the **Meeting notes** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each tier-one model has a recorded keep, retrain, rebuild or retire decision from a quarterly review attended by both owners."
                cadence: cyclic
              tasks:
                - "Draft the standard review pack layout for one model"
                - "Ask the agent to summarise the quarter's incidents and drift trends per model"
                - "Hold the health review with each model's owners @recurring(quarterly)"
                - "Record the decision and carry open actions forward"
            - name: Covariate, prior and concept drift on your own data
              description: |-
                ## Purpose
                Drift is not one thing. Inputs can shift while their relationship to the outcome holds, the outcome rate can change on its own, or the same inputs can start meaning something different, and each calls for a different response. Working through the three kinds with examples from your own models makes alerts easier to interpret and retraining decisions easier to defend.

                ## Milestones
                1. Short written definitions of covariate shift, prior probability shift and concept drift, each with an example from your models.
                2. One past incident classified by drift type, with the evidence.
                3. A note on which monitoring signals detect each type and which cannot.
                4. A thirty-minute explainer given to the team.

                ## Notes
                Concept drift cannot be seen from inputs alone. If labels are slow, say so plainly when someone asks whether a model is still accurate.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A team explainer classifies at least two real incidents as covariate, prior or concept drift and states which signals detect each."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read one survey paper or textbook chapter on dataset shift"
                - "Classify one past incident by drift type with evidence"
                - "Note which of your monitors can and cannot see each type"
                - "Give a thirty-minute explainer to the team"
            - name: Population stability index worked by hand
              description: |-
                ## Purpose
                PSI is the most quoted drift number in industry and one of the least understood: its value changes with the number of bins, empty bins and sample size. Computing it by hand in a spreadsheet for one feature, then breaking it on purpose, shows exactly when a 0.25 reflects a real shift and when it is an artefact of the method.

                ## Milestones
                1. PSI computed by hand for one feature and matched to the monitoring tool's figure.
                2. The effect of 5, 10 and 20 bins shown on the same data.
                3. Handling of empty bins and small samples demonstrated with a worked example.
                4. A one-page note on reading PSI added to the monitoring standard.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A worked spreadsheet reproduces the tool's PSI for one feature and shows how bin count and empty bins change the result."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Export baseline and current values for one numeric feature"
                - "Compute PSI by hand and compare it with the tool's figure"
                - "Recompute with 5, 10 and 20 bins and note the change"
                - "Write a one-page note on reading PSI for the team"
            - name: Why two-sample tests over-alert at scale
              description: |-
                ## Purpose
                With a million rows, a Kolmogorov-Smirnov or chi-squared test will call almost any difference significant, so p-value alerts fire daily on changes too small to matter. Learning to pair tests with effect sizes, to subsample deliberately and to correct for testing hundreds of features at once turns statistical tests back into useful evidence.

                ## Milestones
                1. A demonstration on your data that p-values shrink with sample size for a fixed small shift.
                2. An effect size chosen to sit beside each test in alerts.
                3. A multiple-testing approach, such as false discovery rate control, chosen for models with many features.
                4. Alert rules updated so significance alone never pages anyone.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Alert rules require an effect size threshold beside any test result, and a multiple-testing correction is documented for models with many features."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Run a KS test on one feature at sample sizes of 1,000, 100,000 and 1,000,000"
                - "Pick an effect size to report beside each test"
                - "Choose a multiple-testing correction for models with many features"
                - "Update the alert rules so no alert fires on significance alone"
            - name: Performance estimation before labels arrive
              description: |-
                ## Purpose
                For a credit or churn model the true outcome may be months away, yet the business wants to know now whether accuracy has fallen. Methods such as confidence-based performance estimation for calibrated classifiers and direct loss estimation for regression can estimate performance from predictions alone, under assumptions you need to understand before trusting them.

                ## Milestones
                1. The assumptions behind label-free performance estimation written in plain language, including when they fail.
                2. Estimated performance computed for three past months and compared with the matured actuals.
                3. A decision on whether estimates are good enough to show on the health page, with caveats.
                4. Estimates labelled clearly as estimates wherever they appear.

                ## Notes
                These methods assume the relationship between inputs and outcomes has not changed. Under concept drift, estimates can look healthy while the model fails.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Label-free estimates for one model are back-tested against matured outcomes for at least three past months, with the estimation error recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Read the documentation of one open-source performance estimation library"
                - "Estimate performance for three past months using predictions alone"
                - "Compare the estimates with the matured actuals"
                - "Decide whether to show estimates on the health page and with which caveats"
            - name: Seasonal and calendar effects in drift baselines
              description: |-
                ## Purpose
                December data will always look drifted against a training window that ended in September, and an alert that fires every holiday season teaches nobody anything. Learning to compare like periods, to model expected seasonal movement and to flag calendar effects such as paydays and public holidays separates expected change from the kind that needs action.

                ## Milestones
                1. Seasonal patterns identified for the top features of each tier-one model from two years of history.
                2. A method chosen: same period last year as reference, seasonal adjustment or expected-range bands.
                3. Known calendar events, such as holidays and paydays, listed with their usual effect.
                4. Alerts for one model rebuilt on the seasonal reference and compared with the old ones.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One tier-one model alerts against a seasonal reference, with a documented comparison showing fewer false alerts in known seasonal periods."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Plot two years of the top five features by week for one model"
                - "List the calendar events that move those features each year"
                - "Choose a seasonal reference method and write down why"
                - "Rerun last year's alerts on the seasonal reference and compare"
            - name: Multivariate drift with domain classifiers
              description: |-
                ## Purpose
                Each feature can look stable on its own while the combination shifts, such as young customers suddenly arriving through a channel that used to bring older ones. Training a classifier to tell reference rows from current rows, or tracking reconstruction error from a compressed representation, catches joint shifts that per-feature checks miss and points to the features driving them.

                ## Milestones
                1. A domain classifier trained to separate baseline from current data for one model.
                2. Its AUC tracked as a single multivariate drift score, with 0.5 meaning no detectable shift.
                3. Feature importances from the classifier used to name the drivers of any shift.
                4. A decision on whether to add the score to the health page.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A domain classifier drift score for one model is computed on six past months, and its top drivers are explained for any month above threshold."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Combine baseline and current rows with a label for which window each came from"
                - "Train a simple classifier to separate the two and record its AUC"
                - "List the features the classifier relies on most"
                - "Repeat on six past months and decide whether to keep the score"
            - name: Sequential change detection with CUSUM and ADWIN
              description: |-
                ## Purpose
                Fixed monthly windows detect a change weeks after it starts. Sequential methods such as CUSUM, Page-Hinkley and ADWIN watch a stream of errors or statistics and signal as soon as the evidence is strong enough, at the cost of tuning for false alarms. Learning them on a replay of your own data shows whether faster detection is worth it for streaming or high-volume models.

                ## Milestones
                1. CUSUM and one adaptive window method run on a replay of a past incident.
                2. Detection delay compared with the current monthly check.
                3. The false alarm rate measured on a quiet period.
                4. A recommendation on which models, if any, should use sequential detection.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A replay of one past incident records detection delay and false alarms for two sequential methods against the current monthly check."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Pick a past incident with daily data available for replay"
                - "Run CUSUM on the daily error or drift statistic"
                - "Run one adaptive window method on the same replay"
                - "Compare detection delay and false alarms with the monthly check"
            - name: Explaining drift through attribution shift
              description: |-
                ## Purpose
                Knowing that twenty features drifted does not say which drift moved the predictions. Tracking how feature attributions, such as SHAP values, are distributed over time shows which inputs are now driving scores differently, and tells the responder where to look first.

                ## Milestones
                1. Attributions computed on a sample of baseline predictions and stored.
                2. The same computed monthly on a sample of production predictions.
                3. Change in mean absolute attribution per feature reported alongside input drift.
                4. One past incident explained using attribution shift.

                ## Notes
                Attributions describe the model, not the world. A stable attribution profile does not prove the model is still right.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Monthly attribution shift is reported for one tier-one model, and one past incident is explained using it."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Compute attributions on a sample of baseline predictions"
                - "Compute them on a sample of last month's production predictions"
                - "Rank features by change in mean absolute attribution"
                - "Use the ranking to explain one past incident"
            - name: Feature watch list ranked by importance
              description: |-
                ## Purpose
                Monitoring all 400 features of a model with equal weight buries the five that drive most of its predictions. Ranking features by importance and by how fragile their source is, then giving the top of the list tighter thresholds, puts attention where drift can actually move the score.

                ## Milestones
                1. Features ranked by importance from the trained model.
                2. Each top feature's source rated for fragility: manual entry, third-party feed, derived field or stable system field.
                3. A watch list of the top 10 to 20 features with tighter thresholds applied.
                4. A watch list refresh added to the steps after each retraining.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each tier-one model has a watch list of 10 to 20 features ranked by importance and source fragility, with tighter thresholds applied."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Export feature importances for the current model version"
                - "Rate each top feature's source for fragility"
                - "Set tighter thresholds on the top 10 to 20 features"
                - "Add a watch list refresh step to the retraining checklist"
            - name: Rolling versus fixed reference windows
              description: |-
                ## Purpose
                A fixed training baseline catches slow drift but alarms forever once the world has moved, while a rolling window of recent data is quieter but can drift along with the problem. Choosing deliberately, often both, with a fixed reference for long drift and a rolling one for sudden change, sets what each alert actually means.

                ## Milestones
                1. Both reference types computed for one model over twelve months.
                2. Known incidents checked against each to see which caught them.
                3. A reference policy written per tier, including when the fixed baseline is reset.
                4. Alert messages updated to name which reference they compare against.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written reference policy states which window each alert compares against and when the fixed baseline is reset, tested on twelve months of history."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Compute drift for one model against both a fixed and a rolling reference"
                - "Check which reference caught each known incident"
                - "Write the reference policy, including baseline reset after retraining"
                - "Update alert text to name the reference used"
            - name: Proxy signals while labels are delayed
              description: |-
                ## Purpose
                Waiting six months for defaults or a year for renewals leaves a long blind spot. Early proxies, such as a first missed payment, a support ticket in week one or 30-day activity, can stand in for the final outcome if their link to it has been checked. Choosing proxies carefully shortens the time to spot decay without fooling anyone.

                ## Milestones
                1. Candidate early signals listed for each slow-label model.
                2. The link between each proxy and the final outcome measured on past cohorts.
                3. One or two proxies chosen per model, with the strength of their link stated.
                4. Proxy-based performance tracked monthly and labelled as provisional.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each slow-label tier-one model has at least one proxy whose link to the final outcome is measured on past cohorts and reported as provisional."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List early signals that arrive within 30 days for each slow-label model"
                - "Measure how well each signal predicts the final outcome on past cohorts"
                - "Choose one or two proxies per model and record their strength"
                - "Add provisional proxy performance to the health page"
            - name: Retrain, recalibrate or roll back decision tree
              description: |-
                ## Purpose
                Under pressure, teams often retrain by reflex when a recalibration or a fix to a broken pipeline would be faster and safer. A one-page decision tree that starts from the type of drift, the label situation and the size of the performance drop points to the cheapest response that works and records why it was chosen.

                ## Milestones
                1. Branches written for data errors, covariate shift, prior shift, concept drift and unknown cause.
                2. Each branch ending in an action: fix upstream, recalibrate, retrain, fall back, roll back or hold.
                3. The tree tested on three past incidents.
                4. The tree linked from the drift response runbook.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A tested decision tree maps five drift situations to responses and gives the recorded answer for three past incidents."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Sketch the first branch: data error or real change"
                - "Add branches for each drift type and for missing labels"
                - "Test the tree against three past incidents"
                - "Link the tree from the drift response runbook"
            - name: Business cost of model decay estimate
              description: |-
                ## Purpose
                Telling a manager that AUC fell from 0.81 to 0.77 rarely gets a retraining sprint funded. Translating performance drops into business terms, such as extra fraud losses, wasted outreach calls or missed sales per month, makes decay visible in the units owners care about and sets how much monitoring effort each model is worth.

                ## Milestones
                1. The link between model metric and business outcome described for each tier-one model.
                2. The cost of a one-point performance drop estimated with the business owner.
                3. The cost of the last year's decay calculated in those terms.
                4. Business cost shown on each health page next to the model metric.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each tier-one model has an agreed estimate of the monthly business cost of a one-point performance drop, shown on its health page."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask each business owner what a wrong prediction costs in their process"
                - "Estimate the monthly cost of a one-point drop in the main metric"
                - "Calculate what last year's decay cost in those terms"
                - "Add the cost figure to each health page"
            - name: Backtest of drift alerts against past incidents
              description: |-
                ## Purpose
                Nobody knows whether the current alert set would have caught last year's problems until it is replayed. Running the monitors over twelve months of history and marking which incidents they would have flagged, how early, and what they would have fired on wrongly gives a measured detection rate to improve on.

                ## Milestones
                1. Twelve months of logged inputs and predictions replayed through the current monitors.
                2. Each known incident marked as detected, late or missed, with the lead time.
                3. False alerts during quiet periods counted.
                4. Gaps turned into new checks or threshold changes.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A replay of twelve months records detection rate, lead time and false alerts for the current monitors, with every gap assigned as an action."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Gather the incident list and the logs for the last twelve months"
                - "Replay the logs through the current drift checks"
                - "Mark each incident as detected, late or missed"
                - "Turn each missed incident into a new check or threshold change"
            - name: Retiring a decayed model with a fallback rule
              description: |-
                ## Purpose
                Some models stop earning their place: the product changed, the signal faded, or a simple rule now does as well. Retiring one deliberately, by proving the fallback performs acceptably, telling the people who rely on it, switching it off and archiving its documentation, is cleaner than leaving it scoring into a table nobody reads.

                ## Milestones
                1. A retirement candidate chosen from the register, with the evidence.
                2. The fallback rule or simpler model compared on the same matured window.
                3. Every consumer of the score told, with a switch-off date.
                4. Scoring stopped, downstream jobs removed and documentation archived with the reason.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "One decayed model is switched off, its fallback is shown to perform within the agreed margin, and its retirement is recorded in the register."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Pick the model in the register that sits furthest below its floor"
                - "Compare a simple rule or baseline on the same matured window"
                - "Tell every consumer of the score the switch-off date"
                - "Stop scoring, remove downstream jobs and archive the record"
            - name: First 30 days after a model goes live
              description: |-
                ## Purpose
                The weeks after launch are when training and serving differences, unexpected traffic and edge cases show up, and when the business is deciding whether to trust the model. A planned watch period, with daily checks, an early comparison of live and validation score distributions and a review at day 30, catches launch problems before they become reputation problems.

                ## Milestones
                1. Daily checks of volume, missing rates and score distribution for the first two weeks.
                2. The live score distribution compared with the validation distribution at day 7.
                3. First matured or proxy performance reviewed with the owner.
                4. A day-30 review recorded with the decision to move to normal monitoring.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A day-30 review records launch drift, early performance and any issues for the new model, and moves it to normal monitoring or back for fixes."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write the daily launch checks before the model goes live"
                - "Compare live and validation score distributions on day seven"
                - "Review early performance or proxies with the owner at day 21"
                - "Hold the day-30 review and record the decision"
            - name: Monitoring through an upstream system migration
              description: |-
                ## Purpose
                Moving to a new CRM, a rebuilt app or a replacement data supplier is one of the most common causes of sudden drift, because field meanings, defaults and timing change even when column names stay the same. Planning a parallel period, comparing old and new inputs feature by feature and holding model changes until the inputs match keeps the model honest through the switch.

                ## Milestones
                1. Every model input affected by the migration listed with its old and new source.
                2. A parallel period where both sources are captured and compared feature by feature.
                3. Differences fixed or documented before the old source is switched off.
                4. Drift and performance checked closely for four weeks after cutover.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Each affected input is compared across old and new sources during a parallel run, and four weeks of post-cutover checks show no unexplained drift."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List every model input that the migration will touch"
                - "Agree a parallel period with the migration team"
                - "Compare old and new values feature by feature"
                - "Watch drift and performance daily for four weeks after cutover"
            - name: Seasonal peak readiness for production models
              description: |-
                ## Purpose
                Peak weeks such as a retail holiday season, a tax deadline or summer travel bring traffic and behaviour the model may never have seen in volume, exactly when mistakes cost most. Reviewing last year's peak, agreeing temporary thresholds and fallback rules, and staffing the monitoring rota beforehand turns the peak from a gamble into a planned event.

                ## Milestones
                1. Last year's peak reviewed for drift, performance and incidents.
                2. Temporary thresholds and fallback rules agreed for the peak window.
                3. The monitoring rota staffed for the peak, with escalation contacts.
                4. A post-peak review written within two weeks of the peak ending.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Before each peak, temporary thresholds, fallback rules and a staffed rota are in place, and a post-peak review is written within two weeks."
                cadence: cyclic
              tasks:
                - "Pull last year's peak drift, performance and incident records"
                - "Agree temporary thresholds and fallbacks with the business owners"
                - "Staff the monitoring rota for the peak window"
                - "Start peak preparation six weeks before the busiest period @recurring(yearly)"
            - name: Drift game day with injected faults
              description: |-
                ## Purpose
                Alerts and runbooks that have never been exercised fail in surprising ways: a muted channel, a dashboard that times out, a responder who cannot reach the owner. Injecting realistic faults into a copy of production inputs, such as a renamed category, a null-filled column or a shifted distribution, and timing the team's response tests the whole chain end to end.

                ## Milestones
                1. Four realistic fault scenarios written and approved.
                2. Faults injected into a staging copy, never into live scoring.
                3. Time to detect and time to decide recorded for each scenario.
                4. Fixes to alerts, runbook or access made and rechecked.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A game day runs four injected drift scenarios in staging, records detection and decision times, and closes every fix it finds."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write four fault scenarios based on real past incidents"
                - "Set up a staging copy of tier-one inputs to inject faults into"
                - "Run the game day and time each detection and decision"
                - "Fix each gap found and recheck it"
            - name: Annual model revalidation pack
              description: |-
                ## Purpose
                Once a year each tier-one model deserves a proper look beyond the monthly numbers: is the training data still representative, do its assumptions still hold, has the decision it supports changed. A standard revalidation pack, reviewed by someone who did not build the model, gives auditors, risk teams and future owners one place to see why the model is still trusted.

                ## Milestones
                1. A pack template covering purpose, data, performance history, drift history, incidents, limitations and changes.
                2. The pack completed for each tier-one model.
                3. An independent reviewer's findings recorded.
                4. Sign-off or conditions agreed with the business owner.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Each tier-one model has a revalidation pack reviewed by someone independent of its build and signed off by the business owner within the year."
                cadence: cyclic
              tasks:
                - "Draft the pack template with the risk or audit contact"
                - "Ask the agent to draft the drift and incident history section from the logs"
                - "Arrange an independent reviewer for each tier-one model"
                - "Start the revalidation cycle for each tier-one model @recurring(yearly)"
            - name: Lightweight monitoring for a solo data scientist
              description: |-
                ## Purpose
                Working alone in a small company, a data scientist rarely has a platform team, a budget or an on-call rota, yet the churn or demand model they built is now steering real decisions. A scheduled notebook or SQL job that writes a weekly drift and performance summary, plus a short Friday read, covers most of the risk in a few hours a month.

                ## Milestones
                1. One scheduled job computing input drift, score distribution and matured performance for each model.
                2. Results written to a single table and a one-page summary.
                3. A message sent automatically when any check crosses its threshold.
                4. The weekly fifteen-minute read kept for a month.

                ## Notes
                Resist building a platform. Three checks you read every week beat thirty you never open.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A scheduled job produces a weekly drift and performance summary for every model, and the weekly read is kept for four consecutive weeks."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the models you run and the one number that would worry you for each"
                - "Write one scheduled query or notebook that computes the checks"
                - "Send yourself a message when any check crosses its threshold"
                - "Read the weekly drift summary before the week ends @recurring(weekly:fri)"
            - name: Taking over an orphaned production model
              description: |-
                ## Purpose
                Inheriting a model whose author has left, with no documentation, no baseline and an unclear purpose, is common and risky. Reconstructing what it does, what it was trained on and how it has performed since launch, before changing anything, avoids breaking something the business quietly depends on.

                ## Milestones
                1. Code, model artefact, training data location and serving path found.
                2. The decision the model feeds confirmed with its business users.
                3. A retrospective baseline rebuilt from the training data or the earliest logged predictions.
                4. Performance since launch estimated on matured outcomes.
                5. A keep, fix or retire recommendation written.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An inherited model has a reconstructed record of purpose, training data, baseline and performance since launch, with a written recommendation."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Find the code, artefact and serving path for the inherited model"
                - "Ask the score's users what decision it changes for them"
                - "Rebuild a baseline from the training data or earliest predictions"
                - "Write a keep, fix or retire recommendation"
            - name: Monitoring specification for a research model handover
              description: |-
                ## Purpose
                Researchers who build a model know best which features are fragile, which segments are thin and which assumptions might break, but that knowledge is often lost at handover to engineering. A written monitoring specification delivered with the model passes on the baseline, the expected drift, proposed thresholds and the signs that it needs retraining.

                ## Milestones
                1. Baseline statistics and holdout performance attached to the handover.
                2. Fragile features, thin segments and known limitations listed.
                3. Proposed thresholds, label source and maturity rule written.
                4. The engineering owner confirms the monitors are live before the researcher moves on.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A monitoring specification covering baseline, fragile features, thresholds, labels and limitations is accepted by the engineering owner, with monitors live."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the features and segments you would worry about as the model's author"
                - "Attach the baseline and holdout metrics to the handover"
                - "Write proposed thresholds, label source and maturity rule"
                - "Confirm with the engineering owner that monitors are live"
            - name: On-call engineer's drift triage primer
              description: |-
                ## Purpose
                Platform and software engineers who join the on-call rota are expert at latency and errors but often new to models, where a perfectly healthy service can be serving bad predictions. A short primer and two shadow shifts teach them to read a drift alert, run the first checks and know when to wake the model owner.

                ## Milestones
                1. A two-page primer on what drift alerts mean and what is in scope for on-call.
                2. Two shadow shifts completed alongside an experienced responder.
                3. One past incident walked through using the runbook.
                4. Escalation rules to model owners written in the rota notes.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each new on-call engineer completes the primer, two shadow shifts and one incident walkthrough before taking drift alerts alone."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Read the drift response runbook and the monitoring standard"
                - "Shadow two shifts with an experienced responder"
                - "Walk one past incident through the runbook"
                - "Note when to escalate to the model owner in the rota notes"
            - name: Monitoring evidence for regulated models
              description: |-
                ## Purpose
                Models used in lending, insurance, hiring or health decisions often fall under model risk management policies or sector rules that expect documented ongoing monitoring, defined thresholds and escalation. Building the evidence trail as part of normal monitoring, rather than assembling it before an audit, keeps you able to show what was checked, when and what was done. Confirm the specific obligations with your compliance or legal team.

                ## Milestones
                1. Applicable internal policies and external expectations listed with the compliance owner.
                2. Each monitoring check mapped to the requirement it satisfies.
                3. Evidence of checks, alerts, decisions and approvals stored in one retained location.
                4. The escalation route to the model risk or compliance function written and tested.

                ## Notes
                Start from the **Compliance control** template. This organises the evidence; your compliance team decides what the rules require.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every monitoring requirement agreed with compliance is mapped to a check with stored evidence, and the escalation route has been tested once."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask the compliance owner which policies apply to each regulated model"
                - "Map each monitoring check to the requirement it meets"
                - "Store check results, alerts and decisions in one retained location"
                - "Review the evidence trail with the compliance owner @recurring(quarterly)"
            - name: Feedback loops and selective labels
              description: |-
                ## Purpose
                Fraud models block the transactions whose labels would judge them, credit models see defaults only for approved applicants, and recommenders see clicks only on what they showed. Monitoring that ignores this reports a healthy model on a biased sample. Mapping the loop and keeping a small random or exploration sample restores an honest measure of performance.

                ## Milestones
                1. The feedback loop drawn for each affected model, showing which outcomes the model hides.
                2. The size of the unlabelled or censored population measured.
                3. An exploration or holdout sample proposed, with its cost agreed by the business owner.
                4. Performance reported separately on the unbiased sample.

                ## Notes
                A holdout that lets some risky cases through has a real cost. Agree its size and limits with the business and risk owners before running it.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each feedback-loop model has a mapped loop, a measured censored share and an agreed unbiased sample with performance reported on it."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Draw which outcomes each model prevents you from observing"
                - "Measure the share of cases that never receive a label"
                - "Propose an exploration sample and agree its cost with the owner"
                - "Report performance on the unbiased sample separately"
            - name: Embedding drift for text and image inputs
              description: |-
                ## Purpose
                Models that read text or images have no columns to compare, so drift hides in vocabulary, topics, image quality or a new camera. Monitoring the distribution of input embeddings, with a distance measure, cluster shares and a sample of new examples for human review, shows when the inputs no longer resemble the training set.

                ## Milestones
                1. Embeddings stored for a reference sample and for a monthly sample of production inputs.
                2. A distance measure between the two tracked, such as maximum mean discrepancy or centroid distance.
                3. New clusters with no training counterpart surfaced with example inputs.
                4. Twenty sampled examples from new clusters reviewed by a person each month.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Monthly embedding drift is tracked for one text or image model, with new clusters surfaced and their examples reviewed by a person."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Store embeddings for a reference sample of training inputs"
                - "Embed a monthly sample of production inputs with the same encoder"
                - "Track a distance measure between the two samples"
                - "Review twenty examples from any new cluster by hand"
            - name: Drift monitoring across hundreds of similar models
              description: |-
                ## Purpose
                Per-store forecasters, per-country risk models or per-customer models multiply alerts until nobody reads them. Monitoring the fleet as a whole, with aggregated drift scores, outlier detection across models and drill-down only for the worst, keeps hundreds of models watchable by a small team.

                ## Milestones
                1. Fleet-level drift and performance distributions computed across all models.
                2. Models ranked by deviation from the fleet, with the worst ten surfaced.
                3. Alerts grouped so one upstream change produces one alert, not hundreds.
                4. A weekly fleet review routine written.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A fleet view ranks all similar models by drift and performance deviation, and one upstream change produces a single grouped alert."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Compute one drift score and one performance score for every model in the fleet"
                - "Rank models by deviation from the fleet median"
                - "Group alerts by shared upstream cause"
                - "Write the weekly fleet review routine"
            - name: Group performance gap tracking between bias reviews
              description: |-
                ## Purpose
                A model that was fair at launch can drift into unfair outcomes as the population or the data changes, and formal bias reviews happen too rarely to catch it. Tracking a few agreed gap measures between groups monthly, such as differences in error rates or approval rates, and referring any sustained widening to the bias review process closes that window.

                ## Milestones
                1. Gap measures and groups agreed with the bias review owner and the legal or compliance team.
                2. Monthly gaps computed on matured outcomes where group data is lawfully available.
                3. A widening rule set that triggers referral to a full bias review.
                4. Each referral and its outcome recorded.

                ## Notes
                Handling of protected characteristics is a legal question in many places. Agree what data you may use with your privacy and legal teams first.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Agreed group gap measures are reported monthly for each relevant model, and any sustained widening is referred to a bias review and recorded."
                cadence: rolling
              tasks:
                - "Ask the bias review owner which groups and gap measures to track"
                - "Confirm with privacy and legal what group data may be used"
                - "Compute the agreed gaps on matured outcomes @recurring(monthly:19)"
                - "Refer any sustained widening to the bias review process"
---

# Model Drift Monitoring

This area is for the engineers who keep models running and the researchers who built them, once those models are scoring real data and the world starts moving away from the training set. It begins with foundations (a model register, tiering by impact, baselines, prediction logging, label delay maps, drift metrics, thresholds, a platform decision, health pages, a response runbook and retraining criteria), then the operating routines, the skills from PSI and two-sample tests to label-free performance estimation and sequential detection, improvements such as rolling references, proxy labels and alert backtests, dated events like a launch watch and a drift game day, situations for solo data scientists, inherited models, research handovers, on-call engineers and regulated models, and finally specialist work on feedback loops, embedding drift, model fleets and group performance gaps.

What repeats is a daily tier-one drift read, weekly feature drift and upstream change reviews, monthly matured performance, calibration, slice, alert noise, incident and challenger checks, quarterly health and compliance reviews, and a yearly round of revalidation, runbook review and peak preparation. The Purchase decision, Operational checklist, Metrics log, Meeting notes, Remediation plan and Compliance control templates pair with the platform choice, the runbook, the performance log, the quarterly review, serious incident reviews and regulated model evidence. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
