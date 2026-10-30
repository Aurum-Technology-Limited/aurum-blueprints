---
id: finance-accounting.accounts-payable-operations
name: Accounts Payable Operations
description: "One inbox for bills, a clean supplier file, approvals that move, a steady payment run and monthly statement checks, so suppliers are paid correctly and on the terms agreed."
category: business
version: 1.0.0
tags: [finance-accounting, accounts-payable-operations, small-business, team, enterprise, supplier-invoices, payment-runs, three-way-match]
author: Aurum Technology
starter_structure:
  templates:
    - vendor
    - operational-checklist
    - month-end-close
    - purchase-decision
    - metrics-log
    - remediation-plan
  pillars:
    - name: Finance & Accounting
      emoji: "🧾"
      description: "The money side of a business: bookkeeping and the monthly close, cash flow, budgeting and forecasting, billing and collections, payroll, tax, audit and financial controls."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Accounts Payable Operations
          description: "Receiving, approving, coding and paying supplier bills on schedule, managing payment runs and supplier statements for finance teams and busy owners."
          projects:
            - name: Map of how supplier bills arrive and move
              description: |-
                ## Purpose
                Bills reach most businesses through four or five routes at once: a shared mailbox, a manager's personal inbox, paper in the post, supplier portals and the occasional photo on a phone. Drawing every route and every hand a bill passes through, from arrival to payment, shows where invoices sit unseen and where nobody owns the next step.

                ## Milestones
                1. Every route by which supplier bills arrive listed, with a rough monthly volume for each.
                2. Each step from arrival to payment drawn on one page, with the person or role who owns it.
                3. The three places where bills most often stall marked on the map.
                4. The map agreed with whoever approves and releases payments.

                ## Notes
                Ask the five suppliers you pay most often how they send bills today. Their answers usually reveal a route nobody on the finance side knew about.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page process map shows every arrival route, owner and stall point for supplier bills, signed off by the payment approver."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every mailbox, portal and person that currently receives supplier bills"
                - "Count roughly how many bills arrive by each route in a normal month"
                - "Draw the steps from arrival to payment with an owner for each"
                - "Mark the three points where bills most often sit waiting"
                - "Walk the payment approver through the map and record their changes"
            - name: Single inbox for supplier invoices
              description: |-
                ## Purpose
                Invoices sent to individual staff get forgotten during holidays, and late payment interest or a stopped account follows. A dedicated address such as invoices at your domain, monitored by finance and given to every supplier, means each bill lands in one queue that someone checks on a fixed rhythm.

                ## Milestones
                1. A shared invoice mailbox created with at least two people able to read it.
                2. A short notice sent to all active suppliers giving the new address and what a bill must show.
                3. Staff told to forward any bill they receive personally to the shared inbox the same day.
                4. Fewer than one in ten bills arriving anywhere else after two months.

                ## Notes
                Keep statements and remittance queries in separate folders of the same inbox so invoices are never buried under supplier chatter.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A shared invoice mailbox is live, every active supplier has been told its address, and at least 90 percent of bills arrive there within two months."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Create a shared invoice mailbox and give two people access"
                - "Set up folders for invoices, statements and supplier queries"
                - "Send every active supplier the new address and the details a bill must include"
                - "Ask staff to forward any bill they receive personally on the day it arrives"
                - "Check after two months which suppliers still send bills elsewhere"
            - name: Supplier master file clean-up
              description: |-
                ## Purpose
                Duplicate supplier records are the root of most duplicate payments, and a file full of dormant suppliers with old bank details is an open door for misdirected money. Cleaning the supplier list once, merging duplicates, filling missing tax numbers and blocking suppliers unused for eighteen months, gives every later process a reliable base.

                ## Milestones
                1. A full export of the supplier file with last transaction date for each record.
                2. Duplicate records for the same supplier merged or blocked, with the reason noted.
                3. Missing legal names, tax numbers, addresses and payment terms filled for all active suppliers.
                4. Suppliers with no activity for eighteen months set to inactive.
                5. A before and after count of active supplier records.

                ## Notes
                Never change bank details as part of a clean-up exercise. Bank detail changes follow the separate verification procedure the business uses for fraud prevention.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The supplier file has no known duplicates, every active record has a legal name, tax number and terms, and dormant suppliers are inactive."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Export the supplier list with the last transaction date for each record"
                - "Sort by name and tax number to find likely duplicate suppliers"
                - "Merge or block each duplicate and note which record survives"
                - "Fill missing legal names, tax numbers and terms for active suppliers"
                - "Set suppliers with no activity in eighteen months to inactive"
            - name: New supplier set-up checks
              description: |-
                ## Purpose
                Adding a supplier is the moment to confirm it is a real business, the right legal entity and on terms the business has agreed, because fixing it after three payments is far harder. A standard set-up form with the documents required and the person who approves it stops staff creating suppliers on the fly to get a bill paid.

                ## Milestones
                1. A set-up form listing legal name, registration and tax number, address, contact, terms and bank details.
                2. The supporting documents required written down, such as a letter on headed paper or a bank confirmation.
                3. One named approver for new suppliers who is not the person entering them.
                4. Every supplier added in the last quarter checked against the new form.

                ## Notes
                Start from the **Vendor** template for suppliers you will spend significantly with, so contract terms and contacts sit beside the payables record.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A new supplier form and approval step are in use, and every supplier created in the last quarter has a completed form on file."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft a one-page new supplier form with the fields the business needs"
                - "Decide which documents a new supplier must provide before set-up"
                - "Name an approver for new suppliers who does not enter them in the system"
                - "Check suppliers created in the last quarter against the form and fill gaps"
            - name: Invoice approval routing by budget owner
              description: |-
                ## Purpose
                Every bill needs someone who can say the goods arrived or the work was done, and in most businesses that person is unclear for a third of invoices. A simple routing table, matching suppliers or cost types to the budget owner who approves them, cuts the time bills spend waiting for someone to claim them.

                ## Milestones
                1. A routing table linking each cost type or major supplier to a named approver.
                2. A backup approver named for each person on the table.
                3. Approval limits per person checked against the business's authority levels.
                4. The routing set up in the accounting or approval software, or in a shared tracker.

                ## Notes
                Approval limits themselves belong to the business's delegation of authority. This project uses those limits; it does not set them.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each cost type and major supplier has a named approver and backup, and the routing is set up where bills are approved."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the cost types and top suppliers that make up most of your bills"
                - "Name an approver and a backup approver for each one"
                - "Check each approver's limit against the business's authority levels"
                - "Set up the routing in the approval tool or a shared tracker"
            - name: Valid invoice checklist before processing
              description: |-
                ## Purpose
                A bill without the supplier's tax number, a purchase order reference or a clear invoice number causes problems at the tax return, the audit and the payment run. Agreeing the short list of things every bill must show, and returning bills that fail it, moves the fixing back to the supplier where it belongs.

                ## Milestones
                1. A checklist of required details agreed, such as legal name, tax number, invoice number, date, description, tax amount and order reference.
                2. The tax authority's requirements for a valid tax invoice in your country checked and included.
                3. A polite standard reply written for returning an incomplete bill.
                4. The checklist shared with suppliers and pinned in the invoice inbox.

                ## Notes
                The rules for a valid tax invoice vary by country. Check your tax authority's published list or ask your accountant, rather than relying on a template from elsewhere.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written valid invoice checklist, including local tax invoice requirements, and a standard return reply are in use in the invoice inbox."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look up the tax authority's requirements for a valid tax invoice"
                - "Write the checklist of details every supplier bill must show"
                - "Draft a standard reply for returning an incomplete bill to the supplier"
                - "Pin the checklist in the invoice inbox and send it to new suppliers"
            - name: Payment terms recorded for every supplier
              description: |-
                ## Purpose
                Suppliers often have terms agreed in a contract or on a quote that never reach the accounting system, so bills fall due on a default of 30 days that matches nobody's agreement. Recording the real terms per supplier makes due dates in the aged payables report true, and shows which suppliers expect payment faster than the business pays.

                ## Milestones
                1. Terms for the top thirty suppliers by spend found in contracts, quotes or invoices.
                2. Those terms entered on each supplier record in the system.
                3. Suppliers with terms shorter than the standard run cycle flagged.
                4. A default term for all other suppliers agreed and applied.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The top thirty suppliers by spend have their contractual payment terms on their records and short-term suppliers are flagged."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pull a list of the top thirty suppliers by spend over the last year"
                - "Find the agreed payment terms for each in contracts or recent invoices"
                - "Enter the correct terms on each supplier record"
                - "Flag suppliers whose terms are shorter than your payment run cycle"
            - name: Unpaid bills backlog triage
              description: |-
                ## Purpose
                When bills have built up for weeks, the instinct is to pay the loudest supplier first, which leaves essential suppliers and tax-related bills at risk. A one-time triage that sorts every unpaid bill by status, due date and supplier importance turns a heap into a dated plan the person holding the cash can approve.

                ## Milestones
                1. Every unpaid bill, including those still in inboxes, entered or listed in one place.
                2. Each bill marked as approved, waiting for approval, disputed or missing information.
                3. Overdue bills from essential suppliers identified, such as rent, utilities, insurance and key materials.
                4. A dated plan for clearing the backlog agreed with whoever controls payments.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "All unpaid bills are listed with a status, and a dated clearance plan has been approved by the person who controls payments."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Gather every unpaid bill from inboxes, desks and the system into one list"
                - "Mark each bill as approved, awaiting approval, disputed or incomplete"
                - "Highlight overdue bills from suppliers the business cannot operate without"
                - "Draft a week-by-week clearance plan and get it approved"
            - name: Payment run day and cut-off decision
              description: |-
                ## Purpose
                Paying suppliers whenever someone asks creates dozens of small bank transfers, each needing approval, and makes cash impossible to predict. Choosing one fixed run day, weekly or fortnightly, with a cut-off for approvals the day before, gives suppliers a reliable answer and the business a single moment to control outgoing cash.

                ## Milestones
                1. Current payment frequency and number of separate payments per month measured.
                2. A run day and approval cut-off chosen, weekly or fortnightly.
                3. A rule written for genuine urgent payments outside the run, with who can approve them.
                4. Suppliers and staff told the run day and cut-off.

                ## Notes
                Most small businesses do well with a weekly run. Fortnightly suits low volumes. Agree the choice with whoever forecasts cash so the run fits the forecast.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision names the payment run day, the approval cut-off and the urgent payment rule, and staff have been told."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Count how many separate supplier payments went out last month"
                - "Choose a weekly or fortnightly run day and an approval cut-off"
                - "Write the rule for urgent payments outside the run"
                - "Tell staff and regular suppliers the run day and cut-off"
            - name: Twice-weekly invoice processing session
              description: |-
                ## Purpose
                Small batches processed on fixed days stop the invoice inbox growing into a monthly crisis, and give approvers a steady trickle instead of forty bills at once. Two short sessions a week, logging, checking and coding everything that arrived, keep the queue under a few days old.

                ## Milestones
                1. Two fixed processing slots in the calendar each week.
                2. Every bill in the inbox logged, checked against the valid invoice list and coded at each session.
                3. Bills sent for approval the same day they are logged.
                4. No bill older than four working days left unlogged after a month of sessions.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For four consecutive weeks, every bill in the invoice inbox has been logged and sent for approval within four working days of arriving."
                cadence: rolling
              tasks:
                - "Block two processing slots in the calendar each week"
                - "Log, check and code every bill in the invoice inbox @recurring(weekly:mon,thu)"
                - "Send logged bills to approvers before the session ends"
                - "Move statements and supplier queries to their own folders"
            - name: Weekly supplier payment run
              description: |-
                ## Purpose
                Each payment run is the point where errors turn into lost money, so it deserves the same checks every week rather than whatever time allows. A standard run, with a due list, a duplicate check, cash confirmed, a second person releasing and remittances sent, makes supplier payment predictable and auditable.

                ## Milestones
                1. A written run checklist covering selection, duplicate check, cash check, approval and release.
                2. Approved bills due before the next run selected each week.
                3. Duplicate invoice numbers and amounts checked before release.
                4. Payments released by a second person and remittances sent to suppliers.
                5. The run report filed with the approval evidence.

                ## Notes
                Start from the **Operational checklist** template so every run follows the same steps and leaves the same evidence.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every weekly payment run for a quarter has a completed checklist, a duplicate check and second-person release on file."
                cadence: rolling
              tasks:
                - "Write the payment run checklist from selection to remittance"
                - "Prepare the payment run of approved bills due before the next run @recurring(weekly:tue)"
                - "Check the run for repeated invoice numbers and identical amounts"
                - "Confirm the bank balance covers the run before release"
                - "File the run report with approvals and remittance evidence"
            - name: Weekly chase of unapproved invoices
              description: |-
                ## Purpose
                Bills waiting for approval are the most common reason suppliers are paid late, and approvers rarely notice how long an invoice has sat with them. A short weekly message listing each approver's waiting bills, oldest first, clears most of the queue before the payment run cut-off.

                ## Milestones
                1. A report of bills awaiting approval, sorted by approver and age.
                2. A short standard reminder sent to each approver with bills older than five days.
                3. Bills waiting more than fifteen days escalated to the approver's manager.
                4. Average approval time noted each month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No bill has waited more than fifteen days for approval for two consecutive months, shown by the approval ageing report."
                cadence: rolling
              tasks:
                - "Set up a report of bills awaiting approval by approver and age"
                - "Send each approver a list of their bills older than five days @recurring(weekly:fri)"
                - "Escalate bills waiting fifteen days to the approver's manager"
                - "Note the average approval time at the end of each month"
            - name: Monthly supplier statement reconciliation
              description: |-
                ## Purpose
                Supplier statements show bills you never received and payments the supplier never applied, and they are the earliest warning that an account is about to be put on stop. Reconciling the statements of your largest suppliers each month, and chasing every difference, keeps payables complete and supplier relationships calm.

                ## Milestones
                1. A list of suppliers whose statements are reconciled monthly, covering most of the spend.
                2. Each statement matched line by line to the supplier's account in the ledger.
                3. Missing invoices requested and unapplied payments sent to the supplier with remittance.
                4. A reconciliation note filed for each supplier each month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Statements for the agreed key suppliers are reconciled every month with differences listed and chased, for three months running."
                cadence: rolling
              tasks:
                - "Choose the suppliers whose statements will be reconciled every month"
                - "Ask those suppliers to send monthly statements to the invoice inbox"
                - "Reconcile each key supplier statement to the ledger @recurring(monthly:8)"
                - "Request missing invoices and send remittances for unapplied payments"
            - name: Monthly aged payables review
              description: |-
                ## Purpose
                An aged payables report shows at a glance what is owed, to whom and how late, but only if someone reads it and asks why items are old. Reviewing it monthly, with a reason against every bill past due, catches disputed bills, lost credit notes and bills paid outside the system.

                ## Milestones
                1. The aged payables report run on the same day each month.
                2. Every bill over 60 days given a written reason and an owner.
                3. Old items that are already paid or invalid corrected in the ledger.
                4. The total overdue figure tracked month on month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each month for a quarter, every payable over 60 days has a written reason and owner, and the overdue total is tracked."
                cadence: rolling
              tasks:
                - "Run the aged payables report and note the overdue total @recurring(monthly:5)"
                - "Write a reason and an owner beside every bill over 60 days"
                - "Correct items that are already paid or no longer valid"
                - "Share the overdue total and top five old items with the finance lead"
            - name: Month-end payables accruals and cut-off
              description: |-
                ## Purpose
                Goods received and services used before month end often arrive as bills weeks later, so the month's costs are understated unless payables puts in accruals. A short monthly routine, listing goods received not invoiced and known unbilled services, gives the close accurate costs and reverses cleanly next month.

                ## Milestones
                1. A monthly list of goods received but not yet invoiced, from receiving records or orders.
                2. Recurring unbilled services such as utilities and contractors estimated.
                3. Accruals posted with a reversal date and supporting workings.
                4. Bills received after month end checked against the accruals for accuracy.

                ## Notes
                Start from the **Month-end close** template if payables feeds a wider close checklist. Agree a materiality level with the finance lead so small items are not accrued one by one.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For three consecutive month ends, payables accruals are posted with workings and auto-reversal, and checked against bills received later."
                cadence: rolling
              tasks:
                - "Agree an accrual materiality level with the finance lead"
                - "List goods received not invoiced and unbilled services at month end @recurring(monthly:27)"
                - "Post accruals with reversal dates and attach workings"
                - "Compare next month's bills to last month's accruals and note big gaps"
            - name: Payables control account reconciliation
              description: |-
                ## Purpose
                The total of every supplier balance should equal the payables control account in the general ledger, and when it does not, journals have been posted where they should not be. Reconciling the two monthly and investigating any difference straight away stops small errors compounding into a year-end mystery.

                ## Milestones
                1. The supplier ledger total and control account balance compared on a fixed day each month.
                2. Manual journals to the control account identified and explained.
                3. Any difference investigated and cleared or documented.
                4. A signed reconciliation filed each month.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A signed monthly reconciliation shows the supplier ledger total agrees with the payables control account, or any difference is explained."
                cadence: rolling
              tasks:
                - "Compare the supplier ledger total to the control account balance @recurring(monthly:3)"
                - "List any manual journals posted to the control account"
                - "Investigate and clear or explain each difference"
                - "Sign and file the reconciliation with the month's records"
            - name: Supplier query log
              description: |-
                ## Purpose
                Suppliers chasing payment by phone and email take hours of payables time each week, and the same question is often answered twice by different people. A simple shared log of every query, with the answer and the date closed, shows which suppliers or processes generate the most calls.

                ## Milestones
                1. A shared log with supplier, query, date received, owner and date closed.
                2. Every supplier call or email about payment logged on the day.
                3. Open queries reviewed and closed each month.
                4. The three most common query causes identified after a quarter.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A quarter of supplier queries is logged with owners and close dates, and the three most common causes are written down."
                cadence: rolling
              tasks:
                - "Set up a shared supplier query log with owner and close date"
                - "Log each supplier payment query on the day it arrives"
                - "Review and close open supplier queries @recurring(monthly:14)"
                - "Write down the three most common causes after three months"
            - name: Credit notes and supplier debit balances
              description: |-
                ## Purpose
                Credit notes promised by suppliers often never arrive, and those that do are left unapplied, so the business either pays the full bill or sits on debit balances it never recovers. Tracking promised credits and clearing debit balances each month turns forgotten money back into cash or a set-off.

                ## Milestones
                1. A list of credit notes promised but not yet received, with the supplier contact.
                2. Received credit notes matched to the bills they reduce.
                3. Supplier accounts with debit balances listed with the reason.
                4. Each debit balance recovered as a refund or agreed set-off against future bills.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No supplier debit balance is older than 90 days without a recorded recovery plan, and promised credit notes are tracked to receipt."
                cadence: rolling
              tasks:
                - "List credit notes suppliers have promised but not yet sent"
                - "Match received credit notes to the bills they reduce"
                - "Review supplier debit balances and chase refunds or set-offs @recurring(monthly:19)"
                - "Ask suppliers holding debit balances for a refund or written set-off"
            - name: Direct debits and standing orders register
              description: |-
                ## Purpose
                Money leaving by direct debit or card on file bypasses the approval and payment run entirely, so old subscriptions and wrong amounts can run for years. A register of every automatic supplier payment, reviewed each quarter, keeps these collections inside the payables process.

                ## Milestones
                1. Every direct debit, standing order and card-on-file supplier listed from bank and card statements.
                2. Each one linked to an owner, a contract and the bill or statement it pays.
                3. Collections with no owner or purpose cancelled after confirmation.
                4. The register reviewed against bank statements each quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A register lists every automatic supplier payment with an owner, and a quarterly review against bank statements is recorded."
                cadence: rolling
              tasks:
                - "List every direct debit and standing order from the last three bank statements"
                - "Add card-on-file suppliers from company card statements"
                - "Name an owner and the related contract for each collection"
                - "Check the register against bank and card statements @recurring(quarterly)"
            - name: Annual supplier file refresh
              description: |-
                ## Purpose
                Over a year, suppliers change names, merge, move address and drop out of use, and the supplier file slowly fills with records nobody can vouch for. A yearly refresh, confirming active suppliers still exist with current details and blocking those unused, keeps the file small and trustworthy.

                ## Milestones
                1. Suppliers with no transactions in twelve months set to inactive.
                2. Legal names and tax numbers for the top fifty suppliers rechecked against official registers where available.
                3. Contact emails for remittances and statements confirmed.
                4. The year's count of new, deactivated and active suppliers recorded.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A yearly refresh record shows inactive suppliers blocked, top fifty suppliers' details rechecked and counts of active records."
                cadence: cyclic
              tasks:
                - "Run the yearly supplier file refresh and block dormant records @recurring(yearly)"
                - "Recheck legal names and tax numbers for the top fifty suppliers"
                - "Confirm remittance and statement email addresses with active suppliers"
                - "Record the number of new, deactivated and active suppliers"
            - name: Three-way matching of order, receipt and invoice
              description: |-
                ## Purpose
                Matching the purchase order, the goods received record and the supplier bill before paying is the core control in payables, and the one most often skipped when volumes rise. Learning how to match, what tolerances to allow and what to do with each type of mismatch lets the team pay correct bills fast and hold the wrong ones.

                ## Milestones
                1. The difference between two-way and three-way matching understood and written down.
                2. Price and quantity tolerances agreed with the finance lead.
                3. Twenty real bills matched by hand, with each exception and its fix recorded.
                4. A one-page guide to handling the five most common mismatches.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Twenty real bills have been matched with exceptions recorded, and a one-page mismatch guide with agreed tolerances is in use."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read how two-way and three-way matching differ in your software"
                - "Agree price and quantity tolerances with the finance lead"
                - "Match twenty recent bills to orders and receipts by hand"
                - "Write a one-page guide to the five most common mismatches"
            - name: Price and quantity differences on supplier bills
              description: |-
                ## Purpose
                Most matching exceptions come down to a bill charging more per unit than the order, charging for more than arrived, or splitting one delivery across several bills. Knowing who decides each case, the buyer, the receiver or the supplier, and recording the outcome stops differences being paid by default or held for months.

                ## Milestones
                1. Each type of difference assigned to the role who resolves it.
                2. A standard message for suppliers asking for a corrected bill or credit note.
                3. A month of differences logged with cause and outcome.
                4. Repeat offenders among suppliers or internal buyers raised with their managers.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A month of price and quantity differences is logged with cause, decision owner and outcome, and repeat causes are reported."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Assign each type of bill difference to the role who resolves it"
                - "Write a standard request to suppliers for a corrected bill or credit note"
                - "Log every price and quantity difference for one month"
                - "Raise repeat causes with the supplier or the buyer's manager"
            - name: Tax shown on purchase invoices
              description: |-
                ## Purpose
                Input tax can usually only be reclaimed when the bill is a valid tax invoice and the cost is for business use, and errors here show up as adjustments or penalties at a tax inspection. Learning what to check on each bill, and when to ask the accountant, protects the business's reclaim without turning payables into a tax department.

                ## Milestones
                1. The main rules for reclaiming sales tax or VAT on purchases in your country summarised from official guidance.
                2. Common blocked or partly recoverable costs listed, to be confirmed with your accountant.
                3. Tax codes in the system mapped to those cases.
                4. A list of bills from the last quarter with doubtful tax treatment sent to the accountant.

                ## Notes
                Tax rules vary by country and change. Treat this as a checklist to ask better questions; the treatment of any specific cost is for your accountant or tax adviser.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A summary of purchase tax checks from official guidance exists, tax codes are mapped to it and doubtful bills have been referred to the accountant."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read the tax authority's guidance on reclaiming tax on purchases"
                - "List costs that may be blocked or only partly recoverable"
                - "Map the system's purchase tax codes to each case"
                - "Send the accountant last quarter's bills with doubtful tax treatment"
            - name: Supplier deposits and prepayments
              description: |-
                ## Purpose
                Deposits paid before goods arrive and annual fees paid in advance are easy to lose track of, and are often paid a second time when the final bill arrives. Recording each prepayment against the supplier, and checking monthly that it has been used or recovered, keeps advance money visible until it is settled.

                ## Milestones
                1. Every open deposit and advance payment to suppliers listed with date, amount and what it is for.
                2. Each prepayment recorded on the supplier's account, not only in the bank.
                3. Final bills checked to confirm the deposit was deducted.
                4. Prepayments older than the expected delivery date chased.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "All open supplier deposits are recorded on supplier accounts and reviewed monthly, with each final bill showing the deposit deducted."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List every open deposit and advance payment made to suppliers"
                - "Record each prepayment against the supplier's account"
                - "Review open prepayments against expected delivery dates @recurring(monthly:24)"
                - "Check final bills to confirm deposits have been deducted"
            - name: Overseas supplier bills in foreign currency
              description: |-
                ## Purpose
                Overseas suppliers bring exchange rates, bank charges and intermediary fees that make the amount the supplier receives differ from the bill, leading to short-payment disputes. Learning how to record a foreign currency bill, choose who pays bank charges and book the exchange difference makes these suppliers as routine as local ones.

                ## Milestones
                1. The rate source and date the business uses for foreign currency bills agreed with the accountant.
                2. The bank charge option for international payments chosen and noted on supplier records.
                3. One foreign currency bill recorded and paid end to end, with the exchange difference posted.
                4. A short note for the team on handling short-payment complaints.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written method covers rate source, bank charges and exchange differences, and one foreign currency bill has been processed with it."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Agree with the accountant which exchange rate source and date to use"
                - "Choose the bank charge option for international supplier payments"
                - "Record and pay one foreign currency bill and post the exchange difference"
                - "Write a short note on handling suppliers who report a short payment"
            - name: Early payment discounts worked out properly
              description: |-
                ## Purpose
                Two percent off for paying in ten days instead of thirty sounds small, but over a year it is a very high return on the cash used, while some discounts are not worth taking when cash is tight. Learning to calculate the annualised value of each offer lets the business decide which discounts to take on purpose rather than by accident.

                ## Milestones
                1. The formula for the annualised cost of an early payment discount understood and tested on one example.
                2. Every current supplier discount offer listed with its terms.
                3. Each offer's annualised value compared with the business's cost of borrowing, agreed with the finance lead.
                4. Discounts the business will take flagged on supplier records so the run catches them.
              priority: low
              frontmatter:
                mode: learning
                output_kind: decision
                success_criteria: "All current supplier discount offers are listed with annualised value, and the ones to take are flagged on supplier records."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Work through the annualised discount formula on one supplier's terms"
                - "List every early payment discount suppliers currently offer"
                - "Compare each offer with the business's cost of borrowing"
                - "Flag discounts to take on supplier records so the run picks them up"
            - name: Withholding tax on supplier payments
              description: |-
                ## Purpose
                Some payments, often to overseas service providers or certain local contractors, require the payer to withhold tax and pay it to the tax authority, and missing it can leave the business liable for the tax itself. Finding out which suppliers this applies to, with your adviser, and building it into the payment run avoids an unpleasant discovery at a tax review.

                ## Milestones
                1. The types of supplier payments that may attract withholding tax in your country listed from official guidance.
                2. Suppliers potentially affected identified and confirmed with your tax adviser.
                3. Affected supplier records flagged with the treatment agreed.
                4. A process for paying over withheld tax and giving suppliers certificates written down.

                ## Notes
                Whether withholding applies, and at what rate, depends on the country, the service and any tax treaty. Get that answer from your tax adviser; this project organises the question and the follow-through.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Suppliers subject to withholding tax are confirmed with a tax adviser, flagged in the system, and a written pay-over process exists."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read the tax authority's guidance on withholding tax for payers"
                - "List suppliers, especially overseas service providers, who may be affected"
                - "Confirm the list and treatment with your tax adviser"
                - "Flag affected supplier records and write the pay-over steps"
            - name: Purchase order threshold decision
              description: |-
                ## Purpose
                Requiring a purchase order for every purchase slows the business down, while requiring none means bills arrive for spend nobody agreed in advance. Choosing a value threshold and the categories that always need an order, based on last year's bills, puts the control where the money is.

                ## Milestones
                1. Last year's bills analysed by value band and category.
                2. A threshold and list of always-order categories proposed with the share of spend each would cover.
                3. Exempt categories such as utilities, rent and tax payments named.
                4. The decision approved and written into the payables policy.
                5. Bills arriving without a required order reviewed each quarter.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An approved purchase order threshold, always-order categories and exemptions are written in the payables policy, with quarterly exception reviews."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Export last year's bills with value and spend category"
                - "Model how much spend different thresholds would cover"
                - "Propose a threshold with exempt categories to the finance lead"
                - "Review bills that arrived without a required order @recurring(quarterly)"
            - name: Choosing an invoice capture and AP automation tool
              description: |-
                ## Purpose
                Typing bill details by hand costs minutes per invoice and introduces errors, and capture tools now read invoices, suggest coding and route approvals. Comparing three tools against your volume, accounting software and approval needs, with a trial on real bills, avoids paying for features the business will never use.

                ## Milestones
                1. Requirements written: monthly volume, accounting software, approval steps, currencies and entities.
                2. Three tools shortlisted that connect to your accounting software.
                3. A trial of the top two on at least fifty real bills, with capture accuracy measured.
                4. A decision recorded with the total yearly cost and the go-live date.

                ## Notes
                Start from the **Purchase decision** template. Check how each tool handles duplicate detection and supplier bank details before price.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision names the chosen capture tool, its yearly cost and go-live date, backed by a trial on at least fifty real bills."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Write the requirements: volume, software, approvals, currencies and entities"
                - "Shortlist three tools that connect to your accounting software"
                - "Trial the top two on fifty real bills and measure capture accuracy"
                - "Record the decision with yearly cost and a go-live date"
            - name: Moving suppliers from cheques to electronic payment
              description: |-
                ## Purpose
                Cheques are slow, costly to post and easy to intercept or alter, and in many countries banks are phasing them out. Moving the remaining cheque suppliers onto bank transfer through the normal payment run removes a manual process and a fraud risk in one change.

                ## Milestones
                1. All suppliers still paid by cheque listed with annual payment count.
                2. Bank details collected from each through the standard verified set-up process.
                3. Cheque suppliers moved into the electronic payment run.
                4. Remaining cheque stock and signing authority reviewed and reduced.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "No more than a handful of suppliers remain on cheque payment, and all others are paid through the electronic run."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List suppliers still paid by cheque and how often"
                - "Request bank details from each through the verified set-up process"
                - "Move each converted supplier into the electronic payment run"
                - "Review remaining cheque stock and who can sign cheques"
            - name: Receiving structured e-invoices
              description: |-
                ## Purpose
                Structured e-invoices arrive as data rather than PDFs, so they post without typing, and a growing number of countries require them for business-to-business trade. Finding out what your country requires and when, and whether your software can receive them, lets payables move suppliers over on a planned timetable.

                ## Milestones
                1. Current or planned e-invoicing requirements in your country checked from official sources.
                2. Your accounting or capture software's e-invoice receiving capability confirmed.
                3. Suppliers already able to send e-invoices identified.
                4. A plan to receive e-invoices from those suppliers agreed and started.

                ## Notes
                Requirements and dates differ widely by country and change often. Check the tax authority's site and your software provider rather than relying on second-hand summaries.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written note records your country's e-invoicing requirements and software capability, with a plan for the first suppliers to switch."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Check the tax authority's site for current e-invoicing requirements"
                - "Ask your software provider how it receives structured e-invoices"
                - "Identify suppliers who can already send e-invoices"
                - "Agree a timetable to switch the first group of suppliers"
            - name: Dual authorisation for releasing payments
              description: |-
                ## Purpose
                One person able to create and release a payment run alone is the single biggest weakness in most small finance teams. Setting the banking platform so one person prepares and a different person approves every payment, with user rights reviewed each quarter, closes that gap without slowing the run.

                ## Milestones
                1. Current banking platform users and their rights listed.
                2. Payment creation and approval separated so no single user can do both.
                3. A backup approver set up for holidays and absence.
                4. User rights reviewed each quarter and leavers removed on their last day.

                ## Notes
                Talk to your bank about dual control options; most business platforms support it, sometimes with a value threshold.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Banking platform settings require two different users to create and approve every supplier payment, with a quarterly user review recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every banking platform user and what they can do"
                - "Ask the bank to require a second approver for all payments"
                - "Set up a backup approver for absence"
                - "Review banking user rights and remove leavers @recurring(quarterly)"
            - name: Invoice cycle time measurement
              description: |-
                ## Purpose
                Nobody can shorten the time from bill received to bill paid without knowing where that time goes. Measuring days to log, days to approve and days to pay for a month of bills shows which step to fix first, and a monthly figure shows whether fixes are working.

                ## Milestones
                1. Received, logged, approved and paid dates captured for a month of bills.
                2. Average days for each stage calculated.
                3. The slowest stage identified with its main causes.
                4. One change made and the next month's figures compared.

                ## Notes
                Start from the **Metrics log** template so the monthly figures sit in one place.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Monthly average days to log, approve and pay are recorded for three months, with one improvement made and its effect noted."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Capture received, logged, approved and paid dates for a month of bills"
                - "Calculate the average days for each stage"
                - "Ask the agent to summarise the causes behind the slowest stage"
                - "Record the monthly cycle time figures in the metrics log @recurring(monthly:12)"
            - name: Remittance advice sent with every payment
              description: |-
                ## Purpose
                Half of supplier payment queries are simply suppliers unable to tell which bills a lump-sum transfer covers. Sending a remittance listing invoice numbers and amounts with every payment, ideally automatically from the accounting software, removes most of those calls and speeds up suppliers applying cash.

                ## Milestones
                1. Remittance email addresses on file for all regular suppliers.
                2. Remittance advice set to send automatically from the software after each run.
                3. Payment references in the bank file showing your company name and a run reference.
                4. Supplier queries about unidentified payments compared before and after.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every payment run sends remittances listing invoice numbers to regular suppliers, and identification queries fall over the following quarter."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Collect remittance email addresses for all regular suppliers"
                - "Turn on automatic remittance advice in the accounting software"
                - "Set a clear payment reference format for the bank file"
                - "Compare unidentified payment queries before and after the change"
            - name: Written accounts payable policy
              description: |-
                ## Purpose
                Rules that live in one person's head disappear when they leave and get bent when a manager wants a bill paid today. A short written policy covering invoice receipt, approvals, purchase orders, payment runs, urgent payments and supplier set-up gives staff, approvers and auditors one reference.

                ## Milestones
                1. A draft policy of no more than four pages covering each step from receipt to payment.
                2. Approval limits and urgent payment rules taken from the business's authority levels.
                3. The policy approved by the finance lead or owner.
                4. The policy shared with all approvers and reviewed each year.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An approved payables policy of four pages or fewer is shared with all approvers and carries a yearly review date."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the agent to draft a payables policy outline from your process map"
                - "Fill each section with the rules the business actually follows"
                - "Get the policy approved by the finance lead or owner"
                - "Review the payables policy and update changed rules @recurring(yearly)"
            - name: Year-end payables cut-off and listing
              description: |-
                ## Purpose
                At the financial year end, the accountant or auditor needs a complete list of what was owed, and every bill dated before year end recorded in the right year. Planning the cut-off, the accruals and the final aged payables list a month ahead turns a scramble into a set of documents ready on the day they are asked for.

                ## Milestones
                1. A cut-off timetable agreed with the accountant or auditor a month before year end.
                2. All bills for goods and services received before year end recorded or accrued.
                3. A final aged payables list reconciled to the control account.
                4. Bills received in the first weeks of the new year checked for items belonging to the old year.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A year-end payables list reconciled to the control account and a search for unrecorded bills are handed to the accountant by the agreed date."
                cadence: cyclic
                effort_hours_estimate: "8"
              tasks:
                - "Agree the year-end payables timetable with the accountant @recurring(yearly)"
                - "Record or accrue every bill for goods and services received before year end"
                - "Reconcile the final aged payables list to the control account"
                - "Search early new-year bills for costs belonging to the old year"
            - name: Supplier balance confirmation exercise
              description: |-
                ## Purpose
                Auditors and larger businesses sometimes confirm balances directly with key suppliers, and the replies often expose bills the business never recorded. Running your own confirmation with the top twenty suppliers before year end finds those gaps while there is still time to fix them.

                ## Milestones
                1. The top twenty suppliers by spend or balance chosen for confirmation.
                2. Balance confirmation requests sent with the balance per your ledger.
                3. Replies reconciled and differences explained or corrected.
                4. Suppliers who did not reply followed up or reconciled from their statements instead.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Balance confirmations from at least fifteen of the top twenty suppliers are reconciled, with every difference explained or corrected."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pick the top twenty suppliers by spend or balance"
                - "Send each a balance confirmation request with your ledger balance"
                - "Reconcile each reply and correct or explain the differences"
                - "Follow up suppliers who have not replied within two weeks"
            - name: Holiday shutdown payment plan
              description: |-
                ## Purpose
                Closing for a holiday period, or losing the people who approve payments to leave, means suppliers due in those weeks get paid late unless the run is planned. Agreeing early and late runs, approvers on call and supplier notices before the break keeps essential suppliers paid while the office is quiet.

                ## Milestones
                1. Bank holiday and shutdown dates checked against the normal payment run days.
                2. An extra run before the break and the first run after it scheduled.
                3. An approver and releaser on call for genuine urgent payments.
                4. Key suppliers told the payment dates around the break.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A holiday payment calendar with extra runs, on-call approvers and supplier notices is agreed before the shutdown starts."
                cadence: cyclic
                effort_hours_estimate: "2"
              tasks:
                - "Plan the payment runs around the main holiday shutdown @recurring(yearly)"
                - "Check bank holiday dates against normal run days"
                - "Name an on-call approver and releaser for urgent payments"
                - "Tell key suppliers the payment dates around the break"
            - name: Payment practices reporting for larger companies
              description: |-
                ## Purpose
                Large companies in several countries must publish how quickly they pay suppliers, such as average days to pay and the share of bills paid within terms. Preparing the data a cycle early, and checking it against the official definitions, avoids a public figure that is wrong or a filing that is late.

                ## Milestones
                1. Whether the business is in scope, and the reporting periods, confirmed from official guidance.
                2. Data fields needed for the report identified in the payables system.
                3. A trial calculation run for the last period and checked by a second person.
                4. The report prepared, approved by the responsible director and filed on time.

                ## Notes
                Definitions and thresholds are set in law and differ by country. Confirm scope and definitions with your adviser or the official guidance before calculating anything.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A payment practices report, calculated to official definitions and approved by the responsible director, is filed by its deadline."
                cadence: cyclic
                effort_hours_estimate: "10"
              tasks:
                - "Check official guidance on whether the business must report payment practices"
                - "List the data fields the report needs from the payables system"
                - "Run a trial calculation for the last period and have it checked"
                - "Prepare and file the payment practices report on time @recurring(yearly)"
            - name: Payables cover plan for leave and absence
              description: |-
                ## Purpose
                If the one person who runs payables is ill for a fortnight, bills pile up, suppliers stop deliveries and nobody else knows the bank login process. A cover plan with a trained backup, written run steps and a tested handover means the run goes out on time whoever is away.

                ## Milestones
                1. A named backup for invoice processing, payment preparation and payment release.
                2. Written steps for each, kept where the backup can find them.
                3. The backup has prepared at least one real payment run under supervision.
                4. Banking access for the backup set up within the dual authorisation rules.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A named backup has run one supervised payment run using written steps, and has banking access within dual authorisation rules."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Name a backup for processing, preparing and releasing payments"
                - "Write the steps for each task where the backup can find them"
                - "Have the backup prepare a real payment run under supervision"
                - "Set up the backup's banking access within dual authorisation rules"
            - name: Owner-run payables in one weekly hour
              description: |-
                ## Purpose
                For an owner paying their own suppliers between everything else, payables usually happens late at night when a supplier rings. One protected hour a week, opening the invoice inbox, approving what is due and paying it in a single batch, keeps suppliers happy and the cash picture clear without a finance team.

                ## Milestones
                1. One fixed hour in the week blocked for bills.
                2. All bills from the week entered in the accounting software, using photos or the inbox.
                3. Bills due before next week paid in one batch.
                4. A two-line note of cash paid and still owed kept each week for a month.

                ## Notes
                If the business has a bookkeeper, ask them to enter bills before your hour so the time is spent approving and paying.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For four consecutive weeks, all bills received were entered and those due were paid in the owner's weekly hour."
                cadence: rolling
              tasks:
                - "Block one fixed hour a week in the calendar for supplier bills"
                - "Enter the week's bills and pay those due in one batch @recurring(weekly:fri)"
                - "Note what was paid and what is still owed after each session"
                - "Ask the bookkeeper to enter bills before your weekly hour"
            - name: Handing payables from the owner to a first clerk
              description: |-
                ## Purpose
                Handing payables to a first employee or part-time clerk frees hours each week, but only if the owner hands over the process and keeps the right controls. Planning the first ninety days, with written steps, the owner still approving and releasing payments, and a monthly review, makes the handover safe.

                ## Milestones
                1. The payables tasks to hand over listed, and the ones the owner keeps named.
                2. Written steps and the supplier list ready before the clerk's first day.
                3. The owner approving and releasing every payment the clerk prepares.
                4. A ninety-day review agreeing what the clerk can do alone.

                ## Notes
                Keep payment release with the owner, or a second person, even after the clerk is trusted. It protects both of you.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A first payables clerk is processing bills from written steps, the owner releases every payment, and a ninety-day review is recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List the payables tasks to hand over and those the owner keeps"
                - "Write step-by-step notes for invoice processing and run preparation"
                - "Review the clerk's first four payment runs before release"
                - "Hold a ninety-day review and agree what the clerk does alone"
            - name: Splitting payables duties across a small team
              description: |-
                ## Purpose
                Once three or four people work in finance, payables duties often land with whoever is free, and the same person ends up setting up a supplier, entering its bill and paying it. Dividing duties deliberately, so supplier set-up, invoice entry and payment release sit with different people, spreads the work and the risk.

                ## Milestones
                1. A list of payables duties with who does each today.
                2. Conflicting combinations identified, such as supplier set-up with payment release.
                3. A new split agreed so no one person can set up, enter and pay a supplier.
                4. System permissions changed to match the new split.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written duty split shows no person can set up, enter and pay a supplier alone, and system permissions match it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every payables duty and who does it today"
                - "Mark combinations that let one person set up and pay a supplier"
                - "Agree a new split of duties with the team"
                - "Change system permissions to match the new split"
            - name: Payables for several companies from one team
              description: |-
                ## Purpose
                Groups with several companies often pay all suppliers from one team, and bills end up booked to the wrong entity, paid from the wrong bank account or charged tax in the wrong country. Clear entity rules at capture, separate runs per entity and a monthly check for misposted bills keep each company's books its own.

                ## Milestones
                1. Each supplier mapped to the entity or entities it bills.
                2. A rule for reading the right entity from each bill, by legal name and tax number on the invoice.
                3. Separate payment runs per entity from that entity's own bank account.
                4. A monthly check for bills booked to the wrong entity, with corrections made.

                ## Notes
                Where one company pays a bill for another, record it as an intercompany charge agreed with the group accountant rather than quietly paying across entities.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Every supplier is mapped to its billed entity, runs are separate per entity, and a monthly misposting check is recorded for a quarter."
                cadence: rolling
              tasks:
                - "Map each supplier to the entity or entities it bills"
                - "Write the rule for reading the billed entity from an invoice"
                - "Set up separate payment runs from each entity's bank account"
                - "Check for bills booked to the wrong entity @recurring(monthly:16)"
            - name: Paying suppliers in a cash-tight month
              description: |-
                ## Purpose
                Cash shortfalls happen to sound businesses, and the damage comes from paying suppliers at random and going quiet on the rest. Ranking bills by consequence, agreeing the order with whoever controls cash, and calling affected suppliers before the due date keeps supply running and trust intact.

                ## Milestones
                1. Bills due in the next four weeks ranked by consequence of late payment.
                2. Legal and tax payments, wages-related bills and critical suppliers identified first.
                3. A payment order approved by the owner or finance lead.
                4. Affected suppliers called before their due date with a realistic payment date.

                ## Notes
                If the shortfall looks more than temporary, speak to your accountant early about options. This project is about honest communication and order, not about avoiding obligations.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "An approved, ranked payment order for the next four weeks exists and every supplier being paid late was contacted before their due date."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List bills due in the next four weeks with the consequence of paying late"
                - "Rank the bills and get the payment order approved"
                - "Call each affected supplier before the due date with a realistic date"
                - "Record each promised date and keep to it in the payment run"
            - name: Taking over a neglected payables ledger
              description: |-
                ## Purpose
                Taking over payables after a leaver, an acquisition or months of neglect usually means unknown balances, unmatched payments and suppliers with several accounts. A structured remediation, starting from supplier statements rather than the ledger, rebuilds a balance you can defend before you change how anything works.

                ## Milestones
                1. Statements requested from every supplier with a balance or recent activity.
                2. Each supplier account reconciled to its statement, oldest differences first.
                3. Unmatched payments and old credits investigated and cleared or written up.
                4. A signed list of remaining issues and an agreed date for resolving them.

                ## Notes
                Start from the **Remediation plan** template so each issue has an owner and a date.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every supplier account with a balance is reconciled to a statement, and remaining issues are listed with owners and dates."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Request statements from every supplier with a balance or recent activity"
                - "Reconcile each supplier account to its statement, oldest first"
                - "Investigate unmatched payments and old supplier credits"
                - "List remaining issues with owners and resolution dates"
            - name: Duplicate payment look-back audit
              description: |-
                ## Purpose
                Recovery specialists regularly find that a small percentage of supplier payments over several years were duplicates or overpayments, caused by re-sent bills, duplicate suppliers or typos in invoice numbers. Running your own look-back each year, with simple tests on payment data, finds that money and shows which control let it through.

                ## Milestones
                1. Two years of supplier payment data exported with supplier, invoice number, date and amount.
                2. Tests run for same amount and supplier within a short window, near-identical invoice numbers and the same bill to two supplier records.
                3. Each likely duplicate checked against the bills and supplier statements.
                4. Confirmed duplicates recovered as refunds or credits, and the control gap fixed.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A yearly look-back report lists tested payments, confirmed duplicates, amounts recovered and the control change made for each cause."
                cadence: cyclic
                effort_hours_estimate: "12"
              tasks:
                - "Export two years of supplier payments with invoice numbers and amounts"
                - "Test for repeat amounts, near-identical invoice numbers and split supplier records"
                - "Check each likely duplicate against bills and supplier statements"
                - "Run the duplicate payment look-back and record recoveries @recurring(yearly)"
            - name: Payables performance metrics pack
              description: |-
                ## Purpose
                Cost per invoice, share of bills processed without manual touch, on-time payment rate and days payable outstanding tell a finance leader whether payables is getting better or just busier. A one-page monthly pack with five measures and a short comment makes the case for automation, headcount or process change with evidence.

                ## Milestones
                1. Five measures chosen with written definitions and data sources.
                2. A baseline for each calculated from the last three months.
                3. A one-page pack produced monthly with a short commentary.
                4. Targets for two measures agreed with the finance leader.

                ## Notes
                Start from the **Metrics log** template to hold the monthly values. Days payable outstanding is also used for working capital work; keep one shared definition.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A monthly one-page payables pack with five defined measures, baselines and two agreed targets has been issued for three months."
                cadence: rolling
              tasks:
                - "Choose five payables measures and write each definition"
                - "Calculate a three-month baseline for each measure"
                - "Produce the one-page payables metrics pack @recurring(monthly:10)"
                - "Agree targets for two measures with the finance leader"
            - name: Supplier self-service portal launch
              description: |-
                ## Purpose
                Busy enterprise payables teams spend much of their week answering where-is-my-payment questions that suppliers could answer themselves. A supplier portal showing invoice status, payments and remittances, launched to the highest-query suppliers first, cuts that workload and gives suppliers a faster answer.

                ## Milestones
                1. Portal options in the current payables or procurement software reviewed.
                2. Twenty suppliers with the most queries chosen for the first wave.
                3. The portal live for those suppliers, with log-in instructions sent.
                4. Query volume from the first wave compared before and after three months.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A supplier portal is live for at least twenty high-query suppliers, and their query volume after three months is compared with before."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Review portal features in your current payables or procurement software"
                - "Pick the twenty suppliers with the most payment queries"
                - "Launch the portal to them with clear log-in instructions"
                - "Compare their query volume three months later"
            - name: Consolidated and self-billed invoicing for high-volume suppliers
              description: |-
                ## Purpose
                High-volume suppliers sending hundreds of small bills a month create work out of all proportion to their value. Moving them to one consolidated monthly invoice, or, where the law and both parties allow, to self-billing from receipts, removes most of that processing while keeping the audit trail intact.

                ## Milestones
                1. Suppliers sending more than fifty bills a month identified.
                2. Consolidated invoicing agreed with the most suitable suppliers.
                3. Self-billing considered only where your tax authority's rules permit it and an agreement is signed.
                4. Monthly bill count from these suppliers compared before and after.

                ## Notes
                Self-billing usually needs a written agreement with the supplier and may need tax authority conditions to be met. Check with your accountant before starting.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "At least two high-volume suppliers bill on consolidated or self-billed terms, with agreements on file and the monthly bill count reduced."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Find suppliers who send more than fifty bills a month"
                - "Propose consolidated monthly invoicing to the most suitable ones"
                - "Check self-billing rules with your accountant before offering it"
                - "Compare the monthly bill count from these suppliers before and after"
---

# Accounts Payable Operations

This area is for anyone who receives, approves and pays supplier bills, from an owner paying twenty suppliers a month to an enterprise payables team handling thousands of invoices. It starts with the foundations (how bills arrive, one invoice inbox, a clean supplier file, approval routes and a fixed payment run day), then the weekly and monthly machinery that keeps payables accurate, the matching, tax and currency skills that cause most errors, improvements such as purchase order rules, capture tools and dual authorisation, dated moments like the year-end cut-off, situations for owners, small teams and shared service centres, and finally the specialist work of duplicate recovery, metrics and supplier portals.

What repeats is a twice-weekly invoice processing session, a weekly payment run and approval chase, monthly statement reconciliations, aged payables, accruals, control account and debit balance checks, quarterly direct debit and purchase order reviews, and yearly supplier file, policy and cut-off work. The Vendor, Operational checklist, Month-end close, Purchase decision, Metrics log and Remediation plan templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
