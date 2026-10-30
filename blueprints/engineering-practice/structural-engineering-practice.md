---
id: engineering-practice.structural-engineering-practice
name: Structural Engineering Practice
description: "A written design basis and clear load paths, member and connection design you can defend, drawings checked against calculations, site inspections with hold points, and sign-off you are willing to put your name to."
category: business
version: 1.0.0
tags: [engineering-practice, structural-engineering-practice, engineer, structural-design, reinforced-concrete, steelwork, site-inspection, temporary-works]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - metrics-log
    - purchase-decision
    - development-plan
    - remediation-plan
  pillars:
    - name: Engineering Practice
      emoji: "🔧"
      description: "The day-to-day work of practising engineers: each major discipline, process safety and risk studies, FEED, design reviews, commissioning, reliability and maintenance, CAD, simulation and PLC work, project delivery, tenders, reports, ethics and standards, and the Caribbean energy sector from Point Lisas to LNG."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Structural Engineering Practice
          description: "Working as a structural engineer: load assessment, analysis and member design, connection details, drawing checks, site inspections and sign-off responsibilities."
          projects:
            - name: Written structural design basis for each job
              description: |-
                ## Purpose
                Most structural disputes trace back to an assumption nobody wrote down: the design life, the imposed load on a plant room, the exposure class or whether the roof will ever carry solar panels. A two or three page design basis, agreed with the architect and client before analysis starts, fixes the codes, loads, materials, fire periods and consequence class that every later calculation relies on.

                ## Milestones
                1. A design basis document listing the governing code family and editions, design life, consequence class and fire resistance periods.
                2. Imposed, dead, wind, snow or seismic actions stated with their source clause, not just a number.
                3. Material grades, exposure classes and cover requirements recorded for each element type.
                4. Client and architect sign-off on the design basis captured before the first calculation is issued.
                5. A revision table so any later change of use or load is recorded against the document.

                ## Notes
                Keep the design basis as the first section of the calculation file. When a client asks for a change late, the revision table is the evidence that the load moved and the fee should too.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed design basis exists for the current job, listing codes, actions with sources, materials, design life and consequence class, issued before analysis."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Open a design basis document for your current job using last job's as a skeleton"
                - "List the code family, editions and national annexes the job will use"
                - "Record each action with the clause or client brief it comes from"
                - "Send the draft to the architect and client asking for written agreement"
            - name: Design responsibility matrix for a structural job
              description: |-
                ## Purpose
                Connections designed by the fabricator, precast units by the supplier, temporary works by the contractor and the cladding brackets by somebody nobody can name: on most jobs the gaps sit between parties. A one page matrix stating who designs, who checks and who reviews each element closes those gaps before they become an argument on site or an uncovered liability.

                ## Milestones
                1. Every structural element and interface listed, including connections, precast, piling, cladding supports and temporary works.
                2. Each element assigned a designer, a checker and a reviewer by organisation.
                3. Elements designed by others marked with the information you must give them and what you will review.
                4. The matrix referenced in your appointment or scope letter and in the specification.

                ## Notes
                Read your appointment against the matrix. If the appointment says you are responsible for connection design and the matrix says the fabricator is, fix it now, not at the first claim.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A responsibility matrix covering every element and interface, with a named designer and checker each, is referenced in the appointment and specification."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every element and interface on the job in a single table"
                - "Assign designer, checker and reviewer by organisation for each row"
                - "Compare the matrix with the wording of your appointment letter"
                - "Issue the matrix to the project team with the specification"
            - name: Load path sketches before any analysis
              description: |-
                ## Purpose
                A software model will happily analyse a building whose loads have nowhere sensible to go. Sketching the gravity and lateral load paths by hand, from roof to foundation, takes an hour and shows transfer beams, missing ties and stability gaps while the scheme is still cheap to change.

                ## Milestones
                1. A gravity load path sketch showing each floor's loads reaching the foundations.
                2. A lateral load path sketch for each principal direction, naming the bracing, frames or cores that resist it.
                3. Transfers, discontinuities and diaphragm openings circled and listed for design attention.
                4. The sketches filed at the front of the calculation package for the checker.

                ## Notes
                If you cannot draw the lateral path in both directions on one sheet, the stability system is not yet decided.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Hand sketches of gravity and lateral load paths in both directions are in the calculation file, with every transfer and discontinuity listed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Print the architect's plans and sections at a scale you can sketch on"
                - "Trace gravity loads from roof to foundation in one colour"
                - "Trace lateral loads in each direction to the stability elements"
                - "List every transfer and discontinuity the sketches reveal"
            - name: Gravity load take-down from roof to foundation
              description: |-
                ## Purpose
                Foundation sizes, column schedules and the geotechnical engineer's brief all depend on a take-down that someone can follow line by line. Doing one carefully by hand for a typical column and wall, then comparing it with the model reactions, catches tributary area mistakes and missing finishes loads before they reach the foundations.

                ## Milestones
                1. Characteristic dead and imposed loads per floor tabulated, including finishes, partitions and services.
                2. A take-down for at least one typical column and one core or wall, with tributary areas drawn.
                3. Imposed load reductions applied only where the code permits, with the clause cited.
                4. Hand results compared with model reactions and any difference over a tenth explained.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A hand take-down for a typical column and a core is in the calculation file and agrees with the model reactions or the difference is explained."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Tabulate dead and imposed loads per floor including finishes and services"
                - "Draw tributary areas for one typical column and one core"
                - "Run the take-down by hand and total the loads at foundation level"
                - "Compare the totals with the model reactions and note the difference"
            - name: Independent check level agreed for each structure
              description: |-
                ## Purpose
                Whether a design needs a colleague's check, a check by another team or a fully independent check by another firm depends on its consequence class, novelty and the local approval regime. Agreeing the level at the start, and booking the checker, prevents the last-minute scramble when the authority or client asks who verified the design.

                ## Milestones
                1. The structure's consequence class and any unusual features recorded.
                2. The required check level agreed with your lead or principal and the client, with the reason written down.
                3. A named checker booked, with independence from the designer stated.
                4. The check scope, deliverables and timing written into the programme.

                ## Notes
                A check that only re-runs your own model is not independent. The checker should build their own model or hand calculation for the critical elements.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The check level, named checker and check scope for the current structure are recorded and appear in the programme."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Record the consequence class and any novel features of the structure"
                - "Agree the check level with your principal and note the reason"
                - "Book a checker and confirm in writing that they are independent of the design"
                - "Add the check dates and deliverables to the programme"
            - name: Structural code library with annexes and errata
              description: |-
                ## Purpose
                Designing to a superseded edition, or missing the national annex that changes a partial factor, is one of the commonest findings in a check. A small library of the structural codes you actually use, with annexes, published corrigenda and the design guides your office relies on, means you can cite the clause and edition on every calculation sheet.

                ## Milestones
                1. The structural codes you design to listed with edition, amendment and national annex, for example a Eurocode, ACI, AISC or AS/NZS family.
                2. Published corrigenda and amendments filed against each code.
                3. The design guides and handbooks your office treats as standard listed by edition.
                4. A quarterly check for new amendments set up and its first run recorded.

                ## Notes
                The office-wide register of codes for all disciplines sits with codes and standards compliance work. This project is your own working shelf for structural design.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A list of every structural code used, with edition, annex and corrigenda, exists and has been checked for amendments in the last quarter."
                cadence: rolling
              tasks:
                - "List the structural codes and editions you used on your last three jobs"
                - "Collect the national annexes and corrigenda for each one"
                - "Note which design guides and handbooks your office treats as standard"
                - "Check the publishers for amendments to your structural codes @recurring(quarterly)"
            - name: Benchmarking frame analysis software against hand solutions
              description: |-
                ## Purpose
                Analysis packages differ in how they treat rigid offsets, releases, P-delta and slab stiffness, and a default you never noticed can change a moment by a third. Running five textbook frames with known answers through your software, and recording the agreement, gives you and your checker confidence in every model you build after.

                ## Milestones
                1. Five benchmark problems chosen with published answers: a continuous beam, a portal frame, a braced frame, a sway frame with second-order effects and a flat slab strip.
                2. Each benchmark modelled in your analysis software with the settings recorded.
                3. Results compared with the published answers in a table with percentage differences.
                4. Any settings that changed the answer noted as office defaults or warnings.

                ## Notes
                Rerun the benchmarks when the software has a major version change. Keep the models so the rerun takes an hour, not a week.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Five benchmark frames have been run in your analysis software and a comparison table with published answers is filed."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pick five benchmark problems with published answers from a textbook or verification manual"
                - "Model each benchmark and record the analysis settings used"
                - "Tabulate results against the published answers with percentage differences"
                - "Write up the settings that changed results as office defaults"
            - name: Site inspection kit and visit checklist
              description: |-
                ## Purpose
                Arriving on site without a cover meter, a crack width card or the latest drawings turns an inspection into a conversation. A packed kit and a standard checklist, covering induction, PPE, permits, what to look at and what to photograph, make each visit faster and the record defensible.

                ## Milestones
                1. A kit list covering PPE, tape, crack width gauge, level, torch, camera and marking crayon.
                2. A checklist covering site induction, permits for restricted areas, the inspection scope and photographs to take.
                3. The current drawing and specification set loaded on a tablet or printed.
                4. The checklist used on one real visit and adjusted afterwards.

                ## Notes
                Start from the **Operational checklist** template. You have the right to stop work you believe is unsafe; know who to tell on site before you need to.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A packed inspection kit and a written visit checklist exist and have been used on at least one site visit."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a kit list from what you wished you had on your last visit"
                - "Draft the visit checklist from induction to photographs"
                - "Load the current drawings onto a tablet for site use"
                - "Use the checklist on your next visit and note what to change"
            - name: Calculation review and sign-off queue
              description: |-
                ## Purpose
                Calculations waiting a fortnight for a signature hold up drawings, procurement and the contractor's programme. A visible queue, cleared on a fixed day each week, shows the principal what needs signing, who checked it and what is blocking each package.

                ## Milestones
                1. A single list of calculation packages awaiting check or sign-off, with designer, checker and date received.
                2. A fixed weekly slot booked with the signing engineer.
                3. Each package's check comments and responses filed with the calculation.
                4. Average time from submission to sign-off tracked and below two weeks.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every calculation package awaiting sign-off is on one list, and the average wait from submission to signature is under two weeks."
                cadence: rolling
              tasks:
                - "List every calculation package currently waiting for check or signature"
                - "Book a standing weekly sign-off slot with the signing engineer"
                - "Clear the sign-off queue and record what is still blocked @recurring(weekly:tue)"
                - "Work out the average wait to signature at the end of each month"
            - name: Structural drawing check against the calculations
              description: |-
                ## Purpose
                Bar sizes that differ from the calculation, a beam reference that points at the wrong grid line, a missing camber note: these reach site when the drawing check is rushed. Checking every structural drawing against its calculation before issue, with a marked-up print and a signed check box, is the step that turns design into something buildable.

                ## Milestones
                1. A drawing check procedure covering member sizes, reinforcement, levels, gridlines, notes and cross-references.
                2. Every drawing due for issue checked on a marked-up print or PDF with comments closed.
                3. Check signatures recorded in the title block or drawing register.
                4. Errors found at check logged by type so repeat mistakes are visible.

                ## Notes
                Check in colours: yellow for confirmed, red for change, green for comment. The drafter can then close red items without asking what you meant.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No structural drawing is issued without a marked-up check against its calculation, and errors found are logged by type each month."
                cadence: rolling
              tasks:
                - "Write a one page drawing check procedure with the colour convention"
                - "Check every drawing due for issue against its calculation @recurring(weekly:thu)"
                - "Log each error found at check by type in a simple table"
                - "Share the most common error type with the drafting team"
            - name: Site inspection reports and pre-pour hold points
              description: |-
                ## Purpose
                Once concrete is placed, wrong bars, missing cover spacers and poor lap lengths are buried for the life of the structure. Agreeing hold points with the contractor, inspecting reinforcement and formwork before each significant pour and issuing a short report the same day protects the client, the contractor and your signature.

                ## Milestones
                1. Hold points agreed with the contractor in writing for reinforcement, embedded items and critical steel connections.
                2. A standard inspection report form with photographs, findings, required actions and release status.
                3. Each inspection report issued within one working day.
                4. Open actions from previous reports followed up before the next release.

                ## Notes
                Never release a pour by phone without a written record. If you see an unsafe condition, such as propping removed early, use your stop-work authority and tell the site manager straight away.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every hold point inspection has a written report issued within one working day, and open actions are closed before the next pour release."
                cadence: rolling
              tasks:
                - "Agree the list of hold points with the contractor in writing"
                - "Set up a standard inspection report form with photo pages"
                - "Review the contractor's pour programme for the coming week @recurring(weekly:wed)"
                - "Follow up open actions from previous inspection reports"
            - name: Contractor RFI and technical query log
              description: |-
                ## Purpose
                Queries answered by text message or in a corridor are forgotten, contradicted or never reach the drawings. A single log of requests for information, with the question, the answer, who gave it and whether the drawings need revising, keeps site moving and gives you the record when a variation is claimed.

                ## Milestones
                1. One log for all structural queries with number, date, question, answer, responder and drawing impact.
                2. A target reply time agreed with the contractor, for example three working days.
                3. Answers that change the design flagged for a drawing revision and closed when reissued.
                4. Weekly review of overdue queries held with the project team.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every structural query is logged with its answer and drawing impact, and none is overdue beyond the agreed reply time at the weekly review."
                cadence: rolling
              tasks:
                - "Set up the query log with number, question, answer and drawing impact columns"
                - "Agree a target reply time with the contractor"
                - "Review open and overdue structural queries with the team @recurring(weekly:mon)"
                - "Close queries only after any drawing revision is issued"
            - name: Steel and precast shop drawing review cycle
              description: |-
                ## Purpose
                Fabricators and precast suppliers cannot start until their shop drawings come back, and returning them late is a quick way to delay a job. A weekly review cycle with clear status codes, checking geometry, connection design responsibility and interfaces, keeps fabrication on programme without you taking on design you never agreed to.

                ## Milestones
                1. Status codes agreed with the contractor, such as no comment, revise and resubmit, and rejected.
                2. A submittal register showing every shop drawing, its revision, date received and date returned.
                3. Each review checking setting out, member sizes, connection forces and interfaces against your design.
                4. Average return time held within the period stated in the contract.

                ## Notes
                A shop drawing review does not take over the fabricator's design responsibility. Say so in your review stamp wording, consistent with the responsibility matrix.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every shop drawing is in the submittal register with a status code, and returns stay within the contract review period."
                cadence: rolling
              tasks:
                - "Agree submittal status codes and stamp wording with the contractor"
                - "Set up a submittal register with received and returned dates"
                - "Review the shop drawings that arrived this week and return them @recurring(weekly:fri)"
                - "Check connection forces on the fabricator's drawings against your design"
            - name: Concrete strength test results tracker
              description: |-
                ## Purpose
                Cube or cylinder results arrive in batches from the laboratory and are easy to file unread, until a 28-day result comes back under strength on a column that already carries two floors. Logging every result against the pour location and specified class, and acting quickly on a low one, turns test certificates into a real control.

                ## Milestones
                1. A results log with pour reference, location, specified class, test age and result for every sample set.
                2. A trigger agreed with the contractor for what happens when a result falls below the specified value.
                3. Low results investigated with the supplier and recorded, with any core testing or assessment noted.
                4. A monthly summary of results by supplier and element type.

                ## Notes
                Start from the **Metrics log** template. Assessing an under-strength result is an engineering judgement; record what you decided and why.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every concrete test result is logged against its pour location within a week, and each low result has a recorded investigation and decision."
                cadence: rolling
              tasks:
                - "Set up a results log with pour location and specified class columns"
                - "Agree the low-result procedure with the contractor and supplier"
                - "Enter new laboratory results and flag any below the specified class @recurring(weekly:fri)"
                - "Summarise the month's results by supplier and element @recurring(monthly:8)"
            - name: Structural design error and near-miss log
              description: |-
                ## Purpose
                Every office has engineers who have caught a missing load case or an upside-down bar schedule just in time, and most of those lessons stay in one head. A short log of design errors and near misses, reviewed monthly without blame, shows which mistakes repeat and which checks should be added to the procedures.

                ## Milestones
                1. A log with date, job, what happened, how it was found and what check would have caught it earlier.
                2. An agreement with your team that entries are for learning, not discipline.
                3. A monthly ten minute review of new entries at a team meeting.
                4. At least one procedure or checklist changed because of the log.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A design error log has entries from at least three engineers and has led to one documented change in a check procedure."
                cadence: rolling
              tasks:
                - "Create the error log and add one near miss of your own"
                - "Ask the team to add errors they caught, with no names needed"
                - "Review new log entries at the team meeting @recurring(monthly:19)"
                - "Turn the most repeated error into a new line on a checklist"
            - name: Monthly peer review of tricky structural details
              description: |-
                ## Purpose
                Awkward details, such as a steel beam bearing on a thin wall, a slab edge carrying a heavy façade or a moment connection into a column web, benefit from twenty minutes of a colleague's eyes. A monthly session where engineers bring one sketch each spreads experience across the office and catches problems before they reach drawings.

                ## Milestones
                1. A recurring monthly session in the diary with a named host.
                2. Each engineer bringing one detail sketch with the forces and the concern written on it.
                3. Agreed outcomes for each detail recorded in a short note.
                4. Good details added to the office standard details library.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly detail review has run at least three times with outcomes recorded and one detail added to the standard library."
                cadence: rolling
              tasks:
                - "Invite colleagues to a monthly detail review and pick a host"
                - "Sketch the detail that worried you most this month"
                - "Run the detail review and note the agreed outcomes @recurring(monthly:23)"
                - "Send good details to whoever keeps the standard library"
            - name: Hours against fee on each structural job
              description: |-
                ## Purpose
                Structural fees are often fixed while the architect's design keeps moving, and the overrun is only noticed at the end. Comparing hours spent with the fee each month, and linking overruns to recorded changes, gives you the evidence to ask for additional fees while the change is still fresh.

                ## Milestones
                1. Fee and planned hours per stage recorded for each live job.
                2. Actual hours booked against each job and stage every week.
                3. A monthly comparison of hours spent with work completed, with overruns explained.
                4. Additional fee requests raised for scope changes, referencing the design basis revisions.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each live job has a monthly hours against fee comparison, and every overrun over a tenth has a recorded cause or a fee request."
                cadence: rolling
              tasks:
                - "Record fee and planned hours by stage for each live job"
                - "Check that your hours are booked to the right job and stage"
                - "Compare hours spent with work done on each job @recurring(monthly:27)"
                - "Draft an additional fee request for any scope change found"
            - name: Structural CPD record for registration renewal
              description: |-
                ## Purpose
                Most professional bodies and licensing boards expect registered engineers to record continuing development each year, and many audit a sample. Keeping a running record of courses, reading and site learning tied to structural topics makes the annual return a ten minute job and points you at gaps in your knowledge.

                ## Milestones
                1. Your professional body's or board's current CPD requirements checked on its website and noted.
                2. A CPD record with date, activity, hours, structural topic and what you learned.
                3. A plan for next year's development covering at least one weaker design topic.
                4. The annual return submitted on time with evidence filed.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A CPD record meeting your body's current requirements is up to date and the latest annual return was submitted on time."
                cadence: cyclic
              tasks:
                - "Check your professional body's current CPD requirements and note them"
                - "Start a CPD record and add this year's activities so far"
                - "Add the last quarter's courses, reading and site learning @recurring(quarterly)"
                - "Submit the annual CPD return with evidence attached @recurring(yearly)"
            - name: Reinforced concrete beam and slab design by hand
              description: |-
                ## Purpose
                Software designs reinforcement quickly but gives no feel for whether 12 bars at the support is sensible. Working through a continuous beam, a two-way slab and a flat slab punching check by hand, to your design code, builds the instinct that lets you spot a bad output at a glance.

                ## Milestones
                1. A continuous beam designed for bending, shear and deflection by hand, with bar curtailment sketched.
                2. A two-way slab designed using code coefficients or yield line, with reinforcement layout.
                3. A punching shear check at an internal and an edge column completed.
                4. Each hand result compared with your software output and differences explained.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Hand designs of a beam, a two-way slab and a punching check are filed and compared with software output."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Choose a beam and slab from a past job to design by hand"
                - "Design the continuous beam for bending, shear and deflection"
                - "Design the two-way slab and check punching at two columns"
                - "Compare your hand results with the software output"
            - name: Bolted and welded steel connection design
              description: |-
                ## Purpose
                Connections are where steel frames fail and where fabricators most often push back on cost. Learning to design simple shear end plates, fin plates, bolted splices and a moment end plate to your steel code, including the weld sizes, lets you specify connections that work and judge the fabricator's proposals.

                ## Milestones
                1. A fin plate and a flexible end plate designed with all relevant failure modes checked.
                2. A bolted beam splice designed for moment and shear.
                3. A moment end plate connection designed including column web and flange checks.
                4. Weld sizes specified and checked for each connection, with a sketch.

                ## Notes
                Published connection design guides with tabulated capacities are a good check on your hand results, provided they match your code edition.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Four steel connection designs, each with failure modes, bolt and weld checks and a sketch, are filed and checked against a published guide."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Find a connection design guide matching your steel code edition"
                - "Design a fin plate and a flexible end plate by hand"
                - "Design a bolted splice and a moment end plate connection"
                - "Check your results against the guide's tabulated capacities"
            - name: Timber and engineered timber design basics
              description: |-
                ## Purpose
                Glulam, cross-laminated timber and timber frame are appearing on more jobs, and the design logic differs from steel and concrete: moisture, load duration, creep, connection slip and fire char all matter. Working through a joist, a glulam beam and a CLT floor panel to your timber code gives you a working start before a timber job lands.

                ## Milestones
                1. Service classes, load duration classes and modification factors understood and summarised on one page.
                2. A solid timber joist and a glulam beam designed for bending, shear, bearing and deflection.
                3. A CLT floor panel checked for deflection and vibration using a supplier's design guide.
                4. A dowel-type connection designed with slip and spacing rules applied.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Worked designs of a joist, a glulam beam, a CLT panel and a dowelled connection are filed with a one page summary of timber factors."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Summarise service class and load duration factors on one page"
                - "Design a solid timber joist and a glulam beam by hand"
                - "Check a CLT floor panel using a supplier's design guide"
                - "Design a dowelled timber connection with spacing rules"
            - name: Masonry wall design and lateral load checks
              description: |-
                ## Purpose
                Masonry still carries a large share of low-rise buildings, extensions and alterations, and wall panels under wind or retained soil fail in ways that surprise engineers trained on frames. Designing a loadbearing wall, a panel under lateral load and a bearing under a concentrated load builds the judgement needed for domestic and small commercial work.

                ## Milestones
                1. A loadbearing wall designed for vertical load with slenderness and eccentricity considered.
                2. A wall panel checked for lateral load with its support conditions stated.
                3. A concentrated load bearing check and padstone design completed.
                4. Movement joint spacing and wall ties noted against your masonry code.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Worked masonry designs for vertical load, lateral panel load and a padstone are filed with movement joint guidance noted."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Pick a masonry wall from a recent extension or small building"
                - "Design the wall for vertical load including slenderness"
                - "Check a panel for lateral load with stated support conditions"
                - "Design a padstone under a concentrated beam load"
            - name: Lateral stability systems and diaphragm design
              description: |-
                ## Purpose
                Stability is the part of a building most often left vague until late, and the part that a checker always asks about first. Studying how braced bays, moment frames, cores and shear walls share load through floor diaphragms, and designing a simple example of each, prepares you to set out a stability strategy at concept stage.

                ## Milestones
                1. A one page comparison of braced, moment frame, core and shear wall systems with their drawbacks.
                2. A braced bay and a core designed for a simple building's lateral loads.
                3. A floor diaphragm checked for in-plane forces, with openings and collector elements identified.
                4. Notional horizontal loads or imperfections and second-order effects applied per your code.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A stability strategy note, designs of a braced bay and a core, and a diaphragm check for one example building are filed."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Write a one page comparison of the four main stability systems"
                - "Design a braced bay and a core for a simple example building"
                - "Check the floor diaphragm forces around a large opening"
                - "Apply imperfections and second-order effects to the example"
            - name: Reading a site investigation with the geotechnical engineer
              description: |-
                ## Purpose
                Foundation design depends on a factual and interpretive site investigation report that structural engineers often skim. Learning to read borehole logs, groundwater observations and design parameters, then talking them through with the geotechnical engineer, leads to foundation choices you can defend and fewer surprises when excavation starts.

                ## Milestones
                1. Borehole and trial pit logs on a current job read and summarised in a ground model sketch.
                2. Groundwater levels, any made ground and aggressive chemistry noted for the foundation design.
                3. Design parameters and allowable bearing or pile capacities agreed in writing with the geotechnical engineer.
                4. Questions on gaps in the investigation answered or further investigation requested.

                ## Notes
                Bearing capacities and pile design are the geotechnical engineer's call. Your job is to give them accurate loads and ask the right questions.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A ground model sketch and a written note of agreed design parameters for the current job are filed, with open questions answered."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read the borehole logs for your current job and sketch the ground model"
                - "List groundwater, made ground and chemistry issues for the foundations"
                - "Send your foundation loads and questions to the geotechnical engineer"
                - "Record the agreed design parameters in the design basis"
            - name: Deflection, vibration and cracking checks
              description: |-
                ## Purpose
                Many structural complaints are not about strength at all but about floors that bounce, partitions that crack or glazing that binds. Learning the serviceability checks, including long-term deflection with creep, footfall vibration and crack width control, lets you agree sensible limits with the client and avoid callbacks.

                ## Milestones
                1. Deflection limits for each element agreed with the architect and recorded in the design basis.
                2. A long-term deflection calculation completed for a concrete slab including creep and shrinkage.
                3. A footfall vibration check completed for a lightweight or long-span floor using a published method.
                4. Crack width control checked for a water-retaining or exposed element.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Agreed deflection limits are recorded, and worked checks for long-term deflection, footfall vibration and crack width are filed."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Agree deflection limits per element with the architect"
                - "Calculate long-term deflection for a slab with creep and shrinkage"
                - "Run a footfall vibration check on a long-span floor"
                - "Check crack widths for an exposed or water-retaining element"
            - name: Disproportionate collapse, tying and key elements
              description: |-
                ## Purpose
                Codes require buildings above certain consequence classes to survive the loss of a member without collapsing out of proportion to the cause. Understanding horizontal and vertical tying, notional member removal and key element design, and applying them to a real building, closes a gap that checkers and authorities often find.

                ## Milestones
                1. The consequence class of a current or recent building determined and the required measures listed from your code.
                2. Horizontal and vertical tie forces calculated and connections checked to carry them.
                3. A notional column removal assessed, or key element design completed where removal is not possible.
                4. The approach written into the design basis and drawings.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A consequence class assessment with tie force calculations and a removal or key element check is filed for one real building."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Determine the consequence class of your current building"
                - "Calculate horizontal and vertical tie forces for the frame"
                - "Check that connections can carry the tie forces"
                - "Assess a notional column removal or design a key element"
            - name: Fire resistance of structural members
              description: |-
                ## Purpose
                Fire periods arrive from the fire engineer or the building regulations and then get lost between the architect, the steel fabricator and the coating supplier. Learning how concrete cover, member size, intumescent coatings and timber charring deliver fire resistance makes sure every element on your drawings has a stated period and a way of achieving it.

                ## Milestones
                1. Fire resistance periods for each element type on a current job recorded from the fire strategy.
                2. Concrete members checked for minimum dimensions and axis distance using tabulated data.
                3. Steel members scheduled with section factor and protection requirement for the coating supplier.
                4. Timber members checked using a reduced cross-section method where relevant.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every element on one job has a recorded fire period and a documented method of achieving it in concrete, steel or timber."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Get the fire strategy for your current job and note each element's period"
                - "Check concrete member sizes and axis distances against tabulated data"
                - "Prepare a steel member schedule with section factors for the coating supplier"
                - "Add fire periods to the general notes drawing"
            - name: Framing scheme comparison for a new building
              description: |-
                ## Purpose
                Choosing between a steel frame with composite decks, a post-tensioned flat slab and a timber hybrid fixes the cost, programme, floor depth and carbon for the life of the job. Comparing two or three schemes on the same criteria, with rough quantities, gives the client a reasoned decision instead of the engineer's habit.

                ## Milestones
                1. Two or three framing schemes sketched for the same grid, with typical member sizes.
                2. Each scheme scored on structural depth, weight on foundations, programme, cost, embodied carbon and services integration.
                3. Rough quantities and cost advice obtained from the cost consultant or a contractor.
                4. A short scheme report issued and the client's decision recorded.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A scheme report comparing at least two framing options on six criteria is issued and the client's choice is recorded."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Sketch two or three framing options on the architect's grid"
                - "Size typical members for each option using quick hand methods"
                - "Ask the cost consultant for rough rates on each scheme"
                - "Write the scheme report and record the client's decision"
            - name: Embodied carbon estimate of the structural frame
              description: |-
                ## Purpose
                The frame and foundations often account for the largest share of a building's upfront carbon, and more clients and planning authorities now ask for the number. Estimating embodied carbon from your quantities, using a recognised calculation method and published material factors, lets you show the effect of choices such as cement replacement or a lighter grid.

                ## Milestones
                1. Material quantities taken from the model or schedules for concrete, reinforcement, steel and timber.
                2. Carbon factors chosen from a published source, with the source and version recorded.
                3. An estimate per square metre of floor area calculated and compared with published benchmarks.
                4. Two reduction options quantified and shared with the design team.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An embodied carbon estimate per square metre, with sources and two quantified reduction options, is issued to the design team."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Export material quantities from your model or schedules"
                - "Choose a published set of carbon factors and record its version"
                - "Calculate the frame's embodied carbon per square metre"
                - "Quantify two reduction options such as cement replacement or a tighter grid"
            - name: Office standard structural details library
              description: |-
                ## Purpose
                Every engineer in a small office redraws the same slab edge, lintel bearing and steel to masonry connection slightly differently, and every version needs checking from scratch. A library of twenty checked standard details, each with its limits of use, speeds up drawing production and raises the floor of quality.

                ## Milestones
                1. The twenty details your office draws most often listed from recent drawing sets.
                2. Each detail redrawn cleanly with notes, limits of use and the calculation it relies on.
                3. Every detail checked and signed by a senior engineer.
                4. The library stored with the drawing templates and reviewed each quarter.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A library of at least twenty checked standard details with limits of use is in the template folder and was reviewed last quarter."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "List the details drawn most often across your last five drawing sets"
                - "Redraw the first five details with limits of use"
                - "Have a senior engineer check and sign each detail"
                - "Review the details library for changes and new additions @recurring(quarterly)"
            - name: Choosing structural analysis and design software
              description: |-
                ## Purpose
                Licences for analysis, slab design, connection and foundation software can cost as much as a junior engineer, and switching later means rebuilding templates and retraining. Comparing two or three packages against the jobs you actually do, with a trial on a past project, leads to a choice you can justify to the partners.

                ## Milestones
                1. Requirements listed from the last year's jobs: element types, codes, interoperability with CAD and licence model.
                2. Two or three packages trialled on the same past project.
                3. Cost over three years compared, including training and support.
                4. A decision recorded with the reasons and an implementation plan.

                ## Notes
                Start from the **Purchase decision** template. Check that the vendor supports the code editions and national annexes you design to.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two or three packages have been trialled on the same past project and a decision with three-year costs is recorded."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List what your last year's jobs needed from analysis software"
                - "Request trial licences for two or three packages"
                - "Model the same past project in each trial package"
                - "Record the decision and three-year cost in the purchase decision"
            - name: Value engineering review of an over-designed scheme
              description: |-
                ## Purpose
                Contractors and quantity surveyors often come back after tender asking for savings, and a structure designed under time pressure usually has some. Reviewing utilisation ratios, load assumptions and repeated member sizes systematically finds savings that are real, rather than accepting cuts that erode margins you meant to keep.

                ## Milestones
                1. Utilisation ratios extracted for all main members and sorted, with members below about half capacity listed.
                2. Load assumptions reviewed against the design basis for conservatism that is no longer needed.
                3. Savings options listed with tonnage, volume or cost and any effect on programme or buildability.
                4. Accepted changes recorded with the client's agreement and the design basis revised.

                ## Notes
                Rationalising to fewer member sizes can cost less than shaving each member to its limit. Ask the fabricator before you optimise.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A savings schedule with quantified options is issued and the accepted changes are recorded with a revised design basis."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Export utilisation ratios for all main members and sort them"
                - "Review load assumptions against the design basis"
                - "Price each savings option with the contractor or quantity surveyor"
                - "Record the accepted changes and revise the design basis"
            - name: Structural appraisal of an existing building
              description: |-
                ## Purpose
                Change of use, a new floor or a heavy plant item on an old roof all start with a question nobody can answer from drawings that no longer exist. Appraising an existing building, from a desk study and visual survey to opening up and material testing, tells the client what the structure can carry and what it will cost to make it work.

                ## Milestones
                1. A desk study of any archive drawings, previous reports and the building's history.
                2. A visual survey with defects photographed and located on plans.
                3. Opening up and material testing specified for the critical uncertainties, such as bar sizes or steel grade.
                4. An appraisal report stating capacity, defects, assumptions and recommended works.

                ## Notes
                State every assumption you could not verify. An appraisal is only as reliable as the evidence behind it.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "An appraisal report with survey findings, test results, capacity statement and recommended works is issued to the client."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Search archives and the client's records for drawings and past reports"
                - "Plan the visual survey and book access with the building manager"
                - "Specify opening up and testing for the critical uncertainties"
                - "Write the appraisal report with capacity, defects and assumptions"
            - name: Loadbearing wall removal design for a house
              description: |-
                ## Purpose
                Knocking a kitchen and dining room together is one of the commonest jobs a structural engineer is asked to design, and one of the commonest causes of cracked ceilings when done carelessly. A clean package with the beam, padstones, temporary propping sequence and approval calculations lets the builder work safely and the homeowner get sign-off.

                ## Milestones
                1. A site visit confirming what the wall carries, including floors, roof and any walls above.
                2. Beam, bearings and padstones designed and the loads traced to foundations.
                3. A temporary propping and needling sequence shown on the drawing.
                4. Calculations and drawing submitted to the building control authority and approved.

                ## Notes
                The builder is responsible for temporary works on site, but showing a sensible propping sequence on your drawing prevents the worst mistakes.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A beam design, propping sequence drawing and calculations are approved by the building control authority for the house."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Visit the house and note what bears on the wall from above"
                - "Design the beam, bearings and padstones and trace loads down"
                - "Draw the temporary propping and needling sequence"
                - "Submit the calculations and drawing to building control"
            - name: Inspection before a major slab pour
              description: |-
                ## Purpose
                A large raft or transfer slab pour may involve hundreds of cubic metres placed in one day, with no second chance once concrete arrives. A planned inspection the day before, covering reinforcement, cover, cast-in items, construction joints and the pour sequence, with a written release, makes the day go right.

                ## Milestones
                1. The pour sequence, construction joint locations and placing method agreed with the contractor.
                2. Reinforcement, cover and laps inspected against the drawings and bar schedules.
                3. Cast-in items, ducts and starter bars checked with the services and steel trades.
                4. A written release issued with any conditions, and a contingency for a mid-pour stoppage agreed.

                ## Notes
                Start from the **Operational checklist** template. Ask what happens if the pump fails halfway; the answer decides where an emergency joint can go.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written pour release with inspection findings, construction joint plan and contingency is issued before the slab pour starts."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the contractor for the pour sequence and joint locations"
                - "Book the inspection for the day before the pour"
                - "Inspect reinforcement, cover, laps and cast-in items"
                - "Issue the written release with any conditions"
            - name: Structural design freeze and issue for construction
              description: |-
                ## Purpose
                Drawings issued for construction while the architect is still moving walls lead to rework, claims and tired engineers. A planned freeze, with outstanding inputs listed, a final coordination check and a formal issue with revision letters, gives the contractor a set they can build from.

                ## Milestones
                1. A list of outstanding architectural, services and supplier inputs, each with an owner and date.
                2. A coordination check of structural drawings against the architect's and services drawings.
                3. All calculations checked and signed, and drawings checked against them.
                4. The construction issue sent with a transmittal and a list of any held areas clearly clouded.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The structural drawing set is issued for construction with signed calculations, a transmittal and any held areas clearly marked."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "List outstanding inputs from other disciplines and suppliers with dates"
                - "Run a coordination check against the architect's drawings"
                - "Confirm all calculations are signed before the issue date"
                - "Issue the construction set with a transmittal and held areas clouded"
            - name: Building authority structural approval submission
              description: |-
                ## Purpose
                Building control bodies and permitting authorities ask for calculations, drawings and sometimes a certificate of design and check before work starts, and incomplete submissions are the main source of delay. Preparing a clear, indexed package with a summary of the design basis gets approval faster and with fewer questions.

                ## Milestones
                1. The authority's current submission requirements checked and listed.
                2. An indexed calculation package with design basis summary, load paths and key element designs.
                3. Drawings, specifications and any design or check certificates included.
                4. The approval received, or every query answered and logged.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A complete structural submission is lodged with the authority and approval is received or every query answered in writing."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Check the authority's current structural submission requirements"
                - "Write a one page design summary for the front of the package"
                - "Assemble calculations, drawings and certificates with an index"
                - "Log every authority query and the date it was answered"
            - name: Load test of a floor or structure
              description: |-
                ## Purpose
                When calculations cannot confirm the capacity of an existing floor, a precast unit of doubtful quality or a new anchor installation, a load test may be the answer. Planning the test properly, with safety exclusion zones, instrumentation, acceptance criteria and a stop rule, makes it informative rather than dangerous.

                ## Milestones
                1. A test method statement with load, increments, hold times, instrumentation and acceptance criteria.
                2. Safety arrangements agreed: exclusion zone, propping under the test area and a stop rule if deflection exceeds a set value.
                3. The test carried out with readings recorded at each increment and on unloading.
                4. A test report issued with results, recovery and a conclusion on capacity.

                ## Notes
                A load test can damage the structure it is testing. Decide in advance the reading at which you stop, and make sure everyone on site knows it.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A load test is carried out under an agreed method statement with a stop rule, and a report with readings and conclusion is issued."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Draft the method statement with load increments and acceptance criteria"
                - "Agree the exclusion zone, propping and stop rule with the contractor"
                - "Arrange deflection gauges and a person to record each reading"
                - "Write the test report with readings, recovery and conclusion"
            - name: Structural input to the health and safety file at handover
              description: |-
                ## Purpose
                Whoever alters or demolishes the building in thirty years needs to know about post-tensioned tendons, transfer structures, design loads and residual hazards. A clear structural section of the health and safety or building owner's file, written at handover, is the most useful thing you leave behind.

                ## Milestones
                1. Design loads, including imposed loads per floor and roof plant allowances, stated in plain terms.
                2. Residual hazards listed, such as post-tensioning, transfer beams, prestressed units and propping-sensitive elements.
                3. Key drawings and calculation references listed for future engineers.
                4. The structural section accepted by the principal designer or client and filed.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A structural section listing design loads, residual hazards and key references is accepted into the building's health and safety file."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List design loads per floor and roof in plain language"
                - "List residual structural hazards such as tendons and transfers"
                - "Add the key drawing and calculation references"
                - "Send the structural section to the principal designer for acceptance"
            - name: First year in a structural design office
              description: |-
                ## Purpose
                Graduate structural engineers are often handed a model and a deadline before they have designed a beam by hand at work. A first year plan built around checked hand calculations, regular site visits and a growing list of elements designed gives you the evidence your lead needs to trust you with more.

                ## Milestones
                1. A development plan agreed with your lead naming the element types you will design this year.
                2. At least ten checked hand calculations filed, covering concrete, steel and one other material.
                3. Six site visits completed with a short note of what you saw and learned on each.
                4. A year-end review with your lead recorded, with next year's targets.

                ## Notes
                Start from the **Development plan** template. Broader professional registration preparation sits with graduate development; this plan is about structural design competence.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten checked hand calculations and six site visit notes are filed, and a year-end review with your lead is recorded."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Agree with your lead which element types you will design this year"
                - "Start a folder for checked hand calculations"
                - "Ask to join the next site visit on any live job"
                - "Book a year-end review with your lead in the diary"
            - name: From design office to resident engineer on site
              description: |-
                ## Purpose
                Moving to site as a resident or site engineer changes the work from calculations to judgement calls in mud, with a contractor waiting for an answer. Preparing for the move, with a clear delegation of what you can approve, a daily diary habit and a working relationship with the site team, makes the first months productive rather than stressful.

                ## Milestones
                1. Your delegated authority agreed in writing: what you can approve on site and what goes back to the design office.
                2. A site diary kept each working day with weather, activities, instructions and inspections.
                3. Introductions made to the site manager, foremen and the contractor's temporary works coordinator.
                4. A weekly report to the design office with progress, issues and queries.

                ## Notes
                Never give an instruction outside your delegated authority, however much time pressure there is. Record what you said and to whom.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written delegation of authority exists, the site diary has an entry for every working day, and weekly reports reach the design office."
                cadence: phased
              tasks:
                - "Ask your project director to confirm your delegated authority in writing"
                - "Set up a site diary with weather, activities and instructions sections"
                - "Meet the site manager and the temporary works coordinator in the first week"
                - "Send the weekly site report to the design office @recurring(weekly:tue)"
            - name: Temporary works design for a contractor
              description: |-
                ## Purpose
                Falsework, propping, excavation support and crane bases cause a large share of construction collapses, often because the design or the check was informal. Working as a contractor's temporary works designer means agreeing a clear brief, designing to the right standards, getting the right category of check and making sure the works are inspected before loading.

                ## Milestones
                1. A temporary works register with each item, its designer, check category and permit to load status.
                2. A written design brief from the temporary works coordinator for each item, with loads and constraints.
                3. Designs checked at the agreed category, with the checker's certificate filed.
                4. Permit to load or strike issued only after inspection against the design.

                ## Notes
                A temporary works item without a permit to load should not be loaded. If you see one being loaded, stop the work and tell the coordinator.
              priority: high
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Every temporary works item has a brief, a checked design and a permit to load issued after inspection, all shown on the register."
                cadence: rolling
              tasks:
                - "Ask the temporary works coordinator for the current register"
                - "Request a written design brief for each item assigned to you"
                - "Review the register for items awaiting check or permit @recurring(weekly:mon)"
                - "Inspect each item against its design before signing the permit to load"
            - name: Setting up as a sole structural consultant
              description: |-
                ## Purpose
                Many structural engineers leave larger firms to design extensions, alterations and small buildings on their own account. Getting the structural side right from day one, with professional indemnity insurance that covers structural design, standard terms limiting scope, a checking arrangement with a peer and a calculation template set, protects you on the first job and the hundredth.

                ## Milestones
                1. Professional indemnity insurance in place covering structural design, with the limit and exclusions read.
                2. Standard terms of appointment stating scope, exclusions such as temporary works, and fee basis.
                3. A reciprocal checking arrangement with another registered engineer for jobs above an agreed size.
                4. A standard job workflow from enquiry to approval written down and used on the first three jobs.

                ## Notes
                Ask your professional body for any guidance on sole practice. Read the insurance exclusions closely: some policies exclude specific structural work types.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Insurance covering structural design, standard appointment terms and a peer checking arrangement are in place and used on the first job."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Get two quotes for professional indemnity cover for structural design"
                - "Draft standard appointment terms with clear scope and exclusions"
                - "Agree a reciprocal checking arrangement with a registered peer"
                - "Review open jobs, approvals and unpaid fees for the month @recurring(monthly:2)"
            - name: Checking engineer for a team of junior designers
              description: |-
                ## Purpose
                Stepping up to check other engineers' calculations is a shift from doing the work to judging it, and the risk is either rubber-stamping or rewriting everything. A consistent checking approach, with independent hand checks of critical elements, written comments and time set aside for teaching, raises the team's work without making you the bottleneck.

                ## Milestones
                1. A checking approach written down: what you always check independently, what you sample and how comments are recorded.
                2. Each check including an independent calculation for the critical elements.
                3. Comment sheets filed with responses from the designer.
                4. A monthly sample review of one junior's work used for coaching.

                ## Notes
                If you sign as checker, you must have checked. Put a limit on the number of packages you take per week so the quality of each check holds.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written checking approach is in use, each check has an independent calculation filed, and a monthly coaching review is held."
                cadence: rolling
              tasks:
                - "Write down what you always check independently and what you sample"
                - "Set up a comment sheet template for calculation checks"
                - "Review one junior's calculation package as a coaching session @recurring(monthly:4)"
                - "Agree a weekly limit on packages you will check"
            - name: Switching to another country's structural codes
              description: |-
                ## Purpose
                Engineers moving between regions, or returning after a career break, find that load combinations, partial factors and detailing rules have changed underneath them. A structured conversion, working the same elements through the new code and noting where answers differ, gets you designing safely in the new system within weeks.

                ## Milestones
                1. The new code family, editions and annexes confirmed with your employer or the local authority.
                2. A comparison sheet of load combinations, partial factors and key detailing rules between old and new codes.
                3. Three elements you know well redesigned to the new code and checked by a local engineer.
                4. Local registration or licensing requirements for signing designs checked and noted.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A code comparison sheet and three redesigned elements, checked by a local engineer, are filed, with local signing requirements noted."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Confirm which code family and editions apply in the new location"
                - "Build a comparison sheet of load combinations and partial factors"
                - "Redesign a beam, a column and a slab to the new code"
                - "Check the local rules on who may sign structural designs"
            - name: Rapid structural assessment after fire or impact
              description: |-
                ## Purpose
                After a fire, a vehicle strike on a column or a partial collapse, the owner and emergency services need to know quickly whether the building is safe to enter, needs propping or must be cleared. A prepared assessment method, with a kit, a safety-first sequence and a simple safe, restricted or unsafe classification, lets you give a clear answer under pressure.

                ## Milestones
                1. A rapid assessment form with safe, restricted use and unsafe categories and the evidence needed for each.
                2. A personal safety sequence: never enter until the emergency services release the area, and never alone.
                3. Emergency propping options and local suppliers listed in advance.
                4. One assessment, real or exercise, written up within a day with recommendations.

                ## Notes
                Start from the **Remediation plan** template for the follow-up works. Your safety comes before the assessment; leave if conditions change.
              priority: high
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A rapid assessment form, safety sequence and propping supplier list exist, and one assessment or exercise has been written up within a day."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Draft a rapid assessment form with three safety categories"
                - "Write your personal safety sequence for entering a damaged building"
                - "List emergency propping suppliers with out-of-hours numbers"
                - "Check the assessment kit and refresh supplier contacts @recurring(yearly)"
            - name: Crack and movement monitoring of an existing building
              description: |-
                ## Purpose
                Owners often call about cracks that may be old, seasonal or the start of foundation movement, and a single visit cannot tell which. Setting up tell-tales or survey points and reading them on a regular cycle for six to twelve months shows whether movement is active, cyclic or stable before anyone spends money on underpinning.

                ## Milestones
                1. Cracks mapped on plans and elevations with width, pattern and photographs.
                2. Tell-tales or survey studs installed at the key cracks with baseline readings recorded.
                3. Readings taken on a regular cycle and plotted against time and rainfall or season.
                4. A monitoring report with a conclusion on whether movement is active and what to do next.

                ## Notes
                Start from the **Metrics log** template. Six months of readings covering a wet and a dry season says far more than one visit.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "At least six months of crack readings are plotted and a monitoring report with a conclusion on movement is issued."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Map visible cracks on plans with widths and photographs"
                - "Install tell-tales at the key cracks and record baseline readings"
                - "Read the tell-tales and add the results to the plot @recurring(monthly:14)"
                - "Write the monitoring report once six months of data are in"
            - name: Strengthening design for an existing structure
              description: |-
                ## Purpose
                New loads, corrosion damage or an appraisal that found too little capacity all lead to strengthening, and the options range from steel plating and section enlargement to fibre-reinforced polymer wraps. Designing the work properly means understanding the existing condition, choosing a method that suits access and occupancy, and specifying installation and inspection.

                ## Milestones
                1. The capacity shortfall stated for each element, with the evidence from the appraisal.
                2. Two strengthening methods compared on capacity gain, disruption, fire performance and cost.
                3. The chosen scheme designed, with temporary propping and the installation sequence shown.
                4. Inspection and testing requirements for the installed strengthening specified.

                ## Notes
                Fibre-reinforced polymer systems often need fire protection and depend on the substrate. Check the supplier's design guidance and your code's requirements.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A strengthening design with method comparison, installation sequence and inspection requirements is issued for construction."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "State the capacity shortfall for each element from the appraisal"
                - "Compare two strengthening methods on capacity, disruption and cost"
                - "Design the chosen scheme with its propping and installation sequence"
                - "Specify inspection and testing for the installed strengthening"
            - name: Forensic investigation of a structural failure
              description: |-
                ## Purpose
                When a beam sags, a balcony drops or a roof collapses, insurers, lawyers and owners want to know why, and the answer may end up in court. A disciplined investigation, preserving evidence, building a timeline, testing hypotheses against calculations and material tests, and writing an impartial report, is specialist work with real consequences.

                ## Milestones
                1. Evidence preserved and recorded: photographs, samples with chain of custody, drawings and site records.
                2. A timeline of design, construction, use and the failure event.
                3. Competing failure hypotheses tested against calculations and test results.
                4. An impartial report stating findings, the degree of certainty and the limits of the investigation.

                ## Notes
                If the report may be used in legal proceedings, ask the instructing solicitor about the duties of an expert in that jurisdiction before you start writing.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "An investigation report with preserved evidence, a timeline and tested hypotheses, stating the degree of certainty, is issued to the client."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Photograph and record the failure before anything is moved"
                - "Collect drawings, calculations and site records for the structure"
                - "Build a timeline from design through to the failure event"
                - "Test each failure hypothesis against calculations and samples"
            - name: Periodic structural inspection of a car park
              description: |-
                ## Purpose
                Multi-storey car parks suffer from de-icing salts, water ponding and impact damage, and many owners only call an engineer when concrete falls. A planned inspection regime, with condition ratings, a defect register and a programme of repairs, keeps the structure in service and gives the owner a budget instead of a surprise.

                ## Milestones
                1. An inspection plan with frequency, areas, access and any testing such as chloride or half-cell surveys.
                2. A defect register with location, condition rating, photographs and priority.
                3. A repair programme with costs ranked by urgency and risk.
                4. The annual inspection completed and the report issued to the owner.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "An inspection plan, defect register with condition ratings and a ranked repair programme are issued to the car park owner."
                cadence: cyclic
              tasks:
                - "Agree the inspection scope and access arrangements with the owner"
                - "Set up a defect register with condition ratings"
                - "Specify any chloride or corrosion testing needed this cycle"
                - "Carry out the annual inspection and issue the report @recurring(yearly)"
---

# Structural Engineering Practice

This area is for structural engineers in design offices, on site and in small practices who want the daily work of loads, members, connections, drawings and inspections to run on a system rather than on memory. It starts with foundations (a design basis for every job, a responsibility matrix, load paths, a take-down and a checking level), then the weekly machinery of calculation sign-off, drawing checks, submittals, queries and site visits, the design skills in concrete, steel, timber, masonry, stability, serviceability and fire, the scheme and software choices, dated moments from design freeze to the big pour, variants for graduates, resident engineers, temporary works designers, sole consultants and checking engineers, and finally specialist work on damage assessment, monitoring, strengthening and forensic investigation.

What repeats is a weekly rhythm of calculation sign-off, drawing checks, shop drawing returns, query replies and site inspections, a monthly look at concrete results, design errors, fee burn and peer review, and quarterly checks on code amendments, standard details and your CPD record. The Operational checklist, Metrics log, Purchase decision, Development plan and Remediation plan templates pair with the projects that use them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
