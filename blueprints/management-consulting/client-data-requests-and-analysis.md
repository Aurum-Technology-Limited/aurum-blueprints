---
id: management-consulting.client-data-requests-and-analysis
name: Client Data Requests and Analysis
description: "Field-level data requests, a tracked register, secure handling, cleaning and a single master dataset, checks that tie to the accounts, and written limitations, from the first request letter to deletion at close."
category: business
version: 1.0.0
tags: [management-consulting, client-data-requests-and-analysis, knowledge-worker, data-requests, data-cleaning, data-quality, analysis, reconciliation]
author: Aurum Technology
starter_structure:
  templates:
    - meeting-notes
    - risk-register
    - operational-checklist
  pillars:
    - name: Management Consulting
      emoji: "📋"
      description: "Consulting as a craft and a business: case interviews and getting hired, structuring problems with issue trees, hypothesis-driven workplans, client interviews, slides and steering committees, the career from analyst to partner, and going independent or building a boutique firm with sensible pricing."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Client Data Requests and Analysis
          description: "Getting and analysing client data: precise data requests, cleaning, a single source of truth, analysis checks and explaining the limitations."
          projects:
            - name: Engagement data request register
              description: |-
                ## Purpose
                Every engagement asks for dozens of files from several client teams, and within a fortnight nobody can say which were requested, promised, received or rejected. A single register, one row per request with owner, date asked, date due and status, becomes the document you send to the client, quote in escalations and use to explain why an analysis is late.

                ## Milestones
                1. A register with columns for request ID, description, client owner, date asked, date due, status and notes.
                2. Every request made so far entered with its own ID.
                3. Status values agreed in the team: requested, promised, partial, received, rejected, withdrawn.
                4. The register saved in the engagement folder where the whole team can edit it.

                ## Notes
                Give requests short IDs such as DR-014 and use them in every email subject line. It makes chasing and searching far faster.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A shared register lists every data request on the engagement with an ID, an owner, a due date and a status from an agreed list."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Create the register with ID, owner, asked, due, status and notes columns"
                - "Enter every request already sent by email or mentioned in meetings"
                - "Agree the six status values with the engagement manager"
                - "Add the request ID to the subject line of each open request email"
            - name: First client data request letter
              description: |-
                ## Purpose
                Vague requests such as send us your sales data come back as a PDF of last year's board pack. A first request that names the system, the fields, the grain, the period and the file format gets usable data in one round instead of three, and sets the tone for every request after it.

                ## Milestones
                1. The analyses in the workplan listed with the data each one needs.
                2. Each request written with system or source, fields, grain, period, currency and format.
                3. The letter reviewed by the engagement manager before it goes to the client.
                4. The letter sent with a requested return date and a named contact for questions.

                ## Notes
                State the grain explicitly: one row per invoice line, per month, per site. It is the single most common thing a request leaves out.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A data request letter is sent in which every item names the source, fields, grain, period and format, with a return date."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List each planned analysis next to the data it depends on"
                - "Write each item with source, fields, grain, period, currency and format"
                - "Send the draft letter to the engagement manager for review"
                - "Send the final letter with a return date and your contact details"
            - name: Reusable data request template with field definitions
              description: |-
                ## Purpose
                Most engagements ask for the same handful of datasets: the trial balance, invoice lines, headcount, customer and product masters. A personal template with standard field lists and definitions for each one means a new request takes an hour, not a day, and nothing obvious is forgotten.

                ## Milestones
                1. Standard request blocks written for finance, sales, headcount, procurement and operations data.
                2. Each block lists fields with a one-line definition and the preferred format.
                3. A short cover note explaining grain, period and file format to client staff.
                4. The template used on at least one real request and corrected afterwards.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A request template covering at least five common datasets, each with defined fields, has been used on one live engagement."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Collect three past request letters from your own engagements"
                - "Write a standard block for trial balance and invoice line data"
                - "Add blocks for headcount, procurement and operations data"
                - "Update the template with anything a live request taught you @recurring(quarterly)"
            - name: Secure handling setup for client data
              description: |-
                ## Purpose
                Salaries, customer names and unpublished financials often sit in client data, and the engagement letter and your firm's policy set strict rules on where it may live. Setting up the approved storage, access list and transfer method before the first file arrives avoids the classic slip of a spreadsheet sitting on a personal laptop or in a personal email account.

                ## Milestones
                1. The confidentiality and data protection terms in the engagement letter read and summarised.
                2. An approved storage location set up with access limited to named team members.
                3. A secure transfer method agreed with the client for receiving files.
                4. Rules for personal data, printing and local copies written down for the team.

                ## Notes
                Your firm's risk or legal team decides what is allowed. Ask them rather than guessing, especially for health, payroll or customer personal data.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Client files are received only through an agreed secure method into storage that only named team members can open, with written handling rules."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read the confidentiality clauses in the engagement letter"
                - "Set up the approved data folder and limit access to named people"
                - "Agree a secure file transfer method with the client contact"
                - "Review who has access to the client data folder @recurring(monthly:12)"
            - name: Raw, working and final data folder structure
              description: |-
                ## Purpose
                Four people editing the same extracts will overwrite the original within a week unless raw files are kept apart and never touched. A folder structure with raw, working, final and archive areas, plus a naming rule with date and version, means anyone can trace a number back to the file it came from.

                ## Milestones
                1. Folders created for raw, working, final and archive data.
                2. Raw files set to read only once saved.
                3. A naming rule agreed: request ID, short description, date received, version.
                4. Every file received so far renamed and filed under the rule.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every client file sits in a raw, working, final or archive folder and follows the agreed naming rule with request ID and date."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create raw, working, final and archive folders in the data location"
                - "Write the file naming rule at the top of the request register"
                - "Rename and file everything received so far"
                - "Move superseded working files into the archive folder @recurring(monthly:28)"
            - name: Choosing your analysis tool stack
              description: |-
                ## Purpose
                Excel breaks somewhere around a million rows, and many client extracts are larger than that. Deciding early which tools you will use for which job, such as Excel and Power Query for small files and a database or Python for transaction data, saves a painful rebuild halfway through the engagement.

                ## Milestones
                1. The tools your firm licenses and permits on client data listed.
                2. A rule of thumb written for which tool handles which size and type of data.
                3. The chosen tools installed and tested on a sample client file.
                4. The choice shared with the team so files stay compatible.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written tool choice for small, medium and large datasets is shared with the team and tested on a real client file."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the analysis tools your firm permits on client data"
                - "Estimate the row count of the largest file you expect"
                - "Test the chosen tool on one sample extract"
                - "Share the tool choice and file formats with the team"
            - name: Client data owner map
              description: |-
                ## Purpose
                The person who agreed to send the data is rarely the person who can extract it. A map of which client team owns which system, who can run an extract and who must approve its release turns slow requests into direct conversations with the right analyst.

                ## Milestones
                1. The client's main systems listed: ERP, CRM, HR, data warehouse and key spreadsheets.
                2. A named owner, an extractor and an approver recorded for each system.
                3. Owners' availability and preferred contact method noted.
                4. The map checked with the client sponsor's office.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each client system the analysis depends on has a named owner, extractor and approver recorded and confirmed by the client."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the client sponsor's office for a list of the main systems"
                - "Record the owner, extractor and approver for each system"
                - "Note who holds key spreadsheets outside the main systems"
                - "Confirm the map with the client project lead"
            - name: Data request walkthrough call with client data owners
              description: |-
                ## Purpose
                A request letter read alone gets interpreted; a request walked through in a 45-minute call gets questioned, corrected and promised. Meeting the data owners to go line by line surfaces fields that do not exist, systems you did not know about and realistic dates before anyone starts extracting.

                ## Milestones
                1. The call held with each data owner or their extractor present.
                2. Every request line confirmed as available, partly available or unavailable.
                3. A promised date recorded for each available item.
                4. Notes and changed dates sent to attendees the same day.

                ## Notes
                Start from the **Meeting notes** template. Ask what the field is called in their system, not what you call it.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Each request line has a status and a promised date agreed with its data owner, recorded in the register within a day of the call."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Invite each data owner to a walkthrough of the request letter"
                - "Go line by line and mark each item available, partial or unavailable"
                - "Write the promised date next to each available item"
                - "Send the call notes and revised dates to attendees"
            - name: First-pass receipt check on incoming files
              description: |-
                ## Purpose
                Files are often marked received in the register and opened for the first time a week later, when it is too late to ask for the missing month. A ten-minute receipt check on arrival, comparing rows, periods, fields and totals against the request, catches gaps while the extractor still remembers running it.

                ## Milestones
                1. A short checklist written: file opens, fields match request, period complete, row count, control total.
                2. Every file checked within one working day of arrival.
                3. Gaps reported back to the data owner with the request ID.
                4. The register updated with received, partial or rejected after each check.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Every file received in a month has a completed receipt check within one working day, with gaps reported to the data owner."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the five-point receipt checklist in the register"
                - "Check the most recent file received against its request"
                - "Email the data owner about any missing period or field"
                - "Mark each checked file received, partial or rejected"
            - name: Weekly data request status update
              description: |-
                ## Purpose
                Sponsors on the client side usually do not know their teams are three weeks late on data until a steering committee slips. A short weekly status table, sent to the client project office, shows what is outstanding, by owner and days late, and makes the delay visible to the people who can fix it.

                ## Milestones
                1. A one-page status view of the register: outstanding items by owner and days late.
                2. The status sent every week on the same day.
                3. Items late for two weeks flagged for the client project lead.
                4. Fewer than five items more than a week late after a month of updates.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A status table of outstanding data requests reaches the client project office every week for the life of the engagement."
                cadence: rolling
              tasks:
                - "Build a filtered view of the register showing only open items"
                - "Refresh the days-late column in the register @recurring(weekly:mon)"
                - "Send the outstanding requests table to the client project office @recurring(weekly:fri)"
                - "Flag items late for two weeks to the client project lead"
            - name: Escalation routine for overdue requests
              description: |-
                ## Purpose
                Chasing the same analyst every day damages the relationship without speeding anything up. A clear ladder, a polite reminder at five working days, a call at ten and a word with the sponsor at fifteen, keeps the pressure steady and gives the engagement manager a defensible record if the timeline slips.

                ## Milestones
                1. An escalation ladder agreed with the engagement manager and shared with the client lead.
                2. Reminder and call wording drafted so they can be sent quickly.
                3. Every overdue item showing which step of the ladder it has reached.
                4. Escalations to the sponsor made only through the engagement manager.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every request more than five working days late shows its escalation step in the register, and each step was taken on time."
                cadence: rolling
              tasks:
                - "Write the three-step escalation ladder with working-day triggers"
                - "Draft a short reminder email that names the analysis waiting on the data"
                - "Chase requests more than five working days late @recurring(weekly:wed)"
                - "Brief the engagement manager on anything reaching the sponsor step"
            - name: Single master dataset as the source of truth
              description: |-
                ## Purpose
                When three team members each clean their own copy of the sales file, the steering committee deck ends up with three revenue figures. One master dataset, cleaned once, versioned and used by every analysis, is the only reliable way to keep numbers consistent across pages and workstreams.

                ## Milestones
                1. One owner named for the master dataset.
                2. The cleaned master saved in the final folder with a version number.
                3. Every analysis file linked to or loaded from the master, not a private copy.
                4. A version log recording what changed in each release.

                ## Notes
                Revenue, headcount and cost baselines should each appear once in the master and be quoted from there everywhere else.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All team analyses draw from one versioned master dataset with a named owner and a log of every release."
                cadence: rolling
              tasks:
                - "Agree who owns the master dataset on this engagement"
                - "Save the first cleaned master with version 1.0 and today's date"
                - "Point each analysis file at the master instead of a private copy"
                - "Log the master dataset version and what changed @recurring(weekly:thu)"
            - name: Analysis assumptions log
              description: |-
                ## Purpose
                Every analysis carries quiet choices: excluding intercompany sales, treating returns as negative revenue, allocating shared costs by headcount. A running log of each assumption, who made it and whether the client agreed, protects the team when a number is challenged in the readout.

                ## Milestones
                1. A log with columns for assumption, analysis affected, reason, made by, client agreed and date.
                2. Assumptions behind every current analysis entered.
                3. Each material assumption confirmed by a named client contact.
                4. The log reviewed with the engagement manager every week.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each material assumption in the analysis appears in the log with its reason and a named client contact who agreed it."
                cadence: rolling
              tasks:
                - "Set up the assumptions log next to the request register"
                - "Enter the assumptions behind the analyses already built"
                - "Ask the client finance lead to confirm the material assumptions"
                - "Walk the engagement manager through new assumptions @recurring(weekly:tue)"
            - name: Client data anomaly and issues log
              description: |-
                ## Purpose
                Negative quantities, a missing March, a customer coded to two regions: each anomaly gets noticed, discussed in a corridor and forgotten. Logging every anomaly with its impact and resolution turns surprises into a list the client can work through, and becomes the basis of the limitations page later.

                ## Milestones
                1. A log with anomaly, dataset, rows affected, value affected, owner and resolution.
                2. Every known anomaly entered and sized.
                3. Each anomaly marked fixed, accepted with caveat or excluded.
                4. Unresolved anomalies above an agreed size raised with the client data owner.

                ## Notes
                Start from the **Risk register** template, using impact as the value affected and likelihood as how often the pattern recurs.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every known data anomaly is logged with its size and a resolution status, and large open ones are with a client owner."
                cadence: rolling
              tasks:
                - "Create the anomaly log with rows and value affected columns"
                - "Enter and size every anomaly the team has spotted so far"
                - "Triage new anomalies and assign each a resolution owner @recurring(weekly:mon)"
                - "Send open anomalies above the agreed size to the data owner"
            - name: Analysis check routine before numbers leave the team
              description: |-
                ## Purpose
                One wrong total in a client email travels further and faster than a correct one in a deck. A short routine applied to every analysis before it is shared, covering control totals, row counts, filters, units and a sense check against a known figure, catches most errors in five minutes.

                ## Milestones
                1. A check sheet with control totals, row counts, filters left on, units and a known-figure comparison.
                2. A checks tab added to every analysis workbook.
                3. No analysis shared outside the team without the checks tab showing all green.
                4. Errors caught by the checks noted so the routine can be improved.

                ## Notes
                Start from the **Operational checklist** template. A sense check against one figure the client already knows, such as last year's reported revenue, is the most valuable single test.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every analysis shared outside the team for a month carried a completed checks tab with control totals and a known-figure comparison."
                cadence: rolling
              tasks:
                - "Write the five-point analysis check sheet"
                - "Add a checks tab to each open analysis workbook"
                - "Run the control totals tab on any analysis file changed today @recurring(daily)"
                - "Record each error the checks caught and where it came from"
            - name: Monthly reconciliation to the management accounts
              description: |-
                ## Purpose
                A baseline that does not tie to the client's own reported numbers will be dismissed in the first five minutes of a steering committee. Reconciling each major dataset to the management accounts or the general ledger, and explaining the gap, makes the analysis something the finance director can defend alongside you.

                ## Milestones
                1. The relevant management accounts or trial balance obtained for the analysis period.
                2. Revenue, cost and headcount totals from the datasets compared with the accounts.
                3. Each difference above an agreed threshold explained in a reconciliation table.
                4. The reconciliation reviewed by a client finance contact.

                ## Notes
                Gaps are normal: accruals, intercompany, timing and manual journals. The job is to explain them, not to make them vanish.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each major dataset has a reconciliation table to the management accounts with every gap above the threshold explained and reviewed by client finance."
                cadence: rolling
              tasks:
                - "Request the management accounts for every month in the analysis period"
                - "Agree a materiality threshold for differences with the manager"
                - "Reconcile the latest dataset totals to the management accounts @recurring(monthly:8)"
                - "Send the reconciliation table to the client finance contact"
            - name: Monthly data drop refresh cycle
              description: |-
                ## Purpose
                Longer engagements and transformation tracking need the same extracts every month, and each drop arrives in a slightly different shape. A fixed cycle for receiving, checking, loading and comparing each month's drop to the last keeps trend analysis honest and stops a format change from silently breaking the numbers.

                ## Milestones
                1. The recurring extracts and their expected arrival dates listed.
                2. A refresh checklist covering receipt, format comparison, load and month-on-month variance.
                3. Three consecutive months refreshed using the checklist.
                4. Any format change from the client caught and fixed before analysis reran.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive monthly data drops were received, format-checked, loaded and compared with the prior month using a written checklist."
                cadence: cyclic
              tasks:
                - "List each recurring extract with its expected arrival day"
                - "Log arrival of the monthly data drop and compare its columns with last month @recurring(monthly:5)"
                - "Rerun the month-on-month variance checks on the refreshed data @recurring(monthly:7)"
                - "Note any format change and update the load steps"
            - name: Weekly working session with the client analyst
              description: |-
                ## Purpose
                Most data questions are answered in a minute by the person who ran the extract, and take a day by email. A standing 30-minute session each week with the client's analyst clears the open questions list, builds a working relationship and often turns up better data you did not know to ask for.

                ## Milestones
                1. A standing weekly slot agreed with the client analyst.
                2. An open questions list kept and sent the day before each session.
                3. Answers recorded against the relevant request ID or anomaly.
                4. The list cleared to fewer than five open questions most weeks.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly session with the client analyst ran for the engagement, with each answer recorded against a request or anomaly."
                cadence: rolling
              tasks:
                - "Ask the client analyst for a standing 30-minute weekly slot"
                - "Start an open data questions list grouped by dataset"
                - "Hold the working session and record answers against request IDs @recurring(weekly:thu)"
                - "Ask what other reports or extracts the analyst uses day to day"
            - name: Reading ERP and general ledger extracts
              description: |-
                ## Purpose
                Finance data usually comes from ERP tables with names like journal lines and cost centre hierarchies, and misreading a debit sign or a posting period distorts everything downstream. Learning how a general ledger, sub-ledgers and master tables fit together lets you ask precise questions and spot an incomplete extract on sight.

                ## Milestones
                1. The structure of a general ledger extract understood: account, cost centre, period, debit, credit, document.
                2. The difference between posting date, document date and period explained in your own notes.
                3. Sub-ledgers for receivables, payables and fixed assets mapped to the ledger.
                4. One real extract reconciled from journal lines to the trial balance.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One general ledger extract has been rebuilt from journal lines into a trial balance that matches the client's to within an explained difference."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask a finance colleague to walk you through a general ledger extract"
                - "Write notes on posting date, document date and period"
                - "Map the receivables and payables sub-ledgers to their control accounts"
                - "Rebuild a trial balance from one extract's journal lines"
            - name: Data cleaning techniques practice
              description: |-
                ## Purpose
                Client data needs the same fixes again and again: duplicate customers, dates stored as text, mixed currencies, trailing spaces in product codes. Practising each technique on a practice dataset until it is quick means cleaning takes hours rather than days when the real file arrives.

                ## Milestones
                1. A list of the ten most common cleaning problems you have met.
                2. A worked method for each one in your chosen tool.
                3. Each method practised on a public or dummy dataset.
                4. A one-page cleaning crib sheet saved for engagements.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A crib sheet with a tested method for ten common cleaning problems exists and was practised on a non-client dataset."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List the ten cleaning problems you meet most often"
                - "Download a public dataset with messy names and dates to practise on"
                - "Work through deduplication and date conversion on the practice data"
                - "Write the one-page cleaning crib sheet"
            - name: SQL for client extracts
              description: |-
                ## Purpose
                Once a client gives you a database copy or read access to a warehouse, a few lines of SQL do what an afternoon of lookups cannot. Joins, grouping, filtering and window functions cover most consulting needs, and knowing them also lets you write an exact query for the client's analyst to run.

                ## Milestones
                1. Select, filter, group and join queries written without looking up syntax.
                2. Window functions used for running totals and ranking.
                3. A query written and run against a practice database with at least three joined tables.
                4. One real request sent to a client as a query they could run directly.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You can write a three-table join with grouping and a window function unaided, and have sent one client request as a runnable query."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Install a free local database and load a sample dataset"
                - "Solve two SQL practice problems on joins or grouping @recurring(weekly:sun)"
                - "Write a running total query using a window function"
                - "Draft one client data request as a query their analyst can run"
            - name: Power Query and pivot fluency for large files
              description: |-
                ## Purpose
                Power Query lets you load, clean and combine monthly files with steps that rerun on next month's drop, and pivots answer most first-pass questions. Getting fluent in both removes the habit of hand-editing cells, which is where most untraceable errors come from.

                ## Milestones
                1. A folder of monthly files combined into one table with Power Query.
                2. Cleaning steps recorded in the query rather than done by hand.
                3. Pivots built for the five most common cuts: period, region, product, customer, channel.
                4. The query refreshed on a new file without breaking.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A Power Query that combines and cleans a folder of monthly files refreshes on a new file without manual edits."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Combine a folder of three monthly practice files with Power Query"
                - "Move every manual cleaning step into the query"
                - "Build pivots for period, region, product, customer and channel"
                - "Add a fourth file and check the query refreshes cleanly"
            - name: Sampling and basic statistics for consultants
              description: |-
                ## Purpose
                Not every question needs the full population: a sample of 200 invoices can show discount leakage, and a sample of contracts can test compliance. Knowing when a sample is enough, how to draw it fairly and how to state its uncertainty keeps conclusions defensible without months of data collection.

                ## Milestones
                1. Random, stratified and judgemental sampling explained in your own notes.
                2. A simple rule for sample size and margin of error that you can apply.
                3. One sample drawn and analysed on real or practice data.
                4. A sentence stating the uncertainty written for that result.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One analysis based on a sample states how the sample was drawn, its size and the margin of error in a written sentence."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write a half-page note on random, stratified and judgemental sampling"
                - "Work through a sample size and margin of error example"
                - "Draw a stratified sample from a practice dataset"
                - "Write the uncertainty sentence for the sample result"
            - name: Customer and product hierarchy mapping
              description: |-
                ## Purpose
                Clients rarely store customers and products the way the analysis needs them: the same retailer appears under five account numbers and product families changed last year. Building mapping tables that roll codes up into agreed hierarchies is often the hardest and most valuable cleaning step on a commercial engagement.

                ## Milestones
                1. The client's existing customer and product hierarchies obtained.
                2. Mapping tables built from raw codes to the analysis hierarchy.
                3. Unmapped codes reduced to below an agreed share of revenue.
                4. The mapping reviewed and accepted by a client commercial contact.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Mapping tables cover all but an agreed small share of revenue, and a client commercial contact has signed off the hierarchy."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask the client for current customer and product hierarchy files"
                - "Build a mapping table from raw customer codes to parent groups"
                - "Measure the share of revenue still unmapped"
                - "Review the mapping with a client sales operations contact"
            - name: Writing data limitations and caveats
              description: |-
                ## Purpose
                Every dataset has gaps, and clients forgive gaps that are stated plainly but not ones they discover themselves. Learning to write a short, precise limitations note, saying what the data covers, what it excludes, how big the effect is and what would change the conclusion, is a skill partners notice.

                ## Milestones
                1. Three limitations notes from past decks collected and compared.
                2. A standard four-part structure: coverage, exclusions, size of effect, impact on the answer.
                3. A limitations note written for a current analysis.
                4. The note reviewed by the engagement manager and tightened.

                ## Notes
                Size the effect wherever you can. Data covers 92 percent of revenue is far more useful than data is incomplete.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A limitations note for a live analysis states coverage, exclusions and the size of each effect, and the manager has approved it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Collect three limitations pages from past engagements"
                - "Write the four-part limitations structure on one page"
                - "Draft a limitations note for your current analysis"
                - "Ask the engagement manager to review and tighten the note"
            - name: Exploratory data profiling routine
              description: |-
                ## Purpose
                Jumping straight to the answer analysis skips the step where you learn what the data actually looks like. A fixed profiling routine for any new dataset, covering distributions, nulls, outliers, distinct counts and top values, takes half an hour and regularly reveals the issue that would have embarrassed the team later.

                ## Milestones
                1. A profiling checklist written: row count, nulls by field, distinct counts, min and max, top ten values, outliers.
                2. A reusable profiling sheet or script built in your tool.
                3. The routine run on every new dataset this engagement.
                4. Findings from each profile added to the anomaly log.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Every new dataset on the engagement has a saved profile covering nulls, distinct counts, ranges and outliers before analysis begins."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write the six-point profiling checklist"
                - "Build a profiling sheet that fills in from any loaded table"
                - "Profile the most recently received dataset"
                - "Add the profile findings to the anomaly log"
            - name: Python or R for repeatable cleaning scripts
              description: |-
                ## Purpose
                Cleaning done by hand cannot be rerun when the client sends a corrected file at 11pm before the steering committee. A script in Python or R that loads, cleans and outputs the master dataset reruns in seconds and documents every step for whoever checks your work.

                ## Milestones
                1. A working environment set up on your firm laptop within policy.
                2. Load, filter, join, group and export done comfortably in one language.
                3. One full cleaning process scripted from raw file to master dataset.
                4. The script rerun on a revised file with no manual edits.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A script turns one raw client file into the master dataset and has been rerun successfully on a revised version of that file."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Check which languages your firm allows on client data"
                - "Complete a short course on data frames in Python or R"
                - "Script one cleaning process from raw file to master output"
                - "Rerun the script on a revised file and compare outputs"
            - name: Proxy data decision when client data does not exist
              description: |-
                ## Purpose
                Sometimes the client simply does not record what the analysis needs, such as time spent by activity or competitor prices. Deciding deliberately between a proxy, a short survey, a manual sample or dropping the analysis, and recording why, beats waiting for data that will never arrive.

                ## Milestones
                1. The missing data and the analysis it blocks written in one sentence.
                2. At least three options compared: proxy, survey, manual sample, drop the analysis.
                3. A choice agreed with the engagement manager and recorded in the assumptions log.
                4. The limitation the choice creates written for the final deck.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision names the chosen proxy or alternative, the options rejected and the resulting caveat for the deck."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down the missing data and the analysis it blocks"
                - "Compare proxy, survey, manual sample and dropping the analysis"
                - "Agree the choice with the engagement manager"
                - "Record the decision and its caveat in the assumptions log"
            - name: Data room versus direct system access decision
              description: |-
                ## Purpose
                Extracts posted to a data room are safe and slow; read access to the client's reporting tool is fast and needs approvals, training and a client laptop. Weighing the two for the engagement's needs, and asking early, saves weeks on data-heavy work where every new question means a new request.

                ## Milestones
                1. The expected number of data questions over the engagement estimated.
                2. Extract-only and direct access compared on speed, security, approvals and client effort.
                3. A recommendation made to the engagement manager.
                4. Access requested through the client's formal process, or the extract route confirmed.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of extracts and direct access led to a recorded choice and, if access was chosen, a submitted access request."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Estimate how many separate data questions the workplan will raise"
                - "Compare extracts and direct access on speed, security and approvals"
                - "Recommend one route to the engagement manager"
                - "Submit the access request through the client's IT process"
            - name: Personal cleaning script library
              description: |-
                ## Purpose
                The same deduplication, currency conversion and calendar mapping code gets rewritten on every engagement. A small personal library of tested functions, stripped of any client data, makes each new engagement start from working code rather than a blank file.

                ## Milestones
                1. Functions from past work collected with all client names, codes and data removed.
                2. Each function documented with inputs, outputs and an example on dummy data.
                3. At least eight functions tested and stored in one place.
                4. The library used on a live engagement.

                ## Notes
                Never keep client data or client-identifying logic in the library. Check your firm's rules on reusing code you wrote on client time.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A library of at least eight documented, tested cleaning functions with no client data has been used on one live engagement."
                cadence: rolling
              tasks:
                - "Collect cleaning code from your last two engagements"
                - "Strip every client name, code and value from the collected code"
                - "Document each function with a dummy data example"
                - "Add one new tested cleaning function to the library @recurring(monthly:20)"
            - name: Lessons from requests that came back wrong
              description: |-
                ## Purpose
                Most bad data deliveries trace back to the request: an undefined field, an unclear period, a missing grain. Reviewing every request that came back wrong and working out what in the wording caused it is the quickest way to write better requests on the next engagement.

                ## Milestones
                1. Every rejected or partial request on the engagement listed.
                2. A cause recorded for each: wording, wrong owner, data does not exist, system limit.
                3. Three wording rules added to your request template.
                4. The share of requests returned right first time tracked on the next engagement.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each rejected or partial request has a recorded cause, and at least three resulting rules have been added to the request template."
                cadence: cyclic
                effort_hours_estimate: "3"
              tasks:
                - "Filter the register for rejected and partial requests"
                - "Record the cause of each one"
                - "Add three new wording rules to your request template"
                - "Review the register for requests that came back wrong @recurring(quarterly)"
            - name: Automating the recurring data refresh
              description: |-
                ## Purpose
                When the same monthly extract needs the same twelve manual steps, the refresh eats a day and invites a slip each time. Automating the load, cleaning and checks so a new file drops in and the master updates frees that day and leaves a clear record of each step for the client to run after you leave.

                ## Milestones
                1. Every manual step in the current refresh written down.
                2. Load, cleaning and checks automated in Power Query, a script or the client's tool.
                3. An automated refresh run side by side with the manual one and the outputs matched.
                4. A one-page run guide written for the client owner.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An automated refresh produced the same master dataset as the manual process on one month, and a run guide exists for the client."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write down every manual step in the current refresh"
                - "Automate the load and cleaning steps"
                - "Run the automated and manual refresh on one month and compare outputs"
                - "Ask the agent to draft a one-page run guide from your step list"
            - name: Chart of accounts mapping to analysis categories
              description: |-
                ## Purpose
                A cost analysis needs categories like people, property and technology, while the general ledger has 600 accounts coded for statutory reporting. A mapping table from every account to the analysis categories, agreed with client finance, is the backbone of any cost baseline and stops the same account being counted twice.

                ## Milestones
                1. The full chart of accounts obtained with descriptions.
                2. Every account with a balance mapped to one analysis category.
                3. Mapped totals reconciled to the trial balance.
                4. The mapping signed off by a client finance contact.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every account with a balance maps to exactly one analysis category, the mapped total ties to the trial balance and client finance agreed it."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Request the chart of accounts with account descriptions"
                - "Map each account with a balance to one analysis category"
                - "Check the mapped totals tie to the trial balance"
                - "Review ambiguous accounts with the client financial controller"
            - name: Triangulating a headline number from three sources
              description: |-
                ## Purpose
                The one number that drives the recommendation, such as cost to serve or market share, deserves more than one source. Building it three ways, for example from transactions, from the management accounts and from an operational report, and explaining the differences, makes it hard to knock over in the room.

                ## Milestones
                1. The headline number chosen and defined precisely.
                2. Three independent sources or methods identified.
                3. The number calculated each way and differences explained.
                4. One figure chosen for the deck with the range noted.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The headline figure has been calculated three ways with differences explained and a chosen value and range recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write a precise definition of the headline number"
                - "Identify three independent sources for it"
                - "Calculate the number from each source"
                - "Write a short note explaining why the three figures differ"
            - name: Personal data minimisation in data requests
              description: |-
                ## Purpose
                Teams often ask for full employee or customer files when the analysis only needs grade, cost and location, or customer type and spend. Asking for anonymised or aggregated data by default reduces risk for the client and your firm, speeds approvals from the client's privacy team and rarely costs any insight.

                ## Milestones
                1. Every request containing personal data identified.
                2. For each one, the fields the analysis truly needs listed.
                3. Requests rewritten for anonymised IDs or aggregated data where possible.
                4. Remaining personal data justified and agreed with the firm's risk or privacy contact.

                ## Notes
                Data protection law differs by country. Your firm's privacy team and the client's data protection officer decide what is acceptable, not the engagement team.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each request involving personal data either uses anonymised or aggregated fields or has a recorded justification approved by the privacy contact."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Mark every request in the register that involves personal data"
                - "List the fields each of those analyses truly needs"
                - "Rewrite requests to use anonymised IDs or aggregates"
                - "Send any remaining personal data needs to the firm's privacy contact"
            - name: First data cut readback to the client data team
              description: |-
                ## Purpose
                Showing the client data team your first cut of their numbers, before anyone senior sees them, catches misread fields and missing business rules while they are cheap to fix. It also turns the data owners into allies who recognise their numbers when the baseline reaches the steering committee.

                ## Milestones
                1. A short pack of headline totals, splits and known anomalies from the first cut.
                2. A meeting held with the people who extracted the data.
                3. Corrections and missing business rules recorded.
                4. A revised cut issued within a week.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The client data team reviewed the first cut in a meeting and a revised cut reflecting their corrections went out within a week."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Prepare a five-page pack of first cut totals and anomalies"
                - "Invite the extractors and data owners to the readback"
                - "Record each correction and business rule raised"
                - "Issue the revised cut with a list of changes"
            - name: Baseline sign-off with client finance
              description: |-
                ## Purpose
                Savings, growth and impact are all measured against a baseline, and a baseline nobody signed is reopened at every steering committee. A formal sign-off of the baseline figures, the period, the scope and the main assumptions, by a named client finance owner, settles the starting point for the rest of the engagement.

                ## Milestones
                1. A baseline document with figures, period, scope, exclusions and key assumptions.
                2. The reconciliation to the management accounts attached.
                3. A sign-off meeting held with the client finance owner.
                4. Written confirmation of the baseline filed with the engagement records.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A named client finance owner has confirmed the baseline figures, period, scope and assumptions in writing."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Draft the baseline document with scope, period and exclusions"
                - "Attach the reconciliation to the management accounts"
                - "Book the sign-off meeting with the client finance owner"
                - "File the written baseline confirmation in the engagement folder"
            - name: Mid-engagement data quality checkpoint
              description: |-
                ## Purpose
                Halfway through, it is still possible to replace a weak dataset or narrow a claim; two weeks before the readout it is not. A deliberate checkpoint with the engagement manager, rating each dataset the answer relies on, shows where the evidence is thin while there is time to act.

                ## Milestones
                1. Each dataset behind the emerging answer rated on completeness, accuracy and reconciliation.
                2. Weak datasets listed with options to strengthen or caveat them.
                3. A meeting held with the engagement manager to agree actions.
                4. Agreed actions added to the request register with dates.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "Each key dataset has a recorded quality rating and every weak one has an agreed action with a date in the register."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Rate each key dataset on completeness, accuracy and reconciliation"
                - "List options to strengthen or caveat each weak dataset"
                - "Hold the checkpoint meeting with the engagement manager"
                - "Add the agreed actions to the request register"
            - name: Data and analysis handover pack at close
              description: |-
                ## Purpose
                Clients often want to keep tracking the numbers after the team leaves, and a folder of unexplained spreadsheets is useless to them. A handover pack with the master dataset, mapping tables, a data dictionary, the assumptions log and refresh steps lets the client analyst carry on without calling you.

                ## Milestones
                1. The deliverable files agreed with the client and checked against the engagement letter.
                2. A data dictionary written for the master dataset.
                3. Mapping tables, assumptions log and refresh steps included.
                4. A walkthrough held with the client analyst who will own the data.

                ## Notes
                Check with your firm's risk team what can be handed over. Firm tools and other clients' benchmarks stay with the firm.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The client analyst has received the master dataset, data dictionary, mappings, assumptions log and refresh steps in a walkthrough."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Confirm with the manager which files the client receives"
                - "Write a data dictionary for every field in the master dataset"
                - "Assemble mappings, assumptions log and refresh steps into one pack"
                - "Walk the client analyst through the pack"
            - name: End-of-engagement data return and deletion
              description: |-
                ## Purpose
                Data left on laptops and shared drives months after an engagement is a breach waiting to happen and usually a breach of contract too. Returning or deleting data according to the engagement letter, and recording what was done, closes the engagement properly and protects you personally.

                ## Milestones
                1. Retention and deletion terms in the engagement letter and firm policy confirmed.
                2. Every location holding client data listed, including laptops, email and shared drives.
                3. Data returned, archived under firm rules or deleted as required.
                4. A deletion record signed off by the engagement manager.

                ## Notes
                Some firms must keep a working papers archive for a set period. Follow the firm's records policy rather than deleting everything.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A signed deletion record lists every location that held client data and the action taken for each, in line with the engagement letter."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read the retention and deletion terms in the engagement letter"
                - "List every place client data is stored, including email attachments"
                - "Return, archive or delete each copy as the terms require"
                - "Send the deletion record to the engagement manager for sign-off"
            - name: First data request as a new analyst
              description: |-
                ## Purpose
                New analysts are often handed the data request on day three with little guidance and a client who expects it fast. Working from a checked template, asking the manager two clarifying questions and sending a short request rather than a long vague one builds trust with the team on the first engagement.

                ## Milestones
                1. The workplan analyses you support understood well enough to explain them.
                2. Two clarifying questions asked of the manager before drafting.
                3. A request drafted from a template and reviewed by a senior colleague.
                4. The request sent and logged in the register with an ID.

                ## Notes
                It is far better to ask what an analysis needs than to request everything. Clients notice and resent a request for every table in the system.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: learning
                output_kind: deliverable
                success_criteria: "Your first data request was reviewed by a senior colleague, sent to the client and logged with an ID in the register."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the manager which analyses your request needs to support"
                - "Find a past request on a similar engagement to model yours on"
                - "Ask a senior colleague to review your draft before it goes out"
                - "Log the sent request in the register with its ID"
            - name: Reviewing the team's analysis as a manager
              description: |-
                ## Purpose
                As an engagement manager you sign off numbers you did not build, and a junior team under time pressure will not always say when a file is shaky. A weekly review routine, picking one analysis to trace end to end and asking the same set of questions, finds problems early and teaches the team what good looks like.

                ## Milestones
                1. A list of review questions: source, filters, exclusions, reconciliation, sense check.
                2. One analysis traced end to end each week with its builder.
                3. Findings recorded and fixed before client exposure.
                4. Repeat issues turned into a short team guidance note.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "One analysis a week has been traced end to end with its builder for a month, and repeat issues are in a team guidance note."
                cadence: rolling
              tasks:
                - "Write your five standard review questions"
                - "Trace one analysis end to end with its builder @recurring(weekly:wed)"
                - "Record each finding and the date it was fixed"
                - "Write a guidance note on issues you saw more than once"
            - name: Clients with poor or paper-based data
              description: |-
                ## Purpose
                Smaller clients, public bodies and family businesses often hold key data on paper, in personal spreadsheets or in someone's head. Planning manual collection through templates, short surveys, site visits and samples, and being honest about precision, still produces an answer the client can act on.

                ## Milestones
                1. The data gaps that cannot be filled from systems listed.
                2. A simple collection template designed for client staff to fill in.
                3. A collection plan with sites, people and dates agreed with the client.
                4. Collected data entered, checked and caveated for precision.

                ## Notes
                Keep templates short and pre-filled where possible. A two-column sheet gets completed; a twelve-column one does not.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Manually collected data from an agreed plan is entered, checked and labelled with its precision in the master dataset."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "List the data the client's systems cannot provide"
                - "Design a short collection template for client staff"
                - "Agree sites, people and dates for collection with the client"
                - "Enter and check the collected data and note its precision"
            - name: Working with an offshore analytics team
              description: |-
                ## Purpose
                Many firms send cleaning and first-pass analysis to a central or offshore team, which works overnight and needs instructions it can act on without a call. Clear written briefs, sample outputs and a fixed handback check turn the time difference into an advantage instead of a day lost to misunderstandings.

                ## Milestones
                1. A brief template with objective, inputs, steps, output format and deadline.
                2. A sample of the expected output attached to the first brief.
                3. A handback check applied to every output before the team uses it.
                4. Turnaround and rework rate noted after four briefs.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Four briefs to the offshore team used the template with a sample output, and each handback passed a recorded check."
                cadence: rolling
              tasks:
                - "Write a brief template with inputs, steps, format and deadline"
                - "Mock up a sample of the output you expect"
                - "Send the weekly cleaning brief to the offshore team @recurring(weekly:mon)"
                - "Check each handback against the brief before using it"
            - name: Two-week diagnostic with limited data
              description: |-
                ## Purpose
                Short diagnostics and proposal-stage work give you two weeks, a handful of interviews and whatever data the client can send in two days. Choosing the three analyses that matter, asking for the minimum data and stating the confidence of each finding produces a credible view without pretending to precision.

                ## Milestones
                1. The three analyses that would most change the client's view chosen.
                2. A one-page minimum data request sent on day one.
                3. Each analysis completed with a confidence rating.
                4. Gaps that a full engagement would close listed for the client.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "Three analyses were delivered within two weeks, each with a confidence rating and a list of data a full engagement would add."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Pick the three analyses that would most change the client's view"
                - "Send a one-page minimum data request on the first day"
                - "Rate the confidence of each finding high, medium or low"
                - "List the data gaps a full engagement would close"
            - name: Analysis on a locked-down client laptop
              description: |-
                ## Purpose
                Banks, insurers and government clients often require that their data never leaves their own laptops, where installed tools are limited and nothing can be copied out. Planning the analysis around those limits, with the right tools requested in advance and outputs cleared for export, avoids a week lost on site.

                ## Milestones
                1. The client's rules on devices, software and data export confirmed in writing.
                2. Needed tools requested from client IT before arrival.
                3. Analysis files structured so only aggregated outputs need export.
                4. An export approval route agreed for charts and tables used in the deck.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Tools were in place on the client device on day one and every exported output went through the agreed approval route."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the client for its written rules on devices and data export"
                - "Request the analysis software you need from client IT"
                - "Set up files so only aggregated tables need to leave the device"
                - "Agree who approves exports of charts and tables"
            - name: Transaction-level analysis on millions of rows
              description: |-
                ## Purpose
                Pricing, procurement and customer profitability work often needs every invoice line for three years, which can run to tens of millions of rows. Setting up a proper local or cloud database within firm policy, loading the data once and querying it is faster and safer than splitting files across workbooks.

                ## Milestones
                1. The data volume estimated and a database option approved by firm IT.
                2. Raw extracts loaded with row counts matching the source.
                3. Indexes or summary tables built for the common query patterns.
                4. Totals from the database reconciled to the management accounts.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every row of the transaction extract is loaded into an approved database, with row counts and totals reconciled to the source."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Estimate rows and file sizes for the full transaction history"
                - "Ask firm IT which database options are approved for client data"
                - "Load the extracts and compare row counts with the source"
                - "Build summary tables for the most common queries"
            - name: Linking operational and financial data
              description: |-
                ## Purpose
                Answers such as cost to serve, product profitability or site economics need operational data like deliveries, hours and volumes joined to the financials. Building a data model that links them on shared keys, with allocation rules agreed with the client, is advanced work that sets strong analysts apart.

                ## Milestones
                1. The shared keys between operational and financial datasets identified.
                2. Allocation rules for shared costs written and agreed with client finance.
                3. A linked model producing profitability by the agreed unit.
                4. Model totals reconciled to the reported profit.

                ## Notes
                Allocation choices drive the answer. Show the client how results move under two or three reasonable allocation rules.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A linked model shows profitability by the agreed unit, ties to reported profit and uses allocation rules client finance has agreed."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "List the keys shared by operational and financial datasets"
                - "Draft allocation rules for shared costs"
                - "Agree the allocation rules with client finance"
                - "Reconcile the linked model's total profit to the accounts"
            - name: Driver analysis with regression and its caveats
              description: |-
                ## Purpose
                Clients ask what drives churn, sales per store or cost per unit, and a well-built regression can rank the drivers. It can also mislead badly if correlation is presented as cause, so the work is as much about honest caveats and sense checks with operators as about the statistics.

                ## Milestones
                1. The question and the outcome variable defined precisely.
                2. Candidate drivers listed with operators and data assembled.
                3. A model fitted with fit statistics and residuals checked.
                4. Findings presented with plain-language caveats on causation and data limits.

                ## Notes
                Bring in a firm data scientist or statistician for anything the client will base a large decision on.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A driver model with checked fit and residuals is written up with explicit caveats on causation, and an operator has sense checked the drivers."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write the outcome variable and the decision it informs"
                - "List candidate drivers with two client operators"
                - "Fit the model and check residuals and fit"
                - "Ask the agent to draft plain-language caveats for the findings"
            - name: Audit trail for findings likely to be challenged
              description: |-
                ## Purpose
                Some findings, such as overbilling by a supplier, mis-selling patterns or a large write-down, may be challenged by the client's board, auditors or a regulator. Building an audit trail from each number back to the raw extract, with the query, the version and the person who ran it, means the work survives scrutiny long after the team has moved on.

                ## Milestones
                1. The findings likely to face formal challenge identified with the engagement manager.
                2. Each finding traced to raw files, queries and dataset versions.
                3. The trail reviewed by a colleague who did not build it.
                4. The trail archived under the firm's records policy.

                ## Notes
                Where findings may lead to legal or regulatory action, the firm's risk and legal teams should be involved early. The trail records facts; it does not make legal judgements.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each challengeable finding traces to a raw file, query and dataset version, and an independent colleague has reviewed the trail."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Agree with the manager which findings are likely to be challenged"
                - "Trace each finding back to its raw file, query and version"
                - "Ask a colleague who did not build it to follow the trail"
                - "Archive the trail under the firm's records policy"
---

# Client Data Requests and Analysis

This area is for the consultant who has to turn a client's systems, spreadsheets and half-remembered reports into numbers a steering committee will accept. It starts with foundations (a request register, a precise first request, secure handling, a data owner map and a receipt check), moves to the routines that keep data moving and trustworthy, then the skills of reading extracts, cleaning and writing caveats, the decisions about proxies, access and automation, the dated moments such as baseline sign-off and data deletion, variants for new analysts, managers, offshore teams and locked-down sites, and specialist work on transaction-level data, driver analysis and audit trails.

What repeats is a weekly status table and a midweek chase of late requests, a weekly working session with the client analyst, a master dataset version entry, anomaly triage and assumptions review, a monthly reconciliation to the management accounts and refresh of recurring data drops, and a quarterly look back at requests that came back wrong. The **Meeting notes**, **Risk register** and **Operational checklist** templates pair with the kickoff call, the anomaly log and the analysis checks. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
