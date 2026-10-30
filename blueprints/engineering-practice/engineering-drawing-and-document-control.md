---
id: engineering-practice.engineering-drawing-and-document-control
name: Engineering Drawing and Document Control
description: "A numbering and revision scheme everyone follows, a master document register that matches reality, transmittals and vendor documents tracked to return, superseded prints off site and as-builts handed over complete."
category: business
version: 1.0.0
tags: [engineering-practice, engineering-drawing-and-document-control, engineer, document-control, document-register, transmittals, vendor-documents, as-built]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - metrics-log
    - purchase-decision
    - remediation-plan
    - onboarding-30-60-90
  pillars:
    - name: Engineering Practice
      emoji: "🔧"
      description: "The day-to-day work of practising engineers: each major discipline, process safety and risk studies, FEED, design reviews, commissioning, reliability and maintenance, CAD, simulation and PLC work, project delivery, tenders, reports, ethics and standards, and the Caribbean energy sector from Point Lisas to LNG."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Engineering Drawing and Document Control
          description: "Controlling engineering documents and drawings: numbering, revisions, transmittals, vendor documents, as-built updates and an engineering document register."
          projects:
            - name: Project document control procedure
              description: |-
                ## Purpose
                Without a written procedure, each discipline invents its own way of numbering, issuing and filing, and the differences surface at handover when nobody can say which set is the record. A short procedure that names the register, the numbering key, the revision rules, the transmittal route and who may issue a document gives the whole team one rulebook from the first issue.

                ## Milestones
                1. The contract and client specifications searched for every document control requirement, each listed with its clause.
                2. A procedure of ten pages or fewer covering numbering, revisions, status codes, transmittals, review and archive.
                3. Roles named for originator, checker, approver and document controller, with who may issue externally.
                4. The procedure approved by the project engineering manager and issued under its own number.

                ## Notes
                Write the procedure to the client's requirements, not to a generic company version: client specifications often fix the numbering format and the review code meanings, and a mismatch costs months of renumbering.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An approved, numbered document control procedure that cites every contract clause on documents and names who may issue externally."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Search the contract and client specifications for every clause on documents and drawings"
                - "Draft the procedure outline with numbering, revisions, transmittals and archive sections"
                - "Agree the originator, checker and approver roles with the discipline leads"
                - "Issue the approved procedure to the project team under its own document number"
                - "Review the procedure against lessons learned and client feedback @recurring(yearly)"
            - name: Document numbering system with a worked key
              description: |-
                ## Purpose
                Every document number should tell anyone the project, area or unit, discipline, document type and a sequence, so that a drawing found on a site office wall can be traced to the register in seconds. Fixing the field order, separators and code lists before the first document is raised avoids the renumbering campaigns that follow when two disciplines pick the same sequence.

                ## Milestones
                1. Each field in the number defined with its length, allowed codes and separator.
                2. Code lists for areas, disciplines and document types published as a single table.
                3. A worked key showing three real example numbers decoded field by field.
                4. A rule for who allocates sequence numbers, so no number is ever issued twice.

                ## Notes
                Keep revision out of the document number: the number identifies the document for life and the revision is a separate field. Avoid letters such as I and O that read as digits.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A numbering key with defined fields, code lists and three decoded examples, issued before the first project document is numbered."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Check whether the client specification prescribes a numbering format"
                - "Define each number field with its length and allowed codes"
                - "Write three example numbers and decode them field by field in the key"
                - "Set the rule for who allocates sequence numbers from the register"
            - name: Revision and status code scheme
              description: |-
                ## Purpose
                Teams that let letters and numbers drift end up with a drawing at revision C on one sheet and revision 0 on the next, and nobody can tell which was issued for construction. A scheme that reserves letters for pre-construction issues, numbers from zero for issued for construction, and status codes such as IFR, IFA, IFC and AB makes the state of every document readable from its title block.

                ## Milestones
                1. Revision sequences defined for internal checks, issues for review, issues for construction and as-builts.
                2. Status codes listed with what each permits the recipient to do with the document.
                3. A rule for minor corrections, so a typo fix still raises a revision and is recorded.
                4. The scheme added to the procedure and the drawing template revision block.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written revision and status code table, including what each status permits, adopted in the procedure and the drawing template."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Collect the revision schemes used on your last two projects and the client's preference"
                - "Write the table of revision sequences and status codes with their meanings"
                - "State what a recipient may and may not do under each status code"
                - "Send the agreed table to whoever maintains the drawing and document templates"
            - name: Master document register baseline
              description: |-
                ## Purpose
                The register is the single list of every deliverable the project owes, its current revision, status and planned dates, and it is the first thing a client auditor or planner asks for. Building it early from the deliverables list, rather than adding documents as they appear, shows the full scope and lets progress be measured against something.

                ## Milestones
                1. Every planned deliverable from the scope and deliverables list entered with its number and title.
                2. Columns for revision, status, originator, planned and actual issue dates and client return code.
                3. Placeholder numbers reserved for documents not yet started.
                4. The baseline register issued to the planner and client with a count of documents by discipline.

                ## Notes
                A register that holds only issued documents cannot show what is late. Load the planned list first and let actual dates fill in.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A baseline register listing every planned deliverable with planned dates, issued to the planner and client with discipline counts."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Get the current deliverables list from each discipline lead"
                - "Set up the register columns for revision, status, dates and client return code"
                - "Reserve numbers for every planned document not yet started"
                - "Save a dated snapshot copy of the register for the record @recurring(monthly:15)"
            - name: Electronic file naming and metadata fields
              description: |-
                ## Purpose
                Files named final_v3_revised.dwg get lost the moment they leave the originator's laptop. Agreeing a file naming rule built from the document number, revision and sheet, plus a short list of mandatory metadata fields, means files can be found by search and loaded into any document system without manual clean-up.

                ## Milestones
                1. A file naming rule that uses the document number, sheet and revision in a fixed order.
                2. Mandatory metadata fields listed with allowed values, such as discipline, status and area.
                3. Rules for native files, PDFs and attachments so each pairs with the right register line.
                4. Five sample files named and tagged correctly as a reference for the team.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page naming and metadata rule with five correctly named sample files, adopted by every discipline on the project."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Collect ten real file names from the shared drive to show the current mess"
                - "Write the naming rule with document number, sheet and revision order"
                - "List the mandatory metadata fields and their allowed values"
                - "Rename five sample files to the rule and share them as the reference set"
            - name: Document folder structure and access rights
              description: |-
                ## Purpose
                Shared drives where everyone can overwrite the issued folder will, sooner or later, lose the signed copy of a drawing. Separating work in progress, shared for review, issued and archived areas, with write access limited to the people who issue, gives every file a clear state and protects the record.

                ## Milestones
                1. Folder or library areas defined for work in progress, shared, issued and archive.
                2. Write access to issued and archive areas limited to document control and named approvers.
                3. Read access for site, client and vendors set to the minimum they need.
                4. An access list kept with each person, their role and the date access was granted.

                ## Notes
                These four states echo the common data environment idea in ISO 19650 and work just as well on a plain shared drive.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A documented folder structure with four states and an access list showing write rights to issued areas held only by named people."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Map the current folders and who can write to the issued area"
                - "Set up the work in progress, shared, issued and archive areas"
                - "Remove write access to the issued area from everyone except named issuers"
                - "Review the access list and remove leavers and finished contractors @recurring(quarterly)"
            - name: Transmittal form and transmittal log
              description: |-
                ## Purpose
                A transmittal is the evidence that a document left your hands at a given revision, for a stated purpose, on a stated date, and it settles most later arguments about who knew what. A single form with a unique number, a purpose code and a required return date, logged every time, turns email attachments into a traceable record.

                ## Milestones
                1. A transmittal form with number, date, recipient, documents, revisions, purpose and response due date.
                2. Purpose codes defined, such as for information, for review, for approval and for construction.
                3. A transmittal log that links each transmittal to the register lines it carried.
                4. The first ten transmittals issued and logged without a missing field.

                ## Notes
                Start from the **Operational checklist** template for the steps before each issue: check the revision, check the status, attach the right files, log, send.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A transmittal form and log in use, with the first ten transmittals each carrying a number, purpose code and response due date."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Draft the transmittal form with purpose codes and a response due date field"
                - "Set up the transmittal log with a link to each register line"
                - "Write the pre-issue checklist for document control to follow"
                - "Issue and log the next transmittal using the new form"
            - name: Agreeing client review codes and return times
              description: |-
                ## Purpose
                Code 1, code 2 and code 3 mean different things to different clients, and work proceeding on a document the client thought it had rejected is an expensive misunderstanding. Agreeing in writing what each return code allows, and how many working days the client has to respond, lets the schedule assume real review cycles and gives a basis for claiming delay.

                ## Milestones
                1. Each client return code written down with what it permits, such as proceed, proceed with comments or revise and resubmit.
                2. The contractual review period confirmed in working days for each document category.
                3. A rule agreed for what happens when the review period passes without a return.
                4. The codes and periods added to the register so overdue returns flag automatically.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A client-confirmed table of return codes and review periods, written into the procedure and built into the register."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the review code and review period clauses in the contract"
                - "Write a table of return codes with what each permits"
                - "Ask the client's document controller to confirm the table in writing"
                - "Add a review due date column that calculates from the transmittal date"
            - name: Vendor document requirements in purchase orders
              description: |-
                ## Purpose
                Vendor drawings, datasheets, certificates and manuals arrive late or incomplete when the purchase order only says documentation as required. A vendor document requirements list attached to every order, naming each document, when it is due after order, and whether it needs review or is for information, gives procurement a contractual hold on the supplier rather than relying on goodwill.

                ## Milestones
                1. A standard requirements list template covering drawings, datasheets, calculations, test records, certificates and manuals.
                2. Due dates expressed as weeks after order or before shipment for each document type.
                3. Review or information status set for each document, agreed with the engineering lead.
                4. The list attached to every open purchase order for engineered equipment.

                ## Notes
                Tie part of the payment milestones to final documentation, not only to delivery. Vendors prioritise what holds up their invoice.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every open purchase order for engineered equipment carries a vendor document requirements list with due dates and review status."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List the open purchase orders for engineered equipment"
                - "Draft the standard vendor document requirements list with due dates"
                - "Agree review or information status for each document type with engineering"
                - "Ask procurement to attach the list to each open order and future orders"
            - name: Controlled copy and print stamp rules
              description: |-
                ## Purpose
                Paper still runs most construction sites and control rooms, and a printed drawing has no way of telling its reader it was superseded last week. Rules for controlled copies, numbered and recorded against a holder, and stamps or watermarks for uncontrolled prints, make it obvious which paper can be worked from.

                ## Milestones
                1. Controlled copy locations listed, such as the site office, control room and workshop, each with a named holder.
                2. A stamp or watermark wording for uncontrolled prints, including a print date.
                3. A copy register showing which revision each controlled holder has.
                4. Holders briefed that only controlled copies may be used for construction or operation.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A controlled copy register naming every holder and revision held, plus uncontrolled print wording in use on all plotted output."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Walk the site and list every place drawings are kept on paper"
                - "Name a holder for each controlled copy location"
                - "Set the uncontrolled print watermark with a print date on the plot settings"
                - "Brief the holders on using only controlled copies for work"
            - name: Incoming document receipt and logging
              description: |-
                ## Purpose
                Documents arrive by email, portal, courier and over the counter, and anything not logged on the day it arrives is effectively lost to the register. A daily routine that logs every incoming transmittal, checks the documents against it and routes them to the right reviewer keeps the register a true picture of what you hold.

                ## Milestones
                1. One inbox or portal named as the official route for incoming documents.
                2. Every incoming transmittal logged on the day of receipt with its number and contents.
                3. Each document checked against the transmittal for number, revision and readability.
                4. Documents routed to a named reviewer with a due date the same day.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every incoming transmittal for a month logged on the day of receipt, with no document reaching a reviewer unlogged."
                cadence: rolling
              tasks:
                - "Name the one inbox or portal that receives project documents"
                - "Log incoming transmittals and route documents to reviewers @recurring(daily)"
                - "Reject and return transmittals whose contents do not match their list"
                - "Tell the team to forward any document received directly to document control"
            - name: Weekly register reconciliation
              description: |-
                ## Purpose
                Registers drift from the files they describe: a revision is issued but not entered, a document is filed in the wrong folder, a status is never updated after the client returns it. Reconciling the register against the issued folder or document system once a week catches drift while it is still a five-minute fix.

                ## Milestones
                1. A reconciliation check comparing register revisions with the latest file in the issued area.
                2. Mismatches listed each week with the action taken to fix them.
                3. Documents in the issued area with no register line found and resolved.
                4. Fewer than five mismatches a week sustained for a full month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly reconciliation log for eight weeks, with mismatches falling below five a week by the end."
                cadence: rolling
              tasks:
                - "Export the register and the issued area file list into one sheet"
                - "Reconcile register revisions against the issued files @recurring(weekly:fri)"
                - "Find issued files that have no register line and fix the cause"
                - "Record each week's mismatch count in a running log"
            - name: Overdue client review chase
              description: |-
                ## Purpose
                Documents sitting with the client past the review period stop engineering, procurement and construction just as surely as late design does, and they are easy to forget once they leave the building. A weekly list of overdue returns, sent to the client's document controller with the days overdue, keeps review time visible and supports any later delay claim.

                ## Milestones
                1. A weekly report of documents past their review due date, with days overdue.
                2. The report sent to the client contact and the project manager each week.
                3. Documents overdue by more than two weeks raised at the next progress meeting.
                4. A record of every chase kept against the register line.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly overdue review report sent for eight consecutive weeks, with every chase recorded on the register."
                cadence: rolling
              tasks:
                - "Filter the register for documents past their review due date"
                - "Send the overdue review report to the client contact @recurring(weekly:tue)"
                - "Add long overdue documents to the progress meeting agenda"
                - "Note each chase date against the register line"
            - name: Vendor document expediting
              description: |-
                ## Purpose
                A pump that arrives without approved general arrangement drawings or test certificates cannot be installed or accepted, and vendor documents are the most common late item in a project register. Tracking each vendor's document list weekly, with a named contact on both sides, turns late prints into a known problem before the equipment ships.

                ## Milestones
                1. A vendor document tracker showing every required document per purchase order with due and received dates.
                2. A named document contact at each vendor and in procurement.
                3. A weekly status sent to vendors with overdue documents listed.
                4. Overdue vendor documents escalated through procurement when more than two weeks late.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A vendor document tracker updated weekly for every engineered purchase order, with escalations recorded for items more than two weeks late."
                cadence: rolling
              tasks:
                - "Build the vendor document tracker from the requirements lists on each order"
                - "Get a named document contact from each vendor"
                - "Send each vendor its overdue document list @recurring(weekly:wed)"
                - "Escalate documents more than two weeks late to the buyer"
            - name: Superseded print withdrawal on site
              description: |-
                ## Purpose
                Someone building from a superseded drawing is one of the few document control failures that can hurt people as well as budgets: a wrong pipe rating or a moved support is built exactly as drawn. A monthly sweep of every controlled copy location, checking revisions against the register and removing old prints, closes the gap between the office and the field.

                ## Milestones
                1. Every controlled copy location checked against the register each month.
                2. Superseded prints removed and either destroyed or stamped superseded and archived.
                3. Each sweep recorded with the location, documents found out of date and action taken.
                4. No superseded drawing found in use for three consecutive sweeps.

                ## Notes
                Superseded prints kept for reference must be stamped clearly across the face. A stamp in the corner is missed when the sheet is folded.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly sweep records for every controlled copy location, with no superseded drawing found in use for three sweeps running."
                cadence: rolling
              tasks:
                - "Print the register's current revisions for each controlled copy location"
                - "Sweep controlled copy locations and remove superseded prints @recurring(monthly:12)"
                - "Record each location's findings and the action taken"
                - "Raise any superseded drawing found in use with the construction manager"
            - name: Monthly document control KPI report
              description: |-
                ## Purpose
                Project managers notice document control only when it fails, so a short monthly report showing documents issued against plan, average client review time, overdue vendor documents and register mismatches makes the work and its risks visible. Four or five measures, tracked the same way every month, show trends that a single snapshot hides.

                ## Milestones
                1. Four or five measures chosen and defined, with how each is calculated.
                2. A monthly report issued with the measures and a short commentary.
                3. Trends shown over at least three months on one page.
                4. One action agreed each month from the worst measure.

                ## Notes
                Start from the **Metrics log** template to keep the monthly figures in one place.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive monthly KPI reports with defined measures, trend charts and one agreed action each."
                cadence: rolling
              tasks:
                - "Choose four or five measures and write how each is calculated"
                - "Compile and issue the document control KPI report @recurring(monthly:3)"
                - "Agree one action from the worst measure with the project manager"
                - "Ask the agent to draft the commentary from the month's figures"
            - name: Distribution matrix upkeep
              description: |-
                ## Purpose
                Distribution matrices say which people and organisations receive which document types, and in what form, so that issues reach the right desks without someone guessing each time. Keeping the matrix current as people join, leave and change roles stops construction drawings going to a departed engineer while the new site lead never receives them.

                ## Milestones
                1. A matrix of document types against recipients, with the purpose and format each receives.
                2. Every recipient matched to a current person with a working address.
                3. The matrix checked monthly against the project organisation chart.
                4. Changes to the matrix recorded with the date and reason.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A distribution matrix checked monthly against the organisation chart for three months, with each change logged."
                cadence: rolling
              tasks:
                - "Draft the distribution matrix of document types against recipients"
                - "Check the matrix against the current organisation chart @recurring(monthly:20)"
                - "Log each change to the matrix with its date and reason"
                - "Ask discipline leads to confirm who in their team needs each document type"
            - name: Site redline master set custody
              description: |-
                ## Purpose
                As-built drawings are only as good as the redlines collected during construction, and redlines scattered across foremen's pockets never make it back. Keeping one master redline set in the site office, with a named custodian and a weekly collection from supervisors, means field changes are captured while people still remember them.

                ## Milestones
                1. One master redline set held in the site office under a named custodian.
                2. Redline rules issued: colour, initials, date and reference to the query or change.
                3. Supervisors' field markups collected and transferred to the master set every week.
                4. Each redlined sheet logged so the office knows which drawings carry changes.

                ## Notes
                A common convention is red for additions, green for deletions and blue for notes, but follow the client's rule if it has one.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A master redline set with a named custodian, weekly collection records for two months and a log of every redlined sheet."
                cadence: rolling
              tasks:
                - "Name the custodian of the master redline set in the site office"
                - "Issue the redline colour and initialling rules to supervisors"
                - "Collect field markups and transfer them to the master set @recurring(weekly:thu)"
                - "Log each redlined sheet with the change reference"
            - name: Quarterly document control audit sample
              description: |-
                ## Purpose
                Self-checks find what the register says; an audit sample finds what actually happened. Pulling twenty random documents each quarter and tracing each from register to file to transmittal to client return shows whether the procedure is being followed and where it breaks.

                ## Milestones
                1. Twenty documents chosen at random from the register each quarter.
                2. Each traced through register entry, issued file, transmittal and client return.
                3. Findings recorded by type, such as missing transmittal or wrong status.
                4. Actions raised for any finding that appears more than twice.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A quarterly audit record of twenty traced documents, with findings grouped by type and actions for repeat findings."
                cadence: cyclic
              tasks:
                - "Pick twenty documents at random from the register"
                - "Trace each sampled document from register to client return @recurring(quarterly)"
                - "Group the findings by type in a short audit note"
                - "Raise an action for any finding type seen more than twice"
            - name: Records retention and archive transfer
              description: |-
                ## Purpose
                Engineering records may need to be produced years later for an incident investigation, a modification or a legal claim, and the retention period is often set by contract, regulation or company policy. A yearly review that moves closed project records to the archive, with an index, and flags records due for disposal, keeps the record findable and the working system lean.

                ## Milestones
                1. Retention periods confirmed for each record category with the client or company records owner.
                2. Closed project records transferred to the archive with an index.
                3. Records past retention listed and disposal approved by the records owner.
                4. An archive index that someone outside the project can search.

                ## Notes
                Never dispose of records without written approval from the records owner. Records linked to an open claim or investigation are held regardless of age.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A yearly archive transfer with an index, confirmed retention periods and written disposal approvals on file."
                cadence: cyclic
              tasks:
                - "Ask the records owner for the retention schedule that applies"
                - "Transfer closed project records to the archive with an index @recurring(yearly)"
                - "List records past retention for the records owner to approve"
                - "Test the archive index by finding three old documents from it"
            - name: Document control basics for engineers
              description: |-
                ## Purpose
                Most engineers are never taught document control and learn it from the first rejected transmittal. A short self-study on numbering, revisions, status codes, transmittals and the register, using your own project's procedure, saves rework and makes you the engineer whose issues go through first time.

                ## Milestones
                1. The project document control procedure read and three questions taken to the document controller.
                2. One of your own documents traced from register to transmittal to client return.
                3. The difference between each status code explained in your own words.
                4. Your next issue prepared without any correction from document control.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your next three document issues pass the document controller's pre-issue check without correction."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read the project document control procedure from start to finish"
                - "Take three questions about it to the document controller"
                - "Trace one of your documents from register to client return"
                - "Ask the document controller to check your next issue before it goes"
            - name: Configuration management principles for engineering
              description: |-
                ## Purpose
                Configuration management, as set out in standards such as ISO 10007, is the discipline of knowing that the plant, the drawings and the design basis all describe the same thing. Learning its four parts (identification, change control, status accounting and audit) gives document control a reason behind every rule and helps when arguing for resources.

                ## Milestones
                1. The four parts of configuration management explained with an example from your plant or project.
                2. Configuration items identified for one system, such as its P&IDs, datasheets and setpoints.
                3. Gaps between the documents and the installed system listed for that system.
                4. A one-page note on how your procedure covers each part, and where it does not.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page gap note mapping your procedure against the four parts of configuration management, using one real system as the example."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Read a summary of configuration management identification, control, accounting and audit"
                - "List the configuration items for one system on your plant or project"
                - "Compare those documents with the installed system and note gaps"
                - "Write a one-page note on how your procedure covers each part"
            - name: Reading a vendor document schedule and data book
              description: |-
                ## Purpose
                Vendor document schedules use their own codes and abbreviations, and the final data book can run to thousands of pages of certificates, test records and drawings. Learning how they are structured, what a material certificate or pressure test record must show, and how they map to your requirements list makes vendor review faster and acceptance safer.

                ## Milestones
                1. One real vendor document schedule read and each document mapped to your requirements list.
                2. The main record types in a data book listed with what each must contain.
                3. One material certificate checked against the purchase order material and heat number.
                4. A checklist for reviewing a data book drafted from what you learned.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A data book review checklist drafted after mapping one real vendor schedule and checking one material certificate end to end."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Get one vendor document schedule and its purchase order"
                - "Map each scheduled document to your requirements list"
                - "Check one material certificate against the order and the heat number"
                - "Draft a data book review checklist from the exercise"
            - name: EDMS power user skills
              description: |-
                ## Purpose
                An electronic document management system is only as fast as the person driving it, and most users never go beyond upload and search. Learning check-in and check-out, saved searches, bulk metadata edits, workflows and audit history turns a two-hour register update into ten minutes and lets you answer client questions on the spot.

                ## Milestones
                1. Check-in, check-out and version history used confidently on test documents.
                2. Five saved searches set up for the reports you run most often.
                3. A bulk metadata update done safely on a test set and checked.
                4. The audit history of one document read to answer who changed what and when.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five saved searches in use and one bulk metadata update completed and verified on a test set in the project EDMS."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the EDMS administrator for a test area to practise in"
                - "Practise check-in, check-out and reverting a version on test files"
                - "Set up five saved searches for your regular reports"
                - "Run and verify a bulk metadata update on the test set"
            - name: ISO 9001 documented information requirements
              description: |-
                ## Purpose
                Quality audits under ISO 9001 test whether documented information is controlled: approved before issue, reviewed and updated, identified by revision, available where needed and protected from unintended change. Knowing exactly what the standard asks for lets you show an auditor evidence quickly instead of defending a procedure line by line.

                ## Milestones
                1. The clause on documented information read and its requirements listed.
                2. Each requirement matched to where your procedure meets it.
                3. Evidence for each requirement identified, such as a transmittal log or access list.
                4. Any requirement without evidence added to the improvement list.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A table matching each documented information requirement to a procedure section and a piece of evidence, with gaps listed."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Get the company's copy of ISO 9001 from the quality manager"
                - "List the requirements in the documented information clause"
                - "Match each requirement to a procedure section and an evidence record"
                - "Add any requirement without evidence to the improvement list"
            - name: Spreadsheet registers that do not break
              description: |-
                ## Purpose
                Many registers still live in spreadsheets, and a single sorted column or overwritten formula can scramble a thousand lines without anyone noticing. Learning data validation, locked formula columns, lookups to code lists and pivot tables for reports makes a spreadsheet register reliable enough to run a mid-sized project.

                ## Milestones
                1. Drop-down lists added for status, discipline and revision fields from a code list sheet.
                2. Formula columns locked and the sheet protected except for input columns.
                3. Lookup formulas used for titles and dates so data is entered once.
                4. A pivot table producing the weekly status summary in one refresh.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A spreadsheet register with validated inputs, protected formulas and a pivot summary that refreshes in one step."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Make a copy of the register to practise on"
                - "Add drop-down validation for status, discipline and revision"
                - "Lock the formula columns and protect the sheet"
                - "Build a pivot table for the weekly status summary"
            - name: Common data environment states and workflows
              description: |-
                ## Purpose
                Building and infrastructure clients increasingly expect information to move through work in progress, shared, published and archived states with suitability codes, as described in ISO 19650. Understanding how those states and codes map onto a traditional revision and status scheme lets you work on such projects without running two systems by hand.

                ## Milestones
                1. The four information states and their purpose explained with an example.
                2. Suitability and revision codes from a client's information requirements mapped to your own scheme.
                3. The approval step between shared and published identified for each discipline.
                4. A mapping table added to the procedure for projects that use these states.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A mapping table between the client's information states and suitability codes and your revision and status scheme, added to the procedure."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read the client's information requirements or a guide to ISO 19650 states"
                - "Map the client's suitability codes onto your status codes"
                - "Identify who approves the move from shared to published in each discipline"
                - "Add the mapping table to the procedure as an appendix"
            - name: Choosing an electronic document management system
              description: |-
                ## Purpose
                Once a project passes a few thousand documents or several companies, a shared drive and spreadsheet register cannot show who changed what, or enforce review workflows. Comparing three systems against your real needs, such as numbering rules, transmittals, vendor portals, audit trail and cost per user, leads to a choice the team will actually use.

                ## Milestones
                1. Requirements listed and ranked, including numbering, metadata, transmittals, external access and audit trail.
                2. Three systems shortlisted and scored against the same requirements.
                3. A trial run on one real document set with the shortlisted favourite.
                4. A recommendation with total cost of ownership and approval from the budget holder.

                ## Notes
                Start from the **Purchase decision** template. Ask each supplier how you would export everything at the end of the contract; a system you cannot leave is a risk.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An approved recommendation for one EDMS, scored against ranked requirements with three-year cost and an exit route."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "List and rank the requirements with two engineers and the document controller"
                - "Shortlist three systems and request demonstrations"
                - "Trial the favourite system on one real document set"
                - "Write the recommendation with three-year cost and export route"
            - name: Migrating the register into the EDMS
              description: |-
                ## Purpose
                Moving a live register into a new system is where document histories get lost: revisions collapse, transmittal links break and statuses reset. A planned migration with field mapping, a trial load, reconciliation counts and a cut-over date keeps the record intact and the team working through the change.

                ## Milestones
                1. Every register field mapped to an EDMS field, with code list conversions written down.
                2. A trial load of one discipline reconciled line by line against the old register.
                3. A cut-over date agreed, with the old register frozen read-only from that day.
                4. Counts of documents and revisions matching between old and new after the full load.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A completed migration with matching document and revision counts, a frozen read-only old register and a signed reconciliation record."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Map every register field to an EDMS field with code conversions"
                - "Run a trial load for one discipline and reconcile it line by line"
                - "Agree the cut-over date and announce the freeze to the team"
                - "Compare document and revision counts after the full load"
            - name: Legacy drawing archive indexing for a brownfield site
              description: |-
                ## Purpose
                Older plants often hold decades of drawings in plan chests, aperture cards and unnamed scans, and engineers waste days hunting for a foundation drawing before a modification. Scanning and indexing the legacy archive by unit and tag, starting with the drawings most often requested, makes the old record usable without a full redraw.

                ## Milestones
                1. The legacy archive surveyed, with counts by medium and condition.
                2. A priority list of drawing types to scan first, based on requests and safety relevance.
                3. Scanned drawings indexed with legacy number, title, unit and a link to any current number.
                4. The index searchable by the engineering team, with a request route for the rest.

                ## Notes
                Index the scans against current tag numbers where you can. A scan found only by its 1980s number is barely better than the plan chest.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The priority drawing types scanned and indexed by unit and tag, with the index available to every engineer on the site."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Survey the legacy archive and count drawings by medium and condition"
                - "Ask engineers which old drawings they request most often"
                - "Agree a scanning resolution and index fields with the records owner"
                - "Scan and index the first priority batch"
            - name: Duplicate and orphan document number clean-up
              description: |-
                ## Purpose
                Registers that grew without a strict allocation rule end up with two documents sharing a number, numbers with no document, and files with no number at all. A planned clean-up that finds each case, decides which number survives and records the cross-reference fixes the problem once and stops it recurring.

                ## Milestones
                1. Duplicate numbers, unused reservations and unnumbered files listed from a register export.
                2. A decision recorded for each case: keep, renumber, cancel or merge.
                3. Renumbered documents cross-referenced so old references can still be traced.
                4. A monthly duplicate check in place to stop new cases.

                ## Notes
                Start from the **Remediation plan** template to track each case to closure.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every duplicate and orphan number resolved with a recorded decision and cross-reference, and a monthly duplicate check running."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Export the register and list duplicate numbers and unused reservations"
                - "Decide keep, renumber, cancel or merge for each case with the originator"
                - "Record a cross-reference from every old number to its new one"
                - "Run a duplicate number check on the register @recurring(monthly:28)"
            - name: Automated transmittals and review workflows
              description: |-
                ## Purpose
                Manual transmittals and emailed review requests are slow and easy to get wrong when a project issues hundreds of documents a month. Configuring the document system to generate transmittals from the register, route documents to reviewers by discipline and remind them before the due date cuts handling time and makes every step auditable.

                ## Milestones
                1. The current manual steps mapped and timed for one typical issue.
                2. Transmittal generation configured from register data with the agreed purpose codes.
                3. Review routing set up by discipline with due dates and reminders.
                4. A pilot on one discipline showing handling time per issue before and after.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Automated transmittals and review routing live for at least one discipline, with handling time per issue measured before and after."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Time the manual steps for one typical issue from file to client"
                - "Configure transmittal generation from the register fields"
                - "Set up discipline review routing with reminders before the due date"
                - "Pilot on one discipline and compare handling time"
            - name: Report and datasheet templates with revision history
              description: |-
                ## Purpose
                Reports, specifications and datasheets drift from the standard when each engineer copies the last one they wrote. Controlled templates with a locked cover page carrying the document number, revision table and approval signatures make every text document carry its own control information.

                ## Milestones
                1. Templates for report, specification, datasheet and calculation cover pages issued under document numbers.
                2. A revision history table and approval block fixed on each cover page.
                3. Fields linked so the number and revision update in headers and footers.
                4. Old templates withdrawn from shared folders.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Four controlled templates issued with locked cover pages and revision tables, and the old copies removed from shared folders."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Collect the cover pages currently in use across disciplines"
                - "Build the report, specification, datasheet and calculation templates"
                - "Link the document number and revision fields to headers and footers"
                - "Check the templates still match the procedure and client requirements @recurring(yearly)"
            - name: Pre-submission check to cut client rejections
              description: |-
                ## Purpose
                Clients often reject documents for reasons that have nothing to do with engineering: a wrong title block, a missing revision description, an unsigned checker box. A short pre-submission check by document control, tracked against client returns, removes these avoidable rejections and shortens every review cycle.

                ## Milestones
                1. Three months of client returns analysed for non-technical rejection reasons.
                2. A pre-submission checklist of ten items or fewer built from the top reasons.
                3. The check applied to every outgoing issue for two months.
                4. Non-technical rejections counted before and after the check.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Non-technical client rejections measured before and after two months of pre-submission checks, with the checklist in the procedure."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Sort three months of client returns by rejection reason"
                - "Write a checklist from the most common non-technical reasons"
                - "Apply the check to every outgoing issue"
                - "Compare non-technical rejection counts after two months"
            - name: Plant master drawing set ownership
              description: |-
                ## Purpose
                On operating plants, several projects can mark up the same P&ID at once, and the master quietly forks into versions nobody can reconcile. Naming an owner for the plant master set, with a rule that projects check drawings out and back in, keeps one current drawing for each system while work goes on in parallel.

                ## Milestones
                1. The plant master drawing set defined by drawing type, such as P&IDs, single-line diagrams and hazardous area plans.
                2. An owner named for the master set, with authority to accept or refuse updates.
                3. A check-out and check-in rule for projects working on master drawings.
                4. A monthly list of master drawings checked out, with the project and expected return.

                ## Notes
                Safety-critical drawings such as hazardous area classification and relief system drawings should be among the first brought under the master set rule.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A named owner, a written check-out rule and three monthly lists of checked-out master drawings with projects and return dates."
                cadence: rolling
              tasks:
                - "List the drawing types that form the plant master set"
                - "Agree the master set owner with the engineering manager"
                - "Write the check-out and check-in rule for projects"
                - "Review master drawings checked out to projects and chase returns @recurring(monthly:25)"
            - name: Document control kick-off with client and contractors
              description: |-
                ## Purpose
                Most document control disputes on a project trace back to an assumption nobody voiced in the first month. A kick-off meeting with the client's and each contractor's document controllers, walking through numbering, codes, transmittal routes, portals and review periods, settles the rules while changing them is still cheap.

                ## Milestones
                1. An agenda covering numbering, revision and status codes, transmittal routes, portals, review periods and contacts.
                2. The meeting held with every party's document controller present.
                3. Decisions and open points minuted with owners and dates.
                4. The procedure updated with anything agreed at the meeting.

                ## Notes
                Bring sample documents, a transmittal and a register extract. Agreeing on a real example is faster than agreeing on wording.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A kick-off held with every party's document controller, minutes issued with owners and dates, and the procedure updated."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Draft the kick-off agenda and send it with sample documents"
                - "Invite the client's and each contractor's document controller"
                - "Run the meeting and minute decisions and open points"
                - "Update the procedure with the agreed points"
            - name: Handover documentation dossier to operations
              description: |-
                ## Purpose
                Operations inherits the plant with whatever documents arrive at handover, and gaps found later are expensive to fill once vendors and project staff have gone. Agreeing the handover dossier contents early, tracking them system by system and handing over a complete, indexed set is what lets operations maintain and modify the plant safely.

                ## Milestones
                1. The handover document list agreed with operations, organised by system.
                2. A tracker showing each required document's status by system.
                3. Missing documents chased with vendors and disciplines at least eight weeks before handover.
                4. The dossier handed over with an index and a signed acceptance from operations.

                ## Notes
                Agree with operations whether they want native files as well as PDFs. Without native drawings, every future modification starts with a redraw.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A complete, indexed handover dossier accepted in writing by operations, with any outstanding items listed with dates."
                cadence: phased
                effort_hours_estimate: "80"
              tasks:
                - "Ask operations for their handover document requirements"
                - "Build the handover tracker by system from the register"
                - "Chase missing documents with vendors and disciplines"
                - "Hand over the indexed dossier and get signed acceptance"
            - name: As-built drawing package at project close
              description: |-
                ## Purpose
                As-built drawings record what was actually built, and the next team to modify the plant will trust them without question. Turning the site redline master set into revised as-built drawings, checked and issued with an AB status, closes the gap between the design and the plant before the people who know the changes leave.

                ## Milestones
                1. Every drawing carrying redlines identified from the redline log.
                2. Redlines incorporated, checked against the master set and issued at as-built status.
                3. Drawings without changes confirmed and reissued as as-built where the client requires it.
                4. The as-built register line for every drawing showing its final revision and date.

                ## Notes
                Get the redlines signed by the site engineer before drafting starts. An as-built prepared from unsigned markups is just another opinion.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every drawing in the register issued at as-built status, with redlines signed by the site engineer and the register showing final revisions."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "List every drawing with redlines from the master set log"
                - "Get the site engineer to sign the redline set"
                - "Track drafting and checking of each as-built in the register"
                - "Issue the as-built package under a transmittal to the client"
            - name: Vendor final documentation acceptance
              description: |-
                ## Purpose
                Final vendor documentation, often called the manufacturing record book or data book, is what proves the equipment was made and tested as ordered. Reviewing it against the purchase order requirements before final payment, with a clear accept or return decision, is the last chance to get missing certificates while the vendor still has a reason to respond.

                ## Milestones
                1. The final documentation for each engineered order received and logged.
                2. Each data book reviewed against the requirements list and the purchase order.
                3. Missing or deficient records returned to the vendor with a list.
                4. Accepted data books recorded, with procurement told that final payment can proceed.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every engineered purchase order has a data book accepted or returned with a deficiency list, recorded before final payment."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "List every engineered order and whether its data book has arrived"
                - "Review each data book against its requirements list"
                - "Return deficient data books with a list of missing records"
                - "Tell procurement which orders are cleared for final payment"
            - name: Preparing for a document control audit
              description: |-
                ## Purpose
                Clients, certification bodies and regulators audit document control because it is easy to test and reveals a lot. Preparing an evidence pack, rehearsing a trace of several documents and fixing known gaps beforehand turns the audit into a confirmation rather than a list of findings.

                ## Milestones
                1. The audit scope and criteria confirmed with the auditor.
                2. An evidence pack of the procedure, register, transmittal log, access list and recent audit samples.
                3. A rehearsal trace of five documents completed without a gap.
                4. Known gaps either closed or shown with a dated action.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An audit completed with an evidence pack ready on the day and no findings on items the rehearsal had already covered."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Ask the auditor for the audit scope and criteria"
                - "Assemble the evidence pack in one folder"
                - "Rehearse a trace of five documents with a colleague"
                - "List known gaps with dated actions to show the auditor"
            - name: Project close-out archive and register freeze
              description: |-
                ## Purpose
                When a project ends, people scatter and files are left in working folders with no one responsible. A close-out that freezes the register, moves the final record to the archive, removes external access and leaves a short index note ensures that anyone can find the record in ten years.

                ## Milestones
                1. The register frozen at final status, with every document closed, cancelled or superseded.
                2. Final revisions and transmittal records moved to the archive.
                3. External user access to the project area removed.
                4. A close-out note filed describing where everything is and who owns it.
              priority: medium
              deadlineOffsetDays: 240
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A frozen register with no open lines, an archived final record, external access removed and a filed close-out note."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Filter the register for any line not closed, cancelled or superseded"
                - "Move final revisions and transmittal records to the archive"
                - "Remove external user access to the project area"
                - "Write the close-out note naming the record owner"
            - name: First 90 days as a document controller
              description: |-
                ## Purpose
                New document controllers arrive to a register they did not build, a procedure they did not write and a queue of overdue returns. A 30, 60 and 90 day plan that starts with listening and reconciling, then fixes the worst gaps, then improves the routine, earns the team's trust before asking them to change habits.

                ## Milestones
                1. At 30 days: procedure read, register reconciled once and every discipline lead met.
                2. At 60 days: the three worst gaps fixed, such as overdue returns or missing transmittals.
                3. At 90 days: a weekly and monthly routine running and one improvement agreed with the project manager.
                4. A short review with your manager at each stage.

                ## Notes
                Start from the **Onboarding 30/60/90** template.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three stage reviews held with your manager, with the 30, 60 and 90 day milestones recorded as met or explained."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Book 30 minutes with each discipline lead in your first two weeks"
                - "Reconcile the register once to see its real state"
                - "List the three worst gaps and agree them with your manager"
                - "Book the 30, 60 and 90 day reviews with your manager"
            - name: Graduate engineer issuing first documents for review
              description: |-
                ## Purpose
                A graduate's first issued drawing or datasheet is often their first contact with checking, approval and client review, and early rejections can knock confidence. Following one document from draft through check, approval, transmittal and client comment, with a mentor, teaches the whole cycle and shows why each control exists.

                ## Milestones
                1. One deliverable assigned with its register line and planned issue date.
                2. The document checked by a senior engineer and comments closed.
                3. The document issued through document control under a transmittal.
                4. Client comments received, answered and the revision issued.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One deliverable taken from draft to client-accepted revision, with the check record and transmittal on file."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Find your first deliverable's line in the register with your mentor"
                - "Ask your checker how they want the check print marked"
                - "Prepare the document for issue using the pre-submission checklist"
                - "Draft responses to the client's comments and review them with your mentor"
            - name: Document control in a small consultancy
              description: |-
                ## Purpose
                Small engineering firms rarely have a document controller, so the engineers issue their own drawings and the register lives in someone's head. A lightweight system, one spreadsheet register, a numbering rule, a transmittal template and an hour a week owned by a named person, gives clients the traceability they expect without hiring.

                ## Milestones
                1. One person named as document control owner with an hour a week set aside.
                2. A single spreadsheet register covering all live projects.
                3. A one-page numbering rule and a transmittal template in use by everyone.
                4. No document sent to a client without a register line for three months.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A named owner, one register for all live projects and three months of client issues each matched to a register line and transmittal."
                cadence: rolling
              tasks:
                - "Name the person who owns document control and agree their weekly hour"
                - "Merge existing project lists into one register"
                - "Share the numbering rule and transmittal template with every engineer"
                - "Check the week's client issues against the register @recurring(weekly:mon)"
            - name: Contractor document control under a client procedure
              description: |-
                ## Purpose
                Contractors often have to deliver to the client's numbering and procedure while running their own internal system, and keeping two numbers for every document is where errors creep in. A cross-reference held in the register, with client numbers allocated through an agreed route, lets the team work internally and deliver correctly.

                ## Milestones
                1. The client's procedure read and its differences from your own listed.
                2. A route agreed for allocating client document numbers.
                3. A cross-reference column linking every internal number to its client number.
                4. Outgoing transmittals checked to carry the client number on every document.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A register with a complete internal to client number cross-reference and no outgoing document missing its client number for a month."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List the differences between the client's procedure and yours"
                - "Agree with the client how their document numbers are allocated"
                - "Add the client number cross-reference column to the register"
                - "Check outgoing transmittals carry client numbers on every document"
            - name: Owner-operator plant document control
              description: |-
                ## Purpose
                After projects hand over, the plant's documents must keep pace with years of maintenance changes, small modifications and turnarounds, often with a much smaller team. A site register of operating documents, linked to the change process and checked monthly for drawings awaiting update, keeps the plant record fit for the next modification.

                ## Milestones
                1. A site register of operating drawings and documents separate from project registers.
                2. A link from each approved change to the drawings it requires to be updated.
                3. A monthly list of drawings awaiting update after completed changes.
                4. Drawings awaiting update for more than three months raised with the engineering manager.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A site register of operating documents and three monthly lists of drawings awaiting update, each with owner and age."
                cadence: rolling
              tasks:
                - "List the operating drawings and documents the site relies on"
                - "Link each approved change to the drawings it needs updated"
                - "Report drawings awaiting update after completed changes @recurring(monthly:8)"
                - "Raise drawings awaiting update for more than three months"
            - name: Tag to document cross-reference register
              description: |-
                ## Purpose
                Maintenance and operations teams search by equipment tag, not by drawing number, and a pump's datasheet, general arrangement, wiring diagram and manual can sit under four different numbers. A register linking every tag to its documents lets someone find everything about a piece of equipment in one search and shows which tags are missing key documents.

                ## Milestones
                1. The tag list obtained from the asset register or engineering database.
                2. Document types required per tag class defined, such as datasheet, drawing and manual.
                3. Each tag linked to its documents in a cross-reference table.
                4. A report of tags missing a required document type.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A tag to document cross-reference covering every tag in one unit, with a report of tags missing required documents."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Get the tag list for one unit from the asset register"
                - "Define the required document types for each tag class"
                - "Link each tag to its documents in a cross-reference table"
                - "Run the missing document report and share it with engineering"
            - name: Asset information handover to a handover specification
              description: |-
                ## Purpose
                Large owners now specify handover as structured data as well as documents, often using industry frameworks such as CFIHOS for process plants or COBie for buildings, and checking it at the end is too late. Validating sample data and documents against the handover specification early in detailed design gives contractors time to correct their systems.

                ## Milestones
                1. The owner's handover specification read and its required classes, attributes and documents listed.
                2. A sample handover of one system validated against the specification.
                3. Validation failures grouped by contractor and fed back with a correction date.
                4. A full handover passing validation before mechanical completion.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A sample handover validated early and the full asset information handover passing the owner's validation before mechanical completion."
                cadence: phased
                effort_hours_estimate: "50"
              tasks:
                - "List the classes, attributes and documents the handover specification requires"
                - "Ask one contractor for a sample handover of a single system"
                - "Validate the sample and send failures back with a correction date"
                - "Schedule the full validation run ahead of mechanical completion"
            - name: Export-controlled and confidential document handling
              description: |-
                ## Purpose
                Some engineering documents carry export control classifications, client confidentiality terms or security sensitivity, and sending one to the wrong person or country can breach law or contract. Marking these documents, restricting their access and checking recipients before every transmittal protects the firm and the people who handle them.

                ## Milestones
                1. Contracts and the firm's compliance lead consulted on which documents carry restrictions.
                2. A restriction marking added to the register and to affected documents.
                3. Access to restricted documents limited to named, approved people.
                4. A recipient check added to the pre-issue checklist for restricted documents.

                ## Notes
                Classification of a document under export control law is a decision for your compliance or legal lead, not for document control. Record their decision; do not make it.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every restricted document marked in the register with access limited to approved names, and a quarterly access review on file."
                cadence: rolling
              tasks:
                - "Ask the compliance lead which contracts and documents carry restrictions"
                - "Add a restriction field to the register and mark affected documents"
                - "Limit access to restricted documents to approved names"
                - "Review who has access to restricted documents @recurring(quarterly)"
            - name: Regulated records and electronic signatures
              description: |-
                ## Purpose
                In regulated industries such as medical devices, pharmaceuticals, nuclear and aviation, engineering records may need electronic signatures and audit trails that meet the regulator's rules. Working out which records fall under those rules and checking the document system's signature, audit trail and validation evidence prevents a finding that could stop a product or a plant.

                ## Milestones
                1. The regulator's rules on electronic records identified with the quality or regulatory lead.
                2. Record types in scope listed, such as design history files, test records and approvals.
                3. The document system's signature, audit trail and access controls checked against those rules.
                4. Gaps recorded with actions agreed with the quality or regulatory lead.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A scope list of regulated records and a gap assessment of the document system, with actions agreed by the quality or regulatory lead."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Ask the quality or regulatory lead which electronic record rules apply"
                - "List the record types that fall in scope"
                - "Check the system's signature, audit trail and access controls against the rules"
                - "Record the gaps and agree actions with the quality lead"
---

# Engineering Drawing and Document Control

Engineering Drawing and Document Control is for the engineers, document controllers and project leads who need to know, at any moment, which revision of a drawing is current, who has it and what the client said about it. It starts with foundations (the procedure, numbering, revision and status codes, the master register, transmittals, client review codes and vendor document requirements), moves into the routines that keep a register honest, then the skills behind configuration control and an electronic document management system, followed by improvements and system choices, dated deliverables such as kick-off, handover dossiers and as-builts, different working situations from a first-time controller to a small consultancy, and specialist work on asset information handover, export control and regulated records.

The rhythm is daily for logging incoming documents, weekly for register reconciliation, review chasing, vendor document expediting and the site redline set, monthly for superseded print sweeps, distribution checks and the KPI report, quarterly for access reviews and audit samples, and yearly for the procedure and retention reviews. The Operational checklist, Metrics log, Purchase decision, Remediation plan and Onboarding 30/60/90 templates pair with the projects that need them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
