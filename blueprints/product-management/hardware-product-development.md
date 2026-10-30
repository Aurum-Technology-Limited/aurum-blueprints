---
id: product-management.hardware-product-development
name: Hardware Product Development
description: "A device taken from one-page brief to shipped units: a target cost stack, stage gates from EVT to PVT, a chosen factory, certification by market, and the routines that keep BOM cost, parts and changes under control."
category: business
version: 1.0.0
tags: [product-management, hardware-product-development, founder, team, engineer, manufacturing, certification, prototyping]
author: Aurum Technology
starter_structure:
  templates:
    - product-spec
    - compliance-control
    - risk-register
    - vendor
    - trip
    - onboarding-30-60-90
    - metrics-log
  pillars:
    - name: Product Management
      emoji: "🧩"
      description: "Deciding what to build and why: discovery and research, roadmaps and prioritisation, specs and launches, pricing and packaging, product analytics, and the feedback loops that keep a product honest."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Hardware Product Development
          description: "Taking a physical or connected product from concept through prototypes, manufacturing readiness and certification to launch, with hardware's longer lead times."
          projects:
            - name: Hardware product brief on one page
              description: |-
                ## Purpose
                Before any schematic or sketch, a hardware team needs one page that says who the device is for, what job it does, the target retail price, the first-year volume and the date it must be on shelves. Hardware punishes vague intent: a late change to size or battery life can scrap a tooled enclosure, so writing these down now is the cheapest change you will ever make.

                ## Milestones
                1. A named target customer and the main use situation described in two sentences.
                2. Target retail price, first-year unit volume and launch window written as numbers.
                3. The three things the device must do well, and two it deliberately will not do.
                4. The brief signed off by whoever funds the programme.

                ## Notes
                Ranges are fine at this stage. A brief with a price of somewhere between 80 and 120 is far more useful than one with no price at all.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page brief with target customer, retail price, first-year volume, launch window and non-goals, signed off by the sponsor."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the target customer and use situation in two sentences"
                - "Set a target retail price and first-year volume, even as a range"
                - "List three must-have capabilities and two explicit non-goals"
                - "Share the brief with the founders or sponsor and record sign-off"
            - name: Target cost stack from retail price to BOM
              description: |-
                ## Purpose
                Most first hardware products fail on margin rather than engineering, because the bill of materials was designed before anyone worked backwards from the shelf price. Starting at retail and removing channel margin, duty, freight, warranty reserve, packaging and assembly leaves the maximum BOM cost the design team must hit, and that number should steer every part choice.

                ## Milestones
                1. Retail price, channel margin and wholesale price laid out in one sheet.
                2. Landed cost items (freight, duty, insurance, warehousing) estimated per unit.
                3. Assembly, test, packaging and a warranty reserve costed per unit.
                4. A target BOM cost and target gross margin agreed and written at the top of the BOM.

                ## Notes
                Use the channel you will actually sell through: retail partners take a large share of the shelf price, while direct sales keep more margin but carry higher marketing cost per unit. Confirm duty rates with a customs broker rather than guessing.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A cost stack from retail price to a target BOM cost, with every deduction sourced, agreed by the founders and written on the BOM."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick the main sales channel and note its typical margin"
                - "Estimate freight, duty and warehousing per unit from a forwarder's quote"
                - "Add assembly, test, packaging and a warranty reserve to the stack"
                - "Write the target BOM cost at the top of the bill of materials"
            - name: Device requirements and operating limits sheet
              description: |-
                ## Purpose
                Engineering cannot pick a battery, a processor or an enclosure material without hard limits: size and weight, battery life under a stated use pattern, operating temperature, water and dust protection, drop height and expected lifetime. A requirements sheet with a number and a reason for each line gives the team something to test against at every build.

                ## Milestones
                1. Physical limits recorded: maximum dimensions, weight, colours and finishes.
                2. Battery life stated against a written usage profile.
                3. Environmental limits set: operating temperature, ingress protection target and drop height.
                4. Each requirement linked to a test method and the build where it is first checked.
                5. The sheet versioned, with changes after EVT going through change control.

                ## Notes
                Start from the **Product spec** template. Write battery life as hours under a defined profile, never as a single headline figure.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A versioned requirements sheet in which every requirement has a number, a reason, a test method and the build where it is first tested."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the physical limits for size, weight and finish"
                - "Write a typical day of use as the battery life profile"
                - "Set the operating temperature range and ingress protection target"
                - "Add the test method and first build for each requirement"
            - name: Certification and compliance map by target market
              description: |-
                ## Purpose
                Every market a device ships to has its own marks and tests: electrical safety, electromagnetic compatibility, radio approval if anything transmits, restricted substances, battery transport and take-back rules. Mapping these early with an accredited lab stops the classic surprise of a finished product that cannot legally be sold in its launch country.

                ## Milestones
                1. Launch markets listed in order, with the date each must open.
                2. Required approvals named for each market (for example CE or UKCA in Europe and the UK, FCC in the US, ISED in Canada).
                3. Battery shipping tests and labelling needs noted if the device contains lithium cells.
                4. Quotes and lead times received from at least two accredited test labs.
                5. Test dates pencilled into the master schedule.

                ## Notes
                Start from the **Compliance control** template. This is a planning map; confirm the actual requirements for your product category with the test lab or a compliance consultant.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A market-by-market list of required approvals, confirmed by an accredited lab, with quotes and test dates in the schedule."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List launch markets in order with the date each must open"
                - "Ask two accredited test labs which approvals apply to your device"
                - "Note battery transport tests and labels if the device uses lithium cells"
                - "Pencil pre-scan and formal test dates into the schedule"
                - "Check target markets for changed standards or new rules @recurring(yearly)"
            - name: Stage gates from concept to mass production
              description: |-
                ## Purpose
                Hardware teams use a run of builds (prototype, EVT, DVT, PVT, then mass production), but each company means something slightly different by them. Writing down what each stage proves, how many units it builds and the exit criteria to pass gives founders, engineers and the factory one shared definition, and turns 'are we ready?' into a checklist.

                ## Milestones
                1. Each stage defined by the question it answers: does it work, does it work reliably, can it be made at rate.
                2. Unit counts and build locations set for each stage.
                3. Exit criteria for each gate written as tests and measures, not opinions.
                4. A named person who makes each go or no-go call.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written gate definition for EVT, DVT and PVT with unit counts, pass or fail exit criteria and a named decision maker for each."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write one sentence on what each build stage must prove"
                - "Set the number of units and the build site for each stage"
                - "Draft exit criteria for EVT, DVT and PVT as pass or fail tests"
                - "Name who signs off each gate and record it in the schedule"
            - name: Master hardware schedule with long lead items
              description: |-
                ## Purpose
                Steel tooling often takes several weeks, certification labs book up, some chips sit on long lead times and sea freight adds weeks more. A master schedule that works backwards from the launch date through every lead time shows whether the date is real and which order has to be placed this month to keep it.

                ## Milestones
                1. Launch date fixed and every build, tooling, test and freight step scheduled back from it.
                2. Long lead items (tooling, custom parts, certification slots, key chips) each with a quoted lead time.
                3. The critical path marked, with the slack on every other path visible.
                4. The schedule shared with the factory and updated at least monthly.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A master schedule from today to launch in which every long lead item has a quoted lead time and the critical path is marked."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write the launch date and schedule every step backwards from it"
                - "Collect quoted lead times for tooling, custom parts and key chips"
                - "Mark the critical path and the slack on each other path"
                - "Refresh long lead dates against supplier confirmations @recurring(monthly:5)"
            - name: Hardware budget through first production run
              description: |-
                ## Purpose
                Hardware needs cash long before revenue: prototype builds, tooling, certification fees, a deposit on the first production order and inventory sitting on a ship. A budget that runs month by month to the first sale shows the true cash need, so founders raise or allocate enough instead of stalling between DVT and production.

                ## Milestones
                1. Costs listed by stage: prototypes, tooling, certification, pilot run, first order, freight.
                2. Payment terms for tooling and the first order noted, including deposits and balances.
                3. A monthly cash view from today to the first customer payment.
                4. A contingency line held for re-tooling and repeat certification tests.

                ## Notes
                Agree how tooling and inventory are treated in the accounts with your accountant; this budget organises the numbers, it does not settle the tax treatment.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A month-by-month budget from today to first customer payment covering every stage, with payment terms and a contingency line."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every cost by stage from prototype to first order"
                - "Ask the factory for its deposit and payment terms on tooling and units"
                - "Build a monthly cash view up to the first customer payment"
                - "Compare actual spend with the hardware budget @recurring(monthly:28)"
            - name: Part numbering and design revision control
              description: |-
                ## Purpose
                When three prototype revisions are on the bench and the factory holds a fourth, nobody can say which drawing is current unless every part, assembly and file carries a number and a revision. A simple part numbering scheme and a single home for released files, whether a PLM tool or a strict folder structure, prevents the costly mistake of building from the wrong revision.

                ## Milestones
                1. A part numbering scheme written down and applied to the current BOM.
                2. Released files kept in one place, separate from work in progress.
                3. Revision letters on every drawing, schematic and firmware image.
                4. A rule agreed with the factory that it builds only from released revisions.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every part on the current BOM carries a scheme part number and revision, and released files live in one location the factory builds from."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose a part numbering format and write it on one page"
                - "Renumber the current BOM using the new scheme"
                - "Separate released files from work in progress in one shared location"
                - "Tell the factory in writing that it builds only from released revisions"
            - name: Patents, design rights and supplier NDA checklist
              description: |-
                ## Purpose
                Sending CAD files to a factory overseas or launching a crowdfunding page can affect what you are later able to protect, and a competitor's patent can block a feature. A checklist covering supplier NDAs, a conversation with a patent attorney before public disclosure and a record of who holds which files keeps your options open without turning into a legal project.

                ## Milestones
                1. NDAs signed with every supplier and contractor that holds design files.
                2. A patent attorney consulted on what to file, if anything, before public disclosure.
                3. A freedom to operate question raised for any feature that resembles a competitor's.
                4. A register of who holds which design files, and since when.

                ## Notes
                This organises the questions; the answers come from a qualified patent attorney in your jurisdiction.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Signed NDAs for every file holder, a recorded attorney view on filing before disclosure, and a current file register."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every supplier and contractor that has your design files"
                - "Send a mutual NDA to anyone on the list who has not signed one"
                - "Book a consultation with a patent attorney before any public reveal"
                - "Keep a register of which files went to whom and when"
            - name: Weekly hardware programme and risk review
              description: |-
                ## Purpose
                Hardware risks compound quietly: a slipping part, a failed drop test, a lab date at risk. A weekly 30-minute review of the schedule, open issues and the risk register, with engineering, operations and the factory contact present, means problems surface while there is still time to pay for expedited freight or design around them.

                ## Milestones
                1. A standing weekly slot with a fixed agenda: schedule, issues, risks, decisions.
                2. A risk register with likelihood, impact, owner and next action for each risk.
                3. Decisions from each review recorded with a date.
                4. Twelve consecutive weekly reviews held.

                ## Notes
                Start from the **Risk register** template. Keep the meeting to the top five risks; the full register is for reading beforehand.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive weekly reviews held, each leaving an updated risk register and dated decisions."
                cadence: rolling
              tasks:
                - "Set a 30-minute weekly slot and invite engineering, operations and the factory contact"
                - "Create the risk register with an owner for every open risk"
                - "Review the schedule, open issues and top five risks @recurring(weekly:tue)"
                - "Write each decision and its date at the bottom of the review notes"
            - name: Monthly BOM cost roll-up against target
              description: |-
                ## Purpose
                Each design change adds a little cost here and there, and by DVT the bill of materials can be well over target without anyone deciding it should be. Rolling up the costed BOM every month from current quotes, at the volumes you will actually order, keeps cost a design input instead of a shock at the first production quote.

                ## Milestones
                1. A costed BOM with a quote source and volume break for every line.
                2. The total compared with the target BOM cost each month.
                3. The five most expensive lines named, each with an owner exploring cheaper options.
                4. Six monthly roll-ups recorded in a row.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly BOM roll-ups, each compared with the target cost and with owners on the five costliest lines."
                cadence: rolling
              tasks:
                - "Add a quote source and volume break to every BOM line"
                - "Roll up the costed BOM and compare it with target @recurring(monthly:9)"
                - "Name the five most expensive lines and an owner for each"
                - "Record the monthly total in a cost history table"
            - name: Component lead time and lifecycle watch
              description: |-
                ## Purpose
                A single microcontroller going on allocation or reaching end of life can halt a production line for months. Watching lead times and lifecycle status for the critical parts, especially the single-source ones, gives time to buy buffer stock, qualify an alternative or redesign before the factory runs dry.

                ## Milestones
                1. Critical and single-source parts flagged on the BOM.
                2. Lead time and lifecycle status recorded for each flagged part.
                3. A buffer stock or last-time-buy decision made for every part at risk.
                4. Manufacturer change notices routed to one inbox that someone reads.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every flagged part has a current lead time and lifecycle status, and each at-risk part has a recorded buffer or last-time-buy decision."
                cadence: rolling
              tasks:
                - "Flag every single-source and long lead part on the BOM"
                - "Subscribe to change notices from the main component distributors"
                - "Check lead times on flagged parts with the distributor @recurring(monthly:3)"
                - "Review lifecycle status and end-of-life notices for flagged parts @recurring(quarterly)"
            - name: Engineering change order process
              description: |-
                ## Purpose
                Once a design is released, changing it touches tooling, stock, test fixtures, certification and the factory's work instructions. A light engineering change order process, where each change states the reason, affected parts, cost and the date it takes effect, stops quiet edits that leave the factory building one revision while the team tests another.

                ## Milestones
                1. An ECO form with reason, affected parts, cost, stock disposition and effective date.
                2. A weekly change board where ECOs are approved or rejected.
                3. Every approved ECO sent to the factory with a confirmed effective serial number or date.
                4. No change to certified parts approved without the test lab being asked first.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every released change for three months went through an ECO with reason, cost and effective date, confirmed by the factory."
                cadence: rolling
              tasks:
                - "Draft a one-page ECO form with reason, parts, cost and effective date"
                - "Agree who sits on the change board and who has the final say"
                - "Review open change orders at the change board @recurring(weekly:thu)"
                - "Ask the test lab whether a change to certified parts needs retesting"
            - name: Supplier scorecard and quarterly review
              description: |-
                ## Purpose
                Factories and key suppliers respond to what is measured. A short scorecard covering on-time delivery, quality (defect rates and corrective actions closed), responsiveness and cost, reviewed with each supplier every quarter, gives you evidence for hard conversations and a fair basis for placing the next order.

                ## Milestones
                1. Four or five scorecard measures agreed and defined.
                2. Scorecards filled for the contract manufacturer and the top three component suppliers.
                3. A quarterly review held with each, with actions and owners recorded.
                4. Any supplier below threshold given a written improvement plan.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly reviews in a year with the factory and top three suppliers, each with a scored card and written actions."
                cadence: rolling
              tasks:
                - "Choose four scorecard measures and write how each is calculated"
                - "Fill the first scorecard for the factory and the top three suppliers"
                - "Hold the quarterly review with each key supplier @recurring(quarterly)"
                - "Send each supplier its agreed actions in writing after the review"
            - name: Prototype unit register and loan log
              description: |-
                ## Purpose
                Prototype units are scarce and expensive, and they scatter across desks, test labs, investors and early testers. A register showing each unit's serial number, revision, condition and current holder lets engineers find the right unit, ties test results to a known build, and stops an EVT unit being sent to a reviewer by mistake.

                ## Milestones
                1. Every prototype labelled with a serial number and build revision.
                2. A register listing holder, location, condition and known defects per unit.
                3. A sign-out step for units leaving the office.
                4. A monthly count that matches the register.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every prototype appears in the register with serial, revision and holder, and three monthly counts in a row match it."
                cadence: rolling
              tasks:
                - "Label every prototype with a serial number and revision"
                - "List each unit's holder, location and known defects"
                - "Add a sign-out line for any unit that leaves the building"
                - "Count prototypes against the register @recurring(monthly:16)"
            - name: Build and test failure triage
              description: |-
                ## Purpose
                Every build throws up failures: a cracked screw boss, a radio that drops out when hot, a solder joint that cracks after thermal cycling. A weekly triage that sorts by severity and assigns root cause analysis stops the team patching symptoms and carrying the same failure into the next build.

                ## Milestones
                1. One issue list for build and test failures, with severity levels defined.
                2. Each high severity failure assigned an owner and a root cause method such as 5 whys or 8D.
                3. Fixes verified on units from the next build, not just closed.
                4. Open high severity issues reviewed before every gate.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every high severity failure has an owner and root cause, and none is closed until verified on units from a later build."
                cadence: rolling
              tasks:
                - "Define three severity levels with an example for each"
                - "Move every open build failure into one issue list"
                - "Triage new failures and assign root cause owners @recurring(weekly:mon)"
                - "Verify each fix on units from the next build before closing it"
            - name: Field returns and failure analysis loop
              description: |-
                ## Purpose
                After launch, returned units are the most honest test data you will ever get. Logging every return with serial number, symptom and teardown result, then grouping by failure mode each month, shows whether a problem is a bad batch, a design weakness or misuse, and feeds fixes back into production.

                ## Milestones
                1. A returns log recording serial number, date code, symptom and teardown result.
                2. Returned units shipped to a place where someone can open them.
                3. Failure modes ranked monthly by count and cost.
                4. At least one change order raised from field data in the first year.

                ## Notes
                Ask support to capture the serial number on every claim; without it a return cannot be traced to a batch.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve months of returns logged with serial and teardown result, ranked monthly, with at least one change order raised from them."
                cadence: rolling
              tasks:
                - "Set up a returns log with serial number, date code and symptom"
                - "Agree where returned units go for teardown"
                - "Rank last month's returns by failure mode and cost @recurring(monthly:22)"
                - "Raise a change order for the most frequent failure mode"
            - name: Firmware release and over-the-air update routine
              description: |-
                ## Purpose
                A connected device keeps changing after it ships, and a bad firmware update can brick units in customers' homes. A release routine with versions tied to hardware revisions, an internal test fleet, a small first wave and a proven recovery path keeps updates safe while still shipping fixes every month.

                ## Milestones
                1. Firmware versions mapped to the hardware revisions they support.
                2. An internal test fleet covering every shipped hardware revision.
                3. A recovery path proven: an interrupted update returns the device to a working image.
                4. A monthly release cadence with notes for the support team.

                ## Notes
                Test updates on units with a low battery and weak signal, which is where most updates fail in the field.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly firmware releases shipped through the test fleet first, with zero units left unrecoverable by an update."
                cadence: rolling
              tasks:
                - "Map each firmware version to the hardware revisions it supports"
                - "Keep at least one unit of every shipped revision in the test fleet"
                - "Prove the device recovers when an update is cut off midway"
                - "Ship the monthly firmware release to the test fleet first @recurring(monthly:12)"
            - name: Reading component datasheets with confidence
              description: |-
                ## Purpose
                Datasheets decide whether a part will survive your temperature range, battery voltage and production volume, yet the headline figures on page one are often best case. Learning to read absolute maximum ratings, typical versus guaranteed values, package drawings and errata lets a product manager or founder ask sharp questions in design reviews.

                ## Milestones
                1. Absolute maximum, recommended operating and typical values told apart on three real datasheets.
                2. Package, footprint and lifecycle sections read for one chosen part.
                3. The errata sheet found and checked for the main processor.
                4. Five questions written for the next design review from what was learned.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three critical datasheets annotated, the processor errata checked, and five questions raised at a design review."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pick the three most critical parts on the BOM"
                - "Mark absolute maximum and guaranteed values on each datasheet"
                - "Find the errata document for the main processor"
                - "Write five design review questions from the reading"
            - name: Design for manufacturing and assembly basics
              description: |-
                ## Purpose
                Parts that are easy to draw can be slow or impossible to make at volume: undercuts that need side actions, screws that need three tools, cables that must be routed by hand. Learning the core rules of design for manufacturing and assembly helps you spot costly choices in CAD before a factory quotes for them.

                ## Milestones
                1. The main DFMA rules understood: fewer parts, one assembly direction, self-locating features, standard fasteners.
                2. The current design's part count and fastener types listed.
                3. Three assembly simplifications proposed from the review.
                4. A factory DFM report read and each point understood.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Part count and fastener types listed for the current design, with three simplifications proposed to the mechanical lead."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Read a short guide to design for manufacturing and assembly"
                - "Count parts and fastener types in the current assembly"
                - "Propose three simplifications to the mechanical lead"
                - "Go through the factory's DFM report line by line with the engineer"
            - name: Injection moulding and tooling fundamentals
              description: |-
                ## Purpose
                Tooling is often the largest one-off cost in a consumer device, and moulding decisions such as draft angles, wall thickness, gate position and surface texture are hard to change once steel is cut. Knowing the vocabulary and the stages from DFM review through T1 samples to texture approval lets you sign off tools with your eyes open.

                ## Milestones
                1. Draft, wall thickness, gate, ejector marks, sink and parting line explained in your own words.
                2. Steel versus aluminium tooling and cavity count trade-offs understood.
                3. The steps from DFM review through T1, T2 and texture approval written as a sequence.
                4. One set of sample parts examined for sink, flash and gate marks.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written tooling approval sequence and a comparison of steel and aluminium quotes for one part, reviewed with the toolmaker."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Learn the core moulding terms from a toolmaker's design guide"
                - "Compare steel and aluminium tool quotes for one part"
                - "Write the tooling approval steps from DFM to texture"
                - "Examine sample parts for sink marks, flash and gate marks"
            - name: EMC and radio testing explained
              description: |-
                ## Purpose
                Electromagnetic compatibility and radio tests are where many connected devices fail late, often because of a cable, a switching regulator or an antenna placed next to the battery. Understanding what emissions, immunity and radio tests measure, and how a pre-scan differs from a formal test, makes it easier to budget for both and to plan a second attempt.

                ## Milestones
                1. Radiated and conducted emissions, immunity and radio tests told apart.
                2. The difference between a pre-compliance scan and a formal test explained.
                3. The design features most likely to cause failures listed for your device.
                4. A pre-compliance scan booked before DVT.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A list of likely failure sources for your device and a pre-compliance scan booked or completed before the DVT build."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask your test lab for an overview of the tests your device needs"
                - "List design features that commonly cause emissions failures"
                - "Book a pre-compliance scan before the DVT build"
                - "Note the pre-scan margin against each limit"
            - name: How electronics are made, from SMT line to box build
              description: |-
                ## Purpose
                Visiting a factory is far more useful if you already know what you are looking at: solder paste printing, pick and place, reflow, inspection, through-hole work, coating, programming, test and final assembly. Knowing the flow helps you ask where defects are caught and what your design adds to each step.

                ## Milestones
                1. The steps of a surface-mount line listed in order.
                2. Inspection methods (solder paste inspection, AOI, X-ray) and what each catches noted.
                3. Where programming and functional test sit in the flow understood.
                4. One factory line walked or watched on a video tour, with questions written.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written outline of the assembly flow for your board, with five questions prepared for the factory."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Watch a full surface-mount line tour and list each step"
                - "Note what AOI and X-ray inspection can and cannot catch"
                - "Ask the factory where your board gets programmed and tested"
                - "Write five questions to ask on the next factory visit"
            - name: Reliability testing fundamentals
              description: |-
                ## Purpose
                Customers judge a device by whether it still works after a year of drops, heat, damp and button presses. Learning the common reliability tests (drop, tumble, thermal cycling, humidity, button life, accelerated life) and how sample sizes relate to confidence lets you write a test plan the product can genuinely be held to.

                ## Milestones
                1. Common reliability tests listed with the failure each one reveals.
                2. A reliability test plan drafted against the requirements sheet.
                3. Sample sizes chosen with the reasoning written down.
                4. A lab or in-house rig identified for each test.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A reliability test plan linked to the requirements sheet, with sample sizes, reasoning and a test location for each test."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List the reliability tests that match your use environment"
                - "Draft a test plan linked to each requirement"
                - "Decide sample sizes for each test and record why"
                - "Find a lab or build a rig for drop and thermal cycling"
            - name: Incoterms, freight and landed cost basics
              description: |-
                ## Purpose
                Whether a factory quote is EXW, FOB or DDP changes who pays for freight, insurance and duties and who carries the risk of loss, and it can swing landed cost by several percent. Learning the main Incoterms and how a freight forwarder and customs broker fit together stops a cheap unit price turning into an expensive arrival.

                ## Milestones
                1. EXW, FOB, CIF and DDP explained in your own words, with who carries risk at each point.
                2. A freight forwarder and a customs broker identified.
                3. Duty classification for the device confirmed with the broker.
                4. Landed cost per unit recalculated with real quotes.

                ## Notes
                Tariff classification is a call for a licensed customs broker; record their answer and their reasoning.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A landed cost per unit recalculated from two freight quotes and a broker-confirmed tariff classification."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Learn who pays and carries risk under EXW, FOB and DDP"
                - "Request freight quotes from two forwarders for a sample shipment"
                - "Ask a customs broker to confirm the tariff classification"
                - "Recalculate landed cost per unit with the real quotes"
            - name: Lithium battery safety and shipping basics
              description: |-
                ## Purpose
                A lithium cell is often the most hazardous part of a consumer device: it constrains enclosure design, charging circuits, certification and how units can be shipped by air. Learning the essentials of cell selection, protection circuits, transport tests and safe handling in the office keeps prototypes and people safe.

                ## Milestones
                1. Cell protection, charge limits and thermal behaviour understood well enough to question the design.
                2. Transport testing and documentation needs noted (for example UN 38.3 test summaries).
                3. Cells sourced only from suppliers who provide test summaries.
                4. Office rules set for storing, charging and disposing of prototype cells.

                ## Notes
                Damaged or swollen cells are a fire risk. Follow the cell maker's guidance and your local fire service's advice on storage and disposal.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Supplier transport test summaries on file for every cell used, and written office rules for charging, storage and disposal."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read the cell supplier's datasheet and safety guidance"
                - "Ask the supplier for its transport test summary"
                - "Write office rules for charging and storing prototype cells"
                - "Set up a fireproof container for damaged or swollen cells"
            - name: Contract manufacturer selection
              description: |-
                ## Purpose
                The factory you choose shapes cost, quality and your schedule for years, and switching after tooling is painful. Sending the same request for quote to four or five manufacturers, auditing the shortlist and scoring them on the same criteria turns a relationship decision into an evidenced one.

                ## Milestones
                1. A request for quote pack: BOM, drawings, volumes, test needs and target dates.
                2. Quotes from at least four manufacturers on the same basis.
                3. Two finalists audited on site or by a third-party inspector.
                4. A scored comparison and a written decision with reasons.

                ## Notes
                Start from the **Vendor** template. Ask for references from customers making products of similar size and complexity, not just their best-known client.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A contract manufacturer chosen from at least four comparable quotes and two audits, with the scored comparison and reasons recorded."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Assemble the request for quote pack with BOM, drawings and volumes"
                - "Send the pack to five manufacturers with one reply deadline"
                - "Ask the agent to summarise the quotes into one comparison table"
                - "Score each quote on cost, capability, quality systems and communication"
                - "Audit the two finalists on site or through a third-party inspector"
            - name: Pre-certified radio module or chip-down design
              description: |-
                ## Purpose
                Using a pre-certified wireless module costs more per unit but can cut radio certification effort and design risk; putting the radio chip directly on your own board is cheaper at volume but harder to get right. Comparing the two on unit cost, certification cost, schedule and breakeven volume gives a decision you can defend at each build.

                ## Milestones
                1. Module and chip-down options costed per unit at three volume levels.
                2. Certification effort for each option confirmed with the test lab.
                3. A breakeven volume worked out.
                4. The decision recorded, with the volume that would reopen it.

                ## Notes
                A finished product using a pre-certified module usually still needs some testing of its own; ask the lab exactly what the module's approval covers.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded radio architecture decision with unit costs at three volumes, lab-confirmed certification effort and a breakeven volume."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Cost a module and a chip-down design at three volumes"
                - "Ask the test lab what a module approval does and does not cover"
                - "Work out the volume where chip-down pays back"
                - "Record the decision and the volume that would reopen it"
            - name: Enclosure prototyping method by build stage
              description: |-
                ## Purpose
                Choosing between 3D printing, CNC machining, urethane casting, soft tooling and production steel at each stage decides how realistic prototypes look and how much they cost. Matching the method to what each build must prove avoids paying for steel too early, or drop testing parts that behave nothing like the final plastic.

                ## Milestones
                1. Prototype methods compared for cost, lead time and material realism.
                2. A method chosen for each build stage, with the reason.
                3. Parts for drop and fit testing made in a material close to production.
                4. Steel tooling release planned only after the enclosure design is frozen.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written enclosure method for each build stage, based on at least three quotes, with drop test parts in near-production material."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Get quotes for printed, cast and soft-tooled versions of the enclosure"
                - "Choose a method for each build and write down why"
                - "Check that drop test parts use a near-production material"
                - "Hold steel tooling release until the enclosure design is frozen"
            - name: Value engineering pass on the BOM
              description: |-
                ## Purpose
                Once the design works, a focused cost-down pass often finds savings nobody had time for in the rush to EVT: an over-specified connector, a custom part that could be standard, a board with two more layers than it needs. Running the pass before DVT, while changes are still affordable, protects margin for the life of the product.

                ## Milestones
                1. Every BOM line above a set cost threshold reviewed for a cheaper alternative.
                2. Proposed changes listed with saving per unit and the testing each would need.
                3. Approved changes raised as change orders.
                4. The new BOM cost compared with target.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A value engineering list with saving and retest effort per change, and approved savings raised as change orders before DVT."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List every BOM line above the cost threshold you set"
                - "Ask the factory and distributors for cheaper equivalent parts"
                - "Estimate the saving and retest effort for each proposal"
                - "Raise change orders for the approved savings"
            - name: Connectivity choice for a connected device
              description: |-
                ## Purpose
                Wi-Fi, Bluetooth Low Energy, cellular, Thread, Zigbee and low-power wide-area networks each trade range, power, cost, certification and set-up friction differently. Comparing them against how customers will really set up and use the device prevents a choice that drains the battery or makes pairing a support nightmare.

                ## Milestones
                1. Candidate technologies listed with range, power draw, module cost and any recurring connectivity fees.
                2. Set-up and pairing steps sketched for each from the customer's point of view.
                3. Certification and carrier approval needs noted for cellular options.
                4. A choice recorded with the main trade-off accepted.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded connectivity choice comparing at least three options on range, power, cost and set-up steps, with the accepted trade-off."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the connectivity options that suit the use environment"
                - "Sketch the customer's set-up steps for each option"
                - "Estimate battery life impact for each with the firmware lead"
                - "Write down the choice and the trade-off being accepted"
            - name: Second source qualification for critical parts
              description: |-
                ## Purpose
                Relying on one supplier for a processor, battery or display means any shortage stops production. Qualifying a second source for the riskiest parts, with the same tests the first one passed, turns a supply crisis into an inconvenience.

                ## Milestones
                1. The three to five parts with the highest supply risk chosen.
                2. An alternative part or supplier identified for each.
                3. Qualification tests run on the alternatives and results recorded.
                4. The BOM updated to list approved alternates.

                ## Notes
                An alternate radio or power part can affect certification. Check with the test lab before treating it as approved.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "At least three high-risk parts have a qualified alternate with test results on file and listed on the BOM."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Pick the five parts whose shortage would stop production"
                - "Find an alternative part or supplier for each"
                - "Run the qualification tests the original part passed"
                - "Add approved alternates to the BOM and tell the factory"
            - name: Retail packaging and transit drop testing
              description: |-
                ## Purpose
                Packaging is part of the product: it protects the device through parcel networks, carries regulatory marks and is the first thing a customer sees. Designing the box, insert and labels early, then testing packed units to a recognised transit procedure, avoids crushed units, wasted freight on oversized boxes and late label reprints.

                ## Milestones
                1. A packaging design with box, insert, accessories and manual layout.
                2. Regulatory marks, recycling symbols and barcodes placed on the artwork.
                3. Packed units passed a transit drop and vibration test (for example an ISTA procedure).
                4. Carton size and units per master carton set for freight efficiency.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Approved packaging artwork with all required marks, and packed units that passed a recognised transit drop and vibration test."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Brief a packaging designer with the device, accessories and channel"
                - "List the marks, symbols and barcodes the box must carry"
                - "Send packed samples for a transit drop and vibration test"
                - "Set master carton size to fit the pallet and freight plan"
            - name: Tooling release sign-off
              description: |-
                ## Purpose
                Approving the cut of production tooling commits a large sum and fixes the shape of the product. A sign-off that checks the design is frozen, the toolmaker's DFM points are resolved, the parts fit around the current boards and the cost is accepted makes sure that money is spent once.

                ## Milestones
                1. Every DFM comment from the toolmaker closed or accepted in writing.
                2. Fit checked with the current board revision and cables.
                3. Tool steel, cavities, texture and tool life agreed in the quote.
                4. Tooling ownership confirmed in writing and the sign-off recorded.

                ## Notes
                Make sure the contract states that you own the tools and can move them, even though they live at the factory.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A recorded tooling sign-off with every DFM comment closed, fit confirmed and written confirmation that you own the tools."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Collect the toolmaker's DFM report and close each comment"
                - "Check fit with the current board revision and cables"
                - "Confirm steel, cavities, texture and tool life in the quote"
                - "Get written confirmation that you own the tooling"
            - name: Works-like and looks-like prototype review
              description: |-
                ## Purpose
                Early on, most teams build two separate prototypes: a works-like one that proves the electronics and a looks-like one that shows size, feel and finish. Reviewing both with five to ten target users and the people funding the work confirms the concept before money goes into an integrated EVT build.

                ## Milestones
                1. A works-like prototype that demonstrates the core function.
                2. A looks-like model at true size, weight and finish.
                3. Sessions with at least five target users recorded with observations.
                4. A list of changes agreed before EVT design starts.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Both prototypes reviewed with at least five target users, with observations recorded and an agreed change list for EVT."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Book five to ten target users for hands-on sessions"
                - "Prepare a script of tasks for each user to try"
                - "Record what each user did, not just what they said"
                - "Agree the changes going into the EVT design"
            - name: EVT build and exit review
              description: |-
                ## Purpose
                Engineering validation is the first time the real boards and enclosure come together, usually in tens of units, to prove the design meets its requirements. Planning the build, running the test plan and holding a formal exit review against the criteria written earlier stops a team drifting into DVT with open design problems.

                ## Milestones
                1. EVT units built at the agreed quantity and logged in the unit register.
                2. The functional and early reliability test plan run on EVT units.
                3. Every failure triaged with a fix planned.
                4. An exit review held, with a go, conditional go or no-go decision recorded.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "EVT units built and tested against the requirements sheet, with an exit decision recorded against the written gate criteria."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Confirm EVT quantity, build date and parts with the factory"
                - "Run the EVT test plan and log results per unit"
                - "Triage EVT failures with an owner for each fix"
                - "Hold the EVT exit review and record the decision"
            - name: DVT build and formal certification testing
              description: |-
                ## Purpose
                Design validation proves that the final design, built with production-intent tooling and processes, passes reliability tests and certification. It is usually the build that goes to the test lab, so lab slots, test samples and technical documentation must be ready the day units come off the line.

                ## Milestones
                1. DVT units built from production-intent tools at the agreed quantity.
                2. The full reliability test plan run, with results against requirements.
                3. Units and technical files submitted to the test lab for formal approvals.
                4. Certification results received, with any failures fixed and retested.
                5. DVT exit review held and the decision recorded.
              priority: high
              deadlineOffsetDays: 210
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "DVT units passed the reliability plan and formal certification tests for each launch market, with the exit decision recorded."
                cadence: phased
                effort_hours_estimate: "80"
              tasks:
                - "Confirm lab slots and sample counts for formal testing"
                - "Prepare the technical file the lab asks for"
                - "Run the full reliability test plan on DVT units"
                - "Hold the DVT exit review once lab results are back"
            - name: PVT pilot run and mass production decision
              description: |-
                ## Purpose
                Production validation runs the real line at rate, with the real operators, fixtures and test stations, to prove the factory can make good units consistently. The yield, cycle time and defect data from this run decide whether to release the first mass production order or fix the process first.

                ## Milestones
                1. A pilot run at planned line speed with production fixtures and test stations.
                2. First pass yield and top defects measured.
                3. Golden samples approved and kept by both you and the factory.
                4. A written go decision for mass production, or a dated fix plan.
              priority: high
              deadlineOffsetDays: 300
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A pilot run completed with measured first pass yield, sealed golden samples and a recorded mass production decision."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Agree pilot run quantity and line speed with the factory"
                - "Measure first pass yield and the top three defects"
                - "Approve and seal golden samples for you and the factory"
                - "Make and record the mass production decision"
            - name: Factory visit for first article inspection
              description: |-
                ## Purpose
                Seeing the line before the first production order ships catches problems that photos hide: an operator improvising a step, a fixture that does not fit, cartons packed the wrong way. A planned visit with a checklist, a first article inspection and time with the line leaders builds both the relationship and the evidence.

                ## Milestones
                1. A visit agenda agreed with the factory covering line walk, inspection and meetings.
                2. First article inspection completed against drawings and the golden sample.
                3. Issues found written up with owners and dates before leaving.
                4. A summary shared with the team within a week of return.

                ## Notes
                Start from the **Trip** template. Check visa and travel requirements well ahead, and avoid the factory's holiday shutdowns.
              priority: medium
              deadlineOffsetDays: 270
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A completed first article inspection on site, with issues, owners and dates written up before leaving the factory."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Agree the visit agenda and dates with the factory"
                - "Prepare the first article inspection checklist from the drawings"
                - "Write up issues with owners before leaving the factory"
                - "Share the visit summary with the team within a week"
            - name: Crowdfunding or pre-order readiness for a device
              description: |-
                ## Purpose
                Pre-orders can fund tooling and prove demand, but many hardware campaigns ship late because the date was promised before DVT. Getting ready with an honest delivery estimate, a costed reward list, fulfilment and duty plans for each country and an update rhythm for backers protects trust when lead times stretch.

                ## Milestones
                1. Delivery estimate set from the master schedule, with a stated buffer.
                2. Every reward costed including freight, duties and payment fees.
                3. Fulfilment partner and shipping regions decided.
                4. A backer update plan in place through to delivery.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A campaign plan with a schedule-based delivery estimate, fully costed rewards, a chosen fulfilment partner and a backer update plan."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Set the delivery estimate from the schedule and add a buffer"
                - "Cost each reward with freight, duties and fees"
                - "Shortlist fulfilment partners for each shipping region"
                - "Draft the backer update plan from launch to delivery"
            - name: First production shipment hand-off
              description: |-
                ## Purpose
                The first mass production order is the moment units become stock: they need a final inspection, booked freight, customs paperwork, a receiving warehouse and serial numbers matched to records. A planned hand-off means the first containers arrive where they should, cleared and ready to sell.

                ## Milestones
                1. Pre-shipment inspection passed at the factory against the agreed sampling level.
                2. Freight booked and the commercial invoice, packing list and certificates ready.
                3. Warehouse briefed on carton labels, quantities and receiving checks.
                4. Serial numbers and date codes from the shipment recorded.
              priority: medium
              deadlineOffsetDays: 330
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first production shipment passed pre-shipment inspection, cleared customs and was received with serials recorded."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Book a pre-shipment inspection at the factory"
                - "Confirm freight, invoice, packing list and certificates with the forwarder"
                - "Brief the warehouse on carton labels and receiving checks"
                - "Record shipment serial numbers and date codes"
            - name: Solo founder's first prototype on a small budget
              description: |-
                ## Purpose
                Working alone with limited savings, a founder can still get a convincing prototype by using development boards, off-the-shelf modules, 3D printing and a local makerspace before spending on custom boards. Deciding what each spend must prove keeps cash for the steps that need it, and gives investors or early customers something real to hold.

                ## Milestones
                1. The single riskiest question the prototype must answer written down.
                2. A prototype built from development boards and printed parts.
                3. Spend logged against a fixed prototype budget.
                4. Feedback recorded from at least five potential customers who held it.

                ## Notes
                Resist designing a custom board until the riskiest question is answered; a development board plus wires answers most early questions.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A working prototype built within a fixed budget, answering one written question, with feedback from five potential customers."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Write the one question your prototype must answer"
                - "Set a fixed budget for the first prototype"
                - "Book time at a local makerspace or fab lab"
                - "Show the prototype to five potential customers and note reactions"
            - name: Software product team adding its first device
              description: |-
                ## Purpose
                Teams used to shipping software every week are often caught out by hardware's fixed points: decisions that cannot be undone after tooling, months of lead time and stock that must be paid for up front. Setting expectations, adding hardware experience and adjusting the planning rhythm avoids treating a device like an app release.

                ## Milestones
                1. The team briefed on stage gates, lead times and what becomes fixed when.
                2. Hardware experience added through a hire, a consultant or a design firm.
                3. Planning adjusted so firmware and app work line up with the build schedule.
                4. Companion app pairing and set-up flow scoped alongside the device.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A recorded decision on how hardware expertise is added, and app and firmware milestones aligned to the build schedule."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Run a session on stage gates and lead times for the software team"
                - "Decide whether to hire, contract or use a design firm for hardware"
                - "Align app and firmware milestones with the build schedule"
                - "Scope the pairing and set-up flow with the app team"
            - name: Engineer moving into hardware product ownership
              description: |-
                ## Purpose
                Engineers who step into a product role on a device bring credibility with the design team but often lack the commercial side: cost targets, channel margins, certification timing and customer research. A 90-day plan for the switch covers those gaps while keeping the technical judgement that made them valuable.

                ## Milestones
                1. A 90-day plan written with commercial and technical goals.
                2. One cost stack, one certification plan and five customer conversations completed.
                3. A clear split agreed with the engineering lead on who decides what.
                4. A review with your manager held at day 90.

                ## Notes
                Start from the **Onboarding 30/60/90** template.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A 90-day plan completed with a cost stack, five customer conversations and written decision rights, reviewed with your manager."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Draft a 90-day plan from the onboarding template"
                - "Agree decision rights with the engineering lead in writing"
                - "Hold five customer conversations in the first month"
                - "Book the day 90 review with your manager"
            - name: Technical due diligence pack for hardware investors
              description: |-
                ## Purpose
                Investors in hardware ask harder questions than in software: is the BOM cost real, who is the factory, what is certified, what does tooling cost and who owns it. A ready pack with evidence for each answer shortens due diligence and shows the team understands manufacturing risk.

                ## Milestones
                1. A costed BOM with quote sources and the margin stack.
                2. Factory selection evidence and a summary of the manufacturing agreement.
                3. Certification status by market and an index of test reports.
                4. Schedule, risk register and stage gate results to date.
                5. The pack reviewed by an adviser who has raised money for hardware before.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A due diligence folder covering BOM, cost stack, factory, certification, schedule and risks, reviewed by an experienced adviser."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "List the questions hardware investors typically ask"
                - "Collect BOM, cost stack and factory evidence into one folder"
                - "Add certification status and test reports by market"
                - "Ask the agent to draft a one-page summary of the pack"
            - name: Working rhythm with an overseas factory
              description: |-
                ## Purpose
                Most hardware teams build far from their factory, across time zones, languages and holidays such as Lunar New Year, when lines can stop for weeks. A clear rhythm of a weekly call, a shared issue list, a named contact on each side and someone local who can visit the line keeps a remote relationship from turning into surprises.

                ## Milestones
                1. Named contacts on each side for engineering, quality and orders.
                2. A weekly call at a time that works in both time zones.
                3. Factory holidays marked in the master schedule.
                4. A local inspector or representative engaged for line visits.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve weekly factory calls held against a shared issue list, with factory holidays in the schedule and a local representative engaged."
                cadence: rolling
              tasks:
                - "Name the contact for engineering, quality and orders on each side"
                - "Mark the factory's holidays in the master schedule"
                - "Hold the weekly factory call with the shared issue list @recurring(weekly:wed)"
                - "Engage a local inspector or representative for line visits"
            - name: End-of-line test station and test coverage
              description: |-
                ## Purpose
                Every unit that leaves the factory should be tested, and the end-of-line station decides what a pass means: power, radios, sensors, buttons, display and firmware version. Specifying coverage, fixtures, test time and data logging with the factory turns testing from a manual step into evidence tied to each serial number.

                ## Milestones
                1. A coverage list linking each function to a test.
                2. Fixture and station design agreed, with a target test time per unit.
                3. Results logged per serial number to a database you can read.
                4. Station limits checked against golden and known-bad units.

                ## Notes
                Design test points into the board before EVT; adding them after tooling is far harder.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An end-of-line station covering every listed function, logging results per serial, and verified against golden and known-bad units."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "List every function the station must test"
                - "Agree fixture design and target test time with the factory"
                - "Make sure results are stored against each serial number"
                - "Check station calibration and fixture wear @recurring(quarterly)"
            - name: First pass yield improvement programme
              description: |-
                ## Purpose
                Running a line at low first pass yield costs twice, in rework labour and in scrapped parts. Tracking yield weekly by test step, ranking defects with a Pareto chart and working the top causes with the factory engineers is how mature hardware teams protect margin after launch.

                ## Milestones
                1. First pass yield measured weekly by test step.
                2. Top defects ranked by count and cost.
                3. Corrective actions agreed with factory engineers for the top three causes.
                4. The yield gain sustained for eight weeks.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly first pass yield recorded by test step for a quarter, with corrective actions on the top three defects and the gain held for eight weeks."
                cadence: rolling
              tasks:
                - "Agree how the factory reports first pass yield by test step"
                - "Review yield and the defect Pareto with the factory @recurring(weekly:fri)"
                - "Agree corrective actions for the top three defects"
                - "Check the yield gain has held for eight weeks"
            - name: Connected device security and support period
              description: |-
                ## Purpose
                Connected products now face security rules in several markets, such as no shared default passwords, a way to report vulnerabilities and a stated period of security updates (the EU and the UK both have rules of this kind). Building secure boot, unique device credentials and a disclosure route in from the start avoids retrofits and failed approvals.

                ## Milestones
                1. Applicable security rules listed for each launch market and confirmed with a compliance adviser.
                2. Secure boot, signed updates and unique device credentials in the design.
                3. A public vulnerability reporting route with a named response owner.
                4. The security support period decided and published.

                ## Notes
                Rules in this area are changing; treat the list as a starting point and confirm current requirements for each market before launch.
              priority: high
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Market security requirements confirmed, secure boot and unique credentials in the design, and a published reporting route and support period."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "List security requirements for each launch market with your adviser"
                - "Confirm secure boot, signed updates and unique credentials with firmware"
                - "Publish a vulnerability reporting contact"
                - "Review vulnerability reports and component advisories @recurring(monthly:19)"
            - name: Repairability, spare parts and end-of-life plan
              description: |-
                ## Purpose
                Take-back rules for electronics and batteries, customer expectations of repair and the cost of warranty replacements all point the same way: design a device that can be opened, repaired and recycled. Planning spare parts, repair guides, producer obligations by market and battery removal before the design freezes costs far less than doing it afterwards.

                ## Milestones
                1. Producer obligations for electronics and battery take-back listed per market.
                2. Spare parts and their availability period decided.
                3. A repair guide drafted for the most likely failures.
                4. Battery removal and material labelling checked in the design.

                ## Notes
                Producer registration usually runs through a compliance scheme in each country; confirm the obligations with one before launch.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Producer obligations recorded per market, a spare parts list with an availability period, and a repair guide for three failures."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List take-back and producer registration duties for each market"
                - "Decide which spare parts to stock and for how long"
                - "Draft a repair guide for the three most likely failures"
                - "Check producer registrations and reporting are up to date @recurring(yearly)"
---

# Hardware Product Development

This area is for founders, product teams and engineers taking a physical or connected device from idea to shipped units, where decisions harden as tooling is cut and every mistake costs weeks. It starts with the foundations (a one-page brief, a cost stack, requirements, a certification map, stage gates, schedule and budget), then the operating routines for cost, parts, changes, suppliers and failures, the manufacturing knowledge worth learning, the big decisions from factory choice to tooling sign-off, the build events from looks-like prototype to first shipment, the situations different teams face, and the specialist work of test stations, yield, security and end of life.

What repeats is a Tuesday programme and risk review, a Monday failure triage, a Wednesday factory call, a Thursday change board and a Friday yield review, monthly checks on BOM cost, lead times, spend, prototypes, returns, firmware and security advisories, quarterly supplier reviews and lifecycle checks, and a yearly look at standards and take-back duties. The Product spec, Compliance control, Risk register, Vendor, Trip, Onboarding 30/60/90 and Metrics log templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
