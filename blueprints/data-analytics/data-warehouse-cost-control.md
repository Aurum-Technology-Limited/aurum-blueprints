---
id: data-analytics.data-warehouse-cost-control
name: Data Warehouse Cost Control
description: "A queryable spend baseline, owners and tags on every workload, weekly anomaly checks and monthly showback, and the query, storage and compute fixes that cut the bill without slowing anyone down."
category: business
version: 1.0.0
tags: [data-analytics, data-warehouse-cost-control, engineer, manager, finops, query-performance, cloud-costs]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - purchase-decision
    - operational-checklist
    - remediation-plan
    - vendor
    - onboarding-30-60-90
  pillars:
    - name: Data & Analytics
      emoji: "📊"
      description: "Turning data into decisions: metrics and dashboards, data pipelines and warehouses, experimentation, forecasting and modelling, machine learning, data quality and governance."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Data Warehouse Cost Control
          description: "Tracking and reducing query, storage and compute costs in the data platform without slowing down the people who rely on it."
          projects:
            - name: Twelve-month data platform spend baseline
              description: |-
                ## Purpose
                Before anyone can say whether cost control is working, someone has to know what the platform costs today and how that figure moved over the last year. Pulling twelve months of invoices and usage into one sheet, split into compute, storage, data transfer and third-party tools, turns a vague worry about the bill into a number with a trend that engineers and finance can both quote.

                ## Milestones
                1. Twelve months of warehouse invoices and usage statements gathered in one place.
                2. Monthly spend split into compute, storage, data transfer and tool licences.
                3. Month-on-month growth calculated and the three biggest jumps explained in a sentence each.
                4. The baseline figure agreed with finance as the starting point for every later saving.

                ## Notes
                Include the tools around the warehouse, such as ingestion connectors, BI licences and observability add-ons. They can be a third of the real bill and vanish from a warehouse-only view.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A twelve-month spend baseline split by cost type, with the three largest jumps explained, is signed off by finance."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Download the last twelve monthly invoices from the warehouse billing console"
                - "List every connector, BI and monitoring tool billed alongside the warehouse"
                - "Split each month into compute, storage, transfer and licence spend"
                - "Annotate the three largest month-on-month jumps with their cause"
                - "Walk finance through the baseline and record their sign-off"
            - name: Billing usage export into a queryable cost table
              description: |-
                ## Purpose
                Console charts are fine for a glance but useless for asking which team, job or user drove last Tuesday's spike. Most cloud warehouses expose usage views or a billing export that can land in the warehouse itself, and a modelled cost table refreshed daily becomes the source for every report, alert and showback statement in this area.

                ## Milestones
                1. Usage and billing views identified for compute, storage and serverless features.
                2. A daily job loading usage into a dedicated cost schema, keeping at least thirteen months.
                3. One modelled table at query and day grain with cost in currency, not just credits or slots.
                4. A reconciliation showing the table matches the invoice to within two percent for the last full month.

                ## Notes
                Convert credits, slots or processing units to money at your contracted rate, not the list price, or every saving you report will be overstated.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A daily cost table reconciles to the last invoice within two percent and is readable by every cost owner."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Find the usage and metering views your warehouse provides"
                - "Create a cost schema with read access for platform and finance roles"
                - "Schedule a daily load of query and storage usage into that schema"
                - "Reconcile the modelled table against last month's invoice"
                - "Check the cost table for missing days and late loads @recurring(monthly:3)"
            - name: Cost attribution tags for workloads and users
              description: |-
                ## Purpose
                Spend that cannot be traced to a team or purpose cannot be owned, and in most warehouses a large share arrives unlabelled through shared service accounts. Setting a tagging standard for query tags, compute labels and service account names lets the cost table answer who spent what, and makes the untagged share a number you can drive down.

                ## Milestones
                1. A short tagging standard naming the required keys, such as team, product, environment and job.
                2. Every scheduled pipeline and BI connection sending a query tag or using a labelled compute resource.
                3. Shared service accounts split so each tool or team has its own.
                4. Untagged spend measured and below fifteen percent of monthly compute.

                ## Notes
                Shared service accounts are the usual culprit. One account used by the orchestrator, two BI tools and a notebook server makes attribution impossible however good the tags are.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Untagged spend is below fifteen percent of monthly compute, measured from the cost table."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Draft the four or five tag keys every workload must carry"
                - "List service accounts shared by more than one tool or team"
                - "Add query tags to the orchestrator and each BI connection"
                - "Report the untagged share of compute spend to cost owners @recurring(monthly:6)"
            - name: Top twenty most expensive queries list
              description: |-
                ## Purpose
                In nearly every warehouse a small number of queries and jobs account for most of the compute bill, often a few scheduled models or a dashboard refreshing every few minutes. Ranking the last thirty days by cost, grouped by query pattern rather than exact text, shows where the first hours of effort will pay back fastest.

                ## Milestones
                1. Thirty days of query history grouped by normalised query text or job name.
                2. The twenty costliest patterns listed with cost, run count, average runtime and owner.
                3. Each pattern labelled as scheduled job, dashboard, ad hoc or unknown.
                4. The share of total compute taken by the top twenty recorded as a headline figure.

                ## Notes
                Group by query hash or job name, not raw text. A dashboard that sends the same query with a different date filter looks like hundreds of cheap queries until it is grouped.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A ranked list of the twenty costliest query patterns, each with an owner and type, is shared with the platform team."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pull thirty days of query history with bytes scanned and execution time"
                - "Group queries by job name or normalised query hash"
                - "Rank the patterns by cost and keep the top twenty"
                - "Find the owner of each pattern through its tag or service account"
            - name: Named cost owner for every compute resource
              description: |-
                ## Purpose
                When a warehouse or cluster belongs to everyone, its bill belongs to nobody and its auto-suspend setting stays at whatever the first engineer chose. Assigning one named owner to each compute resource, schema group and major scheduled job gives every cost alert and every saving opportunity somewhere to land.

                ## Milestones
                1. A register of every warehouse, cluster or reservation with its purpose and named owner.
                2. Owners for the largest schemas and the top twenty jobs added to the same register.
                3. Each owner briefed on what they own and how they will hear about its cost.
                4. Orphaned resources with no willing owner flagged for suspension or removal.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every compute resource and the top twenty jobs have a named owner recorded in a shared register."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every warehouse, cluster and reservation in the account"
                - "Ask each team lead to name an owner for the resources they use"
                - "Flag resources nobody claims for suspension"
                - "Confirm owners are still correct after team changes @recurring(quarterly)"
            - name: Unit cost metric tied to business output
              description: |-
                ## Purpose
                A falling total bill can hide a business that shrank, and a rising one can hide excellent efficiency. Choosing one or two unit costs, such as cost per thousand dashboard views, cost per gigabyte loaded or cost per active customer, lets managers argue about efficiency rather than raw spend, and keeps growth from being mistaken for waste.

                ## Milestones
                1. Two candidate unit metrics drafted with their numerator, denominator and source.
                2. One metric chosen with engineering and finance and its definition written down.
                3. Twelve months of the metric back-calculated from the cost table.
                4. The metric shown alongside total spend in every monthly cost report.

                ## Notes
                Start from the **Metrics log** template. Pick a denominator the business already counts and trusts; inventing a new one starts a second argument about the denominator.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "One unit cost metric is defined in writing, back-calculated for twelve months and included in the monthly report."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List three business volumes the company already counts reliably"
                - "Draft a unit cost definition for the two most stable volumes"
                - "Agree the chosen metric with finance and the platform lead"
                - "Back-calculate the metric for the last twelve months"
            - name: Budgets and spend alerts on the warehouse account
              description: |-
                ## Purpose
                Runaway costs are usually discovered on the invoice, weeks after a loop or a bad join started burning money. Setting account-level budgets, per-resource monitors and hard limits where the platform supports them means a spike reaches someone within hours, and a forgotten test cluster cannot quietly spend a month's budget over a weekend.

                ## Milestones
                1. A monthly budget set at account level with alerts at fifty, eighty and one hundred percent.
                2. Resource monitors or quotas on each production and development compute resource.
                3. Alerts routed to the cost owner's channel, not a shared inbox nobody reads.
                4. A hard stop or suspend action configured for development and sandbox resources.

                ## Notes
                Do not put hard suspends on production pipelines without agreeing it with their owners. A suspended finance load on close day costs far more than the credits it saved.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Budget alerts at three thresholds and per-resource monitors are live, and a test alert has reached the owner's channel."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Set an account budget with alerts at fifty, eighty and one hundred percent"
                - "Add a monitor or quota to each development and sandbox resource"
                - "Route alerts to each cost owner's team channel"
                - "Trigger a test alert and confirm it arrives"
                - "Review budget thresholds against the latest forecast @recurring(quarterly)"
            - name: Storage footprint inventory by schema and table
              description: |-
                ## Purpose
                Storage looks cheap per terabyte until it is multiplied by years of raw snapshots, forgotten backups and time-travel retention on tables rebuilt every night. Listing every schema and large table by active, retained and backup bytes shows which data is earning its keep and which is a quiet monthly charge.

                ## Milestones
                1. Storage split by schema with active, time-travel and backup bytes shown separately.
                2. The fifty largest tables listed with last read date and last write date.
                3. Tables not read in ninety days flagged as clean-up candidates.
                4. Storage cost per schema added to the cost table.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An inventory of the fifty largest tables with last-read dates and retained bytes is published to the platform team."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Query storage metrics by schema including retained and backup bytes"
                - "List the fifty largest tables with their last read and last write dates"
                - "Flag tables with no reads in ninety days"
                - "Add storage cost by schema to the cost table"
            - name: Idle compute and auto-suspend audit
              description: |-
                ## Purpose
                Compute left running between queries is often the biggest avoidable cost, especially when auto-suspend is set to an hour or switched off for a warehouse that serves a dashboard twice a day. Checking every resource's suspend, resume and minimum size settings against how it is actually used is usually an afternoon's work with a visible drop on next month's bill.

                ## Milestones
                1. Auto-suspend, auto-resume and minimum size settings recorded for every compute resource.
                2. Idle billed time per resource measured from the last thirty days of usage.
                3. Suspend timeouts shortened where idle time exceeds a third of billed time.
                4. The saving measured against the previous thirty days and reported to owners.

                ## Notes
                Very short timeouts can cost more on platforms that bill a minimum per resume or drop their local cache. One to five minutes is a sensible default for interactive resources; test before going lower.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every compute resource has a suspend timeout matched to its usage, and the thirty-day saving is reported to its owner."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Export suspend and minimum size settings for every compute resource"
                - "Measure idle billed time per resource over the last thirty days"
                - "Shorten timeouts on resources idle more than a third of billed time"
                - "Compare the following thirty days of cost with the previous thirty"
            - name: Weekly cost anomaly review
              description: |-
                ## Purpose
                Spend moves for good reasons and bad ones, and the bad ones get more expensive every day they run. A fifteen-minute review each Monday of the last seven days against the previous four weeks, by resource and by team, catches the new hourly job, the dashboard stuck in a refresh loop and the backfill nobody switched off.

                ## Milestones
                1. A saved chart of daily spend by resource and team against a four-week average.
                2. A written rule for what counts as an anomaly, such as thirty percent above average for two days.
                3. Each anomaly logged with cause, owner and action.
                4. Twelve consecutive weekly reviews completed with the log kept.

                ## Notes
                Mark expected spikes, such as month-end loads, separately from unexpected ones in the log, or the review turns into a weekly debate about the same known peaks.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive weekly reviews are logged, each anomaly with a cause, an owner and an action."
                cadence: rolling
              tasks:
                - "Build a daily spend chart by resource against a four-week average"
                - "Write down the threshold that makes a movement an anomaly"
                - "Review last week's spend and log any anomaly with its owner @recurring(weekly:mon)"
                - "Close out the previous week's anomaly actions"
            - name: Monthly data platform cost report
              description: |-
                ## Purpose
                Engineering leaders and finance need the same picture each month: what was spent, against what budget, on what, and why it moved. A one-page report with total spend, the unit cost, the top movers and the savings delivered replaces scattered screenshots and keeps the cost conversation calm and factual.

                ## Milestones
                1. A one-page layout with total, budget, unit cost, top five movers and savings to date.
                2. The report generated from the cost table rather than hand-copied figures.
                3. The report sent to the engineering lead and finance contact within five working days of month end.
                4. Three consecutive months delivered on time.

                ## Notes
                Start from the **Metrics log** template. Report savings as a run rate against the baseline, and say plainly when growth has eaten a saving rather than hiding it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Three consecutive monthly cost reports, built from the cost table, are delivered within five working days of month end."
                cadence: cyclic
              tasks:
                - "Sketch the one-page report layout with the finance contact"
                - "Build the report queries on top of the cost table"
                - "Send the monthly cost report to engineering and finance @recurring(monthly:4)"
                - "Note one reader question to answer in the next edition"
            - name: Showback statements for consuming teams
              description: |-
                ## Purpose
                Teams change behaviour when they can see their own share of the bill, even if nobody charges them for it. A monthly statement per team showing their compute, storage and three costliest jobs, compared with last month, starts the conversation without the politics of real chargeback.

                ## Milestones
                1. Team-level spend calculated from tags and service accounts, with shared platform costs shown separately.
                2. A short statement per team with spend, trend and their three costliest workloads.
                3. Statements sent to each team lead every month.
                4. At least two teams acting on something their statement showed them.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every consuming team receives a monthly statement of its spend and top workloads, and two teams have acted on one."
                cadence: cyclic
              tasks:
                - "Decide how shared platform costs will appear on statements"
                - "Draft a statement for the biggest consuming team and test it with its lead"
                - "Send each team its monthly spend statement @recurring(monthly:9)"
                - "Record the changes teams make after reading their statement"
            - name: Expensive query triage queue
              description: |-
                ## Purpose
                A list of costly queries does nothing until someone looks at each one and decides to fix, accept or retire it. A small standing queue, fed by the cost table and worked through each week, keeps optimisation steady rather than a heroic clean-up once a year.

                ## Milestones
                1. A queue in your ticket tool fed automatically with queries above a cost threshold.
                2. Each item triaged within a week as fix, accept, retire or reschedule.
                3. Fixed items checked for cost before and after the change.
                4. Savings from the queue totalled each quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every queued expensive query has a triage decision within a week, and quarterly savings from fixes are totalled."
                cadence: rolling
              tasks:
                - "Set the per-run cost threshold that sends a query into the queue"
                - "Automate a weekly feed of queries above that threshold into the ticket tool"
                - "Triage new items in the expensive query queue @recurring(weekly:thu)"
                - "Total the before and after cost of fixed items @recurring(quarterly)"
            - name: Scheduled job frequency and cost register
              description: |-
                ## Purpose
                Pipelines tend to run hourly because hourly was the default, not because anyone reads the result every hour. Keeping a register of every scheduled job with its frequency, cost per run and the freshness its consumers actually need makes it easy to spot a model refreshed twenty-four times a day for a report read once each morning.

                ## Milestones
                1. Every scheduled job listed with frequency, average cost per run and monthly cost.
                2. Each job's main consumers and their real freshness need recorded.
                3. Jobs running more often than needed rescheduled with consumer agreement.
                4. The register refreshed each month with new jobs added.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A register lists every scheduled job with its cost per run and agreed freshness, refreshed each month."
                cadence: rolling
              tasks:
                - "Export every scheduled job and its frequency from the orchestrator"
                - "Join job names to the cost table to get cost per run"
                - "Ask consumers of the ten costliest jobs how fresh the data must be"
                - "Add new jobs and refresh run costs in the register @recurring(monthly:17)"
            - name: Quarterly unused table and schema clean-up
              description: |-
                ## Purpose
                Abandoned tables, old snapshots and one-off analysis schemas pile up silently, and each carries storage plus whatever job still rebuilds it. A quarterly sweep with a notice period and a recoverable archive step removes them without the fear of breaking something nobody remembered.

                ## Milestones
                1. A written rule for candidates, such as no reads in ninety days and no downstream dependencies.
                2. Owners notified with a two-week objection window before anything changes.
                3. Candidates renamed or moved to an archive schema before final removal.
                4. Storage and job cost removed recorded for each sweep.

                ## Notes
                Rename or revoke access first and wait a cycle before dropping. A broken quarterly finance report is the quickest way to lose permission for future clean-ups. Check legal holds and retention duties before removing anything.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter a sweep archives or removes unused tables after a notice period, and the cost removed is recorded."
                cadence: cyclic
              tasks:
                - "Write the rule that makes a table a clean-up candidate"
                - "Send the candidate list to owners with a two-week objection window"
                - "Move unclaimed tables to an archive schema before dropping them"
                - "Run the unused table sweep and record the cost removed @recurring(quarterly)"
            - name: BI refresh and dashboard query cost review
              description: |-
                ## Purpose
                BI tools can be the largest compute consumer in the account, firing the same heavy query each time a filter changes or refreshing extracts every fifteen minutes for a weekly meeting. A monthly look at BI-driven spend by dashboard shows which few deserve an extract, a pre-aggregated table or a slower refresh.

                ## Milestones
                1. BI spend separated in the cost table using BI service accounts or query tags.
                2. The ten costliest dashboards listed with monthly views and cost per view.
                3. A fix chosen for each of the top five: extract, aggregate table, caching or slower refresh.
                4. Cost per view for those five measured again a month later.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "BI spend is tracked by dashboard each month, and the five costliest have a fix with a measured result."
                cadence: rolling
              tasks:
                - "Separate BI service account queries in the cost table"
                - "Rank dashboards by monthly compute cost and views"
                - "Agree a fix for each of the five costliest dashboards with their owners"
                - "Review BI-driven warehouse spend by dashboard @recurring(monthly:22)"
            - name: Spend forecast against actuals tracking
              description: |-
                ## Purpose
                Budgets set once a year go stale by spring when new sources, teams and use cases arrive. A simple rolling forecast built from unit cost and expected business volume, compared with actual spend each month, warns managers of an overrun months before it shows up in the year-end review.

                ## Milestones
                1. A twelve-month forecast built from unit cost times expected volume plus known projects.
                2. Actual spend compared with forecast each month and the gap explained.
                3. The forecast updated whenever a new project or source is approved.
                4. Forecast error within ten percent for three consecutive months.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A rolling twelve-month forecast is compared with actual spend monthly and stays within ten percent for three months."
                cadence: rolling
              tasks:
                - "Build a twelve-month forecast from unit cost and expected volume"
                - "List approved projects that will add sources or compute"
                - "Compare actual spend with forecast and explain the gap @recurring(monthly:12)"
                - "Update the forecast when a new data project is approved"
            - name: Cost checks in pipeline code review
              description: |-
                ## Purpose
                Most expensive queries are cheapest to fix before they merge. Adding a few cost questions to the review checklist for transformation and pipeline changes, such as whether a full rebuild could be incremental and whether filters hit the partition column, catches the expensive pattern while the author still remembers the code.

                ## Milestones
                1. A short cost section added to the pull request template for data repositories.
                2. Reviewers briefed with two before and after examples from your own codebase.
                3. New models above a size threshold required to state their expected scan size.
                4. A quarterly look at which merged changes became top cost items.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The pull request template for data repositories carries a cost checklist that reviewers apply to every new large model."
                cadence: rolling
              tasks:
                - "Draft four cost questions for the data repository pull request template"
                - "Pick two real before and after examples to brief reviewers"
                - "Add an expected scan size field for models above the size threshold"
                - "Check which recent merges became top cost items @recurring(quarterly)"
            - name: How your warehouse bills compute and storage
              description: |-
                ## Purpose
                Every platform meters differently: credits per second of running compute, bytes scanned per query, slot reservations, node hours or processing units per workload. Engineers and managers who know exactly what the meter counts on their own platform stop guessing which change will save money, and stop being surprised by minimum charges and background services.

                ## Milestones
                1. The pricing pages and billing documentation for your platform summarised on one page.
                2. Each line on last month's invoice explained by what it meters.
                3. Three common misconceptions about your platform's billing written down with the correct explanation.
                4. The summary reviewed by a second engineer and shared with the team.

                ## Notes
                Read your contract alongside the public pricing page. Discounts, minimum commitments and regional rates often change which optimisation matters most.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page billing summary explains every line of last month's invoice and has been reviewed by a second engineer."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read your platform's pricing page and billing documentation"
                - "Explain each line of last month's invoice in a sentence"
                - "List minimum charges, rounding rules and background services that bill"
                - "Share the one-page billing summary with the platform team"
            - name: Reading query profiles and execution plans
              description: |-
                ## Purpose
                Query profiles show exactly where the money went: bytes scanned, partitions pruned, spills to remote storage, exploding joins and time spent queued. Learning to read them on your own platform turns optimisation from rewriting a query until it feels faster into fixing the one step that is expensive.

                ## Milestones
                1. The profile or plan view of your platform explored on five real queries.
                2. Each of the five annotated with its costliest step and the reason.
                3. A cheat sheet of six warning signs, such as poor pruning or large spills.
                4. Two queries from the top twenty fixed using what their profiles showed.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five real query profiles are annotated, and two top-twenty queries have been fixed based on what their profiles showed."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Open the profile of the costliest query on the top twenty list"
                - "Annotate five profiles with their costliest step"
                - "Write a cheat sheet of warning signs in your platform's profiles"
                - "Fix two expensive queries using what the profiles showed"
            - name: Partitioning, clustering and pruning for cost
              description: |-
                ## Purpose
                On scan-billed and compute-billed platforms alike, the cheapest data is the data a query never reads. Understanding how partitioning, clustering or sort keys let the engine skip files, and how wrapping a date column in a function quietly defeats them, is the most useful single skill for an engineer cutting warehouse cost.

                ## Milestones
                1. The pruning mechanisms your platform offers summarised with their costs and limits.
                2. Pruning ratios measured for the most common queries on the ten largest tables.
                3. Partition or cluster keys chosen for two large tables from their real filter columns.
                4. Before and after scan sizes recorded for queries on those two tables.

                ## Notes
                Automatic clustering and re-sorting services cost money too. Check that the maintenance charge is smaller than the scan saving before switching it on everywhere.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two large tables have keys chosen from real filter columns, with before and after scan sizes recorded."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Summarise your platform's partitioning and clustering options"
                - "Measure partitions scanned against total for common queries on large tables"
                - "Choose keys for two large tables from their most used filter columns"
                - "Record scan sizes before and after the change"
            - name: Incremental loads versus full rebuild economics
              description: |-
                ## Purpose
                Rebuilding a billion-row table every hour to add a few thousand new rows is one of the commonest sources of waste in modern warehouses. Knowing when incremental processing pays, when a merge costs more than a rebuild, and how late-arriving data changes the answer, lets engineers pick the cheaper pattern with evidence.

                ## Milestones
                1. The incremental strategies in your tooling, such as append, merge and partition replace, compared.
                2. Cost per run measured for one large model as a full rebuild and as an incremental run.
                3. A rule of thumb written for when your team goes incremental.
                4. A periodic full refresh schedule agreed for incremental models to catch drift.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One large model is costed both ways, and a written rule says when the team switches to incremental."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the five largest models that fully rebuild on every run"
                - "Cost one of them as a full rebuild and as an incremental run"
                - "Write the team's rule for when incremental processing pays"
                - "Agree how often incremental models get a full refresh"
            - name: Result caching and pre-aggregation basics
              description: |-
                ## Purpose
                The same query run a hundred times a day should not be paid for a hundred times. Learning how your platform's result cache, local disk cache and materialised views behave, and what invalidates each, helps engineers decide when a dashboard needs an aggregate table and when caching alone will do.

                ## Milestones
                1. Cache layers on your platform listed with how long results live and what invalidates them.
                2. Cache hit rate measured for the main BI service account.
                3. One frequently repeated query moved onto a cached result or aggregate table.
                4. The cost of maintaining materialised views compared with the scans they replace.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Cache hit rate for BI queries is measured, and one repeated query has moved to a cached or aggregate source with recorded savings."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read how your platform's result and disk caches are invalidated"
                - "Measure the cache hit rate for the main BI service account"
                - "Move one heavily repeated query onto an aggregate table"
                - "Compare materialised view maintenance cost with the scans it saves"
            - name: Storage tiers, time travel and retention costs
              description: |-
                ## Purpose
                Recovery features such as time travel, failsafe, snapshots and backups are worth having, but their retention windows multiply storage on tables that churn daily. Understanding how each is billed, and which tables deserve long retention, lets you shorten windows on rebuilt staging data without weakening recovery for the data that matters.

                ## Milestones
                1. Retention features and their billing explained in a short note for your platform.
                2. Retained bytes measured for the twenty highest churn tables.
                3. Retention windows proposed by table class: raw, staging, modelled and regulated.
                4. The proposal agreed with whoever owns recovery and compliance.

                ## Notes
                Shortening retention trades cost for recovery options. Agree it with whoever owns backup and regulatory obligations before changing production settings.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Retention windows by table class are agreed with the recovery owners and applied to the twenty highest churn tables."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Note how time travel, snapshots and backups are billed on your platform"
                - "Measure retained bytes on the twenty highest churn tables"
                - "Propose retention windows for raw, staging, modelled and regulated tables"
                - "Agree the windows with the recovery and compliance owners"
            - name: FinOps practices applied to data platforms
              description: |-
                ## Purpose
                Cloud financial operations has a settled vocabulary and set of practices, from showback and unit economics to commitment management, that many data teams reinvent badly. Studying the core FinOps principles and mapping each to the data platform gives engineers and managers a shared language with the cloud and finance teams who already use it.

                ## Milestones
                1. An introductory FinOps course or the public framework studied by one engineer and one manager.
                2. Each FinOps capability mapped to what the data team does, partly does or does not do.
                3. Three gaps chosen as priorities for the next two quarters.
                4. A session held with the cloud or finance team to compare approaches.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A map of FinOps capabilities against current data team practice exists, with three agreed priority gaps."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Choose an introductory FinOps course or framework guide to study"
                - "Map each capability to what the data team does today"
                - "Pick three gaps to work on over the next two quarters"
                - "Meet the cloud cost or finance team to compare practices"
            - name: Right-sizing warehouse compute
              description: |-
                ## Purpose
                Compute is usually sized once, when a migration or an incident made someone nervous, and never revisited. Trialling each resource one size smaller, or narrowing its scaling range, against real queue time and runtime shows where you pay for headroom nobody uses, and where a bigger size would finish faster for the same money.

                ## Milestones
                1. Current size, scaling range, utilisation and queue time recorded for each resource.
                2. A one-week trial one size down run on the three most over-provisioned resources.
                3. Runtime, queue time and cost of each trial compared with the agreed service levels.
                4. New sizes adopted where cost fell without breaching service levels.

                ## Notes
                On per-second billing a larger size that finishes in half the time can cost the same and please users more. Test both directions.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Three resources have completed a one-week sizing trial, and new sizes are adopted wherever cost fell within service levels."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Record size, utilisation and queue time for every compute resource"
                - "Pick the three resources with the most unused capacity"
                - "Run a one-week trial one size down on each of the three"
                - "Recheck compute sizes against the latest load @recurring(quarterly)"
            - name: Separating workloads onto dedicated compute
              description: |-
                ## Purpose
                When pipelines, dashboards and ad hoc exploration share one large compute resource, it has to be sized for the worst of them all day. Splitting workloads onto separate, sized resources lets the nightly batch run big and briefly, keeps BI small and warm, and shows each workload's true cost.

                ## Milestones
                1. Workloads grouped by pattern: loading, batch transformation, BI, ad hoc and data science.
                2. A target layout of compute resources with sizes, suspend times and owners.
                3. Service accounts and roles mapped to the right resource.
                4. Thirty days of cost by workload compared with the old shared setup.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each major workload runs on its own sized resource, and thirty days of cost by workload are compared with the shared setup."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Group the last month's queries by workload pattern"
                - "Design a layout with one sized resource per workload"
                - "Point each service account and role at its new resource"
                - "Compare thirty days of cost by workload with the old shared setup"
            - name: Rewriting the five costliest transformations
              description: |-
                ## Purpose
                The top of the cost list is usually a few transformations written quickly and scheduled often: a join that fans out inside a window function, select star over wide raw tables, or repeated scans of the same source. Rewriting the worst five, with tests proving the output is unchanged, can remove a large slice of compute in a single quarter.

                ## Milestones
                1. The five costliest transformations chosen from the top twenty list.
                2. Each one's output captured as a test baseline before any change.
                3. Rewrites merged with row counts and checksums matching the baseline.
                4. Cost per run before and after recorded for all five.

                ## Notes
                Ask the agent to draft a first rewrite from the query profile and the SQL, then test it as strictly as you would a colleague's change.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Five rewritten transformations match their previous outputs, and before and after cost per run is recorded for each."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Pick the five costliest transformations from the top twenty list"
                - "Capture row counts and checksums of each output as a baseline"
                - "Rewrite the first transformation and compare it against the baseline"
                - "Record cost per run before and after for all five"
            - name: Retention policy for raw and staging layers
              description: |-
                ## Purpose
                Raw landing zones often keep every daily full extract forever, so a ten gigabyte source becomes ten terabytes in three years. Deciding how long each layer keeps history, and what is archived to cheap object storage or rebuilt on demand, is a joint decision for engineers, data owners and whoever handles legal retention.

                ## Milestones
                1. History currently kept in raw and staging measured by source.
                2. A proposed retention period per layer and source type, with the reasoning.
                3. Legal and regulatory retention duties checked with the right owner.
                4. The policy approved and applied by an automated job.

                ## Notes
                Retention rules for personal or financial data can set a maximum as well as a minimum. Check with your legal or compliance contact rather than assuming longer is safer.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A retention policy for raw and staging layers is approved by data owners and compliance and enforced by an automated job."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Measure how much history each raw source keeps today"
                - "Propose a retention period for each layer and source type"
                - "Check legal retention duties with the compliance owner"
                - "Schedule the job that enforces the agreed retention"
            - name: On-demand versus committed capacity decision
              description: |-
                ## Purpose
                Committed capacity, reservations and prepaid credits can cut unit prices substantially, but an overcommitment is paid whether or not it is used. Modelling twelve months of usage under on-demand, a partial commitment and a full commitment gives managers a decision based on the usage curve and its uncertainty, not the vendor's preferred figure.

                ## Milestones
                1. Twelve months of daily usage modelled under each pricing option.
                2. Low, expected and high usage scenarios costed for each option.
                3. A recommended commitment level with its break-even utilisation stated.
                4. The decision recorded with who approved it and when it will be revisited.

                ## Notes
                Start from the **Purchase decision** template. Commit to the floor of steady usage, not the average; spikes are usually cheaper on demand.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A commitment level is chosen from a three-scenario model, with break-even utilisation stated and the approval recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Export twelve months of daily compute usage"
                - "Model on-demand, partial and full commitment costs under three scenarios"
                - "Work out the break-even utilisation for each commitment level"
                - "Record the decision and its revisit date with the approver"
            - name: Moving cold data to object storage
              description: |-
                ## Purpose
                Years of event history queried twice a year do not need to sit in premium warehouse storage. Moving cold partitions into an open table format on object storage, still queryable through external tables, can cut storage cost for that data sharply while keeping it available for audits and the occasional backfill.

                ## Milestones
                1. Cold data candidates identified by last-read date and size.
                2. A target location, file format and access path agreed and tested on one table.
                3. The first migrated table queried successfully through an external table.
                4. Remaining candidates moved in batches with storage cost measured before and after.

                ## Notes
                External queries over object storage are slower and may be billed differently. Tell the few people who read cold data what to expect before they hit it on a deadline.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Cold data candidates have moved to object storage in batches, each still queryable, with storage cost recorded before and after."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "List partitions or tables with no reads in the past six months"
                - "Agree a target bucket, file format and external table pattern"
                - "Migrate one table and test it through an external query"
                - "Move the remaining candidates in batches and record the saving"
            - name: Background service charges review
              description: |-
                ## Purpose
                Some of the bill comes from features that run without anyone writing a query: automatic clustering, materialised view refreshes, search indexes, replication, serverless tasks and data sharing egress. Listing each background service with its cost and purpose often finds a feature switched on during a trial and never switched off.

                ## Milestones
                1. Every background and serverless service in use listed with its monthly cost.
                2. Each one matched to the table, team or reason it was switched on.
                3. Services with no current purpose disabled with the owner's agreement.
                4. Background charges shown as a separate line in the monthly cost report.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every background service charge is listed with a purpose or switched off, and appears as its own line in the monthly report."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pull last month's charges for serverless and background services"
                - "Match each service to the table or team that enabled it"
                - "Disable services with no current purpose once the owner agrees"
                - "Add background charges as their own line in the cost report"
            - name: Query timeouts and resource limits by role
              description: |-
                ## Purpose
                One exploratory query joining two large fact tables without a key can run for hours at full size. Setting statement timeouts, scan limits and queue limits per role means mistakes stop themselves early, while pipelines that genuinely need long runs get explicit, documented exceptions.

                ## Milestones
                1. Current timeout and limit settings recorded for each role and resource.
                2. Default limits chosen for ad hoc, BI and pipeline roles.
                3. Exceptions documented for named long-running jobs.
                4. A month of timeout events reviewed to check limits catch mistakes, not real work.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every role has a statement timeout and a scan or queue limit, with documented exceptions and a month of timeout events reviewed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Record the current timeout and scan limits for each role"
                - "Set default limits for ad hoc, BI and pipeline roles"
                - "Document exceptions for named long-running jobs"
                - "Review a month of timeout events with the affected users"
            - name: Development and test environment cost controls
              description: |-
                ## Purpose
                Development schemas, personal sandboxes and CI runs can quietly cost as much as production when each engineer builds the full project on a large resource. Smaller dedicated compute, zero-copy clones or sampled data in development, and automatic removal of stale environments keep the inner loop fast without paying for a second production.

                ## Milestones
                1. Development and CI spend separated from production in the cost table.
                2. Development builds defaulting to a sample or limited date range of large sources.
                3. A small dedicated compute resource for development and CI with a short suspend time.
                4. Stale personal schemas and clones removed automatically after an agreed number of days.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Development and CI spend is tracked separately and has fallen, with stale clones removed automatically."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Separate development and CI spend in the cost table"
                - "Add a date limit or sample to large sources in development builds"
                - "Move development and CI onto a small dedicated compute resource"
                - "Remove personal schemas and clones untouched for thirty days @recurring(monthly:26)"
            - name: Annual data platform budget submission
              description: |-
                ## Purpose
                The yearly budget round is where the platform's cost story is either told well or cut arbitrarily. Preparing a submission with last year's actuals, the unit cost trend, known growth and the savings already delivered gives managers a defensible number and shows finance that the team manages its own spend.

                ## Milestones
                1. Last year's actuals by cost type and the unit cost trend summarised.
                2. Next year's volume assumptions and approved projects listed with their cost.
                3. A budget figure with low and high cases and the savings plan behind it.
                4. The submission presented and the approved figure loaded into the account budgets.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A budget submission with actuals, assumptions, scenarios and a savings plan is presented and the approved figure is set in the account."
                cadence: cyclic
                effort_hours_estimate: "10"
              tasks:
                - "Pull last year's actuals and unit cost trend from the cost table"
                - "Collect next year's planned data projects from team leads"
                - "Build low, expected and high budget cases"
                - "Start the data platform budget submission @recurring(yearly)"
            - name: Two-week cost reduction sprint
              description: |-
                ## Purpose
                When savings have sat on the backlog for months, a time-boxed sprint with a target, a ranked list and daily progress gets them done. Two weeks with two or three engineers working the top cost items, suspend settings and clean-ups usually delivers a measurable cut and leaves a habit behind.

                ## Milestones
                1. A monthly savings target in currency and a ranked list of items agreed.
                2. Two or three engineers allocated for two weeks with other work paused.
                3. Each item finished, measured or explicitly dropped by sprint end.
                4. A sprint summary with monthly run-rate savings shared with the sponsor.

                ## Notes
                Measure savings on the following full month, not the sprint's own days, so one-off backfills and holiday dips do not flatter the result.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The sprint ends with every item done, measured or dropped, and a run-rate saving reported to the sponsor."
                cadence: one-shot
                effort_hours_estimate: "60"
              tasks:
                - "Agree a monthly savings target with the sponsor"
                - "Rank cost items by expected saving and effort"
                - "Book two or three engineers for the two-week sprint"
                - "Report run-rate savings after the following full month"
            - name: Seasonal peak load cost preparation
              description: |-
                ## Purpose
                Year-end close, a sales season or an annual reporting cycle can double query volume for a few weeks, and the platform either scales up uncontrolled or slows to a crawl when people need it most. Planning compute limits, temporary scaling and a budget allowance before the peak keeps it fast and predictable.

                ## Milestones
                1. The dates and expected load of the next peak agreed with the business teams.
                2. Temporary scaling rules and their cost ceiling set for the peak window.
                3. Non-essential jobs paused or moved out of the peak window.
                4. Actual peak spend compared with the allowance and lessons written up.

                ## Notes
                Start from the **Operational checklist** template, and keep this year's version for next year's peak.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Peak scaling rules, a cost ceiling and paused jobs are in place before the peak, and actual spend is compared afterwards."
                cadence: cyclic
              tasks:
                - "Agree the dates and expected load of the next peak with business teams"
                - "Set temporary scaling limits and a cost ceiling for the window"
                - "Move non-essential jobs out of the peak window"
                - "Plan cost controls for the coming seasonal peak @recurring(yearly)"
            - name: Runaway query cost incident review
              description: |-
                ## Purpose
                Sooner or later a loop, a misconfigured backfill or an accidental cross join will burn a week's budget in a day. Treating it as an incident, with a timeline, a blameless review and fixes to alerting and limits, turns an embarrassing invoice line into the reason the next one is caught within an hour.

                ## Milestones
                1. A timeline from first expensive run to detection and stop.
                2. The cost of the incident and its root cause written down without blame.
                3. Changes to alerts, limits or review agreed with owners and dates.
                4. The review shared with the platform team and finance.

                ## Notes
                Start from the **Remediation plan** template. If the cause was a platform fault, ask the vendor about a credit and keep the evidence.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A blameless review of the cost incident records its cost, root cause and dated fixes to alerts or limits."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Stop the runaway workload and note the time it was stopped"
                - "Build a timeline from first expensive run to detection"
                - "Write the root cause and incident cost without assigning blame"
                - "Agree dated fixes to alerts and limits with their owners"
            - name: Renewal usage evidence pack
              description: |-
                ## Purpose
                Contract renewals go better when you arrive with your own usage facts rather than the vendor's account summary. A pack with twelve months of consumption, the trend, unused commitment, savings already made and next year's forecast gives the person negotiating a clear picture of what to commit to.

                ## Milestones
                1. Twelve months of consumption against commitment summarised.
                2. Unused or overrun commitment and its cost calculated.
                3. Next year's forecast attached with its scenarios.
                4. The pack handed to the renewal lead at least sixty days before the notice date.

                ## Notes
                Start from the **Vendor** template. Keep the pack to the facts of your usage; whether to stay on the platform at all is a separate selection exercise.
              priority: low
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A usage evidence pack with consumption, unused commitment and forecast reaches the renewal lead sixty days before the notice date."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Find the contract notice date and count back sixty days"
                - "Summarise twelve months of consumption against commitment"
                - "Calculate unused or overrun commitment and its cost"
                - "Attach the spend forecast and hand the pack to the renewal lead"
            - name: First warehouse bill at a startup
              description: |-
                ## Purpose
                Small teams often discover their warehouse bill when the free credits run out and it arrives at several times what anyone expected. A handful of settings and habits in the first month, a small default size, short suspend times, a monthly cap and one person checking the bill, keeps a young data stack affordable without slowing the few people using it.

                ## Milestones
                1. Default compute set to the smallest size that runs the daily pipeline.
                2. A monthly spend cap or alert below the amount that would worry the founders.
                3. Ingestion connectors syncing daily unless a use case needs faster.
                4. One named engineer checking the bill weekly for the first two months.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Within thirty days the startup's warehouse runs on the smallest workable size, with a spend cap, daily syncs and a named bill checker."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Note when free or trial credits expire on the account"
                - "Set the default compute to the smallest workable size"
                - "Add a monthly spend alert below the founders' comfort level"
                - "Switch connectors to daily syncs unless a use case needs faster"
            - name: First ninety days owning the platform budget
              description: |-
                ## Purpose
                Managers who inherit the data platform budget usually inherit it mid-year, with a forecast someone else wrote and a finance partner already asking questions. A ninety-day plan to learn the cost drivers, meet the cost owners, take over the reporting rhythm and agree two early savings builds credibility before the next budget round.

                ## Milestones
                1. The spend baseline and current forecast understood well enough to explain to finance.
                2. Conversations held with each cost owner and the finance partner.
                3. The monthly cost report running under your name.
                4. Two early savings agreed with their owners and dated.

                ## Notes
                Start from the **Onboarding 30/60/90** template, with the thirty-day mark for listening, sixty for the reporting rhythm and ninety for the first savings.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Within ninety days the new budget owner has met every cost owner, runs the monthly report and has two dated savings agreed."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Read the last three monthly cost reports and the current forecast"
                - "Book a conversation with each cost owner and the finance partner"
                - "Take over the monthly cost report under your own name"
                - "Agree two early savings with their owners and set dates"
            - name: Cost-aware querying habits for engineers
              description: |-
                ## Purpose
                Individual habits add up: previewing tables with a full scan, selecting every column of a wide table, rerunning a slow query at a bigger size to see if it helps. A short personal checklist, and a look at your own last month of queries in the cost table, shows an engineer or analyst which three habits are worth changing.

                ## Milestones
                1. Your own last thirty days of queries pulled from the cost table and ranked by cost.
                2. Your three costliest habits identified with an example of each.
                3. A personal checklist of cheaper alternatives, such as sampling, column lists and limited previews.
                4. Your next thirty days compared with the previous thirty.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your own query spend over thirty days is compared before and after adopting a written personal checklist."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pull your own last thirty days of queries from the cost table"
                - "Name your three costliest query habits with an example each"
                - "Write a personal checklist of cheaper alternatives"
                - "Compare your next thirty days of query cost with the last thirty"
            - name: Meeting a mandated percentage cut in platform spend
              description: |-
                ## Purpose
                Finance sometimes asks for a fixed cut, say twenty percent by next quarter, and the fastest route is often blunt limits that hurt the teams relying on data. Building a savings plan from the cost table, ranked by saving and impact, with the trade-offs written out, lets a manager meet the target and show exactly what was given up.

                ## Milestones
                1. The target restated as a monthly currency figure from the agreed baseline.
                2. Savings options listed with expected saving, effort and impact on users.
                3. A plan that reaches the target with a further ten percent contingency.
                4. Trade-offs agreed with affected team leads and the sponsor.
                5. Progress against the target reported each month until it is reached.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A savings plan reaching the mandated cut plus a ten percent contingency is agreed with the sponsor and tracked monthly."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Convert the percentage target into a monthly currency figure"
                - "List savings options with expected saving and user impact"
                - "Agree the trade-offs with affected team leads"
                - "Present the plan and its contingency to the sponsor"
            - name: Cost control during a platform migration
              description: |-
                ## Purpose
                Migrations double-run for months: the old platform carries production while the new one is loaded and tested, and both bills arrive. Planning the overlap, decommissioning in stages and watching the new platform's cost from the first workload keeps the migration from becoming the most expensive year the data team has had.

                ## Milestones
                1. A double-running budget with an end date agreed before the first workload moves.
                2. Cost tracking and tagging live on the new platform before production workloads arrive.
                3. Workloads switched off on the old platform within two weeks of passing validation.
                4. The old platform decommissioned and its final bill confirmed.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The migration ends inside its double-running budget, with the old platform decommissioned and its final bill confirmed."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Agree a double-running budget and end date with finance"
                - "Set up cost tagging on the new platform before the first workload"
                - "Switch off each old workload within two weeks of its validation"
                - "Confirm the final bill from the old platform"
            - name: Keeping unit cost flat during fast growth
              description: |-
                ## Purpose
                In a fast-growing company the bill can triple in a year and still be healthy, or double and be wasteful. Tracking unit cost monthly through the growth spurt, and reviewing every new large workload before it goes live, lets a team scale spend with the business rather than ahead of it.

                ## Milestones
                1. Unit cost tracked monthly with growth in business volume shown beside it.
                2. A review step for any new workload expected to add more than five percent to spend.
                3. Two quarters of growth with unit cost flat or falling.
                4. Lessons recorded on which workloads grew faster than the business.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Unit cost stays flat or falls across two quarters of growth, with every large new workload reviewed before launch."
                cadence: phased
              tasks:
                - "Plot unit cost against business volume for the last six months"
                - "Set the spend threshold that triggers a new workload review"
                - "Review each new large workload before it goes live"
                - "Note which workloads grew faster than the business"
            - name: Automated cost regression checks in CI
              description: |-
                ## Purpose
                Experienced platform teams catch expensive changes before they merge by estimating cost in the pipeline. Running changed models through a dry run, an explain plan or a sampled build in CI, and flagging changes that scan far more than before, turns cost into a test like any other.

                ## Milestones
                1. A method chosen for estimating the scan size or cost of changed models in CI.
                2. Baseline estimates stored for every model on the main branch.
                3. CI flagging changes that raise estimated cost by more than an agreed percentage.
                4. Three months of flags reviewed for false alarms and missed regressions.

                ## Notes
                Start as a warning, not a failure. A blocking check that cries wolf twice will be switched off.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "CI estimates cost for changed models and flags increases above the agreed percentage, reviewed after three months."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Test whether your platform's dry run or explain plan gives a usable scan estimate"
                - "Store baseline estimates for every model on the main branch"
                - "Add a CI step that flags large increases in estimated cost"
                - "Review three months of flags for false alarms"
            - name: Internal chargeback model with published rates
              description: |-
                ## Purpose
                Once showback has run for a year, some organisations move to real chargeback so team budgets carry their own data costs. A published internal rate card, a fair split of shared platform costs and a dispute process make chargeback feel predictable rather than a surprise tax.

                ## Milestones
                1. A rate card per unit of compute and storage, including a share of platform overhead.
                2. A method for splitting shared costs, such as usage share, agreed with finance.
                3. Three months of dry-run chargeback shown to teams before any money moves.
                4. A dispute process and an annual rate review in place.

                ## Notes
                Chargeback changes behaviour faster than showback but can push teams to copy data into spreadsheets to dodge charges. Watch for that in the first quarter.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A rate card and shared cost method are agreed with finance, and three months of dry-run chargeback have been shown to teams."
                cadence: cyclic
              tasks:
                - "Draft a rate card for compute and storage with overhead included"
                - "Agree the shared cost split method with finance"
                - "Run three months of chargeback as a dry run"
                - "Reset internal chargeback rates for the new financial year @recurring(yearly)"
            - name: Cost-aware job scheduling and queuing
              description: |-
                ## Purpose
                Batch jobs that all start at two in the morning on the hour fight for compute, scale the resource up and then leave it idle for the rest of the night. Staggering start times, packing jobs onto fewer resources and running low-priority work in cheaper windows can cut batch cost without anyone waiting longer for their morning data.

                ## Milestones
                1. A chart of concurrent jobs and compute size across the nightly batch window.
                2. Start times staggered, with dependencies used instead of fixed times where possible.
                3. Low-priority jobs moved to cheaper windows or smaller resources.
                4. Batch window cost compared for a month before and after, with delivery times checked.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Batch window cost falls over a month after rescheduling, with morning data delivery times unchanged or earlier."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Chart concurrent jobs and compute size across the nightly batch window"
                - "Replace fixed start times with dependencies where possible"
                - "Move low-priority jobs to off-peak windows or smaller compute"
                - "Check morning delivery times after the change"
            - name: Notebook, machine learning and AI workload cost controls
              description: |-
                ## Purpose
                Data science notebooks left attached to large clusters, model training on full history and language model functions called row by row inside queries can outgrow the rest of the platform in a quarter. Giving these workloads their own budgets, auto-termination and sampling defaults keeps experiments affordable while the useful ones move to production.

                ## Milestones
                1. Notebook, training and AI function spend separated in the cost table.
                2. Auto-termination set on every interactive cluster and notebook runtime.
                3. Queries calling AI or model functions row by row listed with their cost.
                4. A monthly budget per data science team with alerts at eighty percent.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Notebook, training and AI function spend is tracked separately, with auto-termination on every interactive runtime and team budgets alerting."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Tag notebook, training and AI function spend in the cost table"
                - "Set auto-termination on every interactive cluster and runtime"
                - "List queries that call AI or model functions row by row"
                - "Set a monthly budget with alerts for each data science team"
            - name: Data platform cost playbook for the organisation
              description: |-
                ## Purpose
                Senior engineers and managers who have done this work once can write it down so the next team does not start from scratch. A short playbook covering tagging, budgets, review rhythms, common fixes and who to ask, kept current each year, makes cost control part of how the organisation runs data rather than one person's project.

                ## Milestones
                1. A playbook draft with sections on attribution, alerts, reviews, common fixes and escalation.
                2. An example from your own platform in every section.
                3. The draft reviewed by one engineer and one manager from another team.
                4. The playbook published where new engineers are onboarded.

                ## Notes
                Ask the agent to turn your cost reports, incident reviews and checklists into a first draft, then cut it to what a new engineer would read in twenty minutes.
              priority: low
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A playbook with own-platform examples is reviewed by an engineer and a manager from another team and published in onboarding material."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Outline the playbook sections from the projects in this area"
                - "Add a real example from your platform to each section"
                - "Ask an engineer and a manager from another team to review it"
                - "Update the cost playbook with the year's lessons @recurring(yearly)"
---

# Data Warehouse Cost Control

This area is for the data engineers who run the warehouse and the managers who answer for its bill. It starts with foundations (a spend baseline, a queryable cost table, tags, owners, budgets and the quick fix to idle compute), then the weekly and monthly routines that keep spend visible, the skills behind cheaper queries and storage, and the sizing, retention and commitment decisions. After that come dated moments such as budget rounds, cost sprints and incidents, situations from a startup's first bill to a migration, and finally chargeback, cost checks in CI and an organisation playbook.

What repeats is a Monday anomaly review and a Thursday pass through the expensive query queue, monthly cost reports, showback statements, forecast checks and job and BI cost reviews spread across the month, quarterly clean-ups and sizing checks, and a yearly cycle of budget, peak planning and internal rates. The Metrics log, Purchase decision, Operational checklist, Remediation plan, Vendor and Onboarding 30/60/90 templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
