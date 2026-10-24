---
id: tech-certifications.data-platform-certifications
name: Data Platform Certifications
description: "A route to a Databricks, Snowflake or cloud data engineer credential: choosing the right exam, a guarded trial workspace, hands-on pipelines, timed practice, booking, exam day and where the badge fits a data career."
category: personal
version: 1.0.0
tags: [tech-certifications, data-platform-certifications, engineer, knowledge-worker, databricks, snowflake, data-engineering, exam-prep]
author: Aurum Technology
starter_structure:
  templates:
    - skills-matrix
    - purchase-decision
    - habit-tracker
    - metrics-log
    - portfolio-piece
  pillars:
    - name: Tech & Engineering Certifications
      emoji: "🏅"
      description: "Technical credentials and the exams behind them: FE and PE licensing, Chartered Engineer and Trinidad and Tobago engineering registration, PMP, PRINCE2 and Scrum, AWS, Azure and Google Cloud by level, Kubernetes and Terraform, networking and security certifications, Six Sigma belts, and coding, system design and machine-learning interviews."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Data Platform Certifications
          description: "Earning a data credential such as a Databricks, Snowflake or cloud data engineer exam: platform concepts, hands-on practice and how it fits a data career."
          projects:
            - name: Choosing which data platform credential to sit first
              description: |-
                ## Purpose
                Data credentials split by platform (Databricks, Snowflake, AWS, Microsoft Fabric, dbt) and by role (engineer, analyst, architect, machine learning), and the wrong first pick costs months on a platform your employer or target employers do not use. Choosing from job adverts and your current stack, rather than from whichever course is on sale, makes the first badge one that shows up in interviews.

                ## Milestones
                1. Twenty current job adverts for your target role read and the platforms they name tallied.
                2. Your current or likely employer's data stack written down in one line.
                3. A shortlist of two or three credentials with level, vendor and the role each one signals.
                4. One credential chosen as the first exam, with the reason in two sentences.

                ## Notes
                A credential on the platform you use at work is usually the fastest first pass, because the labs are your day job. Cross-cloud badges such as Databricks and Snowflake travel between employers better than one cloud's own data exam.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision names the first data credential, the two alternatives considered and the job advert tally behind the choice."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Save twenty job adverts for the data role you want next"
                - "Tally which platforms and credentials the adverts mention"
                - "List the data stack your team runs today in one line"
                - "Write down your chosen first credential and the reason"
            - name: Exam guide and current exam facts folder
              description: |-
                ## Purpose
                Every data vendor writes its exam from a published guide with domains and objectives, and vendors retire and rename exams often as platforms change: older Azure data engineer exams have been withdrawn and Databricks has renamed several features. A dated folder holding the current guide and the delivery rules keeps every course and practice set checked against the source.

                ## Milestones
                1. The current exam guide downloaded and saved with its version or code and today's date.
                2. Each domain and objective copied onto a one-page map with a tick column.
                3. Fee, duration, question format, validity period and retake rules noted from the vendor's own pages, with the date checked.
                4. Any platform features the guide names that your course does not cover listed.

                ## Notes
                Do not trust a fee, question count or pass mark from a forum or video; check the vendor's certification page and note the date you looked.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "One folder holds the dated exam guide, a one-page objective map and a dated note of fee, format, validity and retake rules taken from the vendor."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Download the current exam guide from the vendor's certification site"
                - "Copy every domain and objective onto one page with a tick column"
                - "Record the fee, format, validity and retake policy with today's date"
                - "Note guide topics your chosen course does not mention"
            - name: Skills audit against the exam objectives
              description: |-
                ## Purpose
                Most candidates already know some of the exam, such as SQL joins or loading files, and none of the rest, such as governance or streaming semantics. Rating yourself honestly against each objective before studying shows where the hours should go and stops you rewatching the parts you could already teach.

                ## Milestones
                1. Every objective rated from zero to three for knowledge and for hands-on practice.
                2. The five weakest objectives marked as priority study.
                3. Objectives you use at work tagged so labs can reuse real problems.
                4. The audit dated so it can be repeated before booking.

                ## Notes
                Start from the **Skills matrix** template. Rate hands-on separately from knowledge: many exams test whether you know which command or setting to use, not just the concept.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated skills matrix rates every exam objective for knowledge and practice and names the five weakest as priorities."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Copy the objective map into a skills matrix"
                - "Rate each objective for knowledge and hands-on practice"
                - "Mark the five weakest objectives as study priorities"
                - "Tag objectives you already meet in your day job"
            - name: Cold baseline practice test
              description: |-
                ## Purpose
                Sitting a practice test before any study feels pointless, but it is the only honest measure of your starting point and it shows the style of question the vendor writes. Scoring it by domain turns a vague worry into a number you can watch climb.

                ## Milestones
                1. One full-length practice test sat under timed conditions with no notes.
                2. The score recorded overall and by exam domain.
                3. Question styles noted, such as scenario, code reading or choose-two.
                4. The lowest two domains compared with the skills audit.

                ## Notes
                Use the vendor's official sample questions or practice exam where one exists; third-party banks vary widely in quality and some are out of date.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A timed baseline score is logged by domain, with the two weakest domains named and compared with the skills audit."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the vendor's official sample questions or practice exam"
                - "Sit the full test in one timed sitting without notes"
                - "Log the score overall and by domain"
                - "Compare the weakest domains with your skills audit ratings"
            - name: Guarded trial workspace that cannot run up a bill
              description: |-
                ## Purpose
                Trial credits on Databricks, Snowflake and the clouds disappear fast when a cluster or warehouse is left running over a weekend, and some trials roll into paid usage on a card. Setting auto-stop, spend alerts and a personal account separate from work before the first lab means you can practise freely without a surprise invoice.

                ## Milestones
                1. A free or trial workspace created under a personal email, separate from any employer account.
                2. Auto-termination or auto-suspend set to the shortest sensible idle time on every cluster and warehouse.
                3. A budget alert or resource monitor sending email at a low spend threshold.
                4. The trial end date and what happens after it written in your study calendar.

                ## Notes
                Never practise in your employer's production account. If work gives you a sandbox, confirm in writing what you may run there.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A personal trial workspace exists with auto-stop on all compute, a working spend alert and the trial end date recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Sign up for the platform's free or trial edition with a personal email"
                - "Set auto-stop on the default cluster or warehouse to its minimum"
                - "Create a budget alert or resource monitor at a low threshold"
                - "Write the trial end date and conversion terms in your calendar"
            - name: Lab repository with sample datasets
              description: |-
                ## Purpose
                Labs go faster when the data is already loaded and the notebooks or SQL files live in one versioned place. A small repository with two or three public datasets of different shapes, such as taxi trips, retail orders and a JSON event stream, gives every later lab realistic material and doubles as evidence for interviews.

                ## Milestones
                1. A git repository created with folders per exam domain.
                2. Three public datasets of different formats downloaded and documented with source and licence.
                3. The datasets loaded into the trial workspace as raw files or tables.
                4. A readme explaining how to rebuild the lab environment from scratch.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A versioned lab repository holds three documented datasets, loaded in the workspace, with a readme to rebuild everything."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Create a lab repository with one folder per exam domain"
                - "Pick three public datasets in CSV, Parquet and JSON"
                - "Load the datasets into the trial workspace"
                - "Write a readme on rebuilding the lab from nothing"
            - name: Dated study calendar to a target exam window
              description: |-
                ## Purpose
                Without a target window, data exam prep drifts for months while the trial expires and the exam version changes underneath you. Counting back from a realistic month, with each week assigned to objectives and a practice test slot, turns the guide into a plan you can fall behind on and notice.

                ## Milestones
                1. A target exam month chosen from your hours per week and the audit results.
                2. Every objective assigned to a study week, weakest ones earliest.
                3. Monthly practice test dates and a readiness gate date in the calendar.
                4. Two buffer weeks kept free for illness, work peaks or a weak domain.

                ## Notes
                Many working candidates manage six to ten hours a week. Plan for the hours you have, not the hours a bootcamp assumes.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A calendar assigns every objective to a week, shows monthly practice tests and a readiness gate, and keeps two buffer weeks."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Count the study hours you can honestly give each week"
                - "Choose a target exam month from those hours"
                - "Assign every objective to a week, weakest first"
                - "Block practice test dates, a readiness gate and two buffer weeks"
            - name: Study materials and course shortlist
              description: |-
                ## Purpose
                Vendors publish free learning paths and paid instructor courses, and third parties sell video courses and question banks of uneven quality. Picking one main course, one practice source and the official documentation, and checking each against the current guide, avoids paying for three overlapping courses and finishing none.

                ## Milestones
                1. The vendor's free learning path for the exam found and bookmarked.
                2. Two paid options compared on date updated, coverage of the current guide and price.
                3. One main course and one practice source chosen and bought or enrolled.
                4. Everything else parked on a later list.

                ## Notes
                Start from the **Purchase decision** template. A course last updated before the current exam version is a warning sign even if its reviews are good.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One main course and one practice source are chosen, each checked against the current exam guide, with the comparison recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the vendor's free learning path for your exam"
                - "Compare two paid courses on last update date and guide coverage"
                - "Enrol in one main course and one practice question source"
                - "Park every other resource on a later list"
            - name: Employer sponsorship and voucher request
              description: |-
                ## Purpose
                Many data teams pay for exams, and vendors and their partners regularly hand out discount or free vouchers through events, learning festivals and partner programmes. A short, specific request to your manager, tied to the platform the team runs, often covers the fee and buys protected study time too.

                ## Milestones
                1. Your employer's training or certification policy found and read.
                2. Current vendor voucher or discount routes checked, such as events or partner academies.
                3. A written request sent naming the exam, the cost, the study hours and the benefit to the team.
                4. The answer recorded, including any repayment clause if you leave.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A sponsorship request has been sent and answered, with any voucher code, study time and repayment terms written down."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read your employer's training and certification policy"
                - "Check the vendor's current voucher and discount routes"
                - "Ask the agent to draft a one-page sponsorship request for your manager"
                - "Record the outcome and any repayment clause"
            - name: Twice-weekly study block routine
              description: |-
                ## Purpose
                Two fixed evenings or mornings a week beat a heroic weekend every so often, because data exam content builds on itself and gaps compound. Protecting the same slots each week, each one aimed at a named objective from the calendar, is what actually gets candidates to the exam.

                ## Milestones
                1. Two weekly slots of at least an hour chosen and blocked in the calendar.
                2. Each slot starts with one named objective from the study calendar.
                3. Four consecutive weeks completed without dropping a slot.
                4. Missed slots moved to the buffer rather than skipped.

                ## Notes
                Start from the **Habit tracker** template if you like a visible streak. End every block by writing the next objective so the next session starts instantly.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two weekly study blocks have been kept for four consecutive weeks, each logged against a named objective."
                cadence: rolling
              tasks:
                - "Block two recurring one-hour study slots in your calendar"
                - "Study the objective named for this slot for one focused hour @recurring(weekly:tue,thu)"
                - "Pick next week's two objectives from the calendar @recurring(weekly:sun)"
                - "Move any missed slot into a buffer week"
            - name: Weekly lab built and torn down
              description: |-
                ## Purpose
                Hands-on recall is what data platform exams reward, and it belongs to people who have actually loaded a file, broken a pipeline and read the error. One lab a week that builds something small from scratch, then deletes it, gives hands-on recall that reading cannot, and keeps trial credit spend low.

                ## Milestones
                1. A lab list written with one lab per exam domain.
                2. One lab completed each week, with the code committed to the lab repository.
                3. Each lab ends with every cluster, warehouse or job it created stopped or dropped.
                4. A one-line note per lab on what surprised you.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "One lab per week has been committed to the repository for six weeks, each with compute torn down and a surprise noted."
                cadence: rolling
              tasks:
                - "Write a list of labs with one per exam domain"
                - "Build, run and tear down this week's lab @recurring(weekly:sat)"
                - "Commit the lab code with a one-line surprise note"
                - "Check no compute from the lab is still running"
            - name: Wrong-answer review log
              description: |-
                ## Purpose
                Wrong answers on practice questions are the most valuable study material you have, and most candidates glance at the explanation and move on. Logging each miss with the objective, why the right answer is right and why yours was wrong turns repeated traps, such as caching rules or role inheritance, into ones you never fall for again.

                ## Milestones
                1. A log with columns for question source, objective, your answer, correct answer and reason.
                2. Every missed practice question from the week logged.
                3. Repeat misses on the same objective flagged and fed into the study calendar.
                4. The log reread in full before the final fortnight.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A wrong-answer log covers every missed practice question with the objective and reason, and repeat misses are fed back into the calendar."
                cadence: rolling
              tasks:
                - "Set up a wrong-answer log with objective and reason columns"
                - "Log and explain every missed question from the week @recurring(weekly:fri)"
                - "Flag objectives that appear three times or more"
                - "Add flagged objectives to the next free study slot"
            - name: Trial credit and lab spend sweep
              description: |-
                ## Purpose
                Idle compute, forgotten scheduled jobs and storage left behind after labs quietly drain trial credits and, once a card is attached, real money. A short weekly sweep and a monthly reconciliation keep practice costs predictable and teach the cost controls exams like to ask about.

                ## Milestones
                1. A checklist of what to look for: running clusters, warehouses, scheduled jobs, tasks and large tables.
                2. A weekly sweep done with anything idle stopped or dropped.
                3. Monthly spend or credit use compared with the alert threshold.
                4. The trial conversion date rechecked each month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly sweeps leave no idle compute or scheduled jobs running, and monthly spend stays under the alert threshold."
                cadence: rolling
              tasks:
                - "Write a sweep checklist for clusters, warehouses, jobs and tasks"
                - "Stop idle compute and pause unneeded scheduled jobs @recurring(weekly:mon)"
                - "Reconcile the month's credit use against your alert threshold @recurring(monthly:3)"
                - "Recheck when the trial converts or expires"
            - name: Monthly timed practice test and score log
              description: |-
                ## Purpose
                Scores on a single practice test bounce around, but a monthly full test logged by domain shows a trend you can trust. Watching the weakest domain rise, or not, tells you whether the plan is working long before the exam fee is at risk.

                ## Milestones
                1. A score log with overall and per-domain columns started from the baseline.
                2. One full timed practice test sat each month under exam conditions.
                3. Per-domain scores logged the same day with the time taken.
                4. The study calendar adjusted after each test for the weakest domain.

                ## Notes
                Start from the **Metrics log** template. Rotate question sources so you are not scoring well because you remember answers.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The score log holds at least three monthly timed tests by domain, and the calendar records an adjustment after each."
                cadence: rolling
              tasks:
                - "Start a score log with the baseline result by domain"
                - "Sit a full timed practice test in one sitting @recurring(monthly:12)"
                - "Log the score by domain and adjust the calendar @recurring(monthly:13)"
                - "Switch to a fresh question source when scores plateau from recall"
            - name: Daily flashcards for syntax, limits and defaults
              description: |-
                ## Purpose
                Small facts fill data exams: which command optimises a Delta table, which Snowflake object stores a file, which retention or timeout applies by default. Ten minutes a day of spaced flashcards fixes these far better than rereading notes the week before.

                ## Milestones
                1. A spaced-repetition deck created, organised by exam domain.
                2. Five new cards added after each study block or lab.
                3. Daily reviews kept for thirty days.
                4. Cards you always get right suspended to keep reviews short.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A domain-tagged flashcard deck has been reviewed daily for thirty days, with new cards added after each study block."
                cadence: rolling
              tasks:
                - "Create a spaced-repetition deck with a tag per exam domain"
                - "Review the cards due today for ten minutes @recurring(daily)"
                - "Add five cards after each study block or lab"
                - "Suspend cards you have answered correctly for a month"
            - name: Platform release notes watch
              description: |-
                ## Purpose
                Databricks, Snowflake and the clouds ship features every month and rename products often, and exam guides catch up in jumps. A monthly skim of release notes keeps your vocabulary current, warns you when a feature in your course has been replaced and gives you something real to talk about in interviews.

                ## Milestones
                1. The release notes page for your platform bookmarked.
                2. A monthly note of changes that touch exam objectives.
                3. Renamed or deprecated features flagged against your course notes.
                4. One new feature tried in the lab each quarter.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly release note summaries for the platform are kept for three months, with renamed features flagged against course notes."
                cadence: rolling
              tasks:
                - "Bookmark the platform's official release notes page"
                - "Skim the month's release notes for exam-relevant changes @recurring(monthly:20)"
                - "Flag renamed or deprecated features in your course notes"
                - "Try one new feature in the lab this quarter"
            - name: Objective-tagged study notes repository
              description: |-
                ## Purpose
                Notes scattered across a course platform, a notebook and screenshots are useless in the final fortnight. Keeping short notes in one place, each tagged to an exam objective with a working code snippet, gives you a revision pack you built yourself and a reference for the job afterwards.

                ## Milestones
                1. One notes location chosen, ideally inside the lab repository.
                2. A note template with objective, key idea, snippet and common trap.
                3. Notes for every objective studied so far, each with a snippet that ran.
                4. A one-page index linking objectives to notes.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every studied objective has a tagged note with a tested snippet, reachable from a one-page index."
                cadence: rolling
              tasks:
                - "Choose one notes location inside the lab repository"
                - "Write a note template with objective, snippet and trap"
                - "Commit the week's notes with objective tags @recurring(weekly:sun)"
                - "Build a one-page index linking objectives to notes"
            - name: Quarterly exam version and retirement check
              description: |-
                ## Purpose
                Certification pages change without much fanfare: data vendors update exam guides, swap one exam for a new code or retire a credential with a few months' notice, and candidates mid-plan are the ones caught out. A quarterly look at the certification page tells you in time whether to sit the current version or plan for the new one.

                ## Milestones
                1. The certification page and any exam update announcements bookmarked.
                2. A quarterly check recorded with the date and the guide version seen.
                3. Any change compared with your objective map and gaps added to the calendar.
                4. A decision noted on whether to sit before or after a version change.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Quarterly dated checks of the exam guide version are recorded, and any change has a written sit-before or sit-after decision."
                cadence: rolling
              tasks:
                - "Bookmark the exam page and the vendor's update announcements"
                - "Check the exam guide version and retirement notices @recurring(quarterly)"
                - "Compare any new guide with your objective map"
                - "Decide whether to sit before or after a version change"
            - name: Spark DataFrame fundamentals for Databricks exams
              description: |-
                ## Purpose
                Databricks associate exams assume you can read and write PySpark or Spark SQL: selecting, filtering, joining, aggregating, handling nulls and writing results. Candidates from a pure SQL background often lose marks on lazy evaluation, partitions and the difference between transformations and actions.

                ## Milestones
                1. Reading CSV, JSON and Parquet into DataFrames with an explicit schema practised.
                2. Joins, aggregations, window functions and null handling written in both PySpark and Spark SQL.
                3. Lazy evaluation, actions and the query plan explained in your own notes.
                4. Twenty practice questions on Spark basics answered with at least four in five right.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Notes and committed labs cover DataFrame reads, joins, windows and lazy evaluation, and a 20-question Spark set scores at least 80 percent."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Read three file formats into DataFrames with explicit schemas"
                - "Write the same join and aggregation in PySpark and Spark SQL"
                - "Use explain on a query and note what the plan shows"
                - "Answer twenty Spark basics questions and log the misses"
            - name: Delta Lake tables, time travel and maintenance
              description: |-
                ## Purpose
                Delta Lake underpins most Databricks exam questions: ACID writes, MERGE for upserts, schema enforcement and evolution, time travel, and maintenance commands such as OPTIMIZE and VACUUM. Working through each on a real table, and seeing what VACUUM does to time travel, makes these questions easy marks.

                ## Milestones
                1. A managed and an external Delta table created and their differences noted.
                2. A MERGE upsert written and tested with inserts, updates and deletes.
                3. Time travel queries run by version and timestamp, then tested after VACUUM.
                4. OPTIMIZE, clustering or Z-ordering and table history explored on a table with many small files.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Committed labs show a MERGE upsert, time travel before and after VACUUM, and OPTIMIZE on a small-file table, each with notes."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Create one managed and one external Delta table"
                - "Write and test a MERGE that inserts, updates and deletes"
                - "Query an older table version, then run VACUUM and try again"
                - "Compact a small-file table and compare its history"
            - name: Medallion pipeline lab from raw files to gold tables
              description: |-
                ## Purpose
                The bronze, silver and gold pattern appears in Databricks exam scenarios and in most lakehouse jobs. Building one small pipeline with incremental ingestion such as Auto Loader, cleaning rules and a reporting table, first as notebooks and then as a declarative pipeline with quality expectations, joins the separate topics into one picture.

                ## Milestones
                1. Raw files ingested incrementally into a bronze table.
                2. A silver table with typed columns, deduplication and data quality checks.
                3. A gold aggregate table that a dashboard or SQL query could use.
                4. The same flow rebuilt as a declarative pipeline with expectations, and scheduled as a job.

                ## Notes
                Databricks has renamed its pipeline and orchestration products more than once. Use the names in your current exam guide when you write notes.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A committed bronze, silver and gold pipeline runs end to end on new files, with quality expectations and a scheduled job."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Drop raw files in a folder and ingest them incrementally to bronze"
                - "Clean, type and deduplicate into a silver table"
                - "Build a gold aggregate table for reporting"
                - "Rebuild the flow as a declarative pipeline with expectations"
            - name: Unity Catalog governance and permissions
              description: |-
                ## Purpose
                Governance questions catch out engineers who have only ever worked as an admin: the three-level namespace, grants on catalogs, schemas and tables, ownership, external locations and lineage. Setting up two users with different rights in a trial workspace shows how inheritance really behaves.

                ## Milestones
                1. The metastore, catalog, schema and table hierarchy drawn in your notes.
                2. Grants given and revoked at catalog, schema and table level for a second user or group.
                3. An external location and storage credential explained, even if not created.
                4. Lineage and audit features noted with what each shows.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Notes and a lab show grants tested at three levels for a second principal, plus a written explanation of external locations and lineage."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Draw the Unity Catalog object hierarchy in your notes"
                - "Grant and revoke access at catalog, schema and table level"
                - "Test what a second user can see after each change"
                - "Write a note on external locations and storage credentials"
            - name: Snowflake architecture, warehouses and caching
              description: |-
                ## Purpose
                SnowPro questions return again and again to the separation of storage and compute, virtual warehouse sizing and scaling, micro-partitions and the different caches. Running the same query on different warehouse sizes and watching the query profile makes the theory stick and explains cost questions.

                ## Milestones
                1. The three architecture layers and what each one does written in your notes.
                2. A query run on two warehouse sizes, with timing and credit use compared.
                3. Result cache, warehouse cache and metadata behaviour observed in the query profile.
                4. Multi-cluster scaling and auto-suspend settings explained against a workload example.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A lab note compares one query across two warehouse sizes and shows each cache type in the query profile."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write the three Snowflake architecture layers in your notes"
                - "Run one query on two warehouse sizes and compare time and credits"
                - "Rerun the query and inspect which cache served it"
                - "Note when multi-cluster scaling helps and when it does not"
            - name: Loading data with stages, COPY, Snowpipe, streams and tasks
              description: |-
                ## Purpose
                Loading and change processing make up a large share of Snowflake exam scenarios: internal and external stages, file formats, COPY options and error handling, continuous loading, and streams with tasks for incremental work. Building one small incremental flow covers most of them in a weekend.

                ## Milestones
                1. Files loaded from an internal stage with a named file format and COPY.
                2. COPY error handling options tried on a file with bad rows.
                3. Continuous loading explained, and set up if your trial allows an external stage.
                4. A stream and a scheduled task moving only changed rows into a target table.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A committed lab loads staged files with COPY, handles bad rows, and moves changed rows with a stream and task."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Create a named file format and an internal stage"
                - "Load files with COPY and test the error options on bad rows"
                - "Create a stream on the loaded table"
                - "Schedule a task that merges only changed rows into a target"
            - name: Role hierarchy, masking and data sharing in Snowflake
              description: |-
                ## Purpose
                Access control in Snowflake follows a role hierarchy that confuses people used to granting rights to users directly. Practising system and custom roles, future grants, masking and row access policies, and secure data sharing, prepares you for the security questions and for setting up a real account properly.

                ## Milestones
                1. The system roles and their intended use written down.
                2. A custom role hierarchy built with a functional and an access role.
                3. A masking policy applied to a column and tested under two roles.
                4. Secure data sharing and its consumer side explained in your notes.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A lab builds a custom role hierarchy and a tested masking policy, and notes explain secure data sharing."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List each system role and what it should be used for"
                - "Build a functional role that inherits an access role"
                - "Apply and test a column masking policy under two roles"
                - "Write a note on how secure data sharing works for the consumer"
            - name: AWS data engineer services map and labs
              description: |-
                ## Purpose
                The AWS data engineer exam ranges across many services: S3 and lake formats, Glue jobs and the Data Catalog, streaming with Kinesis, Redshift, Athena, Lake Formation permissions and orchestration. Mapping which service answers which kind of scenario, and building one small pipeline, turns a long service list into decisions.

                ## Milestones
                1. A one-page map of ingestion, storage, processing, query and orchestration services.
                2. A Glue crawler and job run against files in S3, with the table queried in Athena.
                3. Streaming ingestion compared across the options the exam guide lists.
                4. Fifteen scenario questions answered with the service choice explained for each.

                ## Notes
                Check the current exam code and guide on the AWS certification site. Keep the lab in a personal account with a budget alert, and delete crawlers and jobs afterwards.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A service map exists, a Glue to Athena lab is committed, and fifteen scenario questions are answered with reasons."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Draw a one-page map of AWS data services by pipeline stage"
                - "Crawl S3 files with Glue and query the table in Athena"
                - "Compare the streaming ingestion options the exam guide names"
                - "Answer fifteen scenario questions and justify each service choice"
            - name: Microsoft Fabric lakehouse and pipelines for DP-700
              description: |-
                ## Purpose
                Microsoft's data engineer exam is now built around Fabric: lakehouses and warehouses on OneLake, notebooks, pipelines and dataflows, real-time intelligence, and workspace security. Candidates from older Azure Synapse or Data Factory work need to relearn where each piece now lives.

                ## Milestones
                1. A Fabric trial capacity and workspace set up with a lakehouse and a warehouse.
                2. Data ingested with a pipeline and transformed in a notebook.
                3. An eventstream or real-time item explored against the guide's objectives.
                4. Workspace roles and item permissions tested for a second user if available.

                ## Notes
                Confirm on Microsoft Learn that DP-700 is still the current exam code and check its study guide before starting. Free Microsoft Learn modules and the practice assessment are a good first source.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A Fabric workspace holds a lakehouse loaded by a pipeline and transformed in a notebook, with notes on real-time items and permissions."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Check the current DP-700 study guide on Microsoft Learn"
                - "Start a Fabric trial and create a lakehouse and a warehouse"
                - "Load data with a pipeline and transform it in a notebook"
                - "Take Microsoft's free practice assessment and log the score"
            - name: Dimensional modelling and SQL performance refresher
              description: |-
                ## Purpose
                Platform exams assume you can model data, not just move it: facts and dimensions, grain, slowly changing dimensions, and why a query is slow. A focused refresher on star schemas and a few performance patterns, such as partition pruning and avoiding exploding joins, pays off on every vendor's exam and in the job.

                ## Milestones
                1. A star schema drawn for one lab dataset with the grain stated.
                2. A type 2 slowly changing dimension built with valid-from and valid-to columns.
                3. Three slow queries rewritten with the improvement measured.
                4. Notes on pruning, clustering and join explosion tied to your platform.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A star schema with stated grain, a working type 2 dimension and three measured query rewrites are committed with notes."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Draw a star schema for one lab dataset and state its grain"
                - "Build a type 2 slowly changing dimension"
                - "Rewrite three slow queries and record before and after times"
                - "Write notes on pruning and join explosion for your platform"
            - name: Associate or professional level decision
              description: |-
                ## Purpose
                Experienced data engineers are often tempted to skip the associate exam and go straight to the professional one. Comparing the two guides against your audit and years of hands-on work tells you whether the jump is realistic or whether the associate badge is a quick, useful first step.

                ## Milestones
                1. Both exam guides compared side by side by domain.
                2. Any stated or recommended experience for the professional exam noted.
                3. Your baseline score and audit used to estimate study hours for each.
                4. A level chosen with the reason recorded.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision names the exam level to sit first, with both guides compared and estimated study hours for each."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Put the associate and professional guides side by side"
                - "Note the experience the vendor recommends for each"
                - "Estimate study hours for each from your audit"
                - "Record the level you will sit first and why"
            - name: Online proctored or test centre decision
              description: |-
                ## Purpose
                Most data exams are delivered online with a remote proctor, and some also through test centres, and the rules for online delivery are strict: a clear desk, one screen, a stable connection and no interruptions. Choosing deliberately, and running the system check early, avoids a cancelled exam on the day.

                ## Milestones
                1. The delivery options for your exam and their rules read on the vendor's site.
                2. The proctoring software system check passed on the machine and network you will use.
                3. A room chosen that meets the desk, wall and interruption rules, or a test centre found.
                4. The choice recorded with a backup plan for power or internet failure.

                ## Notes
                Work laptops often block proctoring software through security policies. Test on the exact machine you will use, ideally a personal one.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A delivery method is chosen, the system check has passed on the exam machine, and a backup plan for power or internet is written."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read the online and test centre rules for your exam"
                - "Run the proctoring system check on the machine you will use"
                - "Pick a room that meets the desk and interruption rules"
                - "Write a backup plan for a power cut or dropped connection"
            - name: Readiness gate before paying for the exam
              description: |-
                ## Purpose
                Booking too early wastes a fee and a retake wait, and booking too late lets a trial or exam version expire. A simple gate, such as two timed practice tests in a row above your chosen margin and no domain far behind, gives a clear yes or not yet.

                ## Milestones
                1. A readiness rule written in advance, with a score margin and a minimum per domain.
                2. The last two practice test results checked against the rule.
                3. The skills audit repeated and compared with the first one.
                4. A book or not-yet decision recorded, with the next gate date if not yet.

                ## Notes
                Set the rule before you see the scores, not after. Vendors do not always publish pass marks, so pick a margin you trust rather than a rumoured number.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A pre-written readiness rule has been applied to two recent timed tests and a repeated audit, with a book or not-yet decision recorded."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write your readiness rule before the next practice test"
                - "Check the last two timed scores against the rule"
                - "Repeat the skills audit and compare with the first"
                - "Record a book or not-yet decision and any new gate date"
            - name: Two-week sprint on the weakest domain
              description: |-
                ## Purpose
                Most failed data exams are failed on one or two domains that the candidate kept postponing, often governance, streaming or performance tuning. A focused two-week sprint, with labs and questions only on that domain and a short test at the end, closes the gap faster than spreading effort evenly.

                ## Milestones
                1. The weakest domain chosen from the score log and wrong-answer log.
                2. Four study blocks and two labs spent only on that domain.
                3. Fifty domain-specific practice questions answered.
                4. A domain score at least fifteen points higher than at the start.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "After a two-week sprint, the chosen domain's practice score is at least fifteen points above its starting score."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pick the weakest domain from your score and wrong-answer logs"
                - "Plan four study blocks and two labs on that domain only"
                - "Answer fifty practice questions on the domain"
                - "Retest the domain and log the change"
            - name: Where the credential fits your data career
              description: |-
                ## Purpose
                Badges help most when they back a clear story: analyst moving to engineering, engineer moving to a new platform, or engineer stepping up to architecture. Writing down the role you want in two years, and the next credential and project that support it, stops collecting badges that do not add up.

                ## Milestones
                1. Your target role in two years written in one sentence.
                2. The skills that role needs beyond the exam listed, such as orchestration, testing or stakeholder work.
                3. A possible second credential chosen that complements the first, such as a transformation tool or a second platform.
                4. The plan reviewed once a year.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written two-year role target names the skills beyond the exam and a complementary second credential, with a yearly review."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the data role you want in two years in one sentence"
                - "List the skills that role needs beyond the exam"
                - "Choose a complementary second credential"
                - "Review the career plan and badge choices @recurring(yearly)"
            - name: Booking the exam and the proctor system check
              description: |-
                ## Purpose
                Exam slots, especially early mornings and weekends, can fill weeks ahead, and the booking itself has traps: the name on the account must match your identification exactly and the time zone must be right. Booking once the readiness gate says yes, then rerunning the system check a few days before, removes avoidable failures.

                ## Milestones
                1. The name on the certification account checked against your identification document.
                2. An exam slot booked at a time of day you usually study well.
                3. The confirmation saved with the time zone, reschedule cut-off and cancellation rules.
                4. The system check rerun on the exam machine within the last week.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An exam slot is booked under a name matching your ID, with the confirmation, time zone and reschedule cut-off saved."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Check that your account name matches your ID exactly"
                - "Book a slot at your best time of day"
                - "Save the confirmation, time zone and reschedule cut-off"
                - "Rerun the system check during the exam week"
            - name: Final fortnight revision plan
              description: |-
                ## Purpose
                Consolidation, not new topics, is the job of the last two weeks: rereading the wrong-answer log, short timed sets, one final full test and plenty of sleep. A written plan for these fourteen days stops last-minute panic learning of a whole new feature area.

                ## Milestones
                1. A fourteen-day plan written with no new topics after day four.
                2. The full wrong-answer log reread and the repeat traps summarised on one page.
                3. One final full timed test sat no later than four days before the exam.
                4. The day before the exam kept light, with only the one-page summary.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A fourteen-day plan is followed, ending with a final timed test at least four days before the exam and a one-page trap summary."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Write a fourteen-day plan that stops new topics after day four"
                - "Reread the wrong-answer log and summarise repeat traps"
                - "Sit a short timed question set each day @recurring(daily)"
                - "Sit the final full practice test four days before the exam"
            - name: Exam day run sheet
              description: |-
                ## Purpose
                Online data exams start with check-in steps that can take a while: identification photos, room scans and a proctor chat, and anything on the desk can delay or void the session. A short run sheet for the morning means your attention goes on the questions, not the logistics.

                ## Milestones
                1. A run sheet with wake time, check-in time, identification and room steps.
                2. The room cleared and the machine restarted with other applications closed.
                3. A pacing plan written, such as a checkpoint at the halfway mark and time left for flagged questions.
                4. Notes made after the exam on which topics felt weak, while still fresh.

                ## Notes
                Read each scenario's last sentence first; data platform questions often hide the real ask, such as lowest cost or least maintenance, at the end.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The exam is sat following a written run sheet, with a pacing plan used and post-exam topic notes written the same day."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a run sheet with check-in time and ID steps"
                - "Write a pacing plan with a halfway checkpoint"
                - "Clear the room and restart the machine an hour before"
                - "Note weak-feeling topics straight after the exam"
            - name: Results, digital badge and profile update
              description: |-
                ## Purpose
                A pass is only useful if people can see and verify it. Claiming the digital badge, adding it with the credential ID to your CV and professional profiles, and telling your manager while the result is fresh turns the effort into visibility, and noting the expiry date now prevents a lapsed badge later.

                ## Milestones
                1. The result and score report saved, including domain feedback if given.
                2. The digital badge claimed and its verification link tested.
                3. CV and professional profile updated with the credential name, ID and date.
                4. The expiry or renewal date written into your credentials record.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The badge is claimed with a working verification link, CV and profile list the credential with ID, and the expiry date is recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Save the score report and any domain feedback"
                - "Claim the digital badge and test its verification link"
                - "Add the credential, ID and date to your CV and profile"
                - "Record the expiry or renewal date in your credentials list"
            - name: Recovery plan after a failed attempt
              description: |-
                ## Purpose
                Failing a data platform exam is common, especially at professional level or after a recent guide change, and the domain feedback on the score report is a precise map of what to fix. A calm plan that respects the retake waiting period turns a fail into a narrow, targeted second attempt.

                ## Milestones
                1. The score report's domain feedback copied into the score log.
                2. The vendor's retake waiting period and fee confirmed.
                3. A four to six week plan aimed only at the weakest domains.
                4. A rebooked date that falls after the waiting period and a new readiness gate.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A retake plan targets the weakest domains from the score report and a rebooked date respects the vendor's waiting period."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Copy the domain feedback from the score report into your log"
                - "Confirm the retake waiting period and fee"
                - "Plan four to six weeks on the weakest domains only"
                - "Set a new readiness gate and a rebooked date"
            - name: Analyst moving into analytics engineering
              description: |-
                ## Purpose
                Analysts who live in SQL and dashboards are often a short step from analytics engineering: version-controlled models, tests, documentation and a cloud warehouse. Pairing a warehouse credential such as SnowPro Core with a transformation tool credential, and moving one real report onto modelled tables, makes the change credible to a hiring manager.

                ## Milestones
                1. Git basics practised on the lab repository with branches and pull requests.
                2. Three models built with tests and documentation in a transformation tool such as dbt.
                3. One of your real reports rebuilt on top of the new models.
                4. A first warehouse or transformation credential booked.

                ## Notes
                Start from the **Portfolio piece** template to write up the rebuilt report, with sensitive data replaced by a public dataset.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three tested and documented models are committed, one report is rebuilt on them, and a first credential is booked."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Practise branches and pull requests on the lab repository"
                - "Build three models with tests and documentation"
                - "Rebuild one of your reports on the new models"
                - "Write up the rebuild as a portfolio piece with public data"
            - name: Software engineer moving into data engineering
              description: |-
                ## Purpose
                Software engineers bring testing, version control and automation that many data teams lack, but often underrate data modelling, idempotent loads and the cost of a careless query. A data platform credential plus one pipeline built with production habits shows both halves.

                ## Milestones
                1. Data modelling and slowly changing dimensions studied ahead of platform features.
                2. A pipeline built with idempotent loads, unit tests on transformations and CI.
                3. Cost and performance of one heavy query measured and reduced.
                4. A short story ready for interviews on what changes when the product is data.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A tested, idempotent pipeline with CI is committed and a measured query cost reduction is written up for interviews."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Study dimensional modelling before platform-specific features"
                - "Build a pipeline whose reruns never duplicate rows"
                - "Add transformation unit tests and a CI check"
                - "Measure and cut the cost of one heavy query"
            - name: DBA or ETL developer moving to a cloud lakehouse
              description: |-
                ## Purpose
                Database administrators and on-premises ETL developers know data deeply but find the cloud vocabulary unfamiliar: object storage, separated compute, notebooks and pay-per-second clusters. Mapping old concepts to new ones, and migrating one familiar job to the platform, makes the exam content feel like a translation rather than a restart.

                ## Milestones
                1. A two-column map of familiar concepts and their lakehouse or cloud warehouse equivalents.
                2. One existing ETL job, rebuilt with public data, running on the platform.
                3. Indexing and tuning habits compared with clustering, pruning and caching.
                4. A note on which old skills transfer directly, for interviews.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A concept map from on-premises to cloud terms exists and one familiar ETL job runs on the platform with public data."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write a map of old concepts to their cloud platform equivalents"
                - "Rebuild one familiar ETL job on the platform with public data"
                - "Compare index tuning with clustering and pruning"
                - "List the skills that transfer directly for interviews"
            - name: Study plan for a working parent
              description: |-
                ## Purpose
                Parents studying around school runs, bedtimes and sick days rarely get a two-hour block, and plans that assume one collapse in the first month. Short, fixed blocks, flashcards on the phone and labs saved for one longer weekend slot keep progress going with a family.

                ## Milestones
                1. Two short weekday blocks found that survive normal family weeks.
                2. Flashcards on the phone for queues, waiting rooms and commutes.
                3. One longer weekend slot agreed with your partner or support for labs.
                4. The target exam month moved later if the first month shows the plan is too tight.

                ## Notes
                A later exam date that you hit is better than an early one you keep moving. Tell the household when exam day is so the house is quiet.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two short weekday blocks and one weekend lab slot have been kept for four weeks, with the exam month confirmed or moved."
                cadence: phased
              tasks:
                - "Find two short weekday slots that survive a normal family week"
                - "Study in two 25-minute blocks on your chosen days @recurring(weekly:mon,wed)"
                - "Agree one longer weekend lab slot with your partner or support"
                - "Review after a month whether the exam month needs moving"
            - name: Caribbean and remote candidate exam logistics
              description: |-
                ## Purpose
                Candidates in Trinidad and Tobago, Jamaica, Barbados, Guyana and across the region usually sit data exams online, pay in US dollars and depend on home internet and power through the whole session. Sorting payment, a backup connection, power protection and a quiet room ahead of time removes the risks a candidate in a test centre city never thinks about.

                ## Milestones
                1. A payment method confirmed that works for US dollar exam fees and vouchers.
                2. Upload speed and stability tested at the time of day you plan to sit.
                3. A backup connection and power plan in place, such as a mobile hotspot and a UPS for the router and laptop.
                4. Local test centre availability checked as a fallback.

                ## Notes
                Book away from likely outage times and avoid peak storm months for a long online exam if you can. Ask the vendor's support in advance what happens if the connection drops.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A checklist confirms US dollar payment, a tested connection at exam time, a backup hotspot and power plan, and a fallback test centre."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check your card or payment app works for US dollar exam fees"
                - "Test upload speed and stability at your planned exam time"
                - "Set up a mobile hotspot backup and power for the router"
                - "Find out whether a nearby test centre offers your exam"
            - name: Team certification cohort for a data team
              description: |-
                ## Purpose
                A team lead who wants three or four people certified on the platform the team runs gets better results from a cohort than from handing out vouchers. A shared plan, a weekly check-in and labs built on the team's real patterns lift the whole team's practice, not just their badges.

                ## Milestones
                1. Each volunteer's chosen exam, target month and protected study time agreed.
                2. A shared lab repository and practice question source set up.
                3. Weekly cohort check-ins running, with one person presenting a topic each time.
                4. Results and lessons written up for the next cohort.

                ## Notes
                Keep it voluntary and do not tie pass or fail to performance ratings. Protected study time matters more than the voucher.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A cohort of at least three has agreed exams and study time, weekly check-ins are held and a lessons note is written at the end."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask the team who wants to certify and on which exam"
                - "Agree protected study hours for each volunteer with their manager"
                - "Run a thirty-minute cohort check-in @recurring(weekly:wed)"
                - "Send cohort progress to your manager @recurring(monthly:27)"
            - name: Partner consultant certification targets
              description: |-
                ## Purpose
                Consultancies that partner with Databricks, Snowflake or the clouds often have to keep a minimum number of certified staff for their partner tier, and consultants are expected to hold the current badges. Knowing which credentials count, using partner training access and timing exams around client work keeps you billable and promotable.

                ## Milestones
                1. The credentials that count toward your firm's partner tier listed.
                2. Partner academy or free voucher access confirmed with your practice lead.
                3. Exams scheduled in gaps between client engagements.
                4. Your badges linked to the firm's partner portal profile.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The partner credentials you hold are linked in the partner portal and your next exam is scheduled between engagements."
                cadence: rolling
              tasks:
                - "Ask your practice lead which credentials count for the partner tier"
                - "Confirm your partner academy and voucher access"
                - "Check your badges show in the partner portal @recurring(monthly:8)"
                - "Schedule your next exam in a gap between engagements"
            - name: Data analyst credential on a lakehouse or warehouse
              description: |-
                ## Purpose
                Analysts who want a platform badge without becoming engineers can sit analyst-track exams, such as the Databricks Data Analyst Associate or a Fabric analytics exam. These focus on SQL, dashboards, semantic models and governance seen from the consumer side, so the study plan looks different from the engineer route.

                ## Milestones
                1. The analyst-track exam for your platform chosen and its guide saved.
                2. SQL on the platform practised with the functions the guide names.
                3. Two dashboards or reports built on lab tables.
                4. Access, sharing and refresh behaviour noted from the analyst's side.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An analyst-track exam guide is saved, two dashboards are built on lab data and SQL practice covers the functions the guide names."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Choose the analyst-track exam for your platform"
                - "Practise the SQL functions the guide lists"
                - "Build two dashboards on lab tables"
                - "Note how sharing and refresh work for report consumers"
            - name: Machine learning credential on a data platform
              description: |-
                ## Purpose
                Data platforms now offer machine learning associate and professional exams covering feature engineering, experiment tracking, model registries and serving inside the platform. They suit data engineers supporting ML teams and data scientists moving onto the platform, and need platform practice more than new theory.

                ## Milestones
                1. The ML exam guide for your platform saved and compared with your skills.
                2. One model trained and tracked with experiment logging on lab data.
                3. The model registered, versioned and served or batch scored.
                4. Feature tables or feature store concepts noted against the guide.

                ## Notes
                Interview preparation for ML roles is a separate area. Keep this project to the platform features the exam tests.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One model is tracked, registered and scored inside the platform, with notes mapped to the ML exam guide."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Save the platform ML exam guide and rate yourself against it"
                - "Train and log one model with experiment tracking"
                - "Register the model and run a batch scoring job"
                - "Map feature table concepts to the guide in your notes"
            - name: Professional-level Databricks data engineer preparation
              description: |-
                ## Purpose
                The professional data engineer exam moves from knowing features to designing with them: incremental processing at scale, change data feeds, performance tuning, testing and deployment, governance and monitoring. Preparing means building something that has to survive reruns and growth, then answering long scenarios about it.

                ## Milestones
                1. The professional guide mapped against your associate notes, with new objectives highlighted.
                2. A change data feed or CDC flow built with idempotent merges.
                3. One job tuned using the Spark UI, with the before and after recorded.
                4. Deployment of the pipeline as code with tests, using the bundle or CI tool the guide names.
              priority: medium
              deadlineOffsetDays: 240
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Committed labs show an idempotent CDC flow, a Spark UI tuning write-up and a pipeline deployed as code with tests."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Highlight objectives in the professional guide that the associate did not cover"
                - "Build a change data flow with idempotent merges"
                - "Tune one slow job with the Spark UI and record the result"
                - "Deploy the pipeline as code with tests and CI"
            - name: SnowPro advanced data engineer or architect preparation
              description: |-
                ## Purpose
                Advanced SnowPro exams expect real design judgement: choosing between loading patterns, dynamic tables and streams, sizing for concurrency, account and replication design, and cost control. They usually require a current core certification first, so check the prerequisite and the advanced guide before planning.

                ## Milestones
                1. The prerequisite confirmed and the advanced guide saved.
                2. Two loading or transformation designs compared for the same scenario with cost estimates.
                3. Resource monitors, warehouse sizing and query acceleration options tested.
                4. Replication, failover or account structure described for a sample organisation.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The advanced guide is mapped, two designs are compared with costs, and an account and replication design note is written."
                cadence: phased
                effort_hours_estimate: "50"
              tasks:
                - "Confirm the core certification prerequisite and save the advanced guide"
                - "Compare two transformation designs for one scenario on cost"
                - "Test resource monitors and warehouse sizing for concurrency"
                - "Write an account and replication design for a sample organisation"
            - name: Capstone portfolio pipeline with documentation
              description: |-
                ## Purpose
                A badge says you passed; a public pipeline shows you can build. One end-to-end project on public data, with ingestion, modelling, tests, orchestration, a dashboard and a clear readme, gives interviewers something to open and gives you material for every behavioural and design question about your data work.

                ## Milestones
                1. A project scope written that fits about four weekends.
                2. The pipeline running end to end on a schedule with tests and quality checks.
                3. A readme with an architecture diagram, design choices and cost notes.
                4. The project linked from your CV and professional profile next to the credential.

                ## Notes
                Start from the **Portfolio piece** template. Never use an employer's data or code, even anonymised; public datasets are plenty.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A public repository runs an end-to-end scheduled pipeline with tests, a dashboard and a readme with diagram, linked from your CV."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Write a capstone scope that fits four weekends"
                - "Build and schedule the pipeline with tests and quality checks"
                - "Write a readme with a diagram, design choices and cost notes"
                - "Link the repository from your CV beside the credential"
---

# Data Platform Certifications

This area is for data engineers, analysts, analytics engineers and software engineers working toward a data platform credential, whether that is a Databricks associate or professional exam, a SnowPro badge, the AWS data engineer exam or Microsoft's Fabric data engineer exam. It starts with foundations (choosing the credential, the current exam guide, a skills audit, a baseline test, a trial workspace that cannot run up a bill and a dated study calendar), then the weekly study and lab machinery, the platform skills the exams are written around, the decisions about level, booking and readiness, the exam itself, plans for career changers, working parents, Caribbean candidates, team leads and partner consultants, and finally professional-level exams and a portfolio pipeline.

The rhythm is study blocks on set weekdays with a short daily flashcard review, a weekly lab built and torn down, a weekly wrong-answer review and credit sweep, a monthly timed practice test and score log, a monthly look at platform release notes and a quarterly check for a new exam version. The Skills matrix, Purchase decision, Habit tracker, Metrics log and Portfolio piece templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
