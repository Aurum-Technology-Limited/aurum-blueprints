---
id: engineering-practice.commissioning-and-start-up
name: Commissioning and Start-Up
description: "A plant or system taken from mechanical completion to steady operation: clear system boundaries, a completions database, punch lists under control, safe first energisation and first feed, and performance tests that close the job."
category: business
version: 1.0.0
tags: [engineering-practice, commissioning-and-start-up, engineer, commissioning, start-up, mechanical-completion, punch-list, handover]
author: Aurum Technology
starter_structure:
  templates:
    - meeting-notes
    - metrics-log
    - risk-register
    - purchase-decision
    - operational-checklist
    - development-plan
  pillars:
    - name: Engineering Practice
      emoji: "🔧"
      description: "The day-to-day work of practising engineers: each major discipline, process safety and risk studies, FEED, design reviews, commissioning, reliability and maintenance, CAD, simulation and PLC work, project delivery, tenders, reports, ethics and standards, and the Caribbean energy sector from Point Lisas to LNG."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Commissioning and Start-Up
          description: "Taking a plant or system from mechanical completion to operation: system handovers, pre-commissioning checks, punch lists, start-up procedures and performance tests."
          projects:
            - name: Commissioning phases and vocabulary primer
              description: |-
                ## Purpose
                Mechanical completion, pre-commissioning, commissioning, ready for start-up and performance test mean slightly different things on every project, and arguments about who owns a system usually start with a definition nobody wrote down. Learning the standard phase model and comparing it with your project's own definitions gives you the language for every handover, certificate and dispute that follows.

                ## Milestones
                1. A one-page diagram of the phases from construction complete through to performance test, with the certificate that closes each one.
                2. The difference between pre-commissioning (static, without process fluid) and commissioning (dynamic, with utilities or process) explained in your own words.
                3. Your project's contract definitions of mechanical completion and ready for start-up copied beside the textbook versions, with differences marked.
                4. A short glossary of at least fifteen terms, including ITR, RFC, RFSU, punch category and care, custody and control.

                ## Notes
                Contracts govern payment milestones and liquidated damages, so the contract definition always wins over the textbook one. Read the contract clause before you sign any certificate.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page phase diagram and a glossary of at least fifteen terms, reconciled against the project contract definitions."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Find the clause in your contract that defines mechanical completion"
                - "Sketch the phase sequence with the certificate that closes each stage"
                - "Write a glossary of fifteen commissioning terms in plain language"
                - "Ask the commissioning lead where the project departs from the standard model"
            - name: Commissioning execution plan for the project
              description: |-
                ## Purpose
                Without a written plan, commissioning starts when construction runs out of work and becomes a scramble for people, utilities and paperwork. An execution plan agreed six months or more before mechanical completion fixes the philosophy, the organisation, the systems, the sequence, the documents and the certificates, so everyone works to the same picture.

                ## Milestones
                1. A draft execution plan covering scope, philosophy, organisation, systemisation, sequence, completions tools, safety and handover.
                2. Commissioning responsibilities split clearly between contractor, owner, operations and vendors.
                3. The plan reviewed by construction, operations, process safety and the project manager, with comments closed.
                4. Revision 0 issued and registered in the project document system.

                ## Notes
                Write the plan early and keep it short enough to be read. A forty page plan that people use beats a two hundred page plan nobody opens.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Revision 0 of the commissioning execution plan is issued with review comments from construction, operations and process safety closed."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Collect two execution plans from past projects as reference"
                - "Draft the table of contents and agree it with the commissioning manager"
                - "Write the systemisation and sequence sections first"
                - "Circulate the draft to construction, operations and process safety for comment"
                - "Issue revision 0 once every comment has a response"
            - name: System and subsystem boundaries on marked-up P&IDs
              description: |-
                ## Purpose
                Systemisation is the backbone of commissioning: every tag, check sheet, punch item and certificate hangs off a system number. Drawing clear subsystem boundaries on the P&IDs and single-line diagrams, with every boundary at a valve, blind or breaker, lets construction finish by system rather than by area and lets you hand over in a sensible order.

                ## Milestones
                1. A system numbering convention agreed and written down.
                2. Every P&ID and single-line diagram marked up in colour with subsystem boundaries at isolatable points.
                3. A system register listing each subsystem, its description, its drawings and its responsible engineer.
                4. Boundaries checked by operations so each subsystem can be isolated and handed over on its own.

                ## Notes
                A boundary drawn in the middle of a pipe run is a future argument. Put boundaries where you can physically isolate, and keep utilities as their own systems.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every P&ID and single-line diagram carries colour-coded subsystem boundaries, and a system register lists each subsystem with its drawings and owner."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Agree the system and subsystem numbering format with the completions lead"
                - "Mark up the utility P&IDs first, starting with power, air and water"
                - "Check every boundary sits at a valve, blind or breaker"
                - "Build the system register from the marked-up drawings"
                - "Walk the boundaries with an operations representative"
            - name: Completions database set-up and tag loading
              description: |-
                ## Purpose
                Tracking hundreds of systems and thousands of tags in loose spreadsheets loses items between versions. Setting up a single completions database, loaded with every tag from the engineering lists and linked to its subsystem and check sheets, gives one source of truth for progress, punch and certification.

                ## Milestones
                1. Tag lists for every discipline imported and linked to a subsystem.
                2. Each tag assigned the check sheet types that apply to it.
                3. Duplicate, missing and orphan tags found and resolved with engineering.
                4. Reports for open check sheets and open punch by subsystem producing correct numbers on a test run.

                ## Notes
                Freeze the tag import format before engineering sends data. Most loading errors come from inconsistent tag numbering between disciplines.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All engineering tags are loaded and linked to subsystems and check sheets, with a validation report showing no orphan or duplicate tags."
                cadence: one-shot
                effort_hours_estimate: "35"
              tasks:
                - "Request the latest instrument, electrical, mechanical and piping tag lists"
                - "Agree an import template and send it to each discipline lead"
                - "Load the tags and run a duplicate and orphan check"
                - "Test the open items report on one subsystem against a manual count"
            - name: Inspection and test record library by discipline
              description: |-
                ## Purpose
                Check sheets decide what gets checked before power or fluid goes in, and a weak one lets a reversed motor or an unbolted flange through. Building a library of construction and pre-commissioning check sheets for each equipment type, with clear acceptance criteria, makes every check repeatable whoever signs it.

                ## Milestones
                1. A list of equipment types needing construction and pre-commissioning check sheets.
                2. A check sheet for each type with numbered items, acceptance criteria and a reference to the standard or vendor manual.
                3. Sheets reviewed by a senior engineer in each discipline.
                4. The library loaded into the completions database and assigned to tags.

                ## Notes
                Copying the previous project's sheets is fine as a start, but check every acceptance value against this project's specifications and vendor data.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every equipment type on the project has a reviewed check sheet with acceptance criteria, loaded into the completions database."
                cadence: one-shot
                effort_hours_estimate: "25"
              tasks:
                - "List the equipment types from the tag register"
                - "Collect check sheets from the last comparable project"
                - "Add acceptance criteria from specifications and vendor manuals"
                - "Send each discipline's sheets to its senior engineer for review"
            - name: Start-up sequence and system priority list
              description: |-
                ## Purpose
                Plants are commissioned in an order dictated by physics: power before pumps, instrument air before control valves, cooling water before compressors. A priority list that ranks every subsystem by the date it is needed tells construction which systems to finish first and stops the team waiting on a single missing utility.

                ## Milestones
                1. Dependencies between subsystems mapped, starting with electrical and utilities.
                2. A ranked priority list with a required-for-commissioning date for each subsystem.
                3. The list agreed with construction and built into their completion schedule.
                4. A one-page sequence diagram posted in the commissioning office.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A ranked subsystem priority list with required dates is agreed with construction and reflected in their completion schedule."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "List which utilities each process subsystem needs before it can run"
                - "Rank subsystems by the date their first dependent system needs them"
                - "Review the ranking with the construction manager"
                - "Print the sequence diagram for the commissioning office wall"
            - name: Commissioning team organisation and roles matrix
              description: |-
                ## Purpose
                Construction, operations, vendors and engineering all meet on a commissioning site, and confusion over who signs what wastes days. A roles matrix that names who prepares, performs, witnesses and accepts each activity, with operators included from the first check, sets expectations before the pressure arrives.

                ## Milestones
                1. An organisation chart for the commissioning team, with system leads named.
                2. A matrix showing who prepares, performs, witnesses and accepts each type of activity and certificate.
                3. Operations staff assigned to each system lead for hands-on involvement.
                4. The matrix signed off by the commissioning manager and the operations manager.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed roles matrix covers every commissioning activity and certificate, and each system lead has a named operations counterpart."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every certificate and activity type that needs a signature"
                - "Draft the prepare, perform, witness and accept matrix"
                - "Pair each system lead with an operations counterpart"
                - "Get the matrix signed by both managers"
            - name: Live system controls during commissioning
              description: |-
                ## Purpose
                Few weeks on a project are as dangerous as those when part of the plant is energised or pressurised and construction is still working next to it. Clear rules for when a system becomes live, how it is tagged and barricaded, and who controls access under the site permit to work system stop a crew from cutting into a line that was filled yesterday.

                ## Milestones
                1. A written rule for the point at which a subsystem becomes live and passes into commissioning control.
                2. A visible tagging and barrier standard for live, energised and pressurised systems.
                3. A live systems board or map kept current and visible to every crew.
                4. Toolbox talks held with construction crews on the live systems rules before first energisation.

                ## Notes
                These rules sit under the site permit to work system, not beside it. Anyone can stop work if a system's status is unclear.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A live systems procedure, tagging standard and status board are in use, and every construction crew has had a toolbox talk before first energisation."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Read the site permit to work procedure for its commissioning provisions"
                - "Draft the rule for when a subsystem becomes live"
                - "Choose tag colours and barrier types for live systems"
                - "Set up the live systems board in the control room or permit office"
                - "Hold a toolbox talk with each construction crew before first energisation"
            - name: First fills, consumables and temporary equipment list
              description: |-
                ## Purpose
                Start-ups stall for want of things nobody ordered: lube oil, glycol, water treatment chemicals, temporary strainers, spool pieces and a nitrogen supply. A single list of first fills, consumables and temporary equipment, with quantities, specifications and order dates, gets them on site before the system needs them.

                ## Milestones
                1. First fill quantities and specifications gathered from vendor data for every machine and system.
                2. Temporary equipment such as strainers, spools, hoses, pumps and blinds listed by subsystem.
                3. Purchase requests raised with lead times checked against the start-up sequence.
                4. A storage plan agreed for chemicals and oils, with safety data sheets on site.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A first fills and temporary equipment list with quantities and order dates exists, and every long lead item has a purchase order."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Pull lubricant and fill quantities from the vendor manuals"
                - "List temporary strainers, spools and blinds needed for flushing"
                - "Check lead times against the start-up sequence dates"
                - "Raise purchase requests for the long lead items first"
            - name: Vendor representative call-off schedule
              description: |-
                ## Purpose
                Most packages need the vendor's engineer on site for first run, and their contract often allows only a fixed number of days. A schedule that ties each vendor visit to a ready system, with readiness checks before they fly in, avoids paying for a specialist to sit in a hotel while the cable is still being pulled.

                ## Milestones
                1. Every package listed with the vendor support days in its purchase order.
                2. Each visit tied to a subsystem and a planned date in the commissioning schedule.
                3. A readiness checklist the system lead confirms before a visit is called off.
                4. Notice periods, travel and site induction needs recorded for each vendor.

                ## Notes
                Vendors usually need four to eight weeks of notice. Confirm readiness two weeks before the visit, not the day before.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A vendor call-off schedule lists every package, its contracted support days and planned visit date, with a readiness check before each call-off."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Extract vendor site support terms from each purchase order"
                - "Match each package to its subsystem and planned commissioning date"
                - "Write a two-week readiness check for system leads"
                - "Record each vendor's notice period and induction needs"
            - name: Punch list control by category
              description: |-
                ## Purpose
                A punch list with no categories treats a missing label like a missing relief valve. Running the list with clear categories (items that block commissioning, items that block start-up, and items that can wait), named owners and dates keeps attention on what truly stops the next step.

                ## Milestones
                1. Category definitions written and agreed with construction and operations.
                2. Every punch item carrying a category, subsystem, owner and target date.
                3. A weekly report of open items by category and subsystem.
                4. No category A item open on any subsystem offered for handover.

                ## Notes
                Agree who may change a category. Downgrading items to hit a handover date is the oldest trick on site.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every open punch item has a category, owner and date, and no subsystem is handed over with an open category A item."
                cadence: rolling
              tasks:
                - "Write the punch category definitions on one page"
                - "Agree who may raise, downgrade and close punch items"
                - "Review open category A items with system leads @recurring(weekly:tue)"
                - "Send the punch report by category and subsystem @recurring(weekly:fri)"
            - name: Daily commissioning coordination meeting
              description: |-
                ## Purpose
                Systems are being energised, flushed and tested at the same time by different crews, and one missed conflict can put a crew next to a line being blown with steam. A short daily meeting that covers safety, yesterday's progress, today's live activities and blockers keeps every lead looking at the same plan.

                ## Milestones
                1. A fixed agenda: safety, live systems, yesterday, today, blockers, help needed.
                2. Attendance from construction, operations, commissioning leads and the permit office.
                3. Conflicting activities spotted and resolved before the shift starts.
                4. Actions and decisions captured in a short daily note.

                ## Notes
                Start from the **Meeting notes** template. Keep it standing and under twenty minutes; take detailed problems offline.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A daily meeting runs with a fixed agenda and a written note of actions, and conflicting live activities are resolved before work starts."
                cadence: rolling
              tasks:
                - "Write the six-point agenda and post it in the meeting room"
                - "Invite the permit office and operations shift lead"
                - "Run the coordination meeting and record actions @recurring(daily)"
                - "Check last week's actions are closed @recurring(weekly:mon)"
            - name: Commissioning progress tracking and S-curve
              description: |-
                ## Purpose
                Percent complete on commissioning is easy to argue about and hard to measure unless it is built from counted check sheets, tests and certificates. Weighting those items and plotting earned against planned each week tells the project manager the truth early enough to act.

                ## Milestones
                1. A weighting for check sheets, tests and certificates agreed with project controls.
                2. A planned curve built from the commissioning schedule.
                3. Actual progress calculated from the completions database each week.
                4. A one-page weekly report with the curve, the variance and the three biggest blockers.

                ## Notes
                Start from the **Metrics log** template to keep the weekly numbers in one place.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly S-curve built from counted completions items is issued, with variance and top blockers stated."
                cadence: rolling
              tasks:
                - "Agree item weightings with project controls"
                - "Build the planned curve from the commissioning schedule"
                - "Update actual progress from the completions database @recurring(weekly:thu)"
                - "Write the three biggest blockers on the weekly report"
            - name: Temporary strainer, spool and blind register
              description: |-
                ## Purpose
                Temporary strainers, spool pieces and flushing blinds are installed by the hundred during pre-commissioning, and one left in place can starve a pump or block a relief path at start-up. A register that tracks every temporary item from installation to removal, checked before each system's handover, is the only reliable defence.

                ## Milestones
                1. A numbered register with location, type, reason, installed date and removal condition for every temporary item.
                2. Physical tags on every item that match the register number.
                3. Removal confirmed and signed for every item on a subsystem before ready for start-up.
                4. Temporary strainer differential pressure checks recorded during first runs.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every temporary strainer, spool and blind is tagged and in the register, and none remain on any subsystem declared ready for start-up."
                cadence: rolling
              tasks:
                - "Set up the register with a number, location and removal condition column"
                - "Order numbered metal tags for temporary items"
                - "Reconcile the register against a field walk @recurring(weekly:wed)"
                - "Add a register check to the ready for start-up checklist"
            - name: Commissioning technical query log
              description: |-
                ## Purpose
                Design gaps surface during commissioning: a missing vent, a relief valve set wrongly, a trip that cannot be reset. A query log that sends each question to the right engineer, with a required-by date tied to the schedule, stops answers getting lost in email while a system waits.

                ## Milestones
                1. A query log with number, subsystem, question, raised by, assigned engineer and required date.
                2. Queries that change the design routed into management of change.
                3. A weekly review of overdue queries with engineering.
                4. Answers linked to the subsystem dossier when closed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every commissioning query has an owner and required date, overdue queries are reviewed weekly, and design changes go through management of change."
                cadence: rolling
              tasks:
                - "Create the query log with required-by dates"
                - "Agree a response time with the engineering manager"
                - "Chase overdue queries with engineering leads @recurring(weekly:wed)"
                - "File closed answers in the subsystem dossier"
            - name: Preservation of installed equipment before start-up
              description: |-
                ## Purpose
                Equipment can sit installed for months before first run, and bearings, seals and electrical windings deteriorate in humid, salty air. A preservation routine covering shaft rotation, nitrogen blankets, heaters and desiccants, recorded against each tag, protects the warranty and avoids a seal failure on day one.

                ## Milestones
                1. Vendor preservation requirements collected for every machine and electrical item.
                2. A preservation schedule loaded against each tag with frequency and method.
                3. Records of each preservation round kept and signed.
                4. Preservation handed to operations with the system at handover.

                ## Notes
                Warranty claims are often refused for missing preservation records. Keep them as carefully as test records.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every installed machine and electrical item has a preservation schedule and a signed record of each round until handover."
                cadence: rolling
              tasks:
                - "Collect preservation instructions from each vendor manual"
                - "Load preservation tasks against each tag in the completions database"
                - "Walk the preservation round and sign the records @recurring(monthly:9)"
                - "Include the preservation history in each handover dossier"
            - name: Lessons learned register through commissioning
              description: |-
                ## Purpose
                Commissioning lessons are vivid on the day and forgotten by the next project. Writing them down as they happen, with the cause and a specific recommendation for design or construction, produces a register the next team will actually read.

                ## Milestones
                1. A register with date, subsystem, what happened, why, and a recommendation.
                2. At least one entry from every system lead each month.
                3. Lessons sorted into design, procurement, construction and commissioning at the end of the job.
                4. The register sent to the engineering standards owner.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A lessons learned register with monthly entries from each system lead is sorted and sent to the engineering standards owner at close-out."
                cadence: rolling
              tasks:
                - "Set up the register with a cause and recommendation column"
                - "Ask each system lead for one lesson from this month @recurring(monthly:24)"
                - "Tag each lesson as design, procurement, construction or commissioning"
            - name: Subsystem commissioning dossiers
              description: |-
                ## Purpose
                Each dossier is the evidence that a subsystem was built, tested and commissioned correctly, and an incomplete one blocks handover and haunts the plant for years. Building each dossier as the work happens, rather than in a rush at the end, means signed check sheets, test packs and certificates are there when operations asks.

                ## Milestones
                1. A standard dossier index agreed with operations and document control.
                2. A dossier opened for every subsystem in the register.
                3. Signed records filed into each dossier within a week of the work.
                4. Each dossier checked complete before the subsystem is offered for handover.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every subsystem has a dossier built to the agreed index, and each one is checked complete before handover is offered."
                cadence: rolling
              tasks:
                - "Agree the dossier index with operations and document control"
                - "Open a dossier for each subsystem in the register"
                - "File the week's signed check sheets and test records @recurring(weekly:fri)"
                - "Run a completeness check on the next subsystem due for handover"
            - name: Operations readiness tracker
              description: |-
                ## Purpose
                A plant can be mechanically perfect and still not ready to run if operators are untrained, procedures unapproved and spare parts still on a ship. Tracking readiness items such as staffing, training, procedures, spares, maintenance plans and the laboratory alongside the commissioning schedule exposes the gap months ahead.

                ## Milestones
                1. A readiness checklist covering people, procedures, spares, maintenance systems, laboratory and supplies.
                2. An owner and target date for each readiness item.
                3. A monthly readiness review with the operations manager.
                4. All readiness items closed or formally accepted before first feed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A readiness checklist with owners and dates is reviewed monthly, and every item is closed or formally accepted before first feed."
                cadence: rolling
              tasks:
                - "Draft the readiness checklist by category"
                - "Assign an owner and date to each item with the operations manager"
                - "Review readiness status with the operations manager @recurring(monthly:15)"
                - "Flag any item that will not close before first feed"
            - name: Pipe flushing and blowing methods
              description: |-
                ## Purpose
                Construction debris left in lines ends up in pump impellers, control valve seats and compressor wheels. Understanding when to water flush, air blow, steam blow or oil flush, what velocity and cleanliness criteria to use, and how to prove a line clean makes your flushing plans credible and your start-up quieter.

                ## Milestones
                1. The main methods summarised with where each is used and its acceptance test.
                2. Velocity and cleanliness criteria noted from the project specification and vendor requirements.
                3. One flushing procedure written for a real subsystem, with temporary connections and disposal.
                4. A flush witnessed and the target plate or filter result recorded.

                ## Notes
                Steam and air blows release large amounts of energy and noise. They need their own exclusion zones, permits and neighbour notice.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written flushing procedure for one real subsystem, and a witnessed flush with its acceptance result recorded."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Read the project flushing and cleaning specification"
                - "Summarise water, air, steam and oil flushing on one page"
                - "Write a flushing procedure for one subsystem"
                - "Witness a flush and record the acceptance result"
            - name: Pressure test packs and reinstatement
              description: |-
                ## Purpose
                Pressure testing is usually done by construction, but commissioning inherits the risk if a test pack was incomplete or a line was not reinstated correctly. Learning how test packs are built, what a witnessed test proves, and how gaskets, instruments and relief valves are reinstated afterwards lets you check what you are accepting.

                ## Milestones
                1. The contents of a complete test pack listed: limits, drawings, test pressure basis, gauges and certificates.
                2. The difference between hydrostatic, pneumatic and service tests explained with their hazards.
                3. One test pack reviewed in detail and witnessed in the field.
                4. A reinstatement checklist used on a real system after test.

                ## Notes
                Test pressures and holding times come from the governing code and the project specification. Do not guess them; check the test pack against both.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One test pack reviewed and witnessed, and a reinstatement checklist completed on a tested system."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask construction for a completed test pack to study"
                - "List what a complete pack must contain"
                - "Witness a pressure test with the inspector"
                - "Use a reinstatement checklist on the tested line"
            - name: Rotating equipment first run
              description: |-
                ## Purpose
                First runs of pumps, fans and compressors are where alignment, lubrication, rotation direction and vibration problems show up, sometimes expensively. Learning the sequence of motor solo run, coupling, first start and run-in, and the readings to take at each step, prepares you to run or witness a first start with confidence.

                ## Milestones
                1. The first run sequence written out from bump test to run-in, with hold points.
                2. Pre-start checks listed: alignment record, lubrication, rotation, guards, suction strainer and minimum flow.
                3. Vibration, temperature and current readings taken and compared with vendor limits on a real machine.
                4. A first run record completed and filed in the subsystem dossier.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A first run record with vibration, temperature and current readings compared to vendor limits is completed for at least one machine."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Read the vendor manual start-up section for one pump"
                - "Write the first run sequence with hold points"
                - "Check the alignment record before the motor is coupled"
                - "Take and record readings during the first run"
            - name: Electrical energisation of a new substation
              description: |-
                ## Purpose
                First energisation of switchgear and transformers carries arc flash and back-feed risks that do not exist once a system is settled. Understanding the sequence of insulation resistance tests, protection relay tests, energisation of incomers and downstream feeders, and the switching programme behind it, helps any engineer working near a newly live substation.

                ## Milestones
                1. The energisation sequence from incoming supply to motor control centres summarised.
                2. The pre-energisation tests listed with their purpose.
                3. A switching programme for a real energisation read and its hold points understood.
                4. The handover of the substation to the electrical authorised person observed and recorded.

                ## Notes
                Only authorised electrical persons switch. Your role as a non-electrical engineer is to understand the sequence and keep clear of the switch room boundaries.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written summary of the energisation sequence and pre-energisation tests, checked by the lead electrical engineer."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the lead electrical engineer for the energisation plan"
                - "Summarise the pre-energisation tests and why each is done"
                - "Read the switching programme for the first energisation"
                - "Have the lead electrical engineer check your summary"
            - name: Chemical cleaning and passivation
              description: |-
                ## Purpose
                Boilers, compressor lube systems and stainless lines often need chemical cleaning before service, and the chemicals, temperatures and waste involved make it one of the riskier pre-commissioning jobs. Learning the stages of degreasing, pickling, neutralising and passivation, and how specialist contractors control them, lets you review their procedure properly.

                ## Milestones
                1. The stages of a typical chemical clean described with what each removes.
                2. A specialist contractor's cleaning procedure reviewed against the project specification.
                3. Waste handling and disposal arrangements confirmed with the environmental lead.
                4. Inspection results after cleaning recorded in the dossier.

                ## Notes
                Chemical selection and concentrations come from the specialist contractor and equipment vendor. Your job is to check the procedure, the controls and the waste route.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A specialist cleaning procedure reviewed with comments returned, and the post-clean inspection result filed in the dossier."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read the project specification for chemical cleaning"
                - "Summarise the cleaning stages and what each removes"
                - "Review the contractor's procedure and return comments"
                - "Confirm the waste disposal route with the environmental lead"
            - name: Catalyst and desiccant loading oversight
              description: |-
                ## Purpose
                Catalyst and adsorbent loading is a one-time job that decides reactor and dryer performance for years, and poor loading causes channelling, high pressure drop and early change-out. Preparing the loading plan, witnessing the work and recording outage measurements gives the owner proof the bed was loaded as designed.

                ## Milestones
                1. Loading diagrams and vendor procedures for each vessel collected.
                2. Material receipt checked against certificates, with storage kept dry.
                3. Loading witnessed with outage measurements and densities recorded at each layer.
                4. A loading report issued and filed with the vessel dossier.

                ## Notes
                Many catalysts are pyrophoric or need inert entry. Confined space and inert entry rules apply in full; the specialist loading contractor leads that work.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A loading report with layer outages and densities for each vessel, matching the vendor loading diagram."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Collect loading diagrams from the catalyst vendor"
                - "Check delivered material against its certificates"
                - "Witness the loading and record outages at each layer"
                - "Issue the loading report to the process engineer"
            - name: Drying and nitrogen inerting before first feed
              description: |-
                ## Purpose
                Water left from hydrotest freezes in cold sections, and air left in a system meets hydrocarbon at start-up in the worst possible place. Learning how systems are dried, purged and inerted, and how dew point and oxygen readings prove the result, prepares you for the step just before process fluid goes in.

                ## Milestones
                1. Drying methods (draining, hot air, vacuum, dry nitrogen) compared for the systems on your project.
                2. Dew point and oxygen targets taken from the project specification.
                3. A purge plan written for one subsystem with sample points marked.
                4. Readings recorded and signed before the system is declared inert.

                ## Notes
                Nitrogen is an asphyxiant with no warning smell. Purge vents go to a safe location and entry into inerted equipment is a separate, controlled activity.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A purge plan for one subsystem with sample points, and signed dew point and oxygen readings meeting the specification."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Find the dew point and oxygen targets in the specification"
                - "Mark purge and sample points on the subsystem P&ID"
                - "Write the purge plan with the nitrogen supply arrangement"
                - "Record and sign the final readings"
            - name: Leak testing before introducing hydrocarbons
              description: |-
                ## Purpose
                Joints that passed a hydrotest can still leak after reinstatement, and the first sign should not be a gas detector alarm. A service leak test at operating pressure with nitrogen or a nitrogen helium mix, joint by joint, finds the weeping flange before process fluid arrives.

                ## Milestones
                1. The difference between a strength test and a service leak test explained.
                2. A leak test plan for one subsystem with test pressure basis, joints list and method.
                3. Every flanged and threaded joint checked and recorded.
                4. Leaks repaired and retested before the subsystem is accepted for first feed.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A completed leak test record for one subsystem with every joint listed, leaks repaired and retested before first feed."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read the leak test section of the commissioning specification"
                - "List every joint on one subsystem from the isometrics"
                - "Write the leak test plan with the test pressure basis"
                - "Record each joint result during the test"
            - name: Choosing a completions management tool
              description: |-
                ## Purpose
                Completions software ranges from a well built spreadsheet to enterprise systems with mobile check sheets and handover workflows. Comparing two or three options against your project's size, the contractor's own system and the owner's handover needs avoids buying a tool the site team will work around.

                ## Milestones
                1. Requirements written: tag volume, check sheets, punch, certificates, mobile use, reporting and handover export.
                2. Two or three options demonstrated with real project data.
                3. Each option scored against the same criteria, including cost and support.
                4. A recommendation recorded and approved by the project manager.

                ## Notes
                Start from the **Purchase decision** template. Ask how data leaves the tool at handover; operations will need it in their maintenance system.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A scored comparison of at least two completions tools with an approved recommendation recorded."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Write the requirements list on one page"
                - "Ask the contractor which completions tool they already use"
                - "Book demonstrations with two or three suppliers"
                - "Score each option and record the recommendation"
            - name: Ready for start-up criteria
              description: |-
                ## Purpose
                The ready for start-up decision is where pressure to hit a date meets pressure to be safe, and vague criteria let the date win. Writing clear, checkable criteria in advance (punch status, dossiers, procedures, training, safety systems, permits) means the decision on the day is a check, not a negotiation.

                ## Milestones
                1. A draft list of ready for start-up criteria, each one checkable as yes or no.
                2. Criteria reviewed by operations, process safety and the project manager.
                3. The criteria built into the ready for start-up certificate.
                4. A trial check run on the first utility subsystem.

                ## Notes
                Include a line that any member of the review can stop the start-up. Stop-work authority means little if the certificate does not say so.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An approved list of yes or no ready for start-up criteria is built into the certificate and trialled on one subsystem."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Draft the criteria as yes or no questions"
                - "Review the criteria with operations and process safety"
                - "Add the criteria and a stop-work line to the certificate"
                - "Trial the certificate on the first utility subsystem"
            - name: Deferred work and carry-over decisions
              description: |-
                ## Purpose
                Every start-up carries some unfinished work, and the question is which items are safe to carry and who will finish them. A documented risk review for each deferred item, with a named owner and a completion date after start-up, stops carry-over lists becoming permanent.

                ## Milestones
                1. A list of all items proposed for deferral past start-up.
                2. Each item reviewed for safety, operability and warranty impact.
                3. Accepted deferrals signed by operations with an owner and date.
                4. A monthly review after start-up until the list is empty.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Every deferred item has a recorded risk review, an operations signature, an owner and a date, and the list is reviewed monthly until empty."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Collect all items proposed for deferral"
                - "Review each one for safety, operability and warranty impact"
                - "Get operations to sign accepted deferrals"
                - "Review the carry-over list with operations @recurring(monthly:5)"
            - name: Start-up procedures validated by walkdown
              description: |-
                ## Purpose
                Start-up procedures written in an office often miss a valve, a bypass or a sequence that only makes sense in the field. Walking each procedure step by step with an operator before first use, and correcting it, means the procedure in the control room on the day is one that works.

                ## Milestones
                1. Initial start-up procedures drafted for each process system.
                2. Each procedure walked in the field with an operator, step by step.
                3. Errors and missing steps corrected and the procedure reissued.
                4. Procedures approved under the site procedure process before use.

                ## Notes
                Start from the **Operational checklist** template to keep the walkdown record for each procedure.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every initial start-up procedure has a recorded field walkdown, its corrections incorporated and site approval before first use."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "List the start-up procedures needed for each process system"
                - "Schedule walkdowns with an experienced operator"
                - "Mark corrections on the procedure during each walkdown"
                - "Submit corrected procedures for site approval"
            - name: Commissioning hazard review of temporary configurations
              description: |-
                ## Purpose
                Commissioning uses configurations the plant will never see again: temporary hoses, jumpers, bypassed trips, blowdown to atmosphere and partial systems. A hazard review of these temporary set-ups, separate from the design HAZOP, catches the risks the design team never had to think about.

                ## Milestones
                1. A list of temporary configurations planned during commissioning.
                2. A hazard review held for each with operations and process safety.
                3. Controls and actions recorded with owners and close-out dates.
                4. Every temporary bypass and override on the register with an approval and removal date.

                ## Notes
                Start from the **Risk register** template. Bypassed trips during commissioning need the same approval as in operation; no exceptions for being new.
              priority: high
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Each planned temporary configuration has a recorded hazard review with controls, and every commissioning bypass is approved with a removal date."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "List temporary hoses, jumpers, bypasses and vents in the commissioning plan"
                - "Book a hazard review with operations and process safety"
                - "Record controls and actions with owners"
                - "Check the bypass register weekly against the control system @recurring(weekly:mon)"
            - name: Commissioning schedule recovery plan
              description: |-
                ## Purpose
                When construction finishes late but the start-up date stays fixed, commissioning is squeezed first. A recovery plan that re-sequences systems, adds shifts where they help, and states plainly what can and cannot be recovered gives management a real choice instead of hope.

                ## Milestones
                1. The critical path through commissioning identified from the current schedule.
                2. Options listed: re-sequencing, extra shifts, temporary utilities, earlier vendor support.
                3. Each option costed with its schedule gain and its risk.
                4. A recommendation presented and a decision recorded.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recovery plan with costed options and schedule gains is presented and a management decision is recorded."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Find the critical path through the commissioning schedule"
                - "List recovery options with schedule gain for each"
                - "Ask the agent to draft a one-page options summary from your notes"
                - "Present the options and record the decision"
            - name: Temporary utilities decision
              description: |-
                ## Purpose
                Permanent power, steam or nitrogen is sometimes not ready when commissioning needs it, and temporary generators, boilers or nitrogen tankers can keep the schedule alive. Deciding early, with costs, safety, permits and lead times, avoids paying premium rates for something ordered in a panic.

                ## Milestones
                1. Utility needs and dates compared with permanent utility readiness.
                2. Temporary options priced with rental, fuel, connection and permit costs.
                3. Safety and environmental requirements for each option noted.
                4. A decision recorded and orders placed where temporary supply is chosen.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision for each utility gap, with costs and lead times, and orders placed for any temporary supply chosen."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Compare utility need dates with permanent utility readiness"
                - "Get quotes for temporary power, steam or nitrogen"
                - "Check permit needs for temporary generators and boilers"
                - "Record the decision with the project manager"
            - name: Mechanical completion walkdown and certificate
              description: |-
                ## Purpose
                Mechanical completion marks the point where construction says a subsystem is built to drawings and tested, and the owner's acceptance carries contract weight. A joint walkdown with construction, commissioning and operations, against a clear checklist, makes sure the certificate means what it says.

                ## Milestones
                1. A mechanical completion checklist agreed with construction.
                2. Joint walkdowns scheduled subsystem by subsystem in priority order.
                3. Punch items raised and categorised during each walkdown.
                4. Mechanical completion certificates signed for the first priority subsystems.

                ## Notes
                Never sign a certificate for a system you have not walked. A signature records a check, not a date.
              priority: high
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Joint walkdowns are completed and mechanical completion certificates signed for the first priority subsystems by the target date."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Agree the mechanical completion checklist with construction"
                - "Schedule the first walkdowns in priority order"
                - "Raise punch items during each walkdown"
                - "Sign certificates only for subsystems walked and accepted"
            - name: Pre-start-up safety review
              description: |-
                ## Purpose
                A pre-start-up safety review is the last formal check that the plant matches its design, hazard study actions are closed, procedures and training are in place and emergency arrangements work. Preparing the evidence before the review team arrives turns a long argument into a short confirmation.

                ## Milestones
                1. The site pre-start-up safety review checklist obtained and the review team named.
                2. Evidence gathered for each item: hazard study close-out, procedures, training records, relief device certificates.
                3. The review held and findings recorded with owners.
                4. Every finding needed before start-up closed and the review signed off.
              priority: high
              deadlineOffsetDays: 170
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A signed pre-start-up safety review with every pre-start finding closed before first feed."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "Get the site pre-start-up safety review checklist"
                - "Confirm the review team with process safety"
                - "Gather evidence against each checklist item"
                - "Close every pre-start finding before first feed"
            - name: Introduction of first feed
              description: |-
                ## Purpose
                The day process fluid first enters the plant is the most watched and most risky day of the project. A dedicated plan with hold points, a staffed control room, extra field operators, vendor support on site and a clear abort route makes it a controlled step rather than an experiment.

                ## Milestones
                1. A first feed plan with sequence, hold points, abort criteria and roles.
                2. Ready for start-up certificates signed for every subsystem in the first feed scope.
                3. A shift rota with extra field operators, engineers and vendor support for the first seventy-two hours.
                4. First feed introduced and the plant held at stable conditions at the first hold point.

                ## Notes
                Write the abort criteria down and brief them. A start-up stopped on a clear rule is a success, not a failure.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "First feed is introduced under a written plan with abort criteria, and the plant reaches its first hold point in stable conditions."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Draft the first feed sequence with hold points"
                - "Write and brief the abort criteria"
                - "Build the extended shift rota for the first seventy-two hours"
                - "Confirm every ready for start-up certificate in scope is signed"
            - name: Performance test run and acceptance
              description: |-
                ## Purpose
                Performance guarantees on capacity, yield, energy use or emissions are usually proven in a formal test run, and payment or penalties depend on the result. Agreeing the procedure, instruments, sampling and calculations with the licensor or contractor before the test avoids a dispute about the numbers afterwards.

                ## Milestones
                1. The performance test procedure agreed in writing, including duration, conditions, instruments and calculations.
                2. Critical instruments calibrated and the laboratory ready for test samples.
                3. The test run completed with data and samples logged.
                4. A test report issued with results compared against each guarantee.

                ## Notes
                Agree in advance what happens if feed composition or ambient conditions move outside the test basis. Correction methods argued after the test rarely end well.
              priority: medium
              deadlineOffsetDays: 240
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A signed performance test report compares measured results against each contractual guarantee using the pre-agreed procedure."
                cadence: one-shot
                effort_hours_estimate: "50"
              tasks:
                - "Extract the performance guarantees from the contract"
                - "Draft the test procedure and send it to the licensor or contractor"
                - "Check calibration of every instrument used in the guarantee calculations"
                - "Issue the test report with each guarantee result"
            - name: Handover to operations and care, custody and control
              description: |-
                ## Purpose
                Transfer of care, custody and control moves responsibility, insurance risk and often warranty start dates from the contractor to the owner. A clear handover package per system, accepted by operations with known exceptions listed, prevents the lingering question of who owns a fault in the first months.

                ## Milestones
                1. A handover package standard agreed: dossier, punch status, deferrals, spares and as-built status.
                2. Handover meetings held for each system with operations and the contractor.
                3. Handover certificates signed with exceptions listed.
                4. Warranty start dates recorded for each package.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every system has a signed handover certificate with exceptions listed and its warranty start date recorded."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Agree the handover package contents with operations"
                - "Schedule handover meetings system by system"
                - "List exceptions on each handover certificate"
                - "Record warranty start dates for each package"
            - name: Commissioning close-out report and final dossier
              description: |-
                ## Purpose
                Months after start-up, someone will need to know how a system was tested, which items were deferred and why a trip setting changed. A close-out report and a complete final dossier, delivered to document control, are the plant's memory of how it was brought into service.

                ## Milestones
                1. All subsystem dossiers complete and indexed.
                2. A close-out report covering scope, timeline, key problems, deferred items and lessons learned.
                3. The report reviewed by operations and the project manager.
                4. The final dossier and report accepted by document control.
              priority: medium
              deadlineOffsetDays: 300
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A reviewed close-out report and a complete indexed dossier are accepted by document control."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Check every subsystem dossier against the index"
                - "Ask the agent to draft the close-out report outline from the lessons register"
                - "Send the draft to operations and the project manager"
                - "Transmit the final dossier to document control"
            - name: First commissioning assignment as a graduate
              description: |-
                ## Purpose
                Six months on a first commissioning posting teaches more than years in an office, but only if you know what to watch and ask. Setting goals for the assignment, keeping a site notebook and getting signatures on the activities you witness turns the posting into recorded competence for professional registration.

                ## Milestones
                1. Three to five learning goals agreed with your supervisor before arrival.
                2. A site notebook kept with daily observations, questions and sketches.
                3. Witnessed activities logged with dates and a supervisor signature.
                4. A short reflection written at the end of the posting for your competence record.

                ## Notes
                Ask to shadow the operator on night shift at least once. Many start-up lessons happen when the senior engineers have gone home.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A signed log of witnessed commissioning activities and an end of posting reflection are added to your competence record."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Agree three to five learning goals with your supervisor"
                - "Start a site notebook on the first day"
                - "Log each witnessed activity and get it signed"
                - "Write the end of posting reflection"
            - name: Vendor commissioning engineer on a client site
              description: |-
                ## Purpose
                As a vendor's engineer you arrive at a site you do not know, to start equipment you know well, under rules that are not yours. Preparing the site requirements, readiness questions and your own service report before travelling means you spend your days commissioning rather than waiting.

                ## Milestones
                1. The client's site induction, permit and medical requirements confirmed before travel.
                2. A readiness questionnaire sent and answered by the client before you leave.
                3. Your start-up checklist and service report template prepared.
                4. A signed service report left with the client at the end of each visit.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Each site visit ends with a signed service report, and the readiness questionnaire was answered before travel."
                cadence: rolling
              tasks:
                - "Ask the client for their site induction and permit requirements"
                - "Send a readiness questionnaire two weeks before travel"
                - "Prepare your service report template"
                - "Get the service report signed before leaving site"
            - name: Owner's commissioning representative on an EPC project
              description: |-
                ## Purpose
                On a lump sum EPC project the contractor commissions and the owner accepts, and the owner's representative must check without taking over. Knowing exactly which certificates you witness, which hold points you own and how to record concerns protects the owner without slowing the contractor unfairly.

                ## Milestones
                1. The contract's commissioning, acceptance and witness clauses summarised.
                2. Owner hold and witness points listed in an inspection plan.
                3. A concerns log kept with dates, references and contractor responses.
                4. Monthly owner commissioning reports issued to the project director.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Owner hold and witness points are listed, a concerns log is maintained, and an owner commissioning report is issued each month."
                cadence: rolling
              tasks:
                - "Summarise the contract commissioning and acceptance clauses"
                - "List owner hold and witness points with the contractor"
                - "Keep the concerns log with references and responses"
                - "Issue the owner commissioning report @recurring(monthly:28)"
            - name: Restart of a unit after a brownfield tie-in
              description: |-
                ## Purpose
                Restarting an existing unit after new equipment has been tied in mixes old habits with new hardware, and operators may not expect the changes. Treating the new and modified sections as a mini commissioning, with their own checks, leak test and updated procedures, prevents the familiar unit from surprising its own crew.

                ## Milestones
                1. New and modified equipment identified and marked on the P&IDs.
                2. Check sheets, leak tests and function tests completed for the modified sections.
                3. Updated operating procedures briefed to every shift.
                4. The unit restarted with modified sections monitored through the first week.

                ## Notes
                The change itself is controlled through management of change. This project is about bringing the changed unit back into service safely.
              priority: medium
              frontmatter:
                mode: building
                output_kind: event-completion
                success_criteria: "The modified sections are tested and briefed to every shift before restart, and the first week of operation is monitored and recorded."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "Mark the new and modified equipment on the P&IDs"
                - "Assign check sheets and tests to the modified sections"
                - "Brief the updated procedures to every shift"
                - "Record a daily check of the modified sections for the first week"
            - name: Commissioning a package skid on a small site
              description: |-
                ## Purpose
                Small firms and small sites still commission packages, a dosing skid, a chiller or a compressor, often with one engineer and no completions team. A light version of the full process (a short checklist, a punch list, a first run record and a simple handover note) keeps the essentials without the overhead.

                ## Milestones
                1. A one-page commissioning checklist for the package, adapted from the vendor manual.
                2. Pre-start checks completed and signed.
                3. First run readings recorded and compared with vendor limits.
                4. A handover note and punch list given to the site owner.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A signed checklist, first run record and handover note with punch list are given to the site owner."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Adapt the vendor manual start-up section into a one-page checklist"
                - "Complete and sign the pre-start checks"
                - "Record first run readings against vendor limits"
                - "Hand the site owner the handover note and punch list"
            - name: Hurricane season and island logistics for commissioning
              description: |-
                ## Purpose
                Commissioning in the Caribbean between June and November has to plan for storms that close ports, airports and sites at short notice, and for spares that are a ship away. A storm plan for partly commissioned systems, with safe states, preservation and a critical spares list held locally, protects the schedule and the equipment.

                ## Milestones
                1. A safe state defined for each subsystem at each commissioning stage.
                2. A storm preparation checklist for temporary equipment, open vessels and loose materials.
                3. A list of critical spares and consumables to hold on the island through the season.
                4. A tested call tree and a plan for restarting commissioning after a storm.

                ## Notes
                Follow the national meteorological service and the site emergency plan. Begin securing equipment at the watch stage, not the warning.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A storm plan with subsystem safe states, a preparation checklist and a locally held critical spares list is in place before the season starts."
                cadence: cyclic
                effort_hours_estimate: "12"
              tasks:
                - "Define a safe state for each subsystem at its current stage"
                - "Write the storm preparation checklist for temporary equipment"
                - "List the critical spares to hold locally"
                - "Review the storm plan before the season opens @recurring(yearly)"
            - name: Start-up troubleshooting playbook
              description: |-
                ## Purpose
                Pump cavitation from blocked strainers, control valves sized for design flow hunting at low rates and trips on transmitters with wrong ranges appear on start-up after start-up. A playbook of symptoms, likely causes and first checks, built from your own and colleagues' experience, speeds up the long nights.

                ## Milestones
                1. Twenty common start-up problems listed with symptoms.
                2. Likely causes and first checks written for each.
                3. The playbook reviewed by an experienced commissioning engineer and an operator.
                4. Copies placed in the control room and commissioning office before first feed.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A reviewed playbook of at least twenty start-up problems with causes and first checks is in the control room before first feed."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "List problems from past start-up logs and lessons registers"
                - "Write symptoms, causes and first checks for each"
                - "Ask an experienced operator to review the playbook"
                - "Place copies in the control room before first feed"
            - name: Commissioning metrics and benchmarking
              description: |-
                ## Purpose
                Experienced commissioning leads judge a project against numbers: check sheets per tag, punch items per system, days from mechanical completion to ready for start-up, start-up trips in the first month. Keeping these metrics across projects lets you plan the next one on evidence rather than optimism.

                ## Milestones
                1. A small set of metrics defined with clear counting rules.
                2. Data collected for the current project.
                3. At least one past project's data gathered for comparison.
                4. A benchmark sheet that the next project's planners can use.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A benchmark sheet with defined metrics for the current project and at least one past project is shared with the planning team."
                cadence: rolling
              tasks:
                - "Define five commissioning metrics with counting rules"
                - "Pull the current project numbers from the completions database"
                - "Find one past project's commissioning close-out report"
                - "Update the benchmark sheet with the latest numbers @recurring(quarterly)"
            - name: Integrated plant start-up as commissioning manager
              description: |-
                ## Purpose
                Leading the commissioning of a whole plant means owning the plan, the people, the safety of live systems and the call on whether to start. Building the experience deliberately, through system lead roles, a mentor who has led a start-up and a record of decisions, prepares you for the role before you are handed it.

                ## Milestones
                1. A development plan with the experience, training and mentoring needed for the role.
                2. At least one complete project worked as a system lead from systemisation to handover.
                3. A mentor who has led a plant start-up meeting with you regularly.
                4. A decision journal from your current project reviewed with the mentor.

                ## Notes
                Start from the **Development plan** template.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A development plan toward commissioning manager is agreed with your mentor, with progress reviewed each quarter."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Write the experience gaps between your current role and commissioning manager"
                - "Ask a commissioning manager to mentor you"
                - "Keep a decision journal through the current project"
                - "Review the development plan with your mentor @recurring(quarterly)"
            - name: Early start-up surveillance and stabilisation
              description: |-
                ## Purpose
                The first ninety days after start-up decide whether a plant settles at design rates or limps along with chronic trips. A surveillance plan of key readings, trip and alarm counts, bad actors and a daily engineering review catches early failures while the vendors and the project team are still available.

                ## Milestones
                1. Key process and equipment readings for surveillance listed with limits.
                2. A daily engineering review held through the first month, then weekly.
                3. Trips, alarm floods and equipment failures logged with causes.
                4. A ninety-day report listing remaining issues with owners.
              priority: medium
              deadlineOffsetDays: 270
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A ninety-day surveillance report with logged trips, failures and causes is issued, with each remaining issue assigned an owner."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "List the key readings to watch with their limits"
                - "Hold the daily engineering review through the first month"
                - "Log every trip and failure with its cause"
                - "Issue the ninety-day report with owners for open issues"
---

# Commissioning and Start-Up

Commissioning is where a design finally meets water, power and process fluid, and where months of schedule can be won or lost in a few weeks. These projects start with the foundations (the phases and vocabulary, an execution plan, system boundaries, a completions database, check sheets, the start-up sequence, the team and the safety rules for live systems), then build the machinery of punch lists, coordination meetings, progress tracking and dossiers, the practical skills of flushing, drying, leak testing and first runs, the decisions on readiness and deferrals, the dated milestones from mechanical completion to performance test, the different seats you may sit in, and the specialist work of leading a full plant start-up.

The repeating rhythm is a daily coordination meeting, weekly punch list, query and progress reviews, monthly preservation rounds, readiness check-ins and lessons learned updates, and a quarterly look back at metrics. The Meeting notes, Metrics log, Risk register, Purchase decision, Operational checklist and Development plan templates pair with the projects that keep a standing record. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
