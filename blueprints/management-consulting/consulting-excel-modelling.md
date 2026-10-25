---
id: management-consulting.consulting-excel-modelling
name: Consulting Excel Modelling
description: "Engagement models built to a house standard: a scoping note, clean inputs and outputs, scenario switches, a checks sheet, version control and a handover the client can run without you."
category: business
version: 1.0.0
tags: [management-consulting, consulting-excel-modelling, knowledge-worker, excel, financial-modelling, scenarios, model-checks, handover]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - meeting-notes
    - risk-register
    - skills-matrix
  pillars:
    - name: Management Consulting
      emoji: "📋"
      description: "Consulting as a craft and a business: case interviews and getting hired, structuring problems with issue trees, hypothesis-driven workplans, client interviews, slides and steering committees, the career from analyst to partner, and going independent or building a boutique firm with sensible pricing."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Consulting Excel Modelling
          description: "Building client-ready Excel models: clear structure, inputs and outputs, scenarios, checks and a model the client can maintain after you leave."
          projects:
            - name: Personal modelling standard for client work
              description: |-
                ## Purpose
                Models built on a Monday night under deadline pressure all look different, and the reviewer has to learn a new layout every time. A one-page standard covering cell colours for inputs, formulas and links, sign conventions, units, tab order and naming means every model you build reads the same way, and a manager can review it in half the time.

                ## Milestones
                1. A one-page standard covering cell colours, number formats, sign convention, units and tab order.
                2. The standard compared with your firm's modelling guide, if one exists, and any conflicts resolved in favour of the firm's.
                3. A blank starter workbook built to the standard with the core tabs already in place.
                4. The standard shared with your engagement manager for comment.

                ## Notes
                A common default: blue font for hard-coded inputs, black for formulas, green for links to other sheets, and one formula per row copied across. Pick one convention and never mix them in a single file.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written one-page modelling standard and a matching blank starter workbook exist and have been reviewed by your engagement manager."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find your firm's modelling or Excel guide in the knowledge base"
                - "Write the colour, format, sign and unit rules on one page"
                - "Build a blank starter workbook with cover, inputs, calcs, outputs and checks tabs"
                - "Send the standard to your engagement manager and ask for one change"
            - name: Excel set-up for keyboard-first modelling
              description: |-
                ## Purpose
                Consultants lose hours a week to default settings: automatic calculation on a heavy file, a ribbon hunted with the mouse, and paste-special buried three menus deep. One session setting calculation mode, the Quick Access Toolbar, autosave behaviour and your most used shortcuts pays back within the first week of any engagement.

                ## Milestones
                1. Quick Access Toolbar holding your ten most used commands in a fixed order, reachable by Alt and a number.
                2. Calculation behaviour chosen for large files, with the recalculate shortcut learned.
                3. AutoRecover interval and save location set and checked.
                4. The set-up exported or written down so it can be rebuilt on a new laptop in fifteen minutes.

                ## Notes
                Firm laptops are often reimaged. Keep the exported toolbar file and your settings list in your own notes, not only on the machine.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Your Quick Access Toolbar, calculation and AutoRecover settings are configured and an export or written list lets you rebuild them on another machine."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the ten commands you reach for most with the mouse"
                - "Add them to the Quick Access Toolbar in order of use"
                - "Set the AutoRecover interval and check where recovered files land"
                - "Export the toolbar customisation and save it to your own notes"
            - name: Model scoping note before the first formula
              description: |-
                ## Purpose
                Most rebuilt models were rebuilt because nobody wrote down what they had to answer. Half a page agreed with the engagement manager, naming the questions, the outputs and their units, the time horizon, the level of detail and who will use the file, stops you building a monthly SKU model when the steering committee wanted three annual scenarios.

                ## Milestones
                1. The three to five questions the model must answer written as questions.
                2. Each output listed with its unit, time period and the slide it feeds.
                3. Granularity, horizon and currency decided and written down.
                4. The note agreed by the engagement manager before the build starts.

                ## Notes
                If a requested output does not trace back to a question in the note, ask why before building it.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A scoping note listing questions, outputs, granularity, horizon and users is approved by the engagement manager before any calculation tab is built."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the questions the model must answer for this engagement"
                - "Sketch each output table with its units on paper"
                - "Decide the time horizon, period length and currency"
                - "Walk the engagement manager through the note in fifteen minutes"
            - name: Tab map and calculation flow diagram
              description: |-
                ## Purpose
                When a model grows past ten tabs, people stop knowing where a number comes from and start adding links in every direction. Drawing the flow from inputs through calculations to outputs and checks, before building, keeps every link running one way and gives the cover sheet a map anyone can follow.

                ## Milestones
                1. A diagram showing every planned tab and the direction of data between them.
                2. No planned link running from an output or calculation tab back to inputs.
                3. Tabs ordered in the workbook in the same sequence as the diagram.
                4. The diagram pasted on the cover sheet of the model.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The model's cover sheet shows a tab flow diagram that matches the actual tab order, with all links running from inputs towards outputs."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Draw boxes for each planned tab and arrows for the data between them"
                - "Mark any arrow that points backwards and redesign around it"
                - "Reorder the workbook tabs to match the diagram"
                - "Paste the final diagram onto the cover sheet"
            - name: Inputs sheet with sources, units and owners
              description: |-
                ## Purpose
                Scattered hard-codes are the main reason a client cannot update a consulting model after the team leaves. One inputs sheet where every assumption sits once, labelled with its unit, source document, owner and date, turns the question of where a number came from into a thirty-second answer in the steering committee.

                ## Milestones
                1. Every hard-coded assumption moved to the inputs sheet, one value per cell.
                2. Columns for unit, source, owner, date and a short comment filled for each input.
                3. Inputs grouped by theme with clear headers.
                4. A search of the calculation tabs that finds no remaining typed numbers apart from agreed constants such as 12 or 100.

                ## Notes
                Find typed numbers in formula tabs with Go To Special and Constants. Anything it finds either moves to inputs or gets a comment explaining why it stays.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All assumptions sit on one inputs sheet with unit, source, owner and date, and a constants search of the calculation tabs returns only agreed exceptions."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Run Go To Special and Constants on each calculation tab"
                - "Move each typed assumption to the inputs sheet and link it back"
                - "Add unit, source, owner and date for every input"
                - "Group the inputs under themed headers"
            - name: Timeline row with period flags
              description: |-
                ## Purpose
                Half of the logic errors in consulting models are timing errors: a cost starting a month early, a fiscal year that ends in March treated as December, a ramp-up applied twice. A single timeline block with start and end dates, period numbers and flags for actuals, forecast and fiscal year gives every row the same calendar to multiply against.

                ## Milestones
                1. One timeline block with period start date, end date and period number, linked from a single model start date.
                2. Flags for actual versus forecast periods and for the client's fiscal year.
                3. Every time-based row referencing the timeline block rather than its own dates.
                4. A test where moving the start date by one period shifts every output correctly.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The model has one timeline block driving all time-based rows, and changing the start date moves every output by the expected period."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Confirm the client's fiscal year end and reporting periods"
                - "Build start, end and period number rows from one start date input"
                - "Add actual, forecast and fiscal year flags as 1 or 0 rows"
                - "Shift the start date by one period and check the outputs move"
            - name: Checks sheet with one master check
              description: |-
                ## Purpose
                A model without checks fails silently, and the first person to notice is often the client's finance director. A checks sheet that collects balance, totals, sign and range tests into one master flag shown on every tab means you know the model is broken before anyone else does.

                ## Milestones
                1. At least eight checks covering totals that must agree, balances that must be zero and values that must stay in range.
                2. Each check returning zero when passing, with a tolerance for rounding.
                3. A master check summing all checks and displayed in the header of every tab.
                4. A deliberate error introduced and caught by the master check, then removed.

                ## Notes
                Start from the **Operational checklist** template to keep the list of checks and what each one proves.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A checks sheet with at least eight documented checks feeds a master flag shown on every tab, and a test error was caught by it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every total in the model that must agree with another"
                - "Build each check as a difference that should equal zero"
                - "Link the master check into the header row of every tab"
                - "Break one input on purpose and confirm the master check flags it"
            - name: Model version control and file naming
              description: |-
                ## Purpose
                Final_v3_REAL_mk.xlsx is how teams end up presenting numbers from the wrong file. A naming rule with date and version, a folder for superseded versions, and a version log on the cover sheet means anyone can tell which file is live and what changed between two of them.

                ## Milestones
                1. A naming rule agreed with the team, such as client, model name, date and version number.
                2. A superseded folder holding every previous version, never edited.
                3. A version log on the cover sheet with date, author and a one-line summary of changes.
                4. Only one live file in the working folder at any time.
              priority: high
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "The working folder holds one live model named to the agreed rule, with every earlier version in a superseded folder and logged on the cover sheet."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Agree a file naming rule with the team in the next check-in"
                - "Create a superseded folder and move every older version into it"
                - "Add a version log table to the cover sheet"
                - "Rename the current live model to the new rule"
            - name: Output tables built to paste into slides
              description: |-
                ## Purpose
                Teams waste late nights retyping model outputs into slides and introducing errors on the way. Output tabs laid out at the exact rows, columns, units and rounding the slide needs, ideally with a paste-linked table or chart, mean refreshing the deck after a model change takes minutes and the numbers on the page always match the file.

                ## Milestones
                1. One output tab per slide or exhibit, laid out to the slide's shape.
                2. Units, rounding and labels on each output matching the slide template.
                3. A documented method for moving outputs into slides, either linked or pasted as values with a date stamp.
                4. A test refresh where a changed input reaches the slide correctly.

                ## Notes
                Linked objects break when files move or are emailed. Many teams paste as values and keep a cell on each output tab showing the version it was taken from.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each model exhibit has an output tab in slide layout, and a test input change was carried through to the deck without retyping."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the slides that need numbers from this model"
                - "Build one output tab per exhibit in the slide's layout"
                - "Match units and rounding to the slide template"
                - "Change one input and carry the result through to the deck"
            - name: Daily model change log
              description: |-
                ## Purpose
                On a live engagement the model changes several times a day, often by three people, and nobody remembers why revenue fell by two percent on Wednesday. One line per change in a log on the cover sheet, written before you close the file, makes reviews faster and lets you explain any movement when the manager asks.

                ## Milestones
                1. A change log table with date, author, tabs touched, change and effect on headline outputs.
                2. An entry made at the end of every working day on which the model changed.
                3. Headline output values recorded alongside each entry so movements are visible.
                4. The log used at least once to explain a movement to the manager or client.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The model's change log has an entry for every day the model changed during the engagement, each with the headline output values at that point."
                cadence: rolling
              tasks:
                - "Add a change log table with date, author, tabs, change and headline outputs"
                - "Write the day's model changes and headline values before closing the file @recurring(daily)"
                - "Point the team to the log in the next check-in"
                - "Compare headline values with last week and explain any large move @recurring(weekly:mon)"
            - name: Weekly model review with the engagement manager
              description: |-
                ## Purpose
                Managers who only see a model the night before a steering committee find problems when there is no time to fix them. Thirty minutes a week walking through what changed, what the checks show and which assumptions are still unconfirmed catches structural problems while they are cheap.

                ## Milestones
                1. A standing thirty-minute weekly slot in both calendars.
                2. A short agenda: changes since last week, check status, open assumptions, outputs needed next.
                3. Actions from each review recorded and closed before the next one.
                4. No steering committee where the manager saw the model for the first time the night before.

                ## Notes
                Start from the **Meeting notes** template and keep each review on one page.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly model review has taken place on every engagement week, with recorded actions closed before the following review."
                cadence: rolling
              tasks:
                - "Propose a standing thirty-minute weekly slot to your engagement manager"
                - "Walk the manager through changes, checks and open assumptions @recurring(weekly:wed)"
                - "Close or reassign last week's review actions before the next session"
            - name: Weekly model archive and backup
              description: |-
                ## Purpose
                Corrupted files, an accidental overwrite and a laptop left in a taxi have all ended engagements' weekends. A weekly copy of the live model and its supporting extracts to the engagement's approved storage, saved under its version name, means the worst case is losing a few days, not a month.

                ## Milestones
                1. The firm's approved storage location for engagement files confirmed.
                2. A weekly copy of the live model and source extracts saved there under the version name.
                3. One restore tested by opening an archived copy and checking the master check passes.
                4. No client data held only on a personal device.

                ## Notes
                Client data rules come first. Only back up to locations the engagement's confidentiality terms and your firm's policy allow.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An archived copy of the live model exists in approved storage for every week of the engagement, and one restore has been tested."
                cadence: rolling
              tasks:
                - "Confirm the approved storage location for this engagement's files"
                - "Copy the live model and source extracts to approved storage @recurring(weekly:fri)"
                - "Open one archived copy and check the master check still passes"
            - name: Monthly input refresh when client data lands
              description: |-
                ## Purpose
                Models that run for several months, such as a transformation baseline or a monthly cost tracker, go stale the moment new actuals arrive. A fixed refresh routine, with a checklist of which inputs change, where the new numbers come from and which outputs should move, turns a two-day scramble into a half-day job.

                ## Milestones
                1. A refresh checklist naming each input that changes monthly and its source file.
                2. Actual periods rolled forward and forecast flags updated.
                3. Headline outputs compared before and after the refresh with movements explained.
                4. The refreshed version logged and the previous one archived.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each monthly refresh follows the written checklist and ends with a logged version and a short note explaining movements in headline outputs."
                cadence: cyclic
              tasks:
                - "Write the refresh checklist of inputs, sources and expected movements"
                - "Load the new month's actuals and roll the forecast flags forward @recurring(monthly:8)"
                - "Write a short note explaining each headline movement after the refresh"
                - "Reconcile the refreshed actuals to the client monthly management accounts @recurring(monthly:10)"
            - name: Pre-send model check routine
              description: |-
                ## Purpose
                Every number that leaves the team, in an email, a pre-read or a deck, is quoted back later as fact. A ten-minute routine before anything is sent, covering the master check, a sense check of headline numbers against last version, hidden tabs and stray comments, catches the errors that embarrass a team in front of a client.

                ## Milestones
                1. A written pre-send checklist of no more than ten items.
                2. The checklist run before every external send of the model or its outputs.
                3. Hidden tabs, personal comments and draft notes removed from any client copy.
                4. A record of which version was sent, to whom and when.

                ## Notes
                Start from the **Operational checklist** template. Include a step to check document properties and the author field, which often show earlier client names.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every model or output sent to the client during the engagement has a sent-log entry and was checked against the written pre-send list."
                cadence: rolling
              tasks:
                - "Write a ten-item pre-send checklist for models and outputs"
                - "Run the pre-send checklist before the next external send"
                - "Remove hidden tabs, comments and old document properties from client copies"
                - "Log the version sent, recipients and date in the sent log"
                - "Trace three random output numbers back to their source files @recurring(weekly:thu)"
            - name: Assumption sign-off log with the client
              description: |-
                ## Purpose
                The fastest way to lose a steering committee is for a client executive to reject an assumption nobody asked them about. A log of the twenty or so assumptions that move the answer, each with the client owner who agreed it and the date, means challenges in the room are about the decision, not the spreadsheet.

                ## Milestones
                1. The assumptions that move headline outputs by more than a set threshold identified.
                2. Each one assigned a client owner who can confirm it.
                3. Agreement recorded with date and any range the owner gave.
                4. Unconfirmed assumptions flagged on the inputs sheet and in pre-reads.
              priority: high
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every assumption that moves a headline output by more than the agreed threshold has a named client owner and a recorded confirmation date."
                cadence: rolling
              tasks:
                - "Rank inputs by their effect on the headline outputs"
                - "Name a client owner for each of the top twenty assumptions"
                - "Chase the client owners for any unconfirmed assumptions @recurring(weekly:tue)"
                - "Flag unconfirmed assumptions in amber on the inputs sheet"
            - name: Model issues list shared with client finance
              description: |-
                ## Purpose
                Questions about the client's numbers pile up in personal notes and emails, and get answered twice or not at all. One shared issues list for the model, with each question, the owner on the client side, the impact if unresolved and the answer, keeps the finance team engaged and shows the steering committee what is still open.

                ## Milestones
                1. An issues list with question, client owner, impact, status and resolution.
                2. Every open modelling question moved into the list from email and notes.
                3. A regular slot with client finance to work through open items.
                4. Resolved items linked to the input or calculation they changed.

                ## Notes
                Start from the **Risk register** template and adapt the columns. Rate impact by how much the headline output could move.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A shared issues list holds every open modelling question with owner and impact, reviewed with client finance on a regular slot until all are resolved or accepted."
                cadence: rolling
              tasks:
                - "Set up the issues list with question, owner, impact, status and resolution"
                - "Move every open question from email and notes into the list"
                - "Work through open items with the client finance contact @recurring(weekly:thu)"
                - "Link each resolved item to the cell it changed"
            - name: Quarterly review of errors that reached a client
              description: |-
                ## Purpose
                Most modelling mistakes are repeats: the same sign flip, the same lookup that silently returned the wrong row. Reviewing every error that reached a client or a senior reviewer each quarter, and adding a check or a standard rule for each, is how a modeller stops making last year's mistakes.

                ## Milestones
                1. An error log noting what went wrong, how it was found and what it would have changed.
                2. Each error classified, for example as logic, input, timing, units or presentation.
                3. A new check or standard rule written for every repeated type.
                4. The modelling standard updated with the new rules.
              priority: low
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "An error log exists, is reviewed each quarter, and each repeated error type has a matching rule in your modelling standard."
                cadence: cyclic
              tasks:
                - "Start an error log with what, how found, impact and type columns"
                - "Log any error a reviewer or client found this month in the error log @recurring(monthly:28)"
                - "Review the quarter's errors and add a rule or check for each repeat @recurring(quarterly)"
                - "Update your modelling standard with the new rules"
            - name: Keyboard shortcut drill for model building
              description: |-
                ## Purpose
                Senior reviewers notice speed, and speed in Excel is mostly keyboard fluency: moving across blocks, filling right, tracing precedents and pasting special without the mouse. A short drill on a practice file, repeated every two weeks until it is automatic, can halve the time it takes to build a standard calculation block.

                ## Milestones
                1. A list of the thirty shortcuts that matter most for your work.
                2. A practice file with a standard build task timed on the first attempt.
                3. The same task timed again after a month of drills.
                4. Mouse use for navigation and paste special largely gone in live work.

                ## Notes
                Start from the **Skills matrix** template to track which shortcuts you know, which you are learning and which you still reach for the mouse to do.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A timed build task on a practice file is completed at least 30 percent faster after a month of fortnightly drills."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write your list of the thirty shortcuts you most need"
                - "Time yourself building a standard revenue block in a practice file"
                - "Run a fifteen-minute shortcut drill on the practice file @recurring(monthly:3)"
                - "Run a second fifteen-minute drill midway through the month @recurring(monthly:17)"
            - name: Lookup formulas that fail loudly
              description: |-
                ## Purpose
                Of all the formulas in a consulting model, the lookup that quietly returns the wrong row is the most dangerous, because the number looks plausible. Learning when to use XLOOKUP, INDEX with MATCH, exact matching and explicit not-found handling, and testing each with duplicates and missing keys, turns a silent risk into a visible error.

                ## Milestones
                1. XLOOKUP and INDEX with MATCH both written from memory with exact matching.
                2. A not-found result that shows a clear flag rather than a zero.
                3. A practice sheet with duplicate and missing keys showing how each formula behaves.
                4. A check added to your standard for duplicate keys in lookup tables.

                ## Notes
                Check which Excel version the client runs before relying on newer functions. Some clients still run versions without XLOOKUP.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A practice workbook demonstrates exact-match lookups with explicit not-found flags and a duplicate-key check, all written from memory."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Build a lookup table with deliberate duplicates and missing keys"
                - "Write XLOOKUP and INDEX with MATCH against it with exact matching"
                - "Replace zero results with a clear not-found flag"
                - "Add a COUNTIF duplicate-key check to your modelling standard"
            - name: Conditional aggregation with SUMIFS and pivots
              description: |-
                ## Purpose
                Consulting models constantly slice the same data by business unit, region, product or initiative. Getting fluent with SUMIFS, COUNTIFS and when a pivot table is the better tool means you can rebuild any cut the manager asks for in minutes and reconcile it back to the total.

                ## Milestones
                1. SUMIFS and COUNTIFS written with multiple criteria from memory.
                2. A cut by two dimensions that reconciles to the grand total with a check.
                3. A pivot table built from the same data and agreed to the SUMIFS result.
                4. A rule written for when to use each in a client model.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A practice file shows a two-dimensional SUMIFS cut and a pivot table that both reconcile to the same grand total."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Take a sample transaction extract and build a cut by region and product"
                - "Add a check that the cut sums to the grand total"
                - "Build the same cut as a pivot table and compare"
                - "Write one line on when you would use each in a client model"
            - name: Dynamic arrays, LET and named ranges
              description: |-
                ## Purpose
                Newer Excel functions such as FILTER, UNIQUE, SORT and LET can replace long helper blocks and make formulas readable, but they can also confuse a client who has never seen a spill range. Learning them properly, and deciding where they help and where they hurt maintainability, keeps your models modern without stranding the client.

                ## Milestones
                1. FILTER, UNIQUE, SORT and LET each used in a practice model.
                2. A long nested formula rewritten with LET and compared for readability.
                3. Named ranges used for key inputs with a naming rule.
                4. A note in your standard on when to avoid these functions for client handover.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A practice model uses FILTER, UNIQUE, SORT and LET correctly, and your standard records when they are allowed in client models."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Rebuild a helper column block using UNIQUE and FILTER"
                - "Rewrite your longest nested formula with LET"
                - "Create named ranges for the five most used inputs"
                - "Add a client handover rule for these functions to your standard"
            - name: Sensitivity tables and tornado charts
              description: |-
                ## Purpose
                A steering committee rarely asks for the answer alone. It asks what happens if volumes are ten percent lower. Building data tables and a tornado chart that rank inputs by their effect on the headline output lets you answer in the room and shows the client which assumptions deserve their attention.

                ## Milestones
                1. A one-way and a two-way data table built on a practice model.
                2. A tornado chart ranking the top eight inputs by effect on the headline output.
                3. Calculation settings handled so data tables do not slow the whole model.
                4. A sensitivity page used in a real engagement pre-read.

                ## Notes
                Data tables recalculate constantly. Many modellers set calculation to automatic except data tables and recalculate them on purpose.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A sensitivity output with a two-way data table and a tornado chart of the top eight inputs is built and used in at least one client pre-read."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Build a one-way data table on the headline output"
                - "Build a two-way table for the two most important inputs"
                - "Calculate low and high cases for eight inputs and chart them as a tornado"
                - "Set calculation to automatic except data tables"
            - name: Scenario switch on the inputs sheet
              description: |-
                ## Purpose
                Copying the whole model to create a downside case doubles the maintenance and guarantees the copies drift apart. A scenario selector on the inputs sheet, with base, upside and downside columns and one live column feeding the model, lets you show any case in seconds and keeps a single set of logic.

                ## Milestones
                1. Base, upside and downside values side by side for every input that varies by scenario.
                2. A single live column chosen by a selector cell with data validation.
                3. A scenario comparison output showing headline results for all cases together.
                4. No duplicate model files for different scenarios.

                ## Notes
                To show all scenarios at once without switching, run each through a data table on the selector cell, or paste results as values with a label of the version used.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One model file runs base, upside and downside cases from a selector cell, with a comparison output showing all three."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Mark which inputs vary by scenario on the inputs sheet"
                - "Add base, upside and downside columns for those inputs"
                - "Build a live column driven by a validated selector cell"
                - "Create a comparison output of headline results across the three cases"
            - name: Charts for consulting exhibits from the model
              description: |-
                ## Purpose
                Waterfalls, stacked bars and variable-width charts are the backbone of consulting exhibits, and building them badly in Excel produces charts that break when the data changes. Learning to build them from a clean output block, with labels driven by cells, means charts update with the model rather than being redrawn by hand.

                ## Milestones
                1. A waterfall chart built from an output block with totals and labels from cells.
                2. A stacked bar with a total label that updates with the data.
                3. A variable-width chart built either natively or with a recognised add-in.
                4. Each chart tested by changing the underlying data.

                ## Notes
                Many firms use a slide charting add-in instead of native Excel charts. Learn whichever your firm uses, and keep the model output block clean either way.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Waterfall, stacked bar and variable-width charts are built from model output blocks and each one updates correctly when the data changes."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask a senior colleague which charting tool the firm uses for exhibits"
                - "Build a waterfall from a bridge output block"
                - "Build a stacked bar with a cell-driven total label"
                - "Change the data and check every chart updates"
            - name: Handling circular references deliberately
              description: |-
                ## Purpose
                Interest on an average cash balance, fees calculated on a total that includes the fee, and bonus pools tied to profit after bonus all create circularity. Knowing how to remove it with algebra or a prior-period link, and when to use a controlled iteration switch instead, prevents the frozen, unstable models that make clients lose trust.

                ## Milestones
                1. Iterative calculation turned off by default in your Excel settings.
                2. A practice circularity solved once with a prior-period link and once algebraically.
                3. A circuit breaker switch built for any model that keeps a deliberate circularity.
                4. A rule in your standard on when circularity is allowed.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A practice model resolves one circularity two ways, and your standard states when iteration is allowed and requires a circuit breaker."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Turn off iterative calculation in your Excel options"
                - "Build an interest-on-average-cash example and remove the circularity"
                - "Add a circuit breaker switch to a version that keeps it"
                - "Write the circularity rule into your modelling standard"
            - name: Auditing a model you did not build
              description: |-
                ## Purpose
                Consultants regularly inherit a client's planning model or a previous team's file and are asked whether it can be trusted. A structured audit method, covering a map of the tabs, tracing precedents from outputs, scanning for hard-codes, inconsistent formulas and external links, lets you give a clear answer in a day rather than a week.

                ## Milestones
                1. An audit checklist covering structure, hard-codes, formula consistency, links, errors and named ranges.
                2. Tracing tools and inconsistency checks practised on an unfamiliar model.
                3. A one-page audit note with findings ranked by impact on outputs.
                4. Findings discussed with the model's owner before they are reported more widely.

                ## Notes
                Some Excel editions include a workbook comparison and inquiry tool that lists links, formulas and inconsistencies. Check whether yours has it before building your own scans.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An unfamiliar model has been audited against a written checklist, producing a one-page note of findings ranked by output impact."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write an audit checklist for structure, hard-codes, consistency, links and errors"
                - "Pick an inherited or sample model to practise on"
                - "Trace the three headline outputs back to their inputs"
                - "Write a one-page audit note ranked by impact"
            - name: Excel or another tool for this model
              description: |-
                ## Purpose
                Excel is the default because clients can open it, but a model over a few million rows, refreshed daily or shared by twenty users may belong in a database, a script or a planning tool. Deciding against written criteria at the start stops the team from forcing a model into a file that crashes every time the client opens it.

                ## Milestones
                1. Criteria written for data volume, refresh frequency, number of users, client skills and handover needs.
                2. Excel, a scripting language and the client's own planning or BI tool scored against the criteria.
                3. A decision recorded with the reason and agreed by the engagement manager.
                4. Any split agreed, such as data preparation outside Excel and the model inside it.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded tool decision for the model, scored against written criteria and agreed with the engagement manager."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Estimate the data volume and refresh frequency the model needs"
                - "Ask the client which planning or BI tools their finance team maintains"
                - "Score Excel and two alternatives against the written criteria"
                - "Record the decision and the reason in the scoping note"
            - name: Simplifying an overbuilt model
              description: |-
                ## Purpose
                Engagement models tend to grow every week and almost never shrink, until the file takes a minute to open and nobody knows which tabs still matter. A simplification pass that removes unused tabs, dead rows and duplicated logic, while proving the outputs are unchanged, often cuts a model by a third and makes handover realistic.

                ## Milestones
                1. Headline outputs recorded before any change.
                2. Tabs and rows with no dependents listed and removed or archived.
                3. Duplicated logic merged into one calculation block.
                4. Headline outputs after simplification matching the recorded values exactly.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A simplified model with fewer tabs and rows produces headline outputs identical to the recorded pre-change values."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Paste the current headline outputs as values on a comparison tab"
                - "List tabs and rows that nothing else references"
                - "Archive the unused tabs to a separate file"
                - "Compare headline outputs with the pasted values after each change"
            - name: Slow workbook performance fix
              description: |-
                ## Purpose
                Thirty seconds to recalculate is enough to make a model get used less, checked less and broken more. Finding the real causes, usually volatile functions such as OFFSET and INDIRECT, whole-column references, array formulas over huge ranges, excess formatting and external links, can turn a crawling file into one the client will actually open.

                ## Milestones
                1. Recalculation time measured before changes.
                2. Volatile functions, whole-column references and external links listed.
                3. The worst offenders replaced with non-volatile or bounded alternatives.
                4. Recalculation time measured again and file size compared.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The model's recalculation time and file size are measured before and after, with a documented list of the changes that produced the improvement."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Time a full recalculation and note the file size"
                - "Search the model for OFFSET, INDIRECT and whole-column references"
                - "Remove unused formatting and break any external links"
                - "Time the recalculation again and record the difference"
            - name: Single file or linked model set
              description: |-
                ## Purpose
                Large engagements tempt teams to split the model into separate files per workstream, which then link to each other and break when anyone renames a folder. Deciding early between one integrated workbook, a set of files feeding a consolidation by pasted values, or a shared data source avoids the broken-link chaos of week six.

                ## Milestones
                1. Each workstream's model needs and owners listed.
                2. One integrated workbook, value-pasted feeder files and a shared data source compared.
                3. A structure chosen with clear rules for how numbers move between files.
                4. No live external links between workbooks, unless agreed and documented.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded model structure decision with written rules for moving numbers between files, agreed by all workstream leads."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List each workstream's modelling needs and owner"
                - "Compare one workbook, feeder files and a shared data source"
                - "Write the rules for moving numbers between files"
                - "Agree the structure with the workstream leads"
            - name: Input controls with data validation
              description: |-
                ## Purpose
                Once a client starts using a model, inputs get typed as text, percentages as whole numbers and dates in three formats. Data validation, dropdowns, protected formula cells and clear input formatting stop most of these mistakes at the point of entry, which matters most once the team is no longer there to catch them.

                ## Milestones
                1. Data validation on every input cell with the allowed type and range.
                2. Dropdowns for any input with a fixed list of options.
                3. Formula cells locked and the sheets protected without a password the client cannot recover.
                4. An input entry test by someone outside the team.

                ## Notes
                Protection is a guard against accidents, not security. Give the client the protection password at handover, or use none.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every input cell has validation, formula cells are locked, and a colleague outside the team entered test inputs without breaking the model."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Add data validation with types and ranges to every input cell"
                - "Replace fixed-list inputs with dropdowns"
                - "Lock formula cells and protect each calculation sheet"
                - "Ask a colleague outside the team to enter test inputs"
            - name: First model walkthrough with client finance
              description: |-
                ## Purpose
                Client finance teams who see a consulting model for the first time at the steering committee tend to attack it. A walkthrough early in the build, showing the structure, the inputs taken from their data and the logic of the main calculations, turns them from critics into co-owners and surfaces errors in their data before they matter.

                ## Milestones
                1. A walkthrough booked with the client's finance lead within the first three weeks of the build.
                2. The model structure, inputs and key calculations shown on screen.
                3. Every question raised captured in the model issues list.
                4. A follow-up date agreed to review the answers.

                ## Notes
                Start from the **Meeting notes** template. Show the model on screen rather than sending it ahead, so the conversation stays on logic rather than formatting.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A walkthrough with client finance has taken place, with every question raised logged in the issues list and a follow-up date agreed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the engagement manager who should attend from client finance"
                - "Book a one-hour walkthrough in the client's diary"
                - "Prepare a three-minute tour of the tab map and inputs"
                - "Log every question raised in the model issues list"
            - name: Numbers freeze before a steering committee
              description: |-
                ## Purpose
                Changing the model the night before a steering committee is how decks end up with three different revenue figures. A freeze point two days before, after which only agreed fixes go in and every output is regenerated from the frozen version, gives the team time to check the deck against one set of numbers.

                ## Milestones
                1. A freeze time agreed with the engagement manager for each steering committee.
                2. The frozen version saved, named and logged.
                3. Every number in the pre-read traced to the frozen version.
                4. Any change after the freeze approved by the manager and logged.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The steering committee pre-read uses numbers from one frozen, logged model version, with any later change approved and recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Agree the freeze time for the next steering committee"
                - "Save and log the frozen version at the agreed time"
                - "Tick each number in the pre-read against the frozen version"
                - "Record any approved change made after the freeze"
            - name: Independent model review before the final readout
              description: |-
                ## Purpose
                The person who built a model is the worst placed to find its errors. A review by a colleague outside the engagement, against a written checklist and with time left to fix what they find, is the last chance to catch a mistake before the recommendation rests on it in front of the client's executives.

                ## Milestones
                1. A reviewer outside the engagement team booked at least a week before the readout.
                2. A review pack ready: scoping note, tab map, checks status and key assumptions.
                3. Findings logged and each one fixed, accepted or explained.
                4. The reviewer's sign-off recorded on the cover sheet.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An independent reviewer has signed off the model on the cover sheet before the final readout, with every finding fixed or explained."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the engagement manager to nominate a reviewer outside the team"
                - "Put together the review pack of scoping note, tab map and checks"
                - "Log each finding with its resolution"
                - "Record the reviewer's sign-off on the cover sheet"
            - name: Model user guide for the client owner
              description: |-
                ## Purpose
                A model the client cannot update is abandoned within a quarter, and the engagement's numbers die with it. A short user guide covering what the model answers, how to update inputs, how to run scenarios, what the checks mean and what not to touch is the difference between a lasting tool and an attachment nobody opens.

                ## Milestones
                1. A guide of no more than six pages covering purpose, structure, update steps, scenarios, checks and limits.
                2. Screenshots of the inputs sheet and selector cell with annotations.
                3. A step-by-step monthly or annual update routine.
                4. The guide tested by a client user following it without help.

                ## Notes
                Ask the agent to draft the first version of the guide from your scoping note and tab map, then rewrite it in the client's terms.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A user guide of no more than six pages exists and a client user has followed it to complete an update without help."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the agent to draft a user guide from the scoping note and tab map"
                - "Add annotated screenshots of the inputs sheet and selector"
                - "Write the step-by-step update routine"
                - "Watch a client user follow the guide without help"
            - name: Model handover and training session
              description: |-
                ## Purpose
                Handover is often an email with the file attached on the last Friday, which is why consulting models rarely survive the team's departure. A planned handover, with a named client owner, a training session where they make a real update, and a short period where you answer questions, gives the client a model they can maintain.

                ## Milestones
                1. A named client owner agreed with the sponsor.
                2. A training session where the owner updates inputs and runs a scenario themselves.
                3. The final model, user guide and issues list handed over in the client's own storage.
                4. A support window agreed for questions after the team rolls off.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A named client owner has updated the model in a training session and holds the final model, user guide and issues list in their own storage."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the sponsor to name the client owner for the model"
                - "Plan a ninety-minute training session around a real update"
                - "Transfer the model, guide and issues list to the client's storage"
                - "Agree the support window and how questions reach you"
            - name: Close-out archive of the engagement model
              description: |-
                ## Purpose
                Six months later a partner asks how the team got to the savings number, and the answer is lost on a reimaged laptop. A close-out archive of the final model, the frozen versions used at each steering committee and the key source files, stored according to the firm's retention rules, protects the team and the firm.

                ## Milestones
                1. Final model and each steering committee frozen version stored together.
                2. A one-page note naming the headline outputs and the version they came from.
                3. Client data retained or deleted according to the engagement terms and firm policy.
                4. A sanitised copy of reusable structure offered to the firm's knowledge team, if allowed.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "The firm's archive holds the final and frozen model versions with a one-page note, and client data has been handled according to the engagement terms."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check the engagement terms for data retention and deletion"
                - "Store the final and frozen versions together in the archive"
                - "Write the one-page note of headline outputs and versions"
                - "Strip client data from a structural copy for the knowledge team, if allowed"
            - name: First engagement model as a new analyst
              description: |-
                ## Purpose
                New analysts are often handed a modelling task in week one with little more than a screenshot of the output the manager wants. Asking the right scoping questions, building a small first version in a day and showing it early, rather than disappearing for a week, is what makes the first impression in a consulting career.

                ## Milestones
                1. Scoping questions asked and answers written down on day one.
                2. A small first version with inputs, one calculation block and the output shown within two days.
                3. Feedback from the first review captured and applied.
                4. A list of the formulas and shortcuts you needed and did not know.

                ## Notes
                Show something rough early. Managers prefer a wrong first version on day two to a polished one on day six that answers the wrong question.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A first model version was shown to the manager within two days of the task, and feedback from that review is recorded and applied."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask your manager what question the model answers and who will see it"
                - "Build a one-tab first version by the end of the next day"
                - "Show it to your manager and write down every comment"
                - "List the formulas you had to look up and practise them"
            - name: Reviewing analysts' models as a manager
              description: |-
                ## Purpose
                Engagement managers are accountable for numbers they did not build, usually with twenty minutes to check a model before it goes out. A repeatable review method, starting from the outputs, testing the checks, sense-checking against known totals and sampling formulas, catches the material errors without rebuilding the file yourself.

                ## Milestones
                1. A twenty-minute review method written down in steps.
                2. Two or three known external totals identified for each model to sense-check against.
                3. Review comments returned in a consistent format with severity.
                4. Analysts briefed on the method so they pre-empt it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written twenty-minute model review method is used on every model before it leaves the team, and analysts have been briefed on it."
                cadence: rolling
              tasks:
                - "Write your review method as ten steps starting from the outputs"
                - "Pick two known totals each model should agree to"
                - "Agree a comment format with severity levels with your analysts"
                - "Run the review method on the live model before the weekly client send @recurring(weekly:thu)"
            - name: Modelling inside a locked-down client environment
              description: |-
                ## Purpose
                Some clients require all work on their own laptops, with an older Excel version, no add-ins, macros blocked and email attachments limited in size. Planning for those limits on day one, rather than discovering them when your firm's toolkit will not load, avoids rebuilding a model halfway through the engagement.

                ## Milestones
                1. The client's Excel version, add-in rules, macro policy and file size limits confirmed.
                2. Your starter workbook tested on the client's machine.
                3. Functions or tools that will not work listed with alternatives.
                4. A file transfer route agreed that complies with the client's rules.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written note records the client's Excel version, add-in and macro rules, file limits and the agreed file transfer route, and the starter workbook works on their machine."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the client IT contact for the Excel version and macro policy"
                - "Open your starter workbook on the client laptop and test it"
                - "List functions or add-ins that fail and their alternatives"
                - "Agree a compliant way to move files between environments"
            - name: Client models in a shared cloud spreadsheet
              description: |-
                ## Purpose
                Some clients, especially startups and public bodies, work in a shared cloud spreadsheet rather than desktop Excel, and expect the model to live there. Knowing which functions translate, how version history replaces your file naming, and how to protect ranges when twenty people have edit access keeps a consulting standard in a different tool.

                ## Milestones
                1. Functions in your standard checked for equivalents in the client's spreadsheet tool.
                2. Protected ranges set so only named people can edit formulas.
                3. Named versions used in version history in place of file names.
                4. The checks sheet and master flag working in the cloud version.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A client model in a shared cloud spreadsheet has protected formula ranges, named versions and a working master check."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List the functions your standard uses and test each in the client's tool"
                - "Set protected ranges on every formula block"
                - "Name the current version in the version history"
                - "Rebuild the master check and confirm it flags a test error"
            - name: Working with an offshore modelling team
              description: |-
                ## Purpose
                Many firms send model builds and refreshes to an offshore analytics or centre of excellence team working overnight. A clear brief with the scoping note, a tab map and a definition of done, plus a short daily handover in both directions, decides whether you wake up to a usable model or a day of rework.

                ## Milestones
                1. A written brief template with scope, tab map, standard and definition of done.
                2. A handover note sent at the end of your day with priorities for the overnight team.
                3. Returned work checked against the definition of done before use.
                4. Feedback sent each week so quality improves over the engagement.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every overnight request uses the brief template and every returned piece is checked against its definition of done, with weekly feedback sent."
                cadence: rolling
              tasks:
                - "Write a brief template with scope, tab map, standard and definition of done"
                - "Send the end-of-day handover note with tomorrow's priorities"
                - "Check returned work against the definition of done before using it"
                - "Send written feedback on quality to the offshore team lead @recurring(weekly:mon)"
            - name: Business case model with NPV and payback
              description: |-
                ## Purpose
                Investment recommendations need a business case model the client's finance team will accept: costs and benefits by year, a discount rate they set, NPV, payback and the sensitivities that matter. Building it to their conventions rather than yours, and agreeing the discount rate and tax treatment with them, avoids a model that is right but rejected.

                ## Milestones
                1. The client's hurdle rate, discount conventions and tax treatment confirmed with their finance team.
                2. Cost and benefit lines by year with clear phasing and one-off costs separated.
                3. NPV, payback and any internal rate of return calculated and cross-checked.
                4. A sensitivity on the three biggest drivers shown with the base case.

                ## Notes
                Discount rate and tax treatment are client finance decisions. Record who gave them and when on the inputs sheet.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A business case model shows NPV and payback using a discount rate and tax treatment confirmed by client finance, with sensitivity on the top three drivers."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask client finance for their hurdle rate and business case conventions"
                - "Lay out costs and benefits by year with one-off costs separate"
                - "Cross-check NPV with a manual discount factor calculation"
                - "Add sensitivities for the three biggest drivers"
            - name: Initiative benefits model with phasing
              description: |-
                ## Purpose
                Programmes with dozens of initiatives need a model that adds up benefits without double counting and phases them realistically by month or quarter. A model with one row per initiative, a ramp profile, overlap rules and a link to the baseline lets the client see when savings or growth will arrive, not just how much.

                ## Milestones
                1. One row per initiative with owner, baseline line, gross benefit and ramp profile.
                2. Overlap rules applied where initiatives touch the same cost or revenue line.
                3. Phased benefits by period reconciling to the gross total less overlaps.
                4. An output showing benefits by period and by owner.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An initiative model with ramp profiles and overlap rules produces phased benefits by period that reconcile to the gross total less agreed overlaps."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List initiatives with owner, baseline line and gross benefit"
                - "Define three or four standard ramp profiles"
                - "Write overlap rules for initiatives on the same line"
                - "Build a reconciliation from gross to phased benefits"
            - name: Driver-based market and revenue model
              description: |-
                ## Purpose
                Growth strategy work rests on a revenue model built from drivers the client can argue about: customers, penetration, frequency, price and share. A driver tree with top-down and bottom-up views reconciled to each other gives the steering committee a number they can test, rather than a growth rate typed into a cell.

                ## Milestones
                1. A driver tree drawn from revenue down to inputs the client can estimate.
                2. A bottom-up build from the drivers and a top-down view from market data.
                3. The gap between the two views explained or closed.
                4. Each driver's source recorded on the inputs sheet.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A revenue model built from a documented driver tree has top-down and bottom-up views within an agreed tolerance, or the gap is explained."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Draw the driver tree from revenue down to estimable inputs"
                - "Build the bottom-up calculation from the drivers"
                - "Build a top-down check from external market data"
                - "Write a note explaining the gap between the two"
            - name: Three-statement link for a client business plan
              description: |-
                ## Purpose
                Strategy recommendations sometimes need to show their effect on the client's income statement, balance sheet and cash flow, not just on profit. Linking operating drivers into three statements that balance, with working capital and capital spending modelled explicitly, lets the finance director see the cash consequences of the plan.

                ## Milestones
                1. Opening balance sheet taken from the client's latest accounts.
                2. Income statement, balance sheet and cash flow linked from operating drivers.
                3. The balance sheet balancing in every period, shown in the checks sheet.
                4. Cash flow reconciled to the movement in cash on the balance sheet.

                ## Notes
                This is a model of the client's plan, not financing or tax advice. Accounting treatments should come from the client's finance team.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A linked three-statement model balances in every period, with the balance and cash checks both passing on the checks sheet."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Take the opening balance sheet from the client's latest accounts"
                - "Link operating drivers into the income statement"
                - "Model working capital and capital spending explicitly"
                - "Add balance sheet and cash reconciliation checks"
            - name: Probabilistic ranges with Monte Carlo
              description: |-
                ## Purpose
                Single-point forecasts hide how uncertain a recommendation really is. Running a simple Monte Carlo simulation on four or five key inputs, using native Excel random functions or a recognised add-in, shows the client a range and the chance of hitting a target, which is often a better basis for an investment decision than three scenarios.

                ## Milestones
                1. Four or five inputs chosen with ranges agreed with their client owners.
                2. A simulation of at least a thousand runs producing a distribution of the headline output.
                3. The probability of meeting the client's target calculated.
                4. Results explained on one page with the limits of the method.

                ## Notes
                A simulation is only as good as its ranges and the correlations between inputs. Say so plainly on the output page.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A simulation of at least a thousand runs on agreed input ranges produces a distribution and probability of hitting target, explained on one page."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Choose the five inputs with the widest real uncertainty"
                - "Agree low, likely and high values with each client owner"
                - "Build the simulation with a data table over a run counter"
                - "Write one page on the result and its limits"
            - name: Macro use and documentation rules
              description: |-
                ## Purpose
                Short macros can save hours on refreshes and formatting, but an undocumented one is a liability the client cannot maintain and their IT may block. Writing rules for when macros are allowed, how they are documented and how the model works without them keeps automation from becoming the reason a model is abandoned.

                ## Milestones
                1. A rule for when a macro is justified over a formula or manual step.
                2. Every macro in the model listed with purpose, trigger and author.
                3. Comments in each macro explaining what it does in plain words.
                4. The model confirmed to calculate correctly with macros disabled.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every macro in the model is listed with its purpose and author, commented, and the model calculates correctly with macros disabled."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check the client's macro policy with their IT contact"
                - "List every macro in the model with purpose and trigger"
                - "Add plain comments to each macro"
                - "Open the model with macros disabled and run the checks"
            - name: Reusable model module library
              description: |-
                ## Purpose
                Experienced modellers rarely start from a blank sheet: they keep tested blocks for timelines, scenario switches, ramp profiles, checks and depreciation. A small personal library of these modules, each documented and stripped of client data, cuts the first week of any build and spreads good structure to the team.

                ## Milestones
                1. Eight to twelve modules identified from past models.
                2. Each module rebuilt in a clean file with no client data.
                3. A short note on inputs, outputs and limits for each module.
                4. Modules shared with your team or offered to the firm's knowledge base, if policy allows.

                ## Notes
                Never carry client data or client-identifiable structure between engagements. Rebuild modules from scratch with dummy numbers.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A library of at least eight documented modules, rebuilt with dummy data and free of client information, is ready to drop into new models."
                cadence: rolling
              tasks:
                - "List the calculation blocks you have rebuilt on more than one engagement"
                - "Rebuild one module in a clean file with dummy numbers"
                - "Write a short note on each module's inputs, outputs and limits"
                - "Add one new or improved module to the library @recurring(monthly:24)"
            - name: Model risk rating before high-stakes decisions
              description: |-
                ## Purpose
                Some engagement models drive decisions about plant closures, large investments or headcount, and a mistake there costs people and money. Rating a model's risk by the size of the decision, its complexity and how much it has been reviewed, and matching the review effort to that rating, puts the most checking where the consequences are greatest.

                ## Milestones
                1. A simple rating of low, medium or high based on decision size, complexity and novelty.
                2. Review requirements written for each rating level.
                3. The current model rated and the rating agreed with the engagement manager.
                4. The required reviews completed before the decision meeting.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The model has a recorded risk rating agreed with the engagement manager, and every review required for that rating was completed before the decision meeting."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the three rating criteria and review requirements per level"
                - "Rate the current model and note the reasons"
                - "Agree the rating with the engagement manager"
                - "Book the reviews the rating requires"
---

# Consulting Excel Modelling

This area is for the consultant who has to build, change and defend the spreadsheet behind an engagement's numbers, and then leave it with a client who never saw it being built. It starts with foundations (a modelling standard, a fast Excel set-up, a scoping note, the tab map, inputs, timeline, checks and version control), moves to the routines that keep a live model honest, then the formula and scenario skills, decisions about tools, granularity and structure, the dated moments such as the first client walkthrough, the numbers freeze and the handover, variants for new analysts, reviewing managers and awkward client environments, and specialist builds such as business cases, benefits phasing and probabilistic ranges.

What repeats is a daily change log entry while the model is live, a weekly review with the engagement manager and a weekly version archive, a monthly input refresh when client data lands, a fortnightly shortcut drill and a quarterly look back at the errors that reached a client. The **Operational checklist**, **Meeting notes**, **Risk register** and **Skills matrix** templates pair with the pre-send checks, client walkthroughs, the model issues list and your formula skills. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
