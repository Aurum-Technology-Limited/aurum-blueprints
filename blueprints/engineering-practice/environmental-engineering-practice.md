---
id: engineering-practice.environmental-engineering-practice
name: Environmental Engineering Practice
description: "Environmental engineering as it is really practised: permit registers, discharge limits and monitoring rounds, treatment works process control, EIA chapters, contaminated land investigation and remediation closure."
category: business
version: 1.0.0
tags: [engineering-practice, environmental-engineering-practice, engineer, wastewater, water-treatment, eia, environmental-permits, remediation]
author: Aurum Technology
starter_structure:
  templates:
    - vendor
    - risk-register
    - operational-checklist
    - metrics-log
    - meeting-notes
  pillars:
    - name: Engineering Practice
      emoji: "🔧"
      description: "The day-to-day work of practising engineers: each major discipline, process safety and risk studies, FEED, design reviews, commissioning, reliability and maintenance, CAD, simulation and PLC work, project delivery, tenders, reports, ethics and standards, and the Caribbean energy sector from Point Lisas to LNG."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Environmental Engineering Practice
          description: "Working as an environmental engineer: water and wastewater treatment, environmental impact assessments, permits, monitoring programmes and remediation projects."
          projects:
            - name: Environmental permit and consent register
              description: |-
                ## Purpose
                Every regulated site carries a stack of authorisations: discharge permits, water abstraction licences, air and waste approvals, an EIA certificate with conditions, sometimes a planning consent with environmental clauses. Pulling them into one register with issue dates, expiry dates, holders and the conditions that bite means nobody discovers a lapsed permit during an inspection.

                ## Milestones
                1. Every environmental permit, licence and certificate for the site found and filed in one place.
                2. A register listing each one with its reference, holder, issuing body, issue date and expiry date.
                3. Conditions that need a report, a sample or a notification extracted into a separate list.
                4. The register reviewed by the site manager and a named owner agreed for each permit.

                ## Notes
                Check who the legal permit holder is. When a site changes hands or a contractor operates it, the holder on the permit is often out of date, and that matters when something goes wrong.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A permit register covering every environmental authorisation for the site, with expiry dates and a named owner for each, signed off by the site manager."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the site manager and document controller for every environmental permit on file"
                - "List each permit with reference, holder, issue date and expiry date"
                - "Extract every condition that needs a report, sample or notification"
                - "Agree a named owner for each permit with the site manager"
                - "Check the register against the regulator's public permit list @recurring(yearly)"
            - name: Discharge limits and water quality standards reference
              description: |-
                ## Purpose
                Discharge limits come from several places at once: the permit itself, national effluent regulations, receiving water quality standards and sometimes a lender's environmental guidelines. A one-page reference showing each parameter, its limit, its averaging basis and its source stops the common mistake of comparing a single grab sample against a monthly average limit.

                ## Milestones
                1. The permit limits for every outfall tabulated by parameter, unit and averaging basis.
                2. National effluent and receiving water standards that apply added beside them.
                3. Any lender or corporate guideline that is stricter marked clearly.
                4. The controlling limit for each parameter identified and agreed with your lead.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A reference table gives the controlling limit, unit, averaging basis and source for every permitted parameter at each outfall."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Copy every numeric limit from the discharge permit into a table"
                - "Add the national effluent standards for the same parameters"
                - "Note whether each limit is a grab, daily or monthly average value"
                - "Mark the controlling limit per parameter and review it with your lead"
            - name: Choosing an accredited environmental laboratory
              description: |-
                ## Purpose
                Results only stand up with a regulator if the laboratory is accredited for the specific method and matrix, which is narrower than accredited in general. Comparing two or three laboratories on their ISO/IEC 17025 scope, detection limits, holding time logistics and turnaround gives you data you can defend and a backup when the main lab's courier misses a pick-up.

                ## Milestones
                1. Two or three laboratories shortlisted with their accreditation scopes downloaded.
                2. Each lab's methods and reporting limits checked against your permit parameters.
                3. Sample bottle supply, preservation, courier and holding times confirmed for your site.
                4. A main laboratory and a backup chosen and the reasons recorded.

                ## Notes
                Start from the **Vendor** template. Ask for reporting limits well below your permit limits; a limit of detection equal to the discharge limit tells you nothing useful.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A main and a backup laboratory are chosen, each accredited for every permit parameter in the right matrix, with the comparison filed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Download the accreditation scope for three candidate laboratories"
                - "Check each scope against the methods your permit parameters need"
                - "Ask each lab for reporting limits, turnaround and courier options"
                - "Record the chosen main and backup laboratory with the reasons"
                - "Review laboratory turnaround and data errors with the account manager @recurring(yearly)"
            - name: Sampling field kit and chain of custody set-up
              description: |-
                ## Purpose
                Samples fail far more often in the field than in the lab: the wrong bottle, no preservative, a warm cool box, a chain of custody form missing a signature. Setting up a standard kit, labelled bottle sets per sampling point and a chain of custody routine makes every round repeatable by whoever is on shift.

                ## Milestones
                1. A kit list covering bottles, preservatives, cool boxes, ice packs, gloves and a multiparameter meter.
                2. Bottle sets labelled per sampling point and parameter group.
                3. A chain of custody form agreed with the laboratory and printed in the kit.
                4. One full sampling round completed with the kit and the lab confirming no rejected samples.

                ## Notes
                Sampling at tanks, wet wells and manholes is a confined space and drowning risk. Work under the site permit to work, never alone at an open chamber, and use a gas detector where hydrogen sulphide can collect.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A standard sampling kit and chain of custody routine are in use, and the first full round reaches the lab with no samples rejected."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the laboratory for its bottle, preservative and holding time list"
                - "Write the field kit list and pack one complete kit"
                - "Label bottle sets for each sampling point"
                - "Run one round with the kit and ask the lab to confirm sample acceptance"
            - name: Treatment works process walkdown and flow diagram
              description: |-
                ## Purpose
                Drawings of older water and wastewater works rarely match what is in the ground: bypasses get added, a clarifier is out of service, a chemical dosing point has moved. Walking the works from inlet to outfall with the operators and redrawing the process flow diagram gives you the real picture before you change anything or sign a compliance report.

                ## Milestones
                1. The works walked from inlet to final outfall with a senior operator.
                2. Every unit, bypass, recycle stream and dosing point marked on a marked-up process flow diagram.
                3. Differences from the record drawings listed for the document controller.
                4. Flow meters and sampling points located on the diagram with their condition noted.

                ## Notes
                Ask the operators about the bypasses used in storms. They are often the source of permit breaches and almost never on the drawings.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A marked-up process flow diagram matching the works as found, with bypasses, dosing points and sampling points, is passed to document control."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Arrange a walkdown with the senior operator on a dry weather day"
                - "Mark every bypass, recycle and dosing point on a printed flow diagram"
                - "List where the plant differs from the record drawings"
                - "Send the marked-up diagram to the document controller"
            - name: Environmental aspects and impacts register
              description: |-
                ## Purpose
                ISO 14001 and most corporate environmental systems start from a register of what the site does that touches the environment: discharges, emissions, waste, noise, spills, water use. Scoring each aspect for normal, abnormal and emergency conditions shows where controls and monitoring effort belong, and gives auditors the trail they ask for first.

                ## Milestones
                1. Site activities listed and an aspect identified for each, under normal, abnormal and emergency conditions.
                2. Each aspect scored for severity and likelihood with the scoring method written down.
                3. Significant aspects linked to the permit, the control in place and the monitoring that checks it.
                4. The register reviewed with operations and the environmental manager.

                ## Notes
                Start from the **Risk register** template. Include contractors' activities; a contractor's wash-down bay is still your discharge.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An aspects and impacts register scores every site activity, links each significant aspect to a control and a monitoring check, and is reviewed with operations."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List the site's activities, including contractor work areas"
                - "Identify the environmental aspect of each under normal, abnormal and emergency conditions"
                - "Score each aspect and link the significant ones to a control"
                - "Review the register with operations @recurring(yearly)"
            - name: Spill and exceedance notification procedure
              description: |-
                ## Purpose
                Spills, bypasses and limit exceedances usually carry a legal duty to tell the regulator within a set time, and the clock starts when someone on site knows, not when the engineer reads the email. A short procedure naming who decides, who calls, what details to give and what to record keeps notifications on time at three in the morning.

                ## Milestones
                1. Notification duties in each permit and regulation listed with their time limits.
                2. A one-page procedure naming who decides, who notifies and the regulator's contact routes.
                3. A notification record form covering time, volume, cause, actions and samples taken.
                4. Supervisors briefed and the procedure posted in the control room.

                ## Notes
                Confirm the regulator's out-of-hours number yourself. Numbers copied from old procedures are often dead.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A notification procedure with time limits, decision owner and tested regulator contacts is posted in the control room and briefed to every supervisor."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every notification duty and time limit in the site permits"
                - "Call the regulator's reporting line to confirm the out-of-hours route"
                - "Draft the one-page procedure and record form"
                - "Run a desktop notification exercise with the shift supervisors @recurring(yearly)"
            - name: Monitoring programme design for a permitted site
              description: |-
                ## Purpose
                Monitoring programmes often grow by accident: a parameter added after one complaint, a borehole nobody samples, a frequency copied from another site. Designing the programme from the permit, the aspects register and the questions you actually need answered gives a schedule of points, parameters and frequencies that is defensible and affordable.

                ## Milestones
                1. The objective of each monitoring point written in one sentence.
                2. A schedule of points, parameters, methods and frequencies covering every permit requirement.
                3. Points and parameters that answer no question proposed for removal, with the regulator's agreement where needed.
                4. An annual laboratory and field cost for the programme estimated and approved.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An approved monitoring schedule lists every point, parameter, method and frequency with its purpose, covers all permit conditions and has an annual budget."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "List every monitoring requirement in the permits and approvals"
                - "Write the purpose of each existing monitoring point"
                - "Draft the schedule of points, parameters and frequencies"
                - "Price the programme with the laboratory and submit it for approval"
            - name: Monthly discharge compliance report
              description: |-
                ## Purpose
                Most discharge permits ask for a monthly or quarterly return, and it is the document a regulator, a lender or a court will read first. Running the report as a fixed monthly routine, with results checked against the right averaging basis and every exceedance explained, keeps the record honest and the deadline met.

                ## Milestones
                1. A report template with each parameter, limit, result and compliance status.
                2. Results compiled within a set number of days of the laboratory reports arriving.
                3. Every exceedance explained with cause, action and whether it was notified.
                4. Reports submitted on time for three months running.

                ## Notes
                Start from the **Metrics log** template for the running results table. Never smooth or leave out a result because it looks wrong; flag it and investigate.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly discharge reports are submitted by the permit deadline for three consecutive months, with every exceedance explained."
                cadence: rolling
              tasks:
                - "Set up the report template from the discharge limits reference"
                - "Compile last month's results against the permit limits @recurring(monthly:5)"
                - "Write the cause and action for any exceedance before submitting"
                - "Submit the return and file the receipt"
            - name: Permit conditions and deadlines tracker
              description: |-
                ## Purpose
                Permits hide one-off and annual duties among the limits: an improvement programme due in eighteen months, an annual report, a notice before changing a process, a renewal application months before expiry. A tracker reviewed on a fixed day each month turns those conditions into dated actions with owners.

                ## Milestones
                1. Every permit condition with a date or trigger entered in the tracker.
                2. Each entry given an owner, due date and evidence of completion.
                3. Renewal application dates set with enough lead time for the regulator's process.
                4. No condition overdue at the end of a quarter.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All dated permit conditions sit in a tracker with owners, and a quarter passes with none overdue."
                cadence: rolling
              tasks:
                - "Copy every dated condition from the permit register into the tracker"
                - "Assign an owner and due date to each condition"
                - "Review the tracker and chase anything due in the next 60 days @recurring(monthly:2)"
                - "Report overdue conditions to the site manager"
            - name: Field instrument calibration log
              description: |-
                ## Purpose
                Field pH, dissolved oxygen, conductivity and turbidity readings are only as good as the last calibration, and an inspector will ask to see it. A weekly calibration routine with standards in date and a log of every check means field data can be used in a compliance report instead of being quietly ignored.

                ## Milestones
                1. Every field meter and online analyser listed with serial number and calibration method.
                2. Calibration standards bought, labelled and checked for expiry.
                3. A log recording each calibration, the result and any adjustment.
                4. A meter that fails calibration taken out of use until repaired.

                ## Notes
                Start from the **Metrics log** template. Keep a second pH meter; the day the main one fails is usually a sampling day.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every field meter has a dated calibration entry in the log for each week it was used, with no expired standards in the kit."
                cadence: rolling
              tasks:
                - "List every field meter and analyser with its serial number"
                - "Check expiry dates on all calibration standards"
                - "Calibrate field meters and record the results @recurring(weekly:mon)"
                - "Tag and remove any meter that fails calibration"
            - name: Treatment works daily process checks
              description: |-
                ## Purpose
                Treatment works drift slowly and then fail quickly: rising sludge blanket, falling dissolved oxygen, a dosing pump that stopped overnight. A short daily checklist of the readings that predict trouble, reviewed for trends once a week, lets you act days before the final effluent shows it.

                ## Milestones
                1. Eight to twelve daily readings chosen that predict effluent quality at this works.
                2. A checklist with normal ranges and the action when a reading is outside them.
                3. Operators completing the checklist every shift.
                4. A weekly trend review held and its actions recorded.

                ## Notes
                Start from the **Operational checklist** template. Typical readings include inlet flow, aeration basin dissolved oxygen, sludge blanket depth, settled sludge volume, chlorine residual and chemical tank levels.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A daily process checklist with normal ranges is completed every shift, and a weekly trend review has run for four weeks with actions recorded."
                cadence: rolling
              tasks:
                - "Choose the readings that best predict final effluent quality"
                - "Write normal ranges and response actions beside each reading"
                - "Check the daily process readings against their normal ranges @recurring(daily)"
                - "Review a week of readings for trends with the lead operator @recurring(weekly:wed)"
            - name: Laboratory data validation and quality control review
              description: |-
                ## Purpose
                Laboratory certificates arrive looking final, but blanks with detections, duplicates that disagree, missed holding times and raised reporting limits are common. Validating each batch against simple QA/QC checks before results go into a report keeps bad data out of the compliance record and gives you grounds to ask for reanalysis.

                ## Milestones
                1. A validation checklist covering holding times, blanks, duplicates, spikes and reporting limits.
                2. Field blanks and duplicates built into the sampling schedule.
                3. Each batch validated and flagged results qualified in the database.
                4. Recurring laboratory problems raised with the lab in writing.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every laboratory batch for a quarter is validated against the checklist, with qualified results flagged and lab issues raised in writing."
                cadence: rolling
              tasks:
                - "Write a one-page data validation checklist"
                - "Add a field blank and a duplicate to each sampling round"
                - "Validate last month's laboratory batches against the checklist @recurring(monthly:12)"
                - "Email the laboratory about any recurring QA/QC failure"
            - name: Groundwater monitoring well sampling rounds
              description: |-
                ## Purpose
                Groundwater data is slow to change, so a trend only appears if rounds are done the same way every time: water levels first, the same purging method, the same field parameters and the same order of wells. Running quarterly rounds to a written method turns a scatter of numbers into evidence of whether a plume is stable, shrinking or spreading.

                ## Milestones
                1. Every monitoring well located, its condition checked and its construction details on file.
                2. A written sampling method covering water levels, purging, field parameters and sample order.
                3. Quarterly rounds completed and water level contours drawn from each one.
                4. Damaged or dry wells reported with a repair or replacement proposal.

                ## Notes
                Sample from the cleanest well to the most contaminated to avoid carrying contamination between wells on the equipment.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive quarterly rounds follow the written method, each with water level contours and validated results."
                cadence: rolling
              tasks:
                - "Find the construction logs for every monitoring well"
                - "Write the sampling method including purge criteria"
                - "Carry out the groundwater sampling round @recurring(quarterly)"
                - "Draw water level contours from the round's measurements"
            - name: Stormwater pollution prevention inspections
              description: |-
                ## Purpose
                Rain carries oil, sediment and chemicals from yards, loading bays and drains straight to the nearest watercourse, and in the Caribbean the first heavy showers of the wet season wash months of build-up off at once. A drainage map, a monthly inspection and an interceptor maintenance routine catch most problems before they leave the fence line.

                ## Milestones
                1. A site drainage map showing catchments, interceptors, sumps and outfalls.
                2. An inspection route and checklist covering bunds, drains, interceptors and storage areas.
                3. Monthly inspections done and defects logged with an owner.
                4. Interceptors emptied and the waste recorded before the wet season.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly stormwater inspections are logged for six months with defects closed, and all interceptors are cleaned before the wet season."
                cadence: rolling
              tasks:
                - "Mark catchments, interceptors and outfalls on a site drainage map"
                - "Walk the stormwater inspection route and log defects @recurring(monthly:20)"
                - "Book interceptor cleaning ahead of the wet season @recurring(yearly)"
                - "Close out bund and drain defects with their owners"
            - name: Sludge and biosolids disposal records
              description: |-
                ## Purpose
                Sludge is usually the largest waste stream from a treatment works and the most expensive to move, and where it goes is controlled as tightly as the effluent. Keeping monthly records of volumes, dry solids, quality results and each load's destination supports the permit, the budget and any later question about a field or landfill.

                ## Milestones
                1. Every sludge stream and its current disposal route recorded.
                2. Monthly tonnage and dry solids reported for each stream.
                3. Sludge quality samples taken at the frequency the disposal route requires.
                4. Load tickets reconciled with contractor invoices each month.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly sludge records give tonnage, dry solids, quality results and destination for every load, reconciled with contractor invoices."
                cadence: rolling
              tasks:
                - "List each sludge stream with its disposal route and contractor"
                - "Confirm the sampling frequency the disposal route requires"
                - "Reconcile sludge load tickets with tonnage and invoices @recurring(monthly:25)"
                - "Report monthly dry solids tonnage to the works manager"
            - name: Hazardous waste tracking and consignment records
              description: |-
                ## Purpose
                Hazardous waste duty of care follows the waste to its final destination, so a contractor who dumps it can still make the producer liable. Tracking each consignment from the store to a licensed facility, and checking the contractor's licences every year, is the paperwork that protects the site.

                ## Milestones
                1. Every hazardous waste stream listed with classification, store location and contractor.
                2. Each contractor's carrier and facility licences on file and in date.
                3. Every consignment note matched to a certificate of disposal or treatment.
                4. Store inspections showing labelled, bunded and segregated containers.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every hazardous waste consignment for six months has a matched disposal certificate, and all contractor licences on file are current."
                cadence: rolling
              tasks:
                - "List hazardous waste streams with their classification and contractor"
                - "Match consignment notes to disposal certificates @recurring(monthly:15)"
                - "Check each waste contractor's licences are in date @recurring(yearly)"
                - "Inspect the waste store for labels, bunding and segregation"
            - name: Environmental monitoring database
              description: |-
                ## Purpose
                Spreadsheets of monitoring data split, get copied and lose their units, and after five years nobody can say which version fed the annual report. Moving results into a single database or a controlled master workbook, with fixed location codes, units and qualifiers, makes trends, regulator returns and EIA baselines quick to produce.

                ## Milestones
                1. Location codes, parameter names and units standardised in a reference list.
                2. Historical results loaded with their source certificates referenced.
                3. Validation qualifiers stored with each result.
                4. New laboratory data loaded within a week of arrival.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One controlled data store holds all historical and new monitoring results with standard codes, units and qualifiers, updated within a week of each lab report."
                cadence: rolling
              tasks:
                - "Write the reference list of location codes, parameters and units"
                - "Load the last three years of results with their certificate numbers"
                - "Upload the week's new laboratory results @recurring(weekly:fri)"
                - "Restrict editing of the master data to named people"
            - name: Activated sludge process control fundamentals
              description: |-
                ## Purpose
                Activated sludge is the workhorse of municipal and much industrial wastewater treatment, and most of its failures trace back to a few controllable numbers. Learning sludge age, food to microorganism ratio, sludge volume index and dissolved oxygen control, and calculating them for a real plant, lets you talk to operators in their terms and spot bulking before it costs a permit breach.

                ## Milestones
                1. A standard text on activated sludge process control worked through.
                2. Sludge age, F/M ratio and SVI calculated from a month of real plant data.
                3. A settled sludge test watched or carried out with an operator.
                4. A one-page control summary written for your plant with target ranges agreed with the process lead.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Sludge age, F/M and SVI are calculated for a real plant from a month of data and a one-page control summary is reviewed by the process lead."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Choose a standard text on activated sludge operation"
                - "Collect a month of MLSS, wasting and flow data from the plant"
                - "Calculate sludge age, F/M ratio and SVI"
                - "Watch a settled sludge test with the lead operator"
            - name: Jar testing for coagulation and flocculation
              description: |-
                ## Purpose
                Coagulant dose drives turbidity removal, sludge production and chemical cost at a water treatment works, and the right dose changes with raw water quality, especially after heavy rain. Learning to run jar tests properly gives you the evidence to set doses, compare coagulants and respond when the river turns brown overnight.

                ## Milestones
                1. The jar test procedure learnt with the works chemist or a senior operator.
                2. A dose range run on current raw water with settled turbidity recorded.
                3. A second series run on high-turbidity raw water after rain.
                4. Results compared with the current plant dose and a recommendation written.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two jar test series, one on high-turbidity water, are recorded with a written dose recommendation compared against the current plant dose."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask the works chemist to walk you through a jar test"
                - "Run a dose range on today's raw water"
                - "Repeat the series on raw water after heavy rain"
                - "Write a dose recommendation against the current plant setting"
            - name: Reverse osmosis and desalination fundamentals
              description: |-
                ## Purpose
                Desalination supplies a large share of drinking water on many Caribbean islands and in hotels and industry, and reverse osmosis plants fail mainly through fouling, scaling and poor pretreatment. Learning recovery, flux, normalised permeate flow and silt density index, and reading a real plant's data, makes you useful the first time a membrane train loses output.

                ## Milestones
                1. The basics of osmotic pressure, recovery, flux and salt rejection understood and written up.
                2. A real plant's data normalised for temperature and pressure over three months.
                3. Pretreatment steps and silt density index records reviewed with the operator.
                4. Brine disposal arrangement and its permit conditions understood.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three months of a real RO plant's data are normalised and a short note explains its pretreatment, fouling trend and brine permit conditions."
                cadence: phased
                effort_hours_estimate: "18"
              tasks:
                - "Work through a membrane supplier's RO design manual"
                - "Get three months of operating data from an RO plant"
                - "Normalise permeate flow and salt passage for temperature and pressure"
                - "Review the brine discharge conditions in the plant's permit"
            - name: Sewer and drainage hydraulic modelling
              description: |-
                ## Purpose
                Sewer overflows, flooding complaints and new development connections are all questions about hydraulic capacity, answered with network models such as SWMM for drainage and EPANET for water distribution. Building a small model of a real catchment, calibrated to flow survey data, teaches what the inputs really drive and where a model's answer should not be trusted.

                ## Milestones
                1. A free network modelling tool installed and its tutorial completed.
                2. A small real catchment modelled from as-built drawings and survey levels.
                3. The model compared against flow monitor data from at least one storm.
                4. A short note on calibration fit and the model's known weaknesses.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A model of a real catchment is compared against measured storm flows and a note records its calibration fit and limits."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Install a free sewer or water network modelling tool"
                - "Complete the tool's tutorial model"
                - "Build a model of a small real catchment from as-built drawings"
                - "Compare the model output with one storm's flow monitor data"
            - name: Groundwater flow and contaminant transport basics
              description: |-
                ## Purpose
                Plumes move with groundwater, retard on soil and degrade at rates that decide whether a site needs active remediation or can be monitored. Learning Darcy's law, hydraulic gradient, retardation and natural attenuation, and applying them to a real site, lets you check a consultant's travel time estimate instead of taking it on trust.

                ## Milestones
                1. Hydraulic conductivity, gradient and porosity explained in your own notes.
                2. Groundwater velocity calculated for a real site from its well data.
                3. A plume travel time to the nearest receptor estimated with and without retardation.
                4. The estimate compared with the site's monitoring trend.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A travel time to the nearest receptor is calculated for a real site, with and without retardation, and compared with its monitoring data."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Work through a hydrogeology text chapter on Darcy flow"
                - "Collect water levels and permeability data for a real site"
                - "Calculate groundwater velocity and plume travel time"
                - "Compare the estimate with the site's concentration trend"
            - name: Statistics for environmental monitoring data
              description: |-
                ## Purpose
                Non-detects, seasonal swings and a handful of results a year make environmental data awkward to analyse, and averaging values below the reporting limit as zero gives answers a reviewer will reject. Learning trend tests such as Mann-Kendall, proper handling of non-detects and upper confidence limits lets you say with evidence whether a concentration is falling.

                ## Milestones
                1. Methods for handling non-detects and censored data understood.
                2. A Mann-Kendall trend test run on a real monitoring dataset.
                3. An upper confidence limit of the mean calculated for a site dataset.
                4. Results checked by a colleague and the method written into your reporting template.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A trend test and an upper confidence limit are calculated on real site data, checked by a colleague and the method adopted in reporting."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Choose a free statistics tool for environmental data"
                - "Read its guidance on non-detects and censored data"
                - "Run a Mann-Kendall test on one well's history"
                - "Ask a colleague to check the method and results"
            - name: EIA screening and scoping report
              description: |-
                ## Purpose
                Scoping decides what an environmental impact assessment will study, and an EIA that misses a key issue at scoping gets sent back after months of fieldwork. Preparing the project description, the likely significant effects and the proposed baseline studies, and agreeing them with the regulator, sets the terms of reference everyone works to.

                ## Milestones
                1. A project description covering construction, operation and decommissioning.
                2. Likely significant effects identified for each environmental topic.
                3. Proposed baseline studies and study areas set out for each topic.
                4. Terms of reference agreed in writing with the regulator.

                ## Notes
                Check early whether the regulator issues its own terms of reference or reviews yours. Either way, keep every scoping comment and how it was addressed.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A scoping report is submitted and the regulator's written terms of reference, with each comment addressed, are on file."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Get the developer's project description and site layout"
                - "List the likely significant effects for each environmental topic"
                - "Propose the baseline studies and study area for each topic"
                - "Submit the scoping report and log the regulator's comments"
            - name: EIA baseline survey programme
              description: |-
                ## Purpose
                Baseline surveys describe the environment before the project and take the longest to deliver, because water quality, ecology and noise often need wet and dry season data. Planning surveys against the agreed terms of reference, with specialists booked and access arranged, keeps the EIA on programme.

                ## Milestones
                1. A survey schedule for every baseline topic in the terms of reference, covering both seasons where needed.
                2. Specialists for ecology, noise, air, water and social baseline appointed.
                3. Landowner access and any sampling permits in place.
                4. Baseline data received, checked and summarised per topic.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Baseline data for every topic in the terms of reference is collected over the required seasons, checked and summarised."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Map each terms of reference topic to a survey and season"
                - "Appoint specialists for ecology, noise and water baseline"
                - "Arrange landowner access for every survey location"
                - "Check each baseline dataset as it arrives"
            - name: Impact significance assessment and mitigation
              description: |-
                ## Purpose
                Impact assessment chapters are judged on whether the reasoning is visible: the sensitivity of the receptor, the magnitude of the change, the significance and the mitigation that brings it down. A consistent significance matrix, applied the same way across every topic, makes the EIA defensible at review and at any public hearing.

                ## Milestones
                1. A significance method agreed for all topic specialists.
                2. Impacts assessed for construction and operation for each topic.
                3. Mitigation measures specified with who delivers them and when.
                4. Residual impacts stated after mitigation and cross-checked across chapters.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every EIA topic chapter uses the same significance method and states mitigation and residual significance for construction and operation."
                cadence: phased
                effort_hours_estimate: "50"
              tasks:
                - "Write the significance matrix and share it with specialists"
                - "Review each draft chapter for consistent use of the matrix"
                - "List every mitigation measure with its owner and timing"
                - "Check residual impacts agree between related chapters"
            - name: Environmental management plan and commitments register
              description: |-
                ## Purpose
                Approval of an EIA turns its mitigation measures and the certificate conditions into legal commitments, and they are easy to lose once the design team hands over to construction. An environmental management plan with a commitments register, owners and monitoring keeps the promises made in the EIA alive on site.

                ## Milestones
                1. Every mitigation measure and approval condition copied into a commitments register.
                2. An environmental management plan setting out roles, controls, monitoring and reporting.
                3. Commitments passed into contractor contracts where they do the work.
                4. A monthly commitments review running from the start of construction.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A commitments register covers every EIA mitigation and approval condition with an owner, and monthly reviews run from construction start."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Copy every mitigation measure and condition into a register"
                - "Draft the environmental management plan roles and reporting"
                - "Check contractor contracts include the commitments they deliver"
                - "Review commitment status with the construction team @recurring(monthly:22)"
            - name: Phase I environmental site assessment
              description: |-
                ## Purpose
                Before land is bought, sold or redeveloped, a desk study and site walkover show whether contamination is likely and where to look. A Phase I that covers historical maps, past uses, records, interviews and a walkover lets a client decide whether intrusive investigation is needed before money changes hands.

                ## Milestones
                1. Historical maps, aerial photographs and past land uses reviewed.
                2. Regulator, permit and incident records searched for the site and neighbours.
                3. A site walkover done with storage areas, drains and stained ground photographed.
                4. A report with potential contaminant linkages and a recommendation on next steps.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A Phase I report with historical review, records search, walkover photographs and potential contaminant linkages is issued to the client."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Order historical maps and aerial photographs for the site"
                - "Request regulator records for the site and its neighbours"
                - "Walk the site and photograph tanks, drains and stained ground"
                - "Draft the report with potential contaminant linkages"
            - name: Phase II soil and groundwater investigation
              description: |-
                ## Purpose
                Intrusive investigation tests the linkages the Phase I suspected, and a poorly placed borehole wastes the budget and leaves the question open. Designing the investigation around the suspected sources and pathways, with utilities cleared and a health and safety plan, gets usable data in one mobilisation.

                ## Milestones
                1. An investigation plan placing boreholes, trial pits and wells against each suspected source.
                2. Underground services cleared and a site health and safety plan approved.
                3. Soil and groundwater samples logged, collected and sent under chain of custody.
                4. A factual report with logs, results and comparison against screening criteria.

                ## Notes
                Clear underground services before any digging with drawings, a cable locator and hand-dug inspection pits. Stop work if anything unexpected appears.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A factual Phase II report with borehole logs, validated results and screening comparisons is issued from one mobilisation."
                cadence: phased
                effort_hours_estimate: "50"
              tasks:
                - "Place boreholes and wells against each suspected source on a plan"
                - "Get service drawings and book a cable locator survey"
                - "Write the site health and safety plan for drilling"
                - "Compile logs and results into the factual report"
            - name: Conceptual site model and remediation criteria
              description: |-
                ## Purpose
                Risk-based remediation asks whether a source, a pathway and a receptor are all present, and sets clean-up targets for that site rather than defaulting to the strictest generic value. A conceptual site model and site-specific criteria, agreed with the regulator, decide how much remediation is really needed and what it will cost.

                ## Milestones
                1. A conceptual site model drawing and table of sources, pathways and receptors.
                2. Generic screening values applied and exceedances listed.
                3. Site-specific criteria derived or selected for the linkages that remain.
                4. The model and criteria agreed with the regulator in writing.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A conceptual site model and remediation criteria for each active linkage are documented and agreed with the regulator in writing."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Draw the conceptual site model with sources, pathways and receptors"
                - "Screen the Phase II results against generic criteria"
                - "Derive site-specific criteria for the remaining linkages"
                - "Submit the model and criteria to the regulator for agreement"
            - name: Remediation options appraisal
              description: |-
                ## Purpose
                Excavation and disposal is often the default, but it moves the problem to a landfill and can cost several times more than treating soil in place or managing a plume by monitored natural attenuation. Scoring options against effectiveness, time, cost, sustainability and regulator acceptance gives the client a decision they can defend.

                ## Milestones
                1. A long list of remediation technologies screened against the site's contaminants and geology.
                2. Three or four options compared on effectiveness, time, cost, waste and acceptance.
                3. A preferred option chosen with a bench or pilot test where needed.
                4. An outline remediation design and verification plan written.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded options appraisal compares at least three remediation options and names a preferred one with an outline design and verification plan."
                cadence: phased
                effort_hours_estimate: "35"
              tasks:
                - "Screen remediation technologies against the contaminants and geology"
                - "Score the shortlisted options on cost, time, waste and acceptance"
                - "Decide whether a bench or pilot test is needed"
                - "Draft the outline remediation design and verification plan"
            - name: Remediation verification and closure report
              description: |-
                ## Purpose
                Closure is granted on evidence, not on the contractor's word that the work is done: validation samples, waste records, as-built drawings and post-remediation monitoring. Planning the verification evidence from the start of remediation means the closure report can be written in weeks, not reconstructed from missing records.

                ## Milestones
                1. A verification plan setting out sample density, criteria and records to keep.
                2. Validation samples taken from excavation bases and walls or treated zones.
                3. Waste transfer records and imported fill certificates compiled.
                4. A closure report submitted and the regulator's acceptance received.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A closure report with validation results, waste records and as-built drawings is accepted by the regulator."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Write the verification plan before remediation starts"
                - "Agree validation sample locations with the site supervisor"
                - "Collect waste transfer notes and imported fill certificates"
                - "Draft the closure report and submit it to the regulator"
            - name: Wastewater treatment technology options study
              description: |-
                ## Purpose
                Choosing between conventional activated sludge, sequencing batch reactors, membrane bioreactors, trickling filters or ponds fixes a community's or a factory's costs and skills needs for decades. Comparing options on effluent quality, land, power, sludge, operator skill and whole-life cost suits the choice to the people who will run it.

                ## Milestones
                1. Design flows, loads and effluent targets agreed for the study.
                2. Four or five process options sized at outline level.
                3. Options compared on capital cost, operating cost, land, power, sludge and operator skills.
                4. A preferred option recommended and the decision recorded by the client.

                ## Notes
                On small islands, spare parts, chemical supply and trained operators often matter more than the best effluent number. Weight them honestly.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An options study compares at least four processes on whole-life cost and operability, and the client's choice is recorded."
                cadence: phased
                effort_hours_estimate: "45"
              tasks:
                - "Agree design flows, loads and effluent targets with the client"
                - "Size each process option at outline level"
                - "Estimate capital and 20-year operating cost for each option"
                - "Present the comparison and record the client's decision"
            - name: Aeration energy and blower control review
              description: |-
                ## Purpose
                Aeration is usually the largest electricity user at an activated sludge works, and blowers running flat out to hold dissolved oxygen well above need are common. Measuring blower power against dissolved oxygen and load, then tightening control setpoints, can cut energy noticeably without risking effluent quality.

                ## Milestones
                1. Blower power, airflow and dissolved oxygen logged over two weeks.
                2. Periods of over-aeration identified against load.
                3. Revised dissolved oxygen setpoints or control changes agreed with operations.
                4. Energy and effluent quality compared before and after the change.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Blower energy and effluent quality are compared for a month before and after a recorded control change."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Log blower power and dissolved oxygen for two weeks"
                - "Plot dissolved oxygen against load to find over-aeration"
                - "Agree revised setpoints with the operations lead"
                - "Compare energy use and effluent results after the change"
            - name: Industrial effluent characterisation and pretreatment
              description: |-
                ## Purpose
                Industrial sites that discharge to a sewer or a works often break limits because nobody knows which process makes which load: a tank wash, a cleaning cycle, a batch dump. Sampling each stream over a production cycle and building a load balance shows where pretreatment, segregation or a simple procedure change will fix the problem.

                ## Milestones
                1. Every process effluent stream mapped with its timing.
                2. Flow-proportional samples taken from each stream over a full production cycle.
                3. A load balance showing which stream contributes which load.
                4. Pretreatment or segregation options proposed and costed.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A load balance attributes at least 80 percent of each problem parameter to named streams, with costed pretreatment options."
                cadence: phased
                effort_hours_estimate: "35"
              tasks:
                - "Map each process effluent stream with production staff"
                - "Sample every stream across one full production cycle"
                - "Build a load balance by stream and parameter"
                - "Cost pretreatment and segregation options for the main loads"
            - name: Water reuse feasibility for an industrial site
              description: |-
                ## Purpose
                Water shortages in the dry season, rising tariffs and drought restrictions make treated effluent worth more as cooling, washing or irrigation water than as a discharge. A feasibility study matching reuse quality needs to treatment steps and cost shows whether reuse pays and what health and permit conditions apply.

                ## Milestones
                1. Site water uses listed with volumes and quality needs.
                2. Uses that could take recycled water identified.
                3. Treatment steps, storage and distribution for the reuse scheme outlined and costed.
                4. Health, permit and payback findings summarised for a decision.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A feasibility note states reuse volume, treatment, cost, payback and permit position, and a go or no-go decision is recorded."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Build a site water balance of uses and volumes"
                - "Mark which uses could accept recycled water"
                - "Outline and cost the extra treatment and storage"
                - "Ask the regulator what conditions apply to reuse"
            - name: Odour complaint investigation at a treatment works
              description: |-
                ## Purpose
                Odour complaints can close a works' good relations with its neighbours faster than any permit breach, and the source is often a single open channel, sludge store or septic inlet. Logging complaints against weather and plant activity, then measuring hydrogen sulphide at likely sources, points to a fix rather than a general apology.

                ## Milestones
                1. A complaint log with time, location, wind direction and plant activity.
                2. Hydrogen sulphide measured at the likely sources over several days.
                3. The main sources ranked and control options listed.
                4. A fix in place and complaints compared over the following three months.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Odour sources are ranked from logged complaints and measurements, a control is installed and complaints are compared for three months after."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Set up a complaint log with wind direction and plant activity"
                - "Borrow or hire a hydrogen sulphide logger"
                - "Measure at the inlet, sludge store and open channels"
                - "Rank the sources and propose a control for the worst"
            - name: Permit application or renewal submission
              description: |-
                ## Purpose
                Applications for a new discharge permit, a variation or a renewal can take the regulator months, and a site operating after expiry is usually in breach. Preparing the application with flows, effluent data, receiving water information and any modelling well before the deadline avoids a scramble and questions that restart the clock.

                ## Milestones
                1. The regulator's application form, guidance and fee confirmed.
                2. Effluent data, flows and receiving water information compiled.
                3. Any dilution or impact modelling the regulator needs completed.
                4. The application submitted with a receipt and the decision deadline noted.

                ## Notes
                Check whether the renewal triggers new, tighter standards. Renewals often bring limits that need plant upgrades.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A complete permit application is submitted before the regulator's deadline, with a receipt and the expected decision date recorded."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Download the regulator's current application form and guidance"
                - "Compile two years of effluent data and flows"
                - "Commission any dilution modelling the regulator asks for"
                - "Submit the application and file the receipt"
            - name: Regulator site inspection readiness
              description: |-
                ## Purpose
                Inspectors usually ask for the same things: the permit, recent monitoring results, calibration records, waste notes, the spill procedure and a walk to the outfall. Running your own inspection against that list before the visit finds the gaps while there is still time to close them.

                ## Milestones
                1. A list of records and areas an inspector is likely to ask for.
                2. A self-inspection done against the list with gaps logged.
                3. Every gap closed or explained with a dated action.
                4. A named host and a records folder ready for the visit.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A self-inspection is completed with all gaps closed or actioned before the regulator's visit, and the visit's findings are recorded."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List the records and areas an inspector will ask to see"
                - "Walk the site and records against the list"
                - "Close or action each gap with an owner"
                - "Run a short self-inspection against the list @recurring(quarterly)"
            - name: Wet season and hurricane readiness for treatment works
              description: |-
                ## Purpose
                Hurricanes and tropical storms bring power loss, flooding of pumping stations, chemical delivery gaps and storm overflows, and recovery depends on what was ready before the season. A yearly readiness check covering generators, fuel, chemical stocks, spares, contacts and the overflow reporting route keeps the works treating as much as it can.

                ## Milestones
                1. Standby generators tested under load with fuel for the agreed number of days.
                2. Chemical stocks and critical spares raised to the agreed storm level.
                3. Flood-prone pumping stations and electrical panels checked.
                4. Storm contacts, overflow reporting route and staff call-out list confirmed.

                ## Notes
                The Atlantic hurricane season runs from June to November. Book generator servicing and fuel deliveries in April or May, before suppliers are stretched.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each year before June, generators are load tested, storm stocks are in place and the call-out and reporting contacts are confirmed."
                cadence: cyclic
              tasks:
                - "Book load tests for every standby generator"
                - "Agree storm stock levels for chemicals, fuel and spares"
                - "Check flood protection at low-lying pumping stations"
                - "Run the hurricane readiness check before June @recurring(yearly)"
            - name: Environmental compliance audit of a site
              description: |-
                ## Purpose
                Audits against ISO 14001 or a full legal compliance audit test whether the system works in practice, not just on paper. Planning the audit scope, gathering evidence and closing findings with dated actions gives management an honest picture and the certification body nothing to surprise you with.

                ## Milestones
                1. Audit scope, criteria and auditors agreed.
                2. Evidence gathered for each legal requirement and system clause in scope.
                3. Findings graded and agreed with the responsible managers.
                4. Corrective actions dated, owned and tracked to closure.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An audit report with graded findings is issued and every corrective action has an owner and a due date."
                cadence: one-shot
                effort_hours_estimate: "35"
              tasks:
                - "Agree the audit scope and criteria with the environmental manager"
                - "Build an evidence checklist from the legal register and the standard"
                - "Hold the closing meeting and agree findings with managers"
                - "Track each corrective action to closure"
            - name: EIA public consultation meeting
              description: |-
                ## Purpose
                Communities near a proposed project want to know about water, dust, noise, traffic, jobs and who to call when something goes wrong, and many EIA processes require a public meeting. Preparing plain-language material, a fair format and a record of every question and answer builds trust and gives the regulator evidence of genuine consultation.

                ## Milestones
                1. Venue, time and notice agreed to reach the people affected, with the regulator's requirements met.
                2. Plain-language summary, maps and display boards prepared.
                3. The meeting held with every question and response recorded.
                4. A consultation report showing how comments changed the assessment.

                ## Notes
                Start from the **Meeting notes** template for the question log. Hold the meeting at a time working people can attend, and in the language most residents use.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A public meeting is held with a full question and answer record, and a consultation report shows how comments were addressed."
                cadence: one-shot
                effort_hours_estimate: "25"
              tasks:
                - "Check the regulator's requirements for notice and format"
                - "Draft a plain-language project summary with maps"
                - "Arrange a venue near the affected community at an evening time"
                - "Write the consultation report from the question log"
            - name: Erosion and sediment control on a construction site
              description: |-
                ## Purpose
                Construction engineers on roads, housing and industrial sites often carry the environmental role too, and bare ground in a tropical downpour sends silt into drains, rivers and reefs within hours. An erosion and sediment control plan with silt fences, settlement ponds, phased clearing and inspections after rain is the main environmental control on most sites.

                ## Milestones
                1. An erosion and sediment control plan drawn for each construction phase.
                2. Controls installed before clearing starts in each area.
                3. Inspections done after every heavy rain with repairs logged.
                4. Turbidity at the site outfall measured and compared with the limit or background.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An erosion and sediment control plan is in force, controls are in place before clearing, and post-rain inspections are logged with repairs."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Mark drainage paths and outfalls on the site plan"
                - "Draw controls for the current construction phase"
                - "Check silt fences and ponds are in before clearing starts"
                - "Inspect controls after heavy rain and log repairs"
            - name: Moving from consultancy to a regulator role
              description: |-
                ## Purpose
                Moving from writing reports for clients to reviewing them for the environmental regulator changes the questions you ask: whether the evidence supports the conclusion, whether the conditions are enforceable, whether a decision will survive appeal. Setting up a review checklist and learning the agency's legal powers early makes the first year of permit and EIA reviews consistent.

                ## Milestones
                1. The legislation and powers your agency acts under read and summarised.
                2. A review checklist for permit applications and EIA reports agreed with a senior officer.
                3. Conflict of interest declared for former clients and projects.
                4. Five reviews completed and checked by a senior officer.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A conflict of interest declaration is filed, a review checklist is agreed and five reviews pass a senior officer's check."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Declare former clients and projects to your manager"
                - "Summarise the legal powers your agency acts under"
                - "Agree a review checklist with a senior officer"
                - "Ask a senior officer to check your first five reviews"
            - name: Running monitoring work as a small environmental consultancy
              description: |-
                ## Purpose
                Running a small consultancy that does sampling and compliance reporting for factories, hotels and developers means the engineer is also the scheduler, the safety officer and the invoice chaser. A schedule of recurring client rounds, standard sampling and report templates, insurance in place and prompt invoicing keep the business sound and the data trusted.

                ## Milestones
                1. Each client's monitoring obligations entered in one rolling schedule.
                2. Standard field sheets, chain of custody and report templates in use for all clients.
                3. Professional indemnity and public liability cover confirmed for field work.
                4. Invoices issued within five days of each report.

                ## Notes
                Never sign a client's compliance return yourself unless you are the named competent person. Prepare it for the permit holder to sign.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "All client monitoring rounds run from one schedule using standard templates, insurance is current and invoices go out within five days of each report."
                cadence: rolling
              tasks:
                - "Enter every client's monitoring dates in one schedule"
                - "Confirm professional indemnity cover includes field sampling"
                - "Review the client monitoring schedule for the month ahead @recurring(monthly:9)"
                - "Invoice each client within five days of issuing the report"
            - name: Managing environmental consultants as the site owner
              description: |-
                ## Purpose
                Owners and operators who hire consultants for EIAs, site investigations or monitoring often get reports that answer a different question from the one they needed. Writing a clear scope, checking the proposed methods, reviewing drafts against the scope and keeping the raw data gives better reports and keeps the knowledge on your side when consultants change.

                ## Milestones
                1. A scope of work stating the question, deliverables, standards and data to hand over.
                2. Consultant proposals compared on method, people and price, not price alone.
                3. Drafts reviewed against the scope with comments logged and answered.
                4. Raw data, logs and models received and filed with the final report.
              priority: low
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A consultant job is run from a written scope, with a logged draft review and the raw data filed alongside the final report."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Write the question the consultant must answer in one sentence"
                - "Add deliverables, standards and data handover to the scope"
                - "Score proposals on method and people as well as price"
                - "Log draft comments and check each response"
            - name: Biological nutrient removal upgrade
              description: |-
                ## Purpose
                Nitrogen and phosphorus in effluent feed algal blooms in rivers and smother reefs in coastal waters, and tighter nutrient limits are arriving at works designed only for carbon removal. Assessing whether existing tanks can be converted to nitrification, denitrification and biological phosphorus removal, with chemical dosing as backup, is specialist process work with large cost consequences.

                ## Milestones
                1. Influent nutrient loads and temperature characterised from a sampling campaign.
                2. Existing tank volumes and aeration checked against nutrient removal configurations.
                3. A process model of the preferred configuration run for average and peak loads.
                4. An upgrade concept with cost and effluent performance presented to the owner.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An upgrade concept, backed by a calibrated process model, states expected nitrogen and phosphorus effluent values and cost."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Run a two-week influent nutrient sampling campaign"
                - "Check existing tank volumes against anoxic and aerobic needs"
                - "Build a process model of the preferred configuration"
                - "Present the upgrade concept and cost to the owner"
            - name: Marine outfall dilution and mixing zone study
              description: |-
                ## Purpose
                Coastal communities, hotels and desalination plants in the Caribbean discharge through sea outfalls close to reefs, beaches and seagrass. A dilution and mixing zone study using current data and plume modelling shows whether the outfall meets standards at the edge of the zone, and what a longer outfall or a diffuser would change.

                ## Milestones
                1. Outfall location, depth, diffuser and discharge characteristics confirmed.
                2. Current, density and bathymetry data gathered or measured.
                3. Near-field and far-field dilution modelled for typical and worst-case conditions.
                4. Results compared against standards at the mixing zone edge and sensitive receptors.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dilution study reports modelled concentrations at the mixing zone edge and nearest reef or beach for typical and worst-case conditions."
                cadence: phased
                effort_hours_estimate: "50"
              tasks:
                - "Confirm the outfall depth, diffuser and discharge flow"
                - "Gather current and bathymetry data for the outfall area"
                - "Model near-field dilution for worst-case conditions"
                - "Map predicted concentrations against reefs and beaches"
            - name: PFAS and emerging contaminants screening
              description: |-
                ## Purpose
                PFAS from firefighting foams and industrial use, along with pharmaceuticals and microplastics, are moving onto regulators' lists faster than standards settle. A screening exercise that identifies where foams were used or stored, samples a few likely points with a capable laboratory and records the findings prepares a site for limits that may come.

                ## Milestones
                1. Records of firefighting foam use, training areas and storage reviewed.
                2. A laboratory with a suitable PFAS method and low reporting limits identified.
                3. A small number of likely source and receptor points sampled with PFAS-free equipment.
                4. Results recorded with the regulatory position and a recommendation on next steps.

                ## Notes
                PFAS sampling is easily contaminated by waterproof clothing, some sunscreens and PTFE equipment. Follow the laboratory's sampling guidance exactly.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A screening note records PFAS results from likely source points, sampled to a laboratory protocol, with the current regulatory position."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Ask the fire team where foams were stored, used or trained with"
                - "Find a laboratory with a low-level PFAS method"
                - "Sample likely source points using PFAS-free equipment"
                - "Record results with the current regulatory position"
---

# Environmental Engineering Practice

Environmental Engineering Practice is for engineers who keep treatment works compliant, design monitoring programmes, write EIA chapters and take contaminated sites from first suspicion to a signed closure report. It starts with foundations (the permit register, discharge limits, an accredited laboratory, sampling kit and a monitoring design), moves through the operating machinery of compliance reporting, calibration, data checks and waste records, then core skills, the EIA and remediation sequences, improvement studies, dated events such as permit renewals and regulator inspections, career situations and finally specialist work such as nutrient removal, marine outfalls and emerging contaminants.

The rhythm is daily for treatment works checks, weekly for instrument calibration and data uploads, monthly for discharge reports, permit deadlines, QA/QC review, stormwater inspections and waste records, quarterly for groundwater rounds and yearly for the wet season and hurricane readiness. The Vendor, Risk register, Operational checklist, Metrics log and Meeting notes templates pair with the projects that need them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
