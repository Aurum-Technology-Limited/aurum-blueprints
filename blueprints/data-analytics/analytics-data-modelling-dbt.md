---
id: data-analytics.analytics-data-modelling-dbt
name: Analytics Data Modelling (dbt)
description: "A version-controlled dbt project with sources, layered models, tests, docs and pull request review, the routines that keep it healthy, and the skills from incremental models to unit tests and multi-project setups."
category: business
version: 1.0.0
tags: [data-analytics, analytics-data-modelling-dbt, engineer, knowledge-worker, dbt, analytics-engineering, dimensional-modelling, sql]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - course
    - operational-checklist
    - risk-register
    - remediation-plan
    - onboarding-plan
  pillars:
    - name: Data & Analytics
      emoji: "📊"
      description: "Turning data into decisions: metrics and dashboards, data pipelines and warehouses, experimentation, forecasting and modelling, machine learning, data quality and governance."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Analytics Data Modelling (dbt)
          description: "Modelling raw data into clean, tested, documented analytics tables using version-controlled transformation code that the whole team can review."
          projects:
            - name: Inventory of transformation SQL outside version control
              description: |-
                ## Purpose
                Before writing a single model, find where business logic already lives: scheduled warehouse queries, views nobody owns, custom SQL inside BI datasets and the spreadsheet that someone refreshes on Mondays. That list becomes the backlog for the dbt project and shows which numbers will move when logic is consolidated. In most teams it turns up two or three competing definitions of the same table.

                ## Milestones
                1. A sheet listing every scheduled query, warehouse view and BI custom SQL dataset, with its owner and what reads it.
                2. Each item marked as keep, migrate into dbt or retire.
                3. Duplicated logic, such as two different order tables, flagged side by side.
                4. The ten most-read items ranked as the first migration candidates.

                ## Notes
                Query the warehouse's query history and the BI tool's dataset list rather than relying on memory. The forgotten items are the ones that break later.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "One inventory sheet covers every scheduled query, view and BI custom SQL dataset, each marked keep, migrate or retire, with the top ten ranked."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Export the list of scheduled queries and views from the warehouse"
                - "List every BI dataset that uses custom SQL instead of a table"
                - "Mark each item keep, migrate or retire in one sheet"
                - "Rank the ten most-read items by query count over the last 90 days"
            - name: dbt project repository and environments set-up
              description: |-
                ## Purpose
                A dbt project is only reviewable if it lives in a Git repository with separate development and production targets from day one. Setting up the repository, the profile, a production schema that only the build job writes to and the first pinned packages takes an afternoon and saves months of untangling later.

                ## Milestones
                1. A Git repository holding a fresh dbt project with a README that says how to run it.
                2. Development and production targets defined, with production schemas written only by the build service account.
                3. The required dbt version and package versions pinned in the project files.
                4. One trivial model built successfully in both development and production.

                ## Notes
                Keep credentials in environment variables, never in the profile file committed to the repository. Add the target folder and logs to the ignore file before the first commit.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The repository builds one model in development and production targets, with dbt and package versions pinned and no credentials committed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Create the repository and initialise a new dbt project inside it"
                - "Add the target, logs and package folders to the ignore file"
                - "Define development and production targets using environment variables"
                - "Pin dbt_utils and the required dbt version range in the project files"
                - "Build one placeholder model in both targets to prove the set-up"
            - name: Personal development schema for each contributor
              description: |-
                ## Purpose
                Sharing one development schema means two people overwrite each other's tables and nobody trusts what they are testing. Giving every contributor their own schema, named after them, with read access to raw data and no write access to production, lets people build and break things safely.

                ## Milestones
                1. A naming rule for development schemas, such as dbt underscore and the person's initials.
                2. Each current contributor able to run a full build into their own schema.
                3. Warehouse roles confirmed: contributors read raw and production, write only to their own schema.
                4. A short guide in the README for adding a new contributor.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every contributor has built the project into a personal schema, and none of them can write to the production schemas."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Agree the naming rule for personal development schemas"
                - "Ask the warehouse admin for a contributor role with the right grants"
                - "Have each contributor run a full build into their own schema"
                - "Write the add-a-contributor steps into the README"
            - name: Source declarations for every raw table
              description: |-
                ## Purpose
                Raw tables referenced by hard-coded names cannot be traced, tested or swapped when a loader changes schema. Declaring every raw table the project reads as a source, with a description and a loaded-at column, gives lineage from the first model and lets dbt check whether data arrived on time.

                ## Milestones
                1. A sources file per source system listing every raw table the project reads.
                2. No model selecting from a raw table except through a source reference.
                3. A loaded-at column and freshness thresholds set for each source that has one.
                4. Each source table described in one sentence, including who loads it.

                ## Notes
                The codegen package can generate the first draft of each sources file from the warehouse schema. Review it by hand; generated descriptions are blank.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every raw table used by the project is declared as a source with a description, and a search of the models finds no hard-coded raw table names."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Generate a draft sources file for the first source system"
                - "Replace every hard-coded raw table name with a source reference"
                - "Set freshness thresholds on sources with a loaded-at column"
                - "Compare declared sources with new tables in the raw schemas @recurring(monthly:10)"
            - name: Staging, intermediate and marts layer conventions
              description: |-
                ## Purpose
                Without agreed layers, a project grows into hundreds of models where anything references anything and nobody knows which table to build a dashboard on. Writing down the layers, their prefixes, folder structure and which layer may reference which settles most arguments before they happen.

                ## Milestones
                1. A one-page convention: staging models one per source table, intermediate models for reusable joins, marts as facts and dimensions.
                2. Prefixes agreed for each layer, such as stg, int, fct and dim.
                3. A rule that marts never select directly from sources, and staging never joins.
                4. The folder structure in the repository matching the convention.

                ## Notes
                dbt's own published guide on project structure is a sensible default to adopt with small changes, rather than inventing a scheme from scratch.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written layer convention with prefixes and reference rules is in the README, and the repository folders follow it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read dbt's published guide on structuring projects"
                - "Draft the layer rules and prefixes on one page"
                - "Agree the convention with everyone who will contribute models"
                - "Create the folder structure that matches the agreed layers"
            - name: SQL style guide with an automated linter
              description: |-
                ## Purpose
                Five contributors writing SQL five ways make every pull request a debate about commas and capitals. A short style guide enforced by a linter configured for dbt's templating moves those comments out of review and into a tool, so reviewers spend their attention on logic.

                ## Milestones
                1. A style guide covering casing, CTE structure, join style, aliasing and trailing commas.
                2. A SQL linter configured with the dbt templater and the agreed rules.
                3. The linter running on changed files in CI and failing the check on violations.
                4. Existing models fixed or excluded with a dated plan to fix them.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written style guide exists and the linter runs on every pull request, failing the check on new violations."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the agent to draft a style guide from five of your best existing models"
                - "Configure the SQL linter with the dbt templater and the agreed rules"
                - "Add the linter to CI for changed files only"
                - "Review linter rule exceptions and remove the ones no longer needed @recurring(yearly)"
            - name: Staging models for the first source system
              description: |-
                ## Purpose
                Staging is where raw columns get consistent names, types and units once, so no downstream model ever casts a string date again. Building one staging model per table for the most important source system, usually the product database or the billing system, gives every later model a clean base.

                ## Milestones
                1. One staging model per used table in the first source system, each a view selecting from a source.
                2. Columns renamed to the agreed convention, types cast and money converted to a single unit.
                3. Duplicate rows from the loader removed with a documented rule.
                4. A unique and not-null test on each staging model's primary key, all passing.

                ## Notes
                Keep staging dull: rename, cast, deduplicate, light cleaning. Joins and business rules belong in later layers, where they can be reused.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every used table in the first source system has a staging model with a passing primary key test, and no downstream model reads that source directly."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Pick the source system that most dashboards depend on"
                - "Generate base staging models for its tables with the codegen package"
                - "Rename and cast columns to the agreed convention in each model"
                - "Add primary key tests to every staging model and run the build"
            - name: First fact table and dimensions for one business question
              description: |-
                ## Purpose
                One mart that answers a real question, such as weekly orders by product and region, proves the project is worth the effort far better than fifty staging models. Choosing the question with a stakeholder, stating the grain in a sentence and building the fact and its two or three dimensions gives the team a working pattern to copy.

                ## Milestones
                1. The business question and its main dashboard named with the stakeholder who asked it.
                2. The fact table's grain written as one sentence, such as one row per order line.
                3. A fact table and two or three dimensions built from staging and intermediate models.
                4. The stakeholder's existing number reproduced from the new mart, or the difference explained.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A fact table with a written grain and at least two dimensions is in production, and the stakeholder has signed off a reconciled number from it."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Choose one business question with the stakeholder who asks it most"
                - "Write the fact table's grain as a single sentence"
                - "Build the fact table and its dimensions from staging models"
                - "Reconcile one headline number against the stakeholder's current report"
            - name: Pull request template, code owners and branch protection
              description: |-
                ## Purpose
                Code that can be merged without review is code nobody but its author understands. Protecting the main branch, naming code owners per folder and adding a pull request template that asks what changed, why and how it was tested makes review the normal path rather than a favour.

                ## Milestones
                1. Main branch protected: no direct pushes, at least one approval and passing checks required.
                2. A code owners file naming reviewers for each model folder, such as finance marts.
                3. A pull request template asking for the change, the reason, the test evidence and affected dashboards.
                4. The first five pull requests merged through the new process.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Main cannot be pushed to directly, code owners are assigned per folder and five pull requests have merged with the template filled in."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Turn on branch protection for main with one required approval"
                - "Write a code owners file naming reviewers for each model folder"
                - "Add a pull request template with change, reason, testing and impact sections"
                - "Check the first five merged pull requests followed the template"
            - name: Choosing where production dbt builds run
              description: |-
                ## Purpose
                Production builds need a home: a hosted dbt service, the existing orchestrator, or a scheduled CI runner. Each choice changes cost, who can rerun a failed job, how logs are kept and whether builds can wait for loaders to finish, so it is worth comparing them on the same criteria before the first production job runs.

                ## Milestones
                1. Three options listed with cost, scheduling, rerun, logging and alerting compared on one page.
                2. The dependency on upstream loads described for each option.
                3. One option chosen, with the reason and the runner-up recorded.
                4. A first scheduled production build running on the chosen option.

                ## Notes
                Start from the **Purchase decision** template. Whoever owns the loaders should be in the conversation; the hand-off between load and transform is where most failures start.
              priority: medium
              deadlineOffsetDays: 40
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of at least three options, a recorded decision and a scheduled production build running on the chosen option."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List three ways the team could run production builds"
                - "Compare them on cost, scheduling, reruns, logs and alerts"
                - "Record the decision and the runner-up in a purchase decision page"
                - "Schedule the first production build on the chosen option"
            - name: Slim CI build on every pull request
              description: |-
                ## Purpose
                Building only the changed models and everything downstream of them, deferring to production for the rest, lets CI run in minutes instead of rebuilding the whole project. Every pull request then proves its models compile, build and pass tests before a reviewer looks at it.

                ## Milestones
                1. A CI job that runs on every pull request against a temporary schema.
                2. The job selecting modified models and their children, deferring unchanged parents to production state.
                3. Tests and the linter included, with failures blocking the merge.
                4. Temporary CI schemas dropped automatically after the pull request closes.

                ## Notes
                Slim CI needs the production manifest from the last successful run. Store it somewhere CI can fetch it, or the selection quietly falls back to building everything.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every pull request triggers a CI build of modified models and their children with tests, and merges are blocked when it fails."
                cadence: rolling
              tasks:
                - "Publish the production manifest where the CI job can read it"
                - "Configure CI to build modified models and children with deferral"
                - "Drop temporary CI schemas when pull requests close"
                - "Review CI run times and flaky failures from the last month @recurring(monthly:12)"
            - name: Weekly pull request review rota
              description: |-
                ## Purpose
                Pull requests that wait a week for review get merged with a rushed glance or abandoned. A named reviewer each week, a target of one working day to first review and a short checklist covering grain, joins, tests and naming keep review fast and consistent.

                ## Milestones
                1. A rota naming one primary reviewer per week, shared with the team.
                2. A review checklist of six to eight questions pinned in the repository.
                3. Median time to first review under one working day across a month.
                4. No pull request open longer than five working days without a comment.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The rota has run for eight weeks with median time to first review under one working day."
                cadence: rolling
              tasks:
                - "Write a six to eight point review checklist and pin it in the repository"
                - "Publish a reviewer rota for the next eight weeks"
                - "Clear or comment on every open pull request older than two days @recurring(weekly:tue)"
            - name: Primary key and relationship test coverage standard
              description: |-
                ## Purpose
                Tests are what stop a duplicated join from doubling revenue on the board dashboard. A written minimum, such as unique and not-null on every model's key, relationship tests from facts to dimensions and accepted values on status columns, gives each pull request a clear bar and each month a coverage number to track.

                ## Milestones
                1. A testing standard listing the minimum tests per layer.
                2. Every mart with a passing grain test, using a single key or a combination of columns.
                3. Relationship tests from each fact's foreign keys to its dimensions.
                4. A monthly coverage figure recorded: models meeting the standard over all models.

                ## Notes
                Severity matters. Set warnings for known, tolerated issues and errors for anything that would put a wrong number in front of a decision.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every mart has a passing grain test and coverage against the written standard is recorded for six consecutive months."
                cadence: rolling
              tasks:
                - "Write the minimum tests required for staging, intermediate and mart models"
                - "Add grain tests to every mart that lacks one"
                - "Add relationship tests from fact foreign keys to dimensions"
                - "Record test coverage and list models below the standard @recurring(monthly:8)"
            - name: Column documentation and docs site upkeep
              description: |-
                ## Purpose
                Descriptions written months after a model ships are rarely written at all. Requiring a description for every mart model and column in the same pull request, publishing the docs site after each production build and checking gaps monthly gives analysts a reliable answer to what a column means.

                ## Milestones
                1. Every mart model and column described in its YAML file.
                2. Shared column descriptions, such as customer key, written once as doc blocks and reused.
                3. The docs site rebuilt and published after each production build.
                4. A monthly count of undocumented mart columns trending to zero.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All mart columns are described and the published docs site is never more than one production build out of date."
                cadence: rolling
              tasks:
                - "List mart columns that have no description"
                - "Write doc blocks for the ten columns that appear in most models"
                - "Publish the docs site automatically after each production build"
                - "Count undocumented mart columns and assign the gaps @recurring(monthly:20)"
            - name: Quarterly package and minor version upgrades
              description: |-
                ## Purpose
                Packages and dbt minor releases bring fixes and deprecation warnings that are cheap to handle one quarter at a time and painful after two years. A quarterly upgrade on a branch, built in CI with deprecation warnings read and fixed, keeps the project close to current.

                ## Milestones
                1. Current dbt and package versions listed with the latest available.
                2. Release notes read for every version between current and target.
                3. An upgrade branch building cleanly in CI with no new deprecation warnings.
                4. The upgrade merged and the pinned versions updated.

                ## Notes
                Upgrade one thing at a time when a release has breaking changes, so a failure points at its cause.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly upgrade pull requests merged in a year, each leaving the build free of deprecation warnings."
                cadence: cyclic
              tasks:
                - "Open an upgrade branch for dbt and packages @recurring(quarterly)"
                - "Read release notes for every version you are skipping"
                - "Fix deprecation warnings that appear in the upgrade build"
            - name: Monthly build run-time review
              description: |-
                ## Purpose
                Nightly builds that took twenty minutes last year can take three hours now, pushing fresh data past the start of the working day. Reviewing the slowest models each month and fixing the worst two, by making them incremental, trimming selects or removing unused models, keeps the build inside its window.

                ## Milestones
                1. Run times per model extracted from the last month of production runs.
                2. The ten slowest models listed with their materialisation and row counts.
                3. Two models improved each month, with before and after run times recorded.
                4. Total build time held inside the agreed window for three months.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Total production build time stays inside the agreed window for three consecutive months, with two slow models improved each month."
                cadence: rolling
              tasks:
                - "Agree the latest time the production build must finish"
                - "List the ten slowest models from last month's run results @recurring(monthly:3)"
                - "Improve the two slowest models and record their new run times"
            - name: Morning production build check and failure log
              description: |-
                ## Purpose
                When the nightly build fails, the first person to notice is often a manager looking at a stale dashboard. A five-minute check each morning, a log of every failure with its cause and a weekly look at repeat offenders turn failures from surprises into a list of fixes.

                ## Milestones
                1. Build failure alerts going to a shared channel rather than one inbox.
                2. A failure log with date, failing model or test, cause and fix.
                3. A named person for each day of the week who checks the build first thing.
                4. Repeat failures from the log turned into pull requests that fix their causes.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every production build failure over three months appears in the log with a cause, and repeat failures have a fix merged."
                cadence: rolling
              tasks:
                - "Route build failure alerts to a shared team channel"
                - "Create a failure log with date, model, cause and fix columns"
                - "Check the overnight production build before the first meeting @recurring(daily)"
                - "Review the failure log for repeat causes @recurring(weekly:fri)"
            - name: Quarterly sweep for unused and orphaned models
              description: |-
                ## Purpose
                Projects accumulate models built for one question and never read again, and every one costs build time and review attention. A quarterly sweep comparing models against warehouse query logs and declared exposures finds the ones nobody uses, so they can be disabled and then deleted.

                ## Milestones
                1. Each mart's last read date taken from warehouse query history.
                2. Models with no reads in 90 days and no exposures listed.
                3. Owners asked before anything is removed, with a two-week notice to consumers.
                4. Unused models disabled, then deleted a quarter later if nobody objected.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly sweeps in a year, each listing unused models and recording which were disabled or kept and why."
                cadence: cyclic
              tasks:
                - "Pull last read dates for every mart from warehouse query history @recurring(quarterly)"
                - "List models with no reads in 90 days and no exposures"
                - "Ask each owner whether their unused models can be disabled"
                - "Delete models that stayed disabled for a full quarter without complaint"
            - name: Monthly changelog for mart consumers
              description: |-
                ## Purpose
                People who build dashboards on the marts rarely read pull requests, so a renamed column or a changed filter reaches them as a broken chart. A plain-language changelog sent monthly, with breaking changes announced ahead of the merge, keeps analysts and report owners in step with the project.

                ## Milestones
                1. A changelog page listing each merged change that affects a mart, in plain language.
                2. Breaking changes announced at least a week before they merge.
                3. A monthly summary sent to every dashboard owner on the marts.
                4. Six consecutive monthly summaries sent.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Six monthly changelog summaries sent to dashboard owners, with every breaking change announced before it merged."
                cadence: rolling
              tasks:
                - "Add a consumer impact line to the pull request template"
                - "Build the list of dashboard owners who read from the marts"
                - "Send the monthly changelog summary to dashboard owners @recurring(monthly:26)"
            - name: Project health checks with the project evaluator package
              description: |-
                ## Purpose
                Small structural problems such as models referencing sources directly, marts missing tests or fan-outs where one model feeds thirty, are easy to miss in single pull requests. The project evaluator package reports them as tables, and a monthly look at the count shows whether the structure is improving or decaying.

                ## Milestones
                1. The project evaluator package installed and running in a development build.
                2. Rules that conflict with your conventions disabled with a written reason.
                3. A baseline count of violations by rule recorded.
                4. Violations reduced by a quarter from the baseline within six months.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A baseline violation count is recorded and the monthly count has fallen by at least 25 percent within six months."
                cadence: rolling
              tasks:
                - "Install the project evaluator package and run it in development"
                - "Disable rules that contradict your agreed conventions and note why"
                - "Record the violation count by rule and fix the top one @recurring(monthly:15)"
            - name: dbt fundamentals study plan
              description: |-
                ## Purpose
                Learning dbt properly means understanding how it builds a graph from references, what each materialisation does in the warehouse and how tests and docs come from the same YAML. Six weeks of structured study, using the vendor's free courses and your own project as the exercise ground, is faster than learning from broken builds.

                ## Milestones
                1. The free fundamentals course completed, with notes on references, sources and materialisations.
                2. A sandbox project built against a sample dataset with staging, a mart and tests.
                3. The compiled SQL for three models read and explained in your own words.
                4. One real model in the team project written and merged by you.

                ## Notes
                Start from the **Course** template. Pair each week's lesson with a small change to a real model; theory without your own data does not stick.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The fundamentals course is complete, a sandbox project builds with tests, and one model of yours has merged in the team project."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Enrol in the free dbt fundamentals course and block six weekly slots"
                - "Build a sandbox project on a sample dataset"
                - "Read the compiled SQL for three models and note what changed"
                - "Write and merge one small model in the team project"
            - name: Dimensional modelling and choosing the grain
              description: |-
                ## Purpose
                Most wrong numbers in analytics come from a join at the wrong grain, not from bad SQL. Studying facts, dimensions, conformed dimensions and slowly changing attributes, then practising by stating the grain of every existing mart, builds the habit of asking what one row means before writing a join.

                ## Milestones
                1. The core chapters of a standard dimensional modelling text read, with notes on grain, facts and dimensions.
                2. The grain of every existing mart written in one sentence.
                3. One mart found with an unclear or mixed grain and a fix proposed.
                4. A conformed customer or product dimension identified that several facts should share.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every existing mart has a written one-sentence grain, and one mixed-grain model has a fix proposed in a pull request."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Read the chapters on grain, facts and dimensions in a dimensional modelling text"
                - "Write the grain of each existing mart in one sentence"
                - "Find one mart whose rows mean two different things"
                - "Propose a fix for the mixed-grain mart in a pull request"
            - name: Jinja and macros for repeated SQL
              description: |-
                ## Purpose
                Copy-pasted CASE statements and date logic drift apart the moment one copy is edited. Learning enough Jinja to write a macro, loop over a list of columns and call warehouse-specific functions through dispatch removes the repetition, as long as the macro stays readable to the next person.

                ## Milestones
                1. Variables, loops, conditionals and macros practised in a sandbox.
                2. Three repeated snippets in the project found and replaced with macros.
                3. Each macro documented with its arguments and an example call.
                4. Compiled SQL checked to confirm each macro produces what was intended.

                ## Notes
                Readable SQL beats clever Jinja. If a reviewer needs to compile the model to understand it, the macro has gone too far.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three repeated snippets are replaced by documented macros, and the compiled SQL matches the original output."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Work through the Jinja section of the dbt documentation in a sandbox"
                - "Search the project for three snippets copied into several models"
                - "Replace each snippet with a documented macro"
                - "Compare compiled output before and after for each changed model"
            - name: Custom generic tests for business rules
              description: |-
                ## Purpose
                Built-in tests catch nulls and duplicates but not rules like refunds never exceeding the original payment or subscription end dates falling after start dates. Writing those rules as reusable generic tests, with clear names and failure messages, puts the business's own logic under the same checks as primary keys.

                ## Milestones
                1. Five business rules collected from stakeholders and written as plain sentences.
                2. Each rule implemented as a generic test with arguments, or taken from an existing test package.
                3. The tests applied to the relevant marts and passing, or failures explained.
                4. Each test described so a failure message tells the reader what broke.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least five business-rule tests run in production, each with a description that explains a failure in plain language."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask finance and product for five rules their numbers must always obey"
                - "Check whether a test package already covers each rule"
                - "Write the missing rules as generic tests with arguments"
                - "Apply the tests to the relevant marts and run them in CI"
            - name: Incremental models and late-arriving data
              description: |-
                ## Purpose
                Rebuilding a billion-row event table every night wastes hours, but incremental models done carelessly silently drop late rows or duplicate updated ones. Learning the incremental strategies your warehouse supports, unique keys, lookback windows and schema change handling lets you make large models fast without making them wrong.

                ## Milestones
                1. The incremental strategies supported by your adapter listed with when to use each.
                2. One large model converted to incremental with a unique key and a lookback window for late rows.
                3. Row counts and totals compared between a full refresh and the incremental build, matching.
                4. A rule written for how the model handles new or removed columns.

                ## Notes
                Schedule an occasional full refresh of incremental models. Small drifts accumulate, and a rebuild every quarter is cheaper than finding them in a board pack.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One large model runs incrementally in production and matches a full refresh on row counts and totals."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Read your adapter's documentation on incremental strategies"
                - "Convert one large model to incremental with a lookback window"
                - "Compare the incremental result with a full refresh on counts and totals"
                - "Run a full refresh of incremental models to catch drift @recurring(quarterly)"
            - name: Snapshots for slowly changing dimensions
              description: |-
                ## Purpose
                Source systems usually overwrite a customer's plan or a product's price, so the history needed to answer what was true last March is gone. Snapshots record each change with valid-from and valid-to dates, but only from the day they start, so the sooner the important tables are snapshotted the more history exists.

                ## Milestones
                1. Tables whose history matters, such as customer plan and product price, listed.
                2. A snapshot for each, with the timestamp or check strategy chosen deliberately.
                3. A decision recorded on how deleted source rows are handled.
                4. One dimension built on a snapshot that answers a point-in-time question.

                ## Notes
                Snapshots are the one part of a dbt project that cannot be rebuilt from raw data. Protect their schema from accidental drops and back them up like source data.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The listed history-critical tables are snapshotted in production, and one dimension answers a point-in-time question from them."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List source tables whose past values someone will ask about"
                - "Choose the timestamp or check strategy for each snapshot"
                - "Build a point-in-time customer dimension from a snapshot"
                - "Check snapshot row growth and records closed in the last month @recurring(monthly:18)"
            - name: Reading compiled SQL and the DAG to debug a model
              description: |-
                ## Purpose
                Errors in a dbt model often point at a line in compiled SQL that does not exist in the file you edited. Learning to find the compiled and run SQL, select a model with its parents, and trace a wrong number back up the graph turns an afternoon of guessing into fifteen minutes of reading.

                ## Milestones
                1. The location of compiled and run SQL known and used on a real error.
                2. Graph selectors for parents, children and a model plus both practised.
                3. One wrong number traced from a mart back to the source row that caused it.
                4. A short debugging checklist written for the team README.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A debugging checklist is in the README, and you have traced one real wrong number back to its source using compiled SQL and graph selectors."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Open the compiled SQL for a model that recently failed"
                - "Practise graph selectors for parents and children on a sandbox build"
                - "Trace one disputed number from the mart back to its source rows"
                - "Write a six-step debugging checklist into the README"
            - name: Git branching and merge conflicts for analysts
              description: |-
                ## Purpose
                Analysts moving from BI tools to dbt usually find SQL easy and Git hard: a rejected push or a conflict in a YAML file can stall a first contribution for days. Practising branching, pulling main, resolving a conflict and amending a pull request on a throwaway repository builds confidence before it matters.

                ## Milestones
                1. Branch, commit, push and open a pull request done on a practice repository.
                2. A deliberate merge conflict in a YAML file created and resolved.
                3. Updating a branch with the latest main practised until it feels routine.
                4. A personal cheat sheet of the eight commands you use most.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You have resolved a YAML merge conflict and updated a branch from main on a practice repository, with a cheat sheet saved."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Create a practice repository with a copy of one model and its YAML"
                - "Create and resolve a merge conflict in the YAML file"
                - "Update a feature branch with the latest main three times"
                - "Save a cheat sheet of the Git commands you used"
            - name: Materialisation choice for each layer
              description: |-
                ## Purpose
                Materialisation decides whether a model costs nothing until queried or rebuilds every night, and inconsistent choices make both cost and freshness hard to predict. Agreeing defaults per layer in the project file, with written exceptions, makes the behaviour of any model obvious from its folder.

                ## Milestones
                1. Defaults agreed: views for staging, ephemeral or views for intermediate, tables or incremental for marts.
                2. The defaults set in the project file by folder rather than in each model.
                3. Every model that overrides its folder default listed with a reason.
                4. Query times of the main dashboards checked after the change.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Materialisation defaults are set per folder in the project file, and every override is listed with its reason."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List current materialisations for every model by folder"
                - "Agree default materialisations for each layer"
                - "Set the defaults in the project file and remove redundant model configs"
                - "Check dashboard query times on the marts after the change"
            - name: Star schema or wide tables for the BI tool
              description: |-
                ## Purpose
                BI tools differ: some handle joins between facts and dimensions well, others work best on one wide, pre-joined table per subject. Testing both shapes against your own tool and your heaviest dashboard settles a choice that otherwise gets argued model by model.

                ## Milestones
                1. The same dashboard built once on a star schema and once on a wide table.
                2. Query time, ease of building and risk of double counting compared.
                3. A decision recorded on which shape serves which audience.
                4. The convention added to the layer rules in the README.

                ## Notes
                Many teams keep both: a star schema as the governed core and wide tables built on top of it for specific tools. The wide table must never contain logic the star does not.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One dashboard tested on both shapes, with a recorded decision on which shape each audience uses."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pick the heaviest dashboard currently in use"
                - "Build a wide table version of its underlying star schema"
                - "Compare query time and double-counting risk for both versions"
                - "Record the decision and add it to the layer rules"
            - name: Date dimension with a fiscal calendar seed
              description: |-
                ## Purpose
                Fiscal years, retail weeks and public holidays are where reports quietly disagree, because each dashboard calculates them its own way. One date dimension, generated from a date spine and joined to a seed file holding the fiscal calendar, gives every model the same periods.

                ## Milestones
                1. A date spine model covering the full history and at least two future years.
                2. A seed file with fiscal year, quarter and period boundaries, owned by finance.
                3. Week, month, fiscal period and holiday flags available as columns.
                4. Every model that calculated its own fiscal period switched to the date dimension.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One date dimension with fiscal periods from a finance-owned seed is used by every model that needs fiscal dates."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask finance for the fiscal calendar rules and period boundaries"
                - "Build a date spine model with a seed of fiscal periods"
                - "Replace hand-rolled fiscal period logic in existing models"
                - "Extend the fiscal calendar seed before the new year starts @recurring(yearly)"
            - name: Timezone and currency handling standard in staging
              description: |-
                ## Purpose
                Timestamps arriving in three time zones and amounts in cents, pounds and dollars cause the subtlest errors in a project. Deciding once that staging stores timestamps in UTC, money in a stated unit and currency alongside, with conversion done in one place, removes a whole class of reconciliation problems.

                ## Milestones
                1. Each source's timestamp time zone and money unit recorded.
                2. A rule written: UTC timestamps, a named minor or major unit, a currency code column.
                3. Staging models updated to follow the rule.
                4. One model owning exchange-rate conversion, used by every mart that reports in a single currency.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written timezone and currency rule exists, all staging models follow it, and currency conversion happens in one model only."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Record the time zone and money unit of every source system"
                - "Write the staging rule for timestamps and money"
                - "Update staging models that break the rule"
                - "Build one exchange-rate conversion model for all marts"
            - name: Moving BI-tool custom SQL into marts
              description: |-
                ## Purpose
                Dashboards built on custom SQL inside the BI tool hide logic from review, tests and lineage, and they drift from each other. Moving the most used ones into marts, then pointing the dashboards at those marts, makes the logic visible and lets one fix reach every chart.

                ## Milestones
                1. The top ten BI custom SQL datasets from the inventory chosen for migration.
                2. Each rewritten as a mart or an extension of an existing mart, with tests.
                3. Dashboard numbers compared before and after, with differences explained.
                4. The old custom SQL datasets retired in the BI tool.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Ten dashboards that used BI custom SQL now read from tested marts, with before and after numbers reconciled."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Take the top ten BI custom SQL datasets from the inventory"
                - "Rewrite the first dataset as a tested mart"
                - "Reconcile dashboard numbers before and after each switch"
                - "Retire each old custom SQL dataset once its dashboard is moved"
            - name: Replacing legacy stored procedures with tested models
              description: |-
                ## Purpose
                Legacy stored procedures and scheduled scripts often carry years of undocumented fixes, and switching them off on a guess breaks reports nobody knew existed. Running the new dbt models in parallel and comparing outputs row by row until they match lets you retire the old code with evidence.

                ## Milestones
                1. Each legacy procedure's outputs and downstream readers listed.
                2. Equivalent dbt models built and run in parallel for at least two weeks.
                3. Row-level comparisons showing matches, or every difference explained and accepted by the owner.
                4. The legacy procedures disabled and their schedules removed.

                ## Notes
                The audit helper package compares two relations row by row and reports the match rate. Keep its output as the evidence for sign-off.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every legacy procedure in scope is disabled after a parallel run with documented row-level comparisons signed off by its owner."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "List each legacy procedure's outputs and who reads them"
                - "Ask the agent to translate the first procedure into a draft dbt model"
                - "Run the new and old outputs in parallel and compare them row by row"
                - "Disable each procedure after its owner signs off the comparison"
            - name: Breaking up a monolithic model
              description: |-
                ## Purpose
                A 600-line model with twelve CTEs is the one nobody wants to touch, so it collects workarounds instead of fixes. Splitting it into intermediate models with clear names, each testable on its own, and proving the final output has not changed, makes the logic reviewable again.

                ## Milestones
                1. The model's CTEs mapped, with the ones reused elsewhere marked.
                2. Reusable logic moved into named intermediate models with tests.
                3. The final output compared with the original and matching row for row.
                4. The refactored model under 150 lines and documented.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The monolithic model is split into tested intermediate models and its output matches the original row for row."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pick the longest model in the project that changes most often"
                - "Map its CTEs and mark the ones duplicated in other models"
                - "Move reusable CTEs into intermediate models with tests"
                - "Compare the refactored output with the original row by row"
            - name: Exposures for every dashboard built on marts
              description: |-
                ## Purpose
                Declaring dashboards, notebooks and reverse-sync jobs as exposures puts them on the lineage graph, so a reviewer can see which charts a change will touch before merging. It also turns the question of who to warn into a lookup rather than a guess.

                ## Milestones
                1. Each dashboard that reads a mart declared as an exposure with its owner and link.
                2. The pull request template asking reviewers to check affected exposures.
                3. Exposures visible in the docs site lineage view.
                4. New dashboards added as exposures within a month of launch.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every dashboard reading from a mart is declared as an exposure with an owner, and new ones are added monthly."
                cadence: rolling
              tasks:
                - "List dashboards that read from marts with their owners"
                - "Declare each dashboard as an exposure in a YAML file"
                - "Add newly launched dashboards as exposures @recurring(monthly:22)"
            - name: Seed files for business-owned mapping tables
              description: |-
                ## Purpose
                Mapping tables such as campaign to channel or product code to category usually live in someone's spreadsheet and drift from the warehouse. Moving small, slow-changing mappings into seed files with tests and a named business owner, who proposes changes by pull request or through a simple form, keeps them reviewed and versioned.

                ## Milestones
                1. Spreadsheet mappings used by models listed with their owners.
                2. Mappings under a few thousand rows moved into seed files with column types set.
                3. Uniqueness and accepted-values tests on each seed.
                4. Each business owner able to request a change and see it merged.

                ## Notes
                Seeds suit small, reviewable lookups. Large or frequently changing data belongs in a loaded source instead.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every small mapping used by models is a tested seed file with a named owner who has requested at least one change through the agreed route."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the spreadsheet mappings that models depend on"
                - "Move the small mappings into seed files with column types"
                - "Add uniqueness and accepted-values tests to each seed"
                - "Ask each mapping owner to confirm their seed is current @recurring(quarterly)"
            - name: Go-live of the first production marts
              description: |-
                ## Purpose
                Cutover day is when dashboards switch from old tables to the new marts, and a day of wrong numbers can cost the project its credibility. A checklist with reconciled numbers, a communication to dashboard owners, a rollback path and someone watching the first builds makes the switch uneventful.

                ## Milestones
                1. Headline numbers reconciled between old and new tables and signed off by each owner.
                2. Dashboard owners told the date, what changes and who to contact.
                3. A rollback path written: which dashboards point back where if something breaks.
                4. The first three production builds after cutover checked and passing.

                ## Notes
                Start from the **Operational checklist** template. Avoid cutting over during month-end or board pack week.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first marts are live with signed-off reconciliations, owners notified in advance and three clean production builds after cutover."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Choose a cutover date outside month-end and board pack week"
                - "Reconcile headline numbers and get each owner's sign-off"
                - "Send dashboard owners the date, changes and contact person"
                - "Watch the first three production builds after cutover"
            - name: Major dbt version migration
              description: |-
                ## Purpose
                Major dbt releases can change defaults, remove deprecated configuration and alter how packages behave, so a migration needs planning rather than a version bump. Treating it as a dated event with a risk list, a full parallel build and a freeze on other changes keeps the blast radius small.

                ## Milestones
                1. Breaking changes from the release notes listed against the project.
                2. Packages checked for compatible versions, with any blockers recorded.
                3. A full build on the new version in a separate environment, compared with production.
                4. Production switched on a planned date, with other merges frozen for that week.

                ## Notes
                Start from the **Risk register** template for the list of breaking changes and blocked packages.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Production runs on the new major version, switched on a planned date after a full comparison build with no unexplained differences."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "List every breaking change in the release notes that touches the project"
                - "Check each package for a version compatible with the new release"
                - "Run a full build on the new version and compare it with production"
                - "Freeze other merges for the week of the production switch"
            - name: Modelling design review for a new source system
              description: |-
                ## Purpose
                When a new CRM, billing platform or product database arrives, the modelling decisions made in the first week shape every report built on it for years. A design review before any staging model is written, covering keys, history, deletes and how it maps to existing dimensions, catches clashes while they are cheap.

                ## Milestones
                1. The new system's main tables, keys and update behaviour documented.
                2. How its customers, products or accounts map to existing dimensions decided.
                3. History and delete handling chosen: snapshots, soft deletes or full reloads.
                4. A short design note reviewed and approved before staging work starts.
              priority: medium
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A reviewed design note covering keys, history, deletes and dimension mapping is approved before the first staging model for the new system merges."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Get a sample extract and data dictionary for the new system"
                - "Document its keys, update behaviour and how it deletes records"
                - "Map its core entities to the existing dimensions"
                - "Hold a one-hour design review and record the decisions"
            - name: Docs site walkthrough for business users
              description: |-
                ## Purpose
                Business analysts rarely open the docs site unless someone shows them how it answers their questions. A forty-five minute walkthrough, using a real question from their own team, demonstrates search, column descriptions and lineage, and usually surfaces the descriptions that need rewriting.

                ## Milestones
                1. A real question from the audience chosen as the demonstration.
                2. The session held with search, descriptions and lineage shown.
                3. Confusing descriptions noted during the session and fixed within two weeks.
                4. A recording or written guide shared with people who missed it.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The walkthrough is held, a guide is shared, and the descriptions flagged during it are rewritten within two weeks."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the business team for one question they struggle to answer"
                - "Prepare a walkthrough that answers it using the docs site"
                - "Rewrite the descriptions that confused people in the session"
                - "Run the walkthrough again for new business users @recurring(yearly)"
            - name: Quarter-end freeze on finance models
              description: |-
                ## Purpose
                Finance teams reconcile the close against warehouse numbers, and a merged change to revenue logic in the middle of close week forces them to start again. Agreeing a freeze window on finance marts each quarter, with an emergency route for genuine fixes, protects the close without stopping other work.

                ## Milestones
                1. Finance marts tagged so the freeze applies to them only.
                2. Freeze dates agreed with the finance lead for each quarter-end.
                3. An emergency change route written, needing finance sign-off.
                4. Four quarter-ends passed with no unplanned finance model changes.
              priority: medium
              frontmatter:
                mode: event
                output_kind: habit
                success_criteria: "Four consecutive quarter-ends pass with no unplanned changes to finance marts during the agreed freeze window."
                cadence: cyclic
              tasks:
                - "Tag every finance mart so the freeze can be applied to them"
                - "Agree the freeze window with the finance lead"
                - "Announce the finance model freeze dates to all contributors @recurring(quarterly)"
                - "Write the emergency change route with finance sign-off"
            - name: Inheriting an undocumented dbt project
              description: |-
                ## Purpose
                Inheriting a dbt project from someone who has left usually means models without descriptions, tests that were switched off and a production job nobody understands. A structured first month, mapping what runs, what is read and what is broken before changing anything, avoids breaking the reports people still depend on.

                ## Milestones
                1. The production job, its schedule, credentials and alerting located and documented.
                2. The most-read marts and their consumers identified from query history.
                3. Disabled tests, failing tests and warnings listed in a remediation plan.
                4. A thirty-day plan agreed with your manager, with the riskiest fixes first.

                ## Notes
                Start from the **Remediation plan** template. Change nothing in production in the first two weeks except to fix an outage.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Within thirty days, the production job is documented, the top marts and consumers are known and a remediation plan is agreed."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Find where the production job runs and who receives its alerts"
                - "List the most-read marts and their consumers from query history"
                - "Record disabled and failing tests in a remediation plan"
                - "Agree a thirty-day plan with your manager"
            - name: An analyst's first merged model
              description: |-
                ## Purpose
                Moving from writing SQL in a BI tool to contributing a model means learning the repository, the conventions and the review process all at once. A small, real first model, such as a staging fix or a new column on an existing mart, taken through a pull request with a named mentor, makes the second one easy.

                ## Milestones
                1. A small first change chosen with a mentor from the backlog.
                2. The change built in your own development schema with tests passing.
                3. A pull request opened with the template filled in and review comments addressed.
                4. The change merged and visible in the production docs site.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Your first change has merged through a reviewed pull request and appears in production within thirty days."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask a mentor to pick a small first change from the backlog"
                - "Build the change in your development schema and run its tests"
                - "Open a pull request with every template section filled in"
                - "Address review comments and merge the change"
            - name: Solo analytics engineer operating rhythm
              description: |-
                ## Purpose
                As the only analytics engineer, there is no reviewer, no on-call partner and a queue of requests that never empties. A deliberately small setup, with self-review against a checklist, CI as the second pair of eyes, a weekly maintenance block and a clear list of what you will not build, keeps the project healthy without burning you out.

                ## Milestones
                1. A self-review checklist used on every change in place of a second reviewer.
                2. A weekly protected block for tests, docs and upgrades.
                3. A written list of requests you decline or defer, agreed with your manager.
                4. A one-page runbook so someone else could restart the production build if you are away.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A self-review checklist, a runbook for the production build and twelve weeks of protected maintenance blocks are in place."
                cadence: rolling
              tasks:
                - "Write a self-review checklist for your own pull requests"
                - "Write a runbook for restarting the production build"
                - "Agree with your manager which requests you will defer"
                - "Spend a two-hour block on tests, docs and upgrades @recurring(weekly:thu)"
            - name: Onboarding a new contributor to the project
              description: |-
                ## Purpose
                New contributors who spend their first week waiting for warehouse access and guessing conventions often make their first contribution a month late. A prepared onboarding plan with access requested in advance, a guided tour of the layers and a first ticket ready gets them to a merged pull request in the first fortnight.

                ## Milestones
                1. Repository, warehouse and BI access requested before the start date.
                2. A guided tour of the project's layers, conventions and production job given.
                3. A first ticket ready, small enough to merge in the first week.
                4. A merged pull request within the first two weeks.

                ## Notes
                Start from the **Onboarding plan** template. Ask each new person to fix one thing in the README that confused them; it is the cheapest way to keep it current.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The new contributor has all access on day one and a merged pull request within two weeks of starting."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Request repository, warehouse and BI access a week before the start date"
                - "Prepare a first ticket small enough to merge in a week"
                - "Give a one-hour tour of layers, conventions and the production job"
                - "Ask the new contributor to fix one confusing README section"
            - name: Unit tests for complex transformation logic
              description: |-
                ## Purpose
                Data tests check the output of a model against real data, which means a broken edge case only shows up when the data happens to contain it. Unit tests, supported in recent dbt versions, feed a model fixed input rows and check the exact output, so logic such as proration, attribution windows or status rules is proved before it ships.

                ## Milestones
                1. The five models with the most intricate logic chosen for unit tests.
                2. Each given a unit test with input rows and expected output, covering normal and edge cases.
                3. Unit tests running in CI on every change to those models.
                4. One previously unnoticed bug found or a known edge case proved correct.

                ## Notes
                Check that your dbt version supports unit tests before starting. Keep fixtures small: three to ten rows that exercise the rule, not a copy of production.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Five models with complex logic have unit tests covering at least one edge case each, running in CI."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Confirm your dbt version supports unit tests"
                - "Choose the five models with the most intricate business logic"
                - "Write input rows and expected output for each, including one edge case"
                - "Run the unit tests in CI for changes to those models"
            - name: Multi-project setup with access levels and model versions
              description: |-
                ## Purpose
                Once a single project passes several hundred models and several teams, every pull request touches someone else's work. Splitting it into domain projects, marking which models are public, protected or private, enforcing contracts on public models and versioning them when they change lets teams move independently without breaking each other.

                ## Milestones
                1. Domains and their owning teams mapped, with candidate project boundaries drawn.
                2. Groups and access levels set so private models cannot be referenced across groups.
                3. Contracts enforced on every public model, with versions for breaking changes.
                4. One domain split into its own project, referencing the core through public models only.

                ## Notes
                Cross-project references need either a hosted dbt plan that supports them or an open-source package that provides them. Confirm which you will use before splitting anything.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Access levels and groups are set across the project, public models have enforced contracts, and one domain runs as a separate project."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Map model folders to the teams that own them"
                - "Assign groups and access levels to every model"
                - "Enforce contracts on models other teams depend on"
                - "Split one domain into its own project using public models only"
            - name: Python models for logic SQL handles badly
              description: |-
                ## Purpose
                Some transformations, such as fuzzy matching, parsing awkward text or calling a statistics library, are painful in SQL. Python models, available on adapters that support them, keep that logic inside the same graph with the same tests, but they cost more and fewer reviewers can read them, so use them sparingly.

                ## Milestones
                1. Adapter support for Python models confirmed, with cost and runtime noted.
                2. One candidate transformation chosen where SQL is clearly the worse tool.
                3. The Python model built with the same tests and documentation as a SQL model.
                4. A rule written for when a Python model is allowed.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One Python model runs in production with tests, and a written rule says when Python models are allowed."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Check whether your warehouse adapter supports Python models"
                - "Pick one transformation that is clearly awkward in SQL"
                - "Build it as a Python model with tests and documentation"
                - "Write the rule for when Python models are acceptable"
            - name: Porting the project to a new warehouse adapter
              description: |-
                ## Purpose
                Switching warehouses after a platform decision means every model's SQL dialect, every macro and every incremental strategy has to work on the new adapter. Running both warehouses in parallel, replacing dialect-specific functions with cross-database macros and comparing outputs model by model keeps the move from becoming a rewrite.

                ## Milestones
                1. Dialect-specific functions and configs across the project listed.
                2. Replacements chosen: cross-database macros, dispatch or adapter-specific branches.
                3. The full project building on the new warehouse with tests passing.
                4. Mart outputs compared between the two warehouses and signed off before switching consumers.

                ## Notes
                This project assumes the platform choice is already made. The port is where the hidden dialect assumptions surface, so budget time for them.
              priority: low
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The full project builds and passes tests on the new warehouse, with mart outputs reconciled against the old one before consumers switch."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Search the project for warehouse-specific functions and configs"
                - "Replace dialect-specific SQL with cross-database macros"
                - "Build the full project on the new warehouse and fix failures"
                - "Compare mart outputs between the two warehouses before switching"
---

# Analytics Data Modelling (dbt)

This area is for the analytics engineer who owns a dbt project and the analyst who wants to stop pasting the same SQL into five dashboards and start contributing models that others can review. It begins with foundations (finding the transformation logic scattered across tools, a repository with environments, sources, layer conventions, a style guide and the first staging and mart models), then the routines that keep a project healthy, the skills behind good models from dimensional design to incremental builds and snapshots, decisions and refactors, dated events such as go-live and a major version migration, situations from inheriting an undocumented project to working solo, and finally specialist work like unit tests, multi-project setups and porting to a new warehouse.

What repeats is a daily look at the morning production build, a weekly pull request review rota, monthly checks on test coverage, documentation gaps, run times, CI health and the consumer changelog, quarterly package upgrades, unused model sweeps and the finance close freeze, and yearly refreshes of the fiscal calendar and the style guide. The Purchase decision, Course, Operational checklist, Risk register, Remediation plan and Onboarding plan templates pair with choosing where builds run, learning the fundamentals, go-live, the major version migration, an inherited project and new contributors. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
