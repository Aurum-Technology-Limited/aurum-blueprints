---
id: data-analytics.sql-training-for-teams
name: SQL Training for Teams
description: "A needs survey, safe read-only access and a masked sandbox, a course built on your own warehouse tables, office hours and a shared query library, peer review, assessments and the advanced patterns your best learners will want next."
category: business
version: 1.0.0
tags: [data-analytics, sql-training-for-teams, knowledge-worker, educator, team, sql, training-programme, query-patterns]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - course
    - skills-matrix
    - feedback-themes
    - onboarding-plan
  pillars:
    - name: Data & Analytics
      emoji: "📊"
      description: "Turning data into decisions: metrics and dashboards, data pipelines and warehouses, experimentation, forecasting and modelling, machine learning, data quality and governance."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: SQL Training for Teams
          description: "Teaching colleagues enough SQL to query the warehouse safely, with exercises on real company data and shared query patterns."
          projects:
            - name: SQL needs survey across the team
              description: |-
                ## Purpose
                Before writing a single lesson, find out who actually needs SQL, what they do with data today and which questions they currently wait days to have answered. A ten-question survey of the people being trained usually reveals three groups: those who have never queried anything, those who copy and edit queries they do not understand, and one or two who could help teach. Designing for all three from the start avoids a course that bores half the room and loses the other half.

                ## Milestones
                1. A short survey sent to everyone in scope, covering current tools, confidence and typical data questions.
                2. At least three quarters of the intended learners responded.
                3. Respondents grouped into beginner, copy-and-edit and confident users.
                4. Two or three confident users identified as possible helpers for later sessions.

                ## Notes
                Ask what people do with data now, not how good they think they are at SQL. Self-ratings are unreliable; descriptions of real tasks are not.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Survey responses from at least 75 percent of intended learners are summarised into three skill groups with named possible helpers."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft ten survey questions about current data tasks, tools and confidence"
                - "Send the survey to every intended learner with a one-week close date"
                - "Chase non-responders through their managers two days before it closes"
                - "Group the responses into beginner, copy-and-edit and confident users"
            - name: Twenty real questions the course must answer
              description: |-
                ## Purpose
                Courses built on generic sample databases teach syntax but leave people stuck on their own tables. Collecting twenty questions colleagues have really asked the data team in the last quarter, such as weekly orders by region or customers who lapsed after a price change, gives the course a target: by the end, each learner should be able to answer most of them alone.

                ## Milestones
                1. Twenty questions collected from the request backlog, chat threads and the survey.
                2. Each question tagged with the tables and SQL concepts needed to answer it.
                3. A worked answer query written and checked for every question.
                4. The list ordered from easiest to hardest and shared with the pilot sponsor.

                ## Notes
                Remove any question whose answer would expose personal or confidential data to the whole cohort. Rewrite it at an aggregate level instead.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A list of twenty real business questions, each with a checked answer query and its required concepts, is shared with the sponsor."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pull the last quarter of simple data requests from the team backlog"
                - "Pick twenty that recur or block someone for more than a day"
                - "Write and check an answer query for each question"
                - "Tag each question with the tables and concepts it needs"
            - name: Read-only warehouse role for learners
              description: |-
                ## Purpose
                New SQL users should never be one typo away from deleting a table or reading payroll data. Setting up a dedicated learner role that can only read approved schemas, with sensible query timeouts, lets people experiment freely without anyone in the data team losing sleep. Agree it with the warehouse administrator and the data owner before the first session, not after.

                ## Milestones
                1. A learner role defined with read access to approved schemas only.
                2. Query timeout and result row limits set on the role.
                3. The data owner and security contact signed off the scope in writing.
                4. A test login confirmed that writes and restricted schemas are blocked.

                ## Notes
                Grant access through a group, not individual accounts, so adding and removing learners is one change.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A learner group with read-only access to approved schemas exists, has been tested to block writes, and is signed off by the data owner."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the schemas and tables the course exercises need"
                - "Ask the warehouse administrator to create a read-only learner group"
                - "Set a query timeout and row limit on the learner group"
                - "Test the role by attempting a write and a restricted table read"
            - name: Masked training sandbox schema
              description: |-
                ## Purpose
                Exercises on real company data are what make training stick, but copying production tables with names, emails and salaries into a classroom is a privacy incident waiting to happen. A sandbox schema with a recent sample of the core tables, personal fields removed or masked, and stable row counts gives every learner the same data and the same right answers.

                ## Milestones
                1. The tables needed for the twenty questions copied into a sandbox schema.
                2. Names, emails, phone numbers and other personal fields removed or masked.
                3. Row counts and key totals recorded so exercise answers stay checkable.
                4. The privacy or data protection contact confirmed the sandbox is acceptable.

                ## Notes
                Freeze the sandbox for the length of a cohort. Data that changes mid-course makes yesterday's correct answer look wrong today.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A sandbox schema with masked personal fields and recorded reference totals is approved by the privacy contact and readable by the learner group."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List every column in the course tables that holds personal data"
                - "Build the sandbox copy with those columns dropped or masked"
                - "Record row counts and three key totals for each sandbox table"
                - "Send the masking approach to the privacy contact for approval"
            - name: Choosing the query editor for learners
              description: |-
                ## Purpose
                Beginners abandon SQL fast when the tool fights them: no autocomplete, no schema browser, confusing error messages. Comparing the warehouse's own web console, the BI tool's SQL runner and one desktop client on the same five criteria picks the editor everyone will use, so instructions and screenshots only have to be written once.

                ## Milestones
                1. Three candidate editors listed, including whatever the company already licenses.
                2. Each scored on autocomplete, schema browsing, error clarity, saving queries and cost.
                3. Two learners from the survey tried the top two for half an hour each.
                4. One editor chosen and the decision written down with the reasons.

                ## Notes
                Start from the **Purchase decision** template. A tool the company already pays for usually wins unless it is genuinely hard for beginners.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One query editor is chosen against five written criteria, with two learners' trial feedback recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the editors already licensed or built into the warehouse"
                - "Score three candidates on the same five criteria"
                - "Ask two beginner learners to try the top two editors"
                - "Record the chosen editor and the reasons in the decision page"
            - name: Exercise table guide for learners
              description: |-
                ## Purpose
                Most beginner mistakes are not syntax, they are misunderstanding what one row of a table means. A two-page guide to the eight or so tables the course uses, saying what each row represents, which column joins to which and the traps such as test accounts or cancelled orders, prevents a whole category of wrong answers.

                ## Milestones
                1. Every table used in the exercises listed with one sentence on what a row means.
                2. Join keys between the tables drawn as a simple diagram.
                3. Known traps written beside each table, such as test records or soft deletes.
                4. The guide checked by someone who owns or builds those tables.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A guide covering every exercise table, with row meaning, join keys and known traps, is reviewed by a table owner and linked from the course."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write one sentence per exercise table on what a single row represents"
                - "Sketch the join keys between the tables on one page"
                - "Ask the table owner which records people most often forget to exclude"
                - "Link the guide from the first page of the course materials"
            - name: Query safety rules for new SQL users
              description: |-
                ## Purpose
                Read-only access removes the worst risks, but new users can still run a query that scans a year of events, export customer records into a spreadsheet, or share a number before checking it. One page of plain rules, read and agreed in the first session, sets expectations about cost, personal data and when to ask before sharing a result.

                ## Milestones
                1. A one-page rules sheet covering query limits, personal data, exports and sharing results.
                2. The rules checked by the data owner and the privacy contact.
                3. Every learner confirmed they have read the rules before getting access.
                4. A named person learners can ask when a rule is unclear.

                ## Notes
                Keep it to ten rules or fewer. A long policy is skimmed; a short one is remembered.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A rules page of no more than ten items is approved by the data owner and acknowledged by every learner before access is granted."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft ten or fewer rules on limits, personal data, exports and sharing"
                - "Ask the data owner and privacy contact to review the draft"
                - "Add an acknowledgement step to the access request for learners"
                - "Review the rules against the year's incidents and questions @recurring(yearly)"
            - name: Pilot cohort and protected learning time
              description: |-
                ## Purpose
                SQL training fails most often because learners are never given the time, not because the material is wrong. Choosing six to ten pilot learners with real questions to answer, and getting their managers to protect two hours a week for eight weeks in writing, turns a good intention into a programme that survives a busy month.

                ## Milestones
                1. Six to ten pilot learners chosen across at least two teams.
                2. Each learner's manager agreed two protected hours a week for eight weeks.
                3. A sponsor named who will hear progress and remove blockers.
                4. Session dates booked in every learner's calendar.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A named cohort of six to ten learners exists, each with written manager agreement to two protected hours a week for eight weeks."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pick six to ten learners from the survey with real questions waiting"
                - "Email each manager asking for two protected hours a week"
                - "Ask a senior sponsor to receive fortnightly progress notes"
                - "Send calendar invitations for all eight sessions"
            - name: Course outline for an eight-session programme
              description: |-
                ## Purpose
                An outline that maps each session to concepts, exercise tables and a few of the twenty real questions keeps the course honest: every hour of teaching moves learners closer to answering something they actually need. Eight sessions of ninety minutes, with homework that takes under an hour, is enough for most colleagues to become independent on simple questions.

                ## Milestones
                1. Eight sessions listed, each with its concepts, tables and target questions.
                2. Homework for each session written and timed at under an hour.
                3. Every one of the twenty real questions placed in a session.
                4. The outline reviewed by one confident user and one beginner.

                ## Notes
                Start from the **Course** template. Put joins no later than session three; it is the concept people most need and most fear.
              priority: high
              deadlineOffsetDays: 35
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An eight-session outline places all twenty real questions, with homework for each session, and is reviewed by two learners."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Create the course page from the course template"
                - "Map each of the twenty questions to the session that teaches its concepts"
                - "Write and time one homework exercise per session"
                - "Ask one beginner and one confident user to review the outline"
            - name: First queries module on SELECT, WHERE and ORDER BY
              description: |-
                ## Purpose
                The first session should end with every learner having answered a real question from a real table, even a small one such as last week's orders from one region. Teaching column selection, filters, sorting and LIMIT on the company's own order or ticket table gives an early win and shows why the safety rules matter.

                ## Milestones
                1. Slides or a worked notebook covering SELECT, WHERE, AND, OR, IN, ORDER BY and LIMIT.
                2. Six exercises on a company table, each with a checked answer.
                3. Every learner ran at least one query successfully during the session.
                4. Common first-session errors noted for the mistakes handbook.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every pilot learner completes at least four of six filtering and sorting exercises on a company table with correct results."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write six filtering exercises on the sandbox orders or tickets table"
                - "Prepare the worked answer for each exercise"
                - "Run the session and help each learner get one query working"
                - "Record the errors learners hit most often"
            - name: Aggregation module on GROUP BY and HAVING
              description: |-
                ## Purpose
                Counting, summing and averaging by group is where SQL starts to replace the pivot table, and also where the first serious wrong answers appear: counting rows instead of distinct customers, or filtering after grouping with WHERE. Teaching COUNT DISTINCT, GROUP BY and HAVING through questions such as monthly active customers by plan makes the difference visible.

                ## Milestones
                1. Material covering COUNT, COUNT DISTINCT, SUM, AVG, GROUP BY and HAVING.
                2. Exercises that deliberately show the gap between row counts and distinct counts.
                3. Each learner explained in their own words when to use HAVING rather than WHERE.
                4. Homework answers checked against reference totals from the sandbox.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Pilot learners complete the aggregation homework with totals matching the sandbox reference values in at least four of five exercises."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write an exercise where counting rows gives a different answer from counting customers"
                - "Prepare three monthly aggregation questions from the real question list"
                - "Check homework answers against the sandbox reference totals"
                - "Ask each learner to explain HAVING versus WHERE in one sentence"
            - name: Joins module using the company's own keys
              description: |-
                ## Purpose
                Joins are the concept that separates people who can answer real questions from those who cannot, and the one that produces the most confident wrong numbers. Teaching inner and left joins on the actual customer, order and product keys, with an exercise where a one-to-many join silently doubles revenue, prepares learners for the trap they will meet in the first week on their own.

                ## Milestones
                1. Material on inner, left and anti joins using the company's real key columns.
                2. A fan-out exercise where a careless join inflates a total, with the fix explained.
                3. Learners checked row counts before and after every join in their homework.
                4. At least three of the twenty real questions answered with joins in class.

                ## Notes
                Teach the habit of counting rows before and after each join. It catches more mistakes than any amount of syntax practice.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every pilot learner identifies and fixes the fan-out in the doubled-revenue exercise and answers three join questions correctly."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Draw the customer, order and product keys on one slide"
                - "Build an exercise where a one-to-many join doubles a revenue total"
                - "Teach the row count check before and after each join"
                - "Set three real questions that need a left join as homework"
            - name: NULLs, dates and time zones module
              description: |-
                ## Purpose
                Missing values and dates cause quiet errors that look plausible: averages that ignore blanks, weeks that start on the wrong day, and timestamps stored in one time zone and reported in another. One session on NULL handling, date truncation and the warehouse's time zone conventions saves learners from the mistakes that analysts spend hours unpicking.

                ## Milestones
                1. Material on IS NULL, COALESCE, NULLs in aggregates and comparisons.
                2. The warehouse's date functions and week-start convention written on one page.
                3. The time zone each core timestamp is stored in documented for learners.
                4. Exercises on daily and weekly totals answered correctly by the cohort.

                ## Notes
                Check the company's agreed week start and fiscal calendar with whoever owns reporting definitions before teaching it.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page date and time zone reference exists and learners answer the weekly totals exercise with results matching the reference."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Find out which time zone each core timestamp column is stored in"
                - "Write a one-page reference of the warehouse's date functions"
                - "Build an exercise where ignoring NULLs changes an average"
                - "Set a weekly totals exercise using the agreed week start"
            - name: CASE expressions and bucketing module
              description: |-
                ## Purpose
                Business questions rarely match the raw columns: people want order sizes in bands, customers split into new and returning, or regions regrouped the way sales reports them. Teaching CASE WHEN for labelling and bucketing lets learners reshape data into the categories their managers actually ask about, without exporting to a spreadsheet to do it.

                ## Milestones
                1. Material on CASE WHEN for labels, bands and conditional counts.
                2. An exercise banding order values and counting orders per band.
                3. An exercise using conditional sums to put two metrics side by side.
                4. Each learner built one bucketing query for a question from their own team.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each pilot learner submits one working CASE query that answers a categorisation question from their own team."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write an order value banding exercise with five bands"
                - "Prepare a conditional sum exercise comparing two segments"
                - "Ask each learner to bring one categorisation question from their team"
                - "Review each learner's bucketing query in the next session"
            - name: CTEs and step-by-step query writing module
              description: |-
                ## Purpose
                Once questions need three or four steps, beginners write one tangled query they cannot debug. Common table expressions let them break the problem into named steps, check each one, and hand the query to a reviewer who can follow it. Teaching this as a way of thinking, not just syntax, is what makes people independent.

                ## Milestones
                1. Material on WITH clauses and naming each step after what it holds.
                2. A tangled nested query rewritten as CTEs during the session.
                3. Learners checked the output of each CTE before combining them.
                4. Two of the harder real questions answered using CTEs.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each pilot learner answers two multi-step real questions with CTE-structured queries that a reviewer can follow step by step."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Find a real nested query to rewrite as CTEs in class"
                - "Teach the habit of selecting from each CTE before moving on"
                - "Set two multi-step questions from the real list as homework"
                - "Give written feedback on how each learner named their steps"
            - name: Window functions module for rankings and running totals
              description: |-
                ## Purpose
                Questions like each customer's first order, the top three products per region or month-on-month change are where confident learners get stuck after the core course. Window functions answer them cleanly. A dedicated session for those who have finished the basics keeps the strongest learners moving instead of drifting back to spreadsheets.

                ## Milestones
                1. Material on ROW_NUMBER, RANK, LAG, LEAD and running SUM with PARTITION BY.
                2. A first-order-per-customer exercise and a top-three-per-group exercise.
                3. A month-on-month change exercise using LAG.
                4. Learners who finished the core course completed at least two of the three.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Learners who completed the core course each solve at least two of three window function exercises with checked results."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write a first-order-per-customer exercise with ROW_NUMBER"
                - "Write a top-three-products-per-region exercise"
                - "Write a month-on-month change exercise using LAG"
                - "Invite learners who finished the core course to the session"
            - name: Writing exercises with known answers
              description: |-
                ## Purpose
                For whoever is teaching, the slowest part is not explaining concepts but producing exercises that are realistic, unambiguous and have one checkable answer. A simple format for each exercise (the business question, the tables allowed, the expected row count and a reference total) makes exercises quick to write, easy to mark and reusable across cohorts.

                ## Milestones
                1. A standard exercise format with question, allowed tables, expected rows and reference total.
                2. Every existing exercise rewritten in that format.
                3. Each exercise tested by someone other than its author.
                4. Ambiguous wording fixed wherever two valid readings gave different answers.

                ## Notes
                If two reasonable people could read the question differently, the exercise teaches guessing. Name the date range, the exclusions and the grain.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All course exercises follow one format with expected row counts and reference totals, each tested by a second person."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write the exercise format as a one-page example"
                - "Convert the existing exercises into the format"
                - "Ask a colleague to solve five exercises cold and note any confusion"
                - "Rewrite any exercise where two readings gave different answers"
            - name: Train the trainer for internal SQL tutors
              description: |-
                ## Purpose
                One analyst cannot teach every cohort, answer office hours and do their own job. Training two or three confident users as tutors, with the course notes, the common mistakes and practice at explaining joins to a nervous beginner, spreads the load and puts help inside the teams that need it.

                ## Milestones
                1. Two or three tutors chosen from confident users with their managers' agreement.
                2. Each tutor co-taught one session alongside the lead trainer.
                3. Each tutor taught one session alone with the lead trainer observing.
                4. Written feedback given to every tutor after their solo session.

                ## Notes
                Good tutors are patient explainers, not necessarily the best SQL writers. Choose for the first quality.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "At least two tutors have each taught one solo session with observed feedback recorded."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Invite two or three patient, confident users to become tutors"
                - "Share the course notes and mistakes handbook with each tutor"
                - "Pair each tutor with the lead trainer for one session"
                - "Observe each tutor's solo session and write feedback"
            - name: Weekly SQL office hours
              description: |-
                ## Purpose
                Learners get stuck between sessions and after the course ends, and a stuck query left for a week usually becomes an abandoned one. A fixed hour each week, open to anyone with the learner role, where people bring their own query and get it working, is the single most effective way to keep skills alive after the formal course.

                ## Milestones
                1. A recurring weekly hour in the calendar with a video link and a room.
                2. A short sign-up note so people say what they are bringing.
                3. Attendance and topics recorded each week.
                4. Office hours ran for twelve consecutive weeks.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Office hours have run for twelve consecutive weeks, with attendance and topics recorded each week."
                cadence: rolling
              tasks:
                - "Book a recurring weekly hour and share the link with all learners"
                - "Run office hours and help each attendee get their query working @recurring(weekly:wed)"
                - "Record who came and what they asked about"
                - "Turn any question asked three times into a library pattern"
            - name: Query of the week challenge
              description: |-
                ## Purpose
                Skills fade fast when people only write SQL occasionally. Posting one short question each week from real company data, with the answer and a model query revealed the following week, gives everyone a ten-minute reason to open the editor and a gentle way to learn a new pattern.

                ## Milestones
                1. A bank of twelve challenge questions with model answers written in advance.
                2. A challenge posted every week in the team channel.
                3. The model answer and one learner's solution shared the following week.
                4. Participation counted monthly to see whether it holds up.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve weekly challenges have been posted with model answers, and participation is counted each month."
                cadence: rolling
              tasks:
                - "Write twelve short challenge questions with model answers"
                - "Post this week's challenge and last week's answer @recurring(weekly:mon)"
                - "Share one learner's solution alongside the model answer"
                - "Count how many people answered each month"
            - name: SQL help channel with a response routine
              description: |-
                ## Purpose
                Questions asked in private messages help one person once; questions answered in a shared channel help everyone who searches later. A dedicated help channel, with a rule that someone replies within one working day and a weekly summary of the best answers, builds a searchable record and stops the lead trainer becoming a bottleneck.

                ## Milestones
                1. A help channel created with a pinned post on how to ask a good question.
                2. A daily check for unanswered questions shared among the trainer and tutors.
                3. Nine in ten questions answered within one working day.
                4. A weekly summary of the most useful answers posted.

                ## Notes
                Ask people to paste the query, the error and what they expected. Screenshots of code are hard to help with.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Nine in ten help channel questions over a month receive a reply within one working day, with weekly summaries posted."
                cadence: rolling
              tasks:
                - "Create the help channel and pin a how-to-ask post"
                - "Answer or route any unanswered question in the help channel @recurring(daily)"
                - "Post the week's most useful answers as a short summary @recurring(weekly:fri)"
                - "Share the daily check rota with the tutors"
            - name: Shared library of approved query patterns
              description: |-
                ## Purpose
                Learners copy whatever query they find, including ones that are wrong or out of date. A small library of reviewed patterns, such as active customers in a period, revenue excluding refunds or first purchase per customer, each with a plain explanation and its owner, gives people a trustworthy starting point and makes everyone's numbers agree more often.

                ## Milestones
                1. Ten patterns written, each with a description, the query and an owner.
                2. Each pattern reviewed by an analyst before it was published.
                3. The library linked from the course, the help channel and office hours.
                4. Every pattern rerun monthly against the live schema.

                ## Notes
                Where an official metric definition exists, the pattern must match it. Link to the definition rather than restating it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A library of at least ten reviewed query patterns, each with an owner and a last-checked date within the past month, is linked from the course."
                cadence: rolling
              tasks:
                - "Pick the ten patterns learners need most from help channel questions"
                - "Write each pattern with a plain explanation and a named owner"
                - "Ask an analyst to review every pattern before publishing"
                - "Rerun every library pattern against the live schema @recurring(monthly:12)"
            - name: Peer review of queries before results are shared
              description: |-
                ## Purpose
                The real risk of training colleagues is not a broken query but a plausible wrong number in a leadership deck. A light rule that any new query feeding a decision or a shared report gets a second pair of eyes, with a five-point checklist covering joins, filters, dates, grain and a reconciliation total, catches most errors before they travel.

                ## Milestones
                1. A five-point review checklist written and linked from the library.
                2. A rule agreed on which results need review before they are shared.
                3. Reviewers named from tutors and analysts.
                4. Twenty reviews logged with the issues each one caught.

                ## Notes
                Keep review fast. A review that takes three days teaches people to skip it.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twenty peer reviews are logged against the five-point checklist, with the issues found recorded for each."
                cadence: rolling
              tasks:
                - "Write the five-point checklist on joins, filters, dates, grain and totals"
                - "Agree with the sponsor which shared results must be reviewed"
                - "Review one learner query due to be shared this week @recurring(weekly:thu)"
                - "Log what each review caught in a simple sheet"
            - name: Exercise bank health check after schema changes
              description: |-
                ## Purpose
                Warehouses change constantly: a column is renamed, a table is rebuilt, a status value is added. Exercises and answers that quietly break make the course look careless and confuse beginners who assume the mistake is theirs. A monthly run of every exercise against its expected answer finds breakage before a learner does.

                ## Milestones
                1. Every exercise and its answer query stored in one place.
                2. A monthly run of all answer queries with results compared to expected values.
                3. Broken exercises fixed or retired within a week of being found.
                4. The data engineering team agreed to warn the trainer about schema changes.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every exercise answer query has been run within the last month, with any mismatch fixed or the exercise retired."
                cadence: rolling
              tasks:
                - "Collect every exercise answer query into one folder"
                - "Run all answer queries and compare them with expected results @recurring(monthly:20)"
                - "Ask data engineering to post schema changes in the trainer channel"
                - "Fix or retire each broken exercise within a week"
            - name: Learner access and sandbox refresh review
              description: |-
                ## Purpose
                Learner groups grow and rarely shrink: people change roles, leave or never finish the course but keep access. Reviewing the learner group each quarter, and refreshing the sandbox between cohorts so its data is recent but stable, keeps access tidy and the data relevant without surprising anyone mid-course.

                ## Milestones
                1. The learner group membership checked against current staff and course records.
                2. Leavers and inactive accounts removed each quarter.
                3. The sandbox refreshed between cohorts with masking rerun and checked.
                4. Reference totals updated after each refresh.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly access reviews are recorded in a year, and the sandbox reference totals match the latest refresh."
                cadence: rolling
              tasks:
                - "Export the current learner group membership"
                - "Remove leavers and accounts unused for ninety days @recurring(quarterly)"
                - "Check whether a cohort is due and the sandbox needs a refresh @recurring(monthly:3)"
                - "Rerun the masking checks and update reference totals after each refresh"
            - name: Team SQL skills matrix
              description: |-
                ## Purpose
                Managers want to know who can now answer their own questions, and trainers need to know who needs help next. A simple matrix with each learner rated on filtering, aggregation, joins, dates, CTEs and window functions, based on completed exercises rather than self-assessment, shows progress honestly and points to who could tutor whom.

                ## Milestones
                1. A matrix listing each learner against six core skills.
                2. Ratings based on completed exercises and assessments, not opinion.
                3. The matrix updated every quarter.
                4. Gaps in the matrix used to plan the next cohort or refresher.

                ## Notes
                Start from the **Skills matrix** template. Share each person's row with them before it goes to their manager.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A skills matrix covering every learner against six skills, based on recorded exercise results, is updated each quarter."
                cadence: rolling
              tasks:
                - "Create the matrix from the skills matrix template"
                - "Fill each learner's row from their completed exercises"
                - "Share each learner's own row with them first"
                - "Update the matrix from the quarter's exercises and assessments @recurring(quarterly)"
            - name: Quarterly training retrospective
              description: |-
                ## Purpose
                A course designed before anyone has taken it will be wrong in several places. Gathering learner and tutor feedback every quarter, grouping it into themes and changing one or two things each time keeps the programme improving rather than repeating the same weak session for every cohort.

                ## Milestones
                1. Feedback collected from learners, tutors and at least two managers.
                2. Comments grouped into themes with counts.
                3. Two changes chosen and made before the next cohort.
                4. Changes and their reasons recorded in a short log.

                ## Notes
                Start from the **Feedback themes** template.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter has a themed feedback summary and a record of at least two changes made to the course."
                cadence: cyclic
              tasks:
                - "Send a five-question feedback form to learners and tutors"
                - "Group the quarter's feedback into themes @recurring(quarterly)"
                - "Pick two changes and assign each to a named person"
                - "Ask the agent to summarise the free-text comments by theme"
            - name: Team SQL style guide
              description: |-
                ## Purpose
                Queries written five different ways are slow to review and hard to reuse. A short style guide covering capitalisation, indentation, naming CTEs, aliasing tables and when to comment makes every learner's work readable by every reviewer, and gives tutors something concrete to point at instead of personal taste.

                ## Milestones
                1. A one-page guide covering layout, naming, aliases, comments and explicit column lists.
                2. Every pattern in the library reformatted to match it.
                3. The guide taught in the CTE session and linked from the review checklist.
                4. An automatic formatter configured in the editor, if the tool supports one.

                ## Notes
                Pick an existing public style and adapt it rather than debating every rule from scratch.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page style guide is published and every query in the pattern library conforms to it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose a public SQL style guide as the starting point"
                - "Cut it down to one page of rules for the team"
                - "Reformat every pattern in the library to the guide"
                - "Check whether the chosen editor can format queries automatically"
            - name: Checking a query result against a trusted total
              description: |-
                ## Purpose
                New SQL users tend to trust whatever number comes back. Teaching a short sanity routine (compare with a known dashboard figure, check the row count is plausible, look at ten raw rows, try one edge case) gives learners a way to catch their own mistakes before anyone else sees them.

                ## Milestones
                1. A four-step sanity routine written on one card.
                2. Three trusted reference figures listed, such as last month's orders from the main dashboard.
                3. The routine practised on an exercise with a deliberate error.
                4. The routine added to the peer review checklist.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A four-step sanity routine with three named reference figures is published and practised by every learner on a planted-error exercise."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the four-step sanity routine on one card"
                - "Pick three reference figures learners can always compare against"
                - "Build an exercise with a deliberate filter error to catch"
                - "Add the routine as a step in the peer review checklist"
            - name: Live sessions or self-paced course decision
              description: |-
                ## Purpose
                Live sessions build momentum and let people ask questions; self-paced material fits shift workers and other time zones but has far lower completion. Deciding the mix, for example live core sessions with recorded catch-ups, based on the survey and calendars rather than habit, avoids building the wrong format for the people you have.

                ## Milestones
                1. Learner availability and time zones summarised from the survey.
                2. Three formats compared: fully live, fully self-paced and a blend.
                3. Expected completion, trainer hours and learner hours estimated for each.
                4. One format chosen and written into the course outline.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on course format compares three options on completion, trainer hours and learner hours and names the chosen format."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Summarise learner time zones and availability from the survey"
                - "Estimate trainer and learner hours for three formats"
                - "Ask two learners which format they would actually finish"
                - "Write the chosen format and reasons into the course outline"
            - name: Practical assessment and graduation criteria
              description: |-
                ## Purpose
                Attendance is not competence. A short practical assessment, answering five unseen real questions on the sandbox in ninety minutes with the sanity routine applied, gives a fair, shared meaning to finishing the course and lets the data team decide who can query production data unsupervised.

                ## Milestones
                1. Five unseen assessment questions written with checked answers.
                2. A pass standard agreed, such as four of five correct with sanity checks shown.
                3. The assessment sat by every pilot learner.
                4. Each result and the decision on wider access recorded.

                ## Notes
                Offer a resit after a fortnight. The goal is safe independence, not a ranking.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every pilot learner has sat the practical assessment and a pass or resit decision is recorded for each."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write five unseen questions with checked answer queries"
                - "Agree the pass standard with the data owner"
                - "Book a ninety-minute assessment slot for each learner"
                - "Record each result and whether wider access is granted"
            - name: Common mistakes handbook from real learner errors
              description: |-
                ## Purpose
                Every cohort makes the same dozen mistakes: joins that fan out, WHERE filters that turn a left join into an inner join, dates compared as text, averages of averages. A handbook built from errors seen in sessions and the help channel, each with a short broken query and its fix, is faster to point at than explaining from scratch.

                ## Milestones
                1. Twelve mistakes written, each with a broken example and the corrected query.
                2. Every entry taken from a real learner error, anonymised.
                3. The handbook linked from the help channel and review checklist.
                4. New entries added monthly as fresh mistakes appear.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A handbook of at least twelve real, anonymised mistakes with fixes is linked from the help channel and gains new entries monthly."
                cadence: rolling
              tasks:
                - "Collect the errors noted in sessions and the help channel"
                - "Write the first twelve entries with broken and fixed queries"
                - "Ask the agent to draft plain explanations for each fix"
                - "Add the month's new mistakes to the handbook @recurring(monthly:26)"
            - name: Measuring whether training cut simple data requests
              description: |-
                ## Purpose
                Sponsors fund a second cohort when they see the first one changed something. Counting simple requests to the data team from trained teams before and after the course, alongside how many questions learners now answer themselves, gives a fair measure of impact instead of a satisfaction score.

                ## Milestones
                1. A definition of a simple request agreed with the data team.
                2. A three-month baseline count of simple requests from the pilot teams.
                3. Monthly counts recorded after the course ended.
                4. A short impact note sent to the sponsor after three months.

                ## Notes
                Expect requests to shift rather than vanish: trained people often ask harder questions. Report both.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A before-and-after comparison of simple data requests from pilot teams over three months is sent to the sponsor."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Agree with the data team what counts as a simple request"
                - "Count the last three months of simple requests from pilot teams"
                - "Record the month's simple requests from trained teams @recurring(monthly:8)"
                - "Send the sponsor a one-page impact note after three months"
            - name: Capstone query that replaces a manual export
              description: |-
                ## Purpose
                Nothing proves the course worked like a learner retiring a weekly task they used to do by hand, such as downloading a CSV, filtering it and pasting totals into a deck. Asking each learner to pick one such task and replace it with a saved, reviewed query gives the course a practical finish and saves real hours every month.

                ## Milestones
                1. Each learner named one recurring manual export or copy-paste task.
                2. A saved query written that produces the same figures.
                3. The query peer reviewed and its output matched to the old method for two periods.
                4. The manual step retired and the hours saved estimated.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Each pilot learner has a reviewed saved query that matched their old manual output for two periods and replaced it."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask each learner to name one manual export they repeat"
                - "Help each learner write a saved query that matches it"
                - "Compare the query with the manual output for two periods"
                - "Record the hours each learner expects to save per month"
            - name: Cohort one kick-off session
              description: |-
                ## Purpose
                First impressions decide attendance: if access fails, the editor will not load or the data looks alien, a third of the cohort quietly gives up. A kick-off that checks every login works, walks through the safety rules and ends with each person running one real query makes the next seven sessions far easier.

                ## Milestones
                1. Every learner's access tested in the week before the session.
                2. The safety rules and table guide shared in advance.
                3. Every learner ran one real query before the session ended.
                4. Any access or tool problems logged and fixed within two days.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The kick-off is held with every learner's access working and each person having run one real query during it."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask each learner to log in to the editor a week before"
                - "Send the safety rules and table guide two days before"
                - "Run the kick-off with one real query for every learner"
                - "Fix any access problems raised within two days"
            - name: Half-day query sprint on a live business question
              description: |-
                ## Purpose
                Midway through a course, learners benefit from working on a question that genuinely matters to someone, such as why repeat orders fell in one region last quarter. A half-day sprint in small mixed groups, with an analyst on hand and a short readout to the person who asked, shows that SQL answers real questions and builds confidence quickly.

                ## Milestones
                1. One real question chosen with the colleague who owns it.
                2. Learners split into groups of three with mixed skill levels.
                3. Each group produced a reviewed answer and one chart or table.
                4. Answers presented to the question owner in a fifteen-minute readout.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A half-day sprint is held in which every group presents a reviewed answer to the question owner."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Find a manager with a real question they would welcome help on"
                - "Check the question can be answered from the sandbox tables"
                - "Form groups of three with mixed skill levels"
                - "Book a fifteen-minute readout with the question owner"
            - name: Capstone show-and-tell for the first cohort
              description: |-
                ## Purpose
                Presenting what they built, to their managers and the sponsor, turns private progress into visible results and makes the case for the next cohort. Five minutes each on the manual task they replaced, the query and the time saved is enough, and it gives managers a reason to keep protecting learning time.

                ## Milestones
                1. A one-hour session booked with learners, managers and the sponsor.
                2. Each learner prepared a five-minute walkthrough of their capstone query.
                3. Every learner presented.
                4. The sponsor's decision on a second cohort recorded.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every pilot learner presents their capstone and the sponsor's decision on a second cohort is written down."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Book an hour with learners, their managers and the sponsor"
                - "Give learners a three-slide outline for their walkthrough"
                - "Run the session and keep each talk to five minutes"
                - "Ask the sponsor for a decision on the second cohort"
            - name: Retraining after a warehouse platform change
              description: |-
                ## Purpose
                When the company moves warehouse platforms or rebuilds its core tables, trained users suddenly find saved queries failing and functions behaving differently. A dated retraining session on the new dialect, renamed tables and changed date functions, timed for the week of the cut-over, stops a wave of help requests and a quiet return to spreadsheets.

                ## Milestones
                1. A list of dialect and table differences that affect library patterns and exercises.
                2. Every library pattern and exercise migrated and retested on the new platform.
                3. A one-hour retraining session held in the week of the cut-over.
                4. A translation sheet of old to new functions published.

                ## Notes
                Ask the platform team for the cut-over date early. Training a month too early is forgotten; a week late means broken queries.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A retraining session is held in the cut-over week, with every library pattern retested and a translation sheet published."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask the platform team for the planned cut-over date"
                - "List the function and table changes that affect the library"
                - "Retest every library pattern and exercise on the new platform"
                - "Run a one-hour retraining session in the cut-over week"
            - name: Annual SQL refresher day
              description: |-
                ## Purpose
                A year after the course, many learners use SQL only for the handful of queries they saved, and new tables have appeared that nobody has taught. A yearly refresher day, with a short recap, the year's most useful new patterns and a fresh round of challenges, brings people back up to speed and recruits the next tutors.

                ## Milestones
                1. A date set and announced at least a month ahead.
                2. A recap of the core concepts and the year's new tables prepared.
                3. Five new challenges written on recent data.
                4. Attendance and feedback recorded for the retrospective.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A refresher day is held each year with attendance recorded and at least five new challenges completed."
                cadence: cyclic
              tasks:
                - "Pick a refresher date in a quiet month for most teams @recurring(yearly)"
                - "List the tables added since the last course"
                - "Write five new challenges on recent data"
                - "Record attendance and feedback for the retrospective"
            - name: Eight-week self-study plan for a busy colleague
              description: |-
                ## Purpose
                Some people cannot attend a cohort: they work shifts, travel or join halfway through the year. For a knowledge worker learning alone, a plan of three short sessions a week for eight weeks, using the course exercises, office hours and the help channel, gets them to the same assessment as everyone else without needing a classroom.

                ## Milestones
                1. Three thirty-minute study slots a week blocked in the calendar.
                2. The course exercises worked through in order, one module a week.
                3. At least two office hours attended with their own queries.
                4. The practical assessment sat by week nine.

                ## Notes
                Studying alone, people skip the joins week. Do not: book an office hours slot for it in advance.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A self-study learner completes all eight weekly modules and sits the practical assessment within nine weeks."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Block three thirty-minute study slots a week in your calendar"
                - "Work through this week's module exercises @recurring(weekly:tue,thu)"
                - "Book an office hours slot for the joins week now"
                - "Book the practical assessment for week nine"
            - name: SQL onboarding for new joiners
              description: |-
                ## Purpose
                New joiners in data-heavy roles arrive between cohorts and often learn from whichever old query their predecessor left behind. A standard first-month SQL onboarding, covering access, safety rules, the table guide, the pattern library and a buddy from the tutor group, gets them querying correctly in weeks instead of inheriting bad habits.

                ## Milestones
                1. A first-month onboarding checklist for SQL written.
                2. Access requests built into the joiner's first-week setup.
                3. A tutor assigned as buddy to every new joiner in scope.
                4. The joiner self-study plan or the next cohort booked by the end of month one.

                ## Notes
                Start from the **Onboarding plan** template.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A SQL onboarding plan is in use, and the next two new joiners in scope each have access, a buddy and a training place within a month."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Create the SQL onboarding plan from the onboarding plan template"
                - "Ask the hiring managers to add learner access to first-week setup"
                - "Assign a tutor buddy to the next new joiner in scope"
                - "Book each new joiner onto a cohort or the self-study plan"
            - name: Spreadsheet users moving to SQL
              description: |-
                ## Purpose
                Finance, operations and sales colleagues who live in spreadsheets learn faster when every new idea is mapped to something they already know. Teaching filters as AutoFilter, GROUP BY as a pivot table and joins as lookups, with the same data shown both ways, removes the fear and explains why SQL scales where a spreadsheet crashes.

                ## Milestones
                1. A side-by-side sheet mapping spreadsheet features to SQL clauses.
                2. One exercise done first in a spreadsheet and then in SQL.
                3. The difference between a lookup returning the first match and a join returning every match demonstrated.
                4. Learners from spreadsheet-heavy teams rated the mapping useful in feedback.

                ## Notes
                The lookup versus join difference is the one that bites. Show a lookup quietly ignoring duplicate matches.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A spreadsheet to SQL mapping sheet is used in at least one session and rated useful by most spreadsheet-heavy learners."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List the spreadsheet features learners use most"
                - "Write the side-by-side mapping to SQL clauses"
                - "Prepare one exercise solved both in a spreadsheet and in SQL"
                - "Demonstrate how a lookup hides duplicate matches that a join reveals"
            - name: Training a remote team across time zones
              description: |-
                ## Purpose
                Live sessions at a time that suits head office are at dawn or dusk for half a distributed team. Recording every session, posting a written exercise the same day and running office hours at two different times lets people in other time zones finish the course without staying up late or falling behind.

                ## Milestones
                1. Learner time zones mapped and two office hours times chosen to cover them.
                2. Every session recorded and posted within a day with its exercise.
                3. An asynchronous thread for each session where questions are answered within a day.
                4. Completion rates for remote and office learners compared.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All sessions are recorded and posted within a day, and remote learners complete the course at a rate within ten points of office learners."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Map every learner's time zone and working hours"
                - "Choose two office hours times that cover all of them"
                - "Post the session recording and written exercise each week @recurring(weekly:thu)"
                - "Compare completion between remote and office learners at the end"
            - name: Catch-up track for learners who fall behind
              description: |-
                ## Purpose
                Two or three people in every cohort miss sessions for holidays, illness or a busy month and then feel too far behind to return. A quiet catch-up track, with a recorded session, a short pairing with a tutor and permission to skip the optional exercises, brings them back instead of losing them.

                ## Milestones
                1. A rule for when someone counts as behind, such as two missed sessions.
                2. A catch-up pack per session: recording, key exercise and answers.
                3. A thirty-minute tutor pairing offered to anyone behind.
                4. Every learner who fell behind either caught up or deferred to the next cohort by choice.

                ## Notes
                Approach people privately and early. A public reminder in the group channel makes it worse.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Every learner who missed two sessions was offered a tutor pairing within a week and has either caught up or chosen to defer."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Agree the rule for when a learner counts as behind"
                - "Prepare a catch-up pack for each session"
                - "Message each learner who is behind privately within a week"
                - "Pair each of them with a tutor for thirty minutes"
            - name: Reading-only SQL track for managers and reviewers
              description: |-
                ## Purpose
                Managers who sign off numbers do not need to write SQL, but they do need to read a query well enough to ask the right questions: what is being counted, what is excluded, which dates. A two-session reading track, built on annotated queries from the pattern library, gives them that without the full course.

                ## Milestones
                1. Five annotated queries chosen from the library to read through.
                2. Two sessions run on reading filters, joins, grouping and date ranges.
                3. A list of five questions to ask about any query handed to a manager.
                4. Each participant correctly described what one unseen query counts.
              priority: low
              frontmatter:
                mode: service
                output_kind: knowledge
                success_criteria: "Each participant in the reading track correctly explains in writing what one unseen library query counts and excludes."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Pick five library queries and annotate each line in plain English"
                - "Write the five questions to ask about any query"
                - "Run two one-hour reading sessions for managers"
                - "Ask each participant to describe one unseen query in writing"
            - name: Reading query plans and writing cheaper queries
              description: |-
                ## Purpose
                Once colleagues are confident, some will write queries that scan whole event tables every morning. Teaching advanced learners to read the warehouse's query profile, filter on partition columns, select only needed columns and avoid repeated large joins keeps their work fast and stops training from showing up as a jump on the platform bill.

                ## Milestones
                1. A short guide to reading the warehouse's query profile or plan.
                2. Before and after examples showing partition filters and column pruning.
                3. The ten most expensive learner queries from the last month identified.
                4. At least five of those rewritten by their authors with the saving recorded.

                ## Notes
                Ask the platform owner for the query history view rather than guessing which queries are expensive.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five of the ten most expensive learner queries are rewritten by their authors, each with scanned data before and after recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the platform owner for last month's learner query history"
                - "Find the ten learner queries that scanned the most data"
                - "Teach partition filters and column pruning with two examples"
                - "Help five authors rewrite their queries and record the saving"
            - name: Advanced patterns for gaps, islands and sessions
              description: |-
                ## Purpose
                Experienced learners eventually meet questions that basic SQL handles badly: consecutive days of activity, periods a subscription was paused, or grouping events into sessions with a thirty-minute gap. A specialist module on gaps-and-islands and sessionisation with window functions, built on the company's own event data, keeps the strongest people growing.

                ## Milestones
                1. Worked examples of gaps-and-islands and sessionisation on company event data.
                2. Three exercises with checked answers at increasing difficulty.
                3. Each pattern added to the library with an explanation.
                4. At least three advanced learners completed all three exercises.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Two advanced patterns are published in the library with three checked exercises completed by at least three learners."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Choose an event table suitable for sessionisation exercises"
                - "Write a worked gaps-and-islands example on activity days"
                - "Write three exercises at increasing difficulty with answers"
                - "Add both patterns to the library with explanations"
            - name: Testing queries with grain and duplicate checks
              description: |-
                ## Purpose
                Advanced learners who write queries others rely on need more than a sanity glance: they need small checks that prove a result has one row per customer, no unexpected NULL keys and totals that reconcile to source. Teaching people to write these assertion queries alongside important work brings their output closer to an analyst's standard.

                ## Milestones
                1. Three assertion patterns written: unique grain, no NULL keys and reconciliation to source.
                2. The patterns added to the library with examples.
                3. Every capstone query extended with at least two assertions.
                4. One real error caught by an assertion recorded as an example.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three assertion patterns are in the library and every capstone query has at least two passing assertions attached."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write a unique-grain check that returns rows only when duplicates exist"
                - "Write a NULL key check and a reconciliation-to-source check"
                - "Add the three checks to the pattern library"
                - "Help each capstone author attach two checks to their query"
            - name: Automatic checker for exercise answers
              description: |-
                ## Purpose
                Marking homework by hand stops scaling at around fifteen learners. A simple checker that runs a learner's query, compares the result set with the reference answer and reports matching row counts, totals and differences gives instant feedback and frees the trainer for the questions that need a person.

                ## Milestones
                1. A checker that compares a learner result set with the reference answer.
                2. Feedback that says what differs: row count, a total or specific rows.
                3. Every course exercise registered with its reference answer.
                4. The checker used by a full cohort with problems logged and fixed.

                ## Notes
                Compare results, not query text. There are many correct ways to write the same query.
              priority: low
              deadlineOffsetDays: 150
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every course exercise can be checked automatically against its reference answer, and one full cohort has used the checker."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Decide whether the checker runs in a notebook, a script or the editor"
                - "Build the comparison of row counts, totals and differing rows"
                - "Register every exercise with its reference answer query"
                - "Ask the agent to draft friendly feedback messages for each kind of mismatch"
            - name: Levelled internal SQL programme for other departments
              description: |-
                ## Purpose
                Other departments will ask for the course once the pilot works, and the ad hoc version will not survive the demand. Turning the material into three named levels (reader, querier and reviewer), each with its own assessment, tutors and published dates, makes SQL training a standing internal programme rather than one analyst's side project.

                ## Milestones
                1. Three levels defined with the skills and assessment for each.
                2. A yearly calendar of cohorts and refresher days published.
                3. Tutors assigned per level from previous graduates.
                4. At least two departments beyond the pilot enrolled.

                ## Notes
                Agree the programme's owner and budget with the sponsor before announcing it widely.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A three-level programme with a published yearly calendar has enrolled learners from at least two departments beyond the pilot."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write the skills and assessment for each of the three levels"
                - "Agree an owner and budget for the programme with the sponsor"
                - "Publish next year's cohort calendar @recurring(yearly)"
                - "Invite two new departments to nominate learners"
---

# SQL Training for Teams

This area is for whoever has been asked to teach colleagues SQL, whether that is an analyst who keeps answering the same simple questions, a learning and development lead, or a team that wants to stop waiting in the data queue. It starts with the foundations (a needs survey, the real questions the course must answer, read-only access, a masked sandbox, safety rules and a course outline), moves through modules built on your own tables, the routines that keep learners practising, the decisions about format, assessment and style, the dated sessions, the situations of new joiners, spreadsheet users, remote teams and managers, and finally specialist work such as query plans, advanced patterns and automatic answer checking.

What repeats is weekly office hours and a query of the week, a daily look at the help channel, monthly checks that the exercises and pattern library still run against the live schema, quarterly access, skills and feedback reviews, and a yearly refresher day. The Purchase decision, Course, Skills matrix, Feedback themes and Onboarding plan templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
