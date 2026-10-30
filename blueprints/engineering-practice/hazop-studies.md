---
id: engineering-practice.hazop-studies
name: HAZOP Studies
description: "Everything a HAZOP needs from one engineer: a clear scope, sound nodes and design intent, a well run session, worksheets that stand up to audit, and actions closed out with named owners and evidence."
category: business
version: 1.0.0
tags: [engineering-practice, hazop-studies, engineer, process-safety, hazop, hazard-analysis, p-and-id, action-close-out]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - meeting-notes
    - reading-queue
    - skills-matrix
    - remediation-plan
  pillars:
    - name: Engineering Practice
      emoji: "🔧"
      description: "The day-to-day work of practising engineers: each major discipline, process safety and risk studies, FEED, design reviews, commissioning, reliability and maintenance, CAD, simulation and PLC work, project delivery, tenders, reports, ethics and standards, and the Caribbean energy sector from Point Lisas to LNG."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: HAZOP Studies
          description: "Preparing, leading or taking part in a HAZOP: nodes, guidewords, deviations, causes and safeguards, recording actions and closing them out with named owners."
          projects:
            - name: HAZOP method grounding from IEC 61882
              description: |-
                ## Purpose
                People sit in HAZOPs for years without reading how the method is meant to work, and it shows in vague deviations and safeguards that are really just hopes. Working through the application guide in IEC 61882 and the hazard evaluation guidance from CCPS gives you the shared vocabulary of nodes, design intent, guidewords, parameters, deviations, causes, consequences and safeguards that every later project relies on.

                ## Milestones
                1. The structure of a HAZOP study, from definition through examination to documentation and follow-up, summarised on one page.
                2. A glossary of the core terms written in your own words, with one process example for each.
                3. The difference between a cause, a consequence and a safeguard explained correctly to a colleague without notes.
                4. Three questions about your site's own HAZOP practice written down to ask the process safety lead.

                ## Notes
                Your company procedure overrides the textbook on details such as risk ranking and recording format. Read both, and note where they differ.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page method summary and a glossary of at least twelve HAZOP terms exist, and the process safety lead has answered your three questions."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Find the current editions of IEC 61882 and your company HAZOP procedure"
                - "Write a one-page summary of the study stages from definition to follow-up"
                - "Build a glossary of twelve HAZOP terms with a plant example for each"
                - "Book thirty minutes with the process safety lead to ask your three questions"
            - name: Study terms of reference and scope boundary
              description: |-
                ## Purpose
                Arguments in week two of a HAZOP about whether the flare header or the vendor skid is in scope cost days and goodwill. A signed terms of reference fixes the scope boundary, the drawing revisions, the design stage, the risk matrix, the recording method and who approves the report before anyone opens a P&ID in the room.

                ## Milestones
                1. A scope boundary marked on an overall plot plan or PFD, with every tie-in point listed.
                2. The drawing set and revision to be studied recorded, with a freeze date agreed.
                3. Team roles, session dates, risk matrix and recording method stated in the document.
                4. Exclusions named explicitly, each with the reason and where it will be covered instead.
                5. The terms of reference signed by the study sponsor and the HAZOP leader.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A terms of reference document with scope, exclusions, drawing revisions, team and approver is signed by the sponsor before the first session."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the project lead for the latest PFD and the list of P&IDs in scope"
                - "Mark the scope boundary and every tie-in on one overall drawing"
                - "Draft the terms of reference covering scope, exclusions, team and approval"
                - "Get the sponsor and the HAZOP leader to sign the final terms of reference"
            - name: Node breakdown on a marked-up P&ID set
              description: |-
                ## Purpose
                Nodes that are too big hide deviations, and nodes that are too small turn a two-week study into six. Dividing the P&IDs into nodes by design intent, usually at changes of pressure, phase, composition or function, and colouring them on a controlled set gives the team a map they can follow and the scribe a reference for every row.

                ## Milestones
                1. Every in-scope P&ID highlighted with node boundaries in distinct colours.
                2. A node list with number, description, drawings covered and boundary points.
                3. Each node checked to contain one clear design intent, with oversized nodes split.
                4. The node list reviewed with the process engineer and frozen with the drawing revision.

                ## Notes
                A useful default is one node per major equipment item with its inlet and outlet lines, plus separate nodes for utilities and relief systems.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A node list and colour-marked P&ID set cover every in-scope line and vessel, with no line left unassigned, signed off by the process engineer."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Print or open a controlled copy of every in-scope P&ID at the frozen revision"
                - "Draw node boundaries at changes of pressure, phase or function"
                - "Write a node list with drawings, boundaries and equipment for each node"
                - "Walk the node list through with the process engineer and fix any gaps"
            - name: Design intent statements for every node
              description: |-
                ## Purpose
                A deviation only means something against a stated intent: high pressure compared with what, and with what composition. Writing a short intent for each node, with normal and design flow, pressure, temperature and composition taken from the heat and material balance and the datasheets, lets the team spend its time on deviations instead of rediscovering how the plant should run.

                ## Milestones
                1. An intent statement for every node, one or two sentences long.
                2. Operating and design conditions for each node pulled from the balance and the equipment datasheets.
                3. Relief valve set pressures and alarm and trip settings listed against each node.
                4. Any node where the design basis is unclear flagged to the project before the study starts.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every node has a written intent with operating and design conditions and protective settings, ready to load into the worksheet before session one."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pull the heat and material balance and equipment datasheets for the scope"
                - "Draft a one or two sentence design intent for each node"
                - "Add operating, design and relief settings to each node record"
                - "Send the list of nodes with unclear design basis to the project engineer"
            - name: Guideword and parameter set for the study
              description: |-
                ## Purpose
                Using every guideword against every parameter on every node produces hundreds of meaningless rows, while a thin set misses reverse flow and contamination. Agreeing a set of guideword and parameter pairs that suits this plant, including utilities, maintenance, start-up and any batch steps, keeps sessions focused and makes the record consistent from node to node.

                ## Milestones
                1. A table of guideword and parameter pairs with the deviation each produces.
                2. Additional study items listed for start-up, shutdown, maintenance, sampling and loss of utilities.
                3. Pairs that do not apply to this plant struck out with a short reason.
                4. The final set agreed by the HAZOP leader and loaded into the recording template.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An agreed deviation table and list of additional study items is loaded into the recording tool and used unchanged across all nodes."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Copy the standard guideword and parameter list from your company procedure"
                - "Add plant-specific items such as loss of nitrogen, sampling and drains"
                - "Strike out pairs that cannot occur here and record why"
                - "Load the agreed deviation table into the recording template"
            - name: HAZOP pre-read pack and readiness check
              description: |-
                ## Purpose
                A study that starts with drawings two revisions old, missing relief calculations or no cause and effect chart wastes the whole team's time and leaves gaps nobody notices until the audit. Assembling a controlled pre-read pack and checking it against a readiness list a fortnight ahead gives the sponsor a clear go or no-go before people are booked.

                ## Milestones
                1. A pack containing P&IDs, PFD, heat and material balance, cause and effect charts, relief summary, datasheets, plot plan and the previous HAZOP if one exists.
                2. Each document checked against the frozen revision in the document register.
                3. Missing or late documents listed with owners and dates.
                4. A written go or no-go decision recorded with the sponsor ten working days before session one.

                ## Notes
                A study can start with a few gaps if they are logged and the affected nodes are scheduled last. It should not start without current P&IDs.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A complete pre-read pack is issued to the team and a recorded go or no-go decision exists at least ten working days before the first session."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write the readiness list of documents the study needs"
                - "Check each document against the register for the correct revision"
                - "Chase owners of any missing relief, cause and effect or datasheet documents"
                - "Hold a short go or no-go call with the sponsor and record the outcome"
            - name: Risk matrix and ranking rules for the study
              description: |-
                ## Purpose
                Two scribes ranking the same scenario differently, or a team arguing over whether a consequence is a three or a four, is a sign the ranking rules were never agreed. Fixing which matrix applies, whether consequences are ranked before or after safeguards, and which rankings trigger further assessment means the ranking column can be trusted when the report is read.

                ## Milestones
                1. The company risk matrix for the study confirmed, with the version noted.
                2. A written rule on whether severity is ranked unmitigated and likelihood with or without safeguards.
                3. Thresholds stated for which scenarios go forward to further assessment.
                4. Three worked examples ranked by the leader and shared with the team in the pre-read.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A ranking rule sheet with the matrix version, ranking convention, forward thresholds and three worked examples is issued with the pre-read pack."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Get the current company risk matrix from the process safety lead"
                - "Write the ranking convention for severity and likelihood in four sentences"
                - "Rank three example scenarios using the convention"
                - "Add the rule sheet and examples to the pre-read pack"
            - name: Worksheet template and recording tool set-up
              description: |-
                ## Purpose
                Reformatting a worksheet halfway through a study, or discovering the tool cannot export actions with owners, creates rework and errors in the record. Setting up the template columns, node headers, drop-down lists for consequences and safeguard types and the action numbering scheme before session one lets the scribe keep pace with the room.

                ## Milestones
                1. Template columns fixed: deviation, causes, consequences, safeguards, ranking, recommendations, owner and comments.
                2. Node headers loaded with intent, drawings and design conditions.
                3. An action numbering scheme agreed that ties each action to its node and deviation.
                4. A test export showing actions, owners and node references in the format the client wants.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A configured worksheet file with loaded nodes and a successful test export of actions is ready before session one."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Agree the worksheet columns with the HAZOP leader"
                - "Load the node list, intents and drawing numbers into the template"
                - "Set the action numbering format so each links to node and deviation"
                - "Run a test export of two dummy actions and check the layout"
            - name: HAZOP team composition and attendance plan
              description: |-
                ## Purpose
                Without an experienced operator, or with the instrument engineer only on Tuesdays, a study misses the scenarios that matter most. Naming the core team, the specialists called in for specific nodes and a quorum rule, then booking people for the full schedule, protects the quality of the record and gives the leader grounds to pause if the room is thin.

                ## Milestones
                1. Core members named: leader, scribe, process, operations, instrument and control, and the relevant discipline engineers.
                2. Specialists listed against the nodes where they are needed, such as rotating equipment or metallurgy.
                3. A quorum rule written down, with what happens if it is not met.
                4. Calendar invitations accepted by every core member for all session days.

                ## Notes
                An operator or shift supervisor who knows the plant or a similar one is the single most valuable member. Fight for their release from shift.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A team list with roles, a node-by-specialist schedule and a quorum rule is issued, and every core member has accepted all session dates."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the core roles and name a person and a deputy for each"
                - "Map specialists to the nodes where their input is needed"
                - "Write the quorum rule into the terms of reference"
                - "Send calendar invitations for every session day to the core team"
            - name: HAZOP action register with named owners
              description: |-
                ## Purpose
                Recommendations that leave the room as a list in the back of a report are rarely closed. A live register with one row per action, a named person rather than a department as owner, a due date, a status and a link to the closure evidence turns the study into change on the plant and gives management one place to see progress.

                ## Milestones
                1. Every recommendation from the study entered with node, deviation, owner, due date and status.
                2. Each owner confirmed by name and acknowledged by email or in the tracking system.
                3. Status values agreed: open, in progress, awaiting verification, closed, rejected with justification.
                4. A weekly status summary going to the sponsor without being asked for.

                ## Notes
                Start from the **Risk register** template. An action owned by a department is owned by nobody.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every HAZOP action sits in one register with a named owner and due date, and a status summary has gone to the sponsor every week for a quarter."
                cadence: rolling
              tasks:
                - "Export all recommendations from the worksheet into the register"
                - "Email each owner their actions and ask for acknowledgement"
                - "Update action statuses and send the sponsor summary @recurring(weekly:mon)"
                - "Reconcile the register against the latest worksheet export @recurring(monthly:12)"
            - name: Weekly HAZOP action close-out meeting
              description: |-
                ## Purpose
                Owners close actions when someone asks them about it every week, not when a reminder email lands. A standing twenty-minute meeting that walks only the actions due or stuck, records the next step for each and agrees which are ready for verification keeps momentum without turning into a second HAZOP.

                ## Milestones
                1. A fixed weekly slot with the action owners and the process safety representative.
                2. An agenda that covers only actions due in the next fortnight and anything overdue.
                3. Notes recording the next step and date for every action discussed.
                4. Closure rate tracked from week to week and shown on one chart.

                ## Notes
                Start from the **Meeting notes** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The close-out meeting has run in at least ten of the last twelve weeks with notes recording next steps for every action discussed."
                cadence: rolling
              tasks:
                - "Book a recurring twenty-minute slot with the action owners"
                - "Filter the register to actions due soon or overdue before each meeting"
                - "Run the close-out meeting and record next steps @recurring(weekly:wed)"
                - "Plot the number of open actions each week on a simple chart"
            - name: Action closure evidence standard
              description: |-
                ## Purpose
                An action marked closed because someone replied done by email will not survive an audit or a revalidation. Writing down what evidence closes each kind of action, such as a revised P&ID at a stated revision, a calculation reference, an approved procedure or a completed change request, makes closure checkable by someone who was not in the room.

                ## Milestones
                1. A table of action types with the evidence that closes each one.
                2. A rule on who verifies closure, and that the owner cannot verify their own action.
                3. A rule for rejecting an action, requiring a written technical justification signed by an agreed authority.
                4. The standard adopted by the sponsor and attached to the action register.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed closure evidence standard covering at least six action types, including rejection, is attached to the register and used for every closure."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the action types that came out of the last study"
                - "Write the evidence that closes each type in one line"
                - "Draft the rejection rule with the justification and approver required"
                - "Get the sponsor to approve the standard and attach it to the register"
            - name: End-of-day worksheet review during a live study
              description: |-
                ## Purpose
                Rows that made sense at three in the afternoon read as nonsense a month later when the report is drafted. A short review each evening of the day's worksheet, by the leader and scribe together, fixes incomplete causes, untied actions and parked items while everyone still remembers what was meant.

                ## Milestones
                1. A fifteen-minute review slot fixed at the end of each session day.
                2. Every row from the day read through, with incomplete fields corrected.
                3. Parked items listed with who will bring the answer and when.
                4. A clean copy of the day's worksheet circulated to the team before the next session.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Across one study, every session day ends with a reviewed worksheet and parking-lot list circulated before the next session starts."
                cadence: cyclic
              tasks:
                - "Agree the end-of-day review slot with the HAZOP leader"
                - "Read back every row from the day and fix incomplete fields"
                - "Update the parking lot with owners for each open question"
                - "Circulate the day's clean worksheet to the team that evening"
            - name: Overdue HAZOP action escalation routine
              description: |-
                ## Purpose
                High-ranked actions that slip past their due date quietly become accepted risk with nobody having accepted it. A monthly routine that lists overdue actions by ranking, asks each owner for a recovery date and escalates the highest-ranked ones to the plant manager keeps the risk decision where it belongs.

                ## Milestones
                1. An agreed escalation ladder: owner, line manager, plant manager, by ranking and days overdue.
                2. A monthly overdue list sorted by ranking and age.
                3. A recovery date or a formal deferral recorded for every overdue action.
                4. Interim measures documented for any high-ranked action deferred beyond its date.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No high-ranked action is more than thirty days overdue without a recorded deferral, interim measure and plant manager sign-off."
                cadence: rolling
              tasks:
                - "Write the escalation ladder by ranking and days overdue"
                - "Get the plant manager to agree the ladder"
                - "Send the overdue list and escalate per the ladder @recurring(monthly:20)"
                - "Record interim measures for any deferred high-ranked action"
            - name: Site HAZOP study register
              description: |-
                ## Purpose
                Many sites cannot say which units were last studied, against which drawings, or when revalidation falls due. A single register of every HAZOP on the site, with unit, study date, drawing revisions, leader, report number, open actions and revalidation date, answers the auditor's first question and shows where coverage has gaps.

                ## Milestones
                1. Every unit and system on the site listed, with the HAZOP report that covers it.
                2. Study date, drawing revisions, leader and report number recorded for each study.
                3. Units with no study, or a study older than the revalidation interval, flagged.
                4. The register stored in the document management system with an owner.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A site register lists every unit with its covering HAZOP and revalidation date, and every gap has an owner and a planned study date."
                cadence: rolling
              tasks:
                - "Collect every HAZOP report number from the document system"
                - "Build the register with unit, date, revisions, leader and revalidation due"
                - "Check the register for new studies and closed actions @recurring(monthly:5)"
                - "Send the coverage gaps to the process safety lead @recurring(yearly)"
            - name: HAZOP revalidation cycle
              description: |-
                ## Purpose
                Plants drift from their studied design through years of small changes, and many regulators and company standards expect hazard analyses to be revalidated at a fixed interval, commonly five years. Running revalidation as a planned cycle, reviewing the previous study, the changes since, incidents and open actions, decides whether a full redo or a revalidation is needed and avoids a scramble before an audit.

                ## Milestones
                1. Revalidation dates for each unit placed in a rolling plan two years ahead.
                2. For the next unit due, changes, incidents and open actions since the last study compiled.
                3. A recorded decision on full re-study or revalidation, with the reason.
                4. The revalidation scheduled with a team and terms of reference.

                ## Notes
                Check the interval your regulator or company standard requires. Five years is common but not universal.
              priority: high
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Every unit has a revalidation date in a rolling plan, and the next one due has a recorded study-type decision and a booked team."
                cadence: cyclic
              tasks:
                - "Confirm the required revalidation interval with the process safety lead"
                - "Put each unit's revalidation date into a two-year rolling plan"
                - "Review which units fall due in the coming year @recurring(yearly)"
                - "Compile changes and incidents for the next unit due @recurring(quarterly)"
            - name: Drawing revisions tracked against the HAZOP record
              description: |-
                ## Purpose
                After a design HAZOP the P&IDs keep moving, and a line or valve added at revision D may never have been examined. Comparing each new P&ID revision against the revision studied, and logging which changes need a HAZOP review, keeps the record matched to what will actually be built.

                ## Milestones
                1. The studied revision of every P&ID recorded in one list.
                2. A monthly comparison of current revisions against studied revisions.
                3. Each changed drawing screened, with changes classed as needing review or not.
                4. Changes needing review grouped into a follow-up session or a recorded desk review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every P&ID revision issued after the study has a recorded screening outcome, and changes needing review have been examined within sixty days."
                cadence: rolling
              tasks:
                - "List the studied revision of each P&ID from the HAZOP report"
                - "Compare current revisions with studied ones @recurring(monthly:15)"
                - "Screen each changed drawing and record whether it needs review"
                - "Book a short follow-up session when review items reach a batch"
            - name: Personal HAZOP participation and competence log
              description: |-
                ## Purpose
                When you apply to lead studies or for professional registration, you will be asked how many HAZOPs you have attended, in which roles and on what kinds of plant. Logging each study with dates, role, process type, nodes covered and what you learned builds evidence that is tedious to reconstruct later.

                ## Milestones
                1. Every past study you can remember entered with date, role, plant type and leader.
                2. A skills matrix showing your level in scribing, participating, leading and specialist studies.
                3. Gaps in plant types or roles identified, such as no batch or no control system study.
                4. The log reviewed with your line manager or mentor.

                ## Notes
                Start from the **Skills matrix** template.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A participation log with every study attended and a skills matrix are up to date within the last quarter and have been reviewed with a mentor."
                cadence: rolling
              tasks:
                - "List every HAZOP you have attended with date and role"
                - "Fill in a skills matrix for scribe, member, leader and specialist roles"
                - "Add new studies and update the matrix @recurring(quarterly)"
                - "Share the log with your mentor and note the gaps they see"
            - name: Field verification of HAZOP safeguards
              description: |-
                ## Purpose
                A HAZOP credits a check valve, a high-level trip or a relief valve, but nobody confirms it exists, is in service and matches the drawing. Walking a sample of credited safeguards each quarter, against the worksheet, catches bypassed trips, missing valves and changed set points before they matter.

                ## Milestones
                1. A list of safeguards credited in the HAZOP for high-ranked scenarios.
                2. A quarterly sample walked in the field, with each safeguard's presence and status recorded.
                3. Discrepancies raised as work orders or change requests.
                4. Findings summarised for the action close-out meeting.

                ## Notes
                Field walks are done under the site's permit and access rules. Never test or operate a safeguard yourself to check it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least ten credited safeguards are verified in the field each quarter, with every discrepancy raised as a work order or change request."
                cadence: rolling
              tasks:
                - "Extract safeguards credited against high-ranked scenarios from the worksheet"
                - "Walk a sample of ten safeguards with an operator @recurring(quarterly)"
                - "Raise a work order or change request for each discrepancy found"
                - "Report the verification findings at the next close-out meeting"
            - name: Writing deviations, causes and consequences
              description: |-
                ## Purpose
                The most common faults in a HAZOP record are causes that sit outside the node, consequences stated as the deviation again, and consequences taken only to the first step instead of the worst credible outcome. Practising on rows from a past study, with a leader's feedback, makes your entries ones the reader can act on.

                ## Milestones
                1. The rule of causes within or entering the node written down with two examples.
                2. Consequences traced to the end event, such as loss of containment, fire or toxic release, without crediting safeguards.
                3. Ten rows from a past study rewritten and reviewed by an experienced leader.
                4. A personal checklist of the five mistakes you most often make.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten rewritten worksheet rows have been reviewed by an experienced leader and a five-point personal checklist is in use."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Pick ten rows from a past HAZOP report on a unit you know"
                - "Rewrite each row with node causes and worst credible consequences"
                - "Ask an experienced leader to mark the rewritten rows"
                - "Rewrite one old worksheet row to practise @recurring(monthly:27)"
            - name: Credible safeguards versus wishful ones
              description: |-
                ## Purpose
                Teams list the operator, the control loop that failed as the cause and the relief valve sized for a different case as safeguards, and the risk ranking comes out falsely low. Learning to test each safeguard for independence from the cause, ability to act in time and evidence that it works keeps the record honest.

                ## Milestones
                1. A short test for safeguards written down: independent, effective in time, auditable.
                2. Examples gathered of common invalid safeguards, such as the failed loop credited against itself.
                3. The difference between safeguards that prevent and those that mitigate explained with a plant example.
                4. One past worksheet reviewed and the doubtful safeguards marked.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written safeguard test is in use, and one past worksheet has been reviewed with at least five doubtful safeguards identified and discussed with a leader."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write a three-question test for whether a safeguard can be credited"
                - "List six common invalid safeguards with a reason for each"
                - "Review one past worksheet and mark the doubtful safeguards"
                - "Discuss your marked worksheet with the HAZOP leader"
            - name: Writing HAZOP recommendations that get closed
              description: |-
                ## Purpose
                Recommendations such as consider reviewing the design leave the owner guessing and are closed with a shrug. A good recommendation names the concern, what should be checked or changed, and what result would close it, so an engineer who was not in the room can act on it months later.

                ## Milestones
                1. A recommendation pattern written: concern, action, closure condition.
                2. Fifteen weak recommendations from past studies rewritten to the pattern.
                3. Rules agreed on when to use consider, confirm or install, with examples.
                4. The pattern shared with the scribe and leader for the next study.

                ## Notes
                Recommend the problem to be solved, not a single design answer, unless the team is sure. The owner may find a better fix.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Fifteen rewritten recommendations follow the concern, action and closure pattern, and the pattern is in the recording template for the next study."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Collect fifteen vague recommendations from past HAZOP reports"
                - "Rewrite each one as concern, action and closure condition"
                - "Ask the agent to suggest clearer wording for your five hardest rewrites"
                - "Add the recommendation pattern to the recording template"
            - name: Scribing a HAZOP well
              description: |-
                ## Purpose
                The scribe holds the record that will be read for the life of the plant, often while typing faster than the discussion can be followed. Learning to capture the team's conclusion rather than the debate, to read rows back, to keep the parking lot and to flag when the room has moved on without agreement is the best apprenticeship for leading.

                ## Milestones
                1. Two sessions observed beside an experienced scribe, with notes on their habits.
                2. A set of abbreviations and standard phrases agreed with the leader.
                3. One full node scribed live, with the leader reviewing the record afterwards.
                4. A list of three things to improve from the leader's feedback.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You have scribed at least one complete node live and the leader has reviewed the record and given written feedback."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Ask a HAZOP leader if you can sit beside the scribe for two sessions"
                - "Write down the scribe's standard phrases and abbreviations"
                - "Scribe one complete node live under supervision"
                - "Get the leader's feedback and note three improvements"
            - name: Chairing your first HAZOP sessions
              description: |-
                ## Purpose
                Leading a HAZOP is mostly about pace, drawing out the quiet operator, stopping design work in the room and knowing when a deviation is exhausted. Co-leading a small study under an experienced leader before chairing alone builds those habits without risking the quality of a major study.

                ## Milestones
                1. A co-leading arrangement agreed with an experienced leader for a small study.
                2. At least three nodes chaired by you, with the senior leader observing.
                3. Written feedback on pace, inclusion, record quality and handling of disagreement.
                4. A personal list of stock questions for each guideword.

                ## Notes
                A useful rule in the chair: if the team starts designing the fix, write the concern as a recommendation and move on.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You have chaired at least three nodes under observation and received written feedback from the senior leader."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Ask your process safety lead for a small study you can co-lead"
                - "Prepare stock questions for each guideword before the session"
                - "Chair three nodes with the senior leader observing"
                - "Write up the senior leader's feedback and two things to change"
            - name: P&ID reading fluency for HAZOP
              description: |-
                ## Purpose
                If you cannot read a P&ID fast, you spend the session catching up instead of finding causes. Learning the symbol legend, instrument tag conventions to ISA 5.1 or your company standard, valve failure positions and line specification breaks lets you trace a deviation across a node as quickly as the room moves.

                ## Milestones
                1. The site's legend sheets read and the unfamiliar symbols listed.
                2. Instrument tags decoded for one full P&ID, including alarms, trips and their failure positions.
                3. Line specification breaks and pressure ratings traced across one node.
                4. A ten-minute walk through one P&ID given to a colleague without the legend.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You can walk a colleague through one complete P&ID, naming every instrument function and spec break, without referring to the legend."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Print the legend sheets and list every symbol you cannot name"
                - "Decode every instrument tag on one P&ID with its failure position"
                - "Trace line spec breaks and ratings across one node"
                - "Walk a colleague through the P&ID without the legend"
            - name: Procedural HAZOP of start-up and shutdown
              description: |-
                ## Purpose
                Many serious incidents happen during start-up, shutdown and non-routine steps that a line-by-line HAZOP never examines. A procedural HAZOP applies guidewords to each step of a written procedure, asking what if the step is missed, done too early, done on the wrong item or done in the wrong order.

                ## Milestones
                1. One start-up or shutdown procedure chosen and broken into numbered steps.
                2. A guideword set for procedures agreed, such as omitted, too early, wrong item, reversed order.
                3. The procedure examined with operations, and each credible deviation recorded.
                4. Recommendations for procedure changes passed to the procedure owner.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One start-up or shutdown procedure has a completed procedural HAZOP record with recommendations accepted by the procedure owner."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Choose one start-up or shutdown procedure with the operations lead"
                - "Break the procedure into numbered steps in the worksheet"
                - "Agree the procedural guidewords with the HAZOP leader"
                - "Run the examination with an operator and record each deviation"
            - name: Overpressure and relief scenarios in HAZOP
              description: |-
                ## Purpose
                High pressure is the deviation most often written with a relief valve as the safeguard, without checking that the valve is sized for that cause. Knowing the common relief cases, such as blocked outlet, control valve failure, gas blow-by, tube rupture, fire and loss of cooling, and how to check them against the relief summary, makes the high pressure rows trustworthy.

                ## Milestones
                1. A list of standard overpressure causes with the relief case each corresponds to.
                2. The site relief summary located and read for one unit.
                3. Three high pressure rows from a past study checked against the governing relief case.
                4. Any mismatch raised to the relief system owner.

                ## Notes
                The relief design itself belongs to the relief engineer and codes such as API 520 and 521. In the HAZOP you check that the case exists, not resize the valve.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three high pressure scenarios have been checked against their governing relief case and any mismatch is raised in writing to the relief system owner."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write a table of overpressure causes against relief cases"
                - "Find the relief summary for one unit in the document system"
                - "Check three past high pressure rows against the relief summary"
                - "Email any mismatches to the relief system owner"
            - name: HAZOP reading list and incident case studies
              description: |-
                ## Purpose
                Teams only think of scenarios as wide as the incidents their members know about. Reading guidance and published incident investigations, such as those from national safety boards and industry bodies, one at a time and noting the deviation each would have appeared under, widens what you bring into the room.

                ## Milestones
                1. A reading queue with the core guidance texts and ten incident reports.
                2. A note for each report naming the node type, deviation and missed safeguard.
                3. One incident shared with your team as a five-minute talk.
                4. Lessons from the reading added to your personal checklist.

                ## Notes
                Start from the **Reading queue** template.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "At least six incident reports have been read and noted against HAZOP deviations, and one has been presented to colleagues."
                cadence: rolling
              tasks:
                - "Set up a reading queue with core guidance and ten incident reports"
                - "Read one report and note the deviation it maps to @recurring(monthly:24)"
                - "Give a five-minute incident talk at a team meeting"
                - "Add the lessons to your personal HAZOP checklist"
            - name: Choosing HAZOP recording software
              description: |-
                ## Purpose
                Spreadsheets work for small studies but struggle with action tracking, consistent node headers and audit trails across a site's studies. Comparing dedicated recording tools with the spreadsheet on export formats, licence cost, offline use, version history and how actions pass to the tracking system leads to a choice the whole site can stand behind.

                ## Milestones
                1. Requirements written: export formats, action export, offline use, audit trail, licensing.
                2. Three options, including the current spreadsheet, scored against the requirements.
                3. One option trialled on a real node by the scribe.
                4. A recommendation recorded and approved by the process safety lead.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A scored comparison of three recording options and a trial on a real node support a decision approved by the process safety lead."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List the requirements the recording tool must meet"
                - "Score three options, including the spreadsheet, against them"
                - "Trial the leading option on one real node"
                - "Write the recommendation and send it to the process safety lead"
            - name: HAZOP or a lighter hazard method
              description: |-
                ## Purpose
                Not every change or system needs a full HAZOP, and running one on a simple utility tie-in wastes a team's week while a complex new process deserves more than a checklist. Writing selection rules that point to HAZOP, What-If, checklist or a combination, by complexity, hazard and design stage, helps the site use people well.

                ## Milestones
                1. The site's current hazard methods listed with when each is used.
                2. Selection rules written by complexity, hazard and stage of design.
                3. Five recent studies checked against the rules to test them.
                4. The rules approved and added to the site hazard analysis procedure.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Approved method selection rules are in the site procedure and have been tested against five recent studies."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the hazard methods the site uses and when"
                - "Draft selection rules by complexity, hazard and design stage"
                - "Test the rules against five recent studies"
                - "Submit the rules to the process safety lead for approval"
            - name: Remote and hybrid HAZOP session set-up
              description: |-
                ## Purpose
                Remote sessions save travel but fail when half the team cannot see the P&ID detail or the operator on a shift phone line is never heard. Setting up shared drawing views, a second screen for the worksheet, shorter sessions and rules for speaking makes a remote or hybrid study close to the quality of one in a room.

                ## Milestones
                1. A meeting platform tested with shared P&ID zoom and a live worksheet view.
                2. Session length set shorter than in-room sessions, with planned breaks.
                3. Rules for speaking and for the leader checking each remote member by name.
                4. A test session run on one node and feedback collected.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A tested remote set-up and written session rules are in place, and a trial node has been run with feedback recorded from every participant."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Test drawing zoom and worksheet sharing on the meeting platform"
                - "Write the remote session rules for speaking and breaks"
                - "Run one trial node with the full team connected"
                - "Collect feedback from each participant and adjust the set-up"
            - name: Library of recurring HAZOP findings
              description: |-
                ## Purpose
                Study after study, the same findings appear: no non-return valve on a pump discharge, a single level transmitter used for control and trip, drains to atmosphere from hydrocarbon lines. A library of recurring findings, fed back to the design teams, stops paying a HAZOP team to find them again.

                ## Milestones
                1. Recommendations from the last three studies grouped into recurring themes.
                2. The top ten recurring findings written up with a typical cause and fix.
                3. The library shared with the design leads and added to the pre-read pack.
                4. A count of repeat findings tracked for the next study.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A library of at least ten recurring findings is in the pre-read pack and the design leads have confirmed receipt."
                cadence: rolling
              tasks:
                - "Export recommendations from the last three studies"
                - "Ask the agent to group the recommendations into recurring themes"
                - "Write up the top ten with typical cause and fix"
                - "Add new repeat findings after each study @recurring(quarterly)"
            - name: Quality audit of a completed HAZOP
              description: |-
                ## Purpose
                Finished reports can look complete while hiding nodes with no utilities deviations, safeguards that are not independent, or actions with no owner. Auditing a completed study against a checklist, before the auditor or the revalidation team does, shows where the method slipped and what to fix in the next one.

                ## Milestones
                1. An audit checklist covering scope, team attendance, node coverage, row quality, rankings and actions.
                2. One completed study audited against the checklist.
                3. Findings written up and graded by significance.
                4. Corrective actions for the record and for future studies agreed with the process safety lead.

                ## Notes
                Start from the **Remediation plan** template for the corrective actions.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "One completed HAZOP has an audit report with graded findings and a corrective action plan agreed with the process safety lead."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Draft an audit checklist from your HAZOP procedure"
                - "Audit one completed study against the checklist"
                - "Write up and grade the findings"
                - "Audit another completed study the same way @recurring(yearly)"
            - name: Scenario hand-off from HAZOP to further assessment
              description: |-
                ## Purpose
                High-consequence scenarios flagged in a HAZOP often reach the next assessment team as a bare row number with half the context missing. Preparing a clean hand-off list, with cause, consequence, safeguards credited and the reason it was flagged, saves that team a second pass through the worksheet.

                ## Milestones
                1. Every scenario meeting the forward threshold extracted from the worksheet.
                2. Each scenario written up with cause, consequence, credited safeguards and node reference.
                3. The hand-off list reviewed with the receiving team lead.
                4. The hand-off referenced in the HAZOP report.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every scenario above the forward threshold appears in a hand-off list accepted by the receiving team lead and cited in the HAZOP report."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Filter the worksheet for scenarios above the forward threshold"
                - "Write each scenario up with cause, consequence and credited safeguards"
                - "Review the list with the receiving team lead"
                - "Reference the hand-off list in the HAZOP report"
            - name: HAZOP kick-off meeting
              description: |-
                ## Purpose
                The first hour of a study sets how the team works for the next two weeks. A kick-off that confirms scope and exclusions, walks the method, the ranking rules and the ground rules, and checks that everyone has the pre-read, prevents arguments later and gets new members contributing from node one.

                ## Milestones
                1. A kick-off agenda and slides covering scope, method, ranking, roles and ground rules.
                2. A short process overview given by the process engineer.
                3. Attendance and roles recorded in the worksheet.
                4. Ground rules agreed, including phones, design in the room and parking lot use.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The kick-off has been held with all core members, attendance and ground rules are recorded in the worksheet, and node one has started."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft the kick-off agenda with scope, method and ground rules"
                - "Ask the process engineer for a fifteen-minute process overview"
                - "Run the kick-off and record attendance in the worksheet"
                - "Start node one straight after the ground rules are agreed"
            - name: HAZOP report issued for approval
              description: |-
                ## Purpose
                Regulators, insurers and the next revalidation team will read the report, often long after everyone in the room has moved on. Issuing it within an agreed time, with scope, team, method, ranking rules, worksheets, actions and drawing list, while the study is fresh, avoids the classic six-month gap.

                ## Milestones
                1. A draft report with scope, method, team attendance, worksheets, action list and drawings studied.
                2. The draft reviewed by the team for accuracy of their own inputs.
                3. Comments resolved and recorded in a comment log.
                4. The final report approved by the sponsor and filed in document control with a number.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "The HAZOP report is approved by the sponsor and filed in document control within sixty days of the last session."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Assemble the report outline from your company template"
                - "Issue the draft to the team for a two-week accuracy review"
                - "Resolve review comments and keep a comment log"
                - "Get sponsor approval and file the report with a document number"
            - name: HAZOP close-out report and action sign-off
              description: |-
                ## Purpose
                Approval of the report does not finish a study; it ends when every action is closed or formally rejected. A close-out report, listing each action with its evidence and verifier, gives the sponsor a defined end and the revalidation team a clean starting point.

                ## Milestones
                1. Every action closed with evidence or rejected with signed justification.
                2. A close-out report listing actions, evidence references and verifiers.
                3. Design documents updated to reflect closed actions, with revisions noted.
                4. The close-out report signed by the sponsor and filed beside the HAZOP report.

                ## Notes
                Start from the **Remediation plan** template if a batch of actions needs a worked plan to close.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A signed close-out report shows every HAZOP action closed with evidence or rejected with justification, filed within six months of the study."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "List every action still open with its owner and blocker"
                - "Collect closure evidence against the evidence standard"
                - "Draft the close-out report with evidence and verifier for each action"
                - "Get the sponsor's signature and file the report"
            - name: Vendor package HAZOP at the supplier
              description: |-
                ## Purpose
                Packaged units such as compressor skids, chemical injection packages and fuel gas conditioning units are often HAZOP'd by the vendor, with the client's engineer as the only outsider in the room. Preparing for that study, with the interface points, the client's ranking rules and the questions on trips and controls, keeps the package's hazards from falling between two records.

                ## Milestones
                1. Interface points between the package and the main plant listed with design conditions.
                2. The client's ranking rules and recording format agreed with the vendor before the study.
                3. The vendor HAZOP attended, with interface deviations examined explicitly.
                4. Package actions transferred into the main action register.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The vendor package HAZOP has been attended, interface deviations are in the record, and every package action is in the main register with an owner."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "List the package interface points with pressure, temperature and fluid"
                - "Send the vendor the client ranking rules and recording format"
                - "Attend the vendor HAZOP and examine every interface deviation"
                - "Copy the package actions into the main action register"
            - name: Brownfield tie-in HAZOP before a turnaround
              description: |-
                ## Purpose
                Tie-ins installed during a turnaround connect new lines to live or freshly decommissioned plant, with isolation, purging and reinstatement steps that are easy to miss. Studying the tie-in points and their temporary configurations well before the outage date gives time for the actions to change the work packs.

                ## Milestones
                1. Every tie-in point listed with the live and new sides, isolation and fluid.
                2. Temporary configurations during installation and reinstatement included as nodes.
                3. The study completed at least eight weeks before the outage start.
                4. Actions affecting work packs passed to the turnaround planners with dates.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The tie-in HAZOP is completed at least eight weeks before outage start and every work-pack action is acknowledged by the turnaround planners."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Get the tie-in list and outage date from the project engineer"
                - "Add temporary installation and reinstatement states as nodes"
                - "Run the tie-in study with operations and the construction lead"
                - "Send work-pack actions to the turnaround planners with due dates"
            - name: Design-stage HAZOP on a FEED package
              description: |-
                ## Purpose
                At FEED, a HAZOP can still move equipment, change design pressures and add protective layers cheaply, while the same finding after detailed design means rework and claims. Fitting the study to the maturity of the FEED drawings, and recording which items must be re-examined at detailed design, gets the most value from an early study.

                ## Milestones
                1. The maturity of the FEED P&IDs assessed and gaps noted before the study.
                2. The study run with clear rules on what is too early to examine.
                3. Items deferred to detailed design listed with the reason.
                4. Design changes from the study reflected in the FEED basis of design.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The FEED HAZOP report includes a list of items deferred to detailed design, and design changes from the study appear in the basis of design."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Check the FEED P&IDs for missing instruments and relief details"
                - "Agree with the leader what is too early to examine"
                - "Record items deferred to detailed design with reasons"
                - "Confirm design changes are captured in the basis of design"
            - name: Your first HAZOP as a graduate team member
              description: |-
                ## Purpose
                Graduates are often invited to a HAZOP to learn and then sit silently for two weeks, afraid of asking a basic question. Preparing the nodes you know best, agreeing with your manager what you should contribute and keeping a notebook of questions to ask in breaks turns the study into real learning and a useful record entry.

                ## Milestones
                1. The pre-read nodes you know best studied in advance, with questions noted.
                2. A role agreed with your manager, such as taking actions or checking drawings in the room.
                3. At least one contribution made in each session day.
                4. A one-page reflection written on what you learned and what you would do differently.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You have contributed on every session day of one study and written a one-page reflection reviewed by your manager."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask your manager what role you should play in the study"
                - "Study two nodes from the pre-read and write your questions"
                - "Make at least one contribution in each session day"
                - "Write a one-page reflection and share it with your manager"
            - name: Operations representative in a HAZOP
              description: |-
                ## Purpose
                Operators and shift supervisors know what really happens at three in the morning, which valves are left cracked open and which alarms are ignored. Preparing as the operations member, by walking the nodes in the field, reviewing recent shift log events and listing known workarounds, brings that knowledge into the record.

                ## Milestones
                1. The in-scope nodes walked in the field with the current P&IDs.
                2. Recent shift log events and near misses for the unit listed.
                3. Known workarounds, bypasses and nuisance alarms written down.
                4. Each item raised in the right node during the study.

                ## Notes
                Workarounds are raised to improve the plant, not to blame anyone. Agree that framing with the leader at the kick-off.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A list of field observations, recent events and workarounds was prepared before the study and every item appears in the worksheet."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Walk the in-scope nodes in the field with the P&IDs"
                - "List near misses and upsets from the last year of shift logs"
                - "Write down workarounds, bypasses and nuisance alarms you know of"
                - "Raise each item at the matching node during the study"
            - name: Client representative on a contractor-led HAZOP
              description: |-
                ## Purpose
                When the engineering contractor leads the HAZOP, the client's representative has to make sure the record reflects how the plant will be operated and that actions land with the right party. Agreeing the action ownership split, checking the client's standards are applied and reviewing the record daily protects the client from inheriting a weak study.

                ## Milestones
                1. The split of action ownership between contractor and client agreed in writing.
                2. The client's risk matrix and procedure confirmed as the basis for the study.
                3. The day's worksheet reviewed each evening for the client's concerns.
                4. Client-owned actions transferred to the client's own register.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A written ownership split exists, the client matrix is used throughout, and every client-owned action is in the client register within a week of the study."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Agree the action ownership split with the contractor's HAZOP leader"
                - "Check the terms of reference name the client's risk matrix"
                - "Review each day's worksheet for operability concerns"
                - "Move client-owned actions into the client action register"
            - name: Contractor engineer answering HAZOP actions
              description: |-
                ## Purpose
                On a contractor's design team, HAZOP actions arrive as a long list on top of the design schedule, and responses written in a hurry are often rejected by the client. Planning responses by discipline, writing each one to the closure condition and attaching the revised drawing or calculation gets them accepted first time.

                ## Milestones
                1. Assigned actions sorted by discipline and due date.
                2. A response template agreed with the client: action, response, evidence reference.
                3. Responses drafted with evidence attached and checked by the lead engineer.
                4. Accepted and returned responses tracked to closure.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every assigned HAZOP action has a response with evidence attached, and at least nine in ten are accepted by the client at first submission."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Sort your assigned actions by discipline and due date"
                - "Agree a response template with the client's representative"
                - "Check progress on your assigned actions @recurring(weekly:tue)"
                - "Submit responses with the revised drawing or calculation attached"
            - name: Lean-team HAZOP on a small site
              description: |-
                ## Purpose
                Small plants, such as a water treatment works, a bottling line with ammonia refrigeration or a gas regulation station, may have no process safety department and only a handful of engineers. Scaling the method, with a hired leader, a short study and a simple action list kept by the site manager, still gives a proper record without the overhead of a major project study.

                ## Milestones
                1. The hazards and systems that justify a HAZOP named, such as ammonia, gas or chlorine.
                2. An external leader engaged with a short terms of reference.
                3. A study of two to four days run with the site's own operators.
                4. A simple action list kept by the site manager and reviewed at existing site meetings.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A small-site HAZOP report and action list exist, with the actions reviewed at site meetings until closed."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "List the systems on site with significant hazardous materials"
                - "Get quotes from two external HAZOP leaders"
                - "Release two operators for the study days"
                - "Add the action list to the standing site meeting agenda"
            - name: Batch and non-continuous process HAZOP
              description: |-
                ## Purpose
                Batch plants in pharmaceuticals, food, coatings and speciality chemicals change state step by step, so a continuous line-by-line study misses wrong charges, wrong sequence and hold times. Treating each phase of the batch recipe as a node with its own intent catches the deviations that matter in this kind of plant.

                ## Milestones
                1. The batch recipe divided into phases, each with an intent and conditions.
                2. Guidewords extended for sequence, quantity, timing and wrong material.
                3. Shared equipment and cross-contamination paths examined between batches.
                4. The study record cross-referenced to the batch control logic.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A batch HAZOP record covers every recipe phase with sequence and charge deviations, cross-referenced to the batch control logic."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Get the batch recipe and phase list from the process engineer"
                - "Write an intent and conditions for each recipe phase"
                - "Add guidewords for wrong sequence, wrong charge and hold time"
                - "Cross-reference each phase node to the batch control logic"
            - name: Control system HAZOP for a new DCS
              description: |-
                ## Purpose
                Failures of the control system itself, such as a controller, an input card, a network switch or a power supply, can take out several loops at once and are invisible in a conventional HAZOP. A control system HAZOP examines those common failures against the plant and confirms that the safety system remains independent of them.

                ## Milestones
                1. The control system architecture drawing obtained, with controllers, cards and networks.
                2. Failure modes listed for each component, such as fail high, fail frozen and loss of communication.
                3. Each component failure examined for the plant loops it affects.
                4. Independence of the safety instrumented system confirmed or actions raised.

                ## Notes
                Safety instrumented system requirements sit with IEC 61511 and the site's safety lifecycle team. In this study you check independence from control failures, not set integrity levels.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A control system HAZOP record covers every controller and network failure mode, with independence of the safety system confirmed or an action raised."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Get the control system architecture drawing and IO allocation"
                - "List failure modes for controllers, cards, networks and power"
                - "Map each component failure to the loops it would affect"
                - "Check the safety system has no shared component with the control system"
            - name: Human factors review inside the HAZOP
              description: |-
                ## Purpose
                Most HAZOPs record operator error as a cause and stop there, without asking why the error would be likely. Bringing in simple human factors questions, on alarm load, labelling, access to valves, shift handover and procedure clarity, turns operator error into specific design and procedure recommendations.

                ## Milestones
                1. A short set of human factors prompts added to the guideword list.
                2. Every operator error cause in one study examined with the prompts.
                3. Recommendations raised on labelling, access, alarms or procedures where the prompts found a gap.
                4. The prompts reviewed with a human factors specialist if one is available.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Human factors prompts are in the study guideword list and every operator error cause in one study has been examined with them."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write six human factors prompts for operator error causes"
                - "Add the prompts to the guideword list for the next study"
                - "Examine every operator error cause in one study with the prompts"
                - "Ask a human factors specialist to review the prompts"
            - name: Becoming a recognised HAZOP leader
              description: |-
                ## Purpose
                Leading major studies usually requires evidence of training, a minimum number of studies as member and scribe, and supervised leading, judged against your company's competence standard or a professional body scheme. Mapping your log against those requirements and closing the gaps over a year or two makes the step to leader deliberate rather than accidental.

                ## Milestones
                1. The company or professional body requirements for HAZOP leaders written down.
                2. Your participation log compared against them, with gaps listed.
                3. A leader training course completed, chosen against the requirements.
                4. Supervised leading completed and signed off by an assessor.

                ## Notes
                Check the current requirements with the body or your company. They change, and some clients ask for evidence by name.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A signed assessment shows you meet the company or professional body requirements to lead HAZOPs, supported by your participation log."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Find the HAZOP leader competence requirements that apply to you"
                - "Compare your participation log against the requirements"
                - "Book a leader training course that meets the requirements"
                - "Ask an experienced leader to assess your supervised studies"
            - name: Mentoring new scribes and HAZOP leaders
              description: |-
                ## Purpose
                Experienced HAZOP leaders are scarce, and a site that relies on one or two contractors loses its own knowledge with every study. Mentoring one scribe and one future leader at a time, with reviewed rows and observed sessions, builds the site's bench and sharpens your own practice.

                ## Milestones
                1. One scribe and one future leader agreed as mentees with their managers.
                2. A monthly review of the mentee's recent worksheet rows or chaired nodes.
                3. Each mentee's skills matrix updated after every study.
                4. A mentee scribing or leading a study without supervision.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Two mentees have monthly reviews recorded for six months, and at least one has scribed or led a study unsupervised."
                cadence: rolling
              tasks:
                - "Agree one scribe and one future leader as mentees"
                - "Review a mentee's recent rows or chaired nodes @recurring(monthly:9)"
                - "Update each mentee's skills matrix after every study"
                - "Arrange an unsupervised scribing or leading slot for a mentee"
---

# HAZOP Studies

A HAZOP is only as good as its preparation, its record and its close-out, and most of the work happens outside the meeting room. These projects start with the foundations of a single study (the method, the terms of reference, the marked-up P&IDs, design intent, guidewords, the risk matrix and a ready team), then build the machinery that keeps actions and records alive, the skills of writing, scribing and chairing, the decisions on method and tools, the dated events of a study, the different seats you may sit in, and the specialist work of control system HAZOP, human factors and becoming a recognised leader.

The repeating rhythm is a weekly look at the action register and a close-out meeting, monthly checks on overdue actions, drawing revisions and the site study register, quarterly field verification of safeguards and a participation log update, and a yearly revalidation and quality review. The Risk register, Meeting notes, Reading queue, Skills matrix and Remediation plan templates pair with the projects that keep a standing record. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
