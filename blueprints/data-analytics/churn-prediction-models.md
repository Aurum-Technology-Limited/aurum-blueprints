---
id: data-analytics.churn-prediction-models
name: Churn Prediction Models
description: "A churn definition the business agrees on, leak-free customer snapshots, scores sized to what the retention team can handle, holdout groups that prove which saves were real, and the monthly routines that keep the model honest."
category: business
version: 1.0.0
tags: [data-analytics, churn-prediction-models, researcher, engineer, team, customer-retention, survival-analysis, uplift-modelling]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - metrics-log
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
        - name: Churn Prediction Models
          description: "Building models that flag customers likely to leave early enough for teams to intervene, and measuring whether interventions work."
          projects:
            - name: Written churn definition for your business model
              description: |-
                ## Purpose
                Ask finance, customer success and product what churn means and you will usually get three answers: a cancelled contract, a lapsed card, ninety days without a login. A subscription business with contracts can see churn as an event, while a shop or app without contracts has to infer it from silence, and the model inherits whichever choice you make. Agreeing one written definition before any modelling means the score, the dashboard and the board report all count the same customers.

                ## Milestones
                1. The business model classified as contractual, non-contractual or mixed, with the reason recorded.
                2. A one-paragraph churn rule naming the event, the source system and the date that counts as the churn date.
                3. Edge cases settled in writing: pauses, downgrades, plan switches, reactivations within 30 days and merged accounts.
                4. Sign-off from the finance owner of the reported churn figure and the head of customer success.

                ## Notes
                For non-contractual products, an inactivity threshold is a modelling choice, not a fact. Pick it by looking at how many customers who went quiet for that long ever came back.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A signed churn definition covers the event, source, churn date and at least five edge cases, and matches the figure finance reports."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask finance, customer success and product each to write their churn rule in one sentence"
                - "List the edge cases where those three rules disagree"
                - "Draft a single definition that settles each edge case explicitly"
                - "Get finance and customer success to sign the definition"
                - "Recheck the definition with finance after billing or plan changes @recurring(yearly)"
            - name: Prediction horizon and intervention lead time
              description: |-
                ## Purpose
                Timing decides whether a score is useful at all. A score that says a customer will leave next week is useless if a save call takes three weeks to arrange, and a score for twelve months out is too vague to act on. The horizon has to be set by how long a retention action takes to land and when customers actually decide, which for annual contracts is often 60 to 90 days before renewal. Fixing the scoring date, the horizon and the lead time now shapes every training table that follows.

                ## Milestones
                1. The typical time from a retention action starting to it reaching the customer measured or estimated with the team.
                2. The decision window for renewals or cancellations described from past exit conversations.
                3. A prediction horizon chosen, such as churn within the 90 days after the scoring date, with the reasoning written down.
                4. A scoring cadence fixed, such as the first working day of each month.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision states the scoring date, the churn horizon, the intervention lead time and the cadence, agreed with the retention lead."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the retention lead how long a save call or offer takes from list to customer"
                - "Pull the distribution of days between last renewal notice and cancellation"
                - "Choose a horizon that leaves at least the lead time to act"
                - "Write the horizon and scoring cadence into the model brief"
            - name: Retention action inventory and weekly capacity
              description: |-
                ## Purpose
                Plenty of churn models fail quietly when nobody can do anything with the list. Before building, write down every action the business can actually take for an at-risk customer, from a success manager call to a pause option or onboarding refresher, how much each costs and how many customers each team can handle in a week. That capacity number decides how long the at-risk list should be.

                ## Milestones
                1. A table of every available retention action with its owner, cost per customer and eligible segments.
                2. Weekly capacity recorded for each team that would act on the list.
                3. Actions nobody currently owns flagged as gaps rather than assumed.
                4. The retention lead's confirmation that the table is accurate.

                ## Notes
                If the only action available is a discount, say so. A model that feeds blanket discounts can cost more margin than the churn it prevents.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A confirmed action inventory lists each retention action with owner, cost, eligible segments and weekly capacity."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every retention action the business has used in the past year"
                - "Ask each owning team how many at-risk customers they could handle weekly"
                - "Add the cost per customer of each action from finance or the team lead"
                - "Mark the actions with no owner as open gaps"
            - name: Churn base rates by segment and tenure
              description: |-
                ## Purpose
                A model that catches half of churners sounds good until you learn that churn is 2% a month in enterprise and 9% in self-serve, and the model mostly found self-serve customers. Calculating base rates by plan, size, acquisition channel and tenure band shows where churn concentrates and gives every later model a fair yardstick. It also often reveals that the first 90 days need their own treatment.

                ## Milestones
                1. Monthly churn rates for the last 24 months, using the agreed definition.
                2. Rates split by plan, customer size, acquisition channel and tenure band.
                3. The segments with the highest churn by count and by revenue named.
                4. Seasonal patterns, such as renewal months or holiday dips, noted.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A base rate table covers 24 months by plan, size, channel and tenure, with the top churn segments by count and revenue named."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write the query for monthly churn using the signed definition"
                - "Split the rate by plan, size, channel and tenure band"
                - "Chart churn by month to spot renewal and seasonal peaks"
                - "Share the table with the retention lead and note their surprises"
            - name: Customer signal inventory across systems
              description: |-
                ## Purpose
                Churn signals are scattered: logins and feature use in product events, ticket volume and tone in the help desk, failed payments in billing, contract dates in the CRM, survey scores in a separate tool. Listing every source, what it holds, how far back it goes and whether it can be joined to a customer ID shows which signals are realistic for a first model and which need engineering work first.

                ## Milestones
                1. A list of every system holding customer behaviour, with owner and history length.
                2. The join key from each system to the customer or account recorded, with match rates.
                3. Each signal marked as available now, needs work or out of reach.
                4. Any personal or sensitive fields flagged for review before use.

                ## Notes
                Check with whoever owns data protection before pulling support ticket text or call notes into a model. Using less personal data is often enough.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A signal inventory lists every source with owner, history, join key, match rate and an availability rating."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the systems that record what customers do or say"
                - "Check how far back each source keeps history"
                - "Test the join from each source to the customer ID and record the match rate"
                - "Flag fields that need a data protection review before use"
                - "Refresh the inventory as systems are added or retired @recurring(yearly)"
            - name: Point-in-time customer snapshot table
              description: |-
                ## Purpose
                The most common churn model bug is training on today's view of a customer: the current plan, the latest ticket count, an account status that already says cancelled. A snapshot table holds one row per customer per scoring date, built only from what was known on that date, with the churn label looked up over the horizon that follows. It is the single table both training and monthly scoring read from.

                ## Milestones
                1. A table with one row per active customer per monthly scoring date for at least 18 months.
                2. Every feature computed only from events dated before the scoring date.
                3. A churn label column filled from the horizon after each scoring date, left empty where the horizon has not closed.
                4. Row counts per scoring date reconciled to the active customer count finance reports.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The snapshot table covers 18 or more monthly scoring dates, uses only prior events, and its customer counts reconcile to finance within 1%."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Write the list of scoring dates the snapshot will cover"
                - "Build the customer spine of active customers on each scoring date"
                - "Add features with an explicit filter on event date before the scoring date"
                - "Reconcile customer counts per date to the finance active count"
            - name: Leakage check on churn signals
              description: |-
                ## Purpose
                Some features predict churn perfectly because they are part of churning: a visit to the cancellation page, a downgrade request, a notice of non-renewal, an account manager flag added after the customer said they were leaving. Left in, they produce a model with startling accuracy that finds customers who have already gone. Hunting them down before the first model saves an embarrassing launch.

                ## Milestones
                1. Every feature listed with the earliest date its value is known.
                2. Features that are part of the cancellation process removed or lagged.
                3. A single-feature model run for each top feature, with any suspiciously strong one investigated.
                4. The removed features and the reason for each recorded in the model notes.

                ## Notes
                Ask the retention team how a customer cancels, step by step. Each step usually leaves a trace in some table.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A leakage log records every removed or lagged feature with its reason, and no single remaining feature alone predicts churn with near-perfect accuracy."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Walk through the cancellation process with the retention team and note each step"
                - "Find the tables each cancellation step writes to"
                - "Score each top feature on its own and look hard at any that are too good"
                - "Record removed features and reasons in the model notes"
                - "Run the single-feature leakage test on newly added features @recurring(quarterly)"
            - name: Voluntary and involuntary churn split
              description: |-
                ## Purpose
                Expired cards, failed payments and bank declines often make up a large share of subscription churn, with no decision to leave behind them. Those customers need payment retries and card update reminders, not a success manager call, and mixing them into one label teaches the model to spot card expiry dates. Splitting the two gives each its own fix.

                ## Milestones
                1. Churn events classified as voluntary or involuntary using billing records.
                2. The share of each type calculated for the last 12 months.
                3. A decision recorded on whether involuntary churn gets its own simple rule, its own model or is excluded.
                4. The billing or payments owner told the size of the involuntary problem.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Twelve months of churn are split into voluntary and involuntary with shares calculated and a recorded decision on how each is handled."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the billing fields that mark a failed payment or card expiry"
                - "Label each past churn event as voluntary or involuntary"
                - "Calculate the share of each type by month"
                - "Share the involuntary figure with the payments owner"
            - name: Simple churn rules the model must beat
              description: |-
                ## Purpose
                Customer success teams often already run a rule such as no login for 21 days or three support tickets in a month. Measuring those rules on the snapshot table, using the same horizon and list size, sets the bar a model has to clear. If a two-line rule catches nearly as many churners, the extra complexity has to justify itself.

                ## Milestones
                1. The rules currently used by customer success written down exactly.
                2. Each rule scored on past snapshots for precision and recall at the planned list size.
                3. A simple tenure and plan baseline added for comparison.
                4. The best rule's numbers recorded as the benchmark in the model brief.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "At least three rule-based baselines are scored on past snapshots at the planned list size, with the best recorded as the benchmark."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask customer success which warning signs they watch for today"
                - "Turn each warning sign into an exact rule on the snapshot table"
                - "Score each rule at the planned list size"
                - "Record the best rule as the benchmark"
            - name: Churn model brief agreed with the retention lead
              description: |-
                ## Purpose
                Retained revenue, not area under the curve, is how a churn model is judged. A short brief agreed with the person who owns retention states the definition, horizon, list size, the actions that will follow, the benchmark rule and how success will be measured, including a holdout group. It keeps the build from drifting into accuracy for its own sake.

                ## Milestones
                1. A two-page brief covering definition, horizon, list size, actions, benchmark and success measure.
                2. A holdout plan written in, so a share of flagged customers receives no action.
                3. A review date set for the first readout.
                4. Signature or written approval from the retention lead.

                ## Notes
                Agree the holdout before launch. Asking for one after the team has seen the list almost never works.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A signed brief states definition, horizon, list size, actions, benchmark, holdout plan and a first readout date."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the agent to draft the brief from the definition, horizon and action inventory"
                - "Add the holdout share and how customers will be assigned to it"
                - "Walk the retention lead through the brief in a 30-minute meeting"
                - "File the signed brief with the model documentation"
            - name: Monthly churn scoring run and list handoff
              description: |-
                ## Purpose
                Once the model exists, its value comes from arriving on time every month in the place the retention team works. A fixed run on the agreed scoring date, a check that the inputs are fresh, the holdout assignment applied and the list delivered with reason codes turns a model into a habit the team can plan around.

                ## Milestones
                1. A documented monthly run with input freshness checks before scoring.
                2. The holdout assignment applied automatically and logged.
                3. The at-risk list delivered to the retention team with a top reason per customer.
                4. Twelve consecutive monthly runs delivered on the agreed date.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The scoring list reaches the retention team on the agreed date for 12 consecutive months, each run with a logged freshness check and holdout assignment."
                cadence: rolling
              tasks:
                - "Write the run checklist from freshness check to list delivery"
                - "Confirm with the retention team where they want the list to appear"
                - "Run the scoring job and deliver the at-risk list @recurring(monthly:3)"
                - "Log the run date, list size and holdout count in the run log"
            - name: Matured predictions versus actual churn review
              description: |-
                ## Purpose
                Scores made in January can only be judged once the horizon has closed, so the honest check always looks back. Each month, take the cohort whose horizon just ended, compare predicted risk with who actually left, and record precision at list size, recall and calibration. Over a year this record is the model's real track record.

                ## Milestones
                1. A monthly table of matured cohorts with precision, recall and calibration at the list size.
                2. Results split by holdout and treated customers, so actions do not hide the model's accuracy.
                3. Any month that falls below the benchmark rule flagged with a short explanation.
                4. Twelve months of matured results available for the annual review.

                ## Notes
                Judge accuracy on the holdout group. Treated customers who stayed may have been saved, which makes the model look wrong when it was right.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each month's matured cohort is scored on the holdout group for precision, recall and calibration, with 12 months recorded."
                cadence: rolling
              tasks:
                - "Build the query that joins past scores to churn outcomes after the horizon"
                - "Review the newly matured cohort against actual churn @recurring(monthly:12)"
                - "Flag any month that falls below the benchmark rule"
                - "Write a two-line note on what changed in a weak month"
            - name: Weekly at-risk account huddle with customer success
              description: |-
                ## Purpose
                Lists sent by email get skimmed once. A 20-minute weekly huddle where success managers go through the highest-risk accounts, say what they did and what they heard, keeps the list in use and gives the modeller first-hand evidence about false alarms and missed signals.

                ## Milestones
                1. A standing weekly slot with the success managers who own at-risk accounts.
                2. A short agenda: new high-risk accounts, actions taken, outcomes, surprises.
                3. Notes from each huddle filed where the modeller can search them.
                4. Three months of huddles held without the slot lapsing.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The weekly huddle runs for 12 consecutive weeks with notes filed each time."
                cadence: rolling
              tasks:
                - "Book a 20-minute weekly slot with the success managers"
                - "Write the four-item agenda and share it in the invite"
                - "Run the at-risk account huddle and file the notes @recurring(weekly:tue)"
                - "Pull recurring false alarms from the notes into the feedback log"
            - name: Retention team feedback log on flagged accounts
              description: |-
                ## Purpose
                Success managers often know why a flag is wrong: the customer is mid-migration, the champion is on leave, usage dropped because a project finished. Capturing that in a simple structured log, rather than in chat, gives the modeller features to add and patterns to explain. It also shows the team their input changes the model.

                ## Milestones
                1. A feedback form with fields for account, flag agree or disagree, reason and action taken.
                2. The form linked from wherever the at-risk list appears.
                3. A monthly summary of the most common disagreement reasons.
                4. At least one model change traced back to feedback and reported to the team.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A feedback log holds structured entries from the retention team, summarised monthly, with at least one model change credited to it."
                cadence: rolling
              tasks:
                - "Create the feedback form with agree, disagree, reason and action fields"
                - "Link the form next to each account on the at-risk list"
                - "Summarise the month's disagreement reasons for the modeller @recurring(monthly:18)"
                - "Tell the team which feedback led to a model change"
            - name: Holdout control group upkeep
              description: |-
                ## Purpose
                Without customers who were flagged but left untreated, nobody can tell whether retention actions save anyone or simply follow customers who would have stayed anyway. Keeping a small random holdout every month, checking that nobody quietly contacts them and protecting it from pressure to treat everyone is the only way the saved revenue figure stays believable.

                ## Milestones
                1. A random holdout share agreed, often 10 to 20% of the flagged list.
                2. Assignment logged with a fixed random seed or hash so it can be audited.
                3. A quarterly check that holdout customers received no retention contact.
                4. A written exception rule for strategic accounts that must never be held out.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every scoring run assigns a logged random holdout, and quarterly audits show fewer than 5% of holdout customers were contacted."
                cadence: rolling
              tasks:
                - "Agree the holdout share and the strategic account exceptions with the retention lead"
                - "Assign holdout customers by hashing the customer ID"
                - "Audit holdout customers for any retention contact @recurring(quarterly)"
                - "Report contamination to the retention lead if it appears"
            - name: Churn reason coding from exits and surveys
              description: |-
                ## Purpose
                Cancellation surveys, exit calls and closing notes say why customers left, but only if someone codes them consistently. A small fixed set of reason codes, applied each month, shows whether the model is catching price churn but missing product gaps, and gives the retention team a reason to match each action to.

                ## Milestones
                1. A list of 8 to 12 churn reason codes with definitions.
                2. Past six months of exit data coded as a starting set.
                3. Monthly coding of new exits by an agreed owner.
                4. Reason codes joined to model scores so missed churn can be broken down by reason.

                ## Notes
                Keep an other code, and review it every quarter. When it grows past a fifth of exits, a new reason has appeared.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A defined code list is applied to every exit each month, joined to scores, with six months of history coded."
                cadence: rolling
              tasks:
                - "Draft 8 to 12 churn reason codes with one-line definitions"
                - "Code the last six months of cancellation survey answers"
                - "Code the new month's exits and join them to scores @recurring(monthly:22)"
                - "Break missed churners down by reason code"
            - name: Score distribution and base rate watch
              description: |-
                ## Purpose
                The quickest sign that something broke upstream is a shift in scores: twice as many customers suddenly high risk, or the average predicted churn drifting away from the actual rate. A monthly glance at the score distribution, mean predicted churn and list size against the trailing base rate catches pipeline faults and real market shifts before the retention team notices.

                ## Milestones
                1. A chart of the score distribution for each scoring run.
                2. Mean predicted churn plotted against the trailing actual churn rate.
                3. Alert thresholds written, such as list size moving more than 30% month on month.
                4. Each breach investigated and its cause recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each scoring run's distribution and mean prediction are compared with the trailing base rate, and every threshold breach has a recorded cause."
                cadence: rolling
              tasks:
                - "Save the score distribution chart after each run"
                - "Write the thresholds that would trigger an investigation"
                - "Compare mean predicted churn with the trailing actual rate @recurring(monthly:8)"
                - "Record the cause of any breach in the run log"
            - name: Quarterly churn model refresh decision
              description: |-
                ## Purpose
                Churn patterns move with pricing changes, new competitors, product releases and the mix of customers you acquire. A quarterly look at matured performance, feature stability and segment results ends in one of three recorded choices: keep, retrain on recent snapshots or rebuild. Writing the choice down stops retraining becoming either a reflex or something that never happens.

                ## Milestones
                1. A quarterly review pack with matured performance, segment results and the top feature shifts.
                2. A keep, retrain or rebuild decision recorded with the reason.
                3. Any retrained model compared with the current one on the same holdout period before replacing it.
                4. Four quarterly decisions recorded in the model history.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Four quarterly reviews each end in a recorded keep, retrain or rebuild decision, with any replacement model tested on the same holdout period."
                cadence: cyclic
              tasks:
                - "Assemble matured results and feature shifts for the quarter"
                - "Hold the keep, retrain or rebuild review and record the decision @recurring(quarterly)"
                - "Compare any retrained model with the current one on the same period"
                - "Note in the model history which version is now live"
            - name: Churn model risk register
              description: |-
                ## Purpose
                Specific risks come with churn models: a discount sent to people who were never leaving, a loyal customer offended by a save call, a segment the model systematically ignores, a definition change in billing that silently breaks the label. Keeping them in one register with owners and mitigations means each is reviewed on purpose rather than discovered in a complaint.

                ## Milestones
                1. A register with at least eight churn-specific risks, each with likelihood, impact and owner.
                2. A mitigation written for every high-rated risk.
                3. The register reviewed with the retention lead and data owner each quarter.
                4. Closed risks kept with the date and how they were resolved.

                ## Notes
                Start from the **Risk register** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A risk register lists at least eight churn model risks with owners and mitigations, reviewed each quarter for a year."
                cadence: rolling
              tasks:
                - "Create the register from the risk register template"
                - "List eight risks covering offers, customer experience, segments and label changes"
                - "Review the register with the retention lead and data owner @recurring(quarterly)"
                - "Write a mitigation for every high-rated risk"
            - name: Saved revenue ledger
              description: |-
                ## Purpose
                Leadership will ask what the churn model is worth, and a confident figure without a control group is guesswork. A ledger that compares churn among treated flagged customers with churn among the holdout, month by month, turns the difference into retained revenue with a range around it. That is the number to put in front of a budget conversation.

                ## Milestones
                1. A monthly entry with treated and holdout churn rates for the matured cohort.
                2. Retained revenue estimated from the difference, with a confidence interval.
                3. Cost of retention actions netted off to give an estimated return.
                4. A cumulative figure for the year with its range stated.

                ## Notes
                Start from the **Metrics log** template. Report the range, not only the central figure; small holdouts give wide intervals.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A ledger holds 12 monthly entries of treated versus holdout churn with retained revenue, action cost and a stated interval."
                cadence: rolling
              tasks:
                - "Set up the ledger from the metrics log template"
                - "Calculate treated and holdout churn for the matured cohort @recurring(monthly:26)"
                - "Net off the cost of the actions taken that month"
                - "Add the cumulative retained revenue range to the quarterly pack"
            - name: Time-to-churn survival curves and Cox models
              description: |-
                ## Purpose
                Collapsing churn to yes or no throws away when customers leave and treats someone who left in month two the same as someone who left in month twenty. Survival methods model time until churn, handle customers still active as censored rather than wrong, and answer questions like how risk changes with tenure. Learning them gives a second lens on the same data.

                ## Milestones
                1. Kaplan-Meier curves drawn for the customer base and for three segments.
                2. A Cox proportional hazards model fitted with five sensible covariates.
                3. The proportional hazards assumption checked and any violations noted.
                4. A short write-up comparing survival results with the classification model.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Kaplan-Meier curves for three segments and a checked Cox model are written up with a comparison to the classification model."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Work through a tutorial on Kaplan-Meier curves using your own customer data"
                - "Draw survival curves for three segments and compare them"
                - "Fit a Cox model and test the proportional hazards assumption"
                - "Write a one-page comparison with the classification results"
            - name: Behavioural churn signals from product usage
              description: |-
                ## Purpose
                Raw login counts are weak predictors; what usually matters is change. Usage falling against the customer's own past, a shrinking number of active seats, a key feature abandoned, a long gap after a habit of weekly use. Practising how to build these relative and trend features from event data is the core skill that separates a decent churn model from a tenure lookup.

                ## Milestones
                1. Ten candidate usage features written, at least half measuring change against the customer's own history.
                2. Each feature built on the snapshot table using only prior events.
                3. Univariate lift of each feature measured against churn.
                4. The three strongest kept and the reasoning for dropping the rest recorded.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten usage features are built point-in-time, each has measured lift, and the three kept are documented with reasons."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List ten usage features, half of them trends against the customer's own baseline"
                - "Build each feature on the snapshot table"
                - "Measure each feature's lift on churn"
                - "Record which three are kept and why"
            - name: Precision at capacity and lift charts
              description: |-
                ## Purpose
                Retention teams only ever work the top of the list, so overall accuracy and AUC tell them little. Precision among the top N customers, where N is weekly capacity, cumulative gains and lift by decile answer the question they care about: of the people we call, how many were really leaving. Learning to present these makes model reviews faster and fairer.

                ## Milestones
                1. Precision and recall computed at the list size set by retention capacity.
                2. A lift chart by decile and a cumulative gains chart for the current model.
                3. The same charts drawn for the benchmark rule on the same customers.
                4. A one-slide explanation the retention team agrees they understand.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Precision at capacity, decile lift and cumulative gains are charted for the model and benchmark, and the retention team signs off the explainer slide."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Compute precision and recall at the capacity list size"
                - "Draw decile lift and cumulative gains charts"
                - "Put the benchmark rule on the same charts"
                - "Test the one-slide explainer on a success manager"
            - name: Probability alive models for non-contractual customers
              description: |-
                ## Purpose
                When customers never cancel and simply stop buying, churn has to be inferred from the gap since their last purchase relative to how often they usually buy. Models in the BG/NBD and Pareto/NBD family estimate the probability a customer is still active from recency, frequency and tenure alone. Learning them gives retail, marketplace and app teams a principled alternative to an arbitrary inactivity threshold.

                ## Milestones
                1. A recency, frequency and tenure table built for a calibration period.
                2. A BG/NBD model fitted and checked against a holdout period.
                3. Probability alive compared with a simple days-since-last-purchase rule.
                4. A note on where the model's assumptions do not fit your customers.

                ## Notes
                These models assume steady buying until a silent drop-out. Strongly seasonal or subscription-like buying breaks that assumption.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A BG/NBD model is fitted, checked on a holdout period and compared with a recency rule, with its assumption limits written down."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Build the recency, frequency and tenure table for a calibration period"
                - "Fit a BG/NBD model with an open-source package"
                - "Compare probability alive with days since last purchase on a holdout period"
                - "Write down where the assumptions fail for your customers"
            - name: Reason codes success managers can act on
              description: |-
                ## Purpose
                A success manager handed a score of 0.71 has nothing to say on the call. Turning feature contributions into two or three plain reasons per customer, such as active seats down 40% since last quarter or no admin login in 30 days, makes the score usable and exposes features that look predictive but make no sense. Reasons must describe the customer, not the model.

                ## Milestones
                1. Per-customer feature contributions computed for each scoring run.
                2. A mapping from each feature to a plain-language reason template with the actual value filled in.
                3. Features with no sensible customer-facing reason reviewed for removal.
                4. Five success managers confirm the reasons help them prepare a call.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every flagged customer carries up to three plain-language reasons with actual values, and five success managers confirm they are useful."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Compute per-customer feature contributions for the latest run"
                - "Write a plain reason template for each feature"
                - "Review features whose reasons make no sense to a customer"
                - "Show five success managers their accounts' reasons and note feedback"
                - "Review the reason templates with two success managers @recurring(quarterly)"
            - name: Churn modelling reading programme
              description: |-
                ## Purpose
                Few applied problems are written about as much as churn, and much of what is written repeats the same telecom dataset. A short, chosen reading list covering survival analysis, probability alive models, uplift for retention and published case studies from subscription businesses gives a working modeller the ideas worth trying, read at a steady pace rather than in a panic before a review.

                ## Milestones
                1. A list of 8 to 10 sources across survival, non-contractual models, uplift and case studies.
                2. One source read and summarised in a paragraph each month.
                3. At least two ideas from the reading tried on your own data.
                4. The list pruned and refreshed after six months.

                ## Notes
                Start from the **Reading queue** template.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Eight sources are listed, six are summarised over six months and two ideas have been tested on company data."
                cadence: rolling
              tasks:
                - "Create the reading queue from the reading queue template"
                - "Add sources across survival, probability alive, uplift and case studies"
                - "Read one source and write a paragraph summary @recurring(monthly:15)"
                - "Pick one idea from the reading to test on your own data"
            - name: Calibrated churn probabilities for revenue forecasts
              description: |-
                ## Purpose
                Finance may want to sum churn probabilities into expected lost revenue, which only works if a 20% score really means one in five leave. Many models rank well but are badly calibrated, especially after resampling for rare churn. Learning to check reliability curves and recalibrate makes the scores usable for planning as well as for ranking a call list.

                ## Milestones
                1. A reliability curve drawn for the current model on matured data.
                2. Expected churn from summed probabilities compared with actual churn by month.
                3. A recalibration method applied and its effect measured on a later period.
                4. Finance told in writing whether the scores are fit for forecast use.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A reliability curve and summed-probability check are produced, a recalibration is tested on a later period, and finance has a written fitness verdict."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Draw a reliability curve for the current model"
                - "Sum predicted probabilities by month and compare with actual churn"
                - "Try isotonic or Platt recalibration and test it on a later period"
                - "Write a short note to finance on whether to use the scores"
            - name: Practice on public churn datasets
              description: |-
                ## Purpose
                Trying a new technique on live customer data risks confusion with the production model and needs approvals. Public churn datasets from telecoms, music streaming and banking let a researcher or new team member practise survival models, uplift or feature work in a safe place, and compare results with published work. The aim is fluency, not a leaderboard position.

                ## Milestones
                1. Two public churn datasets downloaded with their licences checked.
                2. A baseline and one new technique run on each.
                3. Results compared with at least one published result on the same data.
                4. A note on what transfers to your own customers and what does not.

                ## Notes
                The best-known telecom churn dataset is small and clean. Do not assume techniques that shine on it will survive messy event data.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two public datasets are modelled with a baseline and a new technique, compared with a published result, and a transfer note is written."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Find two public churn datasets and read their licences"
                - "Run a baseline model on each"
                - "Try one new technique and compare with a published result"
                - "Write down what would and would not carry over to your data"
            - name: Revenue-weighted or customer count churn target
              description: |-
                ## Purpose
                Losing one large account can matter more than losing fifty small ones, yet a model trained on customer counts treats them equally and fills the list with small customers. Deciding whether to predict logo churn, revenue churn or contraction, or to weight training by revenue, changes who gets called. It is a business choice and should be made by the retention lead, not by default.

                ## Milestones
                1. Lists from a count-based and a revenue-weighted model compared on the same month.
                2. The revenue at risk captured by each list at the planned size calculated.
                3. Contraction, such as seat reductions, assessed as a target alongside full churn.
                4. A decision recorded with the retention lead's reasoning.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Count and revenue-weighted lists are compared on revenue at risk, and a target decision is recorded with the retention lead's reasoning."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Train a revenue-weighted version alongside the count model"
                - "Compare revenue at risk captured by each list at the planned size"
                - "Check whether contraction should count as partial churn"
                - "Record the chosen target with the retention lead's reasoning"
            - name: Risk threshold set from retention capacity
              description: |-
                ## Purpose
                Where the list is cut decides cost and effectiveness: too long and success managers spread thin and skip calls, too short and saveable customers are missed. Setting the cut from weekly capacity, action cost and expected save rate, rather than at an arbitrary 0.5, makes the trade-off explicit and easy to revisit when the team grows or shrinks.

                ## Milestones
                1. Expected saves and cost calculated for at least four list sizes.
                2. A threshold or fixed list size chosen that fits weekly capacity.
                3. Separate cut-offs considered for high-value and low-value customers.
                4. The threshold, its reasoning and a review date written into the model brief.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A threshold or list size is chosen from a comparison of at least four options on saves and cost, and written into the brief with a review date."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Calculate expected saves and cost at four list sizes"
                - "Check each list size against the team's weekly capacity"
                - "Agree the chosen cut-off with the retention lead"
                - "Revisit the threshold when retention capacity changes @recurring(yearly)"
            - name: Vendor churn score or in-house model
              description: |-
                ## Purpose
                Customer success platforms and analytics tools now sell built-in health or churn scores, and some are good enough. Comparing a vendor score with your own model on the same past customers, with cost, transparency of reasons and data sharing terms alongside, avoids both building something you could have bought and buying a black box that cannot be checked.

                ## Milestones
                1. Two or three vendor options shortlisted with pricing and data requirements.
                2. A back-test of at least one vendor score against your model on the same customers and months.
                3. Each option scored on accuracy at capacity, explanation quality, cost and data terms.
                4. A recorded build, buy or combine decision.

                ## Notes
                Start from the **Purchase decision** template. Ask any vendor for a back-test on your own historic data before signing.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A purchase decision compares at least two vendor scores with the in-house model on the same history and records a build, buy or combine choice."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Create the comparison from the purchase decision template"
                - "Shortlist vendors and ask each for a back-test on your data"
                - "Score each option on accuracy, explanations, cost and data terms"
                - "Record the build, buy or combine decision"
            - name: Health score and churn model reconciliation
              description: |-
                ## Purpose
                Many customer success teams already run a red, amber, green health score built from judgement. When the model disagrees, success managers trust their own colours. Comparing the two on matured outcomes, finding where each is right, and deciding whether to replace, blend or keep both avoids two competing truths about the same customer.

                ## Milestones
                1. The existing health score's rules documented.
                2. Health score and model compared on matured churn outcomes.
                3. Accounts where they disagree reviewed with success managers.
                4. A decision to replace, blend or keep both, with how they will be shown.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The health score and model are compared on matured outcomes, disagreements are reviewed, and a replace, blend or keep decision is recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write down how the current health score is calculated"
                - "Compare health score colours with model scores on matured outcomes"
                - "Review twenty disagreeing accounts with success managers"
                - "Record whether to replace, blend or keep both"
            - name: Churn score placement in the retention workflow
              description: |-
                ## Purpose
                Scores that live in a dashboard nobody opens on a Monday change nothing. Deciding where the score and its reasons appear, such as the account page in the CRM, a task queue or the weekly huddle sheet, and what triggers a task, matters as much as accuracy. The decision should come from watching how success managers plan their week.

                ## Milestones
                1. Two success managers observed planning a week of account work.
                2. Options listed for where score and reasons could appear.
                3. One placement chosen with the trigger that creates a task.
                4. Usage checked after a month: how many flagged accounts had a logged action.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A placement and task trigger are chosen after observing success managers, and a one-month check records the share of flagged accounts with a logged action."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Sit with two success managers while they plan their week"
                - "List where the score and reasons could appear"
                - "Choose one placement and the rule that creates a task"
                - "Count flagged accounts with a logged action after a month"
            - name: Early-life churn model for the first 90 days
              description: |-
                ## Purpose
                New customers often churn at several times the rate of established ones, and the main model barely sees them because they have little history. A separate early-life model using onboarding milestones, setup completion and first-week activity can flag them while onboarding help still works. It often delivers the largest saves for the least effort.

                ## Milestones
                1. Early-life churn rate measured for customers in their first 90 days.
                2. Onboarding milestones identified that separate stayers from leavers.
                3. An early-life model or rule built and compared with the main model on new customers.
                4. A weekly early-life list handed to the onboarding team.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An early-life model beats the main model on customers in their first 90 days and its list reaches the onboarding team each week."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Measure churn for customers in their first 90 days"
                - "List onboarding milestones and compare completion for stayers and leavers"
                - "Build an early-life model and compare it with the main model"
                - "Agree with the onboarding team how they receive the weekly list"
            - name: Matching retention actions to churn reasons
              description: |-
                ## Purpose
                Different churn reasons need different fixes. A customer drifting because nobody was trained on the product needs onboarding help, while one comparing prices needs a commercial conversation, and sending both the same discount wastes margin. Mapping each reason code and top model reason to the action most likely to help, then testing that mapping, turns a risk list into a playbook.

                ## Milestones
                1. A table mapping each churn reason and top model reason to a preferred action.
                2. The mapping reviewed by the retention lead and two success managers.
                3. The preferred action shown next to each flagged customer.
                4. Save rates by action and reason compared after two quarters.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A reviewed mapping from churn reasons to actions is shown on the at-risk list, and save rates by action and reason are compared after two quarters."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Draft a table pairing each churn reason with a preferred action"
                - "Review the table with the retention lead and two success managers"
                - "Show the preferred action beside each flagged customer"
                - "Compare save rates by action and reason after two quarters"
            - name: First retention experiment readout
              description: |-
                ## Purpose
                The first proper readout, flagged customers who were treated against flagged customers held out, is the moment the churn programme proves itself or learns what to change. Planning the sample, the date the horizon closes, the analysis and the audience in advance stops the result being argued about afterwards. Expect a smaller effect than the team hopes for.

                ## Milestones
                1. The analysis plan written before outcomes are known: metric, comparison and test.
                2. Sample sizes checked against the effect the business would care about.
                3. The readout held once the horizon has closed for the first treated cohort.
                4. Decisions recorded: continue, change the actions or change the targeting.

                ## Notes
                If the holdout is too small to detect a realistic effect, say so in the readout rather than reporting a noisy number as a win.
              priority: high
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A pre-written analysis plan is followed, the readout is held after the first horizon closes, and its decisions are recorded."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write the readout analysis plan before any outcomes are in"
                - "Check the sample size against the smallest effect worth acting on"
                - "Book the readout for the week after the first horizon closes"
                - "Record the continue, change or stop decisions"
            - name: Churn model launch review with customer success leadership
              description: |-
                ## Purpose
                Before the first list goes out, the people whose teams will act on it should see what it does, how often it will be wrong and what is expected of them. A 45-minute review with example accounts, precision at capacity, the holdout rule and the feedback route sets expectations and gets sign-off. Skipping it usually means the list is quietly ignored.

                ## Milestones
                1. A short pack with example flagged accounts and their reasons.
                2. Expected precision at capacity and the benchmark comparison shown plainly.
                3. The holdout rule and feedback route explained and accepted.
                4. Go-live date and named owners agreed and minuted.

                ## Notes
                Start from the **Meeting notes** template.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The launch review is held, minuted, and records an agreed go-live date, owners and acceptance of the holdout rule."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick five example accounts that show both hits and false alarms"
                - "Ask the agent to draft the review pack from the model brief and results"
                - "Hold the 45-minute review with customer success leadership"
                - "Record the go-live date and owners in the meeting notes"
            - name: Renewal season churn push
              description: |-
                ## Purpose
                Businesses with annual contracts often see a large share of renewals land in one or two quarters. A dedicated push ahead of that season, scoring every renewing account early, agreeing extra capacity and tracking saves week by week, concentrates the model where the money is. Run it the same way each year so results can be compared.

                ## Milestones
                1. Every account renewing in the season scored at least 90 days before its renewal date.
                2. Extra capacity agreed with sales or account management for the season.
                3. A weekly tracker of renewal outcomes against predicted risk.
                4. A season review comparing results with the previous year.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "All renewing accounts are scored at least 90 days ahead, outcomes are tracked weekly, and a season review compares with the prior year."
                cadence: cyclic
                effort_hours_estimate: "15"
              tasks:
                - "List the months where most renewals fall"
                - "Score every account renewing in the next season 90 days ahead @recurring(yearly)"
                - "Agree extra season capacity with account management"
                - "Write the season review comparing with last year"
            - name: Churn risk assessment before a price increase
              description: |-
                ## Purpose
                Price rises are the moment churn models are most needed and least reliable, because the model has rarely seen one. Before the announcement, combine churn scores with price sensitivity signals, past reactions to price changes and contract timing to estimate who is most at risk, then plan outreach to the high-value ones. Afterwards, compare the estimate with what happened.

                ## Milestones
                1. Past price changes and the churn that followed analysed by segment.
                2. Customers ranked by combined churn score and size of their price change.
                3. An outreach plan agreed for the highest-risk, highest-value accounts before announcement.
                4. A post-change comparison of predicted and actual churn written up.

                ## Notes
                The model has learnt from a period without this price. Treat its scores as a starting ranking, not a forecast of the reaction.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A ranked at-risk list and outreach plan exist before the announcement, and a post-change comparison of predicted and actual churn is written."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pull churn after each past price change by segment"
                - "Rank customers by churn score and size of their price change"
                - "Agree outreach for the top accounts with the retention lead"
                - "Compare predicted and actual churn three months after the change"
            - name: Post-mortem of a churn the model missed
              description: |-
                ## Purpose
                Sooner or later a large customer leaves with a low score, and the question in the room is whether the model can be trusted. A blameless post-mortem that reconstructs what the data showed at each scoring date, what success managers knew and why the model missed it turns a bad week into new features, data sources or process changes.

                ## Milestones
                1. A timeline of the account's scores, signals and contacts before it churned.
                2. The reasons the model missed it classified: missing data, rare pattern, leakage fix or bad luck.
                3. Remediation actions agreed with owners and dates.
                4. A short note shared with the retention team on what changes.

                ## Notes
                Start from the **Remediation plan** template. Some churn is genuinely unpredictable from the data you hold; saying so is a valid finding.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A post-mortem with a timeline, classified causes and dated remediation actions is shared with the retention team."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Rebuild the account's score and signal history for the last six scoring dates"
                - "Interview the success manager who owned the account"
                - "Classify why the model missed the churn"
                - "Create the remediation plan with owners and dates"
            - name: Quarterly churn outlook for leadership
              description: |-
                ## Purpose
                Leaders need a short, consistent view: expected churn next quarter by segment, revenue at risk, what the retention programme saved and what it cost. Producing the same four-page pack every quarter, with ranges rather than single numbers, builds trust in the model and keeps funding for the retention team tied to evidence.

                ## Milestones
                1. A four-page pack layout agreed with the leadership audience.
                2. Expected churn and revenue at risk by segment for the next quarter, with ranges.
                3. Saved revenue and action cost from the ledger included.
                4. Four consecutive quarterly packs delivered.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Four quarterly churn outlook packs are delivered with segment forecasts, ranges, saved revenue and action cost."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Agree the four-page layout with the leadership sponsor"
                - "Build the next quarter's churn and revenue at risk by segment"
                - "Deliver the quarterly churn outlook pack @recurring(quarterly)"
                - "Note the questions leaders asked for the next pack"
            - name: First churn model for a small team
              description: |-
                ## Purpose
                Small businesses with a few hundred customers and one analyst do not need a feature store. A spreadsheet or single notebook with tenure, plan, recent usage trend and support contacts, scored monthly and reviewed in a short call, catches most of what a heavier build would. The aim is a working routine in a month, with room to grow later.

                ## Milestones
                1. Five to eight signals pulled into one table for every active customer.
                2. A simple logistic regression or points-based rule scored against last year's churn.
                3. A monthly list of the top 20 at-risk customers shared with whoever talks to customers.
                4. Three months of outcomes compared with the list.

                ## Notes
                With few churn events, keep the model simple. Ten signals on fifty churners will overfit.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A simple model scores every customer monthly, the top 20 list is shared, and three months of outcomes are compared with it."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Pull tenure, plan, usage trend and support contacts into one table"
                - "Fit a simple logistic regression or points rule on last year's churn"
                - "Share the top 20 at-risk customers with whoever talks to them"
                - "Compare three months of churn with the lists"
            - name: Engineer owning the monthly churn scoring job
              description: |-
                ## Purpose
                When a data scientist hands over a churn notebook, the engineer inherits its hidden assumptions: hard-coded dates, a snapshot built from today's tables, a random seed that changes the holdout. Turning it into a scheduled job with a fixed scoring date parameter, pinned model version, input checks and an output table the CRM can read is a specific, bounded piece of work.

                ## Milestones
                1. Every hard-coded date in the notebook replaced with a scoring date parameter.
                2. The model artefact and feature code versioned together.
                3. Input row count and freshness checks that stop the run on failure.
                4. A rerun for a past scoring date that reproduces the original scores exactly.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A scheduled job scores any given date, stops on failed input checks, and reproduces a past month's scores exactly."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Search the notebook for hard-coded dates and list them"
                - "Replace them with a single scoring date parameter"
                - "Add row count and freshness checks that stop the run"
                - "Rerun a past month and confirm the scores match exactly"
            - name: Academic churn study with a data partner
              description: |-
                ## Purpose
                Researchers studying churn usually depend on a company sharing subscription data, which brings data agreements, anonymisation, publication review and a need for results that hold up beyond one firm. Planning the study as a pre-registered analysis, with the partner's constraints written in, protects both the paper and the relationship.

                ## Milestones
                1. A data sharing agreement signed covering fields, anonymisation and publication review.
                2. A pre-registered analysis plan with hypotheses, definition and horizon.
                3. Results replicated on a second time period or second partner where possible.
                4. The partner's publication review completed before submission.

                ## Notes
                Agree the churn definition with the partner in writing. Reviewers will ask, and changing it later invalidates the pre-registration.
              priority: low
              deadlineOffsetDays: 240
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A signed data agreement, a pre-registered plan and a manuscript cleared by the partner's publication review are in place."
                cadence: phased
                effort_hours_estimate: "80"
              tasks:
                - "List the fields and history the study needs from the partner"
                - "Draft the data sharing agreement with anonymisation and review terms"
                - "Pre-register the hypotheses, churn definition and horizon"
                - "Submit the draft to the partner's publication review"
            - name: Account-level churn in B2B products
              description: |-
                ## Purpose
                In B2B, users leave long before the account does: the champion moves jobs, a team stops logging in, seats are cut at renewal. Rolling user signals up to the account, with features such as share of seats active, champion activity and number of departments using the product, predicts account churn far better than averaging user logins.

                ## Milestones
                1. User-to-account mapping checked, including users on several accounts.
                2. Account features built from user activity: active seat share, admin activity, breadth of use.
                3. Champion or primary contact changes captured as a signal where the CRM records them.
                4. Account-level model compared with a user-average baseline.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Account-level features including active seat share and champion change are built, and the account model beats a user-average baseline at capacity."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Check how users map to accounts and fix duplicates"
                - "Build active seat share and admin activity per account"
                - "Add champion or main contact changes from the CRM"
                - "Compare the account model with a user-average baseline"
            - name: Customer success team adopting churn scores
              description: |-
                ## Purpose
                For a success team used to judgement and gut feel, a model can feel like surveillance or a threat. A short adoption plan with a pilot pod, a clear statement that scores guide rather than grade, training on reading reasons, and visible credit when the team's feedback improves the model makes the change stick.

                ## Milestones
                1. A pilot group of three to five success managers using scores for six weeks.
                2. A one-page guide on reading scores and reasons.
                3. A written statement from leadership that scores will not be used to grade individuals.
                4. Pilot feedback summarised and a go or no-go for the whole team recorded.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A six-week pilot runs with a written guide and leadership statement, and a whole-team go or no-go is recorded from pilot feedback."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Choose three to five success managers for a six-week pilot"
                - "Write a one-page guide to reading scores and reasons"
                - "Ask leadership to state in writing that scores will not grade people"
                - "Collect pilot feedback and record the go or no-go"
            - name: Churn in usage-based and pay-as-you-go products
              description: |-
                ## Purpose
                When customers pay for what they use, there is often no cancellation at all, only spend drifting towards zero. Defining churn as a sustained fall in usage or spend, and predicting partial contraction as well as full exit, fits these businesses far better than a subscription template. The definition has to cope with natural seasonal swings.

                ## Milestones
                1. A churn and contraction rule based on spend relative to each customer's own trailing average.
                2. Seasonal patterns removed or modelled so normal dips are not flagged.
                3. A model predicting contraction and full churn as separate outcomes.
                4. Revenue at risk estimated from predicted contraction.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A spend-based churn and contraction rule that accounts for seasonality is in use, with a model predicting both and revenue at risk estimated."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Plot spend over time for 30 customers who left"
                - "Define churn and contraction relative to each customer's trailing average"
                - "Adjust for seasonal swings so normal dips are not flagged"
                - "Estimate revenue at risk from predicted contraction"
            - name: Retention offer uplift model
              description: |-
                ## Purpose
                Those most likely to churn are not always the customers a retention offer will save: some leave anyway, some would stay regardless, and a few are prompted to leave by being contacted. An uplift model trained on treated and holdout customers estimates who actually responds to the action, so offers go where they change the outcome. It needs several months of clean holdout data first.

                ## Milestones
                1. At least three months of randomised treated and holdout customers with matured outcomes.
                2. A two-model or meta-learner uplift model fitted.
                3. Qini or uplift curves showing gain over targeting by churn score alone.
                4. A targeting test where the uplift model chooses who gets the offer.

                ## Notes
                Uplift models need randomised data. Training on customers the team chose to treat will find the team's habits, not the offer's effect.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "An uplift model trained on randomised data shows gain over churn-score targeting on a Qini curve and is put into a live targeting test."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Confirm three months of randomised treated and holdout data have matured"
                - "Fit a two-model uplift baseline"
                - "Draw Qini curves against targeting by churn score"
                - "Design a live test where uplift chooses who receives the offer"
            - name: Competing risks for downgrade, pause and cancel
              description: |-
                ## Purpose
                A customer at risk can downgrade, pause, switch to a cheaper plan or cancel outright, and each calls for a different response. Treating them as competing outcomes, with cause-specific hazards or a multi-class model, shows which path each customer is heading down and stops a downgrade being counted as either success or failure by accident.

                ## Milestones
                1. Outcomes coded as downgrade, pause, cancel or stay for each snapshot.
                2. Cumulative incidence curves drawn for each outcome.
                3. A competing risks or multi-class model fitted and compared with the binary model.
                4. Action mapping updated with a response for each predicted path.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Competing outcomes are coded, cumulative incidence curves drawn, a competing risks model compared with the binary model, and actions mapped per path."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Code each snapshot's outcome as downgrade, pause, cancel or stay"
                - "Draw cumulative incidence curves for each outcome"
                - "Fit a competing risks model and compare it with the binary model"
                - "Add a response for each predicted path to the action mapping"
            - name: Churn contagion within networks and accounts
              description: |-
                ## Purpose
                Churn can spread: when one member of a household, team or referral network leaves, the others are more likely to follow. Features built from the churn of connected customers, such as share of a customer's network that left in the last 60 days, can add real signal in telecoms, social products and multi-team accounts, but they are easy to leak and hard to explain.

                ## Milestones
                1. A connection graph built from shared accounts, referrals or communication data you are allowed to use.
                2. Network churn features computed strictly from churn before the scoring date.
                3. Lift from network features measured over the current model.
                4. A privacy and explainability review of the new features recorded.

                ## Notes
                Check with your data protection owner before using contact or communication data. Aggregated counts are usually safer than individual links.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Point-in-time network churn features are built, their lift over the current model is measured, and a privacy review is recorded."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List the connection data you are permitted to use"
                - "Build network churn features from churn before each scoring date"
                - "Measure lift over the current model at capacity"
                - "Record the privacy and explainability review"
---

# Churn Prediction Models

This area is for the people who have to spot leaving customers before they go: the data scientist asked for a churn score, the engineer who will run it every month and the customer success or retention team who must act on the list. It starts with foundations (a written churn definition, the prediction horizon, the retention actions that actually exist, base rates, point-in-time snapshots and a leakage check), then the monthly machinery of scoring, matured outcome reviews and holdout groups, the skills from survival curves to precision at capacity, decisions such as revenue weighting, thresholds and build versus buy, dated events like the first retention experiment readout, situations for small teams, engineers, researchers and B2B accounts, and finally specialist work on uplift, competing risks and churn that spreads between customers.

What repeats is a weekly at-risk huddle with customer success, a monthly scoring run, matured outcome review, score distribution check, churn reason coding and saved revenue ledger, quarterly holdout, refresh and risk reviews, and a yearly renewal season push. The Risk register, Metrics log, Reading queue, Purchase decision, Meeting notes and Remediation plan templates pair with the model risks, the saved revenue ledger, the reading programme, vendor score evaluation, the launch review and the post-mortem of a churn the model missed. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
