---
id: quant-finance.quant-research-code-quality
name: Quant Research Code Quality
description: "Version control for every study, tests for data and signals, notebooks moved into reviewed modules, a shared research library and a rule that no result counts until someone has read the code behind it."
category: business
version: 1.0.0
tags: [quant-finance, quant-research-code-quality, engineer, researcher, code-review, testing, notebooks, reproducibility]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - remediation-plan
    - development-plan
    - onboarding-30-60-90
    - portfolio-piece
  pillars:
    - name: Quantitative Finance & Trading
      emoji: "🧮"
      description: "Systematic research and trading run like engineering: alpha research and honest backtests, factor and risk models, execution and microstructure, statistics and machine learning, quant development and market data, prop-firm evaluations and personal algorithmic trading under strict risk rules, and quant careers. Organisation and method only, never trading advice."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Quant Research Code Quality
          description: "Keeping research code reviewable: version control, tests for data and signals, shared libraries, notebooks moved to modules and review before results count."
          projects:
            - name: Git repository for every live research question
              description: |-
                ## Purpose
                Code that lives in a folder called final_v3_really is code nobody can review, roll back or rerun. Putting every active study under version control, even the scrappy ones, gives each result a commit it came from and ends the week lost to working out which copy produced last month's chart.

                ## Milestones
                1. Every active research study listed with where its code currently lives.
                2. Each study in its own repository or a clearly named folder of a team monorepo, with history starting today.
                3. A remote copy on the team's hosted git service with access limited to the people who need it.
                4. A one-line readme in each repository saying the question, the owner and the status.

                ## Notes
                Do not wait to tidy the code first. Commit it as it is, then improve it in reviewable steps.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every active study has a version-controlled home on the team's git service with a readme naming its question and owner."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every study you are working on and where its code sits today"
                - "Initialise a repository for each study and commit the code as it stands"
                - "Push each repository to the team git service with restricted access"
                - "Write a three-line readme naming the question, owner and status"
            - name: Standard layout for research repositories
              description: |-
                ## Purpose
                When every researcher arranges code differently, a reviewer spends the first twenty minutes of every review just finding the signal definition. One agreed layout, with separate places for source modules, notebooks, configs, tests and generated outputs, makes any repository readable by anyone on the team within a minute.

                ## Milestones
                1. A written layout naming folders for src, notebooks, configs, tests, scripts and outputs.
                2. A template repository that a new study can be created from in one command.
                3. Two existing studies moved into the layout as a trial, with problems noted.
                4. The layout adjusted from the trial and agreed by the researchers who will use it.

                ## Notes
                Keep generated outputs out of the source tree. A results folder that is git-ignored and rebuilt by a script beats committed charts that silently go stale.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A template repository exists and at least two studies follow its layout, agreed in writing by the research team."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Sketch the folder layout on one page and share it with two researchers"
                - "Build a template repository with empty src, tests, configs and notebooks folders"
                - "Move one existing study into the template and note what did not fit"
                - "Agree the final layout at the next team meeting and record it in the template readme"
            - name: Keeping data, credentials and outputs out of research repos
              description: |-
                ## Purpose
                One vendor data file pushed to a shared repository can breach a licence, and an API key in a notebook cell can outlive the person who pasted it. A short rule, a gitignore that enforces it and a secret scan on the history close both holes before an audit or a departing colleague finds them.

                ## Milestones
                1. A written rule on what never goes into git: licensed data, credentials, large outputs and personal data.
                2. A shared gitignore covering data folders, output folders, environment files and notebook checkpoints.
                3. Every research repository scanned for committed secrets and large files, with findings recorded.
                4. Any exposed credential rotated and any licensed data removed from history with the data owner informed.

                ## Notes
                Removing a file in a new commit does not remove it from history. If something sensitive was pushed, rotate the credential first, then rewrite history with the repository owner.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All research repositories carry the shared gitignore and a recorded secret scan shows no live credentials or licensed data in history."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the five-line rule on what must never be committed"
                - "Add the shared gitignore to every research repository"
                - "Run a secret and large-file scanner over each repository's full history"
                - "Rotate any exposed key and ask the data owner how to handle leaked files"
            - name: Pre-commit hooks for formatting and linting research code
              description: |-
                ## Purpose
                Review comments about spacing and unused imports waste the attention a reviewer should spend on look-ahead and units. Pre-commit hooks that format code, sort imports, lint for common errors and strip notebook outputs make style automatic, so reviews are about whether the research is right.

                ## Milestones
                1. A formatter and a linter chosen for Python research code, with settings in one config file.
                2. A pre-commit configuration in the template repository running both plus notebook output stripping.
                3. The hooks installed in every active research repository and the existing code reformatted in one commit.
                4. The same checks running in CI so code pushed without hooks is still caught.

                ## Notes
                Reformat in a single commit with no other changes and add it to the blame ignore list, so history stays readable.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every active research repository runs the agreed formatting, lint and notebook-stripping hooks locally and in CI."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pick one formatter and one linter and write their settings into a config file"
                - "Add a pre-commit configuration with notebook output stripping to the template"
                - "Reformat each repository in a single dedicated commit"
                - "Update the pinned hook versions and rerun them on all files @recurring(monthly:27)"
            - name: Honest audit of the team's current research code
              description: |-
                ## Purpose
                Before setting standards, it helps to know whether the problem is untested signals, notebooks nobody can rerun or five copies of the same returns function. A one-week audit of a sample of studies gives a baseline to measure against and tells you which two fixes will pay back first.

                ## Milestones
                1. Ten studies sampled across researchers, including at least two that fed live or presented results.
                2. Each scored on version control, tests, rerunability, duplication and review history using the same sheet.
                3. The three most common problems ranked by how much risk they carry for reported results.
                4. A short written baseline shared with the team, with names removed from individual scores.

                ## Notes
                Score the code, not the person. An audit that embarrasses individuals gets hidden notebooks next time.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written baseline covering ten studies, with the three most common problems ranked by risk, is shared with the team."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Choose ten studies to sample, including two that reached a committee or production"
                - "Build a scoring sheet with five criteria and a one-line definition for each"
                - "Try to rerun each sampled study from a clean checkout and record what broke"
                - "Ask the agent to summarise the scoring sheet into a one-page baseline for the team"
            - name: Definition of done for a research result
              description: |-
                ## Purpose
                Any Sharpe ratio on a slide carries the same weight whether the code behind it was reviewed or written at midnight. Agreeing in writing what must be true before a number counts, such as committed code, passing tests, a named reviewer and a rerun from a clean checkout, gives everyone the same bar and gives reviewers authority to hold a result back.

                ## Milestones
                1. A one-page definition of done listing the conditions a result must meet before it is presented or promoted.
                2. The definition agreed by the head of research and the researchers who will be held to it.
                3. A results register where each counted result records its commit, data version and reviewer.
                4. The first three results put through the definition, with any friction fed back into the wording.

                ## Notes
                Start from the **Operational checklist** template. Keep the list short enough to check in five minutes, or people will skip it under deadline.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed-off definition of done exists and the results register shows commit, data version and reviewer for every result presented since."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Draft six conditions a result must meet before it is shown outside the author's desk"
                - "Review the draft with the head of research and two researchers"
                - "Create the results register with columns for commit, data version and reviewer"
                - "Run the next three results through the definition and record what slowed them down"
            - name: Branching and merge rules for research work
              description: |-
                ## Purpose
                Exploratory branches tend to live for months, diverge from the shared library and become impossible to merge. Light rules, such as short-lived branches, rebasing weekly and merging only reviewed code to main, keep exploratory work separate from code others depend on without slowing experiments down.

                ## Milestones
                1. A written branching rule covering naming, maximum branch age and who may merge to main.
                2. Main protected so it accepts changes only through a reviewed pull request with passing checks.
                3. A convention for exploratory branches that are never meant to merge, so they do not clutter reviews.
                4. Long-lived branches older than three months listed and either merged, archived or deleted by their owners.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Main is protected in every research repository and no non-exploratory branch is older than the agreed maximum age."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every branch older than three months across the research repositories"
                - "Write the branch naming, age and merge rule on one page"
                - "Turn on branch protection for main in each repository"
                - "Ask each owner to merge, archive or delete their stale branches"
            - name: Notebook diffing and output stripping
              description: |-
                ## Purpose
                Notebook diffs full of base64 images and execution counts are diffs nobody reads, so notebook changes go unreviewed by default. Stripping outputs on commit and using a notebook-aware diff tool turns notebook changes back into code a colleague can review line by line.

                ## Milestones
                1. Outputs and execution counts stripped automatically on commit in every research repository.
                2. A notebook-aware diff and merge tool installed and configured for the team's git service or editors.
                3. A paired script format, such as percent-cell Python files, trialled for notebooks under active review.
                4. A one-paragraph note in the template readme on how to review a notebook change.

                ## Notes
                If a chart in a notebook is part of the evidence, save it to the outputs folder from a script with the commit hash in the filename instead of relying on the notebook to hold it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Notebook pull requests in every research repository show readable code-only diffs, and the review note is in the template readme."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Open a recent notebook pull request and note how much of the diff is output"
                - "Configure output stripping and a notebook-aware diff tool"
                - "Pair one active notebook with a plain script file and review a change through it"
                - "Write the notebook review note into the template readme"
            - name: Parameters in config files, not buried in cells
              description: |-
                ## Purpose
                Typing one lookback window into cell 14 and another into cell 31 is how two charts from the same notebook end up disagreeing. Moving every parameter a result depends on into a versioned config file means a run can be described, compared and repeated by naming the config and the commit.

                ## Milestones
                1. A config format chosen, such as YAML or TOML, with a loader that validates types and required keys.
                2. Universe, date ranges, lookbacks, cost assumptions and seeds moved out of code for one live study.
                3. Each run writing a copy of its resolved config beside its outputs.
                4. A search of active studies for remaining hard-coded parameters, with the list assigned to owners.

                ## Notes
                Validate configs on load and fail loudly on unknown keys. A typo in a parameter name that silently falls back to a default is worse than a crash.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One live study reads every result-affecting parameter from a validated config file and saves the resolved config with each run's outputs."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Search one study for numbers that change results and list each with its location"
                - "Choose a config format and write a loader that rejects unknown keys"
                - "Move the listed parameters into a config file and rerun to confirm identical output"
                - "Save the resolved config next to every run's outputs"
            - name: Weekly research pull request review
              description: |-
                ## Purpose
                Code review is the cheapest place to catch a look-ahead bug, long before it reaches a committee or capital. A fixed weekly slot where every open research pull request gets a reviewer, and reviews follow a short checklist covering timing, units, universe and costs, makes review routine rather than a favour.

                ## Milestones
                1. A weekly slot in the team calendar for reviewing open research pull requests.
                2. A review checklist covering data timing, index alignment, units, universe filters, costs and tests.
                3. Every research pull request assigned a reviewer within two working days of opening.
                4. A monthly count of pull requests reviewed and median time to first review, shared with the team.

                ## Notes
                Small pull requests get real reviews. Ask authors to keep changes under about 400 lines and to say in the description what result the change affects.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Over a quarter, every research pull request merged to main has a named reviewer and the median time to first review is under two working days."
                cadence: rolling
              tasks:
                - "Write the review checklist and pin it in the template repository"
                - "Book a recurring weekly review slot for the research team"
                - "Assign a reviewer to every open research pull request @recurring(weekly:tue)"
                - "Post the count of reviews and median time to first review @recurring(monthly:3)"
            - name: Weekly notebook-to-module promotion
              description: |-
                ## Purpose
                Functions that start in a notebook and get used twice belong in a module with a test, or they will be copied, edited and diverge. A short weekly habit of promoting reused notebook code into the study's source package keeps notebooks thin and the logic that matters testable.

                ## Milestones
                1. A rule of thumb agreed for promotion, such as any function used in two notebooks or feeding a reported number.
                2. A weekly half hour in each researcher's calendar for promoting code.
                3. Notebooks importing from the study's package instead of defining core logic inline.
                4. A count of promoted functions with tests kept in the study readme.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "After eight weeks, every function feeding a reported number in the study lives in a tested module and notebooks only import and plot."
                cadence: rolling
              tasks:
                - "Mark the functions in your main notebook that feed a reported number"
                - "Promote reused notebook functions into the package with one test each @recurring(weekly:fri)"
                - "Replace inline definitions in notebooks with imports from the package"
                - "Keep a running count of promoted and tested functions in the readme"
            - name: Monthly research repository hygiene pass
              description: |-
                ## Purpose
                Research repositories collect abandoned notebooks, stale branches and scripts that no longer run, and each one is a trap for the next person who assumes it works. A monthly pass that archives, deletes or labels the clutter keeps the repository an honest picture of what currently stands.

                ## Milestones
                1. A monthly hygiene slot with a checklist: stale branches, broken scripts, orphaned notebooks and outdated readmes.
                2. An archive folder or tag convention for work kept for the record but no longer maintained.
                3. Every script in the repository either running cleanly or clearly labelled as archived.
                4. A one-line hygiene note in the repository changelog each month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For three consecutive months, each research repository has a hygiene note and no unlabelled script that fails to run."
                cadence: rolling
              tasks:
                - "Write the hygiene checklist and add it to the template repository"
                - "Run the hygiene checklist on each research repository you own @recurring(monthly:11)"
                - "Move dead notebooks into the archive folder with a note on why they stopped"
                - "Add the month's hygiene note to the changelog"
            - name: Automated data validation suite for research inputs
              description: |-
                ## Purpose
                Vendors that silently drop a day of prices or reissue history will change your results without changing a line of code. Automated checks on every research data load, covering schema, ranges, missing dates, duplicate keys and unexplained history changes, flag the problem before a signal is computed on it.

                ## Milestones
                1. The data sets each active study reads listed with their owner and refresh schedule.
                2. Checks written for schema, value ranges, calendar gaps, duplicates and changes to past values.
                3. The suite running automatically after each data load and producing a short report.
                4. A rule that studies do not run on a data load with failing checks unless the failure is signed off.

                ## Notes
                Check that history has not changed, not just that today's file arrived. Restated history is the failure most likely to move a backtest without anyone noticing.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every data set used by an active study has automated checks that run after each load, and failures are logged with a sign-off or a fix."
                cadence: rolling
              tasks:
                - "List each data set your studies read with its refresh schedule"
                - "Write schema, range, gap and duplicate checks for the most used data set"
                - "Add a check that compares past values with the previous load"
                - "Read the overnight data validation report before running research @recurring(daily)"
            - name: Signal regression tests on every change
              description: |-
                ## Purpose
                A refactor that changes a signal value in the fourth decimal place can still flip a ranking and change a portfolio. Storing reference outputs for each signal on a fixed data slice and comparing against them on every change makes any behavioural change visible and deliberate.

                ## Milestones
                1. A fixed, small reference data slice stored with each study, frozen and checksummed.
                2. Reference signal outputs saved for every production or presented signal.
                3. A test that recomputes each signal on the slice and fails on differences beyond an agreed tolerance.
                4. A rule that updating a reference output needs a pull request explaining why the change is correct.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every presented or production signal has a stored reference output, and CI fails any change that moves it without an approved explanation."
                cadence: rolling
              tasks:
                - "Freeze a small reference data slice and record its checksum"
                - "Save reference outputs for each signal you have presented"
                - "Add a regression test comparing signals against the references in CI"
                - "Review any reference updates merged in the past week @recurring(weekly:mon)"
            - name: Weekly code reading session for the research pod
              description: |-
                ## Purpose
                Most researchers never read each other's code unless asked to review it, so good patterns and recurring bugs stay local. Forty-five minutes a week reading one piece of research code together, with the author present, spreads idioms, surfaces shared mistakes and makes review feel normal.

                ## Milestones
                1. A weekly slot booked and a rota of authors for the next two months.
                2. Each session reading one function or module of 100 to 300 lines on a shared screen.
                3. A running list of patterns to copy and pitfalls found, kept in the team wiki.
                4. At least two pitfalls from the list turned into lint rules, tests or checklist items.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Over a quarter, at least ten sessions are held and two pitfalls from the list become automated checks or checklist items."
                cadence: rolling
              tasks:
                - "Propose the session format and an author rota to the pod"
                - "Hold the weekly code reading with the chosen author @recurring(weekly:thu)"
                - "Add patterns and pitfalls found to the wiki list after each session"
                - "Turn one pitfall from the list into a lint rule or test"
            - name: Research code issue tracking and triage
              description: |-
                ## Purpose
                Bugs in research code are often mentioned in chat and then forgotten, including the ones that affect numbers already reported. A simple issue tracker with a label for result-affecting bugs and a weekly triage keeps those visible until someone checks which results they touched.

                ## Milestones
                1. One place for research code issues, with labels for bug, result-affecting, data and tech debt.
                2. Every known bug from chat and notes moved into the tracker with an owner.
                3. A weekly triage that reviews new issues and checks result-affecting ones against the results register.
                4. Issues older than ninety days with no activity closed or re-confirmed each month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every result-affecting bug in the tracker records which reported results were checked and whether any changed."
                cadence: rolling
              tasks:
                - "Set up issue labels including one for result-affecting bugs"
                - "Search team chat for bugs mentioned in the last three months and file them"
                - "Triage new research code issues and check results they touch @recurring(weekly:wed)"
                - "Close or re-confirm issues with no activity for ninety days @recurring(monthly:4)"
            - name: Contributing to the shared research library
              description: |-
                ## Purpose
                Shared libraries of returns, calendars, universes and common transforms only stay useful if researchers actually put tested code into it rather than keeping private versions. A regular contribution slot and a light acceptance bar turn the library into the default place good research code ends up.

                ## Milestones
                1. A written acceptance bar for the library: docstring, tests, no hidden data access and a named owner.
                2. A monthly slot for each researcher to propose one function for the library.
                3. Private copies of library functions found in studies and replaced with imports.
                4. A changelog entry for every accepted contribution so users know what changed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Over six months, each researcher has contributed at least one tested function and no active study keeps a private copy of a library function."
                cadence: rolling
              tasks:
                - "Write the acceptance bar for library contributions on one page"
                - "Propose one tested function from your studies to the shared library @recurring(monthly:18)"
                - "Search your studies for private copies of library functions"
                - "Replace each private copy with an import and rerun the regression tests"
            - name: Monthly clean-checkout reproduction of a headline result
              description: |-
                ## Purpose
                Results quietly stop being reproducible as data, dependencies and code drift. Picking one headline result each month and rerunning it from a clean checkout on a fresh environment shows whether the team could defend its numbers today, and every failure points to a specific gap.

                ## Milestones
                1. A list of headline results from the results register, each with commit, config and data version.
                2. One result rerun each month from a clean checkout in a fresh environment by someone other than the author.
                3. Each rerun recorded as matched, matched within tolerance, or failed, with the cause.
                4. Every failure turned into an issue with a fix and a rerun.

                ## Notes
                Rotate the person doing the rerun. The author always knows the undocumented step.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve monthly reruns are recorded over a year, with every failure linked to an issue that was fixed and re-verified."
                cadence: rolling
              tasks:
                - "Pick the headline results worth defending from the results register"
                - "Rerun one headline result from a clean checkout and fresh environment @recurring(monthly:24)"
                - "Record whether it matched and the cause of any difference"
                - "File an issue for each failed reproduction with the steps that broke"
            - name: Quarterly research code quality review
              description: |-
                ## Purpose
                Without a few numbers, code quality talk becomes opinion. A quarterly look at a short set of measures, such as share of reported results with a reviewer, reproduction pass rate, open result-affecting bugs and notebook-only logic, shows whether standards are holding and where to spend the next quarter.

                ## Milestones
                1. Four or five measures chosen, each with a definition and where the number comes from.
                2. The first quarter's numbers collected as a baseline.
                3. A one-page quarterly review with trends, one thing that improved and one to fix next.
                4. The fix for next quarter assigned to an owner and tracked as an issue.
              priority: low
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Four consecutive quarterly reviews exist, each with measured trends and a named fix carried into the next quarter."
                cadence: cyclic
              tasks:
                - "Choose four measures and define how each is counted"
                - "Collect the measures and write the one-page quarterly review @recurring(quarterly)"
                - "Assign next quarter's fix to an owner"
                - "Share the review with the head of research"
            - name: Unit tests for signal and feature functions
              description: |-
                ## Purpose
                Most researchers test signals by looking at a chart, which catches big mistakes and misses the subtle ones that matter. Learning to write small pytest tests with hand-computed expected values, edge cases such as missing data and single-stock universes, and clear failure messages makes signal code checkable by someone who did not write it.

                ## Milestones
                1. Pytest set up in a study with fixtures for small synthetic price and volume frames.
                2. Five signal functions tested against values worked out by hand or in a spreadsheet.
                3. Edge cases covered: missing values, a single asset, a holiday gap and a constant price series.
                4. Tests running in CI and the pattern written up as a short example for the team.

                ## Notes
                Build test frames small enough to compute by hand, five assets and ten dates. A test you cannot check by hand only tests that the code agrees with itself.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five signal functions have hand-checked unit tests including four edge cases, running in CI, with a written example shared with the team."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Build a five-asset, ten-date synthetic price frame as a pytest fixture"
                - "Compute the expected output of one signal by hand in a spreadsheet"
                - "Write tests for that signal including missing data and a single asset"
                - "Extend the pattern to four more signals and add them to CI"
            - name: Data tests for schemas, ranges and point-in-time rules
              description: |-
                ## Purpose
                Loading and signal functions assume things about their inputs, sorted dates, no duplicates, prices above zero, fundamentals available only after their report date, and nothing checks those assumptions until a result looks too good. Learning to declare data contracts with a schema validation library turns those assumptions into tests that run at every function boundary.

                ## Milestones
                1. A schema validation library chosen and installed in one study.
                2. Schemas written for the main inputs covering types, ranges, uniqueness and sort order.
                3. A point-in-time check that no fundamental field is used before its availability date.
                4. Schema checks wired into the study's loading functions so bad data fails before any signal runs.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The study's main inputs are validated against declared schemas on load, including a point-in-time availability check that has caught at least one seeded error."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write down the assumptions your loading code makes about each input"
                - "Express those assumptions as schemas in a validation library"
                - "Add a test that fails if a fundamental is used before its report date"
                - "Seed a deliberate bad row and confirm the schema check stops the run"
            - name: Tests that catch look-ahead bias in feature code
              description: |-
                ## Purpose
                An off-by-one shift or a centred rolling window can let tomorrow's price leak into today's signal, producing a backtest that looks brilliant and trades badly. Tests built to detect leakage, such as truncating the future and checking past values do not change, catch the bug mechanically instead of relying on a reviewer's eye.

                ## Milestones
                1. A truncation test written: compute features on the full history and on history cut at a date, then compare up to that date.
                2. A shuffled-future test showing features are unchanged when data after each date is randomised.
                3. Both tests applied to every feature in one study, with any failures fixed.
                4. The tests packaged as a reusable helper in the shared research library.

                ## Notes
                Watch for centred windows, forward fills across report dates, cross-sectional normalisation that uses the whole sample, and resampling that labels a bar with its end time.
              priority: high
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Every feature in one study passes truncation and shuffled-future tests, and the helper is available in the shared library."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write a truncation test comparing features on full and cut-off histories"
                - "Write a test that randomises future data and checks past features are unchanged"
                - "Run both tests over every feature in one study and fix failures"
                - "Package the two tests as a helper in the shared research library"
            - name: Refactoring a notebook into a tested package
              description: |-
                ## Purpose
                Long notebooks hide state: a variable set in a deleted cell, a filter applied only if cells run in a certain order. Taking one important notebook and refactoring it into a small package of pure functions with tests, then a thin notebook that only calls and plots, is the single best way to learn what reviewable research code looks like.

                ## Milestones
                1. One notebook that feeds a reported result chosen and run top to bottom with outputs saved as a reference.
                2. Core logic moved into functions with explicit inputs and outputs, no reliance on global state.
                3. Tests written for each function and the refactored pipeline reproducing the saved reference.
                4. A thin notebook left behind that imports, runs and plots, under 100 lines of code.

                ## Notes
                Reproduce the reference first, improve second. If the refactored code gives a different number, find out which version was right before changing anything else.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "The refactored package reproduces the original notebook's reference output and the remaining notebook is under 100 lines of calls and plots."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Restart the kernel, run the notebook top to bottom and save its outputs"
                - "Move the data loading and signal logic into functions with explicit arguments"
                - "Write tests that compare the refactored pipeline with the saved outputs"
                - "Cut the notebook down to imports, a run call and plots"
            - name: Type hints and static checks for research code
              description: |-
                ## Purpose
                Passing a Series where a DataFrame was expected, or daily returns where log returns were meant, often produces a number rather than an error. Type hints and a static checker catch a class of these mistakes before code runs, and good type names document units and frequency for the next reader.

                ## Milestones
                1. A static type checker configured in one study at a lenient level.
                2. Type hints added to every public function in the study's package.
                3. Type aliases or small classes used for units that are easy to confuse, such as simple versus log returns.
                4. The checker running in CI and the strictness raised one step once the study passes.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One study's public functions are fully type-hinted, the static checker passes in CI and at least one unit-confusion alias is in use."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Configure a static type checker for one study at a lenient level"
                - "Add type hints to every public function in the study's package"
                - "Define named types for simple and log returns and use them"
                - "Add the type check to CI and raise strictness one level"
            - name: Designing research functions colleagues can reuse
              description: |-
                ## Purpose
                Any function that reads a global path, mutates its input and returns a different shape depending on a flag will be copied rather than reused. Practising a few habits, pure functions, explicit date and universe arguments, consistent index conventions and short docstrings stating units, makes research code something others can build on.

                ## Milestones
                1. A one-page team convention on index layout, return types and naming for time series inputs.
                2. Three existing functions rewritten to follow it, with callers updated.
                3. Docstrings on those functions stating inputs, outputs, units and any look-ahead assumptions.
                4. One rewritten function adopted by a colleague's study without modification.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written convention exists and a colleague uses at least one rewritten function unchanged in their own study."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write the team convention for time series index layout and naming"
                - "Pick three of your functions that others have copied"
                - "Rewrite them as pure functions with docstrings stating units"
                - "Offer one rewritten function to a colleague and note what they changed"
            - name: Logging and assertions instead of print debugging
              description: |-
                ## Purpose
                Print statements vanish when the notebook is cleared, so nobody knows that last month's run silently dropped 300 stocks at the universe filter. Learning to use the standard logging module and well-placed assertions leaves a record of what each run did and stops runs early when an invariant breaks.

                ## Milestones
                1. A logging setup in one study writing run start, parameters, row counts at each stage and run end to a file.
                2. Assertions added for key invariants, such as no duplicate keys after a join and weights summing to one.
                3. Print statements removed from the study's package.
                4. Each run's log saved beside its outputs and its config.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One study logs row counts at every stage to a file saved with each run, and its package contains no print statements."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Replace print calls in one module with logging at sensible levels"
                - "Log row counts after each filter, join and resample"
                - "Add assertions for duplicate keys and weight sums"
                - "Save each run's log file beside its outputs"
            - name: Git bisect and blame for finding when a result changed
              description: |-
                ## Purpose
                When a backtest Sharpe drops from 1.4 to 0.9 between two weeks of commits, guessing which change did it can take days. Git bisect with a small script that recomputes the headline number finds the exact commit in a handful of steps, and blame shows why the line was changed.

                ## Milestones
                1. A script that computes one headline metric quickly on a fixed data slice and exits pass or fail.
                2. A practice bisect run on a deliberately introduced bug in a copy of a study.
                3. Blame and log used to read the history of the line bisect found.
                4. A short how-to added to the team wiki with the script pattern.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A practice bisect has located a seeded bug and the how-to with the metric script pattern is in the team wiki."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write a script that computes one metric on a small slice and exits pass or fail"
                - "Introduce a bug in a copy of a study and commit a few unrelated changes after it"
                - "Run git bisect with the script to find the bad commit"
                - "Write the steps into a wiki how-to"
            - name: Snapshot tests for research tables and reports
              description: |-
                ## Purpose
                Tear sheets and summary tables change for many reasons, and a reviewer cannot tell a formatting change from a different drawdown. Snapshot or golden-file tests that store expected tables and show a readable diff when they change make every change to reported output explicit.

                ## Milestones
                1. A snapshot testing approach chosen for data frames and summary tables, with a numeric tolerance.
                2. Snapshots stored for the summary table and key statistics of one study.
                3. A readable diff produced on failure, showing which cells changed and by how much.
                4. A rule that snapshot updates are reviewed separately from code changes.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "One study's summary tables are covered by snapshot tests that show cell-level diffs, with updates reviewed in their own pull requests."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Choose a snapshot approach that compares tables within a tolerance"
                - "Store snapshots for one study's summary table and statistics"
                - "Make the failure message show changed cells and the size of each change"
                - "Add the rule on separate snapshot updates to the review checklist"
            - name: Notebook policy for what may live in notebooks
              description: |-
                ## Purpose
                Banning notebooks drives exploration into scratch files nobody sees, while allowing anything leaves core logic in cells. A written policy, notebooks for exploration and presentation, modules for anything that feeds a counted result, settles the argument once and gives reviewers a clear standard.

                ## Milestones
                1. The current split of logic between notebooks and modules measured in three studies.
                2. A draft policy naming what may live only in a notebook and what must move to a module.
                3. Researchers' objections collected and the policy adjusted where they had a point.
                4. The policy adopted, added to the definition of done and the review checklist.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A notebook policy is adopted in writing and referenced in both the definition of done and the review checklist."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Count the lines of logic in notebooks versus modules in three studies"
                - "Draft the policy in one page with examples of each category"
                - "Collect objections from researchers in a short meeting"
                - "Record the adopted policy and add it to the review checklist"
            - name: Deciding what belongs in the shared research library
              description: |-
                ## Purpose
                Accept everything into the shared library and it becomes a second junk drawer, accept nothing and it gets ignored. Deciding the scope, such as data access, calendars, returns, universe construction and standard metrics, but not signals still under research, keeps the library small, trusted and worth importing.

                ## Milestones
                1. Functions duplicated across three or more studies listed as candidates.
                2. A written scope saying what the library covers and what stays in studies.
                3. An owner named for each library module.
                4. The scope shared with the team and the first candidates scheduled for contribution.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written library scope with a named owner per module is agreed, and at least five duplicated functions are scheduled to move in."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Search studies for functions duplicated three or more times"
                - "Write the library scope with a list of what is out of scope"
                - "Name an owner for each library module"
                - "Schedule the first five duplicated functions for contribution"
            - name: Consolidating copy-pasted return and signal code
              description: |-
                ## Purpose
                Five slightly different versions of forward returns, one excluding the last day, one using close-to-open, one with a timezone bug, make results across studies incomparable. Consolidating them into one tested function, with the differences made into explicit arguments, ends a quiet source of inconsistency.

                ## Milestones
                1. Every version of the duplicated function found and its behaviour compared on the same data.
                2. Differences classified as intended options or bugs.
                3. One tested function with explicit arguments for each intended option.
                4. All studies switched to the consolidated function, with any result changes explained in the pull request.

                ## Notes
                Expect some reported numbers to move when you consolidate. Record which and by how much in the results register rather than hiding it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One tested function replaces every copy in active studies and the results register notes any reported number that changed as a result."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Find every copy of the forward returns function across active studies"
                - "Run each copy on the same data and tabulate where they differ"
                - "Write one tested function with explicit arguments for intended differences"
                - "Switch each study over and record any reported number that moved"
            - name: Data access layer instead of hard-coded file paths
              description: |-
                ## Purpose
                Studies that read from paths like a colleague's home folder break when data moves, and make it impossible to say which version of a data set produced a result. A small data access layer, functions that load named data sets by version, removes paths from research code and records exactly what was read.

                ## Milestones
                1. Every hard-coded data path in active studies listed.
                2. A data access module that loads named data sets by version from one configurable root.
                3. Each load recording the data set name, version and row count in the run log.
                4. Hard-coded paths removed from all active studies.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "No active study contains a hard-coded data path, and every run log records the name and version of each data set loaded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Search active studies for hard-coded data paths and list them"
                - "Write a module that loads named data sets by version from one root"
                - "Log the data set name, version and row count on every load"
                - "Replace the listed paths study by study and rerun regression tests"
            - name: Pruning dead experiments and orphaned notebooks
              description: |-
                ## Purpose
                Repositories with 140 notebooks, most abandoned, hide the twelve that matter and invite someone to rerun a dead one and trust it. A deliberate pruning, with a record of what each pruned experiment found, keeps the knowledge and removes the trap.

                ## Milestones
                1. Every notebook and script labelled active, reference or dead, with the owner's agreement.
                2. A one-line finding recorded for each dead experiment before removal.
                3. Dead items moved to an archive tag or folder, not left in the working tree.
                4. A repeat prune booked each quarter so the clutter does not return.

                ## Notes
                Archive with a git tag before deleting anything, so the code can be recovered if a finding is ever questioned.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each research repository's working tree contains only active or reference items, and every archived experiment has a one-line recorded finding."
                cadence: cyclic
              tasks:
                - "Label every notebook in one repository as active, reference or dead"
                - "Write a one-line finding for each dead experiment"
                - "Tag the repository and move dead items to the archive"
                - "Prune each research repository of dead notebooks and scripts @recurring(quarterly)"
            - name: One-command rerun for each research pipeline
              description: |-
                ## Purpose
                If reproducing a result needs a list of steps in someone's head, it will not be reproduced. A single command, through a task runner or a short script, that rebuilds features, runs the study and writes outputs from raw inputs makes reruns cheap enough that people actually do them.

                ## Milestones
                1. The steps to rebuild one study's headline result written down in order.
                2. A task runner or script that performs every step from raw inputs with one command.
                3. Intermediate steps skipped when their inputs and code are unchanged.
                4. The command documented as the first line of the study readme and used in the monthly reproduction.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One command rebuilds the study's headline result from raw inputs on a clean checkout, and it is the first instruction in the readme."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write out every step needed to rebuild one headline result"
                - "Turn the steps into a task runner file or a single script"
                - "Run the command on a clean checkout and fix anything it misses"
                - "Put the command at the top of the study readme"
            - name: Safe caching of intermediate research results
              description: |-
                ## Purpose
                Caching features to disk saves hours, until a cached file built from old code or old data quietly feeds a new result. Keying caches on a hash of the code, config and data version, and refusing stale entries, keeps the speed and removes one of the most common causes of irreproducible numbers.

                ## Milestones
                1. Every cache in one study listed with what it stores and how it is invalidated today.
                2. A cache key built from the function's source hash, its config and the input data versions.
                3. Stale cache entries rejected automatically, with a log line when a cache is rebuilt.
                4. A clear-cache command and a test proving a code change forces a rebuild.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Caches in one study are keyed on code, config and data versions, and a test shows a code change triggers a rebuild."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the caches in one study and how each is invalidated now"
                - "Build cache keys from source hash, config and data version"
                - "Add a test that edits the function and checks the cache rebuilds"
                - "Add a clear-cache command to the study's task runner"
            - name: Code review before a research committee presentation
              description: |-
                ## Purpose
                The week before a result goes to a research or investment committee is when the pressure to skip review is highest and the cost of a bug is greatest. Booking a dedicated review of the exact code and data behind the slides, with time left to fix what is found, protects both the result and the presenter.

                ## Milestones
                1. The commit, config and data version behind every number on the slides recorded.
                2. A reviewer booked at least five working days before the committee date.
                3. The review completed against the checklist, with findings and fixes recorded.
                4. Every number on the slides regenerated from the reviewed commit.

                ## Notes
                If the review finds a problem that changes the conclusion, present the corrected result or postpone. A committee forgives a delay far more readily than a retraction.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every number presented to the committee was regenerated from a commit that passed a recorded review at least two days before the meeting."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Record the commit, config and data version behind each slide number"
                - "Book a reviewer for a slot five working days before the committee"
                - "Fix the review findings and rerun every number from the reviewed commit"
                - "Attach the review record to the committee pack"
            - name: Code audit before a strategy moves to production
              description: |-
                ## Purpose
                Research code promoted to production carries every shortcut taken during exploration, from a forward fill across report dates to a universe defined with today's index members. A structured audit of the full path from data to target positions, by someone who did not write it, is the last cheap place to catch these.

                ## Milestones
                1. The full code path from raw data to target positions traced and listed.
                2. An independent reviewer's audit of each step for timing, universe, costs and numerical issues.
                3. Leakage, regression and data tests confirmed to pass on the production candidate.
                4. Findings closed or accepted in writing by the head of research before go-live.

                ## Notes
                Start from the **Operational checklist** template. The audit covers the code, not whether the strategy will make money, which no review can promise.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A written audit of the data-to-positions path exists with every finding closed or accepted in writing before the strategy goes live."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Trace and list every module on the path from raw data to target positions"
                - "Ask an independent reviewer to audit each step against the checklist"
                - "Confirm leakage, regression and data tests pass on the production candidate"
                - "Record each finding as closed or accepted with the head of research"
            - name: Correcting a bug found in an already reported result
              description: |-
                ## Purpose
                Finding that a number already shown to colleagues or a committee came from buggy code is uncomfortable, and the temptation is to fix it quietly. A clear correction routine, scope the impact, rerun, tell the people who saw the number and record it, protects trust in every other result the team reports.

                ## Milestones
                1. The bug described, with the commit that introduced it and the commit that fixes it.
                2. Every reported result touched by the bug identified from the results register.
                3. Each affected result rerun and the before and after values recorded.
                4. Everyone who saw the original numbers told in writing, with the corrected values.
                5. A test added that would have caught the bug.

                ## Notes
                Start from the **Remediation plan** template. Correct promptly and plainly; the correction itself is evidence the review system works.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "All affected results are rerun with before and after values recorded, recipients are notified in writing, and a test for the bug is merged."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write a short description of the bug with its introducing and fixing commits"
                - "Search the results register for every result built on the affected code"
                - "Rerun each affected result and record before and after values"
                - "Ask the agent to draft the correction note for the people who saw the numbers"
            - name: Repository clean-up before a research handover
              description: |-
                ## Purpose
                Once a study passes to another researcher or a production team, everything that lived in the author's head has to move into the repository. A focused clean-up before handover, readme, one-command rerun, known issues and a walk-through, turns months of context into something the next owner can run on day one.

                ## Milestones
                1. The readme updated with the question, current status, how to rerun and where results live.
                2. Known issues, dead ends and open questions written into the repository.
                3. The new owner able to rerun the headline result from a clean checkout without help.
                4. A recorded walk-through of the code with the new owner.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The new owner reruns the headline result unaided from a clean checkout and confirms in writing that the handover is complete."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Rewrite the readme with status, rerun command and results location"
                - "Write the known issues and open questions file"
                - "Watch the new owner rerun the headline result without helping"
                - "Record a walk-through of the code with the new owner"
            - name: Two-week code quality sprint for the research team
              description: |-
                ## Purpose
                Some fixes, adding tests to old signals or clearing a backlog of result-affecting bugs, never fit around normal research. A dated two-week sprint, with research paused and a clear list chosen from the audit, clears debt in one go and shows researchers what the standards feel like in practice.

                ## Milestones
                1. A sprint backlog chosen from the audit and issue tracker, sized to two weeks.
                2. Each researcher paired with an engineer or another researcher on their own studies.
                3. Daily progress noted against the backlog.
                4. A closing summary of what was fixed, what slipped and the quality measures before and after.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The sprint ends with a written summary showing backlog items closed and the change in at least two quality measures."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Pick sprint items from the audit and issue tracker and size them"
                - "Agree the sprint dates with the head of research"
                - "Pair each researcher with a partner for their own studies"
                - "Write the closing summary with quality measures before and after"
            - name: First code reviews as a PhD hire in industry
              description: |-
                ## Purpose
                Researchers from academia are often brilliant analysts whose code has only ever been read by themselves, and the first review comments can feel like criticism of the research. Treating the first three months of reviews as a learning plan, with a mentor and a list of habits to build, turns that discomfort into fast progress.

                ## Milestones
                1. A mentor named who reviews your pull requests for the first three months.
                2. A list of the team's standards read and questions about them answered.
                3. Review comments collected and grouped into recurring themes.
                4. Three habits from the themes visibly fixed in your later pull requests.

                ## Notes
                Start from the **Development plan** template. Small, frequent pull requests get kinder and more useful reviews than one large one at the end of a project.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "After ninety days, review comments are grouped into themes and the mentor confirms three recurring issues no longer appear."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Ask your manager to name a review mentor for your first three months"
                - "Read the team's review checklist and write down three questions about it"
                - "Keep a list of every review comment you receive, grouped by theme"
                - "Review your themes with your mentor after ninety days"
            - name: Self-review routine for a solo researcher
              description: |-
                ## Purpose
                Independent researchers and one-person funds have nobody to review their code, so bugs survive until money finds them. A deliberate self-review, done a day after writing with fresh eyes and a fixed checklist, and occasional paid or swapped reviews with a peer, recovers much of what a team provides.

                ## Milestones
                1. A personal review checklist adapted from the team checklist in this area.
                2. A rule that no change feeds a decision until it has been self-reviewed at least a day after writing.
                3. A weekly self-review session in the calendar.
                4. A peer found for a quarterly code swap, where each reviews one study of the other's.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For a quarter, every change feeding a decision has a dated self-review note and one peer code swap has taken place."
                cadence: rolling
              tasks:
                - "Adapt a review checklist to the way you work alone"
                - "Self-review the week's merged changes against the checklist @recurring(weekly:sat)"
                - "Find a peer researcher willing to swap one study for review each quarter"
                - "Write a dated note for each self-review in the repository"
            - name: Engineer embedded with researchers setting standards
              description: |-
                ## Purpose
                An engineer joining a research team can win trust by making researchers faster, or lose it by arriving with rules that slow every experiment. Starting with listening, fixing their biggest annoyance, then introducing standards one at a time with the researchers' agreement makes the standards stick.

                ## Milestones
                1. Every researcher interviewed about what slows them down and what they fear breaking.
                2. One annoyance fixed in the first month, such as slow data loading or a broken environment.
                3. Standards introduced one at a time, each with a short trial and feedback.
                4. Regular office hours where researchers bring code for help rather than judgement.

                ## Notes
                Start from the **Onboarding 30/60/90** template. Pair on their code instead of rewriting it; a rewrite they did not take part in will not be maintained.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Within six months, at least three standards are adopted with researcher agreement and office hours have run every month."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Book thirty-minute interviews with each researcher on the team"
                - "Fix the most common annoyance raised in the interviews"
                - "Introduce one standard with a two-week trial and ask for feedback"
                - "Hold code office hours for the researchers @recurring(monthly:8)"
            - name: Leading code standards for a new quant research pod
              description: |-
                ## Purpose
                A new pod is the one moment when standards cost almost nothing to adopt, because there is no legacy to migrate. Setting the template repository, review rule, definition of done and testing expectations in the first weeks means every study the pod produces starts reviewable.

                ## Milestones
                1. The pod's template repository, hooks and CI in place before the first study starts.
                2. The definition of done and review rule agreed with every member in the first fortnight.
                3. A short standards page each new member reads in their first week.
                4. A quarterly standards review where members propose changes.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every study the pod starts in its first six months uses the template, and the standards page has had at least two reviews."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Set up the pod's template repository with hooks and CI"
                - "Agree the definition of done with every pod member"
                - "Write a one-page standards page for new members"
                - "Run the pod's standards review and record changes @recurring(quarterly)"
            - name: Readable research repository for a student portfolio
              description: |-
                ## Purpose
                For students applying to quant roles, a public research repository is read by interviewers looking for exactly the habits this area covers. One project with a clear readme, tests for its signals, a leakage check and a one-command rerun says more than a long list of notebooks.

                ## Milestones
                1. One student research project chosen that uses only freely shareable data.
                2. The repository laid out with a readme, package, tests and a thin notebook.
                3. Leakage and unit tests passing in a free CI service with a status badge.
                4. A reviewer outside the project, such as a lecturer or a friend in industry, able to rerun it from the readme.

                ## Notes
                Start from the **Portfolio piece** template. Do not publish licensed data or anything from an employer or internship; check data terms before you push.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A public repository with passing tests in CI is rerun from its readme by an outside reviewer and linked from your CV."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Choose one project whose data you are allowed to share publicly"
                - "Restructure it into a package, tests and a thin notebook"
                - "Add leakage and unit tests and run them in a free CI service"
                - "Ask someone outside the project to rerun it from the readme"
            - name: Inheriting a departed colleague's research code
              description: |-
                ## Purpose
                Departing researchers often leave studies behind as a folder of notebooks with no tests and results you are now expected to defend. Working through the code methodically, rerunning first, testing second and only then changing anything, keeps you from breaking a live signal or inheriting a hidden bug.

                ## Milestones
                1. An inventory of the inherited studies, with which feed live or reported results.
                2. Each important result rerun and compared with what was reported.
                3. Regression tests written around current behaviour before any change.
                4. A list of questions sent to the former owner, where contact is allowed, or recorded as unknowns.

                ## Notes
                Check with your manager what contact with a former colleague is appropriate, especially if they have joined a competitor.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every inherited study feeding a live or reported result has been rerun, compared with its reported value and covered by regression tests."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List the inherited studies and mark which feed live or reported results"
                - "Rerun each important result and compare it with the reported value"
                - "Write regression tests around current behaviour before changing anything"
                - "Write down open questions and agree with your manager how to resolve them"
            - name: Mutation testing for signal and backtest code
              description: |-
                ## Purpose
                A test suite can pass and still miss bugs if its tests would also pass on broken code. Mutation testing changes the code deliberately, flipping a comparison, shifting an index by one, and checks the tests fail, which shows exactly where the suite is weak on the code that matters most.

                ## Milestones
                1. A mutation testing tool run on one study's signal module, with the surviving mutants listed.
                2. Surviving mutants that matter, such as index shifts and sign flips, killed with new tests.
                3. A mutation score recorded as a baseline for the module.
                4. A monthly mutation run on modules feeding production signals.

                ## Notes
                Mutation testing is slow. Restrict it to the few modules where a silent bug would change positions, not the whole repository.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The signal module of one production study has a recorded mutation score and no surviving index-shift or sign-flip mutants."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Run a mutation testing tool on one signal module and list survivors"
                - "Write tests that kill surviving index-shift and sign-flip mutants"
                - "Record the module's mutation score as a baseline"
                - "Run mutation tests on production signal modules @recurring(monthly:15)"
            - name: Lineage hashes tying every reported number to its inputs
              description: |-
                ## Purpose
                The question a reviewer or validator always asks is which code and data produced this exact number. Stamping every output with a hash of the commit, resolved config and input data versions, and storing that stamp in the results register, answers it instantly and makes a mismatched chart impossible to miss.

                ## Milestones
                1. A lineage stamp defined: commit hash, dirty-tree flag, config hash and input data versions.
                2. Every output file and chart from one study carrying its stamp in metadata or filename.
                3. Runs from a dirty working tree refused for any result that will be reported.
                4. The results register storing the stamp for every counted result.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every counted result in the register carries a lineage stamp that regenerates the same number when rerun."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Define the fields in the lineage stamp"
                - "Write a helper that stamps every output file and chart"
                - "Refuse reportable runs when the working tree has uncommitted changes"
                - "Add a lineage column to the results register"
            - name: Independent re-implementation of a critical signal
              description: |-
                ## Purpose
                Two people who read the same paper and write the same signal separately will usually disagree somewhere, and the disagreement is where bugs and hidden assumptions live. Having a second person re-implement a signal that drives real positions, from the written specification only, is the strongest check short of a full validation.

                ## Milestones
                1. A written specification of the signal detailed enough to implement without the original code.
                2. A second researcher's independent implementation from the specification alone.
                3. Both versions compared on the same data, with every difference above tolerance explained.
                4. The specification, original or both corrected, and the comparison filed with the model documentation.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "Two independent implementations agree within tolerance on a full history, and every resolved difference is documented."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Write a specification of the signal without referring to the code"
                - "Ask a colleague to implement it from the specification alone"
                - "Compare both versions on the same history and list differences"
                - "File the comparison and corrected specification with the model documentation"
            - name: Research CI that reruns headline numbers on every merge
              description: |-
                ## Purpose
                Unit tests prove functions behave; they do not prove the numbers in last month's report still come out. A CI job that reruns a reduced version of each headline result on every merge to main, and posts any change, turns reproducibility from a monthly check into a property of the repository.

                ## Milestones
                1. A reduced version of each headline result defined that runs in under fifteen minutes.
                2. A CI job rerunning those results on every merge to main.
                3. Changes in headline numbers posted to the pull request with the size of each change.
                4. A weekly summary of headline changes reviewed by the head of research.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every merge to main reruns the reduced headline results in CI and any change in a headline number is posted on the pull request."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Define a reduced version of each headline result that runs quickly"
                - "Add a CI job that reruns the reduced results on merge to main"
                - "Post headline number changes as a comment on the pull request"
                - "Review the week's headline number changes from CI @recurring(weekly:sun)"
---

# Quant Research Code Quality

Research code is where good ideas quietly go wrong: a shifted index that peeks at tomorrow, a notebook cell run out of order, a copy-pasted signal that drifted from the original. This area is for researchers and the engineers who sit with them, and it treats code quality as part of the evidence, not a nicety. It starts with foundations (repositories, layout, secrets, hooks, an honest audit and a definition of done), then the review and testing routines, the testing and refactoring skills worth practising, decisions about notebooks and the shared library, dated events such as a pre-production audit or a bug in a published number, setups for different situations, and four specialist techniques.

The rhythms are a weekly research pull request review, weekly signal regression runs and code reading, a daily glance at the data validation report, monthly hygiene, reproduction and library contribution slots, and a quarterly look at quality measures. The Operational checklist, Remediation plan, Development plan, Onboarding 30/60/90 and Portfolio piece templates pair with several projects. Clean code does not make a strategy work, and most strategies still fail out of sample, so nothing here is trading or investment advice. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
