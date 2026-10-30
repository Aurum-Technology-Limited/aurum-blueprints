---
id: data-analytics.elt-data-pipelines
name: ELT Data Pipelines
description: "Every source inventoried and owned, loads that survive reruns and backfills, schedules with real dependencies, and failure and freshness alerts that reach an owner before stakeholders notice."
category: business
version: 1.0.0
tags: [data-analytics, elt-data-pipelines, engineer, team, orchestration, change-data-capture, incremental-loading, pipeline-monitoring]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - operational-checklist
    - vendor
    - risk-register
    - onboarding-30-60-90
    - onboarding-plan
  pillars:
    - name: Data & Analytics
      emoji: "📊"
      description: "Turning data into decisions: metrics and dashboards, data pipelines and warehouses, experimentation, forecasting and modelling, machine learning, data quality and governance."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: ELT Data Pipelines
          description: "Extracting data from apps and databases, loading it into the warehouse and transforming it on a schedule, with monitoring for failures."
          projects:
            - name: Source system and pipeline inventory
              description: |-
                ## Purpose
                Before changing anything, you need one list of every system that feeds the warehouse: SaaS apps, production databases, spreadsheets someone uploads by hand and vendor file drops. Recording each source with its connector, schedule, owner and the raw tables it lands turns a tangle of jobs into something you can reason about, and it is often the first time anyone sees the full count.

                ## Milestones
                1. A single inventory listing every source system, the connector or script that extracts it, and the raw schema it loads into.
                2. Each entry showing schedule, typical rows per run and the date it last succeeded.
                3. A named technical owner and a business contact recorded against every source.
                4. Orphaned jobs with no owner or no downstream use flagged for a decision.

                ## Notes
                Pull the list from three places: the orchestrator, the connector tool and the warehouse's own schema list. Jobs that appear in only one of the three are where the surprises live.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "An inventory covers every source that writes to the warehouse, each with a schedule, owner and last successful run date."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Export the list of jobs from the orchestrator and the connector tool"
                - "List every warehouse schema that receives raw loads"
                - "Reconcile the lists and record each source with its owner and schedule"
                - "Flag jobs that have no owner or no downstream table reading them"
                - "Add new sources to the inventory and mark retired ones @recurring(quarterly)"
            - name: Freshness targets agreed with data consumers
              description: |-
                ## Purpose
                Teams rarely say how fresh their data needs to be until it is late, and then every pipeline is urgent. Agreeing a freshness target per source with the people who use it, such as hourly for orders and daily for HR, tells you where to spend engineering effort and gives alerts a threshold that means something.

                ## Milestones
                1. Each source in the inventory tagged with a freshness target in hours, agreed with a named consumer.
                2. Sources split into tiers, with the top tier limited to the few that drive same-day decisions.
                3. The targets published where analysts and stakeholders can read them.
                4. Alert thresholds set from the agreed targets rather than guesswork.

                ## Notes
                Ask what decision is made with the data and at what time of day, not how fresh people would like it. Everyone would like real time.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A published table of freshness targets, one per source, each agreed with a named consumer and wired to an alert threshold."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the five reports people complain about most when they are late"
                - "Ask each consumer what decision the data supports and by what time"
                - "Assign every source a freshness tier and a target in hours"
                - "Publish the targets next to the pipeline inventory"
                - "Review freshness tiers with consumers at the start of the year @recurring(yearly)"
            - name: Raw landing schema conventions
              description: |-
                ## Purpose
                Raw tables are the evidence trail for everything built on top, so they should look predictable and never be edited by hand. Fixing the conventions now, one schema per source, original column names kept, a load timestamp and batch id on every row, saves analysts from guessing what a table is and makes reloads safe.

                ## Milestones
                1. A written convention covering schema naming, table naming and the metadata columns every load adds.
                2. Write access to raw schemas limited to pipeline service accounts.
                3. Existing raw tables checked against the convention, with exceptions listed.
                4. The convention linked from the repository readme and the onboarding notes.

                ## Notes
                Keep raw close to the source shape. Renaming, casting and cleaning belong in the transformation layer, where they are versioned and tested.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page raw layer convention exists, every raw schema follows it or sits on an exceptions list, and only service accounts can write there."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the naming rule for raw schemas and tables"
                - "Define the load metadata columns every pipeline must add"
                - "Remove human write access to raw schemas in the warehouse"
                - "List raw tables that break the convention and decide which to fix"
            - name: Least-privilege connector credentials
              description: |-
                ## Purpose
                Pipelines often run on a former employee's personal token or an admin account nobody dares rotate. Moving every connector onto a dedicated service account with read-only scope, stored in a secrets manager, removes a security risk and the outage that follows when that person's account is closed.

                ## Milestones
                1. Every connector and script mapped to the account it authenticates with.
                2. Personal and admin credentials replaced with dedicated service accounts holding read-only scopes.
                3. All secrets held in a secrets manager or the connector tool's vault, none in code or config files.
                4. A record of each credential's owner, scope and expiry date.

                ## Notes
                Search the repository history for committed secrets, not just the current files. Anything ever committed should be treated as exposed and rotated.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "No pipeline authenticates with a personal or admin account, and every credential sits in a secrets manager with owner and expiry recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the account each connector and script uses to sign in"
                - "Request read-only service accounts from each source system's admin"
                - "Move every secret into the secrets manager and remove it from config files"
                - "Scan the repository history for committed keys and rotate any found"
            - name: Managed connector or custom code per source
              description: |-
                ## Purpose
                Writing your own extractor for a well-known SaaS app means owning its pagination, rate limits and API changes forever, while paying a managed connector by rows synced gets expensive on high-volume tables. Deciding source by source, with maintenance hours written next to licence cost, stops the choice being made by whoever happens to build the next one.

                ## Milestones
                1. Each major source scored on volume, API stability, managed connector availability and in-house knowledge.
                2. Estimated yearly cost of managed sync set beside the engineering hours a custom extractor would take.
                3. A recorded decision per source: managed, open-source connector or custom code.
                4. A written rule for how new sources are decided in future.

                ## Notes
                Start from the **Purchase decision** template. Price the custom option honestly: include on-call time and the API upgrade you will have to make in eighteen months.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every source in the inventory has a recorded build or buy decision with its estimated yearly cost and maintenance hours."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pick the five sources with the highest row volume or most failures"
                - "Get a usage-based price estimate for each from two connector vendors"
                - "Estimate yearly engineering hours to build and maintain each extractor in-house"
                - "Record the decision per source with one paragraph of reasoning"
                - "Revisit build or buy decisions before connector contracts renew @recurring(yearly)"
            - name: First orchestrated workflow with dependencies
              description: |-
                ## Purpose
                Cron entries on a server cannot express that transformations must wait for loads, or retry one step without rerunning everything. Moving one end-to-end flow into an orchestrator, extract then load then transform, teaches the team its model on something real before the rest follow.

                ## Milestones
                1. One source's extract, load and transformation steps running as a single orchestrated workflow.
                2. Dependencies declared so transformation starts only after the load succeeds.
                3. Retries, a timeout and a failure notification configured on each step.
                4. A short note on how the workflow is defined, deployed and rerun.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One production flow runs in the orchestrator with declared dependencies, retries and a failure notification, documented for the team."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Choose the simplest high-value source to move first"
                - "Write extract, load and transform as separate steps with declared dependencies"
                - "Configure retries, a timeout and a failure notification on each step"
                - "Run the new flow beside the old job for a week and compare row counts"
            - name: Separate development and production pipeline environments
              description: |-
                ## Purpose
                Testing a pipeline change against production tables is how a half-finished merge overwrites a week of orders. A development target with its own schemas, sample data and credentials lets engineers run changes end to end without touching what the business reads.

                ## Milestones
                1. Development schemas or a separate database created for pipeline testing.
                2. Pipeline configuration switching target by environment setting, with no hard-coded production names.
                3. Development credentials that cannot write to production schemas.
                4. A documented way to load a small sample of source data into development.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Any pipeline can be run end to end against a development target that cannot write to production, using a documented sample load."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Create development schemas that mirror the raw production layout"
                - "Replace hard-coded schema names in pipeline code with environment settings"
                - "Issue development credentials with no write access to production"
                - "Document how to load a one-week sample of each source into development"
            - name: Pipeline repository with review and CI checks
              description: |-
                ## Purpose
                Extraction scripts edited directly on a server leave no history of who changed what or why a column vanished. Putting all pipeline code and connector configuration in one repository, with pull request review and automated checks, makes every change reviewable and every bad deploy reversible.

                ## Milestones
                1. All extraction scripts, orchestration definitions and connector configuration in one version-controlled repository.
                2. Changes merged only through reviewed pull requests.
                3. CI running linting, unit tests and configuration validation on every pull request.
                4. Production deploys triggered from the main branch, never from a laptop.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every pipeline change in the last month went through a reviewed pull request with passing CI checks before reaching production."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Copy every pipeline script and job definition from servers into one repository"
                - "Turn on branch protection so changes need one approving review"
                - "Add a CI job that lints code and validates orchestration definitions"
                - "Switch production deploys to run from the main branch only"
            - name: Failure and freshness alerts routed to an owner
              description: |-
                ## Purpose
                A pipeline that fails silently at 2am is discovered at 10am by a director looking at yesterday's numbers. Sending every failure and every freshness miss to a channel someone watches, with the pipeline name, the failed step and a link to the logs, means the data team hears first.

                ## Milestones
                1. Every orchestrated job and managed connector sending failures to one shared alert channel.
                2. Each alert naming the pipeline, the failed step, the error and a log link.
                3. Freshness checks alerting when a source passes its agreed target, even when no job failed.
                4. A test alert sent and acknowledged by the owner of each tier one pipeline.

                ## Notes
                Freshness alerts catch what failure alerts miss: a job that succeeds but loads zero rows, or a connector the vendor has quietly paused.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every pipeline and connector sends failure and freshness alerts to a watched channel, proven by an acknowledged test alert for each tier one source."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Create one alert channel for pipeline failures and invite the owners"
                - "Connect orchestrator and connector tool failure notifications to the channel"
                - "Add a freshness check per source using its agreed target"
                - "Fire a test alert for each tier one pipeline and confirm someone responds"
            - name: Morning pipeline health check
              description: |-
                ## Purpose
                Ten minutes at the start of the working day, before stakeholders open dashboards, catches overnight failures, partial loads and stuck syncs while there is still time to rerun. A fixed checklist keeps it to ten minutes rather than a morning of reading logs.

                ## Milestones
                1. A checklist covering failed runs, freshness misses, zero-row loads and long-running jobs.
                2. A single view showing last run status and row counts for every tier one pipeline.
                3. Overnight issues posted to the team channel with an owner before stakeholders start work.
                4. Twenty consecutive working days of checks completed.

                ## Notes
                Start from the **Operational checklist** template.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The health check is done before stakeholders start work on twenty consecutive working days, with every issue posted with an owner."
                cadence: rolling
              tasks:
                - "Build a query showing last run status and rows loaded per tier one pipeline"
                - "Write the checklist of what to look at and where to post findings"
                - "Run the morning pipeline health check and post issues with an owner @recurring(daily)"
                - "Ask the agent to summarise overnight run logs into three lines for the team channel"
            - name: Pipeline on-call rota and escalation path
              description: |-
                ## Purpose
                When everyone owns pipeline failures, nobody does, and the same person ends up fixing them at weekends. A weekly rota with a clear handover, an escalation contact and agreed response times shares the load and tells stakeholders who to ask.

                ## Milestones
                1. A rota covering every week of the next quarter, with holiday cover agreed.
                2. Response times written per freshness tier, including what waits until Monday.
                3. An escalation path to source system owners and each connector vendor's support.
                4. A weekly handover note listing open incidents and anything fragile.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A published rota for the next quarter, written response times per tier and a handover note for each of the last four weeks."
                cadence: rolling
              tasks:
                - "Draft a rota for the next quarter and agree holiday cover"
                - "Write response times per freshness tier, including weekends"
                - "List escalation contacts for each source system and vendor"
                - "Write the on-call handover note with open incidents and fragile jobs @recurring(weekly:mon)"
            - name: Pipeline incident log and root cause review
              description: |-
                ## Purpose
                Fixing a failed run and moving on means the same failure returns next month. Logging each incident with cause, impact, time to detect and time to fix, then reviewing the log monthly, shows which sources and failure types eat the most hours and where a permanent fix pays back.

                ## Milestones
                1. An incident log with fields for pipeline, start, detection and fix times, cause category and downstream impact.
                2. Every failure that breached a freshness target logged within one working day.
                3. A monthly review ranking causes by hours lost.
                4. At least one recurring cause removed by a permanent fix each quarter.

                ## Notes
                Use a small fixed set of cause categories: source change, credential expiry, rate limit, infrastructure, code bug, upstream data. Free text alone cannot be counted.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every freshness breach in the last quarter is in the log with a cause category, and one recurring cause has a recorded permanent fix."
                cadence: rolling
              tasks:
                - "Create the incident log with fixed cause categories"
                - "Seed the log with last month's failures from orchestrator history"
                - "Review the incident log and pick one cause to fix permanently @recurring(monthly:9)"
                - "Share the top three causes with the source system owners involved"
            - name: Credential and token expiry calendar
              description: |-
                ## Purpose
                OAuth refresh tokens, API keys and database passwords expire on their own schedules, and a lapsed token is one of the most common reasons a connector stops overnight. Keeping expiry dates in one calendar and rotating ahead of them turns surprise outages into planned five-minute changes.

                ## Milestones
                1. Every pipeline credential listed with its expiry or rotation date.
                2. Calendar reminders set two weeks before each expiry.
                3. A rotation procedure written for each credential type.
                4. No connector outage caused by an expired credential for two consecutive quarters.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All pipeline credentials have an expiry date in a shared calendar, and no outage in two quarters was caused by an expired credential."
                cadence: rolling
              tasks:
                - "List each credential with its expiry date or the source's rotation policy"
                - "Add a reminder two weeks before every expiry"
                - "Write the rotation steps for API keys, OAuth apps and database users"
                - "Rotate credentials due in the coming quarter and update the calendar @recurring(quarterly)"
            - name: Connector and source API change watch
              description: |-
                ## Purpose
                SaaS vendors deprecate API versions, rename fields and tighten rate limits with notice that lands in an inbox nobody reads. A monthly sweep of changelogs and connector release notes for your top sources gives weeks of warning instead of a broken sync.

                ## Milestones
                1. A list of changelog, status and developer notice pages for the ten most important sources.
                2. Developer notice emails routed to a shared mailbox the team reads.
                3. Upcoming deprecations logged with their deadline and the pipelines affected.
                4. Connector and client library versions in use recorded, with upgrades scheduled.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A deprecation log lists every announced source API change affecting your pipelines, each with a deadline and an owner."
                cadence: rolling
              tasks:
                - "Bookmark the changelog and developer notice pages for the top ten sources"
                - "Route vendor developer emails to a shared team mailbox"
                - "Read source changelogs and connector release notes and log deprecations @recurring(monthly:12)"
                - "Record the connector and client library versions each pipeline runs"
            - name: Schema drift review at the raw layer
              description: |-
                ## Purpose
                Sources add columns, change types and drop fields without asking, and connectors react in different ways: some add the column, some fail, some silently fill it with nulls. A weekly look at what changed in raw schemas catches drift before a transformation breaks, or before a new field holding personal data lands unnoticed.

                ## Milestones
                1. Each connector's schema change behaviour documented: add, block or ignore.
                2. A report listing columns added, removed or retyped in raw schemas over the past week.
                3. A decision rule for new columns, including who checks them for sensitive data.
                4. Drift findings passed to the transformation owners within the week.

                ## Notes
                Formal agreements with producers about schemas belong with data contracts. This is about noticing and handling what has already arrived.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly drift report runs over every raw schema, and each change from the past month has a recorded decision."
                cadence: rolling
              tasks:
                - "Document how each connector handles new, dropped and retyped columns"
                - "Write a query that compares raw column lists with last week's snapshot"
                - "Review raw schema changes and decide what to do with each @recurring(weekly:thu)"
                - "Agree who checks new columns for personal or sensitive data"
            - name: Monthly pipeline reliability report
              description: |-
                ## Purpose
                Stakeholders judge the data team by how often numbers are late, so publish that figure before they invent one. A monthly page with run success rate, freshness hits per tier, incident count and time to recover shows whether reliability is improving and justifies the time spent on fixes.

                ## Milestones
                1. Written definitions for success rate, freshness hit rate and time to recover.
                2. The report generated from orchestrator metadata, not assembled by hand.
                3. The report shared monthly with data consumers and the team lead.
                4. Six months of figures showing the trend per tier.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly reports are published with success rate, freshness hit rate per tier and time to recover."
                cadence: rolling
              tasks:
                - "Define success rate, freshness hit rate and time to recover in writing"
                - "Build a query over run history that produces the three figures"
                - "Publish the reliability report and send it to data consumers @recurring(monthly:3)"
                - "Ask the agent to draft a short commentary on the month's biggest movement"
            - name: Connector vendor usage and contract review
              description: |-
                ## Purpose
                Usage-based connector pricing grows quietly as tables are added and sync frequency creeps up, and a single noisy table can double the bill. Checking rows synced per connector each month against the contract tier catches runaway tables and gives you facts before the renewal call.

                ## Milestones
                1. A vendor record holding contract tier, renewal date, pricing unit and support contacts.
                2. Monthly rows or credits synced per connector tracked against the contract allowance.
                3. The five most expensive tables identified, each with a sync frequency or column selection decision.
                4. A renewal brief prepared at least eight weeks before the contract ends.

                ## Notes
                Start from the **Vendor** template. Warehouse compute and storage spend is a separate topic; this covers the connector line only.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly sync usage per connector is recorded against the contract tier, and a renewal brief exists eight weeks before renewal."
                cadence: rolling
              tasks:
                - "Create a vendor record with tier, renewal date and pricing unit"
                - "Export rows synced per connector and table from the vendor dashboard"
                - "Compare sync usage with the contract allowance and flag the top tables @recurring(monthly:18)"
                - "Write the renewal brief with usage trends and the tables you could drop"
            - name: Runbook for every production pipeline
              description: |-
                ## Purpose
                At 3am on someone else's pipeline, the on-call engineer needs to know how to rerun it safely, what a backfill looks like and who to call at the source. A short runbook per pipeline, kept next to the code, turns a two-hour investigation into a fifteen-minute fix.

                ## Milestones
                1. A runbook template with sections for purpose, schedule, dependencies, safe rerun, backfill and contacts.
                2. Runbooks written for every tier one pipeline.
                3. Each runbook tested by someone who did not write it.
                4. Runbooks linked from the alert message for their pipeline.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every tier one pipeline has a runbook tested by a second engineer and linked from its failure alert."
                cadence: rolling
              tasks:
                - "Write a one-page runbook template"
                - "Draft runbooks for tier one pipelines, starting with the most failure-prone"
                - "Have a colleague follow each runbook in development and note the gaps"
                - "Add the runbook link to each pipeline's alert message"
                - "Check runbooks against recent incidents and update stale steps @recurring(quarterly)"
            - name: Quarterly unused sync clean-up
              description: |-
                ## Purpose
                Pipelines are easy to add and rarely removed, so raw schemas fill with tables nobody has queried in a year, each still costing sync time and on-call attention. A quarterly check of query history against loaded tables shows what can be paused, and asking before removing anything keeps trust.

                ## Milestones
                1. A list of raw tables and connectors with no downstream query or model in the past ninety days.
                2. Owners and consumers asked before anything is paused.
                3. Unused syncs paused for one quarter, then removed if nobody objected.
                4. The inventory updated with what was retired and why.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter, a list of unused syncs is reviewed with owners, and paused or removed tables are recorded in the inventory."
                cadence: rolling
              tasks:
                - "Query warehouse access history for raw tables unread in ninety days"
                - "Check whether any transformation model still references each table"
                - "Ask owners and consumers before pausing each unused sync"
                - "Run the unused sync review and pause what nobody claims @recurring(quarterly)"
            - name: Source system change calendar with app owners
              description: |-
                ## Purpose
                Most pipeline breakages start with a change nobody told the data team about: a CRM field clean-up, a database migration, a new billing system. A monthly check-in with the owners of your top sources, plus a shared calendar of planned changes, moves you from reacting to breakages to preparing for them.

                ## Milestones
                1. Named application owners recorded for each tier one source.
                2. A shared calendar of planned source changes, migrations and maintenance windows.
                3. A standing monthly check-in or written thread with each owner.
                4. Two upcoming changes caught and prepared for before they reached production.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A shared calendar of planned source changes exists, and at least two changes were prepared for before they went live."
                cadence: rolling
              tasks:
                - "List the application owner for each tier one source"
                - "Create a shared calendar for planned source changes and maintenance windows"
                - "Ask each source owner about planned field, schema or system changes @recurring(monthly:22)"
                - "Show source owners which kinds of change break pipelines and why"
            - name: Incremental extraction with cursors and lookback windows
              description: |-
                ## Purpose
                Full reloads stop scaling once tables reach tens of millions of rows, but incremental extraction has its own traps: updated_at columns that are not always updated, clock skew between servers and records committed late. Learning how cursors, high-water marks and overlap windows work, then applying them to one real table, prevents the silent row loss incremental loads are known for.

                ## Milestones
                1. Cursor columns on three source tables checked for reliability.
                2. A worked example of a high-water mark with a lookback window and deduplication.
                3. One table switched to incremental extraction in development, with row counts matching a full reload.
                4. A short internal note on when incremental extraction is unsafe.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One table loads incrementally in development with row counts matching a full reload over two weeks, and the team note is written."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Check whether updated_at changes on every update for three candidate tables"
                - "Write down how a high-water mark and lookback window would work for one table"
                - "Build the incremental load in development with deduplication on the primary key"
                - "Compare incremental and full reload row counts daily for two weeks"
            - name: Change data capture from database logs
              description: |-
                ## Purpose
                Query-based extraction misses hard deletes and puts load on production databases at every sync. Log-based change data capture reads the database's replication log instead, but it brings replication slots, snapshot strategy and schema change handling that need to be understood before anyone switches it on in production.

                ## Milestones
                1. The difference between query-based and log-based extraction explained in a one-page note.
                2. The source database's logging and replication prerequisites listed with the database administrator.
                3. Change data capture running against a development copy of one database.
                4. Insert, update and delete events verified in the raw tables.

                ## Notes
                An unconsumed replication slot can fill the source database's disk. Agree monitoring and an emergency procedure with the database owner before going near production.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "CDC runs against a development database copy, with inserts, updates and deletes verified in raw tables and the prerequisites documented."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Read your database's documentation on logical replication or binary log settings"
                - "List the prerequisites and risks with the database administrator"
                - "Set up change data capture against a development copy of one database"
                - "Test an insert, an update and a delete and check each appears in raw"
            - name: Idempotent loads and safe reruns
              description: |-
                ## Purpose
                If rerunning yesterday's job doubles yesterday's rows, every retry and backfill becomes a risk. Designing loads so that running them twice gives the same result, through merge on a key, partition overwrite or delete then insert, is the single habit that makes pipelines safe to operate.

                ## Milestones
                1. Each tier one pipeline classified by load strategy: append, merge, partition overwrite or full replace.
                2. Unique keys confirmed for every merged table.
                3. Pipelines that duplicate rows on rerun listed and fixed.
                4. A rerun test in development showing identical row counts after two runs.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every tier one pipeline produces identical row counts when run twice for the same window in development."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Record the load strategy each tier one pipeline uses"
                - "Confirm a unique key exists for every table loaded by merge"
                - "Run each pipeline twice for the same window in development and compare counts"
                - "Fix pipelines that append duplicates on rerun"
            - name: Extracting from paginated, rate-limited APIs
              description: |-
                ## Purpose
                Custom extractors against SaaS APIs fail in predictable ways: pagination that skips records when data changes mid-read, rate limits that start returning errors after page forty, and tokens that expire during long runs. Practising the standard patterns, cursor pagination, backoff with jitter and checkpointing, on one real API saves weeks of intermittent failures.

                ## Milestones
                1. Rate limit, pagination and authentication rules for one source API written down from its documentation.
                2. An extractor that uses cursor pagination, honours rate limit headers and retries with backoff.
                3. Checkpointing in place so a failed run resumes rather than restarts.
                4. A full extraction completed without rate limit failures.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One custom extractor completes a full run with cursor pagination, backoff and checkpointing, without rate limit failures."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Read the source API's pagination, rate limit and authentication documentation"
                - "Implement cursor pagination and exponential backoff with jitter"
                - "Save a checkpoint after each page so a failed run can resume"
                - "Run a full extraction and record the time taken and any throttling"
            - name: Orchestration concepts for pipeline engineers
              description: |-
                ## Purpose
                Orchestrators share a vocabulary of dependencies, sensors, retries, concurrency limits, parameterised runs and catch-up, and misreading one of them is behind many duplicate loads and stuck queues. Working through each concept on your own orchestrator turns settings copied from examples into choices you can explain.

                ## Milestones
                1. Each core concept explained in one line, with how your orchestrator implements it.
                2. Catch-up and backfill behaviour tested on a development workflow.
                3. Concurrency limits set for sources with strict rate limits.
                4. A team cheat sheet of the settings every new workflow must declare.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A team cheat sheet lists the settings every workflow must declare, with catch-up behaviour tested in development."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the core concepts and find your orchestrator's term for each"
                - "Test what happens when a paused workflow is switched back on"
                - "Set concurrency limits for the sources with strict rate limits"
                - "Write a one-page cheat sheet of required workflow settings"
            - name: Handling deletes from source systems
              description: |-
                ## Purpose
                Incremental syncs see new and changed rows but not deleted ones, so the warehouse slowly fills with cancelled orders and customers who no longer exist. Knowing how each source signals deletion, a soft delete flag, a deleted records endpoint, a log event or nothing at all, decides how you keep raw tables honest.

                ## Milestones
                1. Each tier one source classified by how it exposes deletions.
                2. A strategy chosen per source: soft delete flag, tombstone records, periodic key comparison or full reload.
                3. Deleted rows marked in raw rather than removed, so history is kept.
                4. A row count reconciliation against the source showing the gap closed.

                ## Notes
                Deletion requests for personal data have legal timelines and belong in your privacy process. Make sure that process knows where raw copies live.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every tier one source has a recorded deletion strategy, and a count reconciliation shows raw tables match the source within an agreed tolerance."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Check how each tier one source exposes deleted records"
                - "Choose a deletion strategy per source and write down why"
                - "Mark deleted rows with a flag and timestamp in raw instead of removing them"
                - "Compare primary key counts between source and raw for one table"
            - name: Timestamps, time zones and late-arriving records
              description: |-
                ## Purpose
                Half the questions about missing or doubled data turn out to be about time: a source storing local time without an offset, a daylight saving shift, or events that arrive hours after they happened. Learning how each source stores time and setting rules for the raw layer stops the team debating midnight boundaries every month end.

                ## Milestones
                1. The time zone and format of key timestamp columns recorded per source.
                2. A rule that raw loads keep original values and add a UTC version.
                3. Lookback windows sized from measured late-arrival delays.
                4. A test case covering a daylight saving change for one pipeline.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Timestamp handling is documented per tier one source, with lookback windows set from measured late-arrival delays."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Record the time zone and format of the main timestamp column per source"
                - "Measure how late records arrive for one event-based source"
                - "Add a UTC timestamp alongside the original value in raw loads"
                - "Write a test that runs one pipeline across a daylight saving change"
            - name: Moving nightly full refreshes to incremental syncs
              description: |-
                ## Purpose
                Nightly full reloads that took ten minutes three years ago now take three hours, delay the morning transformation run and hammer the source. Converting the largest tables to incremental loads, one at a time and with reconciliation, cuts run time and source load without risking silent gaps.

                ## Milestones
                1. Tables ranked by full refresh duration and row count.
                2. The five largest moved to incremental loads, each with a deletion strategy.
                3. A weekly full key reconciliation scheduled to catch drift.
                4. Total nightly run time measured before and after.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The five longest full refresh tables load incrementally, with weekly reconciliation in place and before and after run times recorded."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Rank tables by full refresh duration from the last month of runs"
                - "Convert the largest table to incremental loading in development"
                - "Reconcile incremental results against a full reload for two weeks"
                - "Repeat for the next four tables and record run time savings"
            - name: Replacing cron scripts with the orchestrator
              description: |-
                ## Purpose
                A server full of cron jobs and shell scripts is invisible: no history, no retries, no dependencies, and one disk failure from disappearing. Migrating every remaining script into the orchestrator, in order of business impact, ends the shadow pipelines that only one person understands.

                ## Milestones
                1. Every cron entry on every data server listed and matched to an inventory source.
                2. A migration order set by business impact and failure history.
                3. Each script running in the orchestrator with retries and alerts, its old entry disabled.
                4. The old server's crontab empty and the server scheduled for retirement.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "No data pipeline runs from cron, every former script runs in the orchestrator with alerts, and the old crontab is empty."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Export the crontab from every server that runs data jobs"
                - "Match each entry to a source in the inventory and rank by impact"
                - "Migrate scripts one at a time, running old and new side by side for a week"
                - "Disable each old cron entry once the new run matches"
            - name: Retry, timeout and backoff policy per pipeline
              description: |-
                ## Purpose
                Default retry settings either give up on a network blip or retry a broken job for six hours while it holds a lock on a source table. Setting retries, timeouts and backoff per pipeline, based on how its source actually fails, cuts false alerts and stops runaway jobs.

                ## Milestones
                1. Failure history reviewed to separate transient errors from real breakage per pipeline.
                2. Retry counts, backoff and timeouts set per pipeline and recorded in code.
                3. Jobs that must never retry automatically identified, such as loads that are unsafe to rerun.
                4. Alert volume compared for the month before and after.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every tier one pipeline has explicit retry, backoff and timeout settings in code, and alert volume before and after is recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pull three months of failures and tag each as transient or real"
                - "Set retries, backoff and a timeout per pipeline from that history"
                - "Disable automatic retries for loads that are not safe to rerun"
                - "Compare alert counts for the month before and after the change"
            - name: Read replica for production database extraction
              description: |-
                ## Purpose
                Extraction queries against the primary production database can slow the application customers use, and a large backfill at the wrong moment can cause an outage. Agreeing with the database owner to extract from a read replica or snapshot, with limits on query time and connections, protects the product and the data team's standing with engineering.

                ## Milestones
                1. Current extraction queries against production databases listed with their run times.
                2. A read replica, snapshot or CDC option agreed with the database owner.
                3. All extraction connections pointed at the agreed target.
                4. Query timeouts and connection limits set for the extraction user.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "No extraction query runs against a primary production database, and the agreed replica or alternative is recorded with the database owner."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every extraction query that runs against a primary database"
                - "Meet the database owner to compare replica, snapshot and CDC options"
                - "Point extraction connections at the agreed replica or snapshot"
                - "Set a statement timeout and connection limit for the extraction user"
            - name: Transformations triggered by load completion
              description: |-
                ## Purpose
                Scheduling transformations at 6am because loads usually finish by 5.30 works until the morning they do not, and then dashboards show half-loaded numbers. Triggering each transformation run from the completion of the loads it depends on removes the race and shortens the wait on good days.

                ## Milestones
                1. Each transformation run mapped to the raw sources it reads.
                2. Clock-based transformation schedules replaced with triggers on load completion.
                3. A rule for partial failure: which models still run when one source is late.
                4. Average time from load finished to model ready measured before and after.

                ## Notes
                How the models themselves are written and tested belongs with your transformation modelling work. This is only about when they run.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Transformation runs start on load completion rather than a clock time, with a written rule for late sources and latency measured before and after."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Map each scheduled transformation run to the raw sources it depends on"
                - "Replace clock-based schedules with triggers on load completion"
                - "Decide which models still run when one upstream source is late"
                - "Measure latency from load finish to model ready for two weeks"
            - name: Cutting latency on the most-watched pipeline
              description: |-
                ## Purpose
                Sales asking for orders every fifteen minutes instead of daily is a fair request, but the answer is rarely to stream everything. Profiling one high-value pipeline from source change to dashboard shows where the minutes go, and usually a faster sync, a smaller extract or an incremental model gets most of the way.

                ## Milestones
                1. End-to-end latency measured stage by stage: extract, load, transform, dashboard refresh.
                2. The slowest stage identified with evidence.
                3. One change made that cuts total latency by at least half, or a recorded reason it is not possible.
                4. The new freshness target agreed with the requesting team.

                ## Notes
                If the need is truly seconds rather than minutes, that is a streaming project with different tooling, not a faster batch.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "Latency for the chosen pipeline is measured per stage and cut by half, or a recorded reason explains why not, with a new target agreed."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pick the pipeline with the most freshness complaints"
                - "Time each stage from source change to dashboard refresh"
                - "Test a faster sync interval or smaller extract for the slowest stage"
                - "Agree the new freshness target with the team that asked"
            - name: Reliable ingestion of vendor file drops
              description: |-
                ## Purpose
                Partners and legacy systems still deliver CSV and Excel files by SFTP or email, often with changing headers, odd encodings and half-written files. Building one ingestion pattern with arrival checks, header validation and an archive of every original file makes these feeds as dependable as API sources.

                ## Milestones
                1. Every file-based feed listed with sender, location, schedule and format.
                2. A shared ingestion pattern that waits for complete files and checks headers before loading.
                3. Original files archived unchanged with their arrival time.
                4. Alerts raised when an expected file is late, empty or malformed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All file-based feeds load through one pattern with header checks, archiving of originals and late-file alerts."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "List every file feed with sender, drop location and expected arrival time"
                - "Agree a completion marker or naming rule with each sender"
                - "Build header and encoding checks that run before loading"
                - "Archive every original file with its arrival timestamp"
            - name: Consolidating duplicate feeds from one source
              description: |-
                ## Purpose
                It is common to find the same CRM synced three times: once by the managed connector, once by a marketing tool's export and once by an old script, each giving slightly different numbers. Choosing one authoritative feed per source and retiring the rest cuts cost and ends arguments about which table is right.

                ## Milestones
                1. Sources with more than one feed into the warehouse identified from the inventory.
                2. One authoritative feed chosen per source, with the reason recorded.
                3. Downstream models and dashboards repointed to the chosen feed.
                4. Duplicate feeds paused, then removed after one quiet month.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every source has exactly one authoritative feed into the warehouse, with duplicates removed and downstream references repointed."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Find sources that land in more than one raw schema"
                - "Compare row counts and fields across the duplicate feeds"
                - "Choose the authoritative feed and record why"
                - "Repoint downstream models and pause the duplicates"
            - name: Historical backfill of a newly added source
              description: |-
                ## Purpose
                Adding a source is easy; loading five years of its history without tripping rate limits, timing out or duplicating rows is the hard part. Planning the backfill as a dated event, in chunks, outside business hours and with reconciliation, gets the history in once and correctly.

                ## Milestones
                1. Backfill window, chunk size and run schedule agreed, including the source owner's approval of the load.
                2. History loaded in date-ranged chunks with progress recorded per chunk.
                3. Row counts per period reconciled against the source.
                4. Incremental syncs switched on from the backfill end point with no gap or overlap.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The full history is loaded and reconciled per period against the source, and incremental syncs continue from the backfill end with no gap."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Estimate total rows and pick a chunk size the source tolerates"
                - "Agree backfill timing with the source system owner"
                - "Run the backfill in date chunks and log each chunk's row count"
                - "Reconcile counts per month against the source and rerun any gaps"
            - name: Source system replacement cutover
              description: |-
                ## Purpose
                When the business swaps its CRM, billing or ERP, every pipeline, raw table and report built on the old one is affected, usually against a go-live date set by someone else. Treating the cutover as a dated event, with parallel loads, an old to new field mapping and a freeze on the old feed, keeps history continuous.

                ## Milestones
                1. A risk register for the cutover covering history, identifiers and affected reports.
                2. The new system's connector built and loading into its own raw schema before go-live.
                3. Field and identifier mapping from old to new agreed with the business owner.
                4. The old feed frozen as a historical archive after go-live, not deleted.

                ## Notes
                Start from the **Risk register** template. Ask early whether old record identifiers survive the migration; if not, request a mapping export before the old system is switched off.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The new system loads from go-live day, the old feed is frozen as an archive, and an old to new identifier mapping is stored in the warehouse."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Get the go-live date and migration plan from the project team"
                - "Start a risk register of pipelines and reports that depend on the old system"
                - "Build and test the new system's connector before go-live"
                - "Request an export mapping old record identifiers to new ones"
                - "Freeze the old feed after go-live and label it as an archive"
            - name: Source API version switch-off deadline
              description: |-
                ## Purpose
                Vendors announcing that an API version will be switched off on a fixed date give you a hard deadline, and missing it means the sync simply stops. Planning the move as an event, from impact assessment to testing on the new version, prevents a scramble in the final week.

                ## Milestones
                1. Every pipeline and field affected by the deprecation listed.
                2. Differences between old and new API versions documented, including renamed or removed fields.
                3. Extraction running on the new version in development, with output compared to the old.
                4. Production switched over at least two weeks before the vendor's deadline.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "All affected pipelines run on the new API version in production at least two weeks before the vendor's switch-off date."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Read the vendor's migration guide and note the switch-off date"
                - "List every pipeline and field that uses the deprecated version"
                - "Build and test extraction on the new version in development"
                - "Switch production over with two weeks to spare and watch it for a week"
            - name: Pipeline outage game day
              description: |-
                ## Purpose
                Runbooks and alerts are only proven when something breaks, and better that it breaks on a planned afternoon. A game day where one person quietly revokes a credential, pauses a connector or drops a raw table in development shows how long detection and recovery really take.

                ## Milestones
                1. Three failure scenarios chosen and prepared in development.
                2. Time to detect and time to recover recorded for each scenario.
                3. Gaps found in alerts, runbooks or access written up.
                4. A fix for each gap assigned to an owner.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A game day has run three scenarios with detection and recovery times recorded and every gap assigned to an owner."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Choose three realistic failure scenarios and set them up in development"
                - "Book a two-hour slot with the on-call engineers"
                - "Record detection and recovery time for each scenario"
                - "Write up the gaps and assign each fix to an owner"
                - "Run a pipeline game day with fresh scenarios @recurring(yearly)"
            - name: Peak volume readiness for seasonal spikes
              description: |-
                ## Purpose
                Month end, year end, a big sale or a product launch can multiply source volumes several times over, and that is exactly when the business wants numbers fastest. Testing pipelines against expected peak volume a few weeks ahead shows which jobs will time out or hit rate limits while there is still time to act.

                ## Milestones
                1. The next peak event dated, with expected volume multiples per source.
                2. Runtime and rate limit headroom estimated for each tier one pipeline at peak.
                3. Timeouts, concurrency or sync frequency adjusted where headroom is thin.
                4. A pipeline change freeze agreed for the peak window.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Before each peak event, every tier one pipeline has a recorded headroom estimate, adjustments are in place and a change freeze is agreed."
                cadence: cyclic
              tasks:
                - "Ask the business for the date and expected volume of the next peak"
                - "Estimate peak runtime per tier one pipeline from current rows per minute"
                - "Raise timeouts or concurrency where headroom is under fifty percent"
                - "Agree a pipeline change freeze for the peak window @recurring(yearly)"
            - name: First ninety days owning inherited pipelines
              description: |-
                ## Purpose
                Joining as the only data engineer, or taking over from one who left, usually means dozens of undocumented pipelines and a queue of complaints. A ninety-day plan that listens first, stabilises the worst offenders second and only then rebuilds keeps you from rewriting something that quietly worked.

                ## Milestones
                1. By day thirty, the inventory and incident history understood, with the five worst pipelines named.
                2. By day sixty, alerts and runbooks in place for those five.
                3. By day ninety, a written plan for what to keep, fix and replace, agreed with your manager.
                4. Stakeholder complaints about lateness logged and trending down.

                ## Notes
                Start from the **Onboarding 30/60/90** template. Resist rewriting in month one; you do not yet know which ugly code is load-bearing.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A keep, fix and replace plan for every inherited pipeline is agreed with your manager by day ninety, with alerts on the five worst."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Book thirty-minute conversations with the five heaviest data consumers"
                - "Read the last three months of failures to find the five worst pipelines"
                - "Add alerts and a runbook for each of those five pipelines"
                - "Ask the agent to draft a keep, fix and replace summary from your notes"
            - name: Handover pack when a pipeline owner leaves
              description: |-
                ## Purpose
                Notice periods are the last chance to capture what a departing engineer knows, and many pipelines are understood by exactly one person. A structured handover, with recorded walkthroughs, credential transfers and an incident fixed by the new owner while the leaver is still around, keeps everything running after their last day.

                ## Milestones
                1. Every pipeline owned by the leaver listed with a named new owner.
                2. Recorded walkthroughs of each pipeline's code, schedule and failure modes.
                3. Credentials and service accounts moved out of the leaver's name.
                4. At least one incident or rerun handled by the new owner while the leaver is still available.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every pipeline the leaver owned has a new owner, a recorded walkthrough and credentials moved out of their name before their last day."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List every pipeline, connector and credential tied to the leaver"
                - "Assign a new owner for each and book walkthrough sessions"
                - "Record each walkthrough and file it next to the runbook"
                - "Move credentials and service accounts out of the leaver's name"
            - name: ELT for a team without a data engineer
              description: |-
                ## Purpose
                Many analyst teams run their own pipelines with a managed connector tool, a warehouse and no engineering support. Keeping that set-up sustainable means using only managed connectors, sticking to the vendor's defaults and agreeing what you escalate to IT rather than trying to code around it.

                ## Milestones
                1. Sources limited to those with a managed connector, with any exceptions agreed with IT.
                2. Connector alerts going to a shared inbox the analysts check.
                3. A simple guide for re-authenticating a connector and triggering a resync.
                4. An escalation route to IT or the vendor for anything beyond the guide.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every source runs on a managed connector with alerts to a shared inbox, a written resync guide and an agreed escalation route."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Check that every source has a managed connector available"
                - "Set connector alerts to go to a shared team inbox"
                - "Write a one-page guide to re-authenticating and resyncing a connector"
                - "Agree with IT which problems analysts escalate and to whom"
            - name: Onboarding an engineer to the pipeline codebase
              description: |-
                ## Purpose
                New engineers often wait weeks before they can safely deploy a pipeline change because the set-up lives in someone's memory. A written onboarding plan with access requests, a local set-up guide and a small first change gets them shipping in their first fortnight.

                ## Milestones
                1. An access checklist covering repository, orchestrator, warehouse, connector tool and secrets manager.
                2. A local set-up guide corrected by the most recent joiner.
                3. A starter task: a small, real pipeline change reviewed and deployed.
                4. The new engineer added to the on-call rota after one shadow week.

                ## Notes
                Start from the **Onboarding plan** template.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A new engineer has deployed a reviewed pipeline change within ten working days of starting, using the written plan."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every system a pipeline engineer needs access to"
                - "Ask the most recent joiner to correct the local set-up guide"
                - "Keep a short list of starter tasks in the backlog"
                - "Schedule a shadow week on call before the first solo rota"
            - name: First ELT stack for an early-stage startup
              description: |-
                ## Purpose
                Early teams usually need a handful of sources, the product database, payments, CRM and ad platforms, in one warehouse before the next board meeting, not a platform. Starting with managed connectors, one scheduled transformation run and failure emails gives a working stack in days that can grow later.

                ## Milestones
                1. Four to six priority sources loading daily into the warehouse.
                2. One scheduled transformation run producing the tables the first dashboard needs.
                3. Failure emails reaching the founder or first data hire.
                4. A one-page diagram of the stack and who has access.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The priority sources load daily, one transformation run feeds the first dashboard, and failures email a named person."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Pick the four to six sources the first dashboard needs"
                - "Set up managed connectors for each with daily syncs"
                - "Schedule one transformation run after the syncs complete"
                - "Send failure emails to a named person and draw a one-page stack diagram"
            - name: Intake process for new source requests
              description: |-
                ## Purpose
                Requests to add a source arrive as one-line messages, and building them on demand fills the on-call rota with half-understood feeds. A short intake asking for the business question, tables needed, freshness, data owner and any personal data lets you say yes properly or explain why not.

                ## Milestones
                1. A request form with fields for question, tables, freshness, source owner, personal data and requester.
                2. An evaluation checklist for access, volume, connector availability and maintenance cost.
                3. Every new source added only after the form and checklist are complete.
                4. A turnaround expectation published for requesters.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "Every source added in the last quarter came through the intake form with a completed evaluation checklist."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft the request form fields with two regular requesters"
                - "Write the evaluation checklist for access, volume and connector options"
                - "Publish the form and the expected turnaround time"
                - "Ask the agent to draft a reply template for declined or deferred requests"
            - name: Production CDC with initial snapshot and lag monitoring
              description: |-
                ## Purpose
                Running change data capture in production means taking an initial snapshot of large tables without long locks, then streaming changes indefinitely while watching replication lag and log growth. Engineers who have done the development trial take it live here, with the database owner's agreement and an emergency stop procedure.

                ## Milestones
                1. A snapshot method agreed that avoids long locks on the largest tables.
                2. Change capture running in production for the agreed tables.
                3. Replication lag and log retention size monitored with alerts.
                4. An emergency procedure to pause or drop capture if the source disk fills.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "CDC runs in production on the agreed tables with lag and log retention alerts and a tested emergency stop procedure."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Agree the snapshot method and timing with the database owner"
                - "Enable capture for the agreed tables in production"
                - "Alert on replication lag and log retention size"
                - "Test the emergency pause procedure on a staging database"
                - "Check replication lag trends and slot size @recurring(weekly:wed)"
            - name: Multi-tenant extraction across many customer databases
              description: |-
                ## Purpose
                Software companies with one database or schema per customer end up extracting the same tables from hundreds of places, where a single slow tenant can stall the whole run. Designing for that with tasks generated per tenant, per-tenant state, a tenant identifier on every row and partial failure handling keeps one bad tenant from delaying everyone.

                ## Milestones
                1. The tenant list generated automatically from a registry rather than hard-coded.
                2. Extraction state kept per tenant so one failure does not restart the rest.
                3. A tenant identifier column added to every raw row.
                4. Run time and failure counts reported per tenant.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Extraction runs per tenant from an automatic registry, with tenant identifiers on every raw row and per-tenant failure reporting."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Find the authoritative registry of tenant databases or schemas"
                - "Generate extraction tasks per tenant from the registry at run time"
                - "Store extraction state separately for each tenant"
                - "Report run time and failures per tenant after each run"
            - name: Pipeline run metadata in the warehouse
              description: |-
                ## Purpose
                Orchestrator logs are fine for debugging one run but useless for trends across hundreds. Writing every run's start, end, rows extracted, rows loaded and status to a warehouse table lets you chart reliability, spot slowly growing jobs and feed the reliability report from data instead of screenshots.

                ## Milestones
                1. A run metadata table designed with pipeline, run id, times, row counts and status.
                2. Every tier one pipeline writing one row per run.
                3. A trend view of run duration and rows per pipeline.
                4. An alert on jobs whose duration grows more than an agreed percentage month on month.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every tier one pipeline writes run metadata to the warehouse, and a duration trend alert is live."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Design the run metadata table with the team"
                - "Add a metadata write at the end of each tier one pipeline"
                - "Build a view of run duration and row counts over time"
                - "Review duration trends for jobs growing month on month @recurring(monthly:26)"
            - name: Replaying pipelines from archived raw extracts
              description: |-
                ## Purpose
                If a bad deploy or a mistaken delete corrupts raw tables, the source may no longer hold the history needed to reload them. Archiving every raw extract to object storage before loading, and rehearsing a full replay, means the warehouse can be rebuilt from your own copy rather than a vendor's limited retention.

                ## Milestones
                1. Every extract written to object storage in its original form before loading.
                2. Retention and access rules for the archive agreed with your privacy and security leads.
                3. A replay procedure that rebuilds a raw table from archived files.
                4. A yearly replay test completed, with timing recorded.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Raw extracts are archived before loading, and a timed replay of at least one tier one table has succeeded within the last year."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Check how far back each tier one source lets you re-extract history"
                - "Write every extract to object storage before the load step"
                - "Agree archive retention and access with privacy and security leads"
                - "Replay one tier one table from the archive and time it @recurring(yearly)"
---

# ELT Data Pipelines

This area is for the engineers and small data teams who keep source data flowing into the warehouse: SaaS apps, production databases and partner files, extracted, loaded and transformed on a schedule. It starts with foundations (an inventory, freshness targets, raw layer conventions, credentials and alerting), moves through the operating routines that keep pipelines healthy and the extraction patterns worth learning properly, then covers improvements, dated events such as backfills and cutovers, team situations, and specialist work like production change data capture and multi-tenant extraction.

The rhythms are a morning health check, a weekly on-call handover and schema drift review, monthly reliability, incident, usage, changelog and source owner check-ins, and quarterly credential rotation, runbook and unused sync reviews. The Purchase decision, Operational checklist, Vendor, Risk register, Onboarding 30/60/90 and Onboarding plan templates pair with individual projects. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
