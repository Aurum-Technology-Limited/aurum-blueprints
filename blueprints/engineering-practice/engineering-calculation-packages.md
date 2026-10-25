---
id: engineering-practice.engineering-calculation-packages
name: Engineering Calculation Packages
description: "Calculations another engineer can check: a register, controlled inputs and assumptions, cited methods, independent checks, verified spreadsheets and tools, and a clean record from first issue to as-built."
category: business
version: 1.0.0
tags: [engineering-practice, engineering-calculation-packages, engineer, calculation-register, design-verification, spreadsheet-control, independent-checking, assumptions-log]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - metrics-log
    - operational-checklist
    - remediation-plan
    - development-plan
    - skills-matrix
  pillars:
    - name: Engineering Practice
      emoji: "🔧"
      description: "The day-to-day work of practising engineers: each major discipline, process safety and risk studies, FEED, design reviews, commissioning, reliability and maintenance, CAD, simulation and PLC work, project delivery, tenders, reports, ethics and standards, and the Caribbean energy sector from Point Lisas to LNG."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Engineering Calculation Packages
          description: "Producing calculations others can check: inputs and assumptions, methods and references, independent checks, spreadsheet controls and a calculation register."
          projects:
            - name: Calculation procedure and package format
              description: |-
                ## Purpose
                When every engineer lays out calculations their own way, checkers spend half their time hunting for the inputs and the client cannot tell a preliminary sizing from a final design check. A short procedure that fixes the package structure, the status codes, the checking rules and the issue route gives the whole team one way of working and something an auditor can test against.

                ## Milestones
                1. A procedure of no more than ten pages covering package structure, status codes, checking, approval and issue.
                2. A standard package order agreed: cover sheet, contents, purpose, inputs, assumptions, method, calculation, results, conclusions, appendices.
                3. The procedure reconciled with the client's quality requirements and the project quality plan.
                4. The procedure approved, numbered and issued to every discipline lead.

                ## Notes
                Borrow from the client's procedure if one exists and add only what your contract needs. Status codes that nobody can remember will not be used, so keep to four or five.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An approved calculation procedure with a document number is issued to every discipline lead within 30 days of starting."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Collect the client's calculation and verification requirements from the contract"
                - "Draft the package order and status codes on two pages"
                - "Circulate the draft to discipline leads for one round of comments"
                - "Issue the approved procedure through document control"
            - name: Calculation register for the project
              description: |-
                ## Purpose
                Ask most project teams how many calculations they have, which are checked and which depend on the pump vendor's data, and nobody can answer. A single register listing every calculation with its number, title, discipline, author, checker, revision, status and the drawings it supports turns that question into a filter and lets the lead see the whole set at once.

                ## Milestones
                1. A register with fixed columns for number, title, discipline, author, checker, revision, status, holds and supported deliverables.
                2. Every existing calculation on the project entered, including preliminary and superseded ones.
                3. Each calculation linked to the drawings and datasheets that rely on its results.
                4. The register hosted where every discipline can read it and only named people can edit it.

                ## Notes
                Number calculations from the project numbering system, not from a private sequence. A register kept in one engineer's personal spreadsheet dies when that person goes on leave.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A shared register lists every calculation on the project with status, checker and linked deliverables filled in for each row."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Agree the register columns with the lead engineer"
                - "Gather every calculation file from discipline folders and email"
                - "Enter each calculation with its current revision and status"
                - "Link each calculation to the drawings and datasheets that use it"
            - name: Standard calculation cover sheet and revision block
              description: |-
                ## Purpose
                The cover sheet is the one page an approver, a client reviewer and a future engineer will always read, so it should answer what this calculation is for, what revision it is, who checked it and what it concludes. A standard sheet with a revision block, signature boxes and a holds summary stops packages going out with blank checker fields or a conclusion buried on page forty.

                ## Milestones
                1. A one-page cover sheet with project, calculation number, title, purpose, revision table and holds summary.
                2. Separate author, checker and approver boxes with name, date and signature for every revision.
                3. A short conclusions box stating the governing result and its acceptance criterion.
                4. The sheet loaded into the template set and used on the next three calculations issued.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A controlled cover sheet template is in use, and the next three issued calculations carry complete author, checker and approver entries."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Collect three cover sheets from past projects and mark what each lacks"
                - "Draft a one-page sheet with revision table and signature boxes"
                - "Add a conclusions box and a holds summary line"
                - "Load the sheet into the shared template folder"
            - name: Design input register with sources
              description: |-
                ## Purpose
                Most calculation errors that reach site start as a wrong input, such as an old design pressure, a superseded soil report or a vendor weight from the bid stage. An input register that records every value, its units, its source document and revision, and who confirmed it lets a checker verify inputs in minutes and lets the team find every calculation affected when a source changes.

                ## Milestones
                1. An input register with columns for parameter, value, units, source document, revision, status and owner.
                2. The design basis, process data, site data and vendor data inputs for each discipline entered.
                3. Each input marked as confirmed, preliminary or assumed.
                4. Every active calculation referencing its inputs by register line rather than retyping values.

                ## Notes
                Record the document and revision, not just the document title. A value with no traceable source belongs in the assumptions log, not the input register.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every active calculation draws its inputs from a register line that names a source document and revision."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List the source documents each discipline relies on with current revisions"
                - "Extract the key design values into the register with units"
                - "Mark each value as confirmed, preliminary or assumed"
                - "Replace retyped inputs in two live calculations with register references"
            - name: Assumptions log with verification status
              description: |-
                ## Purpose
                Early calculations rest on assumptions about equipment weights, flow cases, ground conditions or cable lengths, and the danger is not the assumption but forgetting it was one. A log that gives each assumption a number, a reason, an owner and a date to confirm it keeps preliminary results honestly labelled until the real data arrives.

                ## Milestones
                1. A numbered assumptions log with the reason, owner, affected calculations and target confirmation date for each entry.
                2. Every open assumption cross-referenced on the cover sheet of the calculations that use it.
                3. Assumptions closed only with a reference to the document that confirmed or replaced them.
                4. No calculation issued for construction while it still carries an open assumption without the lead's written acceptance.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "An assumptions log exists in which each open assumption has an owner and target date, and closed ones cite the confirming document."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read through live calculations and pull out every stated or hidden assumption"
                - "Number each assumption and give it an owner and target date"
                - "Note the assumption numbers on each affected cover sheet"
                - "Review open assumptions with their owners and close any now confirmed @recurring(monthly:20)"
            - name: Units, sign conventions and rounding rules
              description: |-
                ## Purpose
                Mixed units cause some of the most expensive calculation failures on record, and teams that span SI and US customary practice, or that inherit vendor data in both, meet the risk every week. One page that fixes the unit system, the sign conventions for loads and moments, the gauge or absolute pressure rule and how many figures to carry ends a whole class of check comments.

                ## Milestones
                1. A one-page rule setting the project unit system and the conversions allowed at the boundary.
                2. Sign conventions defined for loads, moments, flows and coordinates, with a sketch.
                3. A rule for gauge versus absolute pressure and for temperature differences.
                4. Rounding rules stating that intermediate values keep full precision and only reported results are rounded.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page units and conventions rule is issued and referenced in the calculation procedure."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the unit systems that appear in client, vendor and site data"
                - "Draft the conventions page with a sign sketch for each discipline"
                - "Add a gauge and absolute pressure rule with an example"
                - "Attach the page to the calculation procedure as an appendix"
            - name: Method references cited by edition and clause
              description: |-
                ## Purpose
                A calculation that says it follows the code is uncheckable until it says which code, which edition and which clause. Building a short list of the methods, textbooks and standards the project calculations rely on, each with its edition, makes citations consistent and shows a checker straight away when someone has used an old equation.

                ## Milestones
                1. A list of the standards, textbooks and design guides used in project calculations, each with its edition or year.
                2. Each entry marked as contractually required or chosen by the engineer.
                3. A citation format agreed that names document, edition and clause or equation number.
                4. The list confirmed against the editions named in the project specification.

                ## Notes
                Which editions apply is set by the contract and the authority having jurisdiction. The codes and standards compliance work decides that; this list records how calculations cite it.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A method reference list with editions is issued, and new calculations cite references by edition and clause."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Scan live calculations and list every reference they cite"
                - "Fill in the edition or year for each reference"
                - "Mark which references the contract requires"
                - "Check cited editions against the current project specification @recurring(yearly)"
            - name: Checker independence and competence rules
              description: |-
                ## Purpose
                A check done by the author's desk neighbour who helped set up the spreadsheet is not an independent check, however carefully it is signed. Rules that say who may check which kind of calculation, what independence means for each risk level and when a check must be done by another office or a third party protect the people signing as much as the design.

                ## Milestones
                1. Checking categories defined, from simple routine checks to fully independent verification by alternative method.
                2. An independence rule for each category stating who may and may not act as checker.
                3. A list of approved checkers by discipline and calculation type.
                4. The rules written into the calculation procedure and agreed by the engineering manager.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written checker rules and an approved checker list are in the procedure, and every register entry names a checker allowed by those rules."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Define three or four checking categories with examples of each"
                - "Write the independence rule for each category"
                - "Draft the approved checker list with discipline leads"
                - "Assign an allowed checker to every open calculation in the register"
            - name: Calculation software and spreadsheet inventory
              description: |-
                ## Purpose
                Few teams can list which analysis programs, add-ins and in-house spreadsheets their calculations depend on, let alone which versions have been tested. An inventory that records each tool, its version, its owner and whether it has been validated shows where the hidden risk sits and is usually the first thing a quality auditor asks for.

                ## Milestones
                1. An inventory of every commercial program, script and spreadsheet used for design calculations.
                2. Version, licence holder, owner and validation status recorded for each tool.
                3. Tools with no validation evidence flagged and ranked by how many calculations rely on them.
                4. A rule agreed that unlisted tools may not be used for issued calculations.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A tool inventory lists every calculation tool in use with version, owner and validation status, and unvalidated tools are ranked for action."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask each discipline lead for the tools their calculations use"
                - "Record version, owner and licence for each tool"
                - "Mark each tool as validated, partly validated or untested"
                - "Rank the untested tools by number of dependent calculations"
            - name: Weekly calculation register update
              description: |-
                ## Purpose
                Left a fortnight stale, the register gives the lead false comfort and gives the client a status report that is already wrong. Fifteen minutes each Monday to update revisions, statuses and holds keeps the register the place everyone looks first, and catches calculations that have quietly stalled at the checker.

                ## Milestones
                1. The register updated every week with revisions, status changes and new calculations.
                2. Calculations waiting more than ten working days at any stage highlighted.
                3. New calculations numbered before work starts, not after issue.
                4. A dated snapshot of the register kept each month for progress reporting.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The register shows an update date within the last seven days on every week of the project, with stalled calculations flagged."
                cadence: rolling
              tasks:
                - "Update revisions, statuses and holds in the calculation register @recurring(weekly:mon)"
                - "Highlight calculations stuck more than ten working days at one stage"
                - "Number any new calculation requests before work begins"
                - "Save a dated register snapshot for the monthly report @recurring(monthly:2)"
            - name: Input change impact review
              description: |-
                ## Purpose
                When the process licensor revises the heat and material balance or a vendor sends certified weights, the calculations that used the old values do not update themselves. A weekly look at changed source documents against the input register shows which calculations are now out of date before their results reach a drawing issue.

                ## Milestones
                1. Changed source documents identified each week from transmittals and the document register.
                2. Each changed input traced to the calculations that use it through the input register.
                3. Affected calculations flagged in the calculation register with a reason and owner.
                4. Revised calculations issued or a written note that the change has no effect.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every changed source document in the period has a recorded impact decision against the calculations that use it."
                cadence: rolling
              tasks:
                - "Check the week's transmittals for revised source documents @recurring(weekly:wed)"
                - "Trace each changed value to the calculations that use it"
                - "Flag affected calculations with an owner in the register"
                - "Record a no-impact note where the change does not alter a result"
            - name: Holds and open items chase
              description: |-
                ## Purpose
                Holds on calculations, such as awaiting vendor nozzle loads or a geotechnical report, block drawings downstream, and they rarely clear on their own. A weekly chase of each hold with the person who can release it keeps the hold list short and gives the project manager evidence when a vendor is late.

                ## Milestones
                1. Every hold listed with what is awaited, from whom, and the date requested.
                2. Each hold chased weekly with a recorded response.
                3. Holds older than four weeks escalated to the project engineer.
                4. Holds cleared with a reference to the document that resolved them.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No hold on the calculation list is more than seven days without a recorded chase, and holds older than four weeks have been escalated."
                cadence: rolling
              tasks:
                - "Chase each open calculation hold with the person who can release it @recurring(weekly:thu)"
                - "Record the response and next date against each hold"
                - "Escalate holds older than four weeks to the project engineer"
                - "Close released holds with the resolving document reference"
            - name: Check comment and back-check routine
              description: |-
                ## Purpose
                Checks stall in two places: the checker's inbox and the author's response to comments. A routine where checks are logged with a due date, comments are numbered and each response is back-checked by the same checker keeps calculations moving and leaves a record that every comment was resolved.

                ## Milestones
                1. Every check request logged with checker, date sent and due date.
                2. Check comments numbered and recorded with the author's response alongside.
                3. Each response back-checked and marked accepted or reopened by the original checker.
                4. No calculation moved to approved while a comment remains open.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each checked calculation has a numbered comment sheet in which every comment is marked accepted by the checker before approval."
                cadence: rolling
              tasks:
                - "Sweep the check backlog and chase any check past its due date @recurring(weekly:tue)"
                - "Set up a numbered comment sheet for each new check"
                - "Send responses back to the original checker for back-check"
                - "Block approval on any calculation with an open comment"
            - name: Monthly calculation status report
              description: |-
                ## Purpose
                Project managers measure engineering by drawings, but drawings cannot issue until the calculations behind them are approved. A monthly one-page report of calculations planned, started, checked and approved, with the holds that block them, makes calculation progress visible and gets late vendor data the attention it needs.

                ## Milestones
                1. A one-page report counting calculations by status for each discipline.
                2. Planned versus actual approvals shown against the engineering schedule.
                3. The top five holds and their effect on drawing issue listed.
                4. The report issued to the project engineer by the same day each month.

                ## Notes
                Start from the **Metrics log** template. Count approved calculations, not percent complete guesses from authors.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A status report with counts by discipline, planned versus actual and top holds is issued every month of the design phase."
                cadence: rolling
              tasks:
                - "Count calculations by status for each discipline from the register"
                - "Compare approvals against the engineering schedule plan"
                - "List the five holds with the biggest effect on drawing issue"
                - "Issue the calculation status report to the project engineer @recurring(monthly:25)"
            - name: Spreadsheet protection and change log checks
              description: |-
                ## Purpose
                Protected calculation spreadsheets become unprotected the first time someone needs to fix a formula in a hurry, and then stay that way. A monthly spot check of a few controlled spreadsheets for protection, version number and change log entries finds the drift before an altered formula reaches an issued package.

                ## Milestones
                1. Three controlled spreadsheets spot checked each month for protection, version and change log.
                2. Each finding recorded with the file, the problem and who fixed it.
                3. Unrecorded formula changes traced back and verified against the validated version.
                4. Repeat findings raised with the tool owner and the lead engineer.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A spot check log shows three controlled spreadsheets checked each month, with every finding closed or escalated."
                cadence: rolling
              tasks:
                - "Pick three controlled spreadsheets and check protection and version @recurring(monthly:12)"
                - "Compare formulas in each against the validated master copy"
                - "Log each finding with the file and the fix"
                - "Raise repeat findings with the tool owner"
            - name: Vendor data confirmation of preliminary calculations
              description: |-
                ## Purpose
                Foundations, pipe supports, cable sizes and relief loads are often calculated from bid-stage vendor data and never revisited once certified data arrives. Comparing each incoming certified vendor document against the values used in calculations closes that gap and turns preliminary results into confirmed ones.

                ## Milestones
                1. A list of calculations that depend on vendor data, with the vendor document awaited for each.
                2. Each certified vendor document compared against the values used, with differences recorded.
                3. Calculations revised where the difference exceeds the margin assumed.
                4. Preliminary status removed only after the comparison is recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every vendor-dependent calculation has a recorded comparison against certified vendor data before its preliminary status is removed."
                cadence: rolling
              tasks:
                - "List the calculations that rely on bid-stage vendor data"
                - "Compare newly received certified vendor documents with calculation inputs @recurring(monthly:18)"
                - "Record each difference and whether it exceeds the assumed margin"
                - "Revise or confirm each affected calculation"
            - name: Quarterly sample audit of issued calculations
              description: |-
                ## Purpose
                Checks catch errors in what the checker looked at; audits catch what the system let through. Pulling a small random sample of issued calculations each quarter and testing them against the procedure, from cover sheet to cited clauses, shows whether the rules are being followed and where the team needs a refresher.

                ## Milestones
                1. A random sample of five issued calculations drawn from the register each quarter.
                2. Each sampled package audited against a fixed list of procedure requirements.
                3. Findings graded by significance and sent to the authors and lead.
                4. A short trend note comparing this quarter's findings with the last.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Four quarterly audit records each year show five sampled calculations audited, findings graded and a trend note written."
                cadence: cyclic
              tasks:
                - "Draw five issued calculations at random from the register @recurring(quarterly)"
                - "Audit each against the procedure requirement list"
                - "Grade findings and send them to authors and the lead"
                - "Write a trend note against the previous quarter"
            - name: Yearly re-validation of calculation tools
              description: |-
                ## Purpose
                Software updates change solvers, default settings and code checks, and a spreadsheet validated three operating system versions ago may behave differently today. Re-running each tool's validation cases once a year, and after any major update, keeps the validation evidence current rather than historical.

                ## Milestones
                1. A set of validation cases with known answers held for each tool in the inventory.
                2. The cases re-run on the current version of each tool, with results compared.
                3. Any difference outside tolerance investigated and resolved before further use.
                4. The inventory updated with the date and version of each re-validation.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every tool in the inventory has a re-validation record dated within the last twelve months for its current version."
                cadence: cyclic
              tasks:
                - "Re-run validation cases for every tool in the inventory @recurring(yearly)"
                - "Read release notes for tools updated this quarter and flag changes to solvers @recurring(quarterly)"
                - "Investigate any result outside the validation tolerance"
                - "Record the re-validation date and version in the inventory"
            - name: Writing a calculation a stranger can follow
              description: |-
                ## Purpose
                The test of a calculation is whether an engineer who has never met you can pick it up in ten years and understand what was done and why. Learning to state the purpose, show the governing case, carry units through every line and write a plain conclusion is the single skill that makes checking quicker and calculations defensible.

                ## Milestones
                1. Three well-regarded calculations from senior engineers read and annotated for what makes them clear.
                2. A personal checklist of six or so habits drawn from them, such as units on every line and a sketch for every geometry.
                3. One of your own past calculations rewritten to the checklist.
                4. The rewrite read by a colleague from another discipline who can explain its conclusion back.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A rewritten calculation is explained back correctly by an engineer from another discipline without help from the author."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask a senior engineer for three calculations they consider well written"
                - "Annotate what makes each one easy to follow"
                - "Rewrite one of your own calculations using those habits"
                - "Ask a colleague from another discipline to explain your conclusion back"
            - name: Hand calculations and order of magnitude checks
              description: |-
                ## Purpose
                Software will produce an answer to six decimal places for a model with the wrong units or a missing load case. Being able to estimate the answer on one page before trusting the output, a beam moment, a pressure drop, a fault current, is what lets an engineer spot the result that is wrong by a factor of ten.

                ## Milestones
                1. A set of ten quick estimation methods for your discipline written on a single reference sheet.
                2. Each method tried against a past software result, with the difference noted.
                3. A habit of writing the expected range before running any software calculation.
                4. At least one software result questioned and corrected because of a hand estimate.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page estimation sheet exists and ten methods on it have been compared with past software results."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List ten results in your discipline you should be able to estimate by hand"
                - "Write the quick method for each on one reference sheet"
                - "Compare each estimate with a past software result"
                - "Write an expected range before your next software run"
            - name: Checking by an alternative method
              description: |-
                ## Purpose
                Re-running the author's spreadsheet with the author's inputs checks arithmetic, not engineering. Learning to check a governing result by a different route, a simpler model, a different code clause, a hand method or a bounding case, is what independent verification really means and finds the errors a line-by-line check misses.

                ## Milestones
                1. The difference between arithmetic checking, line checking and alternative method checking written down with examples.
                2. Two calculations checked by an alternative method under a senior checker's supervision.
                3. The tolerance for agreement between methods agreed and recorded for each.
                4. A short note on what the alternative method found that a line check would not have.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two calculations have been checked by an alternative method with agreement tolerances recorded and reviewed by a senior checker."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Ask a senior checker which alternative methods they use in your discipline"
                - "Choose two current calculations suited to an alternative method check"
                - "Agree a tolerance for agreement before starting each check"
                - "Write up what the alternative method revealed"
            - name: Dimensional analysis and unit consistency drill
              description: |-
                ## Purpose
                Most unit errors are caught by anyone who writes the units on every line and checks they cancel, yet under pressure engineers drop them first. A short drill on dimensional analysis, empirical equations with hidden unit constants and conversion factors makes the habit automatic and shows where your own discipline's traps lie.

                ## Milestones
                1. The empirical equations in your discipline that only work in specific units listed.
                2. Ten past check comments or incidents involving units reviewed for their cause.
                3. A habit of carrying units symbolically through software that supports it.
                4. A personal list of the conversion factors you have got wrong before.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written list of unit-sensitive empirical equations for your discipline exists, with ten past unit errors reviewed for cause."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the empirical equations in your work that hide unit constants"
                - "Review ten past unit-related check comments for their cause"
                - "Try a units-aware tool on one current calculation"
                - "Write your personal list of risky conversions"
            - name: Sensitivity of results to uncertain inputs
              description: |-
                ## Purpose
                Wall thicknesses or cable sizes that only pass because an uncertain input happens to sit at its optimistic end are weak results, even if the arithmetic is perfect. Learning to vary the uncertain inputs, find which ones govern and report the margin shows reviewers how much the conclusion depends on data that might still change.

                ## Milestones
                1. The uncertain inputs of one live calculation identified with a plausible range for each.
                2. Each input varied across its range and the change in the governing result recorded.
                3. The two or three inputs that drive the result named on the cover sheet.
                4. A conclusion that states the margin and the input value at which the design would fail the criterion.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One issued calculation carries a sensitivity table naming its governing inputs and the margin to the acceptance criterion."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose a live calculation with several uncertain inputs"
                - "Agree a plausible range for each uncertain input"
                - "Vary each input and record the change in the result"
                - "Add the governing inputs and margin to the cover sheet"
            - name: Spreadsheet calculation design principles
              description: |-
                ## Purpose
                Engineering spreadsheets fail in predictable ways: inputs typed into formula cells, hidden columns, hard-coded constants and copy-down errors that nobody sees. Learning the layout that separates inputs, calculation and results, labels every cell with units and makes the formulas readable turns a personal tool into one a checker can verify.

                ## Milestones
                1. A layout rule written down: inputs, calculation and results on separate, clearly coloured areas.
                2. Every constant moved to a named, referenced input cell rather than hidden in formulas.
                3. Units shown beside every value and every formula readable without unhiding anything.
                4. One of your existing spreadsheets rebuilt to the rules and checked by a colleague.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One personal spreadsheet has been rebuilt to written layout rules and checked by a colleague without needing an explanation."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write a half-page layout rule for engineering spreadsheets"
                - "Pick one of your spreadsheets and list where it breaks the rule"
                - "Rebuild it with named inputs and visible formulas"
                - "Ask a colleague to check it cold"
            - name: Calculation notebooks in Mathcad, SMath or Jupyter
              description: |-
                ## Purpose
                Worksheet tools that show equations as equations, with units carried through, are far easier to check than a grid of cell references. Learning one well enough to produce an issued calculation, with inputs, method and results that print cleanly, gives you a format checkers often prefer and makes reuse much safer.

                ## Milestones
                1. One worksheet tool chosen based on what the team can open and check.
                2. Its handling of units, functions and printing practised on a small known calculation.
                3. A real calculation produced in the tool, matching an existing hand or spreadsheet result.
                4. The worksheet checked by a colleague and issued under the normal procedure.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A calculation produced in a worksheet tool has been checked and issued under the project procedure with matching results."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask the team which worksheet tools checkers can already open"
                - "Rework a small known calculation in the chosen tool"
                - "Produce a live calculation in it and compare with the existing result"
                - "Submit it for check under the normal procedure"
            - name: Reading and quoting code clauses correctly
              description: |-
                ## Purpose
                Code clauses come with conditions, exceptions and referenced tables, and a calculation that quotes an equation without them can be confidently wrong. Practising how to read a clause in full, follow its cross-references and quote it with edition and conditions makes your calculations stand up to a sceptical checker.

                ## Milestones
                1. Three clauses you use often read in full, with every condition and cross-reference noted.
                2. A short note for each on the cases where the clause does not apply.
                3. Your recent calculations reviewed for clauses quoted without their conditions.
                4. A standard way of quoting a clause adopted: document, edition, clause, equation and conditions met.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three frequently used clauses have written notes on their conditions, and recent calculations quote them with edition and conditions."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick the three code clauses you use most often"
                - "Read each in full and note every condition and cross-reference"
                - "Review your recent calculations for missing conditions"
                - "Adopt one quoting format for all future calculations"
            - name: Choosing a calculation tool platform
              description: |-
                ## Purpose
                Buying a worksheet or analysis tool commits the team to its file formats, licence model and checking workflow for years. Comparing two or three candidates against the same criteria, including whether checkers and clients can open the files and how versions are controlled, avoids choosing on the strength of one enthusiastic demo.

                ## Milestones
                1. Requirements written: calculation types, units handling, printing, version control, licence and client access.
                2. Three candidate tools shortlisted with prices and licence terms.
                3. Each candidate trialled on the same two representative calculations.
                4. A decision recorded with the scoring, cost and a rollout plan.

                ## Notes
                Start from the **Purchase decision** template. Check whether the client must be able to open native files, because PDF-only submission changes the answer.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision scores three tools against written requirements using the same two trial calculations."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Write the requirements list with the discipline leads"
                - "Shortlist three tools and request trial licences"
                - "Run the same two calculations in each tool"
                - "Record the scores, cost and recommendation"
            - name: Template library for repeat calculations
              description: |-
                ## Purpose
                Every project redoes the same pipe wall thickness, cable sizing, lifting lug, footing and line sizing calculations, each time in a slightly different spreadsheet. A small library of controlled templates for the twenty most repeated calculations saves hours per job and means the method has been checked once, properly.

                ## Milestones
                1. The twenty most repeated calculations identified from past project registers.
                2. A preferred method and reference chosen for each, agreed with the discipline lead.
                3. Templates built, validated against worked examples and given version numbers.
                4. The library published with a rule that projects start from it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A published library holds at least ten validated, versioned templates for the most repeated calculations."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Count repeated calculation types across three past project registers"
                - "Agree the preferred method for the top ten with discipline leads"
                - "Build and validate the first five templates"
                - "Ask the agent to draft a one-page user guide for each template"
            - name: Verified spreadsheet library under version control
              description: |-
                ## Purpose
                Controlled spreadsheets drift when copies live on laptops and project drives with no master. Keeping a single read-only master of each verified spreadsheet, with versions, a change log and a named owner, means engineers always start from the checked copy and an auditor can see the history of every change.

                ## Milestones
                1. A single read-only location holding the master copy of every verified spreadsheet.
                2. Each master carrying a version number, owner and change log tab.
                3. A change route agreed: request, edit, re-validate, check, release.
                4. Old copies on project drives replaced by links to the master.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "All verified spreadsheets sit in one read-only master location with versions and change logs, and old project copies are replaced."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Set up a read-only master folder with named owners"
                - "Move each verified spreadsheet in with a version and change log"
                - "Write the change request and re-validation route"
                - "Review the library for stale versions and open change requests @recurring(quarterly)"
            - name: Bringing legacy spreadsheets under control
              description: |-
                ## Purpose
                Every office has a spreadsheet written by someone who left years ago that is still used on every job and that nobody fully understands. Working through these one at a time, documenting what each does, testing it against known answers and either validating, rebuilding or retiring it, removes a quiet but real source of risk.

                ## Milestones
                1. Legacy spreadsheets in regular use listed with how often each is used.
                2. The three most used documented with method, references and limits.
                3. Each tested against independent worked examples and the results recorded.
                4. A decision taken for each: validate as is, rebuild or retire.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The three most used legacy spreadsheets each have documentation, test results and a recorded validate, rebuild or retire decision."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "List legacy spreadsheets still used on current projects"
                - "Document the method and limits of the most used one"
                - "Test it against two independent worked examples"
                - "Record a validate, rebuild or retire decision"
            - name: Graded checking levels by calculation risk
              description: |-
                ## Purpose
                Treating a handrail check and a pressure relief load calculation the same way wastes senior checkers on trivia and gives the dangerous work too little attention. A grading that sets checking depth by consequence of error and novelty of method puts the independent checks where a mistake would hurt people or cost a rebuild.

                ## Milestones
                1. Grading criteria agreed: consequence of error, novelty of method, use of software, reuse of a validated template.
                2. Three or four checking levels defined, each with the depth of check and checker seniority required.
                3. Every calculation in the register assigned a level.
                4. The grading tested on a past project and adjusted where it gave odd results.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written grading assigns a checking level to every calculation in the register, tested against one past project."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Draft the grading criteria with the engineering manager"
                - "Define the checking depth for each level"
                - "Grade every calculation currently in the register"
                - "Test the grading against a completed project's calculations"
            - name: Self-check before submitting for check
              description: |-
                ## Purpose
                Many check comments are things the author could have caught: missing units, an unfilled cover sheet, a wrong revision of an input. A short self-check list run before every submission cuts the round trips with the checker and frees checking time for the engineering questions that matter.

                ## Milestones
                1. The last fifty check comments sorted into types to find the avoidable ones.
                2. A self-check list of no more than twelve items built from them.
                3. The list attached to every package submitted for check for one quarter.
                4. Comment counts per calculation compared before and after.

                ## Notes
                Start from the **Operational checklist** template. Keep it short enough to run in ten minutes or it will be ticked without being read.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Average check comments per calculation fall after one quarter of using a written self-check list, measured against the previous quarter."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Sort the last fifty check comments by type"
                - "Build a twelve-item self-check list from the avoidable types"
                - "Attach the completed list to every package submitted for check"
                - "Compare comment counts per calculation after one quarter"
            - name: Script-based calculations under version control
              description: |-
                ## Purpose
                Calculations written in Python or similar scripts are easy to rerun when inputs change, but only trustworthy if the exact code version behind each issued result can be recovered. Putting scripts, input files and test cases under version control, with each issued calculation tied to a tagged release, gives scripting its speed without losing traceability.

                ## Milestones
                1. A repository holding calculation scripts, input files and test cases.
                2. Each issued calculation recording the release tag of the code that produced it.
                3. Automated test cases with known answers run before each tagged release.
                4. A printable output format that a checker without the code can still follow.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every script-based issued calculation names a tagged code release whose test cases passed before release."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Move one calculation script and its inputs into a repository"
                - "Write two test cases with known answers"
                - "Tag a release and record the tag on the issued calculation"
                - "Design an output report a checker can follow without the code"
            - name: Calculation package for an authority submission
              description: |-
                ## Purpose
                Building control, a pressure equipment inspector, a class society or an environmental regulator will often want calculations as part of an approval, and they review against their own checklist rather than yours. Preparing the submission set to the authority's stated requirements, with a clear index and a named responsible engineer, avoids weeks lost to a returned application.

                ## Milestones
                1. The authority's submission requirements and checklist obtained and read.
                2. The calculations required assembled at approved status with a submission index.
                3. Each calculation cross-referenced to the drawings in the same submission.
                4. The package signed by the responsible engineer and submitted with a dated record.

                ## Notes
                Requirements for who may sign and seal calculations differ by country and authority. Confirm them with the authority or your professional body before assembling the set.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A complete calculation submission matching the authority's checklist is lodged by the target date with a dated submission record."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Obtain the authority's submission checklist and signing requirements"
                - "List the calculations needed and their current status"
                - "Build the submission index cross-referenced to drawings"
                - "Submit the signed package and file the dated receipt"
            - name: Calculations issued for construction with drawings
              description: |-
                ## Purpose
                Drawings issued for construction must rest on approved, final calculations, yet on a busy project they sometimes go out while the supporting calculation is still preliminary. Running a calculation check alongside each construction issue, so that no drawing leaves without its calculations at approved status and free of holds, closes one of the most common audit findings.

                ## Milestones
                1. Every drawing in the construction issue matched to its supporting calculations in the register.
                2. Each supporting calculation confirmed at approved status with no open holds or assumptions.
                3. Exceptions listed and accepted in writing by the lead engineer, or the drawing held back.
                4. The calculation revisions supporting the issue recorded on the transmittal.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "No drawing in the construction issue is released without its supporting calculations at approved status or a signed exception."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Pull the drawing list for the construction issue"
                - "Match each drawing to its supporting calculations in the register"
                - "Clear or formally accept every open hold and assumption"
                - "Record supporting calculation revisions on the transmittal"
            - name: Third-party verification of a calculation package
              description: |-
                ## Purpose
                Some designs need verification by an independent party, such as a class society, a notified body, an independent checking engineer or the client's verifier, who will raise questions you have to answer in writing. Preparing the package so the verifier can work without repeated requests, and running the query log tightly, shortens the verification and keeps the design schedule intact.

                ## Milestones
                1. The verifier's scope, deliverables and turnaround agreed in writing.
                2. A verification package issued with index, inputs, methods, software versions and validation evidence.
                3. A query log in which every verifier question has a numbered, dated response.
                4. A verification certificate or closure letter received and filed with the calculations.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The verifier's closure letter or certificate is received and every query in the log has a closed response."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Agree the verification scope and turnaround with the verifier"
                - "Assemble the package with software versions and validation evidence"
                - "Set up a numbered query and response log"
                - "File the closure letter with the calculation set"
            - name: Responding to a client comment round on calculations
              description: |-
                ## Purpose
                Client reviewers return calculations with comments ranging from typos to a challenge on the governing load case, and a careless response invites a second and third round. Sorting comments by type, answering each with a reference or a revision and agreeing the contentious ones in a short meeting gets the calculations to accepted status in one cycle.

                ## Milestones
                1. Every client comment logged with a number, type and owner.
                2. Each comment answered with agreement and revision, or a reasoned reply citing a reference.
                3. Disputed comments discussed with the client reviewer and the outcome minuted.
                4. Revised calculations issued with the response sheet and accepted by the client.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "All client comments on the calculation set have logged responses, and the client returns the set at accepted status within one further round."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Log every client comment with a number and owner"
                - "Sort comments into editorial, clarification and technical"
                - "Ask the agent to draft first replies to the editorial comments for your review"
                - "Hold a short call with the client reviewer on disputed comments"
            - name: As-built calculation update and handover set
              description: |-
                ## Purpose
                Plants change during construction through field changes, substitutions and vendor revisions, and the calculations handed to the owner should match what was built, not what was designed. Updating the affected calculations to as-built and handing over an indexed, searchable set gives the operator's engineers a starting point for every future modification.

                ## Milestones
                1. Field changes, substitutions and vendor revisions screened for effect on calculations.
                2. Affected calculations revised to as-built and checked.
                3. Superseded and preliminary calculations clearly marked as not for use.
                4. An indexed handover set with native files and PDFs accepted by the owner.

                ## Notes
                Agree the owner's retention period and file formats early. Native spreadsheet files are useless without a note of the software version that opens them.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "The owner accepts an indexed as-built calculation set in which every calculation affected by field changes has been revised and checked."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Collect field change and substitution records from construction"
                - "Screen each change for calculations it affects"
                - "Revise and check the affected calculations to as-built"
                - "Index the set and agree file formats with the owner"
            - name: Recovering from a calculation error found after issue
              description: |-
                ## Purpose
                Finding a significant error in a calculation that has already supported issued drawings, or equipment already built, is uncomfortable but normal; what matters is a calm, recorded response. Containing the error, finding everything it touched, informing the right people, correcting and checking the work and recording the cause protects people first and the firm's reputation second.

                ## Milestones
                1. The error confirmed by a second engineer and its potential consequence assessed.
                2. Every drawing, datasheet, purchase order and installed item affected identified.
                3. The lead engineer, client and any authority informed as the contract and law require.
                4. The corrected calculation checked independently and reissued with downstream documents.
                5. The cause recorded and a change made to stop it recurring.

                ## Notes
                Start from the **Remediation plan** template. If the error could affect the safety of something already operating, stop and escalate the same day; the paperwork can follow.
              priority: high
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A remediation record shows the error confirmed, every affected item identified, the correction independently checked and the cause recorded."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Ask a second engineer to confirm the error and its size"
                - "List every document and installed item that used the result @priority(high)"
                - "Inform the lead engineer and agree who tells the client"
                - "Record the cause and the change that prevents a repeat"
            - name: First calculation package as a graduate engineer
              description: |-
                ## Purpose
                A graduate's first calculation is usually a small, real piece of design, such as a support, a line size or a small foundation, and it sets habits for years. Taking it from a clear brief through inputs, method, checking comments and issue, with a supervisor walking alongside, teaches the procedure by doing rather than by reading it.

                ## Milestones
                1. A written brief from your supervisor stating purpose, inputs, acceptance criteria and due date.
                2. Inputs taken from the register and assumptions logged before calculating.
                3. The calculation submitted for check with a completed self-check list.
                4. Every check comment answered and the calculation issued at approved status.
                5. Three lessons from the comments written into your development record.

                ## Notes
                Start from the **Development plan** template. Ask for the brief in writing; half of a graduate's first comments come from solving a slightly different problem from the one intended.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: deliverable
                success_criteria: "Your first calculation is issued at approved status, with three lessons from its check comments recorded in your development plan."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Ask your supervisor for a written brief with acceptance criteria"
                - "Pull inputs from the register and log your assumptions"
                - "Run the self-check list before submitting for check"
                - "Write three lessons from the check comments in your development plan"
            - name: Becoming an approved calculation checker
              description: |-
                ## Purpose
                Moving from author to checker changes the job: you are now accountable for finding what someone else missed, often under time pressure from the person who asked you. Building a record of supervised checks, a personal checking method and sign-off from a senior checker gets you on the approved list with the confidence to reject a calculation when it deserves it.

                ## Milestones
                1. Five checks carried out under a senior checker who reviews your comments.
                2. A personal checking method written: what you check first, what you always recalculate, what you never accept without a source.
                3. At least one check where you raised a substantive engineering comment that changed the result or the method.
                4. Your name added to the approved checker list for agreed calculation types.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "You appear on the approved checker list for named calculation types after five supervised checks reviewed by a senior checker."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Ask a senior checker to supervise your next five checks"
                - "Write your personal checking method on one page"
                - "Compare your comments with the senior checker's after each check"
                - "Request addition to the approved checker list"
            - name: Lead engineer approval of discipline calculations
              description: |-
                ## Purpose
                As discipline lead, your approval signature says the calculation is the right calculation, done for the right cases, checked properly and consistent with the rest of the design. Setting up how you review for approval, what you read in full, what you sample and what you require from the checker lets you sign many calculations without signing blind.

                ## Milestones
                1. An approval review method written: purpose, governing cases, inputs, checker record and conclusions.
                2. A rule for which calculations you read in full and which you review by sample.
                3. An approval log recording what you reviewed for each calculation you signed.
                4. Interfaces with other disciplines confirmed for every calculation whose results they use.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every calculation you approve has an approval log entry stating what was reviewed and which interfaces were confirmed."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write your approval review method on one page"
                - "Decide which calculation types you always read in full"
                - "Start an approval log and fill it for each signature"
                - "Confirm interface results with the receiving discipline before approving"
            - name: Calculation control in a small consultancy
              description: |-
                ## Purpose
                In a practice of two to ten engineers there may be no second checker in the discipline, no document controller and no quality manager, but the duty to produce checked calculations is the same. A lean system using a simple register, a reciprocal checking arrangement with a trusted peer firm where needed and a monthly review keeps standards up without the overheads of a large firm.

                ## Milestones
                1. A single register covering every live job's calculations.
                2. An independent checking route for each discipline, inside the practice or through an agreed peer arrangement.
                3. Checking time priced into fee proposals as a visible line.
                4. Professional indemnity insurer requirements on checking and records confirmed and met.

                ## Notes
                A peer checking arrangement needs a short written agreement covering confidentiality, fees and liability. Agree it with your insurer before the first check.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every calculation issued by the practice has an independent checker recorded, and checking time appears as a line in fee proposals."
                cadence: rolling
              tasks:
                - "Set up one register covering every live job"
                - "Agree a written peer checking arrangement for disciplines with one engineer"
                - "Add a checking line to the fee proposal template"
                - "Review the register across all jobs for unchecked issues @recurring(monthly:28)"
            - name: Owner's engineer review of contractor calculations
              description: |-
                ## Purpose
                As the owner's or client's engineer you receive hundreds of contractor calculations and cannot recheck them all, yet you are expected to catch what matters. A review strategy that targets the governing, novel and safety-critical calculations, samples the rest and records what was and was not reviewed makes your effort count and keeps responsibility where the contract puts it.

                ## Milestones
                1. The contract's review obligations and the contractor's design responsibility read and summarised.
                2. Calculations ranked for review depth: full review, targeted review or receipt only.
                3. A review comment format with codes the contractor must respond to.
                4. A review record showing what was reviewed, to what depth, for every submission.

                ## Notes
                Review does not transfer design responsibility unless the contract says so. Word comments as questions or nonconformities with the specification, not as instructions to redesign.
              priority: high
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Every contractor calculation submission has a review record stating its review depth, and all full-review calculations have coded comments returned."
                cadence: rolling
              tasks:
                - "Summarise the contract's review obligations on one page"
                - "Rank the contractor's calculation list by review depth"
                - "Issue a coded comment format to the contractor"
                - "Record review depth for each submission as it is returned"
            - name: Reconstructing calculations for an existing asset
              description: |-
                ## Purpose
                Older plants and buildings often have no surviving design calculations, which makes every modification, rerate or extra load a question nobody can answer from the file. Rebuilding the key calculations from drawings, nameplates, site survey and the codes of the period, with every assumption stated, creates a design record the asset should always have had.

                ## Milestones
                1. The calculations needed for planned modifications identified and prioritised.
                2. Surviving drawings, nameplates, test certificates and survey data gathered and logged as inputs.
                3. Reconstructed calculations produced with original and current code bases stated.
                4. Every assumption that replaces missing data logged with how it could be confirmed.

                ## Notes
                State clearly which code edition the reconstruction uses and why. Confirming material grades or dimensions on site often costs less than the conservatism needed without them.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Reconstructed calculations for the priority items are checked and issued, each with its code basis and logged assumptions stated."
                cadence: phased
                effort_hours_estimate: "50"
              tasks:
                - "List the planned modifications that need a design record"
                - "Gather drawings, nameplates and certificates for those items"
                - "Agree the code basis for the reconstruction with the lead engineer"
                - "Plan a site survey for the inputs that are still missing"
            - name: Calculation error lessons register
              description: |-
                ## Purpose
                The same calculation errors recur across projects: the missed load case, the wrong corrosion allowance, the dropped unit conversion. Keeping a register of significant errors found at check, audit or after issue, with cause and the fix to the system, turns individual mistakes into better templates, checklists and training.

                ## Milestones
                1. A register of significant calculation errors with discipline, how found, cause and system fix.
                2. Errors classified by cause, such as input, method, software, arithmetic or interface.
                3. Each fix traced to a change in a template, checklist, procedure or training topic.
                4. A short quarterly summary shared with all discipline leads.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A lessons register with classified causes exists, and each entry links to a recorded change in a template, checklist or procedure."
                cadence: rolling
              tasks:
                - "Collect significant errors from check sheets and audit findings"
                - "Classify each by cause and how it was found"
                - "Link each entry to the system change it prompted"
                - "Share the lessons summary with discipline leads @recurring(quarterly)"
            - name: Validation test cases for in-house tools
              description: |-
                ## Purpose
                An in-house spreadsheet or script is only as trustworthy as the evidence that it gives the right answer across its range, including the awkward edge cases. Building a documented set of test cases from published worked examples, hand solutions and independent software, with tolerances, gives each tool a validation file that stands up in an audit or a dispute.

                ## Milestones
                1. Each in-house tool's intended range of use and limits written down.
                2. Test cases chosen that cover typical, boundary and invalid inputs.
                3. Expected answers sourced from published examples, hand solutions or independent software.
                4. A validation report per tool with results, tolerances and the version tested.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each in-house tool used for issued calculations has a validation report covering typical, boundary and invalid inputs for its current version."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Write the range of use and limits for one in-house tool"
                - "Choose typical, boundary and invalid test cases"
                - "Source expected answers from published worked examples"
                - "Write the validation report with version and tolerances"
            - name: Probabilistic and Monte Carlo calculation packages
              description: |-
                ## Purpose
                Reliability, risk and some structural and geotechnical assessments report a probability or a distribution rather than a single factor of safety, and they are much harder for a checker to follow. Setting out the input distributions, their sources, the sampling method, convergence checks and how the result is used gives a probabilistic calculation the same traceability as a deterministic one.

                ## Milestones
                1. Every uncertain input given a distribution with its source and justification.
                2. Correlations between inputs stated or explicitly assumed absent.
                3. Convergence of the result shown against the number of samples.
                4. A deterministic bounding case included so a checker can sense check the result.

                ## Notes
                A precise probability built on guessed distributions is still a guess. Show the effect of the least certain distribution on the result.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A probabilistic calculation is issued with sourced input distributions, a convergence plot and a deterministic bounding case."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "List the uncertain inputs and find a source for each distribution"
                - "State the correlations assumed between inputs"
                - "Run the sampling at increasing sample counts and plot convergence"
                - "Add a deterministic bounding case for the checker"
            - name: Technical review of calculations in a dispute
              description: |-
                ## Purpose
                When a failure, a claim or an insurance case turns on whether a calculation was reasonable, an engineer may be asked to review it for a lawyer, an insurer or a tribunal. Reviewing against the standards and information available at the time, keeping strictly within your competence and recording every document relied on, produces an opinion that survives cross-examination.

                ## Milestones
                1. The instructions, questions to answer and your duty to the tribunal or client confirmed in writing.
                2. Every document relied on listed with its source and date.
                3. The calculation reviewed against the codes and data available when it was done, not current ones.
                4. Findings written separately as facts, analysis and opinion, within your stated competence.

                ## Notes
                Expert duties and report formats are set by the court, tribunal or insurer. Confirm them with the instructing lawyer before starting work, and decline any question outside your field.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A review report is delivered that lists every document relied on and separates facts, analysis and opinion within stated competence."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Confirm instructions and the questions to answer in writing"
                - "Start a list of every document relied on with source and date"
                - "Identify the code editions in force when the calculation was done"
                - "Draft findings with facts, analysis and opinion kept separate"
            - name: Calculation checker competence framework
              description: |-
                ## Purpose
                Firms that do calculation checking well know which engineers are competent to check which calculation types, and can show it. A framework that defines checking competence by discipline and calculation type, records evidence for each checker and plans who needs developing makes the approved checker list defensible and plans succession for the senior checkers who will retire.

                ## Milestones
                1. Calculation types listed by discipline with the competence each requires to check.
                2. Each checker assessed against the types with evidence recorded.
                3. Gaps identified where only one checker covers a critical type.
                4. A development plan for each gap with a named engineer and target date.

                ## Notes
                Start from the **Skills matrix** template. One checker for a critical calculation type is a single point of failure in the design process.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A competence matrix covers every checker and calculation type, and each single-checker gap has a named engineer in development."
                cadence: cyclic
                effort_hours_estimate: "16"
              tasks:
                - "List calculation types by discipline and the competence each needs"
                - "Assess each checker with evidence from past checks"
                - "Mark every type covered by only one checker"
                - "Refresh the competence matrix and development plans @recurring(yearly)"
---

# Engineering Calculation Packages

A calculation is only worth something if someone other than its author can follow it, check it and trust the number at the bottom, and most calculation trouble starts with an unrecorded input or an unprotected spreadsheet cell. These projects begin with the foundations (a procedure, a register, a cover sheet, input and assumption logs, checker rules and a tool inventory), then the machinery that keeps a live calculation set current, the skills of writing, sanity checking and independently verifying a calculation, decisions on tools, templates and checking levels, the dated issues and submissions, the different seats an engineer sits in, and the specialist work of tool validation, probabilistic methods and dispute review.

The repeating rhythm is a weekly register update, input change review, holds chase and check backlog sweep, monthly status reporting, spreadsheet spot checks, vendor data comparisons and assumption reviews, quarterly sample audits and library reviews, and a yearly tool re-validation and edition check. The Purchase decision, Metrics log, Operational checklist, Remediation plan, Development plan and Skills matrix templates pair with the projects that need them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
