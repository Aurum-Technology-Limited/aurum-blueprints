---
id: quant-finance.quant-research-competitions
name: Quant Research Competitions
description: "A disciplined way to enter quant and data competitions: the right contests chosen, rules read, a validation split that mirrors the hidden test, logged submissions and results turned into evidence."
category: business
version: 1.0.0
tags: [quant-finance, quant-research-competitions, student, researcher, data-competitions, trading-competitions, reproducibility, portfolio-evidence]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - meeting-notes
    - reading-queue
    - purchase-decision
    - portfolio-piece
    - resume
  pillars:
    - name: Quantitative Finance & Trading
      emoji: "🧮"
      description: "Systematic research and trading run like engineering: alpha research and honest backtests, factor and risk models, execution and microstructure, statistics and machine learning, quant development and market data, prop-firm evaluations and personal algorithmic trading under strict risk rules, and quant careers. Organisation and method only, never trading advice."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Quant Research Competitions
          description: "Taking part in quant and data competitions: choosing competitions, team or solo entry, reproducible notebooks and turning results into evidence for applications."
          projects:
            - name: Competition landscape map for the coming year
              description: |-
                ## Purpose
                Quant competitions come in very different shapes: long forecasting contests on anonymised market data, weekly live tournaments, university trading competitions on simulated exchanges, weekend datathons and judged case or pitch rounds. Mapping the ones open to you, with their formats, dates, team rules and what a good result proves, stops you entering whatever appears in your feed and lets you pick contests that build the evidence you actually need.

                ## Milestones
                1. A list of at least eight competitions open to you, each tagged by format: forecasting, live tournament, trading simulation, datathon or case.
                2. Each entry noted with its likely dates, eligibility, team size limit and whether code or a write-up is required.
                3. Each competition marked with the skill or evidence a strong result would show an admissions panel or employer.
                4. Three competitions flagged as candidates for the next six months.

                ## Notes
                Check eligibility early. Many university trading competitions only accept teams nominated by a university, and some sponsored contests exclude certain countries or current employees of the sponsor.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written map of at least eight competitions with format, dates, eligibility and evidence value, with three flagged as candidates."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every quant or data competition you have heard of in a single page"
                - "Search the main competition platforms and university society pages for current finance contests"
                - "Record format, dates, eligibility and team size for each competition"
                - "Flag three candidates and write one line on what each would prove"
            - name: Choosing your first quant competition
              description: |-
                ## Purpose
                A first competition should teach the whole loop, from data to submission to post-mortem, without burying you in a dataset that needs a cluster to load. Scoring your three candidates on time remaining, data size, metric clarity, community activity and fit with your calendar turns a hopeful guess into a choice you can defend when the work gets hard in week four.

                ## Milestones
                1. Three candidate competitions scored on time remaining, data size, metric clarity, forum activity and calendar fit.
                2. One competition chosen, with the reason it won written in a sentence.
                3. A personal goal set that does not depend on rank, such as a reproducible pipeline and a written post-mortem.
                4. An account registered and the competition data downloaded.

                ## Notes
                A realistic first goal is finishing with a clean, reproducible entry and a write-up. Rank follows practice, and the write-up is what people read later.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One competition chosen from a scored shortlist of three, with a rank-independent goal written down and the data downloaded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Score your three candidate competitions on five criteria in a small table"
                - "Check how many weeks each competition has left before it closes"
                - "Write a goal for the entry that does not mention leaderboard rank"
                - "Register for the chosen competition and download its data"
            - name: Rules, eligibility and data licence read-through
              description: |-
                ## Purpose
                Disqualification usually comes from rules nobody read: private code sharing between teams, a second account, external data the rules forbid, or a licence that bars using the data outside the contest. Reading the rules once with a highlighter, and writing the six that matter on one card, protects weeks of work and any prize, and tells you what you may later publish or put in a portfolio.

                ## Milestones
                1. The full rules, data licence and terms of entry read and saved as a dated copy.
                2. A one-page summary covering accounts, team size, merger deadline, external data, code sharing and submission limits.
                3. The data licence's limits on reuse, publication and retention after the contest noted.
                4. Any intellectual property assignment or licence attached to winning entries noted before you start.

                ## Notes
                If a rule is ambiguous, ask in the official forum or contact the organiser and keep the answer. Do not rely on what other entrants assume. For anything with legal weight, such as an IP assignment, ask a qualified adviser or your university's legal office.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated copy of the rules and a one-page summary of the six key rules and the data licence limits, saved with the project."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Save a dated copy of the rules and data licence in the project folder"
                - "Write a one-page summary of the rules on accounts, teams, external data and sharing"
                - "Note what the licence allows you to publish or keep after the contest ends"
                - "Post any ambiguous rule question in the official forum and save the answer"
            - name: Solo or team entry decision
              description: |-
                ## Purpose
                Teams cover more ground and teach collaboration, but a team that was never agreed on hours, roles and credit falls apart a fortnight before the deadline. Deciding solo or team on purpose, and if team then agreeing roles, hours and how results will be described on CVs, avoids the common argument over whose model made the final blend.

                ## Milestones
                1. The decision recorded: solo, or a team with named members.
                2. For a team, roles agreed for data, modelling, validation and submission.
                3. Weekly hours each person can give written down honestly.
                4. A short agreement on how each person may describe the result and share code afterwards.

                ## Notes
                Agree in writing how credit and code will be shared before any results come in. It is far easier to agree when nobody is yet attached to a rank.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A recorded solo or team decision, and for teams a written note of roles, weekly hours and credit and code sharing terms."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down the hours you can give each week until the competition closes"
                - "List two or three people you would team with and what each brings"
                - "Agree roles and weekly hours with any teammates in a short call"
                - "Record how each member may describe the result and reuse the code"
            - name: Weekly time budget for competition work
              description: |-
                ## Purpose
                Competitions expand to fill every evening, and the cost shows up in coursework, research deadlines or sleep. A fixed weekly budget, with protected blocks in the calendar and a monthly check of hours actually spent, keeps competing a deliberate investment rather than a slow leak from everything else.

                ## Milestones
                1. A weekly hour budget set, with the commitments it must not displace listed.
                2. Two or three recurring blocks booked in your calendar.
                3. Actual hours logged for four weeks and compared with the budget.
                4. The budget kept or changed after that comparison, with the reason noted.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written weekly hour budget, protected calendar blocks and a monthly comparison of planned and actual hours."
                cadence: rolling
              tasks:
                - "Decide the maximum hours a week you will give to competitions"
                - "Book two or three recurring competition blocks in your calendar"
                - "Log the hours spent on each competition session in one line"
                - "Compare planned and actual competition hours and adjust the budget @recurring(monthly:25)"
            - name: Pinned and reproducible competition environment
              description: |-
                ## Purpose
                Any score you cannot reproduce is a score you cannot trust, explain or put in a portfolio. Pinning library versions, fixing random seeds and recording the hardware for every run means your best submission can be rebuilt from scratch months later, which is exactly what a reviewer or interviewer will ask about.

                ## Milestones
                1. A lock file or environment file pinning every library version.
                2. Random seeds set in one place and recorded with every run.
                3. The full pipeline rebuilt from raw data on a clean machine or container with the same score.
                4. Hardware, runtime and environment version written in the project readme.

                ## Notes
                Some boosting and GPU routines are not fully deterministic even with seeds set. Note the tolerance you see between repeated runs rather than claiming exact reproduction.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The baseline pipeline rebuilds from raw data in a fresh environment and matches its recorded score within a noted tolerance."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Create a pinned environment file for the competition project"
                - "Set all random seeds from one configuration value"
                - "Rebuild the baseline in a fresh environment and compare the score"
                - "Record hardware, runtime and environment version in the readme"
            - name: Reusable competition repository template
              description: |-
                ## Purpose
                Starting each competition from an empty folder means rewriting the same loaders, validation code and submission writers every time, with new bugs each time. A small template with a fixed layout for data, configs, features, models, logs and submissions lets the second and third competitions start on day one with the plumbing already tested.

                ## Milestones
                1. A template repository with folders for raw data, features, models, configs, logs and submissions.
                2. Raw competition data excluded from version control, with a note on where it lives.
                3. A command that runs the whole pipeline from one config file.
                4. The template used to start at least one real competition.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A version-controlled template repository that starts a new competition and runs a pipeline from a single config file."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Sketch the folder layout you want for every competition"
                - "Add an ignore rule so raw competition data never enters version control"
                - "Write one entry command that runs the pipeline from a config file"
                - "Start your current competition from the template and fix what breaks"
            - name: Scoring metric implemented and checked locally
              description: |-
                ## Purpose
                Finance competitions use unusual metrics: rank correlation per era, a Sharpe-style ratio of daily correlations, weighted R squared or a percentage error on volatility. Optimising the wrong quantity is the quietest way to lose. Implementing the metric yourself and checking it against a known submission's leaderboard score means every local number you look at afterwards means the same thing as the organiser's.

                ## Milestones
                1. The metric written out in words from the competition's evaluation page.
                2. A local implementation with unit tests on small hand-worked cases.
                3. A sample or baseline submission scored locally and compared with its leaderboard score.
                4. Any gap between local and leaderboard explained, such as per-era averaging or weighting.

                ## Notes
                Read the forum for the organiser's reference implementation if one exists. Small details such as ties in ranking or how eras are weighted change results.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A tested local metric that reproduces a known submission's leaderboard score within a small, explained difference."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Copy the evaluation metric definition from the competition page into your notes"
                - "Implement the metric and test it on three hand-worked examples"
                - "Score the sample submission locally and compare it with the leaderboard"
                - "Write down any difference and the reason for it"
            - name: Validation split that mirrors the hidden test
              description: |-
                ## Purpose
                The final ranking is computed on data you never see, usually a later period of time. A random split on financial data leaks the future into training and produces cross-validation scores that collapse on the private leaderboard. Building folds that respect time, eras or assets the way the hidden test does, with a gap between train and validation, is the single most valuable piece of work in any finance competition.

                ## Milestones
                1. The structure of the hidden test written down: time period, assets, eras and any gap.
                2. Validation folds built forward in time, with a purge gap sized to the target horizon.
                3. Fold scores recorded for the baseline, with their spread, not just the mean.
                4. A check that improvements in validation also move the public leaderboard in the same direction.

                ## Notes
                If overlapping targets span several days, drop the rows in the gap between train and validation. Otherwise the model sees the answer to its own exam.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Time-respecting validation folds with a purge gap, baseline fold scores and their spread recorded, and agreement with the public leaderboard checked."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write down how the hidden test set is separated from the training data"
                - "Build forward-in-time folds with a gap matched to the target horizon"
                - "Record each fold's baseline score and the spread across folds"
                - "Compare three validation improvements with their public leaderboard changes"
            - name: First baseline submission inside a week
              description: |-
                ## Purpose
                Entrants who spend a month building the perfect model before submitting anything often discover a format error on the last day. A plain baseline in the first week, such as a linear model or untuned trees on raw features, proves the pipeline end to end and gives a reference score every later idea must beat.

                ## Milestones
                1. A baseline model trained on raw features with your validation split.
                2. A correctly formatted submission accepted by the platform.
                3. Baseline validation and leaderboard scores written in the submission log.
                4. A list of the first three ideas to try against the baseline.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An accepted baseline submission within ten days, with its validation and leaderboard scores logged."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Train the simplest sensible model on raw features"
                - "Write the submission file in the exact required format and upload it"
                - "Log the baseline's validation and leaderboard scores"
                - "List the first three ideas you will test against the baseline"
            - name: Weekly competition work session
              description: |-
                ## Purpose
                Progress in a three-month competition comes from steady sessions with one question each, not from a heroic final weekend. A weekly block that opens by reading the log, tests one idea against the validation split and closes by writing the result keeps work moving and stops the drift into tweaking without a hypothesis.

                ## Milestones
                1. A fixed weekly session in the calendar for the length of the competition.
                2. Each session opened with one written question to answer.
                3. Each session closed with a one-line result in the experiment log.
                4. Eight consecutive weekly sessions completed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weekly sessions, each with a written question and a logged result."
                cadence: rolling
              tasks:
                - "Choose a weekly slot of at least two hours for competition work"
                - "Hold the weekly session and test one written idea against validation @recurring(weekly:sat)"
                - "Write a one-line result and the next question at the end of each session"
                - "Clear any idea from the backlog that has waited more than a month"
            - name: Submission and experiment log
              description: |-
                ## Purpose
                After forty submissions nobody remembers which feature set produced the score that briefly put them in the top hundred. A log with one row per experiment, holding the code commit, config, validation score, fold spread and leaderboard score, is what lets you choose final submissions sensibly and later explain your work in an interview.

                ## Milestones
                1. A log with columns for date, commit, config, validation mean, fold spread and leaderboard score.
                2. Every submission since the baseline recorded, including the ones that failed.
                3. Each row linked to a commit that can rebuild it.
                4. A weekly check that no submission is missing from the log.

                ## Notes
                Start from the **Metrics log** template. Log failed ideas with the same care as good ones; they stop you retrying the same thing in week nine.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every submission and experiment in the competition has a log row with commit, config, validation and leaderboard scores."
                cadence: rolling
              tasks:
                - "Create the log with columns for commit, config, validation and leaderboard scores"
                - "Backfill every submission made so far from the platform history"
                - "Tag each experiment commit so its row can be rebuilt"
                - "Reconcile the log with the platform's submission history @recurring(weekly:sun)"
            - name: Submission budget and leaderboard discipline
              description: |-
                ## Purpose
                The public leaderboard is usually scored on a small slice of the test data, and tuning to it is a form of overfitting that the private ranking punishes. Rationing submissions, deciding in advance what each one tests and tracking whether validation and public scores agree keeps the leaderboard as a sanity check rather than a target.

                ## Milestones
                1. A rule written for how many submissions a week you will spend and on what.
                2. Each submission justified by a validation result, not a hunch.
                3. A running chart of validation score against public score.
                4. A weekly note on whether the two still move together.

                ## Notes
                If public score improves while validation does not, trust validation. A large share of competitions see big rank changes when the private leaderboard is revealed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written submission rule, each submission backed by a validation result and a weekly validation against public score comparison."
                cadence: rolling
              tasks:
                - "Write your weekly submission allowance and what qualifies an idea to use one"
                - "Plot validation score against public score for every past submission"
                - "Review whether validation and public scores still agree @recurring(weekly:fri)"
                - "Note any submission made without a validation reason and why"
            - name: Forum and public notebook reading routine
              description: |-
                ## Purpose
                Competition forums carry the organiser's clarifications, reports of leaks and the shared notebooks that set the bar everyone else starts from. Reading them on a fixed day, and writing down the two or three points that matter, keeps you informed without losing evenings to scrolling or copying a public notebook you do not understand.

                ## Milestones
                1. The official forum and the most active shared notebooks bookmarked.
                2. A weekly reading slot with a 30 minute limit.
                3. Organiser clarifications copied into the rules summary.
                4. Ideas from public work tested against your own validation before use.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly forum read of no more than 30 minutes, with clarifications added to the rules summary and borrowed ideas validated first."
                cadence: rolling
              tasks:
                - "Bookmark the official forum and the three most discussed public notebooks"
                - "Read new forum posts and notebooks for 30 minutes @recurring(weekly:wed)"
                - "Copy any organiser clarification into your rules summary"
                - "Test one borrowed idea on your own validation before submitting it"
            - name: Team weekly sync and task board
              description: |-
                ## Purpose
                Distributed student teams lose time when two people build the same feature or nobody owns the submission pipeline. A 30 minute weekly sync with a shared task board, where each person reports a validation result rather than activity, keeps a team of three or four pulling in the same direction until the close.

                ## Milestones
                1. A shared task board with columns for ideas, in progress, validated and rejected.
                2. A weekly 30 minute sync at a fixed time.
                3. Each sync ending with one owner per open task.
                4. Notes from every sync saved in the project folder.

                ## Notes
                Start from the **Meeting notes** template. Ask each person for one number in each sync: the validation change from their last task.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly team sync held with saved notes, and every open task on the board has a named owner."
                cadence: rolling
              tasks:
                - "Set up a shared task board with idea, in progress, validated and rejected columns"
                - "Agree a fixed weekly time for a 30 minute team sync"
                - "Run the team sync and assign an owner to every open task @recurring(weekly:mon)"
                - "Save the sync notes and decisions in the shared folder"
            - name: Monthly competition retrospective
              description: |-
                ## Purpose
                Without a pause to look back, a month of competition work can be busy and still change nothing in your validation score. A monthly retrospective of the log, asking which ideas moved the score, which were noise and what the time went on, sharpens the next month's plan and builds the material for your eventual write-up.

                ## Milestones
                1. The month's experiments reviewed from the log.
                2. The two ideas that helped most and the two biggest time sinks named.
                3. A plan for the next month with no more than three priorities.
                4. Retrospective notes saved for the final write-up.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written monthly retrospective naming what helped, what wasted time and at most three priorities for the next month."
                cadence: cyclic
              tasks:
                - "Review the month's experiment log and validation changes @recurring(monthly:28)"
                - "Name the two ideas that helped most and the two that wasted the most time"
                - "Set no more than three priorities for next month"
                - "Save the retrospective notes beside the experiment log"
            - name: Live tournament weekly round pipeline
              description: |-
                ## Purpose
                Live tournaments score predictions on markets that have not happened yet, round after round, so a missed week or a broken data download costs a result you cannot get back. An automated pipeline that downloads the new round, checks the data, predicts and submits, with a health check each week, turns a fragile manual chore into a dependable routine.

                ## Milestones
                1. A script that downloads the round, validates the data shape and writes predictions.
                2. Automatic checks that stop submission if feature counts, ranges or row counts change.
                3. Submission confirmations logged each round.
                4. A monthly comparison of live round scores with validation expectations.

                ## Notes
                Some tournaments let entrants stake money or tokens on their models. That is risking real money on unproven predictions: decide in writing how much you could lose entirely, if anything, and most entrants are wiser to compete without staking until a long live record exists. This is not financial advice.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every round in a month submitted by the pipeline with data checks passed, and live scores compared with validation monthly."
                cadence: rolling
              tasks:
                - "Write a script that downloads the current round and checks its shape"
                - "Add a stop condition when feature counts or row counts change unexpectedly"
                - "Confirm this round's submission was accepted and log it @recurring(weekly:tue)"
                - "Compare the month's live scores with validation expectations @recurring(monthly:5)"
            - name: Compute and cloud spend tracker
              description: |-
                ## Purpose
                Cloud GPU hours and paid notebook tiers are easy to start and easy to forget, and a student budget can be gone in one careless weekend of left-running instances. A simple monthly tracker with a cap, and a habit of shutting down instances at the end of each session, keeps compute a planned cost.

                ## Milestones
                1. A monthly compute budget set, including free quotas available to you.
                2. Every paid service and its billing alert listed.
                3. Spend recorded against the budget each month.
                4. Any month over budget explained with a change made.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly compute budget with billing alerts on every paid service and a monthly spend record against it."
                cadence: rolling
              tasks:
                - "Set a monthly compute budget and list your free quotas"
                - "Turn on billing alerts on every cloud or notebook service you pay for"
                - "Record compute spend against the budget @recurring(monthly:3)"
                - "Shut down idle instances and delete unused storage volumes"
            - name: Model and data archive at each milestone
              description: |-
                ## Purpose
                Platforms remove competition data after the close, laptops die and cloud buckets get cleared to save money. Archiving the code, configs, trained models and allowed data at each milestone, within the limits of the data licence, means the work behind a good result survives long enough to be rebuilt, explained and shown.

                ## Milestones
                1. An archive location chosen that the data licence permits.
                2. Code, configs and model files archived at baseline, midpoint and final submission.
                3. A short readme in each archive explaining how to rebuild the result.
                4. A monthly check that the archive opens and is complete.

                ## Notes
                Check the data licence before keeping raw data after the contest. Some licences require deletion at the close, in which case archive only code, configs and scores.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Archives with code, configs and a rebuild readme exist for baseline, midpoint and final submission, checked monthly."
                cadence: rolling
              tasks:
                - "Choose an archive location the data licence allows"
                - "Archive code, configs and models for the baseline submission"
                - "Write a rebuild readme for each archived milestone"
                - "Open the archive and confirm it is complete @recurring(monthly:15)"
            - name: Annual competition season plan
              description: |-
                ## Purpose
                Trading competitions, sponsored datathons and long forecasting contests cluster at certain times of the academic year, and the best ones fill their team places early. A yearly plan placing two or three main entries around exams, thesis deadlines and recruiting season stops clashes and keeps the year's evidence building on itself.

                ## Milestones
                1. The year's exam, thesis and recruiting dates placed in one calendar.
                2. Two or three main competitions chosen and placed around those dates.
                3. Registration and team nomination deadlines noted.
                4. Last year's plan reviewed against what actually happened.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A yearly calendar with two or three main competitions placed around exams and recruiting, with registration deadlines noted."
                cadence: cyclic
              tasks:
                - "Put exams, thesis deadlines and recruiting dates in one calendar"
                - "Place two or three main competitions around those dates"
                - "Note every registration and team nomination deadline"
                - "Review last year's plan and draft the next season's @recurring(yearly)"
            - name: Feature engineering on anonymised financial data
              description: |-
                ## Purpose
                Many finance competitions hide what each feature means, give eras rather than dates and supply hundreds of noisy columns. Learning the techniques that work in that setting, such as per-era ranking, group statistics, feature stability checks across eras and target transformations, separates entrants who understand the data from those who rely on a public notebook.

                ## Milestones
                1. Feature correlations with the target measured per era and their stability charted.
                2. Per-era rank and group transformations tried and compared on validation.
                3. Unstable features identified and their effect on fold spread recorded.
                4. A short note of which techniques helped this dataset and why.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written comparison of at least three feature techniques on validation, with per-era stability charts saved."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Measure each feature's correlation with the target separately in every era"
                - "Chart how stable the strongest features are from era to era"
                - "Compare per-era rank features with raw features on validation"
                - "Write which feature techniques helped and the evidence for each"
            - name: Gradient boosted tree tuning for tabular returns data
              description: |-
                ## Purpose
                Boosted trees win a large share of tabular finance competitions, but defaults tuned for clean data overfit noisy return targets. Learning how depth, learning rate, column and row sampling and early stopping behave on low signal data, and tuning them on your own folds rather than the leaderboard, is a skill that carries from one competition to the next.

                ## Milestones
                1. A tuning grid or search defined over a small set of parameters.
                2. Every trial scored on all validation folds, with mean and spread logged.
                3. The effect of shallow trees and slow learning rates on fold spread recorded.
                4. A default parameter set written down for the next tabular competition.

                ## Notes
                Count your trials. Picking the best of two hundred configurations on the same folds overstates the true score, so expect the private result to be lower.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A logged tuning study scored on all folds, ending in a written default parameter set for noisy tabular targets."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Choose four or five tree parameters and a modest range for each"
                - "Run the search and log every trial's fold scores and spread"
                - "Compare fold spread for shallow and deep trees"
                - "Write a default tree parameter set for future tabular competitions"
            - name: Feature neutralisation and exposure control
              description: |-
                ## Purpose
                Models that lean heavily on a few features score well in some eras and collapse in others, which tournaments that reward consistency punish hard. Learning to measure feature exposure and to neutralise predictions partly against risky features trades a little average score for much steadier results, which is the trade a live scoring system usually rewards.

                ## Milestones
                1. Feature exposure of current predictions measured per era.
                2. Neutralisation applied at several strengths and scored on validation.
                3. The trade between mean score and worst-era score charted.
                4. A chosen strength recorded with the reasoning behind it.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A chart of mean against worst-era score at several neutralisation strengths, with the chosen strength and reason written down."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Measure how strongly current predictions load on each feature per era"
                - "Apply neutralisation at four strengths and score each on validation"
                - "Chart mean score against worst-era score for each strength"
                - "Record the strength you will use and why"
            - name: Ensembling without fitting the public leaderboard
              description: |-
                ## Purpose
                Blending several models is how most top solutions finish, and also how many teams overfit at the last minute by weighting blends to the public score. Learning to build ensembles from out-of-fold predictions, with weights chosen on validation and a check for correlation between members, adds a few hard-won points without the shake-up risk.

                ## Milestones
                1. Out-of-fold predictions saved for every candidate model.
                2. Correlation between candidate models measured.
                3. Blend weights chosen on validation folds only.
                4. The final blend's validation gain over the best single model recorded.

                ## Notes
                Simple averages of diverse models often match optimised weights out of sample. Prefer the simpler blend unless the gain is clear on every fold.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An ensemble built only from out-of-fold predictions, with its gain over the best single model shown on every validation fold."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Save out-of-fold predictions for every model you might blend"
                - "Measure the correlation between each pair of candidate models"
                - "Compare a simple average with validation-weighted blends on every fold"
                - "Record the final blend's gain over the best single model"
            - name: Writing code inside runtime and memory limits
              description: |-
                ## Purpose
                Code competitions run your notebook on hidden data with fixed limits on runtime, memory and internet access, and a pipeline that runs fine on a laptop can time out on submission day. Learning to profile, reduce memory with suitable data types, process in chunks and precompute what the rules allow keeps a good model from being disqualified by the clock.

                ## Milestones
                1. The competition's runtime, memory and offline limits written down.
                2. The full inference pipeline profiled for time and peak memory.
                3. The two biggest costs cut and the saving measured.
                4. A test run on the platform finished well inside the limits.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The inference pipeline runs on the platform within the stated limits with a measured margin of at least 20 percent."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write down the runtime, memory and internet limits for code submissions"
                - "Profile the inference pipeline for time and peak memory"
                - "Cut the two largest time or memory costs and measure the saving"
                - "Run a full test submission and record its runtime margin"
            - name: Trading simulation bots for exchange-style rounds
              description: |-
                ## Purpose
                University and sponsored trading competitions often run rounds on a simulated exchange where teams write bots that quote, take liquidity or trade news under position limits. Practising with a simple bot against the practice server, handling the exchange's API, limits and fees, turns the first live round from a scramble into a test of strategy.

                ## Milestones
                1. The simulator's API, order types, position limits and fees summarised.
                2. A minimal bot that connects, reads the book and places and cancels orders.
                3. Hard position and loss limits coded into the bot and tested.
                4. Two practice rounds run with results and errors logged.

                ## Notes
                Treat the position limits as a kill switch, not a target. Many teams lose a round to a bot that hits a limit and keeps sending orders.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A bot with coded position and loss limits completes two practice rounds on the simulator, with results and errors logged."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Summarise the simulator's order types, position limits and fees"
                - "Write a bot that connects, reads the book and places and cancels an order"
                - "Code hard position and loss limits and test that they stop trading"
                - "Run two practice rounds and log results and errors"
            - name: Studying winning solution write-ups
              description: |-
                ## Purpose
                Top finishers in finance competitions often publish detailed write-ups after the close, and they are the fastest way to learn what actually moves a private score. Reading one a month with a set of questions, about validation, features, models and what did not work, builds a personal catalogue of techniques grounded in real results.

                ## Milestones
                1. A reading list of at least six winning or top ten write-ups from finance competitions.
                2. Each write-up summarised on validation, features, models and failed ideas.
                3. Techniques that recur across write-ups listed.
                4. One technique from the list tried in your current competition.

                ## Notes
                Start from the **Reading queue** template. Pay most attention to the validation section; it is usually what separated the top solutions from the rest.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Six or more write-ups summarised on the same four questions, with one recurring technique tested in a live entry."
                cadence: rolling
              tasks:
                - "Collect six top-ranked solution write-ups from past finance competitions"
                - "Read one write-up and summarise its validation, features and models @recurring(monthly:20)"
                - "List the techniques that appear in more than one write-up"
                - "Test one recurring technique in your current competition"
            - name: Judged pitch for a case or trading competition
              description: |-
                ## Purpose
                Case competitions and the final rounds of many trading contests are judged on a short presentation of a strategy, its risks and its evidence. Learning to fit hypothesis, method, results, risk controls and limitations into a ten minute pitch, and to answer a hostile question about overfitting calmly, is a skill that transfers directly to research presentations and interviews.

                ## Milestones
                1. The judging criteria and time limit written down.
                2. A ten slide structure covering hypothesis, data, method, results, risk and limits.
                3. Two timed rehearsals in front of someone who asks hard questions.
                4. Answers prepared for overfitting, costs and capacity questions.
              priority: low
              frontmatter:
                mode: learning
                output_kind: deliverable
                success_criteria: "A pitch that fits the time limit in two timed rehearsals, with written answers to overfitting, cost and capacity questions."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Copy the judging criteria and time limit into your pitch notes"
                - "Outline a ten slide pitch from hypothesis to limitations"
                - "Rehearse twice with a timer and a friend asking hard questions"
                - "Write answers to the overfitting, cost and capacity questions you were asked"
            - name: Leakage audit before trusting a jump in score
              description: |-
                ## Purpose
                Sudden large improvements in a finance competition are far more often a leak than a discovery: a feature built with future data, an identifier that encodes the target or rows from the same day in train and validation. Auditing every big jump before building on it saves the embarrassment of a collapse on the private leaderboard, and organisers sometimes remove entries that exploit leaks against the rules.

                ## Milestones
                1. A rule set for what counts as a suspicious jump, such as twice the usual fold improvement.
                2. The feature or change behind the jump traced to its source data and timing.
                3. A shuffled-target and time-shifted test run on the change.
                4. A written verdict: genuine, leak or unclear, with any leak reported if the rules require it.

                ## Notes
                If you find a leak in the competition data itself, check the rules on reporting it. Exploiting a known leak against the rules can lead to disqualification.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every score jump above the agreed threshold has a written audit verdict with shuffled-target and time-shift test results."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the size of improvement that triggers a leakage audit"
                - "Trace the change behind the jump to its data source and timestamps"
                - "Rerun the change with a shuffled target and with features shifted in time"
                - "Record the audit verdict in the experiment log"
            - name: External data decision under the rules
              description: |-
                ## Purpose
                Market prices, macro series or text data can add signal, but competition rules often restrict external data to sources that are free, public and declared in the forum by a deadline. Deciding deliberately whether any outside data is allowed, worth the effort and point-in-time correct protects both the entry and its validation.

                ## Milestones
                1. The rule on external data and any declaration deadline written down.
                2. Each candidate source checked for licence, public availability and timestamps.
                3. Any allowed source tested on validation with the improvement recorded.
                4. A decision recorded to use or drop each source, with declarations made where required.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision for each external source, with rule compliance, licence and validation effect noted."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Copy the external data rule and any declaration deadline into your notes"
                - "Check each candidate source for licence and point-in-time timestamps"
                - "Test the allowed sources on validation and record the effect"
                - "Declare any source you keep in the forum if the rules require it"
            - name: Team merger decision before the deadline
              description: |-
                ## Purpose
                Most long competitions allow teams to merge until a set date, and a merger can add a diverse model and an extra pair of hands, or bring a rules problem if the other team's submission count is too high. Weighing a merger offer against diversity, submission counts, credit and working styles before the deadline avoids a rushed decision in the last week.

                ## Milestones
                1. The merger deadline and the combined submission limit rule written down.
                2. The other team's model correlation with yours checked on a shared validation set.
                3. Credit, code sharing and roles agreed in writing before any merger.
                4. The merger accepted or declined, with the reason recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded merger decision made before the deadline, with model correlation checked and credit terms agreed in writing."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Note the merger deadline and the combined submission count rule"
                - "Compare out-of-fold predictions with the other team on shared folds"
                - "Agree credit, code sharing and roles in writing"
                - "Accept or decline the merger and record the reason"
            - name: Compute choice for a heavy competition
              description: |-
                ## Purpose
                Large tick datasets or neural models can outgrow a laptop and free notebook quotas, and the choice between free tiers, a paid cloud instance, university compute or a hardware purchase has real money attached. A short comparison of cost per experiment, setup time and limits leads to a choice you can afford, made before the deadline pressure arrives.

                ## Milestones
                1. The competition's data size and expected experiment count estimated.
                2. Three options compared on cost, setup time, memory and quotas.
                3. A choice made with a monthly cost cap.
                4. The chosen setup tested on one full experiment.

                ## Notes
                Start from the **Purchase decision** template. Ask your department or society about research compute before paying; many universities have shared clusters for students.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded compute choice from three compared options, with a monthly cost cap and one full experiment run on it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Estimate data size and the number of experiments you plan to run"
                - "Compare free tiers, cloud instances and university compute on cost and limits"
                - "Choose an option and set a monthly cost cap"
                - "Run one full experiment on the chosen setup and note its cost"
            - name: Public and private leaderboard gap analysis
              description: |-
                ## Purpose
                When a competition closes, the private leaderboard often reshuffles hundreds of places, and the reasons are the most useful lesson the contest offers. Comparing your validation, public and private scores for every submission shows whether your validation was trustworthy and which choices the hidden data rewarded.

                ## Milestones
                1. Private scores collected for every logged submission after the close.
                2. Validation, public and private scores charted together.
                3. The submission that would have ranked best on private score identified.
                4. Two lessons about validation or selection written down for the next competition.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A chart of validation, public and private scores for every submission, with two written lessons for future competitions."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Download private scores for every submission after the competition closes"
                - "Chart validation, public and private scores side by side"
                - "Find which submission would have scored best on the private leaderboard"
                - "Write two lessons on validation and submission choice"
            - name: Stop, pivot or push decision mid-competition
              description: |-
                ## Purpose
                Halfway through a long competition many entrants are stuck: scores flat, ideas thin and other commitments growing. Deciding on purpose whether to push on, change approach or stop and write up what you have, using the log and your time budget, protects your other work and often produces a better outcome than drifting to the close.

                ## Milestones
                1. The last month's validation progress and hours spent summarised from the log.
                2. Three options written out: push, pivot to a new approach or stop and write up.
                3. One option chosen against your goal for the entry.
                4. The choice recorded with a date to look at it again.

                ## Notes
                Stopping early with a clean write-up is a legitimate result. A finished post-mortem is often worth more as evidence than a few extra places on the leaderboard.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded push, pivot or stop decision backed by a month of logged progress and hours."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Summarise last month's validation progress and hours from the log"
                - "Write the case for pushing on, pivoting and stopping in a few lines each"
                - "Choose one option against the goal you set for this entry"
                - "Record the decision and a date to revisit it"
            - name: Final two submissions selection
              description: |-
                ## Purpose
                Most long competitions score only the submissions you select at the end, often two, and many entrants pick their best public scores and fall down the private leaderboard. Choosing on validation evidence, with one steady submission and one higher-variance one, is a small decision with a large effect on final rank.

                ## Milestones
                1. The number of final selections allowed and the selection deadline confirmed.
                2. A shortlist of five submissions ranked on validation mean and fold spread.
                3. One steady and one bolder submission chosen with written reasons.
                4. Both selections confirmed on the platform before the deadline.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Final submissions chosen from a validation-ranked shortlist with written reasons and confirmed on the platform before the deadline."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Confirm how many final selections are allowed and the selection deadline"
                - "Shortlist five submissions by validation mean and fold spread"
                - "Choose one steady and one bolder submission and write why"
                - "Mark both selections on the platform and check they saved"
            - name: Final fortnight before a competition closes
              description: |-
                ## Purpose
                The last two weeks bring the merger deadline, final selections, last code runs and the temptation to start a brand new model. A written plan that freezes new ideas, schedules full reruns, books the final selection and leaves a buffer for platform outages lets you finish calmly with an entry you can reproduce.

                ## Milestones
                1. A dated plan for the last fourteen days with a freeze on new ideas from day seven.
                2. A full rebuild of the best pipeline from raw data completed.
                3. Final code submissions tested with a margin before the deadline.
                4. Final selections made at least 24 hours before the close.

                ## Notes
                Platforms slow down in the final hours as everyone submits at once. Treat the real deadline as one day earlier.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The competition closes with a reproduced best pipeline and final selections made at least 24 hours before the deadline."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Write a dated plan for the last fourteen days of the competition"
                - "Freeze new ideas from day seven and note the freeze in the log"
                - "Rebuild the best pipeline from raw data and confirm the score"
                - "Make final selections at least a day before the close"
            - name: Weekend datathon entry
              description: |-
                ## Purpose
                Sponsored datathons and hackathons compress a whole project into 24 to 48 hours, judged on insight and presentation as much as score. Preparing a starter kit, roles and a time plan before the weekend means the team spends Saturday on the problem rather than on installing libraries and arguing about the slides.

                ## Milestones
                1. Registration confirmed with the team and the judging criteria read.
                2. A starter kit ready: environment, loaders, plotting and a slide template.
                3. A time plan for the weekend with a hard stop for presentation work.
                4. A submission and presentation delivered on time.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A datathon submission and presentation delivered on time, built from a starter kit prepared before the event."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "Confirm the team's registration and read the judging criteria"
                - "Prepare a starter kit with environment, loaders and a slide template"
                - "Write an hour-by-hour plan with a fixed time to start the slides"
                - "Deliver the submission and presentation and note three lessons"
            - name: University trading competition with a simulated exchange
              description: |-
                ## Purpose
                Intercollegiate trading competitions combine algorithmic cases, live outcry or manual trading rounds and sometimes a pitch, with teams nominated by their university. Preparing for each case type, with practice on any released practice server and agreed roles for each round, is what lets a student team compete on decisions rather than on learning the software in the room.

                ## Milestones
                1. The team nominated and registration confirmed through the university.
                2. Every case type summarised with its scoring and limits.
                3. A practice plan completed for each case, using any practice materials released.
                4. Roles for each round agreed and travel or remote logistics settled.

                ## Notes
                Read each case package for position limits and penalties. In many cases a penalty for breaching a limit outweighs any trading profit.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The team competes in every case with practice completed for each case type and roles agreed in advance."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Ask your department or society how teams are nominated and by when"
                - "Summarise each case type with its scoring and position limits"
                - "Book practice sessions for each case on any released practice server"
                - "Agree who leads each round and settle travel or remote logistics"
            - name: Finals presentation and judging day
              description: |-
                ## Purpose
                Reaching a final usually means presenting to judges from trading firms or faculty, often with a few days' notice. Preparing the story, the evidence, the limitations and a calm answer to the inevitable overfitting question, and rehearsing it under time, turns a strong result into a strong impression on the people who hire.

                ## Milestones
                1. The finals format, time limit and judging panel confirmed.
                2. A presentation built around the result, method, evidence and limits.
                3. Two full rehearsals completed under time.
                4. Thank-you notes sent to judges or organisers you spoke with afterwards.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The finals presentation is delivered within time after two rehearsals, with follow-up notes sent within three days."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Confirm the finals format, time limit and who is judging"
                - "Build the presentation around method, evidence and limitations"
                - "Run two full timed rehearsals with questions"
                - "Send short thank-you notes to the judges you met"
            - name: Post-competition solution write-up
              description: |-
                ## Purpose
                Clear write-ups are what turn a competition into evidence: they show your validation thinking, what failed and what you learned, which is what admissions panels and quant interviewers probe. Writing yours within a month of the close, while the log is fresh, and publishing it where the rules allow, gives you something to link from a CV.

                ## Milestones
                1. An outline covering problem, validation, features, models, what failed and private result.
                2. A draft of 1,000 to 2,000 words with charts from the log.
                3. The draft checked against the data licence for anything you may not publish.
                4. The write-up published or saved as a portfolio piece.

                ## Notes
                Start from the **Portfolio piece** template. Report the private result honestly, including any drop from the public leaderboard; reviewers trust candidates who explain a shake-up.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A licence-checked write-up of 1,000 to 2,000 words covering validation, failures and the private result, published or saved as a portfolio piece."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Outline the write-up from problem to private result"
                - "Ask the agent to draft a first version from your log and retrospective notes"
                - "Check the draft against the data licence and remove anything restricted"
                - "Publish the write-up or save it as a portfolio piece and link it"
            - name: Prize, eligibility and tax paperwork
              description: |-
                ## Purpose
                Winning a prize often triggers identity checks, tax forms, a code review by the organiser and sometimes a licence or assignment of the winning solution, all with short deadlines. Organising the paperwork, keeping copies and asking an accountant how prize money is treated where you live prevents a prize being forfeited or a surprise at tax time.

                ## Milestones
                1. The organiser's prize conditions and deadlines saved.
                2. Identity, tax and payment forms completed and copies kept.
                3. Any code or licence the organiser requires delivered by its deadline.
                4. The prize recorded for your accountant or tax return, with their advice noted.

                ## Notes
                How prize money is taxed depends on your country and status, for example student, employee or visa holder. Ask an accountant or the tax authority rather than guessing, and check any visa conditions on earnings.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "All prize forms and required code delivered by the organiser's deadlines, with the prize recorded for tax and an adviser's view noted."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Save the organiser's prize conditions and every deadline in them"
                - "Complete the identity, tax and payment forms and keep copies"
                - "Deliver any required code or licence before the deadline"
                - "Ask your accountant how the prize should be reported"
            - name: Competing alongside a full course load
              description: |-
                ## Purpose
                Students who compete during term usually burn out in the weeks when coursework, exams and the competition close collide. A term plan that limits you to one active competition, sets a weekly cap, and schedules quiet weeks around exams lets you keep competing without your grades paying for it.

                ## Milestones
                1. Term deadlines and exam weeks marked in one calendar.
                2. One active competition chosen for the term, with others parked.
                3. A weekly hour cap set, lower in assessment weeks.
                4. A weekly check-in on whether coursework is on track.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "One active competition per term, a weekly hour cap and a weekly coursework check-in kept through the term."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Mark this term's coursework deadlines and exam weeks in your calendar"
                - "Choose the single competition you will keep active this term"
                - "Set a weekly hour cap and a lower cap for assessment weeks"
                - "Check coursework is on track before any competition session @recurring(weekly:thu)"
            - name: Competition results as CV and application evidence
              description: |-
                ## Purpose
                Admissions panels for quant master's programmes and recruiters for research internships see many lines saying top ten percent with no context. Describing a result with the field size, your role, the method and a link to the write-up, and keeping a running list of results each quarter, makes competitions count as evidence rather than decoration.

                ## Milestones
                1. A list of every competition entered with field size, rank, percentile and role.
                2. Two or three CV lines written with method, result and a link.
                3. A short paragraph on one competition ready for a personal statement or cover letter.
                4. The results list updated each quarter.

                ## Notes
                Start from the **Resume** template. Give rank with field size and team size, and never overstate your part in a team result; interviewers ask.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A results list with field size and role for every entry, two or three CV lines with links and a statement paragraph ready."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every competition entered with rank, field size and your role"
                - "Write two or three CV lines that name the method and link the write-up"
                - "Draft a statement paragraph about the competition you learned most from"
                - "Update the competition results list and CV lines @recurring(quarterly)"
            - name: Translating thesis methods into a competition entry
              description: |-
                ## Purpose
                PhD and postdoc researchers moving towards quant finance are often asked to show their methods working on financial data. Entering one competition where a method from your thesis, such as a Bayesian model, a signal processing technique or a graph method, can be tested honestly against strong baselines produces concrete evidence and a story for interviews.

                ## Milestones
                1. One thesis method matched to a competition whose data suits it.
                2. The method compared with a strong standard baseline on the same validation folds.
                3. An honest record of where it helped, matched or lost to the baseline.
                4. A two paragraph summary linking the thesis work to the competition result.

                ## Notes
                Check your funding terms and any university policy on outside activities before entering a sponsored competition during a funded position.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A thesis method tested against a strong baseline on the same folds, with results and a two paragraph summary written."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "List two or three thesis methods that could apply to financial data"
                - "Pick a competition whose data structure suits one of those methods"
                - "Compare the method with a strong baseline on identical validation folds"
                - "Write a two paragraph summary linking the thesis to the result"
            - name: Employer policy check before competing while employed
              description: |-
                ## Purpose
                Anyone working at a bank, fund or technology firm usually has rules on outside activities, intellectual property created in their own time and use of employer data or hardware. Checking the contract and policy, and getting written clearance where needed, before entering a sponsored competition protects both the job and any prize.

                ## Milestones
                1. The employment contract and outside activities policy read for IP and competition clauses.
                2. Any need for approval identified and written clearance requested if required.
                3. A rule set to use only personal hardware, personal accounts and your own time.
                4. The clearance or policy note filed with the competition project.

                ## Notes
                Never use employer data, code or compute for a competition. If the policy is unclear, ask your compliance team or a qualified adviser rather than drawing your own conclusion.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A filed note of the relevant contract and policy clauses, with written clearance obtained where the policy requires it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the outside activities and intellectual property clauses in your contract"
                - "Check whether a sponsored competition needs approval under the policy"
                - "Request written clearance from compliance or your manager if required"
                - "File the clearance or policy note with the competition project"
            - name: Running a university competition team
              description: |-
                ## Purpose
                University quant societies often field teams in trading and data competitions but lose their know-how every year as members graduate. Running the team with open selection, a practice programme, a shared code base and a handover document means each year's team starts stronger than the last.

                ## Milestones
                1. A fair selection process published to members.
                2. A practice programme of sessions before each main competition.
                3. A shared repository of past bots, notebooks and case notes.
                4. A handover document written for next year's captain.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A published selection process, a practice programme run before each main event and a handover document for the next captain."
                cadence: cyclic
              tasks:
                - "Publish how team places are chosen and when trials happen"
                - "Plan practice sessions in the weeks before each main competition"
                - "Run the society's competition practice session @recurring(monthly:10)"
                - "Write a handover document of contacts, code and lessons for next year"
            - name: Mentoring a first-time competitor
              description: |-
                ## Purpose
                Pairing an experienced competitor with a newcomer for one competition spreads good habits faster than any guide: validation first, log everything, read the rules. Mentoring one person through a full entry with a monthly check-in also sharpens your own understanding and gives you a concrete example of leadership to discuss.

                ## Milestones
                1. A mentee matched and a competition chosen together.
                2. The mentee's validation split and baseline reviewed in the first fortnight.
                3. Monthly check-ins held until the competition closes.
                4. A short joint retrospective written after the close.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A mentee completes a full competition entry with reviewed validation, monthly check-ins and a joint retrospective."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Agree with your mentee which competition they will enter"
                - "Review their validation split and baseline in the first fortnight"
                - "Hold a mentoring check-in on their log and next steps @recurring(monthly:12)"
                - "Write a short joint retrospective after the competition closes"
            - name: Reusable feature and validation library
              description: |-
                ## Purpose
                After three or four competitions, experienced entrants find they are rewriting the same purged time splits, per-era metrics, neutralisation and blending code. Extracting them into a small tested library with documentation makes each new entry faster, makes bugs rarer and is itself a code sample worth showing.

                ## Milestones
                1. Functions repeated across past competitions listed.
                2. Time splits, per-era metrics, neutralisation and blending moved into a package.
                3. Unit tests covering each function on small known cases.
                4. The library used in a new competition and reviewed each quarter.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A tested package of splits, metrics, neutralisation and blending used in at least one new competition."
                cadence: rolling
              tasks:
                - "List the functions you copied between your last three competitions"
                - "Move splits, metrics and blending code into one package with tests"
                - "Use the package to start your next competition"
                - "Review the library for stale or untested functions @recurring(quarterly)"
            - name: Competition model turned into an honest research study
              description: |-
                ## Purpose
                A competition model is tuned to one dataset, one metric and one test period, and most such models fail out of sample in live markets. Turning one into a proper research study, with a hypothesis, fresh data the competition never touched, realistic costs and a clear statement of what failed, shows the research judgement that firms actually hire for.

                ## Milestones
                1. A written hypothesis for why the competition signal might be real.
                2. The model tested on a later or different dataset with point-in-time data.
                3. Results reported with realistic costs and the number of variants tried.
                4. A study note stating plainly what held and what did not.

                ## Notes
                This is a research exercise, not a trading plan. Do not trade a competition model with real money on the strength of a leaderboard; if you ever test one live, do it under the risk limits and written stop rule of a separate personal trading plan.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A study note testing a competition model on unseen data with costs and trial counts reported and an explicit verdict."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Write the hypothesis for why the competition signal might persist"
                - "Find a later or separate dataset the competition never used"
                - "Test the model with realistic costs and record every variant tried"
                - "Ask the agent to summarise the results into a study note you then edit"
            - name: Designing a leak-resistant competition for others
              description: |-
                ## Purpose
                Running a competition for a society, course or meetup tests everything you have learned from the other side: a split that cannot be gamed, a metric that rewards the right behaviour, rules people can follow and a dataset you have the right to share. Designing one well is a demanding piece of work and a strong signal of judgement.

                ## Milestones
                1. A dataset chosen with clear rights to share it with entrants.
                2. A time-based split with a hidden private test and a purge gap.
                3. A metric and rules document reviewed by two experienced competitors.
                4. The competition run, with a post-mortem on leaks and shake-up.

                ## Notes
                Ask two people to try to break the competition before launch. If they find a leak in an afternoon, entrants will find it in an hour.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A competition launched with a reviewed split, metric and rules document, and a post-mortem written after it closes."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Choose a dataset and confirm you have the right to share it"
                - "Build a time-based split with a hidden private test and a gap"
                - "Ask two experienced competitors to try to break the split and metric"
                - "Run the competition and write a post-mortem on leaks and shake-up"
---

# Quant Research Competitions

This area is for students and researchers who enter quant and data competitions, from forecasting contests on anonymised market data to university trading competitions on simulated exchanges, and want something to show for the hours. It starts with foundations (mapping the competitions, reading the rules, building a validation split that mirrors the hidden test and a first baseline), moves through the weekly machinery of work sessions, submission logs and team syncs, then the skills that win (feature work, tree models, neutralisation, ensembling, runtime limits, trading bots, pitching), the decisions that decide final rank, the events themselves, situations from a full course load to a day job, and finally specialist work such as designing a competition for others.

The rhythms are a weekly work session, submission log review, forum read and team sync, a weekly live round where a tournament runs one, a monthly retrospective, spend check and archive, a quarterly results update and a yearly season plan. The Metrics log, Meeting notes, Reading queue, Purchase decision, Portfolio piece and Resume templates pair with the log, team syncs, solution study, compute choice, write-ups and applications. A leaderboard rank is not a trading strategy: most models that score well fail out of sample in live markets, and nothing here is trading advice. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
