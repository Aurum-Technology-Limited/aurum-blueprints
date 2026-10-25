---
id: engineering-practice.lopa-and-safety-integrity-levels
name: LOPA and Safety Integrity Levels
description: "A working functional safety kit: risk tolerance criteria, LOPA worksheets that hold up to challenge, SIL targets, safety requirements specifications, PFD verification and proof test records that prove each SIF still works."
category: business
version: 1.0.0
tags: [engineering-practice, lopa-and-safety-integrity-levels, engineer, functional-safety, iec-61511, sil-verification, proof-testing, safety-instrumented-systems]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - purchase-decision
    - remediation-plan
    - metrics-log
    - development-plan
  pillars:
    - name: Engineering Practice
      emoji: "🔧"
      description: "The day-to-day work of practising engineers: each major discipline, process safety and risk studies, FEED, design reviews, commissioning, reliability and maintenance, CAD, simulation and PLC work, project delivery, tenders, reports, ethics and standards, and the Caribbean energy sector from Point Lisas to LNG."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: LOPA and Safety Integrity Levels
          description: "Assessing protection layers and safety integrity levels: LOPA worksheets, SIL targets, safety instrumented function design, verification and proof testing records."
          projects:
            - name: Functional safety standards shelf for IEC 61511 work
              description: |-
                ## Purpose
                Arguments in a LOPA session often come down to which edition of which standard the site follows, and nobody can find a copy. Assembling IEC 61511 parts 1 to 3, the relevant parts of IEC 61508, your company's functional safety procedures and the LOPA guidance your site recognises, with editions recorded, settles those arguments before they start.

                ## Milestones
                1. Current editions of IEC 61511 parts 1 to 3 and the IEC 61508 parts you use held in a controlled location.
                2. The LOPA guidance book or company standard the site follows identified by title and edition.
                3. A one-page index listing each document, its edition and which clauses you refer to most.
                4. Any older editions still cited in existing SIL studies flagged for later revalidation.

                ## Notes
                Buy licensed copies through your company's standards subscription rather than circulating PDFs. Note which edition each existing study was done to, because the requirements changed between editions.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An index of every functional safety standard and guide the site uses, with edition numbers, sits beside licensed copies in one controlled folder."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the document controller which functional safety standards the site subscribes to"
                - "List the edition of IEC 61511 each existing SIL study was performed against"
                - "Locate the LOPA guidance book or company standard the site recognises"
                - "Write the one-page standards index and save it beside the copies"
            - name: Site risk tolerance criteria for LOPA
              description: |-
                ## Purpose
                Every LOPA gap and every SIL target depends on a tolerable frequency for each consequence category, yet many sites run studies against numbers nobody remembers approving. Getting the criteria written, justified and signed by the accountable manager means each SIL target can be traced to a decision rather than a habit.

                ## Milestones
                1. Consequence categories for safety, environment and asset loss defined in plain terms with examples.
                2. A tolerable event frequency agreed for each category, with the source or rationale noted.
                3. Rules written for how multiple fatality potential and off-site impact change the target.
                4. The criteria approved by the accountable manager and issued under a document number.

                ## Notes
                Risk criteria are a corporate decision, not an engineering preference. Your job is to prepare the proposal and the evidence, and the accountable manager signs it.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A signed risk tolerance document gives a tolerable frequency for every consequence category used in LOPA, with its basis stated."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Find the risk matrix and tolerable frequencies the last LOPA study used"
                - "Compare them against your corporate risk policy and note any mismatch"
                - "Draft consequence category definitions with one worked example each"
                - "Book a review with the accountable manager to approve the criteria"
                - "Check the criteria against any regulator or corporate update @recurring(yearly)"
            - name: Safety instrumented function register baseline
              description: |-
                ## Purpose
                Most sites have more trips than they think and fewer documented SIFs than they need. A single register listing every SIF with its tag, hazard reference, SIL target, achieved PFD, test interval and owner becomes the backbone for proof testing, bypass control and every later revalidation.

                ## Milestones
                1. Every trip in the safety logic solver reviewed and classed as SIF, safety-related alarm or process trip.
                2. Each SIF listed with initiator tags, logic, final elements, SIL target and LOPA scenario reference.
                3. Achieved PFDavg, proof test interval and last test date recorded for each SIF.
                4. A named owner assigned to every SIF and the register placed under document control.

                ## Notes
                Start from the **Risk register** template if you have no database yet. Trips with no LOPA scenario behind them are the first gap list, not something to hide.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A controlled SIF register lists every safety instrumented function with SIL target, achieved PFD, test interval and owner, and every trip in the logic solver is classified."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Export the trip list and cause and effect charts for one process unit"
                - "Match each trip to its HAZOP or LOPA scenario reference"
                - "Fill in SIL target, PFD and proof test interval for each SIF"
                - "Assign an owner to each SIF and issue the register for comment"
            - name: Screening HAZOP scenarios into a LOPA candidate list
              description: |-
                ## Purpose
                Not every HAZOP line needs a LOPA, and pushing hundreds of scenarios through the method wastes the team's patience. A screening rule, applied consistently to the HAZOP worksheets, produces a short list of high consequence scenarios with clear cause and consequence pairs that are ready for analysis.

                ## Milestones
                1. A written screening rule stating which consequence severities and safeguard types go forward to LOPA.
                2. The HAZOP worksheets screened and every candidate scenario given a LOPA reference.
                3. Each candidate restated as one initiating cause leading to one consequence.
                4. Scenarios screened out listed with the reason, so the decision can be audited.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A LOPA candidate list derived from the latest HAZOP gives every scenario a single cause and consequence pair, with screened-out scenarios and reasons recorded."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Get the latest HAZOP worksheets and action register for the unit"
                - "Write the screening rule as three or four plain sentences"
                - "Split any combined HAZOP causes into separate LOPA scenarios"
                - "Record each screened-out scenario with the reason it was dropped"
            - name: Initiating event frequency reference table
              description: |-
                ## Purpose
                Two facilitators on the same site can assign a control loop failure a frequency of once a year or once in ten years and both claim it is standard. A site table of initiating event frequencies, each with its source and any site data that adjusts it, makes LOPA results consistent across studies and defensible in audit.

                ## Milestones
                1. A list of common initiating events, such as BPCS loop failure, pump stop, operator error and loss of utilities.
                2. A default frequency for each, with the published source or site data reference.
                3. Rules for when a frequency may be adjusted, and who can approve the adjustment.
                4. The table issued and referenced in the LOPA procedure.

                ## Notes
                Where site failure history exists, compare it to the published value. Using a lower frequency than your own records show is a common finding in audits.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An issued initiating event table gives every common cause a default frequency with a cited source, and the LOPA procedure refers to it."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List the initiating events used in the last three LOPA studies"
                - "Note the frequency each study used and where it came from"
                - "Pull site trip and failure history for the five most common causes"
                - "Draft the table with sources and send it to the process safety lead"
            - name: Independent protection layer credit rules
              description: |-
                ## Purpose
                LOPA only works if a layer claimed as an IPL is effective, independent of the cause and the other layers, and auditable. Writing the site rules for what qualifies, and the PFD each type may claim, stops teams crediting the same transmitter twice or counting a procedure nobody follows.

                ## Milestones
                1. The tests for effectiveness, independence and auditability written with an example of each.
                2. Default PFD credits listed for relief devices, BPCS functions, alarms with operator response, check valves and passive barriers.
                3. Limits stated for BPCS credit when the BPCS loop is also the initiating cause.
                4. The rules issued as part of the LOPA procedure and briefed to regular facilitators.

                ## Notes
                IEC 61511 places limits on how much risk reduction can be claimed from the BPCS. Check your edition and write the limit into the rule in plain words.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Approved IPL credit rules state the qualifying tests and default PFD for every layer type the site uses, and are part of the issued LOPA procedure."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Review three past LOPA worksheets for layers that would fail the independence test"
                - "Write the three qualifying tests with a site example for each"
                - "Agree default PFD credits for each layer type with the process safety lead"
                - "Brief the rules to the engineers who facilitate LOPA most often"
            - name: Conditional modifiers and enabling conditions rules
              description: |-
                ## Purpose
                Probability of ignition, probability of a person being present and time at risk can each cut the required risk reduction by a factor of ten, which is why they are the most abused numbers in LOPA. Clear rules for when they may be used, with conservative defaults, keep SIL targets honest.

                ## Milestones
                1. Each modifier the site allows listed with its definition and default value.
                2. Rules stating when a modifier must not be used, such as occupancy credit on a scenario that brings people to the area.
                3. Enabling conditions, such as seasonal or batch operation, separated from conditional modifiers.
                4. The rules agreed and added to the LOPA procedure.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The LOPA procedure contains a table of allowed conditional modifiers with defaults and exclusions, agreed by the process safety lead."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Count how often each modifier appears in recent LOPA worksheets"
                - "Pick three scenarios where a modifier changed the SIL target and check the justification"
                - "Draft default values and exclusion rules for each modifier"
                - "Send the draft to the process safety lead for agreement"
            - name: LOPA worksheet and calculation checks
              description: |-
                ## Purpose
                A spreadsheet LOPA with a broken formula can understate a gap by an order of magnitude and nobody notices until an auditor recalculates it. A locked worksheet with consistent columns, built-in checks and a worked example gives every study the same structure and arithmetic you can trust.

                ## Milestones
                1. One worksheet layout agreed, with columns for cause, frequency, IPLs, modifiers, mitigated frequency and target.
                2. Formulas locked and protected, with a check that flags missing frequencies or credits.
                3. A worked example scenario included and hand-checked against the worksheet result.
                4. The worksheet issued under version control with a change log.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A version-controlled LOPA worksheet with locked formulas reproduces a hand-checked worked example exactly."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Collect the LOPA worksheets used on the last three studies"
                - "Agree one column layout with the process safety lead"
                - "Build the locked worksheet with a missing-data check"
                - "Hand-check one worked scenario against the worksheet result"
            - name: Functional safety management plan for the site
              description: |-
                ## Purpose
                IEC 61511 expects a plan that names who does what across the safety lifecycle, how competence is assured and when functional safety assessments happen. Many sites have the activities but not the plan, which leaves gaps when people move on and makes the first audit painful.

                ## Milestones
                1. Lifecycle phases listed with the responsible role, deliverable and approval for each.
                2. Competence requirements stated for LOPA facilitators, SIL verifiers and proof testers.
                3. Functional safety assessment stages scheduled with assessor independence defined.
                4. The plan approved by the site manager and placed under document control.

                ## Notes
                Keep the plan short and point to existing procedures. A 15 page plan that is used beats a 90 page plan that sits on a shelf.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An approved functional safety management plan names an owner and deliverable for every lifecycle phase and schedules each assessment stage."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Map existing procedures against the IEC 61511 lifecycle phases"
                - "List each lifecycle phase with its responsible role"
                - "Draft competence requirements for each functional safety role"
                - "Submit the plan to the site manager for approval"
                - "Refresh names, roles and assessment dates in the plan @recurring(yearly)"
            - name: Proof test schedule and overdue tracking
              description: |-
                ## Purpose
                The PFD in every SIL verification assumes the proof test happens on time, so an overdue test quietly erodes the risk reduction the plant is relying on. A schedule tied to the maintenance system, with overdue items escalated every month, keeps the calculated and the real PFD close together.

                ## Milestones
                1. Every SIF proof test loaded into the maintenance system with the interval from its SIL verification.
                2. A monthly report showing tests due, done and overdue by SIF.
                3. An escalation rule agreed for overdue tests, including a risk assessment if deferral is needed.
                4. Overdue proof tests held at zero, or each one covered by an approved deferral.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly proof test report shows every SIF test on time or covered by an approved, risk-assessed deferral."
                cadence: rolling
              tasks:
                - "Compare maintenance system test intervals against the SIF register"
                - "Run the proof test due and overdue report @recurring(monthly:9)"
                - "Raise a deferral risk assessment for any test more than 30 days late"
                - "Present proof test compliance at the quarterly safety meeting @recurring(quarterly)"
            - name: As-found proof test failure review
              description: |-
                ## Purpose
                When a proof test finds a transmitter stuck or a valve that will not close, that result is the most valuable reliability data the site produces, but it is often fixed and forgotten. Reviewing as-found results every month shows whether real failure rates match the assumptions in your SIL calculations.

                ## Milestones
                1. Proof test records capture as-found condition before any adjustment or repair.
                2. Every dangerous failure found in test reviewed and logged against the device type.
                3. Repeat failures on one device type raised for a reliability or design change.
                4. A running count of dangerous failures compared with the failure rate used in verification.

                ## Notes
                Start from the **Metrics log** template to keep the monthly counts. Make sure test sheets ask for as-found results first: a calibrated-then-recorded value hides the failure.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly log records every dangerous failure found in proof testing, with device type, and compares the count against verification assumptions each quarter."
                cadence: rolling
              tasks:
                - "Check that the proof test sheet records as-found values before adjustment"
                - "Review last month's completed proof tests for dangerous failures @recurring(monthly:16)"
                - "Group failures by device type and manufacturer in the log"
                - "Raise a reliability action for any device type failing twice in a year"
            - name: SIF demand and spurious trip log
              description: |-
                ## Purpose
                Each SIF carries an assumed demand rate from LOPA, and if the real plant demands a SIF several times a year it may be operating outside low demand mode. Logging every real demand and every spurious trip tests that assumption with evidence and shows where nuisance trips are tempting operators to bypass.

                ## Milestones
                1. A log capturing every SIF activation with date, cause and whether it was a real demand or spurious.
                2. Real demands compared with the initiating event frequency assumed in LOPA.
                3. Spurious trips traced to their device or logic cause.
                4. Any SIF demanded more often than assumed flagged for LOPA review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every SIF activation is logged and classified each month, and SIFs with demand rates above the LOPA assumption are referred for review."
                cadence: rolling
              tasks:
                - "Pull the sequence of events log for last month's trips @recurring(monthly:21)"
                - "Classify each activation as real demand or spurious trip"
                - "Compare real demand counts with LOPA frequencies @recurring(quarterly)"
                - "Send any SIF exceeding its assumed demand rate to the LOPA owner"
            - name: Bypass hours and their effect on achieved PFD
              description: |-
                ## Purpose
                Two hundred hours a year in bypass means a SIF delivers less risk reduction than its verification claims, and the effect is rarely counted. Totalling bypass hours per SIF each month and feeding them into the PFD shows which functions are genuinely degraded and need compensating measures or a design fix.

                ## Milestones
                1. Bypass hours per SIF extracted each month from the bypass records or logic solver.
                2. A simple method agreed for adding bypass time to achieved PFDavg.
                3. SIFs whose adjusted PFD falls outside their SIL band identified.
                4. Compensating measures or design changes raised for each degraded SIF.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly summary gives bypass hours per SIF and flags any SIF whose bypass-adjusted PFD leaves its SIL band, with an action raised for each."
                cadence: rolling
              tasks:
                - "Agree with operations where bypass start and end times are recorded"
                - "Total bypass hours per SIF for the month @recurring(monthly:26)"
                - "Recalculate PFD for any SIF bypassed more than 50 hours"
                - "Raise a compensating measure action for each degraded SIF"
            - name: Field device failure rate data collection
              description: |-
                ## Purpose
                Generic failure rates from handbooks or certificates are a starting point, but IEC 61511 expects you to show the data you use is credible for your service. Collecting site failure data by device type, quarter by quarter, builds the prior use evidence that later justifies a test interval or a device choice.

                ## Milestones
                1. Device populations counted by type, so failure rates can be calculated per device year.
                2. Failures from proof tests, demands and breakdowns combined into one data set.
                3. Site failure rates compared with the values used in SIL verification.
                4. Device types with enough operating hours documented as prior use candidates.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A quarterly data set gives site failure rates per device type with operating hours, compared against the rates used in SIL verification."
                cadence: rolling
              tasks:
                - "Count installed SIF devices by type and service"
                - "Merge proof test, demand and breakdown failures into one table @recurring(quarterly)"
                - "Compare the site rate with the certificate rate for the top five device types"
                - "Write up any device type with enough service hours for a prior use case"
            - name: Non-SIS protection layer walkdowns
              description: |-
                ## Purpose
                LOPA often leans on relief valves, check valves, dikes and alarms as much as on the SIS, but those layers sit with different maintenance teams and drift out of the condition the study assumed. A monthly walkdown of a few IPLs, against the IPL list, catches gagged relief valves, removed check valves and disabled alarms early.

                ## Milestones
                1. An IPL list extracted from all LOPA studies, with each layer's test or inspection requirement.
                2. A rotation that visits every non-SIS IPL at least once a year.
                3. Each walkdown recorded with condition found and any deviation raised.
                4. IPLs with no maintenance or test task identified and given one.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every non-SIS IPL credited in LOPA has an inspection or test task and has been walked down within the last twelve months."
                cadence: rolling
              tasks:
                - "Extract every non-SIS IPL from the LOPA worksheets into one list"
                - "Walk down five IPLs on the rotation and note their condition @recurring(monthly:12)"
                - "Check each IPL has a maintenance or inspection task in the system"
                - "Raise a deviation for any IPL found disabled or missing"
            - name: LOPA revalidation with the HAZOP cycle
              description: |-
                ## Purpose
                Plants change, failure data accumulates and criteria get updated, so a LOPA done ten years ago may no longer reflect the plant. Revalidating LOPA alongside each HAZOP revalidation keeps SIL targets aligned with the current design, demand history and risk criteria.

                ## Milestones
                1. Changes since the last study listed from MOC records, demand logs and failure data.
                2. Each existing scenario confirmed, updated or retired.
                3. New scenarios from the HAZOP revalidation analysed.
                4. Changed SIL targets fed into the SIF register and SIL verification.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A revalidated LOPA report for the unit is issued within six months of its HAZOP revalidation, with changed SIL targets updated in the SIF register."
                cadence: cyclic
              tasks:
                - "Check which units have a HAZOP revalidation due in the next year @recurring(yearly)"
                - "Collect MOC records and demand history since the last LOPA"
                - "Mark each existing scenario as confirmed, updated or retired"
                - "Update the SIF register with any changed SIL targets"
            - name: Functional safety assessment programme
              description: |-
                ## Purpose
                IEC 61511 calls for functional safety assessments at defined lifecycle stages, carried out by someone with enough independence to challenge the work. Planning stages 1 to 5 across the site's projects and operating units, with assessors booked ahead, avoids the scramble when a start-up date or audit arrives.

                ## Milestones
                1. Every unit and live project mapped to the assessment stages that apply.
                2. Assessor independence rules written and assessors identified for each stage.
                3. A forward schedule of assessments for the next twelve months.
                4. Findings from each completed assessment tracked to closure.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A twelve-month functional safety assessment schedule exists with named assessors, and every finding from completed assessments has an owner and a status."
                cadence: rolling
              tasks:
                - "List live projects and units with the assessment stage each one is at"
                - "Name an independent assessor for each upcoming stage"
                - "Review the assessment schedule and open findings @recurring(quarterly)"
                - "Close or escalate findings older than six months"
            - name: SIS modification impact analysis log
              description: |-
                ## Purpose
                Small changes, such as a new setpoint, a replaced transmitter model or a logic edit, can invalidate a SIL verification, even when the change request was approved for other reasons. Keeping a log that forces a functional safety impact analysis on every SIS modification catches those effects before they reach the logic solver.

                ## Milestones
                1. A trigger list of change types that require a functional safety impact analysis.
                2. A short impact analysis form covering SIL target, PFD, response time and proof test effects.
                3. Every SIS modification for the month checked against the log.
                4. Stage 5 assessment requested where the impact analysis says one is needed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every SIS modification has a completed impact analysis in the log before implementation, checked monthly against the logic solver change record."
                cadence: rolling
              tasks:
                - "Write the trigger list of SIS changes that need an impact analysis"
                - "Draft the one-page impact analysis form"
                - "Reconcile logic solver changes against the impact analysis log @recurring(monthly:4)"
                - "Request a stage 5 assessment for any change that alters a SIL claim"
            - name: Quarterly SIS performance report
              description: |-
                ## Purpose
                Managers rarely see functional safety until something fails, which makes it hard to win budget for test equipment or device changes. A quarterly one-page report on proof test compliance, dangerous failures found, demands, spurious trips and bypass hours puts the SIS on the same footing as production numbers.

                ## Milestones
                1. Five or six measures chosen, each with a definition and data source.
                2. The first quarterly report issued with a trend baseline.
                3. Each red measure carrying a named action and owner.
                4. The report included in the site's quarterly safety review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A one-page SIS performance report with defined measures is issued every quarter and reviewed at the site safety meeting."
                cadence: rolling
              tasks:
                - "Choose the measures and write a one-line definition for each"
                - "Ask the agent to draft the commentary from the quarter's figures"
                - "Issue the SIS performance report to the safety committee @recurring(quarterly)"
                - "Assign an owner to every measure shown red"
            - name: LOPA method fundamentals through worked scenarios
              description: |-
                ## Purpose
                Reading about LOPA is quick, but facilitating it well takes practice with scenarios where independence, modifiers and frequencies are genuinely ambiguous. Working ten scenarios by hand, from a simple overfill to a reactor runaway, builds the judgement to spot a weak claim in a live session.

                ## Milestones
                1. The core steps of LOPA explained in your own words on one page.
                2. Ten scenarios worked by hand, each with a mitigated frequency and gap.
                3. Your answers compared with a senior practitioner's and differences noted.
                4. A personal list of the five traps you are most likely to fall into.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten hand-worked LOPA scenarios are reviewed by a senior practitioner, with differences in judgement recorded."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Read the LOPA chapter of the guidance your site recognises"
                - "Work one overfill scenario by hand from cause to gap"
                - "Pick nine more scenarios from past studies and work each one"
                - "Ask a senior facilitator to review your answers"
            - name: PFDavg calculation with simplified equations
              description: |-
                ## Purpose
                Every SIL verification ultimately rests on the average probability of failure on demand, and engineers who only use software cannot tell when it is producing nonsense. Calculating PFDavg by hand for 1oo1, 1oo2 and 2oo3 arrangements gives you the instinct to check any tool's result in minutes.

                ## Milestones
                1. The simplified PFDavg equations for 1oo1, 1oo2 and 2oo3 written out with each term explained.
                2. One SIF calculated by hand for sensors, logic solver and final elements.
                3. The effect of proof test interval and proof test coverage shown on the same SIF.
                4. Your hand result compared with the software result within a reasonable margin.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A hand PFDavg calculation for one real SIF matches the SIL software result closely, with each difference explained."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Write the 1oo1 PFDavg equation and define each term"
                - "Calculate a pressure trip SIF by hand from certificate failure rates"
                - "Vary the test interval and coverage and plot the effect"
                - "Run the same SIF in the SIL software and compare results"
            - name: Hardware fault tolerance and architectural constraints
              description: |-
                ## Purpose
                A SIF can meet its PFD target and still fail verification because the architecture lacks enough redundancy for the SIL claimed. Understanding the minimum hardware fault tolerance requirements in IEC 61511, and how they relate to the IEC 61508 routes, prevents late redesigns when a single transmitter turns out to need a partner.

                ## Milestones
                1. The minimum hardware fault tolerance table in your edition of IEC 61511 summarised in your own words.
                2. The IEC 61508 route 1H and route 2H concepts explained with one example each.
                3. Three existing SIFs checked for architectural compliance.
                4. Any non-compliant SIF noted with the redundancy it would need.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three real SIFs are checked against the hardware fault tolerance requirements of the site's IEC 61511 edition, with results recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Read the hardware fault tolerance clauses in your IEC 61511 edition"
                - "Summarise route 1H and route 2H on one page"
                - "Check three SIL 2 SIFs for architectural compliance"
                - "Discuss any non-compliant SIF with the SIS lead engineer"
            - name: Common cause failure and beta factor estimation
              description: |-
                ## Purpose
                Redundant transmitters on the same impulse line, or two valves with the same actuator air supply, can fail together, and the beta factor is how SIL calculations account for that. Learning to estimate beta with a structured checklist, rather than defaulting to a single number, makes redundancy claims believable.

                ## Milestones
                1. The meaning of beta and its effect on redundant PFD explained on one page.
                2. A beta factor checklist method, such as the one in IEC 61508 part 6, worked for one SIF.
                3. Common cause weaknesses found in the field noted, such as shared tapping points.
                4. Design or maintenance changes proposed to reduce the worst common causes.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A completed beta factor checklist for one redundant SIF records its score, the resulting beta and at least two proposed improvements."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Read the common cause failure annex of IEC 61508 part 6"
                - "Score one redundant SIF using the beta checklist"
                - "Walk the SIF in the field looking for shared tappings, cables and air supplies"
                - "Write up two changes that would lower the beta factor"
            - name: Reading SIL certificates and safety manuals critically
              description: |-
                ## Purpose
                Vendor marking such as SIL 2 capable does not make a SIF SIL 2, and the conditions buried in the safety manual often decide whether the certificate applies to your installation. Learning to read the failure rates, systematic capability, proof test coverage and restrictions in a certificate stops misplaced confidence in vendor claims.

                ## Milestones
                1. The key fields on a SIL certificate identified: failure rates, safe failure fraction, systematic capability and restrictions.
                2. Three certificates for devices on site reviewed against their safety manuals.
                3. Each restriction or required setting compared with the as-installed configuration.
                4. Mismatches between certificate conditions and site practice raised as actions.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three device certificates and safety manuals are reviewed against the installed configuration, with every mismatch raised as an action."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Collect the SIL certificate and safety manual for three installed SIF devices"
                - "List the failure rates and restrictions stated in each"
                - "Check the installed configuration against each safety manual condition"
                - "Raise actions for any condition the site does not meet"
            - name: Spurious trip rate and mean time to fail spurious
              description: |-
                ## Purpose
                Nuisance SIFs that trip the plant for no reason twice a year cost production and teach operators to distrust them. Learning to calculate spurious trip rate, and to see how voting such as 2oo3 trades safety against availability, lets you design functions that are both safe and tolerated.

                ## Milestones
                1. The definition of spurious trip rate and mean time to fail spurious explained on one page.
                2. Spurious trip rates calculated for one SIF in 1oo1, 1oo2 and 2oo3 sensor voting.
                3. The production cost of a spurious trip estimated with operations input.
                4. A recommendation written on the best voting for that SIF, balancing PFD and spurious trips.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page comparison shows PFD and spurious trip rate for three voting options on one SIF, with a recommendation and its cost basis."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Find the safe failure rates for the SIF's sensors and final elements"
                - "Calculate spurious trip rate for three voting arrangements"
                - "Ask operations what one unplanned trip of the unit costs"
                - "Write the voting recommendation with both safety and availability numbers"
            - name: SIL determination methods compared
              description: |-
                ## Purpose
                LOPA is the most common way to set SIL targets, but risk graphs, calibrated risk matrices and quantitative methods still appear in older studies and vendor packages. Knowing how each works, and where each tends to be conservative or optimistic, lets you judge an inherited study and choose the right method for a new one.

                ## Milestones
                1. LOPA, risk graph, risk matrix and quantitative methods summarised with strengths and limits.
                2. One scenario assessed by both risk graph and LOPA.
                3. The difference in SIL target explained in terms of the parameters each method uses.
                4. A short note on when the site should use each method.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note comparing four SIL determination methods includes one scenario assessed two ways and states when the site should use each."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read the SIL determination annexes in IEC 61511 part 3"
                - "Assess one overpressure scenario using a risk graph"
                - "Assess the same scenario using LOPA and compare the targets"
                - "Write the method selection note for the process safety lead"
            - name: Operator response and human error as protection
              description: |-
                ## Purpose
                Alarms with operator response are among the most claimed layers in LOPA and among the least justified. Learning how human error probabilities are estimated, and what time, training and alarm quality an operator needs to be credited, gives you the basis to accept or reject the claim in a session.

                ## Milestones
                1. The conditions for crediting operator response written down: detection, diagnosis, time and action.
                2. Typical human error probability ranges noted with their sources.
                3. Process safety time for two alarm scenarios estimated with operations.
                4. A view formed on whether each of those alarms can be credited.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two alarm scenarios are assessed for process safety time and operator response, with a reasoned credit decision recorded for each."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Read the human factors guidance your LOPA standard refers to"
                - "List the conditions an alarm must meet to be credited as an IPL"
                - "Estimate process safety time for two alarm scenarios with a shift supervisor"
                - "Record whether each alarm meets the conditions"
            - name: Fault trees and Markov models for complex SIFs
              description: |-
                ## Purpose
                Simplified equations break down for SIFs with staggered testing, diverse sensors or shared final elements, and a fault tree or Markov model may be the only honest way to verify them. Building one fault tree for a complex function shows when the extra effort is justified and how far the simple answer was off.

                ## Milestones
                1. One complex SIF chosen where simplified equations are questionable.
                2. A fault tree drawn with basic events for every device and common cause.
                3. PFDavg calculated from the fault tree and compared with the simplified result.
                4. A rule of thumb written for when the site should use detailed modelling.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A fault tree PFDavg for one complex SIF is compared with its simplified result, and a site rule for when to model in detail is written."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Pick a SIF with diverse sensors or shared final elements"
                - "Draw the fault tree with basic events and common cause"
                - "Quantify the tree and compare it with the simplified PFD"
                - "Write the rule for when detailed modelling is needed"
            - name: Safety requirements specification for one SIF
              description: |-
                ## Purpose
                The SRS is the contract between the LOPA team and the people who design, build and test the SIF, and when it is vague the installed function drifts from what the risk assessment needed. Writing a complete SRS for one function sets the pattern for every other SIF on the unit.

                ## Milestones
                1. The SIF described with its hazard, safe state, trip setpoint, process safety time and response time.
                2. SIL target, demand mode, proof test interval and spurious trip limit stated.
                3. Bypass, reset, manual shutdown and failure response requirements written.
                4. The SRS reviewed by process, controls and operations and approved.

                ## Notes
                The SRS clauses in IEC 61511 part 1 list what must be covered. Use them as the checklist, not as the document layout.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An approved SRS for one SIF covers every item in the IEC 61511 SRS clause, reviewed by process, controls and operations."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Choose one SIF with a recent LOPA and gather its scenario sheet"
                - "List the SRS items required by your IEC 61511 edition"
                - "Draft the SRS and confirm process safety time with the process engineer"
                - "Circulate the SRS to process, controls and operations for review"
            - name: SIL verification calculation for a SIF
              description: |-
                ## Purpose
                Verification proves that the as-designed SIF achieves its target PFD, meets architectural constraints and is tested often enough. Doing it properly for one function, with failure data sources, proof test coverage and mission time recorded, creates a calculation another engineer can check and a template for the rest.

                ## Milestones
                1. Failure data for every device recorded with its source and any site adjustment.
                2. PFDavg calculated with proof test interval, coverage and mission time stated.
                3. Architectural constraints and systematic capability checked.
                4. The calculation checked by a second engineer and issued with the SRS.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An issued SIL verification for one SIF shows PFDavg within its SIL band, architectural compliance and failure data sources, signed by a checker."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Collect certificates or site data for every device in the SIF"
                - "Set proof test interval, coverage and mission time with maintenance"
                - "Calculate PFDavg and check architectural constraints"
                - "Ask a second engineer to check the calculation before issue"
            - name: Proof test procedure with stated coverage
              description: |-
                ## Purpose
                Testing only the transmitter signal, without ever stroking the valve, may cover a fraction of the dangerous failures the SIL calculation assumes it finds. Rewriting one SIF's proof test so every step is tied to a failure mode, and stating the resulting coverage, closes the gap between the calculation and the workshop.

                ## Milestones
                1. Dangerous failure modes of each device in the SIF listed.
                2. Each test step linked to the failure modes it detects.
                3. Proof test coverage estimated and compared with the value in verification.
                4. The procedure trialled by technicians and issued with their corrections.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An issued proof test procedure for one SIF links every step to a failure mode and states a coverage that matches its SIL verification."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Get the current proof test procedure for one SIF"
                - "List each device's dangerous failure modes from its safety manual"
                - "Rewrite the steps so each one detects a named failure mode"
                - "Trial the procedure with a technician during the next due test"
            - name: Choosing a SIL calculation and lifecycle tool
              description: |-
                ## Purpose
                Spreadsheets work for a handful of SIFs, but a site with hundreds needs a tool that links LOPA, SRS, verification and proof test records. Comparing two or three tools against your real workflow, with a trial on actual SIFs, avoids paying for features nobody uses or missing the ones auditors ask for.

                ## Milestones
                1. Requirements written, covering LOPA, verification methods, failure data libraries and links to maintenance systems.
                2. Two or three tools shortlisted and demonstrated on site SIFs.
                3. Each tool scored against the requirements, with licence and support costs.
                4. A recommendation approved, or a documented decision to stay on spreadsheets.

                ## Notes
                Start from the **Purchase decision** template. Ask how each tool handles editions of IEC 61511 and how you export your data if you leave.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A scored comparison of at least two tools against written requirements ends in an approved recommendation."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Write the requirements list with the SIS lead and the process safety lead"
                - "Shortlist tools and book a demonstration of each"
                - "Run three real SIFs through each tool during the trial"
                - "Score the tools and send the recommendation for approval"
            - name: Partial stroke testing decision for ESD valves
              description: |-
                ## Purpose
                Final elements usually dominate a SIF's PFD, and full stroke testing often needs a shutdown. Partial stroke testing can extend the full test interval, but only if its coverage is credible and the extra complexity does not add spurious trips. A documented decision for each candidate valve settles the question with numbers.

                ## Milestones
                1. Candidate ESD valves listed where final elements dominate PFD.
                2. Partial stroke coverage and effect on PFD calculated for each.
                3. Spurious trip and maintenance implications assessed with operations.
                4. A decision recorded per valve, with any implementation raised through MOC.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each candidate ESD valve has a recorded partial stroke decision based on calculated PFD effect and spurious trip risk."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Identify SIFs where the final element contributes most of the PFD"
                - "Get partial stroke coverage figures from the valve and positioner vendor"
                - "Recalculate PFD with and without partial stroke testing"
                - "Record the decision for each valve with its reasons"
            - name: Closing gaps on SIFs that miss their target
              description: |-
                ## Purpose
                Verification and revalidation usually turn up a few SIFs that do not achieve their SIL, through weak architecture, long test intervals or poor data. Treating them as a tracked remediation programme, with interim measures until the fix is in, is far better than leaving them as a footnote in a report.

                ## Milestones
                1. Every SIF failing its target listed with the reason and size of the gap.
                2. Interim risk measures agreed and in place for each one.
                3. A permanent fix chosen per SIF: shorter test interval, added redundancy, better devices or a new IPL.
                4. Each fix implemented through MOC and the SIF reverified.

                ## Notes
                Start from the **Remediation plan** template. Interim measures need a review date, or they become permanent without anyone deciding so.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every SIF that missed its target has interim measures in place and a permanent fix implemented and reverified, or a dated plan approved by management."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "List every SIF that fails its SIL target and the reason"
                - "Agree interim measures with operations for each gap"
                - "Choose a permanent fix for each SIF and estimate its cost"
                - "Raise an MOC for each fix and book its reverification"
            - name: Challenging over-specified SIL 3 functions
              description: |-
                ## Purpose
                SIL 3 functions are expensive to build and test, and some exist only because an early study stacked conservative assumptions. Reviewing each SIL 3 target with current data and criteria sometimes finds a SIL 2 answer, or an inherently safer design that removes the need, and frees effort for the functions that matter.

                ## Milestones
                1. All SIL 3 SIFs listed with the LOPA assumptions behind them.
                2. Each frequency, modifier and IPL credit checked against current rules and data.
                3. Inherently safer or non-instrumented alternatives considered for each.
                4. Any target change approved through the LOPA revalidation process, not informally.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every SIL 3 SIF has a documented review of its LOPA assumptions, with any changed target approved through formal revalidation."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "List all SIL 3 functions and their LOPA scenario references"
                - "Recheck each scenario's assumptions against current rules"
                - "Note any inherently safer option the team could consider"
                - "Take any proposed target change to the next LOPA revalidation"
            - name: Qualifying safety alarms as protection layers
              description: |-
                ## Purpose
                Alarms are credited in many LOPA scenarios without anyone checking that the alarm is independent, prioritised and leaves the operator enough time. Auditing each credited alarm against the site IPL rules either confirms the credit or exposes a gap that needs a SIF or a better alarm.

                ## Milestones
                1. Every alarm credited as an IPL listed from the LOPA worksheets.
                2. Each alarm checked for independence from the cause and from other credited layers.
                3. Alarm priority, response procedure and operator training confirmed for each.
                4. Credits withdrawn or kept, with LOPA updated where a credit is withdrawn.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every alarm credited as an IPL has a recorded qualification check, and any withdrawn credit is reflected in an updated LOPA."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Extract every alarm credited as an IPL from the LOPA worksheets"
                - "Check each alarm's transmitter is independent of the initiating cause"
                - "Confirm each alarm has a written response in the operator procedures"
                - "Update LOPA for any alarm whose credit is withdrawn"
            - name: Facilitating a LOPA session for a new unit
              description: |-
                ## Purpose
                Good LOPA sessions for a new unit set the SIL targets that drive the SIS design, so poor preparation shows up later as expensive redesign. Preparing scenarios, data and rules in advance, and running the session to time with the right people present, produces targets the project can build to.

                ## Milestones
                1. Scenarios, initiating event table and IPL rules sent to attendees a week ahead.
                2. Process, operations, controls and process safety representatives confirmed.
                3. Every scenario worked with gaps and SIL targets recorded in the session.
                4. The LOPA report issued with actions and SIL targets within two weeks.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A LOPA report for the new unit with every scenario analysed and SIL targets recorded is issued within two weeks of the session."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Book the session dates and confirm each discipline representative"
                - "Send the scenario list and LOPA rules to attendees a week ahead"
                - "Run the session and record every scenario in the worksheet"
                - "Issue the LOPA report and action list within two weeks"
            - name: Stage 3 functional safety assessment before start-up
              description: |-
                ## Purpose
                Before hazards are introduced to a new or modified unit, IEC 61511 expects an assessment showing the SIS has been installed, commissioned and validated to its SRS. Getting the evidence ready early avoids an assessor holding up start-up over missing signatures or untested functions.

                ## Milestones
                1. The assessor appointed with the independence required by the safety plan.
                2. An evidence pack ready: SRS, verification, FAT and validation records, and open punch items.
                3. The assessment carried out and findings categorised by whether they block start-up.
                4. All start-up blocking findings closed and the assessment report signed.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A signed stage 3 assessment report shows no open start-up blocking findings before hazardous material is introduced."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Confirm the assessor and their independence with the safety plan owner"
                - "Build the evidence index for every SIF on the unit"
                - "Chase missing validation records with the commissioning team"
                - "Close start-up blocking findings and get the report signed"
            - name: Pre-start-up SIS validation testing
              description: |-
                ## Purpose
                Validation proves end to end that each SIF does what its SRS says, from the process tapping to the final element, with response times measured. Planning and witnessing it properly is the last chance to find a wrongly wired valve or a missing logic step before the plant depends on it.

                ## Milestones
                1. A validation procedure for every SIF, traced to its SRS requirements.
                2. Test equipment calibrated and test resources booked with the commissioning schedule.
                3. Every SIF tested end to end with response times recorded.
                4. Failures corrected, retested and the validation report signed.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every SIF on the unit has a signed end-to-end validation record with measured response time, and all failures have been retested."
                cadence: one-shot
                effort_hours_estimate: "60"
              tasks:
                - "Trace each SIF's SRS requirements into its validation procedure"
                - "Agree validation dates with the commissioning manager"
                - "Witness each SIF test and record response times"
                - "Retest every failed function and sign the validation report"
            - name: Proof test campaign during a turnaround
              description: |-
                ## Purpose
                Many final element proof tests can only be done when the unit is down, so a turnaround is the moment to catch up on full stroke tests and tight shut-off checks. A dedicated SIF test scope in the turnaround plan, with sequence and resources agreed, stops these tests being the first thing cut when the schedule slips.

                ## Milestones
                1. SIF tests that need the unit down listed with the date each was last done.
                2. The test scope agreed in the turnaround plan with resources and sequence.
                3. Tests completed with as-found results recorded.
                4. Proof test records and the SIF register updated before start-up.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every shutdown-only SIF test in the turnaround scope is completed with as-found results, and the SIF register is updated before start-up."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "List SIF tests that can only be done with the unit down"
                - "Submit the test scope to the turnaround planner"
                - "Agree the test sequence with operations and the valve shop"
                - "Update the SIF register with test dates before start-up"
            - name: Presenting LOPA gaps for management risk decisions
              description: |-
                ## Purpose
                Some LOPA gaps cannot be closed quickly, and the decision to accept, fund or stop rests with management, not the engineer. Presenting the gaps clearly, with options, costs and interim measures, gets a recorded decision and keeps the residual risk owned by the right person.

                ## Milestones
                1. Open gaps summarised in one page with consequence, gap size and current interim measures.
                2. Two or three options per gap with cost and timescale.
                3. The presentation delivered and decisions recorded with the accountable manager's name.
                4. Decisions entered in the risk register with review dates.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "Every open LOPA gap presented has a recorded management decision with an owner and review date in the risk register."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List open LOPA gaps with their consequence and gap size"
                - "Ask the agent to draft a one-page summary of each gap and its options"
                - "Book time with the accountable manager to present the gaps"
                - "Record each decision and its review date in the risk register"
            - name: First LOPA as a process engineer
              description: |-
                ## Purpose
                Process engineers are often pulled into LOPA as the person who knows the unit, without having done one before. Preparing the process safety times, operating envelopes and relief cases the team will ask for, and learning the vocabulary beforehand, turns you from a spectator into a useful contributor.

                ## Milestones
                1. The site LOPA procedure and rules read before the session.
                2. Process safety times estimated for the scenarios on your unit.
                3. Relief device sizing cases checked for the scenarios that claim them.
                4. Your contributions and the questions you could not answer noted for follow-up.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Process safety times and relief case checks for your unit's scenarios are prepared before the session and your follow-up questions are answered within a month."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Read the site LOPA procedure and IPL rules"
                - "Estimate process safety time for each scenario on your unit"
                - "Check the relief sizing cases for scenarios that credit relief valves"
                - "Write down the questions you could not answer in the session"
            - name: Instrument engineer moving into functional safety
              description: |-
                ## Purpose
                Instrument and controls engineers know the hardware but often find the risk side of functional safety unfamiliar, from consequence categories to modifiers. A planned move, shadowing LOPA sessions and taking on verification under supervision, builds the risk judgement that the hardware knowledge does not provide.

                ## Milestones
                1. A conversation with your manager agreeing a move into functional safety work.
                2. Two LOPA sessions attended as scribe or participant.
                3. Three SIL verifications done under a senior engineer's supervision.
                4. A competence record started with evidence from each activity.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Two LOPA sessions and three supervised SIL verifications are logged in your competence record within six months."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Ask your manager for time to take on functional safety work"
                - "Volunteer as scribe at the next LOPA session"
                - "Agree three SIFs to verify under a senior engineer's supervision"
                - "Start a competence record with evidence from each activity"
            - name: Consultant facilitating LOPA for a client
              description: |-
                ## Purpose
                As an external facilitator you work to the client's risk criteria and rules, not your own, and arguments over them waste paid session days. Agreeing criteria, data and scope in writing before the session, and delivering a report the client can defend, is what gets you invited back.

                ## Milestones
                1. The client's risk criteria, initiating event data and IPL rules received and reviewed before the session.
                2. Scope, attendees and deliverables confirmed in writing.
                3. Sessions run to the agreed schedule with every scenario recorded.
                4. A draft report issued for client review and the final report accepted.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A final LOPA report built on the client's own criteria is accepted by the client, with scope and rules agreed in writing beforehand."
                cadence: one-shot
                effort_hours_estimate: "50"
              tasks:
                - "Request the client's risk criteria and LOPA rules in writing"
                - "Confirm scope, attendees and deliverables by email"
                - "Flag any client rule you think is unsafe before the session"
                - "Issue the draft report and log the client's comments"
            - name: Functional safety competence and certification plan
              description: |-
                ## Purpose
                Competence is a requirement of IEC 61511 for everyone working on the safety lifecycle, and clients increasingly ask for third-party functional safety certification as proof. A plan that maps your experience to a recognised scheme and fills the gaps over a year gives you both the evidence and the credential.

                ## Milestones
                1. A recognised functional safety engineer scheme chosen and its current requirements checked on the body's website.
                2. Your experience mapped against the scheme's requirements, with gaps listed.
                3. Training and project experience planned to close each gap.
                4. The exam or assessment booked once the experience evidence is complete.

                ## Notes
                Start from the **Development plan** template. Check current fees, prerequisites and exam format directly with the scheme provider, as they change.
              priority: low
              deadlineOffsetDays: 365
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A competence plan maps your experience against a named certification scheme and the assessment is booked within the year."
                cadence: phased
                effort_hours_estimate: "80"
              tasks:
                - "Compare two functional safety certification schemes on their websites"
                - "Map your project experience against the chosen scheme"
                - "Plan training and project work for each gap"
                - "Update your competence evidence log @recurring(quarterly)"
            - name: Legacy trip systems with no SIL records
              description: |-
                ## Purpose
                Older plants often have trips installed decades ago with no LOPA, no SRS and no proof test basis, and a single engineer is asked to bring them up to IEC 61511. Prioritising by consequence, and working the highest risk units first, makes the backlog manageable without pretending it can be done in a month.

                ## Milestones
                1. Legacy trips listed and ranked by worst credible consequence.
                2. LOPA completed for the highest consequence unit.
                3. SRS and proof test basis written for its SIFs.
                4. A multi-year plan for the remaining units approved by management.

                ## Notes
                IEC 61511 allows existing systems designed to earlier practice to continue if the owner shows they operate safely. Record that determination formally rather than assuming it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The highest consequence unit has LOPA, SRS and proof test basis completed, and an approved plan covers the remaining legacy trips."
                cadence: phased
                effort_hours_estimate: "80"
              tasks:
                - "List legacy trips by unit with their worst credible consequence"
                - "Pick the highest consequence unit and schedule its LOPA"
                - "Write SRS and proof test basis for that unit's SIFs"
                - "Draft the multi-year plan for the remaining units"
            - name: Escalating LOPA scenarios beyond the method
              description: |-
                ## Purpose
                Order of magnitude methods like LOPA have limits, and some scenarios, such as those with multiple fatality potential, complex causes or large gaps, need a fault tree, event tree or quantitative risk assessment. Knowing when to escalate, and preparing the brief for the specialist, keeps the site from relying on a number the method cannot support.

                ## Milestones
                1. Escalation criteria written, such as gap size, consequence severity or shared causes.
                2. Scenarios meeting the criteria identified from existing studies.
                3. A brief prepared for each, with the data the risk analyst will need.
                4. Results of the detailed analysis fed back into the SIL target and SIF register.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Written escalation criteria exist, and each scenario meeting them has a brief for detailed analysis or a recorded result."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Draft escalation criteria with the process safety lead"
                - "Screen existing LOPA studies against the criteria"
                - "Write a brief for each escalated scenario"
                - "Update the SIF register with the outcome of each analysis"
            - name: Burner management system SIF assessment
              description: |-
                ## Purpose
                Fired heaters and boilers combine prescriptive burner management standards with risk-based SIL work, and the two do not always agree on what is required. Assessing one burner management system against both, function by function, clarifies which trips are SIFs, what SIL they need and what the prescriptive standard adds.

                ## Milestones
                1. The applicable burner management standard identified, for example NFPA 85, NFPA 86 or EN 746.
                2. Each burner management trip classified and mapped to a LOPA scenario.
                3. SIL targets and verification results recorded for the burner management SIFs.
                4. Conflicts between the prescriptive standard and the SIL study resolved and documented.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "One burner management system has every trip classified, SIL targets verified and conflicts with the prescriptive standard documented."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Confirm which burner management standard and edition the heater was designed to"
                - "List every burner management trip and permissive"
                - "Map each trip to a LOPA scenario and SIL target"
                - "Document any conflict between the standard and the SIL study"
            - name: HIPPS design and verification review
              description: |-
                ## Purpose
                A high integrity pressure protection system lets a downstream system be rated below source pressure, which means the instrumented function replaces relief capacity and its failure can be catastrophic. Reviewing a HIPPS design for response time, valve closure, testing and the case for not providing full relief demands the most rigour in the area.

                ## Milestones
                1. The HIPPS justification reviewed, including the code basis for reduced relief capacity.
                2. Response time checked against the pressure build-up rate.
                3. Valve tight shut-off and closure time requirements confirmed with the vendor.
                4. SIL verification, proof test plan and remaining relief capacity independently checked.

                ## Notes
                HIPPS decisions sit with the pressure equipment code and the asset owner as well as the SIS. Make sure the mechanical and process engineers sign the same basis.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A HIPPS review report confirms response time, valve performance, SIL verification and relief basis, signed by process, mechanical and SIS engineers."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Collect the HIPPS SRS, verification and pressure build-up calculations"
                - "Check response time against the pressure rise rate"
                - "Confirm valve closure and leak rate requirements with the vendor"
                - "Arrange sign-off by process, mechanical and SIS engineers"
            - name: Cybersecurity risk assessment for the SIS
              description: |-
                ## Purpose
                IEC 61511 requires a security risk assessment of the SIS, and an integrated control and safety system can expose the logic solver to the same networks as the BPCS. Assessing the paths into the SIS, using the IEC 62443 family as a guide, shows whether a security breach could defeat the protection LOPA relies on.

                ## Milestones
                1. Every connection to the SIS mapped, including engineering stations and remote access.
                2. Threats assessed for each connection and their effect on SIF availability.
                3. Countermeasures agreed, such as write protection, network separation and access control.
                4. The assessment issued and linked to the SRS and safety plan.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "An issued SIS security risk assessment maps every connection to the logic solver and records an agreed countermeasure for each threat."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Map every network and engineering connection to the SIS logic solver"
                - "Check whether the logic solver's write protection is enabled"
                - "Assess each connection's threat with the control system security lead"
                - "Review the SIS security assessment against changes @recurring(yearly)"
---

# LOPA and Safety Integrity Levels

LOPA and safety integrity levels are where a hazard study turns into numbers: how often a scenario starts, which layers stop it, how much risk reduction the safety instrumented system must deliver and whether the hardware and the test interval actually deliver it. These projects are written for the engineer who facilitates LOPA, owns a SIF register or signs SIL verification, and they run from foundations (the standards, risk criteria, initiating event and IPL rules, the register and the safety plan), through the operating routines and the core calculation skills, to improvements, dated events such as start-up assessments, situations for people new to the work, and specialist topics such as HIPPS, burner management and SIS security.

The rhythm is monthly and quarterly: proof test due dates and overdue items, as-found failure reviews, demand and spurious trip logs, bypass hours, IPL walkdowns and SIS modification checks each month, failure rate data and performance reporting each quarter, and a yearly LOPA revalidation, safety plan refresh and security review. The Risk register, Purchase decision, Remediation plan, Metrics log and Development plan templates pair with the projects that point to them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
