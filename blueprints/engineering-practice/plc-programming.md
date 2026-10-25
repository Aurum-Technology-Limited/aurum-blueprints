---
id: engineering-practice.plc-programming
name: PLC Programming
description: "PLC programs you can trust: a known master copy of every controller, written programming standards, IO lists, version control, simulation before site, safe online edits and clean go-lives."
category: business
version: 1.0.0
tags: [engineering-practice, plc-programming, engineer, plc, ladder-logic, structured-text, iec-61131-3, industrial-automation]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - operational-checklist
    - risk-register
    - onboarding-30-60-90
    - development-plan
  pillars:
    - name: Engineering Practice
      emoji: "🔧"
      description: "The day-to-day work of practising engineers: each major discipline, process safety and risk studies, FEED, design reviews, commissioning, reliability and maintenance, CAD, simulation and PLC work, project delivery, tenders, reports, ethics and standards, and the Caribbean energy sector from Point Lisas to LNG."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: PLC Programming
          description: "Programming PLCs for machines and plants: ladder logic and structured text, input and output lists, sequence logic, simulation, version control and testing before going live."
          projects:
            - name: PLC and firmware inventory for the site
              description: |-
                ## Purpose
                Before anyone can say which program is running where, someone has to list every controller on site with its make, model, firmware revision, programming software version and network address. Plants routinely discover a forgotten controller in a packaging line panel only when it fails, and the firmware revision decides which software version can even go online with it.

                ## Milestones
                1. A register of every PLC, safety controller and remote IO adapter on site, with location, panel number and the machine it runs.
                2. Firmware revision and catalogue number recorded for each controller, read from the device rather than an old drawing.
                3. The programming software and version needed to go online with each controller noted beside it.
                4. Controllers on obsolete or vendor-retired platforms flagged for a later migration decision.

                ## Notes
                Read firmware revisions from the controller properties online or the module label, not the original design documents, which are often two revisions out of date.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A site PLC register lists every controller with model, firmware, software version, location and machine, checked against a panel walk-down."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Start a register with columns for panel, controller, firmware, software and machine"
                - "Walk every control panel on one area and record each controller you find"
                - "Read firmware revisions online from each controller and update the register"
                - "Flag controllers on platforms the vendor has retired"
                - "Refresh the PLC register against a panel walk-down @recurring(yearly)"
            - name: Trusted master copy of every running program
              description: |-
                ## Purpose
                On most older sites the file on the shared drive is not what is running in the controller, because someone made an online edit years ago and never saved it back. Uploading each running program, comparing it with the stored copy and declaring one master per controller ends the guesswork the first time a breakdown needs a quick fix.

                ## Milestones
                1. A fresh upload taken from every controller in the register, stored with the date and the name of the person who took it.
                2. Each upload compared with the existing offline file, and every difference listed.
                3. Differences explained or accepted, and one master copy per controller declared.
                4. Master copies stored in one controlled location with read access for maintenance.

                ## Notes
                Uploading is normally safe while running, but agree it with operations first and never accept a download prompt during the session. Uploads may lose comments and descriptions that only exist in the offline file, so merge rather than overwrite.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every controller in the register has one declared master copy, dated, with a written list of differences found against the old offline file."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Agree with operations a time to upload programs from running controllers"
                - "Upload the program from the most critical controller and store it with the date"
                - "Run the software compare tool between the upload and the old offline file"
                - "Write down every difference and who might know why it exists"
                - "Declare the master copy for each controller in the register"
            - name: Written PLC programming standard
              description: |-
                ## Purpose
                Three programmers on one site will produce three styles of code unless a standard says otherwise, and the electrician fault-finding at night pays for every inconsistency. A short written standard covering tag names, program structure, comments, fault handling and the IEC 61131-3 languages allowed for which job gives every new routine the same shape.

                ## Milestones
                1. Rules for tag and routine naming, including prefixes for inputs, outputs, internal bits and faults.
                2. A standard program structure: which routines exist, what order they are called in, and where interlocks live.
                3. Rules for which language is used where, such as ladder for discrete logic and structured text for calculations.
                4. Commenting and revision header rules, with one worked example routine attached.
                5. The standard reviewed by maintenance and at least one other programmer, then issued.

                ## Notes
                Keep it under fifteen pages. A standard nobody reads is worse than a one-page example routine everyone copies. If a client or parent company already has one, adopt it and write only the site additions.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An issued programming standard with naming, structure, language and comment rules plus an example routine, reviewed by maintenance and a second programmer."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Collect any existing client, vendor or company PLC standards that apply"
                - "Write the tag and routine naming rules with five worked examples"
                - "Draw the standard program structure and routine call order"
                - "Send the draft to a maintenance electrician and another programmer for comment"
                - "Review the programming standard against lessons from the year @recurring(yearly)"
            - name: Machine IO list as the single source
              description: |-
                ## Purpose
                Disagreement between the IO list, the electrical drawings and the PLC tag database lets wiring errors survive until commissioning and cost days. Making one IO list the master for a machine, with every point's address, tag, description, signal type, fail state and drawing reference, lets the program and the drawings be checked against the same table.

                ## Milestones
                1. One IO list per machine holding rack, slot, channel, tag, description, signal type and drawing sheet for every point.
                2. Fail-safe state and normal state recorded for each digital point, such as normally closed stop circuits.
                3. Analogue points carrying engineering units and range.
                4. Spare channels per card listed so later additions do not need a new card.
                5. The PLC tag database exported and reconciled against the list with zero unexplained differences.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A machine IO list reconciled point for point against both the PLC tag export and the electrical drawings, with no open differences."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Export the PLC tag database for one machine to a spreadsheet"
                - "Pull the IO module sheets from the current electrical drawings"
                - "Build the IO list with address, tag, signal type, fail state and sheet"
                - "Mark every mismatch between drawings, tags and list and resolve each one"
            - name: Functional specification for a machine sequence
              description: |-
                ## Purpose
                Code written straight from a conversation with the process engineer encodes whatever each person assumed, and nobody finds out until the first test run. A functional specification that names every state, the conditions to move between them, each fault and what the machine does on a stop or a power loss gives you something to test the program against.

                ## Milestones
                1. Operating modes listed, such as auto, manual, maintenance and their entry conditions.
                2. Each sequence step written with its actions, its transition condition and its timeout.
                3. Every fault listed with its cause, the machine's response and how it is reset.
                4. Behaviour on emergency stop, power loss and restart stated plainly.
                5. The specification signed by the process owner before coding starts.

                ## Notes
                Write restart behaviour first. Whether a sequence resumes at its step or returns home after a power cut is the question most often left unanswered, and the riskiest to guess.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed functional specification lists every mode, step, transition, timeout, fault and restart behaviour for one machine before any code is written."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Interview the operator and process engineer about how the machine should run"
                - "Ask the agent to turn your interview notes into a draft table of steps and transitions"
                - "Write the fault table with cause, response and reset for each fault"
                - "Get the process owner to sign the specification before coding"
            - name: Programming laptop and software environment
              description: |-
                ## Purpose
                Any site with controllers from four vendors and ten years of firmware needs several programming software versions, and installing them side by side on one laptop is how licences break the night before a shutdown. Separate virtual machines per platform, licences recorded, and the right cables and adapters in the bag mean you can go online with any controller in the register.

                ## Milestones
                1. One virtual machine image per vendor platform, each holding the software versions the register calls for.
                2. Licences recorded with their activation method, expiry and where they are held.
                3. Cables, USB serial adapters and network adapters checked against every controller type.
                4. A test connection made to one controller of each platform from the laptop.

                ## Notes
                Start from the **Purchase decision** template if the laptop itself needs replacing. Keep a known-good snapshot of each virtual machine before any software update.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The programming laptop has gone online successfully with one controller of every platform on site, with licences and VM images recorded."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List the software versions the PLC register says you need"
                - "Build or update one virtual machine per vendor platform"
                - "Record each licence, its expiry and how it is activated"
                - "Go online with one controller of each platform as a test"
            - name: Version control for PLC projects
              description: |-
                ## Purpose
                File names like Line3_final_v2_JB_new tell you nothing about what changed or why. Putting every PLC project into version control, either a general tool such as Git with exported text files or a vendor automation change management server, gives each change an author, a date and a reason, and lets you compare any two versions in minutes.

                ## Milestones
                1. A version control tool chosen and installed, with backups of the repository itself.
                2. Every master copy committed as the first version with a clear message.
                3. A rule written for commit messages, naming the change request or work order.
                4. Read access for maintenance and write access for named programmers only.
                5. One real change taken through the full commit, compare and restore cycle as a test.

                ## Notes
                Binary project files can be stored but not compared line by line in a general tool. Exporting to the vendor's text or XML format alongside the binary makes reviews far easier.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All master copies sit in a backed-up version control repository with access rules, and one change has been committed, compared and restored as a test."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Compare a general version control tool with the vendor's change management server"
                - "Commit every master copy as version one with the upload date"
                - "Write the commit message rule and pin it in the repository"
                - "Restore an old version to a test folder to prove recovery works"
            - name: Simulation bench for testing logic offline
              description: |-
                ## Purpose
                Testing new logic on a running machine puts people and product at risk, and testing it by reading it twice catches only the obvious errors. A simulation bench, using the vendor's emulator or a spare controller on a desk with a test rack, lets you run sequences, force inputs and break things without anything moving.

                ## Milestones
                1. An emulator licence or spare controller set up for each main platform on site.
                2. A small test rack or simulated IO able to exercise digital and analogue inputs.
                3. A simple input simulation routine that mimics sensors responding to outputs.
                4. One existing machine program run on the bench through a full cycle.

                ## Notes
                Emulators do not reproduce every timing or hardware fault. Treat a bench test as necessary but not sufficient, and still plan the site test.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A working simulation bench has run one real machine program through a full cycle with simulated inputs, on each main platform."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Check whether your software licence includes the vendor emulator"
                - "Set up a spare controller or emulator on a desk with a test rack"
                - "Write a routine that switches simulated sensors when outputs energise"
                - "Run one existing machine program through a full cycle on the bench"
            - name: Rules for online edits on running machines
              description: |-
                ## Purpose
                An online edit changes logic in a controller that may be moving a conveyor, a press or a pump, and a wrong rung can start equipment with someone's hands inside. Written rules for when online edits are allowed, who must be told, which changes need a permit or management of change, and how to back out give every programmer the same line not to cross.

                ## Milestones
                1. Categories of change defined, from comment edits to logic that can move equipment.
                2. For each category, who must approve, whether operations must be present and whether management of change applies.
                3. A pre-edit checklist: master copy current, upload taken, operator informed, area clear.
                4. A rule that any edit touching safety functions follows the safety PLC process instead.
                5. The rules agreed with operations and maintenance leads and posted with the programming laptops.

                ## Notes
                Anyone can stop an online edit if the machine or the people around it are not as expected. Write stop-work authority into the rules in plain words.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Signed online edit rules define change categories, approvals, a pre-edit checklist and stop-work authority, agreed with operations and maintenance."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the last ten online edits and what each one could have moved"
                - "Draft change categories with approvals and permit needs for each"
                - "Write the pre-edit checklist on a single page"
                - "Agree the rules with the operations and maintenance leads"
            - name: Monthly running program comparison
              description: |-
                ## Purpose
                Unrecorded changes creep in through breakdown fixes, contractor visits and forgotten tests. Comparing the running program in each critical controller with its master copy every month finds those changes while someone still remembers why they were made.

                ## Milestones
                1. A list of critical controllers to compare monthly, and the rest quarterly.
                2. Each comparison recorded with date, result and any differences found.
                3. Every unexplained difference traced to a person and a reason within the month.
                4. The master copy updated or the change reversed, so the two match again.

                ## Notes
                Some vendor change management tools automate the upload and compare on a schedule. If you have one, the habit becomes reviewing the report rather than running the compare.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive monthly comparisons recorded for every critical controller, with each difference explained and the master brought back into line."
                cadence: rolling
              tasks:
                - "Mark the critical controllers in the register for monthly comparison"
                - "Compare running programs on critical controllers with their masters @recurring(monthly:9)"
                - "Trace each unexplained difference to the person who made it"
                - "Update the master or reverse the change once the reason is known"
            - name: PLC change log and weekly review
              description: |-
                ## Purpose
                Whenever a machine starts behaving differently, the first question is what changed, and a change log answers it in seconds. Logging every download and online edit with the controller, routine, reason, approver and result, and reading the week's entries every Friday, keeps the log complete and the master copies current.

                ## Milestones
                1. A change log with controller, routine, date, author, reason, approver and test result for each change.
                2. Every change since the log started linked to a version control commit.
                3. A Friday review where missing entries are chased and closed.
                4. A quarterly count of changes by machine, showing where logic keeps being touched.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every download and online edit for a quarter appears in the change log with a reason, approver, test result and matching commit."
                cadence: rolling
              tasks:
                - "Set up the change log with the columns your rules require"
                - "Read the week's change log entries and chase any gaps @recurring(weekly:fri)"
                - "Link each log entry to its version control commit"
                - "Count changes by machine at the end of the quarter"
            - name: Controller health and diagnostic check
              description: |-
                ## Purpose
                Controllers usually warn before they fail: a low battery flag, a growing scan time, minor faults stacking up in the diagnostic buffer or memory close to full. A monthly look at each critical controller's status pages catches these while a planned fix is still possible.

                ## Milestones
                1. A short health checklist per platform: fault log, scan time, memory use, battery and module status.
                2. A baseline recorded for each critical controller's scan time and memory use.
                3. Monthly readings kept so a trend is visible.
                4. Memory backup batteries replaced on schedule, with the date written inside the panel.

                ## Notes
                On controllers that keep the program in battery-backed memory, a dead battery during a power cut can erase the program. Know which of yours do.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly health readings for every critical controller over six months, with batteries replaced on schedule and every fault log entry reviewed."
                cadence: rolling
              tasks:
                - "Write a one-page health checklist for each controller platform"
                - "Record baseline scan time and memory use for each critical controller"
                - "Check fault logs, scan times and module status on critical controllers @recurring(monthly:16)"
                - "Replace controller memory backup batteries due this year @recurring(yearly)"
            - name: Forced IO register and Monday check
              description: |-
                ## Purpose
                A force left on after a breakdown quietly defeats a sensor or holds an output on, and the next person to work on that machine has no idea. Keeping a register of every active force with who applied it and why, and checking each controller for forces every Monday, stops temporary fixes becoming permanent hazards.

                ## Milestones
                1. A forces register with controller, address, value, person, reason, date and planned removal date.
                2. A rule that no force is applied without an entry and, where equipment can move, a permit.
                3. Every controller checked for forces each Monday and the register reconciled.
                4. No force older than its planned removal date without a recorded extension.

                ## Notes
                Forcing an output can start a motor or open a valve instantly. Treat a force like any other override of protection: area clear, operator informed, and removed as soon as the job is done.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A forces register that matches the controllers on every Monday check for three months, with no undocumented or overdue forces."
                cadence: rolling
              tasks:
                - "Create the forces register and post the rule beside the programming laptops"
                - "Check every controller for active forces and reconcile the register @recurring(weekly:mon)"
                - "Chase the owner of any force past its removal date"
                - "Report the number of active forces at the monthly maintenance meeting"
            - name: Spare controllers and modules with matching firmware
              description: |-
                ## Purpose
                Holding a spare CPU on the shelf with the wrong firmware can turn a two-hour swap into a day lost hunting for the right software. Matching spares to the installed base, recording their firmware and checking stock every quarter means a failed module can be replaced by whoever is on shift.

                ## Milestones
                1. A spares list for controllers, communication modules, IO cards and power supplies, matched to the installed base.
                2. Firmware revision recorded for each spare and compared with what is running.
                3. A written swap procedure for each controller type, including loading the program from the master.
                4. Shortfalls on critical items raised as purchase requests.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every critical controller and module type has at least one spare with recorded firmware and a written swap procedure."
                cadence: rolling
              tasks:
                - "List the controller and module part numbers the register says are installed"
                - "Check the stores for spares and record their firmware revisions"
                - "Write the CPU swap procedure for the most common controller type"
                - "Review spare stock and firmware against the installed base @recurring(quarterly)"
            - name: Peer code review before download
              description: |-
                ## Purpose
                Most logic errors are obvious to a second pair of eyes and invisible to the author. A short review checklist used on every change before it goes to a controller, and a monthly sample to check the reviews are real, catches double coils, missing interlocks and broken restarts at a desk instead of on the machine.

                ## Milestones
                1. A one-page review checklist covering interlocks, restart behaviour, fault handling, naming and comments.
                2. A compare report between old and new versions attached to every review.
                3. Reviews recorded in the change log with the reviewer's name.
                4. A monthly sample of three reviews checked for depth, with findings shared.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every change in a quarter has a recorded reviewer and compare report, and three monthly sample audits show the checklist was actually applied."
                cadence: rolling
              tasks:
                - "Write a one-page review checklist from the programming standard"
                - "Attach a compare report to the next change before asking for review"
                - "Audit three recent code reviews for depth @recurring(monthly:23)"
                - "Share the common review findings with the programming team"
            - name: Firmware and vulnerability advisory watch
              description: |-
                ## Purpose
                PLC vendors publish firmware fixes and security advisories that can affect your controllers, and nobody reads them unless it is someone's job. A quarterly pass over the advisories for each platform in the register, with a decision recorded for each one, means you update for a reason rather than by accident.

                ## Milestones
                1. Advisory and release note sources listed for every vendor in the register.
                2. Each new advisory checked against installed models and firmware.
                3. A decision recorded per relevant advisory: update, mitigate or accept, with the reason.
                4. Firmware updates planned into shutdowns, with the new revision tested on the bench first.

                ## Notes
                Never update firmware on a running controller as a routine task. Plan it like any other change, with the program backed up and a tested rollback.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly advisory reviews recorded, each listing relevant advisories with an update, mitigate or accept decision and reason."
                cadence: rolling
              tasks:
                - "Subscribe to the advisory and release note pages for each PLC vendor"
                - "Check new firmware advisories against the PLC register @recurring(quarterly)"
                - "Record an update, mitigate or accept decision for each relevant advisory"
                - "Test any approved firmware update on the simulation bench first"
            - name: Programming toolchain upkeep
              description: |-
                ## Purpose
                Software licences expire, virtual machines drift and a Windows update can break a serial driver. Keeping the programming environment in a known state, with snapshots refreshed each quarter and licences renewed on a yearly date, means the laptop works on the night it is needed.

                ## Milestones
                1. A list of every licence with expiry date and renewal owner.
                2. A clean snapshot of each virtual machine taken after each planned update.
                3. A second programming laptop or image that can go online if the first fails.
                4. Renewals raised a month before expiry, with no lapsed licences in the year.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No programming licence lapses in a year, and each virtual machine has a dated snapshot no more than three months old."
                cadence: rolling
              tasks:
                - "Copy every licence expiry date into your calendar a month early"
                - "Update and snapshot each programming virtual machine @recurring(quarterly)"
                - "Renew the programming software licences and support contracts @recurring(yearly)"
                - "Prepare a second laptop image that can go online in an emergency"
            - name: Fault call-out log and monthly review
              description: |-
                ## Purpose
                Programmers are called out for the same few faults again and again, and each call-out is fixed in isolation. Logging every call-out where the PLC was used to diagnose a stop, with the fault, cause and fix, then reviewing the month's log shows which diagnostics, messages or logic changes would let operators clear it themselves.

                ## Milestones
                1. A call-out log with date, machine, symptom, how the PLC was used, root cause and fix.
                2. The month's entries grouped by machine and cause.
                3. The top three repeat faults each given an improvement, such as a clearer fault message or a better first-out.
                4. Call-outs for the top repeat fault falling after the improvement.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A call-out log kept for six months with monthly reviews, and at least two repeat faults reduced after logic or diagnostic changes."
                cadence: rolling
              tasks:
                - "Create a call-out log and keep it on the programming laptop desktop"
                - "Log every PLC-related call-out within a day of the job"
                - "Group the month's call-outs and pick the top three repeats @recurring(monthly:27)"
                - "Agree one diagnostic improvement for the worst repeat fault"
            - name: Documenting legacy logic one routine a week
              description: |-
                ## Purpose
                Uncommented legacy code is a liability that grows each time someone works around it. Spending one hour a week reading a single routine, adding rung comments and tag descriptions, and committing the result turns an unreadable program into a documented one within a year without a dedicated project budget.

                ## Milestones
                1. A list of undocumented routines, ordered by how often they cause call-outs.
                2. One routine documented and committed every week.
                3. Comments added offline and loaded only during a planned download or merged without changing logic.
                4. The most critical machine's program fully commented.

                ## Notes
                Comment changes on some platforms still need a download. Add them offline and load them when another planned change goes in, rather than making a download for comments alone.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least forty routines documented and committed in a year, including every routine in the most critical machine's program."
                cadence: rolling
              tasks:
                - "List the undocumented routines in order of call-out frequency"
                - "Ask the agent to summarise what one exported routine does as a first draft of comments"
                - "Document and commit one legacy routine @recurring(weekly:wed)"
                - "Check the comments with an electrician who knows the machine"
            - name: Ladder logic fundamentals and the scan cycle
              description: |-
                ## Purpose
                Many bugs in ladder come from not picturing the scan: an output written twice, a latch that survives a power cycle, a one-shot that fires every scan. Learning how the controller reads inputs, solves rungs top to bottom and writes outputs, then practising the classic patterns on the bench, removes a whole class of errors.

                ## Milestones
                1. The scan cycle explained in your own words, including when inputs are read and outputs written on your platform.
                2. Seal-in circuits and set and reset latches written and tested, with their power-loss behaviour noted.
                3. Rising and falling edge detection used correctly in three bench exercises.
                4. A double coil error created deliberately on the bench and its effect observed.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five bench exercises covering seal-in, latches, edge detection, double coils and retentive memory completed and saved with notes."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Read the scan cycle section of your platform's programming manual"
                - "Write a start and stop seal-in circuit and test it on the bench"
                - "Compare set and reset latches with seal-in across a power cycle"
                - "Write up what each exercise taught you in a short note"
            - name: Structured text for calculations and data
              description: |-
                ## Purpose
                Ladder is clear for interlocks and awkward for loops, arrays and arithmetic, and programmers who avoid structured text end up with pages of compute blocks nobody can follow. Learning IEC 61131-3 structured text for calculations, data handling and string work, and knowing when not to use it, makes those routines shorter and easier to test.

                ## Milestones
                1. IF, CASE, FOR and WHILE statements used correctly in bench exercises.
                2. An array of records processed in a loop, with the scan time impact measured.
                3. A calculation routine rewritten from ladder compute blocks into structured text and tested against the original.
                4. A short note on which jobs belong in structured text on your site and which stay in ladder.

                ## Notes
                Unbounded WHILE loops can trip the controller's watchdog and stop the machine. Always give loops a fixed upper limit.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One production calculation routine rewritten in structured text, tested to give identical results, with a written note on language choice."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Work through the structured text chapter of the IEC 61131-3 guide for your platform"
                - "Write a loop over an array of records on the bench and measure scan time"
                - "Rewrite one ladder calculation routine in structured text"
                - "Test the new routine against the original with the same inputs"
            - name: Sequence logic with steps and state machines
              description: |-
                ## Purpose
                Machine sequences built from scattered latches are where most hard-to-find faults live: a step skipped, two steps active at once, a sequence that cannot recover after a stop. Learning to build sequences as an explicit state machine, in sequential function chart or as a step number in ladder or structured text, makes every state visible and every transition testable.

                ## Milestones
                1. A sequence written as a numbered state machine with one active step at a time.
                2. The same sequence written in sequential function chart where your platform supports it.
                3. Step timeouts and fault states added, with a defined path back to home.
                4. Stop, pause and restart behaviour tested on the bench against a written specification.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A bench sequence with timeouts, fault states and tested stop and restart behaviour, written as a state machine and reviewed by a second programmer."
                cadence: phased
                effort_hours_estimate: "18"
              tasks:
                - "Draw a five-step sequence on paper with its transitions"
                - "Code the sequence as a step number state machine on the bench"
                - "Add a timeout and fault state to each step"
                - "Test stop, pause and restart from every step"
            - name: Timers, counters and edge cases that bite
              description: |-
                ## Purpose
                Timers that reset when a rung goes false, counters that overflow after months of running and time-of-day logic that fails at a clock change cause faults that appear long after commissioning. Testing each timer and counter type to its limits on the bench shows you exactly how your platform behaves.

                ## Milestones
                1. On-delay, off-delay and retentive timers tested, with their reset behaviour written down.
                2. Counter rollover and integer overflow behaviour tested and noted.
                3. A runtime hours counter written that survives power cycles and does not overflow.
                4. Clock change and controller time synchronisation behaviour checked on your platform.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page note on timer, counter, overflow and clock behaviour for your main platform, backed by saved bench tests."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Test on-delay, off-delay and retentive timers on the bench"
                - "Push a counter and an integer past their limits and note what happens"
                - "Write a runtime hours counter that survives a power cycle"
                - "Summarise timer and counter behaviour on one page"
            - name: Analogue scaling and signal fault handling
              description: |-
                ## Purpose
                Break a 4 to 20 mA wire and the input reads as zero, which a careless program treats as an empty tank or a cold furnace. Scaling analogue inputs consistently, detecting under-range and over-range signals, and choosing what the logic does with a bad value keeps a wiring fault from becoming a process upset.

                ## Milestones
                1. One scaling routine or function block used for every analogue input in a program.
                2. Under-range and over-range detection with a bad quality flag per signal.
                3. A defined response for each critical analogue on bad quality: hold last value, go to a safe state or alarm.
                4. Filtering applied only where needed, with the filter time recorded.

                ## Notes
                What the process should do on a failed signal is a process and safety decision, not a programming one. Agree it with the process engineer and record it in the functional specification.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every analogue input in one program uses a common scaling block with bad quality detection and an agreed, documented failure response."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Find every analogue scaling method used in one existing program"
                - "Write a scaling block with under-range and over-range detection"
                - "Agree the bad signal response for each critical input with the process engineer"
                - "Replace the old scaling in a test copy and check results match"
            - name: Remote IO and drives on industrial Ethernet
              description: |-
                ## Purpose
                Most new machines put their IO, drives and valve islands on PROFINET, EtherNet/IP or Modbus TCP rather than local racks. Learning to configure these devices in the PLC project, read their connection status in logic, and handle a lost connection safely is now a core programming skill rather than a network specialist's job.

                ## Milestones
                1. A remote IO adapter and a drive configured in a bench project from their device description files.
                2. Connection status for each device read in logic and used to raise a clear fault.
                3. The machine's response to losing each device defined and tested by pulling the cable on the bench.
                4. Device names, addresses and description file versions recorded in the IO list.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A bench project with remote IO and a drive configured, connection faults detected in logic and the loss of each device tested and documented."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Download the device description files for one remote IO adapter and one drive"
                - "Configure both devices in a bench project and bring them online"
                - "Write logic that raises a named fault when each connection drops"
                - "Pull each network cable on the bench and record the machine response"
            - name: Fault-finding through someone else's code online
              description: |-
                ## Purpose
                Most PLC work on an operating plant is reading code you did not write, under time pressure, with production waiting. Practising a fixed method, from the stopped output back through cross-references, live values and trends to the input that is missing, makes you fast and stops you editing logic to find a wiring fault.

                ## Milestones
                1. A written fault-finding method: start at the output, cross-reference back, watch live values, find the missing condition.
                2. Cross-reference, find, trend and trace tools used fluently on your main platform.
                3. Three real faults traced to their cause using the method, with notes on each.
                4. A personal rule recorded never to change logic to diagnose a fault.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three real faults diagnosed using a written online fault-finding method, each recorded with the trace from output to cause."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write your output-first fault-finding method on a single card"
                - "Practise cross-reference and trend tools on a bench copy of a real program"
                - "Shadow a senior programmer on the next PLC call-out"
                - "Record the trace for each of your next three fault-finds"
            - name: Reusable function blocks for motors and valves
              description: |-
                ## Purpose
                When every motor on a line is coded by hand, each one behaves a little differently and every fix has to be made forty times. Learning to write IEC 61131-3 function blocks with clear inputs, outputs and internal state, then using one block per device type, makes behaviour consistent and testing a one-time job.

                ## Milestones
                1. The difference between functions, function blocks and their instance data understood and written down.
                2. A motor block with start, stop, interlock, feedback timeout and fault reset written and tested on the bench.
                3. A valve block with open and closed feedback and travel timeout written and tested.
                4. Both blocks documented with an interface table and a test record.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Tested and documented motor and valve function blocks, each with an interface table and a recorded bench test of every input."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Read how your platform handles function block instance data"
                - "Write a motor function block with feedback timeout on the bench"
                - "Write a valve function block with travel timeout"
                - "Document each block's inputs, outputs and tested behaviour"
            - name: Choosing a PLC platform for a new machine
              description: |-
                ## Purpose
                Platform choice outlives the project by twenty years, and picking whatever the integrator prefers can leave the site with a fifth set of spares and software. Scoring candidates against the site's installed base, local support, lifecycle status, IO and network needs, safety options and software cost gives a choice the maintenance team can live with.

                ## Milestones
                1. Requirements written: IO count, networks, safety functions, motion, environment and expected life.
                2. Two or three platforms shortlisted, including the one already most common on site.
                3. Each scored on lifecycle status, local distributor support, spares overlap and software cost.
                4. A decision recorded with reasons and signed by engineering and maintenance.

                ## Notes
                Start from the **Purchase decision** template. Ask the vendor in writing for the planned active life of the controller family before you choose.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A signed platform decision scoring at least two options against lifecycle, support, spares overlap, cost and technical requirements."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write the requirements for the new machine's controller"
                - "Shortlist platforms starting with the most common one on site"
                - "Ask each vendor for lifecycle status and local support in writing"
                - "Score the options and record the decision with maintenance"
            - name: Site device library for motors, valves and drives
              description: |-
                ## Purpose
                Once a few good function blocks exist, the gain comes from making them the only way devices are coded on site. A released, version-controlled library of device blocks, with a change process of its own, means every new machine starts with tested logic and every improvement can be rolled out deliberately.

                ## Milestones
                1. Device blocks for motors, valves, variable speed drives and analogue inputs released as library version one.
                2. Each block carrying a version number, change history and test record.
                3. A rule for how library changes are proposed, tested and released.
                4. One new project built entirely from library blocks.
                5. A plan for whether and when existing machines move to the library.

                ## Notes
                Do not upgrade library blocks inside running machines automatically. A new block version goes into an existing machine only as a planned, tested change.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A released device library with versioned, tested blocks and a written change process, used for at least one new project."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Collect the best existing device blocks from site programs"
                - "Release the first library version with test records"
                - "Write the library change and release process"
                - "Review open library change requests and plan the next release @recurring(quarterly)"
            - name: First-out fault capture in the PLC
              description: |-
                ## Purpose
                When a machine trips on a cascade of faults, the operator sees twenty alarms and the real cause is buried. Capturing the first fault in the PLC with a time stamp, freezing the others as consequences, and passing a single fault code to the operator display cuts diagnosis time on every trip.

                ## Milestones
                1. The faults that can stop each machine listed and numbered.
                2. First-out logic that latches the first fault and its time stamp until reset.
                3. A fault code and short text passed to the HMI team in an agreed data structure.
                4. Tested on the bench by triggering faults in different orders.

                ## Notes
                The PLC side is the fault capture and data structure. Screen design and alarm presentation belong with the HMI and alarm owners, so agree the interface with them first.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One machine reports a time-stamped first-out fault code to the HMI, tested by triggering faults in at least five different orders."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Number every fault that can stop the chosen machine"
                - "Write first-out capture logic with a time stamp"
                - "Agree the fault code data structure with the HMI owner"
                - "Trigger faults in different orders on the bench and check the first-out"
            - name: Task structure and scan time review
              description: |-
                ## Purpose
                Programs that put everything in one continuous task grow until scan time jitters and fast inputs are missed. Reviewing which logic needs a fixed period, which can run slower and which belongs in an event task, then measuring before and after, gives timing you can state rather than hope for.

                ## Milestones
                1. Current scan time, jitter and task configuration measured and recorded.
                2. Logic grouped by the response time it actually needs.
                3. A proposed task structure with periods and priorities, reviewed by a second programmer.
                4. The change tested on the bench and the new scan times recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A measured before and after record of scan time and jitter for one controller, with the new task structure documented and reviewed."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Record current scan time and jitter from the controller diagnostics"
                - "Group the program's routines by required response time"
                - "Propose a periodic and event task structure for review"
                - "Test the new structure on the bench and record scan times"
            - name: Refactoring a legacy program into clear routines
              description: |-
                ## Purpose
                Programs that grew over fifteen years usually have interlocks spread across routines, dead code and jumps nobody dares remove. Restructuring it to the site standard in a planned, tested way, with behaviour proven unchanged on the bench, makes it maintainable without the risk of a rewrite.

                ## Milestones
                1. The current program's behaviour recorded as a test list before any change.
                2. Dead code identified by cross-reference and confirmed unused before removal.
                3. Logic reorganised into the standard routine structure, one routine at a time.
                4. The full test list passed on the bench against the refactored program.
                5. The refactored program loaded at a planned shutdown with a rollback ready.

                ## Notes
                Refactor and change behaviour in separate steps. If the refactored program behaves differently from the old one, you want to know it is a mistake rather than an intended change.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A legacy program restructured to the site standard, passing a recorded behaviour test list on the bench and loaded at a planned shutdown."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Write a test list describing what the program does today"
                - "Find dead code with cross-references and confirm it is unused"
                - "Move one routine at a time into the standard structure"
                - "Run the full test list on the bench after each routine"
            - name: Parameter tables instead of hard-coded values
              description: |-
                ## Purpose
                Timer presets, speeds and limits typed directly into rungs cannot be changed without a programmer and an online edit. Moving process parameters into a structured, documented table, with defined limits and a record of who changed what, puts routine adjustments in the right hands and keeps logic untouched.

                ## Milestones
                1. All hard-coded presets, limits and setpoints in one program listed.
                2. Each classed as fixed by design or adjustable, agreed with the process owner.
                3. Adjustable values moved into a parameter structure with minimum and maximum limits checked in logic.
                4. A parameter register naming each value, its default, its limits and who may change it.

                ## Notes
                Values that protect people or equipment should stay fixed in logic or under safety system control, not in an adjustable table.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every adjustable value in one program lives in a limit-checked parameter table with a register of defaults, limits and permitted editors."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Search one program for hard-coded presets and limits"
                - "Agree with the process owner which values are adjustable"
                - "Build a parameter structure with limit checks in logic"
                - "Write the parameter register with defaults and permitted editors"
            - name: Obsolete PLC migration and code conversion
              description: |-
                ## Purpose
                Controllers the vendor has retired become a risk the day the last spare is used, and converting their code is rarely as automatic as the migration tool promises. Planning the conversion, checking every translated instruction, and testing the result against the old program's behaviour turns a risky platform change into a controlled project.

                ## Milestones
                1. The retired controller's program, IO list and spares position documented.
                2. The conversion tool run and every instruction it could not convert or converted with warnings listed.
                3. Timing, addressing and data type differences between the platforms checked rung by rung.
                4. The converted program passing the same behaviour test list as the original on the bench.
                5. A cutover plan with downtime estimate and rollback agreed with operations.

                ## Notes
                Start from the **Risk register** template to track conversion risks. Keep the old controller and its program intact until the new one has run in production for an agreed period.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A converted program passes the original's behaviour test list on the bench, with all conversion warnings closed and a cutover plan agreed."
                cadence: phased
                effort_hours_estimate: "80"
              tasks:
                - "Pick the retired controller with the fewest spares left"
                - "Run the vendor conversion tool on a copy of its program"
                - "List every unconverted instruction and conversion warning"
                - "Test the converted program against the original behaviour list"
            - name: Simulation test run of a new machine program
              description: |-
                ## Purpose
                New programs reaching site untested are the main reason commissioning overruns. Running it on the simulation bench against a written test script, with the process engineer or operator watching, finds sequence and interlock errors while fixing them costs minutes rather than production hours.

                ## Milestones
                1. A test script derived from the functional specification, covering every step, fault and mode.
                2. Simulated inputs that respond realistically to outputs.
                3. The script run in full with results recorded as pass or fail.
                4. Every failure fixed and retested, and the run witnessed by the process owner.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A signed simulation test record showing every step, fault and mode in the specification passed, witnessed by the process owner."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Turn the functional specification into a numbered test script"
                - "Build simulated responses for each sensor in the sequence"
                - "Book a session with the process owner to witness the run"
                - "Fix and retest every failure until the script passes"
            - name: PLC IO check-out on a new machine
              description: |-
                ## Purpose
                Every swapped wire or wrong address found before the program runs is a fault that never moves the machine unexpectedly. Checking each input and output point against the IO list with the electricians, before any automatic logic is enabled, proves the PLC sees what the drawings say it should.

                ## Milestones
                1. A check sheet generated from the IO list with one line per point.
                2. Outputs disabled or isolated as agreed, and permits in place before testing begins.
                3. Each input operated in the field and seen at the correct address and tag.
                4. Each output energised one at a time with the area clear, and confirmed at the device.
                5. Every fault found recorded, fixed and retested, and the IO list updated.

                ## Notes
                Outputs can start motors and open valves. Test them only under the site permit system, with the equipment isolated where required and someone in sight of the device.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A completed IO check sheet with every point signed as tested, all faults closed and the IO list updated to match."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Generate an IO check sheet from the machine IO list"
                - "Agree the output test method and permits with the site supervisor"
                - "Test every input with an electrician operating devices in the field"
                - "Record and close each wiring or addressing fault found"
            - name: Go-live of a new PLC program
              description: |-
                ## Purpose
                The first download of a new or heavily changed program is the moment most likely to stop production or surprise someone near the machine. A go-live plan with entry criteria, a timed sequence, named people on the floor, a tested rollback and clear acceptance criteria makes it a controlled event rather than a late-night gamble.

                ## Milestones
                1. Entry criteria met: simulation test passed, IO check-out complete, change approved and permits in place.
                2. A timed go-live plan naming who downloads, who watches the machine and who can stop the work.
                3. The old program saved and a rollback tested on the bench.
                4. The machine run through its acceptance tests after download, with results recorded.
                5. The new program committed as the master and the change log closed.

                ## Notes
                Start from the **Operational checklist** template for the go-live steps. If anything on the floor is not as the plan expects, stop and roll back; a second attempt next shift costs less than an injury.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A new program is live with entry criteria signed, acceptance tests recorded, the master copy committed and the change log closed."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Write the go-live entry criteria and check each one off"
                - "Draft a timed go-live plan naming every person and their role"
                - "Test the rollback to the old program on the bench"
                - "Run and record the acceptance tests after download"
            - name: Planned online change during production
              description: |-
                ## Purpose
                Some changes cannot wait for a shutdown, and an online edit during a run is the riskiest kind of change most programmers make. Planning one as a small event, with the edit tested offline, the operator briefed, the area checked and the accept or cancel steps rehearsed, keeps production running and nobody surprised.

                ## Milestones
                1. The change classed under the online edit rules and approved at the right level.
                2. The edit prepared and tested offline against the current master.
                3. Operator and shift supervisor briefed on what will change and what they might see.
                4. The edit made, tested and accepted, or cancelled, with the result logged.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "One online change made under the written rules, with offline test, operator briefing, result and commit all recorded in the change log."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Class the proposed change under the online edit rules"
                - "Test the edit offline against the current master copy"
                - "Brief the operator and shift supervisor before starting"
                - "Log the result and commit the new master"
            - name: PLC code and documentation handover package
              description: |-
                ## Purpose
                Projects end with the integrator gone and the site holding a program nobody there has opened. A handover package containing the final program, IO list, functional specification, test records, library versions, passwords and a walkthrough session means the maintenance team can support the machine from day one.

                ## Milestones
                1. Final program uploaded from the controller and confirmed identical to the delivered file.
                2. IO list, functional specification and test records updated to as-built.
                3. Controller access credentials and software versions handed over through the site's secure process.
                4. A walkthrough session held with maintenance, covering structure, faults and common changes.
                5. The package committed to the site repository and the register updated.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A handover package with as-built program, IO list, specification and test records is in the site repository and a maintenance walkthrough has been held."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Upload the final program and compare it with the delivered file"
                - "Update the IO list and specification to as-built"
                - "Hand over controller credentials through the site's secure process"
                - "Run a walkthrough of the program with the maintenance team"
            - name: First 90 days as a plant PLC programmer
              description: |-
                ## Purpose
                Joining a plant as its PLC programmer means inheriting controllers, habits and unwritten rules all at once. A 90-day plan that starts with the safety rules and the register, then the most critical machines, then the first small supervised change, builds trust with operations before you are trusted with a download.

                ## Milestones
                1. Site safety induction, permit rules and online edit rules completed in the first fortnight.
                2. The PLC register and master copies located and their state understood by day 30.
                3. The three most critical machines' programs read and their main sequences explained back to a senior by day 60.
                4. A first small change made under supervision and fully logged by day 90.

                ## Notes
                Start from the **Onboarding 30/60/90** template. Ask the night shift electricians which machines call them out most; their list is your reading list.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "By day 90, three critical programs explained back to a senior and one supervised change logged, with the safety and edit rules signed."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Ask for the site permit rules and the online edit rules on day one"
                - "Find where the master copies and the PLC register live"
                - "Ask the night shift electricians which machines fail most"
                - "Agree your first supervised change with your lead"
            - name: From maintenance electrician to PLC programmer
              description: |-
                ## Purpose
                Electricians who already fault-find with a laptop know the machines better than most programmers, and the step to writing logic is mainly structure, standards and test discipline. A development plan with bench practice each week, supervised changes and a portfolio of work gives a clear route without leaving the tools.

                ## Milestones
                1. A skills gap list agreed with your manager against the site programming standard.
                2. A weekly practice hour on the simulation bench held for three months.
                3. Three supervised changes made from specification to commit.
                4. A portfolio of bench exercises and real changes reviewed by a senior programmer.

                ## Notes
                Start from the **Development plan** template. Your field knowledge is the advantage; record wiring and device quirks you know as you go, because programmers rarely have them.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three supervised changes taken from specification to commit and a reviewed portfolio, under a development plan agreed with your manager."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Agree a skills gap list with your manager against the programming standard"
                - "Practise one bench exercise on the simulation bench @recurring(weekly:tue)"
                - "Ask a senior programmer to supervise your first logic change"
                - "Collect each exercise and change into a portfolio"
            - name: Integrator programmer on a customer's site
              description: |-
                ## Purpose
                Working for a system integrator means writing to the customer's standard rather than your own, under their permits and their change rules, often with the commercial clock running. Settling standards, access, IP ownership of libraries and sign-off points at the start of each job avoids rework and arguments at handover.

                ## Milestones
                1. The customer's programming standard, platform and software versions confirmed in writing.
                2. Site induction, permits and online edit rules completed before any connection to their network.
                3. Ownership of reusable blocks and whether source code is locked agreed in the contract or kick-off notes.
                4. Customer sign-off points for specification, simulation test and go-live agreed.
                5. A handover package delivered to the customer's format.

                ## Notes
                Locking or know-how protecting code that the customer will maintain is a commercial question, not a technical one. Settle it in writing before coding, not at handover.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A customer job delivered with standards, access, code ownership and sign-off points agreed in writing at kick-off and a handover in their format."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask the customer for their programming standard and software versions"
                - "Complete the customer's site induction before connecting to anything"
                - "Agree code ownership and locking in the kick-off notes"
                - "List the customer sign-off points in the project plan"
            - name: Inheriting an undocumented program
              description: |-
                ## Purpose
                The original author has left, there are no comments and the machine is critical. Rather than rewriting it under pressure, a structured first pass, mapping the IO, the routine call tree, the sequence states and the known faults, makes the program supportable within weeks and shows where the real risks are.

                ## Milestones
                1. A trusted copy uploaded and committed before anything else is done.
                2. A call tree of routines and a map of IO to tags drawn up.
                3. The main sequence states identified and written as a table.
                4. Operators and electricians interviewed about known faults and workarounds.
                5. A short risk list of logic you do not yet understand, with a plan for each.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An inherited program has a committed copy, a routine call tree, an IO map, a sequence state table and a risk list of unexplained logic."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Upload and commit the running program before reading it"
                - "Draw the routine call tree from the main task"
                - "Ask the agent to list the timers, latches and jumps in an exported routine"
                - "Interview operators about known faults and their workarounds"
            - name: Sole PLC engineer on a small factory
              description: |-
                ## Purpose
                In a small factory the only person who can change the PLCs is also the person who would review the changes, answer the call-outs and buy the spares. Building in a self-review routine, an outside reviewer for risky changes and a cover arrangement for holidays keeps the discipline of a team without one.

                ## Milestones
                1. A self-review checklist used on every change, with a cooling-off period before download for anything that can move equipment.
                2. An outside reviewer, such as an integrator or the vendor's support, arranged for safety-related or large changes.
                3. A cover arrangement for absences, with access to master copies and the register.
                4. A monthly self-audit of the change log and master copies.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A self-review checklist, an outside reviewer arrangement and holiday cover are in place, with monthly self-audits recorded for six months."
                cadence: rolling
              tasks:
                - "Write a self-review checklist with a cooling-off rule"
                - "Agree an outside reviewer for safety-related and large changes"
                - "Arrange cover for your absences with an integrator or neighbour site"
                - "Self-audit the change log against the master copies @recurring(monthly:5)"
            - name: Remote PLC support with someone on site
              description: |-
                ## Purpose
                Remote access lets a programmer fix a fault from another island or another country, and it also lets someone change logic on a machine they cannot see. Rules for when remote work is allowed, who must be physically present, how access is opened and closed, and what remote users may never do keep remote support useful and safe.

                ## Milestones
                1. Remote access only through the site's approved method, opened on request and closed after the job.
                2. A rule that a competent person is at the machine for any download, edit or force made remotely.
                3. Work allowed remotely listed, such as monitoring and diagnosis, separately from work that needs approval.
                4. Every remote session logged with who, when, what and who was on site.

                ## Notes
                Never start, jog or reset a machine remotely unless the person on site has confirmed the area is clear. The network side of remote access belongs with the control network owner; this project covers the programming rules.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "Written remote PLC support rules are agreed with the site, and every remote session for a quarter is logged with the person on site named."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the site how remote access is approved, opened and closed"
                - "Write which remote tasks are allowed and which need someone at the machine"
                - "Set up a remote session log with who was on site"
                - "Agree the rules with the site manager before the next remote job"
            - name: Safety PLC programming under the safety manual
              description: |-
                ## Purpose
                A safety controller only delivers its rated integrity if it is programmed exactly as its safety manual requires, using certified blocks, separate safety tasks and a locked, signed program. Learning those rules and working under a formal change process means safety functions specified by others are implemented and verified properly.

                ## Milestones
                1. The safety manual for your safety controller read, with its programming restrictions listed.
                2. Certified safety blocks used for e-stops, guards and light curtains in a bench project.
                3. Safety program signature, locking and version records understood and practised.
                4. A safety logic change taken through management of change, independent review and validation testing on the bench.
                5. Validation tests for each safety function recorded against the safety requirements.

                ## Notes
                Safety functions are specified and verified to IEC 61508, IEC 61511, ISO 13849 or IEC 62061 by competent people. The programmer implements and tests them; never alter safety logic to clear a nuisance trip.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A bench safety program built with certified blocks, signed and locked, with one change taken through management of change, review and recorded validation."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Read the safety manual and list its programming restrictions"
                - "Build a bench safety program with e-stop and guard functions"
                - "Practise signing and locking the safety program"
                - "Take a bench safety change through review and validation testing"
            - name: Batch phase logic to ISA-88
              description: |-
                ## Purpose
                Batch plants where recipes are hard-coded into sequences need a programmer every time the product changes. Structuring the PLC side to ISA-88, with equipment phases that have standard states and commands, separates what the equipment can do from the recipe, so new products become a recipe edit rather than a code change.

                ## Milestones
                1. The physical model mapped: units, equipment modules and control modules for one batch unit.
                2. Phases written with the ISA-88 state model of idle, running, holding, held, restarting, stopping and aborting.
                3. Phase parameters and reports passed through a defined interface.
                4. One recipe run on the bench through the phases, including a hold and restart.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One batch unit's phases built to the ISA-88 state model and tested on the bench with a recipe run including hold and restart."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Map one batch unit into units, equipment modules and control modules"
                - "Write a phase template with the ISA-88 states"
                - "Define phase parameters and reports with the batch system owner"
                - "Run one recipe on the bench through hold and restart"
            - name: PackML state model for a packaging machine
              description: |-
                ## Purpose
                Packaging lines built from machines by different vendors are hard to coordinate when each has its own states and stop reasons. Implementing the PackML state model from ISA-TR88.00.02, with standard modes, states and PackTags, gives line control and OEE reporting the same language on every machine.

                ## Milestones
                1. The PackML states and modes the machine needs selected and documented.
                2. A state machine block implemented with the standard transitions.
                3. Machine logic mapped onto the states, such as starting, execute, suspended and stopped.
                4. Admin and status PackTags published, including stop reasons and counts.
                5. The machine tested through every state transition on the bench.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A packaging machine runs a PackML state model with published PackTags and every state transition tested and recorded on the bench."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Read the PackML state model and pick the states the machine needs"
                - "Implement the PackML state machine block on the bench"
                - "Map the machine's existing logic onto the PackML states"
                - "Publish the stop reason and count PackTags for line reporting"
            - name: Motion control with PLCopen blocks
              description: |-
                ## Purpose
                Servo axes once needed a separate motion controller, and now most PLCs drive them through PLCopen motion function blocks. Learning to commission an axis, home it, run moves and handle axis errors with the standard blocks lets you program indexers, cut-to-length and pick and place machines without a specialist on every job.

                ## Milestones
                1. One servo axis configured with correct scaling and limits on a bench or test rig.
                2. Power, home, absolute move, relative move and stop blocks used with their status outputs checked.
                3. Axis error handling and reset written into the sequence.
                4. A simple indexing or cut-to-length cycle running repeatably, with position accuracy recorded.

                ## Notes
                Safe torque off and other drive safety functions belong to the safety system. Never rely on a stop command block as the only way to stop an axis with people nearby.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "One servo axis runs a repeatable indexing cycle using PLCopen blocks, with error handling and recorded position accuracy."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Configure one servo axis with scaling and software limits"
                - "Write homing and absolute move logic using PLCopen blocks"
                - "Add axis error handling and a reset path to the sequence"
                - "Run the indexing cycle a hundred times and record position accuracy"
            - name: Automated unit tests for PLC function blocks
              description: |-
                ## Purpose
                Manual bench testing of a library block takes hours and is rarely repeated when the block changes. Automated tests that drive a block's inputs and check its outputs in an emulator, run on every library release, catch regressions the moment they appear and make library changes far less risky.

                ## Milestones
                1. A testing approach chosen: a vendor test framework, an open-source IEC 61131-3 unit test library or a home-grown test routine.
                2. Test cases written for the motor and valve blocks, covering normal, fault and edge cases.
                3. Tests run automatically against the emulator with a pass or fail report.
                4. Test runs required before every library release and stored with it.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Automated test cases for at least two library blocks run in an emulator with a stored pass or fail report attached to each library release."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Compare unit test options available for your PLC platform"
                - "Write test cases for the motor block, including fault paths"
                - "Run the tests automatically against the emulator"
                - "Make a passing test report a condition of library release"
---

# PLC Programming

PLC programming is the craft of turning a machine or process description into logic that runs every scan, survives a power cut and tells the electrician at three in the morning what went wrong, and these projects are written for the engineer who writes, changes and answers for that code. They start with foundations (an inventory of every controller, a trusted master copy of each program, a programming standard, IO lists, a functional specification, version control, a simulation bench and rules for online edits), move through the routines that keep running code honest, then core skills in ladder, structured text, sequences and fieldbus IO, improvements and decisions, dated events from simulation test to go-live and handover, situations for new plant programmers, electricians stepping up, integrators, inherited code, lone engineers and remote support, and finish with safety PLCs, batch, PackML, motion and automated testing.

The rhythm is weekly and monthly: a Monday forced IO check, a Wednesday hour documenting one legacy routine, a Friday walk through the change log, and monthly program comparisons, controller health checks, code review samples and fault call-out reviews, with quarterly firmware advisory, spares and library reviews and a yearly battery, licence and standards refresh. The Purchase decision, Operational checklist, Risk register, Onboarding 30/60/90 and Development plan templates pair with the projects that point to them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
