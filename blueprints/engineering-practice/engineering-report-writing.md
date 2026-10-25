---
id: engineering-practice.engineering-report-writing
name: Engineering Report Writing
description: "Engineering reports that get read and acted on: a house template, executive summaries and recommendations that stand alone, figures that make one point, a clean review and approval route, and the habits that keep reports on time."
category: business
version: 1.0.0
tags: [engineering-practice, engineering-report-writing, engineer, technical-writing, executive-summary, peer-review, technical-reports]
author: Aurum Technology
starter_structure:
  templates:
    - feedback-themes
    - reading-queue
    - metrics-log
    - purchase-decision
    - development-plan
    - course
  pillars:
    - name: Engineering Practice
      emoji: "🔧"
      description: "The day-to-day work of practising engineers: each major discipline, process safety and risk studies, FEED, design reviews, commissioning, reliability and maintenance, CAD, simulation and PLC work, project delivery, tenders, reports, ethics and standards, and the Caribbean energy sector from Point Lisas to LNG."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Engineering Report Writing
          description: "Writing engineering reports people act on: structure, executive summary, methods and results, figures and tables, conclusions, review and document numbering."
          projects:
            - name: Audit of your last three engineering reports
              description: |-
                ## Purpose
                Most engineers have never reread a report they issued a year ago with a stranger's eyes. Scoring your last three against the same eight questions (Was the decision clear on page one? Could a checker repeat the method? Did each figure have a point?) shows the two or three habits worth fixing first, instead of trying to improve everything at once.

                ## Milestones
                1. Three issued reports collected, ideally of different types, with any reviewer comments they received.
                2. Each report scored against the same eight questions on a one-page sheet.
                3. The three weaknesses that appear in more than one report named in a sentence each.
                4. A first fix chosen for the next report you write, recorded at the top of the sheet.

                ## Notes
                Include the reviewer comments if you can find them. The comments you received twice are the cheapest lessons you will get.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page audit sheet scoring three issued reports against eight questions, with three recurring weaknesses and one chosen fix recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pull three reports you wrote in the last two years from the project archive"
                - "Write eight scoring questions covering summary, method, results, figures and conclusions"
                - "Score each report and note page numbers for the worst examples"
                - "Name the three weaknesses that repeat and pick one to fix first"
            - name: House technical report template
              description: |-
                ## Purpose
                Every engineer in a team inventing their own layout means every reader relearns where the answer is. A single template with a cover sheet, revision table, executive summary, introduction and scope, basis and assumptions, method, results, discussion, conclusions and recommendations, references and appendices makes reports faster to write and much faster to check.

                ## Milestones
                1. A template file with fixed section headings, heading styles and a cover sheet holding title, number, revision and status.
                2. Guidance text inside each section saying what belongs there and what does not, deleted on use.
                3. Caption, cross-reference and table of contents fields that update without manual editing.
                4. The template trialled on one live report and corrected from what that showed.
                5. The template stored where the whole team finds it, with a named owner.

                ## Notes
                Keep guidance text short and in a distinct style so it is obvious if someone forgets to delete it. A template nobody owns drifts into five versions within a year.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One approved report template with fixed headings, cover sheet and live fields is stored in the team's shared location and has been used on a real report."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Collect the report templates currently in use across the team"
                - "Agree the fixed section headings and their order with two senior engineers"
                - "Build the cover sheet, revision table and heading styles in the template"
                - "Trial the template on the next report and fix what got in the way"
                - "Review the template against a year of comments and issued reports @recurring(yearly)"
            - name: Report types and what each one is for
              description: |-
                ## Purpose
                Two-page technical notes, forty-page study reports and inspection reports answer different questions for different readers, and writing one as if it were another is a common reason reports grow long and miss the point. A short catalogue of the report types your work produces, each with its usual reader, length and required sections, lets you pick the right shape before writing a word.

                ## Milestones
                1. A list of the report types you and your team issue, such as technical note, study, design report, inspection, test and options report.
                2. For each type: the typical reader, the decision it supports, a sensible length and the sections it must contain.
                3. One good example of each type linked from the catalogue.
                4. The catalogue shared with the team and referenced from the house template.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A catalogue of at least five report types, each with reader, decision, length and required sections, is shared with the team."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every type of report your team issued in the last year"
                - "Write the reader and the decision for each report type in one line"
                - "Set a sensible page range and required sections for each type"
                - "Link one good example of each type from the catalogue"
            - name: Reader and decision statement before drafting
              description: |-
                ## Purpose
                Drafts drift when the author starts with the data rather than the question. Writing a five-line brief before drafting (who reads it, what they must decide, by when, what they already know, and the one sentence you expect to conclude) keeps the report pointed at the decision and gives your manager something to correct before you spend a week writing.

                ## Milestones
                1. A five-line brief format covering reader, decision, deadline, prior knowledge and expected conclusion.
                2. The brief written for your current report and agreed with the person who asked for it.
                3. The expected conclusion revisited once results are in, and the brief updated if it changed.
                4. The brief kept with the report file for the checker to read first.

                ## Notes
                If you cannot write the decision in one sentence, the report is not ready to start. Go back to whoever asked for it.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A five-line reader and decision brief exists for the current report and was agreed with the requester before drafting began."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the reader, decision, deadline, prior knowledge and expected conclusion for your current report"
                - "Send the brief to the requester and ask them to correct it"
                - "Add a blank brief page to the front of the house template"
                - "Compare the final conclusion with the expected one once the report is issued"
            - name: Report numbering, revision and status on the cover
              description: |-
                ## Purpose
                Someone holding Revision B needs to know at a glance whether it was issued for review, for approval or for use, and what changed since Revision A. Agreeing how your reports carry their document number, revision code, status and change summary on the cover and in the revision table prevents the costly mistake of someone designing from a draft.

                ## Milestones
                1. The project or company numbering rule confirmed and applied to the report cover.
                2. A revision scheme written down, for example lettered revisions for drafts and numbered revisions from first issue for use.
                3. Status codes defined, such as issued for review, issued for approval and issued for use, with what each permits.
                4. A revision table format with a one-line change summary and initials of author, checker and approver.

                ## Notes
                This project is about what appears on the report itself. The register and transmittals that track documents across a project belong to document control; agree the codes with them rather than inventing your own.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Numbering, revision and status conventions for reports are written on one page, agreed with document control and applied to the house template cover."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask document control for the project numbering and revision rules"
                - "Write the status codes and what each one allows a reader to do"
                - "Add the revision table with change summary and initials to the template"
                - "Check your open reports carry the right number and status on the cover"
            - name: Personal style sheet for units, numbers and terms
              description: |-
                ## Purpose
                Inconsistent units, decimal places and abbreviations are the comments checkers make most often, and each one costs a review cycle. A one-page style sheet settles SI units and how to write them, significant figures, how to write ranges and tolerances, defined terms and abbreviations, so you stop deciding the same things report after report.

                ## Milestones
                1. Unit rules written: SI by default, a space between number and unit, and how to handle legacy imperial values.
                2. Number rules: significant figures by quantity type, thousands separators and how to state ranges and tolerances.
                3. A list of preferred terms and abbreviations, each defined once at first use or in a glossary.
                4. The sheet pinned beside your editor and applied to the current report.

                ## Notes
                Never round in the middle of a calculation to make a report look tidy. Round only the reported value and say to how many figures.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page style sheet covering units, numbers and terms exists and the current report has been checked against it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the unit and number comments you received on the last three reports"
                - "Write rules for units, significant figures, ranges and tolerances"
                - "Draft a short list of preferred terms and abbreviations"
                - "Run the style sheet over your current draft and fix what it catches"
            - name: Word processor set-up for long technical documents
              description: |-
                ## Purpose
                Half the pain of a fifty-page report is manual: renumbering figures, fixing broken cross-references and fighting heading styles the night before issue. An afternoon spent setting up heading styles, automatic captions, cross-references, an equation tool and a reference manager pays back on every report you write after it.

                ## Milestones
                1. Heading styles linked to multilevel numbering so sections renumber themselves.
                2. Figure, table and equation captions inserted as fields, with cross-references that update.
                3. A reference manager or citation field connected so the reference list builds itself.
                4. A test document of ten pages that survives inserting a new section without manual fixes.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A ten-page test document renumbers headings, captions and cross-references correctly after a section is inserted, with no manual edits."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Set heading styles one to three with linked multilevel numbering"
                - "Insert figure and table captions as fields and cross-reference two of each"
                - "Connect a reference manager and cite three standards in the test file"
                - "Insert a new section in the middle and check that everything updates"
            - name: Exemplar report library
              description: |-
                ## Purpose
                Engineers learn report writing mostly by copying whatever the last report looked like, good or bad. Keeping five to ten genuinely good reports, from your company and from public sources such as published investigation and regulator reports, gives you models to borrow structure, tone and figure ideas from when you are stuck.

                ## Milestones
                1. Five to ten exemplar reports collected, covering at least three report types.
                2. A short note on each saying what it does well, such as the summary, a comparison table or a clear limitations section.
                3. The library stored with the house template and shared with the team.
                4. Confidential reports either cleared for internal sharing or replaced with public examples.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "At least five exemplar reports across three types are stored with a one-line note on what each does well."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask two senior engineers for the best report they have read at the company"
                - "Find two public investigation or regulator reports with strong summaries"
                - "Write one line on what each exemplar does well"
                - "Add one new exemplar and retire a weak one @recurring(yearly)"
            - name: Author, checker and approver route for reports
              description: |-
                ## Purpose
                A report signed by an author, checked by someone who only read the summary and approved by a manager who read nothing is a liability with three names on it. Writing down who checks what, how long each step takes and what each signature means turns the review route into something you can plan around and defend.

                ## Milestones
                1. The roles of author, checker and approver defined, including what each signature confirms.
                2. A rule for who may check which report types, based on competence rather than availability.
                3. Planned durations for checking and approval built into report schedules.
                4. The route agreed with your manager and written on the house template's sign-off page.

                ## Notes
                A checker should be able to say which parts they checked in detail. A sign-off page with a short scope of check line makes this honest.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written review route with role definitions, checker competence rules and planned durations is agreed and on the template sign-off page."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write what an author, checker and approver signature each confirms"
                - "Agree with your manager who may check each report type"
                - "Add a scope of check line to the sign-off page"
                - "Add check and approval durations to the schedule of your next report"
                - "Confirm the checker and approver list is still current @recurring(yearly)"
            - name: Protected weekly report writing block
              description: |-
                ## Purpose
                Deadlines slip because writing is always the task that gives way to meetings, site calls and urgent queries. A fixed half-day each week, calendar blocked and notifications off, is where drafting actually happens, and a report written in four steady blocks is better than one written in a panicked weekend.

                ## Milestones
                1. A recurring three to four hour block in the calendar, at the time of day you write best.
                2. A short start ritual: open the brief, read the last paragraph written, set one section as the target.
                3. A log of what each block produced, kept for four weeks.
                4. The block defended in at least three of four weeks, with the reason noted when it was lost.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly writing block has been kept in at least three of the last four weeks, with the output of each recorded."
                cadence: rolling
              tasks:
                - "Choose the half-day you write best and block it in the calendar"
                - "Write a three-step start ritual on a card by your desk"
                - "Hold the writing block with notifications off and one section as the target @recurring(weekly:tue)"
                - "Review four weeks of block logs and move the slot if it keeps getting lost"
            - name: Open reports tracker with stages and due dates
              description: |-
                ## Purpose
                When you have four reports in flight, the one nobody is chasing is the one that turns up late at the client. A single tracker listing every open report, its stage (brief, drafting, checking, comments, approval, issued), the next action and the date it is due makes the weekly conversation with your manager five minutes long.

                ## Milestones
                1. Every open report listed with number, title, requester, stage, next action and due date.
                2. Stage definitions agreed so drafting and checking mean the same thing to everyone.
                3. The tracker updated weekly and shared with your manager.
                4. Late reports flagged with a new date and the reason, before the original date passes.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A tracker lists all open reports with stage and due date and has been updated every week for a month, with late items rebaselined in advance."
                cadence: rolling
              tasks:
                - "List every report you currently owe, with requester and due date"
                - "Set six stages and write a one-line meaning for each"
                - "Update stages and next actions in the report tracker @recurring(weekly:mon)"
                - "Tell the requester a new date for any report that will be late"
            - name: Monthly peer review swap with a colleague
              description: |-
                ## Purpose
                Formal checking catches technical errors but rarely tells you that your summary is buried or your figures confuse. Swapping one section a month with a trusted colleague, each giving three comments on clarity only, builds the reader's eye that formal review never trains.

                ## Milestones
                1. A colleague at a similar level who agrees to swap one section a month.
                2. A rule for each swap: one section, three comments, clarity and structure only.
                3. Six swaps completed, with the comments kept.
                4. One change in your own writing that came from a swap, visible in a later report.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly section swaps have been completed with a colleague and the comments are kept with your review themes."
                cadence: rolling
              tasks:
                - "Ask one colleague to swap a report section each month"
                - "Agree the three-comment rule and a two-day turnaround"
                - "Swap one section and return three clarity comments @recurring(monthly:12)"
                - "Note which swap comment changed how you write"
            - name: Reviewer comment log and response sheet
              description: |-
                ## Purpose
                Comments sent as marked-up PDFs, emails and hallway remarks get lost, and the same comment returns at the next revision. A comment log with an ID, page, comment, response, action taken and status for each item gives the reviewer a clear record that every point was handled and stops disputes about what was agreed.

                ## Milestones
                1. A comment log format with ID, reviewer, page, comment, response, action and status columns.
                2. All comments on the current report entered in the log, whatever form they arrived in.
                3. Each comment closed as incorporated, clarified or declined with a reason.
                4. The completed log sent back with the next revision.

                ## Notes
                Declining a comment is fine when you give a reason the reviewer can accept or escalate. Silently ignoring it is not.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every comment on the current report is logged with a response and status, and the log is issued with the next revision."
                cadence: rolling
              tasks:
                - "Build a comment log sheet with ID, page, comment, response and status"
                - "Copy every comment on your current report into the log"
                - "Write a response and action for each comment and close it"
                - "Chase any comment log left open more than two weeks @recurring(monthly:16)"
            - name: Review comment themes from your reports
              description: |-
                ## Purpose
                Individual comments get fixed and forgotten, but the patterns behind them (missing assumptions, conclusions that do not follow, unexplained jumps in figures) are what make the next report better. Sorting a month of comments into themes shows which habit to work on and gives you real evidence for your next development conversation.

                ## Milestones
                1. Comments from the last three reports sorted into no more than eight themes.
                2. The top two themes named with an example of each.
                3. A personal rule written for each top theme, such as stating every assumption with its source.
                4. Theme counts compared after three months to see whether the rule worked.

                ## Notes
                Start from the **Feedback themes** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "Comments from three reports are sorted into themes, the top two each have a written rule, and counts are compared after three months."
                cadence: rolling
              tasks:
                - "Gather the comment logs from your last three reports"
                - "Sort the comments into no more than eight themes"
                - "Write one personal rule for each of the top two themes"
                - "Add the month's comments to the themes and recount @recurring(monthly:20)"
            - name: Running technical notes log during project work
              description: |-
                ## Purpose
                Writing up at the end of a project from memory loses the reasons behind decisions: why that load case was ignored, why the vendor's data was overridden. Keeping a dated notes log as you work, with decisions, assumptions, sources and open questions, turns the final report into assembly rather than archaeology.

                ## Milestones
                1. A notes log per project, dated entries, kept where the report files live.
                2. Each decision recorded with its reason, the person who agreed it and the source document.
                3. Open questions listed with an owner and closed as answers arrive.
                4. The report's basis and assumptions section drafted directly from the log.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated notes log exists for the current project with decisions, sources and open questions, and the assumptions section of the report was drafted from it."
                cadence: rolling
              tasks:
                - "Start a dated notes log in the current project's report folder"
                - "Back-fill the decisions made so far with their reasons and sources"
                - "Spend fifteen minutes adding the week's decisions and open questions @recurring(weekly:fri)"
                - "Draft the basis and assumptions section from the log"
            - name: Reusable figure and table library
              description: |-
                ## Purpose
                Location maps, process schematics, standard comparison tables and typical detail sketches get redrawn for every report, often worse each time. A small library of approved, editable source files for the figures you reuse saves hours per report and keeps the look consistent across a project.

                ## Milestones
                1. The ten figures and tables you redraw most often identified.
                2. Editable source files for each stored with a version date and the source of any data.
                3. Copyright or confidentiality status noted for each item, especially maps and vendor images.
                4. The library checked for outdated items each quarter.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A library of at least ten editable figures and tables, each with a version date and source, is stored and has been reviewed in the last quarter."
                cadence: rolling
              tasks:
                - "List the figures and tables you redraw in most reports"
                - "Save editable source files for the first five with version dates"
                - "Note the data source and any copyright limits for each item"
                - "Retire outdated figures and add new reusable ones @recurring(quarterly)"
            - name: Technical writing reading queue
              description: |-
                ## Purpose
                Reading a handful of good books and guides on technical and scientific writing, and a steady diet of well-written reports in your field, improves your writing faster than any single course. A short queue, one item a month, with a note of the one idea you took from each, keeps the learning going without becoming another backlog.

                ## Milestones
                1. A queue of eight items: style guides, books on technical writing and strong published reports in your discipline.
                2. One item read or skimmed each month.
                3. A one-line note per item of the idea you will use.
                4. At least two ideas visibly applied in reports within six months.

                ## Notes
                Start from the **Reading queue** template.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Six items from the queue are read, each with a one-line takeaway, and two takeaways are applied in issued reports."
                cadence: rolling
              tasks:
                - "List eight writing guides, books and exemplar reports for the queue"
                - "Pick the first item and block an hour to read it"
                - "Read the next queue item and write its one useful idea @recurring(monthly:5)"
            - name: Quarterly boilerplate and standard text refresh
              description: |-
                ## Purpose
                Standard paragraphs for scope, limitations, reliance and references get copied from report to report long after the standards they cite have new editions. A quarterly pass over your boilerplate catches superseded standard editions, old company names and limitations wording your legal or quality team has since changed.

                ## Milestones
                1. All standard text blocks collected in one controlled file rather than scattered across old reports.
                2. Each block tagged with the date last reviewed and its owner.
                3. Cited standards checked against current editions and updated where superseded.
                4. Changes to limitations or reliance wording checked with the quality or legal contact.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A controlled boilerplate file exists with review dates on every block, and the last quarterly review updated any superseded standards."
                cadence: cyclic
              tasks:
                - "Collect your standard paragraphs into one controlled file"
                - "Tag each block with an owner and a last-reviewed date"
                - "Check cited standard editions and update the boilerplate @recurring(quarterly)"
                - "Send changed limitations wording to the quality contact for agreement"
            - name: Report quality and timeliness metrics
              description: |-
                ## Purpose
                Whether your reports are getting better is usually a feeling. Tracking four numbers per report (review cycles to approval, comments per ten pages, days early or late against the agreed date, and length against the target) shows real trends and makes a good case in your appraisal.

                ## Milestones
                1. Four measures defined with how each is counted.
                2. Figures recorded for every report issued, starting with the current one.
                3. A six-month view showing the trend for each measure.
                4. One process change made because of what the numbers showed.

                ## Notes
                Start from the **Metrics log** template. Comments per ten pages is fairer than raw comment counts across reports of different lengths.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four report quality measures are recorded for every issued report over six months, with the trend reviewed and one change made."
                cadence: rolling
              tasks:
                - "Define review cycles, comments per ten pages, days late and length ratio"
                - "Back-fill the measures for your last three issued reports"
                - "Record the month's issued reports in the metrics log @recurring(monthly:28)"
                - "Pick one change after six months of figures"
            - name: Executive summaries that stand alone
              description: |-
                ## Purpose
                Senior readers often read only the executive summary, so a summary that says what the report covers instead of what it found wastes the most important page. Practising a one-page summary that states the question, the answer, the key numbers, the main risks and what you recommend, in that order, is the single biggest improvement most engineers can make.

                ## Milestones
                1. A summary pattern written down: question, answer, key figures, risks and limits, recommendation.
                2. Three past summaries rewritten to the pattern and compared with the originals.
                3. A test reader who did not read the report able to state the decision from the summary alone.
                4. The pattern used on the next issued report.

                ## Notes
                Write the summary last, read it first. If it contains the words covers, describes or discusses, it is probably a table of contents in prose.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three rewritten summaries follow the pattern and a test reader correctly stated the decision from each without reading the report."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write the five-part summary pattern on one card"
                - "Rewrite the summary of an old report to the pattern"
                - "Ask a colleague outside the project to state the decision from it"
                - "Apply the pattern to the summary of your current report"
            - name: Conclusions and recommendations someone can act on
              description: |-
                ## Purpose
                Recommendations such as further study may be required are the reason many reports change nothing. Each recommendation should say what to do, who should do it, by when and why, and trace back to a numbered conclusion, which traces back to a result in the body.

                ## Milestones
                1. Every conclusion numbered and linked to the section or figure that supports it.
                2. Every recommendation written as an action with an owner role, a timescale and the conclusion it follows from.
                3. Recommendations ranked by consequence, with safety-related ones first.
                4. A traceability check done on the current report: no recommendation without a conclusion, no conclusion without evidence.

                ## Notes
                Never put new information in the conclusions. If it has not appeared in the results or discussion, the reader has no basis for it.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The current report's conclusions and recommendations pass a traceability check, with each recommendation naming an action, owner role and timescale."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Number the conclusions in your current draft and link each to its evidence"
                - "Rewrite each recommendation with an action, owner role and timescale"
                - "Rank the recommendations by consequence, safety first"
                - "Ask the checker to run a traceability check on that section"
            - name: Methods and assumptions a checker can repeat
              description: |-
                ## Purpose
                Checkers who cannot see where a number came from either redo the work or sign on trust, and neither is good. Writing the method so that a competent engineer could repeat it (inputs and their sources, the standard or method followed, software and version, assumptions and why they are reasonable) makes checking faster and the report defensible years later.

                ## Milestones
                1. A method section format: inputs and sources, method or standard, tools and versions, assumptions with justification.
                2. Each assumption numbered so the discussion can refer to it.
                3. Detailed calculations referenced to their calculation package rather than reproduced in full.
                4. A colleague confirms they could repeat the main result from the method section alone.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The method section of the current report lists sources, method, tool versions and numbered assumptions, and a colleague confirmed it could be repeated."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List every input in your current report with its source document"
                - "Number the assumptions and add a one-line justification for each"
                - "Record the software, version and settings used for each analysis"
                - "Ask a colleague whether they could repeat the main result from the text"
            - name: Figures that make one point each
              description: |-
                ## Purpose
                Engineering reports are full of default spreadsheet charts with unlabelled axes, eight colours and a legend that hides the data. Learning to give every figure one message, stated in its caption, with labelled axes and units, readable greyscale and the comparison the reader needs placed side by side, makes results understood in seconds.

                ## Milestones
                1. A figure checklist: one message, caption states the finding, axes with units, readable in greyscale, source given.
                2. Five figures from a past report redrawn to the checklist.
                3. A consistent chart style saved as a reusable template in your plotting tool.
                4. Every figure in the current report checked against the list before checking.

                ## Notes
                A good caption says what the figure shows, for example Pump vibration rose after the March overhaul, not Vibration data.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five redrawn figures meet the checklist and every figure in the current report has a caption that states its finding."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write a five-point figure checklist"
                - "Redraw five figures from an old report to the checklist"
                - "Save a chart style template in your plotting tool"
                - "Rewrite every caption in your current draft to state the finding"
            - name: Option comparison tables for engineering choices
              description: |-
                ## Purpose
                Options studies live or die on one table: the options down one side, the criteria across the top, and a clear answer at the bottom. Building comparison tables with defined criteria, units, a scoring or ranking basis and a short reason in each cell keeps an evaluation honest and lets the reader disagree with a weighting instead of the whole report.

                ## Milestones
                1. Criteria defined before any option is scored, including cost, safety, schedule, operability and maintenance.
                2. A scoring basis written down, with any weighting shown and justified.
                3. Each cell holding a value or a short reason, not just a tick.
                4. A sensitivity line showing whether the preferred option changes if the top weighting changes.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An options table with predefined criteria, a stated scoring basis and a sensitivity check is in a draft or issued report."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write the comparison criteria before scoring any option"
                - "Fill each cell with a value or a short reason"
                - "Show the weighting and why it was chosen"
                - "Test whether the preferred option changes when the top weighting moves"
            - name: Plain English editing for technical prose
              description: |-
                ## Purpose
                Long sentences, stacked nouns such as pump suction pressure loss calculation methodology review, and passive voice that hides who does what make engineering reports slow to read and easy to misread. A short editing routine on every draft (cut sentences over 25 words, unstack nouns, name the actor, delete throat-clearing) makes the same content read in half the time.

                ## Milestones
                1. A personal editing checklist of six to eight rules.
                2. One past section edited to the checklist with a before and after word count.
                3. An average sentence length target set and measured on the current draft.
                4. The editing pass built into the schedule before every report goes for checking.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An editing checklist exists, one past section shows a measured word reduction, and the current draft meets the sentence length target."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write six editing rules on one page"
                - "Edit one past section and record the word count before and after"
                - "Measure the average sentence length of your current draft"
                - "Book a dedicated editing pass before the draft goes for checking"
            - name: Writing uncertainty, limitations and caveats honestly
              description: |-
                ## Purpose
                Reports that hide their limits get used for things they cannot support, while reports that bury every sentence in caveats get ignored. Stating plainly the data quality, the range of conditions covered, the uncertainty in key results and what the report must not be used for protects the reader and the author.

                ## Milestones
                1. A limitations section in the template covering data, scope, conditions and intended use.
                2. Key results stated with their uncertainty or range, not as single precise numbers.
                3. Caveats removed from the body where they repeat the limitations section.
                4. A not to be used for line where misuse is a real risk.

                ## Notes
                If a limitation would change the recommendation, it belongs in the executive summary too.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The current report has a limitations section covering data, scope and use, and its key results are stated with an uncertainty or range."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List what your current report cannot support or was not asked to cover"
                - "State the uncertainty or range for each headline result"
                - "Move repeated caveats out of the body into the limitations section"
                - "Check whether any limitation needs to appear in the summary"
            - name: Citing standards, data sources and references
              description: |-
                ## Purpose
                Saying a design follows the relevant code gives the reader nothing to check. Citing standards by number, title and edition, data by its source document and revision, and published work in a consistent reference style lets anyone trace a claim, and shows immediately when an edition has been superseded.

                ## Milestones
                1. A reference style chosen for the team and used in the template.
                2. Standards cited with full designation and edition year, for example an ISO or IEC standard with its date.
                3. Client and vendor data cited by document number and revision.
                4. Every reference in the current report checked to exist and be cited in the text.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every reference in the current report gives number, title and edition or revision, and each is cited at least once in the text."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Choose one reference style and add an example list to the template"
                - "Add edition years to every standard cited in your current draft"
                - "Cite client and vendor data by document number and revision"
                - "Remove any reference not cited in the text"
            - name: Reports for readers who are not engineers
              description: |-
                ## Purpose
                Finance directors, regulators, community groups and boards read engineering reports to make decisions they will be held to, without the training to read a P and ID or a stress plot. Writing a version, or a front section, in plain terms with consequences, costs and risks stated in their language is a skill that gets engineers into rooms where decisions are made.

                ## Milestones
                1. The non-engineer reader named, with what they need to decide and what they fear.
                2. Technical terms either removed or explained in a sentence at first use.
                3. Consequences expressed in time, money, safety and service, not only engineering units.
                4. A non-engineer test reader able to explain the recommendation back.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A plain-language section or report has been tested on a non-engineer, who explained the recommendation back correctly."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Name the non-engineer reader and the decision they face"
                - "Rewrite the key findings in terms of time, cost, safety and service"
                - "Explain or remove every technical term in that section"
                - "Ask a non-engineer to read it and explain the recommendation back"
            - name: Choosing an authoring tool for technical reports
              description: |-
                ## Purpose
                Word processors, LaTeX and docs-as-code setups that build reports from plain text in version control each suit different teams, and a poor fit costs hours on every report. Comparing two or three options against your real needs (client file formats, equation-heavy content, multi-author editing, version history, review mark-up) settles the question with evidence.

                ## Milestones
                1. Requirements written: client deliverable format, equations, collaboration, review mark-up, version control and cost.
                2. Two or three tools trialled on the same ten-page sample.
                3. A scored comparison and a recommendation with its reasons.
                4. The decision agreed with the team, including how existing templates move across.

                ## Notes
                Start from the **Purchase decision** template. Most clients still want an editable word processor file or PDF, so check before choosing anything exotic.
              priority: low
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A scored comparison of at least two authoring tools on a common sample exists, with a recorded team decision."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write the requirements your reports place on an authoring tool"
                - "Build the same ten-page sample in two candidate tools"
                - "Score each tool against the requirements"
                - "Present the recommendation at the next team meeting"
            - name: Rewriting a weak legacy report
              description: |-
                ## Purpose
                Every team has an important old report that people still use but nobody can follow. Rewriting one, with the original author's or owner's agreement, applies every skill in this area to a real document and produces something the team will be glad of, as well as a before and after you can show.

                ## Milestones
                1. A legacy report chosen that is still in use and agreed as worth rewriting.
                2. The original's main problems listed before any rewriting starts.
                3. A new revision drafted with a standalone summary, traceable conclusions and clear figures.
                4. The rewrite checked and issued as a new revision under the normal route.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A rewritten revision of a legacy report in active use has been checked and issued, with a list of what changed."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Ask colleagues which old report they still use but struggle with"
                - "Agree the rewrite with the report owner or document controller"
                - "List the original's main problems before changing anything"
                - "Draft the new revision and send it through the normal checking route"
            - name: Appendix strategy, body versus back matter
              description: |-
                ## Purpose
                Main text becomes unreadable when every data sheet, calculation printout and photograph sits in the body, and unusable when key evidence hides on page 140. A simple rule for what stays in the body (whatever the argument needs) and what moves to numbered, referenced appendices keeps the main text short and the evidence complete.

                ## Milestones
                1. A written rule for body and appendix content.
                2. Every appendix numbered, titled and referred to at least once from the body.
                3. Large data sets summarised in the body with the full set in an appendix or attached file.
                4. The body of the current report reduced to what the argument needs.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The current report's appendices are all referenced from the body, and the body contains only material the argument uses."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a three-line rule for what belongs in the body"
                - "Move raw data and printouts in your current draft to appendices"
                - "Add a body reference to every appendix"
                - "Check each appendix title says what it contains"
            - name: Cutting a report draft by a third
              description: |-
                ## Purpose
                First drafts carry repeated background, restated methods and results described in words and then shown again in a table. Taking one draft and cutting it by a third without losing a single finding teaches more about structure than any rule, and the shorter report is more likely to be read.

                ## Milestones
                1. A starting word count and a target one third lower.
                2. Repetition between sections found and removed.
                3. Text that only repeats a table or figure cut down to the point it makes.
                4. The shorter draft checked by a colleague for any lost finding.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A draft has been reduced by at least thirty percent and a colleague confirmed no finding was lost."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Record the word count of your current draft and set the target"
                - "Ask the agent to flag paragraphs that repeat earlier sections"
                - "Cut text that only restates a table or figure"
                - "Ask a colleague to confirm every finding survived the cut"
            - name: Team chart and drawing style for reports
              description: |-
                ## Purpose
                Work from one team looks like they came from five companies when every engineer uses different fonts, colour schemes and line weights in charts and sketches. A short style guide for figures, with saved chart templates and a colour set that survives greyscale printing and colour blindness, makes the team's work look as careful as it is.

                ## Milestones
                1. A colour set of four to six colours checked for greyscale and common colour blindness.
                2. Font, line weight and axis rules written on one page.
                3. Chart templates saved for the spreadsheet and plotting tools the team uses.
                4. The style applied to every figure in one team report.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page figure style with a tested colour set and saved chart templates exists and has been applied to a full team report."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick four to six colours and test them in greyscale"
                - "Write font, line weight and axis rules on one page"
                - "Save chart templates for the team's spreadsheet and plotting tools"
                - "Apply the style to all figures in the next team report"
            - name: Rules for AI drafting tools in engineering reports
              description: |-
                ## Purpose
                AI writing assistants can tidy prose and draft structure quickly, but they also invent references, misstate standards and can expose confidential client data if used carelessly. Agreeing what they may be used for, what must never be pasted in, and how every generated sentence is verified keeps the speed without risking a signed report.

                ## Milestones
                1. Your company's policy on AI tools and the client's confidentiality terms read and noted.
                2. Allowed uses listed, such as editing for clarity and outlining, and banned uses, such as generating results or references.
                3. A verification rule: every fact, number and reference checked against a source before issue.
                4. The rules agreed with your manager and written into the report procedure.

                ## Notes
                The engineer who signs the report is responsible for every word in it, whoever or whatever drafted it.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Written rules on allowed and banned AI uses, data confidentiality and verification are agreed with your manager and added to the report procedure."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read your company's AI policy and the client's confidentiality terms"
                - "List allowed and banned uses of AI tools for reports"
                - "Write the verification rule for facts, numbers and references"
                - "Agree the rules with your manager and add them to the procedure"
                - "Recheck the AI rules against current company policy @recurring(yearly)"
            - name: Searchable, navigable PDF issues
              description: |-
                ## Purpose
                Scanned appendices, missing bookmarks and dead cross-reference links make a large report hard to use on screen, which is where most readers now open it. Issuing PDFs with bookmarks from headings, live internal links, searchable text, embedded fonts and sensible file size is a small finishing step that readers notice.

                ## Milestones
                1. An export setting that creates bookmarks from headings and keeps internal links live.
                2. Scanned appendices run through text recognition so they are searchable.
                3. Document properties set with title, number and revision.
                4. A pre-issue PDF checklist used on the next report.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The next issued PDF has heading bookmarks, live internal links, searchable appendices and correct document properties, checked against a list."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Set the export options to create bookmarks and keep links"
                - "Run text recognition on scanned appendices"
                - "Fill in the PDF title, number and revision properties"
                - "Write a six-point pre-issue PDF checklist"
            - name: First technical report issued to a client
              description: |-
                ## Purpose
                The first report with your name as author that goes outside the company is a real milestone, and the one most likely to be returned with forty comments if it is rushed. Treating it as a dated deliverable with a brief, a planned draft, a self-check, formal checking and time for comments makes the first one a report you are proud of.

                ## Milestones
                1. A reader and decision brief agreed with the project lead.
                2. A full draft finished with at least a week left for checking.
                3. A self-check done against the style sheet, figure checklist and traceability check.
                4. Checker comments resolved in a comment log and the report issued on the agreed date.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Your first client report is issued on or before the agreed date, with the comment log showing every checker comment closed."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Agree the reader and decision brief with the project lead"
                - "Plan draft, self-check, checking and comment dates back from the issue date"
                - "Run the style sheet and figure checklist before sending for checking"
                - "Close every checker comment in the log before issue"
            - name: Options study report for an investment decision
              description: |-
                ## Purpose
                When a client or board must choose between replacing, refurbishing or living with an asset, the options report is the document that money moves on. Planning it backwards from the decision meeting, with agreed criteria, consistent cost basis and a clear recommendation and its risks, makes it something the meeting can actually decide from.

                ## Milestones
                1. The decision meeting date and the decision-makers confirmed.
                2. Options and evaluation criteria agreed with the client before analysis starts.
                3. Costs for every option on the same basis, class and date, with the estimator's input.
                4. A recommendation, its main risks and what would change it, on the first page.
                5. The report issued in time for decision-makers to read it before the meeting.

                ## Notes
                Agree the criteria before anyone sees the scores. Criteria chosen afterwards look like they were chosen to fit the answer.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "An options report with agreed criteria, a consistent cost basis and a first-page recommendation is issued at least five working days before the decision meeting."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Confirm the decision meeting date and who will decide"
                - "Agree the options and evaluation criteria with the client in writing"
                - "Ask the estimator to price every option on the same basis"
                - "Draft the first page with recommendation, risks and what would change it"
            - name: Site visit report within 48 hours
              description: |-
                ## Purpose
                Observations from a site visit or inspection fade within days, and a report sent two weeks later loses both detail and urgency. A ready-made site report format, photos captioned on the day, and a habit of issuing within two working days get findings to the people who must act while the issue is still fresh.

                ## Milestones
                1. A site report format with purpose, attendees, conditions, observations, photos, actions and urgent items.
                2. Photos captioned with location, direction and what they show on the day of the visit.
                3. Urgent safety observations reported verbally before leaving site and confirmed in writing.
                4. The report issued within two working days of the visit.

                ## Notes
                Report anything that looks immediately dangerous to the site person in charge before you leave, and use your stop-work authority if people are at risk. The written report is the record, not the warning.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A site report with captioned photos and actions is issued within two working days of a visit, with urgent items reported verbally on the day."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Save a site visit report format on your phone and laptop"
                - "Caption every photo with location and direction before leaving site"
                - "Tell the person in charge about urgent findings before you go"
                - "Issue the site report within two working days"
            - name: Test report after a laboratory or field test
              description: |-
                ## Purpose
                Test reports are evidence that something met a requirement, so they are read later by auditors, insurers and investigators who were not there. A test report that states the requirement, test setup, instruments with calibration status, procedure followed and any deviation, the raw results and a clear pass or fail against each criterion holds up when it is questioned.

                ## Milestones
                1. Each acceptance criterion listed with its source requirement.
                2. Instrument list with identifiers and calibration dates included.
                3. Deviations from the test procedure recorded with their effect on the result.
                4. A results table giving measured value, criterion and pass or fail for each item.
                5. Witness signatures or attendance recorded where the test was witnessed.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A test report is issued with criteria, calibrated instruments, recorded deviations and a pass or fail result for each criterion."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List each acceptance criterion and the requirement it comes from"
                - "Record instrument identifiers and calibration dates during the test"
                - "Write down every deviation from the procedure as it happens"
                - "Build the results table with measured value, criterion and verdict"
            - name: Presenting report findings to a client meeting
              description: |-
                ## Purpose
                Many reports are judged in a twenty-minute meeting slot rather than read in full. Preparing a short presentation that follows the executive summary (question, answer, three key figures, risks, recommendation), with the hard questions anticipated, turns a document into a decision on the day.

                ## Milestones
                1. The meeting slot, attendees and the decision sought confirmed.
                2. Six to eight slides built from the executive summary and the strongest figures.
                3. A list of the five hardest questions with prepared answers.
                4. A rehearsal with a colleague, timed to fit the slot.
                5. Meeting outcomes and agreed actions recorded and sent within a day.

                ## Notes
                Bring the report, but do not present it page by page. The slides are the summary; the report is the evidence.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A timed presentation of the findings was delivered at the client meeting and the outcomes and actions were sent within one working day."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Confirm the slot length, attendees and decision sought"
                - "Build six to eight slides from the summary and key figures"
                - "Write the five hardest questions and your answers"
                - "Rehearse with a colleague and cut to fit the time"
            - name: Graduate engineer's first year of report writing
              description: |-
                ## Purpose
                Graduates arrive having written university lab reports and dissertations, which reward length and background, and are then asked for short, decision-focused reports with a client's money behind them. A year-long plan with a mentor, a few graded report types and deliberate feedback closes that gap far faster than learning by red pen alone.

                ## Milestones
                1. A mentor who agrees to review one piece of writing a month.
                2. A sequence of report types for the year, from short technical notes to a full study section.
                3. Monthly feedback recorded with one thing to keep and one to change.
                4. A portfolio of three issued documents showing improvement over the year.

                ## Notes
                Start from the **Development plan** template. Your university habit of long introductions is the first one to drop.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Over twelve months, monthly mentor feedback is recorded and three issued documents show measurable improvement in comments per page."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Ask a senior engineer to mentor your report writing for a year"
                - "Plan the report types you will write each quarter"
                - "Send one piece of writing to your mentor and record the feedback @recurring(monthly:3)"
                - "Pick three issued documents for your year-end portfolio"
            - name: Writing reports in English as a second language
              description: |-
                ## Purpose
                Many excellent engineers write reports in English while thinking in another language, and reviewers sometimes mistake language slips for technical weakness. A focused routine (a personal list of recurring errors, short sentences, a set of standard phrases for engineering reports, and a language check before technical checking) lets the engineering show.

                ## Milestones
                1. A personal list of your ten most frequent language errors, built from past comments.
                2. A phrase bank of standard report phrases for scope, method, results and recommendations.
                3. A language check step before drafts go to the technical checker.
                4. Language comments per report falling over three reports.

                ## Notes
                Short sentences are not a weakness. Most native speakers would write better engineering reports if they used them too.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A personal error list and phrase bank exist, and language comments per report have fallen across three consecutive reports."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List your ten most frequent language errors from past comments"
                - "Build a phrase bank of standard report phrases"
                - "Run the error list over a draft before technical checking"
                - "Practise rewriting one paragraph from a report in short sentences @recurring(weekly:thu)"
            - name: Coaching junior engineers through report reviews
              description: |-
                ## Purpose
                Senior engineers often rewrite junior reports themselves because it is faster, and the junior learns nothing except that their draft was wrong. Reviewing with a small number of explained comments, a sit-down for the big structural points and a second look at the revision builds writers who need less checking next year.

                ## Milestones
                1. A review approach agreed: structural comments first, a limit on minor comments, reasons given.
                2. A thirty-minute sit-down on every first draft from a junior engineer.
                3. Each junior's recurring issues noted and shared with them.
                4. Comments per page on each junior's reports tracked over six months.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Every junior first draft over six months received a sit-down review, and each junior's comments per page fell over that period."
                cadence: rolling
              tasks:
                - "Write your review approach in five lines and share it with the juniors"
                - "Hold a thirty-minute sit-down on the next junior first draft"
                - "Note each junior's recurring issues after their review @recurring(monthly:8)"
                - "Compare comments per page for each junior after six months"
            - name: Reports from a small consultancy or sole practice
              description: |-
                ## Purpose
                An engineer working alone or in a small firm has no quality department to set limitations wording, check reliance terms or catch an overreaching conclusion, and the professional liability sits with them. Building a short report control routine (scope letter, reliance and limitations wording reviewed by a lawyer, an external checker for higher-risk work and a retained issue record) protects both the client and the practice.

                ## Milestones
                1. A scope confirmation sent before each report, stating what will and will not be covered.
                2. Reliance and limitations wording reviewed by a lawyer and stored as standard text.
                3. An external checker arranged for reports above a defined risk level.
                4. Issued reports, scope letters and check records retained for the period your insurer advises.

                ## Notes
                Ask your professional indemnity insurer and a lawyer about wording and retention periods. Do not copy limitations clauses from another firm's reports.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A scope letter format, lawyer-reviewed limitations wording, an external checker arrangement and a retention rule are in place and used on the next report."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Draft a one-page scope confirmation for report commissions"
                - "Ask a lawyer to review your reliance and limitations wording"
                - "Agree an external checker for higher-risk reports"
                - "Ask your insurer how long to keep reports and check records"
            - name: Multi-discipline report with several authors
              description: |-
                ## Purpose
                A report with civil, mechanical, electrical and process sections written by different people often reads like four reports stapled together, with contradictory assumptions and different terms for the same equipment. A lead author who sets the outline, shared assumptions, section owners, a style and an integration pass makes it read as one document.

                ## Milestones
                1. A lead author named and an outline agreed with section owners and page budgets.
                2. One shared assumptions and terms list used by every section.
                3. Section drafts due on staggered dates, with time for an integration pass.
                4. The integrated draft read end to end by one person for contradictions before checking.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A multi-author report is issued with a single assumptions list, consistent terms and an integration pass recorded before checking."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Agree the outline, section owners and page budgets at a kick-off"
                - "Publish a shared assumptions and terms list for all authors"
                - "Set staggered section deadlines with a week for integration"
                - "Read the integrated draft end to end for contradictions"
            - name: Taking over a half-written report
              description: |-
                ## Purpose
                Colleagues leave, get reassigned or fall ill mid-report, and you inherit a draft, a folder of data and a deadline. A short handover routine (find what the requester expects, trace the draft's sources, list what is assumed and what is unchecked, and agree a new date honestly) avoids issuing someone else's guesses under your name.

                ## Milestones
                1. The requester's expectations and date confirmed directly, not inferred from the draft.
                2. Every number in the draft traced to a source or marked unverified.
                3. A list of open questions sent to the previous author while they are still reachable.
                4. A realistic new issue date agreed with the requester.

                ## Notes
                If you cannot verify part of the work, either redo it or say clearly in the report what you have not checked.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An inherited report has every number traced or marked unverified, open questions answered by the previous author, and a new date agreed."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Call the requester to confirm what they expect and when"
                - "Trace every number in the draft to a source or mark it unverified"
                - "Send open questions to the previous author this week"
                - "Agree a realistic new issue date with the requester"
            - name: Regulator submission and safety case summaries
              description: |-
                ## Purpose
                Documents that go to a regulator or form part of a safety case are read by specialists looking for gaps, claims without evidence and commitments the operator must later meet. Writing them with a clear claim and evidence structure, every commitment listed, and the regulator's own guidance followed for format reduces requests for information and the delay they bring.

                ## Milestones
                1. The regulator's current guidance on format and content for this type of submission read and noted.
                2. Each claim paired with the evidence that supports it and its reference.
                3. A commitments register listing every action the operator promises, with owner and date.
                4. An internal challenge review held by someone not involved in the work.

                ## Notes
                Never promise in a submission what operations have not agreed to do. Commitments made to a regulator are tracked and audited.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A submission is issued that follows the regulator's guidance, pairs every claim with referenced evidence and includes an agreed commitments register."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Download the regulator's current guidance for this submission type"
                - "Map each claim to its evidence and reference in a table"
                - "List every commitment with an owner and date and agree it with operations"
                - "Arrange a challenge review by someone outside the project"
            - name: Expert engineering report for a dispute
              description: |-
                ## Purpose
                When an engineer is asked to write an expert report for arbitration, adjudication or court, the duty usually runs to the tribunal rather than the client who pays, and the report will be cross-examined line by line. Understanding the procedural rules that apply, keeping strictly to your expertise, and separating facts, assumptions and opinions protects your credibility and the process.

                ## Milestones
                1. The instructing lawyer's letter of instruction and the applicable procedural rules for experts read.
                2. The questions you are asked to answer listed exactly as instructed.
                3. Facts, assumptions and opinions separated, with every document relied on listed.
                4. A statement of independence and of the limits of your expertise included in the form the rules require.

                ## Notes
                Take the instructing lawyer's guidance on format and the declarations the rules require. If a question falls outside your expertise, say so rather than stretching.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "An expert report answers each instructed question, separates fact from opinion, lists all documents relied on and includes the declarations the rules require."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Ask the instructing lawyer for the procedural rules that apply to experts"
                - "List the questions exactly as instructed"
                - "Build a register of every document you rely on"
                - "Mark each paragraph of the draft as fact, assumption or opinion"
            - name: Conference or journal paper from project work
              description: |-
                ## Purpose
                Good project work often deserves a wider audience, and a conference paper builds an engineer's reputation and sharpens their writing for a demanding reader. Turning a project report into a paper means getting client and company permission, finding the general lesson, cutting confidential detail and meeting the venue's format and review process.

                ## Milestones
                1. Written permission from the client and your employer to publish, with any confidentiality limits.
                2. A target conference or journal chosen and its author guidelines and dates noted.
                3. An abstract accepted or a full paper submitted.
                4. Reviewer comments answered and a final paper accepted.
              priority: low
              deadlineOffsetDays: 240
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A paper based on project work, with written client and employer permission, is accepted by a conference or journal."
                cadence: phased
                effort_hours_estimate: "50"
              tasks:
                - "Ask the client and your manager for permission to publish"
                - "Pick a conference or journal and note its author guidelines and dates"
                - "Write a 300-word abstract that states the general lesson"
                - "Remove or anonymise confidential data before submission"
            - name: Team report writing guide and short course
              description: |-
                ## Purpose
                An experienced engineer who has improved their own reports can multiply the effect by giving the team a written guide and a short internal course. Four ninety-minute sessions built around the team's own reports, with the house template, summaries, figures and conclusions as the topics, change a team's output more than any external workshop.

                ## Milestones
                1. A guide of ten pages or fewer covering structure, summaries, figures, conclusions, style and review.
                2. Four sessions planned, each using anonymised examples from the team's own reports.
                3. The course run with at least six attendees and feedback collected.
                4. The guide and course materials stored with the house template and given an owner.
                5. Comments per page on the team's reports compared before and after six months.

                ## Notes
                Start from the **Course** template. Real before and after examples from your own team teach more than any textbook case.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A team writing guide is published and a four-session course has been delivered to at least six engineers with feedback recorded."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Outline the guide in ten headings from this area's projects"
                - "Collect and anonymise six example sections from team reports"
                - "Plan four ninety-minute sessions with an exercise in each"
                - "Run the sessions and collect feedback from every attendee"
                - "Refresh the guide and rerun the course for new starters @recurring(yearly)"
---

# Engineering Report Writing

Engineering Report Writing is for engineers whose work ends up as a document someone else must read, trust and act on: study reports, design reports, inspection and test reports, technical notes and options papers. It opens with foundations (an honest audit of your own reports, a house template, a decision statement, numbering and sign-off), moves through the standing machinery of writing blocks, a report tracker, peer review and comment logs, then the core skills from executive summaries to uncertainty and referencing, the improvements and dated reports that test them, situations for graduates, second-language writers, reviewers and sole practitioners, and finally specialist work such as regulator submissions, expert reports and conference papers.

The rhythm is weekly for protected writing time, the report tracker and the running project notes, monthly for peer review swaps, review themes, reading and quality metrics, quarterly for the figure library and template refresh, and yearly for the standing guides. The Feedback themes, Reading queue, Metrics log, Purchase decision, Development plan and Course templates pair with the projects that need them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
