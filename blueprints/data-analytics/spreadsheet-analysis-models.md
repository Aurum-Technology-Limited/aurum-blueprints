---
id: data-analytics.spreadsheet-analysis-models
name: Spreadsheet Analysis & Models
description: "Spreadsheet models people can audit: inputs kept apart from formulas, checks that catch errors, refresh and version routines, scenario and sensitivity skills, and small business sheets for cash, quotes and stock."
category: business
version: 1.0.0
tags: [data-analytics, spreadsheet-analysis-models, knowledge-worker, small-business, excel, google-sheets, model-review, scenario-analysis]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - remediation-plan
    - purchase-decision
    - meeting-notes
    - risk-register
  pillars:
    - name: Data & Analytics
      emoji: "📊"
      description: "Turning data into decisions: metrics and dashboards, data pipelines and warehouses, experimentation, forecasting and modelling, machine learning, data quality and governance."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Spreadsheet Analysis & Models
          description: "Building clear, auditable spreadsheet models and analyses with separated inputs, consistent formulas and checks that catch errors."
          projects:
            - name: Inventory of the spreadsheets you rely on
              description: |-
                ## Purpose
                Most teams and small businesses run on a handful of workbooks nobody has ever listed: the pricing sheet, the payroll check, the stock list, the monthly report. Writing down every spreadsheet that feeds a decision or a payment, with its owner and how often it is used, shows which ones would hurt most if they broke and where to start tidying.

                ## Milestones
                1. A list of every spreadsheet used for decisions, payments or reporting, with its file location.
                2. An owner, update frequency and main users recorded for each file.
                3. Each file rated high, medium or low for the damage a mistake in it could cause.
                4. The three highest-rated files picked as the first to bring up to standard.

                ## Notes
                Include files kept on personal laptops or passed around as email attachments. Those are often the riskiest ones.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A written inventory of every decision-making spreadsheet, each with an owner, frequency and impact rating, and the top three flagged for work."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the spreadsheets you opened in the last month for work decisions"
                - "Ask two colleagues which workbooks they could not work without"
                - "Rate each file high, medium or low for the impact of an error"
                - "Add any new business-critical spreadsheet to the inventory @recurring(quarterly)"
            - name: One-page scope before building a model
              description: |-
                ## Purpose
                Models grow sideways when nobody wrote down the question they were meant to answer. A single page naming the decision, who will use the answer, the time horizon, the level of detail and what is out of scope keeps the build small and stops weeks going into tabs nobody needs.

                ## Milestones
                1. The decision the model supports written in one sentence.
                2. The audience, time horizon and time step (monthly, quarterly or yearly) agreed.
                3. Key outputs listed, with the format each must take.
                4. Items deliberately left out of scope written down.
                5. The scope page signed off by the person who will use the answer.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page scope naming the decision, audience, horizon, outputs and exclusions, agreed by the model's main user before building starts."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the decision the next model must support in one sentence"
                - "Agree the time horizon and time step with the person who will use it"
                - "Sketch the output table or chart the user expects to see"
                - "List what the model will not cover and share the page for sign-off"
            - name: Separating inputs, calculations and outputs
              description: |-
                ## Purpose
                When assumptions are typed into the middle of formulas and results sit beside raw data, nobody can tell what to change or what to trust. Splitting a workbook into an inputs sheet, calculation sheets and an outputs sheet, with formulas flowing in one direction, is the single change that makes a model reviewable by someone other than its author.

                ## Milestones
                1. One live model restructured into inputs, calculations and outputs sheets.
                2. Every assumption moved to the inputs sheet with a label and a unit.
                3. Formulas flowing left to right and top to bottom, with no calculation reading from an outputs sheet.
                4. A colleague able to change an input and find its effect on the outputs unaided.

                ## Notes
                Keep the same time periods in the same columns on every calculation sheet. Formulas then stay consistent along each row, and a break in the pattern is easy to spot.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One live model split into separate inputs, calculations and outputs sheets, with every assumption on the inputs sheet and the flow tested by a colleague."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pick the live model that is changed most often"
                - "Move every typed assumption onto a single labelled inputs sheet"
                - "Align time periods to the same columns on every calculation sheet"
                - "Ask a colleague to change one input and trace it to the output"
            - name: House style for colours, formats and units
              description: |-
                ## Purpose
                A reader should be able to tell at a glance which cells are inputs, which are formulas and which link to another sheet. Agreeing a short house style (an input colour, a link colour, number formats, unit labels and sign conventions) and applying it to every new workbook removes a whole class of mistakes where someone overtypes a formula.

                ## Milestones
                1. A one-page style guide covering cell colours, number formats, units and sign conventions.
                2. Cell styles saved in the spreadsheet tool so each takes one click to apply.
                3. The style applied to the three highest-impact files from the inventory.
                4. The guide shared with everyone who edits those files.

                ## Notes
                Pick one convention for costs (shown as negatives, or as positives that are subtracted) and never mix the two in one model.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written style guide with saved cell styles, applied to the three highest-impact spreadsheets and shared with their editors."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Choose one fill colour for inputs and one font colour for links"
                - "Save the input, formula and check styles as named cell styles"
                - "Decide how costs and negative numbers will be signed"
                - "Apply the style to the top three files from your inventory"
            - name: Reusable starter workbook
              description: |-
                ## Purpose
                Starting every model from a blank grid means rebuilding the cover sheet, checks and timeline each time, and skipping them when the deadline is close. A starter workbook with a cover page, version table, inputs sheet, timeline row, checks sheet and styles already in place makes good structure the quickest option rather than the slow one.

                ## Milestones
                1. A starter file with cover, change log, inputs, calculations, outputs and checks sheets.
                2. A timeline row with period start dates, period numbers and flags built once.
                3. House styles and print settings saved in the file.
                4. The starter saved as a template where everyone on the team can find it.
                5. The next two new models built from it.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A starter workbook saved as a shared template and used for the next two new models built by you or your team."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Copy the cleanest model you own and strip out its numbers"
                - "Build a timeline row with period start dates and period counters"
                - "Add a cover sheet with purpose, owner and a version table"
                - "Save the file as a template in the shared team folder"
            - name: Checks sheet with a master error flag
              description: |-
                ## Purpose
                Totals that do not add up, balances that do not balance and rows that silently drop out of a lookup are caught only if something is looking for them. A checks sheet that tests the model's own arithmetic, rolls every test into one master flag and shows that flag on every output page turns silent errors into visible ones.

                ## Milestones
                1. At least five checks written: cross-totals, row and column sums, balance tests, lookup misses and sign checks.
                2. Each check returning zero when fine and a clear flag when not, with a tolerance for rounding.
                3. A single master check summing all the individual checks.
                4. The master flag displayed at the top of every outputs sheet.

                ## Notes
                Test the checks by breaking the model on purpose. A check that never fires may simply not be wired up.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A checks sheet with at least five tests feeding one master flag that appears on every outputs sheet and fires when an error is introduced."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the totals in your model that must always agree"
                - "Write a check formula for each one with a small rounding tolerance"
                - "Sum every check into one master flag on the checks sheet"
                - "Break the model on purpose to confirm the master flag fires"
            - name: File naming, versioning and storage rules
              description: |-
                ## Purpose
                Emailing a file called final v3 updated to five people is how decisions end up made on the wrong numbers. Simple rules for file names, version numbers, where the master copy lives and how old versions are kept mean everyone opens the same file, and any past answer can be traced to the version that produced it.

                ## Milestones
                1. A naming rule with the date or version number in a fixed position.
                2. One agreed location for the master copy of each critical model.
                3. A rule that files are shared as links to the master, not as attachments.
                4. Old versions kept in an archive folder or version history, not deleted.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written naming, versioning and storage rules adopted for every high-impact spreadsheet, with each master copy in one agreed location."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a file naming rule with the version number in a fixed position"
                - "Move each high-impact model to one agreed master location"
                - "Replace emailed attachments with links to the master copy"
                - "Set up an archive folder for superseded versions"
            - name: Raw data sheets kept untouched
              description: |-
                ## Purpose
                Once source data has been sorted, overtyped and partly deleted, nobody can prove where a number came from. Pasting each import onto its own raw sheet that is never edited, with the source, extract date and row count noted beside it, means every figure can be traced back and next month's import can be repeated without guesswork.

                ## Milestones
                1. Each data import on its own sheet, untouched after pasting.
                2. Source system, extract date, filters used and row count recorded at the top of each raw sheet.
                3. All cleaning done in separate formula columns or on a separate sheet.
                4. A second person able to repeat the import from the notes alone.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every data import in your main model sits on an unedited raw sheet with its source, date, filters and row count recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Move each pasted data extract onto its own raw sheet"
                - "Write the source, extract date, filters and row count above each extract"
                - "Rebuild any manual edits to raw data as formula cleaning columns"
                - "Ask a colleague to repeat one import using only your notes"
            - name: Assumptions register with sources and owners
              description: |-
                ## Purpose
                Growth rates, prices, staff costs and conversion rates often sit in a model with no hint of where they came from or when they were last true. A register on the inputs sheet giving each assumption a source, an owner, a date and a confidence rating shows reviewers which numbers carry the answer and which are guesses.

                ## Milestones
                1. Every input in the model listed with value, unit and description.
                2. A source and date recorded for each, or the value marked as an estimate.
                3. An owner named for each assumption that drives a material output.
                4. A confidence rating of high, medium or low against each.
                5. A next review date set for every low-confidence assumption.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every input in the main model has a source or estimate flag, a date, an owner for material ones and a confidence rating."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Add source, date, owner and confidence columns beside each input"
                - "Fill in the source for the ten inputs that move outputs most"
                - "Mark every unsourced number as an estimate"
                - "Set a review date for each low-confidence assumption"
            - name: Monthly data refresh routine
              description: |-
                ## Purpose
                Recurring models usually fail at refresh time: a new column in the export, a renamed product, an extra month the formulas do not pick up. A written refresh routine with the steps in order, expected row counts and a reconciliation to the source system turns the monthly update into a checklist rather than a memory test.

                ## Milestones
                1. Refresh steps written in order on the model's cover sheet.
                2. Expected row counts and control totals recorded for each import.
                3. Refreshed totals reconciled to the source system every month.
                4. Six refreshes in a row completed without an unexplained difference.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly refreshes completed from the written steps, each reconciled to the source system with no unexplained difference."
                cadence: rolling
              tasks:
                - "Write the refresh steps in order on the cover sheet"
                - "Record expected row counts and control totals for each import"
                - "Run the refresh steps and tick each one off @recurring(monthly:4)"
                - "Reconcile refreshed totals with the source system report @recurring(monthly:5)"
            - name: Weekly checks review before figures go out
              description: |-
                ## Purpose
                Figures sent on a Friday afternoon are the ones most likely to carry an error, because the check is what gets skipped. A short weekly routine of clearing every flag on the checks sheet, scanning for hard-coded overrides and comparing headline numbers with last week catches most mistakes before anyone else sees them.

                ## Milestones
                1. A five-minute pre-send checklist written for each model that produces weekly figures.
                2. The master check at zero before every send.
                3. Headline numbers compared with last week and any large move explained.
                4. Eight weeks of sends with no correction needed afterwards.

                ## Notes
                Start from the **Operational checklist** template.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weeks where figures were sent only after the checks sheet showed zero and no correction was needed afterwards."
                cadence: rolling
              tasks:
                - "Write a five-minute pre-send checklist for the weekly model"
                - "Clear every red flag on the checks sheet before sending figures @recurring(weekly:fri)"
                - "Compare headline numbers with last week and note any big move"
                - "Search the output sheets for typed overrides of formulas"
            - name: Change log inside every live model
              description: |-
                ## Purpose
                Six months after a change, nobody remembers why the discount rate moved or who added the new product line. A change log sheet recording the date, author, what changed, why and which outputs moved makes it possible to explain a number to an auditor, a manager or yourself.

                ## Milestones
                1. A change log sheet in each high-impact model with date, author, change, reason and output effect.
                2. Every structural and assumption change logged on the day it is made.
                3. The log checked monthly for gaps against the file's version history.
                4. Three months of complete entries.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each high-impact model holds a change log with three months of complete, dated entries that match its version history."
                cadence: rolling
              tasks:
                - "Add a change log sheet to each high-impact model"
                - "Log the date, author, change, reason and output effect for every edit"
                - "Compare the month's log entries with the version history and fill gaps @recurring(monthly:26)"
            - name: Quarterly assumptions refresh
              description: |-
                ## Purpose
                Prices rise, contracts renew and conversion rates drift, but the numbers on the inputs sheet stay as they were the day the model was built. A quarterly pass through the assumptions register, starting with the low-confidence and high-impact items, keeps the model describing the business as it is now.

                ## Milestones
                1. Assumptions sorted by impact and confidence.
                2. Each assumption past its review date checked with its owner.
                3. Updated values entered with a new source and date.
                4. The effect of the refresh on outputs summarised in two or three lines.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly refreshes in a year, each updating every overdue assumption and summarising the effect on outputs."
                cadence: cyclic
              tasks:
                - "Sort the assumptions register by impact and confidence"
                - "Review each assumption past its review date with its owner @recurring(quarterly)"
                - "Write two lines on how the refresh moved the outputs"
            - name: Peer review before a model leaves your hands
              description: |-
                ## Purpose
                Authors rarely see their own errors, which is why audits of real business spreadsheets so often find mistakes in the larger ones. Swapping models with a colleague for a structured review of logic, formulas, inputs, checks and presentation catches what self-checking misses, and reviewing for someone else sharpens your own building.

                ## Milestones
                1. A review checklist covering logic, formula consistency, inputs, checks and outputs.
                2. A colleague agreed as a regular review partner.
                3. Every high-impact model reviewed before first use and after any major change.
                4. Review findings recorded with the fix made for each.
              priority: high
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every high-impact model has a recorded peer review before first use, with each finding listed alongside its fix."
                cadence: rolling
              tasks:
                - "Write a one-page review checklist covering logic, formulas and checks"
                - "Agree a review swap with one colleague"
                - "Review one model for your partner and return written findings @recurring(monthly:15)"
                - "Record each finding on your own model with the fix made"
            - name: Spreadsheet error log and lessons
              description: |-
                ## Purpose
                The same mistakes keep coming back: a range that stopped one row short, a lookup returning the first of two matches, a column sorted without its neighbours. Keeping a short log of every error and near miss, with its cause and the check that would have caught it, turns each mistake into a new check rather than a repeat.

                ## Milestones
                1. An error log with date, file, what went wrong, impact, cause and preventive check.
                2. Each error found in the last three months entered.
                3. A new check or style rule added for every recurring cause.
                4. A quarter passed with no repeat of a logged cause.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An error log covering every mistake and near miss for six months, with a preventive check added for each recurring cause."
                cadence: rolling
              tasks:
                - "Set up an error log with cause and preventive check columns"
                - "Enter the errors you remember from the last three months"
                - "Log the month's spreadsheet mistakes and near misses @recurring(monthly:22)"
                - "Ask the agent to group the logged errors by cause and suggest a check for each"
            - name: Backups and restore test for critical models
              description: |-
                ## Purpose
                Cloud version history feels like a backup until a file is overwritten by a sync conflict or deleted by someone clearing out their drive. A monthly confirmation that each critical model has a recent copy elsewhere, and that the copy actually opens with its links intact, means a bad day costs minutes instead of a rebuild.

                ## Milestones
                1. A backup location and method agreed for every high-impact model.
                2. The version history retention period checked in the storage tool.
                3. The latest backup of each critical model opened every month.
                4. One full restore practised from start to finish.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every high-impact model has a backup outside its main location, with a monthly open test logged for six months."
                cadence: rolling
              tasks:
                - "Check how long your storage tool keeps version history"
                - "Set a second backup location for each high-impact model"
                - "Open the latest backup of each critical model and confirm it works @recurring(monthly:28)"
                - "Practise restoring one model from backup from start to finish"
            - name: Annual spreadsheet estate clean-up
              description: |-
                ## Purpose
                Every year adds copies, one-off analyses and abandoned drafts, and the clutter makes it easy to open last year's version by mistake. A yearly sweep that archives untouched files, retires duplicates and updates the inventory keeps the live estate small enough to look after properly.

                ## Milestones
                1. Files untouched for twelve months identified.
                2. Duplicates and superseded copies moved to an archive with a note.
                3. The inventory updated with retired and new files.
                4. Owners confirmed for every file still live.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A yearly clean-up completed, with untouched and duplicate files archived and the inventory listing only live files with owners."
                cadence: cyclic
              tasks:
                - "Search shared folders for spreadsheets untouched in twelve months"
                - "Archive spreadsheets nobody opened in the past year @recurring(yearly)"
                - "Confirm an owner for every file still in use"
                - "Update the inventory with retired and new files"
            - name: Broken links and external references check
              description: |-
                ## Purpose
                Workbooks that pull from other workbooks break quietly when a file is renamed or moved, and some tools keep showing the last cached value as if nothing happened. A monthly look at every external link, with a list of what each model depends on, stops stale numbers flowing through to reports.

                ## Milestones
                1. Every external link in each live model listed with its source file.
                2. Links that can be replaced by a raw data sheet or a query replaced.
                3. Remaining links pointing to the correct master files.
                4. A monthly link check logged for six months.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each live model has a documented list of external links, all pointing to current master files, checked monthly for six months."
                cadence: rolling
              tasks:
                - "Open the edit links dialog on each live model and list the sources"
                - "Replace the links you can with a raw data sheet or a query"
                - "Check every remaining link points to the current master file @recurring(monthly:12)"
            - name: Lookup formulas with XLOOKUP and INDEX MATCH
              description: |-
                ## Purpose
                Lookups are where many silent spreadsheet errors live: an approximate match by accident, a missing value returning the wrong row, an inserted column that shifts the result. Learning exact-match lookups properly, with a clear not-found result and a check for duplicates in the key column, removes a large share of wrong answers.

                ## Milestones
                1. Exact-match lookups written with both XLOOKUP and INDEX with MATCH.
                2. A not-found result that shows clearly rather than as a zero.
                3. A duplicate-key check added before any lookup on a new data set.
                4. Every older VLOOKUP in one live model rewritten and reconciled.

                ## Notes
                VLOOKUP defaults to an approximate match when its last argument is left out. That one default has produced more plausible wrong numbers than almost any other function.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One live model has every old VLOOKUP rewritten as an exact-match lookup with a not-found flag and a duplicate-key check, totals reconciled."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Practise XLOOKUP and INDEX MATCH on a copy of a real data sheet"
                - "Add a duplicate check on the key column before each lookup"
                - "Set a visible not-found result instead of a zero or a blank"
                - "Rewrite the VLOOKUPs in one live model and reconcile the totals"
            - name: Pivot tables for quick summaries
              description: |-
                ## Purpose
                Most ad hoc questions, such as sales by region, cost by month or the top twenty customers, can be answered in minutes with a pivot table, yet many people still build them from hand-typed formulas. Learning to build, filter, group and refresh pivots from a proper table, and when not to use one inside a model, saves hours each month.

                ## Milestones
                1. A pivot built from a formatted table so new rows are included on refresh.
                2. Dates grouped by month and quarter, with values shown as totals and percentages.
                3. Slicers or filters added for the two most common questions.
                4. A pivot total reconciled to the source data total.

                ## Notes
                Pivots are for exploring and summarising. Inside a model others reuse, a formula summary is easier to check and does not go stale when someone forgets to refresh.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three recurring ad hoc questions answered with refreshable pivot tables built from formatted tables, each reconciled to its source total."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Convert one data range into a formatted table"
                - "Build a pivot answering a question you were asked this month"
                - "Group dates by month and show values as a percentage of total"
                - "Reconcile the pivot total to the source data total"
            - name: Conditional totals with SUMIFS and COUNTIFS
              description: |-
                ## Purpose
                Monthly summaries by category, product or customer are the backbone of most business spreadsheets, and they break when criteria do not quite match the data. Getting fluent with SUMIFS, COUNTIFS and AVERAGEIFS, including date ranges and wildcard criteria, plus a check that the categorised total equals the grand total, makes summaries fast and provable.

                ## Milestones
                1. A summary table built with SUMIFS against category and month criteria.
                2. Date-range criteria driven by start and end dates held in cells, not typed into formulas.
                3. An unallocated line showing anything that matched no category.
                4. The summary total reconciled to the raw data total.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A category by month summary built with conditional totals, with an unallocated line and a total that reconciles to the raw data."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Build a category by month summary using SUMIFS"
                - "Put the period start and end dates in cells and reference them"
                - "Add an unallocated line for rows that match no category"
                - "Check the summary total equals the raw data total"
            - name: Power Query for repeatable data cleaning
              description: |-
                ## Purpose
                Cleaning the same export by hand every month (deleting header rows, splitting columns, fixing dates, unpivoting months) is slow and easy to get slightly wrong. Recording those steps once as a query in Power Query, which ships with desktop Excel, turns next month's clean-up into a single refresh with every step visible for review.

                ## Milestones
                1. One monthly export loaded through a query rather than pasted.
                2. Cleaning steps named so a reviewer can read what each does.
                3. The query pointed at a folder so new files are picked up automatically.
                4. The refreshed result reconciled to last month's manual version.

                ## Notes
                In Google Sheets the same discipline applies with import functions and a separate cleaning sheet, or a short script.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One monthly export cleaned by a query with named steps that refreshes from a folder and matches the previous manual clean."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Pick the export you clean by hand most often"
                - "Load it through a query and record each cleaning step"
                - "Rename every step so its purpose is clear"
                - "Point the query at a folder and test it with next month's file"
            - name: Tables, named ranges and structured references
              description: |-
                ## Purpose
                Ranges like Sheet3!C4:C912 are hard to read and break quietly when data grows past row 912. Formatted tables that expand on their own, structured references that name the column being summed and a few well-named ranges for key inputs make formulas self-explaining and safe against new rows.

                ## Milestones
                1. All data ranges in one model converted to formatted tables.
                2. Summary formulas rewritten to use structured references.
                3. Key inputs given clear names under a short naming rule.
                4. Unused and broken names removed in the name manager.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One model uses formatted tables for all data, structured references in its summaries and a clean list of named inputs with no broken names."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Convert each data range in one model into a formatted table"
                - "Rewrite the summary formulas with structured references"
                - "Name the five most important inputs using one naming rule"
                - "Delete unused and broken names in the name manager"
            - name: Date arithmetic that does not surprise you
              description: |-
                ## Purpose
                Month-end dates, financial years that do not start in January, dates imported as text and swapped day and month order all cause errors that look plausible. Learning how the spreadsheet stores dates, and practising EOMONTH, EDATE, period flags and text-to-date conversion, keeps timelines and ageing calculations right.

                ## Milestones
                1. Dates imported as text found and converted.
                2. A monthly timeline built with EOMONTH and EDATE for your financial year.
                3. Period flags for first month, last month and financial year working.
                4. An ageing calculation (days overdue, months since start) tested on edge cases.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A financial-year timeline with period flags and an ageing calculation, tested on month ends, a leap year and text dates."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Test a column of imported dates for values stored as text"
                - "Build a monthly timeline for your financial year with EOMONTH"
                - "Add first-month and year-end flags to the timeline"
                - "Test an ageing formula on month ends and a leap year"
            - name: Dynamic arrays with FILTER, SORT and UNIQUE
              description: |-
                ## Purpose
                Lists that update themselves, such as the active customers this quarter or the distinct product codes in an export, used to need helper columns or macros. Dynamic array functions spill results into neighbouring cells and resize automatically, which makes lists and summary tables shorter to build and easier to keep current.

                ## Milestones
                1. A distinct list of categories generated with UNIQUE and ordered with SORT.
                2. A filtered list driven by a criteria cell built with FILTER.
                3. A summary table referencing a spilled range so it grows with the data.
                4. One helper-column workaround in a live file replaced.

                ## Notes
                Older versions of some spreadsheet tools cannot show dynamic arrays correctly. Check which version the readers of the file use before relying on them.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One live workbook uses spilled UNIQUE, SORT and FILTER lists in place of a helper-column workaround, opened correctly by its readers."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check which spreadsheet version the readers of your files use"
                - "Build a sorted distinct list of categories from a data table"
                - "Create a filtered list driven by a criteria cell"
                - "Replace one helper-column workaround in a live file"
            - name: Formula auditing and tracing
              description: |-
                ## Purpose
                Inheriting or reviewing a model means following numbers through sheets you did not build. Learning the built-in auditing tools (trace precedents and dependents, evaluate formula, show formulas, the watch window and go-to-special for constants) lets you find hard-coded numbers and inconsistent formulas in minutes rather than hours.

                ## Milestones
                1. Trace precedents, trace dependents and evaluate formula used on a real output.
                2. Hard-coded constants inside calculation areas found with go-to-special.
                3. Inconsistent formulas along a row spotted with show formulas switched on.
                4. A watch window set up on the model's three key outputs.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One model audited with the built-in tools, with every hard-coded constant and inconsistent formula listed and the key outputs on a watch window."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Trace one key output back to its inputs with trace precedents"
                - "Use go-to-special to highlight constants in the calculation sheets"
                - "Switch on show formulas and scan rows for breaks in the pattern"
                - "Put the three key outputs on a watch window"
            - name: Rebuilding an inherited model you do not trust
              description: |-
                ## Purpose
                Years of patches by several people leave some models full of hard-coded fixes and sheets nobody understands, risky to keep and risky to replace. Mapping what the model does, rebuilding it in the house structure alongside the old one, and reconciling the two until they agree or every difference is explained replaces it without losing whatever it got right.

                ## Milestones
                1. A map of the old model's inputs, outputs and main calculation steps.
                2. A new version built from the starter workbook.
                3. Old and new outputs reconciled line by line, with every difference explained.
                4. The new version signed off by its users and the old one archived as read-only.

                ## Notes
                Start from the **Remediation plan** template. Run both versions in parallel for at least one reporting cycle before switching.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The inherited model replaced by a rebuilt version whose outputs reconcile to the old one, signed off by its users, with the old file archived."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Draw a one-page map of the old model's inputs, steps and outputs"
                - "Rebuild the logic in a fresh copy of the starter workbook"
                - "Reconcile old and new outputs line by line and explain differences"
                - "Run both versions for one reporting cycle before switching"
            - name: Removing hard-coded numbers from formulas
              description: |-
                ## Purpose
                Formulas such as =B12*1.2 hide an assumption no reviewer will find and nobody will remember to update. Hunting out every number typed into a formula and moving it to the inputs sheet, with a label, makes the model honest about what it assumes and quicker to update when a rate changes.

                ## Milestones
                1. Every formula containing a typed number found in the main model.
                2. Each number moved to the inputs sheet with a label, unit and source.
                3. Genuine constants, such as twelve months in a year, agreed and left in place by rule.
                4. Outputs reconciled before and after the change.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "No unexplained typed numbers remain in the main model's formulas, every one moved to labelled inputs, with outputs unchanged."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Search the main model for formulas containing typed numbers"
                - "Move each one to the inputs sheet with a label and source"
                - "Write a rule for the constants allowed to stay in formulas"
                - "Reconcile outputs before and after to confirm nothing moved"
            - name: Clearing out merged cells, hidden sheets and volatile functions
              description: |-
                ## Purpose
                Merged cells break sorting and copying, hidden rows hide overrides, and volatile functions like INDIRECT and OFFSET make a model slow and hard to trace. Removing these habits from your most-used model, and writing down the replacement for each, makes it safer to edit and faster to review.

                ## Milestones
                1. Merged cells replaced with centre across selection or a cleaner layout.
                2. Hidden rows, columns and sheets unhidden, reviewed and deleted or labelled.
                3. INDIRECT and OFFSET replaced with direct references or INDEX where possible.
                4. The replacements added to the house style guide.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The most-used model has no merged cells in calculation areas, no unexplained hidden content and no avoidable volatile functions."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Unhide every row, column and sheet in your most-used model"
                - "Replace merged cells with centre across selection"
                - "Swap INDIRECT and OFFSET formulas for INDEX or direct references"
                - "Add the replacements to your house style guide"
            - name: Speeding up a slow workbook
              description: |-
                ## Purpose
                Recalculation that takes a minute stops people testing scenarios and tempts them to switch calculation to manual, which brings its own errors. Measuring calculation time, then fixing the usual causes (whole-column references, volatile functions, repeated lookups, excess formatting and used ranges far bigger than the data) often cuts it to seconds.

                ## Milestones
                1. Recalculation time and file size measured before any change.
                2. Whole-column references, repeated lookups and volatile functions found.
                3. The three biggest causes fixed one at a time, with a timing after each.
                4. Calculation set back to automatic and the new time recorded.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Recalculation time on the slowest workbook measured before and after, with at least a halving recorded and calculation left on automatic."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Time a full recalculation and note the file size"
                - "Find whole-column references and repeated lookups on large ranges"
                - "Fix the three biggest causes one by one and re-time after each"
                - "Reset the used range on sheets with formatting far below the data"
            - name: Scenario switch for base, upside and downside
              description: |-
                ## Purpose
                Copying a model three times to show three cases means three files drifting apart within a month. A single scenario selector on the inputs sheet that switches whole sets of assumptions, with every case shown side by side, lets the decision-maker see the range of outcomes from one trusted file.

                ## Milestones
                1. Base, upside and downside values for each key assumption agreed with their owners.
                2. A selector cell that switches the live case, with the active case named on every output.
                3. A summary table of key outputs under all three cases.
                4. The story behind each case written in one line.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One model with a scenario selector driving three agreed cases and a summary table showing the key outputs under each."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Agree base, upside and downside values for the key assumptions"
                - "Build a scenario selector cell on the inputs sheet"
                - "Show the active scenario name on every output sheet"
                - "Build a table comparing key outputs across the three cases"
            - name: Sensitivity tables on the biggest drivers
              description: |-
                ## Purpose
                Decision-makers rarely need one answer; they need to know which assumption the answer hangs on. A sensitivity table that flexes the biggest drivers up and down, with a ranking of their effect, shows where to spend effort refining numbers and where the decision is safe either way.

                ## Milestones
                1. The three to five inputs that move the main output most identified.
                2. One-way and two-way data tables built on the main output.
                3. Drivers ranked by effect in a tornado chart or a sorted table.
                4. The value at which the decision would flip noted for each driver.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A sensitivity sheet showing the main output against its top three drivers, ranked by effect, with the flip value for each recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Flex each input by ten percent and note which move the output most"
                - "Build a two-way data table on the top two drivers"
                - "Rank the drivers by effect in a sorted table or tornado chart"
                - "Use goal seek to find the value at which the decision flips"
            - name: When a spreadsheet should become a database or app
              description: |-
                ## Purpose
                Spreadsheets are excellent for models and poor at being multi-user databases, audit trails or systems of record. Testing your heaviest files against a few clear signals (many people entering data, tens of thousands of rows, approval steps, sensitive personal data) gives a reasoned decision to keep, split or move each one.

                ## Milestones
                1. A short list of signals that a file has outgrown a spreadsheet.
                2. Each high-impact file scored against the signals.
                3. A keep, split or move decision recorded for each, with the reason.
                4. A plan for the first file to move, with an owner.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every high-impact spreadsheet has a recorded keep, split or move decision with its reason, and the first move has a named owner."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write five signals that a file has outgrown a spreadsheet"
                - "Score each high-impact file against the signals"
                - "Record a keep, split or move decision for each file"
                - "Name an owner for moving the first file"
            - name: Choosing a spreadsheet audit or comparison add-in
              description: |-
                ## Purpose
                Built-in tools find a lot, but comparing two versions of a large model cell by cell, mapping formulas across sheets or flagging risky patterns is far quicker with a dedicated add-in. Trialling two or three tools on a real model against the same criteria (what they detect, cost, security approval, ease of use) avoids paying for one nobody opens.

                ## Milestones
                1. Requirements written: version comparison, formula mapping, risk flags and a cost limit.
                2. Two or three tools trialled on the same real model.
                3. Each tool scored against the requirements and checked with IT for approval.
                4. A buy or do-not-buy decision recorded.

                ## Notes
                Start from the **Purchase decision** template.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on an audit or comparison add-in, based on trials of at least two tools on one real model."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List what you need an audit tool to do and your price limit"
                - "Trial two tools on a copy of the same real model"
                - "Check with IT whether each add-in is allowed"
                - "Record a buy or do-not-buy decision with reasons"
            - name: Annual budget model build and sign-off
              description: |-
                ## Purpose
                Budget season squeezes months of inputs from many people into a few weeks, and the spreadsheet usually gets rebuilt in a rush. Starting early with a fixed timetable, one standard input template for every budget holder and a consolidation sheet with checks keeps every number traceable to who submitted it and when.

                ## Milestones
                1. A timetable from template release to final sign-off agreed.
                2. A standard input template sent to every budget holder.
                3. Submissions consolidated with checks that totals match each template.
                4. Each review round's version of the consolidated budget labelled and kept.
                5. The final budget signed off and locked.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The budget consolidated from standard templates, reconciled to every submission, signed off and locked by the agreed date."
                cadence: one-shot
                effort_hours_estimate: "25"
              tasks:
                - "Agree the budget timetable from template release to sign-off"
                - "Build one input template and send it to every budget holder"
                - "Consolidate submissions with a check against each template's total"
                - "Start next year's budget model rebuild two months before the deadline @recurring(yearly)"
            - name: Board or lender pack figures traced to the model
              description: |-
                ## Purpose
                Figures that appear in a board paper or a lender report are copied once, quoted for months and awkward to correct. Linking every figure in the pack back to a named output in the model, and reconciling them the day before it goes out, prevents a pack that disagrees with itself or with last quarter's.

                ## Milestones
                1. Every figure in the pack listed with its source cell or output line.
                2. An outputs sheet laid out in the pack's order so figures copy straight across.
                3. Pack figures reconciled to the model before each issue.
                4. Any figure changed after issue logged with an explanation.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Every figure in the last two packs traced to a model output and reconciled before issue, with no corrections needed afterwards."
                cadence: cyclic
              tasks:
                - "List every number in the last pack and find its source cell"
                - "Lay out an outputs sheet in the same order as the pack"
                - "Reconcile the pack figures to the model before each board meeting @recurring(quarterly)"
            - name: Model walkthrough with the people who use it
              description: |-
                ## Purpose
                Users trust a model they do not understand only for as long as its author is in the room. A one-hour walkthrough covering the question it answers, where the inputs live, how to read the checks and what it cannot tell them builds lasting trust, and it usually surfaces a wrong assumption or two.

                ## Milestones
                1. The walkthrough booked with the model's main users.
                2. A short agenda prepared: purpose, inputs, logic, checks, outputs and limits.
                3. Questions and challenges raised in the session written down.
                4. Agreed changes made and the users told what moved.

                ## Notes
                Start from the **Meeting notes** template.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A walkthrough held with the model's main users, with their questions recorded and each agreed change made within two weeks."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Book a one-hour walkthrough with the model's main users"
                - "Prepare a six-point agenda running from purpose to limits"
                - "Note every question and challenge raised in the session"
                - "Make the agreed changes and tell the users what moved"
            - name: Handover pack before leave or a role change
              description: |-
                ## Purpose
                When the person who built a model goes on leave or moves role, the model often stops being updated, or gets updated wrongly. A handover pack with the purpose, refresh steps, known quirks, checks and contacts, tested by having the cover person run one update while you are still around, keeps it working without you.

                ## Milestones
                1. A one-page handover note for each model you own.
                2. Refresh steps, known quirks and who to ask written down.
                3. The cover person has run one full update with you watching.
                4. Access and permissions passed to the cover person.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Each model you own has a handover note, and the cover person has completed one full update unaided before you leave."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every model you own that someone else would need to run"
                - "Ask the agent to draft a handover note from each cover sheet and change log"
                - "Watch the cover person run one full update"
                - "Refresh the handover notes for each model you own @recurring(yearly)"
            - name: Final check on a loan or grant application spreadsheet
              description: |-
                ## Purpose
                Lenders and funders read projections closely, and an arithmetic slip or a figure that differs between the spreadsheet and the written application can sink credibility. A final check a week before submission (totals, links between sheets, consistency with the narrative, assumptions stated) means the numbers support the application rather than distract from it.

                ## Milestones
                1. Every figure quoted in the written application matched to the spreadsheet.
                2. Totals, subtotals and sheet links checked and the checks sheet clear.
                3. Key assumptions stated in plain words on a notes sheet.
                4. The file reviewed by someone who did not build it.
                5. The final version saved as read-only with the date in its name.

                ## Notes
                This check is about accuracy and consistency. Discuss the projections themselves with your accountant or business adviser.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The application spreadsheet reconciled to the written narrative, reviewed by a second person and saved read-only a week before submission."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Highlight every figure quoted in the written application"
                - "Match each highlighted figure to its cell in the spreadsheet"
                - "Write the main assumptions in plain words on a notes sheet"
                - "Ask someone who did not build the file to review it"
            - name: Thirteen-week cash flow sheet for a small business
              description: |-
                ## Purpose
                For a small business, the question that matters most weeks is whether there will be enough cash to pay suppliers, staff and the tax authority on time. A rolling thirteen-week sheet with receipts and payments by week, opening and closing balances and a minimum-balance warning shows a crunch in time to act, and it takes about twenty minutes a week to keep current.

                ## Milestones
                1. A weekly layout with opening balance, receipts, payments and closing balance.
                2. Known receipts and payments for the next thirteen weeks entered by date.
                3. A minimum cash level set and highlighted when breached.
                4. Last week's actuals entered and the sheet rolled forward every week.
                5. Eight weeks of forecasts compared with what actually happened.

                ## Notes
                This is a planning sheet. Take decisions about borrowing, tax payments or payment plans to your accountant.
              priority: high
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A thirteen-week cash sheet updated weekly for eight weeks, with actuals entered and a minimum-balance warning in place."
                cadence: rolling
              tasks:
                - "Set up weekly columns with opening balance, receipts, payments and closing balance"
                - "Enter known receipts and payments for the next thirteen weeks"
                - "Set a minimum cash level and highlight the weeks below it"
                - "Enter last week's actuals and roll the sheet forward @recurring(weekly:mon)"
            - name: Job costing and quote calculator
              description: |-
                ## Purpose
                Trades, agencies and makers often price from memory, then find out months later that some job types lose money. A quote calculator built from real labour rates, material costs, overheads and a target margin, checked against actual costs on finished jobs, keeps quotes consistent and shows which work pays.

                ## Milestones
                1. Labour rates, material costs and an overhead rate entered as labelled inputs.
                2. A quote sheet producing a price from hours, materials and target margin.
                3. A finished-jobs sheet comparing quoted and actual costs.
                4. The two job types where actual costs ran furthest over quotes reviewed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A quote calculator used for every new quote, with at least ten finished jobs compared against their quotes."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List your labour rates, typical materials and monthly overheads"
                - "Build a quote sheet that turns hours and materials into a price"
                - "Add a finished-jobs sheet with quoted and actual costs side by side"
                - "Compare quoted and actual costs on the month's finished jobs @recurring(monthly:18)"
            - name: Stock and reorder sheet for a small shop
              description: |-
                ## Purpose
                Shops and online sellers without stock software often run out of best sellers while cash sits in slow lines. A stock sheet with current counts, average weekly sales, supplier lead times and a reorder level for each item flags what to order this week and what has not moved for months.

                ## Milestones
                1. Every product listed with count, cost, average weekly sales and supplier lead time.
                2. A reorder level per item calculated from sales and lead time.
                3. Items below reorder level highlighted automatically.
                4. Lines with no sales in ninety days listed for a decision.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A stock sheet updated weekly for two months, flagging items below reorder level and listing lines unsold for ninety days."
                cadence: rolling
              tasks:
                - "List each product with its count, cost and supplier lead time"
                - "Work out average weekly sales from the last three months"
                - "Set a reorder level for each item and highlight items below it"
                - "Update stock counts and order the items below reorder level @recurring(weekly:wed)"
            - name: Taking over spreadsheets when a colleague leaves
              description: |-
                ## Purpose
                Colleagues who leave at short notice hand over spreadsheets with no notes, unclear links and passwords nobody knows. A structured first fortnight (secure the files, list what each produces and when, run each once with a reconciliation, and note every unknown) means nothing is missed at the next deadline.

                ## Milestones
                1. Every inherited file copied to an agreed location with access confirmed.
                2. A list of what each file produces, for whom and on what date.
                3. Each file run once and its output reconciled to the last one sent.
                4. Unknowns listed and answered by the leaver, their manager or the users.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Every inherited spreadsheet sits in an agreed location, is listed with its outputs and dates, and has been run once with a reconciled result."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Copy every inherited file to the agreed team location"
                - "List what each file produces, for whom and when"
                - "Ask the leaver or their manager about passwords and linked files"
                - "Run each file once and reconcile it to the last output sent"
            - name: Shared team workbook rules
              description: |-
                ## Purpose
                Five people editing the same workbook at once means formulas get overtyped, rows get sorted out of line and nobody knows who changed what. A few rules (separate entry sheets, protected calculation sheets, data validation on entry cells and a regular look at the edit history) keep a shared file usable for everyone.

                ## Milestones
                1. Entry areas separated from calculation and output sheets.
                2. Calculation and output sheets protected, with the password held by the owner.
                3. Drop-down lists and limits on every entry cell.
                4. Edit history checked monthly and problems followed up with the person involved.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The shared workbook has protected calculation sheets, validated entry cells and a monthly edit history check logged for three months."
                cadence: rolling
              tasks:
                - "Move data entry onto its own sheet or sheets"
                - "Protect the calculation and output sheets"
                - "Add drop-down lists and limits to every entry cell"
                - "Check the edit history and protection settings @recurring(monthly:9)"
            - name: Break-even sheet for a new product or service
              description: |-
                ## Purpose
                Before launching a new product, service or location, an owner needs to know how many sales cover the costs and how sensitive that number is to price. A simple break-even sheet with fixed costs, unit costs and price as inputs, plus a table of profit at different volumes, makes the go or no-go conversation concrete.

                ## Milestones
                1. Fixed costs, variable cost per unit and price entered as labelled inputs.
                2. Break-even volume and break-even revenue calculated.
                3. A table showing profit at five volume levels and three prices.
                4. The result reviewed with whoever shares the decision.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A break-even sheet showing break-even volume and profit across five volumes and three prices, reviewed before the launch decision."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the fixed costs the new product or service adds"
                - "Work out the variable cost per unit and the planned price"
                - "Calculate break-even volume and break-even revenue"
                - "Build a profit table across five volumes and three prices"
            - name: Readable formulas with LET and LAMBDA
              description: |-
                ## Purpose
                Long nested formulas that repeat the same lookup three times are slow and almost impossible to review. LET names the intermediate steps inside a formula, and LAMBDA turns a calculation you use often into a named function, so experienced builders can write logic once and reviewers can read it like a sentence.

                ## Milestones
                1. Three long formulas rewritten with LET and checked for identical results.
                2. One repeated calculation turned into a named LAMBDA function.
                3. The custom function documented with inputs, output and an example on a notes sheet.
                4. A reviewer confirms the new formulas are easier to follow.

                ## Notes
                Custom functions only work for readers whose spreadsheet version supports them, and beginners can find them harder to audit. Use them for repeated logic, not everywhere.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three formulas rewritten with LET and one named LAMBDA function documented, with results identical to the originals."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Find the three longest formulas in your main model"
                - "Rewrite each with LET and confirm the results are identical"
                - "Turn one repeated calculation into a named LAMBDA function"
                - "Document the custom function on a notes sheet with an example"
            - name: Optimisation models with Solver
              description: |-
                ## Purpose
                Some questions ask for the best combination rather than a single answer: the staff rota that covers demand at least cost, the product mix that fits a budget, the delivery split across vans. Setting up a Solver model with a clear objective, decision cells and constraints answers them properly, provided someone checks the result makes sense.

                ## Milestones
                1. The objective, decision cells and constraints written in plain words first.
                2. The model built with decision cells clearly marked.
                3. A Solver run returning a feasible answer, saved as a named scenario.
                4. The answer sense-checked by hand and with the person who will act on it.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One real allocation question answered with a documented Solver model whose result was sense-checked with the decision-maker."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the objective, decision cells and constraints in plain words"
                - "Mark the decision cells in a distinct colour"
                - "Run Solver and save the answer as a named scenario"
                - "Check the answer by hand against two simple alternatives"
            - name: Monte Carlo risk analysis in a spreadsheet
              description: |-
                ## Purpose
                One forecast hides how wide the outcomes could be, and three scenarios only sample a few of them. Running a few thousand random draws over the uncertain inputs gives a range and probabilities, such as a one in five chance of missing the target, which is often what a cautious decision really needs.

                ## Milestones
                1. Three to five uncertain inputs given a range and distribution agreed with their owners.
                2. A simulation sheet running at least a thousand draws.
                3. Results shown as a histogram and percentiles of the key output.
                4. Correlated inputs handled, or the limitation written down.
                5. Findings presented with the caveats stated.

                ## Notes
                The output is only as good as the ranges fed in. Spend more time agreeing the ranges than building the simulation.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A simulation of at least a thousand draws over agreed input ranges, presented as percentiles of the key output with caveats written down."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Pick three to five inputs whose values are genuinely uncertain"
                - "Agree a low, likely and high value for each with its owner"
                - "Build a simulation sheet with at least a thousand random draws"
                - "Show the key output as a histogram with percentiles"
            - name: Model risk register for business-critical spreadsheets
              description: |-
                ## Purpose
                Some spreadsheets carry real money: payroll checks, pricing, commission, regulatory returns. A register naming each critical model's owner, the worst error it could produce, the controls in place and a review date gives managers a clear view of spreadsheet risk and a reason to fund the fixes.

                ## Milestones
                1. Business-critical models identified from the inventory.
                2. Owner, purpose, worst credible error, controls and residual rating recorded for each.
                3. Missing controls listed with an owner and a date.
                4. The register reviewed with each model owner every quarter.

                ## Notes
                Start from the **Risk register** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A model risk register covering every business-critical spreadsheet with owners, controls and ratings, reviewed with owners each quarter."
                cadence: cyclic
              tasks:
                - "Pick the business-critical models from your inventory"
                - "Write down the worst credible error each could produce"
                - "List the controls in place and the ones missing"
                - "Review the register with each model owner @recurring(quarterly)"
            - name: Independent model audit against a modelling standard
              description: |-
                ## Purpose
                Models behind large decisions, such as an investment, a contract bid or a funding round, deserve more than a peer check. Reviewing one against a published financial modelling standard, such as the FAST Standard, or commissioning an external reviewer, tests structure, logic and documentation systematically and gives decision-makers written assurance.

                ## Milestones
                1. A modelling standard or external reviewer chosen for the audit.
                2. The model's scope, key outputs and known issues documented for the reviewer.
                3. Findings rated by severity, each with a fix or an accepted risk.
                4. A short audit statement attached to the model's cover sheet.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "One decision-critical model audited against a named standard or by an external reviewer, with every finding fixed or accepted in writing."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Choose the decision-critical model that most needs an audit"
                - "Read a published modelling standard and pick the rules to test"
                - "Write a scope note with key outputs and known issues for the reviewer"
                - "Ask the agent to sort the audit findings by severity into a fix list"
---

# Spreadsheet Analysis & Models

This area is for anyone whose work or business runs on spreadsheets: the analyst whose model feeds a decision, the manager who inherits a colleague's workbooks and the small business owner whose cash, quotes and stock live in a few files. It starts with foundations (an inventory, a scope page, separate inputs, calculations and outputs, a house style, a starter workbook, a checks sheet and file rules), moves through the routines that keep models honest and the formula skills that prevent silent errors, then improvements such as rebuilding an inherited model, scenarios and sensitivities, dated events like budget season and a lender application, situations for small businesses and handovers, and finally specialist work in optimisation, simulation, model risk and independent audit.

What repeats is a monthly data refresh with a reconciliation, a Friday checks review before figures go out, a peer review swap, monthly change log, error log, link and backup checks, a quarterly assumptions refresh and risk register review, a weekly cash roll-forward and stock update for small businesses, and a yearly clean-up of the spreadsheet estate. The Operational checklist, Remediation plan, Purchase decision, Meeting notes and Risk register templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
