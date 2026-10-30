---
id: data-analytics.ml-feature-engineering
name: ML Feature Engineering
description: "A feature inventory and naming standard, point-in-time correct training joins, skew and parity checks between training and serving, shared transformation code, and the routines that keep a feature store lean and trusted."
category: business
version: 1.0.0
tags: [data-analytics, ml-feature-engineering, engineer, researcher, feature-store, training-serving-skew, point-in-time, feature-selection]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - reading-queue
    - purchase-decision
    - operational-checklist
    - remediation-plan
    - onboarding-plan
  pillars:
    - name: Data & Analytics
      emoji: "📊"
      description: "Turning data into decisions: metrics and dashboards, data pipelines and warehouses, experimentation, forecasting and modelling, machine learning, data quality and governance."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: ML Feature Engineering
          description: "Designing, computing and sharing the input features that machine learning models depend on, consistently between training and production."
          projects:
            - name: Feature inventory across production models
              description: |-
                ## Purpose
                Most teams that start talking about a feature store cannot say how many features their live models actually consume, where each is computed, or which ones two models compute differently under the same name. A sheet listing every input of every production model, with its source tables, computation code and owner, is the starting point for every later decision in this area. Expect the first pass to turn up dead inputs and quiet duplicates.

                ## Milestones
                1. Every production model listed with the code path or job that builds its inputs.
                2. Each input feature recorded with source tables, computation location, refresh frequency and owner.
                3. Features computed in more than one place flagged as candidate duplicates.
                4. Inputs with no identifiable owner or source marked for follow-up.

                ## Notes
                Read the inputs from the model artefact or the serving code, not from documentation. Docs are usually a version behind.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A feature inventory covers every production model's inputs, with source, computation location, refresh frequency and owner filled for at least 90 percent of rows."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every model currently serving predictions and who owns it"
                - "Extract the input feature list from each model's saved artefact or serving code"
                - "Record source tables, computation job and refresh frequency per feature"
                - "Flag features that appear under different names or code in two models"
                - "Refresh the feature inventory against the model registry @recurring(yearly)"
            - name: Feature naming and definition standard
              description: |-
                ## Purpose
                Names like user_score_v2_final tell nobody what was aggregated, over which window, or as of when. Agreeing one naming pattern (entity, measure, aggregation, window) and a short definition card for each feature lets an engineer read a training set without opening the code, and stops two people building the same thing twice.

                ## Milestones
                1. A naming pattern written down with five worked examples from your own features.
                2. A definition card format covering entity, description, window, source, as-of rule, null meaning and owner.
                3. The ten most used features renamed or aliased to the standard.
                4. The standard linked from the feature repository's readme and agreed by the team leads.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written naming and definition standard is adopted by the team, and the ten most used features carry compliant names and complete definition cards."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Collect twenty current feature names and note what each fails to say"
                - "Draft a naming pattern of entity, measure, aggregation and window"
                - "Write definition cards for the ten most used features"
                - "Get sign-off on the standard from the ML and data engineering leads"
            - name: Entity keys and grain map for features
              description: |-
                ## Purpose
                Every feature belongs to an entity at a grain: a customer per day, an order at checkout, a device per hour. When those keys are fuzzy, joins fan out silently, training rows multiply and a model learns from duplicated examples. Mapping the entities your models predict about, their join keys and the grain of each feature table removes a whole class of silent errors.

                ## Milestones
                1. A list of entities with their primary key, source of truth and any key changes over time.
                2. Each feature table labelled with its entity and grain.
                3. Known many-to-one and many-to-many joins documented with the rule used to collapse them.
                4. A row count check showing training sets keep one row per prediction event after joins.

                ## Notes
                Watch for keys that change: merged customer accounts, reissued device ids and guest checkouts later linked to an account.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "An entity and grain map covers every feature table, and a row count test proves the main training set has exactly one row per prediction event."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write down the entities your models make predictions about"
                - "Record the join key and grain of every feature table"
                - "Document how merged or reissued keys are resolved"
                - "Add a test that fails when a join changes the training row count"
            - name: Event timestamps and as-of rules for every input
              description: |-
                ## Purpose
                A value that was updated last Tuesday but carries only today's load time is a trap waiting in every training set. Before features can be joined correctly, every source needs a clear answer to when each fact became known to the business, which is often different from when it happened and when it landed in the warehouse. Writing those as-of rules down per source is the unglamorous work that makes point-in-time correctness possible.

                ## Milestones
                1. Each source table classified as append-only events, versioned records or overwritten snapshots.
                2. The event time, ingestion time and available-at time identified for every source.
                3. Sources that overwrite history without keeping versions listed, each with a plan to snapshot them.
                4. As-of rules recorded on each feature's definition card.

                ## Notes
                If a source overwrites rows in place, start daily snapshots now. History you did not keep cannot be rebuilt later.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every source feeding a feature has a recorded event time, available-at time and as-of rule, and each overwriting source has a snapshot plan or a written exception."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every source table that feeds a production feature"
                - "Classify each source as event log, versioned records or overwritten snapshot"
                - "Find the column or log that shows when each value became available"
                - "Start daily snapshots for sources that overwrite history"
            - name: Point-in-time correct training set joins
              description: |-
                ## Purpose
                Joining features to labels on the latest value, instead of the value known at prediction time, is the commonest way feature engineering inflates offline scores. An as-of join that picks, for each prediction event, the most recent feature row strictly before the cutoff gives training data the model will actually see in production. Building it once as shared code means nobody hand-rolls it in a notebook again.

                ## Milestones
                1. A shared as-of join function that takes an events table, a feature table and a cutoff column.
                2. Tests covering exact timestamp ties, missing history and features updated after the cutoff.
                3. The main training set rebuilt with the function and offline metrics compared with the old version.
                4. The difference in offline metrics recorded and explained to model owners.

                ## Notes
                Decide tie handling explicitly. A feature row stamped at exactly the prediction time is usually unsafe to use.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A tested as-of join function is in the shared repository and the main training set has been rebuilt with it, with the metric change documented."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Write the as-of join contract: inputs, cutoff column and tie rule"
                - "Implement the join and test it on a hand-built fixture with known answers"
                - "Rebuild the main model's training set with the new join"
                - "Compare offline metrics before and after and write up the gap"
            - name: Training-serving skew audit on one live model
              description: |-
                ## Purpose
                A feature computed by a SQL job for training and reimplemented in application code for serving will drift apart: a different timezone, a rounding rule, a default for nulls. Logging the features a live model actually received, then recomputing them offline for the same requests, shows exactly where the two paths disagree and how much it matters to the predictions.

                ## Milestones
                1. Serving-time feature values logged for a sample of real requests.
                2. The same requests recomputed through the training pipeline.
                3. Per-feature mismatch rates and the size of each mismatch tabulated.
                4. Root causes found for every feature with a mismatch above an agreed tolerance.
                5. Fixes shipped or exceptions recorded with the model owner.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A skew report lists mismatch rates for every input of one live model, with a root cause and a fix or written exception for each feature above tolerance."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Pick the live model with the most value at risk from bad inputs"
                - "Log the feature vector served for a sample of real requests"
                - "Recompute the same requests through the offline pipeline and diff them"
                - "Ask the agent to summarise mismatches by feature and likely cause"
                - "Repeat the skew audit on the highest-value model @recurring(quarterly)"
            - name: Freshness requirement for each feature group
              description: |-
                ## Purpose
                Some features are fine refreshed nightly; others, like failed logins in the last ten minutes, are worthless an hour later. Asking each model owner how stale each input can be before predictions suffer, and testing that claim where it matters, tells you which features need streaming or request-time computation and which can stay as cheap batch jobs.

                ## Milestones
                1. Each feature group tagged with a maximum acceptable staleness agreed with the model owner.
                2. One staleness claim tested offline by deliberately lagging the feature and measuring the metric drop.
                3. Feature groups sorted into batch, near-real-time and request-time tiers.
                4. Current refresh schedules compared with the tiers and the gaps listed.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every feature group has an agreed maximum staleness and tier, backed by at least one offline lag test, with gaps against current schedules listed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask each model owner how stale each input group can safely be"
                - "Simulate a one-day lag on a key feature and measure the metric drop"
                - "Assign each feature group to batch, near-real-time or request-time"
                - "Revisit staleness tiers with model owners @recurring(yearly)"
            - name: Shared feature transformation library
              description: |-
                ## Purpose
                When every notebook has its own log transform, bucket boundaries and date parsing, the same feature means slightly different things in every model. A small, versioned library of tested transformations that both training and serving import is the cheapest single defence against skew, and it makes new features faster to write.

                ## Milestones
                1. The fifteen most repeated transformations identified from existing code.
                2. Each one implemented once with unit tests and documented behaviour for nulls and edge values.
                3. The library packaged, versioned and importable from both training and serving code.
                4. Two existing models switched to the library with identical outputs confirmed.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A versioned transformation library with tested functions is used by at least two production models in both training and serving."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Search the codebase for transformations written more than twice"
                - "Implement the top fifteen with tests for nulls, zeros and extremes"
                - "Publish the library as a versioned package"
                - "Move two models onto the library and diff their outputs"
            - name: Fixture datasets for testing feature code
              description: |-
                ## Purpose
                Feature code tested only against the full warehouse is slow to run and so rarely tested at all. A few small fixture tables, hand-built so the correct answer is known, with late events, duplicate keys, nulls and timezone boundaries included on purpose, let every feature be tested in seconds on a laptop and in continuous integration.

                ## Milestones
                1. Fixture tables for each main entity, small enough to read by eye.
                2. Edge cases included deliberately: late events, duplicate keys, nulls and daylight saving boundaries.
                3. Expected outputs written by hand for the core features.
                4. Fixtures wired into the test suite and run on every change.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Fixture datasets with documented edge cases exist for each main entity, and feature tests run against them on every pull request."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Choose the three entities whose features change most often"
                - "Build fixture tables with deliberate edge cases for each"
                - "Write expected outputs for the core features by hand"
                - "Run feature tests against the fixtures in continuous integration"
                - "Refresh the fixtures to match any source schema changes @recurring(quarterly)"
            - name: Feature code review checklist
              description: |-
                ## Purpose
                Reviewers of feature code tend to check style and miss the things that break models: a window that overlaps the label period, a join that drops new customers, a default of zero where null meant unknown. A short checklist run on every feature pull request catches those before they reach a training set.

                ## Milestones
                1. A checklist of no more than twelve items covering time, joins, nulls, units, naming and tests.
                2. The checklist added to the pull request template for the feature repository.
                3. Ten feature pull requests reviewed against it.
                4. Items that never catch anything removed after the first month.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Ten consecutive feature pull requests have been reviewed against a written checklist of twelve items or fewer, and the list has been pruned once."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft a twelve-item checklist from the last three feature bugs"
                - "Add the checklist to the feature repository's pull request template"
                - "Review the next ten feature pull requests against it"
                - "Drop checklist items that caught nothing after a month"
            - name: Weekly feature pipeline health check
              description: |-
                ## Purpose
                Feature jobs fail quietly: a job succeeds but writes half the usual rows, or a late upstream load means yesterday's values are copied forward. Ten minutes every Monday looking at run status, row counts and lateness for each feature group catches the slow failures alerts miss, and builds a feel for what normal looks like.

                ## Milestones
                1. A single view of run status, duration, row count and lateness per feature group.
                2. Normal ranges noted for each group's row count and run time.
                3. Every anomaly from the check logged with its cause.
                4. Twelve consecutive weekly checks completed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive weekly checks are recorded, each listing any feature group outside its normal row count or lateness range and the action taken."
                cadence: rolling
              tasks:
                - "Build one view of run status, row counts and lateness per feature group"
                - "Note the normal row count range for each feature group"
                - "Review the week's feature runs, row counts and lateness @recurring(weekly:mon)"
                - "Log each anomaly with its cause and fix"
            - name: Feature validation rules on every run
              description: |-
                ## Purpose
                Generic data quality checks on source tables do not know that a session count cannot be negative or that 30-day spend should never exceed lifetime spend. Writing expectations for each feature itself (range, null rate, cardinality, relationships between features) and running them after every computation stops a bad batch before it is written to the store or used to train.

                ## Milestones
                1. Expectations written for every feature in the top three models: range, null rate, distinct count and cross-feature rules.
                2. Validation running after each feature job, blocking publication on hard failures.
                3. A severity split between blocking failures and warnings.
                4. Failures routed to the feature group's owner.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every feature used by the top three models has expectations that run after each computation, with hard failures blocking publication."
                cadence: rolling
              tasks:
                - "Write range, null rate and distinct count expectations for the top model's features"
                - "Add cross-feature rules such as 30-day values never exceeding lifetime values"
                - "Block publication of a feature batch when a hard rule fails"
                - "Triage the week's feature validation failures with owners @recurring(weekly:thu)"
            - name: Monthly online and offline parity check
              description: |-
                ## Purpose
                Once features are served from an online store, online values and offline training values can diverge through missed writes, expired keys or a backfill that only touched one side. A monthly sample comparing the two for the same entities and timestamps keeps the skew audit from being a one-off.

                ## Milestones
                1. A job that samples entities and compares online values with offline values at the same timestamp.
                2. Tolerances set per feature type.
                3. Results logged each month with a mismatch rate per feature group.
                4. Any group above tolerance investigated within the month.

                ## Notes
                Start from the **Metrics log** template to keep the monthly mismatch rates in one place.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly parity checks are logged, each with mismatch rates per feature group and an investigation for every group above tolerance."
                cadence: rolling
              tasks:
                - "Write a sampling job that reads the same entities from both stores"
                - "Set mismatch tolerances for numeric, categorical and list features"
                - "Run the parity sample and log mismatch rates by group @recurring(monthly:18)"
                - "Open an investigation for any group above tolerance"
            - name: Feature backfill runbook and log
              description: |-
                ## Purpose
                Backfilling a feature over two years of history is where costs spike, partitions get overwritten and the offline store quietly disagrees with the online one. A runbook covering sizing, partitioning, idempotent writes, validation and who to tell, plus a log of every backfill run, turns a nervous one-off into routine work.

                ## Milestones
                1. A runbook covering scope, cost estimate, partition strategy, dry run, validation and sign-off.
                2. Backfills written so they can be safely rerun without duplicating rows.
                3. A log recording every backfill with date range, cost, runtime and validation result.
                4. The runbook used for two real backfills and updated afterwards.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A backfill runbook has been followed for two real backfills, each logged with date range, cost, runtime and validation result."
                cadence: rolling
              tasks:
                - "Write the backfill runbook from the steps of the last backfill"
                - "Make the backfill job idempotent by partition"
                - "Log date range, cost and validation result for each backfill"
                - "Reconcile the backfill log with the store's partitions @recurring(quarterly)"
            - name: Feature definition change and versioning routine
              description: |-
                ## Purpose
                Changing how a feature is computed changes every model trained on it, often without the model owner knowing. Treating definition changes as new versions, with the old version kept until each consuming model is retrained or confirmed unaffected, lets features improve without silently moving live predictions.

                ## Milestones
                1. A written rule that any change to logic, window or source creates a new feature version.
                2. Consumers of each feature discoverable from the registry or inventory.
                3. A notice sent to consuming model owners for every version change.
                4. Old versions retired only after every consumer has moved.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every feature definition change in the last quarter shipped as a new version, with consuming model owners notified and old versions retired only after migration."
                cadence: rolling
              tasks:
                - "Write the rule for what counts as a new feature version"
                - "Record which models consume each feature version"
                - "Send consuming owners a notice before each version change"
                - "Publish the month's feature version changes to model owners @recurring(monthly:28)"
            - name: Unused feature sweep
              description: |-
                ## Purpose
                Feature stores accumulate clutter: experiments that never shipped, versions nobody migrated off, features for retired models still computing every night. A monthly sweep comparing what is computed against what is read by training jobs and live models finds the dead weight, and turning it off saves compute and makes the catalogue easier to search.

                ## Milestones
                1. Read access for each feature measured from training jobs and serving logs.
                2. Features unread for 90 days listed with their compute cost.
                3. Owners asked to keep, archive or delete each one.
                4. Archived features stopped from computing, with their definitions kept.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each monthly sweep lists features unread for 90 days with an owner decision, and computation has stopped for every feature marked archive."
                cadence: rolling
              tasks:
                - "Pull read counts per feature from training jobs and serving logs"
                - "List features unread for 90 days with their monthly compute cost"
                - "Run the unused feature sweep and send owners keep or archive requests @recurring(monthly:12)"
                - "Stop computing archived features while keeping their definitions"
            - name: Upstream schema change watch for feature inputs
              description: |-
                ## Purpose
                A product team renaming a column or changing what an event means will break features weeks before anyone notices a model getting worse. Subscribing to schema changes for every source your features read, and checking the list monthly against the feature inventory, gives you the warning in time to adapt.

                ## Milestones
                1. Every source table and event stream behind a feature listed with its producing team.
                2. Schema change notifications routed to the feature owners.
                3. A monthly review of upstream changes against the inventory.
                4. At least one breaking change caught before it reached a model.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Schema change notifications for every feature source reach feature owners, and monthly reviews record each upstream change and its impact."
                cadence: rolling
              tasks:
                - "List the producing team for every source behind a feature"
                - "Subscribe feature owners to schema change notices for those sources"
                - "Check upstream schema changes against the feature inventory @recurring(monthly:24)"
                - "Agree a heads-up rule with the two most volatile producing teams"
            - name: Feature experiment log
              description: |-
                ## Purpose
                Most feature ideas fail, and without a record the same failed idea gets retried a year later by someone new. A log of every candidate feature, the hypothesis behind it, the offline result and the decision keeps the team's learning in one place and shows which kinds of signal tend to pay off.

                ## Milestones
                1. A log with columns for idea, hypothesis, data source, evaluation setup, result and decision.
                2. Every feature experiment from the last quarter added retrospectively.
                3. New ideas and results added every week.
                4. A short summary of which feature families helped and which did not, written after six months.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The feature experiment log holds every candidate tested in the last six months with result and decision, and a summary of what helped is written."
                cadence: rolling
              tasks:
                - "Create the experiment log with hypothesis, setup, result and decision columns"
                - "Add the last quarter's feature experiments from memory and notebooks"
                - "Add this week's feature ideas and offline results to the log @recurring(weekly:fri)"
                - "Write a six-month summary of which feature families helped"
            - name: Quarterly feature platform cost review
              description: |-
                ## Purpose
                Computing features is often the largest slice of an ML team's warehouse bill, and the cost hides in wide nightly recomputes and windows longer than any model uses. A quarterly look at cost per feature group, set against which models use it and how much they gain from it, shows where incremental computation or a shorter window will pay.

                ## Milestones
                1. Compute and storage cost attributed to each feature group.
                2. Cost set against the consuming models and the importance of the group to each.
                3. The three most expensive groups reviewed for incremental computation or shorter windows.
                4. Savings from changes recorded the following quarter.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter's review attributes cost to every feature group and records at least one change with its measured saving."
                cadence: cyclic
              tasks:
                - "Tag feature jobs so warehouse cost can be attributed by group"
                - "Review cost per feature group against model usage @recurring(quarterly)"
                - "Test incremental computation on the most expensive group"
                - "Record the saving from each change a quarter later"
            - name: Feature group owners and handover notes
              description: |-
                ## Purpose
                People move on, but the features they wrote keep running, and an unowned feature group is one nobody fixes at 7am when validation fails. Naming an owner and a backup for each group, with a one-page handover note on quirks and known issues, means alerts go to a person and knowledge survives a resignation.

                ## Milestones
                1. An owner and a backup named for every feature group.
                2. A handover note per group covering sources, quirks, known issues and past fixes.
                3. Alerts and validation failures routed to the owner.
                4. Ownership confirmed every quarter and updated after any team change.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every feature group has a named owner and backup, a current handover note, and alerts routed to the owner."
                cadence: rolling
              tasks:
                - "Assign an owner and backup to every feature group in the inventory"
                - "Write a one-page handover note for each group you own"
                - "Route validation alerts for each group to its owner"
                - "Confirm every feature group still has a current owner @recurring(quarterly)"
            - name: Categorical encoding without target leakage
              description: |-
                ## Purpose
                High-cardinality categories such as merchant, postcode or product id carry rich signal and are an easy place to leak the label. Learning when to use one-hot, frequency, hashing, out-of-fold target encoding or learned embeddings, and how to handle unseen categories at serving time, is a core feature engineering skill worth practising on your own data.

                ## Milestones
                1. One-hot, frequency, hashing and target encoding each tried on one high-cardinality column.
                2. Target encoding done out-of-fold with smoothing, and the leak from naive encoding demonstrated.
                3. A rule written for unseen and rare categories at serving time.
                4. A short note recording which encoding the team defaults to and why.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written comparison of four encodings on one real high-cardinality column exists, including a demonstrated naive target encoding leak and an unseen-category rule."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Pick one high-cardinality column from a current model"
                - "Compare one-hot, frequency, hashing and out-of-fold target encoding on it"
                - "Show the score gap between naive and out-of-fold target encoding"
                - "Write the team's default rule for rare and unseen categories"
            - name: Rolling window and recency aggregations
              description: |-
                ## Purpose
                Counts, sums and averages over the last 7, 30 and 90 days, plus time since the last event, are the backbone of behavioural features. Doing them well means choosing windows from the data rather than habit, handling entities with less history than the window, and computing them efficiently over millions of entities.

                ## Milestones
                1. Window lengths chosen by testing several against the model metric.
                2. Recency and frequency features built alongside window sums.
                3. A rule for entities with less history than the window, with a history length feature added.
                4. Windows computed incrementally rather than by rescanning full history.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A tested set of window and recency features is in use, with window lengths chosen by measured lift and a documented rule for short-history entities."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Build 7, 30 and 90-day counts for one key event type"
                - "Add days since last event and a history length feature"
                - "Compare model lift across window lengths and keep the useful ones"
                - "Rewrite one window job so it updates incrementally"
            - name: Numeric transforms, scaling and binning
              description: |-
                ## Purpose
                Tree models ignore monotonic transforms while linear models and neural networks depend on them, yet many teams apply scaling everywhere out of habit. Knowing when a log, a rank, a clip at the 99th percentile or a learned bin helps, and fitting those parameters on training data only, prevents both wasted effort and subtle leakage.

                ## Milestones
                1. Skewed and heavy-tailed numeric features identified in one training set.
                2. Transforms compared on a tree model and a linear model side by side.
                3. Scaling and clipping parameters fitted on the training split only and stored with the model.
                4. A one-page guide to which transforms the team uses with which model families.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page transform guide exists, based on a side-by-side test on a tree model and a linear model, with fitted parameters stored with each model."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Plot the distribution of every numeric feature in one training set"
                - "Test log, rank and clipping on a tree model and a linear model"
                - "Store fitted scaling parameters with the model artefact"
                - "Write the team's transform guide by model family"
            - name: Date, time and calendar features
              description: |-
                ## Purpose
                Hour of day, day of week, paydays, public holidays and time since signup carry real signal, and they are full of traps: timezones, daylight saving, holidays that differ by country, and cyclical values where 23:00 sits next to midnight. A small, tested calendar feature module saves every model from rediscovering them.

                ## Milestones
                1. Local time derived from each entity's timezone rather than server time.
                2. Cyclical encodings for hour and weekday tested against plain integers.
                3. A holiday and payday calendar for each market you serve.
                4. The module added to the shared transformation library with tests across daylight saving changes.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A tested calendar feature module with local time, cyclical encodings and a holiday calendar per market is in the shared library."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find where each entity's local timezone can be derived from"
                - "Build hour and weekday features in local time with cyclical versions"
                - "Assemble a holiday and payday calendar for each market"
                - "Test the module across a daylight saving change"
            - name: Missing values as features
              description: |-
                ## Purpose
                Missing income fields, an empty referral source or zero purchases so far often say more than the values that are present. Learning to separate never recorded from not applicable from a true zero, adding missingness indicators, and checking whether null rates differ between training and serving keeps models from learning an artefact of how the data was collected.

                ## Milestones
                1. Null meanings documented for the top twenty features: unknown, not applicable or true zero.
                2. Missingness indicators added where they carry signal.
                3. Imputation values fitted on training data and stored with the model.
                4. Null rates compared between training data and live requests.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Null meanings are documented for the top twenty features, and null rates in training data and live requests have been compared for each."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write what null means for each of the top twenty features"
                - "Add missingness indicators and measure their importance"
                - "Store imputation values alongside the model artefact"
                - "Compare null rates in training data with live requests"
            - name: Text features from counts to embeddings
              description: |-
                ## Purpose
                Support tickets, product descriptions and free-text form fields can feed tabular models through anything from keyword flags and TF-IDF to sentence embeddings. Practising the options on one real text column, and measuring what each adds over the tabular features alone, shows whether the extra serving cost of an embedding model is worth paying.

                ## Milestones
                1. Keyword flags, TF-IDF with dimensionality reduction and sentence embeddings each built for one text column.
                2. Lift over the tabular features alone measured for each.
                3. Serving cost and latency of each option estimated.
                4. A recommendation recorded for that column.
              priority: low
              frontmatter:
                mode: learning
                output_kind: decision
                success_criteria: "Three text feature approaches are compared on one real column, with lift, serving cost and latency recorded and one option chosen."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Choose one free-text column linked to a current prediction target"
                - "Build keyword flags, TF-IDF components and sentence embeddings"
                - "Measure lift over the tabular baseline for each"
                - "Estimate serving cost and latency for the embedding option"
            - name: Ratio, interaction and domain features
              description: |-
                ## Purpose
                The features that lift a model most are often ratios and interactions a domain expert would name in a minute: spend per visit, refunds as a share of orders, distance from the usual location. Sitting with the people who know the process, turning their rules of thumb into candidate features and testing them, beats brute-force generation on most tabular problems.

                ## Milestones
                1. Two sessions held with domain experts to list the signals they look for.
                2. Their rules of thumb turned into at least ten candidate features.
                3. Each candidate tested for lift and recorded in the experiment log.
                4. Kept features documented with the expert reasoning behind them.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten or more expert-suggested features are tested and logged, with the reasoning recorded on each kept feature's definition card."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Book an hour with two people who make the decision the model supports"
                - "Write their rules of thumb as candidate feature definitions"
                - "Test each candidate for lift against the current model"
                - "Record the expert reasoning on each kept feature's definition card"
            - name: Feature engineering practice on public datasets
              description: |-
                ## Purpose
                Work data rarely lets you try ideas freely, while competitions on public tabular datasets show techniques that took others years to learn. Working through one public problem a month, reading the winning write-ups and trying their feature ideas yourself, builds instincts you can bring back to production work.

                ## Milestones
                1. A shortlist of public tabular datasets with published solution write-ups.
                2. One problem worked each month, with your own baseline built first.
                3. The top solutions' feature ideas read and at least two reproduced each time.
                4. A personal notes file of techniques worth trying at work.

                ## Notes
                Start from the **Reading queue** template for the write-ups. Check each dataset's licence before using it outside practice.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Six monthly practice problems are completed, each with a personal baseline, two reproduced feature ideas from published solutions and written notes."
                cadence: rolling
              tasks:
                - "Shortlist five public tabular datasets with published solution write-ups"
                - "Work one public problem and reproduce two winning feature ideas @recurring(monthly:3)"
                - "Add the techniques worth trying at work to your notes file"
            - name: Feature store build, buy or skip decision
              description: |-
                ## Purpose
                Dedicated feature stores solve real problems (point-in-time joins, online serving, reuse) but they are also a platform to run, and a team with three batch models may not need one yet. Comparing open-source, managed and do-nothing options against your actual inventory, freshness tiers and team size gives a decision you can still defend in two years.

                ## Milestones
                1. Requirements written from the inventory: number of features, online needs, freshness tiers and team size.
                2. Three options scored: an open-source store, a managed service and staying with warehouse tables.
                3. A proof of concept run on one model for the leading option.
                4. The decision recorded with costs, risks and a revisit date.

                ## Notes
                Start from the **Purchase decision** template. Many teams do well for years on well-tested warehouse tables plus a shared as-of join.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision record compares three options against written requirements, includes a proof of concept result and sets a revisit date."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Write requirements from the feature inventory and freshness tiers"
                - "Score an open-source store, a managed service and plain warehouse tables"
                - "Run a two-week proof of concept with the leading option on one model"
                - "Record the decision with costs and risks"
                - "Revisit the feature store decision against current needs @recurring(yearly)"
            - name: Feature selection pass on an overgrown model
              description: |-
                ## Purpose
                Models that have collected 400 features over three years are slow to train, expensive to serve and fragile, since every input is a dependency that can break. Removing features with permutation importance and grouped removal, while watching the metric on a held-out period, usually cuts the input list sharply for little or no loss.

                ## Milestones
                1. Permutation importance computed on a held-out time period, not the training data.
                2. Correlated features grouped and removed as groups.
                3. The smaller model's metric within an agreed tolerance of the full model.
                4. Removed features unhooked from serving and their computation flagged for the unused sweep.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A slimmer model with at least 30 percent fewer inputs performs within the agreed tolerance on a held-out period and has replaced the full model."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Agree the metric tolerance the slimmer model must stay within"
                - "Compute permutation importance on a held-out time period"
                - "Remove correlated feature groups and retest after each round"
                - "Unhook removed inputs from the serving path"
            - name: Ablation study of feature groups
              description: |-
                ## Purpose
                Knowing that a model works is less useful than knowing which families of signal make it work. Retraining with each feature group removed in turn (behavioural, demographic, text, third-party) shows what each costs and contributes, which matters when a data source is about to become expensive, restricted or unavailable.

                ## Milestones
                1. Features assigned to five to eight named groups.
                2. One retrain per group removed, each evaluated on the same held-out period.
                3. A table of metric change and monthly cost per group.
                4. Findings shared with the model owner and the data source owners.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A table shows the metric change and cost when each feature group is removed, and it has been shared with the model and source owners."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Assign every feature in one model to a named group"
                - "Retrain with each group removed and evaluate on the same period"
                - "Add monthly compute and licence cost per group to the results"
                - "Share the ablation table with the model and source owners"
            - name: Learned embeddings versus hand-built features trial
              description: |-
                ## Purpose
                Embeddings learned from sequences of user actions or from item text can replace dozens of hand-built aggregates, or they can add serving cost and opacity for no gain. Running a fair trial on one model, with the same splits and tuning budget for both, settles the argument for your data instead of by opinion.

                ## Milestones
                1. A fair trial design written: same splits, same tuning budget, same evaluation period.
                2. An embedding-based feature set built for one model.
                3. Metric, latency, cost and explainability compared with the hand-built set.
                4. A recorded decision for that model, with the conditions that would change it.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A trial record compares embedding and hand-built features on metric, latency, cost and explainability under equal conditions, with a decision recorded."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Write the trial rules: shared splits, tuning budget and evaluation period"
                - "Train item or user embeddings on the action history"
                - "Compare both feature sets on metric, latency and cost"
                - "Record the decision and what would make you revisit it"
            - name: Precomputing slow request-time features
              description: |-
                ## Purpose
                Live database queries made at request time are often the main reason a model endpoint misses its latency budget. Finding which of those features can be precomputed into an online store at an acceptable freshness, and which genuinely need request data, typically removes most of the slow path.

                ## Milestones
                1. Request-time feature computation profiled per feature.
                2. Each slow feature classified as precomputable or truly request-dependent.
                3. Precomputable features moved to a scheduled job writing to the online store.
                4. Endpoint latency measured before and after.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Slow request-time features have been profiled and the precomputable ones moved to the online store, with endpoint latency measured before and after."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Profile the time spent computing each request-time feature"
                - "Mark which slow features could tolerate precomputation"
                - "Move the precomputable ones into a scheduled job feeding the online store"
                - "Measure endpoint latency before and after the change"
            - name: Merging duplicate features across teams
              description: |-
                ## Purpose
                Two teams each computing customer 30-day spend, slightly differently, doubles the cost and guarantees an argument when their models disagree. Agreeing one definition, migrating both models to it and retiring the copy cuts compute and makes the catalogue trustworthy.

                ## Milestones
                1. Duplicate candidates from the inventory confirmed by comparing values on the same entities.
                2. One canonical definition agreed with both owning teams.
                3. Each consuming model retrained or checked on the canonical feature.
                4. The duplicate computation turned off.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "At least three duplicate feature pairs are merged into canonical definitions, consuming models are migrated and the duplicates are no longer computed."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Compare values of suspected duplicate features on the same entities"
                - "Agree one canonical definition with both owning teams"
                - "Retrain or check each consuming model on the canonical version"
                - "Turn off the duplicate computation"
            - name: Retiring a deprecated feature safely
              description: |-
                ## Purpose
                Pulling a feature that a forgotten batch model still reads will break that model on its first run after removal. Retiring features on a fixed sequence (announce, mark deprecated, watch reads, stop writes, delete after a grace period) means nothing in production finds out by failing.

                ## Milestones
                1. Every consumer of the feature found from read logs, not memory.
                2. A deprecation notice with a removal date sent to each consumer.
                3. Reads tracked to zero before writes stop.
                4. Data and definition archived after a grace period.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A deprecated feature has been retired with zero reads confirmed before writes stopped, and its definition is archived."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find every reader of the feature from access and serving logs"
                - "Send each consumer a deprecation notice with a removal date"
                - "Confirm reads have reached zero before stopping writes"
                - "Archive the definition and data after the grace period"
            - name: First model served from the feature store
              description: |-
                ## Purpose
                The first production model reading from a new feature store is where the platform proves itself or loses the team's trust. Choosing a model with modest stakes, running it in parallel with the old path and comparing every served value before switching makes the go-live a non-event.

                ## Milestones
                1. A first model chosen with modest risk and well-understood features.
                2. Its features registered, backfilled and materialised to the online store.
                3. Two weeks of parallel serving with values compared against the old path.
                4. The switch made, with the old path kept ready for rollback for a month.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "One production model reads all its features from the feature store after two weeks of parallel serving with value mismatches below tolerance."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Choose a first model with modest stakes and well-understood features"
                - "Register, backfill and materialise its features to the online store"
                - "Serve from both paths for two weeks and compare every value"
                - "Switch over and keep the old path ready for a month"
            - name: Historical backfill for a new feature set
              description: |-
                ## Purpose
                New features are useless for training until they exist for the period the labels cover, which often means computing two or three years of history in one go. Planning the backfill as an event, with a cost ceiling, a dry run on one month and validation against values computed by hand, keeps it from eating the quarter's compute budget.

                ## Milestones
                1. Date range set from the training label period, with a cost estimate approved.
                2. A dry run on one month validated against hand-computed values.
                3. The full backfill run within the cost ceiling.
                4. Point-in-time correctness spot-checked on twenty random entities.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The new feature set exists for the full label period, the backfill came in under its approved cost ceiling and twenty spot checks passed."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Set the backfill date range from the training label period"
                - "Estimate the compute cost and get it approved"
                - "Dry run one month and check it against hand-computed values"
                - "Run the full backfill and spot-check twenty random entities"
            - name: Feature platform migration with a parallel run
              description: |-
                ## Purpose
                Moving features from one warehouse, orchestrator or feature store to another is a multi-month event, and the risk is not the move itself but the subtle differences it introduces. Running old and new pipelines side by side, comparing outputs feature by feature and cutting over model by model keeps every prediction stable while the ground moves.

                ## Milestones
                1. A migration plan with feature groups in waves and a rollback for each wave.
                2. Old and new pipelines running in parallel with daily output comparison.
                3. Each model cut over only after its features match within tolerance for two weeks.
                4. The old pipelines switched off and their costs confirmed gone.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "All feature groups run on the new platform, each model was cut over after two weeks of matching parallel output, and the old pipelines are off."
                cadence: phased
                effort_hours_estimate: "80"
              tasks:
                - "Group features into migration waves with a rollback per wave"
                - "Set up a daily comparison of old and new pipeline outputs"
                - "Cut over each model after two weeks of matching output"
                - "Switch off the old pipelines and confirm the cost has stopped"
            - name: Pre-launch feature review for a new model
              description: |-
                ## Purpose
                Before a new model goes live, someone other than its author should walk through every input: how it is computed, whether it is available at prediction time, how it is served and what happens when it is missing. An hour-long review against a fixed checklist, a week before launch, catches the leakage and skew problems that are expensive to find afterwards.

                ## Milestones
                1. A reviewer from outside the model team booked a week before launch.
                2. Every input walked through for availability, serving path, null handling and freshness.
                3. Issues logged with owners and fixed or formally accepted before launch.
                4. The review record attached to the model's launch documents.

                ## Notes
                Start from the **Operational checklist** template and keep the same checklist for every launch.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A documented feature review by someone outside the model team is completed before launch, with every issue fixed or formally accepted."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Book a reviewer from outside the model team a week before launch"
                - "Prepare a table of every input with its source, serving path and null rule"
                - "Walk through each input against the checklist and log issues"
                - "Attach the review record to the launch documents"
            - name: Post-incident review of a broken feature
              description: |-
                ## Purpose
                When a feature breaks in production (a unit change upstream, a stuck job copying stale values, a null default that flipped), the fix is usually quick and the lesson usually lost. A blameless review within a week that traces how the bad values got in, how long they took to notice and which check would have caught them turns one incident into a permanent defence.

                ## Milestones
                1. A timeline from first bad value to detection to fix.
                2. Affected models and predictions quantified.
                3. The missing check or process gap identified.
                4. Remediation actions assigned with dates and the new check in place.

                ## Notes
                Start from the **Remediation plan** template.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written review with timeline, impact and root cause exists for the incident, and the new check that would have caught it is live."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the timeline from first bad value to detection and fix"
                - "Count the predictions and decisions served with the bad values"
                - "Name the check that would have caught it earlier"
                - "Add that check and assign the remaining actions with dates"
            - name: Solo engineer's first feature pipeline without a store
              description: |-
                ## Purpose
                An engineer who is the whole ML function at a small company does not need a feature platform; they need a few well-tested SQL or dataframe jobs, an as-of join and a way to compute the same features at serving time. Building that minimal setup properly gets most of the benefit of a feature store at a fraction of the effort, and leaves a clean path to one later.

                ## Milestones
                1. Feature logic written once as functions that run in both the training job and the serving code.
                2. Feature tables stored with entity key, feature timestamp and computation time columns.
                3. A shared as-of join used for every training set.
                4. A one-page readme explaining how to add a new feature.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One model trains and serves from the same feature functions, with timestamped feature tables, a shared as-of join and a readme for adding features."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Move the model's feature logic into functions importable by training and serving"
                - "Add entity key, feature timestamp and computed-at columns to feature tables"
                - "Use one as-of join for every training set"
                - "Write a readme on how to add a feature"
            - name: Researcher turning notebook features into a package
              description: |-
                ## Purpose
                Research groups often keep their best feature logic in notebook cells that only one student can run, which makes results hard to reproduce and impossible to reuse in the next paper. Moving that logic into a small installable package with tests, a pinned environment and documented inputs takes a few days and saves months later.

                ## Milestones
                1. Feature logic pulled out of notebooks into functions in a package.
                2. Tests on a small fixture dataset with known outputs.
                3. A pinned environment and a readme describing inputs and outputs.
                4. One existing result reproduced exactly from the package.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A tested, installable feature package with a pinned environment reproduces one existing paper or thesis result exactly."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "List the notebook cells that compute features for the main result"
                - "Move them into package functions with clear inputs and outputs"
                - "Write tests on a small fixture with known outputs"
                - "Reproduce one existing result from the package alone"
            - name: Feature construction record for a published study
              description: |-
                ## Purpose
                Reviewers and readers of an applied ML paper need to know exactly how each input was built, over which window and with what handling of missing data, or the result cannot be checked. Keeping a feature construction record as the study runs, rather than reconstructing it at submission, makes the methods section and supplementary material straightforward and honest.

                ## Milestones
                1. Each feature recorded with definition, source, window, missing data handling and the date it was added.
                2. Features excluded during the study recorded with the reason.
                3. The record cross-checked against the code at the final model version.
                4. A supplementary table drafted from the record.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A feature construction record matching the final code is complete, with exclusions explained, and a supplementary table is drafted from it."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Start a feature record with definition, source, window and missing data rule"
                - "Add each excluded feature with the reason it was dropped"
                - "Cross-check the record against the code at the final model version"
                - "Ask the agent to draft the supplementary feature table from the record"
            - name: Data scientist to platform team feature handoff
              description: |-
                ## Purpose
                Prototype features from a data scientist rarely survive contact with production unchanged, and handoffs fail when the engineer has to reverse-engineer intent from a notebook. A handoff pack with definition cards, as-of rules, expected value ranges, reference outputs for test entities and the offline metric to match gives the platform team something to build and verify against.

                ## Milestones
                1. Definition cards and as-of rules written for every new feature.
                2. Reference values for twenty test entities supplied for the engineer to match.
                3. Expected ranges and null rates documented.
                4. The production implementation matching the reference values within tolerance.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The production feature implementation reproduces the data scientist's reference values for twenty test entities within tolerance."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write a definition card and as-of rule for each prototype feature"
                - "Export reference feature values for twenty test entities"
                - "Document expected ranges and null rates for each feature"
                - "Check the production implementation against the reference values"
            - name: First month on a team with a feature store
              description: |-
                ## Purpose
                Joining a team that already runs a feature store means learning its conventions and unwritten rules before you add anything. A structured first month (reading the catalogue, shadowing an owner, shipping one small feature end to end and writing down what confused you) gets you productive and leaves the docs better for the next person.

                ## Milestones
                1. The catalogue, naming standard and contribution guide read.
                2. One week spent shadowing a feature group owner, including an on-call shift.
                3. One small feature shipped end to end through review, backfill and serving.
                4. A list of confusing points sent to the platform owners.

                ## Notes
                Start from the **Onboarding plan** template.
              priority: low
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Within 30 days one small feature is shipped end to end and a written list of confusing points has gone to the platform owners."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Read the feature catalogue, naming standard and contribution guide"
                - "Shadow a feature group owner for a week including one on-call shift"
                - "Ship one small feature through review, backfill and serving"
                - "Send the platform owners a list of what confused you"
            - name: Cold-start features for a product with little history
              description: |-
                ## Purpose
                Young products and new markets have few events per user, so 90-day aggregates are mostly zeros and history-heavy features mislead. Designing features that work from day one (signup context, first-session behaviour, population priors) and planning when to switch on behavioural features as history builds keeps early models useful.

                ## Milestones
                1. Features available at or near signup listed and built.
                2. Population or segment priors added for entities with little history.
                3. A history length threshold set for switching on behavioural features.
                4. Model performance tracked by entity tenure band.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A cold-start feature set is in use, behavioural features switch on at a recorded history threshold, and performance is reported by tenure band."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List the signals available at signup or in the first session"
                - "Add segment-level priors for entities with little history"
                - "Set the history threshold for switching on behavioural features"
                - "Check whether history now supports more behavioural features @recurring(monthly:9)"
            - name: On-demand features computed at request time
              description: |-
                ## Purpose
                Some features can only exist at the moment of the request: the distance between this transaction and the user's last one, or how similar this query is to the user's history. Building them as on-demand transformations that combine request data with precomputed values, sharing code with the offline path and logging the result, keeps them fast and reproducible for training.

                ## Milestones
                1. On-demand features identified that genuinely need request data.
                2. Each implemented once and used by both the serving path and offline training via logged requests.
                3. Latency per on-demand feature measured against the endpoint budget.
                4. Served values logged so future training sets use what the model actually saw.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "On-demand features run from shared code in serving and training, each within its latency budget, with served values logged for future training."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "List the features that genuinely depend on request data"
                - "Implement each once as a transformation shared by serving and training"
                - "Measure each on-demand feature's latency against the budget"
                - "Log served values so training can use them directly"
            - name: Shared entity embedding registry
              description: |-
                ## Purpose
                Once several models use embeddings of the same users, items or merchants, retraining one embedding without versioning silently changes every downstream model. A registry that stores each embedding version with its training data window, dimension and consumers, and keeps old versions until consumers move, makes embeddings safe to share.

                ## Milestones
                1. Every embedding in use listed with dimension, training window and consumers.
                2. Versions stored immutably and referenced by version in each consuming model.
                3. A retraining schedule with a quality check before publishing a new version.
                4. Old versions retired only after consumers have migrated.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every shared embedding is versioned in a registry with its training window and consumers, and consuming models pin a specific version."
                cadence: rolling
              tasks:
                - "List every embedding in use with dimension, training window and consumers"
                - "Store embedding versions immutably and pin them in consuming models"
                - "Retrain shared embeddings and run the quality check before publishing @recurring(quarterly)"
                - "Retire old versions once consumers have moved"
            - name: Graph features from relationship data
              description: |-
                ## Purpose
                Fraud rings, referral networks and shared devices show up in the connections between entities long before they show up in any single entity's behaviour. Building degree, shared-neighbour and community features from a relationship graph, with point-in-time snapshots so the graph used in training matches what was known then, adds signal no tabular aggregate can.

                ## Milestones
                1. A relationship graph defined with node types, edge types and edge timestamps.
                2. Graph snapshots built as of each training cutoff.
                3. Degree, shared-neighbour and community features computed and tested for lift.
                4. A serving plan that keeps graph features within their freshness tier.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Graph features built from point-in-time snapshots are tested for lift on one model, with a serving plan that meets their freshness tier."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Define node and edge types and where their timestamps come from"
                - "Build graph snapshots as of each training cutoff"
                - "Compute degree, shared-neighbour and community features and test lift"
                - "Write the serving plan for graph features within their freshness tier"
            - name: Automated feature generation with guardrails
              description: |-
                ## Purpose
                Automated tools can generate thousands of aggregations and combinations across related tables, and most of them are noise, duplicates or leaks. Using generation as a search tool, with point-in-time cutoffs enforced, strict held-out evaluation and a human review before anything enters the store, finds the occasional good idea without flooding the catalogue.

                ## Milestones
                1. Generation run with prediction-time cutoffs enforced on every related table.
                2. Candidates filtered by held-out lift and correlation with existing features.
                3. Survivors reviewed by a person for meaning and leakage.
                4. Kept features rewritten to the naming and definition standard before entering the store.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An automated generation run produced candidates under enforced cutoffs, and every kept feature passed human review and meets the definition standard."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Configure the generation tool to respect prediction-time cutoffs"
                - "Filter candidates by held-out lift and overlap with existing features"
                - "Review the surviving candidates by hand for meaning and leakage"
                - "Rewrite kept features to the naming standard before adding them"
---

# ML Feature Engineering

This area is for the engineers and researchers who build the inputs models learn from, and who get the blame when a model that scored well offline falls flat in production. It starts with foundations (an inventory of every feature in use, a naming standard, entity keys, as-of rules, point-in-time joins and a first skew audit), then the operating routines for pipeline health, validation, parity, versioning and pruning, the core skills from categorical encoding to text and calendar features, decisions such as whether a feature store is worth it, dated events like a first go-live or a platform migration, situations for solo engineers, research groups and new joiners, and finally specialist work on on-demand, embedding, graph and automatically generated features.

What repeats is a weekly pipeline health check, weekly validation triage and experiment log, monthly parity checks, unused feature sweeps, upstream schema reviews and version notices, quarterly cost, ownership, skew and embedding reviews, and a yearly look at the inventory and the feature store decision. The Metrics log, Reading queue, Purchase decision, Operational checklist, Remediation plan and Onboarding plan templates pair with the parity log, the practice programme, the feature store decision, the pre-launch review, incident reviews and a new joiner's first month. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
