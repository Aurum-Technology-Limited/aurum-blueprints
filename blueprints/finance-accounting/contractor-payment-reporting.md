---
id: finance-accounting.contractor-payment-reporting
name: Contractor Payment Reporting
description: "A register of everyone you pay outside payroll, tax forms on file before the first payment, status checks, and year-end contractor payment reports filed on time and correct."
category: business
version: 1.0.0
tags: [finance-accounting, contractor-payment-reporting, small-business, manager, agency, tax-forms, information-returns, worker-status]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - operational-checklist
    - compliance-control
    - purchase-decision
    - remediation-plan
    - metrics-log
  pillars:
    - name: Finance & Accounting
      emoji: "🧾"
      description: "The money side of a business: bookkeeping and the monthly close, cash flow, budgeting and forecasting, billing and collections, payroll, tax, audit and financial controls."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Contractor Payment Reporting
          description: "Paying freelancers and contractors correctly, collecting tax forms and filing the year-end payment reports that tax authorities require from the payer."
          projects:
            - name: Register of everyone paid outside payroll
              description: |-
                ## Purpose
                Year-end payment reports are built from a list of payees, and the list most businesses have is the supplier ledger, which mixes contractors with utilities, landlords and card processors. Pulling twelve months of payments and marking which payees are individuals or small firms paid for services gives you the population that reporting, tax forms and status checks all depend on.

                ## Milestones
                1. Twelve months of supplier payments exported with payee, date, amount and method.
                2. Every payee marked as contractor, company supplier or not relevant.
                3. Each contractor's total for the year and payment method shown beside their name.
                4. The register saved where finance can find it, with the date it was last refreshed.

                ## Notes
                Include people paid by cash, card, payment app or personal reimbursement. Contractors paid outside the usual payment run are the ones most often missed.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A register lists every person or firm paid for services outside payroll in the last twelve months, with their annual total and payment method."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Export the last twelve months of supplier payments from the accounting system"
                - "Add payments made by card, cash or payment app that bypassed the payment run"
                - "Mark each payee as contractor, company supplier or not relevant"
                - "Total each contractor's payments for the year beside their name"
            - name: Which contractor payment reports your business must file
              description: |-
                ## Purpose
                Payers have different duties depending on country, industry and how the contractor is set up: year-end information returns such as Form 1099-NEC in the US or the T4A slip in Canada, monthly construction returns, or an annual taxable payments report in some industries. Writing down which reports apply to you, with thresholds and due dates checked against the tax authority's current guidance, turns a vague worry into a short list.

                ## Milestones
                1. The tax authority's current guidance on reporting payments to contractors read for each country where you pay people.
                2. A one-page list of every report that applies, with its threshold, due date and who receives a copy.
                3. Reports that do not apply noted with the reason, so the question is not reopened each year.
                4. The list confirmed with your accountant or tax adviser.

                ## Notes
                Thresholds and deadlines change. Check them on the tax authority's website each year rather than relying on last year's notes.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written list of the contractor payment reports your business must file, with thresholds and due dates, has been confirmed by your accountant."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the tax authority's current guide to reporting payments made to contractors"
                - "List each report that applies, with its threshold and due date"
                - "Note any industry rules, such as construction subcontractor schemes"
                - "Ask your accountant to confirm the list in writing"
            - name: Contractor reporting deadline calendar
              description: |-
                ## Purpose
                Late payment reports usually carry a penalty for each form, and the deadline often lands in the busiest weeks of the year, straight after the year-end close. A calendar that works backwards from each due date, with the form chase, the total freeze and the review all dated, makes filing the last step of a plan rather than a scramble in the first weeks of the new year.

                ## Milestones
                1. Each report's due date entered in the shared finance calendar.
                2. Working-back dates set for the final form chase, the total freeze and the review.
                3. Dates for sending copies to contractors entered where the rules require them.
                4. An owner and a backup named for each date.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A shared calendar holds every contractor reporting due date, with working-back dates and a named owner for each."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Enter each contractor report's due date in the shared finance calendar"
                - "Add a final form chase date six weeks before each filing"
                - "Name an owner and a backup for every date"
                - "Check the calendar against the tax authority's published dates @recurring(yearly)"
            - name: Standard tax form pack for new contractors
              description: |-
                ## Purpose
                Asking for a tax form after the work is done is the slowest way to get one, and asking for the wrong form wastes everyone's time. A standard pack that tells a domestic individual, a domestic company and an overseas contractor exactly which form to complete, such as a W-9 or a W-8BEN in the US system, gets the right form back before the first invoice.

                ## Milestones
                1. The correct tax form identified for each contractor type you pay.
                2. A short request message explaining why the form is needed and how it is protected.
                3. Official links to each current form stored in one place.
                4. A written rule that no first payment is released until the form is on file.

                ## Notes
                Link to the tax authority's own current version of each form rather than storing old copies, which go out of date.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A tax form pack covering domestic individuals, domestic companies and overseas contractors is in use, with a written no-form, no-payment rule."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the contractor types you pay and the tax form each one completes"
                - "Ask the agent to draft a plain request message explaining why the form is needed"
                - "Save official links to each current form in the finance folder"
                - "Agree the no-form, no-first-payment rule with whoever releases payments"
            - name: Contractor master record fields in the accounting system
              description: |-
                ## Purpose
                Year-end reports pull straight from the supplier record, so a nickname, an old address or a missing tax number becomes an error on a filed return. Setting the fields every contractor record must hold, legal name exactly as on the tax form, business name, tax number, address, entity type and a reportable flag, means the report is right because the record is.

                ## Milestones
                1. A required field list agreed for every contractor record.
                2. Custom fields or tags created in the accounting system for entity type and reportable status.
                3. Existing contractor records updated from the tax forms on file.
                4. Records with gaps listed for the form chase.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every active contractor record holds legal name, tax number, address, entity type and a reportable flag, or appears on the gap list."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the list of fields every contractor record must hold"
                - "Create the entity type and reportable status fields in the accounting system"
                - "Update existing records using the names on their tax forms"
                - "List every record still missing a required field"
            - name: Reportable payment tracking set-up in the books
              description: |-
                ## Purpose
                Not every payment to a contractor belongs on the report: goods, rent, card payments and reimbursed expenses are often treated differently from fees for services. Mapping which expense accounts and suppliers feed the report, then running a test report well before year-end, catches the wrong totals while there is still time to fix the coding.

                ## Milestones
                1. The expense accounts that hold reportable service payments identified.
                2. Contractor records flagged so the accounting system's payment report picks them up.
                3. A test report run for the year to date and checked against the payee register.
                4. Differences between the test report and the register explained or fixed.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A year-to-date contractor payment report runs from the accounting system and agrees to the payee register within explained differences."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the expense accounts where contractor service fees are coded"
                - "Map those accounts to the contractor reporting feature in the accounting software"
                - "Run a year-to-date test report and compare it with the payee register"
                - "Fix the coding behind each difference you find"
            - name: First worker status check for regular contractors
              description: |-
                ## Purpose
                Someone who works set hours, uses your equipment and has done so for two years may be an employee in the eyes of the tax authority whatever the contract says, and the cost of getting it wrong falls on the payer. Running a first, documented status check on the contractors you pay most often shows where the risk sits and which cases need an adviser's view.

                ## Milestones
                1. Contractors paid in at least six of the last twelve months listed.
                2. Each one assessed against the tax authority's published status factors, using its own tool where one exists.
                3. Each assessment recorded with the date, the facts and the outcome.
                4. Unclear or higher-risk cases referred to an employment or tax adviser.

                ## Notes
                Start from the **Risk register** template. A status check organises the facts; the conclusion on a difficult case belongs to an adviser.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dated status assessment is on file for every contractor paid in six or more of the last twelve months, with unclear cases referred to an adviser."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the contractors paid in six or more of the last twelve months"
                - "Find the tax authority's status guidance or online status tool"
                - "Record each contractor's assessment with date, facts and outcome"
                - "Send the unclear cases to an employment or tax adviser"
            - name: What a contractor invoice must show before it is paid
              description: |-
                ## Purpose
                Contractor invoices arrive as emails, spreadsheets and photographs of notebooks, and the one missing a legal name or tax number becomes next year's reporting problem. A short invoice standard sent to every contractor sets out the details you need, so payables can return an incomplete invoice on the day it arrives instead of chasing it at year-end.

                ## Milestones
                1. A list of the details every contractor invoice must carry.
                2. A one-page invoice guide sent to all current contractors.
                3. Payables briefed to return invoices that miss a required detail.
                4. A sample compliant invoice saved for new contractors.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every current contractor has received a one-page invoice guide and payables return invoices that miss a required detail."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the details a contractor invoice needs for payment and reporting"
                - "Write a one-page invoice guide with a sample invoice"
                - "Send the guide to every current contractor"
                - "Brief payables on returning invoices with missing details"
            - name: Secure storage for contractor tax numbers
              description: |-
                ## Purpose
                Tax forms carry personal tax numbers, home addresses and sometimes bank details, which makes a shared inbox full of them a data breach waiting to happen. Moving forms into one access-controlled folder, with a short list of who can open it and how long forms are kept, protects contractors and meets the data protection rules most countries apply.

                ## Milestones
                1. Tax forms moved out of email and personal drives into one restricted folder.
                2. An access list naming who can open the folder and why.
                3. A retention period agreed from the tax authority's record-keeping rules.
                4. Stray copies in inboxes and download folders removed once filed.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All contractor tax forms sit in one restricted folder with a written access list and retention period, and no copies remain in shared inboxes."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Search shared inboxes and drives for contractor tax forms"
                - "Move every form into one folder with restricted access"
                - "Write the access list and the retention period at the top of the folder"
                - "Review who can open the tax form folder @recurring(yearly)"
            - name: New contractor set-up checklist
              description: |-
                ## Purpose
                Contractors are often taken on by a project lead on a Friday and paid by finance the following week, which is how forms, agreements and status checks get skipped. A checklist that runs for every new contractor, from tax form to first payment, puts the reporting basics in place before any money moves.

                ## Milestones
                1. A checklist covering agreement, tax form, master record, status check and invoice guide.
                2. The checklist linked from the request form managers use to engage a contractor.
                3. Every contractor engaged in the last quarter run through it.
                4. Exceptions logged with the reason and who approved them.

                ## Notes
                Start from the **Operational checklist** template. Bank detail verification belongs in your payment fraud controls; link to them rather than repeating them here.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every contractor engaged since the checklist went live has a completed checklist on file, with any exception approved and logged."
                cadence: rolling
              tasks:
                - "Draft the set-up checklist from agreement to first payment"
                - "Link the checklist from the form managers use to engage contractors"
                - "Run the checklist for the next new contractor before their first payment"
                - "Review the quarter's checklist exceptions with the finance lead @recurring(quarterly)"
            - name: Contractor invoice check against agreed rates
              description: |-
                ## Purpose
                Day rates drift, hours creep and an expense line appears that nobody agreed, and once paid it flows straight into the year-end total. A weekly check of contractor invoices against the agreed rate, hours cap or milestone keeps the payments, and so the reported figures, matching what was actually contracted.

                ## Milestones
                1. Agreed rates, caps and milestones recorded for each active contractor.
                2. A weekly slot held to check the week's contractor invoices before approval.
                3. Differences queried with the project lead before payment.
                4. A short log of corrections kept.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each week's contractor invoices are checked against recorded rates before approval, with differences logged and resolved."
                cadence: rolling
              tasks:
                - "Record each active contractor's agreed rate, cap or milestone schedule"
                - "Check the week's contractor invoices against the agreed terms @recurring(weekly:wed)"
                - "Query any difference with the project lead before approving"
                - "Log each correction with the invoice number and the amount"
            - name: Missing tax form chase
              description: |-
                ## Purpose
                A form requested in March is easy to get; the same form requested from a contractor who left in June, two weeks before the filing deadline, often never arrives. A monthly chase of every gap on the contractor list, with a firmer second request and an escalation, means year-end starts with nearly every form already on file.

                ## Milestones
                1. A gap list of contractors without a valid tax form.
                2. A standard first request, reminder and final request written.
                3. Each gap chased monthly, with the date of every request recorded.
                4. Contractors still missing a form after the final request referred to the finance lead.

                ## Notes
                Keep proof of every request. In some tax systems, documented attempts to obtain a tax number count in your favour when penalties are considered.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The contractor gap list is chased monthly with dated requests, and fewer than five per cent of active contractors are missing a form at year-end."
                cadence: rolling
              tasks:
                - "Pull the list of contractors with no valid tax form on file"
                - "Write the first request, reminder and final request messages"
                - "Chase every contractor on the gap list and record the date @recurring(monthly:8)"
                - "Escalate contractors with no form after the final request"
            - name: Monthly reportable payments review
              description: |-
                ## Purpose
                Coding mistakes made in February are hard to spot in the year-end report, where they hide inside annual totals. A short monthly review of payments coded to contractor accounts, and of new payees who look like contractors but are not flagged, keeps the running totals right all year.

                ## Milestones
                1. A saved report of the month's payments to flagged contractors.
                2. New payees from the month checked for missing contractor flags.
                3. Miscoded payments reclassified before the month closes.
                4. A running year-to-date total per contractor ready to compare at year-end.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated monthly review is recorded for each month of the year, with miscoded payments and missing flags corrected before close."
                cadence: rolling
              tasks:
                - "Save a report of payments to flagged contractors for the month"
                - "Review the month's contractor payments and new payees @recurring(monthly:5)"
                - "Reclassify miscoded payments before the month closes"
                - "Update the year-to-date total for each contractor"
            - name: Monthly construction subcontractor return
              description: |-
                ## Purpose
                Construction businesses in some countries run a separate scheme for subcontractors: verifying each one with the tax authority, deducting tax at the rate it confirms, filing a monthly return and giving each subcontractor a statement. The UK Construction Industry Scheme is one example. A fixed monthly routine keeps verification, deductions and the return in step, because late returns can attract penalties even in a month with no payments.

                ## Milestones
                1. Every new subcontractor verified with the tax authority before their first payment.
                2. Deductions calculated at the verified rate on each payment.
                3. The monthly return filed by its deadline, including a nil return where required.
                4. Payment and deduction statements sent to every subcontractor paid that month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every monthly subcontractor return for the past year was filed on time, with statements issued to each subcontractor paid."
                cadence: rolling
              tasks:
                - "Check whether your country runs a construction subcontractor scheme"
                - "Verify each new subcontractor with the tax authority before paying"
                - "Prepare and file the monthly subcontractor return @recurring(monthly:14)"
                - "Send each subcontractor their payment and deduction statement"
            - name: Quarterly contractor ledger reconciliation
              description: |-
                ## Purpose
                Three lists drift apart over a year: the payee register, the contractor flags in the accounting system and what actually left the bank. Reconciling them each quarter finds the contractor paid by card, the refund recorded twice and the duplicate supplier record while the trail is still fresh.

                ## Milestones
                1. Quarter totals per contractor agreed between the accounting system and bank payments.
                2. Duplicate contractor records merged.
                3. Card and payment app payments to contractors matched to their records.
                4. A signed-off reconciliation saved for each quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A signed reconciliation of contractor payments to the bank exists for each quarter, with duplicates merged and differences cleared."
                cadence: rolling
              tasks:
                - "Export the quarter's contractor payments from the books and the bank"
                - "Reconcile contractor totals to bank payments @recurring(quarterly)"
                - "Merge any duplicate contractor records you find"
                - "Save the signed reconciliation in the year-end folder"
            - name: Year-end contractor payment report cycle
              description: |-
                ## Purpose
                Filing the year-end reports is a short, high-stakes window: totals frozen, forms checked, returns filed and copies sent to contractors, often within a few weeks of the year closing. Running it as the same documented cycle each year, with a control owner and evidence kept, makes it routine instead of heroic.

                ## Milestones
                1. Contractor totals frozen and agreed to the payee register after the last payment run of the year.
                2. Tax numbers, names and addresses checked against forms for every reportable contractor.
                3. Returns filed with the tax authority by the due date and the acknowledgement saved.
                4. Copies sent to every contractor the rules require, by their due date.
                5. Notes of what went wrong carried into next year's calendar.

                ## Notes
                Start from the **Compliance control** template so the owner, evidence and review are recorded the same way each year.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Year-end contractor reports are filed and recipient copies sent by their due dates, with acknowledgements saved in the year-end folder."
                cadence: cyclic
              tasks:
                - "Name the owner and reviewer for this year's contractor reporting"
                - "Freeze contractor totals after the final payment run of the year @recurring(yearly)"
                - "File the year-end contractor reports and save the acknowledgement @recurring(yearly)"
                - "Send each contractor their copy and record the date sent"
            - name: Annual tax form refresh for active contractors
              description: |-
                ## Purpose
                Contractors move house, incorporate, change their business name or become resident somewhere else, and nobody tells the payer. Asking every active contractor once a year to confirm their details, and replacing foreign status forms that are about to expire, keeps the master records true before the reporting season.

                ## Milestones
                1. A confirmation request sent to every active contractor.
                2. Changed details updated in the master records with the new form filed.
                3. Overseas forms nearing expiry replaced with current versions.
                4. Non-responders added to the missing form chase.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every active contractor has confirmed or updated their details in the last twelve months, and no overseas form on file has expired."
                cadence: cyclic
              tasks:
                - "Send every active contractor a request to confirm their tax details @recurring(yearly)"
                - "Update master records from the replies and file any new forms"
                - "List overseas forms that expire before the next reporting season"
                - "Move non-responders onto the missing form gap list"
            - name: Annual worker status re-review
              description: |-
                ## Purpose
                A contractor who started on a six-week project and is still here two years later, now with a company laptop and a team, is not the arrangement that was assessed at the start. Re-reviewing status once a year for long-running and changed engagements catches the drift before the tax authority does.

                ## Milestones
                1. Contractors engaged for more than a year, or whose role has changed, listed.
                2. Each one reassessed against current status guidance.
                3. Outcomes recorded and compared with the previous assessment.
                4. Cases that have moved towards employment referred for advice or a change of arrangement.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A dated reassessment exists for every contractor engaged over twelve months, with changed cases referred for advice."
                cadence: cyclic
              tasks:
                - "List contractors engaged for over a year or whose role has changed @recurring(yearly)"
                - "Reassess each one against the current status guidance"
                - "Compare each outcome with the previous assessment"
                - "Refer cases that have shifted towards employment for advice"
            - name: Contractor offboarding and final payment
              description: |-
                ## Purpose
                When an engagement ends, the final invoice, any retention and the last expense claim are easy to lose, and the contractor's address goes stale the day they leave. A short offboarding routine settles the final payment, confirms where the year-end copy should go and closes the record cleanly.

                ## Milestones
                1. The final invoice received, checked and paid.
                2. A postal and email address for the year-end copy confirmed.
                3. The supplier record marked inactive with an end date.
                4. Removal of system and building access confirmed with the project lead.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every contractor who left in the last year has a recorded end date, a final payment and a confirmed address for their year-end copy."
                cadence: rolling
              tasks:
                - "Ask the departing contractor for their final invoice and any expense claims"
                - "Confirm the address and email for their year-end copy"
                - "Mark the supplier record inactive with the end date"
                - "Check with the project lead that system access has been removed"
            - name: Monthly contractor spend and tenure report
              description: |-
                ## Purpose
                Finance usually sees contractor spend as one line in the accounts, while the status risk lives in the detail: how many people, how long each has been engaged and who has quietly become full time. A one-page monthly report by contractor, team and months engaged gives managers and the finance lead the same early warning.

                ## Milestones
                1. A report showing spend, team and months engaged for each active contractor.
                2. Contractors over a chosen tenure or monthly spend flagged.
                3. The report sent to budget holders and the finance lead each month.
                4. Flagged cases fed into the annual status re-review.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly contractor report with spend, tenure and flags reaches budget holders, and flagged cases appear in the status re-review."
                cadence: rolling
              tasks:
                - "Build a report of spend, team and months engaged per contractor"
                - "Choose the tenure and spend levels that trigger a flag"
                - "Send the contractor spend and tenure report to budget holders @recurring(monthly:25)"
                - "Add flagged contractors to the status re-review list"
            - name: Employment status tests in plain terms
              description: |-
                ## Purpose
                Tax authorities and courts look at the reality of the work, not the label on the contract: who controls how and when it is done, whether the person can send a substitute, who carries the financial risk and how far they are part of the business. Learning the tests your tax authority uses lets you spot a risky engagement at the request stage, before anyone signs.

                ## Milestones
                1. The tax authority's official guidance on employment status read in full.
                2. A one-page summary of the main factors written in your own words.
                3. Three of your own contractors used as worked examples.
                4. The summary shared with managers who engage contractors.

                ## Notes
                Employment law and tax law can reach different answers on the same facts. Treat the summary as a screening aid and take advice on real cases.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of your tax authority's status factors, tested on three real contractors, has been shared with hiring managers."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read the tax authority's guidance on employment status"
                - "Write a one-page summary of the main status factors"
                - "Test the summary on three of your current contractors"
                - "Share the summary with managers who engage contractors"
            - name: Reportable and non-reportable contractor payments
              description: |-
                ## Purpose
                The rules on what goes in the report are full of edges: services versus goods, individuals versus some companies, fees versus reimbursed expenses, and payments by card or payment app that the provider may report instead. Working through those edges once, with your own payment types as examples, prevents the two classic errors of reporting too much and too little.

                ## Milestones
                1. The tax authority's instructions for the report read, including the exceptions.
                2. A table of your payment types marked reportable, not reportable or ask an adviser.
                3. The treatment of reimbursed expenses and payment app payments written down.
                4. The table attached to the reporting procedure.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A table of every payment type you make to contractors, each marked reportable or not with the reason, is attached to the reporting procedure."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read the official instructions for your contractor payment report"
                - "List every type of payment you make to contractors"
                - "Mark each type reportable, not reportable or ask an adviser"
                - "Attach the table to the reporting procedure"
            - name: Validating a contractor's tax number
              description: |-
                ## Purpose
                A transposed digit or a name that does not match the tax authority's records is the commonest reason a filed report comes back as a mismatch. Learning how to check the format, check name and number together where the tax authority offers a matching service, and spot a personal number given for a company, stops these errors before they are filed.

                ## Milestones
                1. The format rules for tax numbers in each country you pay noted.
                2. The tax authority's name and number matching service found, if one exists, and access arranged.
                3. A sample of ten contractor records checked through it.
                4. A short procedure for checking new numbers at set-up.

                ## Notes
                In the US, for example, payers who file information returns can apply to use the IRS TIN Matching programme.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten contractor tax numbers have been checked through the available validation route and a written check-at-set-up procedure is in use."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Note the tax number format for each country where you pay contractors"
                - "Find out whether the tax authority offers a name and number matching service"
                - "Check ten existing contractor records through it"
                - "Write the check into the new contractor set-up procedure"
            - name: Overseas contractors and treaty forms
              description: |-
                ## Purpose
                Paying a designer in another country raises questions a domestic payment never does: whether any withholding applies, which form proves foreign status, whether a tax treaty changes the rate and whether the payment is reported at all. Learning how your tax authority treats non-resident contractors means each overseas engagement starts with the right paperwork.

                ## Milestones
                1. The rules on payments to non-resident contractors read for your country.
                2. The foreign status forms or residence certificates you need identified, such as Form W-8BEN in the US system.
                3. Withholding and treaty questions listed for your adviser.
                4. A short procedure for overseas contractor set-up written.

                ## Notes
                Where the work is done can matter as much as where the contractor lives. Record both on the master record.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written procedure covering forms, withholding questions and reporting for overseas contractors is in place and has been reviewed by an adviser."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read your tax authority's guidance on paying non-resident contractors"
                - "List the forms or certificates an overseas contractor must provide"
                - "Note where each overseas contractor does the work as well as where they live"
                - "Take the withholding and treaty questions to your adviser"
            - name: VAT and sales tax on contractor invoices
              description: |-
                ## Purpose
                Registered contractors must charge sales tax or VAT, unregistered ones must not, and services bought from abroad may need a reverse charge entry on your own return. Knowing which case applies to each contractor stops overpaid tax, rejected input claims and confusion when payment totals are compared with the year-end report.

                ## Milestones
                1. Each contractor's sales tax or VAT registration status recorded.
                2. Invoices from unregistered contractors checked for tax wrongly charged.
                3. The reverse charge treatment for overseas services confirmed with your adviser.
                4. The tax treatment noted on each contractor's master record.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every active contractor's sales tax or VAT status is on their record and reverse charge treatment for overseas services is confirmed in writing."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Record each contractor's sales tax or VAT registration status"
                - "Check recent invoices from unregistered contractors for tax charged"
                - "Ask your adviser how overseas services are treated on your return"
                - "Note the tax treatment on each contractor's master record"
            - name: Withholding when a tax number is missing
              description: |-
                ## Purpose
                Some tax systems require the payer to withhold tax from a contractor who has not provided a valid tax number, or after the tax authority says the number is wrong. Backup withholding in the US is one example. Knowing whether such a rule applies to you, when it starts and how the withheld tax is paid over avoids becoming liable for tax you never deducted.

                ## Milestones
                1. Whether your tax system has a missing-number withholding rule confirmed.
                2. The trigger, the source of the current rate and the payover steps written down.
                3. The accounting system set up to record and pay over any amount withheld.
                4. Contractors told in the form request that the rule exists.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note confirms whether missing-number withholding applies and, if it does, the steps to deduct, record and pay it over."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check whether your tax system requires withholding when a tax number is missing"
                - "Write down the trigger and the steps to pay the tax over"
                - "Set up a liability account for any amount withheld"
                - "Mention the rule in the standard tax form request"
            - name: Electronic filing of payment reports
              description: |-
                ## Purpose
                Many tax authorities now require payment reports to be filed electronically once a business files more than a small number, and paper filing is disappearing. Learning the filing route before the deadline week, whether a government portal, a third-party filing service or your accounting software, means the account, test files and sign-in are ready when they are needed.

                ## Milestones
                1. The current electronic filing requirement and threshold checked.
                2. The filing route chosen and an account or transmitter registration in place.
                3. A test file or sample submission completed where the system allows it.
                4. A second named person given their own access.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An electronic filing account for contractor reports is registered, tested and accessible to two named people before the deadline month."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check the current electronic filing rules for your contractor reports"
                - "Register for the filing portal or service you will use"
                - "Complete a test submission if the system offers one"
                - "Give a second named person their own filing access"
            - name: Correcting a payment report after filing
              description: |-
                ## Purpose
                Errors turn up after filing: a contractor says the total is wrong, a payment was coded to the wrong year or a tax number was mistyped. Learning the correction process, and the difference between fixing an amount and fixing a name or number, means corrections go in quickly and the contractor gets a matching copy.

                ## Milestones
                1. The tax authority's correction procedure read for each report you file.
                2. The steps for amount errors and identity errors written separately.
                3. A correction log set up with the original, the change and the date filed.
                4. A rule agreed that each corrected copy goes to the contractor at the same time.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written correction procedure and a correction log exist, and every correction filed is logged with the matching contractor copy."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read the correction procedure for each contractor report you file"
                - "Write the steps for amount errors and identity errors separately"
                - "Set up a correction log with the original and the change"
                - "Send each contractor their corrected copy on the day it is filed"
            - name: Reimbursed expenses and rebilled costs in contractor totals
              description: |-
                ## Purpose
                Agencies and project firms often pay contractors for travel, software or materials alongside their fees, then rebill those costs to clients. Whether those amounts belong in the reported total depends on how they are invoiced and documented, so learning the rule and coding expenses separately keeps the report accurate and the rebilling clean.

                ## Milestones
                1. The tax authority's treatment of reimbursed contractor expenses checked.
                2. A separate expense account or line type set up for contractor reimbursements.
                3. Contractors told how to show expenses on their invoices.
                4. Rebilled client costs traceable to the contractor invoice they came from.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Contractor reimbursements are coded separately from fees, with the reporting treatment written down and rebilled costs traceable to invoices."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check how reimbursed contractor expenses are treated in your report"
                - "Create a separate account or line type for contractor reimbursements"
                - "Tell contractors how to show expenses on their invoices"
                - "Tag rebilled client costs with the contractor invoice number"
            - name: Choosing a contractor payments and forms tool
              description: |-
                ## Purpose
                Once a business pays more than a handful of contractors, collecting forms by email and filing from spreadsheets becomes the bottleneck. Tools now exist that collect tax forms during onboarding, validate numbers, pay in several currencies and prepare the year-end reports, and comparing two or three against your volume and countries tells you whether one is worth its fee.

                ## Milestones
                1. Requirements written: contractor count, countries, currencies, forms and reports needed.
                2. Three tools compared on the same criteria, including what each files on your behalf.
                3. Data protection terms and the link to your accounting software checked.
                4. A decision recorded, including a decision to keep the current process.

                ## Notes
                Start from the **Purchase decision** template. Check who remains legally responsible for the filing when a tool files for you; it is usually still the payer.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on a contractor payments tool, based on three options scored against written requirements, is saved in the finance folder."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write down contractor numbers, countries, currencies and reports you need"
                - "Shortlist three tools and score them on the same criteria"
                - "Check how each tool connects to your accounting software"
                - "Record the decision and the reason in the finance folder"
            - name: Who files the year-end reports, software, accountant or portal
              description: |-
                ## Purpose
                Year-end contractor reports can be filed from your accounting software, by your external accountant, through the tax authority's own portal or by a specialist filing service, and each has a different cost and a different point of failure. Choosing one route months before the deadline, with a named person accountable, avoids discovering in the last week that nobody has the access.

                ## Milestones
                1. The available filing routes and their costs listed.
                2. Each route's requirements checked: access, data format and the date data must be handed over.
                3. A route chosen and the accountable person named.
                4. The decision and any handover date added to the reporting calendar.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A filing route and accountable person for this year's contractor reports are recorded, with the handover date in the reporting calendar."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the filing routes open to you and what each costs"
                - "Ask your accountant what they need and by when if they file"
                - "Choose the route and name the accountable person"
                - "Add the data handover date to the reporting calendar"
            - name: Employer of record or contractor for a long-term overseas worker
              description: |-
                ## Purpose
                Long-term contractors abroad who work only for you, full time, for years can create employment and tax obligations in their own country that a contract cannot switch off. Comparing the contractor arrangement with an employer of record service, which employs the person locally on your behalf, gives you a costed choice instead of an accidental one.

                ## Milestones
                1. The worker's hours, tenure, other clients and location recorded.
                2. Local employment and tax risk questions put to an adviser in their country.
                3. Costs compared for continuing as a contractor and for an employer of record.
                4. A decision recorded with the adviser's view attached.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A costed comparison of contractor and employer of record arrangements for the overseas worker exists, with an adviser's view and a recorded decision."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Record the overseas worker's hours, tenure and other clients"
                - "Ask an adviser in their country about employment and tax risk"
                - "Get quotes from two employer of record providers"
                - "Record the decision with the adviser's view attached"
            - name: Contractor agreement clauses that support reporting
              description: |-
                ## Purpose
                Your contractor agreement can make reporting easier or harder: one that requires a tax form before payment, notice of changed details and invoices in a set format does half the chasing for you. Reviewing the template agreement with these clauses in mind, and having a lawyer approve the wording, fixes the problem for every future contractor.

                ## Milestones
                1. The current contractor agreement template reviewed against reporting needs.
                2. Clauses drafted for tax forms, change notification, invoice content and the facts of the working arrangement.
                3. The wording approved by a lawyer.
                4. The updated template in use for all new engagements.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A lawyer-approved contractor agreement template with reporting clauses is used for every new engagement."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read your current contractor agreement for any tax form or invoice clauses"
                - "Ask the agent to draft clauses on tax forms, changed details and invoices"
                - "Send the draft wording to a lawyer for approval"
                - "Replace the old template in the shared contracts folder"
            - name: Moving a misclassified contractor onto payroll
              description: |-
                ## Purpose
                When a status review concludes that a contractor is in reality an employee, the fix involves payroll registration, a new contract, possibly past tax and contributions, and a careful conversation with the person. A dated plan run with an adviser limits back costs and treats the worker fairly.

                ## Milestones
                1. The adviser's conclusion and the exposure for past periods documented.
                2. A payroll start date agreed with the worker and an employment contract signed.
                3. Any disclosure or correction to the tax authority made as the adviser recommends.
                4. The contractor record closed and the change noted in the payee register.

                ## Notes
                Start from the **Remediation plan** template. Do not change the arrangement before the adviser has seen it, because the timing and wording of any disclosure can matter.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The worker is on payroll under an employment contract, any past-period correction is made on advice, and the contractor record is closed."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write up the adviser's conclusion and the periods affected"
                - "Agree a payroll start date and contract terms with the worker"
                - "Make any correction to the tax authority as the adviser recommends"
                - "Close the contractor record and update the payee register"
            - name: First year-end contractor reporting season
              description: |-
                ## Purpose
                The first season is when the gaps show: forms never collected, addresses out of date, totals that do not agree. Treating it as an event, with a dry run a month before the due date, a second-person review and a reserved filing day, gives a first-time payer the best chance of an on-time, correct submission.

                ## Milestones
                1. A dry-run report produced a month before the due date.
                2. Every reportable contractor's form, name, number and address checked.
                3. The reports reviewed by a second person or your accountant before filing.
                4. Reports filed and copies sent by the due date.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "This year's contractor reports were filed and copies sent by the due date, after a dry run and a second-person review."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Book a dry-run date a month before the report is due"
                - "Check each reportable contractor's form, name, number and address"
                - "Arrange a second-person review of the reports before filing"
                - "Block a filing day in the calendar with a backup day after it"
            - name: Answering contractor queries on their year-end copy
              description: |-
                ## Purpose
                Within days of copies going out, contractors write in: the total does not match their records, the address is wrong, or they were paid through a platform and expected no form. Handling these as a short service window, with a reply template and a promised response time, protects the relationship and catches the errors that need a correction.

                ## Milestones
                1. A dedicated inbox or label set up for year-end queries.
                2. A reply template explaining how the total was calculated.
                3. Each query logged with its outcome and reply date.
                4. Valid errors passed to the correction procedure.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every contractor query on a year-end copy is logged and answered within five working days, with valid errors corrected."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Set up a label or inbox for contractor year-end queries"
                - "Write a reply template explaining how totals were calculated"
                - "Log each query with its outcome and reply date"
                - "Send valid errors to the correction procedure"
            - name: Catch-up filing for missed prior years
              description: |-
                ## Purpose
                Discovering that reports were never filed for past years is common when a business first grows past a few contractors or changes bookkeeper. A structured catch-up, built with your accountant, rebuilds the totals, collects what forms it can and files the late returns on their advice about order, timing and any penalty relief.

                ## Milestones
                1. The years and reports missed identified with your accountant.
                2. Payment totals rebuilt for each missed year from bank and ledger records.
                3. Missing tax forms collected from past contractors where possible.
                4. Late reports filed on advice, with copies sent and any penalties recorded.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Late contractor reports for every missed year are filed on your accountant's advice, with totals rebuilt and the filings saved."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Ask your accountant which past years and reports may be missing"
                - "Rebuild payment totals per contractor for each missed year"
                - "Request tax forms from past contractors who are still reachable"
                - "File the late reports in the order your accountant recommends"
            - name: Responding to a tax number mismatch notice
              description: |-
                ## Purpose
                After filing, the tax authority may send a list of contractors whose name and number did not match its records, sometimes with a deadline to contact them and start withholding. In the US this arrives as a CP2100 notice, which leads to B notices sent to the contractors. Working through the list on time, with the right letters and a dated record, keeps a data problem from becoming a penalty.

                ## Milestones
                1. Each name on the notice matched to your records and the error type identified.
                2. Letters or requests sent to each contractor within the stated time.
                3. Corrected details recorded, or withholding started where the rules require it.
                4. A dated record kept for every contractor on the notice.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every contractor on the mismatch notice has been contacted within the stated time and their record corrected or withholding started."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Match each name on the notice to the contractor record"
                - "Add the response deadline in the notice to the calendar"
                - "Send each contractor the required request for corrected details"
                - "Record every action and date against the notice"
            - name: Penalty notice for a late or wrong payment report
              description: |-
                ## Purpose
                Penalties for late filing or for missing tax numbers can arrive months after the deadline, by which point nobody remembers why it happened. Responding with a clear timeline, the evidence of your form requests and an honest account of the cause gives the best chance of a fair outcome, and the review afterwards stops it happening again.

                ## Milestones
                1. The notice read and the response deadline added to the calendar.
                2. A timeline and evidence pack assembled, including dated form requests.
                3. A response or appeal sent, with your accountant's input where needed.
                4. The cause fixed and the fix noted in the reporting procedure.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A response with evidence was sent before the notice deadline and the underlying cause has a recorded fix."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Add the penalty notice response deadline to the calendar"
                - "Gather the dated form requests and filing records for the year"
                - "Draft the response with your accountant"
                - "Write the fix for the cause into the reporting procedure"
            - name: Agency freelancer bench reporting
              description: |-
                ## Purpose
                Agencies can pay forty freelancers a year, many for a single job, through a mix of bank transfers, payment apps and project tools. A bench approach, where every freelancer is set up once with forms on file before their first brief, keeps that long tail reportable without slowing producers who need someone by Monday.

                ## Milestones
                1. A freelancer bench list with form, rate and status assessment for each person.
                2. Producers booking only freelancers already on the bench, or triggering fast set-up.
                3. Payments made through one channel that records the freelancer's identity.
                4. A monthly bench review that marks inactive freelancers.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every freelancer paid in the last year sat on the bench with a tax form on file before their first payment."
                cadence: rolling
              tasks:
                - "List every freelancer the agency paid in the last twelve months"
                - "Agree with producers that new freelancers join the bench before briefing"
                - "Route freelancer payments through one recorded channel"
                - "Review the freelancer bench and mark inactive people @recurring(monthly:28)"
            - name: Owner-run contractor reporting in one hour a month
              description: |-
                ## Purpose
                An owner paying a bookkeeper, a web developer and a couple of tradespeople does not need a system, but does need the year-end report not to become a weekend of digging through bank statements. One hour a month, on the same day, to check new payees, file forms and update totals is enough to make filing a short job.

                ## Milestones
                1. A monthly hour blocked in the calendar.
                2. A one-page list of contractors with form status and running total.
                3. Forms for new contractors filed in the month they start.
                4. A year-end pack ready to hand to your accountant.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The monthly hour has been held in at least ten months of the year and the year-end pack reaches your accountant complete."
                cadence: rolling
              tasks:
                - "Block one hour on the same day each month for contractor admin"
                - "Check new payees, file forms and update totals @recurring(monthly:20)"
                - "Keep a one-page list of contractors with form status and totals"
                - "Send the year-end pack to your accountant"
            - name: Inheriting contractor reporting with gaps
              description: |-
                ## Purpose
                Taking over from a departed bookkeeper, a finance manager often finds forms in someone's inbox, flags half set and no record of what was filed last year. A 45-day takeover plan, starting with last year's filings and the gap list, sets a known baseline before the next season.

                ## Milestones
                1. Last year's filings and acknowledgements located, or their absence confirmed.
                2. Access to filing accounts moved to named current staff.
                3. A gap list of missing forms, flags and unresolved notices.
                4. A plan to close the gaps agreed with the finance lead.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Last year's filings are located, filing access is held by current staff and a gap plan is agreed within 45 days."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Find last year's contractor filings and acknowledgements"
                - "Move filing account access to named current staff"
                - "Build a gap list of missing forms, flags and open notices"
                - "Agree the gap closing plan with the finance lead"
            - name: Rehiring a former employee as a contractor
              description: |-
                ## Purpose
                Bringing back a leaver as a contractor to finish a project is common and often the highest-risk status case on the books: same desk, same manager, same work. Setting the new engagement up deliberately, with a different scope, a status check and a clear end date, keeps it defensible.

                ## Milestones
                1. The new scope written so it differs from the old job.
                2. A status assessment completed before the engagement starts.
                3. Payroll confirmed as closed and the final payslip issued.
                4. An end date or review date set in the agreement.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The returning worker has a written scope, a pre-start status assessment and an agreement with an end or review date."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the contractor scope and compare it with the old job description"
                - "Complete a status assessment before work starts"
                - "Confirm payroll has closed and the final payslip went out"
                - "Set an end or review date in the agreement"
            - name: Contractors paid through marketplaces and payment platforms
              description: |-
                ## Purpose
                When a contractor is hired and paid through a freelance marketplace, or paid by card or a payment app, the platform may carry the reporting duty, and including those payments again in your own report double counts them. Mapping how each contractor was paid shows which payments you report and which the platform covers.

                ## Milestones
                1. Each contractor's payment channels for the year listed.
                2. The platform's own reporting responsibilities confirmed from its terms or help pages.
                3. Platform-reported payments excluded from your totals with a note why.
                4. The treatment checked with your accountant.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each contractor's payments are split by channel, with platform-reported amounts excluded and the treatment confirmed by your accountant."
                cadence: cyclic
              tasks:
                - "Find each marketplace's help page on tax reporting for clients"
                - "List the payment channels used for each contractor this year @recurring(yearly)"
                - "Exclude platform-reported payments from your totals with a note"
                - "Confirm the treatment with your accountant"
            - name: Contractors in several countries as the business grows
              description: |-
                ## Purpose
                Managers expanding into new markets often engage the first people there as contractors, and within a year the business is paying in five currencies under five sets of rules. A country-by-country summary of forms, reports and status risk, refreshed as each country is added, keeps the finance team from learning each regime at the deadline.

                ## Milestones
                1. A list of countries where contractors are paid, with headcount and spend.
                2. The forms, reports and status questions summarised for each country.
                3. Local advisers named for countries with significant spend.
                4. A rule that finance is told before the first contractor in a new country starts.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A country summary covers every country where contractors are paid, with local advisers named for the significant ones."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List each country where you pay contractors with headcount and spend"
                - "Summarise forms, reports and status questions for each country"
                - "Name a local adviser for each country with significant spend"
                - "Ask managers to tell finance before engaging in a new country"
            - name: Off-payroll rules for contractors using their own company
              description: |-
                ## Purpose
                Some countries apply special rules when a contractor works through their own limited company but would be an employee if engaged directly. The UK off-payroll working rules, often called IR35, are one example, where medium and large clients issue a status determination. Understanding where the duty sits in your supply chain, and keeping each determination with its reasons, is specialist work with real cost if it goes wrong.

                ## Milestones
                1. Whether such rules apply in your country and to a business of your size confirmed.
                2. Contractors working through their own company identified.
                3. Determinations made and issued as the rules require, with reasons recorded.
                4. A disagreement process in place and agencies in the chain briefed.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every contractor working through their own company has a recorded determination with reasons where the rules apply, or a note that they do not."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Check whether intermediary rules apply in your country and at your size"
                - "Identify contractors who work through their own company"
                - "Record a determination and its reasons for each one"
                - "Brief any agencies in the chain on who is responsible for what"
            - name: Regional new contractor reporting
              description: |-
                ## Purpose
                Beyond the year-end report, some states and regions require businesses to report a new independent contractor within days of engaging them, much like new hire reporting. Several US states run such programmes. Checking whether any apply where you engage people, and building the report into set-up, closes a gap that national checklists often miss.

                ## Milestones
                1. Regions where you engage contractors checked for new contractor reporting rules.
                2. Thresholds and deadlines for each applicable rule noted.
                3. The report added to the new contractor set-up checklist.
                4. Any overdue reports for current contractors filed.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each region where you engage contractors has been checked, and any required new contractor report is built into set-up."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the regions where your contractors live or work"
                - "Check each region's rules on reporting new contractors"
                - "Add any required report to the new contractor set-up checklist"
                - "File overdue reports for current contractors"
            - name: Contractor reporting across several legal entities
              description: |-
                ## Purpose
                Groups that run several companies often pay the same contractor from two of them, and each entity is usually a separate payer with its own tax number and its own report. Keeping contractor totals by paying entity, and making sure a shared payables team files under the right one, avoids combined reports the tax authority cannot match.

                ## Milestones
                1. Each paying entity's tax number and filing account recorded.
                2. Contractors paid by more than one entity identified.
                3. Totals split by paying entity in the reporting workings.
                4. A check that each report was filed under the right entity.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Contractor totals are kept and reported separately for each paying entity, with a yearly check that filings match the right entity."
                cadence: cyclic
              tasks:
                - "List each entity's tax number and filing account"
                - "Find contractors paid by more than one entity"
                - "Split contractor totals by paying entity in the workings"
                - "Check every filing was made under the right entity @recurring(yearly)"
            - name: Audit trail for contractor tax detail changes
              description: |-
                ## Purpose
                Tax numbers, legal names or entity types changed in the master record without evidence turn a correct report into a wrong one, and an unexplained change is also a common step in payment fraud. Restricting who can edit these fields, and reviewing a change log each quarter against the forms on file, gives auditors and the tax authority a clean trail.

                ## Milestones
                1. Edit rights to contractor tax fields limited to named people.
                2. Change logging switched on, or a manual change log kept.
                3. Every change tied to a new form or written request.
                4. A quarterly review of changes signed off.

                ## Notes
                Bank detail changes belong in your payment fraud controls; this project covers the tax identity fields.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Only named people can edit contractor tax fields, and each quarter's changes are reviewed and tied to evidence."
                cadence: rolling
              tasks:
                - "Restrict edit rights on contractor tax fields to named people"
                - "Switch on change logging for supplier records"
                - "Review the quarter's tax detail changes against forms on file @recurring(quarterly)"
                - "Follow up any change that has no supporting form"
            - name: Contractor reporting season review and metrics
              description: |-
                ## Purpose
                Experienced teams measure the season: the form completion rate before year-end, reports filed on time, corrections made and notices received. A short review each year with these numbers shows whether the process is improving and where to spend effort before the next season.

                ## Milestones
                1. Form completion rate, on-time filing, corrections and notices recorded for the season.
                2. The figures compared with the previous year.
                3. Three changes agreed for next season.
                4. The changes added to the reporting calendar and procedures.

                ## Notes
                Start from the **Metrics log** template.
              priority: low
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A season review records four metrics against last year and three agreed changes, which appear in next year's calendar."
                cadence: cyclic
              tasks:
                - "Record this season's form completion, on-time filing, corrections and notices"
                - "Compare the figures with last season's"
                - "Agree three changes for next season with the team"
                - "Hold the contractor reporting season review @recurring(yearly)"
---

# Contractor Payment Reporting

This area is for anyone who pays freelancers and contractors and has to report those payments to the tax authority: an owner with a handful of tradespeople, a finance manager with a growing contractor list, an agency with a bench of freelancers. It starts with the foundations (a register of everyone paid outside payroll, the reports that apply, a deadline calendar, a tax form pack and clean master records), then the routines that keep forms and totals right through the year, the rules worth learning on status, reportable payments and overseas contractors, decisions on tools, filing routes and agreements, the dated moments of the reporting season and the notices that follow it, situations for agencies, owners and managers, and finally the specialist work of off-payroll rules, multi-entity reporting and season metrics.

What repeats is a weekly invoice check against agreed rates, a monthly form chase, reportable payments review and spend report, a monthly subcontractor return where a construction scheme applies, quarterly reconciliations and change log reviews, and the yearly cycle of form refreshes, status re-reviews, filing and a season review. The Risk register, Operational checklist, Compliance control, Purchase decision, Remediation plan and Metrics log templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
