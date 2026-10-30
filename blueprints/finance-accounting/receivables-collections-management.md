---
id: finance-accounting.receivables-collections-management
name: Receivables & Collections Management
description: "A clean aged debtor list, a written chasing timetable, weekly collection sessions, payment plans that hold and a clear route to escalation, so customers pay closer to terms and debtor days come down."
category: business
version: 1.0.0
tags: [finance-accounting, receivables-collections-management, small-business, freelancer, team, credit-control, dunning, debtor-days, late-payment]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - purchase-decision
    - vendor
    - remediation-plan
    - operational-checklist
  pillars:
    - name: Finance & Accounting
      emoji: "🧾"
      description: "The money side of a business: bookkeeping and the monthly close, cash flow, budgeting and forecasting, billing and collections, payroll, tax, audit and financial controls."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Receivables & Collections Management
          description: "Chasing overdue customer invoices, running dunning sequences, agreeing payment plans and keeping debtor days low for small businesses and finance teams."
          projects:
            - name: Aged debtors baseline and clean-up
              description: |-
                ## Purpose
                Before chasing anything, you need a list you believe. Most aged debtor reports carry invoices already paid but never allocated, credit notes floating on their own and balances for customers who closed years ago, so the real overdue figure is hidden. Pulling the report, ticking off what is genuinely owed and correcting the rest gives you a starting position you can work from with confidence.

                ## Milestones
                1. An aged debtor report printed or exported as at a fixed date, split into current, 30, 60, 90 and over 90 days.
                2. Every balance over 60 days checked against the bank and the customer's remittances.
                3. Paid but unallocated invoices, duplicate entries and stray credits listed for correction.
                4. A corrected total overdue figure written down with the date it was taken.

                ## Notes
                Do not write anything off during the clean-up. Mark doubtful items and deal with them through the write-off rules project, so the baseline stays honest.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated aged debtor report exists in which every balance over 60 days has been checked and the corrected overdue total is recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Export the aged debtor report from your accounting software as at today"
                - "Check each balance over 60 days against bank receipts and remittances"
                - "List the unallocated payments, duplicates and stray credits you find"
                - "Ask your bookkeeper or accountant to post the corrections you listed"
                - "Write the corrected overdue total and today's date at the top of the report"
            - name: Debtor days and overdue ratio baseline
              description: |-
                ## Purpose
                Debtor days, the average number of days it takes customers to pay, is the single number that tells you whether collections are getting better or worse. Working it out once from the last three months of sales and today's debtor balance, alongside the share of the ledger that is overdue, gives every later improvement something to be measured against.

                ## Milestones
                1. Credit sales for the last three months and the closing debtor balance gathered.
                2. Debtor days calculated with the method written down so it can be repeated exactly.
                3. The percentage of the ledger that is past due, and over 60 days, calculated.
                4. Your normal payment terms written beside the result, showing the gap between terms and reality.

                ## Notes
                Use the same method every month. Switching between a three-month and a twelve-month calculation makes the trend meaningless.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Debtor days, the overdue percentage and the over-60-day percentage are recorded with a written method and compared with your standard terms."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pull credit sales for the last three months from your accounts"
                - "Calculate debtor days from the closing balance and those sales"
                - "Work out what share of the ledger is past due and over 60 days"
                - "Write the method and result on one page next to your payment terms"
            - name: Written collections policy and chasing timetable
              description: |-
                ## Purpose
                Without a written policy, chasing depends on mood and memory: some customers get three reminders a week, others none for months. A short policy that sets the reminder days, who calls when, when an account goes on stop and when a debt goes to an agency or court makes chasing consistent, defensible and easy to hand to someone else.

                ## Milestones
                1. A timetable of contact points written: before due, on due date, and at 7, 14, 30 and 45 days overdue.
                2. The point at which supply stops and who has authority to lift it agreed.
                3. Escalation steps to a final notice, an agency or a court claim set out with their triggers.
                4. The policy signed off by the owner or finance lead and saved where the team can find it.

                ## Notes
                Keep it to two pages. A policy nobody reads is worse than none, because people assume a rule exists that they have never seen.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed collections policy of no more than two pages sets out the chasing timetable, stop rules and escalation triggers."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down how chasing actually happens today, step by step"
                - "Draft the contact timetable from before due date to 45 days overdue"
                - "Set the trigger points for account stop, final notice and escalation"
                - "Get the owner or finance lead to approve and sign the policy"
                - "Reread the policy against last year's bad debts and update it @recurring(yearly)"
            - name: Payment contacts for every customer account
              description: |-
                ## Purpose
                Chasing the person who ordered the work rarely gets an invoice paid; the money is released by someone in the customer's accounts payable team you may never have spoken to. Recording a named payment contact, their email, phone and the customer's payment run days for every active account removes the commonest cause of slow first chases.

                ## Milestones
                1. Every active customer listed with the person who orders and the person who pays.
                2. A named payables contact, email and direct number recorded for each customer.
                3. Payment run days and any invoice submission rules noted for the larger customers.
                4. Missing contacts requested from the customer, with gaps under five accounts.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All active customers have a named payment contact recorded, and no more than five accounts are missing one."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every customer billed in the last six months"
                - "Add the ordering contact and the payables contact for each one"
                - "Email customers with missing details asking who processes supplier invoices"
                - "Note each large customer's payment run days and submission rules"
                - "Confirm the payment contacts for your twenty largest customers are current @recurring(quarterly)"
            - name: Collections log for every chase, promise and dispute
              description: |-
                ## Purpose
                Records settle arguments: a customer who says no reminder ever arrived, or a colleague taking over a difficult account, both need one. A simple log with date, customer, invoice, contact method, who you spoke to and what was agreed turns chasing from a memory exercise into evidence, and it is what an agency or court will ask for later.

                ## Milestones
                1. A log set up with columns for date, customer, invoice, method, contact, outcome and next action.
                2. The log stored where everyone who chases can add to it, either in the accounting software notes or a shared sheet.
                3. Every chase for the past month entered from email and call history.
                4. A rule agreed that no chase is complete until it is logged.

                ## Notes
                If your accounting or invoicing software has a notes field on each customer, use it rather than a separate sheet, so the record stays with the account.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A shared collections log holds every chase from the past month, and each entry has a next action and date."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Decide whether the log lives in your accounting software or a shared sheet"
                - "Set up the columns for date, invoice, contact, outcome and next action"
                - "Enter last month's chasing from your sent mail and call history"
                - "Tell everyone who chases that an unlogged call does not count"
            - name: Triage of every invoice over 60 days overdue
              description: |-
                ## Purpose
                Invoices over 60 days late are the ones most likely never to be paid, and they usually sit for a mix of reasons: a dispute nobody answered, a missing purchase order, a customer in trouble, or simply no chasing. Sorting each one into a clear category with an owner and next step stops the oldest debts from drifting into write-offs by default.

                ## Milestones
                1. Every invoice over 60 days listed with customer, amount and age.
                2. Each one given a reason: disputed, paperwork missing, cash difficulty, unresponsive or simply not chased.
                3. A named owner and next action with a date set for every invoice.
                4. Invoices that look unrecoverable flagged for the write-off and escalation decisions.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every invoice over 60 days overdue has a recorded reason, owner and dated next action."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Filter the aged debtor report to invoices over 60 days"
                - "Give each invoice a reason category from your chase history"
                - "Assign an owner and a next action date for each invoice"
                - "Phone the three largest unresponsive debtors this week"
            - name: Unallocated receipts and unapplied credits clear-out
              description: |-
                ## Purpose
                Payments sitting unallocated on account, and credit notes never matched to the invoice they correct, make customers look further behind than they are and lead to embarrassing chases for money already paid. Clearing them out once, and finding out why they happened, protects both the relationship and the accuracy of every later report.

                ## Milestones
                1. All unallocated receipts and unapplied credits listed with dates and amounts.
                2. Each one matched to its invoice using remittances, references and the customer's own statement.
                3. Items that cannot be matched queried with the customer in writing.
                4. The cause of the most common mismatch written down, such as missing references or part payments.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Unallocated receipts and unapplied credits older than 30 days are reduced to zero or each has an open written query."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Run the report of unallocated payments and unapplied credit notes"
                - "Match each item using remittance advices and payment references"
                - "Email the customer a query for anything you cannot match"
                - "Note the most frequent cause of mismatched receipts"
            - name: Late payment interest and fee rights check
              description: |-
                ## Purpose
                Many countries give businesses a legal right to charge interest or a fixed recovery fee on late commercial payments, and your own terms may add or limit that right. Finding out exactly what applies to you, in plain words, means you can decide whether to use it later instead of guessing or threatening something you cannot enforce.

                ## Milestones
                1. The late payment rules for business customers in your country found from an official source.
                2. Your own terms and conditions checked for any interest or fee clause.
                3. A plain-language note of what you may charge, from when, and on what.
                4. Any uncertainty checked with your accountant or a solicitor.

                ## Notes
                This is a fact-finding project, not legal advice. In the UK, for example, there is specific legislation on late commercial payments; other countries handle it through contract terms or civil codes.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page note records what late payment interest or fees you are entitled to charge and where that right comes from, checked by an adviser."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Search your government's business guidance for late payment rules"
                - "Read your terms and conditions for any interest or fee clause"
                - "Write a plain note of what you may charge and when"
                - "Send the note to your accountant or solicitor to confirm"
            - name: Collections ownership and escalation rules
              description: |-
                ## Purpose
                Overdue invoices fall between people: the salesperson thinks finance chases, finance thinks the account manager has a relationship to protect, and the owner steps in only when it is already a crisis. Writing down who owns each stage of chasing, and when an account moves up to the owner or finance lead, ends the gap.

                ## Milestones
                1. Each stage of the chasing timetable assigned to a named role.
                2. Escalation thresholds by amount and age written down, such as over a set value or 45 days.
                3. The person with authority to agree payment plans, stop accounts and approve write-offs named.
                4. The rules shared with sales, finance and the owner.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written table names the owner of each chasing stage and the escalation thresholds, and has been shared with everyone involved."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every person who currently talks to customers about money"
                - "Assign an owner role to each stage of the chasing timetable"
                - "Set escalation thresholds by amount and days overdue"
                - "Share the table with sales, finance and the owner"
            - name: Dunning sequence from friendly reminder to final notice
              description: |-
                ## Purpose
                Customers respond to a predictable sequence far better than to sporadic chasing: a courtesy note before the due date, a reminder on the day, firmer messages at set intervals and a clear final notice. Building the sequence once, with the wording ready and sent automatically or from a checklist, means no invoice is forgotten and every customer is treated the same way.

                ## Milestones
                1. Four to six message templates written, from a pre-due courtesy note to a final notice.
                2. Each message tied to a day relative to the due date.
                3. The sequence set up in your software or as a dated checklist.
                4. One month of reminders sent on time with none missed.

                ## Notes
                Keep the early messages warm and the later ones factual. A final notice should state the amount, the date it was due, what happens next and by when, and nothing you are not prepared to do.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every invoice issued in a full month receives the reminders the sequence specifies, on the days it specifies."
                cadence: rolling
              tasks:
                - "Write the pre-due courtesy note and the due-date reminder"
                - "Write the firmer reminders and the final notice wording"
                - "Set the sequence up in your invoicing software or a dated checklist"
                - "Check that this week's scheduled reminders went out correctly @recurring(weekly:mon)"
            - name: Weekly overdue chase session
              description: |-
                ## Purpose
                Collections done in spare moments never happen in a busy week. A fixed ninety-minute session each week, working down the overdue list from largest and oldest, with calls before emails and every outcome logged, is the routine that does most of the work of keeping debtor days low.

                ## Milestones
                1. A weekly session blocked in the calendar and protected from meetings.
                2. A running order fixed: largest and oldest first, then broken promises, then new overdues.
                3. Every contact in the session logged with an outcome and next date.
                4. Eight consecutive weekly sessions completed.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight weekly chase sessions held in a row, each with every contact logged and a next action set."
                cadence: rolling
              tasks:
                - "Block ninety minutes in the calendar each week for chasing"
                - "Sort the overdue list by value and age before the first session"
                - "Work the overdue list top down and log every call and email @recurring(weekly:tue)"
            - name: Promise-to-pay register and follow-up
              description: |-
                ## Purpose
                Promises to pay on Friday are is worth something only if someone checks on Monday whether it arrived. Recording every promise with the date and amount, and following up the next working day when it is broken, shows customers you are paying attention and quickly separates the reliable from those using promises to buy time.

                ## Milestones
                1. A register of promises with customer, invoice, amount, promised date and who made the promise.
                2. Each broken promise followed up within one working day.
                3. A count of kept and broken promises by customer after two months.
                4. Customers with two broken promises moved to the next escalation step.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every promise to pay for two months is recorded, and each broken one was followed up within one working day."
                cadence: rolling
              tasks:
                - "Add a promise date and amount column to your collections log"
                - "Check due promises against the bank and chase any that are missing @recurring(weekly:thu)"
                - "Count kept and broken promises for each customer after two months"
                - "Escalate customers who have broken two promises in a row"
            - name: Receipt matching and allocation routine
              description: |-
                ## Purpose
                Customers who have paid should drop off the chase list straight away, and that only happens when receipts are matched to invoices quickly. Allocating payments twice a week, using remittance advices and payment references, keeps the aged debtor list current and stops reminders going to people who have already paid.

                ## Milestones
                1. A twice-weekly slot for matching receipts to invoices.
                2. Remittance advices routed to one inbox or folder.
                3. Part payments and overpayments recorded with a note to the customer.
                4. Unallocated receipts kept under one week old for two months.

                ## Notes
                Ask customers who pay several invoices at once to send a remittance advice. A polite request on the statement or reminder usually does it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For two months no receipt stays unallocated for more than one week."
                cadence: rolling
              tasks:
                - "Set up one inbox or folder for customer remittance advices"
                - "Match new receipts to invoices and allocate them @recurring(weekly:mon,thu)"
                - "Email customers about any part payment or overpayment you receive"
            - name: Monthly aged debtors review
              description: |-
                ## Purpose
                Weekly sessions handle individual invoices; a monthly review looks at the whole book. Comparing this month's aged debtor report with last month's shows which customers are slipping, which buckets are growing and whether old debts are being cleared or just getting older.

                ## Milestones
                1. The aged debtor report saved at each month end.
                2. Month-on-month movement in each ageing bucket noted.
                3. Customers who moved into a later bucket listed with a reason.
                4. Three actions for the coming month written down and assigned.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly reviews recorded, each comparing ageing buckets with the prior month and setting three actions."
                cadence: rolling
              tasks:
                - "Save last month's closing aged debtor report as the comparison"
                - "Compare the aged debtor buckets with last month and note the movers @recurring(monthly:4)"
                - "Write three actions for the month and give each an owner"
            - name: Monthly collections metrics log
              description: |-
                ## Purpose
                Debtor days on its own can hide trouble, because a large sale late in the month makes it jump around. Logging a small set of measures monthly, debtor days, overdue percentage, over-90 balance, cash collected against target and broken promises, shows the real trend and makes it easy to report to an owner or lender.

                ## Milestones
                1. Five measures chosen, each with its calculation written down.
                2. A log set up with twelve months of columns.
                3. Each month's figures entered within the first week of the next month.
                4. A one-line comment on the trend written each month.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six months of collections measures are logged, each entered within seven days of month end with a trend comment."
                cadence: rolling
              tasks:
                - "Create a collections log from the metrics log template"
                - "Write down how each of the five measures is calculated"
                - "Enter last month's collections measures and a trend comment @recurring(monthly:7)"
            - name: Disputed invoice resolution routine
              description: |-
                ## Purpose
                A disputed invoice is not chased, so it ages quietly until it becomes a write-off. Logging each dispute the day it is raised, getting the facts from whoever did the work, and replying with a decision within a set number of days turns disputes into cash or a clean credit note instead of a stalemate.

                ## Milestones
                1. A dispute list with date raised, reason, amount, owner and target reply date.
                2. A standard reply time agreed, such as five working days.
                3. Every open dispute reviewed weekly until closed.
                4. Disputes closed in the month counted, with the undisputed balance chased separately.

                ## Notes
                Chase the undisputed part of a part-disputed invoice. Customers sometimes hold a whole invoice over a small query.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every dispute raised over two months was logged on the day and answered within the agreed reply time."
                cadence: rolling
              tasks:
                - "Create a dispute list with reason, amount, owner and reply date"
                - "Agree a standard reply time for disputes with the team"
                - "Review every open dispute and push each one to a decision @recurring(weekly:wed)"
                - "Ask for payment of the undisputed amount on any part-disputed invoice"
            - name: Account stop and release procedure
              description: |-
                ## Purpose
                Continuing to supply a customer who is far behind turns a small overdue into a large bad debt. A clear procedure, saying when an account goes on stop, who is told, how sales and operations know not to ship and exactly what releases the stop, gives you the strongest lever you have without arguments every time.

                ## Milestones
                1. The stop trigger agreed, by days overdue or amount, in line with the collections policy.
                2. A flag set in the accounting or ordering system that blocks new orders on stopped accounts.
                3. A standard message telling the customer the account is on stop and how to release it.
                4. Release rules written: what payment lifts the stop and who approves it.

                ## Notes
                Start from the **Operational checklist** template. Tell sales before you stop a key account, not after.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every account past the stop trigger is flagged in the system, and each release in the last three months was approved under the written rule."
                cadence: rolling
              tasks:
                - "Agree the days overdue or amount that puts an account on stop"
                - "Set up the account stop flag in your accounting or ordering system"
                - "Write the customer message explaining the stop and how to lift it"
                - "Review stopped accounts and release any that meet the rule @recurring(weekly:fri)"
            - name: Doubtful debt provision review
              description: |-
                ## Purpose
                If some debts will probably never be paid, your accounts should say so before the year end forces the question. Reviewing old and troubled balances each quarter, and agreeing a provision with your accountant, keeps profit honest and stops a lump of write-offs landing in one month.

                ## Milestones
                1. A quarterly list of balances over 90 days and any customer known to be in difficulty.
                2. Each balance judged as likely, uncertain or unlikely to be paid, with a reason.
                3. A provision figure agreed with your accountant using a consistent method.
                4. The provision posted and the working kept with the quarter's records.

                ## Notes
                How provisions are calculated and treated for tax varies by country and accounting framework. Agree the method with your accountant and keep using it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A doubtful debt provision is reviewed every quarter, with a written assessment of each balance over 90 days and the agreed figure posted."
                cadence: cyclic
              tasks:
                - "Ask your accountant which provision method suits your accounts"
                - "List balances over 90 days and customers known to be struggling @recurring(quarterly)"
                - "Judge each balance as likely, uncertain or unlikely to be paid"
                - "Send the proposed provision and working to your accountant for agreement"
            - name: Top ten debtors monthly review
              description: |-
                ## Purpose
                In most businesses a handful of customers make up most of the money owed, and a problem at one of them matters more than twenty small late payers. A monthly look at your ten largest balances, how their payment timing is changing and any news about them, catches trouble early enough to act.

                ## Milestones
                1. The ten largest balances listed each month with their share of the total ledger.
                2. Each customer's average days to pay tracked across months.
                3. Any warning sign noted: slower payment, new excuses, staff changes or press reports.
                4. An action agreed for any customer whose payment is slowing.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly reviews of the ten largest debtors, each recording days to pay and any warning sign with an action."
                cadence: rolling
              tasks:
                - "List your ten largest customer balances and their share of the ledger"
                - "Review the ten largest debtors for slowing payment and warning signs @recurring(monthly:15)"
                - "Call the payables contact at any large customer whose payments are slowing"
            - name: Collections calls that stay polite and get dates
              description: |-
                ## Purpose
                Phone calls collect far more than emails, yet many owners and new credit controllers avoid calling because it feels confrontational. Learning a simple call structure, confirm the invoice, ask if anything stops payment, ask for a date and amount, confirm in writing, makes calls short, calm and productive.

                ## Milestones
                1. A one-page call structure written with opening, question, request and close.
                2. Three practice calls role-played with a colleague or friend.
                3. Ten real collection calls made using the structure.
                4. A written confirmation sent after each call that produced a promise.

                ## Notes
                Ask for a specific date and amount, not whether they can pay soon. Then stop talking and let them answer.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten collection calls made using a written call structure, with a confirmation email sent after every promise."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write a one-page call structure with your opening and the date request"
                - "Role-play three calls, including an awkward customer, with a colleague"
                - "Make ten real calls using the structure and note what worked"
                - "Send a written confirmation after each call that ended in a promise"
            - name: Writing chase emails that get answered
              description: |-
                ## Purpose
                Vague chase emails such as just checking in get ignored, while a short message with the invoice number, amount, due date, a direct question and the invoice attached gets paid. Learning to write chasers that a busy payables clerk can act on in thirty seconds raises the hit rate of every reminder.

                ## Milestones
                1. Five past chase emails reviewed against a checklist of what a clerk needs.
                2. Subject lines rewritten to show customer, invoice number and amount.
                3. Each email ending in one clear question or request.
                4. Response rates compared for a month before and after the rewrite.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Chase email templates are rewritten to a written checklist, and response rates for a month before and after are compared."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pull five chase emails you sent recently that got no reply"
                - "Rewrite each with invoice number, amount, due date and one question"
                - "Ask the agent to draft three firmer versions of your best chaser"
                - "Count replies in the month after switching to the new wording"
            - name: Answering the common reasons for not paying
              description: |-
                ## Purpose
                Most late payers use the same handful of explanations: we never got it, it is in the next run, the approver is away, we are waiting on our customer, there is a problem with the work. Preparing a calm, specific answer to each, with the next step it leads to, stops an excuse ending the conversation.

                ## Milestones
                1. The ten excuses you hear most often listed from your collections log.
                2. A response written for each that leads to a date, a document or an escalation.
                3. The responses tested on real calls for a month.
                4. The list updated with what actually worked.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written response sheet covers your ten most common payment excuses and has been used and revised after a month of calls."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List the ten excuses that appear most often in your collections log"
                - "Write a response for each that ends in a date or a next step"
                - "Use the sheet on every collection call for a month"
                - "Revise the responses based on which ones produced payment"
            - name: Negotiating a payment plan that holds
              description: |-
                ## Purpose
                A customer who genuinely cannot pay in full is better on a realistic plan than on a promise they will break. Learning to ask what they can afford, set instalments they can meet, agree what happens if one is missed and put it in writing turns a stuck debt into a schedule of receipts.

                ## Milestones
                1. The questions to ask before agreeing a plan written down: income timing, other creditors, a first payment now.
                2. Your limits set: maximum length, minimum instalment and who can approve.
                3. A standard written plan with dates, amounts and the default consequence.
                4. One plan negotiated and confirmed in writing using the approach.

                ## Notes
                Ask for a first payment at the time of agreement. It is the best sign the plan will hold.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written limits and a standard plan letter exist, and at least one payment plan has been negotiated and confirmed using them."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the questions you will ask before agreeing any payment plan"
                - "Set the maximum length and minimum instalment you will accept"
                - "Draft a standard plan letter with dates, amounts and default terms"
                - "Use the approach on the next customer who asks for more time"
            - name: How large customers' payables teams work
              description: |-
                ## Purpose
                Big customers pay through a process: invoices are scanned, matched to a purchase order and goods receipt, approved by a budget holder and released in a fixed payment run. Understanding that process explains most corporate late payment, and knowing which step your invoice is stuck at lets you chase the right person with the right fix.

                ## Milestones
                1. The typical steps in a corporate payables process written in your own words.
                2. For two large customers, their actual steps, run days and approval rules confirmed.
                3. The commonest blockers listed: missing purchase order, no goods receipt, wrong entity name.
                4. Your chasing questions rewritten to ask which step an invoice has reached.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The payables steps for two large customers are documented and your chase questions now ask which step an invoice is at."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read a short guide to how corporate accounts payable teams process invoices"
                - "Ask two large customers to describe their invoice approval steps"
                - "List the blockers that have held up your invoices before"
                - "Add a which-step-is-it-at question to your chase script"
            - name: Reading payment patterns in the sales ledger
              description: |-
                ## Purpose
                Customers usually signal trouble months before they stop paying: payments drift from 30 to 45 to 60 days, part payments appear, round sums replace exact amounts. Learning to read these patterns from the ledger lets you tighten terms or ask questions while there is still money to collect.

                ## Milestones
                1. Average days to pay calculated per customer for the last twelve months.
                2. Customers whose payment time has lengthened by more than ten days flagged.
                3. Warning patterns listed: part payments, round sums, new excuses, changes of contact.
                4. A short watch list kept and reviewed with the top debtors.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Average days to pay is calculated per customer and a watch list of customers whose payment has slowed by ten days or more exists."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Export twelve months of customer receipts with invoice and payment dates"
                - "Calculate average days to pay for each customer"
                - "Flag customers whose payment time has lengthened by ten days or more"
                - "Start a watch list with each flagged customer and the pattern you saw"
            - name: Collections metrics beyond debtor days
              description: |-
                ## Purpose
                Debtor days mixes sales growth with collection performance, so it can look worse in a good month. Learning a few complementary measures, such as the collection effectiveness index, best possible debtor days and average days delinquent, shows how much of the gap is down to chasing and how much to the terms you sell on.

                ## Milestones
                1. The collection effectiveness index, best possible debtor days and average days delinquent each explained in a sentence.
                2. Each measure calculated for the last three months from your own figures.
                3. A note on what the results say about terms versus chasing.
                4. One measure added to the monthly metrics log.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three additional collections measures are calculated for three months and at least one is added to the monthly metrics log."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Look up how the collection effectiveness index is calculated"
                - "Calculate best possible debtor days and average days delinquent"
                - "Write what the gap between them says about your chasing"
                - "Add the most useful measure to your monthly log"
            - name: What unpaid creditors need to know about insolvency
              description: |-
                ## Purpose
                Once a customer goes into administration, liquidation or bankruptcy, the rules change: chasing usually has to stop, deadlines appear for claims, and some rights, such as retention of title on goods, depend on what your terms said. Learning the basics before it happens means you act quickly and correctly when it does.

                ## Milestones
                1. The main insolvency processes in your country named and described in a line each.
                2. What an unsecured creditor can and cannot do in each written down.
                3. How a claim is submitted to an insolvency practitioner or trustee noted.
                4. Your terms checked for a retention of title clause, with your solicitor if unclear.

                ## Notes
                This is background knowledge, not legal advice. Your government's insolvency service usually publishes plain guidance for creditors.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note covers the insolvency processes in your country, creditor rights in each and how to submit a claim."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find your government's insolvency guidance for creditors"
                - "Write one line on each insolvency process and what it means for you"
                - "Note how creditors submit a claim and the evidence it needs"
                - "Check your terms for a retention of title clause"
            - name: Choosing an automated collections tool
              description: |-
                ## Purpose
                Once you have more than a few dozen open invoices, sending reminders by hand takes hours and misses some. Comparing the reminder features in your accounting software with dedicated credit control tools, on cost, integration and how they handle disputes and promises, shows whether automation is worth paying for.

                ## Milestones
                1. Your requirements written: volume, reminder rules, promise tracking, dispute flags and reporting.
                2. The built-in reminder features of your current software tested.
                3. Two or three dedicated tools shortlisted and trialled with real data.
                4. A decision recorded to stay, switch on built-in features or buy a tool.

                ## Notes
                Start from the **Purchase decision** template. Check how the tool stops reminders on disputed invoices; a tool that chases a disputed customer every three days does damage.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on collections automation compares at least two options against your requirements and records the choice."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write your requirements for an automated reminder tool"
                - "Test the reminder features already in your accounting software"
                - "Trial two dedicated credit control tools with a sample of real invoices"
                - "Record the decision and the reasons in the purchase decision template"
            - name: Payment plan agreements and monitoring
              description: |-
                ## Purpose
                Payment plans fail quietly: an instalment is missed, nobody notices for a month and the customer assumes the plan has lapsed. Keeping every plan on one register, checking each instalment as it falls due and acting on the first miss keeps plans worth agreeing.

                ## Milestones
                1. A register of every active payment plan with amounts, dates and the signed letter.
                2. Each instalment checked against the bank on its due date.
                3. A missed instalment followed up within two working days.
                4. Plans completed or escalated recorded at the end of each quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All payment plans sit on one register and every missed instalment in three months was followed up within two working days."
                cadence: rolling
              tasks:
                - "Put every active payment plan on one register with its letter"
                - "Check this month's instalments against the bank and chase any missed @recurring(monthly:20)"
                - "Escalate any plan with two missed instalments under the collections policy"
            - name: Moving chronic late payers to automatic collection
              description: |-
                ## Purpose
                Some customers are not refusing to pay; they just never get round to it. For regular customers who pay late every month, moving them to a direct debit, standing card authority or similar pull payment ends the monthly chase for both sides.

                ## Milestones
                1. Repeat customers who paid late in at least three of the last six months listed.
                2. The automatic collection options your bank or payment provider offers and their costs noted.
                3. A short offer written explaining the change and how the customer stays in control.
                4. At least a third of the listed customers moved to automatic collection.

                ## Notes
                Check the mandate rules for your country's scheme. Customers usually have to be told in advance of each collection amount and date.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "At least a third of repeat customers who paid late three times in six months now pay by automatic collection."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List repeat customers who paid late three or more times in six months"
                - "Compare the automatic collection options and fees your providers offer"
                - "Write a short offer explaining the switch to those customers"
                - "Send the offer and record each customer's answer"
            - name: Early settlement discount trial
              description: |-
                ## Purpose
                Offering a small discount for paying within a few days can bring cash in weeks earlier, but it costs margin and some customers take the discount and still pay late. Running a time-limited trial with a defined group and measuring the result tells you whether it pays for itself in your business.

                ## Milestones
                1. The discount, the qualifying payment window and the trial group defined.
                2. The annualised cost of the discount worked out and compared with your borrowing cost.
                3. The trial run for three months with uptake and days to pay recorded.
                4. A keep, change or stop decision written down with the numbers behind it.

                ## Notes
                Discounts can change how sales tax or VAT is calculated on the invoice in some countries. Check the wording with your accountant before you start.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A three-month discount trial is measured against a control group and a keep or stop decision is recorded with its cost."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Choose the discount rate, payment window and trial customers"
                - "Work out the annualised cost of the discount"
                - "Ask your accountant how the discount should be shown on invoices"
                - "Compare days to pay and uptake after three months and decide"
            - name: Decision on charging late payment interest
              description: |-
                ## Purpose
                Having a right to charge interest is different from deciding to use it. Some businesses apply it to every late invoice, some only as a lever at final notice, and some never, to protect relationships. Choosing your stance deliberately, and applying it consistently, avoids both empty threats and accidental unfairness between customers.

                ## Milestones
                1. Your legal and contractual right to charge interest or fees confirmed from the earlier rights check.
                2. Three options compared: always charge, charge at final notice, or waive by default.
                3. A decision recorded with who can waive a charge and when.
                4. Invoice and reminder wording updated to match the decision.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on late payment interest, including waiver authority, is reflected in your invoice and reminder wording."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Reread your late payment rights note"
                - "Compare always charging, charging at final notice and waiving by default"
                - "Record the decision and who may waive a charge"
                - "Update the reminder and final notice wording to match"
            - name: Choosing a debt collection agency
              description: |-
                ## Purpose
                After your own chasing has failed, a collection agency can recover debts you would otherwise write off, but fees, methods and tone vary a lot and an aggressive agency can damage your name. Choosing one before you need it, on fees, regulation, reporting and how they treat your customers, means you hand over debts quickly and safely.

                ## Milestones
                1. Requirements written: debt sizes, business or consumer debtors, countries and tone.
                2. Three agencies compared on fee basis, licensing, reporting and complaint handling.
                3. References checked with at least one current client of the preferred agency.
                4. Terms agreed and the handover process written down.

                ## Notes
                Start from the **Vendor** template. Check whether the agency must be licensed or registered in your country, especially if any of your customers are individuals.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An agency is chosen after comparing three on fees, licensing and reporting, with terms agreed and a handover process written."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write what you need from an agency, including debt sizes and tone"
                - "Request fee schedules and terms from three agencies"
                - "Check each agency's licensing or registration where required"
                - "Call a current client of your preferred agency for a reference"
            - name: Bad debt write-off rules and approvals
              description: |-
                ## Purpose
                Debts written off on a whim leave holes in the records and can hide errors or fraud, while debts never written off inflate the ledger for years. Clear rules on when a debt is written off, what evidence is kept and who approves it keep the sales ledger honest and give your accountant what they need for tax.

                ## Milestones
                1. Criteria written for write-off: age, failed escalation, insolvency or uneconomic to pursue.
                2. Approval limits set by amount, with the approver named.
                3. The evidence pack for each write-off defined: chase history, final notice, agency or court outcome.
                4. Any sales tax or VAT relief on bad debts checked with your accountant.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written write-off rules set criteria, approval limits and the evidence required, and the tax treatment has been confirmed with an accountant."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the criteria that make a debt eligible for write-off"
                - "Set approval limits by amount and name each approver"
                - "Define the evidence kept with every write-off"
                - "Ask your accountant about sales tax or VAT relief on bad debts"
            - name: Root cause review of late payments
              description: |-
                ## Purpose
                Chasing harder treats the symptom; most late payment has a cause you can remove, such as invoices sent to the wrong person, missing purchase orders, terms nobody agreed at the sale or disputes about work quality. Classifying the reasons behind your last fifty late invoices shows which fixes would bring in the most cash earliest.

                ## Milestones
                1. Fifty recent late invoices each tagged with a root cause.
                2. Causes ranked by number of invoices and value delayed.
                3. Fixes for the top three causes agreed with the people who own them.
                4. The late rate for the top cause measured again three months later.

                ## Notes
                Start from the **Remediation plan** template. Expect at least one cause to sit outside finance, in sales, delivery or the quote.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "Root causes of fifty late invoices are classified and ranked, with fixes for the top three in place and re-measured after three months."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Pick the fifty most recent invoices paid more than 14 days late"
                - "Tag each with its main reason from the collections log"
                - "Rank the causes by count and value delayed"
                - "Agree a fix for each of the top three causes with its owner"
                - "Measure the late rate for the top cause again after three months"
            - name: Recovering one large overdue invoice in 30 days
              description: |-
                ## Purpose
                One large unpaid invoice can matter more to cash than everything else on the ledger. Treating it as a short campaign with a fixed end date, confirming the facts, finding the decision maker, removing every obstacle and escalating on schedule, gives it the focus it needs before it becomes a dispute or a loss.

                ## Milestones
                1. The invoice, contract, delivery evidence and chase history gathered in one place.
                2. The real reason for non-payment identified, with the person who can release the money named.
                3. Each obstacle removed: missing documents resent, approvals chased, queries answered.
                4. Payment received, a plan agreed or the debt escalated by day 30.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Within 30 days the invoice is paid, covered by a signed payment plan or formally escalated, with every step logged."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Gather the contract, delivery proof, invoice and chase history in one folder"
                - "Call the customer and ask exactly what stops the invoice being paid"
                - "Find the person who can approve release and contact them directly"
                - "Send a final notice with a date if no payment or plan is agreed by day 21"
            - name: Quarter-end collections push
              description: |-
                ## Purpose
                Quarter ends matter: lenders and investors look at the balance sheet, bonuses may hang on cash targets and customers often have budget left to spend. A planned push in the last three weeks of the quarter, focused on the largest overdue and soon-due invoices, brings in cash that would otherwise land the week after.

                ## Milestones
                1. A target list of invoices to collect before quarter end, with values.
                2. Each target customer contacted three weeks out to confirm the payment run date.
                3. Approvals and paperwork issues cleared in the second week.
                4. Cash collected against the target recorded after quarter end.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "For each quarter, a target list and the cash collected against it are recorded."
                cadence: cyclic
              tasks:
                - "Build the quarter-end target list three weeks before the quarter closes @recurring(quarterly)"
                - "Confirm the payment run date with each target customer"
                - "Clear any paperwork or approval issues in the second week"
                - "Record cash collected against the target once the quarter closes"
            - name: Year-end debtor review before the accounts close
              description: |-
                ## Purpose
                The year-end debtor balance goes straight into the annual accounts, and your accountant or auditor will ask about anything old or doubtful. Reviewing the ledger a month before the year end, clearing small differences, agreeing write-offs and provisions and preparing explanations, avoids rushed decisions after the books have closed.

                ## Milestones
                1. The aged debtor report reviewed one month before the financial year end.
                2. Small differences and unallocated items cleared.
                3. Write-offs approved and the provision agreed with your accountant.
                4. A short note explaining every balance over 90 days ready for the accountant.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Before each financial year end, write-offs and provisions are agreed and a note explains every balance over 90 days."
                cadence: cyclic
              tasks:
                - "Review the aged debtor report one month before the year end @recurring(yearly)"
                - "Clear small differences and unallocated items on the ledger"
                - "Agree write-offs and the provision with your accountant"
                - "Write a short explanation for every balance over 90 days"
            - name: Customer balance confirmations for the auditors
              description: |-
                ## Purpose
                Auditors often test receivables by writing to a sample of customers and asking them to confirm what they owe. Preparing contact details, statements and reconciliations in advance, and chasing customers who do not reply, stops this from dragging out the audit or leading to extra testing.

                ## Milestones
                1. The auditor's sample and the confirmation format received.
                2. Correct payables contacts supplied for each customer in the sample.
                3. Differences between customer replies and your ledger reconciled and explained.
                4. Non-responding customers chased until the auditor's deadline.

                ## Notes
                The auditor normally sends the requests and receives the replies directly. Your role is to supply accurate contacts and explain differences, not to collect the replies yourself.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every customer in the auditor's sample has an accurate contact supplied and every reported difference is reconciled in writing."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the auditor for the confirmation sample and timetable"
                - "Supply the correct payables contact for each sampled customer"
                - "Reconcile each reply that disagrees with the ledger"
                - "Remind non-responding customers to reply to the auditor"
            - name: Responding to a customer's insolvency notice
              description: |-
                ## Purpose
                A letter saying a customer has entered administration, liquidation or bankruptcy starts a clock. Stopping supply, working out exactly what is owed, checking any retention of title over goods, and submitting a claim with evidence to the appointed practitioner protects whatever can still be recovered.

                ## Milestones
                1. Supply stopped and all open orders for the customer held.
                2. The full balance owed calculated, including any work done but not yet invoiced.
                3. Any goods covered by retention of title identified and raised with the practitioner, with your solicitor if needed.
                4. A claim submitted to the practitioner with invoices and statements attached.

                ## Notes
                Stop chasing the customer directly once a formal insolvency process starts. Speak to the appointed practitioner, and take legal advice before trying to recover goods.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Within the practitioner's deadline, supply is stopped, the full balance is calculated and a claim with evidence has been submitted."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Put the customer's account on stop and hold open orders"
                - "Calculate the full amount owed, including unbilled work"
                - "Check your terms for retention of title over unpaid goods"
                - "Submit the claim with invoices and statements to the practitioner"
            - name: Freelance late payment playbook
              description: |-
                ## Purpose
                Freelancers usually have a few clients, no finance department and a real fear that chasing will cost them the next job. A short personal playbook, terms agreed before starting, a reminder schedule, the exact words for each stage and the point where work pauses, lets you chase confidently while keeping the relationship.

                ## Milestones
                1. Your payment terms confirmed in writing with every current client.
                2. A three-step reminder schedule with saved wording for each step.
                3. A rule for when you pause further work on an unpaid account.
                4. Every overdue invoice chased under the playbook for two months.

                ## Notes
                Chase the accounts contact rather than your creative or project contact. They expect it and it keeps the working relationship clean.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For two months every overdue freelance invoice is chased on the written schedule, and work-pause rules are confirmed with clients."
                cadence: rolling
              tasks:
                - "Email each client confirming your payment terms and accounts contact"
                - "Save reminder wording for due date, 7 days and 21 days overdue"
                - "Decide the point at which you pause new work for a client"
                - "Check every unpaid invoice and send the reminders that are due @recurring(weekly:fri)"
            - name: Final demand to a client who has gone silent
              description: |-
                ## Purpose
                Silence from a client who used to answer means polite reminders have stopped working and you need a clear, formal step. A final demand letter sent by a traceable route, stating the debt, the deadline and what you will do next, often gets paid, and it is the evidence you need if you go further.

                ## Milestones
                1. All contact attempts listed with dates, showing the silence.
                2. The client's registered or legal address confirmed from an official register or the contract.
                3. A final demand letter sent by a traceable method with a clear deadline.
                4. The next step taken on the deadline: payment received, agency referral or court claim.

                ## Notes
                Some courts expect a formal letter before claim in a set format. Check your court's pre-action rules before writing the letter, so it does double duty.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A final demand is sent by a traceable route to a verified address, and the stated next step is taken on the deadline."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every attempt to contact the client with dates and methods"
                - "Confirm the client's legal address from the contract or a public register"
                - "Write and send the final demand by a traceable method"
                - "Take the stated next step on the deadline if nothing arrives"
            - name: Collections hour for a one-person business
              description: |-
                ## Purpose
                Sole traders and small owners do the selling, the work and the books, so chasing slides to the bottom of the list. One protected hour a week, with a fixed checklist, allocate payments, send due reminders, make two calls, update the log, keeps money coming in without needing a credit controller.

                ## Milestones
                1. A weekly hour fixed in the diary at a time you are rarely with customers.
                2. A one-page checklist for the hour written and pinned up.
                3. The hour kept for eight weeks out of ten.
                4. Debtor days compared before and after the eight weeks.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The weekly collections hour is kept in at least eight of ten weeks, and debtor days are compared before and after."
                cadence: rolling
              tasks:
                - "Choose a weekly hour when you are rarely with customers"
                - "Write a one-page checklist of what happens in the hour"
                - "Run the collections hour from the checklist @recurring(weekly:wed)"
                - "Compare debtor days before and after the first eight weeks"
            - name: Splitting the debtor book across a collections team
              description: |-
                ## Purpose
                With two or more people chasing, unclear ownership means some customers are called twice in a day and others not at all. Splitting the book by value, region or customer group, with each collector owning their accounts end to end, balanced for workload, gives customers one contact and gives each collector a clear target.

                ## Milestones
                1. The ledger split into portfolios by a clear rule, such as value band or customer group.
                2. Workload balanced across collectors by number of accounts and overdue value.
                3. Each collector given a monthly collection target for their portfolio.
                4. Cover arrangements agreed for absence and handovers.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every customer account is assigned to one collector, with portfolio targets set and reviewed each quarter."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Choose the rule for splitting accounts between collectors"
                - "Balance portfolios by number of accounts and overdue value"
                - "Set a monthly collection target for each portfolio"
                - "Rebalance portfolios as customers grow, shrink or leave @recurring(quarterly)"
            - name: Sales and finance agreement on chasing customers
              description: |-
                ## Purpose
                Salespeople worry that chasing will upset the customer; finance worries that sales will promise extra time without telling anyone. A short written agreement on who speaks to the customer about money, when sales is told before an escalation and how commission treats unpaid sales ends the tug of war.

                ## Milestones
                1. The points where sales is informed before chasing escalates agreed.
                2. A rule that only named people can agree extended terms or payment plans.
                3. A monthly overdue list shared with each account manager.
                4. Any link between commission and cash collected discussed and recorded.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written agreement between sales and finance covers escalation notice, who may extend terms and a monthly overdue list for account managers."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Meet the sales lead to list where chasing and selling have clashed"
                - "Agree when account managers are told before an escalation"
                - "Name the only people who may extend terms or agree plans"
                - "Send each account manager their customers' overdue invoices @recurring(monthly:10)"
            - name: Collections cover while you are away
              description: |-
                ## Purpose
                In a small business, two weeks of holiday or illness for the person who chases can add two weeks to debtor days, and customers notice when nobody follows up. A simple cover plan with a handover sheet, the open promises and disputes, and a scaled-down routine someone else can run keeps cash moving in your absence.

                ## Milestones
                1. A handover sheet listing open promises, disputes, payment plans and sensitive accounts.
                2. A named stand-in who knows the software and the chasing timetable.
                3. A scaled-down weekly routine the stand-in can run in an hour.
                4. One absence covered with no reminders missed.

                ## Notes
                Start from the **Operational checklist** template for the stand-in's weekly routine.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A handover sheet and stand-in routine exist, and one absence has been covered with every scheduled reminder sent."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Name a stand-in and agree how much time they can give"
                - "Write a handover sheet of open promises, disputes and plans"
                - "Show the stand-in the aged debtor report and the reminder sequence"
                - "Write a one-hour weekly routine the stand-in can follow"
            - name: Preparing a small claims court case
              description: |-
                ## Purpose
                For a business debt of modest size that the customer will not pay or dispute properly, the small claims process or its equivalent is often cheaper than an agency. Preparing the case properly, with a letter before claim, a clear timeline and the evidence bundle, raises the chance of judgment and often prompts payment before any hearing.

                ## Milestones
                1. The court's limits, fees and pre-action requirements checked from the official guidance.
                2. A letter before claim sent in the required form, with its deadline passed.
                3. An evidence bundle assembled: contract or order, delivery proof, invoices, chase log.
                4. The claim filed, or a decision recorded not to proceed, with reasons.

                ## Notes
                Court procedures, limits and fees differ by country and change over time. Use the court service's own guidance and consider a short consultation with a solicitor before filing.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A letter before claim has been sent and an evidence bundle prepared, and the claim is either filed or a reasoned decision not to proceed is recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read your court service's guidance on small business debt claims"
                - "Send a letter before claim in the form the court expects"
                - "Assemble the contract, delivery proof, invoices and chase log"
                - "File the claim or record why you decided not to"
            - name: Deductions and short payment recovery
              description: |-
                ## Purpose
                Retailers, distributors and large buyers often pay less than the invoice and deduct for shortages, damages, promotions or penalties, sometimes with little explanation. Logging every short payment, asking for proof and challenging invalid deductions within the customer's time limits recovers money that most suppliers quietly write off.

                ## Milestones
                1. Every short payment over the last six months listed with the deduction reason code.
                2. Deductions sorted into valid, invalid and unclear, with evidence for each.
                3. Invalid deductions disputed within each customer's claim window.
                4. Money recovered and causes fixed, such as delivery paperwork or promotion agreements.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every short payment in a quarter is logged with a reason, invalid ones are disputed within the customer's deadline and recoveries are recorded."
                cadence: rolling
              tasks:
                - "List short payments from the last six months with any reason codes"
                - "Find each large customer's deadline for disputing deductions"
                - "Review new deductions and dispute the invalid ones with evidence @recurring(monthly:25)"
                - "Share the commonest deduction causes with sales and dispatch"
            - name: Risk-based segmentation of the debtor book
              description: |-
                ## Purpose
                Treating every customer the same wastes effort on reliable payers and gives too little attention to the risky ones. Grouping customers by value and payment behaviour, and setting a different chasing intensity for each group, puts the calls where they move the most cash.

                ## Milestones
                1. Customers scored on balance size and twelve-month payment behaviour.
                2. Three or four segments defined, such as large and reliable, large and slow, small and slow.
                3. A chasing approach set for each segment: light touch, standard or early call.
                4. Results compared after one quarter by segment.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Each customer is assigned to a defined segment with its own chasing approach, and results by segment are reviewed after one quarter."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Score customers on balance size and twelve-month payment behaviour"
                - "Define three or four segments and assign each customer"
                - "Set the chasing intensity for each segment in the policy"
                - "Rescore every customer and move any who changed segment @recurring(yearly)"
            - name: Collecting overseas debts across borders
              description: |-
                ## Purpose
                Chasing a customer in another country brings time zones, language, currency and very different legal routes, and court action abroad is usually expensive. Knowing the realistic options before the debt is old, from local-language reminders to an international collection partner, gives you a plan for the exports you already make.

                ## Milestones
                1. Overseas customers listed by country with balances and ageing.
                2. Reminders and final notices prepared in each customer's working language where needed.
                3. An international collection partner or trade body contact identified for the main countries.
                4. A rule set for when an overseas debt is pursued abroad, insured or written off.

                ## Notes
                Trade credit insurers and chambers of commerce often have collection services for exporters. Ask before paying a general agency.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written plan covers chasing and escalation for each country where you have overseas debtors, with a named collection partner for the main ones."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List overseas customers by country with their balances"
                - "Prepare reminder wording in each customer's working language"
                - "Ask your chamber of commerce or credit insurer about international collection"
                - "Write the rule for pursuing, insuring or writing off overseas debts"
---

# Receivables & Collections Management

This area is for anyone who has to turn sent invoices into money in the bank, from a freelancer with three slow clients to a small business owner chasing forty accounts and a credit control team working a full sales ledger. It starts with the foundations (a clean aged debtor list, a debtor days baseline, a written chasing timetable and the right payment contact at every customer), moves through the weekly and monthly machinery of chasing, promises, disputes and allocation, then the calling, writing and negotiating skills that decide whether a customer pays, followed by decisions on tools, interest, agencies and write-offs, dated moments such as quarter ends and audits, situations for freelancers, sole operators and teams, and finally the specialist work of deductions, segmentation, court claims and overseas debts.

What repeats is a weekly chase session with promise, dispute and allocation checks around it, monthly aged debtor and metrics reviews, a monthly look at your largest accounts and payment plans, quarterly provision and portfolio reviews, and a yearly policy and year-end debtor review. The Metrics log, Purchase decision, Vendor, Remediation plan and Operational checklist templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
