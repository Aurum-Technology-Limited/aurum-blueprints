---
id: quant-finance.model-validation-and-model-risk
name: Model Validation and Model Risk
description: "Model validation run as a craft: a model inventory and tiering, conceptual soundness and replication, benchmarks and outcomes analysis, findings that get fixed, ongoing monitoring and documentation a model risk team accepts."
category: business
version: 1.0.0
tags: [quant-finance, model-validation-and-model-risk, researcher, knowledge-worker, model-risk, independent-validation, model-governance, model-monitoring]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - remediation-plan
    - meeting-notes
    - reading-queue
    - board-meeting
    - onboarding-30-60-90
  pillars:
    - name: Quantitative Finance & Trading
      emoji: "🧮"
      description: "Systematic research and trading run like engineering: alpha research and honest backtests, factor and risk models, execution and microstructure, statistics and machine learning, quant development and market data, prop-firm evaluations and personal algorithmic trading under strict risk rules, and quant careers. Organisation and method only, never trading advice."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Model Validation and Model Risk
          description: "Validating quantitative models: independent review, assumptions and limits, benchmarking, ongoing monitoring and documentation a model risk team accepts."
          projects:
            - name: Written definition of what counts as a model
              description: |-
                ## Purpose
                Most model risk arguments start with whether a thing is a model at all: a pricing spreadsheet, a rules engine, a vendor score or a regression a researcher runs every Friday. A one-page definition, with worked examples of what is in and what is out, settles that argument once and decides what goes in the inventory and what gets validated.

                ## Milestones
                1. A definition covering input data, a quantitative method and an output used for decisions.
                2. Ten borderline examples from your own work classed as model, tool or calculation, each with a reason.
                3. The definition checked against the guidance your firm follows, for example SR 11-7 in the US or SS1/23 in the UK.
                4. The definition agreed by the model risk lead and filed where model owners can find it.

                ## Notes
                Err towards including borderline tools in the inventory with a low tier. A tool left out never gets looked at, while a low-tier entry costs little.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page model definition with ten classified examples is agreed by the model risk lead and filed in a shared location."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List ten tools you use that might or might not be models"
                - "Draft a definition built on inputs, method and decision-relevant outputs"
                - "Class each of the ten tools against the draft definition with a reason"
                - "Ask the model risk lead to agree or amend the definition"
            - name: Model inventory with owners and uses
              description: |-
                ## Purpose
                A validation function cannot manage risk in models it does not know exist, and inventories built from memory miss the spreadsheet in the corner and the script copied between desks. Building one inventory with an owner, a developer, the uses, the inputs and the validation status for every model is the base everything else in this area stands on.

                ## Milestones
                1. An inventory with fields for model id, name, owner, developer, purpose, uses, inputs, outputs, tier and validation status.
                2. Every desk, research team and finance function asked to declare its models.
                3. Each entry linked to its documentation and code location.
                4. Gaps, such as models with no owner or no documentation, flagged in a separate column.

                ## Notes
                Keep the inventory in one controlled place with change history. A copy emailed around becomes three inventories within a quarter.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A model inventory covering every declaring team exists, with an owner, uses and validation status recorded for each entry."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Set out the inventory fields and agree them with the model risk lead"
                - "Send each team a short request to declare its models and owners"
                - "Link each entry to its documentation and code repository"
                - "Flag every entry with no named owner or no documentation"
            - name: Model risk tiering method
              description: |-
                ## Purpose
                Validating every model to the same depth wastes scarce reviewer time on low-stakes tools and starves the models that move capital, prices or reported numbers. A written tiering method, scoring materiality, complexity and reliance, decides how deep each validation goes and how often it repeats.

                ## Milestones
                1. Scoring criteria for materiality, complexity, uncertainty and reliance written with example scores.
                2. Three or four tiers defined, each with a validation depth and a revalidation frequency.
                3. Every inventory entry scored and given a tier.
                4. Tier assignments reviewed by model owners, with disagreements recorded and resolved.

                ## Notes
                Test the method on five models you already know well. If the pricing model for your largest book lands in the bottom tier, the weights are wrong.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written tiering method is applied to every inventory entry, with each tier carrying a stated validation depth and revalidation frequency."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Draft materiality, complexity and reliance criteria with a scoring scale"
                - "Test the scoring on five models you know well"
                - "Score every inventory entry and assign a tier"
                - "Send tier assignments to model owners for comment"
            - name: Model ownership and independence map
              description: |-
                ## Purpose
                Effective challenge only works when the person reviewing a model did not build it and does not report to the person who did. Mapping who owns, develops, validates, uses and approves each model, and where reporting lines cross, exposes the reviews that are independent on paper only.

                ## Milestones
                1. A table naming owner, developer, validator, users and approver for each high-tier model.
                2. Reporting lines for validators traced up to the first shared manager.
                3. Every conflict, such as a validator who contributed code, recorded with a mitigation.
                4. The map agreed with the head of model risk and attached to the inventory.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "An ownership and independence map covers every high-tier model, with each conflict recorded alongside its mitigation."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Name the owner, developer and validator of each high-tier model"
                - "Trace each validator's reporting line to the first shared manager"
                - "Record any validator who helped build the model they review"
                - "Agree a mitigation for each conflict with the head of model risk"
            - name: Reading the model risk guidance your firm follows
              description: |-
                ## Purpose
                Validators who have never read the supervisory guidance end up arguing from habit, and model owners hear rules that do not exist. Working through the guidance your firm applies, for example SR 11-7, SS1/23 or the relevant European guide, and noting what it actually requires gives you firm ground in every review conversation.

                ## Milestones
                1. The guidance documents that apply to your firm identified with the compliance team.
                2. Each document read with its core expectations summarised in your own words.
                3. A table mapping each expectation to the internal policy section that meets it.
                4. Open questions on interpretation sent to compliance, with answers recorded.

                ## Notes
                Your summary is a study aid, not a legal reading. Where interpretation matters, the compliance or legal team decides.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A summary of each applicable guidance document is mapped to internal policy sections, with interpretation questions answered by compliance."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask compliance which model risk guidance documents apply to the firm"
                - "Read the first document and summarise its core expectations"
                - "Map each expectation to the internal policy section that meets it"
                - "Check for new or revised supervisory guidance on model risk @recurring(yearly)"
            - name: Model documentation standard a validator accepts
              description: |-
                ## Purpose
                Validations stall for weeks when the documentation explains the code but not the choices, the data but not its limits, or the results but not how to reproduce them. A documentation standard with required sections and a short example gives developers a clear target and cuts the first round of validator questions in half.

                ## Milestones
                1. Required sections set out: purpose and use, theory, data, methodology, assumptions, limitations, testing, implementation and monitoring.
                2. A worked example written for one existing model.
                3. A checklist a developer can run before submitting a model for review.
                4. The standard published to every model-owning team.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A documentation standard with required sections, a worked example and a submission checklist is published to all model-owning teams."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "List the questions validators most often send back to developers"
                - "Turn those questions into required documentation sections"
                - "Write the worked example for one existing model"
                - "Publish the standard and its checklist to model-owning teams"
            - name: Validation report template and rating scale
              description: |-
                ## Purpose
                When every validator writes reports in their own shape, committees cannot compare models and owners cannot tell a cosmetic comment from a blocking issue. One report template, with a fixed overall rating and a severity scale for findings, makes every validation readable in ten minutes by someone who did not do it.

                ## Milestones
                1. A report template with an executive summary, scope, tests performed, findings and an overall conclusion.
                2. An overall rating scale, such as approved, approved with conditions and not approved, with definitions.
                3. A finding severity scale with a remediation deadline attached to each level.
                4. Two past validations rewritten in the new template as examples.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A validation report template with defined overall ratings and finding severities is in use, with two example reports filed."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Collect three recent validation reports and note how they differ"
                - "Draft the report sections and the overall rating definitions"
                - "Set severity levels with a remediation deadline for each"
                - "Rewrite two past reports in the template as worked examples"
            - name: Model assumptions and limitations register
              description: |-
                ## Purpose
                Every model rests on assumptions, such as stable correlations, liquid hedges or a data window that excludes a crisis, and the dangerous ones are those nobody wrote down. A register that holds each assumption, why it was made, what breaks if it fails and who watches it turns hidden limits into monitored ones.

                ## Milestones
                1. Every high-tier model's key assumptions and limitations entered with a short rationale.
                2. Each entry rated for the impact if the assumption fails.
                3. A named person and a signal for watching each high-impact assumption.
                4. The register linked from each model's inventory entry.

                ## Notes
                Start from the **Risk register** template. Write limitations in the language of the model's users, not its developers.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An assumptions register covers every high-tier model, with an impact rating and a named watcher for each high-impact entry."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Create the register from the risk register template"
                - "Extract stated assumptions from each high-tier model's documentation"
                - "Rate the impact of each assumption failing and name a watcher"
                - "Review the register with model owners @recurring(quarterly)"
            - name: Scoping memo for the next validation
              description: |-
                ## Purpose
                Without an agreed scope, a validation grows until it misses its date, or shrinks until it misses the risk. A two-page scoping memo, agreed with the model owner before testing begins, fixes what is in scope, which tests will run, what evidence is needed and when the report is due.

                ## Milestones
                1. The model's tier, uses and prior findings summarised.
                2. Planned tests listed under conceptual soundness, implementation, data, outcomes and benchmarking.
                3. An evidence request sent to the owner with a return date.
                4. The memo signed off by the owner and the validation lead, with a report date.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A signed scoping memo lists planned tests, the evidence requested and a report date before any testing starts."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Read the model's documentation and its last validation report"
                - "List planned tests under each validation heading"
                - "Send the owner an evidence request with a return date"
                - "Agree the memo and report date with the owner and validation lead"
            - name: Validation findings tracker and remediation follow-up
              description: |-
                ## Purpose
                Findings that sit in a report and nowhere else are rarely fixed, and the same issue resurfaces at the next annual review with a worse rating. A tracker with an owner, a severity, an agreed fix and a due date for each finding, chased on a fixed rhythm, is how validation actually reduces risk.

                ## Milestones
                1. Every open finding from past validations entered with owner, severity, agreed fix and due date.
                2. A weekly chase of findings due or overdue.
                3. A closure rule: evidence of the fix reviewed by a validator before a finding closes.
                4. A monthly ageing report sent to the head of model risk.

                ## Notes
                Start from the **Remediation plan** template. Never let an owner close their own finding.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every open finding has an owner and due date in the tracker, and a monthly ageing report has gone out for three consecutive months."
                cadence: rolling
              tasks:
                - "Set up the tracker from the remediation plan template"
                - "Enter every open finding from the last two years of reports"
                - "Chase owners of findings due this week or overdue @recurring(weekly:wed)"
                - "Send the findings ageing report to the head of model risk @recurring(monthly:12)"
            - name: Ongoing model performance monitoring plan
              description: |-
                ## Purpose
                Two years after validation, a model may be running on data it was never built for, and the first sign is often a loss or a pricing complaint. A monitoring plan with named metrics, green, amber and red thresholds and an action for each colour catches that drift between validations.

                ## Milestones
                1. Monitoring metrics chosen for each high-tier model, such as forecast error, stability index or calibration drift.
                2. Thresholds set for each metric with a documented rationale.
                3. An action agreed for each threshold breach, from a note to a revalidation.
                4. A monthly monitoring pack produced and filed for every high-tier model.

                ## Notes
                This is monitoring of model performance for validation. Live trading strategy monitoring belongs to its own area.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every high-tier model has metrics with thresholds and actions, and three consecutive monthly monitoring packs are on file."
                cadence: rolling
              tasks:
                - "Choose two or three monitoring metrics for each high-tier model"
                - "Set and document green, amber and red thresholds for each metric"
                - "Produce the monthly monitoring pack for high-tier models @recurring(monthly:8)"
                - "Review whether thresholds still fit each model @recurring(quarterly)"
            - name: Annual model review cycle
              description: |-
                ## Purpose
                Models change quietly through recalibrations, new uses and new data, and an annual review is the point where someone asks whether last year's approval still holds. Running the review as a planned cycle, rather than a scramble when the date passes, keeps every tier on its revalidation schedule.

                ## Milestones
                1. A calendar of annual reviews for every model, spread across the year by tier.
                2. A short annual review checklist covering changes, monitoring results, open findings and uses.
                3. Each review concluding with confirm, revalidate in part or revalidate in full.
                4. Overdue reviews listed in the senior management report.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every inventory model has a scheduled annual review date, and no high-tier review is more than 30 days overdue at year end."
                cadence: cyclic
              tasks:
                - "Spread annual review dates across the year by tier"
                - "Write the annual review checklist"
                - "Complete each scheduled annual review and record its conclusion"
                - "Rebuild the annual review calendar for the coming year @recurring(yearly)"
            - name: Model change control and revalidation triggers
              description: |-
                ## Purpose
                One new data source, a changed parameter or a fresh use can turn an approved model into an unvalidated one without anyone noticing. A change policy that defines material change, requires a change request and names what triggers revalidation keeps the approval on file matched to the model in production.

                ## Milestones
                1. A definition of material and non-material change with examples.
                2. A change request form covering what changed, why, test evidence and impact on outputs.
                3. Revalidation triggers listed, such as a new use, a methodology change or a breach of monitoring thresholds.
                4. A change log reviewed each month against code releases.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written change policy with revalidation triggers is in force, and the change log has been reconciled to code releases for three months."
                cadence: rolling
              tasks:
                - "Draft the definition of material change with five examples"
                - "Create the change request form"
                - "List the events that trigger a full or partial revalidation"
                - "Reconcile the model change log against code releases @recurring(monthly:20)"
            - name: Model risk committee meetings
              description: |-
                ## Purpose
                Validation conclusions only carry weight when a committee with authority approves, restricts or retires models on the strength of them. A regular committee rhythm, with papers out in advance, decisions minuted and actions tracked, gives model risk a place where hard calls are made rather than deferred.

                ## Milestones
                1. Terms of reference agreed: membership, quorum, decisions the committee owns and escalation route.
                2. A standing agenda covering approvals, overdue findings, monitoring breaches and exceptions.
                3. Papers circulated a set number of days before each meeting.
                4. Decisions and actions minuted and added to the findings tracker.

                ## Notes
                Start from the **Meeting notes** template for minutes. A decision without a named owner and date is not a decision.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Terms of reference are approved, and three consecutive meetings have circulated papers and minuted decisions with owners."
                cadence: rolling
              tasks:
                - "Draft terms of reference for the model risk committee"
                - "Set the standing agenda and paper deadline"
                - "Build the committee agenda and collect papers @recurring(monthly:15)"
                - "Minute each meeting and copy actions to the findings tracker"
            - name: Quarterly inventory attestation
              description: |-
                ## Purpose
                Inventories rot: models are retired, renamed, cloned or built without being declared. A quarterly attestation, where each owner confirms their entries are complete and current, keeps the inventory true and gives an auditor clear evidence that it is maintained.

                ## Milestones
                1. An attestation request listing each owner's models and asking for changes, new models and retirements.
                2. Responses tracked with a chase for non-responders.
                3. Inventory updated from responses within two weeks.
                4. A summary of changes and non-responders sent to the committee.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two consecutive quarterly attestations reach a response rate of at least 95 percent of model owners, with changes applied to the inventory."
                cadence: cyclic
              tasks:
                - "Draft the attestation request with each owner's list of models"
                - "Send attestation requests to every model owner @recurring(quarterly)"
                - "Update the inventory from responses and chase non-responders"
                - "Report changes and non-responders to the committee"
            - name: Model overlays and adjustments log
              description: |-
                ## Purpose
                When users do not trust a model's output they add an overlay, a manual adjustment or a buffer, and these quietly become the real model. Logging every overlay with its size, rationale, approver and expiry date shows where models are weak and stops temporary fixes from becoming permanent.

                ## Milestones
                1. Every current overlay on a high-tier model recorded with size, reason and approver.
                2. An expiry or review date set for each overlay.
                3. Overlays larger than an agreed share of the output flagged for revalidation.
                4. A monthly review of the log with model owners.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All overlays on high-tier models are logged with approver and expiry, and the log has been reviewed monthly for a quarter."
                cadence: rolling
              tasks:
                - "Ask each high-tier model owner to list current overlays and adjustments"
                - "Record each overlay's size, reason, approver and expiry date"
                - "Review the overlay log with model owners @recurring(monthly:25)"
                - "Flag overlays above the agreed threshold for revalidation"
            - name: Model risk report to senior management
              description: |-
                ## Purpose
                Senior management cannot set a model risk appetite from a list of validation reports. A quarterly report on the state of the inventory, overdue validations, open high-severity findings, monitoring breaches and exceptions turns validation work into a position the firm can act on.

                ## Milestones
                1. A fixed set of five to eight measures agreed with the head of model risk.
                2. Each measure with a definition, a source and a threshold that triggers commentary.
                3. A two-page quarterly report with trend charts and three key messages.
                4. Actions requested by management recorded and followed up.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Two quarterly model risk reports have been delivered on the agreed measures, with management actions recorded and followed up."
                cadence: cyclic
              tasks:
                - "Agree five to eight model risk measures with the head of model risk"
                - "Define each measure's source and commentary threshold"
                - "Compile and send the quarterly model risk report @recurring(quarterly)"
                - "Record management's requested actions in the findings tracker"
            - name: Validation pipeline and capacity plan
              description: |-
                ## Purpose
                Validation teams fall behind when new models, annual reviews and change revalidations all land in the same month. A rolling twelve-month pipeline, sized in reviewer days against the people available, shows conflicts early enough to reschedule or bring in help.

                ## Milestones
                1. Every planned validation for the next twelve months listed with tier and estimated reviewer days.
                2. Reviewer availability entered, net of leave and other duties.
                3. Months where demand exceeds capacity highlighted with an agreed response.
                4. Developers told their validation slot at least a month ahead.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A twelve-month validation pipeline sized in reviewer days is in use, with each over-capacity month carrying an agreed response."
                cadence: rolling
              tasks:
                - "List planned validations for the next twelve months with reviewer days"
                - "Enter each reviewer's available days net of leave"
                - "Update the pipeline and flag over-capacity months @recurring(monthly:3)"
                - "Tell developers their validation slot a month in advance"
            - name: Use before validation exceptions log
              description: |-
                ## Purpose
                Business pressure sometimes puts a model into use before validation finishes, and an exception granted informally is one nobody remembers to close. A log with the reason, the restrictions, the compensating controls, the approver and an end date keeps each exception visible until validation catches up.

                ## Milestones
                1. An exception request form with reason, restrictions, compensating controls and end date.
                2. Approval authority set by model tier.
                3. Every current exception logged and linked to its pending validation.
                4. Expired exceptions escalated to the committee.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every model used before validation has a logged exception with an approver and end date, and none has expired without escalation."
                cadence: rolling
              tasks:
                - "Create the exception request form"
                - "Set who can approve exceptions at each model tier"
                - "Log every current exception with its end date"
                - "Check exceptions nearing their end date and escalate expired ones @recurring(monthly:18)"
            - name: Conceptual soundness review practice
              description: |-
                ## Purpose
                Conceptual soundness is the part of validation most often done thinly: the reviewer confirms the method appears in a textbook and moves on. Practising a structured review, asking whether the theory fits the product, whether each assumption holds for this use and what alternatives were rejected, builds the judgement that separates a validator from a checker.

                ## Milestones
                1. A list of conceptual soundness questions grouped by theory, assumptions, alternatives and use.
                2. Two existing models reviewed against the list as practice.
                3. Each review written up with the strongest objection to the chosen method.
                4. Write-ups discussed with a senior validator and their feedback recorded.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two practice conceptual soundness reviews are written up, each naming its strongest objection, and discussed with a senior validator."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Write a list of conceptual soundness questions in four groups"
                - "Pick two documented models to review as practice"
                - "Write the strongest objection to each model's chosen method"
                - "Discuss both write-ups with a senior validator"
            - name: Independent replication of model outputs
              description: |-
                ## Purpose
                Implementation errors, such as a day count convention, a sign or an off-by-one in a window, survive review when the validator only reads the code. Rebuilding the model's core calculation independently, from the documentation alone, and matching its outputs on a fixed test set is the most reliable way to find them.

                ## Milestones
                1. The core calculation rebuilt from documentation without reading the production code.
                2. A fixed test set of inputs agreed with the owner.
                3. Outputs compared with differences above a stated tolerance investigated.
                4. Every unexplained difference raised as a finding with the evidence attached.

                ## Notes
                When your build disagrees with production, assume neither is right until the cause is found. Validators get it wrong too.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "An independent replication matches production outputs within a stated tolerance on a fixed test set, or each gap is raised as a finding."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Choose one model and agree a fixed test set with its owner"
                - "Rebuild the core calculation from the documentation only"
                - "Compare outputs and investigate differences above tolerance"
                - "Write up unexplained differences as findings with evidence"
            - name: Benchmark and challenger model build
              description: |-
                ## Purpose
                Outputs from a model mean little without something to compare them against. Building a simpler challenger, such as a linear model against a gradient boosted one or a closed form against a simulation, shows how much the complexity is buying and where the production model behaves unexpectedly.

                ## Milestones
                1. A challenger approach chosen, with the reason it is a fair comparison.
                2. The challenger built on the same data and horizon as the production model.
                3. Both compared on agreed accuracy, stability and sensitivity measures.
                4. A conclusion on whether the production model's extra complexity is justified.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A challenger model is built and compared with production on agreed measures, with a written view on whether the complexity is justified."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Choose a simpler challenger and write why it is a fair comparison"
                - "Build the challenger on the same data and horizon"
                - "Compare both models on accuracy, stability and sensitivity"
                - "Write a short conclusion on whether the added complexity pays"
            - name: Outcomes analysis of model forecasts
              description: |-
                ## Purpose
                Outcomes analysis asks whether what the model said would happen did happen, and it is the evidence committees trust most. Learning the standard tests for your model types, such as exception counts for value at risk, calibration by score band for credit models or hedge performance for pricing models, makes your conclusions hard to argue with.

                ## Milestones
                1. The right outcomes tests identified for each model type in your scope.
                2. One test run end to end on a real model with its full history.
                3. Results interpreted with the test's limits, such as small samples, written beside them.
                4. A reusable script and write-up filed for the next validation.

                ## Notes
                This tests a model's forecasts against what happened. Strategy backtests are a separate discipline with their own area.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "One outcomes test has been run on a real model's full history, with results, limits and a reusable script filed."
                cadence: phased
                effort_hours_estimate: "18"
              tasks:
                - "List the outcomes tests used for each model type in your scope"
                - "Run one test end to end on a real model's history"
                - "Write the test's limits beside the results"
                - "File the script and write-up for reuse"
            - name: Sensitivity and stability testing of model inputs
              description: |-
                ## Purpose
                Any model whose output swings when one input moves slightly, or when the calibration window shifts by a month, is a model whose users are trading noise. Systematic sensitivity and stability tests show which inputs dominate, where outputs jump and whether parameters hold steady across recalibrations.

                ## Milestones
                1. Each key input shocked one at a time over a plausible range.
                2. Parameters re-estimated on rolling windows and their stability charted.
                3. Inputs ranked by their effect on the output.
                4. Any cliff edge or instability raised as a finding.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Sensitivity and rolling-window stability results for one model are written up, with inputs ranked by effect and instabilities raised."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Set a plausible shock range for each key input"
                - "Shock each input one at a time and record the output change"
                - "Re-estimate parameters on rolling windows and chart them"
                - "Raise any cliff edge or unstable parameter as a finding"
            - name: Model input data validation
              description: |-
                ## Purpose
                Most model failures trace back to the data: a vendor field that changed meaning, a filter that dropped a segment or a sample that ends just before the crisis. Validating the inputs, their lineage, completeness, representativeness and fitness for this use, is a test in its own right, not a footnote.

                ## Milestones
                1. Data lineage traced from source system to model input for one model.
                2. Completeness, outliers and missing value handling checked and recorded.
                3. The development sample compared with the population the model is used on.
                4. Data findings written with the effect they could have on outputs.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A data validation write-up for one model covers lineage, completeness and representativeness, with findings stating their output effect."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Trace one model's input data from source system to model"
                - "Check completeness, outliers and missing value handling"
                - "Compare the development sample with the current population"
                - "Write each data finding with its possible effect on outputs"
            - name: Writing findings that get fixed
              description: |-
                ## Purpose
                Vague findings, such as one saying the model may be inappropriate in some conditions, get argued about for a month and fixed never. Practising a finding format, condition, evidence, impact, severity and a specific recommended fix, produces findings an owner can act on and a committee can rate in one reading.

                ## Milestones
                1. A finding format with condition, evidence, impact, severity and recommendation.
                2. Ten past findings rewritten in the format.
                3. Each rewritten finding tested on a colleague who did not do the validation.
                4. A short style guide added to the validation report template.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten past findings are rewritten in a five-part format, and a style guide for findings is added to the report template."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write the five-part finding format with one example"
                - "Rewrite ten past findings in the format"
                - "Ask a colleague to read three and say what they would fix"
                - "Add a short findings style guide to the report template"
            - name: Reading list for model risk practice
              description: |-
                ## Purpose
                Model risk has a small, useful literature: the supervisory guidance, practitioner books on validation, papers on model risk in specific losses and the case studies of famous model failures. A reading queue worked through one item a month keeps your judgement grounded in what has actually gone wrong elsewhere.

                ## Milestones
                1. A queue of twelve items covering guidance, practice books, papers and failure case studies.
                2. Each item finished with a five-line summary of what applies to your work.
                3. One idea from the reading tried in a live validation each quarter.
                4. The queue refreshed with new items as old ones are finished.

                ## Notes
                Start from the **Reading queue** template. Case studies of model failures teach more per page than most textbooks.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Six items from the model risk reading queue are finished with summaries, and one idea from them has been used in a validation."
                cadence: rolling
              tasks:
                - "Create the reading queue from the reading queue template"
                - "Add twelve items across guidance, books, papers and failure cases"
                - "Finish one item and write a five-line summary @recurring(monthly:22)"
                - "Try one idea from the reading in a live validation"
            - name: Vendor and third-party model validation approach
              description: |-
                ## Purpose
                Vendor models, such as risk engines, credit scores and pricing libraries, still need validating, but the code and data are often hidden. A written approach covering what to ask the vendor, what to test from the outside and what compensating checks to run lets you reach a conclusion without access you will never get.

                ## Milestones
                1. A standard request list for vendors: methodology papers, their own testing, change notices and known limitations.
                2. Outside-in tests set out, such as benchmarking, sensitivity and outcomes analysis on your own data.
                3. A rule for what happens when the vendor refuses key information.
                4. The approach applied to one vendor model and its conclusion recorded.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written vendor validation approach has been applied to one vendor model, with a recorded conclusion and a rule for withheld information."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Draft the standard information request for vendors"
                - "List outside-in tests that work without source code"
                - "Write the rule for when a vendor withholds key information"
                - "Apply the approach to one vendor model and record the conclusion"
            - name: Spreadsheet and end-user tool controls
              description: |-
                ## Purpose
                Some of the most material calculations in any firm live in spreadsheets with no version control, no testing and one person who understands them. Identifying which end-user tools meet the model definition and putting proportionate controls on them, such as locking, change logs and a second-person check, closes a gap auditors find every year.

                ## Milestones
                1. End-user tools feeding material decisions identified and classed against the model definition.
                2. A minimum control set by tier: access, versioning, input checks and review.
                3. Controls applied to the top ten tools by materiality.
                4. An annual attestation by each tool owner.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The ten most material end-user tools have tiered controls applied, and their owners have completed an attestation."
                cadence: one-shot
                effort_hours_estimate: "14"
              tasks:
                - "Ask each team for spreadsheets that feed material decisions"
                - "Class each spreadsheet against the model definition"
                - "Apply the minimum control set to the ten most material tools"
                - "Collect attestations from end-user tool owners @recurring(yearly)"
            - name: Model interdependency map
              description: |-
                ## Purpose
                Models feed models: a yield curve feeds a pricing model, which feeds a risk model, which feeds a capital number. Mapping these chains shows where one upstream error spreads, which models must be revalidated together and where a single weak link carries more risk than its own tier suggests.

                ## Milestones
                1. Upstream and downstream links recorded for every high-tier model.
                2. A diagram of the main chains from market data to reported numbers.
                3. Models whose failure would affect three or more others flagged.
                4. Tiers of flagged upstream models reviewed in light of their reach.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "An interdependency map covers every high-tier model, and each upstream model affecting three or more others has had its tier reviewed."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Record the inputs and consumers of each high-tier model"
                - "Draw the main chains from market data to reported numbers"
                - "Flag models that feed three or more others"
                - "Review the tier of each flagged upstream model"
            - name: Approved uses and use limits statement
              description: |-
                ## Purpose
                Approval for daily risk limits does not make a model fit for capital planning, and a credit score built on retail customers is not fit for small businesses. A use statement for each model, listing approved uses, prohibited uses and the conditions attached, stops quiet reuse beyond what was tested.

                ## Milestones
                1. Approved and prohibited uses written for each high-tier model.
                2. Conditions of use, such as product range, data ranges or horizons, stated plainly.
                3. Use statements added to the inventory and to model output headers where possible.
                4. Users of each model told what the statement says.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every high-tier model has a written use statement in the inventory, and its known users have been told the approved uses."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write approved and prohibited uses for each high-tier model"
                - "State the product, data and horizon conditions of use"
                - "Add each use statement to the inventory entry"
                - "Reconfirm use statements with model owners @recurring(yearly)"
            - name: Decommissioning retired models
              description: |-
                ## Purpose
                Retired models linger: still scheduled to run, still read by a downstream report, still counted in the inventory. A decommissioning procedure that confirms no remaining users, archives code, data and documentation, and closes the inventory entry keeps the live inventory honest and the records available if questions come later.

                ## Milestones
                1. A decommissioning checklist covering users, downstream feeds, scheduled jobs and archive.
                2. Models no longer in use identified from the latest attestation.
                3. Each retirement confirmed by its owner and downstream consumers.
                4. Archived records kept for the retention period your firm sets.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A decommissioning checklist is in use, and every model reported as unused in the latest attestation has been retired or reinstated."
                cadence: rolling
              tasks:
                - "Write the decommissioning checklist"
                - "List models reported unused in the latest attestation"
                - "Confirm each retirement with the owner and downstream users"
                - "Sweep the inventory for models with no recent use @recurring(yearly)"
            - name: Compensating controls for models with open findings
              description: |-
                ## Purpose
                High-severity findings can take months to fix, and the model keeps running in the meantime. Agreeing compensating controls, such as tighter limits, manual review of outputs or a conservative overlay, and checking that they actually operate, limits the damage while the real fix is built.

                ## Milestones
                1. A compensating control agreed for every open high-severity finding.
                2. An owner and an evidence requirement set for each control.
                3. Evidence that each control operated collected monthly.
                4. Controls removed only when the underlying finding is closed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every open high-severity finding has a compensating control with monthly evidence of operation on file."
                cadence: rolling
              tasks:
                - "List open high-severity findings without a compensating control"
                - "Agree a control, owner and evidence requirement for each"
                - "Collect evidence that each compensating control operated @recurring(monthly:28)"
                - "Remove a control only after its finding closes"
            - name: Pre-submission readiness check before validation
              description: |-
                ## Purpose
                For a model owner, the slowest validations are the ones submitted with missing tests, stale data and a document written for insiders. Running your own readiness check against the documentation standard a week before submission catches what the validator would otherwise send back.

                ## Milestones
                1. The documentation checklist completed with any gaps filled.
                2. Code, data snapshot and results packaged so a validator can rerun them.
                3. Known limitations stated plainly before the validator finds them.
                4. A colleague outside the project read the document and listed their questions.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A model is submitted for validation with a completed checklist, a rerunnable package and a colleague's questions answered in the document."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Run the documentation checklist against your model document"
                - "Package code, a data snapshot and results so they rerun cleanly"
                - "Write the known limitations in plain words"
                - "Ask a colleague outside the project to read it and list questions"
            - name: Internal audit or supervisory review of model risk
              description: |-
                ## Purpose
                An internal audit or a supervisory review of model risk tests whether the framework works in practice, sampling inventory entries, validations and findings. Preparing a clear evidence pack in advance, and knowing where your weak spots are, turns a stressful review into a structured one.

                ## Milestones
                1. The review's scope and request list received and mapped to evidence owners.
                2. An evidence pack assembled: policy, inventory, tiering, sample validations, findings tracker and committee minutes.
                3. Known weaknesses listed with the remediation already under way.
                4. Review findings logged in the tracker with owners and dates.

                ## Notes
                Answer what is asked, with evidence. Agree with compliance or legal how any supervisory communication is handled.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An evidence pack is delivered by the review's deadline, and every resulting finding is in the tracker with an owner and date."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Map each item on the request list to an evidence owner"
                - "Assemble the evidence pack and check every link opens"
                - "List known weaknesses with the remediation under way"
                - "Log every review finding in the tracker with owner and date"
            - name: Model go-live approval meeting
              description: |-
                ## Purpose
                Putting a new model into production is a decision with an owner, conditions and a record, not an email saying the validation is done. Preparing the approval meeting with the validation conclusion, open findings, monitoring plan and use statement in one paper gets a clean decision on the day.

                ## Milestones
                1. An approval paper with validation rating, open findings, conditions, monitoring and use statement.
                2. Paper circulated to approvers ahead of the meeting.
                3. Decision recorded: approve, approve with conditions or reject.
                4. Conditions entered in the tracker and the inventory updated.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A go-live decision is minuted with any conditions in the tracker, and the inventory shows the model's new status."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Draft the approval paper with rating, findings and conditions"
                - "Circulate the paper to approvers ahead of the meeting"
                - "Record the decision and any conditions attached"
                - "Update the inventory and tracker after the meeting"
            - name: Annual model risk report to the board
              description: |-
                ## Purpose
                Boards are asked to own model risk appetite but rarely see more than a line in the risk report. A short annual paper on the size and health of the model estate, the year's material findings, appetite breaches and next year's priorities gives directors something they can actually challenge.

                ## Milestones
                1. A paper of no more than six pages covering estate size, tiers, findings, breaches and priorities.
                2. Appetite measures reported against their limits with commentary.
                3. Three questions the board should ask, written into the paper.
                4. Board decisions and requests minuted and assigned.

                ## Notes
                Start from the **Board meeting** template. Lead with what has changed since last year, not with methodology.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "An annual model risk paper of six pages or fewer is presented to the board, with its decisions and requests minuted and assigned."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Collect the year's inventory, findings and appetite measures"
                - "Draft the paper with three questions for the board"
                - "Rehearse the paper with the head of model risk"
                - "Prepare the annual board paper on model risk @recurring(yearly)"
            - name: Responding to a validation that rejected your model
              description: |-
                ## Purpose
                Getting a not approved rating on a model you built makes for a hard week, and the instinct is to argue every finding. Working through the report calmly, separating the findings you accept from those you can evidence against, and agreeing a remediation plan gets the model back to review faster than a dispute.

                ## Milestones
                1. Every finding classed as accepted, partly accepted or disputed with evidence.
                2. A meeting with the validator to walk through disputed findings.
                3. A remediation plan with dates for every accepted finding.
                4. The model resubmitted with a response letter mapping each finding to its fix.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A response letter maps every finding to a fix or evidence, and a dated remediation plan is agreed with the validator."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Read the report twice before replying to anyone"
                - "Class each finding as accepted, partly accepted or disputed"
                - "Book a walk-through of disputed findings with the validator"
                - "Write a response letter mapping each finding to its fix"
            - name: First 90 days as a model validation analyst
              description: |-
                ## Purpose
                New validators often arrive from research or a doctorate with strong technical skills and no sense of how the function works, who the model owners are or what a good report looks like. A 90-day plan, from reading the policy to leading a small validation, builds that context deliberately instead of by trial and error.

                ## Milestones
                1. By day 30: policy, report template and five past validations read, and every model owner in your scope met.
                2. By day 60: one section of a live validation written under review.
                3. By day 90: a low-tier validation led end to end.
                4. Feedback from your manager recorded at each checkpoint.

                ## Notes
                Start from the **Onboarding 30/60/90** template.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A low-tier validation led by you is completed by day 90, with manager feedback recorded at days 30, 60 and 90."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Set up the plan from the onboarding 30/60/90 template"
                - "Read the policy, report template and five past validations"
                - "Book introductions with each model owner in your scope"
                - "Ask your manager for a low-tier validation to lead by day 90"
            - name: Moving from front-office research to model validation
              description: |-
                ## Purpose
                Researchers who move into validation bring sharp modelling instincts but have to swap building for challenging, and speed for evidence. Planning the move, from understanding the role's day to translating past work into validation language, helps you decide whether the switch suits you and land it if it does.

                ## Milestones
                1. Three conversations with current validators about their week, their reviews and their frustrations.
                2. A note on which of your past projects show challenge, testing and documentation skills.
                3. A CV rewritten to lead with review, testing and written communication.
                4. A decision recorded on whether to apply, with reasons.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "After three conversations with validators, a written decision on whether to move into validation is recorded with reasons."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask three validators for a short call about their work"
                - "List past projects that show challenge and testing skills"
                - "Rewrite your CV to lead with review and written work"
                - "Write down your decision on applying and why"
            - name: Preparing your first model for independent review
              description: |-
                ## Purpose
                Researchers who have only ever had their work checked by a supervisor or co-author are often surprised by how much a validator asks. Knowing in advance what a review covers, what evidence to keep and how to answer challenge without defensiveness makes your first validation shorter and your model stronger.

                ## Milestones
                1. The validation scope and report template read before submission.
                2. A decision log written showing why each modelling choice was made.
                3. Alternative approaches you tried, and why they lost, recorded with results.
                4. Every validator question answered in writing within the agreed time.

                ## Notes
                Validators are not opponents. A question you can answer with evidence is a finding that never gets written.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A decision log and a record of rejected alternatives are submitted with the model, and every validator question gets a written answer."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Ask for the validation scope and report template early"
                - "Write a decision log covering each major modelling choice"
                - "Record the alternatives you tried and why they lost"
                - "Answer every validator question in writing within the agreed time"
            - name: One-person validation for a small fund or startup
              description: |-
                ## Purpose
                Small funds and fintechs with a handful of models cannot staff a validation team, but allocators, lenders and regulators still ask how models are reviewed. A proportionate setup, with a short policy, an inventory, peer review across people who did not build each model and an occasional external review, answers that question honestly.

                ## Milestones
                1. A two-page model risk policy sized for the firm.
                2. An inventory and tiering of every model the firm relies on.
                3. Peer review pairs set so no one reviews their own model.
                4. A decision on which top-tier models get an external review and when.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A two-page policy, an inventory and peer review pairs are in place, with a dated decision on external review of top-tier models."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask the agent to draft a two-page model risk policy for a small firm"
                - "Build an inventory and tier every model the firm relies on"
                - "Set peer review pairs so no one reviews their own model"
                - "Decide which top-tier models need an external review and by when"
            - name: Independent validation engagement as a consultant
              description: |-
                ## Purpose
                Independent validators on contract are judged on a fixed-fee report delivered on time, with findings the client can defend to its own committee or supervisor. A clear engagement structure, from scope letter to final report and debrief, protects your independence and keeps the work inside what was agreed.

                ## Milestones
                1. A scope letter with models, tests, deliverables, timeline and independence statement.
                2. An evidence request sent and tracked against its due date.
                3. A draft report shared for factual accuracy review only.
                4. A final report delivered and a debrief held with the client's model risk lead.

                ## Notes
                Factual accuracy review is not negotiation. Keep a record of any requested change to a rating and your reply.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A consulting validation is delivered against a signed scope letter, with the draft accuracy review and any rating change requests recorded."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Draft a scope letter with tests, deliverables and an independence statement"
                - "Send the evidence request and track it against its due date"
                - "Share the draft report for factual accuracy comments only"
                - "Hold a debrief with the client's model risk lead"
            - name: Stepping up to model risk manager
              description: |-
                ## Purpose
                Moving from validating models to running model risk means trading technical depth for prioritisation, people and committee work. Planning the step, with the governance knowledge, stakeholder relationships and evidence of judgement a hiring panel looks for, makes the move deliberate rather than accidental.

                ## Milestones
                1. A gap list against a model risk manager role description.
                2. One governance task, such as the committee paper or the senior report, taken on for six months.
                3. Feedback from two senior stakeholders on your judgement in contested reviews.
                4. A development plan agreed with your manager with a target date.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A development plan towards model risk manager is agreed with your manager, backed by six months of a governance task and stakeholder feedback."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Compare your experience with a model risk manager role description"
                - "Volunteer to own the committee paper or senior report"
                - "Ask two senior stakeholders for feedback on a contested review"
                - "Agree a development plan with your manager"
            - name: Validating machine learning models
              description: |-
                ## Purpose
                Machine learning models raise validation questions classical models do not: opaque features, hyperparameter searches that quietly overfit, explanations that vary between runs and performance that drifts as data shifts. A validation approach adapted for these models, covering explainability, fairness where relevant, stability and drift, lets you approve them with conditions you can monitor.

                ## Milestones
                1. A checklist of extra tests for machine learning models: search history, explainability, stability across seeds and drift.
                2. Explanation methods applied and checked for consistency across retrains.
                3. Fairness or bias tests run where the model affects people.
                4. Drift monitoring added to the model's ongoing monitoring plan.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "One machine learning model is validated with the extended checklist, and drift metrics are live in its monitoring plan."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Write the extra test checklist for machine learning models"
                - "Check feature explanations for consistency across retrains"
                - "Run fairness tests where the model affects people"
                - "Review drift metrics for machine learning models in scope @recurring(monthly:10)"
            - name: Generative AI and language model tool review
              description: |-
                ## Purpose
                Language model tools are arriving in research summaries, code generation and client documents, often without anyone deciding whether they are models. A review approach for these tools, covering use cases, failure modes such as fabricated facts, human review steps and vendor change, brings them inside the framework before an error reaches a client.

                ## Milestones
                1. Every generative AI tool in use listed with its use cases and owner.
                2. Each use case tiered by the harm an error could cause.
                3. Test sets of prompts and expected answers built for the top use cases.
                4. Human review and logging requirements set for each tier.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every generative AI use case in the firm is tiered, and the top use cases each have a prompt test set and review requirements."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "List generative AI tools in use with their owners and use cases"
                - "Tier each use case by the harm an error could cause"
                - "Build prompt test sets for the three highest-tier use cases"
                - "Set human review and logging rules for each tier"
            - name: Pricing model validation and model reserves
              description: |-
                ## Purpose
                Derivative pricing models carry risk in the gap between the model and the market: calibration that fits vanilla quotes but misprices exotics, or a model chosen because it gives a comfortable number. Validating a pricing model against alternative models and market evidence, and sizing a model reserve for the remaining uncertainty, is specialist work with direct effect on reported values.

                ## Milestones
                1. Calibration quality checked across strikes, maturities and dates.
                2. Prices compared against at least one alternative model for the same product.
                3. Hedge performance tested on historical data.
                4. A model uncertainty measure proposed for the reserve, agreed with the valuation control team.

                ## Notes
                Reserve methods and accounting treatment are for the finance and valuation control teams to decide. Your role is the evidence.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A pricing model validation compares at least one alternative model, tests hedge performance and proposes a reserve measure to valuation control."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Check calibration error across strikes, maturities and dates"
                - "Price the same products with one alternative model"
                - "Test hedge performance on historical data"
                - "Propose a model uncertainty measure to valuation control"
            - name: Credit risk model validation
              description: |-
                ## Purpose
                Probability of default, loss given default and exposure models drive provisions and capital, and supervisors look at them closely. Validating them well means checking segmentation, the definition of default, rank ordering, calibration against observed defaults and behaviour in a downturn, all with very few default events to work with.

                ## Milestones
                1. The default definition and data window checked for consistency with the model's use.
                2. Rank ordering and calibration tested by segment and by year.
                3. Downturn and forward-looking adjustments reviewed for evidence and governance.
                4. Low-default portfolio limits stated in the report with the methods used.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A credit model validation report covers default definition, rank ordering, calibration by segment and downturn adjustments."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Check the default definition against the model's use"
                - "Test rank ordering and calibration by segment and year"
                - "Review the evidence behind downturn and forward-looking adjustments"
                - "State the low-default limits and methods in the report"
            - name: Model risk appetite and aggregate model risk
              description: |-
                ## Purpose
                Firms are asked to state an appetite for model risk and then rarely measure it. Defining a few aggregate measures, such as the share of material models overdue for validation, open high-severity findings or total overlays, and setting limits for each gives the appetite statement teeth.

                ## Milestones
                1. A draft appetite statement in plain words.
                2. Four to six aggregate measures with definitions and limits.
                3. Twelve months of history computed for each measure.
                4. The statement and limits approved by the committee and fed into the senior report.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A model risk appetite statement with four to six measured limits is approved by the committee and reported quarterly."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Draft a plain-words model risk appetite statement"
                - "Define four to six aggregate measures with proposed limits"
                - "Compute twelve months of history for each measure"
                - "Take the statement and limits to the committee for approval"
            - name: Quantifying uncertainty in a single model's output
              description: |-
                ## Purpose
                Committees often want to know how wrong a model could be, not just whether it passed. Estimating output uncertainty for one material model, by combining parameter uncertainty, alternative specifications and data choices, gives a range that informs overlays, buffers and the confidence users place in the number.

                ## Milestones
                1. The main sources of uncertainty listed: parameters, specification, data and implementation.
                2. Parameter uncertainty estimated by bootstrap or a posterior distribution.
                3. Outputs from alternative specifications set side by side.
                4. A range for the output written up with how it should and should not be used.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An output uncertainty range for one material model is written up, combining parameter, specification and data sources."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "List the sources of uncertainty for one material model"
                - "Bootstrap the parameters and record the output spread"
                - "Run two alternative specifications and compare outputs"
                - "Write up the range and how it should be used"
---

# Model Validation and Model Risk

This area is for the validators who review quantitative models and for the researchers and model owners whose work has to pass that review. It starts with foundations (what counts as a model, an inventory, a tiering method, clear roles and a documentation standard), then the machinery of findings, monitoring, change control and committee work, the core validation skills of conceptual review, replication, benchmarking and outcomes analysis, decisions about vendor models, spreadsheets and model use, dated events such as an audit or a go-live approval, variants for a new analyst, a front-office researcher, a small fund and a consultant, and finally specialist work on machine learning, generative AI, pricing models and credit models.

What repeats is a weekly chase of open findings, a monthly monitoring pack, change log and committee agenda, quarterly inventory attestation and senior management reporting, and an annual review of every model in scope. The Risk register, Remediation plan, Meeting notes, Reading queue, Board meeting and Onboarding 30/60/90 templates pair with the projects that name them. Validation organises evidence and judgement about a model; it is not investment, legal or regulatory advice, so agree how your firm reads the rules with its compliance and legal teams. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
