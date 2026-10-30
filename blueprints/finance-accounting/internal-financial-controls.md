---
id: finance-accounting.internal-financial-controls
name: Internal Financial Controls
description: "A risk and control matrix with named owners, segregation of duties and access reviews, walkthroughs and sample testing, deficiency tracking and remediation, and reporting that lets leadership rely on the numbers."
category: business
version: 1.0.0
tags: [finance-accounting, internal-financial-controls, enterprise, manager, team, segregation-of-duties, control-testing, risk-control-matrix]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - compliance-control
    - metrics-log
    - remediation-plan
    - meeting-notes
    - operational-checklist
    - onboarding-30-60-90
  pillars:
    - name: Finance & Accounting
      emoji: "🧾"
      description: "The money side of a business: bookkeeping and the monthly close, cash flow, budgeting and forecasting, billing and collections, payroll, tax, audit and financial controls."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Internal Financial Controls
          description: "Designing and testing controls such as segregation of duties, approvals and reconciliations that stop errors and fraud in growing and larger organisations."
          projects:
            - name: Finance control risk assessment by process
              description: |-
                ## Purpose
                Controls designed without a risk assessment tend to cluster where checking is easy, such as bank reconciliations, while the real exposures sit in revenue cut-off, manual journals or supplier master data. Walking each finance process and asking what could go wrong, how likely it is and how far it would move the accounts gives you a ranked list to design against. It takes a few workshops and decides where the next year's effort goes.

                ## Milestones
                1. Every finance process listed, from order to cash through to the close and reporting.
                2. For each process, the things that could go wrong written as specific risk statements.
                3. Each risk scored for likelihood and impact on the accounts on one agreed scale.
                4. A ranked risk list reviewed and accepted by the finance director or controller.

                ## Notes
                Start from the **Risk register** template. Write risks as events, such as 'sales recorded in the wrong period', not as missing controls.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A scored risk list covering every finance process, approved and dated by the finance lead."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List the finance processes from order to cash through to reporting"
                - "Hold a one-hour risk workshop for each process with the people who run it"
                - "Score every risk for likelihood and impact on the same scale"
                - "Take the ranked list to the finance lead for approval"
            - name: Significant accounts and key process scoping
              description: |-
                ## Purpose
                Not every account needs the same level of control. Comparing each balance and transaction stream against a materiality figure, then adding the accounts that are small but judgemental or fraud-prone, tells you which processes need key controls and which can rely on lighter checks. Scoping first stops the control matrix growing to four hundred rows nobody tests.

                ## Milestones
                1. An overall materiality figure agreed with the finance lead, with its basis written down.
                2. Each line of the trial balance marked in scope or out of scope with a reason.
                3. Qualitative additions noted, such as provisions, related party balances or revenue estimates.
                4. Each in-scope account mapped to the process and system that feeds it.

                ## Notes
                If you have an external auditor, ask which benchmark and percentage they use, so your scoping and theirs line up.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A scoping document marking every trial balance line in or out of scope against a stated materiality figure, signed off by the finance lead."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Agree the materiality benchmark and figure with the finance lead"
                - "Mark each trial balance line in scope or out of scope with a reason"
                - "Add small accounts that carry heavy judgement or fraud risk"
                - "Map every in-scope account to the process and system behind it"
            - name: Risk and control matrix for core finance cycles
              description: |-
                ## Purpose
                The risk and control matrix is the single document every later test, review and audit request points back to. Each row links a risk to the control that addresses it, its owner and frequency, whether it is preventive or detective, manual or automated, and the evidence it leaves. Building it for the in-scope cycles first, then widening, keeps it usable.

                ## Milestones
                1. A matrix layout agreed, with columns for risk, control, owner, frequency, type, nature and evidence.
                2. Every ranked risk in scope linked to at least one control, or flagged as a gap.
                3. Key controls marked, so testing effort can focus on them.
                4. Gaps listed, each with an owner asked to propose a control.

                ## Notes
                Aim for fewer, better controls: one well-evidenced key control per risk usually beats three informal ones.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A risk and control matrix covering every in-scope cycle, with each risk linked to a control or a recorded gap, approved by the controller."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Agree the columns the matrix will hold before filling any rows"
                - "Enter the ranked risks for the order to cash cycle first"
                - "Link each risk to its current control or mark it as a gap"
                - "Mark the key controls and send the draft to process owners for comment"
            - name: Process narratives and flowcharts for key cycles
              description: |-
                ## Purpose
                Auditors, new staff and control testers all ask the same first question: how does a transaction actually move from start to ledger? A short narrative and a swimlane flowchart for each key cycle, with control points marked, answers it once and exposes the hand-offs where nobody checks anything.

                ## Milestones
                1. A narrative of no more than two pages for each key cycle.
                2. A swimlane flowchart showing each team, system and hand-off.
                3. Every control in the matrix shown at the point where it happens.
                4. Each narrative confirmed as accurate by the person who runs the process.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Narratives and flowcharts for every in-scope cycle, each confirmed accurate by its process owner and linked from the control matrix."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Pick the first cycle and book an hour with the person who runs it"
                - "Ask the agent to turn your interview notes into a first-draft narrative"
                - "Draw the swimlane flowchart and mark each control point"
                - "Ask the process owner to confirm the narrative and flowchart are accurate"
            - name: Control owner register with named backups
              description: |-
                ## Purpose
                Controls with no named owner run when someone remembers, and a control owned by one person stops when they go on leave. A register naming the owner and backup for every key control, agreed with each of them and their manager, is the cheapest fix in the whole area.

                ## Milestones
                1. Every key control in the matrix assigned to a named owner by role and by person.
                2. A trained backup named for each key control.
                3. Each owner told in writing what they own, how often it runs and what evidence to keep.
                4. The register updated whenever someone joins, moves or leaves.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every key control has a named owner and backup who have each confirmed the assignment in writing."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Fill in an owner and backup for every key control in the matrix"
                - "Send each owner a note listing their controls, frequency and evidence"
                - "Get written confirmation back from every owner and backup"
                - "Check the owner register against the latest staff list @recurring(quarterly)"
            - name: Segregation of duties conflict matrix
              description: |-
                ## Purpose
                Fraud and undetected error usually need one person to hold two incompatible duties: setting up a supplier and paying it, raising an invoice and posting the cash, or posting a journal and approving it. A conflict matrix lists those incompatible pairs for your processes, then maps who currently holds them, so you see real conflicts instead of guessing.

                ## Milestones
                1. A list of incompatible duty pairs for each in-scope process.
                2. Every finance team member mapped against the duties they perform and the system access they hold.
                3. Each conflict marked as removed, accepted with a compensating control, or to be fixed.
                4. The matrix reviewed and dated by the controller.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A conflict matrix listing incompatible duties and every person holding them, with each conflict resolved or covered by a named compensating control."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write the incompatible duty pairs for purchasing, sales, payroll and journals"
                - "Map each team member to the duties they perform today"
                - "Compare the duty map with system access, not just job descriptions"
                - "Decide for each conflict whether to split, compensate or accept it"
            - name: Finance system user access baseline
              description: |-
                ## Purpose
                Access lists in accounting systems grow quietly: leavers left active, temporary admin rights never removed, a shared login for the payment portal. Extracting every user and role from each finance system once, and agreeing which access is right, gives the baseline every later access review compares against.

                ## Milestones
                1. A dated user and role extract saved for each finance system.
                2. Each user matched to a current employee or contractor, with orphan accounts flagged.
                3. Shared and generic logins identified, with a plan to replace them.
                4. Excess or unexplained access removed or approved by the system owner.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated access baseline for every finance system, with orphan and shared accounts removed or formally approved."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Export the full user and role list from each finance system"
                - "Match every account to a current employee or contractor"
                - "Flag shared logins, leavers and administrator rights for removal"
                - "Get the system owner to approve or remove each flagged account"
            - name: Control description and evidence standard
              description: |-
                ## Purpose
                Vague descriptions such as 'the manager reviews the report' fail testing because nobody can say what was checked, against what, or how often. A short standard requiring every control description to name who, what, when, how, the threshold for follow-up and the evidence kept gives owners a model to copy and testers something to test.

                ## Milestones
                1. A one-page standard listing the six elements every control description must contain.
                2. Three worked examples from your own matrix, shown before and after.
                3. A rule for evidence: what counts, where it is stored and how long it is kept.
                4. The standard shared with every control owner.

                ## Notes
                Start from the **Compliance control** template. Evidence of review means something a tester can reperform, such as a signed report with the follow-up noted, not a tick in a box.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written description and evidence standard, with three worked examples, sent to every control owner."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the six elements every control description must include"
                - "Rewrite three weak descriptions from the matrix as worked examples"
                - "Set where control evidence is stored and how long it is kept"
                - "Send the standard and examples to all control owners"
            - name: Choosing a control framework and mapping to it
              description: |-
                ## Purpose
                Frameworks such as the COSO internal control framework give boards and auditors a common language, and some regulators and lenders expect one to be named. Picking the framework your auditors recognise, then mapping your controls to its principles, shows where the environment is thin, such as risk assessment or monitoring, rather than only transaction checks.

                ## Milestones
                1. The framework expectations of your auditors, regulator or lenders confirmed.
                2. One framework chosen and the reason recorded.
                3. Each framework principle mapped to existing controls or flagged as uncovered.
                4. Uncovered principles added to the deficiency log with an owner.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded framework choice with every principle mapped to at least one control or a logged gap."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask your auditors and lenders which control framework they expect"
                - "Record the framework you choose and why"
                - "Map each principle of the framework to controls in your matrix"
                - "Log principles with no control against them as gaps"
            - name: Quarterly finance system user access review
              description: |-
                ## Purpose
                Access drifts within months of a clean baseline, and auditors will ask for proof that someone looked. A quarterly review in which each system owner confirms every user's access is still needed, with removals actioned and evidenced, keeps the baseline true and creates the record testers want.

                ## Milestones
                1. A quarterly extract for each finance system compared with the last approved list.
                2. Each user confirmed or removed by the system owner, not by IT alone.
                3. Removals checked in the system after they are made.
                4. Four quarters of signed reviews filed together.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive quarterly access reviews, each signed by the system owner with removals verified in the system."
                cadence: rolling
              tasks:
                - "Agree the review month and the system owner for each finance system"
                - "Run the user extract and compare it with last quarter's approved list @recurring(quarterly)"
                - "Check each requested removal has actually happened in the system"
                - "File the signed review with the extract it was based on"
            - name: Leaver and mover access removal check
              description: |-
                ## Purpose
                The commonest access finding is a leaver who could still log in weeks after leaving, or a mover who kept old rights after changing team. Matching each month's HR leavers and movers list against finance system users closes that gap quickly, long before the quarterly review.

                ## Milestones
                1. A monthly leavers and movers list from HR agreed as the trigger.
                2. Each leaver's finance access removed within an agreed number of days.
                3. Movers' old access removed before new access is granted.
                4. Exceptions logged with the reason and the date fixed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six months in which every leaver's finance access was removed within the agreed days, with any exceptions logged."
                cadence: rolling
              tasks:
                - "Agree with HR a monthly list of leavers and team moves"
                - "Match the HR leavers and movers list against finance system users @recurring(monthly:3)"
                - "Log any late removal with the reason and the date it was fixed"
            - name: Privileged and superuser activity review
              description: |-
                ## Purpose
                Administrator accounts can post journals, change settings and switch off approval workflows, so misuse defeats most other controls. Keeping the number small and having someone independent read the activity log each month means privileged access is used for its purpose and nothing else.

                ## Milestones
                1. Every privileged account in finance systems listed with its holder and purpose.
                2. Privileged accounts cut to the minimum, ideally with time-limited access on request.
                3. A monthly activity log reviewed by someone without privileged access.
                4. Unusual activity followed up and the outcome recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly independent reviews of privileged activity, with every unusual entry explained in writing."
                cadence: rolling
              tasks:
                - "List every administrator account in each finance system and who holds it"
                - "Remove privileged rights that are not needed day to day"
                - "Review the privileged activity log for the month @recurring(monthly:16)"
                - "Record the follow-up on each unusual entry"
            - name: Monthly control self-certification by owners
              description: |-
                ## Purpose
                Waiting for the annual test to find out a control stopped in March is too late. A short monthly self-certification, where each owner confirms the control ran, notes exceptions and links the evidence, catches lapses within weeks and builds the habit of keeping evidence as you go.

                ## Milestones
                1. A simple certification form with yes, no and exception fields for each key control.
                2. A fixed monthly deadline for owners to complete it.
                3. Missed or failed controls followed up within the same month.
                4. The completion rate tracked month by month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly certifications returned by at least 95 percent of key control owners for six months, with every reported failure followed up."
                cadence: rolling
              tasks:
                - "Build a one-page certification form for each owner's key controls"
                - "Send the certification request to every control owner @recurring(monthly:7)"
                - "Chase missing certifications and follow up every reported exception"
                - "Add the month's completion rate to a running record"
            - name: Journal approval control exception report
              description: |-
                ## Purpose
                Journal approval only works if the system blocks self-approval and nobody posts around the workflow. A monthly exception report listing self-approved journals, entries posted after period lock and journals from users outside finance tests whether the control really operated, rather than trusting that it did.

                ## Milestones
                1. Report criteria agreed: self-approval, posting after lock, users outside finance and a value threshold.
                2. The report run each month by someone who does not post journals.
                3. Each exception explained, reversed or escalated.
                4. A trend of exception counts kept to show whether the control is holding.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly exception reports run by a non-poster, with every exception explained, reversed or escalated."
                cadence: rolling
              tasks:
                - "Agree the exception criteria with the controller"
                - "Run the journal exception report and investigate each line @recurring(monthly:10)"
                - "Escalate any self-approved or after-lock journal to the controller"
                - "Keep a running count of exceptions by type"
            - name: Master data change log review
              description: |-
                ## Purpose
                Changes to supplier, customer and employee master data, such as a new bank account or a raised credit limit, alter every payment and invoice that follows. Reviewing the change log monthly against approved requests confirms that each change had a request and an approver who was not the person who keyed it.

                ## Milestones
                1. Change logs switched on for supplier, customer and employee master files.
                2. A monthly log extract compared with approved change requests.
                3. Every unmatched change investigated with the person who made it.
                4. Results signed by a reviewer independent of master data maintenance.

                ## Notes
                Callback checks on supplier bank detail changes belong to payment fraud work; this review confirms afterwards that the process was followed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly master data reviews in which every logged change is matched to an approved request or investigated."
                cadence: rolling
              tasks:
                - "Confirm change logging is switched on for each master data file"
                - "Compare the month's master data change log with approved requests @recurring(monthly:13)"
                - "Investigate every change with no matching request"
                - "Sign and file each monthly review"
            - name: Finance system change management control
              description: |-
                ## Purpose
                One changed approval limit, a new workflow rule or an edited report script can quietly break controls that tested fine last quarter. Requiring every configuration change to finance systems to be requested, tested, approved and logged before it goes live protects the automated controls the rest of the matrix relies on.

                ## Milestones
                1. A definition of which finance system changes need formal approval.
                2. A change request record with test evidence and an approver for each change.
                3. Administrators unable to move their own changes into the live system unreviewed.
                4. A monthly list of system changes compared with approved requests.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every configuration change to finance systems over six months traced to an approved request with test evidence."
                cadence: rolling
              tasks:
                - "Write down which finance system changes need a formal request"
                - "Set up a change request record with test and approval fields"
                - "Compare the system change history with approved requests @recurring(monthly:19)"
                - "Raise any unapproved change with the system owner"
            - name: Annual control testing calendar
              description: |-
                ## Purpose
                Testing every key control in the last month of the year overloads the team and leaves no time to fix what fails. Spreading tests across the year, with higher-risk controls tested earlier and a roll-forward before year end, leaves room to remediate and retest before the attestation.

                ## Milestones
                1. Every key control given a planned test quarter based on risk and frequency.
                2. Testers assigned who are independent of the controls they test.
                3. Each quarter's tests completed and results logged.
                4. A roll-forward window booked before year end for controls tested early.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every key control tested at least once in the year to the calendar, with failures retested before year end."
                cadence: cyclic
              tasks:
                - "Assign every key control a test quarter, riskiest controls first"
                - "Pick independent testers for each group of controls"
                - "Review testing progress against the calendar @recurring(quarterly)"
                - "Book the year-end roll-forward window now"
            - name: Control deficiency log and follow-up
              description: |-
                ## Purpose
                Findings from tests, audits and self-certifications are only useful if they get fixed, and they are forgotten when they live in separate emails. One deficiency log, with severity, owner, agreed fix and target date for every item, gives a single list to chase and to report upward.

                ## Milestones
                1. A single log combining findings from testing, internal audit, external audit and certification.
                2. Each deficiency rated for severity and given an owner and target date.
                3. Overdue items escalated every month.
                4. Closed items supported by retest evidence, not just the owner's word.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "One deficiency log in use for six months, with no item past its target date without a recorded escalation."
                cadence: rolling
              tasks:
                - "Gather open findings from every source into one log"
                - "Give each finding a severity, owner and target date"
                - "Chase overdue deficiencies and escalate those past their date @recurring(monthly:24)"
                - "Close items only after a retest confirms the fix"
            - name: Annual risk and control matrix refresh
              description: |-
                ## Purpose
                Businesses add products, systems and entities every year while the control matrix stays frozen at the year it was written. A yearly refresh, run before the testing calendar is set, adds new risks, retires controls for processes that have gone and updates owners and frequencies.

                ## Milestones
                1. Changes in the year listed: new systems, products, entities, people and regulations.
                2. Risks and controls added or retired to match.
                3. Owners and frequencies updated.
                4. The refreshed matrix approved and version-dated before testing starts.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A version-dated control matrix refreshed and approved each year before the testing calendar is set."
                cadence: cyclic
              tasks:
                - "List the business, system and staff changes since the last refresh"
                - "Add, change or retire risks and controls to match those changes"
                - "Approve and date the new matrix version @recurring(yearly)"
            - name: Quarterly controls report to the audit committee
              description: |-
                ## Purpose
                Boards and audit committees need to know whether controls are working without reading the matrix. A two-page quarterly report covering testing progress, open deficiencies by severity, overdue fixes and access review completion gives them that, and makes slippage visible long before year end.

                ## Milestones
                1. A fixed report format agreed with the committee chair.
                2. Each quarter's figures drawn from the testing calendar and deficiency log.
                3. Overdue or severe items named with their owner and plan.
                4. Committee questions and actions recorded and tracked.

                ## Notes
                Start from the **Metrics log** template to keep the quarter-on-quarter figures in one place.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Four quarterly controls reports presented to the audit committee in a year, each with recorded actions."
                cadence: cyclic
              tasks:
                - "Agree the report format and length with the committee chair"
                - "Draft the quarterly controls report from the log and calendar @recurring(quarterly)"
                - "Record committee questions and add actions to the deficiency log"
            - name: Walkthroughs to test control design
              description: |-
                ## Purpose
                Before testing whether a control worked all year, you need to know it could stop the risk at all. A walkthrough follows one transaction from start to finish, inspects the control at each point and asks whether its design would catch the error, and it is the skill testers use most.

                ## Milestones
                1. Guidance on design walkthroughs from your auditors or a professional body read and summarised.
                2. Three walkthroughs completed on real transactions, one per cycle.
                3. Each walkthrough recorded with the documents inspected and a design conclusion.
                4. At least one design gap found and logged, or a written reason none exist.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three documented walkthroughs, each with inspected documents and a design conclusion, reviewed by the controller."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Read your auditors' or a professional body's guide to walkthroughs"
                - "Choose one recent transaction from each of three cycles"
                - "Follow each transaction end to end and inspect the control at each step"
                - "Write a design conclusion for each control you inspected"
            - name: Testing operating effectiveness with samples
              description: |-
                ## Purpose
                Operating effectiveness asks whether the control ran properly every time across the period, and it is tested on a sample. Learning how sample sizes scale with control frequency, how to select items without bias and what to do with one exception is what separates a test that will stand up from a box-ticking exercise.

                ## Milestones
                1. A sample size table by control frequency agreed with your auditors.
                2. Random or systematic selection used, with the method recorded.
                3. Five controls tested, each with a workpaper showing items, attributes and results.
                4. A written rule for when one exception means extending the sample or failing the control.

                ## Notes
                Do not invent sample sizes. Use the table your auditors or internal audit function apply, so their reliance on your work is possible.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five operating effectiveness tests completed with documented samples, attributes and conclusions, reviewed by someone independent."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Get the sample size table your auditors use for each control frequency"
                - "Choose five key controls to practise on"
                - "Select samples using a recorded random or systematic method"
                - "Write a workpaper for each test showing items, attributes and result"
            - name: Management review controls with defined precision
              description: |-
                ## Purpose
                Reviews of variances, margin reports and provisions are often the key control over a judgemental account, and they are the type auditors challenge most. Defining the threshold that triggers a question, what the reviewer compares against and how follow-up is evidenced turns a glance at a report into a control that can be tested.

                ## Milestones
                1. Every management review control in the matrix listed.
                2. A precision threshold and expectation written for each one.
                3. Evidence of follow-up on items over the threshold kept for each period.
                4. Three review controls rewritten and tested against the new standard.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every management review control has a written threshold, expectation and follow-up evidence, with three tested against it."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List every management review control in the matrix"
                - "Write the threshold that should trigger a question for each review"
                - "Ask each reviewer to note follow-up on items above the threshold"
                - "Test three reviews against the rewritten descriptions"
            - name: Evaluating control deficiencies by severity
              description: |-
                ## Purpose
                When a control fails, someone has to decide whether it is a minor gap, a significant deficiency or a material weakness, and that decision drives what the board and auditors hear. Learning to weigh the possible size of misstatement, its likelihood and any compensating controls lets you rate findings consistently and defend the rating.

                ## Milestones
                1. The severity definitions used by your auditors or regulator collected in one note.
                2. A severity worksheet covering magnitude, likelihood and compensating controls.
                3. Every open deficiency rated with the worksheet.
                4. Ratings reviewed by the controller and, where significant, discussed with the auditors.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every open deficiency rated on a written severity worksheet, with the ratings reviewed by the controller."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Collect the severity definitions your auditors or regulator use"
                - "Build a worksheet covering magnitude, likelihood and compensating controls"
                - "Rate every open deficiency with the worksheet"
                - "Review the ratings with the controller before the next audit committee"
            - name: IT general controls for finance teams
              description: |-
                ## Purpose
                Automated controls such as three-way matching or workflow approvals are only reliable if the system around them is controlled: access, change management, backups and job scheduling. Finance staff who understand these IT general controls can talk to IT on equal terms and know when an automated control can be relied on.

                ## Milestones
                1. The main IT general control areas summarised in a one-page note.
                2. Each finance system mapped to who runs it: in house, a vendor or a cloud provider.
                3. The IT general controls over each system identified and their owners named.
                4. One meeting held with IT to agree evidence for the next audit.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note mapping IT general controls to each finance system with named owners, agreed with IT."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write a one-page note on access, change, operations and backup controls"
                - "Map each finance system to who hosts and administers it"
                - "Name the IT owner for each general control over finance systems"
                - "Meet IT to agree what evidence they will provide for the audit"
            - name: Validating system reports used in controls
              description: |-
                ## Purpose
                Many controls depend on a report: an aged debtor list, a user listing, an exceptions report. If the report is incomplete or its parameters are wrong, the control checks the wrong population. Testing the completeness and accuracy of each key report, and keeping that evidence, is now a standard auditor request.

                ## Milestones
                1. Every report used in a key control listed with its source and parameters.
                2. A completeness and accuracy test designed for each, such as reconciling totals to the ledger.
                3. Test evidence kept for each report, including the parameters used.
                4. Reports changed after testing flagged for retest.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each report used by a key control has a completeness and accuracy test on file, dated within the current year."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List every system report that a key control relies on"
                - "Record the parameters and source for each report"
                - "Reconcile each report's totals to the ledger or another independent source"
                - "Keep the parameter screenshot and reconciliation with the control evidence"
            - name: Fraud risk assessment across finance processes
              description: |-
                ## Purpose
                Fraud risk differs from error risk because someone is actively trying to get around the control. A structured assessment using pressure, opportunity and rationalisation, covering revenue manipulation, expense abuse, asset theft and management override, finds the schemes your current controls would miss.

                ## Milestones
                1. Fraud schemes listed for each process, including management override of controls.
                2. Each scheme scored for likelihood and impact.
                3. Controls that address each scheme identified, with gaps logged.
                4. The assessment shared with the audit committee and refreshed yearly.

                ## Notes
                Supplier payment scams from outside the business have their own area; keep this assessment to schemes an insider could run.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A fraud risk assessment listing schemes by process with linked controls and logged gaps, reviewed by the audit committee."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Brainstorm fraud schemes for each process with two people from outside finance"
                - "Score each fraud scheme for likelihood and impact"
                - "Link each scheme to the controls that would detect or prevent it"
                - "Refresh the fraud risk assessment with the audit committee @recurring(yearly)"
            - name: Revenue and receivables cycle control set
              description: |-
                ## Purpose
                Revenue is the account most often misstated, through cut-off errors, unapproved credit notes or invoices for goods never shipped. Designing the controls for this cycle, from contract and price approval through dispatch matching, credit note authorisation and cash application review, covers the assertions auditors focus on first.

                ## Milestones
                1. Completeness, cut-off, accuracy and existence risks written for the cycle.
                2. A preventive or detective control in place for each risk, owned and evidenced.
                3. Credit notes above a threshold requiring approval from outside the sales team.
                4. The cycle's controls added to the matrix and walked through once.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every revenue cycle risk in the matrix is matched to an owned, evidenced control, confirmed by one walkthrough."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write the cut-off, accuracy and existence risks for revenue"
                - "Match each revenue risk to a current control or design a new one"
                - "Set an approval threshold for credit notes outside the sales team"
                - "Walk one sale through the new controls from order to cash"
            - name: Procure-to-pay cycle control set
              description: |-
                ## Purpose
                Spending controls fail when purchase orders are raised after the invoice, goods are never confirmed as received or the same person sets up suppliers and releases payments. A designed control set covering order approval, receipt, matching, supplier master changes and payment release closes the routes for both error and abuse.

                ## Milestones
                1. Risks written for each step from requisition to payment.
                2. Matching tolerances and exception handling set and documented.
                3. Supplier set-up and payment release held by different people.
                4. The cycle's controls added to the matrix and tested on one real purchase.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each procure-to-pay risk is matched to an owned control, with supplier set-up and payment release held by different people."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List the risks at each step from requisition to payment"
                - "Set and document purchase order matching tolerances"
                - "Confirm supplier set-up and payment release sit with different people"
                - "Trace one recent purchase from requisition to payment against the new controls"
            - name: Payroll cycle control set
              description: |-
                ## Purpose
                Payroll is usually the largest cost and the easiest to pad with a fictitious employee or an unapproved rise. Controls over starters, leavers and pay changes, an independent review of each payroll before release and a periodic headcount check against HR give assurance without slowing the run.

                ## Milestones
                1. Approval rules for starters, leavers and pay changes written and agreed with HR.
                2. A pre-release review of each payroll by someone who does not process it.
                3. A period-on-period variance check with a threshold for explanation.
                4. An HR headcount to payroll reconciliation done each quarter.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All payroll changes approved before processing and each run reviewed by a non-processor, evidenced for three consecutive runs."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Agree with HR who approves starters, leavers and pay changes"
                - "Name a reviewer who does not process payroll to sign off each run"
                - "Set a variance threshold that needs explanation before release"
                - "Reconcile HR headcount to the payroll register @recurring(quarterly)"
            - name: Cash, bank and treasury control set
              description: |-
                ## Purpose
                Cash is the asset that leaves fastest once a control fails. Bank mandates that match current staff, two-person release for payments, independent review of bank reconciliations and restricted access to banking portals are the core controls, and most of them cost nothing to put in place.

                ## Milestones
                1. Bank mandates and portal users matched to current staff, with leavers removed.
                2. Every payment batch requiring a second person to release it.
                3. Bank reconciliations reviewed and signed by someone who does not post cash.
                4. Signatories and portal access reviewed every year.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All bank mandates match current staff, every payment needs two people to release it and reconciliations are independently reviewed."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Check every bank mandate and portal user against the current staff list"
                - "Turn on two-person release for payment batches in each banking portal"
                - "Assign a reconciliation reviewer who does not post cash"
                - "Review bank signatories and portal access with each bank @recurring(yearly)"
            - name: Inventory and fixed asset safeguarding controls
              description: |-
                ## Purpose
                Physical assets go missing slowly, and the ledger only notices at the count. Limiting who can adjust stock records, requiring approval for write-offs and disposals, and tagging and verifying high-value equipment keeps the register and the warehouse in agreement.

                ## Milestones
                1. Stock adjustment and write-off rights limited, with approval thresholds set.
                2. Count results compared with the ledger, with differences approved before posting.
                3. High-value equipment tagged and checked against the asset register.
                4. Disposals requiring approval and evidence of proceeds.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Stock adjustments and asset disposals above a set threshold all need approval, with one tagged asset verification completed."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List who can adjust stock records and remove unneeded rights"
                - "Set approval thresholds for stock write-offs and asset disposals"
                - "Tag the highest-value equipment and check it against the register"
                - "Require evidence of proceeds before a disposal is posted"
            - name: Financial close and reporting control set
              description: |-
                ## Purpose
                Estimates, journals and consolidation adjustments all meet at the close, so its controls protect every number the board sees. Mapping the key close controls, such as reconciliation review, journal approval, estimate sign-off and review of the final accounts against expectations, makes them testable rather than habits of the controller.

                ## Milestones
                1. Key close and reporting controls identified and entered in the matrix.
                2. Each close control's owner, timing and evidence written to the description standard.
                3. Review of accounting estimates documented with the assumptions checked.
                4. Review of the final accounts against expectations evidenced each period.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Close and reporting controls are in the matrix with owners and evidence, and two consecutive closes show them evidenced."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Identify the close controls that protect the reported numbers"
                - "Write each close control to the description standard"
                - "Document who signs off each accounting estimate and how"
                - "Check two closes for complete control evidence"
            - name: Spreadsheet controls for key financial calculations
              description: |-
                ## Purpose
                Accrual workings, provision models and allocation schedules often live in spreadsheets that one person built and nobody checks. An inventory of spreadsheets that feed the accounts, rated by risk, with version control, locked formulas and an independent check on the high-risk ones, closes one of the commonest audit findings.

                ## Milestones
                1. Every spreadsheet that feeds a ledger entry listed with its owner.
                2. Each spreadsheet rated for complexity and value.
                3. High-risk spreadsheets given version control, locked formula cells and input checks.
                4. An independent review of each high-risk spreadsheet's logic recorded.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A spreadsheet inventory with risk ratings, and every high-risk sheet locked, versioned and independently reviewed."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List every spreadsheet that produces a figure for the ledger"
                - "Rate each spreadsheet for complexity and value"
                - "Lock formulas and add input checks to the high-risk sheets"
                - "Arrange an independent logic review of each high-risk sheet"
            - name: Compensating controls where duties cannot be split
              description: |-
                ## Purpose
                In a small team there may be only one person who can do both halves of a conflicting pair. Rather than pretending the conflict has gone, design a compensating control, usually a detailed review by someone senior of exactly the transactions the conflict exposes, and record why it is enough.

                ## Milestones
                1. Every accepted conflict from the conflict matrix listed.
                2. A compensating control designed for each, targeting the specific exposure.
                3. Reviewer, frequency and evidence agreed for each compensating control.
                4. The controller's acceptance of the remaining risk recorded.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Each accepted segregation conflict has a documented compensating control with reviewer and evidence, signed off by the controller."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List every segregation conflict you have decided to accept"
                - "Design a review that targets the exact transactions each conflict exposes"
                - "Agree the reviewer, frequency and evidence for each compensating control"
                - "Recheck accepted conflicts and their compensating reviews @recurring(quarterly)"
            - name: Configuring preventive controls in the accounting system
              description: |-
                ## Purpose
                Manual detective checks cost time every month; a system setting that stops the error costs time once. Turning on workflow approvals, matching tolerances, mandatory fields, duplicate invoice blocks and period locks converts dependable checks into automated preventive controls, which also need far smaller test samples.

                ## Milestones
                1. Manual controls that the system could enforce listed.
                2. Configuration options in your accounting system checked against that list.
                3. Chosen settings switched on through the change management process.
                4. Each automated control tested once and the matrix updated to show it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least five manual controls replaced by tested system settings, each recorded in the matrix as automated."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List the manual checks the system could enforce instead"
                - "Check which settings your accounting system offers for each one"
                - "Switch on the chosen settings through a change request"
                - "Test each new automated control and update the matrix"
            - name: Service organisation control report review
              description: |-
                ## Purpose
                Where payroll, hosting or payment processing is outsourced, your controls depend partly on the provider's. A yearly review of each provider's assurance report, such as a SOC 1 or ISAE 3402 report, checks the period covered, any exceptions found and the user entity controls you are expected to run yourself.

                ## Milestones
                1. Every outsourced service that affects the accounts listed with its provider.
                2. The latest assurance report obtained for each, or the gap noted.
                3. Exceptions and coverage period reviewed, with bridge letters for any gap.
                4. Complementary user entity controls mapped to your own matrix.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A review on file for each relevant provider's assurance report, with its user entity controls mapped to the matrix."
                cadence: cyclic
              tasks:
                - "List outsourced services that affect the financial records"
                - "Request the latest assurance report from each provider @recurring(yearly)"
                - "Note exceptions and any gap in the period covered"
                - "Map the user entity controls in each report to your own matrix"
            - name: Entity-level controls and whistleblowing channel
              description: |-
                ## Purpose
                Transaction controls sit on top of the control environment: a code of conduct people have read, a whistleblowing channel they trust, conflict of interest declarations and a board that challenges. Documenting and testing these entity-level controls matters because frameworks and auditors look at them first when judging everything else.

                ## Milestones
                1. Entity-level controls listed: code of conduct, whistleblowing, conflict declarations and board oversight.
                2. Evidence collected for each, such as annual code acknowledgements.
                3. The whistleblowing channel tested end to end, with reports reaching someone independent of management.
                4. Gaps added to the deficiency log.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Entity-level controls documented with current evidence, including a tested whistleblowing channel that reports to someone independent of management."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the entity-level controls your framework expects"
                - "Collect last year's code of conduct acknowledgements and conflict declarations"
                - "Send a test report through the whistleblowing channel and track where it goes"
                - "Log any entity-level gap in the deficiency log"
            - name: Remediating a reported control weakness
              description: |-
                ## Purpose
                After an auditor reports a significant deficiency or material weakness, the board wants a credible plan and the auditor wants evidence the fix has operated long enough. A remediation plan with root cause, redesigned control, owner, start date and a period of operation before retest gets the finding closed in one cycle rather than reported again.

                ## Milestones
                1. The root cause of the weakness agreed, not just the symptom.
                2. A redesigned control with owner, frequency and evidence.
                3. The new control operating for an agreed period with evidence kept.
                4. A retest passed and the finding formally closed with the auditor.

                ## Notes
                Start from the **Remediation plan** template. Ask your auditor early how long the new control must run before they will retest it.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The reported weakness is retested as remediated and the auditor confirms it closed within one audit cycle."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Agree the root cause of the weakness with the people involved"
                - "Redesign the control and name its owner and evidence"
                - "Ask your auditor how long the new control must run before retest"
                - "Retest the control once it has run for the agreed period"
            - name: Annual management controls attestation
              description: |-
                ## Purpose
                Listed companies and many regulated or lender-financed businesses must state each year whether internal control over financial reporting is effective, and the controller has to stand behind that statement. Running the attestation as a planned event, with test results, deficiency ratings and sub-certifications collected in advance, avoids a rushed signature.

                ## Milestones
                1. Sub-certifications from process and control owners collected.
                2. All testing and retesting complete, with open deficiencies rated.
                3. A conclusion memo drafted for the finance director and chief executive.
                4. The attestation signed and filed with its supporting pack.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A signed annual attestation supported by test results, rated deficiencies and owner sub-certifications filed together."
                cadence: cyclic
              tasks:
                - "Set the attestation timetable working back from the signing date @recurring(yearly)"
                - "Collect sub-certifications from every process owner"
                - "Draft the conclusion memo with open deficiencies and their ratings"
                - "File the signed attestation with its supporting pack"
            - name: Control reliance planning with the external auditor
              description: |-
                ## Purpose
                If the auditor can rely on your controls, they test fewer transactions, and if they can use your own testing, fieldwork shortens further. Meeting them early to agree which controls they will rely on, the standard your testers must meet and the evidence format saves duplicated work on both sides.

                ## Milestones
                1. A planning meeting held before the auditor sets their approach.
                2. A list of controls the auditor intends to rely on, with their testing approach.
                3. Agreement on whether and how they can use your own testing.
                4. Notes and agreed actions circulated to control owners.

                ## Notes
                Start from the **Meeting notes** template to record what was agreed.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A recorded agreement with the auditor on which controls they will rely on and how they will use internal testing."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Book a planning meeting with the audit manager before their plan is set"
                - "Send the current control matrix and testing calendar ahead of the meeting"
                - "Agree which of your tests they can use and to what standard"
                - "Circulate the agreed actions to control owners"
            - name: Controls cutover for a new finance system go-live
              description: |-
                ## Purpose
                Moving to a new ERP or accounting system resets every automated control, every access role and every report at once, and go-live weekends rarely leave time to think about controls. Planning the cutover controls, including migration reconciliation, role design, configuration sign-off and parallel checks, protects the opening balances and the first months of trading.

                ## Milestones
                1. Roles in the new system designed against the conflict matrix before go-live.
                2. Migrated balances reconciled to the old system and signed off.
                3. Automated controls configured and tested before the first live transaction.
                4. The control matrix updated to the new system within the first month.

                ## Notes
                Start from the **Operational checklist** template for the cutover steps.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Migrated balances reconciled and signed off, roles checked for conflicts and automated controls tested before the first live transaction."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "Get the implementation partner's cutover plan and add the control steps"
                - "Check proposed roles in the new system against the conflict matrix"
                - "Reconcile migrated balances to the old system and sign off"
                - "Test each automated control before the first live transaction"
            - name: New financial controller's first 90 days on controls
              description: |-
                ## Purpose
                Inheriting someone else's controls means inheriting their gaps, and the next audit finding will carry your name. A structured first ninety days, reading the last audit letters, meeting control owners, reperforming key controls yourself and presenting a plan, sets your baseline before you are accountable for it.

                ## Milestones
                1. The last two years of audit findings and management letters read and summarised.
                2. Every key control owner met in the first month.
                3. Five key controls reperformed personally.
                4. A controls plan for the year presented to the finance director by day ninety.

                ## Notes
                Start from the **Onboarding 30/60/90** template.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A controls plan based on audit history, owner meetings and five reperformed controls presented to the finance director within ninety days."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask the agent to summarise the last two audit management letters into themes"
                - "Book a half hour with each key control owner"
                - "Reperform five key controls yourself in the first two months"
                - "Present a controls plan to the finance director by day ninety"
            - name: Practical controls for a finance team of three
              description: |-
                ## Purpose
                With three people in finance, full segregation of duties is impossible, and copying a large company's matrix produces controls nobody runs. A short list of fifteen to twenty controls that matter, with the owner or a director reviewing bank payments, payroll and journals each month, gives real protection at a cost a small team can carry.

                ## Milestones
                1. A shortlist of no more than twenty key controls chosen from the risk list.
                2. Each control assigned across the three people so nobody checks their own work.
                3. A monthly review by a director of payments, payroll and journals.
                4. The shortlist revisited whenever the team changes.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written list of no more than twenty controls, with a director's monthly review evidenced for three consecutive months."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Choose no more than twenty controls from the risk list"
                - "Assign each control so nobody reviews their own work"
                - "Hold the director's review of payments, payroll and journals @recurring(monthly:27)"
                - "Revisit the list whenever someone joins or leaves the team"
            - name: Bringing an acquired subsidiary onto group controls
              description: |-
                ## Purpose
                A newly acquired company arrives with its own systems, its own habits and sometimes no documented controls at all, while its numbers flow straight into the group accounts. A phased programme, starting with cash, access and payment controls in the first month and the full matrix within a year, brings it to group standard without stopping the business.

                ## Milestones
                1. Day-one controls over bank mandates, payment release and system access in place.
                2. A gap assessment of the subsidiary against the group control matrix.
                3. A remediation timetable agreed with local management.
                4. The subsidiary included in the group testing calendar.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The acquired subsidiary operates the group's key controls and is included in the testing calendar within twelve months of completion."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Move bank mandates and payment release onto group signatories in week one"
                - "Run a gap assessment against the group control matrix"
                - "Agree a remediation timetable with local management"
                - "Add the subsidiary's controls to the group testing calendar"
            - name: Pre-IPO internal control readiness programme
              description: |-
                ## Purpose
                Companies preparing to list face a step change: documented controls, independent testing and, in some markets such as the US, a formal assessment of internal control over financial reporting within a set time after listing. Starting twelve to eighteen months ahead, with a readiness assessment, a gap plan and a dry-run testing year, avoids reporting a weakness in the first annual report.

                ## Milestones
                1. A readiness assessment against the listing market's requirements, with advisers' input.
                2. A gap plan with owners, costs and dates.
                3. A dry-run year of testing completed on key controls.
                4. Remaining gaps closed or disclosed before the listing document is finalised.

                ## Notes
                What the listing market requires is a legal and regulatory question; confirm it with your lawyers and reporting accountants rather than relying on general guides.
              priority: high
              deadlineOffsetDays: 365
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A readiness assessment, a gap plan and a full dry-run testing year completed before the listing timetable is fixed."
                cadence: phased
                effort_hours_estimate: "120"
              tasks:
                - "Ask your advisers what control reporting the listing market requires"
                - "Run a readiness assessment of controls against those requirements"
                - "Build a gap plan with owners, cost and dates"
                - "Run a full dry-run year of key control testing"
            - name: Briefing budget holders as control owners
              description: |-
                ## Purpose
                Department heads approve purchase orders, timesheets and expense claims, so they own controls whether they know it or not. A short yearly briefing explaining what they are approving, what to look for and what evidence to keep turns a click-through approval into a real check.

                ## Milestones
                1. A list of controls performed by people outside finance.
                2. A twenty-minute briefing with three real examples of approvals that should have been queried.
                3. Every budget holder briefed, with attendance recorded.
                4. Questions raised used to clarify the control descriptions.
              priority: low
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "Every budget holder who performs a control has attended a briefing in the last twelve months, with attendance recorded."
                cadence: cyclic
              tasks:
                - "List the controls that budget holders perform outside finance"
                - "Prepare a twenty-minute briefing with three real approval examples"
                - "Run the budget holder briefing and record attendance @recurring(yearly)"
                - "Update control descriptions with the questions people raised"
            - name: Continuous control monitoring with transaction analytics
              description: |-
                ## Purpose
                Sample testing looks at twenty-five items; analytics can look at every transaction. Scheduled queries for duplicate payments, purchase orders split to stay under approval limits, invoices paid before approval and users acting outside their role flag exceptions every week, so issues surface while they are still small.

                ## Milestones
                1. Five analytics tests chosen from the highest risks in the matrix.
                2. Each test built as a repeatable query on full transaction data.
                3. Exceptions reviewed weekly by a named person.
                4. False positives tuned out so the weekly list stays short enough to clear.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Five automated tests running on full transaction data, with weekly exception lists cleared for three consecutive months."
                cadence: rolling
              tasks:
                - "Pick five tests from the highest-rated risks in the matrix"
                - "Build each test as a saved query over full transaction data"
                - "Clear the weekly exception list from the monitoring tests @recurring(weekly:tue)"
                - "Tune each test until false positives are rare"
            - name: ERP role redesign to remove built-in conflicts
              description: |-
                ## Purpose
                Standard roles shipped with large ERP systems often combine conflicting permissions, so every new user inherits conflicts on day one. Redesigning roles around tasks, checked against a rules-based conflict set, cuts conflicts at source and makes each access review shorter.

                ## Milestones
                1. Current roles analysed against the conflict rules, with conflicts counted per role.
                2. Task-based roles designed that carry no inherent conflicts.
                3. Users moved to the new roles in tested stages.
                4. The conflict count after redesign compared with the starting count.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Conflicts per user fall after users move to redesigned task-based roles, with before and after counts recorded."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Run the current roles through the conflict rule set and count conflicts"
                - "Design task-based roles with no conflicting permissions"
                - "Move one department to the new roles and test before the rest"
                - "Compare the new conflict count with the starting figure"
            - name: Combined assurance map across the three lines
              description: |-
                ## Purpose
                Management, risk and compliance teams, internal audit and external audit often test the same controls while other risks get no assurance at all. A combined assurance map shows, for each major risk, who provides assurance and how much, so the board can see gaps and overlaps and audit plans can be aligned.

                ## Milestones
                1. Each major financial risk listed against the three lines and external assurance.
                2. The level of assurance from each source rated.
                3. Gaps and duplications highlighted.
                4. The map agreed with the head of internal audit and presented to the audit committee.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A combined assurance map covering every major financial risk, agreed with internal audit and presented to the audit committee."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "List the major financial risks from the risk assessment"
                - "Record who gives assurance on each risk and how"
                - "Highlight risks with no assurance and those tested twice"
                - "Present the assurance map to the audit committee with proposed changes"
---

# Internal Financial Controls

This area is for finance managers, controllers and finance teams in growing and larger organisations who need controls that stop errors and fraud and stand up to testing. It starts with the foundations (a risk assessment, scoping, the risk and control matrix, process narratives, named owners, a segregation of duties matrix and an access baseline), then the operating routines of access reviews, self-certification, exception reports and deficiency tracking, the testing skills of walkthroughs, sampling and severity rating, control sets for each finance cycle and other improvements, dated events such as the annual attestation and a system go-live, situations from a team of three to an acquired subsidiary or a listing, and finally specialist work on analytics, role redesign and combined assurance.

What repeats is a monthly round of leaver checks, owner self-certifications, journal and master data exception reviews, privileged activity and system change reviews and deficiency chasing, a quarterly access review, testing check-in and audit committee report, and a yearly matrix refresh, fraud risk update, provider report review and attestation. The Risk register, Compliance control, Metrics log, Remediation plan, Meeting notes, Operational checklist and Onboarding 30/60/90 templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
