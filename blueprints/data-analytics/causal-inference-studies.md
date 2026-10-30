---
id: data-analytics.causal-inference-studies
name: Causal Inference Studies
description: "Causal questions turned into estimands, diagrams and written plans, then answered with difference in differences, matching, synthetic control and other quasi-experimental designs, with assumptions checked and stated."
category: business
version: 1.0.0
tags: [data-analytics, causal-inference-studies, researcher, knowledge-worker, observational-studies, difference-in-differences, matching, quasi-experiments]
author: Aurum Technology
starter_structure:
  templates:
    - meeting-notes
    - reading-queue
    - risk-register
    - development-plan
  pillars:
    - name: Data & Analytics
      emoji: "📊"
      description: "Turning data into decisions: metrics and dashboards, data pipelines and warehouses, experimentation, forecasting and modelling, machine learning, data quality and governance."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Causal Inference Studies
          description: "Estimating the true effect of a change when experiments are impossible, using techniques like difference in differences and matching."
          projects:
            - name: Inventory of decisions waiting on a causal answer
              description: |-
                ## Purpose
                Most organisations carry a backlog of questions phrased as did it work: the loyalty scheme, the new onboarding call, the regional price change, the leadership course. Listing them with the decision each one feeds, who is asking and when the answer is needed shows which deserve a proper study and which only need a description of what happened.

                ## Milestones
                1. A list of at least ten did-it-work questions, each tied to a named decision and its owner.
                2. Each question marked with when the decision will be made and what it would change.
                3. Questions whose decision will not change whatever the answer separated out and closed.
                4. The top three questions chosen for a causal study, with the reasons written down.

                ## Notes
                A question nobody will act on is not worth an estimate. Ask the owner what result would change their mind before committing weeks of work.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written inventory of at least ten causal questions, each with a decision owner, and three chosen for study with reasons recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every did-it-work question you have been asked in the last six months"
                - "Write beside each one the decision it feeds and who makes it"
                - "Ask each owner what answer would change what they do"
                - "Pick the three questions most worth a proper study"
                - "Revisit the question list and drop any that have gone stale @recurring(quarterly)"
            - name: Turning a causal question into a precise estimand
              description: |-
                ## Purpose
                Asking whether the loyalty scheme increased spending hides choices that change the answer: increased it for whom, compared with what, measured over how long. Writing the estimand down, with the treated population, the comparison, the outcome, the time horizon and whether you want the average effect on everyone or on those treated, prevents a correct analysis of the wrong question.

                ## Milestones
                1. The question rewritten as one sentence naming population, treatment, comparison, outcome and horizon.
                2. A choice recorded between the average effect on the whole population and the effect on the treated, with the reason.
                3. The decision owner has read and agreed the estimand in writing.
                4. Anything deliberately out of scope listed, such as long-run effects or other markets.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-paragraph estimand naming population, treatment, comparison, outcome, horizon and effect type, agreed in writing by the decision owner."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the causal question for your first study as one plain sentence"
                - "Name the population, treatment, comparison, outcome and time horizon separately"
                - "Decide whether the decision needs the effect on all units or on treated units only"
                - "Send the estimand to the decision owner and get a written yes"
            - name: Record of why a randomised experiment is ruled out
              description: |-
                ## Purpose
                Observational designs need stronger assumptions than a randomised test, so the first honest step is checking whether randomisation really is off the table. Recording the reason, whether the change already shipped to everyone, randomising would be unethical or unlawful, the unit is a whole country or the sample is too small, stops the team defaulting to a weaker design out of habit.

                ## Milestones
                1. The experiment option discussed with the team that owns the change.
                2. The specific barrier written down: already rolled out, ethics, law, unit size or cost.
                3. Partial options considered, such as randomising the order of a phased rollout.
                4. The decision to proceed observationally recorded with the date and who agreed.

                ## Notes
                Randomising the timing of a rollout that will reach everyone anyway is often acceptable when randomising access is not. Ask before assuming the answer is no.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A dated note stating why a randomised experiment was ruled out, which partial options were considered and who agreed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the change owner whether any part of the rollout could still be randomised"
                - "Write down the specific reason a full experiment is ruled out"
                - "Check whether a randomised rollout order is possible instead"
                - "Record the decision and who agreed it in the study folder"
            - name: First causal diagram of treatment, outcome and confounders
              description: |-
                ## Purpose
                A causal diagram, or directed acyclic graph, makes your assumptions visible: which factors drive both who gets the treatment and the outcome, and which variables must not be adjusted for. Drawing it with two or three people who know the process, a store manager, a clinician or a product owner, surfaces confounders the data team would never think of.

                ## Milestones
                1. A diagram with the treatment, the outcome and every common cause the group could name.
                2. Mediators and possible colliders marked so they are not adjusted for by mistake.
                3. An adjustment set derived from the diagram and checked in a free tool such as DAGitty.
                4. Variables in the diagram that no dataset measures flagged as gaps.

                ## Notes
                Start from the **Meeting notes** template. A diagram drawn alone by the analyst usually misses the reasons people select themselves into treatment.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A causal diagram reviewed by at least two domain experts, with a documented adjustment set and unmeasured variables flagged."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Sketch the treatment, outcome and obvious common causes on one page"
                - "Book a 60-minute session with two people who run the process day to day"
                - "Mark mediators and colliders that must stay out of the adjustment set"
                - "Enter the diagram into a DAG tool and record the minimal adjustment set"
            - name: Treatment exposure and timing definition
              description: |-
                ## Purpose
                Who counts as treated, and from what date, is rarely as clear as it looks: staff trained in week one but rostered in week six, customers who opted in and never used the feature, branches that switched over halfway through a month. A written exposure rule, applied the same way to every unit, is the backbone of every design in this area.

                ## Milestones
                1. A rule stating what counts as treated, at what intensity and from which date.
                2. Edge cases written down: partial uptake, switching back, late adopters and never-takers.
                3. A treatment table with one row per unit and its exposure start date.
                4. A sample of twenty units checked by hand against source records.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A treatment table with an exposure date for every unit, built from a written rule, with a twenty-row hand check passed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the rule for what makes a unit treated and from which date"
                - "List the awkward cases such as partial uptake and units that switched back"
                - "Build a treatment table with one row per unit and its start date"
                - "Hand-check twenty rows against the source system"
                - "Reconcile the treatment table with the rollout log for new adopters @recurring(monthly:11)"
            - name: Outcome measure and follow-up window
              description: |-
                ## Purpose
                Choosing the outcome after seeing the results is the quietest way to fool yourself. Fixing the outcome metric, how it is calculated and the window over which it is measured, for example 90 days of spending after enrolment, before any comparison is run keeps the study honest and the result comparable with later ones.

                ## Milestones
                1. One primary outcome chosen, with its exact calculation and source table.
                2. Up to three secondary outcomes listed and labelled as secondary.
                3. A follow-up window chosen that matches when the effect could plausibly appear.
                4. The choices dated and stored before any treated versus untreated comparison is run.

                ## Notes
                If the metric already has an agreed definition elsewhere in the business, use it rather than inventing a study-specific version.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A dated outcome specification with one primary outcome, its window and calculation, written before any treated versus untreated results were seen."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Choose one primary outcome and write its exact calculation"
                - "List no more than three secondary outcomes"
                - "Pick a follow-up window that fits how quickly the effect could show"
                - "Date-stamp the outcome choices before running any comparison"
            - name: Confounder data audit against the diagram
              description: |-
                ## Purpose
                Every adjustment method assumes the confounders are measured, measured before treatment and measured well. Auditing each variable in the causal diagram against the data you actually hold shows early whether the study is feasible, needs a different design or needs a new data source.

                ## Milestones
                1. Each confounder in the diagram mapped to a column, a proxy or marked missing.
                2. The timing of each variable checked so nothing recorded after treatment is used for adjustment.
                3. Missingness rates and obvious quality problems recorded per variable.
                4. A feasibility verdict written: proceed, proceed with a named weakness, or switch design.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An audit table covering every confounder in the diagram, with timing and missingness checked, and a written feasibility verdict."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every confounder from the causal diagram in a single table"
                - "Map each one to a column, a proxy or a gap"
                - "Check that each variable is recorded before the treatment date"
                - "Note missingness and quality problems for each variable"
                - "Write a one-paragraph feasibility verdict for the study lead"
            - name: Choosing the identification strategy
              description: |-
                ## Purpose
                The design follows from how treatment was assigned. A rollout region by region points to difference in differences, an eligibility cut-off to regression discontinuity, a single treated market to synthetic control, and rich pre-treatment data on everyone to matching or weighting. Writing down why one design fits and the others do not gives reviewers something concrete to challenge.

                ## Milestones
                1. A plain description of how units actually came to be treated.
                2. At least three candidate designs compared against that assignment story.
                3. The key assumption of the chosen design stated, with how it will be checked.
                4. A fallback design named in case the main assumption fails its checks.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A design decision note comparing three designs, naming the chosen one's key assumption, its checks and a fallback."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Describe in a paragraph how units ended up treated or untreated"
                - "Compare at least three designs against that assignment story"
                - "Write the key untestable assumption of the chosen design"
                - "Name a fallback design in case the main checks fail"
            - name: Causal analysis toolkit and environment
              description: |-
                ## Purpose
                Mature open-source libraries exist for most designs here, such as MatchIt, fixest, did, rdrobust and Synth in R, or DoWhy, EconML and linearmodels in Python. Setting up one environment with pinned versions, tested on a textbook example with a known answer, means the first real study is not also the first time the code runs.

                ## Milestones
                1. One language chosen for causal work and its libraries installed with versions pinned.
                2. A textbook dataset with a published answer reproduced for at least two designs.
                3. A study folder template with places for the estimand, diagram, code and results.
                4. The environment file stored where colleagues can rebuild it.

                ## Notes
                Reproducing a published example is the cheapest test that you understand a package's defaults, which differ more than people expect, for example in how standard errors are clustered.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A pinned environment that reproduces two published textbook results, with a study folder template ready for use."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose R or Python for causal work and list the libraries you need"
                - "Install the libraries and pin their versions in an environment file"
                - "Reproduce a published textbook example for two designs"
                - "Create a study folder template for future studies"
                - "Update the pinned library versions and rerun the textbook examples @recurring(yearly)"
            - name: Pre-analysis plan for an observational study
              description: |-
                ## Purpose
                With observational data there are dozens of defensible specifications, and choosing among them after seeing results inflates confidence in whichever looks best. A short plan written before outcomes are examined, covering the estimand, design, adjustment set, checks and what would count as no effect, protects both the study and the analyst.

                ## Milestones
                1. A plan of two to four pages covering estimand, design, data, model and checks.
                2. Planned placebo and sensitivity checks listed, with what each would reveal.
                3. The plan timestamped in a shared folder or a public registry such as OSF.
                4. Every later deviation logged with its reason.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A timestamped pre-analysis plan exists from before outcome data were examined, with a deviations log beside it."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the agent to turn your estimand and design notes into a plan outline"
                - "List the placebo and sensitivity checks you will run"
                - "Timestamp the finished plan in a shared folder or public registry"
                - "Start a deviations log beside the plan"
            - name: Causal study register and evidence library
              description: |-
                ## Purpose
                Six months after a study, the question comes back in a slightly different form and nobody can find the estimate, its assumptions or the code. A register with one row per study, holding its estimand, design, result with interval, strength of evidence and links to the files, turns past work into something the organisation can build on.

                ## Milestones
                1. A register with columns for question, estimand, design, estimate, interval, evidence grade and owner.
                2. Every study from the last two years entered, including inconclusive ones.
                3. A link to the code and data snapshot for each entry.
                4. The register consulted during the planning of at least one new study.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A register holding every causal study from the last two years with estimates, intervals and links, updated monthly for six months."
                cadence: rolling
              tasks:
                - "Create the register with question, design, estimate and evidence grade columns"
                - "Enter every causal study completed in the last two years"
                - "Add new and updated studies to the register @recurring(monthly:14)"
                - "Mark entries whose decisions have been superseded @recurring(quarterly)"
            - name: Natural experiment watchlist
              description: |-
                ## Purpose
                Many of the best quasi-experiments are accidents: a system outage in one region, a policy that applied from a birth date, a price change in one country, a rule triggered at a headcount threshold. Keeping a running list of such events as they happen, with dates and the data needed, catches them while the pre-period records still exist.

                ## Milestones
                1. A watchlist with event, date, units affected, likely comparison group and data source.
                2. Change logs, release notes and policy announcements scanned every month.
                3. At least five candidate natural experiments logged.
                4. One candidate turned into a scoped study proposal.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A watchlist with at least five logged candidate natural experiments, scanned monthly, and one turned into a written study proposal."
                cadence: rolling
              tasks:
                - "Set up a watchlist with event, date, affected units and comparison group"
                - "Subscribe to the release note and policy change channels for your field"
                - "Scan change logs and announcements for usable natural experiments @recurring(monthly:3)"
                - "Write a half-page study proposal for the most promising candidate"
            - name: Evaluability review for planned launches
              description: |-
                ## Purpose
                The cheapest moment to make a change measurable is before it ships. A monthly half hour with product, operations or policy teams to look at what is launching, and to suggest a staggered start, a held-back region or a clean eligibility rule, turns future causal studies from guesswork into designed comparisons.

                ## Milestones
                1. A standing slot agreed with the teams that plan launches.
                2. A short checklist covering rollout order, holdback options, logging and pre-period data.
                3. At least three launches adjusted to be easier to evaluate.
                4. The resulting rollout designs noted in the causal study register.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Six monthly evaluability reviews held, with at least three launches given a staggered start, holdback or clean eligibility rule."
                cadence: rolling
              tasks:
                - "Agree a monthly half hour with the teams that plan launches"
                - "Write a five-question evaluability checklist for upcoming changes"
                - "Review next month's launches against the evaluability checklist @recurring(monthly:20)"
                - "Record each agreed rollout design in the study register"
            - name: Weekly causal inference reading and replication
              description: |-
                ## Purpose
                Methods in this field have moved fast in the last decade, especially for difference in differences with staggered timing and for machine learning estimators. Reading one paper or chapter a week, and replicating a published result each quarter, keeps your toolkit current and your judgement honest about what a method can and cannot do.

                ## Milestones
                1. A reading queue seeded with a free textbook and five key papers.
                2. One item read and summarised in three lines each week.
                3. One published result replicated from its replication files each quarter.
                4. Lessons that change default practice written into the team's standards.

                ## Notes
                Start from the **Reading queue** template. Free textbooks such as Causal Inference: The Mixtape and Causal Inference: What If make good first entries.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve weekly summaries and one quarterly replication completed, with at least one change to default practice recorded."
                cadence: rolling
              tasks:
                - "Seed a reading queue with one free textbook and five papers"
                - "Read one item and write a three-line summary @recurring(weekly:wed)"
                - "Replicate one published result from its replication files @recurring(quarterly)"
            - name: Quarterly look-back on past causal estimates
              description: |-
                ## Purpose
                An estimate made last year can be checked against what happened next: did the scaled-up programme deliver the predicted lift, did a later experiment agree with the observational result? A quarterly look-back at two or three past studies calibrates how far to trust each design in your own setting.

                ## Milestones
                1. Two or three past studies selected each quarter where later evidence now exists.
                2. Each original estimate compared with the later outcome or experiment.
                3. Gaps explained as design failure, changed conditions or chance.
                4. A running note of which designs held up best in your data.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "Four quarterly look-backs completed, each comparing at least two past estimates with later evidence and recording the lessons."
                cadence: cyclic
              tasks:
                - "Pick three past studies where later outcomes are now known"
                - "Compare each original estimate with what happened afterwards @recurring(quarterly)"
                - "Write a short note on which designs held up and why"
            - name: Peer review of causal claims before release
              description: |-
                ## Purpose
                A second analyst who did not build the study spots the post-treatment control, the missing pre-trend plot or the outcome window that quietly moved. A simple rota, where every causal claim heading to a decision-maker gets a named reviewer and a checklist, catches most of these before they reach a slide.

                ## Milestones
                1. A review checklist covering estimand, design assumptions, checks and the wording of the claim.
                2. A rota or pairing so every study has a named reviewer.
                3. Every causal result shared in the last quarter reviewed before release.
                4. Reviewer comments and responses kept in each study folder.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every causal result released in a quarter has a completed review checklist and filed responses from a named reviewer."
                cadence: rolling
              tasks:
                - "Write a ten-point checklist for reviewing a causal study"
                - "Pair each analyst with a reviewer for the coming quarter"
                - "Check the review pairings and reassign any blocked reviews @recurring(monthly:9)"
                - "File reviewer comments and responses in each study folder"
            - name: Evidence grade on every business case
              description: |-
                ## Purpose
                Business cases routinely cite the effect of a past initiative as if it were proven, when the evidence is a before-and-after chart or a supplier's case study. Asking for an evidence grade on each claimed effect, from anecdote through quasi-experimental to randomised, shows sponsors and approvers which numbers can carry a budget and which need a study first.

                ## Milestones
                1. A four-step evidence ladder defined with one example for each step.
                2. An evidence grade field added to the business case template.
                3. New business cases graded each month for six months.
                4. At least three cases resting on weak evidence sent back with a suggested study.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six months of business cases carry an evidence grade on each claimed effect, with weak claims returned to sponsors with a suggested study."
                cadence: rolling
              tasks:
                - "Define a four-step evidence ladder from anecdote to randomised"
                - "Add an evidence grade field to the business case template"
                - "Grade the claimed effects in new business cases @recurring(monthly:24)"
                - "Flag cases resting only on before-and-after comparisons to their sponsor"
            - name: Pre-period data snapshots before records are overwritten
              description: |-
                ## Purpose
                Many systems overwrite history: a customer's segment, a branch's manager, a product's list price. Without a dated snapshot, the pre-treatment state a study needs is simply gone. A monthly snapshot of the slowly changing attributes your studies rely on costs little storage and saves whole studies.

                ## Milestones
                1. The attributes most often needed as pre-treatment covariates listed.
                2. Source tables that overwrite those attributes identified with the data engineers.
                3. A dated monthly snapshot of each one running and checked.
                4. Snapshot retention agreed with whoever owns data retention rules.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Dated monthly snapshots of every listed pre-treatment attribute have run for six months, with retention agreed."
                cadence: rolling
              tasks:
                - "List the attributes your studies need as of the treatment date"
                - "Ask data engineering which source tables overwrite those attributes"
                - "Confirm the month's dated snapshot ran with normal row counts @recurring(monthly:28)"
                - "Agree how long snapshots are kept with the data retention owner"
            - name: Annual evaluation agenda with leadership
              description: |-
                ## Purpose
                Causal studies take weeks, so a small team can deliver perhaps four to eight good ones a year. Agreeing each year which programmes, policies or launches get a proper evaluation, and which get only monitoring, keeps scarce capacity on the decisions with the most money or risk attached.

                ## Milestones
                1. A long list of candidate evaluations with the spend or risk each one touches.
                2. Each candidate scored on decision value, feasibility and timing.
                3. Four to eight evaluations agreed with leadership for the year.
                4. The agenda published and revisited halfway through the year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A written annual evaluation agenda of four to eight studies, agreed with leadership and revisited at mid-year."
                cadence: cyclic
              tasks:
                - "Compile candidate evaluations with the spend or risk each touches"
                - "Score each candidate on decision value, feasibility and timing"
                - "Agree the year's evaluation agenda with leadership @recurring(yearly)"
                - "Publish the agenda where requesting teams can see it"
            - name: Potential outcomes and counterfactual thinking
              description: |-
                ## Purpose
                Every method in this area is a way of estimating what would have happened to the treated units without the treatment, an outcome nobody ever observes. Working through the potential outcomes framework with small worked examples makes selection bias, the effect on the treated and the no-interference assumption feel concrete rather than abstract.

                ## Milestones
                1. The potential outcomes notation and the fundamental problem of causal inference explained in your own words.
                2. A worked example where a naive comparison is biased, with the size of the bias calculated.
                3. The difference between the average effect, the effect on the treated and conditional effects written down.
                4. The consistency and no-interference assumptions stated for your own study.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A worked toy example showing naive bias, plus a written statement of the consistency and no-interference assumptions for your study."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Read the opening chapters of a free causal inference textbook"
                - "Build a ten-row toy table with both potential outcomes for every unit"
                - "Calculate how far a naive treated versus untreated comparison is biased"
                - "Write the assumptions your own study relies on in plain words"
            - name: Confounders, colliders and mediators in causal diagrams
              description: |-
                ## Purpose
                Adjusting for more variables is not always safer: controlling for a mediator removes part of the effect, and controlling for a collider can create bias out of nothing. Learning the backdoor criterion and practising on ten small diagrams gives you a reliable way to choose what goes into a model.

                ## Milestones
                1. Backdoor paths, colliders and mediators explained with one drawn example each.
                2. Ten practice diagrams solved for their adjustment set and checked against a DAG tool.
                3. One past analysis reviewed for bad controls.
                4. A one-page cheat sheet saved for the team.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten practice diagrams solved correctly and one past analysis checked for bad controls, with a team cheat sheet saved."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Learn the backdoor criterion from a textbook chapter or short course"
                - "Solve ten practice diagrams and check each one with a DAG tool"
                - "Review one past analysis for mediators or colliders used as controls"
                - "Write a one-page cheat sheet on good and bad controls"
            - name: Difference in differences and parallel trends
              description: |-
                ## Purpose
                Difference in differences is the workhorse design for rollouts that reach some units and not others, and it rests on one assumption: without treatment, the two groups would have moved in parallel. Learning to estimate it with unit and time fixed effects, plot an event study and read pre-trends critically is the skill most studies in this area will need.

                ## Milestones
                1. The two-by-two difference in differences calculated by hand on a small table.
                2. The same estimate reproduced with a regression including unit and time fixed effects.
                3. An event study plot produced with leads and lags around treatment.
                4. The limits of pre-trend tests understood: passing them does not prove parallel trends.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A hand calculation, a matching regression estimate and an event study plot produced on a public dataset, with notes on pre-trend limits."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Calculate a two-by-two difference in differences by hand on a small table"
                - "Reproduce it with a fixed effects regression in your toolkit"
                - "Plot an event study with leads and lags on a public dataset"
                - "Write a paragraph on what a flat pre-trend does and does not prove"
            - name: Staggered adoption and modern difference in differences estimators
              description: |-
                ## Purpose
                When units adopt a change at different times, the classic two-way fixed effects regression can compare late adopters with early adopters and give a misleading, even wrong-signed, answer. Newer estimators such as those of Callaway and Sant'Anna, Sun and Abraham, or the imputation approach avoid this, and reviewers now expect you to know when to use them.

                ## Milestones
                1. The problem with two-way fixed effects under staggered timing shown on a simulated example.
                2. A decomposition run to see which comparisons drive a classic estimate.
                3. At least one modern estimator applied to the same data.
                4. A team default written for analysing staggered rollouts.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A simulation showing classic two-way fixed effects bias, the same data analysed with a modern estimator, and a written team default."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Simulate a staggered rollout where effects grow over time"
                - "Run a decomposition to see which comparisons drive the classic estimate"
                - "Apply one modern staggered estimator to the same simulated data"
                - "Write the team default for analysing staggered rollouts"
            - name: Propensity score matching and weighting with balance checks
              description: |-
                ## Purpose
                When treatment depended on things you measured, such as tenure, prior spend or region, matching or weighting can build a comparison group that looks like the treated one. The skill lies less in fitting the propensity model than in checking overlap and balance, and in admitting when no fair comparison exists.

                ## Milestones
                1. Nearest neighbour matching, inverse probability weighting and exact matching each tried on a teaching dataset.
                2. Standardised mean differences reported before and after for every covariate.
                3. Propensity score overlap plotted and units outside common support handled explicitly.
                4. A note written on when matching should be abandoned for another design.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Matching and weighting estimates on a teaching dataset, with balance tables and an overlap plot, close to the published answer."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Fit a propensity model on a teaching dataset with a known answer"
                - "Compare nearest neighbour matching with inverse probability weighting"
                - "Report standardised mean differences before and after for every covariate"
                - "Plot propensity score overlap and decide how to treat units outside it"
            - name: Regression discontinuity around eligibility thresholds
              description: |-
                ## Purpose
                Credit score cut-offs, age limits, test score thresholds and minimum order values for free delivery all assign treatment by a rule, and units just either side are often comparable. Regression discontinuity exploits that, but only if nobody can nudge themselves over the line and the bandwidth is chosen with care.

                ## Milestones
                1. Sharp and fuzzy designs distinguished with one example of each from your own setting.
                2. A density test for manipulation of the running variable run on practice data.
                3. Estimates with data-driven bandwidths produced and plotted.
                4. Estimate stability shown across several bandwidths.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A practice regression discontinuity with a manipulation test, plotted estimates and a bandwidth sensitivity chart, plus a list of local thresholds."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List thresholds in your organisation that decide who gets something"
                - "Run a regression discontinuity on a practice dataset with a bandwidth selector"
                - "Test the running variable for bunching just above the cut-off"
                - "Plot the estimate across a range of bandwidths"
            - name: Instrumental variables and the exclusion restriction
              description: |-
                ## Purpose
                An instrument nudges treatment without affecting the outcome any other way: a randomised encouragement email, distance to a branch, a lottery for places. Instrumental variables can rescue a study with unmeasured confounding, but weak or invalid instruments produce confident nonsense, so the arguments around them matter more than the code.

                ## Milestones
                1. Two-stage least squares estimated on a textbook example and matched to the published result.
                2. First-stage strength reported and weak-instrument diagnostics understood.
                3. The local average treatment effect explained: whose effect the instrument recovers.
                4. Every candidate instrument in your own setting listed with the argument for and against exclusion.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A reproduced textbook IV estimate with first-stage diagnostics and a written assessment of candidate instruments in your own setting."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Reproduce a published two-stage least squares example"
                - "Check first-stage strength and read the weak-instrument diagnostics"
                - "Write who the compliers are and why the estimate applies only to them"
                - "List candidate instruments in your setting with the case against each"
            - name: Synthetic control for a single treated market
              description: |-
                ## Purpose
                When one country, city or flagship store gets the change, there is no group of similar treated units to average over. Synthetic control builds a weighted blend of untreated units that tracks the treated one before the change, its post-period gap is the estimate, and placebo runs on each donor show how unusual that gap is.

                ## Milestones
                1. A synthetic control fitted on a classic published case and its result reproduced.
                2. Pre-period fit inspected and donor weights explained.
                3. Placebo fits run on every donor unit.
                4. The method's limits noted: poor pre-period fit, too few donors, spillovers into donors.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A reproduced synthetic control study with donor weights, pre-period fit and a full set of placebo runs documented."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Reproduce a published synthetic control case from its replication data"
                - "Inspect pre-period fit and the donor weights"
                - "Run placebo fits on every donor and rank the treated unit's gap"
                - "Note the conditions under which you would not trust the result"
            - name: Interrupted time series for a single change date
              description: |-
                ## Purpose
                Sometimes everything changes on one date and there is no untreated comparison: a national policy, a site-wide redesign, a new pricing page for every customer. Segmented regression on a long series can estimate the change in level and slope, provided seasonality, autocorrelation and other events on the same dates are handled.

                ## Milestones
                1. At least 24 pre-change periods assembled for a practice series.
                2. A segmented regression with level and slope change fitted.
                3. Seasonality and autocorrelation handled and residuals checked.
                4. Other events near the change date listed as competing explanations.

                ## Notes
                A comparison series the change should not touch, such as an unaffected region or product, strengthens an interrupted time series considerably.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A segmented regression on at least 24 pre-periods with residual checks and a written list of competing events."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Assemble at least 24 pre-change periods for a practice series"
                - "Fit a segmented regression with level and slope terms"
                - "Check residuals for autocorrelation and leftover seasonality"
                - "List every other event close to the change date"
            - name: Difference in differences study of a regional rollout
              description: |-
                ## Purpose
                A change that reached some regions, branches or teams first is the commonest setting for a real causal study. Running one end to end, from treatment table and pre-trend plot to an estimate with clustered standard errors and a written caveat list, produces both an answer for the decision owner and a reusable pattern for later studies.

                ## Milestones
                1. Treated and comparison units fixed, with the reason each comparison unit qualifies.
                2. An event study plot showing pre-period differences close to zero, or a documented reason to doubt them.
                3. An estimate with standard errors clustered at the level treatment was assigned.
                4. A two-page write-up with estimate, interval, assumptions and caveats delivered to the decision owner.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A two-page difference in differences write-up with event study plot, clustered interval and caveats delivered to the decision owner."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Fix the treated and comparison regions and write why each qualifies"
                - "Produce the event study plot before looking at the post-period estimate"
                - "Estimate the effect with standard errors clustered at the region level"
                - "Deliver a two-page write-up to the decision owner"
                - "Update the post-period estimate as new months of data arrive @recurring(monthly:17)"
            - name: Matched comparison for a voluntary programme
              description: |-
                ## Purpose
                People who sign up for a training course, a mentoring scheme or a premium support plan differ from those who do not, so a raw comparison mostly measures who chose to join. Matching participants to similar non-participants on what was known before they enrolled gives a fairer estimate, and the balance table shows exactly how fair.

                ## Milestones
                1. Pre-enrolment covariates fixed from the causal diagram and confounder audit.
                2. A matched or weighted comparison group built, with standardised mean differences below 0.1 on key covariates.
                3. The effect estimated on the agreed outcome and window, with an interval.
                4. A sensitivity analysis showing how strong hidden selection would need to be to remove the effect.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A matched estimate of the programme's effect with balance under 0.1 on key covariates and a sensitivity analysis, shared with the programme owner."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Fix the pre-enrolment covariates from the confounder audit"
                - "Build the matched comparison group and produce a balance table"
                - "Estimate the programme effect over the agreed follow-up window"
                - "Test how much hidden selection into the programme would erase the effect"
            - name: Placebo and falsification tests for an existing estimate
              description: |-
                ## Purpose
                Credible estimates should vanish where the treatment could not have worked: at a fake treatment date a year earlier, in an outcome the change cannot touch, in a group that was never exposed. Running a set of falsification tests on a study you already trust shows whether that trust is earned.

                ## Milestones
                1. Three falsification tests chosen: a placebo date, a negative control outcome and a placebo group.
                2. Each one run with the same code as the main estimate.
                3. Results tabulated beside the main estimate.
                4. The study's evidence grade confirmed or lowered in the register.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Three falsification tests run with the main study's code and tabulated, with the study's evidence grade updated."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Choose a placebo treatment date at least a year before the real one"
                - "Pick an outcome the treatment could not plausibly affect"
                - "Rerun the main code for each placebo and tabulate the results"
                - "Update the study's evidence grade in the register"
            - name: Sensitivity analysis for unmeasured confounding
              description: |-
                ## Purpose
                Every observational estimate faces the same challenge: what about something you did not measure? Sensitivity tools such as the E-value, Rosenbaum bounds or omitted variable bias benchmarks answer it with a number, the strength an unmeasured confounder would need, compared with the ones you did measure, to explain the effect away.

                ## Milestones
                1. One sensitivity method chosen to suit the design and outcome type.
                2. The threshold confounder strength calculated for the main estimate.
                3. That strength benchmarked against the strongest measured confounder.
                4. A plain-language sentence on the result included in the write-up.
              priority: high
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The main estimate reported with a sensitivity value, benchmarked against a measured confounder and explained in one plain sentence."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose a sensitivity method that suits your design and outcome"
                - "Calculate how strong a hidden confounder would need to be"
                - "Compare that strength with your strongest measured confounder"
                - "Write one plain sentence explaining the result for the decision owner"
            - name: Quasi-experiment or pilot experiment decision
              description: |-
                ## Purpose
                Quasi-experimental estimates arrive faster and cost nothing in lost revenue, but rest on assumptions; a small randomised pilot takes months but needs far fewer. Comparing the two for a specific upcoming decision, on time, cost, credibility and what is at stake, stops the team defaulting to whichever it did last time.

                ## Milestones
                1. The decision, its deadline and the money or risk at stake written down.
                2. The best available quasi-experimental design and its weakest assumption described.
                3. A pilot option costed, including the time to a readable result.
                4. A choice made and recorded with the decision owner.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded choice between a quasi-experimental study and a randomised pilot, with costs, timing and the deciding reason."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the upcoming decision, its deadline and what is at stake"
                - "Describe the best quasi-experimental option and its weakest assumption"
                - "Cost a small randomised pilot, including time to a readable result"
                - "Record the chosen route with the decision owner"
            - name: Re-analysing a before-and-after claim
              description: |-
                ## Purpose
                Plenty of budgets rest on a slide showing the metric went up after the change. Taking one such claim and re-analysing it with a comparison group, a longer pre-period and seasonality accounted for often shrinks or reverses the effect, and occasionally confirms it, which is just as useful to know.

                ## Milestones
                1. One influential before-and-after claim chosen, with its original numbers.
                2. A comparison group or a longer series assembled.
                3. The claim re-estimated with a proper design and an interval.
                4. The finding shared with the claim's owner before any wider audience.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "One influential before-and-after claim re-estimated with a comparison group and interval, and the result discussed with its owner."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pick one before-and-after claim that drove a real budget decision"
                - "Collect a longer pre-period and a plausible comparison group"
                - "Re-estimate the effect with difference in differences or a time series model"
                - "Share the finding privately with the claim's owner first"
            - name: Triangulating one effect with two designs
              description: |-
                ## Purpose
                Each design fails in different ways, so two designs with different assumptions agreeing is far stronger evidence than either alone. Estimating the same effect with, say, difference in differences and matching, or synthetic control and an interrupted time series, and explaining any gap, is how serious evaluations earn trust.

                ## Milestones
                1. Two designs chosen whose key assumptions differ.
                2. Both run on the same estimand and outcome window.
                3. Estimates and intervals set side by side.
                4. Any disagreement explained, or left open honestly, in the write-up.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Two estimates of the same effect from designs with different assumptions, reported side by side with the gap explained."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Choose a second design whose assumptions differ from the first"
                - "Run it on the same estimand and outcome window"
                - "Set both estimates and intervals side by side"
                - "Write what the agreement or disagreement tells the reader"
            - name: Threats to validity register for a study
              description: |-
                ## Purpose
                Selection, spillovers, anticipation, measurement changes and other events at the same time are the usual ways an observational study goes wrong. Keeping them in a register, each with its likely direction of bias and the check that addresses it, makes the caveats section write itself and shows reviewers you looked.

                ## Milestones
                1. A register with at least eight threats relevant to the study.
                2. Each threat given a likely direction of bias and a check or mitigation.
                3. The result of each check recorded once the analysis has run.
                4. Unaddressed threats carried into the write-up.

                ## Notes
                Start from the **Risk register** template. Anticipation, where units change behaviour before the official start, is the threat most often forgotten in rollout studies.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A threats register with at least eight entries, each with bias direction, check and result, reflected in the study write-up."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Create a threats register for your current study from the template"
                - "List at least eight threats such as spillovers, anticipation and coinciding events"
                - "Note the likely direction of bias and the check for each threat"
                - "Carry unresolved threats into the caveats section of the write-up"
            - name: Presenting a causal estimate to decision-makers
              description: |-
                ## Purpose
                Decision-makers need the size of the effect, how sure you are, and what would have to be true for it to be wrong, in that order and on one page. A briefing that leads with the decision, shows the interval rather than a single number and names the key assumption keeps the meeting on the choice rather than the method.

                ## Milestones
                1. A one-page brief: decision, estimate with interval, key assumption, recommendation.
                2. One chart, such as the event study or the synthetic control gap, that a non-specialist can read.
                3. Three likely challenges anticipated with prepared answers.
                4. The meeting held and the decision taken recorded beside the study in the register.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A one-page brief presented to the decision-makers and the resulting decision recorded beside the study in the register."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Draft a one-page brief leading with the decision and the interval"
                - "Choose one chart a non-specialist can read in ten seconds"
                - "Rehearse answers to the three hardest likely challenges"
                - "Record the decision taken in the study register"
            - name: One-year evaluation of a launched initiative
              description: |-
                ## Purpose
                Many initiatives launch with a promise to review them in a year, and the review becomes a status update with no counterfactual. Planning the anniversary evaluation from launch day, with a comparison group, a frozen pre-period and an agreed outcome, turns that date into an honest answer on whether to keep, change or stop.

                ## Milestones
                1. The evaluation date, outcome and comparison approach agreed at or near launch.
                2. Pre-period data and the comparison group frozen and stored.
                3. The evaluation run and reported by the anniversary date.
                4. A keep, change or stop decision recorded.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An anniversary evaluation delivered on time with a comparison group, ending in a recorded keep, change or stop decision."
                cadence: cyclic
              tasks:
                - "Agree the anniversary evaluation's outcome and comparison group with the sponsor"
                - "Freeze and store the pre-period and comparison data now"
                - "Run the anniversary evaluation and put the keep, change or stop question @recurring(yearly)"
            - name: External methods review before a high-stakes release
              description: |-
                ## Purpose
                Estimates that will move a large budget, inform a regulator or appear in public are worth an outside methodologist's time, such as an academic economist or epidemiologist, whether paid or as a favour. A tight review pack of plan, code, data dictionary and draft gets useful critique in one round rather than three.

                ## Milestones
                1. A reviewer chosen with experience in the specific design.
                2. A review pack sent: pre-analysis plan, deviations log, code, outputs and draft.
                3. Written comments received and each one answered.
                4. The final version released with the review acknowledged.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "Written comments from an external methods reviewer, each answered in writing, before the high-stakes estimate was released."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Shortlist two external reviewers with experience in your design"
                - "Assemble the plan, deviations log, code and draft into one review pack"
                - "Agree the scope, timing and any fee with the chosen reviewer"
                - "Answer every review comment in writing before release"
            - name: Submitting an observational study for publication
              description: |-
                ## Purpose
                For researchers, and for industry teams who publish, an observational study meets its toughest audience at peer review. Following the relevant reporting guideline, such as STROBE for observational health research, sharing code where the data allows and matching claims to design shortens the path from submission to acceptance.

                ## Milestones
                1. A target journal or conference chosen and its reporting requirements read.
                2. The manuscript checked against the relevant reporting guideline.
                3. Data sharing and confidentiality approvals obtained from the data owner.
                4. The paper submitted with code or a replication package where permitted.
              priority: low
              deadlineOffsetDays: 240
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A manuscript submitted to a named venue, checked against its reporting guideline, with data sharing cleared by the data owner."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Choose a target journal or conference and read its author guidelines"
                - "Check the manuscript against the matching reporting guideline"
                - "Get written clearance from the data owner on what can be shared"
                - "Submit the paper with a replication package where permitted"
            - name: Half-day causal methods workshop for analysts
              description: |-
                ## Purpose
                Colleagues who run their own before-and-after analyses rarely lack effort, only a few patterns: a comparison group, a pre-period plot, a sentence on assumptions. A half-day workshop built around two of your own past studies spreads those patterns faster than a reading list and recruits reviewers for the peer review rota.

                ## Milestones
                1. A half-day agenda built around two real internal studies.
                2. A hands-on exercise with a dataset where the naive answer is wrong.
                3. The workshop delivered to at least eight colleagues.
                4. Attendee feedback gathered and follow-up questions answered.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A half-day workshop delivered to at least eight colleagues using internal studies, with feedback collected."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Pick two past internal studies to anchor the workshop"
                - "Build an exercise dataset where the naive answer is wrong"
                - "Book a half-day slot and invite at least eight analysts"
                - "Collect feedback and answer follow-up questions within a week"
            - name: Moving from academic causal research to industry
              description: |-
                ## Purpose
                Academic causal work aims for a defensible paper over a year; industry work needs a good-enough answer before the decision meeting, explained to people who will not read the appendix. Researchers making the move do best when they plan which standards to keep, such as pre-registration and sensitivity analysis, and which to relax, such as exhaustive specification tables.

                ## Milestones
                1. A written list of academic habits to keep and those to relax.
                2. Two decision owners interviewed about how they use evidence.
                3. A first study scoped to a decision deadline rather than a publication.
                4. A 90-day development plan agreed with your manager.

                ## Notes
                Start from the **Development plan** template.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A 90-day development plan agreed with your manager and a first study scoped to a real decision date."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write which academic standards you will keep and which you will relax"
                - "Interview two decision owners about how they use evidence"
                - "Scope your first industry study to a real decision date"
                - "Agree a 90-day development plan with your manager"
            - name: First causal study without a data team
              description: |-
                ## Purpose
                Plenty of knowledge workers are asked whether their newsletter, office move or new process worked, with only a spreadsheet and a few weeks. A careful comparison with a similar group that did not get the change, over the same dates, plus an honest paragraph on what could still explain the difference, is far better than a before-and-after chart and well within reach.

                ## Milestones
                1. A comparison group identified that did not get the change but faced the same season and conditions.
                2. Monthly figures for both groups laid out for at least six months before and after.
                3. The simple difference in differences calculated in the spreadsheet.
                4. A half-page summary with the number, the comparison used and its main weakness.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A spreadsheet difference in differences with six months either side and a half-page summary stating the comparison and its main weakness."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Name a team, region or product that did not get the change"
                - "Lay out monthly figures for both groups six months either side"
                - "Subtract the comparison group's change from the treated group's change"
                - "Ask the agent to help draft a half-page summary that states the main weakness"
            - name: Commissioned evaluation for a funder or regulator
              description: |-
                ## Purpose
                Funders, public bodies and regulators increasingly ask for impact evidence beyond outputs, and they often specify the evidence standard they expect. Agreeing the evaluation design, data access and reporting schedule in the terms of reference, ideally before the programme starts, avoids a scramble for a comparison group when the final report is due.

                ## Milestones
                1. Terms of reference agreed covering questions, design, data access and deadlines.
                2. The commissioner's evidence standard identified and the design matched to it.
                3. Data sharing and ethics approvals in place before data collection.
                4. Interim and final reports delivered on the agreed dates.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Interim and final evaluation reports delivered on the dates in agreed terms of reference, using a design matched to the commissioner's standard."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Ask the commissioner which evidence standard the evaluation must meet"
                - "Draft terms of reference covering design, data access and deadlines"
                - "Confirm data sharing and ethics approvals before collecting data"
                - "Send the commissioner a short interim progress note @recurring(quarterly)"
            - name: Inheriting a causal study with undocumented choices
              description: |-
                ## Purpose
                Taking over a colleague's evaluation often means a notebook, a headline number and no record of why the comparison group, window or controls were chosen. Reconstructing those choices before extending the work stops you building on an estimate that its original author might not have defended.

                ## Milestones
                1. The headline estimate reproduced from the inherited code.
                2. Every design choice listed with its reason, where one can be found.
                3. The choices that move the estimate most identified by changing them one at a time.
                4. A decision recorded to keep, revise or redo the study.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The inherited estimate reproduced, its design choices listed with reasons and sensitivity, and a keep, revise or redo decision recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Rerun the inherited code and reproduce the headline estimate"
                - "List each design choice and look for its reason in old notes or messages"
                - "Change the most suspicious choices one at a time and record the effect"
                - "Decide whether to keep, revise or redo the study and write down why"
            - name: Few treated units and small-sample inference
              description: |-
                ## Purpose
                Business rollouts often treat three regions or six stores, and conventional clustered standard errors are unreliable with so few clusters, usually too narrow. Randomisation inference, the wild cluster bootstrap or synthetic control placebos give intervals that respect how little independent information there really is.

                ## Milestones
                1. The number of treated and comparison clusters counted and the problem stated.
                2. A wild cluster bootstrap or randomisation inference run on the estimate.
                3. Conventional and small-sample intervals compared side by side.
                4. A team rule written for when small-sample methods are required.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A study with few clusters reported with wild bootstrap or permutation intervals beside conventional ones, and a team rule written."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Count treated and comparison clusters in your current study"
                - "Rerun inference with a wild cluster bootstrap or permutation test"
                - "Compare the conventional and small-sample intervals side by side"
                - "Write a team rule for when small-sample inference is required"
            - name: Target trial emulation with longitudinal records
              description: |-
                ## Purpose
                Researchers using health, education or customer records can avoid classic traps such as immortal time bias by first writing the protocol of the randomised trial they would have run, then emulating it: eligibility, treatment strategies, time zero, follow-up and analysis. The discipline catches design errors that no amount of statistical adjustment will fix.

                ## Milestones
                1. A protocol table covering eligibility, strategies, assignment, time zero, follow-up, outcome and analysis.
                2. Each protocol element mapped to how the observational data will emulate it.
                3. Time zero aligned for eligibility, treatment assignment and the start of follow-up.
                4. The emulated estimate reported beside a naive analysis to show the difference.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A target trial protocol table with emulation mapping and an emulated estimate reported beside a naive analysis."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Write the protocol table for the trial you would ideally run"
                - "Map each protocol element to the records you hold"
                - "Align time zero for eligibility, assignment and follow-up"
                - "Report the emulated estimate beside a naive analysis"
            - name: Heterogeneous effects with causal forests
              description: |-
                ## Purpose
                An average effect can hide a programme that helps new customers and harms loyal ones. Causal forests and related methods estimate how effects vary with pre-treatment characteristics, but they invite fishing, so the useful version starts from a few prespecified subgroups and tests whether the variation found is real.

                ## Milestones
                1. Up to five subgroups prespecified with the reason each might respond differently.
                2. A causal forest or similar estimator fitted with honest sample splitting.
                3. A calibration test run to check whether the detected variation is real.
                4. Findings reported as hypotheses for a follow-up study unless they pass the checks.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Subgroup effects estimated from prespecified groups with a calibration test, each labelled as confirmed or a hypothesis."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Prespecify up to five subgroups with a reason for each"
                - "Fit a causal forest with honest splitting on the study data"
                - "Run a calibration test for the detected variation in effects"
                - "Label each subgroup finding as confirmed or a hypothesis"
            - name: Double machine learning for many confounders
              description: |-
                ## Purpose
                Dozens or hundreds of pre-treatment variables might matter, and hand-picking a regression specification then becomes guesswork. Double machine learning fits flexible models for treatment and outcome with cross-fitting and combines them so the effect estimate keeps valid intervals, though it still depends entirely on the confounders being measured.

                ## Milestones
                1. A high-dimensional confounder set assembled from pre-treatment data only.
                2. Treatment and outcome models fitted with cross-fitting and their accuracy reported.
                3. The effect estimated with an interval and compared with a simple regression.
                4. Sensitivity of the estimate to the choice of learner documented.

                ## Notes
                Flexible models do not fix a missing confounder. Run the sensitivity analysis for unmeasured confounding on this estimate too.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A cross-fitted double machine learning estimate with interval, compared against a simple regression and two alternative learners."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Assemble the pre-treatment feature set and drop anything measured after treatment"
                - "Fit treatment and outcome models with five-fold cross-fitting"
                - "Compare the estimate with a simple adjusted regression"
                - "Rerun with two other learners and record how the estimate moves"
            - name: Mediation analysis of how an effect works
              description: |-
                ## Purpose
                Once an effect is established, the next question is usually why: did the onboarding call raise retention because customers used more features, or because they felt looked after? Mediation analysis splits the effect into pathways, but it needs extra assumptions about mediator confounding that deserve as much scrutiny as the main design.

                ## Milestones
                1. The mediator defined and confirmed as measured after treatment and before the outcome.
                2. Confounders of the mediator and outcome added to the causal diagram.
                3. Direct and indirect effects estimated with intervals.
                4. A sensitivity analysis run for unmeasured mediator and outcome confounding.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Direct and indirect effects estimated with intervals, using an updated causal diagram and a mediator sensitivity analysis."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Define the mediator and confirm it is measured before the outcome"
                - "Add confounders of the mediator and outcome to the causal diagram"
                - "Estimate direct and indirect effects with intervals"
                - "Check how sensitive the indirect effect is to hidden mediator confounding"
---

# Causal Inference Studies

This area is for researchers and analysts who are asked whether something worked when nobody ran an experiment: a regional rollout, a voluntary programme, a policy with an eligibility cut-off. It starts with the foundations (a precise estimand, a causal diagram, a clean treatment definition and a chosen design), then the routines that keep studies findable and reviewed, the core designs from difference in differences to synthetic control, the studies and checks that test an estimate, the events where results meet decision-makers and reviewers, situations such as working without a data team, and finally specialist methods like target trial emulation and double machine learning.

What repeats is a monthly scan for natural experiments, a monthly evaluability review of upcoming launches, monthly register updates and pre-period snapshots, a weekly methods reading slot, a quarterly look-back at past estimates and a yearly evaluation agenda. The Meeting notes, Reading queue, Risk register and Development plan templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
