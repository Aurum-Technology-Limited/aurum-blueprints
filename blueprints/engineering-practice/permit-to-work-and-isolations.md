---
id: engineering-practice.permit-to-work-and-isolations
name: Permit to Work and Isolations
description: "A permit to work practice you can stand behind: the right permit for each job, isolations proven before anyone touches the plant, gas tests that mean something, clean shift handovers and returns to service."
category: business
version: 1.0.0
tags: [engineering-practice, permit-to-work-and-isolations, engineer, permit-to-work, lockout-tagout, energy-isolation, gas-testing, simops]
author: Aurum Technology
starter_structure:
  templates:
    - skills-matrix
    - operational-checklist
    - metrics-log
    - purchase-decision
    - remediation-plan
    - reading-queue
  pillars:
    - name: Engineering Practice
      emoji: "🔧"
      description: "The day-to-day work of practising engineers: each major discipline, process safety and risk studies, FEED, design reviews, commissioning, reliability and maintenance, CAD, simulation and PLC work, project delivery, tenders, reports, ethics and standards, and the Caribbean energy sector from Point Lisas to LNG."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Permit to Work and Isolations
          description: "Working safely under a permit to work system: permit types, energy isolation and lockout, gas testing, simultaneous operations and handover between shifts."
          projects:
            - name: Permit to work fundamentals from HSG250
              description: |-
                ## Purpose
                Engineers sign and receive permits for years without ever reading why the system exists, and it shows in permits treated as paperwork rather than a controlled hand-over of plant. Working through the UK HSE guidance HSG250 and the lockout principles in OSHA 29 CFR 1910.147 gives you the shared logic behind every later project: who controls the plant, who does the work, how hazards are identified, and how the plant is handed back.

                ## Milestones
                1. The life cycle of a permit, from request through issue, suspension and handback, summarised on one page.
                2. The difference between a permit, an isolation certificate and a task risk assessment explained in your own words.
                3. Five common permit failures from published guidance listed, each with the control meant to prevent it.
                4. Three questions about your own site's practice written down and answered by the permit system owner.

                ## Notes
                Guidance explains the principles; your site procedure sets the rules you follow. Read both and note where they differ.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page permit life cycle summary exists and the site permit system owner has answered your three written questions."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Download HSG250 and your site permit to work procedure"
                - "Summarise the permit life cycle from request to handback on one page"
                - "List five common permit failures and the control for each"
                - "Book thirty minutes with the permit system owner to ask your questions"
            - name: Site permit types and when each applies
              description: |-
                ## Purpose
                Sites typically run a general or cold work permit alongside hot work, confined space entry, electrical, excavation, radiography and working at height certificates, and the boundaries between them are where jobs fall through. A one-page map of which permit and which supporting certificates a job needs, drawn from your own procedure, stops the classic mistake of a cold work permit covering grinding in a gas area.

                ## Milestones
                1. Every permit type and supporting certificate in the site procedure listed with its trigger conditions.
                2. A decision chart showing which permit applies to ten common jobs on your unit.
                3. Validity periods, revalidation rules and who may sign each permit type recorded.
                4. The chart checked by an experienced area authority and corrected where it was wrong.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A permit selection chart covering ten real jobs on your unit is checked and initialled by an experienced area authority."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every permit type and certificate named in the site procedure"
                - "Write down ten jobs your unit does often, from pump swaps to vessel entry"
                - "Mark which permit and certificates each job needs and why"
                - "Ask an experienced area authority to check and initial the chart"
            - name: Permit role authorisation and competence sign-off
              description: |-
                ## Purpose
                Permit roles carry personal accountability: the area authority who controls the plant, the isolating authority who applies the isolation, the performing authority who leads the work, and the gas tester. Getting formally authorised for the roles you will actually hold, with the training, assessment and practical sign-offs on record, means you sign permits with the right standing and know exactly where your authority stops.

                ## Milestones
                1. The roles your job requires identified with your supervisor, with their names as used in the site procedure.
                2. Training courses and assessments for each role completed and recorded.
                3. Supervised practical permits completed and signed off by an authorised mentor.
                4. Your authorisation entered on the site register, with its scope and expiry date known.

                ## Notes
                Start from the **Skills matrix** template to track each role, its training, practical sign-offs and expiry.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: deliverable
                success_criteria: "Your name is on the site permit authorisation register for each role your job needs, with scope and expiry recorded."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Agree with your supervisor which permit roles your job needs"
                - "Book the permit and isolation training courses for those roles"
                - "Complete supervised practical permits with an authorised mentor"
                - "Check your authorisation scope and expiry against the register @recurring(yearly)"
            - name: Hazardous energy inventory for your unit
              description: |-
                ## Purpose
                Pressure, heat, electricity and toxic contents are obvious; stored energy in springs, accumulators, suspended loads, trapped liquid between valves and back-feed from a second supply are the ones that hurt people. A written inventory of every energy source on your unit, by equipment item, is the base every isolation plan you write will draw from.

                ## Milestones
                1. Every energy type on the unit listed: electrical, pressure, thermal, chemical, mechanical, gravitational, stored and radiation.
                2. Each major equipment item matched to its energy sources and its normal isolation points.
                3. Hidden energy sources such as accumulators, heat tracing, UPS feeds and cross-connections flagged.
                4. The inventory walked down on site with an operator and corrected.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An energy inventory listing every source and isolation point for the unit's major equipment has been walked down and corrected with an operator."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Pull the P&IDs, single-line diagrams and equipment list for your unit"
                - "Ask the agent to draft an energy inventory table from the equipment list"
                - "Flag hidden sources such as accumulators, back-feeds and heat tracing"
                - "Walk the unit with an operator and correct the inventory"
            - name: Isolation methods and the isolation hierarchy
              description: |-
                ## Purpose
                Single closed valves, double block and bleed, spades or blinds, and removed spools with blanks fitted give very different levels of protection, and the choice should depend on the hazard, the duration and the consequence of the isolation failing. Learning the hierarchy set out in guidance such as HSG253, and your site's rules for which method each fluid and pressure demands, lets you challenge an isolation that is weaker than the job needs.

                ## Milestones
                1. The main isolation methods described with a sketch of each, from single valve to positive isolation.
                2. The site rules that set the minimum method by fluid, pressure, temperature and duration summarised.
                3. Three real isolation certificates from your unit reviewed against those rules.
                4. One case where the method was weaker than the rules required raised with the area authority.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Sketches of each isolation method and a summary of site minimum rules exist, and three past isolations have been reviewed against them."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Read the isolation sections of HSG253 and your site standard"
                - "Sketch single valve, double block and bleed and positive isolation"
                - "Review three closed isolation certificates against the site rules"
                - "Raise any isolation weaker than the rules with the area authority"
            - name: Personal lockout kit and lock register
              description: |-
                ## Purpose
                Your personal lock is the guarantee that nobody can re-energise the plant you are working on, but only if the lock is yours alone, the key never leaves you and the kit is complete. Assembling a proper kit of personal locks, hasps, tags, valve covers and a test device, and recording it on the site lock register, takes an afternoon and removes excuses on the day.

                ## Milestones
                1. Personal locks issued in your name, each with a single key and a register entry.
                2. A kit bag holding hasps, tags, ball valve and gate valve covers, and a plug lockout.
                3. Your name, photo or ID on each tag in line with the site standard.
                4. A quarterly check of locks and keys booked.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A complete personal lockout kit is assembled and every lock in it appears in the site lock register under your name."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the permit office how personal locks are issued and registered"
                - "Assemble hasps, tags and valve covers for the equipment you work on"
                - "Label each tag with your name and ID as the site standard requires"
                - "Check every lock, key and tag in your kit against the register @recurring(quarterly)"
            - name: Isolation certificate and register set-up
              description: |-
                ## Purpose
                When a permit is closed but the isolation stays in, or two jobs share one set of isolation points, the isolation needs a life of its own. Setting up, or learning, the isolation certificate and register for your area means every lock, spade and disconnected supply can be traced to the permits relying on it and nobody removes an isolation another crew still needs.

                ## Milestones
                1. The site isolation certificate format understood, including how it links to one or more permits.
                2. A register for the area listing each live isolation, its points, its certificate number and the permits it protects.
                3. A clear rule written for who may remove an isolation and what must be checked first.
                4. The register reconciled once against the physical locks and tags on site.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An area isolation register exists, links each isolation to its permits, and has been reconciled once against the locks on site."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Collect the blank isolation certificate and the current area register"
                - "List every live isolation with its points and linked permits"
                - "Write the removal rule and get it agreed with the area authority"
                - "Walk the area and reconcile the register against locks and tags"
            - name: Gas testing competence and detector use
              description: |-
                ## Purpose
                Taken at the wrong height, through the wrong sample line, or with a detector that missed its bump test, a gas test gives false comfort that can kill. Becoming competent as an authorised gas tester, knowing which gases your detectors read, how heavier and lighter gases behave, and how often the site requires retests, makes your signature on the test record mean something.

                ## Milestones
                1. Gas tester training completed and the assessment passed.
                2. The detectors used on site identified, with the gases and sensors each one carries.
                3. Testing positions, retest frequencies and acceptance limits from the site procedure summarised.
                4. Five supervised gas tests completed and recorded, including one confined space test at several heights.

                ## Notes
                Acceptance limits come from the site procedure and the detector manufacturer, never from memory. Carry the written limits with you.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You hold a current gas tester authorisation and five supervised gas tests are recorded in the site log."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Book the site gas tester course and assessment"
                - "List the detectors on site and the gases each sensor reads"
                - "Summarise testing positions, retest intervals and site limits on a card"
                - "Complete five supervised gas tests and record them in the log"
            - name: Stop-work authority and permit suspension
              description: |-
                ## Purpose
                Every person on site has the right to stop a job that has become unsafe, but most people have never practised saying it or know what happens to the permit afterwards. Knowing exactly how suspension works on your site, who you tell, how the worksite is left and what is needed to restart, means you can act in the moment rather than hesitate.

                ## Milestones
                1. The site rules for stopping work and suspending a permit summarised, including general alarm suspension.
                2. The steps to make a worksite safe on suspension written as a short list.
                3. The restart conditions, including revalidation and fresh gas tests, recorded.
                4. One real or rehearsed stop-work conversation completed and reflected on.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written summary of stop, suspension and restart rules exists and you have rehearsed a stop-work call with your supervisor."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read the stop-work and suspension sections of the site procedure"
                - "Write the steps for leaving a suspended worksite safe"
                - "Note what is needed before a suspended permit can restart"
                - "Rehearse a stop-work call with your supervisor using a real job"
            - name: Daily permit planning meeting
              description: |-
                ## Purpose
                Permits issued in a rush at the start of shift are the ones with missed isolations and clashing jobs. A short daily meeting where operations, maintenance and contractors walk through tomorrow's permits, their isolations and their neighbours catches conflicts before the paperwork is printed and gives the area authority time to prepare.

                ## Milestones
                1. A fixed daily slot agreed with operations and maintenance, with a standing attendee list.
                2. A one-page agenda covering new permits, live permits, isolations needed and conflicts.
                3. Each permit for the next day checked for isolation readiness before the meeting ends.
                4. Conflicts and holds recorded with an owner and resolved before issue.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A daily permit meeting runs to a written agenda and its record shows conflicts found and resolved before permits are issued."
                cadence: rolling
              tasks:
                - "Agree a daily permit meeting time with operations and maintenance"
                - "Draft a one-page agenda for new permits, live permits and conflicts"
                - "Review tomorrow's permit requests and their isolation readiness @recurring(daily)"
                - "Record conflicts and holds with an owner and a resolution"
            - name: Live permit board and worksite walk-round
              description: |-
                ## Purpose
                Permit boards in the control room say what should be happening; the plant shows what is. A weekly walk-round of every live permit, comparing the board, the permit copy at the worksite and the job in front of you, finds expired permits, crews that have drifted from the scope and worksites left unattended mid-job.

                ## Milestones
                1. The live permit board or electronic list matching the permits physically at worksites.
                2. Each live worksite visited weekly with the permit copy checked on display.
                3. Findings recorded by permit number with the action taken.
                4. Repeat findings raised at the permit planning meeting.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly walk-round records exist for at least eight weeks, each listing every live permit visited and any finding by permit number."
                cadence: rolling
              tasks:
                - "Print or export the live permit list for your area"
                - "Walk every live worksite and check the permit is displayed and in date @recurring(weekly:fri)"
                - "Record each finding against its permit number"
                - "Take repeat findings to the next permit planning meeting"
            - name: Long-term isolation review
              description: |-
                ## Purpose
                Isolations left in for weeks or months, on mothballed equipment, awaiting spares or covering a defect, quietly become part of the plant and are forgotten until someone removes a lock they do not understand. A monthly review of every isolation older than the site threshold keeps each one owned, justified and still physically in place.

                ## Milestones
                1. Every isolation older than the site threshold listed with its owner and reason.
                2. Each long-term isolation inspected on site for lock, tag and spade condition.
                3. Isolations no longer needed removed through the proper process.
                4. Remaining long-term isolations reported to the area manager with a target removal date.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly long-term isolation report lists every isolation over the site threshold with owner, reason, condition and target removal date."
                cadence: rolling
              tasks:
                - "Ask the permit office what age the site counts as long-term"
                - "Pull every isolation older than that threshold from the register @recurring(monthly:9)"
                - "Inspect each long-term isolation on site for locks, tags and spades"
                - "Send the monthly long-term isolation list to the area manager"
            - name: Shift handover of live permits and isolations
              description: |-
                ## Purpose
                Many of the worst permit incidents, including Piper Alpha, began with information about a removed valve or open isolation lost between shifts. A structured handover of every live permit, suspended job and isolation, done face to face at the board with the written log, closes the gap where a night shift restarts plant that the day shift left open.

                ## Milestones
                1. A handover checklist covering live, suspended and closed permits, isolations and overrides.
                2. Handover done face to face at the permit board, not only by log entry.
                3. Both outgoing and incoming authorities signing the handover record.
                4. Any unclear item resolved before the outgoing person leaves site.

                ## Notes
                Start from the **Operational checklist** template to build the handover sheet for your unit.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every shift handover for a month is recorded on the checklist and signed by both outgoing and incoming permit authorities."
                cadence: rolling
              tasks:
                - "Draft a handover checklist for permits, isolations and overrides"
                - "Agree with the shift team that handover happens at the permit board"
                - "Hand over every live and suspended permit face to face @recurring(daily)"
                - "Resolve any unclear item before the outgoing authority leaves"
            - name: Field verification audits of active permits
              description: |-
                ## Purpose
                Desk audits of closed permits find missing signatures; field audits of live ones find the real problems, such as a spade fitted on the wrong flange, a gas test that is six hours old or a fire watch who has gone for lunch. A weekly field audit of one live permit, using the same questions each time, builds a picture of how the system actually performs.

                ## Milestones
                1. A standard set of fifteen or so field audit questions agreed with the permit system owner.
                2. One live permit audited in the field each week, from isolation points to worksite controls.
                3. Findings scored and fed to the people involved on the day, constructively.
                4. Monthly summary of findings shared with the area team.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least twelve weekly field audits are recorded on the standard question set, with findings shared each month."
                cadence: rolling
              tasks:
                - "Agree a standard field audit question set with the permit owner"
                - "Audit one live permit in the field from isolation to worksite @recurring(weekly:wed)"
                - "Talk through findings with the performing authority on the day"
                - "Share a summary of audit findings with the area team @recurring(monthly:27)"
            - name: Key safe and group lockbox control
              description: |-
                ## Purpose
                Group isolations depend on the lockbox: the isolation keys go in, each worker applies a personal lock, and the plant cannot be de-isolated until every lock is off. If spare keys circulate, boxes go unnumbered or keys are left in the control room drawer, the whole arrangement fails silently. A monthly check of key safes and lockboxes keeps the chain intact.

                ## Milestones
                1. Every key safe and group lockbox in the area numbered and listed.
                2. Spare isolation keys accounted for and held under the site key control rule.
                3. Each lockbox in use matched to its isolation certificate.
                4. Monthly check results recorded, with lost keys reported and locks replaced.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All key safes and lockboxes in the area are numbered and a monthly check log shows every box in use matched to its certificate."
                cadence: rolling
              tasks:
                - "Number and list every key safe and lockbox in the area"
                - "Find out where spare isolation keys are held and who controls them"
                - "Check each lockbox in use against its isolation certificate @recurring(monthly:17)"
                - "Report any lost key and arrange the lock change"
            - name: Gas detector calibration and bump test records
              description: |-
                ## Purpose
                Portable and fixed detectors drift, sensors poison and alarms fail, and the gas test record is only as good as the detector behind it. Keeping a monthly check that every detector used for permit gas testing has a current calibration and daily bump test record means an auditor, or an investigator, finds the evidence in order.

                ## Milestones
                1. Every portable detector used for permit gas tests listed by serial number.
                2. Calibration due dates and bump test logs checked against the manufacturer's interval.
                3. Overdue or failed detectors removed from use and tagged.
                4. A monthly record of the check kept with the gas testing records.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly detector check for six months shows every permit gas detector in calibration, with any failed unit tagged out of use."
                cadence: rolling
              tasks:
                - "List every portable gas detector used for permit testing by serial number"
                - "Check calibration dates and bump test logs for each detector @recurring(monthly:14)"
                - "Tag and remove any overdue or failed detector from use"
                - "File the monthly check with the gas testing records"
            - name: Overrides and inhibits register under permit
              description: |-
                ## Purpose
                Jobs often need a trip inhibited, a fire and gas detector overridden or an interlock bypassed, and each one removes a layer of protection for the rest of the plant while it stays in. A register reviewed every week, with each override linked to its permit, its risk assessment and its expiry, stops temporary defeats becoming permanent.

                ## Milestones
                1. Every active override and inhibit listed with its permit number and approver.
                2. Each entry carrying a risk assessment and an expiry date.
                3. Expired overrides removed or re-approved, never silently extended.
                4. Weekly review outcome recorded and sent to the shift supervisor.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly override register review is recorded for eight weeks with no active override lacking a linked permit, approver and expiry."
                cadence: rolling
              tasks:
                - "Export the active overrides and inhibits from the control system log"
                - "Match each override to its permit, approver and risk assessment"
                - "Review the register and chase every expired override @recurring(weekly:mon)"
                - "Send the review outcome to the shift supervisor"
            - name: Permit closure and return to service checks
              description: |-
                ## Purpose
                Handback is the moment the plant goes from safe for people to live again, and it is where tools are left inside vessels, flanges are left loose and spades stay in or come out too early. A consistent closure check, done at the worksite with the performing authority before the area authority signs, makes the return to service a deliberate act.

                ## Milestones
                1. A closure checklist covering worksite condition, people clear, tools removed and equipment boxed up.
                2. De-isolation sequence checked against the isolation certificate, point by point.
                3. Leak test or function test requirements recorded on the permit before handback.
                4. Every closure for a month done with the checklist and a site visit.

                ## Notes
                Start from the **Operational checklist** template for the closure sheet, and keep it short enough to use at the worksite.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every permit closed in your area for a month has a completed closure checklist and a recorded site visit before sign-off."
                cadence: rolling
              tasks:
                - "Draft a closure checklist with people, tools, flanges and housekeeping"
                - "Agree with the area authority that closure needs a worksite visit"
                - "Check de-isolation point by point against the isolation certificate"
                - "Record the leak or function test result on the permit before handback"
            - name: Monthly permit system performance metrics
              description: |-
                ## Purpose
                Unmeasured permit systems drift. Tracking a handful of numbers each month, such as permits issued, audit findings per permit, long-term isolations, overdue overrides and permit-related incidents, shows whether the system is improving and gives the area meeting something concrete to discuss.

                ## Milestones
                1. Five to seven indicators chosen and defined with the permit system owner.
                2. A monthly log of the indicators kept for the area.
                3. A short trend comment added each month naming the indicator that moved most.
                4. A quarterly summary presented at the area safety meeting.

                ## Notes
                Start from the **Metrics log** template. Keep the list short: a number nobody acts on is noise.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A metrics log with at least six months of five or more permit indicators exists, with a quarterly summary presented to the area team."
                cadence: rolling
              tasks:
                - "Choose five to seven permit indicators with the permit system owner"
                - "Update the permit metrics log for the area @recurring(monthly:24)"
                - "Write one line on which indicator moved most and why"
                - "Present the quarterly permit metrics summary at the safety meeting @recurring(quarterly)"
            - name: Annual permit to work system audit
              description: |-
                ## Purpose
                Guidance such as HSG250 expects the permit system to be audited regularly against its own procedure, and an annual audit is where systemic weaknesses show: training lapses, forms nobody understands, isolation rules ignored for one equipment type. Running or supporting the yearly audit, with a sample of closed permits and field interviews, gives a defensible picture of the system.

                ## Milestones
                1. Audit scope, sample size and protocol agreed with the permit system owner.
                2. A sample of closed permits and isolation certificates reviewed against the procedure.
                3. Interviews held with area authorities, performers and contractors.
                4. An audit report with ranked findings and owned actions issued.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "An annual audit report covering a permit sample, field interviews and ranked findings with named owners is issued to site management."
                cadence: cyclic
              tasks:
                - "Agree the audit scope and permit sample with the system owner @recurring(yearly)"
                - "Review the sampled permits and isolation certificates against the procedure"
                - "Interview area authorities, performers and contractor supervisors"
                - "Issue the audit report with ranked findings and owned actions"
            - name: Writing isolation plans from P&IDs
              description: |-
                ## Purpose
                An isolation plan written at a desk from the P&ID, then proven on site, is the core skill of this area. Marking up the drawing with every valve, spade, drain, vent and electrical point, choosing the method for each, and setting the isolation and de-isolation sequence turns the energy inventory into a plan another authority can check.

                ## Milestones
                1. Three isolation plans drafted on marked-up P&IDs for real jobs, each listing points, method and sequence.
                2. Drain and vent routes and the means of proving zero energy shown on each plan.
                3. Each plan checked by an experienced isolating authority, with corrections understood.
                4. The final plan walked down on site before isolation.

                ## Notes
                Use the latest drawing revision, and walk the line: drawings are often wrong about valve positions and small-bore tappings.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Three isolation plans for real jobs are drafted on marked-up P&IDs, checked by an authorised isolator and walked down on site."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Get the current revision P&ID for an upcoming maintenance job"
                - "Mark every isolation, drain and vent point and the method for each"
                - "Write the isolation and de-isolation sequence beside the drawing"
                - "Ask an authorised isolator to check the plan and walk it down with you"
            - name: Electrical isolation and proving dead
              description: |-
                ## Purpose
                Electrical isolation follows its own rules: switch off, isolate at the correct point, lock, test the tester, prove dead at the point of work, test the tester again, and earth where required. Standards such as BS EN 50110, NFPA 70E and OSHA lockout rules set the frame, and the site electrical safety rules decide who may do each step. Knowing the sequence lets a mechanical or process engineer request the right isolation and check it before work.

                ## Milestones
                1. The electrical isolation sequence from your site safety rules written step by step.
                2. The difference between isolation for mechanical work and electrical work on a motor explained.
                3. A proving dead demonstration witnessed with the authorised electrical person.
                4. The electrical permit or sanction forms used on site understood and filed with notes.

                ## Notes
                Only authorised electrical persons isolate and prove dead. Your part is to request, witness and check the paperwork matches the plant.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written electrical isolation sequence exists and you have witnessed a full prove-dead with an authorised electrical person."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Read the site electrical safety rules on isolation and proving dead"
                - "Write the isolation sequence step by step in your own words"
                - "Ask the authorised electrical person to let you witness a prove-dead"
                - "File the electrical permit forms with notes on each section"
            - name: Hot work permit controls
              description: |-
                ## Purpose
                Welding, grinding and cutting near hydrocarbons is where permits are most tested. Controls such as removing combustibles, covering drains, continuous gas monitoring, a trained fire watch who stays after work ends, and habitat or spark containment each have a reason, and an engineer who understands them can judge whether a hot work permit is truly safe to sign.

                ## Milestones
                1. The site hot work controls listed with the hazard each one controls.
                2. The fire watch duties, including the post-work watch period, written down.
                3. Two hot work worksites inspected against the permit conditions.
                4. One condition missing in practice raised and corrected.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A list of hot work controls with their purpose exists and two live hot work sites have been checked against permit conditions."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the site hot work controls and the hazard each controls"
                - "Write down the fire watch duties and post-work watch period"
                - "Inspect two live hot work sites against their permit conditions"
                - "Raise any missing control with the performing authority"
            - name: Confined space entry permits and rescue plans
              description: |-
                ## Purpose
                Confined spaces kill would-be rescuers as often as entrants, and the permit only works if isolation, ventilation, atmosphere testing, a standby person and a practised rescue plan are all in place. Learning the entry certificate, the rescue arrangements and the testing pattern for vessels, columns and pits on your site prepares you to plan and check entries properly.

                ## Milestones
                1. The site confined space entry certificate and its supporting isolation and gas test sections understood.
                2. A rescue plan written for one real vessel, covering equipment, people and access.
                3. A rescue drill witnessed or taken part in.
                4. Continuous monitoring and re-test requirements recorded on a pocket card.

                ## Notes
                Never plan an entry where the only rescue is to call emergency services. The rescue team and equipment must be at the entry point before anyone goes in.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written rescue plan for one real vessel exists and you have taken part in or witnessed a confined space rescue drill."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Read the site confined space procedure and entry certificate"
                - "Choose one vessel on your unit and list its entry points and hazards"
                - "Write a rescue plan for that vessel with equipment and people named"
                - "Arrange to take part in or witness a rescue drill"
            - name: Excavation and ground disturbance permits
              description: |-
                ## Purpose
                Digging on a plant site risks buried cables, process lines, earthing grids and fire water mains that may not be where the drawings say. Knowing how the excavation permit works, from drawing searches and cable locating to hand digging zones, shoring and spoil control, lets you plan civil work without the shock of striking a live service.

                ## Milestones
                1. The excavation permit and its drawing search and service locating steps summarised.
                2. Buried services for one planned excavation identified from drawings and a locating survey.
                3. Hand dig zones, shoring needs and barriers marked on the job plan.
                4. Drawing errors found during the dig recorded for the as-built record.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "One excavation plan shows buried services, hand dig zones and shoring, and any drawing errors found have been sent for as-built correction."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Read the excavation permit section of the site procedure"
                - "Pull underground services drawings for one planned excavation"
                - "Arrange a cable and pipe locating survey before digging"
                - "Mark hand dig zones and shoring needs on the job plan"
            - name: Task risk assessment behind a permit
              description: |-
                ## Purpose
                The permit describes the plant hazards; the task risk assessment describes the job, step by step, with what could go wrong at each one. A permit with a generic assessment copied from the last job hides the hazards that are new this time, such as a different lifting arrangement or a wind direction carrying vapour to the welder.

                ## Milestones
                1. The site task risk assessment format understood, with steps, hazards and controls.
                2. Three assessments written for real jobs with the crew who will do them.
                3. Controls from each assessment transferred onto the permit where they belong.
                4. One assessment reviewed after the job for what it missed.

                ## Notes
                Write the assessment on the site form, with the crew rather than for them, and at the worksite rather than the office.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three task risk assessments written with the crews are attached to live permits, and one has a post-job review recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Get the site task risk assessment form and a good example"
                - "Write an assessment for a real job with the crew at the worksite"
                - "Transfer the key controls onto the permit conditions"
                - "Review one finished job against its assessment and note what it missed"
            - name: Line breaking and first break of containment
              description: |-
                ## Purpose
                Opening a flange or removing a valve for the first time after isolation is where residual pressure, trapped liquid and toxic contents meet the fitter's face. Learning how lines are drained, vented, purged and proven before the first bolt is cracked, and how the first break is controlled, is essential for anyone who plans or supervises mechanical work on process plant.

                ## Milestones
                1. The site rules for draining, venting, purging and proving zero pressure summarised.
                2. The first break procedure, including bolt sequence, position and PPE, written down.
                3. Two first breaks witnessed with notes on how residual contents were confirmed.
                4. A checklist drafted for planning a first break on your unit.
              priority: high
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A first break checklist for your unit exists and you have witnessed two first breaks with notes on proving zero energy."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Read the site rules on draining, venting and purging before line breaks"
                - "Write down the first break bolt sequence and body position rules"
                - "Witness two first breaks and note how residual contents were proven"
                - "Draft a first break planning checklist for your unit"
            - name: Spade and blind register for positive isolation
              description: |-
                ## Purpose
                Every spade fitted for positive isolation must come out before start-up, and every spool removed must go back with the right gasket. A spade and blind register, with numbered tags, locations on the drawing and a weekly reconciliation, is the only reliable way to know that the plant is boxed up as it should be, especially when dozens are fitted.

                ## Milestones
                1. A numbered register of spades, blinds and removed spools with location, rating and gasket type.
                2. Numbered tags fitted to every spade in the field.
                3. Weekly reconciliation of register against field during busy periods.
                4. All spades accounted for and signed off before start-up.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A spade register exists where every spade has a numbered tag and location, and a weekly reconciliation is recorded while spades are in."
                cadence: rolling
              tasks:
                - "Set up a numbered spade and blind register with location and rating"
                - "Arrange numbered tags for every spade fitted in the field"
                - "Reconcile the spade register against the field @recurring(weekly:thu)"
                - "Sign off every spade as removed before start-up"
            - name: Worksite permit briefing to the crew
              description: |-
                ## Purpose
                Signed in the control room and never explained at the worksite, a permit protects nobody. A short, specific briefing at the job, covering the isolations, the gas test, the limits of the job, the emergency arrangements and what would make the crew stop, turns the permit from a document into a shared understanding.

                ## Milestones
                1. A five-point briefing structure written for your site's permits.
                2. Five briefings delivered at the worksite with the crew signing the permit.
                3. Feedback from a crew member or supervisor on one briefing.
                4. The briefing adjusted for contractors new to the site.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Five worksite permit briefings are delivered to the five-point structure, with crew signatures on each permit."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a five-point permit briefing structure for your site"
                - "Deliver the briefing at the worksite for your next permit"
                - "Ask one crew member what was unclear in the briefing"
                - "Adjust the briefing for contractors who are new to the site"
            - name: Choosing an electronic permit to work system
              description: |-
                ## Purpose
                Paper permits are hard to audit, hard to conflict-check and easy to lose, and many sites now weigh an electronic permit to work system. Choosing well means comparing vendors on isolation management, conflict checking, offline use in the field, integration with maintenance systems and the effort to configure your procedure, not only on price.

                ## Milestones
                1. Requirements written with operations, maintenance and the permit system owner.
                2. Three or four systems shortlisted, each scored against the same criteria.
                3. Site visits or reference calls held with two current users.
                4. A recommendation with cost, rollout effort and risks presented to the decision maker.

                ## Notes
                Start from the **Purchase decision** template. A poor procedure in software is still a poor procedure: fix the process first.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recommendation scoring at least three electronic permit systems against written requirements is presented and the decision recorded."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Write permit system requirements with operations and maintenance"
                - "Shortlist three or four electronic permit systems"
                - "Score each system against the same requirement list"
                - "Hold reference calls with two sites using the leading options"
            - name: Permit conflict checks across one area
              description: |-
                ## Purpose
                Two permits can each be safe alone and dangerous together: hot work downwind of a line break, a crane lift over a confined space entry, or an isolation one crew relies on that another job needs removed. A simple conflict matrix for your area, applied at every issue, catches these interactions before they happen.

                ## Milestones
                1. A matrix of permit types and job activities showing which combinations need extra controls or are forbidden.
                2. The matrix applied to a week of real permits, with conflicts recorded.
                3. The matrix agreed by the area authority and kept at the permit desk.
                4. One conflict caught and resolved because of the matrix.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A conflict matrix for the area is agreed by the area authority and has been applied to at least a week of permits with results recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the permit types and activities common in your area"
                - "Draft a matrix of combinations needing extra controls or forbidden"
                - "Apply the matrix to a week of real permits and note conflicts"
                - "Agree the matrix with the area authority and post it at the desk"
            - name: Isolation valve integrity testing
              description: |-
                ## Purpose
                Valves shown closed on the panel may still pass, and isolations built on valves that let by are the most common cause of pressure found behind a closed flange. Setting up a way to test isolation integrity, by bleeding down and monitoring pressure build-up between barriers, and recording valves that pass for repair, makes the isolation method honest.

                ## Milestones
                1. The site method for testing isolation integrity written down, including how long to monitor.
                2. Integrity tests recorded for isolations on three real jobs.
                3. A list of valves found passing raised as maintenance defects.
                4. Passing valves marked so that isolations do not rely on them until repaired.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Integrity test results for three real isolations are recorded and every passing valve found is raised as a defect."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Find the site method for testing isolation integrity"
                - "Record a bleed-down and pressure monitoring test on three jobs"
                - "Raise every passing isolation valve as a maintenance defect"
                - "Flag passing valves on the isolation drawings until repaired"
            - name: Pre-approved isolation library for repeat jobs
              description: |-
                ## Purpose
                The same pumps, filters and exchangers get isolated again and again, and each time someone redraws the plan from scratch, sometimes missing a point the last person found. A library of checked, pre-approved isolation plans for repeat jobs saves hours and carries the lessons forward, provided each plan is checked against the current drawing before use.

                ## Milestones
                1. The ten most frequent isolations on your unit identified from the permit record.
                2. A standard isolation plan written and approved for each of them.
                3. A rule that each plan is checked against the current drawing and plant before use.
                4. A quarterly review of the library for drawing revisions and plant changes.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A library of ten approved isolation plans exists, each with a revision date and a recorded quarterly review."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Pull a year of permits and find the ten most repeated isolations"
                - "Ask the agent to draft standard plan layouts from the past isolation certificates"
                - "Get each standard plan checked and approved by an authorised isolator"
                - "Review the isolation library against drawing revisions @recurring(quarterly)"
            - name: Isolation incident case studies
              description: |-
                ## Purpose
                Piper Alpha, Pasadena, and countless less famous incidents show the same few failures: lost handover information, a valve that was not where it seemed, an isolation removed early. Reading one case study a month, with a note on how your own site would have caught it, builds a judgement that procedure alone cannot give.

                ## Milestones
                1. A list of twelve isolation and permit case studies from public investigation bodies.
                2. One case study read and noted each month.
                3. For each, a short note on which of your site's controls would have stopped it.
                4. Two of the best cases shared at a toolbox talk or safety meeting.

                ## Notes
                Start from the **Reading queue** template. Public investigation reports from bodies such as the US Chemical Safety Board are free and detailed.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Notes on at least six permit and isolation case studies exist, and two have been presented to colleagues."
                cadence: rolling
              tasks:
                - "List twelve permit and isolation case studies from investigation bodies"
                - "Read one case study and note how your site would have caught it @recurring(monthly:28)"
                - "Pick two cases to present at a toolbox talk"
                - "Present one case study at the area safety meeting"
            - name: Site permit procedure gap analysis
              description: |-
                ## Purpose
                Procedures written fifteen years ago often lag behind current guidance on isolation standards, electronic permits, SIMOPS and contractor competence. Comparing your site procedure clause by clause with HSG250, HSG253 and your company standard, then proposing changes through the proper route, turns field frustrations into an improved system.

                ## Milestones
                1. A clause-by-clause comparison of the site procedure with current guidance.
                2. Gaps ranked by consequence and ease of fix.
                3. Proposed changes written and routed through the site's document change process.
                4. Agreed changes tracked to issue of a revised procedure.

                ## Notes
                Start from the **Remediation plan** template to track each gap from finding to revised procedure.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A ranked gap list against current guidance is submitted through the document change process and its status recorded."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Get the current site procedure and the latest HSG250 and HSG253"
                - "Compare the procedure clause by clause and list the gaps"
                - "Rank each gap by consequence and ease of fix"
                - "Submit proposed changes through the document change process"
            - name: Permit office for a turnaround peak
              description: |-
                ## Purpose
                During a turnaround a permit office that normally issues twenty permits a day may need to issue two hundred, with contractor crews who do not know the site. Planning the permit office itself, with extra issuers, a pre-printed permit pack per job, isolation teams and a conflict check desk, decides whether the first morning of the shutdown starts on time or in a queue.

                ## Milestones
                1. Expected daily permit numbers estimated from the turnaround job list.
                2. Permit issuers, isolators and gas testers rostered for each shift.
                3. Permit packs and isolation plans prepared for every pre-planned job.
                4. The permit office layout, flow and conflict check desk tested in a dry run.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A turnaround permit office runs with rostered issuers and prepared permit packs, and permit queue times on day one are recorded."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Estimate daily permit numbers from the turnaround job list"
                - "Roster permit issuers, isolators and gas testers for each shift"
                - "Prepare permit packs and isolation plans for each pre-planned job"
                - "Run a dry run of the permit office flow before the shutdown"
            - name: Client or regulator permit audit preparation
              description: |-
                ## Purpose
                When a client, insurer or safety regulator announces an audit of the permit system, they will sample permits, interview people and walk live worksites. Preparing honestly, by self-auditing first, fixing what can be fixed and having the records ready, gives a better result than a scramble and shows the system as it really works.

                ## Milestones
                1. Audit scope, dates and the auditor's protocol confirmed in writing.
                2. A self-audit of a recent permit sample completed with findings fixed or explained.
                3. Records ready: procedure, authorisation register, audits, metrics and training.
                4. The audit hosted, findings recorded and an action plan agreed.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The external permit audit is hosted with records ready, and an action plan for every finding is agreed within two weeks of the audit."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Confirm the audit scope, dates and protocol with the auditor"
                - "Self-audit twenty recent permits against the procedure"
                - "Gather the procedure, authorisation register, audits and training records"
                - "Agree an action plan for each audit finding"
            - name: Planned high-voltage outage isolation
              description: |-
                ## Purpose
                Planned outages on a high-voltage switchboard or substation affect several units at once, need switching programmes written and checked in advance, and often involve the utility or a second site. Preparing the isolation, earthing and sanction-to-work arrangements in advance, with every affected load listed, avoids a rushed switching sequence on the day.

                ## Milestones
                1. Affected loads, back-feeds and standby supplies listed with operations.
                2. A switching programme written by the authorised electrical person and independently checked.
                3. Process units' shutdown or changeover plans agreed for the outage window.
                4. The outage completed and the restoration sequence recorded.

                ## Notes
                Switching programmes are written and executed only by authorised electrical persons. Your role is the process side: loads, timing and process safety during the outage.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A checked switching programme and agreed process plans exist before the outage, and the restoration sequence is recorded afterwards."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "List every load and back-feed affected by the planned outage"
                - "Ask the authorised electrical person for the draft switching programme"
                - "Agree process shutdown or changeover plans for the outage window"
                - "Record the restoration sequence once supplies are back"
            - name: First vessel entry after a shutdown
              description: |-
                ## Purpose
                The first entry into a column, reactor or tank after it has been emptied and opened is the highest risk confined space event of the year. Preparing it as a dated event, with isolation by positive means, cleaning and ventilation history, repeated gas tests and a rescue team standing by, means the first person in is protected by evidence, not assumption.

                ## Milestones
                1. Positive isolation of every connection confirmed against the isolation certificate.
                2. Cleaning, steaming or purging history recorded with the latest gas test results.
                3. Rescue team, equipment and communication tested at the manway.
                4. Entry permit issued, the first entry made and continuous monitoring logged.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first entry is made under a permit showing positive isolation, a gas test record and a rescue team in place, with monitoring logged."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Check every vessel connection is positively isolated"
                - "Collect the cleaning and purging history and latest gas tests"
                - "Test the rescue team, equipment and radios at the manway"
                - "Log continuous monitoring readings during the first entry"
            - name: General alarm drill with permit suspension
              description: |-
                ## Purpose
                When the general alarm sounds, every permit should be suspended and every worksite made safe, and afterwards each one must be revalidated before work restarts. A planned drill that tests the whole cycle, from alarm to muster to restart, often reveals worksites left with open flanges or hot work equipment live.

                ## Milestones
                1. Drill objectives and the permit-related checks agreed with the emergency coordinator.
                2. During the drill, observers at three worksites recording what was left in place.
                3. Every suspended permit revalidated before restart, with fresh gas tests where needed.
                4. Lessons recorded and shared with the area team.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A drill report records worksite condition at three permits during the alarm and confirms every permit was revalidated before restart."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Agree permit checks for the next drill with the emergency coordinator"
                - "Place observers at three live worksites for the drill"
                - "Check every suspended permit is revalidated before restart"
                - "Write up lessons from the drill for the area team"
            - name: Reinstatement and leak test after major isolation
              description: |-
                ## Purpose
                After a large job with many isolations, putting the plant back together is a project in itself: spades out in the right order, gaskets and bolting correct, leak tests at the right pressure and medium, and instruments and trips returned to service. A reinstatement plan, run as a dated event, avoids the leaks and missed trips that follow a rushed restart.

                ## Milestones
                1. A reinstatement sequence listing every isolation point in the order of removal.
                2. Leak test medium, pressure and acceptance agreed with the responsible engineer.
                3. Overrides and inhibits removed and trips tested before start-up.
                4. Reinstatement signed off and records filed with the permits.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every isolation point is signed off in sequence, leak tests are recorded and all overrides are cleared before start-up."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Write the reinstatement sequence from the isolation certificates"
                - "Agree leak test medium and acceptance with the responsible engineer"
                - "Confirm all overrides are removed and trips tested before start-up"
                - "File the signed reinstatement record with the permits"
            - name: Graduate engineer's first months working under permit
              description: |-
                ## Purpose
                New graduates arrive knowing thermodynamics and nothing about how plant is handed over for work. Spending the first months deliberately, shadowing the permit desk, attending meetings, holding a copy permit on every job you visit and asking why each control is there, makes you useful and safe on site much sooner.

                ## Milestones
                1. Two weeks shadowing the permit desk and an isolating authority completed.
                2. Ten permits followed from request to closure with notes on each.
                3. A list of questions answered by your mentor at weekly check-ins.
                4. Your first authorisation step agreed with your supervisor.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Notes on ten permits followed from request to closure exist and your first authorisation step is agreed in writing."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Ask your supervisor to arrange two weeks shadowing the permit desk"
                - "Follow ten permits from request to closure and keep notes"
                - "Bring your permit questions to each weekly mentor check-in"
                - "Agree your first authorisation step with your supervisor"
            - name: Contractor engineer under a client's permit system
              description: |-
                ## Purpose
                As a contractor you work under someone else's permit procedure, forms and authorities, often with only an induction to learn them. Understanding the client system early, who issues, how isolations are verified by your crew, what your supervisor must sign, and what will stop the job, prevents delays and keeps your crew from assuming the rules from the last site.

                ## Milestones
                1. The client permit procedure read and differences from your own company's noted.
                2. Your crew's roles in the client system agreed with the client permit office.
                3. A briefing on the client system given to your crew before mobilisation.
                4. Any conflict between client and contractor rules resolved in writing.
              priority: medium
              frontmatter:
                mode: service
                output_kind: knowledge
                success_criteria: "A written comparison of client and contractor permit rules exists and your crew has been briefed on the client system before work starts."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Request the client permit procedure before mobilisation"
                - "List differences from your own company's permit rules"
                - "Agree your crew's permit roles with the client permit office"
                - "Brief your crew on the client permit system before the first shift"
            - name: Simple permit system for a small site
              description: |-
                ## Purpose
                Small plants, workshops and utilities sometimes run maintenance on verbal agreement, with no permits and a padlock or two. Setting up a proportionate system, a single permit form, a lockout standard, an isolation register and a few trained authorities, brings the essentials in without the bureaucracy of a large refinery.

                ## Milestones
                1. The site's high-risk jobs and energy sources listed.
                2. A single permit form and a lockout standard drafted for those jobs.
                3. Two or three people trained and authorised to issue permits.
                4. The system used for three months and adjusted after feedback.

                ## Notes
                Keep it proportionate: a simple system that is always used beats a complex one that is bypassed. Get competent advice on the legal duties that apply in your country.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A permit form, lockout standard and trained issuers are in place, and three months of permits have been reviewed for improvements."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "List the site's high-risk jobs and their energy sources"
                - "Draft a single permit form and a lockout standard"
                - "Train and authorise two or three permit issuers"
                - "Review three months of permits and adjust the system"
            - name: Area authority on night shift
              description: |-
                ## Purpose
                An engineer acting as area authority on nights often covers a larger area with fewer people, issues revalidations and emergency permits, and has no one to ask. Preparing for the role, with a personal checklist, clear limits on what you will not issue at night, and agreed escalation contacts, avoids decisions taken tired and alone.

                ## Milestones
                1. A personal night shift checklist for revalidations and emergency permits.
                2. Written limits on jobs that wait for day shift unless an emergency is declared.
                3. Escalation contacts agreed for permit questions out of hours.
                4. First month of night shifts reviewed with your supervisor.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A night shift checklist and written limits exist and have been reviewed with your supervisor after a month of night shifts."
                cadence: phased
              tasks:
                - "Write a night shift checklist for revalidations and emergency permits"
                - "Agree which jobs wait for day shift unless an emergency is declared"
                - "Get escalation contacts for permit questions out of hours"
                - "Review your first month of nights with your supervisor"
            - name: Permits during commissioning and system handover
              description: |-
                ## Purpose
                On a new plant, ownership moves system by system from construction to commissioning to operations, and the permit system has to follow. Agreeing who controls each system at each stage, how construction isolations become operational ones, and when the operating permit system takes over prevents the classic gap where nobody owns a live system.

                ## Milestones
                1. A system ownership register showing construction, commissioning and operations control.
                2. The point at which the operating permit system applies to each system agreed.
                3. Construction locks and tags converted to operational isolations with a record.
                4. No system energised without a recorded owner and permit arrangement.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A system ownership register records who controls permits for every system, and no system is energised without a recorded owner."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Get the list of commissioning systems and their handover status"
                - "Build a register showing who controls permits on each system"
                - "Agree when the operating permit system applies to each one"
                - "Record the conversion of construction locks to operational isolations"
            - name: SIMOPS on a congested live plant
              description: |-
                ## Purpose
                Simultaneous operations, such as drilling and production, construction beside live plant, or crane lifts over pressurised pipework, put several permit holders in one space with interacting hazards. A SIMOPS plan with defined zones, a matrix of permitted combinations and a single coordinator gives the permit system the context it needs to say yes or no.

                ## Milestones
                1. Activities, zones and interfaces mapped for one period of simultaneous work.
                2. A SIMOPS matrix of permitted, controlled and forbidden combinations agreed.
                3. A named SIMOPS coordinator with authority over permit issue.
                4. Daily SIMOPS coordination recorded through the period.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A SIMOPS plan with zones, a combination matrix and a named coordinator is approved and in use for the period of simultaneous work."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Map the activities, zones and interfaces for the SIMOPS period"
                - "Draft a matrix of permitted, controlled and forbidden combinations"
                - "Get a named SIMOPS coordinator with authority over permit issue"
                - "Record daily SIMOPS coordination decisions"
            - name: Human factors in permit and isolation failures
              description: |-
                ## Purpose
                Most permit failures are not ignorance but pressure: a shift running late, a familiar job, a form too long to read, an isolation point in an awkward place. Reviewing your system through a human factors lens, using published guidance and frank conversations with users, finds the design changes that make the safe way the easy way.

                ## Milestones
                1. Published human factors guidance on permit systems summarised.
                2. Interviews with five permit users about where the system slows them or confuses them.
                3. Three design changes proposed, such as shorter forms or better isolation point labelling.
                4. One change trialled and its effect recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A human factors review based on five user interviews proposes three changes, and one has been trialled with its result recorded."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Read published human factors guidance on permit systems"
                - "Interview five permit users about friction and confusion"
                - "Propose three changes that make the safe way the easy way"
                - "Trial one change and record what happened"
            - name: Designing for isolation on new projects
              description: |-
                ## Purpose
                Many isolation problems are built in at design: no double block and bleed where one is needed, no vent between valves, spade points without spectacle blinds, motors with no local isolator. Reviewing a new design specifically for maintainability under permit, with operations and maintenance at the table, prevents decades of awkward and weak isolations.

                ## Milestones
                1. A design for isolation checklist drawn from site standards and past problems.
                2. The checklist applied to one project's P&IDs and layouts.
                3. Comments raised through the project's design review process.
                4. Accepted comments confirmed on the next drawing revision.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A design for isolation review of one project is submitted through its design review process and accepted comments appear on the next revision."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Draft a design for isolation checklist from site standards and past problems"
                - "Apply the checklist to one project's P&IDs and layout drawings"
                - "Raise isolation comments through the project design review"
                - "Check accepted comments on the next drawing revision"
            - name: Training and assessing new permit issuers
              description: |-
                ## Purpose
                Experienced area authorities are the most important part of a permit system and the hardest to replace. Training and assessing new issuers, with structured coaching on real permits, observed practice and a fair assessment, passes on judgement that no course teaches and keeps the authorisation register healthy.

                ## Milestones
                1. A coaching plan for new issuers covering knowledge, practical permits and judgement calls.
                2. Two trainees coached through supervised permits.
                3. Assessments completed against the site competence standard.
                4. Quarterly refreshers held for current issuers on lessons and changes.

                ## Notes
                Start from the **Skills matrix** template to track each trainee's progress against the competence standard.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Two trainee issuers have completed coaching and a recorded assessment, and a quarterly refresher has been held."
                cadence: rolling
              tasks:
                - "Write a coaching plan for new permit issuers"
                - "Coach two trainees through supervised permits"
                - "Assess each trainee against the site competence standard"
                - "Hold a refresher session for current issuers @recurring(quarterly)"
---

# Permit to Work and Isolations

Most serious maintenance incidents trace back to a permit that was signed without a walk-down, an isolation that leaked, or a job that changed after the crew started. These projects begin with the foundations (the purpose of a permit system, your site procedure, the roles you may hold, the hazardous energy on your unit, isolation methods, your own lockout kit and stop-work authority), then build the daily and weekly machinery of live permits, the specialist skills of electrical, hot work, confined space and line breaking permits, the decisions that improve a system, the dated events where permits come under strain, the different seats an engineer sits in, and the advanced work of designing for isolation and training issuers.

The rhythm is a daily permit meeting and shift handover, weekly walk-rounds of live permits and the override register, monthly reviews of long-term isolations, key safes, detector records and permit metrics, quarterly lock and library checks, and a yearly system audit and re-authorisation. The Skills matrix, Operational checklist, Metrics log, Purchase decision, Remediation plan and Reading queue templates pair with the projects that keep a standing record. Your site procedure always governs; these projects help you work to it and improve it. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
