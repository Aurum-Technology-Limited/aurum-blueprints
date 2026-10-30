---
id: management-consulting.deliverable-quality-control
name: Deliverable Quality Control
description: "A checking routine for consulting work before the client sees it: numbers tied to sources, consistent pages, fact checks, confidentiality sweeps, a final read-through and a recorded sign-off."
category: business
version: 1.0.0
tags: [management-consulting, deliverable-quality-control, knowledge-worker, team, quality-control, proofreading, fact-checking, sign-off]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - metrics-log
    - purchase-decision
    - feedback-themes
    - onboarding-plan
  pillars:
    - name: Management Consulting
      emoji: "📋"
      description: "Consulting as a craft and a business: case interviews and getting hired, structuring problems with issue trees, hypothesis-driven workplans, client interviews, slides and steering committees, the career from analyst to partner, and going independent or building a boutique firm with sensible pricing."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Deliverable Quality Control
          description: "Checking work before a client sees it: numbers tied to sources, consistent pages, fact checks, a final read-through and a sign-off routine."
          projects:
            - name: Error baseline from your last three deliverables
              description: |-
                ## Purpose
                Before building a checking routine, find out which mistakes you actually make. Going back through the comments, redlines and client corrections on your last three decks or reports usually shows that most errors fall into four or five repeat types, such as totals that do not add, inconsistent units or titles that no longer match the chart.

                ## Milestones
                1. Comments and corrections from three recent deliverables gathered in one place, with client details removed.
                2. Every error sorted into a type: numbers, consistency, wording, formatting, sourcing or confidentiality.
                3. A count per type, showing which two or three types account for most errors.
                4. The stage at which each error was caught noted: by you, a colleague, the manager or the client.

                ## Notes
                Keep the sanitised list inside the firm's systems. The point is the pattern, not the specific numbers.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A sanitised list of errors from three past deliverables exists, sorted by type and by who caught them, with your top three error types named."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pick three recent deliverables that went through several rounds of comments"
                - "List every correction made to them, with client details stripped out"
                - "Sort each correction into an error type and count the types"
                - "Note who caught each error and at which stage"
            - name: Personal pre-send checklist for client documents
              description: |-
                ## Purpose
                Relying on memory at eleven at night is how a draft goes out with tracked changes still visible. A one-page checklist, built from your own error baseline and kept short enough to run in fifteen minutes, turns the final check into a routine instead of a hope.

                ## Milestones
                1. A checklist of no more than 20 items, grouped into numbers, pages, words and file.
                2. Your top three error types from the baseline each covered by at least one item.
                3. The checklist used on the next two documents you send and timed.
                4. Items that never catch anything removed and anything missed added.

                ## Notes
                Start from the **Operational checklist** template. A checklist that takes an hour will be skipped under deadline pressure, so cut ruthlessly.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A checklist of 20 items or fewer is saved where you work, has been used on two real documents and edited once from that use."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft the checklist from your three most common error types"
                - "Add the file checks: comments, tracked changes, hidden slides and file name"
                - "Run the checklist on the next document you send and time it"
                - "Review the checklist against the errors you made last quarter @recurring(quarterly)"
            - name: Source tagging convention for every number
              description: |-
                ## Purpose
                When a partner asks where a figure came from, the answer should take seconds, not an hour of searching through models and emails. A simple convention, where every number on a page carries a source note or a cell reference in the speaker notes, makes tie-outs fast and protects you when a client challenges a figure.

                ## Milestones
                1. A written convention for source lines, footnotes and model references, agreed with your manager.
                2. A short code for each main source, such as the model tab, the client data file or the interview log.
                3. The convention applied to every number on one live section of the deck.
                4. A colleague able to trace three random numbers back to source using only the tags.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written tagging convention exists, one deck section is fully tagged, and a colleague traced three random numbers to source without asking you."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a one-paragraph tagging rule for source lines and speaker notes"
                - "Agree short codes for the model, data files and interview notes"
                - "Tag every number on one section of the current deck"
                - "Ask a colleague to trace three numbers using only the tags"
            - name: Version naming and final folder rules
              description: |-
                ## Purpose
                Teams send the wrong file more often than they send a wrong number: the v7 instead of v9, or the draft with internal comments. A naming rule, a single folder for client-ready files and a habit of clearing out superseded drafts makes it hard to attach the wrong version.

                ## Milestones
                1. A naming pattern agreed for the team, including date, version and status such as draft or client-ready.
                2. One folder set aside for files that have passed the pre-send check, and nothing else.
                3. Old versions moved to an archive folder so the working folder holds only current files.
                4. The rule written at the top of the engagement's shared drive.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A naming rule and a client-ready folder exist on the engagement drive, and the working folder holds only current versions."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Propose a file naming pattern to the team in one message"
                - "Create a client-ready folder that only checked files go into"
                - "Move superseded drafts into an archive folder"
                - "Clear out superseded versions from the working folder @recurring(monthly:3)"
            - name: Formatting standards crib sheet
              description: |-
                ## Purpose
                Firm templates and client brand guides run to dozens of pages that nobody reads at the moment of building a slide. A one-page crib sheet with the rules that actually get broken, such as title length, font sizes, colour for highlights, number formats and footnote style, lets anyone on the team check a page in seconds.

                ## Milestones
                1. The firm template and any client brand rules read once and the 15 most broken rules picked out.
                2. Number formats settled: decimals, thousands separators, currency symbols and how negatives show.
                3. A one-page crib sheet with an example of a correct page.
                4. The sheet shared with the team and pinned in the engagement channel.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page formatting crib sheet with number format rules and an example page is shared with the whole team."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Skim the firm template guide and note the rules most often broken"
                - "Decide the number formats for currency, percentages and negatives"
                - "Build one example page that follows every rule"
                - "Share the crib sheet with the team and pin it in the channel"
            - name: Checking roles agreed at engagement start
              description: |-
                ## Purpose
                On most teams everyone assumes someone else checked the numbers. Agreeing in week one who owns tie-outs for each section, who does the final read and who signs off before anything goes to the client removes the gap, and costs one fifteen-minute conversation.

                ## Milestones
                1. Each section or workstream assigned an owner for its numbers and a second checker.
                2. One person named for the final full read of each client deliverable.
                3. The sign-off person and the lead time they need agreed with the manager.
                4. The roles written into the engagement plan or team charter.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The engagement plan names a numbers owner, a second checker, a final reader and a sign-off person, with the lead time each needs."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the manager for fifteen minutes to agree checking roles"
                - "List each section and name its numbers owner and second checker"
                - "Agree who does the final read and how many hours they need"
                - "Write the roles into the team charter or engagement plan"
            - name: Error severity scale for client work
              description: |-
                ## Purpose
                A typo in a backup page and a wrong savings number on the executive summary are not the same problem, but under pressure teams treat them alike. A three or four level severity scale tells everyone what must be fixed before sending, what can wait for the next version and what needs the manager told at once.

                ## Milestones
                1. A severity scale with three or four levels, each with two real examples.
                2. A rule for each level: fix before send, fix next version or escalate now.
                3. The scale agreed with the manager and used to label items in the error log.
                4. The scale applied to the errors in your baseline as a test.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written severity scale with examples and a rule per level is agreed with the manager and has been applied to past errors."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Draft three or four severity levels with an example for each"
                - "Write the action rule for each level"
                - "Label the errors from your baseline using the scale"
                - "Agree the scale with your manager"
            - name: Proofreading set-up for screens and print
              description: |-
                ## Purpose
                Eyes skim on screen, especially on a file you have looked at for three weeks. Setting up a few aids in advance, such as a read-aloud tool, a spelling dictionary with client terms, a print-friendly view and a habit of checking at a different zoom, catches errors your normal view hides.

                ## Milestones
                1. Spell check language set correctly for the client, with client names and terms added to the dictionary.
                2. A read-aloud or text-to-speech option found and tested on a page.
                3. A print or PDF view checked for cut-off text, hidden objects and colour that disappears in greyscale.
                4. The set-up written as three lines at the bottom of your pre-send checklist.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Spell check language and client terms are set, a read-aloud tool works, and a print check is part of your pre-send checklist."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Set the spell check language to match the client's spelling"
                - "Add client names, product names and acronyms to the dictionary"
                - "Test a read-aloud tool on one dense page"
                - "Print one page in greyscale and check what disappears"
            - name: Confidentiality sweep before files leave the firm
              description: |-
                ## Purpose
                The most damaging errors are not wrong numbers but another client's name in a reused chart, internal comments in speaker notes, or file properties that show a previous engagement. A fixed sweep of notes, comments, hidden slides, embedded files and document properties before every external send protects the client, the firm and you.

                ## Milestones
                1. A sweep list covering speaker notes, comments, hidden slides, embedded spreadsheets, document properties and file history.
                2. Any reused page from past work checked for previous client names, logos and figures.
                3. Embedded charts confirmed not to carry the full source workbook inside the file.
                4. The sweep added as a required step before anything goes into the client-ready folder.

                ## Notes
                Follow the firm's own confidentiality policy where it is stricter. When in doubt about reused material, ask the manager before sending, not after.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A written confidentiality sweep list exists and has been run on the next two external files, with each run noted in the sign-off record."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Open the current deck and inspect its document properties and notes"
                - "Write the sweep list in the order you will run it"
                - "Check every reused page for other client names and logos"
                - "Confirm embedded charts do not carry the whole source workbook"
            - name: Daily tie-out of pages you changed
              description: |-
                ## Purpose
                Errors creep in when a model refresh moves a number and three pages quote the old one. Spending ten minutes at the end of each working day tying out only the pages you touched keeps the deck honest and stops a three-hour reconciliation the night before a readout.

                ## Milestones
                1. A habit of noting which pages you changed during the day.
                2. Each changed number checked against its tagged source before you log off.
                3. Mismatches fixed or flagged to the owner the same day.
                4. Two weeks of daily tie-outs done with a short note of what each caught.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "On at least 8 of 10 working days in a fortnight, every page you changed was tied out before you finished, with catches noted."
                cadence: rolling
              tasks:
                - "Start a running list of pages you change today"
                - "Tie out the numbers on today's changed pages before logging off @recurring(daily)"
                - "Flag any mismatch to the page owner the same evening"
                - "Note what the tie-out caught at the end of each week"
            - name: Weekly consistency sweep of the working deck
              description: |-
                ## Purpose
                Decks written by four people drift: the same metric shows as 12.4% on one page and 12% on another, a market is called a segment, and units change between charts. A weekly sweep that reads across pages rather than down them catches the drift while it is still cheap to fix.

                ## Milestones
                1. A list of the deck's key numbers, terms and units that must match everywhere.
                2. A weekly read across all pages checking those items only.
                3. Inconsistencies logged with page numbers and sent to owners.
                4. Four weekly sweeps done with the number of issues falling over the month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four weekly consistency sweeps are logged in a month, each listing issues by page, with fewer issues in the fourth than the first."
                cadence: rolling
              tasks:
                - "List the ten numbers and terms that appear on several pages"
                - "Read the whole deck for consistency of those items only @recurring(weekly:thu)"
                - "Send each owner the inconsistencies on their pages"
                - "Compare this week's issue count with last week's"
            - name: Pre-send gate for anything leaving the team
              description: |-
                ## Purpose
                Pre-reads, interim updates and quick replies to client questions leave the team far more often than final reports, and they are where most errors escape. A short gate, where nothing goes to a client until the checklist and confidentiality sweep are done and a second person has looked, applies the same standard to a one-page email attachment as to the final deck.

                ## Milestones
                1. The team agreed that every client-bound file passes the gate, whatever its size.
                2. A minimum check defined for small items, such as a one-page update, and a full check for decks and reports.
                3. A named back-up checker for times when the usual one is unavailable.
                4. A month of client sends with every one passing through the gate.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For one month, every file sent to the client has a gate entry showing the checklist, the sweep and the second checker's name."
                cadence: rolling
              tasks:
                - "Agree with the team that every client-bound file passes the gate"
                - "Define the minimum check for one-page items and the full check for decks"
                - "Name a back-up checker for each week"
                - "Record each send and its checker in the sign-off record"
            - name: Error log and monthly root cause review
              description: |-
                ## Purpose
                Fixing an error once is not the same as stopping it happening again. Logging every error caught after your own check, with its type, severity and cause, and reviewing the log monthly turns individual slips into changes to the checklist, the template or the way the team works.

                ## Milestones
                1. An error log with columns for date, deliverable, type, severity, who caught it and cause.
                2. Every error caught after your own check logged within a day.
                3. A monthly review that names the top cause and one change to prevent it.
                4. A quarterly look at whether the changes reduced repeat errors.

                ## Notes
                Start from the **Metrics log** template. Log the cause in plain words, such as "pasted value not updated after model change", not "human error".
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The error log has entries for every month and each monthly review records one named cause and one change made."
                cadence: rolling
              tasks:
                - "Set up the error log with type, severity, catcher and cause columns"
                - "Log each error caught after your own check within a day"
                - "Review the log and pick one cause to fix @recurring(monthly:9)"
                - "Check whether last quarter's fixes cut repeat errors @recurring(quarterly)"
            - name: Fact-check tracker for claims and quotes
              description: |-
                ## Purpose
                Statements such as "the largest player in the region", a quote from an interviewee or a regulation's effective date get written early and never checked again. A tracker of every factual claim in the deck, with its evidence and the date checked, means each claim is either backed or softened before the client reads it.

                ## Milestones
                1. Every factual claim, superlative and quote in the deck listed with its page number.
                2. Each claim matched to evidence: a source document, data, an interview note or nothing.
                3. Claims without evidence reworded, softened or removed.
                4. Quotes checked against interview notes and anonymised as agreed with the client.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A tracker lists every claim and quote in the current deck with its evidence and check date, and no unsupported claim remains."
                cadence: rolling
              tasks:
                - "List every superlative and factual claim in the current deck"
                - "Match each claim to its source or mark it unsupported"
                - "Check new claims added to the deck against their evidence @recurring(weekly:tue)"
                - "Confirm every quote matches the interview notes and is anonymised"
            - name: Cross-workstream numbers reconciliation
              description: |-
                ## Purpose
                When the cost workstream and the revenue workstream each use a different headcount or a different baseline year, the final deck contradicts itself and the client notices first. A short weekly reconciliation of the shared numbers across workstreams catches the split before it reaches a steering committee pack.

                ## Milestones
                1. A list of shared figures used by more than one workstream, such as baseline revenue, headcount and the base year.
                2. One agreed value and source for each shared figure.
                3. A weekly fifteen-minute reconciliation call or message thread between workstream leads.
                4. No contradictions in shared figures in the last interim deck.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A shared figures list with one agreed value and source each is kept current, and the latest interim deck has no contradictions in those figures."
                cadence: rolling
              tasks:
                - "List the figures that more than one workstream uses"
                - "Agree one value and source for each with the workstream leads"
                - "Run the shared figures reconciliation with the other leads @recurring(weekly:wed)"
                - "Check the latest interim deck for contradictions in shared figures"
            - name: Weekly peer review swap
              description: |-
                ## Purpose
                Authors cannot see their own mistakes because they read what they meant to write. Swapping a section with a colleague each week, with a fixed thirty minutes and a short list of what to check, catches errors earlier and spreads good habits across the team.

                ## Milestones
                1. A peer agreed for a weekly swap, with a fixed slot in both calendars.
                2. A short list of what to check in each other's pages, so the review stays focused.
                3. Comments returned in a consistent format the same day.
                4. Common comment themes collected after a month and shared back.

                ## Notes
                Start from the **Feedback themes** template to collect what the swaps keep finding.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four weekly swaps are completed in a month with comments returned the same day, and a list of recurring themes is shared with the team."
                cadence: rolling
              tasks:
                - "Ask a colleague to swap one section a week with you"
                - "Agree a five-point list of what to check in each other's pages"
                - "Swap one section and return comments the same day @recurring(weekly:fri)"
                - "Collect the comment themes after four swaps"
            - name: Footnote and source line upkeep
              description: |-
                ## Purpose
                Source lines go stale when the data is refreshed and nobody updates the year, or when a chart is rebuilt and the footnote stays from the old version. Keeping footnotes, source lines and the definitions page current every week avoids a long clean-up just before the final send.

                ## Milestones
                1. Every chart and table with a source line that names the source and the data date.
                2. A definitions or glossary page that covers every abbreviation used.
                3. Footnote numbering checked so it runs in order on every page.
                4. A weekly ten-minute check of source lines on pages changed that week.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every chart in the current deck has a dated source line, footnotes run in order, and every abbreviation appears on the definitions page."
                cadence: rolling
              tasks:
                - "Find charts and tables in the current deck with no source line"
                - "Build a definitions page for every abbreviation used"
                - "Check source lines and footnotes on this week's changed pages @recurring(weekly:mon)"
                - "Renumber footnotes that are out of order"
            - name: Sign-off record for each client release
              description: |-
                ## Purpose
                If a client later disputes a figure, it helps to know exactly what was sent, when, who checked it and who approved it. A simple sign-off record for every release, kept alongside the client-ready folder, gives the team that answer in seconds and makes skipped checks visible.

                ## Milestones
                1. A record with columns for file name, date sent, recipients, checker, approver and checks run.
                2. Every client release since the start of the engagement entered.
                3. The manager or partner approval captured in writing, even as a one-line message.
                4. A monthly look at the record for releases missing a checker or approver.
              priority: high
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every client release in the engagement has a sign-off record entry naming the checker and approver, and monthly reviews find no gaps."
                cadence: rolling
              tasks:
                - "Create the sign-off record next to the client-ready folder"
                - "Enter every release sent to the client so far"
                - "Ask for written approval in one line before each send"
                - "Check the record for releases missing a checker or approver @recurring(monthly:27)"
            - name: Template and master slide hygiene check
              description: |-
                ## Purpose
                Many formatting errors start in the template: a master slide with the wrong font, a colour palette someone edited, or placeholder text left in a layout. A monthly check of the engagement template and the shared page library stops the same fault being copied onto every new page.

                ## Milestones
                1. The engagement template compared with the firm's current master once.
                2. Stray layouts, edited colours and leftover placeholder text removed.
                3. A shared page library of standard layouts cleaned and checked.
                4. A monthly hygiene check scheduled and done twice.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The engagement template matches the firm master, the page library has no placeholder text, and two monthly checks are recorded."
                cadence: rolling
              tasks:
                - "Compare the engagement template's masters with the firm's current version"
                - "Delete unused layouts and leftover placeholder text"
                - "Check the template and shared page library for drift @recurring(monthly:14)"
                - "Tell the team where the clean template lives"
            - name: Tying slide numbers back to the model
              description: |-
                ## Purpose
                Most consulting numbers start in a spreadsheet and end up typed or pasted onto a slide, and the gap between the two is where errors live. Practising a fast, repeatable tie-out, where you trace a page's numbers to model cells and back, makes checking a twenty-page section a one-hour job instead of an afternoon.

                ## Milestones
                1. A tie-out method written down: print or mark the page, trace each number, tick or flag.
                2. One full section tied out with every number ticked or flagged.
                3. The time per page measured and improved over three sections.
                4. Rounding rules applied consistently so model and page match exactly.

                ## Notes
                Ticking a printed page or a PDF copy with a highlighter is still the most reliable method most teams use. Model building itself belongs with the Excel modelling area.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three deck sections have been fully tied out to the model, with time per page recorded and falling across the three."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write a five-step tie-out method on one page"
                - "Tie out one section of the current deck and time it"
                - "Repeat on two more sections and compare the time per page"
                - "Note the rounding rule each page should follow"
            - name: Totals, rounding and percentages that add up
              description: |-
                ## Purpose
                Waterfalls that do not reach their end bar, a pie that sums to 101% or a growth rate quoted on a rounded base are the errors senior clients spot first. Learning the common traps, and a way to show rounding honestly, prevents the most embarrassing kind of mistake.

                ## Milestones
                1. The common traps listed: rounding totals, percentage points versus percent, compound versus simple growth and mixed bases.
                2. A rule chosen for showing rounded figures, such as a footnote that totals may not add.
                3. Every waterfall, stacked bar and pie in one deck checked to add exactly or carry the footnote.
                4. Five worked examples of these traps kept for teaching others.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every total, waterfall and pie in one live deck either adds exactly or carries a rounding note, and five worked examples are saved."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List the arithmetic traps you have seen in past decks"
                - "Choose a rounding note and a rule for when to use it"
                - "Check every waterfall, stacked bar and pie in the current deck"
                - "Save five worked examples of the traps for teaching others"
            - name: Proofreading in separate passes
              description: |-
                ## Purpose
                Reading for everything at once catches little. Professional proofreaders read in passes, each looking for one thing, such as numbers only, titles only, then spelling and grammar, then layout. Practising this method on real decks finds more errors in less time.

                ## Milestones
                1. A pass order written down, with what each pass looks for.
                2. The method used on three documents and the catches per pass counted.
                3. Passes that catch the most moved to the front when time is short.
                4. A weekly drill on a short document to keep the habit.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Three documents have been proofread in passes, with catches counted per pass and the pass order revised from those counts."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write a pass order: numbers, titles, words, layout"
                - "Proofread the next document in separate passes and count catches"
                - "Do a one-pass drill on a short document @recurring(weekly:tue)"
                - "Reorder the passes so the most productive ones come first"
            - name: Chart integrity checks
              description: |-
                ## Purpose
                Truncated axes, dual axes that suggest a link, or bars scaled differently on two pages can mislead a client even when every number is right. Learning a short chart check, covering axes, scales, labels, units, legends and sort order, protects both accuracy and trust.

                ## Milestones
                1. A chart check list of eight to ten points covering axes, scale, labels, units, legends, colours and sort order.
                2. Every chart in one deck checked against the list.
                3. Charts that compare across pages set to the same scale or clearly marked.
                4. A monthly review of a few charts from a published report to practise the eye.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A chart check list exists and every chart in one live deck has been checked, with fixes made to any misleading axis or scale."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write a ten-point chart check list"
                - "Check every chart in the current deck against the list"
                - "Match scales on charts that are compared across pages"
                - "Critique three charts from a published report against the list @recurring(monthly:18)"
            - name: Consistent terms, units and currencies
              description: |-
                ## Purpose
                Clients run on their own vocabulary, and a deck that calls the same thing a branch, a store and an outlet reads as careless. Fixing a short glossary of the client's terms, the units in use and the currency and year basis means every author writes the same way.

                ## Milestones
                1. A glossary of the client's preferred terms, with the words to avoid.
                2. Units and currency rules settled, including real or nominal values and the base year.
                3. A find-and-check run on the deck for the words to avoid.
                4. The glossary shared and added to the formatting crib sheet.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A client glossary with units and currency rules is shared, and the current deck has no instances of the words to avoid."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the client's own words for its units, products and people"
                - "Settle the currency, year basis and units for the deck"
                - "Search the deck for the words to avoid and fix each one"
                - "Add the glossary to the formatting crib sheet"
            - name: Pasted and linked model outputs check
              description: |-
                ## Purpose
                Charts pasted as pictures, linked objects pointing at a file on someone's laptop, and tables typed in by hand all go stale differently. Learning how each kind of paste behaves, and how to check which one you are looking at, tells you which pages need re-checking after every model change.

                ## Milestones
                1. Every model-driven object in one deck classified as picture, linked object, embedded object or typed.
                2. Broken or local file links found and fixed.
                3. A list of pages that must be refreshed after each model change.
                4. The list kept next to the model version log.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every model-driven object in one deck is classified, broken links are fixed and a refresh list of pages exists next to the model log."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Open the links dialog in the deck and list every linked source"
                - "Classify each model-driven object as picture, link, embed or typed"
                - "Fix links pointing at local or moved files"
                - "Write the list of pages to refresh after a model change"
            - name: Reviewing a colleague's pages with useful comments
              description: |-
                ## Purpose
                Vague comments such as "check" or "?" waste the author's time and hide the errors that matter. Learning to comment with the problem, the evidence and a suggested fix, marked by severity, makes reviews faster to act on and builds trust in the team.

                ## Milestones
                1. A comment format agreed: what is wrong, where, why and a suggested fix.
                2. Severity labels from the team scale used on every comment.
                3. One full review done in the format and the author asked how usable it was.
                4. Comments on style kept separate from comments on accuracy.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A full review of a colleague's section uses the agreed comment format with severity labels, and the author confirmed it was faster to act on."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a three-part comment format: problem, evidence, fix"
                - "Review one colleague's section using the format and severity labels"
                - "Ask the author which comments were hardest to act on"
                - "Separate accuracy comments from style comments in your next review"
            - name: Checking external data and public sources
              description: |-
                ## Purpose
                Market figures from a trade association, a statistics office or a news article often get copied from secondary sources with the wrong year or unit. Learning to trace a public figure to its original publication and note the date and definition prevents a client from finding a better source than yours.

                ## Milestones
                1. Every external figure in one deck traced to its original publication where possible.
                2. Year, unit and definition of each figure written in the source line.
                3. Figures that could not be traced replaced or marked as estimates.
                4. A short list of trusted original sources for the client's sector.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every external figure in one deck is traced to an original source with year and definition, or marked as an estimate."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List every external figure in the current deck"
                - "Trace each one to its original publication"
                - "Write the year, unit and definition into each source line"
                - "Build a list of trusted original sources for the sector"
            - name: Choosing a deck checking tool or add-in
              description: |-
                ## Purpose
                Several presentation add-ins check fonts, alignment, spelling and broken links across a whole deck in seconds, and some firms already license one that nobody uses. Comparing what is available against your top error types decides whether a tool would save real time or just add another step.

                ## Milestones
                1. The firm's licensed tools checked first with IT or the document team.
                2. Two or three options compared against your top error types and data security rules.
                3. One tool trialled on a real deck and the catches counted.
                4. A decision recorded: adopt, request a licence or stay with the manual checklist.

                ## Notes
                Start from the **Purchase decision** template. Any tool must meet the firm's rules on client data; never upload a client file to an unapproved online checker.
              priority: low
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on a checking tool exists, based on a trial on a real deck that counted what the tool caught."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask IT or the document team which checking tools the firm licenses"
                - "Compare two or three options against your top error types"
                - "Trial one tool on a real deck and count its catches"
                - "Record the decision and the reasons in the team notes"
            - name: Live links versus pasted values decision
              description: |-
                ## Purpose
                Linking slides to the model keeps numbers current but breaks when files move and can carry sensitive data inside the deck; pasted values are safe but go stale. Deciding once per engagement which approach the team uses, and when to switch from linked to frozen, avoids a mix that nobody can check.

                ## Milestones
                1. The risks of each approach written in a short table for this engagement.
                2. One approach chosen for working drafts and one for client releases.
                3. A freeze step defined: when links are broken and values pasted before release.
                4. The decision written into the team's working rules.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The team's working rules state whether drafts link or paste, and the freeze step before client release is written down."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a short table of the risks of linking and of pasting"
                - "Agree one approach for drafts and one for client releases"
                - "Define when links are frozen before a release"
                - "Add the decision to the team's working rules"
            - name: Change freeze rule before big readouts
              description: |-
                ## Purpose
                Late changes cause most of the errors that reach a client, because the last edit is the one nobody checks. Agreeing a freeze point before major readouts, after which only named people can change the document and only for severe issues, gives the final read a stable file to check.

                ## Milestones
                1. A freeze point agreed with the manager, such as 24 hours before a readout.
                2. A rule for what can change after the freeze and who approves it.
                3. Every post-freeze change logged and checked by a second person.
                4. The rule used on one readout and reviewed afterwards.

                ## Notes
                Partners will still ask for late changes. The rule is not a refusal; it makes sure late changes get checked.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written freeze rule has been used on one readout, with every post-freeze change logged and checked by a second person."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Propose a freeze point to the manager for the next readout"
                - "Write what can change after the freeze and who approves it"
                - "Log every post-freeze change with its checker"
                - "Review how the freeze worked after the readout"
            - name: Team quality checklist by deliverable type
              description: |-
                ## Purpose
                Steering committee packs, Excel models handed to the client and written reports fail in different ways, so one generic checklist misses things. A short team checklist for each deliverable type, built from everyone's error logs, gives a shared standard new joiners can pick up in a day.

                ## Milestones
                1. The deliverable types the team produces listed, such as decks, reports, models and one-page updates.
                2. A checklist of 10 to 20 items for each type, drawn from the team's errors.
                3. Each checklist trialled on one real deliverable.
                4. The checklists stored in one place and linked from the engagement plan.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A checklist for each main deliverable type exists, each trialled once, and all are linked from the engagement plan."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the deliverable types the team produces"
                - "Ask the agent to draft a first checklist per type from the team's error log"
                - "Trial each checklist on one real deliverable"
                - "Link the final checklists from the engagement plan"
            - name: Independent check rule for high-stakes numbers
              description: |-
                ## Purpose
                Some numbers carry the whole recommendation: the savings figure, the market size, the valuation range. A rule that these headline figures are rebuilt or checked by someone who did not produce them, not just re-read, gives the partner confidence to stand behind them in front of a board.

                ## Milestones
                1. The headline numbers in the current deliverable listed, usually five to ten.
                2. An independent checker named for each who did not build it.
                3. Each headline number rebuilt or re-derived from source and the result recorded.
                4. Any difference resolved and explained before the number goes to the client.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every headline number in the current deliverable has been independently re-derived, with the checker's name and result recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the five to ten numbers the recommendation rests on"
                - "Name a checker for each who did not build it"
                - "Record each checker's re-derived result beside the original"
                - "Resolve every difference before the number goes to the client"
            - name: Working well with the document production team
              description: |-
                ## Purpose
                Many firms have a production or graphics team that formats pages overnight, but vague briefs come back wrong and new errors get introduced in the rework. Learning how to brief them precisely, with marked-up pages, deadlines and what must not change, saves rework and keeps numbers safe.

                ## Milestones
                1. The production team's request process, turnaround times and cut-off times written down.
                2. A brief format with marked-up pages and a list of numbers that must not change.
                3. Returned pages tied out against the original before they replace it.
                4. Turnaround and rework on three requests noted and compared.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Three production requests have used the brief format, with returned pages tied out and rework counts noted."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Find the production team's request process and cut-off times"
                - "Write a brief format with marked-up pages and locked numbers"
                - "Tie out returned pages against the original before replacing it"
                - "Note turnaround and rework for each of three requests"
            - name: Print, PDF and accessibility readiness
              description: |-
                ## Purpose
                Clients often print the pre-read or forward a PDF to people reading on a phone, and colours, small fonts and animations that worked on screen fall apart. A readiness check for print, PDF and basic accessibility, such as contrast, alt text on key charts and reading order, makes the deliverable work for every reader.

                ## Milestones
                1. A PDF export checked for fonts, cut-off text and file size.
                2. Pages printed in greyscale to check that colour-coded messages still read.
                3. Contrast and minimum font size checked on every page.
                4. Alt text added to the main charts where the client distributes widely.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The latest deliverable has a checked PDF, passes a greyscale print test and meets the team's minimum font and contrast rule."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Export the deck to PDF and check fonts and file size"
                - "Print three colour-coded pages in greyscale"
                - "Check every page against a minimum font size"
                - "Add alt text to the main charts"
            - name: Quality pass on a steering committee pre-read
              description: |-
                ## Purpose
                A pre-read sent 48 hours before a steering committee will be read closely by people looking for problems, often printed and annotated. A dedicated quality pass with time blocked in advance, rather than squeezed in after the last partner comments, makes sure the pack the committee reads is right.

                ## Milestones
                1. Time blocked for the full check before the send deadline, with a buffer for fixes.
                2. Tie-out, consistency, fact check and confidentiality sweep all completed.
                3. Headline numbers independently checked.
                4. The pre-read sent on time with an entry in the sign-off record.

                ## Notes
                The meeting itself and pre-wiring stakeholders belong with the steering committee area; this project covers the accuracy of the pack only.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The steering committee pre-read was sent on time with every check completed and a sign-off record entry."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Block time for the full check before the pre-read deadline"
                - "Run the tie-out, consistency sweep and fact check on the pack"
                - "Have the headline numbers checked independently"
                - "Enter the release in the sign-off record"
            - name: Full quality review of the final report
              description: |-
                ## Purpose
                The final report is the document the client keeps, forwards to its board and pulls out a year later. A full review, planned a week ahead with checkers for each section, the complete tie-out and a fresh read by someone outside the team, gives it the care that its long life deserves.

                ## Milestones
                1. A review plan with sections, checkers and dates, starting at least five working days before handover.
                2. Every number tied out and every claim in the fact-check tracker cleared.
                3. A cold read by someone outside the team, with comments resolved.
                4. Final approval recorded and the file stored in the client-ready folder.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "The final report passed a planned review with full tie-out, cleared fact checks and a cold read, and approval is recorded."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Draft the review plan with sections, checkers and dates"
                - "Ask someone outside the team to do a cold read"
                - "Clear every open item in the fact-check tracker"
                - "Record the final approval and file the report in the client-ready folder"
            - name: Handling a round of client redlines
              description: |-
                ## Purpose
                Client redlines come back as a marked-up draft, and the risk is that fixes go in unevenly, a comment gets missed, or a change on one page breaks a number on another. Tracking every client comment to a resolution, and checking knock-on effects, closes the round cleanly and shows the client their comments were heard.

                ## Milestones
                1. Every client comment numbered in a tracker with page, owner and response.
                2. Each comment marked accepted, partly accepted or declined with a reason.
                3. Pages that depend on changed numbers re-checked for knock-on effects.
                4. A short response note sent with the revised version, listing how each comment was handled.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every client comment in one redline round has a recorded resolution, knock-on pages are re-checked, and a response note went with the revision."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Number every client comment in a tracker with page and owner"
                - "Mark each comment accepted, partly accepted or declined"
                - "Re-check pages affected by changed numbers"
                - "Send the revised version with a response note"
            - name: Translated deliverable quality check
              description: |-
                ## Purpose
                Engagements across languages often need a deck or report translated, and translation brings new risks: decimal separators that flip, text that overflows boxes, and technical terms rendered differently on each page. A specific check for translated versions keeps the second language as accurate as the first.

                ## Milestones
                1. A term list agreed with the translator before translation starts.
                2. Number and date formats checked for the target language's conventions.
                3. Every page checked for overflowing text and broken layouts.
                4. A native speaker on the team or client side asked to read the key pages.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A translated deliverable was checked against an agreed term list, number formats and layout, and key pages were read by a native speaker."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Send the translator a term list before work starts"
                - "Check number, currency and date formats in the translated file"
                - "Page through the translation for overflowing text"
                - "Ask a native speaker to read the executive summary and key pages"
            - name: Review after an error reached the client
              description: |-
                ## Purpose
                Sooner or later a wrong number reaches a client. Handling it well, by telling the manager at once, correcting it cleanly with a short note and then reviewing how it slipped through, protects the relationship and is how a team's checking routine actually improves.

                ## Milestones
                1. The manager told the same day, with the error, its impact and a proposed correction.
                2. A corrected version sent to the client with a brief, factual note agreed with the manager.
                3. A blameless review that traces where the error came from and which check missed it.
                4. One change to the checklist or process made and logged.

                ## Notes
                Never quietly swap a file the client already has. A short, honest correction keeps trust; a silent change found later loses it.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "After a client-facing error, a correction note was sent, a blameless review was written and one process change was logged."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Tell the manager the error, its impact and a proposed fix the same day"
                - "Agree the wording of the correction note with the manager"
                - "Trace where the error entered and which check missed it"
                - "Log one process change in the error log"
            - name: First month as the deck checker on a team
              description: |-
                ## Purpose
                New analysts are often handed the final checks because they are the most junior, without being told what good looks like. Using the first month to learn the team's standards, ask for the manager's own checklist and keep a list of what reviewers correct turns a dull job into fast credibility.

                ## Milestones
                1. The manager's and team's checking expectations written down after a short conversation.
                2. The formatting crib sheet and team checklist read and saved.
                3. A list of every correction reviewers made to your checks in the month.
                4. A check-in with the manager at the end of the month on what to improve.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "By day 30 you have the team's checking expectations in writing, a list of reviewer corrections and a recorded check-in with the manager."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the manager what they check first when they read a page"
                - "Save the team's crib sheet and checklist where you work"
                - "Keep a list of every correction a reviewer makes to your checks"
                - "Book a fifteen-minute check-in with the manager at day 30"
            - name: Quality control across time zones
              description: |-
                ## Purpose
                Split teams across offices hand files over at the end of each day, and a document changed by two people overnight is hard to check. A clear handover note, one owner of the master file at any time and an agreed checking window protect quality when nobody is online together for long.

                ## Milestones
                1. One owner of the master file named for each part of the day.
                2. A handover note format listing pages changed, numbers moved and open checks.
                3. A daily overlap window agreed for questions and sign-off.
                4. Two weeks of handovers with no conflicting versions.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For two weeks, every handover had a note listing changed pages and open checks, and no conflicting versions of the master file appeared."
                cadence: rolling
              tasks:
                - "Agree who owns the master file in each office's hours"
                - "Write a handover note template for pages changed and open checks"
                - "Send the handover note before you log off @recurring(daily)"
                - "Agree a daily overlap window for questions and sign-off"
            - name: Reviewing a team's work as a manager
              description: |-
                ## Purpose
                Managers who re-check every number themselves become the bottleneck, and those who only read titles let errors through. A review approach that checks the team's process, samples numbers by risk and gives clear feedback keeps quality high without doing everyone's tie-out.

                ## Milestones
                1. A review approach written down: what you always check, what you sample and what you trust to the process.
                2. Sampling focused on headline numbers and pages that changed most recently.
                3. Review comments given with severity labels and a deadline.
                4. A weekly look at which team members' pages need closer review and why.

                ## Notes
                Workstream and engagement management in general belong to their own areas; this project covers the review of work before it goes out.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written review approach exists, and four weekly reviews record what was sampled and the feedback given to each team member."
                cadence: rolling
              tasks:
                - "Write down what you always check, what you sample and what you trust"
                - "Pick the pages to sample in this week's deck by risk"
                - "Review the team's pages and note who needs closer support @recurring(weekly:wed)"
                - "Give each author comments with severity labels and a deadline"
            - name: Checking your own work without a second pair of eyes
              description: |-
                ## Purpose
                Independent and solo consultants have no analyst to check their decks and no manager to catch the slip, so the client becomes the first reviewer. A routine that puts distance between writing and checking, such as an overnight gap, reading in a different format and a paid or swapped review for big deliverables, stands in for the missing team.

                ## Milestones
                1. A rule for a time gap between finishing and checking, at least overnight for key deliverables.
                2. A habit of checking in a different format from writing, such as a printed copy or a tablet.
                3. A trusted peer or freelance proofreader arranged for the largest deliverables, under a confidentiality agreement.
                4. Your own error log started so solo patterns show up.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Your next two major deliverables were checked after an overnight gap in a different format, and a reviewer is lined up under a confidentiality agreement."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Set a rule for the gap between finishing and checking"
                - "Check the next deliverable on paper or another device"
                - "Agree a review swap with a trusted peer under confidentiality"
                - "Start a personal error log for solo work"
            - name: Late-night and weekend checks under fatigue
              description: |-
                ## Purpose
                The night before a readout, a tired team checks badly, and most serious slips happen after midnight. A plan for fatigue, such as doing the numbers checks first while fresh, checking in pairs and stopping new edits at a set hour, keeps quality up when hours get long.

                ## Milestones
                1. A rule to run number checks before formatting and wording when time is tight.
                2. A pair-checking method for late nights, with one reading and one following.
                3. A cut-off hour after which only severe fixes are made.
                4. A short note after one late night on what slipped and what held.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "On one late-night turnaround, numbers were checked first, a cut-off hour was kept and a note of what slipped was written the next day."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the order of checks for when time is short"
                - "Agree a pair-checking method with a teammate"
                - "Set a cut-off hour for non-severe edits on late nights"
                - "Write a short note the next day on what slipped"
            - name: Bringing new joiners into the team's quality routine
              description: |-
                ## Purpose
                Long engagements change team members every few weeks, and each new joiner brings their own habits. A short induction to the team's checking routine, covering the checklists, version rules, tagging convention and sign-off record, gets them checking the team's way from their first week.

                ## Milestones
                1. A one-page induction listing the team's quality documents and rules.
                2. A thirty-minute walk-through booked for each new joiner in their first week.
                3. A first deliverable checked with the new joiner alongside an experienced member.
                4. Their questions used to improve the induction page.

                ## Notes
                Start from the **Onboarding plan** template and keep the quality section to one page.
              priority: low
              deadlineOffsetDays: 30
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A one-page quality induction exists, and the next new joiner had a walk-through and a paired first check in their first week."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a one-page list of the team's quality rules and documents"
                - "Book a walk-through with the next new joiner"
                - "Pair the new joiner with an experienced checker on a first deliverable"
                - "Update the induction page with their questions"
            - name: Master number book for a large deliverable
              description: |-
                ## Purpose
                Big reports and multi-workstream programmes quote hundreds of figures, and keeping them consistent by reading alone does not scale. A master number book, a single list of every figure used with its value, source, owner and pages where it appears, lets the team update a number once and find every place it lives.

                ## Milestones
                1. A number book listing each figure, its value, unit, source, owner and pages.
                2. Every figure in the deliverable linked to an entry in the book.
                3. A process for changing a number that updates the book first and then every page.
                4. A weekly check that the deck and the book agree.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A number book covers every figure in the deliverable with source and pages, and weekly checks show the deck and the book agree."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Set up the number book with value, unit, source, owner and pages"
                - "Ask the agent to extract every figure from the draft into the book"
                - "Agree the change process: book first, then every listed page"
                - "Check that the deck and the number book agree @recurring(weekly:mon)"
            - name: Quality metrics for a practice or office
              description: |-
                ## Purpose
                Partners and practice leaders rarely know how many errors reach clients or how much rework late changes cause. Tracking a few simple measures across engagements, such as errors found by clients, post-freeze changes and redline rounds, shows where training or process changes would help most.

                ## Milestones
                1. Three to five measures chosen that teams can record in minutes.
                2. Data gathered from at least three engagements.
                3. A monthly summary for the practice lead with trends and one example.
                4. A quarterly decision on one training or process change based on the data.

                ## Notes
                Keep it blameless and anonymised by person. Measures that punish honesty will stop people logging errors.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Quality measures from at least three engagements are summarised monthly, and one change has been agreed from the quarterly review."
                cadence: rolling
              tasks:
                - "Choose three to five quality measures teams can log quickly"
                - "Collect the measures from three engagements"
                - "Send the practice lead a short quality summary @recurring(monthly:22)"
                - "Agree one training or process change from the data @recurring(quarterly)"
            - name: Audit trail for publicly released reports
              description: |-
                ## Purpose
                Some consulting reports end up published, quoted in the press or used in a regulatory filing or public inquiry, and every figure may be challenged months later. An audit trail that links each figure to source, records who checked it and keeps the evidence pack, prepared with the firm's risk or legal team, makes the report defensible.

                ## Milestones
                1. The firm's risk or legal team consulted on what a public report needs.
                2. An evidence pack with every source document and data extract, versioned and stored.
                3. Each figure in the report linked to evidence and to the person who checked it.
                4. The final evidence pack archived under the firm's retention rules.

                ## Notes
                This is organisational preparation. Legal and regulatory judgements belong to the firm's risk, legal or compliance professionals.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A public report has an evidence pack linking every figure to a source and a checker, archived under the firm's retention rules."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Ask the firm's risk team what a public report must carry"
                - "Set up a versioned evidence pack folder"
                - "Link each figure in the report to its evidence and checker"
                - "Archive the pack under the firm's retention rules"
            - name: Verifying AI-drafted text and numbers
              description: |-
                ## Purpose
                Teams now use AI tools to draft summaries, translate and pull figures from documents, and these tools can produce confident text with numbers that do not appear in the source. A verification routine for anything AI-assisted, within the firm's approved tools and data rules, keeps the speed without letting invented facts reach the client.

                ## Milestones
                1. The firm's policy on approved AI tools and client data read and noted.
                2. A rule that every AI-drafted number and quote is traced to source before use.
                3. AI-assisted sections marked in the working file so checkers know where to look harder.
                4. A sample of AI-drafted content checked and the error rate noted.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: habit
                success_criteria: "A written verification rule for AI-assisted content is in use, and a checked sample with its error rate is recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read the firm's policy on approved AI tools and client data"
                - "Write a rule that AI-drafted numbers and quotes are traced to source"
                - "Mark AI-assisted sections in the working file"
                - "Check a sample of AI-drafted content and note the error rate"
            - name: Teaching a quality control session to the office
              description: |-
                ## Purpose
                Experienced consultants carry checking habits that new analysts learn only by making mistakes. A one-hour session built on real, anonymised errors, a live tie-out exercise and the team checklists passes those habits on and makes you the person others ask about quality.

                ## Milestones
                1. A one-hour outline with anonymised real errors, a live exercise and the checklists.
                2. A practice deck with planted errors for participants to find.
                3. The session delivered to at least one cohort or team.
                4. Feedback collected and the material updated once a year.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A one-hour quality session with a planted-error practice deck has been delivered to at least one group, and feedback is recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Offer the session to the office learning lead or a staffing coordinator"
                - "Build a practice deck with fifteen planted errors"
                - "Deliver the session and collect feedback"
                - "Refresh the examples and practice deck @recurring(yearly)"
---

# Deliverable Quality Control

Most client complaints about consulting work are not about the thinking but about a total that does not add, a stale number on page 14 or another client's logo left in a backup slide. This area starts with foundations (a baseline of your own errors, a pre-send checklist, source tags, version rules and agreed checking roles), then the routines that catch problems every day and week, the specific checking skills, decisions about tools and team rules, the dated moments where a full review matters most, situations such as checking as a new analyst, a manager or a solo consultant, and finally specialist work such as a master number book and quality metrics for a practice.

The rhythm is a short daily tie-out of pages you changed, weekly consistency sweeps, peer swaps and cross-workstream reconciliations, a monthly error log review and template check, and quarterly reviews of the checklist and the error themes. The Operational checklist, Metrics log, Purchase decision, Feedback themes and Onboarding plan templates pair with the pre-send checklist, the error log, choosing a checking tool, peer review and bringing new joiners into the routine. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
