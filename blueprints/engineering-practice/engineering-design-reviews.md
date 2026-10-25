---
id: engineering-practice.engineering-design-reviews
name: Engineering Design Reviews
description: "Stage reviews at 30, 60 and 90 percent, 3D model reviews, operability and constructability input, a comment log with severity codes, and every action closed with a named owner and evidence."
category: business
version: 1.0.0
tags: [engineering-practice, engineering-design-reviews, engineer, design-review, model-review, constructability, comment-log, operability]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - metrics-log
    - meeting-notes
    - purchase-decision
    - remediation-plan
    - skills-matrix
  pillars:
    - name: Engineering Practice
      emoji: "🔧"
      description: "The day-to-day work of practising engineers: each major discipline, process safety and risk studies, FEED, design reviews, commissioning, reliability and maintenance, CAD, simulation and PLC work, project delivery, tenders, reports, ethics and standards, and the Caribbean energy sector from Point Lisas to LNG."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Engineering Design Reviews
          description: "Running design reviews at each stage: 30, 60 and 90 percent reviews, 3D model reviews, constructability and operability input, comment logs and closing the actions."
          projects:
            - name: Written design review procedure for the project
              description: |-
                ## Purpose
                Every project claims to hold design reviews, but without a written procedure each discipline lead runs them differently and nobody can say when a review is finished. A short procedure that names the stages, the attendees, the entry and exit criteria and how comments are closed gives the whole team one rulebook and gives the client something to audit against.

                ## Milestones
                1. A procedure of no more than eight pages covering stages, roles, entry criteria, comment handling and close-out.
                2. The procedure aligned with the client's project execution plan and any contract review requirements.
                3. Review comments from the discipline leads and the project manager incorporated.
                4. The procedure approved, numbered and issued to every discipline lead.

                ## Notes
                Start from the client's own procedure if one exists and add only what your contract needs. A procedure longer than the design it governs will be ignored.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An approved design review procedure with a document number is issued to every discipline lead within 30 days."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Collect the client's review requirements from the contract and execution plan"
                - "Draft the stages, roles and entry criteria on two pages"
                - "Circulate the draft to discipline leads for one round of comments"
                - "Issue the approved procedure through document control"
            - name: Stage gate entry criteria by discipline
              description: |-
                ## Purpose
                Reviewers waste whole days when a 60 percent review arrives with half the piping at 30 percent and the electrical layouts not started. A matrix that states which deliverables each discipline must have at what maturity for each stage lets the review lead refuse an unready package before it eats everyone's time.

                ## Milestones
                1. A matrix listing each discipline's key deliverables against the 30, 60 and 90 percent and issue for construction stages.
                2. A maturity definition written for each cell, for example layout fixed, line sizes confirmed, vendor data received.
                3. The matrix agreed with discipline leads and the client's engineering representative.
                4. A go or no-go rule recorded for packages that miss the criteria.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An agreed entry criteria matrix covers every discipline and stage, with a written rule for packages that fall short."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List each discipline's main deliverables from the master deliverables register"
                - "Write a maturity definition for each deliverable at each review stage"
                - "Walk the matrix through with each discipline lead in turn"
                - "Record the go or no-go rule in the review procedure"
            - name: Reviewer roster by discipline and stage
              description: |-
                ## Purpose
                A review without the right people is a presentation, and the voices most often missing are operations, maintenance and the construction contractor. A roster that names a primary and backup reviewer for each discipline and each stage, including the client's operators, makes it obvious when a seat is empty before the invitation goes out.

                ## Milestones
                1. A roster naming a primary and backup reviewer for every discipline at each stage.
                2. Operations, maintenance, safety and construction representatives named for the reviews they must attend.
                3. Each named reviewer's availability for the planned review dates confirmed.
                4. Gaps in the roster raised with the project manager with a proposed fix.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A roster with primary and backup reviewers for every discipline and stage is shared, with no unfilled seat for the next review."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every discipline and stakeholder group that must review the design"
                - "Ask the client to name operations and maintenance reviewers"
                - "Confirm each reviewer's availability for the next review date"
                - "Refresh the roster for leavers and new joiners @recurring(quarterly)"
            - name: Comment log format and severity codes
              description: |-
                ## Purpose
                Comments scattered across emails, PDF markups and meeting notes are how a critical point gets lost between 60 and 90 percent. One comment log with fixed columns, a unique number per comment and severity codes such as must fix, should fix and note gives every reviewer the same language and every originator one list to answer.

                ## Milestones
                1. A log with columns for number, document, revision, location, comment, severity, originator response, reviewer back-check and status.
                2. Three or four severity codes defined in one sentence each, with examples.
                3. Status codes defined for open, responded, agreed, closed and rejected.
                4. The log tested on one real drawing set and adjusted before first use.

                ## Notes
                Keep severity codes to four at most. Reviewers stop using a scale they cannot hold in their head.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A tested comment log with defined severity and status codes is in use for the first review package."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Draft the comment log columns and severity codes on one page"
                - "Write a one-line example comment for each severity code"
                - "Trial the log on a single drawing set with two reviewers"
                - "Fix the columns that the trial showed were missing or unused"
            - name: Design basis baseline for reviewers
              description: |-
                ## Purpose
                Design reviewers can only judge a drawing against something, and too often the design basis, the client specifications and the agreed deviations live in three different folders at three different revisions. Giving every reviewer the current basis of design, the specification list and the deviation register before the first review stops comments that argue with requirements nobody changed.

                ## Milestones
                1. The current basis of design and its revision confirmed with the project engineer.
                2. A list of client and project specifications with current revisions compiled.
                3. Approved deviations and concessions gathered into one register.
                4. All three placed in the review folder and linked from the review invitation.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every reviewer has access to the current basis of design, specification list and deviation register before the first stage review."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Confirm the current basis of design revision with the project engineer"
                - "Compile the client specification list with revision numbers"
                - "Gather approved deviations and concessions into one register"
                - "Link all three documents from the review folder index"
            - name: Review package assembly checklist
              description: |-
                ## Purpose
                Half the comments raised at a typical review are about the package rather than the design: wrong revisions, missing sheets, unreadable scans, a model snapshot older than the drawings. A checklist the package owner works through before transmittal cuts those comments out and lets reviewers spend their hours on engineering.

                ## Milestones
                1. A checklist covering drawing list, revision status, transmittal, model snapshot date, superseded sheets and reading order.
                2. The checklist used on one package and timed.
                3. A named package owner for each discipline at the next review.
                4. Package issues raised at the last review counted so the improvement can be measured.

                ## Notes
                Start from the **Operational checklist** template.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every package for the next review is transmitted with a completed assembly checklist signed by its package owner."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Count comments from the last review that were about the package itself"
                - "Write the package checklist from those comments"
                - "Name a package owner for each discipline"
                - "Attach the completed checklist to each review transmittal"
            - name: Model review viewer access and markup set-up
              description: |-
                ## Purpose
                Operators and client reviewers who cannot open the 3D model on the day end up watching someone else drive, and their best comments never get made. Setting up viewer access, a lightweight markup tool and a twenty-minute navigation session a week before the first model review means everyone in the room can walk the plant themselves.

                ## Milestones
                1. Viewer licences or web access issued to every named model reviewer.
                2. Each reviewer able to open the model, move through it and place a markup.
                3. A short navigation guide with the saved viewpoints for each area.
                4. Markups confirmed to export into the comment log without retyping.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every named model reviewer has opened the model and placed a test markup at least one week before the first model review."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every reviewer who needs model access and their licence type"
                - "Run a twenty-minute navigation session for reviewers new to the viewer"
                - "Save named viewpoints for each plant area in the model"
                - "Check that viewer licences match the current reviewer roster @recurring(monthly:25)"
            - name: Briefing pack for first-time reviewers
              description: |-
                ## Purpose
                First-time reviewers from operations, the client or another office often do not know what stage the design is at, what is already frozen or what kind of comment helps. A four-page briefing that explains the stage, the scope, the severity codes and what is out of bounds turns a nervous observer into a useful reviewer.

                ## Milestones
                1. A briefing of four pages or fewer explaining the stage, scope, frozen items and severity codes.
                2. Two example comments, one good and one unhelpful, included.
                3. The briefing sent with every review invitation to a reviewer new to the project.
                4. Feedback from two first-time reviewers used to revise it.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A four-page reviewer briefing is attached to every invitation sent to someone new to the project's reviews."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a one-paragraph summary of the project scope and current stage"
                - "List the items that are frozen and not open for comment"
                - "Add one good and one unhelpful example comment"
                - "Ask the next two first-time reviewers what was missing"
            - name: Review dates fixed in the engineering schedule
              description: |-
                ## Purpose
                Reviews that are not on the schedule get squeezed when the design runs late, and the 90 percent review quietly becomes a quick look the week before issue. Fixing each review as a schedule activity, with time for comment response and back-check after it, shows the true cost of slipping a review and protects it from being skipped.

                ## Milestones
                1. Each stage review entered in the engineering schedule with preparation, meeting, response and back-check durations.
                2. Downstream activities, such as procurement and issue for construction, linked to review close-out.
                3. Review dates communicated to every reviewer at least six weeks ahead.
                4. The schedule float before each review recorded.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every stage review and its response period appear as linked activities in the engineering schedule, with dates sent to reviewers."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the planner for the current engineering schedule baseline"
                - "Add review preparation, meeting, response and back-check activities"
                - "Link issue for construction to review close-out in the schedule"
                - "Check planned review dates against the latest schedule update @recurring(monthly:3)"
            - name: Weekly comment log triage
              description: |-
                ## Purpose
                Open comments age quietly, and a log with four hundred open lines tells nobody where the real problems are. A half-hour weekly triage that sorts new comments by severity, assigns each to an originator and flags anything blocking procurement keeps the log a working tool rather than an archive.

                ## Milestones
                1. A fixed weekly slot with the review coordinator and discipline leads.
                2. Every new comment assigned an owner and a target response date within a week of being raised.
                3. Comments blocking procurement or vendor orders flagged separately.
                4. Comments open for more than thirty days escalated to the engineering manager.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No comment in the log is more than seven days old without a named owner and a target response date."
                cadence: rolling
              tasks:
                - "Book a recurring half-hour triage slot with the discipline leads"
                - "Sort new comments by severity and assign an owner to each @recurring(weekly:tue)"
                - "Flag comments that block procurement in a separate column"
                - "Escalate comments open more than thirty days to the engineering manager @recurring(monthly:8)"
            - name: Review action closure with named owners
              description: |-
                ## Purpose
                An action that belongs to a discipline belongs to nobody. Giving every review action one named person, a due date and a definition of the evidence that closes it, then chasing it weekly, is the difference between a review that changed the design and one that only produced minutes.

                ## Milestones
                1. Every open review action assigned to one named person rather than a team or discipline.
                2. Closure evidence defined for each action, such as a revised drawing number or a calculation reference.
                3. A weekly action report sent to discipline leads and the project manager.
                4. No action closed without its evidence attached or referenced.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every open action has one named owner, a due date and defined closure evidence, and a weekly report goes to the project manager."
                cadence: rolling
              tasks:
                - "Replace discipline names with individual owners on every open action"
                - "Write the closure evidence needed against each open action"
                - "Send the open action report to discipline leads @recurring(weekly:fri)"
                - "Reopen any action closed without evidence and tell its owner"
            - name: Monthly design review metrics report
              description: |-
                ## Purpose
                Numbers show what the meetings hide: comments raised per drawing, the share of must-fix comments, the age of open comments and how many back-checks fail first time. A one-page monthly report lets the engineering manager see whether the design is converging or whether the same problems are coming back revision after revision.

                ## Milestones
                1. Four or five measures chosen and defined, such as open comments by age and first-time back-check pass rate.
                2. A baseline month recorded for each measure.
                3. A one-page report issued monthly to the engineering manager.
                4. One trend from the report acted on within the quarter.

                ## Notes
                Start from the **Metrics log** template. Count comments per drawing, not raw totals, or the busiest discipline always looks worst.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A one-page review metrics report with at least four defined measures is issued on the same day every month."
                cadence: rolling
              tasks:
                - "Choose four review measures and write a definition for each"
                - "Record a baseline month from the current comment log"
                - "Ask the agent to draft the monthly summary from the exported comment log @recurring(monthly:12)"
                - "Pick one worsening trend and agree an action with the lead"
            - name: Interdiscipline check rounds between reviews
              description: |-
                ## Purpose
                Between formal reviews, disciplines change things that affect each other: a pump moves and the cable route, foundation and access platform all need to follow. A weekly interdiscipline check round, where each discipline marks up the others' latest drawings against its own, catches most interface errors before they reach the stage review.

                ## Milestones
                1. An interdiscipline check matrix showing which disciplines check which deliverables.
                2. A weekly round with a fixed cut-off for drawings to enter it.
                3. Interface comments logged in the same comment log as stage review comments.
                4. Interface comments at the next stage review compared with the previous one.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly interdiscipline check round runs with a published matrix, and its comments are logged alongside stage review comments."
                cadence: rolling
              tasks:
                - "Draw up the interdiscipline check matrix with the discipline leads"
                - "Set a weekly cut-off for drawings entering the check round"
                - "Circulate the week's drawings to the checking disciplines @recurring(weekly:wed)"
                - "Log interface comments in the main comment log"
            - name: Comment response and back-check routine
              description: |-
                ## Purpose
                The hardest part of a review is the slow middle: originators answering comments, reviewers checking the answers and the revised drawing actually matching what was agreed. A weekly back-check slot, where reviewers confirm responses against the revised documents, stops comments being closed on a promise.

                ## Milestones
                1. A standard response format for originators: agreed and incorporated, agreed with change, or not agreed with reason.
                2. A weekly back-check slot for each reviewer.
                3. Back-checks done against the revised document, not the response text alone.
                4. Disagreed comments taken to a short resolution meeting rather than left open.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every responded comment is back-checked against the revised document within two weeks, with disagreements taken to a resolution meeting."
                cadence: rolling
              tasks:
                - "Publish the three standard originator response types"
                - "Book a weekly back-check slot for each discipline reviewer"
                - "Back-check responded comments against revised drawings @recurring(weekly:thu)"
                - "Collect disagreed comments for a fortnightly resolution meeting"
            - name: Weekly 3D model clash report
              description: |-
                ## Purpose
                Clashes found in the model cost minutes; clashes found on site cost a scaffold, a cutting permit and a week. A weekly automated clash run, filtered so that only real hard and clearance clashes reach the discipline leads, keeps the model buildable between formal model reviews.

                ## Milestones
                1. Clash rules set for hard clashes and for clearance envelopes such as maintenance access and insulation.
                2. Known and accepted clashes tagged so they do not reappear each week.
                3. A weekly clash report sent to discipline leads with each clash assigned.
                4. Open clash count trending down between the 60 and 90 percent reviews.

                ## Notes
                Most clash runs produce thousands of false hits on day one. Spend the first week on rules and tolerances, not on reading the report.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A filtered clash report is issued every week with each real clash assigned, and the open count falls between the 60 and 90 percent reviews."
                cadence: rolling
              tasks:
                - "Agree hard clash and clearance rules with the model administrator"
                - "Tag accepted clashes so they drop out of future runs"
                - "Run the clash check and send the assigned report @recurring(weekly:mon)"
                - "Plot the open clash count each week on one chart"
            - name: Holds register on review drawings
              description: |-
                ## Purpose
                Holds clouded on drawings for missing vendor data or unresolved comments are easy to add and easy to forget, and a drawing issued for construction with a live hold is a site query waiting to happen. A register of every hold, what releases it and who owns it makes the 90 percent review a check rather than a surprise.

                ## Milestones
                1. Every hold on current drawings listed with drawing number, reason, release condition and owner.
                2. Holds linked to the vendor data or comment that will release them.
                3. A monthly hold count by discipline reported to the engineering manager.
                4. No drawing issued for construction with an open hold unless a recorded exception exists.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A holds register lists every open hold with its release condition and owner, and no drawing is issued for construction with an unrecorded hold."
                cadence: rolling
              tasks:
                - "Search current drawings for clouded holds and list them"
                - "Write the release condition and owner against each hold"
                - "Report the hold count by discipline to the engineering manager @recurring(monthly:20)"
                - "Add an open hold check to the issue for construction checklist"
            - name: Design review lessons learned register
              description: |-
                ## Purpose
                Most review findings are repeats from the last project: the same missing drain, the same valve out of reach, the same cable tray clash. A register of what reviews found, sorted by type and fed into the next project's checklists, is how a team stops paying for the same lesson twice.

                ## Milestones
                1. A register with finding, cause, stage found, cost of late discovery and the checklist change it led to.
                2. Findings from the last two reviews entered.
                3. A quarterly review of the register with discipline leads.
                4. At least three checklist or standard changes traced back to the register.
              priority: low
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A lessons register holds findings from every stage review, and at least three checklist changes are traced to it within a year."
                cadence: rolling
              tasks:
                - "Set up the lessons register columns"
                - "Enter the main findings from the last two reviews"
                - "Ask the agent to group the register's findings into recurring themes"
                - "Review the register with discipline leads and update checklists @recurring(quarterly)"
            - name: Vendor drawing review turnaround
              description: |-
                ## Purpose
                Vendor drawings arrive in bursts and sit in inboxes while the purchase order clock runs, and a late return can hold up fabrication or let a vendor proceed on a design nobody checked. A twice-weekly check of the vendor document register, with review codes and a return date for each document, keeps returns inside the contract period.

                ## Milestones
                1. The contract return period for vendor documents noted for each purchase order.
                2. Each incoming vendor document assigned a lead reviewer and return date on receipt.
                3. Standard return codes applied, such as approved, approved with comments and revise and resubmit.
                4. Returns within the contract period tracked as a percentage each month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least nine in ten vendor documents are returned with a review code inside the contract return period."
                cadence: rolling
              tasks:
                - "List the contract return period for each open purchase order"
                - "Assign a lead reviewer to every vendor document on receipt"
                - "Check the vendor register for documents near their return date @recurring(weekly:mon,thu)"
                - "Report the on-time return percentage at the monthly meeting"
            - name: Reading a P&ID for a design review
              description: |-
                ## Purpose
                Piping and instrumentation diagrams carry more design decisions per square centimetre than any other document, and reviewers who only skim them miss isolation, relief and drain points that are expensive to add later. Learning a systematic way to trace a P&ID, line by line and loop by loop, makes your comments sharper and faster.

                ## Milestones
                1. The project's legend sheet and symbol conventions read and understood.
                2. One P&ID traced line by line for isolation, vents, drains, relief and spec breaks.
                3. Instrument loops on the same sheet checked against the control narrative.
                4. A personal P&ID review checklist of fifteen points or fewer written.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A personal P&ID review checklist is written and used on at least two sheets in a live review."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Read the project's P&ID legend sheets end to end"
                - "Trace one P&ID line by line with a highlighter"
                - "Check the instrument loops on that sheet against the control narrative"
                - "Write a fifteen-point P&ID review checklist from what you found"
            - name: Reviewing plot plans and equipment layouts
              description: |-
                ## Purpose
                Layout errors are the costliest to fix late because everything else is built around them: escape routes, crane access, laydown, separation distances and maintenance removal space. Learning to review a plot plan against spacing standards, access needs and the construction sequence turns a general arrangement drawing into a list of specific questions.

                ## Milestones
                1. The project's spacing and separation requirements listed from the specifications.
                2. One layout reviewed for escape routes, crane access, removal space and drainage falls.
                3. Comments written against the layout with the specification clause behind each.
                4. A layout review checklist added to your personal set.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A layout review of one plot plan is completed with every comment tied to a specification clause or a stated access need."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the spacing and separation requirements from the project specifications"
                - "Mark escape routes and crane access on a printed plot plan"
                - "Check removal space for the largest items of equipment"
                - "Write your layout comments with the clause behind each"
            - name: Writing review comments that get actioned
              description: |-
                ## Purpose
                Vague comments such as check this or not clear produce vague responses and a second round of review. A comment that states the location, the problem, the requirement it breaks and a proposed resolution is answered faster and argued about less, and the skill can be learned in a few sessions.

                ## Milestones
                1. Ten of your past comments rewritten in a location, problem, requirement, proposal form.
                2. A one-page guide to good comments with before and after examples.
                3. Your next review's comments written in the new form.
                4. Fewer of your comments returned for clarification than at the previous review.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Comments raised at your next review follow a location, problem, requirement and proposal form, with fewer clarification requests than before."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Pull ten of your own comments from the last comment log"
                - "Rewrite each with location, problem, requirement and proposed fix"
                - "Write a one-page good comment guide with three before and after pairs"
                - "Count clarification requests on your comments after the next review"
            - name: Chairing a design review meeting
              description: |-
                ## Purpose
                Chairing a review means keeping twenty engineers on the agenda, stopping design-by-committee, making sure the quietest operator gets heard and leaving with every action owned. These are learnable skills, and practising them on a small review before the 60 percent review makes the big one far less chaotic.

                ## Milestones
                1. A standard agenda with timeboxes for each area or system.
                2. Ground rules agreed, including parking lot items and a rule against redesign in the room.
                3. One smaller review chaired with a colleague giving feedback.
                4. Minutes and actions issued within two working days of the meeting.

                ## Notes
                Start from the **Meeting notes** template. Assign a scribe who is not the chair; nobody can do both well.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One review is chaired to a timeboxed agenda with minutes and owned actions issued within two working days."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Draft a standard review agenda with timeboxes"
                - "Write three ground rules to read out at the start"
                - "Ask a colleague to observe your next small review and give feedback"
                - "Issue minutes and actions within two working days of the meeting"
            - name: Walking and marking up a 3D model
              description: |-
                ## Purpose
                Walking a plant model well is a different skill from reading drawings: you need to check headroom, valve reach, ladder and platform access and lifting paths from the operator's eye height. A few practice sessions with the project viewer turn model reviews from a guided tour into real inspection.

                ## Milestones
                1. Navigation, measurement and section tools in the project viewer used confidently.
                2. One area walked at operator eye height with headroom and reach checked.
                3. Markups placed with viewpoint, tag and comment that export cleanly to the log.
                4. A model walk route written for your discipline's typical checks.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A model walk of one area is completed with at least ten markups that export to the comment log with viewpoints."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Practise the viewer's measure and section tools for thirty minutes"
                - "Walk one area at operator eye height and check valve reach"
                - "Place ten markups and export them to the comment log"
                - "Write a standard walk route for your discipline"
            - name: Operability and maintainability review checklist
              description: |-
                ## Purpose
                Plants that look tidy on drawings are often miserable to run: valves above head height, filters with no removal space, instruments that need scaffolding to calibrate. A checklist built with operators and maintainers, used at each stage, puts their daily reality into the design before the steel is ordered.

                ## Milestones
                1. A checklist of twenty to forty points drafted with at least one operator and one maintainer.
                2. Items grouped by access, isolation, sampling, removal, lifting and housekeeping.
                3. The checklist used at the 60 percent model review.
                4. Comments raised from the checklist tracked separately in the log.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An operability and maintainability checklist written with operations input is used at the 60 percent review and its comments are tagged in the log."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask an operator and a maintainer for their ten worst design annoyances"
                - "Group their points into access, isolation, removal and lifting"
                - "Turn the groups into a checklist of no more than forty points"
                - "Tag checklist comments in the log at the next model review"
            - name: Constructability review skills
              description: |-
                ## Purpose
                Contractors see what designers miss: a module too wide for the road, a pipe rack that cannot be erected without dismantling a neighbour, a concrete pour that blocks crane access for a month. Learning the questions a construction manager asks about sequence, lifts, access and prefabrication makes your reviews useful to the people who will build the design.

                ## Milestones
                1. The construction sequence and main heavy lifts for the project understood at outline level.
                2. A list of constructability questions for your discipline written with a construction manager.
                3. One package reviewed for sequence, access, lifting and transport limits.
                4. Constructability comments raised in the log with the construction reason stated.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One package is reviewed against a written list of constructability questions, with each comment stating its construction reason."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the construction manager for the outline sequence and heavy lift list"
                - "Write twelve constructability questions for your discipline"
                - "Check one package for transport limits and crane access"
                - "Log constructability comments with the construction reason stated"
            - name: Human factors in control room and plant layout reviews
              description: |-
                ## Purpose
                Control room layouts, panel arrangements, valve labelling and alarm locations decide how people perform at three in the morning during an upset. Learning the basics of human factors review, such as sightlines, reach envelopes and consistent labelling, lets you raise the comments that prevent operating errors rather than just inconveniences.

                ## Milestones
                1. The project's human factors requirements or the client's standard on them read.
                2. A control room or local panel layout reviewed for sightlines, reach and grouping.
                3. Valve and equipment labelling conventions checked for consistency across one area.
                4. Human factors comments tagged in the log for the safety reviewer.

                ## Notes
                For a major control room, the client may require a specialist human factors review against a recognised ergonomics standard such as the ISO 11064 family. This project prepares you to contribute, not to replace that.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One control room or panel layout is reviewed for sightlines, reach and labelling, with comments tagged for the safety reviewer."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Find the client's human factors requirements for the project"
                - "Review one panel layout for reach, sightlines and grouping"
                - "Check valve labelling consistency across one plant area"
                - "Tag human factors comments for the safety reviewer"
            - name: Choosing a review markup and comment platform
              description: |-
                ## Purpose
                Spreadsheets and emailed PDFs work for twenty comments and fail at two thousand, but a new platform chosen in a hurry can be worse than the spreadsheet. Comparing two or three options against real needs, such as model markups, client access, audit trail and export, gives a decision the whole team and the client can live with.

                ## Milestones
                1. Requirements written, covering drawing and model markup, external access, audit trail, export and cost.
                2. Two or three platforms shortlisted, including the client's existing tool if it has one.
                3. Each shortlisted platform trialled on one real package.
                4. A decision recorded with the reasons and a rollout date.

                ## Notes
                Start from the **Purchase decision** template. Check what the client already licenses before buying anything; reviewers will not learn two tools.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A platform decision is recorded against written requirements after a trial on one real package, with a rollout date."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Write the five requirements the platform must meet"
                - "Ask the client which review tools it already licenses"
                - "Trial each shortlisted platform on one live package"
                - "Record the decision, the reasons and a rollout date"
            - name: Fewer review comments through squad checks
              description: |-
                ## Purpose
                When a stage review produces hundreds of comments that a discipline could have found itself, the review is doing the checker's job. Running a short internal squad check within each discipline before the package leaves for formal review drops the comment count and leaves the stage review free for interface and operability questions.

                ## Milestones
                1. Comments from the last review sorted into those the originating discipline could have caught and those it could not.
                2. A squad check step added two weeks before each stage review.
                3. Squad check findings fixed before the package is transmitted.
                4. Comments per drawing at the next review compared with the last.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A squad check runs before the next stage review and comments per drawing fall compared with the previous review."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask the agent to sort last review's comments into self-catchable and interface"
                - "Agree a squad check slot two weeks before each review"
                - "Fix squad check findings before transmittal"
                - "Compare comments per drawing with the previous review"
            - name: Severity code calibration across reviewers
              description: |-
                ## Purpose
                Two reviewers looking at the same missing drain can call it must fix and note, and originators learn to ignore the reviewer who cries wolf. A short calibration session, where reviewers grade the same ten comments and discuss the differences, makes severity codes mean the same thing across the team.

                ## Milestones
                1. Ten real comments chosen, covering a range of seriousness.
                2. Each reviewer's independent grading collected.
                3. Disagreements discussed and the severity definitions sharpened.
                4. A repeat session held each quarter with new comments.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A quarterly calibration session is held and reviewers agree on the severity code for at least eight of ten sample comments."
                cadence: cyclic
              tasks:
                - "Pick ten real comments of varied seriousness from the log"
                - "Collect each reviewer's grading without discussion"
                - "Discuss the disagreements and rewrite unclear severity definitions"
                - "Run a calibration session with fresh comments @recurring(quarterly)"
            - name: Graded review depth for small and brownfield changes
              description: |-
                ## Purpose
                Not every change needs a full 30, 60 and 90 percent cycle, and forcing one on a pipe reroute wastes reviewers' time while still missing what matters. A graded approach that sets review depth by risk, cost and novelty lets small jobs move quickly and keeps full reviews for the work that deserves them.

                ## Milestones
                1. Three or four review grades defined, from a single desk check to the full stage cycle.
                2. Criteria for each grade written, covering safety, cost, novelty and number of disciplines.
                3. The grades applied to the current portfolio of small projects.
                4. The grading rule approved by the engineering manager and added to the procedure.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An approved graded review rule with defined criteria is in the procedure and applied to every current small project."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the last twenty small projects and the reviews each had"
                - "Define three or four review grades with entry criteria"
                - "Apply the grades to the current small project portfolio"
                - "Get the grading rule approved and added to the procedure"
            - name: Moving from drawing sets to model-based review
              description: |-
                ## Purpose
                Paper drawing sets suit some disciplines and some reviewers, while others find more in an hour in the model than in a day with prints. Deciding which reviews move to the model, which stay on drawings and how comments from both reach one log avoids a half-adopted model review that nobody trusts.

                ## Milestones
                1. Current review formats listed by discipline and stage.
                2. A pilot of one area reviewed in the model and on drawings, with findings compared.
                3. A decision recorded on which reviews move to the model.
                4. Model and drawing comments flowing into one log.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision states which reviews are model-based, backed by a pilot comparing findings from model and drawing reviews of one area."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List the review format each discipline uses at each stage"
                - "Pilot one area in the model and on drawings at the same stage"
                - "Compare the findings from both formats"
                - "Record which reviews move to the model and why"
            - name: Design guides from repeat review comments
              description: |-
                ## Purpose
                If the same comment appears on every project, the fix belongs in a design guide or a standard detail, not in another comment log. Turning the ten most repeated comments into a guide note or checklist item moves the knowledge upstream to the designer who will make the drawing next time.

                ## Milestones
                1. The ten most repeated comments across recent projects identified.
                2. A guide note, standard detail or checklist item written for each.
                3. The guide notes reviewed and approved by the discipline lead.
                4. Repeat comment counts tracked on the next project.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Ten repeat comments are each replaced by an approved guide note or standard detail, and their counts are tracked on the next project."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Search recent comment logs for the ten most repeated comments"
                - "Write a guide note or standard detail for each"
                - "Get each guide note approved by its discipline lead"
                - "Add new repeat comments to the guide list @recurring(quarterly)"
            - name: Clearing a backlog of overdue review actions
              description: |-
                ## Purpose
                Overdue review actions pile up when a project is busy, and a backlog of several hundred is a real risk at issue for construction. A dedicated push, with each action reviewed, re-owned, closed with evidence or formally carried forward, clears the backlog and shows the client the design is under control.

                ## Milestones
                1. Every overdue action listed with its age, severity and current owner.
                2. Actions that are already resolved closed with evidence.
                3. Remaining actions re-owned with realistic dates or formally carried forward with the client's agreement.
                4. Overdue must-fix actions reduced to zero.

                ## Notes
                Start from the **Remediation plan** template. Close nothing by bulk edit; each closure needs its evidence.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "No overdue must-fix review action remains within 60 days, and every other overdue action is closed with evidence or re-owned with a date."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Export every overdue action with age, severity and owner"
                - "Close already-resolved actions with their evidence"
                - "Re-own the rest with dates agreed with each owner"
                - "Report the backlog count to the project manager @recurring(weekly:fri)"
            - name: Independent design verification or peer check
              description: |-
                ## Purpose
                Some designs need a fresh pair of eyes from outside the team: a novel structure, a high-consequence pressure system, a regulator's requirement or a client's insistence. Deciding early which items need independent verification, and by whom, avoids a late scramble for a third-party reviewer when the schedule has no room left.

                ## Milestones
                1. Items needing independent verification identified from contract, regulation, novelty and consequence.
                2. The level of independence defined for each, from another team in the firm to an external body.
                3. Verifiers named or a procurement route agreed.
                4. Verification dates fixed in the engineering schedule.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A list of items needing independent verification is agreed with the client, each with a named verifier or procurement route and a scheduled date."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Check the contract and regulations for independent verification requirements"
                - "List novel or high-consequence design items"
                - "Agree the independence level for each item with the client"
                - "Fix verification dates in the engineering schedule"
            - name: 30 percent design review
              description: |-
                ## Purpose
                At 30 percent the layout, process configuration and main equipment are set, and this is the last cheap moment to move things. A well-prepared 30 percent review confirms the design basis is being met, tests the layout with operations and construction and settles the questions that would otherwise reopen at 60 percent.

                ## Milestones
                1. Entry criteria checked and the package confirmed ready two weeks before the meeting.
                2. Reviewers briefed and given access to the package and design basis.
                3. The review held with operations, maintenance and construction present.
                4. All comments logged with severity and owner within three working days.

                ## Notes
                Start from the **Meeting notes** template for the minutes. Focus the 30 percent review on layout and configuration, not line numbers and title blocks.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The 30 percent review is held with operations and construction present, and every comment is logged with severity and owner within three working days."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Check the 30 percent package against the entry criteria matrix"
                - "Send the package and design basis to reviewers two weeks ahead"
                - "Hold the review with a timeboxed agenda by plant area"
                - "Log all comments with severity and owner within three days"
            - name: 60 percent 3D model review
              description: |-
                ## Purpose
                By 60 percent the model holds most of the piping, steel and major cable routes, and walking it with operators finds the access and maintenance problems that drawings hide. Preparing viewpoints, area walk routes and the operability checklist in advance makes a two-day model review productive rather than a tour.

                ## Milestones
                1. Model cut-off date fixed and a frozen snapshot published.
                2. Walk routes and saved viewpoints prepared for each area.
                3. The review held with operators and maintainers driving at least part of each area.
                4. Markups exported into the comment log and assigned within one week.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The 60 percent model review covers every plant area on a frozen snapshot, with all markups in the comment log and assigned within a week."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Agree the model cut-off date with the model administrator"
                - "Prepare walk routes and viewpoints for each plant area"
                - "Run the review with operators driving part of each area"
                - "Export markups to the comment log and assign them within a week"
            - name: 90 percent review and issue for construction readiness
              description: |-
                ## Purpose
                The 90 percent review is the last check before drawings go to site, and its question is narrower: is everything closed, consistent and buildable? Confirming that earlier comments are closed, holds are released, vendor data is final and interfaces are matched protects the issue for construction date.

                ## Milestones
                1. All earlier must-fix comments confirmed closed or formally carried forward.
                2. Holds register checked with each open hold assigned a release date.
                3. Final vendor data incorporated and interface drawings matched across disciplines.
                4. A readiness statement for issue for construction signed by each discipline lead.
              priority: high
              deadlineOffsetDays: 200
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The 90 percent review ends with a readiness statement signed by each discipline lead and no unrecorded open must-fix comment."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Run a report of open must-fix comments from the 30 and 60 percent reviews"
                - "Check every open hold against its release condition"
                - "Confirm final vendor data is in each affected drawing"
                - "Collect signed readiness statements from each discipline lead"
            - name: Constructability workshop with the contractor
              description: |-
                ## Purpose
                Bringing the construction contractor or a construction manager into a dedicated workshop around 60 percent tests the design against how it will actually be built: module splits, lifting plans, access roads, tie-in windows and laydown. One focused day can save weeks of site rework and change orders.

                ## Milestones
                1. The contractor's construction manager and lifting specialist confirmed as attendees.
                2. The outline construction sequence and heavy lift list circulated in advance.
                3. The workshop held with comments logged by area.
                4. Design changes agreed in the workshop scheduled into the 90 percent package.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A constructability workshop with the contractor is held before the 90 percent package, and every agreed change has an owner and target revision."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Invite the contractor's construction manager and lifting specialist"
                - "Circulate the outline sequence and heavy lift list a week ahead"
                - "Run the workshop area by area with a scribe logging comments"
                - "Schedule agreed changes into the 90 percent package"
            - name: Operations and maintenance model walk-through
              description: |-
                ## Purpose
                Operations staff are the ones who will live with the design for thirty years, yet they often get one invitation and a crowded room. A separate walk-through, run at their pace, on their shift pattern and focused on their daily tasks, gathers comments that a mixed review never surfaces.

                ## Milestones
                1. Operations and maintenance attendees chosen with their supervisors' agreement.
                2. A walk-through scheduled around their shift pattern.
                3. Daily rounds, sampling, isolation and equipment removal walked in the model.
                4. Their comments logged and the response to each reported back to them.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A dedicated operations walk-through is held, and every comment raised receives a written response sent back to the attendees."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Ask the operations superintendent to nominate attendees"
                - "Schedule the walk-through around the attendees' shifts"
                - "Walk daily rounds, sampling and removal routes in the model"
                - "Send each attendee the response to every comment they raised"
            - name: Design review close-out report
              description: |-
                ## Purpose
                Before drawings go to site, the client and the project's own quality system usually want evidence that every review was held and every comment dealt with. A close-out report that lists the reviews, the comment statistics, carried-forward items and their owners is that evidence, and it is far easier to compile as you go than at the end.

                ## Milestones
                1. A list of every stage review with dates, attendees and packages reviewed.
                2. Comment totals by severity and status for each review.
                3. Carried-forward items listed with owners, reasons and the client's acceptance.
                4. The report reviewed, approved and filed with the issue for construction records.
              priority: high
              deadlineOffsetDays: 240
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An approved close-out report listing every review, comment statistics and accepted carried-forward items is filed before issue for construction."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List every stage review with date, attendees and packages"
                - "Ask the agent to draft the comment statistics section from the log export"
                - "List carried-forward items with owners and client acceptance"
                - "Submit the report for approval and file it with the IFC records"
            - name: First design review as a graduate reviewer
              description: |-
                ## Purpose
                New graduates are often invited to reviews to learn, then sit silently because they are unsure what is worth saying. Preparing properly for one review, with a narrow scope agreed with your mentor, a personal checklist and a few comments you can stand behind, builds confidence and makes the next review count.

                ## Milestones
                1. A narrow review scope agreed with your mentor, such as one system or two drawings.
                2. Your scope reviewed in advance against the relevant specification and checklist.
                3. At least five comments of your own logged with their reasoning.
                4. A debrief with your mentor on which comments landed and why.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "At least five comments of your own are logged in a real review, followed by a recorded debrief with your mentor."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask your mentor for a narrow scope at the next review"
                - "Read the specification sections that apply to your scope"
                - "Log at least five of your own comments with reasons"
                - "Book a thirty-minute debrief with your mentor after the review"
            - name: Owner's engineer review of a contractor's design
              description: |-
                ## Purpose
                As the client's or owner's engineer, you review a design you did not produce and cannot redesign, under a contract that limits what you can demand. Reviewing against the contract requirements, keeping comments within scope and tracking responses to the contractual return period protects the owner without turning every review into a dispute.

                ## Milestones
                1. The contract's review clauses, return periods and approval codes summarised on one page.
                2. Comments framed against contract requirements, with preferences marked as such.
                3. Returns sent within the contractual period for every submission.
                4. Disputed comments escalated through the contract's agreed route.

                ## Notes
                Approval codes can carry contractual weight. Agree with your commercial or legal colleagues what an approved code means before you use it.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every contractor submission receives a coded return within the contract period, with comments tied to contract requirements."
                cadence: rolling
              tasks:
                - "Summarise the contract's review clauses and return periods on one page"
                - "Mark each comment as a requirement or a preference"
                - "Send coded returns for submissions due this week @recurring(weekly:wed)"
                - "Escalate disputed comments through the contract route"
            - name: Design reviews in a small consultancy
              description: |-
                ## Purpose
                Small practices rarely have a second engineer in every discipline, so the usual model of independent discipline reviewers does not fit. A lean approach, with a standing peer review swap with another small firm, a strict checklist and clear records of who checked what, gives clients confidence without a large team.

                ## Milestones
                1. The review stages your typical projects need agreed and written down.
                2. A peer review arrangement with another firm or a trusted independent engineer in place, with confidentiality terms.
                3. A review checklist for your main project type.
                4. A record of who checked what kept on every project file.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A peer review arrangement with confidentiality terms is in place and every project file records who reviewed each deliverable."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write down the review stages your typical projects need"
                - "Approach another small firm about a peer review swap"
                - "Agree confidentiality terms in writing before swapping any work"
                - "Swap one package for peer review with the partner firm @recurring(monthly:28)"
            - name: Brownfield modification design review
              description: |-
                ## Purpose
                Brownfield reviews fail on what is not in the drawings: as-built differences, old tie-in points, live lines next to the work and shutdown windows that cannot move. Building site verification, tie-in lists and shutdown constraints into the review makes sure the design fits the plant that actually exists.

                ## Milestones
                1. Site verification of tie-in points and existing routes done by survey, laser scan or walkdown.
                2. A tie-in list reviewed with operations for isolation and shutdown requirements.
                3. Differences between as-built records and site conditions logged and resolved.
                4. Work that must be done during a shutdown identified and agreed with the plant.

                ## Notes
                Any walkdown on a live plant is done under the site's permit and induction rules, escorted by operations.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A brownfield review is completed with site-verified tie-ins, a tie-in list agreed with operations and logged as-built differences."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Request a site walkdown under the plant's permit and induction rules"
                - "Compare tie-in points on site with the as-built drawings"
                - "Review the tie-in list with operations for isolation needs"
                - "Flag work that needs a shutdown window to the planner"
            - name: Remote design reviews across offices and time zones
              description: |-
                ## Purpose
                Teams split between a home office, a remote engineering centre and the client's site often run reviews on a video call where half the room cannot see the model. Designing the review for remote attendance, with pre-review markups, short sessions within overlapping hours and a shared live log, keeps everyone contributing.

                ## Milestones
                1. Overlapping working hours across offices identified and sessions kept inside them.
                2. Pre-review markup windows opened so distant reviewers comment before the call.
                3. A shared live comment log visible to all attendees during the session.
                4. Remote attendees' comments counted to check they are being heard.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Remote reviews run inside overlapping hours with a pre-review markup window, and remote attendees raise a fair share of comments."
                cadence: rolling
              tasks:
                - "Map overlapping working hours across every attending office"
                - "Open a markup window three days before each remote review"
                - "Share the live comment log on screen during the session"
                - "Count comments by office after each remote review"
            - name: Safety in design review and residual risk record
              description: |-
                ## Purpose
                Safety findings from HAZOP, layout and fire studies have to show up in the design, and design reviews are where that is checked. A safety in design review, which traces each safety study action to the drawing that addresses it and records the residual risks handed to operations, closes the loop between the studies and the drawings.

                ## Milestones
                1. Safety study actions affecting design listed with the drawing or document that resolves each.
                2. Each resolution checked in the current revision by a reviewer independent of the originator.
                3. Residual risks recorded with the controls operations will need.
                4. The residual risk record accepted by the client's safety lead.

                ## Notes
                This project checks that study actions reached the design. Raising and closing the safety study actions themselves belongs to the study owners. Stop-work authority applies on any site visit made for this review.
              priority: high
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Every safety study action affecting the design is traced to a checked drawing, and a residual risk record is accepted by the client's safety lead."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Export safety study actions that require a design change"
                - "Match each action to the drawing or document that resolves it"
                - "Check open safety in design items with the safety lead @recurring(monthly:15)"
                - "Record residual risks and the controls operations will need"
            - name: Audit of the design review process
              description: |-
                ## Purpose
                Across a portfolio of projects, review quality drifts: one team skips the 60 percent review, another closes comments without back-checks. A yearly audit of a sample of projects against the procedure finds the drift, shows which steps are paying for themselves and which should be dropped.

                ## Milestones
                1. A sample of three to five projects chosen across disciplines and sizes.
                2. Each sampled project checked for held reviews, logged comments, back-checks and evidence of closure.
                3. Findings reported with the procedure steps that were skipped or added no value.
                4. Procedure changes agreed with the engineering manager.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A yearly audit of at least three projects is reported, and the agreed procedure changes are recorded."
                cadence: cyclic
                effort_hours_estimate: "16"
              tasks:
                - "Choose three to five projects across disciplines and sizes"
                - "Check each project for held reviews, back-checks and closure evidence"
                - "Ask the agent to summarise the audit findings into a two-page report"
                - "Repeat the audit on a fresh sample of projects @recurring(yearly)"
            - name: Model data quality review before handover
              description: |-
                ## Purpose
                Handover models increasingly become the operator's reference for maintenance, inspection and future modifications, and a model full of placeholder tags and missing attributes is useless to them. Reviewing tag data, attributes and links to documents before handover makes the model an asset rather than a picture.

                ## Milestones
                1. The client's handover data requirements for the model listed.
                2. A sample of tags checked for attributes, document links and correct status.
                3. Data gaps logged by discipline with owners and dates.
                4. A data completeness figure agreed with the client before handover.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A model data quality review checks a sample of tags against the client's handover requirements and reports an agreed completeness figure."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Get the client's handover data requirements for the model"
                - "Check a sample of fifty tags for attributes and document links"
                - "Log data gaps by discipline with owners and dates"
                - "Agree a completeness figure with the client before handover"
            - name: Value engineering review at 60 percent
              description: |-
                ## Purpose
                Value engineering works best once the design is defined enough to cost but before procurement locks it in. A structured review at around 60 percent, which looks for scope, material and layout changes that keep function and safety while cutting cost or schedule, can pay for the whole review programme.

                ## Milestones
                1. Cost and schedule drivers identified from the current estimate.
                2. A list of value engineering ideas with function, cost and safety impact for each.
                3. Each idea screened by the discipline lead and the estimator.
                4. Accepted ideas recorded with their design change route and any safety review required.

                ## Notes
                Any value engineering change that touches a safeguard or a safety study conclusion goes back through the appropriate safety review before it is adopted.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A value engineering review screens every idea for function, cost and safety, and accepted ideas are recorded with their change route."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Ask the estimator for the top ten cost drivers in the current estimate"
                - "Collect value engineering ideas from each discipline"
                - "Screen each idea for function, cost and safety impact"
                - "Record accepted ideas with their design change route"
            - name: Design review competency matrix for the team
              description: |-
                ## Purpose
                Knowing who can lead a P&ID review, who can walk a model, who can chair and who is still learning tells a manager where reviews are thin and who to develop next. A competency matrix for review skills, refreshed yearly, turns reviewer selection from habit into a choice and gives graduates a visible route.

                ## Milestones
                1. Review skills listed, such as P&ID review, layout review, model walk, chairing and back-checking.
                2. Each team member rated against a simple three-level scale.
                3. Thin spots identified where only one person can do a skill.
                4. A development action set for each thin spot.

                ## Notes
                Start from the **Skills matrix** template.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A review competency matrix rates every team member, and each skill held by only one person has a development action."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "List the review skills your team needs"
                - "Rate each team member on a three-level scale"
                - "Mark skills held by only one person and pick a learner for each"
                - "Refresh the matrix with the team's ratings @recurring(yearly)"
---

# Engineering Design Reviews

Design reviews are where a project finds its mistakes while they still cost a pen stroke rather than a site rework, and most of the value is decided before anyone sits down. These projects start with the foundations (a written procedure, stage gates, a reviewer roster, a comment log, the design basis and a clean review package), then build the machinery that keeps comments and actions moving, the skills of reading drawings, writing comments and chairing, the decisions on tools and review depth, the dated 30, 60 and 90 percent reviews, the different seats you may sit in, and the specialist work of safety in design, value engineering and auditing the review process itself.

The repeating rhythm is a weekly comment triage, back-check and clash report, a weekly action chase, monthly metrics, holds and schedule checks, quarterly lessons learned and reviewer calibration, and a yearly audit and competency refresh. The Operational checklist, Metrics log, Meeting notes, Purchase decision, Remediation plan and Skills matrix templates pair with the projects that need them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
