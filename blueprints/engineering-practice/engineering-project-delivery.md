---
id: engineering-practice.engineering-project-delivery
name: Engineering Project Delivery
description: "A scope and work breakdown you can measure against, a critical path schedule, an interface register, weekly progress by rules of credit, change control, honest forecasts and reports, through to engineering close-out."
category: business
version: 1.0.0
tags: [engineering-practice, engineering-project-delivery, engineer, manager, project-controls, scheduling, earned-value, change-control]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - meeting-notes
    - metrics-log
    - purchase-decision
    - remediation-plan
  pillars:
    - name: Engineering Practice
      emoji: "🔧"
      description: "The day-to-day work of practising engineers: each major discipline, process safety and risk studies, FEED, design reviews, commissioning, reliability and maintenance, CAD, simulation and PLC work, project delivery, tenders, reports, ethics and standards, and the Caribbean energy sector from Point Lisas to LNG."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Engineering Project Delivery
          description: "Running an engineering project from scope to handover: work breakdown, schedule, interfaces between disciplines, progress measurement, change control and reporting."
          projects:
            - name: Project charter and agreed scope statement
              description: |-
                ## Purpose
                Most engineering projects start with a purchase order, a few emails and a client who assumes far more is included than the proposal said. A two-page charter that states the objective, what is in and out of scope, the key dates, the budget authority and who signs off gives everyone one reference point before the first hour is booked.

                ## Milestones
                1. A charter of no more than two pages with objective, in-scope and out-of-scope lists, key dates and budget.
                2. Every exclusion and assumption from the proposal carried across explicitly.
                3. The sponsor and the client's project representative named with their approval authority.
                4. The charter signed or approved in writing by both sides.

                ## Notes
                The out-of-scope list is the most valuable part. Every item left vague here returns later as a free change request.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed charter with explicit in-scope and out-of-scope lists exists within three weeks of award."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pull the scope, exclusions and assumptions out of the winning proposal"
                - "Draft the two-page charter with in-scope and out-of-scope columns"
                - "Walk the draft through with the client's project representative"
                - "File the approved charter in the project document register"
            - name: Contract obligations digest for the delivery team
              description: |-
                ## Purpose
                Engineers rarely read the contract, then discover in month four that the client has 15 working days to review every drawing, that liquidated damages attach to one milestone, or that overtime is not reimbursable. A plain-language digest of the obligations that affect delivery puts those clauses in front of the people who actually trigger them.

                ## Milestones
                1. A digest of four pages or fewer listing deliverables, review periods, milestones, payment triggers and notice requirements.
                2. Each obligation referenced to its clause number.
                3. Notice periods for changes and delays highlighted in a separate box.
                4. The digest reviewed by the commercial lead and shared with every discipline lead.

                ## Notes
                This is a reading aid, not a legal interpretation. Where a clause is ambiguous, record the question and take it to your commercial or legal adviser.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A clause-referenced obligations digest, checked by the commercial lead, is in every discipline lead's hands within two weeks."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Read the scope of work, schedule and special conditions in one sitting"
                - "List every review period, milestone and notice requirement with its clause"
                - "Ask the commercial lead to check the digest for misreadings"
                - "Brief the discipline leads on the five clauses most likely to bite"
            - name: Work breakdown structure to deliverable level
              description: |-
                ## Purpose
                Schedules, budgets and progress reports are only as good as the structure underneath them. Breaking the scope down by area, discipline and deliverable, with a numbering code that the timesheets, the schedule and the document register all share, means hours, dates and documents finally add up to the same answer.

                ## Milestones
                1. A work breakdown structure taken down to deliverable or work package level with a coding scheme.
                2. Every scope item in the charter mapped to at least one element.
                3. The same codes set up in the timesheet system and the schedule.
                4. A WBS dictionary describing each element's content and owner.

                ## Notes
                Stop decomposing when a work package can be owned by one person and measured in weeks. Packages of more than about 400 hours hide slippage.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A coded WBS with a dictionary covers every charter scope item and is live in both the timesheet system and the schedule."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Sketch the top two WBS levels on one page by area and discipline"
                - "Decompose each branch to packages one person can own"
                - "Check every charter scope item against the breakdown"
                - "Ask finance to load the WBS codes into the timesheet system"
            - name: Master deliverables register with hour budgets
              description: |-
                ## Purpose
                Think of the master deliverables register as the engineering project's real bill of quantities: every drawing, datasheet, calculation, specification and report, with its budgeted hours and planned issue dates. Building it early exposes gaps in the estimate and gives progress measurement something concrete to count.

                ## Milestones
                1. A register listing every planned deliverable with document number, title, discipline and WBS code.
                2. Budgeted hours for each deliverable that sum to the discipline budgets in the estimate.
                3. Planned dates for each issue stage, such as issued for review, approval and construction.
                4. Each discipline lead's sign-off that the list is complete for their scope.

                ## Notes
                Expect the first register to be 15 to 30 percent longer than the estimate assumed. Raise the gap now as a trend, not in month six as an overrun.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A complete register with hours and planned issue dates, signed off by every discipline lead, reconciles to the estimate within a recorded variance."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Export the estimate's deliverable list into a single register spreadsheet"
                - "Ask each discipline lead to add missing deliverables and hours"
                - "Reconcile register hours against the estimate by discipline"
                - "Raise any shortfall as a trend with the project manager"
            - name: Rules of credit for each deliverable type
              description: |-
                ## Purpose
                Ask five engineers how complete a drawing is and you get five optimistic guesses. Weighted steps of credit, for example 10 percent started, 50 percent issued for internal check, 70 percent issued for client review, 90 percent approved, 100 percent issued for construction, turn opinion into a count that anyone can audit.

                ## Milestones
                1. A rules of credit table for each deliverable type: drawings, datasheets, calculations, specifications, requisitions and reports.
                2. Weights that a reviewer can verify from the document register alone.
                3. The client's agreement where progress drives payment.
                4. The rules written into the project execution plan.

                ## Notes
                Keep the steps tied to issue events, not effort felt. Credit for started should be small or the whole project reads 30 percent complete in week two.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An agreed rules of credit table covers every deliverable type and each step can be verified from document register entries."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every deliverable type that appears in the register"
                - "Propose issue-based credit steps and weights for each type"
                - "Agree the weights with discipline leads and the client"
                - "Add the table to the project execution plan"
            - name: Responsibility matrix for disciplines and client
              description: |-
                ## Purpose
                Who approves the plot plan, who owns the hazardous area drawings, and who answers the vendor's question about nozzle loads? A responsibility matrix that assigns responsible, accountable, consulted and informed roles for each major deliverable and decision stops the same question bouncing between three inboxes.

                ## Milestones
                1. A matrix of major deliverables and decisions against named roles, including client and vendor roles.
                2. Exactly one accountable role for each row.
                3. Approval and review roles matching the contract's approval requirements.
                4. The matrix reviewed at kick-off and published with the execution plan.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A published responsibility matrix gives each major deliverable and decision exactly one accountable role."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the 30 or so deliverables and decisions that cause most arguments"
                - "Assign responsible, accountable, consulted and informed roles to each"
                - "Check approval rows against the contract's approval clauses"
                - "Present the matrix at the kick-off meeting for agreement"
            - name: Engineering project execution plan
              description: |-
                ## Purpose
                Clients increasingly ask for a project execution plan within 30 to 45 days of award, and a good one saves the team from deciding the same things in every meeting. It sets out organisation, scope, schedule approach, controls, document management, quality, safety in design, interfaces and reporting in one controlled document.

                ## Milestones
                1. An execution plan covering organisation, scope, schedule, controls, documents, quality, HSE in design, interfaces and reporting.
                2. Each section pointing to the detailed procedure rather than repeating it.
                3. Comments from the client and discipline leads resolved.
                4. The plan approved, numbered and issued through document control.

                ## Notes
                Write it for the engineer who joins in month five. If they cannot find how progress is measured or who approves a change in under a minute, restructure it.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An approved execution plan with a document number is issued within 45 days of award and referenced by every project procedure."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "Collect the client's execution plan requirements from the contract"
                - "Draft the contents page and assign each section an author"
                - "Run one review round with the client and discipline leads"
                - "Issue the approved plan through document control"
            - name: Baseline critical path schedule
              description: |-
                ## Purpose
                Bar charts with no logic cannot tell you what happens to the issue for construction date when the vendor data for the compressor arrives four weeks late. A logic-linked schedule built from the deliverables register, with client review periods and vendor data milestones as real activities, shows the critical path and becomes the baseline every later change is measured against.

                ## Milestones
                1. A schedule with every activity linked by logic, coded to the WBS and resource loaded with hours.
                2. Client review cycles, vendor data receipts and procurement milestones included as activities.
                3. A schedule quality check passed: no open ends, few hard constraints, no negative float.
                4. The baseline approved by the client and saved as a frozen copy.

                ## Notes
                Check the schedule against a recognised quality checklist, such as the 14-point assessment many owners use, before asking for approval.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A logic-linked, resource-loaded baseline with no open ends is approved by the client and frozen within 45 days."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Import the deliverables register into the scheduling tool by WBS code"
                - "Add client review periods and vendor data milestones as activities"
                - "Run a logic check for open ends, constraints and negative float"
                - "Submit the baseline for client approval and save a frozen copy"
            - name: Interface register between disciplines and contractors
              description: |-
                ## Purpose
                The expensive mistakes on engineering projects sit between scopes: the civil foundation drawn before the vendor's anchor bolt layout arrived, or the package unit's control panel speaking a protocol the main control system does not. An interface register lists every hand-off, who gives what to whom, and by when, so these gaps are owned before they become site rework.

                ## Milestones
                1. A register of internal discipline interfaces and external interfaces with vendors, contractors and the client.
                2. Each interface with a giver, a receiver, the information required and a need date.
                3. Need dates linked to the schedule activities they drive.
                4. Every interface reviewed by both parties and given a status.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A register with a giver, receiver and need date for every identified interface is agreed by both parties to each interface."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List the scope boundaries from the contract, vendor packages and battery limits"
                - "Hold a one-hour interface session with each pair of discipline leads"
                - "Record giver, receiver, information and need date for each interface"
                - "Link the need dates to the matching schedule activities"
            - name: Project risk register and first risk workshop
              description: |-
                ## Purpose
                Risks written into a proposal and never looked at again do nothing. A first workshop with discipline leads in the opening month, scoring each risk for likelihood and impact on cost and schedule and naming an owner and response, turns the vague worries about late vendor data, unclear site surveys or a slow client into actions with dates.

                ## Milestones
                1. A two-hour workshop held with discipline leads, procurement and the client where possible.
                2. A register of risks and opportunities scored on a single agreed matrix.
                3. An owner and a response action recorded for every risk scored high.
                4. Cost and schedule allowances for the top risks noted for the contingency discussion.

                ## Notes
                Start from the **Risk register** template. Write each risk as cause, event and effect, or the register fills with headlines like resourcing that nobody can act on.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A scored risk register with named owners and responses for every high risk exists within 30 days of award."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Copy the risks and assumptions from the proposal into a draft register"
                - "Book a two-hour workshop with discipline leads and procurement"
                - "Score each risk and name an owner and response in the workshop"
                - "Send the register to the project manager for contingency review"
            - name: Kick-off meeting with client and discipline leads
              description: |-
                ## Purpose
                Kick-off is the one meeting where the client's team and yours are all in the room with the same goodwill, and it sets the tone for months of reviews and queries. Running it from a prepared agenda, covering scope, schedule, communication routes, review periods and the first month's deliverables, gets agreements recorded instead of assumed.

                ## Milestones
                1. An agenda and pre-read sent at least five working days before the meeting.
                2. Scope, key dates, review periods, communication protocol and document numbering presented and agreed.
                3. Open questions logged with owners and dates.
                4. Minutes issued within two working days and accepted by the client.

                ## Notes
                Start from the **Meeting notes** template. Agree the correspondence protocol here: who may instruct whom, and that only written instructions count.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The kick-off is held within two weeks of award and its minutes, with an action list, are accepted by the client."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Propose two kick-off dates to the client's project representative"
                - "Draft the agenda and a pre-read with charter and key dates"
                - "Agree the correspondence and instruction protocol in the meeting"
                - "Issue minutes and the action list within two working days"
            - name: Weekly deliverable progress measurement
              description: |-
                ## Purpose
                Progress measured once a month by asking leads for a percentage hides problems for weeks. A fixed weekly cut-off where the document register is updated and the rules of credit are applied mechanically gives physical progress by discipline that can be set against hours spent, every Friday.

                ## Milestones
                1. A fixed weekly cut-off day and time agreed with every discipline lead.
                2. Physical progress calculated from the register using the agreed rules of credit.
                3. Progress by discipline plotted against plan on a weekly curve.
                4. Any discipline more than five points behind plan flagged to the project manager.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Physical progress by discipline is calculated from the register every week at the agreed cut-off for the life of the project."
                cadence: rolling
              tasks:
                - "Agree the weekly cut-off day and time with discipline leads"
                - "Update the register status and calculate earned progress at the cut-off @recurring(weekly:fri)"
                - "Plot discipline progress against the planned curve"
                - "Send the progress table to discipline leads with gaps highlighted"
            - name: Weekly schedule update and three-week look-ahead
              description: |-
                ## Purpose
                Left unstatused, a baseline becomes a wall poster. Updating actual starts, finishes and remaining durations each week, then issuing a three-week look-ahead to each discipline, keeps the critical path current and tells every lead exactly what must happen before the next update.

                ## Milestones
                1. Actual dates and remaining durations updated weekly against the data date.
                2. Critical and near-critical paths reviewed after each update.
                3. A three-week look-ahead issued to every discipline lead.
                4. Float erosion on the critical path reported when it exceeds an agreed threshold.

                ## Notes
                Never overwrite the baseline when you status the schedule. Keep each weekly update as a separate saved copy so trends can be reconstructed later.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The schedule is statused weekly with a saved copy for each data date and a look-ahead issued to every discipline."
                cadence: rolling
              tasks:
                - "Collect actual dates and remaining durations from each discipline lead"
                - "Status the schedule and save a dated copy @recurring(weekly:mon)"
                - "Review the critical and near-critical paths for float loss"
                - "Issue the three-week look-ahead to discipline leads"
            - name: Earned value tracking with CPI and SPI
              description: |-
                ## Purpose
                Hours spent tell you nothing about whether the project is on budget until they are set against hours earned. Running earned value monthly, with planned value, earned value and actual hours by discipline, gives a cost performance index and schedule performance index that show trouble while there is still time to recover.

                ## Milestones
                1. Planned value curves by discipline taken from the resource-loaded baseline.
                2. Earned hours calculated from physical progress times budgeted hours.
                3. Actual hours drawn from timesheets for the same cut-off.
                4. CPI and SPI by discipline recorded each month with a short explanation of any value below 0.95.

                ## Notes
                Start from the **Metrics log** template to keep the monthly indices in one place. Use the same cut-off date for progress and timesheets or the indices mean nothing.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly CPI and SPI by discipline are recorded on a consistent cut-off, with an explanation for every value below 0.95."
                cadence: rolling
              tasks:
                - "Extract planned value by discipline from the baseline schedule"
                - "Pull timesheet actuals for the same cut-off date"
                - "Calculate CPI and SPI by discipline and log them @recurring(monthly:26)"
                - "Write one line explaining each index below 0.95"
            - name: Monthly client progress report
              description: |-
                ## Purpose
                The client's project manager has to report upwards too, and a clear monthly report written by you is the one they will copy from. A consistent structure covering progress against plan, key achievements, look-ahead, changes, risks, interface issues and items needing the client's action makes the report useful instead of ceremonial.

                ## Milestones
                1. A report structure agreed with the client and kept the same every month.
                2. Progress curves, earned value indices and milestone status included from the same cut-off.
                3. A short list of decisions or information required from the client, each with a need date.
                4. The report issued by the contractual date every month.

                ## Notes
                Lead with the three things the client must know. Long narrative sections by discipline are rarely read past page two.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A monthly report in the agreed structure is issued by the contractual date every month, with client actions listed with need dates."
                cadence: rolling
              tasks:
                - "Agree the report structure and issue date with the client"
                - "Collect discipline inputs two working days after the cut-off"
                - "Compile and issue the monthly progress report @recurring(monthly:3)"
                - "Track the client actions listed until each is closed"
            - name: Hours and cost-to-complete forecast
              description: |-
                ## Purpose
                An estimate at completion that is simply the budget repeated each month is a forecast in name only. Asking each discipline lead to forecast remaining hours deliverable by deliverable, then comparing that with a performance-based forecast from the indices, shows where the honest number lies and when to raise a trend.

                ## Milestones
                1. Each discipline's remaining hours forecast bottom-up from the deliverables register.
                2. A performance-based estimate at completion calculated for comparison.
                3. Differences of more than five percent between the two explained.
                4. The forecast and its movement since last month reported to the project manager.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly estimate at completion is produced bottom-up and checked against a performance-based figure, with large gaps explained."
                cadence: rolling
              tasks:
                - "Send each discipline lead their deliverables with hours remaining"
                - "Collect bottom-up forecasts and compare with the index-based figure @recurring(monthly:20)"
                - "Explain any gap above five percent in a sentence"
                - "Report the estimate at completion movement to the project manager"
            - name: Scope change control and trend log
              description: |-
                ## Purpose
                Scope creep on engineering projects arrives one reasonable request at a time: one more line added to the study, another revision because the client changed a duty point. A trend log that captures every potential change the week it appears, estimates its hours and schedule effect and drives a formal change order keeps the budget honest and protects the relationship.

                ## Milestones
                1. A trend log with a unique number, description, source, estimated hours and schedule effect for each potential change.
                2. Every trend reviewed within a week and converted into a change request or closed with a reason.
                3. Approved changes added to the budget and schedule as a controlled revision.
                4. Notices issued within the contract's notice periods for every change.

                ## Notes
                This is commercial scope change. Changes to a physical plant or operating process also need the site's management of change procedure.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every potential change is logged within a week of appearing, and none passes its contractual notice period without a notice."
                cadence: rolling
              tasks:
                - "Set up a numbered trend log with hours and schedule impact columns"
                - "Review new trends with the project manager and leads @recurring(weekly:wed)"
                - "Raise change requests for trends that exceed the agreed threshold"
                - "Check every open trend against its contractual notice deadline"
            - name: Weekly interface coordination call
              description: |-
                ## Purpose
                An interface register only works if someone chases it. A short weekly call working through interfaces that are due or overdue, with giver and receiver both present, catches the late vendor drawing or the missing load data while the receiving discipline still has float.

                ## Milestones
                1. A standing 30-minute call with the discipline leads and package engineers.
                2. Interfaces due in the next three weeks reviewed every call.
                3. Overdue interfaces escalated with the schedule activity they are delaying.
                4. Register statuses updated within a day of each call.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Overdue interfaces fall each month and every one is reviewed at a weekly call within seven days of its need date."
                cadence: rolling
              tasks:
                - "Filter the register for interfaces due in the next three weeks"
                - "Run the 30-minute interface call with givers and receivers @recurring(weekly:thu)"
                - "Escalate overdue interfaces with their schedule effect"
                - "Update the interface register statuses the same day"
            - name: Action log and decision register
              description: |-
                ## Purpose
                Months after a meeting nobody remembers who agreed to move the pipe rack or why the client accepted a lower design pressure. One log of actions with owners and dates, and one register of decisions with the reason and the person who made them, saves the arguments and gives later reviewers the context they need.

                ## Milestones
                1. A single action log replacing the separate lists kept in meeting minutes.
                2. A decision register recording each decision, its date, its reason and who made it.
                3. Overdue actions reviewed weekly with their owners.
                4. Decisions that change scope cross-referenced to the trend log.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All project actions and decisions sit in one log and one register, with overdue actions reviewed with owners every week."
                cadence: rolling
              tasks:
                - "Merge open actions from recent minutes into one log"
                - "Start a decision register with date, reason and decision maker columns"
                - "Chase overdue actions with their owners @recurring(weekly:tue)"
                - "Cross-reference scope-changing decisions to the trend log"
            - name: Technical query tracking with the client
              description: |-
                ## Purpose
                Unanswered technical queries are where engineering schedules quietly slip, because the discipline waiting on an answer either stops or guesses. Tracking each query with the date raised, the need date and the schedule activity it holds shows the client, in numbers, how their response time is affecting delivery.

                ## Milestones
                1. A query register with number, question, date raised, need date and affected activity.
                2. Queries past their need date shown in every client report.
                3. Answers recorded and the affected deliverable updated.
                4. Average client response time calculated each month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every technical query is tracked from raised to answered, and the average response time is reported to the client monthly."
                cadence: rolling
              tasks:
                - "Collect every open technical query into one numbered register"
                - "Add a need date and the affected schedule activity to each"
                - "Calculate the average response time and list overdue queries @recurring(monthly:10)"
                - "Raise queries holding critical work at the next client meeting"
            - name: Vendor data and long-lead item tracker
              description: |-
                ## Purpose
                Engineering cannot finish foundations, piping or electrical design until vendors return certified data, and long-lead items such as compressors, transformers or large valves set the critical path. A tracker linking each purchase order to its data milestones and the deliverables waiting on them shows which vendor is about to stall which discipline.

                ## Milestones
                1. A tracker listing each long-lead item and package with purchase order date and promised data dates.
                2. Each vendor data milestone linked to the engineering deliverables that need it.
                3. Late vendor data flagged with its knock-on effect on engineering dates.
                4. The tracker reviewed monthly with procurement and expediting.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every long-lead purchase order has its vendor data milestones tracked and linked to the engineering deliverables waiting on it."
                cadence: rolling
              tasks:
                - "List long-lead items and packages with purchase order dates"
                - "Record promised vendor data dates from each purchase order"
                - "Link each data milestone to the deliverables that depend on it"
                - "Review late vendor data with procurement and expediting @recurring(monthly:8)"
            - name: Monthly risk and opportunity review
              description: |-
                ## Purpose
                Opened only for audits, a risk register drifts away from reality within a quarter. Reviewing it monthly, rescoring risks, closing those that have passed, adding new ones and checking that response actions actually happened keeps contingency tied to what is really threatening the project.

                ## Milestones
                1. Every open risk rescored at each monthly review.
                2. Response actions checked for completion with their owners.
                3. New risks and opportunities raised by leads added and scored.
                4. Contingency drawdown recorded against the risks that consumed it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The risk register is rescored every month, and every contingency drawdown is linked to a named risk."
                cadence: rolling
              tasks:
                - "Send the register to risk owners a week before the review"
                - "Rescore risks and check response actions with owners @recurring(monthly:14)"
                - "Close passed risks and add new ones from the leads"
                - "Record any contingency drawdown against its risk"
            - name: Quarterly lessons learned capture
              description: |-
                ## Purpose
                Lessons learned collected only at close-out are vague, because nobody remembers the detail of month three by month eighteen. A short quarterly session that records what happened, its effect and what to do differently, while memories are fresh, produces lessons the next project can actually apply.

                ## Milestones
                1. A 45-minute session held each quarter with the project team.
                2. Each lesson written as situation, effect and recommendation.
                3. Lessons that apply to the current project turned into actions.
                4. The lessons tagged by topic and added to the company register.
              priority: low
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "Four lessons learned sessions a year are held, each producing written lessons in situation, effect and recommendation form."
                cadence: cyclic
              tasks:
                - "Hold a 45-minute lessons learned session with the team @recurring(quarterly)"
                - "Write each lesson as situation, effect and recommendation"
                - "Turn lessons that apply now into actions on the action log"
                - "Add tagged lessons to the company lessons register"
            - name: Critical path method and float by hand
              description: |-
                ## Purpose
                Engineers who only ever see the critical path coloured red in a scheduling tool cannot tell when the tool is wrong. Working a small network by hand, forward and backward passes, total and free float, and the effect of a lag or a constraint, builds the judgement to spot bad logic in a 3,000-activity schedule.

                ## Milestones
                1. A 15-activity network worked by hand with forward and backward passes.
                2. Total and free float calculated and checked against a scheduling tool.
                3. The effect of a start-to-start lag and a hard constraint demonstrated on the same network.
                4. A one-page note on the logic errors that most often hide the true critical path.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A hand-worked network matches the scheduling tool's dates and float, with a written note on common logic errors."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Draw a 15-activity network from a real engineering package"
                - "Calculate early and late dates and float by hand"
                - "Enter the same network in the scheduling tool and compare"
                - "Write a one-page note on logic errors that hide the critical path"
            - name: Earned value fundamentals for engineers
              description: |-
                ## Purpose
                Earned value reports land on discipline leads' desks full of acronyms that most were never taught. Learning planned value, earned value, actual cost, CPI, SPI and estimate at completion on your own project's numbers makes the monthly report something you can challenge rather than accept.

                ## Milestones
                1. The core earned value terms and formulas written out with your own project's figures.
                2. One month's indices for your discipline recalculated independently.
                3. The difference between schedule variance in hours and in time understood and explained.
                4. Three questions about the latest report raised with project controls.

                ## Notes
                Recognised references such as the national or institute standards on earned value management give the formal definitions; your project controls lead can tell you which one the client uses.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One month of your discipline's CPI and SPI is recalculated independently and matches the project report or the difference is explained."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask project controls for last month's earned value data for your discipline"
                - "Write the core formulas using your own discipline's figures"
                - "Recalculate CPI and SPI and compare with the report"
                - "Take three questions about the report to project controls"
            - name: Contract models for engineering work compared
              description: |-
                ## Purpose
                A reimbursable engineering contract, a lump sum, a unit rate and a full EPC each change what the engineering team should worry about: hours under reimbursable, scope boundaries under lump sum, and interfaces with construction under EPC. Understanding the models, and the common industry form families used for them, explains why the commercial team reacts as they do.

                ## Milestones
                1. A one-page comparison of reimbursable, lump sum, unit rate, target cost and EPC models.
                2. For each model, who carries the risk of overrun, scope growth and late client information.
                3. The model on your current project identified with its main delivery implications.
                4. A short conversation with a commercial manager to test the comparison.

                ## Notes
                This is for understanding, not contract advice. Questions about a specific contract go to your commercial or legal adviser.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page comparison of five contract models, reviewed by a commercial manager, states who carries each main risk."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the contract models used on your company's last five projects"
                - "Write who carries overrun, scope and late information risk under each"
                - "Identify the delivery implications of your current project's model"
                - "Ask a commercial manager to challenge the comparison over coffee"
            - name: Scheduling tool proficiency in P6 or Project
              description: |-
                ## Purpose
                Most owners in oil, gas, chemicals and infrastructure expect schedules in an enterprise tool such as Primavera P6, while smaller projects run on Microsoft Project or similar. Getting genuinely competent with one, including calendars, codes, resource loading, baselines and layouts, means you stop depending on a planner for every what-if question.

                ## Milestones
                1. A practice project built from scratch with calendars, WBS, activity codes and logic.
                2. Resources and budgeted hours loaded and a baseline assigned.
                3. A schedule update performed with progress and a comparison layout against the baseline.
                4. Three standard layouts saved: critical path, look-ahead and discipline progress.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A practice schedule with codes, resources, a baseline and one progress update is built without help, with three saved layouts."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Confirm which scheduling tool your clients most often require"
                - "Build a practice project with calendars, codes and logic"
                - "Load resources, set a baseline and run one progress update"
                - "Save critical path, look-ahead and progress layouts"
            - name: Writing escalations and bad-news updates
              description: |-
                ## Purpose
                Reported late and vaguely, a slipping milestone damages trust far more than the slip itself. Learning to write a short escalation, stating the issue, its effect on cost and dates, the options and the decision needed by when, means problems reach the people who can solve them while options still exist.

                ## Milestones
                1. A one-page escalation structure: issue, effect, cause, options, recommendation, decision needed by.
                2. Two past escalations rewritten in that structure.
                3. One real escalation sent using the structure.
                4. Feedback from the recipient on what helped and what was missing.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "At least one real escalation is sent in the agreed structure and the recipient's feedback is recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write the six-part escalation structure on a single page"
                - "Rewrite two past escalation emails in the new structure"
                - "Ask the agent to tighten a draft escalation to under 250 words"
                - "Ask the recipient of your next escalation what helped"
            - name: Reviewing a contractor's schedule for realism
              description: |-
                ## Purpose
                Owner's engineers and client project engineers are often handed a contractor's schedule for approval with a week to respond. A structured review covering logic density, constraints, durations against norms, review periods, procurement links and resource peaks finds the optimism before it is baselined and becomes a contractual commitment.

                ## Milestones
                1. A review checklist covering logic, constraints, durations, float, resources and procurement links.
                2. One real or past contractor schedule reviewed against the checklist.
                3. Review comments written with the activity ID and the concern.
                4. A short summary of the schedule's main credibility gaps for the client project manager.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A contractor schedule is reviewed against a written checklist, with activity-referenced comments and a one-page summary issued."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Draft a schedule review checklist from a recognised quality assessment"
                - "Run the checklist over a contractor schedule you have to hand"
                - "Write each comment with its activity ID and concern"
                - "Summarise the main credibility gaps on one page"
            - name: Choosing a project controls toolset
              description: |-
                ## Purpose
                Many engineering firms run projects on a scheduling tool, a timesheet system and a dozen spreadsheets that do not agree. Choosing deliberately between staying with spreadsheets, an integrated project controls platform or a lighter cloud tool, scored against your project sizes and client requirements, stops the next project inheriting the same mess.

                ## Milestones
                1. Requirements written: scheduling, earned value, document register links, client reporting, licence cost.
                2. Three options shortlisted, including keeping the current setup.
                3. Each option scored against the same criteria with a trial on real project data.
                4. A recommendation agreed with management and recorded.

                ## Notes
                Start from the **Purchase decision** template. Check which formats your main clients require for schedule submissions before falling for any tool.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on the project controls toolset, scored against written criteria with a trial on real data, is agreed with management."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "List what the current spreadsheets and tools fail to do"
                - "Check schedule and report formats your main clients require"
                - "Trial three options on one live project's data"
                - "Present a scored recommendation to management"
            - name: Recovery plan for a slipping engineering schedule
              description: |-
                ## Purpose
                When the SPI sits below 0.9 for two months and the issue for construction date is at risk, adding people at random usually makes it worse. A recovery plan that finds the real constraints, whether late client information, vendor data, resource shortfalls or rework, and sets realistic actions with dates gives the client a credible new forecast rather than hope.

                ## Milestones
                1. Root causes of the slip identified with data from progress, queries and vendor trackers.
                2. Recovery options assessed for cost, risk and days gained.
                3. A recovered schedule with logic, resources and a confidence level.
                4. The plan agreed with the client and its actions tracked weekly.

                ## Notes
                Start from the **Remediation plan** template. Be honest about the cause in the plan; a recovery that blames nobody often fixes nothing.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A recovery schedule with costed actions and a stated confidence level is agreed with the client within 30 days of the trigger."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "Pull three months of progress, query and vendor data into one view"
                - "Identify the top three causes of slip with the leads"
                - "Model recovery options in a copy of the schedule"
                - "Present the recovery plan and forecast to the client"
            - name: Shortening client review cycles on deliverables
              description: |-
                ## Purpose
                Contracts often allow the client 10 to 15 working days per review, and two or three review rounds on each key drawing can add months. Measuring actual review times, cutting avoidable rework comments with better first issues, and agreeing review workshops for complex packages often recovers more schedule than overtime does.

                ## Milestones
                1. Actual review cycle times measured for the last 50 deliverables.
                2. Comments sorted into those caused by errors, unclear basis or client preference.
                3. Two changes agreed with the client, such as review workshops or pre-issue walkthroughs.
                4. Average cycle time remeasured three months later.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Average client review cycle time and number of review rounds fall measurably within three months of the agreed changes."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Extract issue and return dates for the last 50 deliverables"
                - "Sort review comments into three cause groups"
                - "Propose two cycle-time changes to the client project manager"
                - "Remeasure average cycle time after three months"
            - name: Make or buy decision for a discipline's scope
              description: |-
                ## Purpose
                When a project needs a discipline the team is thin in, such as pipeline stress, geotechnical or telecoms, the choice is between hiring, borrowing from another office or subcontracting the scope. Comparing cost, schedule, interface burden and quality control for each route, before the work starts, avoids a rescue halfway through.

                ## Milestones
                1. The scope in question defined with hours, deliverables and key interfaces.
                2. In-house, other office and subcontract options costed with schedule effects.
                3. Interface and quality control burden of each option stated.
                4. A decision recorded with the reasons and the client's consent where the contract requires it.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded make or buy decision compares at least three routes on cost, schedule and interface burden, with client consent where required."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Define the scope with hours, deliverables and interfaces"
                - "Get rough costs and availability for each route"
                - "Check the contract for subcontracting consent requirements"
                - "Record the decision and reasons in the decision register"
            - name: Design and procurement overlap decision
              description: |-
                ## Purpose
                Ordering long-lead equipment on preliminary data can save months, but it can also lock in a wrong size or trigger expensive changes later. Deciding deliberately which items to release early, on what level of design maturity and with what change allowance, turns fast-tracking from a gamble into a managed risk.

                ## Milestones
                1. A list of candidate items for early release with lead times and design maturity.
                2. The days saved and the cost of likely changes estimated for each.
                3. Hold points and data freeze dates agreed for released items.
                4. The release decision recorded and linked to the risk register.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each early-release candidate has a recorded decision with days saved, change risk and an agreed data freeze date."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List long-lead items with lead times and current design maturity"
                - "Estimate days saved and likely change cost for each"
                - "Agree data freeze dates with the process and mechanical leads"
                - "Record release decisions and add the risks to the register"
            - name: One-page project dashboard for leadership
              description: |-
                ## Purpose
                Senior managers with ten projects to oversee will not read ten monthly reports. A one-page dashboard showing progress against plan, CPI and SPI, forecast at completion, key milestones, top three risks and decisions needed lets them spend their attention on the project that needs it.

                ## Milestones
                1. A one-page layout agreed with the engineering or operations manager.
                2. Every number on it drawn automatically or directly from the project controls data.
                3. Red, amber and green thresholds defined in writing.
                4. The dashboard issued monthly with the client report.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page dashboard with written status thresholds is issued monthly from the same data as the client report."
                cadence: rolling
              tasks:
                - "Ask leadership which six numbers they want to see"
                - "Draft the one-page layout with written status thresholds"
                - "Link each number to its source in the controls data"
                - "Refresh and issue the dashboard with the client report @recurring(monthly:5)"
            - name: Resource loading and levelling across disciplines
              description: |-
                ## Purpose
                The baseline may need eight piping designers in month five when the office has four, and nobody notices until the month arrives. Comparing the resource-loaded schedule with available people by discipline and month shows the peaks early enough to recruit, borrow, subcontract or resequence.

                ## Milestones
                1. A histogram of required hours by discipline and month from the schedule.
                2. Available people by discipline and month from the resource manager.
                3. Peaks above availability identified with options for each.
                4. A levelled plan agreed and checked monthly against actual staffing.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A histogram of required against available hours by discipline is agreed, and every gap above 10 percent has a named response."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Export required hours by discipline and month from the schedule"
                - "Get available staff by discipline from the resource manager"
                - "Mark peaks above availability and list options for each"
                - "Compare planned against actual staffing by discipline @recurring(monthly:15)"
            - name: Design freeze and scope freeze milestone
              description: |-
                ## Purpose
                Late changes to process conditions or layouts ripple through every downstream discipline, and the cost of a change after the 60 percent model is several times the cost before it. Agreeing a formal freeze date for process design and layout, with the client signing it off and later changes going through change control, protects the back half of the schedule.

                ## Milestones
                1. The items to be frozen listed: process conditions, line list, plot plan, equipment list.
                2. Open questions on those items closed or formally parked with owners.
                3. A freeze meeting held and the frozen revisions recorded.
                4. The client's written acceptance that later changes go through change control.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A freeze is recorded with the frozen document revisions and the client's written acceptance by the planned freeze date."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List the documents and data to be frozen with current revisions"
                - "Close or park every open question on those documents"
                - "Hold the freeze meeting and record the frozen revisions"
                - "Get the client's written acceptance of post-freeze change control"
            - name: Issue for construction drawing push
              description: |-
                ## Purpose
                Those last weeks before the issue for construction milestone decide whether the site receives a clean package or a stream of revisions. A focused push with a daily status board, dedicated checkers, holds cleared or listed, and a final cross-discipline check means the milestone is met with drawings the contractor can build from.

                ## Milestones
                1. A list of every deliverable required for the milestone with its status.
                2. Holds on each drawing cleared or listed on a hold register issued with the package.
                3. Checking and approval capacity booked for the final four weeks.
                4. The package issued for construction with a transmittal and a known list of open holds.

                ## Notes
                A few listed holds are honest; dozens of unlisted ones are a revision storm waiting to happen on site.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The issue for construction package is transmitted by the milestone date with every remaining hold listed on a hold register."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "List every deliverable required for the milestone with status"
                - "Book checkers and approvers for the final four weeks"
                - "Hold a 15-minute status stand-up during the final fortnight @recurring(daily)"
                - "Issue the package with a transmittal and hold register"
            - name: Client project controls audit preparation
              description: |-
                ## Purpose
                Owners regularly audit their contractors' project controls, checking that progress claimed matches the register, hours match timesheets and changes followed procedure. Preparing for the audit by sampling your own records first finds the gaps on your terms and makes the audit a short meeting instead of a corrective action list.

                ## Milestones
                1. The audit scope and sample method requested from the client.
                2. A self-audit of 20 deliverables tracing progress claimed to register evidence.
                3. Timesheet hours reconciled to reported actuals for one month.
                4. Gaps fixed or explained and the evidence folder ready before the audit date.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A self-audit of 20 deliverables and one month of hours is complete, with gaps closed or explained, before the client audit date."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Ask the client for the audit scope, dates and sampling method"
                - "Trace progress claimed on 20 deliverables to register evidence"
                - "Reconcile one month of timesheets to reported actuals"
                - "Prepare an evidence folder organised by audit topic"
            - name: Independent mid-project health check
              description: |-
                ## Purpose
                Teams inside a project stop seeing its problems around the halfway mark. Inviting a senior engineer or project manager from outside the team to spend two days reviewing scope, schedule, controls, interfaces, staffing and client relationship gives an honest outside view while there is still time to act on it.

                ## Milestones
                1. A reviewer from outside the project agreed with management.
                2. A review pack and interview list prepared.
                3. Findings presented with a rating for each area.
                4. Actions from the findings on the action log with owners and dates.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An independent review is held around the project's halfway point and every finding has an action with an owner and date."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Ask management to nominate a reviewer from outside the project"
                - "Prepare a review pack of plans, reports and registers"
                - "Schedule interviews with leads, controls and the client"
                - "Log every finding as an action with owner and date"
            - name: Engineering close-out and final document handover
              description: |-
                ## Purpose
                Engineering projects drag on for months after the last drawing because nobody owns the close-out: final as-built inputs, vendor dossiers, open queries, the final account and demobilising the team. A close-out plan with a checklist and a target date gets the final invoice paid and frees the team for the next job.

                ## Milestones
                1. A close-out checklist covering deliverables, vendor documents, open queries, changes, final account and records.
                2. All final documents transmitted to the client and acknowledged.
                3. Open changes agreed and the final account submitted.
                4. Project records archived, team released and a close-out report issued.

                ## Notes
                Agree the final document handover format, file naming and acceptance criteria with the client months before the end; it is a common cause of delayed final payment.
              priority: high
              deadlineOffsetDays: 365
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Final documents are acknowledged by the client, the final account is submitted and records are archived by the close-out date."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Draft the close-out checklist and agree it with the client"
                - "Agree the final document handover format and acceptance criteria"
                - "Close or agree every open change and query"
                - "Archive records and issue the close-out report"
            - name: First project as a discipline lead
              description: |-
                ## Purpose
                Stepping from engineer to discipline lead on a project means owning a budget of hours, a set of deliverables and interfaces with every other discipline, often without any training in it. A plan for the first 90 days, covering your register, your hours, your interfaces and a weekly rhythm with the project engineer, makes the role manageable from week one.

                ## Milestones
                1. Your discipline's deliverables, hours and dates understood and accepted in writing.
                2. Your interfaces with other disciplines and vendors listed with need dates.
                3. A weekly status note sent to the project engineer every week.
                4. A 90-day review held with your manager on what to change.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Within 90 days your discipline register is accepted, your interfaces are listed and a weekly status note has been sent every week."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Read your discipline's register lines and budget hours line by line"
                - "List your interfaces with other disciplines and vendors"
                - "Send a weekly status note to the project engineer @recurring(weekly:thu)"
                - "Book a 90-day review with your manager"
            - name: Stepping up from design engineer to project engineer
              description: |-
                ## Purpose
                Project engineers spend less time calculating and more time coordinating, chasing and deciding, and many strong designers struggle with the shift. Identifying the skills gap, such as scheduling, commercial awareness, client handling and running meetings, and closing it deliberately over six months makes the move a choice rather than a sink-or-swim test.

                ## Milestones
                1. A gap analysis of project engineering skills against your current experience.
                2. Three development actions agreed with your manager, such as shadowing a project engineer.
                3. One small project or work package led end to end.
                4. A six-month review with evidence for each skill area.

                ## Notes
                Keep one technical thread alive. Project engineers who lose all technical credibility find discipline leads stop listening.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written skills gap analysis exists and, after six months, evidence of one led package is reviewed with your manager."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Write down the ten skills a good project engineer on your team shows"
                - "Rate yourself against each with one example"
                - "Agree three development actions with your manager"
                - "Ask to lead one small package end to end"
            - name: Taking over a project mid-stream
              description: |-
                ## Purpose
                Inheriting a project halfway through, when the previous manager has moved on, leaves you accountable for commitments you did not make. A structured two-week takeover, reading the contract, auditing the schedule and forecast, meeting the client and the leads, and writing an honest position statement, sets a fresh baseline for your time in charge.

                ## Milestones
                1. The contract, execution plan, latest reports and open changes read.
                2. Schedule, forecast and change log checked independently.
                3. One-to-one meetings held with the client representative and each lead.
                4. A position statement issued to management within 30 days with known issues and a corrected forecast.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A written position statement with a checked forecast and known issues reaches management within 30 days of taking over."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Ask the outgoing manager for a one-hour handover conversation"
                - "Read the contract, latest reports and open change log"
                - "Meet the client representative and each discipline lead one to one"
                - "Write and issue a position statement to management"
            - name: Manager overseeing a portfolio of small projects
              description: |-
                ## Purpose
                An engineering manager with fifteen small projects cannot run each one personally, and small projects rarely justify full project controls. A light portfolio rhythm, one line per project with progress, hours, forecast, risks and next milestone, reviewed monthly with the project engineers, finds the one going wrong before the client does.

                ## Milestones
                1. A one-line-per-project portfolio view with a minimum data set.
                2. A threshold set for when a small project needs closer attention.
                3. A monthly portfolio review with the project engineers.
                4. Staff allocation across the portfolio adjusted at each review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every active project appears on a one-line portfolio view reviewed monthly, with flagged projects given specific actions."
                cadence: rolling
              tasks:
                - "Choose the six data items every project must report"
                - "Build the one-line-per-project portfolio sheet"
                - "Run the portfolio review with project engineers @recurring(monthly:12)"
                - "Rebalance staff for any project over its attention threshold"
            - name: Plant engineer delivering minor brownfield projects
              description: |-
                ## Purpose
                Site engineers often deliver small capital projects such as a pump replacement, a new tie-in or an instrument upgrade alongside daily plant support, with no project team. A simple delivery framework, scope sheet, schedule with shutdown windows, budget, contractor scope and handover pack, keeps these projects moving between plant emergencies.

                ## Milestones
                1. A one-page scope sheet and budget for each minor project.
                2. Work tied to available shutdown or outage windows on a simple schedule.
                3. Management of change, permits and contractor safety requirements identified before execution.
                4. A handover pack with updated drawings given to operations and maintenance.

                ## Notes
                Brownfield work touches a live plant. The site's management of change, permit to work and stop-work authority apply to every minor project, however small.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each minor project has a scope sheet, a schedule tied to an outage window and a handover pack accepted by operations."
                cadence: rolling
              tasks:
                - "Write a one-page scope sheet for each minor project in hand"
                - "Map each project to the next available outage window"
                - "Review minor project progress and budgets with the area manager @recurring(monthly:17)"
                - "Hand over updated drawings and records to operations"
            - name: Work-share execution across two engineering offices
              description: |-
                ## Purpose
                Splitting engineering between a home office and a lower-cost or regional centre can cut cost, but only if the split is clear and coordination is designed in. Defining who owns which deliverables, common standards and tools, model and document sharing, and a regular joint call avoids the duplication and rework that sink many work-share projects.

                ## Milestones
                1. A work-share split by deliverable with one accountable office for each.
                2. Shared design standards, templates, tools and model environment confirmed.
                3. A joint coordination call and escalation route agreed.
                4. A quality check on the first deliverables from the second office completed.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A work-share split with one accountable office per deliverable is agreed and the first deliverables from the second office pass a quality check."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Split the deliverables register by accountable office"
                - "Confirm both offices use the same standards, templates and tool versions"
                - "Run the joint coordination call between offices @recurring(weekly:tue)"
                - "Check the second office's first deliverables in detail"
            - name: Schedule risk analysis with P50 and P80 dates
              description: |-
                ## Purpose
                A single finish date implies a certainty no engineering project has. Running a quantitative schedule risk analysis, with three-point durations on key activities and risk events from the register, gives P50 and P80 dates and shows which risks drive the spread, which is what owners increasingly expect before a final investment decision or a major milestone commitment.

                ## Milestones
                1. A summarised schedule of 200 to 500 activities that preserves the critical logic.
                2. Three-point duration ranges and risk events gathered from leads in a structured session.
                3. A Monte Carlo run producing P50 and P80 dates and a tornado of risk drivers.
                4. Results and their assumptions reported to the project manager and client.

                ## Notes
                Ranges gathered from optimistic teams are usually too narrow. Challenge the low end and compare with actuals from past projects.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A schedule risk report with P50 and P80 dates, the main risk drivers and stated assumptions is issued to the client."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Summarise the schedule while keeping the critical logic intact"
                - "Run a range-gathering session with discipline leads"
                - "Run the simulation and produce P50, P80 and driver charts"
                - "Write up the results with every assumption stated"
            - name: Contemporaneous records for delay and change disputes
              description: |-
                ## Purpose
                When a dispute about delay or change arises, the side with dated, factual records made at the time usually fares better than the side with recollections. Keeping a daily diary, saving weekly schedule updates, logging late client information and filing notices properly is cheap insurance that most engineering teams neglect.

                ## Milestones
                1. A daily diary format agreed and kept by the project engineer.
                2. Weekly schedule updates archived with their data dates.
                3. Every late client input and instruction logged with dates and correspondence references.
                4. Records filed so that a delay event can be reconstructed within a day.

                ## Notes
                This is record keeping, not legal advice. If a dispute seems likely, involve your commercial and legal advisers early.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A daily diary, archived weekly schedules and a late information log allow any delay event to be reconstructed within one working day."
                cadence: rolling
              tasks:
                - "Agree a short daily diary format with the project manager"
                - "Write the daily diary entry before leaving work @recurring(daily)"
                - "Log each late client input with dates and correspondence references"
                - "Test whether one past delay event can be reconstructed from the files"
            - name: Productivity norms from completed projects
              description: |-
                ## Purpose
                Estimates for the next project are only as good as the history behind them, and most firms throw that history away at close-out. Extracting actual hours per drawing, datasheet and calculation by discipline and project type, normalised for complexity, gives norms that sharpen budgets, staffing plans and recovery forecasts.

                ## Milestones
                1. Actual hours by deliverable type extracted from three or more completed projects.
                2. Outliers and scope differences noted and normalised.
                3. A norms table by discipline and deliverable type with ranges.
                4. The norms shared with estimating and refreshed each year.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A norms table with ranges by discipline and deliverable type, drawn from at least three completed projects, is shared with estimating."
                cadence: cyclic
                effort_hours_estimate: "24"
              tasks:
                - "Collect final registers and timesheet data from three closed projects"
                - "Calculate actual hours per deliverable type by discipline"
                - "Normalise for scope and complexity differences"
                - "Refresh the norms table with the year's closed projects @recurring(yearly)"
---

# Engineering Project Delivery

Engineering projects rarely fail on the engineering; they fail on scope nobody wrote down, interfaces nobody owned and progress nobody measured honestly until month nine. These projects start with the foundations (charter, contract digest, work breakdown, deliverables register, rules of credit, responsibilities, execution plan, baseline schedule, interfaces, risks and the kick-off), then build the weekly and monthly machinery of progress, forecasting, change and reporting, the skills of critical path and earned value, the decisions on tools, recovery and execution strategy, the dated freezes, pushes, audits and close-out, the seats engineers and managers actually occupy, and the specialist work of schedule risk, dispute-ready records and productivity norms.

The repeating rhythm is a weekly progress cut-off, schedule update, change and trend review, interface call and action log, a monthly earned value run, client report, forecast, risk review and dashboard, and quarterly lessons learned and a yearly norms refresh. The Risk register, Meeting notes, Metrics log, Purchase decision and Remediation plan templates pair with the projects that need them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
