---
id: finance-accounting.payroll-run-processing
name: Payroll Run Processing
description: "A pay calendar and clean employee records, a checked run each period with starters, leavers, variance review and approval, employer filings and remittances, and a calm year-end for small and growing businesses."
category: business
version: 1.0.0
tags: [finance-accounting, payroll-run-processing, small-business, manager, team, payslips, employer-filings, starters-leavers]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - purchase-decision
    - metrics-log
    - compliance-control
    - remediation-plan
    - onboarding-plan
  pillars:
    - name: Finance & Accounting
      emoji: "🧾"
      description: "The money side of a business: bookkeeping and the monthly close, cash flow, budgeting and forecasting, billing and collections, payroll, tax, audit and financial controls."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Payroll Run Processing
          description: "Running payroll accurately each period, handling starters, leavers, deductions and payslips, and filing the related employer returns for small and growing businesses."
          projects:
            - name: Employer registration for payroll taxes
              description: |-
                ## Purpose
                Before the first wage is paid, most countries require the business to register as an employer with the tax authority and, in many places, separately with the social security or national insurance body. Registering early gives you the employer reference numbers that payroll software, payslips and every later filing depend on, and avoids a late registration penalty landing in the first month.

                ## Milestones
                1. Every registration the business needs as an employer listed, with the body responsible for each.
                2. Employer registrations completed and reference numbers received in writing.
                3. Online filing accounts with the tax authority and social security body opened, with two named people able to sign in.
                4. Reference numbers, account owners and registration dates recorded in the payroll records file.

                ## Notes
                Requirements differ by country and sometimes by state or province. Check the tax authority's guidance for new employers or ask your accountant which registrations apply; a workplace pension or accident insurance scheme may also need registering.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every employer registration the business needs is complete, with reference numbers and online account owners recorded before the first pay date."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read the tax authority's guidance for new employers and note each registration it lists"
                - "Register the business as an employer with the tax authority"
                - "Register with the social security or national insurance body if it is separate"
                - "Set up the online filing accounts with two named users"
                - "Record every employer reference number in the payroll records file"
            - name: Payroll calendar of pay dates and cut-offs
              description: |-
                ## Purpose
                Late pay is the payroll failure staff never forget, and it usually starts with an input arriving after the run has closed. A year-long calendar showing, for every period, the input cut-off, the review day, the approval day, the bank submission deadline and the pay date makes the timetable visible to managers as well as to whoever presses the button.

                ## Milestones
                1. Pay frequency and pay day rule confirmed for each staff group, including what happens when pay day falls on a weekend or public holiday.
                2. Each period's cut-off, review, approval, bank submission and pay date set out for twelve months.
                3. The bank's processing lead time for salary payments confirmed and built into every date.
                4. Employer filing and tax payment deadlines added to the same calendar.
                5. The calendar shared with every manager who submits payroll inputs.

                ## Notes
                Work backwards from pay day. Most bank salary files must be submitted two or three working days early, so the real deadline is the bank's, not the date on the payslip.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A twelve-month payroll calendar showing cut-off, approval, bank submission and pay dates for each period, shared with every manager who sends inputs."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down the current pay day rule for each group of staff"
                - "Ask the bank how many working days ahead a salary file must be submitted"
                - "Set out cut-off, approval, bank and pay dates for the next twelve periods"
                - "Add employer filing and tax payment deadlines to the calendar"
                - "Publish next year's payroll calendar to managers before the year starts @recurring(yearly)"
            - name: Employee payroll record audit
              description: |-
                ## Purpose
                Payroll is only as accurate as the record behind each employee: a wrong tax identifier, an out-of-date salary or a missing start date flows straight onto the payslip and the tax filing. Checking every record once against the contract and the employee's own documents gives you a clean base before any process improvement is worth making.

                ## Milestones
                1. Every active employee in payroll matched one for one with the HR or contracts list.
                2. Each record checked for legal name, date of birth, tax and social security identifiers, address, start date, pay rate and hours.
                3. Bank details confirmed by the employee directly, not taken from an email.
                4. Every discrepancy corrected with the source document noted.
                5. People who have left marked as leavers with their leaving date.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every active payroll record has been checked against a contract or source document, with all discrepancies corrected and logged."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Export the active employee list from payroll and from the HR or contracts records"
                - "Match the two lists and flag anyone who appears in only one"
                - "Check each record's identifiers, pay rate, hours and start date against the contract"
                - "Ask each employee to confirm their bank details and address in writing"
                - "Log every correction with the document that supports it"
            - name: Payroll software or bureau shortlist
              description: |-
                ## Purpose
                Spreadsheet payroll becomes risky as soon as there is more than one employee, because tax tables, filing formats and year-end forms change every year. Comparing two or three payroll systems or bureaus against the same criteria, including electronic filing in your country, cost per payslip and how starters and leavers are handled, gives you a choice you can defend and switch to without drama.

                ## Milestones
                1. Requirements written down: headcount, pay frequencies, pay types, pension and benefit schemes, filings and the link to the accounting system.
                2. Two or three systems or bureaus shortlisted that file electronically with your tax authority.
                3. Each option scored on the same criteria, including total yearly cost and support hours.
                4. A decision recorded with the reason, the contract term and the planned first live period.

                ## Notes
                Start from the **Purchase decision** template. Ask each supplier who carries the cost of a late or wrong filing; the answer separates bureaus that take on the risk from software that leaves it with you.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A payroll system or bureau chosen from a scored shortlist of at least two, with the decision and contract term recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the pay types, schemes and filings the new system must handle"
                - "Shortlist suppliers that file electronically with your tax authority"
                - "Book a demonstration that processes a sample starter, leaver and overtime payment"
                - "Score each option on cost, filing support, integrations and support hours"
                - "Record the choice and the period you will go live"
            - name: Pay elements and earnings code map
              description: |-
                ## Purpose
                Every payment and deduction on a payslip is a pay element with rules: whether it is taxed, whether it attracts social security, whether it counts for pension or holiday pay. A single map of every element, with those flags and the ledger account it posts to, stops overtime being set up as pensionable in one place and not in another.

                ## Milestones
                1. Every earning and deduction element in use listed, from basic pay to benefits and loan repayments.
                2. Tax, social security, pension and holiday pay treatment recorded for each element, confirmed against official guidance.
                3. Each element mapped to a general ledger account.
                4. Unused or duplicate elements switched off in the payroll system.
                5. The map stored with the run checklist and updated whenever an element is added.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A pay element map covering every earning and deduction, with tax, pension and ledger treatment for each, matching the payroll system's set-up."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Export the list of pay elements set up in the payroll system"
                - "Record tax, social security, pension and holiday pay treatment for each element"
                - "Map every element to the ledger account it should post to"
                - "Check any element you are unsure of against the tax authority's guidance"
                - "Switch off elements no employee has used in a year"
            - name: Current-year statutory rates and thresholds sheet
              description: |-
                ## Purpose
                Tax bands, social security rates, earnings thresholds, minimum wage rates and pension minimums usually change once a year, and payroll software only applies them correctly if it has been updated and set up properly. A one-page sheet of this year's figures, copied from official sources, lets you check the first payslips of the year against the rules instead of trusting the update.

                ## Milestones
                1. Income tax bands or withholding tables for the current year recorded with their source.
                2. Social security rates and thresholds for employee and employer added.
                3. Minimum wage rates and pension contribution minimums added with effective dates.
                4. Every figure on the sheet compared with the payroll system's settings.

                ## Notes
                Copy figures from the tax authority and government publications, not from blogs or old payslips. Date the sheet and note the source beside each line.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated rates and thresholds sheet for the current tax year, each figure linked to its official source and matched to the payroll system."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the tax authority's published rates and thresholds for the current year"
                - "Add social security, minimum wage and pension figures from their official sources"
                - "Note the effective date of each rate on the sheet"
                - "Check that the payroll system shows the same figures"
                - "Update the sheet when next year's rates are announced @recurring(yearly)"
            - name: Payroll run checklist from the last run
              description: |-
                ## Purpose
                In many small businesses one person runs payroll from memory, and the steps only become visible when that person is ill on cut-off day. Writing down every step of the last run, in order, with the report or evidence each one leaves, turns a private routine into a checklist anyone trained can follow and a reviewer can tick against.

                ## Milestones
                1. Every step of the last payroll run listed in order, from collecting inputs to filing and posting.
                2. Each step tagged with who does it, which system it happens in and the report it produces.
                3. Review and approval points marked so they cannot be skipped.
                4. The checklist used for a full run and corrected afterwards.

                ## Notes
                Start from the **Operational checklist** template. Write down what you really do, including the small checks done out of habit; those are the ones a deputy misses.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written payroll run checklist with owners and evidence for each step, used for at least one complete run."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every step of the last payroll run in the order you did it"
                - "Add the owner, system and output report for each step"
                - "Mark the review and approval points in the checklist"
                - "Run the next payroll from the checklist and fix anything missing"
            - name: Payroll bank payment and funding set-up
              description: |-
                ## Purpose
                Net pay, tax remittances and pension contributions all leave from the bank, and payroll cash has to be in the right account before the salary file is submitted. Setting up the payment method, the funding transfer and dual authorisation once means pay day depends on a routine, not on someone remembering to move money.

                ## Milestones
                1. Salary payment method chosen, such as a bulk payment file or the payroll provider's payment service.
                2. A funding rule agreed: which account pays salaries and when cash moves into it.
                3. Dual authorisation set for salary files and tax payments in the banking platform.
                4. A test payment file uploaded and accepted by the bank before the next live run.

                ## Notes
                Keep salary payments separate from supplier payment runs where you can. It simplifies reconciliation and keeps pay confidential from staff who handle supplier payments.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Salary payments run from a funded account using a tested payment file, with two approvers set in the bank."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the bank which bulk salary payment formats it accepts"
                - "Agree which account funds payroll and when cash is moved into it"
                - "Set two approvers for salary files in the banking platform"
                - "Upload a test salary file and confirm the bank accepts it"
            - name: Payroll records retention file
              description: |-
                ## Purpose
                Auditors, tax inspectors and former employees can ask for payroll records years after the event, and most employers are legally required to keep them for a set period. A single, access-controlled place for payslips, filings, timesheets, starter forms and approvals, with the retention period written down, means any request can be answered in an afternoon.

                ## Milestones
                1. The retention period for payroll records confirmed from official guidance or your accountant.
                2. One secure location set up with folders by tax year and record type.
                3. Access limited to the people who run or approve payroll.
                4. Last year's payroll records filed in the new structure.
                5. A rule written for when and how records past their retention period are destroyed.

                ## Notes
                Payroll files hold some of the most sensitive personal data a business keeps. Restrict access and never send payslips or employee lists as open email attachments.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Payroll records for the current and previous tax year are filed by year and type in one access-controlled location, with the retention period written down."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Confirm how long payroll records must be kept where you operate"
                - "Create one access-controlled folder structure by tax year and record type"
                - "Limit folder access to the people who run or approve payroll"
                - "File last year's payslips, filings and approvals in the new structure"
            - name: New starter payroll set-up routine
              description: |-
                ## Purpose
                Most first-payslip errors come from a starter added in a hurry: emergency tax because a declaration form was missing, a start date a week out, or pension enrolment forgotten. A standard starter pack, collected before the cut-off, gets new employees paid correctly the first time and saves the correction run that would follow.

                ## Milestones
                1. A starter checklist covering the tax declaration form, identifiers, bank details, contract terms, pension status and start date.
                2. A rule that starters are added only once the signed contract and tax form are in.
                3. Starter details checked by a second person before the first run.
                4. The first payslips of the last three starters reviewed for errors.

                ## Notes
                Freelancers and contractors are paid outside payroll. If someone's employment status is unclear, settle it with an adviser before deciding which route applies.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every starter in the last three months had a complete starter pack before cut-off and a first payslip that needed no correction."
                cadence: rolling
              tasks:
                - "Write the starter checklist of documents and details payroll needs"
                - "Send the checklist and the cut-off dates to managers and HR"
                - "Ask a second person to check each starter's details before the run"
                - "Review the first payslips of the last three starters for errors"
            - name: Leaver final pay routine
              description: |-
                ## Purpose
                A leaver's last payslip is the hardest of the month: pro-rata salary, untaken holiday, notice pay, recovery of any advance and the tax form they take to their next employer. A fixed routine triggered by the resignation or termination letter, not by the leaving date, gives payroll time to calculate it properly and makes sure the employer filing marks them as gone.

                ## Milestones
                1. A leaver checklist covering final pay elements, holiday balance, deductions to recover and the leaver tax form.
                2. Managers and HR committed to notifying payroll within two working days of a confirmed leaving date.
                3. Every final pay calculation checked by a second person.
                4. Each leaver excluded from future runs and reported on the employer filing.
                5. Leaver tax forms issued for every leaver in the last quarter.

                ## Notes
                Check the contract and local employment law before deducting anything from final pay; recovering overpayments or training costs is restricted in many places.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every leaver in the last quarter received a checked final payslip and leaver tax form, and none appeared on a later run."
                cadence: rolling
              tasks:
                - "Write the leaver checklist with every final pay element and form"
                - "Agree with HR and managers to notify payroll within two working days"
                - "Calculate each leaver's untaken holiday from the leave records"
                - "Have a second person check each final pay calculation"
                - "Confirm each leaver is excluded from the next run"
            - name: Timesheet and overtime sign-off before cut-off
              description: |-
                ## Purpose
                For hourly staff the payroll is only as good as the hours fed into it, and late or unapproved timesheets are the usual reason for a supplementary run. A weekly sign-off rhythm, where managers approve hours and overtime against rosters before the cut-off, catches missing clock-ins and duplicated shifts while people still remember the week.

                ## Milestones
                1. Every hourly worker's timesheet routed to a named approving manager.
                2. Overtime and premium rates checked against the agreed rates before approval.
                3. Missing timesheets chased on a fixed day each week.
                4. Four consecutive periods with no timesheet arriving after cut-off.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive pay periods closed with every timesheet approved by a named manager before the input cut-off."
                cadence: rolling
              tasks:
                - "Assign an approving manager to every hourly worker"
                - "Send managers the overtime and premium rates to check against"
                - "Chase missing or unapproved timesheets from managers @recurring(weekly:mon)"
                - "Log every timesheet that arrived after cut-off and the reason"
            - name: Payroll change log between runs
              description: |-
                ## Purpose
                Pay rises, new allowances, address changes and unpaid leave arrive by email, in corridors and in chat messages, and the one that gets lost is the one an employee notices. A single change log, with the date received, the evidence and the approver, gives payroll one source of inputs and gives the reviewer a list to check the run against.

                ## Milestones
                1. One change log in use for every payroll change, with columns for employee, change, effective date, evidence and approver.
                2. Managers told that changes outside the log will not be processed.
                3. Each period's log closed at cut-off and handed to the payroll operator.
                4. Every logged change ticked off against the payroll report after the run.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive runs where every payroll change came through the log with evidence and an approver, each ticked against the payroll report."
                cadence: rolling
              tasks:
                - "Set up a change log with employee, change, effective date, evidence and approver columns"
                - "Tell managers and HR the log is the only way to request a payroll change"
                - "Close the period's change log and send it to the payroll operator @recurring(monthly:18)"
                - "Tick each logged change against the payroll report after the run"
            - name: Pre-release gross-to-net variance check
              description: |-
                ## Purpose
                Most expensive payroll mistakes are visible in the draft before anyone is paid: a net pay figure ten times too large, headcount up by two when one person started, tax falling while gross pay rose. Comparing each draft with the last period, employee by employee and in total, and explaining every movement above a set threshold is the single check that catches them.

                ## Milestones
                1. A variance report comparing this period's draft with the last period by employee and by pay element.
                2. A threshold agreed, for example any employee whose net pay moves by more than 10 percent.
                3. Headcount reconciled: last period plus starters minus leavers equals this period.
                4. Every movement above the threshold explained in a sentence before approval.
                5. The explained report filed with the period's payroll records.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each payroll in the last three months was released only after a variance report with headcount reconciled and every movement above threshold explained."
                cadence: rolling
              tasks:
                - "Agree the variance threshold that needs a written explanation"
                - "Reconcile headcount from last period with this period's starters and leavers"
                - "Run the draft versus last period variance report and explain each flagged line @recurring(monthly:21)"
                - "File the explained variance report with the period's records"
            - name: Two-person payroll approval and release
              description: |-
                ## Purpose
                When the same person enters changes, runs the payroll and releases the bank file, nobody would notice an error or a fictitious employee until an auditor does. A separate approver who reviews the variance report, the change log and the net pay total, and only then releases payment, is the minimum control for any payroll, however small.

                ## Milestones
                1. An approver named for each payroll who did not prepare it, with a deputy.
                2. An approval pack agreed: variance report, change log, net pay total and bank file total.
                3. The bank file total checked to the payroll net pay total before release.
                4. Each approval recorded with the date and the approver's name.

                ## Notes
                In a business with one finance person, the owner is usually the right approver. Ten minutes with a good approval pack is enough.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every payroll in the last six months approved by someone other than the preparer, with the bank file total matched to net pay before release."
                cadence: rolling
              tasks:
                - "Name the payroll approver and a deputy"
                - "Agree the contents of the approval pack with the approver"
                - "Check the bank file total matches net pay and release the payment @recurring(monthly:24)"
                - "Record each approval with the date and approver"
            - name: Payslip issue and pay query log
              description: |-
                ## Purpose
                Employees read their payslip on pay day and query it the same afternoon, and unanswered queries become complaints about trust rather than arithmetic. Issuing payslips on time through a secure channel, and logging every query against a promised response time, shows staff that payroll listens and reveals which errors keep coming back.

                ## Milestones
                1. Payslips issued on or before pay day through a secure portal or protected file, never as open email attachments.
                2. Payslips showing everything the law requires where you operate, such as gross pay, each deduction and hours for hourly staff.
                3. Every pay query logged with date, employee, issue and response.
                4. A response promise, such as three working days, set and met for a full quarter.
                5. Recurring query themes passed to the payroll error log.

                ## Notes
                If you are choosing a channel, an employee self-service portal also lets staff download past payslips and year-end forms without asking payroll.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "For a full quarter, payslips issued by pay day through a secure channel and every logged query answered within the promised time."
                cadence: rolling
              tasks:
                - "Confirm what a payslip must show where you operate"
                - "Move payslips to a secure channel if staff still receive them by plain email"
                - "Create a query log with date, employee, issue and response columns"
                - "Review open pay queries and close the answered ones @recurring(monthly:27)"
            - name: Monthly employer payroll filings and tax payments
              description: |-
                ## Purpose
                Each pay period creates two obligations to the state: reporting what was paid and withheld, and paying over the tax and social security withheld plus the employer's share. Missing either brings penalties and interest, often automatically. A fixed routine with a filing date and payment date for every period, such as real time submissions in the UK or federal tax deposits in the US, keeps the business clear of both.

                ## Milestones
                1. Every recurring employer filing and payment listed with its due date and the body it goes to.
                2. Filings submitted from the payroll system with each acknowledgement saved.
                3. Payments made by the due date and matched to the filing total.
                4. No penalty or late notice received for six consecutive periods.

                ## Notes
                Withheld tax belongs to the employees and the state, not the business. Treat it as untouchable cash even in a tight month.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive periods of employer filings and tax payments made by their due dates, with acknowledgements filed and payments matched to filings."
                cadence: rolling
              tasks:
                - "List every employer filing and payment with its due date and recipient"
                - "Submit the period's employer filing and save the acknowledgement @recurring(monthly:25)"
                - "Pay the withheld tax and social security due to the tax authority @recurring(monthly:15)"
                - "Match each tax payment to the total on the filing it relates to"
            - name: Pension and benefit deduction remittances
              description: |-
                ## Purpose
                Pension contributions, health plan premiums, union subscriptions and payroll giving deducted from pay are the employees' money, held until it is passed on. Late or short remittances can breach pension law and leave staff without the cover they think they have. Reconciling each deduction to the provider's schedule and paying it on time closes that gap.

                ## Milestones
                1. Every third-party deduction listed with its provider, due date and upload or payment method.
                2. Each period's contribution file uploaded to the pension provider and accepted.
                3. Payments to each provider matched to the deduction totals on the payroll report.
                4. Provider confirmations filed with the period's records.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive periods where every pension and benefit deduction was paid to its provider on time and matched to the payroll report."
                cadence: rolling
              tasks:
                - "List every third-party deduction with its provider and due date"
                - "Upload the pension contribution file and pay each benefit provider @recurring(monthly:10)"
                - "Match each provider payment to the payroll deduction total"
                - "Investigate any provider rejection or shortfall the same week"
            - name: Payroll journal and control account reconciliation
              description: |-
                ## Purpose
                Payroll creates liabilities in the books for net wages, tax, social security, pension and other deductions, and each should clear to zero once the payments go out. When the journal is posted late or by hand these accounts drift, and nobody can say what is really owed. A standard journal each period and a reconciliation of every payroll control account keep the ledger and the payroll in agreement.

                ## Milestones
                1. A standard payroll journal built from the pay element map.
                2. The journal posted for each period before the month-end close starts.
                3. Each payroll liability account reconciled to the amounts still due.
                4. Any balance that does not clear explained and corrected within the month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For three months, the payroll journal posted on time and every payroll control account reconciled with no unexplained balance."
                cadence: rolling
              tasks:
                - "Build a standard payroll journal from the pay element map"
                - "Post the payroll journal from the payroll summary report @recurring(monthly:3)"
                - "Reconcile each payroll liability account to what is still owed @recurring(monthly:8)"
                - "Correct or explain any payroll balance that has not cleared"
            - name: Quarterly payroll master data health check
              description: |-
                ## Purpose
                Payroll records decay quietly: people move house, change bank, go part-time or leave without payroll being told. A quarterly check of payroll against HR records, bank detail changes and inactive employees catches the record that would otherwise become an overpayment, a lost payslip or, at worst, a ghost employee still being paid.

                ## Milestones
                1. The payroll employee list reconciled to the HR or contracts list each quarter.
                2. Every bank detail change in the quarter checked against its verification evidence.
                3. Employees with no hours or pay for two periods investigated.
                4. Pay rates checked against contracts for a sample of employees.
                5. Findings and fixes recorded for each quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly health checks completed in a year, each reconciling payroll to HR records and recording findings and fixes."
                cadence: rolling
              tasks:
                - "Reconcile the payroll employee list to HR records @recurring(quarterly)"
                - "Check each bank detail change in the quarter against its verification"
                - "Investigate employees with no pay in the last two periods"
                - "Sample ten pay rates against contracts and record the findings"
            - name: Payroll accuracy and timeliness metrics
              description: |-
                ## Purpose
                Without numbers, payroll quality is judged by the loudest complaint. Tracking a handful of measures each period, such as corrections after pay day, late inputs, queries per hundred payslips and on-time filings, shows managers whether things are improving and gives you evidence when you ask for better tools or another pair of hands.

                ## Milestones
                1. Four or five measures chosen and defined in a sentence each.
                2. A log set up with one row per pay period.
                3. Six periods of measures recorded.
                4. A short summary shared with the finance lead or owner each quarter.

                ## Notes
                Start from the **Metrics log** template.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive pay periods of accuracy and timeliness measures logged, with a quarterly summary shared with the owner or finance lead."
                cadence: rolling
              tasks:
                - "Choose four measures of payroll accuracy and timeliness"
                - "Set up a payroll measures log from the metrics log template"
                - "Record the last period's payroll measures in the log @recurring(monthly:6)"
                - "Share a short quarterly summary with the owner or finance lead"
            - name: Gross-to-net calculation worked by hand
              description: |-
                ## Purpose
                Software produces net pay instantly, which is exactly why errors in its set-up go unnoticed. Working three payslips through by hand, from gross pay through pre-tax deductions, income tax, social security and post-tax deductions to net, teaches you what each line means and lets you spot when a figure on the screen cannot be right.

                ## Milestones
                1. The order of calculation where you operate written out, including which deductions come before tax.
                2. One salaried, one hourly and one part-month payslip recalculated by hand.
                3. Each hand figure reconciled to the system payslip within rounding.
                4. Any difference traced to its cause and noted.

                ## Notes
                Use the tax authority's published tables or calculator for the tax line. The point is to understand the steps, not to replace the software.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three payslips recalculated by hand and reconciled to the system within rounding, with any difference explained in writing."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write out the gross-to-net order of calculation used where you operate"
                - "Pick one salaried, one hourly and one part-month payslip from last period"
                - "Recalculate each payslip by hand using the official tax tables"
                - "Explain every difference from the system figure"
            - name: Taxable benefits and allowances in payroll
              description: |-
                ## Purpose
                Company cars, health cover, meal allowances, phone plans and gift vouchers can each be taxable, partly taxable or exempt, and whether they run through payroll or a separate annual return differs by country. Learning how your benefits are treated, and recording the decision for each one, prevents the under-withholding that turns into a bill for both employer and employee.

                ## Milestones
                1. Every benefit and allowance the business provides listed.
                2. The tax and social security treatment of each confirmed from official guidance or an adviser.
                3. Benefits that must run through payroll set up as pay elements.
                4. Benefits reported outside payroll given a filing date in the payroll calendar.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each benefit and allowance has a recorded tax treatment and is either set up in payroll or scheduled for separate reporting."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List every benefit and allowance staff receive"
                - "Look up the tax treatment of each in the tax authority's guidance"
                - "Ask the accountant about any benefit where the guidance is unclear"
                - "Set up payrolled benefits as pay elements with the right flags"
            - name: Statutory sick and family leave pay
              description: |-
                ## Purpose
                Sick pay and maternity, paternity, adoption and parental leave pay usually follow statutory formulas based on average earnings over a reference period, and some of it can be reclaimed from the state. Learning how these are calculated where you operate, before the first request arrives, means an expectant parent gets a clear answer about their pay rather than a guess.

                ## Milestones
                1. The statutory leave payments that apply where you operate listed, with eligibility rules.
                2. The average earnings calculation for each understood and tested on a past employee.
                3. Any contractual enhancement the company pays written alongside the statutory amounts.
                4. Reclaim or offset rules noted, with how they appear on the employer filing.

                ## Notes
                Check eligibility and amounts against the government's current guidance each year. The figures change, and errors are hard to unwind once leave has started.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written summary of each statutory leave payment, its calculation and any reclaim rule, tested on one past employee's figures."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the statutory leave payments that apply to your employees"
                - "Read the government guidance on how average earnings are worked out"
                - "Test the calculation on one past employee's pay history"
                - "Write down any company enhancement on top of the statutory amount"
            - name: Holiday pay for irregular hours and part-year workers
              description: |-
                ## Purpose
                Holiday pay is simple for a salaried employee and difficult for anyone whose hours, overtime or commission vary, and many jurisdictions require regular overtime and commission to be included. Getting clear on the rule that applies to each part of your workforce, and setting payroll up to follow it, avoids underpayment claims that can reach back years.

                ## Milestones
                1. Groups of workers with irregular hours, regular overtime or commission identified.
                2. The holiday pay rule for each group confirmed with official guidance or an employment adviser.
                3. Payroll set up to calculate holiday pay by that rule, with one example checked by hand.
                4. Holiday accrual for part-year and casual workers recorded in the leave system.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Holiday pay for each irregular-hours group follows a written rule confirmed with official guidance, with one worked example checked."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Identify every worker whose hours, overtime or commission vary"
                - "Confirm with official guidance or an adviser how their holiday pay is worked out"
                - "Check one holiday payment by hand against that rule"
                - "Record how holiday accrues for casual and part-year staff"
            - name: Workplace pension enrolment duties
              description: |-
                ## Purpose
                Many countries now require employers to enrol eligible staff into a workplace pension or provident scheme automatically, assess new workers each period and keep records of anyone who opts out. Understanding exactly which duties apply to your business, and confirming the payroll system carries them out, avoids compliance notices from the pension regulator and missed contributions for staff.

                ## Milestones
                1. The employer pension duties that apply where you operate written down, with dates and contribution minimums.
                2. Payroll confirmed to assess each worker every period and enrol those who qualify.
                3. Enrolment letters and opt-out records kept for every worker.
                4. Any declaration of compliance due to the regulator completed and filed.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The business's pension enrolment duties are documented, payroll assesses every worker each period, and opt-out records are complete."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read the pension regulator's guidance for employers where you operate"
                - "Confirm the payroll system assesses workers for enrolment every period"
                - "Check enrolment letters and opt-out forms are stored for each worker"
                - "Put any declaration or re-enrolment date the regulator sets in the payroll calendar"
            - name: Tax authority notices and code changes
              description: |-
                ## Purpose
                Tax authorities send employers a steady stream of notices: changed tax codes or withholding instructions for individual employees, filing reminders, late filing warnings and penalty letters. Knowing what each type means and what it requires, and processing them before the next run, stops a correct instruction being ignored and an employee paying the wrong tax for months.

                ## Milestones
                1. The common types of employer notice listed with the action each requires.
                2. One inbox or online account checked for notices before every run.
                3. Every notice logged with the date received and the action taken.
                4. Penalty or warning notices escalated to the owner or finance lead the day they arrive.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every tax authority notice in the last three months logged and actioned before the following run, with penalty notices escalated the same day."
                cadence: rolling
              tasks:
                - "List the employer notice types received in the last year"
                - "Write the action each notice type requires"
                - "Process tax code and withholding notices received since the last run @recurring(monthly:16)"
                - "Escalate any penalty or warning notice to the owner the same day"
            - name: Minimum wage compliance across pay types
              description: |-
                ## Purpose
                Minimum wage breaches rarely come from a low hourly rate. They come from unpaid training time, deductions for uniforms, salaried staff working long weeks, or a birthday that moves someone into a higher age band. A periodic check that divides each at-risk worker's pay by all the hours they actually worked catches these before an inspection or a claim does.

                ## Milestones
                1. Current minimum wage rates for each age band or category on the rates sheet.
                2. At-risk workers identified: those paid close to the minimum, salaried staff with long hours and anyone with pay deductions.
                3. Effective hourly pay calculated for at-risk workers, including all working time.
                4. Any shortfall corrected with back pay and its cause fixed.

                ## Notes
                Start from the **Compliance control** template. What counts as working time and which deductions reduce pay differ by country, so confirm both in the official guidance.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly checks completed with effective hourly pay at or above the minimum for every at-risk worker, or back pay processed."
                cadence: rolling
              tasks:
                - "List workers paid within 10 percent of the minimum or with pay deductions"
                - "Note birthdays that move a worker into a different minimum wage band"
                - "Calculate effective hourly pay for each at-risk worker @recurring(quarterly)"
                - "Process back pay for any shortfall and record the cause"
            - name: Choosing the pay frequency for each staff group
              description: |-
                ## Purpose
                Weekly, fortnightly, twice-monthly and monthly payrolls each trade cost and workload against what staff need, and the choice affects cash flow, overtime processing and how quickly errors are put right. Deciding deliberately for each staff group, rather than inheriting whatever suited the first employee, gives you a pattern you can run without strain as headcount grows.

                ## Milestones
                1. Current pay frequencies and the staff groups on each listed.
                2. Runs per year, processing time, bank fees and cash flow effect compared for each option.
                3. Legal and contractual requirements checked, including the notice needed to change pay dates.
                4. A decision recorded, with a transition plan if anything changes.

                ## Notes
                Changing frequency can leave a long or short gap between pays. Plan an advance or transition payment and give staff plenty of notice.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded pay frequency decision for each staff group, with costs compared and any transition payment agreed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List each staff group and its current pay frequency"
                - "Compare runs per year, processing hours and fees for each option"
                - "Check what notice staff must be given before pay dates change"
                - "Record the decision and any transition payment needed"
            - name: Electronic timesheets feeding payroll directly
              description: |-
                ## Purpose
                Re-keying hours from paper sheets or spreadsheets into payroll is slow and creates errors nobody can trace. Connecting a time and attendance system to payroll, so approved hours arrive as pay elements, removes the typing step and leaves an audit trail from clock-in to payslip.

                ## Milestones
                1. The current timesheet process mapped, with the hours spent re-keying each period.
                2. A time system chosen that integrates with your payroll software.
                3. Pay rules for overtime, shifts and breaks configured and tested on last period's hours.
                4. One period run in parallel with the old method and differences explained.
                5. Paper or spreadsheet timesheets retired.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Approved hours flow from the time system into payroll without re-keying, after one parallel period with all differences explained."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Time how long re-keying hours takes each pay period"
                - "Check which time and attendance systems integrate with your payroll software"
                - "Configure overtime and shift rules and test them on last period's hours"
                - "Run one period in parallel with the old timesheets and reconcile the hours"
            - name: Payroll error root-cause log
              description: |-
                ## Purpose
                Fixing a payroll error for one employee is urgent; finding why it happened is what stops it recurring next month. A log of every correction with its cause, such as late input, wrong set-up, a missed notice or a calculation rule, turns individual fixes into a short list of process changes worth making.

                ## Milestones
                1. Every correction after pay day logged with employee, amount, cause and fix.
                2. Causes grouped into four or five categories.
                3. The most frequent cause tackled with a written process change.
                4. Correction counts compared for the three months before and after the change.

                ## Notes
                Start from the **Remediation plan** template for the process change that comes out of the log.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A correction log covering at least three months, with the most frequent cause addressed and correction counts compared before and after."
                cadence: rolling
              tasks:
                - "Set up a log of payroll corrections with cause and fix columns"
                - "Log every correction made after pay day, including small ones"
                - "Group the causes and pick the most frequent one"
                - "Ask the agent to draft a remediation plan for the top cause"
            - name: Salary sacrifice set-up in payroll
              description: |-
                ## Purpose
                Salary sacrifice or pre-tax deduction arrangements for pensions, cycles, childcare or similar can save tax for staff and the employer, but only if the contract change and the payroll treatment are both right. Setting one up carefully, with signed agreements and a check that pay stays above the minimum wage, avoids losing the tax benefit or underpaying anyone.

                ## Milestones
                1. The arrangement and its tax treatment confirmed with an accountant or adviser.
                2. Signed contract variations in place for every participating employee.
                3. Pay elements set up so the sacrifice reduces the right taxable and pensionable pay.
                4. A minimum wage check run for each participant after the sacrifice.
                5. The first period's payslips checked by hand for two participants.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A salary sacrifice arrangement running in payroll with signed agreements, adviser-confirmed treatment and minimum wage checks for every participant."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask your accountant to confirm the tax treatment of the planned arrangement"
                - "Collect a signed contract variation from each participating employee"
                - "Set up the sacrifice pay element with the correct tax and pension flags"
                - "Check each participant's effective pay against the minimum wage"
            - name: Payroll system access and duties review
              description: |-
                ## Purpose
                Old logins linger: payroll systems often keep administrator access for a former bookkeeper, an implementation consultant or everyone in finance. Reviewing who can change employee records, pay rates and bank details, and who can approve and release payment, makes sure no single person can set up an employee and pay them alone.

                ## Milestones
                1. A list of every user of the payroll system and the banking platform, with their permissions.
                2. Access removed for anyone who no longer needs it.
                3. Duties split so that changing bank details, running payroll and releasing payment need at least two people.
                4. A dated record of the review filed, with the next review in the calendar.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated access review shows no single user can both change employee bank details and release salary payments, with leavers' access removed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Export the user and permission list from the payroll system"
                - "List who holds salary payment rights in the banking platform"
                - "Remove access for users who no longer need it"
                - "Repeat the payroll access review and file the record @recurring(yearly)"
            - name: Employee bank detail change verification
              description: |-
                ## Purpose
                Diversion fraud against payroll usually starts with an email that appears to come from an employee asking for their salary to go to a new account. A rule that bank details change only after confirming with the employee on a known phone number or in person, never by replying to the request, stops a month's pay going to a criminal.

                ## Milestones
                1. A written rule for bank detail changes, including how the employee is contacted to confirm.
                2. Changes accepted only through the self-service portal or a signed form, never by email.
                3. Each change confirmed with the employee and the confirmation recorded.
                4. The employee notified at their old contact details once the change is made.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written bank detail change procedure is in use, and every change in the last quarter has a recorded confirmation from the employee."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the bank detail change rule and how confirmation is made"
                - "Stop accepting bank detail changes by email and tell staff why"
                - "Call the employee on their known number to confirm each change"
                - "Notify the employee at their old contact details once a change is made"
            - name: First payroll run as a new employer
              description: |-
                ## Purpose
                The first payroll sets every pattern that follows: the registrations, the starter details, the first filing and the first tax payment. Preparing it as an event, with a dry run a week before pay day and every payslip checked, means the first employees are paid correctly and the tax authority receives the first submission on time.

                ## Milestones
                1. Employer registrations, payroll software and bank payment method in place.
                2. Every starter's details entered and checked against their documents.
                3. A dry run produced and every payslip checked by hand.
                4. Payments made on pay day and the first employer filing accepted.
                5. The first tax and social security payment made by its due date.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "First payroll paid on the scheduled pay date with every payslip checked, and the first employer filing accepted by the tax authority."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Confirm registrations, software and bank set-up are complete"
                - "Enter each starter and check their details against their documents"
                - "Run a dry payroll a week before pay day and check every payslip"
                - "Submit the first employer filing and save the acknowledgement"
            - name: First payroll of the new tax year
              description: |-
                ## Purpose
                The first run after the tax year changes is when new tax bands, thresholds, minimum wage rates and pension rates all take effect at once, alongside the software update and a batch of tax code notices. Treating it as a planned event, with the new rates checked against your sheet before anyone is paid, stops a year of wrong deductions starting on day one.

                ## Milestones
                1. The payroll software updated to the new tax year's version.
                2. New rates and thresholds in the system checked against the rates sheet.
                3. New-year tax code or withholding changes applied to every affected employee.
                4. Minimum wage rate changes applied from the correct date.
                5. A sample of payslips from the first run checked by hand.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first run of the new tax year paid with system rates matching the official sheet and a hand-checked sample of five payslips."
                cadence: cyclic
              tasks:
                - "Install the payroll software's update for the new tax year"
                - "Compare the system's new rates with the rates sheet line by line"
                - "Apply new tax codes or withholding instructions to affected employees"
                - "Check five payslips from the first run by hand"
            - name: Annual pay review applied through payroll
              description: |-
                ## Purpose
                Pay rises agreed in a spreadsheet in one month often reach payroll two months later, which means back pay, recalculated deductions and confused employees. Getting the approved list into payroll as one controlled change, with effective dates and any arrears calculated, puts the pay review on payslips the month it was promised.

                ## Milestones
                1. The approved pay review list received in one file, signed off by the owner or HR lead.
                2. Each new rate checked against the employee record and the approved list.
                3. Arrears calculated for any rise backdated before the processing date.
                4. Payslips matched to pay review letters for every employee.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every approved pay change processed in one run with effective dates and arrears checked, and no employee query about a missing rise."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask HR or the owner for the approved pay review list in one signed-off file"
                - "Check each new rate against the employee record"
                - "Calculate arrears for any change backdated before the run"
                - "Compare payslips with pay review letters for every employee"
            - name: Off-cycle bonus and commission run
              description: |-
                ## Purpose
                Bonuses and commission are often paid outside the regular cycle, and a one-off payment can be taxed differently because it pushes someone into a higher band or triggers a different withholding method. Planning the run, confirming how the tax authority expects lump sums to be taxed and warning staff that net will be well below gross avoids disappointment and correction runs.

                ## Milestones
                1. The approved bonus or commission list received with amounts and cost centres.
                2. The withholding method for one-off payments confirmed from official guidance.
                3. Pension and holiday pay treatment of the payment checked against the pay element map.
                4. The run processed, filed and paid like a normal period.
                5. Staff told in advance that net amounts depend on tax and deductions.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The bonus or commission run paid on the promised date and filed with the tax authority, with tax and pension treatment checked against guidance."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Collect the approved bonus or commission list with amounts"
                - "Check how the tax authority expects one-off payments to be taxed"
                - "Confirm pension and holiday pay treatment in the pay element map"
                - "Tell staff that net amounts will be lower than the gross figure"
            - name: Year-end payroll close and employee tax forms
              description: |-
                ## Purpose
                At the end of each tax year employers finalise payroll with the tax authority and give every employee a summary of pay and tax for the year, such as the P60 in the UK or the W-2 in the US. A planned year-end, with totals reconciled before the final submission, makes sure the forms staff rely on for their own tax and loan applications are right first time.

                ## Milestones
                1. Year-to-date pay, tax and social security totals reconciled to the filings made during the year.
                2. The final year-end submission made to the tax authority and acknowledged.
                3. Year-end forms issued to every employee by the legal deadline.
                4. Leavers' forms and any amended forms handled.
                5. Year-end reports archived in the payroll records file.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Year-end submission accepted and every employee's annual tax form issued by the deadline, with totals reconciled to the year's filings."
                cadence: cyclic
              tasks:
                - "Reconcile year-to-date totals to the filings made during the year"
                - "Make the final year-end submission and save the acknowledgement"
                - "Issue year-end tax forms to every employee before the deadline @recurring(yearly)"
                - "Archive the year-end reports in the payroll records file"
            - name: Payroll provider migration with parallel run
              description: |-
                ## Purpose
                Moving payroll to a new system or bureau carries risk because year-to-date figures, tax codes, pension history and leave balances all have to arrive intact. A planned migration with at least one parallel run, where old and new systems calculate the same period and every difference is explained, is the safe way to switch.

                ## Milestones
                1. A migration date agreed, ideally at the start of a tax year or quarter.
                2. Employee records, year-to-date totals and pension history loaded and checked against the old system.
                3. One full parallel run completed, with every difference above a set amount explained.
                4. The first live run in the new system filed and paid on time.
                5. Read-only access to the old system kept for the retention period.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Payroll live in the new system after one parallel run with all material differences explained, and the first live filing accepted."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Agree the migration date with the new provider"
                - "Export employee records and year-to-date totals from the old system"
                - "Run one period in both systems and explain each difference"
                - "Arrange read-only access to the old system for the retention period"
            - name: Owner-run payroll for the first few employees
              description: |-
                ## Purpose
                An owner taking on their first two or three employees is often also the bookkeeper, the HR department and the approver. A lean set-up, with payroll software or a low-cost bureau that files automatically, a fixed monthly slot to run it and the accountant reviewing the first quarter, keeps payroll correct without swallowing the owner's week.

                ## Milestones
                1. Payroll software or a bureau in use that files with the tax authority automatically.
                2. A monthly payroll slot blocked in the owner's calendar.
                3. The accountant asked to review the first three runs.
                4. Pay, filing and tax payment dates set as calendar reminders.
                5. Three monthly runs completed without corrections.

                ## Notes
                This project covers paying employees. Decisions about the owner's own salary or drawings sit elsewhere.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three monthly payrolls for the first employees completed on time, reviewed by the accountant, with no corrections needed."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Block a fixed monthly slot in your calendar for running payroll"
                - "Ask your accountant to review the first three payrolls"
                - "Set reminders for pay day, filing and tax payment dates"
                - "Keep a one-page note of each step as you run the first payroll"
            - name: Manager's pre-payroll sign-off for a team
              description: |-
                ## Purpose
                Department managers approve hours, overtime, absences, starters and leavers, but are rarely shown what to look for. A short input report sent to each manager before cut-off, with a two-minute checklist, catches the missing overtime or the leaver still on the payroll while it is cheap to fix.

                ## Milestones
                1. An input report for each team showing hours, overtime, absence and changes for the period.
                2. A short checklist for managers covering what to check and whom to tell.
                3. Reports sent to managers two days before cut-off.
                4. Manager confirmations received for every team for three periods.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Every team's manager confirmed their payroll inputs before cut-off for three consecutive periods."
                cadence: rolling
              tasks:
                - "Design a team input report with hours, overtime, absence and changes"
                - "Write a short checklist of what managers should check"
                - "Send each manager their team's input report for sign-off @recurring(monthly:17)"
                - "Chase any manager who has not confirmed by cut-off"
            - name: Payroll cover plan for the payroll lead's absence
              description: |-
                ## Purpose
                In a small team one person usually holds the payroll knowledge, the logins and the bank approval, so illness or a resignation in cut-off week becomes a crisis. A cover plan with a trained deputy, access already set up and one supervised run a year means pay day happens whoever is in the office.

                ## Milestones
                1. A deputy named and given their own payroll and bank access.
                2. The run checklist checked so the deputy can follow it alone.
                3. The deputy has run one full payroll with the lead observing.
                4. Support contacts for the payroll provider and bank recorded with the checklist.

                ## Notes
                Never share one login between two people. Each person needs their own access so the audit trail stays clear.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A named deputy with their own access has run one full payroll under observation in the last twelve months."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Name a payroll deputy and agree it with their manager"
                - "Set up the deputy's own payroll and bank access"
                - "Have the deputy run a full payroll while you observe @recurring(yearly)"
                - "Record support contacts for the payroll provider and the bank"
            - name: Seasonal and casual worker payroll
              description: |-
                ## Purpose
                Hospitality, retail, farm and events businesses often add many short-term workers at peak times, each needing a starter form, the right tax treatment and a final payslip a few weeks later. A streamlined pack for casual staff, and a decision on whether they sit on a separate weekly payroll, keeps the peak from swamping the regular run.

                ## Milestones
                1. A short starter pack for casual workers that still collects every required detail.
                2. A decision on whether casual staff are paid weekly on a separate payroll.
                3. Holiday accrual and minimum wage checked for short-term workers.
                4. Seasonal leavers processed promptly at the end of the season, with their tax forms issued.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A full season's casual workers set up, paid and processed as leavers with complete records and no missed leaver forms."
                cadence: cyclic
              tasks:
                - "Create a short starter pack for casual and seasonal workers"
                - "Decide whether casual staff run on a separate weekly payroll"
                - "Check holiday accrual and minimum wage for short-term workers"
                - "Process every seasonal leaver within a week of their last shift"
            - name: Redundancy and settlement payments through payroll
              description: |-
                ## Purpose
                When roles are made redundant or someone leaves under a settlement agreement, payroll has to handle notice pay, statutory and enhanced redundancy pay and other termination payments, each of which can be taxed differently. Working from the signed agreement and adviser-confirmed tax treatment, not a manager's email, gets these sensitive payments right for people already having a hard time.

                ## Milestones
                1. Signed agreements or redundancy letters received for every affected employee.
                2. The tax and social security treatment of each payment type confirmed with an adviser.
                3. Final pay calculations checked by a second person.
                4. Payments made on the agreed date with the correct leaver reporting.

                ## Notes
                These payments are confidential. Limit preparation to the people who need to know, and keep the calculations out of shared folders.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Each redundancy or settlement payment paid on the agreed date, with tax treatment confirmed by an adviser and the calculation checked by a second person."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Collect the signed agreement or letter for each affected employee"
                - "Ask your adviser to confirm the tax treatment of each payment type"
                - "Calculate the termination payments and have a second person check them"
                - "Restrict access to the calculations to those who need them"
            - name: Onboarding a new payroll administrator
              description: |-
                ## Purpose
                Handing payroll to someone new, whether a hire or a colleague taking it over, is when errors creep in, because so much of the job lives in one person's habits. A structured first month built around the run checklist, with one shadowed run and one led under review, gets the new administrator running payroll alone with confidence.

                ## Milestones
                1. A 30-day plan covering the run checklist, systems, filings and confidentiality.
                2. Payroll and records access set up on day one, with bank release rights held back until trained.
                3. One run shadowed and the next led under review.
                4. Written sign-off from their manager that they can run payroll unsupervised.

                ## Notes
                Start from the **Onboarding plan** template.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The new payroll administrator has shadowed one run, led one under review and been signed off in writing to run payroll alone."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Draft a 30-day onboarding plan around the payroll run checklist"
                - "Set up their payroll and records access, holding back bank release rights"
                - "Have them shadow one full run and lead the next under review"
                - "Sign off their readiness in writing once the reviewed run is clean"
            - name: Year-to-date tie-out to tax authority records
              description: |-
                ## Purpose
                The tax authority's view of what you reported and paid can drift from your payroll's, through a rejected submission, a payment allocated to the wrong period or a correction never filed. Reconciling the payroll system's year-to-date figures to the tax authority's online account each quarter finds these gaps while they can still be fixed without penalties.

                ## Milestones
                1. Year-to-date tax and social security per payroll compared with the liabilities shown on the tax authority's online account.
                2. Payments made compared with payments the tax authority has allocated.
                3. Each difference traced to a filing, payment or correction.
                4. Corrections submitted and confirmed before the year-end submission.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly tie-outs in a year, with every difference between payroll and the tax authority's account traced and resolved."
                cadence: rolling
              tasks:
                - "Download year-to-date liabilities and payments from the tax authority's online account"
                - "Compare them with the payroll system's year-to-date report @recurring(quarterly)"
                - "Trace each difference to a filing, payment or correction"
                - "Submit any correction needed and keep the confirmation"
            - name: Prior period corrections and back pay
              description: |-
                ## Purpose
                Some errors surface months later: an allowance never set up, a wrong tax code applied since the start of the year, a pension rate missed. Correcting them properly means recalculating each affected period, agreeing arrears or overpayment recovery with the employee and filing amended figures the way the tax authority requires, not just adding a lump sum to next month's pay.

                ## Milestones
                1. Each affected employee and period identified and the correct figures recalculated.
                2. The approach to arrears or overpayment recovery agreed, with each employee told in writing.
                3. Correction filings made in the format the tax authority requires.
                4. Pension and benefit providers given corrected contribution figures.
                5. The cause added to the payroll error log.

                ## Notes
                Recovering an overpayment usually needs the employee's agreement and a reasonable repayment plan. Take employment advice before deducting anything.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every affected period recalculated, arrears or recoveries agreed in writing, and corrected filings accepted by the tax authority."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List every employee and period affected by the error"
                - "Recalculate the correct pay and deductions for each period"
                - "Write to each employee explaining the correction and any repayment plan"
                - "File the correction in the format the tax authority requires"
            - name: Court orders and earnings attachments
              description: |-
                ## Purpose
                Courts, child support agencies and tax authorities can order an employer to deduct money from an employee's pay and pass it on. These orders carry strict calculation rules, protected earnings levels and deadlines, and an employer that ignores one can become liable for the debt. A clear procedure for receiving, calculating and remitting them, handled discreetly, protects the employee and the business.

                ## Milestones
                1. A procedure for receiving an order, checking it is genuine and setting it up before the next run.
                2. Calculation rules for each order type in use written down, including protected earnings.
                3. Deductions remitted to the issuing body by its deadline, with a record kept.
                4. The employee informed as the order requires, with access to the details restricted.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every earnings order received in the last year set up before the next run, calculated to its rules and remitted on time."
                cadence: rolling
              tasks:
                - "Write a procedure for receiving and checking earnings orders"
                - "Record the calculation rules and protected earnings for each order type"
                - "Remit deductions to each issuing body and keep the remittance records"
                - "Restrict who can see employees' earnings order details"
            - name: Employees working across states or countries
              description: |-
                ## Purpose
                An employee who moves to another state, works remotely from abroad or splits time between two countries can create withholding, social security and registration duties in a new place. Spotting these cases early and getting specialist advice before payroll changes avoids double deductions, unpaid foreign liabilities and employees caught out at their own tax return.

                ## Milestones
                1. Every employee working outside the payroll's home jurisdiction identified, with dates and locations.
                2. Specialist advice obtained on withholding, social security and any employer registration in each location.
                3. Payroll set up to follow the advice, including any certificate that keeps social security in the home country.
                4. A rule agreed that remote working abroad is approved by finance before it starts.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each cross-border or cross-state employee has written specialist advice and a payroll set-up that follows it, with an approval rule for new cases."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List employees who live or work outside the payroll's home location"
                - "Brief a payroll or tax specialist on each case with dates and locations"
                - "Change the payroll set-up to follow the written advice"
                - "Agree that finance approves remote working abroad before it begins"
---

# Payroll Run Processing

This area is for whoever makes sure people are paid correctly and on time: an owner running payroll for the first few employees, a manager signing off a team's hours, or a small finance team running weekly and monthly payrolls. It starts with the foundations (employer registration, a pay calendar, clean employee records, the right software, a pay element map, this year's rates and a run checklist), then the per-period machinery of starters, leavers, timesheets, change logs, variance checks, approval, payslips, filings, remittances and the payroll journal, followed by the calculation skills behind a payslip, the improvements and decisions worth making, the dated runs of the year, situations for owners, managers and teams, and finally specialist work such as tax authority tie-outs, prior period corrections, earnings orders and cross-border employees.

What repeats is the pay cycle itself: a weekly timesheet chase, a change log closed around the 18th, a variance check, approval and release in the days before pay day, the employer filing, then tax, pension and journal work in the first half of the following month, with quarterly master data, minimum wage and tax authority checks and a yearly calendar, rates and year-end cycle. The dates assume a month-end pay day, so move them to fit your own calendar. The Operational checklist, Purchase decision, Metrics log, Compliance control, Remediation plan and Onboarding plan templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
