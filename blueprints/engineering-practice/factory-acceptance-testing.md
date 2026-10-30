---
id: engineering-practice.factory-acceptance-testing
name: Factory Acceptance Testing
description: "A working system for factory and site acceptance tests: test requirements pinned to the PO, ITPs and witness points agreed, criteria signed before the day, punch items closed and equipment released with its records."
category: business
version: 1.0.0
tags: [engineering-practice, factory-acceptance-testing, engineer, fat, sat, inspection-and-test-plans, vendor-packages, witness-testing]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - vendor
    - trip
    - meeting-notes
    - remediation-plan
    - metrics-log
  pillars:
    - name: Engineering Practice
      emoji: "🔧"
      description: "The day-to-day work of practising engineers: each major discipline, process safety and risk studies, FEED, design reviews, commissioning, reliability and maintenance, CAD, simulation and PLC work, project delivery, tenders, reports, ethics and standards, and the Caribbean energy sector from Point Lisas to LNG."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Factory Acceptance Testing
          description: "Planning and witnessing factory and site acceptance tests: test procedures, witness points, punch items, vendor documents and release for shipment."
          projects:
            - name: Map which packages need FAT, SAT or both
              description: |-
                ## Purpose
                Every purchase order on a project carries some test obligation, but on a typical plant job only a fraction of the equipment packages justify sending someone to the vendor's shop. One table listing each package, the tests its specification demands and whether they happen at the factory, on site or both lets you plan witness travel, budget and schedule before vendors start booking test dates. Doing it in the first weeks after award costs a day; doing it after the first surprise notification costs a flight.

                ## Milestones
                1. A package list pulled from the procurement register with tag numbers, vendor and purchase order number for each.
                2. Each package marked FAT, SAT, both or document review only, with the reason in one line.
                3. An expected test month pencilled against each package from the vendor's quoted delivery.
                4. The map agreed with the package engineers and the project lead, and stored where the whole team can see it.

                ## Notes
                Packages with control panels, rotating machinery or custom pressure equipment almost always need a factory test. Bulk items such as gaskets, fittings and standard cable rarely justify one.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every equipment package on the procurement register is classified as FAT, SAT, both or review only, and the table is agreed by the project lead."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Export the current procurement register with tag numbers and PO references"
                - "Mark each package FAT, SAT, both or review only with a one-line reason"
                - "Note the expected test month beside each package from quoted delivery dates"
                - "Walk the table through with the package engineers and record their changes"
            - name: Test requirements matrix from the purchase order
              description: |-
                ## Purpose
                Test obligations are scattered across the purchase order, the equipment datasheet, the project specifications and the standards those documents reference, and vendors quote against whatever they happened to find. Pulling them into one matrix per package, clause by clause, is how you discover before the test that the specification asked for a mechanical run test or a noise test that the vendor never priced. The matrix then drives the ITP review, the procedure review and the witness report.

                ## Milestones
                1. Every test clause from the purchase order, datasheet and specifications listed with its document number and section.
                2. Each referenced standard named with the edition the purchase order calls for.
                3. Gaps and conflicts between documents flagged and sent to the vendor as technical queries.
                4. The vendor's written confirmation of which tests are in scope and priced, filed with the matrix.

                ## Notes
                Read the remarks column and the optional test tick boxes on the datasheet. Optional tests such as NPSH, string or temperature rise tests are often selected there rather than written in the specification.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Each critical package has a test requirements matrix listing every test with its source clause and the vendor's written confirmation of scope."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Open the PO, datasheet and specifications for the most critical package"
                - "List every test clause with its document number and section"
                - "Ask the agent to compare the matrix with the vendor's quoted test list and flag gaps"
                - "Send the gaps to the vendor as technical queries through the buyer"
            - name: Inspection and test plan review with each vendor
              description: |-
                ## Purpose
                The inspection and test plan is the working contract for what gets checked, by whom and when, and its hold, witness, monitor and review codes decide whether production can carry on without you. Reviewing each vendor's ITP against your requirements matrix soon after award stops the classic failure where a hold point appears for the first time in a notification email. It is also the cheapest moment to add a test, because nothing has been built yet.

                ## Milestones
                1. ITPs received for every package marked FAT or SAT.
                2. Each ITP line checked against the test requirements matrix, with missing tests added as comments.
                3. Hold, witness, monitor and review codes set for the client and for any third-party inspector.
                4. Commented ITPs returned and the final revision accepted with no open comments.

                ## Notes
                Agree the meaning of each code in writing. A witness point the vendor may pass after giving notice is very different from a hold point that stops work until you release it.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every package needing FAT or SAT has an accepted ITP revision with client hold and witness points marked and the code definitions agreed in writing."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Chase every ITP not yet received for packages on the FAT list"
                - "Check each ITP line against the test requirements matrix"
                - "Mark client hold and witness points on the critical tests"
                - "Return the commented ITPs with a resubmission date"
            - name: Notification and witness point register
              description: |-
                ## Purpose
                Vendors are obliged to give notice before a hold or witness point, usually a set number of working days written into the purchase order, and one missed notification can mean a lost witness or a test repeated at your cost. A register that turns every ITP hold and witness point into a dated line, showing who has been told and who is going, keeps a dozen vendors in view at once. Checked weekly, it is the single place the inspection team looks before agreeing any date.

                ## Milestones
                1. Every hold and witness point from the accepted ITPs entered as a line with package, test and expected date.
                2. The notice period from each purchase order recorded against its vendor.
                3. A named witness and a backup assigned to each point.
                4. Notifications logged with the date received, the date confirmed and any shortfall in notice.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every hold and witness point from accepted ITPs sits in one register with an expected date, a named witness and the vendor's notification logged."
                cadence: rolling
              tasks:
                - "Create the register with columns for package, test, notice period and witness"
                - "Enter every hold and witness point from the accepted ITPs"
                - "Assign a named witness and a backup to each point"
                - "Check the register against new vendor notifications @recurring(weekly:tue)"
            - name: Vendor FAT procedure review
              description: |-
                ## Purpose
                A vendor's FAT procedure written the week before the test usually describes what the shop always does, not what your specification requires. A proper review checks the test sequence, the values measured, the acceptance criteria, the instruments and the record sheets, so that on the day nothing is left to argue about except the results. Getting procedures approved two weeks ahead also gives the vendor time to arrange anything extra the review uncovers.

                ## Milestones
                1. The procedure checked against the test requirements matrix line by line.
                2. Every test step stating what is measured, with which instrument, and the pass criterion.
                3. Blank record sheets attached so the results format is agreed in advance.
                4. Comments closed and the procedure approved at least two weeks before the test date.

                ## Notes
                Start from the **Operational checklist** template to build a review checklist you can reuse on every package. Reject any step that only says it follows the standard without naming the clause and the value that applies.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The FAT procedure for the first critical package is approved with acceptance criteria and blank record sheets at least two weeks before its test date."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Request the draft FAT procedure for the next scheduled test"
                - "Check that every step names a measurement, an instrument and a pass value"
                - "Ask for blank record sheets to be attached to the procedure"
                - "Close the review comments with the vendor in a short call"
            - name: Acceptance criteria signed before the test
              description: |-
                ## Purpose
                Disputes at a FAT nearly always trace back to a criterion nobody pinned down: a tolerance on head and flow, a permissible vibration level, a seat leakage rate, an insulation resistance value. Writing each criterion as a number with units, its source clause and the measurement method, and getting the vendor to sign the table, turns the test day into a check rather than a negotiation. It also tells you in advance which results are marginal enough to deserve a second reading.

                ## Milestones
                1. A criteria table for each critical package with value, units, tolerance and source clause.
                2. Criteria that depend on a standard's grade or class confirmed with that grade named.
                3. The measurement method and instrument accuracy noted wherever the margin is tight.
                4. The vendor's signature on the table recorded before the test.

                ## Notes
                When a standard offers several tolerance grades or acceptance classes, the purchase order must name one. If it does not, raise it now through the buyer, not on the test floor.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A signed acceptance criteria table exists for each critical package, with every criterion stated as a number, units and source clause."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every pass or fail criterion for the first critical package"
                - "Confirm the tolerance grade or acceptance class the PO calls for"
                - "Add the measurement method beside each criterion with a tight margin"
                - "Get the vendor's signature on the criteria table"
            - name: Calibration evidence for vendor test instruments
              description: |-
                ## Purpose
                Test results are only as good as the gauge, flow meter or test set behind them, and an expired calibration certificate can invalidate a whole day of witnessing. Asking for the instrument list and certificates when the procedure is approved, rather than on arrival, gives the vendor time to recalibrate or swap instruments before the date. It also lets you check that a gauge reading near the top or bottom of its range is not being used for the critical value.

                ## Milestones
                1. An instrument list for each FAT with tag, range, accuracy and certificate number.
                2. Every certificate in date for the test day and traceable to an accredited calibration laboratory.
                3. Instrument ranges confirmed as suitable for the values being measured.
                4. Certificate copies filed with the FAT record for the package.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each scheduled FAT has an instrument list with in-date, traceable calibration certificates filed before the test day."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the vendor for the test instrument list with certificate numbers"
                - "Check each certificate's expiry against the planned test date"
                - "Confirm gauge ranges suit the test pressures and values"
                - "File the certificates in the package's FAT folder"
            - name: Pre-FAT readiness check with the vendor
              description: |-
                ## Purpose
                Arriving at a shop to find the panel half wired or the skid still being painted wastes a flight and a week of schedule. A readiness check one to two weeks before the test, covering build completion, the vendor's own internal test, documents and test facilities, decides go or postpone while postponing is still cheap. The rule that travel is booked only after a go decision saves more money than any other habit in this area.

                ## Milestones
                1. A readiness checklist agreed with the vendor covering build, internal test, documents and test facilities.
                2. The vendor's internal pre-test results received and reviewed.
                3. A go or postpone decision recorded with the date and the name of whoever made it.
                4. Travel booked only after a go decision.

                ## Notes
                Start from the **Operational checklist** template. Ask for dated photos of the equipment set up on the test bed; they reveal more than any status report.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A documented go or postpone decision, based on a completed readiness checklist and the vendor's internal test results, precedes every witness trip."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft a readiness checklist covering build, internal test, documents and facilities"
                - "Ask for dated photos of the equipment set up on the test bed"
                - "Review the vendor's internal pre-test results against the procedure"
                - "Record the go or postpone decision before anyone books travel"
            - name: Personal safety on the vendor test floor
              description: |-
                ## Purpose
                Factory test floors combine pressurised vessels, machines running on temporary guarding, high-voltage test sets and loose cabling, and a visiting witness usually knows the hazards less well than anyone else in the bay. Preparing your own PPE, understanding the shop's rules and knowing that your stop-work authority travels with you keeps a witness visit from becoming an incident. No test result is worth standing in the wrong place for.

                ## Milestones
                1. Your own PPE packed to the vendor's stated requirements, including safety footwear, glasses and hearing protection.
                2. The shop's visitor induction completed and the exclusion zones for pressure and electrical tests understood.
                3. An agreement with the vendor's test lead on when, if ever, a witness may enter an exclusion zone.
                4. Any unsafe act or condition you see stopped and reported, with the outcome noted in your witness report.

                ## Notes
                Pneumatic tests store far more energy than hydrostatic tests at the same pressure. Do not approach a pneumatic test without a calculated exclusion distance, a physical barrier and the vendor's permit or test authorisation in place.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Before the first witness visit you hold the vendor's visitor safety rules, carry your own PPE and have agreed exclusion zone rules with the test lead."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the vendor for their visitor safety rules and PPE requirements"
                - "Pack safety footwear, glasses, hearing protection and gloves for the trip"
                - "Ask the test lead to walk you through exclusion zones on arrival"
                - "Record any safety observation and its outcome in the witness report"
            - name: Monday six-week test look-ahead
              description: |-
                ## Purpose
                Test dates slip constantly, and they slip silently until a notification lands three days before a flight would have to leave. A short look-ahead of the next six weeks, refreshed every Monday from vendor progress reports and the notification register, lets you shuffle witnesses, combine trips to the same region and warn the schedule owner early. Ten minutes a week replaces most of the panic calls.

                ## Milestones
                1. A six-week look-ahead of planned tests with a confidence rating for each date.
                2. Witness assignments confirmed for the next two weeks.
                3. Trips to the same city or country combined wherever dates allow.
                4. Slips of more than a week reported to the project scheduler on the day they are known.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A six-week test look-ahead is refreshed every Monday and any slip over a week reaches the project scheduler the same day."
                cadence: rolling
              tasks:
                - "Build a six-week look-ahead from the notification register"
                - "Refresh test dates from vendor progress reports @recurring(weekly:mon)"
                - "Combine witness trips where vendors share a city or region"
                - "Send date slips of more than a week to the project scheduler"
            - name: Punch list from FAT to closure
              description: |-
                ## Purpose
                Almost every FAT ends with punch items, from missing tag plates to a failed functional check, and a punch list kept in a witness's notebook is why the same defects turn up again at site. Categorising each item, deciding which must close before shipment and which may travel, and reviewing the list weekly with each vendor keeps the shipment release honest. The list is also the evidence when a vendor later claims an item was never raised.

                ## Milestones
                1. One punch list per package with item, category, owner, due date and closure evidence.
                2. Categories agreed in writing: items that block shipment, items that may close at site, and observations.
                3. Every shipment-blocking item closed with evidence before release.
                4. Items allowed to travel carried into the site punch list with the vendor's written commitment to close them.

                ## Notes
                A photo and a signed record count as evidence. A vendor email saying an item is done does not.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every open FAT punch item has a category, owner and due date, and no package is released with an open shipment-blocking item."
                cadence: rolling
              tasks:
                - "Set up a punch list with item, category, owner, due date and evidence columns"
                - "Agree the punch categories with each active vendor in writing"
                - "Review open punch items with each active vendor @recurring(weekly:wed)"
                - "Attach closure evidence before marking any punch item closed"
            - name: Manufacturing data record tracker
              description: |-
                ## Purpose
                Material certificates, test records, calibration certificates and as-tested drawings make up the manufacturing data record, and they are what operations will need in ten years when a part fails or an inspector asks for the hydrotest chart. Tracking which records each vendor owes, and checking the status every month, avoids the end-of-project scramble where equipment has shipped and the documents never followed. Tying the final record to the final payment milestone gives the vendor a reason to finish it.

                ## Milestones
                1. An MDR index agreed with each vendor listing every record due.
                2. Each test record linked to the ITP line it evidences.
                3. A monthly status showing records received, reviewed and accepted for every package.
                4. Final MDRs accepted before each vendor's final payment milestone.

                ## Notes
                Agree the index early. Vendors compile what the index asks for, and anything left out of it will be missing at the end.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each package has an agreed MDR index with status updated monthly, and every final MDR is accepted before the vendor's final payment."
                cadence: rolling
              tasks:
                - "Ask each vendor for their draft MDR index"
                - "Link each test record to the ITP line it evidences"
                - "Update the MDR status for every package @recurring(monthly:8)"
                - "Flag missing records to the buyer ahead of payment milestones"
            - name: Witness reports within two working days
              description: |-
                ## Purpose
                Reports written a week later, from memory, lose the readings that were marginal and the conversation where the vendor agreed to retest. Issuing a short report within two working days of every test, with results against criteria, punch items, photos and a clear verdict of accept, accept with punch or reject, creates the record that the package engineer, the buyer and the site team all rely on. A fixed layout makes the two-day rule realistic.

                ## Milestones
                1. A standard one-page report layout with results against criteria, punch items, photos and a verdict box.
                2. Every witnessed test reported within two working days.
                3. Each report sent to the package engineer, the buyer and the vendor.
                4. Reports filed against the ITP line they close.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every witnessed test has a report issued within two working days, with a stated verdict, filed against its ITP line."
                cadence: rolling
              tasks:
                - "Draft a one-page witness report layout with a verdict box"
                - "Ask the agent to turn your test notes and readings into a report draft"
                - "Send each report to the package engineer, buyer and vendor"
                - "File each report against the ITP line it closes"
            - name: Monthly test readiness call with expediting
              description: |-
                ## Purpose
                Expeditors know when castings are late and panels are waiting for relays, and that is exactly what moves a FAT date. A monthly call between the inspection lead and the expediting lead, walking each package due to test in the next quarter, connects shop progress to test planning before either side is surprised. Vendors who slip twice get noticed before they slip a third time.

                ## Milestones
                1. A standing monthly call agreed with the expediting lead.
                2. Each package due to test in the next three months reviewed for material and fabrication status.
                3. Changed test dates fed into the look-ahead and the notification register within a day.
                4. Vendors with repeated slips flagged for a shop visit or escalation.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly call reviews every package due to test in the next three months, and agreed date changes appear in the look-ahead within a day."
                cadence: rolling
              tasks:
                - "Set up a standing monthly call with the expediting lead"
                - "Review packages due to test in the next quarter @recurring(monthly:15)"
                - "Feed changed test dates into the look-ahead and the register"
                - "Escalate vendors with two slipped test dates to the buyer"
            - name: Inspection release note process
              description: |-
                ## Purpose
                Signing an inspection release note is what lets a vendor ship and often invoice, so do it only when the tests, punch items and documents it depends on are complete. A defined release checklist, with a rule about who may sign and how a conditional release is recorded, protects the project from equipment arriving at site with open defects and no records. Once equipment leaves the shop, the vendor's attention moves to the next order.

                ## Milestones
                1. A release checklist covering tests passed, shipment-blocking punch closed, preservation, marking and documents.
                2. Named release signatories agreed for each package.
                3. Release notes issued only against a completed checklist.
                4. Conditional releases recorded with their conditions and the name of whoever accepted them.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A release checklist and named signatories are in use, and no package ships without a completed checklist or a recorded conditional release."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a release checklist covering tests, punch, preservation, marking and documents"
                - "Agree named release signatories with the project lead"
                - "Check the next release request against the checklist"
                - "Record any conditional release with its conditions and approver"
            - name: Non-conformance and concession handling
              description: |-
                ## Purpose
                When a test fails or a reading sits just outside tolerance, the vendor will often ask to accept it as is, and that decision belongs to the engineer responsible for the design, not to whoever happens to be on the test floor. A clear route for non-conformance reports, concession requests and technical review means failed results get a considered written answer instead of a handshake. Accepted concessions must follow the equipment into its final records, or the next engineer will never know.

                ## Milestones
                1. A non-conformance report format agreed with vendors, covering what was found, the requirement and the proposed disposition.
                2. A written rule naming who decides each type of concession.
                3. Open non-conformances reviewed weekly until closed.
                4. Every accepted concession recorded in the equipment's final documents.

                ## Notes
                A witness may record a result and refuse to sign it, but should not accept a deviation on the spot. Where a concession affects safety, pressure containment or a safety function, it goes through management of change as well.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every test non-conformance has a written disposition from the responsible engineer, and accepted concessions appear in the equipment's final records."
                cadence: rolling
              tasks:
                - "Agree a non-conformance report format with the active vendors"
                - "Write down who may decide each type of concession"
                - "Review open non-conformance reports with the package engineers @recurring(weekly:fri)"
                - "Add each accepted concession to the package's final record index"
            - name: Site test instrument register
              description: |-
                ## Purpose
                For site acceptance tests your own team or the installation contractor supplies the insulation testers, loop calibrators, multimeters and test gauges, and the calibration discipline you demand of vendors applies to you too. A small register of site test instruments, with due dates and a monthly check, means nobody signs a SAT record taken with an expired meter. It also stops the slow loss of good instruments to other jobs.

                ## Milestones
                1. Every site test instrument listed with serial number, owner, range and calibration due date.
                2. Certificates filed for each instrument in the register.
                3. Instruments due in the next month sent for calibration before they expire.
                4. A rule that SAT records state the instrument serial numbers used.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All site test instruments are listed with in-date certificates, and every SAT record names the serial numbers of the instruments used."
                cadence: rolling
              tasks:
                - "List every site test instrument with serial number and calibration due date"
                - "File the current certificate for each instrument"
                - "Send instruments due within a month for calibration @recurring(monthly:22)"
                - "Add an instrument serial number field to the SAT record sheets"
            - name: Lessons learned log from every FAT
              description: |-
                ## Purpose
                Identical failures recur across projects: wrong cable glands, missing nameplates, unfinished software, test benches unable to reach rated flow. A lessons log filled within a week of each test, and reviewed every quarter with procurement and engineering, turns those repeats into specification clauses and ITP lines so the next project starts better. Three lessons per test is enough to make the log useful.

                ## Milestones
                1. A lessons log with columns for package, vendor, equipment type, what happened and the proposed change.
                2. Three lessons recorded within a week of each FAT.
                3. A quarterly review held with the procurement and engineering leads.
                4. At least one repeated lesson turned into a specification or ITP change each year.
              priority: low
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "The log holds lessons from every FAT, is reviewed quarterly, and at least one lesson a year becomes a specification or ITP change."
                cadence: rolling
              tasks:
                - "Add three lessons to the log within a week of each FAT"
                - "Tag each lesson by vendor, equipment type and cause"
                - "Review the log with the procurement and engineering leads @recurring(quarterly)"
                - "Turn a repeated lesson into a proposed specification change"
            - name: Witnessing hydrostatic and pneumatic pressure tests
              description: |-
                ## Purpose
                Pressure tests on vessels, piping spools and heat exchangers are the most common witness point and the one with the most stored energy. Knowing what to check, from the test pressure calculation and gauge positions to hold time, test medium and what counts as a leak, lets you witness with authority and spot a test that is being rushed. The design code named on the datasheet, such as ASME Section VIII or B31.3, sets the rules; the approved procedure applies them.

                ## Milestones
                1. The test pressure and hold time for the item confirmed from the design code and the approved procedure.
                2. At least two calibrated gauges in place, one visible to the witness, with ranges suited to the test pressure.
                3. Water quality and metal temperature limits checked where materials are sensitive, such as chlorides on stainless steel.
                4. A witnessed test with readings or a pressure chart and a signed record.

                ## Notes
                Close examination during a pneumatic test is made at the reduced pressure the code and procedure set, never at full test pressure. Keep out of the exclusion zone until the test lead says it is safe.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You have witnessed and signed at least one pressure test record after confirming the test pressure, hold time and gauges against the code and procedure."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read the pressure test clauses of the design code named on the datasheet"
                - "Check the test pressure calculation in the next vessel's procedure"
                - "Confirm gauge count, ranges and calibration before pressurising starts"
                - "Witness a hold period and record readings at its start and finish"
            - name: Reading a centrifugal pump performance test
              description: |-
                ## Purpose
                Pump tests produce a page of readings that only mean something once corrected to rated speed and plotted against the predicted curve and the tolerance band your purchase order calls for. Learning how ISO 9906 and API 610 (ISO 13709) tests are run, and what head, flow, power, efficiency, NPSH, vibration and bearing temperature results should look like, lets you judge a pass on the day rather than after the vendor has packed up.

                ## Milestones
                1. The predicted curve, rated point and tolerance grade for one pump gathered in one place.
                2. The method for correcting test results to rated speed understood and tried on sample data.
                3. Witnessed points plotted against the predicted curve and tolerance band.
                4. Vibration and bearing temperature readings checked against the specification limits.

                ## Notes
                Ask whether the test bench can reach the full flow range. Benches that cannot reach runout or rated flow will extrapolate, and extrapolated points are not witnessed points.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You can plot a witnessed pump test against its predicted curve and tolerance band and state a pass or fail with reasons for each criterion."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Get the vendor's predicted pump curve and the datasheet rated point"
                - "Learn how test readings are corrected to rated speed"
                - "Plot witnessed points against the predicted curve and tolerance band"
                - "Check vibration and bearing temperatures against the specification"
            - name: Compressor mechanical running test
              description: |-
                ## Purpose
                During a mechanical running test, for the first time, a compressor rotor spins at speed in its own casing, and this is where rotordynamic, bearing and seal problems show up while they can still be fixed in the shop. Understanding what API 617 and the purchase order require, how the shop lube oil and seal systems are set up, which probes record vibration and what happens at trip speed prepares you to witness a test that may run for hours and cost a great deal to repeat.

                ## Milestones
                1. The mechanical run test requirements from the purchase order and API 617 summarised on one page.
                2. The vibration probe arrangement, typically to API 670, and the acceptance limits understood.
                3. The shop lube oil and seal systems compared with the contract ones, with differences noted.
                4. A witnessed or reviewed run with recorded vibration, bearing temperatures and any post-test inspection findings.

                ## Notes
                Ask in advance whether bearings and seals will be inspected after the run. A post-test teardown is often a purchase order option that nobody remembers to call.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of mechanical run test requirements exists and you have witnessed or reviewed at least one run against it."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Summarise the mechanical run test clauses in the PO on one page"
                - "Ask the vendor for the shop test lube oil and seal arrangement"
                - "Compare the vibration acceptance limits with the probe layout"
                - "Ask whether a post-run bearing and seal inspection is in scope"
            - name: Switchgear and MCC factory tests
              description: |-
                ## Purpose
                Low-voltage assemblies are tested to IEC 61439 routine verification and medium-voltage switchgear to the IEC 62271 family, and the witness's job is to see that the routine tests are done, the interlocks work and the protection relays carry the right settings. Wiring errors found in the factory take minutes to fix; found at site they take days and an outage. High-voltage dielectric tests also need the same respect for exclusion zones as a pressure test.

                ## Milestones
                1. The routine tests required by the purchase order and the relevant IEC standard listed for the assembly.
                2. Insulation resistance and dielectric test results recorded with the test set and duration.
                3. Mechanical and electrical interlocks operated and recorded for every cubicle type.
                4. Protection relay settings checked against the approved settings file by secondary injection.

                ## Notes
                Bring the approved single-line diagram and settings file. Check the as-built panel, not just the drawings, for spare ways, cable entry and labelling.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You have witnessed a switchgear or MCC FAT with routine tests, interlock checks and relay settings recorded against the approved documents."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the routine tests the PO and IEC standard require for the assembly"
                - "Print the approved single-line diagram and relay settings file"
                - "Operate and record the interlocks for each cubicle type"
                - "Compare injected relay trip values with the approved settings"
            - name: Power transformer factory routine tests
              description: |-
                ## Purpose
                Transformer FATs are short on drama and long on numbers: ratio and vector group, winding resistance, impedance and load loss, no-load loss and dielectric tests under the IEC 60076 series. The measured losses often carry money, because many purchase orders evaluate or penalise losses above the guaranteed values. Knowing which tests are routine, which are type or special tests you ordered, and how losses are reported lets you review the results with confidence.

                ## Milestones
                1. Routine, type and special tests ordered for the transformer listed from the purchase order.
                2. Guaranteed losses and impedance written next to their tolerances.
                3. Measured results reviewed against the guarantees and tolerances.
                4. Any loss shortfall or penalty reported to the buyer with the supporting figures.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A transformer test report has been reviewed against guaranteed losses and impedance, with any shortfall reported to the buyer in writing."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the routine, type and special tests ordered in the PO"
                - "Write the guaranteed losses and impedance beside their tolerances"
                - "Review measured results against the guarantees"
                - "Report any loss shortfall to the buyer with the figures"
            - name: Control system FAT with simulated I O
              description: |-
                ## Purpose
                Control system FATs check hardware, software and graphics together before anything is connected to the plant, usually with every input and output exercised and the process simulated. IEC 62381 gives a useful structure for the FAT, SAT and integration test sequence. Witnessing well means testing a sample of loops, sequences and alarms yourself rather than watching the vendor run their favourite screens, and recording the software version that passed.

                ## Milestones
                1. A test plan covering hardware checks, every I O point, control loops, sequences, alarms, graphics and redundancy.
                2. I O point checks completed and recorded against the I O list.
                3. Controller and power supply failover tested and recorded.
                4. The software version and configuration backup that passed the FAT recorded and frozen.

                ## Notes
                Pick a random sample of loops and sequences on the day. If every test the vendor chooses works perfectly, the ones they did not choose are where to look.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A control system FAT is complete with every I O point recorded, redundancy tested and the passing software version frozen with a backup."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Get the vendor's control system FAT plan and the current I O list"
                - "Choose a random sample of loops and sequences to test yourself"
                - "Witness controller and power supply failover tests"
                - "Record the passing software version and take a configuration backup"
            - name: Safety instrumented system FAT against the cause and effect
              description: |-
                ## Purpose
                The SIS logic solver is tested in the factory against the approved cause and effect charts and the safety requirements specification, line by line, because a missed trip found at start-up is found the hard way. Under IEC 61511, every change made after the FAT must go through management of change and be retested. The witness's job is complete coverage, honest records and a frozen application program at the end.

                ## Milestones
                1. The approved cause and effect charts and safety requirements specification revision confirmed for the test.
                2. Every cause and effect line tested, including voting, bypasses, resets and fault responses.
                3. Deviations from the charts recorded as test failures, not quietly corrected.
                4. The tested application program version recorded and placed under change control.

                ## Notes
                Mark up a printed copy of the cause and effect chart as each intersection passes. Any edit to the logic after the FAT is a change that needs management of change and a recorded retest.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every cause and effect intersection is marked tested on a signed chart and the SIS application program version is placed under change control."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Confirm the approved cause and effect and SRS revisions for the test"
                - "Print the cause and effect chart for marking up during the test"
                - "Witness voting, bypass, reset and fault response tests"
                - "Record the tested program version and lodge it under change control"
            - name: Valve shop pressure tests
              description: |-
                ## Purpose
                Valves are bought in large numbers, so shop testing is usually sampled, and knowing which tests matter lets you choose the sample well. API 598 and API 6D cover shell, seat and backseat tests with permitted leakage rates by valve type and size, while fire and fugitive emission performance is normally proven by type test certificates you review rather than witness. Critical service valves deserve a witness; the rest deserve a good sample.

                ## Milestones
                1. The test standard, test pressures and permitted leakage for each valve type noted from the purchase order.
                2. A sampling plan agreed for witnessed tests, weighted to critical service valves.
                3. Type test certificates for fire and fugitive emission performance reviewed and filed.
                4. Witnessed results recorded with valve serial numbers.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A valve sampling plan is agreed, type test certificates are on file, and witnessed tests are recorded by valve serial number."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Note the test standard and leakage class for each valve type in the PO"
                - "Agree a witness sampling plan weighted to critical service valves"
                - "Review the fire and fugitive emission type test certificates"
                - "Record witnessed shell and seat results by valve serial number"
            - name: Vibration and noise readings during shop tests
              description: |-
                ## Purpose
                Vibration and noise limits appear on almost every rotating equipment test, and they are easy to misread: overall versus filtered values, velocity versus displacement, bearing housing versus shaft probes, and background noise that the shop never subtracts. Learning the measurement positions and units your specification uses lets you check that the right number is being compared with the right limit.

                ## Milestones
                1. The vibration and noise limits for one machine listed with units and measurement positions.
                2. The difference between overall and filtered readings, and housing and shaft measurements, written down in your own words.
                3. Background noise levels recorded alongside machine noise during a test.
                4. One witnessed set of readings checked against the specification limits.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You have checked one witnessed set of vibration and noise readings against limits with matching units, positions and background correction."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List the vibration and noise limits for one machine with their units"
                - "Mark the specified measurement positions on a machine drawing"
                - "Ask the shop to record background noise with the machine stopped"
                - "Compare one witnessed set of readings with the limits"
            - name: Risk-based choice of witness level per package
              description: |-
                ## Purpose
                Witnessing everything is unaffordable and witnessing nothing is reckless, so each package needs a deliberate level: full witness, sample witness, record review, third-party inspection or none. Scoring packages on safety consequence, cost, lead time, novelty of design and the vendor's track record makes the choice defensible when a manager asks why one test was skipped. The result also sets the inspection budget.

                ## Milestones
                1. A short scoring scheme covering safety, cost, lead time, novelty and vendor history.
                2. Every FAT package scored and given a witness level.
                3. Witness levels reflected in the ITP codes.
                4. The scoring and levels approved by the project lead and kept with the inspection plan.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every FAT package has a scored, approved witness level that matches the codes in its ITP."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Draft a five-factor scoring scheme for witness levels"
                - "Score each FAT package and assign a witness level"
                - "Update ITP codes to match the chosen witness levels"
                - "Get the project lead's approval of the scoring and levels"
            - name: Selecting a third-party inspection agency
              description: |-
                ## Purpose
                When vendors are spread across several countries, a third-party inspection agency puts a qualified inspector at the shop for a fraction of a flight's cost. The choice depends on local coverage near your vendors, inspector competence in the right disciplines, report quality, response time and rates. A short competition between two or three agencies, with a sample report from each, avoids an agency that sends a generalist to a compressor test.

                ## Milestones
                1. Requirements written for coverage, disciplines, qualifications, reporting and rates.
                2. Two or three agencies compared, each with a sample report and inspector CVs.
                3. One agency selected with the reasons recorded.
                4. A call-off arrangement in place with notice periods and report deadlines.

                ## Notes
                Start from the **Vendor** template to keep the agency's contacts, rates and performance in one record. Ask for the CV of the actual inspector before each critical visit.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An inspection agency is selected from a recorded comparison of at least two candidates and a call-off arrangement is in place."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the countries and cities where your FAT vendors sit"
                - "Ask two or three agencies for a sample report and inspector CVs"
                - "Compare coverage, competence, report quality and rates side by side"
                - "Record the selection and set up the call-off arrangement"
            - name: Remote witnessed FAT protocol
              description: |-
                ## Purpose
                Video-witnessed tests save travel and can be the only option when visas or schedules make a visit impossible, but they invite a vendor to show the camera only what passes. A written protocol saying which tests may be witnessed remotely, how the camera, raw data and time stamps are handled, and what is still checked in person later, keeps remote witnessing as trustworthy as a visit.

                ## Milestones
                1. A list of test types that may be witnessed remotely and those that may not.
                2. Requirements for camera positions, a visible clock, live raw data and recording.
                3. A connection and sound check rehearsed with the vendor before the test day.
                4. A rule for what is verified in person at SAT when the FAT was remote.

                ## Notes
                Ask the vendor to show instrument tags and calibration labels on camera before readings begin, and keep the recording with the test record.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A remote FAT protocol is approved, listing allowed tests, camera and data rules and the in-person checks that follow at site."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List which tests may and may not be witnessed remotely"
                - "Write camera, clock, raw data and recording requirements"
                - "Rehearse the connection with the vendor before the test day"
                - "Set the in-person checks to repeat at SAT after a remote FAT"
            - name: Deciding on an integrated FAT for control systems
              description: |-
                ## Purpose
                When the main control system, the safety system and several package PLCs must talk to each other, interface problems are often found only at site. An integrated FAT brings the systems, or faithful simulators of them, together before shipment. It costs travel, freight and vendor time, so the decision needs a clear view of how many interfaces there are, which are new, and what testing them at site would cost in schedule.

                ## Milestones
                1. A list of system interfaces with protocol, data points and whether each is new or proven.
                2. Cost and schedule of an integrated FAT estimated against the cost of finding faults at site.
                3. A decision recorded: integrated FAT, interface tests with simulators, or test at site.
                4. If chosen, the integrated FAT location, participants and dates agreed.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on integrated FAT exists, based on an interface list and a cost comparison, with dates agreed if it goes ahead."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every interface between control, safety and package systems"
                - "Mark each interface as new or proven on a previous project"
                - "Estimate the cost of an integrated FAT against site fault-finding"
                - "Record the decision and share it with the system vendors"
            - name: Standard FAT procedure template for your organisation
              description: |-
                ## Purpose
                Vendors write procedures in a dozen formats, and each one takes a fresh review. A short standard template your organisation issues with every purchase order, setting out the required sections, the criteria table, the instrument list and the record sheets, cuts review time and makes witness reports comparable across packages. Reviewing it once a year against the lessons log keeps it current.

                ## Milestones
                1. A template with fixed sections for scope, references, safety, instruments, steps, criteria and record sheets.
                2. The template trialled on one package and adjusted.
                3. The template attached to new purchase orders as a requirement.
                4. A yearly review date set against the lessons log.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A standard FAT procedure template is issued with new purchase orders after a trial on one package, with a yearly review date set."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Collect three of the best vendor procedures you have received"
                - "Draft the template sections and a criteria table layout"
                - "Trial the template with one vendor and adjust it"
                - "Review the template against the lessons log @recurring(yearly)"
            - name: Vendor dry-run rule to cut repeat failures
              description: |-
                ## Purpose
                Most failed witness tests were never run end to end by the vendor first. Requiring a signed internal dry run, with its records shared before travel, moves fault-finding to the vendor's time and cost and makes the witnessed test a confirmation. Measuring the first-time pass rate before and after the rule shows whether it works.

                ## Milestones
                1. A dry-run clause written for new purchase orders and ITPs.
                2. Dry-run records received before each witness trip.
                3. First-time pass rates compared for tests with and without a prior dry run.
                4. The rule kept, tightened or dropped based on the comparison.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A dry-run requirement is in new purchase orders and a recorded comparison of first-time pass rates decides whether to keep it."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Draft a dry-run clause for new purchase orders and ITPs"
                - "Ask each vendor for signed dry-run records before travel"
                - "Compare first-time pass rates with and without a dry run"
                - "Record whether the rule is kept, tightened or dropped"
            - name: Pricing FAT and retest costs into the purchase order
              description: |-
                ## Purpose
                Who pays for a failed test, a wasted trip or a day spent waiting at the shop is decided by the purchase order, not by argument afterwards. Agreeing with the buyer and contracts team how witness travel, retests, waiting time and late notifications are charged, before orders are placed, removes a frequent source of dispute. The aim is clarity, not penalties for their own sake.

                ## Milestones
                1. Current purchase order terms on testing, retests and notification reviewed with the buyer.
                2. Proposed wording for retest costs, wasted trips and waiting time drafted.
                3. The wording reviewed by the contracts team.
                4. Agreed wording added to the standard purchase order conditions.

                ## Notes
                This is a commercial and contractual matter. Agree any wording with your contracts or legal team rather than drafting it alone.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Reviewed wording on retest costs, wasted trips and waiting time is part of the standard purchase order conditions."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read the current PO terms on testing, retests and notifications"
                - "List the costs a failed or postponed test creates for the project"
                - "Draft proposed wording and send it to the contracts team"
                - "Confirm the agreed wording is in the standard PO conditions"
            - name: First overseas FAT witness trip
              description: |-
                ## Purpose
                Engineers in the Caribbean and elsewhere often witness tests in the United States, Europe or Asia, and a first trip has more admin than engineering: visas, invitation letters, travel approval, shop access, local transport and a test date that may still move. Planning it as a project means you arrive rested, inducted and holding every document you need, with a fallback if the date slips.

                ## Milestones
                1. Visa or entry requirements confirmed and an invitation letter obtained from the vendor if needed.
                2. Travel approved with flexible tickets where the date is uncertain.
                3. Shop address, contact, induction and working hours confirmed.
                4. Approved procedure, criteria table, ITP and blank witness report carried on a laptop and on paper.

                ## Notes
                Start from the **Trip** template. Allow a rest day after long-haul flights before a long test, and agree with the vendor what happens if the test runs late into the evening.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first overseas FAT is witnessed with visas, travel, shop access and test documents in place and a witness report issued within two working days."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Check the visa or entry requirements for the vendor's country"
                - "Ask the vendor for an invitation letter and shop access details"
                - "Book flexible travel once the readiness check says go"
                - "Pack the approved procedure, criteria table and blank report"
            - name: FAT kick-off and close-out meetings
              description: |-
                ## Purpose
                Fifteen minutes of kick-off at the start of the test day and a short close-out at the end are where scope, safety, sequence and verdict are agreed in front of everyone. Skipping them is how a witness leaves without signatures on the punch list or with a different understanding of what passed. Run with a standard agenda, both meetings take little time and settle most arguments before they start.

                ## Milestones
                1. A kick-off agenda covering safety, attendees, procedure revision, criteria, sequence and timings.
                2. A close-out agenda covering results, punch items, open queries and the verdict.
                3. Both meetings minuted and signed by the vendor's test lead and the witness.
                4. Minutes attached to the witness report.

                ## Notes
                Start from the **Meeting notes** template and keep the two agendas on one page so they travel with the procedure.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The next FAT opens and closes with minuted meetings signed by both the vendor's test lead and the witness."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write one-page kick-off and close-out agendas"
                - "Send the agendas to the vendor with the approved procedure"
                - "Get both sets of minutes signed on the test day"
                - "Attach the signed minutes to the witness report"
            - name: Site acceptance test of a delivered package
              description: |-
                ## Purpose
                Transport, storage and installation can undo a good FAT: loosened terminations, moisture in panels, a rotor that sat for months without turning. The SAT repeats the checks that transport could have affected and tests what the factory could not, such as real field wiring and interfaces, before the package is handed to commissioning. Planning it from the FAT record avoids repeating everything or, worse, repeating nothing.

                ## Milestones
                1. A SAT scope drawn from the FAT record, listing checks to repeat and tests only possible at site.
                2. FAT punch items carried to site confirmed closed or added to the SAT punch list.
                3. The SAT witnessed with records naming instruments and software versions.
                4. The package's SAT result and open items handed to the commissioning lead in writing.

                ## Notes
                Check preservation on arrival before the SAT date. Equipment stored outdoors through a wet season needs inspection for water ingress before any electrical test.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A SAT is completed against a scope drawn from the FAT record and its results and open items are handed to commissioning in writing."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Draw the SAT scope from the FAT record and open punch items"
                - "Inspect preservation and storage condition on the package's arrival"
                - "Agree the SAT date with the vendor's site representative"
                - "Hand the SAT result and open items to the commissioning lead"
            - name: Release for shipment, preservation and packing check
              description: |-
                ## Purpose
                Equipment that passes its FAT can still arrive damaged, wet or unidentifiable if it is packed badly. A physical check before release, covering preservation inside and out, shipping restraints on rotors and internals, lifting points, tagging, packing lists and the documents that must travel with the crates, protects months of work. Packages bound for a humid tropical site, or long storage before installation, need the most care.

                ## Milestones
                1. The preservation and packing requirements from the purchase order listed for the package.
                2. Internal preservation, desiccants or nitrogen blankets, end caps and rotor locks confirmed in place.
                3. Crates marked with tags, weights, centres of gravity and lifting points.
                4. Packing lists and travelling documents checked and the release note signed.

                ## Notes
                Photograph every crate before it is closed. If a gas blanket is used, record its pressure and ask site to check it on arrival and during storage.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first critical package is released only after a recorded preservation and packing check, with photographs of every crate filed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the preservation and packing requirements from the PO"
                - "Check internal preservation, end caps and rotor locks before crating"
                - "Photograph every crate and its markings before it is closed"
                - "Sign the release note only after the packing list is checked"
            - name: Full-load string test of a compressor train
              description: |-
                ## Purpose
                A string test runs the driver, gearbox and compressor together, sometimes with the contract lube oil and control systems, and it is one of the most expensive tests a project can buy. When it is in the order, it needs its own planning: fuel or power at the test stand, the test loop, the instrumentation, the sequence of load steps and how performance is measured, for example to ASME PTC 10. Witnessing it well means preparing for a long and costly day where repeating is not an option.

                ## Milestones
                1. The string test scope, configuration and contract systems involved confirmed from the purchase order.
                2. The test sequence, load steps, durations and acceptance criteria agreed in the procedure.
                3. A witness team with rotating, electrical and controls skills arranged for the day.
                4. The test witnessed and its results reviewed against guarantees and specification limits.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A string test is witnessed by a team covering rotating, electrical and controls skills, with results reviewed against the agreed criteria."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Confirm the string test scope and configuration in the PO"
                - "Agree the load steps, durations and criteria in the procedure"
                - "Arrange a witness team covering rotating, electrical and controls"
                - "Review results against guarantees within a week of the test"
            - name: Retest after a failed FAT
              description: |-
                ## Purpose
                A failed test is not a disaster, but a retest booked before the cause is understood often fails again. The sequence is a clear statement of what failed, the vendor's investigation and corrective action, a check of whether earlier passed results are still valid, a revised procedure if needed, and then the retest. Who pays for the second visit should already be in the purchase order.

                ## Milestones
                1. The failure described in writing with the readings and the criterion missed.
                2. The vendor's cause and corrective action received and accepted by the responsible engineer.
                3. Earlier passed tests affected by the correction identified for repeat.
                4. The retest witnessed and closed with a new report.

                ## Notes
                Start from the **Remediation plan** template. For a failure with safety or major cost impact, ask for a formal root cause investigation rather than the vendor's first explanation.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The retest passes after an accepted corrective action, with affected earlier tests repeated and a new witness report issued."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write down what failed, the readings and the criterion missed"
                - "Ask the vendor for the cause and corrective action in writing"
                - "Identify earlier passed tests affected by the correction"
                - "Book the retest once the corrective action is accepted"
            - name: First FAT as a graduate observer
              description: |-
                ## Purpose
                Graduates learn more from one well-prepared day on a test floor than from a month of reading procedures, provided someone tells them what to watch. Shadowing an experienced witness, reading the procedure and criteria beforehand and writing your own version of the witness report afterwards gives you a real competence record for your development file. Ask questions at the kick-off and close-out, not halfway through a pressure hold.

                ## Milestones
                1. A senior witness agreed as your mentor for one FAT.
                2. The procedure, criteria table and ITP read and three questions written before the day.
                3. Your own draft witness report written and compared with the official one.
                4. The FAT recorded in your competence log with your mentor's comments.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You have attended one FAT with a mentor and your draft witness report and their comments are in your competence log."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask a senior witness if you can shadow their next FAT"
                - "Read the procedure and criteria and write three questions"
                - "Write your own draft witness report after the test"
                - "Compare it with the official report and log your mentor's comments"
            - name: Preparing the shop as the vendor's test engineer
              description: |-
                ## Purpose
                On the vendor side, a FAT is judged by how prepared the shop looks: calibrated instruments ready, the internal test done, record sheets printed, a clean test bay and a test lead who knows the procedure. Running a monthly check of the test bay and a readiness routine before every client visit cuts retests, shortens witness days and wins the reputation that brings repeat orders.

                ## Milestones
                1. A pre-visit routine covering instruments, internal test, documents, test bay and safety briefing.
                2. A monthly test bay audit with findings closed.
                3. Client witness days that start on time with every document on the table.
                4. First-time pass rate on witnessed tests tracked across orders.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Every client visit follows the pre-visit routine, the test bay is audited monthly and first-time pass rate is tracked across orders."
                cadence: rolling
              tasks:
                - "Write a pre-visit routine for client witness days"
                - "Audit the test bay, instruments and safety equipment @recurring(monthly:11)"
                - "Run the internal test and share results before each client visit"
                - "Track first-time pass rate for every witnessed test"
            - name: Client inspection lead covering many packages
              description: |-
                ## Purpose
                On a large project one inspection lead may be responsible for thirty or more packages across several countries, with a mix of their own witnesses and third-party inspectors. The job becomes coordination: a weekly status of every package, quick decisions on who goes where, and a clear escalation route for vendors who slip or fail. A short weekly summary for the project manager keeps inspection visible without endless meetings.

                ## Milestones
                1. A single status view of every package, from ITP accepted to released.
                2. A weekly summary issued to the project manager with tests, slips, failures and decisions needed.
                3. Third-party inspector visits assigned and their reports reviewed within two working days.
                4. An escalation route agreed for vendors who slip or fail repeatedly.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly inspection summary covering every package reaches the project manager, and third-party reports are reviewed within two working days."
                cadence: rolling
              tasks:
                - "Build a status view of every package from ITP to release"
                - "Issue the weekly inspection summary to the project manager @recurring(weekly:thu)"
                - "Review each third-party inspector report within two working days"
                - "Agree an escalation route for repeat slips and failures"
            - name: Running FAT alone on a small project
              description: |-
                ## Purpose
                On a small project or in a small firm, the same engineer often specifies the package, reviews the ITP, witnesses the test and signs the release. Without an inspection team, a light version of the system matters more: one register, one checklist, and a monthly half-hour review so nothing is forgotten between design work. Asking a colleague to check the acceptance criteria is the cheapest independent review available.

                ## Milestones
                1. One combined register for ITPs, witness points, punch items and documents.
                2. A single checklist used for procedure review, readiness and release.
                3. A colleague's independent check of acceptance criteria on each critical package.
                4. A monthly review of the register held and dated.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "One combined register is reviewed monthly and every critical package has acceptance criteria checked by a second engineer."
                cadence: rolling
              tasks:
                - "Set up one combined register for ITPs, witness points, punch and documents"
                - "Merge procedure review, readiness and release into one checklist"
                - "Ask a colleague to check the acceptance criteria on critical packages"
                - "Review the combined register for gaps @recurring(monthly:27)"
            - name: Third-party inspector working to a client ITP
              description: |-
                ## Purpose
                As a third-party inspector you witness tests to someone else's ITP, specification and criteria, often with a day's notice and a vendor you have never met. Your value is a precise, neutral report that the client can trust from thousands of kilometres away. Keeping your own qualifications current, asking the client for the documents you need before each visit and never accepting deviations on the client's behalf protect both you and them.

                ## Milestones
                1. A standard request list sent to clients before each visit: ITP, specification, approved procedure and criteria.
                2. Reports issued in the client's format within the agreed time.
                3. A rule followed that deviations are reported, not accepted, on the client's behalf.
                4. Inspector qualifications and certifications current, with renewal dates recorded.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Every assignment starts with the client's documents in hand, reports are issued on time, and qualifications are renewed before they lapse."
                cadence: rolling
              tasks:
                - "Write a standard document request list for new assignments"
                - "Confirm the client's report format and deadline before each visit"
                - "Report deviations to the client without accepting them yourself"
                - "Check qualification and certification renewal dates @recurring(yearly)"
            - name: FAT handover dossier for the commissioning team
              description: |-
                ## Purpose
                The commissioning team inherits whatever the FAT left behind: open punch items, as-tested settings, software versions, consumables used and lessons about how the package behaved. A short handover dossier for each package, issued when it ships, saves them from rediscovering problems the witness already knew about. It is a page or two plus links, not another full document set.

                ## Milestones
                1. A dossier layout covering verdict, open punch, concessions, settings, software versions and observations.
                2. A dossier issued for each package when it is released.
                3. The commissioning lead's acknowledgement of each dossier recorded.
                4. Feedback from commissioning gathered on whether the dossier helped.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every released package has a handover dossier acknowledged by the commissioning lead."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Draft a two-page dossier layout with links to full records"
                - "Issue a dossier for the next package as it is released"
                - "Ask the commissioning lead to acknowledge each dossier"
                - "Ask commissioning what was missing after their first use"
            - name: Performance guarantee shortfalls at FAT
              description: |-
                ## Purpose
                Some packages carry guaranteed performance, such as pump efficiency, compressor power or transformer losses, with liquidated damages or rejection if the test shows a shortfall. The engineer's part is to measure correctly, report precisely and give the commercial team facts, not opinions on what the contract allows. Preparing the guarantee table and the correction method before the test keeps the discussion technical.

                ## Milestones
                1. Guaranteed values, tolerances and the correction method written down for each guaranteed package.
                2. Test measurements and corrected results reported with uncertainty where relevant.
                3. Any shortfall reported to the commercial team with supporting data.
                4. The commercial outcome recorded against the package file.

                ## Notes
                Interpreting liquidated damages and rejection rights is for the contracts or legal team. Keep your report to what was measured and how.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each guaranteed package has a guarantee table and correction method agreed before test, and any shortfall reaches the commercial team in writing."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List guaranteed values and tolerances for each guaranteed package"
                - "Agree the correction method with the vendor before the test"
                - "Report any shortfall to the commercial team with the data"
                - "Record the commercial outcome in the package file"
            - name: Cybersecurity checks in control system FAT
              description: |-
                ## Purpose
                Control panels and package PLCs increasingly ship with default accounts, open ports and unpatched software, and the FAT is the last easy chance to fix that before they join a plant network. Adding a short set of security checks, drawn from the IEC 62443 family and your organisation's control network rules, to every control system FAT catches the obvious gaps: unused services, default credentials, missing backups and undocumented remote access.

                ## Milestones
                1. A security checklist agreed for control system FATs, covering accounts, ports, services, malware protection, backups and remote access.
                2. The checklist added to purchase orders for new control panels and packages.
                3. Checklist results recorded at each control system FAT.
                4. Findings closed before release or carried as punch items with owners.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every control system FAT records results against an agreed security checklist, with findings closed or carried as owned punch items."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the control network owner for the site's security requirements"
                - "Draft a FAT security checklist from those requirements and IEC 62443"
                - "Add the checklist to new control panel purchase orders"
                - "Record checklist results and findings at the next control system FAT"
            - name: FAT performance metrics across the portfolio
              description: |-
                ## Purpose
                Across many packages and projects, a few numbers show where inspection effort pays off: first-time pass rate, punch items per test, days between FAT and release, notifications received late and records missing at shipment. Tracking them monthly and reviewing them by vendor and equipment type each quarter tells you which vendors need closer witnessing and which can move to record review.

                ## Milestones
                1. Five metrics defined with how each is counted.
                2. Monthly figures recorded from the registers and punch lists.
                3. A quarterly review by vendor and equipment type.
                4. Witness levels adjusted for at least one vendor based on the figures.

                ## Notes
                Start from the **Metrics log** template. Keep the definitions fixed for a year so the trend means something.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Five FAT metrics are logged monthly and a quarterly review leads to a recorded change in witness level for at least one vendor."
                cadence: rolling
              tasks:
                - "Define five FAT metrics and how each one is counted"
                - "Record the monthly figures from registers and punch lists @recurring(monthly:3)"
                - "Review the metrics by vendor and equipment type @recurring(quarterly)"
                - "Change the witness level for a vendor when the figures justify it"
            - name: Owner's general specification for FAT and SAT
              description: |-
                ## Purpose
                Organisations that buy equipment regularly benefit from one general specification that sets their rules for inspection and testing: ITP codes, notification periods, procedure content, criteria, calibration, punch categories, records and release. Writing it pulls together everything the other projects in this area build, and attaching it to every purchase order makes those rules contractual rather than polite requests. A yearly review keeps it matched to the lessons log.

                ## Milestones
                1. A draft specification covering ITP codes, notifications, procedures, criteria, calibration, punch, records and release.
                2. Comments gathered from procurement, engineering, commissioning and the contracts team.
                3. The specification approved and issued under document control.
                4. The specification referenced in new purchase orders, with a yearly review date set.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An approved FAT and SAT general specification is issued under document control and referenced in new purchase orders."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Outline the specification sections from this area's working documents"
                - "Ask the agent to draft the first version from your outline and existing checklists"
                - "Gather comments from procurement, engineering, commissioning and contracts"
                - "Review the specification against the lessons log @recurring(yearly)"
---

# Factory Acceptance Testing

Factory acceptance testing is where a purchase order meets the real equipment, and most of the value is decided before anyone flies to the vendor's shop. These projects start with the foundations (which packages need testing, the test requirements, ITPs, procedures, acceptance criteria and safety on the test floor), then build the machinery of registers, look-aheads, punch lists and release notes, the skills of witnessing pressure, pump, compressor, electrical, control system and valve tests, the decisions on witness levels and inspectors, the dated tests themselves, the seats you may sit in as graduate, vendor, client or third-party inspector, and specialist work on guarantees, cybersecurity, metrics and your own specification.

The rhythm is weekly: the Monday look-ahead, notification checks, punch reviews with vendors and the non-conformance review, with monthly document, expediting and calibration checks, a quarterly lessons and metrics review and a yearly refresh of your procedure template and specification. The Operational checklist, Vendor, Trip, Meeting notes, Remediation plan and Metrics log templates pair with the projects that keep a standing record. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
