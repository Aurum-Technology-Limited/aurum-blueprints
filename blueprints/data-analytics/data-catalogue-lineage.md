---
id: data-analytics.data-catalogue-lineage
name: Data Catalogue & Lineage
description: "A searchable catalogue of datasets and columns, lineage from source system to dashboard, a documentation standard with coverage routines, and certified data people can find and trust."
category: business
version: 1.0.0
tags: [data-analytics, data-catalogue-lineage, enterprise, engineer, team, metadata, data-lineage, business-glossary]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - operational-checklist
    - risk-register
    - vendor
    - onboarding-plan
  pillars:
    - name: Data & Analytics
      emoji: "📊"
      description: "Turning data into decisions: metrics and dashboards, data pipelines and warehouses, experimentation, forecasting and modelling, machine learning, data quality and governance."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Data Catalogue & Lineage
          description: "Documenting datasets, columns and their upstream sources in a searchable catalogue so people can find and trust the right data."
          projects:
            - name: Catalogue scope and pilot domain choice
              description: |-
                ## Purpose
                Catalogues fail most often by trying to document everything at once and finishing nothing. Choosing one domain, such as finance or orders, and the systems in scope for the first release (the warehouse, the transformation layer, the main BI tool) gives a finish line you can reach in a quarter and a group of real users to test it on.

                ## Milestones
                1. A written scope naming the systems the first release will ingest and those it will not.
                2. One pilot domain chosen, with the reason it was picked over the alternatives.
                3. Five to ten pilot users named from that domain, including at least one sceptic.
                4. A target date for the pilot release agreed with the sponsor.

                ## Notes
                Pick the domain where people already argue about which table is right. That pain makes adoption much easier.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page scope names the systems in and out of the first release, the pilot domain and its pilot users, and is signed off by the sponsor."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every system that holds data people search for today"
                - "Write down which systems the first release will and will not cover"
                - "Choose the pilot domain and note why it won"
                - "Name the pilot users and invite them to a kick-off"
            - name: Audit of existing data documentation
              description: |-
                ## Purpose
                Most organisations already have documentation, just spread across wiki pages, a data dictionary spreadsheet, transformation YAML files, BI tool descriptions and the heads of two long-serving analysts. Finding and sorting it before buying or building anything shows what can be imported, what is out of date and what was never written.

                ## Milestones
                1. A list of every place dataset descriptions currently live, with an owner and last edit date for each.
                2. Each source rated as import, rewrite or discard.
                3. The tables most often asked about in chat channels noted as documentation gaps.
                4. A one-page summary of findings shared with the pilot sponsor.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every existing documentation source is listed and rated import, rewrite or discard, with a findings summary shared with the sponsor."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Search the wiki for pages that describe tables or columns"
                - "Collect any data dictionary spreadsheets and note when each was last edited"
                - "Rate each documentation source as import, rewrite or discard"
                - "Search team chat for repeated questions about where data lives and log the tables named"
                - "Ask the agent to summarise the gaps into a one-page findings note"
            - name: Catalogue tool shortlist and selection
              description: |-
                ## Purpose
                The options run from the catalogue built into your warehouse or cloud platform, through open-source tools you host yourself, to commercial catalogues with automated lineage. Scoring three candidates against the connectors you actually need, lineage depth, search quality, hosting effort and price stops the decision being made on a polished demo alone.

                ## Milestones
                1. Requirements written: connectors for every in-scope system, lineage depth needed, hosting constraints and budget.
                2. Three candidates shortlisted, at least one of them built-in or open-source.
                3. The leading candidate tested against your own warehouse metadata in a proof of concept.
                4. A decision recorded with scores, total cost over three years and the main risk accepted.

                ## Notes
                Start from the **Purchase decision** template. Ask every vendor to show lineage on one of your real, messy pipelines rather than their sample data.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on the catalogue tool, with three scored options, a three-year cost estimate and proof-of-concept results on your own metadata."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "List the connectors the tool must have for every in-scope system"
                - "Shortlist three catalogue options including one built-in or open-source"
                - "Run a two-week proof of concept on the pilot domain with the leading option"
                - "Score each option and estimate three-year cost including hosting staff time"
                - "Record the decision and the reasons the other options lost"
            - name: Automated metadata ingestion from the warehouse
              description: |-
                ## Purpose
                Hand-typed table lists go stale within weeks. Connecting the catalogue to the warehouse's information schema, the transformation project and the BI tool on a schedule means new tables, renamed columns and dropped views appear without anyone remembering to add them.

                ## Milestones
                1. A read-only service account for the catalogue, scoped to metadata and query history.
                2. Scheduled ingestion running for the warehouse, transformation project and BI tool.
                3. Scratch, staging and personal schemas listed and filtered out of ingestion.
                4. Row counts, last-modified dates and owners pulled in wherever the source exposes them.

                ## Notes
                Filter out personal sandboxes and temporary schemas from the start. Thousands of throwaway tables bury the real ones in search.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Scheduled ingestion runs nightly for the warehouse, transformation project and BI tool, with scratch and personal schemas excluded."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Create a read-only metadata service account for the catalogue"
                - "Configure warehouse ingestion and set it to run nightly"
                - "Add the transformation project and BI tool as ingestion sources"
                - "Exclude scratch, staging and personal schemas from ingestion"
            - name: Minimum documentation standard per dataset
              description: |-
                ## Purpose
                Without an agreed minimum, one table gets three paragraphs and the next gets nothing. A short standard listing the fields every catalogued dataset must carry (a plain description, owner, refresh schedule, grain, known caveats and a tier) gives contributors a clear bar and lets you measure coverage.

                ## Milestones
                1. A one-page standard listing required and optional fields for tables and columns.
                2. A worked example of a fully documented table that meets the standard.
                3. Stricter requirements set for tier-one datasets than for everything else.
                4. The standard agreed with the pilot domain and published inside the catalogue.

                ## Notes
                Grain, the sentence saying what one row represents, is the field people skip and the one analysts need most.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A published documentation standard with required fields per tier and one worked example, agreed by the pilot domain."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Draft the list of required fields for a catalogued table"
                - "Write one table's documentation to the standard as the worked example"
                - "Agree stricter requirements for tier-one datasets"
                - "Publish the standard as a page inside the catalogue"
                - "Revisit the standard with regular contributors each January @recurring(yearly)"
            - name: Catalogue editor roles and curation rights
              description: |-
                ## Purpose
                If anyone can edit anything, descriptions drift; if only the data team can, nothing gets written. Setting up roles in the catalogue tool, such as viewer, contributor, domain curator and administrator, puts editing power with the people who know the data while keeping one curator accountable for each domain's pages.

                ## Milestones
                1. Roles defined with what each can edit, approve and delete.
                2. A curator assigned in the tool for every in-scope domain, taken from the existing ownership register.
                3. Single sign-on groups mapped to catalogue roles so access follows job changes.
                4. Edit history switched on so any description change can be traced to a person.

                ## Notes
                Who owns a dataset is decided under data governance. The catalogue records that decision; it does not make it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every in-scope domain has a curator assigned in the catalogue, roles map to sign-on groups and edit history is enabled."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down what viewers, contributors, curators and admins can each do"
                - "Map single sign-on groups to the catalogue roles"
                - "Assign a curator in the tool for each in-scope domain"
                - "Review who holds curator and admin rights in the catalogue @recurring(quarterly)"
            - name: Most-used tables documented first
              description: |-
                ## Purpose
                A small share of tables answers most of the questions people ask. Ranking tables by query count and distinct users over the last 90 days, then documenting the top 25 to the standard, gives pilot users something useful on day one instead of an empty catalogue.

                ## Milestones
                1. A ranked list of tables by query count and distinct users from the warehouse query history.
                2. The top 25 tables documented to the minimum standard.
                3. Each of those tables reviewed by someone who queries it weekly.
                4. Low-use tables with names confusingly close to popular ones flagged.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The 25 most-used tables by distinct users are documented to the standard and each has been reviewed by a regular user."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Query the warehouse history for the 25 tables with the most distinct users"
                - "Document the first five tables to the standard this week"
                - "Ask a regular user of each table to review its description"
                - "Flag near-duplicate tables that could be mistaken for the popular ones"
                - "Rerun the usage ranking to catch newly popular tables @recurring(quarterly)"
            - name: Hand-traced lineage for one critical report
              description: |-
                ## Purpose
                Before trusting automated lineage, trace one report people care about, such as the monthly revenue figure in the board pack, by hand from chart to source system. The exercise shows how many hops really exist, where spreadsheets or manual uploads break the chain, and what a tool must capture to be worth having.

                ## Milestones
                1. One critical report chosen, with its owner's agreement.
                2. Every hop from the chart back to the source application drawn, including manual steps.
                3. Breaks in the chain, such as spreadsheet uploads or copied queries, marked on the drawing.
                4. The hand-drawn map compared with whatever lineage the catalogue tool generated.

                ## Notes
                Keep the drawing. It becomes the test case for judging every lineage tool and every later update.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A complete hand-drawn lineage map for one leadership report exists, with manual breaks marked and differences from the tool's lineage listed."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pick one report that leadership relies on and name its owner"
                - "Trace each field in the report back through models to source tables"
                - "Mark every manual step or spreadsheet in the chain"
                - "Compare the hand-drawn map with the tool's generated lineage"
            - name: Domain, tier and tag taxonomy for the catalogue
              description: |-
                ## Purpose
                Tags are how people filter thousands of tables down to the right ten, but free-for-all tagging produces 'finance', 'Finance' and 'fin' within a month. A controlled list of domains, tiers and a small set of tags, with a rule for adding new ones, keeps the filters useful.

                ## Milestones
                1. A fixed list of business domains that matches how the organisation talks about itself.
                2. A tier scheme defined in one sentence per tier, with tier one meaning decision-grade data.
                3. A controlled tag list of no more than 30 tags, each with a definition.
                4. A rule for proposing new tags, with a named approver.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A published taxonomy of domains, tiers and at most 30 defined tags is applied in the catalogue, with a named approver for new tags."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List business domains in the words people already use"
                - "Define two or three dataset tiers in one sentence each"
                - "Merge duplicate and misspelled tags into one controlled list"
                - "Remove tags that no dataset has used in the last quarter @recurring(quarterly)"
            - name: Pilot release to the first user group
              description: |-
                ## Purpose
                Ten real users in a pilot find the problems a launch to five hundred would only amplify: search that returns staging tables first, descriptions written in engineer shorthand, a login that does not work for finance. Running the pilot for four weeks with a short feedback loop decides what must be fixed before a wider launch.

                ## Milestones
                1. The pilot users given access and a 30-minute walkthrough.
                2. Each user set three real questions to answer using only the catalogue.
                3. Feedback collected and grouped into must-fix and later.
                4. A go or no-go decision for the wider launch recorded with the sponsor.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A four-week pilot ends with grouped feedback, must-fix items resolved or scheduled, and a recorded go or no-go decision."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Book a 30-minute walkthrough with the pilot users"
                - "Give each pilot user three real questions to answer using the catalogue"
                - "Group pilot feedback into must-fix and later"
                - "Record the go or no-go decision for the wider launch"
            - name: New table registration check
              description: |-
                ## Purpose
                Tables arrive in the warehouse every week, and the moment to document one is while the person who built it still remembers why. A short check added to the pull request template, plus a weekly sweep, catches new tier-one tables that arrived without a description or owner.

                ## Milestones
                1. Catalogue fields added to the transformation project's pull request checklist.
                2. A saved catalogue view listing tables created in the last seven days without a description.
                3. A weekly sweep running, with gaps sent back to each table's author.
                4. Fewer than five undocumented new tier-one tables outstanding at any time.

                ## Notes
                Start from the **Operational checklist** template.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every week new tables are swept, and no more than five new tier-one tables are undocumented at any one time."
                cadence: rolling
              tasks:
                - "Add catalogue fields to the pull request template checklist"
                - "Save a catalogue filter for tables created in the last seven days"
                - "Send undocumented new tables back to their authors @recurring(weekly:mon)"
                - "Keep a running count of undocumented new tier-one tables"
            - name: Monthly documentation coverage report
              description: |-
                ## Purpose
                Coverage is the number that tells you whether the catalogue is getting better or quietly rotting. Reporting the share of tier-one tables and columns that meet the standard, by domain, each month gives curators a target and the sponsor a figure they can follow.

                ## Milestones
                1. A coverage query or catalogue report for tables and columns by domain and tier.
                2. A baseline figure recorded for the first month.
                3. A target agreed, such as 90 percent of tier-one tables fully documented.
                4. The report reaching curators and the sponsor every month.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A coverage figure by domain and tier is published every month against a recorded baseline and an agreed tier-one target."
                cadence: rolling
              tasks:
                - "Build a coverage query that counts documented tables by domain and tier"
                - "Record the first month's coverage as the baseline"
                - "Agree a tier-one coverage target with the sponsor"
                - "Send the coverage report to curators and the sponsor @recurring(monthly:5)"
            - name: Quarterly description freshness review
              description: |-
                ## Purpose
                Descriptions written two years ago that still say 'excludes refunds' after refunds were added are worse than no description at all. Sending each curator the tier-one pages not edited in twelve months, with a quick confirm-or-fix request, keeps the catalogue honest without a full rewrite.

                ## Milestones
                1. A report listing tier-one descriptions untouched for twelve months or more.
                2. Each curator sent their list with a two-week window to respond.
                3. Every listed page confirmed, corrected or marked as needing review.
                4. A last-reviewed date visible on each tier-one page.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter every tier-one page older than twelve months is confirmed, corrected or flagged, and shows a last-reviewed date."
                cadence: rolling
              tasks:
                - "List tier-one pages not edited in the last twelve months"
                - "Send each curator their stale pages with a two-week window @recurring(quarterly)"
                - "Add a last-reviewed date field to tier-one pages"
                - "Mark pages that nobody confirms as needing review"
            - name: Catalogue questions channel and answer rota
              description: |-
                ## Purpose
                People will ask questions the catalogue does not yet answer, and if those questions vanish into private messages the next person asks again. One public channel with a weekly rota of answerers, and a rule that every answer is written back into the catalogue, turns questions into documentation.

                ## Milestones
                1. One public channel or form for data questions, linked from the catalogue home page.
                2. A weekly rota of answerers drawn from the data team and curators.
                3. A rule that each answer lands on the relevant catalogue page before the question is closed.
                4. Questions open longer than three working days chased every week.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Data questions go through one public channel with a published rota, and answered questions are reflected on catalogue pages."
                cadence: rolling
              tasks:
                - "Create one public channel for data questions and link it from the catalogue"
                - "Publish an answer rota covering the next two months"
                - "Copy each answer into the relevant catalogue page before closing the question"
                - "Chase questions open for more than three working days @recurring(weekly:wed)"
            - name: Metadata ingestion health check
              description: |-
                ## Purpose
                When an ingestion job fails silently, the catalogue keeps showing last month's schema and people stop trusting it. A weekly look at crawler runs, error counts and the newest table each source has picked up catches expired credentials and changed connectors before users notice.

                ## Milestones
                1. Ingestion run status and error counts for every source visible in one place.
                2. An alert to the catalogue owner when a scheduled run fails twice in a row.
                3. A short fix log kept for ingestion failures and their causes.
                4. Every in-scope source showing a successful run within its expected schedule.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every in-scope source shows a successful ingestion run within its schedule, and repeated failures alert a named owner."
                cadence: rolling
              tasks:
                - "Collect ingestion run statuses for every source into one view"
                - "Set an alert for two consecutive failed ingestion runs"
                - "Check each source's last successful ingestion and newest table @recurring(weekly:tue)"
                - "Log each ingestion failure with its cause and fix"
            - name: Deprecation notices and sunset banners
              description: |-
                ## Purpose
                Old tables linger because nobody knows whether anyone still uses them, and analysts keep building on them because nothing says not to. Marking deprecated datasets with a banner, a replacement and a removal date, then using lineage to warn downstream owners, makes retirement predictable.

                ## Milestones
                1. A deprecated status and banner configured, with fields for replacement and removal date.
                2. Downstream dashboards and models of each deprecated table identified from lineage.
                3. Owners of those downstream assets notified with the replacement and date.
                4. Deprecations due for removal reviewed every month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every deprecated dataset carries a banner with replacement and removal date, and its downstream owners have been notified."
                cadence: rolling
              tasks:
                - "Configure a deprecated status with replacement and removal date fields"
                - "Use lineage to list downstream assets of each deprecated table"
                - "Notify downstream owners with the replacement and removal date"
                - "Review deprecations due for removal this month @recurring(monthly:20)"
            - name: Catalogue search and usage review
              description: |-
                ## Purpose
                Searches that return nothing are a to-do list written by your users. Reviewing failed searches, the most viewed pages and the pages with no views each month shows which terms need synonyms, which datasets to document next and which pages nobody needs.

                ## Milestones
                1. Search and page view analytics switched on in the catalogue.
                2. A monthly list of the top 20 zero-result searches.
                3. Each zero-result term resolved by a synonym, a new page or a note that the data does not exist.
                4. Monthly active users tracked against the number of people with access.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The top 20 zero-result searches are reviewed monthly and each is resolved or explained, with active users tracked over time."
                cadence: rolling
              tasks:
                - "Switch on search and page view analytics in the catalogue tool"
                - "Pull the top 20 zero-result searches @recurring(monthly:12)"
                - "Add a synonym or page for each zero-result search worth answering"
                - "Chart monthly active catalogue users against users with access"
            - name: Quarterly lineage accuracy spot check
              description: |-
                ## Purpose
                Automated lineage misses things: dynamic SQL, Python jobs, manual uploads and tools without a connector. Checking five lineage graphs against the code each quarter gives an error rate, and knowing it lets people judge how far to trust the graph.

                ## Milestones
                1. Five lineage graphs picked at random each quarter, at least two of them tier-one.
                2. Each graph compared against the actual code and job definitions.
                3. Missing and false edges logged with their cause.
                4. A current accuracy figure published on the catalogue's lineage help page.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Five lineage graphs are checked against code every quarter and the resulting accuracy figure is published on the help page."
                cadence: rolling
              tasks:
                - "Pick five lineage graphs at random including two tier-one datasets @recurring(quarterly)"
                - "Compare each graph against the code and job definitions"
                - "Log missing and false edges with their cause"
                - "Publish the current lineage accuracy on the help page"
            - name: Certified dataset badge and renewal
              description: |-
                ## Purpose
                Six tables turn up when someone searches for revenue, and a certified badge tells them which one the business stands behind. Defining what certification requires (meets the standard, passes quality tests, has a named owner, reviewed within a year) and renewing it yearly keeps the badge meaningful.

                ## Milestones
                1. Written certification criteria published in the catalogue.
                2. A certification request and approval step run by the domain curator.
                3. The first ten datasets certified against the criteria.
                4. Every certification set to expire after twelve months unless renewed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Certification criteria are published, at least ten datasets carry the badge, and every badge expires within twelve months unless renewed."
                cadence: cyclic
              tasks:
                - "Write the criteria a dataset must meet to be certified"
                - "Set up a request and approval step with domain curators"
                - "Certify the first ten datasets that meet the criteria"
                - "Renew or withdraw each certification on its anniversary @recurring(yearly)"
            - name: Monthly catalogue changelog for data users
              description: |-
                ## Purpose
                Changes such as new certified tables, deprecations, renamed columns and fixed lineage only help if people hear about them. A short monthly changelog, posted where analysts already read, keeps users coming back to the catalogue and makes removals less of a surprise.

                ## Milestones
                1. A changelog page in the catalogue with a consistent format.
                2. Monthly entries covering new, certified, deprecated and removed datasets.
                3. Each changelog posted in the main analyst channel.
                4. Users shown how to follow the datasets they rely on, where the tool supports it.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A changelog covering new, certified, deprecated and removed datasets is posted in the analyst channel every month."
                cadence: rolling
              tasks:
                - "Create a changelog page with sections for new, certified and deprecated data"
                - "Ask the agent to draft the changelog from the month's catalogue edits"
                - "Post the changelog in the main analyst channel @recurring(monthly:28)"
                - "Show users how to follow the datasets they rely on"
            - name: Table, column and job-level lineage explained
              description: |-
                ## Purpose
                Lineage comes at different depths. Table-level shows that a dashboard reads from orders, column-level shows that its margin field comes from two source columns, and job-level shows which scheduled task moves the data. Knowing what each level answers, and what it costs to capture, stops a team paying for column lineage it never uses or lacking it where an auditor will ask.

                ## Milestones
                1. The three levels of lineage explained in your own words with an example from your warehouse.
                2. Ten real user questions each matched to the lineage level that answers it.
                3. A view on which pipelines need column-level lineage and which are fine at table level.
                4. A short explainer posted on the catalogue's help page.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A lineage explainer with one example of each level from your own pipelines is published, along with a list of pipelines needing column lineage."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read your catalogue tool's documentation on lineage levels"
                - "Write one example of each lineage level from your own pipelines"
                - "Match ten real user questions to the lineage level that answers them"
                - "Post a short lineage explainer on the catalogue help page"
            - name: OpenLineage events and integrations
              description: |-
                ## Purpose
                OpenLineage is an open standard that describes runs, jobs and datasets as events, and many orchestrators and processing engines can emit it. Learning the event model and running it on one job in a test environment shows whether it can fill the lineage gaps your catalogue's built-in connectors leave.

                ## Milestones
                1. The run, job and dataset parts of an event understood, including what facets carry.
                2. A test environment where one orchestrated job emits events to a lineage backend.
                3. The emitted lineage compared with the catalogue's own view of the same job.
                4. A written recommendation on whether to adopt it for production jobs.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One test job emits OpenLineage events to a backend, and a one-page adoption recommendation is written from the results."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Read the specification overview of runs, jobs and datasets"
                - "Install the integration for your orchestrator in a test environment"
                - "Run one job and inspect the events it emits"
                - "Write a one-page recommendation on adopting OpenLineage"
            - name: How query-log lineage parsing works and fails
              description: |-
                ## Purpose
                Many catalogues build lineage by parsing the SQL in the warehouse's query history. Understanding how that parsing works explains why lineage breaks on temporary tables, stored procedures, select-star queries and SQL built at run time, and helps the team write SQL the tools can follow.

                ## Milestones
                1. The lineage method (query log, code parsing or runtime events) identified for each source.
                2. Five queries from your own history tested to see which produce correct lineage.
                3. A list of SQL patterns known to break lineage in your setup.
                4. Guidance on patterns to avoid added to the team's SQL style notes.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A tested list of SQL patterns that break lineage in your setup is written into the team's SQL style notes."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find out whether each lineage source uses query logs, code or runtime events"
                - "Run five queries with known inputs and check the lineage they produce"
                - "List the SQL patterns that broke lineage in your tests"
                - "Add lineage-safe patterns to the team's SQL style notes"
            - name: Writing table and column descriptions people use
              description: |-
                ## Purpose
                Most catalogue descriptions restate the column name, as in 'customer_id is the customer ID'. A good description says what one row means, where the value comes from, when it is null and what trips people up, and practising on ten real columns with a reviewer from outside the data team builds the habit quickly.

                ## Milestones
                1. Five rules for a useful description written down, such as stating grain, units and null meaning.
                2. Ten real column descriptions rewritten using the rules.
                3. Each rewrite checked by someone outside the data team who says whether it answered their question.
                4. Before and after examples added to the documentation standard.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Ten rewritten column descriptions have been tested by a non-specialist reader and the best pairs added to the documentation standard."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Collect ten column descriptions that only restate the column name"
                - "Rewrite each one stating meaning, source, units and null behaviour"
                - "Ask a colleague outside the data team to test the rewrites"
                - "Add the best before and after pairs to the documentation standard"
            - name: Technical, business and operational metadata
              description: |-
                ## Purpose
                Every catalogue page mixes three kinds of metadata: technical (types, partitions, schemas), business (meaning, owner, glossary term) and operational (freshness, run history, usage). Knowing which arrive automatically and which need a person to write them tells you where curator time goes and what to automate next.

                ## Milestones
                1. Each field on a typical catalogue page classified as technical, business or operational.
                2. Fields marked as automatic, partly automatic or manual.
                3. Manual fields that another system could fill listed.
                4. Curator effort estimated for the manual fields across tier-one datasets.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A classified list of catalogue fields shows which are manual, with an hours estimate for curating them across tier-one data."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every field shown on a typical catalogue page"
                - "Classify each field as technical, business or operational"
                - "Mark which fields fill automatically and which need a person"
                - "Estimate curator hours for manual fields across tier-one data"
            - name: Catalogue API for scripted metadata updates
              description: |-
                ## Purpose
                Clicking through the interface to update 300 table descriptions is how documentation efforts stall. Learning the catalogue's API, or its command-line client, lets engineers bulk-load descriptions, sync curators from another system and pull metadata into reports.

                ## Milestones
                1. API access set up with a scoped token in a test environment.
                2. A script that reads one dataset's metadata and prints it.
                3. A script that updates descriptions in bulk from a reviewed file.
                4. The scripts stored in version control with a short readme.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Version-controlled scripts can read metadata and bulk-update descriptions through the catalogue API in a test environment."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Request a scoped API token for the catalogue's test environment"
                - "Write a script that reads one dataset's metadata"
                - "Extend it to update descriptions in bulk from a reviewed file"
                - "Commit the scripts to version control with a short readme"
            - name: Impact analysis before a schema change
              description: |-
                ## Purpose
                Before renaming a column or dropping a table, lineage can list every model, dashboard and export that reads it. Practising the full routine on a planned change (find downstream assets, count their users, contact their owners, schedule the change) makes it habit before a careless rename breaks the board pack.

                ## Milestones
                1. One planned schema change chosen as the practice case.
                2. Every downstream asset listed from lineage, with its owner and recent usage.
                3. Owners notified with the change date and what they need to do.
                4. The change made with no unplanned breakages and the routine written up as a checklist.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One schema change ships with every downstream owner notified beforehand, and the routine is written as a reusable checklist."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Pick a column rename or table removal that is already planned"
                - "List every downstream asset from lineage with its owner and usage"
                - "Message each owner with the change date and the action needed"
                - "Write the routine up as a short impact analysis checklist"
            - name: Column-level lineage for tier-one pipelines
              description: |-
                ## Purpose
                Table-level lineage says a dashboard depends on orders; column-level says its discount field comes from a source column that is about to change type. Rolling column lineage out for tier-one pipelines first, where audits and incidents cluster, gets most of the value without paying to parse everything.

                ## Milestones
                1. Tier-one pipelines listed with the lineage depth each has today.
                2. Column-level lineage enabled or configured for those pipelines.
                3. Column lineage for three critical metrics checked by hand against the code.
                4. Gaps where column lineage cannot be captured noted on each dataset page.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All tier-one pipelines show column-level lineage, three critical metrics have been verified by hand and remaining gaps are noted on their pages."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List tier-one pipelines and the lineage depth each has today"
                - "Enable column-level lineage for the tier-one pipelines"
                - "Check column lineage for three critical metrics against the code"
                - "Note on each page where column lineage cannot be captured"
            - name: Business glossary terms linked to catalogue columns
              description: |-
                ## Purpose
                Glossaries on their own are lists of definitions; linked to the columns that hold each concept, they let someone search 'active customer' and land on the right field. Linking the terms the business has already agreed to physical tables and columns joins the business vocabulary to the warehouse.

                ## Milestones
                1. Fifty glossary terms entered or imported, each with a short definition and where that definition was agreed.
                2. Each term linked to the columns and tables that hold it.
                3. Terms with no physical home flagged for the data team.
                4. A request route for new terms, reviewed every month.

                ## Notes
                How a metric is calculated is settled with its owner before it goes in the glossary. The catalogue's job is to connect the agreed term to the data.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least fifty agreed glossary terms are linked to the columns that hold them, with unlinked terms flagged for the data team."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Import the agreed business terms into the catalogue glossary"
                - "Link each term to the columns and tables that hold it"
                - "Flag terms that no table currently holds"
                - "Review new glossary term requests with domain curators @recurring(monthly:16)"
            - name: Lineage extended to BI dashboards
              description: |-
                ## Purpose
                Lineage that stops at the warehouse cannot answer the question people ask most: which dashboards break if this table changes? Connecting the BI tool's metadata, including the queries behind each chart, carries lineage through to the reports people actually look at.

                ## Milestones
                1. The BI tool connected so dashboards, charts and their datasets appear in the catalogue.
                2. Lineage from at least ten tier-one dashboards traced back to warehouse tables.
                3. Custom SQL charts that break lineage identified.
                4. Dashboard owners shown on the lineage graph.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Ten tier-one dashboards show lineage back to warehouse tables, with untraceable custom SQL charts listed."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Connect the BI tool's metadata API to the catalogue"
                - "Check lineage for ten tier-one dashboards back to warehouse tables"
                - "List charts built on custom SQL that the tool cannot trace"
                - "Show dashboard owners on the lineage graph"
            - name: Descriptions kept in version control and synced
              description: |-
                ## Purpose
                When descriptions live only in the catalogue's web editor, engineers forget them; when they live only in code, business users cannot add to them. Keeping technical descriptions in the transformation project, synced to the catalogue on each deploy, with business context added in the catalogue, gives each group the place they will actually write.

                ## Milestones
                1. A decision on which fields are owned in code and which in the catalogue.
                2. Descriptions from code synced to the catalogue on each production deploy.
                3. Conflicts between the two sources reported rather than silently overwritten.
                4. Contributors told which place to edit for each field.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Code-owned descriptions sync to the catalogue on every production deploy and a published guide says where each field is edited."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Decide which fields are edited in code and which in the catalogue"
                - "Configure the catalogue to pull descriptions on each production deploy"
                - "Set up a report of fields edited in both places"
                - "Post a short guide on where to edit each field"
            - name: Sensitivity classification tags in the catalogue
              description: |-
                ## Purpose
                People need to see at a glance whether a column holds email addresses, payment details or health information before they copy it into a spreadsheet. Tagging sensitive columns with the classification your privacy or governance team already set, and letting lineage carry the tags downstream, shows where personal data has spread.

                ## Milestones
                1. The organisation's existing sensitivity levels set up as catalogue tags.
                2. Automated classification run to suggest likely personal data columns.
                3. Suggestions confirmed or rejected by a curator for tier-one datasets.
                4. Tags propagated through lineage, with derived columns reviewed.

                ## Notes
                The catalogue shows the classification. The access rules that follow from it belong with the data governance and privacy owners.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every tier-one column with personal or sensitive data carries a confirmed classification tag, propagated to derived columns through lineage."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Set up the existing sensitivity levels as catalogue tags"
                - "Run the tool's classifier to suggest likely personal data columns"
                - "Confirm or reject each suggestion on tier-one datasets"
                - "Check newly ingested columns for untagged sensitive fields @recurring(monthly:9)"
            - name: Quality and freshness signals on catalogue pages
              description: |-
                ## Purpose
                Well-written descriptions mean little if the table failed its tests this morning. Pulling test results, last refresh time and open incidents from your existing quality tooling onto each catalogue page lets users judge trust in one place without switching tools.

                ## Milestones
                1. Last refresh time shown on every ingested table page.
                2. Test pass or fail status pulled in for tier-one tables.
                3. Open data incidents shown as a banner on affected tables and their downstream assets.
                4. Users told how to read the signals on the help page.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Tier-one catalogue pages show last refresh time, current test status and any open incident banner."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Show the last refresh time on every table page"
                - "Connect test results from the quality tooling to tier-one pages"
                - "Display open incidents as a banner on affected tables"
                - "Explain the trust signals on the catalogue help page"
            - name: Retiring the legacy data dictionary spreadsheet
              description: |-
                ## Purpose
                As long as the old spreadsheet exists, half the organisation will keep using it, and two sources of truth is one too many. Migrating its useful content, redirecting links and archiving it on a set date finishes the switch.

                ## Milestones
                1. Every row in the spreadsheet matched to a catalogue page or marked obsolete.
                2. Useful content not yet in the catalogue imported.
                3. Links to the spreadsheet in wikis and runbooks replaced with catalogue links.
                4. The spreadsheet made read-only with a pointer to the catalogue, then archived.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The legacy spreadsheet is read-only with a pointer to the catalogue, and no wiki or runbook links to it remain."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Match each spreadsheet row to a catalogue page or mark it obsolete"
                - "Import the useful content that is missing from the catalogue"
                - "Replace links to the spreadsheet in wikis and runbooks"
                - "Make the spreadsheet read-only with a pointer to the catalogue"
            - name: Search ranking, synonyms and popular results
              description: |-
                ## Purpose
                If a search for 'revenue' returns a staging table from three years ago first, people go back to asking in chat. Tuning ranking so certified and popular datasets rise, adding synonyms for the words the business uses and hiding deprecated assets by default makes the first page of results the right one.

                ## Milestones
                1. Ten common searches tested and their current top results recorded.
                2. Certified and frequently queried datasets boosted in ranking.
                3. A synonym list added for business terms and abbreviations.
                4. The same ten searches retested, with the right dataset in the top three for at least eight.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least eight of ten common searches return the intended dataset in the top three results after tuning."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Record the top results for ten common searches"
                - "Boost certified and frequently queried datasets in ranking"
                - "Add synonyms for common business terms and abbreviations"
                - "Hide deprecated assets from default search results"
            - name: Downstream impact report in pull requests
              description: |-
                ## Purpose
                Engineers rarely open the catalogue before merging a change, so bring the lineage to them. A continuous integration step that comments on each pull request with the downstream models, dashboards and owners affected by the changed tables makes impact visible at review time.

                ## Milestones
                1. A CI step that reads changed models and queries the catalogue's lineage API.
                2. A pull request comment listing affected downstream assets and their owners.
                3. Changes touching tier-one or certified assets flagged for an extra reviewer.
                4. The comment tested on five real pull requests.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every pull request to the transformation project gets an automated comment listing affected downstream assets and owners."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Prototype a script that lists downstream assets for a changed model"
                - "Add the script to CI so it comments on each pull request"
                - "Flag changes that touch certified assets for an extra reviewer"
                - "Test the comment on five recent pull requests"
            - name: Company-wide catalogue launch week
              description: |-
                ## Purpose
                After the pilot, a short, dated launch tells everyone at once that the catalogue is the place to look. A week with a demo, office hours, a challenge to find three datasets and visible backing from a senior sponsor gets far more first visits than a single announcement email.

                ## Milestones
                1. Launch date set and announced two weeks ahead by the sponsor.
                2. A 20-minute demo recorded and office hours booked for each day of the week.
                3. A find-the-data challenge with three questions answerable only through the catalogue.
                4. Week-one active users and searches recorded against the target.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Launch week runs on the announced date with a recorded demo and daily office hours, and week-one active users are measured against a target."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Agree the launch date and announcement with the sponsor"
                - "Record a 20-minute demo using the pilot domain"
                - "Book daily office hours for launch week"
                - "Write a three-question find-the-data challenge"
                - "Record active users and searches at the end of launch week"
            - name: Documentation sprint for one domain
              description: |-
                ## Purpose
                Backlogs of undocumented tables rarely shrink a little at a time. Two focused days with a domain's analysts and engineers, a clear list of target tables and someone checking quality as pages are written can lift coverage further than months of reminders.

                ## Milestones
                1. A list of 40 to 60 target tables with a named writer for each.
                2. Two days booked with the domain team and calendars cleared.
                3. Each page reviewed against the standard on the day it is written.
                4. Coverage before and after the sprint recorded and shared.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A two-day sprint documents at least 40 tables to the standard, with domain coverage before and after recorded."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Choose the domain and list 40 to 60 target tables"
                - "Book two days with the domain's analysts and engineers"
                - "Assign a writer and a reviewer to each target table"
                - "Share coverage before and after the sprint"
            - name: Lineage evidence pack for a regulated report
              description: |-
                ## Purpose
                Regulators and auditors increasingly ask how a reported figure was produced, whether under banking risk reporting principles, a financial statement audit or a data protection inquiry. Building an evidence pack for one regulated report, with lineage, the control at each hop and change history, prepares you before the request arrives.

                ## Milestones
                1. The regulated report and its accountable owner identified, with the reviewer's likely questions listed.
                2. Full lineage from each reported figure back to source systems captured.
                3. The control or reconciliation at each hop documented.
                4. Change history for the main transformations collected.
                5. The pack reviewed by the compliance or audit lead.

                ## Notes
                Your compliance or legal team decides what a regulator needs. This pack organises the evidence they ask for; it does not decide what is sufficient.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An evidence pack with lineage, controls per hop and change history for one regulated report has been reviewed by the compliance or audit lead."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Confirm with compliance which report and figures the pack must cover"
                - "Export lineage from each reported figure back to source systems"
                - "Document the control or reconciliation at each hop"
                - "Collect change history for the key transformations"
                - "Book a review of the pack with the compliance or audit lead"
            - name: Catalogue and lineage through a platform migration
              description: |-
                ## Purpose
                Moving from one warehouse or BI tool to another breaks every ingestion connector and lineage edge at once, and descriptions written against old table names can be lost. Planning the catalogue side of the migration, with a mapping from old to new assets, means the documentation survives the move.

                ## Milestones
                1. A mapping from old to new tables, built from the migration plan.
                2. Descriptions, tags, curators and certifications transferred to the new assets.
                3. Ingestion and lineage connectors working on the new platform before cut-over.
                4. Old assets marked deprecated with links to their replacements.

                ## Notes
                Start from the **Risk register** template. The biggest risk is losing human-written descriptions, so export them before the old platform is switched off.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every migrated tier-one table keeps its description, tags and certification on the new platform, and old assets point to their replacements."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Export every human-written description, tag and curator from the old platform"
                - "Build the old-to-new table mapping with the migration team"
                - "Set up ingestion for the new platform before cut-over"
                - "Transfer descriptions and certifications using the mapping"
                - "Mark old assets deprecated with links to their replacements"
            - name: Catalogue tool contract renewal review
              description: |-
                ## Purpose
                Catalogue contracts often renew automatically and are priced on users or assets, both of which grow quietly. Reviewing usage, unused seats, missing features and the alternatives three months before renewal leaves time to negotiate or move.

                ## Milestones
                1. Renewal date and notice period recorded.
                2. Active users, asset counts and unused seats compared with the contract.
                3. Unmet requirements and support issues from the year listed.
                4. A renew, renegotiate or replace decision recorded before the notice date.

                ## Notes
                Start from the **Vendor** template.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A renew, renegotiate or replace decision is recorded each year before the notice date, backed by usage against contract figures."
                cadence: cyclic
              tasks:
                - "Record the renewal date and notice period in the vendor record"
                - "Compare active users and asset counts with the contract"
                - "List unmet requirements and support problems from the past year"
                - "Start the renewal review three months before the notice date @recurring(yearly)"
            - name: Bringing an acquired company's data into the catalogue
              description: |-
                ## Purpose
                After an acquisition, analysts need to find the other company's data long before systems are merged. Ingesting its warehouse as a separate domain, marking overlapping concepts such as customer and product, and documenting which side is authoritative for what avoids months of guessing.

                ## Milestones
                1. The acquired company's main data stores ingested as a separate domain.
                2. Their existing documentation imported or linked.
                3. Overlapping datasets mapped to their counterparts, with a note on which is authoritative for what.
                4. A contact named for each of their tier-one datasets.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The acquired company's tier-one datasets are in the catalogue as a separate domain, mapped to counterparts and each with a named contact."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Agree read-only metadata access to the acquired company's warehouse"
                - "Ingest their data stores as a separate catalogue domain"
                - "Map overlapping datasets to their counterparts"
                - "Name a contact for each of their tier-one datasets"
            - name: Lightweight catalogue for a small data team
              description: |-
                ## Purpose
                Three people with 80 tables do not need an enterprise catalogue. Generated documentation from the transformation tool, a short readme per schema and a single start-here page can cover most needs for little cost, and all of it can be imported into a full catalogue later.

                ## Milestones
                1. A generated documentation site published from the transformation project.
                2. A readme for each schema covering purpose, curator and main tables.
                3. A start-here page listing the ten tables most people need.
                4. A written trigger for moving to a dedicated tool, such as a table count or team size.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A generated docs site, a readme per schema and a start-here page are live, with a written threshold for adopting a dedicated tool."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Publish the transformation tool's generated documentation site"
                - "Write a short readme for each warehouse schema"
                - "Create a start-here page with the ten most needed tables"
                - "Write down the point at which a dedicated catalogue becomes worth it"
            - name: Federated catalogue across business units
              description: |-
                ## Purpose
                In a large organisation one central team cannot document every domain, and business units with their own data teams resist a single owner. A federated model, with a central team running the tool and standards while each unit curates its own domain, scales documentation without scaling headcount.

                ## Milestones
                1. A central team charter covering the tool, standards, ingestion and search.
                2. A named catalogue lead in each business unit.
                3. Domain spaces set up so each unit curates its own assets within shared standards.
                4. A monthly forum of catalogue leads that reviews coverage by unit.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every business unit has a named catalogue lead and its own domain space, and coverage by unit is reviewed at a monthly forum."
                cadence: rolling
              tasks:
                - "Write a one-page charter splitting central and unit responsibilities"
                - "Ask each business unit to name a catalogue lead"
                - "Set up a domain space for each unit with shared standards"
                - "Hold the catalogue leads forum with coverage by unit @recurring(monthly:23)"
            - name: New engineer's first week through the catalogue
              description: |-
                ## Purpose
                A new engineer's first questions are where data lives, what it means and what feeds it, exactly what the catalogue should answer. Building their first week around it tests the catalogue on someone with fresh eyes and shortens the time until they can ship a change safely.

                ## Milestones
                1. A first-week plan with five data-finding tasks to complete using the catalogue.
                2. A lineage walk-through of the pipeline they will work on first.
                3. Every question the new joiner could not answer from the catalogue logged.
                4. Those gaps documented before the next person joins.

                ## Notes
                Start from the **Onboarding plan** template.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A new engineer completes five catalogue-based tasks in week one and every unanswered question is documented before the next hire starts."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write five data-finding tasks for a new joiner to answer from the catalogue"
                - "Walk the new joiner through the lineage of their first pipeline"
                - "Log every question the catalogue could not answer"
                - "Document those gaps before the next person starts"
            - name: Answering where-does-this-number-come-from questions
              description: |-
                ## Purpose
                Finance or leadership will regularly ask why two reports disagree or where a figure comes from. A repeatable routine that starts at the dashboard, follows lineage to source and writes the answer onto the catalogue page turns a two-day investigation into an hour and leaves a trail for next time.

                ## Milestones
                1. A short written routine for tracing a figure from dashboard to source.
                2. Three past questions re-answered using the routine and lineage.
                3. Each answer written onto the relevant catalogue page.
                4. Time taken per question recorded to show whether it is shrinking.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A written tracing routine exists, three past provenance questions have been re-answered with it and answer times are being recorded."
                cadence: rolling
              tasks:
                - "Write the steps for tracing a figure from dashboard to source"
                - "Re-answer three past provenance questions using the routine"
                - "Add each answer to the relevant catalogue page"
                - "Record how long each provenance question takes to answer"
            - name: Inheriting an undocumented warehouse
              description: |-
                ## Purpose
                Taking over a warehouse nobody documented is common: the builder left, the tables have cryptic names and the only lineage is buried in old scripts. A first-90-days plan combining usage stats, automated lineage and interviews with heavy users gets the important parts written down before you start changing things.

                ## Milestones
                1. Usage stats used to separate live tables from dead ones.
                2. Automated lineage run over the code and query history.
                3. Five heavy users interviewed about the tables they rely on.
                4. Tier-one tables documented and a list of removal candidates agreed.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Within 90 days the inherited warehouse's tier-one tables are documented and a list of removal candidates is agreed with users."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Pull 90 days of query history to find which tables are still used"
                - "Run automated lineage over the code and query logs"
                - "Interview five heavy users about the tables they depend on"
                - "Document the tier-one tables and list removal candidates"
            - name: Cross-platform lineage stitching
              description: |-
                ## Purpose
                Real pipelines cross tools: an event stream lands in object storage, a Spark job reshapes it, the warehouse models it and a reverse sync pushes it to the CRM. Stitching lineage from each tool's emitter or connector into one graph, with consistent dataset naming so the joins line up, is what experienced platform teams build next.

                ## Milestones
                1. A dataset naming convention that every emitter and connector uses.
                2. Lineage captured from at least three platforms beyond the warehouse.
                3. One end-to-end graph from source event to downstream tool validated by hand.
                4. Unstitched hops listed with a plan for each.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One end-to-end lineage graph spanning at least three platforms beyond the warehouse is validated by hand, with remaining gaps planned."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Agree one dataset naming convention for all lineage sources"
                - "Turn on lineage emitters for the processing engine and orchestrator"
                - "Validate one end-to-end graph from source event to downstream tool"
                - "List the hops that still break and plan a fix for each"
            - name: Catalogue metadata to ground an AI data assistant
              description: |-
                ## Purpose
                Assistants that write SQL or answer data questions get things confidently wrong when they see only column names. Feeding them curated catalogue metadata (certified status, descriptions, grain, glossary links) and steering them away from deprecated tables makes their answers far more reliable, and shows which pages are too thin to help.

                ## Milestones
                1. A metadata export with descriptions, tiers, certification and glossary links for tier-one data.
                2. A test assistant or text-to-SQL tool configured to use only that export.
                3. Twenty real questions answered and scored for correct table choice.
                4. Thin pages behind wrong answers documented properly.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A test assistant grounded in catalogue metadata is scored on twenty real questions, and pages behind wrong answers are improved."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Export tier-one metadata with descriptions, certification and glossary links"
                - "Configure a test assistant to use only certified, documented tables"
                - "Score its table choice on twenty real data questions"
                - "Improve the catalogue pages behind each wrong answer"
            - name: Lineage completeness scoring by domain
              description: |-
                ## Purpose
                Once lineage exists, the next question is where it is missing. Scoring each domain on the share of tier-one assets with lineage back to a source system, and the share of edges confirmed by spot checks, turns 'lineage is patchy' into a number with a plan behind it.

                ## Milestones
                1. A definition of complete lineage for a tier-one asset.
                2. A report scoring each domain against that definition.
                3. Domains ranked, with the main cause of gaps noted for each.
                4. The score published each quarter beside documentation coverage.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A lineage completeness score per domain is published every quarter next to documentation coverage, with the main gap cause noted."
                cadence: cyclic
              tasks:
                - "Define what complete lineage means for a tier-one asset"
                - "Build a report scoring each domain against the definition"
                - "Note the main cause of lineage gaps in each domain"
                - "Publish the lineage score beside coverage figures @recurring(quarterly)"
---

# Data Catalogue & Lineage

This area is for the engineers, data teams and larger organisations who want people to find the right dataset, understand what it means and see where it came from. It starts with foundations (scope, a tool choice, automated ingestion, a documentation standard and the first lineage map), moves through the routines that keep a catalogue current and the lineage concepts worth learning properly, then covers improvements such as column-level and BI lineage, dated events like launch week and a platform migration, situations from a three-person team to a federated enterprise, and specialist work such as cross-platform lineage stitching.

The rhythms are weekly sweeps of new tables, ingestion runs and open questions, monthly coverage, search, deprecation, glossary, sensitivity tag and changelog routines, quarterly freshness, lineage accuracy and tag reviews, and yearly certification and contract renewals. The Purchase decision, Operational checklist, Risk register, Vendor and Onboarding plan templates pair with individual projects. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
