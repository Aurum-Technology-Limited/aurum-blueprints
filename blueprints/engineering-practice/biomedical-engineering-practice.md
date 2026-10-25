---
id: engineering-practice.biomedical-engineering-practice
name: Biomedical Engineering Practice
description: "The working kit of a biomedical engineer: design controls and a design history file, an ISO 14971 risk file, verification and validation evidence, hospital equipment programmes and submissions a regulator can follow."
category: business
version: 1.0.0
tags: [engineering-practice, biomedical-engineering-practice, engineer, medical-devices, design-controls, iso-14971, clinical-engineering, regulatory-affairs]
author: Aurum Technology
starter_structure:
  templates:
    - product-spec
    - risk-register
    - vendor
    - operational-checklist
    - purchase-decision
    - onboarding-30-60-90
  pillars:
    - name: Engineering Practice
      emoji: "🔧"
      description: "The day-to-day work of practising engineers: each major discipline, process safety and risk studies, FEED, design reviews, commissioning, reliability and maintenance, CAD, simulation and PLC work, project delivery, tenders, reports, ethics and standards, and the Caribbean energy sector from Point Lisas to LNG."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Biomedical Engineering Practice
          description: "Working as a biomedical engineer: medical device design controls, risk files, verification and validation, clinical engineering in hospitals and regulatory submissions."
          projects:
            - name: Medical device standards and regulations shelf
              description: |-
                ## Purpose
                Almost every argument in a design review or audit ends at a clause in ISO 13485, ISO 14971, IEC 60601-1, IEC 62304 or the regulation of the market you sell into. Building a short, current shelf of the standards and regulatory texts your products are actually certified against, with the edition each one uses, means every requirement and test report can cite its source without a hunt.

                ## Milestones
                1. A list of the standards and regulations that apply to your devices, with the edition each product is assessed against.
                2. Access confirmed to every listed standard through the company library, a subscription or purchased copies.
                3. Regulator guidance documents for your main markets saved in one controlled folder.
                4. Recognised or harmonised standard lists for each market checked and noted against your list.
                5. A yearly date set to check for new editions and transition deadlines.

                ## Notes
                A new edition of a standard rarely applies the day it is published. Note the transition period each regulator allows, and record which edition each product's evidence was generated against.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A reference list naming each governing standard and regulation, its edition, transition date and where to access it, saved in the quality system."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every standard cited in your current device technical files"
                - "Ask the quality team which editions the company holds licences for"
                - "Save regulator guidance for your two main markets in one folder"
                - "Check the standards list for new editions and transition dates @recurring(yearly)"
            - name: Device classification and regulatory pathway map
              description: |-
                ## Purpose
                Classification decides almost everything that follows: which conformity route applies, whether clinical data is needed, how long a submission takes and what the quality system must prove. Writing down the class of each device in each target market, with the rule or product code that put it there, stops a team designing for the wrong pathway and finding out a year late.

                ## Milestones
                1. The intended use and indications for each device written in one or two sentences.
                2. The class in each target market recorded with the classification rule or product code used.
                3. The likely pathway named for each market, for example a 510(k), a De Novo request or a notified body route under the EU MDR.
                4. Any borderline or uncertain classification flagged for regulatory affairs or a consultant.
                5. The map reviewed and signed off by the regulatory lead.

                ## Notes
                The same device can sit in different classes in different markets, and a small change to the intended use can move it. Keep the wording of the intended use under change control from this point on.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A signed classification and pathway map for each device and market, with the rule or product code cited for each class."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write the intended use of the device in two sentences"
                - "Look up the classification rules for each target market"
                - "Search the regulator's public database for similar devices and their codes"
                - "Book a review of the map with the regulatory affairs lead"
            - name: Quality management system orientation under ISO 13485
              description: |-
                ## Purpose
                Engineers new to medical devices often treat the quality system as paperwork owned by someone else, then discover that design controls, document control, supplier controls and CAPA all run through it. Reading your company's quality manual against ISO 13485, and knowing which procedures touch your daily work, makes you faster and keeps your evidence audit-ready.

                ## Milestones
                1. The quality manual and quality policy read in full.
                2. The procedures that govern your work listed, including design control, document control, change control, CAPA and training.
                3. Each listed procedure mapped to its clause in ISO 13485 and any regional regulation such as the FDA quality system rule.
                4. Your training records checked as complete for every procedure you work under.
                5. Three questions about how the system works in practice answered by the quality lead.

                ## Notes
                Procedures describe what the company has promised a regulator it does. If a procedure does not match how work really happens, raise it rather than quietly working around it.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page map of the procedures you work under, each tied to an ISO 13485 clause, with your training records confirmed complete."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Read the company quality manual and quality policy"
                - "List the procedures that govern your current role"
                - "Map each procedure to its ISO 13485 clause"
                - "Ask the quality lead to confirm your training records are complete"
            - name: Design and development plan for a device
              description: |-
                ## Purpose
                Design controls begin with a plan: without one, reviews happen when someone remembers, responsibilities blur and auditors find a design history file assembled after the fact. A written design and development plan names the phases, deliverables, reviews, responsibilities and interfaces, and it becomes the spine the rest of the file hangs on.

                ## Milestones
                1. Development phases defined with the deliverables and review gate at the end of each.
                2. Responsibilities assigned for design, verification, validation, risk management and regulatory work.
                3. Interfaces with manufacturing, suppliers, clinical and regulatory teams described.
                4. The plan approved under document control and placed in the design history file.
                5. A rule agreed for when the plan must be updated as the project changes.

                ## Notes
                Start from the **Product spec** template for the overview, then move the approved plan into your controlled document system. Keep the plan short enough that people read it, and update it when the project changes rather than at the end.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An approved design and development plan with phases, gates, owners and interfaces, filed in the design history file."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Draft the list of development phases and their gate deliverables"
                - "Name an owner for design, verification, validation and risk work"
                - "Describe the interfaces with manufacturing and regulatory teams"
                - "Route the plan for approval through document control"
            - name: User needs and intended use statement
              description: |-
                ## Purpose
                Validation later asks a single question: does the device meet the needs of its users in its intended environment? Capturing those needs early, from clinicians, patients, biomedical technicians and reprocessing staff, gives validation something real to prove and stops the requirements becoming a list of what the engineers found interesting.

                ## Milestones
                1. The user groups, use environments and patient population described.
                2. Needs gathered from at least five people who will use, clean or maintain the device.
                3. Each need written as a plain-language statement with a unique identifier.
                4. The intended use statement agreed with regulatory affairs and placed under change control.
                5. The needs list approved and filed in the design history file.

                ## Notes
                Include the people who clean, reprocess and service the device. Their needs drive many late design changes when they are missed.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "An approved user needs list with unique identifiers and an agreed intended use statement, filed in the design history file."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "List every user group who will handle, clean or maintain the device"
                - "Arrange interviews or observation sessions with five intended users"
                - "Write each need as one plain-language statement with an identifier"
                - "Agree the intended use wording with regulatory affairs"
            - name: Design input requirements traceable to user needs
              description: |-
                ## Purpose
                Vague inputs such as easy to use or accurate cannot be verified, and every untestable requirement turns into an argument at the end of the project. Translating each user need into measurable design inputs, with acceptance criteria and a source, gives verification a clear target and auditors a clean trail.

                ## Milestones
                1. Each user need broken down into one or more design input requirements.
                2. Every requirement written with a measurable acceptance criterion and a verification method.
                3. Requirements from standards, risk controls and regulations added and marked with their source.
                4. Conflicting or ambiguous requirements resolved and the resolution recorded.
                5. The requirements set approved at a design review.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An approved design input specification in which every requirement has an acceptance criterion, a verification method and a traced source."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Break each user need into measurable design input requirements"
                - "Add requirements from IEC 60601-1 and the risk file with their sources"
                - "Mark every requirement with its planned verification method"
                - "Ask the agent to flag requirements that lack a measurable acceptance criterion"
            - name: Design history file structure and index
              description: |-
                ## Purpose
                Nobody can produce a design history file on the morning of an audit if it lives in personal folders and email threads. Setting up the structure and index at the start, with a place for every plan, input, output, review, verification, validation, transfer and change record, means each document lands in the right place as it is approved.

                ## Milestones
                1. A design history file index listing every expected record by phase.
                2. A controlled location set up, with access rights agreed with document control.
                3. Naming and numbering rules for design records agreed.
                4. Existing approved records moved in and listed in the index.
                5. Gaps in the index highlighted for the next design review.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A design history file index in a controlled location, with every existing approved record filed and gaps listed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Draft the design history file index by development phase"
                - "Agree a controlled location and access rights with document control"
                - "Move existing approved design records into the new structure"
                - "List the missing records for the next design review"
            - name: Risk management plan and acceptability criteria
              description: |-
                ## Purpose
                ISO 14971 expects risk acceptability criteria to be set in advance, in a plan, before anyone starts judging individual risks. Agreeing the severity and probability scales, the acceptability matrix, the review points and who has authority to accept residual risk keeps later risk decisions consistent and defensible.

                ## Milestones
                1. Severity and probability scales defined with examples relevant to the device.
                2. A risk acceptability matrix agreed and tied to the company's risk policy.
                3. Verification of risk control effectiveness planned.
                4. Methods for collecting production and post-production information named.
                5. The plan approved by top management or its delegate and filed in the risk management file.

                ## Notes
                Start from the **Risk register** template for the working list, then keep the approved file in your controlled system. Probability of harm is not the same as probability of failure; record both where it helps the reasoning.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An approved risk management plan with defined scales, an acceptability matrix and named reviewers, filed in the risk management file."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Draft severity and probability scales with device examples"
                - "Agree the risk acceptability matrix with the quality lead"
                - "Name who may accept residual risk and record it in the plan"
                - "Route the risk management plan for approval"
            - name: Hospital medical equipment inventory baseline
              description: |-
                ## Purpose
                Without knowing what equipment it is responsible for, a clinical engineering department cannot plan maintenance, act on recalls or argue for replacement budget. A verified inventory with asset tags, models, serial numbers, locations, ages and risk ratings is the base of every other hospital programme in this area.

                ## Milestones
                1. Every clinical area walked and each item of medical equipment tagged and recorded.
                2. Make, model, serial number, location and install date captured for each asset.
                3. Each asset given a risk or criticality rating using the department's agreed method.
                4. Equipment that is unaccounted for, unsupported or past end of life listed.
                5. The inventory loaded into the maintenance management system and signed off.

                ## Notes
                Include equipment on loan, under trial or bought by individual departments outside the normal process. Those items are often the ones missing from recall searches.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A complete, risk-rated medical equipment inventory loaded into the maintenance management system, with a list of unsupported items."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Export the current asset list from the maintenance management system"
                - "Walk one clinical area and reconcile every device against the list"
                - "Apply the department's risk rating to each verified asset"
                - "Reconcile the full inventory against purchasing and loan records @recurring(yearly)"
            - name: Design reviews with an independent reviewer
              description: |-
                ## Purpose
                Regulators expect each formal design review to include someone without direct responsibility for the stage being reviewed, and to leave records of attendees, decisions and actions. Running reviews on a steady rhythm, with an independent reviewer and an action log, catches problems while they are still cheap to fix.

                ## Milestones
                1. A review schedule tied to the gates in the design and development plan.
                2. An independent reviewer named for each formal review.
                3. A standard agenda and minutes format in use.
                4. Every review action logged with an owner and a due date.
                5. Open actions from earlier reviews checked at the start of each review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every gate review in the last two quarters has minutes naming an independent reviewer and a closed or owned action list."
                cadence: rolling
              tasks:
                - "Agree a standard design review agenda and minutes format"
                - "Name an independent reviewer for the next gate review"
                - "Review open design review actions with their owners @recurring(monthly:9)"
                - "File signed review minutes in the design history file"
            - name: Traceability matrix upkeep
              description: |-
                ## Purpose
                Traceability matrices link user needs to design inputs, design outputs, verification, validation and risk controls, and they decay the moment someone changes one end without updating the other. Updating yours each month, rather than in a panic before a submission, means a broken link shows up as one row to fix instead of a week of archaeology.

                ## Milestones
                1. One matrix covering needs, inputs, outputs, risk controls, verification and validation.
                2. Every requirement linked to at least one verification record.
                3. Every risk control linked to evidence that it was implemented and is effective.
                4. Orphan rows reported and assigned at each update.
                5. A monthly update completed for six consecutive months.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A traceability matrix with no orphan requirements or risk controls, updated monthly for six months in a row."
                cadence: rolling
              tasks:
                - "Choose the single tool or sheet that holds the traceability matrix"
                - "Link every risk control to its implementation and effectiveness evidence"
                - "Update the matrix and list orphan rows @recurring(monthly:16)"
            - name: Living risk file review with post-market data
              description: |-
                ## Purpose
                Signing a risk file at launch and never opening it again fails both ISO 14971 and the patients it was meant to protect. Reviewing complaints, service reports, trend data and published incidents against the risk analysis each quarter shows whether estimated probabilities still hold and whether new hazards have appeared.

                ## Milestones
                1. Sources of production and post-production information listed with an owner for each.
                2. A quarterly review meeting held with quality, engineering and clinical input.
                3. Each new hazard or changed estimate recorded in the risk analysis.
                4. The benefit and risk conclusion confirmed or revised in writing.
                5. Four quarterly reviews completed and minuted.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly risk file reviews minuted in a year, each recording whether estimates and the overall benefit and risk conclusion still hold."
                cadence: rolling
              tasks:
                - "List each post-market information source and its owner"
                - "Pull complaint, service and trend data for the review period"
                - "Hold the risk file review with quality and clinical input @recurring(quarterly)"
                - "Update the risk analysis with any new hazard or estimate"
            - name: Design change impact assessments for released devices
              description: |-
                ## Purpose
                A small change to a released device, a new supplier for a resin or a firmware fix, can trigger new verification, a new submission or a letter to a notified body. Assessing each change for its effect on requirements, risk, verification, labelling and regulatory status before it is approved prevents a change slipping through that should have been notified.

                ## Milestones
                1. A standard impact assessment form covering design, risk, verification, labelling and regulatory effects.
                2. Each open design change assessed with the regulatory decision recorded and justified.
                3. Reverification or revalidation planned where the assessment calls for it.
                4. The design history file and device master record updated after each approved change.
                5. A weekly review slot for new change requests running for three months.

                ## Notes
                Many regulators publish guidance on when a change needs a new submission. Cite the guidance and the reasoning in each assessment rather than just ticking yes or no.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every design change approved in the last quarter has an impact assessment with a justified regulatory decision on file."
                cadence: rolling
              tasks:
                - "Draft a change impact form covering risk, verification and labelling"
                - "Assess the oldest open design change against the form"
                - "Review new design change requests at the change board @recurring(weekly:tue)"
                - "Update the device master record after each approved change"
            - name: CAPA and nonconformance engineering support
              description: |-
                ## Purpose
                Corrective and preventive action is where auditors look first, and engineering input is usually what makes a CAPA stall or succeed. Taking ownership of the engineering side, from investigation to the effectiveness check, keeps CAPAs closing on time and stops the same nonconformance coming back under a new number.

                ## Milestones
                1. Every CAPA and nonconformance assigned to you listed with its status and due date.
                2. Investigations documented with evidence, not opinion.
                3. Corrective actions linked to design changes or process changes where needed.
                4. Effectiveness checks defined with a measurable criterion before closure.
                5. No assigned CAPA overdue for two consecutive months.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No CAPA assigned to engineering overdue for two consecutive months, each with a measurable effectiveness check recorded."
                cadence: rolling
              tasks:
                - "List every open CAPA and nonconformance assigned to engineering"
                - "Write a measurable effectiveness check for each open CAPA"
                - "Review engineering CAPA status and due dates @recurring(monthly:12)"
            - name: Complaint and field data trending for engineering
              description: |-
                ## Purpose
                Complaints, returned devices and service reports are the best evidence there is about how a design behaves in real clinical use. Reviewing them monthly with an engineer's eye, coding failure modes consistently and looking for trends, turns a quality obligation into design knowledge and catches reportable events early.

                ## Milestones
                1. A failure mode coding scheme agreed with the complaints team.
                2. Returned devices examined with findings recorded against the complaint.
                3. A monthly trend chart of complaint rate by failure mode.
                4. Trend thresholds that trigger a CAPA or risk file review agreed.
                5. Engineering findings fed back to the complaints team within the agreed time.

                ## Notes
                Deciding whether an event is reportable to a regulator belongs to the people the procedure names. Your job is to give them accurate technical facts quickly.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly complaint trend by failure mode, with agreed thresholds, reviewed for six consecutive months."
                cadence: rolling
              tasks:
                - "Agree a failure mode coding scheme with the complaints team"
                - "Examine one returned device and record the findings"
                - "Review complaint trends by failure mode @recurring(monthly:21)"
                - "Propose trend thresholds that trigger a CAPA"
            - name: Planned preventive maintenance programme
              description: |-
                ## Purpose
                Hospital equipment fails at the worst moments when maintenance is driven by breakdowns rather than a plan. A preventive maintenance programme with intervals set from manufacturer guidance and risk, scheduled work orders and a completion rate reviewed monthly keeps infusion pumps, defibrillators and ventilators ready when they are needed.

                ## Milestones
                1. Maintenance intervals set for each equipment type, with the basis recorded.
                2. Work orders generated automatically from the maintenance management system.
                3. Completion rate for high-risk equipment reported monthly.
                4. Overdue items escalated with a plan agreed with the clinical area.
                5. High-risk equipment completion held at or above the department's target for six months.

                ## Notes
                Start from the **Operational checklist** template for each equipment type's procedure. Where you deviate from the manufacturer's interval, record the evidence and approval behind the decision.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "High-risk equipment preventive maintenance completion at or above the department target for six consecutive months, with intervals documented."
                cadence: rolling
              tasks:
                - "Record the basis for each equipment type's maintenance interval"
                - "Plan the week's preventive maintenance work orders @recurring(weekly:mon)"
                - "Report the high-risk equipment completion rate @recurring(monthly:3)"
                - "Agree a plan with each ward that has overdue equipment"
            - name: Electrical safety testing to IEC 62353
              description: |-
                ## Purpose
                Leakage currents, protective earth resistance and insulation can drift as equipment ages, is repaired or is dropped, and a failing device on a patient is a direct hazard. Running recurrent and post-repair electrical safety tests to IEC 62353, with calibrated analysers and recorded results, gives each device a defensible test history.

                ## Milestones
                1. A written test procedure for each equipment class and applied part type.
                2. Safety analysers calibrated and their certificates on file.
                3. Tests performed after every repair and at the scheduled interval.
                4. Results stored against each asset with pass, fail and measured values.
                5. Every failure removed from service, tagged and closed out with a retest.

                ## Notes
                Never return a device to clinical use after a failed safety test because the ward is short. Your stop-work authority covers this, and the procedure should say so.
              priority: high
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Every tested device has stored measured values, and every failure in the last six months has a recorded removal and passing retest."
                cadence: rolling
              tasks:
                - "Write the test procedure for each applied part type"
                - "Confirm the safety analyser calibration certificate is current"
                - "Review failed safety tests and confirm each retest @recurring(monthly:24)"
                - "Tag and quarantine any device that fails its test"
            - name: Recall and field safety notice handling in a hospital
              description: |-
                ## Purpose
                When a manufacturer issues a recall or field safety notice, the hospital has to find every affected device, act on it and prove it acted. A routine that checks notices weekly, searches the inventory by model and serial number and records the action closes the gap between a notice being published and devices being made safe on the wards.

                ## Milestones
                1. Sources of notices named, including manufacturers, the national regulator and alert services.
                2. A weekly check of new notices recorded.
                3. Each relevant notice matched to affected assets by model, serial and software version.
                4. Actions completed and recorded against each affected asset.
                5. Clinical areas informed with plain-language instructions when a notice affects them.
              priority: high
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Every notice received in the last six months has a recorded asset search and a completed action for each affected device."
                cadence: rolling
              tasks:
                - "List the regulator and manufacturer sources you receive notices from"
                - "Check new recalls and field safety notices @recurring(weekly:wed)"
                - "Search the inventory for each notice by model and serial number"
                - "Record the action taken against each affected asset"
            - name: Supplier controls for critical components
              description: |-
                ## Purpose
                Sensors, batteries, tubing and contract sterilisation can decide whether a device is safe, and a supplier's quiet change to material or process can undo your verification. Classifying suppliers by risk, keeping quality agreements current and scoring performance each quarter gives early warning before a supplier problem becomes a field problem.

                ## Milestones
                1. Critical components and services identified from the risk file and bill of materials.
                2. Each critical supplier assessed and on the approved supplier list.
                3. Quality agreements in place that require notification of changes.
                4. A quarterly scorecard of quality and delivery for each critical supplier.
                5. Suppliers below threshold placed on an improvement plan.

                ## Notes
                Start from the **Vendor** template for each critical supplier's record. Change notification clauses matter more than almost anything else in the agreement.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every critical supplier has a current quality agreement with a change notification clause and a quarterly scorecard on file."
                cadence: rolling
              tasks:
                - "Mark critical components on the bill of materials using the risk file"
                - "Check each critical supplier has a change notification clause"
                - "Score critical supplier quality and delivery @recurring(quarterly)"
            - name: Test equipment calibration register
              description: |-
                ## Purpose
                Every verification result and safety test is only as trustworthy as the instrument that produced it, and an out-of-calibration analyser can invalidate months of records. Keeping a register of every measuring instrument, its calibration status and what was measured with it lets you assess the impact quickly when one fails calibration.

                ## Milestones
                1. Every measuring and test instrument listed with an identifier and calibration interval.
                2. Calibration certificates on file and traceable to national standards.
                3. Instruments due in the next month listed and booked.
                4. An impact assessment procedure for instruments found out of tolerance.
                5. No instrument used past its calibration date for six months.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A calibration register with no instrument used past its due date for six months, and an out-of-tolerance procedure in place."
                cadence: rolling
              tasks:
                - "List every test and measuring instrument with its identifier"
                - "File the latest calibration certificate for each instrument"
                - "Book calibrations due in the coming month @recurring(monthly:27)"
                - "Write the steps for assessing an out-of-tolerance result"
            - name: Hazard analysis practice on a real device
              description: |-
                ## Purpose
                Reading ISO 14971 is not the same as building a hazard analysis that traces hazards through sequences of events to hazardous situations and harms. Working through one real device, with a senior engineer reviewing, teaches the reasoning that makes risk files useful rather than a spreadsheet of guesses.

                ## Milestones
                1. Characteristics related to safety identified for the device, using the questions in ISO/TR 24971 as a prompt.
                2. Hazards listed and each traced through a sequence of events to a hazardous situation and harm.
                3. Severity and probability estimated using the approved plan's scales.
                4. Risk controls proposed in the order of inherent safety, protective measures, then information for safety.
                5. The analysis reviewed with a senior engineer and the feedback recorded.

                ## Notes
                Information for safety, such as a warning in the instructions, is the weakest form of control. Reach for it last, and check that its effectiveness can actually be shown.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A worked hazard analysis for one device, with sequences of events and controls in priority order, reviewed by a senior engineer."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Pick one device or subsystem and list its safety-related characteristics"
                - "Trace five hazards through to hazardous situations and harms"
                - "Propose risk controls in the ISO 14971 priority order"
                - "Book a review of the analysis with a senior engineer"
            - name: Basic safety and essential performance under IEC 60601-1
              description: |-
                ## Purpose
                IEC 60601-1 and its collateral standards shape electrical design, enclosure, labelling and testing for most active devices, and the idea of essential performance trips up many teams. Learning how the standard is structured, how means of protection are counted and how essential performance is defined lets you design for the test lab rather than react to it.

                ## Milestones
                1. The structure of IEC 60601-1 and the collateral and particular standards relevant to your device mapped.
                2. Means of patient and operator protection explained for your device's isolation barriers.
                3. Applied part types and their classification understood and recorded.
                4. A draft essential performance statement written for one device.
                5. Three clauses that commonly fail at test labs studied with examples.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page map of the IEC 60601 standards for your device, plus a draft essential performance statement reviewed by a senior engineer."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Map the collateral and particular standards that apply to your device"
                - "Sketch the isolation barriers and count the means of protection"
                - "Draft an essential performance statement for one device"
                - "Ask a test lab engineer which clauses most often fail"
            - name: Medical device software lifecycle under IEC 62304
              description: |-
                ## Purpose
                Software in or as a medical device is held to a lifecycle standard that asks for planning, requirements, architecture, unit verification, integration testing and problem resolution in proportion to its safety class. Understanding how IEC 62304 classes software and what each class demands helps you scope the work honestly and avoid documenting after the code is written.

                ## Milestones
                1. The software safety class of one product assigned with its reasoning recorded.
                2. The activities and records required for that class listed.
                3. Software of unknown provenance identified and its risk assessed.
                4. The software development plan compared against the standard and gaps listed.
                5. A problem resolution and configuration management process confirmed in use.

                ## Notes
                Software safety class is decided with the risk file, taking hardware controls into account. Writing class A without that analysis is one of the most common audit findings.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A recorded software safety class with reasoning and a gap list between the current development plan and IEC 62304 for that class."
                cadence: phased
                effort_hours_estimate: "18"
              tasks:
                - "Read the IEC 62304 requirements for each software safety class"
                - "Assign a safety class to one product with the risk file reasoning"
                - "List third-party libraries treated as software of unknown provenance"
                - "Compare the software development plan against the standard"
            - name: Usability engineering file under IEC 62366-1
              description: |-
                ## Purpose
                Use errors cause a large share of device incidents, and regulators expect evidence that the user interface was designed and tested against them. Building a usability engineering file, from use specification through formative evaluations to a summative test of critical tasks, turns user interface design into recorded safety work.

                ## Milestones
                1. A use specification describing users, use environments and the operating principle.
                2. Hazard-related use scenarios identified and critical tasks selected.
                3. At least two formative evaluations run with representative users and findings acted on.
                4. A summative evaluation protocol drafted for the critical tasks.
                5. The usability file linked to the risk management file.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A usability engineering file with a use specification, critical task list, two formative evaluation reports and a summative protocol."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Write the use specification for one device"
                - "List hazard-related use scenarios from the risk analysis"
                - "Run a formative evaluation with three representative users"
                - "Draft the summative evaluation protocol for critical tasks"
            - name: Biocompatibility evaluation planning under ISO 10993-1
              description: |-
                ## Purpose
                Patient-contacting materials need a biological evaluation that starts from the nature and duration of contact, not from a default list of animal tests. Learning to write a biological evaluation plan based on existing material data and chemical characterisation can save months of testing and gives the toxicologist what they need.

                ## Milestones
                1. Each patient-contacting component categorised by contact type and duration.
                2. Biological endpoints to address listed from the ISO 10993-1 framework.
                3. Existing material, supplier and history-of-use data gathered.
                4. A draft biological evaluation plan reviewed by a toxicologist or specialist consultant.
                5. Any tests still needed scoped with an accredited laboratory.

                ## Notes
                Processing, colourants and sterilisation can change a material's biological response. Evaluate the finished device, not just the raw material.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A biological evaluation plan for one device, categorising every contacting component and reviewed by a toxicology specialist."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Categorise each patient-contacting component by contact and duration"
                - "Collect material data and certificates from suppliers"
                - "Draft the biological evaluation plan using the ISO 10993-1 framework"
                - "Book a review of the plan with a toxicologist"
            - name: Statistical sample sizes for verification testing
              description: |-
                ## Purpose
                Testing three units because that is how many were on the bench does not convince an auditor or a notified body. Learning how confidence and reliability levels, attribute and variables sampling and risk-based acceptance link together lets you justify every sample size in a protocol and size the build plan correctly.

                ## Milestones
                1. Confidence and reliability levels for each risk category agreed with quality and recorded in a procedure.
                2. Attribute and variables sampling methods practised on two real requirements.
                3. Normality checks and tolerance interval calculations worked through.
                4. Sample size justifications written for the next verification protocol.
                5. The approach reviewed by a statistician or senior quality engineer.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written sample size justifications for one verification protocol, tied to an agreed confidence and reliability table, reviewed by a statistician."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Find the company procedure that sets confidence and reliability levels"
                - "Work one attribute sample size calculation for a pass or fail test"
                - "Calculate a tolerance interval for one variables requirement"
                - "Ask a statistician to review your justifications"
            - name: Test method validation for device verification
              description: |-
                ## Purpose
                A verification result means little if the test method itself cannot tell a good unit from a bad one. Validating custom test methods, including fixtures, software and operator steps, with repeatability and reproducibility studies makes verification data hold up when someone questions it.

                ## Milestones
                1. Custom test methods used in verification listed, separate from standard compendial methods.
                2. A validation protocol written for the highest-risk custom method.
                3. A gauge repeatability and reproducibility or equivalent study completed.
                4. Fixtures and test software placed under configuration control.
                5. A validation report approved before the method is used for formal verification.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An approved validation report for at least one custom test method, including a repeatability and reproducibility study."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "List every custom test method used in verification"
                - "Write a validation protocol for the highest-risk method"
                - "Run a repeatability and reproducibility study with two operators"
                - "Put test fixtures and scripts under configuration control"
            - name: Predicate and equivalent device research
              description: |-
                ## Purpose
                Public summaries, decision databases and safety communications for similar devices show what regulators accepted, what testing was done and what went wrong in the field. Studying three of them before writing your own test plan saves you from discovering an expected test late, and shows you where competitors had trouble.

                ## Milestones
                1. Three similar devices identified in the public regulatory databases of your target markets.
                2. Their indications, technology and performance testing summarised side by side.
                3. Adverse event and recall records for each device reviewed.
                4. Lessons for your device's testing and risk file listed.
                5. The summary shared with the regulatory lead.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A side-by-side summary of three similar devices covering indications, testing and field problems, shared with regulatory affairs."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Search the regulator database for three devices with similar indications"
                - "Summarise each device's testing in a comparison table"
                - "Review adverse event and recall records for each device"
                - "Ask the agent to summarise the lessons for your test plan"
            - name: Design verification protocols and reports
              description: |-
                ## Purpose
                Verification proves that design outputs meet design inputs, and it is the bulk of the evidence in any submission. Writing protocols before testing, with acceptance criteria copied from the requirements and sample sizes justified, then reporting every deviation honestly, gives a set of records that stand up without explanation.

                ## Milestones
                1. A verification plan mapping every requirement to a protocol.
                2. Protocols approved before testing begins, each with acceptance criteria and sample size justification.
                3. Tests run on units built to the released design or with differences justified.
                4. Reports approved with every deviation and failure investigated.
                5. The traceability matrix showing every requirement verified.

                ## Notes
                A failed test is not a problem for the file; an unexplained one is. Record the failure, the investigation and the retest rather than quietly repeating until it passes.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Approved verification reports covering every design input, with deviations investigated and the traceability matrix complete."
                cadence: phased
                effort_hours_estimate: "120"
              tasks:
                - "Map every design input to a verification protocol"
                - "Write and approve the first protocol before testing"
                - "Record the build configuration of every unit tested"
                - "Investigate and document each deviation or failed result"
            - name: Design validation with intended users
              description: |-
                ## Purpose
                Validation answers a different question from verification: whether the device meets user needs in real or simulated use conditions, on production-equivalent units. Planning it with clinicians, representative patients or simulated environments, and keeping it separate from bench testing, gives the evidence regulators look for when they ask whether the device works for the people it is for.

                ## Milestones
                1. A validation plan tracing each user need to a validation activity.
                2. Production-equivalent units built and their configuration recorded.
                3. Validation sessions completed in real or simulated use environments.
                4. Results reported against each user need with any gaps resolved.
                5. Validation report approved before design transfer.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An approved validation report showing each user need met on production-equivalent units in representative use conditions."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Trace each user need to a validation activity"
                - "Confirm the units are production-equivalent and record why"
                - "Arrange a simulated use environment with clinical input"
                - "Report results against every user need"
            - name: Sterilisation method selection
              description: |-
                ## Purpose
                Choosing between ethylene oxide, radiation, steam or newer methods affects materials, packaging, cost, lead time and the validation standard you must meet. Comparing them against your materials and supply chain early prevents a late discovery that a polymer yellows under gamma or a battery cannot see steam.

                ## Milestones
                1. Material compatibility checked for each candidate method.
                2. Validation standards identified for each method, such as ISO 11135 for ethylene oxide and ISO 11137 for radiation.
                3. Contract sterilisers contacted for capacity, cost and lead time.
                4. A decision recorded with reasons and approved at design review.
                5. Packaging requirements for the chosen method passed to the packaging project.

                ## Notes
                Start from the **Purchase decision** template to compare contract sterilisers. Ethylene oxide capacity and environmental limits vary by region; check them before committing.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded sterilisation method decision with material compatibility evidence and a chosen contract steriliser, approved at design review."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "List every material in the sterile barrier and device"
                - "Check material compatibility for each candidate method"
                - "Request capacity, price and lead time from two contract sterilisers"
                - "Record the method decision at the next design review"
            - name: Packaging and shelf life validation plan
              description: |-
                ## Purpose
                Sterile devices stay sterile only until their packaging fails, and shelf life claims need evidence from both accelerated and real-time ageing. Planning packaging validation to ISO 11607, with accelerated ageing to ASTM F1980 and transit testing, sets the expiry date you can actually claim and the timeline needed to prove it.

                ## Milestones
                1. Sterile barrier system and protective packaging defined.
                2. Package integrity and seal strength tests chosen.
                3. Accelerated ageing conditions calculated and real-time ageing started in parallel.
                4. Distribution simulation testing scheduled with a laboratory.
                5. The target shelf life and the date evidence will support it recorded.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An approved packaging validation plan with ageing conditions, integrity tests and a dated shelf life claim schedule."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Define the sterile barrier system and protective packaging"
                - "Calculate accelerated ageing time for the target shelf life"
                - "Start real-time ageing samples alongside the accelerated set"
                - "Book distribution simulation testing with a laboratory"
            - name: EMC test readiness under IEC 60601-1-2
              description: |-
                ## Purpose
                Electromagnetic compatibility failures are among the most common and most expensive surprises at a test lab, because fixing them often means a board respin. A pre-compliance campaign, a clear statement of intended environments and an immunity pass criterion tied to essential performance give a good chance of passing first time.

                ## Milestones
                1. Intended use environments and immunity test levels identified.
                2. Pass and fail criteria defined in terms of essential performance.
                3. Pre-compliance emissions and immunity scans run on a representative unit.
                4. Design fixes made and rechecked for every pre-compliance failure.
                5. A test plan agreed with the accredited laboratory.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Pre-compliance results with every failure fixed and rechecked, and an EMC test plan agreed with an accredited laboratory."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Identify the intended environments and their immunity levels"
                - "Write pass criteria in terms of essential performance"
                - "Book a pre-compliance session at a local EMC facility"
                - "Agree the formal test plan with the accredited laboratory"
            - name: Cybersecurity risk assessment for a connected device
              description: |-
                ## Purpose
                Any device with a network port, wireless link or USB socket now needs evidence of security risk management, a software bill of materials and a plan for patching after release. Building that evidence alongside the safety risk file, following IEC 81001-5-1 and your regulators' guidance, avoids a late submission deficiency.

                ## Milestones
                1. A threat model covering interfaces, data flows and trust boundaries.
                2. A software bill of materials listing every component and version.
                3. Security risks assessed and linked to safety risks where a breach could cause harm.
                4. Security controls verified, including penetration testing where the risk calls for it.
                5. A post-market vulnerability monitoring and patching plan approved.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A threat model, software bill of materials, security risk assessment and approved vulnerability management plan for one connected device."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Draw the device's interfaces, data flows and trust boundaries"
                - "Generate a software bill of materials from the build system"
                - "Link each security risk that could cause harm to the safety risk file"
                - "Check SBOM components against new vulnerability advisories @recurring(monthly:14)"
            - name: Hospital equipment replacement and capital priorities
              description: |-
                ## Purpose
                Capital budgets rarely cover everything that is old, so replacement has to be argued on evidence: age, support status, failure history, safety notices and clinical need. A scored replacement list, refreshed each year, turns clinical engineering from a cost centre into the people who tell the board where the money should go.

                ## Milestones
                1. A scoring method agreed covering age, support status, maintenance cost, safety and clinical impact.
                2. Every high-risk asset scored from inventory and work order data.
                3. A ranked replacement list with estimated costs for the next three years.
                4. Clinical leads consulted on the top ten items.
                5. The list presented to the capital committee and the outcome recorded.

                ## Notes
                Start from the **Purchase decision** template for each major item that is approved. Include installation, training, consumables and service contracts in the cost, not just the purchase price.
              priority: medium
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A scored three-year replacement list for high-risk equipment, presented to the capital committee with the decision recorded."
                cadence: cyclic
              tasks:
                - "Agree the replacement scoring method with the department head"
                - "Score high-risk assets using work order and inventory data"
                - "Ask clinical leads to review the top ten items"
                - "Refresh the replacement list for the capital round @recurring(yearly)"
            - name: Contract manufacturer selection
              description: |-
                ## Purpose
                Many device companies never build their own product, and choosing a contract manufacturer commits you to their quality system, capacity and engineering support for years. Comparing candidates on ISO 13485 certification, experience with similar devices, audit results and transfer support produces a choice you can defend to investors and auditors.

                ## Milestones
                1. Requirements listed for quality system, capacity, processes and location.
                2. Three candidate manufacturers shortlisted and sent a request for information.
                3. A quality audit completed at the preferred candidate.
                4. A scored comparison and decision recorded.
                5. A quality agreement and supply agreement drafted for legal review.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A scored comparison of three contract manufacturers, an audit report for the chosen one and a draft quality agreement sent for legal review."
                cadence: one-shot
                effort_hours_estimate: "35"
              tasks:
                - "List requirements for quality system, processes and capacity"
                - "Send a request for information to three contract manufacturers"
                - "Audit the preferred manufacturer's quality system on site"
                - "Send the draft quality agreement for legal review"
            - name: Design transfer to manufacturing
              description: |-
                ## Purpose
                Design transfer is where many devices fail quietly: the drawings are released but the process cannot hold the tolerances, the fixtures are not validated and the inspection plan misses the critical features. A structured transfer, with process validation and a pilot build, makes sure the device made on the line is the device you verified.

                ## Milestones
                1. The device master record complete, with drawings, specifications, bill of materials and labelling released.
                2. Critical-to-quality features identified and carried into inspection plans.
                3. Manufacturing processes validated where output cannot be fully verified, with installation, operational and performance qualification.
                4. A pilot build completed and its yield and defects reviewed.
                5. A design transfer review signed off by engineering, manufacturing and quality.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A signed design transfer review with a complete device master record, validated special processes and a reviewed pilot build."
                cadence: phased
                effort_hours_estimate: "80"
              tasks:
                - "Check the device master record for missing released documents"
                - "Mark critical-to-quality features on the released drawings"
                - "Plan process validation for each special process"
                - "Schedule the pilot build with manufacturing"
            - name: Regulatory submission package assembly
              description: |-
                ## Purpose
                A submission, whether a 510(k), a De Novo request or EU MDR technical documentation, is judged on how easily a reviewer can find the evidence for each claim. Assembling it from the design history file and risk file against the regulator's format, with an internal mock review, reduces deficiency letters and the months they cost.

                ## Milestones
                1. The required submission format and contents confirmed from current regulator guidance.
                2. Each section drafted with references to the approved source records.
                3. Labelling and instructions for use reviewed against the risk file and standards.
                4. An internal mock review completed by someone who did not write the package.
                5. The submission sent and the reference number recorded.

                ## Notes
                Check the regulator's current format, fees and electronic submission rules before you start drafting; they change. Where the classification or route is uncertain, a pre-submission meeting is usually cheaper than a refusal.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A submission sent to the regulator or notified body after an internal mock review, with the reference number recorded."
                cadence: phased
                effort_hours_estimate: "150"
              tasks:
                - "Check the current submission format and fees on the regulator's website"
                - "Draft the device description and intended use sections"
                - "Arrange an internal mock review by a reviewer outside the project"
                - "Record the submission reference number and response deadlines"
            - name: Regulator or notified body audit preparation
              description: |-
                ## Purpose
                An audit of a device manufacturer usually follows the design controls, CAPA, complaint and supplier trails, and an engineer will be asked to walk an auditor through a design history file. Preparing the files, rehearsing the walkthrough and closing obvious gaps beforehand turns a stressful week into a routine one.

                ## Milestones
                1. The audit scope, dates and likely product focus confirmed.
                2. The design history file and risk file for the focus product checked for gaps.
                3. Open CAPAs and overdue actions reviewed with owners.
                4. A mock walkthrough of the design file held with a colleague playing auditor.
                5. A back room and document runner arrangement agreed for the audit days.

                ## Notes
                Answer the question asked, show the record, and say you will find out when you do not know. Never create or backdate a record during an audit.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The audit completed with a rehearsed design file walkthrough and every finding logged with an owner within a week of the closing meeting."
                cadence: one-shot
                effort_hours_estimate: "25"
              tasks:
                - "Confirm the audit scope and focus product with the quality lead"
                - "Check the focus product's design history file for gaps"
                - "Hold a mock walkthrough with a colleague acting as auditor"
                - "Log every audit finding with an owner after the closing meeting"
            - name: Third-party safety test lab campaign
              description: |-
                ## Purpose
                Booking an accredited lab for IEC 60601 safety and EMC testing involves long lead times, sample preparation, documentation the lab needs in advance and the risk of failures that need a fast redesign. Treating the campaign as a planned event, with a sample plan and a fix-and-retest budget, keeps the launch date intact.

                ## Milestones
                1. An accredited laboratory booked with the test plan and dates agreed.
                2. Test samples, accessories and support equipment prepared and labelled.
                3. The risk management file and documents the lab needs sent in advance.
                4. Engineering cover arranged for each test day.
                5. Every non-conformity investigated and retested, and the final reports received.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Final test reports received from an accredited laboratory, with every non-conformity investigated and closed by retest."
                cadence: one-shot
                effort_hours_estimate: "45"
              tasks:
                - "Request quotes and lead times from two accredited test laboratories"
                - "Prepare the sample list with serial numbers and accessories"
                - "Send the risk file and documentation the lab asked for"
                - "Plan engineering cover for each scheduled test day"
            - name: New equipment acceptance in a hospital
              description: |-
                ## Purpose
                New devices that go straight from the delivery dock to the ward skip the checks that catch damage, wrong configuration, missing accessories and unsafe electrical connections. A structured acceptance, with inspection, electrical safety testing, configuration checks and user training confirmed before release, starts every asset's record on the right footing.

                ## Milestones
                1. Delivery checked against the purchase order, including accessories and manuals.
                2. Incoming inspection and electrical safety test completed and recorded.
                3. Configuration, alarm defaults and software version checked against the clinical requirement.
                4. The asset tagged and entered in the maintenance management system.
                5. User training confirmed before the device is released to the ward.

                ## Notes
                Start from the **Operational checklist** template for your acceptance steps. Hold back any device that arrives without its service manual or required training rather than releasing it on a promise.
              priority: medium
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "The next equipment delivery accepted with inspection, safety test, configuration check and training records filed before release."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Check the next delivery against the purchase order and accessories list"
                - "Run the incoming electrical safety test and record the values"
                - "Confirm alarm defaults and software version with the clinical lead"
                - "Release the device only after training is recorded"
            - name: Hospital accreditation survey readiness for equipment
              description: |-
                ## Purpose
                Accreditation surveyors ask clinical engineering for evidence: maintenance completion, safety test records, recall actions, training and incident follow-up. Preparing a short evidence pack and walking the wards in advance turns survey week into a demonstration of a programme that already works.

                ## Milestones
                1. The accreditation standards that cover medical equipment listed with the evidence each one needs.
                2. Maintenance completion and safety test records for the last year pulled.
                3. Recall and field notice actions for the last year shown as closed.
                4. A mock ward walk completed, checking tags, cords and overdue labels.
                5. Gaps closed or covered by a dated action plan before the survey.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An equipment evidence pack ready before the survey and a mock ward walk completed with every gap closed or on a dated plan."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "List the accreditation standards that cover medical equipment"
                - "Pull a year of maintenance and safety test completion records"
                - "Walk two wards checking asset tags and overdue labels"
                - "Write a dated action plan for every gap found"
            - name: Moving into medical devices from another engineering field
              description: |-
                ## Purpose
                Mechanical, electrical and software engineers from automotive, aerospace or consumer products bring strong design skills but often underestimate how much documentation, traceability and risk reasoning medical devices demand. A structured first three months, mapping familiar practices onto design controls and finding a mentor in quality or regulatory affairs, shortens the adjustment.

                ## Milestones
                1. Practices from your previous field mapped to their medical device equivalents.
                2. The core standards for your role read at summary level.
                3. A mentor in quality or regulatory affairs agreed with regular meetings.
                4. One design control deliverable completed and approved under supervision.
                5. A short list of habits to unlearn and habits to keep written down.

                ## Notes
                Your old field's speed is still valuable. The aim is to put evidence behind decisions, not to slow every decision down.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A mapping of previous practices to design controls, a named mentor and one approved design control deliverable within three months."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Map five practices from your old field to medical device equivalents"
                - "Ask a quality or regulatory colleague to mentor you"
                - "Take on one design control deliverable under supervision"
                - "Write down the habits to keep and the habits to change"
            - name: First-year clinical engineer on the hospital floor
              description: |-
                ## Purpose
                New clinical engineers move between workshop repairs, ward calls, vendor visits and procurement meetings, often with little structure. A first-year plan covering equipment families, competence sign-offs, relationships with nursing leads and a first improvement project makes the year count and builds trust with clinical staff.

                ## Milestones
                1. Competence sign-offs completed for the main equipment families in your hospital.
                2. Introductions made with the nursing lead of each major clinical area.
                3. Manufacturer service training attended for at least one equipment type.
                4. One improvement project delivered and its result reported.
                5. A first-year review held with your manager and next goals agreed.

                ## Notes
                Start from the **Onboarding 30/60/90** template. Time spent on wards understanding how staff use the equipment pays back in every repair call.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Competence sign-offs for the main equipment families and one improvement project reported, reviewed with your manager at the end of the first year."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "List the equipment families you need competence sign-offs for"
                - "Arrange introductions with the nursing lead of each major area"
                - "Book manufacturer service training for one equipment type"
                - "Pick a first improvement project with your manager"
            - name: Sole engineer at a medical device startup
              description: |-
                ## Purpose
                At an early startup one engineer may own design, testing, suppliers and the start of the quality system, while founders push for a demo and investors ask about the regulatory route. Setting up lean design controls from the first prototype that matters, rather than recreating them before a submission, keeps the company fundable and the evidence real.

                ## Milestones
                1. A point agreed at which design controls formally start, before design verification.
                2. A minimal quality system scoped with a consultant or quality lead, sized to the company.
                3. Prototype learning recorded in engineering notebooks that can feed the design history file.
                4. The regulatory route and its evidence costs explained to founders in one page.
                5. Outside help budgeted for the work one person cannot do safely.

                ## Notes
                Feasibility prototypes do not need full design controls, but the decisions and test results behind them are worth keeping. Write them down with dates as you go.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written point at which design controls begin, a scoped minimal quality system and a one-page regulatory cost summary shared with founders."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Agree with founders when formal design controls will start"
                - "Start a dated engineering notebook for prototype decisions"
                - "Scope a minimal quality system with a quality consultant"
                - "Write a one-page summary of regulatory route and evidence costs"
            - name: Clinical engineering in a small regional hospital
              description: |-
                ## Purpose
                In smaller hospitals across the Caribbean and other regions, one or two engineers may cover every device, with long parts lead times, few local service agents, unstable mains supply, heat and humidity, and donated equipment arriving without manuals. Building a programme around those constraints, rather than copying a large hospital's, keeps critical equipment working.

                ## Milestones
                1. Critical equipment ranked and its spare parts and consumables stocked to cover typical lead times.
                2. Power quality protection, such as voltage regulation and UPS, confirmed on life-support equipment.
                3. A donation acceptance checklist agreed with hospital management.
                4. Remote support or training arrangements set up with key manufacturers or regional partners.
                5. A list of equipment that cannot be supported locally, with a plan for each.

                ## Notes
                Donated equipment without manuals, spare parts or local support can cost more than it saves. Agree with management that donations are assessed before they are accepted, not after they arrive.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A ranked critical equipment list with stocked spares, a donation checklist approved by management and a plan for each unsupported item."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Rank critical equipment and note spare part lead times"
                - "Check voltage protection on every life-support device"
                - "Draft a donation acceptance checklist for management approval"
                - "Review spare part stock against lead times @recurring(monthly:18)"
            - name: Leading a biomedical engineering team
              description: |-
                ## Purpose
                Moving from doing the work to leading a design or clinical engineering team means owning workload, competence, budgets and the relationship with quality, clinical and executive leaders. Setting a small set of measures, a competence matrix and a monthly review keeps the team effective and gives you evidence when you ask for people or money.

                ## Milestones
                1. Four or five team measures agreed, such as maintenance completion, CAPA timeliness or verification progress.
                2. A competence matrix showing who can do what and where cover is thin.
                3. A training plan that closes the most serious competence gaps.
                4. A monthly team review with the measures running for six months.
                5. An annual report to senior leadership with the evidence for next year's requests.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six months of monthly team reviews against agreed measures, a current competence matrix and an annual report delivered to leadership."
                cadence: rolling
              tasks:
                - "Agree four or five team measures with your manager"
                - "Build a competence matrix for the team"
                - "Review team measures and workload with the team @recurring(monthly:6)"
            - name: Clinical investigation engineering support under ISO 14155
              description: |-
                ## Purpose
                When a device needs clinical data, engineers support the investigation with devices built to a controlled configuration, a device accountability log, technical training for sites and fast analysis of device deficiencies. Doing this well protects participants and keeps the study data usable for the submission.

                ## Milestones
                1. The investigational device configuration frozen and documented.
                2. A device accountability log set up for shipment, use, return and disposal.
                3. Site staff trained on device use and the training recorded.
                4. A process agreed with the clinical team for reporting and investigating device deficiencies.
                5. Engineering input to the clinical investigation report completed.

                ## Notes
                Ethics approval, informed consent and safety reporting decisions belong to the sponsor's clinical and regulatory staff and the ethics committees. Engineering supplies technical facts and controlled devices.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A frozen device configuration, a complete accountability log and recorded site training for every investigational site."
                cadence: phased
                effort_hours_estimate: "50"
              tasks:
                - "Document the frozen configuration of the investigational device"
                - "Set up the device accountability log with the clinical team"
                - "Prepare technical training material for site staff"
                - "Agree how device deficiencies reach engineering for investigation"
            - name: Software as a medical device and AI model change control
              description: |-
                ## Purpose
                Software that is itself the medical device, especially one using a machine learning model, changes far faster than hardware, and regulators now expect a plan for which changes can be made without a new submission. Writing a predetermined change control plan or equivalent, with data management, retraining rules and performance monitoring, lets the product improve without losing its clearance.

                ## Milestones
                1. The types of planned model or algorithm changes described.
                2. Data management rules for training, tuning and test sets documented, including independence of test data.
                3. Performance acceptance criteria and subgroup analyses defined for each change type.
                4. A real-world performance monitoring plan with triggers for action.
                5. The change control plan reviewed with regulatory affairs against current regulator guidance.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A documented model change control plan with data rules, acceptance criteria and a monitoring plan, reviewed by regulatory affairs."
                cadence: phased
                effort_hours_estimate: "45"
              tasks:
                - "List the model or algorithm changes the team expects to make"
                - "Document how training and test data are kept independent"
                - "Define acceptance criteria and subgroup checks for each change type"
                - "Review real-world model performance against triggers @recurring(quarterly)"
            - name: Clinical alarm review for patient monitoring
              description: |-
                ## Purpose
                Patient monitors, ventilators and infusion pumps can generate hundreds of alarms per bed per day, and most are not clinically actionable, which leads to alarm fatigue and missed events. Working with nursing and medical leads to analyse alarm data, adjust default settings and record each change gives a safer alarm environment that clinicians trust.

                ## Milestones
                1. Alarm data extracted from monitoring systems for one clinical unit.
                2. The most frequent alarms and their clinical value reviewed with a multidisciplinary group.
                3. Default alarm settings changed only with documented clinical approval.
                4. Alarm volume and response measures compared before and after the changes.
                5. A quarterly alarm review agreed with the unit leadership.

                ## Notes
                Engineering provides the data and the technical options; alarm limits and defaults are clinical decisions. Record who approved each change and why.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Default alarm changes on one unit approved by clinical leads and recorded, with alarm volume compared before and after."
                cadence: phased
                effort_hours_estimate: "35"
              tasks:
                - "Extract a month of alarm data for one clinical unit"
                - "Present the most frequent alarms to the nursing and medical leads"
                - "Record each approved change to default alarm settings"
                - "Review alarm volume and response data with the unit @recurring(quarterly)"
---

# Biomedical Engineering Practice

Biomedical engineering practice covers two working worlds: designing medical devices under design controls, and keeping clinical equipment safe and available in hospitals. The projects start with foundations (the standards shelf, classification, the quality system, the design plan, requirements, the design history file, the risk plan and a hospital inventory), move through the operating routines of design reviews, traceability, change control, CAPA, maintenance and safety testing, then the core skills, verification and validation decisions, dated events such as submissions and audits, situations for career changers, startup and hospital engineers, and finish with specialist work.

The recurring rhythm is mostly monthly and quarterly: design reviews, traceability updates, CAPA and complaint trends, preventive maintenance completion, electrical safety test failures, calibration due lists, supplier scorecards and risk file reviews, with a weekly look at safety notices and change requests and a yearly check of standard editions and the capital plan. The Product spec, Risk register, Vendor, Operational checklist, Purchase decision and Onboarding 30/60/90 templates pair with the projects that point to them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
