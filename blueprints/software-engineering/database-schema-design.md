---
id: software-engineering.database-schema-design
name: Database Schema Design
description: "Tables, keys, constraints and indexes designed on purpose, migrations that ship without downtime, and the routines that keep a relational schema correct, documented and easy to change."
category: business
version: 1.0.0
tags: [software-engineering, database-schema-design, engineer, relational-databases, migrations, indexing, data-modelling, sql]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - metrics-log
    - remediation-plan
    - risk-register
  pillars:
    - name: Software Engineering
      emoji: "⚙️"
      description: "Building and running software: architecture and code quality, delivery and release, testing, infrastructure and reliability, incidents, technical debt, developer experience and engineering teams."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Database Schema Design
          description: "Designing tables, indexes, relationships and migrations that keep data correct, queries fast and future changes possible without downtime."
          projects:
            - name: Entity map of the current database schema
              description: |-
                ## Purpose
                Before changing anything, you need to know which tables exist, which ones the application still reads and how they relate, and most schemas have a few that nobody can explain. A single afternoon spent listing every table with its row count, owner and main relationships turns a folder of migration files into a picture you can reason about.

                ## Milestones
                1. Every table listed with its approximate row count, size on disk and owning feature.
                2. The main relationships between tables written down, including the ones enforced only in application code.
                3. Tables with no reads or writes in the last month marked as candidates for retirement.
                4. The map saved beside the code where the next engineer will find it.

                ## Notes
                Pull row counts and sizes from the database's own statistics views rather than running a count on every table; the estimates are close enough and do not load production.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A saved document lists every table with size, owner and relationships, and flags any table with no recent reads or writes."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Export the table list with row estimates from the statistics views"
                - "Note which feature or service owns each table"
                - "Check access statistics for tables with no recent reads or writes"
                - "Commit the entity map to the repository's docs folder"
            - name: Naming conventions for tables, columns and constraints
              description: |-
                ## Purpose
                Mixed conventions like userId beside created_at and tbl_orders beside invoice cost a few seconds on every query and cause real bugs when someone guesses the wrong name. Writing one page of rules for table plurality, case, foreign key names, index names and boolean prefixes settles the argument once and gives reviewers something to point at.

                ## Milestones
                1. A one-page naming standard covering tables, columns, keys, indexes, constraints and views.
                2. Explicit names chosen for constraints and indexes so error messages and migrations are readable.
                3. Existing exceptions listed, with a decision to leave or rename each one.
                4. The standard linked from the migration review checklist.

                ## Notes
                Pick snake_case for databases that fold unquoted identifiers to lower case, such as PostgreSQL. Renaming old tables is rarely worth the risk; apply the rules to new work and note the exceptions.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A published naming standard exists, and every migration merged after it names its constraints and indexes by the standard."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List ten inconsistent names from the current schema as examples"
                - "Draft rules for case, plurality, key, index and constraint names"
                - "Decide which existing exceptions to leave alone and record why"
                - "Add the standard's link to the repository's contributing guide"
            - name: Primary key strategy decision
              description: |-
                ## Purpose
                Whether rows are keyed by an auto-increment integer, a random UUID, a time-ordered ID or a natural key affects index size, insert speed, URL exposure and how hard it is to merge data later. Deciding once, with the reasons written down, stops each new table from reopening the question and avoids the painful key migration two years in.

                ## Milestones
                1. Three or four key options compared on index size, insert locality, guessability and portability.
                2. A default key type chosen for new tables, with the cases where a natural key is allowed.
                3. A rule for whether internal IDs may appear in URLs and API responses.
                4. The decision recorded as an architecture decision record.

                ## Notes
                Random UUIDs scatter inserts across a B-tree index; time-ordered identifiers such as UUIDv7 keep uniqueness without that cost. Keep natural keys like email addresses as unique constraints, not primary keys, because they change.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision record names the default primary key type, the allowed exceptions and the rule on exposing IDs externally."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the key types the current tables already use"
                - "Compare integer, UUID, time-ordered ID and natural keys in a short table"
                - "Benchmark insert speed for two candidate key types on a test table"
                - "Write and merge the decision record"
            - name: Column data types and nullability rules
              description: |-
                ## Purpose
                A phone number stored as an integer, a status as free text or a date as a string will eventually produce data you cannot trust or query. Agreeing which types to use for text, numbers, dates, booleans and identifiers, and making NOT NULL the default unless there is a stated reason, prevents a whole class of bugs before the first row is written.

                ## Milestones
                1. A short type guide covering text lengths, integers, decimals, dates, times, booleans and identifiers.
                2. NOT NULL set as the default, with a list of reasons that justify a nullable column.
                3. Columns in the current schema with a clearly wrong type listed with the fix each needs.
                4. The guide referenced in the migration review checklist.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A type and nullability guide is published, and the current schema's mistyped columns are listed with an agreed fix for each."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Query the information schema for nullable columns and their types"
                - "Mark columns where null has no clear meaning"
                - "Write the type guide with one example per data category"
                - "Open a ticket for each mistyped column worth fixing"
            - name: Choosing a migration tool and workflow
              description: |-
                ## Purpose
                Hand-run SQL scripts and changes made directly in a console are how environments drift apart and how a Friday change becomes unrepeatable. Choosing one migration tool, whether your framework's own or a standalone one, and agreeing how migrations are written, numbered, reviewed and applied gives every schema change a history and a single path to production.

                ## Milestones
                1. Two or three migration tools compared on rollback support, transactional DDL, ordering and team familiarity.
                2. One tool chosen and every existing environment brought to the same baselined version.
                3. A written workflow saying who writes, reviews and applies migrations, and when.
                4. Direct schema changes in production consoles stopped by permissions, not by trust.

                ## Notes
                Squash old history into a single baseline migration if replaying hundreds of files takes minutes. Keep the original files in version control for reference.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One migration tool is in use in every environment from the same baseline, and production accounts cannot alter the schema outside it."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List how schema changes reach each environment today"
                - "Compare two migration tools on rollback and ordering behaviour"
                - "Create a baseline migration from the current production schema"
                - "Remove DDL permission from the application's production account"
            - name: Foreign keys and referential integrity baseline
              description: |-
                ## Purpose
                Schemas that rely on application code to keep relationships consistent always end up with orders pointing at deleted customers and invoices for products that no longer exist. Adding foreign keys with deliberate ON DELETE behaviour makes the database refuse impossible data, and it documents the relationships for anyone reading the schema.

                ## Milestones
                1. Every relationship from the entity map checked for a matching foreign key.
                2. Existing orphan rows counted and cleaned or archived before constraints are added.
                3. An ON DELETE rule chosen for each foreign key: restrict, cascade or set null, with the reason.
                4. Foreign keys added to the most important relationships and indexed on the referencing column.

                ## Notes
                Cascade deletes are convenient and dangerous on large child tables; prefer restrict unless the child rows have no meaning without the parent.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The ten most important relationships are enforced by indexed foreign keys with a documented delete rule, and no orphan rows remain in them."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List relationships that exist in code but have no foreign key"
                - "Write a query that counts orphan rows for each one"
                - "Choose and record the delete rule for each relationship"
                - "Add the first foreign key with an index on the referencing column"
            - name: Timestamps, time zones and audit columns standard
              description: |-
                ## Purpose
                Times stored without a zone, mixed local and UTC values, and tables that forget to record when a row changed make incident timelines and customer disputes hard to settle. A standard for created and updated timestamps in UTC, with clear rules for dates that are genuinely local such as a birthday or a shop's opening hours, keeps every table answering the same questions.

                ## Milestones
                1. A rule that event times are stored as timezone-aware timestamps in UTC.
                2. A separate rule for calendar dates and local wall-clock times that must not be converted.
                3. Created and updated columns defined, with how updated is maintained.
                4. Tables missing these columns listed with a plan to add them.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written time-handling standard exists and every new table since includes created and updated timestamp columns in UTC."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find columns that store times without zone information"
                - "Write the rule for event times versus local calendar dates"
                - "Decide whether updated timestamps are set by trigger or by the application"
                - "List tables that lack created and updated columns"
            - name: Storing money, quantities and units exactly
              description: |-
                ## Purpose
                Floating point columns for prices produce totals that are off by a cent, and amounts stored without a currency or quantities without a unit cause expensive mistakes in billing and stock. Storing money as exact decimals or integer minor units, always beside a currency code, and putting units in the column name or a companion column, removes the guesswork.

                ## Milestones
                1. Every money, weight, length and duration column in the schema listed.
                2. One representation chosen for money, either fixed decimal or integer minor units, with a currency column.
                3. A rounding rule agreed and written down for calculated amounts.
                4. Floating point money columns scheduled for conversion.

                ## Notes
                Some currencies have zero or three decimal places, so integer minor units need the currency's exponent known in code.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A recorded rule for money and unit columns exists and no new floating point money column is merged after it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Search the schema for float and double columns holding amounts"
                - "Choose fixed decimal or integer minor units for money"
                - "Add a currency code column to each amount that lacks one"
                - "Rename ambiguous measurement columns to include their unit"
            - name: Entity relationship diagram generated from the schema
              description: |-
                ## Purpose
                Hand-drawn diagrams go stale the week after they are made, while a diagram generated from the live schema is always right and costs nothing to refresh. Generating one into the repository, grouped by domain, gives new engineers and reviewers a view of the relationships in minutes instead of reading every migration.

                ## Milestones
                1. A tool chosen that generates a diagram from the database or the migration files.
                2. The diagram split by domain so no single picture has more than about twenty tables.
                3. The generated files committed and linked from the README.
                4. Regeneration added as a script anyone can run.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Generated diagrams for each domain are committed to the repository and can be refreshed with a single script."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Try one diagram generator against a local copy of the schema"
                - "Group tables into domains for separate diagrams"
                - "Add a script that regenerates the diagrams"
                - "Regenerate the diagrams after the month's schema changes @recurring(monthly:12)"
            - name: Local and CI databases built from migrations
              description: |-
                ## Purpose
                When developers start from a shared dump instead of the migrations, a broken migration can sit unnoticed until it reaches production. Building every local and test database from an empty database by running all migrations, then loading small seed data, proves the migrations work in order every time someone runs the test suite.

                ## Milestones
                1. A single command creates a fresh database and applies every migration.
                2. Seed data kept small, realistic and free of real customer records.
                3. CI applies migrations from scratch on every pull request that touches them.
                4. A check that the schema from migrations matches the committed schema snapshot.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "CI builds the database from an empty start on every relevant pull request and fails when migrations and the schema snapshot disagree."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Time how long a full migration run from empty takes locally"
                - "Write a seed script with fictional but realistic records"
                - "Add a CI step that migrates an empty database from scratch"
                - "Fail the build when the schema snapshot is out of date"
            - name: Migration review checklist for pull requests
              description: |-
                ## Purpose
                Most schema incidents come from migrations that looked harmless in review: an index built without the concurrent option, a column dropped while old code still reads it, a default that rewrites a large table. A short checklist reviewers run on every migration catches these before merge, and a monthly look back shows which items keep getting missed.

                ## Milestones
                1. A checklist of ten or fewer questions covering locking, reversibility, backfills and code compatibility.
                2. The checklist added to the pull request template for files in the migrations folder.
                3. A named second reviewer required for migrations on the largest tables.
                4. A monthly note of any migration that caused trouble and the checklist item that would have caught it.

                ## Notes
                Start from the **Operational checklist** template. Keep it short; a forty-item list gets ticked without reading.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every merged migration in the last three months has the checklist completed in its pull request description."
                cadence: rolling
              tasks:
                - "Draft ten review questions from past schema incidents"
                - "Add the checklist to the pull request template for migration files"
                - "Review last month's merged migrations against the checklist @recurring(monthly:3)"
                - "Add or remove one checklist item after each schema incident"
            - name: Unused and duplicate index review
              description: |-
                ## Purpose
                Every index speeds some reads and slows every write, and schemas collect indexes that were added for a query that no longer exists or that duplicate the leading columns of another. A monthly pass through index usage statistics finds the ones that cost storage and write time without earning their keep.

                ## Milestones
                1. A saved query that lists indexes by size, scan count and last use.
                2. Indexes that duplicate another index's leading columns identified.
                3. Candidate indexes dropped one at a time, after confirming replicas and reporting jobs do not need them.
                4. A log of each dropped index with the date and the space recovered.

                ## Notes
                Usage counters reset on restart and are per node, so check every replica and wait for a full business cycle before calling an index unused.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly index review is logged for at least three consecutive months, each recording indexes kept, dropped or flagged."
                cadence: rolling
              tasks:
                - "Save a query that lists indexes with size and scan counts"
                - "Find indexes whose columns are a prefix of another index"
                - "Run the index usage review on primary and replicas @recurring(monthly:9)"
                - "Drop one confirmed unused index in a reviewed migration"
            - name: Weekly review of schema-related slow queries
              description: |-
                ## Purpose
                The slow query log tells you where the schema is failing the application: a missing index, a join on mismatched types, a table that should have been split. Looking at the top offenders each week and asking whether the fix is a schema change keeps small modelling problems from turning into outages at the next traffic peak.

                ## Milestones
                1. Slow query logging or a statement statistics view switched on with a sensible threshold.
                2. A weekly list of the five most expensive queries by total time.
                3. Each one tagged as needing an index, a schema change, a query rewrite or nothing.
                4. Schema fixes raised as tickets with the query and its plan attached.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weekly reviews are recorded, each listing the top five queries and the action chosen for each."
                cadence: rolling
              tasks:
                - "Turn on statement statistics in the staging and production databases"
                - "List the five slowest queries by total time @recurring(weekly:tue)"
                - "Attach the query plan to every ticket raised from the review"
                - "Hand pure query rewrites to the owning team rather than changing the schema"
            - name: Schema drift detection between environments
              description: |-
                ## Purpose
                Somebody adds an index by hand during an incident, a hotfix lands in production without its migration, and soon staging no longer tells you how production will behave. A scheduled comparison of each environment's schema against what the migrations say it should be catches drift while it is still one difference rather than forty.

                ## Milestones
                1. A schema diff tool run against production, staging and the migration output.
                2. Every existing difference either turned into a migration or reverted.
                3. The comparison scheduled to run automatically and alert on any difference.
                4. A rule that emergency manual changes get a migration within two working days.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An automated schema comparison runs on a schedule and the last three runs show no unexplained differences between environments."
                cadence: rolling
              tasks:
                - "Run a schema diff between production and a database built from migrations"
                - "Write a migration or a revert for each difference found"
                - "Schedule the comparison as a job that alerts on any difference"
                - "Check the drift report and chase any open difference @recurring(monthly:14)"
            - name: Table growth and storage bloat log
              description: |-
                ## Purpose
                Tables that grow by ten million rows a month are fine until the day a migration on one takes an hour, and dead rows from heavy updates can double a table's size on disk. Logging the size of the largest tables monthly shows which ones need partitioning, archiving or maintenance long before they become a problem.

                ## Milestones
                1. The ten largest tables and indexes recorded with row estimates and size on disk.
                2. Monthly growth rate calculated for each.
                3. Tables with heavy bloat or fast growth flagged with a next step.
                4. A projection of when the largest table will double, noted in the log.

                ## Notes
                Start from the **Metrics log** template, one row per table per month.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A metrics log holds at least three monthly size readings for the ten largest tables, with growth rates and flagged actions."
                cadence: rolling
              tasks:
                - "Save a query listing the largest tables and indexes by size"
                - "Record table sizes and row estimates in the log @recurring(monthly:20)"
                - "Estimate bloat for the three most updated tables"
                - "Flag any table projected to double within six months"
            - name: Monthly orphan row and constraint gap sweep
              description: |-
                ## Purpose
                Relationships not yet protected by foreign keys, and rules held only in application code, decay quietly: rows reference deleted parents, unique values get duplicated, statuses take impossible values. A monthly set of integrity queries finds the damage while it is small and tells you which constraint to add next.

                ## Milestones
                1. A saved set of integrity queries for orphans, duplicates and invalid values.
                2. The queries run monthly against a replica, with counts recorded.
                3. Every non-zero count traced to the code path that produced it.
                4. One missing constraint added each quarter from what the sweep finds.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Integrity queries have run monthly for three months with results recorded, and at least one new constraint has been added from their findings."
                cadence: rolling
              tasks:
                - "Write integrity queries for the five relationships without foreign keys"
                - "Add a duplicate check for each value that should be unique"
                - "Run the integrity queries on a replica and record counts @recurring(monthly:24)"
                - "Trace each new orphan back to the code path that created it"
            - name: Quarterly schema health review
              description: |-
                ## Purpose
                Monthly checks catch individual problems; a quarterly review asks whether the schema as a whole still fits the product, whether the naming and type rules are holding, and which structural changes deserve time next quarter. An hour with the engineers who touch the database most turns scattered tickets into a short, ranked list of schema work.

                ## Milestones
                1. Findings from the index, drift, growth and integrity routines collected in one place.
                2. Three to five structural problems ranked by risk and cost of delay.
                3. One schema improvement scheduled into the next quarter's plan.
                4. The review notes saved with the date and the decisions taken.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly reviews are recorded within a year, each ending with at least one schema improvement scheduled."
                cadence: cyclic
              tasks:
                - "Collect the last three months of routine findings into one page"
                - "Hold the schema health review with the database's main users @recurring(quarterly)"
                - "Rank the structural problems by risk and effort"
                - "Put the top improvement into next quarter's plan"
            - name: Migration rollback rehearsal
              description: |-
                ## Purpose
                Down migrations that have never been run are a comforting fiction, and many schema changes cannot be reversed without data loss at all. Rehearsing a rollback on a copy of production each quarter tells you which migrations really are reversible and how long recovery from a bad change would take.

                ## Milestones
                1. A recent migration chosen and rolled back on a restored production copy.
                2. Time taken and any data loss recorded.
                3. Migrations marked in the codebase as reversible or forward-fix only.
                4. The rollback procedure written into the runbook with the measured time.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A rollback has been rehearsed on a production copy in each of the last two quarters, with timings recorded in the runbook."
                cadence: cyclic
              tasks:
                - "Restore last night's backup to an isolated environment"
                - "Roll back the most recent migration and time it @recurring(quarterly)"
                - "Mark each recent migration as reversible or forward-fix only"
                - "Update the runbook with the measured recovery time"
            - name: Data dictionary for business-critical tables
              description: |-
                ## Purpose
                Column names rarely say what a value means: whether amount includes tax, which status values are terminal, what a null cancelled_at implies. A data dictionary for the tables that matter most, kept in the database as column comments or beside the code, saves every analyst and new engineer from asking the same questions.

                ## Milestones
                1. The twenty most queried tables chosen for documentation.
                2. Each column described with meaning, units, allowed values and what null means.
                3. Descriptions stored as database comments or generated documentation, not a separate wiki page.
                4. A monthly pass that documents every column added since the last one.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every column in the twenty most queried tables has a description, and new columns are documented within a month of being added."
                cadence: rolling
              tasks:
                - "Pick the twenty most queried tables from statement statistics"
                - "Ask the agent to draft column descriptions from the code that writes them"
                - "Store reviewed descriptions as column comments in a migration"
                - "Document every column added since the last pass @recurring(monthly:5)"
            - name: Deprecated column and table retirement register
              description: |-
                ## Purpose
                Columns that nobody writes any more stay in the schema for years because removing them feels risky, and they confuse every new reader. A register of deprecated columns and tables, each with the date it stopped being written and the date it may be dropped, turns removal into a routine instead of an act of courage.

                ## Milestones
                1. Every column and table believed unused listed with evidence and an owner.
                2. A deprecation date and a drop date set for each, at least one release apart.
                3. Application code confirmed to no longer read or write each item before its drop date.
                4. Drops carried out in reviewed migrations and removed from the register.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A retirement register exists and at least three deprecated columns or tables have been dropped through it within six months."
                cadence: rolling
              tasks:
                - "Search the codebase for each suspected unused column"
                - "Add each candidate to the register with a drop date"
                - "Check the register and drop items whose date has passed @recurring(monthly:27)"
                - "Rename a column with a deprecated suffix before dropping it if unsure"
            - name: Normalisation practice on your own tables
              description: |-
                ## Purpose
                Repeated groups of columns, values copied between tables and update anomalies are the commonest modelling mistakes, and they are easiest to see once you can name the normal forms. Working through first, second and third normal form on three real tables from your own schema teaches the rules far better than a textbook example.

                ## Milestones
                1. Functional dependencies written out for three real tables.
                2. Each table checked against first, second and third normal form, with violations named.
                3. A normalised redesign sketched for one table, with the migration it would need.
                4. A note of one place where staying denormalised is the right call, and why.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three real tables are analysed against third normal form in writing, with one redesign sketched and its migration outlined."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read a short explanation of first, second and third normal form"
                - "Write the functional dependencies for your widest table"
                - "Mark each violation and the anomaly it would cause"
                - "Sketch the normalised version and the migration to reach it"
            - name: Reading query plans to choose indexes
              description: |-
                ## Purpose
                Guessing at indexes leads to a schema full of ones that never get used, while reading the plan shows exactly where the database scans, sorts and estimates wrongly. Practising on real queries from your application until sequential scans, index scans, nested loops and hash joins are familiar is the skill behind every good indexing decision.

                ## Milestones
                1. Ten real queries explained with actual timings, not just estimates.
                2. Each plan annotated with the node that costs the most and why.
                3. Two cases found where row estimates were badly wrong, and the cause noted.
                4. One index added or removed based on what a plan showed, with before and after timings.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten annotated query plans are saved and at least one index decision is backed by before and after plan timings."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Run EXPLAIN with actual timings on one slow application query"
                - "Annotate the most expensive node in the plan"
                - "Explain one production query plan and note what it shows @recurring(weekly:thu)"
                - "Compare plan output before and after adding a candidate index"
            - name: Composite and covering index design
              description: |-
                ## Purpose
                Column order in a multi-column index decides which queries it can serve, and many teams build three single-column indexes where one well-ordered composite would do. Learning the leftmost prefix rule, when to put equality before range columns, and when including extra columns lets the database skip the table entirely, turns indexing from trial and error into design.

                ## Milestones
                1. The leftmost prefix rule tested with a composite index on a test table.
                2. Equality-then-range ordering demonstrated with timed queries.
                3. A covering index built for one hot query and the table lookups confirmed gone from the plan.
                4. Two redundant single-column indexes replaced by one composite in a real schema.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One real query is served by a new composite or covering index with timings recorded, and redundant indexes it replaces are dropped."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Build a test table with a million rows and a composite index"
                - "Time queries that use and skip the index's leading column"
                - "Design a covering index for the most frequent read query"
                - "Replace two overlapping indexes with one composite in a migration"
            - name: Locks and transactions during schema changes
              description: |-
                ## Purpose
                A migration that adds a column can block every query on a table if it waits behind one long transaction, and that is how a two-second change becomes a ten-minute outage. Understanding which DDL statements take which locks in your database, and using lock timeouts, is what lets you change a busy schema during the working day.

                ## Milestones
                1. The lock levels taken by common DDL statements in your database written in a reference table.
                2. A lock queue reproduced on a test database with one long transaction and one ALTER.
                3. A lock timeout and statement timeout standard set for all migrations.
                4. Transactional versus non-transactional DDL behaviour noted for your database engine.

                ## Notes
                PostgreSQL wraps most DDL in transactions; MySQL commits implicitly around DDL. Know which one you have before relying on a migration rolling back cleanly.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A lock reference for common DDL is written and every migration runs with an agreed lock timeout set."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the DDL statements your migrations used last quarter"
                - "Look up the lock each one takes in your database's documentation"
                - "Reproduce a blocked ALTER behind an open transaction on a test database"
                - "Add a default lock timeout to the migration tool's configuration"
            - name: Modelling many-to-many and polymorphic relationships
              description: |-
                ## Purpose
                Join tables that grow their own attributes, and polymorphic columns that point at one of several tables with no foreign key, are where many schemas lose integrity. Practising the alternatives, from a proper join entity to exclusive arcs and separate link tables per type, gives you options other than the pattern your ORM suggests by default.

                ## Milestones
                1. A join table modelled as a named entity with its own attributes and a composite unique key.
                2. Three ways of modelling a polymorphic association compared on integrity and query cost.
                3. One existing polymorphic column in your schema assessed against the alternatives.
                4. A recommendation written for how the team models these relationships from now on.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written comparison of polymorphic modelling options exists, with a recommended pattern applied to one real relationship."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find every type and id column pair in the schema"
                - "Model one of them as separate link tables with foreign keys"
                - "Model the same one as an exclusive arc with a check constraint"
                - "Write the team's recommended pattern in the modelling guide"
            - name: Partial, expression and unique index techniques
              description: |-
                ## Purpose
                Some of the most useful indexes are the less obvious ones: a unique index that only applies to rows not soft deleted, an index on a lower-cased email, an index covering only the five percent of orders still open. Learning these turns business rules into guarantees and keeps indexes small.

                ## Milestones
                1. A partial index built on a status column and its size compared with a full index.
                2. An expression index created for case-insensitive lookups and confirmed used in the plan.
                3. A partial unique index enforcing uniqueness among active rows only.
                4. One real case in your schema replaced with one of these techniques.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "At least one partial or expression index is in production, with plan output showing it is used and its size recorded."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Find a query that filters on a rare status value"
                - "Build a partial index for it and compare sizes"
                - "Create an expression index for case-insensitive email lookups"
                - "Enforce uniqueness among active rows with a partial unique index"
            - name: Check constraints for business rules
              description: |-
                ## Purpose
                Rules like quantity is never negative, end date follows start date or a refunded order has a refund amount are often enforced in one code path and broken in another. Moving the simplest of them into check constraints, or domain types where your database supports them, means every writer obeys them, including the one-off script someone runs at midnight.

                ## Milestones
                1. Ten business rules listed that are enforced only in application code.
                2. The rules that depend on a single row turned into named check constraints.
                3. Existing violations found and fixed before each constraint is validated.
                4. Rules that span rows or tables documented as staying in the application, with the reason.

                ## Notes
                On large tables, add the constraint as not yet validated, then validate it separately, so the long check does not hold a heavy lock.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "At least five business rules are enforced by named check constraints in production, with no existing rows violating them."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Search the validation code for rules about a single row's values"
                - "Count existing rows that would break each rule"
                - "Add the first constraint unvalidated, then validate it separately"
                - "Record which rules stay in application code and why"
            - name: Modelling trees and hierarchies
              description: |-
                ## Purpose
                Categories, organisation charts, comment threads and folder structures all need hierarchies, and the naive parent_id column makes questions like all descendants slow and awkward. Comparing adjacency lists with recursive queries, closure tables and materialised paths on your own data shows which one fits your read and write pattern.

                ## Milestones
                1. One hierarchy in your product chosen, with its depth and the questions asked of it listed.
                2. Adjacency list with recursive queries, closure table and materialised path each prototyped.
                3. Read and write cost of each measured on realistic data volume.
                4. A choice recorded for this hierarchy, with the conditions that would change it.
              priority: low
              frontmatter:
                mode: learning
                output_kind: decision
                success_criteria: "Three hierarchy models are prototyped with timings on realistic data and a recorded choice for one real hierarchy."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the queries the product asks of its main hierarchy"
                - "Write a recursive query for all descendants on the current table"
                - "Prototype a closure table with the same data"
                - "Record the chosen model and the reason in a decision record"
            - name: Expand and contract migrations for zero downtime
              description: |-
                ## Purpose
                Renaming a column or changing its type in one step breaks every running instance of the old code during a deploy. The expand and contract pattern adds the new shape, writes to both, backfills, moves reads, and only then removes the old shape, so each step is safe with old and new code running side by side.

                ## Milestones
                1. The five steps of expand and contract written down with a worked example from your schema.
                2. One real rename or type change carried through all steps without a maintenance window.
                3. Each step shipped as a separate deploy, with the gap between them recorded.
                4. The pattern added to the migration review checklist for breaking changes.

                ## Notes
                Reads and writes to both shapes need to live in code for at least one full release, so that a rollback of the application never meets a schema it cannot use.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One column rename or type change has reached production through separate expand, migrate and contract deploys with no downtime recorded."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Pick one pending rename or type change to use as the first case"
                - "Ship the new column and dual writes as the first deploy"
                - "Backfill and switch reads to the new column"
                - "Drop the old column after a full release cycle has passed"
            - name: Batched backfills on large tables
              description: |-
                ## Purpose
                One UPDATE across fifty million rows holds locks, floods replication and can fill the disk with transaction log. Writing backfills as small, resumable batches with a pause between them, run outside the migration itself, lets you change data at production scale while the application keeps serving traffic.

                ## Milestones
                1. A reusable backfill script that processes rows by key range in fixed-size batches.
                2. Progress stored so an interrupted backfill resumes where it stopped.
                3. Batch size and pause tuned while watching replication lag and lock waits.
                4. One real backfill completed with its duration and peak replica lag recorded.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A resumable batched backfill has run on a table of over a million rows in production without replica lag passing the agreed limit."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write a backfill that updates one key range per batch"
                - "Store the last processed key so the job can resume"
                - "Watch replica lag during a trial run and tune the batch size"
                - "Keep backfills out of schema migrations and run them as jobs"
            - name: Soft delete versus hard delete decision
              description: |-
                ## Purpose
                Soft delete through a deleted_at column looks like a free undo button, but it leaks into every query, breaks unique constraints and keeps personal data you may be obliged to erase. Deciding table by table whether to soft delete, hard delete or move rows to an archive table, with reasons, avoids the half-applied pattern most schemas end up with.

                ## Milestones
                1. Every table with a soft delete flag listed, with how often deleted rows are actually restored.
                2. A rule written for when soft delete, hard delete or archive tables apply.
                3. Unique constraints on soft-deleted tables fixed to ignore deleted rows.
                4. Privacy obligations for erased data checked against the chosen approach.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written deletion policy covers every table with a soft delete flag, and each has either a filtered unique index or a reason it does not need one."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List tables with a deleted flag or deleted_at column"
                - "Count how many soft-deleted rows were restored in the last year"
                - "Write the deletion policy with one example per approach"
                - "Replace one unused soft delete with an archive table"
            - name: JSON columns versus normalised tables
              description: |-
                ## Purpose
                JSON columns are quick to add and painful to query, constrain and migrate once the shape inside them hardens. Writing down when a document column is the right tool, such as truly variable attributes or stored third-party payloads, and when its contents should graduate into real columns, stops the schema from turning into a key-value store by accident.

                ## Milestones
                1. Every JSON or document column listed with the keys actually used inside it.
                2. Keys that are filtered, joined or sorted on identified as candidates for real columns.
                3. A rule agreed for when new JSON columns are acceptable.
                4. One frequently queried key promoted to a typed column with a migration.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded rule on JSON columns exists and at least one frequently queried JSON key has been promoted to a typed, indexed column."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Sample each JSON column and list the keys in use"
                - "Find queries that filter or sort on keys inside JSON"
                - "Write the rule for when a JSON column is acceptable"
                - "Promote the most queried key to its own column"
            - name: Enumerated values in lookup tables, enums or checks
              description: |-
                ## Purpose
                Status and type columns can be native enums, check constraints on text or foreign keys to lookup tables, and each choice makes adding a new value easy or awkward later. Picking a default per situation, based on how often values change and whether they carry their own attributes, saves a painful migration when the business adds a seventh order status.

                ## Milestones
                1. Every status and type column listed with how it is constrained today.
                2. The three approaches compared on adding values, removing values and storing labels.
                3. A default chosen, with the cases where a lookup table is required.
                4. Unconstrained status columns given a constraint under the new rule.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision record sets the default for enumerated columns and every status column in the schema has some constraint on its values."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Query the distinct values in each status and type column"
                - "Compare native enums, check constraints and lookup tables"
                - "Write the default and its exceptions in a decision record"
                - "Add a constraint to the first unconstrained status column"
            - name: Splitting an oversized table into focused tables
              description: |-
                ## Purpose
                Most schemas have one table with eighty columns where half are null for most rows, every feature adds a few more, and every migration on it is risky. Splitting it into a core table and focused extension tables by domain or by how often columns change makes it cheaper to read, safer to alter and easier to understand.

                ## Milestones
                1. The widest table's columns grouped by domain, null rate and write frequency.
                2. A target design with a core table and one to three extension tables.
                3. The first group of columns moved using expand and contract.
                4. The original table's column count and average row size recorded before and after.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least one group of columns has moved from the widest table to a new table in production, with before and after row size recorded."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Calculate the null rate of every column in the widest table"
                - "Group its columns by domain and write frequency"
                - "Sketch the core table and extension tables"
                - "Move the first column group behind dual writes"
            - name: Adding constraints to large live tables safely
              description: |-
                ## Purpose
                Adding NOT NULL, a foreign key or a unique index to a table with a hundred million rows can lock it for minutes if done the obvious way. Each database has a safer path, such as building the index concurrently or adding a constraint unvalidated and validating it later, and learning it on one real table makes the next one routine.

                ## Milestones
                1. A target constraint chosen on one of the largest tables.
                2. Existing violations found and fixed with a batched backfill.
                3. The constraint added using the low-lock method for your database, with timings recorded.
                4. The method written up as a recipe in the migration guide.

                ## Notes
                Test the whole sequence on a restored production copy first; lock behaviour on a small staging table tells you very little.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A NOT NULL, foreign key or unique constraint is live on a table of over ten million rows, added without blocking writes for more than a second."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Choose the most valuable missing constraint on a large table"
                - "Count and fix the rows that would violate it"
                - "Rehearse the low-lock sequence on a restored production copy"
                - "Write the recipe into the migration guide"
            - name: Deliberate denormalisation with a sync rule
              description: |-
                ## Purpose
                Copying a customer's name onto every order or keeping a running total on an account can be the right call for read speed, but only if everyone knows the copy exists and how it is kept in step. Writing down each denormalised value, what it copies, how it is updated and how drift is detected turns a hidden liability into a managed trade-off.

                ## Milestones
                1. Every denormalised or cached column listed with its source of truth.
                2. An update mechanism named for each: trigger, application code or scheduled job.
                3. A reconciliation query for each that counts rows out of step with the source.
                4. Any denormalisation without a clear read benefit scheduled for removal.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every denormalised column has a named source and update mechanism, and weekly reconciliation shows zero rows out of step for a month."
                cadence: rolling
              tasks:
                - "List columns that copy or summarise data from another table"
                - "Name the update mechanism for each copy"
                - "Write a reconciliation query for each denormalised column"
                - "Run the reconciliation queries and log any drift @recurring(weekly:mon)"
            - name: Schema design review before a feature launch
              description: |-
                ## Purpose
                New features often arrive with tables designed in a hurry the week before launch, and changing them afterwards means migrating live customer data. A review of the proposed schema a few weeks ahead, against the naming, type, key and constraint rules and the expected data volume, catches the expensive mistakes while they are still free to fix.

                ## Milestones
                1. The proposed tables, columns and indexes written up with expected row counts at one year.
                2. The design checked against the naming, type, key and constraint standards.
                3. The feature's main queries listed and each matched to an index.
                4. Review comments resolved and the final design merged before the launch date.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written schema review for the feature is completed and its comments resolved at least two weeks before launch."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the feature team for their draft tables and expected volumes"
                - "Check the draft against the naming and type standards"
                - "Match each of the feature's main queries to an index"
                - "Agree the final design and merge the migrations before launch"
            - name: Database major version upgrade compatibility check
              description: |-
                ## Purpose
                Major database upgrades change defaults, remove deprecated types and alter how some queries are planned, and the schema is where many of those surprises surface. Checking release notes against your schema, then running migrations and the slowest queries on the new version ahead of the upgrade date, turns a risky night into a routine change.

                ## Milestones
                1. Release notes for every version between current and target read for schema-affecting changes.
                2. Deprecated types, functions and extensions used by the schema listed with replacements.
                3. All migrations run from scratch on the target version without error.
                4. The twenty heaviest queries compared for plan changes on the new version.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Migrations and the twenty heaviest queries have run on the target version with differences recorded, before the scheduled upgrade date."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Read the release notes for each major version being skipped"
                - "Search the schema for deprecated types and extensions"
                - "Run the full migration history on the target version"
                - "Compare plans for the heaviest queries on old and new versions"
            - name: Personal data map and erasure design for a privacy review
              description: |-
                ## Purpose
                Privacy laws in many countries give people a right to have their data erased, and answering that well depends on knowing which columns hold personal data and how deletion cascades. Mapping personal data in the schema and designing erasure or anonymisation paths before an audit or customer questionnaire arrives is far easier than doing it under a deadline.

                ## Milestones
                1. Every column holding personal data tagged with its category and retention need.
                2. An erasure path written for each table: delete, anonymise or retain with a legal reason.
                3. A test erasure run end to end on a copy of production for one fictional user.
                4. The map reviewed with whoever handles privacy compliance for your organisation.

                ## Notes
                Retention periods and lawful reasons to keep data are legal questions; confirm them with your privacy or legal adviser rather than deciding in the schema.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A personal data map covers every table, and a test erasure for one user has run on a production copy with results recorded."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Tag columns that hold names, contact details, identifiers or locations"
                - "Write the erasure path for each table holding personal data"
                - "Run a test erasure for a fictional user on a production copy"
                - "Re-check the personal data map against new tables @recurring(yearly)"
            - name: Schema change freeze plan for a peak period
              description: |-
                ## Purpose
                Peak trading days, a funding demo or year-end close are the worst times for a migration to lock a table. Agreeing a freeze window, landing pending schema work before it, and defining what counts as an emergency change keeps the database stable when the business most needs it.

                ## Milestones
                1. Freeze start and end dates agreed with product and operations.
                2. Every pending migration either merged before the freeze or deferred until after.
                3. An emergency change rule naming who can approve a migration during the freeze.
                4. Index and capacity headroom checked on the busiest tables before the freeze starts.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The freeze window passes with no unplanned schema change, and any emergency change has a recorded approval."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Agree the freeze dates with product and operations"
                - "List open pull requests that contain migrations"
                - "Name the approver for emergency schema changes"
                - "Check the busiest tables for missing indexes before the freeze"
            - name: Destructive migration rehearsal on a production copy
              description: |-
                ## Purpose
                Dropping a table, rewriting a key or merging two tables cannot be undone by a down migration, so the only safe plan is one you have already run. Rehearsing the full change on a restored copy of production, with timings, a verified backup and a written go or no-go point, turns an irreversible step into a controlled one.

                ## Milestones
                1. A restored copy of production with the same data volume and indexes.
                2. The destructive migration run end to end, with duration and lock waits recorded.
                3. A backup taken and a restore of the affected tables tested before the real run.
                4. A runbook with the go or no-go checkpoint signed off by a second engineer.

                ## Notes
                Start from the **Risk register** template to record what could go wrong and the mitigation for each.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The destructive migration has run successfully on a production copy, with timings, a tested restore and a signed-off runbook before the live run."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Restore a recent production backup to an isolated server"
                - "Run the destructive migration on the copy and time each step"
                - "Restore the affected tables from backup to prove recovery works"
                - "Write the runbook with an explicit go or no-go checkpoint"
            - name: Multi-tenant schema model decision
              description: |-
                ## Purpose
                Software sold to many customers has to decide whether tenants share tables with a tenant column, get a schema each or get a database each, and the choice shapes isolation, cost and migrations for years. Comparing the models against your expected tenant count, isolation needs and largest tenant's size gives a decision you will not regret at customer two hundred.

                ## Milestones
                1. Shared tables, schema per tenant and database per tenant compared on isolation, cost, migration time and noisy neighbours.
                2. A model chosen, with the conditions under which a large tenant would move to its own database.
                3. Tenant ID added to every tenant-owned table and to the leading column of its main indexes, if sharing tables.
                4. Row-level security or a query guard in place so a missing tenant filter fails safely.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded tenancy model exists and every tenant-owned table either carries an indexed tenant ID or lives in a per-tenant schema or database."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Estimate tenant count and the largest tenant's data size in two years"
                - "Compare the three tenancy models in a short table"
                - "Add row-level security or a query guard for tenant filtering"
                - "Search recent queries for any missing a tenant filter @recurring(monthly:18)"
            - name: Lean schema for a solo developer's first product
              description: |-
                ## Purpose
                Working alone, you do not need a data dictionary or a review board, but you do need the few decisions that are expensive to reverse: keys, time handling, money types and a migration tool. Setting those in a single evening before the first table exists lets you move fast without inheriting your own mess six months later.

                ## Milestones
                1. Primary key type, timestamp handling and money representation chosen in one page.
                2. A migration tool set up from the first commit, with no manual schema changes.
                3. Foreign keys and NOT NULL used from the first table.
                4. Daily automated backups switched on and one restore tested.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page schema decisions note exists, every table is created by migration, and one backup restore has been tested."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write one page choosing keys, time handling and money types"
                - "Set up the migration tool before creating the first table"
                - "Turn on automated backups with the hosting provider"
                - "Restore one backup to a local database to prove it works"
            - name: Inheriting an undocumented schema with no constraints
              description: |-
                ## Purpose
                Taking over a database where nothing is documented, nothing is constrained and the original author has left is common and stressful. A staged plan, first learning what the data really contains, then protecting it with the cheapest constraints, then improving structure, lets you make it safer without breaking the code that depends on its quirks.

                ## Milestones
                1. Data profiled for the twenty busiest tables: null rates, distinct values and duplicate keys.
                2. Implicit relationships found from naming and code, listed with orphan counts.
                3. A remediation plan ranking constraints and fixes by risk and effort.
                4. The first three constraints added and a backup and restore tested.

                ## Notes
                Start from the **Remediation plan** template. Resist renaming anything in the first month; learn what reads each column first.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written remediation plan exists for the inherited schema and its first three constraints are live in production."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Take and test a full backup before changing anything"
                - "Profile null rates and duplicates in the twenty busiest tables"
                - "Ask the agent to list implicit relationships from the application's queries"
                - "Draft the remediation plan ranked by risk and effort"
            - name: Keeping control of the schema while using an ORM
              description: |-
                ## Purpose
                Object-relational mappers make tables easy to create and easy to get wrong: missing indexes on foreign keys, generic string lengths, cascade rules set by default and migrations nobody reads. Treating generated migrations as drafts to review, and writing raw SQL where the ORM cannot express what you need, keeps the database designed rather than accidental.

                ## Milestones
                1. Default ORM settings for string length, nullability, cascades and key types reviewed and overridden where wrong.
                2. Every generated migration read as SQL before merge.
                3. Foreign key columns created by the ORM checked for matching indexes.
                4. A short guide saying when to hand-write migration SQL instead of generating it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "ORM defaults are configured to match the schema standards and every foreign key column created by it has an index."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the ORM's defaults for strings, nulls, keys and cascades"
                - "Override the defaults that contradict the schema standards"
                - "Print the SQL of the last five generated migrations and review it"
                - "Find foreign key columns without indexes"
            - name: Append-only history tables for audited records
              description: |-
                ## Purpose
                Payments, approvals, medical or legal records and account balances often need a full history of every change, not just the current row. Designing append-only history or ledger tables, where rows are inserted and never updated, gives an audit trail that the application cannot quietly rewrite.

                ## Milestones
                1. Tables needing a change history identified with the questions auditors ask of them.
                2. A history design chosen: trigger-written history table, ledger of events or both.
                3. Update and delete permissions removed from the history tables for the application role.
                4. A query that reconstructs any record's state at a past date tested and saved.

                ## Notes
                Check with your compliance or legal contact which records must be kept and for how long; the schema should implement their answer, not guess it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An append-only history table exists for at least one audited record type, the application role cannot update or delete it, and a point-in-time query works."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List the records auditors or customers ask for history on"
                - "Choose between trigger-written history and an event ledger"
                - "Revoke update and delete on history tables for the application role"
                - "Verify the history tables have no updated or deleted rows @recurring(monthly:16)"
            - name: Reporting tables alongside the transactional schema
              description: |-
                ## Purpose
                Analysts running heavy reporting queries on the transactional schema slow the application and fight a design built for writes. A small set of reporting tables, refreshed on a schedule and shaped as facts and dimensions, gives reports what they need without bending the core schema to fit them.

                ## Milestones
                1. The ten most requested reports listed with the tables they read today.
                2. A simple star design with one fact table and its dimensions sketched for the top report.
                3. Reporting tables built on a replica or a separate schema and refreshed on a schedule.
                4. The top report moved to the reporting tables with its run time compared.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least one report runs from scheduled reporting tables instead of the transactional schema, with its run time before and after recorded."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Ask analysts for their ten most used reports"
                - "Sketch a fact table and dimensions for the top report"
                - "Build the reporting tables in a separate schema on a replica"
                - "Check that the reporting tables refreshed on schedule @recurring(weekly:fri)"
            - name: Table partitioning by time or key
              description: |-
                ## Purpose
                Event, log and transaction tables that only ever grow become slow to vacuum, index and archive once they reach hundreds of millions of rows. Declarative partitioning by month or by key range lets the database skip irrelevant partitions and lets you drop old data as a cheap metadata change instead of a huge delete.

                ## Milestones
                1. A candidate table chosen, with its growth rate and the column most queries filter on.
                2. A partition scheme and size chosen and tested for partition pruning in query plans.
                3. Existing data moved into the partitioned table with a cutover plan.
                4. Creation of future partitions and dropping of expired ones automated.

                ## Notes
                Primary keys and unique constraints on partitioned tables usually must include the partition key; check your database's rules before you design around them.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One large table is partitioned in production, plans show partition pruning on its main queries and future partitions are created automatically."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Pick the fastest-growing append-mostly table"
                - "Test partition pruning on a copy with monthly partitions"
                - "Plan the cutover of existing rows into the partitioned table"
                - "Check that next month's partitions exist @recurring(monthly:25)"
            - name: Temporal and bitemporal data modelling
              description: |-
                ## Purpose
                Prices, contracts, insurance cover and employee records often need to answer two questions: what was true on a date, and what did we believe was true on that date. Modelling validity periods, and where needed the time a fact was recorded, with range types and exclusion constraints, makes those questions answerable in a single query.

                ## Milestones
                1. One entity chosen where history of validity matters to the business.
                2. Valid-from and valid-to columns or a range type added, with overlaps prevented by constraint.
                3. A second time axis for when each fact was recorded added if corrections must be traceable.
                4. Point-in-time queries for both axes written and tested.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One entity is modelled with validity periods that the database prevents from overlapping, and point-in-time queries return correct results in tests."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Choose an entity whose past values the business asks about"
                - "Model its validity period with a range type or two columns"
                - "Add a constraint that prevents overlapping periods"
                - "Write and test a query for the state on a given past date"
            - name: Online schema change tools for very large tables
              description: |-
                ## Purpose
                On tables with billions of rows, even well-behaved DDL can take hours, and some engines rebuild the whole table for a simple change. Online schema change tools copy the table in the background and swap it in, and knowing how they handle triggers, foreign keys and replication lag is what lets you change the biggest tables without a maintenance window.

                ## Milestones
                1. The online change tools available for your engine compared on triggers, foreign keys and throttling.
                2. One tool run against a restored production copy of the largest table.
                3. Throttling set from replica lag and the copy time measured.
                4. A runbook for online changes, including how to abort and clean up.

                ## Notes
                Rehearse the abort path as carefully as the success path; a half-finished copy left behind can fill the disk.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An online schema change has been rehearsed on a copy of the largest table, with copy time, lag behaviour and an abort procedure written in a runbook."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List the online schema change tools that support your engine"
                - "Check how each handles foreign keys and triggers"
                - "Run a test change on a restored copy of the largest table"
                - "Write the runbook including the abort and clean-up steps"
---

# Database Schema Design

This area is for engineers who own a relational database and want its schema to keep data correct, keep queries fast and still be easy to change in two years. It starts with foundations (an entity map of what you have, naming rules, key and data type decisions, a migration workflow and referential integrity), moves through the operating routines that catch drift, orphan rows, unused indexes and bloat, then the modelling and indexing skills worth practising. After that come improvements such as expand and contract migrations and safe backfills, dated events such as a feature launch or a major version upgrade, situations from multi-tenancy to an inherited schema with no constraints, and the specialist work of partitioning, temporal history and online schema change on very large tables.

What repeats is a weekly look at slow queries and denormalised copies, monthly checks on indexes, drift, table growth, orphans, the data dictionary and retiring columns, and a quarterly schema health review with a rollback rehearsal. The Operational checklist, Metrics log, Remediation plan and Risk register templates pair with the projects that keep those records. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
