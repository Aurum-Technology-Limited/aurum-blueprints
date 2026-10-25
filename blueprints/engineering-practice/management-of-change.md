---
id: engineering-practice.management-of-change
name: Management of Change
description: "A working management of change system: clear rules on what counts as a change, risk-tiered reviews, temporary change expiry, pre-start-up checks, updated drawings and the audits that prove it works."
category: business
version: 1.0.0
tags: [engineering-practice, management-of-change, engineer, manager, process-safety, moc, pssr, temporary-changes]
author: Aurum Technology
starter_structure:
  templates:
    - meeting-notes
    - metrics-log
    - operational-checklist
    - compliance-control
    - purchase-decision
    - onboarding-30-60-90
  pillars:
    - name: Engineering Practice
      emoji: "🔧"
      description: "The day-to-day work of practising engineers: each major discipline, process safety and risk studies, FEED, design reviews, commissioning, reliability and maintenance, CAD, simulation and PLC work, project delivery, tenders, reports, ethics and standards, and the Caribbean energy sector from Point Lisas to LNG."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Management of Change
          description: "Controlling changes to plant, process and procedures: the change request, technical and safety review, approvals, updated drawings, training and post-change checks."
          projects:
            - name: Site MOC procedure gap check against good practice
              description: |-
                ## Purpose
                Most sites have an MOC procedure, but many were written years ago and drift from what regulators and good practice now expect, such as the OSHA PSM change element, Seveso and COMAH duties, or the CCPS management of change guidelines. Reading your procedure against one recognised reference shows where it is silent on temporary changes, organisational change, software or closeout, before an auditor or an incident finds the gap.

                ## Milestones
                1. The current controlled copy of the site MOC procedure located, with its revision and owner recorded.
                2. One recognised reference chosen for comparison and its main requirements listed.
                3. A gap table showing each requirement as met, partly met or missing, with the clause where it is covered.
                4. The top five gaps agreed with the procedure owner and given a target date.

                ## Notes
                Compare against the regulation that actually applies to your site first, then good practice guidance. Ask the process safety lead which one the regulator uses.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A gap table comparing the site MOC procedure with one named reference, with the top five gaps owned and dated by the procedure owner."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Download the controlled copy of the site MOC procedure and note its revision"
                - "Choose the regulation or guidance the comparison will use"
                - "Build a gap table of requirement, site clause and status"
                - "Review the top five gaps with the procedure owner"
            - name: Site definition of a change with worked examples
              description: |-
                ## Purpose
                Arguments about whether something needs an MOC waste days and, worse, let real changes through as routine maintenance. A one-page definition with twenty worked examples from your own plant, such as a new chemical injection point, a changed relief valve set pressure or a revised operating sequence, gives originators and supervisors the same answer every time.

                ## Milestones
                1. The procedure's definition of a change written in one plain paragraph.
                2. Twenty real examples from the site sorted into change, not a change and ask the MOC coordinator.
                3. Each example given a one-line reason for its classification.
                4. The page reviewed by operations, maintenance and engineering and posted where work is planned.

                ## Notes
                Include examples for procedures, staffing and software, not only hardware. Those are the ones people miss.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page change definition with at least twenty classified site examples, reviewed by three departments and posted in the planning office."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pull ten recent work orders that were argued over as possible changes"
                - "Draft the plain-language definition of a change for this site"
                - "Classify twenty examples with a one-line reason for each"
                - "Circulate the page to the operations, maintenance and engineering leads"
            - name: Replacement-in-kind equivalence checklist
              description: |-
                ## Purpose
                Replacement in kind is the route most unreviewed changes slip through: a pump impeller trimmed differently, a gasket in another material, a transmitter with a new range or a valve from a different maker. A short checklist that tests material, rating, dimensions, function and performance against the original specification lets a planner decide in minutes and sends genuine differences into review.

                ## Milestones
                1. A checklist of equivalence tests covering material, pressure and temperature rating, dimensions, function, performance and fail position.
                2. Each test tied to the document that holds the original value, such as a datasheet or line class.
                3. The checklist trialled on ten recent replacements and adjusted.
                4. The checklist added to the maintenance planning process as the step before ordering.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A replacement-in-kind checklist trialled on ten real replacements and built into the maintenance planning step before purchase orders are raised."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List five recent replacements where the new part differed from the old one"
                - "Write the equivalence tests with the source document for each"
                - "Trial the checklist on ten replacements from the last quarter"
                - "Agree with the maintenance planner where the checklist sits in the process"
            - name: Change request form reviewers can act on
              description: |-
                ## Purpose
                Reviewers send back change requests because the form lets originators skip the description of the current state, the reason, the affected systems or the proposed duration. Redesigning the form so each field asks one clear question cuts rework and gives approvers what they need on the first read.

                ## Milestones
                1. A list of the five most common reasons change requests were returned in the last year.
                2. A revised form with fields for current state, proposed state, reason, scope boundary, duration and affected documents.
                3. Help text under each field with a good and a poor example.
                4. The revised form issued under document control and the old version withdrawn.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A revised change request form with help text for every field, issued under document control, and the old form withdrawn from use."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Review twenty returned change requests and tally the reasons"
                - "Draft the revised form with one question per field"
                - "Ask the agent to draft help text with a good and poor example for each field"
                - "Submit the revised form for document control approval"
            - name: MOC roles and approval authority matrix
              description: |-
                ## Purpose
                When nobody is sure who may approve a change to a relief system or a safety instrumented function, approvals either stall or go to whoever is nearest. A matrix naming the originator, change owner, technical reviewers and approvers by risk tier and discipline makes authority visible and lets cover be arranged when people are on leave.

                ## Milestones
                1. Every MOC role defined in a sentence, from originator to final approver.
                2. A matrix showing who may review and approve each risk tier for each discipline.
                3. Named deputies for every approver role.
                4. The matrix approved by the site manager and loaded into the MOC workflow.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An approval authority matrix with named approvers and deputies for every tier and discipline, signed by the site manager and loaded into the workflow."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every role the MOC procedure mentions with a one-sentence duty"
                - "Fill the matrix of risk tier against discipline with named approvers"
                - "Confirm a deputy for each approver with their manager"
                - "Recheck the approver matrix against leavers, joiners and role moves @recurring(quarterly)"
            - name: Risk screening tiers for proposed changes
              description: |-
                ## Purpose
                Treating every change the same means a label change gets a full review and a new bypass line gets the same light touch. A short screening questionnaire that sorts changes into minor, moderate and major tiers decides the review depth, the approvers and whether a formal hazard study is needed.

                ## Milestones
                1. Eight to twelve screening questions covering hazardous inventory, safeguards, operating limits, procedures and people.
                2. Clear rules for which answers push a change into the moderate or major tier.
                3. The review and approval steps for each tier written out.
                4. The screening tested on fifteen past changes and the tier results checked by the process safety lead.

                ## Notes
                Any change that touches a relief device, a safety instrumented function or a hazardous inventory should never screen as minor.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A risk screening questionnaire with tier rules, tested on fifteen past changes and accepted by the process safety lead."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Draft the screening questions with the process safety lead"
                - "Write the tier rules and the review steps each tier triggers"
                - "Screen fifteen closed changes and compare with how they were handled"
                - "Adjust any question that sent a clearly risky change to the minor tier"
            - name: Baseline register of open changes
              description: |-
                ## Purpose
                Before improving anything you need to know how many changes are open, how old they are and which ones are already in service without closeout. Pulling every open MOC into one register with its stage, owner and age usually turns up changes nobody remembers owning.

                ## Milestones
                1. Every open change listed with number, title, stage, owner, risk tier and date raised.
                2. Changes already in service but not closed marked separately.
                3. Each change without a current owner assigned one by the area manager.
                4. The baseline count and age profile reported to the site leadership team.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A register of every open change with stage, owner and age, where no change is left without a named owner, reported to site leadership."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Export all open changes from the MOC system or paper files"
                - "Add stage, owner, risk tier and age columns to the register"
                - "Mark every change in service but not yet closed"
                - "Send the ownerless changes to the area managers for assignment"
            - name: Temporary change rules with hard expiry dates
              description: |-
                ## Purpose
                Temporary changes become permanent by neglect: a clamp on a leaking line or a hired generator stays for years without the review a permanent change would get. Writing rules that give every temporary change an expiry date, a maximum life and an explicit extension route stops the slow drift.

                ## Milestones
                1. A maximum life for temporary changes agreed, with a default such as 90 days.
                2. An extension route requiring a fresh review and a higher approver.
                3. A rule that an expired change must be removed or converted to a permanent change.
                4. The rules added to the procedure and briefed to the change owners.

                ## Notes
                Physical tagging in the field helps: a tag showing the change number and expiry date on the temporary item itself.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Temporary change rules with a maximum life, an extension route and an expiry action, added to the procedure and briefed to every change owner."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Count the temporary changes currently past their original end date"
                - "Draft the maximum life, extension and expiry rules"
                - "Agree the rules with the operations manager and process safety lead"
                - "Brief the change owners on the new rules at the review board"
            - name: Emergency change route for out-of-hours work
              description: |-
                ## Purpose
                At three in the morning with a unit at risk of tripping, nobody waits for a full review board, and a procedure that pretends otherwise gets ignored. An emergency route that allows a minimum review by the shift supervisor and an on-call engineer, then requires full review the next working day, keeps urgent changes controlled.

                ## Milestones
                1. Criteria for what qualifies as an emergency change written and kept short.
                2. A minimum review set for the emergency route, including a named on-call technical reviewer.
                3. A rule that every emergency change gets full review within one working day.
                4. A count of emergency changes reported monthly so the route does not become the normal route.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An emergency change route with written criteria, a named on-call reviewer and a next-working-day full review rule, issued in the procedure."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Review the last ten urgent changes and how they were authorised"
                - "Write the emergency criteria and the minimum review steps"
                - "Set up the on-call technical reviewer rota with the engineering manager"
                - "Add the emergency route to the procedure and brief the shift supervisors"
            - name: Document and PSI impact checklist for each change
              description: |-
                ## Purpose
                A change is not complete until every document that describes the plant matches it, yet most closeout failures come from one forgotten item such as the relief system basis, the cause and effect chart or the operating procedure. A checklist of affected documents filled in at the start of each change turns closeout into a tick list instead of a memory test.

                ## Milestones
                1. A list of document types a change can affect, including P&IDs, datasheets, line lists, relief basis, cause and effect charts, alarm settings and procedures.
                2. Each document type linked to the person who updates it.
                3. The checklist made a mandatory part of the change request.
                4. Three recent changes checked against the list to show what would have been missed.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A document impact checklist naming every affected document type and its updater, mandatory on all new change requests."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every document type the site uses to describe its process and plant"
                - "Name the owner who updates each document type"
                - "Test the checklist on three recently closed changes"
                - "Ask the MOC coordinator to make the checklist mandatory on new requests"
            - name: Weekly change review board meeting
              description: |-
                ## Purpose
                Meeting weekly, with originators presenting changes, reviewers raising questions and approvers deciding, keeps changes moving and makes the standard visible to everyone. Without it, changes queue in inboxes and get approved by email without anyone hearing the operations view.

                ## Milestones
                1. A fixed weekly slot with operations, maintenance, engineering and process safety represented.
                2. A standing agenda covering new requests, changes awaiting approval, start-up readiness and overdue items.
                3. Decisions and actions recorded with owners at every meeting.
                4. Attendance and decisions tracked so missing disciplines are noticed.

                ## Notes
                Start from the **Meeting notes** template. Thirty minutes is enough if changes are pre-read.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly review board held for twelve consecutive weeks with decisions and actions recorded for each change presented."
                cadence: rolling
              tasks:
                - "Book the weekly board slot with the four disciplines"
                - "Write the standing agenda and circulate it"
                - "Send the change list for pre-reading the day before the board"
                - "Hold the change review board and record decisions @recurring(weekly:tue)"
            - name: Monthly overdue temporary change sweep
              description: |-
                ## Purpose
                Expiry dates only work if someone looks at them. A monthly sweep of temporary changes nearing or past expiry, with a decision for each one to remove, extend through review or make permanent, keeps the temporary list short and honest.

                ## Milestones
                1. A list of temporary changes expiring within 30 days, run every month.
                2. A decision recorded for every expired change: remove, extend or convert.
                3. Any change overdue by more than 30 days escalated to the area manager.
                4. The number of overdue temporary changes trending down over six months.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly sweeps completed where every expired temporary change has a recorded remove, extend or convert decision."
                cadence: rolling
              tasks:
                - "Set up a saved report of temporary changes by expiry date"
                - "Run the temporary change expiry sweep and send owners their list @recurring(monthly:8)"
                - "Escalate changes more than 30 days overdue to the area manager"
                - "Record the overdue count in the backlog report"
            - name: Monthly MOC backlog and ageing report
              description: |-
                ## Purpose
                Site leaders need one page a month that shows whether changes are flowing or piling up: how many are open by stage, how old they are, and how many are in service without closeout. A steady report built from the same definitions every month shows trends that no single meeting reveals.

                ## Milestones
                1. A one-page report layout with open changes by stage, age bands and risk tier.
                2. A separate count of changes in service but not closed.
                3. Six months of data collected on the same definitions.
                4. The report reviewed at the site leadership meeting with actions on the worst ageing.

                ## Notes
                Start from the **Metrics log** template to keep the monthly numbers in one place.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly backlog reports on fixed definitions, each reviewed by site leadership with actions recorded."
                cadence: rolling
              tasks:
                - "Agree the stage and age band definitions with the MOC coordinator"
                - "Build the one-page report layout"
                - "Produce the MOC backlog and ageing report for site leadership @recurring(monthly:3)"
                - "Pick the three oldest changes for named follow-up each month"
            - name: Drawing and document closeout before MOC closure
              description: |-
                ## Purpose
                Changes are often closed once the hardware works, leaving P&IDs, datasheets and procedures showing a plant that no longer exists. A weekly check that every change ready to close has its marked-up documents returned and issued means the next engineer and the next HAZOP work from the true plant.

                ## Milestones
                1. A closure rule that no change closes until every item on its document impact list is issued.
                2. A weekly list of changes awaiting document updates, by document owner.
                3. Redlines held in a controlled place until drafted and issued.
                4. Changes in service with outstanding documents falling to fewer than ten.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No change closed without its full document list issued, and the count of in-service changes awaiting documents below ten for three months."
                cadence: rolling
              tasks:
                - "Agree the closure rule with the document controller"
                - "List changes in service with outstanding document updates"
                - "Check document closeout status for changes ready to close @recurring(weekly:thu)"
                - "Send each document owner their outstanding updates"
            - name: Pre-start-up safety review checklist routine
              description: |-
                ## Purpose
                The pre-start-up safety review is the last gate before a changed system meets process fluid, and it fails when it becomes a signature without a walk. A standard checklist covering construction to specification, procedures in place, training done, hazard review actions closed and safeguards working makes every review physical and repeatable.

                ## Milestones
                1. A checklist with sections for construction, procedures, training, hazard review actions, safeguards and documents.
                2. A rule that the review includes a field walk by operations and engineering together.
                3. Items that must be closed before start-up separated from those allowed after.
                4. The checklist used on every change commissioned in a quarter.

                ## Notes
                Start from the **Operational checklist** template. Where the OSHA PSM rule applies, the pre-start-up review is a specific requirement for new and modified facilities.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A pre-start-up checklist used with a joint field walk on every change commissioned for one quarter, with pre-start-up items closed before start."
                cadence: rolling
              tasks:
                - "Draft the pre-start-up checklist sections with operations"
                - "Split items into must close before start-up and may close after"
                - "Run the next pre-start-up review as a joint field walk"
                - "File the signed checklist with the change record"
            - name: Safety system bypass and override register
              description: |-
                ## Purpose
                Bypassing a trip or inhibiting an alarm is a change to the plant's protection, even if it lasts a shift. A live register of every override, with the reason, the compensating measure, the authoriser and the planned removal time, means nobody inherits an unknown bypass at handover.

                ## Milestones
                1. A register showing every active override with tag, reason, compensating measure, authoriser and removal time.
                2. Authorisation levels set by override duration, with long overrides routed into MOC.
                3. The register reviewed at every shift handover.
                4. No override older than its authorised duration without a fresh approval.

                ## Notes
                Overrides beyond one shift or one day should usually need an MOC or a documented risk assessment. Agree the limit with the process safety lead.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A live override register reviewed at every shift handover, with zero overrides past their authorised duration at the monthly check."
                cadence: rolling
              tasks:
                - "Compare active overrides in the control system against the register"
                - "Set authorisation levels by override duration with the process safety lead"
                - "Check the override register at shift handover @recurring(daily)"
                - "Review long-standing overrides with the area manager @recurring(weekly:mon)"
            - name: Operating limit, setpoint and alarm change log
              description: |-
                ## Purpose
                Raising a high temperature alarm by ten degrees or widening a feed rate limit changes the safe operating envelope as surely as new pipework does. A log that sends limit, trip and alarm changes through the right level of review, and reconciles them monthly against the control system, catches the quiet edits made to stop nuisance alarms.

                ## Milestones
                1. A rule stating which setpoint, alarm and limit changes need MOC and which need only a supervisor log entry.
                2. A log of every limit and alarm change with old value, new value, reason and approver.
                3. A monthly reconciliation of the log against the control system's configuration.
                4. Any unlogged change found raised as a retrospective MOC.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A limit and alarm change log reconciled monthly against the control system for six months, with every unlogged change raised as an MOC."
                cadence: rolling
              tasks:
                - "Agree which limit and alarm changes need a full MOC"
                - "Set up the change log with old value, new value and approver"
                - "Reconcile the log against the control system configuration @recurring(monthly:12)"
                - "Raise a retrospective MOC for each unlogged change found"
            - name: Affected people briefings before start-up
              description: |-
                ## Purpose
                Operators who meet a changed system without knowing what changed are the people most likely to be hurt by it. A briefing record for every change, listing who is affected on each shift and how they were told, makes training a gate rather than an afterthought.

                ## Milestones
                1. A rule that each change lists its affected roles and the briefing or training each needs.
                2. A briefing record format showing name, shift, date and method.
                3. Every shift crew briefed before a change is started up, including those on leave on their return.
                4. Training records checked monthly for changes started in the month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every change started up in a quarter has a briefing record covering all affected roles on all shifts before start-up."
                cadence: rolling
              tasks:
                - "Add an affected roles field to the change request"
                - "Create the briefing record format with the training coordinator"
                - "Brief all shift crews for the next change before its start-up"
                - "Check briefing completion for changes started up this month @recurring(monthly:16)"
            - name: Post-change performance checks at 30 and 90 days
              description: |-
                ## Purpose
                Approved on paper, a change can still behave differently in service: a new control valve hunting, a changed exchanger fouling faster, a revised procedure that operators work around. Checking each significant change at 30 and 90 days against what it was meant to achieve closes the loop and feeds lessons into the next review.

                ## Milestones
                1. Each moderate and major change given a stated intended outcome at approval.
                2. Checks at 30 and 90 days recorded against that outcome.
                3. Any unexpected behaviour raised as an action or a new change.
                4. A lessons note shared at the review board for any change that did not perform.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every moderate and major change started in six months has a recorded 30-day and 90-day check against its intended outcome."
                cadence: rolling
              tasks:
                - "Add an intended outcome field to moderate and major changes"
                - "List changes reaching 30 and 90 days in service this month"
                - "Run the post-change checks with the change owners @recurring(monthly:25)"
                - "Share lessons from any underperforming change at the review board"
            - name: Quarterly sample audit of closed changes
              description: |-
                ## Purpose
                Closed changes look complete in the system, but only a sample check shows whether hazard reviews were real, documents were updated and pre-start-up actions were truly closed. Pulling five closed changes every quarter and checking them against the procedure gives an early warning long before an external audit.

                ## Milestones
                1. A sample of five closed changes picked each quarter across risk tiers and areas.
                2. Each change checked against a standard list covering screening, review, approval, training, pre-start-up and documents.
                3. Findings logged with owners and dates.
                4. A one-paragraph summary of quality trends shared with the procedure owner.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly samples of five closed changes each, with findings logged and owned and a trend summary sent to the procedure owner."
                cadence: cyclic
              tasks:
                - "Write the standard check list for a closed change"
                - "Pick five closed changes across tiers and areas for this quarter"
                - "Audit the sample of closed changes and log findings @recurring(quarterly)"
                - "Send the quality trend summary to the procedure owner"
            - name: Writing a change request that passes first review
              description: |-
                ## Purpose
                Engineers who write clear change requests get them approved weeks faster, and reviewers learn to trust their work. Practising the core of a good request, which is the current state, the proposed state, the reason, the boundary and what else it touches, turns the form from a chore into a short technical argument.

                ## Milestones
                1. Three well-written past change requests from the site studied for what makes them clear.
                2. One of your own past requests rewritten using the same structure.
                3. Your next live change request reviewed by a senior engineer before submission.
                4. That request approved without being returned for missing information.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A live change request written with the practised structure and approved at its first review without return."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the MOC coordinator for three examples of excellent change requests"
                - "Note the structure the examples share"
                - "Rewrite one of your own earlier requests in that structure"
                - "Have a senior engineer read your next request before you submit it"
            - name: Case studies of change failures from major incidents
              description: |-
                ## Purpose
                Some of the worst process industry disasters began with an unreviewed change: the temporary bypass pipe at Flixborough in 1974, or the siting of occupied trailers near a unit at Texas City in 2005. Reading the investigation reports and asking where your own system would have caught each failure makes the procedure feel like protection rather than paperwork.

                ## Milestones
                1. Investigation summaries for at least four incidents where change management failed read and noted.
                2. For each, the specific MOC weakness written in one sentence.
                3. Each weakness tested against your own procedure with a yes or no on whether it would be caught.
                4. A short talk or note shared with your team on the lessons that apply to your site.

                ## Notes
                Public investigation boards such as the US Chemical Safety Board publish reports and videos that work well for team sessions.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Four incident case studies written up with the MOC weakness in each tested against the site procedure, and lessons shared with the team."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read the investigation summary of the Flixborough explosion"
                - "Choose three more incidents where change management failed"
                - "Test each incident's MOC weakness against your site procedure"
                - "Read one incident report involving a change and note the lesson @recurring(monthly:18)"
            - name: Choosing the right hazard review for the size of change
              description: |-
                ## Purpose
                For many small changes a checklist review is enough, a what-if session suits most moderate ones, and some changes need a full HAZOP or LOPA referral. Knowing which method fits which change, and how to run the lighter ones well, saves the study team for the changes that need it and avoids rubber stamps on the rest.

                ## Milestones
                1. The strengths and limits of checklist, what-if, HAZOP and LOPA written down for change reviews.
                2. A rule of thumb agreed linking each risk tier to a default review method.
                3. One what-if review for a moderate change facilitated or co-facilitated.
                4. The review record filed with the change and checked by the process safety lead.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written method selection rule for each risk tier, and one what-if review of a live change facilitated and accepted by the process safety lead."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List the review methods the site procedure allows for changes"
                - "Write when each method fits, with a site example"
                - "Co-facilitate a what-if review on a moderate change"
                - "Ask the process safety lead to critique the review record"
            - name: Marking up P&ID redlines for a change
              description: |-
                ## Purpose
                A redline is the bridge between the engineer's intent and the drafter's update, and an unclear one produces a wrong drawing that outlives everyone involved. Learning the site convention for redlines, greenlines and clouding, and practising on a real change, makes your markups unambiguous.

                ## Milestones
                1. The site drafting standard for markups read, including colours, clouds and revision triangles.
                2. A practice markup of a past change compared with the issued drawing.
                3. Redlines for a live change produced and accepted by the drafter without queries.
                4. The as-built check of that drawing against the field done after construction.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Redlines for one live change accepted by the drafting team without queries and checked against the as-built field installation."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find the site drafting standard section on markups"
                - "Mark up a past change and compare with the issued drawing"
                - "Produce redlines for your next live change"
                - "Walk the installation and confirm the drawing matches the field"
            - name: Reviewing a change as a technical approver
              description: |-
                ## Purpose
                Being added to the approver list is not the same as knowing what to look for. New technical approvers in a discipline benefit from a short list of questions they always ask, a few supervised reviews and a clear sense of when to refuse or send a change back.

                ## Milestones
                1. A personal list of eight to ten review questions for your discipline.
                2. Three changes reviewed alongside an experienced approver, with differences discussed.
                3. One change returned with clear, specific reasons the originator could act on.
                4. Your approval authority confirmed in the matrix.

                ## Notes
                A good approver comment states the concern, why it matters and what would resolve it, in that order.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three supervised reviews completed and a personal discipline review question list written, with approval authority confirmed in the matrix."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Draft your review question list for your discipline"
                - "Shadow an experienced approver on three changes"
                - "Compare your comments with theirs on each change"
                - "Ask the MOC coordinator to confirm your entry in the matrix"
            - name: Process safety information a change can touch
              description: |-
                ## Purpose
                The process safety information file holds chemical hazards, design limits, relief design basis, materials of construction and the electrical area classification, and a change to any piece of it can quietly invalidate another. Mapping where each item lives on your site lets you trace the knock-on effects of a change in an afternoon.

                ## Milestones
                1. A map of where each class of process safety information is held on the site.
                2. The owner of each information class named.
                3. One recent change traced through every item it touched, including indirect ones.
                4. Any outdated information found during the trace reported to its owner.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A map of site process safety information locations and owners, tested by tracing one real change through every item it affected."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the classes of process safety information the site holds"
                - "Find where each class is stored and who owns it"
                - "Trace one recent change through all the information it touched"
                - "Report any outdated items to their owners"
            - name: Software and control system changes under MOC
              description: |-
                ## Purpose
                Logic edits, new interlocks, firmware updates and DCS configuration changes alter how the plant behaves but are often handled informally by the controls team. Learning how the site classifies software changes, what backup and test evidence a reviewer needs, and how they reach the cause and effect charts brings them under the same control as hardware.

                ## Milestones
                1. The site rules for software change classification read and summarised.
                2. The evidence set for a software change listed: backup, change description, test record and rollback plan.
                3. One live software change followed from request to closeout.
                4. Gaps in software change handling raised with the controls lead.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A summary of software change rules and evidence, and one live control system change followed through to closeout with gaps raised."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the controls lead how logic and configuration changes are recorded"
                - "List the evidence a reviewer should see for a software change"
                - "Follow one software change from request to closeout"
                - "Write up the gaps you saw for the controls lead"
            - name: Choosing an electronic MOC workflow system
              description: |-
                ## Purpose
                Spreadsheets and paper packs cannot route approvals, chase overdue actions or report backlog reliably once a site handles more than a few dozen changes a year. Comparing a short list of workflow systems, including any module in your existing maintenance or document system, against the same criteria leads to a choice the users will actually adopt.

                ## Milestones
                1. Requirements agreed covering routing, tier rules, attachments, reminders, reporting and audit trail.
                2. Three options shortlisted, including an existing enterprise system module.
                3. Each option demonstrated using a real past change.
                4. A recommendation with cost and implementation effort approved by the site manager.

                ## Notes
                Start from the **Purchase decision** template. Involve a shift supervisor in the demonstrations: they are the heaviest users at night.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three MOC workflow options scored against agreed requirements with a recommendation approved by the site manager."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Write the requirements list with the MOC coordinator and a shift supervisor"
                - "Shortlist three workflow options including existing system modules"
                - "Run each demonstration on the same past change"
                - "Ask the agent to draft the comparison summary from your scoring sheet"
            - name: Moving MOC records from paper to an electronic system
              description: |-
                ## Purpose
                Migrating to an electronic workflow fails when open paper changes are left in limbo or historic records become unsearchable. Planning which records move, which are scanned and which stay archived, then running both systems for a short overlap, keeps every change traceable.

                ## Milestones
                1. A migration rule for open changes, recent closed changes and historic records.
                2. All open changes entered in the new system with their current stage and owner.
                3. Historic closed changes scanned and indexed by number, unit and equipment tag.
                4. The paper route withdrawn after an agreed overlap.
              priority: medium
              deadlineOffsetDays: 270
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every open change live in the electronic system, historic records indexed and searchable, and the paper route formally withdrawn."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Agree the migration rule for open, recent and historic changes"
                - "Enter the open changes into the new system"
                - "Arrange scanning and indexing of the historic records"
                - "Set the date the paper route is withdrawn"
            - name: Cutting MOC cycle time without cutting the review
              description: |-
                ## Purpose
                When a simple change takes three months, people find ways around the system. Measuring where time is lost, such as waiting for a reviewer, waiting for a board or waiting for drawings, and fixing the biggest queue usually halves cycle time without removing any safety step.

                ## Milestones
                1. Median days in each stage measured for the last 50 changes.
                2. The two stages with the longest waits identified with their causes.
                3. One change to the process trialled for three months, such as parallel reviews or reviewer time limits.
                4. Median cycle time remeasured and compared with the baseline.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Stage-by-stage cycle times measured for 50 changes, one process change trialled and the median remeasured after three months."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Export stage dates for the last 50 closed changes"
                - "Calculate median days spent in each stage"
                - "Pick one fix for the longest queue and agree a trial"
                - "Remeasure the median cycle time after the trial"
            - name: One front door for engineering, maintenance and procedure changes
              description: |-
                ## Purpose
                Many sites grew separate routes for engineering modifications, maintenance substitutions and procedure revisions, each with its own form and rules, and changes fall between them. Bringing them through one front door with one screening step means every change is seen once and sent down the right path.

                ## Milestones
                1. Every existing change route on site mapped with its form and owner.
                2. Overlaps and gaps between the routes listed.
                3. A single entry form and screening step designed for all of them.
                4. The combined route approved and the old forms withdrawn.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A single change entry route covering engineering, maintenance and procedure changes, approved and with the old forms withdrawn."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Map every route by which a change can be raised on site"
                - "List where routes overlap and where changes fall between them"
                - "Design the single entry form and screening step"
                - "Present the combined route to the site leadership team"
            - name: MOC performance indicators with clear definitions
              description: |-
                ## Purpose
                Indicators such as overdue temporary changes, changes in service without closeout and pre-start-up actions open after start-up are useful leading indicators, but only if everyone counts them the same way. Writing precise definitions, data sources and targets for five indicators makes the numbers comparable month to month and site to site.

                ## Milestones
                1. Five MOC indicators chosen, with at least three leading ones.
                2. A written definition, data source and counting rule for each.
                3. A target or threshold agreed for each with site leadership.
                4. The indicators added to the site process safety dashboard.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Five MOC indicators with written definitions, data sources and agreed targets, live on the site process safety dashboard."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Shortlist eight candidate MOC indicators"
                - "Choose five and write the definition and data source for each"
                - "Agree targets with the site leadership team"
                - "Ask the dashboard owner to add the indicators"
            - name: Legacy temporary change clean-up campaign
              description: |-
                ## Purpose
                Sites with long histories often carry dozens of temporary changes that outlived their owners, from hoses and clamps to software forces. A time-boxed campaign that walks each one, then removes it or puts it through permanent review, clears the backlog and resets expectations.

                ## Milestones
                1. Every legacy temporary change listed with its location and original reason.
                2. Each one walked in the field and its current condition recorded.
                3. A decision made for each: remove, convert to permanent with review, or justify a dated extension.
                4. The legacy list reduced to zero or to a short list with approved end dates.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Every legacy temporary change walked and decided, leaving none without either removal, permanent approval or a dated extension."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "List every temporary change older than one year"
                - "Walk each one in the field with the area operator"
                - "Record a remove, convert or extend decision for each"
                - "Report clean-up progress to the area managers @recurring(monthly:28)"
            - name: Approver calibration on change classification
              description: |-
                ## Purpose
                Two approvers looking at the same change often place it in different risk tiers, and originators learn to send their changes to the lenient one. A yearly calibration session where approvers classify the same ten anonymised changes and discuss the differences narrows the spread.

                ## Milestones
                1. Ten anonymised past changes chosen to cover clear and borderline cases.
                2. Every approver classifying them independently before the session.
                3. Differences discussed and an agreed classification recorded for each.
                4. Any rule in the screening questionnaire that caused disagreement revised.
              priority: low
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A calibration session held with all approvers, agreed tiers recorded for ten test changes and the screening rules revised where needed."
                cadence: cyclic
              tasks:
                - "Select ten anonymised changes including borderline cases"
                - "Send the set to every approver to classify independently"
                - "Run the approver calibration session on change tiers @recurring(yearly)"
                - "Revise the screening questions that caused the widest spread"
            - name: Field walkdown for unrecorded changes
              description: |-
                ## Purpose
                Every plant has changes nobody recorded: a new tie-in, a removed block valve, a different pump fitted after a failure. A quarterly walkdown of one unit, comparing the field with the current P&IDs, finds these before they mislead a permit, an isolation or a hazard study.

                ## Milestones
                1. A rota so each unit is walked at least once a year.
                2. Each walkdown recorded with a list of differences between field and drawings.
                3. Every difference sorted into drawing error or unrecorded change.
                4. Unrecorded changes raised as retrospective MOCs and drawing errors sent to document control.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly walkdowns completed with every difference sorted and either raised as a retrospective MOC or sent for drawing correction."
                cadence: cyclic
              tasks:
                - "Set up the annual walkdown rota by unit"
                - "Print the current P&IDs for the unit due next"
                - "Walk the scheduled unit against its P&IDs with an operator @recurring(quarterly)"
                - "Raise retrospective MOCs for unrecorded changes found"
            - name: Preparing for an MOC compliance audit
              description: |-
                ## Purpose
                Auditors test management of change by sampling records, so a site that cannot quickly show the screening, review, approvals, training and pre-start-up evidence for any change will struggle whatever its practice. Preparing a record index and a self-check six weeks ahead turns the audit into a demonstration rather than a search.

                ## Milestones
                1. The audit scope and the standard or regulation being tested confirmed.
                2. A self-check of twenty changes against the audit protocol completed.
                3. Gaps found in the self-check corrected or explained in writing.
                4. A record index ready so any change pack can be produced within minutes.

                ## Notes
                Start from the **Compliance control** template. Correct genuine gaps; never backdate or recreate records.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A twenty-change self-check completed and a record index in place before the audit, with every self-check gap corrected or explained."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "Confirm the audit scope and protocol with the auditor"
                - "Self-check twenty changes against the audit protocol"
                - "Correct or explain each gap found in writing"
                - "Build the record index by change number, unit and date"
            - name: Turnaround change package approved by scope freeze
              description: |-
                ## Purpose
                Turnarounds bring a wave of modifications that must be reviewed, approved and fully designed before the work is planned, and late changes are where turnaround incidents and overruns begin. Setting a cut-off so every turnaround change is approved by scope freeze, and any late addition faces a higher bar, protects both safety and the schedule.

                ## Milestones
                1. Every proposed turnaround modification raised as a change with its risk tier.
                2. All turnaround changes reviewed and approved by the scope freeze date.
                3. A late change rule requiring turnaround manager approval and a fresh risk review.
                4. Pre-start-up reviews for each change scheduled into the start-up plan.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "All turnaround modifications approved through MOC by scope freeze, with late changes recorded against the late change rule."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Get the scope freeze date from the turnaround manager"
                - "Raise a change for each proposed turnaround modification"
                - "Schedule review boards to clear all turnaround changes before freeze"
                - "Add each change's pre-start-up review to the start-up plan"
            - name: Start-up readiness after a major modification
              description: |-
                ## Purpose
                Restarting a unit after a major modification, such as a new compressor, a revamped column or a new safety instrumented function, is the riskiest point in the change's life. A readiness plan that ties every pre-start-up item, procedure, briefing and document to the start-up date means the go decision rests on evidence, not optimism.

                ## Milestones
                1. A readiness list linking every open item on the modification to an owner and a date before start-up.
                2. Operating procedures for the modified system issued and walked through with each shift.
                3. The pre-start-up safety review completed with a joint field walk.
                4. A go or no-go decision recorded by the named start-up authority.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A recorded go decision supported by a completed pre-start-up review, issued procedures and briefing records for all shifts."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "List every open item on the modification with owner and date"
                - "Issue the procedures for the modified system and brief each shift"
                - "Hold the pre-start-up review with a joint field walk"
                - "Record the go or no-go decision and its evidence"
            - name: Presenting MOC records to a regulator or insurer
              description: |-
                ## Purpose
                Regulators, insurers and corporate auditors increasingly ask to see how a site controls change, often with little notice. A short pack explaining the system with backlog figures and two or three exemplary change records lets you answer confidently and keeps the conversation on evidence.

                ## Milestones
                1. A two-page summary of the MOC system with flow, tiers and roles.
                2. Current backlog and indicator figures attached.
                3. Two or three complete change packs chosen as worked examples.
                4. Questions and follow-ups from the visit recorded and assigned.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A presentation pack with a system summary, current figures and complete example change records, used in the visit with follow-ups assigned."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Draft the two-page MOC system summary"
                - "Pull the latest backlog and indicator figures"
                - "Choose two or three complete change packs as examples"
                - "Record visit questions and assign the follow-ups"
            - name: Annual MOC procedure revision and reissue
              description: |-
                ## Purpose
                Audit findings, incident lessons, staff feedback and changes in regulation pile up through the year, and a procedure revised only after a crisis reflects none of them. A yearly revision that collects every proposed amendment, consults users and reissues with a briefing keeps the procedure current.

                ## Milestones
                1. A running list of proposed amendments kept through the year.
                2. Users consulted on the draft revision, including shift supervisors.
                3. The revision approved, issued under document control and its changes summarised.
                4. Approvers and change owners briefed on what changed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A revised MOC procedure issued each year with a summary of changes and a briefing record for approvers and change owners."
                cadence: cyclic
              tasks:
                - "Start a running list of proposed procedure amendments"
                - "Open the yearly procedure revision and circulate the draft @recurring(yearly)"
                - "Collect comments from shift supervisors and approvers"
                - "Brief approvers and change owners on the reissued procedure"
            - name: First 90 days as MOC coordinator
              description: |-
                ## Purpose
                New MOC coordinators inherit a backlog, a set of habits and a group of approvers who may not welcome reminders. Spending the first month learning the system and people, the second fixing the quickest wins and the third setting a plan for the year earns credibility before asking for bigger changes.

                ## Milestones
                1. One-to-one conversations held with every approver and the main originators.
                2. The open change register and backlog figures understood and verified.
                3. Three quick wins delivered, such as clearing ownerless changes or fixing a confusing form field.
                4. A one-year improvement plan agreed with the process safety manager.

                ## Notes
                Start from the **Onboarding 30/60/90** template.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Conversations held with all approvers, three quick wins delivered and a one-year improvement plan agreed within 90 days."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Book short one-to-one meetings with every approver"
                - "Verify the open change register against the system"
                - "Pick and deliver three quick wins"
                - "Draft the one-year MOC improvement plan"
            - name: Raising and approving changes on night shift
              description: |-
                ## Purpose
                Shift supervisors and night engineers face changes with no review board, a thin team and pressure to keep the unit running. A pocket guide on what they can authorise, when to call the on-call engineer and how to hand a change over to days protects them and the plant.

                ## Milestones
                1. A one-page guide for night shift on emergency criteria, override limits and who to call.
                2. The on-call contact list kept current and in the control room.
                3. A handover template so days pick up every night shift change.
                4. The guide reviewed with each shift crew.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A night shift MOC pocket guide and handover template reviewed with every shift crew and kept in the control room."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask two shift supervisors what change decisions they face at night"
                - "Draft the one-page night shift guide"
                - "Create the handover template for night shift changes"
                - "Walk through the guide with each shift crew"
            - name: Contractor and vendor field changes during a project
              description: |-
                ## Purpose
                On projects, contractors substitute materials, reroute pipework around clashes and vendors swap components, and each one can alter the design basis the hazard study approved. A clear link between the project's field change requests and the site MOC makes sure technical changes are reviewed with the same rigour as the original design.

                ## Milestones
                1. The project field change process and the site MOC mapped side by side.
                2. A rule stating which field changes must go through site MOC.
                3. Contractor and vendor leads briefed on the rule.
                4. A log of field changes reconciled with MOC records before mechanical completion.
              priority: medium
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A field change rule agreed with the project and contractors, and every technical field change reconciled with an MOC record before mechanical completion."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Get the project's field change procedure from the project engineer"
                - "Write the rule for which field changes need site MOC"
                - "Brief the contractor and vendor leads on the rule"
                - "Reconcile the field change log with MOC records"
            - name: Lean MOC for a small site or single-unit plant
              description: |-
                ## Purpose
                Small plants with one engineer and a handful of operators cannot run a weekly board with four disciplines, yet their hazards are real and their regulators still expect control. A lean version with a single form, a short screening, an external reviewer for major changes and a monthly review keeps the essentials without a bureaucracy nobody can staff.

                ## Milestones
                1. A single form combining request, screening, review and pre-start-up check.
                2. An external reviewer arranged for major tier changes, such as a consultant or group engineer.
                3. A monthly review of open and temporary changes in place.
                4. The lean system documented in two pages and briefed to the whole team.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A two-page lean MOC system with a single form, an external major change reviewer and a monthly review, briefed to all staff."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Draft the single combined change form"
                - "Arrange an external reviewer for major tier changes"
                - "Hold the small-site monthly change review @recurring(monthly:5)"
                - "Brief the whole team on the two-page system"
            - name: Organisational change MOC for restructures and staff cuts
              description: |-
                ## Purpose
                Removing a shift position, merging two roles or outsourcing maintenance can weaken safeguards that depend on people, such as alarm response, permit issuing or emergency roles. Running restructures through an organisational MOC that maps safety-critical tasks before and after the change shows whether anything has been dropped.

                ## Milestones
                1. Safety-critical tasks and their current holders listed for the affected teams.
                2. The proposed organisation checked to show who holds each task afterwards.
                3. Workload and competence gaps identified and mitigations agreed.
                4. A review date set after the change to confirm the tasks are still covered.

                ## Notes
                Keep personal and employment details out of the MOC record. It assesses roles and tasks, not individuals.
              priority: medium
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "An organisational MOC showing every safety-critical task assigned after the restructure, with mitigations agreed and a post-change review date set."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "List safety-critical tasks for each affected team"
                - "Map who holds each task in the proposed organisation"
                - "Agree mitigations for any uncovered task or overload"
                - "Set the post-change review date with human resources and operations"
            - name: Bringing an acquired site onto your MOC system
              description: |-
                ## Purpose
                When a company buys or takes over a site, its change system may differ in tiers, forms and approval authority, and the transition period is when changes are most likely to fall through. A planned alignment with a gap check, a mapped backlog and a cut-over date keeps every change owned throughout.

                ## Milestones
                1. The acquired site's MOC procedure compared with your own.
                2. Its open changes mapped into your tiers with owners confirmed.
                3. A cut-over date agreed after which all new changes use your system.
                4. Approvers at the new site trained and added to the matrix.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The acquired site's open changes mapped and owned, its approvers trained and a cut-over date passed with all new changes in the common system."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Obtain the acquired site's MOC procedure and open change list"
                - "Compare its tiers and approvals with your own"
                - "Map its open changes into your tiers with confirmed owners"
                - "Agree the cut-over date with both site managers"
            - name: Creeping change review of cumulative small modifications
              description: |-
                ## Purpose
                Ten small changes, each reviewed and harmless on its own, can together raise throughput beyond the relief system's design, overload a flare header or push a pump off its curve. A yearly review of all changes on one system, looking at their combined effect on design limits, finds the creep that individual reviews miss.

                ## Milestones
                1. All changes on one system over the past five years listed.
                2. Their combined effect on rates, pressures, inventories and relief loads assessed.
                3. Any design limit approached or exceeded recorded with its margin.
                4. Actions raised where the combined effect needs a fresh study.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A cumulative change review completed for one system each year, with remaining margins to design limits recorded and actions raised where needed."
                cadence: cyclic
              tasks:
                - "Pick the system with the most changes in the last five years"
                - "List every change on it and the design value each touched"
                - "Run the cumulative creeping change review for one system @recurring(yearly)"
                - "Raise a study where combined changes erode a design margin"
            - name: Feedstock, catalyst and chemical supplier changes
              description: |-
                ## Purpose
                A new crude blend, a different gas composition, a catalyst from another supplier or a substitute water treatment chemical can change corrosion rates, reaction behaviour and relief loads without a single bolt being touched. Treating these supply changes as MOC triggers, with a technical review of composition and compatibility, prevents surprises in the plant.

                ## Milestones
                1. A list of feedstocks, catalysts and chemicals where a change of source or specification needs MOC.
                2. Purchasing and the laboratory briefed to flag such changes before the first delivery.
                3. A review checklist covering composition, impurities, compatibility, materials and waste.
                4. One recent supply change reviewed retrospectively with the checklist.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A supply change trigger list and review checklist in use, with purchasing and the laboratory flagging changes before first delivery."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List the feedstocks, catalysts and chemicals whose change needs MOC"
                - "Agree the flagging step with purchasing and the laboratory"
                - "Write the supply change review checklist"
                - "Review one recent supply change with the checklist"
            - name: Human factors review of procedure and HMI changes
              description: |-
                ## Purpose
                Changes to operating procedures, alarm displays and HMI screens are often reviewed only for technical accuracy, but a new step in the wrong place or a moved alarm can trip up an operator at the worst moment. Adding a human factors check, with operators testing the change before issue, catches the errors that drawings cannot show.

                ## Milestones
                1. A short human factors checklist covering workload, step order, wording, display layout and alarm load.
                2. A rule that procedure and HMI changes are walked or simulated by at least two operators before issue.
                3. The checklist applied to the next three procedure or HMI changes.
                4. Operator feedback recorded and acted on in each change.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A human factors checklist applied, with operator walk-throughs, to three procedure or HMI changes and the feedback acted on before issue."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Draft the human factors checklist with an experienced operator"
                - "Agree the operator walk-through rule with the operations manager"
                - "Apply the checklist to the next three procedure or HMI changes"
                - "Ask the agent to summarise the operator feedback themes"
            - name: Mothballing and recommissioning a unit under change control
              description: |-
                ## Purpose
                Taking a unit out of service for months, perhaps because of gas curtailment or weak markets, and later bringing it back are both changes, with preservation, isolation, inventory and staffing consequences. Running each through MOC with a preservation plan and a recommissioning review makes sure the unit that restarts is the one the documents describe.

                ## Milestones
                1. A mothballing MOC covering isolations, inventory removal, preservation and safeguards left active.
                2. A preservation and inspection record kept while the unit is idle.
                3. A recommissioning MOC listing every change made during the idle period.
                4. A pre-start-up review completed before the unit returns to service.

                ## Notes
                Instrumentation and safety systems left unpowered for a long time often need re-proving before restart. Ask the controls and integrity leads early.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Mothballing and recommissioning MOCs completed for the unit, with a preservation record and a pre-start-up review before return to service."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Raise the mothballing change with isolation and preservation scope"
                - "Set up the preservation and inspection record"
                - "List every change made while the unit was idle"
                - "Plan the recommissioning pre-start-up review"
---

# Management of Change

Management of Change is for the engineers who raise, review and approve changes to plant, process and procedures, and for the managers who own the system and answer for it at audit. It starts with foundations (the site procedure, what counts as a change, replacement in kind, roles, risk tiers and the open change register), then the weekly and monthly machinery that keeps changes moving and closing properly, the skills of writing and reviewing a change, improvements to the system itself, dated events such as audits and major start-ups, situations from night shift to small sites and restructures, and finally specialist work on creeping change, feedstock changes, human factors and mothballed units.

The rhythm is weekly for the change review board, the override register and closeout checks, monthly for overdue temporary changes, backlog ageing, operating limit changes, training records and post-change performance, quarterly for sample audits, field walkdowns and the approver matrix, and yearly for the procedure revision, approver calibration and the creeping change review. The Meeting notes, Metrics log, Operational checklist, Compliance control, Purchase decision and Onboarding 30/60/90 templates pair with the projects that need them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
