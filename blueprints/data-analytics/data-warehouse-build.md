---
id: data-analytics.data-warehouse-build
name: Data Warehouse Build
description: "A charter, source inventory and bus matrix, a layered architecture with standards and environments, star schemas with honest grain and history, and the reviews, migration and cutover work that make a warehouse trusted."
category: business
version: 1.0.0
tags: [data-analytics, data-warehouse-build, engineer, team, enterprise, dimensional-modelling, star-schema, warehouse-migration]
author: Aurum Technology
starter_structure:
  templates:
    - meeting-notes
    - operational-checklist
    - risk-register
    - vendor
    - remediation-plan
    - onboarding-plan
  pillars:
    - name: Data & Analytics
      emoji: "📊"
      description: "Turning data into decisions: metrics and dashboards, data pipelines and warehouses, experimentation, forecasting and modelling, machine learning, data quality and governance."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Data Warehouse Build
          description: "Designing and building a central data warehouse that combines data from many systems into reliable, well-modelled tables for analysis."
          projects:
            - name: Warehouse charter tied to twenty business questions
              description: |-
                ## Purpose
                Warehouses that start from a list of source systems end up as expensive copies of those systems that nobody queries. Writing a one-page charter around the twenty questions leaders cannot answer today, who asks them and what decision each one feeds gives every later design choice a test: does it help answer one of these?

                ## Milestones
                1. Twenty business questions collected from at least five teams, each with the person who asks it and the decision it informs.
                2. The questions ranked by value and grouped into three or four subject areas.
                3. A one-page charter stating scope, out of scope items, the sponsor and how success will be judged.
                4. The charter signed off by the sponsor and stored where the whole team can find it.

                ## Notes
                Keep reporting tool requests out of the charter. A question such as which regions lost margin last quarter is useful; a request for a new dashboard is not yet a requirement.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A signed one-page charter lists at least twenty ranked business questions, each with an owner and the decision it supports."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Book thirty-minute interviews with five team leads who rely on reports"
                - "Ask each lead for the three questions they cannot answer today"
                - "Rank the questions by value and group them into subject areas"
                - "Ask the agent to draft the one-page charter from your interview notes"
                - "Revisit the charter questions with the sponsor and retire answered ones @recurring(yearly)"
            - name: Source system inventory and access map
              description: |-
                ## Purpose
                Every warehouse build stalls at some point on a system nobody knew about or a database nobody can get credentials for. An inventory of each source, its owner, its volume, how data can be extracted and what approvals are needed surfaces those blockers in week two rather than month four.

                ## Milestones
                1. Every system that holds data behind the charter questions listed with its business owner and technical contact.
                2. Each source recorded with approximate row volumes, change frequency and extraction method available.
                3. Access requests raised for every source, with the approver and expected lead time noted.
                4. Sources that hold personal or regulated data flagged before any extraction starts.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "An inventory covering every source behind the charter questions, with owner, volume, extraction method and access status for each."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List every system named in the charter interviews in a shared sheet"
                - "Add owner, technical contact and extraction method for each source"
                - "Estimate row counts and daily change volume for the ten largest tables"
                - "Raise access requests for every source and note the approver"
                - "Flag sources holding personal data for the privacy lead"
            - name: Enterprise bus matrix of processes and dimensions
              description: |-
                ## Purpose
                A bus matrix puts business processes such as orders, shipments and invoices down the side and shared dimensions such as customer, product and date across the top. Drawing it before modelling anything shows which dimensions must be conformed, which process to build first and where two teams are about to model the same thing twice.

                ## Milestones
                1. Eight to fifteen business processes listed, each tied to a source system and a charter question.
                2. The shared dimensions identified and marked against every process that uses them.
                3. The first two processes chosen for build, with the reason recorded.
                4. The matrix reviewed with at least two business owners who confirm the process names match their language.

                ## Notes
                Name processes as events the business records, such as order placed or payment received, not as departments. Department names hide the grain.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A bus matrix of at least eight processes against their shared dimensions, with the first two build priorities agreed by business owners."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the business events behind the top ten charter questions"
                - "Mark which shared dimensions each event needs"
                - "Circle the dimensions used by three or more processes as conformed"
                - "Walk two business owners through the matrix and fix the names"
            - name: Layered architecture from raw to marts
              description: |-
                ## Purpose
                Without agreed layers, cleaning logic leaks into every report and nobody can tell which table is safe to use. Deciding the zones once, typically raw landing, staging, a core integrated layer and consumer marts, with rules for what may happen in each and who may query each, keeps the warehouse understandable as it grows past a few hundred tables.

                ## Milestones
                1. Each layer defined with its purpose, allowed transformations and retention.
                2. A rule written for which layers analysts and BI tools may query directly.
                3. Database and schema names assigned to each layer in every environment.
                4. A one-page diagram of the layers published with the design guide.

                ## Notes
                Keep raw data unchanged and replayable. Being able to rebuild everything downstream from the raw layer is what makes later fixes cheap.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written layer design naming each zone, its rules and its schemas, approved by the lead engineer and published with a diagram."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Sketch the current flow from sources to reports on one page"
                - "Write the purpose and allowed transformations for each layer"
                - "Agree which layers analysts may query and which are engineering only"
                - "Publish the layer diagram alongside the design guide"
            - name: Naming conventions and modelling standards guide
              description: |-
                ## Purpose
                Inconsistent names such as cust_id, customer_key and CustomerID across three tables cost every new analyst a week of confusion. A short guide covering table prefixes by layer, key and column naming, data types for money and timestamps, time zones and how nulls are handled lets reviewers point to a rule instead of arguing taste.

                ## Milestones
                1. Table naming rules written for each layer, including fact and dimension prefixes.
                2. Column rules agreed for keys, flags, amounts, timestamps and time zones.
                3. Standard data types chosen for money, quantities and identifiers.
                4. The guide linked from the repository and used in at least five code reviews.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A standards guide covering tables, columns, types and time zones is in the repository and has been cited in at least five reviews."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Collect ten inconsistent column names from existing tables as examples"
                - "Draft naming rules for tables, keys, flags and timestamps"
                - "Choose standard types for money and store all timestamps in UTC"
                - "Add the guide to the repository and link it from the review checklist"
            - name: Development, test and production warehouse environments
              description: |-
                ## Purpose
                Building directly in production means one bad change can break the morning board pack. Separate development, test and production databases, with sample or masked data in the lower ones and a promotion route between them, let engineers try changes freely while the tables people rely on stay stable.

                ## Milestones
                1. Three environments created with matching schemas and separate credentials.
                2. A refresh method agreed for lower environments, with personal data masked or sampled.
                3. A written promotion route from development to production with an approval step.
                4. One change promoted end to end through all three environments.

                ## Notes
                Zero-copy clones, where the platform offers them, make test environments cheap to refresh. Check the masking rules with your privacy lead before copying production data down.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Development, test and production environments exist with a documented promotion route, and one change has been promoted through all three."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Create development, test and production databases with separate roles"
                - "Agree how lower environments are refreshed and masked"
                - "Write the promotion steps and who approves each one"
                - "Promote one small table change through all three environments"
            - name: Warehouse role and schema permission design
              description: |-
                ## Purpose
                Granting tables to individual users works for ten people and collapses at a hundred. A small set of functional roles, such as loader, transformer, analyst and BI service, mapped to layers and schemas, makes access predictable, auditable and quick to grant when someone joins or moves team.

                ## Milestones
                1. Five to eight functional roles defined with the layers and schemas each may read or write.
                2. Service accounts separated from human users, each with only the access it needs.
                3. All direct user grants replaced by role membership.
                4. A quarterly role review scheduled with the data owners.

                ## Notes
                Who decides that a person should see a dataset belongs to governance. This project builds the mechanism that carries out those decisions.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every human and service account reaches warehouse data only through a documented functional role, with no direct table grants left."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Export the current list of users, roles and direct grants"
                - "Define functional roles and map each to the layers it may use"
                - "Move every user and service account onto role membership"
                - "Review warehouse role grants against the design with data owners @recurring(quarterly)"
            - name: Warehouse schema and infrastructure as code
              description: |-
                ## Purpose
                Tables, roles and warehouses created by hand in a console cannot be reviewed, rebuilt or rolled back. Putting schemas, grants and compute definitions into version-controlled code, applied by a pipeline, means every change has an author, a review and a record, and a lost environment can be rebuilt in an afternoon.

                ## Milestones
                1. Databases, schemas, roles and compute resources defined in code in one repository.
                2. Changes applied only through a pipeline after review, with console changes blocked for most users.
                3. A drift check comparing the live warehouse with the code.
                4. A test environment rebuilt from scratch using only the code.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A test environment has been rebuilt entirely from version-controlled code, and the drift check reports no unmanaged objects in production."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Choose an infrastructure as code tool your platform supports well"
                - "Import existing databases, schemas and roles into code"
                - "Set up a pipeline that applies changes only after review"
                - "Rebuild the test environment from code and note what was missing"
            - name: Weekly warehouse build backlog review
              description: |-
                ## Purpose
                Warehouse programmes collect requests faster than they ship tables, and without a visible backlog the loudest stakeholder sets the order. A short weekly review that ties each item to a charter question or bus matrix cell keeps the team building the next most valuable process rather than the latest ad hoc ask.

                ## Milestones
                1. One backlog holding every build request, each linked to a process or charter question.
                2. A weekly thirty-minute review slot with the lead engineer and product owner.
                3. Items without a business question parked with a reason.
                4. Twelve consecutive weekly reviews held with the top five items agreed each time.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve weekly backlog reviews held in a row, each leaving a ranked top five tied to charter questions."
                cadence: rolling
              tasks:
                - "Move every open warehouse request into one backlog"
                - "Tag each item with the process or charter question it serves"
                - "Rank the top five backlog items with the product owner @recurring(weekly:mon)"
                - "Park items with no business question and tell the requester why"
            - name: Schema change review and release train
              description: |-
                ## Purpose
                Renaming a column in a core table can silently break dozens of downstream queries and reports. A weekly review of proposed schema changes, with an impact check and a release slot, turns breaking changes into planned events with notice rather than Monday morning surprises.

                ## Milestones
                1. A change request format covering what changes, why, the downstream impact and the rollback.
                2. A weekly review where proposed changes are approved, deferred or sent back.
                3. Breaking changes announced to affected users at least one release ahead.
                4. Three months of releases with no unannounced breaking change in production.

                ## Notes
                Add new columns freely, but deprecate before you remove. Keeping an old column alongside the new one for one release cycle saves most of the pain.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three months of weekly releases go to production with every breaking change announced in advance and none rolled back unplanned."
                cadence: rolling
              tasks:
                - "Write a one-page schema change request format"
                - "List the queries and reports that read the five busiest core tables"
                - "Hold the schema change review and agree the release list @recurring(weekly:thu)"
                - "Post breaking change notices to affected users a release ahead"
            - name: Monthly reconciliation of core facts to source
              description: |-
                ## Purpose
                The fastest way to lose trust is a revenue figure that differs from the finance system by two percent with no explanation. Reconciling row counts and key totals for each core fact table against the system of record every month, and explaining every difference, gives the warehouse figures finance and leadership will sign.

                ## Milestones
                1. A reconciliation query for each core fact comparing counts and totals with the source report.
                2. Tolerances agreed with the source owner for each comparison.
                3. Every difference above tolerance explained in writing or fixed.
                4. Six consecutive monthly reconciliations signed off by finance or the process owner.

                ## Notes
                Agree which cut-off and time zone the comparison uses before the first run. Most unexplained differences turn out to be timing, not bugs.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly reconciliations completed in a row, each signed off with every difference above tolerance explained."
                cadence: rolling
              tasks:
                - "Pick the three fact tables whose totals leadership quotes most often"
                - "Agree comparison reports and tolerances with each source owner"
                - "Run the reconciliation and explain every gap above tolerance @recurring(monthly:8)"
                - "Reconcile full history row counts for every core fact @recurring(quarterly)"
            - name: New source onboarding checklist
              description: |-
                ## Purpose
                Each new source brings the same questions: who owns it, how it identifies records, how it marks deletes, what time zone it uses and which conformed dimensions it should join to. Running every new source through one checklist before modelling it stops the warehouse picking up a new set of surprises with every addition.

                ## Milestones
                1. A checklist covering ownership, keys, deletes, time zones, history and personal data.
                2. The checklist completed for the next source before any modelling starts.
                3. Mapping of the source's identifiers to existing conformed dimensions written down.
                4. Three sources onboarded through the checklist with findings filed.

                ## Notes
                Start from the **Operational checklist** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Three new sources have each been onboarded through the completed checklist before modelling began, with findings stored."
                cadence: rolling
              tasks:
                - "Create the source onboarding checklist from the template"
                - "Add questions on primary keys, delete handling and time zones"
                - "Run the next planned source through the checklist with its owner"
                - "Map the source's identifiers to existing conformed dimensions"
            - name: Monthly stakeholder demo of new warehouse tables
              description: |-
                ## Purpose
                Tables that ship without anyone being shown them go unused, and the team gets no feedback until something is wrong. A thirty-minute monthly demo where engineers answer a real charter question live against the new tables builds adoption and catches misunderstandings in grain or definitions early.

                ## Milestones
                1. A standing monthly demo slot with a rotating group of business users.
                2. Each demo answers at least one charter question live from new tables.
                3. Feedback from each session captured and turned into backlog items.
                4. Six demos held, with attendance and resulting changes recorded.

                ## Notes
                Start from the **Meeting notes** template.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly demos held, each answering a charter question live and producing at least one recorded backlog item."
                cadence: rolling
              tasks:
                - "Book a standing monthly thirty-minute demo slot"
                - "Pick one charter question the newest tables can answer"
                - "Run the demo and log feedback as backlog items @recurring(monthly:20)"
                - "Invite a different business team to each session"
            - name: Quarterly model health review
              description: |-
                ## Purpose
                Warehouses accumulate tables that nobody queries, dimensions with two hundred columns and joins that fan out rows quietly. A quarterly look at query history, table sizes and model shape catches decay while it is still cheap to fix, before analysts route around the warehouse.

                ## Milestones
                1. A query listing tables by last read date, row count and number of readers.
                2. Tables unread for ninety days flagged for deprecation.
                3. The five widest or slowest models reviewed for redesign.
                4. Four quarterly reviews completed with actions logged.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly reviews held in a year, each producing a list of unused tables and at least one redesign action."
                cadence: cyclic
              tasks:
                - "Write a query that lists tables by last read date and reader count"
                - "Hold the model health review and log actions @recurring(quarterly)"
                - "Pick the widest dimension and list columns nobody reads"
                - "Send unused table owners a deprecation proposal"
            - name: Warehouse operations runbook
              description: |-
                ## Purpose
                When a core table is corrupted or a role is dropped at eleven at night, the person on duty should not be reading documentation for the first time. A runbook with step-by-step procedures for restoring a table, rebuilding a mart, re-granting access and rotating a service credential turns an incident into a checklist.

                ## Milestones
                1. Procedures written for table restore, full mart rebuild, access recovery and credential rotation.
                2. Each procedure tested once in the test environment by someone who did not write it.
                3. The runbook linked from the team's incident channel.
                4. One procedure walked through every month and corrected where it had drifted.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A runbook with at least four procedures exists, each tested by a second engineer, and monthly walkthroughs are logged."
                cadence: rolling
              tasks:
                - "List the five warehouse failures most likely to happen at night"
                - "Write step-by-step procedures for restoring a table and rebuilding a mart"
                - "Ask a second engineer to follow each procedure in test"
                - "Walk through one runbook procedure and fix what has drifted @recurring(monthly:14)"
            - name: Architecture decision record log
              description: |-
                ## Purpose
                Two years in, nobody remembers why customer history was kept as type 2 or why the core layer is normalised, so the same arguments return every time someone new joins. Short decision records, one page each with the context, the options and the choice, keep that reasoning alongside the code.

                ## Milestones
                1. A decision record format with context, options considered, decision and consequences.
                2. The ten most important past decisions written up retrospectively.
                3. New design decisions recorded within a week of being made.
                4. Superseded decisions marked and linked to their replacements.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "At least fifteen decision records exist in the repository, including ten written retrospectively, with superseded ones linked."
                cadence: rolling
              tasks:
                - "Create a decision record template in the repository"
                - "List the ten past design choices people still ask about"
                - "Ask the agent to draft records from old design threads and meeting notes"
                - "Review open and superseded decision records with the team @recurring(monthly:3)"
            - name: Table deprecation and retirement process
              description: |-
                ## Purpose
                Deleting a table that one finance spreadsheet still reads will make you very unpopular, so most teams never delete anything. A clear route, from marking a table deprecated and notifying readers to a grace period, removal of grants and final drop, lets the warehouse shrink safely.

                ## Milestones
                1. A deprecation policy with notice periods and who must be told.
                2. A deprecated marker visible to users in table comments or the catalogue.
                3. Grants removed before tables are dropped, so hidden readers surface.
                4. Ten tables retired through the process without an unplanned restore.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Ten tables retired through the written process, each with notice sent and grants removed before the drop."
                cadence: rolling
              tasks:
                - "Write the deprecation policy with notice periods"
                - "Mark the first batch of unused tables as deprecated in their comments"
                - "Remove grants on deprecated tables two weeks before dropping them"
                - "Drop tables that passed their grace period with no complaints @recurring(quarterly)"
            - name: Dimensional modelling fundamentals
              description: |-
                ## Purpose
                Facts, dimensions, grain, conformed dimensions and the bus architecture are the shared vocabulary of most analytics warehouses, and teams that skip them rebuild the same mistakes. Working through the core ideas from a standard dimensional modelling text, and applying each to your own processes, gives the team a common language for design reviews.

                ## Milestones
                1. The core chapters on facts, dimensions and grain read and summarised.
                2. Two of your own business processes sketched as star schemas.
                3. The sketches reviewed by someone experienced in dimensional design.
                4. A one-page glossary of modelling terms shared with the team.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two of your own processes sketched as reviewed star schemas, with a team glossary of modelling terms published."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Get a copy of a standard dimensional modelling text"
                - "Read the chapters on facts, dimensions and grain"
                - "Sketch your top two business processes as star schemas"
                - "Book an experienced modeller to review your sketches"
            - name: Declaring the grain of every fact table
              description: |-
                ## Purpose
                Most wrong numbers in a warehouse come from a fact table whose grain nobody wrote down, so a join or sum double counts. Practising the discipline of stating the grain in one sentence, such as one row per order line per day, before choosing any columns makes fan-out bugs rare and reviews quick.

                ## Milestones
                1. The grain written in one sentence for every existing fact table.
                2. A uniqueness test on the grain columns of each fact table.
                3. Tables with mixed grain identified and split or documented.
                4. Grain statements required in every new fact table review.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every fact table has a one-sentence grain statement and a passing uniqueness test on its grain columns."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write a one-sentence grain statement for each existing fact table"
                - "Add a uniqueness test on the grain columns of each fact"
                - "List fact tables where two grains are mixed in one table"
                - "Add a grain statement field to the model review checklist"
            - name: Slowly changing dimensions in practice
              description: |-
                ## Purpose
                When a customer moves region or a product changes category, the warehouse must decide whether past sales follow the new value or keep the old one. Learning the common slowly changing dimension types by building each on a real dimension shows the trade-off between history, storage and query complexity before you commit core tables to one.

                ## Milestones
                1. Types 1, 2 and 3 explained in your own words with an example from your data.
                2. A type 2 dimension built in development with valid from, valid to and current flags.
                3. Reports compared using as-was and as-is attributes on the same facts.
                4. A rule written for which attributes in each core dimension keep history.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A working type 2 dimension in development and a written history rule for each attribute of the core dimensions."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Pick one dimension where attributes change often, such as customer"
                - "Build a type 2 version with valid from and valid to dates"
                - "Compare a sales report using as-was and as-is region"
                - "Write which attributes keep history and which overwrite"
            - name: Transaction, snapshot and accumulating fact tables
              description: |-
                ## Purpose
                Stock levels, account balances and order pipelines cannot be answered well from transaction rows alone. Knowing when to use a periodic snapshot or an accumulating snapshot, and building one of each, lets the warehouse answer how much and how long questions without slow window queries every time.

                ## Milestones
                1. The three fact table types described with one example from your business each.
                2. A periodic snapshot built for a balance or stock measure.
                3. An accumulating snapshot built for a process with milestones, such as order to delivery.
                4. Additive, semi-additive and non-additive measures labelled in each table.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One periodic snapshot and one accumulating snapshot built in development, with every measure labelled by additivity."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Find one charter question about balances and one about elapsed time"
                - "Build a daily periodic snapshot for the balance question"
                - "Build an accumulating snapshot with one date column per milestone"
                - "Label each measure as additive, semi-additive or non-additive"
            - name: Surrogate keys and late-arriving records
              description: |-
                ## Purpose
                Source identifiers get reused, merged and reformatted, and facts often arrive before the dimension row they point to. Learning how surrogate keys, unknown member rows and late-arriving dimension handling work keeps joins intact and stops facts quietly dropping out of reports.

                ## Milestones
                1. A key strategy chosen: hashed or sequence surrogate keys, with the reasons noted.
                2. An unknown member row added to every dimension.
                3. Late-arriving facts mapped to the unknown member and re-keyed when the dimension row lands.
                4. A test proving no fact rows are lost in joins to dimensions.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written key strategy, unknown member rows in every dimension and a passing test that no fact rows drop in dimension joins."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Count facts that currently fail to join to their dimensions"
                - "Choose between hashed and sequence surrogate keys and record why"
                - "Add an unknown member row to each dimension"
                - "Write a test that compares fact row counts before and after joins"
            - name: Reading query plans for warehouse workloads
              description: |-
                ## Purpose
                Reports that take four minutes are usually scanning a whole table they should have pruned, or exploding rows in a join. Learning to read your platform's query profile, spotting full scans, spills to disk and skewed joins, lets you design tables that stay fast as they grow rather than guessing.

                ## Milestones
                1. The query profile view of your platform explored on three real slow queries.
                2. Partition pruning, spills and join explosions recognised in a profile.
                3. One slow query rewritten or one table redesigned, with before and after timings.
                4. A short guide to reading profiles shared with the team.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three slow queries profiled, at least one fixed with recorded before and after timings, and a team guide published."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pull the ten slowest queries from the last month's history"
                - "Open the query profile for three of them and note the bottleneck"
                - "Rewrite one query or redesign one table and time it again"
                - "Write a one-page guide to reading query profiles"
            - name: Normalised core versus dimensional core decision
              description: |-
                ## Purpose
                Some teams keep an integrated, normalised core layer and build star schemas on top; others model dimensionally from the start. The choice changes how fast new sources land, how history is kept and how many people can understand the core, so it deserves a written comparison against your sources and team size.

                ## Milestones
                1. The two approaches compared on build speed, history handling, change tolerance and skills needed.
                2. Each approach tested on one real process with a small prototype.
                3. A decision recorded with the conditions that would make you revisit it.
                4. The decision reflected in the layer design.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision record comparing both approaches on at least four criteria, backed by a prototype, is approved and reflected in the layer design."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List the criteria that matter most for your sources and team"
                - "Prototype one process both ways in development"
                - "Write the decision record with revisit conditions"
                - "Update the layer design to match the decision"
            - name: Conformed customer dimension
              description: |-
                ## Purpose
                Sales, billing and support usually hold the same customers under different identifiers and slightly different names. A single conformed customer dimension, with a key map from each source and agreed attributes, is what lets anyone compare revenue, tickets and churn for the same customer list without manual matching.

                ## Milestones
                1. Every source customer identifier mapped to one warehouse customer key.
                2. Attribute ownership agreed: which source wins for name, segment, region and status.
                3. Unmatched records counted and assigned to an owner to resolve.
                4. At least two fact tables joined to the conformed dimension in production.

                ## Notes
                Matching rules for golden records across operational systems belong to master data management. Use its output if it exists, and keep this project to the warehouse dimension.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A conformed customer dimension in production with a key map from every source and at least two fact tables joined to it."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "List every source that holds customer records and its identifier"
                - "Agree which source owns each customer attribute"
                - "Build the key map and count unmatched records"
                - "Join the order and billing facts to the new dimension"
            - name: Shared date and fiscal calendar dimension
              description: |-
                ## Purpose
                Every team calculates weeks, fiscal quarters and working days slightly differently, and the differences show up as mismatched totals. One date dimension with calendar and fiscal attributes, public holidays for the regions you trade in and a working day flag ends that argument for every report at once.

                ## Milestones
                1. A date dimension covering at least ten years back and five years ahead.
                2. Fiscal year, quarter, period and week attributes matching the finance calendar.
                3. Holiday and working day flags for each region you operate in.
                4. Every fact table date joined to the dimension instead of computing dates inline.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A date dimension with fiscal attributes signed off by finance, joined from every fact table date column."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Get the fiscal calendar rules from finance in writing"
                - "Generate the date dimension with calendar and fiscal attributes"
                - "Add holiday and working day flags for each operating region"
                - "Extend the date range and check fiscal attributes with finance @recurring(yearly)"
            - name: Historical backfill strategy
              description: |-
                ## Purpose
                Leaders will ask for year on year comparisons the week the first mart ships, but loading ten years of history from systems that changed shape three times is expensive. Deciding up front how far back each process goes, which history must be reconstructed and which can be summarised sets expectations and a realistic plan.

                ## Milestones
                1. The history each charter question needs written down, process by process.
                2. Source availability and quality for older years checked.
                3. A backfill depth chosen for each process, with summarised history where detail is lost.
                4. The plan and its limits shared with the sponsor.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A backfill plan states the history depth for every planned process and has been shared with and accepted by the sponsor."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the sponsor how many years each charter question needs"
                - "Check how far back each source keeps usable detail"
                - "Note where source structure changed and history must be mapped"
                - "Write the backfill plan and send it to the sponsor"
            - name: Partitioning and clustering plan for large tables
              description: |-
                ## Purpose
                Two billion rows in a fact table are fine if queries only read last month, and painful if every query scans everything. Choosing partition and clustering keys from how the table is actually filtered, usually by date and one or two common columns, keeps load and query times stable as volumes grow.

                ## Milestones
                1. The ten largest tables listed with their most common filter columns from query history.
                2. Partition and clustering keys chosen for each, with the reasoning recorded.
                3. Changes applied in test with before and after scan volumes measured.
                4. A monthly check of pruning effectiveness on the largest tables.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The ten largest tables have recorded partition or clustering keys, with measured scan reductions for each change."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List the ten largest tables and their common filter columns"
                - "Choose partition and clustering keys for each table"
                - "Apply the changes in test and compare bytes scanned"
                - "Check partition pruning on the largest tables @recurring(monthly:24)"
            - name: Workload isolation for loading, modelling and BI
              description: |-
                ## Purpose
                When the nightly rebuild and the Monday morning dashboards share the same compute, someone waits. Separating loading, transformation, BI and ad hoc analysis onto their own compute pools or queues, with sensible sizes and timeouts, keeps one heavy job from slowing everyone else down.

                ## Milestones
                1. Workloads grouped into loading, transformation, BI and ad hoc.
                2. Separate compute or queues assigned to each group with sizes and timeouts.
                3. Service accounts and roles mapped to the right compute.
                4. Peak-hour queueing time measured before and after the change.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each workload group runs on its own compute or queue, and peak-hour queueing time is measured lower than before the change."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Group last month's queries by workload type and peak time"
                - "Create separate compute or queues for each workload group"
                - "Point each service account at its workload's compute"
                - "Compare peak-hour queueing time before and after"
            - name: Star schema versus wide tables for BI
              description: |-
                ## Purpose
                BI tools often run faster on one wide denormalised table, while analysts and governance benefit from clean stars. Deciding where to serve stars, where to publish wide tables built from them and how to keep both consistent avoids a sprawl of slightly different flattened copies.

                ## Milestones
                1. Current BI usage reviewed: which tools, which tables, which query patterns.
                2. A rule for when a wide table is published and that it is always built from the star.
                3. One wide table built for the busiest dashboard and timed against the star.
                4. The rule added to the modelling standards.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written rule on wide tables versus stars is in the standards guide, backed by one timed comparison on a real dashboard."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List which tables the three busiest dashboards query"
                - "Build one wide table from the star behind the busiest dashboard"
                - "Time the dashboard on both and note the difference"
                - "Add the wide table rule to the modelling standards"
            - name: Handling deletes and corrections from source systems
              description: |-
                ## Purpose
                Orders get cancelled, invoices get voided and records get hard deleted, and a warehouse that only appends will overstate everything. Deciding per source how deletes and corrections are detected and represented, whether as flags, reversal rows or removals, keeps warehouse totals matching the source.

                ## Milestones
                1. Each source's delete and correction behaviour documented: hard delete, soft flag or reversal.
                2. A representation chosen for each: delete flag, reversing row or physical removal.
                3. Detection built for hard deletes where the source gives no signal.
                4. Reconciliation shows totals still match after a month with known deletes.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every core source has documented delete handling, and a month with known cancellations reconciles to the source within tolerance."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask each source owner how cancellations and deletes are recorded"
                - "Choose flags, reversal rows or removal for each source"
                - "Build a check that detects hard-deleted rows"
                - "Reconcile one month with known cancellations against the source"
            - name: Currency and unit conversion reference tables
              description: |-
                ## Purpose
                Businesses trading in several currencies or units need every report to convert the same way, at the same rate, on the same date. Reference tables for exchange rates and unit conversions, with an agreed rate source and rate type, stop each analyst inventing their own conversion.

                ## Milestones
                1. The rate source and rate types (daily, month-end, budget) agreed with finance.
                2. A daily exchange rate table loaded with history to match the backfill depth.
                3. Unit conversion factors stored for products sold in more than one unit.
                4. Converted amounts in facts checked against finance reports for one month.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Exchange rate and unit tables are in production with history, and one month of converted totals matches finance within tolerance."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask finance which rate source and rate types they use"
                - "Load daily exchange rates back to the backfill start date"
                - "Store conversion factors for products sold in several units"
                - "Check the latest month of rates loaded with no gaps @recurring(monthly:2)"
            - name: First subject area mart launch
              description: |-
                ## Purpose
                The first mart is where the warehouse proves itself or loses its sponsor. Shipping one subject area end to end, such as sales, with reconciled facts, documented tables, trained users and a named owner, matters more than ten half-finished processes.

                ## Milestones
                1. One subject area chosen from the bus matrix with its charter questions listed.
                2. Facts and dimensions built, reconciled and documented in production.
                3. Ten business users trained and answering their own questions from the mart.
                4. A launch note sent to the sponsor with what is in scope and what comes next.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "One subject area mart is live with reconciled facts, documented tables and at least ten trained users, announced to the sponsor."
                cadence: phased
                effort_hours_estimate: "80"
              tasks:
                - "Pick the first subject area and its five charter questions"
                - "Set a launch date and work back to a build plan"
                - "Run the reconciliation for every fact in the mart before launch"
                - "Train ten business users on the new tables"
                - "Send the launch note to the sponsor"
            - name: Parallel run and report sign-off before migration
              description: |-
                ## Purpose
                Moving from a legacy warehouse means every report people trust must produce the same answer on the new one, or the difference must be explained. A parallel run, with old and new loads side by side and a sign-off list by report owner, is the evidence that lets you switch the old system off.

                ## Milestones
                1. Every legacy report in use listed with its owner and last run date.
                2. Old and new warehouses loaded in parallel for at least one full month end.
                3. Each report compared and either matched or its difference explained.
                4. Written sign-off from every report owner.

                ## Notes
                Start from the **Risk register** template. Unused legacy reports are a gift: retire them now rather than migrating them.
              priority: high
              deadlineOffsetDays: 150
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Every report in use has a signed comparison between legacy and new warehouse covering at least one month end."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Export the list of legacy reports run in the last ninety days"
                - "Assign an owner to each report and retire the unused ones"
                - "Run old and new loads in parallel through a month end"
                - "Collect written sign-off from each report owner"
            - name: Legacy warehouse cutover weekend
              description: |-
                ## Purpose
                Cutover is a few hours where connections, schedules and user access all move at once, and the rollback plan is only useful if it was written beforehand. A rehearsed checklist with timings, owners, go or no-go points and a tested rollback keeps the switch a planned event rather than a crisis.

                ## Milestones
                1. A cutover checklist with every step, owner, timing and verification query.
                2. A full rehearsal in test with timings recorded.
                3. Go or no-go criteria agreed with the sponsor, plus a tested rollback.
                4. Cutover completed and users confirmed working on the first business morning.

                ## Notes
                Start from the **Operational checklist** template. Freeze schema changes for the week before cutover.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Cutover completed on the planned date following a rehearsed checklist, with no rollback needed and users working the next business morning."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Choose a cutover date away from month end and peak trading"
                - "Write the cutover checklist with owners and verification queries"
                - "Rehearse the full cutover in test and record timings"
                - "Agree go or no-go criteria and the rollback with the sponsor"
                - "Freeze schema changes the week before cutover @priority(high)"
            - name: Warehouse architecture review with the design authority
              description: |-
                ## Purpose
                In larger organisations a warehouse design that skips the architecture board gets blocked late, usually on security, residency or integration grounds. Preparing a clear pack, layers, sources, access model, recovery and costs, and presenting it before the build scales turns the board into an ally.

                ## Milestones
                1. A review pack covering layers, sources, access, recovery, residency and run costs.
                2. Security and infrastructure leads consulted before the formal session.
                3. The review held and every condition or action recorded.
                4. Conditions closed and the closure reported back to the board.

                ## Notes
                Start from the **Meeting notes** template.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The design authority has approved the warehouse architecture and every condition it set is recorded as closed."
                cadence: cyclic
                effort_hours_estimate: "12"
              tasks:
                - "Ask the board secretary for the review pack format and dates"
                - "Draft the pack covering layers, access, recovery and residency"
                - "Walk the security lead through the access model before the session"
                - "Book the yearly architecture review with the design authority @recurring(yearly)"
            - name: Ninety-day post-launch retrospective
              description: |-
                ## Purpose
                Three months after launch is when the real usage pattern shows: which tables people query, which they avoid, and which questions still go to spreadsheets. A structured retrospective with usage data and user interviews tells you what to build next and what to stop maintaining.

                ## Milestones
                1. Usage data gathered: active users, most and least read tables, query volumes.
                2. Eight users interviewed about what they use, avoid and still do elsewhere.
                3. Charter questions checked off as answered, partly answered or not yet.
                4. Three changes agreed and added to the backlog.
              priority: medium
              deadlineOffsetDays: 210
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A retrospective report with usage data, eight interviews and charter progress is shared, with three agreed backlog changes."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pull active users and table read counts for the last ninety days"
                - "Interview eight users about what they still do in spreadsheets"
                - "Mark each charter question answered, partly answered or open"
                - "Agree three changes and add them to the backlog"
            - name: Legacy warehouse decommissioning
              description: |-
                ## Purpose
                Old warehouses rarely die; they linger because one extract still runs from them and the licence quietly renews. Decommissioning on a plan, read-only first, then archived, then switched off, with the licence and server costs actually removed, finishes the migration and frees the budget.

                ## Milestones
                1. Remaining connections to the legacy warehouse found and moved or closed.
                2. The legacy system set to read-only for an agreed period.
                3. An archive taken and its retention and restore route documented.
                4. The system switched off and its licence and hosting cancelled.
              priority: medium
              deadlineOffsetDays: 270
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "The legacy warehouse is switched off with an archived copy, and its licence and hosting costs no longer appear on invoices."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List every connection that reached the legacy warehouse last month"
                - "Move or close each remaining connection"
                - "Set the legacy system to read-only and announce the date"
                - "Take an archive and document how to restore from it"
                - "Cancel the legacy licence and hosting before the next renewal"
            - name: First data engineer building a startup warehouse
              description: |-
                ## Purpose
                A lone engineer at a growing company has to choose what not to build. A minimal warehouse, a few managed connectors, one raw and one modelled layer, a date and customer dimension and three core facts, answers the founders' main questions within weeks and leaves room to grow without a rewrite.

                ## Milestones
                1. The founders' five most-asked numbers written down with their current source.
                2. One raw and one modelled layer set up with naming rules from day one.
                3. Customer, date and three core fact tables built and reconciled.
                4. A short list of things deliberately deferred, shared with the founders.

                ## Notes
                Resist building a full layered architecture for a team of one. Two clean layers and good names beat five empty ones.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three core facts and two dimensions are live and reconciled, answering the founders' five main numbers, with a written defer list."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Ask the founders for the five numbers they check most often"
                - "Set up one raw and one modelled schema with naming rules"
                - "Build customer, date and three core fact tables"
                - "Write the defer list and walk the founders through it"
            - name: Consultancy build handover to the in-house team
              description: |-
                ## Purpose
                Many warehouses are built by a partner and then handed to a team that did not design them. Planning the handover from the start, with paired work, documented decisions, access transferred and a warranty period, avoids inheriting a black box the day the contract ends.

                ## Milestones
                1. Handover requirements written into the statement of work: documentation, pairing and warranty.
                2. In-house engineers pairing on at least one process build before the end.
                3. Code, credentials, infrastructure and decision records transferred to company ownership.
                4. A warranty period with open defects tracked to closure.

                ## Notes
                Start from the **Vendor** template.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "All code, credentials and decision records are under company ownership, and the in-house team has run one release alone before the contract ends."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Add documentation, pairing and warranty clauses to the statement of work"
                - "Pair an in-house engineer on the next process the partner builds"
                - "Move repositories and service credentials into company accounts"
                - "Run one release without the partner before the contract ends"
            - name: Multi-business-unit warehouse federation model
              description: |-
                ## Purpose
                In an enterprise with several business units, a single central team cannot model everything, but fully separate warehouses cannot be combined. A federation model, where a central team owns conformed dimensions and standards and units own their marts within them, lets each unit move at its own pace while group reporting still adds up.

                ## Milestones
                1. Central and unit responsibilities written down: who owns which dimensions, layers and standards.
                2. Each unit given its own schemas and roles within the shared warehouse.
                3. A monthly design forum where units propose changes to shared dimensions.
                4. One group-level report built from two units' marts using conformed dimensions.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written federation model is agreed by unit leads, and one group report combines two units' marts through conformed dimensions."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Map which business units already hold their own reporting tables"
                - "Draft central and unit responsibilities and circulate to unit leads"
                - "Create unit schemas and roles inside the shared warehouse"
                - "Chair the cross-unit design forum on shared dimensions @recurring(monthly:17)"
            - name: Merging warehouses after an acquisition
              description: |-
                ## Purpose
                After an acquisition, the board wants combined numbers within a quarter, but the two companies define customers, products and revenue differently. A merge plan that first maps the acquired company's facts into your conformed dimensions, and only later migrates its pipelines, gets combined reporting early without a rushed rebuild.

                ## Milestones
                1. The acquired warehouse's sources, tables and key definitions inventoried.
                2. Definition differences for customer, product and revenue listed and agreed with finance.
                3. Acquired facts mapped into conformed dimensions for combined group reporting.
                4. A phased plan for migrating or retiring the acquired warehouse.

                ## Notes
                Expect legal and data protection restrictions on combining data before completion. Check with your legal team what may be shared and when.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Combined group revenue and customer counts are produced from the warehouse, with definition differences documented and agreed with finance."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Ask the acquired data team for their table list and key definitions"
                - "List differences in customer, product and revenue definitions"
                - "Map acquired facts to your conformed dimensions"
                - "Draft the phased migration plan and agree it with both teams"
            - name: Warehouse build in a regulated industry
              description: |-
                ## Purpose
                Banks, insurers, healthcare providers and utilities may need to reproduce a figure exactly as it was reported months ago and show how it was produced. Designing for that from the start, with immutable raw data, recorded load times, versioned code and retention matched to obligations, is far cheaper than retrofitting it after an audit finding.

                ## Milestones
                1. Reporting and retention obligations relevant to the warehouse listed with the compliance team.
                2. Raw data kept immutable, with load timestamps on every row.
                3. Each published figure traceable to the code version and data load that produced it.
                4. One past regulatory figure reproduced exactly as a test.

                ## Notes
                This project organises evidence for your compliance and legal teams. They decide what the obligations are.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A past regulatory figure has been reproduced exactly from the warehouse, with its code version and load records shown to compliance."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Ask compliance which reported figures must be reproducible"
                - "Add load timestamps and batch identifiers to every raw table"
                - "Tag each production release so figures link to a code version"
                - "Reproduce one past regulatory figure and record the evidence @recurring(yearly)"
            - name: Rescuing a stalled or distrusted warehouse
              description: |-
                ## Purpose
                Many teams inherit a warehouse that is late, over budget or simply not believed, with analysts quietly exporting to spreadsheets. A rescue starts by finding out which numbers people distrust and why, then fixes the few core tables that matter before adding anything new.

                ## Milestones
                1. Ten users interviewed about which numbers they distrust and where they go instead.
                2. The three most distrusted tables traced to root causes.
                3. Those tables fixed, reconciled and relaunched with a short explanation.
                4. New feature work paused until trust measures improve.

                ## Notes
                Start from the **Remediation plan** template.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The three most distrusted tables are fixed, reconciled and relaunched, and a follow-up survey shows fewer users relying on spreadsheet workarounds."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Interview ten users about which numbers they do not trust"
                - "Trace the three most distrusted tables to their root causes"
                - "Fix, reconcile and relaunch those tables with a short note"
                - "Ask the agent to summarise interview themes into the remediation plan"
            - name: Onboarding an engineer to the warehouse codebase
              description: |-
                ## Purpose
                A new engineer usually spends their first month asking where things live and why. A prepared onboarding route through the layers, standards, decision records and runbook, with a first small change shipped in week one, gets them productive and spreads knowledge beyond the original builders.

                ## Milestones
                1. An onboarding plan covering access, layers, standards, decision records and the runbook.
                2. A starter change chosen that touches every stage from development to production.
                3. The starter change shipped in the first week.
                4. Gaps the new engineer found fixed in the documentation.

                ## Notes
                Start from the **Onboarding plan** template.
              priority: low
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A new engineer ships a production change in their first week and the gaps they report are fixed in the documentation."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Create the warehouse onboarding plan from the template"
                - "Request all roles and repository access before the start date"
                - "Pick a small starter change that goes through every environment"
                - "Ask the new engineer to list confusing docs after week two"
            - name: Data vault core layer pilot
              description: |-
                ## Purpose
                Where sources are many, volatile and frequently replaced, a data vault core of hubs, links and satellites can absorb change and keep full history without remodelling. Piloting it on one business area, and building a star on top, shows whether the extra tables pay for themselves in your setting before committing the whole core.

                ## Milestones
                1. One business area chosen with at least three sources feeding it.
                2. Hubs, links and satellites built for that area with hash keys and load dates.
                3. A star schema mart built from the vault and reconciled.
                4. A decision record on whether to extend, limit or drop the approach.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A pilot vault for one area feeds a reconciled star mart, and a decision record states whether to extend it."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Choose a business area with three or more volatile sources"
                - "Design the hubs, links and satellites for that area"
                - "Build a star mart from the vault and reconcile it"
                - "Record the decision to extend, limit or drop the vault"
            - name: Open table format lakehouse layer design
              description: |-
                ## Purpose
                Open table formats such as Apache Iceberg or Delta Lake let several engines read the same tables in object storage, with snapshots and schema evolution. Designing how raw and core layers use them, including file sizes, compaction, snapshot retention and which engine writes, avoids small-file problems and conflicting writers later.

                ## Milestones
                1. The layers that will use an open table format chosen, with reasons.
                2. A single writing engine named per table and readers listed.
                3. Partitioning, target file size, compaction and snapshot retention set.
                4. One table read correctly from two engines in test.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A design note sets writers, partitioning, compaction and snapshot retention, and one table is read correctly by two engines in test."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "List the engines that need to read raw and core tables"
                - "Name one writing engine for each open format table"
                - "Set target file size, compaction schedule and snapshot retention"
                - "Read the same test table from two engines and compare results"
            - name: Bitemporal history for point-in-time reporting
              description: |-
                ## Purpose
                Some questions need two clocks: when something was true in the business and when the warehouse learned about it. Bitemporal tables answer both what was the policy value on 1 March and what did we report on 1 March, which matters for restatements, audits and backdated corrections.

                ## Milestones
                1. The processes that need both business time and recorded time identified.
                2. A bitemporal pattern designed with valid and recorded time ranges.
                3. One table built and queried for both as-of views.
                4. A query guide written so analysts pick the right clock.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One bitemporal table answers both business-time and recorded-time questions correctly, with an analyst query guide published."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "List processes with backdated corrections or restatements"
                - "Design valid time and recorded time columns for one table"
                - "Build the table and test both as-of queries"
                - "Write a query guide explaining which clock to use"
            - name: Multi-region warehouse layout for data residency
              description: |-
                ## Purpose
                Operating in several jurisdictions can mean some data must stay in a region while group reporting still needs totals. Laying out regional accounts or databases, with only approved aggregates crossing borders, lets the warehouse meet residency obligations without breaking group views.

                ## Milestones
                1. Residency requirements by data type and region confirmed with legal.
                2. Regional storage and compute set up with region-locked roles.
                3. Approved aggregate tables defined for cross-region group reporting.
                4. One group report produced from regional aggregates only.

                ## Notes
                Legal and privacy teams set the residency rules. This project designs the warehouse layout that follows them.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Regional data stays in its region under locked roles, and one group report is produced only from approved cross-region aggregates."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Ask legal for residency rules by data type and region"
                - "Set up regional databases with region-locked roles"
                - "Define the aggregate tables allowed to cross regions"
                - "Build one group report from regional aggregates only"
            - name: Warehouse disaster recovery and restore drill
              description: |-
                ## Purpose
                Time travel and fail-safe features protect against some mistakes, but not against a dropped database past retention or a lost account. Setting recovery time and recovery point targets with the business, and proving them with a restore drill, is the only way to know the warehouse can come back.

                ## Milestones
                1. Recovery time and recovery point targets agreed with the sponsor.
                2. Backup, replication or retention settings configured to meet them.
                3. A restore drill completed in a separate environment with timings recorded.
                4. Gaps from the drill fixed and the runbook updated.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A restore drill has met the agreed recovery time and point targets, with results recorded and the runbook updated."
                cadence: cyclic
              tasks:
                - "Agree recovery time and recovery point targets with the sponsor"
                - "Check retention and replication settings against the targets"
                - "Restore a core schema into a separate environment and time it @recurring(quarterly)"
                - "Update the runbook with gaps found in the drill"
---

# Data Warehouse Build

This area is for engineers, data teams and enterprise programmes designing a central warehouse that many systems feed and many people query. It starts with the foundations (a charter tied to real business questions, a source inventory, a bus matrix, a layered architecture, standards, environments and permissions), then the operating rhythm of backlog, schema change review, reconciliation and demos, the modelling skills of grain, history and keys, the design decisions on conformed dimensions, backfill, partitioning and workload isolation, the dated events from first mart to legacy cutover, situations from a first startup hire to a post-acquisition merge, and finally data vault, lakehouse tables, bitemporal history, residency and restore drills.

What repeats is a Monday backlog review, a Thursday schema change review, monthly reconciliation of core facts, monthly demos and decision record reviews, quarterly model health, deprecation and restore checks, and yearly reviews of the charter, the date dimension and the architecture. The Meeting notes, Operational checklist, Risk register, Vendor, Remediation plan and Onboarding plan templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
