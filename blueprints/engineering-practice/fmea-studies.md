---
id: engineering-practice.fmea-studies
name: FMEA Studies
description: "Design, process and machinery FMEAs run properly: scope and structure, function trees, failure chains, calibrated ratings, Action Priority, and actions tracked to verified closure with named owners."
category: business
version: 1.0.0
tags: [engineering-practice, fmea-studies, engineer, dfmea, pfmea, aiag-vda, action-priority, control-plan]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - meeting-notes
    - operational-checklist
    - remediation-plan
    - course
  pillars:
    - name: Engineering Practice
      emoji: "🔧"
      description: "The day-to-day work of practising engineers: each major discipline, process safety and risk studies, FEED, design reviews, commissioning, reliability and maintenance, CAD, simulation and PLC work, project delivery, tenders, reports, ethics and standards, and the Caribbean energy sector from Point Lisas to LNG."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: FMEA Studies
          description: "Running a failure mode and effects analysis on a design or process: functions, failure modes, severity, occurrence and detection, and tracking actions to closure."
          projects:
            - name: Choosing the FMEA method and handbook to follow
              description: |-
                ## Purpose
                Teams often argue over ratings because half of them learned the old RPN approach and the rest learned the AIAG-VDA seven steps with Action Priority. Settling which reference you follow, whether that is the AIAG-VDA FMEA Handbook, IEC 60812, SAE J1739 or a customer's own manual, removes that argument before the first workshop. Customer requirements often decide it for you, so read the supplier quality manual first.

                ## Milestones
                1. Every customer or regulator requirement that names an FMEA method listed, with its source document.
                2. One governing method chosen for design FMEA and one for process FMEA, with any customer-specific exceptions noted.
                3. The decision and its reasons written on one page and approved by the quality or engineering manager.
                4. The current edition of each chosen reference held where the team can open it.

                ## Notes
                If your customers include an automotive OEM, check its customer-specific requirements before choosing. Some still accept legacy RPN FMEAs for carry-over parts and require the AIAG-VDA approach only for new programmes.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-page approved decision naming the FMEA reference and edition for design and process work, with customer exceptions listed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Search your customer quality manuals for any clause that names an FMEA method"
                - "List which FMEA references your company already owns and their editions"
                - "Draft the one-page method decision with reasons and exceptions"
                - "Get the decision signed off by the quality or engineering manager"
                - "Check for new editions of the FMEA references you follow @recurring(yearly)"
            - name: Scope and boundary for the first FMEA study
              description: |-
                ## Purpose
                An FMEA without a boundary grows until it covers the whole product and finishes nothing. Agreeing the intent, timing, team, task and tools (the five Ts in the AIAG-VDA planning step) for one study, and drawing exactly where the analysis starts and stops, gives a study that can be finished in weeks rather than drifting for a year.

                ## Milestones
                1. A written scope naming the design, subsystem or process steps included and those explicitly excluded.
                2. Interfaces at the boundary listed, with a note of which FMEA owns each one.
                3. A target completion date set against the programme gate it supports.
                4. The scope agreed with the programme manager and the customer contact where one is required.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed scope page for one FMEA listing inclusions, exclusions, boundary interfaces and a completion date tied to a programme gate."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write one sentence stating what decision this FMEA must support"
                - "List the parts or process steps inside the boundary and those outside"
                - "Mark each boundary interface with the FMEA that will cover it"
                - "Set the completion date against the next design or launch gate"
            - name: Cross-functional FMEA team charter
              description: |-
                ## Purpose
                A design engineer working alone produces an FMEA that misses every failure the plant, the test lab and the field already know about. A short charter naming the core team (design, manufacturing, quality, test and service), the facilitator and the time each person commits gets the right people in the room and makes absences visible.

                ## Milestones
                1. Core team members named by role, with at least one person who has seen the product fail in service or production.
                2. A facilitator named who is not the design owner.
                3. Hours per week committed by each member, agreed with their line manager.
                4. Workshop dates for the first four sessions in everyone's calendar.

                ## Notes
                Two-hour sessions work better than full days. Concentration on ratings drops sharply after about three hours.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A charter naming at least five core roles, a separate facilitator and committed hours, with four workshop dates booked."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the roles that hold knowledge of how this design or process fails"
                - "Ask each line manager to release the named person for agreed hours"
                - "Choose a facilitator who does not own the design"
                - "Book the first four two-hour workshop sessions"
            - name: Structure tree and boundary diagram
              description: |-
                ## Purpose
                Structure analysis breaks the item into system, subsystem and component levels, or for a process into the line, the station and the work elements such as operator, machine and material. Drawing the boundary diagram and structure tree before anyone talks about failures stops the team mixing levels, which is the commonest reason FMEA rows read as nonsense later.

                ## Milestones
                1. A boundary diagram showing the item, its neighbours and every physical, energy, material and data interface.
                2. A structure tree three levels deep, with every element taken from the current drawing or process flow.
                3. Each element linked to a drawing number, part number or process step reference.
                4. The tree reviewed by the design or process owner and frozen as the basis for function analysis.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A boundary diagram and a three-level structure tree with every element traceable to a drawing or process step, approved by the owner."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pull the current assembly drawing or process flow for the item in scope"
                - "Sketch the boundary diagram with every interface type labelled"
                - "Build the structure tree at system, subsystem and component level"
                - "Walk the tree through with the design or process owner and freeze it"
            - name: Function tree and requirements list
              description: |-
                ## Purpose
                Failure modes are only meaningful as the loss or degradation of a function, so a vague function such as "works correctly" guarantees vague failures. Writing each function as a verb and a measurable noun, with its requirement attached, gives the team something precise to break in the next step.

                ## Milestones
                1. Every element in the structure tree given at least one function written as a verb plus a measurable requirement.
                2. Requirements traced to the specification, drawing tolerance or customer document they come from.
                3. Functions linked upward so each component function supports a named subsystem function.
                4. Missing or untestable requirements listed and sent to the design owner.

                ## Notes
                Write "seal coolant at 2 bar for 10,000 thermal cycles", not "seals". If you cannot find the number, that gap is itself a finding.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A function tree in which every element has a measurable function traced to a source requirement, with gaps reported to the design owner."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Gather the specification and drawing notes that hold the requirements"
                - "Write each element's function as a verb with a measurable requirement"
                - "Link component functions to the subsystem functions they serve"
                - "Send the list of missing or untestable requirements to the design owner"
            - name: Severity, occurrence and detection tables calibrated for your product
              description: |-
                ## Purpose
                Generic rating tables leave the team guessing whether a rattle is a 4 or a 6, and every guess changes the Action Priority. Adding two or three real examples from your own product to each rating row, and agreeing what counts as a severity 9 or 10 safety or regulatory effect, makes ratings repeatable between teams and between years.

                ## Milestones
                1. Severity, occurrence and detection tables taken from the chosen handbook as the base.
                2. Each row given at least two worked examples from your own product or process history.
                3. A written rule for when an effect counts as safety or regulatory, signed off by the product safety owner.
                4. The calibrated tables issued as a controlled document with a revision number.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Controlled severity, occurrence and detection tables with at least two company examples per row and an approved safety rule."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Copy the base rating tables from the chosen FMEA handbook"
                - "Pull ten real failures from warranty or scrap records to use as examples"
                - "Place each example against a rating row with the team's agreement"
                - "Issue the tables through document control with a revision number"
            - name: FMEA software or spreadsheet decision
              description: |-
                ## Purpose
                Spreadsheet FMEAs are quick to start but cannot link a process FMEA to its control plan or reuse a failure chain across twenty part numbers. Comparing a controlled spreadsheet template with two dedicated FMEA tools against your volume, customer formats and budget settles the question before your files multiply.

                ## Milestones
                1. Requirements listed: number of active FMEAs, users, customer export formats, control plan linkage and reuse.
                2. A controlled spreadsheet option and two dedicated tools scored against the same criteria.
                3. Licence, training and migration cost estimated for each option.
                4. A recommendation approved, with an owner for set-up.

                ## Notes
                Start from the **Purchase decision** template. Ask each vendor to export a sample in your customer's required format before you decide.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three options scored against the same written criteria with costs, and an approved recommendation with a named set-up owner."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Count your active FMEAs, users and the customers that require a format"
                - "Write the five criteria that matter most for your FMEA work"
                - "Request a demonstration and a sample export from two tool vendors"
                - "Score the three options and take the recommendation for approval"
            - name: Critical read of an inherited FMEA
              description: |-
                ## Purpose
                Most engineers meet FMEA by inheriting one that someone else wrote years ago. Reading it against a short checklist (functions measurable, failure chains logical, ratings justified, actions closed with evidence) shows quickly whether it can be updated or needs rebuilding, and teaches more about good FMEA than a course.

                ## Milestones
                1. The inherited FMEA scored against a ten-point quality checklist.
                2. Twenty rows sampled for logical failure chains and justified ratings.
                3. Open and overdue actions counted, with their original owners identified.
                4. A recommendation to update, restructure or rebuild, discussed with the FMEA owner.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written assessment of one inherited FMEA covering twenty sampled rows, open actions and an update or rebuild recommendation."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Find the latest released revision of the FMEA you inherited"
                - "Write a ten-point quality checklist from the chosen handbook"
                - "Sample twenty rows and mark each against the checklist"
                - "Count open actions and note who raised each one"
            - name: Process flow diagram ready for a PFMEA
              description: |-
                ## Purpose
                Process FMEAs can only be as complete as the process flow it is built on, and many flows leave out rework loops, inspection steps and material handling. Walking the line with the current flow diagram and correcting it before the PFMEA starts means every step, including the ones nobody drew, gets analysed.

                ## Milestones
                1. The current process flow diagram walked against the real line, step by step.
                2. Rework loops, inspection points, storage and transport steps added where missing.
                3. Each step numbered so the PFMEA, control plan and work instructions can share references.
                4. The corrected flow released through document control.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A released process flow diagram, verified on the line, with numbered steps including rework, inspection and handling."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Print the current process flow diagram and take it onto the line"
                - "Mark every step you see that the diagram leaves out"
                - "Number each step in a way the control plan can reuse"
                - "Release the corrected diagram through document control"
            - name: FMEA action register with named owners
              description: |-
                ## Purpose
                High Action Priority rows with no owner and no date are the most common FMEA audit finding, and the most common reason a known failure reaches a customer. One register across all your FMEAs, chased every week, turns recommended actions into finished work with evidence attached.

                ## Milestones
                1. Every open recommended action from current FMEAs in one register with owner, due date and status.
                2. Each action linked back to its FMEA row and Action Priority.
                3. Overdue actions chased weekly and escalated after two missed dates.
                4. Closed actions carrying evidence and re-rated occurrence or detection values.

                ## Notes
                An action is not closed when the change is made. It is closed when the evidence shows it worked and the row has been re-rated.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A single action register with no high-priority action lacking an owner and date, and a monthly closure rate reported."
                cadence: rolling
              tasks:
                - "Export every open action from current FMEAs into one register"
                - "Add the owner, due date and Action Priority to each action"
                - "Chase owners of overdue FMEA actions @recurring(weekly:tue)"
                - "Report the action closure rate to the quality manager @recurring(monthly:3)"
            - name: Monthly cross-functional FMEA review meeting
              description: |-
                ## Purpose
                FMEAs go stale between workshops unless something forces the team back together. A one-hour monthly review, with a fixed agenda of new failures, changes, open high-priority actions and re-ratings, keeps every live FMEA current at a cost of twelve hours a year per person.

                ## Milestones
                1. A standing monthly hour booked with design, manufacturing, quality and test representatives.
                2. A fixed agenda: new field or plant failures, engineering changes, open high actions, re-ratings.
                3. Minutes kept for each meeting with decisions and new actions recorded.
                4. Attendance tracked, with repeated absences raised with line managers.

                ## Notes
                Start from the **Meeting notes** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve monthly FMEA review meetings held in a year with minutes, attendance and new actions recorded for each."
                cadence: rolling
              tasks:
                - "Book a standing monthly hour with the core FMEA roles"
                - "Write the fixed four-item agenda and share it with invitees"
                - "Run the FMEA review and record decisions and actions @recurring(monthly:12)"
            - name: Field and warranty data fed into design FMEAs
              description: |-
                ## Purpose
                The occurrence ratings in a design FMEA are guesses until real field returns arrive, and then they are often never revisited. Reviewing warranty claims and returned-part analysis each month, and matching them against existing failure modes, shows which ratings were optimistic and which failures were never on the sheet at all.

                ## Milestones
                1. A monthly extract of warranty claims and returned-part findings for products with a live DFMEA.
                2. Each field failure matched to an existing failure mode or logged as a new one.
                3. Occurrence ratings revised where field data contradicts them, with the data referenced.
                4. New failure modes taken to the next FMEA review with a proposed rating.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly field data reviewed against every live DFMEA, with unmatched failures logged and contradicted ratings revised."
                cadence: rolling
              tasks:
                - "Ask the service or warranty team for a monthly claims extract"
                - "Match last month's field failures to DFMEA rows @recurring(monthly:20)"
                - "Log any field failure with no matching row as a new failure mode"
                - "Propose revised occurrence ratings with the data that supports them"
            - name: Plant scrap and rework data fed into process FMEAs
              description: |-
                ## Purpose
                Scrap tags and rework logs record the process failures that are actually happening, yet process FMEAs are rarely compared with them. A monthly Pareto of the top scrap and rework causes, set beside the PFMEA, shows whether the worst real problems carry occurrence ratings that match.

                ## Milestones
                1. A monthly Pareto of scrap and rework by cause for each line with a live PFMEA.
                2. The top five causes found in the PFMEA, or added as new failure causes.
                3. Occurrence ratings for those causes compared with the real defect rate.
                4. Mismatches raised at the monthly FMEA review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly scrap and rework Pareto compared with each live PFMEA, with the top five causes present and rated against real rates."
                cadence: rolling
              tasks:
                - "Find where scrap and rework are recorded for each line"
                - "Build the scrap and rework Pareto and compare it with the PFMEA @recurring(monthly:8)"
                - "Add any top-five cause missing from the PFMEA"
                - "Raise ratings that disagree with real defect rates at the review"
            - name: Engineering change screening for FMEA updates
              description: |-
                ## Purpose
                Any design or process change that never reaches the FMEA leaves the analysis describing a product that no longer exists. Screening each week's engineering change notices with a short checklist (does this change a function, a structure element, a control or a rating) catches the changes that need an FMEA update before they are released.

                ## Milestones
                1. A one-page screening checklist for FMEA impact agreed with the change board.
                2. Every engineering change notice screened, with the result recorded on the notice.
                3. FMEA updates for impacted changes completed before the change is released.
                4. A quarterly count of changes screened and FMEAs updated.

                ## Notes
                Start from the **Operational checklist** template. The change approval process itself belongs to management of change; this project only makes sure the FMEA follows it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every engineering change notice in a quarter screened for FMEA impact, with impacted FMEAs updated before release."
                cadence: rolling
              tasks:
                - "Draft the four-question FMEA impact checklist"
                - "Agree with the change board where the screening result is recorded"
                - "Screen this week's engineering change notices for FMEA impact @recurring(weekly:thu)"
                - "Update the affected FMEA rows before each impacted change is released"
            - name: PFMEA, control plan and work instruction alignment
              description: |-
                ## Purpose
                Three documents must agree: the process FMEA promises detection and prevention controls, the control plan is supposed to list them, and the work instruction is where the operator meets them. When they drift apart, a control that lowered a rating no longer exists on the floor. A quarterly cross-check of the three for each line keeps the promise true.

                ## Milestones
                1. For one line, every PFMEA control traced to a control plan characteristic and a work instruction step.
                2. Controls missing from the control plan or the work instruction listed.
                3. Gaps fixed or the PFMEA ratings raised to reflect the real controls.
                4. The cross-check repeated each quarter, line by line.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For each line, a quarterly trace showing every PFMEA control present in the control plan and work instructions, or the rating corrected."
                cadence: rolling
              tasks:
                - "Pick the line with the most recent customer complaint to check first"
                - "Trace each PFMEA control to the control plan and work instruction"
                - "List every control that exists on paper but not on the floor"
                - "Run the PFMEA to control plan cross-check for the next line @recurring(quarterly)"
            - name: Failure mode and cause library for reuse
              description: |-
                ## Purpose
                The same failure causes (wrong torque, missing part, contamination, fatigue at a weld toe) appear across many products, and each team rewrites them slightly differently. A curated library of proven failure chains with their best prevention and detection controls lets new FMEAs start from experience and makes cross-product searches possible.

                ## Milestones
                1. Fifty common failure chains extracted from existing FMEAs and written in a standard form.
                2. Each chain tagged by technology, process type and the controls that proved effective.
                3. The library held in the FMEA tool or a controlled file that teams can search.
                4. New lessons from field and plant failures added each quarter.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A searchable library of at least fifty tagged failure chains with proven controls, updated each quarter."
                cadence: rolling
              tasks:
                - "Pull the twenty most repeated failure causes from existing FMEAs"
                - "Rewrite each as a standard effect, mode and cause chain"
                - "Tag each chain with technology and the controls that worked"
                - "Add the quarter's new field and plant lessons to the library @recurring(quarterly)"
            - name: FMEA portfolio status register
              description: |-
                ## Purpose
                Quality managers and auditors ask the same questions: how many FMEAs are live, which are out of date, and where are the high-priority actions. A one-line-per-FMEA register with revision, last review date, owner and open high actions answers them in minutes and shows which studies are drifting.

                ## Milestones
                1. Every live DFMEA, PFMEA and machinery FMEA listed with owner, revision and last review date.
                2. Open high-priority actions counted per FMEA.
                3. FMEAs not reviewed in the last twelve months flagged.
                4. The register refreshed monthly and shared with the quality manager.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A register covering every live FMEA, refreshed monthly, with stale studies and open high actions visible."
                cadence: rolling
              tasks:
                - "List every live FMEA with its owner and revision"
                - "Add the last review date and the count of open high actions"
                - "Refresh the FMEA portfolio register and flag stale studies @recurring(monthly:27)"
            - name: Detection control effectiveness checks
              description: |-
                ## Purpose
                Detection ratings assume the test or inspection actually catches the failure, but gauges drift, test limits get widened and visual checks miss defects. Checking a sample of the controls that earned low detection ratings each quarter, through gauge studies, seeded defect trials or test coverage reviews, keeps the ratings honest.

                ## Milestones
                1. The ten detection controls carrying the most rating credit identified.
                2. Each one checked by gauge study, seeded defect trial or test coverage review.
                3. Detection ratings raised where the check shows the control is weaker than claimed.
                4. A quarterly rotation set so every major control is checked within two years.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Ten key detection controls verified with recorded evidence, ratings corrected where needed, and a two-year rotation in place."
                cadence: rolling
              tasks:
                - "List the detection controls that carry the lowest detection ratings"
                - "Choose a check method for each, such as a seeded defect trial"
                - "Verify the next three detection controls in the rotation @recurring(quarterly)"
                - "Raise the detection rating for any control that failed its check"
            - name: Yearly review of rating tables and Action Priority use
              description: |-
                ## Purpose
                Rating tables written once drift as products, processes and customer expectations change, and nobody notices until two teams rate the same failure differently. A yearly review, comparing ratings across FMEAs and reading the year's audit findings, keeps the tables fit for purpose.

                ## Milestones
                1. Ratings for the same failure cause compared across at least three FMEAs.
                2. The year's audit findings and customer comments on FMEA ratings collected.
                3. Revisions to the tables or examples agreed and issued.
                4. Teams briefed on what changed and why.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A yearly review record showing cross-FMEA rating comparison, audit inputs and any revised tables issued."
                cadence: cyclic
              tasks:
                - "Pick three failure causes that appear in several FMEAs"
                - "Compare how each FMEA rated them and note the differences"
                - "Review rating tables against the year's audit findings @recurring(yearly)"
                - "Brief FMEA owners on any revised table or example"
            - name: The AIAG-VDA seven-step method in practice
              description: |-
                ## Purpose
                The seven steps (planning and preparation, structure, function, failure, risk analysis, optimisation and results documentation) are easy to recite and hard to apply in order. Working one small item through all seven steps on paper, with a mentor checking each step, builds the habit of finishing one step before starting the next.

                ## Milestones
                1. One small item, such as a bracket or a single process station, chosen for practice.
                2. All seven steps completed on paper with each output kept.
                3. A mentor's review of each step's output recorded.
                4. Three mistakes you made written down with the correction.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A complete seven-step practice FMEA on one small item, reviewed by a mentor, with three corrected mistakes recorded."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Read the seven-step chapter of the AIAG-VDA handbook end to end"
                - "Choose one small part or process station to practise on"
                - "Complete steps one to four and ask your mentor to review them"
                - "Complete steps five to seven and record the mentor's corrections"
            - name: Writing clean failure chains
              description: |-
                ## Purpose
                A good FMEA row reads as a chain: this cause, at this element, leads to this failure mode, which produces this effect one level up. Most poor rows mix levels, list an effect as a mode or write a cause nobody could prevent. Practising the chain on twenty real examples until it is automatic makes every later workshop faster.

                ## Milestones
                1. The focus element rule understood: effect one level up, mode at the element, cause one level down.
                2. Twenty rows from an existing FMEA rewritten as clean chains.
                3. Each rewritten cause phrased so a prevention control could act on it.
                4. Your rewrites checked by an experienced facilitator.

                ## Notes
                "Operator error" is not a cause. Ask what made the error possible: no fixture, ambiguous instruction, similar parts in adjacent bins.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Twenty FMEA rows rewritten as clean effect, mode and cause chains and checked by an experienced facilitator."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Pick twenty rows from an existing FMEA that read awkwardly"
                - "Rewrite each row as cause, mode and effect at the right levels"
                - "Replace every vague cause such as operator error with a specific one"
                - "Ask an experienced facilitator to check your rewrites"
            - name: Action Priority compared with RPN
              description: |-
                ## Purpose
                RPN multiplies three ordinal ratings, so a severity 10 with low occurrence can score below a nuisance with poor detection. Action Priority looks up the combination and weights severity first. Re-rating twenty rows both ways shows exactly where the two disagree and why many customers now ask for AP.

                ## Milestones
                1. The AP lookup table and its severity-first logic understood.
                2. Twenty rows rated with both RPN and Action Priority side by side.
                3. Rows where the two methods disagree marked and explained in a sentence each.
                4. A short note for colleagues on what changes when moving to AP.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A side-by-side table of twenty rows rated by RPN and AP, with every disagreement explained, shared with colleagues."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find the Action Priority table in the handbook you follow"
                - "Rate twenty existing rows with both RPN and Action Priority"
                - "Mark the rows where the two methods would act differently"
                - "Write a one-page note for colleagues explaining the differences"
            - name: Facilitating an FMEA workshop
              description: |-
                ## Purpose
                Facilitation decides whether an FMEA workshop produces twenty sharp rows or two hundred vague ones. Learning to keep the team on one step at a time, stop rating debates within two minutes and get the quiet test technician to speak is a skill you build by co-facilitating, then leading with feedback.

                ## Milestones
                1. Two workshops observed or co-facilitated alongside an experienced facilitator.
                2. A facilitation plan written for your own session: agenda, rules, timebox per step.
                3. One workshop led, with feedback from the experienced facilitator recorded.
                4. Three things to change next time noted and applied in a second session.

                ## Notes
                Agree a parking lot rule at the start: any rating argument longer than two minutes goes to a named person to resolve with data.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One FMEA workshop led with written feedback from an experienced facilitator, and changes applied in a second session."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask an experienced facilitator if you can co-facilitate their next session"
                - "Write a timeboxed facilitation plan for your own workshop"
                - "Lead the workshop and ask for written feedback afterwards"
                - "Apply three changes from the feedback in your next session"
            - name: P-diagram and noise factors for design FMEA
              description: |-
                ## Purpose
                A parameter diagram sets out the inputs, intended outputs, control factors, error states and the noise factors that make a design fail in the real world: piece-to-piece variation, wear, customer use, environment and interaction with neighbours. Building one for a single function feeds the DFMEA with causes the team would otherwise miss.

                ## Milestones
                1. One key function chosen and its P-diagram drawn.
                2. Noise factors listed under the five standard headings with real examples.
                3. Each noise factor turned into at least one candidate failure cause.
                4. The new causes taken into the DFMEA and the verification plan.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A P-diagram for one key function with noise factors under five headings, each feeding at least one DFMEA cause."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Choose the function whose failure would hurt the customer most"
                - "Draw the P-diagram with inputs, outputs and control factors"
                - "List noise factors under the five standard headings"
                - "Add each noise factor as a candidate cause in the DFMEA"
            - name: Prevention controls versus detection controls
              description: |-
                ## Purpose
                Teams habitually answer every risk with another inspection, because detection controls are easier to add than design or process changes. Learning to tell a prevention control (it stops the cause or lowers its occurrence) from a detection control (it finds the failure after it happens), and why the handbooks favour prevention, changes the actions you recommend.

                ## Milestones
                1. The difference between prevention and detection controls written in your own words with two examples each.
                2. Thirty controls in an existing FMEA classified correctly, with misfiled ones moved.
                3. The occurrence and detection ratings re-checked for every moved control.
                4. A one-page guide for your team on choosing prevention first.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Thirty FMEA controls correctly classified with ratings re-checked, and a one-page prevention-first guide issued to the team."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write two examples each of prevention and detection controls from your product"
                - "Classify thirty controls in a current FMEA"
                - "Move misfiled controls and re-check their ratings"
                - "Draft the one-page prevention-first guide for the team"
            - name: Interface matrix for a system FMEA
              description: |-
                ## Purpose
                System-level failures usually happen between components rather than inside them: heat from one part softening another, a connector seeing vibration nobody specified. An interface matrix rating every pair of elements for physical, energy, material and data interaction shows where to look before the failure analysis starts.

                ## Milestones
                1. A matrix listing every subsystem against every other, with interaction type marked.
                2. Each interaction rated as necessary, harmful or neutral.
                3. Harmful interactions turned into failure modes or causes in the system FMEA.
                4. Interfaces owned by another team's FMEA noted and sent to that owner.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A completed interface matrix with every harmful interaction carried into a system FMEA or handed to the owning team."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the subsystems from the system structure tree"
                - "Mark each pair for physical, energy, material and data interaction"
                - "Rate each interaction as necessary, harmful or neutral"
                - "Carry harmful interactions into the system FMEA as failure causes"
            - name: Special characteristics flowed from the FMEA
              description: |-
                ## Purpose
                Special characteristics are the dimensions, materials and process parameters whose variation can cause a safety, regulatory or major function effect, and the FMEA is where they should be identified. Deriving them from the high-severity rows, marking them with the customer's symbols on drawings and carrying them into the control plan closes the loop that auditors check first.

                ## Milestones
                1. Every FMEA row with a severity 9 or 10 effect, or a major function effect, traced to the characteristic that controls it.
                2. A special characteristics list agreed with design, manufacturing and the customer where required.
                3. Each characteristic marked on the drawing with the customer's symbol and carried into the control plan.
                4. The list held under revision control and checked whenever the FMEA is re-released.

                ## Notes
                Customers use different symbols and names (critical, significant, key). Use theirs on their drawings and keep a cross-reference table for internal use.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A revision-controlled special characteristics list traced to FMEA rows, marked on drawings and present in the control plan."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Filter the DFMEA and PFMEA for severity 9 and 10 rows"
                - "Name the characteristic that controls each high-severity cause"
                - "Check the customer's symbols and naming for special characteristics"
                - "Confirm each characteristic appears on the drawing and in the control plan"
            - name: Cutting an overgrown FMEA down to size
              description: |-
                ## Purpose
                Some FMEAs reach two thousand rows because every cause was copied under every function, and nobody can find the risks that matter. Merging duplicate chains, deleting rows outside the scope and grouping similar causes can halve the sheet while making high-priority items visible again.

                ## Milestones
                1. Row count, duplicate chains and out-of-scope rows measured before any change.
                2. Duplicates merged and out-of-scope rows moved to the FMEA that owns them.
                3. Similar causes grouped under one row with a shared control set.
                4. The slimmer FMEA reviewed by the team and released as a new revision.

                ## Notes
                Never delete a row with an open action or a severity 9 or 10 effect without the team's agreement and a note in the revision history.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A new FMEA revision with at least a third fewer rows, no lost high-severity rows and team approval recorded."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Export the FMEA and count rows, duplicates and out-of-scope items"
                - "Ask the agent to draft a list of near-duplicate failure chains for review"
                - "Merge duplicates and move out-of-scope rows to their owners"
                - "Release the slimmer FMEA after team review"
            - name: Converting legacy RPN FMEAs to Action Priority
              description: |-
                ## Purpose
                When a customer moves to the AIAG-VDA approach, existing RPN FMEAs for running parts often have to be converted at the next major revision. Planning the conversion as a programme, starting with the products that carry the most safety effects, avoids a last-minute scramble before an audit.

                ## Milestones
                1. Every legacy RPN FMEA listed with its product, customer and next revision trigger.
                2. A conversion order set by safety exposure and customer deadline.
                3. The first three FMEAs converted, with AP results compared against old RPN actions.
                4. A conversion schedule for the remainder agreed with the quality manager.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Three legacy FMEAs converted to Action Priority with a comparison of actions, and an agreed schedule for the rest."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "List every FMEA still rated by RPN with its customer"
                - "Rank them by safety exposure and customer deadline"
                - "Convert the top-ranked FMEA and compare old and new actions"
                - "Agree the conversion schedule for the rest with the quality manager"
            - name: Foundation FMEA for a product family
              description: |-
                ## Purpose
                Writing a fresh FMEA for each variant of a pump, valve or connector family repeats the same work and lets the variants drift apart. A foundation FMEA holding the common structure, functions and failure chains, from which each variant FMEA is derived, cuts preparation time and carries every lesson to every variant.

                ## Milestones
                1. The common structure and functions shared by the family identified.
                2. A foundation FMEA built and reviewed by owners of at least two variants.
                3. Variant FMEAs derived from it with only the differences analysed afresh.
                4. A rule agreed that lessons go into the foundation first, then flow to variants.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A reviewed foundation FMEA for one product family with at least two variant FMEAs derived from it."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "List the variants in the family and the parts they share"
                - "Build the foundation FMEA from the common structure and functions"
                - "Derive the first variant FMEA, analysing only the differences"
                - "Push the year's lessons from variants back into the foundation @recurring(yearly)"
            - name: Error-proofing actions for high-priority process causes
              description: |-
                ## Purpose
                For high Action Priority process causes, an extra inspection is the weakest answer. A fixture that only accepts the correct part, a sensor that stops the press when a component is missing or a torque tool that will not release until the value is reached removes the cause instead. Working through the top causes looking for error-proofing first gives the PFMEA real occurrence reductions.

                ## Milestones
                1. The ten highest-priority PFMEA causes listed with their current controls.
                2. An error-proofing option proposed for each, ranked from elimination to detection.
                3. At least three devices installed and their function verified with deliberate wrong parts.
                4. Occurrence or detection re-rated for the verified devices.

                ## Notes
                Error-proofing devices need their own daily or shift check, or they quietly get bypassed. Put the check in the control plan.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Three error-proofing devices installed, verified with deliberate wrong parts, and their PFMEA rows re-rated."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "List the ten highest-priority causes from the PFMEA"
                - "Propose an error-proofing option for each cause"
                - "Verify each installed device with a deliberately wrong part"
                - "Confirm error-proofing device checks are being signed @recurring(monthly:17)"
            - name: Design change or added detection for a severity 9 or 10 effect
              description: |-
                ## Purpose
                When a failure can hurt someone or break a regulation, the handbooks expect the severity itself to be designed out where possible, not merely detected more often. Framing the choice formally (redesign, add redundancy, add detection, accept with justification) and recording who decided gives a defensible answer when a customer or regulator asks.

                ## Milestones
                1. Every row with severity 9 or 10 listed with its current controls.
                2. For each, the options set out: eliminate, reduce severity by design, add detection, or accept.
                3. Cost, schedule and residual risk recorded for each option.
                4. A decision made by the accountable engineering authority, with reasons, and fed back to the FMEA.

                ## Notes
                Detection controls never lower severity. If the effect stays at 9 or 10, the decision needs a named signatory, not a team consensus.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision for every severity 9 or 10 row, signed by the accountable engineering authority, with options and reasons."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Filter the FMEA for every effect rated severity 9 or 10"
                - "Set out the redesign, redundancy, detection and accept options for each"
                - "Estimate cost, schedule and residual risk for every option"
                - "Take the options to the accountable engineering authority for a decision"
            - name: Moving FMEAs from spreadsheets into a database tool
              description: |-
                ## Purpose
                Once a decision is made to use a dedicated FMEA tool, dozens of spreadsheets have to move without losing revision history or open actions. A planned migration, piloted on one FMEA and checked row by row, avoids the classic failure of a clean new system with half the actions missing.

                ## Milestones
                1. A migration list of every spreadsheet FMEA with owner and open action count.
                2. One pilot FMEA migrated and checked row by row against the original.
                3. Mapping rules for structure, functions, ratings and actions written from the pilot.
                4. All remaining FMEAs migrated with open actions reconciled and the spreadsheets locked read-only.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "All spreadsheet FMEAs migrated with open action counts reconciled and the original files locked read-only."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "List every spreadsheet FMEA with its owner and open action count"
                - "Migrate one pilot FMEA and compare it row by row with the original"
                - "Write the mapping rules the pilot taught you"
                - "Lock each migrated spreadsheet as read-only"
            - name: Design verification plan linked to the DFMEA
              description: |-
                ## Purpose
                Detection ratings in a design FMEA usually rest on a test that has not been run yet. Linking each detection control to a line in the design verification plan and report, with test method, sample size and acceptance criteria, makes sure every claimed test is actually scheduled and its result comes back to the FMEA.

                ## Milestones
                1. Every DFMEA detection control mapped to a line in the verification plan.
                2. Tests with no plan line added, with method, sample size and acceptance criteria.
                3. Results recorded against each line as tests finish.
                4. Detection ratings revised where a test was dropped or failed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A verification plan in which every DFMEA detection control has a test line with results recorded and ratings revised to match."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Export the detection controls from the current DFMEA"
                - "Match each one to a line in the design verification plan"
                - "Add a plan line for every unmatched test"
                - "Bring finished test results back into the DFMEA @recurring(monthly:23)"
            - name: DFMEA ready for a design release gate
              description: |-
                ## Purpose
                Most programmes require a design FMEA to be complete, with high-priority actions closed or justified, before drawings are released for tooling. Working backwards from the gate date, with the open actions and verification results as the critical path, gets you to the review with evidence rather than promises.

                ## Milestones
                1. The gate date and the FMEA evidence the gate expects confirmed with the programme manager.
                2. Every high-priority action closed with evidence or carrying a signed justification.
                3. Verification results for key detection controls attached.
                4. The DFMEA released at a new revision and presented at the gate.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A released DFMEA presented at the design gate with no high-priority action lacking evidence or a signed justification."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Confirm with the programme manager what the gate expects from the DFMEA"
                - "List open high-priority actions with their owners and due dates"
                - "Book a final DFMEA review two weeks before the gate"
                - "Release the DFMEA revision and prepare the gate summary"
            - name: PFMEA and control plan for production launch
              description: |-
                ## Purpose
                Before the production part approval submission and the first customer shipment, a new process needs its PFMEA, control plan and process flow complete and consistent with each other. Planning them as one package with a fixed date, and running the PFMEA on the actual pre-production line, catches the problems trial runs reveal before they become customer complaints.

                ## Milestones
                1. The customer's launch submission requirements for PFMEA and control plan confirmed.
                2. The PFMEA reviewed against the pre-production trial results.
                3. The control plan updated to carry every PFMEA control with reaction plans.
                4. The PFMEA, control plan and process flow submitted together and approved.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "PFMEA, control plan and process flow submitted as one consistent package and approved by the customer before first shipment."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Read the customer's launch submission requirements for PFMEA and control plan"
                - "Collect the defects from the pre-production trial runs"
                - "Review the PFMEA against every trial defect"
                - "Check the control plan carries every PFMEA control with a reaction plan"
            - name: Customer or certification audit of FMEA records
              description: |-
                ## Purpose
                Quality system audits, such as those under IATF 16949 or a customer's process audit, sample FMEAs and look for the same weaknesses: stale reviews, untraceable ratings, open high actions and no link to the control plan. Preparing a short evidence pack for the FMEAs most likely to be sampled turns the audit into a walk-through rather than a hunt.

                ## Milestones
                1. The audit scope and the products or lines likely to be sampled confirmed.
                2. For each likely FMEA, last review date, open high actions and control plan link checked.
                3. Gaps fixed or a remediation plan with dates in place before the audit.
                4. Findings from the audit recorded and closed with evidence.

                ## Notes
                Start from the **Remediation plan** template for any findings raised.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An evidence pack for every FMEA in audit scope ready before the audit, and all FMEA findings closed with evidence afterwards."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Ask the audit lead which products and lines are in scope"
                - "Check last review date and open high actions for each likely FMEA"
                - "Fix gaps or write a dated remediation plan before the audit"
                - "Record and close each FMEA finding with evidence"
            - name: Machinery FMEA for a new production line
              description: |-
                ## Purpose
                New lines and major machines bring their own failure modes: a servo fault that stops the line, a guard interlock that can be defeated, a coolant leak that damages product. Running a machinery FMEA with the equipment builder before factory acceptance puts those failures on the table while changes are still cheap.

                ## Milestones
                1. The machine's structure and functions agreed with the builder, from the design documents.
                2. A machinery FMEA completed jointly, covering availability, product quality and operator safety effects.
                3. Actions for the builder written into the purchase order or acceptance criteria.
                4. The FMEA handed to maintenance as an input to the preventive maintenance plan.

                ## Notes
                Safety of machinery has its own risk assessment duties under the relevant machinery standards; the FMEA supports that assessment but does not replace it.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: artifact
                success_criteria: "A joint machinery FMEA completed before factory acceptance, with builder actions written into the acceptance criteria."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "Ask the equipment builder for the machine layout and control descriptions"
                - "Book two joint FMEA sessions before the factory acceptance date"
                - "Write builder actions into the acceptance criteria"
                - "Hand the finished FMEA to the maintenance planner"
            - name: Supplier FMEA review during qualification
              description: |-
                ## Purpose
                Purchased components put their failures straight into your product, yet many supplier FMEAs are thin templates. Reviewing a new supplier's DFMEA or PFMEA against your own requirements during qualification, and asking specific questions about their top causes, shows how well they really understand the part.

                ## Milestones
                1. The supplier's FMEA requested for the part being qualified.
                2. Their FMEA checked against your interface requirements and severity rules.
                3. Questions on their top five causes and controls answered in writing.
                4. Required improvements agreed and tracked to closure before approval.

                ## Notes
                Some suppliers will only show FMEAs on screen to protect their know-how. Agree that in advance and take your own notes.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A written review of one supplier FMEA with answers on their top five causes and agreed improvements closed before part approval."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Request the supplier's FMEA for the part under qualification"
                - "Check it against your interface requirements and severity rules"
                - "Send written questions on their top five causes and controls"
                - "Review key suppliers' FMEAs for the year's changes @recurring(yearly)"
            - name: First FMEA as a new quality engineer
              description: |-
                ## Purpose
                New quality engineers are often handed FMEA ownership in their first month with no training and a launch date already set. A deliberate first ninety days, sitting in on two workshops, learning the rating tables and taking over one FMEA with a mentor, gets you competent before you have to defend a rating to a customer.

                ## Milestones
                1. The company FMEA procedure, rating tables and method decision read and questions noted.
                2. Two workshops attended as a participant, with notes on how ratings were decided.
                3. One FMEA taken over with a mentor reviewing your first update.
                4. Your first FMEA review meeting run independently.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Within ninety days, two workshops attended, one FMEA updated under mentor review and one review meeting run independently."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Read the company FMEA procedure and the rating tables"
                - "Ask to join the next two FMEA workshops as a participant"
                - "Agree with your manager which FMEA you will take over"
                - "Ask an experienced engineer to review your first FMEA update"
            - name: FMEA in a small manufacturer without a quality team
              description: |-
                ## Purpose
                Twenty-person machine shops and fabricators may need FMEAs for one demanding customer but have no quality department and no FMEA software. A lean approach, one controlled spreadsheet, a two-person team of owner and lead hand, and focus on the customer's critical characteristics, meets the requirement without burying the business in paperwork.

                ## Milestones
                1. The customer's FMEA requirement and the critical characteristics identified.
                2. A simple controlled spreadsheet template set up from the chosen handbook.
                3. A PFMEA completed for the customer's part, focused on critical characteristics.
                4. A monthly half-hour slot for reviewing scrap and open actions.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A PFMEA for the customer's part covering every critical characteristic, kept in a controlled template and reviewed monthly."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Mark the critical characteristics on the customer's drawing"
                - "Set up one controlled spreadsheet from the handbook layout"
                - "Walk the process with the lead hand and fill in the PFMEA"
                - "Spend half an hour on scrap and open FMEA actions @recurring(monthly:5)"
            - name: Process FMEA for a laboratory or service operation
              description: |-
                ## Purpose
                FMEA works on non-manufacturing processes too: sample handling in a test laboratory, calibration recall, or the steps for releasing a drawing for construction. The failure modes are wrong label, missed step and late result rather than cracked welds, but the method is the same and often finds risks nobody had written down.

                ## Milestones
                1. The service process mapped step by step with the people who do the work.
                2. Failure modes written for each step, including handovers between people.
                3. Severity rated by effect on the customer or the result, using adapted examples.
                4. Top actions agreed with the process owner and tracked in the action register.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A process FMEA for one service or laboratory process with adapted ratings and top actions owned by the process owner."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Choose one service or laboratory process with known errors"
                - "Map the steps with the people who do the work"
                - "Adapt the severity examples to effects on results or customers"
                - "Agree the top actions with the process owner"
            - name: Facilitating FMEAs as a contract specialist
              description: |-
                ## Purpose
                Experienced facilitators are hired by suppliers and start-ups that need an FMEA for a launch but lack the skill in-house. Working this way needs a clear offer, a set-up pack the client completes before day one and a handover that leaves the client owning the FMEA rather than depending on you.

                ## Milestones
                1. A written service offer covering scope, number of sessions, deliverables and what the client provides.
                2. A pre-workshop pack: drawings, process flow, requirements and team list requested from the client.
                3. One client FMEA facilitated and handed over with a named internal owner.
                4. A follow-up three months later to check the FMEA is still being updated.

                ## Notes
                Agree in writing that the client owns the FMEA content and its technical decisions; you own the method. Check your professional indemnity cover before taking safety-critical work.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "One client FMEA delivered under a written offer, handed to a named internal owner, with a three-month follow-up recorded."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Write a one-page FMEA facilitation offer with deliverables"
                - "Build the pre-workshop pack request list for clients"
                - "Hand over the finished FMEA to a named client owner"
                - "Follow up with past FMEA clients on their updates @recurring(quarterly)"
            - name: Taking over as FMEA lead for a programme
              description: |-
                ## Purpose
                Stepping up from FMEA participant to programme FMEA lead means owning a set of system, design and process FMEAs at once, and the linkages between them. A first month spent mapping how the effects at component level flow into the system FMEA, and where the gaps are, sets your priorities for the whole programme.

                ## Milestones
                1. Every FMEA in the programme listed with its owner, level and status.
                2. The linkage between system, design and process FMEAs mapped, with broken links listed.
                3. A weekly fifteen-minute check-in with FMEA owners set up.
                4. A programme FMEA plan presented to the programme manager.

                ## Notes
                Start from the **Meeting notes** template for the weekly check-ins.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A programme FMEA plan with linkage map, owner list and a running weekly check-in, presented to the programme manager."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List every FMEA in the programme with owner and level"
                - "Map how component effects feed the system FMEA and note broken links"
                - "Hold the fifteen-minute FMEA owners check-in @recurring(weekly:mon)"
                - "Present the programme FMEA plan to the programme manager"
            - name: Reverse FMEA on the shop floor
              description: |-
                ## Purpose
                Reverse FMEA starts at the workstation rather than the desk: the team stands at each operation and tries to make the failure happen, checking whether the PFMEA predicted it and whether the control would catch it. It regularly finds causes that were never written down and controls that no longer exist.

                ## Milestones
                1. One line chosen and its PFMEA printed for the walk.
                2. Each station walked by a small team trying to produce the listed failures and new ones.
                3. New causes and missing controls added to the PFMEA with actions.
                4. A monthly rotation through stations scheduled.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "One line fully walked by reverse FMEA with new causes and missing controls added, and a monthly station rotation running."
                cadence: rolling
              tasks:
                - "Print the PFMEA for the chosen line"
                - "Walk two stations and try to produce each listed failure"
                - "Add new causes and missing controls to the PFMEA with owners"
                - "Run a reverse FMEA walk at the next station @recurring(monthly:15)"
            - name: Supplementary FMEA for monitoring and system response
              description: |-
                ## Purpose
                Where a product has on-board diagnostics, the AIAG-VDA FMEA-MSR looks at what happens during customer operation when a fault occurs: is it detected, how fast, and does the system move to a safe state. It matters for mechatronic and electronic products where the response of the system decides whether a fault becomes harmful.

                ## Milestones
                1. Functions with diagnostic monitoring identified from the system FMEA.
                2. For each, the fault detection time and the system response to a safe or degraded state documented.
                3. Monitoring and frequency ratings applied using the handbook tables.
                4. Gaps in diagnostics or response raised as design actions.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "An FMEA-MSR for every diagnosed function with detection times, system responses and design actions for gaps."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Read the FMEA-MSR chapter of the AIAG-VDA handbook"
                - "List functions with on-board diagnostics from the system FMEA"
                - "Document detection time and system response for each function"
                - "Raise design actions where the response is slow or unsafe"
            - name: Software FMEA for embedded control code
              description: |-
                ## Purpose
                Software does not wear out, but it fails through wrong requirements, unhandled inputs, timing faults and corrupted data. A software FMEA applied to the architecture and interfaces of embedded control code, rather than line by line, finds the conditions where a valid-looking input drives the product into an unsafe or useless state.

                ## Milestones
                1. The software architecture and its interfaces taken as the structure for analysis.
                2. Failure modes written per interface: missing, wrong, late, early, corrupted or out-of-range data.
                3. Effects traced to the system level with the hardware FMEA owner.
                4. Actions raised as requirements, defensive code or test cases.

                ## Notes
                Keep the analysis at component and interface level. Line-by-line software FMEAs become unmanageable and duplicate code review.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A software FMEA covering every interface of one embedded component, with actions issued as requirements or test cases."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Get the current software architecture diagram from the lead developer"
                - "List the data each interface sends and receives"
                - "Apply missing, wrong, late, early and corrupted failure modes to each"
                - "Turn the top actions into requirements or test cases"
            - name: FMEDA for a functional safety hardware design
              description: |-
                ## Purpose
                Under IEC 61508 and ISO 26262, a failure modes, effects and diagnostic analysis splits each component's failure rate into safe, dangerous detected and dangerous undetected fractions to show the hardware meets its target. The integrity target itself comes from the hazard and LOPA work; this project is about producing the hardware evidence that answers it.

                ## Milestones
                1. The safety function and its integrity target taken from the safety requirements specification.
                2. Component failure rates sourced from a named reliability database with its edition recorded.
                3. Each component's failure modes classified as safe or dangerous, detected or undetected.
                4. Diagnostic coverage and safe failure fraction calculated and checked by an independent assessor.

                ## Notes
                Ask the functional safety manager which failure rate source the project has agreed. Mixing databases inside one FMEDA undermines the result.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A completed FMEDA for one safety function with sourced failure rates, calculated diagnostic coverage and an independent check recorded."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Get the safety requirements specification for the function"
                - "Confirm the agreed failure rate database with the functional safety manager"
                - "Classify each component failure mode as safe or dangerous, detected or undetected"
                - "Ask the agent to summarise the FMEDA results into a one-page assessor brief"
            - name: FMECA with criticality analysis for defence or aerospace work
              description: |-
                ## Purpose
                Defence and aerospace customers often call for a failure modes, effects and criticality analysis in the style of MIL-STD-1629A, which ranks failure modes by severity class and a criticality number built from failure rates. The format, worksheets and deliverable list differ enough from automotive FMEA that a first study needs planning from the contract data requirement.

                ## Milestones
                1. The contract data requirement for the FMECA read and its format and level of analysis noted.
                2. Severity classes and failure rate sources agreed with the customer.
                3. Criticality numbers or a criticality matrix produced for the required indenture levels.
                4. The FMECA report delivered and customer comments closed.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "An FMECA delivered to the contract data requirement with agreed severity classes, a criticality ranking and customer comments closed."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Read the contract data requirement that calls for the FMECA"
                - "Agree severity classes and failure rate sources with the customer"
                - "Build the criticality matrix for the required indenture levels"
                - "Log and close each customer comment on the FMECA report"
            - name: In-house FMEA course for engineers
              description: |-
                ## Purpose
                Once you can facilitate well, the fastest way to raise FMEA quality across a site is to teach it using your own product's examples rather than generic slides. A two-day course with a real worked case, the company rating tables and a short assessment gives engineers a common language and gives you facilitators for the next workshop.

                ## Milestones
                1. Learning outcomes and a two-day outline agreed with the engineering manager.
                2. A worked case built from a real company part or process, with an answer key.
                3. The first cohort trained and assessed on a short written exercise.
                4. Feedback collected and the course revised before the second cohort.

                ## Notes
                Start from the **Course** template.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A two-day FMEA course delivered to one cohort with a company worked case, an assessment and a revision based on feedback."
                cadence: phased
                effort_hours_estimate: "50"
              tasks:
                - "Write five learning outcomes for the course"
                - "Build a worked case from a real company part or process"
                - "Run the first cohort and assess each participant"
                - "Revise the course using participant feedback"
---

# FMEA Studies

FMEA Studies is for engineers who prepare, facilitate or take part in failure mode and effects analysis on a product design, a manufacturing process or a machine, and who want the worksheet to change the design rather than sit in a folder. It runs from foundations (choosing the method and rating scales, scoping, the team, structure and function analysis), through the operating machinery of action registers, review meetings and living updates from field and scrap data, into core skills such as failure chains and Action Priority, improvement work on bloated or legacy FMEAs, dated gates and audits, different working situations, and finally specialist variants such as software FMEA, FMEDA and FMECA.

The rhythm is weekly for chasing overdue actions and screening engineering changes, monthly for the cross-functional review meeting, field and scrap data and the portfolio status, quarterly for control plan alignment, detection checks and the failure mode library, and yearly for the rating scales and supplier reviews. The Purchase decision, Meeting notes, Operational checklist, Remediation plan and Course templates pair with the projects that need them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
