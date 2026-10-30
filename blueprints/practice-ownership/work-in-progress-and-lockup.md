---
id: practice-ownership.work-in-progress-and-lockup
name: Work in Progress and Lockup
description: "A measured lockup baseline, agreed targets, payment terms that work, weekly credit control, monthly WIP reviews and the campaigns, policies and forecasts that turn unbilled time and old invoices into cash."
category: business
version: 1.0.0
tags: [practice-ownership, work-in-progress-and-lockup, small-business, lockup, debtor-days, wip, credit-control, cash-flow]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - remediation-plan
    - month-end-close
    - purchase-decision
    - vendor
    - operational-checklist
  pillars:
    - name: Professional Practice Ownership
      emoji: "🔑"
      description: "Owning and running a professional practice: medical and dental clinics, law and accounting firms, engineering consultancies, architecture studios, veterinary practices and pharmacies, from buying or starting one through partnership agreements, billing, compliance, hiring and growth to succession and sale."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Work in Progress and Lockup
          description: "Reducing the cash tied up in a practice: unbilled work in progress, debtor days, billing cycles, payment terms and chasing old invoices."
          projects:
            - name: Lockup baseline from the last twelve months
              description: |-
                ## Purpose
                Few owners can say how many days of fees are tied up in their practice, yet the figure often runs to 120 days or more once unbilled time and unpaid invoices are added together. Working out WIP days and debtor days for each of the last twelve month ends gives a starting number, shows whether it is drifting, and tells you which half of the problem is bigger.

                ## Milestones
                1. WIP and debtor balances collected for each of the last twelve month ends.
                2. Fee income for each month collected from the accounts so days can be calculated.
                3. WIP days, debtor days and total lockup worked out for every month end.
                4. A one-page summary showing the trend and whether WIP or debtors is the larger share.

                ## Notes
                If the practice system cannot report historical WIP, use the month-end figures your bookkeeper or accountant already holds. An imperfect twelve months beats a perfect single month.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page note gives WIP days, debtor days and total lockup for each of the last twelve month ends, with the trend described."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Export the month-end WIP and debtor totals for the last twelve months"
                - "Pull monthly fee income from the management accounts for the same months"
                - "Calculate WIP days, debtor days and total lockup for each month end"
                - "Write a one-page summary of the trend for the partners"
            - name: Agreed lockup formula and definitions
              description: |-
                ## Purpose
                Two partners can argue for an hour about lockup and discover they were measuring different things: one uses gross WIP at charge-out rates, the other WIP after expected write-offs, and neither agrees whether disbursements count. Writing down one formula, the averaging method and what is included means every later report is trusted and compared like with like.

                ## Milestones
                1. A choice made between the count-back method and the simple average method for debtor days.
                2. WIP valuation basis fixed, such as charge-out value less expected write-off.
                3. Rules written for disbursements, VAT or sales tax, money on account and unallocated cash.
                4. The definitions adopted by the partners and saved where every report can point to them.

                ## Notes
                Count-back gives a truer picture when fees are seasonal; the simple average is easier to explain. Pick one and keep it, because changing method halfway through a year makes the trend meaningless.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page definitions note, approved by the partners, states the lockup formula, the averaging method and every inclusion and exclusion."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List how each partner currently describes lockup and debtor days"
                - "Compare the count-back and simple average methods on last month's figures"
                - "Draft the inclusion rules for disbursements, tax, money on account and suspense cash"
                - "Put the definitions to the partners for approval and file the agreed version"
            - name: WIP and debtor ageing reports
              description: |-
                ## Purpose
                A single total hides the difference between a matter billed every month and one with two years of unbilled time behind it. Setting up two ageing reports, WIP by age of the oldest unbilled entry and debtors by invoice date, in bands of 0 to 30, 31 to 60, 61 to 90, 91 to 180 and over 180 days, shows where the money is stuck and who is responsible for it.

                ## Milestones
                1. A WIP ageing report by matter and responsible partner, in five age bands.
                2. A debtor ageing report by client and invoice, in the same bands.
                3. Both reports saved as scheduled exports or saved views in the practice system.
                4. A test run checked against the ledger totals so the reports reconcile.

                ## Notes
                Age WIP by the date the work was done, not the date it was posted. Late time entry otherwise makes old work look new.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "WIP and debtor ageing reports in five bands run from the practice system and reconcile to the ledger totals for the latest month end."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Check which ageing reports the practice system already offers"
                - "Set the five age bands on the WIP report by date the work was done"
                - "Build the debtor ageing report by client and invoice date"
                - "Reconcile both report totals to the month-end ledger"
            - name: Lockup targets by partner and work type
              description: |-
                ## Purpose
                Agreeing a firm-wide target of, say, 90 days is easy, and so is ignoring it, because conveyancing, audit, litigation and design work all build up cash at different speeds. Setting a target for each work type and each partner, based on the baseline and on what similar work achieves, gives every partner a number they can actually move.

                ## Milestones
                1. Current lockup calculated for each work type and each partner.
                2. A target for each, with a date for reaching it, agreed in a partners' meeting.
                3. A firm-wide target that adds up from the individual ones.
                4. Targets recorded in the monthly lockup report so progress is visible.

                ## Notes
                Set targets that are a stretch from the baseline, not a leap. Cutting 15 to 20 days in a year is a solid result for most practices.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every partner and work type has a written lockup target with a date, agreed at a minuted partners' meeting."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Split the latest lockup figure by work type and responsible partner"
                - "Propose a target and date for each work type"
                - "Agree the targets at the next partners' meeting"
                - "Add the targets to the lockup report layout"
            - name: Payment terms in engagement letters
              description: |-
                ## Purpose
                Invoices are paid on the terms the client signed, so vague wording such as payment on receipt or a missing interest clause makes every chase harder. Reviewing the standard engagement letter and terms of business to set a payment period, a billing frequency, interest on late payment where the law allows it and the right to pause work gives credit control something firm to point to.

                ## Milestones
                1. The current engagement letter and terms of business reviewed for payment wording.
                2. A standard payment period and billing frequency chosen for each work type.
                3. Clauses drafted for late payment interest, disputed items and pausing work, checked against your professional rules.
                4. The revised letter in use for every new engagement from a set date.

                ## Notes
                Ask your professional body or a lawyer to check any interest and suspension wording before using it. Some professions restrict what can be charged or withheld.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A revised engagement letter with a payment period, billing frequency and late payment clause is in use for all new engagements from a recorded date."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Highlight every payment-related clause in the current engagement letter"
                - "Choose a payment period and billing frequency for each work type"
                - "Ask the agent to draft late payment and pause-of-work clauses for review"
                - "Have the revised wording checked against your professional rules"
                - "Set the date from which every new engagement uses the new letter"
            - name: Credit control owner and escalation ladder
              description: |-
                ## Purpose
                When chasing is everyone's job it becomes nobody's, and partners often avoid the call because the client is also a friend. Naming one person who owns credit control and writing down what happens at 30, 45, 60 and 90 days, and when the partner must step in, takes the awkwardness out of each step.

                ## Milestones
                1. One named person responsible for chasing every overdue invoice, with a deputy.
                2. A written escalation ladder with the action at each age band.
                3. The point at which the responsible partner must call the client agreed.
                4. The ladder shared with every partner and fee earner.

                ## Notes
                In a small firm the credit controller may be the bookkeeper for two days a week. That works, provided the time is protected and partners do not override the ladder without saying so.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A named credit controller and a written escalation ladder covering 30, 45, 60 and 90 days are in place and shared with all partners."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Decide who owns credit control and who covers for them"
                - "Write the action for each age band from 30 to 90 days"
                - "Agree when the responsible partner must make the call"
                - "Send the ladder to every partner and fee earner"
            - name: Credit check before accepting a new client
              description: |-
                ## Purpose
                The cheapest bad debt is the one you never take on, and most practices check identity and conflicts but never ask whether a new client can pay. Adding a short credit step to client acceptance, with a credit reference for companies, a look at payment history for returning clients and a rule for when money on account is required, filters out the worst risks at the door.

                ## Milestones
                1. A short credit questionnaire added to the client acceptance form.
                2. A source chosen for company credit reports and a cost per check known.
                3. Thresholds written for when a partner must approve the client or ask for money on account.
                4. The step used on every new client from a set date.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The client acceptance form includes a credit step with written thresholds, and it has been used on at least five new clients."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Review the current client acceptance form for any payment questions"
                - "Compare two company credit report providers on cost and coverage"
                - "Write thresholds for partner approval and money on account"
                - "Add the credit step to the acceptance form and brief the intake team"
            - name: Billing contact and purchase order details at intake
              description: |-
                ## Purpose
                Corporate clients often reject or park invoices that lack a purchase order number, the right cost centre or a portal submission, and the first anyone hears of it is at 60 days. Capturing the accounts payable contact, PO requirements and supplier portal details when the matter opens stops avoidable delays before the first invoice is sent.

                ## Milestones
                1. Fields for billing contact, PO number and portal details added to matter opening.
                2. Existing top 20 clients checked and their billing details completed.
                3. A rule that no invoice goes to a PO client without the PO number.
                4. Supplier portal registrations listed with logins held by the billing team.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Matter opening captures billing contact and PO details, and the top 20 clients all have complete billing records."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Add billing contact, PO and portal fields to the matter opening form"
                - "Email the top 20 clients to confirm their invoice requirements"
                - "List every supplier portal the firm must submit invoices through"
                - "Brief the billing team that PO invoices need the number before release"
            - name: What a day of lockup costs the practice
              description: |-
                ## Purpose
                Lockup feels abstract until it is priced. Dividing annual fees by 365 shows the cash held by each day of lockup, and applying the overdraft rate or the return partners could earn elsewhere turns a 20-day reduction into a sum everyone understands.

                ## Milestones
                1. Annual fee income divided by 365 to give the value of one day of lockup.
                2. The cost of carrying that cash worked out at the firm's borrowing rate.
                3. The cash released by hitting the agreed target stated in one sentence.
                4. The figures presented at a partners' meeting.

                ## Notes
                Keep the sum simple. The point is a figure that sticks, such as one day of lockup equals a month of rent.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A short note states the cash value of one day of lockup and the carrying cost at the firm's borrowing rate, presented to the partners."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Divide last year's fee income by 365"
                - "Find the interest rate on the overdraft or main borrowing"
                - "Work out the cash released by reaching the lockup target"
                - "Put the three figures on one slide for the partners"
            - name: Clean-up of stale WIP and uncollectable debts
              description: |-
                ## Purpose
                Old balances inflate lockup and distort every report: WIP from a matter closed two years ago, an invoice to a company that has since dissolved. A one-time review of every WIP balance and debt over twelve months old, with each one either billed, chased, written off or provided for, resets the books so the figures reflect money that can still be collected.

                ## Milestones
                1. A list of every WIP balance and invoice older than twelve months, with responsible partner.
                2. A decision recorded for each: bill, chase, write off or provide for.
                3. Write-offs approved under the firm's authority limits and posted.
                4. Lockup recalculated after the clean-up and the change noted.

                ## Notes
                Talk to your accountant before writing off large sums, because the timing can matter for the accounts and tax. Writing off does not stop you pursuing the debt later.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every WIP balance and debt over twelve months old has a recorded decision, approved write-offs are posted and lockup is recalculated."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Run the ageing reports filtered to items older than twelve months"
                - "Send each partner their list with a two-week deadline for decisions"
                - "Get write-offs approved within the authority limits and post them"
                - "Recalculate lockup and record the before and after figures"
            - name: Lockup checks on matter closure
              description: |-
                ## Purpose
                Matters are often closed in the system with small WIP balances or unpaid disbursements left behind, which sit in the reports for years. A short closure checklist, final bill raised, WIP nil, disbursements recovered and debt cleared or assigned, keeps closed matters from quietly inflating lockup.

                ## Milestones
                1. A closure checklist with four lockup checks written.
                2. The checklist built into the matter closure step in the practice system.
                3. A sample of last quarter's closed matters checked for leftover balances.
                4. Leftover balances found in the sample cleared.

                ## Notes
                Start from the **Operational checklist** template.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Matter closure requires the four lockup checks, and a sample of recently closed matters has no leftover WIP or disbursements."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the four lockup checks for matter closure"
                - "Add the checks to the closure step in the practice system"
                - "Sample twenty matters closed last quarter for leftover balances"
                - "Clear or bill the leftover balances found"
            - name: Weekly aged debt chase list
              description: |-
                ## Purpose
                Most overdue invoices are paid within days of a polite, specific reminder; the ones that become bad debts are usually the ones nobody chased for three months. A short weekly list of every invoice past due, with the next action and who takes it, keeps debtor days falling without a big campaign.

                ## Milestones
                1. A chase list produced every week from the debtor ageing report.
                2. Every overdue invoice showing its last contact and next action.
                3. Items at partner level on the escalation ladder flagged to the partner by name.
                4. Debtor days tracked week to week on the same sheet.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A chase list is produced every week for twelve consecutive weeks, with every overdue invoice showing a dated next action."
                cadence: rolling
              tasks:
                - "Produce the chase list from the debtor ageing report @recurring(weekly:tue)"
                - "Record the last contact and next action against each overdue invoice"
                - "Send partners the items that have reached their step on the ladder"
                - "Note this week's debtor days at the foot of the list"
            - name: Monthly WIP review with each partner
              description: |-
                ## Purpose
                Unbilled work grows quietly because fee earners would rather do the next piece of work than bill the last one. A fifteen-minute monthly review of each partner's WIP over 60 days, asking what stops each item being billed and when it will be, moves time into invoices far more reliably than reminders.

                ## Milestones
                1. A fifteen-minute slot in each partner's diary every month.
                2. Every WIP item over 60 days discussed with a billing date or a write-off decision.
                3. Agreed billing dates recorded and checked at the next review.
                4. WIP days by partner tracked month on month.

                ## Notes
                Run the review in the first week of the month, before the billing run, so agreed bills actually go out that month.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each partner has a WIP review every month for six months, with a billing date or write-off recorded for every item over 60 days."
                cadence: rolling
              tasks:
                - "Book a recurring fifteen-minute WIP slot with each partner"
                - "Hold the WIP review for items over 60 days @recurring(monthly:4)"
                - "Record the billing date or write-off agreed for each item"
                - "Check last month's promised bills were raised before the review"
            - name: Monthly lockup report to the partners
              description: |-
                ## Purpose
                Partners act on what they see every month. A one-page report showing WIP days, debtor days and total lockup against target, by partner and work type, with the ten largest old balances named, makes lockup a standing item instead of an occasional worry.

                ## Milestones
                1. A one-page layout agreed with WIP days, debtor days, total lockup and targets.
                2. The ten largest balances over 90 days listed by name.
                3. A three-line commentary explaining the month's movement.
                4. The report circulated within six working days of each month end.

                ## Notes
                Start from the **Metrics log** template to keep the monthly figures in one running table.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A one-page lockup report against targets reaches the partners within six working days of month end for six consecutive months."
                cadence: rolling
              tasks:
                - "Agree the one-page layout with the managing partner"
                - "Produce and circulate the lockup report @recurring(monthly:6)"
                - "Write three lines on what moved and why"
                - "Name the ten largest balances over 90 days"
            - name: Unbilled WIP threshold alerts
              description: |-
                ## Purpose
                Large matters can build up tens of thousands in unbilled time before the monthly review catches it. A weekly alert for any matter whose unbilled WIP passes a set value or a set age prompts an interim bill while the work is fresh in the client's mind and the budget conversation is still easy.

                ## Milestones
                1. A value threshold and an age threshold set for unbilled WIP.
                2. A weekly saved report or alert listing matters that cross either threshold.
                3. Each flagged matter given a billing decision by its partner within the week.
                4. The thresholds reviewed after three months and adjusted if they flag too much or too little.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly alert of matters over the WIP thresholds runs for three months, with a recorded billing decision on every flagged matter."
                cadence: rolling
              tasks:
                - "Choose a value and an age threshold for unbilled WIP"
                - "Set up a saved report of matters over either threshold"
                - "Send flagged matters to their partners for a billing decision @recurring(weekly:thu)"
                - "Review the thresholds after three months of alerts"
            - name: Monthly statements of account
              description: |-
                ## Purpose
                Clients who receive several invoices a month lose track of what is outstanding, and a single statement often surfaces a payment that was missed rather than refused. Sending every client with an open balance a monthly statement, showing each invoice, its age and how to pay, catches forgotten items early and starts the conversation on queries.

                ## Milestones
                1. A statement layout with invoice numbers, dates, ages and payment details.
                2. A list of clients with open balances generated each month.
                3. Statements sent to the billing contact on file, not just the matter contact.
                4. Queries raised by statements logged and resolved.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every client with an open balance receives a statement each month for six months, and every query it raises is logged."
                cadence: rolling
              tasks:
                - "Check the statement layout shows ages and payment details"
                - "Send statements to every client with an open balance @recurring(monthly:25)"
                - "Log any query a statement raises against the invoice"
            - name: Unallocated cash and remittance matching
              description: |-
                ## Purpose
                A payment received without a reference can sit in a suspense account for weeks while the invoice it settles keeps being chased, which irritates clients and overstates debtors. A Friday check that matches every unallocated receipt to an invoice, or asks the payer what it covers, keeps the debtor ledger accurate and the chasing credible.

                ## Milestones
                1. Unallocated receipts listed every Friday from the bank and the ledger.
                2. Each receipt matched to an invoice or the payer contacted.
                3. No receipt left unallocated for more than two weeks.
                4. Chasing paused on any invoice with a matching unallocated payment.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Unallocated receipts are cleared every week for three months, with none older than two weeks at any month end."
                cadence: rolling
              tasks:
                - "List every unallocated receipt in the bank and ledger @recurring(weekly:fri)"
                - "Match each receipt to an invoice using amount, date and payer"
                - "Email payers whose receipts cannot be matched"
                - "Flag matched invoices so the chase list skips them"
            - name: Quarterly bad debt provision review
              description: |-
                ## Purpose
                Debts that will probably never be paid still sit in the balance sheet as assets unless someone decides otherwise, and the partners' drawings may be based on profit that will not arrive. A quarterly review of old debts, with a provision agreed for the doubtful ones, keeps reported profit honest and gives your accountant a clear basis at year end.

                ## Milestones
                1. A list of debts over 120 days with a note on each client's circumstances.
                2. A provision percentage agreed for each doubtful debt with the responsible partner.
                3. The provision posted and the movement explained in the quarter's accounts.
                4. The method checked with the external accountant once a year.

                ## Notes
                Your accountant will advise on how provisions are treated for tax in your jurisdiction. The aim here is an honest figure, not a tax position.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A provision for doubtful debts is reviewed and posted each quarter, with the reasoning for every debt over 120 days recorded."
                cadence: cyclic
              tasks:
                - "Review every debt over 120 days and set its provision @recurring(quarterly)"
                - "Note the client's circumstances against each doubtful debt"
                - "Post the provision and record the movement for the quarter"
                - "Send the provisioning method to the external accountant for comment"
            - name: Disputed invoice log
              description: |-
                ## Purpose
                A disputed invoice is not a slow payer and chasing it as one damages the relationship. Logging every query with its reason, amount, owner and target date, and reviewing the log each Monday, separates real disputes from excuses and shows which kinds of work or which partners attract the most challenges.

                ## Milestones
                1. A log with client, invoice, amount disputed, reason, owner and target date.
                2. Every open query reviewed weekly and either resolved or escalated.
                3. Reasons grouped after three months to show the common causes.
                4. One change made to billing practice in response to the commonest cause.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every disputed invoice is logged with a reason and owner, the log is reviewed weekly for three months and one cause has been addressed."
                cadence: rolling
              tasks:
                - "Set up the disputed invoice log with reason and owner columns"
                - "Review every open query and its next step @recurring(weekly:mon)"
                - "Group the reasons after three months of entries"
                - "Agree one billing change that removes the commonest cause"
            - name: Client payment plan register
              description: |-
                ## Purpose
                Clients who cannot pay in full may well pay in instalments, but an agreement made on a phone call and never recorded is easily forgotten by both sides. A register of every payment plan, with amounts, dates and what happens on a missed payment, turns goodwill into cash and stops plans drifting.

                ## Milestones
                1. A standard payment plan letter setting out instalments and the consequence of a missed payment.
                2. A register of every active plan with dates and amounts due.
                3. Missed instalments followed up within three working days.
                4. Plans reviewed with the responsible partner if two instalments are missed.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every payment plan is confirmed in writing and held in a register that is checked monthly for missed instalments."
                cadence: rolling
              tasks:
                - "Draft a standard payment plan confirmation letter"
                - "Enter every current instalment arrangement in the register"
                - "Check the register for missed instalments @recurring(monthly:15)"
                - "Refer any plan with two missed payments to the responsible partner"
            - name: Quarterly top-client lockup review
              description: |-
                ## Purpose
                In most practices a handful of clients account for half of all lockup, often the largest and most valued ones, whose own payment cycles quietly set the firm's cash position. Reviewing the top twenty clients by WIP plus debt every quarter, with the relationship partner, opens the right conversations about billing frequency, terms and money on account.

                ## Milestones
                1. The top twenty clients ranked by combined WIP and debt.
                2. Each client's average days to pay calculated from the last year of invoices.
                3. A specific action agreed for each of the top five.
                4. The actions checked at the following quarter's review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter the top twenty clients by lockup are reviewed, with a recorded action and outcome for each of the top five."
                cadence: cyclic
              tasks:
                - "Rank clients by combined WIP and debt @recurring(quarterly)"
                - "Calculate each top client's average days to pay"
                - "Agree an action for each of the top five with their partner"
                - "Check last quarter's actions before agreeing new ones"
            - name: Making the collection call
              description: |-
                ## Purpose
                Many professionals will spend an afternoon on a client's problem but freeze at a two-minute call about an overdue fee. Learning a simple structure for the call, confirming the invoice was received, asking whether anything stops payment and agreeing a date, makes it routine and keeps the relationship intact.

                ## Milestones
                1. A one-page call outline with an opening, the three questions and a close.
                2. Three practice calls role-played with a colleague.
                3. Ten real collection calls made, each with an agreed payment date recorded.
                4. The outline adjusted after the first ten calls.

                ## Notes
                Ask for a specific date, not a promise to look into it. A date can be checked; good intentions cannot.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten collection calls have been made using a written outline, each ending with a payment date recorded in the chase list."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write a one-page outline for a collection call"
                - "Role-play three calls with a colleague playing a reluctant client"
                - "Make ten real calls and record each agreed payment date"
                - "Revise the outline based on what clients actually said"
            - name: Reading an aged debtor report
              description: |-
                ## Purpose
                The aged debtor report is the most useful document in credit control and the least read, because its columns look like an accountant's private language. Learning to read it, what the bands mean, how credit notes and unallocated cash distort it and which patterns signal trouble, lets every partner spot a problem client in a minute.

                ## Milestones
                1. The meaning of each column and band written in plain words on one page.
                2. Three distortions identified: unallocated cash, credit notes and disputed items.
                3. Warning patterns listed, such as a client moving from 30 to 60 days in one month.
                4. Every partner walked through their own report using the one-page guide.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page guide to the aged debtor report exists and every partner has used it to read their own report once."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Print the latest aged debtor report and annotate each column"
                - "Find one example each of unallocated cash, a credit note and a disputed item"
                - "Write a one-page guide with the warning patterns to look for"
                - "Walk each partner through their own report with the guide"
            - name: How WIP is valued in the accounts
              description: |-
                ## Purpose
                Unbilled work appears in the accounts at a value that may be well below its charge-out value, and the rules on how and when it is recognised affect reported profit, partner allocations and sometimes tax. Understanding the basis your accountant uses means partners are not surprised when profit on paper differs from the WIP report.

                ## Milestones
                1. The accounting basis for WIP in your accounts explained by your accountant in writing.
                2. The difference between charge-out value, cost value and recoverable value understood.
                3. The effect of a change in WIP on the year's reported profit shown with a worked example.
                4. A short note for partners on why the WIP report and the accounts figure differ.

                ## Notes
                Accounting and tax rules for WIP differ between countries and change over time. Treat the accountant's explanation as the source, not a general article.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page partner note, checked by the external accountant, explains how WIP is valued in the accounts and why it differs from the WIP report."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask the external accountant to explain the WIP valuation basis in writing"
                - "Work through last year's WIP figure from report value to accounts value"
                - "Write a one-page note for partners on the difference"
                - "Have the accountant check the note before circulating"
            - name: Chase letter and email sequence
              description: |-
                ## Purpose
                Writing each reminder from scratch means tone and timing vary by who is in the office, and an angry final letter can arrive before a polite first one. A set of five messages, from a friendly reminder at seven days overdue to a formal final notice, written once and approved by the partners, makes chasing consistent and quick.

                ## Milestones
                1. Five messages drafted for 7, 21, 35, 50 and 65 days overdue.
                2. Each message checked for tone, accuracy and any professional rule on demands.
                3. The final notice reviewed by a partner or adviser before use.
                4. All five saved as templates in the practice or accounting system.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Five approved chase messages covering 7 to 65 days overdue are saved as templates and used on every overdue invoice."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Collect the reminders the firm has sent in the last year"
                - "Ask the agent to draft five chase messages from friendly to formal"
                - "Have a partner check the tone and the final notice wording"
                - "Save the five messages as templates in the billing system"
            - name: Late payment interest and recovery rights
              description: |-
                ## Purpose
                Many jurisdictions give businesses a right to interest or fixed compensation on late commercial payments, and many practices never use it because nobody knows the rules. Finding out what applies to your clients, and whether your profession limits it, gives you an option to use selectively rather than a threat you cannot back up.

                ## Milestones
                1. The late payment rules that apply to your business clients identified from official guidance.
                2. Any restriction from your professional body on charging interest noted.
                3. A firm decision recorded on when interest will be claimed and when waived.
                4. The decision reflected in the engagement terms and the chase sequence.

                ## Notes
                This is for preparing a decision. Confirm the position with a lawyer before charging statutory interest, and treat consumer clients separately because different rules usually apply.
              priority: low
              frontmatter:
                mode: learning
                output_kind: decision
                success_criteria: "A recorded firm decision on claiming late payment interest, based on identified rules and checked with a lawyer, is reflected in the terms."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Find the official guidance on late commercial payment in your country"
                - "Check your professional body's rules on charging interest"
                - "Ask a lawyer to confirm how the rules apply to your clients"
                - "Record when the firm will claim interest and when it will waive it"
            - name: Negotiating terms with large corporate clients
              description: |-
                ## Purpose
                Large clients and public bodies often impose 60 or 90 day terms, supplier portals and procurement rules that can double lockup on their work. Preparing before the next panel appointment or framework renewal, with your own cost of their terms, the concessions you can offer and the ones you need, turns a take-it-or-leave-it moment into a negotiation.

                ## Milestones
                1. The lockup on each large client's work calculated from the last year.
                2. The cost of their payment terms expressed in cash and in days.
                3. A list of asks, such as monthly billing, faster approval or a shorter period, and trade-offs you can offer.
                4. Terms renegotiated or the decision to accept them recorded with the reasons.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: learning
                output_kind: decision
                success_criteria: "For at least one large client, the cost of its terms is calculated and a renegotiation or a reasoned decision to accept is recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List large clients whose terms exceed your standard payment period"
                - "Calculate the lockup and cost of each client's terms"
                - "Prepare the asks and the concessions you can offer"
                - "Raise terms at the next panel review or renewal meeting"
            - name: Lockup briefing for fee earners
              description: |-
                ## Purpose
                Associates and juniors rarely see the firm's cash, so they do not connect late time entry, slow drafting of bills or an unchallenged client delay with the partners' drawings or their own bonus. A forty-minute briefing, using the firm's own figures, shows how their daily habits move lockup and what is expected of them.

                ## Milestones
                1. A short slide set using the firm's own lockup figures and the value of one day.
                2. Three behaviours named that each fee earner controls.
                3. The briefing delivered to all fee earners.
                4. The briefing added to the induction for new joiners.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "All fee earners have attended a lockup briefing using the firm's figures, and it is part of new joiner induction."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pick the firm figures that show the cost of lockup most clearly"
                - "Name the three habits each fee earner controls"
                - "Deliver the briefing at a team meeting"
                - "Add the slides to the new joiner induction pack"
            - name: Ninety-day lockup reduction campaign
              description: |-
                ## Purpose
                Lockup that has crept up for years rarely comes down through routine alone. A focused ninety-day campaign, with a target number of days, a named list of the largest old WIP and debts, weekly progress checks and a partner leading it, can release a meaningful amount of cash and reset everyone's expectations.

                ## Milestones
                1. A campaign target in days and in cash, agreed by the partners.
                2. A named list of the fifty largest old WIP and debt items with owners.
                3. Weekly progress figures recorded for thirteen weeks.
                4. A closing report showing cash released and the habits that will be kept.

                ## Notes
                Start from the **Remediation plan** template. Tell clients nothing about a campaign: to them it should feel like ordinary, prompt billing and follow-up.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A ninety-day campaign is completed with weekly figures recorded and a closing report showing the lockup days and cash released."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Agree the campaign target in days and cash with the partners"
                - "List the fifty largest old WIP and debt items with an owner each"
                - "Record campaign progress against the target @recurring(weekly:wed)"
                - "Write the closing report with cash released and habits kept"
            - name: Money on account policy for new matters
              description: |-
                ## Purpose
                Asking for money on account at the start of a matter is the single most effective protection against WIP that never gets paid, but partners apply it unevenly and some are embarrassed to ask. A written policy stating which work types and clients require it, how much and when it is topped up makes it a firm rule rather than a personal request.

                ## Milestones
                1. Work types and client types that require money on account listed.
                2. A default amount or formula for each, such as the first month's expected fees.
                3. Wording for the engagement letter and the request email agreed.
                4. The policy applied to every new qualifying matter from a set date.

                ## Notes
                Money received on account usually has to be held as client money until billed. Follow your client account rules and your regulator's guidance on handling it.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written money on account policy covering work types, amounts and top-ups is adopted and applied to every qualifying new matter."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the work types where unpaid WIP has been worst"
                - "Propose a money on account amount for each"
                - "Draft the engagement wording and request email"
                - "Agree the policy and its start date at a partners' meeting"
            - name: Online payment links on invoices
              description: |-
                ## Purpose
                Every extra step between reading an invoice and paying it costs days, and many small clients would pay at once by card or instant bank transfer if they could. Choosing a payment provider that puts a pay-now link on every invoice, and weighing its fees against the days saved, is one of the quickest ways to cut debtor days on smaller balances.

                ## Milestones
                1. Two or three payment providers compared on fees, payout time and fit with the billing system.
                2. A decision on who bears card fees, checked against local rules on surcharging.
                3. Pay-now links live on every invoice and statement.
                4. Debtor days on small invoices compared before and after three months.

                ## Notes
                Start from the **Purchase decision** template. Card payments of fees into the office account and into the client account follow different rules, so set them up separately.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A payment provider is chosen on recorded criteria and pay-now links appear on every invoice, with debtor days compared after three months."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the payment methods clients ask about most often"
                - "Compare two or three providers on fees, payout time and integration"
                - "Check the local rules on passing card fees to clients"
                - "Switch on pay-now links for all invoices and statements"
            - name: Direct debit for fixed monthly fee clients
              description: |-
                ## Purpose
                Accounting and advisory firms with monthly fixed fees often still send an invoice and wait, when a mandate signed once would collect the fee on the same day every month. Moving fixed-fee clients to direct debit or a standing collection removes most of their debtor days entirely and frees credit control to focus on harder cases.

                ## Milestones
                1. Clients on fixed monthly fees listed with their current days to pay.
                2. A collection provider chosen and set up with the bank.
                3. Mandates signed by at least half of fixed-fee clients.
                4. A monthly check for failed collections running.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "At least half of fixed monthly fee clients pay by direct debit, and failed collections are checked each month."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List every client on a fixed monthly fee"
                - "Set up a direct debit or standing collection service with the bank"
                - "Send mandate forms with a short note on the convenience"
                - "Check for and follow up failed collections @recurring(monthly:8)"
            - name: Stop-work and file release rules for unpaid fees
              description: |-
                ## Purpose
                Carrying on with work for a client who has not paid for months only grows the debt, but stopping abruptly can breach professional duties or harm the client. Agreeing in advance when the practice will pause new work, how notice is given and what professional rules say about holding files makes the decision calm and defensible when it comes.

                ## Milestones
                1. Your professional body's rules on ceasing to act and on holding files summarised.
                2. Triggers agreed for pausing new work, such as debt over 90 days above a set amount.
                3. Notice wording drafted, including what work will continue to protect the client.
                4. Partner sign-off required before any pause, recorded in the policy.

                ## Notes
                Some professions limit or forbid holding files or deliverables against unpaid fees, and courts may have rules on ending a retainer mid-case. Take advice before relying on any lien.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written stop-work policy with triggers, notice wording and partner sign-off, consistent with the profession's rules, is adopted."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Read your professional body's guidance on ceasing to act"
                - "Propose the debt age and amount that trigger a pause"
                - "Draft the notice to the client with the work that will continue"
                - "Adopt the policy with partner sign-off required for each use"
            - name: Choosing a collection agency or debt recovery firm
              description: |-
                ## Purpose
                Some debts will not be paid without outside pressure, and partners spend hours they cannot bill trying. Choosing a collection agency or debt recovery solicitor in advance, on fees, approach and how they treat clients you may want back, means old debts can be handed over promptly instead of ageing further.

                ## Milestones
                1. Two or three agencies or firms compared on fees, approach and reporting.
                2. Terms agreed with one, including commission or fixed fees.
                3. A rule for which debts are referred, by age and amount.
                4. A quarterly check of referred accounts and amounts recovered.

                ## Notes
                Start from the **Vendor** template. Check that referring a client's details to an agency is allowed under your confidentiality duties and your engagement terms.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One recovery provider is appointed on recorded terms, with a written referral rule and a quarterly check of results."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask peer firms which recovery agencies they use"
                - "Compare two or three on fees, approach and reporting"
                - "Write the age and amount rule for referring a debt"
                - "Check the results on referred accounts @recurring(quarterly)"
            - name: Lockup in the partner scorecard
              description: |-
                ## Purpose
                Partners are rewarded on fees billed or work won, so a partner who bills slowly and never chases may still look like the best performer. Adding each partner's lockup to the scorecard used for profit share or bonus discussions, at a weight the partners agree, makes collecting cash part of the job rather than someone else's problem.

                ## Milestones
                1. Each partner's lockup over the last year calculated on the agreed formula.
                2. A proposal for how lockup is weighted in the partner scorecard.
                3. The proposal discussed and decided at a partners' meeting.
                4. Lockup shown on every partner's scorecard from the next review.

                ## Notes
                Lockup should inform the profit share discussion, not mechanically decide it. A partner on a long-running matter can carry high lockup for good reason.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The partners have recorded a decision on how lockup appears in the partner scorecard, and it is on every scorecard at the next review."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Calculate each partner's lockup for the last year"
                - "Draft a proposal for weighting lockup in the scorecard"
                - "Discuss and decide the proposal at a partners' meeting"
                - "Add lockup to each partner's scorecard"
            - name: Funding third-party costs and disbursements
              description: |-
                ## Purpose
                Expert fees, court or filing fees, specialist sub-consultants and search costs paid by the practice and recharged later can quietly become the firm's loan to the client. Deciding when the client pays third parties directly, when funds are needed in advance and how fast recharges are billed stops disbursements adding to lockup.

                ## Milestones
                1. The last year's unrecovered and slow-recovered disbursements totalled.
                2. A threshold above which the client pays the third party directly or funds in advance.
                3. A rule that disbursements are billed within a set number of days of being paid.
                4. The rules written into the engagement terms and the billing policy.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written rules on advance funding and billing of disbursements are in the engagement terms, with the previous year's unrecovered total recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Total last year's disbursements and how long each took to recover"
                - "Set the amount above which funds are needed in advance"
                - "Agree the number of days within which disbursements are billed"
                - "Add the disbursement rules to the engagement terms"
            - name: Year-end WIP count and debtor cut-off
              description: |-
                ## Purpose
                Year-end WIP and debtor figures feed the accounts, the partners' profit allocation and any lender reporting, so errors here last all year. Preparing a proper count, with all time entered, WIP reviewed matter by matter and invoices cut off on the right date, makes the year-end close faster and the accountant's questions fewer.

                ## Milestones
                1. All fee earners' time entered up to the year-end date.
                2. Every matter with WIP reviewed by its partner for recoverable value.
                3. Invoices and receipts cut off correctly on the year-end date.
                4. A WIP and debtor schedule handed to the accountant with the review notes.

                ## Notes
                Start from the **Month-end close** template and extend it for the year-end steps.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A reviewed year-end WIP and debtor schedule, with partner notes on recoverability, reaches the accountant within ten working days of year end."
                cadence: cyclic
                effort_hours_estimate: "12"
              tasks:
                - "Set the year-end timetable for time entry and WIP review @recurring(yearly)"
                - "Send each partner their WIP schedule to mark for recoverable value"
                - "Check invoice and receipt cut-off around the year-end date"
                - "Hand the WIP and debtor schedule to the accountant"
            - name: Pre-holiday billing and collection push
              description: |-
                ## Purpose
                Clients' finance teams close early for the year-end holidays and many pay only what is approved before they go, so invoices sent in mid December may not be paid until February. Billing early and confirming approvals with large clients in late November protects cash over the quietest weeks of the year.

                ## Milestones
                1. The date each large client's finance team stops processing payments found.
                2. All WIP that can be billed before the holidays billed by that date.
                3. Approval confirmed for every large invoice due over the holiday period.
                4. Cash received in the holiday month compared with last year.

                ## Notes
                Shift the timing to your own country's main holiday or financial year end if it differs.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Holiday-period invoices are issued before clients' payment cut-offs, and cash received that month is compared with last year."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Ask large clients when their last payment run before the holidays is @recurring(yearly)"
                - "Bring forward billing of WIP that can go before those dates"
                - "Confirm approval of large invoices with clients' accounts teams"
                - "Compare holiday-month cash received with last year"
            - name: Bank or lender review of the debtor book
              description: |-
                ## Purpose
                Overdraft renewals and practice loans often come with a review of debtors and WIP, and a lender who sees rising lockup may cut the facility just when it is needed. Preparing the ageing reports, lockup trend and an explanation of large old balances before the meeting puts the practice in charge of the story.

                ## Milestones
                1. The lender's information request and covenant terms reviewed.
                2. Ageing reports, lockup trend and a cash forecast prepared.
                3. A short explanation of any large old balance and the action on it.
                4. The meeting held and any conditions or changes recorded.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A lender pack with ageing reports, lockup trend and forecast is delivered before the review, and the outcome is recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Find the facility renewal date and the lender's information request"
                - "Prepare ageing reports and the twelve-month lockup trend"
                - "Write a note on each large old balance and its action"
                - "Record the lender's conditions after the meeting"
            - name: Taking a debt to small claims or court
              description: |-
                ## Purpose
                When chasing, a final notice and a recovery agency have failed, a claim through a small claims track or court may be the only route left, and it is often cheaper and quicker than partners fear. Preparing the evidence, the engagement letter, invoices, chase history and any acknowledgement of the debt, means the claim can be made properly or dropped on a clear-eyed view of the cost.

                ## Milestones
                1. The debt, its age and the evidence file assembled.
                2. The court or tribunal route and its fee and limits confirmed from official guidance.
                3. A decision recorded, with a lawyer's input where needed, on whether to claim.
                4. The claim filed or the debt written off with the reasons noted.

                ## Notes
                Rules, limits and fees differ by country and change often. Check the official court guidance and take legal advice; suing a client may also have professional conduct implications.
              priority: low
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "For a chosen debt, an evidence file is assembled and a recorded decision to file a claim or write it off is made."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Assemble the engagement letter, invoices and full chase history"
                - "Check the official court guidance for the claim route and fees"
                - "Decide with a lawyer whether to proceed"
                - "File the claim or write off the debt and note the reason"
            - name: When a client becomes insolvent
              description: |-
                ## Purpose
                Insolvency of a client, whether administration, liquidation or bankruptcy, can take months of WIP and debt with it, and acting fast decides whether anything is recovered. Knowing the steps, stopping new unpaid work, identifying the insolvency practitioner, filing a claim on time and posting the right provision, limits the loss.

                ## Milestones
                1. WIP and debt owed by the client totalled the day the insolvency is known.
                2. New work paused unless the insolvency practitioner agrees to pay for it.
                3. A claim submitted to the insolvency practitioner by their deadline.
                4. The balance provided for or written off on your accountant's advice.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "On a client insolvency, the claim is filed by the deadline and the balance provided for, with the steps recorded on the file."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Total the WIP and debt owed by the insolvent client"
                - "Pause new work and tell the team why"
                - "Find the insolvency practitioner and the claim deadline"
                - "Submit the claim and post the provision"
            - name: Lockup routine for a sole practitioner
              description: |-
                ## Purpose
                Sole practitioners are fee earner, biller and credit controller at once, and billing is the job that slips when client work is busy. A fixed hour each month to bill all WIP, send statements and make the chase calls, plus a short weekly check, keeps cash moving without hiring help.

                ## Milestones
                1. A fixed monthly billing hour in the diary that client work does not displace.
                2. All billable WIP billed in that hour each month.
                3. A weekly ten-minute check of overdue invoices.
                4. Lockup tracked monthly against a personal target.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A sole practitioner holds a monthly billing hour for six months, with lockup recorded each month against a personal target."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Choose a monthly billing hour and block it in the diary"
                - "Bill all WIP and send statements in the billing hour @recurring(monthly:27)"
                - "Spend ten minutes each week on overdue invoices"
                - "Set a personal lockup target and record the monthly figure"
            - name: Payment applications and retentions for design firms
              description: |-
                ## Purpose
                Engineering consultancies and architecture studios are often paid by stage or by application under a contract, with retentions held back until completion or the end of a defects period, and missed application dates delay cash by a whole month. A calendar of application dates, a log of retentions due and a check that each is claimed on time stops large sums being forgotten.

                ## Milestones
                1. Every active appointment listed with its fee stages, application dates and payment periods.
                2. A retention log showing amount held, release trigger and expected date.
                3. Applications submitted on each contract's date with the supporting evidence.
                4. Retentions claimed as soon as their trigger occurs.

                ## Notes
                Read each appointment's payment clauses rather than assuming a standard form. Some contracts require a payment notice by a specific day and lose the right to dispute if it is missed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All active appointments have dated applications and a retention log, and no application or retention release is missed for six months."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List every appointment's fee stages and payment application dates"
                - "Build a retention log with release triggers and expected dates"
                - "Submit applications for payment due this month @recurring(monthly:20)"
                - "Claim each retention as soon as its trigger occurs"
            - name: Seasonal lockup in an accounting firm
              description: |-
                ## Purpose
                Accounting firms build huge WIP in the weeks before tax and filing deadlines and often bill it weeks later, once the pressure has passed and memories have faded. Planning billing for the busy season, with fixed fees invoiced on completion, monthly fees collected through the year and a post-deadline billing sprint, prevents the annual cash squeeze.

                ## Milestones
                1. WIP and debtor peaks over the last two busy seasons charted.
                2. Fixed fee jobs set to bill on completion rather than at the end of the season.
                3. A billing sprint planned for the week after the main deadline.
                4. Lockup at the season's peak compared with the previous year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Peak season lockup is lower than the previous year, with bill-on-completion in place and a post-deadline billing sprint held."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Chart WIP and debtors over the last two busy seasons"
                - "Set fixed fee jobs to bill on completion in the practice system"
                - "Hold a billing sprint after the main filing deadline @recurring(yearly)"
                - "Compare this season's peak lockup with last year's"
            - name: Long-running and contingent matters in a law firm
              description: |-
                ## Purpose
                Litigation, contingency or conditional fee work and publicly funded cases can carry WIP for years before any payment, and a few such matters can dominate a small firm's lockup. Tracking these separately, with expected payment dates, interim payment options and a cap on how much the firm will carry, keeps the rest of the practice from funding them unknowingly.

                ## Milestones
                1. Long-running and contingent matters listed with WIP, expected outcome date and funding route.
                2. Interim payment or funding options checked for each where the rules allow.
                3. A firm-wide cap on WIP carried in such matters agreed by the partners.
                4. These matters shown as a separate line in the lockup report.

                ## Notes
                Rules on contingency and conditional fees, and on interim payments from funders or the state, vary by jurisdiction. Check the current rules before relying on any option.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Long-running and contingent matters are listed separately in the lockup report and a partner-agreed cap on carried WIP is recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List every long-running or contingent matter with its WIP"
                - "Note the expected outcome date and funding route for each"
                - "Agree a cap on the total WIP the firm will carry"
                - "Add these matters as a separate line in the lockup report"
            - name: Lockup during rapid growth or a new office
              description: |-
                ## Purpose
                Hiring fee earners or opening a new office means paying salaries for months before the extra work is billed and collected, so growth can drain cash even when it is profitable. Modelling the lockup on new work before committing, and watching the new team's WIP and debtors closely in the first year, keeps growth from becoming a cash crisis.

                ## Milestones
                1. The cash needed to fund lockup on the planned new fee income calculated.
                2. That funding identified, from reserves, partner capital or a facility.
                3. The new team or office given its own lockup target and line in the report.
                4. Lockup on the new work reviewed monthly for the first twelve months.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Before a hire or new office, the lockup funding need is calculated and funded, and the new work has its own monthly lockup line."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Estimate the extra annual fee income from the planned growth"
                - "Calculate the cash tied up at the firm's current lockup days"
                - "Identify where that funding will come from"
                - "Give the new team its own lockup line in the monthly report"
            - name: Lockup in the cash flow forecast
              description: |-
                ## Purpose
                Cash forecasts that simply assume invoices are paid in 30 days will be wrong every month in a practice with 75 debtor days. Building the forecast from the actual WIP and debtor ageing, with the firm's real conversion rates from WIP to bill and from bill to cash, gives partners a reliable view of drawings, tax payments and quiet months.

                ## Milestones
                1. Historical rates calculated for how fast WIP is billed and invoices are paid.
                2. A thirteen-week forecast built from the current ageing and those rates.
                3. Forecast compared with actual receipts each month and the rates adjusted.
                4. Partner drawings and tax payments planned from the forecast.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A thirteen-week cash forecast driven by WIP and debtor ageing is updated monthly and compared with actual receipts for six months."
                cadence: rolling
              tasks:
                - "Calculate how long WIP takes to be billed and invoices to be paid"
                - "Build a thirteen-week forecast from the current ageing reports"
                - "Update the forecast and compare it with actual receipts @recurring(monthly:10)"
                - "Share the forecast with partners before drawings are set"
            - name: Invoice finance and fee funding options
              description: |-
                ## Purpose
                Some practices borrow against their debtor book or offer clients fee funding, where a lender pays the firm and the client repays in instalments. Understanding how these work, what they cost and what lenders require before cash is tight means the choice is made calmly, with an adviser, rather than in a crisis.

                ## Milestones
                1. The main options listed: overdraft, invoice finance, fee funding for clients and partner capital.
                2. Indicative costs and conditions for each gathered from at least two providers.
                3. Implications for client confidentiality and professional rules noted.
                4. A recommendation reviewed with your accountant or financial adviser.

                ## Notes
                This prepares a decision; it is not a recommendation to borrow. Have your accountant or adviser review any facility before signing.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A comparison of at least three working capital options with costs and conditions is reviewed with the firm's accountant and a decision recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the working capital options available to the practice"
                - "Request indicative terms from at least two providers"
                - "Note confidentiality and professional rule implications of each"
                - "Review the comparison with your accountant and record the decision"
            - name: Lockup benchmarking against peer firms
              description: |-
                ## Purpose
                Without a comparison, partners cannot tell whether 110 days is a problem or normal for their work. Gathering benchmark figures from professional body surveys, accountancy firms that serve your profession and peer practices willing to share gives the target a sound basis and shows where the firm sits.

                ## Milestones
                1. At least two published benchmark sources for your profession found.
                2. Two or three peer practices approached for an informal, anonymous comparison.
                3. The firm's lockup compared on the same definitions where possible.
                4. Targets revisited in light of the comparison.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The firm's lockup is compared with at least two benchmark sources each year, and the targets are revisited with the comparison noted."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Find professional body or adviser surveys that report lockup"
                - "Ask two peer practices to compare figures anonymously"
                - "Compare the firm on matching definitions and update the benchmark note @recurring(yearly)"
                - "Bring the comparison to the next target review"
            - name: Sizing working capital from lockup
              description: |-
                ## Purpose
                The money tied up in lockup has to come from somewhere: partner capital, retained profit or borrowing. Calculating the working capital the firm actually needs at its target lockup, and comparing it with what partners have put in, gives a sound basis for capital contributions and shows how much a lockup reduction could return to partners.

                ## Milestones
                1. Working capital needed calculated from fees, lockup days and overhead timing.
                2. That figure compared with partner capital and current borrowing.
                3. The capital that could be released by reaching the lockup target shown.
                4. A paper for the partners on capital levels, reviewed by the accountant.

                ## Notes
                Any change to partner capital must follow the partnership or members' agreement. This project supplies the numbers for that discussion.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A partners' paper, checked by the accountant, sets out working capital needed at current and target lockup against partner capital and borrowing."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Calculate working capital needed at current and target lockup"
                - "Compare it with partner capital and borrowing on the balance sheet"
                - "Ask the agent to draft a short partners' paper from the figures"
                - "Have the accountant review the paper before the partners' meeting"
---

# Work in Progress and Lockup

This area is for the owner or partner of a law, accounting, engineering or architecture practice who suspects that months of fees are sitting in unbilled work and unpaid invoices instead of the bank. It starts with the foundations (a measured lockup baseline, one agreed formula, ageing reports, targets, payment terms, a credit control owner and a clean-up of stale balances), then the weekly and monthly routines that keep lockup down, the skills of reading the reports and asking for money, the decisions about money on account, payment methods, stop-work rules and collection help, dated events such as the year-end WIP count, variants for sole practitioners, engineering, accounting and law firms, and finally forecasting, benchmarking and working capital.

What repeats is a weekly chase list, a Friday check of unallocated cash, a Monday look at disputed invoices, a monthly WIP review with each partner, a monthly lockup report and statement run, quarterly provision and top-client reviews, and a yearly WIP count and pre-holiday push. The Metrics log, Remediation plan, Month-end close, Purchase decision, Vendor and Operational checklist templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
