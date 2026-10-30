---
id: engineering-practice.petroleum-engineering-practice
name: Petroleum Engineering Practice
description: "The working kit of a reservoir, drilling or production engineer: field and well data in order, surveillance and reporting routines, core analysis skills, well proposals and reviews, and the specialist work of a senior engineer."
category: business
version: 1.0.0
tags: [engineering-practice, petroleum-engineering-practice, engineer, reservoir-engineering, drilling, production-engineering, well-planning, regulatory-reporting]
author: Aurum Technology
starter_structure:
  templates:
    - meeting-notes
    - metrics-log
    - risk-register
    - development-plan
    - onboarding-30-60-90
  pillars:
    - name: Engineering Practice
      emoji: "🔧"
      description: "The day-to-day work of practising engineers: each major discipline, process safety and risk studies, FEED, design reviews, commissioning, reliability and maintenance, CAD, simulation and PLC work, project delivery, tenders, reports, ethics and standards, and the Caribbean energy sector from Point Lisas to LNG."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Petroleum Engineering Practice
          description: "Working as a petroleum engineer: reservoir, drilling and production roles, well planning and reviews, production optimisation, field data and regulatory reporting."
          projects:
            - name: Petroleum engineering role and deliverables map
              description: |-
                ## Purpose
                Petroleum engineering titles hide very different jobs: a reservoir engineer owns forecasts and reserves, a drilling engineer owns well designs and programmes, and a production engineer owns the wells once they flow. Writing down which deliverables are yours, who signs them and who consumes them stops you doing a neighbour's work twice and missing your own. Do it in your first two weeks, before the calendar fills up.

                ## Milestones
                1. A one-page list of the recurring deliverables your role owns, from forecasts to well programmes to production reports.
                2. Each deliverable matched to the person who checks it and the person who uses it.
                3. Your line manager's agreement to the list, noted with the date.
                4. Gaps or overlaps with other disciplines raised and an owner named for each.

                ## Notes
                Ask for the last copy of every deliverable on your list. A previous version tells you more about expectations than any job description.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A deliverables map for your role, with checker and user named for each item, is agreed with your manager and saved in your working folder."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every report, model and programme you have been asked for so far"
                - "Ask your manager which of them you own and which you only contribute to"
                - "Collect the most recent issued copy of each owned deliverable"
                - "Write the deliverables map and send it to your manager for agreement"
            - name: Field fact sheet for your assigned asset
              description: |-
                ## Purpose
                New engineers often spend months answering basic questions about a field from memory and old slide packs. A two-page fact sheet with reservoirs, drive mechanism, well count by status, fluid type, facilities capacity and the production history curve gives you, and everyone you brief, one agreed starting point. It also shows quickly where the data is thin.

                ## Milestones
                1. Reservoir units, depths, drive mechanism and fluid type summarised in a table.
                2. Well count by status: producing, injecting, shut in, suspended and abandoned.
                3. Cumulative and current production plotted from first oil or first gas.
                4. Facility constraints such as separator, compression and water handling capacity listed.
                5. Every figure on the sheet traced to a named source document or database.

                ## Notes
                Date the sheet and put a revision number on it. Fact sheets get forwarded for years after the numbers go stale.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A dated, sourced field fact sheet covering reservoirs, wells, fluids, facilities and production history is reviewed by a senior engineer on the asset."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pull the latest well status list from the production database"
                - "Plot field production by year from first production to date"
                - "Summarise reservoirs, drive mechanism and fluid type in one table"
                - "Ask a senior engineer on the asset to review the sheet for errors"
            - name: Well file and data source inventory
              description: |-
                ## Purpose
                Well data is usually scattered across a technical database, a document system, shared drives and the drawer of someone who retired. Mapping where each kind of record lives, from deviation surveys and logs to completion diagrams, test reports and intervention histories, saves hours on every later study and shows which wells have missing files before a regulator or partner asks.

                ## Milestones
                1. A table of data types with the system, folder or person that holds each one.
                2. Access requested and granted for every system on the list.
                3. A sample of ten wells checked for complete files, with gaps recorded.
                4. Missing records listed with a plan to recover or recreate them.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A data source inventory covering surveys, logs, completions, tests and interventions exists, with a ten-well completeness check and a gap list."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the data types you have needed in your first month on the asset"
                - "Find where each type is stored and who is the custodian"
                - "Check ten wells for a complete file and record what is missing"
                - "File any new well reports into the right well folder @recurring(monthly:28)"
            - name: Units, conversions and reference conditions sheet
              description: |-
                ## Purpose
                Oilfield units, metric units and company conventions get mixed in the same spreadsheet, and a wrong standard condition or a gas volume quoted in the wrong base can move a reported number by several percent. A personal sheet with your organisation's standard conditions, common conversions and the formation volume factors in use for your field prevents quiet errors in every calculation you hand over.

                ## Milestones
                1. The standard temperature and pressure your organisation and regulator use written down with the source.
                2. Conversions for volumes, pressures, rates and gas energy checked against a reference text.
                3. The formation volume factors and gas expansion factors in use for your field recorded.
                4. The sheet pinned beside your main working spreadsheets.

                ## Notes
                Where the regulator, the sales contract and the company use different reference conditions, write all three down and note which applies to which report.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page units and reference conditions sheet, with sources for standard conditions and field volume factors, is saved and in use."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the standard conditions used in your regulator's reporting guidance"
                - "Write out the conversions you use most with a reference for each"
                - "Record the formation volume factors used for your field's reservoirs"
            - name: Engineering software and template set-up
              description: |-
                ## Purpose
                Most petroleum engineering analysis runs through a handful of tool categories: decline curve software, nodal analysis, pressure transient analysis, a reservoir simulator, a log viewer and a set of approved spreadsheets. Getting licences, training access and the approved templates in place early means the first urgent request is answered with the right tool, not a spreadsheet built at midnight.

                ## Milestones
                1. A list of the tools your role uses, each with licence status and the internal owner.
                2. Access granted to each tool, with a test file opened successfully.
                3. Approved calculation templates for your discipline copied from the controlled location.
                4. Any internal training sessions for the tools booked or completed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every tool your role needs is licensed, opens a test case, and the approved templates are saved where you work."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask a colleague in your discipline which tools they open every week"
                - "Request licences for each tool you do not yet have"
                - "Open a sample case in each tool to confirm it works"
                - "Copy the approved templates from the controlled folder, not from email"
            - name: Wellbore diagram check for your active wells
              description: |-
                ## Purpose
                Wrong packer depths and old tubing strings on a wellbore diagram can make an intervention unsafe and a nodal model meaningless. Checking the current diagram for each active well against the last workover report and the completion tally catches errors before they reach a rig or a wireline crew.

                ## Milestones
                1. Every active well on your list with a current diagram located.
                2. Each diagram compared with the latest completion or workover report.
                3. Discrepancies in depths, sizes or equipment recorded in a list.
                4. Corrected diagrams issued through document control with a new revision.

                ## Notes
                Start with wells that have interventions planned in the next six months. They are where a wrong diagram costs most.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Current wellbore diagrams for all active wells have been checked against the last completion record, with corrections issued at a new revision."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List wells with interventions planned in the next six months"
                - "Compare each diagram with its last completion or workover report"
                - "Record every depth, size or equipment mismatch you find"
                - "Send corrected diagrams to document control for reissue"
            - name: Reservoir fluid and PVT summary
              description: |-
                ## Purpose
                Every rate, reserves figure and lift design rests on fluid properties, yet many fields run on one old PVT report whose sample may not represent the reservoir today. Gathering all PVT and fluid analyses, judging which are representative and summarising the properties in use gives you a defensible basis for every calculation and a clear case if new samples are needed.

                ## Milestones
                1. Every PVT, compositional and water analysis report for the field gathered in one folder.
                2. Each sample judged for representativeness with a short reason.
                3. A table of the properties in use: bubble point or dew point, solution gas oil ratio, volume factor and viscosity.
                4. A recommendation on whether new fluid samples are needed, with the wells that would give them.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A PVT summary table, with each source sample judged for representativeness and a sampling recommendation, is issued to the reservoir team."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Search the document system for every PVT and fluid analysis report"
                - "Note sampling date, depth and reservoir pressure for each sample"
                - "Build a table of the fluid properties currently used in models"
                - "Write a short note on whether new samples are justified"
            - name: Regulatory obligations register for your asset
              description: |-
                ## Purpose
                Petroleum regulators expect production returns, flaring and venting reports, well consents and notifications on their own deadlines, and a missed filing can hold up a well or attract a penalty. A register listing each obligation, its legal basis, the due date, the owner and where the evidence is filed turns scattered emails into a calendar you can hand over when you rotate.

                ## Milestones
                1. Every reporting and consent obligation for the asset listed with the regulation or licence clause it comes from.
                2. A due date or trigger, an owner and a backup named for each one.
                3. The last submission for each obligation located and filed with the register.
                4. The register checked by your regulatory or compliance lead.

                ## Notes
                Requirements differ between countries and licences, so build the list from your licence documents and the regulator's published guidance, and confirm interpretation with your compliance or legal team.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A regulatory register with every obligation, legal basis, due date, owner and last submission is reviewed by the compliance lead."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Read the licence and the regulator's reporting guidance for your asset"
                - "List each report, consent and notification with its due date"
                - "Name an owner and a backup for every obligation"
                - "Check the register for filings due in the next 90 days @recurring(quarterly)"
            - name: Wellsite and field visit readiness
              description: |-
                ## Purpose
                Engineers who visit a wellsite, a rig or a production station step into places with pressure, hydrogen sulphide, moving equipment and heavy traffic. Having inductions, medicals, personal protective equipment and the site's emergency arrangements sorted before the first visit means you arrive able to work, and you know that anyone, you included, can stop a job that looks unsafe.

                ## Milestones
                1. Site inductions and any required safety courses, such as hydrogen sulphide awareness, completed and in date.
                2. Personal protective equipment issued and checked for fit.
                3. The site's emergency response, muster points and reporting lines understood before the visit.
                4. Your stop-work authority explained to you by the site supervisor and written in your notes.

                ## Notes
                Never enter a live work area without signing in with the person in charge, and follow the site's permit to work system for anything beyond observation.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "All inductions and safety courses required for your sites are complete and recorded, with PPE issued, before your first field visit."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the HSE team which courses each of your sites requires"
                - "Book the inductions and safety courses you are missing"
                - "Collect and check your personal protective equipment"
                - "Read the emergency response plan for the first site you will visit"
            - name: Daily production surveillance routine
              description: |-
                ## Purpose
                Production losses are cheapest to fix in the first day or two, when a stuck choke, a failing pump or a tripped compressor still has a clear cause. A short morning routine that compares each well's rate and pressures with its expected values, and turns exceptions into named actions, is the single habit that most separates a good production engineer from a busy one.

                ## Milestones
                1. Expected rate and pressure for every producing well set from the latest valid test.
                2. An exception threshold agreed with operations, such as a ten percent rate drop.
                3. A short exceptions list produced each morning with an owner for each well.
                4. Exceptions and outcomes summarised at the weekly well review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every working day for a month, the morning production report is screened against expected values and each exception has a named owner."
                cadence: rolling
              tasks:
                - "Set expected rates for each producing well from its latest valid test"
                - "Agree an exception threshold with the operations supervisor"
                - "Scan the morning report for wells off their expected rate @recurring(daily)"
                - "Send the week's exceptions and outcomes to the asset team @recurring(weekly:fri)"
            - name: Well test validation and allocation checks
              description: |-
                ## Purpose
                Allocated production is only as good as the well tests behind it, and an allocation factor drifting away from one usually means a bad test, a meter problem or an unknown loss. Validating each test against the well's history and checking the allocation factor every month keeps the numbers reported to partners and regulators defensible.

                ## Milestones
                1. Validation rules written for well tests: duration, stability, water cut and gas oil ratio limits.
                2. Each month's tests marked valid or rejected with a reason.
                3. The allocation factor trended monthly with an agreed action band.
                4. Out-of-band months investigated and the cause recorded.

                ## Notes
                Start from the **Metrics log** template to trend the allocation factor and the share of rejected tests.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For six consecutive months, every well test is validated or rejected with a reason and the allocation factor is trended against an agreed band."
                cadence: rolling
              tasks:
                - "Write down the rules a well test must meet to be accepted"
                - "Agree an action band for the field allocation factor"
                - "Validate last month's tests and trend the allocation factor @recurring(monthly:4)"
                - "Investigate any month where the factor falls outside the band"
            - name: Monthly production reporting to the regulator
              description: |-
                ## Purpose
                Monthly production and disposition returns are a licence obligation, and they are read alongside royalty, tax and partner statements, so errors propagate. A routine that reconciles allocated volumes, flared and fuel gas and stock movements before submission, with a checker who is not the preparer, makes late or corrected returns rare.

                ## Milestones
                1. A reporting calendar with internal cut-off, check and submission dates.
                2. Volumes reconciled between allocation, fiscal metering and stock records each month.
                3. Flared, vented and fuel gas volumes included and explained where they changed.
                4. Each return checked by a second person and the submission receipt filed.

                ## Notes
                Keep the working file behind each return. When a regulator queries a month two years later, the reconciliation is what answers it.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive monthly returns are submitted on time, each with a reconciliation file, a named checker and a filed receipt."
                cadence: rolling
              tasks:
                - "Write the internal cut-off and check dates for the monthly return"
                - "Reconcile allocated, fiscal and stock volumes for the month @recurring(monthly:8)"
                - "Have a second engineer check the return before submission"
                - "File the submission receipt and working file in the returns folder @recurring(monthly:12)"
            - name: Quarterly decline curve and forecast refresh
              description: |-
                ## Purpose
                Budgets, gas sales nominations and well work priorities all lean on the production forecast, and a forecast more than a few months old is usually wrong in the same direction. Refreshing decline curves for each well or well group each quarter, and explaining the change from last quarter, keeps the forecast trusted and shows early when a field is underperforming.

                ## Milestones
                1. Decline curves fitted to each producing well or group with the method and period recorded.
                2. The new forecast compared with the previous one and the budget.
                3. A one-page variance note explaining the main changes.
                4. The forecast issued to planning and commercial teams with a version number.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Four quarterly forecasts in a row are issued with refreshed decline fits, a version number and a variance note against the previous issue."
                cadence: cyclic
              tasks:
                - "Choose the fitting period and decline model for each well group"
                - "Refit decline curves and issue the updated forecast @recurring(quarterly)"
                - "Write a one-page note explaining changes from the last forecast"
                - "Ask planning which assumptions they need flagged in the forecast"
            - name: Weekly well review with operations
              description: |-
                ## Purpose
                Production engineers and operators see the same wells from different ends: one through data, the other through the gauges and the noise a pump makes. A short weekly meeting that walks the exceptions list, agrees interventions and checks last week's actions keeps both sides honest and gets fixes scheduled instead of discussed.

                ## Milestones
                1. A standing weekly slot agreed with the operations supervisor.
                2. A fixed agenda: exceptions, actions due, planned interventions and safety items.
                3. Actions recorded with an owner and a date every week.
                4. Overdue actions reported to the asset lead each month.

                ## Notes
                Start from the **Meeting notes** template so the action list carries forward week to week.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The weekly well review has met for twelve weeks with recorded actions, owners and dates, and overdue actions reported monthly."
                cadence: rolling
              tasks:
                - "Agree a weekly slot and attendees with the operations supervisor"
                - "Draft a fixed agenda and share it before the first meeting"
                - "Run the well review and record actions with owners @recurring(weekly:tue)"
                - "Send overdue actions to the asset lead at month end"
            - name: Artificial lift run life and failure log
              description: |-
                ## Purpose
                Electric submersible pumps, rod pumps and gas lift valves fail for reasons that repeat: sand, scale, gas locking, poor installation or the wrong design point. A failure log with run life, failure mode and teardown findings for every pulled lift system turns anecdotes into evidence for supplier discussions and design changes.

                ## Milestones
                1. Every lift installation listed with type, install date and current run life.
                2. Each failure since the start of the log recorded with mode and teardown result.
                3. Mean run life by lift type and supplier calculated quarterly.
                4. The top two failure causes presented with a proposed change.

                ## Notes
                Start from the **Metrics log** template. Ask for teardown reports in writing; verbal summaries rarely survive the next well pull.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A lift failure log covers every installation with run life and failure mode, and mean run life by type is reported each quarter."
                cadence: rolling
              tasks:
                - "List every lift installation with type and install date"
                - "Request teardown reports for the last five pulled systems"
                - "Update run life and record any new failures in the log @recurring(monthly:15)"
                - "Rank failure causes by count and lost production"
            - name: Well integrity surveillance and barrier register
              description: |-
                ## Purpose
                Sustained annulus pressure or a failed safety valve test means a well's barriers can no longer be assumed, and the consequences of a loss of containment are serious. Tracking annulus pressures, valve tests and barrier status for every well, with clear limits and escalation, is basic petroleum engineering duty, not an optional extra.

                ## Milestones
                1. A barrier register listing primary and secondary barriers for each well.
                2. Maximum allowable annulus pressures recorded for each annulus.
                3. Annulus pressure readings and safety valve test results logged against those limits.
                4. Wells outside limits escalated to the well integrity authority with a dated action.

                ## Notes
                Start from the **Risk register** template for wells with degraded barriers. Your company's well integrity standard and the regulator set the limits and test frequencies; do not invent them.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every well has a barrier status, annulus limits and current test results recorded, and every out-of-limit well has a dated escalation."
                cadence: rolling
              tasks:
                - "Find your company's well integrity standard and its test frequencies"
                - "Record maximum allowable annulus pressures for each well"
                - "Review annulus pressures against limits and escalate breaches @recurring(monthly:20)"
                - "Check safety valve test results are in date for every well @recurring(quarterly)"
            - name: Annual reservoir data acquisition plan
              description: |-
                ## Purpose
                Pressure surveys, production logs, fluid samples and saturation logs are what keep reservoir models connected to reality, and each one competes with production for well time and budget. An annual plan that ties each survey to a decision it will inform gets the data approved and stops the field going years without a pressure point.

                ## Milestones
                1. Gaps in pressure, saturation and fluid data listed by reservoir.
                2. Each proposed survey linked to the decision or model update it supports.
                3. Costs and deferred production estimated for each survey.
                4. The plan approved and the surveys entered in the well work schedule.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A yearly data acquisition plan, with each survey tied to a decision and costed, is approved and scheduled."
                cadence: cyclic
              tasks:
                - "List the last pressure survey date for each reservoir"
                - "Write the decision each proposed survey would inform"
                - "Estimate cost and deferred production for each survey"
                - "Draft next year's data acquisition plan for approval @recurring(yearly)"
            - name: Well work opportunity register
              description: |-
                ## Purpose
                Most mature fields have more possible well work than rigs, coiled tubing units or budget, and good ideas get lost between meetings. A single register of candidates, from reperforations and water shut-offs to stimulations and lift changes, each with estimated gain, cost and risk, lets the team rank work on evidence and fill the schedule with the best jobs first.

                ## Milestones
                1. All known candidates entered with well, job type and source of the idea.
                2. Gain, cost and chance of success estimated for each candidate.
                3. The register ranked and the top candidates agreed with the asset lead.
                4. Completed jobs closed with actual gain recorded against the estimate.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A ranked well work register exists with estimated gain and cost for every candidate and actual results recorded for completed jobs."
                cadence: rolling
              tasks:
                - "Collect well work ideas from engineers, operators and old reports"
                - "Estimate gain, cost and chance of success for each candidate"
                - "Re-rank the register and record results of completed jobs @recurring(monthly:18)"
                - "Agree the top five candidates with the asset lead"
            - name: Annual reserves and resources update
              description: |-
                ## Purpose
                Reserves figures feed corporate reporting, partner agreements and investment decisions, and they are audited. Preparing the yearly update against the classification system your company uses, commonly the SPE Petroleum Resources Management System, with every change from last year explained by category, makes the review and any external audit straightforward.

                ## Milestones
                1. The classification system and internal guidelines in use confirmed for this year.
                2. Volumes by reservoir and category updated with the methods recorded.
                3. A reconciliation from last year's figures by production, revisions, additions and other changes.
                4. Supporting files organised so a reviewer can trace each number.

                ## Notes
                Reserves booking rules and disclosure duties are set by your company's policy and the applicable securities or regulatory rules. Follow your reserves coordinator and do not book volumes outside that process.
              priority: high
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "This year's reserves update is submitted on the internal deadline with a category reconciliation and traceable supporting files."
                cadence: cyclic
              tasks:
                - "Ask the reserves coordinator for this year's guidelines and timeline"
                - "Update volumes by reservoir and category with methods noted"
                - "Reconcile this year's figures with last year's by change category"
                - "Start the reserves update file and confirm the internal deadline @recurring(yearly)"
            - name: Production database housekeeping
              description: |-
                ## Purpose
                Wrong well status codes, duplicate test entries and missing downtime reasons quietly corrupt every forecast and loss report built on the database. A monthly half-day spent on data quality checks, with fixes routed to the data owner, keeps the production database something the whole asset can rely on.

                ## Milestones
                1. A list of standard checks: status codes, missing tests, negative volumes and downtime without a reason.
                2. The checks run monthly with errors logged.
                3. Corrections made by the data owner and confirmed.
                4. Error counts trended so recurring problems are visible.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Standard data quality checks have been run for six months, with error counts trended and each error corrected or explained."
                cadence: rolling
              tasks:
                - "Write the list of data quality checks for the production database"
                - "Run the checks and log the errors found @recurring(monthly:25)"
                - "Send each error to the data owner with the correct value"
            - name: Material balance analysis practice
              description: |-
                ## Purpose
                Material balance is the oldest independent check on volumes in place and drive mechanism, and it needs only production, pressure and PVT data. Working one reservoir through from data preparation to a Havlena and Odeh plot builds the instinct to question a simulation model that disagrees with simple physics.

                ## Milestones
                1. Pressure history and cumulative production assembled for one reservoir.
                2. PVT properties prepared at each pressure point.
                3. A material balance plot built and the drive mechanism interpreted.
                4. Original volume in place estimated and compared with the volumetric figure.
                5. The comparison reviewed with a senior reservoir engineer.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A completed material balance for one reservoir, with drive mechanism interpreted and volume in place compared with volumetrics, is reviewed by a senior engineer."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Choose a reservoir with a reasonable pressure history"
                - "Assemble cumulative production and average pressure by date"
                - "Build the material balance plot in a spreadsheet or tool"
                - "Book an hour with a senior engineer to review your interpretation"
            - name: Nodal analysis and inflow performance modelling
              description: |-
                ## Purpose
                Most production questions, from choosing a tubing size to diagnosing a declining well, come down to where inflow meets outflow. Building and calibrating a nodal model for three wells of different types teaches you which inputs dominate, and gives you models you will reuse for lift design and debottlenecking.

                ## Milestones
                1. Three wells chosen: one naturally flowing, one on lift, one with a known problem.
                2. Inflow models built from test data and reservoir pressure.
                3. Outflow models calibrated to recent tests within an agreed tolerance.
                4. One sensitivity run for each well, such as tubing size, wellhead pressure or skin.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Calibrated nodal models for three wells match recent tests within the agreed tolerance, each with one documented sensitivity."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Pick three wells with recent valid tests and known completions"
                - "Build inflow models from test rates and reservoir pressure"
                - "Calibrate the outflow correlation to the latest test for each well"
                - "Run one sensitivity per well and write what it shows"
            - name: Pressure transient analysis fundamentals
              description: |-
                ## Purpose
                Build-up and fall-off tests tell you permeability, skin, boundaries and average pressure, but only if the derivative plot is read correctly and the test was designed well. Working through two or three real tests from your field, and comparing your interpretation with the one on file, turns a black-box software output into something you can defend.

                ## Milestones
                1. The theory of the log-log derivative plot and common flow regimes studied.
                2. Two historical tests reinterpreted from raw gauge data.
                3. Your results compared with the original interpretations, with differences explained.
                4. A test design drafted for an upcoming survey, with duration justified.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two field tests have been reinterpreted from raw data and a test design with justified duration has been reviewed by a reservoir engineer."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Study derivative plot flow regimes from a standard well testing text"
                - "Find raw gauge data for two past build-up tests"
                - "Reinterpret both tests and compare with the reports on file"
                - "Draft a test design for the next planned pressure survey"
            - name: Log interpretation for petroleum engineers
              description: |-
                ## Purpose
                Reservoir and production engineers rely on petrophysicists' answers but are often the ones deciding where to perforate or which zone is watering out. Learning to read gamma ray, resistivity, density and neutron logs, and to sanity-check porosity and saturation figures, lets you ask better questions and catch the occasional wrong zone before the perforating gun fires.

                ## Milestones
                1. The main log curves and what each responds to understood.
                2. Five wells' logs read with net pay and contacts marked independently.
                3. Your picks compared with the petrophysicist's, with differences discussed.
                4. A short personal checklist for reviewing a perforation proposal against logs.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Independent net pay and contact picks on five wells are compared with the petrophysicist's interpretation and a log review checklist is written."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask a petrophysicist for a one-hour walk through a typical log"
                - "Pick net pay and fluid contacts on five wells yourself"
                - "Compare your picks with the official interpretation"
                - "Write a checklist for reviewing perforation intervals against logs"
            - name: Drilling engineering basics for non-drillers
              description: |-
                ## Purpose
                Reservoir and production engineers who understand the pore pressure and fracture gradient window, casing design and kick tolerance write better well objectives and fewer impossible requests. Sitting with the drilling team through one well design and reading its programme end to end gives you that understanding without changing discipline.

                ## Milestones
                1. The pore pressure, fracture gradient and mud weight window for one planned well explained to you by a drilling engineer.
                2. The casing design and the reasons for each setting depth understood.
                3. The well programme read end to end with questions noted.
                4. One well objective you would now phrase differently written down.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One full drilling programme has been read and discussed with its drilling engineer, with your questions and answers recorded."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask the drilling team for a recent well programme to read"
                - "Book a session to walk through the mud weight window and casing points"
                - "Note every section of the programme you could not follow"
                - "Write how you would now phrase the subsurface objectives"
            - name: Reviewing an inherited reservoir simulation model
              description: |-
                ## Purpose
                Many engineers inherit a simulation model and are asked to run forecasts from it the same week. Learning a structured review, covering grid, properties, PVT, relative permeability, aquifer, well controls and history match quality, tells you whether its forecasts deserve the confidence people place in them and where to spend effort first.

                ## Milestones
                1. The model's documentation and history match report located.
                2. A review checklist applied to grid, rock and fluid properties, aquifer and well controls.
                3. History match quality assessed by well and by field for rates and pressures.
                4. A short memo listing the model's strengths, weaknesses and safe uses.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A model review memo covering inputs, history match quality and fit-for-purpose limits is issued to the reservoir team lead."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Find the model's build documentation and last history match report"
                - "Check the PVT and relative permeability tables against source data"
                - "Plot simulated against observed rates and pressures for key wells"
                - "Ask the agent to draft the review memo from your checklist notes"
            - name: Production chemistry and flow assurance awareness
              description: |-
                ## Purpose
                Scale, wax, asphaltenes, hydrates and corrosion cause a large share of production losses and failed interventions, and the production engineer is often first to notice them. Learning the signs, the sampling that confirms each one and who in the organisation owns the treatment lets you act early instead of after a tubing string plugs.

                ## Milestones
                1. The field's known flow assurance risks listed from past reports.
                2. Field signs and confirming tests for each risk written in a one-page guide.
                3. Water and deposit sampling routines in place for at-risk wells.
                4. The chemical treatment owner and supplier contacts recorded.

                ## Notes
                Chemical selection and dosing are for the production chemist and the supplier. Your job is to spot, sample and escalate.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page flow assurance guide for the field, with signs, confirming tests and owners, is shared with the production team."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Read the last three failure or intervention reports mentioning deposits"
                - "List the field's flow assurance risks and how each shows up"
                - "Agree water and deposit sampling for wells at risk"
                - "Record who owns chemical treatment and how to reach them"
            - name: Petroleum economics for well proposals
              description: |-
                ## Purpose
                Investment committees judge a well proposal on net present value, payout, unit cost and risk, not on barrels alone, and it competes for capital with every other well and project. Learning your company's economic model, its price and cost assumptions and how fiscal terms apply lets you build proposals that survive that review.

                ## Milestones
                1. The company's economics template and current planning assumptions obtained.
                2. The fiscal terms that apply to your licence summarised with help from the commercial team.
                3. Economics run for one past well and compared with its original proposal.
                4. Sensitivities to price, rate and cost presented on one chart.

                ## Notes
                Use the planning assumptions your commercial team issues. This is project economics for internal decisions, not personal investment advice.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Economics for one past well are rerun on the current template, compared with the original proposal and reviewed by the commercial team."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Ask the commercial team for the economics template and assumptions"
                - "Summarise the fiscal terms that apply to your licence"
                - "Rerun the economics for a well drilled in the last three years"
                - "Build a sensitivity chart for price, rate and cost"
            - name: Artificial lift selection for a candidate well
              description: |-
                ## Purpose
                Choosing between gas lift, electric submersible pumps, rod pumps or progressive cavity pumps depends on rate, depth, gas, sand, deviation, power and the support available locally. A structured comparison for one real candidate well, with the operating cost and run life evidence from your own field, produces a decision that operations will back and maintenance can support.

                ## Milestones
                1. Well conditions summarised: rate target, depth, deviation, gas, sand and water cut.
                2. Each feasible lift type screened against those conditions.
                3. Capital, operating cost and expected run life compared for the shortlisted types.
                4. A recommendation agreed with operations and maintenance and recorded.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A lift selection note comparing at least three types on conditions, cost and run life ends in a recommendation signed off by operations."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Summarise the candidate well's rate target and operating conditions"
                - "Screen each lift type against those conditions"
                - "Compare cost and field run life for the shortlisted types"
                - "Present the recommendation to operations and maintenance"
            - name: Workover or recompletion proposal
              description: |-
                ## Purpose
                Engineers, operations, finance and sometimes partners all have to be persuaded that a workover is safe, the gain is real and the risk is understood. Writing one complete proposal, from problem statement through the job outline, expected gain, cost, risks and approvals, is the clearest test of whether you can turn surveillance into action.

                ## Milestones
                1. The problem stated with evidence from tests, logs and history.
                2. The proposed job outlined with a current wellbore diagram.
                3. Expected gain, cost, economics and chance of success shown.
                4. Key risks and their mitigations listed, including well control and integrity.
                5. The proposal approved or returned with comments recorded.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A complete workover proposal with evidence, job outline, economics and risks is submitted through the approval route and its outcome recorded."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Choose the top candidate from the well work register"
                - "Assemble test, log and history evidence for the problem"
                - "Draft the job outline with the well services or intervention engineer"
                - "Submit the proposal through the approval route"
            - name: Waterflood performance review
              description: |-
                ## Purpose
                A waterflood that looked fine at field level can hide injectors feeding a thief zone and producers that never see support. Reviewing voidage replacement, injector performance plots and producer response pattern by pattern shows where water is doing useful work and where it is just being recycled at cost.

                ## Milestones
                1. Voidage replacement ratio calculated by pattern and for the field.
                2. Hall plots or injectivity trends built for every injector.
                3. Producer response mapped to supporting injectors.
                4. Underperforming patterns listed with proposed changes to rates, conformance or pattern.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A pattern-by-pattern waterflood review with voidage replacement, injector plots and recommended changes is presented to the asset team."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Calculate voidage replacement by pattern for the last year"
                - "Build a Hall plot or injectivity trend for each injector"
                - "Map which producers respond to which injectors"
                - "Propose changes for the three weakest patterns"
            - name: Infill drilling candidate screening
              description: |-
                ## Purpose
                Infill wells are among the largest decisions a mature field makes, and screening them on bypassed volumes, pressure support, offset well performance and drilling risk avoids drilling into drained or watered-out rock. A consistent screening sheet lets you compare candidates fairly and bring only the strongest to a full well proposal.

                ## Milestones
                1. Candidate locations listed with the reason each was proposed.
                2. Remaining volumes, pressure and offset performance estimated for each.
                3. Drilling and completion risks noted with the drilling team.
                4. Candidates ranked and the top two taken forward to proposal.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A screening sheet scores every infill candidate on volumes, pressure, offsets and risk, and the top two are agreed for full proposals."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "Collect infill ideas from the geologist and reservoir model"
                - "Estimate remaining volumes and pressure at each location"
                - "Review offset well performance near each candidate"
                - "Rank candidates and agree two for full proposals"
            - name: Sand management strategy review
              description: |-
                ## Purpose
                Sand production erodes chokes and pipework, fills separators and wells, and can end a completion early, while over-restricting rates to avoid it costs oil every day. Reviewing which wells produce sand, at what drawdown, and whether the field's sand control and monitoring still fit, gives an agreed maximum sand-free rate and a clear escalation route.

                ## Milestones
                1. Wells with sand history listed with drawdown, rates and erosion events.
                2. Current sand control completions and monitoring equipment inventoried.
                3. A sand-free rate or drawdown limit proposed for each sanding well.
                4. The strategy agreed with operations and integrity, with alarm and response actions.

                ## Notes
                Start from the **Risk register** template to track wells where sand threatens integrity.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A sand management note with well limits, monitoring and response actions is agreed with operations and the integrity engineer."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "List wells with sand production or erosion events in two years"
                - "Inventory sand control completions and sand detectors"
                - "Propose a drawdown or rate limit for each sanding well"
                - "Agree alarm levels and response actions with operations"
            - name: Deferred production loss analysis
              description: |-
                ## Purpose
                Every field loses production to trips, shut-ins, maintenance, export limits and well problems, but few teams know which causes cost most over a year. Categorising a year of deferment and ranking it by volume points improvement effort at the losses that matter, not the ones that cause the most noise.

                ## Milestones
                1. Loss categories agreed with operations and planning.
                2. Twelve months of deferment classified by category and cause.
                3. A ranked chart of losses by volume and frequency.
                4. Three improvement actions agreed for the largest causes, each with an owner.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A year of deferred production is classified and ranked, and three improvement actions with owners are agreed for the largest causes."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Agree loss categories with operations and planning"
                - "Export twelve months of downtime and loss records"
                - "Classify and rank losses by volume"
                - "Present the top causes and proposed actions to the asset lead"
            - name: Idle well and abandonment candidate review
              description: |-
                ## Purpose
                Shut-in and suspended wells carry integrity risk, regulatory obligations and a growing abandonment liability, yet they sit on the books for years by default. Reviewing each idle well for reactivation potential, integrity status and abandonment requirements produces a decision per well and a defensible plan to put to management and the regulator.

                ## Milestones
                1. Every idle well listed with years shut in, last integrity status and reason.
                2. Reactivation potential estimated for each, with cost.
                3. Wells recommended for plug and abandonment grouped into a campaign.
                4. Regulatory notification or approval steps for abandonment identified.

                ## Notes
                Abandonment design, barrier requirements and regulatory approvals follow your company's well standards and the regulator's rules. Bring in the well engineering team early.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each idle well has a recorded decision to reactivate, keep suspended or abandon, with abandonment candidates grouped into a proposed campaign."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "List every idle well with shut-in date and reason"
                - "Check the last integrity status recorded for each idle well"
                - "Estimate reactivation cost and potential for each candidate"
                - "Group abandonment candidates and list the regulator's approval steps"
            - name: New well proposal and basis of well design
              description: |-
                ## Purpose
                A new well starts with a subsurface team writing down what the well must achieve: targets, tolerances, data to acquire, expected pressures and fluids, and completion needs. A clear basis of design handed to the drilling team on time is what lets them produce a safe, costed well programme, and it is where most later surprises can be prevented.

                ## Milestones
                1. Well objectives, targets and target tolerances agreed with the geologist.
                2. Expected pore pressure, temperature, fluids and hazards such as hydrogen sulphide documented.
                3. Data acquisition requirements and completion concept written down.
                4. Economics and chance of success approved through the investment route.
                5. The basis of design signed and handed to the drilling team.

                ## Notes
                Write the hazards section with the drilling team, not for them. Shallow gas, losses and offset well kicks belong in it.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A signed basis of well design covering objectives, pressures, hazards, data and completion concept is handed to drilling by the agreed date."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Agree well objectives and target tolerances with the geologist"
                - "Collect offset well pressures, problems and hazards"
                - "Write data acquisition and completion requirements"
                - "Hand the signed basis of design to the drilling team"
            - name: Drill the well on paper before spud
              description: |-
                ## Purpose
                A drill-the-well-on-paper session walks the whole operation step by step with the rig crew, service companies and subsurface team before spud, and it is where most misunderstandings about casing points, contingencies and decision triggers surface. Preparing your part properly, and capturing every action, is one of the most valuable days in a well's life.

                ## Milestones
                1. The well programme and contingency plans reviewed with your questions sent ahead.
                2. Subsurface decision points, such as casing point picks and coring triggers, written as clear criteria.
                3. The session held with actions recorded against owners.
                4. All actions closed before spud and the programme revised where needed.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The drill-the-well-on-paper session is held before spud, with subsurface decision criteria written and every action closed before drilling starts."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Read the draft well programme and contingency plans"
                - "Write subsurface decision criteria for casing points and data triggers"
                - "Attend the session and record actions with owners"
                - "Confirm every action is closed before spud"
            - name: Completion or well test programme execution
              description: |-
                ## Purpose
                When a well is completed or tested, the engineer who wrote the programme is expected to be reachable, follow the operation and make calls quickly against agreed criteria. Preparing a decision sheet, checking the programme against the final well status and capturing what actually happened produces a clean job and an accurate record.

                ## Milestones
                1. The programme rechecked against final depths, logs and wellbore diagram.
                2. A decision sheet with go and no-go criteria agreed with the wellsite supervisor.
                3. Daily reports reviewed and decisions recorded through the operation.
                4. A job summary issued within two weeks of completion.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The completion or test is carried out against an agreed decision sheet and a job summary is issued within two weeks."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "Recheck the programme against final logs and depths"
                - "Agree go and no-go criteria with the wellsite supervisor"
                - "Review each daily report and log any decisions made"
                - "Issue the job summary with actual depths and results"
            - name: Post-well review and lessons learned
              description: |-
                ## Purpose
                The weeks after a well is finished are the only time people remember why each decision was made. A structured post-well review comparing planned and actual time, cost, depths, data and production, with lessons written as changes to standards or programmes, makes the next well cheaper and safer.

                ## Milestones
                1. Planned against actual time, cost, targets and results tabulated.
                2. A review meeting held with drilling, subsurface, completions and operations.
                3. Lessons written as specific changes, each with an owner.
                4. Lessons entered in the company's lessons learned system and linked to the next well.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A post-well review report compares plan with actual and lists lessons as owned changes, entered in the lessons system within 45 days."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Tabulate planned against actual time, cost and results"
                - "Book the review meeting with every discipline involved"
                - "Write each lesson as a specific change with an owner"
                - "Enter the lessons in the company system and tag the next well"
            - name: Annual field development plan and budget submission
              description: |-
                ## Purpose
                Each year the asset has to say what it will drill, work over, spend and produce, and the petroleum engineers supply most of the numbers. Preparing your share early, with forecasts, well work, data acquisition and abandonment all on one consistent basis, avoids the last-week scramble and the inconsistencies reviewers find.

                ## Milestones
                1. Planning assumptions and the submission timeline received.
                2. Production forecast, well work programme and data plan aligned to the same assumptions.
                3. Costs and risks for each activity included.
                4. Your section reviewed and submitted on the internal deadline.

                ## Notes
                Where a licence requires an annual work programme to be filed with the regulator, add its due date to the regulatory register.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Your section of the annual plan, with forecast, well work, data plan and costs on one consistent basis, is submitted by the internal deadline."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Ask planning for this year's assumptions and timeline"
                - "Align the forecast and well work programme to those assumptions"
                - "Add costs and risks for each planned activity"
                - "Submit your section for review before the internal deadline"
            - name: Technical paper or conference presentation
              description: |-
                ## Purpose
                Presenting at a petroleum engineering society meeting or conference forces you to understand your own work well enough to explain it to strangers, and it builds a reputation beyond your company. Choosing a completed study, getting disclosure approval early and writing to the conference's deadlines turns a good piece of work into a citable paper.

                ## Milestones
                1. A completed study chosen and the abstract drafted.
                2. Internal and partner disclosure approval obtained before submission.
                3. The abstract submitted to a conference or society meeting.
                4. The paper or presentation delivered and filed in your development record.

                ## Notes
                Data from operated assets usually needs management and partner approval to publish. Ask before you write the abstract.
              priority: low
              deadlineOffsetDays: 240
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A paper or presentation, approved for disclosure, is accepted and delivered at a petroleum engineering conference or society meeting."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Pick a finished study with a clear lesson for other engineers"
                - "Ask your manager how to get disclosure approval"
                - "Draft an abstract to the conference's word limit"
                - "Submit the abstract before the call for papers closes"
            - name: First-year rotation plan for a graduate petroleum engineer
              description: |-
                ## Purpose
                Graduate petroleum engineers often rotate between reservoir, production and drilling or a field placement, and a rotation without clear goals becomes a year of watching. A plan that names the deliverable and the skills for each rotation, with a mentor in each team, gives you real work to show at the end and a better basis for choosing a discipline.

                ## Milestones
                1. Rotations and their dates agreed with your graduate programme lead.
                2. A deliverable and three skills named for each rotation.
                3. A mentor confirmed in each team before you arrive.
                4. A short end-of-rotation summary written and reviewed for each placement.

                ## Notes
                Start from the **Development plan** template and keep it alongside your competence record.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A rotation plan naming a deliverable, three skills and a mentor for each placement is agreed, with an end-of-rotation summary filed for each one."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Confirm rotation dates with your graduate programme lead"
                - "Write a deliverable and three skills for each rotation"
                - "Ask each team lead to name a mentor before you start"
                - "Write a one-page summary at the end of each rotation"
            - name: Rotational field engineer handover routine
              description: |-
                ## Purpose
                Engineers on a fixed rotation, such as two weeks on and two off, hand their wells to a back-to-back colleague every cycle, and poor handovers are where actions and well problems fall through. A standard handover note covering well status, open actions, planned jobs and safety issues, discussed in person or on a call, keeps continuity without either of you working on your days off.

                ## Milestones
                1. A handover note format agreed with your back-to-back.
                2. Each handover covers well status changes, open actions, planned work and safety items.
                3. A short handover call held at every crew change.
                4. Actions carried across rotations tracked to closure.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For three rotations in a row, a handover note is written in the agreed format and discussed with your back-to-back at crew change."
                cadence: rolling
              tasks:
                - "Agree a handover note format with your back-to-back"
                - "Write the handover note on the last day of each hitch"
                - "Hold a handover call at crew change @recurring(monthly:14)"
                - "Check actions handed over last time are closed or carried"
            - name: Moving from a service company to an operator role
              description: |-
                ## Purpose
                Engineers moving from a service company, where they ran one product line or job type, to an operator, where they own the well and the decision, often find the new job is less about execution and more about judgement, economics and managing contractors. A structured first 90 days that rebuilds your network and learns the asset closes that gap quickly.

                ## Milestones
                1. Key contacts across subsurface, drilling, operations and commercial met in the first month.
                2. The asset's wells, data and decision processes learned.
                3. One owned deliverable completed by day 60.
                4. A 90-day review with your manager held and agreed next goals recorded.

                ## Notes
                Start from the **Onboarding 30/60/90** template. The same plan works in reverse when moving from an operator to a service company.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A 30, 60 and 90 day plan is completed with one owned deliverable by day 60 and a recorded 90-day review with your manager."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List twelve people across disciplines to meet in month one"
                - "Agree one owned deliverable with your manager for day 60"
                - "Write down how well decisions are approved at the new company"
                - "Book the 90-day review with your manager"
            - name: Independent petroleum engineering consulting practice
              description: |-
                ## Purpose
                Experienced petroleum engineers often move into contract or consulting work on studies, reserves reviews or well campaigns. Setting up clear scopes of work, data confidentiality terms, professional indemnity cover and a method for documenting assumptions protects both you and the client when your numbers end up in someone else's decision.

                ## Milestones
                1. A standard scope of work and assumptions log format ready.
                2. Confidentiality and data handling terms agreed for each client.
                3. Professional indemnity insurance in place, with cover checked by a broker.
                4. A file structure that keeps each client's data separate and returnable.

                ## Notes
                Get contract and insurance terms reviewed by a lawyer and a broker; the right cover depends on your country and the work.
              priority: low
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A scope template, assumptions log, confidentiality terms and indemnity cover are in place before the first consulting engagement starts."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Draft a standard scope of work with deliverables and exclusions"
                - "Create an assumptions log to attach to every deliverable"
                - "Ask a broker about professional indemnity cover for your work"
                - "Set up a separate folder structure for each client's data"
            - name: Stepping up to subsurface or asset team lead
              description: |-
                ## Purpose
                Becoming a team lead means your output is now the team's forecasts, well proposals and reserves, and your time goes into review, prioritisation and people. Setting a review standard, a regular one-to-one rhythm and a shared work plan early stops you trying to do every calculation yourself while the team waits.

                ## Milestones
                1. A team work plan showing each engineer's deliverables and dates.
                2. A review standard for forecasts, proposals and reserves written down.
                3. Regular one-to-ones held with each engineer.
                4. A development goal agreed with each team member.

                ## Notes
                Keep notes from each one-to-one in the same place so follow-ups do not depend on memory.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A team work plan and review standard exist, and every engineer has monthly one-to-ones and an agreed development goal."
                cadence: rolling
              tasks:
                - "Map each engineer's current deliverables and deadlines"
                - "Write a one-page review standard for team deliverables"
                - "Hold a one-to-one with each engineer @recurring(monthly:10)"
                - "Agree one development goal with every team member"
            - name: Enhanced oil recovery screening study
              description: |-
                ## Purpose
                Mature oilfields eventually ask whether gas injection, chemical flooding, thermal methods or low salinity water could add recovery. A screening study that tests each reservoir against published screening criteria, then estimates incremental recovery and the data still needed, tells management whether a pilot is worth funding before anyone commits to a full study.

                ## Milestones
                1. Reservoir and fluid properties assembled for each candidate reservoir.
                2. EOR methods screened against published criteria with reasons for rejection.
                3. Incremental recovery estimated for the methods that pass, with ranges.
                4. Data gaps and a possible pilot scope written into a recommendation.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A screening report ranks EOR methods for each candidate reservoir with recovery ranges and a recommendation on whether to fund a pilot study."
                cadence: phased
                effort_hours_estimate: "50"
              tasks:
                - "Assemble rock and fluid properties for each candidate reservoir"
                - "Screen each EOR method against published criteria"
                - "Estimate incremental recovery ranges for the methods that pass"
                - "Write the recommendation on whether to fund a pilot"
            - name: Integrated asset model linking reservoir, wells and network
              description: |-
                ## Purpose
                When a field is limited by its surface network or compression, well-by-well models miss the interactions: opening one well can back out another. An integrated asset model that couples reservoir, well and network models answers questions about compression, debottlenecking and new tie-ins with one consistent set of numbers.

                ## Milestones
                1. Calibrated well models and a network model for the gathering system assembled.
                2. Reservoir models or tank models linked to the well models.
                3. The integrated model matched to a recent period of field production and pressures.
                4. Two business questions answered with the model and the results documented.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An integrated asset model matches a recent production period within agreed tolerance and has answered two documented business questions."
                cadence: phased
                effort_hours_estimate: "80"
              tasks:
                - "List the business questions the integrated model must answer"
                - "Gather calibrated well models and network data"
                - "Link reservoir and well models and run a history period"
                - "Document the match quality and the model's limits"
            - name: Probabilistic production forecast with uncertainty ranges
              description: |-
                ## Purpose
                Single-number forecasts hide the real spread in outcomes, and decisions made on them tend to be surprised in one direction. Building low, mid and high cases from the uncertainties that matter, such as volumes, aquifer strength and well performance, gives management a range they can plan against and shows which data would narrow it most.

                ## Milestones
                1. Key uncertainties identified and ranges agreed with geology and reservoir engineering.
                2. A method chosen, such as experimental design or Monte Carlo, and documented.
                3. Low, mid and high forecasts produced with their assumptions.
                4. A ranking of which uncertainties drive the range, presented to the asset team.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A forecast with low, mid and high cases, documented method and an uncertainty ranking is presented to the asset team."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "List the uncertainties that most affect the field forecast"
                - "Agree a range for each with geology and reservoir engineering"
                - "Run the forecast cases with your chosen method"
                - "Present which uncertainties drive the spread and what data would help"
            - name: Peer review of another asset's subsurface work
              description: |-
                ## Purpose
                Senior petroleum engineers are asked to review other teams' forecasts, well proposals and development plans before major decisions. A disciplined peer review, with a clear terms of reference, a consistent checklist and findings graded by consequence, adds real assurance without becoming a second version of the study.

                ## Milestones
                1. Terms of reference agreed with the requesting team: scope, questions and timing.
                2. Key documents and models reviewed against a written checklist.
                3. Findings graded by consequence and discussed with the team before issue.
                4. A short review report issued and responses to each finding tracked.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A peer review report with graded findings is issued against agreed terms of reference, and the team's response to each finding is recorded."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "Agree the terms of reference with the team requesting the review"
                - "Write a checklist matched to the questions in scope"
                - "Discuss draft findings with the team before issuing them"
                - "Track the team's response to each finding until closed"
---

# Petroleum Engineering Practice

This area is for petroleum engineers in reservoir, drilling and production roles, whether you are six months out of university or running the subsurface work on a mature field. It starts with the foundations (your role, a field fact sheet, the well files, units, fluids, the regulatory register and site readiness), moves through the surveillance and reporting routines that keep production honest, then the analysis skills, the decisions about lift, workovers, waterfloods and idle wells, the dated well events from proposal to post-well review, the career situations petroleum engineers meet, and finally specialist work such as EOR screening and integrated asset models.

What repeats is a daily scan of the production report, weekly well reviews with operations, monthly well test, allocation, artificial lift, well integrity and database checks, the regulator's monthly returns, quarterly forecast refreshes and the yearly reserves update and data acquisition plan. The Meeting notes, Metrics log, Risk register, Development plan and Onboarding 30/60/90 templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
